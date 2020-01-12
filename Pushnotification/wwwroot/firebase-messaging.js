!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(require("@firebase/app")) : "function" == typeof define && define.amd ? define(["@firebase/app"], t) : t((e = e || self).firebase)
}(this, function(Ce) {
    "use strict";
    try {
        (function() {
            Ce = Ce && Ce.hasOwnProperty("default") ? Ce.default : Ce;
            var r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ;
            function i(e, t) {
                function n() {
                    this.constructor = e
                }
                r(e, t),
                e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                new n)
            }
            var o = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }
            ;
            function l(o, s, a, c) {
                return new (a || (a = Promise))(function(e, t) {
                    function n(e) {
                        try {
                            i(c.next(e))
                        } catch (e) {
                            t(e)
                        }
                    }
                    function r(e) {
                        try {
                            i(c.throw(e))
                        } catch (e) {
                            t(e)
                        }
                    }
                    function i(t) {
                        t.done ? e(t.value) : new a(function(e) {
                            e(t.value)
                        }
                        ).then(n, r)
                    }
                    i((c = c.apply(o, s || [])).next())
                }
                )
            }
            function b(n, r) {
                var i, o, s, e, a = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0])
                            throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                };
                return e = {
                    next: t(0),
                    throw: t(1),
                    return: t(2)
                },
                "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                    return this
                }
                ),
                e;
                function t(t) {
                    return function(e) {
                        return function(t) {
                            if (i)
                                throw new TypeError("Generator is already executing.");
                            for (; a; )
                                try {
                                    if (i = 1,
                                    o && (s = o[2 & t[0] ? "return" : t[0] ? "throw" : "next"]) && !(s = s.call(o, t[1])).done)
                                        return s;
                                    switch (o = 0,
                                    s && (t = [0, s.value]),
                                    t[0]) {
                                    case 0:
                                    case 1:
                                        s = t;
                                        break;
                                    case 4:
                                        return a.label++,
                                        {
                                            value: t[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++,
                                        o = t[1],
                                        t = [0];
                                        continue;
                                    case 7:
                                        t = a.ops.pop(),
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(s = 0 < (s = a.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) {
                                            a.label = t[1];
                                            break
                                        }
                                        if (6 === t[0] && a.label < s[1]) {
                                            a.label = s[1],
                                            s = t;
                                            break
                                        }
                                        if (s && a.label < s[2]) {
                                            a.label = s[2],
                                            a.ops.push(t);
                                            break
                                        }
                                        s[2] && a.ops.pop(),
                                        a.trys.pop();
                                        continue
                                    }
                                    t = r.call(n, a)
                                } catch (e) {
                                    t = [6, e],
                                    o = 0
                                } finally {
                                    i = s = 0
                                }
                            if (5 & t[0])
                                throw t[1];
                            return {
                                value: t[0] ? t[1] : void 0,
                                done: !0
                            }
                        }([t, e])
                    }
                }
            }
            function n(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n)
                    return e;
                var r, i, o = n.call(e), s = [];
                try {
                    for (; (void 0 === t || 0 < t--) && !(r = o.next()).done; )
                        s.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = o.return) && n.call(o)
                    } finally {
                        if (i)
                            throw i.error
                    }
                }
                return s
            }
            var s = "FirebaseError"
              , a = Error.captureStackTrace
              , c = function(e, t) {
                if (this.code = e,
                this.message = t,
                a)
                    a(this, u.prototype.create);
                else
                    try {
                        throw Error.apply(this, arguments)
                    } catch (e) {
                        this.name = s,
                        Object.defineProperty(this, "stack", {
                            get: function() {
                                return e.stack
                            }
                        })
                    }
            };
            c.prototype = Object.create(Error.prototype),
            (c.prototype.constructor = c).prototype.name = s;
            var u = function() {
                function e(e, t, n) {
                    this.service = e,
                    this.serviceName = t,
                    this.errors = n,
                    this.pattern = /\{\$([^}]+)}/g
                }
                return e.prototype.create = function(e, r) {
                    void 0 === r && (r = {});
                    var t, n = this.errors[e], i = this.service + "/" + e;
                    t = void 0 === n ? "Error" : n.replace(this.pattern, function(e, t) {
                        var n = r[t];
                        return void 0 !== n ? n.toString() : "<" + t + "?>"
                    }),
                    t = this.serviceName + ": " + t + " (" + i + ").";
                    var o = new c(i,t);
                    for (var s in r)
                        r.hasOwnProperty(s) && "_" !== s.slice(-1) && (o[s] = r[s]);
                    return o
                }
                ,
                e
            }();
            !function(n) {
                function e() {
                    var e = n.call(this) || this;
                    e.chain_ = [],
                    e.buf_ = [],
                    e.W_ = [],
                    e.pad_ = [],
                    e.inbuf_ = 0,
                    e.total_ = 0,
                    e.blockSize = 64,
                    e.pad_[0] = 128;
                    for (var t = 1; t < e.blockSize; ++t)
                        e.pad_[t] = 0;
                    return e.reset(),
                    e
                }
                i(e, n),
                e.prototype.reset = function() {
                    this.chain_[0] = 1732584193,
                    this.chain_[1] = 4023233417,
                    this.chain_[2] = 2562383102,
                    this.chain_[3] = 271733878,
                    this.chain_[4] = 3285377520,
                    this.inbuf_ = 0,
                    this.total_ = 0
                }
                ,
                e.prototype.compress_ = function(e, t) {
                    t || (t = 0);
                    var n = this.W_;
                    if ("string" == typeof e)
                        for (var r = 0; r < 16; r++)
                            n[r] = e.charCodeAt(t) << 24 | e.charCodeAt(t + 1) << 16 | e.charCodeAt(t + 2) << 8 | e.charCodeAt(t + 3),
                            t += 4;
                    else
                        for (r = 0; r < 16; r++)
                            n[r] = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3],
                            t += 4;
                    for (r = 16; r < 80; r++) {
                        var i = n[r - 3] ^ n[r - 8] ^ n[r - 14] ^ n[r - 16];
                        n[r] = 4294967295 & (i << 1 | i >>> 31)
                    }
                    var o, s, a = this.chain_[0], c = this.chain_[1], u = this.chain_[2], h = this.chain_[3], f = this.chain_[4];
                    for (r = 0; r < 80; r++) {
                        s = r < 40 ? r < 20 ? (o = h ^ c & (u ^ h),
                        1518500249) : (o = c ^ u ^ h,
                        1859775393) : r < 60 ? (o = c & u | h & (c | u),
                        2400959708) : (o = c ^ u ^ h,
                        3395469782);
                        i = (a << 5 | a >>> 27) + o + f + s + n[r] & 4294967295;
                        f = h,
                        h = u,
                        u = 4294967295 & (c << 30 | c >>> 2),
                        c = a,
                        a = i
                    }
                    this.chain_[0] = this.chain_[0] + a & 4294967295,
                    this.chain_[1] = this.chain_[1] + c & 4294967295,
                    this.chain_[2] = this.chain_[2] + u & 4294967295,
                    this.chain_[3] = this.chain_[3] + h & 4294967295,
                    this.chain_[4] = this.chain_[4] + f & 4294967295
                }
                ,
                e.prototype.update = function(e, t) {
                    if (null != e) {
                        void 0 === t && (t = e.length);
                        for (var n = t - this.blockSize, r = 0, i = this.buf_, o = this.inbuf_; r < t; ) {
                            if (0 == o)
                                for (; r <= n; )
                                    this.compress_(e, r),
                                    r += this.blockSize;
                            if ("string" == typeof e) {
                                for (; r < t; )
                                    if (i[o] = e.charCodeAt(r),
                                    ++r,
                                    ++o == this.blockSize) {
                                        this.compress_(i),
                                        o = 0;
                                        break
                                    }
                            } else
                                for (; r < t; )
                                    if (i[o] = e[r],
                                    ++r,
                                    ++o == this.blockSize) {
                                        this.compress_(i),
                                        o = 0;
                                        break
                                    }
                        }
                        this.inbuf_ = o,
                        this.total_ += t
                    }
                }
                ,
                e.prototype.digest = function() {
                    var e = []
                      , t = 8 * this.total_;
                    this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
                    for (var n = this.blockSize - 1; 56 <= n; n--)
                        this.buf_[n] = 255 & t,
                        t /= 256;
                    this.compress_(this.buf_);
                    var r = 0;
                    for (n = 0; n < 5; n++)
                        for (var i = 24; 0 <= i; i -= 8)
                            e[r] = this.chain_[n] >> i & 255,
                            ++r;
                    return e
                }
            }(function() {
                this.blockSize = -1
            });
            function h(e, t) {
                var n = new f(e,t);
                return n.subscribe.bind(n)
            }
            var e, f = function() {
                function e(e, t) {
                    var n = this;
                    this.observers = [],
                    this.unsubscribes = [],
                    this.observerCount = 0,
                    this.task = Promise.resolve(),
                    this.finalized = !1,
                    this.onNoObservers = t,
                    this.task.then(function() {
                        e(n)
                    }).catch(function(e) {
                        n.error(e)
                    })
                }
                return e.prototype.next = function(t) {
                    this.forEachObserver(function(e) {
                        e.next(t)
                    })
                }
                ,
                e.prototype.error = function(t) {
                    this.forEachObserver(function(e) {
                        e.error(t)
                    }),
                    this.close(t)
                }
                ,
                e.prototype.complete = function() {
                    this.forEachObserver(function(e) {
                        e.complete()
                    }),
                    this.close()
                }
                ,
                e.prototype.subscribe = function(e, t, n) {
                    var r, i = this;
                    if (void 0 === e && void 0 === t && void 0 === n)
                        throw new Error("Missing Observer.");
                    void 0 === (r = function(e, t) {
                        if ("object" != typeof e || null === e)
                            return !1;
                        for (var n = 0, r = t; n < r.length; n++) {
                            var i = r[n];
                            if (i in e && "function" == typeof e[i])
                                return !0
                        }
                        return !1
                    }(e, ["next", "error", "complete"]) ? e : {
                        next: e,
                        error: t,
                        complete: n
                    }).next && (r.next = d),
                    void 0 === r.error && (r.error = d),
                    void 0 === r.complete && (r.complete = d);
                    var o = this.unsubscribeOne.bind(this, this.observers.length);
                    return this.finalized && this.task.then(function() {
                        try {
                            i.finalError ? r.error(i.finalError) : r.complete()
                        } catch (e) {}
                    }),
                    this.observers.push(r),
                    o
                }
                ,
                e.prototype.unsubscribeOne = function(e) {
                    void 0 !== this.observers && void 0 !== this.observers[e] && (delete this.observers[e],
                    this.observerCount -= 1,
                    0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
                }
                ,
                e.prototype.forEachObserver = function(e) {
                    if (!this.finalized)
                        for (var t = 0; t < this.observers.length; t++)
                            this.sendOne(t, e)
                }
                ,
                e.prototype.sendOne = function(e, t) {
                    var n = this;
                    this.task.then(function() {
                        if (void 0 !== n.observers && void 0 !== n.observers[e])
                            try {
                                t(n.observers[e])
                            } catch (e) {
                                "undefined" != typeof console && console.error && console.error(e)
                            }
                    })
                }
                ,
                e.prototype.close = function(e) {
                    var t = this;
                    this.finalized || (this.finalized = !0,
                    void 0 !== e && (this.finalError = e),
                    this.task.then(function() {
                        t.observers = void 0,
                        t.onNoObservers = void 0
                    }))
                }
                ,
                e
            }();
            function d() {}
            var p, t, v, g, y = "only-available-in-window", w = "only-available-in-sw", m = "should-be-overriden", k = "bad-sender-id", _ = "incorrect-gcm-sender-id", S = "permission-default", T = "permission-blocked", P = "unsupported-browser", M = "notifications-blocked", D = "failed-serviceworker-registration", C = "sw-registration-expected", O = "get-subscription-failed", I = "invalid-saved-token", N = "sw-reg-redundant", E = "token-subscribe-failed", A = "token-subscribe-no-token", K = "token-subscribe-no-push-set", x = "token-unsubscribe-failed", W = "token-update-failed", F = "token-update-no-token", V = "use-sw-before-get-token", U = "invalid-delete-token", j = "delete-token-not-found", R = "delete-scope-not-found", z = "bg-handler-function-expected", L = "no-window-client-to-msg", H = "unable-to-resubscribe", B = "no-fcm-token-for-resubscribe", q = "failed-to-delete-token", G = "no-sw-in-reg", $ = "bad-scope", Y = "bad-vapid-key", J = "bad-subscription", Q = "bad-token", X = "bad-push-set", Z = "failed-delete-vapid-key", ee = "invalid-public-vapid-key", te = "use-public-key-before-get-token", ne = "public-vapid-key-decryption-failed", re = ((e = {})[y] = "This method is available in a Window context.",
            e[w] = "This method is available in a service worker context.",
            e[m] = "This method should be overriden by extended classes.",
            e[k] = "Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().",
            e[S] = "The required permissions were not granted and dismissed instead.",
            e[T] = "The required permissions were not granted and blocked instead.",
            e[P] = "This browser doesn't support the API's required to use the firebase SDK.",
            e[M] = "Notifications have been blocked.",
            e[D] = "We are unable to register the default service worker. {$browserErrorMessage}",
            e[C] = "A service worker registration was the expected input.",
            e[O] = "There was an error when trying to get any existing Push Subscriptions.",
            e[I] = "Unable to access details of the saved token.",
            e[N] = "The service worker being used for push was made redundant.",
            e[E] = "A problem occured while subscribing the user to FCM: {$message}",
            e[A] = "FCM returned no token when subscribing the user to push.",
            e[K] = "FCM returned an invalid response when getting an FCM token.",
            e[x] = "A problem occured while unsubscribing the user from FCM: {$message}",
            e[W] = "A problem occured while updating the user from FCM: {$message}",
            e[F] = "FCM returned no token when updating the user to push.",
            e[V] = "The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",
            e[U] = "You must pass a valid token into deleteToken(), i.e. the token from getToken().",
            e[j] = "The deletion attempt for token could not be performed as the token was not found.",
            e[R] = "The deletion attempt for service worker scope could not be performed as the scope was not found.",
            e[z] = "The input to setBackgroundMessageHandler() must be a function.",
            e[L] = "An attempt was made to message a non-existant window client.",
            e[H] = "There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$message}",
            e[B] = "Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.",
            e[q] = "Unable to delete the currently saved token.",
            e[G] = "Even though the service worker registration was successful, there was a problem accessing the service worker itself.",
            e[_] = "Please change your web app manifest's 'gcm_sender_id' value to '103953800507' to use Firebase messaging.",
            e[$] = "The service worker scope must be a string with at least one character.",
            e[Y] = "The public VAPID key is not a Uint8Array with 65 bytes.",
            e[J] = "The subscription must be a valid PushSubscription.",
            e[Q] = "The FCM Token used for storage / lookup was not a valid token string.",
            e[X] = "The FCM push set used for storage / lookup was not not a valid push set string.",
            e[Z] = "The VAPID key could not be deleted.",
            e[ee] = "The public VAPID key must be a string.",
            e[ne] = "The public VAPID key did not equal 65 bytes when decrypted.",
            e), ie = new u("messaging","Messaging",re), oe = new Uint8Array([4, 51, 148, 247, 223, 161, 235, 177, 220, 3, 162, 94, 21, 113, 219, 72, 211, 46, 237, 237, 178, 52, 219, 183, 71, 58, 12, 143, 196, 204, 225, 111, 60, 140, 132, 223, 171, 182, 102, 62, 242, 12, 212, 139, 254, 227, 249, 118, 47, 20, 28, 99, 8, 106, 111, 45, 177, 26, 149, 176, 206, 55, 192, 156, 110]), se = "https://fcm.googleapis.com";
            function ae(e, t) {
                if (null == e || null == t)
                    return !1;
                if (e === t)
                    return !0;
                if (e.byteLength !== t.byteLength)
                    return !1;
                for (var n = new DataView(e), r = new DataView(t), i = 0; i < e.byteLength; i++)
                    if (n.getUint8(i) !== r.getUint8(i))
                        return !1;
                return !0
            }
            function ce(e) {
                var t = new Uint8Array(e);
                return btoa(String.fromCharCode.apply(String, function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e = e.concat(n(arguments[t]));
                    return e
                }(t)))
            }
            function ue(e) {
                return ce(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
            }
            (t = p || (p = {})).TYPE_OF_MSG = "firebase-messaging-msg-type",
            t.DATA = "firebase-messaging-msg-data",
            (g = v || (v = {})).PUSH_MSG_RECEIVED = "push-msg-received",
            g.NOTIFICATION_CLICKED = "notification-clicked";
            var he = function() {
                function e() {}
                return e.prototype.getToken = function(u, h, f) {
                    return l(this, void 0, void 0, function() {
                        var t, n, r, i, o, s, a, c;
                        return b(this, function(e) {
                            switch (e.label) {
                            case 0:
                                t = ue(h.getKey("p256dh")),
                                n = ue(h.getKey("auth")),
                                r = "authorized_entity=" + u + "&endpoint=" + h.endpoint + "&encryption_key=" + t + "&encryption_auth=" + n,
                                ae(f.buffer, oe.buffer) || (i = ue(f),
                                r += "&application_pub_key=" + i),
                                (o = new Headers).append("Content-Type", "application/x-www-form-urlencoded"),
                                s = {
                                    method: "POST",
                                    headers: o,
                                    body: r
                                },
                                e.label = 1;
                            case 1:
                                return e.trys.push([1, 4, , 5]),
                                [4, fetch(se + "/fcm/connect/subscribe", s)];
                            case 2:
                                return [4, e.sent().json()];
                            case 3:
                                return a = e.sent(),
                                [3, 5];
                            case 4:
                                throw e.sent(),
                                ie.create(E);
                            case 5:
                                if (a.error)
                                    throw c = a.error.message,
                                    ie.create(E, {
                                        message: c
                                    });
                                if (!a.token)
                                    throw ie.create(A);
                                if (!a.pushSet)
                                    throw ie.create(K);
                                return [2, {
                                    token: a.token,
                                    pushSet: a.pushSet
                                }]
                            }
                        })
                    })
                }
                ,
                e.prototype.updateToken = function(u, h, f, d, p) {
                    return l(this, void 0, void 0, function() {
                        var t, n, r, i, o, s, a, c;
                        return b(this, function(e) {
                            switch (e.label) {
                            case 0:
                                t = ue(d.getKey("p256dh")),
                                n = ue(d.getKey("auth")),
                                r = "push_set=" + f + "&token=" + h + "&authorized_entity=" + u + "&endpoint=" + d.endpoint + "&encryption_key=" + t + "&encryption_auth=" + n,
                                ae(p.buffer, oe.buffer) || (i = ue(p),
                                r += "&application_pub_key=" + i),
                                (o = new Headers).append("Content-Type", "application/x-www-form-urlencoded"),
                                s = {
                                    method: "POST",
                                    headers: o,
                                    body: r
                                },
                                e.label = 1;
                            case 1:
                                return e.trys.push([1, 4, , 5]),
                                [4, fetch(se + "/fcm/connect/subscribe", s)];
                            case 2:
                                return [4, e.sent().json()];
                            case 3:
                                return a = e.sent(),
                                [3, 5];
                            case 4:
                                throw e.sent(),
                                ie.create(W);
                            case 5:
                                if (a.error)
                                    throw c = a.error.message,
                                    ie.create(W, {
                                        message: c
                                    });
                                if (!a.token)
                                    throw ie.create(F);
                                return [2, a.token]
                            }
                        })
                    })
                }
                ,
                e.prototype.deleteToken = function(s, a, c) {
                    return l(this, void 0, void 0, function() {
                        var t, n, r, i, o;
                        return b(this, function(e) {
                            switch (e.label) {
                            case 0:
                                t = "authorized_entity=" + s + "&token=" + a + "&pushSet=" + c,
                                (n = new Headers).append("Content-Type", "application/x-www-form-urlencoded"),
                                r = {
                                    method: "POST",
                                    headers: n,
                                    body: t
                                },
                                e.label = 1;
                            case 1:
                                return e.trys.push([1, 4, , 5]),
                                [4, fetch(se + "/fcm/connect/unsubscribe", r)];
                            case 2:
                                return [4, e.sent().json()];
                            case 3:
                                if ((i = e.sent()).error)
                                    throw o = i.error.message,
                                    ie.create(x, {
                                        message: o
                                    });
                                return [3, 5];
                            case 4:
                                throw e.sent(),
                                ie.create(x);
                            case 5:
                                return [2]
                            }
                        })
                    })
                }
                ,
                e
            }();
            function fe(e) {
                for (var t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), n = atob(t), r = new Uint8Array(n.length), i = 0; i < n.length; ++i)
                    r[i] = n.charCodeAt(i);
                return r
            }
            var de = "undefined"
              , pe = "fcm_token_object_Store";
            function le() {
                var t = indexedDB.open(de);
                t.onerror = function(e) {}
                ,
                t.onsuccess = function(e) {
                    !function(n) {
                        if (n.objectStoreNames.contains(pe)) {
                            var e = n.transaction(pe).objectStore(pe)
                              , r = new he
                              , i = e.openCursor();
                            i.onerror = function(e) {
                                console.warn("Unable to cleanup old IDB.", e)
                            }
                            ,
                            i.onsuccess = function() {
                                var e = i.result;
                                if (e) {
                                    var t = e.value;
                                    r.deleteToken(t.fcmSenderId, t.fcmToken, t.fcmPushSet),
                                    e.continue()
                                } else
                                    n.close(),
                                    indexedDB.deleteDatabase(de)
                            }
                        }
                    }(t.result)
                }
            }
            var be = function() {
                function e() {
                    this.dbPromise = null
                }
                return e.prototype.get = function(t) {
                    return this.createTransaction(function(e) {
                        return e.get(t)
                    })
                }
                ,
                e.prototype.getIndex = function(t, n) {
                    return this.createTransaction(function(e) {
                        return e.index(t).get(n)
                    })
                }
                ,
                e.prototype.put = function(t) {
                    return this.createTransaction(function(e) {
                        return e.put(t)
                    }, "readwrite")
                }
                ,
                e.prototype.delete = function(t) {
                    return this.createTransaction(function(e) {
                        return e.delete(t)
                    }, "readwrite")
                }
                ,
                e.prototype.closeDatabase = function() {
                    return l(this, void 0, void 0, function() {
                        return b(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return this.dbPromise ? [4, this.dbPromise] : [3, 2];
                            case 1:
                                e.sent().close(),
                                this.dbPromise = null,
                                e.label = 2;
                            case 2:
                                return [2]
                            }
                        })
                    })
                }
                ,
                e.prototype.createTransaction = function(s, a) {
                    return void 0 === a && (a = "readonly"),
                    l(this, void 0, void 0, function() {
                        var t, r, i, o;
                        return b(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, this.getDb()];
                            case 1:
                                return t = e.sent(),
                                r = t.transaction(this.objectStoreName, a),
                                i = r.objectStore(this.objectStoreName),
                                [4, (n = s(i),
                                new Promise(function(e, t) {
                                    n.onsuccess = function() {
                                        e(n.result)
                                    }
                                    ,
                                    n.onerror = function() {
                                        t(n.error)
                                    }
                                }
                                ))];
                            case 2:
                                return o = e.sent(),
                                [2, new Promise(function(e, t) {
                                    r.oncomplete = function() {
                                        e(o)
                                    }
                                    ,
                                    r.onerror = function() {
                                        t(r.error)
                                    }
                                }
                                )]
                            }
                            var n
                        })
                    })
                }
                ,
                e.prototype.getDb = function() {
                    var r = this;
                    return this.dbPromise || (this.dbPromise = new Promise(function(e, t) {
                        var n = indexedDB.open(r.dbName, r.dbVersion);
                        n.onsuccess = function() {
                            e(n.result)
                        }
                        ,
                        n.onerror = function() {
                            r.dbPromise = null,
                            t(n.error)
                        }
                        ,
                        n.onupgradeneeded = function(e) {
                            return r.onDbUpgrade(n, e)
                        }
                    }
                    )),
                    this.dbPromise
                }
                ,
                e
            }();
            var ve = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.dbName = "fcm_token_details_db",
                    e.dbVersion = 3,
                    e.objectStoreName = "fcm_token_object_Store",
                    e
                }
                return i(e, t),
                e.prototype.onDbUpgrade = function(e, t) {
                    var n = e.result;
                    switch (t.oldVersion) {
                    case 0:
                        (r = n.createObjectStore(this.objectStoreName, {
                            keyPath: "swScope"
                        })).createIndex("fcmSenderId", "fcmSenderId", {
                            unique: !1
                        }),
                        r.createIndex("fcmToken", "fcmToken", {
                            unique: !0
                        });
                    case 1:
                        le();
                    case 2:
                        var r, i = (r = e.transaction.objectStore(this.objectStoreName)).openCursor();
                        i.onsuccess = function() {
                            var e = i.result;
                            if (e) {
                                var t = e.value
                                  , n = o({}, t);
                                t.createTime || (n.createTime = Date.now()),
                                "string" == typeof t.vapidKey && (n.vapidKey = fe(t.vapidKey)),
                                "string" == typeof t.auth && (n.auth = fe(t.auth).buffer),
                                "string" == typeof t.auth && (n.p256dh = fe(t.p256dh).buffer),
                                e.update(n),
                                e.continue()
                            }
                        }
                    }
                }
                ,
                e.prototype.getTokenDetailsFromToken = function(t) {
                    return l(this, void 0, void 0, function() {
                        return b(this, function(e) {
                            if (!t)
                                throw ie.create(Q);
                            return ge({
                                fcmToken: t
                            }),
                            [2, this.getIndex("fcmToken", t)]
                        })
                    })
                }
                ,
                e.prototype.getTokenDetailsFromSWScope = function(t) {
                    return l(this, void 0, void 0, function() {
                        return b(this, function(e) {
                            if (!t)
                                throw ie.create($);
                            return ge({
                                swScope: t
                            }),
                            [2, this.get(t)]
                        })
                    })
                }
                ,
                e.prototype.saveTokenDetails = function(t) {
                    return l(this, void 0, void 0, function() {
                        return b(this, function(e) {
                            if (!t.swScope)
                                throw ie.create($);
                            if (!t.vapidKey)
                                throw ie.create(Y);
                            if (!t.endpoint || !t.auth || !t.p256dh)
                                throw ie.create(J);
                            if (!t.fcmSenderId)
                                throw ie.create(k);
                            if (!t.fcmToken)
                                throw ie.create(Q);
                            if (!t.fcmPushSet)
                                throw ie.create(X);
                            return ge(t),
                            [2, this.put(t)]
                        })
                    })
                }
                ,
                e.prototype.deleteToken = function(n) {
                    return l(this, void 0, void 0, function() {
                        var t;
                        return b(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return "string" != typeof n || 0 === n.length ? [2, Promise.reject(ie.create(U))] : [4, this.getTokenDetailsFromToken(n)];
                            case 1:
                                if (!(t = e.sent()))
                                    throw ie.create(j);
                                return [4, this.delete(t.swScope)];
                            case 2:
                                return e.sent(),
                                [2, t]
                            }
                        })
                    })
                }
                ,
                e
            }(be);
            function ge(e) {
                if (e.fcmToken && ("string" != typeof e.fcmToken || 0 === e.fcmToken.length))
                    throw ie.create(Q);
                if (e.swScope && ("string" != typeof e.swScope || 0 === e.swScope.length))
                    throw ie.create($);
                if (e.vapidKey && (!(e.vapidKey instanceof Uint8Array) || 65 !== e.vapidKey.length))
                    throw ie.create(Y);
                if (e.endpoint && ("string" != typeof e.endpoint || 0 === e.endpoint.length))
                    throw ie.create(J);
                if (e.auth && !(e.auth instanceof ArrayBuffer))
                    throw ie.create(J);
                if (e.p256dh && !(e.p256dh instanceof ArrayBuffer))
                    throw ie.create(J);
                if (e.fcmSenderId && ("string" != typeof e.fcmSenderId || 0 === e.fcmSenderId.length))
                    throw ie.create(k);
                if (e.fcmPushSet && ("string" != typeof e.fcmPushSet || 0 === e.fcmPushSet.length))
                    throw ie.create(X)
            }
            var ye = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.dbName = "fcm_vapid_details_db",
                    e.dbVersion = 1,
                    e.objectStoreName = "fcm_vapid_object_Store",
                    e
                }
                return i(e, t),
                e.prototype.onDbUpgrade = function(e) {
                    e.result.createObjectStore(this.objectStoreName, {
                        keyPath: "swScope"
                    })
                }
                ,
                e.prototype.getVapidFromSWScope = function(n) {
                    return l(this, void 0, void 0, function() {
                        var t;
                        return b(this, function(e) {
                            switch (e.label) {
                            case 0:
                                if ("string" != typeof n || 0 === n.length)
                                    throw ie.create($);
                                return [4, this.get(n)];
                            case 1:
                                return [2, (t = e.sent()) ? t.vapidKey : void 0]
                            }
                        })
                    })
                }
                ,
                e.prototype.saveVapidDetails = function(n, r) {
                    return l(this, void 0, void 0, function() {
                        var t;
                        return b(this, function(e) {
                            if ("string" != typeof n || 0 === n.length)
                                throw ie.create($);
                            if (null === r || 65 !== r.length)
                                throw ie.create(Y);
                            return t = {
                                swScope: n,
                                vapidKey: r
                            },
                            [2, this.put(t)]
                        })
                    })
                }
                ,
                e.prototype.deleteVapidDetails = function(n) {
                    return l(this, void 0, void 0, function() {
                        var t;
                        return b(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, this.getVapidFromSWScope(n)];
                            case 1:
                                if (!(t = e.sent()))
                                    throw ie.create(R);
                                return [4, this.delete(n)];
                            case 2:
                                return e.sent(),
                                [2, t]
                            }
                        })
                    })
                }
                ,
                e
            }(be)
              , we = "messagingSenderId"
              , me = function() {
                function e(e) {
                    var t = this;
                    if (!e.options[we] || "string" != typeof e.options[we])
                        throw ie.create(k);
                    this.messagingSenderId = e.options[we],
                    this.tokenDetailsModel = new ve,
                    this.vapidDetailsModel = new ye,
                    this.iidModel = new he,
                    this.app = e,
                    this.INTERNAL = {
                        delete: function() {
                            return t.delete()
                        }
                    }
                }
                return e.prototype.getToken = function() {
                    return l(this, void 0, void 0, function() {
                        var t, n, r, i, o;
                        return b(this, function(e) {
                            switch (e.label) {
                            case 0:
                                if ("denied" === (t = this.getNotificationPermission_()))
                                    throw ie.create(M);
                                return "granted" !== t ? [2, null] : [4, this.getSWRegistration_()];
                            case 1:
                                return n = e.sent(),
                                [4, this.getPublicVapidKey_()];
                            case 2:
                                return r = e.sent(),
                                [4, this.getPushSubscription(n, r)];
                            case 3:
                                return i = e.sent(),
                                [4, this.tokenDetailsModel.getTokenDetailsFromSWScope(n.scope)];
                            case 4:
                                return (o = e.sent()) ? [2, this.manageExistingToken(n, i, r, o)] : [2, this.getNewToken(n, i, r)]
                            }
                        })
                    })
                }
                ,
                e.prototype.manageExistingToken = function(t, n, r, i) {
                    return l(this, void 0, void 0, function() {
                        return b(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return function(e, t, n) {
                                    if (!n.vapidKey || !ae(t.buffer, n.vapidKey.buffer))
                                        return !1;
                                    var r = e.endpoint === n.endpoint
                                      , i = ae(e.getKey("auth"), n.auth)
                                      , o = ae(e.getKey("p256dh"), n.p256dh);
                                    return r && i && o
                                }(n, r, i) ? Date.now() < i.createTime + 6048e5 ? [2, i.fcmToken] : [2, this.updateToken(t, n, r, i)] : [4, this.deleteTokenFromDB(i.fcmToken)];
                            case 1:
                                return e.sent(),
                                [2, this.getNewToken(t, n, r)]
                            }
                        })
                    })
                }
                ,
                e.prototype.updateToken = function(i, o, s, a) {
                    return l(this, void 0, void 0, function() {
                        var t, n, r;
                        return b(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return e.trys.push([0, 4, , 6]),
                                [4, this.iidModel.updateToken(this.messagingSenderId, a.fcmToken, a.fcmPushSet, o, s)];
                            case 1:
                                return t = e.sent(),
                                n = {
                                    swScope: i.scope,
                                    vapidKey: s,
                                    fcmSenderId: this.messagingSenderId,
                                    fcmToken: t,
                                    fcmPushSet: a.fcmPushSet,
                                    createTime: Date.now(),
                                    endpoint: o.endpoint,
                                    auth: o.getKey("auth"),
                                    p256dh: o.getKey("p256dh")
                                },
                                [4, this.tokenDetailsModel.saveTokenDetails(n)];
                            case 2:
                                return e.sent(),
                                [4, this.vapidDetailsModel.saveVapidDetails(i.scope, s)];
                            case 3:
                                return e.sent(),
                                [2, t];
                            case 4:
                                return r = e.sent(),
                                [4, this.deleteToken(a.fcmToken)];
                            case 5:
                                throw e.sent(),
                                r;
                            case 6:
                                return [2]
                            }
                        })
                    })
                }
                ,
                e.prototype.getNewToken = function(r, i, o) {
                    return l(this, void 0, void 0, function() {
                        var t, n;
                        return b(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, this.iidModel.getToken(this.messagingSenderId, i, o)];
                            case 1:
                                return t = e.sent(),
                                n = {
                                    swScope: r.scope,
                                    vapidKey: o,
                                    fcmSenderId: this.messagingSenderId,
                                    fcmToken: t.token,
                                    fcmPushSet: t.pushSet,
                                    createTime: Date.now(),
                                    endpoint: i.endpoint,
                                    auth: i.getKey("auth"),
                                    p256dh: i.getKey("p256dh")
                                },
                                [4, this.tokenDetailsModel.saveTokenDetails(n)];
                            case 2:
                                return e.sent(),
                                [4, this.vapidDetailsModel.saveVapidDetails(r.scope, o)];
                            case 3:
                                return e.sent(),
                                [2, t.token]
                            }
                        })
                    })
                }
                ,
                e.prototype.deleteToken = function(r) {
                    return l(this, void 0, void 0, function() {
                        var t, n;
                        return b(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, this.deleteTokenFromDB(r)];
                            case 1:
                                return e.sent(),
                                [4, this.getSWRegistration_()];
                            case 2:
                                return (t = e.sent()) ? [4, t.pushManager.getSubscription()] : [3, 4];
                            case 3:
                                if (n = e.sent())
                                    return [2, n.unsubscribe()];
                                e.label = 4;
                            case 4:
                                return [2, !0]
                            }
                        })
                    })
                }
                ,
                e.prototype.deleteTokenFromDB = function(n) {
                    return l(this, void 0, void 0, function() {
                        var t;
                        return b(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, this.tokenDetailsModel.deleteToken(n)];
                            case 1:
                                return t = e.sent(),
                                [4, this.iidModel.deleteToken(t.fcmSenderId, t.fcmToken, t.fcmPushSet)];
                            case 2:
                                return e.sent(),
                                [2]
                            }
                        })
                    })
                }
                ,
                e.prototype.getPushSubscription = function(t, n) {
                    return t.pushManager.getSubscription().then(function(e) {
                        return e || t.pushManager.subscribe({
                            userVisibleOnly: !0,
                            applicationServerKey: n
                        })
                    })
                }
                ,
                e.prototype.requestPermission = function() {
                    throw ie.create(y)
                }
                ,
                e.prototype.useServiceWorker = function(e) {
                    throw ie.create(y)
                }
                ,
                e.prototype.usePublicVapidKey = function(e) {
                    throw ie.create(y)
                }
                ,
                e.prototype.onMessage = function(e, t, n) {
                    throw ie.create(y)
                }
                ,
                e.prototype.onTokenRefresh = function(e, t, n) {
                    throw ie.create(y)
                }
                ,
                e.prototype.setBackgroundMessageHandler = function(e) {
                    throw ie.create(w)
                }
                ,
                e.prototype.delete = function() {
                    return l(this, void 0, void 0, function() {
                        return b(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, Promise.all([this.tokenDetailsModel.closeDatabase(), this.vapidDetailsModel.closeDatabase()])];
                            case 1:
                                return e.sent(),
                                [2]
                            }
                        })
                    })
                }
                ,
                e.prototype.getNotificationPermission_ = function() {
                    return Notification.permission
                }
                ,
                e.prototype.getTokenDetailsModel = function() {
                    return this.tokenDetailsModel
                }
                ,
                e.prototype.getVapidDetailsModel = function() {
                    return this.vapidDetailsModel
                }
                ,
                e.prototype.getIidModel = function() {
                    return this.iidModel
                }
                ,
                e
            }();
            var ke = "FCM_MSG"
              , _e = function(n) {
                function e(e) {
                    var t = n.call(this, e) || this;
                    return t.bgMessageHandler = null,
                    self.addEventListener("push", function(e) {
                        t.onPush(e)
                    }),
                    self.addEventListener("pushsubscriptionchange", function(e) {
                        t.onSubChange(e)
                    }),
                    self.addEventListener("notificationclick", function(e) {
                        t.onNotificationClick(e)
                    }),
                    t
                }
                return i(e, n),
                e.prototype.onPush = function(e) {
                    e.waitUntil(this.onPush_(e))
                }
                ,
                e.prototype.onSubChange = function(e) {
                    e.waitUntil(this.onSubChange_(e))
                }
                ,
                e.prototype.onNotificationClick = function(e) {
                    e.waitUntil(this.onNotificationClick_(e))
                }
                ,
                e.prototype.onPush_ = function(a) {
                    return l(this, void 0, void 0, function() {
                        var t, n, r, i, o, s;
                        return b(this, function(e) {
                            switch (e.label) {
                            case 0:
                                if (!a.data)
                                    return [2];
                                try {
                                    t = a.data.json()
                                } catch (e) {
                                    return [2]
                                }
                                return [4, this.hasVisibleClients_()];
                            case 1:
                                return e.sent() ? [2, this.sendMessageToWindowClients_(t)] : (n = this.getNotificationData_(t)) ? (r = n.title || "",
                                [4, this.getSWRegistration_()]) : [3, 3];
                            case 2:
                                return i = e.sent(),
                                o = n.actions,
                                s = Notification.maxActions,
                                o && s && o.length > s && console.warn("This browser only supports " + s + " actions.The remaining actions will not be displayed."),
                                [2, i.showNotification(r, n)];
                            case 3:
                                return this.bgMessageHandler ? [4, this.bgMessageHandler(t)] : [3, 5];
                            case 4:
                                return e.sent(),
                                [2];
                            case 5:
                                return [2]
                            }
                        })
                    })
                }
                ,
                e.prototype.onSubChange_ = function(e) {
                    return l(this, void 0, void 0, function() {
                        var t, n, r, i;
                        return b(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return e.trys.push([0, 2, , 3]),
                                [4, this.getSWRegistration_()];
                            case 1:
                                return t = e.sent(),
                                [3, 3];
                            case 2:
                                throw n = e.sent(),
                                ie.create(H, {
                                    message: n
                                });
                            case 3:
                                return e.trys.push([3, 5, , 8]),
                                [4, t.pushManager.getSubscription()];
                            case 4:
                                return e.sent(),
                                [3, 8];
                            case 5:
                                return r = e.sent(),
                                [4, this.getTokenDetailsModel().getTokenDetailsFromSWScope(t.scope)];
                            case 6:
                                if (!(i = e.sent()))
                                    throw r;
                                return [4, this.deleteToken(i.fcmToken)];
                            case 7:
                                throw e.sent(),
                                r;
                            case 8:
                                return [2]
                            }
                        })
                    })
                }
                ,
                e.prototype.onNotificationClick_ = function(o) {
                    return l(this, void 0, void 0, function() {
                        var t, n, r, i;
                        return b(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return o.notification && o.notification.data && o.notification.data[ke] ? o.action ? [2] : (o.stopImmediatePropagation(),
                                o.notification.close(),
                                (t = o.notification.data[ke]).notification && (n = t.fcmOptions && t.fcmOptions.link || t.notification.click_action) ? [4, this.getWindowClient_(n)] : [2]) : [2];
                            case 1:
                                return (r = e.sent()) ? [3, 3] : [4, self.clients.openWindow(n)];
                            case 2:
                                return r = e.sent(),
                                [3, 5];
                            case 3:
                                return [4, r.focus()];
                            case 4:
                                r = e.sent(),
                                e.label = 5;
                            case 5:
                                return r ? (delete t.notification,
                                delete t.fcmOptions,
                                i = Te(v.NOTIFICATION_CLICKED, t),
                                [2, this.attemptToMessageClient_(r, i)]) : [2]
                            }
                        })
                    })
                }
                ,
                e.prototype.getNotificationData_ = function(e) {
                    var t;
                    if (e && "object" == typeof e.notification) {
                        var n = o({}, e.notification);
                        return n.data = o({}, e.notification.data, ((t = {})[ke] = e,
                        t)),
                        n
                    }
                }
                ,
                e.prototype.setBackgroundMessageHandler = function(e) {
                    if (!e || "function" != typeof e)
                        throw ie.create(z);
                    this.bgMessageHandler = e
                }
                ,
                e.prototype.getWindowClient_ = function(o) {
                    return l(this, void 0, void 0, function() {
                        var t, n, r, i;
                        return b(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return t = new URL(o,self.location.href).href,
                                [4, Se()];
                            case 1:
                                for (n = e.sent(),
                                r = null,
                                i = 0; i < n.length; i++)
                                    if (new URL(n[i].url,self.location.href).href === t) {
                                        r = n[i];
                                        break
                                    }
                                return [2, r]
                            }
                        })
                    })
                }
                ,
                e.prototype.attemptToMessageClient_ = function(t, n) {
                    return l(this, void 0, void 0, function() {
                        return b(this, function(e) {
                            if (!t)
                                throw ie.create(L);
                            return t.postMessage(n),
                            [2]
                        })
                    })
                }
                ,
                e.prototype.hasVisibleClients_ = function() {
                    return l(this, void 0, void 0, function() {
                        return b(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, Se()];
                            case 1:
                                return [2, e.sent().some(function(e) {
                                    return "visible" === e.visibilityState
                                })]
                            }
                        })
                    })
                }
                ,
                e.prototype.sendMessageToWindowClients_ = function(i) {
                    return l(this, void 0, void 0, function() {
                        var t, n, r = this;
                        return b(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, Se()];
                            case 1:
                                return t = e.sent(),
                                n = Te(v.PUSH_MSG_RECEIVED, i),
                                [4, Promise.all(t.map(function(e) {
                                    return r.attemptToMessageClient_(e, n)
                                }))];
                            case 2:
                                return e.sent(),
                                [2]
                            }
                        })
                    })
                }
                ,
                e.prototype.getSWRegistration_ = function() {
                    return l(this, void 0, void 0, function() {
                        return b(this, function(e) {
                            return [2, self.registration]
                        })
                    })
                }
                ,
                e.prototype.getPublicVapidKey_ = function() {
                    return l(this, void 0, void 0, function() {
                        var t, n;
                        return b(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return [4, this.getSWRegistration_()];
                            case 1:
                                if (!(t = e.sent()))
                                    throw ie.create(C);
                                return [4, this.getVapidDetailsModel().getVapidFromSWScope(t.scope)];
                            case 2:
                                return null == (n = e.sent()) ? [2, oe] : [2, n]
                            }
                        })
                    })
                }
                ,
                e
            }(me);
            function Se() {
                return self.clients.matchAll({
                    type: "window",
                    includeUncontrolled: !0
                })
            }
            function Te(e, t) {
                var n;
                return (n = {})[p.TYPE_OF_MSG] = e,
                n[p.DATA] = t,
                n
            }
            var Pe, Me = function(n) {
                function e(e) {
                    var t = n.call(this, e) || this;
                    return t.registrationToUse = null,
                    t.publicVapidKeyToUse = null,
                    t.manifestCheckPromise = null,
                    t.messageObserver = null,
                    t.tokenRefreshObserver = null,
                    t.onMessageInternal = h(function(e) {
                        t.messageObserver = e
                    }),
                    t.onTokenRefreshInternal = h(function(e) {
                        t.tokenRefreshObserver = e
                    }),
                    t.setupSWMessageListener_(),
                    t
                }
                return i(e, n),
                e.prototype.getToken = function() {
                    return l(this, void 0, void 0, function() {
                        return b(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return this.manifestCheckPromise || (this.manifestCheckPromise = function() {
                                    return l(this, void 0, void 0, function() {
                                        var t, n;
                                        return b(this, function(e) {
                                            switch (e.label) {
                                            case 0:
                                                if (!(t = document.querySelector('link[rel="manifest"]')))
                                                    return [2];
                                                e.label = 1;
                                            case 1:
                                                return e.trys.push([1, 4, , 5]),
                                                [4, fetch(t.href)];
                                            case 2:
                                                return [4, e.sent().json()];
                                            case 3:
                                                return n = e.sent(),
                                                [3, 5];
                                            case 4:
                                                return e.sent(),
                                                [2];
                                            case 5:
                                                if (!n || !n.gcm_sender_id)
                                                    return [2];
                                                if ("103953800507" !== n.gcm_sender_id)
                                                    throw ie.create(_);
                                                return [2]
                                            }
                                        })
                                    })
                                }()),
                                [4, this.manifestCheckPromise];
                            case 1:
                                return e.sent(),
                                [2, n.prototype.getToken.call(this)]
                            }
                        })
                    })
                }
                ,
                e.prototype.requestPermission = function() {
                    return l(this, void 0, void 0, function() {
                        var t;
                        return b(this, function(e) {
                            switch (e.label) {
                            case 0:
                                return "granted" === this.getNotificationPermission_() ? [2] : [4, Notification.requestPermission()];
                            case 1:
                                if ("granted" === (t = e.sent()))
                                    return [2];
                                throw "denied" === t ? ie.create(T) : ie.create(S)
                            }
                        })
                    })
                }
                ,
                e.prototype.useServiceWorker = function(e) {
                    if (!(e instanceof ServiceWorkerRegistration))
                        throw ie.create(C);
                    if (null != this.registrationToUse)
                        throw ie.create(V);
                    this.registrationToUse = e
                }
                ,
                e.prototype.usePublicVapidKey = function(e) {
                    if ("string" != typeof e)
                        throw ie.create(ee);
                    if (null != this.publicVapidKeyToUse)
                        throw ie.create(te);
                    var t = fe(e);
                    if (65 !== t.length)
                        throw ie.create(ne);
                    this.publicVapidKeyToUse = t
                }
                ,
                e.prototype.onMessage = function(e, t, n) {
                    return "function" == typeof e ? this.onMessageInternal(e, t, n) : this.onMessageInternal(e)
                }
                ,
                e.prototype.onTokenRefresh = function(e, t, n) {
                    return "function" == typeof e ? this.onTokenRefreshInternal(e, t, n) : this.onTokenRefreshInternal(e)
                }
                ,
                e.prototype.waitForRegistrationToActivate_ = function(r) {
                    var i = r.installing || r.waiting || r.active;
                    return new Promise(function(e, t) {
                        if (i)
                            if ("activated" !== i.state)
                                if ("redundant" !== i.state) {
                                    var n = function() {
                                        if ("activated" === i.state)
                                            e(r);
                                        else {
                                            if ("redundant" !== i.state)
                                                return;
                                            t(ie.create(N))
                                        }
                                        i.removeEventListener("statechange", n)
                                    };
                                    i.addEventListener("statechange", n)
                                } else
                                    t(ie.create(N));
                            else
                                e(r);
                        else
                            t(ie.create(G))
                    }
                    )
                }
                ,
                e.prototype.getSWRegistration_ = function() {
                    var t = this;
                    return this.registrationToUse ? this.waitForRegistrationToActivate_(this.registrationToUse) : (this.registrationToUse = null,
                    navigator.serviceWorker.register("/firebase-messaging-sw.js", {
                        scope: "/firebase-cloud-messaging-push-scope"
                    }).catch(function(e) {
                        throw ie.create(D, {
                            browserErrorMessage: e.message
                        })
                    }).then(function(e) {
                        return t.waitForRegistrationToActivate_(e).then(function() {
                            return (t.registrationToUse = e).update(),
                            e
                        })
                    }))
                }
                ,
                e.prototype.getPublicVapidKey_ = function() {
                    return l(this, void 0, void 0, function() {
                        return b(this, function(e) {
                            return this.publicVapidKeyToUse ? [2, this.publicVapidKeyToUse] : [2, oe]
                        })
                    })
                }
                ,
                e.prototype.setupSWMessageListener_ = function() {
                    var r = this;
                    navigator.serviceWorker.addEventListener("message", function(e) {
                        if (e.data && e.data[p.TYPE_OF_MSG]) {
                            var t = e.data;
                            switch (t[p.TYPE_OF_MSG]) {
                            case v.PUSH_MSG_RECEIVED:
                            case v.NOTIFICATION_CLICKED:
                                var n = t[p.DATA];
                                r.messageObserver && r.messageObserver.next(n)
                            }
                        }
                    }, !1)
                }
                ,
                e
            }(me);
            function De() {
                return self && "ServiceWorkerGlobalScope"in self ? "PushManager"in self && "Notification"in self && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey") : navigator.cookieEnabled && "serviceWorker"in navigator && "PushManager"in window && "Notification"in window && "fetch"in window && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey")
            }
            Pe = {
                isSupported: De
            },
            Ce.INTERNAL.registerService("messaging", function(e) {
                if (!De())
                    throw ie.create(P);
                return self && "ServiceWorkerGlobalScope"in self ? new _e(e) : new Me(e)
            }, Pe)
        }
        ).apply(this, arguments)
    } catch (e) {
        throw console.error(e),
        new Error("Cannot instantiate firebase-messaging - be sure to load firebase-app.js first.")
    }
});
//# sourceMappingURL=firebase-messaging.js.map
