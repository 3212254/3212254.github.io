! function (e) {
    var t = {};

    function o(n) {
        if (t[n]) return t[n].exports;
        var s = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(s.exports, s, s.exports, o), s.l = !0, s.exports
    }
    o.m = e, o.c = t, o.d = function (e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, o.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "", o(o.s = 44)
}({
    0: function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.querySelector = function (e, t) {
            if ((0, n.isString)(e)) {
                var o = [e, document];
                t = o[0], e = o[1]
            }
            return e.querySelector(t)
        }, t.querySelectorAll = function (e, t) {
            if ((0, n.isString)(e)) {
                var o = [e, document];
                t = o[0], e = o[1]
            }
            return e.querySelectorAll(t)
        };
        var n = o(1)
    },
    1: function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isFunction = function (e) {
            return "function" == typeof e
        }, t.isString = function (e) {
            return "string" == typeof e
        }, t.isArray = function (e) {
            return Array.isArray(e)
        }, t.isTouchDevice = function () {
            return "ontouchstart" in window || "DocumentTouch" in window && document instanceof DocumentTouch
        }, t.isDesktop = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 768;
            return window.matchMedia("(min-width: " + e + "px )").matches
        }
    },
    10: function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(2),
            s = o(4),
            i = o(0),
            r = o(3),
            l = o(5),
            u = o(1);
        var c = function () {
            function e(t, o) {
                var s = this;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.slider = t, this.slides = (0, i.querySelectorAll)(t, ".slider__item"), this.offset = 0, this.togglePrev = (0, i.querySelector)(t, ".slider__toggler--prev"), this.toggleNext = (0, i.querySelector)(t, ".slider__toggler--next"), this.contentLinks = (0, i.querySelectorAll)(t, ".slider-contents__switch"), this.controls = (0, i.querySelectorAll)(t, ".slider__control"), this.toggleBox = (0, i.querySelector)(t, ".slider__inner"), this.hasToggles = this.togglePrev && this.toggleNext, (0, n.hasClass)(t, "slider--with-contents") ? this.hasContents = (0, i.querySelector)(t, ".slider-contents") : this.hasContents = !1, this.isSplitted = (0, n.hasClass)(t, "slider--splitted"), this.hasToggles && ((0, r.addEventListener)(this.togglePrev, "click", function () {
                    return s._toggle(!1)
                }), (0, r.addEventListener)(this.toggleNext, "click", function () {
                    return s._toggle(!0)
                })), this.hasContents && this._initControls(this.contentLinks), this._initControls(this.controls), (0, u.isTouchDevice)() && (t.addEventListener("touchstart", function (e) {
                    return s._onTouchStart(e)
                }), t.addEventListener("touchend", function (e) {
                    return s._onTouchEnd(e)
                }), t.addEventListener("touchmove", function (e) {
                    return s._onTouchMove(e)
                })), this.toggleCallback = o
            }
            return e.prototype._configureTogglers = function (e) {
                var t = this.slides.length - 1,
                    o = this.isSplitted ? t - 1 : t;
                this.hasToggles && (this.togglePrev.disabled = !1, this.toggleNext.disabled = !1, 0 === e ? this.togglePrev.disabled = !0 : e === o && (this.toggleNext.disabled = !0))
            }, e.prototype._configureControls = function (e, t, o) {
                (0, s.forEach)(e, function (e) {
                    (0, n.removeClass)(e, t)
                }), (0, n.addClass)(e[o], t)
            }, e.prototype._setActiveControls = function (e) {
                this.hasContents && this._configureControls(this.contentLinks, "slider-contents__switch--active", e), this._configureControls(this.controls, "slider__control--active", e)
            }, e.prototype._controlOnClick = function (e) {
                var t = [].indexOf.call(e.parentNode.children, e);
                this.toggleTo(t)
            }, e.prototype._initControls = function (e) {
                var t = this;
                (0, l.addEventListenerAll)(e, "click", function (e, o) {
                    return t._controlOnClick(o)
                })
            }, e.prototype._getActiveIndex = function () {
                return parseInt(this.slider.dataset.frameindex, 10) || 0
            }, e.prototype._setActiveIndex = function (e) {
                this.slider.dataset.frameindex = e
            }, e.prototype._getOffsetBounds = function () {
                return [this._getItemOffset(this.slides[this.slides.length - 1]), this._getItemOffset(this.slides[0])]
            }, e.prototype._getItemOffset = function (e) {
                return -e.offsetLeft
            }, e.prototype._moveTo = function (e) {
                var t = this.slides[e],
                    o = this._getItemOffset(t);
                this._move(o)
            }, e.prototype._move = function (e) {
                var t = this._getOffsetBounds(),
                    o = t[0],
                    n = t[1];
                e = (e = e < o ? o : e) > n ? n : e, this.offset = e;
                var s = 100 * e / this.toggleBox.offsetWidth * 10 / 10;
                this.toggleBox.style.transform = "translateX(" + s + "%)"
            }, e.prototype._toggle = function (e) {
                var t = this._getActiveIndex(),
                    o = this.isSplitted && (0, u.isDesktop)() ? this.slides.length - 1 : this.slides.length;
                return e ? t++ : t--, !(t < 0 || t >= o) && (this.toggleTo(t), !0)
            }, e.prototype._onTouchStart = function (e) {
                if (1 === e.touches.length) {
                    var t = e.touches[0];
                    (0, n.addClass)(this.slider, "slider--touching"), this.initialOffset = this.offset, this.initialX = t.screenX, this.initialY = t.screenY
                } else(0, n.removeClass)(this.slider, "slider--touching")
            }, e.prototype._onTouchMove = function (e) {
                if (this._isTouching()) {
                    var t = e.touches[0],
                        o = t.screenX - this.initialX,
                        s = t.screenY - this.initialY;
                    Math.abs(o) > Math.abs(s) ? (e.preventDefault(), e.stopPropagation(), this._move(this.initialOffset + o)) : (0, n.removeClass)(this.slider, "slider--touching")
                }
            }, e.prototype._onTouchEnd = function () {
                var e = this._isTouching();
                if ((0, n.removeClass)(this.slider, "slider--touching"), e) {
                    var t = this.offset - this.initialOffset;
                    Math.abs(t) < 100 ? this.toggleTo(this._getActiveIndex()) : t < 0 ? this._toggle(!0) : this._toggle(!1)
                }
            }, e.prototype._isTouching = function () {
                return (0, n.hasClass)(this.slider, "slider--touching")
            }, e.prototype.toggleTo = function (e) {
                this._setActiveControls(e), this._setActiveIndex(e), this._configureTogglers(e), this._moveTo(e), this.toggleCallback && this.toggleCallback(e)
            }, e
        }();
        t.default = c
    },
    2: function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.addClass = function (e, t) {
            return e.classList.add(t)
        }, t.removeClass = function (e, t) {
            return e.classList.remove(t)
        }, t.hasClass = function (e, t) {
            return e.classList.contains(t)
        }, t.toggleClass = function (e, t) {
            return e.classList.toggle(t)
        }
    },
    3: function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.addEventListener = function (e, t, o) {
            (0, s.isString)(e) && (e = (0, n.querySelector)(e));
            e && e.addEventListener(t, function (t) {
                o(t, e)
            })
        };
        var n = o(0),
            s = o(1)
    },
    4: function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.forEach = function (e, t) {
            (0, s.isString)(e) && (e = (0, n.querySelectorAll)(e));
            [].forEach.call(e, t)
        }, t.filter = function (e, t) {
            (0, s.isString)(e) && (e = (0, n.querySelectorAll)(e));
            return [].filter.call(e, t)
        };
        var n = o(0),
            s = o(1)
    },
    44: function (e, t, o) {
        e.exports = o(45)
    },
    45: function (e, t, o) {
        "use strict";
        var n = o(4),
            s = o(0);
        o(46), o(47);
        var i = l(o(10)),
            r = l(o(48));

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var u = (0, s.querySelectorAll)(".video");
        (0, n.forEach)((0, s.querySelectorAll)(".slider"), function (e) {
            new i.default(e)
        }), u && (0, n.forEach)(u, function (e) {
            new r.default(e)
        })
    },
    46: function (e, t, o) {
        "use strict";
        var n = o(0),
            s = o(3),
            i = o(5),
            r = o(2),
            l = o(6),
            u = o(1),
            c = (0, n.querySelectorAll)(".blog-section__content"),
            a = (0, n.querySelectorAll)(".blog-section--page .blog-card"),
            d = (0, n.querySelector)(".page-header"),
            f = (0, n.querySelectorAll)(".blog-submenu"),
            g = (0, n.querySelector)(".blog-submenu--main"),
            h = (0, n.querySelectorAll)(".blog-submenu__link:not(.blog-submenu__link--main)"),
            v = (0, n.querySelector)(g, ".blog-submenu__button"),
            b = (0, n.querySelectorAll)(g, ".blog-submenu__toggle"),
            p = (0, n.querySelector)(".blog-offer"),
            m = (0, n.querySelector)(".blog-submenu--php"),
            _ = (0, n.querySelector)(".page-footer");
        (0, i.addEventListenerAll)(h, "click", function (e) {
            var t = e.currentTarget.parentNode.parentNode,
                o = (0, n.querySelector)(".blog-submenu--opened") || (0, n.querySelector)(".blog-submenu--fixed");
            o && o !== t && ((0, r.removeClass)(o, "blog-submenu--opened"), (0, r.removeClass)(o, "blog-submenu--fixed")), (0, u.isDesktop)(1050) || (e.preventDefault(), (0, r.toggleClass)(t, "blog-submenu--opened"), (0, n.querySelector)(".blog-submenu--opened") && (0, r.hasClass)(v, "blog-submenu__button--fixed") ? (0, r.addClass)(v, "hidden") : (0, r.removeClass)(v, "hidden")), window.addEventListener("resize", (0, l.throttle)(function () {
                (0, u.isDesktop)(1050) && (0, r.hasClass)(t, "blog-submenu--opened") && (0, r.removeClass)(t, "blog-submenu--opened")
            }, 100))
        }), (0, s.addEventListener)(document, "scroll", function () {
            if ((0, u.isDesktop)(1050)) {
                if (1 === f.length && !g.getAttribute("style")) {
                    window.pageYOffset > 60 ? (0, r.addClass)(g, "blog-submenu--fixed") : (0, r.removeClass)(g, "blog-submenu--fixed");
                    var e = p;
                    m && (e = _), Math.floor(e.getBoundingClientRect().top) < parseInt(getComputedStyle(g).height, 10) ? ((0, r.removeClass)(g, "blog-submenu--fixed"), (0, r.addClass)(g, "blog-submenu--absolute-bottom")) : (0, r.removeClass)(g, "blog-submenu--absolute-bottom")
                }
            } else(0, r.hasClass)(v, "blog-submenu__button--fixed") && d.getBoundingClientRect().bottom >= -50 && (0, r.removeClass)(v, "hidden"), g.getBoundingClientRect().top <= 0 ? (((0, r.hasClass)(g, "blog-submenu--fixed") || (0, r.hasClass)(g, "blog-submenu--opened")) && (0, r.addClass)(g, "blog-submenu--fixed"), (0, r.addClass)(v, "blog-submenu__button--fixed")) : (0, r.removeClass)(v, "blog-submenu__button--fixed"), d.getBoundingClientRect().bottom >= 0 && (0, r.hasClass)(g, "blog-submenu--fixed") && ((0, r.removeClass)(g, "blog-submenu--fixed"), (0, r.addClass)(g, "blog-submenu--opened"))
        }), (0, s.addEventListener)(v, "click", function (e) {
            var t = (0, n.querySelector)(".blog-submenu--opened");
            (0, u.isDesktop)(1050) || (e.preventDefault(), (0, r.hasClass)(v, "blog-submenu__button--fixed") ? ((0, r.removeClass)(g, "blog-submenu--opened"), (0, r.toggleClass)(g, "blog-submenu--fixed")) : ((0, r.removeClass)(g, "blog-submenu--fixed"), (0, r.toggleClass)(g, "blog-submenu--opened")), t && (0, r.removeClass)(t, "blog-submenu--opened"))
        }), (0, s.addEventListener)(document, "keydown", function (e) {
            var t = (0, n.querySelector)(".blog-submenu--opened") || (0, n.querySelector)(".blog-submenu--fixed");
            t && 27 === e.keyCode && ((0, r.removeClass)(t, "blog-submenu--opened"), (0, r.removeClass)(t, "blog-submenu--fixed"))
        }), (0, i.addEventListenerAll)(b, "click", function (e) {
            var t = e.currentTarget.parentNode,
                o = (0, n.querySelector)(".blog-submenu__item--active");
            o && o !== t && (0, r.removeClass)(o, "blog-submenu__item--active"), (0, r.toggleClass)(t, "blog-submenu__item--active")
        }), 2 === c.length && a.length < 3 && (0, u.isDesktop)(1050) && (g.style.position = "static")
    },
    47: function (e, t, o) {
        "use strict";
        var n = o(0),
            s = o(5),
            i = o(4),
            r = (0, n.querySelectorAll)(".blog-section--part-video"),
            l = function (e) {
                return function (t) {
                    return function () {
                        e.contentWindow.postMessage(function (e) {
                            return JSON.stringify({
                                event: "command",
                                func: e,
                                args: []
                            })
                        }(t), "*")
                    }
                }
            };
        r && (0, i.forEach)(r, function (e) {
            var t = (0, n.querySelector)(e, ".slider");
            ! function (e, t, o) {
                (0, s.addEventListenerAll)(o, "click", function (o) {
                    o.preventDefault();
                    var s = (0, n.querySelector)(e, ".slider__control--active"),
                        i = [].indexOf.call(s.parentNode.children, s),
                        r = (0, n.querySelector)(t[i], "iframe");
                    r && l(r)(s.getAttribute("data-func"))()
                })
            }(t, (0, n.querySelectorAll)(t, ".slider__item"), (0, n.querySelectorAll)(t, ".js-toggle"))
        })
    },
    48: function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(0),
            s = o(2);
        var i = function () {
            function e(t) {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.video = t, this.setupVideo(this.video)
            }
            return e.prototype.setupVideo = function (e) {
                var t = this,
                    o = (0, n.querySelector)(e, ".video__link"),
                    i = (0, n.querySelector)(e, ".video__button"),
                    r = this.parseLinkUrl(o);
                (0, s.addClass)(e, "video--enabled"), e.addEventListener("click", function () {
                    var n = t.createIframe(r);
                    o.remove(), i.remove(), e.appendChild(n)
                }), o.removeAttribute("href")
            }, e.prototype.parseLinkUrl = function (e) {
                return e.href.match(/youtu\.be\/([a-zA-Z0-9_-]+)/i)[1]
            }, e.prototype.createIframe = function (e) {
                var t = document.createElement("iframe");
                return t.setAttribute("allowfullscreen", ""), t.setAttribute("allow", "autoplay"), t.setAttribute("src", this.generateURL(e)), (0, s.addClass)(t, "video__media"), t
            }, e.prototype.generateURL = function (e) {
                return "https://www.youtube.com/embed/" + e + "?rel=0&showinfo=0&autoplay=1&enablejsapi=1"
            }, e
        }();
        t.default = i
    },
    5: function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.addEventListenerAll = function (e, t, o) {
            (0, i.isString)(e) && (e = (0, n.querySelectorAll)(e));
            e && e.length > 0 && (0, s.forEach)(e, function (e) {
                e.addEventListener(t, function (t) {
                    o(t, e)
                })
            })
        };
        var n = o(0),
            s = o(4),
            i = o(1)
    },
    6: function (e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.throttle = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250,
                o = void 0,
                n = void 0;
            return function () {
                var s = +new Date;
                o && s < o + t ? (clearTimeout(n), n = setTimeout(function () {
                    o = s, e()
                }, t)) : (o = s, e())
            }
        }
    }
});
