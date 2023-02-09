!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(((t = "undefined" != typeof globalThis ? globalThis : t || self).htmlToImage = {}));
})(this, function (t) {
  "use strict";
  function e(t, e, n, r) {
    return new (n || (n = Promise))(function (i, o) {
      function u(t) {
        try {
          a(r.next(t));
        } catch (t) {
          o(t);
        }
      }
      function c(t) {
        try {
          a(r.throw(t));
        } catch (t) {
          o(t);
        }
      }
      function a(t) {
        var e;
        t.done
          ? i(t.value)
          : ((e = t.value),
            e instanceof n
              ? e
              : new n(function (t) {
                  t(e);
                })).then(u, c);
      }
      a((r = r.apply(t, e || [])).next());
    });
  }
  function n(t, e) {
    var n,
      r,
      i,
      o,
      u = {
        label: 0,
        sent: function () {
          if (1 & i[0]) throw i[1];
          return i[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (o = { next: c(0), throw: c(1), return: c(2) }),
      "function" == typeof Symbol &&
        (o[Symbol.iterator] = function () {
          return this;
        }),
      o
    );
    function c(c) {
      return function (a) {
        return (function (c) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; o && ((o = 0), c[0] && (u = 0)), u; )
            try {
              if (((n = 1), r && (i = 2 & c[0] ? r.return : c[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, c[1])).done)) return i;
              switch (((r = 0), i && (c = [2 & c[0], i.value]), c[0])) {
                case 0:
                case 1:
                  i = c;
                  break;
                case 4:
                  return u.label++, { value: c[1], done: !1 };
                case 5:
                  u.label++, (r = c[1]), (c = [0]);
                  continue;
                case 7:
                  (c = u.ops.pop()), u.trys.pop();
                  continue;
                default:
                  if (!((i = u.trys), (i = i.length > 0 && i[i.length - 1]) || (6 !== c[0] && 2 !== c[0]))) {
                    u = 0;
                    continue;
                  }
                  if (3 === c[0] && (!i || (c[1] > i[0] && c[1] < i[3]))) {
                    u.label = c[1];
                    break;
                  }
                  if (6 === c[0] && u.label < i[1]) {
                    (u.label = i[1]), (i = c);
                    break;
                  }
                  if (i && u.label < i[2]) {
                    (u.label = i[2]), u.ops.push(c);
                    break;
                  }
                  i[2] && u.ops.pop(), u.trys.pop();
                  continue;
              }
              c = e.call(t, u);
            } catch (t) {
              (c = [6, t]), (r = 0);
            } finally {
              n = i = 0;
            }
          if (5 & c[0]) throw c[1];
          return { value: c[0] ? c[1] : void 0, done: !0 };
        })([c, a]);
      };
    }
  }
  var r,
    i =
      ((r = 0),
      function () {
        return (r += 1), "u".concat("0000".concat(((Math.random() * Math.pow(36, 4)) << 0).toString(36)).slice(-4)).concat(r);
      });
  function o(t) {
    for (var e = [], n = 0, r = t.length; n < r; n++) e.push(t[n]);
    return e;
  }
  function u(t, e) {
    var n = (t.ownerDocument.defaultView || window).getComputedStyle(t).getPropertyValue(e);
    return n ? parseFloat(n.replace("px", "")) : 0;
  }
  function c(t, e) {
    void 0 === e && (e = {});
    var n,
      r,
      i,
      o = e.width || ((r = u((n = t), "border-left-width")), (i = u(n, "border-right-width")), n.clientWidth + r + i),
      c =
        e.height ||
        (function (t) {
          var e = u(t, "border-top-width"),
            n = u(t, "border-bottom-width");
          return t.clientHeight + e + n;
        })(t);
    return { width: o, height: c };
  }
  var a = 16384;
  function s(t, e) {
    return (
      void 0 === e && (e = {}),
      t.toBlob
        ? new Promise(function (n) {
            t.toBlob(n, e.type ? e.type : "image/png", e.quality ? e.quality : 1);
          })
        : new Promise(function (n) {
            for (var r = window.atob(t.toDataURL(e.type ? e.type : void 0, e.quality ? e.quality : void 0).split(",")[1]), i = r.length, o = new Uint8Array(i), u = 0; u < i; u += 1) o[u] = r.charCodeAt(u);
            n(new Blob([o], { type: e.type ? e.type : "image/png" }));
          })
    );
  }
  function l(t) {
    return new Promise(function (e, n) {
      var r = new Image();
      (r.decode = function () {
        return e(r);
      }),
        (r.onload = function () {
          return e(r);
        }),
        (r.onerror = n),
        (r.crossOrigin = "anonymous"),
        (r.decoding = "async"),
        (r.src = t);
    });
  }
  function f(t) {
    return e(this, void 0, void 0, function () {
      return n(this, function (e) {
        return [
          2,
          Promise.resolve()
            .then(function () {
              return new XMLSerializer().serializeToString(t);
            })
            .then(encodeURIComponent)
            .then(function (t) {
              return "data:image/svg+xml;charset=utf-8,".concat(t);
            }),
        ];
      });
    });
  }
  function h(t, r, i) {
    return e(this, void 0, void 0, function () {
      var e, o, u;
      return n(this, function (n) {
        return (e = "http://www.w3.org/2000/svg"), (o = document.createElementNS(e, "svg")), (u = document.createElementNS(e, "foreignObject")), o.setAttribute("width", "".concat(r)), o.setAttribute("height", "".concat(i)), o.setAttribute("viewBox", "0 0 ".concat(r, " ").concat(i)), u.setAttribute("width", "100%"), u.setAttribute("height", "100%"), u.setAttribute("x", "0"), u.setAttribute("y", "0"), u.setAttribute("externalResourcesRequired", "true"), o.appendChild(u), u.appendChild(t), [2, f(o)];
      });
    });
  }
  var d = function (t, e) {
    if (t instanceof e) return !0;
    var n = Object.getPrototypeOf(t);
    return null !== n && (n.constructor.name === e.name || d(n, e));
  };
  function v(t, e, n) {
    var r = ".".concat(t, ":").concat(e),
      i = n.cssText
        ? (function (t) {
            var e = t.getPropertyValue("content");
            return "".concat(t.cssText, " content: '").concat(e.replace(/'|"/g, ""), "';");
          })(n)
        : (function (t) {
            return o(t)
              .map(function (e) {
                var n = t.getPropertyValue(e),
                  r = t.getPropertyPriority(e);
                return ""
                  .concat(e, ": ")
                  .concat(n)
                  .concat(r ? " !important" : "", ";");
              })
              .join(" ");
          })(n);
    return document.createTextNode("".concat(r, "{").concat(i, "}"));
  }
  function p(t, e, n) {
    var r = window.getComputedStyle(t, n),
      o = r.getPropertyValue("content");
    if ("" !== o && "none" !== o) {
      var u = i();
      try {
        e.className = "".concat(e.className, " ").concat(u);
      } catch (t) {
        return;
      }
      var c = document.createElement("style");
      c.appendChild(v(u, n, r)), e.appendChild(c);
    }
  }
  var g = "application/font-woff",
    m = "image/jpeg",
    w = { woff: g, woff2: g, ttf: "application/font-truetype", eot: "application/vnd.ms-fontobject", png: "image/png", jpg: m, jpeg: m, gif: "image/gif", tiff: "image/tiff", svg: "image/svg+xml", webp: "image/webp" };
  function b(t) {
    var e = (function (t) {
      var e = /\.([^./]*?)$/g.exec(t);
      return e ? e[1] : "";
    })(t).toLowerCase();
    return w[e] || "";
  }
  function y(t) {
    return -1 !== t.search(/^(data:)/);
  }
  function x(t, e) {
    return "data:".concat(e, ";base64,").concat(t);
  }
  function S(t, r, i) {
    return e(this, void 0, void 0, function () {
      var e, o;
      return n(this, function (n) {
        switch (n.label) {
          case 0:
            return [4, fetch(t, r)];
          case 1:
            if (404 === (e = n.sent()).status) throw new Error('Resource "'.concat(e.url, '" not found'));
            return [4, e.blob()];
          case 2:
            return (
              (o = n.sent()),
              [
                2,
                new Promise(function (t, n) {
                  var r = new FileReader();
                  (r.onerror = n),
                    (r.onloadend = function () {
                      try {
                        t(i({ res: e, result: r.result }));
                      } catch (t) {
                        n(t);
                      }
                    }),
                    r.readAsDataURL(o);
                }),
              ]
            );
        }
      });
    });
  }
  var E = {};
  function C(t, r, i) {
    return e(this, void 0, void 0, function () {
      var e, o, u, c, a;
      return n(this, function (n) {
        switch (n.label) {
          case 0:
            if (
              ((e = (function (t, e, n) {
                var r = t.replace(/\?.*/, "");
                return n && (r = t), /ttf|otf|eot|woff2?/i.test(r) && (r = r.replace(/.*\//, "")), e ? "[".concat(e, "]").concat(r) : r;
              })(t, r, i.includeQueryParams)),
              null != E[e])
            )
              return [2, E[e]];
            i.cacheBust && (t += (/\?/.test(t) ? "&" : "?") + new Date().getTime()), (n.label = 1);
          case 1:
            return (
              n.trys.push([1, 3, , 4]),
              [
                4,
                S(t, i.fetchRequestInit, function (t) {
                  var e = t.res,
                    n = t.result;
                  return (
                    r || (r = e.headers.get("Content-Type") || ""),
                    (function (t) {
                      return t.split(/,/)[1];
                    })(n)
                  );
                }),
              ]
            );
          case 2:
            return (u = n.sent()), (o = x(u, r)), [3, 4];
          case 3:
            return (c = n.sent()), (o = i.imagePlaceholder || ""), (a = "Failed to fetch resource: ".concat(t)), c && (a = "string" == typeof c ? c : c.message), a && console.warn(a), [3, 4];
          case 4:
            return (E[e] = o), [2, o];
        }
      });
    });
  }
  function P(t) {
    return e(this, void 0, void 0, function () {
      var e;
      return n(this, function (n) {
        return "data:," === (e = t.toDataURL()) ? [2, t.cloneNode(!1)] : [2, l(e)];
      });
    });
  }
  function R(t, r) {
    return e(this, void 0, void 0, function () {
      var e, i, o, u;
      return n(this, function (n) {
        switch (n.label) {
          case 0:
            return t.currentSrc ? ((e = document.createElement("canvas")), (i = e.getContext("2d")), (e.width = t.clientWidth), (e.height = t.clientHeight), null == i || i.drawImage(t, 0, 0, e.width, e.height), [2, l(e.toDataURL())]) : ((o = t.poster), (u = b(o)), [4, C(o, u, r)]);
          case 1:
            return [2, l(n.sent())];
        }
      });
    });
  }
  function T(t) {
    var r;
    return e(this, void 0, void 0, function () {
      return n(this, function (e) {
        switch (e.label) {
          case 0:
            return e.trys.push([0, 3, , 4]), (null === (r = null == t ? void 0 : t.contentDocument) || void 0 === r ? void 0 : r.body) ? [4, L(t.contentDocument.body, {}, !0)] : [3, 2];
          case 1:
            return [2, e.sent()];
          case 2:
            return [3, 4];
          case 3:
            return e.sent(), [3, 4];
          case 4:
            return [2, t.cloneNode(!1)];
        }
      });
    });
  }
  function A(t, e) {
    return (
      d(e, Element) &&
        ((function (t, e) {
          var n = e.style;
          if (n) {
            var r = window.getComputedStyle(t);
            r.cssText
              ? ((n.cssText = r.cssText), (n.transformOrigin = r.transformOrigin))
              : o(r).forEach(function (i) {
                  var o = r.getPropertyValue(i);
                  if ("font-size" === i && o.endsWith("px")) {
                    var u = Math.floor(parseFloat(o.substring(0, o.length - 2))) - 0.1;
                    o = "".concat(u, "px");
                  }
                  d(t, HTMLIFrameElement) && "display" === i && "inline" === o && (o = "block"), "d" === i && e.getAttribute("d") && (o = "path(".concat(e.getAttribute("d"), ")")), n.setProperty(i, o, r.getPropertyPriority(i));
                });
          }
        })(t, e),
        (function (t, e) {
          p(t, e, ":before"), p(t, e, ":after");
        })(t, e),
        (function (t, e) {
          d(t, HTMLTextAreaElement) && (e.innerHTML = t.value), d(t, HTMLInputElement) && e.setAttribute("value", t.value);
        })(t, e),
        (function (t, e) {
          if (d(t, HTMLSelectElement)) {
            var n = e,
              r = Array.from(n.children).find(function (e) {
                return t.value === e.getAttribute("value");
              });
            r && r.setAttribute("selected", "");
          }
        })(t, e)),
      e
    );
  }
  function L(t, r, i) {
    return e(this, void 0, void 0, function () {
      return n(this, function (u) {
        return i || !r.filter || r.filter(t)
          ? [
              2,
              Promise.resolve(t)
                .then(function (t) {
                  return (function (t, r) {
                    return e(this, void 0, void 0, function () {
                      return n(this, function (e) {
                        return d(t, HTMLCanvasElement) ? [2, P(t)] : d(t, HTMLVideoElement) ? [2, R(t, r)] : d(t, HTMLIFrameElement) ? [2, T(t)] : [2, t.cloneNode(!1)];
                      });
                    });
                  })(t, r);
                })
                .then(function (i) {
                  return (function (t, r, i) {
                    var u, c;
                    return e(this, void 0, void 0, function () {
                      var e;
                      return n(this, function (n) {
                        switch (n.label) {
                          case 0:
                            return (
                              (e = []),
                              0 === (e = null != (a = t).tagName && "SLOT" === a.tagName.toUpperCase() && t.assignedNodes ? o(t.assignedNodes()) : d(t, HTMLIFrameElement) && (null === (u = t.contentDocument) || void 0 === u ? void 0 : u.body) ? o(t.contentDocument.body.childNodes) : o((null !== (c = t.shadowRoot) && void 0 !== c ? c : t).childNodes)).length || d(t, HTMLVideoElement)
                                ? [2, r]
                                : [
                                    4,
                                    e.reduce(function (t, e) {
                                      return t
                                        .then(function () {
                                          return L(e, i);
                                        })
                                        .then(function (t) {
                                          t && r.appendChild(t);
                                        });
                                    }, Promise.resolve()),
                                  ]
                            );
                          case 1:
                            return n.sent(), [2, r];
                        }
                        var a;
                      });
                    });
                  })(t, i, r);
                })
                .then(function (e) {
                  return A(t, e);
                })
                .then(function (t) {
                  return (function (t, r) {
                    return e(this, void 0, void 0, function () {
                      var e, i, o, u, c, a, s, l, f, h, d, v, p;
                      return n(this, function (n) {
                        switch (n.label) {
                          case 0:
                            if (0 === (e = t.querySelectorAll ? t.querySelectorAll("use") : []).length) return [2, t];
                            (i = {}), (p = 0), (n.label = 1);
                          case 1:
                            return p < e.length ? ((o = e[p]), (u = o.getAttribute("xlink:href")) ? ((c = t.querySelector(u)), (a = document.querySelector(u)), c || !a || i[u] ? [3, 3] : ((s = i), (l = u), [4, L(a, r, !0)])) : [3, 3]) : [3, 4];
                          case 2:
                            (s[l] = n.sent()), (n.label = 3);
                          case 3:
                            return p++, [3, 1];
                          case 4:
                            if ((f = Object.values(i)).length) {
                              for (h = "http://www.w3.org/1999/xhtml", (d = document.createElementNS(h, "svg")).setAttribute("xmlns", h), d.style.position = "absolute", d.style.width = "0", d.style.height = "0", d.style.overflow = "hidden", d.style.display = "none", v = document.createElementNS(h, "defs"), d.appendChild(v), p = 0; p < f.length; p++) v.appendChild(f[p]);
                              t.appendChild(d);
                            }
                            return [2, t];
                        }
                      });
                    });
                  })(t, r);
                }),
            ]
          : [2, null];
      });
    });
  }
  var N = /url\((['"]?)([^'"]+?)\1\)/g,
    k = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
    I = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
  function D(t, r, i, o, u) {
    return e(this, void 0, void 0, function () {
      var e, c, a, s;
      return n(this, function (n) {
        switch (n.label) {
          case 0:
            return (
              n.trys.push([0, 5, , 6]),
              (e = i
                ? (function (t, e) {
                    if (t.match(/^[a-z]+:\/\//i)) return t;
                    if (t.match(/^\/\//)) return window.location.protocol + t;
                    if (t.match(/^[a-z]+:/i)) return t;
                    var n = document.implementation.createHTMLDocument(),
                      r = n.createElement("base"),
                      i = n.createElement("a");
                    return n.head.appendChild(r), n.body.appendChild(i), e && (r.href = e), (i.href = t), i.href;
                  })(r, i)
                : r),
              (c = b(r)),
              (a = void 0),
              u ? [4, u(e)] : [3, 2]
            );
          case 1:
            return (s = n.sent()), (a = x(s, c)), [3, 4];
          case 2:
            return [4, C(e, c, o)];
          case 3:
            (a = n.sent()), (n.label = 4);
          case 4:
            return [2, t.replace(((l = r), (f = l.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1")), new RegExp("(url\\(['\"]?)(".concat(f, ")(['\"]?\\))"), "g")), "$1".concat(a, "$3"))];
          case 5:
            return n.sent(), [3, 6];
          case 6:
            return [2, t];
        }
        var l, f;
      });
    });
  }
  function M(t) {
    return -1 !== t.search(N);
  }
  function H(t, r, i) {
    return e(this, void 0, void 0, function () {
      var e, o;
      return n(this, function (n) {
        return M(t)
          ? ((e = (function (t, e) {
              var n = e.preferredFontFormat;
              return n
                ? t.replace(I, function (t) {
                    for (;;) {
                      var e = k.exec(t) || [],
                        r = e[0],
                        i = e[2];
                      if (!i) return "";
                      if (i === n) return "src: ".concat(r, ";");
                    }
                  })
                : t;
            })(t, i)),
            (o = (function (t) {
              var e = [];
              return (
                t.replace(N, function (t, n, r) {
                  return e.push(r), t;
                }),
                e.filter(function (t) {
                  return !y(t);
                })
              );
            })(e)),
            [
              2,
              o.reduce(function (t, e) {
                return t.then(function (t) {
                  return D(t, e, r, i);
                });
              }, Promise.resolve(e)),
            ])
          : [2, t];
      });
    });
  }
  function V(t, r, i) {
    var o;
    return e(this, void 0, void 0, function () {
      var e, u;
      return n(this, function (n) {
        switch (n.label) {
          case 0:
            return (e = null === (o = r.style) || void 0 === o ? void 0 : o.getPropertyValue(t)) ? [4, H(e, null, i)] : [3, 2];
          case 1:
            return (u = n.sent()), r.style.setProperty(t, u, r.style.getPropertyPriority(t)), [2, !0];
          case 2:
            return [2, !1];
        }
      });
    });
  }
  function F(t, r) {
    return e(this, void 0, void 0, function () {
      return n(this, function (e) {
        switch (e.label) {
          case 0:
            return [4, V("background", t, r)];
          case 1:
            return e.sent() ? [3, 3] : [4, V("background-image", t, r)];
          case 2:
            e.sent(), (e.label = 3);
          case 3:
            return [4, V("mask", t, r)];
          case 4:
            return e.sent() ? [3, 6] : [4, V("mask-image", t, r)];
          case 5:
            e.sent(), (e.label = 6);
          case 6:
            return [2];
        }
      });
    });
  }
  function j(t, r) {
    return e(this, void 0, void 0, function () {
      var e, i, o;
      return n(this, function (n) {
        switch (n.label) {
          case 0:
            return ((e = d(t, HTMLImageElement)) && !y(t.src)) || (d(t, SVGImageElement) && !y(t.href.baseVal)) ? [4, C((i = e ? t.src : t.href.baseVal), b(i), r)] : [2];
          case 1:
            return (
              (o = n.sent()),
              [
                4,
                new Promise(function (n, r) {
                  (t.onload = n), (t.onerror = r);
                  var i = t;
                  i.decode && (i.decode = n), "lazy" === i.loading && (i.loading = "eager"), e ? ((t.srcset = ""), (t.src = o)) : (t.href.baseVal = o);
                }),
              ]
            );
          case 2:
            return n.sent(), [2];
        }
      });
    });
  }
  function q(t, r) {
    return e(this, void 0, void 0, function () {
      var e, i;
      return n(this, function (n) {
        switch (n.label) {
          case 0:
            return (
              (e = o(t.childNodes)),
              (i = e.map(function (t) {
                return U(t, r);
              })),
              [
                4,
                Promise.all(i).then(function () {
                  return t;
                }),
              ]
            );
          case 1:
            return n.sent(), [2];
        }
      });
    });
  }
  function U(t, r) {
    return e(this, void 0, void 0, function () {
      return n(this, function (e) {
        switch (e.label) {
          case 0:
            return d(t, Element) ? [4, F(t, r)] : [3, 4];
          case 1:
            return e.sent(), [4, j(t, r)];
          case 2:
            return e.sent(), [4, q(t, r)];
          case 3:
            e.sent(), (e.label = 4);
          case 4:
            return [2];
        }
      });
    });
  }
  var O = {};
  function B(t) {
    return e(this, void 0, void 0, function () {
      var e, r;
      return n(this, function (n) {
        switch (n.label) {
          case 0:
            return null != (e = O[t]) ? [2, e] : [4, fetch(t)];
          case 1:
            return [4, n.sent().text()];
          case 2:
            return (r = n.sent()), (e = { url: t, cssText: r }), (O[t] = e), [2, e];
        }
      });
    });
  }
  function z(t, r) {
    return e(this, void 0, void 0, function () {
      var i,
        o,
        u,
        c,
        a = this;
      return n(this, function (s) {
        return (
          (i = t.cssText),
          (o = /url\(["']?([^"')]+)["']?\)/g),
          (u = i.match(/url\([^)]+\)/g) || []),
          (c = u.map(function (u) {
            return e(a, void 0, void 0, function () {
              var e;
              return n(this, function (n) {
                return (
                  (e = u.replace(o, "$1")).startsWith("https://") || (e = new URL(e, t.url).href),
                  [
                    2,
                    S(e, r.fetchRequestInit, function (t) {
                      var e = t.result;
                      return (i = i.replace(u, "url(".concat(e, ")"))), [u, e];
                    }),
                  ]
                );
              });
            });
          })),
          [
            2,
            Promise.all(c).then(function () {
              return i;
            }),
          ]
        );
      });
    });
  }
  function W(t) {
    if (null == t) return [];
    for (var e = [], n = t.replace(/(\/\*[\s\S]*?\*\/)/gi, ""), r = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi"); ; ) {
      if (null === (u = r.exec(n))) break;
      e.push(u[0]);
    }
    n = n.replace(r, "");
    for (var i = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, o = new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", "gi"); ; ) {
      var u;
      if (null === (u = i.exec(n))) {
        if (null === (u = o.exec(n))) break;
        i.lastIndex = o.lastIndex;
      } else o.lastIndex = i.lastIndex;
      e.push(u[0]);
    }
    return e;
  }
  function $(t, r) {
    return e(this, void 0, void 0, function () {
      var e, i;
      return n(this, function (n) {
        return (
          (e = []),
          (i = []),
          t.forEach(function (e) {
            if ("cssRules" in e)
              try {
                o(e.cssRules || []).forEach(function (t, n) {
                  if (t.type === CSSRule.IMPORT_RULE) {
                    var o = n + 1,
                      u = B(t.href)
                        .then(function (t) {
                          return z(t, r);
                        })
                        .then(function (t) {
                          return W(t).forEach(function (t) {
                            try {
                              e.insertRule(t, t.startsWith("@import") ? (o += 1) : e.cssRules.length);
                            } catch (e) {
                              console.error("Error inserting rule from remote css", { rule: t, error: e });
                            }
                          });
                        })
                        .catch(function (t) {
                          console.error("Error loading remote css", t.toString());
                        });
                    i.push(u);
                  }
                });
              } catch (o) {
                var n =
                  t.find(function (t) {
                    return null == t.href;
                  }) || document.styleSheets[0];
                null != e.href &&
                  i.push(
                    B(e.href)
                      .then(function (t) {
                        return z(t, r);
                      })
                      .then(function (t) {
                        return W(t).forEach(function (t) {
                          n.insertRule(t, e.cssRules.length);
                        });
                      })
                      .catch(function (t) {
                        console.error("Error loading remote stylesheet", t);
                      })
                  ),
                  console.error("Error inlining remote css file", o);
              }
          }),
          [
            2,
            Promise.all(i).then(function () {
              return (
                t.forEach(function (t) {
                  if ("cssRules" in t)
                    try {
                      o(t.cssRules || []).forEach(function (t) {
                        e.push(t);
                      });
                    } catch (e) {
                      console.error("Error while reading CSS rules from ".concat(t.href), e);
                    }
                }),
                e
              );
            }),
          ]
        );
      });
    });
  }
  function _(t) {
    return t
      .filter(function (t) {
        return t.type === CSSRule.FONT_FACE_RULE;
      })
      .filter(function (t) {
        return M(t.style.getPropertyValue("src"));
      });
  }
  function G(t, r) {
    return e(this, void 0, void 0, function () {
      return n(this, function (e) {
        switch (e.label) {
          case 0:
            if (null == t.ownerDocument) throw new Error("Provided element is not within a Document");
            return [4, $(o(t.ownerDocument.styleSheets), r)];
          case 1:
            return [2, _(e.sent())];
        }
      });
    });
  }
  function J(t, r) {
    return e(this, void 0, void 0, function () {
      var e;
      return n(this, function (n) {
        switch (n.label) {
          case 0:
            return [4, G(t, r)];
          case 1:
            return (
              (e = n.sent()),
              [
                4,
                Promise.all(
                  e.map(function (t) {
                    var e = t.parentStyleSheet ? t.parentStyleSheet.href : null;
                    return H(t.cssText, e, r);
                  })
                ),
              ]
            );
          case 2:
            return [2, n.sent().join("\n")];
        }
      });
    });
  }
  function Q(t, r) {
    return e(this, void 0, void 0, function () {
      var e, i, o, u, c;
      return n(this, function (n) {
        switch (n.label) {
          case 0:
            return null == r.fontEmbedCSS ? [3, 1] : ((i = r.fontEmbedCSS), [3, 5]);
          case 1:
            return r.skipFonts ? ((o = null), [3, 4]) : [3, 2];
          case 2:
            return [4, J(t, r)];
          case 3:
            (o = n.sent()), (n.label = 4);
          case 4:
            (i = o), (n.label = 5);
          case 5:
            return (e = i) && ((u = document.createElement("style")), (c = document.createTextNode(e)), u.appendChild(c), t.firstChild ? t.insertBefore(u, t.firstChild) : t.appendChild(u)), [2];
        }
      });
    });
  }
  function X(t, r) {
    return (
      void 0 === r && (r = {}),
      e(this, void 0, void 0, function () {
        var e, i, o, u;
        return n(this, function (n) {
          switch (n.label) {
            case 0:
              return (e = c(t, r)), (i = e.width), (o = e.height), [4, L(t, r, !0)];
            case 1:
              return [4, Q((u = n.sent()), r)];
            case 2:
              return n.sent(), [4, U(u, r)];
            case 3:
              return (
                n.sent(),
                (function (t, e) {
                  var n = t.style;
                  e.backgroundColor && (n.backgroundColor = e.backgroundColor), e.width && (n.width = "".concat(e.width, "px")), e.height && (n.height = "".concat(e.height, "px"));
                  var r = e.style;
                  null != r &&
                    Object.keys(r).forEach(function (t) {
                      n[t] = r[t];
                    });
                })(u, r),
                [4, h(u, i, o)]
              );
            case 4:
              return [2, n.sent()];
          }
        });
      })
    );
  }
  function K(t, r) {
    return (
      void 0 === r && (r = {}),
      e(this, void 0, void 0, function () {
        var e, i, o, u, s, f, h, d, v;
        return n(this, function (n) {
          switch (n.label) {
            case 0:
              return (e = c(t, r)), (i = e.width), (o = e.height), [4, X(t, r)];
            case 1:
              return [4, l(n.sent())];
            case 2:
              return (
                (u = n.sent()),
                (s = document.createElement("canvas")),
                (f = s.getContext("2d")),
                (h =
                  r.pixelRatio ||
                  (function () {
                    var t, e;
                    try {
                      e = process;
                    } catch (t) {}
                    var n = e && e.env ? e.env.devicePixelRatio : null;
                    return n && ((t = parseInt(n, 10)), Number.isNaN(t) && (t = 1)), t || window.devicePixelRatio || 1;
                  })()),
                (d = r.canvasWidth || i),
                (v = r.canvasHeight || o),
                (s.width = d * h),
                (s.height = v * h),
                r.skipAutoScale ||
                  (function (t) {
                    (t.width > a || t.height > a) && (t.width > a && t.height > a ? (t.width > t.height ? ((t.height *= a / t.width), (t.width = a)) : ((t.width *= a / t.height), (t.height = a))) : t.width > a ? ((t.height *= a / t.width), (t.width = a)) : ((t.width *= a / t.height), (t.height = a)));
                  })(s),
                (s.style.width = "".concat(d)),
                (s.style.height = "".concat(v)),
                r.backgroundColor && ((f.fillStyle = r.backgroundColor), f.fillRect(0, 0, s.width, s.height)),
                f.drawImage(u, 0, 0, s.width, s.height),
                [2, s]
              );
          }
        });
      })
    );
  }
  (t.getFontEmbedCSS = function (t, r) {
    return (
      void 0 === r && (r = {}),
      e(this, void 0, void 0, function () {
        return n(this, function (e) {
          return [2, J(t, r)];
        });
      })
    );
  }),
    (t.toBlob = function (t, r) {
      return (
        void 0 === r && (r = {}),
        e(this, void 0, void 0, function () {
          return n(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, K(t, r)];
              case 1:
                return [4, s(e.sent())];
              case 2:
                return [2, e.sent()];
            }
          });
        })
      );
    }),
    (t.toCanvas = K),
    (t.toJpeg = function (t, r) {
      return (
        void 0 === r && (r = {}),
        e(this, void 0, void 0, function () {
          return n(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, K(t, r)];
              case 1:
                return [2, e.sent().toDataURL("image/jpeg", r.quality || 1)];
            }
          });
        })
      );
    }),
    (t.toPixelData = function (t, r) {
      return (
        void 0 === r && (r = {}),
        e(this, void 0, void 0, function () {
          var e, i, o, u;
          return n(this, function (n) {
            switch (n.label) {
              case 0:
                return (e = c(t, r)), (i = e.width), (o = e.height), [4, K(t, r)];
              case 1:
                return (u = n.sent()), [2, u.getContext("2d").getImageData(0, 0, i, o).data];
            }
          });
        })
      );
    }),
    (t.toPng = function (t, r) {
      return (
        void 0 === r && (r = {}),
        e(this, void 0, void 0, function () {
          return n(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, K(t, r)];
              case 1:
                return [2, e.sent().toDataURL()];
            }
          });
        })
      );
    }),
    (t.toSvg = X);
});
//# sourceMappingURL=html-to-image.js.map
