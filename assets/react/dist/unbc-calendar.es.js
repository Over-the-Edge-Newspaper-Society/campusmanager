function lw(e, t) {
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
function om(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var sm = { exports: {} }, ca = {}, im = { exports: {} }, W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gs = Symbol.for("react.element"), uw = Symbol.for("react.portal"), cw = Symbol.for("react.fragment"), dw = Symbol.for("react.strict_mode"), fw = Symbol.for("react.profiler"), pw = Symbol.for("react.provider"), hw = Symbol.for("react.context"), mw = Symbol.for("react.forward_ref"), gw = Symbol.for("react.suspense"), yw = Symbol.for("react.memo"), vw = Symbol.for("react.lazy"), of = Symbol.iterator;
function xw(e) {
  return e === null || typeof e != "object" ? null : (e = of && e[of] || e["@@iterator"], typeof e == "function" ? e : null);
}
var am = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, lm = Object.assign, um = {};
function Zr(e, t, n) {
  this.props = e, this.context = t, this.refs = um, this.updater = n || am;
}
Zr.prototype.isReactComponent = {};
Zr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Zr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function cm() {
}
cm.prototype = Zr.prototype;
function uc(e, t, n) {
  this.props = e, this.context = t, this.refs = um, this.updater = n || am;
}
var cc = uc.prototype = new cm();
cc.constructor = uc;
lm(cc, Zr.prototype);
cc.isPureReactComponent = !0;
var sf = Array.isArray, dm = Object.prototype.hasOwnProperty, dc = { current: null }, fm = { key: !0, ref: !0, __self: !0, __source: !0 };
function pm(e, t, n) {
  var r, o = {}, s = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (s = "" + t.key), t) dm.call(t, r) && !fm.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps) for (r in a = e.defaultProps, a) o[r] === void 0 && (o[r] = a[r]);
  return { $$typeof: gs, type: e, key: s, ref: i, props: o, _owner: dc.current };
}
function ww(e, t) {
  return { $$typeof: gs, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function fc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === gs;
}
function Sw(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var af = /\/+/g;
function Wa(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Sw("" + e.key) : t.toString(36);
}
function ui(e, t, n, r, o) {
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
        case gs:
        case uw:
          i = !0;
      }
  }
  if (i) return i = e, o = o(i), e = r === "" ? "." + Wa(i, 0) : r, sf(o) ? (n = "", e != null && (n = e.replace(af, "$&/") + "/"), ui(o, t, n, "", function(u) {
    return u;
  })) : o != null && (fc(o) && (o = ww(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(af, "$&/") + "/") + e)), t.push(o)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", sf(e)) for (var a = 0; a < e.length; a++) {
    s = e[a];
    var l = r + Wa(s, a);
    i += ui(s, t, n, l, o);
  }
  else if (l = xw(e), typeof l == "function") for (e = l.call(e), a = 0; !(s = e.next()).done; ) s = s.value, l = r + Wa(s, a++), i += ui(s, t, n, l, o);
  else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function As(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return ui(e, r, "", "", function(s) {
    return t.call(n, s, o++);
  }), r;
}
function kw(e) {
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
var Be = { current: null }, ci = { transition: null }, bw = { ReactCurrentDispatcher: Be, ReactCurrentBatchConfig: ci, ReactCurrentOwner: dc };
function hm() {
  throw Error("act(...) is not supported in production builds of React.");
}
W.Children = { map: As, forEach: function(e, t, n) {
  As(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return As(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return As(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!fc(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
W.Component = Zr;
W.Fragment = cw;
W.Profiler = fw;
W.PureComponent = uc;
W.StrictMode = dw;
W.Suspense = gw;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bw;
W.act = hm;
W.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = lm({}, e.props), o = e.key, s = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, i = dc.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (l in t) dm.call(t, l) && !fm.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: gs, type: e.type, key: o, ref: s, props: r, _owner: i };
};
W.createContext = function(e) {
  return e = { $$typeof: hw, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: pw, _context: e }, e.Consumer = e;
};
W.createElement = pm;
W.createFactory = function(e) {
  var t = pm.bind(null, e);
  return t.type = e, t;
};
W.createRef = function() {
  return { current: null };
};
W.forwardRef = function(e) {
  return { $$typeof: mw, render: e };
};
W.isValidElement = fc;
W.lazy = function(e) {
  return { $$typeof: vw, _payload: { _status: -1, _result: e }, _init: kw };
};
W.memo = function(e, t) {
  return { $$typeof: yw, type: e, compare: t === void 0 ? null : t };
};
W.startTransition = function(e) {
  var t = ci.transition;
  ci.transition = {};
  try {
    e();
  } finally {
    ci.transition = t;
  }
};
W.unstable_act = hm;
W.useCallback = function(e, t) {
  return Be.current.useCallback(e, t);
};
W.useContext = function(e) {
  return Be.current.useContext(e);
};
W.useDebugValue = function() {
};
W.useDeferredValue = function(e) {
  return Be.current.useDeferredValue(e);
};
W.useEffect = function(e, t) {
  return Be.current.useEffect(e, t);
};
W.useId = function() {
  return Be.current.useId();
};
W.useImperativeHandle = function(e, t, n) {
  return Be.current.useImperativeHandle(e, t, n);
};
W.useInsertionEffect = function(e, t) {
  return Be.current.useInsertionEffect(e, t);
};
W.useLayoutEffect = function(e, t) {
  return Be.current.useLayoutEffect(e, t);
};
W.useMemo = function(e, t) {
  return Be.current.useMemo(e, t);
};
W.useReducer = function(e, t, n) {
  return Be.current.useReducer(e, t, n);
};
W.useRef = function(e) {
  return Be.current.useRef(e);
};
W.useState = function(e) {
  return Be.current.useState(e);
};
W.useSyncExternalStore = function(e, t, n) {
  return Be.current.useSyncExternalStore(e, t, n);
};
W.useTransition = function() {
  return Be.current.useTransition();
};
W.version = "18.3.1";
im.exports = W;
var x = im.exports;
const we = /* @__PURE__ */ om(x), mm = /* @__PURE__ */ lw({
  __proto__: null,
  default: we
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
var Cw = x, Pw = Symbol.for("react.element"), Ew = Symbol.for("react.fragment"), Tw = Object.prototype.hasOwnProperty, Nw = Cw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Dw = { key: !0, ref: !0, __self: !0, __source: !0 };
function gm(e, t, n) {
  var r, o = {}, s = null, i = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) Tw.call(t, r) && !Dw.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Pw, type: e, key: s, ref: i, props: o, _owner: Nw.current };
}
ca.Fragment = Ew;
ca.jsx = gm;
ca.jsxs = gm;
sm.exports = ca;
var p = sm.exports, ym = { exports: {} }, rt = {}, vm = { exports: {} }, xm = {};
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
      var $ = _ - 1 >>> 1, se = T[$];
      if (0 < o(se, j)) T[$] = j, T[_] = se, _ = $;
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
      e: for (var $ = 0, se = T.length, Pt = se >>> 1; $ < Pt; ) {
        var De = 2 * ($ + 1) - 1, Et = T[De], Ve = De + 1, F = T[Ve];
        if (0 > o(Et, _)) Ve < se && 0 > o(F, Et) ? (T[$] = F, T[Ve] = _, $ = Ve) : (T[$] = Et, T[De] = _, $ = De);
        else if (Ve < se && 0 > o(F, _)) T[$] = F, T[Ve] = _, $ = Ve;
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
  var l = [], u = [], c = 1, d = null, f = 3, g = !1, w = !1, y = !1, S = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(T) {
    for (var j = n(u); j !== null; ) {
      if (j.callback === null) r(u);
      else if (j.startTime <= T) r(u), j.sortIndex = j.expirationTime, t(l, j);
      else break;
      j = n(u);
    }
  }
  function k(T) {
    if (y = !1, v(T), !w) if (n(l) !== null) w = !0, O(b);
    else {
      var j = n(u);
      j !== null && I(k, j.startTime - T);
    }
  }
  function b(T, j) {
    w = !1, y && (y = !1, m(E), E = -1), g = !0;
    var _ = f;
    try {
      for (v(j), d = n(l); d !== null && (!(d.expirationTime > j) || T && !M()); ) {
        var $ = d.callback;
        if (typeof $ == "function") {
          d.callback = null, f = d.priorityLevel;
          var se = $(d.expirationTime <= j);
          j = e.unstable_now(), typeof se == "function" ? d.callback = se : d === n(l) && r(l), v(j);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var Pt = !0;
      else {
        var De = n(u);
        De !== null && I(k, De.startTime - j), Pt = !1;
      }
      return Pt;
    } finally {
      d = null, f = _, g = !1;
    }
  }
  var C = !1, P = null, E = -1, D = 5, N = -1;
  function M() {
    return !(e.unstable_now() - N < D);
  }
  function R() {
    if (P !== null) {
      var T = e.unstable_now();
      N = T;
      var j = !0;
      try {
        j = P(!0, T);
      } finally {
        j ? z() : (C = !1, P = null);
      }
    } else C = !1;
  }
  var z;
  if (typeof h == "function") z = function() {
    h(R);
  };
  else if (typeof MessageChannel < "u") {
    var B = new MessageChannel(), K = B.port2;
    B.port1.onmessage = R, z = function() {
      K.postMessage(null);
    };
  } else z = function() {
    S(R, 0);
  };
  function O(T) {
    P = T, C || (C = !0, z());
  }
  function I(T, j) {
    E = S(function() {
      T(e.unstable_now());
    }, j);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
    T.callback = null;
  }, e.unstable_continueExecution = function() {
    w || g || (w = !0, O(b));
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
    var $ = e.unstable_now();
    switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? $ + _ : $) : _ = $, T) {
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
    return se = _ + se, T = { id: c++, callback: j, priorityLevel: T, startTime: _, expirationTime: se, sortIndex: -1 }, _ > $ ? (T.sortIndex = _, t(u, T), n(l) === null && T === n(u) && (y ? (m(E), E = -1) : y = !0, I(k, _ - $))) : (T.sortIndex = se, t(l, T), w || g || (w = !0, O(b))), T;
  }, e.unstable_shouldYield = M, e.unstable_wrapCallback = function(T) {
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
})(xm);
vm.exports = xm;
var Aw = vm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rw = x, tt = Aw;
function A(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var wm = /* @__PURE__ */ new Set(), Wo = {};
function ir(e, t) {
  Fr(e, t), Fr(e + "Capture", t);
}
function Fr(e, t) {
  for (Wo[e] = t, e = 0; e < t.length; e++) wm.add(t[e]);
}
var Yt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), $l = Object.prototype.hasOwnProperty, jw = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, lf = {}, uf = {};
function Mw(e) {
  return $l.call(uf, e) ? !0 : $l.call(lf, e) ? !1 : jw.test(e) ? uf[e] = !0 : (lf[e] = !0, !1);
}
function Lw(e, t, n, r) {
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
function _w(e, t, n, r) {
  if (t === null || typeof t > "u" || Lw(e, t, n, r)) return !0;
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
function $e(e, t, n, r, o, s, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = i;
}
var Te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Te[e] = new $e(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Te[t] = new $e(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Te[e] = new $e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Te[e] = new $e(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Te[e] = new $e(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Te[e] = new $e(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Te[e] = new $e(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Te[e] = new $e(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Te[e] = new $e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var pc = /[\-:]([a-z])/g;
function hc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    pc,
    hc
  );
  Te[t] = new $e(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(pc, hc);
  Te[t] = new $e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(pc, hc);
  Te[t] = new $e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Te[e] = new $e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Te.xlinkHref = new $e("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Te[e] = new $e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function mc(e, t, n, r) {
  var o = Te.hasOwnProperty(t) ? Te[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (_w(t, n, o, r) && (n = null), r || o === null ? Mw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var tn = Rw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Rs = Symbol.for("react.element"), pr = Symbol.for("react.portal"), hr = Symbol.for("react.fragment"), gc = Symbol.for("react.strict_mode"), Ul = Symbol.for("react.profiler"), Sm = Symbol.for("react.provider"), km = Symbol.for("react.context"), yc = Symbol.for("react.forward_ref"), Wl = Symbol.for("react.suspense"), Hl = Symbol.for("react.suspense_list"), vc = Symbol.for("react.memo"), ln = Symbol.for("react.lazy"), bm = Symbol.for("react.offscreen"), cf = Symbol.iterator;
function fo(e) {
  return e === null || typeof e != "object" ? null : (e = cf && e[cf] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ce = Object.assign, Ha;
function bo(e) {
  if (Ha === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ha = t && t[1] || "";
  }
  return `
` + Ha + e;
}
var Ka = !1;
function Ga(e, t) {
  if (!e || Ka) return "";
  Ka = !0;
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
    Ka = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? bo(e) : "";
}
function Ow(e) {
  switch (e.tag) {
    case 5:
      return bo(e.type);
    case 16:
      return bo("Lazy");
    case 13:
      return bo("Suspense");
    case 19:
      return bo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ga(e.type, !1), e;
    case 11:
      return e = Ga(e.type.render, !1), e;
    case 1:
      return e = Ga(e.type, !0), e;
    default:
      return "";
  }
}
function Kl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case hr:
      return "Fragment";
    case pr:
      return "Portal";
    case Ul:
      return "Profiler";
    case gc:
      return "StrictMode";
    case Wl:
      return "Suspense";
    case Hl:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case km:
      return (e.displayName || "Context") + ".Consumer";
    case Sm:
      return (e._context.displayName || "Context") + ".Provider";
    case yc:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case vc:
      return t = e.displayName || null, t !== null ? t : Kl(e.type) || "Memo";
    case ln:
      t = e._payload, e = e._init;
      try {
        return Kl(e(t));
      } catch {
      }
  }
  return null;
}
function Iw(e) {
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
      return Kl(t);
    case 8:
      return t === gc ? "StrictMode" : "Mode";
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
function Pn(e) {
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
function Cm(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Vw(e) {
  var t = Cm(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function js(e) {
  e._valueTracker || (e._valueTracker = Vw(e));
}
function Pm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Cm(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ti(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Gl(e, t) {
  var n = t.checked;
  return ce({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function df(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Pn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Em(e, t) {
  t = t.checked, t != null && mc(e, "checked", t, !1);
}
function Yl(e, t) {
  Em(e, t);
  var n = Pn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Xl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Xl(e, t.type, Pn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ff(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Xl(e, t, n) {
  (t !== "number" || Ti(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Co = Array.isArray;
function Ar(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Pn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ql(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
  return ce({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function pf(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(A(92));
      if (Co(n)) {
        if (1 < n.length) throw Error(A(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Pn(n) };
}
function Tm(e, t) {
  var n = Pn(t.value), r = Pn(t.defaultValue);
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
function Zl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Nm(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Ms, Dm = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Ms = Ms || document.createElement("div"), Ms.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ms.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Ho(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ro = {
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
}, Fw = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ro).forEach(function(e) {
  Fw.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Ro[t] = Ro[e];
  });
});
function Am(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ro.hasOwnProperty(e) && Ro[e] ? ("" + t).trim() : t + "px";
}
function Rm(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Am(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var zw = ce({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ql(e, t) {
  if (t) {
    if (zw[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(A(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(A(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(A(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(A(62));
  }
}
function Jl(e, t) {
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
var eu = null;
function xc(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var tu = null, Rr = null, jr = null;
function mf(e) {
  if (e = xs(e)) {
    if (typeof tu != "function") throw Error(A(280));
    var t = e.stateNode;
    t && (t = ma(t), tu(e.stateNode, e.type, t));
  }
}
function jm(e) {
  Rr ? jr ? jr.push(e) : jr = [e] : Rr = e;
}
function Mm() {
  if (Rr) {
    var e = Rr, t = jr;
    if (jr = Rr = null, mf(e), t) for (e = 0; e < t.length; e++) mf(t[e]);
  }
}
function Lm(e, t) {
  return e(t);
}
function _m() {
}
var Ya = !1;
function Om(e, t, n) {
  if (Ya) return e(t, n);
  Ya = !0;
  try {
    return Lm(e, t, n);
  } finally {
    Ya = !1, (Rr !== null || jr !== null) && (_m(), Mm());
  }
}
function Ko(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ma(n);
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
var nu = !1;
if (Yt) try {
  var po = {};
  Object.defineProperty(po, "passive", { get: function() {
    nu = !0;
  } }), window.addEventListener("test", po, po), window.removeEventListener("test", po, po);
} catch {
  nu = !1;
}
function Bw(e, t, n, r, o, s, i, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var jo = !1, Ni = null, Di = !1, ru = null, $w = { onError: function(e) {
  jo = !0, Ni = e;
} };
function Uw(e, t, n, r, o, s, i, a, l) {
  jo = !1, Ni = null, Bw.apply($w, arguments);
}
function Ww(e, t, n, r, o, s, i, a, l) {
  if (Uw.apply(this, arguments), jo) {
    if (jo) {
      var u = Ni;
      jo = !1, Ni = null;
    } else throw Error(A(198));
    Di || (Di = !0, ru = u);
  }
}
function ar(e) {
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
function Im(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function gf(e) {
  if (ar(e) !== e) throw Error(A(188));
}
function Hw(e) {
  var t = e.alternate;
  if (!t) {
    if (t = ar(e), t === null) throw Error(A(188));
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
  return e = Hw(e), e !== null ? Fm(e) : null;
}
function Fm(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Fm(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var zm = tt.unstable_scheduleCallback, yf = tt.unstable_cancelCallback, Kw = tt.unstable_shouldYield, Gw = tt.unstable_requestPaint, ye = tt.unstable_now, Yw = tt.unstable_getCurrentPriorityLevel, wc = tt.unstable_ImmediatePriority, Bm = tt.unstable_UserBlockingPriority, Ai = tt.unstable_NormalPriority, Xw = tt.unstable_LowPriority, $m = tt.unstable_IdlePriority, da = null, Mt = null;
function Qw(e) {
  if (Mt && typeof Mt.onCommitFiberRoot == "function") try {
    Mt.onCommitFiberRoot(da, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var xt = Math.clz32 ? Math.clz32 : Jw, Zw = Math.log, qw = Math.LN2;
function Jw(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Zw(e) / qw | 0) | 0;
}
var Ls = 64, _s = 4194304;
function Po(e) {
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
function Ri(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, s = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var a = i & ~o;
    a !== 0 ? r = Po(a) : (s &= i, s !== 0 && (r = Po(s)));
  } else i = n & ~o, i !== 0 ? r = Po(i) : s !== 0 && (r = Po(s));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, s = t & -t, o >= s || o === 16 && (s & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - xt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function e1(e, t) {
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
function t1(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var i = 31 - xt(s), a = 1 << i, l = o[i];
    l === -1 ? (!(a & n) || a & r) && (o[i] = e1(a, t)) : l <= t && (e.expiredLanes |= a), s &= ~a;
  }
}
function ou(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Um() {
  var e = Ls;
  return Ls <<= 1, !(Ls & 4194240) && (Ls = 64), e;
}
function Xa(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ys(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - xt(t), e[t] = n;
}
function n1(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - xt(n), s = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~s;
  }
}
function Sc(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - xt(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var X = 0;
function Wm(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Hm, kc, Km, Gm, Ym, su = !1, Os = [], mn = null, gn = null, yn = null, Go = /* @__PURE__ */ new Map(), Yo = /* @__PURE__ */ new Map(), cn = [], r1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function vf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      mn = null;
      break;
    case "dragenter":
    case "dragleave":
      gn = null;
      break;
    case "mouseover":
    case "mouseout":
      yn = null;
      break;
    case "pointerover":
    case "pointerout":
      Go.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Yo.delete(t.pointerId);
  }
}
function ho(e, t, n, r, o, s) {
  return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [o] }, t !== null && (t = xs(t), t !== null && kc(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function o1(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return mn = ho(mn, e, t, n, r, o), !0;
    case "dragenter":
      return gn = ho(gn, e, t, n, r, o), !0;
    case "mouseover":
      return yn = ho(yn, e, t, n, r, o), !0;
    case "pointerover":
      var s = o.pointerId;
      return Go.set(s, ho(Go.get(s) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return s = o.pointerId, Yo.set(s, ho(Yo.get(s) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Xm(e) {
  var t = Wn(e.target);
  if (t !== null) {
    var n = ar(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Im(n), t !== null) {
          e.blockedOn = t, Ym(e.priority, function() {
            Km(n);
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
function di(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = iu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      eu = r, n.target.dispatchEvent(r), eu = null;
    } else return t = xs(n), t !== null && kc(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function xf(e, t, n) {
  di(e) && n.delete(t);
}
function s1() {
  su = !1, mn !== null && di(mn) && (mn = null), gn !== null && di(gn) && (gn = null), yn !== null && di(yn) && (yn = null), Go.forEach(xf), Yo.forEach(xf);
}
function mo(e, t) {
  e.blockedOn === t && (e.blockedOn = null, su || (su = !0, tt.unstable_scheduleCallback(tt.unstable_NormalPriority, s1)));
}
function Xo(e) {
  function t(o) {
    return mo(o, e);
  }
  if (0 < Os.length) {
    mo(Os[0], e);
    for (var n = 1; n < Os.length; n++) {
      var r = Os[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (mn !== null && mo(mn, e), gn !== null && mo(gn, e), yn !== null && mo(yn, e), Go.forEach(t), Yo.forEach(t), n = 0; n < cn.length; n++) r = cn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < cn.length && (n = cn[0], n.blockedOn === null); ) Xm(n), n.blockedOn === null && cn.shift();
}
var Mr = tn.ReactCurrentBatchConfig, ji = !0;
function i1(e, t, n, r) {
  var o = X, s = Mr.transition;
  Mr.transition = null;
  try {
    X = 1, bc(e, t, n, r);
  } finally {
    X = o, Mr.transition = s;
  }
}
function a1(e, t, n, r) {
  var o = X, s = Mr.transition;
  Mr.transition = null;
  try {
    X = 4, bc(e, t, n, r);
  } finally {
    X = o, Mr.transition = s;
  }
}
function bc(e, t, n, r) {
  if (ji) {
    var o = iu(e, t, n, r);
    if (o === null) sl(e, t, r, Mi, n), vf(e, r);
    else if (o1(o, e, t, n, r)) r.stopPropagation();
    else if (vf(e, r), t & 4 && -1 < r1.indexOf(e)) {
      for (; o !== null; ) {
        var s = xs(o);
        if (s !== null && Hm(s), s = iu(e, t, n, r), s === null && sl(e, t, r, Mi, n), s === o) break;
        o = s;
      }
      o !== null && r.stopPropagation();
    } else sl(e, t, r, null, n);
  }
}
var Mi = null;
function iu(e, t, n, r) {
  if (Mi = null, e = xc(r), e = Wn(e), e !== null) if (t = ar(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Im(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Mi = e, null;
}
function Qm(e) {
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
      switch (Yw()) {
        case wc:
          return 1;
        case Bm:
          return 4;
        case Ai:
        case Xw:
          return 16;
        case $m:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var pn = null, Cc = null, fi = null;
function Zm() {
  if (fi) return fi;
  var e, t = Cc, n = t.length, r, o = "value" in pn ? pn.value : pn.textContent, s = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[s - r]; r++) ;
  return fi = o.slice(e, 1 < r ? 1 - r : void 0);
}
function pi(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Is() {
  return !0;
}
function wf() {
  return !1;
}
function ot(e) {
  function t(n, r, o, s, i) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = s, this.target = i, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(s) : s[a]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Is : wf, this.isPropagationStopped = wf, this;
  }
  return ce(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Is);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Is);
  }, persist: function() {
  }, isPersistent: Is }), t;
}
var qr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Pc = ot(qr), vs = ce({}, qr, { view: 0, detail: 0 }), l1 = ot(vs), Qa, Za, go, fa = ce({}, vs, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ec, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== go && (go && e.type === "mousemove" ? (Qa = e.screenX - go.screenX, Za = e.screenY - go.screenY) : Za = Qa = 0, go = e), Qa);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Za;
} }), Sf = ot(fa), u1 = ce({}, fa, { dataTransfer: 0 }), c1 = ot(u1), d1 = ce({}, vs, { relatedTarget: 0 }), qa = ot(d1), f1 = ce({}, qr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), p1 = ot(f1), h1 = ce({}, qr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), m1 = ot(h1), g1 = ce({}, qr, { data: 0 }), kf = ot(g1), y1 = {
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
}, v1 = {
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
}, x1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function w1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = x1[e]) ? !!t[e] : !1;
}
function Ec() {
  return w1;
}
var S1 = ce({}, vs, { key: function(e) {
  if (e.key) {
    var t = y1[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = pi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? v1[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ec, charCode: function(e) {
  return e.type === "keypress" ? pi(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? pi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), k1 = ot(S1), b1 = ce({}, fa, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), bf = ot(b1), C1 = ce({}, vs, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ec }), P1 = ot(C1), E1 = ce({}, qr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), T1 = ot(E1), N1 = ce({}, fa, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), D1 = ot(N1), A1 = [9, 13, 27, 32], Tc = Yt && "CompositionEvent" in window, Mo = null;
Yt && "documentMode" in document && (Mo = document.documentMode);
var R1 = Yt && "TextEvent" in window && !Mo, qm = Yt && (!Tc || Mo && 8 < Mo && 11 >= Mo), Cf = " ", Pf = !1;
function Jm(e, t) {
  switch (e) {
    case "keyup":
      return A1.indexOf(t.keyCode) !== -1;
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
function eg(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var mr = !1;
function j1(e, t) {
  switch (e) {
    case "compositionend":
      return eg(t);
    case "keypress":
      return t.which !== 32 ? null : (Pf = !0, Cf);
    case "textInput":
      return e = t.data, e === Cf && Pf ? null : e;
    default:
      return null;
  }
}
function M1(e, t) {
  if (mr) return e === "compositionend" || !Tc && Jm(e, t) ? (e = Zm(), fi = Cc = pn = null, mr = !1, e) : null;
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
      return qm && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var L1 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ef(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!L1[e.type] : t === "textarea";
}
function tg(e, t, n, r) {
  jm(r), t = Li(t, "onChange"), 0 < t.length && (n = new Pc("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Lo = null, Qo = null;
function _1(e) {
  fg(e, 0);
}
function pa(e) {
  var t = vr(e);
  if (Pm(t)) return e;
}
function O1(e, t) {
  if (e === "change") return t;
}
var ng = !1;
if (Yt) {
  var Ja;
  if (Yt) {
    var el = "oninput" in document;
    if (!el) {
      var Tf = document.createElement("div");
      Tf.setAttribute("oninput", "return;"), el = typeof Tf.oninput == "function";
    }
    Ja = el;
  } else Ja = !1;
  ng = Ja && (!document.documentMode || 9 < document.documentMode);
}
function Nf() {
  Lo && (Lo.detachEvent("onpropertychange", rg), Qo = Lo = null);
}
function rg(e) {
  if (e.propertyName === "value" && pa(Qo)) {
    var t = [];
    tg(t, Qo, e, xc(e)), Om(_1, t);
  }
}
function I1(e, t, n) {
  e === "focusin" ? (Nf(), Lo = t, Qo = n, Lo.attachEvent("onpropertychange", rg)) : e === "focusout" && Nf();
}
function V1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return pa(Qo);
}
function F1(e, t) {
  if (e === "click") return pa(t);
}
function z1(e, t) {
  if (e === "input" || e === "change") return pa(t);
}
function B1(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var St = typeof Object.is == "function" ? Object.is : B1;
function Zo(e, t) {
  if (St(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!$l.call(t, o) || !St(e[o], t[o])) return !1;
  }
  return !0;
}
function Df(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Af(e, t) {
  var n = Df(e);
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
    n = Df(n);
  }
}
function og(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? og(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function sg() {
  for (var e = window, t = Ti(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ti(e.document);
  }
  return t;
}
function Nc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function $1(e) {
  var t = sg(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && og(n.ownerDocument.documentElement, n)) {
    if (r !== null && Nc(n)) {
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
var U1 = Yt && "documentMode" in document && 11 >= document.documentMode, gr = null, au = null, _o = null, lu = !1;
function Rf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  lu || gr == null || gr !== Ti(r) || (r = gr, "selectionStart" in r && Nc(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), _o && Zo(_o, r) || (_o = r, r = Li(au, "onSelect"), 0 < r.length && (t = new Pc("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = gr)));
}
function Vs(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var yr = { animationend: Vs("Animation", "AnimationEnd"), animationiteration: Vs("Animation", "AnimationIteration"), animationstart: Vs("Animation", "AnimationStart"), transitionend: Vs("Transition", "TransitionEnd") }, tl = {}, ig = {};
Yt && (ig = document.createElement("div").style, "AnimationEvent" in window || (delete yr.animationend.animation, delete yr.animationiteration.animation, delete yr.animationstart.animation), "TransitionEvent" in window || delete yr.transitionend.transition);
function ha(e) {
  if (tl[e]) return tl[e];
  if (!yr[e]) return e;
  var t = yr[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ig) return tl[e] = t[n];
  return e;
}
var ag = ha("animationend"), lg = ha("animationiteration"), ug = ha("animationstart"), cg = ha("transitionend"), dg = /* @__PURE__ */ new Map(), jf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function jn(e, t) {
  dg.set(e, t), ir(t, [e]);
}
for (var nl = 0; nl < jf.length; nl++) {
  var rl = jf[nl], W1 = rl.toLowerCase(), H1 = rl[0].toUpperCase() + rl.slice(1);
  jn(W1, "on" + H1);
}
jn(ag, "onAnimationEnd");
jn(lg, "onAnimationIteration");
jn(ug, "onAnimationStart");
jn("dblclick", "onDoubleClick");
jn("focusin", "onFocus");
jn("focusout", "onBlur");
jn(cg, "onTransitionEnd");
Fr("onMouseEnter", ["mouseout", "mouseover"]);
Fr("onMouseLeave", ["mouseout", "mouseover"]);
Fr("onPointerEnter", ["pointerout", "pointerover"]);
Fr("onPointerLeave", ["pointerout", "pointerover"]);
ir("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ir("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ir("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ir("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ir("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ir("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Eo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), K1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Eo));
function Mf(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Ww(r, t, void 0, e), e.currentTarget = null;
}
function fg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var a = r[i], l = a.instance, u = a.currentTarget;
        if (a = a.listener, l !== s && o.isPropagationStopped()) break e;
        Mf(o, a, u), s = l;
      }
      else for (i = 0; i < r.length; i++) {
        if (a = r[i], l = a.instance, u = a.currentTarget, a = a.listener, l !== s && o.isPropagationStopped()) break e;
        Mf(o, a, u), s = l;
      }
    }
  }
  if (Di) throw e = ru, Di = !1, ru = null, e;
}
function ne(e, t) {
  var n = t[pu];
  n === void 0 && (n = t[pu] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (pg(t, e, 2, !1), n.add(r));
}
function ol(e, t, n) {
  var r = 0;
  t && (r |= 4), pg(n, e, r, t);
}
var Fs = "_reactListening" + Math.random().toString(36).slice(2);
function qo(e) {
  if (!e[Fs]) {
    e[Fs] = !0, wm.forEach(function(n) {
      n !== "selectionchange" && (K1.has(n) || ol(n, !1, e), ol(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Fs] || (t[Fs] = !0, ol("selectionchange", !1, t));
  }
}
function pg(e, t, n, r) {
  switch (Qm(t)) {
    case 1:
      var o = i1;
      break;
    case 4:
      o = a1;
      break;
    default:
      o = bc;
  }
  n = o.bind(null, t, n, e), o = void 0, !nu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function sl(e, t, n, r, o) {
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
        if (i = Wn(a), i === null) return;
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
    var u = s, c = xc(n), d = [];
    e: {
      var f = dg.get(e);
      if (f !== void 0) {
        var g = Pc, w = e;
        switch (e) {
          case "keypress":
            if (pi(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = k1;
            break;
          case "focusin":
            w = "focus", g = qa;
            break;
          case "focusout":
            w = "blur", g = qa;
            break;
          case "beforeblur":
          case "afterblur":
            g = qa;
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
            g = Sf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = c1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = P1;
            break;
          case ag:
          case lg:
          case ug:
            g = p1;
            break;
          case cg:
            g = T1;
            break;
          case "scroll":
            g = l1;
            break;
          case "wheel":
            g = D1;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = m1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = bf;
        }
        var y = (t & 4) !== 0, S = !y && e === "scroll", m = y ? f !== null ? f + "Capture" : null : f;
        y = [];
        for (var h = u, v; h !== null; ) {
          v = h;
          var k = v.stateNode;
          if (v.tag === 5 && k !== null && (v = k, m !== null && (k = Ko(h, m), k != null && y.push(Jo(h, k, v)))), S) break;
          h = h.return;
        }
        0 < y.length && (f = new g(f, w, null, n, c), d.push({ event: f, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", f && n !== eu && (w = n.relatedTarget || n.fromElement) && (Wn(w) || w[Xt])) break e;
        if ((g || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, g ? (w = n.relatedTarget || n.toElement, g = u, w = w ? Wn(w) : null, w !== null && (S = ar(w), w !== S || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = u), g !== w)) {
          if (y = Sf, k = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (y = bf, k = "onPointerLeave", m = "onPointerEnter", h = "pointer"), S = g == null ? f : vr(g), v = w == null ? f : vr(w), f = new y(k, h + "leave", g, n, c), f.target = S, f.relatedTarget = v, k = null, Wn(c) === u && (y = new y(m, h + "enter", w, n, c), y.target = v, y.relatedTarget = S, k = y), S = k, g && w) t: {
            for (y = g, m = w, h = 0, v = y; v; v = ur(v)) h++;
            for (v = 0, k = m; k; k = ur(k)) v++;
            for (; 0 < h - v; ) y = ur(y), h--;
            for (; 0 < v - h; ) m = ur(m), v--;
            for (; h--; ) {
              if (y === m || m !== null && y === m.alternate) break t;
              y = ur(y), m = ur(m);
            }
            y = null;
          }
          else y = null;
          g !== null && Lf(d, f, g, y, !1), w !== null && S !== null && Lf(d, S, w, y, !0);
        }
      }
      e: {
        if (f = u ? vr(u) : window, g = f.nodeName && f.nodeName.toLowerCase(), g === "select" || g === "input" && f.type === "file") var b = O1;
        else if (Ef(f)) if (ng) b = z1;
        else {
          b = V1;
          var C = I1;
        }
        else (g = f.nodeName) && g.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (b = F1);
        if (b && (b = b(e, u))) {
          tg(d, b, n, c);
          break e;
        }
        C && C(e, f, u), e === "focusout" && (C = f._wrapperState) && C.controlled && f.type === "number" && Xl(f, "number", f.value);
      }
      switch (C = u ? vr(u) : window, e) {
        case "focusin":
          (Ef(C) || C.contentEditable === "true") && (gr = C, au = u, _o = null);
          break;
        case "focusout":
          _o = au = gr = null;
          break;
        case "mousedown":
          lu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          lu = !1, Rf(d, n, c);
          break;
        case "selectionchange":
          if (U1) break;
        case "keydown":
        case "keyup":
          Rf(d, n, c);
      }
      var P;
      if (Tc) e: {
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
      else mr ? Jm(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (qm && n.locale !== "ko" && (mr || E !== "onCompositionStart" ? E === "onCompositionEnd" && mr && (P = Zm()) : (pn = c, Cc = "value" in pn ? pn.value : pn.textContent, mr = !0)), C = Li(u, E), 0 < C.length && (E = new kf(E, e, null, n, c), d.push({ event: E, listeners: C }), P ? E.data = P : (P = eg(n), P !== null && (E.data = P)))), (P = R1 ? j1(e, n) : M1(e, n)) && (u = Li(u, "onBeforeInput"), 0 < u.length && (c = new kf("onBeforeInput", "beforeinput", null, n, c), d.push({ event: c, listeners: u }), c.data = P));
    }
    fg(d, t);
  });
}
function Jo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Li(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, s = o.stateNode;
    o.tag === 5 && s !== null && (o = s, s = Ko(e, n), s != null && r.unshift(Jo(e, s, o)), s = Ko(e, t), s != null && r.push(Jo(e, s, o))), e = e.return;
  }
  return r;
}
function ur(e) {
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
    a.tag === 5 && u !== null && (a = u, o ? (l = Ko(n, s), l != null && i.unshift(Jo(n, l, a))) : o || (l = Ko(n, s), l != null && i.push(Jo(n, l, a)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var G1 = /\r\n?/g, Y1 = /\u0000|\uFFFD/g;
function _f(e) {
  return (typeof e == "string" ? e : "" + e).replace(G1, `
`).replace(Y1, "");
}
function zs(e, t, n) {
  if (t = _f(t), _f(e) !== t && n) throw Error(A(425));
}
function _i() {
}
var uu = null, cu = null;
function du(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var fu = typeof setTimeout == "function" ? setTimeout : void 0, X1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Of = typeof Promise == "function" ? Promise : void 0, Q1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Of < "u" ? function(e) {
  return Of.resolve(null).then(e).catch(Z1);
} : fu;
function Z1(e) {
  setTimeout(function() {
    throw e;
  });
}
function il(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), Xo(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Xo(t);
}
function vn(e) {
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
function If(e) {
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
var Jr = Math.random().toString(36).slice(2), At = "__reactFiber$" + Jr, es = "__reactProps$" + Jr, Xt = "__reactContainer$" + Jr, pu = "__reactEvents$" + Jr, q1 = "__reactListeners$" + Jr, J1 = "__reactHandles$" + Jr;
function Wn(e) {
  var t = e[At];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Xt] || n[At]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = If(e); e !== null; ) {
        if (n = e[At]) return n;
        e = If(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function xs(e) {
  return e = e[At] || e[Xt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function vr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(A(33));
}
function ma(e) {
  return e[es] || null;
}
var hu = [], xr = -1;
function Mn(e) {
  return { current: e };
}
function re(e) {
  0 > xr || (e.current = hu[xr], hu[xr] = null, xr--);
}
function J(e, t) {
  xr++, hu[xr] = e.current, e.current = t;
}
var En = {}, Oe = Mn(En), He = Mn(!1), Zn = En;
function zr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return En;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, s;
  for (s in n) o[s] = t[s];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Ke(e) {
  return e = e.childContextTypes, e != null;
}
function Oi() {
  re(He), re(Oe);
}
function Vf(e, t, n) {
  if (Oe.current !== En) throw Error(A(168));
  J(Oe, t), J(He, n);
}
function hg(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(A(108, Iw(e) || "Unknown", o));
  return ce({}, n, r);
}
function Ii(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || En, Zn = Oe.current, J(Oe, e), J(He, He.current), !0;
}
function Ff(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(A(169));
  n ? (e = hg(e, t, Zn), r.__reactInternalMemoizedMergedChildContext = e, re(He), re(Oe), J(Oe, e)) : re(He), J(He, n);
}
var $t = null, ga = !1, al = !1;
function mg(e) {
  $t === null ? $t = [e] : $t.push(e);
}
function eS(e) {
  ga = !0, mg(e);
}
function Ln() {
  if (!al && $t !== null) {
    al = !0;
    var e = 0, t = X;
    try {
      var n = $t;
      for (X = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      $t = null, ga = !1;
    } catch (o) {
      throw $t !== null && ($t = $t.slice(e + 1)), zm(wc, Ln), o;
    } finally {
      X = t, al = !1;
    }
  }
  return null;
}
var wr = [], Sr = 0, Vi = null, Fi = 0, at = [], lt = 0, qn = null, Ut = 1, Wt = "";
function zn(e, t) {
  wr[Sr++] = Fi, wr[Sr++] = Vi, Vi = e, Fi = t;
}
function gg(e, t, n) {
  at[lt++] = Ut, at[lt++] = Wt, at[lt++] = qn, qn = e;
  var r = Ut;
  e = Wt;
  var o = 32 - xt(r) - 1;
  r &= ~(1 << o), n += 1;
  var s = 32 - xt(t) + o;
  if (30 < s) {
    var i = o - o % 5;
    s = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, Ut = 1 << 32 - xt(t) + o | n << o | r, Wt = s + e;
  } else Ut = 1 << s | n << o | r, Wt = e;
}
function Dc(e) {
  e.return !== null && (zn(e, 1), gg(e, 1, 0));
}
function Ac(e) {
  for (; e === Vi; ) Vi = wr[--Sr], wr[Sr] = null, Fi = wr[--Sr], wr[Sr] = null;
  for (; e === qn; ) qn = at[--lt], at[lt] = null, Wt = at[--lt], at[lt] = null, Ut = at[--lt], at[lt] = null;
}
var qe = null, Ze = null, ie = !1, vt = null;
function yg(e, t) {
  var n = ut(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function zf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, qe = e, Ze = vn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, qe = e, Ze = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = qn !== null ? { id: Ut, overflow: Wt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = ut(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, qe = e, Ze = null, !0) : !1;
    default:
      return !1;
  }
}
function mu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function gu(e) {
  if (ie) {
    var t = Ze;
    if (t) {
      var n = t;
      if (!zf(e, t)) {
        if (mu(e)) throw Error(A(418));
        t = vn(n.nextSibling);
        var r = qe;
        t && zf(e, t) ? yg(r, n) : (e.flags = e.flags & -4097 | 2, ie = !1, qe = e);
      }
    } else {
      if (mu(e)) throw Error(A(418));
      e.flags = e.flags & -4097 | 2, ie = !1, qe = e;
    }
  }
}
function Bf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  qe = e;
}
function Bs(e) {
  if (e !== qe) return !1;
  if (!ie) return Bf(e), ie = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !du(e.type, e.memoizedProps)), t && (t = Ze)) {
    if (mu(e)) throw vg(), Error(A(418));
    for (; t; ) yg(e, t), t = vn(t.nextSibling);
  }
  if (Bf(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(A(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ze = vn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ze = null;
    }
  } else Ze = qe ? vn(e.stateNode.nextSibling) : null;
  return !0;
}
function vg() {
  for (var e = Ze; e; ) e = vn(e.nextSibling);
}
function Br() {
  Ze = qe = null, ie = !1;
}
function Rc(e) {
  vt === null ? vt = [e] : vt.push(e);
}
var tS = tn.ReactCurrentBatchConfig;
function yo(e, t, n) {
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
function $s(e, t) {
  throw e = Object.prototype.toString.call(t), Error(A(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function $f(e) {
  var t = e._init;
  return t(e._payload);
}
function xg(e) {
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
    return m = kn(m, h), m.index = 0, m.sibling = null, m;
  }
  function s(m, h, v) {
    return m.index = v, e ? (v = m.alternate, v !== null ? (v = v.index, v < h ? (m.flags |= 2, h) : v) : (m.flags |= 2, h)) : (m.flags |= 1048576, h);
  }
  function i(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, h, v, k) {
    return h === null || h.tag !== 6 ? (h = hl(v, m.mode, k), h.return = m, h) : (h = o(h, v), h.return = m, h);
  }
  function l(m, h, v, k) {
    var b = v.type;
    return b === hr ? c(m, h, v.props.children, k, v.key) : h !== null && (h.elementType === b || typeof b == "object" && b !== null && b.$$typeof === ln && $f(b) === h.type) ? (k = o(h, v.props), k.ref = yo(m, h, v), k.return = m, k) : (k = wi(v.type, v.key, v.props, null, m.mode, k), k.ref = yo(m, h, v), k.return = m, k);
  }
  function u(m, h, v, k) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== v.containerInfo || h.stateNode.implementation !== v.implementation ? (h = ml(v, m.mode, k), h.return = m, h) : (h = o(h, v.children || []), h.return = m, h);
  }
  function c(m, h, v, k, b) {
    return h === null || h.tag !== 7 ? (h = Xn(v, m.mode, k, b), h.return = m, h) : (h = o(h, v), h.return = m, h);
  }
  function d(m, h, v) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return h = hl("" + h, m.mode, v), h.return = m, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Rs:
          return v = wi(h.type, h.key, h.props, null, m.mode, v), v.ref = yo(m, null, h), v.return = m, v;
        case pr:
          return h = ml(h, m.mode, v), h.return = m, h;
        case ln:
          var k = h._init;
          return d(m, k(h._payload), v);
      }
      if (Co(h) || fo(h)) return h = Xn(h, m.mode, v, null), h.return = m, h;
      $s(m, h);
    }
    return null;
  }
  function f(m, h, v, k) {
    var b = h !== null ? h.key : null;
    if (typeof v == "string" && v !== "" || typeof v == "number") return b !== null ? null : a(m, h, "" + v, k);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Rs:
          return v.key === b ? l(m, h, v, k) : null;
        case pr:
          return v.key === b ? u(m, h, v, k) : null;
        case ln:
          return b = v._init, f(
            m,
            h,
            b(v._payload),
            k
          );
      }
      if (Co(v) || fo(v)) return b !== null ? null : c(m, h, v, k, null);
      $s(m, v);
    }
    return null;
  }
  function g(m, h, v, k, b) {
    if (typeof k == "string" && k !== "" || typeof k == "number") return m = m.get(v) || null, a(h, m, "" + k, b);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case Rs:
          return m = m.get(k.key === null ? v : k.key) || null, l(h, m, k, b);
        case pr:
          return m = m.get(k.key === null ? v : k.key) || null, u(h, m, k, b);
        case ln:
          var C = k._init;
          return g(m, h, v, C(k._payload), b);
      }
      if (Co(k) || fo(k)) return m = m.get(v) || null, c(h, m, k, b, null);
      $s(h, k);
    }
    return null;
  }
  function w(m, h, v, k) {
    for (var b = null, C = null, P = h, E = h = 0, D = null; P !== null && E < v.length; E++) {
      P.index > E ? (D = P, P = null) : D = P.sibling;
      var N = f(m, P, v[E], k);
      if (N === null) {
        P === null && (P = D);
        break;
      }
      e && P && N.alternate === null && t(m, P), h = s(N, h, E), C === null ? b = N : C.sibling = N, C = N, P = D;
    }
    if (E === v.length) return n(m, P), ie && zn(m, E), b;
    if (P === null) {
      for (; E < v.length; E++) P = d(m, v[E], k), P !== null && (h = s(P, h, E), C === null ? b = P : C.sibling = P, C = P);
      return ie && zn(m, E), b;
    }
    for (P = r(m, P); E < v.length; E++) D = g(P, m, E, v[E], k), D !== null && (e && D.alternate !== null && P.delete(D.key === null ? E : D.key), h = s(D, h, E), C === null ? b = D : C.sibling = D, C = D);
    return e && P.forEach(function(M) {
      return t(m, M);
    }), ie && zn(m, E), b;
  }
  function y(m, h, v, k) {
    var b = fo(v);
    if (typeof b != "function") throw Error(A(150));
    if (v = b.call(v), v == null) throw Error(A(151));
    for (var C = b = null, P = h, E = h = 0, D = null, N = v.next(); P !== null && !N.done; E++, N = v.next()) {
      P.index > E ? (D = P, P = null) : D = P.sibling;
      var M = f(m, P, N.value, k);
      if (M === null) {
        P === null && (P = D);
        break;
      }
      e && P && M.alternate === null && t(m, P), h = s(M, h, E), C === null ? b = M : C.sibling = M, C = M, P = D;
    }
    if (N.done) return n(
      m,
      P
    ), ie && zn(m, E), b;
    if (P === null) {
      for (; !N.done; E++, N = v.next()) N = d(m, N.value, k), N !== null && (h = s(N, h, E), C === null ? b = N : C.sibling = N, C = N);
      return ie && zn(m, E), b;
    }
    for (P = r(m, P); !N.done; E++, N = v.next()) N = g(P, m, E, N.value, k), N !== null && (e && N.alternate !== null && P.delete(N.key === null ? E : N.key), h = s(N, h, E), C === null ? b = N : C.sibling = N, C = N);
    return e && P.forEach(function(R) {
      return t(m, R);
    }), ie && zn(m, E), b;
  }
  function S(m, h, v, k) {
    if (typeof v == "object" && v !== null && v.type === hr && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Rs:
          e: {
            for (var b = v.key, C = h; C !== null; ) {
              if (C.key === b) {
                if (b = v.type, b === hr) {
                  if (C.tag === 7) {
                    n(m, C.sibling), h = o(C, v.props.children), h.return = m, m = h;
                    break e;
                  }
                } else if (C.elementType === b || typeof b == "object" && b !== null && b.$$typeof === ln && $f(b) === C.type) {
                  n(m, C.sibling), h = o(C, v.props), h.ref = yo(m, C, v), h.return = m, m = h;
                  break e;
                }
                n(m, C);
                break;
              } else t(m, C);
              C = C.sibling;
            }
            v.type === hr ? (h = Xn(v.props.children, m.mode, k, v.key), h.return = m, m = h) : (k = wi(v.type, v.key, v.props, null, m.mode, k), k.ref = yo(m, h, v), k.return = m, m = k);
          }
          return i(m);
        case pr:
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
            h = ml(v, m.mode, k), h.return = m, m = h;
          }
          return i(m);
        case ln:
          return C = v._init, S(m, h, C(v._payload), k);
      }
      if (Co(v)) return w(m, h, v, k);
      if (fo(v)) return y(m, h, v, k);
      $s(m, v);
    }
    return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, h !== null && h.tag === 6 ? (n(m, h.sibling), h = o(h, v), h.return = m, m = h) : (n(m, h), h = hl(v, m.mode, k), h.return = m, m = h), i(m)) : n(m, h);
  }
  return S;
}
var $r = xg(!0), wg = xg(!1), zi = Mn(null), Bi = null, kr = null, jc = null;
function Mc() {
  jc = kr = Bi = null;
}
function Lc(e) {
  var t = zi.current;
  re(zi), e._currentValue = t;
}
function yu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Lr(e, t) {
  Bi = e, jc = kr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (We = !0), e.firstContext = null);
}
function dt(e) {
  var t = e._currentValue;
  if (jc !== e) if (e = { context: e, memoizedValue: t, next: null }, kr === null) {
    if (Bi === null) throw Error(A(308));
    kr = e, Bi.dependencies = { lanes: 0, firstContext: e };
  } else kr = kr.next = e;
  return t;
}
var Hn = null;
function _c(e) {
  Hn === null ? Hn = [e] : Hn.push(e);
}
function Sg(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, _c(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Qt(e, r);
}
function Qt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var un = !1;
function Oc(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function kg(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ht(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function xn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, G & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Qt(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, _c(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Qt(e, n);
}
function hi(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Sc(e, n);
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
function $i(e, t, n, r) {
  var o = e.updateQueue;
  un = !1;
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
              d = ce({}, d, f);
              break e;
            case 2:
              un = !0;
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
    er |= i, e.lanes = i, e.memoizedState = d;
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
var ws = {}, Lt = Mn(ws), ts = Mn(ws), ns = Mn(ws);
function Kn(e) {
  if (e === ws) throw Error(A(174));
  return e;
}
function Ic(e, t) {
  switch (J(ns, t), J(ts, e), J(Lt, ws), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Zl(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Zl(t, e);
  }
  re(Lt), J(Lt, t);
}
function Ur() {
  re(Lt), re(ts), re(ns);
}
function bg(e) {
  Kn(ns.current);
  var t = Kn(Lt.current), n = Zl(t, e.type);
  t !== n && (J(ts, e), J(Lt, n));
}
function Vc(e) {
  ts.current === e && (re(Lt), re(ts));
}
var ae = Mn(0);
function Ui(e) {
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
var ll = [];
function Fc() {
  for (var e = 0; e < ll.length; e++) ll[e]._workInProgressVersionPrimary = null;
  ll.length = 0;
}
var mi = tn.ReactCurrentDispatcher, ul = tn.ReactCurrentBatchConfig, Jn = 0, ue = null, xe = null, ke = null, Wi = !1, Oo = !1, rs = 0, nS = 0;
function Re() {
  throw Error(A(321));
}
function zc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!St(e[n], t[n])) return !1;
  return !0;
}
function Bc(e, t, n, r, o, s) {
  if (Jn = s, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, mi.current = e === null || e.memoizedState === null ? iS : aS, e = n(r, o), Oo) {
    s = 0;
    do {
      if (Oo = !1, rs = 0, 25 <= s) throw Error(A(301));
      s += 1, ke = xe = null, t.updateQueue = null, mi.current = lS, e = n(r, o);
    } while (Oo);
  }
  if (mi.current = Hi, t = xe !== null && xe.next !== null, Jn = 0, ke = xe = ue = null, Wi = !1, t) throw Error(A(300));
  return e;
}
function $c() {
  var e = rs !== 0;
  return rs = 0, e;
}
function Dt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ke === null ? ue.memoizedState = ke = e : ke = ke.next = e, ke;
}
function ft() {
  if (xe === null) {
    var e = ue.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = xe.next;
  var t = ke === null ? ue.memoizedState : ke.next;
  if (t !== null) ke = t, xe = e;
  else {
    if (e === null) throw Error(A(310));
    xe = e, e = { memoizedState: xe.memoizedState, baseState: xe.baseState, baseQueue: xe.baseQueue, queue: xe.queue, next: null }, ke === null ? ue.memoizedState = ke = e : ke = ke.next = e;
  }
  return ke;
}
function os(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function cl(e) {
  var t = ft(), n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = xe, o = r.baseQueue, s = n.pending;
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
      if ((Jn & c) === c) l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (a = l = d, i = r) : l = l.next = d, ue.lanes |= c, er |= c;
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? i = r : l.next = a, St(r, t.memoizedState) || (We = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      s = o.lane, ue.lanes |= s, er |= s, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function dl(e) {
  var t = ft(), n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, s = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = o = o.next;
    do
      s = e(s, i.action), i = i.next;
    while (i !== o);
    St(s, t.memoizedState) || (We = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
  }
  return [s, r];
}
function Cg() {
}
function Pg(e, t) {
  var n = ue, r = ft(), o = t(), s = !St(r.memoizedState, o);
  if (s && (r.memoizedState = o, We = !0), r = r.queue, Uc(Ng.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || ke !== null && ke.memoizedState.tag & 1) {
    if (n.flags |= 2048, ss(9, Tg.bind(null, n, r, o, t), void 0, null), be === null) throw Error(A(349));
    Jn & 30 || Eg(n, t, o);
  }
  return o;
}
function Eg(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ue.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Tg(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Dg(t) && Ag(e);
}
function Ng(e, t, n) {
  return n(function() {
    Dg(t) && Ag(e);
  });
}
function Dg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !St(e, n);
  } catch {
    return !0;
  }
}
function Ag(e) {
  var t = Qt(e, 1);
  t !== null && wt(t, e, 1, -1);
}
function Hf(e) {
  var t = Dt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: os, lastRenderedState: e }, t.queue = e, e = e.dispatch = sS.bind(null, ue, e), [t.memoizedState, e];
}
function ss(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ue.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Rg() {
  return ft().memoizedState;
}
function gi(e, t, n, r) {
  var o = Dt();
  ue.flags |= e, o.memoizedState = ss(1 | t, n, void 0, r === void 0 ? null : r);
}
function ya(e, t, n, r) {
  var o = ft();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (xe !== null) {
    var i = xe.memoizedState;
    if (s = i.destroy, r !== null && zc(r, i.deps)) {
      o.memoizedState = ss(t, n, s, r);
      return;
    }
  }
  ue.flags |= e, o.memoizedState = ss(1 | t, n, s, r);
}
function Kf(e, t) {
  return gi(8390656, 8, e, t);
}
function Uc(e, t) {
  return ya(2048, 8, e, t);
}
function jg(e, t) {
  return ya(4, 2, e, t);
}
function Mg(e, t) {
  return ya(4, 4, e, t);
}
function Lg(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function _g(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ya(4, 4, Lg.bind(null, t, e), n);
}
function Wc() {
}
function Og(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && zc(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ig(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && zc(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Vg(e, t, n) {
  return Jn & 21 ? (St(n, t) || (n = Um(), ue.lanes |= n, er |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, We = !0), e.memoizedState = n);
}
function rS(e, t) {
  var n = X;
  X = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ul.transition;
  ul.transition = {};
  try {
    e(!1), t();
  } finally {
    X = n, ul.transition = r;
  }
}
function Fg() {
  return ft().memoizedState;
}
function oS(e, t, n) {
  var r = Sn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, zg(e)) Bg(t, n);
  else if (n = Sg(e, t, n, r), n !== null) {
    var o = ze();
    wt(n, e, r, o), $g(n, t, r);
  }
}
function sS(e, t, n) {
  var r = Sn(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (zg(e)) Bg(t, o);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
      var i = t.lastRenderedState, a = s(i, n);
      if (o.hasEagerState = !0, o.eagerState = a, St(a, i)) {
        var l = t.interleaved;
        l === null ? (o.next = o, _c(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = Sg(e, t, o, r), n !== null && (o = ze(), wt(n, e, r, o), $g(n, t, r));
  }
}
function zg(e) {
  var t = e.alternate;
  return e === ue || t !== null && t === ue;
}
function Bg(e, t) {
  Oo = Wi = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function $g(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Sc(e, n);
  }
}
var Hi = { readContext: dt, useCallback: Re, useContext: Re, useEffect: Re, useImperativeHandle: Re, useInsertionEffect: Re, useLayoutEffect: Re, useMemo: Re, useReducer: Re, useRef: Re, useState: Re, useDebugValue: Re, useDeferredValue: Re, useTransition: Re, useMutableSource: Re, useSyncExternalStore: Re, useId: Re, unstable_isNewReconciler: !1 }, iS = { readContext: dt, useCallback: function(e, t) {
  return Dt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: dt, useEffect: Kf, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, gi(
    4194308,
    4,
    Lg.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return gi(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return gi(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Dt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Dt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = oS.bind(null, ue, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Dt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Hf, useDebugValue: Wc, useDeferredValue: function(e) {
  return Dt().memoizedState = e;
}, useTransition: function() {
  var e = Hf(!1), t = e[0];
  return e = rS.bind(null, e[1]), Dt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ue, o = Dt();
  if (ie) {
    if (n === void 0) throw Error(A(407));
    n = n();
  } else {
    if (n = t(), be === null) throw Error(A(349));
    Jn & 30 || Eg(r, t, n);
  }
  o.memoizedState = n;
  var s = { value: n, getSnapshot: t };
  return o.queue = s, Kf(Ng.bind(
    null,
    r,
    s,
    e
  ), [e]), r.flags |= 2048, ss(9, Tg.bind(null, r, s, n, t), void 0, null), n;
}, useId: function() {
  var e = Dt(), t = be.identifierPrefix;
  if (ie) {
    var n = Wt, r = Ut;
    n = (r & ~(1 << 32 - xt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = rs++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = nS++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, aS = {
  readContext: dt,
  useCallback: Og,
  useContext: dt,
  useEffect: Uc,
  useImperativeHandle: _g,
  useInsertionEffect: jg,
  useLayoutEffect: Mg,
  useMemo: Ig,
  useReducer: cl,
  useRef: Rg,
  useState: function() {
    return cl(os);
  },
  useDebugValue: Wc,
  useDeferredValue: function(e) {
    var t = ft();
    return Vg(t, xe.memoizedState, e);
  },
  useTransition: function() {
    var e = cl(os)[0], t = ft().memoizedState;
    return [e, t];
  },
  useMutableSource: Cg,
  useSyncExternalStore: Pg,
  useId: Fg,
  unstable_isNewReconciler: !1
}, lS = { readContext: dt, useCallback: Og, useContext: dt, useEffect: Uc, useImperativeHandle: _g, useInsertionEffect: jg, useLayoutEffect: Mg, useMemo: Ig, useReducer: dl, useRef: Rg, useState: function() {
  return dl(os);
}, useDebugValue: Wc, useDeferredValue: function(e) {
  var t = ft();
  return xe === null ? t.memoizedState = e : Vg(t, xe.memoizedState, e);
}, useTransition: function() {
  var e = dl(os)[0], t = ft().memoizedState;
  return [e, t];
}, useMutableSource: Cg, useSyncExternalStore: Pg, useId: Fg, unstable_isNewReconciler: !1 };
function gt(e, t) {
  if (e && e.defaultProps) {
    t = ce({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function vu(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ce({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var va = { isMounted: function(e) {
  return (e = e._reactInternals) ? ar(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ze(), o = Sn(e), s = Ht(r, o);
  s.payload = t, n != null && (s.callback = n), t = xn(e, s, o), t !== null && (wt(t, e, o, r), hi(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ze(), o = Sn(e), s = Ht(r, o);
  s.tag = 1, s.payload = t, n != null && (s.callback = n), t = xn(e, s, o), t !== null && (wt(t, e, o, r), hi(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ze(), r = Sn(e), o = Ht(n, r);
  o.tag = 2, t != null && (o.callback = t), t = xn(e, o, r), t !== null && (wt(t, e, r, n), hi(t, e, r));
} };
function Gf(e, t, n, r, o, s, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, i) : t.prototype && t.prototype.isPureReactComponent ? !Zo(n, r) || !Zo(o, s) : !0;
}
function Ug(e, t, n) {
  var r = !1, o = En, s = t.contextType;
  return typeof s == "object" && s !== null ? s = dt(s) : (o = Ke(t) ? Zn : Oe.current, r = t.contextTypes, s = (r = r != null) ? zr(e, o) : En), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = va, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = s), t;
}
function Yf(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && va.enqueueReplaceState(t, t.state, null);
}
function xu(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Oc(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? o.context = dt(s) : (s = Ke(t) ? Zn : Oe.current, o.context = zr(e, s)), o.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (vu(e, t, s, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && va.enqueueReplaceState(o, o.state, null), $i(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Wr(e, t) {
  try {
    var n = "", r = t;
    do
      n += Ow(r), r = r.return;
    while (r);
    var o = n;
  } catch (s) {
    o = `
Error generating stack: ` + s.message + `
` + s.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function fl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function wu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var uS = typeof WeakMap == "function" ? WeakMap : Map;
function Wg(e, t, n) {
  n = Ht(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Gi || (Gi = !0, Au = r), wu(e, t);
  }, n;
}
function Hg(e, t, n) {
  n = Ht(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      wu(e, t);
    };
  }
  var s = e.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
    wu(e, t), typeof r != "function" && (wn === null ? wn = /* @__PURE__ */ new Set([this]) : wn.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Xf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new uS();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = bS.bind(null, e, t, n), t.then(e, e));
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
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ht(-1, 1), t.tag = 2, xn(n, t, 1))), n.lanes |= 1), e);
}
var cS = tn.ReactCurrentOwner, We = !1;
function Fe(e, t, n, r) {
  t.child = e === null ? wg(t, null, n, r) : $r(t, e.child, n, r);
}
function qf(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return Lr(t, o), r = Bc(e, t, n, r, s, o), n = $c(), e !== null && !We ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Zt(e, t, o)) : (ie && n && Dc(t), t.flags |= 1, Fe(e, t, r, o), t.child);
}
function Jf(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" && !qc(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, Kg(e, t, s, r, o)) : (e = wi(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (s = e.child, !(e.lanes & o)) {
    var i = s.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Zo, n(i, r) && e.ref === t.ref) return Zt(e, t, o);
  }
  return t.flags |= 1, e = kn(s, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Kg(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Zo(s, r) && e.ref === t.ref) if (We = !1, t.pendingProps = r = s, (e.lanes & o) !== 0) e.flags & 131072 && (We = !0);
    else return t.lanes = e.lanes, Zt(e, t, o);
  }
  return Su(e, t, n, r, o);
}
function Gg(e, t, n) {
  var r = t.pendingProps, o = r.children, s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, J(Cr, Xe), Xe |= n;
  else {
    if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, J(Cr, Xe), Xe |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, J(Cr, Xe), Xe |= r;
  }
  else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, J(Cr, Xe), Xe |= r;
  return Fe(e, t, o, n), t.child;
}
function Yg(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Su(e, t, n, r, o) {
  var s = Ke(n) ? Zn : Oe.current;
  return s = zr(t, s), Lr(t, o), n = Bc(e, t, n, r, s, o), r = $c(), e !== null && !We ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Zt(e, t, o)) : (ie && r && Dc(t), t.flags |= 1, Fe(e, t, n, o), t.child);
}
function ep(e, t, n, r, o) {
  if (Ke(n)) {
    var s = !0;
    Ii(t);
  } else s = !1;
  if (Lr(t, o), t.stateNode === null) yi(e, t), Ug(t, n, r), xu(t, n, r, o), r = !0;
  else if (e === null) {
    var i = t.stateNode, a = t.memoizedProps;
    i.props = a;
    var l = i.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = dt(u) : (u = Ke(n) ? Zn : Oe.current, u = zr(t, u));
    var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    d || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || l !== u) && Yf(t, i, r, u), un = !1;
    var f = t.memoizedState;
    i.state = f, $i(t, r, i, o), l = t.memoizedState, a !== r || f !== l || He.current || un ? (typeof c == "function" && (vu(t, n, c, r), l = t.memoizedState), (a = un || Gf(t, n, a, r, f, l, u)) ? (d || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), i.props = r, i.state = l, i.context = u, r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, kg(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : gt(t.type, a), i.props = u, d = t.pendingProps, f = i.context, l = n.contextType, typeof l == "object" && l !== null ? l = dt(l) : (l = Ke(n) ? Zn : Oe.current, l = zr(t, l));
    var g = n.getDerivedStateFromProps;
    (c = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== d || f !== l) && Yf(t, i, r, l), un = !1, f = t.memoizedState, i.state = f, $i(t, r, i, o);
    var w = t.memoizedState;
    a !== d || f !== w || He.current || un ? (typeof g == "function" && (vu(t, n, g, r), w = t.memoizedState), (u = un || Gf(t, n, u, r, f, w, l) || !1) ? (c || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, l), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, l)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = l, r = u) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return ku(e, t, n, r, s, o);
}
function ku(e, t, n, r, o, s) {
  Yg(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && Ff(t, n, !1), Zt(e, t, s);
  r = t.stateNode, cS.current = t;
  var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = $r(t, e.child, null, s), t.child = $r(t, null, a, s)) : Fe(e, t, a, s), t.memoizedState = r.state, o && Ff(t, n, !0), t.child;
}
function Xg(e) {
  var t = e.stateNode;
  t.pendingContext ? Vf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Vf(e, t.context, !1), Ic(e, t.containerInfo);
}
function tp(e, t, n, r, o) {
  return Br(), Rc(o), t.flags |= 256, Fe(e, t, n, r), t.child;
}
var bu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Cu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Qg(e, t, n) {
  var r = t.pendingProps, o = ae.current, s = !1, i = (t.flags & 128) !== 0, a;
  if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), J(ae, o & 1), e === null)
    return gu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, i = { mode: "hidden", children: i }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = i) : s = Sa(i, r, 0, null), e = Xn(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Cu(n), t.memoizedState = bu, e) : Hc(t, i));
  if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null)) return dS(e, t, i, r, a, o, n);
  if (s) {
    s = r.fallback, i = t.mode, o = e.child, a = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = kn(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? s = kn(a, s) : (s = Xn(s, i, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, i = e.child.memoizedState, i = i === null ? Cu(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, s.memoizedState = i, s.childLanes = e.childLanes & ~n, t.memoizedState = bu, r;
  }
  return s = e.child, e = s.sibling, r = kn(s, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Hc(e, t) {
  return t = Sa({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Us(e, t, n, r) {
  return r !== null && Rc(r), $r(t, e.child, null, n), e = Hc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function dS(e, t, n, r, o, s, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = fl(Error(A(422))), Us(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, o = t.mode, r = Sa({ mode: "visible", children: r.children }, o, 0, null), s = Xn(s, o, i, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && $r(t, e.child, null, i), t.child.memoizedState = Cu(i), t.memoizedState = bu, s);
  if (!(t.mode & 1)) return Us(e, t, i, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var a = r.dgst;
    return r = a, s = Error(A(419)), r = fl(s, r, void 0), Us(e, t, i, r);
  }
  if (a = (i & e.childLanes) !== 0, We || a) {
    if (r = be, r !== null) {
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
      o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== s.retryLane && (s.retryLane = o, Qt(e, o), wt(r, e, o, -1));
    }
    return Zc(), r = fl(Error(A(421))), Us(e, t, i, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = CS.bind(null, e), o._reactRetry = t, null) : (e = s.treeContext, Ze = vn(o.nextSibling), qe = t, ie = !0, vt = null, e !== null && (at[lt++] = Ut, at[lt++] = Wt, at[lt++] = qn, Ut = e.id, Wt = e.overflow, qn = t), t = Hc(t, r.children), t.flags |= 4096, t);
}
function np(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), yu(e.return, t, n);
}
function pl(e, t, n, r, o) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = o);
}
function Zg(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, s = r.tail;
  if (Fe(e, t, r.children, n), r = ae.current, r & 2) r = r & 1 | 2, t.flags |= 128;
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
  if (J(ae, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Ui(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), pl(t, !1, o, n, s);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && Ui(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      pl(t, !0, n, null, s);
      break;
    case "together":
      pl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function yi(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Zt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), er |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(A(153));
  if (t.child !== null) {
    for (e = t.child, n = kn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = kn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function fS(e, t, n) {
  switch (t.tag) {
    case 3:
      Xg(t), Br();
      break;
    case 5:
      bg(t);
      break;
    case 1:
      Ke(t.type) && Ii(t);
      break;
    case 4:
      Ic(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      J(zi, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (J(ae, ae.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Qg(e, t, n) : (J(ae, ae.current & 1), e = Zt(e, t, n), e !== null ? e.sibling : null);
      J(ae, ae.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Zg(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), J(ae, ae.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Gg(e, t, n);
  }
  return Zt(e, t, n);
}
var qg, Pu, Jg, ey;
qg = function(e, t) {
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
Pu = function() {
};
Jg = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Kn(Lt.current);
    var s = null;
    switch (n) {
      case "input":
        o = Gl(e, o), r = Gl(e, r), s = [];
        break;
      case "select":
        o = ce({}, o, { value: void 0 }), r = ce({}, r, { value: void 0 }), s = [];
        break;
      case "textarea":
        o = Ql(e, o), r = Ql(e, r), s = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = _i);
    }
    ql(n, r);
    var i;
    n = null;
    for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
      var a = o[u];
      for (i in a) a.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Wo.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (a = o != null ? o[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null)) if (u === "style") if (a) {
        for (i in a) !a.hasOwnProperty(i) || l && l.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in l) l.hasOwnProperty(i) && a[i] !== l[i] && (n || (n = {}), n[i] = l[i]);
      } else n || (s || (s = []), s.push(
        u,
        n
      )), n = l;
      else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Wo.hasOwnProperty(u) ? (l != null && u === "onScroll" && ne("scroll", e), s || a === l || (s = [])) : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
ey = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function vo(e, t) {
  if (!ie) switch (e.tailMode) {
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
function pS(e, t, n) {
  var r = t.pendingProps;
  switch (Ac(t), t.tag) {
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
      return Ke(t.type) && Oi(), je(t), null;
    case 3:
      return r = t.stateNode, Ur(), re(He), re(Oe), Fc(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Bs(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, vt !== null && (Mu(vt), vt = null))), Pu(e, t), je(t), null;
    case 5:
      Vc(t);
      var o = Kn(ns.current);
      if (n = t.type, e !== null && t.stateNode != null) Jg(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(A(166));
          return je(t), null;
        }
        if (e = Kn(Lt.current), Bs(t)) {
          r = t.stateNode, n = t.type;
          var s = t.memoizedProps;
          switch (r[At] = t, r[es] = s, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ne("cancel", r), ne("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ne("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Eo.length; o++) ne(Eo[o], r);
              break;
            case "source":
              ne("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ne(
                "error",
                r
              ), ne("load", r);
              break;
            case "details":
              ne("toggle", r);
              break;
            case "input":
              df(r, s), ne("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!s.multiple }, ne("invalid", r);
              break;
            case "textarea":
              pf(r, s), ne("invalid", r);
          }
          ql(n, s), o = null;
          for (var i in s) if (s.hasOwnProperty(i)) {
            var a = s[i];
            i === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && zs(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && zs(
              r.textContent,
              a,
              e
            ), o = ["children", "" + a]) : Wo.hasOwnProperty(i) && a != null && i === "onScroll" && ne("scroll", r);
          }
          switch (n) {
            case "input":
              js(r), ff(r, s, !0);
              break;
            case "textarea":
              js(r), hf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = _i);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Nm(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[At] = t, e[es] = r, qg(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = Jl(n, r), n) {
              case "dialog":
                ne("cancel", e), ne("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ne("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Eo.length; o++) ne(Eo[o], e);
                o = r;
                break;
              case "source":
                ne("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                ne(
                  "error",
                  e
                ), ne("load", e), o = r;
                break;
              case "details":
                ne("toggle", e), o = r;
                break;
              case "input":
                df(e, r), o = Gl(e, r), ne("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = ce({}, r, { value: void 0 }), ne("invalid", e);
                break;
              case "textarea":
                pf(e, r), o = Ql(e, r), ne("invalid", e);
                break;
              default:
                o = r;
            }
            ql(n, o), a = o;
            for (s in a) if (a.hasOwnProperty(s)) {
              var l = a[s];
              s === "style" ? Rm(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Dm(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Ho(e, l) : typeof l == "number" && Ho(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Wo.hasOwnProperty(s) ? l != null && s === "onScroll" && ne("scroll", e) : l != null && mc(e, s, l, i));
            }
            switch (n) {
              case "input":
                js(e), ff(e, r, !1);
                break;
              case "textarea":
                js(e), hf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Pn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, s = r.value, s != null ? Ar(e, !!r.multiple, s, !1) : r.defaultValue != null && Ar(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = _i);
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
      if (e && t.stateNode != null) ey(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(A(166));
        if (n = Kn(ns.current), Kn(Lt.current), Bs(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[At] = t, (s = r.nodeValue !== n) && (e = qe, e !== null)) switch (e.tag) {
            case 3:
              zs(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && zs(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          s && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[At] = t, t.stateNode = r;
      }
      return je(t), null;
    case 13:
      if (re(ae), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ie && Ze !== null && t.mode & 1 && !(t.flags & 128)) vg(), Br(), t.flags |= 98560, s = !1;
        else if (s = Bs(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!s) throw Error(A(318));
            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(A(317));
            s[At] = t;
          } else Br(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          je(t), s = !1;
        } else vt !== null && (Mu(vt), vt = null), s = !0;
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ae.current & 1 ? Se === 0 && (Se = 3) : Zc())), t.updateQueue !== null && (t.flags |= 4), je(t), null);
    case 4:
      return Ur(), Pu(e, t), e === null && qo(t.stateNode.containerInfo), je(t), null;
    case 10:
      return Lc(t.type._context), je(t), null;
    case 17:
      return Ke(t.type) && Oi(), je(t), null;
    case 19:
      if (re(ae), s = t.memoizedState, s === null) return je(t), null;
      if (r = (t.flags & 128) !== 0, i = s.rendering, i === null) if (r) vo(s, !1);
      else {
        if (Se !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = Ui(e), i !== null) {
            for (t.flags |= 128, vo(s, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) s = n, e = r, s.flags &= 14680066, i = s.alternate, i === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = i.childLanes, s.lanes = i.lanes, s.child = i.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = i.memoizedProps, s.memoizedState = i.memoizedState, s.updateQueue = i.updateQueue, s.type = i.type, e = i.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return J(ae, ae.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        s.tail !== null && ye() > Hr && (t.flags |= 128, r = !0, vo(s, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Ui(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), vo(s, !0), s.tail === null && s.tailMode === "hidden" && !i.alternate && !ie) return je(t), null;
        } else 2 * ye() - s.renderingStartTime > Hr && n !== 1073741824 && (t.flags |= 128, r = !0, vo(s, !1), t.lanes = 4194304);
        s.isBackwards ? (i.sibling = t.child, t.child = i) : (n = s.last, n !== null ? n.sibling = i : t.child = i, s.last = i);
      }
      return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = ye(), t.sibling = null, n = ae.current, J(ae, r ? n & 1 | 2 : n & 1), t) : (je(t), null);
    case 22:
    case 23:
      return Qc(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Xe & 1073741824 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : je(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, t.tag));
}
function hS(e, t) {
  switch (Ac(t), t.tag) {
    case 1:
      return Ke(t.type) && Oi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Ur(), re(He), re(Oe), Fc(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Vc(t), null;
    case 13:
      if (re(ae), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(A(340));
        Br();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return re(ae), null;
    case 4:
      return Ur(), null;
    case 10:
      return Lc(t.type._context), null;
    case 22:
    case 23:
      return Qc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ws = !1, Le = !1, mS = typeof WeakSet == "function" ? WeakSet : Set, L = null;
function br(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    pe(e, t, r);
  }
  else n.current = null;
}
function Eu(e, t, n) {
  try {
    n();
  } catch (r) {
    pe(e, t, r);
  }
}
var rp = !1;
function gS(e, t) {
  if (uu = ji, e = sg(), Nc(e)) {
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
  for (cu = { focusedElem: e, selectionRange: n }, ji = !1, L = t; L !== null; ) if (t = L, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, L = e;
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
            var y = w.memoizedProps, S = w.memoizedState, m = t.stateNode, h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? y : gt(t.type, y), S);
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
      pe(t, t.return, k);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, L = e;
      break;
    }
    L = t.return;
  }
  return w = rp, rp = !1, w;
}
function Io(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var s = o.destroy;
        o.destroy = void 0, s !== void 0 && Eu(t, n, s);
      }
      o = o.next;
    } while (o !== r);
  }
}
function xa(e, t) {
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
function ty(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, ty(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[At], delete t[es], delete t[pu], delete t[q1], delete t[J1])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function ny(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function op(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || ny(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Nu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = _i));
  else if (r !== 4 && (e = e.child, e !== null)) for (Nu(e, t, n), e = e.sibling; e !== null; ) Nu(e, t, n), e = e.sibling;
}
function Du(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Du(e, t, n), e = e.sibling; e !== null; ) Du(e, t, n), e = e.sibling;
}
var Ce = null, yt = !1;
function nn(e, t, n) {
  for (n = n.child; n !== null; ) ry(e, t, n), n = n.sibling;
}
function ry(e, t, n) {
  if (Mt && typeof Mt.onCommitFiberUnmount == "function") try {
    Mt.onCommitFiberUnmount(da, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Le || br(n, t);
    case 6:
      var r = Ce, o = yt;
      Ce = null, nn(e, t, n), Ce = r, yt = o, Ce !== null && (yt ? (e = Ce, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ce.removeChild(n.stateNode));
      break;
    case 18:
      Ce !== null && (yt ? (e = Ce, n = n.stateNode, e.nodeType === 8 ? il(e.parentNode, n) : e.nodeType === 1 && il(e, n), Xo(e)) : il(Ce, n.stateNode));
      break;
    case 4:
      r = Ce, o = yt, Ce = n.stateNode.containerInfo, yt = !0, nn(e, t, n), Ce = r, yt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Le && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var s = o, i = s.destroy;
          s = s.tag, i !== void 0 && (s & 2 || s & 4) && Eu(n, t, i), o = o.next;
        } while (o !== r);
      }
      nn(e, t, n);
      break;
    case 1:
      if (!Le && (br(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (a) {
        pe(n, t, a);
      }
      nn(e, t, n);
      break;
    case 21:
      nn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Le = (r = Le) || n.memoizedState !== null, nn(e, t, n), Le = r) : nn(e, t, n);
      break;
    default:
      nn(e, t, n);
  }
}
function sp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new mS()), t.forEach(function(r) {
      var o = PS.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function pt(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var s = e, i = t, a = i;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case 5:
            Ce = a.stateNode, yt = !1;
            break e;
          case 3:
            Ce = a.stateNode.containerInfo, yt = !0;
            break e;
          case 4:
            Ce = a.stateNode.containerInfo, yt = !0;
            break e;
        }
        a = a.return;
      }
      if (Ce === null) throw Error(A(160));
      ry(s, i, o), Ce = null, yt = !1;
      var l = o.alternate;
      l !== null && (l.return = null), o.return = null;
    } catch (u) {
      pe(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) oy(t, e), t = t.sibling;
}
function oy(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (pt(t, e), Nt(e), r & 4) {
        try {
          Io(3, e, e.return), xa(3, e);
        } catch (y) {
          pe(e, e.return, y);
        }
        try {
          Io(5, e, e.return);
        } catch (y) {
          pe(e, e.return, y);
        }
      }
      break;
    case 1:
      pt(t, e), Nt(e), r & 512 && n !== null && br(n, n.return);
      break;
    case 5:
      if (pt(t, e), Nt(e), r & 512 && n !== null && br(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Ho(o, "");
        } catch (y) {
          pe(e, e.return, y);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var s = e.memoizedProps, i = n !== null ? n.memoizedProps : s, a = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          a === "input" && s.type === "radio" && s.name != null && Em(o, s), Jl(a, i);
          var u = Jl(a, s);
          for (i = 0; i < l.length; i += 2) {
            var c = l[i], d = l[i + 1];
            c === "style" ? Rm(o, d) : c === "dangerouslySetInnerHTML" ? Dm(o, d) : c === "children" ? Ho(o, d) : mc(o, c, d, u);
          }
          switch (a) {
            case "input":
              Yl(o, s);
              break;
            case "textarea":
              Tm(o, s);
              break;
            case "select":
              var f = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!s.multiple;
              var g = s.value;
              g != null ? Ar(o, !!s.multiple, g, !1) : f !== !!s.multiple && (s.defaultValue != null ? Ar(
                o,
                !!s.multiple,
                s.defaultValue,
                !0
              ) : Ar(o, !!s.multiple, s.multiple ? [] : "", !1));
          }
          o[es] = s;
        } catch (y) {
          pe(e, e.return, y);
        }
      }
      break;
    case 6:
      if (pt(t, e), Nt(e), r & 4) {
        if (e.stateNode === null) throw Error(A(162));
        o = e.stateNode, s = e.memoizedProps;
        try {
          o.nodeValue = s;
        } catch (y) {
          pe(e, e.return, y);
        }
      }
      break;
    case 3:
      if (pt(t, e), Nt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Xo(t.containerInfo);
      } catch (y) {
        pe(e, e.return, y);
      }
      break;
    case 4:
      pt(t, e), Nt(e);
      break;
    case 13:
      pt(t, e), Nt(e), o = e.child, o.flags & 8192 && (s = o.memoizedState !== null, o.stateNode.isHidden = s, !s || o.alternate !== null && o.alternate.memoizedState !== null || (Yc = ye())), r & 4 && sp(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Le = (u = Le) || c, pt(t, e), Le = u) : pt(t, e), Nt(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (L = e, c = e.child; c !== null; ) {
          for (d = L = c; L !== null; ) {
            switch (f = L, g = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Io(4, f, f.return);
                break;
              case 1:
                br(f, f.return);
                var w = f.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = f, n = f.return;
                  try {
                    t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                  } catch (y) {
                    pe(r, n, y);
                  }
                }
                break;
              case 5:
                br(f, f.return);
                break;
              case 22:
                if (f.memoizedState !== null) {
                  ap(d);
                  continue;
                }
            }
            g !== null ? (g.return = f, L = g) : ap(d);
          }
          c = c.sibling;
        }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                o = d.stateNode, u ? (s = o.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = d.stateNode, l = d.memoizedProps.style, i = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Am("display", i));
              } catch (y) {
                pe(e, e.return, y);
              }
            }
          } else if (d.tag === 6) {
            if (c === null) try {
              d.stateNode.nodeValue = u ? "" : d.memoizedProps;
            } catch (y) {
              pe(e, e.return, y);
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
      pt(t, e), Nt(e), r & 4 && sp(e);
      break;
    case 21:
      break;
    default:
      pt(
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
          if (ny(n)) {
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
          r.flags & 32 && (Ho(o, ""), r.flags &= -33);
          var s = op(e);
          Du(e, s, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, a = op(e);
          Nu(e, a, i);
          break;
        default:
          throw Error(A(161));
      }
    } catch (l) {
      pe(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function yS(e, t, n) {
  L = e, sy(e);
}
function sy(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var o = L, s = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Ws;
      if (!i) {
        var a = o.alternate, l = a !== null && a.memoizedState !== null || Le;
        a = Ws;
        var u = Le;
        if (Ws = i, (Le = l) && !u) for (L = o; L !== null; ) i = L, l = i.child, i.tag === 22 && i.memoizedState !== null ? lp(o) : l !== null ? (l.return = i, L = l) : lp(o);
        for (; s !== null; ) L = s, sy(s), s = s.sibling;
        L = o, Ws = a, Le = u;
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
            Le || xa(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Le) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : gt(t.type, n.memoizedProps);
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
                  d !== null && Xo(d);
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
        Le || t.flags & 512 && Tu(t);
      } catch (f) {
        pe(t, t.return, f);
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
            xa(4, t);
          } catch (l) {
            pe(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              pe(t, o, l);
            }
          }
          var s = t.return;
          try {
            Tu(t);
          } catch (l) {
            pe(t, s, l);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Tu(t);
          } catch (l) {
            pe(t, i, l);
          }
      }
    } catch (l) {
      pe(t, t.return, l);
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
var vS = Math.ceil, Ki = tn.ReactCurrentDispatcher, Kc = tn.ReactCurrentOwner, ct = tn.ReactCurrentBatchConfig, G = 0, be = null, ve = null, Ee = 0, Xe = 0, Cr = Mn(0), Se = 0, is = null, er = 0, wa = 0, Gc = 0, Vo = null, Ue = null, Yc = 0, Hr = 1 / 0, Bt = null, Gi = !1, Au = null, wn = null, Hs = !1, hn = null, Yi = 0, Fo = 0, Ru = null, vi = -1, xi = 0;
function ze() {
  return G & 6 ? ye() : vi !== -1 ? vi : vi = ye();
}
function Sn(e) {
  return e.mode & 1 ? G & 2 && Ee !== 0 ? Ee & -Ee : tS.transition !== null ? (xi === 0 && (xi = Um()), xi) : (e = X, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Qm(e.type)), e) : 1;
}
function wt(e, t, n, r) {
  if (50 < Fo) throw Fo = 0, Ru = null, Error(A(185));
  ys(e, n, r), (!(G & 2) || e !== be) && (e === be && (!(G & 2) && (wa |= n), Se === 4 && dn(e, Ee)), Ge(e, r), n === 1 && G === 0 && !(t.mode & 1) && (Hr = ye() + 500, ga && Ln()));
}
function Ge(e, t) {
  var n = e.callbackNode;
  t1(e, t);
  var r = Ri(e, e === be ? Ee : 0);
  if (r === 0) n !== null && yf(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && yf(n), t === 1) e.tag === 0 ? eS(up.bind(null, e)) : mg(up.bind(null, e)), Q1(function() {
      !(G & 6) && Ln();
    }), n = null;
    else {
      switch (Wm(r)) {
        case 1:
          n = wc;
          break;
        case 4:
          n = Bm;
          break;
        case 16:
          n = Ai;
          break;
        case 536870912:
          n = $m;
          break;
        default:
          n = Ai;
      }
      n = py(n, iy.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function iy(e, t) {
  if (vi = -1, xi = 0, G & 6) throw Error(A(327));
  var n = e.callbackNode;
  if (_r() && e.callbackNode !== n) return null;
  var r = Ri(e, e === be ? Ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Xi(e, r);
  else {
    t = r;
    var o = G;
    G |= 2;
    var s = ly();
    (be !== e || Ee !== t) && (Bt = null, Hr = ye() + 500, Yn(e, t));
    do
      try {
        SS();
        break;
      } catch (a) {
        ay(e, a);
      }
    while (!0);
    Mc(), Ki.current = s, G = o, ve !== null ? t = 0 : (be = null, Ee = 0, t = Se);
  }
  if (t !== 0) {
    if (t === 2 && (o = ou(e), o !== 0 && (r = o, t = ju(e, o))), t === 1) throw n = is, Yn(e, 0), dn(e, r), Ge(e, ye()), n;
    if (t === 6) dn(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !xS(o) && (t = Xi(e, r), t === 2 && (s = ou(e), s !== 0 && (r = s, t = ju(e, s))), t === 1)) throw n = is, Yn(e, 0), dn(e, r), Ge(e, ye()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          Bn(e, Ue, Bt);
          break;
        case 3:
          if (dn(e, r), (r & 130023424) === r && (t = Yc + 500 - ye(), 10 < t)) {
            if (Ri(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              ze(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = fu(Bn.bind(null, e, Ue, Bt), t);
            break;
          }
          Bn(e, Ue, Bt);
          break;
        case 4:
          if (dn(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - xt(r);
            s = 1 << i, i = t[i], i > o && (o = i), r &= ~s;
          }
          if (r = o, r = ye() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * vS(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = fu(Bn.bind(null, e, Ue, Bt), r);
            break;
          }
          Bn(e, Ue, Bt);
          break;
        case 5:
          Bn(e, Ue, Bt);
          break;
        default:
          throw Error(A(329));
      }
    }
  }
  return Ge(e, ye()), e.callbackNode === n ? iy.bind(null, e) : null;
}
function ju(e, t) {
  var n = Vo;
  return e.current.memoizedState.isDehydrated && (Yn(e, t).flags |= 256), e = Xi(e, t), e !== 2 && (t = Ue, Ue = n, t !== null && Mu(t)), e;
}
function Mu(e) {
  Ue === null ? Ue = e : Ue.push.apply(Ue, e);
}
function xS(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], s = o.getSnapshot;
        o = o.value;
        try {
          if (!St(s(), o)) return !1;
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
function dn(e, t) {
  for (t &= ~Gc, t &= ~wa, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - xt(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function up(e) {
  if (G & 6) throw Error(A(327));
  _r();
  var t = Ri(e, 0);
  if (!(t & 1)) return Ge(e, ye()), null;
  var n = Xi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ou(e);
    r !== 0 && (t = r, n = ju(e, r));
  }
  if (n === 1) throw n = is, Yn(e, 0), dn(e, t), Ge(e, ye()), n;
  if (n === 6) throw Error(A(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Bn(e, Ue, Bt), Ge(e, ye()), null;
}
function Xc(e, t) {
  var n = G;
  G |= 1;
  try {
    return e(t);
  } finally {
    G = n, G === 0 && (Hr = ye() + 500, ga && Ln());
  }
}
function tr(e) {
  hn !== null && hn.tag === 0 && !(G & 6) && _r();
  var t = G;
  G |= 1;
  var n = ct.transition, r = X;
  try {
    if (ct.transition = null, X = 1, e) return e();
  } finally {
    X = r, ct.transition = n, G = t, !(G & 6) && Ln();
  }
}
function Qc() {
  Xe = Cr.current, re(Cr);
}
function Yn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, X1(n)), ve !== null) for (n = ve.return; n !== null; ) {
    var r = n;
    switch (Ac(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Oi();
        break;
      case 3:
        Ur(), re(He), re(Oe), Fc();
        break;
      case 5:
        Vc(r);
        break;
      case 4:
        Ur();
        break;
      case 13:
        re(ae);
        break;
      case 19:
        re(ae);
        break;
      case 10:
        Lc(r.type._context);
        break;
      case 22:
      case 23:
        Qc();
    }
    n = n.return;
  }
  if (be = e, ve = e = kn(e.current, null), Ee = Xe = t, Se = 0, is = null, Gc = wa = er = 0, Ue = Vo = null, Hn !== null) {
    for (t = 0; t < Hn.length; t++) if (n = Hn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, s = n.pending;
      if (s !== null) {
        var i = s.next;
        s.next = o, r.next = i;
      }
      n.pending = r;
    }
    Hn = null;
  }
  return e;
}
function ay(e, t) {
  do {
    var n = ve;
    try {
      if (Mc(), mi.current = Hi, Wi) {
        for (var r = ue.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Wi = !1;
      }
      if (Jn = 0, ke = xe = ue = null, Oo = !1, rs = 0, Kc.current = null, n === null || n.return === null) {
        Se = 1, is = t, ve = null;
        break;
      }
      e: {
        var s = e, i = n.return, a = n, l = t;
        if (t = Ee, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = a, d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var g = Qf(i);
          if (g !== null) {
            g.flags &= -257, Zf(g, i, a, s, t), g.mode & 1 && Xf(s, u, t), t = g, l = u;
            var w = t.updateQueue;
            if (w === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(l), t.updateQueue = y;
            } else w.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Xf(s, u, t), Zc();
              break e;
            }
            l = Error(A(426));
          }
        } else if (ie && a.mode & 1) {
          var S = Qf(i);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), Zf(S, i, a, s, t), Rc(Wr(l, a));
            break e;
          }
        }
        s = l = Wr(l, a), Se !== 4 && (Se = 2), Vo === null ? Vo = [s] : Vo.push(s), s = i;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, t &= -t, s.lanes |= t;
              var m = Wg(s, l, t);
              Uf(s, m);
              break e;
            case 1:
              a = l;
              var h = s.type, v = s.stateNode;
              if (!(s.flags & 128) && (typeof h.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (wn === null || !wn.has(v)))) {
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var k = Hg(s, a, t);
                Uf(s, k);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      cy(n);
    } catch (b) {
      t = b, ve === n && n !== null && (ve = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function ly() {
  var e = Ki.current;
  return Ki.current = Hi, e === null ? Hi : e;
}
function Zc() {
  (Se === 0 || Se === 3 || Se === 2) && (Se = 4), be === null || !(er & 268435455) && !(wa & 268435455) || dn(be, Ee);
}
function Xi(e, t) {
  var n = G;
  G |= 2;
  var r = ly();
  (be !== e || Ee !== t) && (Bt = null, Yn(e, t));
  do
    try {
      wS();
      break;
    } catch (o) {
      ay(e, o);
    }
  while (!0);
  if (Mc(), G = n, Ki.current = r, ve !== null) throw Error(A(261));
  return be = null, Ee = 0, Se;
}
function wS() {
  for (; ve !== null; ) uy(ve);
}
function SS() {
  for (; ve !== null && !Kw(); ) uy(ve);
}
function uy(e) {
  var t = fy(e.alternate, e, Xe);
  e.memoizedProps = e.pendingProps, t === null ? cy(e) : ve = t, Kc.current = null;
}
function cy(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = hS(n, t), n !== null) {
        n.flags &= 32767, ve = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Se = 6, ve = null;
        return;
      }
    } else if (n = pS(n, t, Xe), n !== null) {
      ve = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ve = t;
      return;
    }
    ve = t = e;
  } while (t !== null);
  Se === 0 && (Se = 5);
}
function Bn(e, t, n) {
  var r = X, o = ct.transition;
  try {
    ct.transition = null, X = 1, kS(e, t, n, r);
  } finally {
    ct.transition = o, X = r;
  }
  return null;
}
function kS(e, t, n, r) {
  do
    _r();
  while (hn !== null);
  if (G & 6) throw Error(A(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(A(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var s = n.lanes | n.childLanes;
  if (n1(e, s), e === be && (ve = be = null, Ee = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Hs || (Hs = !0, py(Ai, function() {
    return _r(), null;
  })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
    s = ct.transition, ct.transition = null;
    var i = X;
    X = 1;
    var a = G;
    G |= 4, Kc.current = null, gS(e, n), oy(n, e), $1(cu), ji = !!uu, cu = uu = null, e.current = n, yS(n), Gw(), G = a, X = i, ct.transition = s;
  } else e.current = n;
  if (Hs && (Hs = !1, hn = e, Yi = o), s = e.pendingLanes, s === 0 && (wn = null), Qw(n.stateNode), Ge(e, ye()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Gi) throw Gi = !1, e = Au, Au = null, e;
  return Yi & 1 && e.tag !== 0 && _r(), s = e.pendingLanes, s & 1 ? e === Ru ? Fo++ : (Fo = 0, Ru = e) : Fo = 0, Ln(), null;
}
function _r() {
  if (hn !== null) {
    var e = Wm(Yi), t = ct.transition, n = X;
    try {
      if (ct.transition = null, X = 16 > e ? 16 : e, hn === null) var r = !1;
      else {
        if (e = hn, hn = null, Yi = 0, G & 6) throw Error(A(331));
        var o = G;
        for (G |= 4, L = e.current; L !== null; ) {
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
                      Io(8, c, s);
                  }
                  var d = c.child;
                  if (d !== null) d.return = c, L = d;
                  else for (; L !== null; ) {
                    c = L;
                    var f = c.sibling, g = c.return;
                    if (ty(c), c === u) {
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
                Io(9, s, s.return);
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
                  xa(9, a);
              }
            } catch (b) {
              pe(a, a.return, b);
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
        if (G = o, Ln(), Mt && typeof Mt.onPostCommitFiberRoot == "function") try {
          Mt.onPostCommitFiberRoot(da, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      X = n, ct.transition = t;
    }
  }
  return !1;
}
function cp(e, t, n) {
  t = Wr(n, t), t = Wg(e, t, 1), e = xn(e, t, 1), t = ze(), e !== null && (ys(e, 1, t), Ge(e, t));
}
function pe(e, t, n) {
  if (e.tag === 3) cp(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      cp(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (wn === null || !wn.has(r))) {
        e = Wr(n, e), e = Hg(t, e, 1), t = xn(t, e, 1), e = ze(), t !== null && (ys(t, 1, e), Ge(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function bS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ze(), e.pingedLanes |= e.suspendedLanes & n, be === e && (Ee & n) === n && (Se === 4 || Se === 3 && (Ee & 130023424) === Ee && 500 > ye() - Yc ? Yn(e, 0) : Gc |= n), Ge(e, t);
}
function dy(e, t) {
  t === 0 && (e.mode & 1 ? (t = _s, _s <<= 1, !(_s & 130023424) && (_s = 4194304)) : t = 1);
  var n = ze();
  e = Qt(e, t), e !== null && (ys(e, t, n), Ge(e, n));
}
function CS(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), dy(e, n);
}
function PS(e, t) {
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
  r !== null && r.delete(t), dy(e, n);
}
var fy;
fy = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || He.current) We = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return We = !1, fS(e, t, n);
    We = !!(e.flags & 131072);
  }
  else We = !1, ie && t.flags & 1048576 && gg(t, Fi, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      yi(e, t), e = t.pendingProps;
      var o = zr(t, Oe.current);
      Lr(t, n), o = Bc(null, t, r, e, o, n);
      var s = $c();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ke(r) ? (s = !0, Ii(t)) : s = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Oc(t), o.updater = va, t.stateNode = o, o._reactInternals = t, xu(t, r, e, n), t = ku(null, t, r, !0, s, n)) : (t.tag = 0, ie && s && Dc(t), Fe(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (yi(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = TS(r), e = gt(r, e), o) {
          case 0:
            t = Su(null, t, r, e, n);
            break e;
          case 1:
            t = ep(null, t, r, e, n);
            break e;
          case 11:
            t = qf(null, t, r, e, n);
            break e;
          case 14:
            t = Jf(null, t, r, gt(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : gt(r, o), Su(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : gt(r, o), ep(e, t, r, o, n);
    case 3:
      e: {
        if (Xg(t), e === null) throw Error(A(387));
        r = t.pendingProps, s = t.memoizedState, o = s.element, kg(e, t), $i(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, s.isDehydrated) if (s = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
          o = Wr(Error(A(423)), t), t = tp(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = Wr(Error(A(424)), t), t = tp(e, t, r, n, o);
          break e;
        } else for (Ze = vn(t.stateNode.containerInfo.firstChild), qe = t, ie = !0, vt = null, n = wg(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Br(), r === o) {
            t = Zt(e, t, n);
            break e;
          }
          Fe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return bg(t), e === null && gu(t), r = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, i = o.children, du(r, o) ? i = null : s !== null && du(r, s) && (t.flags |= 32), Yg(e, t), Fe(e, t, i, n), t.child;
    case 6:
      return e === null && gu(t), null;
    case 13:
      return Qg(e, t, n);
    case 4:
      return Ic(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = $r(t, null, r, n) : Fe(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : gt(r, o), qf(e, t, r, o, n);
    case 7:
      return Fe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Fe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Fe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, s = t.memoizedProps, i = o.value, J(zi, r._currentValue), r._currentValue = i, s !== null) if (St(s.value, i)) {
          if (s.children === o.children && !He.current) {
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
                  l = Ht(-1, n & -n), l.tag = 2;
                  var u = s.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                  }
                }
                s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), yu(
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
            i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), yu(i, n, t), i = s.sibling;
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
        Fe(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Lr(t, n), o = dt(o), r = r(o), t.flags |= 1, Fe(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = gt(r, t.pendingProps), o = gt(r.type, o), Jf(e, t, r, o, n);
    case 15:
      return Kg(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : gt(r, o), yi(e, t), t.tag = 1, Ke(r) ? (e = !0, Ii(t)) : e = !1, Lr(t, n), Ug(t, r, o), xu(t, r, o, n), ku(null, t, r, !0, e, n);
    case 19:
      return Zg(e, t, n);
    case 22:
      return Gg(e, t, n);
  }
  throw Error(A(156, t.tag));
};
function py(e, t) {
  return zm(e, t);
}
function ES(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ut(e, t, n, r) {
  return new ES(e, t, n, r);
}
function qc(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function TS(e) {
  if (typeof e == "function") return qc(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === yc) return 11;
    if (e === vc) return 14;
  }
  return 2;
}
function kn(e, t) {
  var n = e.alternate;
  return n === null ? (n = ut(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function wi(e, t, n, r, o, s) {
  var i = 2;
  if (r = e, typeof e == "function") qc(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case hr:
      return Xn(n.children, o, s, t);
    case gc:
      i = 8, o |= 8;
      break;
    case Ul:
      return e = ut(12, n, t, o | 2), e.elementType = Ul, e.lanes = s, e;
    case Wl:
      return e = ut(13, n, t, o), e.elementType = Wl, e.lanes = s, e;
    case Hl:
      return e = ut(19, n, t, o), e.elementType = Hl, e.lanes = s, e;
    case bm:
      return Sa(n, o, s, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Sm:
          i = 10;
          break e;
        case km:
          i = 9;
          break e;
        case yc:
          i = 11;
          break e;
        case vc:
          i = 14;
          break e;
        case ln:
          i = 16, r = null;
          break e;
      }
      throw Error(A(130, e == null ? e : typeof e, ""));
  }
  return t = ut(i, n, t, o), t.elementType = e, t.type = r, t.lanes = s, t;
}
function Xn(e, t, n, r) {
  return e = ut(7, e, r, t), e.lanes = n, e;
}
function Sa(e, t, n, r) {
  return e = ut(22, e, r, t), e.elementType = bm, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function hl(e, t, n) {
  return e = ut(6, e, null, t), e.lanes = n, e;
}
function ml(e, t, n) {
  return t = ut(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function NS(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Xa(0), this.expirationTimes = Xa(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xa(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Jc(e, t, n, r, o, s, i, a, l) {
  return e = new NS(e, t, n, a, l), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = ut(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Oc(s), e;
}
function DS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: pr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function hy(e) {
  if (!e) return En;
  e = e._reactInternals;
  e: {
    if (ar(e) !== e || e.tag !== 1) throw Error(A(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ke(t.type)) {
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
    if (Ke(n)) return hg(e, n, t);
  }
  return t;
}
function my(e, t, n, r, o, s, i, a, l) {
  return e = Jc(n, r, !0, e, o, s, i, a, l), e.context = hy(null), n = e.current, r = ze(), o = Sn(n), s = Ht(r, o), s.callback = t ?? null, xn(n, s, o), e.current.lanes = o, ys(e, o, r), Ge(e, r), e;
}
function ka(e, t, n, r) {
  var o = t.current, s = ze(), i = Sn(o);
  return n = hy(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ht(s, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = xn(o, t, i), e !== null && (wt(e, o, i, s), hi(e, o, i)), i;
}
function Qi(e) {
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
function ed(e, t) {
  dp(e, t), (e = e.alternate) && dp(e, t);
}
function AS() {
  return null;
}
var gy = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function td(e) {
  this._internalRoot = e;
}
ba.prototype.render = td.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(A(409));
  ka(e, t, null, null);
};
ba.prototype.unmount = td.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    tr(function() {
      ka(null, e, null, null);
    }), t[Xt] = null;
  }
};
function ba(e) {
  this._internalRoot = e;
}
ba.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Gm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < cn.length && t !== 0 && t < cn[n].priority; n++) ;
    cn.splice(n, 0, e), n === 0 && Xm(e);
  }
};
function nd(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ca(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function fp() {
}
function RS(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var u = Qi(i);
        s.call(u);
      };
    }
    var i = my(t, r, e, 0, null, !1, !1, "", fp);
    return e._reactRootContainer = i, e[Xt] = i.current, qo(e.nodeType === 8 ? e.parentNode : e), tr(), i;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var u = Qi(l);
      a.call(u);
    };
  }
  var l = Jc(e, 0, !1, null, null, !1, !1, "", fp);
  return e._reactRootContainer = l, e[Xt] = l.current, qo(e.nodeType === 8 ? e.parentNode : e), tr(function() {
    ka(t, l, n, r);
  }), l;
}
function Pa(e, t, n, r, o) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof o == "function") {
      var a = o;
      o = function() {
        var l = Qi(i);
        a.call(l);
      };
    }
    ka(t, i, e, o);
  } else i = RS(n, t, e, o, r);
  return Qi(i);
}
Hm = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Po(t.pendingLanes);
        n !== 0 && (Sc(t, n | 1), Ge(t, ye()), !(G & 6) && (Hr = ye() + 500, Ln()));
      }
      break;
    case 13:
      tr(function() {
        var r = Qt(e, 1);
        if (r !== null) {
          var o = ze();
          wt(r, e, 1, o);
        }
      }), ed(e, 1);
  }
};
kc = function(e) {
  if (e.tag === 13) {
    var t = Qt(e, 134217728);
    if (t !== null) {
      var n = ze();
      wt(t, e, 134217728, n);
    }
    ed(e, 134217728);
  }
};
Km = function(e) {
  if (e.tag === 13) {
    var t = Sn(e), n = Qt(e, t);
    if (n !== null) {
      var r = ze();
      wt(n, e, t, r);
    }
    ed(e, t);
  }
};
Gm = function() {
  return X;
};
Ym = function(e, t) {
  var n = X;
  try {
    return X = e, t();
  } finally {
    X = n;
  }
};
tu = function(e, t, n) {
  switch (t) {
    case "input":
      if (Yl(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = ma(r);
            if (!o) throw Error(A(90));
            Pm(r), Yl(r, o);
          }
        }
      }
      break;
    case "textarea":
      Tm(e, n);
      break;
    case "select":
      t = n.value, t != null && Ar(e, !!n.multiple, t, !1);
  }
};
Lm = Xc;
_m = tr;
var jS = { usingClientEntryPoint: !1, Events: [xs, vr, ma, jm, Mm, Xc] }, xo = { findFiberByHostInstance: Wn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, MS = { bundleType: xo.bundleType, version: xo.version, rendererPackageName: xo.rendererPackageName, rendererConfig: xo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: tn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Vm(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: xo.findFiberByHostInstance || AS, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ks = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ks.isDisabled && Ks.supportsFiber) try {
    da = Ks.inject(MS), Mt = Ks;
  } catch {
  }
}
rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jS;
rt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!nd(t)) throw Error(A(200));
  return DS(e, t, null, n);
};
rt.createRoot = function(e, t) {
  if (!nd(e)) throw Error(A(299));
  var n = !1, r = "", o = gy;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Jc(e, 1, !1, null, null, n, !1, r, o), e[Xt] = t.current, qo(e.nodeType === 8 ? e.parentNode : e), new td(t);
};
rt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(A(188)) : (e = Object.keys(e).join(","), Error(A(268, e)));
  return e = Vm(t), e = e === null ? null : e.stateNode, e;
};
rt.flushSync = function(e) {
  return tr(e);
};
rt.hydrate = function(e, t, n) {
  if (!Ca(t)) throw Error(A(200));
  return Pa(null, e, t, !0, n);
};
rt.hydrateRoot = function(e, t, n) {
  if (!nd(e)) throw Error(A(405));
  var r = n != null && n.hydratedSources || null, o = !1, s = "", i = gy;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = my(t, null, e, 1, n ?? null, o, !1, s, i), e[Xt] = t.current, qo(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new ba(t);
};
rt.render = function(e, t, n) {
  if (!Ca(t)) throw Error(A(200));
  return Pa(null, e, t, !1, n);
};
rt.unmountComponentAtNode = function(e) {
  if (!Ca(e)) throw Error(A(40));
  return e._reactRootContainer ? (tr(function() {
    Pa(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Xt] = null;
    });
  }), !0) : !1;
};
rt.unstable_batchedUpdates = Xc;
rt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ca(n)) throw Error(A(200));
  if (e == null || e._reactInternals === void 0) throw Error(A(38));
  return Pa(e, t, n, !1, r);
};
rt.version = "18.3.1-next-f1338f8080-20240426";
function yy() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yy);
    } catch (e) {
      console.error(e);
    }
}
yy(), ym.exports = rt;
var eo = ym.exports;
const LS = /* @__PURE__ */ om(eo);
var Ea, pp = eo;
Ea = pp.createRoot, pp.hydrateRoot;
function vy(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = vy(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function _S() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = vy(e)) && (r && (r += " "), r += t);
  return r;
}
const rd = "-", OS = (e) => {
  const t = VS(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const a = i.split(rd);
      return a[0] === "" && a.length !== 1 && a.shift(), xy(a, t) || IS(i);
    },
    getConflictingClassGroupIds: (i, a) => {
      const l = n[i] || [];
      return a && r[i] ? [...l, ...r[i]] : l;
    }
  };
}, xy = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? xy(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(rd);
  return (i = t.validators.find(({
    validator: a
  }) => a(s))) == null ? void 0 : i.classGroupId;
}, hp = /^\[(.+)\]$/, IS = (e) => {
  if (hp.test(e)) {
    const t = hp.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, VS = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return zS(Object.entries(e.classGroups), n).forEach(([s, i]) => {
    Lu(i, r, s, t);
  }), r;
}, Lu = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : mp(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (FS(o)) {
        Lu(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([s, i]) => {
      Lu(i, mp(t, s), n, r);
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
}, FS = (e) => e.isThemeGetter, zS = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([i, a]) => [t + i, a])) : s);
  return [n, o];
}) : e, BS = (e) => {
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
}, wy = "!", $S = (e) => {
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
    const f = l.length === 0 ? a : a.substring(c), g = f.startsWith(wy), w = g ? f.substring(1) : f, y = d && d > c ? d - c : void 0;
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
}, US = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, WS = (e) => ({
  cache: BS(e.cacheSize),
  parseClassName: $S(e),
  ...OS(e)
}), HS = /\s+/, KS = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, s = [], i = e.trim().split(HS);
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
    const S = US(c).join(":"), m = d ? S + wy : S, h = m + y;
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
function GS() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Sy(t)) && (r && (r += " "), r += n);
  return r;
}
const Sy = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Sy(e[r])) && (n && (n += " "), n += t);
  return n;
};
function YS(e, ...t) {
  let n, r, o, s = i;
  function i(l) {
    const u = t.reduce((c, d) => d(c), e());
    return n = WS(u), r = n.cache.get, o = n.cache.set, s = a, a(l);
  }
  function a(l) {
    const u = r(l);
    if (u)
      return u;
    const c = KS(l, n);
    return o(l, c), c;
  }
  return function() {
    return s(GS.apply(null, arguments));
  };
}
const te = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, ky = /^\[(?:([a-z-]+):)?(.+)\]$/i, XS = /^\d+\/\d+$/, QS = /* @__PURE__ */ new Set(["px", "full", "screen"]), ZS = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, qS = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, JS = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, ek = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, tk = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, zt = (e) => Or(e) || QS.has(e) || XS.test(e), rn = (e) => to(e, "length", uk), Or = (e) => !!e && !Number.isNaN(Number(e)), gl = (e) => to(e, "number", Or), wo = (e) => !!e && Number.isInteger(Number(e)), nk = (e) => e.endsWith("%") && Or(e.slice(0, -1)), U = (e) => ky.test(e), on = (e) => ZS.test(e), rk = /* @__PURE__ */ new Set(["length", "size", "percentage"]), ok = (e) => to(e, rk, by), sk = (e) => to(e, "position", by), ik = /* @__PURE__ */ new Set(["image", "url"]), ak = (e) => to(e, ik, dk), lk = (e) => to(e, "", ck), So = () => !0, to = (e, t, n) => {
  const r = ky.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, uk = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  qS.test(e) && !JS.test(e)
), by = () => !1, ck = (e) => ek.test(e), dk = (e) => tk.test(e), fk = () => {
  const e = te("colors"), t = te("spacing"), n = te("blur"), r = te("brightness"), o = te("borderColor"), s = te("borderRadius"), i = te("borderSpacing"), a = te("borderWidth"), l = te("contrast"), u = te("grayscale"), c = te("hueRotate"), d = te("invert"), f = te("gap"), g = te("gradientColorStops"), w = te("gradientColorStopPositions"), y = te("inset"), S = te("margin"), m = te("opacity"), h = te("padding"), v = te("saturate"), k = te("scale"), b = te("sepia"), C = te("skew"), P = te("space"), E = te("translate"), D = () => ["auto", "contain", "none"], N = () => ["auto", "hidden", "clip", "visible", "scroll"], M = () => ["auto", U, t], R = () => [U, t], z = () => ["", zt, rn], B = () => ["auto", Or, U], K = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], O = () => ["solid", "dashed", "dotted", "double", "none"], I = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], T = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], j = () => ["", "0", U], _ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], $ = () => [Or, U];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [So],
      spacing: [zt, rn],
      blur: ["none", "", on, U],
      brightness: $(),
      borderColor: [e],
      borderRadius: ["none", "", "full", on, U],
      borderSpacing: R(),
      borderWidth: z(),
      contrast: $(),
      grayscale: j(),
      hueRotate: $(),
      invert: j(),
      gap: R(),
      gradientColorStops: [e],
      gradientColorStopPositions: [nk, rn],
      inset: M(),
      margin: M(),
      opacity: $(),
      padding: R(),
      saturate: $(),
      scale: $(),
      sepia: j(),
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
        columns: [on]
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
        object: [...K(), U]
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
        z: ["auto", wo, U]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: M()
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
        order: ["first", "last", "none", wo, U]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [So]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", wo, U]
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
        "grid-rows": [So]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [wo, U]
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
          screen: [on]
        }, on]
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
        text: ["base", on, rn]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", gl]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [So]
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
        "line-clamp": ["none", Or, gl]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", zt, U]
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
        decoration: ["auto", "from-font", zt, rn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", zt, U]
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
        bg: [...K(), sk]
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
        bg: ["auto", "cover", "contain", ok]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, ak]
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
        "outline-offset": [zt, U]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [zt, rn]
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
        "ring-offset": [zt, rn]
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
        shadow: ["", "inner", "none", on, lk]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [So]
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
        "drop-shadow": ["", "none", on, U]
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
        rotate: [wo, U]
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
        stroke: [zt, rn, gl]
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
}, pk = /* @__PURE__ */ YS(fk);
function he(...e) {
  return pk(_S(e));
}
function od({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "card",
      className: he(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        e
      ),
      ...t
    }
  );
}
function Cy({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "card-content",
      className: he("px-6", e),
      ...t
    }
  );
}
function hk({ className: e, ...t }) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      "data-slot": "card-footer",
      className: he("flex items-center px-6 [.border-t]:pt-6", e),
      ...t
    }
  );
}
function gp(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function H(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function mk(e, t) {
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
function no(e, t = []) {
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
  return o.scopeName = e, [r, gk(o, ...t)];
}
function gk(...e) {
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
function Py(...e) {
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
function me(...e) {
  return x.useCallback(Py(...e), e);
}
// @__NO_SIDE_EFFECTS__
function as(e) {
  const t = /* @__PURE__ */ yk(e), n = x.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = x.Children.toArray(s), l = a.find(xk);
    if (l) {
      const u = l.props.children, c = a.map((d) => d === l ? x.Children.count(u) > 1 ? x.Children.only(null) : x.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ p.jsx(t, { ...i, ref: o, children: x.isValidElement(u) ? x.cloneElement(u, void 0, c) : null });
    }
    return /* @__PURE__ */ p.jsx(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function yk(e) {
  const t = x.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (x.isValidElement(o)) {
      const i = Sk(o), a = wk(s, o.props);
      return o.type !== x.Fragment && (a.ref = r ? Py(r, i) : i), x.cloneElement(o, a);
    }
    return x.Children.count(o) > 1 ? x.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var vk = Symbol("radix.slottable");
function xk(e) {
  return x.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === vk;
}
function wk(e, t) {
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
function Sk(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Ey(e) {
  const t = e + "CollectionProvider", [n, r] = no(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (y) => {
    const { scope: S, children: m } = y, h = we.useRef(null), v = we.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ p.jsx(o, { scope: S, itemMap: v, collectionRef: h, children: m });
  };
  i.displayName = t;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ as(a), u = we.forwardRef(
    (y, S) => {
      const { scope: m, children: h } = y, v = s(a, m), k = me(S, v.collectionRef);
      return /* @__PURE__ */ p.jsx(l, { ref: k, children: h });
    }
  );
  u.displayName = a;
  const c = e + "CollectionItemSlot", d = "data-radix-collection-item", f = /* @__PURE__ */ as(c), g = we.forwardRef(
    (y, S) => {
      const { scope: m, children: h, ...v } = y, k = we.useRef(null), b = me(S, k), C = s(c, m);
      return we.useEffect(() => (C.itemMap.set(k, { ref: k, ...v }), () => void C.itemMap.delete(k))), /* @__PURE__ */ p.jsx(f, { [d]: "", ref: b, children: h });
    }
  );
  g.displayName = c;
  function w(y) {
    const S = s(e + "CollectionConsumer", y);
    return we.useCallback(() => {
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
var kk = x.createContext(void 0);
function sd(e) {
  const t = x.useContext(kk);
  return e || t || "ltr";
}
var bk = [
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
], Y = bk.reduce((e, t) => {
  const n = /* @__PURE__ */ as(`Primitive.${t}`), r = x.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, l = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p.jsx(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Ck(e, t) {
  e && eo.flushSync(() => e.dispatchEvent(t));
}
function Tn(e) {
  const t = x.useRef(e);
  return x.useEffect(() => {
    t.current = e;
  }), x.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Pk(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Tn(e);
  x.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Ek = "DismissableLayer", _u = "dismissableLayer.update", Tk = "dismissableLayer.pointerDownOutside", Nk = "dismissableLayer.focusOutside", vp, Ty = x.createContext({
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
    } = e, u = x.useContext(Ty), [c, d] = x.useState(null), f = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = x.useState({}), w = me(t, (P) => d(P)), y = Array.from(u.layers), [S] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), m = y.indexOf(S), h = c ? y.indexOf(c) : -1, v = u.layersWithOutsidePointerEventsDisabled.size > 0, k = h >= m, b = Rk((P) => {
      const E = P.target, D = [...u.branches].some((N) => N.contains(E));
      !k || D || (o == null || o(P), i == null || i(P), P.defaultPrevented || a == null || a());
    }, f), C = jk((P) => {
      const E = P.target;
      [...u.branches].some((N) => N.contains(E)) || (s == null || s(P), i == null || i(P), P.defaultPrevented || a == null || a());
    }, f);
    return Pk((P) => {
      h === u.layers.size - 1 && (r == null || r(P), !P.defaultPrevented && a && (P.preventDefault(), a()));
    }, f), x.useEffect(() => {
      if (c)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (vp = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), xp(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = vp);
        };
    }, [c, f, n, u]), x.useEffect(() => () => {
      c && (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), xp());
    }, [c, u]), x.useEffect(() => {
      const P = () => g({});
      return document.addEventListener(_u, P), () => document.removeEventListener(_u, P);
    }, []), /* @__PURE__ */ p.jsx(
      Y.div,
      {
        ...l,
        ref: w,
        style: {
          pointerEvents: v ? k ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: H(e.onFocusCapture, C.onFocusCapture),
        onBlurCapture: H(e.onBlurCapture, C.onBlurCapture),
        onPointerDownCapture: H(
          e.onPointerDownCapture,
          b.onPointerDownCapture
        )
      }
    );
  }
);
id.displayName = Ek;
var Dk = "DismissableLayerBranch", Ak = x.forwardRef((e, t) => {
  const n = x.useContext(Ty), r = x.useRef(null), o = me(t, r);
  return x.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ p.jsx(Y.div, { ...e, ref: o });
});
Ak.displayName = Dk;
function Rk(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Tn(e), r = x.useRef(!1), o = x.useRef(() => {
  });
  return x.useEffect(() => {
    const s = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          Ny(
            Tk,
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
function jk(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Tn(e), r = x.useRef(!1);
  return x.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && Ny(Nk, n, { originalEvent: s }, {
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
  const e = new CustomEvent(_u);
  document.dispatchEvent(e);
}
function Ny(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Ck(o, s) : o.dispatchEvent(s);
}
var yl = 0;
function Dy() {
  x.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? wp()), document.body.insertAdjacentElement("beforeend", e[1] ?? wp()), yl++, () => {
      yl === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), yl--;
    };
  }, []);
}
function wp() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var vl = "focusScope.autoFocusOnMount", xl = "focusScope.autoFocusOnUnmount", Sp = { bubbles: !1, cancelable: !0 }, Mk = "FocusScope", ad = x.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...i
  } = e, [a, l] = x.useState(null), u = Tn(o), c = Tn(s), d = x.useRef(null), f = me(t, (y) => l(y)), g = x.useRef({
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
        a.contains(k) ? d.current = k : sn(d.current, { select: !0 });
      }, S = function(v) {
        if (g.paused || !a) return;
        const k = v.relatedTarget;
        k !== null && (a.contains(k) || sn(d.current, { select: !0 }));
      }, m = function(v) {
        if (document.activeElement === document.body)
          for (const b of v)
            b.removedNodes.length > 0 && sn(a);
      };
      document.addEventListener("focusin", y), document.addEventListener("focusout", S);
      const h = new MutationObserver(m);
      return a && h.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", y), document.removeEventListener("focusout", S), h.disconnect();
      };
    }
  }, [r, a, g.paused]), x.useEffect(() => {
    if (a) {
      bp.add(g);
      const y = document.activeElement;
      if (!a.contains(y)) {
        const m = new CustomEvent(vl, Sp);
        a.addEventListener(vl, u), a.dispatchEvent(m), m.defaultPrevented || (Lk(Fk(Ay(a)), { select: !0 }), document.activeElement === y && sn(a));
      }
      return () => {
        a.removeEventListener(vl, u), setTimeout(() => {
          const m = new CustomEvent(xl, Sp);
          a.addEventListener(xl, c), a.dispatchEvent(m), m.defaultPrevented || sn(y ?? document.body, { select: !0 }), a.removeEventListener(xl, c), bp.remove(g);
        }, 0);
      };
    }
  }, [a, u, c, g]);
  const w = x.useCallback(
    (y) => {
      if (!n && !r || g.paused) return;
      const S = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey, m = document.activeElement;
      if (S && m) {
        const h = y.currentTarget, [v, k] = _k(h);
        v && k ? !y.shiftKey && m === k ? (y.preventDefault(), n && sn(v, { select: !0 })) : y.shiftKey && m === v && (y.preventDefault(), n && sn(k, { select: !0 })) : m === h && y.preventDefault();
      }
    },
    [n, r, g.paused]
  );
  return /* @__PURE__ */ p.jsx(Y.div, { tabIndex: -1, ...i, ref: f, onKeyDown: w });
});
ad.displayName = Mk;
function Lk(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (sn(r, { select: t }), document.activeElement !== n) return;
}
function _k(e) {
  const t = Ay(e), n = kp(t, e), r = kp(t.reverse(), e);
  return [n, r];
}
function Ay(e) {
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
    if (!Ok(n, { upTo: t })) return n;
}
function Ok(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Ik(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function sn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Ik(e) && t && e.select();
  }
}
var bp = Vk();
function Vk() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Cp(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Cp(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Cp(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Fk(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Ie = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {
}, zk = mm[" useId ".trim().toString()] || (() => {
}), Bk = 0;
function bn(e) {
  const [t, n] = x.useState(zk());
  return Ie(() => {
    n((r) => r ?? String(Bk++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const $k = ["top", "right", "bottom", "left"], Nn = Math.min, Qe = Math.max, Zi = Math.round, Gs = Math.floor, _t = (e) => ({
  x: e,
  y: e
}), Uk = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Wk = {
  start: "end",
  end: "start"
};
function Ou(e, t, n) {
  return Qe(e, Nn(t, n));
}
function qt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Jt(e) {
  return e.split("-")[0];
}
function ro(e) {
  return e.split("-")[1];
}
function ld(e) {
  return e === "x" ? "y" : "x";
}
function ud(e) {
  return e === "y" ? "height" : "width";
}
const Hk = /* @__PURE__ */ new Set(["top", "bottom"]);
function jt(e) {
  return Hk.has(Jt(e)) ? "y" : "x";
}
function cd(e) {
  return ld(jt(e));
}
function Kk(e, t, n) {
  n === void 0 && (n = !1);
  const r = ro(e), o = cd(e), s = ud(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = qi(i)), [i, qi(i)];
}
function Gk(e) {
  const t = qi(e);
  return [Iu(e), t, Iu(t)];
}
function Iu(e) {
  return e.replace(/start|end/g, (t) => Wk[t]);
}
const Pp = ["left", "right"], Ep = ["right", "left"], Yk = ["top", "bottom"], Xk = ["bottom", "top"];
function Qk(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Ep : Pp : t ? Pp : Ep;
    case "left":
    case "right":
      return t ? Yk : Xk;
    default:
      return [];
  }
}
function Zk(e, t, n, r) {
  const o = ro(e);
  let s = Qk(Jt(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(Iu)))), s;
}
function qi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Uk[t]);
}
function qk(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ry(e) {
  return typeof e != "number" ? qk(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ji(e) {
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
function Tp(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = jt(t), i = cd(t), a = ud(i), l = Jt(t), u = s === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
  switch (ro(t)) {
    case "start":
      g[i] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      g[i] += f * (n && u ? -1 : 1);
      break;
  }
  return g;
}
const Jk = async (e, t, n) => {
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
  } = Tp(u, r, l), f = r, g = {}, w = 0;
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
    } = Tp(u, f, l)), y = -1);
  }
  return {
    x: c,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: g
  };
};
async function ls(e, t) {
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
  } = qt(t, e), w = Ry(g), S = a[f ? d === "floating" ? "reference" : "floating" : d], m = Ji(await s.getClippingRect({
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
  }, b = Ji(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const eb = (e) => ({
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
    } = qt(e, t) || {};
    if (u == null)
      return {};
    const d = Ry(c), f = {
      x: n,
      y: r
    }, g = cd(o), w = ud(g), y = await i.getDimensions(u), S = g === "y", m = S ? "top" : "left", h = S ? "bottom" : "right", v = S ? "clientHeight" : "clientWidth", k = s.reference[w] + s.reference[g] - f[g] - s.floating[w], b = f[g] - s.reference[g], C = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
    let P = C ? C[v] : 0;
    (!P || !await (i.isElement == null ? void 0 : i.isElement(C))) && (P = a.floating[v] || s.floating[w]);
    const E = k / 2 - b / 2, D = P / 2 - y[w] / 2 - 1, N = Nn(d[m], D), M = Nn(d[h], D), R = N, z = P - y[w] - M, B = P / 2 - y[w] / 2 + E, K = Ou(R, B, z), O = !l.arrow && ro(o) != null && B !== K && s.reference[w] / 2 - (B < R ? N : M) - y[w] / 2 < 0, I = O ? B < R ? B - R : B - z : 0;
    return {
      [g]: f[g] + I,
      data: {
        [g]: K,
        centerOffset: B - K - I,
        ...O && {
          alignmentOffset: I
        }
      },
      reset: O
    };
  }
}), tb = function(e) {
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
      } = qt(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const m = Jt(o), h = jt(a), v = Jt(a) === a, k = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), b = f || (v || !y ? [qi(a)] : Gk(a)), C = w !== "none";
      !f && C && b.push(...Zk(a, y, w, k));
      const P = [a, ...b], E = await ls(t, S), D = [];
      let N = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (c && D.push(E[m]), d) {
        const B = Kk(o, i, k);
        D.push(E[B[0]], E[B[1]]);
      }
      if (N = [...N, {
        placement: o,
        overflows: D
      }], !D.every((B) => B <= 0)) {
        var M, R;
        const B = (((M = s.flip) == null ? void 0 : M.index) || 0) + 1, K = P[B];
        if (K && (!(d === "alignment" ? h !== jt(K) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        N.every((T) => jt(T.placement) === h ? T.overflows[0] > 0 : !0)))
          return {
            data: {
              index: B,
              overflows: N
            },
            reset: {
              placement: K
            }
          };
        let O = (R = N.filter((I) => I.overflows[0] <= 0).sort((I, T) => I.overflows[1] - T.overflows[1])[0]) == null ? void 0 : R.placement;
        if (!O)
          switch (g) {
            case "bestFit": {
              var z;
              const I = (z = N.filter((T) => {
                if (C) {
                  const j = jt(T.placement);
                  return j === h || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  j === "y";
                }
                return !0;
              }).map((T) => [T.placement, T.overflows.filter((j) => j > 0).reduce((j, _) => j + _, 0)]).sort((T, j) => T[1] - j[1])[0]) == null ? void 0 : z[0];
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
function Np(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Dp(e) {
  return $k.some((t) => e[t] >= 0);
}
const nb = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = qt(e, t);
      switch (r) {
        case "referenceHidden": {
          const s = await ls(t, {
            ...o,
            elementContext: "reference"
          }), i = Np(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Dp(i)
            }
          };
        }
        case "escaped": {
          const s = await ls(t, {
            ...o,
            altBoundary: !0
          }), i = Np(s, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Dp(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, jy = /* @__PURE__ */ new Set(["left", "top"]);
async function rb(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = Jt(n), a = ro(n), l = jt(n) === "y", u = jy.has(i) ? -1 : 1, c = s && l ? -1 : 1, d = qt(t, e);
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
const ob = function(e) {
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
      } = t, l = await rb(t, e);
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
}, sb = function(e) {
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
      } = qt(e, t), u = {
        x: n,
        y: r
      }, c = await ls(t, l), d = jt(Jt(o)), f = ld(d);
      let g = u[f], w = u[d];
      if (s) {
        const S = f === "y" ? "top" : "left", m = f === "y" ? "bottom" : "right", h = g + c[S], v = g - c[m];
        g = Ou(h, g, v);
      }
      if (i) {
        const S = d === "y" ? "top" : "left", m = d === "y" ? "bottom" : "right", h = w + c[S], v = w - c[m];
        w = Ou(h, w, v);
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
}, ib = function(e) {
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
      } = qt(e, t), c = {
        x: n,
        y: r
      }, d = jt(o), f = ld(d);
      let g = c[f], w = c[d];
      const y = qt(a, t), S = typeof y == "number" ? {
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
        const v = f === "y" ? "width" : "height", k = jy.has(Jt(o)), b = s.reference[d] - s.floating[v] + (k && ((m = i.offset) == null ? void 0 : m[d]) || 0) + (k ? 0 : S.crossAxis), C = s.reference[d] + s.reference[v] + (k ? 0 : ((h = i.offset) == null ? void 0 : h[d]) || 0) - (k ? S.crossAxis : 0);
        w < b ? w = b : w > C && (w = C);
      }
      return {
        [f]: g,
        [d]: w
      };
    }
  };
}, ab = function(e) {
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
      } = qt(e, t), c = await ls(t, u), d = Jt(o), f = ro(o), g = jt(o) === "y", {
        width: w,
        height: y
      } = s.floating;
      let S, m;
      d === "top" || d === "bottom" ? (S = d, m = f === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (m = d, S = f === "end" ? "top" : "bottom");
      const h = y - c.top - c.bottom, v = w - c.left - c.right, k = Nn(y - c[S], h), b = Nn(w - c[m], v), C = !t.middlewareData.shift;
      let P = k, E = b;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (E = v), (r = t.middlewareData.shift) != null && r.enabled.y && (P = h), C && !f) {
        const N = Qe(c.left, 0), M = Qe(c.right, 0), R = Qe(c.top, 0), z = Qe(c.bottom, 0);
        g ? E = w - 2 * (N !== 0 || M !== 0 ? N + M : Qe(c.left, c.right)) : P = y - 2 * (R !== 0 || z !== 0 ? R + z : Qe(c.top, c.bottom));
      }
      await l({
        ...t,
        availableWidth: E,
        availableHeight: P
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
function Ta() {
  return typeof window < "u";
}
function oo(e) {
  return My(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Je(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ft(e) {
  var t;
  return (t = (My(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function My(e) {
  return Ta() ? e instanceof Node || e instanceof Je(e).Node : !1;
}
function kt(e) {
  return Ta() ? e instanceof Element || e instanceof Je(e).Element : !1;
}
function Vt(e) {
  return Ta() ? e instanceof HTMLElement || e instanceof Je(e).HTMLElement : !1;
}
function Ap(e) {
  return !Ta() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Je(e).ShadowRoot;
}
const lb = /* @__PURE__ */ new Set(["inline", "contents"]);
function Ss(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = bt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !lb.has(o);
}
const ub = /* @__PURE__ */ new Set(["table", "td", "th"]);
function cb(e) {
  return ub.has(oo(e));
}
const db = [":popover-open", ":modal"];
function Na(e) {
  return db.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const fb = ["transform", "translate", "scale", "rotate", "perspective"], pb = ["transform", "translate", "scale", "rotate", "perspective", "filter"], hb = ["paint", "layout", "strict", "content"];
function dd(e) {
  const t = fd(), n = kt(e) ? bt(e) : e;
  return fb.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || pb.some((r) => (n.willChange || "").includes(r)) || hb.some((r) => (n.contain || "").includes(r));
}
function mb(e) {
  let t = Dn(e);
  for (; Vt(t) && !Kr(t); ) {
    if (dd(t))
      return t;
    if (Na(t))
      return null;
    t = Dn(t);
  }
  return null;
}
function fd() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const gb = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Kr(e) {
  return gb.has(oo(e));
}
function bt(e) {
  return Je(e).getComputedStyle(e);
}
function Da(e) {
  return kt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Dn(e) {
  if (oo(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ap(e) && e.host || // Fallback.
    Ft(e)
  );
  return Ap(t) ? t.host : t;
}
function Ly(e) {
  const t = Dn(e);
  return Kr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Vt(t) && Ss(t) ? t : Ly(t);
}
function us(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Ly(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = Je(o);
  if (s) {
    const a = Vu(i);
    return t.concat(i, i.visualViewport || [], Ss(o) ? o : [], a && n ? us(a) : []);
  }
  return t.concat(o, us(o, [], n));
}
function Vu(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function _y(e) {
  const t = bt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Vt(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, a = Zi(n) !== s || Zi(r) !== i;
  return a && (n = s, r = i), {
    width: n,
    height: r,
    $: a
  };
}
function pd(e) {
  return kt(e) ? e : e.contextElement;
}
function Ir(e) {
  const t = pd(e);
  if (!Vt(t))
    return _t(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = _y(t);
  let i = (s ? Zi(n.width) : n.width) / r, a = (s ? Zi(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const yb = /* @__PURE__ */ _t(0);
function Oy(e) {
  const t = Je(e);
  return !fd() || !t.visualViewport ? yb : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function vb(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Je(e) ? !1 : t;
}
function nr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = pd(e);
  let i = _t(1);
  t && (r ? kt(r) && (i = Ir(r)) : i = Ir(e));
  const a = vb(s, n, r) ? Oy(s) : _t(0);
  let l = (o.left + a.x) / i.x, u = (o.top + a.y) / i.y, c = o.width / i.x, d = o.height / i.y;
  if (s) {
    const f = Je(s), g = r && kt(r) ? Je(r) : r;
    let w = f, y = Vu(w);
    for (; y && r && g !== w; ) {
      const S = Ir(y), m = y.getBoundingClientRect(), h = bt(y), v = m.left + (y.clientLeft + parseFloat(h.paddingLeft)) * S.x, k = m.top + (y.clientTop + parseFloat(h.paddingTop)) * S.y;
      l *= S.x, u *= S.y, c *= S.x, d *= S.y, l += v, u += k, w = Je(y), y = Vu(w);
    }
  }
  return Ji({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function hd(e, t) {
  const n = Da(e).scrollLeft;
  return t ? t.left + n : nr(Ft(e)).left + n;
}
function Iy(e, t, n) {
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
function xb(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", i = Ft(r), a = t ? Na(t.floating) : !1;
  if (r === i || a && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = _t(1);
  const c = _t(0), d = Vt(r);
  if ((d || !d && !s) && ((oo(r) !== "body" || Ss(i)) && (l = Da(r)), Vt(r))) {
    const g = nr(r);
    u = Ir(r), c.x = g.x + r.clientLeft, c.y = g.y + r.clientTop;
  }
  const f = i && !d && !s ? Iy(i, l, !0) : _t(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
  };
}
function wb(e) {
  return Array.from(e.getClientRects());
}
function Sb(e) {
  const t = Ft(e), n = Da(e), r = e.ownerDocument.body, o = Qe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = Qe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + hd(e);
  const a = -n.scrollTop;
  return bt(r).direction === "rtl" && (i += Qe(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: a
  };
}
function kb(e, t) {
  const n = Je(e), r = Ft(e), o = n.visualViewport;
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
const bb = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Cb(e, t) {
  const n = nr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = Vt(e) ? Ir(e) : _t(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, l = o * s.x, u = r * s.y;
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
    r = kb(e, n);
  else if (t === "document")
    r = Sb(Ft(e));
  else if (kt(t))
    r = Cb(t, n);
  else {
    const o = Oy(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ji(r);
}
function Vy(e, t) {
  const n = Dn(e);
  return n === t || !kt(n) || Kr(n) ? !1 : bt(n).position === "fixed" || Vy(n, t);
}
function Pb(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = us(e, [], !1).filter((a) => kt(a) && oo(a) !== "body"), o = null;
  const s = bt(e).position === "fixed";
  let i = s ? Dn(e) : e;
  for (; kt(i) && !Kr(i); ) {
    const a = bt(i), l = dd(i);
    !l && a.position === "fixed" && (o = null), (s ? !l && !o : !l && a.position === "static" && !!o && bb.has(o.position) || Ss(i) && !l && Vy(e, i)) ? r = r.filter((c) => c !== i) : o = a, i = Dn(i);
  }
  return t.set(e, r), r;
}
function Eb(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Na(t) ? [] : Pb(t, this._c) : [].concat(n), r], a = i[0], l = i.reduce((u, c) => {
    const d = Rp(t, c, o);
    return u.top = Qe(d.top, u.top), u.right = Nn(d.right, u.right), u.bottom = Nn(d.bottom, u.bottom), u.left = Qe(d.left, u.left), u;
  }, Rp(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Tb(e) {
  const {
    width: t,
    height: n
  } = _y(e);
  return {
    width: t,
    height: n
  };
}
function Nb(e, t, n) {
  const r = Vt(t), o = Ft(t), s = n === "fixed", i = nr(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = _t(0);
  function u() {
    l.x = hd(o);
  }
  if (r || !r && !s)
    if ((oo(t) !== "body" || Ss(o)) && (a = Da(t)), r) {
      const g = nr(t, !0, s, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else o && u();
  s && !r && o && u();
  const c = o && !r && !s ? Iy(o, a) : _t(0), d = i.left + a.scrollLeft - l.x - c.x, f = i.top + a.scrollTop - l.y - c.y;
  return {
    x: d,
    y: f,
    width: i.width,
    height: i.height
  };
}
function wl(e) {
  return bt(e).position === "static";
}
function jp(e, t) {
  if (!Vt(e) || bt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ft(e) === n && (n = n.ownerDocument.body), n;
}
function Fy(e, t) {
  const n = Je(e);
  if (Na(e))
    return n;
  if (!Vt(e)) {
    let o = Dn(e);
    for (; o && !Kr(o); ) {
      if (kt(o) && !wl(o))
        return o;
      o = Dn(o);
    }
    return n;
  }
  let r = jp(e, t);
  for (; r && cb(r) && wl(r); )
    r = jp(r, t);
  return r && Kr(r) && wl(r) && !dd(r) ? n : r || mb(e) || n;
}
const Db = async function(e) {
  const t = this.getOffsetParent || Fy, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Nb(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Ab(e) {
  return bt(e).direction === "rtl";
}
const Rb = {
  convertOffsetParentRelativeRectToViewportRelativeRect: xb,
  getDocumentElement: Ft,
  getClippingRect: Eb,
  getOffsetParent: Fy,
  getElementRects: Db,
  getClientRects: wb,
  getDimensions: Tb,
  getScale: Ir,
  isElement: kt,
  isRTL: Ab
};
function zy(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function jb(e, t) {
  let n = null, r;
  const o = Ft(e);
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
    const w = Gs(d), y = Gs(o.clientWidth - (c + f)), S = Gs(o.clientHeight - (d + g)), m = Gs(c), v = {
      rootMargin: -w + "px " + -y + "px " + -S + "px " + -m + "px",
      threshold: Qe(0, Nn(1, l)) || 1
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
      P === 1 && !zy(u, e.getBoundingClientRect()) && i(), k = !1;
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
function Mb(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = pd(e), c = o || s ? [...u ? us(u) : [], ...us(t)] : [];
  c.forEach((m) => {
    o && m.addEventListener("scroll", n, {
      passive: !0
    }), s && m.addEventListener("resize", n);
  });
  const d = u && a ? jb(u, n) : null;
  let f = -1, g = null;
  i && (g = new ResizeObserver((m) => {
    let [h] = m;
    h && h.target === u && g && (g.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var v;
      (v = g) == null || v.observe(t);
    })), n();
  }), u && !l && g.observe(u), g.observe(t));
  let w, y = l ? nr(e) : null;
  l && S();
  function S() {
    const m = nr(e);
    y && !zy(y, m) && n(), y = m, w = requestAnimationFrame(S);
  }
  return n(), () => {
    var m;
    c.forEach((h) => {
      o && h.removeEventListener("scroll", n), s && h.removeEventListener("resize", n);
    }), d == null || d(), (m = g) == null || m.disconnect(), g = null, l && cancelAnimationFrame(w);
  };
}
const Lb = ob, _b = sb, Ob = tb, Ib = ab, Vb = nb, Mp = eb, Fb = ib, zb = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Rb,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return Jk(e, t, {
    ...o,
    platform: s
  });
};
var Bb = typeof document < "u", $b = function() {
}, Si = Bb ? x.useLayoutEffect : $b;
function ea(e, t) {
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
        if (!ea(e[r], t[r]))
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
      if (!(s === "_owner" && e.$$typeof) && !ea(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function By(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Lp(e, t) {
  const n = By(e);
  return Math.round(t * n) / n;
}
function Sl(e) {
  const t = x.useRef(e);
  return Si(() => {
    t.current = e;
  }), t;
}
function Ub(e) {
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
  ea(f, r) || g(r);
  const [w, y] = x.useState(null), [S, m] = x.useState(null), h = x.useCallback((T) => {
    T !== C.current && (C.current = T, y(T));
  }, []), v = x.useCallback((T) => {
    T !== P.current && (P.current = T, m(T));
  }, []), k = s || w, b = i || S, C = x.useRef(null), P = x.useRef(null), E = x.useRef(c), D = l != null, N = Sl(l), M = Sl(o), R = Sl(u), z = x.useCallback(() => {
    if (!C.current || !P.current)
      return;
    const T = {
      placement: t,
      strategy: n,
      middleware: f
    };
    M.current && (T.platform = M.current), zb(C.current, P.current, T).then((j) => {
      const _ = {
        ...j,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: R.current !== !1
      };
      B.current && !ea(E.current, _) && (E.current = _, eo.flushSync(() => {
        d(_);
      }));
    });
  }, [f, t, n, M, R]);
  Si(() => {
    u === !1 && E.current.isPositioned && (E.current.isPositioned = !1, d((T) => ({
      ...T,
      isPositioned: !1
    })));
  }, [u]);
  const B = x.useRef(!1);
  Si(() => (B.current = !0, () => {
    B.current = !1;
  }), []), Si(() => {
    if (k && (C.current = k), b && (P.current = b), k && b) {
      if (N.current)
        return N.current(k, b, z);
      z();
    }
  }, [k, b, z, N, D]);
  const K = x.useMemo(() => ({
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
    const j = Lp(O.floating, c.x), _ = Lp(O.floating, c.y);
    return a ? {
      ...T,
      transform: "translate(" + j + "px, " + _ + "px)",
      ...By(O.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: j,
      top: _
    };
  }, [n, a, O.floating, c.x, c.y]);
  return x.useMemo(() => ({
    ...c,
    update: z,
    refs: K,
    elements: O,
    floatingStyles: I
  }), [c, z, K, O, I]);
}
const Wb = (e) => {
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
      return r && t(r) ? r.current != null ? Mp({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Mp({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Hb = (e, t) => ({
  ...Lb(e),
  options: [e, t]
}), Kb = (e, t) => ({
  ..._b(e),
  options: [e, t]
}), Gb = (e, t) => ({
  ...Fb(e),
  options: [e, t]
}), Yb = (e, t) => ({
  ...Ob(e),
  options: [e, t]
}), Xb = (e, t) => ({
  ...Ib(e),
  options: [e, t]
}), Qb = (e, t) => ({
  ...Vb(e),
  options: [e, t]
}), Zb = (e, t) => ({
  ...Wb(e),
  options: [e, t]
});
var qb = "Arrow", $y = x.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ p.jsx(
    Y.svg,
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
$y.displayName = qb;
var Jb = $y;
function eC(e) {
  const [t, n] = x.useState(void 0);
  return Ie(() => {
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
var md = "Popper", [Uy, Wy] = no(md), [tC, Hy] = Uy(md), Ky = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = x.useState(null);
  return /* @__PURE__ */ p.jsx(tC, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Ky.displayName = md;
var Gy = "PopperAnchor", Yy = x.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = Hy(Gy, n), i = x.useRef(null), a = me(t, i);
    return x.useEffect(() => {
      s.onAnchorChange((r == null ? void 0 : r.current) || i.current);
    }), r ? null : /* @__PURE__ */ p.jsx(Y.div, { ...o, ref: a });
  }
);
Yy.displayName = Gy;
var gd = "PopperContent", [nC, rC] = Uy(gd), Xy = x.forwardRef(
  (e, t) => {
    var F, ee, Ae, q, Q, Z;
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
    } = e, S = Hy(gd, n), [m, h] = x.useState(null), v = me(t, (Ye) => h(Ye)), [k, b] = x.useState(null), C = eC(k), P = (C == null ? void 0 : C.width) ?? 0, E = (C == null ? void 0 : C.height) ?? 0, D = r + (s !== "center" ? "-" + s : ""), N = typeof c == "number" ? c : { top: 0, right: 0, bottom: 0, left: 0, ...c }, M = Array.isArray(u) ? u : [u], R = M.length > 0, z = {
      padding: N,
      boundary: M.filter(sC),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: R
    }, { refs: B, floatingStyles: K, placement: O, isPositioned: I, middlewareData: T } = Ub({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: D,
      whileElementsMounted: (...Ye) => Mb(...Ye, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: S.anchor
      },
      middleware: [
        Hb({ mainAxis: o + E, alignmentAxis: i }),
        l && Kb({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? Gb() : void 0,
          ...z
        }),
        l && Yb({ ...z }),
        Xb({
          ...z,
          apply: ({ elements: Ye, rects: Tt, availableWidth: lo, availableHeight: uo }) => {
            const { width: co, height: aw } = Tt.reference, Ds = Ye.floating.style;
            Ds.setProperty("--radix-popper-available-width", `${lo}px`), Ds.setProperty("--radix-popper-available-height", `${uo}px`), Ds.setProperty("--radix-popper-anchor-width", `${co}px`), Ds.setProperty("--radix-popper-anchor-height", `${aw}px`);
          }
        }),
        k && Zb({ element: k, padding: a }),
        iC({ arrowWidth: P, arrowHeight: E }),
        f && Qb({ strategy: "referenceHidden", ...z })
      ]
    }), [j, _] = qy(O), $ = Tn(w);
    Ie(() => {
      I && ($ == null || $());
    }, [I, $]);
    const se = (F = T.arrow) == null ? void 0 : F.x, Pt = (ee = T.arrow) == null ? void 0 : ee.y, De = ((Ae = T.arrow) == null ? void 0 : Ae.centerOffset) !== 0, [Et, Ve] = x.useState();
    return Ie(() => {
      m && Ve(window.getComputedStyle(m).zIndex);
    }, [m]), /* @__PURE__ */ p.jsx(
      "div",
      {
        ref: B.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...K,
          transform: I ? K.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Et,
          "--radix-popper-transform-origin": [
            (q = T.transformOrigin) == null ? void 0 : q.x,
            (Q = T.transformOrigin) == null ? void 0 : Q.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((Z = T.hide) == null ? void 0 : Z.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ p.jsx(
          nC,
          {
            scope: n,
            placedSide: j,
            onArrowChange: b,
            arrowX: se,
            arrowY: Pt,
            shouldHideArrow: De,
            children: /* @__PURE__ */ p.jsx(
              Y.div,
              {
                "data-side": j,
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
Xy.displayName = gd;
var Qy = "PopperArrow", oC = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Zy = x.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = rC(Qy, r), i = oC[s.placedSide];
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
          Jb,
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
Zy.displayName = Qy;
function sC(e) {
  return e !== null;
}
var iC = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var S, m, h;
    const { placement: n, rects: r, middlewareData: o } = t, i = ((S = o.arrow) == null ? void 0 : S.centerOffset) !== 0, a = i ? 0 : e.arrowWidth, l = i ? 0 : e.arrowHeight, [u, c] = qy(n), d = { start: "0%", center: "50%", end: "100%" }[c], f = (((m = o.arrow) == null ? void 0 : m.x) ?? 0) + a / 2, g = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + l / 2;
    let w = "", y = "";
    return u === "bottom" ? (w = i ? d : `${f}px`, y = `${-l}px`) : u === "top" ? (w = i ? d : `${f}px`, y = `${r.floating.height + l}px`) : u === "right" ? (w = `${-l}px`, y = i ? d : `${g}px`) : u === "left" && (w = `${r.floating.width + l}px`, y = i ? d : `${g}px`), { data: { x: w, y } };
  }
});
function qy(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var aC = Ky, lC = Yy, uC = Xy, cC = Zy, dC = "Portal", yd = x.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [o, s] = x.useState(!1);
  Ie(() => s(!0), []);
  const i = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return i ? LS.createPortal(/* @__PURE__ */ p.jsx(Y.div, { ...r, ref: t }), i) : null;
});
yd.displayName = dC;
var fC = mm[" useInsertionEffect ".trim().toString()] || Ie;
function cs({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, i] = pC({
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
        const f = hC(c) ? c(e) : c;
        f !== e && ((d = i.current) == null || d.call(i, f));
      } else
        s(c);
    },
    [a, e, s, i]
  );
  return [l, u];
}
function pC({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = x.useState(e), o = x.useRef(n), s = x.useRef(t);
  return fC(() => {
    s.current = t;
  }, [t]), x.useEffect(() => {
    var i;
    o.current !== n && ((i = s.current) == null || i.call(s, n), o.current = n);
  }, [n, o]), [n, r, s];
}
function hC(e) {
  return typeof e == "function";
}
function mC(e) {
  const t = x.useRef({ value: e, previous: e });
  return x.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var Jy = Object.freeze({
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
}), gC = "VisuallyHidden", yC = x.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(
    Y.span,
    {
      ...e,
      ref: t,
      style: { ...Jy, ...e.style }
    }
  )
);
yC.displayName = gC;
var vC = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, cr = /* @__PURE__ */ new WeakMap(), Ys = /* @__PURE__ */ new WeakMap(), Xs = {}, kl = 0, ev = function(e) {
  return e && (e.host || ev(e.parentNode));
}, xC = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = ev(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, wC = function(e, t, n, r) {
  var o = xC(t, Array.isArray(e) ? e : [e]);
  Xs[n] || (Xs[n] = /* @__PURE__ */ new WeakMap());
  var s = Xs[n], i = [], a = /* @__PURE__ */ new Set(), l = new Set(o), u = function(d) {
    !d || a.has(d) || (a.add(d), u(d.parentNode));
  };
  o.forEach(u);
  var c = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (a.has(f))
        c(f);
      else
        try {
          var g = f.getAttribute(r), w = g !== null && g !== "false", y = (cr.get(f) || 0) + 1, S = (s.get(f) || 0) + 1;
          cr.set(f, y), s.set(f, S), i.push(f), y === 1 && w && Ys.set(f, !0), S === 1 && f.setAttribute(n, "true"), w || f.setAttribute(r, "true");
        } catch (m) {
          console.error("aria-hidden: cannot operate on ", f, m);
        }
    });
  };
  return c(t), a.clear(), kl++, function() {
    i.forEach(function(d) {
      var f = cr.get(d) - 1, g = s.get(d) - 1;
      cr.set(d, f), s.set(d, g), f || (Ys.has(d) || d.removeAttribute(r), Ys.delete(d)), g || d.removeAttribute(n);
    }), kl--, kl || (cr = /* @__PURE__ */ new WeakMap(), cr = /* @__PURE__ */ new WeakMap(), Ys = /* @__PURE__ */ new WeakMap(), Xs = {});
  };
}, tv = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = vC(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), wC(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Rt = function() {
  return Rt = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Rt.apply(this, arguments);
};
function nv(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function SC(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var ki = "right-scroll-bar-position", bi = "width-before-scroll-bar", kC = "with-scroll-bars-hidden", bC = "--removed-body-scroll-bar-size";
function bl(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function CC(e, t) {
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
var PC = typeof window < "u" ? x.useLayoutEffect : x.useEffect, _p = /* @__PURE__ */ new WeakMap();
function EC(e, t) {
  var n = CC(null, function(r) {
    return e.forEach(function(o) {
      return bl(o, r);
    });
  });
  return PC(function() {
    var r = _p.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), i = n.current;
      o.forEach(function(a) {
        s.has(a) || bl(a, null);
      }), s.forEach(function(a) {
        o.has(a) || bl(a, i);
      });
    }
    _p.set(n, e);
  }, [e]), n;
}
function TC(e) {
  return e;
}
function NC(e, t) {
  t === void 0 && (t = TC);
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
function DC(e) {
  e === void 0 && (e = {});
  var t = NC(null);
  return t.options = Rt({ async: !0, ssr: !1 }, e), t;
}
var rv = function(e) {
  var t = e.sideCar, n = nv(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return x.createElement(r, Rt({}, n));
};
rv.isSideCarExport = !0;
function AC(e, t) {
  return e.useMedium(t), rv;
}
var ov = DC(), Cl = function() {
}, Aa = x.forwardRef(function(e, t) {
  var n = x.useRef(null), r = x.useState({
    onScrollCapture: Cl,
    onWheelCapture: Cl,
    onTouchMoveCapture: Cl
  }), o = r[0], s = r[1], i = e.forwardProps, a = e.children, l = e.className, u = e.removeScrollBar, c = e.enabled, d = e.shards, f = e.sideCar, g = e.noRelative, w = e.noIsolation, y = e.inert, S = e.allowPinchZoom, m = e.as, h = m === void 0 ? "div" : m, v = e.gapMode, k = nv(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), b = f, C = EC([n, t]), P = Rt(Rt({}, k), o);
  return x.createElement(
    x.Fragment,
    null,
    c && x.createElement(b, { sideCar: ov, removeScrollBar: u, shards: d, noRelative: g, noIsolation: w, inert: y, setCallbacks: s, allowPinchZoom: !!S, lockRef: n, gapMode: v }),
    i ? x.cloneElement(x.Children.only(a), Rt(Rt({}, P), { ref: C })) : x.createElement(h, Rt({}, P, { className: l, ref: C }), a)
  );
});
Aa.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Aa.classNames = {
  fullWidth: bi,
  zeroRight: ki
};
var RC = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function jC() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = RC();
  return t && e.setAttribute("nonce", t), e;
}
function MC(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function LC(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var _C = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = jC()) && (MC(t, n), LC(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, OC = function() {
  var e = _C();
  return function(t, n) {
    x.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, sv = function() {
  var e = OC(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, IC = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Pl = function(e) {
  return parseInt(e || "", 10) || 0;
}, VC = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Pl(n), Pl(r), Pl(o)];
}, FC = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return IC;
  var t = VC(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, zC = sv(), Vr = "data-scroll-locked", BC = function(e, t, n, r) {
  var o = e.left, s = e.top, i = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(kC, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(Vr, `] {
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
  
  .`).concat(ki, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(bi, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(ki, " .").concat(ki, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(bi, " .").concat(bi, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Vr, `] {
    `).concat(bC, ": ").concat(a, `px;
  }
`);
}, Op = function() {
  var e = parseInt(document.body.getAttribute(Vr) || "0", 10);
  return isFinite(e) ? e : 0;
}, $C = function() {
  x.useEffect(function() {
    return document.body.setAttribute(Vr, (Op() + 1).toString()), function() {
      var e = Op() - 1;
      e <= 0 ? document.body.removeAttribute(Vr) : document.body.setAttribute(Vr, e.toString());
    };
  }, []);
}, UC = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  $C();
  var s = x.useMemo(function() {
    return FC(o);
  }, [o]);
  return x.createElement(zC, { styles: BC(s, !t, o, n ? "" : "!important") });
}, Fu = !1;
if (typeof window < "u")
  try {
    var Qs = Object.defineProperty({}, "passive", {
      get: function() {
        return Fu = !0, !0;
      }
    });
    window.addEventListener("test", Qs, Qs), window.removeEventListener("test", Qs, Qs);
  } catch {
    Fu = !1;
  }
var dr = Fu ? { passive: !1 } : !1, WC = function(e) {
  return e.tagName === "TEXTAREA";
}, iv = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !WC(e) && n[t] === "visible")
  );
}, HC = function(e) {
  return iv(e, "overflowY");
}, KC = function(e) {
  return iv(e, "overflowX");
}, Ip = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = av(e, r);
    if (o) {
      var s = lv(e, r), i = s[1], a = s[2];
      if (i > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, GC = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, YC = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, av = function(e, t) {
  return e === "v" ? HC(t) : KC(t);
}, lv = function(e, t) {
  return e === "v" ? GC(t) : YC(t);
}, XC = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, QC = function(e, t, n, r, o) {
  var s = XC(e, window.getComputedStyle(t).direction), i = s * r, a = n.target, l = t.contains(a), u = !1, c = i > 0, d = 0, f = 0;
  do {
    if (!a)
      break;
    var g = lv(e, a), w = g[0], y = g[1], S = g[2], m = y - S - s * w;
    (w || m) && av(e, a) && (d += m, f += w);
    var h = a.parentNode;
    a = h && h.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? h.host : h;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (c && Math.abs(d) < 1 || !c && Math.abs(f) < 1) && (u = !0), u;
}, Zs = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Vp = function(e) {
  return [e.deltaX, e.deltaY];
}, Fp = function(e) {
  return e && "current" in e ? e.current : e;
}, ZC = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, qC = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, JC = 0, fr = [];
function eP(e) {
  var t = x.useRef([]), n = x.useRef([0, 0]), r = x.useRef(), o = x.useState(JC++)[0], s = x.useState(sv)[0], i = x.useRef(e);
  x.useEffect(function() {
    i.current = e;
  }, [e]), x.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var y = SC([e.lockRef.current], (e.shards || []).map(Fp), !0).filter(Boolean);
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
    var m = Zs(y), h = n.current, v = "deltaX" in y ? y.deltaX : h[0] - m[0], k = "deltaY" in y ? y.deltaY : h[1] - m[1], b, C = y.target, P = Math.abs(v) > Math.abs(k) ? "h" : "v";
    if ("touches" in y && P === "h" && C.type === "range")
      return !1;
    var E = Ip(P, C);
    if (!E)
      return !0;
    if (E ? b = P : (b = P === "v" ? "h" : "v", E = Ip(P, C)), !E)
      return !1;
    if (!r.current && "changedTouches" in y && (v || k) && (r.current = b), !b)
      return !0;
    var D = r.current || b;
    return QC(D, S, y, D === "h" ? v : k);
  }, []), l = x.useCallback(function(y) {
    var S = y;
    if (!(!fr.length || fr[fr.length - 1] !== s)) {
      var m = "deltaY" in S ? Vp(S) : Zs(S), h = t.current.filter(function(b) {
        return b.name === S.type && (b.target === S.target || S.target === b.shadowParent) && ZC(b.delta, m);
      })[0];
      if (h && h.should) {
        S.cancelable && S.preventDefault();
        return;
      }
      if (!h) {
        var v = (i.current.shards || []).map(Fp).filter(Boolean).filter(function(b) {
          return b.contains(S.target);
        }), k = v.length > 0 ? a(S, v[0]) : !i.current.noIsolation;
        k && S.cancelable && S.preventDefault();
      }
    }
  }, []), u = x.useCallback(function(y, S, m, h) {
    var v = { name: y, delta: S, target: m, should: h, shadowParent: tP(m) };
    t.current.push(v), setTimeout(function() {
      t.current = t.current.filter(function(k) {
        return k !== v;
      });
    }, 1);
  }, []), c = x.useCallback(function(y) {
    n.current = Zs(y), r.current = void 0;
  }, []), d = x.useCallback(function(y) {
    u(y.type, Vp(y), y.target, a(y, e.lockRef.current));
  }, []), f = x.useCallback(function(y) {
    u(y.type, Zs(y), y.target, a(y, e.lockRef.current));
  }, []);
  x.useEffect(function() {
    return fr.push(s), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, dr), document.addEventListener("touchmove", l, dr), document.addEventListener("touchstart", c, dr), function() {
      fr = fr.filter(function(y) {
        return y !== s;
      }), document.removeEventListener("wheel", l, dr), document.removeEventListener("touchmove", l, dr), document.removeEventListener("touchstart", c, dr);
    };
  }, []);
  var g = e.removeScrollBar, w = e.inert;
  return x.createElement(
    x.Fragment,
    null,
    w ? x.createElement(s, { styles: qC(o) }) : null,
    g ? x.createElement(UC, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function tP(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const nP = AC(ov, eP);
var vd = x.forwardRef(function(e, t) {
  return x.createElement(Aa, Rt({}, e, { ref: t, sideCar: nP }));
});
vd.classNames = Aa.classNames;
var rP = [" ", "Enter", "ArrowUp", "ArrowDown"], oP = [" ", "Enter"], rr = "Select", [Ra, ja, sP] = Ey(rr), [so, mR] = no(rr, [
  sP,
  Wy
]), Ma = Wy(), [iP, _n] = so(rr), [aP, lP] = so(rr), uv = (e) => {
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
  } = e, y = Ma(t), [S, m] = x.useState(null), [h, v] = x.useState(null), [k, b] = x.useState(!1), C = sd(u), [P, E] = cs({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: rr
  }), [D, N] = cs({
    prop: i,
    defaultProp: a,
    onChange: l,
    caller: rr
  }), M = x.useRef(null), R = S ? w || !!S.closest("form") : !0, [z, B] = x.useState(/* @__PURE__ */ new Set()), K = Array.from(z).map((O) => O.props.value).join(";");
  return /* @__PURE__ */ p.jsx(aC, { ...y, children: /* @__PURE__ */ p.jsxs(
    iP,
    {
      required: g,
      scope: t,
      trigger: S,
      onTriggerChange: m,
      valueNode: h,
      onValueNodeChange: v,
      valueNodeHasChildren: k,
      onValueNodeHasChildrenChange: b,
      contentId: bn(),
      value: D,
      onValueChange: N,
      open: P,
      onOpenChange: E,
      dir: C,
      triggerPointerDownPosRef: M,
      disabled: f,
      children: [
        /* @__PURE__ */ p.jsx(Ra.Provider, { scope: t, children: /* @__PURE__ */ p.jsx(
          aP,
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
          Rv,
          {
            "aria-hidden": !0,
            required: g,
            tabIndex: -1,
            name: c,
            autoComplete: d,
            value: D,
            onChange: (O) => N(O.target.value),
            disabled: f,
            form: w,
            children: [
              D === void 0 ? /* @__PURE__ */ p.jsx("option", { value: "" }) : null,
              Array.from(z)
            ]
          },
          K
        ) : null
      ]
    }
  ) });
};
uv.displayName = rr;
var cv = "SelectTrigger", dv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, s = Ma(n), i = _n(cv, n), a = i.disabled || r, l = me(t, i.onTriggerChange), u = ja(n), c = x.useRef("touch"), [d, f, g] = Mv((y) => {
      const S = u().filter((v) => !v.disabled), m = S.find((v) => v.value === i.value), h = Lv(S, y, m);
      h !== void 0 && i.onValueChange(h.value);
    }), w = (y) => {
      a || (i.onOpenChange(!0), g()), y && (i.triggerPointerDownPosRef.current = {
        x: Math.round(y.pageX),
        y: Math.round(y.pageY)
      });
    };
    return /* @__PURE__ */ p.jsx(lC, { asChild: !0, ...s, children: /* @__PURE__ */ p.jsx(
      Y.button,
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
        onClick: H(o.onClick, (y) => {
          y.currentTarget.focus(), c.current !== "mouse" && w(y);
        }),
        onPointerDown: H(o.onPointerDown, (y) => {
          c.current = y.pointerType;
          const S = y.target;
          S.hasPointerCapture(y.pointerId) && S.releasePointerCapture(y.pointerId), y.button === 0 && y.ctrlKey === !1 && y.pointerType === "mouse" && (w(y), y.preventDefault());
        }),
        onKeyDown: H(o.onKeyDown, (y) => {
          const S = d.current !== "";
          !(y.ctrlKey || y.altKey || y.metaKey) && y.key.length === 1 && f(y.key), !(S && y.key === " ") && rP.includes(y.key) && (w(), y.preventDefault());
        })
      }
    ) });
  }
);
dv.displayName = cv;
var fv = "SelectValue", pv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: s, placeholder: i = "", ...a } = e, l = _n(fv, n), { onValueNodeHasChildrenChange: u } = l, c = s !== void 0, d = me(t, l.onValueNodeChange);
    return Ie(() => {
      u(c);
    }, [u, c]), /* @__PURE__ */ p.jsx(
      Y.span,
      {
        ...a,
        ref: d,
        style: { pointerEvents: "none" },
        children: jv(l.value) ? /* @__PURE__ */ p.jsx(p.Fragment, { children: i }) : s
      }
    );
  }
);
pv.displayName = fv;
var uP = "SelectIcon", hv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ p.jsx(Y.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
hv.displayName = uP;
var cP = "SelectPortal", mv = (e) => /* @__PURE__ */ p.jsx(yd, { asChild: !0, ...e });
mv.displayName = cP;
var or = "SelectContent", gv = x.forwardRef(
  (e, t) => {
    const n = _n(or, e.__scopeSelect), [r, o] = x.useState();
    if (Ie(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const s = r;
      return s ? eo.createPortal(
        /* @__PURE__ */ p.jsx(yv, { scope: e.__scopeSelect, children: /* @__PURE__ */ p.jsx(Ra.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ p.jsx("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ p.jsx(vv, { ...e, ref: t });
  }
);
gv.displayName = or;
var ht = 10, [yv, On] = so(or), dP = "SelectContentImpl", fP = /* @__PURE__ */ as("SelectContent.RemoveScroll"), vv = x.forwardRef(
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
    } = e, h = _n(or, n), [v, k] = x.useState(null), [b, C] = x.useState(null), P = me(t, (F) => k(F)), [E, D] = x.useState(null), [N, M] = x.useState(
      null
    ), R = ja(n), [z, B] = x.useState(!1), K = x.useRef(!1);
    x.useEffect(() => {
      if (v) return tv(v);
    }, [v]), Dy();
    const O = x.useCallback(
      (F) => {
        const [ee, ...Ae] = R().map((Z) => Z.ref.current), [q] = Ae.slice(-1), Q = document.activeElement;
        for (const Z of F)
          if (Z === Q || (Z == null || Z.scrollIntoView({ block: "nearest" }), Z === ee && b && (b.scrollTop = 0), Z === q && b && (b.scrollTop = b.scrollHeight), Z == null || Z.focus(), document.activeElement !== Q)) return;
      },
      [R, b]
    ), I = x.useCallback(
      () => O([E, v]),
      [O, E, v]
    );
    x.useEffect(() => {
      z && I();
    }, [z, I]);
    const { onOpenChange: T, triggerPointerDownPosRef: j } = h;
    x.useEffect(() => {
      if (v) {
        let F = { x: 0, y: 0 };
        const ee = (q) => {
          var Q, Z;
          F = {
            x: Math.abs(Math.round(q.pageX) - (((Q = j.current) == null ? void 0 : Q.x) ?? 0)),
            y: Math.abs(Math.round(q.pageY) - (((Z = j.current) == null ? void 0 : Z.y) ?? 0))
          };
        }, Ae = (q) => {
          F.x <= 10 && F.y <= 10 ? q.preventDefault() : v.contains(q.target) || T(!1), document.removeEventListener("pointermove", ee), j.current = null;
        };
        return j.current !== null && (document.addEventListener("pointermove", ee), document.addEventListener("pointerup", Ae, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", ee), document.removeEventListener("pointerup", Ae, { capture: !0 });
        };
      }
    }, [v, T, j]), x.useEffect(() => {
      const F = () => T(!1);
      return window.addEventListener("blur", F), window.addEventListener("resize", F), () => {
        window.removeEventListener("blur", F), window.removeEventListener("resize", F);
      };
    }, [T]);
    const [_, $] = Mv((F) => {
      const ee = R().filter((Q) => !Q.disabled), Ae = ee.find((Q) => Q.ref.current === document.activeElement), q = Lv(ee, F, Ae);
      q && setTimeout(() => q.ref.current.focus());
    }), se = x.useCallback(
      (F, ee, Ae) => {
        const q = !K.current && !Ae;
        (h.value !== void 0 && h.value === ee || q) && (D(F), q && (K.current = !0));
      },
      [h.value]
    ), Pt = x.useCallback(() => v == null ? void 0 : v.focus(), [v]), De = x.useCallback(
      (F, ee, Ae) => {
        const q = !K.current && !Ae;
        (h.value !== void 0 && h.value === ee || q) && M(F);
      },
      [h.value]
    ), Et = r === "popper" ? zu : xv, Ve = Et === zu ? {
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
      yv,
      {
        scope: n,
        content: v,
        viewport: b,
        onViewportChange: C,
        itemRefCallback: se,
        selectedItem: E,
        onItemLeave: Pt,
        itemTextRefCallback: De,
        focusSelectedItem: I,
        selectedItemText: N,
        position: r,
        isPositioned: z,
        searchRef: _,
        children: /* @__PURE__ */ p.jsx(vd, { as: fP, allowPinchZoom: !0, children: /* @__PURE__ */ p.jsx(
          ad,
          {
            asChild: !0,
            trapped: h.open,
            onMountAutoFocus: (F) => {
              F.preventDefault();
            },
            onUnmountAutoFocus: H(o, (F) => {
              var ee;
              (ee = h.trigger) == null || ee.focus({ preventScroll: !0 }), F.preventDefault();
            }),
            children: /* @__PURE__ */ p.jsx(
              id,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: i,
                onFocusOutside: (F) => F.preventDefault(),
                onDismiss: () => h.onOpenChange(!1),
                children: /* @__PURE__ */ p.jsx(
                  Et,
                  {
                    role: "listbox",
                    id: h.contentId,
                    "data-state": h.open ? "open" : "closed",
                    dir: h.dir,
                    onContextMenu: (F) => F.preventDefault(),
                    ...m,
                    ...Ve,
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
                    onKeyDown: H(m.onKeyDown, (F) => {
                      const ee = F.ctrlKey || F.altKey || F.metaKey;
                      if (F.key === "Tab" && F.preventDefault(), !ee && F.key.length === 1 && $(F.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(F.key)) {
                        let q = R().filter((Q) => !Q.disabled).map((Q) => Q.ref.current);
                        if (["ArrowUp", "End"].includes(F.key) && (q = q.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(F.key)) {
                          const Q = F.target, Z = q.indexOf(Q);
                          q = q.slice(Z + 1);
                        }
                        setTimeout(() => O(q)), F.preventDefault();
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
vv.displayName = dP;
var pP = "SelectItemAlignedPosition", xv = x.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = _n(or, n), i = On(or, n), [a, l] = x.useState(null), [u, c] = x.useState(null), d = me(t, (P) => c(P)), f = ja(n), g = x.useRef(!1), w = x.useRef(!0), { viewport: y, selectedItem: S, selectedItemText: m, focusSelectedItem: h } = i, v = x.useCallback(() => {
    if (s.trigger && s.valueNode && a && u && y && S && m) {
      const P = s.trigger.getBoundingClientRect(), E = u.getBoundingClientRect(), D = s.valueNode.getBoundingClientRect(), N = m.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const Q = N.left - E.left, Z = D.left - Q, Ye = P.left - Z, Tt = P.width + Ye, lo = Math.max(Tt, E.width), uo = window.innerWidth - ht, co = gp(Z, [
          ht,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(ht, uo - lo)
        ]);
        a.style.minWidth = Tt + "px", a.style.left = co + "px";
      } else {
        const Q = E.right - N.right, Z = window.innerWidth - D.right - Q, Ye = window.innerWidth - P.right - Z, Tt = P.width + Ye, lo = Math.max(Tt, E.width), uo = window.innerWidth - ht, co = gp(Z, [
          ht,
          Math.max(ht, uo - lo)
        ]);
        a.style.minWidth = Tt + "px", a.style.right = co + "px";
      }
      const M = f(), R = window.innerHeight - ht * 2, z = y.scrollHeight, B = window.getComputedStyle(u), K = parseInt(B.borderTopWidth, 10), O = parseInt(B.paddingTop, 10), I = parseInt(B.borderBottomWidth, 10), T = parseInt(B.paddingBottom, 10), j = K + O + z + T + I, _ = Math.min(S.offsetHeight * 5, j), $ = window.getComputedStyle(y), se = parseInt($.paddingTop, 10), Pt = parseInt($.paddingBottom, 10), De = P.top + P.height / 2 - ht, Et = R - De, Ve = S.offsetHeight / 2, F = S.offsetTop + Ve, ee = K + O + F, Ae = j - ee;
      if (ee <= De) {
        const Q = M.length > 0 && S === M[M.length - 1].ref.current;
        a.style.bottom = "0px";
        const Z = u.clientHeight - y.offsetTop - y.offsetHeight, Ye = Math.max(
          Et,
          Ve + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (Q ? Pt : 0) + Z + I
        ), Tt = ee + Ye;
        a.style.height = Tt + "px";
      } else {
        const Q = M.length > 0 && S === M[0].ref.current;
        a.style.top = "0px";
        const Ye = Math.max(
          De,
          K + y.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (Q ? se : 0) + Ve
        ) + Ae;
        a.style.height = Ye + "px", y.scrollTop = ee - De + y.offsetTop;
      }
      a.style.margin = `${ht}px 0`, a.style.minHeight = _ + "px", a.style.maxHeight = R + "px", r == null || r(), requestAnimationFrame(() => g.current = !0);
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
  Ie(() => v(), [v]);
  const [k, b] = x.useState();
  Ie(() => {
    u && b(window.getComputedStyle(u).zIndex);
  }, [u]);
  const C = x.useCallback(
    (P) => {
      P && w.current === !0 && (v(), h == null || h(), w.current = !1);
    },
    [v, h]
  );
  return /* @__PURE__ */ p.jsx(
    mP,
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
            Y.div,
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
xv.displayName = pP;
var hP = "SelectPopperPosition", zu = x.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = ht,
    ...s
  } = e, i = Ma(n);
  return /* @__PURE__ */ p.jsx(
    uC,
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
zu.displayName = hP;
var [mP, xd] = so(or, {}), Bu = "SelectViewport", wv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, s = On(Bu, n), i = xd(Bu, n), a = me(t, s.onViewportChange), l = x.useRef(0);
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
      /* @__PURE__ */ p.jsx(Ra.Slot, { scope: n, children: /* @__PURE__ */ p.jsx(
        Y.div,
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
          onScroll: H(o.onScroll, (u) => {
            const c = u.currentTarget, { contentWrapper: d, shouldExpandOnScrollRef: f } = i;
            if (f != null && f.current && d) {
              const g = Math.abs(l.current - c.scrollTop);
              if (g > 0) {
                const w = window.innerHeight - ht * 2, y = parseFloat(d.style.minHeight), S = parseFloat(d.style.height), m = Math.max(y, S);
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
wv.displayName = Bu;
var Sv = "SelectGroup", [gP, yP] = so(Sv), vP = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = bn();
    return /* @__PURE__ */ p.jsx(gP, { scope: n, id: o, children: /* @__PURE__ */ p.jsx(Y.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
vP.displayName = Sv;
var kv = "SelectLabel", xP = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = yP(kv, n);
    return /* @__PURE__ */ p.jsx(Y.div, { id: o.id, ...r, ref: t });
  }
);
xP.displayName = kv;
var ta = "SelectItem", [wP, bv] = so(ta), Cv = x.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: s,
      ...i
    } = e, a = _n(ta, n), l = On(ta, n), u = a.value === r, [c, d] = x.useState(s ?? ""), [f, g] = x.useState(!1), w = me(
      t,
      (h) => {
        var v;
        return (v = l.itemRefCallback) == null ? void 0 : v.call(l, h, r, o);
      }
    ), y = bn(), S = x.useRef("touch"), m = () => {
      o || (a.onValueChange(r), a.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ p.jsx(
      wP,
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
          Ra.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: c,
            children: /* @__PURE__ */ p.jsx(
              Y.div,
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
                onFocus: H(i.onFocus, () => g(!0)),
                onBlur: H(i.onBlur, () => g(!1)),
                onClick: H(i.onClick, () => {
                  S.current !== "mouse" && m();
                }),
                onPointerUp: H(i.onPointerUp, () => {
                  S.current === "mouse" && m();
                }),
                onPointerDown: H(i.onPointerDown, (h) => {
                  S.current = h.pointerType;
                }),
                onPointerMove: H(i.onPointerMove, (h) => {
                  var v;
                  S.current = h.pointerType, o ? (v = l.onItemLeave) == null || v.call(l) : S.current === "mouse" && h.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: H(i.onPointerLeave, (h) => {
                  var v;
                  h.currentTarget === document.activeElement && ((v = l.onItemLeave) == null || v.call(l));
                }),
                onKeyDown: H(i.onKeyDown, (h) => {
                  var k;
                  ((k = l.searchRef) == null ? void 0 : k.current) !== "" && h.key === " " || (oP.includes(h.key) && m(), h.key === " " && h.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Cv.displayName = ta;
var To = "SelectItemText", Pv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e, i = _n(To, n), a = On(To, n), l = bv(To, n), u = lP(To, n), [c, d] = x.useState(null), f = me(
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
    return Ie(() => (y(w), () => S(w)), [y, S, w]), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(Y.span, { id: l.textId, ...s, ref: f }),
      l.isSelected && i.valueNode && !i.valueNodeHasChildren ? eo.createPortal(s.children, i.valueNode) : null
    ] });
  }
);
Pv.displayName = To;
var Ev = "SelectItemIndicator", Tv = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return bv(Ev, n).isSelected ? /* @__PURE__ */ p.jsx(Y.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Tv.displayName = Ev;
var $u = "SelectScrollUpButton", Nv = x.forwardRef((e, t) => {
  const n = On($u, e.__scopeSelect), r = xd($u, e.__scopeSelect), [o, s] = x.useState(!1), i = me(t, r.onScrollButtonChange);
  return Ie(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const u = l.scrollTop > 0;
        s(u);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ p.jsx(
    Av,
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
Nv.displayName = $u;
var Uu = "SelectScrollDownButton", Dv = x.forwardRef((e, t) => {
  const n = On(Uu, e.__scopeSelect), r = xd(Uu, e.__scopeSelect), [o, s] = x.useState(!1), i = me(t, r.onScrollButtonChange);
  return Ie(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const u = l.scrollHeight - l.clientHeight, c = Math.ceil(l.scrollTop) < u;
        s(c);
      };
      const l = n.viewport;
      return a(), l.addEventListener("scroll", a), () => l.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ p.jsx(
    Av,
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
Dv.displayName = Uu;
var Av = x.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = On("SelectScrollButton", n), i = x.useRef(null), a = ja(n), l = x.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return x.useEffect(() => () => l(), [l]), Ie(() => {
    var c;
    const u = a().find((d) => d.ref.current === document.activeElement);
    (c = u == null ? void 0 : u.ref.current) == null || c.scrollIntoView({ block: "nearest" });
  }, [a]), /* @__PURE__ */ p.jsx(
    Y.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: H(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerMove: H(o.onPointerMove, () => {
        var u;
        (u = s.onItemLeave) == null || u.call(s), i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerLeave: H(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), SP = "SelectSeparator", kP = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ p.jsx(Y.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
kP.displayName = SP;
var Wu = "SelectArrow", bP = x.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Ma(n), s = _n(Wu, n), i = On(Wu, n);
    return s.open && i.position === "popper" ? /* @__PURE__ */ p.jsx(cC, { ...o, ...r, ref: t }) : null;
  }
);
bP.displayName = Wu;
var CP = "SelectBubbleInput", Rv = x.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = x.useRef(null), s = me(r, o), i = mC(t);
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
      Y.select,
      {
        ...n,
        style: { ...Jy, ...n.style },
        ref: s,
        defaultValue: t
      }
    );
  }
);
Rv.displayName = CP;
function jv(e) {
  return e === "" || e === void 0;
}
function Mv(e) {
  const t = Tn(e), n = x.useRef(""), r = x.useRef(0), o = x.useCallback(
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
function Lv(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = PP(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((u) => u !== n));
  const l = i.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function PP(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var EP = uv, TP = dv, NP = pv, DP = hv, AP = mv, RP = gv, jP = wv, MP = Cv, LP = Pv, _P = Tv, OP = Nv, IP = Dv;
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const VP = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), _v = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var FP = {
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
const zP = x.forwardRef(
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
      ...FP,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: _v("lucide", o),
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
    ({ className: r, ...o }, s) => x.createElement(zP, {
      ref: s,
      iconNode: t,
      className: _v(`lucide-${VP(e)}`, r),
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
const Ov = Ne("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Iv = Ne("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const La = Ne("Building2", [
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
const BP = Ne("Building", [
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
const fn = Ne("CalendarDays", [
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
const El = Ne("Calendar", [
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
const $P = Ne("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vv = Ne("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fv = Ne("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zv = Ne("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const UP = Ne("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _a = Ne("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const WP = Ne("DollarSign", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zp = Ne("List", [
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
const Bv = Ne("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ks = Ne("MapPin", [
  ["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HP = Ne("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function qs({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(EP, { "data-slot": "select", ...e });
}
function Js({
  ...e
}) {
  return /* @__PURE__ */ p.jsx(NP, { "data-slot": "select-value", ...e });
}
function ei({
  className: e,
  size: t = "default",
  children: n,
  ...r
}) {
  return /* @__PURE__ */ p.jsxs(
    TP,
    {
      "data-slot": "select-trigger",
      "data-size": t,
      className: he(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ p.jsx(DP, { asChild: !0, children: /* @__PURE__ */ p.jsx(Vv, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function ti({
  className: e,
  children: t,
  position: n = "popper",
  ...r
}) {
  return /* @__PURE__ */ p.jsx(AP, { children: /* @__PURE__ */ p.jsxs(
    RP,
    {
      "data-slot": "select-content",
      className: he(
        "bg-white text-gray-900 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: n,
      ...r,
      children: [
        /* @__PURE__ */ p.jsx(KP, {}),
        /* @__PURE__ */ p.jsx(
          jP,
          {
            className: he(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ p.jsx(GP, {})
      ]
    }
  ) });
}
function de({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ p.jsxs(
    MP,
    {
      "data-slot": "select-item",
      className: he(
        "focus:bg-gray-100 focus:text-gray-900 hover:bg-gray-50 text-gray-900 relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ p.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ p.jsx(_P, { children: /* @__PURE__ */ p.jsx($P, { className: "size-4" }) }) }),
        /* @__PURE__ */ p.jsx(LP, { children: t })
      ]
    }
  );
}
function KP({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    OP,
    {
      "data-slot": "select-scroll-up-button",
      className: he(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ p.jsx(UP, { className: "size-4" })
    }
  );
}
function GP({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    IP,
    {
      "data-slot": "select-scroll-down-button",
      className: he(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ p.jsx(Vv, { className: "size-4" })
    }
  );
}
const Hu = x.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ p.jsx(
    "input",
    {
      type: t,
      className: he(
        "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n
    }
  )
);
Hu.displayName = "Input";
var Tl = "rovingFocusGroup.onEntryFocus", YP = { bubbles: !1, cancelable: !0 }, bs = "RovingFocusGroup", [Ku, $v, XP] = Ey(bs), [QP, Uv] = no(
  bs,
  [XP]
), [ZP, qP] = QP(bs), Wv = x.forwardRef(
  (e, t) => /* @__PURE__ */ p.jsx(Ku.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p.jsx(Ku.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p.jsx(JP, { ...e, ref: t }) }) })
);
Wv.displayName = bs;
var JP = x.forwardRef((e, t) => {
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
  } = e, f = x.useRef(null), g = me(t, f), w = sd(s), [y, S] = cs({
    prop: i,
    defaultProp: a ?? null,
    onChange: l,
    caller: bs
  }), [m, h] = x.useState(!1), v = Tn(u), k = $v(n), b = x.useRef(!1), [C, P] = x.useState(0);
  return x.useEffect(() => {
    const E = f.current;
    if (E)
      return E.addEventListener(Tl, v), () => E.removeEventListener(Tl, v);
  }, [v]), /* @__PURE__ */ p.jsx(
    ZP,
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
        Y.div,
        {
          tabIndex: m || C === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: g,
          style: { outline: "none", ...e.style },
          onMouseDown: H(e.onMouseDown, () => {
            b.current = !0;
          }),
          onFocus: H(e.onFocus, (E) => {
            const D = !b.current;
            if (E.target === E.currentTarget && D && !m) {
              const N = new CustomEvent(Tl, YP);
              if (E.currentTarget.dispatchEvent(N), !N.defaultPrevented) {
                const M = k().filter((O) => O.focusable), R = M.find((O) => O.active), z = M.find((O) => O.id === y), K = [R, z, ...M].filter(
                  Boolean
                ).map((O) => O.ref.current);
                Gv(K, c);
              }
            }
            b.current = !1;
          }),
          onBlur: H(e.onBlur, () => h(!1))
        }
      )
    }
  );
}), Hv = "RovingFocusGroupItem", Kv = x.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: s,
      children: i,
      ...a
    } = e, l = bn(), u = s || l, c = qP(Hv, n), d = c.currentTabStopId === u, f = $v(n), { onFocusableItemAdd: g, onFocusableItemRemove: w, currentTabStopId: y } = c;
    return x.useEffect(() => {
      if (r)
        return g(), () => w();
    }, [r, g, w]), /* @__PURE__ */ p.jsx(
      Ku.ItemSlot,
      {
        scope: n,
        id: u,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ p.jsx(
          Y.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": c.orientation,
            ...a,
            ref: t,
            onMouseDown: H(e.onMouseDown, (S) => {
              r ? c.onItemFocus(u) : S.preventDefault();
            }),
            onFocus: H(e.onFocus, () => c.onItemFocus(u)),
            onKeyDown: H(e.onKeyDown, (S) => {
              if (S.key === "Tab" && S.shiftKey) {
                c.onItemShiftTab();
                return;
              }
              if (S.target !== S.currentTarget) return;
              const m = nE(S, c.orientation, c.dir);
              if (m !== void 0) {
                if (S.metaKey || S.ctrlKey || S.altKey || S.shiftKey) return;
                S.preventDefault();
                let v = f().filter((k) => k.focusable).map((k) => k.ref.current);
                if (m === "last") v.reverse();
                else if (m === "prev" || m === "next") {
                  m === "prev" && v.reverse();
                  const k = v.indexOf(S.currentTarget);
                  v = c.loop ? rE(v, k + 1) : v.slice(k + 1);
                }
                setTimeout(() => Gv(v));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: d, hasTabStop: y != null }) : i
          }
        )
      }
    );
  }
);
Kv.displayName = Hv;
var eE = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function tE(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function nE(e, t, n) {
  const r = tE(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return eE[r];
}
function Gv(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function rE(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var oE = Wv, sE = Kv;
function iE(e, t) {
  return x.useReducer((n, r) => t[n][r] ?? n, e);
}
var Cs = (e) => {
  const { present: t, children: n } = e, r = aE(t), o = typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n), s = me(r.ref, lE(o));
  return typeof n == "function" || r.isPresent ? x.cloneElement(o, { ref: s }) : null;
};
Cs.displayName = "Presence";
function aE(e) {
  const [t, n] = x.useState(), r = x.useRef(null), o = x.useRef(e), s = x.useRef("none"), i = e ? "mounted" : "unmounted", [a, l] = iE(i, {
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
    const u = ni(r.current);
    s.current = a === "mounted" ? u : "none";
  }, [a]), Ie(() => {
    const u = r.current, c = o.current;
    if (c !== e) {
      const f = s.current, g = ni(u);
      e ? l("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && f !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Ie(() => {
    if (t) {
      let u;
      const c = t.ownerDocument.defaultView ?? window, d = (g) => {
        const y = ni(r.current).includes(g.animationName);
        if (g.target === t && y && (l("ANIMATION_END"), !o.current)) {
          const S = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = c.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = S);
          });
        }
      }, f = (g) => {
        g.target === t && (s.current = ni(r.current));
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
function ni(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function lE(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Oa = "Tabs", [uE, gR] = no(Oa, [
  Uv
]), Yv = Uv(), [cE, wd] = uE(Oa), Xv = x.forwardRef(
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
    } = e, c = sd(a), [d, f] = cs({
      prop: r,
      onChange: o,
      defaultProp: s ?? "",
      caller: Oa
    });
    return /* @__PURE__ */ p.jsx(
      cE,
      {
        scope: n,
        baseId: bn(),
        value: d,
        onValueChange: f,
        orientation: i,
        dir: c,
        activationMode: l,
        children: /* @__PURE__ */ p.jsx(
          Y.div,
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
Xv.displayName = Oa;
var Qv = "TabsList", Zv = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, s = wd(Qv, n), i = Yv(n);
    return /* @__PURE__ */ p.jsx(
      oE,
      {
        asChild: !0,
        ...i,
        orientation: s.orientation,
        dir: s.dir,
        loop: r,
        children: /* @__PURE__ */ p.jsx(
          Y.div,
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
Zv.displayName = Qv;
var qv = "TabsTrigger", Jv = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...s } = e, i = wd(qv, n), a = Yv(n), l = n0(i.baseId, r), u = r0(i.baseId, r), c = r === i.value;
    return /* @__PURE__ */ p.jsx(
      sE,
      {
        asChild: !0,
        ...a,
        focusable: !o,
        active: c,
        children: /* @__PURE__ */ p.jsx(
          Y.button,
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
            onMouseDown: H(e.onMouseDown, (d) => {
              !o && d.button === 0 && d.ctrlKey === !1 ? i.onValueChange(r) : d.preventDefault();
            }),
            onKeyDown: H(e.onKeyDown, (d) => {
              [" ", "Enter"].includes(d.key) && i.onValueChange(r);
            }),
            onFocus: H(e.onFocus, () => {
              const d = i.activationMode !== "manual";
              !c && !o && d && i.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
Jv.displayName = qv;
var e0 = "TabsContent", t0 = x.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: s, ...i } = e, a = wd(e0, n), l = n0(a.baseId, r), u = r0(a.baseId, r), c = r === a.value, d = x.useRef(c);
    return x.useEffect(() => {
      const f = requestAnimationFrame(() => d.current = !1);
      return () => cancelAnimationFrame(f);
    }, []), /* @__PURE__ */ p.jsx(Cs, { present: o || c, children: ({ present: f }) => /* @__PURE__ */ p.jsx(
      Y.div,
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
t0.displayName = e0;
function n0(e, t) {
  return `${e}-trigger-${t}`;
}
function r0(e, t) {
  return `${e}-content-${t}`;
}
var dE = Xv, fE = Zv, pE = Jv, hE = t0;
function mE({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    dE,
    {
      "data-slot": "tabs",
      className: he("flex flex-col gap-2", e),
      ...t
    }
  );
}
function Bp({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    fE,
    {
      "data-slot": "tabs-list",
      className: he(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        e
      ),
      ...t
    }
  );
}
function Vn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    pE,
    {
      "data-slot": "tabs-trigger",
      className: he(
        "data-[state=active]:bg-background cursor-pointer dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function ri({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p.jsx(
    hE,
    {
      "data-slot": "tabs-content",
      className: he("flex-1 outline-none", e),
      ...t
    }
  );
}
class gE {
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
      if (!s.ok)
        throw new Error(`HTTP error! status: ${s.status}`);
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
const Nl = new gE();
function o0(e = {}) {
  const [t, n] = x.useState([]), [r, o] = x.useState({}), [s, i] = x.useState(!0), [a, l] = x.useState(null), [u, c] = x.useState(0), [d, f] = x.useState(0), [g, w] = x.useState(e), y = x.useCallback(async () => {
    try {
      i(!0), l(null);
      const h = await Nl.fetchEvents(g), v = [], k = {};
      h.events.forEach((b) => {
        const C = Nl.transformWordPressEventToEvent(b), P = Nl.transformWordPressEventToMetadata(b);
        v.push(C), k[C.id] = P;
      }), n(v), o(k), c(h.total), f(h.pages);
    } catch (h) {
      n([]), o({}), c(0), f(0), l(h instanceof Error ? h.message : "Failed to load events");
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
const yE = {
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
function vE() {
  const [e, t] = x.useState([]), [n, r] = x.useState(!0), [o, s] = x.useState(null);
  return x.useEffect(() => {
    (async () => {
      try {
        r(!0);
        const a = await yE.getAll();
        t(a), s(null);
      } catch {
        s("Failed to load organizations");
      } finally {
        r(!1);
      }
    })();
  }, []), { organizations: e, loading: n, error: o };
}
var Ia = "Dialog", [s0, yR] = no(Ia), [xE, Ct] = s0(Ia), i0 = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: i = !0
  } = e, a = x.useRef(null), l = x.useRef(null), [u, c] = cs({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Ia
  });
  return /* @__PURE__ */ p.jsx(
    xE,
    {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: bn(),
      titleId: bn(),
      descriptionId: bn(),
      open: u,
      onOpenChange: c,
      onOpenToggle: x.useCallback(() => c((d) => !d), [c]),
      modal: i,
      children: n
    }
  );
};
i0.displayName = Ia;
var a0 = "DialogTrigger", wE = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ct(a0, n), s = me(t, o.triggerRef);
    return /* @__PURE__ */ p.jsx(
      Y.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": bd(o.open),
        ...r,
        ref: s,
        onClick: H(e.onClick, o.onOpenToggle)
      }
    );
  }
);
wE.displayName = a0;
var Sd = "DialogPortal", [SE, l0] = s0(Sd, {
  forceMount: void 0
}), u0 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = Ct(Sd, t);
  return /* @__PURE__ */ p.jsx(SE, { scope: t, forceMount: n, children: x.Children.map(r, (i) => /* @__PURE__ */ p.jsx(Cs, { present: n || s.open, children: /* @__PURE__ */ p.jsx(yd, { asChild: !0, container: o, children: i }) })) });
};
u0.displayName = Sd;
var na = "DialogOverlay", c0 = x.forwardRef(
  (e, t) => {
    const n = l0(na, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = Ct(na, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ p.jsx(Cs, { present: r || s.open, children: /* @__PURE__ */ p.jsx(bE, { ...o, ref: t }) }) : null;
  }
);
c0.displayName = na;
var kE = /* @__PURE__ */ as("DialogOverlay.RemoveScroll"), bE = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ct(na, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ p.jsx(vd, { as: kE, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ p.jsx(
        Y.div,
        {
          "data-state": bd(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), sr = "DialogContent", d0 = x.forwardRef(
  (e, t) => {
    const n = l0(sr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = Ct(sr, e.__scopeDialog);
    return /* @__PURE__ */ p.jsx(Cs, { present: r || s.open, children: s.modal ? /* @__PURE__ */ p.jsx(CE, { ...o, ref: t }) : /* @__PURE__ */ p.jsx(PE, { ...o, ref: t }) });
  }
);
d0.displayName = sr;
var CE = x.forwardRef(
  (e, t) => {
    const n = Ct(sr, e.__scopeDialog), r = x.useRef(null), o = me(t, n.contentRef, r);
    return x.useEffect(() => {
      const s = r.current;
      if (s) return tv(s);
    }, []), /* @__PURE__ */ p.jsx(
      f0,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: H(e.onCloseAutoFocus, (s) => {
          var i;
          s.preventDefault(), (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: H(e.onPointerDownOutside, (s) => {
          const i = s.detail.originalEvent, a = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || a) && s.preventDefault();
        }),
        onFocusOutside: H(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), PE = x.forwardRef(
  (e, t) => {
    const n = Ct(sr, e.__scopeDialog), r = x.useRef(!1), o = x.useRef(!1);
    return /* @__PURE__ */ p.jsx(
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
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...i } = e, a = Ct(sr, n), l = x.useRef(null), u = me(t, l);
    return Dy(), /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      /* @__PURE__ */ p.jsx(
        ad,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ p.jsx(
            id,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": bd(a.open),
              ...i,
              ref: u,
              onDismiss: () => a.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsx(EE, { titleId: a.titleId }),
        /* @__PURE__ */ p.jsx(NE, { contentRef: l, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), kd = "DialogTitle", p0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ct(kd, n);
    return /* @__PURE__ */ p.jsx(Y.h2, { id: o.titleId, ...r, ref: t });
  }
);
p0.displayName = kd;
var h0 = "DialogDescription", m0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ct(h0, n);
    return /* @__PURE__ */ p.jsx(Y.p, { id: o.descriptionId, ...r, ref: t });
  }
);
m0.displayName = h0;
var g0 = "DialogClose", y0 = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ct(g0, n);
    return /* @__PURE__ */ p.jsx(
      Y.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: H(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
y0.displayName = g0;
function bd(e) {
  return e ? "open" : "closed";
}
var v0 = "DialogTitleWarning", [vR, x0] = mk(v0, {
  contentName: sr,
  titleName: kd,
  docsSlug: "dialog"
}), EE = ({ titleId: e }) => {
  const t = x0(v0), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return x.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, TE = "DialogDescriptionWarning", NE = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${x0(TE).contentName}}.`;
  return x.useEffect(() => {
    var s;
    const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, DE = i0, AE = u0, w0 = c0, S0 = d0, k0 = p0, b0 = m0, RE = y0;
const jE = DE, ME = AE, C0 = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  w0,
  {
    ref: n,
    className: he(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
C0.displayName = w0.displayName;
const P0 = x.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ p.jsxs(ME, { children: [
  /* @__PURE__ */ p.jsx(C0, {}),
  /* @__PURE__ */ p.jsxs(
    S0,
    {
      ref: r,
      className: he(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ p.jsxs(RE, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ p.jsx(HP, { className: "h-4 w-4" }),
          /* @__PURE__ */ p.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
P0.displayName = S0.displayName;
const E0 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.jsx(
  "div",
  {
    className: he(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
E0.displayName = "DialogHeader";
const T0 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ p.jsx(
  "div",
  {
    className: he(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
T0.displayName = "DialogFooter";
const N0 = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  k0,
  {
    ref: n,
    className: he(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
N0.displayName = k0.displayName;
const D0 = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ p.jsx(
  b0,
  {
    ref: n,
    className: he("text-sm text-muted-foreground", e),
    ...t
  }
));
D0.displayName = b0.displayName;
const Cn = x.forwardRef(
  ({ className: e, variant: t = "default", size: n = "default", ...r }, o) => /* @__PURE__ */ p.jsx(
    "button",
    {
      className: he(
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
Cn.displayName = "Button";
function Gr({
  className: e,
  variant: t = "default",
  size: n = "default",
  ...r
}) {
  return /* @__PURE__ */ p.jsx(
    "div",
    {
      className: he(
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
function A0({ event: e, eventMetadata: t, open: n, onOpenChange: r }) {
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
  return /* @__PURE__ */ p.jsx(jE, { open: n, onOpenChange: r, children: /* @__PURE__ */ p.jsxs(P0, { className: "max-w-md bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700", children: [
    /* @__PURE__ */ p.jsxs(E0, { children: [
      /* @__PURE__ */ p.jsx(N0, { className: "text-xl text-gray-900 dark:text-gray-100", children: e.title }),
      /* @__PURE__ */ p.jsx(D0, { className: "mt-2 text-gray-600 dark:text-gray-400", children: e.description })
    ] }),
    /* @__PURE__ */ p.jsx("div", { className: "space-y-4 my-4", children: /* @__PURE__ */ p.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
        /* @__PURE__ */ p.jsx(_a, { className: "h-4 w-4 text-gray-500 dark:text-gray-400" }),
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
          /* @__PURE__ */ p.jsx(ks, { className: "h-4 w-4 text-gray-500 dark:text-gray-400" }),
          /* @__PURE__ */ p.jsx("span", { className: "text-gray-900 dark:text-gray-100", children: o.location })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ p.jsx(La, { className: "h-4 w-4 text-gray-500 dark:text-gray-400" }),
          /* @__PURE__ */ p.jsx("span", { className: "text-gray-900 dark:text-gray-100", children: o.organization })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ p.jsx(WP, { className: "h-4 w-4 text-gray-500 dark:text-gray-400" }),
          /* @__PURE__ */ p.jsx("span", { className: "text-gray-900 dark:text-gray-100", children: o.cost })
        ] }),
        /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ p.jsx(Gr, { className: i[o.category] || "bg-gray-100 text-gray-800", children: o.category.charAt(0).toUpperCase() + o.category.slice(1) }),
          o.registrationRequired && /* @__PURE__ */ p.jsx(Gr, { variant: "outline", className: "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300", children: "Registration Required" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ p.jsxs(T0, { className: "flex-col sm:flex-col gap-2", children: [
      /* @__PURE__ */ p.jsx("div", { className: "text-sm text-gray-500 dark:text-gray-400 mb-2", children: "Add to your calendar:" }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex gap-2 w-full", children: [
        /* @__PURE__ */ p.jsxs(
          Cn,
          {
            variant: "outline",
            className: "flex-1",
            onClick: () => window.open(s("google"), "_blank"),
            children: [
              /* @__PURE__ */ p.jsx(El, { className: "h-4 w-4 mr-2" }),
              "Google"
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Cn,
          {
            variant: "outline",
            className: "flex-1",
            onClick: () => window.open(s("outlook"), "_blank"),
            children: [
              /* @__PURE__ */ p.jsx(El, { className: "h-4 w-4 mr-2" }),
              "Outlook"
            ]
          }
        ),
        /* @__PURE__ */ p.jsxs(
          Cn,
          {
            variant: "outline",
            className: "flex-1",
            onClick: () => {
              const a = s("apple"), l = document.createElement("a");
              l.href = a, l.download = `${e.title.replace(/[^a-z0-9]/gi, "_")}.ics`, l.click();
            },
            children: [
              /* @__PURE__ */ p.jsx(El, { className: "h-4 w-4 mr-2" }),
              "Apple"
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
const Cd = x.createContext({});
function Pd(e) {
  const t = x.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Va = x.createContext(null), Ed = x.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
class LE extends x.Component {
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
function _E({ children: e, isPresent: t }) {
  const n = x.useId(), r = x.useRef(null), o = x.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), { nonce: s } = x.useContext(Ed);
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
  }, [t]), p.jsx(LE, { isPresent: t, childRef: r, sizeRef: o, children: x.cloneElement(e, { ref: r }) });
}
const OE = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: s, mode: i }) => {
  const a = Pd(IE), l = x.useId(), u = x.useCallback((d) => {
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
  }, [n]), i === "popLayout" && (e = p.jsx(_E, { isPresent: n, children: e })), p.jsx(Va.Provider, { value: c, children: e });
};
function IE() {
  return /* @__PURE__ */ new Map();
}
function R0(e = !0) {
  const t = x.useContext(Va);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: o } = t, s = x.useId();
  x.useEffect(() => {
    e && o(s);
  }, [e]);
  const i = x.useCallback(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, i] : [!0];
}
const oi = (e) => e.key || "";
function $p(e) {
  const t = [];
  return x.Children.forEach(e, (n) => {
    x.isValidElement(n) && t.push(n);
  }), t;
}
const Td = typeof window < "u", j0 = Td ? x.useLayoutEffect : x.useEffect, Up = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: o = !0, mode: s = "sync", propagate: i = !1 }) => {
  const [a, l] = R0(i), u = x.useMemo(() => $p(e), [e]), c = i && !a ? [] : u.map(oi), d = x.useRef(!0), f = x.useRef(u), g = Pd(() => /* @__PURE__ */ new Map()), [w, y] = x.useState(u), [S, m] = x.useState(u);
  j0(() => {
    d.current = !1, f.current = u;
    for (let k = 0; k < S.length; k++) {
      const b = oi(S[k]);
      c.includes(b) ? g.delete(b) : g.get(b) !== !0 && g.set(b, !1);
    }
  }, [S, c.length, c.join("-")]);
  const h = [];
  if (u !== w) {
    let k = [...u];
    for (let b = 0; b < S.length; b++) {
      const C = S[b], P = oi(C);
      c.includes(P) || (k.splice(b, 0, C), h.push(C));
    }
    s === "wait" && h.length && (k = h), m($p(k)), y(u);
    return;
  }
  const { forceRender: v } = x.useContext(Cd);
  return p.jsx(p.Fragment, { children: S.map((k) => {
    const b = oi(k), C = i && !a ? !1 : u === S || c.includes(b), P = () => {
      if (g.has(b))
        g.set(b, !0);
      else
        return;
      let E = !0;
      g.forEach((D) => {
        D || (E = !1);
      }), E && (v == null || v(), m(f.current), i && (l == null || l()), r && r());
    };
    return p.jsx(OE, { isPresent: C, initial: !d.current || n ? void 0 : !1, custom: C ? void 0 : t, presenceAffectsLayout: o, mode: s, onExitComplete: C ? void 0 : P, children: k }, b);
  }) });
}, et = /* @__NO_SIDE_EFFECTS__ */ (e) => e;
let M0 = et;
// @__NO_SIDE_EFFECTS__
function Nd(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Yr = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, Kt = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, Gt = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, VE = {
  useManualTiming: !1
};
function FE(e) {
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
const si = [
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
], zE = 40;
function L0(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, s = () => n = !0, i = si.reduce((m, h) => (m[h] = FE(s), m), {}), { read: a, resolveKeyframes: l, update: u, preRender: c, render: d, postRender: f } = i, g = () => {
    const m = performance.now();
    n = !1, o.delta = r ? 1e3 / 60 : Math.max(Math.min(m - o.timestamp, zE), 1), o.timestamp = m, o.isProcessing = !0, a.process(o), l.process(o), u.process(o), c.process(o), d.process(o), f.process(o), o.isProcessing = !1, n && t && (r = !1, e(g));
  }, w = () => {
    n = !0, r = !0, o.isProcessing || e(g);
  };
  return { schedule: si.reduce((m, h) => {
    const v = i[h];
    return m[h] = (k, b = !1, C = !1) => (n || w(), v.schedule(k, b, C)), m;
  }, {}), cancel: (m) => {
    for (let h = 0; h < si.length; h++)
      i[si[h]].cancel(m);
  }, state: o, steps: i };
}
const { schedule: oe, cancel: An, state: Pe, steps: Dl } = L0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : et, !0), _0 = x.createContext({ strict: !1 }), Wp = {
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
}, Xr = {};
for (const e in Wp)
  Xr[e] = {
    isEnabled: (t) => Wp[e].some((n) => !!t[n])
  };
function BE(e) {
  for (const t in e)
    Xr[t] = {
      ...Xr[t],
      ...e[t]
    };
}
const $E = /* @__PURE__ */ new Set([
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
function ra(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || $E.has(e);
}
let O0 = (e) => !ra(e);
function UE(e) {
  e && (O0 = (t) => t.startsWith("on") ? !ra(t) : e(t));
}
try {
  UE(require("@emotion/is-prop-valid").default);
} catch {
}
function WE(e, t, n) {
  const r = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (O0(o) || n === !0 && ra(o) || !t && !ra(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function HE(e) {
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
function ds(e) {
  return typeof e == "string" || Array.isArray(e);
}
function za(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Dd = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Ad = ["initial", ...Dd];
function Ba(e) {
  return za(e.animate) || Ad.some((t) => ds(e[t]));
}
function I0(e) {
  return !!(Ba(e) || e.variants);
}
function KE(e, t) {
  if (Ba(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || ds(n) ? n : void 0,
      animate: ds(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function GE(e) {
  const { initial: t, animate: n } = KE(e, x.useContext(Fa));
  return x.useMemo(() => ({ initial: t, animate: n }), [Hp(t), Hp(n)]);
}
function Hp(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const YE = Symbol.for("motionComponentSymbol");
function Pr(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function XE(e, t, n) {
  return x.useCallback(
    (r) => {
      r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Pr(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
const Rd = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), QE = "framerAppearId", V0 = "data-" + Rd(QE), { schedule: jd } = L0(queueMicrotask, !1), F0 = x.createContext({});
function ZE(e, t, n, r, o) {
  var s, i;
  const { visualElement: a } = x.useContext(Fa), l = x.useContext(_0), u = x.useContext(Va), c = x.useContext(Ed).reducedMotion, d = x.useRef(null);
  r = r || l.renderer, !d.current && r && (d.current = r(e, {
    visualState: t,
    parent: a,
    props: n,
    presenceContext: u,
    blockInitialAnimation: u ? u.initial === !1 : !1,
    reducedMotionConfig: c
  }));
  const f = d.current, g = x.useContext(F0);
  f && !f.projection && o && (f.type === "html" || f.type === "svg") && qE(d.current, n, o, g);
  const w = x.useRef(!1);
  x.useInsertionEffect(() => {
    f && w.current && f.update(n, u);
  });
  const y = n[V0], S = x.useRef(!!y && !(!((s = window.MotionHandoffIsComplete) === null || s === void 0) && s.call(window, y)) && ((i = window.MotionHasOptimisedAnimation) === null || i === void 0 ? void 0 : i.call(window, y)));
  return j0(() => {
    f && (w.current = !0, window.MotionIsMounted = !0, f.updateFeatures(), jd.render(f.render), S.current && f.animationState && f.animationState.animateChanges());
  }), x.useEffect(() => {
    f && (!S.current && f.animationState && f.animationState.animateChanges(), S.current && (queueMicrotask(() => {
      var m;
      (m = window.MotionHandoffMarkAsComplete) === null || m === void 0 || m.call(window, y);
    }), S.current = !1));
  }), f;
}
function qE(e, t, n, r) {
  const { layoutId: o, layout: s, drag: i, dragConstraints: a, layoutScroll: l, layoutRoot: u } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : z0(e.parent)), e.projection.setOptions({
    layoutId: o,
    layout: s,
    alwaysMeasureLayout: !!i || a && Pr(a),
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
function z0(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : z0(e.parent);
}
function JE({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  var s, i;
  e && BE(e);
  function a(u, c) {
    let d;
    const f = {
      ...x.useContext(Ed),
      ...u,
      layoutId: eT(u)
    }, { isStatic: g } = f, w = GE(u), y = r(u, g);
    if (!g && Td) {
      tT();
      const S = nT(f);
      d = S.MeasureLayout, w.visualElement = ZE(o, y, f, t, S.ProjectionNode);
    }
    return p.jsxs(Fa.Provider, { value: w, children: [d && w.visualElement ? p.jsx(d, { visualElement: w.visualElement, ...f }) : null, n(o, u, XE(y, w.visualElement, c), y, g, w.visualElement)] });
  }
  a.displayName = `motion.${typeof o == "string" ? o : `create(${(i = (s = o.displayName) !== null && s !== void 0 ? s : o.name) !== null && i !== void 0 ? i : ""})`}`;
  const l = x.forwardRef(a);
  return l[YE] = o, l;
}
function eT({ layoutId: e }) {
  const t = x.useContext(Cd).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function tT(e, t) {
  x.useContext(_0).strict;
}
function nT(e) {
  const { drag: t, layout: n } = Xr;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const rT = [
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
function Md(e) {
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
      !!(rT.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function Kp(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function Ld(e, t, n, r) {
  if (typeof t == "function") {
    const [o, s] = Kp(r);
    t = t(n !== void 0 ? n : e.custom, o, s);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [o, s] = Kp(r);
    t = t(n !== void 0 ? n : e.custom, o, s);
  }
  return t;
}
const Gu = (e) => Array.isArray(e), oT = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), sT = (e) => Gu(e) ? e[e.length - 1] || 0 : e, _e = (e) => !!(e && e.getVelocity);
function Ci(e) {
  const t = _e(e) ? e.get() : e;
  return oT(t) ? t.toValue() : t;
}
function iT({ scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n }, r, o, s) {
  const i = {
    latestValues: aT(r, o, s, e),
    renderState: t()
  };
  return n && (i.onMount = (a) => n({ props: r, current: a, ...i }), i.onUpdate = (a) => n(a)), i;
}
const B0 = (e) => (t, n) => {
  const r = x.useContext(Fa), o = x.useContext(Va), s = () => iT(e, t, r, o);
  return n ? s() : Pd(s);
};
function aT(e, t, n, r) {
  const o = {}, s = r(e, {});
  for (const f in s)
    o[f] = Ci(s[f]);
  let { initial: i, animate: a } = e;
  const l = Ba(e), u = I0(e);
  t && u && !l && e.inherit !== !1 && (i === void 0 && (i = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || i === !1;
  const d = c ? a : i;
  if (d && typeof d != "boolean" && !za(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let g = 0; g < f.length; g++) {
      const w = Ld(e, f[g]);
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
const io = [
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
], lr = new Set(io), $0 = (e) => (t) => typeof t == "string" && t.startsWith(e), U0 = /* @__PURE__ */ $0("--"), lT = /* @__PURE__ */ $0("var(--"), _d = (e) => lT(e) ? uT.test(e.split("/*")[0].trim()) : !1, uT = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, W0 = (e, t) => t && typeof e == "number" ? t.transform(e) : e, en = (e, t, n) => n > t ? t : n < e ? e : n, ao = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, fs = {
  ...ao,
  transform: (e) => en(0, 1, e)
}, ii = {
  ...ao,
  default: 1
}, Ps = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), an = /* @__PURE__ */ Ps("deg"), Ot = /* @__PURE__ */ Ps("%"), V = /* @__PURE__ */ Ps("px"), cT = /* @__PURE__ */ Ps("vh"), dT = /* @__PURE__ */ Ps("vw"), Gp = {
  ...Ot,
  parse: (e) => Ot.parse(e) / 100,
  transform: (e) => Ot.transform(e * 100)
}, fT = {
  // Border props
  borderWidth: V,
  borderTopWidth: V,
  borderRightWidth: V,
  borderBottomWidth: V,
  borderLeftWidth: V,
  borderRadius: V,
  radius: V,
  borderTopLeftRadius: V,
  borderTopRightRadius: V,
  borderBottomRightRadius: V,
  borderBottomLeftRadius: V,
  // Positioning props
  width: V,
  maxWidth: V,
  height: V,
  maxHeight: V,
  top: V,
  right: V,
  bottom: V,
  left: V,
  // Spacing props
  padding: V,
  paddingTop: V,
  paddingRight: V,
  paddingBottom: V,
  paddingLeft: V,
  margin: V,
  marginTop: V,
  marginRight: V,
  marginBottom: V,
  marginLeft: V,
  // Misc
  backgroundPositionX: V,
  backgroundPositionY: V
}, pT = {
  rotate: an,
  rotateX: an,
  rotateY: an,
  rotateZ: an,
  scale: ii,
  scaleX: ii,
  scaleY: ii,
  scaleZ: ii,
  skew: an,
  skewX: an,
  skewY: an,
  distance: V,
  translateX: V,
  translateY: V,
  translateZ: V,
  x: V,
  y: V,
  z: V,
  perspective: V,
  transformPerspective: V,
  opacity: fs,
  originX: Gp,
  originY: Gp,
  originZ: V
}, Yp = {
  ...ao,
  transform: Math.round
}, Od = {
  ...fT,
  ...pT,
  zIndex: Yp,
  size: V,
  // SVG
  fillOpacity: fs,
  strokeOpacity: fs,
  numOctaves: Yp
}, hT = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, mT = io.length;
function gT(e, t, n) {
  let r = "", o = !0;
  for (let s = 0; s < mT; s++) {
    const i = io[s], a = e[i];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (i.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const u = W0(a, Od[i]);
      if (!l) {
        o = !1;
        const c = hT[i] || i;
        r += `${c}(${u}) `;
      }
      n && (t[i] = u);
    }
  }
  return r = r.trim(), n ? r = n(t, o ? "" : r) : o && (r = "none"), r;
}
function Id(e, t, n) {
  const { style: r, vars: o, transformOrigin: s } = e;
  let i = !1, a = !1;
  for (const l in t) {
    const u = t[l];
    if (lr.has(l)) {
      i = !0;
      continue;
    } else if (U0(l)) {
      o[l] = u;
      continue;
    } else {
      const c = W0(u, Od[l]);
      l.startsWith("origin") ? (a = !0, s[l] = c) : r[l] = c;
    }
  }
  if (t.transform || (i || n ? r.transform = gT(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = s;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
const yT = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, vT = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function xT(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const s = o ? yT : vT;
  e[s.offset] = V.transform(-r);
  const i = V.transform(t), a = V.transform(n);
  e[s.array] = `${i} ${a}`;
}
function Xp(e, t, n) {
  return typeof e == "string" ? e : V.transform(t + n * e);
}
function wT(e, t, n) {
  const r = Xp(t, e.x, e.width), o = Xp(n, e.y, e.height);
  return `${r} ${o}`;
}
function Vd(e, {
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
  if (Id(e, u, d), c) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: f, style: g, dimensions: w } = e;
  f.transform && (w && (g.transform = f.transform), delete f.transform), w && (o !== void 0 || s !== void 0 || g.transform) && (g.transformOrigin = wT(w, o !== void 0 ? o : 0.5, s !== void 0 ? s : 0.5)), t !== void 0 && (f.x = t), n !== void 0 && (f.y = n), r !== void 0 && (f.scale = r), i !== void 0 && xT(f, i, a, l, !1);
}
const Fd = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), H0 = () => ({
  ...Fd(),
  attrs: {}
}), zd = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function K0(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const s in n)
    e.style.setProperty(s, n[s]);
}
const G0 = /* @__PURE__ */ new Set([
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
function Y0(e, t, n, r) {
  K0(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(G0.has(o) ? o : Rd(o), t.attrs[o]);
}
const oa = {};
function ST(e) {
  Object.assign(oa, e);
}
function X0(e, { layout: t, layoutId: n }) {
  return lr.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!oa[e] || e === "opacity");
}
function Bd(e, t, n) {
  var r;
  const { style: o } = e, s = {};
  for (const i in o)
    (_e(o[i]) || t.style && _e(t.style[i]) || X0(i, e) || ((r = n == null ? void 0 : n.getValue(i)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (s[i] = o[i]);
  return s;
}
function Q0(e, t, n) {
  const r = Bd(e, t, n);
  for (const o in e)
    if (_e(e[o]) || _e(t[o])) {
      const s = io.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      r[s] = e[o];
    }
  return r;
}
function kT(e, t) {
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
const Qp = ["x", "y", "width", "height", "cx", "cy", "r"], bT = {
  useVisualState: B0({
    scrapeMotionValuesFromProps: Q0,
    createRenderState: H0,
    onUpdate: ({ props: e, prevProps: t, current: n, renderState: r, latestValues: o }) => {
      if (!n)
        return;
      let s = !!e.drag;
      if (!s) {
        for (const a in o)
          if (lr.has(a)) {
            s = !0;
            break;
          }
      }
      if (!s)
        return;
      let i = !t;
      if (t)
        for (let a = 0; a < Qp.length; a++) {
          const l = Qp[a];
          e[l] !== t[l] && (i = !0);
        }
      i && oe.read(() => {
        kT(n, r), oe.render(() => {
          Vd(r, o, zd(n.tagName), e.transformTemplate), Y0(n, r);
        });
      });
    }
  })
}, CT = {
  useVisualState: B0({
    scrapeMotionValuesFromProps: Bd,
    createRenderState: Fd
  })
};
function Z0(e, t, n) {
  for (const r in t)
    !_e(t[r]) && !X0(r, n) && (e[r] = t[r]);
}
function PT({ transformTemplate: e }, t) {
  return x.useMemo(() => {
    const n = Fd();
    return Id(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function ET(e, t) {
  const n = e.style || {}, r = {};
  return Z0(r, n, e), Object.assign(r, PT(e, t)), r;
}
function TT(e, t) {
  const n = {}, r = ET(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
function NT(e, t, n, r) {
  const o = x.useMemo(() => {
    const s = H0();
    return Vd(s, t, zd(r), e.transformTemplate), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [t]);
  if (e.style) {
    const s = {};
    Z0(s, e.style, e), o.style = { ...s, ...o.style };
  }
  return o;
}
function DT(e = !1) {
  return (n, r, o, { latestValues: s }, i) => {
    const l = (Md(n) ? NT : TT)(r, s, i, n), u = WE(r, typeof n == "string", e), c = n !== x.Fragment ? { ...u, ...l, ref: o } : {}, { children: d } = r, f = x.useMemo(() => _e(d) ? d.get() : d, [d]);
    return x.createElement(n, {
      ...c,
      children: f
    });
  };
}
function AT(e, t) {
  return function(r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const i = {
      ...Md(r) ? bT : CT,
      preloadedFeatures: e,
      useRender: DT(o),
      createVisualElement: t,
      Component: r
    };
    return JE(i);
  };
}
function q0(e, t) {
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
function $a(e, t, n) {
  const r = e.getProps();
  return Ld(r, t, n !== void 0 ? n : r.custom, e);
}
const RT = /* @__PURE__ */ Nd(() => window.ScrollTimeline !== void 0);
class jT {
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
      if (RT() && o.attachTimeline)
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
class MT extends jT {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function $d(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Yu = 2e4;
function J0(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Yu; )
    t += n, r = e.next(t);
  return t >= Yu ? 1 / 0 : t;
}
function Ud(e) {
  return typeof e == "function";
}
function Zp(e, t) {
  e.timeline = t, e.onfinish = null;
}
const Wd = (e) => Array.isArray(e) && typeof e[0] == "number", LT = {
  linearEasing: void 0
};
function _T(e, t) {
  const n = /* @__PURE__ */ Nd(e);
  return () => {
    var r;
    return (r = LT[t]) !== null && r !== void 0 ? r : n();
  };
}
const sa = /* @__PURE__ */ _T(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), ex = (e, t, n = 10) => {
  let r = "";
  const o = Math.max(Math.round(t / n), 2);
  for (let s = 0; s < o; s++)
    r += e(/* @__PURE__ */ Yr(0, o - 1, s)) + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
};
function tx(e) {
  return !!(typeof e == "function" && sa() || !e || typeof e == "string" && (e in Xu || sa()) || Wd(e) || Array.isArray(e) && e.every(tx));
}
const No = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Xu = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ No([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ No([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ No([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ No([0.33, 1.53, 0.69, 0.99])
};
function nx(e, t) {
  if (e)
    return typeof e == "function" && sa() ? ex(e, t) : Wd(e) ? No(e) : Array.isArray(e) ? e.map((n) => nx(n, t) || Xu.easeOut) : Xu[e];
}
const mt = {
  x: !1,
  y: !1
};
function rx() {
  return mt.x || mt.y;
}
function OT(e, t, n) {
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
function ox(e, t) {
  const n = OT(e), r = new AbortController(), o = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, o, () => r.abort()];
}
function qp(e) {
  return (t) => {
    t.pointerType === "touch" || rx() || e(t);
  };
}
function IT(e, t, n = {}) {
  const [r, o, s] = ox(e, n), i = qp((a) => {
    const { target: l } = a, u = t(a);
    if (typeof u != "function" || !l)
      return;
    const c = qp((d) => {
      u(d), l.removeEventListener("pointerleave", c);
    });
    l.addEventListener("pointerleave", c, o);
  });
  return r.forEach((a) => {
    a.addEventListener("pointerenter", i, o);
  }), s;
}
const sx = (e, t) => t ? e === t ? !0 : sx(e, t.parentElement) : !1, Hd = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, VT = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function FT(e) {
  return VT.has(e.tagName) || e.tabIndex !== -1;
}
const Do = /* @__PURE__ */ new WeakSet();
function Jp(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Al(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const zT = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = Jp(() => {
    if (Do.has(n))
      return;
    Al(n, "down");
    const o = Jp(() => {
      Al(n, "up");
    }), s = () => Al(n, "cancel");
    n.addEventListener("keyup", o, t), n.addEventListener("blur", s, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function eh(e) {
  return Hd(e) && !rx();
}
function BT(e, t, n = {}) {
  const [r, o, s] = ox(e, n), i = (a) => {
    const l = a.currentTarget;
    if (!eh(a) || Do.has(l))
      return;
    Do.add(l);
    const u = t(a), c = (g, w) => {
      window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", f), !(!eh(g) || !Do.has(l)) && (Do.delete(l), typeof u == "function" && u(g, { success: w }));
    }, d = (g) => {
      c(g, n.useGlobalTarget || sx(l, g.target));
    }, f = (g) => {
      c(g, !1);
    };
    window.addEventListener("pointerup", d, o), window.addEventListener("pointercancel", f, o);
  };
  return r.forEach((a) => {
    !FT(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0), (n.useGlobalTarget ? window : a).addEventListener("pointerdown", i, o), a.addEventListener("focus", (u) => zT(u, o), o);
  }), s;
}
function $T(e) {
  return e === "x" || e === "y" ? mt[e] ? null : (mt[e] = !0, () => {
    mt[e] = !1;
  }) : mt.x || mt.y ? null : (mt.x = mt.y = !0, () => {
    mt.x = mt.y = !1;
  });
}
const ix = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...io
]);
let Pi;
function UT() {
  Pi = void 0;
}
const It = {
  now: () => (Pi === void 0 && It.set(Pe.isProcessing || VE.useManualTiming ? Pe.timestamp : performance.now()), Pi),
  set: (e) => {
    Pi = e, queueMicrotask(UT);
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
function ax(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const th = 30, WT = (e) => !isNaN(parseFloat(e));
class HT {
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
      const s = It.now();
      this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = It.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = WT(this.current));
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
      r(), oe.read(() => {
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
    const t = It.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > th)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, th);
    return ax(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function ps(e, t) {
  return new HT(e, t);
}
function KT(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ps(n));
}
function GT(e, t) {
  const n = $a(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const i in s) {
    const a = sT(s[i]);
    KT(e, i, a);
  }
}
function YT(e) {
  return !!(_e(e) && e.add);
}
function Qu(e, t) {
  const n = e.getValue("willChange");
  if (YT(n))
    return n.add(t);
}
function lx(e) {
  return e.props[V0];
}
const ux = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, XT = 1e-7, QT = 12;
function ZT(e, t, n, r, o) {
  let s, i, a = 0;
  do
    i = t + (n - t) / 2, s = ux(i, r, o) - e, s > 0 ? n = i : t = i;
  while (Math.abs(s) > XT && ++a < QT);
  return i;
}
function Es(e, t, n, r) {
  if (e === t && n === r)
    return et;
  const o = (s) => ZT(s, 0, 1, e, n);
  return (s) => s === 0 || s === 1 ? s : ux(o(s), t, r);
}
const cx = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, dx = (e) => (t) => 1 - e(1 - t), fx = /* @__PURE__ */ Es(0.33, 1.53, 0.69, 0.99), Xd = /* @__PURE__ */ dx(fx), px = /* @__PURE__ */ cx(Xd), hx = (e) => (e *= 2) < 1 ? 0.5 * Xd(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Qd = (e) => 1 - Math.sin(Math.acos(e)), mx = dx(Qd), gx = cx(Qd), yx = (e) => /^0[^.\s]+$/u.test(e);
function qT(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || yx(e) : !0;
}
const zo = (e) => Math.round(e * 1e5) / 1e5, Zd = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function JT(e) {
  return e == null;
}
const eN = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, qd = (e, t) => (n) => !!(typeof n == "string" && eN.test(n) && n.startsWith(e) || t && !JT(n) && Object.prototype.hasOwnProperty.call(n, t)), vx = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [o, s, i, a] = r.match(Zd);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(s),
    [n]: parseFloat(i),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, tN = (e) => en(0, 255, e), Rl = {
  ...ao,
  transform: (e) => Math.round(tN(e))
}, Gn = {
  test: /* @__PURE__ */ qd("rgb", "red"),
  parse: /* @__PURE__ */ vx("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Rl.transform(e) + ", " + Rl.transform(t) + ", " + Rl.transform(n) + ", " + zo(fs.transform(r)) + ")"
};
function nN(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Zu = {
  test: /* @__PURE__ */ qd("#"),
  parse: nN,
  transform: Gn.transform
}, Er = {
  test: /* @__PURE__ */ qd("hsl", "hue"),
  parse: /* @__PURE__ */ vx("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Ot.transform(zo(t)) + ", " + Ot.transform(zo(n)) + ", " + zo(fs.transform(r)) + ")"
}, Me = {
  test: (e) => Gn.test(e) || Zu.test(e) || Er.test(e),
  parse: (e) => Gn.test(e) ? Gn.parse(e) : Er.test(e) ? Er.parse(e) : Zu.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Gn.transform(e) : Er.transform(e)
}, rN = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function oN(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(Zd)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(rN)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const xx = "number", wx = "color", sN = "var", iN = "var(", nh = "${}", aN = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function hs(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let s = 0;
  const a = t.replace(aN, (l) => (Me.test(l) ? (r.color.push(s), o.push(wx), n.push(Me.parse(l))) : l.startsWith(iN) ? (r.var.push(s), o.push(sN), n.push(l)) : (r.number.push(s), o.push(xx), n.push(parseFloat(l))), ++s, nh)).split(nh);
  return { values: n, split: a, indexes: r, types: o };
}
function Sx(e) {
  return hs(e).values;
}
function kx(e) {
  const { split: t, types: n } = hs(e), r = t.length;
  return (o) => {
    let s = "";
    for (let i = 0; i < r; i++)
      if (s += t[i], o[i] !== void 0) {
        const a = n[i];
        a === xx ? s += zo(o[i]) : a === wx ? s += Me.transform(o[i]) : s += o[i];
      }
    return s;
  };
}
const lN = (e) => typeof e == "number" ? 0 : e;
function uN(e) {
  const t = Sx(e);
  return kx(e)(t.map(lN));
}
const Rn = {
  test: oN,
  parse: Sx,
  createTransformer: kx,
  getAnimatableNone: uN
}, cN = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function dN(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(Zd) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let s = cN.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + o + ")";
}
const fN = /\b([a-z-]*)\(.*?\)/gu, qu = {
  ...Rn,
  getAnimatableNone: (e) => {
    const t = e.match(fN);
    return t ? t.map(dN).join(" ") : e;
  }
}, pN = {
  ...Od,
  // Color props
  color: Me,
  backgroundColor: Me,
  outlineColor: Me,
  fill: Me,
  stroke: Me,
  // Border props
  borderColor: Me,
  borderTopColor: Me,
  borderRightColor: Me,
  borderBottomColor: Me,
  borderLeftColor: Me,
  filter: qu,
  WebkitFilter: qu
}, Jd = (e) => pN[e];
function bx(e, t) {
  let n = Jd(e);
  return n !== qu && (n = Rn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const hN = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function mN(e, t, n) {
  let r = 0, o;
  for (; r < e.length && !o; ) {
    const s = e[r];
    typeof s == "string" && !hN.has(s) && hs(s).values.length && (o = e[r]), r++;
  }
  if (o && n)
    for (const s of t)
      e[s] = bx(n, o);
}
const rh = (e) => e === ao || e === V, oh = (e, t) => parseFloat(e.split(", ")[t]), sh = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/u);
  if (o)
    return oh(o[1], t);
  {
    const s = r.match(/^matrix\((.+)\)$/u);
    return s ? oh(s[1], e) : 0;
  }
}, gN = /* @__PURE__ */ new Set(["x", "y", "z"]), yN = io.filter((e) => !gN.has(e));
function vN(e) {
  const t = [];
  return yN.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const Qr = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: sh(4, 13),
  y: sh(5, 14)
};
Qr.translateX = Qr.x;
Qr.translateY = Qr.y;
const Qn = /* @__PURE__ */ new Set();
let Ju = !1, ec = !1;
function Cx() {
  if (ec) {
    const e = Array.from(Qn).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const o = vN(r);
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
  ec = !1, Ju = !1, Qn.forEach((e) => e.complete()), Qn.clear();
}
function Px() {
  Qn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (ec = !0);
  });
}
function xN() {
  Px(), Cx();
}
class ef {
  constructor(t, n, r, o, s, i = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = o, this.element = s, this.isAsync = i;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (Qn.add(this), Ju || (Ju = !0, oe.read(Px), oe.resolveKeyframes(Cx))) : (this.readKeyframes(), this.complete());
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
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Qn.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, Qn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Ex = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), wN = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function SN(e) {
  const t = wN.exec(e);
  if (!t)
    return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
function Tx(e, t, n = 1) {
  const [r, o] = SN(e);
  if (!r)
    return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const i = s.trim();
    return Ex(i) ? parseFloat(i) : i;
  }
  return _d(o) ? Tx(o, t, n + 1) : o;
}
const Nx = (e) => (t) => t.test(e), kN = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Dx = [ao, V, Ot, an, dT, cT, kN], ih = (e) => Dx.find(Nx(e));
class Ax extends ef {
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
    if (this.resolveNoneKeyframes(), !ix.has(r) || t.length !== 2)
      return;
    const [o, s] = t, i = ih(o), a = ih(s);
    if (i !== a)
      if (rh(i) && rh(a))
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
      qT(t[o]) && r.push(o);
    r.length && mN(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Qr[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
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
    o[i] = Qr[r](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([l, u]) => {
      n.getValue(l).set(u);
    }), this.resolveNoneKeyframes();
  }
}
const ah = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(Rn.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function bN(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function CN(e, t, n, r) {
  const o = e[0];
  if (o === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const s = e[e.length - 1], i = ah(o, t), a = ah(s, t);
  return !i || !a ? !1 : bN(e) || (n === "spring" || Ud(n)) && r;
}
const PN = (e) => e !== null;
function Ua(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(PN), s = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !s || r === void 0 ? o[s] : r;
}
const EN = 40;
class Rx {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: o = 0, repeatDelay: s = 0, repeatType: i = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = It.now(), this.options = {
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
    return this.resolvedAt ? this.resolvedAt - this.createdAt > EN ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && xN(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = It.now(), this.hasAttemptedResolve = !0;
    const { name: r, type: o, velocity: s, delay: i, onComplete: a, onUpdate: l, isGenerator: u } = this.options;
    if (!u && !CN(t, r, o, s))
      if (i)
        this.options.duration = 0;
      else {
        l && l(Ua(t, this.options, n)), a && a(), this.resolveFinishedPromise();
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
const le = (e, t, n) => e + (t - e) * n;
function jl(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function TN({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, s = 0, i = 0;
  if (!t)
    o = s = i = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    o = jl(l, a, e + 1 / 3), s = jl(l, a, e), i = jl(l, a, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(s * 255),
    blue: Math.round(i * 255),
    alpha: r
  };
}
function ia(e, t) {
  return (n) => n > 0 ? t : e;
}
const Ml = (e, t, n) => {
  const r = e * e, o = n * (t * t - r) + r;
  return o < 0 ? 0 : Math.sqrt(o);
}, NN = [Zu, Gn, Er], DN = (e) => NN.find((t) => t.test(e));
function lh(e) {
  const t = DN(e);
  if (!t)
    return !1;
  let n = t.parse(e);
  return t === Er && (n = TN(n)), n;
}
const uh = (e, t) => {
  const n = lh(e), r = lh(t);
  if (!n || !r)
    return ia(e, t);
  const o = { ...n };
  return (s) => (o.red = Ml(n.red, r.red, s), o.green = Ml(n.green, r.green, s), o.blue = Ml(n.blue, r.blue, s), o.alpha = le(n.alpha, r.alpha, s), Gn.transform(o));
}, AN = (e, t) => (n) => t(e(n)), Ts = (...e) => e.reduce(AN), tc = /* @__PURE__ */ new Set(["none", "hidden"]);
function RN(e, t) {
  return tc.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function jN(e, t) {
  return (n) => le(e, t, n);
}
function tf(e) {
  return typeof e == "number" ? jN : typeof e == "string" ? _d(e) ? ia : Me.test(e) ? uh : _N : Array.isArray(e) ? jx : typeof e == "object" ? Me.test(e) ? uh : MN : ia;
}
function jx(e, t) {
  const n = [...e], r = n.length, o = e.map((s, i) => tf(s)(s, t[i]));
  return (s) => {
    for (let i = 0; i < r; i++)
      n[i] = o[i](s);
    return n;
  };
}
function MN(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = tf(e[o])(e[o], t[o]));
  return (o) => {
    for (const s in r)
      n[s] = r[s](o);
    return n;
  };
}
function LN(e, t) {
  var n;
  const r = [], o = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const i = t.types[s], a = e.indexes[i][o[i]], l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    r[s] = l, o[i]++;
  }
  return r;
}
const _N = (e, t) => {
  const n = Rn.createTransformer(t), r = hs(e), o = hs(t);
  return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? tc.has(e) && !o.values.length || tc.has(t) && !r.values.length ? RN(e, t) : Ts(jx(LN(r, o), o.values), n) : ia(e, t);
};
function Mx(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? le(e, t, n) : tf(e)(e, t);
}
const ON = 5;
function Lx(e, t, n) {
  const r = Math.max(t - ON, 0);
  return ax(n - e(r), t - r);
}
const fe = {
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
}, Ll = 1e-3;
function IN({ duration: e = fe.duration, bounce: t = fe.bounce, velocity: n = fe.velocity, mass: r = fe.mass }) {
  let o, s, i = 1 - t;
  i = en(fe.minDamping, fe.maxDamping, i), e = en(fe.minDuration, fe.maxDuration, /* @__PURE__ */ Gt(e)), i < 1 ? (o = (u) => {
    const c = u * i, d = c * e, f = c - n, g = nc(u, i), w = Math.exp(-d);
    return Ll - f / g * w;
  }, s = (u) => {
    const d = u * i * e, f = d * n + n, g = Math.pow(i, 2) * Math.pow(u, 2) * e, w = Math.exp(-d), y = nc(Math.pow(u, 2), i);
    return (-o(u) + Ll > 0 ? -1 : 1) * ((f - g) * w) / y;
  }) : (o = (u) => {
    const c = Math.exp(-u * e), d = (u - n) * e + 1;
    return -Ll + c * d;
  }, s = (u) => {
    const c = Math.exp(-u * e), d = (n - u) * (e * e);
    return c * d;
  });
  const a = 5 / e, l = FN(o, s, a);
  if (e = /* @__PURE__ */ Kt(e), isNaN(l))
    return {
      stiffness: fe.stiffness,
      damping: fe.damping,
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
const VN = 12;
function FN(e, t, n) {
  let r = n;
  for (let o = 1; o < VN; o++)
    r = r - e(r) / t(r);
  return r;
}
function nc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const zN = ["duration", "bounce"], BN = ["stiffness", "damping", "mass"];
function ch(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function $N(e) {
  let t = {
    velocity: fe.velocity,
    stiffness: fe.stiffness,
    damping: fe.damping,
    mass: fe.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!ch(e, BN) && ch(e, zN))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), o = r * r, s = 2 * en(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
      t = {
        ...t,
        mass: fe.mass,
        stiffness: o,
        damping: s
      };
    } else {
      const n = IN(e);
      t = {
        ...t,
        ...n,
        mass: fe.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function _x(e = fe.visualDuration, t = fe.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: o } = n;
  const s = n.keyframes[0], i = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: s }, { stiffness: l, damping: u, mass: c, duration: d, velocity: f, isResolvedFromDuration: g } = $N({
    ...n,
    velocity: -/* @__PURE__ */ Gt(n.velocity || 0)
  }), w = f || 0, y = u / (2 * Math.sqrt(l * c)), S = i - s, m = /* @__PURE__ */ Gt(Math.sqrt(l / c)), h = Math.abs(S) < 5;
  r || (r = h ? fe.restSpeed.granular : fe.restSpeed.default), o || (o = h ? fe.restDelta.granular : fe.restDelta.default);
  let v;
  if (y < 1) {
    const b = nc(m, y);
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
        y < 1 && (P = b === 0 ? /* @__PURE__ */ Kt(w) : Lx(v, b, C));
        const E = Math.abs(P) <= r, D = Math.abs(i - C) <= o;
        a.done = E && D;
      }
      return a.value = a.done ? i : C, a;
    },
    toString: () => {
      const b = Math.min(J0(k), Yu), C = ex((P) => k.next(b * P).value, b, 30);
      return b + "ms " + C;
    }
  };
  return k;
}
function dh({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: s = 500, modifyTarget: i, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, g = (E) => a !== void 0 && E < a || l !== void 0 && E > l, w = (E) => a === void 0 ? l : l === void 0 || Math.abs(a - E) < Math.abs(l - E) ? a : l;
  let y = n * t;
  const S = d + y, m = i === void 0 ? S : i(S);
  m !== S && (y = m - d);
  const h = (E) => -y * Math.exp(-E / r), v = (E) => m + h(E), k = (E) => {
    const D = h(E), N = v(E);
    f.done = Math.abs(D) <= u, f.value = f.done ? m : N;
  };
  let b, C;
  const P = (E) => {
    g(f.value) && (b = E, C = _x({
      keyframes: [f.value, w(f.value)],
      velocity: Lx(v, E, f.value),
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
      let D = !1;
      return !C && b === void 0 && (D = !0, k(E), P(E)), b !== void 0 && E >= b ? C.next(E - b) : (!D && k(E), f);
    }
  };
}
const UN = /* @__PURE__ */ Es(0.42, 0, 1, 1), WN = /* @__PURE__ */ Es(0, 0, 0.58, 1), Ox = /* @__PURE__ */ Es(0.42, 0, 0.58, 1), HN = (e) => Array.isArray(e) && typeof e[0] != "number", KN = {
  linear: et,
  easeIn: UN,
  easeInOut: Ox,
  easeOut: WN,
  circIn: Qd,
  circInOut: gx,
  circOut: mx,
  backIn: Xd,
  backInOut: px,
  backOut: fx,
  anticipate: hx
}, fh = (e) => {
  if (Wd(e)) {
    M0(e.length === 4);
    const [t, n, r, o] = e;
    return Es(t, n, r, o);
  } else if (typeof e == "string")
    return KN[e];
  return e;
};
function GN(e, t, n) {
  const r = [], o = n || Mx, s = e.length - 1;
  for (let i = 0; i < s; i++) {
    let a = o(e[i], e[i + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[i] || et : t;
      a = Ts(l, a);
    }
    r.push(a);
  }
  return r;
}
function YN(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const s = e.length;
  if (M0(s === t.length), s === 1)
    return () => t[0];
  if (s === 2 && t[0] === t[1])
    return () => t[1];
  const i = e[0] === e[1];
  e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = GN(t, r, o), l = a.length, u = (c) => {
    if (i && c < e[0])
      return t[0];
    let d = 0;
    if (l > 1)
      for (; d < e.length - 2 && !(c < e[d + 1]); d++)
        ;
    const f = /* @__PURE__ */ Yr(e[d], e[d + 1], c);
    return a[d](f);
  };
  return n ? (c) => u(en(e[0], e[s - 1], c)) : u;
}
function XN(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = /* @__PURE__ */ Yr(0, t, r);
    e.push(le(n, 1, o));
  }
}
function QN(e) {
  const t = [0];
  return XN(t, e.length - 1), t;
}
function ZN(e, t) {
  return e.map((n) => n * t);
}
function qN(e, t) {
  return e.map(() => t || Ox).splice(0, e.length - 1);
}
function aa({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = HN(r) ? r.map(fh) : fh(r), s = {
    done: !1,
    value: t[0]
  }, i = ZN(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : QN(t),
    e
  ), a = YN(i, t, {
    ease: Array.isArray(o) ? o : qN(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (s.value = a(l), s.done = l >= e, s)
  };
}
const JN = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => oe.update(t, !0),
    stop: () => An(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Pe.isProcessing ? Pe.timestamp : It.now()
  };
}, eD = {
  decay: dh,
  inertia: dh,
  tween: aa,
  keyframes: aa,
  spring: _x
}, tD = (e) => e / 100;
class nf extends Rx {
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
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: o = 0, repeatType: s, velocity: i = 0 } = this.options, a = Ud(n) ? n : eD[n] || aa;
    let l, u;
    a !== aa && typeof t[0] != "number" && (l = Ts(tD, Mx(t[0], t[1])), t = [0, 100]);
    const c = a({ ...this.options, keyframes: t });
    s === "mirror" && (u = a({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -i
    })), c.calculatedDuration === null && (c.calculatedDuration = J0(c));
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
      let D = Math.floor(E), N = E % 1;
      !N && E >= 1 && (N = 1), N === 1 && D--, D = Math.min(D, g + 1), !!(D % 2) && (w === "reverse" ? (N = 1 - N, y && (N -= y / d)) : w === "mirror" && (k = i)), v = en(0, 1, N) * d;
    }
    const b = h ? { done: !1, value: l[0] } : k.next(v);
    a && (b.value = a(b.value));
    let { done: C } = b;
    !h && u !== null && (C = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const P = this.holdTime === null && (this.state === "finished" || this.state === "running" && C);
    return P && o !== void 0 && (b.value = Ua(l, this.options, o)), S && S(b.value), P && this.finish(), b;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? /* @__PURE__ */ Gt(t.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ Gt(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ Kt(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ Gt(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = JN, onPlay: n, startTime: r } = this.options;
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
const nD = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function rD(e, t, n, { delay: r = 0, duration: o = 300, repeat: s = 0, repeatType: i = "loop", ease: a = "easeInOut", times: l } = {}) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = nx(a, o);
  return Array.isArray(c) && (u.easing = c), e.animate(u, {
    delay: r,
    duration: o,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: s + 1,
    direction: i === "reverse" ? "alternate" : "normal"
  });
}
const oD = /* @__PURE__ */ Nd(() => Object.hasOwnProperty.call(Element.prototype, "animate")), la = 10, sD = 2e4;
function iD(e) {
  return Ud(e.type) || e.type === "spring" || !tx(e.ease);
}
function aD(e, t) {
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
  for (; !r.done && s < sD; )
    r = n.sample(s), o.push(r.value), s += la;
  return {
    times: void 0,
    keyframes: o,
    duration: s - la,
    ease: "linear"
  };
}
const Ix = {
  anticipate: hx,
  backInOut: px,
  circInOut: gx
};
function lD(e) {
  return e in Ix;
}
class ph extends Rx {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: o, keyframes: s } = this.options;
    this.resolver = new Ax(s, (i, a) => this.onKeyframesResolved(i, a), n, r, o), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let { duration: r = 300, times: o, ease: s, type: i, motionValue: a, name: l, startTime: u } = this.options;
    if (!a.owner || !a.owner.current)
      return !1;
    if (typeof s == "string" && sa() && lD(s) && (s = Ix[s]), iD(this.options)) {
      const { onComplete: d, onUpdate: f, motionValue: g, element: w, ...y } = this.options, S = aD(t, y);
      t = S.keyframes, t.length === 1 && (t[1] = t[0]), r = S.duration, o = S.times, s = S.ease, i = "keyframes";
    }
    const c = rD(a.owner.current, l, t, { ...this.options, duration: r, times: o, ease: s });
    return c.startTime = u ?? this.calcStartTime(), this.pendingTimeline ? (Zp(c, this.pendingTimeline), this.pendingTimeline = void 0) : c.onfinish = () => {
      const { onComplete: d } = this.options;
      a.set(Ua(t, this.options, n)), d && d(), this.cancel(), this.resolveFinishedPromise();
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
    return /* @__PURE__ */ Gt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return /* @__PURE__ */ Gt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.currentTime = /* @__PURE__ */ Kt(t);
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
        return et;
      const { animation: r } = n;
      Zp(r, t);
    }
    return et;
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
      const { motionValue: u, onUpdate: c, onComplete: d, element: f, ...g } = this.options, w = new nf({
        ...g,
        keyframes: r,
        duration: o,
        type: s,
        ease: i,
        times: a,
        isGenerator: !0
      }), y = /* @__PURE__ */ Kt(this.time);
      u.setWithVelocity(w.sample(y - la).value, w.sample(y).value, la);
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
    return oD() && r && nD.has(r) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !l && !u && !o && s !== "mirror" && i !== 0 && a !== "inertia";
  }
}
const uD = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, cD = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), dD = {
  type: "keyframes",
  duration: 0.8
}, fD = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, pD = (e, { keyframes: t }) => t.length > 2 ? dD : lr.has(e) ? e.startsWith("scale") ? cD(t[1]) : uD : fD;
function hD({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: s, repeatType: i, repeatDelay: a, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
const rf = (e, t, n, r = {}, o, s) => (i) => {
  const a = $d(r, e) || {}, l = a.delay || r.delay || 0;
  let { elapsed: u = 0 } = r;
  u = u - /* @__PURE__ */ Kt(l);
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
  hD(a) || (c = {
    ...c,
    ...pD(e, c)
  }), c.duration && (c.duration = /* @__PURE__ */ Kt(c.duration)), c.repeatDelay && (c.repeatDelay = /* @__PURE__ */ Kt(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let d = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (d = !0)), d && !s && t.get() !== void 0) {
    const f = Ua(c.keyframes, a);
    if (f !== void 0)
      return oe.update(() => {
        c.onUpdate(f), c.onComplete();
      }), new MT([]);
  }
  return !s && ph.supports(c) ? new ph(c) : new nf(c);
};
function mD({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function Vx(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var s;
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (i = r);
  const u = [], c = o && e.animationState && e.animationState.getState()[o];
  for (const d in l) {
    const f = e.getValue(d, (s = e.latestValues[d]) !== null && s !== void 0 ? s : null), g = l[d];
    if (g === void 0 || c && mD(c, d))
      continue;
    const w = {
      delay: n,
      ...$d(i || {}, d)
    };
    let y = !1;
    if (window.MotionHandoffAnimation) {
      const m = lx(e);
      if (m) {
        const h = window.MotionHandoffAnimation(m, d, oe);
        h !== null && (w.startTime = h, y = !0);
      }
    }
    Qu(e, d), f.start(rf(d, f, g, e.shouldReduceMotion && ix.has(d) ? { type: !1 } : w, e, y));
    const S = f.animation;
    S && u.push(S);
  }
  return a && Promise.all(u).then(() => {
    oe.update(() => {
      a && GT(e, a);
    });
  }), u;
}
function rc(e, t, n = {}) {
  var r;
  const o = $a(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let { transition: s = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (s = n.transitionOverride);
  const i = o ? () => Promise.all(Vx(e, o, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (u = 0) => {
    const { delayChildren: c = 0, staggerChildren: d, staggerDirection: f } = s;
    return gD(e, t, c + u, d, f, n);
  } : () => Promise.resolve(), { when: l } = s;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [i, a] : [a, i];
    return u().then(() => c());
  } else
    return Promise.all([i(), a(n.delay)]);
}
function gD(e, t, n = 0, r = 0, o = 1, s) {
  const i = [], a = (e.variantChildren.size - 1) * r, l = o === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return Array.from(e.variantChildren).sort(yD).forEach((u, c) => {
    u.notify("AnimationStart", t), i.push(rc(u, t, {
      ...s,
      delay: n + l(c)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(i);
}
function yD(e, t) {
  return e.sortNodePosition(t);
}
function vD(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((s) => rc(e, s, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = rc(e, t, n);
  else {
    const o = typeof t == "function" ? $a(e, t, n.custom) : t;
    r = Promise.all(Vx(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const xD = Ad.length;
function Fx(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Fx(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < xD; n++) {
    const r = Ad[n], o = e.props[r];
    (ds(o) || o === !1) && (t[r] = o);
  }
  return t;
}
const wD = [...Dd].reverse(), SD = Dd.length;
function kD(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => vD(e, n, r)));
}
function bD(e) {
  let t = kD(e), n = hh(), r = !0;
  const o = (l) => (u, c) => {
    var d;
    const f = $a(e, c, l === "exit" ? (d = e.presenceContext) === null || d === void 0 ? void 0 : d.custom : void 0);
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
    const { props: u } = e, c = Fx(e.parent) || {}, d = [], f = /* @__PURE__ */ new Set();
    let g = {}, w = 1 / 0;
    for (let S = 0; S < SD; S++) {
      const m = wD[S], h = n[m], v = u[m] !== void 0 ? u[m] : c[m], k = ds(v), b = m === l ? h.isActive : null;
      b === !1 && (w = S);
      let C = v === c[m] && v !== u[m] && k;
      if (C && r && e.manuallyAnimateOnMount && (C = !1), h.protectedKeys = { ...g }, // If it isn't active and hasn't *just* been set as inactive
      !h.isActive && b === null || // If we didn't and don't have any defined prop for this animation type
      !v && !h.prevProp || // Or if the prop doesn't define an animation
      za(v) || typeof v == "boolean")
        continue;
      const P = CD(h.prevProp, v);
      let E = P || // If we're making this variant active, we want to always make it active
      m === l && h.isActive && !C && k || // If we removed a higher-priority variant (i is in reverse order)
      S > w && k, D = !1;
      const N = Array.isArray(v) ? v : [v];
      let M = N.reduce(o(m), {});
      b === !1 && (M = {});
      const { prevResolvedValues: R = {} } = h, z = {
        ...R,
        ...M
      }, B = (I) => {
        E = !0, f.has(I) && (D = !0, f.delete(I)), h.needsAnimating[I] = !0;
        const T = e.getValue(I);
        T && (T.liveStyle = !1);
      };
      for (const I in z) {
        const T = M[I], j = R[I];
        if (g.hasOwnProperty(I))
          continue;
        let _ = !1;
        Gu(T) && Gu(j) ? _ = !q0(T, j) : _ = T !== j, _ ? T != null ? B(I) : f.add(I) : T !== void 0 && f.has(I) ? B(I) : h.protectedKeys[I] = !0;
      }
      h.prevProp = v, h.prevResolvedValues = M, h.isActive && (g = { ...g, ...M }), r && e.blockInitialAnimation && (E = !1), E && (!(C && P) || D) && d.push(...N.map((I) => ({
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
      n = hh(), r = !0;
    }
  };
}
function CD(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !q0(t, e) : !1;
}
function Fn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function hh() {
  return {
    animate: Fn(!0),
    whileInView: Fn(),
    whileHover: Fn(),
    whileTap: Fn(),
    whileDrag: Fn(),
    whileFocus: Fn(),
    exit: Fn()
  };
}
class In {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class PD extends In {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = bD(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    za(t) && (this.unmountControls = t.subscribe(this.node));
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
let ED = 0;
class TD extends In {
  constructor() {
    super(...arguments), this.id = ED++;
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
const ND = {
  animation: {
    Feature: PD
  },
  exit: {
    Feature: TD
  }
};
function ms(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Ns(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const DD = (e) => (t) => Hd(t) && e(t, Ns(t));
function Bo(e, t, n, r) {
  return ms(e, t, DD(n), r);
}
const mh = (e, t) => Math.abs(e - t);
function AD(e, t) {
  const n = mh(e.x, t.x), r = mh(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class zx {
  constructor(t, n, { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: s = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const d = Ol(this.lastMoveEventInfo, this.history), f = this.startEvent !== null, g = AD(d.offset, { x: 0, y: 0 }) >= 3;
      if (!f && !g)
        return;
      const { point: w } = d, { timestamp: y } = Pe;
      this.history.push({ ...w, timestamp: y });
      const { onStart: S, onMove: m } = this.handlers;
      f || (S && S(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), m && m(this.lastMoveEvent, d);
    }, this.handlePointerMove = (d, f) => {
      this.lastMoveEvent = d, this.lastMoveEventInfo = _l(f, this.transformPagePoint), oe.update(this.updatePoint, !0);
    }, this.handlePointerUp = (d, f) => {
      this.end();
      const { onEnd: g, onSessionEnd: w, resumeAnimation: y } = this.handlers;
      if (this.dragSnapToOrigin && y && y(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const S = Ol(d.type === "pointercancel" ? this.lastMoveEventInfo : _l(f, this.transformPagePoint), this.history);
      this.startEvent && g && g(d, S), w && w(d, S);
    }, !Hd(t))
      return;
    this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = r, this.contextWindow = o || window;
    const i = Ns(t), a = _l(i, this.transformPagePoint), { point: l } = a, { timestamp: u } = Pe;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, Ol(a, this.history)), this.removeListeners = Ts(Bo(this.contextWindow, "pointermove", this.handlePointerMove), Bo(this.contextWindow, "pointerup", this.handlePointerUp), Bo(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), An(this.updatePoint);
  }
}
function _l(e, t) {
  return t ? { point: t(e.point) } : e;
}
function gh(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Ol({ point: e }, t) {
  return {
    point: e,
    delta: gh(e, Bx(t)),
    offset: gh(e, RD(t)),
    velocity: jD(t, 0.1)
  };
}
function RD(e) {
  return e[0];
}
function Bx(e) {
  return e[e.length - 1];
}
function jD(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = Bx(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > /* @__PURE__ */ Kt(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const s = /* @__PURE__ */ Gt(o.timestamp - r.timestamp);
  if (s === 0)
    return { x: 0, y: 0 };
  const i = {
    x: (o.x - r.x) / s,
    y: (o.y - r.y) / s
  };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
const $x = 1e-4, MD = 1 - $x, LD = 1 + $x, Ux = 0.01, _D = 0 - Ux, OD = 0 + Ux;
function nt(e) {
  return e.max - e.min;
}
function ID(e, t, n) {
  return Math.abs(e - t) <= n;
}
function yh(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = le(t.min, t.max, e.origin), e.scale = nt(n) / nt(t), e.translate = le(n.min, n.max, e.origin) - e.originPoint, (e.scale >= MD && e.scale <= LD || isNaN(e.scale)) && (e.scale = 1), (e.translate >= _D && e.translate <= OD || isNaN(e.translate)) && (e.translate = 0);
}
function $o(e, t, n, r) {
  yh(e.x, t.x, n.x, r ? r.originX : void 0), yh(e.y, t.y, n.y, r ? r.originY : void 0);
}
function vh(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + nt(t);
}
function VD(e, t, n) {
  vh(e.x, t.x, n.x), vh(e.y, t.y, n.y);
}
function xh(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + nt(t);
}
function Uo(e, t, n) {
  xh(e.x, t.x, n.x), xh(e.y, t.y, n.y);
}
function FD(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? le(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? le(n, e, r.max) : Math.min(e, n)), e;
}
function wh(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function zD(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: wh(e.x, n, o),
    y: wh(e.y, t, r)
  };
}
function Sh(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function BD(e, t) {
  return {
    x: Sh(e.x, t.x),
    y: Sh(e.y, t.y)
  };
}
function $D(e, t) {
  let n = 0.5;
  const r = nt(e), o = nt(t);
  return o > r ? n = /* @__PURE__ */ Yr(t.min, t.max - r, e.min) : r > o && (n = /* @__PURE__ */ Yr(e.min, e.max - o, t.min)), en(0, 1, n);
}
function UD(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const oc = 0.35;
function WD(e = oc) {
  return e === !1 ? e = 0 : e === !0 && (e = oc), {
    x: kh(e, "left", "right"),
    y: kh(e, "top", "bottom")
  };
}
function kh(e, t, n) {
  return {
    min: bh(e, t),
    max: bh(e, n)
  };
}
function bh(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Ch = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Tr = () => ({
  x: Ch(),
  y: Ch()
}), Ph = () => ({ min: 0, max: 0 }), ge = () => ({
  x: Ph(),
  y: Ph()
});
function it(e) {
  return [e("x"), e("y")];
}
function Wx({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function HD({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function KD(e, t) {
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
function sc({ scale: e, scaleX: t, scaleY: n }) {
  return !Il(e) || !Il(t) || !Il(n);
}
function $n(e) {
  return sc(e) || Hx(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Hx(e) {
  return Eh(e.x) || Eh(e.y);
}
function Eh(e) {
  return e && e !== "0%";
}
function ua(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function Th(e, t, n, r, o) {
  return o !== void 0 && (e = ua(e, o, r)), ua(e, n, r) + t;
}
function ic(e, t = 0, n = 1, r, o) {
  e.min = Th(e.min, t, n, r, o), e.max = Th(e.max, t, n, r, o);
}
function Kx(e, { x: t, y: n }) {
  ic(e.x, t.translate, t.scale, t.originPoint), ic(e.y, n.translate, n.scale, n.originPoint);
}
const Nh = 0.999999999999, Dh = 1.0000000000001;
function GD(e, t, n, r = !1) {
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let s, i;
  for (let a = 0; a < o; a++) {
    s = n[a], i = s.projectionDelta;
    const { visualElement: l } = s.options;
    l && l.props.style && l.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && Dr(e, {
      x: -s.scroll.offset.x,
      y: -s.scroll.offset.y
    }), i && (t.x *= i.x.scale, t.y *= i.y.scale, Kx(e, i)), r && $n(s.latestValues) && Dr(e, s.latestValues));
  }
  t.x < Dh && t.x > Nh && (t.x = 1), t.y < Dh && t.y > Nh && (t.y = 1);
}
function Nr(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Ah(e, t, n, r, o = 0.5) {
  const s = le(e.min, e.max, o);
  ic(e, t, n, s, r);
}
function Dr(e, t) {
  Ah(e.x, t.x, t.scaleX, t.scale, t.originX), Ah(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Gx(e, t) {
  return Wx(KD(e.getBoundingClientRect(), t));
}
function YD(e, t, n) {
  const r = Gx(e, n), { scroll: o } = t;
  return o && (Nr(r.x, o.offset.x), Nr(r.y, o.offset.y)), r;
}
const Yx = ({ current: e }) => e ? e.ownerDocument.defaultView : null, XD = /* @__PURE__ */ new WeakMap();
class QD {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ge(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const o = (c) => {
      const { dragSnapToOrigin: d } = this.getProps();
      d ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Ns(c).point);
    }, s = (c, d) => {
      const { drag: f, dragPropagation: g, onDragStart: w } = this.getProps();
      if (f && !g && (this.openDragLock && this.openDragLock(), this.openDragLock = $T(f), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), it((S) => {
        let m = this.getAxisMotionValue(S).get() || 0;
        if (Ot.test(m)) {
          const { projection: h } = this.visualElement;
          if (h && h.layout) {
            const v = h.layout.layoutBox[S];
            v && (m = nt(v) * (parseFloat(m) / 100));
          }
        }
        this.originPoint[S] = m;
      }), w && oe.postRender(() => w(c, d)), Qu(this.visualElement, "transform");
      const { animationState: y } = this.visualElement;
      y && y.setActive("whileDrag", !0);
    }, i = (c, d) => {
      const { dragPropagation: f, dragDirectionLock: g, onDirectionLock: w, onDrag: y } = this.getProps();
      if (!f && !this.openDragLock)
        return;
      const { offset: S } = d;
      if (g && this.currentDirection === null) {
        this.currentDirection = ZD(S), this.currentDirection !== null && w && w(this.currentDirection);
        return;
      }
      this.updateAxis("x", d.point, S), this.updateAxis("y", d.point, S), this.visualElement.render(), y && y(c, d);
    }, a = (c, d) => this.stop(c, d), l = () => it((c) => {
      var d;
      return this.getAnimationState(c) === "paused" && ((d = this.getAxisMotionValue(c).animation) === null || d === void 0 ? void 0 : d.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new zx(t, {
      onSessionStart: o,
      onStart: s,
      onMove: i,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      contextWindow: Yx(this.visualElement)
    });
  }
  stop(t, n) {
    const r = this.isDragging;
    if (this.cancel(), !r)
      return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: s } = this.getProps();
    s && oe.postRender(() => s(t, n));
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
    if (!r || !ai(t, o, this.currentDirection))
      return;
    const s = this.getAxisMotionValue(t);
    let i = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (i = FD(i, this.constraints[t], this.elastic[t])), s.set(i);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, s = this.constraints;
    n && Pr(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = zD(o.layoutBox, n) : this.constraints = !1, this.elastic = WD(r), s !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && it((i) => {
      this.constraints !== !1 && this.getAxisMotionValue(i) && (this.constraints[i] = UD(o.layoutBox[i], this.constraints[i]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Pr(t))
      return !1;
    const r = t.current, { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const s = YD(r, o.root, this.visualElement.getTransformPagePoint());
    let i = BD(o.layout.layoutBox, s);
    if (n) {
      const a = n(HD(i));
      this.hasMutatedConstraints = !!a, a && (i = Wx(a));
    }
    return i;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: s, dragSnapToOrigin: i, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = it((c) => {
      if (!ai(c, n, this.currentDirection))
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
    return Qu(this.visualElement, t), r.start(rf(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    it((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    it((t) => {
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
    it((n) => {
      const { drag: r } = this.getProps();
      if (!ai(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, s = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: i, max: a } = o.layout.layoutBox[n];
        s.set(t[n] - le(i, a, 0.5));
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
    if (!Pr(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    it((i) => {
      const a = this.getAxisMotionValue(i);
      if (a && this.constraints !== !1) {
        const l = a.get();
        o[i] = $D({ min: l, max: l }, this.constraints[i]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), it((i) => {
      if (!ai(i, t, null))
        return;
      const a = this.getAxisMotionValue(i), { min: l, max: u } = this.constraints[i];
      a.set(le(l, u, o[i]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    XD.set(this.visualElement, this);
    const t = this.visualElement.current, n = Bo(t, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      Pr(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, s = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), oe.read(r);
    const i = ms(window, "resize", () => this.scalePositionWithinConstraints()), a = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (it((c) => {
        const d = this.getAxisMotionValue(c);
        d && (this.originPoint[c] += l[c].translate, d.set(d.get() + l[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      i(), n(), s(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: s = !1, dragElastic: i = oc, dragMomentum: a = !0 } = t;
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
function ai(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function ZD(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class qD extends In {
  constructor(t) {
    super(t), this.removeGroupControls = et, this.removeListeners = et, this.controls = new QD(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || et;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Rh = (e) => (t, n) => {
  e && oe.postRender(() => e(t, n));
};
class JD extends In {
  constructor() {
    super(...arguments), this.removePointerDownListener = et;
  }
  onPointerDown(t) {
    this.session = new zx(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Yx(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: Rh(t),
      onStart: Rh(n),
      onMove: r,
      onEnd: (s, i) => {
        delete this.session, o && oe.postRender(() => o(s, i));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Bo(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Ei = {
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
const ko = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (V.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = jh(e, t.target.x), r = jh(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, eA = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = Rn.parse(e);
    if (o.length > 5)
      return r;
    const s = Rn.createTransformer(e), i = typeof o[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
    o[0 + i] /= a, o[1 + i] /= l;
    const u = le(a, l, 0.5);
    return typeof o[2 + i] == "number" && (o[2 + i] /= u), typeof o[3 + i] == "number" && (o[3 + i] /= u), s(o);
  }
};
class tA extends x.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: s } = t;
    ST(nA), s && (n.group && n.group.add(s), r && r.register && o && r.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), s.setOptions({
      ...s.options,
      onExitComplete: () => this.safeToRemove()
    })), Ei.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: s } = this.props, i = r.projection;
    return i && (i.isPresent = s, o || t.layoutDependency !== n || n === void 0 ? i.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? i.promote() : i.relegate() || oe.postRender(() => {
      const a = i.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), jd.postRender(() => {
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
function Xx(e) {
  const [t, n] = R0(), r = x.useContext(Cd);
  return p.jsx(tA, { ...e, layoutGroup: r, switchLayoutGroup: x.useContext(F0), isPresent: t, safeToRemove: n });
}
const nA = {
  borderRadius: {
    ...ko,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: ko,
  borderTopRightRadius: ko,
  borderBottomLeftRadius: ko,
  borderBottomRightRadius: ko,
  boxShadow: eA
};
function rA(e, t, n) {
  const r = _e(e) ? e : ps(e);
  return r.start(rf("", r, t, n)), r.animation;
}
function oA(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const sA = (e, t) => e.depth - t.depth;
class iA {
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
    this.isDirty && this.children.sort(sA), this.isDirty = !1, this.children.forEach(t);
  }
}
function aA(e, t) {
  const n = It.now(), r = ({ timestamp: o }) => {
    const s = o - n;
    s >= t && (An(r), e(s - t));
  };
  return oe.read(r, !0), () => An(r);
}
const Qx = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], lA = Qx.length, Mh = (e) => typeof e == "string" ? parseFloat(e) : e, Lh = (e) => typeof e == "number" || V.test(e);
function uA(e, t, n, r, o, s) {
  o ? (e.opacity = le(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    cA(r)
  ), e.opacityExit = le(t.opacity !== void 0 ? t.opacity : 1, 0, dA(r))) : s && (e.opacity = le(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let i = 0; i < lA; i++) {
    const a = `border${Qx[i]}Radius`;
    let l = _h(t, a), u = _h(n, a);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || Lh(l) === Lh(u) ? (e[a] = Math.max(le(Mh(l), Mh(u), r), 0), (Ot.test(u) || Ot.test(l)) && (e[a] += "%")) : e[a] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = le(t.rotate || 0, n.rotate || 0, r));
}
function _h(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const cA = /* @__PURE__ */ Zx(0, 0.5, mx), dA = /* @__PURE__ */ Zx(0.5, 0.95, et);
function Zx(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ Yr(e, t, r));
}
function Oh(e, t) {
  e.min = t.min, e.max = t.max;
}
function st(e, t) {
  Oh(e.x, t.x), Oh(e.y, t.y);
}
function Ih(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function Vh(e, t, n, r, o) {
  return e -= t, e = ua(e, 1 / n, r), o !== void 0 && (e = ua(e, 1 / o, r)), e;
}
function fA(e, t = 0, n = 1, r = 0.5, o, s = e, i = e) {
  if (Ot.test(t) && (t = parseFloat(t), t = le(i.min, i.max, t / 100) - i.min), typeof t != "number")
    return;
  let a = le(s.min, s.max, r);
  e === s && (a -= t), e.min = Vh(e.min, t, n, a, o), e.max = Vh(e.max, t, n, a, o);
}
function Fh(e, t, [n, r, o], s, i) {
  fA(e, t[n], t[r], t[o], t.scale, s, i);
}
const pA = ["x", "scaleX", "originX"], hA = ["y", "scaleY", "originY"];
function zh(e, t, n, r) {
  Fh(e.x, t, pA, n ? n.x : void 0, r ? r.x : void 0), Fh(e.y, t, hA, n ? n.y : void 0, r ? r.y : void 0);
}
function Bh(e) {
  return e.translate === 0 && e.scale === 1;
}
function qx(e) {
  return Bh(e.x) && Bh(e.y);
}
function $h(e, t) {
  return e.min === t.min && e.max === t.max;
}
function mA(e, t) {
  return $h(e.x, t.x) && $h(e.y, t.y);
}
function Uh(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Jx(e, t) {
  return Uh(e.x, t.x) && Uh(e.y, t.y);
}
function Wh(e) {
  return nt(e.x) / nt(e.y);
}
function Hh(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class gA {
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
function yA(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, s = e.y.translate / t.y, i = (n == null ? void 0 : n.z) || 0;
  if ((o || s || i) && (r = `translate3d(${o}px, ${s}px, ${i}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: u, rotate: c, rotateX: d, rotateY: f, skewX: g, skewY: w } = n;
    u && (r = `perspective(${u}px) ${r}`), c && (r += `rotate(${c}deg) `), d && (r += `rotateX(${d}deg) `), f && (r += `rotateY(${f}deg) `), g && (r += `skewX(${g}deg) `), w && (r += `skewY(${w}deg) `);
  }
  const a = e.x.scale * t.x, l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const Un = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, Ao = typeof window < "u" && window.MotionDebug !== void 0, Vl = ["", "X", "Y", "Z"], vA = { visibility: "hidden" }, Kh = 1e3;
let xA = 0;
function Fl(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && (n[e] = o[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function ew(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = lx(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", oe, !(o || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && ew(r);
}
function tw({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(i = {}, a = t == null ? void 0 : t()) {
      this.id = xA++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Ao && (Un.totalNodes = Un.resolvedTargetDeltas = Un.recalculatedProjection = 0), this.nodes.forEach(kA), this.nodes.forEach(TA), this.nodes.forEach(NA), this.nodes.forEach(bA), Ao && window.MotionDebug.record(Un);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = i, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new iA());
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
      this.isSVG = oA(i), this.instance = i;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(i), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(i, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = aA(f, 250), Ei.hasAnimatedSinceResize && (Ei.hasAnimatedSinceResize = !1, this.nodes.forEach(Yh));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: g, layout: w }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const y = this.options.transition || c.getDefaultTransition() || MA, { onLayoutAnimationStart: S, onLayoutAnimationComplete: m } = c.getProps(), h = !this.targetLayout || !Jx(this.targetLayout, w) || g, v = !f && g;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || v || f && (h || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, v);
          const k = {
            ...$d(y, "layout"),
            onPlay: S,
            onComplete: m
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (k.delay = 0, k.type = !1), this.startAnimation(k);
        } else
          f || Yh(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = w;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const i = this.getStack();
      i && i.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, An(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(DA), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && ew(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Gh);
        return;
      }
      this.isUpdating || this.nodes.forEach(PA), this.isUpdating = !1, this.nodes.forEach(EA), this.nodes.forEach(wA), this.nodes.forEach(SA), this.clearAllSnapshots();
      const a = It.now();
      Pe.delta = en(0, 1e3 / 60, a - Pe.timestamp), Pe.timestamp = a, Pe.isProcessing = !0, Dl.update.process(Pe), Dl.preRender.process(Pe), Dl.render.process(Pe), Pe.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, jd.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(CA), this.sharedNodes.forEach(AA);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, oe.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      oe.postRender(() => {
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
      this.layout = this.measure(!1), this.layoutCorrected = ge(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
      const i = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !qx(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      i && (a || $n(this.latestValues) || c) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(i = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return i && (l = this.removeTransform(l)), LA(l), {
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
        return ge();
      const l = a.measureViewportBox();
      if (!(((i = this.scroll) === null || i === void 0 ? void 0 : i.wasRoot) || this.path.some(_A))) {
        const { scroll: c } = this.root;
        c && (Nr(l.x, c.offset.x), Nr(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(i) {
      var a;
      const l = ge();
      if (st(l, i), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u], { scroll: d, options: f } = c;
        c !== this.root && d && f.layoutScroll && (d.wasRoot && st(l, i), Nr(l.x, d.offset.x), Nr(l.y, d.offset.y));
      }
      return l;
    }
    applyTransform(i, a = !1) {
      const l = ge();
      st(l, i);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a && c.options.layoutScroll && c.scroll && c !== c.root && Dr(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), $n(c.latestValues) && Dr(l, c.latestValues);
      }
      return $n(this.latestValues) && Dr(l, this.latestValues), l;
    }
    removeTransform(i) {
      const a = ge();
      st(a, i);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !$n(u.latestValues))
          continue;
        sc(u.latestValues) && u.updateSnapshot();
        const c = ge(), d = u.measurePageBox();
        st(c, d), zh(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return $n(this.latestValues) && zh(a, this.latestValues), a;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Pe.timestamp && this.relativeParent.resolveTargetDelta(!0);
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
        if (this.resolvedRelativeTargetAt = Pe.timestamp, !this.targetDelta && !this.relativeTarget) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ge(), this.relativeTargetOrigin = ge(), Uo(this.relativeTargetOrigin, this.layout.layoutBox, g.layout.layoutBox), st(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = ge(), this.targetWithTransforms = ge()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), VD(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : st(this.target, this.layout.layoutBox), Kx(this.target, this.targetDelta)) : st(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g && !!g.resumingFrom == !!this.resumingFrom && !g.options.layoutScroll && g.target && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ge(), this.relativeTargetOrigin = ge(), Uo(this.relativeTargetOrigin, this.target, g.target), st(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Ao && Un.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || sc(this.parent.latestValues) || Hx(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var i;
      const a = this.getLead(), l = !!this.resumingFrom || this !== a;
      let u = !0;
      if ((this.isProjectionDirty || !((i = this.parent) === null || i === void 0) && i.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === Pe.timestamp && (u = !1), u)
        return;
      const { layout: c, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || d))
        return;
      st(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, g = this.treeScale.y;
      GD(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = ge());
      const { target: w } = a;
      if (!w) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Ih(this.prevProjectionDelta.x, this.projectionDelta.x), Ih(this.prevProjectionDelta.y, this.projectionDelta.y)), $o(this.projectionDelta, this.layoutCorrected, w, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== g || !Hh(this.projectionDelta.x, this.prevProjectionDelta.x) || !Hh(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", w)), Ao && Un.recalculatedProjection++;
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
      this.prevProjectionDelta = Tr(), this.projectionDelta = Tr(), this.projectionDeltaWithTransform = Tr();
    }
    setAnimationOrigin(i, a = !1) {
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, d = Tr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const f = ge(), g = l ? l.source : void 0, w = this.layout ? this.layout.source : void 0, y = g !== w, S = this.getStack(), m = !S || S.members.length <= 1, h = !!(y && !m && this.options.crossfade === !0 && !this.path.some(jA));
      this.animationProgress = 0;
      let v;
      this.mixTargetDelta = (k) => {
        const b = k / 1e3;
        Xh(d.x, i.x, b), Xh(d.y, i.y, b), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Uo(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), RA(this.relativeTarget, this.relativeTargetOrigin, f, b), v && mA(this.relativeTarget, v) && (this.isProjectionDirty = !1), v || (v = ge()), st(v, this.relativeTarget)), y && (this.animationValues = c, uA(c, u, this.latestValues, b, h, m)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = b;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(i) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (An(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = oe.update(() => {
        Ei.hasAnimatedSinceResize = !0, this.currentAnimation = rA(0, Kh, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Kh), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = i;
      if (!(!a || !l || !u)) {
        if (this !== i && this.layout && u && nw(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || ge();
          const d = nt(this.layout.layoutBox.x);
          l.x.min = i.target.x.min, l.x.max = l.x.min + d;
          const f = nt(this.layout.layoutBox.y);
          l.y.min = i.target.y.min, l.y.max = l.y.min + f;
        }
        st(a, l), Dr(a, c), $o(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(i, a) {
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new gA()), this.sharedNodes.get(i).add(a);
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
      for (let c = 0; c < Vl.length; c++)
        Fl(`rotate${Vl[c]}`, i, u, this.animationValues), Fl(`skew${Vl[c]}`, i, u, this.animationValues);
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
        return vA;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = Ci(i == null ? void 0 : i.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const y = {};
        return this.options.layoutId && (y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, y.pointerEvents = Ci(i == null ? void 0 : i.pointerEvents) || ""), this.hasProjected && !$n(this.latestValues) && (y.transform = c ? c({}, "") : "none", this.hasProjected = !1), y;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), u.transform = yA(this.projectionDeltaWithTransform, this.treeScale, f), c && (u.transform = c(f, u.transform));
      const { x: g, y: w } = this.projectionDelta;
      u.transformOrigin = `${g.origin * 100}% ${w.origin * 100}% 0`, d.animationValues ? u.opacity = d === this ? (l = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const y in oa) {
        if (f[y] === void 0)
          continue;
        const { correct: S, applyTo: m } = oa[y], h = u.transform === "none" ? f[y] : S(f[y], d);
        if (m) {
          const v = m.length;
          for (let k = 0; k < v; k++)
            u[m[k]] = h;
        } else
          u[y] = h;
      }
      return this.options.layoutId && (u.pointerEvents = d === this ? Ci(i == null ? void 0 : i.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((i) => {
        var a;
        return (a = i.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(Gh), this.root.sharedNodes.clear();
    }
  };
}
function wA(e) {
  e.updateLayout();
}
function SA(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: s } = e.options, i = n.source !== e.layout.source;
    s === "size" ? it((d) => {
      const f = i ? n.measuredBox[d] : n.layoutBox[d], g = nt(f);
      f.min = r[d].min, f.max = f.min + g;
    }) : nw(s, n.layoutBox, r) && it((d) => {
      const f = i ? n.measuredBox[d] : n.layoutBox[d], g = nt(r[d]);
      f.max = f.min + g, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + g);
    });
    const a = Tr();
    $o(a, r, n.layoutBox);
    const l = Tr();
    i ? $o(l, e.applyTransform(o, !0), n.measuredBox) : $o(l, r, n.layoutBox);
    const u = !qx(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: g } = d;
        if (f && g) {
          const w = ge();
          Uo(w, n.layoutBox, f.layoutBox);
          const y = ge();
          Uo(y, r, g.layoutBox), Jx(w, y) || (c = !0), d.options.layoutRoot && (e.relativeTarget = y, e.relativeTargetOrigin = w, e.relativeParent = d);
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
function kA(e) {
  Ao && Un.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function bA(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function CA(e) {
  e.clearSnapshot();
}
function Gh(e) {
  e.clearMeasurements();
}
function PA(e) {
  e.isLayoutDirty = !1;
}
function EA(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Yh(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function TA(e) {
  e.resolveTargetDelta();
}
function NA(e) {
  e.calcProjection();
}
function DA(e) {
  e.resetSkewAndRotation();
}
function AA(e) {
  e.removeLeadSnapshot();
}
function Xh(e, t, n) {
  e.translate = le(t.translate, 0, n), e.scale = le(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Qh(e, t, n, r) {
  e.min = le(t.min, n.min, r), e.max = le(t.max, n.max, r);
}
function RA(e, t, n, r) {
  Qh(e.x, t.x, n.x, r), Qh(e.y, t.y, n.y, r);
}
function jA(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const MA = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Zh = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), qh = Zh("applewebkit/") && !Zh("chrome/") ? Math.round : et;
function Jh(e) {
  e.min = qh(e.min), e.max = qh(e.max);
}
function LA(e) {
  Jh(e.x), Jh(e.y);
}
function nw(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !ID(Wh(t), Wh(n), 0.2);
}
function _A(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const OA = tw({
  attachResizeListener: (e, t) => ms(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), zl = {
  current: void 0
}, rw = tw({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!zl.current) {
      const e = new OA({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), zl.current = e;
    }
    return zl.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), IA = {
  pan: {
    Feature: JD
  },
  drag: {
    Feature: qD,
    ProjectionNode: rw,
    MeasureLayout: Xx
  }
};
function em(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const o = "onHover" + n, s = r[o];
  s && oe.postRender(() => s(t, Ns(t)));
}
class VA extends In {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = IT(t, (n) => (em(this.node, n, "Start"), (r) => em(this.node, r, "End"))));
  }
  unmount() {
  }
}
class FA extends In {
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
    this.unmount = Ts(ms(this.node.current, "focus", () => this.onFocus()), ms(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function tm(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const o = "onTap" + (n === "End" ? "" : n), s = r[o];
  s && oe.postRender(() => s(t, Ns(t)));
}
class zA extends In {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = BT(t, (n) => (tm(this.node, n, "Start"), (r, { success: o }) => tm(this.node, r, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const ac = /* @__PURE__ */ new WeakMap(), Bl = /* @__PURE__ */ new WeakMap(), BA = (e) => {
  const t = ac.get(e.target);
  t && t(e);
}, $A = (e) => {
  e.forEach(BA);
};
function UA({ root: e, ...t }) {
  const n = e || document;
  Bl.has(n) || Bl.set(n, {});
  const r = Bl.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver($A, { root: e, ...t })), r[o];
}
function WA(e, t, n) {
  const r = UA(t);
  return ac.set(e, n), r.observe(e), () => {
    ac.delete(e), r.unobserve(e);
  };
}
const HA = {
  some: 0,
  all: 1
};
class KA extends In {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: s } = t, i = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : HA[o]
    }, a = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, s && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(), f = u ? c : d;
      f && f(l);
    };
    return WA(this.node.current, i, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(GA(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function GA({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const YA = {
  inView: {
    Feature: KA
  },
  tap: {
    Feature: zA
  },
  focus: {
    Feature: FA
  },
  hover: {
    Feature: VA
  }
}, XA = {
  layout: {
    ProjectionNode: rw,
    MeasureLayout: Xx
  }
}, lc = { current: null }, ow = { current: !1 };
function QA() {
  if (ow.current = !0, !!Td)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => lc.current = e.matches;
      e.addListener(t), t();
    } else
      lc.current = !1;
}
const ZA = [...Dx, Me, Rn], qA = (e) => ZA.find(Nx(e)), nm = /* @__PURE__ */ new WeakMap();
function JA(e, t, n) {
  for (const r in t) {
    const o = t[r], s = n[r];
    if (_e(o))
      e.addValue(r, o);
    else if (_e(s))
      e.addValue(r, ps(o, { owner: e }));
    else if (s !== o)
      if (e.hasValue(r)) {
        const i = e.getValue(r);
        i.liveStyle === !0 ? i.jump(o) : i.hasAnimated || i.set(o);
      } else {
        const i = e.getStaticValue(r);
        e.addValue(r, ps(i !== void 0 ? i : o, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const rm = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class eR {
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
      const g = It.now();
      this.renderScheduledAt < g && (this.renderScheduledAt = g, oe.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: u, onUpdate: c } = i;
    this.onUpdate = c, this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.blockInitialAnimation = !!s, this.isControllingVariants = Ba(n), this.isVariantNode = I0(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const g in f) {
      const w = f[g];
      l[g] !== void 0 && _e(w) && w.set(l[g], !1);
    }
  }
  mount(t) {
    this.current = t, nm.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), ow.current || QA(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : lc.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    nm.delete(this.current), this.projection && this.projection.unmount(), An(this.notifyUpdate), An(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    const r = lr.has(t), o = n.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && oe.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
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
    for (t in Xr) {
      const n = Xr[t];
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ge();
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
    for (let r = 0; r < rm.length; r++) {
      const o = rm[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const s = "on" + o, i = t[s];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = JA(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
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
    return r === void 0 && n !== void 0 && (r = ps(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var r;
    let o = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
    return o != null && (typeof o == "string" && (Ex(o) || yx(o)) ? o = parseFloat(o) : !qA(o) && Rn.test(n) && (o = bx(t, n)), this.setBaseTarget(t, _e(o) ? o.get() : o)), _e(o) ? o.get() : o;
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
    return s !== void 0 && !_e(s) ? s : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Yd()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class sw extends eR {
  constructor() {
    super(...arguments), this.KeyframeResolver = Ax;
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
    _e(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function tR(e) {
  return window.getComputedStyle(e);
}
class nR extends sw {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = K0;
  }
  readValueFromInstance(t, n) {
    if (lr.has(n)) {
      const r = Jd(n);
      return r && r.default || 0;
    } else {
      const r = tR(t), o = (U0(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Gx(t, n);
  }
  build(t, n, r) {
    Id(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Bd(t, n, r);
  }
}
class rR extends sw {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ge;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (lr.has(n)) {
      const r = Jd(n);
      return r && r.default || 0;
    }
    return n = G0.has(n) ? n : Rd(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Q0(t, n, r);
  }
  build(t, n, r) {
    Vd(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    Y0(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = zd(t.tagName), super.mount(t);
  }
}
const oR = (e, t) => Md(e) ? new rR(t) : new nR(t, {
  allowProjection: e !== x.Fragment
}), sR = /* @__PURE__ */ AT({
  ...ND,
  ...YA,
  ...IA,
  ...XA
}, oR), li = /* @__PURE__ */ HE(sR);
function iR({ events: e, eventMetadata: t, onDateClick: n, onEventClick: r }) {
  const [o, s] = x.useState(/* @__PURE__ */ new Date()), [i, a] = x.useState(0), [l, u] = x.useState(null), c = (C, P) => {
    const E = new Date(P, C + 1, 0).getDate();
    return Array.from({ length: E }, (D, N) => ({ day: N + 1 }));
  }, d = (C, P) => e.filter((E) => {
    const D = new Date(E.startDate);
    return D.getDate() === C && D.getMonth() === P.getMonth() && D.getFullYear() === P.getFullYear();
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
    }, E = C.reduce((D, N) => {
      const M = t[N.id], R = (M == null ? void 0 : M.category) || "other";
      return D[R] || (D[R] = []), D[R].push(N), D;
    }, {});
    return /* @__PURE__ */ p.jsx("div", { className: "flex flex-wrap gap-1", children: Object.entries(E).map(([D, N]) => {
      const M = P[D] || "bg-gray-500";
      return /* @__PURE__ */ p.jsx(
        "div",
        {
          className: `${M} text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-medium shadow-sm`,
          title: `${N.length} ${D} event${N.length > 1 ? "s" : ""}: ${N.map((R) => R.title).join(", ")}`,
          children: N.length
        },
        D
      );
    }) });
  };
  return /* @__PURE__ */ p.jsxs("div", { children: [
    /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4", children: [
      /* @__PURE__ */ p.jsxs(
        li.h2,
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
        /* @__PURE__ */ p.jsxs(Cn, { variant: "outline", onClick: g, className: "gap-2", children: [
          /* @__PURE__ */ p.jsx(Ov, { className: "h-4 w-4" }),
          "Prev"
        ] }),
        /* @__PURE__ */ p.jsxs(Cn, { variant: "outline", onClick: w, className: "gap-2", children: [
          "Next",
          /* @__PURE__ */ p.jsx(Iv, { className: "h-4 w-4" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ p.jsx(Up, { initial: !1, custom: i, mode: "wait", children: /* @__PURE__ */ p.jsxs(
      li.div,
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
            const E = d(C.day, o), D = (/* @__PURE__ */ new Date()).getDate() === C.day && (/* @__PURE__ */ new Date()).getMonth() === o.getMonth() && (/* @__PURE__ */ new Date()).getFullYear() === o.getFullYear(), M = (h + C.day - 1) % 7 >= 5;
            return /* @__PURE__ */ p.jsxs(
              li.div,
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
                    od,
                    {
                      className: `shadow-md overflow-hidden relative flex p-4 border h-full transition-shadow day-card ${E.length > 0 ? "cursor-pointer hover:shadow-lg" : "cursor-default"}`,
                      onClick: E.length > 0 ? () => n == null ? void 0 : n(new Date(o.getFullYear(), o.getMonth(), C.day)) : void 0,
                      children: [
                        /* @__PURE__ */ p.jsx("div", { className: `font-semibold relative text-3xl mb-1 ${E.length > 0 ? "text-gray-900 dark:text-gray-100" : "text-gray-500 dark:text-gray-400"} ${D ? "text-secondary-500" : ""}`, children: C.day }),
                        /* @__PURE__ */ p.jsx("div", { className: "flex-grow flex flex-col gap-2 w-full", children: /* @__PURE__ */ p.jsx(Up, { mode: "wait", children: (E == null ? void 0 : E.length) > 0 && /* @__PURE__ */ p.jsx(
                          li.div,
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
                      className: `absolute top-full z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-3 w-80 ${M ? "right-0" : "left-0"}`,
                      onMouseEnter: () => u(C.day),
                      onMouseLeave: () => u(null),
                      children: [
                        /* @__PURE__ */ p.jsxs("div", { className: "text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2", children: [
                          E.length,
                          " event",
                          E.length > 1 ? "s" : ""
                        ] }),
                        /* @__PURE__ */ p.jsx("div", { className: "space-y-2", children: E.map((R) => {
                          const z = t[R.id], K = z ? {
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
                                /* @__PURE__ */ p.jsx("div", { className: `w-2 h-2 rounded-full ${K} flex-shrink-0 mt-1.5` }),
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
function aR({ events: e, eventMetadata: t, onEventClick: n }) {
  const [r, o] = we.useState(/* @__PURE__ */ new Date()), i = ((d) => {
    const f = new Date(d);
    return f.setDate(d.getDate() - d.getDay()), Array.from({ length: 7 }, (g, w) => {
      const y = new Date(f);
      return y.setDate(f.getDate() + w), y;
    });
  })(r), a = Array.from({ length: 24 }, (d, f) => f), l = (d) => e.filter((f) => f.startDate.toDateString() === d.toDateString()), u = (d) => {
    const f = new Date(r);
    f.setDate(r.getDate() + (d === "next" ? 7 : -7)), o(f);
  }, c = (d, f, g) => {
    const w = d.startDate.getHours(), y = d.startDate.getMinutes(), S = d.endDate ? d.endDate.getHours() : w + 1, m = d.endDate ? d.endDate.getMinutes() : 0, h = w + y / 60, v = S + m / 60, k = v - h, b = f.filter((N) => {
      if (N.id === d.id) return !0;
      if (N.startDate.toDateString() !== d.startDate.toDateString())
        return !1;
      const M = N.startDate.getHours() + N.startDate.getMinutes() / 60, R = (N.endDate ? N.endDate.getHours() : N.startDate.getHours() + 1) + (N.endDate ? N.endDate.getMinutes() / 60 : 0);
      return h < R && v > M;
    }), C = b.length, P = b.findIndex((N) => N.id === d.id), E = C > 1 ? 100 / C : 100, D = C > 1 ? P * E : 0;
    return {
      top: `${h * 80}px`,
      // 80px per hour for better readability
      height: `${k * 80}px`,
      // Accurate height based on actual duration
      left: `${D}%`,
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
          children: /* @__PURE__ */ p.jsx(Fv, { className: "h-5 w-5" })
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
          children: /* @__PURE__ */ p.jsx(zv, { className: "h-5 w-5" })
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
function lR({ events: e, eventMetadata: t, initialDate: n, onEventClick: r }) {
  const [o, s] = we.useState(n || /* @__PURE__ */ new Date());
  we.useEffect(() => {
    n && s(n);
  }, [n]);
  const i = Array.from({ length: 24 }, (f, g) => g), a = () => e.filter((f) => f.startDate.toDateString() === o.toDateString()), l = (f) => {
    const g = new Date(o);
    g.setDate(o.getDate() + (f === "next" ? 1 : -1)), s(g);
  }, u = (f, g, w) => {
    const y = f.startDate.getHours(), S = f.startDate.getMinutes(), m = f.endDate ? f.endDate.getHours() : y + 1, h = f.endDate ? f.endDate.getMinutes() : 0, v = y + S / 60, k = m + h / 60, b = k - v, C = g.filter((M) => {
      if (M.id === f.id) return !0;
      const R = M.startDate.getHours() + M.startDate.getMinutes() / 60, z = (M.endDate ? M.endDate.getHours() : M.startDate.getHours() + 1) + (M.endDate ? M.endDate.getMinutes() / 60 : 0);
      return v < z && k > R;
    }), P = C.length, E = C.findIndex((M) => M.id === f.id), D = P > 1 ? 100 / P : 100, N = P > 1 ? E * D : 0;
    return {
      top: `${v * 80}px`,
      // 80px per hour for day view
      height: `${b * 80}px`,
      // Accurate height based on actual duration
      left: `${N}%`,
      width: `${D}%`
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
          children: /* @__PURE__ */ p.jsx(Fv, { className: "h-5 w-5" })
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
          children: /* @__PURE__ */ p.jsx(zv, { className: "h-5 w-5" })
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
                    /* @__PURE__ */ p.jsx(ks, { className: "h-2.5 w-2.5" }),
                    /* @__PURE__ */ p.jsx("span", { className: "truncate", children: w.location })
                  ] }),
                  w.organization && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ p.jsx(BP, { className: "h-2.5 w-2.5" }),
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
function uR({ events: e, eventMetadata: t, onEventClick: n }) {
  const [r, o] = we.useState(/* @__PURE__ */ new Date()), [s, i] = we.useState(/* @__PURE__ */ new Date()), a = () => {
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
  return /* @__PURE__ */ p.jsxs(od, { className: "w-full py-4 mobile-calendar", children: [
    /* @__PURE__ */ p.jsxs(Cy, { className: "px-4", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ p.jsxs(
          Cn,
          {
            variant: "outline",
            size: "sm",
            onClick: a,
            children: [
              /* @__PURE__ */ p.jsx(Ov, { className: "h-4 w-4" }),
              "Prev"
            ]
          }
        ),
        /* @__PURE__ */ p.jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100", children: s.toLocaleDateString("en-US", { month: "long", year: "numeric" }) }),
        /* @__PURE__ */ p.jsxs(
          Cn,
          {
            variant: "outline",
            size: "sm",
            onClick: l,
            children: [
              "Next",
              /* @__PURE__ */ p.jsx(Iv, { className: "h-4 w-4" })
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
    /* @__PURE__ */ p.jsxs(hk, { className: "flex flex-col items-start gap-3 border-t px-4 !pt-4", children: [
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
function cR({ events: e, eventMetadata: t, onEventClick: n }) {
  const r = (i) => i.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), o = [...e].sort((i, a) => i.startDate.getTime() - a.startDate.getTime()), s = o.reduce((i, a) => {
    const l = a.startDate.toDateString();
    return i[l] || (i[l] = []), i[l].push(a), i;
  }, {});
  return /* @__PURE__ */ p.jsx("div", { className: "space-y-6", children: o.length === 0 ? /* @__PURE__ */ p.jsxs("div", { className: "text-center py-12 text-gray-500 dark:text-gray-400", children: [
    /* @__PURE__ */ p.jsx(fn, { className: "mx-auto h-12 w-12 mb-4 opacity-50" }),
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
                      /* @__PURE__ */ p.jsx(_a, { className: "h-3 w-3" }),
                      /* @__PURE__ */ p.jsxs("span", { children: [
                        r(f.startDate),
                        " - ",
                        r(f.endDate)
                      ] })
                    ] }),
                    (g == null ? void 0 : g.location) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                      /* @__PURE__ */ p.jsx(ks, { className: "h-3 w-3" }),
                      /* @__PURE__ */ p.jsx("span", { children: g.location })
                    ] }),
                    (g == null ? void 0 : g.organization) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                      /* @__PURE__ */ p.jsx(La, { className: "h-3 w-3" }),
                      /* @__PURE__ */ p.jsx("span", { children: g.organization })
                    ] })
                  ] })
                ] }),
                g && /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400 flex-shrink-0 ml-2", children: g.cost })
              ] }),
              (g == null ? void 0 : g.registrationRequired) && /* @__PURE__ */ p.jsx("div", { className: "mt-2", children: /* @__PURE__ */ p.jsx(Gr, { variant: "outline", size: "sm", children: "Registration Required" }) })
            ]
          },
          f.id
        );
      }) })
    ] }, i);
  }) });
}
function dR({ events: e, eventMetadata: t, onEventClick: n }) {
  const r = (i) => i.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), o = [...e].sort((i, a) => i.startDate.getTime() - a.startDate.getTime()), s = o.reduce((i, a) => {
    const l = a.startDate.toDateString();
    return i[l] || (i[l] = []), i[l].push(a), i;
  }, {});
  return /* @__PURE__ */ p.jsx("div", { className: "space-y-6", children: o.length === 0 ? /* @__PURE__ */ p.jsxs("div", { className: "text-center py-12 text-gray-500 dark:text-gray-400", children: [
    /* @__PURE__ */ p.jsx(fn, { className: "mx-auto h-12 w-12 mb-4 opacity-50" }),
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
                      /* @__PURE__ */ p.jsx(_a, { className: "h-3 w-3" }),
                      /* @__PURE__ */ p.jsxs("span", { children: [
                        r(f.startDate),
                        " - ",
                        r(f.endDate)
                      ] })
                    ] }),
                    (g == null ? void 0 : g.location) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                      /* @__PURE__ */ p.jsx(ks, { className: "h-3 w-3" }),
                      /* @__PURE__ */ p.jsx("span", { children: g.location })
                    ] }),
                    (g == null ? void 0 : g.organization) && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1 text-muted-foreground dark:text-gray-400 text-xs", children: [
                      /* @__PURE__ */ p.jsx(La, { className: "h-3 w-3" }),
                      /* @__PURE__ */ p.jsx("span", { children: g.organization })
                    ] })
                  ] })
                ] }),
                g && /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400 flex-shrink-0 ml-2", children: g.cost })
              ] }),
              (g == null ? void 0 : g.registrationRequired) && /* @__PURE__ */ p.jsx("div", { className: "mt-2", children: /* @__PURE__ */ p.jsx(Gr, { variant: "outline", size: "sm", children: "Registration Required" }) })
            ]
          },
          f.id
        );
      }) })
    ] }, i);
  }) });
}
function fR() {
  const [e, t] = x.useState("month"), [n, r] = x.useState(/* @__PURE__ */ new Date()), [o, s] = x.useState(null), [i, a] = x.useState(!1);
  we.useEffect(() => {
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
  } = o0({
    per_page: 1e3
    // Get all events
  }), { organizations: h } = vE(), v = we.useMemo(() => {
    let C = w;
    if (l !== "all" && (C = C.filter((P) => {
      var D;
      const E = y[P.id];
      return (D = E == null ? void 0 : E.categories) == null ? void 0 : D.some((N) => N.slug === l);
    })), c !== "all" && (C = C.filter((P) => {
      const E = y[P.id], D = h.find((N) => N.id.toString() === c);
      return D && (E == null ? void 0 : E.organization) === D.title.rendered;
    })), f) {
      const P = f.toLowerCase();
      C = C.filter((E) => {
        var N, M, R;
        const D = y[E.id];
        return E.title.toLowerCase().includes(P) || ((N = D == null ? void 0 : D.description) == null ? void 0 : N.toLowerCase().includes(P)) || ((M = D == null ? void 0 : D.location) == null ? void 0 : M.toLowerCase().includes(P)) || ((R = D == null ? void 0 : D.organization) == null ? void 0 : R.toLowerCase().includes(P));
      });
    }
    return C;
  }, [w, y, l, c, f, h]), k = (C) => {
    r(C), t("day");
  }, b = (C) => {
    s(C), a(!0);
  };
  return S ? /* @__PURE__ */ p.jsx("div", { className: "w-full flex items-center justify-center py-12", children: /* @__PURE__ */ p.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ p.jsx(Bv, { className: "h-8 w-8 animate-spin mx-auto mb-4" }),
    /* @__PURE__ */ p.jsx("p", { className: "text-gray-600", children: "Loading events..." })
  ] }) }) : m ? /* @__PURE__ */ p.jsx("div", { className: "w-full py-12", children: /* @__PURE__ */ p.jsx(od, { className: "max-w-md mx-auto", children: /* @__PURE__ */ p.jsxs(Cy, { className: "pt-6 text-center", children: [
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
    /* @__PURE__ */ p.jsx("div", { className: "bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm unbc-calendar-view", children: /* @__PURE__ */ p.jsxs(mE, { value: e, onValueChange: t, className: "w-full", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "hidden md:block p-6 pb-0", children: [
        /* @__PURE__ */ p.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ p.jsxs(Bp, { className: "h-9 bg-gray-100 dark:bg-gray-700 p-1", children: [
          /* @__PURE__ */ p.jsxs(Vn, { value: "day", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(fn, { className: "h-3 w-3" }),
            "Day"
          ] }),
          /* @__PURE__ */ p.jsxs(Vn, { value: "week", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(fn, { className: "h-3 w-3" }),
            "Week"
          ] }),
          /* @__PURE__ */ p.jsxs(Vn, { value: "month", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(fn, { className: "h-3 w-3" }),
            "Month"
          ] }),
          /* @__PURE__ */ p.jsxs(Vn, { value: "list", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(zp, { className: "h-3 w-3" }),
            "List"
          ] })
        ] }) }),
        /* @__PURE__ */ p.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-3", children: [
          /* @__PURE__ */ p.jsxs(qs, { onValueChange: u, children: [
            /* @__PURE__ */ p.jsx(ei, { className: "w-40 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", children: /* @__PURE__ */ p.jsx(Js, { placeholder: "All Categories" }) }),
            /* @__PURE__ */ p.jsxs(ti, { className: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600", children: [
              /* @__PURE__ */ p.jsx(de, { value: "all", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "All Categories" }),
              /* @__PURE__ */ p.jsx(de, { value: "academic", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Academic" }),
              /* @__PURE__ */ p.jsx(de, { value: "arts", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Arts & Creative" }),
              /* @__PURE__ */ p.jsx(de, { value: "cultural", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Cultural" }),
              /* @__PURE__ */ p.jsx(de, { value: "professional", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Professional" }),
              /* @__PURE__ */ p.jsx(de, { value: "social", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Social" }),
              /* @__PURE__ */ p.jsx(de, { value: "sports", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Sports & Recreation" }),
              /* @__PURE__ */ p.jsx(de, { value: "volunteer", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Volunteer" }),
              /* @__PURE__ */ p.jsx(de, { value: "wellness", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Health & Wellness" })
            ] })
          ] }),
          /* @__PURE__ */ p.jsxs(qs, { value: c, onValueChange: d, children: [
            /* @__PURE__ */ p.jsx(ei, { className: "w-44 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 [&>span]:truncate [&>span]:block", children: /* @__PURE__ */ p.jsx(Js, { placeholder: "All Organizations" }) }),
            /* @__PURE__ */ p.jsxs(ti, { className: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 max-h-[200px] overflow-y-auto", children: [
              /* @__PURE__ */ p.jsx(de, { value: "all", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "All Organizations" }),
              h.map((C) => /* @__PURE__ */ p.jsx(
                de,
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
            Hu,
            {
              placeholder: "Search events...",
              onChange: (C) => g(C.target.value),
              className: "w-40 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "md:hidden", children: [
        /* @__PURE__ */ p.jsx("div", { className: "p-6 pb-0 flex justify-center", children: /* @__PURE__ */ p.jsxs(Bp, { className: "h-9 bg-gray-100 dark:bg-gray-700 p-1", children: [
          /* @__PURE__ */ p.jsxs(Vn, { value: "day", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(fn, { className: "h-3 w-3" }),
            "Day"
          ] }),
          /* @__PURE__ */ p.jsxs(Vn, { value: "month", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(fn, { className: "h-3 w-3" }),
            "Month"
          ] }),
          /* @__PURE__ */ p.jsxs(Vn, { value: "list", className: "text-xs px-3 py-1 flex items-center gap-1 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600 data-[state=active]:shadow-sm dark:text-gray-300", children: [
            /* @__PURE__ */ p.jsx(zp, { className: "h-3 w-3" }),
            "List"
          ] })
        ] }) }),
        /* @__PURE__ */ p.jsxs("div", { className: "p-6 pt-4 space-y-3", children: [
          /* @__PURE__ */ p.jsxs(qs, { onValueChange: u, children: [
            /* @__PURE__ */ p.jsx(ei, { className: "border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", children: /* @__PURE__ */ p.jsx(Js, { placeholder: "All Categories" }) }),
            /* @__PURE__ */ p.jsxs(ti, { className: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600", children: [
              /* @__PURE__ */ p.jsx(de, { value: "all", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "All Categories" }),
              /* @__PURE__ */ p.jsx(de, { value: "academic", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Academic" }),
              /* @__PURE__ */ p.jsx(de, { value: "arts", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Arts & Creative" }),
              /* @__PURE__ */ p.jsx(de, { value: "cultural", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Cultural" }),
              /* @__PURE__ */ p.jsx(de, { value: "professional", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Professional" }),
              /* @__PURE__ */ p.jsx(de, { value: "social", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Social" }),
              /* @__PURE__ */ p.jsx(de, { value: "sports", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Sports & Recreation" }),
              /* @__PURE__ */ p.jsx(de, { value: "volunteer", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Volunteer" }),
              /* @__PURE__ */ p.jsx(de, { value: "wellness", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "Health & Wellness" })
            ] })
          ] }),
          /* @__PURE__ */ p.jsxs(qs, { value: c, onValueChange: d, children: [
            /* @__PURE__ */ p.jsx(ei, { className: "border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100", children: /* @__PURE__ */ p.jsx(Js, { placeholder: "All Organizations", className: "truncate" }) }),
            /* @__PURE__ */ p.jsxs(ti, { className: "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 max-h-[200px] overflow-y-auto", children: [
              /* @__PURE__ */ p.jsx(de, { value: "all", className: "text-gray-900 dark:text-gray-100 focus:bg-gray-100 dark:focus:bg-gray-600", children: "All Organizations" }),
              h.map((C) => /* @__PURE__ */ p.jsx(
                de,
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
            Hu,
            {
              placeholder: "Search events...",
              onChange: (C) => g(C.target.value),
              className: "border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ p.jsxs(ri, { value: "month", className: "p-6 pt-4", children: [
        /* @__PURE__ */ p.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ p.jsx(
          iR,
          {
            events: v,
            eventMetadata: y,
            onDateClick: k,
            onEventClick: b
          }
        ) }),
        /* @__PURE__ */ p.jsx("div", { className: "block md:hidden mobile-calendar", children: /* @__PURE__ */ p.jsx(
          uR,
          {
            events: v,
            eventMetadata: y,
            onEventClick: b
          }
        ) })
      ] }),
      /* @__PURE__ */ p.jsx(ri, { value: "week", className: "p-6 pt-4", children: /* @__PURE__ */ p.jsx(
        aR,
        {
          events: v,
          eventMetadata: y,
          onEventClick: b
        }
      ) }),
      /* @__PURE__ */ p.jsx(ri, { value: "day", className: "p-6 pt-4", children: /* @__PURE__ */ p.jsx(
        lR,
        {
          events: v,
          eventMetadata: y,
          initialDate: n,
          onEventClick: b
        }
      ) }),
      /* @__PURE__ */ p.jsxs(ri, { value: "list", className: "p-6 pt-4", children: [
        /* @__PURE__ */ p.jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ p.jsx(cR, { events: v, eventMetadata: y, onEventClick: b }) }),
        /* @__PURE__ */ p.jsx("div", { className: "block md:hidden", children: /* @__PURE__ */ p.jsx(dR, { events: v, eventMetadata: y, onEventClick: b }) })
      ] })
    ] }) }),
    /* @__PURE__ */ p.jsx(
      A0,
      {
        event: o,
        eventMetadata: y,
        open: i,
        onOpenChange: a
      }
    )
  ] });
}
function iw({
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
  }), { filteredEvents: l, eventsByDate: u } = we.useMemo(() => {
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
    /* @__PURE__ */ p.jsx(fn, { className: "mx-auto h-8 w-8 mb-3 opacity-50" }),
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
                      /* @__PURE__ */ p.jsx(_a, { className: "h-3 w-3" }),
                      /* @__PURE__ */ p.jsxs("span", { children: [
                        a(S.startDate),
                        " - ",
                        a(S.endDate)
                      ] })
                    ] }) }),
                    m && /* @__PURE__ */ p.jsxs("div", { className: "space-y-1 text-sm text-gray-600 dark:text-gray-400", children: [
                      m.location && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ p.jsx(ks, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: m.location })
                      ] }),
                      !r && m.organization && /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ p.jsx(La, { className: "h-3 w-3" }),
                        /* @__PURE__ */ p.jsx("span", { children: m.organization })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col items-end gap-2 flex-shrink-0 ml-4", children: [
                    (m == null ? void 0 : m.cost) && /* @__PURE__ */ p.jsx("div", { className: "text-sm font-semibold text-green-600 dark:text-green-400", children: m.cost }),
                    (m == null ? void 0 : m.category) && /* @__PURE__ */ p.jsx(Gr, { variant: "secondary", size: "sm", className: "text-xs", children: m.category.charAt(0).toUpperCase() + m.category.slice(1) })
                  ] })
                ] }),
                (m == null ? void 0 : m.registrationRequired) && /* @__PURE__ */ p.jsx("div", { className: "mt-3 pt-2 border-t border-gray-100 dark:border-gray-700", children: /* @__PURE__ */ p.jsx(Gr, { variant: "outline", size: "sm", children: "📝 Registration Required" }) })
              ]
            },
            S.id
          );
        }) })
      ] }, c);
    })
  ] });
}
function pR({
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
  } = o0({
    per_page: 1e3
    // Get all events to filter client-side
  }), f = (g) => {
    s(g), a(!0);
  };
  return c ? /* @__PURE__ */ p.jsx("div", { className: "w-full flex items-center justify-center py-8", children: /* @__PURE__ */ p.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ p.jsx(Bv, { className: "h-6 w-6 animate-spin mx-auto mb-2" }),
    /* @__PURE__ */ p.jsx("p", { className: "text-gray-600 text-sm", children: "Loading events..." })
  ] }) }) : d ? /* @__PURE__ */ p.jsx("div", { className: "w-full py-8", children: /* @__PURE__ */ p.jsx("div", { className: "max-w-md mx-auto bg-red-50 border border-red-200 rounded-lg p-4", children: /* @__PURE__ */ p.jsxs("p", { className: "text-red-600 text-sm", children: [
    "Error loading events: ",
    d
  ] }) }) }) : /* @__PURE__ */ p.jsxs("div", { className: "unbc-organization-events", children: [
    /* @__PURE__ */ p.jsx(
      iw,
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
      A0,
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
  const n = Ea(t);
  t.dataset.view, t.dataset.categoryFilter, t.dataset.organizationFilter, n.render(
    /* @__PURE__ */ p.jsx(we.StrictMode, { children: /* @__PURE__ */ p.jsx(fR, {}) })
  );
};
window.renderUNBCEventsList = function(e) {
  const t = document.getElementById(e);
  if (!t) {
    console.error("Events list container not found:", e);
    return;
  }
  const n = Ea(t), r = t.dataset.organizationId || "", o = t.dataset.organizationName || "", s = parseInt(t.dataset.limit) || 5, i = t.dataset.showPast === "true";
  n.render(
    /* @__PURE__ */ p.jsx(we.StrictMode, { children: /* @__PURE__ */ p.jsx(
      hR,
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
  const n = Ea(t), r = t.dataset.organizationId || "", o = t.dataset.organizationName || "", s = parseInt(t.dataset.limit) || 5, i = t.dataset.showPast === "true";
  n.render(
    /* @__PURE__ */ p.jsx(we.StrictMode, { children: /* @__PURE__ */ p.jsx(
      pR,
      {
        organizationId: r,
        organizationName: o,
        limit: s,
        showPastEvents: i
      }
    ) })
  );
};
function hR({ organizationId: e, organizationName: t, limit: n, showPastEvents: r }) {
  return /* @__PURE__ */ p.jsx(
    iw,
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
