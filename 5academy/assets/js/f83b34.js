webpackJsonp([10], {
    151: function (e, n, t) {
        "use strict";
        var o, i = {
            domainThreshold: 2,
            secondLevelThreshold: 2,
            topLevelThreshold: 2,
            defaultDomains: ["msn.com", "bellsouth.net", "telus.net", "comcast.net", "optusnet.com.au", "earthlink.net", "qq.com", "sky.com", "icloud.com", "mac.com", "sympatico.ca", "googlemail.com", "att.net", "xtra.co.nz", "web.de", "cox.net", "gmail.com", "ymail.com", "aim.com", "rogers.com", "verizon.net", "rocketmail.com", "google.com", "optonline.net", "sbcglobal.net", "aol.com", "me.com", "btinternet.com", "charter.net", "shaw.ca"],
            defaultSecondLevelDomains: ["yahoo", "hotmail", "mail", "live", "outlook", "gmx"],
            defaultTopLevelDomains: ["com", "com.au", "com.tw", "ca", "co.nz", "co.uk", "de", "fr", "it", "ru", "net", "org", "edu", "gov", "jp", "nl", "kr", "se", "eu", "ie", "co.il", "us", "at", "be", "dk", "hk", "es", "gr", "ch", "no", "cz", "in", "net", "net.au", "info", "biz", "mil", "co.jp", "sg", "hu"],
            run: function (e) {
                e.domains = e.domains || i.defaultDomains, e.secondLevelDomains = e.secondLevelDomains || i.defaultSecondLevelDomains, e.topLevelDomains = e.topLevelDomains || i.defaultTopLevelDomains, e.distanceFunction = e.distanceFunction || i.sift3Distance;
                var n = function (e) {
                        return e
                    },
                    t = e.suggested || n,
                    o = e.empty || n,
                    l = i.suggest(i.encodeEmail(e.email), e.domains, e.secondLevelDomains, e.topLevelDomains, e.distanceFunction);
                return l ? t(l) : o()
            },
            suggest: function (e, n, t, o, i) {
                e = e.toLowerCase();
                var l = this.splitEmail(e);
                if (t && o && -1 !== t.indexOf(l.secondLevelDomain) && -1 !== o.indexOf(l.topLevelDomain)) return !1;
                if (s = this.findClosestDomain(l.domain, n, i, this.domainThreshold)) return s != l.domain && {
                    address: l.address,
                    domain: s,
                    full: l.address + "@" + s
                };
                var a = this.findClosestDomain(l.secondLevelDomain, t, i, this.secondLevelThreshold),
                    r = this.findClosestDomain(l.topLevelDomain, o, i, this.topLevelThreshold);
                if (l.domain) {
                    var s = l.domain,
                        c = !1;
                    if (a && a != l.secondLevelDomain && (s = s.replace(l.secondLevelDomain, a), c = !0), r && r != l.topLevelDomain && (s = s.replace(l.topLevelDomain, r), c = !0), 1 == c) return {
                        address: l.address,
                        domain: s,
                        full: l.address + "@" + s
                    }
                }
                return !1
            },
            findClosestDomain: function (e, n, t, o) {
                var i;
                o = o || this.topLevelThreshold;
                var l = 99,
                    a = null;
                if (!e || !n) return !1;
                t || (t = this.sift3Distance);
                for (var r = 0; r < n.length; r++) {
                    if (e === n[r]) return e;
                    (i = t(e, n[r])) < l && (l = i, a = n[r])
                }
                return l <= o && null !== a && a
            },
            sift3Distance: function (e, n) {
                if (null == e || 0 === e.length) return null == n || 0 === n.length ? 0 : n.length;
                if (null == n || 0 === n.length) return e.length;
                for (var t = 0, o = 0, i = 0, l = 0; t + o < e.length && t + i < n.length;) {
                    if (e.charAt(t + o) == n.charAt(t + i)) l++;
                    else {
                        o = 0, i = 0;
                        for (var a = 0; a < 5; a++) {
                            if (t + a < e.length && e.charAt(t + a) == n.charAt(t)) {
                                o = a;
                                break
                            }
                            if (t + a < n.length && e.charAt(t) == n.charAt(t + a)) {
                                i = a;
                                break
                            }
                        }
                    }
                    t++
                }
                return (e.length + n.length) / 2 - l
            },
            splitEmail: function (e) {
                var n = e.trim().split("@");
                if (n.length < 2) return !1;
                for (var t = 0; t < n.length; t++)
                    if ("" === n[t]) return !1;
                var o = n.pop(),
                    i = o.split("."),
                    l = "",
                    a = "";
                if (0 == i.length) return !1;
                if (1 == i.length) a = i[0];
                else {
                    l = i[0];
                    for (t = 1; t < i.length; t++) a += i[t] + ".";
                    a = a.substring(0, a.length - 1)
                }
                return {
                    topLevelDomain: a,
                    secondLevelDomain: l,
                    domain: o,
                    address: n.join("@")
                }
            },
            encodeEmail: function (e) {
                var n = encodeURI(e);
                return n = n.replace("%20", " ").replace("%25", "%").replace("%5E", "^").replace("%60", "`").replace("%7B", "{").replace("%7C", "|").replace("%7D", "}")
            }
        };
        void 0 !== e && e.exports && (e.exports = i), void 0 === (o = function () {
            return i
        }.apply(n, [])) || (e.exports = o), "undefined" != typeof window && window.jQuery && (jQuery.fn.mailcheck = function (e) {
            var n = this;
            if (e.suggested) {
                var t = e.suggested;
                e.suggested = function (e) {
                    t(n, e)
                }
            }
            if (e.empty) {
                var o = e.empty;
                e.empty = function () {
                    o.call(null, n)
                }
            }
            e.email = this.val(), i.run(e)
        })
    },
    29: function (e, n, t) {
        "use strict";
        var o = t(0),
            i = t(3),
            l = t(2),
            a = t(4),
            r = t(151),
            s = (0, o.querySelectorAll)("input[data-email-suggest=on]");
        s.length && (0, a.forEach)(s, function (e) {
            (0, i.addEventListener)(e, "blur", function () {
                r.run({
                    email: e.value,
                    suggested: function (n) {
                        if (n.full.length) {
                            var t = (0, o.querySelector)(e.parentNode, ".form__notice");
                            t || ((t = document.createElement("p")).classList.add("form__notice"), e.parentNode.appendChild(t)), (0, l.removeClass)(t, "form__notice--red"), (0, l.removeClass)(t, "hidden"), t.innerHTML = 'Возможно вы имели в виду <a href="#">' + n.full + "</a>?";
                            var a = (0, o.querySelector)(t, "a");
                            (0, i.addEventListener)(a, "click", function (o) {
                                o.preventDefault(), e.value = n.full, (0, l.removeClass)(e, "field--red"), (0, l.addClass)(t, "hidden")
                            })
                        }
                    }
                })
            })
        })
    },
    4: function (e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.forEach = function (e, n) {
            (0, i.isString)(e) && (e = (0, o.querySelectorAll)(e));
            [].forEach.call(e, n)
        }, n.filter = function (e, n) {
            (0, i.isString)(e) && (e = (0, o.querySelectorAll)(e));
            return [].filter.call(e, n)
        };
        var o = t(0),
            i = t(1)
    }
});
