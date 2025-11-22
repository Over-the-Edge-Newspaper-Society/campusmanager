function kf(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const l = Object.getOwnPropertyDescriptor(r, o);
          l && Object.defineProperty(e, o, l.get ? l : {
            enumerable: !0,
            get: () => r[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function fu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var pu = { exports: {} }, Uo = {}, mu = { exports: {} }, j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cr = Symbol.for("react.element"), Ef = Symbol.for("react.portal"), Cf = Symbol.for("react.fragment"), Nf = Symbol.for("react.strict_mode"), Df = Symbol.for("react.profiler"), Pf = Symbol.for("react.provider"), _f = Symbol.for("react.context"), Tf = Symbol.for("react.forward_ref"), Mf = Symbol.for("react.suspense"), Rf = Symbol.for("react.memo"), Lf = Symbol.for("react.lazy"), bs = Symbol.iterator;
function Of(e) {
  return e === null || typeof e != "object" ? null : (e = bs && e[bs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var gu = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, hu = Object.assign, vu = {};
function Ln(e, t, n) {
  this.props = e, this.context = t, this.refs = vu, this.updater = n || gu;
}
Ln.prototype.isReactComponent = {};
Ln.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ln.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function yu() {
}
yu.prototype = Ln.prototype;
function $i(e, t, n) {
  this.props = e, this.context = t, this.refs = vu, this.updater = n || gu;
}
var Ui = $i.prototype = new yu();
Ui.constructor = $i;
hu(Ui, Ln.prototype);
Ui.isPureReactComponent = !0;
var $s = Array.isArray, wu = Object.prototype.hasOwnProperty, Wi = { current: null }, xu = { key: !0, ref: !0, __self: !0, __source: !0 };
function Su(e, t, n) {
  var r, o = {}, l = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t) wu.call(t, r) && !xu.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in s = e.defaultProps, s) o[r] === void 0 && (o[r] = s[r]);
  return { $$typeof: Cr, type: e, key: l, ref: i, props: o, _owner: Wi.current };
}
function zf(e, t) {
  return { $$typeof: Cr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Bi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Cr;
}
function jf(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Us = /\/+/g;
function sl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? jf("" + e.key) : t.toString(36);
}
function eo(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else switch (l) {
    case "string":
    case "number":
      i = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Cr:
        case Ef:
          i = !0;
      }
  }
  if (i) return i = e, o = o(i), e = r === "" ? "." + sl(i, 0) : r, $s(o) ? (n = "", e != null && (n = e.replace(Us, "$&/") + "/"), eo(o, t, n, "", function(u) {
    return u;
  })) : o != null && (Bi(o) && (o = zf(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(Us, "$&/") + "/") + e)), t.push(o)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", $s(e)) for (var s = 0; s < e.length; s++) {
    l = e[s];
    var a = r + sl(l, s);
    i += eo(l, t, n, a, o);
  }
  else if (a = Of(e), typeof a == "function") for (e = a.call(e), s = 0; !(l = e.next()).done; ) l = l.value, a = r + sl(l, s++), i += eo(l, t, n, a, o);
  else if (l === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function Rr(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return eo(e, r, "", "", function(l) {
    return t.call(n, l, o++);
  }), r;
}
function If(e) {
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
var ye = { current: null }, to = { transition: null }, Af = { ReactCurrentDispatcher: ye, ReactCurrentBatchConfig: to, ReactCurrentOwner: Wi };
function ku() {
  throw Error("act(...) is not supported in production builds of React.");
}
j.Children = { map: Rr, forEach: function(e, t, n) {
  Rr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Rr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Rr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Bi(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
j.Component = Ln;
j.Fragment = Cf;
j.Profiler = Df;
j.PureComponent = $i;
j.StrictMode = Nf;
j.Suspense = Mf;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Af;
j.act = ku;
j.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = hu({}, e.props), o = e.key, l = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (l = t.ref, i = Wi.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (a in t) wu.call(t, a) && !xu.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: Cr, type: e.type, key: o, ref: l, props: r, _owner: i };
};
j.createContext = function(e) {
  return e = { $$typeof: _f, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Pf, _context: e }, e.Consumer = e;
};
j.createElement = Su;
j.createFactory = function(e) {
  var t = Su.bind(null, e);
  return t.type = e, t;
};
j.createRef = function() {
  return { current: null };
};
j.forwardRef = function(e) {
  return { $$typeof: Tf, render: e };
};
j.isValidElement = Bi;
j.lazy = function(e) {
  return { $$typeof: Lf, _payload: { _status: -1, _result: e }, _init: If };
};
j.memo = function(e, t) {
  return { $$typeof: Rf, type: e, compare: t === void 0 ? null : t };
};
j.startTransition = function(e) {
  var t = to.transition;
  to.transition = {};
  try {
    e();
  } finally {
    to.transition = t;
  }
};
j.unstable_act = ku;
j.useCallback = function(e, t) {
  return ye.current.useCallback(e, t);
};
j.useContext = function(e) {
  return ye.current.useContext(e);
};
j.useDebugValue = function() {
};
j.useDeferredValue = function(e) {
  return ye.current.useDeferredValue(e);
};
j.useEffect = function(e, t) {
  return ye.current.useEffect(e, t);
};
j.useId = function() {
  return ye.current.useId();
};
j.useImperativeHandle = function(e, t, n) {
  return ye.current.useImperativeHandle(e, t, n);
};
j.useInsertionEffect = function(e, t) {
  return ye.current.useInsertionEffect(e, t);
};
j.useLayoutEffect = function(e, t) {
  return ye.current.useLayoutEffect(e, t);
};
j.useMemo = function(e, t) {
  return ye.current.useMemo(e, t);
};
j.useReducer = function(e, t, n) {
  return ye.current.useReducer(e, t, n);
};
j.useRef = function(e) {
  return ye.current.useRef(e);
};
j.useState = function(e) {
  return ye.current.useState(e);
};
j.useSyncExternalStore = function(e, t, n) {
  return ye.current.useSyncExternalStore(e, t, n);
};
j.useTransition = function() {
  return ye.current.useTransition();
};
j.version = "18.3.1";
mu.exports = j;
var v = mu.exports;
const fe = /* @__PURE__ */ fu(v), Eu = /* @__PURE__ */ kf({
  __proto__: null,
  default: fe
}, [v]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ff = v, bf = Symbol.for("react.element"), $f = Symbol.for("react.fragment"), Uf = Object.prototype.hasOwnProperty, Wf = Ff.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Bf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cu(e, t, n) {
  var r, o = {}, l = null, i = null;
  n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) Uf.call(t, r) && !Bf.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: bf, type: e, key: l, ref: i, props: o, _owner: Wf.current };
}
Uo.Fragment = $f;
Uo.jsx = Cu;
Uo.jsxs = Cu;
pu.exports = Uo;
var S = pu.exports, Vl = {}, Nu = { exports: {} }, Te = {}, Du = { exports: {} }, Pu = {};
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
  function t(_, R) {
    var O = _.length;
    _.push(R);
    e: for (; 0 < O; ) {
      var A = O - 1 >>> 1, te = _[A];
      if (0 < o(te, R)) _[A] = R, _[O] = te, O = A;
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var R = _[0], O = _.pop();
    if (O !== R) {
      _[0] = O;
      e: for (var A = 0, te = _.length, Tr = te >>> 1; A < Tr; ) {
        var jt = 2 * (A + 1) - 1, il = _[jt], It = jt + 1, Mr = _[It];
        if (0 > o(il, O)) It < te && 0 > o(Mr, il) ? (_[A] = Mr, _[It] = O, A = It) : (_[A] = il, _[jt] = O, A = jt);
        else if (It < te && 0 > o(Mr, O)) _[A] = Mr, _[It] = O, A = It;
        else break e;
      }
    }
    return R;
  }
  function o(_, R) {
    var O = _.sortIndex - R.sortIndex;
    return O !== 0 ? O : _.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function() {
      return l.now();
    };
  } else {
    var i = Date, s = i.now();
    e.unstable_now = function() {
      return i.now() - s;
    };
  }
  var a = [], u = [], g = 1, p = null, f = 3, y = !1, x = !1, h = !1, k = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(_) {
    for (var R = n(u); R !== null; ) {
      if (R.callback === null) r(u);
      else if (R.startTime <= _) r(u), R.sortIndex = R.expirationTime, t(a, R);
      else break;
      R = n(u);
    }
  }
  function w(_) {
    if (h = !1, m(_), !x) if (n(a) !== null) x = !0, Y(E);
    else {
      var R = n(u);
      R !== null && ge(w, R.startTime - _);
    }
  }
  function E(_, R) {
    x = !1, h && (h = !1, d(T), T = -1), y = !0;
    var O = f;
    try {
      for (m(R), p = n(a); p !== null && (!(p.expirationTime > R) || _ && !$()); ) {
        var A = p.callback;
        if (typeof A == "function") {
          p.callback = null, f = p.priorityLevel;
          var te = A(p.expirationTime <= R);
          R = e.unstable_now(), typeof te == "function" ? p.callback = te : p === n(a) && r(a), m(R);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var Tr = !0;
      else {
        var jt = n(u);
        jt !== null && ge(w, jt.startTime - R), Tr = !1;
      }
      return Tr;
    } finally {
      p = null, f = O, y = !1;
    }
  }
  var P = !1, C = null, T = -1, I = 5, L = -1;
  function $() {
    return !(e.unstable_now() - L < I);
  }
  function D() {
    if (C !== null) {
      var _ = e.unstable_now();
      L = _;
      var R = !0;
      try {
        R = C(!0, _);
      } finally {
        R ? b() : (P = !1, C = null);
      }
    } else P = !1;
  }
  var b;
  if (typeof c == "function") b = function() {
    c(D);
  };
  else if (typeof MessageChannel < "u") {
    var B = new MessageChannel(), U = B.port2;
    B.port1.onmessage = D, b = function() {
      U.postMessage(null);
    };
  } else b = function() {
    k(D, 0);
  };
  function Y(_) {
    C = _, P || (P = !0, b());
  }
  function ge(_, R) {
    T = k(function() {
      _(e.unstable_now());
    }, R);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(_) {
    _.callback = null;
  }, e.unstable_continueExecution = function() {
    x || y || (x = !0, Y(E));
  }, e.unstable_forceFrameRate = function(_) {
    0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < _ ? Math.floor(1e3 / _) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return f;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(_) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var R = 3;
        break;
      default:
        R = f;
    }
    var O = f;
    f = R;
    try {
      return _();
    } finally {
      f = O;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(_, R) {
    switch (_) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        _ = 3;
    }
    var O = f;
    f = _;
    try {
      return R();
    } finally {
      f = O;
    }
  }, e.unstable_scheduleCallback = function(_, R, O) {
    var A = e.unstable_now();
    switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? A + O : A) : O = A, _) {
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
    return te = O + te, _ = { id: g++, callback: R, priorityLevel: _, startTime: O, expirationTime: te, sortIndex: -1 }, O > A ? (_.sortIndex = O, t(u, _), n(a) === null && _ === n(u) && (h ? (d(T), T = -1) : h = !0, ge(w, O - A))) : (_.sortIndex = te, t(a, _), x || y || (x = !0, Y(E))), _;
  }, e.unstable_shouldYield = $, e.unstable_wrapCallback = function(_) {
    var R = f;
    return function() {
      var O = f;
      f = R;
      try {
        return _.apply(this, arguments);
      } finally {
        f = O;
      }
    };
  };
})(Pu);
Du.exports = Pu;
var Vf = Du.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hf = v, _e = Vf;
function N(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var _u = /* @__PURE__ */ new Set(), lr = {};
function Xt(e, t) {
  Nn(e, t), Nn(e + "Capture", t);
}
function Nn(e, t) {
  for (lr[e] = t, e = 0; e < t.length; e++) _u.add(t[e]);
}
var ot = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Hl = Object.prototype.hasOwnProperty, Qf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ws = {}, Bs = {};
function Gf(e) {
  return Hl.call(Bs, e) ? !0 : Hl.call(Ws, e) ? !1 : Qf.test(e) ? Bs[e] = !0 : (Ws[e] = !0, !1);
}
function Kf(e, t, n, r) {
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
function Yf(e, t, n, r) {
  if (t === null || typeof t > "u" || Kf(e, t, n, r)) return !0;
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
function we(e, t, n, r, o, l, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i;
}
var ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ue[e] = new we(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ue[t] = new we(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ue[e] = new we(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ue[e] = new we(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ue[e] = new we(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ue[e] = new we(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ue[e] = new we(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ue[e] = new we(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ue[e] = new we(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Vi = /[\-:]([a-z])/g;
function Hi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Vi,
    Hi
  );
  ue[t] = new we(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Vi, Hi);
  ue[t] = new we(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Vi, Hi);
  ue[t] = new we(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ue[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ue.xlinkHref = new we("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ue[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Qi(e, t, n, r) {
  var o = ue.hasOwnProperty(t) ? ue[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Yf(t, n, o, r) && (n = null), r || o === null ? Gf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var at = Hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Lr = Symbol.for("react.element"), on = Symbol.for("react.portal"), ln = Symbol.for("react.fragment"), Gi = Symbol.for("react.strict_mode"), Ql = Symbol.for("react.profiler"), Tu = Symbol.for("react.provider"), Mu = Symbol.for("react.context"), Ki = Symbol.for("react.forward_ref"), Gl = Symbol.for("react.suspense"), Kl = Symbol.for("react.suspense_list"), Yi = Symbol.for("react.memo"), mt = Symbol.for("react.lazy"), Ru = Symbol.for("react.offscreen"), Vs = Symbol.iterator;
function In(e) {
  return e === null || typeof e != "object" ? null : (e = Vs && e[Vs] || e["@@iterator"], typeof e == "function" ? e : null);
}
var J = Object.assign, al;
function Qn(e) {
  if (al === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    al = t && t[1] || "";
  }
  return `
` + al + e;
}
var ul = !1;
function cl(e, t) {
  if (!e || ul) return "";
  ul = !0;
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
`), l = r.stack.split(`
`), i = o.length - 1, s = l.length - 1; 1 <= i && 0 <= s && o[i] !== l[s]; ) s--;
      for (; 1 <= i && 0 <= s; i--, s--) if (o[i] !== l[s]) {
        if (i !== 1 || s !== 1)
          do
            if (i--, s--, 0 > s || o[i] !== l[s]) {
              var a = `
` + o[i].replace(" at new ", " at ");
              return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
            }
          while (1 <= i && 0 <= s);
        break;
      }
    }
  } finally {
    ul = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Qn(e) : "";
}
function Xf(e) {
  switch (e.tag) {
    case 5:
      return Qn(e.type);
    case 16:
      return Qn("Lazy");
    case 13:
      return Qn("Suspense");
    case 19:
      return Qn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = cl(e.type, !1), e;
    case 11:
      return e = cl(e.type.render, !1), e;
    case 1:
      return e = cl(e.type, !0), e;
    default:
      return "";
  }
}
function Yl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ln:
      return "Fragment";
    case on:
      return "Portal";
    case Ql:
      return "Profiler";
    case Gi:
      return "StrictMode";
    case Gl:
      return "Suspense";
    case Kl:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Mu:
      return (e.displayName || "Context") + ".Consumer";
    case Tu:
      return (e._context.displayName || "Context") + ".Provider";
    case Ki:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Yi:
      return t = e.displayName || null, t !== null ? t : Yl(e.type) || "Memo";
    case mt:
      t = e._payload, e = e._init;
      try {
        return Yl(e(t));
      } catch {
      }
  }
  return null;
}
function Zf(e) {
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
      return Yl(t);
    case 8:
      return t === Gi ? "StrictMode" : "Mode";
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
function Tt(e) {
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
function Lu(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Jf(e) {
  var t = Lu(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, l = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(i) {
      r = "" + i, l.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Or(e) {
  e._valueTracker || (e._valueTracker = Jf(e));
}
function Ou(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Lu(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ho(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Xl(e, t) {
  var n = t.checked;
  return J({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Hs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Tt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function zu(e, t) {
  t = t.checked, t != null && Qi(e, "checked", t, !1);
}
function Zl(e, t) {
  zu(e, t);
  var n = Tt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Jl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Jl(e, t.type, Tt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Qs(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Jl(e, t, n) {
  (t !== "number" || ho(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Gn = Array.isArray;
function vn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Tt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ql(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return J({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Gs(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(N(92));
      if (Gn(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Tt(n) };
}
function ju(e, t) {
  var n = Tt(t.value), r = Tt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ks(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Iu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ei(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Iu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var zr, Au = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (zr = zr || document.createElement("div"), zr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = zr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function ir(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Xn = {
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
}, qf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Xn).forEach(function(e) {
  qf.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Xn[t] = Xn[e];
  });
});
function Fu(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Xn.hasOwnProperty(e) && Xn[e] ? ("" + t).trim() : t + "px";
}
function bu(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Fu(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var ep = J({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ti(e, t) {
  if (t) {
    if (ep[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function ni(e, t) {
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
var ri = null;
function Xi(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var oi = null, yn = null, wn = null;
function Ys(e) {
  if (e = Pr(e)) {
    if (typeof oi != "function") throw Error(N(280));
    var t = e.stateNode;
    t && (t = Qo(t), oi(e.stateNode, e.type, t));
  }
}
function $u(e) {
  yn ? wn ? wn.push(e) : wn = [e] : yn = e;
}
function Uu() {
  if (yn) {
    var e = yn, t = wn;
    if (wn = yn = null, Ys(e), t) for (e = 0; e < t.length; e++) Ys(t[e]);
  }
}
function Wu(e, t) {
  return e(t);
}
function Bu() {
}
var dl = !1;
function Vu(e, t, n) {
  if (dl) return e(t, n);
  dl = !0;
  try {
    return Wu(e, t, n);
  } finally {
    dl = !1, (yn !== null || wn !== null) && (Bu(), Uu());
  }
}
function sr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Qo(n);
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
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var li = !1;
if (ot) try {
  var An = {};
  Object.defineProperty(An, "passive", { get: function() {
    li = !0;
  } }), window.addEventListener("test", An, An), window.removeEventListener("test", An, An);
} catch {
  li = !1;
}
function tp(e, t, n, r, o, l, i, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (g) {
    this.onError(g);
  }
}
var Zn = !1, vo = null, yo = !1, ii = null, np = { onError: function(e) {
  Zn = !0, vo = e;
} };
function rp(e, t, n, r, o, l, i, s, a) {
  Zn = !1, vo = null, tp.apply(np, arguments);
}
function op(e, t, n, r, o, l, i, s, a) {
  if (rp.apply(this, arguments), Zn) {
    if (Zn) {
      var u = vo;
      Zn = !1, vo = null;
    } else throw Error(N(198));
    yo || (yo = !0, ii = u);
  }
}
function Zt(e) {
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
function Hu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Xs(e) {
  if (Zt(e) !== e) throw Error(N(188));
}
function lp(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Zt(e), t === null) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return Xs(o), e;
        if (l === r) return Xs(o), t;
        l = l.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) n = o, r = l;
    else {
      for (var i = !1, s = o.child; s; ) {
        if (s === n) {
          i = !0, n = o, r = l;
          break;
        }
        if (s === r) {
          i = !0, r = o, n = l;
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = l.child; s; ) {
          if (s === n) {
            i = !0, n = l, r = o;
            break;
          }
          if (s === r) {
            i = !0, r = l, n = o;
            break;
          }
          s = s.sibling;
        }
        if (!i) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function Qu(e) {
  return e = lp(e), e !== null ? Gu(e) : null;
}
function Gu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Gu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ku = _e.unstable_scheduleCallback, Zs = _e.unstable_cancelCallback, ip = _e.unstable_shouldYield, sp = _e.unstable_requestPaint, ee = _e.unstable_now, ap = _e.unstable_getCurrentPriorityLevel, Zi = _e.unstable_ImmediatePriority, Yu = _e.unstable_UserBlockingPriority, wo = _e.unstable_NormalPriority, up = _e.unstable_LowPriority, Xu = _e.unstable_IdlePriority, Wo = null, Ye = null;
function cp(e) {
  if (Ye && typeof Ye.onCommitFiberRoot == "function") try {
    Ye.onCommitFiberRoot(Wo, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Ue = Math.clz32 ? Math.clz32 : pp, dp = Math.log, fp = Math.LN2;
function pp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (dp(e) / fp | 0) | 0;
}
var jr = 64, Ir = 4194304;
function Kn(e) {
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
function xo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, l = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var s = i & ~o;
    s !== 0 ? r = Kn(s) : (l &= i, l !== 0 && (r = Kn(l)));
  } else i = n & ~o, i !== 0 ? r = Kn(i) : l !== 0 && (r = Kn(l));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, l = t & -t, o >= l || o === 16 && (l & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Ue(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function mp(e, t) {
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
function gp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
    var i = 31 - Ue(l), s = 1 << i, a = o[i];
    a === -1 ? (!(s & n) || s & r) && (o[i] = mp(s, t)) : a <= t && (e.expiredLanes |= s), l &= ~s;
  }
}
function si(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Zu() {
  var e = jr;
  return jr <<= 1, !(jr & 4194240) && (jr = 64), e;
}
function fl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Nr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ue(t), e[t] = n;
}
function hp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Ue(n), l = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
  }
}
function Ji(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Ue(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var W = 0;
function Ju(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var qu, qi, ec, tc, nc, ai = !1, Ar = [], xt = null, St = null, kt = null, ar = /* @__PURE__ */ new Map(), ur = /* @__PURE__ */ new Map(), ht = [], vp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Js(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      xt = null;
      break;
    case "dragenter":
    case "dragleave":
      St = null;
      break;
    case "mouseover":
    case "mouseout":
      kt = null;
      break;
    case "pointerover":
    case "pointerout":
      ar.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ur.delete(t.pointerId);
  }
}
function Fn(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [o] }, t !== null && (t = Pr(t), t !== null && qi(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function yp(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return xt = Fn(xt, e, t, n, r, o), !0;
    case "dragenter":
      return St = Fn(St, e, t, n, r, o), !0;
    case "mouseover":
      return kt = Fn(kt, e, t, n, r, o), !0;
    case "pointerover":
      var l = o.pointerId;
      return ar.set(l, Fn(ar.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return l = o.pointerId, ur.set(l, Fn(ur.get(l) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function rc(e) {
  var t = bt(e.target);
  if (t !== null) {
    var n = Zt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Hu(n), t !== null) {
          e.blockedOn = t, nc(e.priority, function() {
            ec(n);
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
function no(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ui(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ri = r, n.target.dispatchEvent(r), ri = null;
    } else return t = Pr(n), t !== null && qi(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function qs(e, t, n) {
  no(e) && n.delete(t);
}
function wp() {
  ai = !1, xt !== null && no(xt) && (xt = null), St !== null && no(St) && (St = null), kt !== null && no(kt) && (kt = null), ar.forEach(qs), ur.forEach(qs);
}
function bn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ai || (ai = !0, _e.unstable_scheduleCallback(_e.unstable_NormalPriority, wp)));
}
function cr(e) {
  function t(o) {
    return bn(o, e);
  }
  if (0 < Ar.length) {
    bn(Ar[0], e);
    for (var n = 1; n < Ar.length; n++) {
      var r = Ar[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (xt !== null && bn(xt, e), St !== null && bn(St, e), kt !== null && bn(kt, e), ar.forEach(t), ur.forEach(t), n = 0; n < ht.length; n++) r = ht[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ht.length && (n = ht[0], n.blockedOn === null); ) rc(n), n.blockedOn === null && ht.shift();
}
var xn = at.ReactCurrentBatchConfig, So = !0;
function xp(e, t, n, r) {
  var o = W, l = xn.transition;
  xn.transition = null;
  try {
    W = 1, es(e, t, n, r);
  } finally {
    W = o, xn.transition = l;
  }
}
function Sp(e, t, n, r) {
  var o = W, l = xn.transition;
  xn.transition = null;
  try {
    W = 4, es(e, t, n, r);
  } finally {
    W = o, xn.transition = l;
  }
}
function es(e, t, n, r) {
  if (So) {
    var o = ui(e, t, n, r);
    if (o === null) kl(e, t, r, ko, n), Js(e, r);
    else if (yp(o, e, t, n, r)) r.stopPropagation();
    else if (Js(e, r), t & 4 && -1 < vp.indexOf(e)) {
      for (; o !== null; ) {
        var l = Pr(o);
        if (l !== null && qu(l), l = ui(e, t, n, r), l === null && kl(e, t, r, ko, n), l === o) break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else kl(e, t, r, null, n);
  }
}
var ko = null;
function ui(e, t, n, r) {
  if (ko = null, e = Xi(r), e = bt(e), e !== null) if (t = Zt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Hu(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return ko = e, null;
}
function oc(e) {
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
      switch (ap()) {
        case Zi:
          return 1;
        case Yu:
          return 4;
        case wo:
        case up:
          return 16;
        case Xu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var yt = null, ts = null, ro = null;
function lc() {
  if (ro) return ro;
  var e, t = ts, n = t.length, r, o = "value" in yt ? yt.value : yt.textContent, l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++) ;
  return ro = o.slice(e, 1 < r ? 1 - r : void 0);
}
function oo(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Fr() {
  return !0;
}
function ea() {
  return !1;
}
function Me(e) {
  function t(n, r, o, l, i) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(l) : l[s]);
    return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Fr : ea, this.isPropagationStopped = ea, this;
  }
  return J(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Fr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Fr);
  }, persist: function() {
  }, isPersistent: Fr }), t;
}
var On = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ns = Me(On), Dr = J({}, On, { view: 0, detail: 0 }), kp = Me(Dr), pl, ml, $n, Bo = J({}, Dr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: rs, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== $n && ($n && e.type === "mousemove" ? (pl = e.screenX - $n.screenX, ml = e.screenY - $n.screenY) : ml = pl = 0, $n = e), pl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ml;
} }), ta = Me(Bo), Ep = J({}, Bo, { dataTransfer: 0 }), Cp = Me(Ep), Np = J({}, Dr, { relatedTarget: 0 }), gl = Me(Np), Dp = J({}, On, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Pp = Me(Dp), _p = J({}, On, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Tp = Me(_p), Mp = J({}, On, { data: 0 }), na = Me(Mp), Rp = {
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
}, Lp = {
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
}, Op = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function zp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Op[e]) ? !!t[e] : !1;
}
function rs() {
  return zp;
}
var jp = J({}, Dr, { key: function(e) {
  if (e.key) {
    var t = Rp[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = oo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Lp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: rs, charCode: function(e) {
  return e.type === "keypress" ? oo(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? oo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Ip = Me(jp), Ap = J({}, Bo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ra = Me(Ap), Fp = J({}, Dr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: rs }), bp = Me(Fp), $p = J({}, On, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Up = Me($p), Wp = J({}, Bo, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Bp = Me(Wp), Vp = [9, 13, 27, 32], os = ot && "CompositionEvent" in window, Jn = null;
ot && "documentMode" in document && (Jn = document.documentMode);
var Hp = ot && "TextEvent" in window && !Jn, ic = ot && (!os || Jn && 8 < Jn && 11 >= Jn), oa = " ", la = !1;
function sc(e, t) {
  switch (e) {
    case "keyup":
      return Vp.indexOf(t.keyCode) !== -1;
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
function ac(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var sn = !1;
function Qp(e, t) {
  switch (e) {
    case "compositionend":
      return ac(t);
    case "keypress":
      return t.which !== 32 ? null : (la = !0, oa);
    case "textInput":
      return e = t.data, e === oa && la ? null : e;
    default:
      return null;
  }
}
function Gp(e, t) {
  if (sn) return e === "compositionend" || !os && sc(e, t) ? (e = lc(), ro = ts = yt = null, sn = !1, e) : null;
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
      return ic && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Kp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ia(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Kp[e.type] : t === "textarea";
}
function uc(e, t, n, r) {
  $u(r), t = Eo(t, "onChange"), 0 < t.length && (n = new ns("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var qn = null, dr = null;
function Yp(e) {
  xc(e, 0);
}
function Vo(e) {
  var t = cn(e);
  if (Ou(t)) return e;
}
function Xp(e, t) {
  if (e === "change") return t;
}
var cc = !1;
if (ot) {
  var hl;
  if (ot) {
    var vl = "oninput" in document;
    if (!vl) {
      var sa = document.createElement("div");
      sa.setAttribute("oninput", "return;"), vl = typeof sa.oninput == "function";
    }
    hl = vl;
  } else hl = !1;
  cc = hl && (!document.documentMode || 9 < document.documentMode);
}
function aa() {
  qn && (qn.detachEvent("onpropertychange", dc), dr = qn = null);
}
function dc(e) {
  if (e.propertyName === "value" && Vo(dr)) {
    var t = [];
    uc(t, dr, e, Xi(e)), Vu(Yp, t);
  }
}
function Zp(e, t, n) {
  e === "focusin" ? (aa(), qn = t, dr = n, qn.attachEvent("onpropertychange", dc)) : e === "focusout" && aa();
}
function Jp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Vo(dr);
}
function qp(e, t) {
  if (e === "click") return Vo(t);
}
function em(e, t) {
  if (e === "input" || e === "change") return Vo(t);
}
function tm(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Be = typeof Object.is == "function" ? Object.is : tm;
function fr(e, t) {
  if (Be(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Hl.call(t, o) || !Be(e[o], t[o])) return !1;
  }
  return !0;
}
function ua(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ca(e, t) {
  var n = ua(e);
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
    n = ua(n);
  }
}
function fc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? fc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function pc() {
  for (var e = window, t = ho(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ho(e.document);
  }
  return t;
}
function ls(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function nm(e) {
  var t = pc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && fc(n.ownerDocument.documentElement, n)) {
    if (r !== null && ls(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, l = Math.min(r.start, o);
        r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = ca(n, l);
        var i = ca(
          n,
          r
        );
        o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var rm = ot && "documentMode" in document && 11 >= document.documentMode, an = null, ci = null, er = null, di = !1;
function da(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  di || an == null || an !== ho(r) || (r = an, "selectionStart" in r && ls(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), er && fr(er, r) || (er = r, r = Eo(ci, "onSelect"), 0 < r.length && (t = new ns("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = an)));
}
function br(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var un = { animationend: br("Animation", "AnimationEnd"), animationiteration: br("Animation", "AnimationIteration"), animationstart: br("Animation", "AnimationStart"), transitionend: br("Transition", "TransitionEnd") }, yl = {}, mc = {};
ot && (mc = document.createElement("div").style, "AnimationEvent" in window || (delete un.animationend.animation, delete un.animationiteration.animation, delete un.animationstart.animation), "TransitionEvent" in window || delete un.transitionend.transition);
function Ho(e) {
  if (yl[e]) return yl[e];
  if (!un[e]) return e;
  var t = un[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in mc) return yl[e] = t[n];
  return e;
}
var gc = Ho("animationend"), hc = Ho("animationiteration"), vc = Ho("animationstart"), yc = Ho("transitionend"), wc = /* @__PURE__ */ new Map(), fa = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Rt(e, t) {
  wc.set(e, t), Xt(t, [e]);
}
for (var wl = 0; wl < fa.length; wl++) {
  var xl = fa[wl], om = xl.toLowerCase(), lm = xl[0].toUpperCase() + xl.slice(1);
  Rt(om, "on" + lm);
}
Rt(gc, "onAnimationEnd");
Rt(hc, "onAnimationIteration");
Rt(vc, "onAnimationStart");
Rt("dblclick", "onDoubleClick");
Rt("focusin", "onFocus");
Rt("focusout", "onBlur");
Rt(yc, "onTransitionEnd");
Nn("onMouseEnter", ["mouseout", "mouseover"]);
Nn("onMouseLeave", ["mouseout", "mouseover"]);
Nn("onPointerEnter", ["pointerout", "pointerover"]);
Nn("onPointerLeave", ["pointerout", "pointerover"]);
Xt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Xt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Xt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Xt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Xt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Xt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Yn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), im = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yn));
function pa(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, op(r, t, void 0, e), e.currentTarget = null;
}
function xc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var s = r[i], a = s.instance, u = s.currentTarget;
        if (s = s.listener, a !== l && o.isPropagationStopped()) break e;
        pa(o, s, u), l = a;
      }
      else for (i = 0; i < r.length; i++) {
        if (s = r[i], a = s.instance, u = s.currentTarget, s = s.listener, a !== l && o.isPropagationStopped()) break e;
        pa(o, s, u), l = a;
      }
    }
  }
  if (yo) throw e = ii, yo = !1, ii = null, e;
}
function Q(e, t) {
  var n = t[hi];
  n === void 0 && (n = t[hi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Sc(t, e, 2, !1), n.add(r));
}
function Sl(e, t, n) {
  var r = 0;
  t && (r |= 4), Sc(n, e, r, t);
}
var $r = "_reactListening" + Math.random().toString(36).slice(2);
function pr(e) {
  if (!e[$r]) {
    e[$r] = !0, _u.forEach(function(n) {
      n !== "selectionchange" && (im.has(n) || Sl(n, !1, e), Sl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[$r] || (t[$r] = !0, Sl("selectionchange", !1, t));
  }
}
function Sc(e, t, n, r) {
  switch (oc(t)) {
    case 1:
      var o = xp;
      break;
    case 4:
      o = Sp;
      break;
    default:
      o = es;
  }
  n = o.bind(null, t, n, e), o = void 0, !li || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function kl(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var s = r.stateNode.containerInfo;
      if (s === o || s.nodeType === 8 && s.parentNode === o) break;
      if (i === 4) for (i = r.return; i !== null; ) {
        var a = i.tag;
        if ((a === 3 || a === 4) && (a = i.stateNode.containerInfo, a === o || a.nodeType === 8 && a.parentNode === o)) return;
        i = i.return;
      }
      for (; s !== null; ) {
        if (i = bt(s), i === null) return;
        if (a = i.tag, a === 5 || a === 6) {
          r = l = i;
          continue e;
        }
        s = s.parentNode;
      }
    }
    r = r.return;
  }
  Vu(function() {
    var u = l, g = Xi(n), p = [];
    e: {
      var f = wc.get(e);
      if (f !== void 0) {
        var y = ns, x = e;
        switch (e) {
          case "keypress":
            if (oo(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Ip;
            break;
          case "focusin":
            x = "focus", y = gl;
            break;
          case "focusout":
            x = "blur", y = gl;
            break;
          case "beforeblur":
          case "afterblur":
            y = gl;
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
            y = ta;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Cp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = bp;
            break;
          case gc:
          case hc:
          case vc:
            y = Pp;
            break;
          case yc:
            y = Up;
            break;
          case "scroll":
            y = kp;
            break;
          case "wheel":
            y = Bp;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Tp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = ra;
        }
        var h = (t & 4) !== 0, k = !h && e === "scroll", d = h ? f !== null ? f + "Capture" : null : f;
        h = [];
        for (var c = u, m; c !== null; ) {
          m = c;
          var w = m.stateNode;
          if (m.tag === 5 && w !== null && (m = w, d !== null && (w = sr(c, d), w != null && h.push(mr(c, w, m)))), k) break;
          c = c.return;
        }
        0 < h.length && (f = new y(f, x, null, n, g), p.push({ event: f, listeners: h }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", f && n !== ri && (x = n.relatedTarget || n.fromElement) && (bt(x) || x[lt])) break e;
        if ((y || f) && (f = g.window === g ? g : (f = g.ownerDocument) ? f.defaultView || f.parentWindow : window, y ? (x = n.relatedTarget || n.toElement, y = u, x = x ? bt(x) : null, x !== null && (k = Zt(x), x !== k || x.tag !== 5 && x.tag !== 6) && (x = null)) : (y = null, x = u), y !== x)) {
          if (h = ta, w = "onMouseLeave", d = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (h = ra, w = "onPointerLeave", d = "onPointerEnter", c = "pointer"), k = y == null ? f : cn(y), m = x == null ? f : cn(x), f = new h(w, c + "leave", y, n, g), f.target = k, f.relatedTarget = m, w = null, bt(g) === u && (h = new h(d, c + "enter", x, n, g), h.target = m, h.relatedTarget = k, w = h), k = w, y && x) t: {
            for (h = y, d = x, c = 0, m = h; m; m = qt(m)) c++;
            for (m = 0, w = d; w; w = qt(w)) m++;
            for (; 0 < c - m; ) h = qt(h), c--;
            for (; 0 < m - c; ) d = qt(d), m--;
            for (; c--; ) {
              if (h === d || d !== null && h === d.alternate) break t;
              h = qt(h), d = qt(d);
            }
            h = null;
          }
          else h = null;
          y !== null && ma(p, f, y, h, !1), x !== null && k !== null && ma(p, k, x, h, !0);
        }
      }
      e: {
        if (f = u ? cn(u) : window, y = f.nodeName && f.nodeName.toLowerCase(), y === "select" || y === "input" && f.type === "file") var E = Xp;
        else if (ia(f)) if (cc) E = em;
        else {
          E = Jp;
          var P = Zp;
        }
        else (y = f.nodeName) && y.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (E = qp);
        if (E && (E = E(e, u))) {
          uc(p, E, n, g);
          break e;
        }
        P && P(e, f, u), e === "focusout" && (P = f._wrapperState) && P.controlled && f.type === "number" && Jl(f, "number", f.value);
      }
      switch (P = u ? cn(u) : window, e) {
        case "focusin":
          (ia(P) || P.contentEditable === "true") && (an = P, ci = u, er = null);
          break;
        case "focusout":
          er = ci = an = null;
          break;
        case "mousedown":
          di = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          di = !1, da(p, n, g);
          break;
        case "selectionchange":
          if (rm) break;
        case "keydown":
        case "keyup":
          da(p, n, g);
      }
      var C;
      if (os) e: {
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
      else sn ? sc(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (ic && n.locale !== "ko" && (sn || T !== "onCompositionStart" ? T === "onCompositionEnd" && sn && (C = lc()) : (yt = g, ts = "value" in yt ? yt.value : yt.textContent, sn = !0)), P = Eo(u, T), 0 < P.length && (T = new na(T, e, null, n, g), p.push({ event: T, listeners: P }), C ? T.data = C : (C = ac(n), C !== null && (T.data = C)))), (C = Hp ? Qp(e, n) : Gp(e, n)) && (u = Eo(u, "onBeforeInput"), 0 < u.length && (g = new na("onBeforeInput", "beforeinput", null, n, g), p.push({ event: g, listeners: u }), g.data = C));
    }
    xc(p, t);
  });
}
function mr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Eo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, l = o.stateNode;
    o.tag === 5 && l !== null && (o = l, l = sr(e, n), l != null && r.unshift(mr(e, l, o)), l = sr(e, t), l != null && r.push(mr(e, l, o))), e = e.return;
  }
  return r;
}
function qt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ma(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n, a = s.alternate, u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 && u !== null && (s = u, o ? (a = sr(n, l), a != null && i.unshift(mr(n, a, s))) : o || (a = sr(n, l), a != null && i.push(mr(n, a, s)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var sm = /\r\n?/g, am = /\u0000|\uFFFD/g;
function ga(e) {
  return (typeof e == "string" ? e : "" + e).replace(sm, `
`).replace(am, "");
}
function Ur(e, t, n) {
  if (t = ga(t), ga(e) !== t && n) throw Error(N(425));
}
function Co() {
}
var fi = null, pi = null;
function mi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var gi = typeof setTimeout == "function" ? setTimeout : void 0, um = typeof clearTimeout == "function" ? clearTimeout : void 0, ha = typeof Promise == "function" ? Promise : void 0, cm = typeof queueMicrotask == "function" ? queueMicrotask : typeof ha < "u" ? function(e) {
  return ha.resolve(null).then(e).catch(dm);
} : gi;
function dm(e) {
  setTimeout(function() {
    throw e;
  });
}
function El(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), cr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  cr(t);
}
function Et(e) {
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
function va(e) {
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
var zn = Math.random().toString(36).slice(2), Ge = "__reactFiber$" + zn, gr = "__reactProps$" + zn, lt = "__reactContainer$" + zn, hi = "__reactEvents$" + zn, fm = "__reactListeners$" + zn, pm = "__reactHandles$" + zn;
function bt(e) {
  var t = e[Ge];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[lt] || n[Ge]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = va(e); e !== null; ) {
        if (n = e[Ge]) return n;
        e = va(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Pr(e) {
  return e = e[Ge] || e[lt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function cn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function Qo(e) {
  return e[gr] || null;
}
var vi = [], dn = -1;
function Lt(e) {
  return { current: e };
}
function G(e) {
  0 > dn || (e.current = vi[dn], vi[dn] = null, dn--);
}
function V(e, t) {
  dn++, vi[dn] = e.current, e.current = t;
}
var Mt = {}, me = Lt(Mt), ke = Lt(!1), Vt = Mt;
function Dn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Mt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, l;
  for (l in n) o[l] = t[l];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Ee(e) {
  return e = e.childContextTypes, e != null;
}
function No() {
  G(ke), G(me);
}
function ya(e, t, n) {
  if (me.current !== Mt) throw Error(N(168));
  V(me, t), V(ke, n);
}
function kc(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(N(108, Zf(e) || "Unknown", o));
  return J({}, n, r);
}
function Do(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Mt, Vt = me.current, V(me, e), V(ke, ke.current), !0;
}
function wa(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n ? (e = kc(e, t, Vt), r.__reactInternalMemoizedMergedChildContext = e, G(ke), G(me), V(me, e)) : G(ke), V(ke, n);
}
var et = null, Go = !1, Cl = !1;
function Ec(e) {
  et === null ? et = [e] : et.push(e);
}
function mm(e) {
  Go = !0, Ec(e);
}
function Ot() {
  if (!Cl && et !== null) {
    Cl = !0;
    var e = 0, t = W;
    try {
      var n = et;
      for (W = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      et = null, Go = !1;
    } catch (o) {
      throw et !== null && (et = et.slice(e + 1)), Ku(Zi, Ot), o;
    } finally {
      W = t, Cl = !1;
    }
  }
  return null;
}
var fn = [], pn = 0, Po = null, _o = 0, Re = [], Le = 0, Ht = null, tt = 1, nt = "";
function At(e, t) {
  fn[pn++] = _o, fn[pn++] = Po, Po = e, _o = t;
}
function Cc(e, t, n) {
  Re[Le++] = tt, Re[Le++] = nt, Re[Le++] = Ht, Ht = e;
  var r = tt;
  e = nt;
  var o = 32 - Ue(r) - 1;
  r &= ~(1 << o), n += 1;
  var l = 32 - Ue(t) + o;
  if (30 < l) {
    var i = o - o % 5;
    l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, tt = 1 << 32 - Ue(t) + o | n << o | r, nt = l + e;
  } else tt = 1 << l | n << o | r, nt = e;
}
function is(e) {
  e.return !== null && (At(e, 1), Cc(e, 1, 0));
}
function ss(e) {
  for (; e === Po; ) Po = fn[--pn], fn[pn] = null, _o = fn[--pn], fn[pn] = null;
  for (; e === Ht; ) Ht = Re[--Le], Re[Le] = null, nt = Re[--Le], Re[Le] = null, tt = Re[--Le], Re[Le] = null;
}
var Pe = null, De = null, K = !1, $e = null;
function Nc(e, t) {
  var n = Oe(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function xa(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Pe = e, De = Et(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Pe = e, De = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ht !== null ? { id: tt, overflow: nt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Oe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Pe = e, De = null, !0) : !1;
    default:
      return !1;
  }
}
function yi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function wi(e) {
  if (K) {
    var t = De;
    if (t) {
      var n = t;
      if (!xa(e, t)) {
        if (yi(e)) throw Error(N(418));
        t = Et(n.nextSibling);
        var r = Pe;
        t && xa(e, t) ? Nc(r, n) : (e.flags = e.flags & -4097 | 2, K = !1, Pe = e);
      }
    } else {
      if (yi(e)) throw Error(N(418));
      e.flags = e.flags & -4097 | 2, K = !1, Pe = e;
    }
  }
}
function Sa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Pe = e;
}
function Wr(e) {
  if (e !== Pe) return !1;
  if (!K) return Sa(e), K = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !mi(e.type, e.memoizedProps)), t && (t = De)) {
    if (yi(e)) throw Dc(), Error(N(418));
    for (; t; ) Nc(e, t), t = Et(t.nextSibling);
  }
  if (Sa(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              De = Et(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      De = null;
    }
  } else De = Pe ? Et(e.stateNode.nextSibling) : null;
  return !0;
}
function Dc() {
  for (var e = De; e; ) e = Et(e.nextSibling);
}
function Pn() {
  De = Pe = null, K = !1;
}
function as(e) {
  $e === null ? $e = [e] : $e.push(e);
}
var gm = at.ReactCurrentBatchConfig;
function Un(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var o = r, l = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(i) {
        var s = o.refs;
        i === null ? delete s[l] : s[l] = i;
      }, t._stringRef = l, t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Br(e, t) {
  throw e = Object.prototype.toString.call(t), Error(N(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function ka(e) {
  var t = e._init;
  return t(e._payload);
}
function Pc(e) {
  function t(d, c) {
    if (e) {
      var m = d.deletions;
      m === null ? (d.deletions = [c], d.flags |= 16) : m.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), c = c.sibling;
    return null;
  }
  function r(d, c) {
    for (d = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? d.set(c.key, c) : d.set(c.index, c), c = c.sibling;
    return d;
  }
  function o(d, c) {
    return d = Pt(d, c), d.index = 0, d.sibling = null, d;
  }
  function l(d, c, m) {
    return d.index = m, e ? (m = d.alternate, m !== null ? (m = m.index, m < c ? (d.flags |= 2, c) : m) : (d.flags |= 2, c)) : (d.flags |= 1048576, c);
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function s(d, c, m, w) {
    return c === null || c.tag !== 6 ? (c = Rl(m, d.mode, w), c.return = d, c) : (c = o(c, m), c.return = d, c);
  }
  function a(d, c, m, w) {
    var E = m.type;
    return E === ln ? g(d, c, m.props.children, w, m.key) : c !== null && (c.elementType === E || typeof E == "object" && E !== null && E.$$typeof === mt && ka(E) === c.type) ? (w = o(c, m.props), w.ref = Un(d, c, m), w.return = d, w) : (w = fo(m.type, m.key, m.props, null, d.mode, w), w.ref = Un(d, c, m), w.return = d, w);
  }
  function u(d, c, m, w) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== m.containerInfo || c.stateNode.implementation !== m.implementation ? (c = Ll(m, d.mode, w), c.return = d, c) : (c = o(c, m.children || []), c.return = d, c);
  }
  function g(d, c, m, w, E) {
    return c === null || c.tag !== 7 ? (c = Bt(m, d.mode, w, E), c.return = d, c) : (c = o(c, m), c.return = d, c);
  }
  function p(d, c, m) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = Rl("" + c, d.mode, m), c.return = d, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Lr:
          return m = fo(c.type, c.key, c.props, null, d.mode, m), m.ref = Un(d, null, c), m.return = d, m;
        case on:
          return c = Ll(c, d.mode, m), c.return = d, c;
        case mt:
          var w = c._init;
          return p(d, w(c._payload), m);
      }
      if (Gn(c) || In(c)) return c = Bt(c, d.mode, m, null), c.return = d, c;
      Br(d, c);
    }
    return null;
  }
  function f(d, c, m, w) {
    var E = c !== null ? c.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number") return E !== null ? null : s(d, c, "" + m, w);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Lr:
          return m.key === E ? a(d, c, m, w) : null;
        case on:
          return m.key === E ? u(d, c, m, w) : null;
        case mt:
          return E = m._init, f(
            d,
            c,
            E(m._payload),
            w
          );
      }
      if (Gn(m) || In(m)) return E !== null ? null : g(d, c, m, w, null);
      Br(d, m);
    }
    return null;
  }
  function y(d, c, m, w, E) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return d = d.get(m) || null, s(c, d, "" + w, E);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Lr:
          return d = d.get(w.key === null ? m : w.key) || null, a(c, d, w, E);
        case on:
          return d = d.get(w.key === null ? m : w.key) || null, u(c, d, w, E);
        case mt:
          var P = w._init;
          return y(d, c, m, P(w._payload), E);
      }
      if (Gn(w) || In(w)) return d = d.get(m) || null, g(c, d, w, E, null);
      Br(c, w);
    }
    return null;
  }
  function x(d, c, m, w) {
    for (var E = null, P = null, C = c, T = c = 0, I = null; C !== null && T < m.length; T++) {
      C.index > T ? (I = C, C = null) : I = C.sibling;
      var L = f(d, C, m[T], w);
      if (L === null) {
        C === null && (C = I);
        break;
      }
      e && C && L.alternate === null && t(d, C), c = l(L, c, T), P === null ? E = L : P.sibling = L, P = L, C = I;
    }
    if (T === m.length) return n(d, C), K && At(d, T), E;
    if (C === null) {
      for (; T < m.length; T++) C = p(d, m[T], w), C !== null && (c = l(C, c, T), P === null ? E = C : P.sibling = C, P = C);
      return K && At(d, T), E;
    }
    for (C = r(d, C); T < m.length; T++) I = y(C, d, T, m[T], w), I !== null && (e && I.alternate !== null && C.delete(I.key === null ? T : I.key), c = l(I, c, T), P === null ? E = I : P.sibling = I, P = I);
    return e && C.forEach(function($) {
      return t(d, $);
    }), K && At(d, T), E;
  }
  function h(d, c, m, w) {
    var E = In(m);
    if (typeof E != "function") throw Error(N(150));
    if (m = E.call(m), m == null) throw Error(N(151));
    for (var P = E = null, C = c, T = c = 0, I = null, L = m.next(); C !== null && !L.done; T++, L = m.next()) {
      C.index > T ? (I = C, C = null) : I = C.sibling;
      var $ = f(d, C, L.value, w);
      if ($ === null) {
        C === null && (C = I);
        break;
      }
      e && C && $.alternate === null && t(d, C), c = l($, c, T), P === null ? E = $ : P.sibling = $, P = $, C = I;
    }
    if (L.done) return n(
      d,
      C
    ), K && At(d, T), E;
    if (C === null) {
      for (; !L.done; T++, L = m.next()) L = p(d, L.value, w), L !== null && (c = l(L, c, T), P === null ? E = L : P.sibling = L, P = L);
      return K && At(d, T), E;
    }
    for (C = r(d, C); !L.done; T++, L = m.next()) L = y(C, d, T, L.value, w), L !== null && (e && L.alternate !== null && C.delete(L.key === null ? T : L.key), c = l(L, c, T), P === null ? E = L : P.sibling = L, P = L);
    return e && C.forEach(function(D) {
      return t(d, D);
    }), K && At(d, T), E;
  }
  function k(d, c, m, w) {
    if (typeof m == "object" && m !== null && m.type === ln && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Lr:
          e: {
            for (var E = m.key, P = c; P !== null; ) {
              if (P.key === E) {
                if (E = m.type, E === ln) {
                  if (P.tag === 7) {
                    n(d, P.sibling), c = o(P, m.props.children), c.return = d, d = c;
                    break e;
                  }
                } else if (P.elementType === E || typeof E == "object" && E !== null && E.$$typeof === mt && ka(E) === P.type) {
                  n(d, P.sibling), c = o(P, m.props), c.ref = Un(d, P, m), c.return = d, d = c;
                  break e;
                }
                n(d, P);
                break;
              } else t(d, P);
              P = P.sibling;
            }
            m.type === ln ? (c = Bt(m.props.children, d.mode, w, m.key), c.return = d, d = c) : (w = fo(m.type, m.key, m.props, null, d.mode, w), w.ref = Un(d, c, m), w.return = d, d = w);
          }
          return i(d);
        case on:
          e: {
            for (P = m.key; c !== null; ) {
              if (c.key === P) if (c.tag === 4 && c.stateNode.containerInfo === m.containerInfo && c.stateNode.implementation === m.implementation) {
                n(d, c.sibling), c = o(c, m.children || []), c.return = d, d = c;
                break e;
              } else {
                n(d, c);
                break;
              }
              else t(d, c);
              c = c.sibling;
            }
            c = Ll(m, d.mode, w), c.return = d, d = c;
          }
          return i(d);
        case mt:
          return P = m._init, k(d, c, P(m._payload), w);
      }
      if (Gn(m)) return x(d, c, m, w);
      if (In(m)) return h(d, c, m, w);
      Br(d, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, c !== null && c.tag === 6 ? (n(d, c.sibling), c = o(c, m), c.return = d, d = c) : (n(d, c), c = Rl(m, d.mode, w), c.return = d, d = c), i(d)) : n(d, c);
  }
  return k;
}
var _n = Pc(!0), _c = Pc(!1), To = Lt(null), Mo = null, mn = null, us = null;
function cs() {
  us = mn = Mo = null;
}
function ds(e) {
  var t = To.current;
  G(To), e._currentValue = t;
}
function xi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Sn(e, t) {
  Mo = e, us = mn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Se = !0), e.firstContext = null);
}
function je(e) {
  var t = e._currentValue;
  if (us !== e) if (e = { context: e, memoizedValue: t, next: null }, mn === null) {
    if (Mo === null) throw Error(N(308));
    mn = e, Mo.dependencies = { lanes: 0, firstContext: e };
  } else mn = mn.next = e;
  return t;
}
var $t = null;
function fs(e) {
  $t === null ? $t = [e] : $t.push(e);
}
function Tc(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, fs(t)) : (n.next = o.next, o.next = n), t.interleaved = n, it(e, r);
}
function it(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var gt = !1;
function ps(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Mc(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function rt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ct(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, F & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, it(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, fs(r)) : (t.next = o.next, o.next = t), r.interleaved = t, it(e, n);
}
function lo(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ji(e, n);
  }
}
function Ea(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, l = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        l === null ? o = l = i : l = l.next = i, n = n.next;
      } while (n !== null);
      l === null ? o = l = t : l = l.next = t;
    } else o = l = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: l, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Ro(e, t, n, r) {
  var o = e.updateQueue;
  gt = !1;
  var l = o.firstBaseUpdate, i = o.lastBaseUpdate, s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var a = s, u = a.next;
    a.next = null, i === null ? l = u : i.next = u, i = a;
    var g = e.alternate;
    g !== null && (g = g.updateQueue, s = g.lastBaseUpdate, s !== i && (s === null ? g.firstBaseUpdate = u : s.next = u, g.lastBaseUpdate = a));
  }
  if (l !== null) {
    var p = o.baseState;
    i = 0, g = u = a = null, s = l;
    do {
      var f = s.lane, y = s.eventTime;
      if ((r & f) === f) {
        g !== null && (g = g.next = {
          eventTime: y,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var x = e, h = s;
          switch (f = t, y = n, h.tag) {
            case 1:
              if (x = h.payload, typeof x == "function") {
                p = x.call(y, p, f);
                break e;
              }
              p = x;
              break e;
            case 3:
              x.flags = x.flags & -65537 | 128;
            case 0:
              if (x = h.payload, f = typeof x == "function" ? x.call(y, p, f) : x, f == null) break e;
              p = J({}, p, f);
              break e;
            case 2:
              gt = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, f = o.effects, f === null ? o.effects = [s] : f.push(s));
      } else y = { eventTime: y, lane: f, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, g === null ? (u = g = y, a = p) : g = g.next = y, i |= f;
      if (s = s.next, s === null) {
        if (s = o.shared.pending, s === null) break;
        f = s, s = f.next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null;
      }
    } while (!0);
    if (g === null && (a = p), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = g, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        i |= o.lane, o = o.next;
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    Gt |= i, e.lanes = i, e.memoizedState = p;
  }
}
function Ca(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(N(191, o));
      o.call(r);
    }
  }
}
var _r = {}, Xe = Lt(_r), hr = Lt(_r), vr = Lt(_r);
function Ut(e) {
  if (e === _r) throw Error(N(174));
  return e;
}
function ms(e, t) {
  switch (V(vr, t), V(hr, e), V(Xe, _r), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ei(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ei(t, e);
  }
  G(Xe), V(Xe, t);
}
function Tn() {
  G(Xe), G(hr), G(vr);
}
function Rc(e) {
  Ut(vr.current);
  var t = Ut(Xe.current), n = ei(t, e.type);
  t !== n && (V(hr, e), V(Xe, n));
}
function gs(e) {
  hr.current === e && (G(Xe), G(hr));
}
var X = Lt(0);
function Lo(e) {
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
var Nl = [];
function hs() {
  for (var e = 0; e < Nl.length; e++) Nl[e]._workInProgressVersionPrimary = null;
  Nl.length = 0;
}
var io = at.ReactCurrentDispatcher, Dl = at.ReactCurrentBatchConfig, Qt = 0, Z = null, re = null, le = null, Oo = !1, tr = !1, yr = 0, hm = 0;
function ce() {
  throw Error(N(321));
}
function vs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Be(e[n], t[n])) return !1;
  return !0;
}
function ys(e, t, n, r, o, l) {
  if (Qt = l, Z = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, io.current = e === null || e.memoizedState === null ? xm : Sm, e = n(r, o), tr) {
    l = 0;
    do {
      if (tr = !1, yr = 0, 25 <= l) throw Error(N(301));
      l += 1, le = re = null, t.updateQueue = null, io.current = km, e = n(r, o);
    } while (tr);
  }
  if (io.current = zo, t = re !== null && re.next !== null, Qt = 0, le = re = Z = null, Oo = !1, t) throw Error(N(300));
  return e;
}
function ws() {
  var e = yr !== 0;
  return yr = 0, e;
}
function Qe() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return le === null ? Z.memoizedState = le = e : le = le.next = e, le;
}
function Ie() {
  if (re === null) {
    var e = Z.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = re.next;
  var t = le === null ? Z.memoizedState : le.next;
  if (t !== null) le = t, re = e;
  else {
    if (e === null) throw Error(N(310));
    re = e, e = { memoizedState: re.memoizedState, baseState: re.baseState, baseQueue: re.baseQueue, queue: re.queue, next: null }, le === null ? Z.memoizedState = le = e : le = le.next = e;
  }
  return le;
}
function wr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Pl(e) {
  var t = Ie(), n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = re, o = r.baseQueue, l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var i = o.next;
      o.next = l.next, l.next = i;
    }
    r.baseQueue = o = l, n.pending = null;
  }
  if (o !== null) {
    l = o.next, r = r.baseState;
    var s = i = null, a = null, u = l;
    do {
      var g = u.lane;
      if ((Qt & g) === g) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var p = {
          lane: g,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (s = a = p, i = r) : a = a.next = p, Z.lanes |= g, Gt |= g;
      }
      u = u.next;
    } while (u !== null && u !== l);
    a === null ? i = r : a.next = s, Be(r, t.memoizedState) || (Se = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      l = o.lane, Z.lanes |= l, Gt |= l, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function _l(e) {
  var t = Ie(), n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = o = o.next;
    do
      l = e(l, i.action), i = i.next;
    while (i !== o);
    Be(l, t.memoizedState) || (Se = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
  }
  return [l, r];
}
function Lc() {
}
function Oc(e, t) {
  var n = Z, r = Ie(), o = t(), l = !Be(r.memoizedState, o);
  if (l && (r.memoizedState = o, Se = !0), r = r.queue, xs(Ic.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || le !== null && le.memoizedState.tag & 1) {
    if (n.flags |= 2048, xr(9, jc.bind(null, n, r, o, t), void 0, null), ie === null) throw Error(N(349));
    Qt & 30 || zc(n, t, o);
  }
  return o;
}
function zc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Z.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Z.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function jc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Ac(t) && Fc(e);
}
function Ic(e, t, n) {
  return n(function() {
    Ac(t) && Fc(e);
  });
}
function Ac(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Be(e, n);
  } catch {
    return !0;
  }
}
function Fc(e) {
  var t = it(e, 1);
  t !== null && We(t, e, 1, -1);
}
function Na(e) {
  var t = Qe();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: wr, lastRenderedState: e }, t.queue = e, e = e.dispatch = wm.bind(null, Z, e), [t.memoizedState, e];
}
function xr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Z.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Z.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function bc() {
  return Ie().memoizedState;
}
function so(e, t, n, r) {
  var o = Qe();
  Z.flags |= e, o.memoizedState = xr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ko(e, t, n, r) {
  var o = Ie();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (re !== null) {
    var i = re.memoizedState;
    if (l = i.destroy, r !== null && vs(r, i.deps)) {
      o.memoizedState = xr(t, n, l, r);
      return;
    }
  }
  Z.flags |= e, o.memoizedState = xr(1 | t, n, l, r);
}
function Da(e, t) {
  return so(8390656, 8, e, t);
}
function xs(e, t) {
  return Ko(2048, 8, e, t);
}
function $c(e, t) {
  return Ko(4, 2, e, t);
}
function Uc(e, t) {
  return Ko(4, 4, e, t);
}
function Wc(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Bc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ko(4, 4, Wc.bind(null, t, e), n);
}
function Ss() {
}
function Vc(e, t) {
  var n = Ie();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vs(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Hc(e, t) {
  var n = Ie();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vs(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Qc(e, t, n) {
  return Qt & 21 ? (Be(n, t) || (n = Zu(), Z.lanes |= n, Gt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Se = !0), e.memoizedState = n);
}
function vm(e, t) {
  var n = W;
  W = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Dl.transition;
  Dl.transition = {};
  try {
    e(!1), t();
  } finally {
    W = n, Dl.transition = r;
  }
}
function Gc() {
  return Ie().memoizedState;
}
function ym(e, t, n) {
  var r = Dt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Kc(e)) Yc(t, n);
  else if (n = Tc(e, t, n, r), n !== null) {
    var o = ve();
    We(n, e, r, o), Xc(n, t, r);
  }
}
function wm(e, t, n) {
  var r = Dt(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Kc(e)) Yc(t, o);
  else {
    var l = e.alternate;
    if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
      var i = t.lastRenderedState, s = l(i, n);
      if (o.hasEagerState = !0, o.eagerState = s, Be(s, i)) {
        var a = t.interleaved;
        a === null ? (o.next = o, fs(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = Tc(e, t, o, r), n !== null && (o = ve(), We(n, e, r, o), Xc(n, t, r));
  }
}
function Kc(e) {
  var t = e.alternate;
  return e === Z || t !== null && t === Z;
}
function Yc(e, t) {
  tr = Oo = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Xc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ji(e, n);
  }
}
var zo = { readContext: je, useCallback: ce, useContext: ce, useEffect: ce, useImperativeHandle: ce, useInsertionEffect: ce, useLayoutEffect: ce, useMemo: ce, useReducer: ce, useRef: ce, useState: ce, useDebugValue: ce, useDeferredValue: ce, useTransition: ce, useMutableSource: ce, useSyncExternalStore: ce, useId: ce, unstable_isNewReconciler: !1 }, xm = { readContext: je, useCallback: function(e, t) {
  return Qe().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: je, useEffect: Da, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, so(
    4194308,
    4,
    Wc.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return so(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return so(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Qe();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Qe();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = ym.bind(null, Z, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Qe();
  return e = { current: e }, t.memoizedState = e;
}, useState: Na, useDebugValue: Ss, useDeferredValue: function(e) {
  return Qe().memoizedState = e;
}, useTransition: function() {
  var e = Na(!1), t = e[0];
  return e = vm.bind(null, e[1]), Qe().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Z, o = Qe();
  if (K) {
    if (n === void 0) throw Error(N(407));
    n = n();
  } else {
    if (n = t(), ie === null) throw Error(N(349));
    Qt & 30 || zc(r, t, n);
  }
  o.memoizedState = n;
  var l = { value: n, getSnapshot: t };
  return o.queue = l, Da(Ic.bind(
    null,
    r,
    l,
    e
  ), [e]), r.flags |= 2048, xr(9, jc.bind(null, r, l, n, t), void 0, null), n;
}, useId: function() {
  var e = Qe(), t = ie.identifierPrefix;
  if (K) {
    var n = nt, r = tt;
    n = (r & ~(1 << 32 - Ue(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = yr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = hm++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Sm = {
  readContext: je,
  useCallback: Vc,
  useContext: je,
  useEffect: xs,
  useImperativeHandle: Bc,
  useInsertionEffect: $c,
  useLayoutEffect: Uc,
  useMemo: Hc,
  useReducer: Pl,
  useRef: bc,
  useState: function() {
    return Pl(wr);
  },
  useDebugValue: Ss,
  useDeferredValue: function(e) {
    var t = Ie();
    return Qc(t, re.memoizedState, e);
  },
  useTransition: function() {
    var e = Pl(wr)[0], t = Ie().memoizedState;
    return [e, t];
  },
  useMutableSource: Lc,
  useSyncExternalStore: Oc,
  useId: Gc,
  unstable_isNewReconciler: !1
}, km = { readContext: je, useCallback: Vc, useContext: je, useEffect: xs, useImperativeHandle: Bc, useInsertionEffect: $c, useLayoutEffect: Uc, useMemo: Hc, useReducer: _l, useRef: bc, useState: function() {
  return _l(wr);
}, useDebugValue: Ss, useDeferredValue: function(e) {
  var t = Ie();
  return re === null ? t.memoizedState = e : Qc(t, re.memoizedState, e);
}, useTransition: function() {
  var e = _l(wr)[0], t = Ie().memoizedState;
  return [e, t];
}, useMutableSource: Lc, useSyncExternalStore: Oc, useId: Gc, unstable_isNewReconciler: !1 };
function Fe(e, t) {
  if (e && e.defaultProps) {
    t = J({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Si(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : J({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Yo = { isMounted: function(e) {
  return (e = e._reactInternals) ? Zt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ve(), o = Dt(e), l = rt(r, o);
  l.payload = t, n != null && (l.callback = n), t = Ct(e, l, o), t !== null && (We(t, e, o, r), lo(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ve(), o = Dt(e), l = rt(r, o);
  l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Ct(e, l, o), t !== null && (We(t, e, o, r), lo(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ve(), r = Dt(e), o = rt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Ct(e, o, r), t !== null && (We(t, e, r, n), lo(t, e, r));
} };
function Pa(e, t, n, r, o, l, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !fr(n, r) || !fr(o, l) : !0;
}
function Zc(e, t, n) {
  var r = !1, o = Mt, l = t.contextType;
  return typeof l == "object" && l !== null ? l = je(l) : (o = Ee(t) ? Vt : me.current, r = t.contextTypes, l = (r = r != null) ? Dn(e, o) : Mt), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Yo, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
}
function _a(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Yo.enqueueReplaceState(t, t.state, null);
}
function ki(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, ps(e);
  var l = t.contextType;
  typeof l == "object" && l !== null ? o.context = je(l) : (l = Ee(t) ? Vt : me.current, o.context = Dn(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (Si(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Yo.enqueueReplaceState(o, o.state, null), Ro(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Mn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Xf(r), r = r.return;
    while (r);
    var o = n;
  } catch (l) {
    o = `
Error generating stack: ` + l.message + `
` + l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Tl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ei(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Em = typeof WeakMap == "function" ? WeakMap : Map;
function Jc(e, t, n) {
  n = rt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Io || (Io = !0, Oi = r), Ei(e, t);
  }, n;
}
function qc(e, t, n) {
  n = rt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Ei(e, t);
    };
  }
  var l = e.stateNode;
  return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
    Ei(e, t), typeof r != "function" && (Nt === null ? Nt = /* @__PURE__ */ new Set([this]) : Nt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Ta(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Em();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = Am.bind(null, e, t, n), t.then(e, e));
}
function Ma(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ra(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = rt(-1, 1), t.tag = 2, Ct(n, t, 1))), n.lanes |= 1), e);
}
var Cm = at.ReactCurrentOwner, Se = !1;
function he(e, t, n, r) {
  t.child = e === null ? _c(t, null, n, r) : _n(t, e.child, n, r);
}
function La(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return Sn(t, o), r = ys(e, t, n, r, l, o), n = ws(), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, st(e, t, o)) : (K && n && is(t), t.flags |= 1, he(e, t, r, o), t.child);
}
function Oa(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" && !Ts(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, ed(e, t, l, r, o)) : (e = fo(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (l = e.child, !(e.lanes & o)) {
    var i = l.memoizedProps;
    if (n = n.compare, n = n !== null ? n : fr, n(i, r) && e.ref === t.ref) return st(e, t, o);
  }
  return t.flags |= 1, e = Pt(l, r), e.ref = t.ref, e.return = t, t.child = e;
}
function ed(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (fr(l, r) && e.ref === t.ref) if (Se = !1, t.pendingProps = r = l, (e.lanes & o) !== 0) e.flags & 131072 && (Se = !0);
    else return t.lanes = e.lanes, st(e, t, o);
  }
  return Ci(e, t, n, r, o);
}
function td(e, t, n) {
  var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, V(hn, Ne), Ne |= n;
  else {
    if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, V(hn, Ne), Ne |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = l !== null ? l.baseLanes : n, V(hn, Ne), Ne |= r;
  }
  else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, V(hn, Ne), Ne |= r;
  return he(e, t, o, n), t.child;
}
function nd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ci(e, t, n, r, o) {
  var l = Ee(n) ? Vt : me.current;
  return l = Dn(t, l), Sn(t, o), n = ys(e, t, n, r, l, o), r = ws(), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, st(e, t, o)) : (K && r && is(t), t.flags |= 1, he(e, t, n, o), t.child);
}
function za(e, t, n, r, o) {
  if (Ee(n)) {
    var l = !0;
    Do(t);
  } else l = !1;
  if (Sn(t, o), t.stateNode === null) ao(e, t), Zc(t, n, r), ki(t, n, r, o), r = !0;
  else if (e === null) {
    var i = t.stateNode, s = t.memoizedProps;
    i.props = s;
    var a = i.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = je(u) : (u = Ee(n) ? Vt : me.current, u = Dn(t, u));
    var g = n.getDerivedStateFromProps, p = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    p || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== r || a !== u) && _a(t, i, r, u), gt = !1;
    var f = t.memoizedState;
    i.state = f, Ro(t, r, i, o), a = t.memoizedState, s !== r || f !== a || ke.current || gt ? (typeof g == "function" && (Si(t, n, g, r), a = t.memoizedState), (s = gt || Pa(t, n, s, r, f, a, u)) ? (p || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), i.props = r, i.state = a, i.context = u, r = s) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Mc(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : Fe(t.type, s), i.props = u, p = t.pendingProps, f = i.context, a = n.contextType, typeof a == "object" && a !== null ? a = je(a) : (a = Ee(n) ? Vt : me.current, a = Dn(t, a));
    var y = n.getDerivedStateFromProps;
    (g = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== p || f !== a) && _a(t, i, r, a), gt = !1, f = t.memoizedState, i.state = f, Ro(t, r, i, o);
    var x = t.memoizedState;
    s !== p || f !== x || ke.current || gt ? (typeof y == "function" && (Si(t, n, y, r), x = t.memoizedState), (u = gt || Pa(t, n, u, r, f, x, a) || !1) ? (g || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, x, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, x, a)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), i.props = r, i.state = x, i.context = a, r = u) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ni(e, t, n, r, l, o);
}
function Ni(e, t, n, r, o, l) {
  nd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && wa(t, n, !1), st(e, t, l);
  r = t.stateNode, Cm.current = t;
  var s = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = _n(t, e.child, null, l), t.child = _n(t, null, s, l)) : he(e, t, s, l), t.memoizedState = r.state, o && wa(t, n, !0), t.child;
}
function rd(e) {
  var t = e.stateNode;
  t.pendingContext ? ya(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ya(e, t.context, !1), ms(e, t.containerInfo);
}
function ja(e, t, n, r, o) {
  return Pn(), as(o), t.flags |= 256, he(e, t, n, r), t.child;
}
var Di = { dehydrated: null, treeContext: null, retryLane: 0 };
function Pi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function od(e, t, n) {
  var r = t.pendingProps, o = X.current, l = !1, i = (t.flags & 128) !== 0, s;
  if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), V(X, o & 1), e === null)
    return wi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = { mode: "hidden", children: i }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = Jo(i, r, 0, null), e = Bt(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Pi(n), t.memoizedState = Di, e) : ks(t, i));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return Nm(e, t, i, r, s, o, n);
  if (l) {
    l = r.fallback, i = t.mode, o = e.child, s = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Pt(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? l = Pt(s, l) : (l = Bt(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? Pi(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = Di, r;
  }
  return l = e.child, e = l.sibling, r = Pt(l, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ks(e, t) {
  return t = Jo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Vr(e, t, n, r) {
  return r !== null && as(r), _n(t, e.child, null, n), e = ks(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Nm(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Tl(Error(N(422))), Vr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = Jo({ mode: "visible", children: r.children }, o, 0, null), l = Bt(l, o, i, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && _n(t, e.child, null, i), t.child.memoizedState = Pi(i), t.memoizedState = Di, l);
  if (!(t.mode & 1)) return Vr(e, t, i, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
    return r = s, l = Error(N(419)), r = Tl(l, r, void 0), Vr(e, t, i, r);
  }
  if (s = (i & e.childLanes) !== 0, Se || s) {
    if (r = ie, r !== null) {
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
      o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, it(e, o), We(r, e, o, -1));
    }
    return _s(), r = Tl(Error(N(421))), Vr(e, t, i, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Fm.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, De = Et(o.nextSibling), Pe = t, K = !0, $e = null, e !== null && (Re[Le++] = tt, Re[Le++] = nt, Re[Le++] = Ht, tt = e.id, nt = e.overflow, Ht = t), t = ks(t, r.children), t.flags |= 4096, t);
}
function Ia(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), xi(e.return, t, n);
}
function Ml(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = o);
}
function ld(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, l = r.tail;
  if (he(e, t, r.children, n), r = X.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Ia(e, n, t);
      else if (e.tag === 19) Ia(e, n, t);
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
  if (V(X, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Lo(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Ml(t, !1, o, n, l);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && Lo(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Ml(t, !0, n, null, l);
      break;
    case "together":
      Ml(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function ao(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function st(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Gt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (e = t.child, n = Pt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Pt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Dm(e, t, n) {
  switch (t.tag) {
    case 3:
      rd(t), Pn();
      break;
    case 5:
      Rc(t);
      break;
    case 1:
      Ee(t.type) && Do(t);
      break;
    case 4:
      ms(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      V(To, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (V(X, X.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? od(e, t, n) : (V(X, X.current & 1), e = st(e, t, n), e !== null ? e.sibling : null);
      V(X, X.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return ld(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), V(X, X.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, td(e, t, n);
  }
  return st(e, t, n);
}
var id, _i, sd, ad;
id = function(e, t) {
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
_i = function() {
};
sd = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Ut(Xe.current);
    var l = null;
    switch (n) {
      case "input":
        o = Xl(e, o), r = Xl(e, r), l = [];
        break;
      case "select":
        o = J({}, o, { value: void 0 }), r = J({}, r, { value: void 0 }), l = [];
        break;
      case "textarea":
        o = ql(e, o), r = ql(e, r), l = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Co);
    }
    ti(n, r);
    var i;
    n = null;
    for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
      var s = o[u];
      for (i in s) s.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (lr.hasOwnProperty(u) ? l || (l = []) : (l = l || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (s = o != null ? o[u] : void 0, r.hasOwnProperty(u) && a !== s && (a != null || s != null)) if (u === "style") if (s) {
        for (i in s) !s.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in a) a.hasOwnProperty(i) && s[i] !== a[i] && (n || (n = {}), n[i] = a[i]);
      } else n || (l || (l = []), l.push(
        u,
        n
      )), n = a;
      else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (l = l || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (l = l || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (lr.hasOwnProperty(u) ? (a != null && u === "onScroll" && Q("scroll", e), l || s === a || (l = [])) : (l = l || []).push(u, a));
    }
    n && (l = l || []).push("style", n);
    var u = l;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
ad = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Wn(e, t) {
  if (!K) switch (e.tailMode) {
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
function de(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Pm(e, t, n) {
  var r = t.pendingProps;
  switch (ss(t), t.tag) {
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
      return de(t), null;
    case 1:
      return Ee(t.type) && No(), de(t), null;
    case 3:
      return r = t.stateNode, Tn(), G(ke), G(me), hs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Wr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, $e !== null && (Ii($e), $e = null))), _i(e, t), de(t), null;
    case 5:
      gs(t);
      var o = Ut(vr.current);
      if (n = t.type, e !== null && t.stateNode != null) sd(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return de(t), null;
        }
        if (e = Ut(Xe.current), Wr(t)) {
          r = t.stateNode, n = t.type;
          var l = t.memoizedProps;
          switch (r[Ge] = t, r[gr] = l, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              Q("cancel", r), Q("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Q("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Yn.length; o++) Q(Yn[o], r);
              break;
            case "source":
              Q("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Q(
                "error",
                r
              ), Q("load", r);
              break;
            case "details":
              Q("toggle", r);
              break;
            case "input":
              Hs(r, l), Q("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!l.multiple }, Q("invalid", r);
              break;
            case "textarea":
              Gs(r, l), Q("invalid", r);
          }
          ti(n, l), o = null;
          for (var i in l) if (l.hasOwnProperty(i)) {
            var s = l[i];
            i === "children" ? typeof s == "string" ? r.textContent !== s && (l.suppressHydrationWarning !== !0 && Ur(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (l.suppressHydrationWarning !== !0 && Ur(
              r.textContent,
              s,
              e
            ), o = ["children", "" + s]) : lr.hasOwnProperty(i) && s != null && i === "onScroll" && Q("scroll", r);
          }
          switch (n) {
            case "input":
              Or(r), Qs(r, l, !0);
              break;
            case "textarea":
              Or(r), Ks(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = Co);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Iu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Ge] = t, e[gr] = r, id(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = ni(n, r), n) {
              case "dialog":
                Q("cancel", e), Q("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Q("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Yn.length; o++) Q(Yn[o], e);
                o = r;
                break;
              case "source":
                Q("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                Q(
                  "error",
                  e
                ), Q("load", e), o = r;
                break;
              case "details":
                Q("toggle", e), o = r;
                break;
              case "input":
                Hs(e, r), o = Xl(e, r), Q("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = J({}, r, { value: void 0 }), Q("invalid", e);
                break;
              case "textarea":
                Gs(e, r), o = ql(e, r), Q("invalid", e);
                break;
              default:
                o = r;
            }
            ti(n, o), s = o;
            for (l in s) if (s.hasOwnProperty(l)) {
              var a = s[l];
              l === "style" ? bu(e, a) : l === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Au(e, a)) : l === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && ir(e, a) : typeof a == "number" && ir(e, "" + a) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (lr.hasOwnProperty(l) ? a != null && l === "onScroll" && Q("scroll", e) : a != null && Qi(e, l, a, i));
            }
            switch (n) {
              case "input":
                Or(e), Qs(e, r, !1);
                break;
              case "textarea":
                Or(e), Ks(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Tt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, l = r.value, l != null ? vn(e, !!r.multiple, l, !1) : r.defaultValue != null && vn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Co);
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
      return de(t), null;
    case 6:
      if (e && t.stateNode != null) ad(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (n = Ut(vr.current), Ut(Xe.current), Wr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ge] = t, (l = r.nodeValue !== n) && (e = Pe, e !== null)) switch (e.tag) {
            case 3:
              Ur(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Ur(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          l && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ge] = t, t.stateNode = r;
      }
      return de(t), null;
    case 13:
      if (G(X), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (K && De !== null && t.mode & 1 && !(t.flags & 128)) Dc(), Pn(), t.flags |= 98560, l = !1;
        else if (l = Wr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!l) throw Error(N(318));
            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(N(317));
            l[Ge] = t;
          } else Pn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          de(t), l = !1;
        } else $e !== null && (Ii($e), $e = null), l = !0;
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || X.current & 1 ? oe === 0 && (oe = 3) : _s())), t.updateQueue !== null && (t.flags |= 4), de(t), null);
    case 4:
      return Tn(), _i(e, t), e === null && pr(t.stateNode.containerInfo), de(t), null;
    case 10:
      return ds(t.type._context), de(t), null;
    case 17:
      return Ee(t.type) && No(), de(t), null;
    case 19:
      if (G(X), l = t.memoizedState, l === null) return de(t), null;
      if (r = (t.flags & 128) !== 0, i = l.rendering, i === null) if (r) Wn(l, !1);
      else {
        if (oe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = Lo(e), i !== null) {
            for (t.flags |= 128, Wn(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return V(X, X.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        l.tail !== null && ee() > Rn && (t.flags |= 128, r = !0, Wn(l, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Lo(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Wn(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !K) return de(t), null;
        } else 2 * ee() - l.renderingStartTime > Rn && n !== 1073741824 && (t.flags |= 128, r = !0, Wn(l, !1), t.lanes = 4194304);
        l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i);
      }
      return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = ee(), t.sibling = null, n = X.current, V(X, r ? n & 1 | 2 : n & 1), t) : (de(t), null);
    case 22:
    case 23:
      return Ps(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ne & 1073741824 && (de(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : de(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function _m(e, t) {
  switch (ss(t), t.tag) {
    case 1:
      return Ee(t.type) && No(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Tn(), G(ke), G(me), hs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return gs(t), null;
    case 13:
      if (G(X), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(N(340));
        Pn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return G(X), null;
    case 4:
      return Tn(), null;
    case 10:
      return ds(t.type._context), null;
    case 22:
    case 23:
      return Ps(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Hr = !1, pe = !1, Tm = typeof WeakSet == "function" ? WeakSet : Set, M = null;
function gn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    q(e, t, r);
  }
  else n.current = null;
}
function Ti(e, t, n) {
  try {
    n();
  } catch (r) {
    q(e, t, r);
  }
}
var Aa = !1;
function Mm(e, t) {
  if (fi = So, e = pc(), ls(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var o = r.anchorOffset, l = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, l.nodeType;
        } catch {
          n = null;
          break e;
        }
        var i = 0, s = -1, a = -1, u = 0, g = 0, p = e, f = null;
        t: for (; ; ) {
          for (var y; p !== n || o !== 0 && p.nodeType !== 3 || (s = i + o), p !== l || r !== 0 && p.nodeType !== 3 || (a = i + r), p.nodeType === 3 && (i += p.nodeValue.length), (y = p.firstChild) !== null; )
            f = p, p = y;
          for (; ; ) {
            if (p === e) break t;
            if (f === n && ++u === o && (s = i), f === l && ++g === r && (a = i), (y = p.nextSibling) !== null) break;
            p = f, f = p.parentNode;
          }
          p = y;
        }
        n = s === -1 || a === -1 ? null : { start: s, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (pi = { focusedElem: e, selectionRange: n }, So = !1, M = t; M !== null; ) if (t = M, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, M = e;
  else for (; M !== null; ) {
    t = M;
    try {
      var x = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (x !== null) {
            var h = x.memoizedProps, k = x.memoizedState, d = t.stateNode, c = d.getSnapshotBeforeUpdate(t.elementType === t.type ? h : Fe(t.type, h), k);
            d.__reactInternalSnapshotBeforeUpdate = c;
          }
          break;
        case 3:
          var m = t.stateNode.containerInfo;
          m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(N(163));
      }
    } catch (w) {
      q(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, M = e;
      break;
    }
    M = t.return;
  }
  return x = Aa, Aa = !1, x;
}
function nr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        o.destroy = void 0, l !== void 0 && Ti(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Xo(e, t) {
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
function Mi(e) {
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
function ud(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, ud(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ge], delete t[gr], delete t[hi], delete t[fm], delete t[pm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function cd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Fa(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || cd(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ri(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Co));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ri(e, t, n), e = e.sibling; e !== null; ) Ri(e, t, n), e = e.sibling;
}
function Li(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Li(e, t, n), e = e.sibling; e !== null; ) Li(e, t, n), e = e.sibling;
}
var se = null, be = !1;
function ct(e, t, n) {
  for (n = n.child; n !== null; ) dd(e, t, n), n = n.sibling;
}
function dd(e, t, n) {
  if (Ye && typeof Ye.onCommitFiberUnmount == "function") try {
    Ye.onCommitFiberUnmount(Wo, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      pe || gn(n, t);
    case 6:
      var r = se, o = be;
      se = null, ct(e, t, n), se = r, be = o, se !== null && (be ? (e = se, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : se.removeChild(n.stateNode));
      break;
    case 18:
      se !== null && (be ? (e = se, n = n.stateNode, e.nodeType === 8 ? El(e.parentNode, n) : e.nodeType === 1 && El(e, n), cr(e)) : El(se, n.stateNode));
      break;
    case 4:
      r = se, o = be, se = n.stateNode.containerInfo, be = !0, ct(e, t, n), se = r, be = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!pe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var l = o, i = l.destroy;
          l = l.tag, i !== void 0 && (l & 2 || l & 4) && Ti(n, t, i), o = o.next;
        } while (o !== r);
      }
      ct(e, t, n);
      break;
    case 1:
      if (!pe && (gn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (s) {
        q(n, t, s);
      }
      ct(e, t, n);
      break;
    case 21:
      ct(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (pe = (r = pe) || n.memoizedState !== null, ct(e, t, n), pe = r) : ct(e, t, n);
      break;
    default:
      ct(e, t, n);
  }
}
function ba(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Tm()), t.forEach(function(r) {
      var o = bm.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Ae(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var l = e, i = t, s = i;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            se = s.stateNode, be = !1;
            break e;
          case 3:
            se = s.stateNode.containerInfo, be = !0;
            break e;
          case 4:
            se = s.stateNode.containerInfo, be = !0;
            break e;
        }
        s = s.return;
      }
      if (se === null) throw Error(N(160));
      dd(l, i, o), se = null, be = !1;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (u) {
      q(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) fd(t, e), t = t.sibling;
}
function fd(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ae(t, e), He(e), r & 4) {
        try {
          nr(3, e, e.return), Xo(3, e);
        } catch (h) {
          q(e, e.return, h);
        }
        try {
          nr(5, e, e.return);
        } catch (h) {
          q(e, e.return, h);
        }
      }
      break;
    case 1:
      Ae(t, e), He(e), r & 512 && n !== null && gn(n, n.return);
      break;
    case 5:
      if (Ae(t, e), He(e), r & 512 && n !== null && gn(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          ir(o, "");
        } catch (h) {
          q(e, e.return, h);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var l = e.memoizedProps, i = n !== null ? n.memoizedProps : l, s = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          s === "input" && l.type === "radio" && l.name != null && zu(o, l), ni(s, i);
          var u = ni(s, l);
          for (i = 0; i < a.length; i += 2) {
            var g = a[i], p = a[i + 1];
            g === "style" ? bu(o, p) : g === "dangerouslySetInnerHTML" ? Au(o, p) : g === "children" ? ir(o, p) : Qi(o, g, p, u);
          }
          switch (s) {
            case "input":
              Zl(o, l);
              break;
            case "textarea":
              ju(o, l);
              break;
            case "select":
              var f = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!l.multiple;
              var y = l.value;
              y != null ? vn(o, !!l.multiple, y, !1) : f !== !!l.multiple && (l.defaultValue != null ? vn(
                o,
                !!l.multiple,
                l.defaultValue,
                !0
              ) : vn(o, !!l.multiple, l.multiple ? [] : "", !1));
          }
          o[gr] = l;
        } catch (h) {
          q(e, e.return, h);
        }
      }
      break;
    case 6:
      if (Ae(t, e), He(e), r & 4) {
        if (e.stateNode === null) throw Error(N(162));
        o = e.stateNode, l = e.memoizedProps;
        try {
          o.nodeValue = l;
        } catch (h) {
          q(e, e.return, h);
        }
      }
      break;
    case 3:
      if (Ae(t, e), He(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        cr(t.containerInfo);
      } catch (h) {
        q(e, e.return, h);
      }
      break;
    case 4:
      Ae(t, e), He(e);
      break;
    case 13:
      Ae(t, e), He(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (Ns = ee())), r & 4 && ba(e);
      break;
    case 22:
      if (g = n !== null && n.memoizedState !== null, e.mode & 1 ? (pe = (u = pe) || g, Ae(t, e), pe = u) : Ae(t, e), He(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !g && e.mode & 1) for (M = e, g = e.child; g !== null; ) {
          for (p = M = g; M !== null; ) {
            switch (f = M, y = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                nr(4, f, f.return);
                break;
              case 1:
                gn(f, f.return);
                var x = f.stateNode;
                if (typeof x.componentWillUnmount == "function") {
                  r = f, n = f.return;
                  try {
                    t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount();
                  } catch (h) {
                    q(r, n, h);
                  }
                }
                break;
              case 5:
                gn(f, f.return);
                break;
              case 22:
                if (f.memoizedState !== null) {
                  Ua(p);
                  continue;
                }
            }
            y !== null ? (y.return = f, M = y) : Ua(p);
          }
          g = g.sibling;
        }
        e: for (g = null, p = e; ; ) {
          if (p.tag === 5) {
            if (g === null) {
              g = p;
              try {
                o = p.stateNode, u ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (s = p.stateNode, a = p.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = Fu("display", i));
              } catch (h) {
                q(e, e.return, h);
              }
            }
          } else if (p.tag === 6) {
            if (g === null) try {
              p.stateNode.nodeValue = u ? "" : p.memoizedProps;
            } catch (h) {
              q(e, e.return, h);
            }
          } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
            p.child.return = p, p = p.child;
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            g === p && (g = null), p = p.return;
          }
          g === p && (g = null), p.sibling.return = p.return, p = p.sibling;
        }
      }
      break;
    case 19:
      Ae(t, e), He(e), r & 4 && ba(e);
      break;
    case 21:
      break;
    default:
      Ae(
        t,
        e
      ), He(e);
  }
}
function He(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (cd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ir(o, ""), r.flags &= -33);
          var l = Fa(e);
          Li(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, s = Fa(e);
          Ri(e, s, i);
          break;
        default:
          throw Error(N(161));
      }
    } catch (a) {
      q(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Rm(e, t, n) {
  M = e, pd(e);
}
function pd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var o = M, l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Hr;
      if (!i) {
        var s = o.alternate, a = s !== null && s.memoizedState !== null || pe;
        s = Hr;
        var u = pe;
        if (Hr = i, (pe = a) && !u) for (M = o; M !== null; ) i = M, a = i.child, i.tag === 22 && i.memoizedState !== null ? Wa(o) : a !== null ? (a.return = i, M = a) : Wa(o);
        for (; l !== null; ) M = l, pd(l), l = l.sibling;
        M = o, Hr = s, pe = u;
      }
      $a(e);
    } else o.subtreeFlags & 8772 && l !== null ? (l.return = o, M = l) : $a(e);
  }
}
function $a(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            pe || Xo(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !pe) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : Fe(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var l = t.updateQueue;
            l !== null && Ca(t, l, r);
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
              Ca(t, i, n);
            }
            break;
          case 5:
            var s = t.stateNode;
            if (n === null && t.flags & 4) {
              n = s;
              var a = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a.autoFocus && n.focus();
                  break;
                case "img":
                  a.src && (n.src = a.src);
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
                var g = u.memoizedState;
                if (g !== null) {
                  var p = g.dehydrated;
                  p !== null && cr(p);
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
            throw Error(N(163));
        }
        pe || t.flags & 512 && Mi(t);
      } catch (f) {
        q(t, t.return, f);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, M = n;
      break;
    }
    M = t.return;
  }
}
function Ua(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, M = n;
      break;
    }
    M = t.return;
  }
}
function Wa(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Xo(4, t);
          } catch (a) {
            q(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              q(t, o, a);
            }
          }
          var l = t.return;
          try {
            Mi(t);
          } catch (a) {
            q(t, l, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Mi(t);
          } catch (a) {
            q(t, i, a);
          }
      }
    } catch (a) {
      q(t, t.return, a);
    }
    if (t === e) {
      M = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, M = s;
      break;
    }
    M = t.return;
  }
}
var Lm = Math.ceil, jo = at.ReactCurrentDispatcher, Es = at.ReactCurrentOwner, ze = at.ReactCurrentBatchConfig, F = 0, ie = null, ne = null, ae = 0, Ne = 0, hn = Lt(0), oe = 0, Sr = null, Gt = 0, Zo = 0, Cs = 0, rr = null, xe = null, Ns = 0, Rn = 1 / 0, qe = null, Io = !1, Oi = null, Nt = null, Qr = !1, wt = null, Ao = 0, or = 0, zi = null, uo = -1, co = 0;
function ve() {
  return F & 6 ? ee() : uo !== -1 ? uo : uo = ee();
}
function Dt(e) {
  return e.mode & 1 ? F & 2 && ae !== 0 ? ae & -ae : gm.transition !== null ? (co === 0 && (co = Zu()), co) : (e = W, e !== 0 || (e = window.event, e = e === void 0 ? 16 : oc(e.type)), e) : 1;
}
function We(e, t, n, r) {
  if (50 < or) throw or = 0, zi = null, Error(N(185));
  Nr(e, n, r), (!(F & 2) || e !== ie) && (e === ie && (!(F & 2) && (Zo |= n), oe === 4 && vt(e, ae)), Ce(e, r), n === 1 && F === 0 && !(t.mode & 1) && (Rn = ee() + 500, Go && Ot()));
}
function Ce(e, t) {
  var n = e.callbackNode;
  gp(e, t);
  var r = xo(e, e === ie ? ae : 0);
  if (r === 0) n !== null && Zs(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Zs(n), t === 1) e.tag === 0 ? mm(Ba.bind(null, e)) : Ec(Ba.bind(null, e)), cm(function() {
      !(F & 6) && Ot();
    }), n = null;
    else {
      switch (Ju(r)) {
        case 1:
          n = Zi;
          break;
        case 4:
          n = Yu;
          break;
        case 16:
          n = wo;
          break;
        case 536870912:
          n = Xu;
          break;
        default:
          n = wo;
      }
      n = Sd(n, md.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function md(e, t) {
  if (uo = -1, co = 0, F & 6) throw Error(N(327));
  var n = e.callbackNode;
  if (kn() && e.callbackNode !== n) return null;
  var r = xo(e, e === ie ? ae : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Fo(e, r);
  else {
    t = r;
    var o = F;
    F |= 2;
    var l = hd();
    (ie !== e || ae !== t) && (qe = null, Rn = ee() + 500, Wt(e, t));
    do
      try {
        jm();
        break;
      } catch (s) {
        gd(e, s);
      }
    while (!0);
    cs(), jo.current = l, F = o, ne !== null ? t = 0 : (ie = null, ae = 0, t = oe);
  }
  if (t !== 0) {
    if (t === 2 && (o = si(e), o !== 0 && (r = o, t = ji(e, o))), t === 1) throw n = Sr, Wt(e, 0), vt(e, r), Ce(e, ee()), n;
    if (t === 6) vt(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !Om(o) && (t = Fo(e, r), t === 2 && (l = si(e), l !== 0 && (r = l, t = ji(e, l))), t === 1)) throw n = Sr, Wt(e, 0), vt(e, r), Ce(e, ee()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          Ft(e, xe, qe);
          break;
        case 3:
          if (vt(e, r), (r & 130023424) === r && (t = Ns + 500 - ee(), 10 < t)) {
            if (xo(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              ve(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = gi(Ft.bind(null, e, xe, qe), t);
            break;
          }
          Ft(e, xe, qe);
          break;
        case 4:
          if (vt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - Ue(r);
            l = 1 << i, i = t[i], i > o && (o = i), r &= ~l;
          }
          if (r = o, r = ee() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Lm(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = gi(Ft.bind(null, e, xe, qe), r);
            break;
          }
          Ft(e, xe, qe);
          break;
        case 5:
          Ft(e, xe, qe);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return Ce(e, ee()), e.callbackNode === n ? md.bind(null, e) : null;
}
function ji(e, t) {
  var n = rr;
  return e.current.memoizedState.isDehydrated && (Wt(e, t).flags |= 256), e = Fo(e, t), e !== 2 && (t = xe, xe = n, t !== null && Ii(t)), e;
}
function Ii(e) {
  xe === null ? xe = e : xe.push.apply(xe, e);
}
function Om(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], l = o.getSnapshot;
        o = o.value;
        try {
          if (!Be(l(), o)) return !1;
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
function vt(e, t) {
  for (t &= ~Cs, t &= ~Zo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Ue(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ba(e) {
  if (F & 6) throw Error(N(327));
  kn();
  var t = xo(e, 0);
  if (!(t & 1)) return Ce(e, ee()), null;
  var n = Fo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = si(e);
    r !== 0 && (t = r, n = ji(e, r));
  }
  if (n === 1) throw n = Sr, Wt(e, 0), vt(e, t), Ce(e, ee()), n;
  if (n === 6) throw Error(N(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ft(e, xe, qe), Ce(e, ee()), null;
}
function Ds(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    F = n, F === 0 && (Rn = ee() + 500, Go && Ot());
  }
}
function Kt(e) {
  wt !== null && wt.tag === 0 && !(F & 6) && kn();
  var t = F;
  F |= 1;
  var n = ze.transition, r = W;
  try {
    if (ze.transition = null, W = 1, e) return e();
  } finally {
    W = r, ze.transition = n, F = t, !(F & 6) && Ot();
  }
}
function Ps() {
  Ne = hn.current, G(hn);
}
function Wt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, um(n)), ne !== null) for (n = ne.return; n !== null; ) {
    var r = n;
    switch (ss(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && No();
        break;
      case 3:
        Tn(), G(ke), G(me), hs();
        break;
      case 5:
        gs(r);
        break;
      case 4:
        Tn();
        break;
      case 13:
        G(X);
        break;
      case 19:
        G(X);
        break;
      case 10:
        ds(r.type._context);
        break;
      case 22:
      case 23:
        Ps();
    }
    n = n.return;
  }
  if (ie = e, ne = e = Pt(e.current, null), ae = Ne = t, oe = 0, Sr = null, Cs = Zo = Gt = 0, xe = rr = null, $t !== null) {
    for (t = 0; t < $t.length; t++) if (n = $t[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, l = n.pending;
      if (l !== null) {
        var i = l.next;
        l.next = o, r.next = i;
      }
      n.pending = r;
    }
    $t = null;
  }
  return e;
}
function gd(e, t) {
  do {
    var n = ne;
    try {
      if (cs(), io.current = zo, Oo) {
        for (var r = Z.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Oo = !1;
      }
      if (Qt = 0, le = re = Z = null, tr = !1, yr = 0, Es.current = null, n === null || n.return === null) {
        oe = 1, Sr = t, ne = null;
        break;
      }
      e: {
        var l = e, i = n.return, s = n, a = t;
        if (t = ae, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, g = s, p = g.tag;
          if (!(g.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var f = g.alternate;
            f ? (g.updateQueue = f.updateQueue, g.memoizedState = f.memoizedState, g.lanes = f.lanes) : (g.updateQueue = null, g.memoizedState = null);
          }
          var y = Ma(i);
          if (y !== null) {
            y.flags &= -257, Ra(y, i, s, l, t), y.mode & 1 && Ta(l, u, t), t = y, a = u;
            var x = t.updateQueue;
            if (x === null) {
              var h = /* @__PURE__ */ new Set();
              h.add(a), t.updateQueue = h;
            } else x.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Ta(l, u, t), _s();
              break e;
            }
            a = Error(N(426));
          }
        } else if (K && s.mode & 1) {
          var k = Ma(i);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256), Ra(k, i, s, l, t), as(Mn(a, s));
            break e;
          }
        }
        l = a = Mn(a, s), oe !== 4 && (oe = 2), rr === null ? rr = [l] : rr.push(l), l = i;
        do {
          switch (l.tag) {
            case 3:
              l.flags |= 65536, t &= -t, l.lanes |= t;
              var d = Jc(l, a, t);
              Ea(l, d);
              break e;
            case 1:
              s = a;
              var c = l.type, m = l.stateNode;
              if (!(l.flags & 128) && (typeof c.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Nt === null || !Nt.has(m)))) {
                l.flags |= 65536, t &= -t, l.lanes |= t;
                var w = qc(l, s, t);
                Ea(l, w);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      yd(n);
    } catch (E) {
      t = E, ne === n && n !== null && (ne = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function hd() {
  var e = jo.current;
  return jo.current = zo, e === null ? zo : e;
}
function _s() {
  (oe === 0 || oe === 3 || oe === 2) && (oe = 4), ie === null || !(Gt & 268435455) && !(Zo & 268435455) || vt(ie, ae);
}
function Fo(e, t) {
  var n = F;
  F |= 2;
  var r = hd();
  (ie !== e || ae !== t) && (qe = null, Wt(e, t));
  do
    try {
      zm();
      break;
    } catch (o) {
      gd(e, o);
    }
  while (!0);
  if (cs(), F = n, jo.current = r, ne !== null) throw Error(N(261));
  return ie = null, ae = 0, oe;
}
function zm() {
  for (; ne !== null; ) vd(ne);
}
function jm() {
  for (; ne !== null && !ip(); ) vd(ne);
}
function vd(e) {
  var t = xd(e.alternate, e, Ne);
  e.memoizedProps = e.pendingProps, t === null ? yd(e) : ne = t, Es.current = null;
}
function yd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = _m(n, t), n !== null) {
        n.flags &= 32767, ne = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        oe = 6, ne = null;
        return;
      }
    } else if (n = Pm(n, t, Ne), n !== null) {
      ne = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ne = t;
      return;
    }
    ne = t = e;
  } while (t !== null);
  oe === 0 && (oe = 5);
}
function Ft(e, t, n) {
  var r = W, o = ze.transition;
  try {
    ze.transition = null, W = 1, Im(e, t, n, r);
  } finally {
    ze.transition = o, W = r;
  }
  return null;
}
function Im(e, t, n, r) {
  do
    kn();
  while (wt !== null);
  if (F & 6) throw Error(N(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(N(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var l = n.lanes | n.childLanes;
  if (hp(e, l), e === ie && (ne = ie = null, ae = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Qr || (Qr = !0, Sd(wo, function() {
    return kn(), null;
  })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
    l = ze.transition, ze.transition = null;
    var i = W;
    W = 1;
    var s = F;
    F |= 4, Es.current = null, Mm(e, n), fd(n, e), nm(pi), So = !!fi, pi = fi = null, e.current = n, Rm(n), sp(), F = s, W = i, ze.transition = l;
  } else e.current = n;
  if (Qr && (Qr = !1, wt = e, Ao = o), l = e.pendingLanes, l === 0 && (Nt = null), cp(n.stateNode), Ce(e, ee()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Io) throw Io = !1, e = Oi, Oi = null, e;
  return Ao & 1 && e.tag !== 0 && kn(), l = e.pendingLanes, l & 1 ? e === zi ? or++ : (or = 0, zi = e) : or = 0, Ot(), null;
}
function kn() {
  if (wt !== null) {
    var e = Ju(Ao), t = ze.transition, n = W;
    try {
      if (ze.transition = null, W = 16 > e ? 16 : e, wt === null) var r = !1;
      else {
        if (e = wt, wt = null, Ao = 0, F & 6) throw Error(N(331));
        var o = F;
        for (F |= 4, M = e.current; M !== null; ) {
          var l = M, i = l.child;
          if (M.flags & 16) {
            var s = l.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (M = u; M !== null; ) {
                  var g = M;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      nr(8, g, l);
                  }
                  var p = g.child;
                  if (p !== null) p.return = g, M = p;
                  else for (; M !== null; ) {
                    g = M;
                    var f = g.sibling, y = g.return;
                    if (ud(g), g === u) {
                      M = null;
                      break;
                    }
                    if (f !== null) {
                      f.return = y, M = f;
                      break;
                    }
                    M = y;
                  }
                }
              }
              var x = l.alternate;
              if (x !== null) {
                var h = x.child;
                if (h !== null) {
                  x.child = null;
                  do {
                    var k = h.sibling;
                    h.sibling = null, h = k;
                  } while (h !== null);
                }
              }
              M = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null) i.return = l, M = i;
          else e: for (; M !== null; ) {
            if (l = M, l.flags & 2048) switch (l.tag) {
              case 0:
              case 11:
              case 15:
                nr(9, l, l.return);
            }
            var d = l.sibling;
            if (d !== null) {
              d.return = l.return, M = d;
              break e;
            }
            M = l.return;
          }
        }
        var c = e.current;
        for (M = c; M !== null; ) {
          i = M;
          var m = i.child;
          if (i.subtreeFlags & 2064 && m !== null) m.return = i, M = m;
          else e: for (i = c; M !== null; ) {
            if (s = M, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  Xo(9, s);
              }
            } catch (E) {
              q(s, s.return, E);
            }
            if (s === i) {
              M = null;
              break e;
            }
            var w = s.sibling;
            if (w !== null) {
              w.return = s.return, M = w;
              break e;
            }
            M = s.return;
          }
        }
        if (F = o, Ot(), Ye && typeof Ye.onPostCommitFiberRoot == "function") try {
          Ye.onPostCommitFiberRoot(Wo, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      W = n, ze.transition = t;
    }
  }
  return !1;
}
function Va(e, t, n) {
  t = Mn(n, t), t = Jc(e, t, 1), e = Ct(e, t, 1), t = ve(), e !== null && (Nr(e, 1, t), Ce(e, t));
}
function q(e, t, n) {
  if (e.tag === 3) Va(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Va(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Nt === null || !Nt.has(r))) {
        e = Mn(n, e), e = qc(t, e, 1), t = Ct(t, e, 1), e = ve(), t !== null && (Nr(t, 1, e), Ce(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Am(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ve(), e.pingedLanes |= e.suspendedLanes & n, ie === e && (ae & n) === n && (oe === 4 || oe === 3 && (ae & 130023424) === ae && 500 > ee() - Ns ? Wt(e, 0) : Cs |= n), Ce(e, t);
}
function wd(e, t) {
  t === 0 && (e.mode & 1 ? (t = Ir, Ir <<= 1, !(Ir & 130023424) && (Ir = 4194304)) : t = 1);
  var n = ve();
  e = it(e, t), e !== null && (Nr(e, t, n), Ce(e, n));
}
function Fm(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), wd(e, n);
}
function bm(e, t) {
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
      throw Error(N(314));
  }
  r !== null && r.delete(t), wd(e, n);
}
var xd;
xd = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || ke.current) Se = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Se = !1, Dm(e, t, n);
    Se = !!(e.flags & 131072);
  }
  else Se = !1, K && t.flags & 1048576 && Cc(t, _o, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      ao(e, t), e = t.pendingProps;
      var o = Dn(t, me.current);
      Sn(t, n), o = ys(null, t, r, e, o, n);
      var l = ws();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ee(r) ? (l = !0, Do(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, ps(t), o.updater = Yo, t.stateNode = o, o._reactInternals = t, ki(t, r, e, n), t = Ni(null, t, r, !0, l, n)) : (t.tag = 0, K && l && is(t), he(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (ao(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Um(r), e = Fe(r, e), o) {
          case 0:
            t = Ci(null, t, r, e, n);
            break e;
          case 1:
            t = za(null, t, r, e, n);
            break e;
          case 11:
            t = La(null, t, r, e, n);
            break e;
          case 14:
            t = Oa(null, t, r, Fe(r.type, e), n);
            break e;
        }
        throw Error(N(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Fe(r, o), Ci(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Fe(r, o), za(e, t, r, o, n);
    case 3:
      e: {
        if (rd(t), e === null) throw Error(N(387));
        r = t.pendingProps, l = t.memoizedState, o = l.element, Mc(e, t), Ro(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, l.isDehydrated) if (l = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
          o = Mn(Error(N(423)), t), t = ja(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = Mn(Error(N(424)), t), t = ja(e, t, r, n, o);
          break e;
        } else for (De = Et(t.stateNode.containerInfo.firstChild), Pe = t, K = !0, $e = null, n = _c(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Pn(), r === o) {
            t = st(e, t, n);
            break e;
          }
          he(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Rc(t), e === null && wi(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, mi(r, o) ? i = null : l !== null && mi(r, l) && (t.flags |= 32), nd(e, t), he(e, t, i, n), t.child;
    case 6:
      return e === null && wi(t), null;
    case 13:
      return od(e, t, n);
    case 4:
      return ms(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = _n(t, null, r, n) : he(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Fe(r, o), La(e, t, r, o, n);
    case 7:
      return he(e, t, t.pendingProps, n), t.child;
    case 8:
      return he(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return he(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, V(To, r._currentValue), r._currentValue = i, l !== null) if (Be(l.value, i)) {
          if (l.children === o.children && !ke.current) {
            t = st(e, t, n);
            break e;
          }
        } else for (l = t.child, l !== null && (l.return = t); l !== null; ) {
          var s = l.dependencies;
          if (s !== null) {
            i = l.child;
            for (var a = s.firstContext; a !== null; ) {
              if (a.context === r) {
                if (l.tag === 1) {
                  a = rt(-1, n & -n), a.tag = 2;
                  var u = l.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var g = u.pending;
                    g === null ? a.next = a : (a.next = g.next, g.next = a), u.pending = a;
                  }
                }
                l.lanes |= n, a = l.alternate, a !== null && (a.lanes |= n), xi(
                  l.return,
                  n,
                  t
                ), s.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
          else if (l.tag === 18) {
            if (i = l.return, i === null) throw Error(N(341));
            i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), xi(i, n, t), i = l.sibling;
          } else i = l.child;
          if (i !== null) i.return = l;
          else for (i = l; i !== null; ) {
            if (i === t) {
              i = null;
              break;
            }
            if (l = i.sibling, l !== null) {
              l.return = i.return, i = l;
              break;
            }
            i = i.return;
          }
          l = i;
        }
        he(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Sn(t, n), o = je(o), r = r(o), t.flags |= 1, he(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Fe(r, t.pendingProps), o = Fe(r.type, o), Oa(e, t, r, o, n);
    case 15:
      return ed(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Fe(r, o), ao(e, t), t.tag = 1, Ee(r) ? (e = !0, Do(t)) : e = !1, Sn(t, n), Zc(t, r, o), ki(t, r, o, n), Ni(null, t, r, !0, e, n);
    case 19:
      return ld(e, t, n);
    case 22:
      return td(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function Sd(e, t) {
  return Ku(e, t);
}
function $m(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Oe(e, t, n, r) {
  return new $m(e, t, n, r);
}
function Ts(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Um(e) {
  if (typeof e == "function") return Ts(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Ki) return 11;
    if (e === Yi) return 14;
  }
  return 2;
}
function Pt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Oe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function fo(e, t, n, r, o, l) {
  var i = 2;
  if (r = e, typeof e == "function") Ts(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case ln:
      return Bt(n.children, o, l, t);
    case Gi:
      i = 8, o |= 8;
      break;
    case Ql:
      return e = Oe(12, n, t, o | 2), e.elementType = Ql, e.lanes = l, e;
    case Gl:
      return e = Oe(13, n, t, o), e.elementType = Gl, e.lanes = l, e;
    case Kl:
      return e = Oe(19, n, t, o), e.elementType = Kl, e.lanes = l, e;
    case Ru:
      return Jo(n, o, l, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Tu:
          i = 10;
          break e;
        case Mu:
          i = 9;
          break e;
        case Ki:
          i = 11;
          break e;
        case Yi:
          i = 14;
          break e;
        case mt:
          i = 16, r = null;
          break e;
      }
      throw Error(N(130, e == null ? e : typeof e, ""));
  }
  return t = Oe(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
}
function Bt(e, t, n, r) {
  return e = Oe(7, e, r, t), e.lanes = n, e;
}
function Jo(e, t, n, r) {
  return e = Oe(22, e, r, t), e.elementType = Ru, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Rl(e, t, n) {
  return e = Oe(6, e, null, t), e.lanes = n, e;
}
function Ll(e, t, n) {
  return t = Oe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Wm(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = fl(0), this.expirationTimes = fl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = fl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Ms(e, t, n, r, o, l, i, s, a) {
  return e = new Wm(e, t, n, s, a), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = Oe(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ps(l), e;
}
function Bm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: on, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function kd(e) {
  if (!e) return Mt;
  e = e._reactInternals;
  e: {
    if (Zt(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ee(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ee(n)) return kc(e, n, t);
  }
  return t;
}
function Ed(e, t, n, r, o, l, i, s, a) {
  return e = Ms(n, r, !0, e, o, l, i, s, a), e.context = kd(null), n = e.current, r = ve(), o = Dt(n), l = rt(r, o), l.callback = t ?? null, Ct(n, l, o), e.current.lanes = o, Nr(e, o, r), Ce(e, r), e;
}
function qo(e, t, n, r) {
  var o = t.current, l = ve(), i = Dt(o);
  return n = kd(n), t.context === null ? t.context = n : t.pendingContext = n, t = rt(l, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Ct(o, t, i), e !== null && (We(e, o, i, l), lo(e, o, i)), i;
}
function bo(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ha(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Rs(e, t) {
  Ha(e, t), (e = e.alternate) && Ha(e, t);
}
function Vm() {
  return null;
}
var Cd = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ls(e) {
  this._internalRoot = e;
}
el.prototype.render = Ls.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  qo(e, t, null, null);
};
el.prototype.unmount = Ls.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Kt(function() {
      qo(null, e, null, null);
    }), t[lt] = null;
  }
};
function el(e) {
  this._internalRoot = e;
}
el.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = tc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ht.length && t !== 0 && t < ht[n].priority; n++) ;
    ht.splice(n, 0, e), n === 0 && rc(e);
  }
};
function Os(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function tl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Qa() {
}
function Hm(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function() {
        var u = bo(i);
        l.call(u);
      };
    }
    var i = Ed(t, r, e, 0, null, !1, !1, "", Qa);
    return e._reactRootContainer = i, e[lt] = i.current, pr(e.nodeType === 8 ? e.parentNode : e), Kt(), i;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = bo(a);
      s.call(u);
    };
  }
  var a = Ms(e, 0, !1, null, null, !1, !1, "", Qa);
  return e._reactRootContainer = a, e[lt] = a.current, pr(e.nodeType === 8 ? e.parentNode : e), Kt(function() {
    qo(t, a, n, r);
  }), a;
}
function nl(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var a = bo(i);
        s.call(a);
      };
    }
    qo(t, i, e, o);
  } else i = Hm(n, t, e, o, r);
  return bo(i);
}
qu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Kn(t.pendingLanes);
        n !== 0 && (Ji(t, n | 1), Ce(t, ee()), !(F & 6) && (Rn = ee() + 500, Ot()));
      }
      break;
    case 13:
      Kt(function() {
        var r = it(e, 1);
        if (r !== null) {
          var o = ve();
          We(r, e, 1, o);
        }
      }), Rs(e, 1);
  }
};
qi = function(e) {
  if (e.tag === 13) {
    var t = it(e, 134217728);
    if (t !== null) {
      var n = ve();
      We(t, e, 134217728, n);
    }
    Rs(e, 134217728);
  }
};
ec = function(e) {
  if (e.tag === 13) {
    var t = Dt(e), n = it(e, t);
    if (n !== null) {
      var r = ve();
      We(n, e, t, r);
    }
    Rs(e, t);
  }
};
tc = function() {
  return W;
};
nc = function(e, t) {
  var n = W;
  try {
    return W = e, t();
  } finally {
    W = n;
  }
};
oi = function(e, t, n) {
  switch (t) {
    case "input":
      if (Zl(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Qo(r);
            if (!o) throw Error(N(90));
            Ou(r), Zl(r, o);
          }
        }
      }
      break;
    case "textarea":
      ju(e, n);
      break;
    case "select":
      t = n.value, t != null && vn(e, !!n.multiple, t, !1);
  }
};
Wu = Ds;
Bu = Kt;
var Qm = { usingClientEntryPoint: !1, Events: [Pr, cn, Qo, $u, Uu, Ds] }, Bn = { findFiberByHostInstance: bt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Gm = { bundleType: Bn.bundleType, version: Bn.version, rendererPackageName: Bn.rendererPackageName, rendererConfig: Bn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: at.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Qu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Bn.findFiberByHostInstance || Vm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Gr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Gr.isDisabled && Gr.supportsFiber) try {
    Wo = Gr.inject(Gm), Ye = Gr;
  } catch {
  }
}
Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qm;
Te.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Os(t)) throw Error(N(200));
  return Bm(e, t, null, n);
};
Te.createRoot = function(e, t) {
  if (!Os(e)) throw Error(N(299));
  var n = !1, r = "", o = Cd;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Ms(e, 1, !1, null, null, n, !1, r, o), e[lt] = t.current, pr(e.nodeType === 8 ? e.parentNode : e), new Ls(t);
};
Te.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(N(188)) : (e = Object.keys(e).join(","), Error(N(268, e)));
  return e = Qu(t), e = e === null ? null : e.stateNode, e;
};
Te.flushSync = function(e) {
  return Kt(e);
};
Te.hydrate = function(e, t, n) {
  if (!tl(t)) throw Error(N(200));
  return nl(null, e, t, !0, n);
};
Te.hydrateRoot = function(e, t, n) {
  if (!Os(e)) throw Error(N(405));
  var r = n != null && n.hydratedSources || null, o = !1, l = "", i = Cd;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Ed(t, null, e, 1, n ?? null, o, !1, l, i), e[lt] = t.current, pr(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new el(t);
};
Te.render = function(e, t, n) {
  if (!tl(t)) throw Error(N(200));
  return nl(null, e, t, !1, n);
};
Te.unmountComponentAtNode = function(e) {
  if (!tl(e)) throw Error(N(40));
  return e._reactRootContainer ? (Kt(function() {
    nl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[lt] = null;
    });
  }), !0) : !1;
};
Te.unstable_batchedUpdates = Ds;
Te.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!tl(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return nl(e, t, n, !1, r);
};
Te.version = "18.3.1-next-f1338f8080-20240426";
function Nd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nd);
    } catch (e) {
      console.error(e);
    }
}
Nd(), Nu.exports = Te;
var zs = Nu.exports;
const Km = /* @__PURE__ */ fu(zs);
var Ga = zs;
Vl.createRoot = Ga.createRoot, Vl.hydrateRoot = Ga.hydrateRoot;
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ym = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Dd = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Xm = {
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
const Zm = v.forwardRef(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: l,
    iconNode: i,
    ...s
  }, a) => v.createElement(
    "svg",
    {
      ref: a,
      ...Xm,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Dd("lucide", o),
      ...s
    },
    [
      ...i.map(([u, g]) => v.createElement(u, g)),
      ...Array.isArray(l) ? l : [l]
    ]
  )
);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ze = (e, t) => {
  const n = v.forwardRef(
    ({ className: r, ...o }, l) => v.createElement(Zm, {
      ref: l,
      iconNode: t,
      className: Dd(`lucide-${Ym(e)}`, r),
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
const Jm = Ze("Building2", [
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
const Ol = Ze("Calendar", [
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
const qm = Ze("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eg = Ze("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tg = Ze("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ng = Ze("DollarSign", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rg = Ze("ExternalLink", [
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
const og = Ze("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lg = Ze("MapPin", [
  ["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ig = Ze("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), sg = (e, t) => {
  const n = [];
  if (!e || !t) {
    const i = /* @__PURE__ */ new Date(), s = i.getFullYear(), a = i.getMonth();
    return Ka(s, a);
  }
  const r = new Date(e), o = new Date(t);
  let l = new Date(r.getFullYear(), r.getMonth(), 1);
  for (; l <= o; ) {
    const i = Ka(l.getFullYear(), l.getMonth());
    n.push(...i), l.setMonth(l.getMonth() + 1);
  }
  return n;
}, Ka = (e, t) => {
  const n = [], r = `${e}-${t}`, o = new Date(e, t, 5, 14, 0), l = new Date(e, t, 5, 10, 0);
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
    startDate: l,
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
}, ag = (e) => {
  const t = {}, n = ["Main Auditorium", "Student Center", "Library Room 201", "Sports Complex", "Outdoor Field", "Conference Hall", "Room 301"], r = ["Student Union", "Computer Science Club", "Athletics Department", "Cultural Society", "Career Services"];
  return e.forEach((o, l) => {
    let i = "academic";
    o.title.toLowerCase().includes("sport") || o.title.toLowerCase().includes("basketball") || o.title.toLowerCase().includes("soccer") ? i = "sports" : o.title.toLowerCase().includes("movie") || o.title.toLowerCase().includes("mixer") ? i = "social" : o.title.toLowerCase().includes("food") || o.title.toLowerCase().includes("international") ? i = "cultural" : o.title.toLowerCase().includes("career") || o.title.toLowerCase().includes("resume") ? i = "professional" : o.title.toLowerCase().includes("yoga") || o.title.toLowerCase().includes("wellness") ? i = "wellness" : (o.title.toLowerCase().includes("art") || o.title.toLowerCase().includes("exhibition") || o.title.toLowerCase().includes("concert") || o.title.toLowerCase().includes("band")) && (i = "arts"), t[o.id] = {
      category: i,
      organization: r[l % r.length],
      location: n[l % n.length],
      cost: l % 3 === 0 ? "Free" : `$${(l + 1) * 5}`,
      registrationRequired: l % 2 === 0,
      capacity: `${(l + 1) * 20} people`,
      featured: l % 4 === 0,
      categories: [{ slug: i, name: i }],
      description: o.description
    };
  }), t;
};
function ug(e = {}) {
  const [t, n] = v.useState(!0);
  v.useEffect(() => {
    const i = setTimeout(() => {
      n(!1);
    }, 500);
    return () => clearTimeout(i);
  }, [e.start_date, e.end_date]);
  const r = fe.useMemo(() => sg(e.start_date, e.end_date), [e.start_date, e.end_date]), o = fe.useMemo(() => ag(r), [r]), l = fe.useMemo(() => {
    const i = {
      academic: "primary",
      social: "success",
      sports: "warning",
      cultural: "orange",
      professional: "indigo",
      wellness: "cyan",
      arts: "pink"
    }, s = {};
    return Object.values(o).forEach((a) => {
      a != null && a.category && i[a.category] && (s[a.category] = i[a.category]);
    }), s;
  }, [o]);
  return {
    events: r,
    eventMetadata: o,
    categoryMappings: l,
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
class cg {
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
      Object.entries(t).forEach(([p, f]) => {
        f != null && f !== "" && o.append(p, f.toString());
      });
      const i = `${this.baseUrl.endsWith("/") ? this.baseUrl.slice(0, -1) : this.baseUrl}/events${o.toString() ? "?" + o.toString() : ""}`, s = window.unbcCalendarData, a = {
        "Content-Type": "application/json"
      };
      s != null && s.nonce && (a["X-WP-Nonce"] = s.nonce);
      const u = await fetch(i, {
        method: "GET",
        headers: a,
        credentials: "same-origin"
      });
      if (!u.ok) {
        const p = await u.text();
        throw new Error(`HTTP error! status: ${u.status}, response: ${p}`);
      }
      const g = await u.json();
      return this.setCache(n, g), g;
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
      organization: this.decodeHtmlEntities(t.organization) || t.organization,
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
  decodeHtmlEntities(t) {
    var r;
    if (!t) return "";
    if (typeof DOMParser < "u") {
      const o = new DOMParser().parseFromString(t, "text/html");
      return o.documentElement.textContent || ((r = o.body) == null ? void 0 : r.textContent) || t;
    }
    const n = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    };
    return t.replace(/&(?:amp|lt|gt|quot|#39);/g, (o) => n[o] || o);
  }
  getCategoryVariant(t) {
    return !t || !Array.isArray(t) || t.length === 0, "default";
  }
  mapWordPressCategory(t) {
    return !t || !Array.isArray(t) || t.length === 0 ? null : t[0].slug;
  }
  generateCacheKey(t) {
    const n = t.year || (/* @__PURE__ */ new Date()).getFullYear(), r = t.month || (/* @__PURE__ */ new Date()).getMonth() + 1, o = t.category || "", l = t.search || "";
    return `${n}-${r}-${o}-${l}`;
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
const en = new cg(), dg = [
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
], Ya = (e) => {
  if (!e || typeof e != "object")
    return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    dg.includes(r) && (t[n] = r);
  }), t;
}, zl = (e) => {
  var n;
  if (typeof e != "string" || e.length === 0)
    return e ?? void 0;
  try {
    if (typeof DOMParser < "u") {
      const o = new DOMParser().parseFromString(e, "text/html");
      return o.documentElement.textContent || ((n = o.body) == null ? void 0 : n.textContent) || e;
    }
  } catch (r) {
    console.warn("Failed to decode HTML entities:", r);
  }
  const t = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'"
  };
  return e.replace(/&(?:amp|lt|gt|quot|#39);/g, (r) => t[r] || r);
}, Kr = (e) => e ? Object.entries(e).reduce((t, [n, r]) => (t[n] = {
  ...r,
  organization: zl(r.organization) ?? r.organization,
  location: zl(r.location) ?? r.location,
  cost: zl(r.cost) ?? r.cost
}, t), {}) : {};
function fg(e = {}) {
  const [t, n] = v.useState([]), [r, o] = v.useState({}), [l, i] = v.useState({}), [s, a] = v.useState(!0), [u, g] = v.useState(!1), [p, f] = v.useState(null), [y, x] = v.useState(0), [h, k] = v.useState(0), [d, c] = v.useState(e), [m, w] = v.useState(), E = v.useRef(""), P = v.useRef(!0);
  v.useEffect(() => {
    const $ = JSON.stringify(e);
    if (P.current) {
      P.current = !1, E.current = $, c(e);
      return;
    }
    E.current !== $ && (E.current = $, c(e));
  }, [e]);
  const C = v.useCallback(async () => {
    var $;
    try {
      a(!0), f(null);
      const D = await en.fetchEvents(d);
      if (($ = D.performance) != null && $.server_processed) {
        const b = D.events.map((B) => ({
          ...B,
          startDate: new Date(B.startDate),
          endDate: new Date(B.endDate)
        }));
        n(b), o(Kr(D.eventMetadata)), i(Ya(D.categoryMappings)), x(D.total), k(D.pages), w(D.pagination);
      } else {
        const b = [], B = {};
        D.events.forEach((U) => {
          const Y = en.transformWordPressEventToEvent(U), ge = en.transformWordPressEventToMetadata(U);
          b.push(Y), B[Y.id] = ge;
        }), n(b), o(Kr(B)), x(D.total), k(D.pages), w(D.pagination);
      }
    } catch (D) {
      console.error("Error fetching events:", D), n([]), o({}), i({}), x(0), k(0), f(D instanceof Error ? D.message : "Failed to load events");
    } finally {
      a(!1);
    }
  }, [JSON.stringify(d)]);
  v.useEffect(() => {
    C();
  }, [C]);
  const T = v.useCallback(() => {
    C();
  }, [C]), I = v.useCallback(async () => {
    var $;
    if (!(!(m != null && m.hasMore) || u))
      try {
        g(!0), f(null);
        const D = {
          ...d,
          page: m.nextPage || (d.page || 1) + 1
        }, b = await en.fetchEvents(D);
        if (($ = b.performance) != null && $.server_processed) {
          const B = b.events.map((U) => ({
            ...U,
            startDate: new Date(U.startDate),
            endDate: new Date(U.endDate)
          }));
          n((U) => [...U, ...B]), o((U) => ({ ...U, ...Kr(b.eventMetadata) })), i((U) => ({
            ...U,
            ...Ya(b.categoryMappings)
          })), w(b.pagination);
        } else {
          const B = [], U = {};
          b.events.forEach((Y) => {
            const ge = en.transformWordPressEventToEvent(Y), _ = en.transformWordPressEventToMetadata(Y);
            B.push(ge), U[ge.id] = _;
          }), n((Y) => [...Y, ...B]), o((Y) => ({ ...Y, ...Kr(U) })), w(b.pagination);
        }
      } catch (D) {
        console.error("Error loading more events:", D), f(D instanceof Error ? D.message : "Failed to load more events");
      } finally {
        g(!1);
      }
  }, [JSON.stringify(d), JSON.stringify(m), u]), L = v.useCallback(($) => {
    c((D) => ({ ...D, ...$ }));
  }, []);
  return {
    events: t,
    eventMetadata: r,
    loading: s,
    error: p,
    total: y,
    pages: h,
    refetch: T,
    setFilters: L,
    hasMore: (m == null ? void 0 : m.hasMore) || !1,
    loadMore: I,
    loadingMore: u,
    pagination: m,
    categoryMappings: l
  };
}
function pg() {
  const [e, t] = v.useState([]), [n, r] = v.useState(!0), [o, l] = v.useState(null);
  return v.useEffect(() => {
    (async () => {
      try {
        r(!0), l(null);
        const s = await fetch("/wp-json/wp/v2/event_category?per_page=100&orderby=name&order=asc");
        if (!s.ok)
          throw new Error(`HTTP error! status: ${s.status}`);
        const a = await s.json();
        let u = {};
        try {
          const p = await fetch("/wp-json/unbc-events/v1/category-config");
          if (p.ok) {
            const f = await p.json();
            Object.entries(f).forEach(([y, x]) => {
              typeof x == "string" ? u[y] = x : x && typeof x == "object" && "variant" in x && x.variant && (u[y] = x.variant);
            });
          }
        } catch (p) {
          console.warn("Error fetching category color config:", p);
        }
        const g = a.map((p) => ({
          id: p.id,
          name: p.name,
          slug: p.slug,
          count: p.count,
          variant: u[p.slug] || "default"
        }));
        t(g);
      } catch (s) {
        console.error("Error fetching event categories:", s), l(s instanceof Error ? s.message : "Failed to fetch categories"), t([
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
function mg(e = "default") {
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
function gg(e, t = {}) {
  return e && t[e] ? t[e] : "default";
}
function hg(e) {
  const t = {};
  return !e || !Array.isArray(e) || e.forEach((n) => {
    n.variant && (t[n.slug] = n.variant);
  }), t;
}
function _t(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Xa(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Pd(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const l = Xa(o, t);
      return !n && typeof l == "function" && (n = !0), l;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const l = r[o];
          typeof l == "function" ? l() : Xa(e[o], null);
        }
      };
  };
}
function Jt(...e) {
  return v.useCallback(Pd(...e), e);
}
function vg(e, t) {
  const n = v.createContext(t), r = (l) => {
    const { children: i, ...s } = l, a = v.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ S.jsx(n.Provider, { value: a, children: i });
  };
  r.displayName = e + "Provider";
  function o(l) {
    const i = v.useContext(n);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${l}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function yg(e, t = []) {
  let n = [];
  function r(l, i) {
    const s = v.createContext(i), a = n.length;
    n = [...n, i];
    const u = (p) => {
      var d;
      const { scope: f, children: y, ...x } = p, h = ((d = f == null ? void 0 : f[e]) == null ? void 0 : d[a]) || s, k = v.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ S.jsx(h.Provider, { value: k, children: y });
    };
    u.displayName = l + "Provider";
    function g(p, f) {
      var h;
      const y = ((h = f == null ? void 0 : f[e]) == null ? void 0 : h[a]) || s, x = v.useContext(y);
      if (x) return x;
      if (i !== void 0) return i;
      throw new Error(`\`${p}\` must be used within \`${l}\``);
    }
    return [u, g];
  }
  const o = () => {
    const l = n.map((i) => v.createContext(i));
    return function(s) {
      const a = (s == null ? void 0 : s[e]) || l;
      return v.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: a } }),
        [s, a]
      );
    };
  };
  return o.scopeName = e, [r, wg(o, ...t)];
}
function wg(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(l) {
      const i = r.reduce((s, { useScope: a, scopeName: u }) => {
        const p = a(l)[`__scope${u}`];
        return { ...s, ...p };
      }, {});
      return v.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var kr = globalThis != null && globalThis.document ? v.useLayoutEffect : () => {
}, xg = Eu[" useId ".trim().toString()] || (() => {
}), Sg = 0;
function jl(e) {
  const [t, n] = v.useState(xg());
  return kr(() => {
    n((r) => r ?? String(Sg++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var kg = Eu[" useInsertionEffect ".trim().toString()] || kr;
function Eg({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, l, i] = Cg({
    defaultProp: t,
    onChange: n
  }), s = e !== void 0, a = s ? e : o;
  {
    const g = v.useRef(e !== void 0);
    v.useEffect(() => {
      const p = g.current;
      p !== s && console.warn(
        `${r} is changing from ${p ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), g.current = s;
    }, [s, r]);
  }
  const u = v.useCallback(
    (g) => {
      var p;
      if (s) {
        const f = Ng(g) ? g(e) : g;
        f !== e && ((p = i.current) == null || p.call(i, f));
      } else
        l(g);
    },
    [s, e, l, i]
  );
  return [a, u];
}
function Cg({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = v.useState(e), o = v.useRef(n), l = v.useRef(t);
  return kg(() => {
    l.current = t;
  }, [t]), v.useEffect(() => {
    var i;
    o.current !== n && ((i = l.current) == null || i.call(l, n), o.current = n);
  }, [n, o]), [n, r, l];
}
function Ng(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function _d(e) {
  const t = /* @__PURE__ */ Dg(e), n = v.forwardRef((r, o) => {
    const { children: l, ...i } = r, s = v.Children.toArray(l), a = s.find(_g);
    if (a) {
      const u = a.props.children, g = s.map((p) => p === a ? v.Children.count(u) > 1 ? v.Children.only(null) : v.isValidElement(u) ? u.props.children : null : p);
      return /* @__PURE__ */ S.jsx(t, { ...i, ref: o, children: v.isValidElement(u) ? v.cloneElement(u, void 0, g) : null });
    }
    return /* @__PURE__ */ S.jsx(t, { ...i, ref: o, children: l });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Dg(e) {
  const t = v.forwardRef((n, r) => {
    const { children: o, ...l } = n;
    if (v.isValidElement(o)) {
      const i = Mg(o), s = Tg(l, o.props);
      return o.type !== v.Fragment && (s.ref = r ? Pd(r, i) : i), v.cloneElement(o, s);
    }
    return v.Children.count(o) > 1 ? v.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Pg = Symbol("radix.slottable");
function _g(e) {
  return v.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Pg;
}
function Tg(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], l = t[r];
    /^on[A-Z]/.test(r) ? o && l ? n[r] = (...s) => {
      const a = l(...s);
      return o(...s), a;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...l } : r === "className" && (n[r] = [o, l].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Mg(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Rg = [
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
], ut = Rg.reduce((e, t) => {
  const n = /* @__PURE__ */ _d(`Primitive.${t}`), r = v.forwardRef((o, l) => {
    const { asChild: i, ...s } = o, a = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ S.jsx(a, { ...s, ref: l });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Lg(e, t) {
  e && zs.flushSync(() => e.dispatchEvent(t));
}
function Er(e) {
  const t = v.useRef(e);
  return v.useEffect(() => {
    t.current = e;
  }), v.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Og(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Er(e);
  v.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var zg = "DismissableLayer", Ai = "dismissableLayer.update", jg = "dismissableLayer.pointerDownOutside", Ig = "dismissableLayer.focusOutside", Za, Td = v.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Md = v.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: l,
      onInteractOutside: i,
      onDismiss: s,
      ...a
    } = e, u = v.useContext(Td), [g, p] = v.useState(null), f = (g == null ? void 0 : g.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, y] = v.useState({}), x = Jt(t, (C) => p(C)), h = Array.from(u.layers), [k] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), d = h.indexOf(k), c = g ? h.indexOf(g) : -1, m = u.layersWithOutsidePointerEventsDisabled.size > 0, w = c >= d, E = bg((C) => {
      const T = C.target, I = [...u.branches].some((L) => L.contains(T));
      !w || I || (o == null || o(C), i == null || i(C), C.defaultPrevented || s == null || s());
    }, f), P = $g((C) => {
      const T = C.target;
      [...u.branches].some((L) => L.contains(T)) || (l == null || l(C), i == null || i(C), C.defaultPrevented || s == null || s());
    }, f);
    return Og((C) => {
      c === u.layers.size - 1 && (r == null || r(C), !C.defaultPrevented && s && (C.preventDefault(), s()));
    }, f), v.useEffect(() => {
      if (g)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Za = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(g)), u.layers.add(g), Ja(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Za);
        };
    }, [g, f, n, u]), v.useEffect(() => () => {
      g && (u.layers.delete(g), u.layersWithOutsidePointerEventsDisabled.delete(g), Ja());
    }, [g, u]), v.useEffect(() => {
      const C = () => y({});
      return document.addEventListener(Ai, C), () => document.removeEventListener(Ai, C);
    }, []), /* @__PURE__ */ S.jsx(
      ut.div,
      {
        ...a,
        ref: x,
        style: {
          pointerEvents: m ? w ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: _t(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: _t(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: _t(
          e.onPointerDownCapture,
          E.onPointerDownCapture
        )
      }
    );
  }
);
Md.displayName = zg;
var Ag = "DismissableLayerBranch", Fg = v.forwardRef((e, t) => {
  const n = v.useContext(Td), r = v.useRef(null), o = Jt(t, r);
  return v.useEffect(() => {
    const l = r.current;
    if (l)
      return n.branches.add(l), () => {
        n.branches.delete(l);
      };
  }, [n.branches]), /* @__PURE__ */ S.jsx(ut.div, { ...e, ref: o });
});
Fg.displayName = Ag;
function bg(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Er(e), r = v.useRef(!1), o = v.useRef(() => {
  });
  return v.useEffect(() => {
    const l = (s) => {
      if (s.target && !r.current) {
        let a = function() {
          Rd(
            jg,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = a, t.addEventListener("click", o.current, { once: !0 })) : a();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", l);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", l), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function $g(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Er(e), r = v.useRef(!1);
  return v.useEffect(() => {
    const o = (l) => {
      l.target && !r.current && Rd(Ig, n, { originalEvent: l }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Ja() {
  const e = new CustomEvent(Ai);
  document.dispatchEvent(e);
}
function Rd(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, l = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Lg(o, l) : o.dispatchEvent(l);
}
var Il = "focusScope.autoFocusOnMount", Al = "focusScope.autoFocusOnUnmount", qa = { bubbles: !1, cancelable: !0 }, Ug = "FocusScope", Ld = v.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: l,
    ...i
  } = e, [s, a] = v.useState(null), u = Er(o), g = Er(l), p = v.useRef(null), f = Jt(t, (h) => a(h)), y = v.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  v.useEffect(() => {
    if (r) {
      let h = function(m) {
        if (y.paused || !s) return;
        const w = m.target;
        s.contains(w) ? p.current = w : pt(p.current, { select: !0 });
      }, k = function(m) {
        if (y.paused || !s) return;
        const w = m.relatedTarget;
        w !== null && (s.contains(w) || pt(p.current, { select: !0 }));
      }, d = function(m) {
        if (document.activeElement === document.body)
          for (const E of m)
            E.removedNodes.length > 0 && pt(s);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", k);
      const c = new MutationObserver(d);
      return s && c.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", k), c.disconnect();
      };
    }
  }, [r, s, y.paused]), v.useEffect(() => {
    if (s) {
      tu.add(y);
      const h = document.activeElement;
      if (!s.contains(h)) {
        const d = new CustomEvent(Il, qa);
        s.addEventListener(Il, u), s.dispatchEvent(d), d.defaultPrevented || (Wg(Gg(Od(s)), { select: !0 }), document.activeElement === h && pt(s));
      }
      return () => {
        s.removeEventListener(Il, u), setTimeout(() => {
          const d = new CustomEvent(Al, qa);
          s.addEventListener(Al, g), s.dispatchEvent(d), d.defaultPrevented || pt(h ?? document.body, { select: !0 }), s.removeEventListener(Al, g), tu.remove(y);
        }, 0);
      };
    }
  }, [s, u, g, y]);
  const x = v.useCallback(
    (h) => {
      if (!n && !r || y.paused) return;
      const k = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, d = document.activeElement;
      if (k && d) {
        const c = h.currentTarget, [m, w] = Bg(c);
        m && w ? !h.shiftKey && d === w ? (h.preventDefault(), n && pt(m, { select: !0 })) : h.shiftKey && d === m && (h.preventDefault(), n && pt(w, { select: !0 })) : d === c && h.preventDefault();
      }
    },
    [n, r, y.paused]
  );
  return /* @__PURE__ */ S.jsx(ut.div, { tabIndex: -1, ...i, ref: f, onKeyDown: x });
});
Ld.displayName = Ug;
function Wg(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (pt(r, { select: t }), document.activeElement !== n) return;
}
function Bg(e) {
  const t = Od(e), n = eu(t, e), r = eu(t.reverse(), e);
  return [n, r];
}
function Od(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function eu(e, t) {
  for (const n of e)
    if (!Vg(n, { upTo: t })) return n;
}
function Vg(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Hg(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function pt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Hg(e) && t && e.select();
  }
}
var tu = Qg();
function Qg() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = nu(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = nu(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function nu(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Gg(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Kg = "Portal", zd = v.forwardRef((e, t) => {
  var s;
  const { container: n, ...r } = e, [o, l] = v.useState(!1);
  kr(() => l(!0), []);
  const i = n || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return i ? Km.createPortal(/* @__PURE__ */ S.jsx(ut.div, { ...r, ref: t }), i) : null;
});
zd.displayName = Kg;
function Yg(e, t) {
  return v.useReducer((n, r) => t[n][r] ?? n, e);
}
var rl = (e) => {
  const { present: t, children: n } = e, r = Xg(t), o = typeof n == "function" ? n({ present: r.isPresent }) : v.Children.only(n), l = Jt(r.ref, Zg(o));
  return typeof n == "function" || r.isPresent ? v.cloneElement(o, { ref: l }) : null;
};
rl.displayName = "Presence";
function Xg(e) {
  const [t, n] = v.useState(), r = v.useRef(null), o = v.useRef(e), l = v.useRef("none"), i = e ? "mounted" : "unmounted", [s, a] = Yg(i, {
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
  return v.useEffect(() => {
    const u = Yr(r.current);
    l.current = s === "mounted" ? u : "none";
  }, [s]), kr(() => {
    const u = r.current, g = o.current;
    if (g !== e) {
      const f = l.current, y = Yr(u);
      e ? a("MOUNT") : y === "none" || (u == null ? void 0 : u.display) === "none" ? a("UNMOUNT") : a(g && f !== y ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, a]), kr(() => {
    if (t) {
      let u;
      const g = t.ownerDocument.defaultView ?? window, p = (y) => {
        const h = Yr(r.current).includes(CSS.escape(y.animationName));
        if (y.target === t && h && (a("ANIMATION_END"), !o.current)) {
          const k = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = g.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = k);
          });
        }
      }, f = (y) => {
        y.target === t && (l.current = Yr(r.current));
      };
      return t.addEventListener("animationstart", f), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        g.clearTimeout(u), t.removeEventListener("animationstart", f), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
      };
    } else
      a("ANIMATION_END");
  }, [t, a]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: v.useCallback((u) => {
      r.current = u ? getComputedStyle(u) : null, n(u);
    }, [])
  };
}
function Yr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Zg(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Fl = 0;
function Jg() {
  v.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? ru()), document.body.insertAdjacentElement("beforeend", e[1] ?? ru()), Fl++, () => {
      Fl === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Fl--;
    };
  }, []);
}
function ru() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Ke = function() {
  return Ke = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var l in n) Object.prototype.hasOwnProperty.call(n, l) && (t[l] = n[l]);
    }
    return t;
  }, Ke.apply(this, arguments);
};
function jd(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function qg(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, l; r < o; r++)
    (l || !(r in t)) && (l || (l = Array.prototype.slice.call(t, 0, r)), l[r] = t[r]);
  return e.concat(l || Array.prototype.slice.call(t));
}
var po = "right-scroll-bar-position", mo = "width-before-scroll-bar", eh = "with-scroll-bars-hidden", th = "--removed-body-scroll-bar-size";
function bl(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function nh(e, t) {
  var n = v.useState(function() {
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
var rh = typeof window < "u" ? v.useLayoutEffect : v.useEffect, ou = /* @__PURE__ */ new WeakMap();
function oh(e, t) {
  var n = nh(null, function(r) {
    return e.forEach(function(o) {
      return bl(o, r);
    });
  });
  return rh(function() {
    var r = ou.get(n);
    if (r) {
      var o = new Set(r), l = new Set(e), i = n.current;
      o.forEach(function(s) {
        l.has(s) || bl(s, null);
      }), l.forEach(function(s) {
        o.has(s) || bl(s, i);
      });
    }
    ou.set(n, e);
  }, [e]), n;
}
function lh(e) {
  return e;
}
function ih(e, t) {
  t === void 0 && (t = lh);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(l) {
      var i = t(l, r);
      return n.push(i), function() {
        n = n.filter(function(s) {
          return s !== i;
        });
      };
    },
    assignSyncMedium: function(l) {
      for (r = !0; n.length; ) {
        var i = n;
        n = [], i.forEach(l);
      }
      n = {
        push: function(s) {
          return l(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(l) {
      r = !0;
      var i = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(l), i = n;
      }
      var a = function() {
        var g = i;
        i = [], g.forEach(l);
      }, u = function() {
        return Promise.resolve().then(a);
      };
      u(), n = {
        push: function(g) {
          i.push(g), u();
        },
        filter: function(g) {
          return i = i.filter(g), n;
        }
      };
    }
  };
  return o;
}
function sh(e) {
  e === void 0 && (e = {});
  var t = ih(null);
  return t.options = Ke({ async: !0, ssr: !1 }, e), t;
}
var Id = function(e) {
  var t = e.sideCar, n = jd(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return v.createElement(r, Ke({}, n));
};
Id.isSideCarExport = !0;
function ah(e, t) {
  return e.useMedium(t), Id;
}
var Ad = sh(), $l = function() {
}, ol = v.forwardRef(function(e, t) {
  var n = v.useRef(null), r = v.useState({
    onScrollCapture: $l,
    onWheelCapture: $l,
    onTouchMoveCapture: $l
  }), o = r[0], l = r[1], i = e.forwardProps, s = e.children, a = e.className, u = e.removeScrollBar, g = e.enabled, p = e.shards, f = e.sideCar, y = e.noRelative, x = e.noIsolation, h = e.inert, k = e.allowPinchZoom, d = e.as, c = d === void 0 ? "div" : d, m = e.gapMode, w = jd(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), E = f, P = oh([n, t]), C = Ke(Ke({}, w), o);
  return v.createElement(
    v.Fragment,
    null,
    g && v.createElement(E, { sideCar: Ad, removeScrollBar: u, shards: p, noRelative: y, noIsolation: x, inert: h, setCallbacks: l, allowPinchZoom: !!k, lockRef: n, gapMode: m }),
    i ? v.cloneElement(v.Children.only(s), Ke(Ke({}, C), { ref: P })) : v.createElement(c, Ke({}, C, { className: a, ref: P }), s)
  );
});
ol.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ol.classNames = {
  fullWidth: mo,
  zeroRight: po
};
var uh = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function ch() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = uh();
  return t && e.setAttribute("nonce", t), e;
}
function dh(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function fh(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var ph = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = ch()) && (dh(t, n), fh(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, mh = function() {
  var e = ph();
  return function(t, n) {
    v.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Fd = function() {
  var e = mh(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, gh = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ul = function(e) {
  return parseInt(e || "", 10) || 0;
}, hh = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ul(n), Ul(r), Ul(o)];
}, vh = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return gh;
  var t = hh(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, yh = Fd(), En = "data-scroll-locked", wh = function(e, t, n, r) {
  var o = e.left, l = e.top, i = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(eh, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(En, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(l, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(po, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(mo, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(po, " .").concat(po, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(mo, " .").concat(mo, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(En, `] {
    `).concat(th, ": ").concat(s, `px;
  }
`);
}, lu = function() {
  var e = parseInt(document.body.getAttribute(En) || "0", 10);
  return isFinite(e) ? e : 0;
}, xh = function() {
  v.useEffect(function() {
    return document.body.setAttribute(En, (lu() + 1).toString()), function() {
      var e = lu() - 1;
      e <= 0 ? document.body.removeAttribute(En) : document.body.setAttribute(En, e.toString());
    };
  }, []);
}, Sh = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  xh();
  var l = v.useMemo(function() {
    return vh(o);
  }, [o]);
  return v.createElement(yh, { styles: wh(l, !t, o, n ? "" : "!important") });
}, Fi = !1;
if (typeof window < "u")
  try {
    var Xr = Object.defineProperty({}, "passive", {
      get: function() {
        return Fi = !0, !0;
      }
    });
    window.addEventListener("test", Xr, Xr), window.removeEventListener("test", Xr, Xr);
  } catch {
    Fi = !1;
  }
var tn = Fi ? { passive: !1 } : !1, kh = function(e) {
  return e.tagName === "TEXTAREA";
}, bd = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !kh(e) && n[t] === "visible")
  );
}, Eh = function(e) {
  return bd(e, "overflowY");
}, Ch = function(e) {
  return bd(e, "overflowX");
}, iu = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = $d(e, r);
    if (o) {
      var l = Ud(e, r), i = l[1], s = l[2];
      if (i > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Nh = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Dh = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, $d = function(e, t) {
  return e === "v" ? Eh(t) : Ch(t);
}, Ud = function(e, t) {
  return e === "v" ? Nh(t) : Dh(t);
}, Ph = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, _h = function(e, t, n, r, o) {
  var l = Ph(e, window.getComputedStyle(t).direction), i = l * r, s = n.target, a = t.contains(s), u = !1, g = i > 0, p = 0, f = 0;
  do {
    if (!s)
      break;
    var y = Ud(e, s), x = y[0], h = y[1], k = y[2], d = h - k - l * x;
    (x || d) && $d(e, s) && (p += d, f += x);
    var c = s.parentNode;
    s = c && c.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? c.host : c;
  } while (
    // portaled content
    !a && s !== document.body || // self content
    a && (t.contains(s) || t === s)
  );
  return (g && Math.abs(p) < 1 || !g && Math.abs(f) < 1) && (u = !0), u;
}, Zr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, su = function(e) {
  return [e.deltaX, e.deltaY];
}, au = function(e) {
  return e && "current" in e ? e.current : e;
}, Th = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Mh = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Rh = 0, nn = [];
function Lh(e) {
  var t = v.useRef([]), n = v.useRef([0, 0]), r = v.useRef(), o = v.useState(Rh++)[0], l = v.useState(Fd)[0], i = v.useRef(e);
  v.useEffect(function() {
    i.current = e;
  }, [e]), v.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = qg([e.lockRef.current], (e.shards || []).map(au), !0).filter(Boolean);
      return h.forEach(function(k) {
        return k.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function(k) {
          return k.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = v.useCallback(function(h, k) {
    if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
      return !i.current.allowPinchZoom;
    var d = Zr(h), c = n.current, m = "deltaX" in h ? h.deltaX : c[0] - d[0], w = "deltaY" in h ? h.deltaY : c[1] - d[1], E, P = h.target, C = Math.abs(m) > Math.abs(w) ? "h" : "v";
    if ("touches" in h && C === "h" && P.type === "range")
      return !1;
    var T = iu(C, P);
    if (!T)
      return !0;
    if (T ? E = C : (E = C === "v" ? "h" : "v", T = iu(C, P)), !T)
      return !1;
    if (!r.current && "changedTouches" in h && (m || w) && (r.current = E), !E)
      return !0;
    var I = r.current || E;
    return _h(I, k, h, I === "h" ? m : w);
  }, []), a = v.useCallback(function(h) {
    var k = h;
    if (!(!nn.length || nn[nn.length - 1] !== l)) {
      var d = "deltaY" in k ? su(k) : Zr(k), c = t.current.filter(function(E) {
        return E.name === k.type && (E.target === k.target || k.target === E.shadowParent) && Th(E.delta, d);
      })[0];
      if (c && c.should) {
        k.cancelable && k.preventDefault();
        return;
      }
      if (!c) {
        var m = (i.current.shards || []).map(au).filter(Boolean).filter(function(E) {
          return E.contains(k.target);
        }), w = m.length > 0 ? s(k, m[0]) : !i.current.noIsolation;
        w && k.cancelable && k.preventDefault();
      }
    }
  }, []), u = v.useCallback(function(h, k, d, c) {
    var m = { name: h, delta: k, target: d, should: c, shadowParent: Oh(d) };
    t.current.push(m), setTimeout(function() {
      t.current = t.current.filter(function(w) {
        return w !== m;
      });
    }, 1);
  }, []), g = v.useCallback(function(h) {
    n.current = Zr(h), r.current = void 0;
  }, []), p = v.useCallback(function(h) {
    u(h.type, su(h), h.target, s(h, e.lockRef.current));
  }, []), f = v.useCallback(function(h) {
    u(h.type, Zr(h), h.target, s(h, e.lockRef.current));
  }, []);
  v.useEffect(function() {
    return nn.push(l), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", a, tn), document.addEventListener("touchmove", a, tn), document.addEventListener("touchstart", g, tn), function() {
      nn = nn.filter(function(h) {
        return h !== l;
      }), document.removeEventListener("wheel", a, tn), document.removeEventListener("touchmove", a, tn), document.removeEventListener("touchstart", g, tn);
    };
  }, []);
  var y = e.removeScrollBar, x = e.inert;
  return v.createElement(
    v.Fragment,
    null,
    x ? v.createElement(l, { styles: Mh(o) }) : null,
    y ? v.createElement(Sh, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Oh(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const zh = ah(Ad, Lh);
var Wd = v.forwardRef(function(e, t) {
  return v.createElement(ol, Ke({}, e, { ref: t, sideCar: zh }));
});
Wd.classNames = ol.classNames;
var jh = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, rn = /* @__PURE__ */ new WeakMap(), Jr = /* @__PURE__ */ new WeakMap(), qr = {}, Wl = 0, Bd = function(e) {
  return e && (e.host || Bd(e.parentNode));
}, Ih = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Bd(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Ah = function(e, t, n, r) {
  var o = Ih(t, Array.isArray(e) ? e : [e]);
  qr[n] || (qr[n] = /* @__PURE__ */ new WeakMap());
  var l = qr[n], i = [], s = /* @__PURE__ */ new Set(), a = new Set(o), u = function(p) {
    !p || s.has(p) || (s.add(p), u(p.parentNode));
  };
  o.forEach(u);
  var g = function(p) {
    !p || a.has(p) || Array.prototype.forEach.call(p.children, function(f) {
      if (s.has(f))
        g(f);
      else
        try {
          var y = f.getAttribute(r), x = y !== null && y !== "false", h = (rn.get(f) || 0) + 1, k = (l.get(f) || 0) + 1;
          rn.set(f, h), l.set(f, k), i.push(f), h === 1 && x && Jr.set(f, !0), k === 1 && f.setAttribute(n, "true"), x || f.setAttribute(r, "true");
        } catch (d) {
          console.error("aria-hidden: cannot operate on ", f, d);
        }
    });
  };
  return g(t), s.clear(), Wl++, function() {
    i.forEach(function(p) {
      var f = rn.get(p) - 1, y = l.get(p) - 1;
      rn.set(p, f), l.set(p, y), f || (Jr.has(p) || p.removeAttribute(r), Jr.delete(p)), y || p.removeAttribute(n);
    }), Wl--, Wl || (rn = /* @__PURE__ */ new WeakMap(), rn = /* @__PURE__ */ new WeakMap(), Jr = /* @__PURE__ */ new WeakMap(), qr = {});
  };
}, Fh = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = jh(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Ah(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, ll = "Dialog", [Vd, jv] = yg(ll), [bh, Ve] = Vd(ll), Hd = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: l,
    modal: i = !0
  } = e, s = v.useRef(null), a = v.useRef(null), [u, g] = Eg({
    prop: r,
    defaultProp: o ?? !1,
    onChange: l,
    caller: ll
  });
  return /* @__PURE__ */ S.jsx(
    bh,
    {
      scope: t,
      triggerRef: s,
      contentRef: a,
      contentId: jl(),
      titleId: jl(),
      descriptionId: jl(),
      open: u,
      onOpenChange: g,
      onOpenToggle: v.useCallback(() => g((p) => !p), [g]),
      modal: i,
      children: n
    }
  );
};
Hd.displayName = ll;
var Qd = "DialogTrigger", $h = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ve(Qd, n), l = Jt(t, o.triggerRef);
    return /* @__PURE__ */ S.jsx(
      ut.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": As(o.open),
        ...r,
        ref: l,
        onClick: _t(e.onClick, o.onOpenToggle)
      }
    );
  }
);
$h.displayName = Qd;
var js = "DialogPortal", [Uh, Gd] = Vd(js, {
  forceMount: void 0
}), Kd = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, l = Ve(js, t);
  return /* @__PURE__ */ S.jsx(Uh, { scope: t, forceMount: n, children: v.Children.map(r, (i) => /* @__PURE__ */ S.jsx(rl, { present: n || l.open, children: /* @__PURE__ */ S.jsx(zd, { asChild: !0, container: o, children: i }) })) });
};
Kd.displayName = js;
var $o = "DialogOverlay", Yd = v.forwardRef(
  (e, t) => {
    const n = Gd($o, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, l = Ve($o, e.__scopeDialog);
    return l.modal ? /* @__PURE__ */ S.jsx(rl, { present: r || l.open, children: /* @__PURE__ */ S.jsx(Bh, { ...o, ref: t }) }) : null;
  }
);
Yd.displayName = $o;
var Wh = /* @__PURE__ */ _d("DialogOverlay.RemoveScroll"), Bh = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ve($o, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ S.jsx(Wd, { as: Wh, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ S.jsx(
        ut.div,
        {
          "data-state": As(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Yt = "DialogContent", Xd = v.forwardRef(
  (e, t) => {
    const n = Gd(Yt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, l = Ve(Yt, e.__scopeDialog);
    return /* @__PURE__ */ S.jsx(rl, { present: r || l.open, children: l.modal ? /* @__PURE__ */ S.jsx(Vh, { ...o, ref: t }) : /* @__PURE__ */ S.jsx(Hh, { ...o, ref: t }) });
  }
);
Xd.displayName = Yt;
var Vh = v.forwardRef(
  (e, t) => {
    const n = Ve(Yt, e.__scopeDialog), r = v.useRef(null), o = Jt(t, n.contentRef, r);
    return v.useEffect(() => {
      const l = r.current;
      if (l) return Fh(l);
    }, []), /* @__PURE__ */ S.jsx(
      Zd,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: _t(e.onCloseAutoFocus, (l) => {
          var i;
          l.preventDefault(), (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: _t(e.onPointerDownOutside, (l) => {
          const i = l.detail.originalEvent, s = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || s) && l.preventDefault();
        }),
        onFocusOutside: _t(
          e.onFocusOutside,
          (l) => l.preventDefault()
        )
      }
    );
  }
), Hh = v.forwardRef(
  (e, t) => {
    const n = Ve(Yt, e.__scopeDialog), r = v.useRef(!1), o = v.useRef(!1);
    return /* @__PURE__ */ S.jsx(
      Zd,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (l) => {
          var i, s;
          (i = e.onCloseAutoFocus) == null || i.call(e, l), l.defaultPrevented || (r.current || (s = n.triggerRef.current) == null || s.focus(), l.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (l) => {
          var a, u;
          (a = e.onInteractOutside) == null || a.call(e, l), l.defaultPrevented || (r.current = !0, l.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = l.target;
          ((u = n.triggerRef.current) == null ? void 0 : u.contains(i)) && l.preventDefault(), l.detail.originalEvent.type === "focusin" && o.current && l.preventDefault();
        }
      }
    );
  }
), Zd = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: l, ...i } = e, s = Ve(Yt, n), a = v.useRef(null), u = Jt(t, a);
    return Jg(), /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
      /* @__PURE__ */ S.jsx(
        Ld,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: l,
          children: /* @__PURE__ */ S.jsx(
            Md,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": As(s.open),
              ...i,
              ref: u,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
        /* @__PURE__ */ S.jsx(Qh, { titleId: s.titleId }),
        /* @__PURE__ */ S.jsx(Kh, { contentRef: a, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), Is = "DialogTitle", Jd = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ve(Is, n);
    return /* @__PURE__ */ S.jsx(ut.h2, { id: o.titleId, ...r, ref: t });
  }
);
Jd.displayName = Is;
var qd = "DialogDescription", ef = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ve(qd, n);
    return /* @__PURE__ */ S.jsx(ut.p, { id: o.descriptionId, ...r, ref: t });
  }
);
ef.displayName = qd;
var tf = "DialogClose", nf = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ve(tf, n);
    return /* @__PURE__ */ S.jsx(
      ut.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: _t(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
nf.displayName = tf;
function As(e) {
  return e ? "open" : "closed";
}
var rf = "DialogTitleWarning", [Iv, of] = vg(rf, {
  contentName: Yt,
  titleName: Is,
  docsSlug: "dialog"
}), Qh = ({ titleId: e }) => {
  const t = of(rf), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return v.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Gh = "DialogDescriptionWarning", Kh = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${of(Gh).contentName}}.`;
  return v.useEffect(() => {
    var l;
    const o = (l = e.current) == null ? void 0 : l.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Yh = Hd, Xh = Kd, lf = Yd, sf = Xd, af = Jd, uf = ef, Zh = nf;
function cf(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = cf(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Jh() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = cf(e)) && (r && (r += " "), r += t);
  return r;
}
const Fs = "-", qh = (e) => {
  const t = tv(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const s = i.split(Fs);
      return s[0] === "" && s.length !== 1 && s.shift(), df(s, t) || ev(i);
    },
    getConflictingClassGroupIds: (i, s) => {
      const a = n[i] || [];
      return s && r[i] ? [...a, ...r[i]] : a;
    }
  };
}, df = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? df(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const l = e.join(Fs);
  return (i = t.validators.find(({
    validator: s
  }) => s(l))) == null ? void 0 : i.classGroupId;
}, uu = /^\[(.+)\]$/, ev = (e) => {
  if (uu.test(e)) {
    const t = uu.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, tv = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return rv(Object.entries(e.classGroups), n).forEach(([l, i]) => {
    bi(i, r, l, t);
  }), r;
}, bi = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const l = o === "" ? t : cu(t, o);
      l.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (nv(o)) {
        bi(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([l, i]) => {
      bi(i, cu(t, l), n, r);
    });
  });
}, cu = (e, t) => {
  let n = e;
  return t.split(Fs).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, nv = (e) => e.isThemeGetter, rv = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((l) => typeof l == "string" ? t + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(([i, s]) => [t + i, s])) : l);
  return [n, o];
}) : e, ov = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (l, i) => {
    n.set(l, i), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(l) {
      let i = n.get(l);
      if (i !== void 0)
        return i;
      if ((i = r.get(l)) !== void 0)
        return o(l, i), i;
    },
    set(l, i) {
      n.has(l) ? n.set(l, i) : o(l, i);
    }
  };
}, ff = "!", lv = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, o = t[0], l = t.length, i = (s) => {
    const a = [];
    let u = 0, g = 0, p;
    for (let k = 0; k < s.length; k++) {
      let d = s[k];
      if (u === 0) {
        if (d === o && (r || s.slice(k, k + l) === t)) {
          a.push(s.slice(g, k)), g = k + l;
          continue;
        }
        if (d === "/") {
          p = k;
          continue;
        }
      }
      d === "[" ? u++ : d === "]" && u--;
    }
    const f = a.length === 0 ? s : s.substring(g), y = f.startsWith(ff), x = y ? f.substring(1) : f, h = p && p > g ? p - g : void 0;
    return {
      modifiers: a,
      hasImportantModifier: y,
      baseClassName: x,
      maybePostfixModifierPosition: h
    };
  };
  return n ? (s) => n({
    className: s,
    parseClassName: i
  }) : i;
}, iv = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, sv = (e) => ({
  cache: ov(e.cacheSize),
  parseClassName: lv(e),
  ...qh(e)
}), av = /\s+/, uv = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, l = [], i = e.trim().split(av);
  let s = "";
  for (let a = i.length - 1; a >= 0; a -= 1) {
    const u = i[a], {
      modifiers: g,
      hasImportantModifier: p,
      baseClassName: f,
      maybePostfixModifierPosition: y
    } = n(u);
    let x = !!y, h = r(x ? f.substring(0, y) : f);
    if (!h) {
      if (!x) {
        s = u + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (h = r(f), !h) {
        s = u + (s.length > 0 ? " " + s : s);
        continue;
      }
      x = !1;
    }
    const k = iv(g).join(":"), d = p ? k + ff : k, c = d + h;
    if (l.includes(c))
      continue;
    l.push(c);
    const m = o(h, x);
    for (let w = 0; w < m.length; ++w) {
      const E = m[w];
      l.push(d + E);
    }
    s = u + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function cv() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = pf(t)) && (r && (r += " "), r += n);
  return r;
}
const pf = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = pf(e[r])) && (n && (n += " "), n += t);
  return n;
};
function dv(e, ...t) {
  let n, r, o, l = i;
  function i(a) {
    const u = t.reduce((g, p) => p(g), e());
    return n = sv(u), r = n.cache.get, o = n.cache.set, l = s, s(a);
  }
  function s(a) {
    const u = r(a);
    if (u)
      return u;
    const g = uv(a, n);
    return o(a, g), g;
  }
  return function() {
    return l(cv.apply(null, arguments));
  };
}
const H = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, mf = /^\[(?:([a-z-]+):)?(.+)\]$/i, fv = /^\d+\/\d+$/, pv = /* @__PURE__ */ new Set(["px", "full", "screen"]), mv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, gv = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, hv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, vv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, yv = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Je = (e) => Cn(e) || pv.has(e) || fv.test(e), dt = (e) => jn(e, "length", Dv), Cn = (e) => !!e && !Number.isNaN(Number(e)), Bl = (e) => jn(e, "number", Cn), Vn = (e) => !!e && Number.isInteger(Number(e)), wv = (e) => e.endsWith("%") && Cn(e.slice(0, -1)), z = (e) => mf.test(e), ft = (e) => mv.test(e), xv = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Sv = (e) => jn(e, xv, gf), kv = (e) => jn(e, "position", gf), Ev = /* @__PURE__ */ new Set(["image", "url"]), Cv = (e) => jn(e, Ev, _v), Nv = (e) => jn(e, "", Pv), Hn = () => !0, jn = (e, t, n) => {
  const r = mf.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, Dv = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  gv.test(e) && !hv.test(e)
), gf = () => !1, Pv = (e) => vv.test(e), _v = (e) => yv.test(e), Tv = () => {
  const e = H("colors"), t = H("spacing"), n = H("blur"), r = H("brightness"), o = H("borderColor"), l = H("borderRadius"), i = H("borderSpacing"), s = H("borderWidth"), a = H("contrast"), u = H("grayscale"), g = H("hueRotate"), p = H("invert"), f = H("gap"), y = H("gradientColorStops"), x = H("gradientColorStopPositions"), h = H("inset"), k = H("margin"), d = H("opacity"), c = H("padding"), m = H("saturate"), w = H("scale"), E = H("sepia"), P = H("skew"), C = H("space"), T = H("translate"), I = () => ["auto", "contain", "none"], L = () => ["auto", "hidden", "clip", "visible", "scroll"], $ = () => ["auto", z, t], D = () => [z, t], b = () => ["", Je, dt], B = () => ["auto", Cn, z], U = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], Y = () => ["solid", "dashed", "dotted", "double", "none"], ge = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], _ = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], R = () => ["", "0", z], O = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], A = () => [Cn, z];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Hn],
      spacing: [Je, dt],
      blur: ["none", "", ft, z],
      brightness: A(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ft, z],
      borderSpacing: D(),
      borderWidth: b(),
      contrast: A(),
      grayscale: R(),
      hueRotate: A(),
      invert: R(),
      gap: D(),
      gradientColorStops: [e],
      gradientColorStopPositions: [wv, dt],
      inset: $(),
      margin: $(),
      opacity: A(),
      padding: D(),
      saturate: A(),
      scale: A(),
      sepia: R(),
      skew: A(),
      space: D(),
      translate: D()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", z]
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
        columns: [ft]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": O()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": O()
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
        object: [...U(), z]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: L()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": L()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": L()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: I()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": I()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": I()
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
        inset: [h]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [h]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [h]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [h]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [h]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [h]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [h]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [h]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [h]
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
        z: ["auto", Vn, z]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: $()
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
        flex: ["1", "auto", "initial", "none", z]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: R()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: R()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Vn, z]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Hn]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Vn, z]
        }, z]
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
        "grid-rows": [Hn]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Vn, z]
        }, z]
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
        "auto-cols": ["auto", "min", "max", "fr", z]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", z]
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
        justify: ["normal", ..._()]
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
        content: ["normal", ..._(), "baseline"]
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
        "place-content": [..._(), "baseline"]
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
        p: [c]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [c]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [c]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [c]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [c]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [c]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [c]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [c]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [c]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [k]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [k]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [k]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [k]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [k]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [k]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [k]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [k]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [k]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", z, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [z, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [z, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [ft]
        }, ft]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [z, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [z, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [z, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [z, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ft, dt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Bl]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Hn]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", z]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Cn, Bl]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Je, z]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", z]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", z]
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
        "placeholder-opacity": [d]
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
        "text-opacity": [d]
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
        decoration: [...Y(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Je, dt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Je, z]
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
        indent: D()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", z]
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
        content: ["none", z]
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
        "bg-opacity": [d]
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
        bg: [...U(), kv]
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
        bg: ["auto", "cover", "contain", Sv]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Cv]
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
        from: [x]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [x]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [x]
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
        rounded: [l]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [l]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [l]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [l]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [l]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [l]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [l]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [l]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [l]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [l]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [l]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [l]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [l]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [l]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [l]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [d]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...Y(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
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
        "divide-y": [s]
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
        "divide-opacity": [d]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: Y()
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
        outline: ["", ...Y()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Je, z]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Je, dt]
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
        ring: b()
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
        "ring-opacity": [d]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Je, dt]
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
        shadow: ["", "inner", "none", ft, Nv]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Hn]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [d]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ge(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ge()
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
        contrast: [a]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", ft, z]
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
        "hue-rotate": [g]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [p]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [m]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [E]
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
        "backdrop-contrast": [a]
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
        "backdrop-hue-rotate": [g]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [p]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [d]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [m]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [E]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", z]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: A()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", z]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: A()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", z]
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
        scale: [w]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [w]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [w]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Vn, z]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", z]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", z]
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
        "scroll-m": D()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": D()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": D()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": D()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": D()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": D()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": D()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": D()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": D()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": D()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": D()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": D()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": D()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": D()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": D()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": D()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": D()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": D()
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
        "will-change": ["auto", "scroll", "contents", "transform", z]
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
        stroke: [Je, dt, Bl]
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
}, Mv = /* @__PURE__ */ dv(Tv);
function zt(...e) {
  return Mv(Jh(e));
}
const Rv = Yh, Lv = Xh, hf = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ S.jsx(
  lf,
  {
    ref: n,
    className: zt(
      "fixed inset-0 z-[99999] bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
hf.displayName = lf.displayName;
const vf = v.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ S.jsxs(Lv, { children: [
  /* @__PURE__ */ S.jsx(hf, {}),
  /* @__PURE__ */ S.jsxs(
    sf,
    {
      ref: r,
      className: zt(
        "fixed left-[50%] top-[50%] z-[99999] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-card text-foreground p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ S.jsxs(Zh, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-all duration-200 hover:opacity-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 p-1", children: [
          /* @__PURE__ */ S.jsx(ig, { className: "h-4 w-4" }),
          /* @__PURE__ */ S.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
vf.displayName = sf.displayName;
const yf = ({
  className: e,
  ...t
}) => /* @__PURE__ */ S.jsx(
  "div",
  {
    className: zt(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
yf.displayName = "DialogHeader";
const wf = ({
  className: e,
  ...t
}) => /* @__PURE__ */ S.jsx(
  "div",
  {
    className: zt(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
wf.displayName = "DialogFooter";
const xf = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ S.jsx(
  af,
  {
    ref: n,
    className: zt(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
xf.displayName = af.displayName;
const Sf = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ S.jsx(
  uf,
  {
    ref: n,
    className: zt("text-sm text-muted-foreground", e),
    ...t
  }
));
Sf.displayName = uf.displayName;
const go = v.forwardRef(
  ({ className: e, variant: t = "default", size: n = "default", ...r }, o) => /* @__PURE__ */ S.jsx(
    "button",
    {
      className: zt(
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
go.displayName = "Button";
function du({
  className: e,
  variant: t = "default",
  size: n = "default",
  ...r
}) {
  return /* @__PURE__ */ S.jsx(
    "div",
    {
      className: zt(
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
function Ov({ event: e, eventMetadata: t, open: n, onOpenChange: r, showCost: o = !0 }) {
  const [l, i] = fe.useState(!1);
  if (fe.useEffect(() => {
    var p;
    e && ((p = t[e.id]) != null && p.website) && console.log("Event website URL:", t[e.id].website);
  }, [e, t]), !e) return null;
  const s = t[e.id], a = (p, f = 180) => {
    if (!p || p.length <= f) return p;
    const y = p.substring(0, f), x = y.lastIndexOf("."), h = y.lastIndexOf(" "), k = x > f - 50 ? x + 1 : h;
    return p.substring(0, k > 0 ? k : f).trim();
  }, u = (p) => {
    const f = e.startDate, y = e.endDate || new Date(f.getTime() + 60 * 60 * 1e3), x = (h) => h.toISOString().replace(/-|:|\.\d\d\d/g, "");
    switch (p) {
      case "google":
        const h = new URL("https://calendar.google.com/calendar/render");
        return h.searchParams.append("action", "TEMPLATE"), h.searchParams.append("text", e.title), h.searchParams.append("dates", `${x(f)}/${x(y)}`), h.searchParams.append("details", e.description || ""), s != null && s.location && h.searchParams.append("location", s.location), h.toString();
      case "outlook":
      case "apple":
        const k = [
          "BEGIN:VCALENDAR",
          "VERSION:2.0",
          "PRODID:-//UNBC Calendar//Events//EN",
          "METHOD:PUBLISH",
          "BEGIN:VEVENT",
          `UID:${e.id}@unbc-calendar`,
          `DTSTART:${x(f)}`,
          `DTEND:${x(y)}`,
          `SUMMARY:${e.title}`,
          `DESCRIPTION:${e.description || ""}`,
          s != null && s.location ? `LOCATION:${s.location}` : "",
          s != null && s.website ? `URL:${s.website}` : "",
          `ORGANIZER;CN=${(s == null ? void 0 : s.organization) || "Over the Edge"}:MAILTO:ote@unbc.ca`,
          "STATUS:CONFIRMED",
          "END:VEVENT",
          "END:VCALENDAR"
        ].filter((d) => d).join(`
`);
        return `data:text/calendar;charset=utf8,${encodeURIComponent(k)}`;
    }
  }, g = {
    clubs: "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary",
    unbc: "bg-secondary/10 text-secondary dark:bg-secondary/20 dark:text-secondary",
    organizations: "bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive",
    sports: "bg-accent/10 text-accent dark:bg-accent/20 dark:text-accent"
  };
  return /* @__PURE__ */ S.jsx(Rv, { open: n, onOpenChange: r, children: /* @__PURE__ */ S.jsxs(vf, { className: "max-w-2xl w-[95vw] max-h-[90vh] overflow-y-auto overflow-x-hidden bg-card border border-border sm:w-full p-4 sm:p-6", children: [
    /* @__PURE__ */ S.jsxs(yf, { children: [
      /* @__PURE__ */ S.jsx(xf, { className: "text-xl text-foreground", children: e.title }),
      e.description && /* @__PURE__ */ S.jsxs("div", { className: "mt-2", children: [
        /* @__PURE__ */ S.jsx(Sf, { className: `text-muted-foreground leading-relaxed break-words ${l ? "max-h-[40vh] overflow-y-auto pr-2" : ""}`, children: l ? e.description : a(e.description) }),
        e.description.length > 180 && /* @__PURE__ */ S.jsx(
          "button",
          {
            onClick: () => i(!l),
            className: "inline-flex items-center gap-1 mt-3 px-3 py-2 text-sm text-primary hover:text-primary/80 hover:bg-primary/10 active:bg-primary/20 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
            children: l ? /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
              "Show less",
              /* @__PURE__ */ S.jsx(eg, { className: "h-4 w-4" })
            ] }) : /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
              "Read more",
              /* @__PURE__ */ S.jsx(qm, { className: "h-4 w-4" })
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ S.jsx("div", { className: "space-y-4 my-4", children: /* @__PURE__ */ S.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
        /* @__PURE__ */ S.jsx(tg, { className: "h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" }),
        /* @__PURE__ */ S.jsxs("div", { className: "space-y-1 text-foreground", children: [
          /* @__PURE__ */ S.jsx("div", { className: "font-medium", children: e.startDate.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          }) }),
          /* @__PURE__ */ S.jsxs("div", { className: "text-muted-foreground text-sm", children: [
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
      s && /* @__PURE__ */ S.jsxs("div", { className: "space-y-2 text-sm text-foreground", children: [
        s.location && /* @__PURE__ */ S.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ S.jsx(lg, { className: "h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" }),
          /* @__PURE__ */ S.jsx("span", { children: s.location })
        ] }),
        s.organization && /* @__PURE__ */ S.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ S.jsx(Jm, { className: "h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" }),
          /* @__PURE__ */ S.jsx("span", { children: s.organization })
        ] }),
        o && s.cost && /* @__PURE__ */ S.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ S.jsx(ng, { className: "h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" }),
          /* @__PURE__ */ S.jsx("span", { children: s.cost })
        ] }),
        s.website && /* @__PURE__ */ S.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ S.jsx(rg, { className: "h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" }),
          /* @__PURE__ */ S.jsx(
            "a",
            {
              href: s.website,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-block text-primary hover:text-primary/80 hover:underline transition-colors break-all cursor-pointer",
              style: { pointerEvents: "auto", position: "relative", zIndex: 10 },
              children: "Event Website"
            }
          )
        ] }),
        /* @__PURE__ */ S.jsxs("div", { className: "flex items-center gap-3 pt-1", children: [
          s.category && /* @__PURE__ */ S.jsx(du, { className: g[s.category] || "bg-muted text-foreground", children: s.category.charAt(0).toUpperCase() + s.category.slice(1) }),
          s.registrationRequired && /* @__PURE__ */ S.jsx(du, { variant: "outline", className: "border-border text-foreground", children: "Registration Required" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ S.jsxs(wf, { className: "flex-col sm:flex-col gap-2", children: [
      /* @__PURE__ */ S.jsx("div", { className: "text-sm text-muted-foreground mb-2", children: "Add to your calendar:" }),
      /* @__PURE__ */ S.jsxs("div", { className: "flex gap-2 w-full", children: [
        /* @__PURE__ */ S.jsxs(
          go,
          {
            variant: "outline",
            className: "flex-1 border-border bg-card text-foreground hover:bg-muted text-xs sm:text-sm",
            onClick: () => window.open(u("google"), "_blank"),
            children: [
              /* @__PURE__ */ S.jsx(Ol, { className: "h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" }),
              "Google"
            ]
          }
        ),
        /* @__PURE__ */ S.jsxs(
          go,
          {
            variant: "outline",
            className: "flex-1 border-border bg-card text-foreground hover:bg-muted text-xs sm:text-sm",
            onClick: () => {
              const p = u("outlook"), f = document.createElement("a");
              f.href = p, f.download = `${e.title.replace(/[^a-z0-9]/gi, "_")}.ics`, f.click();
            },
            children: [
              /* @__PURE__ */ S.jsx(Ol, { className: "h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" }),
              "Outlook"
            ]
          }
        ),
        /* @__PURE__ */ S.jsxs(
          go,
          {
            variant: "outline",
            className: "flex-1 border-border bg-card text-foreground hover:bg-muted text-xs sm:text-sm",
            onClick: () => {
              const p = u("apple"), f = document.createElement("a");
              f.href = p, f.download = `${e.title.replace(/[^a-z0-9]/gi, "_")}.ics`, f.click();
            },
            children: [
              /* @__PURE__ */ S.jsx(Ol, { className: "h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" }),
              "Apple"
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
function zv({
  title: e = "Today's Events",
  maxEvents: t = 10
}) {
  const [n, r] = fe.useState(!1), [o, l] = fe.useState(null), [i, s] = fe.useState(!1);
  fe.useEffect(() => {
    let D;
    const b = () => {
      var Y;
      const U = document.documentElement.hasAttribute("data-theme") && document.documentElement.getAttribute("data-theme") === "dark" || document.documentElement.hasAttribute("data-color-scheme") && document.documentElement.getAttribute("data-color-scheme") === "dark" || document.body.classList.contains("dark") || document.documentElement.classList.contains("is-dark-theme") || document.body.classList.contains("is-dark-theme") || ((Y = getComputedStyle(document.documentElement).getPropertyValue("--wp--preset--color--background")) == null ? void 0 : Y.includes("0, 0, 0")) || getComputedStyle(document.body).backgroundColor === "rgb(0, 0, 0)" || !document.documentElement.hasAttribute("data-theme") && window.matchMedia("(prefers-color-scheme: dark)").matches;
      r(U), D && D.disconnect(), U ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"), D && (D.observe(document.documentElement, { attributes: !0, attributeFilter: ["data-theme", "data-color-scheme"] }), D.observe(document.body, { attributes: !0, attributeFilter: ["class"] }));
    };
    b(), D = new MutationObserver(b), D.observe(document.documentElement, { attributes: !0, attributeFilter: ["data-theme", "data-color-scheme"] }), D.observe(document.body, { attributes: !0, attributeFilter: ["class"] });
    const B = window.matchMedia("(prefers-color-scheme: dark)");
    return B.addEventListener("change", b), () => {
      D.disconnect(), B.removeEventListener("change", b);
    };
  }, []);
  const a = /* @__PURE__ */ new Date();
  a.setHours(0, 0, 0, 0);
  const u = new Date(a);
  u.setDate(u.getDate() + 1);
  const g = fe.useMemo(() => ({
    per_page: 100,
    start_date: a.toISOString().split("T")[0],
    end_date: u.toISOString().split("T")[0],
    year: a.getFullYear(),
    month: a.getMonth() + 1,
    category: ""
  }), []);
  ug(g);
  const p = fg(g), f = pg(), y = p, {
    events: x,
    eventMetadata: h,
    loading: k,
    error: d,
    categoryMappings: c
  } = y, { categories: m, loading: w } = f, E = fe.useMemo(
    () => hg(m),
    [m]
  ), P = fe.useMemo(() => c && Object.keys(c).length > 0 ? c : E, [c, E]), C = fe.useMemo(() => x.filter((B) => {
    const U = new Date(B.startDate);
    return U.setHours(0, 0, 0, 0), U.getTime() === a.getTime();
  }).sort((B, U) => B.startDate.getTime() - U.startDate.getTime()).slice(0, t), [x, t]), T = (D) => D.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
  }), I = a.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  }), L = fe.useCallback((D) => {
    l(D), s(!0);
  }, []), $ = (D) => {
    const b = h[D.id], B = gg(b == null ? void 0 : b.category, P), Y = mg(B).replace("bg-", "after:bg-"), ge = new Date(D.startDate), _ = new Date(D.endDate), R = !Number.isNaN(ge.getTime()) && !Number.isNaN(_.getTime()), O = R && ge.getTime() === _.getTime(), A = R ? `${T(ge)}${O ? "" : ` - ${T(_)}`}` : null;
    return /* @__PURE__ */ S.jsxs(
      "div",
      {
        className: `bg-card dark:bg-card relative rounded-md p-2 pl-6 text-xs text-left w-full after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full cursor-pointer hover:bg-muted dark:hover:bg-muted transition-colors border border-gray-200 dark:border-border shadow-sm ${Y}`,
        onClick: (te) => {
          te.stopPropagation(), L(D);
        },
        children: [
          /* @__PURE__ */ S.jsx("div", { className: "font-medium text-[13px] text-gray-900 dark:text-foreground leading-tight", children: D.title }),
          A && /* @__PURE__ */ S.jsx("div", { className: "mt-0.5 text-[11px] text-gray-900 dark:text-foreground", children: A })
        ]
      },
      D.id
    );
  };
  return k || w ? /* @__PURE__ */ S.jsx("div", { className: `w-full ${n ? "dark" : ""}`, children: /* @__PURE__ */ S.jsx("div", { className: "rounded-lg border border-gray-200 dark:border-border bg-white dark:bg-card shadow-md p-4", children: /* @__PURE__ */ S.jsxs("div", { className: "text-center py-4", children: [
    /* @__PURE__ */ S.jsx(og, { className: "h-6 w-6 animate-spin mx-auto mb-2 text-gray-400 dark:text-muted-foreground" }),
    /* @__PURE__ */ S.jsx("p", { className: "text-xs text-gray-500 dark:text-muted-foreground", children: "Loading events..." })
  ] }) }) }) : d ? /* @__PURE__ */ S.jsx("div", { className: `w-full ${n ? "dark" : ""}`, children: /* @__PURE__ */ S.jsx("div", { className: "rounded-lg border border-red-200 dark:border-red-900 bg-white dark:bg-card shadow-md p-4", children: /* @__PURE__ */ S.jsx("p", { className: "text-xs text-red-600 dark:text-red-400", children: "Error loading events" }) }) }) : /* @__PURE__ */ S.jsxs("div", { className: `w-full ${n ? "dark" : ""}`, children: [
    /* @__PURE__ */ S.jsxs("div", { className: "rounded-lg border border-gray-200 dark:border-border bg-white dark:bg-card shadow-md p-4", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "space-y-1 mb-3", children: [
        /* @__PURE__ */ S.jsx("div", { className: "text-xs uppercase tracking-wide text-gray-500 dark:text-muted-foreground", children: e }),
        /* @__PURE__ */ S.jsx("div", { className: "text-base font-semibold text-gray-900 dark:text-foreground", children: I })
      ] }),
      /* @__PURE__ */ S.jsx("div", { className: "space-y-1.5", children: C.length > 0 ? C.map($) : /* @__PURE__ */ S.jsx("div", { className: "rounded-md border border-dashed border-gray-200 dark:border-border bg-gray-50 dark:bg-card px-3 py-4 text-xs text-gray-600 dark:text-muted-foreground", children: "No events scheduled for today." }) })
    ] }),
    /* @__PURE__ */ S.jsx(
      Ov,
      {
        event: o,
        eventMetadata: h,
        open: i,
        onOpenChange: s
      }
    )
  ] });
}
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".unbc-today-events-widget").forEach((t) => {
    const n = t.getAttribute("data-title") || "Today's Events", r = parseInt(t.getAttribute("data-max-events") || "10");
    Vl.createRoot(t).render(
      /* @__PURE__ */ S.jsx(fe.StrictMode, { children: /* @__PURE__ */ S.jsx(
        zv,
        {
          title: n,
          maxEvents: r
        }
      ) })
    );
  });
});
