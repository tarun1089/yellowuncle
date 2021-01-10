/* firebase app,firestore, firebase-auth7.15.5 in order*/

!(function(e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e = e || self).firebase = t());
})(this, function() {
  'use strict';
  var r = function(e, t) {
    return (r =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function(e, t) {
          e.__proto__ = t;
        }) ||
      function(e, t) {
        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
      })(e, t);
  };
  var a = function() {
    return (a =
      Object.assign ||
      function(e) {
        for (var t, r = 1, n = arguments.length; r < n; r++)
          for (var i in (t = arguments[r]))
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      }).apply(this, arguments);
  };
  function e(r, n) {
    var i,
      o,
      a,
      e,
      s = {
        label: 0,
        sent: function() {
          if (1 & a[0]) throw a[1];
          return a[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (e = { next: t(0), throw: t(1), return: t(2) }),
      'function' == typeof Symbol &&
        (e[Symbol.iterator] = function() {
          return this;
        }),
      e
    );
    function t(t) {
      return function(e) {
        return (function(t) {
          if (i) throw new TypeError('Generator is already executing.');
          for (; s; )
            try {
              if (
                ((i = 1),
                o &&
                  (a =
                    2 & t[0]
                      ? o.return
                      : t[0]
                      ? o.throw || ((a = o.return) && a.call(o), 0)
                      : o.next) &&
                  !(a = a.call(o, t[1])).done)
              )
                return a;
              switch (((o = 0), a && (t = [2 & t[0], a.value]), t[0])) {
                case 0:
                case 1:
                  a = t;
                  break;
                case 4:
                  return s.label++, { value: t[1], done: !1 };
                case 5:
                  s.label++, (o = t[1]), (t = [0]);
                  continue;
                case 7:
                  (t = s.ops.pop()), s.trys.pop();
                  continue;
                default:
                  if (
                    !(a = 0 < (a = s.trys).length && a[a.length - 1]) &&
                    (6 === t[0] || 2 === t[0])
                  ) {
                    s = 0;
                    continue;
                  }
                  if (3 === t[0] && (!a || (t[1] > a[0] && t[1] < a[3]))) {
                    s.label = t[1];
                    break;
                  }
                  if (6 === t[0] && s.label < a[1]) {
                    (s.label = a[1]), (a = t);
                    break;
                  }
                  if (a && s.label < a[2]) {
                    (s.label = a[2]), s.ops.push(t);
                    break;
                  }
                  a[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }
              t = n.call(r, s);
            } catch (e) {
              (t = [6, e]), (o = 0);
            } finally {
              i = a = 0;
            }
          if (5 & t[0]) throw t[1];
          return { value: t[0] ? t[1] : void 0, done: !0 };
        })([t, e]);
      };
    }
  }
  function d(e) {
    var t = 'function' == typeof Symbol && e[Symbol.iterator],
      r = 0;
    return t
      ? t.call(e)
      : {
          next: function() {
            return (
              e && r >= e.length && (e = void 0),
              { value: e && e[r++], done: !e }
            );
          },
        };
  }
  function p(e, t) {
    var r = 'function' == typeof Symbol && e[Symbol.iterator];
    if (!r) return e;
    var n,
      i,
      o = r.call(e),
      a = [];
    try {
      for (; (void 0 === t || 0 < t--) && !(n = o.next()).done; )
        a.push(n.value);
    } catch (e) {
      i = { error: e };
    } finally {
      try {
        n && !n.done && (r = o.return) && r.call(o);
      } finally {
        if (i) throw i.error;
      }
    }
    return a;
  }
  function v(e, t) {
    if (!(t instanceof Object)) return t;
    switch (t.constructor) {
      case Date:
        return new Date(t.getTime());
      case Object:
        void 0 === e && (e = {});
        break;
      case Array:
        e = [];
        break;
      default:
        return t;
    }
    for (var r in t) t.hasOwnProperty(r) && (e[r] = v(e[r], t[r]));
    return e;
  }
  var i =
    ((t.prototype.wrapCallback = function(r) {
      var n = this;
      return function(e, t) {
        e ? n.reject(e) : n.resolve(t),
          'function' == typeof r &&
            (n.promise.catch(function() {}), 1 === r.length ? r(e) : r(e, t));
      };
    }),
    t);
  function t() {
    var r = this;
    (this.reject = function() {}),
      (this.resolve = function() {}),
      (this.promise = new Promise(function(e, t) {
        (r.resolve = e), (r.reject = t);
      }));
  }
  var n,
    o,
    s,
    f =
      ((s = Error),
      r((n = l), (o = s)),
      void (n.prototype =
        null === o ? Object.create(o) : ((c.prototype = o.prototype), new c())),
      l);
  function c() {
    this.constructor = n;
  }
  function l(e, t) {
    var r = s.call(this, t) || this;
    return (
      (r.code = e),
      (r.name = 'FirebaseError'),
      Object.setPrototypeOf(r, l.prototype),
      Error.captureStackTrace && Error.captureStackTrace(r, u.prototype.create),
      r
    );
  }
  var u =
    ((h.prototype.create = function(e) {
      for (var t = [], r = 1; r < arguments.length; r++)
        t[r - 1] = arguments[r];
      for (
        var n = t[0] || {},
          i = this.service + '/' + e,
          o = this.errors[e],
          a = o
            ? (function(e, n) {
                return e.replace(m, function(e, t) {
                  var r = n[t];
                  return null != r ? r.toString() : '<' + t + '?>';
                });
              })(o, n)
            : 'Error',
          s = this.serviceName + ': ' + a + ' (' + i + ').',
          c = new f(i, s),
          l = 0,
          p = Object.keys(n);
        l < p.length;
        l++
      ) {
        var u = p[l];
        '_' !== u.slice(-1) &&
          (u in c &&
            console.warn(
              'Overwriting FirebaseError base field "' +
                u +
                '" can cause unexpected behavior.',
            ),
          (c[u] = n[u]));
      }
      return c;
    }),
    h);
  function h(e, t, r) {
    (this.service = e), (this.serviceName = t), (this.errors = r);
  }
  var m = /\{\$([^}]+)}/g;
  function y(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function b(e, t) {
    var r = new g(e, t);
    return r.subscribe.bind(r);
  }
  var g =
    ((w.prototype.next = function(t) {
      this.forEachObserver(function(e) {
        e.next(t);
      });
    }),
    (w.prototype.error = function(t) {
      this.forEachObserver(function(e) {
        e.error(t);
      }),
        this.close(t);
    }),
    (w.prototype.complete = function() {
      this.forEachObserver(function(e) {
        e.complete();
      }),
        this.close();
    }),
    (w.prototype.subscribe = function(e, t, r) {
      var n,
        i = this;
      if (void 0 === e && void 0 === t && void 0 === r)
        throw new Error('Missing Observer.');
      void 0 ===
        (n = (function(e, t) {
          if ('object' != typeof e || null === e) return !1;
          for (var r = 0, n = t; r < n.length; r++) {
            var i = n[r];
            if (i in e && 'function' == typeof e[i]) return !0;
          }
          return !1;
        })(e, ['next', 'error', 'complete'])
          ? e
          : { next: e, error: t, complete: r }).next && (n.next = O),
        void 0 === n.error && (n.error = O),
        void 0 === n.complete && (n.complete = O);
      var o = this.unsubscribeOne.bind(this, this.observers.length);
      return (
        this.finalized &&
          this.task.then(function() {
            try {
              i.finalError ? n.error(i.finalError) : n.complete();
            } catch (e) {}
          }),
        this.observers.push(n),
        o
      );
    }),
    (w.prototype.unsubscribeOne = function(e) {
      void 0 !== this.observers &&
        void 0 !== this.observers[e] &&
        (delete this.observers[e],
        (this.observerCount -= 1),
        0 === this.observerCount &&
          void 0 !== this.onNoObservers &&
          this.onNoObservers(this));
    }),
    (w.prototype.forEachObserver = function(e) {
      if (!this.finalized)
        for (var t = 0; t < this.observers.length; t++) this.sendOne(t, e);
    }),
    (w.prototype.sendOne = function(e, t) {
      var r = this;
      this.task.then(function() {
        if (void 0 !== r.observers && void 0 !== r.observers[e])
          try {
            t(r.observers[e]);
          } catch (e) {
            'undefined' != typeof console && console.error && console.error(e);
          }
      });
    }),
    (w.prototype.close = function(e) {
      var t = this;
      this.finalized ||
        ((this.finalized = !0),
        void 0 !== e && (this.finalError = e),
        this.task.then(function() {
          (t.observers = void 0), (t.onNoObservers = void 0);
        }));
    }),
    w);
  function w(e, t) {
    var r = this;
    (this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = t),
      this.task
        .then(function() {
          e(r);
        })
        .catch(function(e) {
          r.error(e);
        });
  }
  function O() {}
  var E =
    ((I.prototype.setInstantiationMode = function(e) {
      return (this.instantiationMode = e), this;
    }),
    (I.prototype.setMultipleInstances = function(e) {
      return (this.multipleInstances = e), this;
    }),
    (I.prototype.setServiceProps = function(e) {
      return (this.serviceProps = e), this;
    }),
    I);
  function I(e, t, r) {
    (this.name = e),
      (this.instanceFactory = t),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = 'LAZY');
  }
  var _ = '[DEFAULT]',
    N =
      ((P.prototype.get = function(e) {
        void 0 === e && (e = _);
        var t = this.normalizeInstanceIdentifier(e);
        if (!this.instancesDeferred.has(t)) {
          var r = new i();
          this.instancesDeferred.set(t, r);
          try {
            var n = this.getOrInitializeService(t);
            n && r.resolve(n);
          } catch (e) {}
        }
        return this.instancesDeferred.get(t).promise;
      }),
      (P.prototype.getImmediate = function(e) {
        var t = a({ identifier: _, optional: !1 }, e),
          r = t.identifier,
          n = t.optional,
          i = this.normalizeInstanceIdentifier(r);
        try {
          var o = this.getOrInitializeService(i);
          if (o) return o;
          if (n) return null;
          throw Error('Service ' + this.name + ' is not available');
        } catch (e) {
          if (n) return null;
          throw e;
        }
      }),
      (P.prototype.getComponent = function() {
        return this.component;
      }),
      (P.prototype.setComponent = function(e) {
        var t, r;
        if (e.name !== this.name)
          throw Error(
            'Mismatching Component ' +
              e.name +
              ' for Provider ' +
              this.name +
              '.',
          );
        if (this.component)
          throw Error(
            'Component for ' + this.name + ' has already been provided',
          );
        if (
          (function(e) {
            return 'EAGER' === e.instantiationMode;
          })((this.component = e))
        )
          try {
            this.getOrInitializeService(_);
          } catch (e) {}
        try {
          for (
            var n = d(this.instancesDeferred.entries()), i = n.next();
            !i.done;
            i = n.next()
          ) {
            var o = p(i.value, 2),
              a = o[0],
              s = o[1],
              c = this.normalizeInstanceIdentifier(a);
            try {
              var l = this.getOrInitializeService(c);
              s.resolve(l);
            } catch (e) {}
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            i && !i.done && (r = n.return) && r.call(n);
          } finally {
            if (t) throw t.error;
          }
        }
      }),
      (P.prototype.clearInstance = function(e) {
        void 0 === e && (e = _),
          this.instancesDeferred.delete(e),
          this.instances.delete(e);
      }),
      (P.prototype.delete = function() {
        return (function(o, a, s, c) {
          return new (s = s || Promise)(function(e, t) {
            function r(e) {
              try {
                i(c.next(e));
              } catch (e) {
                t(e);
              }
            }
            function n(e) {
              try {
                i(c.throw(e));
              } catch (e) {
                t(e);
              }
            }
            function i(t) {
              t.done
                ? e(t.value)
                : new s(function(e) {
                    e(t.value);
                  }).then(r, n);
            }
            i((c = c.apply(o, a || [])).next());
          });
        })(this, void 0, void 0, function() {
          var t;
          return e(this, function(e) {
            switch (e.label) {
              case 0:
                return (
                  (t = Array.from(this.instances.values())),
                  [
                    4,
                    Promise.all(
                      t
                        .filter(function(e) {
                          return 'INTERNAL' in e;
                        })
                        .map(function(e) {
                          return e.INTERNAL.delete();
                        }),
                    ),
                  ]
                );
              case 1:
                return e.sent(), [2];
            }
          });
        });
      }),
      (P.prototype.isComponentSet = function() {
        return null != this.component;
      }),
      (P.prototype.getOrInitializeService = function(e) {
        var t = this.instances.get(e);
        return (
          !t &&
            this.component &&
            ((t = this.component.instanceFactory(
              this.container,
              (function(e) {
                return e === _ ? void 0 : e;
              })(e),
            )),
            this.instances.set(e, t)),
          t || null
        );
      }),
      (P.prototype.normalizeInstanceIdentifier = function(e) {
        return this.component ? (this.component.multipleInstances ? e : _) : e;
      }),
      P);
  function P(e, t) {
    (this.name = e),
      (this.container = t),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map());
  }
  var S,
    A,
    C =
      ((R.prototype.addComponent = function(e) {
        var t = this.getProvider(e.name);
        if (t.isComponentSet())
          throw new Error(
            'Component ' +
              e.name +
              ' has already been registered with ' +
              this.name,
          );
        t.setComponent(e);
      }),
      (R.prototype.addOrOverwriteComponent = function(e) {
        this.getProvider(e.name).isComponentSet() &&
          this.providers.delete(e.name),
          this.addComponent(e);
      }),
      (R.prototype.getProvider = function(e) {
        if (this.providers.has(e)) return this.providers.get(e);
        var t = new N(e, this);
        return this.providers.set(e, t), t;
      }),
      (R.prototype.getProviders = function() {
        return Array.from(this.providers.values());
      }),
      R);
  function R(e) {
    (this.name = e), (this.providers = new Map());
  }
  function j() {
    for (var e = 0, t = 0, r = arguments.length; t < r; t++)
      e += arguments[t].length;
    var n = Array(e),
      i = 0;
    for (t = 0; t < r; t++)
      for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++)
        n[i] = o[a];
    return n;
  }
  ((A = S = S || {})[(A.DEBUG = 0)] = 'DEBUG'),
    (A[(A.VERBOSE = 1)] = 'VERBOSE'),
    (A[(A.INFO = 2)] = 'INFO'),
    (A[(A.WARN = 3)] = 'WARN'),
    (A[(A.ERROR = 4)] = 'ERROR'),
    (A[(A.SILENT = 5)] = 'SILENT');
  function k(e, t) {
    for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
    if (!(t < e.logLevel)) {
      var i = new Date().toISOString();
      switch (t) {
        case S.DEBUG:
        case S.VERBOSE:
          console.log.apply(console, j(['[' + i + ']  ' + e.name + ':'], r));
          break;
        case S.INFO:
          console.info.apply(console, j(['[' + i + ']  ' + e.name + ':'], r));
          break;
        case S.WARN:
          console.warn.apply(console, j(['[' + i + ']  ' + e.name + ':'], r));
          break;
        case S.ERROR:
          console.error.apply(console, j(['[' + i + ']  ' + e.name + ':'], r));
          break;
        default:
          throw new Error(
            'Attempted to log a message with an invalid logType (value: ' +
              t +
              ')',
          );
      }
    }
  }
  var D,
    F = S.INFO,
    x =
      (Object.defineProperty(L.prototype, 'logLevel', {
        get: function() {
          return this._logLevel;
        },
        set: function(e) {
          if (!(e in S))
            throw new TypeError('Invalid value assigned to `logLevel`');
          this._logLevel = e;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(L.prototype, 'logHandler', {
        get: function() {
          return this._logHandler;
        },
        set: function(e) {
          if ('function' != typeof e)
            throw new TypeError(
              'Value assigned to `logHandler` must be a function',
            );
          this._logHandler = e;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (L.prototype.debug = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._logHandler.apply(this, j([this, S.DEBUG], e));
      }),
      (L.prototype.log = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._logHandler.apply(this, j([this, S.VERBOSE], e));
      }),
      (L.prototype.info = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._logHandler.apply(this, j([this, S.INFO], e));
      }),
      (L.prototype.warn = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._logHandler.apply(this, j([this, S.WARN], e));
      }),
      (L.prototype.error = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this._logHandler.apply(this, j([this, S.ERROR], e));
      }),
      L);
  function L(e) {
    (this.name = e), (this._logLevel = F), (this._logHandler = k);
  }
  var T,
    z =
      (((D = {})['no-app'] =
        "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),
      (D['bad-app-name'] = "Illegal App name: '{$appName}"),
      (D['duplicate-app'] = "Firebase App named '{$appName}' already exists"),
      (D['app-deleted'] = "Firebase App named '{$appName}' already deleted"),
      (D['invalid-app-argument'] =
        'firebase.{$appName}() takes either no argument or a Firebase App instance.'),
      D),
    V = new u('app', 'Firebase', z),
    B = '@firebase/app',
    M = '[DEFAULT]',
    U =
      (((T = {})[B] = 'fire-core'),
      (T['@firebase/analytics'] = 'fire-analytics'),
      (T['@firebase/auth'] = 'fire-auth'),
      (T['@firebase/database'] = 'fire-rtdb'),
      (T['@firebase/functions'] = 'fire-fn'),
      (T['@firebase/installations'] = 'fire-iid'),
      (T['@firebase/messaging'] = 'fire-fcm'),
      (T['@firebase/performance'] = 'fire-perf'),
      (T['@firebase/remote-config'] = 'fire-rc'),
      (T['@firebase/storage'] = 'fire-gcs'),
      (T['@firebase/firestore'] = 'fire-fst'),
      (T['fire-js'] = 'fire-js'),
      (T['firebase-wrapper'] = 'fire-js-all'),
      T),
    H = new x('@firebase/app'),
    W =
      (Object.defineProperty(G.prototype, 'automaticDataCollectionEnabled', {
        get: function() {
          return this.checkDestroyed_(), this.automaticDataCollectionEnabled_;
        },
        set: function(e) {
          this.checkDestroyed_(), (this.automaticDataCollectionEnabled_ = e);
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(G.prototype, 'name', {
        get: function() {
          return this.checkDestroyed_(), this.name_;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(G.prototype, 'options', {
        get: function() {
          return this.checkDestroyed_(), this.options_;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (G.prototype.delete = function() {
        var t = this;
        return new Promise(function(e) {
          t.checkDestroyed_(), e();
        })
          .then(function() {
            return (
              t.firebase_.INTERNAL.removeApp(t.name_),
              Promise.all(
                t.container.getProviders().map(function(e) {
                  return e.delete();
                }),
              )
            );
          })
          .then(function() {
            t.isDeleted_ = !0;
          });
      }),
      (G.prototype._getService = function(e, t) {
        return (
          void 0 === t && (t = M),
          this.checkDestroyed_(),
          this.container.getProvider(e).getImmediate({ identifier: t })
        );
      }),
      (G.prototype._removeServiceInstance = function(e, t) {
        void 0 === t && (t = M), this.container.getProvider(e).clearInstance(t);
      }),
      (G.prototype._addComponent = function(t) {
        try {
          this.container.addComponent(t);
        } catch (e) {
          H.debug(
            'Component ' +
              t.name +
              ' failed to register with FirebaseApp ' +
              this.name,
            e,
          );
        }
      }),
      (G.prototype._addOrOverwriteComponent = function(e) {
        this.container.addOrOverwriteComponent(e);
      }),
      (G.prototype.checkDestroyed_ = function() {
        if (this.isDeleted_)
          throw V.create('app-deleted', { appName: this.name_ });
      }),
      G);
  function G(e, t, r) {
    var n,
      i,
      o = this;
    (this.firebase_ = r),
      (this.isDeleted_ = !1),
      (this.name_ = t.name),
      (this.automaticDataCollectionEnabled_ =
        t.automaticDataCollectionEnabled || !1),
      (this.options_ = (function(e) {
        return v(void 0, e);
      })(e)),
      (this.container = new C(t.name)),
      this._addComponent(
        new E(
          'app',
          function() {
            return o;
          },
          'PUBLIC',
        ),
      );
    try {
      for (
        var a = d(this.firebase_.INTERNAL.components.values()), s = a.next();
        !s.done;
        s = a.next()
      ) {
        var c = s.value;
        this._addComponent(c);
      }
    } catch (e) {
      n = { error: e };
    } finally {
      try {
        s && !s.done && (i = a.return) && i.call(a);
      } finally {
        if (n) throw n.error;
      }
    }
  }
  (W.prototype.name && W.prototype.options) ||
    W.prototype.delete ||
    console.log('dc');
  var $ = '7.6.2';
  function Y(c) {
    var l = {},
      p = new Map(),
      u = {
        __esModule: !0,
        initializeApp: function(e, t) {
          void 0 === t && (t = {});
          if ('object' != typeof t || null === t) {
            t = { name: t };
          }
          var r = t;
          void 0 === r.name && (r.name = M);
          var n = r.name;
          if ('string' != typeof n || !n)
            throw V.create('bad-app-name', { appName: String(n) });
          if (y(l, n)) throw V.create('duplicate-app', { appName: n });
          var i = new c(e, r, u);
          return (l[n] = i);
        },
        app: f,
        registerVersion: function(e, t, r) {
          var n,
            i = null !== (n = U[e]) && void 0 !== n ? n : e;
          r && (i += '-' + r);
          var o = i.match(/\s|\//),
            a = t.match(/\s|\//);
          if (o || a) {
            var s = [
              'Unable to register library "' +
                i +
                '" with version "' +
                t +
                '":',
            ];
            return (
              o &&
                s.push(
                  'library name "' +
                    i +
                    '" contains illegal characters (whitespace or "/")',
                ),
              o && a && s.push('and'),
              a &&
                s.push(
                  'version name "' +
                    t +
                    '" contains illegal characters (whitespace or "/")',
                ),
              void H.warn(s.join(' '))
            );
          }
          h(
            new E(
              i + '-version',
              function() {
                return { library: i, version: t };
              },
              'VERSION',
            ),
          );
        },
        apps: null,
        SDK_VERSION: $,
        INTERNAL: {
          registerComponent: h,
          removeApp: function(e) {
            delete l[e];
          },
          components: p,
          useAsService: function(e, t) {
            return 'serverAuth' !== t ? t : null;
          },
        },
      };
    function f(e) {
      if (!y(l, (e = e || M))) throw V.create('no-app', { appName: e });
      return l[e];
    }
    function h(r) {
      var t,
        e,
        n = r.name;
      if (p.has(n))
        return (
          H.debug(
            'There were multiple attempts to register component ' + n + '.',
          ),
          'PUBLIC' === r.type ? u[n] : null
        );
      if ((p.set(n, r), 'PUBLIC' === r.type)) {
        var i = function(e) {
          if ((void 0 === e && (e = f()), 'function' != typeof e[n]))
            throw V.create('invalid-app-argument', { appName: n });
          return e[n]();
        };
        void 0 !== r.serviceProps && v(i, r.serviceProps),
          (u[n] = i),
          (c.prototype[n] = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            return this._getService
              .bind(this, n)
              .apply(this, r.multipleInstances ? e : []);
          });
      }
      try {
        for (var o = d(Object.keys(l)), a = o.next(); !a.done; a = o.next()) {
          var s = a.value;
          l[s]._addComponent(r);
        }
      } catch (e) {
        t = { error: e };
      } finally {
        try {
          a && !a.done && (e = o.return) && e.call(o);
        } finally {
          if (t) throw t.error;
        }
      }
      return 'PUBLIC' === r.type ? u[n] : null;
    }
    return (
      (u.default = u),
      Object.defineProperty(u, 'apps', {
        get: function() {
          return Object.keys(l).map(function(e) {
            return l[e];
          });
        },
      }),
      (f.App = c),
      u
    );
  }
  var K = (function e() {
      var t = Y(W);
      return (
        (t.INTERNAL = a(a({}, t.INTERNAL), {
          createFirebaseNamespace: e,
          extendNamespace: function(e) {
            v(t, e);
          },
          createSubscribe: b,
          ErrorFactory: u,
          deepExtend: v,
        })),
        t
      );
    })(),
    Z =
      ((q.prototype.getPlatformInfoString = function() {
        return this.container
          .getProviders()
          .map(function(e) {
            if (
              (function(e) {
                var t,
                  r = e.getComponent();
                return (
                  'VERSION' ===
                  (null === (t = r) || void 0 === t ? void 0 : t.type)
                );
              })(e)
            ) {
              var t = e.getImmediate();
              return t.library + '/' + t.version;
            }
            return null;
          })
          .filter(function(e) {
            return e;
          })
          .join(' ');
      }),
      q);
  function q(e) {
    this.container = e;
  }
  if (
    'object' == typeof self &&
    self.self === self &&
    void 0 !== self.firebase
  ) {
    H.warn(
      '\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ',
    );
    var J = self.firebase.SDK_VERSION;
    J &&
      0 <= J.indexOf('LITE') &&
      H.warn(
        '\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ',
      );
  }
  var Q = K.initializeApp;
  K.initializeApp = function() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return (
      (function() {
        try {
          return (
            '[object process]' ===
            Object.prototype.toString.call(global.process)
          );
        } catch (e) {
          return !1;
        }
      })() &&
        H.warn(
          '\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      ',
        ),
      Q.apply(void 0, e)
    );
  };
  var X,
    ee,
    te = K;
  (X = te).INTERNAL.registerComponent(
    new E(
      'platform-logger',
      function(e) {
        return new Z(e);
      },
      'PRIVATE',
    ),
  ),
    X.registerVersion(B, '0.5.1', ee),
    X.registerVersion('fire-js', '');
  return te.registerVersion('firebase', '7.6.2', 'app'), te;
});

!(function(t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(require('@firebase/app'))
    : 'function' == typeof define && define.amd
    ? define(['@firebase/app'], e)
    : e((t = t || self).firebase);
})(this, function(ud) {
  'use strict';
  try {
    (function() {
      ud =
        ud && Object.prototype.hasOwnProperty.call(ud, 'default')
          ? ud.default
          : ud;
      var t,
        p,
        e,
        r = function(t, e) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(t, e) {
                t.__proto__ = e;
              }) ||
            function(t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        };
      function n(t, e) {
        function n() {
          this.constructor = t;
        }
        r(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      }
      function y(t, s, u, a) {
        return new (u = u || Promise)(function(n, e) {
          function r(t) {
            try {
              o(a.next(t));
            } catch (t) {
              e(t);
            }
          }
          function i(t) {
            try {
              o(a.throw(t));
            } catch (t) {
              e(t);
            }
          }
          function o(t) {
            var e;
            t.done
              ? n(t.value)
              : ((e = t.value) instanceof u
                  ? e
                  : new u(function(t) {
                      t(e);
                    })
                ).then(r, i);
          }
          o((a = a.apply(t, s || [])).next());
        });
      }
      function v(n, r) {
        var i,
          o,
          s,
          t,
          u = {
            label: 0,
            sent: function() {
              if (1 & s[0]) throw s[1];
              return s[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (t = { next: e(0), throw: e(1), return: e(2) }),
          'function' == typeof Symbol &&
            (t[Symbol.iterator] = function() {
              return this;
            }),
          t
        );
        function e(e) {
          return function(t) {
            return (function(e) {
              if (i) throw new TypeError('Generator is already executing.');
              for (; u; )
                try {
                  if (
                    ((i = 1),
                    o &&
                      (s =
                        2 & e[0]
                          ? o.return
                          : e[0]
                          ? o.throw || ((s = o.return) && s.call(o), 0)
                          : o.next) &&
                      !(s = s.call(o, e[1])).done)
                  )
                    return s;
                  switch (((o = 0), s && (e = [2 & e[0], s.value]), e[0])) {
                    case 0:
                    case 1:
                      s = e;
                      break;
                    case 4:
                      return u.label++, { value: e[1], done: !1 };
                    case 5:
                      u.label++, (o = e[1]), (e = [0]);
                      continue;
                    case 7:
                      (e = u.ops.pop()), u.trys.pop();
                      continue;
                    default:
                      if (
                        !(s = 0 < (s = u.trys).length && s[s.length - 1]) &&
                        (6 === e[0] || 2 === e[0])
                      ) {
                        u = 0;
                        continue;
                      }
                      if (3 === e[0] && (!s || (e[1] > s[0] && e[1] < s[3]))) {
                        u.label = e[1];
                        break;
                      }
                      if (6 === e[0] && u.label < s[1]) {
                        (u.label = s[1]), (s = e);
                        break;
                      }
                      if (s && u.label < s[2]) {
                        (u.label = s[2]), u.ops.push(e);
                        break;
                      }
                      s[2] && u.ops.pop(), u.trys.pop();
                      continue;
                  }
                  e = r.call(n, u);
                } catch (t) {
                  (e = [6, t]), (o = 0);
                } finally {
                  i = s = 0;
                }
              if (5 & e[0]) throw e[1];
              return { value: e[0] ? e[1] : void 0, done: !0 };
            })([e, t]);
          };
        }
      }
      function d() {
        for (var t = 0, e = 0, n = arguments.length; e < n; e++)
          t += arguments[e].length;
        var r = Array(t),
          i = 0;
        for (e = 0; e < n; e++)
          for (var o = arguments[e], s = 0, u = o.length; s < u; s++, i++)
            r[i] = o[s];
        return r;
      }
      function s() {
        for (var t = 0, e = 0, n = arguments.length; e < n; e++)
          t += arguments[e].length;
        var r = Array(t),
          i = 0;
        for (e = 0; e < n; e++)
          for (var o = arguments[e], s = 0, u = o.length; s < u; s++, i++)
            r[i] = o[s];
        return r;
      }
      ((e = p = p || {})[(e.DEBUG = 0)] = 'DEBUG'),
        (e[(e.VERBOSE = 1)] = 'VERBOSE'),
        (e[(e.INFO = 2)] = 'INFO'),
        (e[(e.WARN = 3)] = 'WARN'),
        (e[(e.ERROR = 4)] = 'ERROR'),
        (e[(e.SILENT = 5)] = 'SILENT');
      function i(t, e) {
        for (var n = [], r = 2; r < arguments.length; r++)
          n[r - 2] = arguments[r];
        if (!(e < t.logLevel)) {
          var i = new Date().toISOString(),
            o = a[e];
          if (!o)
            throw new Error(
              'Attempted to log a message with an invalid logType (value: ' +
                e +
                ')',
            );
          console[o].apply(console, s(['[' + i + ']  ' + t.name + ':'], n));
        }
      }
      var o = {
          debug: p.DEBUG,
          verbose: p.VERBOSE,
          info: p.INFO,
          warn: p.WARN,
          error: p.ERROR,
          silent: p.SILENT,
        },
        u = p.INFO,
        a =
          (((t = {})[p.DEBUG] = 'log'),
          (t[p.VERBOSE] = 'log'),
          (t[p.INFO] = 'info'),
          (t[p.WARN] = 'warn'),
          (t[p.ERROR] = 'error'),
          t),
        h =
          (Object.defineProperty(c.prototype, 'logLevel', {
            get: function() {
              return this._logLevel;
            },
            set: function(t) {
              if (!(t in p))
                throw new TypeError(
                  'Invalid value "' + t + '" assigned to `logLevel`',
                );
              this._logLevel = t;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (c.prototype.setLogLevel = function(t) {
            this._logLevel = 'string' == typeof t ? o[t] : t;
          }),
          Object.defineProperty(c.prototype, 'logHandler', {
            get: function() {
              return this._logHandler;
            },
            set: function(t) {
              if ('function' != typeof t)
                throw new TypeError(
                  'Value assigned to `logHandler` must be a function',
                );
              this._logHandler = t;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(c.prototype, 'userLogHandler', {
            get: function() {
              return this._userLogHandler;
            },
            set: function(t) {
              this._userLogHandler = t;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (c.prototype.debug = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._userLogHandler &&
              this._userLogHandler.apply(this, s([this, p.DEBUG], t)),
              this._logHandler.apply(this, s([this, p.DEBUG], t));
          }),
          (c.prototype.log = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._userLogHandler &&
              this._userLogHandler.apply(this, s([this, p.VERBOSE], t)),
              this._logHandler.apply(this, s([this, p.VERBOSE], t));
          }),
          (c.prototype.info = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._userLogHandler &&
              this._userLogHandler.apply(this, s([this, p.INFO], t)),
              this._logHandler.apply(this, s([this, p.INFO], t));
          }),
          (c.prototype.warn = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._userLogHandler &&
              this._userLogHandler.apply(this, s([this, p.WARN], t)),
              this._logHandler.apply(this, s([this, p.WARN], t));
          }),
          (c.prototype.error = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this._userLogHandler &&
              this._userLogHandler.apply(this, s([this, p.ERROR], t)),
              this._logHandler.apply(this, s([this, p.ERROR], t));
          }),
          c);
      function c(t) {
        (this.name = t),
          (this._logLevel = u),
          (this._logHandler = i),
          (this._userLogHandler = null);
      }
      function g() {
        return 'undefined' != typeof navigator &&
          'string' == typeof navigator.userAgent
          ? navigator.userAgent
          : '';
      }
      var f,
        m = (n(l, (f = Error)), l);
      function l(t, e) {
        var n = f.call(this, e) || this;
        return (
          (n.code = t),
          (n.name = 'FirebaseError'),
          Object.setPrototypeOf(n, l.prototype),
          Error.captureStackTrace &&
            Error.captureStackTrace(n, w.prototype.create),
          n
        );
      }
      var w =
        ((b.prototype.create = function(t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n];
          for (
            var r,
              i = e[0] || {},
              o = this.service + '/' + t,
              s = this.errors[t],
              u = s
                ? ((r = i),
                  s.replace(E, function(t, e) {
                    var n = r[e];
                    return null != n ? String(n) : '<' + e + '?>';
                  }))
                : 'Error',
              a = this.serviceName + ': ' + u + ' (' + o + ').',
              h = new m(o, a),
              c = 0,
              f = Object.keys(i);
            c < f.length;
            c++
          ) {
            var l = f[c];
            '_' !== l.slice(-1) &&
              (l in h &&
                console.warn(
                  'Overwriting FirebaseError base field "' +
                    l +
                    '" can cause unexpected behavior.',
                ),
              (h[l] = i[l]));
          }
          return h;
        }),
        b);
      function b(t, e, n) {
        (this.service = t), (this.serviceName = e), (this.errors = n);
      }
      var E = /\{\$([^}]+)}/g;
      function I(t) {
        var e = 'function' == typeof Symbol && Symbol.iterator,
          n = e && t[e],
          r = 0;
        if (n) return n.call(t);
        if (t && 'number' == typeof t.length)
          return {
            next: function() {
              return (
                t && r >= t.length && (t = void 0),
                { value: t && t[r++], done: !t }
              );
            },
          };
        throw new TypeError(
          e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
        );
      }
      var T,
        _ =
          'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof window
            ? window
            : 'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
            ? self
            : {},
        N = N || {},
        A = _ || self;
      function S() {}
      function D(t) {
        var e = typeof t;
        if ('object' == e) {
          if (!t) return 'null';
          if (t instanceof Array) return 'array';
          if (t instanceof Object) return e;
          var n = Object.prototype.toString.call(t);
          if ('[object Window]' == n) return 'object';
          if (
            '[object Array]' == n ||
            ('number' == typeof t.length &&
              void 0 !== t.splice &&
              void 0 !== t.propertyIsEnumerable &&
              !t.propertyIsEnumerable('splice'))
          )
            return 'array';
          if (
            '[object Function]' == n ||
            (void 0 !== t.call &&
              void 0 !== t.propertyIsEnumerable &&
              !t.propertyIsEnumerable('call'))
          )
            return 'function';
        } else if ('function' == e && void 0 === t.call) return 'object';
        return e;
      }
      function O(t) {
        var e = D(t);
        return 'array' == e || ('object' == e && 'number' == typeof t.length);
      }
      function x(t) {
        var e = typeof t;
        return ('object' == e && null != t) || 'function' == e;
      }
      var P = 'closure_uid_' + ((1e9 * Math.random()) >>> 0),
        R = 0;
      function k(t, e, n) {
        return t.call.apply(t.bind, arguments);
      }
      function L(e, n, t) {
        if (!e) throw Error();
        if (2 < arguments.length) {
          var r = Array.prototype.slice.call(arguments, 2);
          return function() {
            var t = Array.prototype.slice.call(arguments);
            return Array.prototype.unshift.apply(t, r), e.apply(n, t);
          };
        }
        return function() {
          return e.apply(n, arguments);
        };
      }
      function U(t, e, n) {
        return (U =
          Function.prototype.bind &&
          -1 != Function.prototype.bind.toString().indexOf('native code')
            ? k
            : L).apply(null, arguments);
      }
      function C(e, t) {
        var n = Array.prototype.slice.call(arguments, 1);
        return function() {
          var t = n.slice();
          return t.push.apply(t, arguments), e.apply(this, t);
        };
      }
      var V =
        Date.now ||
        function() {
          return +new Date();
        };
      function M(t, e) {
        function n() {}
        (n.prototype = e.prototype),
          (t.M = e.prototype),
          (t.prototype = new n()),
          (t.prototype.constructor = t);
      }
      function F() {
        (this.j = this.j), (this.i = this.i);
      }
      (F.prototype.j = !1),
        (F.prototype.da = function() {
          if (!this.j && ((this.j = !0), this.C(), 0))
            (t = this),
              (Object.prototype.hasOwnProperty.call(t, P) && t[P]) ||
                (t[P] = ++R);
          var t;
        }),
        (F.prototype.C = function() {
          if (this.i) for (; this.i.length; ) this.i.shift()();
        });
      var q = Array.prototype.indexOf
          ? function(t, e) {
              return Array.prototype.indexOf.call(t, e, void 0);
            }
          : function(t, e) {
              if ('string' == typeof t)
                return 'string' != typeof e || 1 != e.length
                  ? -1
                  : t.indexOf(e, 0);
              for (var n = 0; n < t.length; n++)
                if (n in t && t[n] === e) return n;
              return -1;
            },
        j = Array.prototype.forEach
          ? function(t, e, n) {
              Array.prototype.forEach.call(t, e, n);
            }
          : function(t, e, n) {
              for (
                var r = t.length,
                  i = 'string' == typeof t ? t.split('') : t,
                  o = 0;
                o < r;
                o++
              )
                o in i && e.call(n, i[o], o, t);
            };
      function B(t) {
        return Array.prototype.concat.apply([], arguments);
      }
      function G(t) {
        var e = t.length;
        if (0 < e) {
          for (var n = Array(e), r = 0; r < e; r++) n[r] = t[r];
          return n;
        }
        return [];
      }
      function Q(t) {
        return /^[\s\xa0]*$/.test(t);
      }
      var z,
        H = String.prototype.trim
          ? function(t) {
              return t.trim();
            }
          : function(t) {
              return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1];
            };
      function W(t, e) {
        return -1 != t.indexOf(e);
      }
      function K(t, e) {
        return t < e ? -1 : e < t ? 1 : 0;
      }
      t: {
        var X = A.navigator;
        if (X) {
          var Y = X.userAgent;
          if (Y) {
            z = Y;
            break t;
          }
        }
        z = '';
      }
      function $(t, e, n) {
        for (var r in t) e.call(n, t[r], r, t);
      }
      function J(t) {
        var e = {};
        for (var n in t) e[n] = t[n];
        return e;
      }
      var Z = 'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
        ' ',
      );
      function tt(t, e) {
        for (var n, r, i = 1; i < arguments.length; i++) {
          for (n in (r = arguments[i])) t[n] = r[n];
          for (var o = 0; o < Z.length; o++)
            (n = Z[o]),
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
        }
      }
      function et(t) {
        return et[' '](t), t;
      }
      et[' '] = S;
      var nt,
        rt,
        it = W(z, 'Opera'),
        ot = W(z, 'Trident') || W(z, 'MSIE'),
        st = W(z, 'Edge'),
        ut = st || ot,
        at =
          W(z, 'Gecko') &&
          !(W(z.toLowerCase(), 'webkit') && !W(z, 'Edge')) &&
          !(W(z, 'Trident') || W(z, 'MSIE')) &&
          !W(z, 'Edge'),
        ht = W(z.toLowerCase(), 'webkit') && !W(z, 'Edge');
      function ct() {
        var t = A.document;
        return t ? t.documentMode : void 0;
      }
      t: {
        var ft = '',
          lt =
            ((rt = z),
            at
              ? /rv:([^\);]+)(\)|;)/.exec(rt)
              : st
              ? /Edge\/([\d\.]+)/.exec(rt)
              : ot
              ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(rt)
              : ht
              ? /WebKit\/(\S+)/.exec(rt)
              : it
              ? /(?:Version)[ \/]?(\S+)/.exec(rt)
              : void 0);
        if ((lt && (ft = lt ? lt[1] : ''), ot)) {
          var pt = ct();
          if (null != pt && pt > parseFloat(ft)) {
            nt = String(pt);
            break t;
          }
        }
        nt = ft;
      }
      var dt,
        yt = {};
      function vt(u) {
        return (
          (t = u),
          (e = function() {
            for (
              var t = 0,
                e = H(String(nt)).split('.'),
                n = H(String(u)).split('.'),
                r = Math.max(e.length, n.length),
                i = 0;
              0 == t && i < r;
              i++
            ) {
              var o = e[i] || '',
                s = n[i] || '';
              do {
                if (
                  ((o = /(\d*)(\D*)(.*)/.exec(o) || ['', '', '', '']),
                  (s = /(\d*)(\D*)(.*)/.exec(s) || ['', '', '', '']),
                  0 == o[0].length && 0 == s[0].length)
                )
                  break;
                (t =
                  K(
                    0 == o[1].length ? 0 : parseInt(o[1], 10),
                    0 == s[1].length ? 0 : parseInt(s[1], 10),
                  ) ||
                  K(0 == o[2].length, 0 == s[2].length) ||
                  K(o[2], s[2])),
                  (o = o[3]),
                  (s = s[3]);
              } while (0 == t);
            }
            return 0 <= t;
          }),
          (n = yt),
          Object.prototype.hasOwnProperty.call(n, t) ? n[t] : (n[t] = e(t))
        );
        var t, e, n;
      }
      if (A.document && ot) {
        var gt = ct();
        dt = gt || parseInt(nt, 10) || void 0;
      } else dt = void 0;
      var mt = dt,
        wt = !ot || 9 <= Number(mt),
        bt = ot && !vt('9'),
        Et = (function() {
          if (!A.addEventListener || !Object.defineProperty) return !1;
          var t = !1,
            e = Object.defineProperty({}, 'passive', {
              get: function() {
                t = !0;
              },
            });
          try {
            A.addEventListener('test', S, e),
              A.removeEventListener('test', S, e);
          } catch (t) {}
          return t;
        })();
      function It(t, e) {
        (this.type = t),
          (this.a = this.target = e),
          (this.defaultPrevented = !1);
      }
      function Tt(t, e) {
        if (
          (It.call(this, t ? t.type : ''),
          (this.relatedTarget = this.a = this.target = null),
          (this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0),
          (this.key = ''),
          (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
          (this.pointerId = 0),
          (this.pointerType = ''),
          (this.c = null),
          t)
        ) {
          var n = (this.type = t.type),
            r =
              t.changedTouches && t.changedTouches.length
                ? t.changedTouches[0]
                : null;
          if (
            ((this.target = t.target || t.srcElement),
            (this.a = e),
            (e = t.relatedTarget))
          ) {
            if (at) {
              t: {
                try {
                  et(e.nodeName);
                  var i = !0;
                  break t;
                } catch (t) {}
                i = !1;
              }
              i || (e = null);
            }
          } else
            'mouseover' == n
              ? (e = t.fromElement)
              : 'mouseout' == n && (e = t.toElement);
          (this.relatedTarget = e),
            r
              ? ((this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX),
                (this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY),
                (this.screenX = r.screenX || 0),
                (this.screenY = r.screenY || 0))
              : ((this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX),
                (this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY),
                (this.screenX = t.screenX || 0),
                (this.screenY = t.screenY || 0)),
            (this.button = t.button),
            (this.key = t.key || ''),
            (this.ctrlKey = t.ctrlKey),
            (this.altKey = t.altKey),
            (this.shiftKey = t.shiftKey),
            (this.metaKey = t.metaKey),
            (this.pointerId = t.pointerId || 0),
            (this.pointerType =
              'string' == typeof t.pointerType
                ? t.pointerType
                : _t[t.pointerType] || ''),
            (this.c = t).defaultPrevented && this.b();
        }
      }
      (It.prototype.b = function() {
        this.defaultPrevented = !0;
      }),
        M(Tt, It);
      var _t = { 2: 'touch', 3: 'pen', 4: 'mouse' };
      Tt.prototype.b = function() {
        Tt.M.b.call(this);
        var t = this.c;
        if (t.preventDefault) t.preventDefault();
        else if (((t.returnValue = !1), bt))
          try {
            (t.ctrlKey || (112 <= t.keyCode && t.keyCode <= 123)) &&
              (t.keyCode = -1);
          } catch (t) {}
      };
      var Nt = 'closure_listenable_' + ((1e6 * Math.random()) | 0),
        At = 0;
      function St(t, e, n, r, i) {
        (this.listener = t),
          (this.proxy = null),
          (this.src = e),
          (this.type = n),
          (this.capture = !!r),
          (this.aa = i),
          (this.key = ++At),
          (this.V = this.X = !1);
      }
      function Dt(t) {
        (t.V = !0),
          (t.listener = null),
          (t.proxy = null),
          (t.src = null),
          (t.aa = null);
      }
      function Ot(t) {
        (this.src = t), (this.a = {}), (this.b = 0);
      }
      function xt(t, e) {
        var n = e.type;
        if (n in t.a) {
          var r,
            i = t.a[n],
            o = q(i, e);
          (r = 0 <= o) && Array.prototype.splice.call(i, o, 1),
            r && (Dt(e), 0 == t.a[n].length && (delete t.a[n], t.b--));
        }
      }
      function Pt(t, e, n, r) {
        for (var i = 0; i < t.length; ++i) {
          var o = t[i];
          if (!o.V && o.listener == e && o.capture == !!n && o.aa == r)
            return i;
        }
        return -1;
      }
      Ot.prototype.add = function(t, e, n, r, i) {
        var o = t.toString();
        (t = this.a[o]) || ((t = this.a[o] = []), this.b++);
        var s = Pt(t, e, r, i);
        return (
          -1 < s
            ? ((e = t[s]), n || (e.X = !1))
            : (((e = new St(e, this.src, o, !!r, i)).X = n), t.push(e)),
          e
        );
      };
      var Rt = 'closure_lm_' + ((1e6 * Math.random()) | 0),
        kt = {};
      function Lt(t, e, n, r, i) {
        if (r && r.once)
          return (function t(e, n, r, i, o) {
            if (Array.isArray(n)) {
              for (var s = 0; s < n.length; s++) t(e, n[s], r, i, o);
              return null;
            }
            r = Bt(r);
            return e && e[Nt]
              ? e.sa(n, r, x(i) ? !!i.capture : !!i, o)
              : Ut(e, n, r, !0, i, o);
          })(t, e, n, r, i);
        if (Array.isArray(e)) {
          for (var o = 0; o < e.length; o++) Lt(t, e[o], n, r, i);
          return null;
        }
        return (
          (n = Bt(n)),
          t && t[Nt]
            ? t.ra(e, n, x(r) ? !!r.capture : !!r, i)
            : Ut(t, e, n, !1, r, i)
        );
      }
      function Ut(t, e, n, r, i, o) {
        if (!e) throw Error('Invalid event type');
        var s = x(i) ? !!i.capture : !!i;
        if (s && !wt) return null;
        var u,
          a,
          h = qt(t);
        if ((h || (t[Rt] = h = new Ot(t)), (n = h.add(e, n, r, s, o)).proxy))
          return n;
        if (
          ((u = Ft),
          (r = a = wt
            ? function(t) {
                return u.call(a.src, a.listener, t);
              }
            : function(t) {
                if (!(t = u.call(a.src, a.listener, t))) return t;
              }),
          ((n.proxy = r).src = t),
          (r.listener = n),
          t.addEventListener)
        )
          Et || (i = s),
            void 0 === i && (i = !1),
            t.addEventListener(e.toString(), r, i);
        else if (t.attachEvent) t.attachEvent(Vt(e.toString()), r);
        else {
          if (!t.addListener || !t.removeListener)
            throw Error('addEventListener and attachEvent are unavailable.');
          t.addListener(r);
        }
        return n;
      }
      function Ct(t) {
        if ('number' != typeof t && t && !t.V) {
          var e = t.src;
          if (e && e[Nt]) xt(e.c, t);
          else {
            var n = t.type,
              r = t.proxy;
            e.removeEventListener
              ? e.removeEventListener(n, r, t.capture)
              : e.detachEvent
              ? e.detachEvent(Vt(n), r)
              : e.addListener && e.removeListener && e.removeListener(r),
              (n = qt(e))
                ? (xt(n, t), 0 == n.b && ((n.src = null), (e[Rt] = null)))
                : Dt(t);
          }
        }
      }
      function Vt(t) {
        return t in kt ? kt[t] : (kt[t] = 'on' + t);
      }
      function Mt(t, e) {
        var n = t.listener,
          r = t.aa || t.src;
        return t.X && Ct(t), n.call(r, e);
      }
      function Ft(t, e) {
        if (t.V) return !0;
        if (wt) return Mt(t, new Tt(e, this));
        if (!e)
          t: {
            e = ['window', 'event'];
            for (var n = A, r = 0; r < e.length; r++)
              if (null == (n = n[e[r]])) {
                e = null;
                break t;
              }
            e = n;
          }
        return Mt(t, (e = new Tt(e, this)));
      }
      function qt(t) {
        return (t = t[Rt]) instanceof Ot ? t : null;
      }
      var jt = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0);
      function Bt(e) {
        return 'function' == D(e)
          ? e
          : (e[jt] ||
              (e[jt] = function(t) {
                return e.handleEvent(t);
              }),
            e[jt]);
      }
      function Gt() {
        F.call(this), (this.c = new Ot(this)), ((this.J = this).A = null);
      }
      function Qt(t, e, n, r) {
        if (!(e = t.c.a[String(e)])) return !0;
        e = e.concat();
        for (var i = !0, o = 0; o < e.length; ++o) {
          var s = e[o];
          if (s && !s.V && s.capture == n) {
            var u = s.listener,
              a = s.aa || s.src;
            s.X && xt(t.c, s), (i = !1 !== u.call(a, r) && i);
          }
        }
        return i && !r.defaultPrevented;
      }
      M(Gt, F),
        (Gt.prototype[Nt] = !0),
        ((T = Gt.prototype).addEventListener = function(t, e, n, r) {
          Lt(this, t, e, n, r);
        }),
        (T.removeEventListener = function(t, e, n, r) {
          !(function t(e, n, r, i, o) {
            if (Array.isArray(n))
              for (var s = 0; s < n.length; s++) t(e, n[s], r, i, o);
            else
              (i = x(i) ? !!i.capture : !!i),
                (r = Bt(r)),
                e && e[Nt]
                  ? ((e = e.c),
                    (n = String(n).toString()) in e.a &&
                      -1 < (r = Pt((s = e.a[n]), r, i, o)) &&
                      (Dt(s[r]),
                      Array.prototype.splice.call(s, r, 1),
                      0 == s.length && (delete e.a[n], e.b--)))
                  : (e = e && qt(e)) &&
                    ((n = e.a[n.toString()]),
                    (e = -1),
                    n && (e = Pt(n, r, i, o)),
                    (r = -1 < e ? n[e] : null) && Ct(r));
          })(this, t, e, n, r);
        }),
        (T.dispatchEvent = function(t) {
          var e,
            n = this.A;
          if (n) for (e = []; n; n = n.A) e.push(n);
          n = this.J;
          var r = t.type || t;
          if ('string' == typeof t) t = new It(t, n);
          else if (t instanceof It) t.target = t.target || n;
          else {
            var i = t;
            tt((t = new It(r, n)), i);
          }
          if (((i = !0), e))
            for (var o = e.length - 1; 0 <= o; o--) {
              var s = (t.a = e[o]);
              i = Qt(s, r, !0, t) && i;
            }
          if (
            ((i = Qt((s = t.a = n), r, !0, t) && i),
            (i = Qt(s, r, !1, t) && i),
            e)
          )
            for (o = 0; o < e.length; o++)
              i = Qt((s = t.a = e[o]), r, !1, t) && i;
          return i;
        }),
        (T.C = function() {
          if ((Gt.M.C.call(this), this.c)) {
            var t,
              e = this.c;
            for (t in e.a) {
              for (var n = e.a[t], r = 0; r < n.length; r++) Dt(n[r]);
              delete e.a[t], e.b--;
            }
          }
          this.A = null;
        }),
        (T.ra = function(t, e, n, r) {
          return this.c.add(String(t), e, !1, n, r);
        }),
        (T.sa = function(t, e, n, r) {
          return this.c.add(String(t), e, !0, n, r);
        });
      var zt = A.JSON.stringify;
      function Ht() {
        this.b = this.a = null;
      }
      var Wt,
        Kt =
          ((Xt.prototype.get = function() {
            var t;
            return (
              0 < this.b
                ? (this.b--, (t = this.a), (this.a = t.next), (t.next = null))
                : (t = this.c()),
              t
            );
          }),
          new Xt(
            function() {
              return new Yt();
            },
            function(t) {
              t.reset();
            },
            100,
          ));
      function Xt(t, e, n) {
        (this.f = n), (this.c = t), (this.g = e), (this.b = 0), (this.a = null);
      }
      function Yt() {
        this.next = this.b = this.a = null;
      }
      function $t(t) {
        A.setTimeout(function() {
          throw t;
        }, 0);
      }
      function Jt(t, e) {
        var n;
        Wt ||
          ((n = A.Promise.resolve(void 0)),
          (Wt = function() {
            n.then(ee);
          })),
          Zt || (Wt(), (Zt = !0)),
          te.add(t, e);
      }
      (Ht.prototype.add = function(t, e) {
        var n = Kt.get();
        n.set(t, e), this.b ? (this.b.next = n) : (this.a = n), (this.b = n);
      }),
        (Yt.prototype.set = function(t, e) {
          (this.a = t), (this.b = e), (this.next = null);
        });
      var Zt = !(Yt.prototype.reset = function() {
          this.next = this.b = this.a = null;
        }),
        te = new Ht();
      function ee() {
        for (
          var t;
          (r = n = void 0),
            (r = null),
            (n = te).a &&
              ((r = n.a),
              (n.a = n.a.next),
              n.a || (n.b = null),
              (r.next = null)),
            (t = r);

        ) {
          try {
            t.a.call(t.b);
          } catch (t) {
            $t(t);
          }
          var e = Kt;
          e.g(t), e.b < e.f && (e.b++, (t.next = e.a), (e.a = t));
        }
        var n, r;
        Zt = !1;
      }
      function ne(t, e) {
        Gt.call(this),
          (this.b = t || 1),
          (this.a = e || A),
          (this.f = U(this.Ua, this)),
          (this.g = V());
      }
      function re(t) {
        (t.Z = !1), t.L && (t.a.clearTimeout(t.L), (t.L = null));
      }
      function ie(t, e, n) {
        if ('function' == D(t)) n && (t = U(t, n));
        else {
          if (!t || 'function' != typeof t.handleEvent)
            throw Error('Invalid listener argument');
          t = U(t.handleEvent, t);
        }
        return 2147483647 < Number(e) ? -1 : A.setTimeout(t, e || 0);
      }
      function oe(t, e, n) {
        F.call(this),
          (this.f = null != n ? U(t, n) : t),
          (this.c = e),
          (this.b = U(this.Pa, this)),
          (this.a = []);
      }
      function se(t) {
        (t.T = ie(t.b, t.c)), t.f.apply(null, t.a);
      }
      function ue(t) {
        F.call(this), (this.b = t), (this.a = {});
      }
      M(ne, Gt),
        ((T = ne.prototype).Z = !1),
        (T.L = null),
        (T.Ua = function() {
          if (this.Z) {
            var t = V() - this.g;
            0 < t && t < 0.8 * this.b
              ? (this.L = this.a.setTimeout(this.f, this.b - t))
              : (this.L && (this.a.clearTimeout(this.L), (this.L = null)),
                this.dispatchEvent('tick'),
                this.Z && (re(this), this.start()));
          }
        }),
        (T.start = function() {
          (this.Z = !0),
            this.L ||
              ((this.L = this.a.setTimeout(this.f, this.b)), (this.g = V()));
        }),
        (T.C = function() {
          ne.M.C.call(this), re(this), delete this.a;
        }),
        M(oe, F),
        ((T = oe.prototype).ba = !1),
        (T.T = null),
        (T.Ia = function(t) {
          (this.a = arguments), this.T ? (this.ba = !0) : se(this);
        }),
        (T.C = function() {
          oe.M.C.call(this),
            this.T &&
              (A.clearTimeout(this.T),
              (this.T = null),
              (this.ba = !1),
              (this.a = []));
        }),
        (T.Pa = function() {
          (this.T = null), this.ba && ((this.ba = !1), se(this));
        }),
        M(ue, F);
      var ae = [];
      function he(t, e, n, r) {
        Array.isArray(n) || (n && (ae[0] = n.toString()), (n = ae));
        for (var i = 0; i < n.length; i++) {
          var o = Lt(e, n[i], r || t.handleEvent, !1, t.b || t);
          if (!o) break;
          t.a[o.key] = o;
        }
      }
      function ce(t) {
        $(
          t.a,
          function(t, e) {
            this.a.hasOwnProperty(e) && Ct(t);
          },
          t,
        ),
          (t.a = {});
      }
      function fe() {}
      (ue.prototype.C = function() {
        ue.M.C.call(this), ce(this);
      }),
        (ue.prototype.handleEvent = function() {
          throw Error('EventHandler.handleEvent not implemented');
        });
      var le = null;
      function pe() {
        return (le = le || new Gt());
      }
      function de(t) {
        It.call(this, 'serverreachability', t);
      }
      function ye(t) {
        var e = pe();
        e.dispatchEvent(new de(e));
      }
      function ve(t) {
        It.call(this, 'statevent', t);
      }
      function ge(t) {
        var e = pe();
        e.dispatchEvent(new ve(e));
      }
      function me(t) {
        It.call(this, 'timingevent', t);
      }
      function we(t, e) {
        if ('function' != D(t))
          throw Error('Fn must not be null and must be a function');
        return A.setTimeout(function() {
          t();
        }, e);
      }
      M(de, It), M(ve, It), M(me, It);
      var be = {
          NO_ERROR: 0,
          Va: 1,
          bb: 2,
          ab: 3,
          Ya: 4,
          $a: 5,
          cb: 6,
          za: 7,
          TIMEOUT: 8,
          gb: 9,
        },
        Ee = {
          Xa: 'complete',
          kb: 'success',
          Aa: 'error',
          za: 'abort',
          ib: 'ready',
          jb: 'readystatechange',
          TIMEOUT: 'timeout',
          eb: 'incrementaldata',
          hb: 'progress',
          Za: 'downloadprogress',
          lb: 'uploadprogress',
        };
      function Ie() {}
      function Te(t) {
        var e;
        return (e = t.a) || (e = t.a = {}), e;
      }
      function _e() {}
      Ie.prototype.a = null;
      var Ne,
        Ae = { OPEN: 'a', Wa: 'b', Aa: 'c', fb: 'd' };
      function Se() {
        It.call(this, 'd');
      }
      function De() {
        It.call(this, 'c');
      }
      function Oe() {}
      function xe(t, e, n) {
        (this.g = t),
          (this.W = e),
          (this.U = n || 1),
          (this.G = new ue(this)),
          (this.N = Pe),
          (t = ut ? 125 : void 0),
          (this.O = new ne(t)),
          (this.m = null),
          (this.b = !1),
          (this.j = this.A = this.f = this.B = this.s = this.P = this.h = null),
          (this.i = []),
          (this.a = null),
          (this.w = 0),
          (this.c = this.v = null),
          (this.H = -1),
          (this.l = !1),
          (this.J = 0),
          (this.D = null),
          (this.o = this.R = this.F = !1);
      }
      M(Se, It), M(De, It), M(Oe, Ie), (Ne = new Oe());
      var Pe = 45e3,
        Re = {},
        ke = {};
      function Le(t, e, n) {
        (t.B = 1), (t.f = nn(Ye(e))), (t.j = n), (t.F = !0), Ue(t, null);
      }
      function Ue(t, e) {
        (t.s = V()), Me(t), (t.A = Ye(t.f));
        var n = t.A,
          r = t.U;
        Array.isArray(r) || (r = [String(r)]),
          vn(n.b, 't', r),
          (t.w = 0),
          (t.a = ur(t.g, t.g.w ? e : null)),
          0 < t.J && (t.D = new oe(U(t.ya, t, t.a), t.J)),
          he(t.G, t.a, 'readystatechange', t.Sa),
          (e = t.m ? J(t.m) : {}),
          t.j
            ? (t.v || (t.v = 'POST'),
              (e['Content-Type'] = 'application/x-www-form-urlencoded'),
              t.a.$(t.A, t.v, t.j, e))
            : ((t.v = 'GET'), t.a.$(t.A, t.v, null, e)),
          ye(1);
      }
      function Ce(t, e, n) {
        for (var r = !0; !t.l && t.w < n.length; ) {
          var i = Ve(t, n);
          if (i == ke) {
            4 == e && ((t.c = 4), ge(14), (r = !1));
            break;
          }
          if (i == Re) {
            (t.c = 4), ge(15), (r = !1);
            break;
          }
          Ge(t, i);
        }
        4 == e && 0 == n.length && ((t.c = 1), ge(16), (r = !1)),
          (t.b = t.b && r),
          r || (Be(t), je(t));
      }
      function Ve(t, e) {
        var n = t.w,
          r = e.indexOf('\n', n);
        return -1 == r
          ? ke
          : ((n = Number(e.substring(n, r))),
            isNaN(n)
              ? Re
              : (r += 1) + n > e.length
              ? ke
              : ((e = e.substr(r, n)), (t.w = r + n), e));
      }
      function Me(t) {
        (t.P = V() + t.N), Fe(t, t.N);
      }
      function Fe(t, e) {
        if (null != t.h) throw Error('WatchDog timer not null');
        t.h = we(U(t.Qa, t), e);
      }
      function qe(t) {
        t.h && (A.clearTimeout(t.h), (t.h = null));
      }
      function je(t) {
        0 == t.g.u || t.l || nr(t.g, t);
      }
      function Be(t) {
        qe(t);
        var e = t.D;
        e && 'function' == typeof e.da && e.da(),
          (t.D = null),
          re(t.O),
          ce(t.G),
          t.a && ((e = t.a), (t.a = null), e.abort(), e.da());
      }
      function Ge(t, e) {
        try {
          var n = t.g;
          if (0 != n.u && (n.a == t || Tn(n.b, t)))
            if (((n.A = t.H), !t.o && Tn(n.b, t) && 3 == n.u)) {
              try {
                var r = n.ja.a.parse(e);
              } catch (t) {
                r = null;
              }
              if (Array.isArray(r) && 3 == r.length) {
                var i = r;
                if (0 == i[0]) {
                  t: if (!n.i) {
                    if (n.a) {
                      if (!(n.a.s + 3e3 < t.s)) break t;
                      er(n), n.a.cancel(), (n.a = null);
                    }
                    tr(n), ge(18);
                  }
                } else
                  (n.ia = i[1]),
                    0 < n.ia - n.G &&
                      i[2] < 37500 &&
                      n.U &&
                      0 == n.m &&
                      !n.l &&
                      (n.l = we(U(n.Na, n), 6e3));
                if (In(n.b) <= 1 && n.O) {
                  try {
                    n.O();
                  } catch (t) {}
                  n.O = void 0;
                }
              } else ir(n, 11);
            } else if (((!t.o && n.a != t) || er(n), !Q(e)))
              for (e = r = n.ja.a.parse(e), r = 0; r < e.length; r++)
                if (((i = e[r]), (n.G = i[0]), (i = i[1]), 2 == n.u))
                  if ('c' == i[0]) {
                    (n.B = i[1]), (n.R = i[2]);
                    var o = i[3];
                    null != o && (n.oa = o);
                    var s = i[5];
                    null != s &&
                      'number' == typeof s &&
                      0 < s &&
                      (n.D = 1.5 * s);
                    var u = n,
                      a = t.a;
                    if (a) {
                      var h = a.a
                        ? a.a.getResponseHeader('X-Client-Wire-Protocol')
                        : null;
                      if (h) {
                        var c = u.b;
                        !c.a &&
                          (W(h, 'spdy') || W(h, 'quic') || W(h, 'h2')) &&
                          ((c.f = c.g),
                          (c.a = new Set()),
                          c.b && (_n(c, c.b), (c.b = null)));
                      }
                      if (u.s) {
                        var f = a.a
                          ? a.a.getResponseHeader('X-HTTP-Session-Id')
                          : null;
                        f && ((u.ha = f), en(u.v, u.s, f));
                      }
                    }
                    (n.u = 3), n.c && n.c.na();
                    var l = t;
                    if ((((u = n).ea = sr(u, u.w ? u.R : null, u.P)), l.o)) {
                      Nn(u.b, l);
                      var p = l,
                        d = u.D;
                      d && p.setTimeout(d), p.h && (qe(p), Me(p)), (u.a = l);
                    } else Zn(u);
                    0 < n.f.length && Xn(n);
                  } else ('stop' != i[0] && 'close' != i[0]) || ir(n, 7);
                else
                  3 == n.u &&
                    ('stop' == i[0] || 'close' == i[0]
                      ? 'stop' == i[0]
                        ? ir(n, 7)
                        : Hn(n)
                      : 'noop' != i[0] && n.c && n.c.ma(i),
                    (n.m = 0));
          ye(4);
        } catch (t) {}
      }
      function Qe(t, e) {
        if (t.forEach && 'function' == typeof t.forEach) t.forEach(e, void 0);
        else if (O(t) || 'string' == typeof t) j(t, e, void 0);
        else {
          if (t.K && 'function' == typeof t.K) var n = t.K();
          else if (t.I && 'function' == typeof t.I) n = void 0;
          else if (O(t) || 'string' == typeof t) {
            n = [];
            for (var r = t.length, i = 0; i < r; i++) n.push(i);
          } else for (i in ((n = []), (r = 0), t)) n[r++] = i;
          i = (r = (function(t) {
            if (t.I && 'function' == typeof t.I) return t.I();
            if ('string' == typeof t) return t.split('');
            if (O(t)) {
              for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]);
              return e;
            }
            for (r in ((e = []), (n = 0), t)) e[n++] = t[r];
            return e;
          })(t)).length;
          for (var o = 0; o < i; o++) e.call(void 0, r[o], n && n[o], t);
        }
      }
      function ze(t, e) {
        (this.b = {}), (this.a = []), (this.c = 0);
        var n = arguments.length;
        if (1 < n) {
          if (n % 2) throw Error('Uneven number of arguments');
          for (var r = 0; r < n; r += 2)
            this.set(arguments[r], arguments[r + 1]);
        } else if (t)
          if (t instanceof ze)
            for (n = t.K(), r = 0; r < n.length; r++)
              this.set(n[r], t.get(n[r]));
          else for (r in t) this.set(r, t[r]);
      }
      function He(t) {
        if (t.c != t.a.length) {
          for (var e = 0, n = 0; e < t.a.length; ) {
            var r = t.a[e];
            We(t.b, r) && (t.a[n++] = r), e++;
          }
          t.a.length = n;
        }
        if (t.c != t.a.length) {
          var i = {};
          for (n = e = 0; e < t.a.length; )
            We(i, (r = t.a[e])) || (i[(t.a[n++] = r)] = 1), e++;
          t.a.length = n;
        }
      }
      function We(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }
      ((T = xe.prototype).setTimeout = function(t) {
        this.N = t;
      }),
        (T.Sa = function(t) {
          t = t.target;
          var e = this.D;
          e && 3 == Bn(t) ? e.Ia() : this.ya(t);
        }),
        (T.ya = function(t) {
          try {
            if (t == this.a)
              t: {
                var e = Bn(this.a),
                  n = this.a.qa(),
                  r = this.a.S();
                if (!(e < 3 || (3 == e && !ut && !this.a.Y()))) {
                  this.l || 4 != e || 7 == n || ye(8 == n || r <= 0 ? 3 : 2),
                    qe(this);
                  var i = this.a.S();
                  this.H = i;
                  var o = this.a.Y();
                  if ((this.b = 200 == i)) {
                    if (this.R && !this.o) {
                      e: {
                        if (this.a) {
                          var s,
                            u = this.a;
                          if (
                            (s = u.a
                              ? u.a.getResponseHeader('X-HTTP-Initial-Response')
                              : null) &&
                            !Q(s)
                          ) {
                            var a = s;
                            break e;
                          }
                        }
                        a = null;
                      }
                      if (!a) {
                        (this.b = !1), (this.c = 3), ge(12), Be(this), je(this);
                        break t;
                      }
                      (this.o = !0), Ge(this, a);
                    }
                    this.F
                      ? (Ce(this, e, o),
                        ut &&
                          this.b &&
                          3 == e &&
                          (he(this.G, this.O, 'tick', this.Ra), this.O.start()))
                      : Ge(this, o),
                      4 == e && Be(this),
                      this.b &&
                        !this.l &&
                        (4 == e ? nr(this.g, this) : ((this.b = !1), Me(this)));
                  } else
                    400 == i && 0 < o.indexOf('Unknown SID')
                      ? ((this.c = 3), ge(12))
                      : ((this.c = 0), ge(13)),
                      Be(this),
                      je(this);
                }
              }
          } catch (t) {}
        }),
        (T.Ra = function() {
          if (this.a) {
            var t = Bn(this.a),
              e = this.a.Y();
            this.w < e.length &&
              (qe(this), Ce(this, t, e), this.b && 4 != t && Me(this));
          }
        }),
        (T.cancel = function() {
          (this.l = !0), Be(this);
        }),
        (T.Qa = function() {
          this.h = null;
          var t = V();
          0 <= t - this.P
            ? (2 != this.B && (ye(3), ge(17)), Be(this), (this.c = 2), je(this))
            : Fe(this, this.P - t);
        }),
        ((T = ze.prototype).I = function() {
          He(this);
          for (var t = [], e = 0; e < this.a.length; e++)
            t.push(this.b[this.a[e]]);
          return t;
        }),
        (T.K = function() {
          return He(this), this.a.concat();
        }),
        (T.get = function(t, e) {
          return We(this.b, t) ? this.b[t] : e;
        }),
        (T.set = function(t, e) {
          We(this.b, t) || (this.c++, this.a.push(t)), (this.b[t] = e);
        }),
        (T.forEach = function(t, e) {
          for (var n = this.K(), r = 0; r < n.length; r++) {
            var i = n[r],
              o = this.get(i);
            t.call(e, o, i, this);
          }
        });
      var Ke = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
      function Xe(t, e) {
        if (
          ((this.c = this.j = this.f = ''),
          (this.h = null),
          (this.i = this.g = ''),
          (this.a = !1),
          t instanceof Xe)
        ) {
          (this.a = void 0 !== e ? e : t.a),
            $e(this, t.f),
            (this.j = t.j),
            Je(this, t.c),
            Ze(this, t.h),
            (this.g = t.g),
            (e = t.b);
          var n = new ln();
          (n.c = e.c),
            e.a && ((n.a = new ze(e.a)), (n.b = e.b)),
            tn(this, n),
            (this.i = t.i);
        } else
          t && (n = String(t).match(Ke))
            ? ((this.a = !!e),
              $e(this, n[1] || '', !0),
              (this.j = rn(n[2] || '')),
              Je(this, n[3] || '', !0),
              Ze(this, n[4]),
              (this.g = rn(n[5] || '', !0)),
              tn(this, n[6] || '', !0),
              (this.i = rn(n[7] || '')))
            : ((this.a = !!e), (this.b = new ln(null, this.a)));
      }
      function Ye(t) {
        return new Xe(t);
      }
      function $e(t, e, n) {
        (t.f = n ? rn(e, !0) : e), t.f && (t.f = t.f.replace(/:$/, ''));
      }
      function Je(t, e, n) {
        t.c = n ? rn(e, !0) : e;
      }
      function Ze(t, e) {
        if (e) {
          if (((e = Number(e)), isNaN(e) || e < 0))
            throw Error('Bad port number ' + e);
          t.h = e;
        } else t.h = null;
      }
      function tn(t, e, n) {
        var r, i;
        e instanceof ln
          ? ((t.b = e),
            (r = t.b),
            (i = t.a) &&
              !r.f &&
              (pn(r),
              (r.c = null),
              r.a.forEach(function(t, e) {
                var n = e.toLowerCase();
                e != n && (dn(this, e), vn(this, n, t));
              }, r)),
            (r.f = i))
          : (n || (e = on(e, cn)), (t.b = new ln(e, t.a)));
      }
      function en(t, e, n) {
        t.b.set(e, n);
      }
      function nn(t) {
        return (
          en(
            t,
            'zx',
            Math.floor(2147483648 * Math.random()).toString(36) +
              Math.abs(Math.floor(2147483648 * Math.random()) ^ V()).toString(
                36,
              ),
          ),
          t
        );
      }
      function rn(t, e) {
        return t
          ? e
            ? decodeURI(t.replace(/%25/g, '%2525'))
            : decodeURIComponent(t)
          : '';
      }
      function on(t, e, n) {
        return 'string' == typeof t
          ? ((t = encodeURI(t).replace(e, sn)),
            n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
            t)
          : null;
      }
      function sn(t) {
        return (
          '%' +
          (((t = t.charCodeAt(0)) >> 4) & 15).toString(16) +
          (15 & t).toString(16)
        );
      }
      Xe.prototype.toString = function() {
        var t = [],
          e = this.f;
        e && t.push(on(e, un, !0), ':');
        var n = this.c;
        return (
          (!n && 'file' != e) ||
            (t.push('//'),
            (e = this.j) && t.push(on(e, un, !0), '@'),
            t.push(
              encodeURIComponent(String(n)).replace(
                /%25([0-9a-fA-F]{2})/g,
                '%$1',
              ),
            ),
            null != (n = this.h) && t.push(':', String(n))),
          (n = this.g) &&
            (this.c && '/' != n.charAt(0) && t.push('/'),
            t.push(on(n, '/' == n.charAt(0) ? hn : an, !0))),
          (n = this.b.toString()) && t.push('?', n),
          (n = this.i) && t.push('#', on(n, fn)),
          t.join('')
        );
      };
      var un = /[#\/\?@]/g,
        an = /[#\?:]/g,
        hn = /[#\?]/g,
        cn = /[#\?@]/g,
        fn = /#/g;
      function ln(t, e) {
        (this.b = this.a = null), (this.c = t || null), (this.f = !!e);
      }
      function pn(n) {
        n.a ||
          ((n.a = new ze()),
          (n.b = 0),
          n.c &&
            (function(t, e) {
              if (t) {
                t = t.split('&');
                for (var n = 0; n < t.length; n++) {
                  var r = t[n].indexOf('='),
                    i = null;
                  if (0 <= r) {
                    var o = t[n].substring(0, r);
                    i = t[n].substring(r + 1);
                  } else o = t[n];
                  e(o, i ? decodeURIComponent(i.replace(/\+/g, ' ')) : '');
                }
              }
            })(n.c, function(t, e) {
              n.add(decodeURIComponent(t.replace(/\+/g, ' ')), e);
            }));
      }
      function dn(t, e) {
        pn(t),
          (e = gn(t, e)),
          We(t.a.b, e) &&
            ((t.c = null),
            (t.b -= t.a.get(e).length),
            We((t = t.a).b, e) &&
              (delete t.b[e], t.c--, t.a.length > 2 * t.c && He(t)));
      }
      function yn(t, e) {
        return pn(t), (e = gn(t, e)), We(t.a.b, e);
      }
      function vn(t, e, n) {
        dn(t, e),
          0 < n.length &&
            ((t.c = null), t.a.set(gn(t, e), G(n)), (t.b += n.length));
      }
      function gn(t, e) {
        return (e = String(e)), t.f && (e = e.toLowerCase()), e;
      }
      function mn(t, e) {
        (this.b = t), (this.a = e);
      }
      function wn(t) {
        (this.g = t || bn),
          (t = A.PerformanceNavigationTiming
            ? 0 < (t = A.performance.getEntriesByType('navigation')).length &&
              ('hq' == t[0].nextHopProtocol || 'h2' == t[0].nextHopProtocol)
            : !!(A.ca && A.ca.ua && A.ca.ua() && A.ca.ua().mb)),
          (this.f = t ? this.g : 1),
          (this.a = null),
          1 < this.f && (this.a = new Set()),
          (this.b = null),
          (this.c = []);
      }
      ((T = ln.prototype).add = function(t, e) {
        pn(this), (this.c = null), (t = gn(this, t));
        var n = this.a.get(t);
        return n || this.a.set(t, (n = [])), n.push(e), (this.b += 1), this;
      }),
        (T.forEach = function(n, r) {
          pn(this),
            this.a.forEach(function(t, e) {
              j(
                t,
                function(t) {
                  n.call(r, t, e, this);
                },
                this,
              );
            }, this);
        }),
        (T.K = function() {
          pn(this);
          for (
            var t = this.a.I(), e = this.a.K(), n = [], r = 0;
            r < e.length;
            r++
          )
            for (var i = t[r], o = 0; o < i.length; o++) n.push(e[r]);
          return n;
        }),
        (T.I = function(t) {
          pn(this);
          var e = [];
          if ('string' == typeof t)
            yn(this, t) && (e = B(e, this.a.get(gn(this, t))));
          else {
            t = this.a.I();
            for (var n = 0; n < t.length; n++) e = B(e, t[n]);
          }
          return e;
        }),
        (T.set = function(t, e) {
          return (
            pn(this),
            (this.c = null),
            yn(this, (t = gn(this, t))) && (this.b -= this.a.get(t).length),
            this.a.set(t, [e]),
            (this.b += 1),
            this
          );
        }),
        (T.get = function(t, e) {
          return t && 0 < (t = this.I(t)).length ? String(t[0]) : e;
        }),
        (T.toString = function() {
          if (this.c) return this.c;
          if (!this.a) return '';
          for (var t = [], e = this.a.K(), n = 0; n < e.length; n++) {
            var r = e[n],
              i = encodeURIComponent(String(r));
            r = this.I(r);
            for (var o = 0; o < r.length; o++) {
              var s = i;
              '' !== r[o] && (s += '=' + encodeURIComponent(String(r[o]))),
                t.push(s);
            }
          }
          return (this.c = t.join('&'));
        });
      var bn = 10;
      function En(t) {
        return t.b || (t.a && t.a.size >= t.f);
      }
      function In(t) {
        return t.b ? 1 : t.a ? t.a.size : 0;
      }
      function Tn(t, e) {
        return t.b ? t.b == e : t.a && t.a.has(e);
      }
      function _n(t, e) {
        t.a ? t.a.add(e) : (t.b = e);
      }
      function Nn(t, e) {
        t.b && t.b == e ? (t.b = null) : t.a && t.a.has(e) && t.a.delete(e);
      }
      function An(t) {
        var e, n;
        if (null != t.b) return t.c.concat(t.b.i);
        if (null == t.a || 0 === t.a.size) return G(t.c);
        var r = t.c;
        try {
          for (var i = I(t.a.values()), o = i.next(); !o.done; o = i.next()) {
            var s = o.value;
            r = r.concat(s.i);
          }
        } catch (t) {
          e = { error: t };
        } finally {
          try {
            o && !o.done && (n = i.return) && n.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
        return r;
      }
      function Sn() {}
      function Dn() {
        this.a = new Sn();
      }
      function On(t, r, e) {
        var i = e || '';
        try {
          Qe(t, function(t, e) {
            var n = t;
            x(t) && (n = zt(t)), r.push(i + e + '=' + encodeURIComponent(n));
          });
        } catch (t) {
          throw (r.push(i + 'type=' + encodeURIComponent('_badmap')), t);
        }
      }
      function xn(t, e, n, r, i) {
        try {
          (e.onload = null),
            (e.onerror = null),
            (e.onabort = null),
            (e.ontimeout = null),
            i(r);
        } catch (t) {}
      }
      (wn.prototype.cancel = function() {
        var e, t;
        if (((this.c = An(this)), this.b)) this.b.cancel(), (this.b = null);
        else if (this.a && 0 !== this.a.size) {
          try {
            for (
              var n = I(this.a.values()), r = n.next();
              !r.done;
              r = n.next()
            ) {
              r.value.cancel();
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              r && !r.done && (t = n.return) && t.call(n);
            } finally {
              if (e) throw e.error;
            }
          }
          this.a.clear();
        }
      }),
        (Sn.prototype.stringify = function(t) {
          return A.JSON.stringify(t, void 0);
        }),
        (Sn.prototype.parse = function(t) {
          return A.JSON.parse(t, void 0);
        });
      var Pn = A.JSON.parse;
      function Rn(t) {
        Gt.call(this),
          (this.headers = new ze()),
          (this.G = t || null),
          (this.b = !1),
          (this.s = this.a = null),
          (this.D = ''),
          (this.h = 0),
          (this.f = ''),
          (this.g = this.w = this.l = this.v = !1),
          (this.o = 0),
          (this.m = null),
          (this.H = kn),
          (this.B = this.F = !1);
      }
      M(Rn, Gt);
      var kn = '',
        Ln = /^https?$/i,
        Un = ['POST', 'PUT'];
      function Cn(t) {
        return 'content-type' == t.toLowerCase();
      }
      function Vn(t, e) {
        (t.b = !1),
          t.a && ((t.g = !0), t.a.abort(), (t.g = !1)),
          (t.f = e),
          (t.h = 5),
          Mn(t),
          qn(t);
      }
      function Mn(t) {
        t.v ||
          ((t.v = !0), t.dispatchEvent('complete'), t.dispatchEvent('error'));
      }
      function Fn(t) {
        if (t.b && void 0 !== N && (!t.s[1] || 4 != Bn(t) || 2 != t.S()))
          if (t.l && 4 == Bn(t)) ie(t.va, 0, t);
          else if ((t.dispatchEvent('readystatechange'), 4 == Bn(t))) {
            t.b = !1;
            try {
              var e,
                n = t.S();
              t: switch (n) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                  var r = !0;
                  break t;
                default:
                  r = !1;
              }
              if (!(e = r)) {
                var i;
                if ((i = 0 === n)) {
                  var o = String(t.D).match(Ke)[1] || null;
                  if (!o && A.self && A.self.location) {
                    var s = A.self.location.protocol;
                    o = s.substr(0, s.length - 1);
                  }
                  i = !Ln.test(o ? o.toLowerCase() : '');
                }
                e = i;
              }
              if (e) t.dispatchEvent('complete'), t.dispatchEvent('success');
              else {
                t.h = 6;
                try {
                  var u = 2 < Bn(t) ? t.a.statusText : '';
                } catch (t) {
                  u = '';
                }
                (t.f = u + ' [' + t.S() + ']'), Mn(t);
              }
            } finally {
              qn(t);
            }
          }
      }
      function qn(t, e) {
        if (t.a) {
          jn(t);
          var n = t.a,
            r = t.s[0] ? S : null;
          (t.a = null), (t.s = null), e || t.dispatchEvent('ready');
          try {
            n.onreadystatechange = r;
          } catch (t) {}
        }
      }
      function jn(t) {
        t.a && t.B && (t.a.ontimeout = null),
          t.m && (A.clearTimeout(t.m), (t.m = null));
      }
      function Bn(t) {
        return t.a ? t.a.readyState : 0;
      }
      function Gn(t, e, n) {
        t: {
          for (r in n) {
            var r = !1;
            break t;
          }
          r = !0;
        }
        var i;
        r ||
          ((i = ''),
          $(n, function(t, e) {
            (i += e), (i += ':'), (i += t), (i += '\r\n');
          }),
          (n = i),
          'string' == typeof t
            ? null != n && encodeURIComponent(String(n))
            : en(t, e, n));
      }
      function Qn(t, e, n) {
        return (
          (n && n.internalChannelParams && n.internalChannelParams[t]) || e
        );
      }
      function zn(t) {
        (this.f = []),
          (this.R = this.ea = this.v = this.P = this.a = this.ha = this.s = this.N = this.h = this.F = this.j = null),
          (this.Fa = this.H = 0),
          (this.Ca = Qn('failFast', !1, t)),
          (this.U = this.l = this.i = this.g = this.c = null),
          (this.W = !0),
          (this.A = this.ia = this.G = -1),
          (this.J = this.m = this.o = 0),
          (this.Ba = Qn('baseRetryDelayMs', 5e3, t)),
          (this.Ga = Qn('retryDelaySeedMs', 1e4, t)),
          (this.Da = Qn('forwardChannelMaxRetries', 2, t)),
          (this.ga = Qn('forwardChannelRequestTimeoutMs', 2e4, t)),
          (this.Ea = (t && t.nb) || void 0),
          (this.D = void 0),
          (this.w = (t && t.supportsCrossDomainXhr) || !1),
          (this.B = ''),
          (this.b = new wn(t && t.concurrentRequestLimit)),
          (this.ja = new Dn()),
          (this.fa = (t && t.fastHandshake) || !1),
          t && t.forceLongPolling && (this.W = !1),
          (this.O = void 0);
      }
      function Hn(t) {
        if ((Wn(t), 3 == t.u)) {
          var e = t.H++,
            n = Ye(t.v);
          en(n, 'SID', t.B),
            en(n, 'RID', e),
            en(n, 'TYPE', 'terminate'),
            $n(t, n),
            ((e = new xe(t, e, void 0)).B = 2),
            (e.f = nn(Ye(n))),
            (n = !1),
            A.navigator &&
              A.navigator.sendBeacon &&
              (n = A.navigator.sendBeacon(e.f.toString(), '')),
            !n && A.Image && ((new Image().src = e.f), (n = !0)),
            n || ((e.a = ur(e.g, null)), e.a.$(e.f)),
            (e.s = V()),
            Me(e);
        }
        or(t);
      }
      function Wn(t) {
        t.a && (t.a.cancel(), (t.a = null)),
          t.i && (A.clearTimeout(t.i), (t.i = null)),
          er(t),
          t.b.cancel(),
          t.g && ('number' == typeof t.g && A.clearTimeout(t.g), (t.g = null));
      }
      function Kn(t, e) {
        t.f.push(new mn(t.Fa++, e)), 3 == t.u && Xn(t);
      }
      function Xn(t) {
        En(t.b) || t.g || ((t.g = !0), Jt(t.xa, t), (t.o = 0));
      }
      function Yn(t, e) {
        var n;
        n = e ? e.W : t.H++;
        var r = Ye(t.v);
        en(r, 'SID', t.B),
          en(r, 'RID', n),
          en(r, 'AID', t.G),
          $n(t, r),
          t.h && t.j && Gn(r, t.h, t.j),
          (n = new xe(t, n, t.o + 1)),
          null === t.h && (n.m = t.j),
          e && (t.f = e.i.concat(t.f)),
          (e = Jn(t, n, 1e3)),
          n.setTimeout(
            Math.round(0.5 * t.ga) + Math.round(0.5 * t.ga * Math.random()),
          ),
          _n(t.b, n),
          Le(n, r, e);
      }
      function $n(t, n) {
        t.c &&
          Qe({}, function(t, e) {
            en(n, e, t);
          });
      }
      function Jn(t, e, n) {
        n = Math.min(t.f.length, n);
        var r = t.c ? U(t.c.Ha, t.c, t) : null;
        t: for (var i = t.f, o = -1; ; ) {
          var s = ['count=' + n];
          -1 == o
            ? 0 < n
              ? ((o = i[0].b), s.push('ofs=' + o))
              : (o = 0)
            : s.push('ofs=' + o);
          for (var u = !0, a = 0; a < n; a++) {
            var h = i[a].b,
              c = i[a].a;
            if ((h -= o) < 0) (o = Math.max(0, i[a].b - 100)), (u = !1);
            else
              try {
                On(c, s, 'req' + h + '_');
              } catch (t) {
                r && r(c);
              }
          }
          if (u) {
            r = s.join('&');
            break t;
          }
        }
        return (t = t.f.splice(0, n)), (e.i = t), r;
      }
      function Zn(t) {
        t.a || t.i || ((t.J = 1), Jt(t.wa, t), (t.m = 0));
      }
      function tr(t) {
        return (
          !(t.a || t.i || 3 <= t.m) &&
          (t.J++, (t.i = we(U(t.wa, t), rr(t, t.m))), t.m++, 1)
        );
      }
      function er(t) {
        null != t.l && (A.clearTimeout(t.l), (t.l = null));
      }
      function nr(t, e) {
        var n = null;
        if (t.a == e) {
          er(t), (t.a = null);
          var r = 2;
        } else {
          if (!Tn(t.b, e)) return;
          (n = e.i), Nn(t.b, e), (r = 1);
        }
        if (((t.A = e.H), 0 != t.u))
          if (e.b)
            if (1 == r) {
              (n = e.j ? e.j.length : 0), (e = V() - e.s);
              var i = t.o;
              (r = pe()).dispatchEvent(new me(r)), Xn(t);
            } else Zn(t);
          else if (
            3 == (i = e.c) ||
            (0 == i && 0 < t.A) ||
            !(
              (1 == r &&
                (function(t, e) {
                  if (!(In(t.b) >= t.b.f - (t.g ? 1 : 0))) {
                    if (t.g) return (t.f = e.i.concat(t.f)), 1;
                    if (!(1 == t.u || 2 == t.u || t.o >= (t.Ca ? 0 : t.Da)))
                      return (t.g = we(U(t.xa, t, e), rr(t, t.o))), t.o++, 1;
                  }
                })(t, e)) ||
              (2 == r && tr(t))
            )
          )
            switch (
              (n && 0 < n.length && ((e = t.b), (e.c = e.c.concat(n))), i)
            ) {
              case 1:
                ir(t, 5);
                break;
              case 4:
                ir(t, 10);
                break;
              case 3:
                ir(t, 6);
                break;
              default:
                ir(t, 2);
            }
      }
      function rr(t, e) {
        var n = t.Ba + Math.floor(Math.random() * t.Ga);
        return t.c || (n *= 2), n * e;
      }
      function ir(t, e) {
        if (2 == e) {
          var n = null;
          t.c && (n = null);
          var r = U(t.Ta, t);
          n ||
            ((n = new Xe('//www.google.com/images/cleardot.gif')),
            (A.location && 'http' == A.location.protocol) || $e(n, 'https'),
            nn(n)),
            (function(t, e) {
              var n = new fe();
              if (A.Image) {
                var r = new Image();
                (r.onload = C(xn, n, r, 'TestLoadImage: loaded', !0, e)),
                  (r.onerror = C(xn, n, r, 'TestLoadImage: error', !1, e)),
                  (r.onabort = C(xn, n, r, 'TestLoadImage: abort', !1, e)),
                  (r.ontimeout = C(xn, n, r, 'TestLoadImage: timeout', !1, e)),
                  A.setTimeout(function() {
                    r.ontimeout && r.ontimeout();
                  }, 1e4),
                  (r.src = t);
              } else e(!1);
            })(n.toString(), r);
        } else ge(2);
        (t.u = 0), t.c && t.c.la(e), or(t), Wn(t);
      }
      function or(t) {
        (t.u = 0),
          (t.A = -1),
          t.c &&
            ((0 == An(t.b).length && 0 == t.f.length) ||
              ((t.b.c.length = 0), G(t.f), (t.f.length = 0)),
            t.c.ka());
      }
      function sr(t, e, n) {
        var r,
          i,
          o,
          s,
          u,
          a,
          h = (r = n) instanceof Xe ? Ye(r) : new Xe(r, void 0);
        if ('' != h.c) e && Je(h, e + '.' + h.c), Ze(h, h.h);
        else {
          var c = A.location;
          (i = c.protocol),
            (o = e ? e + '.' + c.hostname : c.hostname),
            (s = +c.port),
            (u = n),
            (a = new Xe(null, void 0)),
            i && $e(a, i),
            o && Je(a, o),
            s && Ze(a, s),
            u && (a.g = u),
            (h = a);
        }
        return (
          t.N &&
            $(t.N, function(t, e) {
              en(h, e, t);
            }),
          (e = t.s),
          (n = t.ha),
          e && n && en(h, e, n),
          en(h, 'VER', t.oa),
          $n(t, h),
          h
        );
      }
      function ur(t, e) {
        if (e && !t.w)
          throw Error("Can't create secondary domain capable XhrIo object.");
        return ((e = new Rn(t.Ea)).F = t.w), e;
      }
      function ar() {}
      function hr() {
        if (ot && !(10 <= Number(mt)))
          throw Error('Environmental error: no available transport.');
      }
      function cr(t, e) {
        Gt.call(this),
          (this.a = new zn(e)),
          (this.l = t),
          (this.b = (e && e.messageUrlParams) || null),
          (t = (e && e.messageHeaders) || null),
          e &&
            e.clientProtocolHeaderRequired &&
            (t
              ? (t['X-Client-Protocol'] = 'webchannel')
              : (t = { 'X-Client-Protocol': 'webchannel' })),
          (this.a.j = t),
          (t = (e && e.initMessageHeaders) || null),
          e &&
            e.messageContentType &&
            (t
              ? (t['X-WebChannel-Content-Type'] = e.messageContentType)
              : (t = { 'X-WebChannel-Content-Type': e.messageContentType })),
          e &&
            e.pa &&
            (t
              ? (t['X-WebChannel-Client-Profile'] = e.pa)
              : (t = { 'X-WebChannel-Client-Profile': e.pa })),
          (this.a.F = t),
          (t = e && e.httpHeadersOverwriteParam) && !Q(t) && (this.a.h = t),
          (this.h = (e && e.supportsCrossDomainXhr) || !1),
          (this.g = (e && e.sendRawJson) || !1),
          (e = e && e.httpSessionIdParam) &&
            !Q(e) &&
            ((this.a.s = e),
            null !== (t = this.b) &&
              e in t &&
              e in (t = this.b) &&
              delete t[e]),
          (this.f = new pr(this));
      }
      function fr(t) {
        Se.call(this);
        var e = t.__sm__;
        if (e) {
          t: {
            for (var n in e) {
              t = n;
              break t;
            }
            t = void 0;
          }
          (this.c = t)
            ? ((t = this.c), (this.data = null !== e && t in e ? e[t] : void 0))
            : (this.data = e);
        } else this.data = t;
      }
      function lr() {
        De.call(this), (this.status = 1);
      }
      function pr(t) {
        this.a = t;
      }
      ((T = Rn.prototype).$ = function(t, e, n, r) {
        if (this.a)
          throw Error(
            '[goog.net.XhrIo] Object is active with another request=' +
              this.D +
              '; newUri=' +
              t,
          );
        (e = e ? e.toUpperCase() : 'GET'),
          (this.D = t),
          (this.f = ''),
          (this.h = 0),
          (this.v = !1),
          (this.b = !0),
          (this.a = new XMLHttpRequest()),
          (this.s = this.G ? Te(this.G) : Te(Ne)),
          (this.a.onreadystatechange = U(this.va, this));
        try {
          (this.w = !0), this.a.open(e, String(t), !0), (this.w = !1);
        } catch (t) {
          return void Vn(this, t);
        }
        t = n || '';
        var i,
          o = new ze(this.headers);
        r &&
          Qe(r, function(t, e) {
            o.set(e, t);
          }),
          (r = (function(t) {
            t: {
              for (
                var e = Cn,
                  n = t.length,
                  r = 'string' == typeof t ? t.split('') : t,
                  i = 0;
                i < n;
                i++
              )
                if (i in r && e.call(void 0, r[i], i, t)) {
                  e = i;
                  break t;
                }
              e = -1;
            }
            return e < 0 ? null : 'string' == typeof t ? t.charAt(e) : t[e];
          })(o.K())),
          (n = A.FormData && t instanceof A.FormData),
          0 <= q(Un, e) &&
            !r &&
            !n &&
            o.set(
              'Content-Type',
              'application/x-www-form-urlencoded;charset=utf-8',
            ),
          o.forEach(function(t, e) {
            this.a.setRequestHeader(e, t);
          }, this),
          this.H && (this.a.responseType = this.H),
          'withCredentials' in this.a &&
            this.a.withCredentials !== this.F &&
            (this.a.withCredentials = this.F);
        try {
          jn(this),
            0 < this.o &&
              ((this.B =
                ((i = this.a),
                ot &&
                  vt(9) &&
                  'number' == typeof i.timeout &&
                  void 0 !== i.ontimeout))
                ? ((this.a.timeout = this.o),
                  (this.a.ontimeout = U(this.ta, this)))
                : (this.m = ie(this.ta, this.o, this))),
            (this.l = !0),
            this.a.send(t),
            (this.l = !1);
        } catch (t) {
          Vn(this, t);
        }
      }),
        (T.ta = function() {
          void 0 !== N &&
            this.a &&
            ((this.f = 'Timed out after ' + this.o + 'ms, aborting'),
            (this.h = 8),
            this.dispatchEvent('timeout'),
            this.abort(8));
        }),
        (T.abort = function(t) {
          this.a &&
            this.b &&
            ((this.b = !1),
            (this.g = !0),
            this.a.abort(),
            (this.g = !1),
            (this.h = t || 7),
            this.dispatchEvent('complete'),
            this.dispatchEvent('abort'),
            qn(this));
        }),
        (T.C = function() {
          this.a &&
            (this.b &&
              ((this.b = !1), (this.g = !0), this.a.abort(), (this.g = !1)),
            qn(this, !0)),
            Rn.M.C.call(this);
        }),
        (T.va = function() {
          this.j || (this.w || this.l || this.g ? Fn(this) : this.Oa());
        }),
        (T.Oa = function() {
          Fn(this);
        }),
        (T.S = function() {
          try {
            return 2 < Bn(this) ? this.a.status : -1;
          } catch (t) {
            return -1;
          }
        }),
        (T.Y = function() {
          try {
            return this.a ? this.a.responseText : '';
          } catch (t) {
            return '';
          }
        }),
        (T.Ja = function(t) {
          if (this.a) {
            var e = this.a.responseText;
            return t && 0 == e.indexOf(t) && (e = e.substring(t.length)), Pn(e);
          }
        }),
        (T.qa = function() {
          return this.h;
        }),
        (T.Ma = function() {
          return 'string' == typeof this.f ? this.f : String(this.f);
        }),
        ((T = zn.prototype).oa = 8),
        (T.u = 1),
        (T.xa = function(t) {
          if (this.g)
            if (((this.g = null), 1 == this.u)) {
              if (!t) {
                (this.H = Math.floor(1e5 * Math.random())), (t = this.H++);
                var e,
                  n = new xe(this, t, void 0),
                  r = this.j;
                if (
                  (this.F && (r ? tt((r = J(r)), this.F) : (r = this.F)),
                  null === this.h && (n.m = r),
                  this.fa)
                )
                  t: {
                    for (var i = (e = 0); i < this.f.length; i++) {
                      var o = this.f[i];
                      if (
                        ('__data__' in o.a &&
                        'string' == typeof (o = o.a.__data__)
                          ? (o = o.length)
                          : (o = void 0),
                        void 0 === o)
                      )
                        break;
                      if (4096 < (e += o)) {
                        e = i;
                        break t;
                      }
                      if (4096 === e || i === this.f.length - 1) {
                        e = i + 1;
                        break t;
                      }
                    }
                    e = 1e3;
                  }
                else e = 1e3;
                (e = Jn(this, n, e)),
                  en((i = Ye(this.v)), 'RID', t),
                  en(i, 'CVER', 22),
                  this.s && en(i, 'X-HTTP-Session-Id', this.s),
                  $n(this, i),
                  this.h && r && Gn(i, this.h, r),
                  _n(this.b, n),
                  this.fa
                    ? (en(i, '$req', e),
                      en(i, 'SID', 'null'),
                      (n.R = !0),
                      Le(n, i, null))
                    : Le(n, i, e),
                  (this.u = 2);
              }
            } else
              3 == this.u &&
                (t
                  ? Yn(this, t)
                  : 0 == this.f.length || En(this.b) || Yn(this));
        }),
        (T.wa = function() {
          (this.i = null),
            (this.a = new xe(this, 'rpc', this.J)),
            null === this.h && (this.a.m = this.j),
            (this.a.J = 0);
          var t = Ye(this.ea);
          en(t, 'RID', 'rpc'),
            en(t, 'SID', this.B),
            en(t, 'CI', this.U ? '0' : '1'),
            en(t, 'AID', this.G),
            $n(this, t),
            en(t, 'TYPE', 'xmlhttp'),
            this.h && this.j && Gn(t, this.h, this.j),
            this.D && this.a.setTimeout(this.D);
          var e = this.a,
            n = this.R;
          (e.B = 1), (e.f = nn(Ye(t))), (e.j = null), (e.F = !0), Ue(e, n);
        }),
        (T.Na = function() {
          null != this.l &&
            ((this.l = null),
            this.a.cancel(),
            (this.a = null),
            tr(this),
            ge(19));
        }),
        (T.Ta = function(t) {
          ge(t ? 2 : 1);
        }),
        ((T = ar.prototype).na = function() {}),
        (T.ma = function() {}),
        (T.la = function() {}),
        (T.ka = function() {}),
        (T.Ha = function() {}),
        (hr.prototype.a = function(t, e) {
          return new cr(t, e);
        }),
        M(cr, Gt),
        ((T = cr.prototype).addEventListener = function(t, e, n, r) {
          cr.M.addEventListener.call(this, t, e, n, r);
        }),
        (T.removeEventListener = function(t, e, n, r) {
          cr.M.removeEventListener.call(this, t, e, n, r);
        }),
        (T.Ka = function() {
          (this.a.c = this.f), this.h && (this.a.w = !0);
          var t = this.a,
            e = this.l,
            n = this.b || void 0;
          ge(0),
            (t.P = e),
            (t.N = n || {}),
            (t.U = t.W),
            (t.v = sr(t, null, t.P)),
            Xn(t);
        }),
        (T.close = function() {
          Hn(this.a);
        }),
        (T.La = function(t) {
          if ('string' == typeof t) {
            var e = {};
            (e.__data__ = t), Kn(this.a, e);
          } else
            this.g
              ? (((e = {}).__data__ = zt(t)), Kn(this.a, e))
              : Kn(this.a, t);
        }),
        (T.C = function() {
          (this.a.c = null),
            delete this.f,
            Hn(this.a),
            delete this.a,
            cr.M.C.call(this);
        }),
        M(fr, Se),
        M(lr, De),
        M(pr, ar),
        (pr.prototype.na = function() {
          this.a.dispatchEvent('a');
        }),
        (pr.prototype.ma = function(t) {
          this.a.dispatchEvent(new fr(t));
        }),
        (pr.prototype.la = function(t) {
          this.a.dispatchEvent(new lr());
        }),
        (pr.prototype.ka = function() {
          this.a.dispatchEvent('b');
        }),
        (hr.prototype.createWebChannel = hr.prototype.a),
        (cr.prototype.send = cr.prototype.La),
        (cr.prototype.open = cr.prototype.Ka),
        (cr.prototype.close = cr.prototype.close),
        (be.NO_ERROR = 0),
        (be.TIMEOUT = 8),
        (be.HTTP_ERROR = 6),
        (Ee.COMPLETE = 'complete'),
        ((_e.EventType = Ae).OPEN = 'a'),
        (Ae.CLOSE = 'b'),
        (Ae.ERROR = 'c'),
        (Ae.MESSAGE = 'd'),
        (Gt.prototype.listen = Gt.prototype.ra),
        (Rn.prototype.listenOnce = Rn.prototype.sa),
        (Rn.prototype.getLastError = Rn.prototype.Ma),
        (Rn.prototype.getLastErrorCode = Rn.prototype.qa),
        (Rn.prototype.getStatus = Rn.prototype.S),
        (Rn.prototype.getResponseJson = Rn.prototype.Ja),
        (Rn.prototype.getResponseText = Rn.prototype.Y),
        (Rn.prototype.send = Rn.prototype.$);
      var dr = {
          createWebChannelTransport: function() {
            return new hr();
          },
          ErrorCode: be,
          EventType: Ee,
          WebChannel: _e,
          XhrIo: Rn,
        },
        yr = dr.createWebChannelTransport,
        vr = dr.ErrorCode,
        gr = dr.EventType,
        mr = dr.WebChannel,
        wr = dr.XhrIo,
        br =
          ((Er.prototype.setInstantiationMode = function(t) {
            return (this.instantiationMode = t), this;
          }),
          (Er.prototype.setMultipleInstances = function(t) {
            return (this.multipleInstances = t), this;
          }),
          (Er.prototype.setServiceProps = function(t) {
            return (this.serviceProps = t), this;
          }),
          Er);
      function Er(t, e, n) {
        (this.name = t),
          (this.instanceFactory = e),
          (this.type = n),
          (this.multipleInstances = !1),
          (this.serviceProps = {}),
          (this.instantiationMode = 'LAZY');
      }
      var Ir = ud.SDK_VERSION,
        Tr = new h('@firebase/firestore');
      function _r() {
        return Tr.logLevel;
      }
      function Nr(t) {
        for (var e = [], n = 1; n < arguments.length; n++)
          e[n - 1] = arguments[n];
        if (Tr.logLevel <= p.DEBUG) {
          var r = e.map(Sr);
          Tr.debug.apply(Tr, d(['Firestore (' + Ir + '): ' + t], r));
        }
      }
      function Ar(t) {
        for (var e = [], n = 1; n < arguments.length; n++)
          e[n - 1] = arguments[n];
        if (Tr.logLevel <= p.ERROR) {
          var r = e.map(Sr);
          Tr.error.apply(Tr, d(['Firestore (' + Ir + '): ' + t], r));
        }
      }
      function Sr(e) {
        if ('string' == typeof e) return e;
        try {
          return JSON.stringify(e);
        } catch (t) {
          return e;
        }
      }
      function Dr(t) {
        void 0 === t && (t = 'Unexpected state');
        var e = 'FIRESTORE (' + Ir + ') INTERNAL ASSERTION FAILED: ' + t;
        throw (Ar(e), new Error(e));
      }
      function Or(t) {
        t || Dr();
      }
      function xr(t) {
        return t;
      }
      function Pr(t) {
        var e = 'undefined' != typeof self && (self.crypto || self.msCrypto),
          n = new Uint8Array(t);
        if (e) e.getRandomValues(n);
        else for (var r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random());
        return n;
      }
      var Rr =
        ((kr.t = function() {
          for (
            var t =
                'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
              e = Math.floor(256 / t.length) * t.length,
              n = '';
            n.length < 20;

          )
            for (var r = Pr(40), i = 0; i < r.length; ++i)
              n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length));
          return n;
        }),
        kr);
      function kr() {}
      function Lr(t, e) {
        return t < e ? -1 : e < t ? 1 : 0;
      }
      function Ur(t, n, r) {
        return (
          t.length === n.length &&
          t.every(function(t, e) {
            return r(t, n[e]);
          })
        );
      }
      function Cr(t) {
        return t + '\0';
      }
      function Vr(t, e, n, r, i) {
        (this.s = t),
          (this.persistenceKey = e),
          (this.host = n),
          (this.ssl = r),
          (this.forceLongPolling = i);
      }
      var Mr =
        (Object.defineProperty(Fr.prototype, 'i', {
          get: function() {
            return '(default)' === this.database;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (Fr.prototype.isEqual = function(t) {
          return (
            t instanceof Fr &&
            t.projectId === this.projectId &&
            t.database === this.database
          );
        }),
        (Fr.prototype.o = function(t) {
          return (
            Lr(this.projectId, t.projectId) || Lr(this.database, t.database)
          );
        }),
        Fr);
      function Fr(t, e) {
        (this.projectId = t), (this.database = e || '(default)');
      }
      function qr(t) {
        var e = 0;
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
        return e;
      }
      function jr(t, e) {
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
      }
      function Br(t) {
        for (var e in t)
          if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
        return !0;
      }
      var Gr,
        Qr,
        zr =
          ((ri.prototype.get = function(t) {
            var e = this.h(t),
              n = this.l[e];
            if (void 0 !== n)
              for (var r = 0, i = n; r < i.length; r++) {
                var o = i[r],
                  s = o[0],
                  u = o[1];
                if (this.u(s, t)) return u;
              }
          }),
          (ri.prototype.has = function(t) {
            return void 0 !== this.get(t);
          }),
          (ri.prototype.set = function(t, e) {
            var n = this.h(t),
              r = this.l[n];
            if (void 0 !== r) {
              for (var i = 0; i < r.length; i++)
                if (this.u(r[i][0], t)) return void (r[i] = [t, e]);
              r.push([t, e]);
            } else this.l[n] = [[t, e]];
          }),
          (ri.prototype.delete = function(t) {
            var e = this.h(t),
              n = this.l[e];
            if (void 0 === n) return !1;
            for (var r = 0; r < n.length; r++)
              if (this.u(n[r][0], t))
                return 1 === n.length ? delete this.l[e] : n.splice(r, 1), !0;
            return !1;
          }),
          (ri.prototype.forEach = function(u) {
            jr(this.l, function(t, e) {
              for (var n = 0, r = e; n < r.length; n++) {
                var i = r[n],
                  o = i[0],
                  s = i[1];
                u(o, s);
              }
            });
          }),
          (ri.prototype._ = function() {
            return Br(this.l);
          }),
          ri),
        Hr = {
          OK: 'ok',
          CANCELLED: 'cancelled',
          UNKNOWN: 'unknown',
          INVALID_ARGUMENT: 'invalid-argument',
          DEADLINE_EXCEEDED: 'deadline-exceeded',
          NOT_FOUND: 'not-found',
          ALREADY_EXISTS: 'already-exists',
          PERMISSION_DENIED: 'permission-denied',
          UNAUTHENTICATED: 'unauthenticated',
          RESOURCE_EXHAUSTED: 'resource-exhausted',
          FAILED_PRECONDITION: 'failed-precondition',
          ABORTED: 'aborted',
          OUT_OF_RANGE: 'out-of-range',
          UNIMPLEMENTED: 'unimplemented',
          INTERNAL: 'internal',
          UNAVAILABLE: 'unavailable',
          DATA_LOSS: 'data-loss',
        },
        Wr = (n(ni, (Qr = Error)), ni),
        Kr =
          ((ei.now = function() {
            return ei.fromMillis(Date.now());
          }),
          (ei.fromDate = function(t) {
            return ei.fromMillis(t.getTime());
          }),
          (ei.fromMillis = function(t) {
            var e = Math.floor(t / 1e3);
            return new ei(e, 1e6 * (t - 1e3 * e));
          }),
          (ei.prototype.toDate = function() {
            return new Date(this.toMillis());
          }),
          (ei.prototype.toMillis = function() {
            return 1e3 * this.seconds + this.nanoseconds / 1e6;
          }),
          (ei.prototype.T = function(t) {
            return this.seconds === t.seconds
              ? Lr(this.nanoseconds, t.nanoseconds)
              : Lr(this.seconds, t.seconds);
          }),
          (ei.prototype.isEqual = function(t) {
            return (
              t.seconds === this.seconds && t.nanoseconds === this.nanoseconds
            );
          }),
          (ei.prototype.toString = function() {
            return (
              'Timestamp(seconds=' +
              this.seconds +
              ', nanoseconds=' +
              this.nanoseconds +
              ')'
            );
          }),
          (ei.prototype.valueOf = function() {
            var t = this.seconds - -62135596800;
            return (
              String(t).padStart(12, '0') +
              '.' +
              String(this.nanoseconds).padStart(9, '0')
            );
          }),
          ei),
        Xr =
          ((ti.I = function(t) {
            return new ti(t);
          }),
          (ti.min = function() {
            return new ti(new Kr(0, 0));
          }),
          (ti.prototype.o = function(t) {
            return this.timestamp.T(t.timestamp);
          }),
          (ti.prototype.isEqual = function(t) {
            return this.timestamp.isEqual(t.timestamp);
          }),
          (ti.prototype.A = function() {
            return (
              1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
            );
          }),
          (ti.prototype.toString = function() {
            return 'SnapshotVersion(' + this.timestamp.toString() + ')';
          }),
          (ti.prototype.R = function() {
            return this.timestamp;
          }),
          ti),
        Yr =
          (Object.defineProperty(Zr.prototype, 'length', {
            get: function() {
              return this.m;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (Zr.prototype.isEqual = function(t) {
            return 0 === Zr.P(this, t);
          }),
          (Zr.prototype.child = function(t) {
            var e = this.segments.slice(this.offset, this.limit());
            return (
              t instanceof Zr
                ? t.forEach(function(t) {
                    e.push(t);
                  })
                : e.push(t),
              this.V(e)
            );
          }),
          (Zr.prototype.limit = function() {
            return this.offset + this.length;
          }),
          (Zr.prototype.g = function(t) {
            return (
              (t = void 0 === t ? 1 : t),
              this.V(this.segments, this.offset + t, this.length - t)
            );
          }),
          (Zr.prototype.p = function() {
            return this.V(this.segments, this.offset, this.length - 1);
          }),
          (Zr.prototype.v = function() {
            return this.segments[this.offset];
          }),
          (Zr.prototype.S = function() {
            return this.get(this.length - 1);
          }),
          (Zr.prototype.get = function(t) {
            return this.segments[this.offset + t];
          }),
          (Zr.prototype._ = function() {
            return 0 === this.length;
          }),
          (Zr.prototype.D = function(t) {
            if (t.length < this.length) return !1;
            for (var e = 0; e < this.length; e++)
              if (this.get(e) !== t.get(e)) return !1;
            return !0;
          }),
          (Zr.prototype.C = function(t) {
            if (this.length + 1 !== t.length) return !1;
            for (var e = 0; e < this.length; e++)
              if (this.get(e) !== t.get(e)) return !1;
            return !0;
          }),
          (Zr.prototype.forEach = function(t) {
            for (var e = this.offset, n = this.limit(); e < n; e++)
              t(this.segments[e]);
          }),
          (Zr.prototype.F = function() {
            return this.segments.slice(this.offset, this.limit());
          }),
          (Zr.P = function(t, e) {
            for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
              var i = t.get(r),
                o = e.get(r);
              if (i < o) return -1;
              if (o < i) return 1;
            }
            return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
          }),
          Zr),
        $r =
          (n(Jr, (Gr = Yr)),
          (Jr.prototype.V = function(t, e, n) {
            return new Jr(t, e, n);
          }),
          (Jr.prototype.N = function() {
            return this.F().join('/');
          }),
          (Jr.prototype.toString = function() {
            return this.N();
          }),
          (Jr.$ = function(t) {
            if (0 <= t.indexOf('//'))
              throw new Wr(
                Hr.INVALID_ARGUMENT,
                'Invalid path (' + t + '). Paths must not contain // in them.',
              );
            return new Jr(
              t.split('/').filter(function(t) {
                return 0 < t.length;
              }),
            );
          }),
          Jr);
      function Jr() {
        return (null !== Gr && Gr.apply(this, arguments)) || this;
      }
      function Zr(t, e, n) {
        void 0 === e ? (e = 0) : e > t.length && Dr(),
          void 0 === n ? (n = t.length - e) : n > t.length - e && Dr(),
          (this.segments = t),
          (this.offset = e),
          (this.m = n);
      }
      function ti(t) {
        this.timestamp = t;
      }
      function ei(t, e) {
        if (((this.seconds = t), (this.nanoseconds = e) < 0))
          throw new Wr(
            Hr.INVALID_ARGUMENT,
            'Timestamp nanoseconds out of range: ' + e,
          );
        if (1e9 <= e)
          throw new Wr(
            Hr.INVALID_ARGUMENT,
            'Timestamp nanoseconds out of range: ' + e,
          );
        if (t < -62135596800)
          throw new Wr(
            Hr.INVALID_ARGUMENT,
            'Timestamp seconds out of range: ' + t,
          );
        if (253402300800 <= t)
          throw new Wr(
            Hr.INVALID_ARGUMENT,
            'Timestamp seconds out of range: ' + t,
          );
      }
      function ni(t, e) {
        var n = this;
        return (
          ((n = Qr.call(this, e) || this).code = t),
          (n.message = e),
          (n.name = 'FirebaseError'),
          (n.toString = function() {
            return n.name + ': [code=' + n.code + ']: ' + n.message;
          }),
          n
        );
      }
      function ri(t, e) {
        (this.h = t), (this.u = e), (this.l = {});
      }
      $r.k = new $r([]);
      var ii,
        oi = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
        si =
          (n(ui, (ii = Yr)),
          (ui.prototype.V = function(t, e, n) {
            return new ui(t, e, n);
          }),
          (ui.M = function(t) {
            return oi.test(t);
          }),
          (ui.prototype.N = function() {
            return this.F()
              .map(function(t) {
                return (
                  (t = t.replace('\\', '\\\\').replace('`', '\\`')),
                  ui.M(t) || (t = '`' + t + '`'),
                  t
                );
              })
              .join('.');
          }),
          (ui.prototype.toString = function() {
            return this.N();
          }),
          (ui.prototype.L = function() {
            return 1 === this.length && '__name__' === this.get(0);
          }),
          (ui.O = function() {
            return new ui(['__name__']);
          }),
          (ui.B = function(t) {
            for (
              var e = [],
                n = '',
                r = 0,
                i = function() {
                  if (0 === n.length)
                    throw new Wr(
                      Hr.INVALID_ARGUMENT,
                      'Invalid field path (' +
                        t +
                        "). Paths must not be empty, begin with '.', end with '.', or contain '..'",
                    );
                  e.push(n), (n = '');
                },
                o = !1;
              r < t.length;

            ) {
              var s = t[r];
              if ('\\' === s) {
                if (r + 1 === t.length)
                  throw new Wr(
                    Hr.INVALID_ARGUMENT,
                    'Path has trailing escape character: ' + t,
                  );
                var u = t[r + 1];
                if ('\\' !== u && '.' !== u && '`' !== u)
                  throw new Wr(
                    Hr.INVALID_ARGUMENT,
                    'Path has invalid escape sequence: ' + t,
                  );
                (n += u), (r += 2);
              } else
                '`' === s ? (o = !o) : '.' !== s || o ? (n += s) : i(), r++;
            }
            if ((i(), o))
              throw new Wr(Hr.INVALID_ARGUMENT, 'Unterminated ` in path: ' + t);
            return new ui(e);
          }),
          ui);
      function ui() {
        return (null !== ii && ii.apply(this, arguments)) || this;
      }
      si.k = new si([]);
      var ai =
        ((hi.q = function(t) {
          return new hi($r.$(t).g(5));
        }),
        (hi.prototype.U = function(t) {
          return (
            2 <= this.path.length && this.path.get(this.path.length - 2) === t
          );
        }),
        (hi.prototype.isEqual = function(t) {
          return null !== t && 0 === $r.P(this.path, t.path);
        }),
        (hi.prototype.toString = function() {
          return this.path.toString();
        }),
        (hi.P = function(t, e) {
          return $r.P(t.path, e.path);
        }),
        (hi.W = function(t) {
          return t.length % 2 == 0;
        }),
        (hi.j = function(t) {
          return new hi(new $r(t.slice()));
        }),
        hi);
      function hi(t) {
        this.path = t;
      }
      function ci(t) {
        return null == t;
      }
      function fi(t) {
        return -0 === t && 1 / t == -1 / 0;
      }
      function li(t) {
        return (
          'number' == typeof t &&
          Number.isInteger(t) &&
          !fi(t) &&
          t <= Number.MAX_SAFE_INTEGER &&
          t >= Number.MIN_SAFE_INTEGER
        );
      }
      ai.EMPTY = new ai(new $r([]));
      var pi =
        ((di.fromBase64String = function(t) {
          return new di(atob(t));
        }),
        (di.fromUint8Array = function(t) {
          return new di(
            (function(t) {
              for (var e = '', n = 0; n < t.length; ++n)
                e += String.fromCharCode(t[n]);
              return e;
            })(t),
          );
        }),
        (di.prototype.toBase64 = function() {
          return (t = this.K), btoa(t);
          var t;
        }),
        (di.prototype.toUint8Array = function() {
          return (function(t) {
            for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++)
              e[n] = t.charCodeAt(n);
            return e;
          })(this.K);
        }),
        (di.prototype.G = function() {
          return 2 * this.K.length;
        }),
        (di.prototype.o = function(t) {
          return Lr(this.K, t.K);
        }),
        (di.prototype.isEqual = function(t) {
          return this.K === t.K;
        }),
        di);
      function di(t) {
        this.K = t;
      }
      pi.H = new pi('');
      function yi(t) {
        this.count = t;
      }
      var vi,
        gi,
        mi =
          ((wi.prototype.X = function(t) {
            return new wi(
              this.target,
              this.targetId,
              this.Y,
              t,
              this.J,
              this.lastLimboFreeSnapshotVersion,
              this.resumeToken,
            );
          }),
          (wi.prototype.Z = function(t, e) {
            return new wi(
              this.target,
              this.targetId,
              this.Y,
              this.sequenceNumber,
              e,
              this.lastLimboFreeSnapshotVersion,
              t,
            );
          }),
          (wi.prototype.tt = function(t) {
            return new wi(
              this.target,
              this.targetId,
              this.Y,
              this.sequenceNumber,
              this.J,
              t,
              this.resumeToken,
            );
          }),
          wi);
      function wi(t, e, n, r, i, o, s) {
        void 0 === i && (i = Xr.min()),
          void 0 === o && (o = Xr.min()),
          void 0 === s && (s = pi.H),
          (this.target = t),
          (this.targetId = e),
          (this.Y = n),
          (this.sequenceNumber = r),
          (this.J = i),
          (this.lastLimboFreeSnapshotVersion = o),
          (this.resumeToken = s);
      }
      function bi(t) {
        switch (t) {
          case Hr.OK:
            return Dr();
          case Hr.CANCELLED:
          case Hr.UNKNOWN:
          case Hr.DEADLINE_EXCEEDED:
          case Hr.RESOURCE_EXHAUSTED:
          case Hr.INTERNAL:
          case Hr.UNAVAILABLE:
          case Hr.UNAUTHENTICATED:
            return;
          case Hr.INVALID_ARGUMENT:
          case Hr.NOT_FOUND:
          case Hr.ALREADY_EXISTS:
          case Hr.PERMISSION_DENIED:
          case Hr.FAILED_PRECONDITION:
          case Hr.ABORTED:
          case Hr.OUT_OF_RANGE:
          case Hr.UNIMPLEMENTED:
          case Hr.DATA_LOSS:
            return 1;
          default:
            return Dr();
        }
      }
      function Ei(t) {
        if (void 0 === t) return Ar('GRPC error has no .code'), Hr.UNKNOWN;
        switch (t) {
          case vi.OK:
            return Hr.OK;
          case vi.CANCELLED:
            return Hr.CANCELLED;
          case vi.UNKNOWN:
            return Hr.UNKNOWN;
          case vi.DEADLINE_EXCEEDED:
            return Hr.DEADLINE_EXCEEDED;
          case vi.RESOURCE_EXHAUSTED:
            return Hr.RESOURCE_EXHAUSTED;
          case vi.INTERNAL:
            return Hr.INTERNAL;
          case vi.UNAVAILABLE:
            return Hr.UNAVAILABLE;
          case vi.UNAUTHENTICATED:
            return Hr.UNAUTHENTICATED;
          case vi.INVALID_ARGUMENT:
            return Hr.INVALID_ARGUMENT;
          case vi.NOT_FOUND:
            return Hr.NOT_FOUND;
          case vi.ALREADY_EXISTS:
            return Hr.ALREADY_EXISTS;
          case vi.PERMISSION_DENIED:
            return Hr.PERMISSION_DENIED;
          case vi.FAILED_PRECONDITION:
            return Hr.FAILED_PRECONDITION;
          case vi.ABORTED:
            return Hr.ABORTED;
          case vi.OUT_OF_RANGE:
            return Hr.OUT_OF_RANGE;
          case vi.UNIMPLEMENTED:
            return Hr.UNIMPLEMENTED;
          case vi.DATA_LOSS:
            return Hr.DATA_LOSS;
          default:
            return Dr();
        }
      }
      ((gi = vi = vi || {})[(gi.OK = 0)] = 'OK'),
        (gi[(gi.CANCELLED = 1)] = 'CANCELLED'),
        (gi[(gi.UNKNOWN = 2)] = 'UNKNOWN'),
        (gi[(gi.INVALID_ARGUMENT = 3)] = 'INVALID_ARGUMENT'),
        (gi[(gi.DEADLINE_EXCEEDED = 4)] = 'DEADLINE_EXCEEDED'),
        (gi[(gi.NOT_FOUND = 5)] = 'NOT_FOUND'),
        (gi[(gi.ALREADY_EXISTS = 6)] = 'ALREADY_EXISTS'),
        (gi[(gi.PERMISSION_DENIED = 7)] = 'PERMISSION_DENIED'),
        (gi[(gi.UNAUTHENTICATED = 16)] = 'UNAUTHENTICATED'),
        (gi[(gi.RESOURCE_EXHAUSTED = 8)] = 'RESOURCE_EXHAUSTED'),
        (gi[(gi.FAILED_PRECONDITION = 9)] = 'FAILED_PRECONDITION'),
        (gi[(gi.ABORTED = 10)] = 'ABORTED'),
        (gi[(gi.OUT_OF_RANGE = 11)] = 'OUT_OF_RANGE'),
        (gi[(gi.UNIMPLEMENTED = 12)] = 'UNIMPLEMENTED'),
        (gi[(gi.INTERNAL = 13)] = 'INTERNAL'),
        (gi[(gi.UNAVAILABLE = 14)] = 'UNAVAILABLE'),
        (gi[(gi.DATA_LOSS = 15)] = 'DATA_LOSS');
      var Ii =
          ((Si.prototype.et = function(t, e) {
            return new Si(
              this.P,
              this.root.et(t, e, this.P).st(null, null, _i.nt, null, null),
            );
          }),
          (Si.prototype.remove = function(t) {
            return new Si(
              this.P,
              this.root.remove(t, this.P).st(null, null, _i.nt, null, null),
            );
          }),
          (Si.prototype.get = function(t) {
            for (var e = this.root; !e._(); ) {
              var n = this.P(t, e.key);
              if (0 === n) return e.value;
              n < 0 ? (e = e.left) : 0 < n && (e = e.right);
            }
            return null;
          }),
          (Si.prototype.indexOf = function(t) {
            for (var e = 0, n = this.root; !n._(); ) {
              var r = this.P(t, n.key);
              if (0 === r) return e + n.left.size;
              n = r < 0 ? n.left : ((e += n.left.size + 1), n.right);
            }
            return -1;
          }),
          (Si.prototype._ = function() {
            return this.root._();
          }),
          Object.defineProperty(Si.prototype, 'size', {
            get: function() {
              return this.root.size;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (Si.prototype.it = function() {
            return this.root.it();
          }),
          (Si.prototype.rt = function() {
            return this.root.rt();
          }),
          (Si.prototype.ot = function(t) {
            return this.root.ot(t);
          }),
          (Si.prototype.forEach = function(n) {
            this.ot(function(t, e) {
              return n(t, e), !1;
            });
          }),
          (Si.prototype.toString = function() {
            var n = [];
            return (
              this.ot(function(t, e) {
                return n.push(t + ':' + e), !1;
              }),
              '{' + n.join(', ') + '}'
            );
          }),
          (Si.prototype.ht = function(t) {
            return this.root.ht(t);
          }),
          (Si.prototype.at = function() {
            return new Ti(this.root, null, this.P, !1);
          }),
          (Si.prototype.ut = function(t) {
            return new Ti(this.root, t, this.P, !1);
          }),
          (Si.prototype.ct = function() {
            return new Ti(this.root, null, this.P, !0);
          }),
          (Si.prototype.lt = function(t) {
            return new Ti(this.root, t, this.P, !0);
          }),
          Si),
        Ti =
          ((Ai.prototype.dt = function() {
            var t = this.ft.pop(),
              e = { key: t.key, value: t.value };
            if (this._t)
              for (t = t.left; !t._(); ) this.ft.push(t), (t = t.right);
            else for (t = t.right; !t._(); ) this.ft.push(t), (t = t.left);
            return e;
          }),
          (Ai.prototype.wt = function() {
            return 0 < this.ft.length;
          }),
          (Ai.prototype.Tt = function() {
            if (0 === this.ft.length) return null;
            var t = this.ft[this.ft.length - 1];
            return { key: t.key, value: t.value };
          }),
          Ai),
        _i =
          ((Ni.prototype.st = function(t, e, n, r, i) {
            return new Ni(
              null != t ? t : this.key,
              null != e ? e : this.value,
              null != n ? n : this.color,
              null != r ? r : this.left,
              null != i ? i : this.right,
            );
          }),
          (Ni.prototype._ = function() {
            return !1;
          }),
          (Ni.prototype.ot = function(t) {
            return (
              this.left.ot(t) || t(this.key, this.value) || this.right.ot(t)
            );
          }),
          (Ni.prototype.ht = function(t) {
            return (
              this.right.ht(t) || t(this.key, this.value) || this.left.ht(t)
            );
          }),
          (Ni.prototype.min = function() {
            return this.left._() ? this : this.left.min();
          }),
          (Ni.prototype.it = function() {
            return this.min().key;
          }),
          (Ni.prototype.rt = function() {
            return this.right._() ? this.key : this.right.rt();
          }),
          (Ni.prototype.et = function(t, e, n) {
            var r = this,
              i = n(t, r.key);
            return (r =
              i < 0
                ? r.st(null, null, null, r.left.et(t, e, n), null)
                : 0 === i
                ? r.st(null, e, null, null, null)
                : r.st(null, null, null, null, r.right.et(t, e, n))).Et();
          }),
          (Ni.prototype.It = function() {
            if (this.left._()) return Ni.EMPTY;
            var t = this;
            return (
              t.left.At() || t.left.left.At() || (t = t.Rt()),
              (t = t.st(null, null, null, t.left.It(), null)).Et()
            );
          }),
          (Ni.prototype.remove = function(t, e) {
            var n,
              r = this;
            if (e(t, r.key) < 0)
              r.left._() || r.left.At() || r.left.left.At() || (r = r.Rt()),
                (r = r.st(null, null, null, r.left.remove(t, e), null));
            else {
              if (
                (r.left.At() && (r = r.Pt()),
                r.right._() ||
                  r.right.At() ||
                  r.right.left.At() ||
                  (r = r.Vt()),
                0 === e(t, r.key))
              ) {
                if (r.right._()) return Ni.EMPTY;
                (n = r.right.min()),
                  (r = r.st(n.key, n.value, null, null, r.right.It()));
              }
              r = r.st(null, null, null, null, r.right.remove(t, e));
            }
            return r.Et();
          }),
          (Ni.prototype.At = function() {
            return this.color;
          }),
          (Ni.prototype.Et = function() {
            var t = this;
            return (
              t.right.At() && !t.left.At() && (t = t.gt()),
              t.left.At() && t.left.left.At() && (t = t.Pt()),
              t.left.At() && t.right.At() && (t = t.pt()),
              t
            );
          }),
          (Ni.prototype.Rt = function() {
            var t = this.pt();
            return (
              t.right.left.At() &&
                (t = (t = (t = t.st(
                  null,
                  null,
                  null,
                  null,
                  t.right.Pt(),
                )).gt()).pt()),
              t
            );
          }),
          (Ni.prototype.Vt = function() {
            var t = this.pt();
            return t.left.left.At() && (t = (t = t.Pt()).pt()), t;
          }),
          (Ni.prototype.gt = function() {
            var t = this.st(null, null, Ni.RED, null, this.right.left);
            return this.right.st(null, null, this.color, t, null);
          }),
          (Ni.prototype.Pt = function() {
            var t = this.st(null, null, Ni.RED, this.left.right, null);
            return this.left.st(null, null, this.color, null, t);
          }),
          (Ni.prototype.pt = function() {
            var t = this.left.st(null, null, !this.left.color, null, null),
              e = this.right.st(null, null, !this.right.color, null, null);
            return this.st(null, null, !this.color, t, e);
          }),
          (Ni.prototype.yt = function() {
            var t = this.bt();
            return Math.pow(2, t) <= this.size + 1;
          }),
          (Ni.prototype.bt = function() {
            if (this.At() && this.left.At()) throw Dr();
            if (this.right.At()) throw Dr();
            var t = this.left.bt();
            if (t !== this.right.bt()) throw Dr();
            return t + (this.At() ? 0 : 1);
          }),
          Ni);
      function Ni(t, e, n, r, i) {
        (this.key = t),
          (this.value = e),
          (this.color = null != n ? n : Ni.RED),
          (this.left = null != r ? r : Ni.EMPTY),
          (this.right = null != i ? i : Ni.EMPTY),
          (this.size = this.left.size + 1 + this.right.size);
      }
      function Ai(t, e, n, r) {
        (this._t = r), (this.ft = []);
        for (var i = 1; !t._(); )
          if (((i = e ? n(t.key, e) : 1), r && (i *= -1), i < 0))
            t = this._t ? t.left : t.right;
          else {
            if (0 === i) {
              this.ft.push(t);
              break;
            }
            this.ft.push(t), (t = this._t ? t.right : t.left);
          }
      }
      function Si(t, e) {
        (this.P = t), (this.root = e || _i.EMPTY);
      }
      function Di() {
        this.size = 0;
      }
      (_i.EMPTY = null),
        (_i.RED = !0),
        (_i.nt = !1),
        (_i.EMPTY =
          (Object.defineProperty(Di.prototype, 'key', {
            get: function() {
              throw Dr();
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(Di.prototype, 'value', {
            get: function() {
              throw Dr();
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(Di.prototype, 'color', {
            get: function() {
              throw Dr();
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(Di.prototype, 'left', {
            get: function() {
              throw Dr();
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(Di.prototype, 'right', {
            get: function() {
              throw Dr();
            },
            enumerable: !0,
            configurable: !0,
          }),
          (Di.prototype.st = function(t, e, n, r, i) {
            return this;
          }),
          (Di.prototype.et = function(t, e, n) {
            return new _i(t, e);
          }),
          (Di.prototype.remove = function(t, e) {
            return this;
          }),
          (Di.prototype._ = function() {
            return !0;
          }),
          (Di.prototype.ot = function(t) {
            return !1;
          }),
          (Di.prototype.ht = function(t) {
            return !1;
          }),
          (Di.prototype.it = function() {
            return null;
          }),
          (Di.prototype.rt = function() {
            return null;
          }),
          (Di.prototype.At = function() {
            return !1;
          }),
          (Di.prototype.yt = function() {
            return !0;
          }),
          (Di.prototype.bt = function() {
            return 0;
          }),
          new Di()));
      var Oi =
          ((ki.prototype.has = function(t) {
            return null !== this.data.get(t);
          }),
          (ki.prototype.first = function() {
            return this.data.it();
          }),
          (ki.prototype.last = function() {
            return this.data.rt();
          }),
          Object.defineProperty(ki.prototype, 'size', {
            get: function() {
              return this.data.size;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (ki.prototype.indexOf = function(t) {
            return this.data.indexOf(t);
          }),
          (ki.prototype.forEach = function(n) {
            this.data.ot(function(t, e) {
              return n(t), !1;
            });
          }),
          (ki.prototype.vt = function(t, e) {
            for (var n = this.data.ut(t[0]); n.wt(); ) {
              var r = n.dt();
              if (0 <= this.P(r.key, t[1])) return;
              e(r.key);
            }
          }),
          (ki.prototype.St = function(t, e) {
            var n;
            for (n = void 0 !== e ? this.data.ut(e) : this.data.at(); n.wt(); )
              if (!t(n.dt().key)) return;
          }),
          (ki.prototype.Dt = function(t) {
            var e = this.data.ut(t);
            return e.wt() ? e.dt().key : null;
          }),
          (ki.prototype.at = function() {
            return new xi(this.data.at());
          }),
          (ki.prototype.ut = function(t) {
            return new xi(this.data.ut(t));
          }),
          (ki.prototype.add = function(t) {
            return this.st(this.data.remove(t).et(t, !0));
          }),
          (ki.prototype.delete = function(t) {
            return this.has(t) ? this.st(this.data.remove(t)) : this;
          }),
          (ki.prototype._ = function() {
            return this.data._();
          }),
          (ki.prototype.Ct = function(t) {
            var e = this;
            return (
              e.size < t.size && ((e = t), (t = this)),
              t.forEach(function(t) {
                e = e.add(t);
              }),
              e
            );
          }),
          (ki.prototype.isEqual = function(t) {
            if (!(t instanceof ki)) return !1;
            if (this.size !== t.size) return !1;
            for (var e = this.data.at(), n = t.data.at(); e.wt(); ) {
              var r = e.dt().key,
                i = n.dt().key;
              if (0 !== this.P(r, i)) return !1;
            }
            return !0;
          }),
          (ki.prototype.F = function() {
            var e = [];
            return (
              this.forEach(function(t) {
                e.push(t);
              }),
              e
            );
          }),
          (ki.prototype.toString = function() {
            var e = [];
            return (
              this.forEach(function(t) {
                return e.push(t);
              }),
              'SortedSet(' + e.toString() + ')'
            );
          }),
          (ki.prototype.st = function(t) {
            var e = new ki(this.P);
            return (e.data = t), e;
          }),
          ki),
        xi =
          ((Ri.prototype.dt = function() {
            return this.Ft.dt().key;
          }),
          (Ri.prototype.wt = function() {
            return this.Ft.wt();
          }),
          Ri),
        Pi = new Ii(ai.P);
      function Ri(t) {
        this.Ft = t;
      }
      function ki(t) {
        (this.P = t), (this.data = new Ii(this.P));
      }
      function Li() {
        return Pi;
      }
      function Ui() {
        return Li();
      }
      var Ci = new Ii(ai.P);
      function Vi() {
        return Ci;
      }
      var Mi = new Ii(ai.P),
        Fi = new Oi(ai.P);
      function qi() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        for (var n = Fi, r = 0, i = t; r < i.length; r++) {
          var o = i[r];
          n = n.add(o);
        }
        return n;
      }
      var ji = new Oi(Lr);
      function Bi() {
        return ji;
      }
      function Gi(t, e, n, r) {
        (this.Zt = t),
          (this.removedTargetIds = e),
          (this.key = n),
          (this.te = r);
      }
      function Qi(t, e) {
        (this.targetId = t), (this.ee = e);
      }
      function zi(t, e, n, r) {
        void 0 === n && (n = pi.H),
          void 0 === r && (r = null),
          (this.state = t),
          (this.targetIds = e),
          (this.resumeToken = n),
          (this.cause = r);
      }
      var Hi =
          ((oo.kt = function(t) {
            return new oo(t.P);
          }),
          (oo.prototype.has = function(t) {
            return null != this.Nt.get(t);
          }),
          (oo.prototype.get = function(t) {
            return this.Nt.get(t);
          }),
          (oo.prototype.first = function() {
            return this.$t.it();
          }),
          (oo.prototype.last = function() {
            return this.$t.rt();
          }),
          (oo.prototype._ = function() {
            return this.$t._();
          }),
          (oo.prototype.indexOf = function(t) {
            var e = this.Nt.get(t);
            return e ? this.$t.indexOf(e) : -1;
          }),
          Object.defineProperty(oo.prototype, 'size', {
            get: function() {
              return this.$t.size;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (oo.prototype.forEach = function(n) {
            this.$t.ot(function(t, e) {
              return n(t), !1;
            });
          }),
          (oo.prototype.add = function(t) {
            var e = this.delete(t.key);
            return e.st(e.Nt.et(t.key, t), e.$t.et(t, null));
          }),
          (oo.prototype.delete = function(t) {
            var e = this.get(t);
            return e ? this.st(this.Nt.remove(t), this.$t.remove(e)) : this;
          }),
          (oo.prototype.isEqual = function(t) {
            if (!(t instanceof oo)) return !1;
            if (this.size !== t.size) return !1;
            for (var e = this.$t.at(), n = t.$t.at(); e.wt(); ) {
              var r = e.dt().key,
                i = n.dt().key;
              if (!r.isEqual(i)) return !1;
            }
            return !0;
          }),
          (oo.prototype.toString = function() {
            var e = [];
            return (
              this.forEach(function(t) {
                e.push(t.toString());
              }),
              0 === e.length
                ? 'DocumentSet ()'
                : 'DocumentSet (\n  ' + e.join('  \n') + '\n)'
            );
          }),
          (oo.prototype.st = function(t, e) {
            var n = new oo();
            return (n.P = this.P), (n.Nt = t), (n.$t = e), n;
          }),
          oo),
        Wi =
          ((io.prototype.track = function(t) {
            var e = t.doc.key,
              n = this.xt.get(e);
            !n || (0 !== t.type && 3 === n.type)
              ? (this.xt = this.xt.et(e, t))
              : 3 === t.type && 1 !== n.type
              ? (this.xt = this.xt.et(e, { type: n.type, doc: t.doc }))
              : 2 === t.type && 2 === n.type
              ? (this.xt = this.xt.et(e, { type: 2, doc: t.doc }))
              : 2 === t.type && 0 === n.type
              ? (this.xt = this.xt.et(e, { type: 0, doc: t.doc }))
              : 1 === t.type && 0 === n.type
              ? (this.xt = this.xt.remove(e))
              : 1 === t.type && 2 === n.type
              ? (this.xt = this.xt.et(e, { type: 1, doc: n.doc }))
              : 0 === t.type && 1 === n.type
              ? (this.xt = this.xt.et(e, { type: 2, doc: t.doc }))
              : Dr();
          }),
          (io.prototype.Mt = function() {
            var n = [];
            return (
              this.xt.ot(function(t, e) {
                n.push(e);
              }),
              n
            );
          }),
          io),
        Ki =
          ((ro.Ut = function(t, e, n, r) {
            var i = [];
            return (
              e.forEach(function(t) {
                i.push({ type: 0, doc: t });
              }),
              new ro(t, e, Hi.kt(e), i, n, r, !0, !1)
            );
          }),
          Object.defineProperty(ro.prototype, 'hasPendingWrites', {
            get: function() {
              return !this.Ot._();
            },
            enumerable: !0,
            configurable: !0,
          }),
          (ro.prototype.isEqual = function(t) {
            if (
              !(
                this.fromCache === t.fromCache &&
                this.Bt === t.Bt &&
                this.Ot.isEqual(t.Ot) &&
                this.query.isEqual(t.query) &&
                this.docs.isEqual(t.docs) &&
                this.Lt.isEqual(t.Lt)
              )
            )
              return !1;
            var e = this.docChanges,
              n = t.docChanges;
            if (e.length !== n.length) return !1;
            for (var r = 0; r < e.length; r++)
              if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc))
                return !1;
            return !0;
          }),
          ro),
        Xi =
          ((no.Gt = function(t, e) {
            var n = new Map();
            return n.set(t, Yi.zt(t, e)), new no(Xr.min(), n, Bi(), Li(), qi());
          }),
          no),
        Yi =
          ((eo.zt = function(t, e) {
            return new eo(pi.H, e, qi(), qi(), qi());
          }),
          eo),
        $i =
          (Object.defineProperty(to.prototype, 'Ht', {
            get: function() {
              return this.re;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(to.prototype, 'resumeToken', {
            get: function() {
              return this.ie;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(to.prototype, 'he', {
            get: function() {
              return 0 !== this.se;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(to.prototype, 'ae', {
            get: function() {
              return this.oe;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (to.prototype.ue = function(t) {
            0 < t.G() && ((this.oe = !0), (this.ie = t));
          }),
          (to.prototype.ce = function() {
            var n = qi(),
              r = qi(),
              i = qi();
            return (
              this.ne.forEach(function(t, e) {
                switch (e) {
                  case 0:
                    n = n.add(t);
                    break;
                  case 2:
                    r = r.add(t);
                    break;
                  case 1:
                    i = i.add(t);
                    break;
                  default:
                    Dr();
                }
              }),
              new Yi(this.ie, this.re, n, r, i)
            );
          }),
          (to.prototype.le = function() {
            (this.oe = !1), (this.ne = uo());
          }),
          (to.prototype._e = function(t, e) {
            (this.oe = !0), (this.ne = this.ne.et(t, e));
          }),
          (to.prototype.fe = function(t) {
            (this.oe = !0), (this.ne = this.ne.remove(t));
          }),
          (to.prototype.de = function() {
            this.se += 1;
          }),
          (to.prototype.we = function() {
            --this.se;
          }),
          (to.prototype.Te = function() {
            (this.oe = !0), (this.re = !0);
          }),
          to),
        Ji =
          ((Zi.prototype.Pe = function(t) {
            for (var e = 0, n = t.Zt; e < n.length; e++) {
              var r = n[e];
              t.te instanceof Ks
                ? this.Ve(r, t.te)
                : t.te instanceof Xs && this.ge(r, t.key, t.te);
            }
            for (var i = 0, o = t.removedTargetIds; i < o.length; i++) {
              var s = o[i];
              this.ge(s, t.key, t.te);
            }
          }),
          (Zi.prototype.pe = function(n) {
            var r = this;
            this.ye(n, function(t) {
              var e = r.be(t);
              switch (n.state) {
                case 0:
                  r.ve(t) && e.ue(n.resumeToken);
                  break;
                case 1:
                  e.we(), e.he || e.le(), e.ue(n.resumeToken);
                  break;
                case 2:
                  e.we(), e.he || r.removeTarget(t);
                  break;
                case 3:
                  r.ve(t) && (e.Te(), e.ue(n.resumeToken));
                  break;
                case 4:
                  r.ve(t) && (r.Se(t), e.ue(n.resumeToken));
                  break;
                default:
                  Dr();
              }
            });
          }),
          (Zi.prototype.ye = function(t, n) {
            var r = this;
            0 < t.targetIds.length
              ? t.targetIds.forEach(n)
              : this.Ie.forEach(function(t, e) {
                  r.ve(e) && n(e);
                });
          }),
          (Zi.prototype.De = function(t) {
            var e = t.targetId,
              n = t.ee.count,
              r = this.Ce(e);
            if (r) {
              var i = r.target;
              if (Au(i))
                if (0 === n) {
                  var o = new ai(i.path);
                  this.ge(e, o, new Xs(o, Xr.min()));
                } else Or(1 === n);
              else this.Fe(e) !== n && (this.Se(e), (this.me = this.me.add(e)));
            }
          }),
          (Zi.prototype.Ne = function(i) {
            var o = this,
              s = new Map();
            this.Ie.forEach(function(t, e) {
              var n = o.Ce(e);
              if (n) {
                if (t.Ht && Au(n.target)) {
                  var r = new ai(n.target.path);
                  null !== o.Ae.get(r) ||
                    o.$e(e, r) ||
                    o.ge(e, r, new Xs(r, i));
                }
                t.ae && (s.set(e, t.ce()), t.le());
              }
            });
            var r = qi();
            this.Re.forEach(function(t, e) {
              var n = !0;
              e.St(function(t) {
                var e = o.Ce(t);
                return !e || 2 === e.Y || (n = !1);
              }),
                n && (r = r.add(t));
            });
            var t = new Xi(i, s, this.me, this.Ae, r);
            return (
              (this.Ae = Li()), (this.Re = so()), (this.me = new Oi(Lr)), t
            );
          }),
          (Zi.prototype.Ve = function(t, e) {
            if (this.ve(t)) {
              var n = this.$e(t, e.key) ? 2 : 0;
              this.be(t)._e(e.key, n),
                (this.Ae = this.Ae.et(e.key, e)),
                (this.Re = this.Re.et(e.key, this.ke(e.key).add(t)));
            }
          }),
          (Zi.prototype.ge = function(t, e, n) {
            if (this.ve(t)) {
              var r = this.be(t);
              this.$e(t, e) ? r._e(e, 1) : r.fe(e),
                (this.Re = this.Re.et(e, this.ke(e).delete(t))),
                n && (this.Ae = this.Ae.et(e, n));
            }
          }),
          (Zi.prototype.removeTarget = function(t) {
            this.Ie.delete(t);
          }),
          (Zi.prototype.Fe = function(t) {
            var e = this.be(t).ce();
            return this.Ee.xe(t).size + e.Yt.size - e.Xt.size;
          }),
          (Zi.prototype.de = function(t) {
            this.be(t).de();
          }),
          (Zi.prototype.be = function(t) {
            var e = this.Ie.get(t);
            return e || ((e = new $i()), this.Ie.set(t, e)), e;
          }),
          (Zi.prototype.ke = function(t) {
            var e = this.Re.get(t);
            return e || ((e = new Oi(Lr)), (this.Re = this.Re.et(t, e))), e;
          }),
          (Zi.prototype.ve = function(t) {
            var e = null !== this.Ce(t);
            return (
              e || Nr('WatchChangeAggregator', 'Detected inactive target', t), e
            );
          }),
          (Zi.prototype.Ce = function(t) {
            var e = this.Ie.get(t);
            return e && e.he ? null : this.Ee.Me(t);
          }),
          (Zi.prototype.Se = function(e) {
            var n = this;
            this.Ie.set(e, new $i()),
              this.Ee.xe(e).forEach(function(t) {
                n.ge(e, t, null);
              });
          }),
          (Zi.prototype.$e = function(t, e) {
            return this.Ee.xe(t).has(e);
          }),
          Zi);
      function Zi(t) {
        (this.Ee = t),
          (this.Ie = new Map()),
          (this.Ae = Li()),
          (this.Re = so()),
          (this.me = new Oi(Lr));
      }
      function to() {
        (this.se = 0),
          (this.ne = uo()),
          (this.ie = pi.H),
          (this.re = !1),
          (this.oe = !0);
      }
      function eo(t, e, n, r, i) {
        (this.resumeToken = t),
          (this.Ht = e),
          (this.Yt = n),
          (this.Jt = r),
          (this.Xt = i);
      }
      function no(t, e, n, r, i) {
        (this.J = t),
          (this.Qt = e),
          (this.Wt = n),
          (this.jt = r),
          (this.Kt = i);
      }
      function ro(t, e, n, r, i, o, s, u) {
        (this.query = t),
          (this.docs = e),
          (this.Lt = n),
          (this.docChanges = r),
          (this.Ot = i),
          (this.fromCache = o),
          (this.Bt = s),
          (this.qt = u);
      }
      function io() {
        this.xt = new Ii(ai.P);
      }
      function oo(n) {
        (this.P = n
          ? function(t, e) {
              return n(t, e) || ai.P(t.key, e.key);
            }
          : function(t, e) {
              return ai.P(t.key, e.key);
            }),
          (this.Nt = Vi()),
          (this.$t = new Ii(this.P));
      }
      function so() {
        return new Ii(ai.P);
      }
      function uo() {
        return new Ii(ai.P);
      }
      function ao(t) {
        var e, n;
        return (
          'server_timestamp' ===
          (null ===
            (n = (
              (null === (e = null == t ? void 0 : t.mapValue) || void 0 === e
                ? void 0
                : e.fields) || {}
            ).__type__) || void 0 === n
            ? void 0
            : n.stringValue)
        );
      }
      function ho(t) {
        var e = mo(t.mapValue.fields.__local_write_time__.timestampValue);
        return new Kr(e.seconds, e.nanos);
      }
      var co = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
      function fo(t) {
        return 'nullValue' in t
          ? 0
          : 'booleanValue' in t
          ? 1
          : 'integerValue' in t || 'doubleValue' in t
          ? 2
          : 'timestampValue' in t
          ? 3
          : 'stringValue' in t
          ? 5
          : 'bytesValue' in t
          ? 6
          : 'referenceValue' in t
          ? 7
          : 'geoPointValue' in t
          ? 8
          : 'arrayValue' in t
          ? 9
          : 'mapValue' in t
          ? ao(t)
            ? 4
            : 10
          : Dr();
      }
      function lo(i, t) {
        var e,
          n,
          r,
          o = fo(i);
        if (o !== fo(t)) return !1;
        switch (o) {
          case 0:
            return !0;
          case 1:
            return i.booleanValue === t.booleanValue;
          case 4:
            return ho(i).isEqual(ho(t));
          case 3:
            return (function(t) {
              if (
                'string' == typeof i.timestampValue &&
                'string' == typeof t.timestampValue &&
                i.timestampValue.length === t.timestampValue.length
              )
                return i.timestampValue === t.timestampValue;
              var e = mo(i.timestampValue),
                n = mo(t.timestampValue);
              return e.seconds === n.seconds && e.nanos === n.nanos;
            })(t);
          case 5:
            return i.stringValue === t.stringValue;
          case 6:
            return (r = t), bo(i.bytesValue).isEqual(bo(r.bytesValue));
          case 7:
            return i.referenceValue === t.referenceValue;
          case 8:
            return (
              (n = t),
              wo((e = i).geoPointValue.latitude) ===
                wo(n.geoPointValue.latitude) &&
                wo(e.geoPointValue.longitude) === wo(n.geoPointValue.longitude)
            );
          case 2:
            return (function(t, e) {
              if ('integerValue' in t && 'integerValue' in e)
                return wo(t.integerValue) === wo(e.integerValue);
              if ('doubleValue' in t && 'doubleValue' in e) {
                var n = wo(t.doubleValue),
                  r = wo(e.doubleValue);
                return n === r ? fi(n) === fi(r) : isNaN(n) && isNaN(r);
              }
              return !1;
            })(i, t);
          case 9:
            return Ur(i.arrayValue.values || [], t.arrayValue.values || [], lo);
          case 10:
            return (function(t) {
              var e = i.mapValue.fields || {},
                n = t.mapValue.fields || {};
              if (qr(e) !== qr(n)) return !1;
              for (var r in e)
                if (e.hasOwnProperty(r) && (void 0 === n[r] || !lo(e[r], n[r])))
                  return !1;
              return !0;
            })(t);
          default:
            return Dr();
        }
      }
      function po(t, e) {
        return (
          void 0 !==
          (t.values || []).find(function(t) {
            return lo(t, e);
          })
        );
      }
      function yo(t, e) {
        var n,
          r,
          i,
          o,
          s,
          u,
          a,
          h,
          c,
          f,
          l = fo(t),
          p = fo(e);
        if (l !== p) return Lr(l, p);
        switch (l) {
          case 0:
            return 0;
          case 1:
            return Lr(t.booleanValue, e.booleanValue);
          case 2:
            return (
              (h = e),
              (c = wo(t.integerValue || t.doubleValue)),
              (f = wo(h.integerValue || h.doubleValue)),
              c < f
                ? -1
                : f < c
                ? 1
                : c === f
                ? 0
                : isNaN(c)
                ? isNaN(f)
                  ? 0
                  : -1
                : 1
            );
          case 3:
            return vo(t.timestampValue, e.timestampValue);
          case 4:
            return vo(ho(t), ho(e));
          case 5:
            return Lr(t.stringValue, e.stringValue);
          case 6:
            return (
              (o = t.bytesValue),
              (s = e.bytesValue),
              (u = bo(o)),
              (a = bo(s)),
              u.o(a)
            );
          case 7:
            return (function(t, e) {
              for (
                var n = t.split('/'), r = e.split('/'), i = 0;
                i < n.length && i < r.length;
                i++
              ) {
                var o = Lr(n[i], r[i]);
                if (0 !== o) return o;
              }
              return Lr(n.length, r.length);
            })(t.referenceValue, e.referenceValue);
          case 8:
            return (
              (n = t.geoPointValue),
              (r = e.geoPointValue),
              0 !== (i = Lr(wo(n.latitude), wo(r.latitude)))
                ? i
                : Lr(wo(n.longitude), wo(r.longitude))
            );
          case 9:
            return (function(t, e) {
              for (
                var n = t.values || [], r = e.values || [], i = 0;
                i < n.length && i < r.length;
                ++i
              ) {
                var o = yo(n[i], r[i]);
                if (o) return o;
              }
              return Lr(n.length, r.length);
            })(t.arrayValue, e.arrayValue);
          case 10:
            return (function(t, e) {
              var n = t.fields || {},
                r = Object.keys(n),
                i = e.fields || {},
                o = Object.keys(i);
              r.sort(), o.sort();
              for (var s = 0; s < r.length && s < o.length; ++s) {
                var u = Lr(r[s], o[s]);
                if (0 !== u) return u;
                var a = yo(n[r[s]], i[o[s]]);
                if (0 !== a) return a;
              }
              return Lr(r.length, o.length);
            })(t.mapValue, e.mapValue);
          default:
            throw Dr();
        }
      }
      function vo(t, e) {
        if (
          'string' == typeof t &&
          'string' == typeof e &&
          t.length === e.length
        )
          return Lr(t, e);
        var n = mo(t),
          r = mo(e),
          i = Lr(n.seconds, r.seconds);
        return 0 !== i ? i : Lr(n.nanos, r.nanos);
      }
      function go(t) {
        return (function s(i) {
          return 'nullValue' in i
            ? 'null'
            : 'booleanValue' in i
            ? '' + i.booleanValue
            : 'integerValue' in i
            ? '' + i.integerValue
            : 'doubleValue' in i
            ? '' + i.doubleValue
            : 'timestampValue' in i
            ? 'time(' + (t = mo(i.timestampValue)).seconds + ',' + t.nanos + ')'
            : 'stringValue' in i
            ? i.stringValue
            : 'bytesValue' in i
            ? bo(i.bytesValue).toBase64()
            : 'referenceValue' in i
            ? ((n = i.referenceValue), ai.q(n).toString())
            : 'geoPointValue' in i
            ? 'geo(' + (e = i.geoPointValue).latitude + ',' + e.longitude + ')'
            : 'arrayValue' in i
            ? (function() {
                for (
                  var t = '[', e = !0, n = 0, r = i.arrayValue.values || [];
                  n < r.length;
                  n++
                ) {
                  e ? (e = !1) : (t += ','), (t += s(r[n]));
                }
                return t + ']';
              })()
            : 'mapValue' in i
            ? (function(t) {
                for (
                  var e = '{',
                    n = !0,
                    r = 0,
                    i = Object.keys(t.fields || {}).sort();
                  r < i.length;
                  r++
                ) {
                  var o = i[r];
                  n ? (n = !1) : (e += ','), (e += o + ':' + s(t.fields[o]));
                }
                return e + '}';
              })(i.mapValue)
            : Dr();
          var t, e, n;
        })(t);
      }
      function mo(t) {
        if ((Or(!!t), 'string' != typeof t))
          return { seconds: wo(t.seconds), nanos: wo(t.nanos) };
        var e = 0,
          n = co.exec(t);
        if ((Or(!!n), n[1])) {
          var r = n[1];
          (r = (r + '000000000').substr(0, 9)), (e = Number(r));
        }
        var i = new Date(t);
        return { seconds: Math.floor(i.getTime() / 1e3), nanos: e };
      }
      function wo(t) {
        return 'number' == typeof t ? t : 'string' == typeof t ? Number(t) : 0;
      }
      function bo(t) {
        return 'string' == typeof t
          ? pi.fromBase64String(t)
          : pi.fromUint8Array(t);
      }
      function Eo(t, e) {
        return {
          referenceValue:
            'projects/' +
            t.projectId +
            '/databases/' +
            t.database +
            '/documents/' +
            e.path.N(),
        };
      }
      function Io(t) {
        return t && 'integerValue' in t;
      }
      function To(t) {
        return !!t && 'arrayValue' in t;
      }
      function _o(t) {
        return t && 'nullValue' in t;
      }
      function No(t) {
        return t && 'doubleValue' in t && isNaN(Number(t.doubleValue));
      }
      function Ao(t) {
        return t && 'mapValue' in t;
      }
      var So = { asc: 'ASCENDING', desc: 'DESCENDING' },
        Do = {
          '<': 'LESS_THAN',
          '<=': 'LESS_THAN_OR_EQUAL',
          '>': 'GREATER_THAN',
          '>=': 'GREATER_THAN_OR_EQUAL',
          '==': 'EQUAL',
          'array-contains': 'ARRAY_CONTAINS',
          in: 'IN',
          'array-contains-any': 'ARRAY_CONTAINS_ANY',
        },
        Oo = function(t, e) {
          (this.s = t), (this.Le = e);
        };
      function xo(t) {
        return { integerValue: '' + t };
      }
      function Po(t, e) {
        if (t.Le) {
          if (isNaN(e)) return { doubleValue: 'NaN' };
          if (e === 1 / 0) return { doubleValue: 'Infinity' };
          if (e === -1 / 0) return { doubleValue: '-Infinity' };
        }
        return { doubleValue: fi(e) ? '-0' : e };
      }
      function Ro(t, e) {
        return t.Le
          ? new Date(1e3 * e.seconds)
              .toISOString()
              .replace(/\.\d*/, '')
              .replace('Z', '') +
              '.' +
              ('000000000' + e.nanoseconds).slice(-9) +
              'Z'
          : { seconds: '' + e.seconds, nanos: e.nanoseconds };
      }
      function ko(t, e) {
        return t.Le ? e.toBase64() : e.toUint8Array();
      }
      function Lo(t, e) {
        return t.Le
          ? (Or(void 0 === e || 'string' == typeof e),
            pi.fromBase64String(e || ''))
          : (Or(void 0 === e || e instanceof Uint8Array),
            pi.fromUint8Array(e || new Uint8Array()));
      }
      function Uo(t) {
        return Or(!!t), Xr.I(((e = mo(t)), new Kr(e.seconds, e.nanos)));
        var e;
      }
      function Co(t, e) {
        return new $r(['projects', t.projectId, 'databases', t.database])
          .child('documents')
          .child(e)
          .N();
      }
      function Vo(t) {
        var e = $r.$(t);
        return Or(Zo(e)), e;
      }
      function Mo(t, e) {
        return Co(t.s, e.path);
      }
      function Fo(t, e) {
        var n = Vo(e);
        return (
          Or(n.get(1) === t.s.projectId),
          Or((!n.get(3) && !t.s.database) || n.get(3) === t.s.database),
          new ai(Go(n))
        );
      }
      function qo(t, e) {
        return Co(t.s, e);
      }
      function jo(t) {
        var e = Vo(t);
        return 4 === e.length ? $r.k : Go(e);
      }
      function Bo(t) {
        return new $r([
          'projects',
          t.s.projectId,
          'databases',
          t.s.database,
        ]).N();
      }
      function Go(t) {
        return Or(4 < t.length && 'documents' === t.get(4)), t.g(5);
      }
      function Qo(t, e, n) {
        return { name: Mo(t, e), fields: n.proto.mapValue.fields };
      }
      function zo(t, e) {
        var n, r, i, o, s, u, a;
        if (e instanceof ws) n = { update: Qo(t, e.key, e.value) };
        else if (e instanceof Is) n = { delete: Mo(t, e.key) };
        else if (e instanceof bs)
          n = {
            update: Qo(t, e.key, e.data),
            updateMask:
              ((r = e.Oe),
              (i = []),
              r.fields.forEach(function(t) {
                return i.push(t.N());
              }),
              { fieldPaths: i }),
          };
        else if (e instanceof Es)
          n = {
            transform: {
              document: Mo(t, e.key),
              fieldTransforms: e.fieldTransforms.map(function(t) {
                return (function(t) {
                  var e = t.transform;
                  if (e instanceof ts)
                    return {
                      fieldPath: t.field.N(),
                      setToServerValue: 'REQUEST_TIME',
                    };
                  if (e instanceof ns)
                    return {
                      fieldPath: t.field.N(),
                      appendMissingElements: { values: e.elements },
                    };
                  if (e instanceof rs)
                    return {
                      fieldPath: t.field.N(),
                      removeAllFromArray: { values: e.elements },
                    };
                  if (e instanceof is)
                    return { fieldPath: t.field.N(), increment: e.Be };
                  throw Dr();
                })(t);
              }),
            },
          };
        else {
          if (!(e instanceof Ts)) return Dr();
          n = { verify: Mo(t, e.key) };
        }
        return (
          e.Ue.qe ||
            (n.currentDocument =
              ((o = t),
              void 0 !== (s = e.Ue).updateTime
                ? { updateTime: ((u = o), (a = s.updateTime), Ro(u, a.R())) }
                : void 0 !== s.exists
                ? { exists: s.exists }
                : Dr())),
          n
        );
      }
      function Ho(e, t) {
        var n,
          r,
          i = t.currentDocument
            ? void 0 !== (n = t.currentDocument).updateTime
              ? gs.updateTime(Uo(n.updateTime))
              : void 0 !== n.exists
              ? gs.exists(n.exists)
              : gs.Qe()
            : gs.Qe();
        if (t.update) {
          t.update.name;
          var o = Fo(e, t.update.name),
            s = new _s({ mapValue: { fields: t.update.fields } });
          if (t.updateMask) {
            var u =
              ((r = t.updateMask.fieldPaths || []),
              new ys(
                r.map(function(t) {
                  return si.B(t);
                }),
              ));
            return new bs(o, s, u, i);
          }
          return new ws(o, s, i);
        }
        if (t.delete) {
          var a = Fo(e, t.delete);
          return new Is(a, i);
        }
        if (t.transform) {
          var h = Fo(e, t.transform.document),
            c = t.transform.fieldTransforms.map(function(t) {
              return (function(t, e) {
                var n = null;
                if ('setToServerValue' in e)
                  Or('REQUEST_TIME' === e.setToServerValue), (n = ts.instance);
                else if ('appendMissingElements' in e) {
                  var r = e.appendMissingElements.values || [];
                  n = new ns(r);
                } else if ('removeAllFromArray' in e) {
                  var i = e.removeAllFromArray.values || [];
                  n = new rs(i);
                } else 'increment' in e ? (n = new is(t, e.increment)) : Dr();
                var o = si.B(e.fieldPath);
                return new vs(o, n);
              })(e, t);
            });
          return Or(!0 === i.exists), new Es(h, c);
        }
        if (t.verify) {
          var f = Fo(e, t.verify);
          return new Ts(f, i);
        }
        return Dr();
      }
      function Wo(t, e) {
        return { documents: [qo(t, e.path)] };
      }
      function Ko(t, e) {
        var n = { structuredQuery: {} },
          r = e.path;
        null !== e.collectionGroup
          ? ((n.parent = qo(t, r)),
            (n.structuredQuery.from = [
              { collectionId: e.collectionGroup, allDescendants: !0 },
            ]))
          : ((n.parent = qo(t, r.p())),
            (n.structuredQuery.from = [{ collectionId: r.S() }]));
        var i = (function(t) {
          if (0 !== t.length) {
            var e = t.map(function(t) {
              return t instanceof Js
                ? (function(t) {
                    if ('==' === t.op) {
                      if (No(t.value))
                        return {
                          unaryFilter: { field: $o(t.field), op: 'IS_NAN' },
                        };
                      if (_o(t.value))
                        return {
                          unaryFilter: { field: $o(t.field), op: 'IS_NULL' },
                        };
                    }
                    return {
                      fieldFilter: {
                        field: $o(t.field),
                        op: ((e = t.op), Do[e]),
                        value: t.value,
                      },
                    };
                    var e;
                  })(t)
                : Dr();
            });
            return 1 === e.length
              ? e[0]
              : { compositeFilter: { op: 'AND', filters: e } };
          }
        })(e.filters);
        i && (n.structuredQuery.where = i);
        var o = (function(t) {
          if (0 !== t.length)
            return t.map(function(t) {
              return {
                field: $o((e = t).field),
                direction: ((n = e.dir), So[n]),
              };
              var e, n;
            });
        })(e.orderBy);
        o && (n.structuredQuery.orderBy = o);
        var s,
          u,
          a = ((s = t), (u = e.limit), s.Le || ci(u) ? u : { value: u });
        return (
          null !== a && (n.structuredQuery.limit = a),
          e.startAt && (n.structuredQuery.startAt = Xo(e.startAt)),
          e.endAt && (n.structuredQuery.endAt = Xo(e.endAt)),
          n
        );
      }
      function Xo(t) {
        return { before: t.before, values: t.position };
      }
      function Yo(t) {
        var e = !!t.before,
          n = t.values || [];
        return new iu(n, e);
      }
      function $o(t) {
        return { fieldPath: t.N() };
      }
      function Jo(t) {
        return si.B(t.fieldPath);
      }
      function Zo(t) {
        return (
          4 <= t.length && 'projects' === t.get(0) && 'databases' === t.get(2)
        );
      }
      var ts =
        ((es.prototype.je = function(t, e) {
          return (
            (n = {
              fields: {
                __type__: { stringValue: 'server_timestamp' },
                __local_write_time__: {
                  timestampValue: { seconds: e.seconds, nanos: e.nanoseconds },
                },
              },
            }),
            t && (n.fields.__previous_value__ = t),
            { mapValue: n }
          );
          var n;
        }),
        (es.prototype.Ke = function(t, e) {
          return e;
        }),
        (es.prototype.Ge = function(t) {
          return null;
        }),
        (es.prototype.isEqual = function(t) {
          return t instanceof es;
        }),
        es);
      function es() {}
      ts.instance = new ts();
      var ns =
          ((us.prototype.je = function(t, e) {
            return this.apply(t);
          }),
          (us.prototype.Ke = function(t, e) {
            return this.apply(t);
          }),
          (us.prototype.apply = function(t) {
            for (
              var n = as(t),
                e = function(e) {
                  n.some(function(t) {
                    return lo(t, e);
                  }) || n.push(e);
                },
                r = 0,
                i = this.elements;
              r < i.length;
              r++
            )
              e(i[r]);
            return { arrayValue: { values: n } };
          }),
          (us.prototype.Ge = function(t) {
            return null;
          }),
          (us.prototype.isEqual = function(t) {
            return t instanceof us && Ur(this.elements, t.elements, lo);
          }),
          us),
        rs =
          ((ss.prototype.je = function(t, e) {
            return this.apply(t);
          }),
          (ss.prototype.Ke = function(t, e) {
            return this.apply(t);
          }),
          (ss.prototype.apply = function(t) {
            for (
              var n = as(t),
                e = function(e) {
                  n = n.filter(function(t) {
                    return !lo(t, e);
                  });
                },
                r = 0,
                i = this.elements;
              r < i.length;
              r++
            )
              e(i[r]);
            return { arrayValue: { values: n } };
          }),
          (ss.prototype.Ge = function(t) {
            return null;
          }),
          (ss.prototype.isEqual = function(t) {
            return t instanceof ss && Ur(this.elements, t.elements, lo);
          }),
          ss),
        is =
          ((os.prototype.je = function(t, e) {
            var n = this.Ge(t),
              r = this.asNumber(n) + this.asNumber(this.Be);
            return Io(n) && Io(this.Be) ? xo(r) : Po(this.serializer, r);
          }),
          (os.prototype.Ke = function(t, e) {
            return e;
          }),
          (os.prototype.Ge = function(t) {
            return Io((e = t)) || (e && 'doubleValue' in e)
              ? t
              : { integerValue: 0 };
            var e;
          }),
          (os.prototype.isEqual = function(t) {
            return t instanceof os && lo(this.Be, t.Be);
          }),
          (os.prototype.asNumber = function(t) {
            return wo(t.integerValue || t.doubleValue);
          }),
          os);
      function os(t, e) {
        (this.serializer = t), (this.Be = e);
      }
      function ss(t) {
        this.elements = t;
      }
      function us(t) {
        this.elements = t;
      }
      function as(t) {
        return To(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
      }
      function hs(t, e) {
        (this.version = t), (this.transformResults = e);
      }
      var cs,
        fs,
        ls,
        ps,
        ds,
        ys =
          ((Cs.prototype.ze = function(t) {
            for (var e = 0, n = this.fields; e < n.length; e++)
              if (n[e].D(t)) return !0;
            return !1;
          }),
          (Cs.prototype.isEqual = function(t) {
            return Ur(this.fields, t.fields, function(t, e) {
              return t.isEqual(e);
            });
          }),
          Cs),
        vs =
          ((Us.prototype.isEqual = function(t) {
            return (
              this.field.isEqual(t.field) && this.transform.isEqual(t.transform)
            );
          }),
          Us),
        gs =
          ((Ls.Qe = function() {
            return new Ls();
          }),
          (Ls.exists = function(t) {
            return new Ls(void 0, t);
          }),
          (Ls.updateTime = function(t) {
            return new Ls(t);
          }),
          Object.defineProperty(Ls.prototype, 'qe', {
            get: function() {
              return void 0 === this.updateTime && void 0 === this.exists;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (Ls.prototype.He = function(t) {
            return void 0 !== this.updateTime
              ? t instanceof Ks && t.version.isEqual(this.updateTime)
              : void 0 === this.exists || this.exists === t instanceof Ks;
          }),
          (Ls.prototype.isEqual = function(t) {
            return (
              this.exists === t.exists &&
              (this.updateTime
                ? !!t.updateTime && this.updateTime.isEqual(t.updateTime)
                : !t.updateTime)
            );
          }),
          Ls),
        ms =
          ((ks.prototype.Ye = function(t) {}),
          (ks.Je = function(t) {
            return t instanceof Ks ? t.version : Xr.min();
          }),
          ks),
        ws =
          (n(Rs, (ds = ms)),
          (Rs.prototype.Ke = function(t, e) {
            this.Ye(t);
            var n = e.version;
            return new Ks(this.key, n, this.value, {
              hasCommittedMutations: !0,
            });
          }),
          (Rs.prototype.je = function(t, e, n) {
            if ((this.Ye(t), !this.Ue.He(t))) return t;
            var r = ms.Je(t);
            return new Ks(this.key, r, this.value, { Xe: !0 });
          }),
          (Rs.prototype.Ze = function(t) {
            return null;
          }),
          (Rs.prototype.isEqual = function(t) {
            return (
              t instanceof Rs &&
              this.key.isEqual(t.key) &&
              this.value.isEqual(t.value) &&
              this.Ue.isEqual(t.Ue)
            );
          }),
          Rs),
        bs =
          (n(Ps, (ps = ms)),
          (Ps.prototype.Ke = function(t, e) {
            if ((this.Ye(t), !this.Ue.He(t)))
              return new Ys(this.key, e.version);
            var n = this.ts(t);
            return new Ks(this.key, e.version, n, {
              hasCommittedMutations: !0,
            });
          }),
          (Ps.prototype.je = function(t, e, n) {
            if ((this.Ye(t), !this.Ue.He(t))) return t;
            var r = ms.Je(t),
              i = this.ts(t);
            return new Ks(this.key, r, i, { Xe: !0 });
          }),
          (Ps.prototype.Ze = function(t) {
            return null;
          }),
          (Ps.prototype.isEqual = function(t) {
            return (
              t instanceof Ps &&
              this.key.isEqual(t.key) &&
              this.Oe.isEqual(t.Oe) &&
              this.Ue.isEqual(t.Ue)
            );
          }),
          (Ps.prototype.ts = function(t) {
            var e;
            return (e = t instanceof Ks ? t.data() : _s.empty()), this.es(e);
          }),
          (Ps.prototype.es = function(t) {
            var n = this,
              r = new Ns(t);
            return (
              this.Oe.fields.forEach(function(t) {
                if (!t._()) {
                  var e = n.data.field(t);
                  null !== e ? r.set(t, e) : r.delete(t);
                }
              }),
              r.ss()
            );
          }),
          Ps),
        Es =
          (n(xs, (ls = ms)),
          (xs.prototype.Ke = function(t, e) {
            if ((this.Ye(t), Or(null != e.transformResults), !this.Ue.He(t)))
              return new Ys(this.key, e.version);
            var n = this.ns(t),
              r = this.rs(t, e.transformResults),
              i = e.version,
              o = this.os(n.data(), r);
            return new Ks(this.key, i, o, { hasCommittedMutations: !0 });
          }),
          (xs.prototype.je = function(t, e, n) {
            if ((this.Ye(t), !this.Ue.He(t))) return t;
            var r = this.ns(t),
              i = this.hs(n, t, e),
              o = this.os(r.data(), i);
            return new Ks(this.key, r.version, o, { Xe: !0 });
          }),
          (xs.prototype.Ze = function(t) {
            for (
              var e = null, n = 0, r = this.fieldTransforms;
              n < r.length;
              n++
            ) {
              var i = r[n],
                o = t instanceof Ks ? t.field(i.field) : void 0,
                s = i.transform.Ge(o || null);
              null != s &&
                (e = null == e ? new Ns().set(i.field, s) : e.set(i.field, s));
            }
            return e ? e.ss() : null;
          }),
          (xs.prototype.isEqual = function(t) {
            return (
              t instanceof xs &&
              this.key.isEqual(t.key) &&
              Ur(this.fieldTransforms, t.fieldTransforms, function(t, e) {
                return t.isEqual(e);
              }) &&
              this.Ue.isEqual(t.Ue)
            );
          }),
          (xs.prototype.ns = function(t) {
            return t;
          }),
          (xs.prototype.rs = function(t, e) {
            var n = [];
            Or(this.fieldTransforms.length === e.length);
            for (var r = 0; r < e.length; r++) {
              var i = this.fieldTransforms[r],
                o = i.transform,
                s = null;
              t instanceof Ks && (s = t.field(i.field)), n.push(o.Ke(s, e[r]));
            }
            return n;
          }),
          (xs.prototype.hs = function(t, e, n) {
            for (
              var r = [], i = 0, o = this.fieldTransforms;
              i < o.length;
              i++
            ) {
              var s = o[i],
                u = s.transform,
                a = null;
              e instanceof Ks && (a = e.field(s.field)),
                null === a && n instanceof Ks && (a = n.field(s.field)),
                r.push(u.je(a, t));
            }
            return r;
          }),
          (xs.prototype.os = function(t, e) {
            for (
              var n = new Ns(t), r = 0;
              r < this.fieldTransforms.length;
              r++
            ) {
              var i = this.fieldTransforms[r].field;
              n.set(i, e[r]);
            }
            return n.ss();
          }),
          xs),
        Is =
          (n(Os, (fs = ms)),
          (Os.prototype.Ke = function(t, e) {
            return (
              this.Ye(t),
              new Xs(this.key, e.version, { hasCommittedMutations: !0 })
            );
          }),
          (Os.prototype.je = function(t, e, n) {
            return this.Ye(t), this.Ue.He(t) ? new Xs(this.key, Xr.min()) : t;
          }),
          (Os.prototype.Ze = function(t) {
            return null;
          }),
          (Os.prototype.isEqual = function(t) {
            return (
              t instanceof Os &&
              this.key.isEqual(t.key) &&
              this.Ue.isEqual(t.Ue)
            );
          }),
          Os),
        Ts =
          (n(Ds, (cs = ms)),
          (Ds.prototype.Ke = function(t, e) {
            Dr();
          }),
          (Ds.prototype.je = function(t, e, n) {
            Dr();
          }),
          (Ds.prototype.Ze = function(t) {
            Dr();
          }),
          (Ds.prototype.isEqual = function(t) {
            return (
              t instanceof Ds &&
              this.key.isEqual(t.key) &&
              this.Ue.isEqual(t.Ue)
            );
          }),
          Ds),
        _s =
          ((Ss.empty = function() {
            return new Ss({ mapValue: {} });
          }),
          (Ss.prototype.field = function(t) {
            if (t._()) return this.proto;
            for (var e = this.proto, n = 0; n < t.length - 1; ++n) {
              if (!e.mapValue.fields) return null;
              if (!Ao((e = e.mapValue.fields[t.get(n)]))) return null;
            }
            return (e = (e.mapValue.fields || {})[t.S()]) || null;
          }),
          (Ss.prototype.isEqual = function(t) {
            return lo(this.proto, t.proto);
          }),
          Ss),
        Ns =
          ((As.prototype.set = function(t, e) {
            return this.cs(t, e), this;
          }),
          (As.prototype.delete = function(t) {
            return this.cs(t, null), this;
          }),
          (As.prototype.cs = function(t, e) {
            for (var n = this.us, r = 0; r < t.length - 1; ++r) {
              var i = t.get(r),
                o = n.get(i);
              o instanceof Map ||
                ((o =
                  o && 10 === fo(o)
                    ? new Map(Object.entries(o.mapValue.fields || {}))
                    : new Map()),
                n.set(i, o)),
                (n = o);
            }
            n.set(t.S(), e);
          }),
          (As.prototype.ss = function() {
            var t = this.ls(si.k, this.us);
            return null != t ? new _s(t) : this.as;
          }),
          (As.prototype.ls = function(r, t) {
            var i = this,
              o = !1,
              e = this.as.field(r),
              s = Ao(e) ? Object.assign({}, e.mapValue.fields) : {};
            return (
              t.forEach(function(t, e) {
                if (t instanceof Map) {
                  var n = i.ls(r.child(e), t);
                  null != n && ((s[e] = n), (o = !0));
                } else null !== t ? ((s[e] = t), (o = !0)) : s.hasOwnProperty(e) && (delete s[e], (o = !0));
              }),
              o ? { mapValue: { fields: s } } : null
            );
          }),
          As);
      function As(t) {
        void 0 === t && (t = _s.empty()), (this.as = t), (this.us = new Map());
      }
      function Ss(t) {
        this.proto = t;
      }
      function Ds(t, e) {
        var n = this;
        return (
          ((n = cs.call(this) || this).key = t), (n.Ue = e), (n.type = 4), n
        );
      }
      function Os(t, e) {
        var n = this;
        return (
          ((n = fs.call(this) || this).key = t), (n.Ue = e), (n.type = 3), n
        );
      }
      function xs(t, e) {
        var n = this;
        return (
          ((n = ls.call(this) || this).key = t),
          (n.fieldTransforms = e),
          (n.type = 2),
          (n.Ue = gs.exists(!0)),
          n
        );
      }
      function Ps(t, e, n, r) {
        var i = this;
        return (
          ((i = ps.call(this) || this).key = t),
          (i.data = e),
          (i.Oe = n),
          (i.Ue = r),
          (i.type = 1),
          i
        );
      }
      function Rs(t, e, n) {
        var r = this;
        return (
          ((r = ds.call(this) || this).key = t),
          (r.value = e),
          (r.Ue = n),
          (r.type = 0),
          r
        );
      }
      function ks() {}
      function Ls(t, e) {
        (this.updateTime = t), (this.exists = e);
      }
      function Us(t, e) {
        (this.field = t), (this.transform = e);
      }
      function Cs(t) {
        (this.fields = t).sort(si.P);
      }
      function Vs(t) {
        var u = [];
        return (
          jr(t.fields || {}, function(t, e) {
            var n = new si([t]);
            if (Ao(e)) {
              var r = Vs(e.mapValue).fields;
              if (0 === r.length) u.push(n);
              else
                for (var i = 0, o = r; i < o.length; i++) {
                  var s = o[i];
                  u.push(n.child(s));
                }
            } else u.push(n);
          }),
          new ys(u)
        );
      }
      function Ms(t, e) {
        (this.key = t), (this.version = e);
      }
      var Fs,
        qs,
        js,
        Bs,
        Gs,
        Qs,
        zs,
        Hs,
        Ws,
        Ks =
          (n(du, (Ws = Ms)),
          (du.prototype.field = function(t) {
            return this._s.field(t);
          }),
          (du.prototype.data = function() {
            return this._s;
          }),
          (du.prototype.fs = function() {
            return this._s.proto;
          }),
          (du.prototype.isEqual = function(t) {
            return (
              t instanceof du &&
              this.key.isEqual(t.key) &&
              this.version.isEqual(t.version) &&
              this.Xe === t.Xe &&
              this.hasCommittedMutations === t.hasCommittedMutations &&
              this._s.isEqual(t._s)
            );
          }),
          (du.prototype.toString = function() {
            return (
              'Document(' +
              this.key +
              ', ' +
              this.version +
              ', ' +
              this._s.toString() +
              ', {hasLocalMutations: ' +
              this.Xe +
              '}), {hasCommittedMutations: ' +
              this.hasCommittedMutations +
              '})'
            );
          }),
          Object.defineProperty(du.prototype, 'hasPendingWrites', {
            get: function() {
              return this.Xe || this.hasCommittedMutations;
            },
            enumerable: !0,
            configurable: !0,
          }),
          du),
        Xs =
          (n(pu, (Hs = Ms)),
          (pu.prototype.toString = function() {
            return 'NoDocument(' + this.key + ', ' + this.version + ')';
          }),
          Object.defineProperty(pu.prototype, 'hasPendingWrites', {
            get: function() {
              return this.hasCommittedMutations;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (pu.prototype.isEqual = function(t) {
            return (
              t instanceof pu &&
              t.hasCommittedMutations === this.hasCommittedMutations &&
              t.version.isEqual(this.version) &&
              t.key.isEqual(this.key)
            );
          }),
          pu),
        Ys =
          (n(lu, (zs = Ms)),
          (lu.prototype.toString = function() {
            return 'UnknownDocument(' + this.key + ', ' + this.version + ')';
          }),
          Object.defineProperty(lu.prototype, 'hasPendingWrites', {
            get: function() {
              return !0;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (lu.prototype.isEqual = function(t) {
            return (
              t instanceof lu &&
              t.version.isEqual(this.version) &&
              t.key.isEqual(this.key)
            );
          }),
          lu),
        $s =
          ((fu.As = function(t) {
            return new fu(t);
          }),
          Object.defineProperty(fu.prototype, 'orderBy', {
            get: function() {
              if (null === this.Ts) {
                this.Ts = [];
                var t = this.Rs(),
                  e = this.ms();
                if (null !== t && null === e)
                  t.L() || this.Ts.push(new wu(t)),
                    this.Ts.push(new wu(si.O(), 'asc'));
                else {
                  for (var n = !1, r = 0, i = this.ds; r < i.length; r++) {
                    var o = i[r];
                    this.Ts.push(o), o.field.L() && (n = !0);
                  }
                  if (!n) {
                    var s =
                      0 < this.ds.length
                        ? this.ds[this.ds.length - 1].dir
                        : 'asc';
                    this.Ts.push(new wu(si.O(), s));
                  }
                }
              }
              return this.Ts;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (fu.prototype.Ps = function(t) {
            var e = this.filters.concat([t]);
            return new fu(
              this.path,
              this.collectionGroup,
              this.ds.slice(),
              e,
              this.limit,
              this.ws,
              this.startAt,
              this.endAt,
            );
          }),
          (fu.prototype.Vs = function(t) {
            var e = this.ds.concat([t]);
            return new fu(
              this.path,
              this.collectionGroup,
              e,
              this.filters.slice(),
              this.limit,
              this.ws,
              this.startAt,
              this.endAt,
            );
          }),
          (fu.prototype.gs = function(t) {
            return new fu(
              this.path,
              this.collectionGroup,
              this.ds.slice(),
              this.filters.slice(),
              t,
              'F',
              this.startAt,
              this.endAt,
            );
          }),
          (fu.prototype.ps = function(t) {
            return new fu(
              this.path,
              this.collectionGroup,
              this.ds.slice(),
              this.filters.slice(),
              t,
              'L',
              this.startAt,
              this.endAt,
            );
          }),
          (fu.prototype.ys = function(t) {
            return new fu(
              this.path,
              this.collectionGroup,
              this.ds.slice(),
              this.filters.slice(),
              this.limit,
              this.ws,
              t,
              this.endAt,
            );
          }),
          (fu.prototype.bs = function(t) {
            return new fu(
              this.path,
              this.collectionGroup,
              this.ds.slice(),
              this.filters.slice(),
              this.limit,
              this.ws,
              this.startAt,
              t,
            );
          }),
          (fu.prototype.vs = function(t) {
            return new fu(
              t,
              null,
              this.ds.slice(),
              this.filters.slice(),
              this.limit,
              this.ws,
              this.startAt,
              this.endAt,
            );
          }),
          (fu.prototype.Ss = function() {
            return (
              0 === this.filters.length &&
              null === this.limit &&
              null == this.startAt &&
              null == this.endAt &&
              (0 === this.ds.length ||
                (1 === this.ds.length && this.ds[0].field.L()))
            );
          }),
          (fu.prototype.canonicalId = function() {
            return _u(this.We()) + '|lt:' + this.ws;
          }),
          (fu.prototype.toString = function() {
            return (
              'Query(target=' +
              ((t = this.We()),
              (e = t.path.N()),
              null !== t.collectionGroup &&
                (e += ' collectionGroup=' + t.collectionGroup),
              0 < t.filters.length &&
                (e += ', filters: [' + t.filters.join(', ') + ']'),
              ci(t.limit) || (e += ', limit: ' + t.limit),
              0 < t.orderBy.length &&
                (e += ', orderBy: [' + t.orderBy.join(', ') + ']'),
              t.startAt && (e += ', startAt: ' + yu(t.startAt)),
              t.endAt && (e += ', endAt: ' + yu(t.endAt)),
              'Target(' + e + ')') +
              '; limitType=' +
              this.ws +
              ')'
            );
            var t, e;
          }),
          (fu.prototype.isEqual = function(t) {
            return Nu(this.We(), t.We()) && this.ws === t.ws;
          }),
          (fu.prototype.Ds = function(t, e) {
            for (var n = !1, r = 0, i = this.orderBy; r < i.length; r++) {
              var o = i[r],
                s = o.compare(t, e);
              if (0 !== s) return s;
              n = n || o.field.L();
            }
            return 0;
          }),
          (fu.prototype.matches = function(t) {
            return this.Cs(t) && this.Fs(t) && this.Ns(t) && this.$s(t);
          }),
          (fu.prototype.ks = function() {
            return !ci(this.limit) && 'F' === this.ws;
          }),
          (fu.prototype.xs = function() {
            return !ci(this.limit) && 'L' === this.ws;
          }),
          (fu.prototype.ms = function() {
            return 0 < this.ds.length ? this.ds[0].field : null;
          }),
          (fu.prototype.Rs = function() {
            for (var t = 0, e = this.filters; t < e.length; t++) {
              var n = e[t];
              if (n instanceof Js && n.Ms()) return n.field;
            }
            return null;
          }),
          (fu.prototype.Ls = function(t) {
            for (var e = 0, n = this.filters; e < n.length; e++) {
              var r = n[e];
              if (r instanceof Js && 0 <= t.indexOf(r.op)) return r.op;
            }
            return null;
          }),
          (fu.prototype.Os = function() {
            return Au(this.We());
          }),
          (fu.prototype.Bs = function() {
            return null !== this.collectionGroup;
          }),
          (fu.prototype.We = function() {
            if (!this.Es)
              if ('F' === this.ws)
                this.Es = Tu(
                  this.path,
                  this.collectionGroup,
                  this.orderBy,
                  this.filters,
                  this.limit,
                  this.startAt,
                  this.endAt,
                );
              else {
                for (var t = [], e = 0, n = this.orderBy; e < n.length; e++) {
                  var r = n[e],
                    i = 'desc' === r.dir ? 'asc' : 'desc';
                  t.push(new wu(r.field, i));
                }
                var o = this.endAt
                    ? new iu(this.endAt.position, !this.endAt.before)
                    : null,
                  s = this.startAt
                    ? new iu(this.startAt.position, !this.startAt.before)
                    : null;
                this.Es = Tu(
                  this.path,
                  this.collectionGroup,
                  t,
                  this.filters,
                  this.limit,
                  o,
                  s,
                );
              }
            return this.Es;
          }),
          (fu.prototype.Cs = function(t) {
            var e = t.key.path;
            return null !== this.collectionGroup
              ? t.key.U(this.collectionGroup) && this.path.D(e)
              : ai.W(this.path)
              ? this.path.isEqual(e)
              : this.path.C(e);
          }),
          (fu.prototype.Fs = function(t) {
            for (var e = 0, n = this.ds; e < n.length; e++) {
              var r = n[e];
              if (!r.field.L() && null === t.field(r.field)) return !1;
            }
            return !0;
          }),
          (fu.prototype.Ns = function(t) {
            for (var e = 0, n = this.filters; e < n.length; e++)
              if (!n[e].matches(t)) return !1;
            return !0;
          }),
          (fu.prototype.$s = function(t) {
            return !(
              (this.startAt && !vu(this.startAt, this.orderBy, t)) ||
              (this.endAt && vu(this.endAt, this.orderBy, t))
            );
          }),
          (fu.prototype.Is = function(t) {}),
          fu),
        Js =
          (n(cu, (Qs = function() {})),
          (cu.create = function(t, e, n) {
            if (t.L()) return 'in' === e ? new tu(t, n) : new Zs(t, e, n);
            if (_o(n)) {
              if ('==' !== e)
                throw new Wr(
                  Hr.INVALID_ARGUMENT,
                  'Invalid query. Null supports only equality comparisons.',
                );
              return new cu(t, e, n);
            }
            if (No(n)) {
              if ('==' !== e)
                throw new Wr(
                  Hr.INVALID_ARGUMENT,
                  'Invalid query. NaN supports only equality comparisons.',
                );
              return new cu(t, e, n);
            }
            return 'array-contains' === e
              ? new eu(t, n)
              : 'in' === e
              ? new nu(t, n)
              : 'array-contains-any' === e
              ? new ru(t, n)
              : new cu(t, e, n);
          }),
          (cu.prototype.matches = function(t) {
            var e = t.field(this.field);
            return (
              null !== e &&
              fo(this.value) === fo(e) &&
              this.qs(yo(e, this.value))
            );
          }),
          (cu.prototype.qs = function(t) {
            switch (this.op) {
              case '<':
                return t < 0;
              case '<=':
                return t <= 0;
              case '==':
                return 0 === t;
              case '>':
                return 0 < t;
              case '>=':
                return 0 <= t;
              default:
                return Dr();
            }
          }),
          (cu.prototype.Ms = function() {
            return 0 <= ['<', '<=', '>', '>='].indexOf(this.op);
          }),
          (cu.prototype.canonicalId = function() {
            return this.field.N() + this.op.toString() + go(this.value);
          }),
          (cu.prototype.isEqual = function(t) {
            return (
              t instanceof cu &&
              this.op === t.op &&
              this.field.isEqual(t.field) &&
              lo(this.value, t.value)
            );
          }),
          (cu.prototype.toString = function() {
            return this.field.N() + ' ' + this.op + ' ' + go(this.value);
          }),
          cu),
        Zs =
          (n(hu, (Gs = Js)),
          (hu.prototype.matches = function(t) {
            var e = ai.P(t.key, this.key);
            return this.qs(e);
          }),
          hu),
        tu =
          (n(au, (Bs = Js)),
          (au.prototype.matches = function(e) {
            return this.keys.some(function(t) {
              return t.isEqual(e.key);
            });
          }),
          au),
        eu =
          (n(uu, (js = Js)),
          (uu.prototype.matches = function(t) {
            var e = t.field(this.field);
            return To(e) && po(e.arrayValue, this.value);
          }),
          uu),
        nu =
          (n(su, (qs = Js)),
          (su.prototype.matches = function(t) {
            var e = t.field(this.field);
            return null !== e && po(this.value.arrayValue, e);
          }),
          su),
        ru =
          (n(ou, (Fs = Js)),
          (ou.prototype.matches = function(t) {
            var e = this,
              n = t.field(this.field);
            return (
              !(!To(n) || !n.arrayValue.values) &&
              n.arrayValue.values.some(function(t) {
                return po(e.value.arrayValue, t);
              })
            );
          }),
          ou),
        iu = function(t, e) {
          (this.position = t), (this.before = e);
        };
      function ou(t, e) {
        return Fs.call(this, t, 'array-contains-any', e) || this;
      }
      function su(t, e) {
        return qs.call(this, t, 'in', e) || this;
      }
      function uu(t, e) {
        return js.call(this, t, 'array-contains', e) || this;
      }
      function au(t, e) {
        var n = this;
        return (
          ((n = Bs.call(this, t, 'in', e) || this).keys = (
            e.arrayValue.values || []
          ).map(function(t) {
            return ai.q(t.referenceValue);
          })),
          n
        );
      }
      function hu(t, e, n) {
        var r = this;
        return (
          ((r = Gs.call(this, t, e, n) || this).key = ai.q(n.referenceValue)), r
        );
      }
      function cu(t, e, n) {
        var r = this;
        return (
          ((r = Qs.call(this) || this).field = t), (r.op = e), (r.value = n), r
        );
      }
      function fu(t, e, n, r, i, o, s, u) {
        void 0 === e && (e = null),
          void 0 === n && (n = []),
          void 0 === r && (r = []),
          void 0 === i && (i = null),
          void 0 === o && (o = 'F'),
          void 0 === s && (s = null),
          void 0 === u && (u = null),
          (this.path = t),
          (this.collectionGroup = e),
          (this.ds = n),
          (this.filters = r),
          (this.limit = i),
          (this.ws = o),
          (this.startAt = s),
          (this.endAt = u),
          (this.Ts = null),
          (this.Es = null),
          this.startAt && this.Is(this.startAt),
          this.endAt && this.Is(this.endAt);
      }
      function lu() {
        return (null !== zs && zs.apply(this, arguments)) || this;
      }
      function pu(t, e, n) {
        var r = this;
        return (
          ((r = Hs.call(this, t, e) || this).hasCommittedMutations = !(
            !n || !n.hasCommittedMutations
          )),
          r
        );
      }
      function du(t, e, n, r) {
        var i = this;
        return (
          ((i = Ws.call(this, t, e) || this)._s = n),
          (i.Xe = !!r.Xe),
          (i.hasCommittedMutations = !!r.hasCommittedMutations),
          i
        );
      }
      function yu(t) {
        return (
          (t.before ? 'b' : 'a') +
          ':' +
          t.position
            .map(function(t) {
              return go(t);
            })
            .join(',')
        );
      }
      function vu(t, e, n) {
        for (var r = 0, i = 0; i < t.position.length; i++) {
          var o = e[i],
            s = t.position[i];
          if (
            ((r = o.field.L()
              ? ai.P(ai.q(s.referenceValue), n.key)
              : yo(s, n.field(o.field))),
            'desc' === o.dir && (r *= -1),
            0 !== r)
          )
            break;
        }
        return t.before ? r <= 0 : r < 0;
      }
      function gu(t, e) {
        if (null === t) return null === e;
        if (null === e) return !1;
        if (t.before !== e.before || t.position.length !== e.position.length)
          return !1;
        for (var n = 0; n < t.position.length; n++)
          if (!lo(t.position[n], e.position[n])) return !1;
        return !0;
      }
      var mu,
        wu =
          ((Iu.prototype.compare = function(t, e) {
            var n,
              r,
              i,
              o,
              s = this.Us
                ? ai.P(t.key, e.key)
                : ((n = this.field),
                  (r = e),
                  (i = t.field(n)),
                  (o = r.field(n)),
                  null !== i && null !== o ? yo(i, o) : Dr());
            switch (this.dir) {
              case 'asc':
                return s;
              case 'desc':
                return -1 * s;
              default:
                return Dr();
            }
          }),
          (Iu.prototype.canonicalId = function() {
            return this.field.N() + this.dir.toString();
          }),
          (Iu.prototype.toString = function() {
            return this.field.N() + ' (' + this.dir + ')';
          }),
          (Iu.prototype.isEqual = function(t) {
            return this.dir === t.dir && this.field.isEqual(t.field);
          }),
          Iu),
        bu =
          (n(
            Eu,
            (mu = function(t, e, n, r, i, o, s) {
              (this.path = t),
                (this.collectionGroup = e),
                (this.orderBy = n),
                (this.filters = r),
                (this.limit = i),
                (this.startAt = o),
                (this.endAt = s);
            }),
          ),
          Eu);
      function Eu(t, e, n, r, i, o, s) {
        void 0 === e && (e = null),
          void 0 === n && (n = []),
          void 0 === r && (r = []),
          void 0 === i && (i = null),
          void 0 === o && (o = null),
          void 0 === s && (s = null);
        var u = this;
        return ((u = mu.call(this, t, e, n, r, i, o, s) || this).Qs = null), u;
      }
      function Iu(t, e) {
        (this.field = t),
          void 0 === e && (e = 'asc'),
          (this.dir = e),
          (this.Us = t.L());
      }
      function Tu(t, e, n, r, i, o, s) {
        return (
          void 0 === e && (e = null),
          void 0 === n && (n = []),
          void 0 === r && (r = []),
          void 0 === i && (i = null),
          void 0 === o && (o = null),
          void 0 === s && (s = null),
          new bu(t, e, n, r, i, o, s)
        );
      }
      function _u(t) {
        var e = xr(t);
        if (null === e.Qs) {
          var n = e.path.N();
          null !== e.collectionGroup && (n += '|cg:' + e.collectionGroup),
            (n += '|f:'),
            (n += e.filters
              .map(function(t) {
                return t.canonicalId();
              })
              .join(',')),
            (n += '|ob:'),
            (n += e.orderBy
              .map(function(t) {
                return t.canonicalId();
              })
              .join(',')),
            ci(e.limit) || ((n += '|l:'), (n += e.limit)),
            e.startAt && ((n += '|lb:'), (n += yu(e.startAt))),
            e.endAt && ((n += '|ub:'), (n += yu(e.endAt))),
            (e.Qs = n);
        }
        return e.Qs;
      }
      function Nu(t, e) {
        if (t.limit !== e.limit) return !1;
        if (t.orderBy.length !== e.orderBy.length) return !1;
        for (var n = 0; n < t.orderBy.length; n++)
          if (!t.orderBy[n].isEqual(e.orderBy[n])) return !1;
        if (t.filters.length !== e.filters.length) return !1;
        for (var r = 0; r < t.filters.length; r++)
          if (!t.filters[r].isEqual(e.filters[r])) return !1;
        return (
          t.collectionGroup === e.collectionGroup &&
          !!t.path.isEqual(e.path) &&
          !!gu(t.startAt, e.startAt) &&
          gu(t.endAt, e.endAt)
        );
      }
      function Au(t) {
        return (
          ai.W(t.path) && null === t.collectionGroup && 0 === t.filters.length
        );
      }
      var Su =
          ((Gu.prototype.Ke = function(t, e, n) {
            for (var r = n.js, i = 0; i < this.mutations.length; i++) {
              var o = this.mutations[i];
              if (o.key.isEqual(t)) {
                var s = r[i];
                e = o.Ke(e, s);
              }
            }
            return e;
          }),
          (Gu.prototype.je = function(t, e) {
            for (var n = 0, r = this.baseMutations; n < r.length; n++) {
              var i = r[n];
              i.key.isEqual(t) && (e = i.je(e, e, this.Ws));
            }
            for (var o = e, s = 0, u = this.mutations; s < u.length; s++) {
              var a = u[s];
              a.key.isEqual(t) && (e = a.je(e, o, this.Ws));
            }
            return e;
          }),
          (Gu.prototype.Ks = function(n) {
            var r = this,
              i = n;
            return (
              this.mutations.forEach(function(t) {
                var e = r.je(t.key, n.get(t.key));
                e && (i = i.et(t.key, e));
              }),
              i
            );
          }),
          (Gu.prototype.keys = function() {
            return this.mutations.reduce(function(t, e) {
              return t.add(e.key);
            }, qi());
          }),
          (Gu.prototype.isEqual = function(t) {
            return (
              this.batchId === t.batchId &&
              Ur(this.mutations, t.mutations, function(t, e) {
                return t.isEqual(e);
              }) &&
              Ur(this.baseMutations, t.baseMutations, function(t, e) {
                return t.isEqual(e);
              })
            );
          }),
          Gu),
        Du =
          ((Bu.from = function(t, e, n) {
            Or(t.mutations.length === n.length);
            for (var r = Mi, i = t.mutations, o = 0; o < i.length; o++)
              r = r.et(i[o].key, n[o].version);
            return new Bu(t, e, n, r);
          }),
          Bu),
        Ou =
          ((ju.prototype.catch = function(t) {
            return this.next(void 0, t);
          }),
          (ju.prototype.next = function(r, i) {
            var o = this;
            return (
              this.Xs && Dr(),
              (this.Xs = !0),
              this.Js
                ? this.error
                  ? this.Zs(i, this.error)
                  : this.tn(r, this.result)
                : new ju(function(e, n) {
                    (o.Hs = function(t) {
                      o.tn(r, t).next(e, n);
                    }),
                      (o.Ys = function(t) {
                        o.Zs(i, t).next(e, n);
                      });
                  })
            );
          }),
          (ju.prototype.en = function() {
            var n = this;
            return new Promise(function(t, e) {
              n.next(t, e);
            });
          }),
          (ju.prototype.sn = function(t) {
            try {
              var e = t();
              return e instanceof ju ? e : ju.resolve(e);
            } catch (t) {
              return ju.reject(t);
            }
          }),
          (ju.prototype.tn = function(t, e) {
            return t
              ? this.sn(function() {
                  return t(e);
                })
              : ju.resolve(e);
          }),
          (ju.prototype.Zs = function(t, e) {
            return t
              ? this.sn(function() {
                  return t(e);
                })
              : ju.reject(e);
          }),
          (ju.resolve = function(n) {
            return new ju(function(t, e) {
              t(n);
            });
          }),
          (ju.reject = function(n) {
            return new ju(function(t, e) {
              e(n);
            });
          }),
          (ju.nn = function(t) {
            return new ju(function(e, n) {
              var r = 0,
                i = 0,
                o = !1;
              t.forEach(function(t) {
                ++r,
                  t.next(
                    function() {
                      ++i, o && i === r && e();
                    },
                    function(t) {
                      return n(t);
                    },
                  );
              }),
                (o = !0),
                i === r && e();
            });
          }),
          (ju.rn = function(t) {
            for (
              var n = ju.resolve(!1),
                e = function(e) {
                  n = n.next(function(t) {
                    return t ? ju.resolve(t) : e();
                  });
                },
                r = 0,
                i = t;
              r < i.length;
              r++
            )
              e(i[r]);
            return n;
          }),
          (ju.forEach = function(t, n) {
            var r = this,
              i = [];
            return (
              t.forEach(function(t, e) {
                i.push(n.call(r, t, e));
              }),
              this.nn(i)
            );
          }),
          ju),
        xu =
          (Object.defineProperty(qu.prototype, 'readTime', {
            get: function() {
              return this.an;
            },
            set: function(t) {
              this.an = t;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (qu.prototype.un = function(t, e) {
            this.cn(), (this.readTime = e), this.on.set(t.key, t);
          }),
          (qu.prototype.ln = function(t, e) {
            this.cn(), e && (this.readTime = e), this.on.set(t, null);
          }),
          (qu.prototype._n = function(t, e) {
            this.cn();
            var n = this.on.get(e);
            return void 0 !== n ? Ou.resolve(n) : this.fn(t, e);
          }),
          (qu.prototype.getEntries = function(t, e) {
            return this.dn(t, e);
          }),
          (qu.prototype.apply = function(t) {
            return this.cn(), (this.hn = !0), this.wn(t);
          }),
          (qu.prototype.cn = function() {}),
          qu),
        Pu =
          'The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.',
        Ru =
          ((Fu.prototype.En = function(t) {
            this.Tn.push(t);
          }),
          (Fu.prototype.In = function() {
            this.Tn.forEach(function(t) {
              return t();
            });
          }),
          Fu),
        ku =
          ((Mu.prototype.Pn = function(e, n) {
            var r = this;
            return this.Rn.Vn(e, n).next(function(t) {
              return r.gn(e, n, t);
            });
          }),
          (Mu.prototype.gn = function(t, r, i) {
            return this.An._n(t, r).next(function(t) {
              for (var e = 0, n = i; e < n.length; e++) t = n[e].je(r, t);
              return t;
            });
          }),
          (Mu.prototype.pn = function(t, e, i) {
            var o = Ui();
            return (
              e.forEach(function(t, e) {
                for (var n = 0, r = i; n < r.length; n++) e = r[n].je(t, e);
                o = o.et(t, e);
              }),
              o
            );
          }),
          (Mu.prototype.yn = function(e, t) {
            var n = this;
            return this.An.getEntries(e, t).next(function(t) {
              return n.bn(e, t);
            });
          }),
          (Mu.prototype.bn = function(r, i) {
            var o = this;
            return this.Rn.vn(r, i).next(function(t) {
              var e = o.pn(r, i, t),
                n = Li();
              return (
                e.forEach(function(t, e) {
                  (e = e || new Xs(t, Xr.min())), (n = n.et(t, e));
                }),
                n
              );
            });
          }),
          (Mu.prototype.Sn = function(t, e, n) {
            return e.Os()
              ? this.Dn(t, e.path)
              : e.Bs()
              ? this.Cn(t, e, n)
              : this.Fn(t, e, n);
          }),
          (Mu.prototype.Dn = function(t, e) {
            return this.Pn(t, new ai(e)).next(function(t) {
              var e = Vi();
              return t instanceof Ks && (e = e.et(t.key, t)), e;
            });
          }),
          (Mu.prototype.Cn = function(n, r, i) {
            var o = this,
              s = r.collectionGroup,
              u = Vi();
            return this.mn.Nn(n, s).next(function(t) {
              return Ou.forEach(t, function(t) {
                var e = r.vs(t.child(s));
                return o.Fn(n, e, i).next(function(t) {
                  t.forEach(function(t, e) {
                    u = u.et(t, e);
                  });
                });
              }).next(function() {
                return u;
              });
            });
          }),
          (Mu.prototype.Fn = function(e, n, t) {
            var c,
              f,
              r = this;
            return this.An.Sn(e, n, t)
              .next(function(t) {
                return (c = t), r.Rn.$n(e, n);
              })
              .next(function(t) {
                return (
                  (f = t),
                  r.kn(e, f, c).next(function(t) {
                    c = t;
                    for (var e = 0, n = f; e < n.length; e++)
                      for (
                        var r = n[e], i = 0, o = r.mutations;
                        i < o.length;
                        i++
                      ) {
                        var s = o[i],
                          u = s.key,
                          a = c.get(u),
                          h = s.je(a, a, r.Ws);
                        c = h instanceof Ks ? c.et(u, h) : c.remove(u);
                      }
                  })
                );
              })
              .next(function() {
                return (
                  c.forEach(function(t, e) {
                    n.matches(e) || (c = c.remove(t));
                  }),
                  c
                );
              });
          }),
          (Mu.prototype.kn = function(t, e, n) {
            for (var r = qi(), i = 0, o = e; i < o.length; i++)
              for (var s = 0, u = o[i].mutations; s < u.length; s++) {
                var a = u[s];
                a instanceof bs && null === n.get(a.key) && (r = r.add(a.key));
              }
            var h = n;
            return this.An.getEntries(t, r).next(function(t) {
              return (
                t.forEach(function(t, e) {
                  null !== e && e instanceof Ks && (h = h.et(t, e));
                }),
                h
              );
            });
          }),
          Mu),
        Lu =
          ((Vu.Ln = function(t, e) {
            for (
              var n = qi(), r = qi(), i = 0, o = e.docChanges;
              i < o.length;
              i++
            ) {
              var s = o[i];
              switch (s.type) {
                case 0:
                  n = n.add(s.doc.key);
                  break;
                case 1:
                  r = r.add(s.doc.key);
              }
            }
            return new Vu(t, e.fromCache, n, r);
          }),
          Vu),
        Uu =
          ((Cu.prototype.Bn = function(t) {
            return (
              (this.previousValue = Math.max(t, this.previousValue)),
              this.previousValue
            );
          }),
          (Cu.prototype.next = function() {
            var t = ++this.previousValue;
            return this.qn && this.qn(t), t;
          }),
          Cu);
      function Cu(t, e) {
        var n = this;
        (this.previousValue = t),
          e &&
            ((e.On = function(t) {
              return n.Bn(t);
            }),
            (this.qn = function(t) {
              return e.Un(t);
            }));
      }
      function Vu(t, e, n, r) {
        (this.targetId = t), (this.fromCache = e), (this.xn = n), (this.Mn = r);
      }
      function Mu(t, e, n) {
        (this.An = t), (this.Rn = e), (this.mn = n);
      }
      function Fu() {
        this.Tn = [];
      }
      function qu() {
        (this.on = new zr(
          function(t) {
            return t.toString();
          },
          function(t, e) {
            return t.isEqual(e);
          },
        )),
          (this.hn = !1);
      }
      function ju(t) {
        var e = this;
        (this.Hs = null),
          (this.Ys = null),
          (this.result = void 0),
          (this.error = void 0),
          (this.Js = !1),
          (this.Xs = !1),
          t(
            function(t) {
              (e.Js = !0), (e.result = t), e.Hs && e.Hs(t);
            },
            function(t) {
              (e.Js = !0), (e.error = t), e.Ys && e.Ys(t);
            },
          );
      }
      function Bu(t, e, n, r) {
        (this.batch = t), (this.Gs = e), (this.js = n), (this.zs = r);
      }
      function Gu(t, e, n, r) {
        (this.batchId = t),
          (this.Ws = e),
          (this.baseMutations = n),
          (this.mutations = r);
      }
      Uu.Qn = -1;
      function Qu() {
        var n = this;
        this.promise = new Promise(function(t, e) {
          (n.resolve = t), (n.reject = e);
        });
      }
      var zu =
        ((Hu.prototype.reset = function() {
          this.Hn = 0;
        }),
        (Hu.prototype.Xn = function() {
          this.Hn = this.zn;
        }),
        (Hu.prototype.Zn = function(t) {
          var e = this;
          this.cancel();
          var n = Math.floor(this.Hn + this.ti()),
            r = Math.max(0, Date.now() - this.Jn),
            i = Math.max(0, n - r);
          0 < i &&
            Nr(
              'ExponentialBackoff',
              'Backing off for ' +
                i +
                ' ms (base delay: ' +
                this.Hn +
                ' ms, delay with jitter: ' +
                n +
                ' ms, last attempt: ' +
                r +
                ' ms ago)',
            ),
            (this.Yn = this.Wn.ei(this.jn, i, function() {
              return (e.Jn = Date.now()), t();
            })),
            (this.Hn *= this.Gn),
            this.Hn < this.Kn && (this.Hn = this.Kn),
            this.Hn > this.zn && (this.Hn = this.zn);
        }),
        (Hu.prototype.si = function() {
          null !== this.Yn && (this.Yn.ni(), (this.Yn = null));
        }),
        (Hu.prototype.cancel = function() {
          null !== this.Yn && (this.Yn.cancel(), (this.Yn = null));
        }),
        (Hu.prototype.ti = function() {
          return (Math.random() - 0.5) * this.Hn;
        }),
        Hu);
      function Hu(t, e, n, r, i) {
        void 0 === n && (n = 1e3),
          void 0 === r && (r = 1.5),
          void 0 === i && (i = 6e4),
          (this.Wn = t),
          (this.jn = e),
          (this.Kn = n),
          (this.Gn = r),
          (this.zn = i),
          (this.Hn = 0),
          (this.Yn = null),
          (this.Jn = Date.now()),
          this.reset();
      }
      function Wu(t) {
        for (var e = '', n = 0; n < t.length; n++)
          0 < e.length && (e = Xu(e)), (e = Ku(t.get(n), e));
        return Xu(e);
      }
      function Ku(t, e) {
        for (var n = e, r = t.length, i = 0; i < r; i++) {
          var o = t.charAt(i);
          switch (o) {
            case '\0':
              n += '';
              break;
            case '':
              n += '';
              break;
            default:
              n += o;
          }
        }
        return n;
      }
      function Xu(t) {
        return t + '';
      }
      function Yu(t) {
        var e = t.length;
        if ((Or(2 <= e), 2 === e))
          return Or('' === t.charAt(0) && '' === t.charAt(1)), $r.k;
        for (var n = e - 2, r = [], i = '', o = 0; o < e; ) {
          var s = t.indexOf('', o);
          switch (((s < 0 || n < s) && Dr(), t.charAt(s + 1))) {
            case '':
              var u = t.substring(o, s),
                a = void 0;
              0 === i.length ? (a = u) : ((a = i += u), (i = '')), r.push(a);
              break;
            case '':
              (i += t.substring(o, s)), (i += '\0');
              break;
            case '':
              i += t.substring(o, s + 1);
              break;
            default:
              Dr();
          }
          o = s + 2;
        }
        return new $r(r);
      }
      var $u =
          ((na.prototype.ri = function(t, e) {
            return this.ii.add(e), Ou.resolve();
          }),
          (na.prototype.Nn = function(t, e) {
            return Ou.resolve(this.ii.getEntries(e));
          }),
          na),
        Ju =
          ((ea.prototype.add = function(t) {
            var e = t.S(),
              n = t.p(),
              r = this.index[e] || new Oi($r.P),
              i = !r.has(n);
            return (this.index[e] = r.add(n)), i;
          }),
          (ea.prototype.has = function(t) {
            var e = t.S(),
              n = t.p(),
              r = this.index[e];
            return r && r.has(n);
          }),
          (ea.prototype.getEntries = function(t) {
            return (this.index[t] || new Oi($r.P)).F();
          }),
          ea),
        Zu =
          ((ta.prototype.ri = function(t, e) {
            var n = this;
            if (this.oi.has(e)) return Ou.resolve();
            var r = e.S(),
              i = e.p();
            t.En(function() {
              n.oi.add(e);
            });
            var o = { collectionId: r, parent: Wu(i) };
            return ra(t).put(o);
          }),
          (ta.prototype.Nn = function(t, i) {
            var o = [],
              e = IDBKeyRange.bound([i, ''], [Cr(i), ''], !1, !0);
            return ra(t)
              .hi(e)
              .next(function(t) {
                for (var e = 0, n = t; e < n.length; e++) {
                  var r = n[e];
                  if (r.collectionId !== i) break;
                  o.push(Yu(r.parent));
                }
                return o;
              });
          }),
          ta);
      function ta() {
        this.oi = new Ju();
      }
      function ea() {
        this.index = {};
      }
      function na() {
        this.ii = new Ju();
      }
      function ra(t) {
        return Ra.ai(t, hh.store);
      }
      function ia(t) {
        this.ui = t;
      }
      function oa(t, e) {
        if (e.document)
          return (
            (n = t.ui),
            (r = e.document),
            (i = !!e.hasCommittedMutations),
            (o = Fo(n, r.name)),
            (s = Uo(r.updateTime)),
            (u = new _s({ mapValue: { fields: r.fields } })),
            new Ks(o, s, u, { hasCommittedMutations: !!i })
          );
        var n, r, i, o, s, u;
        if (e.noDocument) {
          var a = ai.j(e.noDocument.path),
            h = ca(e.noDocument.readTime);
          return new Xs(a, h, {
            hasCommittedMutations: !!e.hasCommittedMutations,
          });
        }
        if (e.unknownDocument) {
          var c = ai.j(e.unknownDocument.path),
            f = ca(e.unknownDocument.version);
          return new Ys(c, f);
        }
        return Dr();
      }
      function sa(t, e, n) {
        var r,
          i,
          o = ua(n),
          s = e.key.path.p().F();
        if (e instanceof Ks) {
          var u = {
              name: Mo((r = t.ui), (i = e).key),
              fields: i.fs().mapValue.fields,
              updateTime: Ro(r, i.version.R()),
            },
            a = e.hasCommittedMutations;
          return new ih(null, null, u, a, o, s);
        }
        if (e instanceof Xs) {
          var h = e.key.path.F(),
            c = ha(e.version),
            f = e.hasCommittedMutations;
          return new ih(null, new nh(h, c), null, f, o, s);
        }
        if (e instanceof Ys) {
          var l = e.key.path.F(),
            p = ha(e.version);
          return new ih(new rh(l, p), null, null, !0, o, s);
        }
        return Dr();
      }
      function ua(t) {
        var e = t.R();
        return [e.seconds, e.nanoseconds];
      }
      function aa(t) {
        var e = new Kr(t[0], t[1]);
        return Xr.I(e);
      }
      function ha(t) {
        var e = t.R();
        return new Xa(e.seconds, e.nanoseconds);
      }
      function ca(t) {
        var e = new Kr(t.seconds, t.nanoseconds);
        return Xr.I(e);
      }
      function fa(e, t) {
        var n = (t.baseMutations || []).map(function(t) {
            return Ho(e.ui, t);
          }),
          r = t.mutations.map(function(t) {
            return Ho(e.ui, t);
          }),
          i = Kr.fromMillis(t.localWriteTimeMs);
        return new Su(t.batchId, i, n, r);
      }
      function la(t) {
        var e,
          n = ca(t.readTime),
          r =
            void 0 !== t.lastLimboFreeSnapshotVersion
              ? ca(t.lastLimboFreeSnapshotVersion)
              : Xr.min();
        return (
          (e = (void 0 !== t.query.documents
            ? function(t) {
                Or(1 === t.documents.length);
                var e = t.documents[0];
                return $s.As(jo(e)).We();
              }
            : function(t) {
                var e = jo(t.parent),
                  n = t.structuredQuery,
                  r = n.from ? n.from.length : 0,
                  i = null;
                if (0 < r) {
                  Or(1 === r);
                  var o = n.from[0];
                  o.allDescendants
                    ? (i = o.collectionId)
                    : (e = e.child(o.collectionId));
                }
                var s = [];
                n.where &&
                  (s = (function e(t) {
                    return t
                      ? void 0 !== t.unaryFilter
                        ? [
                            (function(t) {
                              switch (t.unaryFilter.op) {
                                case 'IS_NAN':
                                  var e = Jo(t.unaryFilter.field);
                                  return Js.create(e, '==', {
                                    doubleValue: NaN,
                                  });
                                case 'IS_NULL':
                                  var n = Jo(t.unaryFilter.field);
                                  return Js.create(n, '==', {
                                    nullValue: 'NULL_VALUE',
                                  });
                                case 'OPERATOR_UNSPECIFIED':
                                default:
                                  return Dr();
                              }
                            })(t),
                          ]
                        : void 0 !== t.fieldFilter
                        ? [
                            ((n = t),
                            Js.create(
                              Jo(n.fieldFilter.field),
                              (function() {
                                switch (n.fieldFilter.op) {
                                  case 'EQUAL':
                                    return '==';
                                  case 'GREATER_THAN':
                                    return '>';
                                  case 'GREATER_THAN_OR_EQUAL':
                                    return '>=';
                                  case 'LESS_THAN':
                                    return '<';
                                  case 'LESS_THAN_OR_EQUAL':
                                    return '<=';
                                  case 'ARRAY_CONTAINS':
                                    return 'array-contains';
                                  case 'IN':
                                    return 'in';
                                  case 'ARRAY_CONTAINS_ANY':
                                    return 'array-contains-any';
                                  case 'OPERATOR_UNSPECIFIED':
                                  default:
                                    return Dr();
                                }
                              })(),
                              n.fieldFilter.value,
                            )),
                          ]
                        : void 0 !== t.compositeFilter
                        ? t.compositeFilter.filters
                            .map(function(t) {
                              return e(t);
                            })
                            .reduce(function(t, e) {
                              return t.concat(e);
                            })
                        : Dr()
                      : [];
                    var n;
                  })(n.where));
                var u = [];
                n.orderBy &&
                  (u = n.orderBy.map(function(t) {
                    return new wu(
                      Jo((e = t).field),
                      (function() {
                        switch (e.direction) {
                          case 'ASCENDING':
                            return 'asc';
                          case 'DESCENDING':
                            return 'desc';
                          default:
                            return;
                        }
                      })(),
                    );
                    var e;
                  }));
                var a,
                  h,
                  c = null;
                n.limit &&
                  ((a = n.limit),
                  (c = ci((h = 'object' == typeof a ? a.value : a))
                    ? null
                    : h));
                var f = null;
                n.startAt && (f = Yo(n.startAt));
                var l = null;
                return (
                  n.endAt && (l = Yo(n.endAt)),
                  new $s(e, i, u, s, c, 'F', f, l).We()
                );
              })(t.query)),
          new mi(
            e,
            t.targetId,
            0,
            t.lastListenSequenceNumber,
            n,
            r,
            pi.fromBase64String(t.resumeToken),
          )
        );
      }
      function pa(t, e) {
        var n,
          r = ha(e.J),
          i = ha(e.lastLimboFreeSnapshotVersion);
        n = (Au(e.target) ? Wo : Ko)(t.ui, e.target);
        var o = e.resumeToken.toBase64();
        return new sh(e.targetId, _u(e.target), r, o, e.sequenceNumber, i, n);
      }
      var da,
        ya =
          ((va.prototype.un = function(t, e, n) {
            return ma(t).put(wa(e), n);
          }),
          (va.prototype.ln = function(t, e) {
            var n = ma(t),
              r = wa(e);
            return n.delete(r);
          }),
          (va.prototype.updateMetadata = function(e, n) {
            var r = this;
            return this.getMetadata(e).next(function(t) {
              return (t.byteSize += n), r.ci(e, t);
            });
          }),
          (va.prototype._n = function(t, e) {
            var n = this;
            return ma(t)
              .get(wa(e))
              .next(function(t) {
                return n.li(t);
              });
          }),
          (va.prototype._i = function(t, e) {
            var n = this;
            return ma(t)
              .get(wa(e))
              .next(function(t) {
                var e = n.li(t);
                return e ? { fi: e, size: ba(t) } : null;
              });
          }),
          (va.prototype.getEntries = function(t, e) {
            var r = this,
              i = Ui();
            return this.di(t, e, function(t, e) {
              var n = r.li(e);
              i = i.et(t, n);
            }).next(function() {
              return i;
            });
          }),
          (va.prototype.wi = function(t, e) {
            var r = this,
              i = Ui(),
              o = new Ii(ai.P);
            return this.di(t, e, function(t, e) {
              var n = r.li(e);
              o = n
                ? ((i = i.et(t, n)), o.et(t, ba(e)))
                : ((i = i.et(t, null)), o.et(t, 0));
            }).next(function() {
              return { Ti: i, Ei: o };
            });
          }),
          (va.prototype.di = function(t, e, i) {
            if (e._()) return Ou.resolve();
            var n = IDBKeyRange.bound(e.first().path.F(), e.last().path.F()),
              o = e.at(),
              s = o.dt();
            return ma(t)
              .Ii({ range: n }, function(t, e, n) {
                for (var r = ai.j(t); s && ai.P(s, r) < 0; )
                  i(s, null), (s = o.dt());
                s && s.isEqual(r) && (i(s, e), (s = o.wt() ? o.dt() : null)),
                  s ? n.Ai(s.path.F()) : n.done();
              })
              .next(function() {
                for (; s; ) i(s, null), (s = o.wt() ? o.dt() : null);
              });
          }),
          (va.prototype.Sn = function(t, i, e) {
            var o = this,
              s = Vi(),
              u = i.path.length + 1,
              n = {};
            if (e.isEqual(Xr.min())) {
              var r = i.path.F();
              n.range = IDBKeyRange.lowerBound(r);
            } else {
              var a = i.path.F(),
                h = ua(e);
              (n.range = IDBKeyRange.lowerBound([a, h], !0)),
                (n.index = ih.collectionReadTimeIndex);
            }
            return ma(t)
              .Ii(n, function(t, e, n) {
                if (t.length === u) {
                  var r = oa(o.serializer, e);
                  i.path.D(r.key.path)
                    ? r instanceof Ks && i.matches(r) && (s = s.et(r.key, r))
                    : n.done();
                }
              })
              .next(function() {
                return s;
              });
          }),
          (va.prototype.Ri = function(t, e) {
            var r = this,
              i = Li(),
              o = ua(e),
              n = ma(t),
              s = IDBKeyRange.lowerBound(o, !0);
            return n
              .Ii({ index: ih.readTimeIndex, range: s }, function(t, e) {
                var n = oa(r.serializer, e);
                (i = i.et(n.key, n)), (o = e.readTime);
              })
              .next(function() {
                return { mi: i, readTime: aa(o) };
              });
          }),
          (va.prototype.Pi = function(t) {
            var e = ma(t),
              r = Xr.min();
            return e
              .Ii({ index: ih.readTimeIndex, reverse: !0 }, function(t, e, n) {
                e.readTime && (r = aa(e.readTime)), n.done();
              })
              .next(function() {
                return r;
              });
          }),
          (va.prototype.Vi = function(t) {
            return new va.gi(this, !!t && t.pi);
          }),
          (va.prototype.yi = function(t) {
            return this.getMetadata(t).next(function(t) {
              return t.byteSize;
            });
          }),
          (va.prototype.getMetadata = function(t) {
            return ga(t)
              .get(oh.key)
              .next(function(t) {
                return Or(!!t), t;
              });
          }),
          (va.prototype.ci = function(t, e) {
            return ga(t).put(oh.key, e);
          }),
          (va.prototype.li = function(t) {
            if (t) {
              var e = oa(this.serializer, t);
              return e instanceof Xs && e.version.isEqual(Xr.min()) ? null : e;
            }
            return null;
          }),
          va);
      function va(t, e) {
        (this.serializer = t), (this.mn = e);
      }
      function ga(t) {
        return Ra.ai(t, oh.store);
      }
      function ma(t) {
        return Ra.ai(t, ih.store);
      }
      function wa(t) {
        return t.path.F();
      }
      function ba(t) {
        var e;
        if (t.document) e = t.document;
        else if (t.unknownDocument) e = t.unknownDocument;
        else {
          if (!t.noDocument) throw Dr();
          e = t.noDocument;
        }
        return JSON.stringify(e).length;
      }
      function Ea(t, e) {
        var n = this;
        return (
          ((n = da.call(this) || this).bi = t),
          (n.pi = e),
          (n.vi = new zr(
            function(t) {
              return t.toString();
            },
            function(t, e) {
              return t.isEqual(e);
            },
          )),
          n
        );
      }
      ya.gi =
        (n(Ea, (da = xu)),
        (Ea.prototype.wn = function(s) {
          var u = this,
            a = [],
            h = 0,
            c = new Oi(function(t, e) {
              return Lr(t.N(), e.N());
            });
          return (
            this.on.forEach(function(t, e) {
              var n = u.vi.get(t);
              if (e) {
                var r = sa(u.bi.serializer, e, u.readTime);
                c = c.add(t.path.p());
                var i = ba(r);
                (h += i - n), a.push(u.bi.un(s, t, r));
              } else if (((h -= n), u.pi)) {
                var o = sa(u.bi.serializer, new Xs(t, Xr.min()), u.readTime);
                a.push(u.bi.un(s, t, o));
              } else a.push(u.bi.ln(s, t));
            }),
            c.forEach(function(t) {
              a.push(u.bi.mn.ri(s, t));
            }),
            a.push(this.bi.updateMetadata(s, h)),
            Ou.nn(a)
          );
        }),
        (Ea.prototype.fn = function(t, e) {
          var n = this;
          return this.bi._i(t, e).next(function(t) {
            return null === t
              ? (n.vi.set(e, 0), null)
              : (n.vi.set(e, t.size), t.fi);
          });
        }),
        (Ea.prototype.dn = function(t, e) {
          var n = this;
          return this.bi.wi(t, e).next(function(t) {
            var e = t.Ti;
            return (
              t.Ei.forEach(function(t, e) {
                n.vi.set(t, e);
              }),
              e
            );
          });
        }),
        Ea);
      var Ia =
          ((Na.prototype.next = function() {
            return (this.Si += 2), this.Si;
          }),
          (Na.Di = function() {
            return new Na(0);
          }),
          (Na.Ci = function() {
            return new Na(-1);
          }),
          Na),
        Ta =
          ((_a.prototype.Ni = function(n) {
            var r = this;
            return this.$i(n).next(function(t) {
              var e = new Ia(t.highestTargetId);
              return (
                (t.highestTargetId = e.next()),
                r.ki(n, t).next(function() {
                  return t.highestTargetId;
                })
              );
            });
          }),
          (_a.prototype.xi = function(t) {
            return this.$i(t).next(function(t) {
              return Xr.I(
                new Kr(
                  t.lastRemoteSnapshotVersion.seconds,
                  t.lastRemoteSnapshotVersion.nanoseconds,
                ),
              );
            });
          }),
          (_a.prototype.Mi = function(t) {
            return this.$i(t).next(function(t) {
              return t.highestListenSequenceNumber;
            });
          }),
          (_a.prototype.Li = function(e, n, r) {
            var i = this;
            return this.$i(e).next(function(t) {
              return (
                (t.highestListenSequenceNumber = n),
                r && (t.lastRemoteSnapshotVersion = r.R()),
                n > t.highestListenSequenceNumber &&
                  (t.highestListenSequenceNumber = n),
                i.ki(e, t)
              );
            });
          }),
          (_a.prototype.Oi = function(e, n) {
            var r = this;
            return this.Bi(e, n).next(function() {
              return r.$i(e).next(function(t) {
                return (t.targetCount += 1), r.qi(n, t), r.ki(e, t);
              });
            });
          }),
          (_a.prototype.Ui = function(t, e) {
            return this.Bi(t, e);
          }),
          (_a.prototype.Qi = function(e, t) {
            var n = this;
            return this.Wi(e, t.targetId)
              .next(function() {
                return Aa(e).delete(t.targetId);
              })
              .next(function() {
                return n.$i(e);
              })
              .next(function(t) {
                return Or(0 < t.targetCount), --t.targetCount, n.ki(e, t);
              });
          }),
          (_a.prototype.ji = function(r, i, o) {
            var s = this,
              u = 0,
              a = [];
            return Aa(r)
              .Ii(function(t, e) {
                var n = la(e);
                n.sequenceNumber <= i &&
                  null === o.get(n.targetId) &&
                  (u++, a.push(s.Qi(r, n)));
              })
              .next(function() {
                return Ou.nn(a);
              })
              .next(function() {
                return u;
              });
          }),
          (_a.prototype.ye = function(t, r) {
            return Aa(t).Ii(function(t, e) {
              var n = la(e);
              r(n);
            });
          }),
          (_a.prototype.$i = function(t) {
            return Sa(t)
              .get(ah.key)
              .next(function(t) {
                return Or(null !== t), t;
              });
          }),
          (_a.prototype.ki = function(t, e) {
            return Sa(t).put(ah.key, e);
          }),
          (_a.prototype.Bi = function(t, e) {
            return Aa(t).put(pa(this.serializer, e));
          }),
          (_a.prototype.qi = function(t, e) {
            var n = !1;
            return (
              t.targetId > e.highestTargetId &&
                ((e.highestTargetId = t.targetId), (n = !0)),
              t.sequenceNumber > e.highestListenSequenceNumber &&
                ((e.highestListenSequenceNumber = t.sequenceNumber), (n = !0)),
              n
            );
          }),
          (_a.prototype.Ki = function(t) {
            return this.$i(t).next(function(t) {
              return t.targetCount;
            });
          }),
          (_a.prototype.Gi = function(t, i) {
            var e = _u(i),
              n = IDBKeyRange.bound(
                [e, Number.NEGATIVE_INFINITY],
                [e, Number.POSITIVE_INFINITY],
              ),
              o = null;
            return Aa(t)
              .Ii({ range: n, index: sh.queryTargetsIndexName }, function(
                t,
                e,
                n,
              ) {
                var r = la(e);
                Nu(i, r.target) && ((o = r), n.done());
              })
              .next(function() {
                return o;
              });
          }),
          (_a.prototype.zi = function(n, t, r) {
            var i = this,
              o = [],
              s = Da(n);
            return (
              t.forEach(function(t) {
                var e = Wu(t.path);
                o.push(s.put(new uh(r, e))), o.push(i.Fi.Hi(n, r, t));
              }),
              Ou.nn(o)
            );
          }),
          (_a.prototype.Yi = function(n, t, r) {
            var i = this,
              o = Da(n);
            return Ou.forEach(t, function(t) {
              var e = Wu(t.path);
              return Ou.nn([o.delete([r, e]), i.Fi.Ji(n, r, t)]);
            });
          }),
          (_a.prototype.Wi = function(t, e) {
            var n = Da(t),
              r = IDBKeyRange.bound([e], [e + 1], !1, !0);
            return n.delete(r);
          }),
          (_a.prototype.Xi = function(t, e) {
            var n = IDBKeyRange.bound([e], [e + 1], !1, !0),
              r = Da(t),
              o = qi();
            return r
              .Ii({ range: n, Zi: !0 }, function(t, e, n) {
                var r = Yu(t[1]),
                  i = new ai(r);
                o = o.add(i);
              })
              .next(function() {
                return o;
              });
          }),
          (_a.prototype.tr = function(t, e) {
            var n = Wu(e.path),
              r = IDBKeyRange.bound([n], [Cr(n)], !1, !0),
              i = 0;
            return Da(t)
              .Ii(
                { index: uh.documentTargetsIndex, Zi: !0, range: r },
                function(t, e, n) {
                  var r = t[0];
                  t[1], 0 !== r && (i++, n.done());
                },
              )
              .next(function() {
                return 0 < i;
              });
          }),
          (_a.prototype.Me = function(t, e) {
            return Aa(t)
              .get(e)
              .next(function(t) {
                return t ? la(t) : null;
              });
          }),
          _a);
      function _a(t, e) {
        (this.Fi = t), (this.serializer = e);
      }
      function Na(t) {
        this.Si = t;
      }
      function Aa(t) {
        return Ra.ai(t, sh.store);
      }
      function Sa(t) {
        return Ra.ai(t, ah.store);
      }
      function Da(t) {
        return Ra.ai(t, uh.store);
      }
      var Oa,
        xa =
          'Failed to obtain exclusive access to the persistence layer. To allow shared access, make sure to invoke `enablePersistence()` with `synchronizeTabs:true` in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.',
        Pa = (n(La, (Oa = Ru)), La),
        Ra =
          ((ka.ai = function(t, e) {
            if (t instanceof Pa) return dh.ai(t.er, e);
            throw Dr();
          }),
          (ka.prototype.start = function() {
            var e = this;
            return dh
              .Ir(this.dr, Wa, new Ka(this.serializer))
              .then(function(t) {
                return (e.Ar = t), e.Rr();
              })
              .then(function() {
                if (!e.isPrimary && !e.allowTabSynchronization)
                  throw new Wr(Hr.FAILED_PRECONDITION, xa);
                return (
                  e.mr(),
                  e.Pr(),
                  e.Vr(),
                  e.runTransaction(
                    'getHighestListenSequenceNumber',
                    'readonly',
                    function(t) {
                      return e.Tr.Mi(t);
                    },
                  )
                );
              })
              .then(function(t) {
                e.rr = new Uu(t, e.nr);
              })
              .then(function() {
                e.or = !0;
              })
              .catch(function(t) {
                return e.Ar && e.Ar.close(), Promise.reject(t);
              });
          }),
          (ka.prototype.gr = function(n) {
            var t = this;
            return (
              (this.lr = function(e) {
                return y(t, void 0, void 0, function() {
                  return v(this, function(t) {
                    return this.pr ? [2, n(e)] : [2];
                  });
                });
              }),
              n(this.isPrimary)
            );
          }),
          (ka.prototype.yr = function(n) {
            var t = this;
            this.Ar.br(function(e) {
              return y(t, void 0, void 0, function() {
                return v(this, function(t) {
                  switch (t.label) {
                    case 0:
                      return null === e.newVersion ? [4, n()] : [3, 2];
                    case 1:
                      t.sent(), (t.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            });
          }),
          (ka.prototype.vr = function(t) {
            var e = this;
            this.networkEnabled !== t &&
              ((this.networkEnabled = t),
              this.Wn.Sr(function() {
                return y(e, void 0, void 0, function() {
                  return v(this, function(t) {
                    switch (t.label) {
                      case 0:
                        return this.pr ? [4, this.Rr()] : [3, 2];
                      case 1:
                        t.sent(), (t.label = 2);
                      case 2:
                        return [2];
                    }
                  });
                });
              }));
          }),
          (ka.prototype.Rr = function() {
            var n = this;
            return this.runTransaction(
              'updateClientMetadataAndTryBecomePrimary',
              'readwrite',
              function(e) {
                return Ca(e)
                  .put(
                    new fh(
                      n.clientId,
                      Date.now(),
                      n.networkEnabled,
                      n.inForeground,
                    ),
                  )
                  .next(function() {
                    if (n.isPrimary)
                      return n.Dr(e).next(function(t) {
                        t ||
                          ((n.isPrimary = !1),
                          n.Wn.Cr(function() {
                            return n.lr(!1);
                          }));
                      });
                  })
                  .next(function() {
                    return n.Fr(e);
                  })
                  .next(function(t) {
                    return n.isPrimary && !t
                      ? n.Nr(e).next(function() {
                          return !1;
                        })
                      : !!t &&
                          n.$r(e).next(function() {
                            return !0;
                          });
                  });
              },
            )
              .catch(function(t) {
                if (bh(t))
                  return (
                    Nr(
                      'IndexedDbPersistence',
                      'Failed to extend owner lease: ',
                      t,
                    ),
                    n.isPrimary
                  );
                if (!n.allowTabSynchronization) throw t;
                return (
                  Nr(
                    'IndexedDbPersistence',
                    'Releasing owner lease after error during lease refresh',
                    t,
                  ),
                  !1
                );
              })
              .then(function(t) {
                n.isPrimary !== t &&
                  n.Wn.Cr(function() {
                    return n.lr(t);
                  }),
                  (n.isPrimary = t);
              });
          }),
          (ka.prototype.Dr = function(t) {
            var e = this;
            return Ua(t)
              .get(Ya.key)
              .next(function(t) {
                return Ou.resolve(e.kr(t));
              });
          }),
          (ka.prototype.xr = function(t) {
            return Ca(t).delete(this.clientId);
          }),
          (ka.prototype.Mr = function() {
            return y(this, void 0, void 0, function() {
              var e,
                n,
                r,
                i,
                o = this;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return !this.isPrimary || this.Lr(this.cr, 18e5)
                      ? [3, 2]
                      : ((this.cr = Date.now()),
                        [
                          4,
                          this.runTransaction(
                            'maybeGarbageCollectMultiClientState',
                            'readwrite-primary',
                            function(t) {
                              var r = ka.ai(t, fh.store);
                              return r.hi().next(function(t) {
                                var e = o.Or(t, 18e5),
                                  n = t.filter(function(t) {
                                    return -1 === e.indexOf(t);
                                  });
                                return Ou.forEach(n, function(t) {
                                  return r.delete(t.clientId);
                                }).next(function() {
                                  return n;
                                });
                              });
                            },
                          ).catch(function() {
                            return [];
                          }),
                        ]);
                  case 1:
                    if (((e = t.sent()), this.Er))
                      for (n = 0, r = e; n < r.length; n++)
                        (i = r[n]), this.Er.removeItem(this.Br(i.clientId));
                    t.label = 2;
                  case 2:
                    return [2];
                }
              });
            });
          }),
          (ka.prototype.Vr = function() {
            var t = this;
            this.ur = this.Wn.ei('client_metadata_refresh', 4e3, function() {
              return t
                .Rr()
                .then(function() {
                  return t.Mr();
                })
                .then(function() {
                  return t.Vr();
                });
            });
          }),
          (ka.prototype.kr = function(t) {
            return !!t && t.ownerId === this.clientId;
          }),
          (ka.prototype.Fr = function(e) {
            var i = this;
            return this.ir
              ? Ou.resolve(!0)
              : Ua(e)
                  .get(Ya.key)
                  .next(function(t) {
                    if (
                      null !== t &&
                      i.Lr(t.leaseTimestampMs, 5e3) &&
                      !i.qr(t.ownerId)
                    ) {
                      if (i.kr(t) && i.networkEnabled) return !0;
                      if (!i.kr(t)) {
                        if (!t.allowTabSynchronization)
                          throw new Wr(Hr.FAILED_PRECONDITION, xa);
                        return !1;
                      }
                    }
                    return (
                      !(!i.networkEnabled || !i.inForeground) ||
                      Ca(e)
                        .hi()
                        .next(function(t) {
                          return (
                            void 0 ===
                            i.Or(t, 5e3).find(function(t) {
                              if (i.clientId !== t.clientId) {
                                var e = !i.networkEnabled && t.networkEnabled,
                                  n = !i.inForeground && t.inForeground,
                                  r = i.networkEnabled === t.networkEnabled;
                                if (e || (n && r)) return !0;
                              }
                              return !1;
                            })
                          );
                        })
                    );
                  })
                  .next(function(t) {
                    return (
                      i.isPrimary !== t &&
                        Nr(
                          'IndexedDbPersistence',
                          'Client ' +
                            (t ? 'is' : 'is not') +
                            ' eligible for a primary lease.',
                        ),
                      t
                    );
                  });
          }),
          (ka.prototype.Ur = function() {
            return y(this, void 0, void 0, function() {
              var e = this;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return (
                      (this.or = !1),
                      this.Qr(),
                      this.ur && (this.ur.cancel(), (this.ur = null)),
                      this.Wr(),
                      this.jr(),
                      [
                        4,
                        this.runTransaction('shutdown', 'readwrite', function(
                          t,
                        ) {
                          return e.Nr(t).next(function() {
                            return e.xr(t);
                          });
                        }).catch(function(t) {
                          Nr(
                            'IndexedDbPersistence',
                            'Proceeding with shutdown despite failure: ',
                            t,
                          );
                        }),
                      ]
                    );
                  case 1:
                    return t.sent(), this.Ar.close(), this.Kr(), [2];
                }
              });
            });
          }),
          (ka.prototype.Or = function(t, e) {
            var n = this;
            return t.filter(function(t) {
              return n.Lr(t.updateTimeMs, e) && !n.qr(t.clientId);
            });
          }),
          (ka.prototype.Gr = function() {
            var e = this;
            return this.runTransaction('getActiveClients', 'readonly', function(
              t,
            ) {
              return Ca(t)
                .hi()
                .next(function(t) {
                  return e.Or(t, 18e5).map(function(t) {
                    return t.clientId;
                  });
                });
            });
          }),
          (ka.clearPersistence = function(n) {
            return y(this, void 0, void 0, function() {
              var e;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return ka._r()
                      ? ((e = n + ka.wr), [4, dh.delete(e)])
                      : [2, Promise.resolve()];
                  case 1:
                    return t.sent(), [2];
                }
              });
            });
          }),
          Object.defineProperty(ka.prototype, 'pr', {
            get: function() {
              return this.or;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (ka.prototype.zr = function(t) {
            return qa.Hr(t, this.serializer, this.mn, this.Fi);
          }),
          (ka.prototype.Yr = function() {
            return this.Tr;
          }),
          (ka.prototype.Jr = function() {
            return this.An;
          }),
          (ka.prototype.Xr = function() {
            return this.mn;
          }),
          (ka.prototype.runTransaction = function(e, n, r) {
            var i = this;
            Nr('IndexedDbPersistence', 'Starting transaction:', e);
            var o,
              t = 'readonly' === n ? 'readonly' : 'readwrite';
            return this.Ar.runTransaction(t, ph, function(t) {
              return (
                (o = new Pa(t, i.rr ? i.rr.next() : Uu.Qn)),
                'readwrite-primary' === n
                  ? i
                      .Dr(o)
                      .next(function(t) {
                        return !!t || i.Fr(o);
                      })
                      .next(function(t) {
                        if (!t)
                          throw (Ar(
                            "Failed to obtain primary lease for action '" +
                              e +
                              "'.",
                          ),
                          (i.isPrimary = !1),
                          i.Wn.Cr(function() {
                            return i.lr(!1);
                          }),
                          new Wr(Hr.FAILED_PRECONDITION, Pu));
                        return r(o);
                      })
                      .next(function(t) {
                        return i.$r(o).next(function() {
                          return t;
                        });
                      })
                  : i.Zr(o).next(function() {
                      return r(o);
                    })
              );
            }).then(function(t) {
              return o.In(), t;
            });
          }),
          (ka.prototype.Zr = function(t) {
            var e = this;
            return Ua(t)
              .get(Ya.key)
              .next(function(t) {
                if (
                  null !== t &&
                  e.Lr(t.leaseTimestampMs, 5e3) &&
                  !e.qr(t.ownerId) &&
                  !e.kr(t) &&
                  !(
                    e.ir ||
                    (e.allowTabSynchronization && t.allowTabSynchronization)
                  )
                )
                  throw new Wr(Hr.FAILED_PRECONDITION, xa);
              });
          }),
          (ka.prototype.$r = function(t) {
            var e = new Ya(
              this.clientId,
              this.allowTabSynchronization,
              Date.now(),
            );
            return Ua(t).put(Ya.key, e);
          }),
          (ka._r = function() {
            return dh._r();
          }),
          (ka.to = function(t) {
            var e = t.s.projectId;
            return (
              t.s.i || (e += '.' + t.s.database),
              'firestore/' + t.persistenceKey + '/' + e + '/'
            );
          }),
          (ka.prototype.Nr = function(t) {
            var e = this,
              n = Ua(t);
            return n.get(Ya.key).next(function(t) {
              return e.kr(t)
                ? (Nr('IndexedDbPersistence', 'Releasing primary lease.'),
                  n.delete(Ya.key))
                : Ou.resolve();
            });
          }),
          (ka.prototype.Lr = function(t, e) {
            var n = Date.now();
            return !(
              t < n - e ||
              (n < t &&
                (Ar(
                  'Detected an update time that is in the future: ' +
                    t +
                    ' > ' +
                    n,
                ),
                1))
            );
          }),
          (ka.prototype.mr = function() {
            var t = this;
            null !== this.document &&
              'function' == typeof this.document.addEventListener &&
              ((this.ar = function() {
                t.Wn.Sr(function() {
                  return (
                    (t.inForeground = 'visible' === t.document.visibilityState),
                    t.Rr()
                  );
                });
              }),
              this.document.addEventListener('visibilitychange', this.ar),
              (this.inForeground =
                'visible' === this.document.visibilityState));
          }),
          (ka.prototype.Wr = function() {
            this.ar &&
              (this.document.removeEventListener('visibilitychange', this.ar),
              (this.ar = null));
          }),
          (ka.prototype.Pr = function() {
            var t,
              e = this;
            'function' ==
              typeof (null === (t = this.window) || void 0 === t
                ? void 0
                : t.addEventListener) &&
              ((this.hr = function() {
                e.Qr(),
                  e.Wn.Sr(function() {
                    return e.Ur();
                  });
              }),
              this.window.addEventListener('unload', this.hr));
          }),
          (ka.prototype.jr = function() {
            this.hr &&
              (this.window.removeEventListener('unload', this.hr),
              (this.hr = null));
          }),
          (ka.prototype.qr = function(t) {
            var e;
            try {
              var n =
                null !==
                (null === (e = this.Er) || void 0 === e
                  ? void 0
                  : e.getItem(this.Br(t)));
              return (
                Nr(
                  'IndexedDbPersistence',
                  "Client '" +
                    t +
                    "' " +
                    (n ? 'is' : 'is not') +
                    ' zombied in LocalStorage',
                ),
                n
              );
            } catch (t) {
              return (
                Ar(
                  'IndexedDbPersistence',
                  'Failed to get zombied client id.',
                  t,
                ),
                !1
              );
            }
          }),
          (ka.prototype.Qr = function() {
            if (this.Er)
              try {
                this.Er.setItem(this.Br(this.clientId), String(Date.now()));
              } catch (t) {
                Ar('Failed to set zombie client id.', t);
              }
          }),
          (ka.prototype.Kr = function() {
            if (this.Er)
              try {
                this.Er.removeItem(this.Br(this.clientId));
              } catch (t) {}
          }),
          (ka.prototype.Br = function(t) {
            return 'firestore_zombie_' + this.persistenceKey + '_' + t;
          }),
          ka);
      function ka(t, e, n, r, i, o, s, u, a, h) {
        if (
          ((this.allowTabSynchronization = t),
          (this.persistenceKey = e),
          (this.clientId = n),
          (this.Wn = i),
          (this.window = o),
          (this.document = s),
          (this.nr = a),
          (this.ir = h),
          (this.rr = null),
          (this.or = !1),
          (this.isPrimary = !1),
          (this.networkEnabled = !0),
          (this.hr = null),
          (this.inForeground = !1),
          (this.ar = null),
          (this.ur = null),
          (this.cr = Number.NEGATIVE_INFINITY),
          (this.lr = function(t) {
            return Promise.resolve();
          }),
          !ka._r())
        )
          throw new Wr(
            Hr.UNIMPLEMENTED,
            'This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.',
          );
        (this.Fi = new Va(this, r)),
          (this.dr = e + ka.wr),
          (this.serializer = new ia(u)),
          (this.Tr = new Ta(this.Fi, this.serializer)),
          (this.mn = new Zu()),
          (this.An = new ya(this.serializer, this.mn)),
          this.window && this.window.localStorage
            ? (this.Er = this.window.localStorage)
            : ((this.Er = null),
              !1 === h &&
                Ar(
                  'IndexedDbPersistence',
                  'LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page.',
                ));
      }
      function La(t, e) {
        var n = this;
        return ((n = Oa.call(this) || this).er = t), (n.sr = e), n;
      }
      function Ua(t) {
        return Ra.ai(t, Ya.store);
      }
      function Ca(t) {
        return Ra.ai(t, fh.store);
      }
      Ra.wr = 'main';
      var Va =
        ((Ma.prototype.so = function(t) {
          var n = this.no(t);
          return this.db
            .Yr()
            .Ki(t)
            .next(function(e) {
              return n.next(function(t) {
                return e + t;
              });
            });
        }),
        (Ma.prototype.no = function(t) {
          var e = 0;
          return this.io(t, function(t) {
            e++;
          }).next(function() {
            return e;
          });
        }),
        (Ma.prototype.ye = function(t, e) {
          return this.db.Yr().ye(t, e);
        }),
        (Ma.prototype.io = function(t, n) {
          return this.ro(t, function(t, e) {
            return n(e);
          });
        }),
        (Ma.prototype.Hi = function(t, e, n) {
          return Fa(t, n);
        }),
        (Ma.prototype.Ji = function(t, e, n) {
          return Fa(t, n);
        }),
        (Ma.prototype.ji = function(t, e, n) {
          return this.db.Yr().ji(t, e, n);
        }),
        (Ma.prototype.oo = function(t, e) {
          return Fa(t, e);
        }),
        (Ma.prototype.ho = function(t, e) {
          return (
            (r = e),
            (i = !1),
            Ha((n = t))
              .ao(function(t) {
                return Ba(n, t, r).next(function(t) {
                  return t && (i = !0), Ou.resolve(!t);
                });
              })
              .next(function() {
                return i;
              })
          );
          var n, r, i;
        }),
        (Ma.prototype.uo = function(r, i) {
          var o = this,
            s = this.db.Jr().Vi(),
            u = [],
            a = 0;
          return this.ro(r, function(e, t) {
            if (t <= i) {
              var n = o.ho(r, e).next(function(t) {
                if (!t)
                  return (
                    a++,
                    s._n(r, e).next(function() {
                      return s.ln(e), Da(r).delete([0, Wu(e.path)]);
                    })
                  );
              });
              u.push(n);
            }
          })
            .next(function() {
              return Ou.nn(u);
            })
            .next(function() {
              return s.apply(r);
            })
            .next(function() {
              return a;
            });
        }),
        (Ma.prototype.removeTarget = function(t, e) {
          var n = e.X(t.sr);
          return this.db.Yr().Ui(t, n);
        }),
        (Ma.prototype.co = function(t, e) {
          return Fa(t, e);
        }),
        (Ma.prototype.ro = function(t, o) {
          var s,
            e = Da(t),
            u = Uu.Qn;
          return e
            .Ii({ index: uh.documentTargetsIndex }, function(t, e) {
              var n = t[0],
                r = (t[1], e.path),
                i = e.sequenceNumber;
              0 === n
                ? (u !== Uu.Qn && o(new ai(Yu(s)), u), (u = i), (s = r))
                : (u = Uu.Qn);
            })
            .next(function() {
              u !== Uu.Qn && o(new ai(Yu(s)), u);
            });
        }),
        (Ma.prototype.lo = function(t) {
          return this.db.Jr().yi(t);
        }),
        Ma);
      function Ma(t, e) {
        (this.db = t), (this.eo = new jh(this, e));
      }
      function Fa(t, e) {
        return Da(t).put(((n = e), (r = t.sr), new uh(0, Wu(n.path), r)));
        var n, r;
      }
      var qa =
        ((ja.Hr = function(t, e, n, r) {
          return Or('' !== t.uid), new ja(t.fo() ? t.uid : '', e, n, r);
        }),
        (ja.prototype.do = function(t) {
          var r = !0,
            e = IDBKeyRange.bound(
              [this.userId, Number.NEGATIVE_INFINITY],
              [this.userId, Number.POSITIVE_INFINITY],
            );
          return Qa(t)
            .Ii({ index: Za.userMutationsIndex, range: e }, function(t, e, n) {
              (r = !1), n.done();
            })
            .next(function() {
              return r;
            });
        }),
        (ja.prototype.wo = function(h, c, f, l) {
          var p = this,
            d = za(h),
            y = Qa(h);
          return y.add({}).next(function(t) {
            Or('number' == typeof t);
            for (
              var e = new Su(t, c, f, l),
                n = (function(e, t, n) {
                  var r = n.baseMutations.map(function(t) {
                      return zo(e.ui, t);
                    }),
                    i = n.mutations.map(function(t) {
                      return zo(e.ui, t);
                    });
                  return new Za(t, n.batchId, n.Ws.toMillis(), r, i);
                })(p.serializer, p.userId, e),
                r = [],
                i = new Oi(function(t, e) {
                  return Lr(t.N(), e.N());
                }),
                o = 0,
                s = l;
              o < s.length;
              o++
            ) {
              var u = s[o],
                a = th.key(p.userId, u.key.path, t);
              (i = i.add(u.key.path.p())),
                r.push(y.put(n)),
                r.push(d.put(a, th.PLACEHOLDER));
            }
            return (
              i.forEach(function(t) {
                r.push(p.mn.ri(h, t));
              }),
              h.En(function() {
                p._o[t] = e.keys();
              }),
              Ou.nn(r).next(function() {
                return e;
              })
            );
          });
        }),
        (ja.prototype.To = function(t, e) {
          var n = this;
          return Qa(t)
            .get(e)
            .next(function(t) {
              return t
                ? (Or(t.userId === n.userId), fa(n.serializer, t))
                : null;
            });
        }),
        (ja.prototype.Eo = function(t, n) {
          var r = this;
          return this._o[n]
            ? Ou.resolve(this._o[n])
            : this.To(t, n).next(function(t) {
                if (t) {
                  var e = t.keys();
                  return (r._o[n] = e);
                }
                return null;
              });
        }),
        (ja.prototype.Io = function(t, e) {
          var r = this,
            i = e + 1,
            n = IDBKeyRange.lowerBound([this.userId, i]),
            o = null;
          return Qa(t)
            .Ii({ index: Za.userMutationsIndex, range: n }, function(t, e, n) {
              e.userId === r.userId &&
                (Or(e.batchId >= i), (o = fa(r.serializer, e))),
                n.done();
            })
            .next(function() {
              return o;
            });
        }),
        (ja.prototype.Ao = function(t) {
          var e = IDBKeyRange.upperBound([
              this.userId,
              Number.POSITIVE_INFINITY,
            ]),
            r = -1;
          return Qa(t)
            .Ii(
              { index: Za.userMutationsIndex, range: e, reverse: !0 },
              function(t, e, n) {
                (r = e.batchId), n.done();
              },
            )
            .next(function() {
              return r;
            });
        }),
        (ja.prototype.Ro = function(t) {
          var e = this,
            n = IDBKeyRange.bound(
              [this.userId, -1],
              [this.userId, Number.POSITIVE_INFINITY],
            );
          return Qa(t)
            .hi(Za.userMutationsIndex, n)
            .next(function(t) {
              return t.map(function(t) {
                return fa(e.serializer, t);
              });
            });
        }),
        (ja.prototype.Vn = function(u, a) {
          var h = this,
            t = th.prefixForPath(this.userId, a.path),
            e = IDBKeyRange.lowerBound(t),
            c = [];
          return za(u)
            .Ii({ range: e }, function(t, e, n) {
              var r = t[0],
                i = t[1],
                o = t[2],
                s = Yu(i);
              if (r === h.userId && a.path.isEqual(s))
                return Qa(u)
                  .get(o)
                  .next(function(t) {
                    if (!t) throw Dr();
                    Or(t.userId === h.userId), c.push(fa(h.serializer, t));
                  });
              n.done();
            })
            .next(function() {
              return c;
            });
        }),
        (ja.prototype.vn = function(r, t) {
          var a = this,
            h = new Oi(Lr),
            i = [];
          return (
            t.forEach(function(u) {
              var t = th.prefixForPath(a.userId, u.path),
                e = IDBKeyRange.lowerBound(t),
                n = za(r).Ii({ range: e }, function(t, e, n) {
                  var r = t[0],
                    i = t[1],
                    o = t[2],
                    s = Yu(i);
                  r === a.userId && u.path.isEqual(s)
                    ? (h = h.add(o))
                    : n.done();
                });
              i.push(n);
            }),
            Ou.nn(i).next(function() {
              return a.mo(r, h);
            })
          );
        }),
        (ja.prototype.$n = function(t, e) {
          var u = this,
            a = e.path,
            h = a.length + 1,
            n = th.prefixForPath(this.userId, a),
            r = IDBKeyRange.lowerBound(n),
            c = new Oi(Lr);
          return za(t)
            .Ii({ range: r }, function(t, e, n) {
              var r = t[0],
                i = t[1],
                o = t[2],
                s = Yu(i);
              r === u.userId && a.D(s)
                ? s.length === h && (c = c.add(o))
                : n.done();
            })
            .next(function() {
              return u.mo(t, c);
            });
        }),
        (ja.prototype.mo = function(e, t) {
          var n = this,
            r = [],
            i = [];
          return (
            t.forEach(function(t) {
              i.push(
                Qa(e)
                  .get(t)
                  .next(function(t) {
                    if (null === t) throw Dr();
                    Or(t.userId === n.userId), r.push(fa(n.serializer, t));
                  }),
              );
            }),
            Ou.nn(i).next(function() {
              return r;
            })
          );
        }),
        (ja.prototype.Po = function(e, n) {
          var r = this;
          return Ga(e.er, this.userId, n).next(function(t) {
            return (
              e.En(function() {
                r.Vo(n.batchId);
              }),
              Ou.forEach(t, function(t) {
                return r.Fi.oo(e, t);
              })
            );
          });
        }),
        (ja.prototype.Vo = function(t) {
          delete this._o[t];
        }),
        (ja.prototype.po = function(n) {
          var o = this;
          return this.do(n).next(function(t) {
            if (!t) return Ou.resolve();
            var e = IDBKeyRange.lowerBound(th.prefixForUser(o.userId)),
              i = [];
            return za(n)
              .Ii({ range: e }, function(t, e, n) {
                if (t[0] === o.userId) {
                  var r = Yu(t[1]);
                  i.push(r);
                } else n.done();
              })
              .next(function() {
                Or(0 === i.length);
              });
          });
        }),
        (ja.prototype.tr = function(t, e) {
          return Ba(t, this.userId, e);
        }),
        (ja.prototype.yo = function(t) {
          var e = this;
          return Ha(t)
            .get(this.userId)
            .next(function(t) {
              return t || new Ja(e.userId, -1, '');
            });
        }),
        ja);
      function ja(t, e, n, r) {
        (this.userId = t),
          (this.serializer = e),
          (this.mn = n),
          (this.Fi = r),
          (this._o = {});
      }
      function Ba(t, o, e) {
        var n = th.prefixForPath(o, e.path),
          s = n[1],
          r = IDBKeyRange.lowerBound(n),
          u = !1;
        return za(t)
          .Ii({ range: r, Zi: !0 }, function(t, e, n) {
            var r = t[0],
              i = t[1];
            t[2], r === o && i === s && (u = !0), n.done();
          })
          .next(function() {
            return u;
          });
      }
      function Ga(t, e, n) {
        var r = t.store(Za.store),
          i = t.store(th.store),
          o = [],
          s = IDBKeyRange.only(n.batchId),
          u = 0,
          a = r.Ii({ range: s }, function(t, e, n) {
            return u++, n.delete();
          });
        o.push(
          a.next(function() {
            Or(1 === u);
          }),
        );
        for (var h = [], c = 0, f = n.mutations; c < f.length; c++) {
          var l = f[c],
            p = th.key(e, l.key.path, n.batchId);
          o.push(i.delete(p)), h.push(l.key);
        }
        return Ou.nn(o).next(function() {
          return h;
        });
      }
      function Qa(t) {
        return Ra.ai(t, Za.store);
      }
      function za(t) {
        return Ra.ai(t, th.store);
      }
      function Ha(t) {
        return Ra.ai(t, Ja.store);
      }
      var Wa = 10,
        Ka =
          (($a.prototype.createOrUpgrade = function(n, r, t, e) {
            var i = this;
            Or(t < e && 0 <= t && e <= Wa);
            var o,
              s = new Eh(r);
            t < 1 &&
              1 <= e &&
              (n.createObjectStore(Ya.store),
              (o = n).createObjectStore(Ja.store, { keyPath: Ja.keyPath }),
              o
                .createObjectStore(Za.store, {
                  keyPath: Za.keyPath,
                  autoIncrement: !0,
                })
                .createIndex(Za.userMutationsIndex, Za.userMutationsKeyPath, {
                  unique: !0,
                }),
              o.createObjectStore(th.store),
              ch(n),
              n.createObjectStore(ih.store));
            var u,
              a = Ou.resolve();
            return (
              t < 3 &&
                3 <= e &&
                (0 !== t &&
                  ((u = n).deleteObjectStore(uh.store),
                  u.deleteObjectStore(sh.store),
                  u.deleteObjectStore(ah.store),
                  ch(n)),
                (a = a.next(function() {
                  return (
                    (t = s.store(ah.store)),
                    (e = new ah(0, 0, Xr.min().R(), 0)),
                    t.put(ah.key, e)
                  );
                  var t, e;
                }))),
              t < 4 &&
                4 <= e &&
                (0 !== t &&
                  (a = a.next(function() {
                    return (
                      (r = n),
                      (i = s)
                        .store(Za.store)
                        .hi()
                        .next(function(t) {
                          r.deleteObjectStore(Za.store),
                            r
                              .createObjectStore(Za.store, {
                                keyPath: Za.keyPath,
                                autoIncrement: !0,
                              })
                              .createIndex(
                                Za.userMutationsIndex,
                                Za.userMutationsKeyPath,
                                { unique: !0 },
                              );
                          var e = i.store(Za.store),
                            n = t.map(function(t) {
                              return e.put(t);
                            });
                          return Ou.nn(n);
                        })
                    );
                    var r, i;
                  })),
                (a = a.next(function() {
                  n.createObjectStore(fh.store, { keyPath: fh.keyPath });
                }))),
              t < 5 &&
                5 <= e &&
                (a = a.next(function() {
                  return i.removeAcknowledgedMutations(s);
                })),
              t < 6 &&
                6 <= e &&
                (a = a.next(function() {
                  return n.createObjectStore(oh.store), i.addDocumentGlobal(s);
                })),
              t < 7 &&
                7 <= e &&
                (a = a.next(function() {
                  return i.ensureSequenceNumbers(s);
                })),
              t < 8 &&
                8 <= e &&
                (a = a.next(function() {
                  return i.createCollectionParentIndex(n, s);
                })),
              t < 9 &&
                9 <= e &&
                (a = a.next(function() {
                  var t, e;
                  (e = n).objectStoreNames.contains('remoteDocumentChanges') &&
                    e.deleteObjectStore('remoteDocumentChanges'),
                    (t = r.objectStore(ih.store)).createIndex(
                      ih.readTimeIndex,
                      ih.readTimeIndexPath,
                      { unique: !1 },
                    ),
                    t.createIndex(
                      ih.collectionReadTimeIndex,
                      ih.collectionReadTimeIndexPath,
                      { unique: !1 },
                    );
                })),
              t < 10 &&
                10 <= e &&
                (a = a.next(function() {
                  return i.rewriteCanonicalIds(s);
                })),
              a
            );
          }),
          ($a.prototype.addDocumentGlobal = function(e) {
            var n = 0;
            return e
              .store(ih.store)
              .Ii(function(t, e) {
                n += ba(e);
              })
              .next(function() {
                var t = new oh(n);
                return e.store(oh.store).put(oh.key, t);
              });
          }),
          ($a.prototype.removeAcknowledgedMutations = function(r) {
            var i = this,
              t = r.store(Ja.store),
              e = r.store(Za.store);
            return t.hi().next(function(t) {
              return Ou.forEach(t, function(n) {
                var t = IDBKeyRange.bound(
                  [n.userId, -1],
                  [n.userId, n.lastAcknowledgedBatchId],
                );
                return e.hi(Za.userMutationsIndex, t).next(function(t) {
                  return Ou.forEach(t, function(t) {
                    Or(t.userId === n.userId);
                    var e = fa(i.serializer, t);
                    return Ga(r, n.userId, e).next(function() {});
                  });
                });
              });
            });
          }),
          ($a.prototype.ensureSequenceNumbers = function(t) {
            var s = t.store(uh.store),
              e = t.store(ih.store);
            return t
              .store(ah.store)
              .get(ah.key)
              .next(function(i) {
                var o = [];
                return e
                  .Ii(function(t, e) {
                    var n = new $r(t),
                      r = [0, Wu(n)];
                    o.push(
                      s.get(r).next(function(t) {
                        return t
                          ? Ou.resolve()
                          : ((e = n),
                            s.put(
                              new uh(0, Wu(e), i.highestListenSequenceNumber),
                            ));
                        var e;
                      }),
                    );
                  })
                  .next(function() {
                    return Ou.nn(o);
                  });
              });
          }),
          ($a.prototype.createCollectionParentIndex = function(t, e) {
            function i(t) {
              if (o.add(t)) {
                var e = t.S(),
                  n = t.p();
                return r.put({ collectionId: e, parent: Wu(n) });
              }
            }
            t.createObjectStore(hh.store, { keyPath: hh.keyPath });
            var r = e.store(hh.store),
              o = new Ju();
            return e
              .store(ih.store)
              .Ii({ Zi: !0 }, function(t, e) {
                var n = new $r(t);
                return i(n.p());
              })
              .next(function() {
                return e.store(th.store).Ii({ Zi: !0 }, function(t, e) {
                  t[0];
                  var n = t[1],
                    r = (t[2], Yu(n));
                  return i(r.p());
                });
              });
          }),
          ($a.prototype.rewriteCanonicalIds = function(t) {
            var i = this,
              o = t.store(sh.store);
            return o.Ii(function(t, e) {
              var n = la(e),
                r = pa(i.serializer, n);
              return o.put(r);
            });
          }),
          $a),
        Xa = function(t, e) {
          (this.seconds = t), (this.nanoseconds = e);
        },
        Ya = function(t, e, n) {
          (this.ownerId = t),
            (this.allowTabSynchronization = e),
            (this.leaseTimestampMs = n);
        };
      function $a(t) {
        this.serializer = t;
      }
      (Ya.store = 'owner'), (Ya.key = 'owner');
      var Ja = function(t, e, n) {
        (this.userId = t),
          (this.lastAcknowledgedBatchId = e),
          (this.lastStreamToken = n);
      };
      (Ja.store = 'mutationQueues'), (Ja.keyPath = 'userId');
      var Za = function(t, e, n, r, i) {
        (this.userId = t),
          (this.batchId = e),
          (this.localWriteTimeMs = n),
          (this.baseMutations = r),
          (this.mutations = i);
      };
      (Za.store = 'mutations'),
        (Za.keyPath = 'batchId'),
        (Za.userMutationsIndex = 'userMutationsIndex'),
        (Za.userMutationsKeyPath = ['userId', 'batchId']);
      var th =
        ((eh.prefixForUser = function(t) {
          return [t];
        }),
        (eh.prefixForPath = function(t, e) {
          return [t, Wu(e)];
        }),
        (eh.key = function(t, e, n) {
          return [t, Wu(e), n];
        }),
        eh);
      function eh() {}
      (th.store = 'documentMutations'), (th.PLACEHOLDER = new th());
      var nh = function(t, e) {
          (this.path = t), (this.readTime = e);
        },
        rh = function(t, e) {
          (this.path = t), (this.version = e);
        },
        ih = function(t, e, n, r, i, o) {
          (this.unknownDocument = t),
            (this.noDocument = e),
            (this.document = n),
            (this.hasCommittedMutations = r),
            (this.readTime = i),
            (this.parentPath = o);
        };
      (ih.store = 'remoteDocuments'),
        (ih.readTimeIndex = 'readTimeIndex'),
        (ih.readTimeIndexPath = 'readTime'),
        (ih.collectionReadTimeIndex = 'collectionReadTimeIndex'),
        (ih.collectionReadTimeIndexPath = ['parentPath', 'readTime']);
      var oh = function(t) {
        this.byteSize = t;
      };
      (oh.store = 'remoteDocumentGlobal'), (oh.key = 'remoteDocumentGlobalKey');
      var sh = function(t, e, n, r, i, o, s) {
        (this.targetId = t),
          (this.canonicalId = e),
          (this.readTime = n),
          (this.resumeToken = r),
          (this.lastListenSequenceNumber = i),
          (this.lastLimboFreeSnapshotVersion = o),
          (this.query = s);
      };
      (sh.store = 'targets'),
        (sh.keyPath = 'targetId'),
        (sh.queryTargetsIndexName = 'queryTargetsIndex'),
        (sh.queryTargetsKeyPath = ['canonicalId', 'targetId']);
      var uh = function(t, e, n) {
        (this.targetId = t), (this.path = e), (this.sequenceNumber = n);
      };
      (uh.store = 'targetDocuments'),
        (uh.keyPath = ['targetId', 'path']),
        (uh.documentTargetsIndex = 'documentTargetsIndex'),
        (uh.documentTargetsKeyPath = ['path', 'targetId']);
      var ah = function(t, e, n, r) {
        (this.highestTargetId = t),
          (this.highestListenSequenceNumber = e),
          (this.lastRemoteSnapshotVersion = n),
          (this.targetCount = r);
      };
      (ah.key = 'targetGlobalKey'), (ah.store = 'targetGlobal');
      var hh = function(t, e) {
        (this.collectionId = t), (this.parent = e);
      };
      function ch(t) {
        t
          .createObjectStore(uh.store, { keyPath: uh.keyPath })
          .createIndex(uh.documentTargetsIndex, uh.documentTargetsKeyPath, {
            unique: !0,
          }),
          t
            .createObjectStore(sh.store, { keyPath: sh.keyPath })
            .createIndex(sh.queryTargetsIndexName, sh.queryTargetsKeyPath, {
              unique: !0,
            }),
          t.createObjectStore(ah.store);
      }
      (hh.store = 'collectionParents'),
        (hh.keyPath = ['collectionId', 'parent']);
      var fh = function(t, e, n, r) {
        (this.clientId = t),
          (this.updateTimeMs = e),
          (this.networkEnabled = n),
          (this.inForeground = r);
      };
      (fh.store = 'clientMetadata'), (fh.keyPath = 'clientId');
      var lh,
        ph = d(
          d(
            d(
              [
                Ja.store,
                Za.store,
                th.store,
                ih.store,
                sh.store,
                Ya.store,
                ah.store,
                uh.store,
              ],
              [fh.store],
            ),
            [oh.store],
          ),
          [hh.store],
        ),
        dh =
          ((wh.Ir = function(o, t, s) {
            return (
              Nr('SimpleDb', 'Opening database:', o),
              new Ou(function(n, r) {
                var i = indexedDB.open(o, t);
                (i.onsuccess = function(t) {
                  var e = t.target.result;
                  n(new wh(e));
                }),
                  (i.onblocked = function() {
                    r(
                      new Wr(
                        Hr.FAILED_PRECONDITION,
                        'Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed.',
                      ),
                    );
                  }),
                  (i.onerror = function(t) {
                    var e = t.target.error;
                    'VersionError' === e.name
                      ? r(
                          new Wr(
                            Hr.FAILED_PRECONDITION,
                            'A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.',
                          ),
                        )
                      : r(e);
                  }),
                  (i.onupgradeneeded = function(t) {
                    Nr(
                      'SimpleDb',
                      'Database "' + o + '" requires upgrade from version:',
                      t.oldVersion,
                    );
                    var e = t.target.result;
                    s.createOrUpgrade(e, i.transaction, t.oldVersion, Wa).next(
                      function() {
                        Nr(
                          'SimpleDb',
                          'Database upgrade to version ' + Wa + ' complete',
                        );
                      },
                    );
                  });
              }).en()
            );
          }),
          (wh.delete = function(t) {
            return (
              Nr('SimpleDb', 'Removing database:', t),
              Nh(window.indexedDB.deleteDatabase(t)).en()
            );
          }),
          (wh._r = function() {
            if ('undefined' == typeof indexedDB) return !1;
            if (wh.vo()) return !0;
            var t = g(),
              e = wh.bo(t),
              n = 0 < e && e < 10,
              r = wh.So(t),
              i = 0 < r && r < 4.5;
            return !(
              0 < t.indexOf('MSIE ') ||
              0 < t.indexOf('Trident/') ||
              0 < t.indexOf('Edge/') ||
              n ||
              i
            );
          }),
          (wh.vo = function() {
            var t;
            return (
              'undefined' != typeof __PRIVATE_process &&
              'YES' ===
                (null === (t = __PRIVATE_process.__PRIVATE_env) || void 0 === t
                  ? void 0
                  : t.Do)
            );
          }),
          (wh.ai = function(t, e) {
            return t.store(e);
          }),
          (wh.bo = function(t) {
            var e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),
              n = e
                ? e[1]
                    .split('_')
                    .slice(0, 2)
                    .join('.')
                : '-1';
            return Number(n);
          }),
          (wh.So = function(t) {
            var e = t.match(/Android ([\d.]+)/i),
              n = e
                ? e[1]
                    .split('.')
                    .slice(0, 2)
                    .join('.')
                : '-1';
            return Number(n);
          }),
          (wh.prototype.br = function(e) {
            this.db.onversionchange = function(t) {
              return e(t);
            };
          }),
          (wh.prototype.runTransaction = function(r, h, c) {
            return y(this, void 0, void 0, function() {
              var s, u, e, a, n;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    (s = 'readonly' === r),
                      (u = 0),
                      (e = function() {
                        var e, n, r, i, o;
                        return v(this, function(t) {
                          switch (t.label) {
                            case 0:
                              ++u,
                                (e = Eh.open(
                                  a.db,
                                  s ? 'readonly' : 'readwrite',
                                  h,
                                )),
                                (t.label = 1);
                            case 1:
                              return (
                                t.trys.push([1, 3, , 4]),
                                (n = c(e)
                                  .catch(function(t) {
                                    return e.abort(t), Ou.reject(t);
                                  })
                                  .en()),
                                (r = {}),
                                n.catch(function() {}),
                                [4, e.Co]
                              );
                            case 2:
                              return [2, ((r.value = (t.sent(), n)), r)];
                            case 3:
                              return (
                                (i = t.sent()),
                                (o = 'FirebaseError' !== i.name && u < 3),
                                Nr(
                                  'SimpleDb',
                                  'Transaction failed with error: %s. Retrying: %s.',
                                  i.message,
                                  o,
                                ),
                                o ? [3, 4] : [2, { value: Promise.reject(i) }]
                              );
                            case 4:
                              return [2];
                          }
                        });
                      }),
                      (a = this),
                      (t.label = 1);
                  case 1:
                    return [5, e()];
                  case 2:
                    if ('object' == typeof (n = t.sent())) return [2, n.value];
                    t.label = 3;
                  case 3:
                    return [3, 1];
                  case 4:
                    return [2];
                }
              });
            });
          }),
          (wh.prototype.close = function() {
            this.db.close();
          }),
          wh),
        yh =
          (Object.defineProperty(mh.prototype, 'Js', {
            get: function() {
              return this.No;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(mh.prototype, 'ko', {
            get: function() {
              return this.$o;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(mh.prototype, 'cursor', {
            set: function(t) {
              this.Fo = t;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (mh.prototype.done = function() {
            this.No = !0;
          }),
          (mh.prototype.Ai = function(t) {
            this.$o = t;
          }),
          (mh.prototype.delete = function() {
            return Nh(this.Fo.delete());
          }),
          mh),
        vh = (n(gh, (lh = Wr)), gh);
      function gh(t) {
        var e = this;
        return (
          ((e =
            lh.call(
              this,
              Hr.UNAVAILABLE,
              'IndexedDB transaction failed: ' + t,
            ) || this).name = 'IndexedDbTransactionError'),
          e
        );
      }
      function mh(t) {
        (this.Fo = t), (this.No = !1), (this.$o = null);
      }
      function wh(t) {
        (this.db = t),
          12.2 === wh.bo(g()) &&
            Ar(
              'Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.',
            );
      }
      function bh(t) {
        return 'IndexedDbTransactionError' === t.name;
      }
      var Eh =
          ((_h.open = function(t, e, n) {
            return new _h(t.transaction(n, e));
          }),
          Object.defineProperty(_h.prototype, 'Co', {
            get: function() {
              return this.xo.promise;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (_h.prototype.abort = function(t) {
            t && this.xo.reject(t),
              this.aborted ||
                (Nr(
                  'SimpleDb',
                  'Aborting transaction:',
                  t ? t.message : 'Client-initiated abort',
                ),
                (this.aborted = !0),
                this.transaction.abort());
          }),
          (_h.prototype.store = function(t) {
            var e = this.transaction.objectStore(t);
            return new Ih(e);
          }),
          _h),
        Ih =
          ((Th.prototype.put = function(t, e) {
            return Nh(
              void 0 !== e
                ? (Nr('SimpleDb', 'PUT', this.store.name, t, e),
                  this.store.put(e, t))
                : (Nr('SimpleDb', 'PUT', this.store.name, '<auto-key>', t),
                  this.store.put(t)),
            );
          }),
          (Th.prototype.add = function(t) {
            return (
              Nr('SimpleDb', 'ADD', this.store.name, t, t),
              Nh(this.store.add(t))
            );
          }),
          (Th.prototype.get = function(e) {
            var n = this;
            return Nh(this.store.get(e)).next(function(t) {
              return (
                void 0 === t && (t = null),
                Nr('SimpleDb', 'GET', n.store.name, e, t),
                t
              );
            });
          }),
          (Th.prototype.delete = function(t) {
            return (
              Nr('SimpleDb', 'DELETE', this.store.name, t),
              Nh(this.store.delete(t))
            );
          }),
          (Th.prototype.count = function() {
            return (
              Nr('SimpleDb', 'COUNT', this.store.name), Nh(this.store.count())
            );
          }),
          (Th.prototype.hi = function(t, e) {
            var n = this.cursor(this.options(t, e)),
              r = [];
            return this.Mo(n, function(t, e) {
              r.push(e);
            }).next(function() {
              return r;
            });
          }),
          (Th.prototype.Lo = function(t, e) {
            Nr('SimpleDb', 'DELETE ALL', this.store.name);
            var n = this.options(t, e);
            n.Zi = !1;
            var r = this.cursor(n);
            return this.Mo(r, function(t, e, n) {
              return n.delete();
            });
          }),
          (Th.prototype.Ii = function(t, e) {
            var n;
            e ? (n = t) : ((n = {}), (e = t));
            var r = this.cursor(n);
            return this.Mo(r, e);
          }),
          (Th.prototype.ao = function(i) {
            var t = this.cursor({});
            return new Ou(function(n, r) {
              (t.onerror = function(t) {
                var e = Sh(t.target.error);
                r(e);
              }),
                (t.onsuccess = function(t) {
                  var e = t.target.result;
                  e
                    ? i(e.primaryKey, e.value).next(function(t) {
                        t ? e.continue() : n();
                      })
                    : n();
                });
            });
          }),
          (Th.prototype.Mo = function(t, s) {
            var u = [];
            return new Ou(function(o, e) {
              (t.onerror = function(t) {
                e(t.target.error);
              }),
                (t.onsuccess = function(t) {
                  var e = t.target.result;
                  if (e) {
                    var n = new yh(e),
                      r = s(e.primaryKey, e.value, n);
                    if (r instanceof Ou) {
                      var i = r.catch(function(t) {
                        return n.done(), Ou.reject(t);
                      });
                      u.push(i);
                    }
                    n.Js
                      ? o()
                      : null === n.ko
                      ? e.continue()
                      : e.continue(n.ko);
                  } else o();
                });
            }).next(function() {
              return Ou.nn(u);
            });
          }),
          (Th.prototype.options = function(t, e) {
            var n = void 0;
            return (
              void 0 !== t && ('string' == typeof t ? (n = t) : (e = t)),
              { index: n, range: e }
            );
          }),
          (Th.prototype.cursor = function(t) {
            var e = 'next';
            if ((t.reverse && (e = 'prev'), t.index)) {
              var n = this.store.index(t.index);
              return t.Zi
                ? n.openKeyCursor(t.range, e)
                : n.openCursor(t.range, e);
            }
            return this.store.openCursor(t.range, e);
          }),
          Th);
      function Th(t) {
        this.store = t;
      }
      function _h(t) {
        var n = this;
        (this.transaction = t),
          (this.aborted = !1),
          (this.xo = new Qu()),
          (this.transaction.oncomplete = function() {
            n.xo.resolve();
          }),
          (this.transaction.onabort = function() {
            t.error ? n.xo.reject(new vh(t.error)) : n.xo.resolve();
          }),
          (this.transaction.onerror = function(t) {
            var e = Sh(t.target.error);
            n.xo.reject(new vh(e));
          });
      }
      function Nh(t) {
        return new Ou(function(n, r) {
          (t.onsuccess = function(t) {
            var e = t.target.result;
            n(e);
          }),
            (t.onerror = function(t) {
              var e = Sh(t.target.error);
              r(e);
            });
        });
      }
      var Ah = !1;
      function Sh(t) {
        var e = dh.bo(g());
        if (12.2 <= e && e < 13) {
          var n =
            'An internal error was encountered in the Indexed Database server';
          if (0 <= t.message.indexOf(n)) {
            var r = new Wr(
              'internal',
              "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" +
                n +
                "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.",
            );
            return (
              Ah ||
                ((Ah = !0),
                setTimeout(function() {
                  throw r;
                }, 0)),
              r
            );
          }
        }
        return t;
      }
      function Dh() {
        return 'undefined' != typeof window ? window : null;
      }
      var Oh =
          ((Rh.Qo = function(t, e, n, r, i) {
            var o = new Rh(t, e, Date.now() + n, r, i);
            return o.start(n), o;
          }),
          (Rh.prototype.start = function(t) {
            var e = this;
            this.Wo = setTimeout(function() {
              return e.jo();
            }, t);
          }),
          (Rh.prototype.ni = function() {
            return this.jo();
          }),
          (Rh.prototype.cancel = function(t) {
            null !== this.Wo &&
              (this.clearTimeout(),
              this.Uo.reject(
                new Wr(
                  Hr.CANCELLED,
                  'Operation cancelled' + (t ? ': ' + t : ''),
                ),
              ));
          }),
          (Rh.prototype.jo = function() {
            var e = this;
            this.Oo.Sr(function() {
              return null !== e.Wo
                ? (e.clearTimeout(),
                  e.op().then(function(t) {
                    return e.Uo.resolve(t);
                  }))
                : Promise.resolve();
            });
          }),
          (Rh.prototype.clearTimeout = function() {
            null !== this.Wo &&
              (this.qo(this), clearTimeout(this.Wo), (this.Wo = null));
          }),
          Rh),
        xh =
          (Object.defineProperty(Ph.prototype, 'eh', {
            get: function() {
              return this.zo;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (Ph.prototype.Sr = function(t) {
            this.enqueue(t);
          }),
          (Ph.prototype.sh = function(t) {
            this.nh(), this.ih(t);
          }),
          (Ph.prototype.rh = function(t) {
            return this.nh(), this.ih(t);
          }),
          (Ph.prototype.oh = function(n) {
            return y(this, void 0, void 0, function() {
              var e;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return (
                      this.nh(),
                      this.zo
                        ? [3, 2]
                        : ((this.zo = !0),
                          (e = Dh()) &&
                            e.removeEventListener('visibilitychange', this.th),
                          [4, this.rh(n)])
                    );
                  case 1:
                    t.sent(), (t.label = 2);
                  case 2:
                    return [2];
                }
              });
            });
          }),
          (Ph.prototype.enqueue = function(t) {
            return (
              this.nh(), this.zo ? new Promise(function(t) {}) : this.ih(t)
            );
          }),
          (Ph.prototype.Cr = function(i) {
            var t = this;
            this.nh(),
              this.zo ||
                (this.Go = this.Go.then(function() {
                  var n = new Qu(),
                    r = function() {
                      return y(t, void 0, void 0, function() {
                        var e;
                        return v(this, function(t) {
                          switch (t.label) {
                            case 0:
                              return t.trys.push([0, 2, , 3]), [4, i()];
                            case 1:
                              return (
                                t.sent(), n.resolve(), this.Zo.reset(), [3, 3]
                              );
                            case 2:
                              if (!bh((e = t.sent()))) throw (n.resolve(), e);
                              return (
                                Nr(
                                  'AsyncQueue',
                                  'Operation failed with retryable error: ' + e,
                                ),
                                this.Zo.Zn(r),
                                [3, 3]
                              );
                            case 3:
                              return [2];
                          }
                        });
                      });
                    };
                  return t.Sr(r), n.promise;
                }));
          }),
          (Ph.prototype.ih = function(t) {
            var r = this,
              e = this.Ko.then(function() {
                return (
                  (r.Jo = !0),
                  t()
                    .catch(function(t) {
                      throw ((r.Yo = t),
                      (r.Jo = !1),
                      Ar(
                        'INTERNAL UNHANDLED ERROR: ',
                        ((n = (e = t).message || ''),
                        e.stack &&
                          (n = e.stack.includes(e.message)
                            ? e.stack
                            : e.message + '\n' + e.stack),
                        n),
                      ),
                      t);
                      var e, n;
                    })
                    .then(function(t) {
                      return (r.Jo = !1), t;
                    })
                );
              });
            return (this.Ko = e);
          }),
          (Ph.prototype.ei = function(t, e, n) {
            var r = this;
            this.nh(), -1 < this.Xo.indexOf(t) && (e = 0);
            var i = Oh.Qo(this, t, e, n, function(t) {
              return r.hh(t);
            });
            return this.Ho.push(i), i;
          }),
          (Ph.prototype.nh = function() {
            this.Yo && Dr();
          }),
          (Ph.prototype.ah = function() {}),
          (Ph.prototype.uh = function() {
            return y(this, void 0, void 0, function() {
              var e;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return [4, (e = this.Ko)];
                  case 1:
                    t.sent(), (t.label = 2);
                  case 2:
                    if (e !== this.Ko) return [3, 0];
                    t.label = 3;
                  case 3:
                    return [2];
                }
              });
            });
          }),
          (Ph.prototype.lh = function(t) {
            for (var e = 0, n = this.Ho; e < n.length; e++)
              if (n[e].jn === t) return !0;
            return !1;
          }),
          (Ph.prototype._h = function(r) {
            var i = this;
            return this.uh().then(function() {
              i.Ho.sort(function(t, e) {
                return t.Bo - e.Bo;
              });
              for (var t = 0, e = i.Ho; t < e.length; t++) {
                var n = e[t];
                if ((n.ni(), 'all' !== r && n.jn === r)) break;
              }
              return i.uh();
            });
          }),
          (Ph.prototype.fh = function(t) {
            this.Xo.push(t);
          }),
          (Ph.prototype.hh = function(t) {
            var e = this.Ho.indexOf(t);
            this.Ho.splice(e, 1);
          }),
          Ph);
      function Ph() {
        var t = this;
        (this.Ko = Promise.resolve()),
          (this.Go = Promise.resolve()),
          (this.zo = !1),
          (this.Ho = []),
          (this.Yo = null),
          (this.Jo = !1),
          (this.Xo = []),
          (this.Zo = new zu(this, 'async_queue_retry')),
          (this.th = function() {
            return t.Zo.si();
          });
        var e = Dh();
        e &&
          'function' == typeof e.addEventListener &&
          e.addEventListener('visibilitychange', this.th);
      }
      function Rh(t, e, n, r, i) {
        (this.Oo = t),
          (this.jn = e),
          (this.Bo = n),
          (this.op = r),
          (this.qo = i),
          (this.Uo = new Qu()),
          (this.then = this.Uo.promise.then.bind(this.Uo.promise)),
          this.Uo.promise.catch(function(t) {});
      }
      function kh(t, e) {
        if ((Ar('AsyncQueue', e + ': ' + t), bh(t)))
          return new Wr(Hr.UNAVAILABLE, e + ': ' + t);
        throw t;
      }
      function Lh(t, e) {
        var n = t[0],
          r = t[1],
          i = e[0],
          o = e[1],
          s = Lr(n, i);
        return 0 === s ? Lr(r, o) : s;
      }
      var Uh =
          ((Fh.prototype.Th = function() {
            return ++this.wh;
          }),
          (Fh.prototype.Eh = function(t) {
            var e = [t, this.Th()];
            if (this.buffer.size < this.dh) this.buffer = this.buffer.add(e);
            else {
              var n = this.buffer.last();
              Lh(e, n) < 0 && (this.buffer = this.buffer.delete(n).add(e));
            }
          }),
          Object.defineProperty(Fh.prototype, 'maxValue', {
            get: function() {
              return this.buffer.last()[0];
            },
            enumerable: !0,
            configurable: !0,
          }),
          Fh),
        Ch = { Ih: !1, Ah: 0, Rh: 0, mh: 0 },
        Vh =
          ((Mh.ph = function(t) {
            return new Mh(t, Mh.yh, Mh.bh);
          }),
          Mh);
      function Mh(t, e, n) {
        (this.Ph = t), (this.Vh = e), (this.gh = n);
      }
      function Fh(t) {
        (this.dh = t), (this.buffer = new Oi(Lh)), (this.wh = 0);
      }
      (Vh.vh = -1),
        (Vh.Sh = 1048576),
        (Vh.Dh = 41943040),
        (Vh.yh = 10),
        (Vh.bh = 1e3),
        (Vh.Ch = new Vh(Vh.Dh, Vh.yh, Vh.bh)),
        (Vh.DISABLED = new Vh(Vh.vh, 0, 0));
      var qh =
          ((zh.prototype.start = function(t) {
            this.eo.$h.Ph !== Vh.vh && this.kh(t);
          }),
          (zh.prototype.stop = function() {
            this.Nh && (this.Nh.cancel(), (this.Nh = null));
          }),
          Object.defineProperty(zh.prototype, 'pr', {
            get: function() {
              return null !== this.Nh;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (zh.prototype.kh = function(n) {
            var t = this,
              e = this.Fh ? 3e5 : 6e4;
            Nr(
              'LruGarbageCollector',
              'Garbage collection scheduled in ' + e + 'ms',
            ),
              (this.Nh = this.Oo.ei('lru_garbage_collection', e, function() {
                return y(t, void 0, void 0, function() {
                  var e;
                  return v(this, function(t) {
                    switch (t.label) {
                      case 0:
                        (this.Nh = null), (this.Fh = !0), (t.label = 1);
                      case 1:
                        return t.trys.push([1, 3, , 7]), [4, n.xh(this.eo)];
                      case 2:
                        return t.sent(), [3, 7];
                      case 3:
                        return bh((e = t.sent()))
                          ? (Nr(
                              'LruGarbageCollector',
                              'Ignoring IndexedDB error during garbage collection: ',
                              e,
                            ),
                            [3, 6])
                          : [3, 4];
                      case 4:
                        return [4, Xh(e)];
                      case 5:
                        t.sent(), (t.label = 6);
                      case 6:
                        return [3, 7];
                      case 7:
                        return [4, this.kh(n)];
                      case 8:
                        return t.sent(), [2];
                    }
                  });
                });
              }));
          }),
          zh),
        jh =
          ((Qh.prototype.Lh = function(t, e) {
            return this.Mh.so(t).next(function(t) {
              return Math.floor((e / 100) * t);
            });
          }),
          (Qh.prototype.Oh = function(t, e) {
            var n = this;
            if (0 === e) return Ou.resolve(Uu.Qn);
            var r = new Uh(e);
            return this.Mh.ye(t, function(t) {
              return r.Eh(t.sequenceNumber);
            })
              .next(function() {
                return n.Mh.io(t, function(t) {
                  return r.Eh(t);
                });
              })
              .next(function() {
                return r.maxValue;
              });
          }),
          (Qh.prototype.ji = function(t, e, n) {
            return this.Mh.ji(t, e, n);
          }),
          (Qh.prototype.uo = function(t, e) {
            return this.Mh.uo(t, e);
          }),
          (Qh.prototype.Bh = function(e, n) {
            var r = this;
            return this.$h.Ph === Vh.vh
              ? (Nr(
                  'LruGarbageCollector',
                  'Garbage collection skipped; disabled',
                ),
                Ou.resolve(Ch))
              : this.lo(e).next(function(t) {
                  return t < r.$h.Ph
                    ? (Nr(
                        'LruGarbageCollector',
                        'Garbage collection skipped; Cache size ' +
                          t +
                          ' is lower than threshold ' +
                          r.$h.Ph,
                      ),
                      Ch)
                    : r.qh(e, n);
                });
          }),
          (Qh.prototype.lo = function(t) {
            return this.Mh.lo(t);
          }),
          (Qh.prototype.qh = function(e, n) {
            var r,
              i,
              o,
              s,
              u,
              a,
              h,
              c = this,
              f = Date.now();
            return this.Lh(e, this.$h.Vh)
              .next(function(t) {
                return (
                  (i =
                    t > c.$h.gh
                      ? (Nr(
                          'LruGarbageCollector',
                          'Capping sequence numbers to collect down to the maximum of ' +
                            c.$h.gh +
                            ' from ' +
                            t,
                        ),
                        c.$h.gh)
                      : t),
                  (s = Date.now()),
                  c.Oh(e, i)
                );
              })
              .next(function(t) {
                return (r = t), (u = Date.now()), c.ji(e, r, n);
              })
              .next(function(t) {
                return (o = t), (a = Date.now()), c.uo(e, r);
              })
              .next(function(t) {
                return (
                  (h = Date.now()),
                  _r() <= p.DEBUG &&
                    Nr(
                      'LruGarbageCollector',
                      'LRU Garbage Collection\n\tCounted targets in ' +
                        (s - f) +
                        'ms\n\tDetermined least recently used ' +
                        i +
                        ' in ' +
                        (u - s) +
                        'ms\n\tRemoved ' +
                        o +
                        ' targets in ' +
                        (a - u) +
                        'ms\n\tRemoved ' +
                        t +
                        ' documents in ' +
                        (h - a) +
                        'ms\nTotal Duration: ' +
                        (h - f) +
                        'ms',
                    ),
                  Ou.resolve({ Ih: !0, Ah: i, Rh: o, mh: t })
                );
              });
          }),
          Qh),
        Bh =
          ((Gh.prototype.start = function() {
            return Promise.resolve();
          }),
          (Gh.prototype.Hh = function(i) {
            return y(this, void 0, void 0, function() {
              var e,
                m,
                n,
                r = this;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return (
                      (e = this.Rn),
                      (m = this.Gh),
                      [
                        4,
                        this.persistence.runTransaction(
                          'Handle user change',
                          'readonly',
                          function(v) {
                            var g;
                            return r.Rn.Ro(v)
                              .next(function(t) {
                                return (
                                  (g = t),
                                  (e = r.persistence.zr(i)),
                                  (m = new ku(r.Kh, e, r.persistence.Xr())),
                                  e.Ro(v)
                                );
                              })
                              .next(function(t) {
                                for (
                                  var e = [], n = [], r = qi(), i = 0, o = g;
                                  i < o.length;
                                  i++
                                ) {
                                  var s = o[i];
                                  e.push(s.batchId);
                                  for (
                                    var u = 0, a = s.mutations;
                                    u < a.length;
                                    u++
                                  ) {
                                    var h = a[u];
                                    r = r.add(h.key);
                                  }
                                }
                                for (var c = 0, f = t; c < f.length; c++) {
                                  var l = f[c];
                                  n.push(l.batchId);
                                  for (
                                    var p = 0, d = l.mutations;
                                    p < d.length;
                                    p++
                                  ) {
                                    var y = d[p];
                                    r = r.add(y.key);
                                  }
                                }
                                return m.yn(v, r).next(function(t) {
                                  return { Yh: t, Jh: e, Xh: n };
                                });
                              });
                          },
                        ),
                      ]
                    );
                  case 1:
                    return (
                      (n = t.sent()),
                      [
                        2,
                        ((this.Rn = e), (this.Gh = m), this.Uh.zh(this.Gh), n),
                      ]
                    );
                }
              });
            });
          }),
          (Gh.prototype.Zh = function(u) {
            var a,
              h = this,
              c = Kr.now(),
              t = u.reduce(function(t, e) {
                return t.add(e.key);
              }, qi());
            return this.persistence
              .runTransaction('Locally write mutations', 'readwrite', function(
                s,
              ) {
                return h.Gh.yn(s, t).next(function(t) {
                  a = t;
                  for (var e = [], n = 0, r = u; n < r.length; n++) {
                    var i = r[n],
                      o = i.Ze(a.get(i.key));
                    null != o &&
                      e.push(
                        new bs(i.key, o, Vs(o.proto.mapValue), gs.exists(!0)),
                      );
                  }
                  return h.Rn.wo(s, c, e, u);
                });
              })
              .then(function(t) {
                var e = t.Ks(a);
                return { batchId: t.batchId, on: e };
              });
          }),
          (Gh.prototype.ta = function(r) {
            var i = this;
            return this.persistence.runTransaction(
              'Acknowledge batch',
              'readwrite-primary',
              function(t) {
                var e = r.batch.keys(),
                  n = i.Kh.Vi({ pi: !0 });
                return i
                  .ea(t, r, n)
                  .next(function() {
                    return n.apply(t);
                  })
                  .next(function() {
                    return i.Rn.po(t);
                  })
                  .next(function() {
                    return i.Gh.yn(t, e);
                  });
              },
            );
          }),
          (Gh.prototype.sa = function(t) {
            var r = this;
            return this.persistence.runTransaction(
              'Reject batch',
              'readwrite-primary',
              function(e) {
                var n;
                return r.Rn.To(e, t)
                  .next(function(t) {
                    return Or(null !== t), (n = t.keys()), r.Rn.Po(e, t);
                  })
                  .next(function() {
                    return r.Rn.po(e);
                  })
                  .next(function() {
                    return r.Gh.yn(e, n);
                  });
              },
            );
          }),
          (Gh.prototype.Ao = function() {
            var e = this;
            return this.persistence.runTransaction(
              'Get highest unacknowledged batch id',
              'readonly',
              function(t) {
                return e.Rn.Ao(t);
              },
            );
          }),
          (Gh.prototype.xi = function() {
            var e = this;
            return this.persistence.runTransaction(
              'Get last remote snapshot version',
              'readonly',
              function(t) {
                return e.Tr.xi(t);
              },
            );
          }),
          (Gh.prototype.na = function(a) {
            var h = this,
              c = a.J,
              f = this.Qh;
            return this.persistence
              .runTransaction(
                'Apply remote event',
                'readwrite-primary',
                function(o) {
                  var i = h.Kh.Vi({ pi: !0 });
                  f = h.Qh;
                  var s = [];
                  a.Qt.forEach(function(t, e) {
                    var n = f.get(e);
                    if (n) {
                      s.push(
                        h.Tr.Yi(o, t.Xt, e).next(function() {
                          return h.Tr.zi(o, t.Yt, e);
                        }),
                      );
                      var r = t.resumeToken;
                      if (0 < r.G()) {
                        var i = n.Z(r, c).X(o.sr);
                        (f = f.et(e, i)),
                          Gh.ia(n, i, t) && s.push(h.Tr.Ui(o, i));
                      }
                    }
                  });
                  var u = Li(),
                    n = qi();
                  if (
                    (a.jt.forEach(function(t, e) {
                      n = n.add(t);
                    }),
                    s.push(
                      i.getEntries(o, n).next(function(r) {
                        a.jt.forEach(function(t, e) {
                          var n = r.get(t);
                          e instanceof Xs && e.version.isEqual(Xr.min())
                            ? (i.ln(t, c), (u = u.et(t, e)))
                            : null == n ||
                              0 < e.version.o(n.version) ||
                              (0 === e.version.o(n.version) &&
                                n.hasPendingWrites)
                            ? (i.un(e, c), (u = u.et(t, e)))
                            : Nr(
                                'LocalStore',
                                'Ignoring outdated watch update for ',
                                t,
                                '. Current version:',
                                n.version,
                                ' Watch version:',
                                e.version,
                              ),
                            a.Kt.has(t) && s.push(h.persistence.Fi.co(o, t));
                        });
                      }),
                    ),
                    !c.isEqual(Xr.min()))
                  ) {
                    var t = h.Tr.xi(o).next(function(t) {
                      return h.Tr.Li(o, o.sr, c);
                    });
                    s.push(t);
                  }
                  return Ou.nn(s)
                    .next(function() {
                      return i.apply(o);
                    })
                    .next(function() {
                      return h.Gh.bn(o, u);
                    });
                },
              )
              .then(function(t) {
                return (h.Qh = f), t;
              });
          }),
          (Gh.ia = function(t, e, n) {
            return (
              Or(0 < e.resumeToken.G()),
              0 === t.resumeToken.G() ||
                e.J.A() - t.J.A() >= this.ra ||
                0 < n.Yt.size + n.Jt.size + n.Xt.size
            );
          }),
          (Gh.prototype.oa = function(c) {
            return y(this, void 0, void 0, function() {
              var e,
                n,
                r,
                i,
                o,
                s,
                u,
                a,
                h = this;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return (
                      t.trys.push([0, 2, , 3]),
                      [
                        4,
                        this.persistence.runTransaction(
                          'notifyLocalViewChanges',
                          'readwrite',
                          function(n) {
                            return Ou.forEach(c, function(e) {
                              return Ou.forEach(e.xn, function(t) {
                                return h.persistence.Fi.Hi(n, e.targetId, t);
                              }).next(function() {
                                return Ou.forEach(e.Mn, function(t) {
                                  return h.persistence.Fi.Ji(n, e.targetId, t);
                                });
                              });
                            });
                          },
                        ),
                      ]
                    );
                  case 1:
                    return t.sent(), [3, 3];
                  case 2:
                    if (!bh((e = t.sent()))) throw e;
                    return (
                      Nr(
                        'LocalStore',
                        'Failed to update sequence numbers: ' + e,
                      ),
                      [3, 3]
                    );
                  case 3:
                    for (n = 0, r = c; n < r.length; n++)
                      (i = r[n]),
                        (o = i.targetId),
                        i.fromCache ||
                          ((s = this.Qh.get(o)),
                          (u = s.J),
                          (a = s.tt(u)),
                          (this.Qh = this.Qh.et(o, a)));
                    return [2];
                }
              });
            });
          }),
          (Gh.prototype.ha = function(e) {
            var n = this;
            return this.persistence.runTransaction(
              'Get next mutation batch',
              'readonly',
              function(t) {
                return void 0 === e && (e = -1), n.Rn.Io(t, e);
              },
            );
          }),
          (Gh.prototype.aa = function(e) {
            var n = this;
            return this.persistence.runTransaction(
              'read document',
              'readonly',
              function(t) {
                return n.Gh.Pn(t, e);
              },
            );
          }),
          (Gh.prototype.ua = function(r) {
            var i = this;
            return this.persistence
              .runTransaction('Allocate target', 'readwrite', function(e) {
                var n;
                return i.Tr.Gi(e, r).next(function(t) {
                  return t
                    ? ((n = t), Ou.resolve(n))
                    : i.Tr.Ni(e).next(function(t) {
                        return (
                          (n = new mi(r, t, 0, e.sr)),
                          i.Tr.Oi(e, n).next(function() {
                            return n;
                          })
                        );
                      });
                });
              })
              .then(function(t) {
                var e = i.Qh.get(t.targetId);
                return (
                  (null === e || 0 < t.J.o(e.J)) &&
                    ((i.Qh = i.Qh.et(t.targetId, t)), i.Wh.set(r, t.targetId)),
                  t
                );
              });
          }),
          (Gh.prototype.Gi = function(t, e) {
            var n = this.Wh.get(e);
            return void 0 !== n ? Ou.resolve(this.Qh.get(n)) : this.Tr.Gi(t, e);
          }),
          (Gh.prototype.ca = function(t, e) {
            var n = this,
              r = this.Qh.get(t),
              i = e ? 'readwrite' : 'readwrite-primary';
            return this.persistence
              .runTransaction('Release target', i, function(t) {
                return e ? Ou.resolve() : n.persistence.Fi.removeTarget(t, r);
              })
              .then(function() {
                (n.Qh = n.Qh.remove(t)), n.Wh.delete(r.target);
              });
          }),
          (Gh.prototype.la = function(t, n) {
            var r = this,
              i = Xr.min(),
              o = qi();
            return this.persistence.runTransaction(
              'Execute query',
              'readonly',
              function(e) {
                return r
                  .Gi(e, t.We())
                  .next(function(t) {
                    if (t)
                      return (
                        (i = t.lastLimboFreeSnapshotVersion),
                        r.Tr.Xi(e, t.targetId).next(function(t) {
                          o = t;
                        })
                      );
                  })
                  .next(function() {
                    return r.Uh.Sn(e, t, n ? i : Xr.min(), n ? o : qi());
                  })
                  .next(function(t) {
                    return { documents: t, _a: o };
                  });
              },
            );
          }),
          (Gh.prototype.ea = function(t, i, o) {
            var e = this,
              s = i.batch,
              n = s.keys(),
              u = Ou.resolve();
            return (
              n.forEach(function(r) {
                u = u
                  .next(function() {
                    return o._n(t, r);
                  })
                  .next(function(t) {
                    var e = t,
                      n = i.zs.get(r);
                    Or(null !== n),
                      (!e || e.version.o(n) < 0) &&
                        (e = s.Ke(r, e, i)) &&
                        o.un(e, i.Gs);
                  });
              }),
              u.next(function() {
                return e.Rn.Po(t, s);
              })
            );
          }),
          (Gh.prototype.xh = function(e) {
            var n = this;
            return this.persistence.runTransaction(
              'Collect garbage',
              'readwrite-primary',
              function(t) {
                return e.Bh(t, n.Qh);
              },
            );
          }),
          Gh);
      function Gh(t, e, n) {
        (this.persistence = t),
          (this.Uh = e),
          (this.Qh = new Ii(Lr)),
          (this.Wh = new zr(function(t) {
            return _u(t);
          }, Nu)),
          (this.jh = Xr.min()),
          (this.Rn = t.zr(n)),
          (this.Kh = t.Jr()),
          (this.Tr = t.Yr()),
          (this.Gh = new ku(this.Kh, this.Rn, this.persistence.Xr())),
          this.Uh.zh(this.Gh);
      }
      function Qh(t, e) {
        (this.Mh = t), (this.$h = e);
      }
      function zh(t, e) {
        (this.eo = t), (this.Oo = e), (this.Fh = !1), (this.Nh = null);
      }
      Bh.ra = 3e8;
      var Hh,
        Wh =
          (n(Kh, (Hh = Bh)),
          (Kh.prototype.start = function() {
            return this.fa();
          }),
          (Kh.prototype.da = function(t) {
            var n = this;
            return this.persistence.runTransaction(
              'Lookup mutation documents',
              'readonly',
              function(e) {
                return n.Rn.Eo(e, t).next(function(t) {
                  return t ? n.Gh.yn(e, t) : Ou.resolve(null);
                });
              },
            );
          }),
          (Kh.prototype.wa = function(t) {
            this.Rn.Vo(t);
          }),
          (Kh.prototype.vr = function(t) {
            this.persistence.vr(t);
          }),
          (Kh.prototype.Gr = function() {
            return this.persistence.Gr();
          }),
          (Kh.prototype.Ta = function(e) {
            var n = this,
              t = this.Qh.get(e);
            return t
              ? Promise.resolve(t.target)
              : this.persistence.runTransaction(
                  'Get target data',
                  'readonly',
                  function(t) {
                    return n.Tr.Me(t, e).next(function(t) {
                      return t ? t.target : null;
                    });
                  },
                );
          }),
          (Kh.prototype.Ri = function() {
            var r = this;
            return this.persistence
              .runTransaction('Get new document changes', 'readonly', function(
                t,
              ) {
                return r.Kh.Ri(t, r.jh);
              })
              .then(function(t) {
                var e = t.mi,
                  n = t.readTime;
                return (r.jh = n), e;
              });
          }),
          (Kh.prototype.fa = function() {
            return y(this, void 0, void 0, function() {
              var e,
                n = this;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return [
                      4,
                      (e = this).persistence.runTransaction(
                        'Synchronize last document change read time',
                        'readonly',
                        function(t) {
                          return n.Kh.Pi(t);
                        },
                      ),
                    ];
                  case 1:
                    return (e.jh = t.sent()), [2];
                }
              });
            });
          }),
          Kh);
      function Kh(t, e, n) {
        var r = this;
        return (
          ((r = Hh.call(this, t, e, n) || this).persistence = t),
          (r.Rn = t.zr(n)),
          (r.Kh = t.Jr()),
          (r.Tr = t.Yr()),
          r
        );
      }
      function Xh(e) {
        return y(this, void 0, void 0, function() {
          return v(this, function(t) {
            if (e.code !== Hr.FAILED_PRECONDITION || e.message !== Pu) throw e;
            return Nr('LocalStore', 'Unexpectedly lost primary lease'), [2];
          });
        });
      }
      var Yh =
          ((Zh.prototype._ = function() {
            return this.Ea._();
          }),
          (Zh.prototype.Hi = function(t, e) {
            var n = new $h(t, e);
            (this.Ea = this.Ea.add(n)), (this.Aa = this.Aa.add(n));
          }),
          (Zh.prototype.ma = function(t, e) {
            var n = this;
            t.forEach(function(t) {
              return n.Hi(t, e);
            });
          }),
          (Zh.prototype.Ji = function(t, e) {
            this.Pa(new $h(t, e));
          }),
          (Zh.prototype.Va = function(t, e) {
            var n = this;
            t.forEach(function(t) {
              return n.Ji(t, e);
            });
          }),
          (Zh.prototype.ga = function(t) {
            var e = this,
              n = ai.EMPTY,
              r = new $h(n, t),
              i = new $h(n, t + 1),
              o = [];
            return (
              this.Aa.vt([r, i], function(t) {
                e.Pa(t), o.push(t.key);
              }),
              o
            );
          }),
          (Zh.prototype.pa = function() {
            var e = this;
            this.Ea.forEach(function(t) {
              return e.Pa(t);
            });
          }),
          (Zh.prototype.Pa = function(t) {
            (this.Ea = this.Ea.delete(t)), (this.Aa = this.Aa.delete(t));
          }),
          (Zh.prototype.ya = function(t) {
            var e = ai.EMPTY,
              n = new $h(e, t),
              r = new $h(e, t + 1),
              i = qi();
            return (
              this.Aa.vt([n, r], function(t) {
                i = i.add(t.key);
              }),
              i
            );
          }),
          (Zh.prototype.tr = function(t) {
            var e = new $h(t, 0),
              n = this.Ea.Dt(e);
            return null !== n && t.isEqual(n.key);
          }),
          Zh),
        $h =
          ((Jh.Ia = function(t, e) {
            return ai.P(t.key, e.key) || Lr(t.ba, e.ba);
          }),
          (Jh.Ra = function(t, e) {
            return Lr(t.ba, e.ba) || ai.P(t.key, e.key);
          }),
          Jh);
      function Jh(t, e) {
        (this.key = t), (this.ba = e);
      }
      function Zh() {
        (this.Ea = new Oi($h.Ia)), (this.Aa = new Oi($h.Ra));
      }
      function tc(t, e) {
        if (0 !== e.length)
          throw new Wr(
            Hr.INVALID_ARGUMENT,
            'Function ' +
              t +
              '() does not support arguments, but was called with ' +
              mc(e.length, 'argument') +
              '.',
          );
      }
      function ec(t, e, n) {
        if (e.length !== n)
          throw new Wr(
            Hr.INVALID_ARGUMENT,
            'Function ' +
              t +
              '() requires ' +
              mc(n, 'argument') +
              ', but was called with ' +
              mc(e.length, 'argument') +
              '.',
          );
      }
      function nc(t, e, n) {
        if (e.length < n)
          throw new Wr(
            Hr.INVALID_ARGUMENT,
            'Function ' +
              t +
              '() requires at least ' +
              mc(n, 'argument') +
              ', but was called with ' +
              mc(e.length, 'argument') +
              '.',
          );
      }
      function rc(t, e, n, r) {
        if (e.length < n || e.length > r)
          throw new Wr(
            Hr.INVALID_ARGUMENT,
            'Function ' +
              t +
              '() requires between ' +
              n +
              ' and ' +
              r +
              ' arguments, but was called with ' +
              mc(e.length, 'argument') +
              '.',
          );
      }
      function ic(t, e, n, r) {
        cc(t, e, gc(n) + ' argument', r);
      }
      function oc(t, e, n, r) {
        void 0 !== r && ic(t, e, n, r);
      }
      function sc(t, e, n, r) {
        cc(t, e, n + ' option', r);
      }
      function uc(t, e, n, r) {
        void 0 !== r && sc(t, e, n, r);
      }
      function ac(t, e, n, r, a) {
        void 0 !== r &&
          (function(t, e, n) {
            for (var r = [], i = 0, o = a; i < o.length; i++) {
              var s = o[i];
              if (s === n) return;
              r.push(lc(s));
            }
            var u = lc(n);
            throw new Wr(
              Hr.INVALID_ARGUMENT,
              'Invalid value ' +
                u +
                ' provided to function ' +
                t +
                '() for option "' +
                e +
                '". Acceptable values: ' +
                r.join(', '),
            );
          })(t, n, r);
      }
      function hc(t, e, n, r) {
        if (
          !e.some(function(t) {
            return t === r;
          })
        )
          throw new Wr(
            Hr.INVALID_ARGUMENT,
            'Invalid value ' +
              lc(r) +
              ' provided to function ' +
              t +
              '() for its ' +
              gc(n) +
              ' argument. Acceptable values: ' +
              e.join(', '),
          );
        return r;
      }
      function cc(t, e, n, r) {
        if (
          !('object' === e
            ? fc(r)
            : 'non-empty string' === e
            ? 'string' == typeof r && '' !== r
            : typeof r === e)
        ) {
          var i = lc(r);
          throw new Wr(
            Hr.INVALID_ARGUMENT,
            'Function ' +
              t +
              '() requires its ' +
              n +
              ' to be of type ' +
              e +
              ', but it was: ' +
              i,
          );
        }
      }
      function fc(t) {
        return (
          'object' == typeof t &&
          null !== t &&
          (Object.getPrototypeOf(t) === Object.prototype ||
            null === Object.getPrototypeOf(t))
        );
      }
      function lc(e) {
        if (void 0 === e) return 'undefined';
        if (null === e) return 'null';
        if ('string' == typeof e)
          return (
            20 < e.length && (e = e.substring(0, 20) + '...'), JSON.stringify(e)
          );
        if ('number' == typeof e || 'boolean' == typeof e) return '' + e;
        if ('object' != typeof e)
          return 'function' == typeof e ? 'a function' : Dr();
        if (e instanceof Array) return 'an array';
        var t = (function() {
          if (e.constructor) {
            var t = /function\s+([^\s(]+)\s*\(/.exec(e.constructor.toString());
            if (t && 1 < t.length) return t[1];
          }
          return null;
        })();
        return t ? 'a custom ' + t + ' object' : 'an object';
      }
      function pc(t, e, n) {
        if (void 0 === n)
          throw new Wr(
            Hr.INVALID_ARGUMENT,
            'Function ' +
              t +
              '() requires a valid ' +
              gc(e) +
              ' argument, but it was undefined.',
          );
      }
      function dc(n, t, r) {
        jr(t, function(t, e) {
          if (r.indexOf(t) < 0)
            throw new Wr(
              Hr.INVALID_ARGUMENT,
              "Unknown option '" +
                t +
                "' passed to function " +
                n +
                '(). Available options: ' +
                r.join(', '),
            );
        });
      }
      function yc(t, e, n, r) {
        var i = lc(r);
        return new Wr(
          Hr.INVALID_ARGUMENT,
          'Function ' +
            t +
            '() requires its ' +
            gc(n) +
            ' argument to be a ' +
            e +
            ', but it was: ' +
            i,
        );
      }
      function vc(t, e, n) {
        if (n <= 0)
          throw new Wr(
            Hr.INVALID_ARGUMENT,
            'Function ' +
              t +
              '() requires its ' +
              gc(e) +
              ' argument to be a positive number, but it was: ' +
              n +
              '.',
          );
      }
      function gc(t) {
        switch (t) {
          case 1:
            return 'first';
          case 2:
            return 'second';
          case 3:
            return 'third';
          default:
            return t + 'th';
        }
      }
      function mc(t, e) {
        return t + ' ' + e + (1 === t ? '' : 's');
      }
      function wc() {
        if ('undefined' == typeof Uint8Array)
          throw new Wr(
            Hr.UNIMPLEMENTED,
            'Uint8Arrays are not available in this environment.',
          );
      }
      function bc() {
        if ('undefined' == typeof atob)
          throw new Wr(
            Hr.UNIMPLEMENTED,
            'Blobs are unavailable in Firestore in this environment.',
          );
      }
      function Ec(t) {
        !(function() {
          if (!(t instanceof Array) || t.length < 1)
            throw new Wr(
              Hr.INVALID_ARGUMENT,
              'Function FieldPath() requires its fieldNames argument to be an array with at least 1 element.',
            );
        })();
        for (var e = 0; e < t.length; ++e)
          if ((ic('FieldPath', 'string', e, t[e]), 0 === t[e].length))
            throw new Wr(
              Hr.INVALID_ARGUMENT,
              'Invalid field name at argument $(i + 1). Field names must not be empty.',
            );
        this.Sa = new si(t);
      }
      var Ic,
        Tc =
          ((Ac.fromBase64String = function(t) {
            ec('Blob.fromBase64String', arguments, 1),
              ic('Blob.fromBase64String', 'string', 1, t),
              bc();
            try {
              return new Ac(pi.fromBase64String(t));
            } catch (t) {
              throw new Wr(
                Hr.INVALID_ARGUMENT,
                'Failed to construct Blob from Base64 string: ' + t,
              );
            }
          }),
          (Ac.fromUint8Array = function(t) {
            if (
              (ec('Blob.fromUint8Array', arguments, 1),
              wc(),
              !(t instanceof Uint8Array))
            )
              throw yc('Blob.fromUint8Array', 'Uint8Array', 1, t);
            return new Ac(pi.fromUint8Array(t));
          }),
          (Ac.prototype.toBase64 = function() {
            return ec('Blob.toBase64', arguments, 0), bc(), this.va.toBase64();
          }),
          (Ac.prototype.toUint8Array = function() {
            return (
              ec('Blob.toUint8Array', arguments, 0),
              wc(),
              this.va.toUint8Array()
            );
          }),
          (Ac.prototype.toString = function() {
            return 'Blob(base64: ' + this.toBase64() + ')';
          }),
          (Ac.prototype.isEqual = function(t) {
            return this.va.isEqual(t.va);
          }),
          Ac),
        _c =
          (n(Nc, (Ic = Ec)),
          (Nc.documentId = function() {
            return Nc.Da;
          }),
          (Nc.prototype.isEqual = function(t) {
            if (!(t instanceof Nc)) throw yc('isEqual', 'FieldPath', 1, t);
            return this.Sa.isEqual(t.Sa);
          }),
          Nc);
      function Nc() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return Ic.call(this, t) || this;
      }
      function Ac(t) {
        bc(), (this.va = t);
      }
      _c.Da = new _c(si.O().N());
      var Sc,
        Dc,
        Oc,
        xc,
        Pc,
        Rc,
        kc,
        Lc = new RegExp('[~\\*/\\[\\]]'),
        Uc = function() {
          this.Ca = this;
        },
        Cc =
          (n($c, (kc = Uc)),
          ($c.prototype.Na = function(t) {
            if (2 !== t.$a)
              throw 1 === t.$a
                ? t.ka(
                    this.Fa +
                      '() can only appear at the top level of your update data',
                  )
                : t.ka(
                    this.Fa +
                      '() cannot be used with set() unless you pass {merge:true}',
                  );
            return t.Oe.push(t.path), null;
          }),
          ($c.prototype.isEqual = function(t) {
            return t instanceof $c;
          }),
          $c),
        Vc =
          (n(Yc, (Rc = Uc)),
          (Yc.prototype.Na = function(t) {
            return new vs(t.path, ts.instance);
          }),
          (Yc.prototype.isEqual = function(t) {
            return t instanceof Yc;
          }),
          Yc),
        Mc =
          (n(Xc, (Pc = Uc)),
          (Xc.prototype.Na = function(t) {
            var e = new uf(
                { $a: 3, methodName: this.Fa, Ma: !0 },
                t.s,
                t.serializer,
                t.ignoreUndefinedProperties,
              ),
              n = this.xa.map(function(t) {
                return ff(t, e);
              }),
              r = new ns(n);
            return new vs(t.path, r);
          }),
          (Xc.prototype.isEqual = function(t) {
            return this === t;
          }),
          Xc),
        Fc =
          (n(Kc, (xc = Uc)),
          (Kc.prototype.Na = function(t) {
            var e = new uf(
                { $a: 3, methodName: this.Fa, Ma: !0 },
                t.s,
                t.serializer,
                t.ignoreUndefinedProperties,
              ),
              n = this.xa.map(function(t) {
                return ff(t, e);
              }),
              r = new rs(n);
            return new vs(t.path, r);
          }),
          (Kc.prototype.isEqual = function(t) {
            return this === t;
          }),
          Kc),
        qc =
          (n(Wc, (Oc = Uc)),
          (Wc.prototype.Na = function(t) {
            var e = new uf(
                { $a: 3, methodName: this.Fa },
                t.s,
                t.serializer,
                t.ignoreUndefinedProperties,
              ),
              n = ff(this.La, e),
              r = new is(t.serializer, n);
            return new vs(t.path, r);
          }),
          (Wc.prototype.isEqual = function(t) {
            return this === t;
          }),
          Wc),
        jc =
          (n(Hc, (Dc = Uc)),
          (Hc.delete = function() {
            return (
              tc('FieldValue.delete', arguments),
              new Bc(new Cc('FieldValue.delete'))
            );
          }),
          (Hc.serverTimestamp = function() {
            return (
              tc('FieldValue.serverTimestamp', arguments),
              new Bc(new Vc('FieldValue.serverTimestamp'))
            );
          }),
          (Hc.arrayUnion = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            return (
              nc('FieldValue.arrayUnion', arguments, 1),
              new Bc(new Mc('FieldValue.arrayUnion', t))
            );
          }),
          (Hc.arrayRemove = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            return (
              nc('FieldValue.arrayRemove', arguments, 1),
              new Bc(new Fc('FieldValue.arrayRemove', t))
            );
          }),
          (Hc.increment = function(t) {
            return (
              ic('FieldValue.increment', 'number', 1, t),
              ec('FieldValue.increment', arguments, 1),
              new Bc(new qc('FieldValue.increment', t))
            );
          }),
          Hc),
        Bc =
          (n(zc, (Sc = jc)),
          (zc.prototype.Na = function(t) {
            return this.Ca.Na(t);
          }),
          (zc.prototype.isEqual = function(t) {
            return t instanceof zc && this.Ca.isEqual(t.Ca);
          }),
          zc),
        Gc =
          (Object.defineProperty(Qc.prototype, 'latitude', {
            get: function() {
              return this.Oa;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(Qc.prototype, 'longitude', {
            get: function() {
              return this.Ba;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (Qc.prototype.isEqual = function(t) {
            return this.Oa === t.Oa && this.Ba === t.Ba;
          }),
          (Qc.prototype.T = function(t) {
            return Lr(this.Oa, t.Oa) || Lr(this.Ba, t.Ba);
          }),
          Qc);
      function Qc(t, e) {
        if (
          (ec('GeoPoint', arguments, 2),
          ic('GeoPoint', 'number', 1, t),
          ic('GeoPoint', 'number', 2, e),
          !isFinite(t) || t < -90 || 90 < t)
        )
          throw new Wr(
            Hr.INVALID_ARGUMENT,
            'Latitude must be a number between -90 and 90, but was: ' + t,
          );
        if (!isFinite(e) || e < -180 || 180 < e)
          throw new Wr(
            Hr.INVALID_ARGUMENT,
            'Longitude must be a number between -180 and 180, but was: ' + e,
          );
        (this.Oa = t), (this.Ba = e);
      }
      function zc(t) {
        var e = this;
        return ((e = Sc.call(this) || this).Ca = t), (e.Fa = t.Fa), e;
      }
      function Hc() {
        return (null !== Dc && Dc.apply(this, arguments)) || this;
      }
      function Wc(t, e) {
        var n = this;
        return ((n = Oc.call(this) || this).Fa = t), (n.La = e), n;
      }
      function Kc(t, e) {
        var n = this;
        return ((n = xc.call(this) || this).Fa = t), (n.xa = e), n;
      }
      function Xc(t, e) {
        var n = this;
        return ((n = Pc.call(this) || this).Fa = t), (n.xa = e), n;
      }
      function Yc(t) {
        var e = this;
        return ((e = Rc.call(this) || this).Fa = t), e;
      }
      function $c(t) {
        var e = this;
        return ((e = kc.call(this) || this).Fa = t), e;
      }
      function Jc(t) {
        return new Oo(t, !0);
      }
      var Zc = /^__.*__$/,
        tf = function(t, e, n) {
          (this.qa = t), (this.Ua = e), (this.Qa = n);
        },
        ef =
          ((of.prototype.Wa = function(t, e) {
            var n = [];
            return (
              null !== this.Oe
                ? n.push(new bs(t, this.data, this.Oe, e))
                : n.push(new ws(t, this.data, e)),
              0 < this.fieldTransforms.length &&
                n.push(new Es(t, this.fieldTransforms)),
              n
            );
          }),
          of),
        nf =
          ((rf.prototype.Wa = function(t, e) {
            var n = [new bs(t, this.data, this.Oe, e)];
            return (
              0 < this.fieldTransforms.length &&
                n.push(new Es(t, this.fieldTransforms)),
              n
            );
          }),
          rf);
      function rf(t, e, n) {
        (this.data = t), (this.Oe = e), (this.fieldTransforms = n);
      }
      function of(t, e, n) {
        (this.data = t), (this.Oe = e), (this.fieldTransforms = n);
      }
      function sf(t) {
        switch (t) {
          case 0:
          case 2:
          case 1:
            return 1;
          case 3:
          case 4:
            return;
          default:
            throw Dr();
        }
      }
      var uf =
          (Object.defineProperty(cf.prototype, 'path', {
            get: function() {
              return this.settings.path;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(cf.prototype, '$a', {
            get: function() {
              return this.settings.$a;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (cf.prototype.Ka = function(t) {
            return new cf(
              Object.assign(Object.assign({}, this.settings), t),
              this.s,
              this.serializer,
              this.ignoreUndefinedProperties,
              this.fieldTransforms,
              this.Oe,
            );
          }),
          (cf.prototype.Ga = function(t) {
            var e,
              n =
                null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
              r = this.Ka({ path: n, Ma: !1 });
            return r.za(t), r;
          }),
          (cf.prototype.Ha = function(t) {
            var e,
              n =
                null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
              r = this.Ka({ path: n, Ma: !1 });
            return r.ja(), r;
          }),
          (cf.prototype.Ya = function(t) {
            return this.Ka({ path: void 0, Ma: !0 });
          }),
          (cf.prototype.ka = function(t) {
            var e =
              !this.path || this.path._()
                ? ''
                : ' (found in field ' + this.path.toString() + ')';
            return new Wr(
              Hr.INVALID_ARGUMENT,
              'Function ' +
                this.settings.methodName +
                '() called with invalid data. ' +
                t +
                e,
            );
          }),
          (cf.prototype.contains = function(e) {
            return (
              void 0 !==
                this.Oe.find(function(t) {
                  return e.D(t);
                }) ||
              void 0 !==
                this.fieldTransforms.find(function(t) {
                  return e.D(t.field);
                })
            );
          }),
          (cf.prototype.ja = function() {
            if (this.path)
              for (var t = 0; t < this.path.length; t++)
                this.za(this.path.get(t));
          }),
          (cf.prototype.za = function(t) {
            if (0 === t.length)
              throw this.ka('Document fields must not be empty');
            if (sf(this.$a) && Zc.test(t))
              throw this.ka('Document fields cannot begin and end with "__"');
          }),
          cf),
        af =
          ((hf.prototype.Ja = function(t, e, n) {
            void 0 === n && (n = {});
            var r = this.Xa(n.merge || n.mergeFields ? 2 : 0, t);
            df('Data must be an object, but it was:', r, e);
            var i,
              o,
              s = lf(e, r);
            if (n.merge) (i = new ys(r.Oe)), (o = r.fieldTransforms);
            else if (n.mergeFields) {
              for (var u = [], a = 0, h = n.mergeFields; a < h.length; a++) {
                var c = h[a],
                  f = void 0;
                if (c instanceof Ec) f = c.Sa;
                else {
                  if ('string' != typeof c) throw Dr();
                  f = vf(t, c);
                }
                if (!r.contains(f))
                  throw new Wr(
                    Hr.INVALID_ARGUMENT,
                    "Field '" +
                      f +
                      "' is specified in your field mask but missing from your input data.",
                  );
                gf(u, f) || u.push(f);
              }
              (i = new ys(u)),
                (o = r.fieldTransforms.filter(function(t) {
                  return i.ze(t.field);
                }));
            } else (i = null), (o = r.fieldTransforms);
            return new ef(new _s(s), i, o);
          }),
          (hf.prototype.Za = function(o, t) {
            var s = this.Xa(1, o);
            df('Data must be an object, but it was:', s, t);
            var u = [],
              a = new Ns();
            jr(t, function(t, e) {
              var n = vf(o, t),
                r = s.Ha(n);
              if (e instanceof Uc && e.Ca instanceof Cc) u.push(n);
              else {
                var i = ff(e, r);
                null != i && (u.push(n), a.set(n, i));
              }
            });
            var e = new ys(u);
            return new nf(a.ss(), e, s.fieldTransforms);
          }),
          (hf.prototype.tu = function(t, e, n, r) {
            var i = this.Xa(1, t),
              o = [yf(t, e)],
              s = [n];
            if (r.length % 2 != 0)
              throw new Wr(
                Hr.INVALID_ARGUMENT,
                'Function ' +
                  t +
                  '() needs to be called with an even number of arguments that alternate between field names and values.',
              );
            for (var u = 0; u < r.length; u += 2)
              o.push(yf(t, r[u])), s.push(r[u + 1]);
            for (var a = [], h = new Ns(), c = o.length - 1; 0 <= c; --c)
              if (!gf(a, o[c])) {
                var f = o[c],
                  l = s[c],
                  p = i.Ha(f);
                if (l instanceof Uc && l.Ca instanceof Cc) a.push(f);
                else {
                  var d = ff(l, p);
                  null != d && (a.push(f), h.set(f, d));
                }
              }
            var y = new ys(a);
            return new nf(h.ss(), y, i.fieldTransforms);
          }),
          (hf.prototype.Xa = function(t, e) {
            return new uf(
              { $a: t, methodName: e, path: si.k, Ma: !1 },
              this.s,
              this.serializer,
              this.ignoreUndefinedProperties,
            );
          }),
          (hf.prototype.eu = function(t, e, n) {
            return void 0 === n && (n = !1), ff(e, this.Xa(n ? 4 : 3, t));
          }),
          hf);
      function hf(t, e, n) {
        (this.s = t),
          (this.ignoreUndefinedProperties = e),
          (this.serializer = n || Jc(t));
      }
      function cf(t, e, n, r, i, o) {
        (this.settings = t),
          (this.s = e),
          (this.serializer = n),
          (this.ignoreUndefinedProperties = r),
          void 0 === i && this.ja(),
          (this.fieldTransforms = i || []),
          (this.Oe = o || []);
      }
      function ff(s, t) {
        if (pf(s)) return df('Unsupported field value:', t, s), lf(s, t);
        if (s instanceof Uc)
          return (
            (function(t, e) {
              if (!sf(e.$a))
                throw e.ka(
                  t.Fa + '() can only be used with update() and set()',
                );
              if (!e.path)
                throw e.ka(
                  t.Fa + '() is not currently supported inside arrays',
                );
              var n = t.Na(e);
              n && e.fieldTransforms.push(n);
            })(s, t),
            null
          );
        if ((t.path && t.Oe.push(t.path), s instanceof Array)) {
          if (t.settings.Ma && 4 !== t.$a)
            throw t.ka('Nested arrays are not supported');
          return (function(t) {
            for (var e = [], n = 0, r = 0, i = s; r < i.length; r++) {
              var o = ff(i[r], t.Ya(n));
              null == o && (o = { nullValue: 'NULL_VALUE' }), e.push(o), n++;
            }
            return { arrayValue: { values: e } };
          })(t);
        }
        return (function(t, e) {
          if (null === t) return { nullValue: 'NULL_VALUE' };
          if ('number' == typeof t)
            return (n = e.serializer), li((r = t)) ? xo(r) : Po(n, r);
          var n, r;
          if ('boolean' == typeof t) return { booleanValue: t };
          if ('string' == typeof t) return { stringValue: t };
          if (t instanceof Date) {
            var i = Kr.fromDate(t);
            return { timestampValue: Ro(e.serializer, i) };
          }
          if (t instanceof Kr) {
            var o = new Kr(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
            return { timestampValue: Ro(e.serializer, o) };
          }
          if (t instanceof Gc)
            return {
              geoPointValue: { latitude: t.latitude, longitude: t.longitude },
            };
          if (t instanceof Tc) return { bytesValue: ko(e.serializer, t) };
          if (t instanceof tf) {
            var s = e.s,
              u = t.qa;
            if (!u.isEqual(s))
              throw e.ka(
                'Document reference is for database ' +
                  u.projectId +
                  '/' +
                  u.database +
                  ' but should be for database ' +
                  s.projectId +
                  '/' +
                  s.database,
              );
            return { referenceValue: Co(t.qa || e.s, t.Ua.path) };
          }
          if (void 0 === t && e.ignoreUndefinedProperties) return null;
          throw e.ka('Unsupported field value: ' + lc(t));
        })(s, t);
      }
      function lf(t, r) {
        var i = {};
        return (
          Br(t)
            ? r.path && 0 < r.path.length && r.Oe.push(r.path)
            : jr(t, function(t, e) {
                var n = ff(e, r.Ga(t));
                null != n && (i[t] = n);
              }),
          { mapValue: { fields: i } }
        );
      }
      function pf(t) {
        return !(
          'object' != typeof t ||
          null === t ||
          t instanceof Array ||
          t instanceof Date ||
          t instanceof Kr ||
          t instanceof Gc ||
          t instanceof Tc ||
          t instanceof tf ||
          t instanceof Uc
        );
      }
      function df(t, e, n) {
        if (!pf(n) || !fc(n)) {
          var r = lc(n);
          throw 'an object' === r
            ? e.ka(t + ' a custom object')
            : e.ka(t + ' ' + r);
        }
      }
      function yf(t, e) {
        if (e instanceof Ec) return e.Sa;
        if ('string' == typeof e) return vf(t, e);
        throw new Wr(
          Hr.INVALID_ARGUMENT,
          'Function ' +
            t +
            '() called with invalid data. Field path arguments must be of type string or FieldPath.',
        );
      }
      function vf(t, e) {
        try {
          return (function(e) {
            if (0 <= e.search(Lc))
              throw new Wr(
                Hr.INVALID_ARGUMENT,
                'Invalid field path (' +
                  e +
                  "). Paths must not contain '~', '*', '/', '[', or ']'",
              );
            try {
              return new (_c.bind.apply(_c, d([void 0], e.split('.'))))();
            } catch (t) {
              throw new Wr(
                Hr.INVALID_ARGUMENT,
                'Invalid field path (' +
                  e +
                  "). Paths must not be empty, begin with '.', end with '.', or contain '..'",
              );
            }
          })(e).Sa;
        } catch (e) {
          var n = e instanceof Error ? e.message : e.toString();
          throw new Wr(
            Hr.INVALID_ARGUMENT,
            'Function ' + t + '() called with invalid data. ' + n,
          );
        }
      }
      function gf(t, e) {
        return t.some(function(t) {
          return t.isEqual(e);
        });
      }
      var mf =
        ((wf.prototype.fo = function() {
          return null != this.uid;
        }),
        (wf.prototype.su = function() {
          return this.fo() ? 'uid:' + this.uid : 'anonymous-user';
        }),
        (wf.prototype.isEqual = function(t) {
          return t.uid === this.uid;
        }),
        wf);
      function wf(t) {
        this.uid = t;
      }
      (mf.UNAUTHENTICATED = new mf(null)),
        (mf.nu = new mf('google-credentials-uid')),
        (mf.iu = new mf('first-party-uid'));
      function bf(t, e) {
        (this.user = e),
          (this.type = 'OAuth'),
          (this.ru = {}),
          (this.ru.Authorization = 'Bearer ' + t);
      }
      var Ef,
        If,
        Tf,
        _f =
          ((zf.prototype.getToken = function() {
            return Promise.resolve(null);
          }),
          (zf.prototype.hu = function() {}),
          (zf.prototype.au = function(t) {
            (this.ou = t)(mf.UNAUTHENTICATED);
          }),
          (zf.prototype.uu = function() {
            this.ou = null;
          }),
          zf),
        Nf =
          ((Qf.prototype.getToken = function() {
            var e = this,
              n = this._u,
              t = this.forceRefresh;
            return (
              (this.forceRefresh = !1),
              this.auth
                ? this.auth.getToken(t).then(function(t) {
                    return e._u !== n
                      ? (Nr(
                          'FirebaseCredentialsProvider',
                          'getToken aborted due to token change.',
                        ),
                        e.getToken())
                      : t
                      ? (Or('string' == typeof t.accessToken),
                        new bf(t.accessToken, e.currentUser))
                      : null;
                  })
                : Promise.resolve(null)
            );
          }),
          (Qf.prototype.hu = function() {
            this.forceRefresh = !0;
          }),
          (Qf.prototype.au = function(t) {
            (this.ou = t), this.lu && t(this.currentUser);
          }),
          (Qf.prototype.uu = function() {
            this.auth && this.auth.removeAuthTokenListener(this.cu),
              (this.cu = null),
              (this.ou = null);
          }),
          (Qf.prototype.fu = function() {
            var t = this.auth && this.auth.getUid();
            return Or(null === t || 'string' == typeof t), new mf(t);
          }),
          Qf),
        Af =
          (Object.defineProperty(Gf.prototype, 'ru', {
            get: function() {
              var t = { 'X-Goog-AuthUser': this.wu },
                e = this.du.auth.Tu([]);
              return e && (t.Authorization = e), t;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Gf),
        Sf =
          ((Bf.prototype.getToken = function() {
            return Promise.resolve(new Af(this.du, this.wu));
          }),
          (Bf.prototype.au = function(t) {
            t(mf.iu);
          }),
          (Bf.prototype.uu = function() {}),
          (Bf.prototype.hu = function() {}),
          Bf),
        Df =
          ((jf.prototype.Pu = function() {
            return 1 === this.state || 2 === this.state || 4 === this.state;
          }),
          (jf.prototype.Vu = function() {
            return 2 === this.state;
          }),
          (jf.prototype.start = function() {
            3 !== this.state ? this.auth() : this.gu();
          }),
          (jf.prototype.stop = function() {
            return y(this, void 0, void 0, function() {
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return this.Pu() ? [4, this.close(0)] : [3, 2];
                  case 1:
                    t.sent(), (t.label = 2);
                  case 2:
                    return [2];
                }
              });
            });
          }),
          (jf.prototype.pu = function() {
            (this.state = 0), this.Zo.reset();
          }),
          (jf.prototype.yu = function() {
            var t = this;
            this.Vu() &&
              null === this.mu &&
              (this.mu = this.Wn.ei(this.Eu, 6e4, function() {
                return t.bu();
              }));
          }),
          (jf.prototype.vu = function(t) {
            this.Su(), this.stream.send(t);
          }),
          (jf.prototype.bu = function() {
            return y(this, void 0, void 0, function() {
              return v(this, function(t) {
                return this.Vu() ? [2, this.close(0)] : [2];
              });
            });
          }),
          (jf.prototype.Su = function() {
            this.mu && (this.mu.cancel(), (this.mu = null));
          }),
          (jf.prototype.close = function(e, n) {
            return y(this, void 0, void 0, function() {
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return (
                      this.Su(),
                      this.Zo.cancel(),
                      this.Ru++,
                      3 !== e
                        ? this.Zo.reset()
                        : n && n.code === Hr.RESOURCE_EXHAUSTED
                        ? (Ar(n.toString()),
                          Ar(
                            'Using maximum backoff delay to prevent overloading the backend.',
                          ),
                          this.Zo.Xn())
                        : n && n.code === Hr.UNAUTHENTICATED && this.Au.hu(),
                      null !== this.stream &&
                        (this.Du(), this.stream.close(), (this.stream = null)),
                      (this.state = e),
                      [4, this.listener.Cu(n)]
                    );
                  case 1:
                    return t.sent(), [2];
                }
              });
            });
          }),
          (jf.prototype.Du = function() {}),
          (jf.prototype.auth = function() {
            var n = this;
            this.state = 1;
            var t = this.Fu(this.Ru),
              e = this.Ru;
            this.Au.getToken().then(
              function(t) {
                n.Ru === e && n.Nu(t);
              },
              function(e) {
                t(function() {
                  var t = new Wr(
                    Hr.UNKNOWN,
                    'Fetching auth token failed: ' + e.message,
                  );
                  return n.$u(t);
                });
              },
            );
          }),
          (jf.prototype.Nu = function(t) {
            var e = this,
              n = this.Fu(this.Ru);
            (this.stream = this.ku(t)),
              this.stream.xu(function() {
                n(function() {
                  return (e.state = 2), e.listener.xu();
                });
              }),
              this.stream.Cu(function(t) {
                n(function() {
                  return e.$u(t);
                });
              }),
              this.stream.onMessage(function(t) {
                n(function() {
                  return e.onMessage(t);
                });
              });
          }),
          (jf.prototype.gu = function() {
            var t = this;
            (this.state = 4),
              this.Zo.Zn(function() {
                return y(t, void 0, void 0, function() {
                  return v(this, function(t) {
                    return (this.state = 0), this.start(), [2];
                  });
                });
              });
          }),
          (jf.prototype.$u = function(t) {
            return (
              Nr('PersistentStream', 'close with error: ' + t),
              (this.stream = null),
              this.close(3, t)
            );
          }),
          (jf.prototype.Fu = function(e) {
            var n = this;
            return function(t) {
              n.Wn.Sr(function() {
                return n.Ru === e
                  ? t()
                  : (Nr(
                      'PersistentStream',
                      'stream callback skipped by getCloseGuardedDispatcher.',
                    ),
                    Promise.resolve());
              });
            };
          }),
          jf),
        Of =
          (n(qf, (Tf = Df)),
          (qf.prototype.ku = function(t) {
            return this.Iu.Mu('Listen', t);
          }),
          (qf.prototype.onMessage = function(t) {
            this.Zo.reset();
            var e = (function(t, e) {
                var n, r, i, o;
                if ('targetChange' in e) {
                  e.targetChange;
                  var s =
                      'NO_CHANGE' ===
                      (o = e.targetChange.targetChangeType || 'NO_CHANGE')
                        ? 0
                        : 'ADD' === o
                        ? 1
                        : 'REMOVE' === o
                        ? 2
                        : 'CURRENT' === o
                        ? 3
                        : 'RESET' === o
                        ? 4
                        : Dr(),
                    u = e.targetChange.targetIds || [],
                    a = Lo(t, e.targetChange.resumeToken),
                    h = e.targetChange.cause,
                    c =
                      h &&
                      ((i = void 0 === (r = h).code ? Hr.UNKNOWN : Ei(r.code)),
                      new Wr(i, r.message || ''));
                  n = new zi(s, u, a, c || null);
                } else if ('documentChange' in e) {
                  e.documentChange;
                  var f = e.documentChange;
                  f.document, f.document.name, f.document.updateTime;
                  var l = Fo(t, f.document.name),
                    p = Uo(f.document.updateTime),
                    d = new _s({ mapValue: { fields: f.document.fields } }),
                    y = new Ks(l, p, d, {}),
                    v = f.targetIds || [],
                    g = f.removedTargetIds || [];
                  n = new Gi(v, g, y.key, y);
                } else if ('documentDelete' in e) {
                  e.documentDelete;
                  var m = e.documentDelete;
                  m.document;
                  var w = Fo(t, m.document),
                    b = m.readTime ? Uo(m.readTime) : Xr.min(),
                    E = new Xs(w, b),
                    I = m.removedTargetIds || [];
                  n = new Gi([], I, E.key, E);
                } else if ('documentRemove' in e) {
                  e.documentRemove;
                  var T = e.documentRemove;
                  T.document;
                  var _ = Fo(t, T.document),
                    N = T.removedTargetIds || [];
                  n = new Gi([], N, _, null);
                } else {
                  if (!('filter' in e)) return Dr();
                  e.filter;
                  var A = e.filter;
                  A.targetId;
                  var S = A.count || 0,
                    D = new yi(S),
                    O = A.targetId;
                  n = new Qi(O, D);
                }
                return n;
              })(this.serializer, t),
              n = (function(t) {
                if (!('targetChange' in t)) return Xr.min();
                var e = t.targetChange;
                return (e.targetIds && e.targetIds.length) || !e.readTime
                  ? Xr.min()
                  : Uo(e.readTime);
              })(t);
            return this.listener.Lu(e, n);
          }),
          (qf.prototype.Ou = function(t) {
            var e,
              n,
              r,
              i,
              o = {};
            (o.database = Bo(this.serializer)),
              (o.addTarget =
                ((e = this.serializer),
                (i = (n = t).target),
                ((r = Au(i)
                  ? { documents: Wo(e, i) }
                  : { query: Ko(e, i) }).targetId = n.targetId),
                0 < n.resumeToken.G() && (r.resumeToken = ko(e, n.resumeToken)),
                r));
            var s,
              u,
              a =
                (this.serializer,
                (s = t),
                null ==
                (u = (function() {
                  switch (s.Y) {
                    case 0:
                      return null;
                    case 1:
                      return 'existence-filter-mismatch';
                    case 2:
                      return 'limbo-document';
                    default:
                      return Dr();
                  }
                })())
                  ? null
                  : { 'goog-listen-tags': u });
            a && (o.labels = a), this.vu(o);
          }),
          (qf.prototype.Bu = function(t) {
            var e = {};
            (e.database = Bo(this.serializer)),
              (e.removeTarget = t),
              this.vu(e);
          }),
          qf),
        xf =
          (n(Ff, (If = Df)),
          Object.defineProperty(Ff.prototype, 'Uu', {
            get: function() {
              return this.qu;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (Ff.prototype.start = function() {
            (this.qu = !1),
              (this.lastStreamToken = pi.H),
              If.prototype.start.call(this);
          }),
          (Ff.prototype.Du = function() {
            this.qu && this.Qu([]);
          }),
          (Ff.prototype.ku = function(t) {
            return this.Iu.Mu('Write', t);
          }),
          (Ff.prototype.onMessage = function(t) {
            if (
              (Or(!!t.streamToken),
              (this.lastStreamToken = Lo(this.serializer, t.streamToken)),
              this.qu)
            ) {
              this.Zo.reset();
              var e =
                  ((r = t.writeResults),
                  (i = t.commitTime),
                  r && 0 < r.length
                    ? (Or(void 0 !== i),
                      r.map(function(t) {
                        return (function(t, e) {
                          var n = t.updateTime ? Uo(t.updateTime) : Uo(e);
                          n.isEqual(Xr.min()) && (n = Uo(e));
                          var r = null;
                          return (
                            t.transformResults &&
                              0 < t.transformResults.length &&
                              (r = t.transformResults),
                            new hs(n, r)
                          );
                        })(t, i);
                      }))
                    : []),
                n = Uo(t.commitTime);
              return this.listener.Wu(n, e);
            }
            var r, i;
            return (
              Or(!t.writeResults || 0 === t.writeResults.length),
              (this.qu = !0),
              this.listener.ju()
            );
          }),
          (Ff.prototype.Ku = function() {
            var t = {};
            (t.database = Bo(this.serializer)), this.vu(t);
          }),
          (Ff.prototype.Qu = function(t) {
            var e = this,
              n = {
                streamToken: ko(this.serializer, this.lastStreamToken),
                writes: t.map(function(t) {
                  return zo(e.serializer, t);
                }),
              };
            this.vu(n);
          }),
          Ff),
        Pf =
          (n(
            Mf,
            (Ef = function() {
              this.Gu = void 0;
            }),
          ),
          (Mf.prototype.Hu = function() {
            if (this.zu)
              throw new Wr(
                Hr.FAILED_PRECONDITION,
                'The client has already been terminated.',
              );
          }),
          (Mf.prototype.Yu = function(e, n) {
            var r = this;
            return (
              this.Hu(),
              this.credentials
                .getToken()
                .then(function(t) {
                  return r.Iu.Yu(e, n, t);
                })
                .catch(function(t) {
                  throw (t.code === Hr.UNAUTHENTICATED && r.credentials.hu(),
                  t);
                })
            );
          }),
          (Mf.prototype.Ju = function(e, n) {
            var r = this;
            return (
              this.Hu(),
              this.credentials
                .getToken()
                .then(function(t) {
                  return r.Iu.Ju(e, n, t);
                })
                .catch(function(t) {
                  throw (t.code === Hr.UNAUTHENTICATED && r.credentials.hu(),
                  t);
                })
            );
          }),
          Mf),
        Rf =
          ((Vf.prototype.nc = function(r) {
            return y(this, void 0, void 0, function() {
              var e,
                n = this;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    if ((this.ic(), 0 < this.mutations.length))
                      throw new Wr(
                        Hr.INVALID_ARGUMENT,
                        'Firestore transactions require all reads to be executed before all writes.',
                      );
                    return [
                      4,
                      (function(s, u) {
                        return y(this, void 0, void 0, function() {
                          var i, e, n, o, r;
                          return v(this, function(t) {
                            switch (t.label) {
                              case 0:
                                return (
                                  (i = xr(s)),
                                  (e = {
                                    database: Bo(i.serializer),
                                    documents: u.map(function(t) {
                                      return Mo(i.serializer, t);
                                    }),
                                  }),
                                  [4, i.Ju('BatchGetDocuments', e)]
                                );
                              case 1:
                                return (
                                  (n = t.sent()),
                                  (o = new Map()),
                                  n.forEach(function(t) {
                                    var e,
                                      n,
                                      r =
                                        ((e = i.serializer),
                                        'found' in (n = t)
                                          ? (function(t, e) {
                                              Or(!!e.found),
                                                e.found.name,
                                                e.found.updateTime;
                                              var n = Fo(t, e.found.name),
                                                r = Uo(e.found.updateTime),
                                                i = new _s({
                                                  mapValue: {
                                                    fields: e.found.fields,
                                                  },
                                                });
                                              return new Ks(n, r, i, {});
                                            })(e, n)
                                          : 'missing' in n
                                          ? (function(t, e) {
                                              Or(!!e.missing), Or(!!e.readTime);
                                              var n = Fo(t, e.missing),
                                                r = Uo(e.readTime);
                                              return new Xs(n, r);
                                            })(e, n)
                                          : Dr());
                                    o.set(r.key.toString(), r);
                                  }),
                                  (r = []),
                                  [
                                    2,
                                    (u.forEach(function(t) {
                                      var e = o.get(t.toString());
                                      Or(!!e), r.push(e);
                                    }),
                                    r),
                                  ]
                                );
                            }
                          });
                        });
                      })(this.Xu, r),
                    ];
                  case 1:
                    return [
                      2,
                      ((e = t.sent()).forEach(function(t) {
                        t instanceof Xs || t instanceof Ks ? n.rc(t) : Dr();
                      }),
                      e),
                    ];
                }
              });
            });
          }),
          (Vf.prototype.set = function(t, e) {
            this.write(e.Wa(t, this.Ue(t))), this.sc.add(t);
          }),
          (Vf.prototype.update = function(t, e) {
            try {
              this.write(e.Wa(t, this.oc(t)));
            } catch (t) {
              this.ec = t;
            }
            this.sc.add(t);
          }),
          (Vf.prototype.delete = function(t) {
            this.write([new Is(t, this.Ue(t))]), this.sc.add(t);
          }),
          (Vf.prototype.commit = function() {
            return y(this, void 0, void 0, function() {
              var e,
                r = this;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    if ((this.ic(), this.ec)) throw this.ec;
                    return (
                      (e = this.Zu),
                      this.mutations.forEach(function(t) {
                        e.delete(t.key.toString());
                      }),
                      e.forEach(function(t, e) {
                        var n = new ai($r.$(e));
                        r.mutations.push(new Ts(n, r.Ue(n)));
                      }),
                      [
                        4,
                        (function(r, i) {
                          return y(this, void 0, void 0, function() {
                            var e, n;
                            return v(this, function(t) {
                              switch (t.label) {
                                case 0:
                                  return (
                                    (e = xr(r)),
                                    (n = {
                                      database: Bo(e.serializer),
                                      writes: i.map(function(t) {
                                        return zo(e.serializer, t);
                                      }),
                                    }),
                                    [4, e.Yu('Commit', n)]
                                  );
                                case 1:
                                  return t.sent(), [2];
                              }
                            });
                          });
                        })(this.Xu, this.mutations),
                      ]
                    );
                  case 1:
                    return t.sent(), (this.tc = !0), [2];
                }
              });
            });
          }),
          (Vf.prototype.rc = function(t) {
            var e;
            if (t instanceof Ks) e = t.version;
            else {
              if (!(t instanceof Xs)) throw Dr();
              e = Xr.min();
            }
            var n = this.Zu.get(t.key.toString());
            if (n) {
              if (!e.isEqual(n))
                throw new Wr(
                  Hr.ABORTED,
                  'Document version changed between two reads.',
                );
            } else this.Zu.set(t.key.toString(), e);
          }),
          (Vf.prototype.Ue = function(t) {
            var e = this.Zu.get(t.toString());
            return !this.sc.has(t) && e ? gs.updateTime(e) : gs.Qe();
          }),
          (Vf.prototype.oc = function(t) {
            var e = this.Zu.get(t.toString());
            if (this.sc.has(t) || !e) return gs.exists(!0);
            if (e.isEqual(Xr.min()))
              throw new Wr(
                Hr.INVALID_ARGUMENT,
                "Can't update a document that doesn't exist.",
              );
            return gs.updateTime(e);
          }),
          (Vf.prototype.write = function(t) {
            this.ic(), (this.mutations = this.mutations.concat(t));
          }),
          (Vf.prototype.ic = function() {}),
          Vf),
        kf =
          ((Cf.prototype.lc = function() {
            var t = this;
            0 === this.ac &&
              (this._c('Unknown'),
              (this.uc = this.Oo.ei('online_state_timeout', 1e4, function() {
                return (
                  (t.uc = null),
                  t.fc("Backend didn't respond within 10 seconds."),
                  t._c('Offline'),
                  Promise.resolve()
                );
              })));
          }),
          (Cf.prototype.dc = function(t) {
            'Online' === this.state
              ? this._c('Unknown')
              : (this.ac++,
                1 <= this.ac &&
                  (this.wc(),
                  this.fc(
                    'Connection failed 1 times. Most recent error: ' +
                      t.toString(),
                  ),
                  this._c('Offline')));
          }),
          (Cf.prototype.set = function(t) {
            this.wc(),
              (this.ac = 0),
              'Online' === t && (this.cc = !1),
              this._c(t);
          }),
          (Cf.prototype._c = function(t) {
            t !== this.state && ((this.state = t), this.hc(t));
          }),
          (Cf.prototype.fc = function(t) {
            var e =
              'Could not reach Cloud Firestore backend. ' +
              t +
              '\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.';
            this.cc ? (Ar(e), (this.cc = !1)) : Nr('OnlineStateTracker', e);
          }),
          (Cf.prototype.wc = function() {
            null !== this.uc && (this.uc.cancel(), (this.uc = null));
          }),
          Cf),
        Lf =
          ((Uf.prototype.start = function() {
            return this.enableNetwork();
          }),
          (Uf.prototype.enableNetwork = function() {
            return this.Rc.delete(0), this.$c();
          }),
          (Uf.prototype.$c = function() {
            return y(this, void 0, void 0, function() {
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return this.Vc()
                      ? (this.kc() ? this.xc() : this.pc.set('Unknown'),
                        [4, this.Mc()])
                      : [3, 2];
                  case 1:
                    t.sent(), (t.label = 2);
                  case 2:
                    return [2];
                }
              });
            });
          }),
          (Uf.prototype.disableNetwork = function() {
            return y(this, void 0, void 0, function() {
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return this.Rc.add(0), [4, this.Lc()];
                  case 1:
                    return t.sent(), this.pc.set('Offline'), [2];
                }
              });
            });
          }),
          (Uf.prototype.Lc = function() {
            return y(this, void 0, void 0, function() {
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return [4, this.Dc.stop()];
                  case 1:
                    return t.sent(), [4, this.yc.stop()];
                  case 2:
                    return (
                      t.sent(),
                      0 < this.Ec.length &&
                        (Nr(
                          'RemoteStore',
                          'Stopping write stream with ' +
                            this.Ec.length +
                            ' pending writes',
                        ),
                        (this.Ec = [])),
                      this.Oc(),
                      [2]
                    );
                }
              });
            });
          }),
          (Uf.prototype.Ur = function() {
            return y(this, void 0, void 0, function() {
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return (
                      Nr('RemoteStore', 'RemoteStore shutting down.'),
                      this.Rc.add(5),
                      [4, this.Lc()]
                    );
                  case 1:
                    return t.sent(), this.mc.Ur(), this.pc.set('Unknown'), [2];
                }
              });
            });
          }),
          (Uf.prototype.listen = function(t) {
            this.Ic.has(t.targetId) ||
              (this.Ic.set(t.targetId, t),
              this.kc() ? this.xc() : this.yc.Vu() && this.Bc(t));
          }),
          (Uf.prototype.qc = function(t) {
            this.Ic.delete(t),
              this.yc.Vu() && this.Uc(t),
              0 === this.Ic.size &&
                (this.yc.Vu()
                  ? this.yc.yu()
                  : this.Vc() && this.pc.set('Unknown'));
          }),
          (Uf.prototype.Me = function(t) {
            return this.Ic.get(t) || null;
          }),
          (Uf.prototype.xe = function(t) {
            return this.Qc.xe(t);
          }),
          (Uf.prototype.Bc = function(t) {
            this.Ac.de(t.targetId), this.yc.Ou(t);
          }),
          (Uf.prototype.Uc = function(t) {
            this.Ac.de(t), this.yc.Bu(t);
          }),
          (Uf.prototype.xc = function() {
            (this.Ac = new Ji(this)), this.yc.start(), this.pc.lc();
          }),
          (Uf.prototype.kc = function() {
            return this.Vc() && !this.yc.Pu() && 0 < this.Ic.size;
          }),
          (Uf.prototype.Vc = function() {
            return 0 === this.Rc.size;
          }),
          (Uf.prototype.Oc = function() {
            this.Ac = null;
          }),
          (Uf.prototype.bc = function() {
            return y(this, void 0, void 0, function() {
              var n = this;
              return v(this, function(t) {
                return (
                  this.Ic.forEach(function(t, e) {
                    n.Bc(t);
                  }),
                  [2]
                );
              });
            });
          }),
          (Uf.prototype.vc = function(e) {
            return y(this, void 0, void 0, function() {
              return v(this, function(t) {
                return (
                  this.Oc(),
                  this.kc()
                    ? (this.pc.dc(e), this.xc())
                    : this.pc.set('Unknown'),
                  [2]
                );
              });
            });
          }),
          (Uf.prototype.Sc = function(i, o) {
            return y(this, void 0, void 0, function() {
              var e, n, r;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    if (
                      (this.pc.set('Online'),
                      !(i instanceof zi && 2 === i.state && i.cause))
                    )
                      return [3, 6];
                    t.label = 1;
                  case 1:
                    return t.trys.push([1, 3, , 5]), [4, this.Wc(i)];
                  case 2:
                    return t.sent(), [3, 5];
                  case 3:
                    return (
                      (e = t.sent()),
                      Nr(
                        'RemoteStore',
                        'Failed to remove targets %s: %s ',
                        i.targetIds.join(','),
                        e,
                      ),
                      [4, this.jc(e)]
                    );
                  case 4:
                    return t.sent(), [3, 5];
                  case 5:
                    return [3, 13];
                  case 6:
                    if (
                      (i instanceof Gi
                        ? this.Ac.Pe(i)
                        : i instanceof Qi
                        ? this.Ac.De(i)
                        : this.Ac.pe(i),
                      o.isEqual(Xr.min()))
                    )
                      return [3, 13];
                    t.label = 7;
                  case 7:
                    return t.trys.push([7, 11, , 13]), [4, this.Tc.xi()];
                  case 8:
                    return (
                      (n = t.sent()), 0 <= o.o(n) ? [4, this.Kc(o)] : [3, 10]
                    );
                  case 9:
                    t.sent(), (t.label = 10);
                  case 10:
                    return [3, 13];
                  case 11:
                    return (
                      Nr(
                        'RemoteStore',
                        'Failed to raise snapshot:',
                        (r = t.sent()),
                      ),
                      [4, this.jc(r)]
                    );
                  case 12:
                    return t.sent(), [3, 13];
                  case 13:
                    return [2];
                }
              });
            });
          }),
          (Uf.prototype.jc = function(n, r) {
            return y(this, void 0, void 0, function() {
              var e = this;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    if (!bh(n)) throw n;
                    return this.Rc.add(1), [4, this.Lc()];
                  case 1:
                    return (
                      t.sent(),
                      this.pc.set('Offline'),
                      (r =
                        r ||
                        function() {
                          return e.Tc.xi();
                        }),
                      this.Oo.Cr(function() {
                        return y(e, void 0, void 0, function() {
                          return v(this, function(t) {
                            switch (t.label) {
                              case 0:
                                return (
                                  Nr(
                                    'RemoteStore',
                                    'Retrying IndexedDB access',
                                  ),
                                  [4, r()]
                                );
                              case 1:
                                return (
                                  t.sent(), this.Rc.delete(1), [4, this.$c()]
                                );
                              case 2:
                                return t.sent(), [2];
                            }
                          });
                        });
                      }),
                      [2]
                    );
                }
              });
            });
          }),
          (Uf.prototype.Gc = function(e) {
            var n = this;
            return e().catch(function(t) {
              return n.jc(t, e);
            });
          }),
          (Uf.prototype.Kc = function(r) {
            var i = this,
              t = this.Ac.Ne(r);
            return (
              t.Qt.forEach(function(t, e) {
                if (0 < t.resumeToken.G()) {
                  var n = i.Ic.get(e);
                  n && i.Ic.set(e, n.Z(t.resumeToken, r));
                }
              }),
              t.Wt.forEach(function(t) {
                var e = i.Ic.get(t);
                if (e) {
                  i.Ic.set(t, e.Z(pi.H, e.J)), i.Uc(t);
                  var n = new mi(e.target, t, 1, e.sequenceNumber);
                  i.Bc(n);
                }
              }),
              this.Qc.na(t)
            );
          }),
          (Uf.prototype.Wc = function(o) {
            return y(this, void 0, void 0, function() {
              var e, n, r, i;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    (e = o.cause), (n = 0), (r = o.targetIds), (t.label = 1);
                  case 1:
                    return n < r.length
                      ? ((i = r[n]),
                        this.Ic.has(i) ? [4, this.Qc.zc(i, e)] : [3, 3])
                      : [3, 5];
                  case 2:
                    t.sent(),
                      this.Ic.delete(i),
                      this.Ac.removeTarget(i),
                      (t.label = 3);
                  case 3:
                    t.label = 4;
                  case 4:
                    return n++, [3, 1];
                  case 5:
                    return [2];
                }
              });
            });
          }),
          (Uf.prototype.Mc = function() {
            return y(this, void 0, void 0, function() {
              var e, n, r;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    (e =
                      0 < this.Ec.length
                        ? this.Ec[this.Ec.length - 1].batchId
                        : -1),
                      (t.label = 1);
                  case 1:
                    if (!this.Hc()) return [3, 7];
                    t.label = 2;
                  case 2:
                    return t.trys.push([2, 4, , 6]), [4, this.Tc.ha(e)];
                  case 3:
                    return null === (n = t.sent())
                      ? (0 === this.Ec.length && this.Dc.yu(), [3, 7])
                      : ((e = n.batchId), this.Yc(n), [3, 6]);
                  case 4:
                    return (r = t.sent()), [4, this.jc(r)];
                  case 5:
                    return t.sent(), [3, 6];
                  case 6:
                    return [3, 1];
                  case 7:
                    return this.Jc() && this.Xc(), [2];
                }
              });
            });
          }),
          (Uf.prototype.Hc = function() {
            return this.Vc() && this.Ec.length < 10;
          }),
          (Uf.prototype.Zc = function() {
            return this.Ec.length;
          }),
          (Uf.prototype.Yc = function(t) {
            this.Ec.push(t),
              this.Dc.Vu() && this.Dc.Uu && this.Dc.Qu(t.mutations);
          }),
          (Uf.prototype.Jc = function() {
            return this.Vc() && !this.Dc.Pu() && 0 < this.Ec.length;
          }),
          (Uf.prototype.Xc = function() {
            this.Dc.start();
          }),
          (Uf.prototype.Cc = function() {
            return y(this, void 0, void 0, function() {
              return v(this, function(t) {
                return this.Dc.Ku(), [2];
              });
            });
          }),
          (Uf.prototype.Nc = function() {
            return y(this, void 0, void 0, function() {
              var e, n, r;
              return v(this, function(t) {
                for (e = 0, n = this.Ec; e < n.length; e++)
                  (r = n[e]), this.Dc.Qu(r.mutations);
                return [2];
              });
            });
          }),
          (Uf.prototype.Wu = function(i, o) {
            return y(this, void 0, void 0, function() {
              var e,
                n,
                r = this;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return (
                      (e = this.Ec.shift()),
                      (n = Du.from(e, i, o)),
                      [
                        4,
                        this.Gc(function() {
                          return r.Qc.tl(n);
                        }),
                      ]
                    );
                  case 1:
                    return t.sent(), [4, this.Mc()];
                  case 2:
                    return t.sent(), [2];
                }
              });
            });
          }),
          (Uf.prototype.Fc = function(e) {
            return y(this, void 0, void 0, function() {
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return e && this.Dc.Uu ? [4, this.el(e)] : [3, 2];
                  case 1:
                    t.sent(), (t.label = 2);
                  case 2:
                    return this.Jc() && this.Xc(), [2];
                }
              });
            });
          }),
          (Uf.prototype.el = function(i) {
            return y(this, void 0, void 0, function() {
              var e,
                n,
                r = this;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return bi((n = i.code)) && n !== Hr.ABORTED
                      ? ((e = this.Ec.shift()),
                        this.Dc.pu(),
                        [
                          4,
                          this.Gc(function() {
                            return r.Qc.sl(e.batchId, i);
                          }),
                        ])
                      : [3, 3];
                  case 1:
                    return t.sent(), [4, this.Mc()];
                  case 2:
                    t.sent(), (t.label = 3);
                  case 3:
                    return [2];
                }
              });
            });
          }),
          (Uf.prototype.nl = function() {
            return new Rf(this.Xu);
          }),
          (Uf.prototype.gc = function() {
            return y(this, void 0, void 0, function() {
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return this.Rc.add(4), [4, this.Lc()];
                  case 1:
                    return (
                      t.sent(),
                      this.pc.set('Unknown'),
                      this.Rc.delete(4),
                      [4, this.$c()]
                    );
                  case 2:
                    return t.sent(), [2];
                }
              });
            });
          }),
          (Uf.prototype.il = function(e) {
            return y(this, void 0, void 0, function() {
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return (
                      this.Oo.ah(),
                      Nr('RemoteStore', 'RemoteStore received new credentials'),
                      this.Rc.add(3),
                      [4, this.Lc()]
                    );
                  case 1:
                    return t.sent(), this.pc.set('Unknown'), [4, this.Qc.il(e)];
                  case 2:
                    return t.sent(), this.Rc.delete(3), [4, this.$c()];
                  case 3:
                    return t.sent(), [2];
                }
              });
            });
          }),
          (Uf.prototype.rl = function(e) {
            return y(this, void 0, void 0, function() {
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return e ? (this.Rc.delete(2), [4, this.$c()]) : [3, 2];
                  case 1:
                    return t.sent(), [3, 5];
                  case 2:
                    return e ? [3, 4] : (this.Rc.add(2), [4, this.Lc()]);
                  case 3:
                    t.sent(), this.pc.set('Unknown'), (t.label = 4);
                  case 4:
                    t.label = 5;
                  case 5:
                    return [2];
                }
              });
            });
          }),
          Uf);
      function Uf(t, e, n, r, i) {
        var o,
          s,
          u,
          a,
          h,
          c,
          f,
          l,
          p = this;
        (this.Tc = t),
          (this.Xu = e),
          (this.Oo = n),
          (this.Ec = []),
          (this.Ic = new Map()),
          (this.Ac = null),
          (this.Rc = new Set()),
          (this.mc = i),
          this.mc.Pc(function(t) {
            n.Sr(function() {
              return y(p, void 0, void 0, function() {
                return v(this, function(t) {
                  switch (t.label) {
                    case 0:
                      return this.Vc()
                        ? (Nr(
                            'RemoteStore',
                            'Restarting streams for network reachability change.',
                          ),
                          [4, this.gc()])
                        : [3, 2];
                    case 1:
                      t.sent(), (t.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            });
          }),
          (this.pc = new kf(n, r)),
          (this.yc =
            ((h = this.Xu),
            (c = n),
            (f = {
              xu: this.bc.bind(this),
              Cu: this.vc.bind(this),
              Lu: this.Sc.bind(this),
            }),
            (l = xr(h)),
            new Of(c, l.Iu, l.credentials, l.serializer, f))),
          (this.Dc =
            ((o = this.Xu),
            (s = n),
            (u = {
              xu: this.Cc.bind(this),
              Cu: this.Fc.bind(this),
              ju: this.Nc.bind(this),
              Wu: this.Wu.bind(this),
            }),
            (a = xr(o)),
            new xf(s, a.Iu, a.credentials, a.serializer, u)));
      }
      function Cf(t, e) {
        (this.Oo = t),
          (this.hc = e),
          (this.state = 'Unknown'),
          (this.ac = 0),
          (this.uc = null),
          (this.cc = !0);
      }
      function Vf(t) {
        (this.Xu = t),
          (this.Zu = new Map()),
          (this.mutations = []),
          (this.tc = !1),
          (this.ec = null),
          (this.sc = new Set());
      }
      function Mf(t, e, n) {
        var r = this;
        return (
          ((r = Ef.call(this) || this).Iu = t),
          (r.credentials = e),
          (r.serializer = n),
          (r.zu = !1),
          r
        );
      }
      function Ff(t, e, n, r, i) {
        var o = this;
        return (
          ((o =
            If.call(
              this,
              t,
              'write_stream_connection_backoff',
              'write_stream_idle',
              e,
              n,
              i,
            ) || this).serializer = r),
          (o.qu = !1),
          (o.lastStreamToken = pi.H),
          o
        );
      }
      function qf(t, e, n, r, i) {
        var o = this;
        return (
          ((o =
            Tf.call(
              this,
              t,
              'listen_stream_connection_backoff',
              'listen_stream_idle',
              e,
              n,
              i,
            ) || this).serializer = r),
          o
        );
      }
      function jf(t, e, n, r, i, o) {
        (this.Wn = t),
          (this.Eu = n),
          (this.Iu = r),
          (this.Au = i),
          (this.listener = o),
          (this.state = 0),
          (this.Ru = 0),
          (this.mu = null),
          (this.stream = null),
          (this.Zo = new zu(t, e));
      }
      function Bf(t, e) {
        (this.du = t), (this.wu = e);
      }
      function Gf(t, e) {
        (this.du = t),
          (this.wu = e),
          (this.type = 'FirstParty'),
          (this.user = mf.iu);
      }
      function Qf(t) {
        var e = this;
        (this.cu = null),
          (this.currentUser = mf.UNAUTHENTICATED),
          (this.lu = !1),
          (this._u = 0),
          (this.ou = null),
          (this.forceRefresh = !1),
          (this.cu = function() {
            e._u++,
              (e.currentUser = e.fu()),
              (e.lu = !0),
              e.ou && e.ou(e.currentUser);
          }),
          (this._u = 0),
          (this.auth = t.getImmediate({ optional: !0 })),
          this.auth
            ? this.auth.addAuthTokenListener(this.cu)
            : (this.cu(null),
              t.get().then(
                function(t) {
                  (e.auth = t), e.cu && e.auth.addAuthTokenListener(e.cu);
                },
                function() {},
              ));
      }
      function zf() {
        this.ou = null;
      }
      function Hf(t, e) {
        return 'firestore_clients_' + t + '_' + e;
      }
      function Wf(t, e, n) {
        var r = 'firestore_mutations_' + t + '_' + n;
        return e.fo() && (r += '_' + e.uid), r;
      }
      function Kf(t, e) {
        return 'firestore_targets_' + t + '_' + e;
      }
      function Xf(t) {
        this.key = t;
      }
      function Yf(t) {
        this.key = t;
      }
      function $f(t, e, n) {
        (this.query = t), (this.targetId = e), (this.view = n);
      }
      function Jf(t) {
        (this.key = t), (this.R_ = !1);
      }
      function Zf() {
        (this.if = void 0), (this.rf = []);
      }
      var tl,
        el,
        nl =
          ((kl.ol = function(t, e, n) {
            var r = JSON.parse(n),
              i =
                'object' == typeof r &&
                -1 !==
                  ['pending', 'acknowledged', 'rejected'].indexOf(r.state) &&
                (void 0 === r.error || 'object' == typeof r.error),
              o = void 0;
            return (
              i &&
                r.error &&
                (i =
                  'string' == typeof r.error.message &&
                  'string' == typeof r.error.code) &&
                (o = new Wr(r.error.code, r.error.message)),
              i
                ? new kl(t, e, r.state, o)
                : (Ar(
                    'SharedClientState',
                    "Failed to parse mutation state for ID '" + e + "': " + n,
                  ),
                  null)
            );
          }),
          (kl.prototype.hl = function() {
            var t = { state: this.state, updateTimeMs: Date.now() };
            return (
              this.error &&
                (t.error = {
                  code: this.error.code,
                  message: this.error.message,
                }),
              JSON.stringify(t)
            );
          }),
          kl),
        rl =
          ((Rl.ol = function(t, e) {
            var n = JSON.parse(e),
              r =
                'object' == typeof n &&
                -1 !==
                  ['not-current', 'current', 'rejected'].indexOf(n.state) &&
                (void 0 === n.error || 'object' == typeof n.error),
              i = void 0;
            return (
              r &&
                n.error &&
                (r =
                  'string' == typeof n.error.message &&
                  'string' == typeof n.error.code) &&
                (i = new Wr(n.error.code, n.error.message)),
              r
                ? new Rl(t, n.state, i)
                : (Ar(
                    'SharedClientState',
                    "Failed to parse target state for ID '" + t + "': " + e,
                  ),
                  null)
            );
          }),
          (Rl.prototype.hl = function() {
            var t = { state: this.state, updateTimeMs: Date.now() };
            return (
              this.error &&
                (t.error = {
                  code: this.error.code,
                  message: this.error.message,
                }),
              JSON.stringify(t)
            );
          }),
          Rl),
        il =
          ((Pl.ol = function(t, e) {
            for (
              var n = JSON.parse(e),
                r = 'object' == typeof n && n.activeTargetIds instanceof Array,
                i = Bi(),
                o = 0;
              r && o < n.activeTargetIds.length;
              ++o
            )
              (r = li(n.activeTargetIds[o])), (i = i.add(n.activeTargetIds[o]));
            return r
              ? new Pl(t, i)
              : (Ar(
                  'SharedClientState',
                  "Failed to parse client data for instance '" + t + "': " + e,
                ),
                null);
          }),
          Pl),
        ol =
          ((xl.ol = function(t) {
            var e = JSON.parse(t);
            return 'object' == typeof e &&
              -1 !== ['Unknown', 'Online', 'Offline'].indexOf(e.onlineState) &&
              'string' == typeof e.clientId
              ? new xl(e.clientId, e.onlineState)
              : (Ar('SharedClientState', 'Failed to parse online state: ' + t),
                null);
          }),
          xl),
        sl =
          ((Ol.prototype.al = function(t) {
            this.activeTargetIds = this.activeTargetIds.add(t);
          }),
          (Ol.prototype.ul = function(t) {
            this.activeTargetIds = this.activeTargetIds.delete(t);
          }),
          (Ol.prototype.hl = function() {
            var t = {
              activeTargetIds: this.activeTargetIds.F(),
              updateTimeMs: Date.now(),
            };
            return JSON.stringify(t);
          }),
          Ol),
        ul =
          ((Dl._r = function(t) {
            return !(!t || !t.localStorage);
          }),
          (Dl.prototype.start = function() {
            return y(this, void 0, void 0, function() {
              var e,
                n,
                r,
                i,
                o,
                s,
                u,
                a,
                h,
                c,
                f,
                l = this;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return [4, this.Qc.Gr()];
                  case 1:
                    for (e = t.sent(), n = 0, r = e; n < r.length; n++)
                      (i = r[n]) !== this.cl &&
                        (o = this.getItem(Hf(this.persistenceKey, i))) &&
                        (s = il.ol(i, o)) &&
                        (this.fl = this.fl.et(s.clientId, s));
                    for (
                      this.ml(),
                        (u = this.storage.getItem(this.Rl)) &&
                          (a = this.Pl(u)) &&
                          this.Vl(a),
                        h = 0,
                        c = this.dl;
                      h < c.length;
                      h++
                    )
                      (f = c[h]), this._l(f);
                    return (
                      (this.dl = []),
                      this.window.addEventListener('unload', function() {
                        return l.Ur();
                      }),
                      (this.pr = !0),
                      [2]
                    );
                }
              });
            });
          }),
          (Dl.prototype.Un = function(t) {
            this.setItem(this.Tl, JSON.stringify(t));
          }),
          (Dl.prototype.gl = function() {
            return this.pl(this.fl);
          }),
          (Dl.prototype.yl = function(n) {
            var r = !1;
            return (
              this.fl.forEach(function(t, e) {
                e.activeTargetIds.has(n) && (r = !0);
              }),
              r
            );
          }),
          (Dl.prototype.bl = function(t) {
            this.vl(t, 'pending');
          }),
          (Dl.prototype.Sl = function(t, e, n) {
            this.vl(t, e, n), this.Dl(t);
          }),
          (Dl.prototype.Cl = function(t) {
            var e = 'not-current';
            if (this.yl(t)) {
              var n = this.storage.getItem(Kf(this.persistenceKey, t));
              if (n) {
                var r = rl.ol(t, n);
                r && (e = r.state);
              }
            }
            return this.Fl.al(t), this.ml(), e;
          }),
          (Dl.prototype.Nl = function(t) {
            this.Fl.ul(t), this.ml();
          }),
          (Dl.prototype.$l = function(t) {
            return this.Fl.activeTargetIds.has(t);
          }),
          (Dl.prototype.kl = function(t) {
            this.removeItem(Kf(this.persistenceKey, t));
          }),
          (Dl.prototype.xl = function(t, e, n) {
            this.Ml(t, e, n);
          }),
          (Dl.prototype.Hh = function(t, e, n) {
            var r = this;
            e.forEach(function(t) {
              r.Dl(t);
            }),
              (this.currentUser = t),
              n.forEach(function(t) {
                r.bl(t);
              });
          }),
          (Dl.prototype.Ll = function(t) {
            this.Ol(t);
          }),
          (Dl.prototype.Ur = function() {
            this.pr &&
              (this.window.removeEventListener('storage', this.ll),
              this.removeItem(this.wl),
              (this.pr = !1));
          }),
          (Dl.prototype.getItem = function(t) {
            var e = this.storage.getItem(t);
            return Nr('SharedClientState', 'READ', t, e), e;
          }),
          (Dl.prototype.setItem = function(t, e) {
            Nr('SharedClientState', 'SET', t, e), this.storage.setItem(t, e);
          }),
          (Dl.prototype.removeItem = function(t) {
            Nr('SharedClientState', 'REMOVE', t), this.storage.removeItem(t);
          }),
          (Dl.prototype._l = function(t) {
            var e = this,
              u = t;
            if (u.storageArea === this.storage) {
              if (
                (Nr('SharedClientState', 'EVENT', u.key, u.newValue),
                u.key === this.wl)
              )
                return void Ar(
                  'Received WebStorage notification for local change. Another client might have garbage-collected our state',
                );
              this.Wn.Cr(function() {
                return y(e, void 0, void 0, function() {
                  var e, n, r, i, o, s;
                  return v(this, function(t) {
                    if (this.pr) {
                      if (null !== u.key)
                        if (this.El.test(u.key)) {
                          if (null == u.newValue)
                            return (e = this.Bl(u.key)), [2, this.ql(e, null)];
                          if ((n = this.Ul(u.key, u.newValue)))
                            return [2, this.ql(n.clientId, n)];
                        } else if (this.Il.test(u.key)) {
                          if (
                            null !== u.newValue &&
                            (r = this.Ql(u.key, u.newValue))
                          )
                            return [2, this.Wl(r)];
                        } else if (this.Al.test(u.key)) {
                          if (
                            null !== u.newValue &&
                            (i = this.jl(u.key, u.newValue))
                          )
                            return [2, this.Kl(i)];
                        } else if (u.key === this.Rl) {
                          if (null !== u.newValue && (o = this.Pl(u.newValue)))
                            return [2, this.Vl(o)];
                        } else
                          u.key === this.Tl &&
                            (s = (function(t) {
                              var e = Uu.Qn;
                              if (null != t)
                                try {
                                  var n = JSON.parse(t);
                                  Or('number' == typeof n), (e = n);
                                } catch (t) {
                                  Ar(
                                    'SharedClientState',
                                    'Failed to read sequence number from WebStorage',
                                    t,
                                  );
                                }
                              return e;
                            })(u.newValue)) !== Uu.Qn &&
                            this.On(s);
                    } else this.dl.push(u);
                    return [2];
                  });
                });
              });
            }
          }),
          Object.defineProperty(Dl.prototype, 'Fl', {
            get: function() {
              return this.fl.get(this.cl);
            },
            enumerable: !0,
            configurable: !0,
          }),
          (Dl.prototype.ml = function() {
            this.setItem(this.wl, this.Fl.hl());
          }),
          (Dl.prototype.vl = function(t, e, n) {
            var r = new nl(this.currentUser, t, e, n),
              i = Wf(this.persistenceKey, this.currentUser, t);
            this.setItem(i, r.hl());
          }),
          (Dl.prototype.Dl = function(t) {
            var e = Wf(this.persistenceKey, this.currentUser, t);
            this.removeItem(e);
          }),
          (Dl.prototype.Ol = function(t) {
            var e = { clientId: this.cl, onlineState: t };
            this.storage.setItem(this.Rl, JSON.stringify(e));
          }),
          (Dl.prototype.Ml = function(t, e, n) {
            var r = Kf(this.persistenceKey, t),
              i = new rl(t, e, n);
            this.setItem(r, i.hl());
          }),
          (Dl.prototype.Bl = function(t) {
            var e = this.El.exec(t);
            return e ? e[1] : null;
          }),
          (Dl.prototype.Ul = function(t, e) {
            var n = this.Bl(t);
            return il.ol(n, e);
          }),
          (Dl.prototype.Ql = function(t, e) {
            var n = this.Il.exec(t),
              r = Number(n[1]),
              i = void 0 !== n[2] ? n[2] : null;
            return nl.ol(new mf(i), r, e);
          }),
          (Dl.prototype.jl = function(t, e) {
            var n = this.Al.exec(t),
              r = Number(n[1]);
            return rl.ol(r, e);
          }),
          (Dl.prototype.Pl = function(t) {
            return ol.ol(t);
          }),
          (Dl.prototype.Wl = function(e) {
            return y(this, void 0, void 0, function() {
              return v(this, function(t) {
                return e.user.uid === this.currentUser.uid
                  ? [2, this.Qc.Gl(e.batchId, e.state, e.error)]
                  : (Nr(
                      'SharedClientState',
                      'Ignoring mutation for non-active user ' + e.user.uid,
                    ),
                    [2]);
              });
            });
          }),
          (Dl.prototype.Kl = function(t) {
            return this.Qc.zl(t.targetId, t.state, t.error);
          }),
          (Dl.prototype.ql = function(t, e) {
            var n = this,
              r = e ? this.fl.et(t, e) : this.fl.remove(t),
              i = this.pl(this.fl),
              o = this.pl(r),
              s = [],
              u = [];
            return (
              o.forEach(function(t) {
                i.has(t) || s.push(t);
              }),
              i.forEach(function(t) {
                o.has(t) || u.push(t);
              }),
              this.Qc.Hl(s, u).then(function() {
                n.fl = r;
              })
            );
          }),
          (Dl.prototype.Vl = function(t) {
            this.fl.get(t.clientId) && this.hc(t.onlineState);
          }),
          (Dl.prototype.pl = function(t) {
            var n = Bi();
            return (
              t.forEach(function(t, e) {
                n = n.Ct(e.activeTargetIds);
              }),
              n
            );
          }),
          Dl),
        al =
          ((Sl.prototype.bl = function(t) {}),
          (Sl.prototype.Sl = function(t, e, n) {}),
          (Sl.prototype.Cl = function(t) {
            return this.Yl.al(t), this.Jl[t] || 'not-current';
          }),
          (Sl.prototype.xl = function(t, e, n) {
            this.Jl[t] = e;
          }),
          (Sl.prototype.Nl = function(t) {
            this.Yl.ul(t);
          }),
          (Sl.prototype.$l = function(t) {
            return this.Yl.activeTargetIds.has(t);
          }),
          (Sl.prototype.kl = function(t) {
            delete this.Jl[t];
          }),
          (Sl.prototype.gl = function() {
            return this.Yl.activeTargetIds;
          }),
          (Sl.prototype.yl = function(t) {
            return this.Yl.activeTargetIds.has(t);
          }),
          (Sl.prototype.start = function() {
            return (this.Yl = new sl()), Promise.resolve();
          }),
          (Sl.prototype.Hh = function(t, e, n) {}),
          (Sl.prototype.Ll = function(t) {}),
          (Sl.prototype.Ur = function() {}),
          (Sl.prototype.Un = function(t) {}),
          Sl),
        hl =
          (Object.defineProperty(Al.prototype, 's_', {
            get: function() {
              return this.Xl;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (Al.prototype.n_ = function(t, e) {
            var u = this,
              a = e ? e.i_ : new Wi(),
              h = e ? e.e_ : this.e_,
              c = e ? e.Ot : this.Ot,
              f = h,
              l = !1,
              p =
                this.query.ks() && h.size === this.query.limit
                  ? h.last()
                  : null,
              d =
                this.query.xs() && h.size === this.query.limit
                  ? h.first()
                  : null;
            if (
              (t.ot(function(t, e) {
                var n = h.get(t),
                  r = e instanceof Ks ? e : null;
                r = r && (u.query.matches(r) ? r : null);
                var i = !!n && u.Ot.has(n.key),
                  o =
                    !!r &&
                    (r.Xe || (u.Ot.has(r.key) && r.hasCommittedMutations)),
                  s = !1;
                n && r
                  ? n.data().isEqual(r.data())
                    ? i !== o && (a.track({ type: 3, doc: r }), (s = !0))
                    : u.r_(n, r) ||
                      (a.track({ type: 2, doc: r }),
                      (s = !0),
                      ((p && 0 < u.query.Ds(r, p)) ||
                        (d && u.query.Ds(r, d) < 0)) &&
                        (l = !0))
                  : !n && r
                  ? (a.track({ type: 0, doc: r }), (s = !0))
                  : n &&
                    !r &&
                    (a.track({ type: 1, doc: n }),
                    (s = !0),
                    (p || d) && (l = !0)),
                  s &&
                    (c = r
                      ? ((f = f.add(r)), o ? c.add(t) : c.delete(t))
                      : ((f = f.delete(t)), c.delete(t)));
              }),
              this.query.ks() || this.query.xs())
            )
              for (; f.size > this.query.limit; ) {
                var n = this.query.ks() ? f.last() : f.first();
                (f = f.delete(n.key)),
                  (c = c.delete(n.key)),
                  a.track({ type: 1, doc: n });
              }
            return { e_: f, i_: a, o_: l, Ot: c };
          }),
          (Al.prototype.r_ = function(t, e) {
            return t.Xe && e.hasCommittedMutations && !e.Xe;
          }),
          (Al.prototype.wn = function(t, e, n) {
            var o = this,
              r = this.e_;
            (this.e_ = t.e_), (this.Ot = t.Ot);
            var i = t.i_.Mt();
            i.sort(function(t, e) {
              return (
                (r = t.type),
                (i = e.type),
                n(r) - n(i) || o.query.Ds(t.doc, e.doc)
              );
              function n(t) {
                switch (t) {
                  case 0:
                    return 1;
                  case 2:
                  case 3:
                    return 2;
                  case 1:
                    return 0;
                  default:
                    return Dr();
                }
              }
              var r, i;
            }),
              this.h_(n);
            var s = e ? this.a_() : [],
              u = 0 === this.t_.size && this.Ht ? 1 : 0,
              a = u !== this.Zl;
            return (
              (this.Zl = u),
              0 !== i.length || a
                ? {
                    snapshot: new Ki(
                      this.query,
                      t.e_,
                      r,
                      i,
                      t.Ot,
                      0 == u,
                      a,
                      !1,
                    ),
                    u_: s,
                  }
                : { u_: s }
            );
          }),
          (Al.prototype.c_ = function(t) {
            return this.Ht && 'Offline' === t
              ? ((this.Ht = !1),
                this.wn({ e_: this.e_, i_: new Wi(), Ot: this.Ot, o_: !1 }, !1))
              : { u_: [] };
          }),
          (Al.prototype.l_ = function(t) {
            return !this.Xl.has(t) && !!this.e_.has(t) && !this.e_.get(t).Xe;
          }),
          (Al.prototype.h_ = function(t) {
            var e = this;
            t &&
              (t.Yt.forEach(function(t) {
                return (e.Xl = e.Xl.add(t));
              }),
              t.Jt.forEach(function(t) {}),
              t.Xt.forEach(function(t) {
                return (e.Xl = e.Xl.delete(t));
              }),
              (this.Ht = t.Ht));
          }),
          (Al.prototype.a_ = function() {
            var e = this;
            if (!this.Ht) return [];
            var n = this.t_;
            (this.t_ = qi()),
              this.e_.forEach(function(t) {
                e.l_(t.key) && (e.t_ = e.t_.add(t.key));
              });
            var r = [];
            return (
              n.forEach(function(t) {
                e.t_.has(t) || r.push(new Yf(t));
              }),
              this.t_.forEach(function(t) {
                n.has(t) || r.push(new Xf(t));
              }),
              r
            );
          }),
          (Al.prototype.__ = function(t) {
            (this.Xl = t._a), (this.t_ = qi());
            var e = this.n_(t.documents);
            return this.wn(e, !0);
          }),
          (Al.prototype.f_ = function() {
            return Ki.Ut(this.query, this.e_, this.Ot, 0 === this.Zl);
          }),
          Al),
        cl =
          ((Nl.prototype.w_ = function() {
            this.T_();
          }),
          (Nl.prototype.T_ = function() {
            var t = this;
            this.Zo.Zn(function() {
              return y(t, void 0, void 0, function() {
                var e,
                  n,
                  r = this;
                return v(this, function(t) {
                  return (
                    (e = new Rf(this.Xu)),
                    (n = this.E_(e)) &&
                      n
                        .then(function(t) {
                          r.Oo.Sr(function() {
                            return e
                              .commit()
                              .then(function() {
                                r.Uo.resolve(t);
                              })
                              .catch(function(t) {
                                r.I_(t);
                              });
                          });
                        })
                        .catch(function(t) {
                          r.I_(t);
                        }),
                    [2]
                  );
                });
              });
            });
          }),
          (Nl.prototype.E_ = function(t) {
            try {
              var e = this.updateFunction(t);
              return !ci(e) && e.catch && e.then
                ? e
                : (this.Uo.reject(
                    Error('Transaction callback must return a Promise'),
                  ),
                  null);
            } catch (t) {
              return this.Uo.reject(t), null;
            }
          }),
          (Nl.prototype.I_ = function(t) {
            var e = this;
            0 < this.d_ && this.A_(t)
              ? (--this.d_,
                this.Oo.Sr(function() {
                  return e.T_(), Promise.resolve();
                }))
              : this.Uo.reject(t);
          }),
          (Nl.prototype.A_ = function(t) {
            if ('FirebaseError' !== t.name) return !1;
            var e = t.code;
            return 'aborted' === e || 'failed-precondition' === e || !bi(e);
          }),
          Nl),
        fl =
          (Object.defineProperty(_l.prototype, 'k_', {
            get: function() {
              return !0;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (_l.prototype.subscribe = function(t) {
            this.g_ = t;
          }),
          (_l.prototype.listen = function(s) {
            return y(this, void 0, void 0, function() {
              var e, n, r, i, o;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return (
                      this.x_('listen()'),
                      (r = this.p_.get(s))
                        ? ((e = r.targetId),
                          this.P_.Cl(e),
                          (n = r.view.f_()),
                          [3, 4])
                        : [3, 1]
                    );
                  case 1:
                    return [4, this.Tc.ua(s.We())];
                  case 2:
                    return (
                      (i = t.sent()),
                      (o = this.P_.Cl(i.targetId)),
                      (e = i.targetId),
                      [4, this.M_(s, e, 'current' === o)]
                    );
                  case 3:
                    (n = t.sent()), this.k_ && this.m_.listen(i), (t.label = 4);
                  case 4:
                    return [2, n];
                }
              });
            });
          }),
          (_l.prototype.M_ = function(u, a, h) {
            return y(this, void 0, void 0, function() {
              var e, n, r, i, o, s;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return [4, this.Tc.la(u, !0)];
                  case 1:
                    return (
                      (e = t.sent()),
                      (n = new hl(u, e._a)),
                      (r = n.n_(e.documents)),
                      (i = Yi.zt(a, h && 'Offline' !== this.onlineState)),
                      (o = n.wn(r, this.k_, i)),
                      this.L_(a, o.u_),
                      (s = new $f(u, a, n)),
                      [
                        2,
                        (this.p_.set(u, s),
                        this.y_.has(a)
                          ? this.y_.get(a).push(u)
                          : this.y_.set(a, [u]),
                        o.snapshot),
                      ]
                    );
                }
              });
            });
          }),
          (_l.prototype.qc = function(i) {
            return y(this, void 0, void 0, function() {
              var e,
                n,
                r = this;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return (
                      this.x_('unlisten()'),
                      (e = this.p_.get(i)),
                      1 < (n = this.y_.get(e.targetId)).length
                        ? [
                            2,
                            (this.y_.set(
                              e.targetId,
                              n.filter(function(t) {
                                return !t.isEqual(i);
                              }),
                            ),
                            void this.p_.delete(i)),
                          ]
                        : this.k_
                        ? (this.P_.Nl(e.targetId),
                          this.P_.yl(e.targetId)
                            ? [3, 2]
                            : [
                                4,
                                this.Tc.ca(e.targetId, !1)
                                  .then(function() {
                                    r.P_.kl(e.targetId),
                                      r.m_.qc(e.targetId),
                                      r.O_(e.targetId);
                                  })
                                  .catch(Xh),
                              ])
                        : [3, 3]
                    );
                  case 1:
                    t.sent(), (t.label = 2);
                  case 2:
                    return [3, 5];
                  case 3:
                    return this.O_(e.targetId), [4, this.Tc.ca(e.targetId, !0)];
                  case 4:
                    t.sent(), (t.label = 5);
                  case 5:
                    return [2];
                }
              });
            });
          }),
          (_l.prototype.write = function(i, o) {
            return y(this, void 0, void 0, function() {
              var e, n, r;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    this.x_('write()'), (t.label = 1);
                  case 1:
                    return t.trys.push([1, 5, , 6]), [4, this.Tc.Zh(i)];
                  case 2:
                    return (
                      (e = t.sent()),
                      this.P_.bl(e.batchId),
                      this.B_(e.batchId, o),
                      [4, this.q_(e.on)]
                    );
                  case 3:
                    return t.sent(), [4, this.m_.Mc()];
                  case 4:
                    return t.sent(), [3, 6];
                  case 5:
                    return (
                      (n = t.sent()),
                      (r = kh(n, 'Failed to persist write')),
                      o.reject(r),
                      [3, 6]
                    );
                  case 6:
                    return [2];
                }
              });
            });
          }),
          (_l.prototype.runTransaction = function(t, e, n) {
            new cl(t, this.Xu, e, n).w_();
          }),
          (_l.prototype.na = function(n) {
            return y(this, void 0, void 0, function() {
              var e,
                r = this;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    this.x_('applyRemoteEvent()'), (t.label = 1);
                  case 1:
                    return t.trys.push([1, 4, , 6]), [4, this.Tc.na(n)];
                  case 2:
                    return (
                      (e = t.sent()),
                      n.Qt.forEach(function(t, e) {
                        var n = r.S_.get(e);
                        n &&
                          (Or(t.Yt.size + t.Jt.size + t.Xt.size <= 1),
                          0 < t.Yt.size
                            ? (n.R_ = !0)
                            : 0 < t.Jt.size
                            ? Or(n.R_)
                            : 0 < t.Xt.size && (Or(n.R_), (n.R_ = !1)));
                      }),
                      [4, this.q_(e, n)]
                    );
                  case 3:
                    return t.sent(), [3, 6];
                  case 4:
                    return [4, Xh(t.sent())];
                  case 5:
                    return t.sent(), [3, 6];
                  case 6:
                    return [2];
                }
              });
            });
          }),
          (_l.prototype.c_ = function(r, t) {
            this.x_('applyOnlineStateChange()');
            var i = [];
            this.p_.forEach(function(t, e) {
              var n = e.view.c_(r);
              n.snapshot && i.push(n.snapshot);
            }),
              this.g_.U_(r),
              this.g_.Lu(i),
              (this.onlineState = r);
          }),
          (_l.prototype.zc = function(u, a) {
            return y(this, void 0, void 0, function() {
              var e,
                n,
                r,
                i,
                o,
                s = this;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return (
                      this.x_('rejectListens()'),
                      this.P_.xl(u, 'rejected', a),
                      (e = this.S_.get(u)),
                      (n = e && e.key)
                        ? ((r = (r = new Ii(ai.P)).et(n, new Xs(n, Xr.min()))),
                          (i = qi().add(n)),
                          (o = new Xi(Xr.min(), new Map(), new Oi(Lr), r, i)),
                          [4, this.na(o)])
                        : [3, 2]
                    );
                  case 1:
                    return (
                      t.sent(),
                      (this.v_ = this.v_.remove(n)),
                      this.S_.delete(u),
                      this.Q_(),
                      [3, 4]
                    );
                  case 2:
                    return [
                      4,
                      this.Tc.ca(u, !1)
                        .then(function() {
                          return s.O_(u, a);
                        })
                        .catch(Xh),
                    ];
                  case 3:
                    t.sent(), (t.label = 4);
                  case 4:
                    return [2];
                }
              });
            });
          }),
          (_l.prototype.tl = function(r) {
            return y(this, void 0, void 0, function() {
              var e, n;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    this.x_('applySuccessfulWrite()'),
                      (e = r.batch.batchId),
                      (t.label = 1);
                  case 1:
                    return t.trys.push([1, 4, , 6]), [4, this.Tc.ta(r)];
                  case 2:
                    return (
                      (n = t.sent()),
                      this.W_(e, null),
                      this.j_(e),
                      this.P_.Sl(e, 'acknowledged'),
                      [4, this.q_(n)]
                    );
                  case 3:
                    return t.sent(), [3, 6];
                  case 4:
                    return [4, Xh(t.sent())];
                  case 5:
                    return t.sent(), [3, 6];
                  case 6:
                    return [2];
                }
              });
            });
          }),
          (_l.prototype.sl = function(n, r) {
            return y(this, void 0, void 0, function() {
              var e;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    this.x_('rejectFailedWrite()'), (t.label = 1);
                  case 1:
                    return t.trys.push([1, 4, , 6]), [4, this.Tc.sa(n)];
                  case 2:
                    return (
                      (e = t.sent()),
                      this.W_(n, r),
                      this.j_(n),
                      this.P_.Sl(n, 'rejected', r),
                      [4, this.q_(e)]
                    );
                  case 3:
                    return t.sent(), [3, 6];
                  case 4:
                    return [4, Xh(t.sent())];
                  case 5:
                    return t.sent(), [3, 6];
                  case 6:
                    return [2];
                }
              });
            });
          }),
          (_l.prototype.K_ = function(o) {
            return y(this, void 0, void 0, function() {
              var e, n, r, i;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    this.m_.Vc() ||
                      Nr(
                        'SyncEngine',
                        "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.",
                      ),
                      (t.label = 1);
                  case 1:
                    return t.trys.push([1, 3, , 4]), [4, this.Tc.Ao()];
                  case 2:
                    return -1 === (e = t.sent())
                      ? [2, void o.resolve()]
                      : ((n = this.F_.get(e) || []).push(o),
                        this.F_.set(e, n),
                        [3, 4]);
                  case 3:
                    return (
                      (r = t.sent()),
                      (i = kh(
                        r,
                        'Initialization of waitForPendingWrites() operation failed',
                      )),
                      o.reject(i),
                      [3, 4]
                    );
                  case 4:
                    return [2];
                }
              });
            });
          }),
          (_l.prototype.j_ = function(t) {
            (this.F_.get(t) || []).forEach(function(t) {
              t.resolve();
            }),
              this.F_.delete(t);
          }),
          (_l.prototype.G_ = function(e) {
            this.F_.forEach(function(t) {
              t.forEach(function(t) {
                t.reject(new Wr(Hr.CANCELLED, e));
              });
            }),
              this.F_.clear();
          }),
          (_l.prototype.B_ = function(t, e) {
            var n = this.C_[this.currentUser.su()];
            (n = (n = n || new Ii(Lr)).et(t, e)),
              (this.C_[this.currentUser.su()] = n);
          }),
          (_l.prototype.W_ = function(t, e) {
            var n = this.C_[this.currentUser.su()];
            if (n) {
              var r = n.get(t);
              r && (e ? r.reject(e) : r.resolve(), (n = n.remove(t))),
                (this.C_[this.currentUser.su()] = n);
            }
          }),
          (_l.prototype.O_ = function(t, e) {
            var n = this;
            void 0 === e && (e = null), this.P_.Nl(t);
            for (var r = 0, i = this.y_.get(t); r < i.length; r++) {
              var o = i[r];
              this.p_.delete(o), e && this.g_.z_(o, e);
            }
            this.y_.delete(t),
              this.k_ &&
                this.D_.ga(t).forEach(function(t) {
                  n.D_.tr(t) || n.H_(t);
                });
          }),
          (_l.prototype.H_ = function(t) {
            var e = this.v_.get(t);
            null !== e &&
              (this.m_.qc(e),
              (this.v_ = this.v_.remove(t)),
              this.S_.delete(e),
              this.Q_());
          }),
          (_l.prototype.L_ = function(t, e) {
            for (var n = 0, r = e; n < r.length; n++) {
              var i = r[n];
              i instanceof Xf
                ? (this.D_.Hi(i.key, t), this.Y_(i))
                : i instanceof Yf
                ? (Nr('SyncEngine', 'Document no longer in limbo: ' + i.key),
                  this.D_.Ji(i.key, t),
                  this.D_.tr(i.key) || this.H_(i.key))
                : Dr();
            }
          }),
          (_l.prototype.Y_ = function(t) {
            var e = t.key;
            this.v_.get(e) ||
              (Nr('SyncEngine', 'New document in limbo: ' + e),
              this.b_.push(e),
              this.Q_());
          }),
          (_l.prototype.Q_ = function() {
            for (; 0 < this.b_.length && this.v_.size < this.V_; ) {
              var t = this.b_.shift(),
                e = this.N_.next();
              this.S_.set(e, new Jf(t)),
                (this.v_ = this.v_.et(t, e)),
                this.m_.listen(new mi($s.As(t.path).We(), e, 2, Uu.Qn));
            }
          }),
          (_l.prototype.J_ = function() {
            return this.v_;
          }),
          (_l.prototype.X_ = function() {
            return this.b_;
          }),
          (_l.prototype.q_ = function(r, a) {
            return y(this, void 0, void 0, function() {
              var o,
                s,
                e,
                u = this;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return (
                      (o = []),
                      (s = []),
                      (e = []),
                      this.p_.forEach(function(t, i) {
                        e.push(
                          Promise.resolve()
                            .then(function() {
                              var n = i.view.n_(r);
                              return n.o_
                                ? u.Tc.la(i.query, !1).then(function(t) {
                                    var e = t.documents;
                                    return i.view.n_(e, n);
                                  })
                                : n;
                            })
                            .then(function(t) {
                              var e = a && a.Qt.get(i.targetId),
                                n = i.view.wn(t, u.k_, e);
                              if ((u.L_(i.targetId, n.u_), n.snapshot)) {
                                u.k_ &&
                                  u.P_.xl(
                                    i.targetId,
                                    n.snapshot.fromCache
                                      ? 'not-current'
                                      : 'current',
                                  ),
                                  o.push(n.snapshot);
                                var r = Lu.Ln(i.targetId, n.snapshot);
                                s.push(r);
                              }
                            }),
                        );
                      }),
                      [4, Promise.all(e)]
                    );
                  case 1:
                    return t.sent(), this.g_.Lu(o), [4, this.Tc.oa(s)];
                  case 2:
                    return t.sent(), [2];
                }
              });
            });
          }),
          (_l.prototype.x_ = function(t) {}),
          (_l.prototype.il = function(n) {
            return y(this, void 0, void 0, function() {
              var e;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return this.currentUser.isEqual(n)
                      ? [3, 3]
                      : (Nr('SyncEngine', 'User change. New user:', n.su()),
                        [4, this.Tc.Hh(n)]);
                  case 1:
                    return (
                      (e = t.sent()),
                      (this.currentUser = n),
                      this.G_(
                        "'waitForPendingWrites' promise is rejected due to a user change.",
                      ),
                      this.P_.Hh(n, e.Jh, e.Xh),
                      [4, this.q_(e.Yh)]
                    );
                  case 2:
                    t.sent(), (t.label = 3);
                  case 3:
                    return [2];
                }
              });
            });
          }),
          (_l.prototype.enableNetwork = function() {
            return this.m_.enableNetwork();
          }),
          (_l.prototype.disableNetwork = function() {
            return this.m_.disableNetwork();
          }),
          (_l.prototype.xe = function(t) {
            var e = this.S_.get(t);
            if (e && e.R_) return qi().add(e.key);
            var n = qi(),
              r = this.y_.get(t);
            if (!r) return n;
            for (var i = 0, o = r; i < o.length; i++) {
              var s = o[i],
                u = this.p_.get(s);
              n = n.Ct(u.view.s_);
            }
            return n;
          }),
          _l),
        ll =
          (n(Tl, (tl = fl)),
          Object.defineProperty(Tl.prototype, 'k_', {
            get: function() {
              return !0 === this.Z_;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (Tl.prototype.enableNetwork = function() {
            return this.Tc.vr(!0), tl.prototype.enableNetwork.call(this);
          }),
          (Tl.prototype.disableNetwork = function() {
            return this.Tc.vr(!1), tl.prototype.disableNetwork.call(this);
          }),
          (Tl.prototype.tf = function(r) {
            return y(this, void 0, void 0, function() {
              var e, n;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return [4, this.Tc.la(r.query, !0)];
                  case 1:
                    return (
                      (e = t.sent()),
                      (n = r.view.__(e)),
                      [2, (this.Z_ && this.L_(r.targetId, n.u_), n)]
                    );
                }
              });
            });
          }),
          (Tl.prototype.c_ = function(t, e) {
            this.k_ &&
              0 === e &&
              (tl.prototype.c_.call(this, t, e), this.P_.Ll(t)),
              this.k_ || 1 !== e || tl.prototype.c_.call(this, t, e);
          }),
          (Tl.prototype.Gl = function(n, r, i) {
            return y(this, void 0, void 0, function() {
              var e;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return this.x_('applyBatchState()'), [4, this.Tc.da(n)];
                  case 1:
                    return null === (e = t.sent())
                      ? [3, 6]
                      : 'pending' !== r
                      ? [3, 3]
                      : [4, this.m_.Mc()];
                  case 2:
                    return t.sent(), [3, 4];
                  case 3:
                    'acknowledged' === r || 'rejected' === r
                      ? (this.W_(n, i || null), this.Tc.wa(n))
                      : Dr(),
                      (t.label = 4);
                  case 4:
                    return [4, this.q_(e)];
                  case 5:
                    return t.sent(), [3, 7];
                  case 6:
                    Nr(
                      'SyncEngine',
                      'Cannot apply mutation batch with id: ' + n,
                    ),
                      (t.label = 7);
                  case 7:
                    return [2];
                }
              });
            });
          }),
          (Tl.prototype.rl = function(h) {
            return y(this, void 0, void 0, function() {
              var e,
                n,
                r,
                i,
                o,
                s,
                u,
                a = this;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return !0 !== h || !0 === this.Z_
                      ? [3, 3]
                      : ((e = this.P_.gl()), [4, this.ef(e.F(), !0)]);
                  case 1:
                    return (n = t.sent()), (this.Z_ = !0), [4, this.m_.rl(!0)];
                  case 2:
                    for (t.sent(), r = 0, i = n; r < i.length; r++)
                      (o = i[r]), this.m_.listen(o);
                    return [3, 7];
                  case 3:
                    return !1 !== h || !1 === this.Z_
                      ? [3, 7]
                      : ((s = []),
                        (u = Promise.resolve()),
                        this.y_.forEach(function(t, e) {
                          a.P_.$l(e)
                            ? s.push(e)
                            : (u = u.then(function() {
                                return a.O_(e), a.Tc.ca(e, !0);
                              })),
                            a.m_.qc(e);
                        }),
                        [4, u]);
                  case 4:
                    return t.sent(), [4, this.ef(s, !1)];
                  case 5:
                    return (
                      t.sent(), this.sf(), (this.Z_ = !1), [4, this.m_.rl(!1)]
                    );
                  case 6:
                    t.sent(), (t.label = 7);
                  case 7:
                    return [2];
                }
              });
            });
          }),
          (Tl.prototype.sf = function() {
            var n = this;
            this.S_.forEach(function(t, e) {
              n.m_.qc(e);
            }),
              this.D_.pa(),
              (this.S_ = new Map()),
              (this.v_ = new Ii(ai.P));
          }),
          (Tl.prototype.ef = function(d, t) {
            return y(this, void 0, void 0, function() {
              var e, n, r, i, o, s, u, a, h, c, f, l, p;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    (e = []), (n = []), (r = 0), (i = d), (t.label = 1);
                  case 1:
                    return r < i.length
                      ? ((o = i[r]),
                        (s = void 0),
                        (u = this.y_.get(o)) && 0 !== u.length
                          ? [4, this.Tc.ua(u[0].We())]
                          : [3, 7])
                      : [3, 13];
                  case 2:
                    (s = t.sent()), (a = 0), (h = u), (t.label = 3);
                  case 3:
                    return a < h.length
                      ? ((c = h[a]), (f = this.p_.get(c)), [4, this.tf(f)])
                      : [3, 6];
                  case 4:
                    (l = t.sent()).snapshot && n.push(l.snapshot),
                      (t.label = 5);
                  case 5:
                    return a++, [3, 3];
                  case 6:
                    return [3, 11];
                  case 7:
                    return [4, this.Tc.Ta(o)];
                  case 8:
                    return (p = t.sent()), [4, this.Tc.ua(p)];
                  case 9:
                    return (s = t.sent()), [4, this.M_(this.nf(p), o, !1)];
                  case 10:
                    t.sent(), (t.label = 11);
                  case 11:
                    e.push(s), (t.label = 12);
                  case 12:
                    return r++, [3, 1];
                  case 13:
                    return [2, (this.g_.Lu(n), e)];
                }
              });
            });
          }),
          (Tl.prototype.nf = function(t) {
            return new $s(
              t.path,
              t.collectionGroup,
              t.orderBy,
              t.filters,
              t.limit,
              'F',
              t.startAt,
              t.endAt,
            );
          }),
          (Tl.prototype.Gr = function() {
            return this.Tc.Gr();
          }),
          (Tl.prototype.zl = function(r, i, o) {
            return y(this, void 0, void 0, function() {
              var e, n;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return this.Z_
                      ? (Nr(
                          'SyncEngine',
                          'Ignoring unexpected query state notification.',
                        ),
                        [3, 8])
                      : [3, 1];
                  case 1:
                    if (!this.y_.has(r)) return [3, 8];
                    switch (i) {
                      case 'current':
                      case 'not-current':
                        return [3, 2];
                      case 'rejected':
                        return [3, 5];
                    }
                    return [3, 7];
                  case 2:
                    return [4, this.Tc.Ri()];
                  case 3:
                    return (
                      (e = t.sent()),
                      (n = Xi.Gt(r, 'current' === i)),
                      [4, this.q_(e, n)]
                    );
                  case 4:
                    return t.sent(), [3, 8];
                  case 5:
                    return [4, this.Tc.ca(r, !0)];
                  case 6:
                    return t.sent(), this.O_(r, o), [3, 8];
                  case 7:
                    Dr(), (t.label = 8);
                  case 8:
                    return [2];
                }
              });
            });
          }),
          (Tl.prototype.Hl = function(l, p) {
            return y(this, void 0, void 0, function() {
              var e,
                n,
                r,
                i,
                o,
                s,
                u,
                a,
                h,
                c,
                f = this;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    if (!this.Z_) return [3, 10];
                    (e = 0), (n = l), (t.label = 1);
                  case 1:
                    return e < n.length
                      ? ((r = n[e]),
                        this.y_.has(r)
                          ? (Nr(
                              'SyncEngine',
                              'Adding an already active target ' + r,
                            ),
                            [3, 5])
                          : [4, this.Tc.Ta(r)])
                      : [3, 6];
                  case 2:
                    return (i = t.sent()), [4, this.Tc.ua(i)];
                  case 3:
                    return (
                      (o = t.sent()), [4, this.M_(this.nf(i), o.targetId, !1)]
                    );
                  case 4:
                    t.sent(), this.m_.listen(o), (t.label = 5);
                  case 5:
                    return e++, [3, 1];
                  case 6:
                    (s = function(e) {
                      return v(this, function(t) {
                        switch (t.label) {
                          case 0:
                            return u.y_.has(e)
                              ? [
                                  4,
                                  u.Tc.ca(e, !1)
                                    .then(function() {
                                      f.m_.qc(e), f.O_(e);
                                    })
                                    .catch(Xh),
                                ]
                              : [3, 2];
                          case 1:
                            t.sent(), (t.label = 2);
                          case 2:
                            return [2];
                        }
                      });
                    }),
                      (u = this),
                      (a = 0),
                      (h = p),
                      (t.label = 7);
                  case 7:
                    return a < h.length ? ((c = h[a]), [5, s(c)]) : [3, 10];
                  case 8:
                    t.sent(), (t.label = 9);
                  case 9:
                    return a++, [3, 7];
                  case 10:
                    return [2];
                }
              });
            });
          }),
          Tl),
        pl =
          ((Il.prototype.listen = function(u) {
            return y(this, void 0, void 0, function() {
              var e, n, r, i, o, s;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    if (
                      ((e = u.query),
                      (n = !1),
                      (r = this.hf.get(e)) || ((n = !0), (r = new Zf())),
                      !n)
                    )
                      return [3, 4];
                    t.label = 1;
                  case 1:
                    return (
                      t.trys.push([1, 3, , 4]), (i = r), [4, this.Qc.listen(e)]
                    );
                  case 2:
                    return (i.if = t.sent()), [3, 4];
                  case 3:
                    return (
                      (o = t.sent()),
                      (s = kh(
                        o,
                        "Initialization of query '" + u.query + "' failed",
                      )),
                      [2, void u.onError(s)]
                    );
                  case 4:
                    return (
                      this.hf.set(e, r),
                      r.rf.push(u),
                      u.c_(this.onlineState),
                      r.if && u.uf(r.if) && this.cf(),
                      [2]
                    );
                }
              });
            });
          }),
          (Il.prototype.qc = function(o) {
            return y(this, void 0, void 0, function() {
              var e, n, r, i;
              return v(this, function(t) {
                return (
                  (e = o.query),
                  (n = !1),
                  (r = this.hf.get(e)) &&
                    0 <= (i = r.rf.indexOf(o)) &&
                    (r.rf.splice(i, 1), (n = 0 === r.rf.length)),
                  n ? [2, (this.hf.delete(e), this.Qc.qc(e))] : [2]
                );
              });
            });
          }),
          (Il.prototype.Lu = function(t) {
            for (var e = !1, n = 0, r = t; n < r.length; n++) {
              var i = r[n],
                o = i.query,
                s = this.hf.get(o);
              if (s) {
                for (var u = 0, a = s.rf; u < a.length; u++)
                  a[u].uf(i) && (e = !0);
                s.if = i;
              }
            }
            e && this.cf();
          }),
          (Il.prototype.z_ = function(t, e) {
            var n = this.hf.get(t);
            if (n) for (var r = 0, i = n.rf; r < i.length; r++) i[r].onError(e);
            this.hf.delete(t);
          }),
          (Il.prototype.U_ = function(i) {
            this.onlineState = i;
            var o = !1;
            this.hf.forEach(function(t, e) {
              for (var n = 0, r = e.rf; n < r.length; n++)
                r[n].c_(i) && (o = !0);
            }),
              o && this.cf();
          }),
          (Il.prototype.lf = function(t) {
            this.af.add(t), t.next();
          }),
          (Il.prototype._f = function(t) {
            this.af.delete(t);
          }),
          (Il.prototype.cf = function() {
            this.af.forEach(function(t) {
              t.next();
            });
          }),
          Il),
        dl =
          ((El.prototype.uf = function(t) {
            if (!this.options.includeMetadataChanges) {
              for (var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
                var i = r[n];
                3 !== i.type && e.push(i);
              }
              t = new Ki(t.query, t.docs, t.Lt, e, t.Ot, t.fromCache, t.Bt, !0);
            }
            var o = !1;
            return (
              this.df
                ? this.Tf(t) && (this.ff.next(t), (o = !0))
                : this.Ef(t, this.onlineState) && (this.If(t), (o = !0)),
              (this.wf = t),
              o
            );
          }),
          (El.prototype.onError = function(t) {
            this.ff.error(t);
          }),
          (El.prototype.c_ = function(t) {
            this.onlineState = t;
            var e = !1;
            return (
              this.wf &&
                !this.df &&
                this.Ef(this.wf, t) &&
                (this.If(this.wf), (e = !0)),
              e
            );
          }),
          (El.prototype.Ef = function(t, e) {
            if (!t.fromCache) return !0;
            var n = 'Offline' !== e;
            return !((this.options.Af && n) || (t.docs._() && 'Offline' !== e));
          }),
          (El.prototype.Tf = function(t) {
            if (0 < t.docChanges.length) return !0;
            var e = this.wf && this.wf.hasPendingWrites !== t.hasPendingWrites;
            return !(!t.Bt && !e) && !0 === this.options.includeMetadataChanges;
          }),
          (El.prototype.If = function(t) {
            (t = Ki.Ut(t.query, t.docs, t.Ot, t.fromCache)),
              (this.df = !0),
              this.ff.next(t);
          }),
          El),
        yl =
          ((bl.prototype.zh = function(t) {
            this.Rf = t;
          }),
          (bl.prototype.Sn = function(e, r, i, o) {
            var s = this;
            return r.Ss() || i.isEqual(Xr.min())
              ? this.mf(e, r)
              : this.Rf.yn(e, o).next(function(t) {
                  var n = s.Pf(r, t);
                  return (r.ks() || r.xs()) && s.o_(r.ws, n, o, i)
                    ? s.mf(e, r)
                    : (_r() <= p.DEBUG &&
                        Nr(
                          'IndexFreeQueryEngine',
                          'Re-using previous result from %s to execute query: %s',
                          i.toString(),
                          r.toString(),
                        ),
                      s.Rf.Sn(e, r, i).next(function(e) {
                        return (
                          n.forEach(function(t) {
                            e = e.et(t.key, t);
                          }),
                          e
                        );
                      }));
                });
          }),
          (bl.prototype.Pf = function(n, t) {
            var r = new Oi(function(t, e) {
              return n.Ds(t, e);
            });
            return (
              t.forEach(function(t, e) {
                e instanceof Ks && n.matches(e) && (r = r.add(e));
              }),
              r
            );
          }),
          (bl.prototype.o_ = function(t, e, n, r) {
            if (n.size !== e.size) return !0;
            var i = 'F' === t ? e.last() : e.first();
            return !!i && (i.hasPendingWrites || 0 < i.version.o(r));
          }),
          (bl.prototype.mf = function(t, e) {
            return (
              _r() <= p.DEBUG &&
                Nr(
                  'IndexFreeQueryEngine',
                  'Using full collection scan to execute query:',
                  e.toString(),
                ),
              this.Rf.Sn(t, e, Xr.min())
            );
          }),
          bl),
        vl =
          ((wl.prototype.do = function(t) {
            return Ou.resolve(0 === this.Rn.length);
          }),
          (wl.prototype.wo = function(t, e, n, r) {
            var i = this.Vf;
            this.Vf++, 0 < this.Rn.length && this.Rn[this.Rn.length - 1];
            var o = new Su(i, e, n, r);
            this.Rn.push(o);
            for (var s = 0, u = r; s < u.length; s++) {
              var a = u[s];
              (this.gf = this.gf.add(new $h(a.key, i))),
                this.mn.ri(t, a.key.path.p());
            }
            return Ou.resolve(o);
          }),
          (wl.prototype.To = function(t, e) {
            return Ou.resolve(this.pf(e));
          }),
          (wl.prototype.Io = function(t, e) {
            var n = e + 1,
              r = this.yf(n),
              i = r < 0 ? 0 : r;
            return Ou.resolve(this.Rn.length > i ? this.Rn[i] : null);
          }),
          (wl.prototype.Ao = function() {
            return Ou.resolve(0 === this.Rn.length ? -1 : this.Vf - 1);
          }),
          (wl.prototype.Ro = function(t) {
            return Ou.resolve(this.Rn.slice());
          }),
          (wl.prototype.Vn = function(t, e) {
            var n = this,
              r = new $h(e, 0),
              i = new $h(e, Number.POSITIVE_INFINITY),
              o = [];
            return (
              this.gf.vt([r, i], function(t) {
                var e = n.pf(t.ba);
                o.push(e);
              }),
              Ou.resolve(o)
            );
          }),
          (wl.prototype.vn = function(t, e) {
            var r = this,
              i = new Oi(Lr);
            return (
              e.forEach(function(t) {
                var e = new $h(t, 0),
                  n = new $h(t, Number.POSITIVE_INFINITY);
                r.gf.vt([e, n], function(t) {
                  i = i.add(t.ba);
                });
              }),
              Ou.resolve(this.bf(i))
            );
          }),
          (wl.prototype.$n = function(t, e) {
            var n = e.path,
              r = n.length + 1,
              i = n;
            ai.W(i) || (i = i.child(''));
            var o = new $h(new ai(i), 0),
              s = new Oi(Lr);
            return (
              this.gf.St(function(t) {
                var e = t.key.path;
                return !!n.D(e) && (e.length === r && (s = s.add(t.ba)), !0);
              }, o),
              Ou.resolve(this.bf(s))
            );
          }),
          (wl.prototype.bf = function(t) {
            var n = this,
              r = [];
            return (
              t.forEach(function(t) {
                var e = n.pf(t);
                null !== e && r.push(e);
              }),
              r
            );
          }),
          (wl.prototype.Po = function(n, r) {
            var i = this;
            Or(0 === this.vf(r.batchId, 'removed')), this.Rn.shift();
            var o = this.gf;
            return Ou.forEach(r.mutations, function(t) {
              var e = new $h(t.key, r.batchId);
              return (o = o.delete(e)), i.Fi.oo(n, t.key);
            }).next(function() {
              i.gf = o;
            });
          }),
          (wl.prototype.Vo = function(t) {}),
          (wl.prototype.tr = function(t, e) {
            var n = new $h(e, 0),
              r = this.gf.Dt(n);
            return Ou.resolve(e.isEqual(r && r.key));
          }),
          (wl.prototype.po = function(t) {
            return this.Rn.length, Ou.resolve();
          }),
          (wl.prototype.vf = function(t, e) {
            return this.yf(t);
          }),
          (wl.prototype.yf = function(t) {
            return 0 === this.Rn.length ? 0 : t - this.Rn[0].batchId;
          }),
          (wl.prototype.pf = function(t) {
            var e = this.yf(t);
            return e < 0 || e >= this.Rn.length ? null : this.Rn[e];
          }),
          wl),
        gl =
          ((ml.prototype.un = function(t, e, n) {
            var r = e.key,
              i = this.docs.get(r),
              o = i ? i.size : 0,
              s = this.Sf(e);
            return (
              (this.docs = this.docs.et(r, { fi: e, size: s, readTime: n })),
              (this.size += s - o),
              this.mn.ri(t, r.path.p())
            );
          }),
          (ml.prototype.ln = function(t) {
            var e = this.docs.get(t);
            e && ((this.docs = this.docs.remove(t)), (this.size -= e.size));
          }),
          (ml.prototype._n = function(t, e) {
            var n = this.docs.get(e);
            return Ou.resolve(n ? n.fi : null);
          }),
          (ml.prototype.getEntries = function(t, e) {
            var n = this,
              r = Ui();
            return (
              e.forEach(function(t) {
                var e = n.docs.get(t);
                r = r.et(t, e ? e.fi : null);
              }),
              Ou.resolve(r)
            );
          }),
          (ml.prototype.Sn = function(t, e, n) {
            for (
              var r = Vi(), i = new ai(e.path.child('')), o = this.docs.ut(i);
              o.wt();

            ) {
              var s = o.dt(),
                u = s.key,
                a = s.value,
                h = a.fi,
                c = a.readTime;
              if (!e.path.D(u.path)) break;
              c.o(n) <= 0 ||
                (h instanceof Ks && e.matches(h) && (r = r.et(h.key, h)));
            }
            return Ou.resolve(r);
          }),
          (ml.prototype.Df = function(t, e) {
            return Ou.forEach(this.docs, function(t) {
              return e(t);
            });
          }),
          (ml.prototype.Vi = function(t) {
            return new ml.gi(this);
          }),
          (ml.prototype.yi = function(t) {
            return Ou.resolve(this.size);
          }),
          ml);
      function ml(t, e) {
        (this.mn = t),
          (this.Sf = e),
          (this.docs = new Ii(ai.P)),
          (this.size = 0);
      }
      function wl(t, e) {
        (this.mn = t),
          (this.Fi = e),
          (this.Rn = []),
          (this.Vf = 1),
          (this.gf = new Oi($h.Ia));
      }
      function bl() {}
      function El(t, e, n) {
        (this.query = t),
          (this.ff = e),
          (this.df = !1),
          (this.wf = null),
          (this.onlineState = 'Unknown'),
          (this.options = n || {});
      }
      function Il(t) {
        (this.Qc = t),
          (this.hf = new zr(
            function(t) {
              return t.canonicalId();
            },
            function(t, e) {
              return t.isEqual(e);
            },
          )),
          (this.onlineState = 'Unknown'),
          (this.af = new Set()),
          this.Qc.subscribe(this);
      }
      function Tl(t, e, n, r, i, o) {
        var s = this;
        return (
          ((s = tl.call(this, t, e, n, r, i, o) || this).Tc = t),
          (s.Z_ = void 0),
          s
        );
      }
      function _l(t, e, n, r, i, o) {
        (this.Tc = t),
          (this.m_ = e),
          (this.Xu = n),
          (this.P_ = r),
          (this.currentUser = i),
          (this.V_ = o),
          (this.g_ = null),
          (this.p_ = new zr(
            function(t) {
              return t.canonicalId();
            },
            function(t, e) {
              return t.isEqual(e);
            },
          )),
          (this.y_ = new Map()),
          (this.b_ = []),
          (this.v_ = new Ii(ai.P)),
          (this.S_ = new Map()),
          (this.D_ = new Yh()),
          (this.C_ = {}),
          (this.F_ = new Map()),
          (this.N_ = Ia.Ci()),
          (this.onlineState = 'Unknown');
      }
      function Nl(t, e, n, r) {
        (this.Oo = t),
          (this.Xu = e),
          (this.updateFunction = n),
          (this.Uo = r),
          (this.d_ = 5),
          (this.Zo = new zu(this.Oo, 'transaction_retry'));
      }
      function Al(t, e) {
        (this.query = t),
          (this.Xl = e),
          (this.Zl = null),
          (this.Ht = !1),
          (this.t_ = qi()),
          (this.Ot = qi()),
          (this.e_ = new Hi(t.Ds.bind(t)));
      }
      function Sl() {
        (this.Yl = new sl()),
          (this.Jl = {}),
          (this.Qc = null),
          (this.hc = null),
          (this.On = null);
      }
      function Dl(t, e, n, r, i) {
        (this.window = t),
          (this.Wn = e),
          (this.persistenceKey = n),
          (this.cl = r),
          (this.Qc = null),
          (this.hc = null),
          (this.On = null),
          (this.ll = this._l.bind(this)),
          (this.fl = new Ii(Lr)),
          (this.pr = !1),
          (this.dl = []);
        var o = n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        (this.storage = this.window.localStorage),
          (this.currentUser = i),
          (this.wl = Hf(this.persistenceKey, this.cl)),
          (this.Tl = 'firestore_sequence_number_' + this.persistenceKey),
          (this.fl = this.fl.et(this.cl, new sl())),
          (this.El = new RegExp('^firestore_clients_' + o + '_([^_]*)$')),
          (this.Il = new RegExp(
            '^firestore_mutations_' + o + '_(\\d+)(?:_(.*))?$',
          )),
          (this.Al = new RegExp('^firestore_targets_' + o + '_(\\d+)$')),
          (this.Rl = 'firestore_online_state_' + this.persistenceKey),
          this.window.addEventListener('storage', this.ll);
      }
      function Ol() {
        this.activeTargetIds = Bi();
      }
      function xl(t, e) {
        (this.clientId = t), (this.onlineState = e);
      }
      function Pl(t, e) {
        (this.clientId = t), (this.activeTargetIds = e);
      }
      function Rl(t, e, n) {
        (this.targetId = t), (this.state = e), (this.error = n);
      }
      function kl(t, e, n, r) {
        (this.user = t), (this.batchId = e), (this.state = n), (this.error = r);
      }
      function Ll(t) {
        var e = this;
        return ((e = el.call(this) || this).bi = t), e;
      }
      gl.gi =
        (n(Ll, (el = xu)),
        (Ll.prototype.wn = function(n) {
          var r = this,
            i = [];
          return (
            this.on.forEach(function(t, e) {
              e ? i.push(r.bi.un(n, e, r.readTime)) : r.bi.ln(t);
            }),
            Ou.nn(i)
          );
        }),
        (Ll.prototype.fn = function(t, e) {
          return this.bi._n(t, e);
        }),
        (Ll.prototype.dn = function(t, e) {
          return this.bi.getEntries(t, e);
        }),
        Ll);
      var Ul,
        Cl,
        Vl =
          ((hp.prototype.ye = function(t, n) {
            return (
              this.Cf.forEach(function(t, e) {
                return n(e);
              }),
              Ou.resolve()
            );
          }),
          (hp.prototype.xi = function(t) {
            return Ou.resolve(this.lastRemoteSnapshotVersion);
          }),
          (hp.prototype.Mi = function(t) {
            return Ou.resolve(this.Ff);
          }),
          (hp.prototype.Ni = function(t) {
            return (
              (this.highestTargetId = this.$f.next()),
              Ou.resolve(this.highestTargetId)
            );
          }),
          (hp.prototype.Li = function(t, e, n) {
            return (
              n && (this.lastRemoteSnapshotVersion = n),
              e > this.Ff && (this.Ff = e),
              Ou.resolve()
            );
          }),
          (hp.prototype.Bi = function(t) {
            this.Cf.set(t.target, t);
            var e = t.targetId;
            e > this.highestTargetId &&
              ((this.$f = new Ia(e)), (this.highestTargetId = e)),
              t.sequenceNumber > this.Ff && (this.Ff = t.sequenceNumber);
          }),
          (hp.prototype.Oi = function(t, e) {
            return this.Bi(e), (this.targetCount += 1), Ou.resolve();
          }),
          (hp.prototype.Ui = function(t, e) {
            return this.Bi(e), Ou.resolve();
          }),
          (hp.prototype.Qi = function(t, e) {
            return (
              this.Cf.delete(e.target),
              this.Nf.ga(e.targetId),
              --this.targetCount,
              Ou.resolve()
            );
          }),
          (hp.prototype.ji = function(n, r, i) {
            var o = this,
              s = 0,
              u = [];
            return (
              this.Cf.forEach(function(t, e) {
                e.sequenceNumber <= r &&
                  null === i.get(e.targetId) &&
                  (o.Cf.delete(t), u.push(o.Wi(n, e.targetId)), s++);
              }),
              Ou.nn(u).next(function() {
                return s;
              })
            );
          }),
          (hp.prototype.Ki = function(t) {
            return Ou.resolve(this.targetCount);
          }),
          (hp.prototype.Gi = function(t, e) {
            var n = this.Cf.get(e) || null;
            return Ou.resolve(n);
          }),
          (hp.prototype.zi = function(t, e, n) {
            return this.Nf.ma(e, n), Ou.resolve();
          }),
          (hp.prototype.Yi = function(e, t, n) {
            this.Nf.Va(t, n);
            var r = this.persistence.Fi,
              i = [];
            return (
              r &&
                t.forEach(function(t) {
                  i.push(r.oo(e, t));
                }),
              Ou.nn(i)
            );
          }),
          (hp.prototype.Wi = function(t, e) {
            return this.Nf.ga(e), Ou.resolve();
          }),
          (hp.prototype.Xi = function(t, e) {
            var n = this.Nf.ya(e);
            return Ou.resolve(n);
          }),
          (hp.prototype.tr = function(t, e) {
            return Ou.resolve(this.Nf.tr(e));
          }),
          hp),
        Ml =
          ((ap.prototype.start = function() {
            return Promise.resolve();
          }),
          (ap.prototype.Ur = function() {
            return (this.or = !1), Promise.resolve();
          }),
          Object.defineProperty(ap.prototype, 'pr', {
            get: function() {
              return this.or;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (ap.prototype.yr = function() {}),
          (ap.prototype.Xr = function() {
            return this.mn;
          }),
          (ap.prototype.zr = function(t) {
            var e = this.kf[t.su()];
            return (
              e || ((e = new vl(this.mn, this.Fi)), (this.kf[t.su()] = e)), e
            );
          }),
          (ap.prototype.Yr = function() {
            return this.Tr;
          }),
          (ap.prototype.Jr = function() {
            return this.An;
          }),
          (ap.prototype.runTransaction = function(t, e, n) {
            var r = this;
            Nr('MemoryPersistence', 'Starting transaction:', t);
            var i = new Fl(this.rr.next());
            return (
              this.Fi.Mf(),
              n(i)
                .next(function(t) {
                  return r.Fi.Lf(i).next(function() {
                    return t;
                  });
                })
                .en()
                .then(function(t) {
                  return i.In(), t;
                })
            );
          }),
          (ap.prototype.Of = function(e, n) {
            return Ou.rn(
              Object.values(this.kf).map(function(t) {
                return function() {
                  return t.tr(e, n);
                };
              }),
            );
          }),
          ap),
        Fl = (n(up, (Cl = Ru)), up),
        ql =
          ((sp.Uf = function(t) {
            return new sp(t);
          }),
          Object.defineProperty(sp.prototype, 'Qf', {
            get: function() {
              if (this.qf) return this.qf;
              throw Dr();
            },
            enumerable: !0,
            configurable: !0,
          }),
          (sp.prototype.Hi = function(t, e, n) {
            return this.Bf.Hi(n, e), this.Qf.delete(n), Ou.resolve();
          }),
          (sp.prototype.Ji = function(t, e, n) {
            return this.Bf.Ji(n, e), this.Qf.add(n), Ou.resolve();
          }),
          (sp.prototype.oo = function(t, e) {
            return this.Qf.add(e), Ou.resolve();
          }),
          (sp.prototype.removeTarget = function(t, e) {
            var n = this;
            this.Bf.ga(e.targetId).forEach(function(t) {
              return n.Qf.add(t);
            });
            var r = this.persistence.Yr();
            return r
              .Xi(t, e.targetId)
              .next(function(t) {
                t.forEach(function(t) {
                  return n.Qf.add(t);
                });
              })
              .next(function() {
                return r.Qi(t, e);
              });
          }),
          (sp.prototype.Mf = function() {
            this.qf = new Set();
          }),
          (sp.prototype.Lf = function(t) {
            var n = this,
              r = this.persistence.Jr().Vi();
            return Ou.forEach(this.Qf, function(e) {
              return n.Wf(t, e).next(function(t) {
                t || r.ln(e);
              });
            }).next(function() {
              return (n.qf = null), r.apply(t);
            });
          }),
          (sp.prototype.co = function(t, e) {
            var n = this;
            return this.Wf(t, e).next(function(t) {
              t ? n.Qf.delete(e) : n.Qf.add(e);
            });
          }),
          (sp.prototype.xf = function(t) {
            return 0;
          }),
          (sp.prototype.Wf = function(t, e) {
            var n = this;
            return Ou.rn([
              function() {
                return Ou.resolve(n.Bf.tr(e));
              },
              function() {
                return n.persistence.Yr().tr(t, e);
              },
              function() {
                return n.persistence.Of(t, e);
              },
            ]);
          }),
          sp),
        jl =
          ((op.prototype.xu = function(t) {
            this.Gf = t;
          }),
          (op.prototype.Cu = function(t) {
            this.zf = t;
          }),
          (op.prototype.onMessage = function(t) {
            this.Hf = t;
          }),
          (op.prototype.close = function() {
            this.Kf();
          }),
          (op.prototype.send = function(t) {
            this.jf(t);
          }),
          (op.prototype.Yf = function() {
            this.Gf();
          }),
          (op.prototype.Jf = function(t) {
            this.zf(t);
          }),
          (op.prototype.Xf = function(t) {
            this.Hf(t);
          }),
          op),
        Bl = { BatchGetDocuments: 'batchGet', Commit: 'commit' },
        Gl = 'gl-js/ fire/' + Ir,
        Ql =
          ((ip.prototype.td = function(t, e) {
            if (e)
              for (var n in e.ru) e.ru.hasOwnProperty(n) && (t[n] = e.ru[n]);
            t['X-Goog-Api-Client'] = Gl;
          }),
          (ip.prototype.Yu = function(a, r, i) {
            var h = this,
              c = this.ed(a);
            return new Promise(function(o, s) {
              var u = new wr();
              u.listenOnce(gr.COMPLETE, function() {
                try {
                  switch (u.getLastErrorCode()) {
                    case vr.NO_ERROR:
                      var t = u.getResponseJson();
                      Nr('Connection', 'XHR received:', JSON.stringify(t)),
                        o(t);
                      break;
                    case vr.TIMEOUT:
                      Nr('Connection', 'RPC "' + a + '" timed out'),
                        s(new Wr(Hr.DEADLINE_EXCEEDED, 'Request time out'));
                      break;
                    case vr.HTTP_ERROR:
                      var e = u.getStatus();
                      if (
                        (Nr(
                          'Connection',
                          'RPC "' + a + '" failed with status:',
                          e,
                          'response text:',
                          u.getResponseText(),
                        ),
                        0 < e)
                      ) {
                        var n = u.getResponseJson().error;
                        if (n && n.status && n.message) {
                          var r =
                            ((i = n.status.toLowerCase().replace('_', '-')),
                            0 <= Object.values(Hr).indexOf(i) ? i : Hr.UNKNOWN);
                          s(new Wr(r, n.message));
                        } else
                          s(
                            new Wr(
                              Hr.UNKNOWN,
                              'Server responded with status ' + u.getStatus(),
                            ),
                          );
                      } else Nr('Connection', 'RPC "' + a + '" failed'), s(new Wr(Hr.UNAVAILABLE, 'Connection failed.'));
                      break;
                    default:
                      Dr();
                  }
                } finally {
                  Nr('Connection', 'RPC "' + a + '" completed.');
                }
                var i;
              });
              var t = Object.assign({}, r);
              delete t.database;
              var e = JSON.stringify(t);
              Nr('Connection', 'XHR sending: ', c + ' ' + e);
              var n = { 'Content-Type': 'text/plain' };
              h.td(n, i), u.send(c, 'POST', e, n, 15);
            });
          }),
          (ip.prototype.Ju = function(t, e, n) {
            return this.Yu(t, e, n);
          }),
          (ip.prototype.Mu = function(t, e) {
            var n,
              r,
              i = [
                this.Zf,
                '/',
                'google.firestore.v1.Firestore',
                '/',
                t,
                '/channel',
              ],
              o = yr(),
              s = {
                httpSessionIdParam: 'gsessionid',
                initMessageHeaders: {},
                messageUrlParams: {
                  database:
                    'projects/' +
                    this.s.projectId +
                    '/databases/' +
                    this.s.database,
                },
                sendRawJson: !0,
                supportsCrossDomainXhr: !0,
                internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
                forceLongPolling: this.forceLongPolling,
              };
            this.td(s.initMessageHeaders, e),
              ('undefined' != typeof window &&
                (window.cordova || window.phonegap || window.PhoneGap) &&
                /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(
                  g(),
                )) ||
                ('object' == typeof navigator &&
                  'ReactNative' === navigator.product) ||
                0 <= g().indexOf('Electron/') ||
                0 <= (r = g()).indexOf('MSIE ') ||
                0 <= r.indexOf('Trident/') ||
                0 <= g().indexOf('MSAppHost/') ||
                ('object' ==
                  typeof (n =
                    'object' == typeof chrome
                      ? chrome.runtime
                      : 'object' == typeof browser
                      ? browser.runtime
                      : void 0) &&
                  void 0 !== n.id) ||
                (s.httpHeadersOverwriteParam = '$httpHeaders');
            var u = i.join('');
            function a(t, e) {
              h.listen(t, function(t) {
                try {
                  e(t);
                } catch (t) {
                  setTimeout(function() {
                    throw t;
                  }, 0);
                }
              });
            }
            Nr('Connection', 'Creating WebChannel: ' + u + ' ' + s);
            var h = o.createWebChannel(u, s),
              c = !1,
              f = !1,
              l = new jl({
                jf: function(t) {
                  f
                    ? Nr(
                        'Connection',
                        'Not sending because WebChannel is closed:',
                        t,
                      )
                    : (c ||
                        (Nr('Connection', 'Opening WebChannel transport.'),
                        h.open(),
                        (c = !0)),
                      Nr('Connection', 'WebChannel sending:', t),
                      h.send(t));
                },
                Kf: function() {
                  return h.close();
                },
              });
            return (
              a(mr.EventType.OPEN, function() {
                f || Nr('Connection', 'WebChannel transport opened.');
              }),
              a(mr.EventType.CLOSE, function() {
                f ||
                  ((f = !0),
                  Nr('Connection', 'WebChannel transport closed'),
                  l.Jf());
              }),
              a(mr.EventType.ERROR, function(t) {
                f ||
                  ((f = !0),
                  (function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++)
                      e[n - 1] = arguments[n];
                    if (Tr.logLevel <= p.WARN) {
                      var r = e.map(Sr);
                      Tr.warn.apply(
                        Tr,
                        d(['Firestore (' + Ir + '): Connection'], r),
                      );
                    }
                  })('Connection', 'WebChannel transport errored:', t),
                  l.Jf(
                    new Wr(
                      Hr.UNAVAILABLE,
                      'The operation could not be completed',
                    ),
                  ));
              }),
              a(mr.EventType.MESSAGE, function(t) {
                var e;
                if (!f) {
                  var n = t.data[0];
                  Or(!!n);
                  var r =
                    n.error ||
                    (null === (e = n[0]) || void 0 === e ? void 0 : e.error);
                  if (r) {
                    Nr('Connection', 'WebChannel received error:', r);
                    var i = r.status,
                      o = (function() {
                        var t = vi[i];
                        if (void 0 !== t) return Ei(t);
                      })(),
                      s = r.message;
                    void 0 === o &&
                      ((o = Hr.INTERNAL),
                      (s =
                        'Unknown error status: ' +
                        i +
                        ' with message ' +
                        r.message)),
                      (f = !0),
                      l.Jf(new Wr(o, s)),
                      h.close();
                  } else Nr('Connection', 'WebChannel received:', n), l.Xf(n);
                }
              }),
              setTimeout(function() {
                l.Yf();
              }, 0),
              l
            );
          }),
          (ip.prototype.ed = function(t) {
            var e = Bl[t];
            return (
              this.Zf +
              '/v1/projects/' +
              this.s.projectId +
              '/databases/' +
              this.s.database +
              '/documents:' +
              e
            );
          }),
          ip),
        zl =
          ((rp.prototype.Pc = function(t) {
            this.hd.push(t);
          }),
          (rp.prototype.Ur = function() {
            window.removeEventListener('online', this.sd),
              window.removeEventListener('offline', this.rd);
          }),
          (rp.prototype.ad = function() {
            window.addEventListener('online', this.sd),
              window.addEventListener('offline', this.rd);
          }),
          (rp.prototype.nd = function() {
            Nr(
              'ConnectivityMonitor',
              'Network connectivity changed: AVAILABLE',
            );
            for (var t = 0, e = this.hd; t < e.length; t++) (0, e[t])(0);
          }),
          (rp.prototype.od = function() {
            Nr(
              'ConnectivityMonitor',
              'Network connectivity changed: UNAVAILABLE',
            );
            for (var t = 0, e = this.hd; t < e.length; t++) (0, e[t])(1);
          }),
          (rp._r = function() {
            return (
              'undefined' != typeof window &&
              void 0 !== window.addEventListener &&
              void 0 !== window.removeEventListener
            );
          }),
          rp),
        Hl =
          ((np.prototype.Pc = function(t) {}),
          (np.prototype.Ur = function() {}),
          np),
        Wl =
          'You are using the memory-only build of Firestore. Persistence support is only available via the @firebase/firestore bundle or the firebase-firestore.js build.',
        Kl =
          ((ep.prototype.initialize = function(n) {
            return y(this, void 0, void 0, function() {
              var e = this;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return (
                      (this.P_ = this.ud(n)),
                      (this.persistence = this.ld(n)),
                      [4, this.persistence.start()]
                    );
                  case 1:
                    return (
                      t.sent(),
                      (this._d = this.fd(n)),
                      (this.Tc = this.dd(n)),
                      (this.m_ = this.wd(n)),
                      (this.Qc = this.Td(n)),
                      (this.Ed = this.Id(n)),
                      (this.P_.hc = function(t) {
                        return e.Qc.c_(t, 1);
                      }),
                      (this.m_.Qc = this.Qc),
                      [4, this.Tc.start()]
                    );
                  case 2:
                    return t.sent(), [4, this.P_.start()];
                  case 3:
                    return t.sent(), [4, this.m_.start()];
                  case 4:
                    return t.sent(), [4, this.m_.rl(this.Qc.k_)];
                  case 5:
                    return t.sent(), [2];
                }
              });
            });
          }),
          (ep.prototype.Id = function(t) {
            return new pl(this.Qc);
          }),
          (ep.prototype.fd = function(t) {
            return null;
          }),
          (ep.prototype.dd = function(t) {
            return new Bh(this.persistence, new yl(), t.Ad);
          }),
          (ep.prototype.ld = function(t) {
            if (t.md.Rd) throw new Wr(Hr.FAILED_PRECONDITION, Wl);
            return new Ml(ql.Uf);
          }),
          (ep.prototype.wd = function(t) {
            var e = this;
            return new Lf(
              this.Tc,
              t.Xu,
              t.Oo,
              function(t) {
                return e.Qc.c_(t, 0);
              },
              new (zl._r() ? zl : Hl)(),
            );
          }),
          (ep.prototype.ud = function(t) {
            return new al();
          }),
          (ep.prototype.Td = function(t) {
            return new fl(this.Tc, this.m_, t.Xu, this.P_, t.Ad, t.V_);
          }),
          (ep.prototype.clearPersistence = function(t) {
            throw new Wr(Hr.FAILED_PRECONDITION, Wl);
          }),
          ep),
        Xl =
          (n(tp, (Ul = Kl)),
          (tp.prototype.initialize = function(e) {
            return y(this, void 0, void 0, function() {
              var n = this;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return [4, Ul.prototype.initialize.call(this, e)];
                  case 1:
                    return (
                      t.sent(),
                      [
                        4,
                        this.persistence.gr(function(e) {
                          return y(n, void 0, void 0, function() {
                            return v(this, function(t) {
                              switch (t.label) {
                                case 0:
                                  return [4, this.Qc.rl(e)];
                                case 1:
                                  return (
                                    t.sent(),
                                    this._d &&
                                      (e && !this._d.pr
                                        ? this._d.start(this.Tc)
                                        : e || this._d.stop()),
                                    [2]
                                  );
                              }
                            });
                          });
                        }),
                      ]
                    );
                  case 2:
                    return t.sent(), [2];
                }
              });
            });
          }),
          (tp.prototype.dd = function(t) {
            return new Wh(this.persistence, new yl(), t.Ad);
          }),
          (tp.prototype.Td = function(t) {
            var e = new ll(this.Tc, this.m_, t.Xu, this.P_, t.Ad, t.V_);
            return this.P_ instanceof ul && (this.P_.Qc = e), e;
          }),
          (tp.prototype.fd = function(t) {
            var e = this.persistence.Fi.eo;
            return new qh(e, t.Oo);
          }),
          (tp.prototype.ld = function(t) {
            var e = Ra.to(t.Pd),
              n = Jc(t.Pd.s);
            return new Ra(
              t.md.synchronizeTabs,
              e,
              t.clientId,
              Vh.ph(t.md.cacheSizeBytes),
              t.Oo,
              Dh(),
              'undefined' != typeof document ? document : null,
              n,
              this.P_,
              t.md.ir,
            );
          }),
          (tp.prototype.ud = function(t) {
            if (t.md.Rd && t.md.synchronizeTabs) {
              var e = Dh();
              if (!ul._r(e))
                throw new Wr(
                  Hr.UNIMPLEMENTED,
                  'IndexedDB persistence is only available on platforms that support LocalStorage.',
                );
              var n = Ra.to(t.Pd);
              return new ul(e, t.Oo, n, t.clientId, t.Ad);
            }
            return new al();
          }),
          (tp.prototype.clearPersistence = function(t) {
            var e = Ra.to(t);
            return Ra.clearPersistence(e);
          }),
          tp),
        Yl =
          ((Zl.prototype.start = function(e, n) {
            var r = this;
            this.Hu();
            var i = new Qu(),
              o = new Qu(),
              s = !1;
            return (
              this.credentials.au(function(t) {
                if (!s)
                  return (
                    (s = !0),
                    Nr('FirestoreClient', 'Initializing. user=', t.uid),
                    r.Vd(e, n, t, o).then(i.resolve, i.reject)
                  );
                r.Oo.Cr(function() {
                  return r.m_.il(t);
                });
              }),
              this.Oo.Sr(function() {
                return i.promise;
              }),
              o.promise
            );
          }),
          (Zl.prototype.enableNetwork = function() {
            var t = this;
            return (
              this.Hu(),
              this.Oo.enqueue(function() {
                return t.Qc.enableNetwork();
              })
            );
          }),
          (Zl.prototype.Vd = function(h, c, f, l) {
            return y(this, void 0, void 0, function() {
              var r,
                i,
                o,
                s,
                u,
                a = this;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return (
                      t.trys.push([0, 3, , 4]),
                      [4, ((u = this.Pd), Promise.resolve(new Ql(u)))]
                    );
                  case 1:
                    return (
                      (r = t.sent()),
                      (i = Jc(this.Pd.s)),
                      (e = r),
                      (n = this.credentials),
                      (o = new Pf(e, n, i)),
                      [
                        4,
                        h.initialize({
                          Oo: this.Oo,
                          Pd: this.Pd,
                          Xu: o,
                          clientId: this.clientId,
                          Ad: f,
                          V_: 100,
                          md: c,
                        }),
                      ]
                    );
                  case 2:
                    return (
                      t.sent(),
                      (this.persistence = h.persistence),
                      (this.P_ = h.P_),
                      (this.Tc = h.Tc),
                      (this.m_ = h.m_),
                      (this.Qc = h.Qc),
                      (this._d = h._d),
                      (this.gd = h.Ed),
                      this.persistence.yr(function() {
                        return y(a, void 0, void 0, function() {
                          return v(this, function(t) {
                            switch (t.label) {
                              case 0:
                                return [4, this.terminate()];
                              case 1:
                                return t.sent(), [2];
                            }
                          });
                        });
                      }),
                      l.resolve(),
                      [3, 4]
                    );
                  case 3:
                    if (((s = t.sent()), l.reject(s), !this.pd(s))) throw s;
                    return [
                      2,
                      (console.warn(
                        'Error enabling offline persistence. Falling back to persistence disabled: ' +
                          s,
                      ),
                      this.Vd(new Kl(), { Rd: !1 }, f, l)),
                    ];
                  case 4:
                    return [2];
                }
                var e, n;
              });
            });
          }),
          (Zl.prototype.pd = function(t) {
            return 'FirebaseError' === t.name
              ? t.code === Hr.FAILED_PRECONDITION || t.code === Hr.UNIMPLEMENTED
              : !(
                  'undefined' != typeof DOMException &&
                  t instanceof DOMException
                ) ||
                  22 === t.code ||
                  20 === t.code ||
                  11 === t.code;
          }),
          (Zl.prototype.Hu = function() {
            if (this.Oo.eh)
              throw new Wr(
                Hr.FAILED_PRECONDITION,
                'The client has already been terminated.',
              );
          }),
          (Zl.prototype.disableNetwork = function() {
            var t = this;
            return (
              this.Hu(),
              this.Oo.enqueue(function() {
                return t.Qc.disableNetwork();
              })
            );
          }),
          (Zl.prototype.terminate = function() {
            var t = this;
            return this.Oo.oh(function() {
              return y(t, void 0, void 0, function() {
                return v(this, function(t) {
                  switch (t.label) {
                    case 0:
                      return this._d && this._d.stop(), [4, this.m_.Ur()];
                    case 1:
                      return t.sent(), [4, this.P_.Ur()];
                    case 2:
                      return t.sent(), [4, this.persistence.Ur()];
                    case 3:
                      return t.sent(), this.credentials.uu(), [2];
                  }
                });
              });
            });
          }),
          (Zl.prototype.waitForPendingWrites = function() {
            var t = this;
            this.Hu();
            var e = new Qu();
            return (
              this.Oo.Sr(function() {
                return t.Qc.K_(e);
              }),
              e.promise
            );
          }),
          (Zl.prototype.listen = function(t, e, n) {
            var r = this;
            this.Hu();
            var i = new dl(t, e, n);
            return (
              this.Oo.Sr(function() {
                return r.gd.listen(i);
              }),
              i
            );
          }),
          (Zl.prototype.qc = function(t) {
            var e = this;
            this.yd ||
              this.Oo.Sr(function() {
                return e.gd.qc(t);
              });
          }),
          (Zl.prototype.bd = function(o) {
            return y(this, void 0, void 0, function() {
              var i,
                e = this;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return (
                      this.Hu(),
                      (i = new Qu()),
                      [
                        4,
                        this.Oo.enqueue(function() {
                          return y(e, void 0, void 0, function() {
                            var e, n, r;
                            return v(this, function(t) {
                              switch (t.label) {
                                case 0:
                                  return (
                                    t.trys.push([0, 2, , 3]), [4, this.Tc.aa(o)]
                                  );
                                case 1:
                                  return (
                                    (e = t.sent()) instanceof Ks
                                      ? i.resolve(e)
                                      : e instanceof Xs
                                      ? i.resolve(null)
                                      : i.reject(
                                          new Wr(
                                            Hr.UNAVAILABLE,
                                            "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)",
                                          ),
                                        ),
                                    [3, 3]
                                  );
                                case 2:
                                  return (
                                    (n = t.sent()),
                                    (r = kh(
                                      n,
                                      "Failed to get document '" +
                                        o +
                                        ' from cache',
                                    )),
                                    i.reject(r),
                                    [3, 3]
                                  );
                                case 3:
                                  return [2];
                              }
                            });
                          });
                        }),
                      ]
                    );
                  case 1:
                    return [2, (t.sent(), i.promise)];
                }
              });
            });
          }),
          (Zl.prototype.vd = function(a) {
            return y(this, void 0, void 0, function() {
              var u,
                e = this;
              return v(this, function(t) {
                switch (t.label) {
                  case 0:
                    return (
                      this.Hu(),
                      (u = new Qu()),
                      [
                        4,
                        this.Oo.enqueue(function() {
                          return y(e, void 0, void 0, function() {
                            var e, n, r, i, o, s;
                            return v(this, function(t) {
                              switch (t.label) {
                                case 0:
                                  return (
                                    t.trys.push([0, 2, , 3]),
                                    [4, this.Tc.la(a, !0)]
                                  );
                                case 1:
                                  return (
                                    (e = t.sent()),
                                    (n = new hl(a, e._a)),
                                    (r = n.n_(e.documents)),
                                    (i = n.wn(r, !1)),
                                    u.resolve(i.snapshot),
                                    [3, 3]
                                  );
                                case 2:
                                  return (
                                    (o = t.sent()),
                                    (s = kh(
                                      o,
                                      "Failed to execute query '" +
                                        a +
                                        ' against cache',
                                    )),
                                    u.reject(s),
                                    [3, 3]
                                  );
                                case 3:
                                  return [2];
                              }
                            });
                          });
                        }),
                      ]
                    );
                  case 1:
                    return [2, (t.sent(), u.promise)];
                }
              });
            });
          }),
          (Zl.prototype.write = function(t) {
            var e = this;
            this.Hu();
            var n = new Qu();
            return (
              this.Oo.Sr(function() {
                return e.Qc.write(t, n);
              }),
              n.promise
            );
          }),
          (Zl.prototype.s = function() {
            return this.Pd.s;
          }),
          (Zl.prototype.lf = function(t) {
            var e = this;
            this.Hu(),
              this.Oo.Sr(function() {
                return e.gd.lf(t), Promise.resolve();
              });
          }),
          (Zl.prototype._f = function(t) {
            var e = this;
            this.yd ||
              this.Oo.Sr(function() {
                return e.gd._f(t), Promise.resolve();
              });
          }),
          Object.defineProperty(Zl.prototype, 'yd', {
            get: function() {
              return this.Oo.eh;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (Zl.prototype.transaction = function(t) {
            var e = this;
            this.Hu();
            var n = new Qu();
            return (
              this.Oo.Sr(function() {
                return e.Qc.runTransaction(e.Oo, t, n), Promise.resolve();
              }),
              n.promise
            );
          }),
          Zl),
        $l =
          ((Jl.prototype.next = function(t) {
            this.Sd(this.observer.next, t);
          }),
          (Jl.prototype.error = function(t) {
            this.Sd(this.observer.error, t);
          }),
          (Jl.prototype.Dd = function() {
            this.muted = !0;
          }),
          (Jl.prototype.Sd = function(t, e) {
            var n = this;
            this.muted ||
              setTimeout(function() {
                n.muted || t(e);
              }, 0);
          }),
          Jl);
      function Jl(t) {
        (this.observer = t), (this.muted = !1);
      }
      function Zl(t, e, n) {
        (this.Pd = t),
          (this.credentials = e),
          (this.Oo = n),
          (this.clientId = Rr.t());
      }
      function tp() {
        return (null !== Ul && Ul.apply(this, arguments)) || this;
      }
      function ep() {}
      function np() {}
      function rp() {
        var t = this;
        (this.sd = function() {
          return t.nd();
        }),
          (this.rd = function() {
            return t.od();
          }),
          (this.hd = []),
          this.ad();
      }
      function ip(t) {
        this.s = t.s;
        var e = t.ssl ? 'https' : 'http';
        (this.Zf = e + '://' + t.host),
          (this.forceLongPolling = t.forceLongPolling);
      }
      function op(t) {
        (this.jf = t.jf), (this.Kf = t.Kf);
      }
      function sp(t) {
        (this.persistence = t), (this.Bf = new Yh()), (this.qf = null);
      }
      function up(t) {
        var e = this;
        return ((e = Cl.call(this) || this).sr = t), e;
      }
      function ap(t) {
        var e = this;
        (this.kf = {}),
          (this.rr = new Uu(0)),
          (this.or = !1),
          (this.or = !0),
          (this.Fi = t(this)),
          (this.Tr = new Vl(this)),
          (this.mn = new $u()),
          (this.An = new gl(this.mn, function(t) {
            return e.Fi.xf(t);
          }));
      }
      function hp(t) {
        (this.persistence = t),
          (this.Cf = new zr(function(t) {
            return _u(t);
          }, Nu)),
          (this.lastRemoteSnapshotVersion = Xr.min()),
          (this.highestTargetId = 0),
          (this.Ff = 0),
          (this.Nf = new Yh()),
          (this.targetCount = 0),
          (this.$f = Ia.Di());
      }
      function cp(i) {
        return (function() {
          if ('object' == typeof i && null !== i)
            for (
              var t = i, e = 0, n = ['next', 'error', 'complete'];
              e < n.length;
              e++
            ) {
              var r = n[e];
              if (r in t && 'function' == typeof t[r]) return 1;
            }
        })();
      }
      var fp,
        lp,
        pp,
        dp,
        yp =
          ((qp.prototype.Nd = function(t) {
            switch (fo(t)) {
              case 0:
                return null;
              case 1:
                return t.booleanValue;
              case 2:
                return wo(t.integerValue || t.doubleValue);
              case 3:
                return this.$d(t.timestampValue);
              case 4:
                return this.kd(t);
              case 5:
                return t.stringValue;
              case 6:
                return new Tc(bo(t.bytesValue));
              case 7:
                return this.xd(t.referenceValue);
              case 8:
                return this.Md(t.geoPointValue);
              case 9:
                return this.Ld(t.arrayValue);
              case 10:
                return this.Od(t.mapValue);
              default:
                throw Dr();
            }
          }),
          (qp.prototype.Od = function(t) {
            var n = this,
              r = {};
            return (
              jr(t.fields || {}, function(t, e) {
                r[t] = n.Nd(e);
              }),
              r
            );
          }),
          (qp.prototype.Md = function(t) {
            return new Gc(wo(t.latitude), wo(t.longitude));
          }),
          (qp.prototype.Ld = function(t) {
            var e = this;
            return (t.values || []).map(function(t) {
              return e.Nd(t);
            });
          }),
          (qp.prototype.kd = function(t) {
            switch (this.Cd) {
              case 'previous':
                var e = (function t(e) {
                  var n = e.mapValue.fields.__previous_value__;
                  return ao(n) ? t(n) : n;
                })(t);
                return null == e ? null : this.Nd(e);
              case 'estimate':
                return this.$d(ho(t));
              default:
                return null;
            }
          }),
          (qp.prototype.$d = function(t) {
            var e = mo(t),
              n = new Kr(e.seconds, e.nanos);
            return this.timestampsInSnapshots ? n : n.toDate();
          }),
          (qp.prototype.xd = function(t) {
            var e = $r.$(t);
            Or(Zo(e));
            var n = new Mr(e.get(1), e.get(3)),
              r = new ai(e.g(5));
            return (
              n.isEqual(this.s) ||
                Ar(
                  'Document ' +
                    r +
                    ' contains a document reference within a different database (' +
                    n.projectId +
                    '/' +
                    n.database +
                    ') which is not supported. It will be treated as a reference in the current database (' +
                    this.s.projectId +
                    '/' +
                    this.s.database +
                    ') instead.',
                ),
              this.Fd(r)
            );
          }),
          qp),
        vp = Vh.vh,
        gp =
          ((Fp.prototype.isEqual = function(t) {
            return (
              this.host === t.host &&
              this.ssl === t.ssl &&
              this.timestampsInSnapshots === t.timestampsInSnapshots &&
              this.credentials === t.credentials &&
              this.cacheSizeBytes === t.cacheSizeBytes &&
              this.forceLongPolling === t.forceLongPolling &&
              this.ignoreUndefinedProperties === t.ignoreUndefinedProperties
            );
          }),
          Fp),
        mp =
          (Object.defineProperty(Mp.prototype, 'Hd', {
            get: function() {
              return (
                this.Yd ||
                  (this.Yd = new af(
                    this.qa,
                    this.zd.ignoreUndefinedProperties,
                  )),
                this.Yd
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          (Mp.prototype.settings = function(t) {
            ec('Firestore.settings', arguments, 1),
              ic('Firestore.settings', 'object', 1, t);
            var e = new gp(t);
            if (this.Qd && !this.zd.isEqual(e))
              throw new Wr(
                Hr.FAILED_PRECONDITION,
                'Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.',
              );
            void 0 !== (this.zd = e).credentials &&
              (this.Kd = (function(t) {
                if (!t) return new _f();
                switch (t.type) {
                  case 'gapi':
                    var e = t.Jd;
                    return (
                      Or(
                        !(
                          'object' != typeof e ||
                          null === e ||
                          !e.auth ||
                          !e.auth.getAuthHeaderValueForFirstParty
                        ),
                      ),
                      new Sf(e, t.wu || '0')
                    );
                  case 'provider':
                    return t.Jd;
                  default:
                    throw new Wr(
                      Hr.INVALID_ARGUMENT,
                      'makeCredentialsProvider failed due to invalid credential type',
                    );
                }
              })(e.credentials));
          }),
          (Mp.prototype.enableNetwork = function() {
            return this.Ud(), this.Qd.enableNetwork();
          }),
          (Mp.prototype.disableNetwork = function() {
            return this.Ud(), this.Qd.disableNetwork();
          }),
          (Mp.prototype.enablePersistence = function(t) {
            var e, n;
            if (this.Qd)
              throw new Wr(
                Hr.FAILED_PRECONDITION,
                'Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.',
              );
            var r = !1,
              i = !1;
            if (
              t &&
              (void 0 !== t.experimentalTabSynchronization &&
                Ar(
                  "The 'experimentalTabSynchronization' setting will be removed. Use 'synchronizeTabs' instead.",
                ),
              (r =
                null !==
                  (n =
                    null !== (e = t.synchronizeTabs) && void 0 !== e
                      ? e
                      : t.experimentalTabSynchronization) &&
                void 0 !== n &&
                n),
              (i =
                !!t.experimentalForceOwningTab && t.experimentalForceOwningTab),
              r && i)
            )
              throw new Wr(
                Hr.INVALID_ARGUMENT,
                "The 'experimentalForceOwningTab' setting cannot be used with 'synchronizeTabs'.",
              );
            return this.Xd(this.Gd, {
              Rd: !0,
              cacheSizeBytes: this.zd.cacheSizeBytes,
              synchronizeTabs: r,
              ir: i,
            });
          }),
          (Mp.prototype.clearPersistence = function() {
            return y(this, void 0, void 0, function() {
              var r,
                e = this;
              return v(this, function(t) {
                if (void 0 !== this.Qd && !this.Qd.yd)
                  throw new Wr(
                    Hr.FAILED_PRECONDITION,
                    'Persistence cannot be cleared after this Firestore instance is initialized.',
                  );
                return (
                  (r = new Qu()),
                  [
                    2,
                    (this.qd.sh(function() {
                      return y(e, void 0, void 0, function() {
                        var e, n;
                        return v(this, function(t) {
                          switch (t.label) {
                            case 0:
                              return (
                                t.trys.push([0, 2, , 3]),
                                (e = this.Zd()),
                                [4, this.Gd.clearPersistence(e)]
                              );
                            case 1:
                              return t.sent(), r.resolve(), [3, 3];
                            case 2:
                              return (n = t.sent()), r.reject(n), [3, 3];
                            case 3:
                              return [2];
                          }
                        });
                      });
                    }),
                    r.promise),
                  ]
                );
              });
            });
          }),
          (Mp.prototype.terminate = function() {
            return (
              this.app._removeServiceInstance('firestore'),
              this.INTERNAL.delete()
            );
          }),
          Object.defineProperty(Mp.prototype, 'tw', {
            get: function() {
              return this.Ud(), this.Qd.yd;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (Mp.prototype.waitForPendingWrites = function() {
            return this.Ud(), this.Qd.waitForPendingWrites();
          }),
          (Mp.prototype.onSnapshotsInSync = function(t) {
            if ((this.Ud(), cp(t))) return this.ew(t);
            ic('Firestore.onSnapshotsInSync', 'function', 1, t);
            var e = { next: t };
            return this.ew(e);
          }),
          (Mp.prototype.ew = function(t) {
            var e = this,
              n = new $l({
                next: function() {
                  t.next && t.next();
                },
                error: function(t) {
                  throw Dr();
                },
              });
            return (
              this.Qd.lf(n),
              function() {
                n.Dd(), e.Qd._f(n);
              }
            );
          }),
          (Mp.prototype.Ud = function() {
            return this.Qd || this.Xd(new Kl(), { Rd: !1 }), this.Qd;
          }),
          (Mp.prototype.Zd = function() {
            return new Vr(
              this.qa,
              this.jd,
              this.zd.host,
              this.zd.ssl,
              this.zd.forceLongPolling,
            );
          }),
          (Mp.prototype.Xd = function(t, e) {
            var n = this.Zd();
            return (this.Qd = new Yl(n, this.Kd, this.qd)), this.Qd.start(t, e);
          }),
          (Mp.Wd = function(t) {
            if (
              ((e = t.options),
              !Object.prototype.hasOwnProperty.call(e, 'projectId'))
            )
              throw new Wr(
                Hr.INVALID_ARGUMENT,
                '"projectId" not provided in firebase.initializeApp.',
              );
            var e,
              n = t.options.projectId;
            if (!n || 'string' != typeof n)
              throw new Wr(
                Hr.INVALID_ARGUMENT,
                'projectId must be a string in FirebaseApp.options',
              );
            return new Mr(n);
          }),
          Object.defineProperty(Mp.prototype, 'app', {
            get: function() {
              if (!this.Bd)
                throw new Wr(
                  Hr.FAILED_PRECONDITION,
                  "Firestore was not initialized using the Firebase SDK. 'app' is not available",
                );
              return this.Bd;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (Mp.prototype.collection = function(t) {
            return (
              ec('Firestore.collection', arguments, 1),
              ic('Firestore.collection', 'non-empty string', 1, t),
              this.Ud(),
              new Sp($r.$(t), this, null)
            );
          }),
          (Mp.prototype.doc = function(t) {
            return (
              ec('Firestore.doc', arguments, 1),
              ic('Firestore.doc', 'non-empty string', 1, t),
              this.Ud(),
              Ep.sw($r.$(t), this, null)
            );
          }),
          (Mp.prototype.collectionGroup = function(t) {
            if (
              (ec('Firestore.collectionGroup', arguments, 1),
              ic('Firestore.collectionGroup', 'non-empty string', 1, t),
              0 <= t.indexOf('/'))
            )
              throw new Wr(
                Hr.INVALID_ARGUMENT,
                "Invalid collection ID '" +
                  t +
                  "' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'.",
              );
            return this.Ud(), new Np(new $s($r.k, t), this, null);
          }),
          (Mp.prototype.runTransaction = function(e) {
            var n = this;
            return (
              ec('Firestore.runTransaction', arguments, 1),
              ic('Firestore.runTransaction', 'function', 1, e),
              this.Ud().transaction(function(t) {
                return e(new wp(n, t));
              })
            );
          }),
          (Mp.prototype.batch = function() {
            return this.Ud(), new bp(this);
          }),
          Object.defineProperty(Mp, 'logLevel', {
            get: function() {
              switch (_r()) {
                case p.DEBUG:
                  return 'debug';
                case p.ERROR:
                  return 'error';
                case p.SILENT:
                  return 'silent';
                case p.WARN:
                  return 'warn';
                case p.INFO:
                  return 'info';
                case p.VERBOSE:
                  return 'verbose';
                default:
                  return 'error';
              }
            },
            enumerable: !0,
            configurable: !0,
          }),
          (Mp.setLogLevel = function(t) {
            ec('Firestore.setLogLevel', arguments, 1),
              hc(
                'setLogLevel',
                ['debug', 'error', 'silent', 'warn', 'info', 'verbose'],
                1,
                t,
              ),
              Tr.setLogLevel(t);
          }),
          (Mp.prototype.nw = function() {
            return this.zd.timestampsInSnapshots;
          }),
          Mp),
        wp =
          ((Vp.prototype.get = function(t) {
            var n = this;
            ec('Transaction.get', arguments, 1);
            var r = Qp('Transaction.get', t, this.iw);
            return this.rw.nc([r.Ua]).then(function(t) {
              if (!t || 1 !== t.length) return Dr();
              var e = t[0];
              if (e instanceof Xs)
                return new Tp(n.iw, r.Ua, null, !1, !1, r.Qa);
              if (e instanceof Ks) return new Tp(n.iw, r.Ua, e, !1, !1, r.Qa);
              throw Dr();
            });
          }),
          (Vp.prototype.set = function(t, e, n) {
            rc('Transaction.set', arguments, 2, 3);
            var r = Qp('Transaction.set', t, this.iw);
            n = jp('Transaction.set', n);
            var i = zp(r.Qa, e, 'Transaction.set'),
              o = i[0],
              s = i[1],
              u = this.iw.Hd.Ja(s, o, n);
            return this.rw.set(r.Ua, u), this;
          }),
          (Vp.prototype.update = function(t, e, n) {
            for (var r, i, o = [], s = 3; s < arguments.length; s++)
              o[s - 3] = arguments[s];
            return (
              (i =
                'string' == typeof e || e instanceof _c
                  ? (nc('Transaction.update', arguments, 3),
                    (r = Qp('Transaction.update', t, this.iw)),
                    this.iw.Hd.tu('Transaction.update', e, n, o))
                  : (ec('Transaction.update', arguments, 2),
                    (r = Qp('Transaction.update', t, this.iw)),
                    this.iw.Hd.Za('Transaction.update', e))),
              this.rw.update(r.Ua, i),
              this
            );
          }),
          (Vp.prototype.delete = function(t) {
            ec('Transaction.delete', arguments, 1);
            var e = Qp('Transaction.delete', t, this.iw);
            return this.rw.delete(e.Ua), this;
          }),
          Vp),
        bp =
          ((Cp.prototype.set = function(t, e, n) {
            rc('WriteBatch.set', arguments, 2, 3), this.aw();
            var r = Qp('WriteBatch.set', t, this.iw);
            n = jp('WriteBatch.set', n);
            var i = zp(r.Qa, e, 'WriteBatch.set'),
              o = i[0],
              s = i[1],
              u = this.iw.Hd.Ja(s, o, n);
            return (this.ow = this.ow.concat(u.Wa(r.Ua, gs.Qe()))), this;
          }),
          (Cp.prototype.update = function(t, e, n) {
            for (var r, i, o = [], s = 3; s < arguments.length; s++)
              o[s - 3] = arguments[s];
            return (
              this.aw(),
              (i =
                'string' == typeof e || e instanceof _c
                  ? (nc('WriteBatch.update', arguments, 3),
                    (r = Qp('WriteBatch.update', t, this.iw)),
                    this.iw.Hd.tu('WriteBatch.update', e, n, o))
                  : (ec('WriteBatch.update', arguments, 2),
                    (r = Qp('WriteBatch.update', t, this.iw)),
                    this.iw.Hd.Za('WriteBatch.update', e))),
              (this.ow = this.ow.concat(i.Wa(r.Ua, gs.exists(!0)))),
              this
            );
          }),
          (Cp.prototype.delete = function(t) {
            ec('WriteBatch.delete', arguments, 1), this.aw();
            var e = Qp('WriteBatch.delete', t, this.iw);
            return (this.ow = this.ow.concat(new Is(e.Ua, gs.Qe()))), this;
          }),
          (Cp.prototype.commit = function() {
            return (
              this.aw(),
              (this.hw = !0),
              0 < this.ow.length
                ? this.iw.Ud().write(this.ow)
                : Promise.resolve()
            );
          }),
          (Cp.prototype.aw = function() {
            if (this.hw)
              throw new Wr(
                Hr.FAILED_PRECONDITION,
                'A write batch can no longer be used after commit() has been called.',
              );
          }),
          Cp),
        Ep =
          (n(Up, (dp = tf)),
          (Up.sw = function(t, e, n) {
            if (t.length % 2 != 0)
              throw new Wr(
                Hr.INVALID_ARGUMENT,
                'Invalid document reference. Document references must have an even number of segments, but ' +
                  t.N() +
                  ' has ' +
                  t.length,
              );
            return new Up(new ai(t), e, n);
          }),
          Object.defineProperty(Up.prototype, 'id', {
            get: function() {
              return this.Ua.path.S();
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(Up.prototype, 'parent', {
            get: function() {
              return new Sp(this.Ua.path.p(), this.firestore, this.Qa);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(Up.prototype, 'path', {
            get: function() {
              return this.Ua.path.N();
            },
            enumerable: !0,
            configurable: !0,
          }),
          (Up.prototype.collection = function(t) {
            if (
              (ec('DocumentReference.collection', arguments, 1),
              ic('DocumentReference.collection', 'non-empty string', 1, t),
              !t)
            )
              throw new Wr(
                Hr.INVALID_ARGUMENT,
                'Must provide a non-empty collection name to collection()',
              );
            var e = $r.$(t);
            return new Sp(this.Ua.path.child(e), this.firestore, null);
          }),
          (Up.prototype.isEqual = function(t) {
            if (!(t instanceof Up))
              throw yc('isEqual', 'DocumentReference', 1, t);
            return (
              this.firestore === t.firestore &&
              this.Ua.isEqual(t.Ua) &&
              this.Qa === t.Qa
            );
          }),
          (Up.prototype.set = function(t, e) {
            rc('DocumentReference.set', arguments, 1, 2),
              (e = jp('DocumentReference.set', e));
            var n = zp(this.Qa, t, 'DocumentReference.set'),
              r = n[0],
              i = n[1],
              o = this.firestore.Hd.Ja(i, r, e);
            return this.Qd.write(o.Wa(this.Ua, gs.Qe()));
          }),
          (Up.prototype.update = function(t, e) {
            for (var n, r = [], i = 2; i < arguments.length; i++)
              r[i - 2] = arguments[i];
            return (
              (n =
                'string' == typeof t || t instanceof _c
                  ? (nc('DocumentReference.update', arguments, 2),
                    this.firestore.Hd.tu('DocumentReference.update', t, e, r))
                  : (ec('DocumentReference.update', arguments, 1),
                    this.firestore.Hd.Za('DocumentReference.update', t))),
              this.Qd.write(n.Wa(this.Ua, gs.exists(!0)))
            );
          }),
          (Up.prototype.delete = function() {
            return (
              ec('DocumentReference.delete', arguments, 0),
              this.Qd.write([new Is(this.Ua, gs.Qe())])
            );
          }),
          (Up.prototype.onSnapshot = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            rc('DocumentReference.onSnapshot', arguments, 1, 4);
            var n,
              r = { includeMetadataChanges: !1 },
              i = 0;
            'object' != typeof t[i] ||
              cp(t[i]) ||
              (dc('DocumentReference.onSnapshot', (r = t[i]), [
                'includeMetadataChanges',
              ]),
              uc(
                'DocumentReference.onSnapshot',
                'boolean',
                'includeMetadataChanges',
                r.includeMetadataChanges,
              ),
              i++);
            var o = { includeMetadataChanges: r.includeMetadataChanges };
            return (
              (n = cp(t[i])
                ? t[i]
                : (ic('DocumentReference.onSnapshot', 'function', i, t[i]),
                  oc(
                    'DocumentReference.onSnapshot',
                    'function',
                    i + 1,
                    t[i + 1],
                  ),
                  oc(
                    'DocumentReference.onSnapshot',
                    'function',
                    i + 2,
                    t[i + 2],
                  ),
                  { next: t[i], error: t[i + 1], complete: t[i + 2] })),
              this.uw(o, n)
            );
          }),
          (Up.prototype.uw = function(t, n) {
            var r = this,
              e = function(t) {
                console.error('Uncaught Error in onSnapshot:', t);
              };
            n.error && (e = n.error.bind(n));
            var i = new $l({
                next: function(t) {
                  if (n.next) {
                    var e = t.docs.get(r.Ua);
                    n.next(
                      new Tp(
                        r.firestore,
                        r.Ua,
                        e,
                        t.fromCache,
                        t.hasPendingWrites,
                        r.Qa,
                      ),
                    );
                  }
                },
                error: e,
              }),
              o = this.Qd.listen($s.As(this.Ua.path), i, t);
            return function() {
              i.Dd(), r.Qd.qc(o);
            };
          }),
          (Up.prototype.get = function(n) {
            var r = this;
            return (
              rc('DocumentReference.get', arguments, 0, 1),
              Gp('DocumentReference.get', n),
              new Promise(function(e, t) {
                n && 'cache' === n.source
                  ? r.firestore
                      .Ud()
                      .bd(r.Ua)
                      .then(function(t) {
                        e(
                          new Tp(
                            r.firestore,
                            r.Ua,
                            t,
                            !0,
                            t instanceof Ks && t.Xe,
                            r.Qa,
                          ),
                        );
                      }, t)
                  : r.cw(e, t, n);
              })
            );
          }),
          (Up.prototype.cw = function(e, n, r) {
            var i = this.uw(
              { includeMetadataChanges: !0, Af: !0 },
              {
                next: function(t) {
                  i(),
                    !t.exists && t.metadata.fromCache
                      ? n(
                          new Wr(
                            Hr.UNAVAILABLE,
                            'Failed to get document because the client is offline.',
                          ),
                        )
                      : t.exists &&
                        t.metadata.fromCache &&
                        r &&
                        'server' === r.source
                      ? n(
                          new Wr(
                            Hr.UNAVAILABLE,
                            'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)',
                          ),
                        )
                      : e(t);
                },
                error: n,
              },
            );
          }),
          (Up.prototype.withConverter = function(t) {
            return new Up(this.Ua, this.firestore, t);
          }),
          Up),
        Ip =
          ((Lp.prototype.isEqual = function(t) {
            return (
              this.hasPendingWrites === t.hasPendingWrites &&
              this.fromCache === t.fromCache
            );
          }),
          Lp),
        Tp =
          ((kp.prototype.data = function(t) {
            var e = this;
            if (
              (rc('DocumentSnapshot.data', arguments, 0, 1),
              (t = Bp('DocumentSnapshot.data', t)),
              this.lw)
            ) {
              if (this.Qa) {
                var n = new _p(
                  this.iw,
                  this.Ua,
                  this.lw,
                  this._w,
                  this.fw,
                  null,
                );
                return this.Qa.fromFirestore(n, t);
              }
              return new yp(
                this.iw.qa,
                this.iw.nw(),
                t.serverTimestamps || 'none',
                function(t) {
                  return new Ep(t, e.iw, null);
                },
              ).Nd(this.lw.fs());
            }
          }),
          (kp.prototype.get = function(t, e) {
            var n = this;
            if (
              (rc('DocumentSnapshot.get', arguments, 1, 2),
              (e = Bp('DocumentSnapshot.get', e)),
              this.lw)
            ) {
              var r = this.lw.data().field(yf('DocumentSnapshot.get', t));
              if (null !== r)
                return new yp(
                  this.iw.qa,
                  this.iw.nw(),
                  e.serverTimestamps || 'none',
                  function(t) {
                    return new Ep(t, n.iw, n.Qa);
                  },
                ).Nd(r);
            }
          }),
          Object.defineProperty(kp.prototype, 'id', {
            get: function() {
              return this.Ua.path.S();
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(kp.prototype, 'ref', {
            get: function() {
              return new Ep(this.Ua, this.iw, this.Qa);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(kp.prototype, 'exists', {
            get: function() {
              return null !== this.lw;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(kp.prototype, 'metadata', {
            get: function() {
              return new Ip(this.fw, this._w);
            },
            enumerable: !0,
            configurable: !0,
          }),
          (kp.prototype.isEqual = function(t) {
            if (!(t instanceof kp))
              throw yc('isEqual', 'DocumentSnapshot', 1, t);
            return (
              this.iw === t.iw &&
              this._w === t._w &&
              this.Ua.isEqual(t.Ua) &&
              (null === this.lw ? null === t.lw : this.lw.isEqual(t.lw)) &&
              this.Qa === t.Qa
            );
          }),
          kp),
        _p =
          (n(Rp, (pp = Tp)),
          (Rp.prototype.data = function(t) {
            return pp.prototype.data.call(this, t);
          }),
          Rp),
        Np =
          ((Pp.prototype.ww = function(t, e, n) {
            var r;
            if (t.L()) {
              if ('array-contains' === e || 'array-contains-any' === e)
                throw new Wr(
                  Hr.INVALID_ARGUMENT,
                  "Invalid Query. You can't perform '" +
                    e +
                    "' queries on FieldPath.documentId().",
                );
              if ('in' === e) {
                this.Tw(n, e);
                for (var i = [], o = 0, s = n; o < s.length; o++) {
                  var u = s[o];
                  i.push(this.Ew(u));
                }
                r = { arrayValue: { values: i } };
              } else r = this.Ew(n);
            } else
              ('in' !== e && 'array-contains-any' !== e) || this.Tw(n, e),
                (r = this.Hd.eu('Query.where', n, 'in' === e));
            var a = Js.create(t, e, r);
            return this.Iw(a), a;
          }),
          (Pp.prototype.Aw = function(t, e) {
            if (null !== this.dw.startAt)
              throw new Wr(
                Hr.INVALID_ARGUMENT,
                'Invalid query. You must not call Query.startAt() or Query.startAfter() before calling Query.orderBy().',
              );
            if (null !== this.dw.endAt)
              throw new Wr(
                Hr.INVALID_ARGUMENT,
                'Invalid query. You must not call Query.endAt() or Query.endBefore() before calling Query.orderBy().',
              );
            var n = new wu(t, e);
            return this.Rw(n), n;
          }),
          (Pp.prototype.mw = function(t, e, n) {
            if (!e)
              throw new Wr(
                Hr.NOT_FOUND,
                "Can't use a DocumentSnapshot that doesn't exist for " +
                  t +
                  '().',
              );
            for (var r = [], i = 0, o = this.dw.orderBy; i < o.length; i++) {
              var s = o[i];
              if (s.field.L()) r.push(Eo(this.qa, e.key));
              else {
                var u = e.field(s.field);
                if (ao(u))
                  throw new Wr(
                    Hr.INVALID_ARGUMENT,
                    'Invalid query. You are trying to start or end a query using a document for which the field "' +
                      s.field +
                      '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)',
                  );
                if (null === u) {
                  var a = s.field.N();
                  throw new Wr(
                    Hr.INVALID_ARGUMENT,
                    "Invalid query. You are trying to start or end a query using a document for which the field '" +
                      a +
                      "' (used as the orderBy) does not exist.",
                  );
                }
                r.push(u);
              }
            }
            return new iu(r, n);
          }),
          (Pp.prototype.Pw = function(t, e, n) {
            var r = this.dw.ds;
            if (e.length > r.length)
              throw new Wr(
                Hr.INVALID_ARGUMENT,
                'Too many arguments provided to ' +
                  t +
                  '(). The number of arguments must be less than or equal to the number of Query.orderBy() clauses',
              );
            for (var i = [], o = 0; o < e.length; o++) {
              var s = e[o];
              if (r[o].field.L()) {
                if ('string' != typeof s)
                  throw new Wr(
                    Hr.INVALID_ARGUMENT,
                    'Invalid query. Expected a string for document ID in ' +
                      t +
                      '(), but got a ' +
                      typeof s,
                  );
                if (!this.dw.Bs() && -1 !== s.indexOf('/'))
                  throw new Wr(
                    Hr.INVALID_ARGUMENT,
                    'Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ' +
                      t +
                      "() must be a plain document ID, but '" +
                      s +
                      "' contains a slash.",
                  );
                var u = this.dw.path.child($r.$(s));
                if (!ai.W(u))
                  throw new Wr(
                    Hr.INVALID_ARGUMENT,
                    'Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ' +
                      t +
                      "() must result in a valid document path, but '" +
                      u +
                      "' is not because it contains an odd number of segments.",
                  );
                var a = new ai(u);
                i.push(Eo(this.qa, a));
              } else {
                var h = this.Hd.eu(t, s);
                i.push(h);
              }
            }
            return new iu(i, n);
          }),
          (Pp.prototype.Vw = function(t) {
            if (t.xs() && 0 === t.ds.length)
              throw new Wr(
                Hr.UNIMPLEMENTED,
                'limitToLast() queries require specifying at least one orderBy() clause',
              );
          }),
          (Pp.prototype.Ew = function(t) {
            if ('string' == typeof t) {
              if ('' === t)
                throw new Wr(
                  Hr.INVALID_ARGUMENT,
                  'Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.',
                );
              if (!this.dw.Bs() && -1 !== t.indexOf('/'))
                throw new Wr(
                  Hr.INVALID_ARGUMENT,
                  "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" +
                    t +
                    "' contains a '/' character.",
                );
              var e = this.dw.path.child($r.$(t));
              if (!ai.W(e))
                throw new Wr(
                  Hr.INVALID_ARGUMENT,
                  "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" +
                    e +
                    "' is not because it has an odd number of segments (" +
                    e.length +
                    ').',
                );
              return Eo(this.qa, new ai(e));
            }
            if (t instanceof tf) return Eo(this.qa, t.Ua);
            throw new Wr(
              Hr.INVALID_ARGUMENT,
              'Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ' +
                lc(t) +
                '.',
            );
          }),
          (Pp.prototype.Tw = function(t, e) {
            if (!Array.isArray(t) || 0 === t.length)
              throw new Wr(
                Hr.INVALID_ARGUMENT,
                "Invalid Query. A non-empty array is required for '" +
                  e.toString() +
                  "' filters.",
              );
            if (10 < t.length)
              throw new Wr(
                Hr.INVALID_ARGUMENT,
                "Invalid Query. '" +
                  e.toString() +
                  "' filters support a maximum of 10 elements in the value array.",
              );
            if (0 <= t.indexOf(null))
              throw new Wr(
                Hr.INVALID_ARGUMENT,
                "Invalid Query. '" +
                  e.toString() +
                  "' filters cannot contain 'null' in the value array.",
              );
            if (
              0 <
              t.filter(function(t) {
                return Number.isNaN(t);
              }).length
            )
              throw new Wr(
                Hr.INVALID_ARGUMENT,
                "Invalid Query. '" +
                  e.toString() +
                  "' filters cannot contain 'NaN' in the value array.",
              );
          }),
          (Pp.prototype.Iw = function(t) {
            if (t instanceof Js) {
              var e = ['array-contains', 'array-contains-any'],
                n = ['in', 'array-contains-any'],
                r = 0 <= e.indexOf(t.op),
                i = 0 <= n.indexOf(t.op);
              if (t.Ms()) {
                var o = this.dw.Rs();
                if (null !== o && !o.isEqual(t.field))
                  throw new Wr(
                    Hr.INVALID_ARGUMENT,
                    "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" +
                      o.toString() +
                      "' and '" +
                      t.field.toString() +
                      "'",
                  );
                var s = this.dw.ms();
                null !== s && this.gw(t.field, s);
              } else if (i || r) {
                var u = null;
                if (
                  (i && (u = this.dw.Ls(n)),
                  null === u && r && (u = this.dw.Ls(e)),
                  null != u)
                )
                  throw u === t.op
                    ? new Wr(
                        Hr.INVALID_ARGUMENT,
                        "Invalid query. You cannot use more than one '" +
                          t.op.toString() +
                          "' filter.",
                      )
                    : new Wr(
                        Hr.INVALID_ARGUMENT,
                        "Invalid query. You cannot use '" +
                          t.op.toString() +
                          "' filters with '" +
                          u.toString() +
                          "' filters.",
                      );
              }
            }
          }),
          (Pp.prototype.Rw = function(t) {
            if (null === this.dw.ms()) {
              var e = this.dw.Rs();
              null !== e && this.gw(e, t.field);
            }
          }),
          (Pp.prototype.gw = function(t, e) {
            if (!e.isEqual(t))
              throw new Wr(
                Hr.INVALID_ARGUMENT,
                "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" +
                  t.toString() +
                  "' and so you must also use '" +
                  t.toString() +
                  "' as your first Query.orderBy(), but your first Query.orderBy() is on field '" +
                  e.toString() +
                  "' instead.",
              );
          }),
          n(xp, (lp = Pp)),
          (xp.prototype.where = function(t, e, n) {
            ec('Query.where', arguments, 3), pc('Query.where', 3, n);
            var r = hc(
                'Query.where',
                [
                  '<',
                  '<=',
                  '==',
                  '>=',
                  '>',
                  'array-contains',
                  'in',
                  'array-contains-any',
                ],
                2,
                e,
              ),
              i = yf('Query.where', t),
              o = this.ww(i, r, n);
            return new xp(this.dw.Ps(o), this.firestore, this.Qa);
          }),
          (xp.prototype.orderBy = function(t, e) {
            var n;
            if (
              (rc('Query.orderBy', arguments, 1, 2),
              oc('Query.orderBy', 'non-empty string', 2, e),
              void 0 === e || 'asc' === e)
            )
              n = 'asc';
            else {
              if ('desc' !== e)
                throw new Wr(
                  Hr.INVALID_ARGUMENT,
                  "Function Query.orderBy() has unknown direction '" +
                    e +
                    "', expected 'asc' or 'desc'.",
                );
              n = 'desc';
            }
            var r = yf('Query.orderBy', t),
              i = this.Aw(r, n);
            return new xp(this.dw.Vs(i), this.firestore, this.Qa);
          }),
          (xp.prototype.limit = function(t) {
            return (
              ec('Query.limit', arguments, 1),
              ic('Query.limit', 'number', 1, t),
              vc('Query.limit', 1, t),
              new xp(this.dw.gs(t), this.firestore, this.Qa)
            );
          }),
          (xp.prototype.limitToLast = function(t) {
            return (
              ec('Query.limitToLast', arguments, 1),
              ic('Query.limitToLast', 'number', 1, t),
              vc('Query.limitToLast', 1, t),
              new xp(this.dw.ps(t), this.firestore, this.Qa)
            );
          }),
          (xp.prototype.startAt = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++)
              e[n - 1] = arguments[n];
            nc('Query.startAt', arguments, 1);
            var r = this.pw('Query.startAt', t, e, !0);
            return new xp(this.dw.ys(r), this.firestore, this.Qa);
          }),
          (xp.prototype.startAfter = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++)
              e[n - 1] = arguments[n];
            nc('Query.startAfter', arguments, 1);
            var r = this.pw('Query.startAfter', t, e, !1);
            return new xp(this.dw.ys(r), this.firestore, this.Qa);
          }),
          (xp.prototype.endBefore = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++)
              e[n - 1] = arguments[n];
            nc('Query.endBefore', arguments, 1);
            var r = this.pw('Query.endBefore', t, e, !0);
            return new xp(this.dw.bs(r), this.firestore, this.Qa);
          }),
          (xp.prototype.endAt = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++)
              e[n - 1] = arguments[n];
            nc('Query.endAt', arguments, 1);
            var r = this.pw('Query.endAt', t, e, !1);
            return new xp(this.dw.bs(r), this.firestore, this.Qa);
          }),
          (xp.prototype.isEqual = function(t) {
            if (!(t instanceof xp)) throw yc('isEqual', 'Query', 1, t);
            return (
              this.firestore === t.firestore &&
              this.dw.isEqual(t.dw) &&
              this.Qa === t.Qa
            );
          }),
          (xp.prototype.withConverter = function(t) {
            return new xp(this.dw, this.firestore, t);
          }),
          (xp.prototype.pw = function(t, e, n, r) {
            if ((pc(t, 1, e), e instanceof Tp))
              return ec(t, d([e], n), 1), this.mw(t, e.lw, r);
            var i = [e].concat(n);
            return this.Pw(t, i, r);
          }),
          (xp.prototype.onSnapshot = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            rc('Query.onSnapshot', arguments, 1, 4);
            var n,
              r = {},
              i = 0;
            return (
              'object' != typeof t[i] ||
                cp(t[i]) ||
                (dc('Query.onSnapshot', (r = t[i]), ['includeMetadataChanges']),
                uc(
                  'Query.onSnapshot',
                  'boolean',
                  'includeMetadataChanges',
                  r.includeMetadataChanges,
                ),
                i++),
              (n = cp(t[i])
                ? t[i]
                : (ic('Query.onSnapshot', 'function', i, t[i]),
                  oc('Query.onSnapshot', 'function', i + 1, t[i + 1]),
                  oc('Query.onSnapshot', 'function', i + 2, t[i + 2]),
                  { next: t[i], error: t[i + 1], complete: t[i + 2] })),
              this.Vw(this.dw),
              this.uw(r, n)
            );
          }),
          (xp.prototype.uw = function(t, e) {
            var n = this,
              r = function(t) {
                console.error('Uncaught Error in onSnapshot:', t);
              };
            e.error && (r = e.error.bind(e));
            var i = new $l({
                next: function(t) {
                  e.next && e.next(new Ap(n.firestore, n.dw, t, n.Qa));
                },
                error: r,
              }),
              o = this.firestore.Ud(),
              s = o.listen(this.dw, i, t);
            return function() {
              i.Dd(), o.qc(s);
            };
          }),
          (xp.prototype.get = function(n) {
            var r = this;
            return (
              rc('Query.get', arguments, 0, 1),
              Gp('Query.get', n),
              this.Vw(this.dw),
              new Promise(function(e, t) {
                n && 'cache' === n.source
                  ? r.firestore
                      .Ud()
                      .vd(r.dw)
                      .then(function(t) {
                        e(new Ap(r.firestore, r.dw, t, r.Qa));
                      }, t)
                  : r.cw(e, t, n);
              })
            );
          }),
          (xp.prototype.cw = function(e, n, r) {
            var i = this.uw(
              { includeMetadataChanges: !0, Af: !0 },
              {
                next: function(t) {
                  i(),
                    t.metadata.fromCache && r && 'server' === r.source
                      ? n(
                          new Wr(
                            Hr.UNAVAILABLE,
                            'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)',
                          ),
                        )
                      : e(t);
                },
                error: n,
              },
            );
          }),
          xp),
        Ap =
          (Object.defineProperty(Op.prototype, 'docs', {
            get: function() {
              var e = [];
              return (
                this.forEach(function(t) {
                  return e.push(t);
                }),
                e
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(Op.prototype, 'empty', {
            get: function() {
              return this.bw.docs._();
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(Op.prototype, 'size', {
            get: function() {
              return this.bw.docs.size;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (Op.prototype.forEach = function(e, n) {
            var r = this;
            rc('QuerySnapshot.forEach', arguments, 1, 2),
              ic('QuerySnapshot.forEach', 'function', 1, e),
              this.bw.docs.forEach(function(t) {
                e.call(n, r.Dw(t));
              });
          }),
          Object.defineProperty(Op.prototype, 'query', {
            get: function() {
              return new Np(this.yw, this.iw, this.Qa);
            },
            enumerable: !0,
            configurable: !0,
          }),
          (Op.prototype.docChanges = function(t) {
            t &&
              (dc('QuerySnapshot.docChanges', t, ['includeMetadataChanges']),
              uc(
                'QuerySnapshot.docChanges',
                'boolean',
                'includeMetadataChanges',
                t.includeMetadataChanges,
              ));
            var e = !(!t || !t.includeMetadataChanges);
            if (e && this.bw.qt)
              throw new Wr(
                Hr.INVALID_ARGUMENT,
                'To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().',
              );
            return (
              (this.vw && this.Sw === e) ||
                ((this.vw = (function(i, e, o, s) {
                  if (o.Lt._()) {
                    var n = 0;
                    return o.docChanges.map(function(t) {
                      var e = new _p(
                        i,
                        t.doc.key,
                        t.doc,
                        o.fromCache,
                        o.Ot.has(t.doc.key),
                        s,
                      );
                      return (
                        t.doc,
                        { type: 'added', doc: e, oldIndex: -1, newIndex: n++ }
                      );
                    });
                  }
                  var u = o.Lt;
                  return o.docChanges
                    .filter(function(t) {
                      return e || 3 !== t.type;
                    })
                    .map(function(t) {
                      var e = new _p(
                          i,
                          t.doc.key,
                          t.doc,
                          o.fromCache,
                          o.Ot.has(t.doc.key),
                          s,
                        ),
                        n = -1,
                        r = -1;
                      return (
                        0 !== t.type &&
                          ((n = u.indexOf(t.doc.key)),
                          (u = u.delete(t.doc.key))),
                        1 !== t.type &&
                          (r = (u = u.add(t.doc)).indexOf(t.doc.key)),
                        {
                          type: (function(t) {
                            switch (t) {
                              case 0:
                                return 'added';
                              case 2:
                              case 3:
                                return 'modified';
                              case 1:
                                return 'removed';
                              default:
                                return Dr();
                            }
                          })(t.type),
                          doc: e,
                          oldIndex: n,
                          newIndex: r,
                        }
                      );
                    });
                })(this.iw, e, this.bw, this.Qa)),
                (this.Sw = e)),
              this.vw
            );
          }),
          (Op.prototype.isEqual = function(t) {
            if (!(t instanceof Op)) throw yc('isEqual', 'QuerySnapshot', 1, t);
            return (
              this.iw === t.iw &&
              this.yw.isEqual(t.yw) &&
              this.bw.isEqual(t.bw) &&
              this.Qa === t.Qa
            );
          }),
          (Op.prototype.Dw = function(t) {
            return new _p(
              this.iw,
              t.key,
              t,
              this.metadata.fromCache,
              this.bw.Ot.has(t.key),
              this.Qa,
            );
          }),
          Op),
        Sp =
          (n(Dp, (fp = Np)),
          Object.defineProperty(Dp.prototype, 'id', {
            get: function() {
              return this.dw.path.S();
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(Dp.prototype, 'parent', {
            get: function() {
              var t = this.dw.path.p();
              return t._() ? null : new Ep(new ai(t), this.firestore, null);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(Dp.prototype, 'path', {
            get: function() {
              return this.dw.path.N();
            },
            enumerable: !0,
            configurable: !0,
          }),
          (Dp.prototype.doc = function(t) {
            rc('CollectionReference.doc', arguments, 0, 1),
              0 === arguments.length && (t = Rr.t()),
              ic('CollectionReference.doc', 'non-empty string', 1, t);
            var e = $r.$(t);
            return Ep.sw(this.dw.path.child(e), this.firestore, this.Qa);
          }),
          (Dp.prototype.add = function(t) {
            ec('CollectionReference.add', arguments, 1),
              ic(
                'CollectionReference.add',
                'object',
                1,
                this.Qa ? this.Qa.toFirestore(t) : t,
              );
            var e = this.doc();
            return e.set(t).then(function() {
              return e;
            });
          }),
          (Dp.prototype.withConverter = function(t) {
            return new Dp(this.Cw, this.firestore, t);
          }),
          Dp);
      function Dp(t, e, n) {
        var r = this;
        if (
          ((r = fp.call(this, $s.As(t), e, n) || this).Cw = t).length % 2 !=
          1
        )
          throw new Wr(
            Hr.INVALID_ARGUMENT,
            'Invalid collection reference. Collection references must have an odd number of segments, but ' +
              t.N() +
              ' has ' +
              t.length,
          );
        return r;
      }
      function Op(t, e, n, r) {
        (this.iw = t),
          (this.yw = e),
          (this.bw = n),
          (this.Qa = r),
          (this.vw = null),
          (this.Sw = null),
          (this.metadata = new Ip(n.hasPendingWrites, n.fromCache));
      }
      function xp(t, e, n) {
        var r = this;
        return (
          ((r = lp.call(this, e.qa, e.Hd, t) || this).dw = t),
          (r.firestore = e),
          (r.Qa = n),
          r
        );
      }
      function Pp(t, e, n) {
        (this.qa = t), (this.Hd = e), (this.dw = n);
      }
      function Rp() {
        return (null !== pp && pp.apply(this, arguments)) || this;
      }
      function kp(t, e, n, r, i, o) {
        (this.iw = t),
          (this.Ua = e),
          (this.lw = n),
          (this._w = r),
          (this.fw = i),
          (this.Qa = o);
      }
      function Lp(t, e) {
        (this.hasPendingWrites = t), (this.fromCache = e);
      }
      function Up(t, e, n) {
        var r = this;
        return (
          ((r = dp.call(this, e.qa, t, n) || this).Ua = t),
          (r.firestore = e),
          (r.Qa = n),
          (r.Qd = r.firestore.Ud()),
          r
        );
      }
      function Cp(t) {
        (this.iw = t), (this.ow = []), (this.hw = !1);
      }
      function Vp(t, e) {
        (this.iw = t), (this.rw = e);
      }
      function Mp(t, e, n) {
        var r = this;
        if (
          (void 0 === n && (n = new Kl()),
          (this.Bd = null),
          (this.qd = new xh()),
          (this.INTERNAL = {
            delete: function() {
              return y(r, void 0, void 0, function() {
                return v(this, function(t) {
                  switch (t.label) {
                    case 0:
                      return this.Ud(), [4, this.Qd.terminate()];
                    case 1:
                      return t.sent(), [2];
                  }
                });
              });
            },
          }),
          'object' == typeof t.options)
        ) {
          var i = t;
          (this.Bd = i),
            (this.qa = Mp.Wd(i)),
            (this.jd = i.name),
            (this.Kd = new Nf(e));
        } else {
          var o = t;
          if (!o.projectId)
            throw new Wr(Hr.INVALID_ARGUMENT, 'Must provide projectId');
          (this.qa = new Mr(o.projectId, o.database)),
            (this.jd = '[DEFAULT]'),
            (this.Kd = new _f());
        }
        (this.Gd = n), (this.zd = new gp({}));
      }
      function Fp(t) {
        var e, n, r, i;
        if (void 0 === t.host) {
          if (void 0 !== t.ssl)
            throw new Wr(
              Hr.INVALID_ARGUMENT,
              "Can't provide ssl option if host option is not set",
            );
          (this.host = 'firestore.googleapis.com'), (this.ssl = !0);
        } else
          sc('settings', 'non-empty string', 'host', t.host),
            (this.host = t.host),
            uc('settings', 'boolean', 'ssl', t.ssl),
            (this.ssl = null === (e = t.ssl) || void 0 === e || e);
        if (
          (dc('settings', t, [
            'host',
            'ssl',
            'credentials',
            'timestampsInSnapshots',
            'cacheSizeBytes',
            'experimentalForceLongPolling',
            'ignoreUndefinedProperties',
          ]),
          uc('settings', 'object', 'credentials', t.credentials),
          (this.credentials = t.credentials),
          uc(
            'settings',
            'boolean',
            'timestampsInSnapshots',
            t.timestampsInSnapshots,
          ),
          uc(
            'settings',
            'boolean',
            'ignoreUndefinedProperties',
            t.ignoreUndefinedProperties,
          ),
          !0 === t.timestampsInSnapshots
            ? Ar(
                "The setting 'timestampsInSnapshots: true' is no longer required and should be removed.",
              )
            : !1 === t.timestampsInSnapshots &&
              Ar(
                "Support for 'timestampsInSnapshots: false' will be removed soon. You must update your code to handle Timestamp objects.",
              ),
          (this.timestampsInSnapshots =
            null === (n = t.timestampsInSnapshots) || void 0 === n || n),
          (this.ignoreUndefinedProperties =
            null !== (r = t.ignoreUndefinedProperties) && void 0 !== r && r),
          uc('settings', 'number', 'cacheSizeBytes', t.cacheSizeBytes),
          void 0 === t.cacheSizeBytes)
        )
          this.cacheSizeBytes = Vh.Dh;
        else {
          if (t.cacheSizeBytes !== vp && t.cacheSizeBytes < Vh.Sh)
            throw new Wr(
              Hr.INVALID_ARGUMENT,
              'cacheSizeBytes must be at least ' + Vh.Sh,
            );
          this.cacheSizeBytes = t.cacheSizeBytes;
        }
        uc(
          'settings',
          'boolean',
          'experimentalForceLongPolling',
          t.experimentalForceLongPolling,
        ),
          (this.forceLongPolling =
            null !== (i = t.experimentalForceLongPolling) && void 0 !== i && i);
      }
      function qp(t, e, n, r) {
        (this.s = t),
          (this.timestampsInSnapshots = e),
          (this.Cd = n),
          (this.Fd = r);
      }
      function jp(t, e) {
        if (void 0 === e) return { merge: !1 };
        if (
          (dc(t, e, ['merge', 'mergeFields']),
          uc(t, 'boolean', 'merge', e.merge),
          (n = t),
          void 0 !== (r = e.mergeFields) &&
            (function(t, e, n, r) {
              if (!(n instanceof Array))
                throw new Wr(
                  Hr.INVALID_ARGUMENT,
                  'Function ' +
                    t +
                    '() requires its ' +
                    e +
                    ' option to be an array, but it was: ' +
                    lc(n),
                );
              for (var i = 0; i < n.length; ++i)
                if (!r(n[i]))
                  throw new Wr(
                    Hr.INVALID_ARGUMENT,
                    'Function ' +
                      t +
                      '() requires all ' +
                      e +
                      ' elements to be a string or a FieldPath, but the value at index ' +
                      i +
                      ' was: ' +
                      lc(n[i]),
                  );
            })(n, 'mergeFields', r, function(t) {
              return 'string' == typeof t || t instanceof _c;
            }),
          void 0 !== e.mergeFields && void 0 !== e.merge)
        )
          throw new Wr(
            Hr.INVALID_ARGUMENT,
            'Invalid options passed to function ' +
              t +
              '(): You cannot specify both "merge" and "mergeFields".',
          );
        var n, r;
        return e;
      }
      function Bp(t, e) {
        return void 0 === e
          ? {}
          : (dc(t, e, ['serverTimestamps']),
            ac(t, 0, 'serverTimestamps', e.serverTimestamps, [
              'estimate',
              'previous',
              'none',
            ]),
            e);
      }
      function Gp(t, e) {
        oc(t, 'object', 1, e),
          e &&
            (dc(t, e, ['source']),
            ac(t, 0, 'source', e.source, ['default', 'server', 'cache']));
      }
      function Qp(t, e, n) {
        if (e instanceof tf) {
          if (e.firestore !== n)
            throw new Wr(
              Hr.INVALID_ARGUMENT,
              'Provided document reference is from a different Firestore instance.',
            );
          return e;
        }
        throw yc(t, 'DocumentReference', 1, e);
      }
      function zp(t, e, n) {
        var r;
        return (
          t ? ((r = t.toFirestore(e)), (n = 'toFirestore() in ' + n)) : (r = e),
          [r, n]
        );
      }
      var Hp = ['length', 'name'];
      function Wp(t, e) {
        function n() {
          var t = 'This constructor is private.';
          throw (e && ((t += ' '), (t += e)), new Wr(Hr.INVALID_ARGUMENT, t));
        }
        for (var r = 0, i = Object.getOwnPropertyNames(t); r < i.length; r++) {
          var o = i[r];
          -1 === Hp.indexOf(o) && (n[o] = t[o]);
        }
        return n;
      }
      var Kp,
        Xp = Wp(mp, 'Use firebase.firestore() instead.'),
        Yp = Wp(wp, 'Use firebase.firestore().runTransaction() instead.'),
        $p = Wp(bp, 'Use firebase.firestore().batch() instead.'),
        Jp = Wp(Ep, 'Use firebase.firestore().doc() instead.'),
        Zp = Wp(Tp),
        td = Wp(_p),
        ed = Wp(Np),
        nd = Wp(Ap),
        rd = Wp(Sp, 'Use firebase.firestore().collection() instead.'),
        id = Wp(jc, 'Use FieldValue.<field>() instead.'),
        od = Wp(
          Tc,
          'Use Blob.fromUint8Array() or Blob.fromBase64String() instead.',
        ),
        sd = {
          Firestore: Xp,
          GeoPoint: Gc,
          Timestamp: Kr,
          Blob: od,
          Transaction: Yp,
          WriteBatch: $p,
          DocumentReference: Jp,
          DocumentSnapshot: Zp,
          Query: ed,
          QueryDocumentSnapshot: td,
          QuerySnapshot: nd,
          CollectionReference: rd,
          FieldPath: _c,
          FieldValue: id,
          setLogLevel: mp.setLogLevel,
          CACHE_SIZE_UNLIMITED: vp,
        };
      (Kp = ud).INTERNAL.registerComponent(
        new br(
          'firestore',
          function(t) {
            return (
              (e = t.getProvider('app').getImmediate()),
              (n = t.getProvider('auth-internal')),
              new mp(e, n, new Xl())
            );
            var e, n;
          },
          'PUBLIC',
        ).setServiceProps(Object.assign({}, sd)),
      ),
        Kp.registerVersion('@firebase/firestore', '1.15.5');
    }.apply(this, arguments));
  } catch (t) {
    throw (console.error(t),
    new Error(
      'Cannot instantiate firebase-firestore.js - be sure to load firebase-app.js first.',
    ));
  }
});

!(function(t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(require('@firebase/app'))
    : 'function' == typeof define && define.amd
    ? define(['@firebase/app'], e)
    : e((t = t || self).firebase);
})(this, function(fl) {
  'use strict';
  try {
    (function() {
      (fl = fl && fl.hasOwnProperty('default') ? fl.default : fl),
        function() {
          var t,
            o =
              'function' == typeof Object.defineProperties
                ? Object.defineProperty
                : function(t, e, n) {
                    t != Array.prototype &&
                      t != Object.prototype &&
                      (t[e] = n.value);
                  },
            a =
              'undefined' != typeof window && window === this
                ? this
                : 'undefined' != typeof global && null != global
                ? global
                : this;
          function c(t) {
            var e =
              'undefined' != typeof Symbol &&
              Symbol.iterator &&
              t[Symbol.iterator];
            return e
              ? e.call(t)
              : {
                  next: (function(t) {
                    var e = 0;
                    return function() {
                      return e < t.length
                        ? { done: !1, value: t[e++] }
                        : { done: !0 };
                    };
                  })(t),
                };
          }
          !(function(t, e) {
            if (e) {
              var n = a;
              t = t.split('.');
              for (var i = 0; i < t.length - 1; i++) {
                var r = t[i];
                r in n || (n[r] = {}), (n = n[r]);
              }
              (e = e((i = n[(t = t[t.length - 1])]))) != i &&
                null != e &&
                o(n, t, { configurable: !0, writable: !0, value: e });
            }
          })('Promise', function(t) {
            function s(t) {
              (this.b = 0), (this.c = void 0), (this.a = []);
              var e = this.f();
              try {
                t(e.resolve, e.reject);
              } catch (t) {
                e.reject(t);
              }
            }
            function e() {
              this.a = null;
            }
            function u(e) {
              return e instanceof s
                ? e
                : new s(function(t) {
                    t(e);
                  });
            }
            if (t) return t;
            e.prototype.b = function(t) {
              if (null == this.a) {
                this.a = [];
                var e = this;
                this.c(function() {
                  e.g();
                });
              }
              this.a.push(t);
            };
            var n = a.setTimeout;
            (e.prototype.c = function(t) {
              n(t, 0);
            }),
              (e.prototype.g = function() {
                for (; this.a && this.a.length; ) {
                  var t = this.a;
                  this.a = [];
                  for (var e = 0; e < t.length; ++e) {
                    var n = t[e];
                    t[e] = null;
                    try {
                      n();
                    } catch (t) {
                      this.f(t);
                    }
                  }
                }
                this.a = null;
              }),
              (e.prototype.f = function(t) {
                this.c(function() {
                  throw t;
                });
              }),
              (s.prototype.f = function() {
                function t(e) {
                  return function(t) {
                    i || ((i = !0), e.call(n, t));
                  };
                }
                var n = this,
                  i = !1;
                return { resolve: t(this.m), reject: t(this.g) };
              }),
              (s.prototype.m = function(t) {
                if (t === this)
                  this.g(new TypeError('A Promise cannot resolve to itself'));
                else if (t instanceof s) this.o(t);
                else {
                  t: switch (typeof t) {
                    case 'object':
                      var e = null != t;
                      break t;
                    case 'function':
                      e = !0;
                      break t;
                    default:
                      e = !1;
                  }
                  e ? this.u(t) : this.h(t);
                }
              }),
              (s.prototype.u = function(t) {
                var e = void 0;
                try {
                  e = t.then;
                } catch (t) {
                  return void this.g(t);
                }
                'function' == typeof e ? this.v(e, t) : this.h(t);
              }),
              (s.prototype.g = function(t) {
                this.i(2, t);
              }),
              (s.prototype.h = function(t) {
                this.i(1, t);
              }),
              (s.prototype.i = function(t, e) {
                if (0 != this.b)
                  throw Error(
                    'Cannot settle(' +
                      t +
                      ', ' +
                      e +
                      '): Promise already settled in state' +
                      this.b,
                  );
                (this.b = t), (this.c = e), this.l();
              }),
              (s.prototype.l = function() {
                if (null != this.a) {
                  for (var t = 0; t < this.a.length; ++t) r.b(this.a[t]);
                  this.a = null;
                }
              });
            var r = new e();
            return (
              (s.prototype.o = function(t) {
                var e = this.f();
                t.La(e.resolve, e.reject);
              }),
              (s.prototype.v = function(t, e) {
                var n = this.f();
                try {
                  t.call(e, n.resolve, n.reject);
                } catch (t) {
                  n.reject(t);
                }
              }),
              (s.prototype.then = function(t, e) {
                function n(e, t) {
                  return 'function' == typeof e
                    ? function(t) {
                        try {
                          i(e(t));
                        } catch (t) {
                          r(t);
                        }
                      }
                    : t;
                }
                var i,
                  r,
                  o = new s(function(t, e) {
                    (i = t), (r = e);
                  });
                return this.La(n(t, i), n(e, r)), o;
              }),
              (s.prototype.catch = function(t) {
                return this.then(void 0, t);
              }),
              (s.prototype.La = function(t, e) {
                function n() {
                  switch (i.b) {
                    case 1:
                      t(i.c);
                      break;
                    case 2:
                      e(i.c);
                      break;
                    default:
                      throw Error('Unexpected state: ' + i.b);
                  }
                }
                var i = this;
                null == this.a ? r.b(n) : this.a.push(n);
              }),
              (s.resolve = u),
              (s.reject = function(n) {
                return new s(function(t, e) {
                  e(n);
                });
              }),
              (s.race = function(r) {
                return new s(function(t, e) {
                  for (var n = c(r), i = n.next(); !i.done; i = n.next())
                    u(i.value).La(t, e);
                });
              }),
              (s.all = function(t) {
                var o = c(t),
                  a = o.next();
                return a.done
                  ? u([])
                  : new s(function(n, t) {
                      function e(e) {
                        return function(t) {
                          (i[e] = t), 0 == --r && n(i);
                        };
                      }
                      for (
                        var i = [], r = 0;
                        i.push(void 0),
                          r++,
                          u(a.value).La(e(i.length - 1), t),
                          !(a = o.next()).done;

                      );
                    });
              }),
              s
            );
          });
          var u = u || {},
            l = this || self;
          function h(t) {
            return 'string' == typeof t;
          }
          function n(t) {
            return 'boolean' == typeof t;
          }
          var s = /^[\w+/_-]+[=]{0,2}$/,
            f = null;
          function d() {}
          function i(t) {
            var e = typeof t;
            if ('object' == e) {
              if (!t) return 'null';
              if (t instanceof Array) return 'array';
              if (t instanceof Object) return e;
              var n = Object.prototype.toString.call(t);
              if ('[object Window]' == n) return 'object';
              if (
                '[object Array]' == n ||
                ('number' == typeof t.length &&
                  void 0 !== t.splice &&
                  void 0 !== t.propertyIsEnumerable &&
                  !t.propertyIsEnumerable('splice'))
              )
                return 'array';
              if (
                '[object Function]' == n ||
                (void 0 !== t.call &&
                  void 0 !== t.propertyIsEnumerable &&
                  !t.propertyIsEnumerable('call'))
              )
                return 'function';
            } else if ('function' == e && void 0 === t.call) return 'object';
            return e;
          }
          function r(t) {
            return null === t;
          }
          function p(t) {
            return 'array' == i(t);
          }
          function v(t) {
            var e = i(t);
            return (
              'array' == e || ('object' == e && 'number' == typeof t.length)
            );
          }
          function m(t) {
            return 'function' == i(t);
          }
          function g(t) {
            var e = typeof t;
            return ('object' == e && null != t) || 'function' == e;
          }
          var e = 'closure_uid_' + ((1e9 * Math.random()) >>> 0),
            b = 0;
          function y(t, e, n) {
            return t.call.apply(t.bind, arguments);
          }
          function w(e, n, t) {
            if (!e) throw Error();
            if (2 < arguments.length) {
              var i = Array.prototype.slice.call(arguments, 2);
              return function() {
                var t = Array.prototype.slice.call(arguments);
                return Array.prototype.unshift.apply(t, i), e.apply(n, t);
              };
            }
            return function() {
              return e.apply(n, arguments);
            };
          }
          function I(t, e, n) {
            return (I =
              Function.prototype.bind &&
              -1 != Function.prototype.bind.toString().indexOf('native code')
                ? y
                : w).apply(null, arguments);
          }
          function T(e, t) {
            var n = Array.prototype.slice.call(arguments, 1);
            return function() {
              var t = n.slice();
              return t.push.apply(t, arguments), e.apply(this, t);
            };
          }
          var E =
            Date.now ||
            function() {
              return +new Date();
            };
          function k(t, o) {
            function e() {}
            (e.prototype = o.prototype),
              (t.qb = o.prototype),
              (t.prototype = new e()),
              ((t.prototype.constructor = t).gd = function(t, e, n) {
                for (
                  var i = Array(arguments.length - 2), r = 2;
                  r < arguments.length;
                  r++
                )
                  i[r - 2] = arguments[r];
                return o.prototype[e].apply(t, i);
              });
          }
          function A(t) {
            if (!t) return !1;
            try {
              return !!t.$goog_Thenable;
            } catch (t) {
              return !1;
            }
          }
          function S(t) {
            if (Error.captureStackTrace) Error.captureStackTrace(this, S);
            else {
              var e = Error().stack;
              e && (this.stack = e);
            }
            t && (this.message = String(t));
          }
          function N(t, e) {
            for (
              var n = '', i = (t = t.split('%s')).length - 1, r = 0;
              r < i;
              r++
            )
              n += t[r] + (r < e.length ? e[r] : '%s');
            S.call(this, n + t[i]);
          }
          function O(t, e) {
            throw new N(
              'Failure' + (t ? ': ' + t : ''),
              Array.prototype.slice.call(arguments, 1),
            );
          }
          function _(t, e) {
            (this.c = t), (this.f = e), (this.b = 0), (this.a = null);
          }
          function P(t, e) {
            t.f(e), t.b < 100 && (t.b++, (e.next = t.a), (t.a = e));
          }
          function R() {
            this.b = this.a = null;
          }
          k(S, Error),
            (S.prototype.name = 'CustomError'),
            k(N, S),
            (N.prototype.name = 'AssertionError'),
            (_.prototype.get = function() {
              if (0 < this.b) {
                this.b--;
                var t = this.a;
                (this.a = t.next), (t.next = null);
              } else t = this.c();
              return t;
            });
          var C = new _(
            function() {
              return new D();
            },
            function(t) {
              t.reset();
            },
          );
          function D() {
            this.next = this.b = this.a = null;
          }
          function L(t, e) {
            t: {
              try {
                var n = t && t.ownerDocument,
                  i = n && (n.defaultView || n.parentWindow);
                if ((i = i || l).Element && i.Location) {
                  var r = i;
                  break t;
                }
              } catch (t) {}
              r = null;
            }
            if (
              r &&
              void 0 !== r[e] &&
              (!t ||
                (!(t instanceof r[e]) &&
                  (t instanceof r.Location || t instanceof r.Element)))
            ) {
              if (g(t))
                try {
                  var o =
                    t.constructor.displayName ||
                    t.constructor.name ||
                    Object.prototype.toString.call(t);
                } catch (t) {
                  o = '<object could not be stringified>';
                }
              else
                o = void 0 === t ? 'undefined' : null === t ? 'null' : typeof t;
              O(
                'Argument is not a %s (or a non-Element, non-Location mock); got: %s',
                e,
                o,
              );
            }
          }
          (R.prototype.add = function(t, e) {
            var n = C.get();
            n.set(t, e),
              this.b ? (this.b.next = n) : (this.a = n),
              (this.b = n);
          }),
            (D.prototype.set = function(t, e) {
              (this.a = t), (this.b = e), (this.next = null);
            }),
            (D.prototype.reset = function() {
              this.next = this.b = this.a = null;
            });
          var x = Array.prototype.indexOf
              ? function(t, e) {
                  return Array.prototype.indexOf.call(t, e, void 0);
                }
              : function(t, e) {
                  if (h(t)) return h(e) && 1 == e.length ? t.indexOf(e, 0) : -1;
                  for (var n = 0; n < t.length; n++)
                    if (n in t && t[n] === e) return n;
                  return -1;
                },
            M = Array.prototype.forEach
              ? function(t, e, n) {
                  Array.prototype.forEach.call(t, e, n);
                }
              : function(t, e, n) {
                  for (
                    var i = t.length, r = h(t) ? t.split('') : t, o = 0;
                    o < i;
                    o++
                  )
                    o in r && e.call(n, r[o], o, t);
                };
          var j = Array.prototype.map
              ? function(t, e) {
                  return Array.prototype.map.call(t, e, void 0);
                }
              : function(t, e) {
                  for (
                    var n = t.length,
                      i = Array(n),
                      r = h(t) ? t.split('') : t,
                      o = 0;
                    o < n;
                    o++
                  )
                    o in r && (i[o] = e.call(void 0, r[o], o, t));
                  return i;
                },
            U = Array.prototype.some
              ? function(t, e) {
                  return Array.prototype.some.call(t, e, void 0);
                }
              : function(t, e) {
                  for (
                    var n = t.length, i = h(t) ? t.split('') : t, r = 0;
                    r < n;
                    r++
                  )
                    if (r in i && e.call(void 0, i[r], r, t)) return !0;
                  return !1;
                };
          function V(t, e) {
            return 0 <= x(t, e);
          }
          function F(t, e) {
            var n;
            return (
              (n = 0 <= (e = x(t, e))) && Array.prototype.splice.call(t, e, 1),
              n
            );
          }
          function K(n, i) {
            !(function(t, e) {
              for (
                var n = h(t) ? t.split('') : t, i = t.length - 1;
                0 <= i;
                --i
              )
                i in n && e.call(void 0, n[i], i, t);
            })(n, function(t, e) {
              i.call(void 0, t, e, n) &&
                1 == Array.prototype.splice.call(n, e, 1).length &&
                0;
            });
          }
          function q(t) {
            return Array.prototype.concat.apply([], arguments);
          }
          function H(t) {
            var e = t.length;
            if (0 < e) {
              for (var n = Array(e), i = 0; i < e; i++) n[i] = t[i];
              return n;
            }
            return [];
          }
          function B(t, e) {
            for (var n in t) e.call(void 0, t[n], n, t);
          }
          function G(t) {
            for (var e in t) return !1;
            return !0;
          }
          function W(t) {
            var e,
              n = {};
            for (e in t) n[e] = t[e];
            return n;
          }
          var X = 'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
            ' ',
          );
          function J(t, e) {
            for (var n, i, r = 1; r < arguments.length; r++) {
              for (n in (i = arguments[r])) t[n] = i[n];
              for (var o = 0; o < X.length; o++)
                (n = X[o]),
                  Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
            }
          }
          function Y(t, e) {
            (this.a = (t === Z && e) || ''), (this.b = $);
          }
          function z(t) {
            return t instanceof Y && t.constructor === Y && t.b === $
              ? t.a
              : (O("expected object of type Const, got '" + t + "'"),
                'type_error:Const');
          }
          (Y.prototype.qa = !0),
            (Y.prototype.pa = function() {
              return this.a;
            }),
            (Y.prototype.toString = function() {
              return 'Const{' + this.a + '}';
            });
          var $ = {},
            Z = {},
            Q = new Y(Z, '');
          function tt() {
            (this.a = ''), (this.b = ot);
          }
          function et(t) {
            return t instanceof tt && t.constructor === tt && t.b === ot
              ? t.a
              : (O(
                  "expected object of type TrustedResourceUrl, got '" +
                    t +
                    "' of type " +
                    i(t),
                ),
                'type_error:TrustedResourceUrl');
          }
          function nt(t, n) {
            var i = z(t);
            if (!rt.test(i))
              throw Error('Invalid TrustedResourceUrl format: ' + i);
            return at(
              (t = i.replace(it, function(t, e) {
                if (!Object.prototype.hasOwnProperty.call(n, e))
                  throw Error(
                    'Found marker, "' +
                      e +
                      '", in format string, "' +
                      i +
                      '", but no valid label mapping found in args: ' +
                      JSON.stringify(n),
                  );
                return (t = n[e]) instanceof Y
                  ? z(t)
                  : encodeURIComponent(String(t));
              })),
            );
          }
          (tt.prototype.qa = !0),
            (tt.prototype.pa = function() {
              return this.a.toString();
            }),
            (tt.prototype.toString = function() {
              return 'TrustedResourceUrl{' + this.a + '}';
            });
          var it = /%{(\w+)}/g,
            rt = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
            ot = {};
          function at(t) {
            var e = new tt();
            return (e.a = t), e;
          }
          var st = String.prototype.trim
              ? function(t) {
                  return t.trim();
                }
              : function(t) {
                  return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1];
                },
            ut = /&/g,
            ct = /</g,
            ht = />/g,
            lt = /"/g,
            ft = /'/g,
            dt = /\x00/g,
            pt = /[\x00&<>"']/;
          function vt(t, e) {
            return -1 != t.indexOf(e);
          }
          function mt(t, e) {
            return t < e ? -1 : e < t ? 1 : 0;
          }
          function gt() {
            (this.a = ''), (this.b = Tt);
          }
          function bt(t) {
            return t instanceof gt && t.constructor === gt && t.b === Tt
              ? t.a
              : (O(
                  "expected object of type SafeUrl, got '" +
                    t +
                    "' of type " +
                    i(t),
                ),
                'type_error:SafeUrl');
          }
          (gt.prototype.qa = !0),
            (gt.prototype.pa = function() {
              return this.a.toString();
            }),
            (gt.prototype.toString = function() {
              return 'SafeUrl{' + this.a + '}';
            });
          var yt = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
          function wt(t) {
            return t instanceof gt
              ? t
              : ((t = 'object' == typeof t && t.qa ? t.pa() : String(t)),
                yt.test(t) || (t = 'about:invalid#zClosurez'),
                Et(t));
          }
          var It,
            Tt = {};
          function Et(t) {
            var e = new gt();
            return (e.a = t), e;
          }
          Et('about:blank');
          t: {
            var kt = l.navigator;
            if (kt) {
              var At = kt.userAgent;
              if (At) {
                It = At;
                break t;
              }
            }
            It = '';
          }
          function St(t) {
            return vt(It, t);
          }
          function Nt() {
            (this.a = ''), (this.b = _t);
          }
          function Ot(t) {
            return t instanceof Nt && t.constructor === Nt && t.b === _t
              ? t.a
              : (O(
                  "expected object of type SafeHtml, got '" +
                    t +
                    "' of type " +
                    i(t),
                ),
                'type_error:SafeHtml');
          }
          (Nt.prototype.qa = !0),
            (Nt.prototype.pa = function() {
              return this.a.toString();
            }),
            (Nt.prototype.toString = function() {
              return 'SafeHtml{' + this.a + '}';
            });
          var _t = {};
          function Pt(t) {
            var e = new Nt();
            return (e.a = t), e;
          }
          Pt('<!DOCTYPE html>');
          var Rt,
            Ct,
            Dt = Pt('');
          function Lt(t, e) {
            for (
              var n = t.split('%s'),
                i = '',
                r = Array.prototype.slice.call(arguments, 1);
              r.length && 1 < n.length;

            )
              i += n.shift() + r.shift();
            return i + n.join('%s');
          }
          function xt(t) {
            return (
              pt.test(t) &&
                (-1 != t.indexOf('&') && (t = t.replace(ut, '&amp;')),
                -1 != t.indexOf('<') && (t = t.replace(ct, '&lt;')),
                -1 != t.indexOf('>') && (t = t.replace(ht, '&gt;')),
                -1 != t.indexOf('"') && (t = t.replace(lt, '&quot;')),
                -1 != t.indexOf("'") && (t = t.replace(ft, '&#39;')),
                -1 != t.indexOf('\0') && (t = t.replace(dt, '&#0;'))),
              t
            );
          }
          function Mt(t) {
            l.setTimeout(function() {
              throw t;
            }, 0);
          }
          function jt() {
            var t = l.MessageChannel;
            if (
              (void 0 === t &&
                'undefined' != typeof window &&
                window.postMessage &&
                window.addEventListener &&
                !St('Presto') &&
                (t = function() {
                  var t = document.createElement('IFRAME');
                  (t.style.display = 'none'),
                    (function(t) {
                      var e = at(z(Q));
                      L(t, 'HTMLIFrameElement'), (t.src = et(e).toString());
                    })(t),
                    document.documentElement.appendChild(t);
                  var e = t.contentWindow;
                  (t = e.document).open(), t.write(Ot(Dt)), t.close();
                  var n = 'callImmediate' + Math.random(),
                    i =
                      'file:' == e.location.protocol
                        ? '*'
                        : e.location.protocol + '//' + e.location.host;
                  (t = I(function(t) {
                    ('*' != i && t.origin != i) ||
                      t.data != n ||
                      this.port1.onmessage();
                  }, this)),
                    e.addEventListener('message', t, !1),
                    (this.port1 = {}),
                    (this.port2 = {
                      postMessage: function() {
                        e.postMessage(n, i);
                      },
                    });
                }),
              void 0 === t || St('Trident') || St('MSIE'))
            )
              return 'undefined' != typeof document &&
                'onreadystatechange' in document.createElement('SCRIPT')
                ? function(t) {
                    var e = document.createElement('SCRIPT');
                    (e.onreadystatechange = function() {
                      (e.onreadystatechange = null),
                        e.parentNode.removeChild(e),
                        (e = null),
                        t(),
                        (t = null);
                    }),
                      document.documentElement.appendChild(e);
                  }
                : function(t) {
                    l.setTimeout(t, 0);
                  };
            var e = new t(),
              n = {},
              i = n;
            return (
              (e.port1.onmessage = function() {
                if (void 0 !== n.next) {
                  var t = (n = n.next).yb;
                  (n.yb = null), t();
                }
              }),
              function(t) {
                (i.next = { yb: t }), (i = i.next), e.port2.postMessage(0);
              }
            );
          }
          function Ut(t, e) {
            Ct ||
              (function() {
                if (l.Promise && l.Promise.resolve) {
                  var t = l.Promise.resolve(void 0);
                  Ct = function() {
                    t.then(Kt);
                  };
                } else
                  Ct = function() {
                    var t = Kt;
                    !m(l.setImmediate) ||
                    (l.Window &&
                      l.Window.prototype &&
                      !St('Edge') &&
                      l.Window.prototype.setImmediate == l.setImmediate)
                      ? (Rt = Rt || jt())(t)
                      : l.setImmediate(t);
                  };
              })(),
              Vt || (Ct(), (Vt = !0)),
              Ft.add(t, e);
          }
          Pt('<br>');
          var Vt = !1,
            Ft = new R();
          function Kt() {
            for (
              var t;
              (n = e = void 0),
                (n = null),
                (e = Ft).a &&
                  ((n = e.a),
                  (e.a = e.a.next),
                  e.a || (e.b = null),
                  (n.next = null)),
                (t = n);

            ) {
              try {
                t.a.call(t.b);
              } catch (t) {
                Mt(t);
              }
              P(C, t);
            }
            var e, n;
            Vt = !1;
          }
          function qt(t, e) {
            if (
              ((this.a = Ht),
              (this.i = void 0),
              (this.f = this.b = this.c = null),
              (this.g = this.h = !1),
              t != d)
            )
              try {
                var n = this;
                t.call(
                  e,
                  function(t) {
                    ee(n, Bt, t);
                  },
                  function(t) {
                    if (!(t instanceof ue))
                      try {
                        if (t instanceof Error) throw t;
                        throw Error('Promise rejected.');
                      } catch (t) {}
                    ee(n, Gt, t);
                  },
                );
              } catch (t) {
                ee(this, Gt, t);
              }
          }
          var Ht = 0,
            Bt = 2,
            Gt = 3;
          function Wt() {
            (this.next = this.f = this.b = this.g = this.a = null),
              (this.c = !1);
          }
          Wt.prototype.reset = function() {
            (this.f = this.b = this.g = this.a = null), (this.c = !1);
          };
          var Xt = new _(
            function() {
              return new Wt();
            },
            function(t) {
              t.reset();
            },
          );
          function Jt(t, e, n) {
            var i = Xt.get();
            return (i.g = t), (i.b = e), (i.f = n), i;
          }
          function Yt(t) {
            if (t instanceof qt) return t;
            var e = new qt(d);
            return ee(e, Bt, t), e;
          }
          function zt(n) {
            return new qt(function(t, e) {
              e(n);
            });
          }
          function $t(t, e, n) {
            ne(t, e, n, null) || Ut(T(e, t));
          }
          function Zt(n) {
            return new qt(function(i) {
              var r = n.length,
                o = [];
              if (r)
                for (
                  var t = function(t, e, n) {
                      r--,
                        (o[t] = e
                          ? { Gb: !0, value: n }
                          : { Gb: !1, reason: n }),
                        0 == r && i(o);
                    },
                    e = 0;
                  e < n.length;
                  e++
                )
                  $t(n[e], T(t, e, !0), T(t, e, !1));
              else i(o);
            });
          }
          function Qt(t, e) {
            t.b || (t.a != Bt && t.a != Gt) || ie(t),
              t.f ? (t.f.next = e) : (t.b = e),
              (t.f = e);
          }
          function te(t, r, o, a) {
            var e = Jt(null, null, null);
            return (
              (e.a = new qt(function(n, i) {
                (e.g = r
                  ? function(t) {
                      try {
                        var e = r.call(a, t);
                        n(e);
                      } catch (t) {
                        i(t);
                      }
                    }
                  : n),
                  (e.b = o
                    ? function(t) {
                        try {
                          var e = o.call(a, t);
                          void 0 === e && t instanceof ue ? i(t) : n(e);
                        } catch (t) {
                          i(t);
                        }
                      }
                    : i);
              })),
              Qt((e.a.c = t), e),
              e.a
            );
          }
          function ee(t, e, n) {
            t.a == Ht &&
              (t === n &&
                ((e = Gt),
                (n = new TypeError('Promise cannot resolve to itself'))),
              (t.a = 1),
              ne(n, t.Oc, t.Pc, t) ||
                ((t.i = n),
                (t.a = e),
                (t.c = null),
                ie(t),
                e != Gt ||
                  n instanceof ue ||
                  (function(t, e) {
                    (t.g = !0),
                      Ut(function() {
                        t.g && se.call(null, e);
                      });
                  })(t, n)));
          }
          function ne(t, e, n, i) {
            if (t instanceof qt) return Qt(t, Jt(e || d, n || null, i)), !0;
            if (A(t)) return t.then(e, n, i), !0;
            if (g(t))
              try {
                var r = t.then;
                if (m(r))
                  return (
                    (function(t, e, n, i, r) {
                      function o(t) {
                        a || ((a = !0), i.call(r, t));
                      }
                      var a = !1;
                      try {
                        e.call(
                          t,
                          function(t) {
                            a || ((a = !0), n.call(r, t));
                          },
                          o,
                        );
                      } catch (t) {
                        o(t);
                      }
                    })(t, r, e, n, i),
                    !0
                  );
              } catch (t) {
                return n.call(i, t), !0;
              }
            return !1;
          }
          function ie(t) {
            t.h || ((t.h = !0), Ut(t.Zb, t));
          }
          function re(t) {
            var e = null;
            return (
              t.b && ((e = t.b), (t.b = e.next), (e.next = null)),
              t.b || (t.f = null),
              e
            );
          }
          function oe(t, e, n, i) {
            if (n == Gt && e.b && !e.c) for (; t && t.g; t = t.c) t.g = !1;
            if (e.a) (e.a.c = null), ae(e, n, i);
            else
              try {
                e.c ? e.g.call(e.f) : ae(e, n, i);
              } catch (t) {
                se.call(null, t);
              }
            P(Xt, e);
          }
          function ae(t, e, n) {
            e == Bt ? t.g.call(t.f, n) : t.b && t.b.call(t.f, n);
          }
          (qt.prototype.then = function(t, e, n) {
            return te(this, m(t) ? t : null, m(e) ? e : null, n);
          }),
            (qt.prototype.$goog_Thenable = !0),
            ((t = qt.prototype).ka = function(t, e) {
              return ((t = Jt(t, t, e)).c = !0), Qt(this, t), this;
            }),
            (t.s = function(t, e) {
              return te(this, null, t, e);
            }),
            (t.cancel = function(t) {
              this.a == Ht &&
                Ut(function() {
                  !(function t(e, n) {
                    if (e.a == Ht)
                      if (e.c) {
                        var i = e.c;
                        if (i.b) {
                          for (
                            var r = 0, o = null, a = null, s = i.b;
                            s &&
                            (s.c || (r++, s.a == e && (o = s), !(o && 1 < r)));
                            s = s.next
                          )
                            o || (a = s);
                          o &&
                            (i.a == Ht && 1 == r
                              ? t(i, n)
                              : (a
                                  ? ((r = a).next == i.f && (i.f = r),
                                    (r.next = r.next.next))
                                  : re(i),
                                oe(i, o, Gt, n)));
                        }
                        e.c = null;
                      } else ee(e, Gt, n);
                  })(this, new ue(t));
                }, this);
            }),
            (t.Oc = function(t) {
              (this.a = Ht), ee(this, Bt, t);
            }),
            (t.Pc = function(t) {
              (this.a = Ht), ee(this, Gt, t);
            }),
            (t.Zb = function() {
              for (var t; (t = re(this)); ) oe(this, t, this.a, this.i);
              this.h = !1;
            });
          var se = Mt;
          function ue(t) {
            S.call(this, t);
          }
          function ce() {
            (this.va = this.va), (this.la = this.la);
          }
          k(ue, S);
          var he = 0;
          function le(t) {
            if (!t.va && ((t.va = !0), t.za(), 0 != he)) t[e] || (t[e] = ++b);
          }
          function fe(t) {
            return fe[' '](t), t;
          }
          (ce.prototype.va = !(ue.prototype.name = 'cancel')),
            (ce.prototype.za = function() {
              if (this.la) for (; this.la.length; ) this.la.shift()();
            }),
            (fe[' '] = d);
          var de,
            pe,
            ve = St('Opera'),
            me = St('Trident') || St('MSIE'),
            ge = St('Edge'),
            be = ge || me,
            ye =
              St('Gecko') &&
              !(vt(It.toLowerCase(), 'webkit') && !St('Edge')) &&
              !(St('Trident') || St('MSIE')) &&
              !St('Edge'),
            we = vt(It.toLowerCase(), 'webkit') && !St('Edge');
          function Ie() {
            var t = l.document;
            return t ? t.documentMode : void 0;
          }
          t: {
            var Te = '',
              Ee =
                ((pe = It),
                ye
                  ? /rv:([^\);]+)(\)|;)/.exec(pe)
                  : ge
                  ? /Edge\/([\d\.]+)/.exec(pe)
                  : me
                  ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(pe)
                  : we
                  ? /WebKit\/(\S+)/.exec(pe)
                  : ve
                  ? /(?:Version)[ \/]?(\S+)/.exec(pe)
                  : void 0);
            if ((Ee && (Te = Ee ? Ee[1] : ''), me)) {
              var ke = Ie();
              if (null != ke && ke > parseFloat(Te)) {
                de = String(ke);
                break t;
              }
            }
            de = Te;
          }
          var Ae,
            Se = {};
          function Ne(s) {
            return (function(t, e) {
              var n = Se;
              return Object.prototype.hasOwnProperty.call(n, t)
                ? n[t]
                : (n[t] = e(t));
            })(s, function() {
              for (
                var t = 0,
                  e = st(String(de)).split('.'),
                  n = st(String(s)).split('.'),
                  i = Math.max(e.length, n.length),
                  r = 0;
                0 == t && r < i;
                r++
              ) {
                var o = e[r] || '',
                  a = n[r] || '';
                do {
                  if (
                    ((o = /(\d*)(\D*)(.*)/.exec(o) || ['', '', '', '']),
                    (a = /(\d*)(\D*)(.*)/.exec(a) || ['', '', '', '']),
                    0 == o[0].length && 0 == a[0].length)
                  )
                    break;
                  (t =
                    mt(
                      0 == o[1].length ? 0 : parseInt(o[1], 10),
                      0 == a[1].length ? 0 : parseInt(a[1], 10),
                    ) ||
                    mt(0 == o[2].length, 0 == a[2].length) ||
                    mt(o[2], a[2])),
                    (o = o[3]),
                    (a = a[3]);
                } while (0 == t);
              }
              return 0 <= t;
            });
          }
          Ae = l.document && me ? Ie() : void 0;
          var Oe =
              Object.freeze ||
              function(t) {
                return t;
              },
            _e = !me || 9 <= Number(Ae),
            Pe = me && !Ne('9'),
            Re = (function() {
              if (!l.addEventListener || !Object.defineProperty) return !1;
              var t = !1,
                e = Object.defineProperty({}, 'passive', {
                  get: function() {
                    t = !0;
                  },
                });
              try {
                l.addEventListener('test', d, e),
                  l.removeEventListener('test', d, e);
              } catch (t) {}
              return t;
            })();
          function Ce(t, e) {
            (this.type = t), (this.b = this.target = e), (this.Mb = !0);
          }
          function De(t, e) {
            if (
              (Ce.call(this, t ? t.type : ''),
              (this.relatedTarget = this.b = this.target = null),
              (this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0),
              (this.key = ''),
              (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
              (this.pointerId = 0),
              (this.pointerType = ''),
              (this.a = null),
              t)
            ) {
              var n = (this.type = t.type),
                i =
                  t.changedTouches && t.changedTouches.length
                    ? t.changedTouches[0]
                    : null;
              if (
                ((this.target = t.target || t.srcElement),
                (this.b = e),
                (e = t.relatedTarget))
              ) {
                if (ye) {
                  t: {
                    try {
                      fe(e.nodeName);
                      var r = !0;
                      break t;
                    } catch (t) {}
                    r = !1;
                  }
                  r || (e = null);
                }
              } else
                'mouseover' == n
                  ? (e = t.fromElement)
                  : 'mouseout' == n && (e = t.toElement);
              (this.relatedTarget = e),
                i
                  ? ((this.clientX =
                      void 0 !== i.clientX ? i.clientX : i.pageX),
                    (this.clientY = void 0 !== i.clientY ? i.clientY : i.pageY),
                    (this.screenX = i.screenX || 0),
                    (this.screenY = i.screenY || 0))
                  : ((this.clientX =
                      void 0 !== t.clientX ? t.clientX : t.pageX),
                    (this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY),
                    (this.screenX = t.screenX || 0),
                    (this.screenY = t.screenY || 0)),
                (this.button = t.button),
                (this.key = t.key || ''),
                (this.ctrlKey = t.ctrlKey),
                (this.altKey = t.altKey),
                (this.shiftKey = t.shiftKey),
                (this.metaKey = t.metaKey),
                (this.pointerId = t.pointerId || 0),
                (this.pointerType = h(t.pointerType)
                  ? t.pointerType
                  : Le[t.pointerType] || ''),
                (this.a = t).defaultPrevented && this.preventDefault();
            }
          }
          (Ce.prototype.preventDefault = function() {
            this.Mb = !1;
          }),
            k(De, Ce);
          var Le = Oe({ 2: 'touch', 3: 'pen', 4: 'mouse' });
          (De.prototype.preventDefault = function() {
            De.qb.preventDefault.call(this);
            var t = this.a;
            if (t.preventDefault) t.preventDefault();
            else if (((t.returnValue = !1), Pe))
              try {
                (t.ctrlKey || (112 <= t.keyCode && t.keyCode <= 123)) &&
                  (t.keyCode = -1);
              } catch (t) {}
          }),
            (De.prototype.f = function() {
              return this.a;
            });
          var xe = 'closure_listenable_' + ((1e6 * Math.random()) | 0),
            Me = 0;
          function je(t, e, n, i, r) {
            (this.listener = t),
              (this.proxy = null),
              (this.src = e),
              (this.type = n),
              (this.capture = !!i),
              (this.Pa = r),
              (this.key = ++Me),
              (this.ta = this.Ka = !1);
          }
          function Ue(t) {
            (t.ta = !0),
              (t.listener = null),
              (t.proxy = null),
              (t.src = null),
              (t.Pa = null);
          }
          function Ve(t) {
            (this.src = t), (this.a = {}), (this.b = 0);
          }
          function Fe(t, e) {
            var n = e.type;
            n in t.a &&
              F(t.a[n], e) &&
              (Ue(e), 0 == t.a[n].length && (delete t.a[n], t.b--));
          }
          function Ke(t, e, n, i) {
            for (var r = 0; r < t.length; ++r) {
              var o = t[r];
              if (!o.ta && o.listener == e && o.capture == !!n && o.Pa == i)
                return r;
            }
            return -1;
          }
          Ve.prototype.add = function(t, e, n, i, r) {
            var o = t.toString();
            (t = this.a[o]) || ((t = this.a[o] = []), this.b++);
            var a = Ke(t, e, i, r);
            return (
              -1 < a
                ? ((e = t[a]), n || (e.Ka = !1))
                : (((e = new je(e, this.src, o, !!i, r)).Ka = n), t.push(e)),
              e
            );
          };
          var qe = 'closure_lm_' + ((1e6 * Math.random()) | 0),
            He = {};
          function Be(t, e, n, i, r) {
            if (i && i.once) We(t, e, n, i, r);
            else if (p(e))
              for (var o = 0; o < e.length; o++) Be(t, e[o], n, i, r);
            else
              (n = en(n)),
                t && t[xe]
                  ? rn(t, e, n, g(i) ? !!i.capture : !!i, r)
                  : Ge(t, e, n, !1, i, r);
          }
          function Ge(t, e, n, i, r, o) {
            if (!e) throw Error('Invalid event type');
            var a = g(r) ? !!r.capture : !!r,
              s = Qe(t);
            if (
              (s || (t[qe] = s = new Ve(t)), !(n = s.add(e, n, i, a, o)).proxy)
            )
              if (
                ((i = (function() {
                  var e = Ze,
                    n = _e
                      ? function(t) {
                          return e.call(n.src, n.listener, t);
                        }
                      : function(t) {
                          if (!(t = e.call(n.src, n.listener, t))) return t;
                        };
                  return n;
                })()),
                ((n.proxy = i).src = t),
                (i.listener = n),
                t.addEventListener)
              )
                Re || (r = a),
                  void 0 === r && (r = !1),
                  t.addEventListener(e.toString(), i, r);
              else if (t.attachEvent) t.attachEvent(Ye(e.toString()), i);
              else {
                if (!t.addListener || !t.removeListener)
                  throw Error(
                    'addEventListener and attachEvent are unavailable.',
                  );
                t.addListener(i);
              }
          }
          function We(t, e, n, i, r) {
            if (p(e)) for (var o = 0; o < e.length; o++) We(t, e[o], n, i, r);
            else
              (n = en(n)),
                t && t[xe]
                  ? on(t, e, n, g(i) ? !!i.capture : !!i, r)
                  : Ge(t, e, n, !0, i, r);
          }
          function Xe(t, e, n, i, r) {
            if (p(e)) for (var o = 0; o < e.length; o++) Xe(t, e[o], n, i, r);
            else
              (i = g(i) ? !!i.capture : !!i),
                (n = en(n)),
                t && t[xe]
                  ? ((t = t.u),
                    (e = String(e).toString()) in t.a &&
                      -1 < (n = Ke((o = t.a[e]), n, i, r)) &&
                      (Ue(o[n]),
                      Array.prototype.splice.call(o, n, 1),
                      0 == o.length && (delete t.a[e], t.b--)))
                  : (t = t && Qe(t)) &&
                    ((e = t.a[e.toString()]),
                    (t = -1),
                    e && (t = Ke(e, n, i, r)),
                    (n = -1 < t ? e[t] : null) && Je(n));
          }
          function Je(t) {
            if ('number' != typeof t && t && !t.ta) {
              var e = t.src;
              if (e && e[xe]) Fe(e.u, t);
              else {
                var n = t.type,
                  i = t.proxy;
                e.removeEventListener
                  ? e.removeEventListener(n, i, t.capture)
                  : e.detachEvent
                  ? e.detachEvent(Ye(n), i)
                  : e.addListener && e.removeListener && e.removeListener(i),
                  (n = Qe(e))
                    ? (Fe(n, t), 0 == n.b && ((n.src = null), (e[qe] = null)))
                    : Ue(t);
              }
            }
          }
          function Ye(t) {
            return t in He ? He[t] : (He[t] = 'on' + t);
          }
          function ze(t, e, n, i) {
            var r = !0;
            if ((t = Qe(t)) && (e = t.a[e.toString()]))
              for (e = e.concat(), t = 0; t < e.length; t++) {
                var o = e[t];
                o &&
                  o.capture == n &&
                  !o.ta &&
                  ((o = $e(o, i)), (r = r && !1 !== o));
              }
            return r;
          }
          function $e(t, e) {
            var n = t.listener,
              i = t.Pa || t.src;
            return t.Ka && Je(t), n.call(i, e);
          }
          function Ze(t, e) {
            if (t.ta) return !0;
            if (_e) return $e(t, new De(e, this));
            if (!e)
              t: {
                e = ['window', 'event'];
                for (var n = l, i = 0; i < e.length; i++)
                  if (null == (n = n[e[i]])) {
                    e = null;
                    break t;
                  }
                e = n;
              }
            if (
              ((e = new De((i = e), this)),
              (n = !0),
              !(i.keyCode < 0 || null != i.returnValue))
            ) {
              t: {
                var r = !1;
                if (0 == i.keyCode)
                  try {
                    i.keyCode = -1;
                    break t;
                  } catch (t) {
                    r = !0;
                  }
                (!r && null != i.returnValue) || (i.returnValue = !0);
              }
              for (i = [], r = e.b; r; r = r.parentNode) i.push(r);
              for (t = t.type, r = i.length - 1; 0 <= r; r--) {
                e.b = i[r];
                var o = ze(i[r], t, !0, e);
                n = n && o;
              }
              for (r = 0; r < i.length; r++)
                (e.b = i[r]), (o = ze(i[r], t, !1, e)), (n = n && o);
            }
            return n;
          }
          function Qe(t) {
            return (t = t[qe]) instanceof Ve ? t : null;
          }
          var tn = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0);
          function en(e) {
            return m(e)
              ? e
              : (e[tn] ||
                  (e[tn] = function(t) {
                    return e.handleEvent(t);
                  }),
                e[tn]);
          }
          function nn() {
            ce.call(this),
              (this.u = new Ve(this)),
              ((this.Sb = this).Xa = null);
          }
          function rn(t, e, n, i, r) {
            t.u.add(String(e), n, !1, i, r);
          }
          function on(t, e, n, i, r) {
            t.u.add(String(e), n, !0, i, r);
          }
          function an(t, e, n, i) {
            if (!(e = t.u.a[String(e)])) return !0;
            e = e.concat();
            for (var r = !0, o = 0; o < e.length; ++o) {
              var a = e[o];
              if (a && !a.ta && a.capture == n) {
                var s = a.listener,
                  u = a.Pa || a.src;
                a.Ka && Fe(t.u, a), (r = !1 !== s.call(u, i) && r);
              }
            }
            return r && 0 != i.Mb;
          }
          function sn(t, e, n) {
            if (m(t)) n && (t = I(t, n));
            else {
              if (!t || 'function' != typeof t.handleEvent)
                throw Error('Invalid listener argument');
              t = I(t.handleEvent, t);
            }
            return 2147483647 < Number(e) ? -1 : l.setTimeout(t, e || 0);
          }
          function un(n) {
            var i = null;
            return new qt(function(t, e) {
              -1 ==
                (i = sn(function() {
                  t(void 0);
                }, n)) && e(Error('Failed to schedule timer.'));
            }).s(function(t) {
              throw (l.clearTimeout(i), t);
            });
          }
          function cn(t) {
            if (t.U && 'function' == typeof t.U) return t.U();
            if (h(t)) return t.split('');
            if (v(t)) {
              for (var e = [], n = t.length, i = 0; i < n; i++) e.push(t[i]);
              return e;
            }
            for (i in ((e = []), (n = 0), t)) e[n++] = t[i];
            return e;
          }
          function hn(t) {
            if (t.X && 'function' == typeof t.X) return t.X();
            if (!t.U || 'function' != typeof t.U) {
              if (v(t) || h(t)) {
                var e = [];
                t = t.length;
                for (var n = 0; n < t; n++) e.push(n);
                return e;
              }
              for (var i in ((e = []), (n = 0), t)) e[n++] = i;
              return e;
            }
          }
          function ln(t, e) {
            (this.b = {}), (this.a = []), (this.c = 0);
            var n = arguments.length;
            if (1 < n) {
              if (n % 2) throw Error('Uneven number of arguments');
              for (var i = 0; i < n; i += 2)
                this.set(arguments[i], arguments[i + 1]);
            } else if (t)
              if (t instanceof ln)
                for (n = t.X(), i = 0; i < n.length; i++)
                  this.set(n[i], t.get(n[i]));
              else for (i in t) this.set(i, t[i]);
          }
          function fn(t) {
            if (t.c != t.a.length) {
              for (var e = 0, n = 0; e < t.a.length; ) {
                var i = t.a[e];
                dn(t.b, i) && (t.a[n++] = i), e++;
              }
              t.a.length = n;
            }
            if (t.c != t.a.length) {
              var r = {};
              for (n = e = 0; e < t.a.length; )
                dn(r, (i = t.a[e])) || (r[(t.a[n++] = i)] = 1), e++;
              t.a.length = n;
            }
          }
          function dn(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }
          k(nn, ce),
            (nn.prototype[xe] = !0),
            (nn.prototype.addEventListener = function(t, e, n, i) {
              Be(this, t, e, n, i);
            }),
            (nn.prototype.removeEventListener = function(t, e, n, i) {
              Xe(this, t, e, n, i);
            }),
            (nn.prototype.dispatchEvent = function(t) {
              var e,
                n = this.Xa;
              if (n) for (e = []; n; n = n.Xa) e.push(n);
              n = this.Sb;
              var i = t.type || t;
              if (h(t)) t = new Ce(t, n);
              else if (t instanceof Ce) t.target = t.target || n;
              else {
                var r = t;
                J((t = new Ce(i, n)), r);
              }
              if (((r = !0), e))
                for (var o = e.length - 1; 0 <= o; o--) {
                  var a = (t.b = e[o]);
                  r = an(a, i, !0, t) && r;
                }
              if (
                ((r = an((a = t.b = n), i, !0, t) && r),
                (r = an(a, i, !1, t) && r),
                e)
              )
                for (o = 0; o < e.length; o++)
                  r = an((a = t.b = e[o]), i, !1, t) && r;
              return r;
            }),
            (nn.prototype.za = function() {
              if ((nn.qb.za.call(this), this.u)) {
                var t,
                  e = this.u;
                for (t in e.a) {
                  for (var n = e.a[t], i = 0; i < n.length; i++) Ue(n[i]);
                  delete e.a[t], e.b--;
                }
              }
              this.Xa = null;
            }),
            ((t = ln.prototype).U = function() {
              fn(this);
              for (var t = [], e = 0; e < this.a.length; e++)
                t.push(this.b[this.a[e]]);
              return t;
            }),
            (t.X = function() {
              return fn(this), this.a.concat();
            }),
            (t.clear = function() {
              (this.b = {}), (this.c = this.a.length = 0);
            }),
            (t.get = function(t, e) {
              return dn(this.b, t) ? this.b[t] : e;
            }),
            (t.set = function(t, e) {
              dn(this.b, t) || (this.c++, this.a.push(t)), (this.b[t] = e);
            }),
            (t.forEach = function(t, e) {
              for (var n = this.X(), i = 0; i < n.length; i++) {
                var r = n[i],
                  o = this.get(r);
                t.call(e, o, r, this);
              }
            });
          var pn = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
          function vn(t, e) {
            var n;
            (this.b = this.i = this.f = ''),
              (this.l = null),
              (this.g = this.c = ''),
              (this.h = !1),
              t instanceof vn
                ? ((this.h = void 0 !== e ? e : t.h),
                  mn(this, t.f),
                  (this.i = t.i),
                  (this.b = t.b),
                  gn(this, t.l),
                  (this.c = t.c),
                  bn(this, jn(t.a)),
                  (this.g = t.g))
                : t && (n = String(t).match(pn))
                ? ((this.h = !!e),
                  mn(this, n[1] || '', !0),
                  (this.i = En(n[2] || '')),
                  (this.b = En(n[3] || '', !0)),
                  gn(this, n[4]),
                  (this.c = En(n[5] || '', !0)),
                  bn(this, n[6] || '', !0),
                  (this.g = En(n[7] || '')))
                : ((this.h = !!e), (this.a = new Rn(null, this.h)));
          }
          function mn(t, e, n) {
            (t.f = n ? En(e, !0) : e), t.f && (t.f = t.f.replace(/:$/, ''));
          }
          function gn(t, e) {
            if (e) {
              if (((e = Number(e)), isNaN(e) || e < 0))
                throw Error('Bad port number ' + e);
              t.l = e;
            } else t.l = null;
          }
          function bn(t, e, n) {
            e instanceof Rn
              ? ((t.a = e),
                (function(t, e) {
                  e &&
                    !t.f &&
                    (Cn(t),
                    (t.c = null),
                    t.a.forEach(function(t, e) {
                      var n = e.toLowerCase();
                      e != n && (Ln(this, e), Mn(this, n, t));
                    }, t)),
                    (t.f = e);
                })(t.a, t.h))
              : (n || (e = kn(e, _n)), (t.a = new Rn(e, t.h)));
          }
          function yn(t, e, n) {
            t.a.set(e, n);
          }
          function wn(t, e) {
            return t.a.get(e);
          }
          function In(t) {
            return t instanceof vn ? new vn(t) : new vn(t, void 0);
          }
          function Tn(t, e) {
            var n = new vn(null, void 0);
            return mn(n, 'https'), t && (n.b = t), e && (n.c = e), n;
          }
          function En(t, e) {
            return t
              ? e
                ? decodeURI(t.replace(/%25/g, '%2525'))
                : decodeURIComponent(t)
              : '';
          }
          function kn(t, e, n) {
            return h(t)
              ? ((t = encodeURI(t).replace(e, An)),
                n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
                t)
              : null;
          }
          function An(t) {
            return (
              '%' +
              (((t = t.charCodeAt(0)) >> 4) & 15).toString(16) +
              (15 & t).toString(16)
            );
          }
          (vn.prototype.toString = function() {
            var t = [],
              e = this.f;
            e && t.push(kn(e, Sn, !0), ':');
            var n = this.b;
            return (
              (!n && 'file' != e) ||
                (t.push('//'),
                (e = this.i) && t.push(kn(e, Sn, !0), '@'),
                t.push(
                  encodeURIComponent(String(n)).replace(
                    /%25([0-9a-fA-F]{2})/g,
                    '%$1',
                  ),
                ),
                null != (n = this.l) && t.push(':', String(n))),
              (n = this.c) &&
                (this.b && '/' != n.charAt(0) && t.push('/'),
                t.push(kn(n, '/' == n.charAt(0) ? On : Nn, !0))),
              (n = this.a.toString()) && t.push('?', n),
              (n = this.g) && t.push('#', kn(n, Pn)),
              t.join('')
            );
          }),
            (vn.prototype.resolve = function(t) {
              var e = new vn(this),
                n = !!t.f;
              n ? mn(e, t.f) : (n = !!t.i),
                n ? (e.i = t.i) : (n = !!t.b),
                n ? (e.b = t.b) : (n = null != t.l);
              var i = t.c;
              if (n) gn(e, t.l);
              else if ((n = !!t.c)) {
                if ('/' != i.charAt(0))
                  if (this.b && !this.c) i = '/' + i;
                  else {
                    var r = e.c.lastIndexOf('/');
                    -1 != r && (i = e.c.substr(0, r + 1) + i);
                  }
                if ('..' == (r = i) || '.' == r) i = '';
                else if (vt(r, './') || vt(r, '/.')) {
                  (i = 0 == r.lastIndexOf('/', 0)), (r = r.split('/'));
                  for (var o = [], a = 0; a < r.length; ) {
                    var s = r[a++];
                    '.' == s
                      ? i && a == r.length && o.push('')
                      : '..' == s
                      ? ((1 < o.length || (1 == o.length && '' != o[0])) &&
                          o.pop(),
                        i && a == r.length && o.push(''))
                      : (o.push(s), (i = !0));
                  }
                  i = o.join('/');
                } else i = r;
              }
              return (
                n ? (e.c = i) : (n = '' !== t.a.toString()),
                n ? bn(e, jn(t.a)) : (n = !!t.g),
                n && (e.g = t.g),
                e
              );
            });
          var Sn = /[#\/\?@]/g,
            Nn = /[#\?:]/g,
            On = /[#\?]/g,
            _n = /[#\?@]/g,
            Pn = /#/g;
          function Rn(t, e) {
            (this.b = this.a = null), (this.c = t || null), (this.f = !!e);
          }
          function Cn(n) {
            n.a ||
              ((n.a = new ln()),
              (n.b = 0),
              n.c &&
                (function(t, e) {
                  if (t) {
                    t = t.split('&');
                    for (var n = 0; n < t.length; n++) {
                      var i = t[n].indexOf('='),
                        r = null;
                      if (0 <= i) {
                        var o = t[n].substring(0, i);
                        r = t[n].substring(i + 1);
                      } else o = t[n];
                      e(o, r ? decodeURIComponent(r.replace(/\+/g, ' ')) : '');
                    }
                  }
                })(n.c, function(t, e) {
                  n.add(decodeURIComponent(t.replace(/\+/g, ' ')), e);
                }));
          }
          function Dn(t) {
            var e = hn(t);
            if (void 0 === e) throw Error('Keys are undefined');
            var n = new Rn(null, void 0);
            t = cn(t);
            for (var i = 0; i < e.length; i++) {
              var r = e[i],
                o = t[i];
              p(o) ? Mn(n, r, o) : n.add(r, o);
            }
            return n;
          }
          function Ln(t, e) {
            Cn(t),
              (e = Un(t, e)),
              dn(t.a.b, e) &&
                ((t.c = null),
                (t.b -= t.a.get(e).length),
                dn((t = t.a).b, e) &&
                  (delete t.b[e], t.c--, t.a.length > 2 * t.c && fn(t)));
          }
          function xn(t, e) {
            return Cn(t), (e = Un(t, e)), dn(t.a.b, e);
          }
          function Mn(t, e, n) {
            Ln(t, e),
              0 < n.length &&
                ((t.c = null), t.a.set(Un(t, e), H(n)), (t.b += n.length));
          }
          function jn(t) {
            var e = new Rn();
            return (e.c = t.c), t.a && ((e.a = new ln(t.a)), (e.b = t.b)), e;
          }
          function Un(t, e) {
            return (e = String(e)), t.f && (e = e.toLowerCase()), e;
          }
          ((t = Rn.prototype).add = function(t, e) {
            Cn(this), (this.c = null), (t = Un(this, t));
            var n = this.a.get(t);
            return n || this.a.set(t, (n = [])), n.push(e), (this.b += 1), this;
          }),
            (t.clear = function() {
              (this.a = this.c = null), (this.b = 0);
            }),
            (t.forEach = function(n, i) {
              Cn(this),
                this.a.forEach(function(t, e) {
                  M(
                    t,
                    function(t) {
                      n.call(i, t, e, this);
                    },
                    this,
                  );
                }, this);
            }),
            (t.X = function() {
              Cn(this);
              for (
                var t = this.a.U(), e = this.a.X(), n = [], i = 0;
                i < e.length;
                i++
              )
                for (var r = t[i], o = 0; o < r.length; o++) n.push(e[i]);
              return n;
            }),
            (t.U = function(t) {
              Cn(this);
              var e = [];
              if (h(t)) xn(this, t) && (e = q(e, this.a.get(Un(this, t))));
              else {
                t = this.a.U();
                for (var n = 0; n < t.length; n++) e = q(e, t[n]);
              }
              return e;
            }),
            (t.set = function(t, e) {
              return (
                Cn(this),
                (this.c = null),
                xn(this, (t = Un(this, t))) && (this.b -= this.a.get(t).length),
                this.a.set(t, [e]),
                (this.b += 1),
                this
              );
            }),
            (t.get = function(t, e) {
              return t && 0 < (t = this.U(t)).length ? String(t[0]) : e;
            }),
            (t.toString = function() {
              if (this.c) return this.c;
              if (!this.a) return '';
              for (var t = [], e = this.a.X(), n = 0; n < e.length; n++) {
                var i = e[n],
                  r = encodeURIComponent(String(i));
                i = this.U(i);
                for (var o = 0; o < i.length; o++) {
                  var a = r;
                  '' !== i[o] && (a += '=' + encodeURIComponent(String(i[o]))),
                    t.push(a);
                }
              }
              return (this.c = t.join('&'));
            });
          var Vn = !me || 9 <= Number(Ae);
          function Fn(t) {
            var e = document;
            return h(t) ? e.getElementById(t) : t;
          }
          function Kn(n, t) {
            B(t, function(t, e) {
              t && 'object' == typeof t && t.qa && (t = t.pa()),
                'style' == e
                  ? (n.style.cssText = t)
                  : 'class' == e
                  ? (n.className = t)
                  : 'for' == e
                  ? (n.htmlFor = t)
                  : qn.hasOwnProperty(e)
                  ? n.setAttribute(qn[e], t)
                  : 0 == e.lastIndexOf('aria-', 0) ||
                    0 == e.lastIndexOf('data-', 0)
                  ? n.setAttribute(e, t)
                  : (n[e] = t);
            });
          }
          var qn = {
            cellpadding: 'cellPadding',
            cellspacing: 'cellSpacing',
            colspan: 'colSpan',
            frameborder: 'frameBorder',
            height: 'height',
            maxlength: 'maxLength',
            nonce: 'nonce',
            role: 'role',
            rowspan: 'rowSpan',
            type: 'type',
            usemap: 'useMap',
            valign: 'vAlign',
            width: 'width',
          };
          function Hn(t, e, n) {
            var i = arguments,
              r = document,
              o = String(i[0]),
              a = i[1];
            if (!Vn && a && (a.name || a.type)) {
              if (
                ((o = ['<', o]),
                a.name && o.push(' name="', xt(a.name), '"'),
                a.type)
              ) {
                o.push(' type="', xt(a.type), '"');
                var s = {};
                J(s, a), delete s.type, (a = s);
              }
              o.push('>'), (o = o.join(''));
            }
            return (
              (o = r.createElement(o)),
              a &&
                (h(a)
                  ? (o.className = a)
                  : p(a)
                  ? (o.className = a.join(' '))
                  : Kn(o, a)),
              2 < i.length &&
                (function(e, n, t) {
                  function i(t) {
                    t && n.appendChild(h(t) ? e.createTextNode(t) : t);
                  }
                  for (var r = 2; r < t.length; r++) {
                    var o = t[r];
                    !v(o) || (g(o) && 0 < o.nodeType)
                      ? i(o)
                      : M(Bn(o) ? H(o) : o, i);
                  }
                })(r, o, i),
              o
            );
          }
          function Bn(t) {
            if (t && 'number' == typeof t.length) {
              if (g(t))
                return 'function' == typeof t.item || 'string' == typeof t.item;
              if (m(t)) return 'function' == typeof t.item;
            }
            return !1;
          }
          function Gn(t) {
            var e = [];
            return (
              (function t(e, n, i) {
                if (null == n) i.push('null');
                else {
                  if ('object' == typeof n) {
                    if (p(n)) {
                      var r = n;
                      (n = r.length), i.push('[');
                      for (var o = '', a = 0; a < n; a++)
                        i.push(o), t(e, r[a], i), (o = ',');
                      return void i.push(']');
                    }
                    if (
                      !(
                        n instanceof String ||
                        n instanceof Number ||
                        n instanceof Boolean
                      )
                    ) {
                      for (r in (i.push('{'), (o = ''), n))
                        Object.prototype.hasOwnProperty.call(n, r) &&
                          'function' != typeof (a = n[r]) &&
                          (i.push(o),
                          Yn(r, i),
                          i.push(':'),
                          t(e, a, i),
                          (o = ','));
                      return void i.push('}');
                    }
                    n = n.valueOf();
                  }
                  switch (typeof n) {
                    case 'string':
                      Yn(n, i);
                      break;
                    case 'number':
                      i.push(isFinite(n) && !isNaN(n) ? String(n) : 'null');
                      break;
                    case 'boolean':
                      i.push(String(n));
                      break;
                    case 'function':
                      i.push('null');
                      break;
                    default:
                      throw Error('Unknown type: ' + typeof n);
                  }
                }
              })(new Wn(), t, e),
              e.join('')
            );
          }
          function Wn() {}
          var Xn = {
              '"': '\\"',
              '\\': '\\\\',
              '/': '\\/',
              '\b': '\\b',
              '\f': '\\f',
              '\n': '\\n',
              '\r': '\\r',
              '\t': '\\t',
              '\v': '\\u000b',
            },
            Jn = /\uffff/.test('￿')
              ? /[\\"\x00-\x1f\x7f-\uffff]/g
              : /[\\"\x00-\x1f\x7f-\xff]/g;
          function Yn(t, e) {
            e.push(
              '"',
              t.replace(Jn, function(t) {
                var e = Xn[t];
                return (
                  e ||
                    ((e =
                      '\\u' + (65536 | t.charCodeAt(0)).toString(16).substr(1)),
                    (Xn[t] = e)),
                  e
                );
              }),
              '"',
            );
          }
          function zn() {
            var t = vi();
            return (me && !!Ae && 11 == Ae) || /Edge\/\d+/.test(t);
          }
          function $n() {
            return (
              (l.window && l.window.location.href) ||
              (self && self.location && self.location.href) ||
              ''
            );
          }
          function Zn(t, e) {
            e = e || l.window;
            var n = 'about:blank';
            t && (n = bt(wt(t)).toString()), (e.location.href = n);
          }
          function Qn(t) {
            return !!(
              (t = (t || vi()).toLowerCase()).match(/android/) ||
              t.match(/webos/) ||
              t.match(/iphone|ipad|ipod/) ||
              t.match(/blackberry/) ||
              t.match(/windows phone/) ||
              t.match(/iemobile/)
            );
          }
          function ti(t) {
            t = t || l.window;
            try {
              t.close();
            } catch (t) {}
          }
          function ei(t, e, n) {
            var i = Math.floor(1e9 * Math.random()).toString();
            (e = e || 500), (n = n || 600);
            var r = (window.screen.availHeight - n) / 2,
              o = (window.screen.availWidth - e) / 2;
            for (a in ((e = {
              width: e,
              height: n,
              top: 0 < r ? r : 0,
              left: 0 < o ? o : 0,
              location: !0,
              resizable: !0,
              statusbar: !0,
              toolbar: !1,
            }),
            (n = vi().toLowerCase()),
            i && ((e.target = i), vt(n, 'crios/') && (e.target = '_blank')),
            fi(vi()) == hi &&
              ((t = t || 'http://localhost'), (e.scrollbars = !0)),
            (n = t || ''),
            (t = e) || (t = {}),
            (i = window),
            (e =
              n instanceof gt ? n : wt(void 0 !== n.href ? n.href : String(n))),
            (n = t.target || n.target),
            (r = []),
            t))
              switch (a) {
                case 'width':
                case 'height':
                case 'top':
                case 'left':
                  r.push(a + '=' + t[a]);
                  break;
                case 'target':
                case 'noopener':
                case 'noreferrer':
                  break;
                default:
                  r.push(a + '=' + (t[a] ? 1 : 0));
              }
            var a = r.join(',');
            if (
              (((St('iPhone') && !St('iPod') && !St('iPad')) ||
                St('iPad') ||
                St('iPod')) &&
              i.navigator &&
              i.navigator.standalone &&
              n &&
              '_self' != n
                ? (L((a = i.document.createElement('A')), 'HTMLAnchorElement'),
                  e instanceof gt ||
                    e instanceof gt ||
                    ((e = 'object' == typeof e && e.qa ? e.pa() : String(e)),
                    yt.test(e) || (e = 'about:invalid#zClosurez'),
                    (e = Et(e))),
                  (a.href = bt(e)),
                  a.setAttribute('target', n),
                  t.noreferrer && a.setAttribute('rel', 'noreferrer'),
                  (t = document.createEvent('MouseEvent')).initMouseEvent(
                    'click',
                    !0,
                    !0,
                    i,
                    1,
                  ),
                  a.dispatchEvent(t),
                  (a = {}))
                : t.noreferrer
                ? ((a = i.open('', n, a)),
                  (t = bt(e).toString()),
                  a &&
                    (be &&
                      vt(t, ';') &&
                      (t = "'" + t.replace(/'/g, '%27') + "'"),
                    (a.opener = null),
                    (t = Pt(
                      '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' +
                        xt(t) +
                        '">',
                    )),
                    a.document.write(Ot(t)),
                    a.document.close()))
                : (a = i.open(bt(e).toString(), n, a)) &&
                  t.noopener &&
                  (a.opener = null),
              a)
            )
              try {
                a.focus();
              } catch (t) {}
            return a;
          }
          var ni = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
            ii = /^[^@]+@[^@]+$/;
          function ri() {
            var e = null;
            return new qt(function(t) {
              'complete' == l.document.readyState
                ? t()
                : ((e = function() {
                    t();
                  }),
                  We(window, 'load', e));
            }).s(function(t) {
              throw (Xe(window, 'load', e), t);
            });
          }
          function oi(t) {
            return (
              (t = t || vi()),
              !(
                ('file:' !== wi() && 'ionic:' !== wi()) ||
                !t.toLowerCase().match(/iphone|ipad|ipod|android/)
              )
            );
          }
          function ai() {
            var t = l.window;
            try {
              return !(!t || t == t.top);
            } catch (t) {
              return !1;
            }
          }
          function si() {
            return (
              void 0 !== l.WorkerGlobalScope &&
              'function' == typeof l.importScripts
            );
          }
          function ui() {
            return fl.INTERNAL.hasOwnProperty('reactNative')
              ? 'ReactNative'
              : fl.INTERNAL.hasOwnProperty('node')
              ? 'Node'
              : si()
              ? 'Worker'
              : 'Browser';
          }
          function ci() {
            var t = ui();
            return 'ReactNative' === t || 'Node' === t;
          }
          var hi = 'Firefox',
            li = 'Chrome';
          function fi(t) {
            var e = t.toLowerCase();
            return vt(e, 'opera/') || vt(e, 'opr/') || vt(e, 'opios/')
              ? 'Opera'
              : vt(e, 'iemobile')
              ? 'IEMobile'
              : vt(e, 'msie') || vt(e, 'trident/')
              ? 'IE'
              : vt(e, 'edge/')
              ? 'Edge'
              : vt(e, 'firefox/')
              ? hi
              : vt(e, 'silk/')
              ? 'Silk'
              : vt(e, 'blackberry')
              ? 'Blackberry'
              : vt(e, 'webos')
              ? 'Webos'
              : !vt(e, 'safari/') ||
                vt(e, 'chrome/') ||
                vt(e, 'crios/') ||
                vt(e, 'android')
              ? (!vt(e, 'chrome/') && !vt(e, 'crios/')) || vt(e, 'edge/')
                ? vt(e, 'android')
                  ? 'Android'
                  : (t = t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) &&
                    2 == t.length
                  ? t[1]
                  : 'Other'
                : li
              : 'Safari';
          }
          var di = { Wc: 'FirebaseCore-web', Yc: 'FirebaseUI-web' };
          function pi(t, e) {
            e = e || [];
            var n,
              i = [],
              r = {};
            for (n in di) r[di[n]] = !0;
            for (n = 0; n < e.length; n++)
              void 0 !== r[e[n]] && (delete r[e[n]], i.push(e[n]));
            return (
              i.sort(),
              (e = i).length || (e = ['FirebaseCore-web']),
              'Browser' === (i = ui())
                ? (i = fi((r = vi())))
                : 'Worker' === i && (i = fi((r = vi())) + '-' + i),
              i + '/JsCore/' + t + '/' + e.join(',')
            );
          }
          function vi() {
            return (l.navigator && l.navigator.userAgent) || '';
          }
          function mi(t, e) {
            (t = t.split('.')), (e = e || l);
            for (
              var n = 0;
              n < t.length && 'object' == typeof e && null != e;
              n++
            )
              e = e[t[n]];
            return n != t.length && (e = void 0), e;
          }
          function gi() {
            try {
              var t = l.localStorage,
                e = Ai();
              if (t)
                return (
                  t.setItem(e, '1'), t.removeItem(e), !zn() || !!l.indexedDB
                );
            } catch (t) {
              return si() && !!l.indexedDB;
            }
            return !1;
          }
          function bi() {
            return (
              (yi() || 'chrome-extension:' === wi() || oi()) &&
              !ci() &&
              gi() &&
              !si()
            );
          }
          function yi() {
            return 'http:' === wi() || 'https:' === wi();
          }
          function wi() {
            return (l.location && l.location.protocol) || null;
          }
          function Ii(t) {
            return !Qn((t = t || vi())) && fi(t) != hi;
          }
          function Ti(t) {
            return void 0 === t ? null : Gn(t);
          }
          function Ei(t) {
            var e,
              n = {};
            for (e in t)
              t.hasOwnProperty(e) &&
                null !== t[e] &&
                void 0 !== t[e] &&
                (n[e] = t[e]);
            return n;
          }
          function ki(t) {
            if (null !== t) return JSON.parse(t);
          }
          function Ai(t) {
            return t || Math.floor(1e9 * Math.random()).toString();
          }
          function Si(t) {
            return (
              'Safari' != fi((t = t || vi())) &&
              !t.toLowerCase().match(/iphone|ipad|ipod/)
            );
          }
          function Ni() {
            var t = l.___jsl;
            if (t && t.H)
              for (var e in t.H)
                if (
                  ((t.H[e].r = t.H[e].r || []),
                  (t.H[e].L = t.H[e].L || []),
                  (t.H[e].r = t.H[e].L.concat()),
                  t.CP)
                )
                  for (var n = 0; n < t.CP.length; n++) t.CP[n] = null;
          }
          function Oi(t, e) {
            if (e < t)
              throw Error('Short delay should be less than long delay!');
            (this.a = t),
              (this.c = e),
              (t = vi()),
              (e = ui()),
              (this.b = Qn(t) || 'ReactNative' === e);
          }
          function _i() {
            var t = l.document;
            return (
              !t ||
              void 0 === t.visibilityState ||
              'visible' == t.visibilityState
            );
          }
          function Pi(t) {
            try {
              var e = new Date(parseInt(t, 10));
              if (!isNaN(e.getTime()) && !/[^0-9]/.test(t))
                return e.toUTCString();
            } catch (t) {}
            return null;
          }
          function Ri() {
            return !(
              !mi('fireauth.oauthhelper', l) && !mi('fireauth.iframe', l)
            );
          }
          Oi.prototype.get = function() {
            var t = l.navigator;
            return !t ||
              'boolean' != typeof t.onLine ||
              (!yi() &&
                'chrome-extension:' !== wi() &&
                void 0 === t.connection) ||
              t.onLine
              ? this.b
                ? this.c
                : this.a
              : Math.min(5e3, this.a);
          };
          var Ci,
            Di = {};
          function Li(t) {
            Di[t] ||
              ((Di[t] = !0),
              'undefined' != typeof console &&
                'function' == typeof console.warn &&
                console.warn(t));
          }
          try {
            var xi = {};
            Object.defineProperty(xi, 'abcd', {
              configurable: !0,
              enumerable: !0,
              value: 1,
            }),
              Object.defineProperty(xi, 'abcd', {
                configurable: !0,
                enumerable: !0,
                value: 2,
              }),
              (Ci = 2 == xi.abcd);
          } catch (t) {
            Ci = !1;
          }
          function Mi(t, e, n) {
            Ci
              ? Object.defineProperty(t, e, {
                  configurable: !0,
                  enumerable: !0,
                  value: n,
                })
              : (t[e] = n);
          }
          function ji(t, e) {
            if (e) for (var n in e) e.hasOwnProperty(n) && Mi(t, n, e[n]);
          }
          function Ui(t) {
            var e = {};
            return ji(e, t), e;
          }
          function Vi(t) {
            var e = t;
            if ('object' == typeof t && null != t)
              for (var n in ((e = 'length' in t ? [] : {}), t))
                Mi(e, n, Vi(t[n]));
            return e;
          }
          function Fi(t) {
            var e = {},
              n = t[qi],
              i = t[Hi];
            if (!(t = t[Bi]) || (t != Ki && !n))
              throw Error('Invalid provider user info!');
            (e[Wi] = i || null),
              (e[Gi] = n || null),
              Mi(this, Ji, t),
              Mi(this, Xi, Vi(e));
          }
          var Ki = 'EMAIL_SIGNIN',
            qi = 'email',
            Hi = 'newEmail',
            Bi = 'requestType',
            Gi = 'email',
            Wi = 'fromEmail',
            Xi = 'data',
            Ji = 'operation';
          function Yi(t, e) {
            (this.code = $i + t), (this.message = e || Zi[t] || '');
          }
          function zi(t) {
            var e = t && t.code;
            return e ? new Yi(e.substring($i.length), t.message) : null;
          }
          k(Yi, Error),
            (Yi.prototype.A = function() {
              return { code: this.code, message: this.message };
            }),
            (Yi.prototype.toJSON = function() {
              return this.A();
            });
          var $i = 'auth/',
            Zi = {
              'admin-restricted-operation':
                'This operation is restricted to administrators only.',
              'argument-error': '',
              'app-not-authorized':
                "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
              'app-not-installed':
                'The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.',
              'captcha-check-failed':
                'The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.',
              'code-expired':
                'The SMS code has expired. Please re-send the verification code to try again.',
              'cordova-not-ready': 'Cordova framework is not ready.',
              'cors-unsupported': 'This browser is not supported.',
              'credential-already-in-use':
                'This credential is already associated with a different user account.',
              'custom-token-mismatch':
                'The custom token corresponds to a different audience.',
              'requires-recent-login':
                'This operation is sensitive and requires recent authentication. Log in again before retrying this request.',
              'dynamic-link-not-activated':
                'Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.',
              'email-already-in-use':
                'The email address is already in use by another account.',
              'expired-action-code': 'The action code has expired. ',
              'cancelled-popup-request':
                'This operation has been cancelled due to another conflicting popup being opened.',
              'internal-error': 'An internal error has occurred.',
              'invalid-app-credential':
                'The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.',
              'invalid-app-id':
                'The mobile app identifier is not registed for the current project.',
              'invalid-user-token':
                "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
              'invalid-auth-event': 'An internal error has occurred.',
              'invalid-verification-code':
                'The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.',
              'invalid-continue-uri':
                'The continue URL provided in the request is invalid.',
              'invalid-cordova-configuration':
                'The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.',
              'invalid-custom-token':
                'The custom token format is incorrect. Please check the documentation.',
              'invalid-dynamic-link-domain':
                'The provided dynamic link domain is not configured or authorized for the current project.',
              'invalid-email': 'The email address is badly formatted.',
              'invalid-api-key':
                'Your API key is invalid, please check you have copied it correctly.',
              'invalid-cert-hash':
                'The SHA-1 certificate hash provided is invalid.',
              'invalid-credential':
                'The supplied auth credential is malformed or has expired.',
              'invalid-message-payload':
                'The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.',
              'invalid-oauth-provider':
                'EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.',
              'invalid-oauth-client-id':
                'The OAuth client ID provided is either invalid or does not match the specified API key.',
              'unauthorized-domain':
                'This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.',
              'invalid-action-code':
                'The action code is invalid. This can happen if the code is malformed, expired, or has already been used.',
              'wrong-password':
                'The password is invalid or the user does not have a password.',
              'invalid-persistence-type':
                'The specified persistence type is invalid. It can only be local, session or none.',
              'invalid-phone-number':
                'The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].',
              'invalid-provider-id': 'The specified provider ID is invalid.',
              'invalid-recipient-email':
                'The email corresponding to this action failed to send as the provided recipient email address is invalid.',
              'invalid-sender':
                'The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.',
              'invalid-verification-id':
                'The verification ID used to create the phone auth credential is invalid.',
              'invalid-tenant-id': "The Auth instance's tenant ID is invalid.",
              'missing-android-pkg-name':
                'An Android Package Name must be provided if the Android App is required to be installed.',
              'auth-domain-config-required':
                'Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.',
              'missing-app-credential':
                'The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.',
              'missing-verification-code':
                'The phone auth credential was created with an empty SMS verification code.',
              'missing-continue-uri':
                'A continue URL must be provided in the request.',
              'missing-iframe-start': 'An internal error has occurred.',
              'missing-ios-bundle-id':
                'An iOS Bundle ID must be provided if an App Store ID is provided.',
              'missing-or-invalid-nonce':
                'The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.',
              'missing-phone-number':
                'To send verification codes, provide a phone number for the recipient.',
              'missing-verification-id':
                'The phone auth credential was created with an empty verification ID.',
              'app-deleted': 'This instance of FirebaseApp has been deleted.',
              'account-exists-with-different-credential':
                'An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.',
              'network-request-failed':
                'A network error (such as timeout, interrupted connection or unreachable host) has occurred.',
              'no-auth-event': 'An internal error has occurred.',
              'no-such-provider':
                'User was not linked to an account with the given provider.',
              'null-user':
                'A null user object was provided as the argument for an operation which requires a non-null user object.',
              'operation-not-allowed':
                'The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.',
              'operation-not-supported-in-this-environment':
                'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
              'popup-blocked':
                'Unable to establish a connection with the popup. It may have been blocked by the browser.',
              'popup-closed-by-user':
                'The popup has been closed by the user before finalizing the operation.',
              'provider-already-linked':
                'User can only be linked to one identity for the given provider.',
              'quota-exceeded':
                "The project's quota for this operation has been exceeded.",
              'redirect-cancelled-by-user':
                'The redirect operation has been cancelled by the user before finalizing.',
              'redirect-operation-pending':
                'A redirect sign-in operation is already pending.',
              'rejected-credential':
                'The request contains malformed or mismatching credentials.',
              'tenant-id-mismatch':
                "The provided tenant ID does not match the Auth instance's tenant ID",
              timeout: 'The operation has timed out.',
              'user-token-expired':
                "The user's credential is no longer valid. The user must sign in again.",
              'too-many-requests':
                'We have blocked all requests from this device due to unusual activity. Try again later.',
              'unauthorized-continue-uri':
                'The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.',
              'unsupported-persistence-type':
                'The current environment does not support the specified persistence type.',
              'unsupported-tenant-operation':
                'This operation is not supported in a multi-tenant context.',
              'user-cancelled':
                'The user did not grant your application the permissions it requested.',
              'user-not-found':
                'There is no user record corresponding to this identifier. The user may have been deleted.',
              'user-disabled':
                'The user account has been disabled by an administrator.',
              'user-mismatch':
                'The supplied credentials do not correspond to the previously signed in user.',
              'user-signed-out': '',
              'weak-password':
                'The password must be 6 characters long or more.',
              'web-storage-unsupported':
                'This browser is not supported or 3rd party cookies and data may be disabled.',
            };
          function Qi(t) {
            var e = wn((t = In(t)), tr) || null,
              n = wn(t, er) || null,
              i = wn(t, rr) || null;
            if (((i = (i && ar[i]) || null), !e || !n || !i))
              throw new Yi(
                'argument-error',
                tr +
                  ', ' +
                  er +
                  'and ' +
                  rr +
                  ' are required in a valid action code URL.',
              );
            ji(this, {
              apiKey: e,
              operation: i,
              code: n,
              continueUrl: wn(t, nr) || null,
              languageCode: wn(t, ir) || null,
              tenantId: wn(t, or) || null,
            });
          }
          var tr = 'apiKey',
            er = 'oobCode',
            nr = 'continueUrl',
            ir = 'languageCode',
            rr = 'mode',
            or = 'tenantId',
            ar = {
              recoverEmail: 'RECOVER_EMAIL',
              resetPassword: 'PASSWORD_RESET',
              signIn: Ki,
              verifyEmail: 'VERIFY_EMAIL',
            };
          function sr(t) {
            try {
              return new Qi(t);
            } catch (t) {
              return null;
            }
          }
          function ur(t) {
            var e = t[dr];
            if (void 0 === e) throw new Yi('missing-continue-uri');
            if ('string' != typeof e || ('string' == typeof e && !e.length))
              throw new Yi('invalid-continue-uri');
            (this.h = e), (this.b = this.a = null), (this.g = !1);
            var n = t[cr];
            if (n && 'object' == typeof n) {
              e = n[mr];
              var i = n[pr];
              if (((n = n[vr]), 'string' == typeof e && e.length)) {
                if (((this.a = e), void 0 !== i && 'boolean' != typeof i))
                  throw new Yi(
                    'argument-error',
                    pr + ' property must be a boolean when specified.',
                  );
                if (
                  ((this.g = !!i),
                  void 0 !== n &&
                    ('string' != typeof n ||
                      ('string' == typeof n && !n.length)))
                )
                  throw new Yi(
                    'argument-error',
                    vr + ' property must be a non empty string when specified.',
                  );
                this.b = n || null;
              } else {
                if (void 0 !== e)
                  throw new Yi(
                    'argument-error',
                    mr + ' property must be a non empty string when specified.',
                  );
                if (void 0 !== i || void 0 !== n)
                  throw new Yi('missing-android-pkg-name');
              }
            } else if (void 0 !== n)
              throw new Yi(
                'argument-error',
                cr + ' property must be a non null object when specified.',
              );
            if (((this.f = null), (e = t[fr]) && 'object' == typeof e)) {
              if ('string' == typeof (e = e[gr]) && e.length) this.f = e;
              else if (void 0 !== e)
                throw new Yi(
                  'argument-error',
                  gr + ' property must be a non empty string when specified.',
                );
            } else if (void 0 !== e)
              throw new Yi(
                'argument-error',
                fr + ' property must be a non null object when specified.',
              );
            if (void 0 !== (e = t[lr]) && 'boolean' != typeof e)
              throw new Yi(
                'argument-error',
                lr + ' property must be a boolean when specified.',
              );
            if (
              ((this.c = !!e),
              void 0 !== (t = t[hr]) &&
                ('string' != typeof t || ('string' == typeof t && !t.length)))
            )
              throw new Yi(
                'argument-error',
                hr + ' property must be a non empty string when specified.',
              );
            this.i = t || null;
          }
          var cr = 'android',
            hr = 'dynamicLinkDomain',
            lr = 'handleCodeInApp',
            fr = 'iOS',
            dr = 'url',
            pr = 'installApp',
            vr = 'minimumVersion',
            mr = 'packageName',
            gr = 'bundleId';
          function br(t) {
            var e = {};
            for (var n in ((e.continueUrl = t.h),
            (e.canHandleCodeInApp = t.c),
            (e.androidPackageName = t.a) &&
              ((e.androidMinimumVersion = t.b), (e.androidInstallApp = t.g)),
            (e.iOSBundleId = t.f),
            (e.dynamicLinkDomain = t.i),
            e))
              null === e[n] && delete e[n];
            return e;
          }
          var yr = null,
            wr = null;
          function Ir(t) {
            var e = '';
            return (
              (function(i, t) {
                function e(t) {
                  for (; r < i.length; ) {
                    var e = i.charAt(r++),
                      n = wr[e];
                    if (null != n) return n;
                    if (!/^[\s\xa0]*$/.test(e))
                      throw Error('Unknown base64 encoding at char: ' + e);
                  }
                  return t;
                }
                !(function() {
                  if (!yr) {
                    (yr = {}), (wr = {});
                    for (var t = 0; t < 65; t++)
                      (yr[
                        t
                      ] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.charAt(
                        t,
                      )),
                        62 <= (wr[yr[t]] = t) &&
                          (wr[
                            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.'.charAt(
                              t,
                            )
                          ] = t);
                  }
                })();
                for (var r = 0; ; ) {
                  var n = e(-1),
                    o = e(0),
                    a = e(64),
                    s = e(64);
                  if (64 === s && -1 === n) break;
                  t((n << 2) | (o >> 4)),
                    64 != a &&
                      (t(((o << 4) & 240) | (a >> 2)),
                      64 != s && t(((a << 6) & 192) | s));
                }
              })(t, function(t) {
                e += String.fromCharCode(t);
              }),
              e
            );
          }
          function Tr(t) {
            (this.f = t.sub),
              (this.a =
                t.provider_id ||
                (t.firebase && t.firebase.sign_in_provider) ||
                null),
              (this.c = (t.firebase && t.firebase.tenant) || null),
              (this.b = !!t.is_anonymous || 'anonymous' == this.a);
          }
          function Er(t) {
            return (t = kr(t)) && t.sub && t.iss && t.aud && t.exp
              ? new Tr(t)
              : null;
          }
          function kr(t) {
            if (!t) return null;
            if (3 != (t = t.split('.')).length) return null;
            for (var e = (4 - ((t = t[1]).length % 4)) % 4, n = 0; n < e; n++)
              t += '.';
            try {
              return JSON.parse(Ir(t));
            } catch (t) {}
            return null;
          }
          (Tr.prototype.R = function() {
            return this.c;
          }),
            (Tr.prototype.g = function() {
              return this.b;
            });
          var Ar,
            Sr = {
              bd: {
                cb:
                  'https://www.googleapis.com/identitytoolkit/v3/relyingparty/',
                ib: 'https://securetoken.googleapis.com/v1/token',
                id: 'p',
              },
              dd: {
                cb:
                  'https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/',
                ib:
                  'https://staging-securetoken.sandbox.googleapis.com/v1/token',
                id: 's',
              },
              ed: {
                cb:
                  'https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/',
                ib: 'https://test-securetoken.sandbox.googleapis.com/v1/token',
                id: 't',
              },
            };
          function Nr(t) {
            for (var e in Sr)
              if (Sr[e].id === t)
                return {
                  firebaseEndpoint: (t = Sr[e]).cb,
                  secureTokenEndpoint: t.ib,
                };
            return null;
          }
          Ar = Nr('__EID__') ? '__EID__' : void 0;
          var Or = 'oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version'.split(
              ' ',
            ),
            _r = [
              'client_id',
              'response_type',
              'scope',
              'redirect_uri',
              'state',
            ],
            Pr = {
              Xc: {
                Ea: 'locale',
                sa: 700,
                ra: 600,
                Fa: 'facebook.com',
                Qa: _r,
              },
              Zc: { Ea: null, sa: 500, ra: 750, Fa: 'github.com', Qa: _r },
              $c: { Ea: 'hl', sa: 515, ra: 680, Fa: 'google.com', Qa: _r },
              fd: { Ea: 'lang', sa: 485, ra: 705, Fa: 'twitter.com', Qa: Or },
              Vc: { Ea: 'locale', sa: 600, ra: 600, Fa: 'apple.com', Qa: [] },
            };
          function Rr(t) {
            for (var e in Pr) if (Pr[e].Fa == t) return Pr[e];
            return null;
          }
          function Cr(t) {
            var e = {};
            (e['facebook.com'] = jr),
              (e['google.com'] = Vr),
              (e['github.com'] = Ur),
              (e['twitter.com'] = Fr);
            var n = t && t[Lr];
            try {
              if (n) return e[n] ? new e[n](t) : new Mr(t);
              if (void 0 !== t[Dr]) return new xr(t);
            } catch (t) {}
            return null;
          }
          var Dr = 'idToken',
            Lr = 'providerId';
          function xr(t) {
            var e = t[Lr];
            if (!e && t[Dr]) {
              var n = Er(t[Dr]);
              n && n.a && (e = n.a);
            }
            if (!e) throw Error('Invalid additional user info!');
            ('anonymous' != e && 'custom' != e) || (e = null),
              (n = !1),
              void 0 !== t.isNewUser
                ? (n = !!t.isNewUser)
                : 'identitytoolkit#SignupNewUserResponse' === t.kind &&
                  (n = !0),
              Mi(this, 'providerId', e),
              Mi(this, 'isNewUser', n);
          }
          function Mr(t) {
            xr.call(this, t),
              Mi(this, 'profile', Vi((t = ki(t.rawUserInfo || '{}')) || {}));
          }
          function jr(t) {
            if ((Mr.call(this, t), 'facebook.com' != this.providerId))
              throw Error('Invalid provider ID!');
          }
          function Ur(t) {
            if ((Mr.call(this, t), 'github.com' != this.providerId))
              throw Error('Invalid provider ID!');
            Mi(this, 'username', (this.profile && this.profile.login) || null);
          }
          function Vr(t) {
            if ((Mr.call(this, t), 'google.com' != this.providerId))
              throw Error('Invalid provider ID!');
          }
          function Fr(t) {
            if ((Mr.call(this, t), 'twitter.com' != this.providerId))
              throw Error('Invalid provider ID!');
            Mi(this, 'username', t.screenName || null);
          }
          function Kr(t) {
            var e = In(t),
              n = wn(e, 'link'),
              i = wn(In(n), 'link');
            return (
              wn(In((e = wn(e, 'deep_link_id'))), 'link') || e || i || n || t
            );
          }
          function qr() {}
          function Hr(t, n) {
            return t
              .then(function(t) {
                if (t[Ca]) {
                  var e = Er(t[Ca]);
                  if (!e || n != e.f) throw new Yi('user-mismatch');
                  return t;
                }
                throw new Yi('user-mismatch');
              })
              .s(function(t) {
                throw t && t.code && t.code == $i + 'user-not-found'
                  ? new Yi('user-mismatch')
                  : t;
              });
          }
          function Br(t, e) {
            if (!e)
              throw new Yi(
                'internal-error',
                'failed to construct a credential',
              );
            (this.a = e),
              Mi(this, 'providerId', t),
              Mi(this, 'signInMethod', t);
          }
          function Gr(t) {
            return { pendingToken: t.a, requestUri: 'http://localhost' };
          }
          function Wr(t) {
            if (
              t &&
              t.providerId &&
              t.signInMethod &&
              0 == t.providerId.indexOf('saml.') &&
              t.pendingToken
            )
              try {
                return new Br(t.providerId, t.pendingToken);
              } catch (t) {}
            return null;
          }
          function Xr(t, e, n) {
            if (((this.a = null), e.idToken || e.accessToken))
              e.idToken && Mi(this, 'idToken', e.idToken),
                e.accessToken && Mi(this, 'accessToken', e.accessToken),
                e.nonce && !e.pendingToken && Mi(this, 'nonce', e.nonce),
                e.pendingToken && (this.a = e.pendingToken);
            else {
              if (!e.oauthToken || !e.oauthTokenSecret)
                throw new Yi(
                  'internal-error',
                  'failed to construct a credential',
                );
              Mi(this, 'accessToken', e.oauthToken),
                Mi(this, 'secret', e.oauthTokenSecret);
            }
            Mi(this, 'providerId', t), Mi(this, 'signInMethod', n);
          }
          function Jr(t) {
            var e = {};
            return (
              t.idToken && (e.id_token = t.idToken),
              t.accessToken && (e.access_token = t.accessToken),
              t.secret && (e.oauth_token_secret = t.secret),
              (e.providerId = t.providerId),
              t.nonce && !t.a && (e.nonce = t.nonce),
              (e = {
                postBody: Dn(e).toString(),
                requestUri: 'http://localhost',
              }),
              t.a && (delete e.postBody, (e.pendingToken = t.a)),
              e
            );
          }
          function Yr(t) {
            if (t && t.providerId && t.signInMethod) {
              var e = {
                idToken: t.oauthIdToken,
                accessToken: t.oauthTokenSecret ? null : t.oauthAccessToken,
                oauthTokenSecret: t.oauthTokenSecret,
                oauthToken: t.oauthTokenSecret && t.oauthAccessToken,
                nonce: t.nonce,
                pendingToken: t.pendingToken,
              };
              try {
                return new Xr(t.providerId, e, t.signInMethod);
              } catch (t) {}
            }
            return null;
          }
          function zr(t, e) {
            (this.Fc = e || []),
              ji(this, { providerId: t, isOAuthProvider: !0 }),
              (this.zb = {}),
              (this.eb = (Rr(t) || {}).Ea || null),
              (this.bb = null);
          }
          function $r(t) {
            if ('string' != typeof t || 0 != t.indexOf('saml.'))
              throw new Yi(
                'argument-error',
                'SAML provider IDs must be prefixed with "saml."',
              );
            zr.call(this, t, []);
          }
          function Zr(t) {
            zr.call(this, t, _r), (this.a = []);
          }
          function Qr() {
            Zr.call(this, 'facebook.com');
          }
          function to(t) {
            if (!t)
              throw new Yi(
                'argument-error',
                'credential failed: expected 1 argument (the OAuth access token).',
              );
            var e = t;
            return (
              g(t) && (e = t.accessToken),
              new Qr().credential({ accessToken: e })
            );
          }
          function eo() {
            Zr.call(this, 'github.com');
          }
          function no(t) {
            if (!t)
              throw new Yi(
                'argument-error',
                'credential failed: expected 1 argument (the OAuth access token).',
              );
            var e = t;
            return (
              g(t) && (e = t.accessToken),
              new eo().credential({ accessToken: e })
            );
          }
          function io() {
            Zr.call(this, 'google.com'), this.ya('profile');
          }
          function ro(t, e) {
            var n = t;
            return (
              g(t) && ((n = t.idToken), (e = t.accessToken)),
              new io().credential({ idToken: n, accessToken: e })
            );
          }
          function oo() {
            zr.call(this, 'twitter.com', Or);
          }
          function ao(t, e) {
            var n = t;
            if (
              (g(n) || (n = { oauthToken: t, oauthTokenSecret: e }),
              !n.oauthToken || !n.oauthTokenSecret)
            )
              throw new Yi(
                'argument-error',
                'credential failed: expected 2 arguments (the OAuth access token and secret).',
              );
            return new Xr('twitter.com', n, 'twitter.com');
          }
          function so(t, e, n) {
            (this.a = t),
              (this.c = e),
              Mi(this, 'providerId', 'password'),
              Mi(
                this,
                'signInMethod',
                n === co.EMAIL_LINK_SIGN_IN_METHOD
                  ? co.EMAIL_LINK_SIGN_IN_METHOD
                  : co.EMAIL_PASSWORD_SIGN_IN_METHOD,
              );
          }
          function uo(t) {
            return t && t.email && t.password
              ? new so(t.email, t.password, t.signInMethod)
              : null;
          }
          function co() {
            ji(this, { providerId: 'password', isOAuthProvider: !1 });
          }
          function ho(t, e) {
            if (!(e = lo(e)))
              throw new Yi('argument-error', 'Invalid email link!');
            return new so(t, e.code, co.EMAIL_LINK_SIGN_IN_METHOD);
          }
          function lo(t) {
            return (t = sr((t = Kr(t)))) && t.operation === Ki ? t : null;
          }
          function fo(t) {
            if (!((t.Va && t.Ua) || (t.Ha && t.ba)))
              throw new Yi('internal-error');
            (this.a = t),
              Mi(this, 'providerId', 'phone'),
              Mi(this, 'signInMethod', 'phone');
          }
          function po(e) {
            if (
              e &&
              'phone' === e.providerId &&
              ((e.verificationId && e.verificationCode) ||
                (e.temporaryProof && e.phoneNumber))
            ) {
              var n = {};
              return (
                M(
                  [
                    'verificationId',
                    'verificationCode',
                    'temporaryProof',
                    'phoneNumber',
                  ],
                  function(t) {
                    e[t] && (n[t] = e[t]);
                  },
                ),
                new fo(n)
              );
            }
            return null;
          }
          function vo(t) {
            return t.a.Ha && t.a.ba
              ? { temporaryProof: t.a.Ha, phoneNumber: t.a.ba }
              : { sessionInfo: t.a.Va, code: t.a.Ua };
          }
          function mo(t) {
            try {
              this.a = t || fl.auth();
            } catch (t) {
              throw new Yi(
                'argument-error',
                'Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().',
              );
            }
            ji(this, { providerId: 'phone', isOAuthProvider: !1 });
          }
          function go(t, e) {
            if (!t) throw new Yi('missing-verification-id');
            if (!e) throw new Yi('missing-verification-code');
            return new fo({ Va: t, Ua: e });
          }
          function bo(t) {
            if (t.temporaryProof && t.phoneNumber)
              return new fo({ Ha: t.temporaryProof, ba: t.phoneNumber });
            var e = t && t.providerId;
            if (!e || 'password' === e) return null;
            var n = t && t.oauthAccessToken,
              i = t && t.oauthTokenSecret,
              r = t && t.nonce,
              o = t && t.oauthIdToken,
              a = t && t.pendingToken;
            try {
              switch (e) {
                case 'google.com':
                  return ro(o, n);
                case 'facebook.com':
                  return to(n);
                case 'github.com':
                  return no(n);
                case 'twitter.com':
                  return ao(n, i);
                default:
                  return n || i || o || a
                    ? a
                      ? 0 == e.indexOf('saml.')
                        ? new Br(e, a)
                        : new Xr(
                            e,
                            {
                              pendingToken: a,
                              idToken: t.oauthIdToken,
                              accessToken: t.oauthAccessToken,
                            },
                            e,
                          )
                      : new Zr(e).credential({
                          idToken: o,
                          accessToken: n,
                          rawNonce: r,
                        })
                    : null;
              }
            } catch (t) {
              return null;
            }
          }
          function yo(t) {
            if (!t.isOAuthProvider) throw new Yi('invalid-oauth-provider');
          }
          function wo(t, e, n, i, r, o, a) {
            if (
              ((this.c = t),
              (this.b = e || null),
              (this.g = n || null),
              (this.f = i || null),
              (this.i = o || null),
              (this.h = a || null),
              (this.a = r || null),
              !this.g && !this.a)
            )
              throw new Yi('invalid-auth-event');
            if (this.g && this.a) throw new Yi('invalid-auth-event');
            if (this.g && !this.f) throw new Yi('invalid-auth-event');
          }
          function Io(t) {
            return (t = t || {}).type
              ? new wo(
                  t.type,
                  t.eventId,
                  t.urlResponse,
                  t.sessionId,
                  t.error && zi(t.error),
                  t.postBody,
                  t.tenantId,
                )
              : null;
          }
          function To() {
            (this.b = null), (this.a = []);
          }
          k(Mr, xr),
            k(jr, Mr),
            k(Ur, Mr),
            k(Vr, Mr),
            k(Fr, Mr),
            (Br.prototype.na = function(t) {
              return za(t, Gr(this));
            }),
            (Br.prototype.b = function(t, e) {
              var n = Gr(this);
              return (n.idToken = e), $a(t, n);
            }),
            (Br.prototype.f = function(t, e) {
              return Hr(Za(t, Gr(this)), e);
            }),
            (Br.prototype.A = function() {
              return {
                providerId: this.providerId,
                signInMethod: this.signInMethod,
                pendingToken: this.a,
              };
            }),
            (Xr.prototype.na = function(t) {
              return za(t, Jr(this));
            }),
            (Xr.prototype.b = function(t, e) {
              var n = Jr(this);
              return (n.idToken = e), $a(t, n);
            }),
            (Xr.prototype.f = function(t, e) {
              return Hr(Za(t, Jr(this)), e);
            }),
            (Xr.prototype.A = function() {
              var t = {
                providerId: this.providerId,
                signInMethod: this.signInMethod,
              };
              return (
                this.idToken && (t.oauthIdToken = this.idToken),
                this.accessToken && (t.oauthAccessToken = this.accessToken),
                this.secret && (t.oauthTokenSecret = this.secret),
                this.nonce && (t.nonce = this.nonce),
                this.a && (t.pendingToken = this.a),
                t
              );
            }),
            (zr.prototype.Ga = function(t) {
              return (this.zb = W(t)), this;
            }),
            k($r, zr),
            k(Zr, zr),
            (Zr.prototype.ya = function(t) {
              return V(this.a, t) || this.a.push(t), this;
            }),
            (Zr.prototype.Hb = function() {
              return H(this.a);
            }),
            (Zr.prototype.credential = function(t, e) {
              var n;
              if (
                !(n = g(t)
                  ? {
                      idToken: t.idToken || null,
                      accessToken: t.accessToken || null,
                      nonce: t.rawNonce || null,
                    }
                  : { idToken: t || null, accessToken: e || null }).idToken &&
                !n.accessToken
              )
                throw new Yi(
                  'argument-error',
                  'credential failed: must provide the ID token and/or the access token.',
                );
              return new Xr(this.providerId, n, this.providerId);
            }),
            k(Qr, Zr),
            Mi(Qr, 'PROVIDER_ID', 'facebook.com'),
            Mi(Qr, 'FACEBOOK_SIGN_IN_METHOD', 'facebook.com'),
            k(eo, Zr),
            Mi(eo, 'PROVIDER_ID', 'github.com'),
            Mi(eo, 'GITHUB_SIGN_IN_METHOD', 'github.com'),
            k(io, Zr),
            Mi(io, 'PROVIDER_ID', 'google.com'),
            Mi(io, 'GOOGLE_SIGN_IN_METHOD', 'google.com'),
            k(oo, zr),
            Mi(oo, 'PROVIDER_ID', 'twitter.com'),
            Mi(oo, 'TWITTER_SIGN_IN_METHOD', 'twitter.com'),
            (so.prototype.na = function(t) {
              return this.signInMethod == co.EMAIL_LINK_SIGN_IN_METHOD
                ? Ns(t, as, { email: this.a, oobCode: this.c })
                : Ns(t, Es, { email: this.a, password: this.c });
            }),
            (so.prototype.b = function(t, e) {
              return this.signInMethod == co.EMAIL_LINK_SIGN_IN_METHOD
                ? Ns(t, ss, { idToken: e, email: this.a, oobCode: this.c })
                : Ns(t, gs, { idToken: e, email: this.a, password: this.c });
            }),
            (so.prototype.f = function(t, e) {
              return Hr(this.na(t), e);
            }),
            (so.prototype.A = function() {
              return {
                email: this.a,
                password: this.c,
                signInMethod: this.signInMethod,
              };
            }),
            ji(co, { PROVIDER_ID: 'password' }),
            ji(co, { EMAIL_LINK_SIGN_IN_METHOD: 'emailLink' }),
            ji(co, { EMAIL_PASSWORD_SIGN_IN_METHOD: 'password' }),
            (fo.prototype.na = function(t) {
              return t.Wa(vo(this));
            }),
            (fo.prototype.b = function(t, e) {
              var n = vo(this);
              return (n.idToken = e), Ns(t, As, n);
            }),
            (fo.prototype.f = function(t, e) {
              var n = vo(this);
              return (n.operation = 'REAUTH'), Hr((t = Ns(t, Ss, n)), e);
            }),
            (fo.prototype.A = function() {
              var t = { providerId: 'phone' };
              return (
                this.a.Va && (t.verificationId = this.a.Va),
                this.a.Ua && (t.verificationCode = this.a.Ua),
                this.a.Ha && (t.temporaryProof = this.a.Ha),
                this.a.ba && (t.phoneNumber = this.a.ba),
                t
              );
            }),
            (mo.prototype.Wa = function(e, n) {
              var i = this.a.b;
              return Yt(n.verify()).then(function(t) {
                if (!h(t))
                  throw new Yi(
                    'argument-error',
                    'An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.',
                  );
                switch (n.type) {
                  case 'recaptcha':
                    return (function(t, e) {
                      return Ns(t, vs, e);
                    })(i, { phoneNumber: e, recaptchaToken: t }).then(
                      function(t) {
                        return 'function' == typeof n.reset && n.reset(), t;
                      },
                      function(t) {
                        throw ('function' == typeof n.reset && n.reset(), t);
                      },
                    );
                  default:
                    throw new Yi(
                      'argument-error',
                      'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.',
                    );
                }
              });
            }),
            ji(mo, { PROVIDER_ID: 'phone' }),
            ji(mo, { PHONE_SIGN_IN_METHOD: 'phone' }),
            (wo.prototype.getUid = function() {
              var t = [];
              return (
                t.push(this.c),
                this.b && t.push(this.b),
                this.f && t.push(this.f),
                this.h && t.push(this.h),
                t.join('-')
              );
            }),
            (wo.prototype.R = function() {
              return this.h;
            }),
            (wo.prototype.A = function() {
              return {
                type: this.c,
                eventId: this.b,
                urlResponse: this.g,
                sessionId: this.f,
                postBody: this.i,
                tenantId: this.h,
                error: this.a && this.a.A(),
              };
            });
          var Eo,
            ko = null;
          function Ao(t) {
            var e = 'unauthorized-domain',
              n = void 0,
              i = In(t);
            (t = i.b),
              'chrome-extension' == (i = i.f)
                ? (n = Lt(
                    'This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.',
                    t,
                  ))
                : 'http' == i || 'https' == i
                ? (n = Lt(
                    'This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.',
                    t,
                  ))
                : (e = 'operation-not-supported-in-this-environment'),
              Yi.call(this, e, n);
          }
          function So(t, e, n) {
            Yi.call(this, t, n),
              (t = e || {}).Ab && Mi(this, 'email', t.Ab),
              t.ba && Mi(this, 'phoneNumber', t.ba),
              t.credential && Mi(this, 'credential', t.credential),
              t.Qb && Mi(this, 'tenantId', t.Qb);
          }
          function No(t) {
            if (t.code) {
              var e = t.code || '';
              0 == e.indexOf($i) && (e = e.substring($i.length));
              var n = { credential: bo(t), Qb: t.tenantId };
              if (t.email) n.Ab = t.email;
              else if (t.phoneNumber) n.ba = t.phoneNumber;
              else if (!n.credential) return new Yi(e, t.message || void 0);
              return new So(e, n, t.message);
            }
            return null;
          }
          function Oo() {}
          function _o(t) {
            return t.c || (t.c = t.b());
          }
          function Po() {}
          function Ro(t) {
            if (
              t.f ||
              'undefined' != typeof XMLHttpRequest ||
              'undefined' == typeof ActiveXObject
            )
              return t.f;
            for (
              var e = [
                  'MSXML2.XMLHTTP.6.0',
                  'MSXML2.XMLHTTP.3.0',
                  'MSXML2.XMLHTTP',
                  'Microsoft.XMLHTTP',
                ],
                n = 0;
              n < e.length;
              n++
            ) {
              var i = e[n];
              try {
                return new ActiveXObject(i), (t.f = i);
              } catch (t) {}
            }
            throw Error(
              'Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed',
            );
          }
          function Co() {}
          function Do() {
            (this.a = new XDomainRequest()),
              (this.readyState = 0),
              (this.onreadystatechange = null),
              (this.responseType = this.responseText = this.response = ''),
              (this.status = -1),
              (this.statusText = ''),
              (this.a.onload = I(this.fc, this)),
              (this.a.onerror = I(this.Ib, this)),
              (this.a.onprogress = I(this.gc, this)),
              (this.a.ontimeout = I(this.kc, this));
          }
          function Lo(t, e) {
            (t.readyState = e), t.onreadystatechange && t.onreadystatechange();
          }
          function xo(t, e, n) {
            this.reset(t, e, n, void 0, void 0);
          }
          function Mo(t) {
            (this.f = t), (this.b = this.c = this.a = null);
          }
          function jo(t, e) {
            (this.name = t), (this.value = e);
          }
          k(Ao, Yi),
            k(So, Yi),
            (So.prototype.A = function() {
              var t = { code: this.code, message: this.message };
              this.email && (t.email = this.email),
                this.phoneNumber && (t.phoneNumber = this.phoneNumber),
                this.tenantId && (t.tenantId = this.tenantId);
              var e = this.credential && this.credential.A();
              return e && J(t, e), t;
            }),
            (So.prototype.toJSON = function() {
              return this.A();
            }),
            (Oo.prototype.c = null),
            k(Po, Oo),
            (Po.prototype.a = function() {
              var t = Ro(this);
              return t ? new ActiveXObject(t) : new XMLHttpRequest();
            }),
            (Po.prototype.b = function() {
              var t = {};
              return Ro(this) && ((t[0] = !0), (t[1] = !0)), t;
            }),
            (Eo = new Po()),
            k(Co, Oo),
            (Co.prototype.a = function() {
              var t = new XMLHttpRequest();
              if ('withCredentials' in t) return t;
              if ('undefined' != typeof XDomainRequest) return new Do();
              throw Error('Unsupported browser');
            }),
            (Co.prototype.b = function() {
              return {};
            }),
            ((t = Do.prototype).open = function(t, e, n) {
              if (null != n && !n)
                throw Error('Only async requests are supported.');
              this.a.open(t, e);
            }),
            (t.send = function(t) {
              if (t) {
                if ('string' != typeof t)
                  throw Error('Only string data is supported');
                this.a.send(t);
              } else this.a.send();
            }),
            (t.abort = function() {
              this.a.abort();
            }),
            (t.setRequestHeader = function() {}),
            (t.getResponseHeader = function(t) {
              return 'content-type' == t.toLowerCase()
                ? this.a.contentType
                : '';
            }),
            (t.fc = function() {
              (this.status = 200),
                (this.response = this.responseText = this.a.responseText),
                Lo(this, 4);
            }),
            (t.Ib = function() {
              (this.status = 500),
                (this.response = this.responseText = ''),
                Lo(this, 4);
            }),
            (t.kc = function() {
              this.Ib();
            }),
            (t.gc = function() {
              (this.status = 200), Lo(this, 1);
            }),
            (t.getAllResponseHeaders = function() {
              return 'content-type: ' + this.a.contentType;
            }),
            (xo.prototype.a = null),
            (xo.prototype.reset = function(t, e, n, i, r) {
              delete this.a;
            }),
            (jo.prototype.toString = function() {
              return this.name;
            });
          var Uo = new jo('SEVERE', 1e3),
            Vo = new jo('WARNING', 900),
            Fo = new jo('CONFIG', 700),
            Ko = new jo('FINE', 500);
          Mo.prototype.log = function(t, e, n) {
            if (
              t.value >=
              (function t(e) {
                return e.c
                  ? e.c
                  : e.a
                  ? t(e.a)
                  : (O('Root logger has no level set.'), null);
              })(this).value
            )
              for (
                m(e) && (e = e()),
                  t = new xo(t, String(e), this.f),
                  n && (t.a = n),
                  n = this;
                n;

              )
                n = n.a;
          };
          var qo,
            Ho = {},
            Bo = null;
          function Go(t) {
            var e;
            if (
              (Bo || ((Bo = new Mo('')), ((Ho[''] = Bo).c = Fo)), !(e = Ho[t]))
            ) {
              e = new Mo(t);
              var n = t.lastIndexOf('.'),
                i = t.substr(n + 1);
              (n = Go(t.substr(0, n))).b || (n.b = {}),
                ((n.b[i] = e).a = n),
                (Ho[t] = e);
            }
            return e;
          }
          function Wo(t, e) {
            t && t.log(Ko, e, void 0);
          }
          function Xo(t) {
            this.f = t;
          }
          function Jo(t) {
            nn.call(this),
              (this.o = t),
              (this.readyState = Yo),
              (this.status = 0),
              (this.responseType = this.responseText = this.response = this.statusText =
                ''),
              (this.onreadystatechange = null),
              (this.i = new Headers()),
              (this.b = null),
              (this.m = 'GET'),
              (this.g = ''),
              (this.a = !1),
              (this.h = Go('goog.net.FetchXmlHttp')),
              (this.l = this.c = this.f = null);
          }
          k(Xo, Oo),
            (Xo.prototype.a = function() {
              return new Jo(this.f);
            }),
            (Xo.prototype.b =
              ((qo = {}),
              function() {
                return qo;
              })),
            k(Jo, nn);
          var Yo = 0;
          function zo(t) {
            t.c
              .read()
              .then(t.ec.bind(t))
              .catch(t.Oa.bind(t));
          }
          function $o(t, e) {
            e &&
              t.f &&
              ((t.status = t.f.status), (t.statusText = t.f.statusText)),
              (t.readyState = 4),
              (t.f = null),
              (t.c = null),
              (t.l = null),
              Zo(t);
          }
          function Zo(t) {
            t.onreadystatechange && t.onreadystatechange.call(t);
          }
          function Qo(t) {
            nn.call(this),
              (this.headers = new ln()),
              (this.B = t || null),
              (this.c = !1),
              (this.w = this.a = null),
              (this.h = this.O = this.l = ''),
              (this.f = this.J = this.i = this.I = !1),
              (this.g = 0),
              (this.o = null),
              (this.m = ta),
              (this.v = this.P = !1);
          }
          ((t = Jo.prototype).open = function(t, e) {
            if (this.readyState != Yo)
              throw (this.abort(), Error('Error reopening a connection'));
            (this.m = t), (this.g = e), (this.readyState = 1), Zo(this);
          }),
            (t.send = function(t) {
              if (1 != this.readyState)
                throw (this.abort(), Error('need to call open() first. '));
              this.a = !0;
              var e = {
                headers: this.i,
                method: this.m,
                credentials: void 0,
                cache: void 0,
              };
              t && (e.body = t),
                this.o
                  .fetch(new Request(this.g, e))
                  .then(this.jc.bind(this), this.Oa.bind(this));
            }),
            (t.abort = function() {
              (this.response = this.responseText = ''),
                (this.i = new Headers()),
                (this.status = 0),
                this.c && this.c.cancel('Request was aborted.'),
                1 <= this.readyState &&
                  this.a &&
                  4 != this.readyState &&
                  ((this.a = !1), $o(this, !1)),
                (this.readyState = Yo);
            }),
            (t.jc = function(t) {
              this.a &&
                ((this.f = t),
                this.b ||
                  ((this.b = t.headers), (this.readyState = 2), Zo(this)),
                this.a &&
                  ((this.readyState = 3),
                  Zo(this),
                  this.a &&
                    ('arraybuffer' === this.responseType
                      ? t
                          .arrayBuffer()
                          .then(this.hc.bind(this), this.Oa.bind(this))
                      : void 0 !== l.ReadableStream && 'body' in t
                      ? ((this.response = this.responseText = ''),
                        (this.c = t.body.getReader()),
                        (this.l = new TextDecoder()),
                        zo(this))
                      : t
                          .text()
                          .then(this.ic.bind(this), this.Oa.bind(this)))));
            }),
            (t.ec = function(t) {
              if (this.a) {
                var e = this.l.decode(t.value ? t.value : new Uint8Array(0), {
                  stream: !t.done,
                });
                e && (this.response = this.responseText += e),
                  t.done ? $o(this, !0) : Zo(this),
                  3 == this.readyState && zo(this);
              }
            }),
            (t.ic = function(t) {
              this.a && ((this.response = this.responseText = t), $o(this, !0));
            }),
            (t.hc = function(t) {
              this.a && ((this.response = t), $o(this, !0));
            }),
            (t.Oa = function(t) {
              var e = this.h;
              e &&
                e.log(
                  Vo,
                  'Failed to fetch url ' + this.g,
                  t instanceof Error ? t : Error(t),
                ),
                this.a && $o(this, !0);
            }),
            (t.setRequestHeader = function(t, e) {
              this.i.append(t, e);
            }),
            (t.getResponseHeader = function(t) {
              return this.b
                ? this.b.get(t.toLowerCase()) || ''
                : ((t = this.h) &&
                    t.log(
                      Vo,
                      'Attempting to get response header but no headers have been received for url: ' +
                        this.g,
                      void 0,
                    ),
                  '');
            }),
            (t.getAllResponseHeaders = function() {
              if (!this.b) {
                var t = this.h;
                return (
                  t &&
                    t.log(
                      Vo,
                      'Attempting to get all response headers but no headers have been received for url: ' +
                        this.g,
                      void 0,
                    ),
                  ''
                );
              }
              t = [];
              for (var e = this.b.entries(), n = e.next(); !n.done; )
                (n = n.value), t.push(n[0] + ': ' + n[1]), (n = e.next());
              return t.join('\r\n');
            }),
            k(Qo, nn);
          var ta = '';
          Qo.prototype.b = Go('goog.net.XhrIo');
          var ea = /^https?$/i,
            na = ['POST', 'PUT'];
          function ia(e, t, n, i, r) {
            if (e.a)
              throw Error(
                '[goog.net.XhrIo] Object is active with another request=' +
                  e.l +
                  '; newUri=' +
                  t,
              );
            (n = n ? n.toUpperCase() : 'GET'),
              (e.l = t),
              (e.h = ''),
              (e.O = n),
              (e.I = !1),
              (e.c = !0),
              (e.a = e.B ? e.B.a() : Eo.a()),
              (e.w = e.B ? _o(e.B) : _o(Eo)),
              (e.a.onreadystatechange = I(e.Lb, e));
            try {
              Wo(e.b, fa(e, 'Opening Xhr')),
                (e.J = !0),
                e.a.open(n, String(t), !0),
                (e.J = !1);
            } catch (t) {
              return (
                Wo(e.b, fa(e, 'Error opening Xhr: ' + t.message)), void oa(e, t)
              );
            }
            t = i || '';
            var o = new ln(e.headers);
            r &&
              (function(t, e) {
                if (t.forEach && 'function' == typeof t.forEach)
                  t.forEach(e, void 0);
                else if (v(t) || h(t)) M(t, e, void 0);
                else
                  for (
                    var n = hn(t), i = cn(t), r = i.length, o = 0;
                    o < r;
                    o++
                  )
                    e.call(void 0, i[o], n && n[o], t);
              })(r, function(t, e) {
                o.set(e, t);
              }),
              (r = (function(t) {
                t: {
                  for (
                    var e = ra, n = t.length, i = h(t) ? t.split('') : t, r = 0;
                    r < n;
                    r++
                  )
                    if (r in i && e.call(void 0, i[r], r, t)) {
                      e = r;
                      break t;
                    }
                  e = -1;
                }
                return e < 0 ? null : h(t) ? t.charAt(e) : t[e];
              })(o.X())),
              (i = l.FormData && t instanceof l.FormData),
              !V(na, n) ||
                r ||
                i ||
                o.set(
                  'Content-Type',
                  'application/x-www-form-urlencoded;charset=utf-8',
                ),
              o.forEach(function(t, e) {
                this.a.setRequestHeader(e, t);
              }, e),
              e.m && (e.a.responseType = e.m),
              'withCredentials' in e.a &&
                e.a.withCredentials !== e.P &&
                (e.a.withCredentials = e.P);
            try {
              ca(e),
                0 < e.g &&
                  ((e.v = (function(t) {
                    return (
                      me &&
                      Ne(9) &&
                      'number' == typeof t.timeout &&
                      void 0 !== t.ontimeout
                    );
                  })(e.a)),
                  Wo(
                    e.b,
                    fa(
                      e,
                      'Will abort after ' +
                        e.g +
                        'ms if incomplete, xhr2 ' +
                        e.v,
                    ),
                  ),
                  e.v
                    ? ((e.a.timeout = e.g), (e.a.ontimeout = I(e.Ia, e)))
                    : (e.o = sn(e.Ia, e.g, e))),
                Wo(e.b, fa(e, 'Sending request')),
                (e.i = !0),
                e.a.send(t),
                (e.i = !1);
            } catch (t) {
              Wo(e.b, fa(e, 'Send error: ' + t.message)), oa(e, t);
            }
          }
          function ra(t) {
            return 'content-type' == t.toLowerCase();
          }
          function oa(t, e) {
            (t.c = !1),
              t.a && ((t.f = !0), t.a.abort(), (t.f = !1)),
              (t.h = e),
              aa(t),
              ua(t);
          }
          function aa(t) {
            t.I ||
              ((t.I = !0),
              t.dispatchEvent('complete'),
              t.dispatchEvent('error'));
          }
          function sa(e) {
            if (e.c && void 0 !== u)
              if (e.w[1] && 4 == ha(e) && 2 == la(e))
                Wo(e.b, fa(e, 'Local request error detected and ignored'));
              else if (e.i && 4 == ha(e)) sn(e.Lb, 0, e);
              else if ((e.dispatchEvent('readystatechange'), 4 == ha(e))) {
                Wo(e.b, fa(e, 'Request complete')), (e.c = !1);
                try {
                  var t,
                    n = la(e);
                  t: switch (n) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                      var i = !0;
                      break t;
                    default:
                      i = !1;
                  }
                  if (!(t = i)) {
                    var r;
                    if ((r = 0 === n)) {
                      var o = String(e.l).match(pn)[1] || null;
                      if (!o && l.self && l.self.location) {
                        var a = l.self.location.protocol;
                        o = a.substr(0, a.length - 1);
                      }
                      r = !ea.test(o ? o.toLowerCase() : '');
                    }
                    t = r;
                  }
                  if (t)
                    e.dispatchEvent('complete'), e.dispatchEvent('success');
                  else {
                    try {
                      var s = 2 < ha(e) ? e.a.statusText : '';
                    } catch (t) {
                      Wo(e.b, 'Can not get status: ' + t.message), (s = '');
                    }
                    (e.h = s + ' [' + la(e) + ']'), aa(e);
                  }
                } finally {
                  ua(e);
                }
              }
          }
          function ua(e, t) {
            if (e.a) {
              ca(e);
              var n = e.a,
                i = e.w[0] ? d : null;
              (e.a = null), (e.w = null), t || e.dispatchEvent('ready');
              try {
                n.onreadystatechange = i;
              } catch (t) {
                (e = e.b) &&
                  e.log(
                    Uo,
                    'Problem encountered resetting onreadystatechange: ' +
                      t.message,
                    void 0,
                  );
              }
            }
          }
          function ca(t) {
            t.a && t.v && (t.a.ontimeout = null),
              t.o && (l.clearTimeout(t.o), (t.o = null));
          }
          function ha(t) {
            return t.a ? t.a.readyState : 0;
          }
          function la(t) {
            try {
              return 2 < ha(t) ? t.a.status : -1;
            } catch (t) {
              return -1;
            }
          }
          function fa(t, e) {
            return e + ' [' + t.O + ' ' + t.l + ' ' + la(t) + ']';
          }
          function da(t) {
            var e = ka;
            (this.g = []),
              (this.v = e),
              (this.o = t || null),
              (this.f = this.a = !1),
              (this.c = void 0),
              (this.u = this.w = this.i = !1),
              (this.h = 0),
              (this.b = null),
              (this.l = 0);
          }
          function pa(t, e, n) {
            (t.a = !0), (t.c = n), (t.f = !e), ba(t);
          }
          function va(t) {
            if (t.a) {
              if (!t.u) throw new ya(t);
              t.u = !1;
            }
          }
          function ma(t, e, n, i) {
            t.g.push([e, n, i]), t.a && ba(t);
          }
          function ga(t) {
            return U(t.g, function(t) {
              return m(t[1]);
            });
          }
          function ba(e) {
            if (e.h && e.a && ga(e)) {
              var n = e.h,
                i = Ta[n];
              i && (l.clearTimeout(i.a), delete Ta[n]), (e.h = 0);
            }
            e.b && (e.b.l--, delete e.b), (n = e.c);
            for (var t = (i = !1); e.g.length && !e.i; ) {
              var r = e.g.shift(),
                o = r[0],
                a = r[1];
              if (((r = r[2]), (o = e.f ? a : o)))
                try {
                  var s = o.call(r || e.o, n);
                  void 0 !== s &&
                    ((e.f = e.f && (s == n || s instanceof Error)),
                    (e.c = n = s)),
                    (A(n) ||
                      ('function' == typeof l.Promise &&
                        n instanceof l.Promise)) &&
                      ((t = !0), (e.i = !0));
                } catch (t) {
                  (n = t), (e.f = !0), ga(e) || (i = !0);
                }
            }
            (e.c = n),
              t &&
                ((s = I(e.m, e, !0)),
                (t = I(e.m, e, !1)),
                n instanceof da ? (ma(n, s, t), (n.w = !0)) : n.then(s, t)),
              i && ((n = new Ia(n)), (Ta[n.a] = n), (e.h = n.a));
          }
          function ya() {
            S.call(this);
          }
          function wa() {
            S.call(this);
          }
          function Ia(t) {
            (this.a = l.setTimeout(I(this.c, this), 0)), (this.b = t);
          }
          ((t = Qo.prototype).Ia = function() {
            void 0 !== u &&
              this.a &&
              ((this.h = 'Timed out after ' + this.g + 'ms, aborting'),
              Wo(this.b, fa(this, this.h)),
              this.dispatchEvent('timeout'),
              this.abort(8));
          }),
            (t.abort = function() {
              this.a &&
                this.c &&
                (Wo(this.b, fa(this, 'Aborting')),
                (this.c = !1),
                (this.f = !0),
                this.a.abort(),
                (this.f = !1),
                this.dispatchEvent('complete'),
                this.dispatchEvent('abort'),
                ua(this));
            }),
            (t.za = function() {
              this.a &&
                (this.c &&
                  ((this.c = !1), (this.f = !0), this.a.abort(), (this.f = !1)),
                ua(this, !0)),
                Qo.qb.za.call(this);
            }),
            (t.Lb = function() {
              this.va || (this.J || this.i || this.f ? sa(this) : this.yc());
            }),
            (t.yc = function() {
              sa(this);
            }),
            (t.getResponse = function() {
              try {
                if (!this.a) return null;
                if ('response' in this.a) return this.a.response;
                switch (this.m) {
                  case ta:
                  case 'text':
                    return this.a.responseText;
                  case 'arraybuffer':
                    if ('mozResponseArrayBuffer' in this.a)
                      return this.a.mozResponseArrayBuffer;
                }
                var t = this.b;
                return (
                  t &&
                    t.log(
                      Uo,
                      'Response type ' +
                        this.m +
                        ' is not supported on this browser',
                      void 0,
                    ),
                  null
                );
              } catch (t) {
                return Wo(this.b, 'Can not get response: ' + t.message), null;
              }
            }),
            (da.prototype.cancel = function(t) {
              if (this.a) this.c instanceof da && this.c.cancel();
              else {
                if (this.b) {
                  var e = this.b;
                  delete this.b,
                    t ? e.cancel(t) : (e.l--, e.l <= 0 && e.cancel());
                }
                this.v ? this.v.call(this.o, this) : (this.u = !0),
                  this.a || ((t = new wa(this)), va(this), pa(this, !1, t));
              }
            }),
            (da.prototype.m = function(t, e) {
              (this.i = !1), pa(this, t, e);
            }),
            (da.prototype.then = function(t, e, n) {
              var i,
                r,
                o = new qt(function(t, e) {
                  (i = t), (r = e);
                });
              return (
                ma(this, i, function(t) {
                  t instanceof wa ? o.cancel() : r(t);
                }),
                o.then(t, e, n)
              );
            }),
            (da.prototype.$goog_Thenable = !0),
            k(ya, S),
            (ya.prototype.message = 'Deferred has already fired'),
            (ya.prototype.name = 'AlreadyCalledError'),
            k(wa, S),
            (wa.prototype.message = 'Deferred was canceled'),
            (wa.prototype.name = 'CanceledError'),
            (Ia.prototype.c = function() {
              throw (delete Ta[this.a], this.b);
            });
          var Ta = {};
          function Ea(t) {
            var e,
              n = document,
              i = et(t).toString(),
              r = document.createElement('SCRIPT'),
              o = { Nb: r, Ia: void 0 },
              a = new da(o);
            return (
              (e = window.setTimeout(function() {
                Aa(r, !0);
                var t = new Oa(Na, 'Timeout reached for loading script ' + i);
                va(a), pa(a, !1, t);
              }, 5e3)),
              (o.Ia = e),
              (r.onload = r.onreadystatechange = function() {
                (r.readyState &&
                  'loaded' != r.readyState &&
                  'complete' != r.readyState) ||
                  (Aa(r, !1, e), va(a), pa(a, !0, null));
              }),
              (r.onerror = function() {
                Aa(r, !0, e);
                var t = new Oa(Sa, 'Error while loading script ' + i);
                va(a), pa(a, !1, t);
              }),
              J((o = {}), { type: 'text/javascript', charset: 'UTF-8' }),
              Kn(r, o),
              (function(t, e) {
                L(t, 'HTMLScriptElement'),
                  (t.src = et(e)),
                  null === f &&
                    (f =
                      (e =
                        (e = l.document).querySelector &&
                        e.querySelector('script[nonce]')) &&
                      (e = e.nonce || e.getAttribute('nonce')) &&
                      s.test(e)
                        ? e
                        : ''),
                  (e = f) && t.setAttribute('nonce', e);
              })(r, t),
              (function(t) {
                var e;
                return (e = (t || document).getElementsByTagName('HEAD')) &&
                  0 != e.length
                  ? e[0]
                  : t.documentElement;
              })(n).appendChild(r),
              a
            );
          }
          function ka() {
            if (this && this.Nb) {
              var t = this.Nb;
              t && 'SCRIPT' == t.tagName && Aa(t, !0, this.Ia);
            }
          }
          function Aa(t, e, n) {
            null != n && l.clearTimeout(n),
              (t.onload = d),
              (t.onerror = d),
              (t.onreadystatechange = d),
              e &&
                window.setTimeout(function() {
                  t && t.parentNode && t.parentNode.removeChild(t);
                }, 0);
          }
          var Sa = 0,
            Na = 1;
          function Oa(t, e) {
            var n = 'Jsloader error (code #' + t + ')';
            e && (n += ': ' + e), S.call(this, n), (this.code = t);
          }
          function _a(t) {
            this.f = t;
          }
          function Pa(t, e, n) {
            if (
              ((this.c = t),
              (t = e || {}),
              (this.l =
                t.secureTokenEndpoint ||
                'https://securetoken.googleapis.com/v1/token'),
              (this.u = t.secureTokenTimeout || Da),
              (this.g = W(t.secureTokenHeaders || La)),
              (this.h =
                t.firebaseEndpoint ||
                'https://www.googleapis.com/identitytoolkit/v3/relyingparty/'),
              (this.i = t.firebaseTimeout || xa),
              (this.a = W(t.firebaseHeaders || Ma)),
              n &&
                ((this.a['X-Client-Version'] = n),
                (this.g['X-Client-Version'] = n)),
              (n = 'Node' == ui()),
              !(n =
                l.XMLHttpRequest ||
                (n && fl.INTERNAL.node && fl.INTERNAL.node.XMLHttpRequest)) &&
                !si())
            )
              throw new Yi(
                'internal-error',
                'The XMLHttpRequest compatibility library was not found.',
              );
            (this.f = void 0),
              si()
                ? (this.f = new Xo(self))
                : ci()
                ? (this.f = new _a(n))
                : (this.f = new Co()),
              (this.b = null);
          }
          k(Oa, S),
            k(_a, Oo),
            (_a.prototype.a = function() {
              return new this.f();
            }),
            (_a.prototype.b = function() {
              return {};
            });
          var Ra,
            Ca = 'idToken',
            Da = new Oi(3e4, 6e4),
            La = { 'Content-Type': 'application/x-www-form-urlencoded' },
            xa = new Oi(3e4, 6e4),
            Ma = { 'Content-Type': 'application/json' };
          function ja(t, e) {
            e
              ? (t.a['X-Firebase-Locale'] = e)
              : delete t.a['X-Firebase-Locale'];
          }
          function Ua(t, e) {
            e
              ? ((t.a['X-Client-Version'] = e), (t.g['X-Client-Version'] = e))
              : (delete t.a['X-Client-Version'],
                delete t.g['X-Client-Version']);
          }
          function Va(t, e, n, i, r, o, a) {
            (t =
              (function() {
                var t = vi();
                return (
                  !(
                    (t =
                      fi(t) != li
                        ? null
                        : (t = t.match(/\sChrome\/(\d+)/i)) && 2 == t.length
                        ? parseInt(t[1], 10)
                        : null) && t < 30
                  ) &&
                  (!me || !Ae || 9 < Ae)
                );
              })() || si()
                ? I(t.o, t)
                : ((Ra =
                    Ra ||
                    new qt(function(t, e) {
                      !(function(t, e) {
                        if (((window.gapi || {}).client || {}).request) t();
                        else {
                          (l[Ka] = function() {
                            ((window.gapi || {}).client || {}).request
                              ? t()
                              : e(Error('CORS_UNSUPPORTED'));
                          }),
                            (function(t, e) {
                              ma(t, null, e, void 0);
                            })(Ea(nt(Fa, { onload: Ka })), function() {
                              e(Error('CORS_UNSUPPORTED'));
                            });
                        }
                      })(t, e);
                    })),
                  I(t.m, t)))(e, n, i, r, o, a);
          }
          (Pa.prototype.R = function() {
            return this.b;
          }),
            (Pa.prototype.o = function(t, n, e, i, r, o) {
              if (
                si() &&
                (void 0 === l.fetch ||
                  void 0 === l.Headers ||
                  void 0 === l.Request)
              )
                throw new Yi(
                  'operation-not-supported-in-this-environment',
                  'fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.',
                );
              var a = new Qo(this.f);
              if (o) {
                a.g = Math.max(0, o);
                var s = setTimeout(function() {
                  a.dispatchEvent('timeout');
                }, o);
              }
              rn(a, 'complete', function() {
                s && clearTimeout(s);
                var e = null;
                try {
                  e =
                    JSON.parse(
                      (function(e) {
                        try {
                          return e.a ? e.a.responseText : '';
                        } catch (t) {
                          return (
                            Wo(e.b, 'Can not get responseText: ' + t.message),
                            ''
                          );
                        }
                      })(this),
                    ) || null;
                } catch (t) {
                  e = null;
                }
                n && n(e);
              }),
                on(a, 'ready', function() {
                  s && clearTimeout(s), le(this);
                }),
                on(a, 'timeout', function() {
                  s && clearTimeout(s), le(this), n && n(null);
                }),
                ia(a, t, e, i, r);
            });
          var Fa = new Y(
              Z,
              'https://apis.google.com/js/client.js?onload=%{onload}',
            ),
            Ka = '__fcb' + Math.floor(1e6 * Math.random()).toString();
          function qa(t) {
            if (!h((t = t.email)) || !ii.test(t)) throw new Yi('invalid-email');
          }
          function Ha(t) {
            'email' in t && qa(t);
          }
          function Ba(t) {
            if (!t[Ca]) throw new Yi('internal-error');
          }
          function Ga(t) {
            if (t.phoneNumber || t.temporaryProof) {
              if (!t.phoneNumber || !t.temporaryProof)
                throw new Yi('internal-error');
            } else {
              if (!t.sessionInfo) throw new Yi('missing-verification-id');
              if (!t.code) throw new Yi('missing-verification-code');
            }
          }
          (Pa.prototype.m = function(t, n, i, r, o) {
            var a = this;
            Ra.then(function() {
              window.gapi.client.setApiKey(a.c);
              var e = window.gapi.auth.getToken();
              window.gapi.auth.setToken(null),
                window.gapi.client.request({
                  path: t,
                  method: i,
                  body: r,
                  headers: o,
                  authType: 'none',
                  callback: function(t) {
                    window.gapi.auth.setToken(e), n && n(t);
                  },
                });
            }).s(function(t) {
              n &&
                n({
                  error: { message: (t && t.message) || 'CORS_UNSUPPORTED' },
                });
            });
          }),
            (Pa.prototype.ob = function() {
              return Ns(this, bs, {});
            }),
            (Pa.prototype.rb = function(t, e) {
              return Ns(this, ms, { idToken: t, email: e });
            }),
            (Pa.prototype.sb = function(t, e) {
              return Ns(this, gs, { idToken: t, password: e });
            });
          var Wa = { displayName: 'DISPLAY_NAME', photoUrl: 'PHOTO_URL' };
          function Xa(t) {
            if (
              !t.requestUri ||
              (!t.sessionId && !t.postBody && !t.pendingToken)
            )
              throw new Yi('internal-error');
          }
          function Ja(t, e) {
            return (
              e.oauthIdToken &&
                e.providerId &&
                0 == e.providerId.indexOf('oidc.') &&
                !e.pendingToken &&
                (t.sessionId
                  ? (e.nonce = t.sessionId)
                  : t.postBody &&
                    xn((t = new Rn(t.postBody)), 'nonce') &&
                    (e.nonce = t.get('nonce'))),
              e
            );
          }
          function Ya(t) {
            var e = null;
            if (
              (t.needConfirmation
                ? ((t.code = 'account-exists-with-different-credential'),
                  (e = No(t)))
                : 'FEDERATED_USER_ID_ALREADY_LINKED' == t.errorMessage
                ? ((t.code = 'credential-already-in-use'), (e = No(t)))
                : 'EMAIL_EXISTS' == t.errorMessage
                ? ((t.code = 'email-already-in-use'), (e = No(t)))
                : t.errorMessage && (e = Os(t.errorMessage)),
              e)
            )
              throw e;
            if (!t[Ca]) throw new Yi('internal-error');
          }
          function za(t, e) {
            return (e.returnIdpCredential = !0), Ns(t, ys, e);
          }
          function $a(t, e) {
            return (e.returnIdpCredential = !0), Ns(t, Is, e);
          }
          function Za(t, e) {
            return (
              (e.returnIdpCredential = !0), (e.autoCreate = !1), Ns(t, ws, e)
            );
          }
          function Qa(t) {
            if (!t.oobCode) throw new Yi('invalid-action-code');
          }
          ((t = Pa.prototype).tb = function(t, i) {
            var r = { idToken: t },
              o = [];
            return (
              B(Wa, function(t, e) {
                var n = i[e];
                null === n ? o.push(t) : e in i && (r[e] = n);
              }),
              o.length && (r.deleteAttribute = o),
              Ns(this, ms, r)
            );
          }),
            (t.kb = function(t, e) {
              return (
                J((t = { requestType: 'PASSWORD_RESET', email: t }), e),
                Ns(this, ls, t)
              );
            }),
            (t.lb = function(t, e) {
              return (
                J((t = { requestType: 'EMAIL_SIGNIN', email: t }), e),
                Ns(this, cs, t)
              );
            }),
            (t.jb = function(t, e) {
              return (
                J((t = { requestType: 'VERIFY_EMAIL', idToken: t }), e),
                Ns(this, hs, t)
              );
            }),
            (t.Wa = function(t) {
              return Ns(this, ks, t);
            }),
            (t.ab = function(t, e) {
              return Ns(this, ps, { oobCode: t, newPassword: e });
            }),
            (t.Ma = function(t) {
              return Ns(this, es, { oobCode: t });
            }),
            (t.Ya = function(t) {
              return Ns(this, ts, { oobCode: t });
            });
          var ts = { endpoint: 'setAccountInfo', D: Qa, fa: 'email', F: !0 },
            es = {
              endpoint: 'resetPassword',
              D: Qa,
              K: function(t) {
                var e = t.requestType;
                if (!e || (!t.email && 'EMAIL_SIGNIN' != e))
                  throw new Yi('internal-error');
              },
              F: !0,
            },
            ns = {
              endpoint: 'signupNewUser',
              D: function(t) {
                if ((qa(t), !t.password)) throw new Yi('weak-password');
              },
              K: Ba,
              T: !0,
              F: !0,
            },
            is = { endpoint: 'createAuthUri', F: !0 },
            rs = { endpoint: 'deleteAccount', V: ['idToken'] },
            os = {
              endpoint: 'setAccountInfo',
              V: ['idToken', 'deleteProvider'],
              D: function(t) {
                if (!p(t.deleteProvider)) throw new Yi('internal-error');
              },
            },
            as = {
              endpoint: 'emailLinkSignin',
              V: ['email', 'oobCode'],
              D: qa,
              K: Ba,
              T: !0,
              F: !0,
            },
            ss = {
              endpoint: 'emailLinkSignin',
              V: ['idToken', 'email', 'oobCode'],
              D: qa,
              K: Ba,
              T: !0,
            },
            us = { endpoint: 'getAccountInfo' },
            cs = {
              endpoint: 'getOobConfirmationCode',
              V: ['requestType'],
              D: function(t) {
                if ('EMAIL_SIGNIN' != t.requestType)
                  throw new Yi('internal-error');
                qa(t);
              },
              fa: 'email',
              F: !0,
            },
            hs = {
              endpoint: 'getOobConfirmationCode',
              V: ['idToken', 'requestType'],
              D: function(t) {
                if ('VERIFY_EMAIL' != t.requestType)
                  throw new Yi('internal-error');
              },
              fa: 'email',
              F: !0,
            },
            ls = {
              endpoint: 'getOobConfirmationCode',
              V: ['requestType'],
              D: function(t) {
                if ('PASSWORD_RESET' != t.requestType)
                  throw new Yi('internal-error');
                qa(t);
              },
              fa: 'email',
              F: !0,
            },
            fs = { wb: !0, endpoint: 'getProjectConfig', Kb: 'GET' },
            ds = {
              wb: !0,
              endpoint: 'getRecaptchaParam',
              Kb: 'GET',
              K: function(t) {
                if (!t.recaptchaSiteKey) throw new Yi('internal-error');
              },
            },
            ps = { endpoint: 'resetPassword', D: Qa, fa: 'email', F: !0 },
            vs = {
              endpoint: 'sendVerificationCode',
              V: ['phoneNumber', 'recaptchaToken'],
              fa: 'sessionInfo',
              F: !0,
            },
            ms = { endpoint: 'setAccountInfo', V: ['idToken'], D: Ha, T: !0 },
            gs = {
              endpoint: 'setAccountInfo',
              V: ['idToken'],
              D: function(t) {
                if ((Ha(t), !t.password)) throw new Yi('weak-password');
              },
              K: Ba,
              T: !0,
            },
            bs = { endpoint: 'signupNewUser', K: Ba, T: !0, F: !0 },
            ys = {
              endpoint: 'verifyAssertion',
              D: Xa,
              Ra: Ja,
              K: Ya,
              T: !0,
              F: !0,
            },
            ws = {
              endpoint: 'verifyAssertion',
              D: Xa,
              Ra: Ja,
              K: function(t) {
                if (t.errorMessage && 'USER_NOT_FOUND' == t.errorMessage)
                  throw new Yi('user-not-found');
                if (t.errorMessage) throw Os(t.errorMessage);
                if (!t[Ca]) throw new Yi('internal-error');
              },
              T: !0,
              F: !0,
            },
            Is = {
              endpoint: 'verifyAssertion',
              D: function(t) {
                if ((Xa(t), !t.idToken)) throw new Yi('internal-error');
              },
              Ra: Ja,
              K: Ya,
              T: !0,
            },
            Ts = {
              endpoint: 'verifyCustomToken',
              D: function(t) {
                if (!t.token) throw new Yi('invalid-custom-token');
              },
              K: Ba,
              T: !0,
              F: !0,
            },
            Es = {
              endpoint: 'verifyPassword',
              D: function(t) {
                if ((qa(t), !t.password)) throw new Yi('wrong-password');
              },
              K: Ba,
              T: !0,
              F: !0,
            },
            ks = { endpoint: 'verifyPhoneNumber', D: Ga, K: Ba, F: !0 },
            As = {
              endpoint: 'verifyPhoneNumber',
              D: function(t) {
                if (!t.idToken) throw new Yi('internal-error');
                Ga(t);
              },
              K: function(t) {
                if (t.temporaryProof)
                  throw ((t.code = 'credential-already-in-use'), No(t));
                Ba(t);
              },
            },
            Ss = {
              Yb: { USER_NOT_FOUND: 'user-not-found' },
              endpoint: 'verifyPhoneNumber',
              D: Ga,
              K: Ba,
              F: !0,
            };
          function Ns(t, e, n) {
            if (
              !(function(t, e) {
                if (!e || !e.length) return !0;
                if (!t) return !1;
                for (var n = 0; n < e.length; n++) {
                  var i = t[e[n]];
                  if (null == i || '' === i) return !1;
                }
                return !0;
              })(n, e.V)
            )
              return zt(new Yi('internal-error'));
            var i,
              r = e.Kb || 'POST';
            return Yt(n)
              .then(e.D)
              .then(function() {
                return (
                  e.T && (n.returnSecureToken = !0),
                  e.F && t.b && void 0 === n.tenantId && (n.tenantId = t.b),
                  (function(t, e, i, r, o, n) {
                    var a = In(t.h + e);
                    yn(a, 'key', t.c), n && yn(a, 'cb', E().toString());
                    var s = 'GET' == i;
                    if (s)
                      for (var u in r) r.hasOwnProperty(u) && yn(a, u, r[u]);
                    return new qt(function(e, n) {
                      Va(
                        t,
                        a.toString(),
                        function(t) {
                          t
                            ? t.error
                              ? n(_s(t, o || {}))
                              : e(t)
                            : n(new Yi('network-request-failed'));
                        },
                        i,
                        s ? void 0 : Gn(Ei(r)),
                        t.a,
                        t.i.get(),
                      );
                    });
                  })(t, e.endpoint, r, n, e.Yb, e.wb || !1)
                );
              })
              .then(function(t) {
                return (i = t), e.Ra ? e.Ra(n, i) : i;
              })
              .then(e.K)
              .then(function() {
                if (!e.fa) return i;
                if (!(e.fa in i)) throw new Yi('internal-error');
                return i[e.fa];
              });
          }
          function Os(t) {
            return _s({
              error: { errors: [{ message: t }], code: 400, message: t },
            });
          }
          function _s(t, e) {
            var n =
                ((t.error && t.error.errors && t.error.errors[0]) || {})
                  .reason || '',
              i = {
                keyInvalid: 'invalid-api-key',
                ipRefererBlocked: 'app-not-authorized',
              };
            if ((n = i[n] ? new Yi(i[n]) : null)) return n;
            for (var r in ((n = (t.error && t.error.message) || ''),
            J(
              (i = {
                INVALID_CUSTOM_TOKEN: 'invalid-custom-token',
                CREDENTIAL_MISMATCH: 'custom-token-mismatch',
                MISSING_CUSTOM_TOKEN: 'internal-error',
                INVALID_IDENTIFIER: 'invalid-email',
                MISSING_CONTINUE_URI: 'internal-error',
                INVALID_EMAIL: 'invalid-email',
                INVALID_PASSWORD: 'wrong-password',
                USER_DISABLED: 'user-disabled',
                MISSING_PASSWORD: 'internal-error',
                EMAIL_EXISTS: 'email-already-in-use',
                PASSWORD_LOGIN_DISABLED: 'operation-not-allowed',
                INVALID_IDP_RESPONSE: 'invalid-credential',
                INVALID_PENDING_TOKEN: 'invalid-credential',
                FEDERATED_USER_ID_ALREADY_LINKED: 'credential-already-in-use',
                MISSING_OR_INVALID_NONCE: 'missing-or-invalid-nonce',
                INVALID_MESSAGE_PAYLOAD: 'invalid-message-payload',
                INVALID_RECIPIENT_EMAIL: 'invalid-recipient-email',
                INVALID_SENDER: 'invalid-sender',
                EMAIL_NOT_FOUND: 'user-not-found',
                RESET_PASSWORD_EXCEED_LIMIT: 'too-many-requests',
                EXPIRED_OOB_CODE: 'expired-action-code',
                INVALID_OOB_CODE: 'invalid-action-code',
                MISSING_OOB_CODE: 'internal-error',
                INVALID_PROVIDER_ID: 'invalid-provider-id',
                CREDENTIAL_TOO_OLD_LOGIN_AGAIN: 'requires-recent-login',
                INVALID_ID_TOKEN: 'invalid-user-token',
                TOKEN_EXPIRED: 'user-token-expired',
                USER_NOT_FOUND: 'user-token-expired',
                CORS_UNSUPPORTED: 'cors-unsupported',
                DYNAMIC_LINK_NOT_ACTIVATED: 'dynamic-link-not-activated',
                INVALID_APP_ID: 'invalid-app-id',
                TOO_MANY_ATTEMPTS_TRY_LATER: 'too-many-requests',
                WEAK_PASSWORD: 'weak-password',
                OPERATION_NOT_ALLOWED: 'operation-not-allowed',
                USER_CANCELLED: 'user-cancelled',
                CAPTCHA_CHECK_FAILED: 'captcha-check-failed',
                INVALID_APP_CREDENTIAL: 'invalid-app-credential',
                INVALID_CODE: 'invalid-verification-code',
                INVALID_PHONE_NUMBER: 'invalid-phone-number',
                INVALID_SESSION_INFO: 'invalid-verification-id',
                INVALID_TEMPORARY_PROOF: 'invalid-credential',
                MISSING_APP_CREDENTIAL: 'missing-app-credential',
                MISSING_CODE: 'missing-verification-code',
                MISSING_PHONE_NUMBER: 'missing-phone-number',
                MISSING_SESSION_INFO: 'missing-verification-id',
                QUOTA_EXCEEDED: 'quota-exceeded',
                SESSION_EXPIRED: 'code-expired',
                REJECTED_CREDENTIAL: 'rejected-credential',
                INVALID_CONTINUE_URI: 'invalid-continue-uri',
                MISSING_ANDROID_PACKAGE_NAME: 'missing-android-pkg-name',
                MISSING_IOS_BUNDLE_ID: 'missing-ios-bundle-id',
                UNAUTHORIZED_DOMAIN: 'unauthorized-continue-uri',
                INVALID_DYNAMIC_LINK_DOMAIN: 'invalid-dynamic-link-domain',
                INVALID_OAUTH_CLIENT_ID: 'invalid-oauth-client-id',
                INVALID_CERT_HASH: 'invalid-cert-hash',
                UNSUPPORTED_TENANT_OPERATION: 'unsupported-tenant-operation',
                INVALID_TENANT_ID: 'invalid-tenant-id',
                TENANT_ID_MISMATCH: 'tenant-id-mismatch',
                ADMIN_ONLY_OPERATION: 'admin-restricted-operation',
              }),
              e || {},
            ),
            (e =
              (e = n.match(/^[^\s]+\s*:\s*([\s\S]*)$/)) && 1 < e.length
                ? e[1]
                : void 0),
            i))
              if (0 === n.indexOf(r)) return new Yi(i[r], e);
            return !e && t && (e = Ti(t)), new Yi('internal-error', e);
          }
          function Ps(t) {
            (this.b = t),
              (this.a = null),
              (this.gb = (function(o) {
                return (Ls =
                  Ls ||
                  new qt(function(t, e) {
                    function n() {
                      Ni(),
                        mi('gapi.load')('gapi.iframes', {
                          callback: t,
                          ontimeout: function() {
                            Ni(), e(Error('Network Error'));
                          },
                          timeout: Cs.get(),
                        });
                    }
                    if (mi('gapi.iframes.Iframe')) t();
                    else if (mi('gapi.load')) n();
                    else {
                      var i =
                        '__iframefcb' +
                        Math.floor(1e6 * Math.random()).toString();
                      (l[i] = function() {
                        mi('gapi.load') ? n() : e(Error('Network Error'));
                      }),
                        Yt(Ea((i = nt(Rs, { onload: i })))).s(function() {
                          e(Error('Network Error'));
                        });
                    }
                  }).s(function(t) {
                    throw ((Ls = null), t);
                  })).then(function() {
                  return new qt(function(i, r) {
                    mi('gapi.iframes.getContext')().open(
                      {
                        where: document.body,
                        url: o.b,
                        messageHandlersFilter: mi(
                          'gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER',
                        ),
                        attributes: {
                          style: {
                            position: 'absolute',
                            top: '-100px',
                            width: '1px',
                            height: '1px',
                          },
                        },
                        dontclear: !0,
                      },
                      function(t) {
                        function e() {
                          clearTimeout(n), i();
                        }
                        (o.a = t), o.a.restyle({ setHideOnLeave: !1 });
                        var n = setTimeout(function() {
                          r(Error('Network Error'));
                        }, Ds.get());
                        t.ping(e).then(e, function() {
                          r(Error('Network Error'));
                        });
                      },
                    );
                  });
                });
              })(this));
          }
          var Rs = new Y(
              Z,
              'https://apis.google.com/js/api.js?onload=%{onload}',
            ),
            Cs = new Oi(3e4, 6e4),
            Ds = new Oi(5e3, 15e3),
            Ls = null;
          function xs(t, e, n) {
            (this.i = t),
              (this.g = e),
              (this.h = n),
              (this.f = null),
              (this.a = Tn(this.i, '/__/auth/iframe')),
              yn(this.a, 'apiKey', this.g),
              yn(this.a, 'appName', this.h),
              (this.b = null),
              (this.c = []);
          }
          function Ms(t, e, n, i, r) {
            (this.o = t),
              (this.m = e),
              (this.c = n),
              (this.u = i),
              (this.i = this.g = this.l = null),
              (this.a = r),
              (this.h = this.f = null);
          }
          function js(t) {
            try {
              return fl
                .app(t)
                .auth()
                .Ca();
            } catch (t) {
              return [];
            }
          }
          function Us(t, e, n, i, r) {
            (this.u = t),
              (this.f = e),
              (this.b = n),
              (this.c = i || null),
              (this.h = r || null),
              (this.m = this.o = this.v = null),
              (this.g = []),
              (this.l = this.a = null);
          }
          function Vs(t) {
            var s = $n();
            return (function(t) {
              return Ns(t, fs, {}).then(function(t) {
                return t.authorizedDomains || [];
              });
            })(t).then(function(t) {
              t: {
                var e = In(s),
                  n = e.f;
                e = e.b;
                for (var i = 0; i < t.length; i++) {
                  var r = t[i],
                    o = e,
                    a = n;
                  if (
                    (o =
                      0 == r.indexOf('chrome-extension://')
                        ? In(r).b == o && 'chrome-extension' == a
                        : ('http' == a || 'https' == a) &&
                          (ni.test(r)
                            ? o == r
                            : ((r = r.split('.').join('\\.')),
                              new RegExp(
                                '^(.+\\.' + r + '|' + r + ')$',
                                'i',
                              ).test(o))))
                  ) {
                    t = !0;
                    break t;
                  }
                }
                t = !1;
              }
              if (!t) throw new Ao($n());
            });
          }
          function Fs(r) {
            return (
              r.l ||
                (r.l = ri().then(function() {
                  if (!r.o) {
                    var t = r.c,
                      e = r.h,
                      n = js(r.b),
                      i = new xs(r.u, r.f, r.b);
                    (i.f = t),
                      (i.b = e),
                      (i.c = H(n || [])),
                      (r.o = i.toString());
                  }
                  (r.i = new Ps(r.o)),
                    (function(i) {
                      if (!i.i) throw Error('IfcHandler must be initialized!');
                      !(function(t, e) {
                        t.gb.then(function() {
                          t.a.register(
                            'authEvent',
                            e,
                            mi('gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER'),
                          );
                        });
                      })(i.i, function(t) {
                        var e = {};
                        if (t && t.authEvent) {
                          var n = !1;
                          for (t = Io(t.authEvent), e = 0; e < i.g.length; e++)
                            n = i.g[e](t) || n;
                          return ((e = {}).status = n ? 'ACK' : 'ERROR'), Yt(e);
                        }
                        return (e.status = 'ERROR'), Yt(e);
                      });
                    })(r);
                })),
              r.l
            );
          }
          function Ks(t) {
            return (
              t.m ||
                ((t.v = t.c ? pi(t.c, js(t.b)) : null),
                (t.m = new Pa(t.f, Nr(t.h), t.v))),
              t.m
            );
          }
          function qs(t, e, n, i, r, o, a, s, u, c, h) {
            return (
              ((t = new Ms(t, e, n, i, r)).l = o),
              (t.g = a),
              (t.i = s),
              (t.b = W(u || null)),
              (t.f = c),
              t.nb(h).toString()
            );
          }
          function Hs(t) {
            if (
              ((this.a =
                t ||
                (fl.INTERNAL.reactNative &&
                  fl.INTERNAL.reactNative.AsyncStorage)),
              !this.a)
            )
              throw new Yi(
                'internal-error',
                'The React Native compatibility library was not found.',
              );
            this.type = 'asyncStorage';
          }
          function Bs(t) {
            (this.b = t), (this.a = {}), (this.f = I(this.c, this));
          }
          (xs.prototype.toString = function() {
            return (
              this.f ? yn(this.a, 'v', this.f) : Ln(this.a.a, 'v'),
              this.b ? yn(this.a, 'eid', this.b) : Ln(this.a.a, 'eid'),
              this.c.length
                ? yn(this.a, 'fw', this.c.join(','))
                : Ln(this.a.a, 'fw'),
              this.a.toString()
            );
          }),
            (Ms.prototype.nb = function(t) {
              return (this.h = t), this;
            }),
            (Ms.prototype.toString = function() {
              var t = Tn(this.o, '/__/auth/handler');
              if (
                (yn(t, 'apiKey', this.m),
                yn(t, 'appName', this.c),
                yn(t, 'authType', this.u),
                this.a.isOAuthProvider)
              ) {
                var e = this.a;
                try {
                  var n = fl
                    .app(this.c)
                    .auth()
                    .ha();
                } catch (t) {
                  n = null;
                }
                for (var i in ((e.bb = n),
                yn(t, 'providerId', this.a.providerId),
                (n = Ei((e = this.a).zb))))
                  n[i] = n[i].toString();
                (i = e.Fc), (n = W(n));
                for (var r = 0; r < i.length; r++) {
                  var o = i[r];
                  o in n && delete n[o];
                }
                e.eb && e.bb && !n[e.eb] && (n[e.eb] = e.bb),
                  G(n) || yn(t, 'customParameters', Ti(n));
              }
              if (
                ('function' == typeof this.a.Hb &&
                  (e = this.a.Hb()).length &&
                  yn(t, 'scopes', e.join(',')),
                this.l ? yn(t, 'redirectUrl', this.l) : Ln(t.a, 'redirectUrl'),
                this.g ? yn(t, 'eventId', this.g) : Ln(t.a, 'eventId'),
                this.i ? yn(t, 'v', this.i) : Ln(t.a, 'v'),
                this.b)
              )
                for (var a in this.b)
                  this.b.hasOwnProperty(a) && !wn(t, a) && yn(t, a, this.b[a]);
              return (
                this.h ? yn(t, 'tid', this.h) : Ln(t.a, 'tid'),
                this.f ? yn(t, 'eid', this.f) : Ln(t.a, 'eid'),
                (a = js(this.c)).length && yn(t, 'fw', a.join(',')),
                t.toString()
              );
            }),
            ((t = Us.prototype).Fb = function(e, n, t) {
              var i = new Yi('popup-closed-by-user'),
                r = new Yi('web-storage-unsupported'),
                o = this,
                a = !1;
              return this.ia()
                .then(function() {
                  (function(t) {
                    var e = { type: 'webStorageSupport' };
                    return Fs(t)
                      .then(function() {
                        return (function(e, n) {
                          return e.gb.then(function() {
                            return new qt(function(t) {
                              e.a.send(
                                n.type,
                                n,
                                t,
                                mi('gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER'),
                              );
                            });
                          });
                        })(t.i, e);
                      })
                      .then(function(t) {
                        if (t && t.length && void 0 !== t[0].webStorageSupport)
                          return t[0].webStorageSupport;
                        throw Error();
                      });
                  })(o).then(function(t) {
                    t || (e && ti(e), n(r), (a = !0));
                  });
                })
                .s(function() {})
                .then(function() {
                  if (!a)
                    return (function(n) {
                      return new qt(function(e) {
                        return (function t() {
                          un(2e3).then(function() {
                            if (n && !n.closed) return t();
                            e();
                          });
                        })();
                      });
                    })(e);
                })
                .then(function() {
                  if (!a)
                    return un(t).then(function() {
                      n(i);
                    });
                });
            }),
            (t.Ob = function() {
              var t = vi();
              return !Ii(t) && !Si(t);
            }),
            (t.Jb = function() {
              return !1;
            }),
            (t.Db = function(e, t, n, i, r, o, a, s) {
              if (!e) return zt(new Yi('popup-blocked'));
              if (a && !Ii())
                return (
                  this.ia().s(function(t) {
                    ti(e), r(t);
                  }),
                  i(),
                  Yt()
                );
              this.a || (this.a = Vs(Ks(this)));
              var u = this;
              return this.a
                .then(function() {
                  var t = u.ia().s(function(t) {
                    throw (ti(e), r(t), t);
                  });
                  return i(), t;
                })
                .then(function() {
                  yo(n),
                    a ||
                      Zn(
                        qs(u.u, u.f, u.b, t, n, null, o, u.c, void 0, u.h, s),
                        e,
                      );
                })
                .s(function(t) {
                  throw ('auth/network-request-failed' == t.code &&
                    (u.a = null),
                  t);
                });
            }),
            (t.Eb = function(t, e, n, i) {
              this.a || (this.a = Vs(Ks(this)));
              var r = this;
              return this.a
                .then(function() {
                  yo(e),
                    Zn(qs(r.u, r.f, r.b, t, e, $n(), n, r.c, void 0, r.h, i));
                })
                .s(function(t) {
                  throw ('auth/network-request-failed' == t.code &&
                    (r.a = null),
                  t);
                });
            }),
            (t.ia = function() {
              var t = this;
              return Fs(this)
                .then(function() {
                  return t.i.gb;
                })
                .s(function() {
                  throw ((t.a = null), new Yi('network-request-failed'));
                });
            }),
            (t.Rb = function() {
              return !0;
            }),
            (t.Aa = function(t) {
              this.g.push(t);
            }),
            (t.Na = function(e) {
              K(this.g, function(t) {
                return t == e;
              });
            }),
            ((t = Hs.prototype).get = function(t) {
              return Yt(this.a.getItem(t)).then(function(t) {
                return t && ki(t);
              });
            }),
            (t.set = function(t, e) {
              return Yt(this.a.setItem(t, Ti(e)));
            }),
            (t.S = function(t) {
              return Yt(this.a.removeItem(t));
            }),
            (t.$ = function() {}),
            (t.ea = function() {});
          var Gs,
            Ws = [];
          function Xs(t, e, n) {
            G(t.a) && t.b.addEventListener('message', t.f),
              void 0 === t.a[e] && (t.a[e] = []),
              t.a[e].push(n);
          }
          function Js(t) {
            this.a = t;
          }
          function Ys(t) {
            (this.c = t), (this.b = !1), (this.a = []);
          }
          function zs(i, t, e, n) {
            var r,
              o,
              a,
              s,
              u = e || {},
              c = null;
            if (i.b) return zt(Error('connection_unavailable'));
            var h = n ? 800 : 50,
              l =
                'undefined' != typeof MessageChannel
                  ? new MessageChannel()
                  : null;
            return new qt(function(e, n) {
              l
                ? ((r = Math.floor(
                    Math.random() * Math.pow(10, 20),
                  ).toString()),
                  l.port1.start(),
                  (a = setTimeout(function() {
                    n(Error('unsupported_event'));
                  }, h)),
                  (c = {
                    messageChannel: l,
                    onMessage: (o = function(t) {
                      t.data.eventId === r &&
                        ('ack' === t.data.status
                          ? (clearTimeout(a),
                            (s = setTimeout(function() {
                              n(Error('timeout'));
                            }, 3e3)))
                          : 'done' === t.data.status
                          ? (clearTimeout(s),
                            void 0 !== t.data.response
                              ? e(t.data.response)
                              : n(Error('unknown_error')))
                          : (clearTimeout(a),
                            clearTimeout(s),
                            n(Error('invalid_response'))));
                    }),
                  }),
                  i.a.push(c),
                  l.port1.addEventListener('message', o),
                  i.c.postMessage({ eventType: t, eventId: r, data: u }, [
                    l.port2,
                  ]))
                : n(Error('connection_unavailable'));
            })
              .then(function(t) {
                return $s(i, c), t;
              })
              .s(function(t) {
                throw ($s(i, c), t);
              });
          }
          function $s(t, e) {
            if (e) {
              var n = e.messageChannel,
                i = e.onMessage;
              n && (n.port1.removeEventListener('message', i), n.port1.close()),
                K(t.a, function(t) {
                  return t == e;
                });
            }
          }
          function Zs() {
            if (!eu()) throw new Yi('web-storage-unsupported');
            (this.c = {}),
              (this.a = []),
              (this.b = 0),
              (this.u = l.indexedDB),
              (this.type = 'indexedDB'),
              (this.g = this.l = this.f = this.i = null),
              (this.o = !1),
              (this.h = null);
            var i = this;
            si() && self
              ? ((this.l = (function() {
                  var e = si() ? self : null;
                  if (
                    (M(Ws, function(t) {
                      t.b == e && (n = t);
                    }),
                    !n)
                  ) {
                    var n = new Bs(e);
                    Ws.push(n);
                  }
                  return n;
                })()),
                Xs(this.l, 'keyChanged', function(t, n) {
                  return au(i).then(function(e) {
                    return (
                      0 < e.length &&
                        M(i.a, function(t) {
                          t(e);
                        }),
                      { keyProcessed: V(e, n.key) }
                    );
                  });
                }),
                Xs(this.l, 'ping', function() {
                  return Yt(['keyChanged']);
                }))
              : (function() {
                  var t = l.navigator;
                  return t && t.serviceWorker
                    ? Yt()
                        .then(function() {
                          return t.serviceWorker.ready;
                        })
                        .then(function(t) {
                          return t.active || null;
                        })
                        .s(function() {
                          return null;
                        })
                    : Yt(null);
                })().then(function(t) {
                  (i.h = t) &&
                    ((i.g = new Ys(new Js(t))),
                    zs(i.g, 'ping', null, !0)
                      .then(function(t) {
                        t[0].fulfilled &&
                          V(t[0].value, 'keyChanged') &&
                          (i.o = !0);
                      })
                      .s(function() {}));
                });
          }
          function Qs(i) {
            return new qt(function(e, n) {
              var t = i.u.open('firebaseLocalStorageDb', 1);
              (t.onerror = function(t) {
                try {
                  t.preventDefault();
                } catch (t) {}
                n(Error(t.target.error));
              }),
                (t.onupgradeneeded = function(t) {
                  t = t.target.result;
                  try {
                    t.createObjectStore('firebaseLocalStorage', {
                      keyPath: 'fbase_key',
                    });
                  } catch (t) {
                    n(t);
                  }
                }),
                (t.onsuccess = function(t) {
                  (t = t.target.result).objectStoreNames.contains(
                    'firebaseLocalStorage',
                  )
                    ? e(t)
                    : (function(i) {
                        return new qt(function(t, e) {
                          var n = i.u.deleteDatabase('firebaseLocalStorageDb');
                          (n.onsuccess = function() {
                            t();
                          }),
                            (n.onerror = function(t) {
                              e(Error(t.target.error));
                            });
                        });
                      })(i)
                        .then(function() {
                          return Qs(i);
                        })
                        .then(function(t) {
                          e(t);
                        })
                        .s(function(t) {
                          n(t);
                        });
                });
            });
          }
          function tu(t) {
            return t.m || (t.m = Qs(t)), t.m;
          }
          function eu() {
            try {
              return !!l.indexedDB;
            } catch (t) {
              return !1;
            }
          }
          function nu(t) {
            return t.objectStore('firebaseLocalStorage');
          }
          function iu(t, e) {
            return t.transaction(
              ['firebaseLocalStorage'],
              e ? 'readwrite' : 'readonly',
            );
          }
          function ru(t) {
            return new qt(function(e, n) {
              (t.onsuccess = function(t) {
                t && t.target ? e(t.target.result) : e();
              }),
                (t.onerror = function(t) {
                  n(t.target.error);
                });
            });
          }
          function ou(t, e) {
            return t.g &&
              t.h &&
              (function() {
                var t = l.navigator;
                return (
                  (t && t.serviceWorker && t.serviceWorker.controller) || null
                );
              })() === t.h
              ? zs(t.g, 'keyChanged', { key: e }, t.o)
                  .then(function() {})
                  .s(function() {})
              : Yt();
          }
          function au(i) {
            return tu(i)
              .then(function(t) {
                var r = nu(iu(t, !1));
                return r.getAll
                  ? ru(r.getAll())
                  : new qt(function(e, n) {
                      var i = [],
                        t = r.openCursor();
                      (t.onsuccess = function(t) {
                        (t = t.target.result)
                          ? (i.push(t.value), t.continue())
                          : e(i);
                      }),
                        (t.onerror = function(t) {
                          n(t.target.error);
                        });
                    });
              })
              .then(function(t) {
                var e = {},
                  n = [];
                if (0 == i.b) {
                  for (n = 0; n < t.length; n++) e[t[n].fbase_key] = t[n].value;
                  (n = (function t(e, n) {
                    var i,
                      r = [];
                    for (i in e)
                      i in n
                        ? typeof e[i] != typeof n[i]
                          ? r.push(i)
                          : 'object' == typeof e[i] &&
                            null != e[i] &&
                            null != n[i]
                          ? 0 < t(e[i], n[i]).length && r.push(i)
                          : e[i] !== n[i] && r.push(i)
                        : r.push(i);
                    for (i in n) i in e || r.push(i);
                    return r;
                  })(i.c, e)),
                    (i.c = e);
                }
                return n;
              });
          }
          function su(t) {
            t.i && t.i.cancel('STOP_EVENT'),
              t.f && (clearTimeout(t.f), (t.f = null));
          }
          function uu(t) {
            var i = this,
              r = null;
            (this.a = []),
              (this.type = 'indexedDB'),
              (this.c = t),
              (this.b = Yt()
                .then(function() {
                  if (eu()) {
                    var e = Ai(),
                      n = '__sak' + e;
                    return (
                      (Gs = Gs || new Zs()),
                      (r = Gs)
                        .set(n, e)
                        .then(function() {
                          return r.get(n);
                        })
                        .then(function(t) {
                          if (t !== e) throw Error('indexedDB not supported!');
                          return r.S(n);
                        })
                        .then(function() {
                          return r;
                        })
                        .s(function() {
                          return i.c;
                        })
                    );
                  }
                  return i.c;
                })
                .then(function(t) {
                  return (
                    (i.type = t.type),
                    t.$(function(e) {
                      M(i.a, function(t) {
                        t(e);
                      });
                    }),
                    t
                  );
                }));
          }
          function cu() {
            (this.a = {}), (this.type = 'inMemory');
          }
          function hu() {
            if (
              !(function() {
                var t = 'Node' == ui();
                if (
                  !(t =
                    lu() ||
                    (t && fl.INTERNAL.node && fl.INTERNAL.node.localStorage))
                )
                  return !1;
                try {
                  return t.setItem('__sak', '1'), t.removeItem('__sak'), !0;
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              if ('Node' == ui())
                throw new Yi(
                  'internal-error',
                  'The LocalStorage compatibility library was not found.',
                );
              throw new Yi('web-storage-unsupported');
            }
            (this.a = lu() || fl.INTERNAL.node.localStorage),
              (this.type = 'localStorage');
          }
          function lu() {
            try {
              var t = l.localStorage,
                e = Ai();
              return t && (t.setItem(e, '1'), t.removeItem(e)), t;
            } catch (t) {
              return null;
            }
          }
          function fu() {
            this.type = 'nullStorage';
          }
          function du() {
            if (
              !(function() {
                var t = 'Node' == ui();
                if (
                  !(t =
                    pu() ||
                    (t && fl.INTERNAL.node && fl.INTERNAL.node.sessionStorage))
                )
                  return !1;
                try {
                  return t.setItem('__sak', '1'), t.removeItem('__sak'), !0;
                } catch (t) {
                  return !1;
                }
              })()
            ) {
              if ('Node' == ui())
                throw new Yi(
                  'internal-error',
                  'The SessionStorage compatibility library was not found.',
                );
              throw new Yi('web-storage-unsupported');
            }
            (this.a = pu() || fl.INTERNAL.node.sessionStorage),
              (this.type = 'sessionStorage');
          }
          function pu() {
            try {
              var t = l.sessionStorage,
                e = Ai();
              return t && (t.setItem(e, '1'), t.removeItem(e)), t;
            } catch (t) {
              return null;
            }
          }
          function vu() {
            var t = {};
            (t.Browser = bu),
              (t.Node = yu),
              (t.ReactNative = wu),
              (t.Worker = Iu),
              (this.a = t[ui()]);
          }
          (Bs.prototype.c = function(n) {
            var i = n.data.eventType,
              r = n.data.eventId,
              t = this.a[i];
            if (t && 0 < t.length) {
              n.ports[0].postMessage({
                status: 'ack',
                eventId: r,
                eventType: i,
                response: null,
              });
              var e = [];
              M(t, function(t) {
                e.push(
                  Yt().then(function() {
                    return t(n.origin, n.data.data);
                  }),
                );
              }),
                Zt(e).then(function(t) {
                  var e = [];
                  M(t, function(t) {
                    e.push({
                      fulfilled: t.Gb,
                      value: t.value,
                      reason: t.reason ? t.reason.message : void 0,
                    });
                  }),
                    M(e, function(t) {
                      for (var e in t) void 0 === t[e] && delete t[e];
                    }),
                    n.ports[0].postMessage({
                      status: 'done',
                      eventId: r,
                      eventType: i,
                      response: e,
                    });
                });
            }
          }),
            (Js.prototype.postMessage = function(t, e) {
              this.a.postMessage(t, e);
            }),
            (Ys.prototype.close = function() {
              for (; 0 < this.a.length; ) $s(this, this.a[0]);
              this.b = !0;
            }),
            ((t = Zs.prototype).set = function(n, i) {
              var r,
                o = !1,
                a = this;
              return tu(this)
                .then(function(t) {
                  return ru((t = nu(iu((r = t), !0))).get(n));
                })
                .then(function(t) {
                  var e = nu(iu(r, !0));
                  return t
                    ? ((t.value = i), ru(e.put(t)))
                    : (a.b++,
                      (o = !0),
                      ((t = {}).fbase_key = n),
                      (t.value = i),
                      ru(e.add(t)));
                })
                .then(function() {
                  return (a.c[n] = i), ou(a, n);
                })
                .ka(function() {
                  o && a.b--;
                });
            }),
            (t.get = function(e) {
              return tu(this)
                .then(function(t) {
                  return ru(nu(iu(t, !1)).get(e));
                })
                .then(function(t) {
                  return t && t.value;
                });
            }),
            (t.S = function(e) {
              var n = !1,
                i = this;
              return tu(this)
                .then(function(t) {
                  return (n = !0), i.b++, ru(nu(iu(t, !0)).delete(e));
                })
                .then(function() {
                  return delete i.c[e], ou(i, e);
                })
                .ka(function() {
                  n && i.b--;
                });
            }),
            (t.$ = function(t) {
              0 == this.a.length &&
                (function(t) {
                  su(t),
                    (function e() {
                      t.f = setTimeout(function() {
                        t.i = au(t)
                          .then(function(e) {
                            0 < e.length &&
                              M(t.a, function(t) {
                                t(e);
                              });
                          })
                          .then(function() {
                            e();
                          })
                          .s(function(t) {
                            'STOP_EVENT' != t.message && e();
                          });
                      }, 800);
                    })();
                })(this),
                this.a.push(t);
            }),
            (t.ea = function(e) {
              K(this.a, function(t) {
                return t == e;
              }),
                0 == this.a.length && su(this);
            }),
            ((t = uu.prototype).get = function(e) {
              return this.b.then(function(t) {
                return t.get(e);
              });
            }),
            (t.set = function(e, n) {
              return this.b.then(function(t) {
                return t.set(e, n);
              });
            }),
            (t.S = function(e) {
              return this.b.then(function(t) {
                return t.S(e);
              });
            }),
            (t.$ = function(t) {
              this.a.push(t);
            }),
            (t.ea = function(e) {
              K(this.a, function(t) {
                return t == e;
              });
            }),
            ((t = cu.prototype).get = function(t) {
              return Yt(this.a[t]);
            }),
            (t.set = function(t, e) {
              return (this.a[t] = e), Yt();
            }),
            (t.S = function(t) {
              return delete this.a[t], Yt();
            }),
            (t.$ = function() {}),
            (t.ea = function() {}),
            ((t = hu.prototype).get = function(t) {
              var e = this;
              return Yt().then(function() {
                return ki(e.a.getItem(t));
              });
            }),
            (t.set = function(e, n) {
              var i = this;
              return Yt().then(function() {
                var t = Ti(n);
                null === t ? i.S(e) : i.a.setItem(e, t);
              });
            }),
            (t.S = function(t) {
              var e = this;
              return Yt().then(function() {
                e.a.removeItem(t);
              });
            }),
            (t.$ = function(t) {
              l.window && Be(l.window, 'storage', t);
            }),
            (t.ea = function(t) {
              l.window && Xe(l.window, 'storage', t);
            }),
            ((t = fu.prototype).get = function() {
              return Yt(null);
            }),
            (t.set = function() {
              return Yt();
            }),
            (t.S = function() {
              return Yt();
            }),
            (t.$ = function() {}),
            (t.ea = function() {}),
            ((t = du.prototype).get = function(t) {
              var e = this;
              return Yt().then(function() {
                return ki(e.a.getItem(t));
              });
            }),
            (t.set = function(e, n) {
              var i = this;
              return Yt().then(function() {
                var t = Ti(n);
                null === t ? i.S(e) : i.a.setItem(e, t);
              });
            }),
            (t.S = function(t) {
              var e = this;
              return Yt().then(function() {
                e.a.removeItem(t);
              });
            }),
            (t.$ = function() {}),
            (t.ea = function() {});
          var mu,
            gu,
            bu = { C: hu, Ta: du },
            yu = { C: hu, Ta: du },
            wu = { C: Hs, Ta: fu },
            Iu = { C: hu, Ta: fu },
            Tu = { ad: 'local', NONE: 'none', cd: 'session' };
          function Eu() {
            var t = !(Si(vi()) || !ai()),
              e = Ii(),
              n = gi();
            (this.m = t),
              (this.h = e),
              (this.l = n),
              (this.a = {}),
              (t = mu = mu || new vu());
            try {
              this.g =
                (!zn() && Ri()) || !l.indexedDB
                  ? new t.a.C()
                  : new uu(si() ? new cu() : new t.a.C());
            } catch (t) {
              (this.g = new cu()), (this.h = !0);
            }
            try {
              this.i = new t.a.Ta();
            } catch (t) {
              this.i = new cu();
            }
            (this.u = new cu()), (this.f = I(this.Pb, this)), (this.b = {});
          }
          function ku() {
            return (gu = gu || new Eu());
          }
          function Au(t, e) {
            switch (e) {
              case 'session':
                return t.i;
              case 'none':
                return t.u;
              default:
                return t.g;
            }
          }
          function Su(t, e) {
            return 'firebase:' + t.name + (e ? ':' + e : '');
          }
          function Nu(t, e, n) {
            return (
              (n = Su(e, n)), 'local' == e.C && (t.b[n] = null), Au(t, e.C).S(n)
            );
          }
          function Ou(t) {
            t.c && (clearInterval(t.c), (t.c = null));
          }
          function _u(t) {
            (this.a = t), (this.b = ku());
          }
          ((t = Eu.prototype).get = function(t, e) {
            return Au(this, t.C).get(Su(t, e));
          }),
            (t.set = function(e, t, n) {
              var i = Su(e, n),
                r = this,
                o = Au(this, e.C);
              return o
                .set(i, t)
                .then(function() {
                  return o.get(i);
                })
                .then(function(t) {
                  'local' == e.C && (r.b[i] = t);
                });
            }),
            (t.addListener = function(t, e, n) {
              (t = Su(t, e)),
                this.l && (this.b[t] = l.localStorage.getItem(t)),
                G(this.a) &&
                  (Au(this, 'local').$(this.f),
                  this.h ||
                    ((zn() || !Ri()) && l.indexedDB) ||
                    !this.l ||
                    (function(i) {
                      Ou(i),
                        (i.c = setInterval(function() {
                          for (var t in i.a) {
                            var e = l.localStorage.getItem(t),
                              n = i.b[t];
                            e != n &&
                              ((i.b[t] = e),
                              (e = new De({
                                type: 'storage',
                                key: t,
                                target: window,
                                oldValue: n,
                                newValue: e,
                                a: !0,
                              })),
                              i.Pb(e));
                          }
                        }, 1e3));
                    })(this)),
                this.a[t] || (this.a[t] = []),
                this.a[t].push(n);
            }),
            (t.removeListener = function(t, e, n) {
              (t = Su(t, e)),
                this.a[t] &&
                  (K(this.a[t], function(t) {
                    return t == n;
                  }),
                  0 == this.a[t].length && delete this.a[t]),
                G(this.a) && (Au(this, 'local').ea(this.f), Ou(this));
            }),
            (t.Pb = function(t) {
              if (t && t.f) {
                var e = t.a.key;
                if (null == e)
                  for (var n in this.a) {
                    var i = this.b[n];
                    void 0 === i && (i = null);
                    var r = l.localStorage.getItem(n);
                    r !== i && ((this.b[n] = r), this.$a(n));
                  }
                else if (0 == e.indexOf('firebase:') && this.a[e]) {
                  if (
                    (void 0 !== t.a.a ? Au(this, 'local').ea(this.f) : Ou(this),
                    this.m)
                  )
                    if (
                      ((n = l.localStorage.getItem(e)),
                      (i = t.a.newValue) !== n)
                    )
                      null !== i
                        ? l.localStorage.setItem(e, i)
                        : l.localStorage.removeItem(e);
                    else if (this.b[e] === i && void 0 === t.a.a) return;
                  var o = this;
                  (n = function() {
                    (void 0 === t.a.a &&
                      o.b[e] === l.localStorage.getItem(e)) ||
                      ((o.b[e] = l.localStorage.getItem(e)), o.$a(e));
                  }),
                    me &&
                    Ae &&
                    10 == Ae &&
                    l.localStorage.getItem(e) !== t.a.newValue &&
                    t.a.newValue !== t.a.oldValue
                      ? setTimeout(n, 10)
                      : n();
                }
              } else M(t, I(this.$a, this));
            }),
            (t.$a = function(t) {
              this.a[t] &&
                M(this.a[t], function(t) {
                  t();
                });
            });
          var Pu,
            Ru = { name: 'authEvent', C: 'local' };
          function Cu() {
            this.a = ku();
          }
          function Du(t, e) {
            (this.b = Lu),
              (this.f = l.Uint8Array ? new Uint8Array(this.b) : Array(this.b)),
              (this.g = this.c = 0),
              (this.a = []),
              (this.i = t),
              (this.h = e),
              (this.l = l.Int32Array ? new Int32Array(64) : Array(64)),
              void 0 !== Pu || (Pu = l.Int32Array ? new Int32Array(Ku) : Ku),
              this.reset();
          }
          k(Du, function() {
            this.b = -1;
          });
          for (var Lu = 64, xu = Lu - 1, Mu = [], ju = 0; ju < xu; ju++)
            Mu[ju] = 0;
          var Uu = q(128, Mu);
          function Vu(t) {
            for (var e = t.f, n = t.l, i = 0, r = 0; r < e.length; )
              (n[i++] =
                (e[r] << 24) | (e[r + 1] << 16) | (e[r + 2] << 8) | e[r + 3]),
                (r = 4 * i);
            for (e = 16; e < 64; e++) {
              (r = 0 | n[e - 15]), (i = 0 | n[e - 2]);
              var o =
                  ((0 | n[e - 16]) +
                    (((r >>> 7) | (r << 25)) ^
                      ((r >>> 18) | (r << 14)) ^
                      (r >>> 3))) |
                  0,
                a =
                  ((0 | n[e - 7]) +
                    (((i >>> 17) | (i << 15)) ^
                      ((i >>> 19) | (i << 13)) ^
                      (i >>> 10))) |
                  0;
              n[e] = (o + a) | 0;
            }
            (i = 0 | t.a[0]), (r = 0 | t.a[1]);
            var s = 0 | t.a[2],
              u = 0 | t.a[3],
              c = 0 | t.a[4],
              h = 0 | t.a[5],
              l = 0 | t.a[6];
            for (o = 0 | t.a[7], e = 0; e < 64; e++) {
              var f =
                ((((i >>> 2) | (i << 30)) ^
                  ((i >>> 13) | (i << 19)) ^
                  ((i >>> 22) | (i << 10))) +
                  ((i & r) ^ (i & s) ^ (r & s))) |
                0;
              (a =
                ((o =
                  (o +
                    (((c >>> 6) | (c << 26)) ^
                      ((c >>> 11) | (c << 21)) ^
                      ((c >>> 25) | (c << 7)))) |
                  0) +
                  (((a = ((a = (c & h) ^ (~c & l)) + (0 | Pu[e])) | 0) +
                    (0 | n[e])) |
                    0)) |
                0),
                (o = l),
                (l = h),
                (h = c),
                (c = (u + a) | 0),
                (u = s),
                (s = r),
                (r = i),
                (i = (a + f) | 0);
            }
            (t.a[0] = (t.a[0] + i) | 0),
              (t.a[1] = (t.a[1] + r) | 0),
              (t.a[2] = (t.a[2] + s) | 0),
              (t.a[3] = (t.a[3] + u) | 0),
              (t.a[4] = (t.a[4] + c) | 0),
              (t.a[5] = (t.a[5] + h) | 0),
              (t.a[6] = (t.a[6] + l) | 0),
              (t.a[7] = (t.a[7] + o) | 0);
          }
          function Fu(t, e, n) {
            void 0 === n && (n = e.length);
            var i = 0,
              r = t.c;
            if (h(e))
              for (; i < n; )
                (t.f[r++] = e.charCodeAt(i++)), r == t.b && (Vu(t), (r = 0));
            else {
              if (!v(e)) throw Error('message must be string or array');
              for (; i < n; ) {
                var o = e[i++];
                if (
                  !('number' == typeof o && 0 <= o && o <= 255 && o == (0 | o))
                )
                  throw Error('message must be a byte array');
                (t.f[r++] = o), r == t.b && (Vu(t), (r = 0));
              }
            }
            (t.c = r), (t.g += n);
          }
          Du.prototype.reset = function() {
            (this.g = this.c = 0),
              (this.a = l.Int32Array ? new Int32Array(this.h) : H(this.h));
          };
          var Ku = [
            1116352408,
            1899447441,
            3049323471,
            3921009573,
            961987163,
            1508970993,
            2453635748,
            2870763221,
            3624381080,
            310598401,
            607225278,
            1426881987,
            1925078388,
            2162078206,
            2614888103,
            3248222580,
            3835390401,
            4022224774,
            264347078,
            604807628,
            770255983,
            1249150122,
            1555081692,
            1996064986,
            2554220882,
            2821834349,
            2952996808,
            3210313671,
            3336571891,
            3584528711,
            113926993,
            338241895,
            666307205,
            773529912,
            1294757372,
            1396182291,
            1695183700,
            1986661051,
            2177026350,
            2456956037,
            2730485921,
            2820302411,
            3259730800,
            3345764771,
            3516065817,
            3600352804,
            4094571909,
            275423344,
            430227734,
            506948616,
            659060556,
            883997877,
            958139571,
            1322822218,
            1537002063,
            1747873779,
            1955562222,
            2024104815,
            2227730452,
            2361852424,
            2428436474,
            2756734187,
            3204031479,
            3329325298,
          ];
          function qu() {
            Du.call(this, 8, Hu);
          }
          k(qu, Du);
          var Hu = [
            1779033703,
            3144134277,
            1013904242,
            2773480762,
            1359893119,
            2600822924,
            528734635,
            1541459225,
          ];
          function Bu(t, e, n, i, r) {
            (this.u = t),
              (this.i = e),
              (this.l = n),
              (this.m = i || null),
              (this.o = r || null),
              (this.h = e + ':' + n),
              (this.v = new Cu()),
              (this.g = new _u(this.h)),
              (this.f = null),
              (this.b = []),
              (this.a = this.c = null);
          }
          function Gu(t) {
            return new Yi('invalid-cordova-configuration', t);
          }
          function Wu(t) {
            var e = new qu();
            Fu(e, t), (t = []);
            var n = 8 * e.g;
            e.c < 56 ? Fu(e, Uu, 56 - e.c) : Fu(e, Uu, e.b - (e.c - 56));
            for (var i = 63; 56 <= i; i--) (e.f[i] = 255 & n), (n /= 256);
            for (Vu(e), i = n = 0; i < e.i; i++)
              for (var r = 24; 0 <= r; r -= 8) t[n++] = (e.a[i] >> r) & 255;
            return (function(t) {
              return j(t, function(t) {
                return 1 < (t = t.toString(16)).length ? t : '0' + t;
              }).join('');
            })(t);
          }
          function Xu(t, e) {
            for (var n = 0; n < t.b.length; n++)
              try {
                t.b[n](e);
              } catch (t) {}
          }
          function Ju(i) {
            return (
              i.f ||
                (i.f = i.ia().then(function() {
                  return new qt(function(n) {
                    i.Aa(function t(e) {
                      return n(e), i.Na(t), !1;
                    }),
                      (function(r) {
                        function e(i) {
                          (t = !0),
                            n && n.cancel(),
                            Yu(r).then(function(t) {
                              var e = o;
                              if (t && i && i.url) {
                                var n = null;
                                -1 !=
                                  (e = Kr(i.url)).indexOf(
                                    '/__/auth/callback',
                                  ) &&
                                  (n = (n =
                                    'object' ==
                                    typeof (n = ki(
                                      wn((n = In(e)), 'firebaseError') || null,
                                    ))
                                      ? zi(n)
                                      : null)
                                    ? new wo(
                                        t.c,
                                        t.b,
                                        null,
                                        null,
                                        n,
                                        null,
                                        t.R(),
                                      )
                                    : new wo(
                                        t.c,
                                        t.b,
                                        e,
                                        t.f,
                                        null,
                                        null,
                                        t.R(),
                                      )),
                                  (e = n || o);
                              }
                              Xu(r, e);
                            });
                        }
                        var o = new wo(
                            'unknown',
                            null,
                            null,
                            null,
                            new Yi('no-auth-event'),
                          ),
                          t = !1,
                          n = un(500).then(function() {
                            return Yu(r).then(function() {
                              t || Xu(r, o);
                            });
                          }),
                          i = l.handleOpenURL;
                        (l.handleOpenURL = function(t) {
                          if (
                            (0 ==
                              t
                                .toLowerCase()
                                .indexOf(
                                  mi('BuildInfo.packageName', l).toLowerCase() +
                                    '://',
                                ) && e({ url: t }),
                            'function' == typeof i)
                          )
                            try {
                              i(t);
                            } catch (t) {
                              console.error(t);
                            }
                        }),
                          (ko = ko || new To()),
                          (function(t) {
                            var n = ko;
                            n.a.push(t),
                              n.b ||
                                ((n.b = function(t) {
                                  for (var e = 0; e < n.a.length; e++)
                                    n.a[e](t);
                                }),
                                'function' ==
                                  typeof (t = mi(
                                    'universalLinks.subscribe',
                                    l,
                                  )) && t(null, n.b));
                          })(e);
                      })(i);
                  });
                })),
              i.f
            );
          }
          function Yu(e) {
            var n = null;
            return (function(t) {
              return t.b.get(Ru, t.a).then(function(t) {
                return Io(t);
              });
            })(e.g)
              .then(function(t) {
                return (n = t), Nu((t = e.g).b, Ru, t.a);
              })
              .then(function() {
                return n;
              });
          }
          function zu(t) {
            (this.a = t), (this.b = ku());
          }
          ((t = Bu.prototype).ia = function() {
            return this.Da
              ? this.Da
              : (this.Da = (oi(void 0)
                  ? ri().then(function() {
                      return new qt(function(t, e) {
                        var n = l.document,
                          i = setTimeout(function() {
                            e(Error('Cordova framework is not ready.'));
                          }, 1e3);
                        n.addEventListener(
                          'deviceready',
                          function() {
                            clearTimeout(i), t();
                          },
                          !1,
                        );
                      });
                    })
                  : zt(
                      Error(
                        'Cordova must run in an Android or iOS file scheme.',
                      ),
                    )
                ).then(
                  function() {
                    if ('function' != typeof mi('universalLinks.subscribe', l))
                      throw Gu(
                        'cordova-universal-links-plugin-fix is not installed',
                      );
                    if (void 0 === mi('BuildInfo.packageName', l))
                      throw Gu('cordova-plugin-buildinfo is not installed');
                    if (
                      'function' !=
                      typeof mi('cordova.plugins.browsertab.openUrl', l)
                    )
                      throw Gu('cordova-plugin-browsertab is not installed');
                    if ('function' != typeof mi('cordova.InAppBrowser.open', l))
                      throw Gu('cordova-plugin-inappbrowser is not installed');
                  },
                  function() {
                    throw new Yi('cordova-not-ready');
                  },
                ));
          }),
            (t.Fb = function(t, e) {
              return (
                e(new Yi('operation-not-supported-in-this-environment')), Yt()
              );
            }),
            (t.Db = function() {
              return zt(new Yi('operation-not-supported-in-this-environment'));
            }),
            (t.Rb = function() {
              return !1;
            }),
            (t.Ob = function() {
              return !0;
            }),
            (t.Jb = function() {
              return !0;
            }),
            (t.Eb = function(t, e, n, i) {
              if (this.c) return zt(new Yi('redirect-operation-pending'));
              var r = this,
                o = l.document,
                a = null,
                s = null,
                u = null,
                c = null;
              return (this.c = Yt()
                .then(function() {
                  return yo(e), Ju(r);
                })
                .then(function() {
                  return (function(n, t, e, i, r) {
                    var o = (function() {
                        for (var t = 20, e = []; 0 < t; )
                          e.push(
                            '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.charAt(
                              Math.floor(62 * Math.random()),
                            ),
                          ),
                            t--;
                        return e.join('');
                      })(),
                      a = new wo(
                        t,
                        i,
                        null,
                        o,
                        new Yi('no-auth-event'),
                        null,
                        r,
                      ),
                      s = mi('BuildInfo.packageName', l);
                    if ('string' != typeof s)
                      throw new Yi('invalid-cordova-configuration');
                    var u = mi('BuildInfo.displayName', l),
                      c = {};
                    if (
                      vi()
                        .toLowerCase()
                        .match(/iphone|ipad|ipod/)
                    )
                      c.ibi = s;
                    else {
                      if (
                        !vi()
                          .toLowerCase()
                          .match(/android/)
                      )
                        return zt(
                          new Yi('operation-not-supported-in-this-environment'),
                        );
                      c.apn = s;
                    }
                    u && (c.appDisplayName = u), (o = Wu(o)), (c.sessionId = o);
                    var h = qs(n.u, n.i, n.l, t, e, null, i, n.m, c, n.o, r);
                    return n
                      .ia()
                      .then(function() {
                        var t = n.h;
                        return n.v.a.set(Ru, a.A(), t);
                      })
                      .then(function() {
                        var t = mi('cordova.plugins.browsertab.isAvailable', l);
                        if ('function' != typeof t)
                          throw new Yi('invalid-cordova-configuration');
                        var e = null;
                        t(function(t) {
                          if (t) {
                            if (
                              'function' !=
                              typeof (e = mi(
                                'cordova.plugins.browsertab.openUrl',
                                l,
                              ))
                            )
                              throw new Yi('invalid-cordova-configuration');
                            e(h);
                          } else {
                            if (
                              'function' !=
                              typeof (e = mi('cordova.InAppBrowser.open', l))
                            )
                              throw new Yi('invalid-cordova-configuration');
                            (t = vi()),
                              (n.a = e(
                                h,
                                t.match(/(iPad|iPhone|iPod).*OS 7_\d/i) ||
                                  t.match(/(iPad|iPhone|iPod).*OS 8_\d/i)
                                  ? '_blank'
                                  : '_system',
                                'location=yes',
                              ));
                          }
                        });
                      });
                  })(r, t, e, n, i);
                })
                .then(function() {
                  return new qt(function(e, t) {
                    (s = function() {
                      var t = mi('cordova.plugins.browsertab.close', l);
                      return (
                        e(),
                        'function' == typeof t && t(),
                        r.a &&
                          'function' == typeof r.a.close &&
                          (r.a.close(), (r.a = null)),
                        !1
                      );
                    }),
                      r.Aa(s),
                      (u = function() {
                        a =
                          a ||
                          un(2e3).then(function() {
                            t(new Yi('redirect-cancelled-by-user'));
                          });
                      }),
                      (c = function() {
                        _i() && u();
                      }),
                      o.addEventListener('resume', u, !1),
                      vi()
                        .toLowerCase()
                        .match(/android/) ||
                        o.addEventListener('visibilitychange', c, !1);
                  }).s(function(t) {
                    return Yu(r).then(function() {
                      throw t;
                    });
                  });
                })
                .ka(function() {
                  u && o.removeEventListener('resume', u, !1),
                    c && o.removeEventListener('visibilitychange', c, !1),
                    a && a.cancel(),
                    s && r.Na(s),
                    (r.c = null);
                }));
            }),
            (t.Aa = function(e) {
              this.b.push(e),
                Ju(this).s(function(t) {
                  'auth/invalid-cordova-configuration' === t.code &&
                    ((t = new wo(
                      'unknown',
                      null,
                      null,
                      null,
                      new Yi('no-auth-event'),
                    )),
                    e(t));
                });
            }),
            (t.Na = function(e) {
              K(this.b, function(t) {
                return t == e;
              });
            });
          var $u = { name: 'pendingRedirect', C: 'session' };
          function Zu(t) {
            return Nu(t.b, $u, t.a);
          }
          function Qu(t, e, n) {
            (this.i = {}),
              (this.v = 0),
              (this.B = t),
              (this.u = e),
              (this.m = n),
              (this.h = []),
              (this.f = !1),
              (this.l = I(this.o, this)),
              (this.b = new dc()),
              (this.w = new bc()),
              (this.g = new zu(this.u + ':' + this.m)),
              (this.c = {}),
              (this.c.unknown = this.b),
              (this.c.signInViaRedirect = this.b),
              (this.c.linkViaRedirect = this.b),
              (this.c.reauthViaRedirect = this.b),
              (this.c.signInViaPopup = this.w),
              (this.c.linkViaPopup = this.w),
              (this.c.reauthViaPopup = this.w),
              (this.a = tc(this.B, this.u, this.m, Ar));
          }
          function tc(t, e, n, i) {
            var r = fl.SDK_VERSION || null;
            return oi() ? new Bu(t, e, n, r, i) : new Us(t, e, n, r, i);
          }
          function ec(e) {
            e.f || ((e.f = !0), e.a.Aa(e.l));
            var n = e.a;
            return e.a.ia().s(function(t) {
              throw (e.a == n && e.reset(), t);
            });
          }
          function nc(n) {
            n.a.Ob() &&
              ec(n).s(function(t) {
                var e = new wo(
                  'unknown',
                  null,
                  null,
                  null,
                  new Yi('operation-not-supported-in-this-environment'),
                );
                uc(t) && n.o(e);
              }),
              n.a.Jb() || pc(n.b);
          }
          function ic(n, t) {
            V(n.h, t) || n.h.push(t),
              n.f ||
                (function(t) {
                  return t.b.get($u, t.a).then(function(t) {
                    return 'pending' == t;
                  });
                })(n.g)
                  .then(function(t) {
                    t
                      ? Zu(n.g).then(function() {
                          ec(n).s(function(t) {
                            var e = new wo(
                              'unknown',
                              null,
                              null,
                              null,
                              new Yi(
                                'operation-not-supported-in-this-environment',
                              ),
                            );
                            uc(t) && n.o(e);
                          });
                        })
                      : nc(n);
                  })
                  .s(function() {
                    nc(n);
                  });
          }
          function rc(t, e) {
            K(t.h, function(t) {
              return t == e;
            });
          }
          (Qu.prototype.reset = function() {
            (this.f = !1),
              this.a.Na(this.l),
              (this.a = tc(this.B, this.u, this.m)),
              (this.i = {});
          }),
            (Qu.prototype.o = function(t) {
              if (!t) throw new Yi('invalid-auth-event');
              if (
                (6e5 <= E() - this.v && ((this.i = {}), (this.v = 0)),
                t && t.getUid() && this.i.hasOwnProperty(t.getUid()))
              )
                return !1;
              for (var e = !1, n = 0; n < this.h.length; n++) {
                var i = this.h[n];
                if (i.xb(t.c, t.b)) {
                  (e = this.c[t.c]) &&
                    (e.h(t, i),
                    t &&
                      (t.f || t.b) &&
                      ((this.i[t.getUid()] = !0), (this.v = E()))),
                    (e = !0);
                  break;
                }
              }
              return pc(this.b), e;
            });
          var oc = new Oi(2e3, 1e4),
            ac = new Oi(3e4, 6e4);
          function sc(t, e, n, i, r, o, a) {
            return t.a.Db(
              e,
              n,
              i,
              function() {
                t.f || ((t.f = !0), t.a.Aa(t.l));
              },
              function() {
                t.reset();
              },
              r,
              o,
              a,
            );
          }
          function uc(t) {
            return !(!t || 'auth/cordova-not-ready' != t.code);
          }
          function cc(e, t, n, i, r) {
            var o;
            return (function(t) {
              return t.b.set($u, 'pending', t.a);
            })(e.g).then(function() {
              return e.a
                .Eb(t, n, i, r)
                .s(function(t) {
                  if (uc(t))
                    throw new Yi('operation-not-supported-in-this-environment');
                  return (
                    (o = t),
                    Zu(e.g).then(function() {
                      throw o;
                    })
                  );
                })
                .then(function() {
                  return e.a.Rb()
                    ? new qt(function() {})
                    : Zu(e.g)
                        .then(function() {
                          return e.oa();
                        })
                        .then(function() {})
                        .s(function() {});
                });
            });
          }
          function hc(t, e, n, i, r) {
            return t.a.Fb(
              i,
              function(t) {
                e.ja(n, null, t, r);
              },
              oc.get(),
            );
          }
          Qu.prototype.oa = function() {
            return this.b.oa();
          };
          var lc = {};
          function fc(t, e, n) {
            var i = e + ':' + n;
            return lc[i] || (lc[i] = new Qu(t, e, n)), lc[i];
          }
          function dc() {
            (this.b = null),
              (this.f = []),
              (this.c = []),
              (this.a = null),
              (this.i = this.g = !1);
          }
          function pc(t) {
            t.g || ((t.g = !0), gc(t, !1, null, null));
          }
          function vc(t) {
            t.g && !t.i && gc(t, !1, null, null);
          }
          function mc(t, e) {
            if (
              ((t.b = function() {
                return Yt(e);
              }),
              t.f.length)
            )
              for (var n = 0; n < t.f.length; n++) t.f[n](e);
          }
          function gc(t, e, n, i) {
            e
              ? i
                ? (function(t, e) {
                    if (
                      ((t.b = function() {
                        return zt(e);
                      }),
                      t.c.length)
                    )
                      for (var n = 0; n < t.c.length; n++) t.c[n](e);
                  })(t, i)
                : mc(t, n)
              : mc(t, { user: null }),
              (t.f = []),
              (t.c = []);
          }
          function bc() {}
          function yc() {
            (this.vb = !1),
              Object.defineProperty(this, 'appVerificationDisabled', {
                get: function() {
                  return this.vb;
                },
                set: function(t) {
                  this.vb = t;
                },
                enumerable: !1,
              });
          }
          function wc(t, e) {
            (this.a = e), Mi(this, 'verificationId', t);
          }
          function Ic(t, e, n, i) {
            return new mo(t).Wa(e, n).then(function(t) {
              return new wc(t, i);
            });
          }
          function Tc(t) {
            var e = kr(t);
            if (!(e && e.exp && e.auth_time && e.iat))
              throw new Yi(
                'internal-error',
                'An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.',
              );
            ji(this, {
              token: t,
              expirationTime: Pi(1e3 * e.exp),
              authTime: Pi(1e3 * e.auth_time),
              issuedAtTime: Pi(1e3 * e.iat),
              signInProvider:
                e.firebase && e.firebase.sign_in_provider
                  ? e.firebase.sign_in_provider
                  : null,
              claims: e,
            });
          }
          function Ec(t, e, n) {
            if (
              ((this.h = t),
              (this.i = e),
              (this.g = n),
              (this.c = 3e4),
              (this.f = 96e4),
              (this.b = null),
              (this.a = this.c),
              this.f < this.c)
            )
              throw Error(
                'Proactive refresh lower bound greater than upper bound!',
              );
          }
          function kc(t, e) {
            return e
              ? ((t.a = t.c), t.g())
              : ((e = t.a), (t.a *= 2), t.a > t.f && (t.a = t.f), e);
          }
          function Ac(t) {
            (this.f = t), (this.b = this.a = null), (this.c = 0);
          }
          function Sc(t, e) {
            var n = e[Ca],
              i = e.refreshToken;
            (e = Nc(e.expiresIn)), (t.b = n), (t.c = e), (t.a = i);
          }
          function Nc(t) {
            return E() + 1e3 * parseInt(t, 10);
          }
          function Oc(e, t) {
            return (function(t, i) {
              return new qt(function(e, n) {
                ('refresh_token' == i.grant_type && i.refresh_token) ||
                ('authorization_code' == i.grant_type && i.code)
                  ? Va(
                      t,
                      t.l + '?key=' + encodeURIComponent(t.c),
                      function(t) {
                        t
                          ? t.error
                            ? n(_s(t))
                            : t.access_token && t.refresh_token
                            ? e(t)
                            : n(new Yi('internal-error'))
                          : n(new Yi('network-request-failed'));
                      },
                      'POST',
                      Dn(i).toString(),
                      t.g,
                      t.u.get(),
                    )
                  : n(new Yi('internal-error'));
              });
            })(e.f, t)
              .then(function(t) {
                return (
                  (e.b = t.access_token),
                  (e.c = Nc(t.expires_in)),
                  (e.a = t.refresh_token),
                  { accessToken: e.b, expirationTime: e.c, refreshToken: e.a }
                );
              })
              .s(function(t) {
                throw ('auth/user-token-expired' == t.code && (e.a = null), t);
              });
          }
          function _c(t, e) {
            (this.a = t || null),
              (this.b = e || null),
              ji(this, {
                lastSignInTime: Pi(e || null),
                creationTime: Pi(t || null),
              });
          }
          function Pc(t, e, n, i, r, o) {
            ji(this, {
              uid: t,
              displayName: i || null,
              photoURL: r || null,
              email: n || null,
              phoneNumber: o || null,
              providerId: e,
            });
          }
          function Rc(t, e) {
            for (var n in (Ce.call(this, t), e)) this[n] = e[n];
          }
          function Cc(t, e, n) {
            (this.I = []),
              (this.l = t.apiKey),
              (this.m = t.appName),
              (this.o = t.authDomain || null),
              (t = fl.SDK_VERSION ? pi(fl.SDK_VERSION) : null),
              (this.a = new Pa(this.l, Nr(Ar), t)),
              (this.b = new Ac(this.a)),
              Vc(this, e[Ca]),
              Sc(this.b, e),
              Mi(this, 'refreshToken', this.b.a),
              qc(this, n || {}),
              nn.call(this),
              (this.J = !1),
              this.o && bi() && (this.i = fc(this.o, this.l, this.m)),
              (this.O = []),
              (this.h = null),
              (this.w = (function(e) {
                return new Ec(
                  function() {
                    return e.G(!0);
                  },
                  function(t) {
                    return !(!t || 'auth/network-request-failed' != t.code);
                  },
                  function() {
                    var t = e.b.c - E() - 3e5;
                    return 0 < t ? t : 0;
                  },
                );
              })(this)),
              (this.W = I(this.Ja, this));
            var i = this;
            (this.ga = null),
              (this.xa = function(t) {
                i.ua(t.g);
              }),
              (this.Z = null),
              (this.P = []),
              (this.wa = function(t) {
                Lc(i, t.c);
              }),
              (this.Y = null);
          }
          function Dc(t, e) {
            t.Z && Xe(t.Z, 'languageCodeChanged', t.xa),
              (t.Z = e) && Be(e, 'languageCodeChanged', t.xa);
          }
          function Lc(t, e) {
            (t.P = e), Ua(t.a, fl.SDK_VERSION ? pi(fl.SDK_VERSION, t.P) : null);
          }
          function xc(t, e) {
            t.Y && Xe(t.Y, 'frameworkChanged', t.wa),
              (t.Y = e) && Be(e, 'frameworkChanged', t.wa);
          }
          function Mc(e) {
            try {
              return fl.app(e.m).auth();
            } catch (t) {
              throw new Yi(
                'internal-error',
                "No firebase.auth.Auth instance is available for the Firebase App '" +
                  e.m +
                  "'!",
              );
            }
          }
          function jc(t) {
            t.B ||
              t.w.b ||
              (t.w.start(),
              Xe(t, 'tokenChanged', t.W),
              Be(t, 'tokenChanged', t.W));
          }
          function Uc(t) {
            Xe(t, 'tokenChanged', t.W), t.w.stop();
          }
          function Vc(t, e) {
            (t.ma = e), Mi(t, '_lat', e);
          }
          function Fc(t) {
            for (var e = [], n = 0; n < t.O.length; n++) e.push(t.O[n](t));
            return Zt(e).then(function() {
              return t;
            });
          }
          function Kc(t) {
            t.i && !t.J && ((t.J = !0), ic(t.i, t));
          }
          function qc(t, e) {
            ji(t, {
              uid: e.uid,
              displayName: e.displayName || null,
              photoURL: e.photoURL || null,
              email: e.email || null,
              emailVerified: e.emailVerified || !1,
              phoneNumber: e.phoneNumber || null,
              isAnonymous: e.isAnonymous || !1,
              tenantId: e.tenantId || null,
              metadata: new _c(e.createdAt, e.lastLoginAt),
              providerData: [],
            }),
              (t.a.b = t.tenantId);
          }
          function Hc() {}
          function Bc(t) {
            return Yt().then(function() {
              if (t.B) throw new Yi('app-deleted');
            });
          }
          function Gc(t) {
            return j(t.providerData, function(t) {
              return t.providerId;
            });
          }
          function Wc(t, e) {
            e && (Xc(t, e.providerId), t.providerData.push(e));
          }
          function Xc(t, e) {
            K(t.providerData, function(t) {
              return t.providerId == e;
            });
          }
          function Jc(t, e, n) {
            ('uid' != e || n) && t.hasOwnProperty(e) && Mi(t, e, n);
          }
          function Yc(e, t) {
            e != t &&
              (ji(e, {
                uid: t.uid,
                displayName: t.displayName,
                photoURL: t.photoURL,
                email: t.email,
                emailVerified: t.emailVerified,
                phoneNumber: t.phoneNumber,
                isAnonymous: t.isAnonymous,
                tenantId: t.tenantId,
                providerData: [],
              }),
              t.metadata
                ? Mi(
                    e,
                    'metadata',
                    (function(t) {
                      return new _c(t.a, t.b);
                    })(t.metadata),
                  )
                : Mi(e, 'metadata', new _c()),
              M(t.providerData, function(t) {
                Wc(e, t);
              }),
              (function(t, e) {
                (t.b = e.b), (t.a = e.a), (t.c = e.c);
              })(e.b, t.b),
              Mi(e, 'refreshToken', e.b.a));
          }
          function zc(n) {
            return n.G().then(function(t) {
              var e = n.isAnonymous;
              return (function(t, e) {
                return Ns(t.a, us, { idToken: e }).then(I(t.zc, t));
              })(n, t).then(function() {
                return e || Jc(n, 'isAnonymous', !1), t;
              });
            });
          }
          function $c(t, e) {
            e[Ca] &&
              t.ma != e[Ca] &&
              (Sc(t.b, e),
              t.dispatchEvent(new Rc('tokenChanged')),
              Vc(t, e[Ca]),
              Jc(t, 'refreshToken', t.b.a));
          }
          function Zc(t, e) {
            return zc(t).then(function() {
              if (V(Gc(t), e))
                return Fc(t).then(function() {
                  throw new Yi('provider-already-linked');
                });
            });
          }
          function Qc(t, e, n) {
            return Ui({
              user: t,
              credential: bo(e),
              additionalUserInfo: (e = Cr(e)),
              operationType: n,
            });
          }
          function th(t, e) {
            return (
              $c(t, e),
              t.reload().then(function() {
                return t;
              })
            );
          }
          function eh(n, i, t, e, r) {
            if (!bi())
              return zt(new Yi('operation-not-supported-in-this-environment'));
            if (n.h && !r) return zt(n.h);
            var o = Rr(t.providerId),
              a = Ai(n.uid + ':::'),
              s = null;
            (!Ii() || ai()) &&
              n.o &&
              t.isOAuthProvider &&
              (s = qs(
                n.o,
                n.l,
                n.m,
                i,
                t,
                null,
                a,
                fl.SDK_VERSION || null,
                null,
                null,
                n.tenantId,
              ));
            var u = ei(s, o && o.sa, o && o.ra);
            return (
              (e = e()
                .then(function() {
                  if ((ih(n), !r)) return n.G().then(function() {});
                })
                .then(function() {
                  return sc(n.i, u, i, t, a, !!s, n.tenantId);
                })
                .then(function() {
                  return new qt(function(t, e) {
                    n.ja(
                      i,
                      null,
                      new Yi('cancelled-popup-request'),
                      n.g || null,
                    ),
                      (n.f = t),
                      (n.v = e),
                      (n.g = a),
                      (n.c = hc(n.i, n, i, u, a));
                  });
                })
                .then(function(t) {
                  return u && ti(u), t ? Ui(t) : null;
                })
                .s(function(t) {
                  throw (u && ti(u), t);
                })),
              rh(n, e, r)
            );
          }
          function nh(e, t, n, i, r) {
            if (!bi())
              return zt(new Yi('operation-not-supported-in-this-environment'));
            if (e.h && !r) return zt(e.h);
            var o = null,
              a = Ai(e.uid + ':::');
            return (
              (i = i()
                .then(function() {
                  if ((ih(e), !r)) return e.G().then(function() {});
                })
                .then(function() {
                  return (e.ca = a), Fc(e);
                })
                .then(function(t) {
                  return e.da && (t = (t = e.da).b.set(sh, e.A(), t.a)), t;
                })
                .then(function() {
                  return cc(e.i, t, n, a, e.tenantId);
                })
                .s(function(t) {
                  if (((o = t), e.da)) return uh(e.da);
                  throw o;
                })
                .then(function() {
                  if (o) throw o;
                })),
              rh(e, i, r)
            );
          }
          function ih(t) {
            if (!t.i || !t.J) {
              if (t.i && !t.J) throw new Yi('internal-error');
              throw new Yi('auth-domain-config-required');
            }
          }
          function rh(t, e, n) {
            var i = (function(e, t, n) {
              return e.h && !n
                ? (t.cancel(), zt(e.h))
                : t.s(function(t) {
                    throw (!t ||
                      ('auth/user-disabled' != t.code &&
                        'auth/user-token-expired' != t.code) ||
                      (e.h || e.dispatchEvent(new Rc('userInvalidated')),
                      (e.h = t)),
                    t);
                  });
            })(t, e, n);
            return (
              t.I.push(i),
              i.ka(function() {
                F(t.I, i);
              }),
              i
            );
          }
          function oh(t) {
            if (!t.apiKey) return null;
            var e = {
                apiKey: t.apiKey,
                authDomain: t.authDomain,
                appName: t.appName,
              },
              n = {};
            if (
              !(
                t.stsTokenManager &&
                t.stsTokenManager.accessToken &&
                t.stsTokenManager.expirationTime
              )
            )
              return null;
            (n[Ca] = t.stsTokenManager.accessToken),
              (n.refreshToken = t.stsTokenManager.refreshToken || null),
              (n.expiresIn = (t.stsTokenManager.expirationTime - E()) / 1e3);
            var i = new Cc(e, n, t);
            return (
              t.providerData &&
                M(t.providerData, function(t) {
                  t && Wc(i, Ui(t));
                }),
              t.redirectEventId && (i.ca = t.redirectEventId),
              i
            );
          }
          function ah(t) {
            (this.a = t), (this.b = ku());
          }
          (dc.prototype.reset = function() {
            (this.b = null), this.a && (this.a.cancel(), (this.a = null));
          }),
            (dc.prototype.h = function(t, e) {
              if (t) {
                this.reset(), (this.g = !0);
                var n = t.c,
                  i = t.b,
                  r = t.a && 'auth/web-storage-unsupported' == t.a.code,
                  o =
                    t.a &&
                    'auth/operation-not-supported-in-this-environment' ==
                      t.a.code;
                (this.i = !(!r && !o)),
                  'unknown' != n || r || o
                    ? t.a
                      ? (gc(this, !0, null, t.a), Yt())
                      : e.Ba(n, i)
                      ? (function(e, t, n) {
                          n = n.Ba(t.c, t.b);
                          var i = t.g,
                            r = t.f,
                            o = t.i,
                            a = t.R(),
                            s = !!t.c.match(/Redirect$/);
                          n(i, r, a, o)
                            .then(function(t) {
                              gc(e, s, t, null);
                            })
                            .s(function(t) {
                              gc(e, s, null, t);
                            });
                        })(this, t, e)
                      : zt(new Yi('invalid-auth-event'))
                    : (gc(this, !1, null, null), Yt());
              } else zt(new Yi('invalid-auth-event'));
            }),
            (dc.prototype.oa = function() {
              var n = this;
              return new qt(function(t, e) {
                n.b
                  ? n.b().then(t, e)
                  : (n.f.push(t),
                    n.c.push(e),
                    (function(t) {
                      var e = new Yi('timeout');
                      t.a && t.a.cancel(),
                        (t.a = un(ac.get()).then(function() {
                          t.b || ((t.g = !0), gc(t, !0, null, e));
                        }));
                    })(n));
              });
            }),
            (bc.prototype.h = function(t, e) {
              if (t) {
                var n = t.c,
                  i = t.b;
                t.a
                  ? (e.ja(t.c, null, t.a, t.b), Yt())
                  : e.Ba(n, i)
                  ? (function(t, e) {
                      var n = t.b,
                        i = t.c;
                      e.Ba(i, n)(t.g, t.f, t.R(), t.i)
                        .then(function(t) {
                          e.ja(i, t, null, n);
                        })
                        .s(function(t) {
                          e.ja(i, null, t, n);
                        });
                    })(t, e)
                  : zt(new Yi('invalid-auth-event'));
              } else zt(new Yi('invalid-auth-event'));
            }),
            (wc.prototype.confirm = function(t) {
              return (t = go(this.verificationId, t)), this.a(t);
            }),
            (Ec.prototype.start = function() {
              (this.a = this.c),
                (function e(n, t) {
                  n.stop();
                  n.b = un(kc(n, t))
                    .then(function() {
                      return (
                        (e = l.document),
                        (n = null),
                        _i() || !e
                          ? Yt()
                          : new qt(function(t) {
                              (n = function() {
                                _i() &&
                                  (e.removeEventListener(
                                    'visibilitychange',
                                    n,
                                    !1,
                                  ),
                                  t());
                              }),
                                e.addEventListener('visibilitychange', n, !1);
                            }).s(function(t) {
                              throw (e.removeEventListener(
                                'visibilitychange',
                                n,
                                !1,
                              ),
                              t);
                            })
                      );
                      var e, n;
                    })
                    .then(function() {
                      return n.h();
                    })
                    .then(function() {
                      e(n, !0);
                    })
                    .s(function(t) {
                      n.i(t) && e(n, !1);
                    });
                })(this, !0);
            }),
            (Ec.prototype.stop = function() {
              this.b && (this.b.cancel(), (this.b = null));
            }),
            (Ac.prototype.A = function() {
              return {
                apiKey: this.f.c,
                refreshToken: this.a,
                accessToken: this.b,
                expirationTime: this.c,
              };
            }),
            (Ac.prototype.getToken = function(t) {
              return (
                (t = !!t),
                this.b && !this.a
                  ? zt(new Yi('user-token-expired'))
                  : t || !this.b || E() > this.c - 3e4
                  ? this.a
                    ? Oc(this, {
                        grant_type: 'refresh_token',
                        refresh_token: this.a,
                      })
                    : Yt(null)
                  : Yt({
                      accessToken: this.b,
                      expirationTime: this.c,
                      refreshToken: this.a,
                    })
              );
            }),
            (_c.prototype.A = function() {
              return { lastLoginAt: this.b, createdAt: this.a };
            }),
            k(Rc, Ce),
            k(Cc, nn),
            (Cc.prototype.ua = function(t) {
              (this.ga = t), ja(this.a, t);
            }),
            (Cc.prototype.ha = function() {
              return this.ga;
            }),
            (Cc.prototype.Ca = function() {
              return H(this.P);
            }),
            (Cc.prototype.Ja = function() {
              this.w.b && (this.w.stop(), this.w.start());
            }),
            Mi(Cc.prototype, 'providerId', 'firebase'),
            ((t = Cc.prototype).reload = function() {
              var t = this;
              return rh(
                this,
                Bc(this).then(function() {
                  return zc(t)
                    .then(function() {
                      return Fc(t);
                    })
                    .then(Hc);
                }),
              );
            }),
            (t.dc = function(t) {
              return this.G(t).then(function(t) {
                return new Tc(t);
              });
            }),
            (t.G = function(t) {
              var e = this;
              return rh(
                this,
                Bc(this)
                  .then(function() {
                    return e.b.getToken(t);
                  })
                  .then(function(t) {
                    if (!t) throw new Yi('internal-error');
                    return (
                      t.accessToken != e.ma &&
                        (Vc(e, t.accessToken),
                        e.dispatchEvent(new Rc('tokenChanged'))),
                      Jc(e, 'refreshToken', t.refreshToken),
                      t.accessToken
                    );
                  }),
              );
            }),
            (t.zc = function(t) {
              if (!(t = t.users) || !t.length) throw new Yi('internal-error');
              qc(this, {
                uid: (t = t[0]).localId,
                displayName: t.displayName,
                photoURL: t.photoUrl,
                email: t.email,
                emailVerified: !!t.emailVerified,
                phoneNumber: t.phoneNumber,
                lastLoginAt: t.lastLoginAt,
                createdAt: t.createdAt,
                tenantId: t.tenantId,
              });
              for (
                var e = (function(t) {
                    return (t = t.providerUserInfo) && t.length
                      ? j(t, function(t) {
                          return new Pc(
                            t.rawId,
                            t.providerId,
                            t.email,
                            t.displayName,
                            t.photoUrl,
                            t.phoneNumber,
                          );
                        })
                      : [];
                  })(t),
                  n = 0;
                n < e.length;
                n++
              )
                Wc(this, e[n]);
              Jc(
                this,
                'isAnonymous',
                !(
                  (this.email && t.passwordHash) ||
                  (this.providerData && this.providerData.length)
                ),
              );
            }),
            (t.Ac = function(t) {
              return (
                Li(
                  'firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead.',
                ),
                this.hb(t)
              );
            }),
            (t.hb = function(t) {
              var e = this,
                n = null;
              return rh(
                this,
                t
                  .f(this.a, this.uid)
                  .then(function(t) {
                    return (
                      $c(e, t),
                      (n = Qc(e, t, 'reauthenticate')),
                      (e.h = null),
                      e.reload()
                    );
                  })
                  .then(function() {
                    return n;
                  }),
                !0,
              );
            }),
            (t.rc = function(t) {
              return (
                Li(
                  'firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead.',
                ),
                this.fb(t)
              );
            }),
            (t.fb = function(e) {
              var n = this,
                i = null;
              return rh(
                this,
                Zc(this, e.providerId)
                  .then(function() {
                    return n.G();
                  })
                  .then(function(t) {
                    return e.b(n.a, t);
                  })
                  .then(function(t) {
                    return (i = Qc(n, t, 'link')), th(n, t);
                  })
                  .then(function() {
                    return i;
                  }),
              );
            }),
            (t.sc = function(t, e) {
              var n = this;
              return rh(
                this,
                Zc(this, 'phone').then(function() {
                  return Ic(Mc(n), t, e, I(n.fb, n));
                }),
              );
            }),
            (t.Bc = function(t, e) {
              var n = this;
              return rh(
                this,
                Yt().then(function() {
                  return Ic(Mc(n), t, e, I(n.hb, n));
                }),
                !0,
              );
            }),
            (t.rb = function(e) {
              var n = this;
              return rh(
                this,
                this.G()
                  .then(function(t) {
                    return n.a.rb(t, e);
                  })
                  .then(function(t) {
                    return $c(n, t), n.reload();
                  }),
              );
            }),
            (t.Sc = function(e) {
              var n = this;
              return rh(
                this,
                this.G()
                  .then(function(t) {
                    return e.b(n.a, t);
                  })
                  .then(function(t) {
                    return $c(n, t), n.reload();
                  }),
              );
            }),
            (t.sb = function(e) {
              var n = this;
              return rh(
                this,
                this.G()
                  .then(function(t) {
                    return n.a.sb(t, e);
                  })
                  .then(function(t) {
                    return $c(n, t), n.reload();
                  }),
              );
            }),
            (t.tb = function(e) {
              if (void 0 === e.displayName && void 0 === e.photoURL)
                return Bc(this);
              var n = this;
              return rh(
                this,
                this.G()
                  .then(function(t) {
                    return n.a.tb(t, {
                      displayName: e.displayName,
                      photoUrl: e.photoURL,
                    });
                  })
                  .then(function(t) {
                    return (
                      $c(n, t),
                      Jc(n, 'displayName', t.displayName || null),
                      Jc(n, 'photoURL', t.photoUrl || null),
                      M(n.providerData, function(t) {
                        'password' === t.providerId &&
                          (Mi(t, 'displayName', n.displayName),
                          Mi(t, 'photoURL', n.photoURL));
                      }),
                      Fc(n)
                    );
                  })
                  .then(Hc),
              );
            }),
            (t.Qc = function(e) {
              var n = this;
              return rh(
                this,
                zc(this).then(function(t) {
                  return V(Gc(n), e)
                    ? (function(t, e, n) {
                        return Ns(t, os, { idToken: e, deleteProvider: n });
                      })(n.a, t, [e]).then(function(t) {
                        var e = {};
                        return (
                          M(t.providerUserInfo || [], function(t) {
                            e[t.providerId] = !0;
                          }),
                          M(Gc(n), function(t) {
                            e[t] || Xc(n, t);
                          }),
                          e[mo.PROVIDER_ID] || Mi(n, 'phoneNumber', null),
                          Fc(n)
                        );
                      })
                    : Fc(n).then(function() {
                        throw new Yi('no-such-provider');
                      });
                }),
              );
            }),
            (t.delete = function() {
              var e = this;
              return rh(
                this,
                this.G()
                  .then(function(t) {
                    return Ns(e.a, rs, { idToken: t });
                  })
                  .then(function() {
                    e.dispatchEvent(new Rc('userDeleted'));
                  }),
              ).then(function() {
                for (var t = 0; t < e.I.length; t++)
                  e.I[t].cancel('app-deleted');
                Dc(e, null),
                  xc(e, null),
                  (e.I = []),
                  (e.B = !0),
                  Uc(e),
                  Mi(e, 'refreshToken', null),
                  e.i && rc(e.i, e);
              });
            }),
            (t.xb = function(t, e) {
              return !!(
                ('linkViaPopup' == t && (this.g || null) == e && this.f) ||
                ('reauthViaPopup' == t && (this.g || null) == e && this.f) ||
                ('linkViaRedirect' == t && (this.ca || null) == e) ||
                ('reauthViaRedirect' == t && (this.ca || null) == e)
              );
            }),
            (t.ja = function(t, e, n, i) {
              ('linkViaPopup' != t && 'reauthViaPopup' != t) ||
                i != (this.g || null) ||
                (n && this.v ? this.v(n) : e && !n && this.f && this.f(e),
                this.c && (this.c.cancel(), (this.c = null)),
                delete this.f,
                delete this.v);
            }),
            (t.Ba = function(t, e) {
              return 'linkViaPopup' == t && e == (this.g || null)
                ? I(this.Bb, this)
                : 'reauthViaPopup' == t && e == (this.g || null)
                ? I(this.Cb, this)
                : 'linkViaRedirect' == t && (this.ca || null) == e
                ? I(this.Bb, this)
                : 'reauthViaRedirect' == t && (this.ca || null) == e
                ? I(this.Cb, this)
                : null;
            }),
            (t.tc = function(t) {
              var e = this;
              return eh(
                this,
                'linkViaPopup',
                t,
                function() {
                  return Zc(e, t.providerId).then(function() {
                    return Fc(e);
                  });
                },
                !1,
              );
            }),
            (t.Cc = function(t) {
              return eh(
                this,
                'reauthViaPopup',
                t,
                function() {
                  return Yt();
                },
                !0,
              );
            }),
            (t.uc = function(t) {
              var e = this;
              return nh(
                this,
                'linkViaRedirect',
                t,
                function() {
                  return Zc(e, t.providerId);
                },
                !1,
              );
            }),
            (t.Dc = function(t) {
              return nh(
                this,
                'reauthViaRedirect',
                t,
                function() {
                  return Yt();
                },
                !0,
              );
            }),
            (t.Bb = function(e, n, t, i) {
              var r = this;
              this.c && (this.c.cancel(), (this.c = null));
              var o = null;
              return (
                (t = this.G()
                  .then(function(t) {
                    return $a(r.a, {
                      requestUri: e,
                      postBody: i,
                      sessionId: n,
                      idToken: t,
                    });
                  })
                  .then(function(t) {
                    return (o = Qc(r, t, 'link')), th(r, t);
                  })
                  .then(function() {
                    return o;
                  })),
                rh(this, t)
              );
            }),
            (t.Cb = function(t, e, n, i) {
              var r = this;
              this.c && (this.c.cancel(), (this.c = null));
              var o = null;
              return rh(
                this,
                Yt()
                  .then(function() {
                    return Hr(
                      Za(r.a, {
                        requestUri: t,
                        sessionId: e,
                        postBody: i,
                        tenantId: n,
                      }),
                      r.uid,
                    );
                  })
                  .then(function(t) {
                    return (
                      (o = Qc(r, t, 'reauthenticate')),
                      $c(r, t),
                      (r.h = null),
                      r.reload()
                    );
                  })
                  .then(function() {
                    return o;
                  }),
                !0,
              );
            }),
            (t.jb = function(e) {
              var n = this,
                i = null;
              return rh(
                this,
                this.G()
                  .then(function(t) {
                    return (i = t), void 0 === e || G(e) ? {} : br(new ur(e));
                  })
                  .then(function(t) {
                    return n.a.jb(i, t);
                  })
                  .then(function(t) {
                    if (n.email != t) return n.reload();
                  })
                  .then(function() {}),
              );
            }),
            (t.toJSON = function() {
              return this.A();
            }),
            (t.A = function() {
              var e = {
                uid: this.uid,
                displayName: this.displayName,
                photoURL: this.photoURL,
                email: this.email,
                emailVerified: this.emailVerified,
                phoneNumber: this.phoneNumber,
                isAnonymous: this.isAnonymous,
                tenantId: this.tenantId,
                providerData: [],
                apiKey: this.l,
                appName: this.m,
                authDomain: this.o,
                stsTokenManager: this.b.A(),
                redirectEventId: this.ca || null,
              };
              return (
                this.metadata && J(e, this.metadata.A()),
                M(this.providerData, function(t) {
                  e.providerData.push(
                    (function(t) {
                      var e,
                        n = {};
                      for (e in t) t.hasOwnProperty(e) && (n[e] = t[e]);
                      return n;
                    })(t),
                  );
                }),
                e
              );
            });
          var sh = { name: 'redirectUser', C: 'session' };
          function uh(t) {
            return Nu(t.b, sh, t.a);
          }
          function ch(t) {
            (this.a = t),
              (this.b = ku()),
              (this.c = null),
              (this.f = (function(e) {
                var n = fh('local'),
                  i = fh('session'),
                  r = fh('none');
                return (function(n, i, r) {
                  var o = Su(i, r),
                    a = Au(n, i.C);
                  return n.get(i, r).then(function(t) {
                    var e = null;
                    try {
                      e = ki(l.localStorage.getItem(o));
                    } catch (t) {}
                    if (e && !t)
                      return l.localStorage.removeItem(o), n.set(i, e, r);
                    e &&
                      t &&
                      'localStorage' != a.type &&
                      l.localStorage.removeItem(o);
                  });
                })(e.b, n, e.a)
                  .then(function() {
                    return e.b.get(i, e.a);
                  })
                  .then(function(t) {
                    return t
                      ? i
                      : e.b.get(r, e.a).then(function(t) {
                          return t
                            ? r
                            : e.b.get(n, e.a).then(function(t) {
                                return t
                                  ? n
                                  : e.b.get(lh, e.a).then(function(t) {
                                      return t ? fh(t) : n;
                                    });
                              });
                        });
                  })
                  .then(function(t) {
                    return (e.c = t), hh(e, t.C);
                  })
                  .s(function() {
                    e.c || (e.c = n);
                  });
              })(this)),
              this.b.addListener(fh('local'), this.a, I(this.g, this));
          }
          function hh(t, e) {
            var n,
              i = [];
            for (n in Tu) Tu[n] !== e && i.push(Nu(t.b, fh(Tu[n]), t.a));
            return (
              i.push(Nu(t.b, lh, t.a)),
              (function(s) {
                return new qt(function(n, e) {
                  var i = s.length,
                    r = [];
                  if (i)
                    for (
                      var t = function(t, e) {
                          i--, (r[t] = e), 0 == i && n(r);
                        },
                        o = function(t) {
                          e(t);
                        },
                        a = 0;
                      a < s.length;
                      a++
                    )
                      $t(s[a], T(t, a), o);
                  else n(r);
                });
              })(i)
            );
          }
          ch.prototype.g = function() {
            var e = this,
              n = fh('local');
            mh(this, function() {
              return Yt()
                .then(function() {
                  return e.c && 'local' != e.c.C ? e.b.get(n, e.a) : null;
                })
                .then(function(t) {
                  if (t)
                    return hh(e, 'local').then(function() {
                      e.c = n;
                    });
                });
            });
          };
          var lh = { name: 'persistence', C: 'session' };
          function fh(t) {
            return { name: 'authUser', C: t };
          }
          function dh(t, e) {
            return mh(t, function() {
              return t.b.set(t.c, e.A(), t.a);
            });
          }
          function ph(t) {
            return mh(t, function() {
              return Nu(t.b, t.c, t.a);
            });
          }
          function vh(t, e) {
            return mh(t, function() {
              return t.b.get(t.c, t.a).then(function(t) {
                return t && e && (t.authDomain = e), oh(t || {});
              });
            });
          }
          function mh(t, e) {
            return (t.f = t.f.then(e, e)), t.f;
          }
          function gh(t) {
            if (
              ((this.l = !1),
              Mi(this, 'settings', new yc()),
              Mi(this, 'app', t),
              !Ah(this).options || !Ah(this).options.apiKey)
            )
              throw new Yi('invalid-api-key');
            (t = fl.SDK_VERSION ? pi(fl.SDK_VERSION) : null),
              (this.b = new Pa(
                Ah(this).options && Ah(this).options.apiKey,
                Nr(Ar),
                t,
              )),
              (this.O = []),
              (this.m = []),
              (this.J = []),
              (this.Ub = fl.INTERNAL.createSubscribe(I(this.oc, this))),
              (this.W = void 0),
              (this.Vb = fl.INTERNAL.createSubscribe(I(this.pc, this))),
              Eh(this, null),
              (this.h = new ch(Ah(this).options.apiKey + ':' + Ah(this).name)),
              (this.w = new ah(Ah(this).options.apiKey + ':' + Ah(this).name)),
              (this.Y = _h(
                this,
                (function(n) {
                  var t = Ah(n).options.authDomain,
                    e = (function(e) {
                      var t = (function(t, e) {
                        return t.b.get(sh, t.a).then(function(t) {
                          return t && e && (t.authDomain = e), oh(t || {});
                        });
                      })(e.w, Ah(e).options.authDomain).then(function(t) {
                        return (e.B = t) && (t.da = e.w), uh(e.w);
                      });
                      return _h(e, t);
                    })(n)
                      .then(function() {
                        return vh(n.h, t);
                      })
                      .then(function(e) {
                        return e
                          ? ((e.da = n.w),
                            n.B && (n.B.ca || null) == (e.ca || null)
                              ? e
                              : e
                                  .reload()
                                  .then(function() {
                                    return dh(n.h, e).then(function() {
                                      return e;
                                    });
                                  })
                                  .s(function(t) {
                                    return 'auth/network-request-failed' ==
                                      t.code
                                      ? e
                                      : ph(n.h);
                                  }))
                          : null;
                      })
                      .then(function(t) {
                        Eh(n, t || null);
                      });
                  return _h(n, e);
                })(this),
              )),
              (this.i = _h(
                this,
                (function(e) {
                  return e.Y.then(function() {
                    return Ih(e);
                  })
                    .s(function() {})
                    .then(function() {
                      if (!e.l) return e.ma();
                    })
                    .s(function() {})
                    .then(function() {
                      if (!e.l) {
                        e.ga = !0;
                        var t = e.h;
                        t.b.addListener(fh('local'), t.a, e.ma);
                      }
                    });
                })(this),
              )),
              (this.ga = !1),
              (this.ma = I(this.Nc, this)),
              (this.ub = I(this.aa, this)),
              (this.wa = I(this.bc, this)),
              (this.xa = I(this.mc, this)),
              (this.Ja = I(this.nc, this)),
              (this.a = null),
              (function(e) {
                var n = Ah(e).options.authDomain,
                  i = Ah(e).options.apiKey;
                n &&
                  bi() &&
                  (e.Tb = e.Y.then(function() {
                    if (!e.l) {
                      if (
                        ((e.a = fc(n, i, Ah(e).name)),
                        ic(e.a, e),
                        Sh(e) && Kc(Sh(e)),
                        e.B)
                      ) {
                        Kc(e.B);
                        var t = e.B;
                        t.ua(e.ha()),
                          Dc(t, e),
                          Lc((t = e.B), e.I),
                          xc(t, e),
                          (e.B = null);
                      }
                      return e.a;
                    }
                  }));
              })(this),
              (this.INTERNAL = {}),
              (this.INTERNAL.delete = I(this.delete, this)),
              (this.INTERNAL.logFramework = I(this.vc, this)),
              (this.o = 0),
              nn.call(this),
              (function(t) {
                Object.defineProperty(t, 'lc', {
                  get: function() {
                    return this.ha();
                  },
                  set: function(t) {
                    this.ua(t);
                  },
                  enumerable: !1,
                }),
                  (t.Z = null),
                  Object.defineProperty(t, 'ti', {
                    get: function() {
                      return this.R();
                    },
                    set: function(t) {
                      this.nb(t);
                    },
                    enumerable: !1,
                  }),
                  (t.P = null);
              })(this),
              (this.I = []);
          }
          function bh(t) {
            Ce.call(this, 'languageCodeChanged'), (this.g = t);
          }
          function yh(t) {
            Ce.call(this, 'frameworkChanged'), (this.c = t);
          }
          function wh(t) {
            return t.Tb || zt(new Yi('auth-domain-config-required'));
          }
          function Ih(t) {
            if (!bi())
              return zt(new Yi('operation-not-supported-in-this-environment'));
            var e = wh(t)
              .then(function() {
                return t.a.oa();
              })
              .then(function(t) {
                return t ? Ui(t) : null;
              });
            return _h(t, e);
          }
          function Th(e, t) {
            var n = {};
            return (
              (n.apiKey = Ah(e).options.apiKey),
              (n.authDomain = Ah(e).options.authDomain),
              (n.appName = Ah(e).name),
              e.Y.then(function() {
                return (function(t, e, n, i) {
                  var r = new Cc(t, e);
                  return (
                    n && (r.da = n),
                    i && Lc(r, i),
                    r.reload().then(function() {
                      return r;
                    })
                  );
                })(n, t, e.w, e.Ca());
              })
                .then(function(t) {
                  return (
                    Sh(e) && t.uid == Sh(e).uid
                      ? Yc(Sh(e), t)
                      : (Eh(e, t), Kc(t)),
                    e.aa(t)
                  );
                })
                .then(function() {
                  Oh(e);
                })
            );
          }
          function Eh(t, e) {
            Sh(t) &&
              ((function(t, e) {
                K(t.O, function(t) {
                  return t == e;
                });
              })(Sh(t), t.ub),
              Xe(Sh(t), 'tokenChanged', t.wa),
              Xe(Sh(t), 'userDeleted', t.xa),
              Xe(Sh(t), 'userInvalidated', t.Ja),
              Uc(Sh(t))),
              e &&
                (e.O.push(t.ub),
                Be(e, 'tokenChanged', t.wa),
                Be(e, 'userDeleted', t.xa),
                Be(e, 'userInvalidated', t.Ja),
                0 < t.o && jc(e)),
              Mi(t, 'currentUser', e),
              e && (e.ua(t.ha()), Dc(e, t), Lc(e, t.I), xc(e, t));
          }
          function kh(e, t) {
            var n = null,
              i = null;
            return _h(
              e,
              t
                .then(function(t) {
                  return (n = bo(t)), (i = Cr(t)), Th(e, t);
                })
                .then(function() {
                  return Ui({
                    user: Sh(e),
                    credential: n,
                    additionalUserInfo: i,
                    operationType: 'signIn',
                  });
                }),
            );
          }
          function Ah(t) {
            return t.app;
          }
          function Sh(t) {
            return t.currentUser;
          }
          function Nh(t) {
            return (Sh(t) && Sh(t)._lat) || null;
          }
          function Oh(t) {
            if (t.ga) {
              for (var e = 0; e < t.m.length; e++) t.m[e] && t.m[e](Nh(t));
              if (t.W !== t.getUid() && t.J.length)
                for (t.W = t.getUid(), e = 0; e < t.J.length; e++)
                  t.J[e] && t.J[e](Nh(t));
            }
          }
          function _h(t, e) {
            return (
              t.O.push(e),
              e.ka(function() {
                F(t.O, e);
              }),
              e
            );
          }
          function Ph() {}
          function Rh() {
            (this.a = {}), (this.b = 1e12);
          }
          (ch.prototype.mb = function(e) {
            var n = null,
              i = this;
            return (
              (function(t) {
                var e = new Yi('invalid-persistence-type'),
                  n = new Yi('unsupported-persistence-type');
                t: {
                  for (i in Tu)
                    if (Tu[i] == t) {
                      var i = !0;
                      break t;
                    }
                  i = !1;
                }
                if (!i || 'string' != typeof t) throw e;
                switch (ui()) {
                  case 'ReactNative':
                    if ('session' === t) throw n;
                    break;
                  case 'Node':
                    if ('none' !== t) throw n;
                    break;
                  default:
                    if (!gi() && 'none' !== t) throw n;
                }
              })(e),
              mh(this, function() {
                return e != i.c.C
                  ? i.b
                      .get(i.c, i.a)
                      .then(function(t) {
                        return (n = t), hh(i, e);
                      })
                      .then(function() {
                        if (((i.c = fh(e)), n)) return i.b.set(i.c, n, i.a);
                      })
                  : Yt();
              })
            );
          }),
            k(gh, nn),
            k(bh, Ce),
            k(yh, Ce),
            ((t = gh.prototype).mb = function(t) {
              return (t = this.h.mb(t)), _h(this, t);
            }),
            (t.ua = function(t) {
              this.Z === t ||
                this.l ||
                ((this.Z = t),
                ja(this.b, this.Z),
                this.dispatchEvent(new bh(this.ha())));
            }),
            (t.ha = function() {
              return this.Z;
            }),
            (t.Tc = function() {
              var t = l.navigator;
              this.ua(
                (t &&
                  ((t.languages && t.languages[0]) ||
                    t.language ||
                    t.userLanguage)) ||
                  null,
              );
            }),
            (t.vc = function(t) {
              this.I.push(t),
                Ua(this.b, fl.SDK_VERSION ? pi(fl.SDK_VERSION, this.I) : null),
                this.dispatchEvent(new yh(this.I));
            }),
            (t.Ca = function() {
              return H(this.I);
            }),
            (t.nb = function(t) {
              this.P === t || this.l || ((this.P = t), (this.b.b = this.P));
            }),
            (t.R = function() {
              return this.P;
            }),
            (t.toJSON = function() {
              return {
                apiKey: Ah(this).options.apiKey,
                authDomain: Ah(this).options.authDomain,
                appName: Ah(this).name,
                currentUser: Sh(this) && Sh(this).A(),
              };
            }),
            (t.xb = function(t, e) {
              switch (t) {
                case 'unknown':
                case 'signInViaRedirect':
                  return !0;
                case 'signInViaPopup':
                  return this.g == e && !!this.f;
                default:
                  return !1;
              }
            }),
            (t.ja = function(t, e, n, i) {
              'signInViaPopup' == t &&
                this.g == i &&
                (n && this.v ? this.v(n) : e && !n && this.f && this.f(e),
                this.c && (this.c.cancel(), (this.c = null)),
                delete this.f,
                delete this.v);
            }),
            (t.Ba = function(t, e) {
              return 'signInViaRedirect' == t ||
                ('signInViaPopup' == t && this.g == e && this.f)
                ? I(this.ac, this)
                : null;
            }),
            (t.ac = function(t, e, n, i) {
              var r = this;
              (t = { requestUri: t, postBody: i, sessionId: e, tenantId: n }),
                this.c && (this.c.cancel(), (this.c = null));
              var o = null,
                a = null,
                s = za(r.b, t).then(function(t) {
                  return (o = bo(t)), (a = Cr(t)), t;
                });
              return _h(
                this,
                (t = r.Y.then(function() {
                  return s;
                })
                  .then(function(t) {
                    return Th(r, t);
                  })
                  .then(function() {
                    return Ui({
                      user: Sh(r),
                      credential: o,
                      additionalUserInfo: a,
                      operationType: 'signIn',
                    });
                  })),
              );
            }),
            (t.Lc = function(e) {
              if (!bi())
                return zt(
                  new Yi('operation-not-supported-in-this-environment'),
                );
              var n = this,
                t = Rr(e.providerId),
                i = Ai(),
                r = null;
              (!Ii() || ai()) &&
                Ah(this).options.authDomain &&
                e.isOAuthProvider &&
                (r = qs(
                  Ah(this).options.authDomain,
                  Ah(this).options.apiKey,
                  Ah(this).name,
                  'signInViaPopup',
                  e,
                  null,
                  i,
                  fl.SDK_VERSION || null,
                  null,
                  null,
                  this.R(),
                ));
              var o = ei(r, t && t.sa, t && t.ra);
              return _h(
                this,
                (t = wh(this)
                  .then(function(t) {
                    return sc(t, o, 'signInViaPopup', e, i, !!r, n.R());
                  })
                  .then(function() {
                    return new qt(function(t, e) {
                      n.ja(
                        'signInViaPopup',
                        null,
                        new Yi('cancelled-popup-request'),
                        n.g,
                      ),
                        (n.f = t),
                        (n.v = e),
                        (n.g = i),
                        (n.c = hc(n.a, n, 'signInViaPopup', o, i));
                    });
                  })
                  .then(function(t) {
                    return o && ti(o), t ? Ui(t) : null;
                  })
                  .s(function(t) {
                    throw (o && ti(o), t);
                  })),
              );
            }),
            (t.Mc = function(t) {
              if (!bi())
                return zt(
                  new Yi('operation-not-supported-in-this-environment'),
                );
              var e = this;
              return _h(
                this,
                wh(this)
                  .then(function() {
                    return (function(t) {
                      return mh(t, function() {
                        return t.b.set(lh, t.c.C, t.a);
                      });
                    })(e.h);
                  })
                  .then(function() {
                    return cc(e.a, 'signInViaRedirect', t, void 0, e.R());
                  }),
              );
            }),
            (t.oa = function() {
              var e = this;
              return Ih(this)
                .then(function(t) {
                  return e.a && vc(e.a.b), t;
                })
                .s(function(t) {
                  throw (e.a && vc(e.a.b), t);
                });
            }),
            (t.Rc = function(t) {
              if (!t) return zt(new Yi('null-user'));
              if (this.P != t.tenantId) return zt(new Yi('tenant-id-mismatch'));
              var e = this,
                n = {};
              (n.apiKey = Ah(this).options.apiKey),
                (n.authDomain = Ah(this).options.authDomain),
                (n.appName = Ah(this).name);
              var i = (function(t, e, n, i) {
                e = e || { apiKey: t.l, authDomain: t.o, appName: t.m };
                var r = t.b,
                  o = {};
                return (
                  (o[Ca] = r.b),
                  (o.refreshToken = r.a),
                  (o.expiresIn = (r.c - E()) / 1e3),
                  (e = new Cc(e, o)),
                  n && (e.da = n),
                  i && Lc(e, i),
                  Yc(e, t),
                  e
                );
              })(t, n, e.w, e.Ca());
              return _h(
                this,
                this.i
                  .then(function() {
                    if (Ah(e).options.apiKey != t.l) return i.reload();
                  })
                  .then(function() {
                    return Sh(e) && t.uid == Sh(e).uid
                      ? (Yc(Sh(e), t), e.aa(t))
                      : (Eh(e, i), Kc(i), e.aa(i));
                  })
                  .then(function() {
                    Oh(e);
                  }),
              );
            }),
            (t.pb = function() {
              var t = this,
                e = this.i.then(function() {
                  return (
                    t.a && vc(t.a.b),
                    Sh(t)
                      ? (Eh(t, null),
                        ph(t.h).then(function() {
                          Oh(t);
                        }))
                      : Yt()
                  );
                });
              return _h(this, e);
            }),
            (t.Nc = function() {
              var i = this;
              return vh(this.h, Ah(this).options.authDomain).then(function(t) {
                if (!i.l) {
                  var e;
                  if ((e = Sh(i) && t)) {
                    e = Sh(i).uid;
                    var n = t.uid;
                    e =
                      null != e && '' !== e && null != n && '' !== n && e == n;
                  }
                  if (e) return Yc(Sh(i), t), Sh(i).G();
                  (Sh(i) || t) &&
                    (Eh(i, t),
                    t && (Kc(t), (t.da = i.w)),
                    i.a && ic(i.a, i),
                    Oh(i));
                }
              });
            }),
            (t.aa = function(t) {
              return dh(this.h, t);
            }),
            (t.bc = function() {
              Oh(this), this.aa(Sh(this));
            }),
            (t.mc = function() {
              this.pb();
            }),
            (t.nc = function() {
              this.pb();
            }),
            (t.oc = function(t) {
              var e = this;
              this.addAuthTokenListener(function() {
                t.next(Sh(e));
              });
            }),
            (t.pc = function(t) {
              var e = this;
              !(function(t, e) {
                t.J.push(e),
                  _h(
                    t,
                    t.i.then(function() {
                      !t.l &&
                        V(t.J, e) &&
                        t.W !== t.getUid() &&
                        ((t.W = t.getUid()), e(Nh(t)));
                    }),
                  );
              })(this, function() {
                t.next(Sh(e));
              });
            }),
            (t.xc = function(t, e, n) {
              var i = this;
              return (
                this.ga &&
                  Promise.resolve().then(function() {
                    m(t) ? t(Sh(i)) : m(t.next) && t.next(Sh(i));
                  }),
                this.Ub(t, e, n)
              );
            }),
            (t.wc = function(t, e, n) {
              var i = this;
              return (
                this.ga &&
                  Promise.resolve().then(function() {
                    (i.W = i.getUid()),
                      m(t) ? t(Sh(i)) : m(t.next) && t.next(Sh(i));
                  }),
                this.Vb(t, e, n)
              );
            }),
            (t.cc = function(t) {
              var e = this,
                n = this.i.then(function() {
                  return Sh(e)
                    ? Sh(e)
                        .G(t)
                        .then(function(t) {
                          return { accessToken: t };
                        })
                    : null;
                });
              return _h(this, n);
            }),
            (t.Hc = function(t) {
              var n = this;
              return this.i
                .then(function() {
                  return kh(n, Ns(n.b, Ts, { token: t }));
                })
                .then(function(t) {
                  var e = t.user;
                  return Jc(e, 'isAnonymous', !1), n.aa(e), t;
                });
            }),
            (t.Ic = function(t, e) {
              var n = this;
              return this.i.then(function() {
                return kh(n, Ns(n.b, Es, { email: t, password: e }));
              });
            }),
            (t.Xb = function(t, e) {
              var n = this;
              return this.i.then(function() {
                return kh(n, Ns(n.b, ns, { email: t, password: e }));
              });
            }),
            (t.Sa = function(t) {
              var e = this;
              return this.i.then(function() {
                return kh(e, t.na(e.b));
              });
            }),
            (t.Gc = function(t) {
              return (
                Li(
                  'firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead.',
                ),
                this.Sa(t)
              );
            }),
            (t.ob = function() {
              var n = this;
              return this.i.then(function() {
                var t = Sh(n);
                return t && t.isAnonymous
                  ? Ui({
                      user: t,
                      credential: null,
                      additionalUserInfo: Ui({
                        providerId: null,
                        isNewUser: !1,
                      }),
                      operationType: 'signIn',
                    })
                  : kh(n, n.b.ob()).then(function(t) {
                      var e = t.user;
                      return Jc(e, 'isAnonymous', !0), n.aa(e), t;
                    });
              });
            }),
            (t.getUid = function() {
              return (Sh(this) && Sh(this).uid) || null;
            }),
            (t.Wb = function(t) {
              this.addAuthTokenListener(t),
                this.o++,
                0 < this.o && Sh(this) && jc(Sh(this));
            }),
            (t.Ec = function(e) {
              var n = this;
              M(this.m, function(t) {
                t == e && n.o--;
              }),
                this.o < 0 && (this.o = 0),
                0 == this.o && Sh(this) && Uc(Sh(this)),
                this.removeAuthTokenListener(e);
            }),
            (t.addAuthTokenListener = function(t) {
              var e = this;
              this.m.push(t),
                _h(
                  this,
                  this.i.then(function() {
                    e.l || (V(e.m, t) && t(Nh(e)));
                  }),
                );
            }),
            (t.removeAuthTokenListener = function(e) {
              K(this.m, function(t) {
                return t == e;
              });
            }),
            (t.delete = function() {
              this.l = !0;
              for (var t = 0; t < this.O.length; t++)
                this.O[t].cancel('app-deleted');
              return (
                (this.O = []),
                this.h &&
                  (t = this.h).b.removeListener(fh('local'), t.a, this.ma),
                this.a && (rc(this.a, this), vc(this.a.b)),
                Promise.resolve()
              );
            }),
            (t.$b = function(t) {
              return _h(
                this,
                (function(t, e) {
                  return Ns(t, is, {
                    identifier: e,
                    continueUri: yi() ? $n() : 'http://localhost',
                  }).then(function(t) {
                    return t.signinMethods || [];
                  });
                })(this.b, t),
              );
            }),
            (t.qc = function(t) {
              return !!lo(t);
            }),
            (t.lb = function(e, n) {
              var i = this;
              return _h(
                this,
                Yt()
                  .then(function() {
                    var t = new ur(n);
                    if (!t.c)
                      throw new Yi(
                        'argument-error',
                        lr + ' must be true when sending sign in link to email',
                      );
                    return br(t);
                  })
                  .then(function(t) {
                    return i.b.lb(e, t);
                  })
                  .then(function() {}),
              );
            }),
            (t.Uc = function(t) {
              return this.Ma(t).then(function(t) {
                return t.data.email;
              });
            }),
            (t.ab = function(t, e) {
              return _h(
                this,
                this.b.ab(t, e).then(function() {}),
              );
            }),
            (t.Ma = function(t) {
              return _h(
                this,
                this.b.Ma(t).then(function(t) {
                  return new Fi(t);
                }),
              );
            }),
            (t.Ya = function(t) {
              return _h(
                this,
                this.b.Ya(t).then(function() {}),
              );
            }),
            (t.kb = function(e, t) {
              var n = this;
              return _h(
                this,
                Yt()
                  .then(function() {
                    return void 0 === t || G(t) ? {} : br(new ur(t));
                  })
                  .then(function(t) {
                    return n.b.kb(e, t);
                  })
                  .then(function() {}),
              );
            }),
            (t.Kc = function(t, e) {
              return _h(this, Ic(this, t, e, I(this.Sa, this)));
            }),
            (t.Jc = function(n, i) {
              var r = this;
              return _h(
                this,
                Yt().then(function() {
                  var t = i || $n(),
                    e = ho(n, t);
                  if (!(t = lo(t)))
                    throw new Yi('argument-error', 'Invalid email link!');
                  if (t.tenantId !== r.R()) throw new Yi('tenant-id-mismatch');
                  return r.Sa(e);
                }),
              );
            }),
            (Ph.prototype.render = function() {}),
            (Ph.prototype.reset = function() {}),
            (Ph.prototype.getResponse = function() {}),
            (Ph.prototype.execute = function() {});
          var Ch = null;
          function Dh(t, e) {
            return ((e = Lh(e)) && t.a[e]) || null;
          }
          function Lh(t) {
            return (t = void 0 === t ? 1e12 : t) ? t.toString() : null;
          }
          function xh(t, e) {
            (this.g = !1),
              (this.c = e),
              (this.a = this.b = null),
              (this.h = 'invisible' !== this.c.size),
              (this.f = Fn(t));
            var n = this;
            (this.i = function() {
              n.execute();
            }),
              this.h ? this.execute() : Be(this.f, 'click', this.i);
          }
          function Mh(t) {
            if (t.g) throw Error('reCAPTCHA mock was already deleted!');
          }
          function jh() {}
          (Rh.prototype.render = function(t, e) {
            return (this.a[this.b.toString()] = new xh(t, e)), this.b++;
          }),
            (Rh.prototype.reset = function(t) {
              var e = Dh(this, t);
              (t = Lh(t)), e && t && (e.delete(), delete this.a[t]);
            }),
            (Rh.prototype.getResponse = function(t) {
              return (t = Dh(this, t)) ? t.getResponse() : null;
            }),
            (Rh.prototype.execute = function(t) {
              (t = Dh(this, t)) && t.execute();
            }),
            (xh.prototype.getResponse = function() {
              return Mh(this), this.b;
            }),
            (xh.prototype.execute = function() {
              Mh(this);
              var n = this;
              this.a ||
                (this.a = setTimeout(function() {
                  n.b = (function() {
                    for (var t = 50, e = []; 0 < t; )
                      e.push(
                        '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.charAt(
                          Math.floor(62 * Math.random()),
                        ),
                      ),
                        t--;
                    return e.join('');
                  })();
                  var t = n.c.callback,
                    e = n.c['expired-callback'];
                  if (t)
                    try {
                      t(n.b);
                    } catch (t) {}
                  n.a = setTimeout(function() {
                    if (((n.a = null), (n.b = null), e))
                      try {
                        e();
                      } catch (t) {}
                    n.h && n.execute();
                  }, 6e4);
                }, 500));
            }),
            (xh.prototype.delete = function() {
              Mh(this),
                (this.g = !0),
                clearTimeout(this.a),
                (this.a = null),
                Xe(this.f, 'click', this.i);
            }),
            (jh.prototype.g = function() {
              return Yt((Ch = Ch || new Rh()));
            }),
            (jh.prototype.c = function() {});
          var Uh = null;
          function Vh() {
            (this.b = l.grecaptcha ? 1 / 0 : 0),
              (this.f = null),
              (this.a = '__rcb' + Math.floor(1e6 * Math.random()).toString());
          }
          var Fh = new Y(
              Z,
              'https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}',
            ),
            Kh = new Oi(3e4, 6e4);
          (Vh.prototype.g = function(r) {
            var o = this;
            return new qt(function(t, e) {
              var i = setTimeout(function() {
                e(new Yi('network-request-failed'));
              }, Kh.get());
              !l.grecaptcha || (r !== o.f && !o.b)
                ? ((l[o.a] = function() {
                    if (l.grecaptcha) {
                      o.f = r;
                      var n = l.grecaptcha.render;
                      (l.grecaptcha.render = function(t, e) {
                        return (t = n(t, e)), o.b++, t;
                      }),
                        clearTimeout(i),
                        t(l.grecaptcha);
                    } else clearTimeout(i), e(new Yi('internal-error'));
                    delete l[o.a];
                  }),
                  Yt(Ea(nt(Fh, { onload: o.a, hl: r || '' }))).s(function() {
                    clearTimeout(i),
                      e(
                        new Yi(
                          'internal-error',
                          'Unable to load external reCAPTCHA dependencies!',
                        ),
                      );
                  }))
                : (clearTimeout(i), t(l.grecaptcha));
            });
          }),
            (Vh.prototype.c = function() {
              this.b--;
            });
          var qh = null;
          function Hh(t, e, n, i, r, o, a) {
            if (
              (Mi(this, 'type', 'recaptcha'),
              (this.c = this.f = null),
              (this.B = !1),
              (this.u = e),
              (this.g = null),
              (a = a ? (Uh = Uh || new jh()) : (qh = qh || new Vh())),
              (this.m = a),
              (this.a = n || { theme: 'light', type: 'image' }),
              (this.h = []),
              this.a[Wh])
            )
              throw new Yi(
                'argument-error',
                'sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.',
              );
            if (((this.i = 'invisible' === this.a[Xh]), !l.document))
              throw new Yi(
                'operation-not-supported-in-this-environment',
                'RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.',
              );
            if (!Fn(e) || (!this.i && Fn(e).hasChildNodes()))
              throw new Yi(
                'argument-error',
                'reCAPTCHA container is either not found or already contains inner elements!',
              );
            (this.o = new Pa(t, o || null, r || null)),
              (this.v =
                i ||
                function() {
                  return null;
                });
            var s = this;
            this.l = [];
            var u = this.a[Bh];
            this.a[Bh] = function(t) {
              if ((Jh(s, t), 'function' == typeof u)) u(t);
              else if ('string' == typeof u) {
                var e = mi(u, l);
                'function' == typeof e && e(t);
              }
            };
            var c = this.a[Gh];
            this.a[Gh] = function() {
              if ((Jh(s, null), 'function' == typeof c)) c();
              else if ('string' == typeof c) {
                var t = mi(c, l);
                'function' == typeof t && t();
              }
            };
          }
          var Bh = 'callback',
            Gh = 'expired-callback',
            Wh = 'sitekey',
            Xh = 'size';
          function Jh(t, e) {
            for (var n = 0; n < t.l.length; n++)
              try {
                t.l[n](e);
              } catch (t) {}
          }
          function Yh(t, e) {
            return (
              t.h.push(e),
              e.ka(function() {
                F(t.h, e);
              }),
              e
            );
          }
          function zh(t) {
            if (t.B)
              throw new Yi(
                'internal-error',
                'RecaptchaVerifier instance has been destroyed.',
              );
          }
          function $h(t, e, n) {
            var i = !1;
            try {
              this.b = n || fl.app();
            } catch (t) {
              throw new Yi(
                'argument-error',
                'No firebase.app.App instance is currently initialized.',
              );
            }
            if (!this.b.options || !this.b.options.apiKey)
              throw new Yi('invalid-api-key');
            n = this.b.options.apiKey;
            var r = this,
              o = null;
            try {
              o = this.b.auth().Ca();
            } catch (t) {}
            try {
              i = this.b.auth().settings.appVerificationDisabledForTesting;
            } catch (t) {}
            (o = fl.SDK_VERSION ? pi(fl.SDK_VERSION, o) : null),
              Hh.call(
                this,
                n,
                t,
                e,
                function() {
                  try {
                    var e = r.b.auth().ha();
                  } catch (t) {
                    e = null;
                  }
                  return e;
                },
                o,
                Nr(Ar),
                i,
              );
          }
          function Zh(t, e, n, i) {
            t: {
              n = Array.prototype.slice.call(n);
              for (var r = 0, o = !1, a = 0; a < e.length; a++)
                if (e[a].optional) o = !0;
                else {
                  if (o)
                    throw new Yi(
                      'internal-error',
                      'Argument validator encountered a required argument after an optional argument.',
                    );
                  r++;
                }
              if (((o = e.length), n.length < r || o < n.length))
                i =
                  'Expected ' +
                  (r == o
                    ? 1 == r
                      ? '1 argument'
                      : r + ' arguments'
                    : r + '-' + o + ' arguments') +
                  ' but got ' +
                  n.length +
                  '.';
              else {
                for (r = 0; r < n.length; r++)
                  if (
                    ((o = e[r].optional && void 0 === n[r]),
                    !e[r].N(n[r]) && !o)
                  ) {
                    if (((e = e[r]), r < 0 || r >= Qh.length))
                      throw new Yi(
                        'internal-error',
                        'Argument validator received an unsupported number of arguments.',
                      );
                    (n = Qh[r]),
                      (i =
                        (i ? '' : n + ' argument ') +
                        (e.name ? '"' + e.name + '" ' : '') +
                        'must be ' +
                        e.M +
                        '.');
                    break t;
                  }
                i = null;
              }
            }
            if (i) throw new Yi('argument-error', t + ' failed: ' + i);
          }
          ((t = Hh.prototype).Da = function() {
            var e = this;
            return this.f
              ? this.f
              : (this.f = Yh(
                  this,
                  Yt()
                    .then(function() {
                      if (yi() && !si()) return ri();
                      throw new Yi(
                        'operation-not-supported-in-this-environment',
                        'RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.',
                      );
                    })
                    .then(function() {
                      return e.m.g(e.v());
                    })
                    .then(function(t) {
                      return (e.g = t), Ns(e.o, ds, {});
                    })
                    .then(function(t) {
                      e.a[Wh] = t.recaptchaSiteKey;
                    })
                    .s(function(t) {
                      throw ((e.f = null), t);
                    }),
                ));
          }),
            (t.render = function() {
              zh(this);
              var n = this;
              return Yh(
                this,
                this.Da().then(function() {
                  if (null === n.c) {
                    var t = n.u;
                    if (!n.i) {
                      var e = Fn(t);
                      (t = Hn('DIV')), e.appendChild(t);
                    }
                    n.c = n.g.render(t, n.a);
                  }
                  return n.c;
                }),
              );
            }),
            (t.verify = function() {
              zh(this);
              var r = this;
              return Yh(
                this,
                this.render().then(function(i) {
                  return new qt(function(e) {
                    var t = r.g.getResponse(i);
                    if (t) e(t);
                    else {
                      var n = function(t) {
                        t &&
                          ((function(t, e) {
                            K(t.l, function(t) {
                              return t == e;
                            });
                          })(r, n),
                          e(t));
                      };
                      r.l.push(n), r.i && r.g.execute(r.c);
                    }
                  });
                }),
              );
            }),
            (t.reset = function() {
              zh(this), null !== this.c && this.g.reset(this.c);
            }),
            (t.clear = function() {
              zh(this), (this.B = !0), this.m.c();
              for (var t = 0; t < this.h.length; t++)
                this.h[t].cancel(
                  'RecaptchaVerifier instance has been destroyed.',
                );
              if (!this.i) {
                t = Fn(this.u);
                for (var e; (e = t.firstChild); ) t.removeChild(e);
              }
            }),
            k($h, Hh);
          var Qh = 'First Second Third Fourth Fifth Sixth Seventh Eighth Ninth'.split(
            ' ',
          );
          function tl(t, e) {
            return { name: t || '', M: 'a valid string', optional: !!e, N: h };
          }
          function el(t, e) {
            return { name: t || '', M: 'a boolean', optional: !!e, N: n };
          }
          function nl(t, e) {
            return { name: t || '', M: 'a valid object', optional: !!e, N: g };
          }
          function il(t, e) {
            return { name: t || '', M: 'a function', optional: !!e, N: m };
          }
          function rl(t, e) {
            return { name: t || '', M: 'null', optional: !!e, N: r };
          }
          function ol(n) {
            return {
              name: n ? n + 'Credential' : 'credential',
              M: n ? 'a valid ' + n + ' credential' : 'a valid credential',
              optional: !1,
              N: function(t) {
                if (!t) return !1;
                var e = !n || t.providerId === n;
                return !(!t.na || !e);
              },
            };
          }
          function al() {
            return {
              name: 'applicationVerifier',
              M: 'an implementation of firebase.auth.ApplicationVerifier',
              optional: !1,
              N: function(t) {
                return !!(t && h(t.type) && m(t.verify));
              },
            };
          }
          function sl(e, n, t, i) {
            return {
              name: t || '',
              M: e.M + ' or ' + n.M,
              optional: !!i,
              N: function(t) {
                return e.N(t) || n.N(t);
              },
            };
          }
          function ul(t, e) {
            for (var n in e) {
              var i = e[n].name;
              t[i] = ll(i, t[n], e[n].j);
            }
          }
          function cl(t, e) {
            for (var n in e) {
              var i = e[n].name;
              i !== n &&
                Object.defineProperty(t, i, {
                  get: T(function(t) {
                    return this[t];
                  }, n),
                  set: T(
                    function(t, e, n, i) {
                      Zh(t, [n], [i], !0), (this[e] = i);
                    },
                    i,
                    n,
                    e[n].Za,
                  ),
                  enumerable: !0,
                });
            }
          }
          function hl(t, e, n, i) {
            t[e] = ll(e, n, i);
          }
          function ll(t, e, n) {
            function i() {
              var t = Array.prototype.slice.call(arguments);
              return Zh(o, n, t), e.apply(this, t);
            }
            if (!n) return e;
            var r,
              o = (function(t) {
                return (t = t.split('.'))[t.length - 1];
              })(t);
            for (r in e) i[r] = e[r];
            for (r in e.prototype) i.prototype[r] = e.prototype[r];
            return i;
          }
          ul(gh.prototype, {
            Ya: { name: 'applyActionCode', j: [tl('code')] },
            Ma: { name: 'checkActionCode', j: [tl('code')] },
            ab: {
              name: 'confirmPasswordReset',
              j: [tl('code'), tl('newPassword')],
            },
            Xb: {
              name: 'createUserWithEmailAndPassword',
              j: [tl('email'), tl('password')],
            },
            $b: { name: 'fetchSignInMethodsForEmail', j: [tl('email')] },
            oa: { name: 'getRedirectResult', j: [] },
            qc: { name: 'isSignInWithEmailLink', j: [tl('emailLink')] },
            wc: {
              name: 'onAuthStateChanged',
              j: [
                sl(nl(), il(), 'nextOrObserver'),
                il('opt_error', !0),
                il('opt_completed', !0),
              ],
            },
            xc: {
              name: 'onIdTokenChanged',
              j: [
                sl(nl(), il(), 'nextOrObserver'),
                il('opt_error', !0),
                il('opt_completed', !0),
              ],
            },
            kb: {
              name: 'sendPasswordResetEmail',
              j: [
                tl('email'),
                sl(
                  nl('opt_actionCodeSettings', !0),
                  rl(null, !0),
                  'opt_actionCodeSettings',
                  !0,
                ),
              ],
            },
            lb: {
              name: 'sendSignInLinkToEmail',
              j: [tl('email'), nl('actionCodeSettings')],
            },
            mb: { name: 'setPersistence', j: [tl('persistence')] },
            Gc: { name: 'signInAndRetrieveDataWithCredential', j: [ol()] },
            ob: { name: 'signInAnonymously', j: [] },
            Sa: { name: 'signInWithCredential', j: [ol()] },
            Hc: { name: 'signInWithCustomToken', j: [tl('token')] },
            Ic: {
              name: 'signInWithEmailAndPassword',
              j: [tl('email'), tl('password')],
            },
            Jc: {
              name: 'signInWithEmailLink',
              j: [tl('email'), tl('emailLink', !0)],
            },
            Kc: { name: 'signInWithPhoneNumber', j: [tl('phoneNumber'), al()] },
            Lc: {
              name: 'signInWithPopup',
              j: [
                {
                  name: 'authProvider',
                  M: 'a valid Auth provider',
                  optional: !1,
                  N: function(t) {
                    return !!(
                      t &&
                      t.providerId &&
                      t.hasOwnProperty &&
                      t.hasOwnProperty('isOAuthProvider')
                    );
                  },
                },
              ],
            },
            Mc: {
              name: 'signInWithRedirect',
              j: [
                {
                  name: 'authProvider',
                  M: 'a valid Auth provider',
                  optional: !1,
                  N: function(t) {
                    return !!(
                      t &&
                      t.providerId &&
                      t.hasOwnProperty &&
                      t.hasOwnProperty('isOAuthProvider')
                    );
                  },
                },
              ],
            },
            Rc: {
              name: 'updateCurrentUser',
              j: [
                sl(
                  {
                    name: 'user',
                    M: 'an instance of Firebase User',
                    optional: !1,
                    N: function(t) {
                      return !!(t && t instanceof Cc);
                    },
                  },
                  rl(),
                  'user',
                ),
              ],
            },
            pb: { name: 'signOut', j: [] },
            toJSON: { name: 'toJSON', j: [tl(null, !0)] },
            Tc: { name: 'useDeviceLanguage', j: [] },
            Uc: { name: 'verifyPasswordResetCode', j: [tl('code')] },
          }),
            cl(gh.prototype, {
              lc: { name: 'languageCode', Za: sl(tl(), rl(), 'languageCode') },
              ti: { name: 'tenantId', Za: sl(tl(), rl(), 'tenantId') },
            }),
            ((gh.Persistence = Tu).LOCAL = 'local'),
            (gh.Persistence.SESSION = 'session'),
            (gh.Persistence.NONE = 'none'),
            ul(Cc.prototype, {
              delete: { name: 'delete', j: [] },
              dc: { name: 'getIdTokenResult', j: [el('opt_forceRefresh', !0)] },
              G: { name: 'getIdToken', j: [el('opt_forceRefresh', !0)] },
              rc: { name: 'linkAndRetrieveDataWithCredential', j: [ol()] },
              fb: { name: 'linkWithCredential', j: [ol()] },
              sc: { name: 'linkWithPhoneNumber', j: [tl('phoneNumber'), al()] },
              tc: {
                name: 'linkWithPopup',
                j: [
                  {
                    name: 'authProvider',
                    M: 'a valid Auth provider',
                    optional: !1,
                    N: function(t) {
                      return !!(
                        t &&
                        t.providerId &&
                        t.hasOwnProperty &&
                        t.hasOwnProperty('isOAuthProvider')
                      );
                    },
                  },
                ],
              },
              uc: {
                name: 'linkWithRedirect',
                j: [
                  {
                    name: 'authProvider',
                    M: 'a valid Auth provider',
                    optional: !1,
                    N: function(t) {
                      return !!(
                        t &&
                        t.providerId &&
                        t.hasOwnProperty &&
                        t.hasOwnProperty('isOAuthProvider')
                      );
                    },
                  },
                ],
              },
              Ac: {
                name: 'reauthenticateAndRetrieveDataWithCredential',
                j: [ol()],
              },
              hb: { name: 'reauthenticateWithCredential', j: [ol()] },
              Bc: {
                name: 'reauthenticateWithPhoneNumber',
                j: [tl('phoneNumber'), al()],
              },
              Cc: {
                name: 'reauthenticateWithPopup',
                j: [
                  {
                    name: 'authProvider',
                    M: 'a valid Auth provider',
                    optional: !1,
                    N: function(t) {
                      return !!(
                        t &&
                        t.providerId &&
                        t.hasOwnProperty &&
                        t.hasOwnProperty('isOAuthProvider')
                      );
                    },
                  },
                ],
              },
              Dc: {
                name: 'reauthenticateWithRedirect',
                j: [
                  {
                    name: 'authProvider',
                    M: 'a valid Auth provider',
                    optional: !1,
                    N: function(t) {
                      return !!(
                        t &&
                        t.providerId &&
                        t.hasOwnProperty &&
                        t.hasOwnProperty('isOAuthProvider')
                      );
                    },
                  },
                ],
              },
              reload: { name: 'reload', j: [] },
              jb: {
                name: 'sendEmailVerification',
                j: [
                  sl(
                    nl('opt_actionCodeSettings', !0),
                    rl(null, !0),
                    'opt_actionCodeSettings',
                    !0,
                  ),
                ],
              },
              toJSON: { name: 'toJSON', j: [tl(null, !0)] },
              Qc: { name: 'unlink', j: [tl('provider')] },
              rb: { name: 'updateEmail', j: [tl('email')] },
              sb: { name: 'updatePassword', j: [tl('password')] },
              Sc: { name: 'updatePhoneNumber', j: [ol('phone')] },
              tb: { name: 'updateProfile', j: [nl('profile')] },
            }),
            ul(Rh.prototype, {
              execute: { name: 'execute' },
              render: { name: 'render' },
              reset: { name: 'reset' },
              getResponse: { name: 'getResponse' },
            }),
            ul(Ph.prototype, {
              execute: { name: 'execute' },
              render: { name: 'render' },
              reset: { name: 'reset' },
              getResponse: { name: 'getResponse' },
            }),
            ul(qt.prototype, {
              ka: { name: 'finally' },
              s: { name: 'catch' },
              then: { name: 'then' },
            }),
            cl(yc.prototype, {
              appVerificationDisabled: {
                name: 'appVerificationDisabledForTesting',
                Za: el('appVerificationDisabledForTesting'),
              },
            }),
            ul(wc.prototype, {
              confirm: { name: 'confirm', j: [tl('verificationCode')] },
            }),
            hl(
              qr,
              'fromJSON',
              function(t) {
                t = h(t) ? JSON.parse(t) : t;
                for (var e, n = [Yr, uo, po, Wr], i = 0; i < n.length; i++)
                  if ((e = n[i](t))) return e;
                return null;
              },
              [sl(tl(), nl(), 'json')],
            ),
            hl(
              co,
              'credential',
              function(t, e) {
                return new so(t, e);
              },
              [tl('email'), tl('password')],
            ),
            ul(so.prototype, { A: { name: 'toJSON', j: [tl(null, !0)] } }),
            ul(Qr.prototype, {
              ya: { name: 'addScope', j: [tl('scope')] },
              Ga: {
                name: 'setCustomParameters',
                j: [nl('customOAuthParameters')],
              },
            }),
            hl(Qr, 'credential', to, [sl(tl(), nl(), 'token')]),
            hl(co, 'credentialWithLink', ho, [tl('email'), tl('emailLink')]),
            ul(eo.prototype, {
              ya: { name: 'addScope', j: [tl('scope')] },
              Ga: {
                name: 'setCustomParameters',
                j: [nl('customOAuthParameters')],
              },
            }),
            hl(eo, 'credential', no, [sl(tl(), nl(), 'token')]),
            ul(io.prototype, {
              ya: { name: 'addScope', j: [tl('scope')] },
              Ga: {
                name: 'setCustomParameters',
                j: [nl('customOAuthParameters')],
              },
            }),
            hl(io, 'credential', ro, [
              sl(tl(), sl(nl(), rl()), 'idToken'),
              sl(tl(), rl(), 'accessToken', !0),
            ]),
            ul(oo.prototype, {
              Ga: {
                name: 'setCustomParameters',
                j: [nl('customOAuthParameters')],
              },
            }),
            hl(oo, 'credential', ao, [
              sl(tl(), nl(), 'token'),
              tl('secret', !0),
            ]),
            ul(Zr.prototype, {
              ya: { name: 'addScope', j: [tl('scope')] },
              credential: {
                name: 'credential',
                j: [
                  sl(tl(), sl(nl(), rl()), 'optionsOrIdToken'),
                  sl(tl(), rl(), 'accessToken', !0),
                ],
              },
              Ga: {
                name: 'setCustomParameters',
                j: [nl('customOAuthParameters')],
              },
            }),
            ul(Xr.prototype, { A: { name: 'toJSON', j: [tl(null, !0)] } }),
            ul(Br.prototype, { A: { name: 'toJSON', j: [tl(null, !0)] } }),
            hl(mo, 'credential', go, [
              tl('verificationId'),
              tl('verificationCode'),
            ]),
            ul(mo.prototype, {
              Wa: { name: 'verifyPhoneNumber', j: [tl('phoneNumber'), al()] },
            }),
            ul(fo.prototype, { A: { name: 'toJSON', j: [tl(null, !0)] } }),
            ul(Yi.prototype, { toJSON: { name: 'toJSON', j: [tl(null, !0)] } }),
            ul(So.prototype, { toJSON: { name: 'toJSON', j: [tl(null, !0)] } }),
            ul(Ao.prototype, { toJSON: { name: 'toJSON', j: [tl(null, !0)] } }),
            ul($h.prototype, {
              clear: { name: 'clear', j: [] },
              render: { name: 'render', j: [] },
              verify: { name: 'verify', j: [] },
            }),
            hl(Qi, 'parseLink', sr, [tl('link')]),
            (function() {
              if (
                void 0 === fl ||
                !fl.INTERNAL ||
                !fl.INTERNAL.registerComponent
              )
                throw Error(
                  'Cannot find the firebase namespace; be sure to include firebase-app.js before this library.',
                );
              var t = {
                ActionCodeInfo: {
                  Operation: {
                    EMAIL_SIGNIN: Ki,
                    PASSWORD_RESET: 'PASSWORD_RESET',
                    RECOVER_EMAIL: 'RECOVER_EMAIL',
                    VERIFY_EMAIL: 'VERIFY_EMAIL',
                  },
                },
                Auth: gh,
                AuthCredential: qr,
                Error: Yi,
              };
              hl(t, 'EmailAuthProvider', co, []),
                hl(t, 'FacebookAuthProvider', Qr, []),
                hl(t, 'GithubAuthProvider', eo, []),
                hl(t, 'GoogleAuthProvider', io, []),
                hl(t, 'TwitterAuthProvider', oo, []),
                hl(t, 'OAuthProvider', Zr, [tl('providerId')]),
                hl(t, 'SAMLAuthProvider', $r, [tl('providerId')]),
                hl(t, 'PhoneAuthProvider', mo, [
                  {
                    name: 'auth',
                    M: 'an instance of Firebase Auth',
                    optional: !0,
                    N: function(t) {
                      return !!(t && t instanceof gh);
                    },
                  },
                ]),
                hl(t, 'RecaptchaVerifier', $h, [
                  sl(
                    tl(),
                    {
                      name: '',
                      M: 'an HTML element',
                      optional: !1,
                      N: function(t) {
                        return !!(t && t instanceof Element);
                      },
                    },
                    'recaptchaContainer',
                  ),
                  nl('recaptchaParameters', !0),
                  {
                    name: 'app',
                    M: 'an instance of Firebase App',
                    optional: !0,
                    N: function(t) {
                      return !!(t && t instanceof fl.app.App);
                    },
                  },
                ]),
                hl(t, 'ActionCodeURL', Qi, []),
                fl.INTERNAL.registerComponent({
                  name: 'auth',
                  instanceFactory: function(t) {
                    return new gh((t = t.getProvider('app').getImmediate()));
                  },
                  multipleInstances: !1,
                  serviceProps: t,
                  instantiationMode: 'LAZY',
                  type: 'PUBLIC',
                }),
                fl.INTERNAL.registerComponent({
                  name: 'auth-internal',
                  instanceFactory: function(t) {
                    return {
                      getUid: I(
                        (t = t.getProvider('auth').getImmediate()).getUid,
                        t,
                      ),
                      getToken: I(t.cc, t),
                      addAuthTokenListener: I(t.Wb, t),
                      removeAuthTokenListener: I(t.Ec, t),
                    };
                  },
                  multipleInstances: !1,
                  instantiationMode: 'LAZY',
                  type: 'PRIVATE',
                }),
                fl.registerVersion('@firebase/auth', '0.13.3'),
                fl.INTERNAL.extendNamespace({ User: Cc });
            })();
        }.apply(
          'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
            ? self
            : 'undefined' != typeof window
            ? window
            : {},
        );
    }.apply(this, arguments));
  } catch (t) {
    throw (console.error(t),
    new Error(
      'Cannot instantiate firebase-auth - be sure to load firebase-app.js first.',
    ));
  }
});
