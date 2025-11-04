function xf(e, t) {
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
function cu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var du = { exports: {} }, $o = {}, fu = { exports: {} }, j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cr = Symbol.for("react.element"), Sf = Symbol.for("react.portal"), kf = Symbol.for("react.fragment"), Ef = Symbol.for("react.strict_mode"), Cf = Symbol.for("react.profiler"), Nf = Symbol.for("react.provider"), Df = Symbol.for("react.context"), Pf = Symbol.for("react.forward_ref"), _f = Symbol.for("react.suspense"), Tf = Symbol.for("react.memo"), Mf = Symbol.for("react.lazy"), As = Symbol.iterator;
function Rf(e) {
  return e === null || typeof e != "object" ? null : (e = As && e[As] || e["@@iterator"], typeof e == "function" ? e : null);
}
var pu = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, mu = Object.assign, hu = {};
function Ln(e, t, n) {
  this.props = e, this.context = t, this.refs = hu, this.updater = n || pu;
}
Ln.prototype.isReactComponent = {};
Ln.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ln.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function gu() {
}
gu.prototype = Ln.prototype;
function Fi(e, t, n) {
  this.props = e, this.context = t, this.refs = hu, this.updater = n || pu;
}
var bi = Fi.prototype = new gu();
bi.constructor = Fi;
mu(bi, Ln.prototype);
bi.isPureReactComponent = !0;
var Fs = Array.isArray, vu = Object.prototype.hasOwnProperty, $i = { current: null }, yu = { key: !0, ref: !0, __self: !0, __source: !0 };
function wu(e, t, n) {
  var r, o = {}, l = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t) vu.call(t, r) && !yu.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in s = e.defaultProps, s) o[r] === void 0 && (o[r] = s[r]);
  return { $$typeof: Cr, type: e, key: l, ref: i, props: o, _owner: $i.current };
}
function Lf(e, t) {
  return { $$typeof: Cr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ui(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Cr;
}
function Of(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var bs = /\/+/g;
function il(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Of("" + e.key) : t.toString(36);
}
function qr(e, t, n, r, o) {
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
        case Sf:
          i = !0;
      }
  }
  if (i) return i = e, o = o(i), e = r === "" ? "." + il(i, 0) : r, Fs(o) ? (n = "", e != null && (n = e.replace(bs, "$&/") + "/"), qr(o, t, n, "", function(u) {
    return u;
  })) : o != null && (Ui(o) && (o = Lf(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(bs, "$&/") + "/") + e)), t.push(o)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", Fs(e)) for (var s = 0; s < e.length; s++) {
    l = e[s];
    var a = r + il(l, s);
    i += qr(l, t, n, a, o);
  }
  else if (a = Rf(e), typeof a == "function") for (e = a.call(e), s = 0; !(l = e.next()).done; ) l = l.value, a = r + il(l, s++), i += qr(l, t, n, a, o);
  else if (l === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function Rr(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return qr(e, r, "", "", function(l) {
    return t.call(n, l, o++);
  }), r;
}
function zf(e) {
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
var ye = { current: null }, eo = { transition: null }, jf = { ReactCurrentDispatcher: ye, ReactCurrentBatchConfig: eo, ReactCurrentOwner: $i };
function xu() {
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
  if (!Ui(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
j.Component = Ln;
j.Fragment = kf;
j.Profiler = Cf;
j.PureComponent = Fi;
j.StrictMode = Ef;
j.Suspense = _f;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jf;
j.act = xu;
j.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = mu({}, e.props), o = e.key, l = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (l = t.ref, i = $i.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (a in t) vu.call(t, a) && !yu.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
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
  return e = { $$typeof: Df, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Nf, _context: e }, e.Consumer = e;
};
j.createElement = wu;
j.createFactory = function(e) {
  var t = wu.bind(null, e);
  return t.type = e, t;
};
j.createRef = function() {
  return { current: null };
};
j.forwardRef = function(e) {
  return { $$typeof: Pf, render: e };
};
j.isValidElement = Ui;
j.lazy = function(e) {
  return { $$typeof: Mf, _payload: { _status: -1, _result: e }, _init: zf };
};
j.memo = function(e, t) {
  return { $$typeof: Tf, type: e, compare: t === void 0 ? null : t };
};
j.startTransition = function(e) {
  var t = eo.transition;
  eo.transition = {};
  try {
    e();
  } finally {
    eo.transition = t;
  }
};
j.unstable_act = xu;
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
fu.exports = j;
var v = fu.exports;
const fe = /* @__PURE__ */ cu(v), Su = /* @__PURE__ */ xf({
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
var If = v, Af = Symbol.for("react.element"), Ff = Symbol.for("react.fragment"), bf = Object.prototype.hasOwnProperty, $f = If.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Uf = { key: !0, ref: !0, __self: !0, __source: !0 };
function ku(e, t, n) {
  var r, o = {}, l = null, i = null;
  n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) bf.call(t, r) && !Uf.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Af, type: e, key: l, ref: i, props: o, _owner: $f.current };
}
$o.Fragment = Ff;
$o.jsx = ku;
$o.jsxs = ku;
du.exports = $o;
var S = du.exports, Wl = {}, Eu = { exports: {} }, Te = {}, Cu = { exports: {} }, Nu = {};
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
        var jt = 2 * (A + 1) - 1, ll = _[jt], It = jt + 1, Mr = _[It];
        if (0 > o(ll, O)) It < te && 0 > o(Mr, ll) ? (_[A] = Mr, _[It] = O, A = It) : (_[A] = ll, _[jt] = O, A = jt);
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
  var a = [], u = [], h = 1, p = null, f = 3, y = !1, x = !1, g = !1, k = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
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
    if (g = !1, m(_), !x) if (n(a) !== null) x = !0, Y(E);
    else {
      var R = n(u);
      R !== null && he(w, R.startTime - _);
    }
  }
  function E(_, R) {
    x = !1, g && (g = !1, d(T), T = -1), y = !0;
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
        jt !== null && he(w, jt.startTime - R), Tr = !1;
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
  function he(_, R) {
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
    return te = O + te, _ = { id: h++, callback: R, priorityLevel: _, startTime: O, expirationTime: te, sortIndex: -1 }, O > A ? (_.sortIndex = O, t(u, _), n(a) === null && _ === n(u) && (g ? (d(T), T = -1) : g = !0, he(w, O - A))) : (_.sortIndex = te, t(a, _), x || y || (x = !0, Y(E))), _;
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
})(Nu);
Cu.exports = Nu;
var Wf = Cu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bf = v, _e = Wf;
function N(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Du = /* @__PURE__ */ new Set(), lr = {};
function Xt(e, t) {
  Nn(e, t), Nn(e + "Capture", t);
}
function Nn(e, t) {
  for (lr[e] = t, e = 0; e < t.length; e++) Du.add(t[e]);
}
var ot = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Bl = Object.prototype.hasOwnProperty, Vf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, $s = {}, Us = {};
function Hf(e) {
  return Bl.call(Us, e) ? !0 : Bl.call($s, e) ? !1 : Vf.test(e) ? Us[e] = !0 : ($s[e] = !0, !1);
}
function Qf(e, t, n, r) {
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
function Gf(e, t, n, r) {
  if (t === null || typeof t > "u" || Qf(e, t, n, r)) return !0;
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
var Wi = /[\-:]([a-z])/g;
function Bi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Wi,
    Bi
  );
  ue[t] = new we(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Wi, Bi);
  ue[t] = new we(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Wi, Bi);
  ue[t] = new we(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ue[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ue.xlinkHref = new we("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ue[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Vi(e, t, n, r) {
  var o = ue.hasOwnProperty(t) ? ue[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Gf(t, n, o, r) && (n = null), r || o === null ? Hf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var at = Bf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Lr = Symbol.for("react.element"), on = Symbol.for("react.portal"), ln = Symbol.for("react.fragment"), Hi = Symbol.for("react.strict_mode"), Vl = Symbol.for("react.profiler"), Pu = Symbol.for("react.provider"), _u = Symbol.for("react.context"), Qi = Symbol.for("react.forward_ref"), Hl = Symbol.for("react.suspense"), Ql = Symbol.for("react.suspense_list"), Gi = Symbol.for("react.memo"), mt = Symbol.for("react.lazy"), Tu = Symbol.for("react.offscreen"), Ws = Symbol.iterator;
function In(e) {
  return e === null || typeof e != "object" ? null : (e = Ws && e[Ws] || e["@@iterator"], typeof e == "function" ? e : null);
}
var J = Object.assign, sl;
function Qn(e) {
  if (sl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    sl = t && t[1] || "";
  }
  return `
` + sl + e;
}
var al = !1;
function ul(e, t) {
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
    al = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Qn(e) : "";
}
function Kf(e) {
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
      return e = ul(e.type, !1), e;
    case 11:
      return e = ul(e.type.render, !1), e;
    case 1:
      return e = ul(e.type, !0), e;
    default:
      return "";
  }
}
function Gl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ln:
      return "Fragment";
    case on:
      return "Portal";
    case Vl:
      return "Profiler";
    case Hi:
      return "StrictMode";
    case Hl:
      return "Suspense";
    case Ql:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case _u:
      return (e.displayName || "Context") + ".Consumer";
    case Pu:
      return (e._context.displayName || "Context") + ".Provider";
    case Qi:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Gi:
      return t = e.displayName || null, t !== null ? t : Gl(e.type) || "Memo";
    case mt:
      t = e._payload, e = e._init;
      try {
        return Gl(e(t));
      } catch {
      }
  }
  return null;
}
function Yf(e) {
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
      return Gl(t);
    case 8:
      return t === Hi ? "StrictMode" : "Mode";
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
function Mu(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Xf(e) {
  var t = Mu(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  e._valueTracker || (e._valueTracker = Xf(e));
}
function Ru(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Mu(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ho(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Kl(e, t) {
  var n = t.checked;
  return J({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Bs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Tt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Lu(e, t) {
  t = t.checked, t != null && Vi(e, "checked", t, !1);
}
function Yl(e, t) {
  Lu(e, t);
  var n = Tt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Xl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Xl(e, t.type, Tt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Vs(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Xl(e, t, n) {
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
function Zl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return J({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Hs(e, t) {
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
function Ou(e, t) {
  var n = Tt(t.value), r = Tt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Qs(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function zu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Jl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? zu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var zr, ju = function(e) {
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
}, Zf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Xn).forEach(function(e) {
  Zf.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Xn[t] = Xn[e];
  });
});
function Iu(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Xn.hasOwnProperty(e) && Xn[e] ? ("" + t).trim() : t + "px";
}
function Au(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Iu(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var Jf = J({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ql(e, t) {
  if (t) {
    if (Jf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function ei(e, t) {
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
var ti = null;
function Ki(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ni = null, yn = null, wn = null;
function Gs(e) {
  if (e = Pr(e)) {
    if (typeof ni != "function") throw Error(N(280));
    var t = e.stateNode;
    t && (t = Ho(t), ni(e.stateNode, e.type, t));
  }
}
function Fu(e) {
  yn ? wn ? wn.push(e) : wn = [e] : yn = e;
}
function bu() {
  if (yn) {
    var e = yn, t = wn;
    if (wn = yn = null, Gs(e), t) for (e = 0; e < t.length; e++) Gs(t[e]);
  }
}
function $u(e, t) {
  return e(t);
}
function Uu() {
}
var cl = !1;
function Wu(e, t, n) {
  if (cl) return e(t, n);
  cl = !0;
  try {
    return $u(e, t, n);
  } finally {
    cl = !1, (yn !== null || wn !== null) && (Uu(), bu());
  }
}
function sr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ho(n);
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
var ri = !1;
if (ot) try {
  var An = {};
  Object.defineProperty(An, "passive", { get: function() {
    ri = !0;
  } }), window.addEventListener("test", An, An), window.removeEventListener("test", An, An);
} catch {
  ri = !1;
}
function qf(e, t, n, r, o, l, i, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (h) {
    this.onError(h);
  }
}
var Zn = !1, go = null, vo = !1, oi = null, ep = { onError: function(e) {
  Zn = !0, go = e;
} };
function tp(e, t, n, r, o, l, i, s, a) {
  Zn = !1, go = null, qf.apply(ep, arguments);
}
function np(e, t, n, r, o, l, i, s, a) {
  if (tp.apply(this, arguments), Zn) {
    if (Zn) {
      var u = go;
      Zn = !1, go = null;
    } else throw Error(N(198));
    vo || (vo = !0, oi = u);
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
function Bu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Ks(e) {
  if (Zt(e) !== e) throw Error(N(188));
}
function rp(e) {
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
        if (l === n) return Ks(o), e;
        if (l === r) return Ks(o), t;
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
function Vu(e) {
  return e = rp(e), e !== null ? Hu(e) : null;
}
function Hu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Hu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Qu = _e.unstable_scheduleCallback, Ys = _e.unstable_cancelCallback, op = _e.unstable_shouldYield, lp = _e.unstable_requestPaint, ee = _e.unstable_now, ip = _e.unstable_getCurrentPriorityLevel, Yi = _e.unstable_ImmediatePriority, Gu = _e.unstable_UserBlockingPriority, yo = _e.unstable_NormalPriority, sp = _e.unstable_LowPriority, Ku = _e.unstable_IdlePriority, Uo = null, Ye = null;
function ap(e) {
  if (Ye && typeof Ye.onCommitFiberRoot == "function") try {
    Ye.onCommitFiberRoot(Uo, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Ue = Math.clz32 ? Math.clz32 : dp, up = Math.log, cp = Math.LN2;
function dp(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (up(e) / cp | 0) | 0;
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
function wo(e, t) {
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
function fp(e, t) {
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
function pp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
    var i = 31 - Ue(l), s = 1 << i, a = o[i];
    a === -1 ? (!(s & n) || s & r) && (o[i] = fp(s, t)) : a <= t && (e.expiredLanes |= s), l &= ~s;
  }
}
function li(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Yu() {
  var e = jr;
  return jr <<= 1, !(jr & 4194240) && (jr = 64), e;
}
function dl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Nr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ue(t), e[t] = n;
}
function mp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Ue(n), l = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
  }
}
function Xi(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Ue(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var W = 0;
function Xu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Zu, Zi, Ju, qu, ec, ii = !1, Ar = [], xt = null, St = null, kt = null, ar = /* @__PURE__ */ new Map(), ur = /* @__PURE__ */ new Map(), gt = [], hp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Xs(e, t) {
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
  return e === null || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [o] }, t !== null && (t = Pr(t), t !== null && Zi(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function gp(e, t, n, r, o) {
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
function tc(e) {
  var t = bt(e.target);
  if (t !== null) {
    var n = Zt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Bu(n), t !== null) {
          e.blockedOn = t, ec(e.priority, function() {
            Ju(n);
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
function to(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = si(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ti = r, n.target.dispatchEvent(r), ti = null;
    } else return t = Pr(n), t !== null && Zi(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Zs(e, t, n) {
  to(e) && n.delete(t);
}
function vp() {
  ii = !1, xt !== null && to(xt) && (xt = null), St !== null && to(St) && (St = null), kt !== null && to(kt) && (kt = null), ar.forEach(Zs), ur.forEach(Zs);
}
function bn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ii || (ii = !0, _e.unstable_scheduleCallback(_e.unstable_NormalPriority, vp)));
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
  for (xt !== null && bn(xt, e), St !== null && bn(St, e), kt !== null && bn(kt, e), ar.forEach(t), ur.forEach(t), n = 0; n < gt.length; n++) r = gt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < gt.length && (n = gt[0], n.blockedOn === null); ) tc(n), n.blockedOn === null && gt.shift();
}
var xn = at.ReactCurrentBatchConfig, xo = !0;
function yp(e, t, n, r) {
  var o = W, l = xn.transition;
  xn.transition = null;
  try {
    W = 1, Ji(e, t, n, r);
  } finally {
    W = o, xn.transition = l;
  }
}
function wp(e, t, n, r) {
  var o = W, l = xn.transition;
  xn.transition = null;
  try {
    W = 4, Ji(e, t, n, r);
  } finally {
    W = o, xn.transition = l;
  }
}
function Ji(e, t, n, r) {
  if (xo) {
    var o = si(e, t, n, r);
    if (o === null) Sl(e, t, r, So, n), Xs(e, r);
    else if (gp(o, e, t, n, r)) r.stopPropagation();
    else if (Xs(e, r), t & 4 && -1 < hp.indexOf(e)) {
      for (; o !== null; ) {
        var l = Pr(o);
        if (l !== null && Zu(l), l = si(e, t, n, r), l === null && Sl(e, t, r, So, n), l === o) break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else Sl(e, t, r, null, n);
  }
}
var So = null;
function si(e, t, n, r) {
  if (So = null, e = Ki(r), e = bt(e), e !== null) if (t = Zt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Bu(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return So = e, null;
}
function nc(e) {
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
      switch (ip()) {
        case Yi:
          return 1;
        case Gu:
          return 4;
        case yo:
        case sp:
          return 16;
        case Ku:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var yt = null, qi = null, no = null;
function rc() {
  if (no) return no;
  var e, t = qi, n = t.length, r, o = "value" in yt ? yt.value : yt.textContent, l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++) ;
  return no = o.slice(e, 1 < r ? 1 - r : void 0);
}
function ro(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Fr() {
  return !0;
}
function Js() {
  return !1;
}
function Me(e) {
  function t(n, r, o, l, i) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(l) : l[s]);
    return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Fr : Js, this.isPropagationStopped = Js, this;
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
}, defaultPrevented: 0, isTrusted: 0 }, es = Me(On), Dr = J({}, On, { view: 0, detail: 0 }), xp = Me(Dr), fl, pl, $n, Wo = J({}, Dr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ts, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== $n && ($n && e.type === "mousemove" ? (fl = e.screenX - $n.screenX, pl = e.screenY - $n.screenY) : pl = fl = 0, $n = e), fl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : pl;
} }), qs = Me(Wo), Sp = J({}, Wo, { dataTransfer: 0 }), kp = Me(Sp), Ep = J({}, Dr, { relatedTarget: 0 }), ml = Me(Ep), Cp = J({}, On, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Np = Me(Cp), Dp = J({}, On, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Pp = Me(Dp), _p = J({}, On, { data: 0 }), ea = Me(_p), Tp = {
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
}, Mp = {
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
}, Rp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Lp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Rp[e]) ? !!t[e] : !1;
}
function ts() {
  return Lp;
}
var Op = J({}, Dr, { key: function(e) {
  if (e.key) {
    var t = Tp[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ro(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Mp[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ts, charCode: function(e) {
  return e.type === "keypress" ? ro(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ro(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), zp = Me(Op), jp = J({}, Wo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ta = Me(jp), Ip = J({}, Dr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ts }), Ap = Me(Ip), Fp = J({}, On, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), bp = Me(Fp), $p = J({}, Wo, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Up = Me($p), Wp = [9, 13, 27, 32], ns = ot && "CompositionEvent" in window, Jn = null;
ot && "documentMode" in document && (Jn = document.documentMode);
var Bp = ot && "TextEvent" in window && !Jn, oc = ot && (!ns || Jn && 8 < Jn && 11 >= Jn), na = " ", ra = !1;
function lc(e, t) {
  switch (e) {
    case "keyup":
      return Wp.indexOf(t.keyCode) !== -1;
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
function ic(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var sn = !1;
function Vp(e, t) {
  switch (e) {
    case "compositionend":
      return ic(t);
    case "keypress":
      return t.which !== 32 ? null : (ra = !0, na);
    case "textInput":
      return e = t.data, e === na && ra ? null : e;
    default:
      return null;
  }
}
function Hp(e, t) {
  if (sn) return e === "compositionend" || !ns && lc(e, t) ? (e = rc(), no = qi = yt = null, sn = !1, e) : null;
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
      return oc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Qp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function oa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Qp[e.type] : t === "textarea";
}
function sc(e, t, n, r) {
  Fu(r), t = ko(t, "onChange"), 0 < t.length && (n = new es("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var qn = null, dr = null;
function Gp(e) {
  yc(e, 0);
}
function Bo(e) {
  var t = cn(e);
  if (Ru(t)) return e;
}
function Kp(e, t) {
  if (e === "change") return t;
}
var ac = !1;
if (ot) {
  var hl;
  if (ot) {
    var gl = "oninput" in document;
    if (!gl) {
      var la = document.createElement("div");
      la.setAttribute("oninput", "return;"), gl = typeof la.oninput == "function";
    }
    hl = gl;
  } else hl = !1;
  ac = hl && (!document.documentMode || 9 < document.documentMode);
}
function ia() {
  qn && (qn.detachEvent("onpropertychange", uc), dr = qn = null);
}
function uc(e) {
  if (e.propertyName === "value" && Bo(dr)) {
    var t = [];
    sc(t, dr, e, Ki(e)), Wu(Gp, t);
  }
}
function Yp(e, t, n) {
  e === "focusin" ? (ia(), qn = t, dr = n, qn.attachEvent("onpropertychange", uc)) : e === "focusout" && ia();
}
function Xp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Bo(dr);
}
function Zp(e, t) {
  if (e === "click") return Bo(t);
}
function Jp(e, t) {
  if (e === "input" || e === "change") return Bo(t);
}
function qp(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Be = typeof Object.is == "function" ? Object.is : qp;
function fr(e, t) {
  if (Be(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Bl.call(t, o) || !Be(e[o], t[o])) return !1;
  }
  return !0;
}
function sa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function aa(e, t) {
  var n = sa(e);
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
    n = sa(n);
  }
}
function cc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? cc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function dc() {
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
function rs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function em(e) {
  var t = dc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && cc(n.ownerDocument.documentElement, n)) {
    if (r !== null && rs(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, l = Math.min(r.start, o);
        r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = aa(n, l);
        var i = aa(
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
var tm = ot && "documentMode" in document && 11 >= document.documentMode, an = null, ai = null, er = null, ui = !1;
function ua(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ui || an == null || an !== ho(r) || (r = an, "selectionStart" in r && rs(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), er && fr(er, r) || (er = r, r = ko(ai, "onSelect"), 0 < r.length && (t = new es("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = an)));
}
function br(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var un = { animationend: br("Animation", "AnimationEnd"), animationiteration: br("Animation", "AnimationIteration"), animationstart: br("Animation", "AnimationStart"), transitionend: br("Transition", "TransitionEnd") }, vl = {}, fc = {};
ot && (fc = document.createElement("div").style, "AnimationEvent" in window || (delete un.animationend.animation, delete un.animationiteration.animation, delete un.animationstart.animation), "TransitionEvent" in window || delete un.transitionend.transition);
function Vo(e) {
  if (vl[e]) return vl[e];
  if (!un[e]) return e;
  var t = un[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in fc) return vl[e] = t[n];
  return e;
}
var pc = Vo("animationend"), mc = Vo("animationiteration"), hc = Vo("animationstart"), gc = Vo("transitionend"), vc = /* @__PURE__ */ new Map(), ca = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Rt(e, t) {
  vc.set(e, t), Xt(t, [e]);
}
for (var yl = 0; yl < ca.length; yl++) {
  var wl = ca[yl], nm = wl.toLowerCase(), rm = wl[0].toUpperCase() + wl.slice(1);
  Rt(nm, "on" + rm);
}
Rt(pc, "onAnimationEnd");
Rt(mc, "onAnimationIteration");
Rt(hc, "onAnimationStart");
Rt("dblclick", "onDoubleClick");
Rt("focusin", "onFocus");
Rt("focusout", "onBlur");
Rt(gc, "onTransitionEnd");
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
var Yn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), om = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yn));
function da(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, np(r, t, void 0, e), e.currentTarget = null;
}
function yc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var s = r[i], a = s.instance, u = s.currentTarget;
        if (s = s.listener, a !== l && o.isPropagationStopped()) break e;
        da(o, s, u), l = a;
      }
      else for (i = 0; i < r.length; i++) {
        if (s = r[i], a = s.instance, u = s.currentTarget, s = s.listener, a !== l && o.isPropagationStopped()) break e;
        da(o, s, u), l = a;
      }
    }
  }
  if (vo) throw e = oi, vo = !1, oi = null, e;
}
function Q(e, t) {
  var n = t[mi];
  n === void 0 && (n = t[mi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (wc(t, e, 2, !1), n.add(r));
}
function xl(e, t, n) {
  var r = 0;
  t && (r |= 4), wc(n, e, r, t);
}
var $r = "_reactListening" + Math.random().toString(36).slice(2);
function pr(e) {
  if (!e[$r]) {
    e[$r] = !0, Du.forEach(function(n) {
      n !== "selectionchange" && (om.has(n) || xl(n, !1, e), xl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[$r] || (t[$r] = !0, xl("selectionchange", !1, t));
  }
}
function wc(e, t, n, r) {
  switch (nc(t)) {
    case 1:
      var o = yp;
      break;
    case 4:
      o = wp;
      break;
    default:
      o = Ji;
  }
  n = o.bind(null, t, n, e), o = void 0, !ri || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Sl(e, t, n, r, o) {
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
  Wu(function() {
    var u = l, h = Ki(n), p = [];
    e: {
      var f = vc.get(e);
      if (f !== void 0) {
        var y = es, x = e;
        switch (e) {
          case "keypress":
            if (ro(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = zp;
            break;
          case "focusin":
            x = "focus", y = ml;
            break;
          case "focusout":
            x = "blur", y = ml;
            break;
          case "beforeblur":
          case "afterblur":
            y = ml;
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
            y = qs;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = kp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Ap;
            break;
          case pc:
          case mc:
          case hc:
            y = Np;
            break;
          case gc:
            y = bp;
            break;
          case "scroll":
            y = xp;
            break;
          case "wheel":
            y = Up;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Pp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = ta;
        }
        var g = (t & 4) !== 0, k = !g && e === "scroll", d = g ? f !== null ? f + "Capture" : null : f;
        g = [];
        for (var c = u, m; c !== null; ) {
          m = c;
          var w = m.stateNode;
          if (m.tag === 5 && w !== null && (m = w, d !== null && (w = sr(c, d), w != null && g.push(mr(c, w, m)))), k) break;
          c = c.return;
        }
        0 < g.length && (f = new y(f, x, null, n, h), p.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (f = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", f && n !== ti && (x = n.relatedTarget || n.fromElement) && (bt(x) || x[lt])) break e;
        if ((y || f) && (f = h.window === h ? h : (f = h.ownerDocument) ? f.defaultView || f.parentWindow : window, y ? (x = n.relatedTarget || n.toElement, y = u, x = x ? bt(x) : null, x !== null && (k = Zt(x), x !== k || x.tag !== 5 && x.tag !== 6) && (x = null)) : (y = null, x = u), y !== x)) {
          if (g = qs, w = "onMouseLeave", d = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (g = ta, w = "onPointerLeave", d = "onPointerEnter", c = "pointer"), k = y == null ? f : cn(y), m = x == null ? f : cn(x), f = new g(w, c + "leave", y, n, h), f.target = k, f.relatedTarget = m, w = null, bt(h) === u && (g = new g(d, c + "enter", x, n, h), g.target = m, g.relatedTarget = k, w = g), k = w, y && x) t: {
            for (g = y, d = x, c = 0, m = g; m; m = qt(m)) c++;
            for (m = 0, w = d; w; w = qt(w)) m++;
            for (; 0 < c - m; ) g = qt(g), c--;
            for (; 0 < m - c; ) d = qt(d), m--;
            for (; c--; ) {
              if (g === d || d !== null && g === d.alternate) break t;
              g = qt(g), d = qt(d);
            }
            g = null;
          }
          else g = null;
          y !== null && fa(p, f, y, g, !1), x !== null && k !== null && fa(p, k, x, g, !0);
        }
      }
      e: {
        if (f = u ? cn(u) : window, y = f.nodeName && f.nodeName.toLowerCase(), y === "select" || y === "input" && f.type === "file") var E = Kp;
        else if (oa(f)) if (ac) E = Jp;
        else {
          E = Xp;
          var P = Yp;
        }
        else (y = f.nodeName) && y.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (E = Zp);
        if (E && (E = E(e, u))) {
          sc(p, E, n, h);
          break e;
        }
        P && P(e, f, u), e === "focusout" && (P = f._wrapperState) && P.controlled && f.type === "number" && Xl(f, "number", f.value);
      }
      switch (P = u ? cn(u) : window, e) {
        case "focusin":
          (oa(P) || P.contentEditable === "true") && (an = P, ai = u, er = null);
          break;
        case "focusout":
          er = ai = an = null;
          break;
        case "mousedown":
          ui = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ui = !1, ua(p, n, h);
          break;
        case "selectionchange":
          if (tm) break;
        case "keydown":
        case "keyup":
          ua(p, n, h);
      }
      var C;
      if (ns) e: {
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
      else sn ? lc(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (oc && n.locale !== "ko" && (sn || T !== "onCompositionStart" ? T === "onCompositionEnd" && sn && (C = rc()) : (yt = h, qi = "value" in yt ? yt.value : yt.textContent, sn = !0)), P = ko(u, T), 0 < P.length && (T = new ea(T, e, null, n, h), p.push({ event: T, listeners: P }), C ? T.data = C : (C = ic(n), C !== null && (T.data = C)))), (C = Bp ? Vp(e, n) : Hp(e, n)) && (u = ko(u, "onBeforeInput"), 0 < u.length && (h = new ea("onBeforeInput", "beforeinput", null, n, h), p.push({ event: h, listeners: u }), h.data = C));
    }
    yc(p, t);
  });
}
function mr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ko(e, t) {
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
function fa(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n, a = s.alternate, u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 && u !== null && (s = u, o ? (a = sr(n, l), a != null && i.unshift(mr(n, a, s))) : o || (a = sr(n, l), a != null && i.push(mr(n, a, s)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var lm = /\r\n?/g, im = /\u0000|\uFFFD/g;
function pa(e) {
  return (typeof e == "string" ? e : "" + e).replace(lm, `
`).replace(im, "");
}
function Ur(e, t, n) {
  if (t = pa(t), pa(e) !== t && n) throw Error(N(425));
}
function Eo() {
}
var ci = null, di = null;
function fi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var pi = typeof setTimeout == "function" ? setTimeout : void 0, sm = typeof clearTimeout == "function" ? clearTimeout : void 0, ma = typeof Promise == "function" ? Promise : void 0, am = typeof queueMicrotask == "function" ? queueMicrotask : typeof ma < "u" ? function(e) {
  return ma.resolve(null).then(e).catch(um);
} : pi;
function um(e) {
  setTimeout(function() {
    throw e;
  });
}
function kl(e, t) {
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
function ha(e) {
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
var zn = Math.random().toString(36).slice(2), Ge = "__reactFiber$" + zn, hr = "__reactProps$" + zn, lt = "__reactContainer$" + zn, mi = "__reactEvents$" + zn, cm = "__reactListeners$" + zn, dm = "__reactHandles$" + zn;
function bt(e) {
  var t = e[Ge];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[lt] || n[Ge]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ha(e); e !== null; ) {
        if (n = e[Ge]) return n;
        e = ha(e);
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
function Ho(e) {
  return e[hr] || null;
}
var hi = [], dn = -1;
function Lt(e) {
  return { current: e };
}
function G(e) {
  0 > dn || (e.current = hi[dn], hi[dn] = null, dn--);
}
function V(e, t) {
  dn++, hi[dn] = e.current, e.current = t;
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
function Co() {
  G(ke), G(me);
}
function ga(e, t, n) {
  if (me.current !== Mt) throw Error(N(168));
  V(me, t), V(ke, n);
}
function xc(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(N(108, Yf(e) || "Unknown", o));
  return J({}, n, r);
}
function No(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Mt, Vt = me.current, V(me, e), V(ke, ke.current), !0;
}
function va(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n ? (e = xc(e, t, Vt), r.__reactInternalMemoizedMergedChildContext = e, G(ke), G(me), V(me, e)) : G(ke), V(ke, n);
}
var et = null, Qo = !1, El = !1;
function Sc(e) {
  et === null ? et = [e] : et.push(e);
}
function fm(e) {
  Qo = !0, Sc(e);
}
function Ot() {
  if (!El && et !== null) {
    El = !0;
    var e = 0, t = W;
    try {
      var n = et;
      for (W = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      et = null, Qo = !1;
    } catch (o) {
      throw et !== null && (et = et.slice(e + 1)), Qu(Yi, Ot), o;
    } finally {
      W = t, El = !1;
    }
  }
  return null;
}
var fn = [], pn = 0, Do = null, Po = 0, Re = [], Le = 0, Ht = null, tt = 1, nt = "";
function At(e, t) {
  fn[pn++] = Po, fn[pn++] = Do, Do = e, Po = t;
}
function kc(e, t, n) {
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
function os(e) {
  e.return !== null && (At(e, 1), kc(e, 1, 0));
}
function ls(e) {
  for (; e === Do; ) Do = fn[--pn], fn[pn] = null, Po = fn[--pn], fn[pn] = null;
  for (; e === Ht; ) Ht = Re[--Le], Re[Le] = null, nt = Re[--Le], Re[Le] = null, tt = Re[--Le], Re[Le] = null;
}
var Pe = null, De = null, K = !1, $e = null;
function Ec(e, t) {
  var n = Oe(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ya(e, t) {
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
function gi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function vi(e) {
  if (K) {
    var t = De;
    if (t) {
      var n = t;
      if (!ya(e, t)) {
        if (gi(e)) throw Error(N(418));
        t = Et(n.nextSibling);
        var r = Pe;
        t && ya(e, t) ? Ec(r, n) : (e.flags = e.flags & -4097 | 2, K = !1, Pe = e);
      }
    } else {
      if (gi(e)) throw Error(N(418));
      e.flags = e.flags & -4097 | 2, K = !1, Pe = e;
    }
  }
}
function wa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Pe = e;
}
function Wr(e) {
  if (e !== Pe) return !1;
  if (!K) return wa(e), K = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !fi(e.type, e.memoizedProps)), t && (t = De)) {
    if (gi(e)) throw Cc(), Error(N(418));
    for (; t; ) Ec(e, t), t = Et(t.nextSibling);
  }
  if (wa(e), e.tag === 13) {
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
function Cc() {
  for (var e = De; e; ) e = Et(e.nextSibling);
}
function Pn() {
  De = Pe = null, K = !1;
}
function is(e) {
  $e === null ? $e = [e] : $e.push(e);
}
var pm = at.ReactCurrentBatchConfig;
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
function xa(e) {
  var t = e._init;
  return t(e._payload);
}
function Nc(e) {
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
    return c === null || c.tag !== 6 ? (c = Ml(m, d.mode, w), c.return = d, c) : (c = o(c, m), c.return = d, c);
  }
  function a(d, c, m, w) {
    var E = m.type;
    return E === ln ? h(d, c, m.props.children, w, m.key) : c !== null && (c.elementType === E || typeof E == "object" && E !== null && E.$$typeof === mt && xa(E) === c.type) ? (w = o(c, m.props), w.ref = Un(d, c, m), w.return = d, w) : (w = co(m.type, m.key, m.props, null, d.mode, w), w.ref = Un(d, c, m), w.return = d, w);
  }
  function u(d, c, m, w) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== m.containerInfo || c.stateNode.implementation !== m.implementation ? (c = Rl(m, d.mode, w), c.return = d, c) : (c = o(c, m.children || []), c.return = d, c);
  }
  function h(d, c, m, w, E) {
    return c === null || c.tag !== 7 ? (c = Bt(m, d.mode, w, E), c.return = d, c) : (c = o(c, m), c.return = d, c);
  }
  function p(d, c, m) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = Ml("" + c, d.mode, m), c.return = d, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Lr:
          return m = co(c.type, c.key, c.props, null, d.mode, m), m.ref = Un(d, null, c), m.return = d, m;
        case on:
          return c = Rl(c, d.mode, m), c.return = d, c;
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
      if (Gn(m) || In(m)) return E !== null ? null : h(d, c, m, w, null);
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
      if (Gn(w) || In(w)) return d = d.get(m) || null, h(c, d, w, E, null);
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
  function g(d, c, m, w) {
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
                } else if (P.elementType === E || typeof E == "object" && E !== null && E.$$typeof === mt && xa(E) === P.type) {
                  n(d, P.sibling), c = o(P, m.props), c.ref = Un(d, P, m), c.return = d, d = c;
                  break e;
                }
                n(d, P);
                break;
              } else t(d, P);
              P = P.sibling;
            }
            m.type === ln ? (c = Bt(m.props.children, d.mode, w, m.key), c.return = d, d = c) : (w = co(m.type, m.key, m.props, null, d.mode, w), w.ref = Un(d, c, m), w.return = d, d = w);
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
            c = Rl(m, d.mode, w), c.return = d, d = c;
          }
          return i(d);
        case mt:
          return P = m._init, k(d, c, P(m._payload), w);
      }
      if (Gn(m)) return x(d, c, m, w);
      if (In(m)) return g(d, c, m, w);
      Br(d, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, c !== null && c.tag === 6 ? (n(d, c.sibling), c = o(c, m), c.return = d, d = c) : (n(d, c), c = Ml(m, d.mode, w), c.return = d, d = c), i(d)) : n(d, c);
  }
  return k;
}
var _n = Nc(!0), Dc = Nc(!1), _o = Lt(null), To = null, mn = null, ss = null;
function as() {
  ss = mn = To = null;
}
function us(e) {
  var t = _o.current;
  G(_o), e._currentValue = t;
}
function yi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Sn(e, t) {
  To = e, ss = mn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Se = !0), e.firstContext = null);
}
function je(e) {
  var t = e._currentValue;
  if (ss !== e) if (e = { context: e, memoizedValue: t, next: null }, mn === null) {
    if (To === null) throw Error(N(308));
    mn = e, To.dependencies = { lanes: 0, firstContext: e };
  } else mn = mn.next = e;
  return t;
}
var $t = null;
function cs(e) {
  $t === null ? $t = [e] : $t.push(e);
}
function Pc(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, cs(t)) : (n.next = o.next, o.next = n), t.interleaved = n, it(e, r);
}
function it(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var ht = !1;
function ds(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function _c(e, t) {
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
  return o = r.interleaved, o === null ? (t.next = t, cs(r)) : (t.next = o.next, o.next = t), r.interleaved = t, it(e, n);
}
function oo(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Xi(e, n);
  }
}
function Sa(e, t) {
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
function Mo(e, t, n, r) {
  var o = e.updateQueue;
  ht = !1;
  var l = o.firstBaseUpdate, i = o.lastBaseUpdate, s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var a = s, u = a.next;
    a.next = null, i === null ? l = u : i.next = u, i = a;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, s = h.lastBaseUpdate, s !== i && (s === null ? h.firstBaseUpdate = u : s.next = u, h.lastBaseUpdate = a));
  }
  if (l !== null) {
    var p = o.baseState;
    i = 0, h = u = a = null, s = l;
    do {
      var f = s.lane, y = s.eventTime;
      if ((r & f) === f) {
        h !== null && (h = h.next = {
          eventTime: y,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var x = e, g = s;
          switch (f = t, y = n, g.tag) {
            case 1:
              if (x = g.payload, typeof x == "function") {
                p = x.call(y, p, f);
                break e;
              }
              p = x;
              break e;
            case 3:
              x.flags = x.flags & -65537 | 128;
            case 0:
              if (x = g.payload, f = typeof x == "function" ? x.call(y, p, f) : x, f == null) break e;
              p = J({}, p, f);
              break e;
            case 2:
              ht = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, f = o.effects, f === null ? o.effects = [s] : f.push(s));
      } else y = { eventTime: y, lane: f, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, h === null ? (u = h = y, a = p) : h = h.next = y, i |= f;
      if (s = s.next, s === null) {
        if (s = o.shared.pending, s === null) break;
        f = s, s = f.next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null;
      }
    } while (!0);
    if (h === null && (a = p), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = h, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        i |= o.lane, o = o.next;
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    Gt |= i, e.lanes = i, e.memoizedState = p;
  }
}
function ka(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(N(191, o));
      o.call(r);
    }
  }
}
var _r = {}, Xe = Lt(_r), gr = Lt(_r), vr = Lt(_r);
function Ut(e) {
  if (e === _r) throw Error(N(174));
  return e;
}
function fs(e, t) {
  switch (V(vr, t), V(gr, e), V(Xe, _r), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Jl(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Jl(t, e);
  }
  G(Xe), V(Xe, t);
}
function Tn() {
  G(Xe), G(gr), G(vr);
}
function Tc(e) {
  Ut(vr.current);
  var t = Ut(Xe.current), n = Jl(t, e.type);
  t !== n && (V(gr, e), V(Xe, n));
}
function ps(e) {
  gr.current === e && (G(Xe), G(gr));
}
var X = Lt(0);
function Ro(e) {
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
function ms() {
  for (var e = 0; e < Cl.length; e++) Cl[e]._workInProgressVersionPrimary = null;
  Cl.length = 0;
}
var lo = at.ReactCurrentDispatcher, Nl = at.ReactCurrentBatchConfig, Qt = 0, Z = null, re = null, le = null, Lo = !1, tr = !1, yr = 0, mm = 0;
function ce() {
  throw Error(N(321));
}
function hs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Be(e[n], t[n])) return !1;
  return !0;
}
function gs(e, t, n, r, o, l) {
  if (Qt = l, Z = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, lo.current = e === null || e.memoizedState === null ? ym : wm, e = n(r, o), tr) {
    l = 0;
    do {
      if (tr = !1, yr = 0, 25 <= l) throw Error(N(301));
      l += 1, le = re = null, t.updateQueue = null, lo.current = xm, e = n(r, o);
    } while (tr);
  }
  if (lo.current = Oo, t = re !== null && re.next !== null, Qt = 0, le = re = Z = null, Lo = !1, t) throw Error(N(300));
  return e;
}
function vs() {
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
function Dl(e) {
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
      var h = u.lane;
      if ((Qt & h) === h) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var p = {
          lane: h,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (s = a = p, i = r) : a = a.next = p, Z.lanes |= h, Gt |= h;
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
function Pl(e) {
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
function Mc() {
}
function Rc(e, t) {
  var n = Z, r = Ie(), o = t(), l = !Be(r.memoizedState, o);
  if (l && (r.memoizedState = o, Se = !0), r = r.queue, ys(zc.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || le !== null && le.memoizedState.tag & 1) {
    if (n.flags |= 2048, xr(9, Oc.bind(null, n, r, o, t), void 0, null), ie === null) throw Error(N(349));
    Qt & 30 || Lc(n, t, o);
  }
  return o;
}
function Lc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Z.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Z.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Oc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, jc(t) && Ic(e);
}
function zc(e, t, n) {
  return n(function() {
    jc(t) && Ic(e);
  });
}
function jc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Be(e, n);
  } catch {
    return !0;
  }
}
function Ic(e) {
  var t = it(e, 1);
  t !== null && We(t, e, 1, -1);
}
function Ea(e) {
  var t = Qe();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: wr, lastRenderedState: e }, t.queue = e, e = e.dispatch = vm.bind(null, Z, e), [t.memoizedState, e];
}
function xr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Z.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Z.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ac() {
  return Ie().memoizedState;
}
function io(e, t, n, r) {
  var o = Qe();
  Z.flags |= e, o.memoizedState = xr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Go(e, t, n, r) {
  var o = Ie();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (re !== null) {
    var i = re.memoizedState;
    if (l = i.destroy, r !== null && hs(r, i.deps)) {
      o.memoizedState = xr(t, n, l, r);
      return;
    }
  }
  Z.flags |= e, o.memoizedState = xr(1 | t, n, l, r);
}
function Ca(e, t) {
  return io(8390656, 8, e, t);
}
function ys(e, t) {
  return Go(2048, 8, e, t);
}
function Fc(e, t) {
  return Go(4, 2, e, t);
}
function bc(e, t) {
  return Go(4, 4, e, t);
}
function $c(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Uc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Go(4, 4, $c.bind(null, t, e), n);
}
function ws() {
}
function Wc(e, t) {
  var n = Ie();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && hs(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Bc(e, t) {
  var n = Ie();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && hs(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Vc(e, t, n) {
  return Qt & 21 ? (Be(n, t) || (n = Yu(), Z.lanes |= n, Gt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Se = !0), e.memoizedState = n);
}
function hm(e, t) {
  var n = W;
  W = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Nl.transition;
  Nl.transition = {};
  try {
    e(!1), t();
  } finally {
    W = n, Nl.transition = r;
  }
}
function Hc() {
  return Ie().memoizedState;
}
function gm(e, t, n) {
  var r = Dt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Qc(e)) Gc(t, n);
  else if (n = Pc(e, t, n, r), n !== null) {
    var o = ve();
    We(n, e, r, o), Kc(n, t, r);
  }
}
function vm(e, t, n) {
  var r = Dt(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Qc(e)) Gc(t, o);
  else {
    var l = e.alternate;
    if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
      var i = t.lastRenderedState, s = l(i, n);
      if (o.hasEagerState = !0, o.eagerState = s, Be(s, i)) {
        var a = t.interleaved;
        a === null ? (o.next = o, cs(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = Pc(e, t, o, r), n !== null && (o = ve(), We(n, e, r, o), Kc(n, t, r));
  }
}
function Qc(e) {
  var t = e.alternate;
  return e === Z || t !== null && t === Z;
}
function Gc(e, t) {
  tr = Lo = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Kc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Xi(e, n);
  }
}
var Oo = { readContext: je, useCallback: ce, useContext: ce, useEffect: ce, useImperativeHandle: ce, useInsertionEffect: ce, useLayoutEffect: ce, useMemo: ce, useReducer: ce, useRef: ce, useState: ce, useDebugValue: ce, useDeferredValue: ce, useTransition: ce, useMutableSource: ce, useSyncExternalStore: ce, useId: ce, unstable_isNewReconciler: !1 }, ym = { readContext: je, useCallback: function(e, t) {
  return Qe().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: je, useEffect: Ca, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, io(
    4194308,
    4,
    $c.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return io(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return io(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Qe();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Qe();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = gm.bind(null, Z, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Qe();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ea, useDebugValue: ws, useDeferredValue: function(e) {
  return Qe().memoizedState = e;
}, useTransition: function() {
  var e = Ea(!1), t = e[0];
  return e = hm.bind(null, e[1]), Qe().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Z, o = Qe();
  if (K) {
    if (n === void 0) throw Error(N(407));
    n = n();
  } else {
    if (n = t(), ie === null) throw Error(N(349));
    Qt & 30 || Lc(r, t, n);
  }
  o.memoizedState = n;
  var l = { value: n, getSnapshot: t };
  return o.queue = l, Ca(zc.bind(
    null,
    r,
    l,
    e
  ), [e]), r.flags |= 2048, xr(9, Oc.bind(null, r, l, n, t), void 0, null), n;
}, useId: function() {
  var e = Qe(), t = ie.identifierPrefix;
  if (K) {
    var n = nt, r = tt;
    n = (r & ~(1 << 32 - Ue(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = yr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = mm++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, wm = {
  readContext: je,
  useCallback: Wc,
  useContext: je,
  useEffect: ys,
  useImperativeHandle: Uc,
  useInsertionEffect: Fc,
  useLayoutEffect: bc,
  useMemo: Bc,
  useReducer: Dl,
  useRef: Ac,
  useState: function() {
    return Dl(wr);
  },
  useDebugValue: ws,
  useDeferredValue: function(e) {
    var t = Ie();
    return Vc(t, re.memoizedState, e);
  },
  useTransition: function() {
    var e = Dl(wr)[0], t = Ie().memoizedState;
    return [e, t];
  },
  useMutableSource: Mc,
  useSyncExternalStore: Rc,
  useId: Hc,
  unstable_isNewReconciler: !1
}, xm = { readContext: je, useCallback: Wc, useContext: je, useEffect: ys, useImperativeHandle: Uc, useInsertionEffect: Fc, useLayoutEffect: bc, useMemo: Bc, useReducer: Pl, useRef: Ac, useState: function() {
  return Pl(wr);
}, useDebugValue: ws, useDeferredValue: function(e) {
  var t = Ie();
  return re === null ? t.memoizedState = e : Vc(t, re.memoizedState, e);
}, useTransition: function() {
  var e = Pl(wr)[0], t = Ie().memoizedState;
  return [e, t];
}, useMutableSource: Mc, useSyncExternalStore: Rc, useId: Hc, unstable_isNewReconciler: !1 };
function Fe(e, t) {
  if (e && e.defaultProps) {
    t = J({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function wi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : J({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ko = { isMounted: function(e) {
  return (e = e._reactInternals) ? Zt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ve(), o = Dt(e), l = rt(r, o);
  l.payload = t, n != null && (l.callback = n), t = Ct(e, l, o), t !== null && (We(t, e, o, r), oo(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ve(), o = Dt(e), l = rt(r, o);
  l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Ct(e, l, o), t !== null && (We(t, e, o, r), oo(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ve(), r = Dt(e), o = rt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Ct(e, o, r), t !== null && (We(t, e, r, n), oo(t, e, r));
} };
function Na(e, t, n, r, o, l, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !fr(n, r) || !fr(o, l) : !0;
}
function Yc(e, t, n) {
  var r = !1, o = Mt, l = t.contextType;
  return typeof l == "object" && l !== null ? l = je(l) : (o = Ee(t) ? Vt : me.current, r = t.contextTypes, l = (r = r != null) ? Dn(e, o) : Mt), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ko, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
}
function Da(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ko.enqueueReplaceState(t, t.state, null);
}
function xi(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, ds(e);
  var l = t.contextType;
  typeof l == "object" && l !== null ? o.context = je(l) : (l = Ee(t) ? Vt : me.current, o.context = Dn(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (wi(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Ko.enqueueReplaceState(o, o.state, null), Mo(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Mn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Kf(r), r = r.return;
    while (r);
    var o = n;
  } catch (l) {
    o = `
Error generating stack: ` + l.message + `
` + l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function _l(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Si(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Sm = typeof WeakMap == "function" ? WeakMap : Map;
function Xc(e, t, n) {
  n = rt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    jo || (jo = !0, Ri = r), Si(e, t);
  }, n;
}
function Zc(e, t, n) {
  n = rt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Si(e, t);
    };
  }
  var l = e.stateNode;
  return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
    Si(e, t), typeof r != "function" && (Nt === null ? Nt = /* @__PURE__ */ new Set([this]) : Nt.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Pa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Sm();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = jm.bind(null, e, t, n), t.then(e, e));
}
function _a(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ta(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = rt(-1, 1), t.tag = 2, Ct(n, t, 1))), n.lanes |= 1), e);
}
var km = at.ReactCurrentOwner, Se = !1;
function ge(e, t, n, r) {
  t.child = e === null ? Dc(t, null, n, r) : _n(t, e.child, n, r);
}
function Ma(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return Sn(t, o), r = gs(e, t, n, r, l, o), n = vs(), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, st(e, t, o)) : (K && n && os(t), t.flags |= 1, ge(e, t, r, o), t.child);
}
function Ra(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" && !Ps(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, Jc(e, t, l, r, o)) : (e = co(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (l = e.child, !(e.lanes & o)) {
    var i = l.memoizedProps;
    if (n = n.compare, n = n !== null ? n : fr, n(i, r) && e.ref === t.ref) return st(e, t, o);
  }
  return t.flags |= 1, e = Pt(l, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Jc(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (fr(l, r) && e.ref === t.ref) if (Se = !1, t.pendingProps = r = l, (e.lanes & o) !== 0) e.flags & 131072 && (Se = !0);
    else return t.lanes = e.lanes, st(e, t, o);
  }
  return ki(e, t, n, r, o);
}
function qc(e, t, n) {
  var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, V(gn, Ne), Ne |= n;
  else {
    if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, V(gn, Ne), Ne |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = l !== null ? l.baseLanes : n, V(gn, Ne), Ne |= r;
  }
  else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, V(gn, Ne), Ne |= r;
  return ge(e, t, o, n), t.child;
}
function ed(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ki(e, t, n, r, o) {
  var l = Ee(n) ? Vt : me.current;
  return l = Dn(t, l), Sn(t, o), n = gs(e, t, n, r, l, o), r = vs(), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, st(e, t, o)) : (K && r && os(t), t.flags |= 1, ge(e, t, n, o), t.child);
}
function La(e, t, n, r, o) {
  if (Ee(n)) {
    var l = !0;
    No(t);
  } else l = !1;
  if (Sn(t, o), t.stateNode === null) so(e, t), Yc(t, n, r), xi(t, n, r, o), r = !0;
  else if (e === null) {
    var i = t.stateNode, s = t.memoizedProps;
    i.props = s;
    var a = i.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = je(u) : (u = Ee(n) ? Vt : me.current, u = Dn(t, u));
    var h = n.getDerivedStateFromProps, p = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    p || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== r || a !== u) && Da(t, i, r, u), ht = !1;
    var f = t.memoizedState;
    i.state = f, Mo(t, r, i, o), a = t.memoizedState, s !== r || f !== a || ke.current || ht ? (typeof h == "function" && (wi(t, n, h, r), a = t.memoizedState), (s = ht || Na(t, n, s, r, f, a, u)) ? (p || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), i.props = r, i.state = a, i.context = u, r = s) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, _c(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : Fe(t.type, s), i.props = u, p = t.pendingProps, f = i.context, a = n.contextType, typeof a == "object" && a !== null ? a = je(a) : (a = Ee(n) ? Vt : me.current, a = Dn(t, a));
    var y = n.getDerivedStateFromProps;
    (h = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== p || f !== a) && Da(t, i, r, a), ht = !1, f = t.memoizedState, i.state = f, Mo(t, r, i, o);
    var x = t.memoizedState;
    s !== p || f !== x || ke.current || ht ? (typeof y == "function" && (wi(t, n, y, r), x = t.memoizedState), (u = ht || Na(t, n, u, r, f, x, a) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, x, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, x, a)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), i.props = r, i.state = x, i.context = a, r = u) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ei(e, t, n, r, l, o);
}
function Ei(e, t, n, r, o, l) {
  ed(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && va(t, n, !1), st(e, t, l);
  r = t.stateNode, km.current = t;
  var s = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = _n(t, e.child, null, l), t.child = _n(t, null, s, l)) : ge(e, t, s, l), t.memoizedState = r.state, o && va(t, n, !0), t.child;
}
function td(e) {
  var t = e.stateNode;
  t.pendingContext ? ga(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ga(e, t.context, !1), fs(e, t.containerInfo);
}
function Oa(e, t, n, r, o) {
  return Pn(), is(o), t.flags |= 256, ge(e, t, n, r), t.child;
}
var Ci = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ni(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function nd(e, t, n) {
  var r = t.pendingProps, o = X.current, l = !1, i = (t.flags & 128) !== 0, s;
  if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), V(X, o & 1), e === null)
    return vi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = { mode: "hidden", children: i }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = Zo(i, r, 0, null), e = Bt(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Ni(n), t.memoizedState = Ci, e) : xs(t, i));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return Em(e, t, i, r, s, o, n);
  if (l) {
    l = r.fallback, i = t.mode, o = e.child, s = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Pt(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? l = Pt(s, l) : (l = Bt(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? Ni(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = Ci, r;
  }
  return l = e.child, e = l.sibling, r = Pt(l, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function xs(e, t) {
  return t = Zo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Vr(e, t, n, r) {
  return r !== null && is(r), _n(t, e.child, null, n), e = xs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Em(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = _l(Error(N(422))), Vr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = Zo({ mode: "visible", children: r.children }, o, 0, null), l = Bt(l, o, i, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && _n(t, e.child, null, i), t.child.memoizedState = Ni(i), t.memoizedState = Ci, l);
  if (!(t.mode & 1)) return Vr(e, t, i, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
    return r = s, l = Error(N(419)), r = _l(l, r, void 0), Vr(e, t, i, r);
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
    return Ds(), r = _l(Error(N(421))), Vr(e, t, i, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Im.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, De = Et(o.nextSibling), Pe = t, K = !0, $e = null, e !== null && (Re[Le++] = tt, Re[Le++] = nt, Re[Le++] = Ht, tt = e.id, nt = e.overflow, Ht = t), t = xs(t, r.children), t.flags |= 4096, t);
}
function za(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), yi(e.return, t, n);
}
function Tl(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = o);
}
function rd(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, l = r.tail;
  if (ge(e, t, r.children, n), r = X.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && za(e, n, t);
      else if (e.tag === 19) za(e, n, t);
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
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Ro(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Tl(t, !1, o, n, l);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && Ro(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Tl(t, !0, n, null, l);
      break;
    case "together":
      Tl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function so(e, t) {
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
function Cm(e, t, n) {
  switch (t.tag) {
    case 3:
      td(t), Pn();
      break;
    case 5:
      Tc(t);
      break;
    case 1:
      Ee(t.type) && No(t);
      break;
    case 4:
      fs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      V(_o, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (V(X, X.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? nd(e, t, n) : (V(X, X.current & 1), e = st(e, t, n), e !== null ? e.sibling : null);
      V(X, X.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return rd(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), V(X, X.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, qc(e, t, n);
  }
  return st(e, t, n);
}
var od, Di, ld, id;
od = function(e, t) {
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
Di = function() {
};
ld = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Ut(Xe.current);
    var l = null;
    switch (n) {
      case "input":
        o = Kl(e, o), r = Kl(e, r), l = [];
        break;
      case "select":
        o = J({}, o, { value: void 0 }), r = J({}, r, { value: void 0 }), l = [];
        break;
      case "textarea":
        o = Zl(e, o), r = Zl(e, r), l = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Eo);
    }
    ql(n, r);
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
id = function(e, t, n, r) {
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
function Nm(e, t, n) {
  var r = t.pendingProps;
  switch (ls(t), t.tag) {
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
      return Ee(t.type) && Co(), de(t), null;
    case 3:
      return r = t.stateNode, Tn(), G(ke), G(me), ms(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Wr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, $e !== null && (zi($e), $e = null))), Di(e, t), de(t), null;
    case 5:
      ps(t);
      var o = Ut(vr.current);
      if (n = t.type, e !== null && t.stateNode != null) ld(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return de(t), null;
        }
        if (e = Ut(Xe.current), Wr(t)) {
          r = t.stateNode, n = t.type;
          var l = t.memoizedProps;
          switch (r[Ge] = t, r[hr] = l, e = (t.mode & 1) !== 0, n) {
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
              Bs(r, l), Q("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!l.multiple }, Q("invalid", r);
              break;
            case "textarea":
              Hs(r, l), Q("invalid", r);
          }
          ql(n, l), o = null;
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
              Or(r), Vs(r, l, !0);
              break;
            case "textarea":
              Or(r), Qs(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = Eo);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = zu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Ge] = t, e[hr] = r, od(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = ei(n, r), n) {
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
                Bs(e, r), o = Kl(e, r), Q("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = J({}, r, { value: void 0 }), Q("invalid", e);
                break;
              case "textarea":
                Hs(e, r), o = Zl(e, r), Q("invalid", e);
                break;
              default:
                o = r;
            }
            ql(n, o), s = o;
            for (l in s) if (s.hasOwnProperty(l)) {
              var a = s[l];
              l === "style" ? Au(e, a) : l === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && ju(e, a)) : l === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && ir(e, a) : typeof a == "number" && ir(e, "" + a) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (lr.hasOwnProperty(l) ? a != null && l === "onScroll" && Q("scroll", e) : a != null && Vi(e, l, a, i));
            }
            switch (n) {
              case "input":
                Or(e), Vs(e, r, !1);
                break;
              case "textarea":
                Or(e), Qs(e);
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
                typeof o.onClick == "function" && (e.onclick = Eo);
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
      if (e && t.stateNode != null) id(e, t, e.memoizedProps, r);
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
        if (K && De !== null && t.mode & 1 && !(t.flags & 128)) Cc(), Pn(), t.flags |= 98560, l = !1;
        else if (l = Wr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!l) throw Error(N(318));
            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(N(317));
            l[Ge] = t;
          } else Pn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          de(t), l = !1;
        } else $e !== null && (zi($e), $e = null), l = !0;
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || X.current & 1 ? oe === 0 && (oe = 3) : Ds())), t.updateQueue !== null && (t.flags |= 4), de(t), null);
    case 4:
      return Tn(), Di(e, t), e === null && pr(t.stateNode.containerInfo), de(t), null;
    case 10:
      return us(t.type._context), de(t), null;
    case 17:
      return Ee(t.type) && Co(), de(t), null;
    case 19:
      if (G(X), l = t.memoizedState, l === null) return de(t), null;
      if (r = (t.flags & 128) !== 0, i = l.rendering, i === null) if (r) Wn(l, !1);
      else {
        if (oe !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = Ro(e), i !== null) {
            for (t.flags |= 128, Wn(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return V(X, X.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        l.tail !== null && ee() > Rn && (t.flags |= 128, r = !0, Wn(l, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Ro(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Wn(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !K) return de(t), null;
        } else 2 * ee() - l.renderingStartTime > Rn && n !== 1073741824 && (t.flags |= 128, r = !0, Wn(l, !1), t.lanes = 4194304);
        l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i);
      }
      return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = ee(), t.sibling = null, n = X.current, V(X, r ? n & 1 | 2 : n & 1), t) : (de(t), null);
    case 22:
    case 23:
      return Ns(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ne & 1073741824 && (de(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : de(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function Dm(e, t) {
  switch (ls(t), t.tag) {
    case 1:
      return Ee(t.type) && Co(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Tn(), G(ke), G(me), ms(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ps(t), null;
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
      return us(t.type._context), null;
    case 22:
    case 23:
      return Ns(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Hr = !1, pe = !1, Pm = typeof WeakSet == "function" ? WeakSet : Set, M = null;
function hn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    q(e, t, r);
  }
  else n.current = null;
}
function Pi(e, t, n) {
  try {
    n();
  } catch (r) {
    q(e, t, r);
  }
}
var ja = !1;
function _m(e, t) {
  if (ci = xo, e = dc(), rs(e)) {
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
        var i = 0, s = -1, a = -1, u = 0, h = 0, p = e, f = null;
        t: for (; ; ) {
          for (var y; p !== n || o !== 0 && p.nodeType !== 3 || (s = i + o), p !== l || r !== 0 && p.nodeType !== 3 || (a = i + r), p.nodeType === 3 && (i += p.nodeValue.length), (y = p.firstChild) !== null; )
            f = p, p = y;
          for (; ; ) {
            if (p === e) break t;
            if (f === n && ++u === o && (s = i), f === l && ++h === r && (a = i), (y = p.nextSibling) !== null) break;
            p = f, f = p.parentNode;
          }
          p = y;
        }
        n = s === -1 || a === -1 ? null : { start: s, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (di = { focusedElem: e, selectionRange: n }, xo = !1, M = t; M !== null; ) if (t = M, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, M = e;
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
            var g = x.memoizedProps, k = x.memoizedState, d = t.stateNode, c = d.getSnapshotBeforeUpdate(t.elementType === t.type ? g : Fe(t.type, g), k);
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
  return x = ja, ja = !1, x;
}
function nr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        o.destroy = void 0, l !== void 0 && Pi(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Yo(e, t) {
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
function _i(e) {
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
function sd(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, sd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ge], delete t[hr], delete t[mi], delete t[cm], delete t[dm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function ad(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ia(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || ad(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ti(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Eo));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ti(e, t, n), e = e.sibling; e !== null; ) Ti(e, t, n), e = e.sibling;
}
function Mi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Mi(e, t, n), e = e.sibling; e !== null; ) Mi(e, t, n), e = e.sibling;
}
var se = null, be = !1;
function ct(e, t, n) {
  for (n = n.child; n !== null; ) ud(e, t, n), n = n.sibling;
}
function ud(e, t, n) {
  if (Ye && typeof Ye.onCommitFiberUnmount == "function") try {
    Ye.onCommitFiberUnmount(Uo, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      pe || hn(n, t);
    case 6:
      var r = se, o = be;
      se = null, ct(e, t, n), se = r, be = o, se !== null && (be ? (e = se, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : se.removeChild(n.stateNode));
      break;
    case 18:
      se !== null && (be ? (e = se, n = n.stateNode, e.nodeType === 8 ? kl(e.parentNode, n) : e.nodeType === 1 && kl(e, n), cr(e)) : kl(se, n.stateNode));
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
          l = l.tag, i !== void 0 && (l & 2 || l & 4) && Pi(n, t, i), o = o.next;
        } while (o !== r);
      }
      ct(e, t, n);
      break;
    case 1:
      if (!pe && (hn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
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
function Aa(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Pm()), t.forEach(function(r) {
      var o = Am.bind(null, e, r);
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
      ud(l, i, o), se = null, be = !1;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (u) {
      q(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) cd(t, e), t = t.sibling;
}
function cd(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ae(t, e), He(e), r & 4) {
        try {
          nr(3, e, e.return), Yo(3, e);
        } catch (g) {
          q(e, e.return, g);
        }
        try {
          nr(5, e, e.return);
        } catch (g) {
          q(e, e.return, g);
        }
      }
      break;
    case 1:
      Ae(t, e), He(e), r & 512 && n !== null && hn(n, n.return);
      break;
    case 5:
      if (Ae(t, e), He(e), r & 512 && n !== null && hn(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          ir(o, "");
        } catch (g) {
          q(e, e.return, g);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var l = e.memoizedProps, i = n !== null ? n.memoizedProps : l, s = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          s === "input" && l.type === "radio" && l.name != null && Lu(o, l), ei(s, i);
          var u = ei(s, l);
          for (i = 0; i < a.length; i += 2) {
            var h = a[i], p = a[i + 1];
            h === "style" ? Au(o, p) : h === "dangerouslySetInnerHTML" ? ju(o, p) : h === "children" ? ir(o, p) : Vi(o, h, p, u);
          }
          switch (s) {
            case "input":
              Yl(o, l);
              break;
            case "textarea":
              Ou(o, l);
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
          o[hr] = l;
        } catch (g) {
          q(e, e.return, g);
        }
      }
      break;
    case 6:
      if (Ae(t, e), He(e), r & 4) {
        if (e.stateNode === null) throw Error(N(162));
        o = e.stateNode, l = e.memoizedProps;
        try {
          o.nodeValue = l;
        } catch (g) {
          q(e, e.return, g);
        }
      }
      break;
    case 3:
      if (Ae(t, e), He(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        cr(t.containerInfo);
      } catch (g) {
        q(e, e.return, g);
      }
      break;
    case 4:
      Ae(t, e), He(e);
      break;
    case 13:
      Ae(t, e), He(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (Es = ee())), r & 4 && Aa(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (pe = (u = pe) || h, Ae(t, e), pe = u) : Ae(t, e), He(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !h && e.mode & 1) for (M = e, h = e.child; h !== null; ) {
          for (p = M = h; M !== null; ) {
            switch (f = M, y = f.child, f.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                nr(4, f, f.return);
                break;
              case 1:
                hn(f, f.return);
                var x = f.stateNode;
                if (typeof x.componentWillUnmount == "function") {
                  r = f, n = f.return;
                  try {
                    t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount();
                  } catch (g) {
                    q(r, n, g);
                  }
                }
                break;
              case 5:
                hn(f, f.return);
                break;
              case 22:
                if (f.memoizedState !== null) {
                  ba(p);
                  continue;
                }
            }
            y !== null ? (y.return = f, M = y) : ba(p);
          }
          h = h.sibling;
        }
        e: for (h = null, p = e; ; ) {
          if (p.tag === 5) {
            if (h === null) {
              h = p;
              try {
                o = p.stateNode, u ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (s = p.stateNode, a = p.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = Iu("display", i));
              } catch (g) {
                q(e, e.return, g);
              }
            }
          } else if (p.tag === 6) {
            if (h === null) try {
              p.stateNode.nodeValue = u ? "" : p.memoizedProps;
            } catch (g) {
              q(e, e.return, g);
            }
          } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
            p.child.return = p, p = p.child;
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            h === p && (h = null), p = p.return;
          }
          h === p && (h = null), p.sibling.return = p.return, p = p.sibling;
        }
      }
      break;
    case 19:
      Ae(t, e), He(e), r & 4 && Aa(e);
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
          if (ad(n)) {
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
          var l = Ia(e);
          Mi(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, s = Ia(e);
          Ti(e, s, i);
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
function Tm(e, t, n) {
  M = e, dd(e);
}
function dd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var o = M, l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Hr;
      if (!i) {
        var s = o.alternate, a = s !== null && s.memoizedState !== null || pe;
        s = Hr;
        var u = pe;
        if (Hr = i, (pe = a) && !u) for (M = o; M !== null; ) i = M, a = i.child, i.tag === 22 && i.memoizedState !== null ? $a(o) : a !== null ? (a.return = i, M = a) : $a(o);
        for (; l !== null; ) M = l, dd(l), l = l.sibling;
        M = o, Hr = s, pe = u;
      }
      Fa(e);
    } else o.subtreeFlags & 8772 && l !== null ? (l.return = o, M = l) : Fa(e);
  }
}
function Fa(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            pe || Yo(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !pe) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : Fe(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var l = t.updateQueue;
            l !== null && ka(t, l, r);
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
              ka(t, i, n);
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
                var h = u.memoizedState;
                if (h !== null) {
                  var p = h.dehydrated;
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
        pe || t.flags & 512 && _i(t);
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
function ba(e) {
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
function $a(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Yo(4, t);
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
            _i(t);
          } catch (a) {
            q(t, l, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            _i(t);
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
var Mm = Math.ceil, zo = at.ReactCurrentDispatcher, Ss = at.ReactCurrentOwner, ze = at.ReactCurrentBatchConfig, F = 0, ie = null, ne = null, ae = 0, Ne = 0, gn = Lt(0), oe = 0, Sr = null, Gt = 0, Xo = 0, ks = 0, rr = null, xe = null, Es = 0, Rn = 1 / 0, qe = null, jo = !1, Ri = null, Nt = null, Qr = !1, wt = null, Io = 0, or = 0, Li = null, ao = -1, uo = 0;
function ve() {
  return F & 6 ? ee() : ao !== -1 ? ao : ao = ee();
}
function Dt(e) {
  return e.mode & 1 ? F & 2 && ae !== 0 ? ae & -ae : pm.transition !== null ? (uo === 0 && (uo = Yu()), uo) : (e = W, e !== 0 || (e = window.event, e = e === void 0 ? 16 : nc(e.type)), e) : 1;
}
function We(e, t, n, r) {
  if (50 < or) throw or = 0, Li = null, Error(N(185));
  Nr(e, n, r), (!(F & 2) || e !== ie) && (e === ie && (!(F & 2) && (Xo |= n), oe === 4 && vt(e, ae)), Ce(e, r), n === 1 && F === 0 && !(t.mode & 1) && (Rn = ee() + 500, Qo && Ot()));
}
function Ce(e, t) {
  var n = e.callbackNode;
  pp(e, t);
  var r = wo(e, e === ie ? ae : 0);
  if (r === 0) n !== null && Ys(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Ys(n), t === 1) e.tag === 0 ? fm(Ua.bind(null, e)) : Sc(Ua.bind(null, e)), am(function() {
      !(F & 6) && Ot();
    }), n = null;
    else {
      switch (Xu(r)) {
        case 1:
          n = Yi;
          break;
        case 4:
          n = Gu;
          break;
        case 16:
          n = yo;
          break;
        case 536870912:
          n = Ku;
          break;
        default:
          n = yo;
      }
      n = wd(n, fd.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function fd(e, t) {
  if (ao = -1, uo = 0, F & 6) throw Error(N(327));
  var n = e.callbackNode;
  if (kn() && e.callbackNode !== n) return null;
  var r = wo(e, e === ie ? ae : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ao(e, r);
  else {
    t = r;
    var o = F;
    F |= 2;
    var l = md();
    (ie !== e || ae !== t) && (qe = null, Rn = ee() + 500, Wt(e, t));
    do
      try {
        Om();
        break;
      } catch (s) {
        pd(e, s);
      }
    while (!0);
    as(), zo.current = l, F = o, ne !== null ? t = 0 : (ie = null, ae = 0, t = oe);
  }
  if (t !== 0) {
    if (t === 2 && (o = li(e), o !== 0 && (r = o, t = Oi(e, o))), t === 1) throw n = Sr, Wt(e, 0), vt(e, r), Ce(e, ee()), n;
    if (t === 6) vt(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !Rm(o) && (t = Ao(e, r), t === 2 && (l = li(e), l !== 0 && (r = l, t = Oi(e, l))), t === 1)) throw n = Sr, Wt(e, 0), vt(e, r), Ce(e, ee()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          Ft(e, xe, qe);
          break;
        case 3:
          if (vt(e, r), (r & 130023424) === r && (t = Es + 500 - ee(), 10 < t)) {
            if (wo(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              ve(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = pi(Ft.bind(null, e, xe, qe), t);
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
          if (r = o, r = ee() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Mm(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = pi(Ft.bind(null, e, xe, qe), r);
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
  return Ce(e, ee()), e.callbackNode === n ? fd.bind(null, e) : null;
}
function Oi(e, t) {
  var n = rr;
  return e.current.memoizedState.isDehydrated && (Wt(e, t).flags |= 256), e = Ao(e, t), e !== 2 && (t = xe, xe = n, t !== null && zi(t)), e;
}
function zi(e) {
  xe === null ? xe = e : xe.push.apply(xe, e);
}
function Rm(e) {
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
  for (t &= ~ks, t &= ~Xo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Ue(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ua(e) {
  if (F & 6) throw Error(N(327));
  kn();
  var t = wo(e, 0);
  if (!(t & 1)) return Ce(e, ee()), null;
  var n = Ao(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = li(e);
    r !== 0 && (t = r, n = Oi(e, r));
  }
  if (n === 1) throw n = Sr, Wt(e, 0), vt(e, t), Ce(e, ee()), n;
  if (n === 6) throw Error(N(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ft(e, xe, qe), Ce(e, ee()), null;
}
function Cs(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    F = n, F === 0 && (Rn = ee() + 500, Qo && Ot());
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
function Ns() {
  Ne = gn.current, G(gn);
}
function Wt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, sm(n)), ne !== null) for (n = ne.return; n !== null; ) {
    var r = n;
    switch (ls(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Co();
        break;
      case 3:
        Tn(), G(ke), G(me), ms();
        break;
      case 5:
        ps(r);
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
        us(r.type._context);
        break;
      case 22:
      case 23:
        Ns();
    }
    n = n.return;
  }
  if (ie = e, ne = e = Pt(e.current, null), ae = Ne = t, oe = 0, Sr = null, ks = Xo = Gt = 0, xe = rr = null, $t !== null) {
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
function pd(e, t) {
  do {
    var n = ne;
    try {
      if (as(), lo.current = Oo, Lo) {
        for (var r = Z.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Lo = !1;
      }
      if (Qt = 0, le = re = Z = null, tr = !1, yr = 0, Ss.current = null, n === null || n.return === null) {
        oe = 1, Sr = t, ne = null;
        break;
      }
      e: {
        var l = e, i = n.return, s = n, a = t;
        if (t = ae, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, h = s, p = h.tag;
          if (!(h.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var f = h.alternate;
            f ? (h.updateQueue = f.updateQueue, h.memoizedState = f.memoizedState, h.lanes = f.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var y = _a(i);
          if (y !== null) {
            y.flags &= -257, Ta(y, i, s, l, t), y.mode & 1 && Pa(l, u, t), t = y, a = u;
            var x = t.updateQueue;
            if (x === null) {
              var g = /* @__PURE__ */ new Set();
              g.add(a), t.updateQueue = g;
            } else x.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Pa(l, u, t), Ds();
              break e;
            }
            a = Error(N(426));
          }
        } else if (K && s.mode & 1) {
          var k = _a(i);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256), Ta(k, i, s, l, t), is(Mn(a, s));
            break e;
          }
        }
        l = a = Mn(a, s), oe !== 4 && (oe = 2), rr === null ? rr = [l] : rr.push(l), l = i;
        do {
          switch (l.tag) {
            case 3:
              l.flags |= 65536, t &= -t, l.lanes |= t;
              var d = Xc(l, a, t);
              Sa(l, d);
              break e;
            case 1:
              s = a;
              var c = l.type, m = l.stateNode;
              if (!(l.flags & 128) && (typeof c.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Nt === null || !Nt.has(m)))) {
                l.flags |= 65536, t &= -t, l.lanes |= t;
                var w = Zc(l, s, t);
                Sa(l, w);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      gd(n);
    } catch (E) {
      t = E, ne === n && n !== null && (ne = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function md() {
  var e = zo.current;
  return zo.current = Oo, e === null ? Oo : e;
}
function Ds() {
  (oe === 0 || oe === 3 || oe === 2) && (oe = 4), ie === null || !(Gt & 268435455) && !(Xo & 268435455) || vt(ie, ae);
}
function Ao(e, t) {
  var n = F;
  F |= 2;
  var r = md();
  (ie !== e || ae !== t) && (qe = null, Wt(e, t));
  do
    try {
      Lm();
      break;
    } catch (o) {
      pd(e, o);
    }
  while (!0);
  if (as(), F = n, zo.current = r, ne !== null) throw Error(N(261));
  return ie = null, ae = 0, oe;
}
function Lm() {
  for (; ne !== null; ) hd(ne);
}
function Om() {
  for (; ne !== null && !op(); ) hd(ne);
}
function hd(e) {
  var t = yd(e.alternate, e, Ne);
  e.memoizedProps = e.pendingProps, t === null ? gd(e) : ne = t, Ss.current = null;
}
function gd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Dm(n, t), n !== null) {
        n.flags &= 32767, ne = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        oe = 6, ne = null;
        return;
      }
    } else if (n = Nm(n, t, Ne), n !== null) {
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
    ze.transition = null, W = 1, zm(e, t, n, r);
  } finally {
    ze.transition = o, W = r;
  }
  return null;
}
function zm(e, t, n, r) {
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
  if (mp(e, l), e === ie && (ne = ie = null, ae = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Qr || (Qr = !0, wd(yo, function() {
    return kn(), null;
  })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
    l = ze.transition, ze.transition = null;
    var i = W;
    W = 1;
    var s = F;
    F |= 4, Ss.current = null, _m(e, n), cd(n, e), em(di), xo = !!ci, di = ci = null, e.current = n, Tm(n), lp(), F = s, W = i, ze.transition = l;
  } else e.current = n;
  if (Qr && (Qr = !1, wt = e, Io = o), l = e.pendingLanes, l === 0 && (Nt = null), ap(n.stateNode), Ce(e, ee()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (jo) throw jo = !1, e = Ri, Ri = null, e;
  return Io & 1 && e.tag !== 0 && kn(), l = e.pendingLanes, l & 1 ? e === Li ? or++ : (or = 0, Li = e) : or = 0, Ot(), null;
}
function kn() {
  if (wt !== null) {
    var e = Xu(Io), t = ze.transition, n = W;
    try {
      if (ze.transition = null, W = 16 > e ? 16 : e, wt === null) var r = !1;
      else {
        if (e = wt, wt = null, Io = 0, F & 6) throw Error(N(331));
        var o = F;
        for (F |= 4, M = e.current; M !== null; ) {
          var l = M, i = l.child;
          if (M.flags & 16) {
            var s = l.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (M = u; M !== null; ) {
                  var h = M;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      nr(8, h, l);
                  }
                  var p = h.child;
                  if (p !== null) p.return = h, M = p;
                  else for (; M !== null; ) {
                    h = M;
                    var f = h.sibling, y = h.return;
                    if (sd(h), h === u) {
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
                var g = x.child;
                if (g !== null) {
                  x.child = null;
                  do {
                    var k = g.sibling;
                    g.sibling = null, g = k;
                  } while (g !== null);
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
                  Yo(9, s);
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
          Ye.onPostCommitFiberRoot(Uo, e);
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
function Wa(e, t, n) {
  t = Mn(n, t), t = Xc(e, t, 1), e = Ct(e, t, 1), t = ve(), e !== null && (Nr(e, 1, t), Ce(e, t));
}
function q(e, t, n) {
  if (e.tag === 3) Wa(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Wa(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Nt === null || !Nt.has(r))) {
        e = Mn(n, e), e = Zc(t, e, 1), t = Ct(t, e, 1), e = ve(), t !== null && (Nr(t, 1, e), Ce(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function jm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ve(), e.pingedLanes |= e.suspendedLanes & n, ie === e && (ae & n) === n && (oe === 4 || oe === 3 && (ae & 130023424) === ae && 500 > ee() - Es ? Wt(e, 0) : ks |= n), Ce(e, t);
}
function vd(e, t) {
  t === 0 && (e.mode & 1 ? (t = Ir, Ir <<= 1, !(Ir & 130023424) && (Ir = 4194304)) : t = 1);
  var n = ve();
  e = it(e, t), e !== null && (Nr(e, t, n), Ce(e, n));
}
function Im(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), vd(e, n);
}
function Am(e, t) {
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
  r !== null && r.delete(t), vd(e, n);
}
var yd;
yd = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || ke.current) Se = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Se = !1, Cm(e, t, n);
    Se = !!(e.flags & 131072);
  }
  else Se = !1, K && t.flags & 1048576 && kc(t, Po, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      so(e, t), e = t.pendingProps;
      var o = Dn(t, me.current);
      Sn(t, n), o = gs(null, t, r, e, o, n);
      var l = vs();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ee(r) ? (l = !0, No(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, ds(t), o.updater = Ko, t.stateNode = o, o._reactInternals = t, xi(t, r, e, n), t = Ei(null, t, r, !0, l, n)) : (t.tag = 0, K && l && os(t), ge(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (so(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = bm(r), e = Fe(r, e), o) {
          case 0:
            t = ki(null, t, r, e, n);
            break e;
          case 1:
            t = La(null, t, r, e, n);
            break e;
          case 11:
            t = Ma(null, t, r, e, n);
            break e;
          case 14:
            t = Ra(null, t, r, Fe(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Fe(r, o), ki(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Fe(r, o), La(e, t, r, o, n);
    case 3:
      e: {
        if (td(t), e === null) throw Error(N(387));
        r = t.pendingProps, l = t.memoizedState, o = l.element, _c(e, t), Mo(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, l.isDehydrated) if (l = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
          o = Mn(Error(N(423)), t), t = Oa(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = Mn(Error(N(424)), t), t = Oa(e, t, r, n, o);
          break e;
        } else for (De = Et(t.stateNode.containerInfo.firstChild), Pe = t, K = !0, $e = null, n = Dc(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Pn(), r === o) {
            t = st(e, t, n);
            break e;
          }
          ge(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Tc(t), e === null && vi(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, fi(r, o) ? i = null : l !== null && fi(r, l) && (t.flags |= 32), ed(e, t), ge(e, t, i, n), t.child;
    case 6:
      return e === null && vi(t), null;
    case 13:
      return nd(e, t, n);
    case 4:
      return fs(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = _n(t, null, r, n) : ge(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Fe(r, o), Ma(e, t, r, o, n);
    case 7:
      return ge(e, t, t.pendingProps, n), t.child;
    case 8:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, V(_o, r._currentValue), r._currentValue = i, l !== null) if (Be(l.value, i)) {
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
                    var h = u.pending;
                    h === null ? a.next = a : (a.next = h.next, h.next = a), u.pending = a;
                  }
                }
                l.lanes |= n, a = l.alternate, a !== null && (a.lanes |= n), yi(
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
            i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), yi(i, n, t), i = l.sibling;
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
        ge(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Sn(t, n), o = je(o), r = r(o), t.flags |= 1, ge(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Fe(r, t.pendingProps), o = Fe(r.type, o), Ra(e, t, r, o, n);
    case 15:
      return Jc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Fe(r, o), so(e, t), t.tag = 1, Ee(r) ? (e = !0, No(t)) : e = !1, Sn(t, n), Yc(t, r, o), xi(t, r, o, n), Ei(null, t, r, !0, e, n);
    case 19:
      return rd(e, t, n);
    case 22:
      return qc(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function wd(e, t) {
  return Qu(e, t);
}
function Fm(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Oe(e, t, n, r) {
  return new Fm(e, t, n, r);
}
function Ps(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function bm(e) {
  if (typeof e == "function") return Ps(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Qi) return 11;
    if (e === Gi) return 14;
  }
  return 2;
}
function Pt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Oe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function co(e, t, n, r, o, l) {
  var i = 2;
  if (r = e, typeof e == "function") Ps(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case ln:
      return Bt(n.children, o, l, t);
    case Hi:
      i = 8, o |= 8;
      break;
    case Vl:
      return e = Oe(12, n, t, o | 2), e.elementType = Vl, e.lanes = l, e;
    case Hl:
      return e = Oe(13, n, t, o), e.elementType = Hl, e.lanes = l, e;
    case Ql:
      return e = Oe(19, n, t, o), e.elementType = Ql, e.lanes = l, e;
    case Tu:
      return Zo(n, o, l, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Pu:
          i = 10;
          break e;
        case _u:
          i = 9;
          break e;
        case Qi:
          i = 11;
          break e;
        case Gi:
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
function Zo(e, t, n, r) {
  return e = Oe(22, e, r, t), e.elementType = Tu, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Ml(e, t, n) {
  return e = Oe(6, e, null, t), e.lanes = n, e;
}
function Rl(e, t, n) {
  return t = Oe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function $m(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = dl(0), this.expirationTimes = dl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = dl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function _s(e, t, n, r, o, l, i, s, a) {
  return e = new $m(e, t, n, s, a), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = Oe(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ds(l), e;
}
function Um(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: on, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function xd(e) {
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
    if (Ee(n)) return xc(e, n, t);
  }
  return t;
}
function Sd(e, t, n, r, o, l, i, s, a) {
  return e = _s(n, r, !0, e, o, l, i, s, a), e.context = xd(null), n = e.current, r = ve(), o = Dt(n), l = rt(r, o), l.callback = t ?? null, Ct(n, l, o), e.current.lanes = o, Nr(e, o, r), Ce(e, r), e;
}
function Jo(e, t, n, r) {
  var o = t.current, l = ve(), i = Dt(o);
  return n = xd(n), t.context === null ? t.context = n : t.pendingContext = n, t = rt(l, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Ct(o, t, i), e !== null && (We(e, o, i, l), oo(e, o, i)), i;
}
function Fo(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ba(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ts(e, t) {
  Ba(e, t), (e = e.alternate) && Ba(e, t);
}
function Wm() {
  return null;
}
var kd = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ms(e) {
  this._internalRoot = e;
}
qo.prototype.render = Ms.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  Jo(e, t, null, null);
};
qo.prototype.unmount = Ms.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Kt(function() {
      Jo(null, e, null, null);
    }), t[lt] = null;
  }
};
function qo(e) {
  this._internalRoot = e;
}
qo.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = qu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < gt.length && t !== 0 && t < gt[n].priority; n++) ;
    gt.splice(n, 0, e), n === 0 && tc(e);
  }
};
function Rs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function el(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Va() {
}
function Bm(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function() {
        var u = Fo(i);
        l.call(u);
      };
    }
    var i = Sd(t, r, e, 0, null, !1, !1, "", Va);
    return e._reactRootContainer = i, e[lt] = i.current, pr(e.nodeType === 8 ? e.parentNode : e), Kt(), i;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var u = Fo(a);
      s.call(u);
    };
  }
  var a = _s(e, 0, !1, null, null, !1, !1, "", Va);
  return e._reactRootContainer = a, e[lt] = a.current, pr(e.nodeType === 8 ? e.parentNode : e), Kt(function() {
    Jo(t, a, n, r);
  }), a;
}
function tl(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var a = Fo(i);
        s.call(a);
      };
    }
    Jo(t, i, e, o);
  } else i = Bm(n, t, e, o, r);
  return Fo(i);
}
Zu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Kn(t.pendingLanes);
        n !== 0 && (Xi(t, n | 1), Ce(t, ee()), !(F & 6) && (Rn = ee() + 500, Ot()));
      }
      break;
    case 13:
      Kt(function() {
        var r = it(e, 1);
        if (r !== null) {
          var o = ve();
          We(r, e, 1, o);
        }
      }), Ts(e, 1);
  }
};
Zi = function(e) {
  if (e.tag === 13) {
    var t = it(e, 134217728);
    if (t !== null) {
      var n = ve();
      We(t, e, 134217728, n);
    }
    Ts(e, 134217728);
  }
};
Ju = function(e) {
  if (e.tag === 13) {
    var t = Dt(e), n = it(e, t);
    if (n !== null) {
      var r = ve();
      We(n, e, t, r);
    }
    Ts(e, t);
  }
};
qu = function() {
  return W;
};
ec = function(e, t) {
  var n = W;
  try {
    return W = e, t();
  } finally {
    W = n;
  }
};
ni = function(e, t, n) {
  switch (t) {
    case "input":
      if (Yl(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Ho(r);
            if (!o) throw Error(N(90));
            Ru(r), Yl(r, o);
          }
        }
      }
      break;
    case "textarea":
      Ou(e, n);
      break;
    case "select":
      t = n.value, t != null && vn(e, !!n.multiple, t, !1);
  }
};
$u = Cs;
Uu = Kt;
var Vm = { usingClientEntryPoint: !1, Events: [Pr, cn, Ho, Fu, bu, Cs] }, Bn = { findFiberByHostInstance: bt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Hm = { bundleType: Bn.bundleType, version: Bn.version, rendererPackageName: Bn.rendererPackageName, rendererConfig: Bn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: at.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Vu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Bn.findFiberByHostInstance || Wm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Gr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Gr.isDisabled && Gr.supportsFiber) try {
    Uo = Gr.inject(Hm), Ye = Gr;
  } catch {
  }
}
Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vm;
Te.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Rs(t)) throw Error(N(200));
  return Um(e, t, null, n);
};
Te.createRoot = function(e, t) {
  if (!Rs(e)) throw Error(N(299));
  var n = !1, r = "", o = kd;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = _s(e, 1, !1, null, null, n, !1, r, o), e[lt] = t.current, pr(e.nodeType === 8 ? e.parentNode : e), new Ms(t);
};
Te.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(N(188)) : (e = Object.keys(e).join(","), Error(N(268, e)));
  return e = Vu(t), e = e === null ? null : e.stateNode, e;
};
Te.flushSync = function(e) {
  return Kt(e);
};
Te.hydrate = function(e, t, n) {
  if (!el(t)) throw Error(N(200));
  return tl(null, e, t, !0, n);
};
Te.hydrateRoot = function(e, t, n) {
  if (!Rs(e)) throw Error(N(405));
  var r = n != null && n.hydratedSources || null, o = !1, l = "", i = kd;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Sd(t, null, e, 1, n ?? null, o, !1, l, i), e[lt] = t.current, pr(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new qo(t);
};
Te.render = function(e, t, n) {
  if (!el(t)) throw Error(N(200));
  return tl(null, e, t, !1, n);
};
Te.unmountComponentAtNode = function(e) {
  if (!el(e)) throw Error(N(40));
  return e._reactRootContainer ? (Kt(function() {
    tl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[lt] = null;
    });
  }), !0) : !1;
};
Te.unstable_batchedUpdates = Cs;
Te.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!el(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return tl(e, t, n, !1, r);
};
Te.version = "18.3.1-next-f1338f8080-20240426";
function Ed() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ed);
    } catch (e) {
      console.error(e);
    }
}
Ed(), Eu.exports = Te;
var Ls = Eu.exports;
const Qm = /* @__PURE__ */ cu(Ls);
var Ha = Ls;
Wl.createRoot = Ha.createRoot, Wl.hydrateRoot = Ha.hydrateRoot;
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gm = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Cd = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Km = {
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
const Ym = v.forwardRef(
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
      ...Km,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Cd("lucide", o),
      ...s
    },
    [
      ...i.map(([u, h]) => v.createElement(u, h)),
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
    ({ className: r, ...o }, l) => v.createElement(Ym, {
      ref: l,
      iconNode: t,
      className: Cd(`lucide-${Gm(e)}`, r),
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
const Xm = Ze("Building2", [
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
const Ll = Ze("Calendar", [
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
const Zm = Ze("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jm = Ze("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qm = Ze("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eh = Ze("DollarSign", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const th = Ze("ExternalLink", [
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
const nh = Ze("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rh = Ze("MapPin", [
  ["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oh = Ze("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), lh = (e, t) => {
  const n = [];
  if (!e || !t) {
    const i = /* @__PURE__ */ new Date(), s = i.getFullYear(), a = i.getMonth();
    return Qa(s, a);
  }
  const r = new Date(e), o = new Date(t);
  let l = new Date(r.getFullYear(), r.getMonth(), 1);
  for (; l <= o; ) {
    const i = Qa(l.getFullYear(), l.getMonth());
    n.push(...i), l.setMonth(l.getMonth() + 1);
  }
  return n;
}, Qa = (e, t) => {
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
}, ih = (e) => {
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
function sh(e = {}) {
  const [t, n] = v.useState(!0);
  v.useEffect(() => {
    const i = setTimeout(() => {
      n(!1);
    }, 500);
    return () => clearTimeout(i);
  }, [e.start_date, e.end_date]);
  const r = fe.useMemo(() => lh(e.start_date, e.end_date), [e.start_date, e.end_date]), o = fe.useMemo(() => ih(r), [r]), l = fe.useMemo(() => {
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
class ah {
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
      const h = await u.json();
      return this.setCache(n, h), h;
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
const en = new ah(), uh = [
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
], Ga = (e) => {
  if (!e || typeof e != "object")
    return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    uh.includes(r) && (t[n] = r);
  }), t;
};
function ch(e = {}) {
  const [t, n] = v.useState([]), [r, o] = v.useState({}), [l, i] = v.useState({}), [s, a] = v.useState(!0), [u, h] = v.useState(!1), [p, f] = v.useState(null), [y, x] = v.useState(0), [g, k] = v.useState(0), [d, c] = v.useState(e), [m, w] = v.useState(), E = v.useRef(""), P = v.useRef(!0);
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
        n(b), o(D.eventMetadata || {}), i(Ga(D.categoryMappings)), x(D.total), k(D.pages), w(D.pagination);
      } else {
        const b = [], B = {};
        D.events.forEach((U) => {
          const Y = en.transformWordPressEventToEvent(U), he = en.transformWordPressEventToMetadata(U);
          b.push(Y), B[Y.id] = he;
        }), n(b), o(B), x(D.total), k(D.pages), w(D.pagination);
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
        h(!0), f(null);
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
          n((U) => [...U, ...B]), o((U) => ({ ...U, ...b.eventMetadata || {} })), i((U) => ({
            ...U,
            ...Ga(b.categoryMappings)
          })), w(b.pagination);
        } else {
          const B = [], U = {};
          b.events.forEach((Y) => {
            const he = en.transformWordPressEventToEvent(Y), _ = en.transformWordPressEventToMetadata(Y);
            B.push(he), U[he.id] = _;
          }), n((Y) => [...Y, ...B]), o((Y) => ({ ...Y, ...U })), w(b.pagination);
        }
      } catch (D) {
        console.error("Error loading more events:", D), f(D instanceof Error ? D.message : "Failed to load more events");
      } finally {
        h(!1);
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
    pages: g,
    refetch: T,
    setFilters: L,
    hasMore: (m == null ? void 0 : m.hasMore) || !1,
    loadMore: I,
    loadingMore: u,
    pagination: m,
    categoryMappings: l
  };
}
function dh() {
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
        const h = a.map((p) => ({
          id: p.id,
          name: p.name,
          slug: p.slug,
          count: p.count,
          variant: u[p.slug] || "default"
        }));
        t(h);
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
function fh(e = "default") {
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
function ph(e, t = {}) {
  return e && t[e] ? t[e] : "default";
}
function mh(e) {
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
function Ka(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Nd(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const l = Ka(o, t);
      return !n && typeof l == "function" && (n = !0), l;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const l = r[o];
          typeof l == "function" ? l() : Ka(e[o], null);
        }
      };
  };
}
function Jt(...e) {
  return v.useCallback(Nd(...e), e);
}
function hh(e, t) {
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
function gh(e, t = []) {
  let n = [];
  function r(l, i) {
    const s = v.createContext(i), a = n.length;
    n = [...n, i];
    const u = (p) => {
      var d;
      const { scope: f, children: y, ...x } = p, g = ((d = f == null ? void 0 : f[e]) == null ? void 0 : d[a]) || s, k = v.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ S.jsx(g.Provider, { value: k, children: y });
    };
    u.displayName = l + "Provider";
    function h(p, f) {
      var g;
      const y = ((g = f == null ? void 0 : f[e]) == null ? void 0 : g[a]) || s, x = v.useContext(y);
      if (x) return x;
      if (i !== void 0) return i;
      throw new Error(`\`${p}\` must be used within \`${l}\``);
    }
    return [u, h];
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
  return o.scopeName = e, [r, vh(o, ...t)];
}
function vh(...e) {
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
}, yh = Su[" useId ".trim().toString()] || (() => {
}), wh = 0;
function Ol(e) {
  const [t, n] = v.useState(yh());
  return kr(() => {
    n((r) => r ?? String(wh++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var xh = Su[" useInsertionEffect ".trim().toString()] || kr;
function Sh({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, l, i] = kh({
    defaultProp: t,
    onChange: n
  }), s = e !== void 0, a = s ? e : o;
  {
    const h = v.useRef(e !== void 0);
    v.useEffect(() => {
      const p = h.current;
      p !== s && console.warn(
        `${r} is changing from ${p ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), h.current = s;
    }, [s, r]);
  }
  const u = v.useCallback(
    (h) => {
      var p;
      if (s) {
        const f = Eh(h) ? h(e) : h;
        f !== e && ((p = i.current) == null || p.call(i, f));
      } else
        l(h);
    },
    [s, e, l, i]
  );
  return [a, u];
}
function kh({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = v.useState(e), o = v.useRef(n), l = v.useRef(t);
  return xh(() => {
    l.current = t;
  }, [t]), v.useEffect(() => {
    var i;
    o.current !== n && ((i = l.current) == null || i.call(l, n), o.current = n);
  }, [n, o]), [n, r, l];
}
function Eh(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function Dd(e) {
  const t = /* @__PURE__ */ Ch(e), n = v.forwardRef((r, o) => {
    const { children: l, ...i } = r, s = v.Children.toArray(l), a = s.find(Dh);
    if (a) {
      const u = a.props.children, h = s.map((p) => p === a ? v.Children.count(u) > 1 ? v.Children.only(null) : v.isValidElement(u) ? u.props.children : null : p);
      return /* @__PURE__ */ S.jsx(t, { ...i, ref: o, children: v.isValidElement(u) ? v.cloneElement(u, void 0, h) : null });
    }
    return /* @__PURE__ */ S.jsx(t, { ...i, ref: o, children: l });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Ch(e) {
  const t = v.forwardRef((n, r) => {
    const { children: o, ...l } = n;
    if (v.isValidElement(o)) {
      const i = _h(o), s = Ph(l, o.props);
      return o.type !== v.Fragment && (s.ref = r ? Nd(r, i) : i), v.cloneElement(o, s);
    }
    return v.Children.count(o) > 1 ? v.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Nh = Symbol("radix.slottable");
function Dh(e) {
  return v.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Nh;
}
function Ph(e, t) {
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
function _h(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Th = [
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
], ut = Th.reduce((e, t) => {
  const n = /* @__PURE__ */ Dd(`Primitive.${t}`), r = v.forwardRef((o, l) => {
    const { asChild: i, ...s } = o, a = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ S.jsx(a, { ...s, ref: l });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Mh(e, t) {
  e && Ls.flushSync(() => e.dispatchEvent(t));
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
function Rh(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Er(e);
  v.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Lh = "DismissableLayer", ji = "dismissableLayer.update", Oh = "dismissableLayer.pointerDownOutside", zh = "dismissableLayer.focusOutside", Ya, Pd = v.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), _d = v.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: l,
      onInteractOutside: i,
      onDismiss: s,
      ...a
    } = e, u = v.useContext(Pd), [h, p] = v.useState(null), f = (h == null ? void 0 : h.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, y] = v.useState({}), x = Jt(t, (C) => p(C)), g = Array.from(u.layers), [k] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), d = g.indexOf(k), c = h ? g.indexOf(h) : -1, m = u.layersWithOutsidePointerEventsDisabled.size > 0, w = c >= d, E = Ah((C) => {
      const T = C.target, I = [...u.branches].some((L) => L.contains(T));
      !w || I || (o == null || o(C), i == null || i(C), C.defaultPrevented || s == null || s());
    }, f), P = Fh((C) => {
      const T = C.target;
      [...u.branches].some((L) => L.contains(T)) || (l == null || l(C), i == null || i(C), C.defaultPrevented || s == null || s());
    }, f);
    return Rh((C) => {
      c === u.layers.size - 1 && (r == null || r(C), !C.defaultPrevented && s && (C.preventDefault(), s()));
    }, f), v.useEffect(() => {
      if (h)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Ya = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(h)), u.layers.add(h), Xa(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Ya);
        };
    }, [h, f, n, u]), v.useEffect(() => () => {
      h && (u.layers.delete(h), u.layersWithOutsidePointerEventsDisabled.delete(h), Xa());
    }, [h, u]), v.useEffect(() => {
      const C = () => y({});
      return document.addEventListener(ji, C), () => document.removeEventListener(ji, C);
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
_d.displayName = Lh;
var jh = "DismissableLayerBranch", Ih = v.forwardRef((e, t) => {
  const n = v.useContext(Pd), r = v.useRef(null), o = Jt(t, r);
  return v.useEffect(() => {
    const l = r.current;
    if (l)
      return n.branches.add(l), () => {
        n.branches.delete(l);
      };
  }, [n.branches]), /* @__PURE__ */ S.jsx(ut.div, { ...e, ref: o });
});
Ih.displayName = jh;
function Ah(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Er(e), r = v.useRef(!1), o = v.useRef(() => {
  });
  return v.useEffect(() => {
    const l = (s) => {
      if (s.target && !r.current) {
        let a = function() {
          Td(
            Oh,
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
function Fh(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Er(e), r = v.useRef(!1);
  return v.useEffect(() => {
    const o = (l) => {
      l.target && !r.current && Td(zh, n, { originalEvent: l }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Xa() {
  const e = new CustomEvent(ji);
  document.dispatchEvent(e);
}
function Td(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, l = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Mh(o, l) : o.dispatchEvent(l);
}
var zl = "focusScope.autoFocusOnMount", jl = "focusScope.autoFocusOnUnmount", Za = { bubbles: !1, cancelable: !0 }, bh = "FocusScope", Md = v.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: l,
    ...i
  } = e, [s, a] = v.useState(null), u = Er(o), h = Er(l), p = v.useRef(null), f = Jt(t, (g) => a(g)), y = v.useRef({
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
      let g = function(m) {
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
      document.addEventListener("focusin", g), document.addEventListener("focusout", k);
      const c = new MutationObserver(d);
      return s && c.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", k), c.disconnect();
      };
    }
  }, [r, s, y.paused]), v.useEffect(() => {
    if (s) {
      qa.add(y);
      const g = document.activeElement;
      if (!s.contains(g)) {
        const d = new CustomEvent(zl, Za);
        s.addEventListener(zl, u), s.dispatchEvent(d), d.defaultPrevented || ($h(Hh(Rd(s)), { select: !0 }), document.activeElement === g && pt(s));
      }
      return () => {
        s.removeEventListener(zl, u), setTimeout(() => {
          const d = new CustomEvent(jl, Za);
          s.addEventListener(jl, h), s.dispatchEvent(d), d.defaultPrevented || pt(g ?? document.body, { select: !0 }), s.removeEventListener(jl, h), qa.remove(y);
        }, 0);
      };
    }
  }, [s, u, h, y]);
  const x = v.useCallback(
    (g) => {
      if (!n && !r || y.paused) return;
      const k = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey, d = document.activeElement;
      if (k && d) {
        const c = g.currentTarget, [m, w] = Uh(c);
        m && w ? !g.shiftKey && d === w ? (g.preventDefault(), n && pt(m, { select: !0 })) : g.shiftKey && d === m && (g.preventDefault(), n && pt(w, { select: !0 })) : d === c && g.preventDefault();
      }
    },
    [n, r, y.paused]
  );
  return /* @__PURE__ */ S.jsx(ut.div, { tabIndex: -1, ...i, ref: f, onKeyDown: x });
});
Md.displayName = bh;
function $h(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (pt(r, { select: t }), document.activeElement !== n) return;
}
function Uh(e) {
  const t = Rd(e), n = Ja(t, e), r = Ja(t.reverse(), e);
  return [n, r];
}
function Rd(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Ja(e, t) {
  for (const n of e)
    if (!Wh(n, { upTo: t })) return n;
}
function Wh(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Bh(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function pt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Bh(e) && t && e.select();
  }
}
var qa = Vh();
function Vh() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = eu(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = eu(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function eu(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Hh(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Qh = "Portal", Ld = v.forwardRef((e, t) => {
  var s;
  const { container: n, ...r } = e, [o, l] = v.useState(!1);
  kr(() => l(!0), []);
  const i = n || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return i ? Qm.createPortal(/* @__PURE__ */ S.jsx(ut.div, { ...r, ref: t }), i) : null;
});
Ld.displayName = Qh;
function Gh(e, t) {
  return v.useReducer((n, r) => t[n][r] ?? n, e);
}
var nl = (e) => {
  const { present: t, children: n } = e, r = Kh(t), o = typeof n == "function" ? n({ present: r.isPresent }) : v.Children.only(n), l = Jt(r.ref, Yh(o));
  return typeof n == "function" || r.isPresent ? v.cloneElement(o, { ref: l }) : null;
};
nl.displayName = "Presence";
function Kh(e) {
  const [t, n] = v.useState(), r = v.useRef(null), o = v.useRef(e), l = v.useRef("none"), i = e ? "mounted" : "unmounted", [s, a] = Gh(i, {
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
    const u = Kr(r.current);
    l.current = s === "mounted" ? u : "none";
  }, [s]), kr(() => {
    const u = r.current, h = o.current;
    if (h !== e) {
      const f = l.current, y = Kr(u);
      e ? a("MOUNT") : y === "none" || (u == null ? void 0 : u.display) === "none" ? a("UNMOUNT") : a(h && f !== y ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, a]), kr(() => {
    if (t) {
      let u;
      const h = t.ownerDocument.defaultView ?? window, p = (y) => {
        const g = Kr(r.current).includes(CSS.escape(y.animationName));
        if (y.target === t && g && (a("ANIMATION_END"), !o.current)) {
          const k = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = h.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = k);
          });
        }
      }, f = (y) => {
        y.target === t && (l.current = Kr(r.current));
      };
      return t.addEventListener("animationstart", f), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        h.clearTimeout(u), t.removeEventListener("animationstart", f), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
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
function Kr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Yh(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Il = 0;
function Xh() {
  v.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? tu()), document.body.insertAdjacentElement("beforeend", e[1] ?? tu()), Il++, () => {
      Il === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Il--;
    };
  }, []);
}
function tu() {
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
function Od(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Zh(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, l; r < o; r++)
    (l || !(r in t)) && (l || (l = Array.prototype.slice.call(t, 0, r)), l[r] = t[r]);
  return e.concat(l || Array.prototype.slice.call(t));
}
var fo = "right-scroll-bar-position", po = "width-before-scroll-bar", Jh = "with-scroll-bars-hidden", qh = "--removed-body-scroll-bar-size";
function Al(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function eg(e, t) {
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
var tg = typeof window < "u" ? v.useLayoutEffect : v.useEffect, nu = /* @__PURE__ */ new WeakMap();
function ng(e, t) {
  var n = eg(null, function(r) {
    return e.forEach(function(o) {
      return Al(o, r);
    });
  });
  return tg(function() {
    var r = nu.get(n);
    if (r) {
      var o = new Set(r), l = new Set(e), i = n.current;
      o.forEach(function(s) {
        l.has(s) || Al(s, null);
      }), l.forEach(function(s) {
        o.has(s) || Al(s, i);
      });
    }
    nu.set(n, e);
  }, [e]), n;
}
function rg(e) {
  return e;
}
function og(e, t) {
  t === void 0 && (t = rg);
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
        var h = i;
        i = [], h.forEach(l);
      }, u = function() {
        return Promise.resolve().then(a);
      };
      u(), n = {
        push: function(h) {
          i.push(h), u();
        },
        filter: function(h) {
          return i = i.filter(h), n;
        }
      };
    }
  };
  return o;
}
function lg(e) {
  e === void 0 && (e = {});
  var t = og(null);
  return t.options = Ke({ async: !0, ssr: !1 }, e), t;
}
var zd = function(e) {
  var t = e.sideCar, n = Od(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return v.createElement(r, Ke({}, n));
};
zd.isSideCarExport = !0;
function ig(e, t) {
  return e.useMedium(t), zd;
}
var jd = lg(), Fl = function() {
}, rl = v.forwardRef(function(e, t) {
  var n = v.useRef(null), r = v.useState({
    onScrollCapture: Fl,
    onWheelCapture: Fl,
    onTouchMoveCapture: Fl
  }), o = r[0], l = r[1], i = e.forwardProps, s = e.children, a = e.className, u = e.removeScrollBar, h = e.enabled, p = e.shards, f = e.sideCar, y = e.noRelative, x = e.noIsolation, g = e.inert, k = e.allowPinchZoom, d = e.as, c = d === void 0 ? "div" : d, m = e.gapMode, w = Od(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), E = f, P = ng([n, t]), C = Ke(Ke({}, w), o);
  return v.createElement(
    v.Fragment,
    null,
    h && v.createElement(E, { sideCar: jd, removeScrollBar: u, shards: p, noRelative: y, noIsolation: x, inert: g, setCallbacks: l, allowPinchZoom: !!k, lockRef: n, gapMode: m }),
    i ? v.cloneElement(v.Children.only(s), Ke(Ke({}, C), { ref: P })) : v.createElement(c, Ke({}, C, { className: a, ref: P }), s)
  );
});
rl.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
rl.classNames = {
  fullWidth: po,
  zeroRight: fo
};
var sg = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function ag() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = sg();
  return t && e.setAttribute("nonce", t), e;
}
function ug(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function cg(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var dg = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = ag()) && (ug(t, n), cg(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, fg = function() {
  var e = dg();
  return function(t, n) {
    v.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Id = function() {
  var e = fg(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, pg = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, bl = function(e) {
  return parseInt(e || "", 10) || 0;
}, mg = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [bl(n), bl(r), bl(o)];
}, hg = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return pg;
  var t = mg(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, gg = Id(), En = "data-scroll-locked", vg = function(e, t, n, r) {
  var o = e.left, l = e.top, i = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Jh, ` {
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
  
  .`).concat(fo, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(po, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(fo, " .").concat(fo, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(po, " .").concat(po, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(En, `] {
    `).concat(qh, ": ").concat(s, `px;
  }
`);
}, ru = function() {
  var e = parseInt(document.body.getAttribute(En) || "0", 10);
  return isFinite(e) ? e : 0;
}, yg = function() {
  v.useEffect(function() {
    return document.body.setAttribute(En, (ru() + 1).toString()), function() {
      var e = ru() - 1;
      e <= 0 ? document.body.removeAttribute(En) : document.body.setAttribute(En, e.toString());
    };
  }, []);
}, wg = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  yg();
  var l = v.useMemo(function() {
    return hg(o);
  }, [o]);
  return v.createElement(gg, { styles: vg(l, !t, o, n ? "" : "!important") });
}, Ii = !1;
if (typeof window < "u")
  try {
    var Yr = Object.defineProperty({}, "passive", {
      get: function() {
        return Ii = !0, !0;
      }
    });
    window.addEventListener("test", Yr, Yr), window.removeEventListener("test", Yr, Yr);
  } catch {
    Ii = !1;
  }
var tn = Ii ? { passive: !1 } : !1, xg = function(e) {
  return e.tagName === "TEXTAREA";
}, Ad = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !xg(e) && n[t] === "visible")
  );
}, Sg = function(e) {
  return Ad(e, "overflowY");
}, kg = function(e) {
  return Ad(e, "overflowX");
}, ou = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Fd(e, r);
    if (o) {
      var l = bd(e, r), i = l[1], s = l[2];
      if (i > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Eg = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Cg = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Fd = function(e, t) {
  return e === "v" ? Sg(t) : kg(t);
}, bd = function(e, t) {
  return e === "v" ? Eg(t) : Cg(t);
}, Ng = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Dg = function(e, t, n, r, o) {
  var l = Ng(e, window.getComputedStyle(t).direction), i = l * r, s = n.target, a = t.contains(s), u = !1, h = i > 0, p = 0, f = 0;
  do {
    if (!s)
      break;
    var y = bd(e, s), x = y[0], g = y[1], k = y[2], d = g - k - l * x;
    (x || d) && Fd(e, s) && (p += d, f += x);
    var c = s.parentNode;
    s = c && c.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? c.host : c;
  } while (
    // portaled content
    !a && s !== document.body || // self content
    a && (t.contains(s) || t === s)
  );
  return (h && Math.abs(p) < 1 || !h && Math.abs(f) < 1) && (u = !0), u;
}, Xr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, lu = function(e) {
  return [e.deltaX, e.deltaY];
}, iu = function(e) {
  return e && "current" in e ? e.current : e;
}, Pg = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, _g = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Tg = 0, nn = [];
function Mg(e) {
  var t = v.useRef([]), n = v.useRef([0, 0]), r = v.useRef(), o = v.useState(Tg++)[0], l = v.useState(Id)[0], i = v.useRef(e);
  v.useEffect(function() {
    i.current = e;
  }, [e]), v.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = Zh([e.lockRef.current], (e.shards || []).map(iu), !0).filter(Boolean);
      return g.forEach(function(k) {
        return k.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), g.forEach(function(k) {
          return k.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = v.useCallback(function(g, k) {
    if ("touches" in g && g.touches.length === 2 || g.type === "wheel" && g.ctrlKey)
      return !i.current.allowPinchZoom;
    var d = Xr(g), c = n.current, m = "deltaX" in g ? g.deltaX : c[0] - d[0], w = "deltaY" in g ? g.deltaY : c[1] - d[1], E, P = g.target, C = Math.abs(m) > Math.abs(w) ? "h" : "v";
    if ("touches" in g && C === "h" && P.type === "range")
      return !1;
    var T = ou(C, P);
    if (!T)
      return !0;
    if (T ? E = C : (E = C === "v" ? "h" : "v", T = ou(C, P)), !T)
      return !1;
    if (!r.current && "changedTouches" in g && (m || w) && (r.current = E), !E)
      return !0;
    var I = r.current || E;
    return Dg(I, k, g, I === "h" ? m : w);
  }, []), a = v.useCallback(function(g) {
    var k = g;
    if (!(!nn.length || nn[nn.length - 1] !== l)) {
      var d = "deltaY" in k ? lu(k) : Xr(k), c = t.current.filter(function(E) {
        return E.name === k.type && (E.target === k.target || k.target === E.shadowParent) && Pg(E.delta, d);
      })[0];
      if (c && c.should) {
        k.cancelable && k.preventDefault();
        return;
      }
      if (!c) {
        var m = (i.current.shards || []).map(iu).filter(Boolean).filter(function(E) {
          return E.contains(k.target);
        }), w = m.length > 0 ? s(k, m[0]) : !i.current.noIsolation;
        w && k.cancelable && k.preventDefault();
      }
    }
  }, []), u = v.useCallback(function(g, k, d, c) {
    var m = { name: g, delta: k, target: d, should: c, shadowParent: Rg(d) };
    t.current.push(m), setTimeout(function() {
      t.current = t.current.filter(function(w) {
        return w !== m;
      });
    }, 1);
  }, []), h = v.useCallback(function(g) {
    n.current = Xr(g), r.current = void 0;
  }, []), p = v.useCallback(function(g) {
    u(g.type, lu(g), g.target, s(g, e.lockRef.current));
  }, []), f = v.useCallback(function(g) {
    u(g.type, Xr(g), g.target, s(g, e.lockRef.current));
  }, []);
  v.useEffect(function() {
    return nn.push(l), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", a, tn), document.addEventListener("touchmove", a, tn), document.addEventListener("touchstart", h, tn), function() {
      nn = nn.filter(function(g) {
        return g !== l;
      }), document.removeEventListener("wheel", a, tn), document.removeEventListener("touchmove", a, tn), document.removeEventListener("touchstart", h, tn);
    };
  }, []);
  var y = e.removeScrollBar, x = e.inert;
  return v.createElement(
    v.Fragment,
    null,
    x ? v.createElement(l, { styles: _g(o) }) : null,
    y ? v.createElement(wg, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Rg(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Lg = ig(jd, Mg);
var $d = v.forwardRef(function(e, t) {
  return v.createElement(rl, Ke({}, e, { ref: t, sideCar: Lg }));
});
$d.classNames = rl.classNames;
var Og = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, rn = /* @__PURE__ */ new WeakMap(), Zr = /* @__PURE__ */ new WeakMap(), Jr = {}, $l = 0, Ud = function(e) {
  return e && (e.host || Ud(e.parentNode));
}, zg = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Ud(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, jg = function(e, t, n, r) {
  var o = zg(t, Array.isArray(e) ? e : [e]);
  Jr[n] || (Jr[n] = /* @__PURE__ */ new WeakMap());
  var l = Jr[n], i = [], s = /* @__PURE__ */ new Set(), a = new Set(o), u = function(p) {
    !p || s.has(p) || (s.add(p), u(p.parentNode));
  };
  o.forEach(u);
  var h = function(p) {
    !p || a.has(p) || Array.prototype.forEach.call(p.children, function(f) {
      if (s.has(f))
        h(f);
      else
        try {
          var y = f.getAttribute(r), x = y !== null && y !== "false", g = (rn.get(f) || 0) + 1, k = (l.get(f) || 0) + 1;
          rn.set(f, g), l.set(f, k), i.push(f), g === 1 && x && Zr.set(f, !0), k === 1 && f.setAttribute(n, "true"), x || f.setAttribute(r, "true");
        } catch (d) {
          console.error("aria-hidden: cannot operate on ", f, d);
        }
    });
  };
  return h(t), s.clear(), $l++, function() {
    i.forEach(function(p) {
      var f = rn.get(p) - 1, y = l.get(p) - 1;
      rn.set(p, f), l.set(p, y), f || (Zr.has(p) || p.removeAttribute(r), Zr.delete(p)), y || p.removeAttribute(n);
    }), $l--, $l || (rn = /* @__PURE__ */ new WeakMap(), rn = /* @__PURE__ */ new WeakMap(), Zr = /* @__PURE__ */ new WeakMap(), Jr = {});
  };
}, Ig = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Og(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), jg(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, ol = "Dialog", [Wd, Ov] = gh(ol), [Ag, Ve] = Wd(ol), Bd = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: l,
    modal: i = !0
  } = e, s = v.useRef(null), a = v.useRef(null), [u, h] = Sh({
    prop: r,
    defaultProp: o ?? !1,
    onChange: l,
    caller: ol
  });
  return /* @__PURE__ */ S.jsx(
    Ag,
    {
      scope: t,
      triggerRef: s,
      contentRef: a,
      contentId: Ol(),
      titleId: Ol(),
      descriptionId: Ol(),
      open: u,
      onOpenChange: h,
      onOpenToggle: v.useCallback(() => h((p) => !p), [h]),
      modal: i,
      children: n
    }
  );
};
Bd.displayName = ol;
var Vd = "DialogTrigger", Fg = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ve(Vd, n), l = Jt(t, o.triggerRef);
    return /* @__PURE__ */ S.jsx(
      ut.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": js(o.open),
        ...r,
        ref: l,
        onClick: _t(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Fg.displayName = Vd;
var Os = "DialogPortal", [bg, Hd] = Wd(Os, {
  forceMount: void 0
}), Qd = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, l = Ve(Os, t);
  return /* @__PURE__ */ S.jsx(bg, { scope: t, forceMount: n, children: v.Children.map(r, (i) => /* @__PURE__ */ S.jsx(nl, { present: n || l.open, children: /* @__PURE__ */ S.jsx(Ld, { asChild: !0, container: o, children: i }) })) });
};
Qd.displayName = Os;
var bo = "DialogOverlay", Gd = v.forwardRef(
  (e, t) => {
    const n = Hd(bo, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, l = Ve(bo, e.__scopeDialog);
    return l.modal ? /* @__PURE__ */ S.jsx(nl, { present: r || l.open, children: /* @__PURE__ */ S.jsx(Ug, { ...o, ref: t }) }) : null;
  }
);
Gd.displayName = bo;
var $g = /* @__PURE__ */ Dd("DialogOverlay.RemoveScroll"), Ug = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ve(bo, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ S.jsx($d, { as: $g, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ S.jsx(
        ut.div,
        {
          "data-state": js(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Yt = "DialogContent", Kd = v.forwardRef(
  (e, t) => {
    const n = Hd(Yt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, l = Ve(Yt, e.__scopeDialog);
    return /* @__PURE__ */ S.jsx(nl, { present: r || l.open, children: l.modal ? /* @__PURE__ */ S.jsx(Wg, { ...o, ref: t }) : /* @__PURE__ */ S.jsx(Bg, { ...o, ref: t }) });
  }
);
Kd.displayName = Yt;
var Wg = v.forwardRef(
  (e, t) => {
    const n = Ve(Yt, e.__scopeDialog), r = v.useRef(null), o = Jt(t, n.contentRef, r);
    return v.useEffect(() => {
      const l = r.current;
      if (l) return Ig(l);
    }, []), /* @__PURE__ */ S.jsx(
      Yd,
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
), Bg = v.forwardRef(
  (e, t) => {
    const n = Ve(Yt, e.__scopeDialog), r = v.useRef(!1), o = v.useRef(!1);
    return /* @__PURE__ */ S.jsx(
      Yd,
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
), Yd = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: l, ...i } = e, s = Ve(Yt, n), a = v.useRef(null), u = Jt(t, a);
    return Xh(), /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
      /* @__PURE__ */ S.jsx(
        Md,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: l,
          children: /* @__PURE__ */ S.jsx(
            _d,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": js(s.open),
              ...i,
              ref: u,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
        /* @__PURE__ */ S.jsx(Vg, { titleId: s.titleId }),
        /* @__PURE__ */ S.jsx(Qg, { contentRef: a, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), zs = "DialogTitle", Xd = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ve(zs, n);
    return /* @__PURE__ */ S.jsx(ut.h2, { id: o.titleId, ...r, ref: t });
  }
);
Xd.displayName = zs;
var Zd = "DialogDescription", Jd = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ve(Zd, n);
    return /* @__PURE__ */ S.jsx(ut.p, { id: o.descriptionId, ...r, ref: t });
  }
);
Jd.displayName = Zd;
var qd = "DialogClose", ef = v.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ve(qd, n);
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
ef.displayName = qd;
function js(e) {
  return e ? "open" : "closed";
}
var tf = "DialogTitleWarning", [zv, nf] = hh(tf, {
  contentName: Yt,
  titleName: zs,
  docsSlug: "dialog"
}), Vg = ({ titleId: e }) => {
  const t = nf(tf), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return v.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Hg = "DialogDescriptionWarning", Qg = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${nf(Hg).contentName}}.`;
  return v.useEffect(() => {
    var l;
    const o = (l = e.current) == null ? void 0 : l.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Gg = Bd, Kg = Qd, rf = Gd, of = Kd, lf = Xd, sf = Jd, Yg = ef;
function af(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = af(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Xg() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = af(e)) && (r && (r += " "), r += t);
  return r;
}
const Is = "-", Zg = (e) => {
  const t = qg(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const s = i.split(Is);
      return s[0] === "" && s.length !== 1 && s.shift(), uf(s, t) || Jg(i);
    },
    getConflictingClassGroupIds: (i, s) => {
      const a = n[i] || [];
      return s && r[i] ? [...a, ...r[i]] : a;
    }
  };
}, uf = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? uf(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const l = e.join(Is);
  return (i = t.validators.find(({
    validator: s
  }) => s(l))) == null ? void 0 : i.classGroupId;
}, su = /^\[(.+)\]$/, Jg = (e) => {
  if (su.test(e)) {
    const t = su.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, qg = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return tv(Object.entries(e.classGroups), n).forEach(([l, i]) => {
    Ai(i, r, l, t);
  }), r;
}, Ai = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const l = o === "" ? t : au(t, o);
      l.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (ev(o)) {
        Ai(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([l, i]) => {
      Ai(i, au(t, l), n, r);
    });
  });
}, au = (e, t) => {
  let n = e;
  return t.split(Is).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, ev = (e) => e.isThemeGetter, tv = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((l) => typeof l == "string" ? t + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(([i, s]) => [t + i, s])) : l);
  return [n, o];
}) : e, nv = (e) => {
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
}, cf = "!", rv = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, o = t[0], l = t.length, i = (s) => {
    const a = [];
    let u = 0, h = 0, p;
    for (let k = 0; k < s.length; k++) {
      let d = s[k];
      if (u === 0) {
        if (d === o && (r || s.slice(k, k + l) === t)) {
          a.push(s.slice(h, k)), h = k + l;
          continue;
        }
        if (d === "/") {
          p = k;
          continue;
        }
      }
      d === "[" ? u++ : d === "]" && u--;
    }
    const f = a.length === 0 ? s : s.substring(h), y = f.startsWith(cf), x = y ? f.substring(1) : f, g = p && p > h ? p - h : void 0;
    return {
      modifiers: a,
      hasImportantModifier: y,
      baseClassName: x,
      maybePostfixModifierPosition: g
    };
  };
  return n ? (s) => n({
    className: s,
    parseClassName: i
  }) : i;
}, ov = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, lv = (e) => ({
  cache: nv(e.cacheSize),
  parseClassName: rv(e),
  ...Zg(e)
}), iv = /\s+/, sv = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, l = [], i = e.trim().split(iv);
  let s = "";
  for (let a = i.length - 1; a >= 0; a -= 1) {
    const u = i[a], {
      modifiers: h,
      hasImportantModifier: p,
      baseClassName: f,
      maybePostfixModifierPosition: y
    } = n(u);
    let x = !!y, g = r(x ? f.substring(0, y) : f);
    if (!g) {
      if (!x) {
        s = u + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (g = r(f), !g) {
        s = u + (s.length > 0 ? " " + s : s);
        continue;
      }
      x = !1;
    }
    const k = ov(h).join(":"), d = p ? k + cf : k, c = d + g;
    if (l.includes(c))
      continue;
    l.push(c);
    const m = o(g, x);
    for (let w = 0; w < m.length; ++w) {
      const E = m[w];
      l.push(d + E);
    }
    s = u + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function av() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = df(t)) && (r && (r += " "), r += n);
  return r;
}
const df = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = df(e[r])) && (n && (n += " "), n += t);
  return n;
};
function uv(e, ...t) {
  let n, r, o, l = i;
  function i(a) {
    const u = t.reduce((h, p) => p(h), e());
    return n = lv(u), r = n.cache.get, o = n.cache.set, l = s, s(a);
  }
  function s(a) {
    const u = r(a);
    if (u)
      return u;
    const h = sv(a, n);
    return o(a, h), h;
  }
  return function() {
    return l(av.apply(null, arguments));
  };
}
const H = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, ff = /^\[(?:([a-z-]+):)?(.+)\]$/i, cv = /^\d+\/\d+$/, dv = /* @__PURE__ */ new Set(["px", "full", "screen"]), fv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, pv = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, mv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, hv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, gv = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Je = (e) => Cn(e) || dv.has(e) || cv.test(e), dt = (e) => jn(e, "length", Cv), Cn = (e) => !!e && !Number.isNaN(Number(e)), Ul = (e) => jn(e, "number", Cn), Vn = (e) => !!e && Number.isInteger(Number(e)), vv = (e) => e.endsWith("%") && Cn(e.slice(0, -1)), z = (e) => ff.test(e), ft = (e) => fv.test(e), yv = /* @__PURE__ */ new Set(["length", "size", "percentage"]), wv = (e) => jn(e, yv, pf), xv = (e) => jn(e, "position", pf), Sv = /* @__PURE__ */ new Set(["image", "url"]), kv = (e) => jn(e, Sv, Dv), Ev = (e) => jn(e, "", Nv), Hn = () => !0, jn = (e, t, n) => {
  const r = ff.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, Cv = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  pv.test(e) && !mv.test(e)
), pf = () => !1, Nv = (e) => hv.test(e), Dv = (e) => gv.test(e), Pv = () => {
  const e = H("colors"), t = H("spacing"), n = H("blur"), r = H("brightness"), o = H("borderColor"), l = H("borderRadius"), i = H("borderSpacing"), s = H("borderWidth"), a = H("contrast"), u = H("grayscale"), h = H("hueRotate"), p = H("invert"), f = H("gap"), y = H("gradientColorStops"), x = H("gradientColorStopPositions"), g = H("inset"), k = H("margin"), d = H("opacity"), c = H("padding"), m = H("saturate"), w = H("scale"), E = H("sepia"), P = H("skew"), C = H("space"), T = H("translate"), I = () => ["auto", "contain", "none"], L = () => ["auto", "hidden", "clip", "visible", "scroll"], $ = () => ["auto", z, t], D = () => [z, t], b = () => ["", Je, dt], B = () => ["auto", Cn, z], U = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], Y = () => ["solid", "dashed", "dotted", "double", "none"], he = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], _ = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], R = () => ["", "0", z], O = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], A = () => [Cn, z];
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
      gradientColorStopPositions: [vv, dt],
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ul]
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
        "line-clamp": ["none", Cn, Ul]
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
        bg: [...U(), xv]
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
        bg: ["auto", "cover", "contain", wv]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, kv]
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
        shadow: ["", "inner", "none", ft, Ev]
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
        "mix-blend": [...he(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": he()
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
        "hue-rotate": [h]
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
        "backdrop-hue-rotate": [h]
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
        stroke: [Je, dt, Ul]
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
}, _v = /* @__PURE__ */ uv(Pv);
function zt(...e) {
  return _v(Xg(e));
}
const Tv = Gg, Mv = Kg, mf = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ S.jsx(
  rf,
  {
    ref: n,
    className: zt(
      "fixed inset-0 z-[99999] bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
mf.displayName = rf.displayName;
const hf = v.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ S.jsxs(Mv, { children: [
  /* @__PURE__ */ S.jsx(mf, {}),
  /* @__PURE__ */ S.jsxs(
    of,
    {
      ref: r,
      className: zt(
        "fixed left-[50%] top-[50%] z-[99999] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-card text-foreground p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ S.jsxs(Yg, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-all duration-200 hover:opacity-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 p-1", children: [
          /* @__PURE__ */ S.jsx(oh, { className: "h-4 w-4" }),
          /* @__PURE__ */ S.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
hf.displayName = of.displayName;
const gf = ({
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
gf.displayName = "DialogHeader";
const vf = ({
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
vf.displayName = "DialogFooter";
const yf = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ S.jsx(
  lf,
  {
    ref: n,
    className: zt(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
yf.displayName = lf.displayName;
const wf = v.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ S.jsx(
  sf,
  {
    ref: n,
    className: zt("text-sm text-muted-foreground", e),
    ...t
  }
));
wf.displayName = sf.displayName;
const mo = v.forwardRef(
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
mo.displayName = "Button";
function uu({
  className: e,
  variant: t = "default",
  size: n = "default",
  ...r
}) {
  return /* @__PURE__ */ S.jsx(
    "div",
    {
      className: zt(
        "inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 dark:focus:ring-slate-300 focus:ring-offset-2",
        {
          default: "border-transparent bg-gray-500 text-white hover:bg-gray-500/80",
          // Gray for uncategorized
          secondary: "border-transparent bg-slate-100 text-slate-900 hover:bg-slate-100/80",
          destructive: "border-transparent bg-red-500 text-slate-50 hover:bg-red-500/80",
          outline: "text-slate-950 dark:text-slate-50 border-slate-200 dark:border-slate-600",
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
function Rv({ event: e, eventMetadata: t, open: n, onOpenChange: r, showCost: o = !0 }) {
  const [l, i] = fe.useState(!1);
  if (fe.useEffect(() => {
    var p;
    e && ((p = t[e.id]) != null && p.website) && console.log("Event website URL:", t[e.id].website);
  }, [e, t]), !e) return null;
  const s = t[e.id], a = (p, f = 180) => {
    if (!p || p.length <= f) return p;
    const y = p.substring(0, f), x = y.lastIndexOf("."), g = y.lastIndexOf(" "), k = x > f - 50 ? x + 1 : g;
    return p.substring(0, k > 0 ? k : f).trim();
  }, u = (p) => {
    const f = e.startDate, y = e.endDate || new Date(f.getTime() + 60 * 60 * 1e3), x = (g) => g.toISOString().replace(/-|:|\.\d\d\d/g, "");
    switch (p) {
      case "google":
        const g = new URL("https://calendar.google.com/calendar/render");
        return g.searchParams.append("action", "TEMPLATE"), g.searchParams.append("text", e.title), g.searchParams.append("dates", `${x(f)}/${x(y)}`), g.searchParams.append("details", e.description || ""), s != null && s.location && g.searchParams.append("location", s.location), g.toString();
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
  }, h = {
    clubs: "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary",
    unbc: "bg-secondary/10 text-secondary dark:bg-secondary/20 dark:text-secondary",
    organizations: "bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive",
    sports: "bg-accent/10 text-accent dark:bg-accent/20 dark:text-accent"
  };
  return /* @__PURE__ */ S.jsx(Tv, { open: n, onOpenChange: r, children: /* @__PURE__ */ S.jsxs(hf, { className: "max-w-2xl w-[95vw] max-h-[90vh] overflow-y-auto overflow-x-hidden bg-card border border-border sm:w-full p-4 sm:p-6", children: [
    /* @__PURE__ */ S.jsxs(gf, { children: [
      /* @__PURE__ */ S.jsx(yf, { className: "text-xl text-foreground", children: e.title }),
      e.description && /* @__PURE__ */ S.jsxs("div", { className: "mt-2", children: [
        /* @__PURE__ */ S.jsx(wf, { className: `text-muted-foreground leading-relaxed break-words ${l ? "max-h-[40vh] overflow-y-auto pr-2" : ""}`, children: l ? e.description : a(e.description) }),
        e.description.length > 180 && /* @__PURE__ */ S.jsx(
          "button",
          {
            onClick: () => i(!l),
            className: "inline-flex items-center gap-1 mt-3 px-3 py-2 text-sm text-primary hover:text-primary/80 hover:bg-primary/10 active:bg-primary/20 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
            children: l ? /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
              "Show less",
              /* @__PURE__ */ S.jsx(Jm, { className: "h-4 w-4" })
            ] }) : /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
              "Read more",
              /* @__PURE__ */ S.jsx(Zm, { className: "h-4 w-4" })
            ] })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ S.jsx("div", { className: "space-y-4 my-4", children: /* @__PURE__ */ S.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
        /* @__PURE__ */ S.jsx(qm, { className: "h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" }),
        /* @__PURE__ */ S.jsxs("div", { children: [
          /* @__PURE__ */ S.jsx("div", { className: "font-medium text-foreground", children: e.startDate.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          }) }),
          /* @__PURE__ */ S.jsxs("div", { className: "text-muted-foreground", children: [
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
      s && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
        s.location && /* @__PURE__ */ S.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ S.jsx(rh, { className: "h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" }),
          /* @__PURE__ */ S.jsx("span", { className: "text-foreground", children: s.location })
        ] }),
        s.organization && /* @__PURE__ */ S.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ S.jsx(Xm, { className: "h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" }),
          /* @__PURE__ */ S.jsx("span", { className: "text-foreground", children: s.organization })
        ] }),
        o && s.cost && /* @__PURE__ */ S.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ S.jsx(eh, { className: "h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" }),
          /* @__PURE__ */ S.jsx("span", { className: "text-foreground", children: s.cost })
        ] }),
        s.website && /* @__PURE__ */ S.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ S.jsx(th, { className: "h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" }),
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
        /* @__PURE__ */ S.jsxs("div", { className: "flex items-center gap-3", children: [
          s.category && /* @__PURE__ */ S.jsx(uu, { className: h[s.category] || "bg-muted text-foreground", children: s.category.charAt(0).toUpperCase() + s.category.slice(1) }),
          s.registrationRequired && /* @__PURE__ */ S.jsx(uu, { variant: "outline", className: "border-border text-foreground", children: "Registration Required" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ S.jsxs(vf, { className: "flex-col sm:flex-col gap-2", children: [
      /* @__PURE__ */ S.jsx("div", { className: "text-sm text-muted-foreground mb-2", children: "Add to your calendar:" }),
      /* @__PURE__ */ S.jsxs("div", { className: "flex gap-2 w-full", children: [
        /* @__PURE__ */ S.jsxs(
          mo,
          {
            variant: "outline",
            className: "flex-1 border-border bg-card text-foreground hover:bg-muted text-xs sm:text-sm",
            onClick: () => window.open(u("google"), "_blank"),
            children: [
              /* @__PURE__ */ S.jsx(Ll, { className: "h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" }),
              "Google"
            ]
          }
        ),
        /* @__PURE__ */ S.jsxs(
          mo,
          {
            variant: "outline",
            className: "flex-1 border-border bg-card text-foreground hover:bg-muted text-xs sm:text-sm",
            onClick: () => {
              const p = u("outlook"), f = document.createElement("a");
              f.href = p, f.download = `${e.title.replace(/[^a-z0-9]/gi, "_")}.ics`, f.click();
            },
            children: [
              /* @__PURE__ */ S.jsx(Ll, { className: "h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" }),
              "Outlook"
            ]
          }
        ),
        /* @__PURE__ */ S.jsxs(
          mo,
          {
            variant: "outline",
            className: "flex-1 border-border bg-card text-foreground hover:bg-muted text-xs sm:text-sm",
            onClick: () => {
              const p = u("apple"), f = document.createElement("a");
              f.href = p, f.download = `${e.title.replace(/[^a-z0-9]/gi, "_")}.ics`, f.click();
            },
            children: [
              /* @__PURE__ */ S.jsx(Ll, { className: "h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" }),
              "Apple"
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
function Lv({
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
  const h = fe.useMemo(() => ({
    per_page: 100,
    start_date: a.toISOString().split("T")[0],
    end_date: u.toISOString().split("T")[0],
    year: a.getFullYear(),
    month: a.getMonth() + 1,
    category: ""
  }), []);
  sh(h);
  const p = ch(h), f = dh(), y = p, {
    events: x,
    eventMetadata: g,
    loading: k,
    error: d,
    categoryMappings: c
  } = y, { categories: m, loading: w } = f, E = fe.useMemo(
    () => mh(m),
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
    const b = g[D.id], B = ph(b == null ? void 0 : b.category, P), Y = fh(B).replace("bg-", "after:bg-"), he = new Date(D.startDate), _ = new Date(D.endDate), R = !Number.isNaN(he.getTime()) && !Number.isNaN(_.getTime()), O = R && he.getTime() === _.getTime(), A = R ? `${T(he)}${O ? "" : ` - ${T(_)}`}` : null;
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
    /* @__PURE__ */ S.jsx(nh, { className: "h-6 w-6 animate-spin mx-auto mb-2 text-gray-400 dark:text-muted-foreground" }),
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
      Rv,
      {
        event: o,
        eventMetadata: g,
        open: i,
        onOpenChange: s
      }
    )
  ] });
}
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".unbc-today-events-widget").forEach((t) => {
    const n = t.getAttribute("data-title") || "Today's Events", r = parseInt(t.getAttribute("data-max-events") || "10");
    Wl.createRoot(t).render(
      /* @__PURE__ */ S.jsx(fe.StrictMode, { children: /* @__PURE__ */ S.jsx(
        Lv,
        {
          title: n,
          maxEvents: r
        }
      ) })
    );
  });
});
