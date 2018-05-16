(function(e) {
  function t(n) {
    if (a[n]) return a[n].exports;
    var o = (a[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  var a = {};
  return (
    (t.m = e),
    (t.c = a),
    (t.i = function(e) {
      return e;
    }),
    (t.d = function(e, a, n) {
      t.o(e, a) ||
        Object.defineProperty(e, a, {
          configurable: !1,
          enumerable: !0,
          get: n
        });
    }),
    (t.n = function(e) {
      var a =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return t.d(a, "a", a), a;
    }),
    (t.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t.p = ""),
    t((t.s = 73))
  );
})([
  function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = (t.EVENT_DATE = new Date("Jun 10 2018 16:26:52 GMT+0900 (KST)")),
      n = (t.DEFAULT_ANIM_LENGTH = 250),
      o = (t.DEFAULT_EASING = mina.easeinout),
      r = (t.DEFAULT_COLOR = "#000000"),
      s = (t.DEFAULT_SECONDARY_COLOR = "#efefef"),
      i = (t.COLORS = {
        teal: "#1de9b6",
        orange: "#ff6c00",
        yellow: "#fdd835",
        purple: "#536dfe"
      }),
      l = (t.PATHS = {
        circle:
          "M119,66c0,29.3-23.7,53-53,53S13,95.3,13,66s23.7-53,53-53S119,36.7,119,66z",
        half_circle: "M13,66.3C13,36.8,36.8,13,66.3,13s53.3,23.8,53.3,53.3",
        quarter_circle: "M0,13c29.4,0,53.3,23.8,53.3,53.3",
        smaller_quarter_circle: "M40.4,0c0,22.3-18.1,40.4-40.4,40.4",
        three_fourth_circle:
          "M13,66.3C13,36.8,36.8,13,66.3,13s53.3,23.8,53.3,53.3v0c0,29.4-23.8,53.3-53.3,53.3",
        five_curve:
          "M66.3,66.3 M66.3,66.3 M0.1,13H13c29.4,0,53.3,23.8,53.3,53.3",
        zero_curve:
          "M13,66.3C13,36.8,36.8,13,66.3,13s53.3,23.8,53.3,53.3V145c0,29.4-23.8,53.3-53.3,53.3S13,174.4,13,145L13,66.3z",
        path_26: "M0,0v26",
        path_40: "M0,0v40.2",
        path_66: "M13,0v66",
        path_80: "M13,0v80",
        path_52: "M13,0v52",
        path_110: "M13,110.5V0",
        path_150: "M13,13l0,150.7",
        path_132: "M0,13h132",
        tube_123: "M0,0h123",
        tube_132: "M13.1,13L13,132.5",
        three_hover_curve:
          "M65.8,94.7c38.8,0,53.7,32.1,53.7,53.3c0,29.5-23.8,52.3-53.3,52.3S13,176.4,13,147l0-80.7C13,36.8,36.8,13,66.3,13s53.3,23.8,53.3,53.3v80.9",
        zero_half_curve:
          "M66.3,198.3C36.8,198.3,13,174.4,13,145V66.3C13,36.8,36.8,13,66.3,13"
      }),
      d = (t.COUNTS = { second: 1e3 }),
      u = (t.SELECTORS = {
        WRAPPER: ".js-countdown-wrapper",
        REFERENCE_CANVAS: ".js-reference-canvas",
        DAYS_LABEL: ".js-days-label",
        HOURS_LABEL: ".js-hours-label",
        MINUTES_LABEL: ".js-minutes-label",
        SECONDS_LABEL: ".js-seconds-label",
        SVG_CANVASES: ".js-svg-canvas",
        CONTROL_BUTTONS: ".js-control-button",
        START_BUTTON: ".js-start-button",
        GRID: ".js-svg-grid"
      }),
      c = (t.CLASSES = {
        SET_ONE_CANVASES: "js-set-one",
        SET_TWO_CANVASES: "js-set-two",
        SVG_NUMBER: "svg-number",
        ALT: "-alt"
      }),
      p = (t.COUNTDOWN_LABEL_TEXT = {
        PRE: "I/O countdown graphic:",
        DAYS: "days",
        HOURS: "hours",
        MINUTES: "minutes",
        SECONDS: "seconds",
        POST: "until I/O 2018",
        STARTED: "I/O 2018 has started"
      }),
      y = (t.GET_RANDOM_PROP = function(e) {
        var t = Object.keys(e),
          a = e[t[(t.length * Math.random()) << 0]];
        return a;
      }),
      g = (t.SHUFFLE_PROPS = function(e) {
        for (var t = Object.keys(e), a = t.length, n, o; 0 < a; )
          (o = Math.floor(Math.random() * a)),
            a--,
            (n = t[a]),
            (t[a] = t[o]),
            (t[o] = n);
        return t;
      }),
      m = (t.BROWSER = {
        isFirefox: -1 < navigator.userAgent.toLowerCase().indexOf("firefox")
      }),
      v = (t.SINGULARIZE = function(e, t) {
        return 1 === e ? t.slice(0, -1) : t;
      });
  },
  ,
  function(e, t, a) {
    "use strict";
    function n(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      s = a(0),
      i = (function() {
        function e(t) {
          o(this, e),
            (this.xPos = t.xPos || 0),
            (this.yPos = t.yPos || 0),
            (this.strokeWidth = t.strokeWidth || 1),
            (this.color = t.color || s.DEFAULT_COLOR),
            (this.shape = t.shape),
            (this.rotation = t.rotation || 0),
            (this.svgCanvas = t.svgCanvas),
            (this.animLength = t.animLength || s.DEFAULT_ANIM_LENGTH),
            (this.pathLength = null),
            (this.reverse = t.reverse || !1);
        }
        return (
          r(e, [
            {
              key: "init",
              value: function() {
                (this.s = Snap(this.svgCanvas)),
                  (this.path = this.s.path(this.shape)),
                  (this.pathLength = Snap.path.getTotalLength(this.path)),
                  (this.initialXPos = this.xPos),
                  (this.initialYPos = this.yPos),
                  (this.initialRotation = this.rotation),
                  (this.initialColor = this.color),
                  this.reverse
                    ? ((this.offsetStart = this.pathLength),
                      (this.offsetEnd = 3 * this.pathLength))
                    : ((this.offsetStart = 3 * this.pathLength),
                      (this.offsetEnd = this.pathLength)),
                  this.path.attr({
                    fill: "none",
                    stroke: this.color,
                    strokeWidth: 0,
                    strokeDasharray: this.pathLength,
                    strokeDashoffset: this.offsetStart
                  }),
                  (this.boundingBox = this.path.getBBox()),
                  this.path.transform(
                    "r" +
                      this.rotation +
                      "," +
                      this.boundingBox.cx +
                      "," +
                      this.boundingBox.cy
                  ),
                  (this.pathWrapperGroup = this.s.g(this.path)),
                  this.pathWrapperGroup.transform(
                    "t" + this.xPos + "," + this.yPos
                  );
              }
            },
            {
              key: "getElement",
              value: function() {
                return this.pathWrapperGroup;
              }
            },
            {
              key: "getProps",
              value: function() {
                return {
                  x: this.xPos,
                  y: this.yPos,
                  color: this.color,
                  shape: this.shape,
                  strokeWidth: this.strokeWidth,
                  pathLength: this.pathLength,
                  offsetStart: this.offsetStart,
                  offsetEnd: this.offsetEnd
                };
              }
            },
            {
              key: "setDasharray",
              value: function(e) {
                this.path.attr({ strokeDasharray: e });
              }
            },
            {
              key: "setDashoffset",
              value: function(e) {
                this.path.attr({ strokeDashoffset: e });
              }
            },
            {
              key: "setColor",
              value: function(e) {
                (this.color = e), this.path.attr({ stroke: this.color });
              }
            },
            {
              key: "setPosition",
              value: function(e, t) {
                (this.xPos = e),
                  (this.yPos = t),
                  this.path.transform("t" + this.xPos + "," + this.yPos);
              }
            },
            {
              key: "setStrokeWidth",
              value: function(e) {
                (this.strokeDashoffset = e), this.path.attr({ strokeWidth: e });
              }
            },
            {
              key: "setOpacity",
              value: function(e) {
                this.path.attr({ opacity: e });
              }
            },
            {
              key: "setScale",
              value: function(e, t) {
                this.path.attr({ transform: "s" + e + "," + t });
              }
            },
            {
              key: "animateOpacity",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e(t) {
                    var a =
                      1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.animLength;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.path.animateWithPromise(
                                  { opacity: t },
                                  a,
                                  s.DEFAULT_EASING
                                )
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateRotation",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e(t) {
                    var a =
                        1 < arguments.length && void 0 !== arguments[1]
                          ? arguments[1]
                          : this.animLength,
                      n;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = this.path.getBBox()),
                                (e.next = 3),
                                this.path.animateWithPromise(
                                  {
                                    transform:
                                      "r" + t + ", " + n.cx + ", " + n.cy
                                  },
                                  a,
                                  s.DEFAULT_EASING
                                )
                              );
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animatePath",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e(t) {
                    var a =
                      1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.animLength;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.path.animateWithPromise(
                                  { strokeDashoffset: t },
                                  a,
                                  s.DEFAULT_EASING
                                )
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateIn",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                this.setStrokeWidth(this.strokeWidth),
                                (e.next = 3),
                                this.animatePath(2 * this.pathLength)
                              );
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOut",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2), this.animatePath(this.offsetEnd)
                              );
                            case 2:
                              this.reset();
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOut",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.animateOpacity(0);
                            case 2:
                              this.reset();
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "reset",
              value: function() {
                this.path.attr({
                  strokeDashoffset: this.offsetStart,
                  strokeWidth: 0,
                  opacity: 1
                }),
                  this.path.transform(
                    "r" +
                      this.initialRotation +
                      "," +
                      this.boundingBox.cx +
                      "," +
                      this.boundingBox.cy
                  ),
                  this.pathWrapperGroup.transform(
                    "t" + this.initialXPos + "," + this.initialYPos
                  );
              }
            },
            {
              key: "setFinal",
              value: function() {
                this.setStrokeWidth(this.strokeWidth),
                  this.path.attr({
                    strokeDashoffset: 2 * this.pathLength,
                    opacity: 0
                  });
              }
            }
          ]),
          e
        );
      })();
    t.default = i;
  },
  ,
  ,
  function() {
    "use strict";
    (function(e) {
      var t = Math.pow;
      e.Snap.plugin(function(t, a) {
        (a.prototype.animateWithPromise = function() {
          for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          var n = this;
          return new Promise(function(e) {
            n.animate.apply(n, t.concat([e]));
          });
        }),
          (e.Snap.animateWithPromise = function() {
            for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
              t[a] = arguments[a];
            var n = this;
            return new Promise(function(e) {
              n.animate.apply(n, t.concat([e]));
            });
          });
      }),
        (e.mina.easeOutBack = function(e, a) {
          return (
            void 0 == a && (a = 1.70158), t(--e, 2) * ((a + 1) * e + a) + 1
          );
        }),
        (e.mina.easeInBack = function(e, a) {
          return void 0 == a && (a = 1.70158), t(e, 2) * ((a + 1) * e - a);
        });
    })(window);
  },
  function(e, t, a) {
    "use strict";
    function n(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      s = a(0),
      i = (function() {
        function e(t) {
          o(this, e),
            (this.xPos = t.xPos || 0),
            (this.yPos = t.yPos || 0),
            (this.tubeColor = t.tubeColor || s.DEFAULT_COLOR),
            (this.tubeEndColor = t.tubeEndColor || s.DEFAULT_SECONDARY_COLOR),
            (this.shape = t.shape),
            (this.rotation = t.rotation || 0),
            (this.strokeWidth = t.strokeWidth || 26),
            (this.lineCap = t.lineCap || "round"),
            (this.animLength = t.animLength || s.DEFAULT_ANIM_LENGTH),
            (this.svgCanvas = t.svgCanvas),
            (this.reverse = t.reverse || !1);
        }
        return (
          r(e, [
            {
              key: "init",
              value: function() {
                this.svgCanvas &&
                  ((this.s = Snap(this.svgCanvas)),
                  (this.path = this.s.path(this.shape)),
                  (this.pathLength = Snap.path.getTotalLength(this.path)),
                  (this.initialXPos = this.xPos),
                  (this.initialYPos = this.yPos),
                  (this.initialRotation = this.rotation),
                  this.reverse
                    ? ((this.pathStart = this.path.getPointAtLength(
                        this.pathLength
                      )),
                      (this.pathEnd = this.path.getPointAtLength(0)),
                      (this.offsetStart = this.pathLength),
                      (this.offsetEnd = 3 * this.pathLength),
                      (this.tubeEndStart = this.pathLength),
                      (this.tubeEndEnd = 0))
                    : ((this.pathStart = this.path.getPointAtLength(0)),
                      (this.pathEnd = this.path.getPointAtLength(
                        this.pathLength
                      )),
                      (this.offsetStart = 3 * this.pathLength),
                      (this.offsetEnd = this.pathLength),
                      (this.tubeEndStart = 0),
                      (this.tubeEndEnd = this.pathLength)),
                  (this.dasharray = this.pathLength),
                  this.path.attr({
                    fill: "none",
                    stroke: this.tubeColor,
                    strokeWidth: 0,
                    strokeLinecap: this.lineCap,
                    strokeDasharray: this.dasharray,
                    strokeDashoffset: this.offsetStart
                  }),
                  (this.tubeEnd = this.s.circle(
                    this.pathStart.x,
                    this.pathStart.y,
                    this.strokeWidth / 2
                  )),
                  this.tubeEnd.attr({
                    fill: this.tubeEndColor,
                    opacity: 0,
                    transform: "s1,1"
                  }),
                  (this.tubeGroup = this.s.g(this.path, this.tubeEnd)),
                  (this.boundingBox = this.tubeGroup.getBBox()),
                  this.tubeGroup.transform(
                    "r" +
                      this.rotation +
                      "," +
                      this.boundingBox.cx +
                      "," +
                      this.boundingBox.cy
                  ),
                  (this.tubeWrapperGroup = this.s.g(this.tubeGroup)),
                  this.tubeWrapperGroup.transform(
                    "t" + this.xPos + "," + this.yPos
                  ));
              }
            },
            {
              key: "getProps",
              value: function() {
                return {
                  tubeColor: this.path.attr("stroke"),
                  tubeStart: this.pathStart,
                  pathLength: this.pathLength
                };
              }
            },
            {
              key: "setColor",
              value: function(e, t) {
                (this.tubeColor = e),
                  (this.tubeEndColor = t),
                  this.path.attr({ stroke: e }),
                  this.tubeEnd.attr({ fill: t });
              }
            },
            {
              key: "setOpacity",
              value: function(e) {
                this.tubeGroup.attr({ opacity: e });
              }
            },
            {
              key: "setPosition",
              value: function(e, t) {
                (this.xPos = e),
                  (this.yPos = t),
                  this.tubeWrapperGroup.attr({ x: e, y: t });
              }
            },
            {
              key: "setDasharray",
              value: function(e) {
                (this.dasharray = e), this.path.attr({ strokeDasharray: e });
              }
            },
            {
              key: "setDashoffsetEnd",
              value: function(e) {
                this.offsetEnd = e;
              }
            },
            {
              key: "setDashoffsetStart",
              value: function(e) {
                (this.offsetStart = e), this.path.attr({ strokeDashoffset: e });
              }
            },
            {
              key: "setStrokeWidth",
              value: function(e) {
                this.path.attr({ strokeWidth: e });
              }
            },
            {
              key: "getElement",
              value: function() {
                return this.tubeWrapperGroup;
              }
            },
            {
              key: "animateOpacity",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e(t) {
                    var a =
                      1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.animLength;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                this.tubeEnd.attr({ opacity: t }),
                                (e.next = 3),
                                this.path.animateWithPromise(
                                  { opacity: t },
                                  a,
                                  s.DEFAULT_EASING
                                )
                              );
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateRotation",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e(t) {
                    var a =
                        1 < arguments.length && void 0 !== arguments[1]
                          ? arguments[1]
                          : this.animLength,
                      n;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = this.path.getBBox()),
                                this.tubeGroup.transform(
                                  "r0," + n.cx + "," + n.cy
                                ),
                                (e.next = 4),
                                this.tubeGroup.animateWithPromise(
                                  {
                                    transform: "r" + t + "," + n.cx + "," + n.cy
                                  },
                                  a,
                                  s.DEFAULT_EASING
                                )
                              );
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animatePosition",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e(t, a) {
                    var n =
                      2 < arguments.length && void 0 !== arguments[2]
                        ? arguments[2]
                        : this.animLength;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.tubeGroup.animateWithPromise(
                                  { x: t, y: a },
                                  n,
                                  s.DEFAULT_EASING
                                )
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateScaleTubeEnd",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e(t, a) {
                    var n =
                      2 < arguments.length && void 0 !== arguments[2]
                        ? arguments[2]
                        : this.animLength;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.tubeEnd.animateWithPromise(
                                  { transform: "s" + t + "," + a },
                                  n,
                                  s.DEFAULT_EASING
                                )
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animatePathTube",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e(t) {
                    var a =
                      1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.animLength;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.path.animateWithPromise(
                                  { strokeDashoffset: t },
                                  a,
                                  s.DEFAULT_EASING
                                )
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateMoveTubeEnd",
              value: function() {
                var e = this;
                Snap.animate(
                  this.tubeEndStart,
                  this.tubeEndEnd,
                  function(t) {
                    var a = e.path.getPointAtLength(t);
                    e.tubeEnd.attr({ cx: a.x, cy: a.y });
                  },
                  this.animLength,
                  s.DEFAULT_EASING
                );
              }
            },
            {
              key: "animatePathIn",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                this.tubeEnd.attr({ opacity: 1 }),
                                this.setOpacity(1),
                                this.setStrokeWidth(this.strokeWidth),
                                this.animateMoveTubeEnd(),
                                (e.next = 6),
                                this.animatePathTube(2 * this.pathLength)
                              );
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animatePathOut",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    var t =
                      0 < arguments.length && void 0 !== arguments[0]
                        ? arguments[0]
                        : this.animLength;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.animatePathTube(this.offsetEnd, t)
                              );
                            case 2:
                              return (
                                this.setStrokeWidth(0),
                                (e.next = 5),
                                this.animateScaleTubeEnd(0, 0, t)
                              );
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateIn",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.animatePathIn();
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOut",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    var t =
                      0 < arguments.length && void 0 !== arguments[0]
                        ? arguments[0]
                        : this.animLength;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.animatePathOut(t);
                            case 2:
                              this.reset();
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOut",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    var t =
                      0 < arguments.length && void 0 !== arguments[0]
                        ? arguments[0]
                        : this.animLength;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.animateOpacity(0, t);
                            case 2:
                              this.reset();
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "reset",
              value: function() {
                this.tubeEnd.attr({
                  cx: this.pathStart.x,
                  cy: this.pathStart.y,
                  transform: "s1,1",
                  opacity: 0
                }),
                  this.path.attr({
                    fill: "none",
                    stroke: this.tubeColor,
                    strokeWidth: 0,
                    strokeLinecap: this.lineCap,
                    strokeDasharray: this.dasharray,
                    strokeDashoffset: this.offsetStart,
                    opacity: 1
                  }),
                  this.tubeGroup.transform(
                    "r" +
                      this.initialRotation +
                      "," +
                      this.boundingBox.cx +
                      "," +
                      this.boundingBox.cy
                  ),
                  this.tubeWrapperGroup.transform(
                    "t" + this.initialXPos + "," + this.initialYPos
                  ),
                  this.setOpacity(1);
              }
            },
            {
              key: "setFinal",
              value: function() {
                this.tubeEnd.attr({
                  cx: this.pathEnd.x,
                  cy: this.pathEnd.y,
                  transform: "s1,1",
                  opacity: 0
                }),
                  this.path.attr({
                    strokeWidth: this.strokeWidth,
                    strokeDashoffset: 2 * this.pathLength,
                    opacity: 0
                  });
              }
            }
          ]),
          e
        );
      })();
    t.default = i;
  },
  ,
  function(e, t, a) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function() {
      function e(e, t) {
        for (var a = 0, n; a < t.length; a++)
          (n = t[a]),
            (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
      }
      return function(t, a, n) {
        return a && e(t.prototype, a), n && e(t, n), t;
      };
    })();
    a(5);
    var s = a(19),
      i = n(s),
      l = a(20),
      d = n(l),
      u = a(21),
      c = n(u),
      p = a(22),
      y = n(p),
      g = a(17),
      m = n(g),
      v = a(18),
      h = n(v),
      C = a(23),
      O = n(C),
      S = (function() {
        function e(t) {
          o(this, e), (this.svg = t), (this.animatedPattern = null);
        }
        return (
          r(e, [
            {
              key: "init",
              value: function() {
                this.attachEvents(),
                  this.svg.classList.contains("animated-pattern--home-1")
                    ? (this.animatedPattern = new i.default(this.svg))
                    : this.svg.classList.contains("animated-pattern--home-2")
                      ? (this.animatedPattern = new d.default(this.svg))
                      : this.svg.classList.contains("animated-pattern--home-3")
                        ? (this.animatedPattern = new c.default(this.svg))
                        : this.svg.classList.contains(
                            "animated-pattern--home-4"
                          )
                          ? (this.animatedPattern = new y.default(this.svg))
                          : this.svg.classList.contains(
                              "animated-pattern--attending"
                            )
                            ? (this.animatedPattern = new m.default(this.svg))
                            : this.svg.classList.contains(
                                "animated-pattern--extended"
                              )
                              ? (this.animatedPattern = new h.default(this.svg))
                              : this.svg.classList.contains(
                                  "animated-pattern--registration"
                                ) &&
                                (this.animatedPattern = new O.default(
                                  this.svg
                                )),
                  null !== this.animatedPattern && this.animatedPattern.init();
              }
            },
            {
              key: "attachEvents",
              value: function() {
                this.svg.addEventListener(
                  "mouseenter",
                  this.mouseenter.bind(this)
                ),
                  this.svg.addEventListener(
                    "mouseleave",
                    this.mouseleave.bind(this)
                  ),
                  this.svg.addEventListener(
                    "touchstart",
                    this.mouseenter.bind(this)
                  ),
                  this.svg.addEventListener(
                    "touchend",
                    this.mouseleave.bind(this)
                  );
              }
            },
            {
              key: "mouseenter",
              value: function() {
                null !== this.animatedPattern && this.animatedPattern.play();
              }
            },
            {
              key: "mouseleave",
              value: function() {
                null !== this.animatedPattern && this.animatedPattern.end();
              }
            },
            {
              key: "playIntro",
              value: function() {
                null !== this.animatedPattern &&
                  this.animatedPattern.playIntro &&
                  this.animatedPattern.playIntro();
              }
            }
          ]),
          e
        );
      })();
    t.default = S;
  },
  function(e, t, a) {
    "use strict";
    function n(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      s = a(0),
      i = (function() {
        function e(t) {
          o(this, e),
            (this.xPos = t.xPos || 0),
            (this.yPos = t.yPos || 0),
            (this.width = t.width),
            (this.height = t.height),
            (this.color = t.color || s.DEFAULT_COLOR),
            (this.rotation = t.rotation || 0),
            (this.animLength = t.animLength || s.DEFAULT_ANIM_LENGTH),
            (this.svgCanvas = t.svgCanvas);
        }
        return (
          r(e, [
            {
              key: "init",
              value: function() {
                this.svgCanvas &&
                  ((this.s = Snap(this.svgCanvas)),
                  (this.rect = this.s.rect(
                    this.xPos,
                    this.yPos,
                    this.width,
                    this.height
                  )),
                  this.rect.attr({
                    fill: this.color,
                    transform: "s0r" + this.rotation
                  }),
                  (this.initialXPos = this.xPos),
                  (this.initialYPos = this.yPos),
                  (this.initialWidth = this.width),
                  (this.initialHeight = this.height),
                  (this.initialColor = this.color));
              }
            },
            {
              key: "getElement",
              value: function() {
                return this.rect;
              }
            },
            {
              key: "getProps",
              value: function() {
                var e = this.rect.getBBox();
                return {
                  color: this.color,
                  x: this.xPos,
                  y: this.yPos,
                  boundingBox: e
                };
              }
            },
            {
              key: "setPosition",
              value: function(e, t) {
                (this.xPos = e),
                  (this.yPos = t),
                  this.rect.attr({ x: this.xPos, y: this.yPos });
              }
            },
            {
              key: "setScale",
              value: function(e, t) {
                this.rect.attr({
                  transform: "s" + e + "," + t + "r" + this.rotation
                });
              }
            },
            {
              key: "setColor",
              value: function(e) {
                (this.color = e), this.rect.attr({ fill: e });
              }
            },
            {
              key: "setOpacity",
              value: function(e) {
                this.rect.attr({ opacity: e });
              }
            },
            {
              key: "animateOpacity",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e(t) {
                    var a =
                      1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.animLength;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.rect.animateWithPromise(
                                  { opacity: t },
                                  a,
                                  s.DEFAULT_EASING
                                )
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateRotation",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e(t) {
                    var a =
                        1 < arguments.length && void 0 !== arguments[1]
                          ? arguments[1]
                          : this.animLength,
                      n;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = this.rect.getBBox()),
                                (e.next = 3),
                                this.rect.animateWithPromise(
                                  {
                                    transform: "r" + t + "," + n.cx + "," + n.cy
                                  },
                                  a,
                                  s.DEFAULT_EASING
                                )
                              );
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animatePosition",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e(t, a) {
                    var n =
                        2 < arguments.length && void 0 !== arguments[2]
                          ? arguments[2]
                          : this.animLength,
                      o;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (o = this.rect.transform().localMatrix),
                                (e.next = 3),
                                this.rect.animateWithPromise(
                                  {
                                    transform:
                                      "t" +
                                      t +
                                      "," +
                                      a +
                                      "s" +
                                      o.split().scalex +
                                      "," +
                                      o.split().scaley
                                  },
                                  n,
                                  s.DEFAULT_EASING
                                )
                              );
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateScale",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e(t, a, n, o) {
                    var r =
                        4 < arguments.length && void 0 !== arguments[4]
                          ? arguments[4]
                          : this.animLength,
                      i,
                      l,
                      d;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (i = this.rect.getBBox()),
                                (l = n || i.cx),
                                (d = o || i.cy),
                                (e.next = 5),
                                this.rect.animateWithPromise(
                                  {
                                    transform:
                                      "s" + t + "," + a + ", " + l + ", " + d
                                  },
                                  r,
                                  s.DEFAULT_EASING
                                )
                              );
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateIn",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.animateScale(
                                  1,
                                  1,
                                  null,
                                  null,
                                  this.animLength
                                )
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOut",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.animateScale(
                                  0,
                                  0,
                                  null,
                                  null,
                                  this.animLength
                                )
                              );
                            case 2:
                              this.reset();
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOut",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.animateOpacity(0);
                            case 2:
                              this.reset();
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "reset",
              value: function() {
                this.setPosition(this.initialXPos, this.initialYPos),
                  this.setOpacity(1),
                  this.setScale(0, 0);
              }
            },
            {
              key: "setFinal",
              value: function() {
                this.setScale(1, 1), this.setOpacity(0);
              }
            }
          ]),
          e
        );
      })();
    t.default = i;
  },
  ,
  ,
  function(e, t, a) {
    "use strict";
    function n(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      s = a(0),
      i = (function() {
        function e(t) {
          o(this, e),
            (this.xPos = t.xPos || 0),
            (this.yPos = t.yPos || 0),
            (this.radius = t.radius || 0),
            (this.color = t.color || s.DEFAULT_COLOR),
            (this.strokeWidth = t.strokeWidth || 1),
            (this.svgCanvas = t.svgCanvas),
            (this.animLength = t.animLength || s.DEFAULT_ANIM_LENGTH);
        }
        return (
          r(e, [
            {
              key: "init",
              value: function() {
                this.svgCanvas &&
                  ((this.s = Snap(this.svgCanvas)),
                  (this.ring = this.s.circle(
                    this.xPos,
                    this.yPos,
                    this.radius
                  )),
                  this.ring.attr({
                    fill: "none",
                    stroke: this.color,
                    strokeWidth: 0
                  }),
                  (this.initialXPos = this.xPos),
                  (this.initialYPos = this.yPos),
                  (this.initialRadius = this.radius),
                  (this.initialColor = this.color));
              }
            },
            {
              key: "getProps",
              value: function() {
                return {
                  color: this.color,
                  x: this.xPos,
                  y: this.yPos,
                  boundingBox: this.ring.getBBox()
                };
              }
            },
            {
              key: "setColor",
              value: function(e) {
                (this.color = e), this.ring.attr({ stroke: this.color });
              }
            },
            {
              key: "setPosition",
              value: function(e, t) {
                (this.xPos = e),
                  (this.yPos = t),
                  this.ring.attr({ x: this.xPos, y: this.yPos });
              }
            },
            {
              key: "setStrokeWidth",
              value: function(e) {
                this.ring.attr({ strokeWidth: e });
              }
            },
            {
              key: "setRadius",
              value: function(e) {
                this.ring.attr({ r: e });
              }
            },
            {
              key: "animateOpacity",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e(t) {
                    var a =
                      1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.animLength;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.ring.animateWithPromise(
                                  { opacity: t },
                                  a,
                                  s.DEFAULT_EASING
                                )
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animatePosition",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e(t, a) {
                    var n =
                      2 < arguments.length && void 0 !== arguments[2]
                        ? arguments[2]
                        : this.animLength;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.ring.animateWithPromise(
                                  { transform: "t" + t + "," + a },
                                  n,
                                  s.DEFAULT_EASING
                                )
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateRadius",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e(t) {
                    var a =
                      1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.animLength;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.ring.animateWithPromise(
                                  { r: t },
                                  a,
                                  s.DEFAULT_EASING
                                )
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateStrokeWidth",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e(t) {
                    var a =
                      1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.animLength;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.ring.animateWithPromise(
                                  {
                                    strokeWidth: s.BROWSER.isFirefox
                                      ? t
                                      : t + "px"
                                  },
                                  a,
                                  s.DEFAULT_EASING
                                )
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "getElement",
              value: function() {
                return this.ring;
              }
            },
            {
              key: "animateIn",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.animateStrokeWidth(
                                  this.strokeWidth,
                                  this.animLength
                                )
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOut",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.animateStrokeWidth(0, this.animLength)
                              );
                            case 2:
                              this.reset();
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOut",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              this.animateOpacity(0), this.reset();
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "reset",
              value: function() {
                this.ring.attr({
                  strokeWidth: 0,
                  x: this.initialXPos,
                  y: this.initialYPos,
                  r: this.initialRadius,
                  transform: "t0,0",
                  opacity: 1
                });
              }
            },
            {
              key: "setFinal",
              value: function() {
                this.ring.attr({ strokeWidth: this.strokeWidth, opacity: 0 });
              }
            }
          ]),
          e
        );
      })();
    t.default = i;
  },
  function(e, t, a) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function() {
      function e(e, t) {
        for (var a = 0, n; a < t.length; a++)
          (n = t[a]),
            (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
      }
      return function(t, a, n) {
        return a && e(t.prototype, a), n && e(t, n), t;
      };
    })();
    a(5);
    var s = a(40),
      i = n(s),
      l = a(38),
      d = n(l),
      u = a(36),
      c = n(u),
      p = a(35),
      y = n(p),
      g = a(41),
      m = n(g),
      v = a(37),
      h = n(v),
      C = a(39),
      O = n(C),
      S = a(34),
      P = n(S),
      L = (function() {
        function e(t) {
          var a =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
          o(this, e),
            (this.svg = t),
            (this.animatedIcon = null),
            (this.options = a);
        }
        return (
          r(e, [
            {
              key: "init",
              value: function() {
                this.attachEvents(),
                  this.svg.classList.contains("animated-icon--platforms")
                    ? (this.animatedIcon = new i.default(this.svg))
                    : this.svg.classList.contains("animated-icon--grow-earn")
                      ? (this.animatedIcon = new d.default(this.svg))
                      : this.svg.classList.contains(
                          "animated-icon--build-on-mobile"
                        )
                        ? (this.animatedIcon = new c.default(this.svg))
                        : this.svg.classList.contains(
                            "animated-icon--beyond-mobile"
                          )
                          ? (this.animatedIcon = new y.default(this.svg))
                          : this.svg.classList.contains(
                              "animated-icon--sandbox"
                            )
                            ? (this.animatedIcon = new m.default(this.svg))
                            : this.svg.classList.contains(
                                "animated-icon--codelabs"
                              )
                              ? (this.animatedIcon = new h.default(this.svg))
                              : this.svg.classList.contains(
                                  "animated-icon--office-hours"
                                )
                                ? (this.animatedIcon = new O.default(this.svg))
                                : this.svg.classList.contains(
                                    "animated-icon--after-hours"
                                  ) &&
                                  (this.animatedIcon = new P.default(this.svg)),
                  null !== this.animatedIcon &&
                    (this.animatedIcon.init(),
                    this.options.playOnLoad &&
                      this.animatedIcon.runAnimation());
              }
            },
            {
              key: "attachEvents",
              value: function() {
                this.svg.addEventListener(
                  "mouseenter",
                  this.mouseenter.bind(this)
                ),
                  this.svg.addEventListener(
                    "mouseleave",
                    this.mouseleave.bind(this)
                  ),
                  this.svg.addEventListener(
                    "touchstart",
                    this.mouseenter.bind(this)
                  ),
                  this.svg.addEventListener(
                    "touchend",
                    this.mouseleave.bind(this)
                  );
              }
            },
            {
              key: "mouseenter",
              value: function() {
                null !== this.animatedIcon && this.animatedIcon.play();
              }
            },
            {
              key: "mouseleave",
              value: function() {
                null !== this.animatedIcon && this.animatedIcon.end();
              }
            }
          ]),
          e
        );
      })();
    t.default = L;
  },
  ,
  ,
  function(e, t, a) {
    "use strict";
    function n(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      s = a(0),
      i = (function() {
        function e(t) {
          o(this, e),
            (this.xPos = t.xPos || 0),
            (this.yPos = t.yPos || 0),
            (this.rows = t.rows || 1),
            (this.cols = t.cols || 1),
            (this.color = t.color || s.DEFAULT_COLOR),
            (this.animLength = t.animLength || s.DEFAULT_ANIM_LENGTH),
            (this.gap = t.gap || 13),
            (this.strokeWidth = t.strokeWidth || 2.5),
            (this.totalLines = this.rows + this.cols - 1),
            (this.lineCap = t.lineCap || "round"),
            (this.svgCanvas = t.svgCanvas),
            (this.lineGroup = null),
            (this.direction = t.direction || "forward"),
            (this.lines = []);
        }
        return (
          r(e, [
            {
              key: "init",
              value: function() {
                this.svgCanvas &&
                  ((this.s = Snap(this.svgCanvas)),
                  this.drawLines(this.rows, this.cols, this.gap));
              }
            },
            {
              key: "getProps",
              value: function() {
                return {
                  color: this.lineGroup.children()[0].attr("color"),
                  x: this.lineGroup.attr("x"),
                  y: this.lineGroup.attr("y")
                };
              }
            },
            {
              key: "setColor",
              value: function(e) {
                this.color = e;
                for (var t = 0; t < this.lineGroup.children().length; t++)
                  this.lineGroup.children()[t].attr({ stroke: e });
              }
            },
            {
              key: "setPosition",
              value: function(e, t) {
                (this.xPos = e),
                  (this.yPos = t),
                  this.lineGroup.attr({ x: e, y: t });
              }
            },
            {
              key: "setStrokeWidth",
              value: function(e) {
                this.strokeWidth = e;
                for (var t = 0; t < this.lineGroup.children().length; t++)
                  this.lineGroup.children()[t].attr({ strokeWidth: e });
              }
            },
            {
              key: "setGap",
              value: function(e) {
                (this.gap = e), this.drawLines(this.rows, this.cols, e);
              }
            },
            {
              key: "setSize",
              value: function(e, t) {
                (this.rows = e),
                  (this.cols = t),
                  this.drawLines(e, t, this.gap);
              }
            },
            {
              key: "drawLines",
              value: function(e, t, a) {
                this.lineGroup = this.s.g();
                for (var n = void 0, o = 0; o < this.totalLines; o++) {
                  var r = 0 == o % 2,
                    s = void 0,
                    i = void 0,
                    l = void 0,
                    d = void 0;
                  "forward" === this.direction
                    ? (o < e
                        ? ((s = 0), (i = (o + 1) * a))
                        : ((s = (o + 1 - e) * a), (i = e * a)),
                      o < t
                        ? ((l = (o + 1) * a), (d = 0))
                        : ((l = t * a), (d = (o + 1 - t) * a)))
                    : "back" === this.direction &&
                      (o < e
                        ? ((s = 0), (i = (e - (o + 1)) * a))
                        : ((s = (o + 1 - e) * a), (i = 0)),
                      o < t
                        ? ((l = (o + 1) * a), (d = e * a))
                        : ((l = t * a), (d = (this.totalLines - o) * a))),
                    (n = r ? this.s.line(s, i, l, d) : this.s.line(l, d, s, i));
                  var u = Math.ceil(this.getLineLength(n));
                  n.attr({
                    opacity: 0,
                    stroke: this.color,
                    strokeWidth: this.strokeWidth,
                    strokeLinecap: this.lineCap,
                    "stroke-dasharray": u + "px",
                    "stroke-dashoffset": u + "px"
                  }),
                    this.lineGroup.add(n),
                    this.lines.push({ line: n, lineLength: u, nextLine: null });
                }
                for (var c = 0; c < this.lines.length; c++)
                  this.lines[c].nextLine = this.lines[c + 1];
                this.lineGroup.transform("t" + this.xPos + "," + this.yPos);
              }
            },
            {
              key: "getLineLength",
              value: function(e) {
                var t = e.attr("x2") - e.attr("x1"),
                  a = e.attr("y2") - e.attr("y1");
                return Math.sqrt(t * t + a * a);
              }
            },
            {
              key: "getElement",
              value: function() {
                return this.lineGroup;
              }
            },
            {
              key: "setStrokeDashOffset",
              value: function(e, t) {
                e.line.attr({ strokeDashoffset: t + "px" });
              }
            },
            {
              key: "setStrokeDashOffsetAll",
              value: function(e) {
                for (var t = 0; t < this.lines.length; t++)
                  this.setStrokeDashOffset(this.lines[t], e);
              }
            },
            {
              key: "setOpacity",
              value: function(e, t) {
                e.line.attr({ opacity: t });
              }
            },
            {
              key: "setOpacityAll",
              value: function(e) {
                for (var t = 0; t < this.lines.length; t++)
                  this.setOpacity(this.lines[t], e);
              }
            },
            {
              key: "animateOpacity",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e(t) {
                    var a =
                      1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.animLength;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.lineGroup
                                  .animateWithPromise(
                                    { opacity: t },
                                    a,
                                    s.DEFAULT_EASING
                                  )
                                  .then(this.setOpacityAll(t))
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animatePosition",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e(t, a) {
                    var n =
                      2 < arguments.length && void 0 !== arguments[2]
                        ? arguments[2]
                        : this.animLength;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.lineGroup.animateWithPromise(
                                  { x: t, y: a },
                                  n,
                                  s.DEFAULT_EASING
                                )
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateSwipeIn",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    var t = this,
                      a;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                this.setOpacityAll(1),
                                (a = this.lines.map(function(e) {
                                  return t.swipeInLine(e);
                                })),
                                (e.next = 4),
                                Promise.all(a)
                              );
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateSwipeOut",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    var t = this,
                      a;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (a = this.lines.map(function(e) {
                                  return t.swipeOutLine(e);
                                })),
                                (e.next = 3),
                                Promise.all(a)
                              );
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "swipeInLine",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e(t) {
                    var a =
                      1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.animLength;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                t.line.animateWithPromise(
                                  { strokeDashoffset: "0px" },
                                  a,
                                  s.DEFAULT_EASING
                                )
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "swipeOutLine",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e(t) {
                    var a =
                      1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.animLength;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                t.line.animateWithPromise(
                                  { strokeDashoffset: t.lineLength + "px" },
                                  a,
                                  s.DEFAULT_EASING
                                )
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateIn",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.animateSwipeIn();
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOut",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.animateSwipeOut();
                            case 2:
                              this.reset();
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOut",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.animateOpacity(0);
                            case 2:
                              this.reset();
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "reset",
              value: function() {
                this.lineGroup.attr({ opacity: 1 }), this.setOpacityAll(0);
                for (var e = 0; e < this.lines.length; e++)
                  this.lines[e].line.attr({
                    "stroke-dashoffset": this.lines[e].lineLength + "px"
                  });
              }
            },
            {
              key: "setFinal",
              value: function() {
                this.setStrokeDashOffsetAll(0), this.setOpacityAll(0);
              }
            }
          ]),
          e
        );
      })();
    t.default = i;
  },
  function(e, t) {
    "use strict";
    function a(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function n(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    var o = Math.ceil;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      s = 400,
      i = (function() {
        function e(t) {
          n(this, e),
            (this.svg = t),
            (this.isPlaying = !1),
            (this.isHovered = !1),
            (this.isIntroComplete = !1),
            (this.snapCanvas = Snap(this.svg)),
            (this.rects = this.snapCanvas.selectAll("#attending-rects rect")),
            (this.dot = this.snapCanvas.select("#attending-dot")),
            (this.tubeTop = this.snapCanvas.select("#attending-tube-top")),
            (this.tubeBottom = this.snapCanvas.select(
              "#attending-tube-bottom"
            )),
            (this.tubeGroup = this.snapCanvas.select("#attending-tube-group"));
        }
        return (
          r(e, [
            {
              key: "init",
              value: function() {
                (this.tubeTopPathLength = o(
                  Snap.path.getTotalLength(this.tubeTop)
                )),
                  (this.tubeBottomPathLength = o(
                    Snap.path.getTotalLength(this.tubeBottom)
                  )),
                  this.tubeTop.attr(
                    "stroke-dashoffset",
                    3 * this.tubeTopPathLength - this.tubeTopPathLength / 4
                  ),
                  this.tubeTop.attr("stroke-dasharray", this.tubeTopPathLength),
                  this.tubeBottom.attr(
                    "stroke-dasharray",
                    this.tubeBottomPathLength
                  ),
                  this.tubeGroup.attr("opacity", 1);
              }
            },
            {
              key: "play",
              value: function() {
                (this.isHovered = !0),
                  this.isPlaying ||
                    !this.isIntroComplete ||
                    ((this.isPlaying = !0), this.runAnimation());
              }
            },
            {
              key: "playIntro",
              value: function() {
                this.clear(), this.animateInDot(), this.animateResting();
              }
            },
            {
              key: "runAnimation",
              value: function() {
                var e = this;
                this.clear(),
                  this.dot.attr({ r: 0, cx: 0, cy: 78 }),
                  this.animateInDot(),
                  setTimeout(function() {
                    e.animateInRects();
                  }, 100),
                  setTimeout(function() {
                    e.animateTubesAndDot();
                  }, 600);
              }
            },
            {
              key: "animateInDot",
              value: function() {
                this.dot.animate({ r: 38 / 2 }, s, mina.easeOutBack);
              }
            },
            {
              key: "animateInRects",
              value: function() {
                this.rects.forEach(function(e) {
                  e.animate({ transform: "s1,1" }, s, mina.easeinout);
                });
              }
            },
            {
              key: "animateOutRects",
              value: function() {
                this.rects.forEach(function(e) {
                  e.animate({ transform: "s0,0" }, s, mina.easeinout);
                });
              }
            },
            {
              key: "animateTubesAndDot",
              value: function() {
                var e = this;
                this.tubeTop.animate(
                  { strokeDashoffset: 2 * this.tubeTopPathLength },
                  3 * s,
                  mina.easeinout
                ),
                  this.tubeBottom.animate(
                    { strokeDashoffset: 2 * this.tubeBottomPathLength },
                    s,
                    mina.easeinout,
                    function() {
                      e.animateOutRects();
                    }
                  ),
                  Snap.animate(
                    0,
                    this.tubeTopPathLength,
                    function(t) {
                      var a = Snap.path.getPointAtLength(e.tubeTop, t);
                      e.dot.attr("cx", a.x), e.dot.attr("cy", a.y);
                    },
                    3 * s,
                    mina.easeinout,
                    function() {
                      e.tubeBottom.attr(
                        "stroke-dashoffset",
                        e.tubeBottomPathLength
                      ),
                        e.reset();
                    }
                  );
              }
            },
            {
              key: "animateResting",
              value: function() {
                var e = this;
                this.animateInRects(),
                  this.tubeTop.animate(
                    {
                      strokeDashoffset:
                        3 * this.tubeTopPathLength - this.tubeTopPathLength / 4
                    },
                    s,
                    mina.easeinout
                  ),
                  this.tubeBottom.animate(
                    { strokeDashoffset: 2 * this.tubeBottomPathLength },
                    s,
                    mina.easeinout
                  ),
                  Snap.animate(
                    0,
                    this.tubeTopPathLength / 4,
                    function(t) {
                      var a = Snap.path.getPointAtLength(e.tubeTop, t);
                      e.dot.attr("cx", a.x), e.dot.attr("cy", a.y);
                    },
                    s,
                    mina.easeinout,
                    function() {
                      (e.isIntroComplete = !0), (e.isPlaying = !1);
                    }
                  );
              }
            },
            {
              key: "setTubeDashOffset",
              value: function() {
                this.tubeTop.attr(
                  "stroke-dashoffset",
                  3 * this.tubeTopPathLength
                ),
                  this.tubeBottom.attr(
                    "stroke-dashoffset",
                    3 * this.tubeBottomPathLength
                  );
              }
            },
            {
              key: "clear",
              value: function() {
                this.setTubeDashOffset(),
                  this.rects.forEach(function(e) {
                    e.attr({ transform: "s0,0" });
                  });
              }
            },
            {
              key: "animateOut",
              value: function() {
                var e = this;
                return (
                  (this.isPlaying = !0),
                  this.tubeTop.animateWithPromise(
                    { "stroke-dashoffset": this.tubeTopPathLength },
                    3 * s,
                    mina.easeinout
                  ),
                  Snap.animateWithPromise(
                    2 * this.tubeTopPathLength,
                    this.tubeTopPathLength,
                    function(t) {
                      var a = Snap.path.getPointAtLength(e.tubeTop, t);
                      e.dot.attr("cx", a.x), e.dot.attr("cy", a.y);
                    },
                    3 * s,
                    mina.easeinout
                  ).then(function() {
                    e.rects.forEach(function(e) {
                      e.animate({ transform: "s0,0" }, s, mina.easeinout);
                    }),
                      e.clear();
                  })
                );
              }
            },
            {
              key: "reset",
              value: (function() {
                var e = a(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!this.isHovered) {
                                e.next = 6;
                                break;
                              }
                              return (e.next = 3), this.animateOut();
                            case 3:
                              this.runAnimation(), (e.next = 9);
                              break;
                            case 6:
                              return (e.next = 8), this.animateOut();
                            case 8:
                              this.animateResting();
                            case 9:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "end",
              value: function() {
                this.isHovered = !1;
              }
            }
          ]),
          e
        );
      })();
    t.default = i;
  },
  function(e, t) {
    "use strict";
    function a(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function n(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      r = 400,
      s = [{ x: 426, y: 246 }, { x: 244, y: 66 }, { x: 68, y: 308 }],
      i = (function() {
        function e(t) {
          n(this, e),
            (this.svg = t),
            (this.isPlaying = !1),
            (this.isHovered = !1),
            (this.isIntroComplete = !1),
            (this.snapCanvas = Snap(this.svg)),
            (this.line = this.snapCanvas.select("#extended-line")),
            (this.dot = this.snapCanvas.select("#extended-dot")),
            (this.state = 2),
            (this.totalStates = s.length);
        }
        return (
          o(e, [
            { key: "init", value: function() {} },
            {
              key: "play",
              value: function() {
                (this.isHovered = !0),
                  this.isPlaying ||
                    !this.isIntroComplete ||
                    ((this.isPlaying = !0), this.runAnimation());
              }
            },
            {
              key: "playIntro",
              value: (function() {
                var e = a(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.pulse();
                            case 2:
                              return (
                                this.line.attr("opacity", 1),
                                (this.state = 0),
                                (e.next = 6),
                                this.expandLine()
                              );
                            case 6:
                              this.isIntroComplete = !0;
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "runAnimation",
              value: function() {
                this.step();
              }
            },
            {
              key: "pulse",
              value: (function() {
                var e = a(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.dot.animateWithPromise(
                                  { r: 19 },
                                  r,
                                  mina.easeOutBack
                                )
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "step",
              value: (function() {
                var e = a(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (this.state =
                                  this.state + 1 < this.totalStates
                                    ? this.state + 1
                                    : 0),
                                (e.next = 3),
                                this.collapseLine()
                              );
                            case 3:
                              return (e.next = 5), this.expandLine();
                            case 5:
                              this.reset();
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "collapseLine",
              value: (function() {
                var e = a(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.line.animateWithPromise(
                                  { x1: s[this.state].x, y1: s[this.state].y },
                                  r,
                                  mina.easeinout
                                )
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "expandLine",
              value: (function() {
                var e = a(
                  regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t =
                                  this.state === this.totalStates - 1
                                    ? s[0]
                                    : s[this.state + 1]),
                                this.dot.animate(
                                  { cx: t.x, cy: t.y },
                                  r,
                                  mina.easeinout
                                ),
                                (e.next = 4),
                                this.line.animateWithPromise(
                                  { x2: t.x, y2: t.y },
                                  r,
                                  mina.easeinout
                                )
                              );
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "reset",
              value: function() {
                var e = this;
                this.isHovered
                  ? setTimeout(function() {
                      e.runAnimation();
                    }, 400)
                  : (this.isPlaying = !1);
              }
            },
            {
              key: "end",
              value: function() {
                this.isHovered = !1;
              }
            }
          ]),
          e
        );
      })();
    t.default = i;
  },
  function(e, t) {
    "use strict";
    function a(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function n(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    var o = Math.ceil;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      s = 500,
      i = (function() {
        function e(t) {
          n(this, e),
            (this.svg = t),
            (this.isPlaying = !1),
            (this.isHovered = !1),
            (this.snapCanvas = Snap(this.svg)),
            (this.tube1Group = this.snapCanvas.select("#home-1-tube-1")),
            (this.tube2Group = this.snapCanvas.select("#home-1-tube-2")),
            (this.tube1 = this.tube1Group.select("path")),
            (this.tube2 = this.tube2Group.select("path")),
            (this.dot1 = this.tube1Group.select("circle")),
            (this.dot2 = this.tube2Group.select("circle"));
        }
        return (
          r(e, [
            {
              key: "init",
              value: function() {
                (this.dotRadius = this.dot1.attr("r")),
                  (this.tube1.pathLength = o(
                    Snap.path.getTotalLength(this.tube1)
                  )),
                  (this.tube2.pathLength = o(
                    Snap.path.getTotalLength(this.tube2)
                  )),
                  this.tube1.attr("stroke-dasharray", this.tube1.pathLength),
                  this.tube2.attr("stroke-dasharray", this.tube2.pathLength),
                  this.setTubeDashOffset();
              }
            },
            {
              key: "play",
              value: function() {
                (this.isHovered = !0),
                  this.isPlaying ||
                    ((this.isPlaying = !0), this.runAnimation());
              }
            },
            {
              key: "runAnimation",
              value: (function() {
                var e = a(
                  regeneratorRuntime.mark(function e() {
                    var t = this;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.animatePath1();
                            case 2:
                              return (
                                (e.next = 4),
                                new Promise(function() {
                                  return setTimeout(function() {
                                    t.animatePath2();
                                  }, s / 4);
                                }).then(this.reset())
                              );
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animatePath1",
              value: (function() {
                var e = a(
                  regeneratorRuntime.mark(function e() {
                    var t = this,
                      a;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.animateTube(
                                  this.tube1,
                                  this.tube1.pathLength
                                )
                              );
                            case 2:
                              return (
                                (e.next = 4), this.animateDot(this.dot1, 0)
                              );
                            case 4:
                              return (
                                (a = this.tube1.getPointAtLength(
                                  this.tube1.pathLength
                                )),
                                this.dot1.attr({ cx: a.x, cy: a.y }),
                                (e.next = 8),
                                this.animateDot(this.dot1, this.dotRadius)
                              );
                            case 8:
                              return (
                                (e.next = 10),
                                Promise.all([
                                  this.animateTube(
                                    this.tube1,
                                    2 * this.tube1.pathLength
                                  ),
                                  Snap.animateWithPromise(
                                    0,
                                    this.tube1.pathLength,
                                    function(e) {
                                      var a = Snap.path.getPointAtLength(
                                        t.tube1,
                                        t.tube1.pathLength - e
                                      );
                                      t.dot1.attr("cx", a.x),
                                        t.dot1.attr("cy", a.y);
                                    },
                                    s,
                                    mina.easeinout
                                  )
                                ])
                              );
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animatePath2",
              value: (function() {
                var e = a(
                  regeneratorRuntime.mark(function e() {
                    var t = this,
                      a;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.animateTube(
                                  this.tube2,
                                  this.tube2.pathLength
                                )
                              );
                            case 2:
                              return (
                                (e.next = 4), this.animateDot(this.dot2, 0)
                              );
                            case 4:
                              return (
                                (a = this.tube2.getPointAtLength(0)),
                                this.dot2.attr({ cx: a.x, cy: a.y }),
                                (e.next = 8),
                                this.animateDot(this.dot2, this.dotRadius)
                              );
                            case 8:
                              return (
                                (e.next = 10),
                                Promise.all([
                                  this.animateTube(this.tube2, 0),
                                  Snap.animateWithPromise(
                                    0,
                                    this.tube2.pathLength,
                                    function(e) {
                                      var a = Snap.path.getPointAtLength(
                                        t.tube2,
                                        e
                                      );
                                      t.dot2.attr("cx", a.x),
                                        t.dot2.attr("cy", a.y);
                                    },
                                    s,
                                    mina.easeinout
                                  )
                                ])
                              );
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateDot",
              value: (function() {
                var e = a(
                  regeneratorRuntime.mark(function e(t, a) {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                t.animateWithPromise(
                                  { r: a },
                                  s,
                                  0 === a ? mina.easeInBack : mina.easeOutBack
                                )
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateTube",
              value: (function() {
                var e = a(
                  regeneratorRuntime.mark(function e(t, a) {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                t.animateWithPromise(
                                  { strokeDashoffset: a },
                                  s,
                                  mina.easeinout
                                )
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "setTubeDashOffset",
              value: function() {
                this.tube1.attr("stroke-dashoffset", 0),
                  this.tube2.attr(
                    "stroke-dashoffset",
                    2 * this.tube2.pathLength
                  );
              }
            },
            {
              key: "reset",
              value: function() {
                var e = this;
                this.setTubeDashOffset(),
                  this.isHovered
                    ? setTimeout(function() {
                        e.runAnimation();
                      }, 400)
                    : (this.isPlaying = !1);
              }
            },
            {
              key: "end",
              value: function() {
                this.isHovered = !1;
              }
            }
          ]),
          e
        );
      })();
    t.default = i;
  },
  function(e, t) {
    "use strict";
    function a(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      o = 300,
      r = 1200,
      s = (function() {
        function e(t) {
          a(this, e),
            (this.svg = t),
            (this.isPlaying = !1),
            (this.isHovered = !1),
            (this.topRects = this.svg.getElementById(
              "home-2-rects-top"
            ).children),
            (this.bottomRects = this.svg.getElementById(
              "home-2-rects-bottom"
            ).children),
            (this.topRectsCount = this.topRects.length),
            (this.bottomRectsCount = this.bottomRects.length);
        }
        return (
          n(e, [
            { key: "init", value: function() {} },
            {
              key: "play",
              value: function() {
                (this.isHovered = !0),
                  this.isPlaying ||
                    ((this.isPlaying = !0), this.runAnimation());
              }
            },
            {
              key: "runAnimation",
              value: function() {
                var e = this;
                this.animateRects(),
                  setTimeout(function() {
                    e.reset();
                  }, 2 * r);
              }
            },
            {
              key: "animateRects",
              value: function() {
                for (var e = 0; e < this.bottomRectsCount; e++)
                  this.hideRect(this.topRects[e], this.topRectsCount - 1 - e),
                    this.showRect(this.topRects[e], this.topRectsCount - 1 - e);
                for (var t = 0; t < this.bottomRectsCount; t++)
                  this.hideRect(this.bottomRects[t], t),
                    this.showRect(this.bottomRects[t], t);
              }
            },
            {
              key: "hideRect",
              value: function(e, t) {
                setTimeout(function() {
                  e.setAttribute("opacity", "0");
                }, t * o);
              }
            },
            {
              key: "showRect",
              value: function(e, t) {
                setTimeout(function() {
                  e.setAttribute("opacity", "1");
                }, t * o + r);
              }
            },
            {
              key: "reset",
              value: function() {
                var e = this;
                this.isHovered
                  ? setTimeout(function() {
                      e.runAnimation();
                    }, 400)
                  : (this.isPlaying = !1);
              }
            },
            {
              key: "end",
              value: function() {
                this.isHovered = !1;
              }
            }
          ]),
          e
        );
      })();
    t.default = s;
  },
  function(e, t) {
    "use strict";
    function a(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function n(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      r = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50],
        [11, 21, 31, 41, 51],
        [12, 13, 14, 15, 16, 17, 18, 19],
        [22, 32, 42, 52],
        [23, 33, 43, 53],
        [24, 25, 26, 27, 28, 29],
        [34, 44, 54],
        [35, 36, 37, 38, 39, 45, 55],
        [46, 56],
        [47, 48, 49],
        [57],
        [58],
        [59]
      ],
      s = (function() {
        function e(t) {
          n(this, e),
            (this.svg = t),
            (this.isPlaying = !1),
            (this.isHovered = !1),
            (this.snapCanvas = Snap(this.svg)),
            (this.rectsContainer = this.snapCanvas.select("#home-3-rects")),
            (this.rects = this.snapCanvas.selectAll("rect"));
        }
        return (
          o(e, [
            { key: "init", value: function() {} },
            {
              key: "play",
              value: function() {
                (this.isHovered = !0),
                  this.isPlaying ||
                    ((this.isPlaying = !0), this.runAnimation());
              }
            },
            {
              key: "runAnimation",
              value: (function() {
                var e = a(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2), this.animateRects(r, "s1,1", 0)
                              );
                            case 2:
                              return (
                                (e.next = 4),
                                this.animateRects(
                                  r.slice(0).reverse(),
                                  "s-1,-1",
                                  1
                                )
                              );
                            case 4:
                              this.reset();
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateRects",
              value: (function() {
                var e = a(
                  regeneratorRuntime.mark(function e(t, a, n) {
                    var o = this,
                      r;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                this.rectsContainer.attr("transform", a),
                                (r = t.map(function(e, t) {
                                  return new Promise(function(a) {
                                    setTimeout(function() {
                                      e.forEach(function(e) {
                                        o.rects[e].attr("opacity", n);
                                      }),
                                        a();
                                    }, 60 * t);
                                  });
                                })),
                                (e.next = 4),
                                Promise.all(r)
                              );
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "reset",
              value: function() {
                var e = this;
                this.isHovered
                  ? setTimeout(function() {
                      e.runAnimation();
                    }, 500)
                  : (this.isPlaying = !1);
              }
            },
            {
              key: "end",
              value: function() {
                this.isHovered = !1;
              }
            }
          ]),
          e
        );
      })();
    t.default = s;
  },
  function(e, t) {
    "use strict";
    function a(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function n(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      r = 80,
      s = 400,
      i = (function() {
        function e(t) {
          n(this, e),
            (this.svg = t),
            (this.isPlaying = !1),
            (this.isHovered = !1),
            (this.snapCanvas = Snap(this.svg)),
            (this.rects = this.svg.getElementById("home-4-rects").children),
            (this.rectsCount = this.rects.length),
            (this.tube = this.snapCanvas.select("#home-4-tube")),
            (this.dot = this.snapCanvas.select("#home-4-dot"));
        }
        return (
          o(e, [
            {
              key: "init",
              value: function() {
                (this.dotRadius = this.dot.attr("r")),
                  (this.tube.pathLength = Math.ceil(
                    Snap.path.getTotalLength(this.tube)
                  )),
                  this.setTubeDashOffset();
              }
            },
            {
              key: "play",
              value: function() {
                (this.isHovered = !0),
                  this.isPlaying ||
                    ((this.isPlaying = !0), this.runAnimation());
              }
            },
            {
              key: "runAnimation",
              value: (function() {
                var e = a(
                  regeneratorRuntime.mark(function e() {
                    var t = this;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              this.animatePath(),
                                setTimeout(function() {
                                  t.animateRects();
                                }, this.rectsCount * r);
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateRects",
              value: function() {
                for (var e = 0; e < this.rectsCount; e++)
                  this.hideRect(this.rects[e], e),
                    this.showRect(this.rects[e], e);
              }
            },
            {
              key: "animatePath",
              value: (function() {
                var e = a(
                  regeneratorRuntime.mark(function e() {
                    var t = this;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.animateTube(this.tube.pathLength)
                              );
                            case 2:
                              return (e.next = 4), this.animateDot(0);
                            case 4:
                              return (
                                this.dot.attr({ cx: 141, cy: 71 }),
                                (e.next = 7),
                                this.animateDot(this.dotRadius)
                              );
                            case 7:
                              return (
                                (e.next = 9),
                                Promise.all([
                                  this.animateTube(0),
                                  Snap.animateWithPromise(
                                    0,
                                    this.tube.pathLength,
                                    function(e) {
                                      var a = Snap.path.getPointAtLength(
                                        t.tube,
                                        e
                                      );
                                      t.dot.attr("cx", a.x),
                                        t.dot.attr("cy", a.y);
                                    },
                                    s,
                                    mina.easeinout
                                  )
                                ])
                              );
                            case 9:
                              this.reset();
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateTube",
              value: (function() {
                var e = a(
                  regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.tube.animateWithPromise(
                                  { strokeDashoffset: t },
                                  s,
                                  mina.easeinout
                                )
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateDot",
              value: (function() {
                var e = a(
                  regeneratorRuntime.mark(function e(t) {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.dot.animateWithPromise(
                                  { r: t },
                                  s,
                                  0 === t ? mina.easeInBack : mina.easeOutBack
                                )
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "hideRect",
              value: function(e, t) {
                setTimeout(function() {
                  e.setAttribute("opacity", "0");
                }, t * r);
              }
            },
            {
              key: "showRect",
              value: function(e, t) {
                setTimeout(function() {
                  e.setAttribute("opacity", "1");
                }, t * r + 880 + s);
              }
            },
            {
              key: "setTubeDashOffset",
              value: function() {
                this.tube.attr("stroke-dashoffset", 2 * this.tube.pathLength);
              }
            },
            {
              key: "reset",
              value: function() {
                var e = this;
                this.setTubeDashOffset(),
                  this.isHovered
                    ? setTimeout(function() {
                        e.runAnimation();
                      }, 400)
                    : (this.isPlaying = !1);
              }
            },
            {
              key: "end",
              value: function() {
                this.isHovered = !1;
              }
            }
          ]),
          e
        );
      })();
    t.default = i;
  },
  function(e, t) {
    "use strict";
    function a(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      o = 400,
      r = (function() {
        function e(t) {
          a(this, e),
            (this.svg = t),
            (this.isPlaying = !1),
            (this.isHovered = !1),
            (this.isIntroComplete = !1),
            (this.snapCanvas = Snap(this.svg)),
            (this.rings = this.snapCanvas.selectAll(
              "#registration-rings path"
            ));
        }
        return (
          n(e, [
            {
              key: "init",
              value: function() {
                this.rings.forEach(function(e) {
                  (e.pathLength = Math.ceil(Snap.path.getTotalLength(e))),
                    e.attr("stroke-dasharray", e.pathLength),
                    e.attr("stroke-dashoffset", e.pathLength);
                });
              }
            },
            {
              key: "play",
              value: function() {
                (this.isHovered = !0),
                  this.isPlaying ||
                    !this.isIntroComplete ||
                    ((this.isPlaying = !0), this.runAnimation());
              }
            },
            {
              key: "playIntro",
              value: function() {
                var e = this;
                this.rings.forEach(function(t, a) {
                  setTimeout(function() {
                    t.animate(
                      { strokeDashoffset: 0 },
                      600,
                      mina.easeinout,
                      function() {
                        a === e.rings.length - 1 && (e.isIntroComplete = !0);
                      }
                    );
                  }, 100 * a);
                });
              }
            },
            {
              key: "runAnimation",
              value: function() {
                var e = this;
                this.pulse(),
                  setTimeout(function() {
                    e.reset();
                  }, 600);
              }
            },
            {
              key: "pulse",
              value: function() {
                this.rings.forEach(function(e, t) {
                  setTimeout(function() {
                    e.animate(
                      { transform: "s1.05,1.05" },
                      o,
                      mina.easeinout,
                      function() {
                        e.animate({ transform: "s1,1" }, o, mina.easeOutBack);
                      }
                    );
                  }, 50 * t);
                });
              }
            },
            {
              key: "reset",
              value: function() {
                var e = this;
                this.isHovered
                  ? setTimeout(function() {
                      e.runAnimation();
                    }, 1200)
                  : (this.isPlaying = !1);
              }
            },
            {
              key: "end",
              value: function() {
                this.isHovered = !1;
              }
            }
          ]),
          e
        );
      })();
    t.default = r;
  },
  function(e, t, a) {
    function n(e) {
      (this.config = e), this.initDom_();
      var t = function(e) {
        var t = "data-" + this.config.className + "-video-id",
          a = e.getAttribute(t);
        a && this.play(a);
      }.bind(this);
      l.addDelegatedListener(document, "click", t);
      var a = document.createElement("script");
      a.setAttribute("src", "https://www.youtube.com/iframe_api"),
        document.body.appendChild(a);
    }
    function o(e) {
      if (!p) {
        var t = d.clone(y);
        e && d.merge(t, e), (p = new n(t));
      }
    }
    function r(e) {
      if (!p) throw "youtubemodal.init must be run first.";
      return p.play(e);
    }
    var s = a(25),
      i = a(30),
      l = a(31),
      d = a(26),
      u = a(32),
      c = null,
      p = null,
      y = {
        useHandlerOnMobile: !0,
        history: !1,
        historyNamePrefix: "video:",
        transitionDuration: 300,
        className: "ak-youtubemodal",
        playerVars: {
          autohide: 1,
          autoplay: 1,
          fs: 1,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3
        }
      };
    (n.prototype.initDom_ = function() {
      var e = i.createDom,
        t = e("div", this.config.className),
        a = e("div", this.config.className + "-x");
      t.appendChild(a),
        t.appendChild(e("div", this.config.className + "-player")),
        t.appendChild(e("div", this.config.className + "-mask")),
        document.body.appendChild(t),
        a.addEventListener(
          "click",
          function() {
            this.setActive_(!1);
          }.bind(this)
        ),
        this.config.history &&
          window.addEventListener("popstate", this.onHistoryChange_.bind(this));
    }),
      (n.prototype.setVisible = function(e) {
        c &&
          window.setTimeout(function() {
            e ? c.playVideo() : c.pauseVideo();
          }, 100);
        var t = function(a) {
          27 == a.keyCode &&
            (this.setActive_(!1),
            document.body.removeEventListener("keydown", t));
        }.bind(this);
        e
          ? document.body.addEventListener("keydown", t)
          : document.body.removeEventListener("keydown", t);
        var a = document.querySelector("." + this.config.className);
        window.setTimeout(
          function() {
            s.enable(a, this.config.className + "--enabled", e);
          }.bind(this),
          e ? 0 : this.config.transitionDuration
        ),
          window.setTimeout(
            function() {
              s.enable(a, this.config.className + "--visible", e);
            }.bind(this),
            e ? this.config.transitionDuration : 0
          );
      }),
      (n.prototype.setActive_ = function(e, t, a) {
        if (!this.config.history) return void this.setVisible(e);
        if ((this.setVisible(e), !1 !== a)) {
          var n = t || this.activeVideoId_;
          if (e) {
            var o = window.history.state && window.history.state.videoId;
            if (o == n) return;
            window.history.pushState(
              { videoId: n },
              "",
              "#" + this.config.historyNamePrefix + n
            );
          } else
            window.history.pushState(
              { videoId: null },
              "",
              window.location.pathname
            );
        }
      }),
      (n.prototype.onHistoryChange_ = function(t) {
        t.state && t.state.videoId
          ? this.play(t.state.videoId, !1)
          : this.setVisible(!1);
      }),
      (n.prototype.play = function(e, t) {
        var a = this.config.useHandlerOnMobile && (u.isIOS() || u.isAndroid());
        if (a)
          return void (window.location.href =
            "https://m.youtube.com/watch?v=" + e);
        if ((this.setActive_(!0, e, t), !(c && e == this.activeVideoId_))) {
          if (c && e != this.activeVideoId_)
            return (
              c.loadVideoById(e, 0, "large"), void (this.activeVideoId_ = e)
            );
          var n = document.querySelector(
              "." + this.config.className + "-player"
            ),
            o = { videoId: e, playerVars: d.clone(this.config.playerVars) };
          (c = new YT.Player(n, o)), (this.activeVideoId_ = e);
        }
      }),
      (e.exports = { init: o, play: r });
  },
  function(e) {
    e.exports = {
      enable: function(e, t, a) {
        a ? e.classList.add(t) : e.classList.remove(t);
      },
      removeAdd: function(e, t, a) {
        e.classList.remove.apply(e.classList, t),
          e.classList.add.apply(e.classList, a);
      }
    };
  },
  function(e) {
    e.exports = {
      clone: function(e) {
        var t = {};
        for (var a in e) t[a] = e[a];
        return t;
      },
      merge: function(e, t) {
        for (var a in t) e[a] = t[a];
      }
    };
  },
  ,
  function(e, t, a) {
    "use strict";
    function n(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      s = a(0),
      i = (function() {
        function e(t) {
          o(this, e),
            (this.xPos = t.xPos || 0),
            (this.yPos = t.yPos || 0),
            (this.cols = t.cols || 1),
            (this.rows = t.rows || 1),
            (this.spaceBetween = t.spaceBetween || 2),
            (this.radius = t.radius || 1),
            (this.color = t.color || s.DEFAULT_COLOR),
            (this.svgCanvas = t.svgCanvas),
            (this.dots = null),
            (this.animLength = t.animLength || s.DEFAULT_ANIM_LENGTH);
        }
        return (
          r(e, [
            {
              key: "init",
              value: function() {
                if (this.svgCanvas) {
                  (this.s = Snap(this.svgCanvas)),
                    (this.dotGroup = this.s.group());
                  for (var e = [], t = 0, a; t < this.cols; t++) {
                    a = 2 * (t * this.radius) + this.spaceBetween * t;
                    for (var n = 0; n < this.rows; n++) {
                      var o = 2 * (n * this.radius) + this.spaceBetween * n,
                        r = this.s.circle(o, a, this.radius);
                      r.attr({ fill: this.color, transform: "s0,0" }),
                        e.push(r),
                        this.dotGroup.add(r);
                    }
                  }
                  this.dots = e.map(function(e) {
                    return { path: e, nextDot: null };
                  });
                  for (var s = 0; s < this.dots.length; s++)
                    this.dots[s].nextDot = this.dots[s + 1];
                  this.dotGroup.transform("t" + this.xPos + "," + this.yPos);
                }
              }
            },
            {
              key: "getElement",
              value: function() {
                return this.dotGroup;
              }
            },
            {
              key: "getProps",
              value: function() {
                return { color: this.color, x: this.xPos, y: this.yPos };
              }
            },
            {
              key: "setColor",
              value: function(e) {
                this.color = e;
                for (var t = 0; t < this.dots.length; t++)
                  this.dots[t].path.attr({ fill: e });
              }
            },
            {
              key: "setPosition",
              value: function(e, t) {
                (this.xPos = e),
                  (this.yPos = t),
                  this.dotGroup.transform("t" + this.xPos + "," + this.yPos);
              }
            },
            {
              key: "setScale",
              value: function(e, t, a) {
                e.path.attr({ transform: "s" + t + "," + a });
              }
            },
            {
              key: "setOpacity",
              value: function(e, t) {
                e.path.attr({ opacity: t });
              }
            },
            {
              key: "setScaleAll",
              value: function(e, t) {
                for (var a = 0; a < this.dots.length; a++)
                  this.setScale(this.dots[a], e, t);
              }
            },
            {
              key: "setOpacityAll",
              value: function(e) {
                for (var t = 0; t < this.dots.length; t++)
                  this.setOpacity(this.dots[t], e);
              }
            },
            {
              key: "animateOpacity",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e(t, a) {
                    var n =
                      2 < arguments.length && void 0 !== arguments[2]
                        ? arguments[2]
                        : this.animLength;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                t.path.animateWithPromise(
                                  { opacity: a },
                                  n / 4,
                                  s.DEFAULT_EASING
                                )
                              );
                            case 2:
                              if (t.nextDot) {
                                e.next = 4;
                                break;
                              }
                              return e.abrupt("return");
                            case 4:
                              return (
                                (e.next = 6),
                                this.animateOpacity(t.nextDot, a, n)
                              );
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateScale",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e(t, a, n) {
                    var o =
                      3 < arguments.length && void 0 !== arguments[3]
                        ? arguments[3]
                        : this.animLength;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                t.path.animateWithPromise(
                                  { transform: "s" + a + "," + n },
                                  o,
                                  s.DEFAULT_EASING
                                )
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateScaleStaggered",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e(t, a, n) {
                    var o =
                      3 < arguments.length && void 0 !== arguments[3]
                        ? arguments[3]
                        : this.animLength;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2), this.animateScale(t, a, n, o)
                              );
                            case 2:
                              if (t.nextDot) {
                                e.next = 4;
                                break;
                              }
                              return e.abrupt("return");
                            case 4:
                              return (
                                (e.next = 6),
                                this.animateScaleStaggered(
                                  t.nextDot,
                                  a,
                                  n,
                                  o / 4
                                )
                              );
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateIn",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.animateScaleStaggered(
                                  this.dots[0],
                                  1,
                                  1,
                                  this.animLength
                                )
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOut",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.animateScaleStaggered(
                                  this.dots[0],
                                  0,
                                  0,
                                  this.animLength
                                )
                              );
                            case 2:
                              this.reset();
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOut",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.animateOpacity(this.dots[0], 0)
                              );
                            case 2:
                              this.reset();
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "reset",
              value: function() {
                this.setScaleAll(0, 0), this.setOpacityAll(1);
              }
            },
            {
              key: "setFinal",
              value: function() {
                this.setScaleAll(1, 1), this.setOpacityAll(0);
              }
            }
          ]),
          e
        );
      })();
    t.default = i;
  },
  function(e, t, a) {
    "use strict";
    function n(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      s = a(0),
      i = (function() {
        function e(t) {
          o(this, e),
            (this.xPos = t.xPos || 0),
            (this.yPos = t.yPos || 0),
            (this.rows = t.rows || 1),
            (this.cols = t.cols || 1),
            (this.blockSize = t.blockSize || 13),
            (this.strokeWidth = t.strokeWidth || 2.5),
            (this.color = t.color || s.DEFAULT_COLOR),
            (this.rotation = t.rotation || 0),
            (this.animLength = t.animLength || s.DEFAULT_ANIM_LENGTH),
            (this.svgCanvas = t.svgCanvas),
            (this.animatingOut = !1);
        }
        return (
          r(e, [
            {
              key: "init",
              value: function() {
                var e = this;
                (this.s = Snap(this.svgCanvas)),
                  (this.gridGroup = this.s.g()),
                  (this.verticalLength = this.rows * this.blockSize),
                  (this.horizontalLength = this.cols * this.blockSize);
                for (
                  var t = {
                      opacity: 1,
                      stroke: this.color,
                      strokeWidth: this.strokeWidth,
                      "stroke-dasharray": this.verticalLength + "px",
                      "stroke-dashoffset": 3 * this.verticalLength + "px"
                    },
                    a = {
                      opacity: 1,
                      stroke: this.color,
                      strokeWidth: this.strokeWidth,
                      "stroke-dasharray": this.horizontalLength + "px",
                      "stroke-dashoffset": 3 * this.horizontalLength + "px"
                    },
                    n = 0,
                    o;
                  n <= this.cols;
                  n++
                )
                  (o = this.s.line(
                    n * this.blockSize,
                    0,
                    n * this.blockSize,
                    this.rows * this.blockSize
                  )),
                    o.attr(t),
                    this.gridGroup.add(o);
                for (var r = 0, s; r <= this.rows; r++)
                  (s = this.s.line(
                    0,
                    r * this.blockSize,
                    this.cols * this.blockSize,
                    r * this.blockSize
                  )),
                    s.attr(a),
                    this.gridGroup.add(s);
                var i = function(e) {
                    return e.node.x1.baseVal.value === e.node.x2.baseVal.value;
                  },
                  l = function(t) {
                    return (
                      (0 === t.node.x1.baseVal.value &&
                        0 === t.node.y1.baseVal.value) ||
                      (t.node.x1.baseVal.value === e.cols * e.blockSize &&
                        0 === t.node.y1.baseVal.value) ||
                      (0 === t.node.x1.baseVal.value &&
                        t.node.y1.baseVal.value === e.rows * e.blockSize) ||
                      (t.node.x1.baseVal.value === e.cols * e.blockSize &&
                        t.node.y1.baseVal.value === e.rows * e.blockSize)
                    );
                  };
                (this.gridLines = this.gridGroup.children().map(function(t) {
                  return {
                    animation: null,
                    path: t,
                    isActive: !1,
                    length: i(t) ? e.verticalLength : e.horizontalLength
                  };
                })),
                  (this.verticalLines = this.gridGroup
                    .children()
                    .map(function(t) {
                      if (i(t) && !l(t))
                        return { path: t, length: e.verticalLength };
                    })
                    .filter(function(e) {
                      return void 0 != e;
                    })),
                  (this.horizontalLines = this.gridGroup
                    .children()
                    .map(function(t) {
                      if (!i(t) && !l(t))
                        return { path: t, length: e.horizontalLength };
                    })
                    .filter(function(e) {
                      return void 0 != e;
                    })),
                  (this.horizontalBorders = this.gridGroup
                    .children()
                    .map(function(t) {
                      if (l(t) && !i(t))
                        return { path: t, length: e.horizontalLength };
                    })
                    .filter(function(e) {
                      return void 0 != e;
                    })),
                  (this.verticalBorders = this.gridGroup
                    .children()
                    .map(function(t) {
                      if (l(t) && i(t))
                        return { path: t, length: e.verticalLength };
                    })
                    .filter(function(e) {
                      return void 0 != e;
                    })),
                  (this.boundingBox = this.gridGroup.getBBox()),
                  this.gridGroup.transform(
                    "t" +
                      this.xPos +
                      "," +
                      this.yPos +
                      "r" +
                      this.rotation +
                      "," +
                      this.boundingBox.cx +
                      "," +
                      this.boundingBox.cy
                  ),
                  this.reset();
              }
            },
            {
              key: "getElement",
              value: function() {
                return this.gridGroup;
              }
            },
            {
              key: "getProps",
              value: function() {
                return {
                  x: this.xPos,
                  y: this.yPos,
                  rows: this.rows,
                  cols: this.cols,
                  color: this.color,
                  blockSize: this.blockSize,
                  strokeWidth: this.strokeWidth
                };
              }
            },
            {
              key: "setColor",
              value: function(e) {
                this.color = e;
                for (var t = 0; t < this.gridGroup.children().length; t++)
                  this.gridGroup.children()[t].attr({ stroke: e });
              }
            },
            {
              key: "animateInLines",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e(t, a) {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (this.animatingOut) {
                                e.next = 3;
                                break;
                              }
                              return (
                                (e.next = 3),
                                Snap.animateWithPromise(
                                  3 * a,
                                  2 * a,
                                  function(e) {
                                    for (var a = 0; a < t.length; a++)
                                      (t.currentOffset = e),
                                        t[a].path.attr({ strokeDashoffset: e });
                                  },
                                  this.animLength,
                                  s.DEFAULT_EASING
                                )
                              );
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOutLines",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e(t, a) {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Snap.animateWithPromise(
                                  t.currentOffset,
                                  3 * a,
                                  function(e) {
                                    for (var a = 0; a < t.length; a++)
                                      (t.currentOffset = e),
                                        t[a].path.attr({ strokeDashoffset: e });
                                  },
                                  this.animLength,
                                  s.DEFAULT_EASING
                                )
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateInBorders",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.animateInLines(
                                    this.horizontalBorders,
                                    this.horizontalLength
                                  ),
                                  this.animateInLines(
                                    this.verticalBorders,
                                    this.verticalLength
                                  )
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateInHorizontalLines",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.animateInLines(
                                  this.horizontalLines,
                                  this.horizontalLength
                                )
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateInVerticalLines",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.animateInLines(
                                  this.verticalLines,
                                  this.verticalLength
                                )
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOutBorders",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.animateOutLines(
                                    this.horizontalBorders,
                                    this.horizontalLength
                                  ),
                                  this.animateOutLines(
                                    this.verticalBorders,
                                    this.verticalLength
                                  )
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOutHorizontalLines",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.animateOutLines(
                                  this.horizontalLines,
                                  this.horizontalLength
                                )
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOutVerticalLines",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.animateOutLines(
                                  this.verticalLines,
                                  this.verticalLength
                                )
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateIn",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.animateInBorders(),
                                  this.animateInVerticalLines(),
                                  this.animateInHorizontalLines()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOut",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (this.animatingOut = !0),
                                (e.next = 3),
                                Promise.all([
                                  this.animateOutBorders(),
                                  this.animateOutHorizontalLines(),
                                  this.animateOutVerticalLines()
                                ])
                              );
                            case 3:
                              this.reset(), (this.animatingOut = !1);
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "reset",
              value: function() {
                for (var e = 0; e < this.gridLines.length; e++)
                  this.gridLines[e].path.attr({
                    strokeDashoffset: 3 * this.gridLines[e].length
                  });
              }
            }
          ]),
          e
        );
      })();
    t.default = i;
  },
  function(e) {
    e.exports = {
      createDom: function(e, t) {
        var a = document.createElement(e);
        return t && (a.className = t), a;
      }
    };
  },
  function(e) {
    e.exports = {
      addDelegatedListener: function(e, t, a) {
        return e.addEventListener(t, function(t) {
          t = t || window.event;
          var e = t.target || t.srcElement;
          e = 3 === e.nodeType ? e.parentNode : e;
          do a(e, t), e.parentNode && (e = e.parentNode);
          while (e.parentNode);
        });
      }
    };
  },
  function(e) {
    function t() {
      return /iPhone|iPad|iPod/i.test(navigator.userAgent);
    }
    function a() {
      return /Android/i.test(navigator.userAgent);
    }
    function n() {
      return -1 != navigator.userAgent.indexOf("Chrome");
    }
    e.exports = {
      isAndroid: a,
      isChrome: n,
      isFirefox: function() {
        return -1 != navigator.userAgent.indexOf("Firefox");
      },
      isIOS: t,
      isIE: function() {
        return /MSIE\/\d+/.test(navigator.userAgent);
      },
      isIEorEdge: function() {
        return (
          /Edge\/\d+/.test(navigator.userAgent) ||
          /MSIE\/\d+/.test(navigator.userAgent) ||
          /Trident\/\d+/.test(navigator.userAgent)
        );
      },
      isMobile: function() {
        return t() || a();
      },
      isSafari: function() {
        return !n() && -1 != navigator.userAgent.indexOf("Safari");
      }
    };
  },
  function(e, t, a) {
    "use strict";
    function n(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      s = a(0),
      i = (function() {
        function e(t) {
          o(this, e),
            (this.xPos = t.xPos || 0),
            (this.yPos = t.yPos || 0),
            (this.rows = t.rows || 1),
            (this.cols = t.cols || 1),
            (this.blockSize = t.blockSize || 13),
            (this.strokeWidth = t.strokeWidth || 2.5),
            (this.color = t.color || s.DEFAULT_COLOR),
            (this.rotation = t.rotation || 0),
            (this.animLength = t.animLength || s.DEFAULT_ANIM_LENGTH),
            (this.svgCanvas = t.svgCanvas);
        }
        return (
          r(e, [
            {
              key: "init",
              value: function() {
                (this.s = Snap(this.svgCanvas)),
                  (this.gridGroup = this.s.g()),
                  (this.totalBlocks = this.rows * this.cols);
                for (var e = 0; e < this.cols; e++)
                  for (var t = 0, a; t < this.rows; t++)
                    (a = this.s.rect(
                      e * this.blockSize,
                      t * this.blockSize,
                      this.blockSize,
                      this.blockSize
                    )),
                      a.attr({
                        fill: "none",
                        stroke: this.color,
                        strokeWidth: this.strokeWidth,
                        opacity: 0
                      }),
                      this.gridGroup.add(a);
                (this.boundingBox = this.gridGroup.getBBox()),
                  this.gridGroup.transform(
                    "t" +
                      this.xPos +
                      "," +
                      this.yPos +
                      "r" +
                      this.rotation +
                      "," +
                      this.boundingBox.cx +
                      "," +
                      this.boundingBox.cy
                  );
              }
            },
            {
              key: "getElement",
              value: function() {
                return this.gridGroup;
              }
            },
            {
              key: "getProps",
              value: function() {
                return {
                  x: this.xPos,
                  y: this.yPos,
                  rows: this.rows,
                  cols: this.cols,
                  color: this.color,
                  blockSize: this.blockSize,
                  strokeWidth: this.strokeWidth
                };
              }
            },
            {
              key: "setOpacity",
              value: function(e, t) {
                e.attr({ opacity: t });
              }
            },
            {
              key: "setOpacityAll",
              value: function(e) {
                for (var t = 0; t < this.gridGroup.children().length; t++)
                  this.setOpacity(this.gridGroup.children()[t], e);
              }
            },
            {
              key: "setColor",
              value: function(e) {
                this.color = e;
                for (var t = 0; t < this.gridGroup.children().length; t++)
                  this.gridGroup.children()[t].attr({ stroke: e });
              }
            },
            {
              key: "animateStaggerBlink",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e(t) {
                    var a = this,
                      n;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = this.gridGroup
                                  .children()
                                  .map(function(e, n) {
                                    return new Promise(function(o) {
                                      setTimeout(function() {
                                        e.attr({ opacity: t }), o();
                                      }, a.animLength / a.totalBlocks * n);
                                    });
                                  })),
                                (e.next = 3),
                                Promise.all(n)
                              );
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateIn",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.animateStaggerBlink(1);
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOut",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.animateStaggerBlink(0);
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "reset",
              value: function() {
                this.setOpacityAll(0);
              }
            }
          ]),
          e
        );
      })();
    t.default = i;
  },
  function(e, t) {
    "use strict";
    function a(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      o = 5,
      r = (function() {
        function e(t) {
          a(this, e),
            (this.svg = t),
            (this.isPlaying = !1),
            (this.isHovered = !1),
            (this.snapCanvas = Snap(this.svg)),
            (this.pointsContainer = this.snapCanvas.select(
              "#after-hours-points"
            )),
            (this.points = this.pointsContainer.selectAll("circle")),
            (this.pointsCount = this.points.length),
            (this.completed = 0);
        }
        return (
          n(e, [
            {
              key: "init",
              value: function() {
                this.points.forEach(function(e) {
                  (e.colors = [e.attr("data-c1"), e.attr("data-c2")]),
                    (e.delay = e.attr("data-delay")),
                    (e.state = 0);
                });
              }
            },
            {
              key: "play",
              value: function() {
                (this.isHovered = !0),
                  this.isPlaying ||
                    ((this.isPlaying = !0), this.runAnimation());
              }
            },
            {
              key: "runAnimation",
              value: function() {
                var e = this;
                this.points.forEach(function(t) {
                  setTimeout(function() {
                    e.fillAndScalePoint(t, o, 0);
                  }, 500 * t.delay);
                });
              }
            },
            {
              key: "fillAndScalePoint",
              value: function(e, t, a) {
                var n = this;
                e.state++,
                  e.attr("fill", e.colors[a]),
                  e.animate({ r: t }, 200, mina.easeout, function() {
                    if (4 === e.state)
                      (e.state = 0),
                        n.completed++,
                        n.completed === n.pointsCount && n.reset();
                    else {
                      var t = 1 == e.state % 2 ? 0 : o,
                        a = 2 <= e.state ? 1 : 0;
                      setTimeout(function() {
                        0 === t
                          ? e.animate(
                              { r: 1.2 * o },
                              150,
                              mina.easeout,
                              function() {
                                n.fillAndScalePoint(e, t, a);
                              }
                            )
                          : n.fillAndScalePoint(e, t, a);
                      }, 450);
                    }
                  });
              }
            },
            {
              key: "reset",
              value: function() {
                var e = this;
                (this.completed = 0),
                  this.isHovered
                    ? setTimeout(function() {
                        e.runAnimation();
                      }, 400)
                    : (this.isPlaying = !1);
              }
            },
            {
              key: "end",
              value: function() {
                this.isHovered = !1;
              }
            }
          ]),
          e
        );
      })();
    t.default = r;
  },
  function(e, t) {
    "use strict";
    function a(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      o = (function() {
        function e(t) {
          a(this, e),
            (this.svg = t),
            (this.isPlaying = !1),
            (this.isHovered = !1),
            (this.snapCanvas = Snap(this.svg)),
            (this.nucleus = this.snapCanvas.select("#beyond-mobile-nucleus")),
            (this.innerRing = this.snapCanvas.select(
              "#beyond-mobile-ring-inner"
            )),
            (this.outerRing = this.snapCanvas.select(
              "#beyond-mobile-ring-outer"
            )),
            (this.planetsContainer = this.snapCanvas.select(
              "#beyond-mobile-planets"
            )),
            (this.planets = this.planetsContainer.selectAll("circle")),
            (this.planetCount = this.planets.length),
            (this.nucleusR = this.nucleus.attr("r")),
            (this.innerRingR = this.innerRing.attr("r")),
            (this.outerRingR = this.outerRing.attr("r")),
            (this.orbits = 0);
        }
        return (
          n(e, [
            { key: "init", value: function() {} },
            {
              key: "play",
              value: function() {
                (this.isHovered = !0),
                  this.isPlaying ||
                    ((this.isPlaying = !0), this.runAnimation());
              }
            },
            {
              key: "runAnimation",
              value: function() {
                var e = this;
                this.runPulse(),
                  setTimeout(function() {
                    e.runOrbit();
                  }, 300);
              }
            },
            {
              key: "runPulse",
              value: function() {
                var e = this;
                this.nucleus.animate(
                  { r: 1.25 * this.nucleusR },
                  250,
                  mina.easein,
                  function() {
                    e.nucleus.animate({ r: e.nucleusR }, 100, mina.easeinout);
                  }
                ),
                  setTimeout(function() {
                    e.innerRing.animate(
                      { r: 1.1 * e.innerRingR },
                      250,
                      mina.easein,
                      function() {
                        e.innerRing.animate(
                          { r: e.innerRingR },
                          100,
                          mina.easeout
                        );
                      }
                    );
                  }, 150),
                  setTimeout(function() {
                    e.outerRing.animate(
                      { r: 1.1 * e.outerRingR },
                      250,
                      mina.easein,
                      function() {
                        e.outerRing.animate(
                          { r: e.outerRingR },
                          150,
                          mina.easeout
                        );
                      }
                    );
                  }, 250);
              }
            },
            {
              key: "runOrbit",
              value: function() {
                ++this.orbits;
                for (var e = 0; e < this.planetCount; e++)
                  this.flashPlanet(this.planets[e], e);
              }
            },
            {
              key: "flashPlanet",
              value: function(e, t) {
                var a = this;
                setTimeout(function() {
                  e.attr("fill", "#4768FD"),
                    setTimeout(function() {
                      e.attr("fill", null),
                        t === a.planetCount - 1 &&
                          (2 > a.orbits ? a.runOrbit() : a.reset());
                    }, 300);
                }, t * 250);
              }
            },
            {
              key: "reset",
              value: function() {
                var e = this;
                this.isHovered
                  ? ((this.orbits = 0),
                    setTimeout(function() {
                      e.runAnimation();
                    }, 400))
                  : (this.isPlaying = !1);
              }
            },
            {
              key: "end",
              value: function() {
                this.isHovered = !1;
              }
            }
          ]),
          e
        );
      })();
    t.default = o;
  },
  function(e, t) {
    "use strict";
    function a(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      o = [
        { x: 12, y: 1, width: 24, height: 46 },
        { x: 1, y: 8, width: 46, height: 32 },
        { x: 1, y: 1, width: 46, height: 46 }
      ],
      r = (function() {
        function e(t) {
          a(this, e),
            (this.svg = t),
            (this.isPlaying = !1),
            (this.isHovered = !1),
            (this.snapCanvas = Snap(this.svg)),
            (this.screen = this.snapCanvas.select("rect")),
            (this.point = this.snapCanvas.select("circle")),
            (this.path1 = this.snapCanvas.select("#build-on-mobile-path-1")),
            (this.path2 = this.snapCanvas.select("#build-on-mobile-path-2")),
            (this.path3 = this.snapCanvas.select("#build-on-mobile-path-3"));
        }
        return (
          n(e, [
            {
              key: "init",
              value: function() {
                (o[0].path = this.path1),
                  (o[1].path = this.path2),
                  (o[2].path = this.path3),
                  (o[0].pathLength = Snap.path.getTotalLength(this.path1)),
                  (o[1].pathLength = Snap.path.getTotalLength(this.path2)),
                  (o[2].pathLength = Snap.path.getTotalLength(this.path3));
              }
            },
            {
              key: "play",
              value: function() {
                (this.isHovered = !0),
                  this.isPlaying ||
                    ((this.isPlaying = !0), this.runAnimation());
              }
            },
            {
              key: "runAnimation",
              value: function() {
                this.resizeScreen(0);
              }
            },
            {
              key: "resizeScreen",
              value: function(e) {
                var t = this,
                  a = 2 === e ? 200 : 150,
                  n = 2 === e ? 250 : 200;
                this.screen.animate(
                  {
                    x: o[e].x,
                    y: o[e].y,
                    width: o[e].width,
                    height: o[e].height
                  },
                  a,
                  mina.easeout,
                  function() {
                    setTimeout(function() {
                      e < o.length - 1 ? t.resizeScreen(e + 1) : t.reset();
                    }, 1600);
                  }
                ),
                  Snap.animate(
                    0,
                    o[e].pathLength,
                    function(a) {
                      var n = Snap.path.getPointAtLength(o[e].path, a);
                      t.point.attr("cx", n.x), t.point.attr("cy", n.y);
                    },
                    n,
                    mina.easeinout
                  );
              }
            },
            {
              key: "reset",
              value: function() {
                var e = this;
                this.isHovered
                  ? setTimeout(function() {
                      e.runAnimation();
                    }, 0)
                  : (this.isPlaying = !1);
              }
            },
            {
              key: "end",
              value: function() {
                this.isHovered = !1;
              }
            }
          ]),
          e
        );
      })();
    t.default = r;
  },
  function(e, t) {
    "use strict";
    function a(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      o = 300,
      r = 150,
      s = 4,
      l = 150,
      d = "#4768FD",
      i = (function() {
        function e(t) {
          a(this, e),
            (this.svg = t),
            (this.isPlaying = !1),
            (this.isHovered = !1),
            (this.snapCanvas = Snap(this.svg)),
            (this.dots = this.snapCanvas.selectAll("g")),
            (this.dotsCount = this.dots.length);
        }
        return (
          n(e, [
            { key: "init", value: function() {} },
            {
              key: "play",
              value: function() {
                (this.isHovered = !0),
                  this.isPlaying ||
                    ((this.isPlaying = !0), this.runAnimation());
              }
            },
            {
              key: "runAnimation",
              value: function() {
                var e = this;
                this.animateInSolids(4),
                  setTimeout(function() {
                    e.setRangeColor(3, "#1CE8B5");
                  }, 1 * l),
                  setTimeout(function() {
                    e.pulse();
                  }, 8 * l);
              }
            },
            {
              key: "animateInSolids",
              value: function(e) {
                for (
                  var t = this,
                    a = function(a) {
                      setTimeout(function() {
                        t.dots[a]
                          .selectAll("circle")[0]
                          .animate({ r: s }, o, mina.easeout);
                      }, l * (0.7 * (a - e)));
                    },
                    n = e;
                  n < this.dotsCount;
                  n++
                )
                  a(n);
              }
            },
            {
              key: "setRangeColor",
              value: function(e, t) {
                for (
                  var a = this,
                    n = function(e) {
                      setTimeout(function() {
                        a.setSolidColor(a.dots[e].selectAll("circle")[0], t),
                          a.setOutlineColor(
                            a.dots[e].selectAll("circle")[1],
                            t
                          );
                      }, l * (0.8 * e));
                    },
                    o = e;
                  o < this.dotsCount;
                  o++
                )
                  n(o);
              }
            },
            {
              key: "setSolidColor",
              value: function(e, t) {
                e.attr("fill", t), e.attr("stroke", t);
              }
            },
            {
              key: "setOutlineColor",
              value: function(e, t) {
                e.attr("stroke", t);
              }
            },
            {
              key: "pulse",
              value: function() {
                for (
                  var e = this,
                    t = function(t) {
                      setTimeout(function() {
                        e.dots[t].animate(
                          { transform: "s1.2,1.2" },
                          r,
                          mina.easein,
                          function() {
                            var a = e.dots[t].selectAll("circle");
                            3 === t &&
                              (e.setSolidColor(a[0], d),
                              e.setOutlineColor(a[1], d)),
                              3 < t &&
                                (e.setOutlineColor(a[1], d),
                                a[0].attr("r", 0.5 * s),
                                a[0].animate(
                                  { r: 0 },
                                  o,
                                  mina.easeout,
                                  function() {
                                    t === e.dotsCount - 1 && e.reset();
                                  }
                                )),
                              e.dots[t].animate(
                                { transform: "s1,1" },
                                r,
                                mina.easeout
                              );
                          }
                        );
                      }, l * (0.7 * t));
                    },
                    a = 0;
                  a < this.dotsCount;
                  a++
                )
                  t(a);
              }
            },
            {
              key: "reset",
              value: function() {
                for (var e = this, t = 3, a; t < this.dotsCount; t++)
                  (a = this.dots[t].selectAll("circle")),
                    this.setSolidColor(a[0], d);
                this.isHovered
                  ? setTimeout(function() {
                      e.runAnimation();
                    }, 400)
                  : (this.isPlaying = !1);
              }
            },
            {
              key: "end",
              value: function() {
                this.isHovered = !1;
              }
            }
          ]),
          e
        );
      })();
    t.default = i;
  },
  function(e, t) {
    "use strict";
    function a(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      o = 400,
      r = 400,
      s = 1e3,
      i = 50,
      l = (function() {
        function e(t) {
          a(this, e),
            (this.svg = t),
            (this.isPlaying = !1),
            (this.isHovered = !1),
            (this.snapCanvas = Snap(this.svg)),
            (this.bottom = this.snapCanvas.select("#grow-bottom")),
            (this.middle = this.snapCanvas.select("#grow-middle")),
            (this.top = this.snapCanvas.select("#grow-top")),
            (this.bottomPaths = this.bottom.selectAll("path")),
            (this.middlePaths = this.middle.selectAll("path")),
            (this.topPaths = this.top.selectAll("path")),
            (this.bottomRect = this.snapCanvas.select("#grow-bottom-rect")),
            (this.middleRect = this.snapCanvas.select("#grow-middle-rect")),
            (this.bottomRectCover = this.snapCanvas.select(
              "#grow-bottom-rect-cover"
            )),
            (this.middleRectCover = this.snapCanvas.select(
              "#grow-middle-rect-cover"
            )),
            (this.circle = this.top.select("circle"));
        }
        return (
          n(e, [
            {
              key: "init",
              value: function() {
                this.bottomPaths.forEach(function(e) {
                  (e.pathLength = e.getTotalLength()),
                    e.attr("stroke-dasharray", e.pathLength);
                }),
                  this.middlePaths.forEach(function(e) {
                    (e.pathLength = e.getTotalLength()),
                      e.attr("stroke-dasharray", e.pathLength);
                  }),
                  this.topPaths.forEach(function(e) {
                    (e.pathLength = e.getTotalLength()),
                      e.attr("stroke-dasharray", e.pathLength),
                      e.attr("stroke-dashoffset", e.pathLength);
                  });
              }
            },
            {
              key: "play",
              value: function() {
                (this.isHovered = !0),
                  this.isPlaying ||
                    ((this.isPlaying = !0), this.runAnimation());
              }
            },
            {
              key: "runAnimation",
              value: function() {
                var e = this;
                this.animateOutPaths(this.bottomPaths),
                  setTimeout(function() {
                    e.animateOutPaths(e.middlePaths);
                  }, o),
                  setTimeout(function() {
                    e.animateCircle(0);
                  }, 2 * o),
                  setTimeout(function() {
                    e.animateInPaths(e.bottomPaths),
                      setTimeout(function() {
                        e.animateInPaths(e.middlePaths),
                          setTimeout(function() {
                            e.animateInPaths(e.topPaths);
                          }, o - i);
                      }, o - i);
                  }, o + s),
                  setTimeout(function() {
                    e.animateInRect(e.bottomRect, e.bottomRectCover),
                      setTimeout(function() {
                        e.animateInRect(e.middleRect, e.middleRectCover),
                          setTimeout(function() {
                            e.animateCircle(11),
                              setTimeout(function() {
                                e.reset();
                              }, o);
                          }, o + 150);
                      }, o - i);
                  }, 3 * o + s);
              }
            },
            {
              key: "animateOutPaths",
              value: function(e) {
                e.forEach(function(e) {
                  e.animate(
                    { strokeDashoffset: e.pathLength },
                    o,
                    mina.linear,
                    function() {
                      e.attr("opacity", "0");
                    }
                  );
                });
              }
            },
            {
              key: "animateInPaths",
              value: function(e) {
                e.forEach(function(e) {
                  e.attr("opacity", "1"),
                    e.animate(
                      { strokeDashoffset: 2 * e.pathLength },
                      o,
                      mina.linear
                    );
                });
              }
            },
            {
              key: "animateCircle",
              value: function(e) {
                this.circle.animate({ r: e }, r, mina.easeout);
              }
            },
            {
              key: "animateInRect",
              value: function(e, t) {
                var a = this;
                e.attr("transform", "s0,0"),
                  e.attr("opacity", "1"),
                  e.animate({ transform: "s1,1" }, r, mina.easeout, function() {
                    t && a.animateInRect(t);
                  });
              }
            },
            {
              key: "reset",
              value: function() {
                var e = this,
                  t = { transform: "s0,0", opacity: "0" },
                  a = { strokeDashoffset: 0 };
                this.bottomRectCover.attr(t),
                  this.middleRectCover.attr(t),
                  this.bottomRect.attr(t),
                  this.middleRect.attr(t),
                  this.bottomPaths.forEach(function(e) {
                    e.attr(a);
                  }),
                  this.middlePaths.forEach(function(e) {
                    e.attr(a);
                  }),
                  this.topPaths.forEach(function(e) {
                    e.attr("stroke-dashoffset", e.pathLength);
                  }),
                  this.isHovered
                    ? setTimeout(function() {
                        e.runAnimation();
                      }, 400)
                    : (this.isPlaying = !1);
              }
            },
            {
              key: "end",
              value: function() {
                this.isHovered = !1;
              }
            }
          ]),
          e
        );
      })();
    t.default = l;
  },
  function(e, t) {
    "use strict";
    function a(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    var n = Math.ceil;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      r = 400,
      s = (function() {
        function e(t) {
          a(this, e),
            (this.svg = t),
            (this.isPlaying = !1),
            (this.isHovered = !1),
            (this.hasDrawn1 = !1),
            (this.hasDrawn2 = !1),
            (this.hasDrawn3 = !1),
            (this.hasReset = !1),
            (this.snapCanvas = Snap(this.svg)),
            (this.tube1 = this.snapCanvas.select("#office-hours-tube-1")),
            (this.tube2 = this.snapCanvas.select("#office-hours-tube-2")),
            (this.tube3 = this.snapCanvas.select("#office-hours-tube-3")),
            (this.tube4 = this.snapCanvas.select("#office-hours-tube-4")),
            (this.dots = this.snapCanvas.select("#office-hours-dots")),
            (this.state = 0);
        }
        return (
          o(e, [
            {
              key: "init",
              value: function() {
                (this.tube1.pathLength = n(
                  Snap.path.getTotalLength(this.tube1)
                )),
                  (this.tube2.pathLength = n(
                    Snap.path.getTotalLength(this.tube2)
                  )),
                  (this.tube3.pathLength = n(
                    Snap.path.getTotalLength(this.tube3)
                  )),
                  (this.tube4.pathLength = n(
                    Snap.path.getTotalLength(this.tube4)
                  )),
                  this.setTubeDashOffsets();
              }
            },
            {
              key: "play",
              value: function() {
                (this.isHovered = !0),
                  this.isPlaying ||
                    ((this.isPlaying = !0), this.runAnimation());
              }
            },
            {
              key: "runAnimation",
              value: function() {
                this.animateTube(this.tube1, this.tube1.pathLength, 0),
                  this.animateTube(this.tube2, this.tube2.pathLength, 1);
              }
            },
            {
              key: "animateTube",
              value: function(e, t, a) {
                var n = this;
                e.animate(
                  { strokeDashoffset: t },
                  r,
                  mina.easeinout,
                  function() {
                    setTimeout(function() {
                      0 === n.state && n.rotateAndDraw1(),
                        1 === n.state && n.rotateAndDraw2(),
                        2 === n.state && n.rotateAndDraw3(),
                        3 === n.state && n.reset(),
                        (n.state += a);
                    }, 300);
                  }
                );
              }
            },
            {
              key: "rotateAndDraw1",
              value: function() {
                this.hasDrawn1 ||
                  ((this.hasDrawn1 = !0),
                  this.dots.animate(
                    { transform: "r-180,24,24" },
                    r,
                    mina.easeinout
                  ),
                  this.animateTube(this.tube3, 2 * this.tube3.pathLength, 0),
                  this.animateTube(this.tube4, 2 * this.tube3.pathLength, 1));
              }
            },
            {
              key: "rotateAndDraw2",
              value: function() {
                this.hasDrawn2 ||
                  ((this.hasDrawn2 = !0),
                  this.dots.animate(
                    { transform: "r-360,24,24" },
                    r,
                    mina.easeinout
                  ),
                  this.animateTube(this.tube3, this.tube3.pathLength, 0),
                  this.animateTube(this.tube4, this.tube4.pathLength, 1));
              }
            },
            {
              key: "rotateAndDraw3",
              value: function() {
                this.hasDrawn3 ||
                  ((this.hasDrawn3 = !0),
                  this.dots.animate(
                    { transform: "r-540,24,24" },
                    r,
                    mina.easeinout
                  ),
                  this.tube1.attr("strokeDashoffset", "60"),
                  this.tube2.attr("strokeDashoffset", "60"),
                  this.animateTube(this.tube1, 0, 0),
                  this.animateTube(this.tube2, 0, 1));
              }
            },
            {
              key: "setTubeDashOffsets",
              value: function() {
                this.tube1.attr("stroke-dashoffset", 2 * this.tube1.pathLength),
                  this.tube2.attr(
                    "stroke-dashoffset",
                    2 * this.tube2.pathLength
                  ),
                  this.tube3.attr(
                    "stroke-dashoffset",
                    3 * this.tube3.pathLength
                  ),
                  this.tube4.attr(
                    "stroke-dashoffset",
                    3 * this.tube4.pathLength
                  );
              }
            },
            {
              key: "reset",
              value: function() {
                var e = this;
                this.hasReset ||
                  ((this.hasReset = !0),
                  setTimeout(function() {
                    (e.isPlaying = !1),
                      (e.hasDrawn1 = !1),
                      (e.hasDrawn2 = !1),
                      (e.hasDrawn3 = !1),
                      (e.hasReset = !1),
                      (e.state = 0),
                      e.dots.transform("r0,24,24"),
                      e.setTubeDashOffsets();
                  }, 10),
                  this.isHovered
                    ? setTimeout(function() {
                        e.runAnimation();
                      }, 20)
                    : (this.isPlaying = !1));
              }
            },
            {
              key: "end",
              value: function() {
                this.isHovered = !1;
              }
            }
          ]),
          e
        );
      })();
    t.default = s;
  },
  function(e, t) {
    "use strict";
    function a(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      o = 250,
      r = (function() {
        function e(t) {
          a(this, e),
            (this.svg = t),
            (this.isPlaying = !1),
            (this.isHovered = !1),
            (this.circlesContainer = this.svg.getElementById(
              "platform-circles"
            )),
            (this.circles = this.circlesContainer.children),
            (this.circleCount = this.circles.length);
        }
        return (
          n(e, [
            { key: "init", value: function() {} },
            {
              key: "play",
              value: function() {
                (this.isHovered = !0),
                  this.isPlaying ||
                    ((this.isPlaying = !0), this.runAnimation());
              }
            },
            {
              key: "runAnimation",
              value: function() {
                this.animateCircles();
              }
            },
            {
              key: "animateCircles",
              value: function() {
                for (var e = 0; e < this.circleCount; e++)
                  this.showCircle(this.circles[e], e),
                    this.hideCircle(this.circles[e], e);
              }
            },
            {
              key: "showCircle",
              value: function(e, t) {
                setTimeout(function() {
                  e.setAttribute("opacity", "1");
                }, t * o);
              }
            },
            {
              key: "hideCircle",
              value: function(e, t) {
                var a = this;
                setTimeout(function() {
                  e.setAttribute("opacity", "0"),
                    t === a.circleCount - 1 && a.reset();
                }, t * o + 2350);
              }
            },
            {
              key: "reset",
              value: function() {
                var e = this;
                this.isHovered
                  ? setTimeout(function() {
                      e.runAnimation();
                    }, 400)
                  : (this.isPlaying = !1);
              }
            },
            {
              key: "end",
              value: function() {
                this.isHovered = !1;
              }
            }
          ]),
          e
        );
      })();
    t.default = r;
  },
  function(e, t) {
    "use strict";
    function a(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function n(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      r = 200,
      s = {
        TOPLEFT: { x: 5, y: 5 },
        TOPCENTER: { x: 30, y: 5 },
        CENTERLEFT: { x: 5, y: 30 },
        CENTERRIGHT: { x: 43, y: 18 },
        BOTTOMCENTER: { x: 18, y: 43 },
        BOTTOMRIGHT: { x: 43, y: 43 }
      },
      i = {
        A: { primary: "#4768FD", secondary: "#FCD230" },
        B: { primary: "#FCD230", secondary: "#1CE8B5" }
      },
      l = {
        A: { primary: "#4768FD", secondary: "#FF6C00" },
        B: { primary: "#FF6C00", secondary: "#4768FD" }
      },
      d = (function() {
        function e(t) {
          n(this, e),
            (this.svg = t),
            (this.isPlaying = !1),
            (this.isHovered = !1),
            (this.snapCanvas = Snap(this.svg)),
            (this.lineA = this.snapCanvas.select("#sandbox-line-a")),
            (this.lineB = this.snapCanvas.select("#sandbox-line-b")),
            (this.dotA = this.snapCanvas.select("#sandbox-dot-a")),
            (this.dotB = this.snapCanvas.select("#sandbox-dot-b")),
            (this.dotAMotion = this.snapCanvas.select("#sandbox-dot-a-motion")),
            (this.dotBMotion = this.snapCanvas.select("#sandbox-dot-b-motion"));
        }
        return (
          o(e, [
            { key: "init", value: function() {} },
            {
              key: "play",
              value: function() {
                (this.isHovered = !0),
                  this.isPlaying ||
                    ((this.isPlaying = !0), this.runAnimation());
              }
            },
            {
              key: "runAnimation",
              value: (function() {
                var e = a(
                  regeneratorRuntime.mark(function e() {
                    var t = this;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.runCycle1();
                            case 2:
                              setTimeout(function() {
                                t.runCycle2();
                              }, 1e3);
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "runCycle1",
              value: (function() {
                var e = a(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.lineOut();
                            case 2:
                              return (e.next = 4), this.moveDots();
                            case 4:
                              return (e.next = 6), this.moveDotsAndGrowLines();
                            case 6:
                              return (
                                (e.next = 8),
                                this.lineOutAndColorDots(
                                  i.A.secondary,
                                  i.B.secondary
                                )
                              );
                            case 8:
                              return (
                                (e.next = 10),
                                this.growLinesAndSetColor(
                                  l.A.secondary,
                                  l.B.secondary
                                )
                              );
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "runCycle2",
              value: (function() {
                var e = a(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.lineOut();
                            case 2:
                              return (e.next = 4), this.moveDots();
                            case 4:
                              return (e.next = 6), this.moveDotsAndGrowLines();
                            case 6:
                              return (
                                (e.next = 8),
                                this.lineOutAndColorDots(
                                  i.A.primary,
                                  i.B.primary
                                )
                              );
                            case 8:
                              return (
                                (e.next = 10),
                                this.growLinesAndSetColor(
                                  l.A.primary,
                                  l.B.primary
                                )
                              );
                            case 10:
                              this.reset();
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "lineOut",
              value: (function() {
                var e = a(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.animatePoint(this.lineA, {
                                    x2: s.TOPCENTER.x,
                                    y2: s.TOPCENTER.y
                                  }),
                                  this.animatePoint(this.lineB, {
                                    x1: s.BOTTOMCENTER.x,
                                    y1: s.BOTTOMCENTER.y
                                  })
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "moveDots",
              value: (function() {
                var e = a(
                  regeneratorRuntime.mark(function e() {
                    var t = this;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                "return",
                                new Promise(function(e) {
                                  setTimeout(function() {
                                    t.lineA.attr("opacity", "0"),
                                      t.lineB.attr("opacity", "0"),
                                      Promise.all([
                                        t.animatePoint(t.dotAMotion, {
                                          cx: s.TOPLEFT.x,
                                          cy: s.TOPLEFT.y
                                        }),
                                        t.animatePoint(t.dotBMotion, {
                                          cx: s.BOTTOMRIGHT.x,
                                          cy: s.BOTTOMRIGHT.y
                                        })
                                      ]).then(e);
                                  }, r);
                                })
                              );
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "moveDotsAndGrowLines",
              value: (function() {
                var e = a(
                  regeneratorRuntime.mark(function e() {
                    var t = this;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                "return",
                                new Promise(function(e) {
                                  setTimeout(function() {
                                    t.lineA.attr({
                                      x1: s.TOPLEFT.x,
                                      y1: s.TOPLEFT.y,
                                      x2: s.TOPLEFT.x,
                                      y2: s.TOPLEFT.y,
                                      opacity: 1
                                    }),
                                      t.lineB.attr({
                                        x1: s.BOTTOMRIGHT.x,
                                        y1: s.BOTTOMRIGHT.y,
                                        x2: s.BOTTOMRIGHT.x,
                                        y2: s.BOTTOMRIGHT.y,
                                        opacity: 1
                                      }),
                                      Promise.all([
                                        t.animatePoint(t.lineA, {
                                          x1: s.CENTERLEFT.x,
                                          y1: s.CENTERLEFT.y
                                        }),
                                        t.animatePoint(t.lineB, {
                                          x1: s.CENTERRIGHT.x,
                                          y1: s.CENTERRIGHT.y
                                        }),
                                        t.animatePoint(t.dotAMotion, {
                                          cx: s.CENTERLEFT.x,
                                          cy: s.CENTERLEFT.y
                                        }),
                                        t.animatePoint(t.dotBMotion, {
                                          cx: s.CENTERRIGHT.x,
                                          cy: s.CENTERRIGHT.y
                                        })
                                      ]).then(e);
                                  }, r);
                                })
                              );
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "lineOutAndColorDots",
              value: function(e, t) {
                var a = this;
                return new Promise(function(n) {
                  setTimeout(function() {
                    a.dotA.attr("fill", e),
                      a.dotB.attr("fill", t),
                      Promise.all([
                        a.animatePoint(a.lineA, {
                          x2: s.CENTERLEFT.x,
                          y2: s.CENTERLEFT.y
                        }),
                        a.animatePoint(a.lineB, {
                          x2: s.CENTERRIGHT.x,
                          y2: s.CENTERRIGHT.y
                        })
                      ]).then(n);
                  }, r);
                });
              }
            },
            {
              key: "growLinesAndSetColor",
              value: function(e, t) {
                var a = this;
                return new Promise(function(n) {
                  setTimeout(function() {
                    a.lineA.attr("stroke", e),
                      a.lineB.attr("stroke", t),
                      Promise.all([
                        a.animatePoint(a.lineA, {
                          x1: s.TOPCENTER.x,
                          y1: s.TOPCENTER.y
                        }),
                        a.animatePoint(a.lineB, {
                          x2: s.BOTTOMCENTER.x,
                          y2: s.BOTTOMCENTER.y
                        }),
                        a.animatePoint(a.dotAMotion, {
                          cx: s.TOPCENTER.x,
                          cy: s.TOPCENTER.y
                        }),
                        a.animatePoint(a.dotBMotion, {
                          cx: s.BOTTOMCENTER.x,
                          cy: s.BOTTOMCENTER.y
                        })
                      ]).then(n);
                  }, r);
                });
              }
            },
            {
              key: "animatePoint",
              value: (function() {
                var e = a(
                  regeneratorRuntime.mark(function e(t, a) {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                t.animateWithPromise(a, 250, mina.easeinout)
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "reset",
              value: function() {
                var e = this;
                this.isHovered
                  ? setTimeout(function() {
                      e.runAnimation();
                    }, 700)
                  : (this.isPlaying = !1);
              }
            },
            {
              key: "end",
              value: function() {
                this.isHovered = !1;
              }
            }
          ]),
          e
        );
      })();
    t.default = d;
  },
  ,
  ,
  ,
  function(e, t, a) {
    "use strict";
    function n(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      s = a(0),
      i = (function() {
        function e(t) {
          o(this, e),
            (this.xPos = t.xPos || 0),
            (this.yPos = t.yPos || 0),
            (this.strokeWidth = t.strokeWidth || 1),
            (this.color = t.color || s.DEFAULT_COLOR),
            (this.shape = t.shape),
            (this.rotation = t.rotation || 0),
            (this.svgCanvas = t.svgCanvas),
            (this.animLength = t.animLength || s.DEFAULT_ANIM_LENGTH),
            (this.paths = null),
            (this.segments = t.segmentCount || 1),
            (this.dashLength = t.dashLength || 10),
            (this.group = null);
        }
        return (
          r(e, [
            {
              key: "init",
              value: function() {
                if (this.svgCanvas && this.shape) {
                  (this.s = Snap(this.svgCanvas)),
                    (this.group = this.s.group());
                  for (var e = 0; e < this.segments; e++) {
                    var t = e * (2 * this.dashLength),
                      a = t + this.dashLength,
                      n = this.s.line(0, t, 0, a);
                    n.attr({
                      stroke: this.color,
                      strokeWidth: this.strokeWidth,
                      strokeDasharray: this.dashLength,
                      strokeDashoffset: 3 * this.dashLength
                    }),
                      this.group.add(n);
                  }
                  this.paths = this.group.children().map(function(e) {
                    return { line: e, nextPath: null };
                  });
                  for (var o = 0; o < this.paths.length; o++)
                    this.paths[o].nextPath = this.paths[o + 1];
                  this.group.transform("t" + this.xPos + "," + this.yPos);
                }
              }
            },
            {
              key: "getElement",
              value: function() {
                return this.group;
              }
            },
            {
              key: "getProps",
              value: function() {
                return { color: this.color, x: this.xPos, y: this.yPos };
              }
            },
            {
              key: "setColor",
              value: function(e) {
                this.color = e;
                for (var t = 0; t < this.paths.length; t++)
                  this.paths[t].line.attr({ stroke: this.color });
              }
            },
            {
              key: "setPosition",
              value: function(e, t) {
                (this.xPos = e),
                  (this.yPos = t),
                  this.group.transform("t" + this.xPos + "," + this.yPos);
              }
            },
            {
              key: "setStrokeWidth",
              value: function(e) {
                this.path.attr({ strokeWidth: e });
              }
            },
            {
              key: "animateOpacity",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e(t, a) {
                    var n =
                      2 < arguments.length && void 0 !== arguments[2]
                        ? arguments[2]
                        : this.animLength;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                t.line.animateWithPromise(
                                  { opacity: a },
                                  n,
                                  s.DEFAULT_EASING
                                )
                              );
                            case 2:
                              if (t.nextPath) {
                                e.next = 4;
                                break;
                              }
                              return e.abrupt("return");
                            case 4:
                              return (
                                (e.next = 6),
                                this.animateOpacity(t.nextPath, a, n)
                              );
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateDashOffsets",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e(t, a) {
                    var n =
                      2 < arguments.length && void 0 !== arguments[2]
                        ? arguments[2]
                        : this.animLength;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                t.line.animateWithPromise(
                                  {
                                    strokeDashoffset: s.BROWSER.isFirefox
                                      ? a
                                      : a + "px"
                                  },
                                  n,
                                  s.DEFAULT_EASING
                                )
                              );
                            case 2:
                              if (t.nextPath) {
                                e.next = 4;
                                break;
                              }
                              return e.abrupt("return");
                            case 4:
                              return (
                                (e.next = 6),
                                this.animateDashOffsets(t.nextPath, a, n / 2)
                              );
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOut",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.animateOpacity(this.paths[0], 0)
                              );
                            case 2:
                              this.reset();
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateIn",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.animateDashOffsets(
                                  this.paths[0],
                                  2 * this.dashLength,
                                  this.animLength
                                )
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOut",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.animateDashOffsets(
                                  this.paths[0],
                                  this.dashLength,
                                  this.animLength
                                )
                              );
                            case 2:
                              this.reset();
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "reset",
              value: function() {
                for (var e = 0; e < this.paths.length; e++)
                  this.paths[e].line.attr({
                    strokeWidth: this.strokeWidth,
                    strokeDashoffset: 3 * this.dashLength,
                    strokeDasharray: this.dashLength,
                    opacity: 1
                  });
              }
            },
            {
              key: "setFinal",
              value: function() {
                for (var e = 0; e < this.paths.length; e++)
                  this.paths[e].line.attr({
                    strokeDashoffset: 2 * this.dashLength,
                    opacity: 0
                  });
              }
            }
          ]),
          e
        );
      })();
    t.default = i;
  },
  function(e, t, a) {
    "use strict";
    function n(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      s = a(0),
      i = (function() {
        function e(t) {
          o(this, e),
            (this.xPos = t.xPos || 0),
            (this.yPos = t.yPos || 0),
            (this.radius = t.radius || 1),
            (this.color = t.color || s.DEFAULT_COLOR),
            (this.svgCanvas = t.svgCanvas),
            (this.dot = null),
            (this.animLength = t.animLength || s.DEFAULT_ANIM_LENGTH);
        }
        return (
          r(e, [
            {
              key: "init",
              value: function() {
                this.svgCanvas &&
                  ((this.s = Snap(this.svgCanvas)),
                  (this.scaleX = 0),
                  (this.scaleY = 0),
                  (this.dot = this.s.circle(this.xPos, this.yPos, this.radius)),
                  this.dot.attr({
                    fill: this.color,
                    transform: "s" + this.scaleX + "," + this.scaleY
                  }),
                  (this.initialXPos = this.xPos),
                  (this.initialYPos = this.yPos),
                  (this.initialColor = this.color));
              }
            },
            {
              key: "getElement",
              value: function() {
                return this.dot;
              }
            },
            {
              key: "getProps",
              value: function() {
                return { color: this.color, x: this.xPos, y: this.yPos };
              }
            },
            {
              key: "setColor",
              value: function(e) {
                (this.color = e), this.dot.attr({ fill: this.color });
              }
            },
            {
              key: "setPosition",
              value: function(e, t) {
                (this.xPos = e),
                  (this.yPos = t),
                  this.dot.attr({
                    x: this.xPos,
                    y: this.yPos,
                    transform: "t0,0s" + this.scaleX + "," + this.scaleY
                  });
              }
            },
            {
              key: "setScale",
              value: function(e, t) {
                (this.scaleX = e), (this.scaleY = t);
                var a = this.dot.transform().localMatrix;
                this.dot.attr({
                  transform:
                    "t" + a.split().x + "," + a.split().y + "s" + e + "," + t
                });
              }
            },
            {
              key: "setOpacity",
              value: function(e) {
                this.dot.attr({ opacity: e });
              }
            },
            {
              key: "animateOpacity",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e(t) {
                    var a =
                      1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.animLength;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.dot.animateWithPromise(
                                  { opacity: t },
                                  a,
                                  s.DEFAULT_EASING
                                )
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateScale",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e(t, a) {
                    var n =
                        2 < arguments.length && void 0 !== arguments[2]
                          ? arguments[2]
                          : this.animLength,
                      o;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (o = this.dot.getBBox()),
                                (e.next = 3),
                                this.dot.animateWithPromise(
                                  {
                                    transform:
                                      "s" +
                                      t +
                                      "," +
                                      a +
                                      ", " +
                                      o.cx +
                                      ", " +
                                      o.cy
                                  },
                                  n,
                                  s.DEFAULT_EASING
                                )
                              );
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animatePosition",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e(t, a) {
                    var n =
                        2 < arguments.length && void 0 !== arguments[2]
                          ? arguments[2]
                          : this.animLength,
                      o;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (o = this.dot.transform().localMatrix),
                                (e.next = 3),
                                this.dot.animateWithPromise(
                                  {
                                    transform:
                                      "t" +
                                      t +
                                      "," +
                                      a +
                                      "s" +
                                      o.split().scalex +
                                      "," +
                                      o.split().scaley
                                  },
                                  n,
                                  s.DEFAULT_EASING
                                )
                              );
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateIn",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.animateScale(1, 1, this.animLength)
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOut",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.animateScale(0, 0, this.animLength)
                              );
                            case 2:
                              this.reset();
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOut",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.animateOpacity(0);
                            case 2:
                              this.reset();
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "reset",
              value: function() {
                this.setScale(0, 0),
                  this.setOpacity(1),
                  this.setPosition(this.initialXPos, this.initialYPos);
              }
            },
            {
              key: "setFinal",
              value: function() {
                this.setScale(1, 1), this.setOpacity(0);
              }
            }
          ]),
          e
        );
      })();
    t.default = i;
  },
  function(e, t, a) {
    "use strict";
    function n(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      s = a(0),
      i = (function() {
        function e(t) {
          o(this, e),
            (this.xPos = t.xPos || 0),
            (this.yPos = t.yPos || 0),
            (this.width = t.longSide || 4),
            (this.height = t.shortSides || 4),
            (this.spaceBetween = t.spaceBetween || 2),
            (this.radius = t.radius || 1),
            (this.color = t.color || s.DEFAULT_COLOR),
            (this.svgCanvas = t.svgCanvas),
            (this.dots = null),
            (this.rotation = t.rotation || 0),
            (this.animLength = t.animLength || s.DEFAULT_ANIM_LENGTH);
        }
        return (
          r(e, [
            {
              key: "init",
              value: function() {
                if (this.svgCanvas) {
                  (this.s = Snap(this.svgCanvas)),
                    (this.dotGroup = this.s.group());
                  for (var e = [], t = 0; t <= this.width; t++) {
                    var a = this.width - t * this.spaceBetween,
                      n = void 0;
                    if (0 == t % 2) {
                      for (var o = 0; o <= this.height - t; o++)
                        if (0 == o % 2) {
                          n = this.height - o * this.spaceBetween;
                          var r = this.s.circle(a, n, this.radius);
                          r.attr({ fill: this.color, transform: "s0" }),
                            e.push(r),
                            this.dotGroup.add(r);
                        }
                    } else if (1 == t % 2)
                      for (var s = 0; s <= this.height - t; s++)
                        if (1 == s % 2) {
                          n = this.height - s * this.spaceBetween;
                          var i = this.s.circle(a, n, this.radius);
                          i.attr({ fill: this.color, transform: "s0" }),
                            e.push(i),
                            this.dotGroup.add(i);
                        }
                  }
                  this.dots = e.map(function(e) {
                    return { path: e, nextDot: null };
                  });
                  for (var l = 0; l < this.dots.length; l++)
                    this.dots[l].nextDot = this.dots[l + 1];
                  this.dotGroup.transform("t" + this.xPos + "," + this.yPos);
                }
              }
            },
            {
              key: "getElement",
              value: function() {
                return this.dotGroup;
              }
            },
            {
              key: "getProps",
              value: function() {
                return { color: this.color, x: this.xPos, y: this.yPos };
              }
            },
            {
              key: "setColor",
              value: function(e) {
                this.color = e;
                for (var t = 0; t < this.dots.length; t++)
                  this.dots[t].path.attr({ fill: e });
              }
            },
            {
              key: "setPosition",
              value: function(e, t) {
                (this.xPos = e),
                  (this.yPos = t),
                  this.dotGroup.transform("t" + this.xPos + "," + this.yPos);
              }
            },
            {
              key: "setScale",
              value: function(e, t, a) {
                e.path.attr({ transform: "s" + t + "," + a });
              }
            },
            {
              key: "setOpacity",
              value: function(e, t) {
                e.path.attr({ opacity: t });
              }
            },
            {
              key: "setScaleAll",
              value: function(e, t) {
                for (var a = 0; a < this.dots.length; a++)
                  this.setScale(this.dots[a], e, t);
              }
            },
            {
              key: "setOpacityAll",
              value: function(e) {
                for (var t = 0; t < this.dots.length; t++)
                  this.setOpacity(this.dots[t], e);
              }
            },
            {
              key: "animateOpacity",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e(t, a) {
                    var n =
                      2 < arguments.length && void 0 !== arguments[2]
                        ? arguments[2]
                        : this.animLength;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                t.path.animateWithPromise(
                                  { opacity: a },
                                  n / 4,
                                  s.DEFAULT_EASING
                                )
                              );
                            case 2:
                              if (t.nextDot) {
                                e.next = 4;
                                break;
                              }
                              return e.abrupt("return");
                            case 4:
                              return (
                                (e.next = 6),
                                this.animateOpacity(t.nextDot, a, n)
                              );
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateScale",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e(t, a, n) {
                    var o =
                      3 < arguments.length && void 0 !== arguments[3]
                        ? arguments[3]
                        : this.animLength;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                t.path.animateWithPromise(
                                  { transform: "s" + a + "," + n },
                                  o,
                                  s.DEFAULT_EASING
                                )
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateScaleStaggered",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e(t, a, n) {
                    var o =
                      3 < arguments.length && void 0 !== arguments[3]
                        ? arguments[3]
                        : this.animLength;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                t.path.animateWithPromise(
                                  { transform: "s" + a + "," + n },
                                  o,
                                  s.DEFAULT_EASING
                                )
                              );
                            case 2:
                              if (t.nextDot) {
                                e.next = 4;
                                break;
                              }
                              return e.abrupt("return");
                            case 4:
                              return (
                                (e.next = 6),
                                this.animateScaleStaggered(t.nextDot, a, n, o)
                              );
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateIn",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.animateScaleStaggered(
                                  this.dots[0],
                                  1,
                                  1,
                                  this.animLength / 4
                                )
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOut",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.animateScaleStaggered(
                                  this.dots[0],
                                  0,
                                  0,
                                  this.animLength / 4
                                )
                              );
                            case 2:
                              this.reset();
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOut",
              value: (function() {
                var e = n(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.animateOpacity(this.dots[0], 0)
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "reset",
              value: function() {
                this.setScaleAll(0, 0), this.setOpacityAll(1);
              }
            },
            {
              key: "setFinal",
              value: function() {
                this.setScaleAll(1, 1), this.setOpacityAll(0);
              }
            }
          ]),
          e
        );
      })();
    t.default = i;
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(e, t, a) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    var r = Math.floor;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = (function() {
      function e(e, t) {
        for (var a = 0, n; a < t.length; a++)
          (n = t[a]),
            (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
      }
      return function(t, a, n) {
        return a && e(t.prototype, a), n && e(t, n), t;
      };
    })();
    a(5);
    var i = a(100),
      l = n(i),
      d = a(101),
      u = n(d),
      c = a(88),
      p = n(c),
      y = a(89),
      g = n(y),
      m = a(82),
      v = n(m),
      h = a(83),
      C = n(h),
      O = a(92),
      S = n(O),
      P = a(93),
      L = n(P),
      f = a(94),
      R = n(f),
      b = a(95),
      x = n(b),
      k = a(84),
      T = n(k),
      E = a(85),
      w = n(E),
      A = a(86),
      I = n(A),
      _ = a(87),
      M = n(_),
      B = a(96),
      D = n(B),
      q = a(97),
      H = n(q),
      G = a(98),
      W = n(G),
      F = a(99),
      N = n(F),
      U = a(90),
      z = n(U),
      V = a(91),
      X = n(V),
      Y = a(0),
      j = (function() {
        function e() {
          o(this, e),
            (this.endTime = Date.parse(Y.EVENT_DATE.toString()) / 1e3),
            (this.daysCounter = null),
            (this.hoursCounter = null),
            (this.minutesCounter = null),
            (this.secondsCounter = null),
            (this.wrapper = document.querySelector(Y.SELECTORS.WRAPPER)),
            (this.daysLabel = document.querySelector(Y.SELECTORS.DAYS_LABEL)),
            (this.hoursLabel = document.querySelector(Y.SELECTORS.HOURS_LABEL)),
            (this.minutesLabel = document.querySelector(
              Y.SELECTORS.MINUTES_LABEL
            )),
            (this.secondsLabel = document.querySelector(
              Y.SELECTORS.SECONDS_LABEL
            )),
            (this.svgCanvases = document.querySelectorAll(
              Y.SELECTORS.SVG_CANVASES
            )),
            (this.controlButtons = document.querySelectorAll(
              Y.SELECTORS.CONTROL_BUTTONS
            )),
            (this.startButton = document.querySelector(
              Y.SELECTORS.START_BUTTON
            )),
            (this.gridCanvas = document.querySelector(Y.SELECTORS.GRID)),
            (this.render = this.render.bind(this)),
            (this.raf = null),
            (this.currentDigits = {
              seconds: { firstDigit: null, secondDigit: null },
              minutes: { firstDigit: null, secondDigit: null },
              hours: { firstDigit: null, secondDigit: null },
              days: { firstDigit: null, secondDigit: null }
            }),
            (this.animateInNumber = this.animateInNumber.bind(this)),
            (this.animateOutNumber = this.animateOutNumber.bind(this)),
            (this.handleHoverIn = this.handleHoverIn.bind(this)),
            (this.handleHoverOut = this.handleHoverOut.bind(this)),
            (this.handleClick = this.handleClick.bind(this)),
            (this.numbers = {}),
            (this.hasRendered = !1),
            (this.introSequence = [250, 750, 1250, 1750, 500, 1500, 1e3, 0]);
        }
        return (
          s(e, [
            {
              key: "init",
              value: function() {
                if (this.wrapper) {
                  for (var e = 0; e < this.svgCanvases.length; e++) {
                    var t = void 0,
                      a = void 0,
                      n = void 0,
                      o = void 0,
                      r = void 0,
                      s = void 0,
                      i = void 0,
                      d = void 0,
                      c = void 0,
                      y = void 0,
                      m = this.svgCanvases[e];
                    m.classList.contains(Y.CLASSES.SET_TWO_CANVASES)
                      ? ((t = new l.default(this, m)),
                        (a = new p.default(this, m)),
                        (n = new v.default(this, m)),
                        (o = new S.default(this, m)),
                        (r = new R.default(this, m)),
                        (s = new T.default(this, m)),
                        (i = new I.default(this, m)),
                        (d = new D.default(this, m)),
                        (c = new W.default(this, m)),
                        (y = new z.default(this, m)))
                      : m.classList.contains(Y.CLASSES.SET_ONE_CANVASES) &&
                        ((t = new u.default(this, m)),
                        (a = new g.default(this, m)),
                        (n = new C.default(this, m)),
                        (o = new L.default(this, m)),
                        (r = new x.default(this, m)),
                        (s = new w.default(this, m)),
                        (i = new M.default(this, m)),
                        (d = new H.default(this, m)),
                        (c = new N.default(this, m)),
                        (y = new X.default(this, m))),
                      t.init(),
                      a.init(),
                      n.init(),
                      o.init(),
                      r.init(),
                      s.init(),
                      i.init(),
                      d.init(),
                      c.init(),
                      y.init();
                    var h = m.getAttribute("data-digit");
                    (this.numbers[h] = {
                      0: t,
                      9: a,
                      8: n,
                      7: o,
                      6: r,
                      5: s,
                      4: i,
                      3: d,
                      2: c,
                      1: y,
                      activeNumber: null,
                      isHovered: !1
                    }),
                      "seconds-second-digit" !== h &&
                        (m.addEventListener("mouseenter", this.handleHoverIn),
                        m.addEventListener("mouseleave", this.handleHoverOut),
                        m.addEventListener("click", this.handleClick));
                  }
                  this.setCurrentLabel(), this.render();
                }
              }
            },
            {
              key: "handleHoverIn",
              value: function(e) {
                var t = e.currentTarget,
                  a = t.getAttribute("data-digit"),
                  n = this.numbers[a],
                  o = n.activeNumber,
                  r = n[o];
                (n.isHovered = !0),
                  this.fadeOutNumber(r, n),
                  this.animateInNumber(r, n);
              }
            },
            {
              key: "handleHoverOut",
              value: function(e) {
                var t = e.currentTarget,
                  a = t.getAttribute("data-digit"),
                  n = this.numbers[a],
                  o = n.activeNumber,
                  r = n[o];
                (this.numbers[a].isHovered = !1),
                  this.fadeOutNumber(r, n),
                  this.animateInNumber(r, n);
              }
            },
            {
              key: "handleClick",
              value: function(e) {
                var t = e.currentTarget,
                  a = t.getAttribute("data-digit"),
                  n = this.numbers[a],
                  o = n.activeNumber,
                  r = n[o];
                r.randomizeColors();
              }
            },
            {
              key: "setCurrentLabel",
              value: function() {
                var e = this.getTime(),
                  t = Y.COUNTDOWN_LABEL_TEXT.STARTED;
                if (0 < e.timeLeft) {
                  var a =
                      86399 < e.timeLeft
                        ? e.daysLeft +
                          " " +
                          (0, Y.SINGULARIZE)(
                            e.daysLeft,
                            Y.COUNTDOWN_LABEL_TEXT.DAYS
                          )
                        : "",
                    n =
                      3599 < e.timeLeft && 0 !== e.hoursLeft
                        ? e.hoursLeft +
                          " " +
                          (0, Y.SINGULARIZE)(
                            e.hoursLeft,
                            Y.COUNTDOWN_LABEL_TEXT.HOURS
                          )
                        : "",
                    o =
                      59 < e.timeLeft && 0 !== e.minutesLeft
                        ? e.minutesLeft +
                          " " +
                          (0, Y.SINGULARIZE)(
                            e.minutesLeft,
                            Y.COUNTDOWN_LABEL_TEXT.MINUTES
                          )
                        : "",
                    r =
                      0 < e.timeLeft && 0 !== e.secondsLeft
                        ? e.secondsLeft +
                          " " +
                          (0, Y.SINGULARIZE)(
                            e.secondsLeft,
                            Y.COUNTDOWN_LABEL_TEXT.SECONDS
                          )
                        : "",
                    s = [a, n, o, r]
                      .filter(function(e) {
                        return e;
                      })
                      .join(", ");
                  t = [s, Y.COUNTDOWN_LABEL_TEXT.POST].join(" ");
                }
                this.wrapper.setAttribute(
                  "aria-label",
                  [Y.COUNTDOWN_LABEL_TEXT.PRE, t].join(" ")
                );
              }
            },
            {
              key: "stopAllAnimationsLoop",
              value: function(e) {
                for (var t = 0; t < e.length; t++) e[t].stop();
              }
            },
            {
              key: "getFormattedLabel",
              value: function(e) {
                var t = e.toString();
                return 10 > e ? "0" + t : t;
              }
            },
            {
              key: "getFormattedFirstDigit",
              value: function(e) {
                return e.toString().padStart(2, "0")[0];
              }
            },
            {
              key: "getFormattedSecondDigit",
              value: function(e) {
                return e.toString().padStart(2, "0")[1];
              }
            },
            {
              key: "getTime",
              value: function() {
                var e = Date.now() / 1e3,
                  t = Math.max(this.endTime - e, 0),
                  a = r(t / 86400),
                  n = r((t - 86400 * a) / 3600),
                  o = r((t - 86400 * a - 3600 * n) / 60),
                  s = r(t - 86400 * a - 3600 * n - 60 * o);
                return {
                  now: e,
                  timeLeft: t,
                  daysLeft: a,
                  hoursLeft: n,
                  minutesLeft: o,
                  secondsLeft: s
                };
              }
            },
            {
              key: "checkAndSetTime",
              value: function() {
                var e = this.getTime();
                0 === e.timeLeft && window.cancelAnimationFrame(this.raf),
                  this.daysCounter !== e.daysLeft && this.setDays(e),
                  this.hoursCounter !== e.hoursLeft && this.setHours(e),
                  this.minutesCounter !== e.minutesLeft && this.setMinutes(e),
                  this.secondsCounter !== e.secondsLeft && this.setSeconds(e),
                  this.hasRendered || (this.hasRendered = !0);
              }
            },
            {
              key: "setDays",
              value: function(e) {
                var t = this.getFormattedLabel(e.daysLeft),
                  a = this.numbers["days-first-digit"],
                  n = this.numbers["days-second-digit"],
                  o = this.currentDigits.days;
                this.compareDigits(
                  a,
                  n,
                  t,
                  o,
                  this.introSequence[0],
                  this.introSequence[1],
                  !1
                ),
                  (this.daysCounter = e.daysLeft);
              }
            },
            {
              key: "setHours",
              value: function(e) {
                var t = this.getFormattedLabel(e.hoursLeft),
                  a = this.numbers["hours-first-digit"],
                  n = this.numbers["hours-second-digit"],
                  o = this.currentDigits.hours;
                this.compareDigits(
                  a,
                  n,
                  t,
                  o,
                  this.introSequence[2],
                  this.introSequence[3],
                  !1
                ),
                  (this.hoursCounter = e.hoursLeft);
              }
            },
            {
              key: "setMinutes",
              value: function(e) {
                var t = this.getFormattedLabel(e.minutesLeft),
                  a = this.numbers["minutes-first-digit"],
                  n = this.numbers["minutes-second-digit"],
                  o = this.currentDigits.minutes;
                this.compareDigits(
                  a,
                  n,
                  t,
                  o,
                  this.introSequence[4],
                  this.introSequence[5],
                  !1
                ),
                  (this.minutesCounter = e.minutesLeft);
              }
            },
            {
              key: "setSeconds",
              value: function(e) {
                var t = this.getFormattedLabel(e.secondsLeft),
                  a = this.numbers["seconds-first-digit"],
                  n = this.numbers["seconds-second-digit"],
                  o = this.currentDigits.seconds;
                this.compareDigits(
                  a,
                  n,
                  t,
                  o,
                  this.introSequence[6],
                  this.introSequence[7],
                  !0
                ),
                  (this.secondsCounter = e.secondsLeft);
              }
            },
            {
              key: "compareDigits",
              value: function(e, t, a, n, o, r, s) {
                var i = this,
                  l = this.getFormattedFirstDigit(a),
                  d = this.getFormattedSecondDigit(a);
                if (l !== n.firstDigit) {
                  var u = e[n.firstDigit],
                    c = e[l];
                  this.animateOutNumber(u, e),
                    this.hasRendered || s
                      ? this.animateInNumber(c, e)
                      : setTimeout(function() {
                          i.animateInNumber(c, e);
                        }, o),
                    (n.firstDigit = l),
                    (e.activeNumber = l);
                }
                if (d !== n.secondDigit) {
                  var p = t[n.secondDigit],
                    y = t[d];
                  this.animateOutNumber(p, t),
                    this.hasRendered || s
                      ? this.animateInNumber(y, t)
                      : setTimeout(function() {
                          i.animateInNumber(y, t);
                        }, r),
                    (n.secondDigit = d),
                    (t.activeNumber = d);
                }
              }
            },
            {
              key: "animateOutNumber",
              value: function(e, t) {
                e &&
                  (e.stopAllAnimations(),
                  t.isHovered
                    ? (e.reset(), e.animateOutSecondary())
                    : (e.resetSecondary(), e.animateOut()));
              }
            },
            {
              key: "animateInNumber",
              value: function(e, t) {
                e &&
                  (e.stopAllAnimations(),
                  t.isHovered
                    ? (e.resetSecondary(), e.animateInSecondary())
                    : (e.randomizeColors(), e.reset(), e.animateIn()));
              }
            },
            {
              key: "fadeOutNumber",
              value: function(e, t) {
                e &&
                  (e.stopAllAnimations(),
                  t.isHovered ? e.fadeOut() : e.fadeOutSecondary(),
                  e.reset(),
                  e.resetSecondary());
              }
            },
            {
              key: "render",
              value: function() {
                (this.raf = requestAnimationFrame(this.render)),
                  this.checkAndSetTime();
              }
            }
          ]),
          e
        );
      })();
    t.default = j;
  },
  ,
  ,
  ,
  ,
  function(e) {
    "use strict";
    function t() {}
    var a = ".homepage-gallery__video__title";
    (t.init = function() {
      var t = document.querySelector(a);
      if (t) {
        var n = a.slice(1) + "--in-view";
        window.onYouTubeIframeAPIReady = function() {
          new YT.Player("player", {
            events: {
              onStateChange: function(a) {
                a.data == YT.PlayerState.ENDED ||
                a.data == YT.PlayerState.PAUSED
                  ? t.classList.add(n)
                  : t.classList.remove(n);
              }
            }
          });
        };
      }
    }),
      (e.exports = t);
  },
  ,
  function(e) {
    "use strict";
    var t = function(e) {
      (this.el = e),
        (this.dateEl = e.querySelector(".tweets__tweet__date")),
        (this.bodyEl = e.querySelector(".tweets__tweet__body")),
        this.load();
    };
    (t.URL =
      "https://storage.googleapis.com/io-2018.appspot.com/tweets/tweets.json"),
      (t.URL_SHORTENER_REGEX = /(https?:\/\/t\.co\/\w+)/),
      (t.prototype.render = function(e) {
        if (0 != e.length) {
          var t = e[0];
          (this.dateEl.textContent = t.created_humanized),
            (this.dateEl.href =
              "https://twitter.com/googledevs/status/" + t.id),
            (this.bodyEl.innerHTML = ""),
            this.bodyEl.appendChild(this.clean(t.text)),
            this.el.classList.add("tweets--visible");
        }
      }),
      (t.prototype.setVisible = function(e) {
        this.el.style.display = e ? "block" : "none";
      }),
      (t.prototype.load = function() {
        var e = new XMLHttpRequest();
        e.open("GET", t.URL),
          e.addEventListener(
            "load",
            function() {
              if (4 == e.readyState) {
                if (200 != e.status) return void this.setVisible(!1);
                var t = JSON.parse(e.responseText);
                this.render(t.tweets);
              }
            }.bind(this)
          ),
          e.send();
      }),
      (t.prototype.clean = function(e) {
        var a = document.createElement("span"),
          n = e.split(t.URL_SHORTENER_REGEX);
        return (
          n.forEach(function(e) {
            var n;
            t.URL_SHORTENER_REGEX.test(e)
              ? ((n = document.createElement("a")),
                (n.target = "_blank"),
                (n.href = e),
                (n.textContent = e))
              : ((n = document.createElement("span")), (n.textContent = e)),
              a.appendChild(n);
          }),
          a
        );
      }),
      (t.init = function() {
        var e = document.querySelector(".tweets");
        e && new t(e);
      }),
      (e.exports = t);
  },
  function(e) {
    "use strict";
    var t = function(e) {
      (this.el = e), this.load();
    };
    (t.URL =
      "https://storage.googleapis.com/gweb-io2017-weather.google.com.a.appspot.com/weather/weather.json?"),
      (t.prototype.render = function(e) {
        var t = 0,
          a = e.forecast;
        if (
          ([].forEach.call(
            a,
            function(e) {
              var a = '[data-weather-date-id="' + e.date + '"]',
                n = this.el.querySelector(a);
              if (n) {
                var o = n.querySelector(".weather__col__temperature__high"),
                  r = n.querySelector(".weather__col__temperature__low"),
                  s = n.querySelector("img");
                (o.textContent = e.high_temp_f + "\xB0"),
                  (r.textContent = e.low_temp_f + "\xB0"),
                  (s.src = e.condition_icon),
                  n.classList.add("weather__col--visible"),
                  (t += 1);
              }
            }.bind(this)
          ),
          !!t)
        ) {
          var n = e.attributions;
          if (n) {
            var o = n[0].url,
              r = this.el.querySelector("a");
            r.href = o;
          }
          this.el.classList.add("weather--visible");
        }
      }),
      (t.prototype.setVisible = function(e) {
        this.el.style.display = e ? "block" : "none";
      }),
      (t.prototype.load = function() {
        var e = new XMLHttpRequest();
        e.open("GET", t.URL),
          e.addEventListener(
            "load",
            function() {
              if (4 == e.readyState) {
                if (200 != e.status) return void this.setVisible(!1);
                var t = JSON.parse(e.responseText);
                this.render(t.weather);
              }
            }.bind(this)
          ),
          e.send();
      }),
      (t.prototype.clean = function(e) {
        var a = document.createElement("span"),
          n = e.split(t.URL_SHORTENER_REGEX);
        return (
          n.forEach(function(e) {
            var n;
            t.URL_SHORTENER_REGEX.test(e)
              ? ((n = document.createElement("a")),
                (n.target = "_blank"),
                (n.href = e),
                (n.textContent = e))
              : ((n = document.createElement("span")), (n.textContent = e)),
              a.appendChild(n);
          }),
          a
        );
      }),
      (t.init = function() {
        var e = document.querySelector(".weather");
        e && new t(e);
      }),
      (e.exports = t);
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(e, t, a) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var o = a(55),
      r = n(o),
      s = a(13),
      i = n(s),
      l = a(8),
      d = n(l),
      u = a(62),
      c = a(63),
      p = a(24),
      y = a(60),
      g = new r.default();
    g.init(), p.init(), y.init(), u.init();
    var m = [],
      v = document.querySelectorAll(".js-animated-icon");
    [].forEach.call(v, function(e) {
      var t = new i.default(e);
      t.init(), m.push(e);
    });
    var h = [],
      C = document.querySelectorAll(".js-animated-pattern");
    [].forEach.call(C, function(e) {
      var t = new d.default(e);
      t.init(),
        setTimeout(function() {
          t.playIntro();
        }, 1e3),
        h.push(t);
    });
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(e, t, a) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      i = a(12),
      l = n(i),
      d = a(2),
      u = n(d),
      c = a(0),
      p = a(46),
      y = n(p),
      g = a(28),
      m = n(g),
      v = a(16),
      h = n(v),
      C = a(6),
      O = n(C),
      S = { x: 7, y: 24 },
      P = (function() {
        function e(t, a) {
          r(this, e), (this.svgCanvas = a), (this.app = t);
        }
        return (
          s(e, [
            {
              key: "init",
              value: function() {
                (this.s = Snap(this.svgCanvas)),
                  (this.outerCircProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 68.5,
                    yPos: 71.5,
                    radius: 62,
                    color: c.COLORS.teal,
                    strokeWidth: 6.5
                  }),
                  (this.middleCircProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 68.5,
                    yPos: 71.5,
                    radius: 34,
                    color: c.COLORS.yellow,
                    strokeWidth: 6.5
                  }),
                  (this.innerCircProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 68.5,
                    yPos: 71.5,
                    radius: 9,
                    color: c.COLORS.orange,
                    strokeWidth: 6.5
                  }),
                  (this.circPathProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 2.5,
                    yPos: 83,
                    strokeWidth: 26,
                    color: c.COLORS.purple,
                    shape: c.PATHS.circle,
                    rotation: 180
                  }),
                  (this.circleOuterRing = new l.default(this.outerCircProps)),
                  (this.circleMiddleRing = new l.default(this.middleCircProps)),
                  (this.circleInnerRing = new l.default(this.innerCircProps)),
                  (this.circlePath = new u.default(this.circPathProps)),
                  this.circleMiddleRing.init(),
                  this.circleInnerRing.init(),
                  this.circleOuterRing.init(),
                  this.circlePath.init(),
                  this.createSecondary(),
                  this.randomizeColors(),
                  (this.group = this.s.g(
                    this.circleMiddleRing.getElement(),
                    this.circleInnerRing.getElement(),
                    this.circleOuterRing.getElement(),
                    this.circlePath.getElement()
                  )),
                  this.group.addClass(c.CLASSES.SVG_NUMBER + " eight"),
                  this.group.transform("t" + S.x + "," + S.y);
              }
            },
            {
              key: "createSecondary",
              value: function() {
                (this.secondaryTopRing = new l.default({
                  svgCanvas: this.svgCanvas,
                  xPos: 68.5,
                  yPos: 71.5,
                  radius: 53,
                  color: c.COLORS.teal,
                  strokeWidth: 26,
                  animLength: 300
                })),
                  (this.secondaryTopInnerRing = new l.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 68.5,
                    yPos: 71.5,
                    radius: 9,
                    color: c.COLORS.orange,
                    strokeWidth: 0,
                    animLength: 300
                  })),
                  (this.secondaryBotRing = new l.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 68.5,
                    yPos: 148.5,
                    radius: 62,
                    strokeWidth: 6.5,
                    color: c.COLORS.purple,
                    animLength: 300
                  })),
                  (this.secondaryBotInnerRing = new l.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 68.5,
                    yPos: 148.5,
                    radius: 34,
                    strokeWidth: 6.5,
                    color: c.COLORS.yellow,
                    animLength: 300
                  })),
                  (this.secondaryDot = new y.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 68.5,
                    yPos: 71.5,
                    radius: 13,
                    color: c.COLORS.orange,
                    animLength: 300
                  })),
                  (this.secondaryDiagonals = new h.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 5.5,
                    yPos: 7.5,
                    rows: 10,
                    cols: 10,
                    strokeWidth: 2.75,
                    gap: 12.75,
                    color: c.COLORS.yellow,
                    animLength: 300
                  })),
                  (this.secondaryTube = new O.default({
                    svgCanvas: this.svgCanvas,
                    xPos: -4,
                    yPos: 12.5,
                    strokeWidth: 26,
                    tubeColor: c.COLORS.purple,
                    tubeEndColor: c.COLORS.orange,
                    shape: c.PATHS.circle,
                    rotation: 90,
                    lineCap: "round",
                    reverse: !0,
                    animLength: 1e3
                  })),
                  (this.secondaryDotPattern = new m.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 12.5,
                    yPos: 93.5,
                    cols: 4,
                    rows: 4,
                    spaceBetween: 33,
                    color: c.COLORS.orange,
                    radius: 3,
                    animLength: 100
                  })),
                  this.secondaryBotInnerRing.init(),
                  this.secondaryTopRing.init(),
                  this.secondaryBotRing.init(),
                  this.secondaryTopInnerRing.init(),
                  this.secondaryDot.init(),
                  this.secondaryDiagonals.init(),
                  this.secondaryTube.init(),
                  this.secondaryDotPattern.init(),
                  (this.secondaryGroup = this.s.g(
                    this.secondaryBotInnerRing.getElement(),
                    this.secondaryTopRing.getElement(),
                    this.secondaryBotRing.getElement(),
                    this.secondaryTopInnerRing.getElement(),
                    this.secondaryDot.getElement(),
                    this.secondaryTube.getElement(),
                    this.secondaryDiagonals.getElement(),
                    this.secondaryDotPattern.getElement()
                  )),
                  this.secondaryGroup.addClass("svg-number"),
                  this.secondaryGroup.transform("t" + S.x + "," + S.y);
              }
            },
            {
              key: "randomizeColors",
              value: function() {
                var e = (0, c.SHUFFLE_PROPS)(c.COLORS);
                this.circleMiddleRing.setColor(c.COLORS[e[0]]),
                  this.circleInnerRing.setColor(c.COLORS[e[1]]),
                  this.circleOuterRing.setColor(c.COLORS[e[2]]),
                  this.circlePath.setColor(c.COLORS[e[3]]),
                  this.secondaryBotInnerRing.setColor(c.COLORS[e[0]]),
                  this.secondaryTopRing.setColor(c.COLORS[e[2]]),
                  this.secondaryBotRing.setColor(c.COLORS[e[3]]),
                  this.secondaryTopInnerRing.setColor(c.COLORS[e[1]]),
                  this.secondaryDot.setColor(c.COLORS[e[1]]),
                  this.secondaryDiagonals.setColor(c.COLORS[e[0]]),
                  this.secondaryTube.setColor(c.COLORS[e[3]], c.COLORS[e[1]]),
                  this.secondaryDotPattern.setColor(c.COLORS[e[1]]);
              }
            },
            {
              key: "animateIn",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.circleMiddleRing.animateIn(),
                                  this.circleInnerRing.animateIn(),
                                  this.circleOuterRing.animateIn(),
                                  this.circlePath.animateIn()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateInSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    var t, a;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = this.secondaryTopRing.getProps().color),
                                (a = this.secondaryBotRing.getProps().color),
                                (e.next = 4),
                                Promise.all([
                                  this.secondaryTopRing.animateIn(),
                                  this.secondaryBotRing.animateIn(),
                                  this.secondaryDot.animateIn()
                                ])
                              );
                            case 4:
                              return (
                                this.secondaryDot.animatePosition(0, 53),
                                (e.next = 7),
                                this.secondaryDot.animateIn()
                              );
                            case 7:
                              return (
                                this.secondaryDot.animatePosition(0, 53),
                                (e.next = 10),
                                this.secondaryDiagonals.animateIn()
                              );
                            case 10:
                              return (
                                this.secondaryBotInnerRing.animateIn(),
                                this.secondaryDot.setOpacity(0),
                                (e.next = 14),
                                this.secondaryTube.animateIn()
                              );
                            case 14:
                              return (
                                this.secondaryDotPattern.animateIn(),
                                this.secondaryTopRing.setColor(a),
                                this.secondaryBotRing.setColor(t),
                                this.secondaryDot.setOpacity(1),
                                this.secondaryTube.setOpacity(0),
                                (e.next = 21),
                                this.secondaryDiagonals.animateOut()
                              );
                            case 21:
                              return (
                                (e.next = 23),
                                this.secondaryBotInnerRing.animatePosition(
                                  0,
                                  -79
                                )
                              );
                            case 23:
                              return (
                                (e.next = 25),
                                Promise.all([
                                  this.secondaryDot.animatePosition(0, 79),
                                  this.secondaryTopRing.animateRadius(62),
                                  this.secondaryTopRing.animateStrokeWidth(6.5)
                                ])
                              );
                            case 25:
                              return (
                                (e.next = 27),
                                Promise.all([
                                  this.secondaryDotPattern.animateOut(),
                                  this.secondaryBotRing.animateRadius(54),
                                  this.secondaryBotRing.animateStrokeWidth(26),
                                  this.secondaryTopInnerRing.animateStrokeWidth(
                                    6.5
                                  )
                                ])
                              );
                            case 27:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "stopAllAnimations",
              value: function() {
                var e = this.secondaryDiagonals.getElement().children(),
                  t = this.secondaryDotPattern.getElement().children(),
                  a = this.secondaryTube
                    .getElement()
                    .children()[0]
                    .children();
                this.app.stopAllAnimationsLoop(e),
                  this.app.stopAllAnimationsLoop(t),
                  this.app.stopAllAnimationsLoop(a),
                  this.secondaryTopRing.getElement().stop(),
                  this.secondaryBotInnerRing.getElement().stop(),
                  this.secondaryBotRing.getElement().stop(),
                  this.secondaryDot.getElement().stop(),
                  this.secondaryTopInnerRing.getElement().stop(),
                  this.circleMiddleRing.getElement().stop(),
                  this.circleInnerRing.getElement().stop(),
                  this.circleOuterRing.getElement().stop(),
                  this.circlePath
                    .getElement()
                    .children()[0]
                    .stop();
              }
            },
            {
              key: "animateOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryBotInnerRing.animateOut(),
                                  this.secondaryTopRing.animateOut(),
                                  this.secondaryBotRing.animateOut(),
                                  this.secondaryTopInnerRing.animateOut(),
                                  this.secondaryDot.animateOut(),
                                  this.secondaryDiagonals.animateOut(),
                                  this.secondaryTube.animateOut(),
                                  this.secondaryDotPattern.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.circleMiddleRing.animateOut(),
                                  this.circleInnerRing.animateOut(),
                                  this.circleOuterRing.animateOut(),
                                  this.circlePath.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.circleMiddleRing.fadeOut(),
                                  this.circleInnerRing.fadeOut(),
                                  this.circleOuterRing.fadeOut(),
                                  this.circlePath.fadeOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryBotInnerRing.fadeOut(),
                                  this.secondaryTopRing.fadeOut(),
                                  this.secondaryBotRing.fadeOut(),
                                  this.secondaryTopInnerRing.fadeOut(),
                                  this.secondaryDot.fadeOut(),
                                  this.secondaryDiagonals.fadeOut(),
                                  this.secondaryTube.fadeOut(),
                                  this.secondaryDotPattern.fadeOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "reset",
              value: function() {
                this.circleMiddleRing.reset(),
                  this.circleInnerRing.reset(),
                  this.circleOuterRing.reset(),
                  this.circlePath.reset();
              }
            },
            {
              key: "resetSecondary",
              value: function() {
                this.secondaryDotPattern.reset(),
                  this.secondaryTube.reset(),
                  this.secondaryTopRing.reset(),
                  this.secondaryBotInnerRing.reset(),
                  this.secondaryBotRing.reset(),
                  this.secondaryDot.reset(),
                  this.secondaryTopInnerRing.reset();
              }
            }
          ]),
          e
        );
      })();
    t.default = P;
  },
  function(e, t, a) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      i = a(12),
      l = n(i),
      d = a(2),
      u = n(d),
      c = a(0),
      p = a(46),
      y = n(p),
      g = a(28),
      m = n(g),
      v = a(16),
      h = n(v),
      C = a(6),
      O = n(C),
      S = { x: 7, y: 24 },
      P = (function() {
        function e(t, a) {
          r(this, e), (this.svgCanvas = a), (this.app = t);
        }
        return (
          s(e, [
            {
              key: "init",
              value: function() {
                (this.s = Snap(this.svgCanvas)),
                  (this.outerCircProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 68.5,
                    yPos: 149,
                    radius: 62,
                    color: c.COLORS.purple,
                    strokeWidth: 6.5
                  }),
                  (this.middleCircProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 68.5,
                    yPos: 149,
                    radius: 34,
                    color: c.COLORS.orange,
                    strokeWidth: 6.5
                  }),
                  (this.innerCircProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 68.5,
                    yPos: 149,
                    radius: 9,
                    color: c.COLORS.yellow,
                    strokeWidth: 6.5
                  }),
                  (this.circPathProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 2.5,
                    yPos: 4,
                    strokeWidth: 26,
                    color: c.COLORS.teal,
                    shape: c.PATHS.circle
                  }),
                  (this.circleOuterRing = new l.default(this.outerCircProps)),
                  (this.circleMiddleRing = new l.default(this.middleCircProps)),
                  (this.circleInnerRing = new l.default(this.innerCircProps)),
                  (this.circlePath = new u.default(this.circPathProps)),
                  this.circleMiddleRing.init(),
                  this.circleInnerRing.init(),
                  this.circleOuterRing.init(),
                  this.circlePath.init(),
                  this.createSecondary(),
                  this.randomizeColors(),
                  (this.group = this.s.g(
                    this.circleMiddleRing.getElement(),
                    this.circleInnerRing.getElement(),
                    this.circlePath.getElement(),
                    this.circleOuterRing.getElement()
                  )),
                  this.group.addClass(
                    c.CLASSES.SVG_NUMBER + " eight " + c.CLASSES.ALT
                  ),
                  this.group.transform("t" + S.x + "," + S.y);
              }
            },
            {
              key: "createSecondary",
              value: function() {
                (this.secondaryTopRing = new l.default({
                  svgCanvas: this.svgCanvas,
                  xPos: 68.5,
                  yPos: 70,
                  radius: 53,
                  color: c.COLORS.teal,
                  strokeWidth: 26,
                  animLength: 300
                })),
                  (this.secondaryTopInnerRing = new l.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 68.5,
                    yPos: 70,
                    radius: 9,
                    color: c.COLORS.orange,
                    strokeWidth: 0,
                    animLength: 300
                  })),
                  (this.secondaryBotRing = new l.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 68.5,
                    yPos: 148.5,
                    radius: 62,
                    strokeWidth: 6.5,
                    color: c.COLORS.purple,
                    animLength: 300
                  })),
                  (this.secondaryBotInnerRing = new l.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 68.5,
                    yPos: 148.5,
                    radius: 34,
                    strokeWidth: 6.5,
                    color: c.COLORS.yellow,
                    animLength: 300
                  })),
                  (this.secondaryDot = new y.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 68.5,
                    yPos: 70,
                    radius: 13,
                    color: c.COLORS.orange,
                    animLength: 300
                  })),
                  (this.secondaryDiagonals = new h.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 5.5,
                    yPos: 7.5,
                    rows: 10,
                    cols: 10,
                    strokeWidth: 2.75,
                    gap: 12.75,
                    color: c.COLORS.yellow,
                    animLength: 300
                  })),
                  (this.secondaryTube = new O.default({
                    svgCanvas: this.svgCanvas,
                    xPos: -4,
                    yPos: 10.5,
                    strokeWidth: 26,
                    tubeColor: c.COLORS.purple,
                    tubeEndColor: c.COLORS.orange,
                    shape: c.PATHS.circle,
                    rotation: 90,
                    lineCap: "round",
                    reverse: !0,
                    animLength: 1e3
                  })),
                  (this.secondaryDotPattern = new m.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 12.5,
                    yPos: 93.5,
                    cols: 4,
                    rows: 4,
                    spaceBetween: 33,
                    color: c.COLORS.orange,
                    radius: 3,
                    animLength: 100
                  })),
                  this.secondaryBotInnerRing.init(),
                  this.secondaryTopRing.init(),
                  this.secondaryBotRing.init(),
                  this.secondaryTopInnerRing.init(),
                  this.secondaryDot.init(),
                  this.secondaryDiagonals.init(),
                  this.secondaryTube.init(),
                  this.secondaryDotPattern.init(),
                  (this.secondaryGroup = this.s.g(
                    this.secondaryBotInnerRing.getElement(),
                    this.secondaryTopRing.getElement(),
                    this.secondaryBotRing.getElement(),
                    this.secondaryTopInnerRing.getElement(),
                    this.secondaryDot.getElement(),
                    this.secondaryDiagonals.getElement(),
                    this.secondaryTube.getElement(),
                    this.secondaryDotPattern.getElement()
                  )),
                  this.secondaryGroup.addClass("svg-number"),
                  this.secondaryGroup.transform("t" + S.x + "," + S.y);
              }
            },
            {
              key: "randomizeColors",
              value: function() {
                var e = (0, c.SHUFFLE_PROPS)(c.COLORS);
                this.circleMiddleRing.setColor(c.COLORS[e[0]]),
                  this.circleInnerRing.setColor(c.COLORS[e[1]]),
                  this.circleOuterRing.setColor(c.COLORS[e[2]]),
                  this.circlePath.setColor(c.COLORS[e[3]]),
                  this.secondaryBotInnerRing.setColor(c.COLORS[e[0]]),
                  this.secondaryTopRing.setColor(c.COLORS[e[2]]),
                  this.secondaryBotRing.setColor(c.COLORS[e[3]]),
                  this.secondaryTopInnerRing.setColor(c.COLORS[e[1]]),
                  this.secondaryDot.setColor(c.COLORS[e[1]]),
                  this.secondaryDiagonals.setColor(c.COLORS[e[0]]),
                  this.secondaryTube.setColor(c.COLORS[e[3]], c.COLORS[e[1]]),
                  this.secondaryDotPattern.setColor(c.COLORS[e[1]]);
              }
            },
            {
              key: "animateInSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    var t, a;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = this.secondaryTopRing.getProps().color),
                                (a = this.secondaryBotRing.getProps().color),
                                (e.next = 4),
                                Promise.all([
                                  this.secondaryTopRing.animateIn(),
                                  this.secondaryBotRing.animateIn(),
                                  this.secondaryDot.animateIn()
                                ])
                              );
                            case 4:
                              return (
                                this.secondaryDot.animatePosition(0, 53),
                                (e.next = 7),
                                this.secondaryDot.animateIn()
                              );
                            case 7:
                              return (
                                this.secondaryDot.animatePosition(0, 53),
                                (e.next = 10),
                                this.secondaryDiagonals.animateIn()
                              );
                            case 10:
                              return (
                                this.secondaryBotInnerRing.animateIn(),
                                this.secondaryDot.setOpacity(0),
                                (e.next = 14),
                                this.secondaryTube.animateIn()
                              );
                            case 14:
                              return (
                                this.secondaryDotPattern.animateIn(),
                                this.secondaryTopRing.setColor(a),
                                this.secondaryBotRing.setColor(t),
                                this.secondaryDot.setOpacity(1),
                                this.secondaryTube.setOpacity(0),
                                (e.next = 21),
                                this.secondaryDiagonals.animateOut()
                              );
                            case 21:
                              return (
                                (e.next = 23),
                                this.secondaryBotInnerRing.animatePosition(
                                  0,
                                  -79
                                )
                              );
                            case 23:
                              return (
                                (e.next = 25),
                                Promise.all([
                                  this.secondaryDot.animatePosition(0, 79),
                                  this.secondaryTopRing.animateRadius(62),
                                  this.secondaryTopRing.animateStrokeWidth(6.5)
                                ])
                              );
                            case 25:
                              return (
                                (e.next = 27),
                                Promise.all([
                                  this.secondaryDotPattern.animateOut(),
                                  this.secondaryBotRing.animateRadius(54),
                                  this.secondaryBotRing.animateStrokeWidth(26),
                                  this.secondaryTopInnerRing.animateStrokeWidth(
                                    6.5
                                  )
                                ])
                              );
                            case 27:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "stopAllAnimations",
              value: function() {
                var e = this.secondaryDiagonals.getElement().children(),
                  t = this.secondaryDotPattern.getElement().children(),
                  a = this.secondaryTube
                    .getElement()
                    .children()[0]
                    .children();
                this.app.stopAllAnimationsLoop(e),
                  this.app.stopAllAnimationsLoop(t),
                  this.app.stopAllAnimationsLoop(a),
                  this.secondaryTopRing.getElement().stop(),
                  this.secondaryBotInnerRing.getElement().stop(),
                  this.secondaryBotRing.getElement().stop(),
                  this.secondaryDot.getElement().stop(),
                  this.secondaryTopInnerRing.getElement().stop(),
                  this.circleMiddleRing.getElement().stop(),
                  this.circleInnerRing.getElement().stop(),
                  this.circleOuterRing.getElement().stop(),
                  this.circlePath
                    .getElement()
                    .children()[0]
                    .stop();
              }
            },
            {
              key: "animateOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryBotInnerRing.animateOut(),
                                  this.secondaryTopRing.animateOut(),
                                  this.secondaryBotRing.animateOut(),
                                  this.secondaryTopInnerRing.animateOut(),
                                  this.secondaryDot.animateOut(),
                                  this.secondaryDiagonals.animateOut(),
                                  this.secondaryTube.animateOut(),
                                  this.secondaryDotPattern.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateIn",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.circleMiddleRing.animateIn(),
                                  this.circleInnerRing.animateIn(),
                                  this.circleOuterRing.animateIn(),
                                  this.circlePath.animateIn()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.circleMiddleRing.animateOut(),
                                  this.circleInnerRing.animateOut(),
                                  this.circleOuterRing.animateOut(),
                                  this.circlePath.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.circleMiddleRing.fadeOut(),
                                  this.circleInnerRing.fadeOut(),
                                  this.circleOuterRing.fadeOut(),
                                  this.circlePath.fadeOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryBotInnerRing.fadeOut(),
                                  this.secondaryTopRing.fadeOut(),
                                  this.secondaryBotRing.fadeOut(),
                                  this.secondaryTopInnerRing.fadeOut(),
                                  this.secondaryDot.fadeOut(),
                                  this.secondaryDiagonals.fadeOut(),
                                  this.secondaryTube.fadeOut(),
                                  this.secondaryDotPattern.fadeOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "reset",
              value: function() {
                this.circleMiddleRing.reset(),
                  this.circleInnerRing.reset(),
                  this.circleOuterRing.reset(),
                  this.circlePath.reset();
              }
            },
            {
              key: "resetSecondary",
              value: function() {
                this.secondaryDotPattern.reset(),
                  this.secondaryTube.reset(),
                  this.secondaryTopRing.reset(),
                  this.secondaryBotInnerRing.reset(),
                  this.secondaryBotRing.reset(),
                  this.secondaryDot.reset(),
                  this.secondaryTopInnerRing.reset();
              }
            }
          ]),
          e
        );
      })();
    t.default = P;
  },
  function(e, t, a) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      i = a(2),
      l = n(i),
      d = a(16),
      u = n(d),
      c = a(29),
      p = n(c),
      y = a(0),
      g = { x: 9, y: 27 },
      m = (function() {
        function e(t, a) {
          r(this, e), (this.svgCanvas = a), (this.app = t);
        }
        return (
          s(e, [
            {
              key: "init",
              value: function() {
                (this.s = Snap(this.svgCanvas)),
                  (this.topProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 0,
                    yPos: 0,
                    strokeWidth: 26,
                    color: y.COLORS.purple,
                    shape: y.PATHS.path_132,
                    rotation: 180
                  }),
                  (this.diagonalsProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 0,
                    yPos: 1,
                    rows: 4,
                    cols: 10,
                    color: y.COLORS.yellow,
                    direction: "back"
                  }),
                  (this.topPieceProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 13,
                    yPos: 25.8,
                    strokeWidth: 26,
                    color: y.COLORS.purple,
                    shape: y.PATHS.path_26,
                    rotation: 180
                  }),
                  (this.midLeftPieceProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 13,
                    yPos: 52,
                    strokeWidth: 26,
                    color: y.COLORS.teal,
                    shape: y.PATHS.path_26,
                    rotation: 0
                  }),
                  (this.midRightPieceProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 46.2,
                    yPos: 70.8,
                    strokeWidth: 26,
                    color: y.COLORS.teal,
                    shape: y.PATHS.path_40,
                    rotation: 270
                  }),
                  (this.curveProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 66.3,
                    yPos: 78,
                    strokeWidth: 26,
                    color: y.COLORS.orange,
                    shape: y.PATHS.quarter_circle,
                    rotation: 0
                  }),
                  (this.botCurveProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 0,
                    yPos: 131.5,
                    strokeWidth: 26,
                    color: y.COLORS.yellow,
                    shape: y.PATHS.half_circle,
                    rotation: 180
                  }),
                  (this.top = new l.default(this.topProps)),
                  (this.diagonals = new u.default(this.diagonalsProps)),
                  (this.topPiece = new l.default(this.topPieceProps)),
                  (this.midLeftPiece = new l.default(this.midLeftPieceProps)),
                  (this.midRightPiece = new l.default(this.midRightPieceProps)),
                  (this.curve = new l.default(this.curveProps)),
                  (this.botCurve = new l.default(this.botCurveProps)),
                  this.top.init(),
                  this.topPiece.init(),
                  this.diagonals.init(),
                  this.midLeftPiece.init(),
                  this.midRightPiece.init(),
                  this.curve.init(),
                  this.botCurve.init(),
                  this.createSecondary(),
                  this.randomizeColors(),
                  (this.group = this.s.g(
                    this.top.getElement(),
                    this.topPiece.getElement(),
                    this.diagonals.getElement(),
                    this.midLeftPiece.getElement(),
                    this.curve.getElement(),
                    this.midRightPiece.getElement(),
                    this.botCurve.getElement()
                  )),
                  this.group.addClass(y.CLASSES.SVG_NUMBER + " five"),
                  this.group.transform("t" + g.x + "," + g.y);
              }
            },
            {
              key: "createSecondary",
              value: function() {
                (this.secondaryTop = new l.default({
                  svgCanvas: this.svgCanvas,
                  xPos: 0,
                  yPos: 0.5,
                  strokeWidth: 26,
                  color: y.COLORS.purple,
                  shape: y.PATHS.path_132,
                  animLength: 300
                })),
                  (this.secondaryTopOverlay = new l.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 0,
                    yPos: 0.5,
                    strokeWidth: 26,
                    color: y.COLORS.teal,
                    shape: y.PATHS.path_132,
                    animLength: 1e3
                  })),
                  (this.secondaryTopPiece = new l.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 13,
                    yPos: 26.5,
                    strokeWidth: 26,
                    color: y.COLORS.teal,
                    shape: y.PATHS.path_26,
                    rotation: 180,
                    animLength: 300
                  })),
                  (this.secondaryGridPattern = new p.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 0,
                    yPos: 79,
                    rows: 10,
                    cols: 10,
                    color: y.COLORS.purple,
                    blockSize: 13,
                    strokeWidth: 2.5,
                    animLength: 500
                  })),
                  (this.secondaryRightCurve = new l.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 25.5,
                    yPos: 104.5,
                    strokeWidth: 26,
                    color: y.COLORS.orange,
                    shape: y.PATHS.half_circle,
                    rotation: 90,
                    animLength: 300
                  })),
                  (this.secondaryLeftCurve = new l.default({
                    svgCanvas: this.svgCanvas,
                    xPos: -26.5,
                    yPos: 104.5,
                    strokeWidth: 26,
                    color: y.COLORS.yellow,
                    shape: y.PATHS.half_circle,
                    rotation: 270,
                    animLength: 300
                  })),
                  (this.secondaryMidLeftPiece = new l.default(
                    this.midLeftPieceProps
                  )),
                  (this.secondaryMidRightPiece = new l.default(
                    this.midRightPieceProps
                  )),
                  this.secondaryTop.init(),
                  this.secondaryTopPiece.init(),
                  this.secondaryMidLeftPiece.init(),
                  this.secondaryMidRightPiece.init(),
                  this.secondaryTopOverlay.init(),
                  this.secondaryRightCurve.init(),
                  this.secondaryLeftCurve.init(),
                  this.secondaryGridPattern.init(),
                  (this.secondaryGroup = this.s.g(
                    this.secondaryTop.getElement(),
                    this.secondaryTopPiece.getElement(),
                    this.secondaryMidLeftPiece.getElement(),
                    this.secondaryMidRightPiece.getElement(),
                    this.secondaryTopOverlay.getElement(),
                    this.secondaryRightCurve.getElement(),
                    this.secondaryLeftCurve.getElement(),
                    this.secondaryGridPattern.getElement()
                  )),
                  this.secondaryGroup.addClass("svg-number"),
                  this.secondaryGroup.transform("t" + g.x + "," + g.y);
              }
            },
            {
              key: "randomizeColors",
              value: function() {
                var e = (0, y.SHUFFLE_PROPS)(y.COLORS);
                this.top.setColor(y.COLORS[e[0]]),
                  this.diagonals.setColor(y.COLORS[e[3]]),
                  this.topPiece.setColor(y.COLORS[e[0]]),
                  this.midLeftPiece.setColor(y.COLORS[e[1]]),
                  this.midRightPiece.setColor(y.COLORS[e[1]]),
                  this.curve.setColor(y.COLORS[e[2]]),
                  this.botCurve.setColor(y.COLORS[e[3]]),
                  this.secondaryTop.setColor(y.COLORS[e[0]]),
                  this.secondaryTopPiece.setColor(y.COLORS[e[1]]),
                  this.secondaryMidLeftPiece.setColor(y.COLORS[e[1]]),
                  this.secondaryTopOverlay.setColor(y.COLORS[e[1]]),
                  this.secondaryMidRightPiece.setColor(y.COLORS[e[1]]),
                  this.secondaryRightCurve.setColor(y.COLORS[e[2]]),
                  this.secondaryLeftCurve.setColor(y.COLORS[e[3]]),
                  this.secondaryGridPattern.setColor(y.COLORS[e[0]]);
              }
            },
            {
              key: "animateInSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryTop.animateIn(),
                                  this.secondaryTopPiece.animateIn(),
                                  this.secondaryMidLeftPiece.animateIn(),
                                  this.secondaryMidRightPiece.animateIn(),
                                  this.secondaryRightCurve.animateIn(),
                                  this.secondaryLeftCurve.animateIn()
                                ])
                              );
                            case 2:
                              return (
                                this.secondaryTopOverlay.animateIn(),
                                (e.next = 5),
                                this.secondaryGridPattern.animateInBorders()
                              );
                            case 5:
                              return (
                                (e.next = 7),
                                this.secondaryGridPattern.animateInHorizontalLines()
                              );
                            case 7:
                              return (
                                (e.next = 9),
                                this.secondaryGridPattern.animateInVerticalLines()
                              );
                            case 9:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "stopAllAnimations",
              value: function() {
                var e = this.diagonals.getElement().children(),
                  t = this.secondaryGridPattern.getElement().children();
                this.app.stopAllAnimationsLoop(e),
                  this.app.stopAllAnimationsLoop(t),
                  this.top
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.topPiece
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.midLeftPiece
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.midRightPiece
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.curve
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.botCurve
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryTop
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryTopPiece
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryMidLeftPiece
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryMidRightPiece
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryTopOverlay
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryRightCurve
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryLeftCurve
                    .getElement()
                    .children()[0]
                    .stop();
              }
            },
            {
              key: "animateOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryTop.animateOut(),
                                  this.secondaryTopPiece.animateOut(),
                                  this.secondaryMidLeftPiece.animateOut(),
                                  this.secondaryMidRightPiece.animateOut(),
                                  this.secondaryTopOverlay.animateOut(),
                                  this.secondaryRightCurve.animateOut(),
                                  this.secondaryLeftCurve.animateOut(),
                                  this.secondaryGridPattern.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateIn",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.top.animateIn(),
                                  this.diagonals.animateIn(),
                                  this.topPiece.animateIn(),
                                  this.midLeftPiece.animateIn(),
                                  this.curve.animateIn(),
                                  this.midRightPiece.animateIn(),
                                  this.botCurve.animateIn()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.top.animateOut(),
                                  this.diagonals.animateOut(),
                                  this.topPiece.animateOut(),
                                  this.midLeftPiece.animateOut(),
                                  this.curve.animateOut(),
                                  this.midRightPiece.animateOut(),
                                  this.botCurve.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.top.fadeOut(),
                                  this.diagonals.fadeOut(),
                                  this.topPiece.fadeOut(),
                                  this.midLeftPiece.fadeOut(),
                                  this.curve.fadeOut(),
                                  this.midRightPiece.fadeOut(),
                                  this.botCurve.fadeOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryTop.fadeOut(),
                                  this.secondaryTopPiece.fadeOut(),
                                  this.secondaryMidLeftPiece.fadeOut(),
                                  this.secondaryMidRightPiece.fadeOut(),
                                  this.secondaryTopOverlay.fadeOut(),
                                  this.secondaryRightCurve.fadeOut(),
                                  this.secondaryLeftCurve.fadeOut(),
                                  this.secondaryGridPattern.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "reset",
              value: function() {
                this.top.reset(),
                  this.topPiece.reset(),
                  this.midLeftPiece.reset(),
                  this.midRightPiece.reset(),
                  this.curve.reset(),
                  this.botCurve.reset();
              }
            },
            {
              key: "resetSecondary",
              value: function() {
                this.secondaryTop.reset(),
                  this.secondaryTopPiece.reset(),
                  this.secondaryMidLeftPiece.reset(),
                  this.secondaryMidRightPiece.reset(),
                  this.secondaryTopOverlay.reset(),
                  this.secondaryRightCurve.reset(),
                  this.secondaryLeftCurve.reset(),
                  this.secondaryGridPattern.reset();
              }
            }
          ]),
          e
        );
      })();
    t.default = m;
  },
  function(e, t, a) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      i = a(2),
      l = n(i),
      d = a(33),
      u = n(d),
      c = a(29),
      p = n(c),
      y = a(0),
      g = { x: 9, y: 28 },
      m = (function() {
        function e(t, a) {
          r(this, e), (this.svgCanvas = a), (this.app = t);
        }
        return (
          s(e, [
            {
              key: "init",
              value: function() {
                (this.s = Snap(this.svgCanvas)),
                  (this.topProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 0,
                    yPos: 0,
                    strokeWidth: 26,
                    color: y.COLORS.teal,
                    shape: y.PATHS.path_132,
                    rotation: 180
                  }),
                  (this.gridPatternProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 1,
                    yPos: 0,
                    rows: 3,
                    cols: 10,
                    rotation: 0,
                    animLength: 500,
                    color: y.COLORS.yellow
                  }),
                  (this.topPieceProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 13,
                    yPos: 25.8,
                    strokeWidth: 26,
                    color: y.COLORS.teal,
                    shape: y.PATHS.path_26,
                    rotation: 180
                  }),
                  (this.midLeftPieceProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 13,
                    yPos: 52,
                    strokeWidth: 26,
                    color: y.COLORS.purple,
                    shape: y.PATHS.path_26,
                    rotation: 0
                  }),
                  (this.midRightPieceProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 46.2,
                    yPos: 70.8,
                    strokeWidth: 26,
                    color: y.COLORS.purple,
                    shape: y.PATHS.path_40,
                    rotation: 270
                  }),
                  (this.curveProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 66.3,
                    yPos: 78,
                    strokeWidth: 26,
                    color: y.COLORS.teal,
                    shape: y.PATHS.quarter_circle,
                    rotation: 0
                  }),
                  (this.botCurveRightProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 66.3,
                    yPos: 131,
                    strokeWidth: 26,
                    color: y.COLORS.purple,
                    shape: y.PATHS.quarter_circle,
                    rotation: 90
                  }),
                  (this.botCurveLeftProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 13,
                    yPos: 131,
                    strokeWidth: 26,
                    color: y.COLORS.orange,
                    shape: y.PATHS.quarter_circle,
                    rotation: 180
                  }),
                  (this.top = new l.default(this.topProps)),
                  (this.gridPattern = new u.default(this.gridPatternProps)),
                  (this.topPiece = new l.default(this.topPieceProps)),
                  (this.midLeftPiece = new l.default(this.midLeftPieceProps)),
                  (this.midRightPiece = new l.default(this.midRightPieceProps)),
                  (this.curve = new l.default(this.curveProps)),
                  (this.botCurveRight = new l.default(this.botCurveRightProps)),
                  (this.botCurveLeft = new l.default(this.botCurveLeftProps)),
                  this.top.init(),
                  this.topPiece.init(),
                  this.gridPattern.init(),
                  this.midLeftPiece.init(),
                  this.midRightPiece.init(),
                  this.curve.init(),
                  this.botCurveRight.init(),
                  this.botCurveLeft.init(),
                  this.createSecondary(),
                  this.randomizeColors(),
                  (this.group = this.s.g(
                    this.top.getElement(),
                    this.topPiece.getElement(),
                    this.gridPattern.getElement(),
                    this.midLeftPiece.getElement(),
                    this.curve.getElement(),
                    this.midRightPiece.getElement(),
                    this.botCurveLeft.getElement(),
                    this.botCurveRight.getElement()
                  )),
                  this.group.addClass(
                    y.CLASSES.SVG_NUMBER + " five " + y.CLASSES.ALT
                  ),
                  this.group.transform("t" + g.x + "," + g.y);
              }
            },
            {
              key: "createSecondary",
              value: function() {
                (this.secondaryTop = new l.default({
                  svgCanvas: this.svgCanvas,
                  xPos: 0,
                  yPos: 0.5,
                  strokeWidth: 26,
                  color: y.COLORS.purple,
                  shape: y.PATHS.path_132,
                  animLength: 300
                })),
                  (this.secondaryTopOverlay = new l.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 1,
                    yPos: 0.5,
                    strokeWidth: 26,
                    color: y.COLORS.teal,
                    shape: y.PATHS.path_132,
                    animLength: 1e3
                  })),
                  (this.secondaryTopPiece = new l.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 0,
                    yPos: 0.5,
                    strokeWidth: 26,
                    color: y.COLORS.teal,
                    shape: y.PATHS.path_52,
                    rotation: 180,
                    animLength: 300
                  })),
                  (this.secondaryMidLeftPiece = new l.default(
                    this.midLeftPieceProps
                  )),
                  (this.secondaryMidRightPiece = new l.default(
                    this.midRightPieceProps
                  )),
                  (this.secondaryGridPattern = new p.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 0,
                    yPos: 79,
                    rows: 10,
                    cols: 10,
                    color: y.COLORS.purple,
                    blockSize: 13,
                    strokeWidth: 2.5,
                    animLength: 500
                  })),
                  (this.secondaryRightCurve = new l.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 25.5,
                    yPos: 104.5,
                    strokeWidth: 26,
                    color: y.COLORS.orange,
                    shape: y.PATHS.half_circle,
                    rotation: 90,
                    animLength: 300
                  })),
                  (this.secondaryLeftCurve = new l.default({
                    svgCanvas: this.svgCanvas,
                    xPos: -26.5,
                    yPos: 104.5,
                    strokeWidth: 26,
                    color: y.COLORS.yellow,
                    shape: y.PATHS.half_circle,
                    rotation: 270,
                    animLength: 300
                  })),
                  this.secondaryTop.init(),
                  this.secondaryTopPiece.init(),
                  this.secondaryMidLeftPiece.init(),
                  this.secondaryMidRightPiece.init(),
                  this.secondaryTopOverlay.init(),
                  this.secondaryRightCurve.init(),
                  this.secondaryLeftCurve.init(),
                  this.secondaryGridPattern.init(),
                  (this.secondaryGroup = this.s.g(
                    this.secondaryTop.getElement(),
                    this.secondaryMidLeftPiece.getElement(),
                    this.secondaryMidRightPiece.getElement(),
                    this.secondaryTopOverlay.getElement(),
                    this.secondaryTopPiece.getElement(),
                    this.secondaryRightCurve.getElement(),
                    this.secondaryLeftCurve.getElement(),
                    this.secondaryGridPattern.getElement()
                  )),
                  this.secondaryGroup.addClass("svg-number"),
                  this.secondaryGroup.transform("t" + g.x + "," + g.y);
              }
            },
            {
              key: "animateInSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryTop.animateIn(),
                                  this.secondaryTopPiece.animateIn(),
                                  this.secondaryMidLeftPiece.animateIn(),
                                  this.secondaryMidRightPiece.animateIn(),
                                  this.secondaryRightCurve.animateIn(),
                                  this.secondaryLeftCurve.animateIn()
                                ])
                              );
                            case 2:
                              return (
                                this.secondaryTopOverlay.animateIn(),
                                (e.next = 5),
                                this.secondaryGridPattern.animateInBorders()
                              );
                            case 5:
                              return (
                                (e.next = 7),
                                this.secondaryGridPattern.animateInHorizontalLines()
                              );
                            case 7:
                              return (
                                (e.next = 9),
                                this.secondaryGridPattern.animateInVerticalLines()
                              );
                            case 9:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "stopAllAnimations",
              value: function() {
                var e = this.gridPattern.getElement().children(),
                  t = this.secondaryGridPattern.getElement().children();
                this.app.stopAllAnimationsLoop(e),
                  this.app.stopAllAnimationsLoop(t),
                  this.top
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.topPiece
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.midLeftPiece
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.midRightPiece
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.curve
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.botCurveRight
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.botCurveLeft
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryTop
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryTopPiece
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryMidLeftPiece
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryMidRightPiece
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryTopOverlay
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryRightCurve
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryLeftCurve
                    .getElement()
                    .children()[0]
                    .stop();
              }
            },
            {
              key: "animateOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryTop.animateOut(),
                                  this.secondaryTopPiece.animateOut(),
                                  this.secondaryMidLeftPiece.animateOut(),
                                  this.secondaryMidRightPiece.animateOut(),
                                  this.secondaryTopOverlay.animateOut(),
                                  this.secondaryRightCurve.animateOut(),
                                  this.secondaryLeftCurve.animateOut(),
                                  this.secondaryGridPattern.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "randomizeColors",
              value: function() {
                var e = (0, y.SHUFFLE_PROPS)(y.COLORS);
                this.top.setColor(y.COLORS[e[0]]),
                  this.gridPattern.setColor(y.COLORS[e[1]]),
                  this.topPiece.setColor(y.COLORS[e[0]]),
                  this.midLeftPiece.setColor(y.COLORS[e[2]]),
                  this.midRightPiece.setColor(y.COLORS[e[2]]),
                  this.curve.setColor(y.COLORS[e[0]]),
                  this.botCurveRight.setColor(y.COLORS[e[1]]),
                  this.botCurveLeft.setColor(y.COLORS[e[3]]),
                  this.secondaryTop.setColor(y.COLORS[e[0]]),
                  this.secondaryTopPiece.setColor(y.COLORS[e[2]]),
                  this.secondaryMidLeftPiece.setColor(y.COLORS[e[2]]),
                  this.secondaryTopOverlay.setColor(y.COLORS[e[2]]),
                  this.secondaryMidRightPiece.setColor(y.COLORS[e[2]]),
                  this.secondaryRightCurve.setColor(y.COLORS[e[1]]),
                  this.secondaryLeftCurve.setColor(y.COLORS[e[3]]),
                  this.secondaryGridPattern.setColor(y.COLORS[e[0]]);
              }
            },
            {
              key: "animateIn",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.top.animateIn(),
                                  this.gridPattern.animateIn(),
                                  this.topPiece.animateIn(),
                                  this.midLeftPiece.animateIn(),
                                  this.curve.animateIn(),
                                  this.midRightPiece.animateIn(),
                                  this.botCurveRight.animateIn(),
                                  this.botCurveLeft.animateIn()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.top.animateOut(),
                                  this.gridPattern.animateOut(),
                                  this.topPiece.animateOut(),
                                  this.midLeftPiece.animateOut(),
                                  this.curve.animateOut(),
                                  this.midRightPiece.animateOut(),
                                  this.botCurveRight.animateOut(),
                                  this.botCurveLeft.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.top.fadeOut(),
                                  this.gridPattern.animateOut(),
                                  this.topPiece.fadeOut(),
                                  this.midLeftPiece.fadeOut(),
                                  this.curve.fadeOut(),
                                  this.midRightPiece.fadeOut(),
                                  this.botCurveRight.fadeOut(),
                                  this.botCurveLeft.fadeOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryTop.fadeOut(),
                                  this.secondaryTopPiece.fadeOut(),
                                  this.secondaryMidLeftPiece.fadeOut(),
                                  this.secondaryMidRightPiece.fadeOut(),
                                  this.secondaryTopOverlay.fadeOut(),
                                  this.secondaryRightCurve.fadeOut(),
                                  this.secondaryLeftCurve.fadeOut(),
                                  this.secondaryGridPattern.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "reset",
              value: function() {
                this.top.reset(),
                  this.topPiece.reset(),
                  this.midLeftPiece.reset(),
                  this.midRightPiece.reset(),
                  this.curve.reset(),
                  this.botCurveRight.reset(),
                  this.botCurveLeft.reset();
              }
            },
            {
              key: "resetSecondary",
              value: function() {
                this.secondaryTop.reset(),
                  this.secondaryTopPiece.reset(),
                  this.secondaryMidLeftPiece.reset(),
                  this.secondaryMidRightPiece.reset(),
                  this.secondaryTopOverlay.reset(),
                  this.secondaryRightCurve.reset(),
                  this.secondaryLeftCurve.reset(),
                  this.secondaryGridPattern.reset();
              }
            }
          ]),
          e
        );
      })();
    t.default = m;
  },
  function(e, t, a) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      i = a(2),
      l = n(i),
      d = a(47),
      u = n(d),
      c = a(6),
      p = n(c),
      y = a(12),
      g = n(y),
      m = a(9),
      v = n(m),
      h = a(0),
      C = { x: 8, y: 18 },
      O = (function() {
        function e(t, a) {
          r(this, e), (this.svgCanvas = a), (this.app = t);
        }
        return (
          s(e, [
            {
              key: "init",
              value: function() {
                (this.s = Snap(this.svgCanvas)),
                  (this.topStemProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 110,
                    yPos: 77,
                    strokeWidth: 26,
                    color: h.COLORS.teal,
                    shape: h.PATHS.path_80,
                    rotation: 0
                  }),
                  (this.botStemProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 110,
                    yPos: 155,
                    strokeWidth: 26,
                    color: h.COLORS.purple,
                    shape: h.PATHS.path_66,
                    rotation: 180
                  }),
                  (this.tubeProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 49,
                    yPos: 0,
                    tubeColor: h.COLORS.yellow,
                    tubeEndColor: h.COLORS.orange,
                    shape: h.PATHS.path_150,
                    rotation: -135,
                    strokeWidth: 26,
                    lineCap: "round"
                  }),
                  (this.triangleDotPatternProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 91,
                    yPos: 142,
                    width: 4,
                    height: 4,
                    spaceBetween: 13,
                    radius: 3,
                    color: h.COLORS.purple,
                    rotation: 180,
                    animLength: 100
                  }),
                  (this.topStem = new l.default(this.topStemProps)),
                  (this.botStem = new l.default(this.botStemProps)),
                  (this.tube = new p.default(this.tubeProps)),
                  (this.triangleDotPattern = new u.default(
                    this.triangleDotPatternProps
                  )),
                  this.tube.init(),
                  this.topStem.init(),
                  this.botStem.init(),
                  this.triangleDotPattern.init(),
                  this.createSecondary(),
                  this.randomizeColors(),
                  (this.group = this.s.g(
                    this.tube.getElement(),
                    this.topStem.getElement(),
                    this.botStem.getElement(),
                    this.triangleDotPattern.getElement()
                  )),
                  this.group.addClass(h.CLASSES.SVG_NUMBER + " four"),
                  this.group.transform("t" + C.x + "," + C.y);
              }
            },
            {
              key: "createSecondary",
              value: function() {
                (this.secondaryOuterRing = new g.default({
                  svgCanvas: this.svgCanvas,
                  xPos: 66.5,
                  yPos: 71.5,
                  radius: 62,
                  color: h.COLORS.teal,
                  strokeWidth: 6.5,
                  animLength: 300
                })),
                  (this.secondaryMiddleRing = new g.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 66.5,
                    yPos: 71.5,
                    radius: 34,
                    color: h.COLORS.yellow,
                    strokeWidth: 6.5,
                    animLength: 300
                  })),
                  (this.secondaryInnerRing = new g.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 66.5,
                    yPos: 71.5,
                    radius: 9,
                    color: h.COLORS.orange,
                    strokeWidth: 6.5,
                    animLength: 300
                  })),
                  (this.secondaryTube = new p.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 4.5,
                    yPos: 72,
                    tubeColor: h.COLORS.yellow,
                    tubeEndColor: h.COLORS.orange,
                    shape: h.PATHS.tube_123,
                    strokeWidth: 26,
                    lineCap: "round",
                    animLength: 300
                  })),
                  (this.secondaryDotPattern = new u.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 93,
                    yPos: 142,
                    width: 4,
                    height: 4,
                    spaceBetween: 13,
                    radius: 3,
                    color: h.COLORS.purple,
                    rotation: 180,
                    animLength: 100
                  })),
                  (this.secondaryTopStem = new v.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 110,
                    yPos: 143,
                    height: 13,
                    width: 26,
                    color: h.COLORS.teal,
                    animLength: 300
                  })),
                  (this.secondaryBotStem = new v.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 110,
                    yPos: 153,
                    height: 68,
                    width: 26,
                    color: h.COLORS.purple,
                    animLength: 300
                  })),
                  this.secondaryOuterRing.init(),
                  this.secondaryMiddleRing.init(),
                  this.secondaryTube.init(),
                  this.secondaryInnerRing.init(),
                  this.secondaryDotPattern.init(),
                  this.secondaryTopStem.init(),
                  this.secondaryBotStem.init(),
                  (this.secondaryGroup = this.s.g(
                    this.secondaryOuterRing.getElement(),
                    this.secondaryMiddleRing.getElement(),
                    this.secondaryTube.getElement(),
                    this.secondaryInnerRing.getElement(),
                    this.secondaryDotPattern.getElement(),
                    this.secondaryTopStem.getElement(),
                    this.secondaryBotStem.getElement()
                  )),
                  this.secondaryGroup.addClass("svg-number"),
                  this.secondaryGroup.transform("t" + C.x + "," + C.y);
              }
            },
            {
              key: "animateInSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryOuterRing.animateIn(),
                                  this.secondaryMiddleRing.animateIn(),
                                  this.secondaryInnerRing.animateIn(),
                                  this.secondaryDotPattern.animateIn(),
                                  this.secondaryTopStem.animateIn(),
                                  this.secondaryBotStem.animateIn(),
                                  this.secondaryTube.animateIn()
                                ])
                              );
                            case 2:
                              return (
                                (e.next = 4),
                                this.secondaryTube.animateRotation(360, 1e3)
                              );
                            case 4:
                              return (
                                (e.next = 6),
                                this.secondaryTopStem.animateScale(1, 0)
                              );
                            case 6:
                              return (
                                (e.next = 8),
                                this.secondaryBotStem.animateScale(1, 0.18)
                              );
                            case 8:
                              return (
                                (e.next = 10),
                                this.secondaryBotStem.animateScale(1, 1)
                              );
                            case 10:
                              return (
                                (e.next = 12),
                                this.secondaryTopStem.animateScale(1, 1)
                              );
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "stopAllAnimations",
              value: function() {
                var e = this.tube
                    .getElement()
                    .children()[0]
                    .children(),
                  t = this.secondaryTube
                    .getElement()
                    .children()[0]
                    .children(),
                  a = this.triangleDotPattern.getElement().children(),
                  n = this.secondaryDotPattern.getElement().children();
                this.app.stopAllAnimationsLoop(e),
                  this.app.stopAllAnimationsLoop(t),
                  this.app.stopAllAnimationsLoop(a),
                  this.app.stopAllAnimationsLoop(n),
                  this.topStem
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.botStem
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryOuterRing.getElement().stop(),
                  this.secondaryMiddleRing.getElement().stop(),
                  this.secondaryInnerRing.getElement().stop(),
                  this.secondaryTopStem.getElement().stop(),
                  this.secondaryBotStem.getElement().stop();
              }
            },
            {
              key: "animateOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryOuterRing.animateOut(),
                                  this.secondaryMiddleRing.animateOut(),
                                  this.secondaryInnerRing.animateOut(),
                                  this.secondaryTube.animateOut(),
                                  this.secondaryDotPattern.animateOut(),
                                  this.secondaryTopStem.animateOut(),
                                  this.secondaryBotStem.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "randomizeColors",
              value: function() {
                var e = (0, h.SHUFFLE_PROPS)(h.COLORS);
                this.tube.setColor(h.COLORS[e[0]], h.COLORS[e[1]]),
                  this.topStem.setColor(h.COLORS[e[2]]),
                  this.botStem.setColor(h.COLORS[e[3]]),
                  this.triangleDotPattern.setColor(h.COLORS[e[1]]),
                  this.secondaryOuterRing.setColor(h.COLORS[e[2]]),
                  this.secondaryMiddleRing.setColor(h.COLORS[e[0]]),
                  this.secondaryInnerRing.setColor(h.COLORS[e[1]]),
                  this.secondaryTube.setColor(h.COLORS[e[0]], h.COLORS[e[1]]),
                  this.secondaryDotPattern.setColor(h.COLORS[e[1]]),
                  this.secondaryTopStem.setColor(h.COLORS[e[2]]),
                  this.secondaryBotStem.setColor(h.COLORS[e[3]]);
              }
            },
            {
              key: "animateIn",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.tube.animateIn(),
                                  this.topStem.animateIn(),
                                  this.botStem.animateIn(),
                                  this.triangleDotPattern.animateIn()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.tube.animateOut(),
                                  this.topStem.animateOut(),
                                  this.botStem.animateOut(),
                                  this.triangleDotPattern.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.tube.fadeOut(),
                                  this.topStem.fadeOut(),
                                  this.botStem.fadeOut(),
                                  this.triangleDotPattern.fadeOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryOuterRing.fadeOut(),
                                  this.secondaryMiddleRing.fadeOut(),
                                  this.secondaryInnerRing.fadeOut(),
                                  this.secondaryTube.fadeOut(),
                                  this.secondaryDotPattern.fadeOut(),
                                  this.secondaryTopStem.fadeOut(),
                                  this.secondaryBotStem.fadeOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "reset",
              value: function() {
                this.tube.reset(),
                  this.topStem.reset(),
                  this.botStem.reset(),
                  this.triangleDotPattern.reset();
              }
            },
            {
              key: "resetSecondary",
              value: function() {
                this.secondaryOuterRing.reset(),
                  this.secondaryMiddleRing.reset(),
                  this.secondaryTube.reset(),
                  this.secondaryInnerRing.reset(),
                  this.secondaryDotPattern.reset(),
                  this.secondaryTopStem.reset(),
                  this.secondaryBotStem.reset();
              }
            }
          ]),
          e
        );
      })();
    t.default = O;
  },
  function(e, t, a) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      i = a(2),
      l = n(i),
      d = a(47),
      u = n(d),
      c = a(6),
      p = n(c),
      y = a(12),
      g = n(y),
      m = a(9),
      v = n(m),
      h = a(0),
      C = { x: 16, y: 18 },
      O = (function() {
        function e(t, a) {
          r(this, e), (this.svgCanvas = a), (this.app = t);
        }
        return (
          s(e, [
            {
              key: "init",
              value: function() {
                (this.s = Snap(this.svgCanvas)),
                  (this.topStemProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 103,
                    yPos: 77,
                    strokeWidth: 26,
                    color: h.COLORS.orange,
                    shape: h.PATHS.path_80,
                    rotation: 0
                  }),
                  (this.botStemProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 103,
                    yPos: 155,
                    strokeWidth: 26,
                    color: h.COLORS.teal,
                    shape: h.PATHS.path_66,
                    rotation: 180
                  }),
                  (this.tubeProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 46,
                    yPos: -8,
                    tubeColor: h.COLORS.teal,
                    tubeEndColor: h.COLORS.purple,
                    shape: h.PATHS.path_150,
                    rotation: 45,
                    strokeWidth: 26,
                    lineCap: "round"
                  }),
                  (this.triangleDotPatternProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 84,
                    yPos: 142,
                    width: 4,
                    height: 4,
                    spaceBetween: 13,
                    radius: 3,
                    color: h.COLORS.purple,
                    rotation: 180,
                    animLength: 100
                  }),
                  (this.topStem = new l.default(this.topStemProps)),
                  (this.botStem = new l.default(this.botStemProps)),
                  (this.tube = new p.default(this.tubeProps)),
                  (this.triangleDotPattern = new u.default(
                    this.triangleDotPatternProps
                  )),
                  this.tube.init(),
                  this.topStem.init(),
                  this.botStem.init(),
                  this.triangleDotPattern.init(),
                  this.createSecondary(),
                  this.randomizeColors(),
                  (this.group = this.s.g(
                    this.tube.getElement(),
                    this.topStem.getElement(),
                    this.botStem.getElement(),
                    this.triangleDotPattern.getElement()
                  )),
                  this.group.addClass(
                    h.CLASSES.SVG_NUMBER + " four " + h.CLASSES.ALT
                  ),
                  this.group.transform("t" + C.x + "," + C.y);
              }
            },
            {
              key: "createSecondary",
              value: function() {
                (this.secondaryOuterRing = new g.default({
                  svgCanvas: this.svgCanvas,
                  xPos: 58.5,
                  yPos: 71.5,
                  radius: 62,
                  color: h.COLORS.teal,
                  strokeWidth: 6.5,
                  animLength: 300
                })),
                  (this.secondaryMiddleRing = new g.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 58.5,
                    yPos: 71.5,
                    radius: 34,
                    color: h.COLORS.yellow,
                    strokeWidth: 6.5,
                    animLength: 300
                  })),
                  (this.secondaryInnerRing = new g.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 58.5,
                    yPos: 71.5,
                    radius: 9,
                    color: h.COLORS.orange,
                    strokeWidth: 6.5,
                    animLength: 300
                  })),
                  (this.secondaryTube = new p.default({
                    svgCanvas: this.svgCanvas,
                    xPos: -3,
                    yPos: 71.5,
                    tubeColor: h.COLORS.yellow,
                    tubeEndColor: h.COLORS.orange,
                    shape: h.PATHS.tube_123,
                    strokeWidth: 26,
                    lineCap: "round",
                    animLength: 300
                  })),
                  (this.secondaryDotPattern = new u.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 84,
                    yPos: 142,
                    width: 4,
                    height: 4,
                    spaceBetween: 13,
                    radius: 3,
                    color: h.COLORS.purple,
                    rotation: 180,
                    animLength: 100
                  })),
                  (this.secondaryTopStem = new v.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 103,
                    yPos: 143,
                    height: 13,
                    width: 26,
                    color: h.COLORS.teal,
                    animLength: 300
                  })),
                  (this.secondaryBotStem = new v.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 103,
                    yPos: 153,
                    height: 68,
                    width: 26,
                    color: h.COLORS.purple,
                    animLength: 400
                  })),
                  this.secondaryOuterRing.init(),
                  this.secondaryMiddleRing.init(),
                  this.secondaryTube.init(),
                  this.secondaryInnerRing.init(),
                  this.secondaryDotPattern.init(),
                  this.secondaryTopStem.init(),
                  this.secondaryBotStem.init(),
                  (this.secondaryGroup = this.s.g(
                    this.secondaryOuterRing.getElement(),
                    this.secondaryMiddleRing.getElement(),
                    this.secondaryTube.getElement(),
                    this.secondaryInnerRing.getElement(),
                    this.secondaryDotPattern.getElement(),
                    this.secondaryTopStem.getElement(),
                    this.secondaryBotStem.getElement()
                  )),
                  this.secondaryGroup.addClass("svg-number"),
                  this.secondaryGroup.transform("t" + C.x + "," + C.y);
              }
            },
            {
              key: "animateInSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryOuterRing.animateIn(),
                                  this.secondaryMiddleRing.animateIn(),
                                  this.secondaryInnerRing.animateIn(),
                                  this.secondaryDotPattern.animateIn(),
                                  this.secondaryTopStem.animateIn(),
                                  this.secondaryBotStem.animateIn(),
                                  this.secondaryTube.animateIn()
                                ])
                              );
                            case 2:
                              return (
                                (e.next = 4),
                                this.secondaryTube.animateRotation(360, 1e3)
                              );
                            case 4:
                              return (
                                (e.next = 6),
                                this.secondaryTopStem.animateScale(1, 0)
                              );
                            case 6:
                              return (
                                (e.next = 8),
                                this.secondaryBotStem.animateScale(1, 0.18)
                              );
                            case 8:
                              return (
                                (e.next = 10),
                                this.secondaryBotStem.animateScale(1, 1)
                              );
                            case 10:
                              return (
                                (e.next = 12),
                                this.secondaryTopStem.animateScale(1, 1)
                              );
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "stopAllAnimations",
              value: function() {
                var e = this.tube
                    .getElement()
                    .children()[0]
                    .children(),
                  t = this.secondaryTube
                    .getElement()
                    .children()[0]
                    .children(),
                  a = this.triangleDotPattern.getElement().children(),
                  n = this.secondaryDotPattern.getElement().children();
                this.app.stopAllAnimationsLoop(e),
                  this.app.stopAllAnimationsLoop(t),
                  this.app.stopAllAnimationsLoop(a),
                  this.app.stopAllAnimationsLoop(n),
                  this.topStem
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.botStem
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryOuterRing.getElement().stop(),
                  this.secondaryMiddleRing.getElement().stop(),
                  this.secondaryInnerRing.getElement().stop(),
                  this.secondaryTopStem.getElement().stop(),
                  this.secondaryBotStem.getElement().stop();
              }
            },
            {
              key: "animateOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryOuterRing.animateOut(),
                                  this.secondaryMiddleRing.animateOut(),
                                  this.secondaryInnerRing.animateOut(),
                                  this.secondaryTube.animateOut(),
                                  this.secondaryDotPattern.animateOut(),
                                  this.secondaryTopStem.animateOut(),
                                  this.secondaryBotStem.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "randomizeColors",
              value: function() {
                var e = (0, h.SHUFFLE_PROPS)(h.COLORS);
                this.tube.setColor(h.COLORS[e[0]], h.COLORS[e[1]]),
                  this.topStem.setColor(h.COLORS[e[2]]),
                  this.botStem.setColor(h.COLORS[e[3]]),
                  this.triangleDotPattern.setColor(h.COLORS[e[1]]),
                  this.secondaryOuterRing.setColor(h.COLORS[e[2]]),
                  this.secondaryMiddleRing.setColor(h.COLORS[e[0]]),
                  this.secondaryInnerRing.setColor(h.COLORS[e[1]]),
                  this.secondaryTube.setColor(h.COLORS[e[0]], h.COLORS[e[1]]),
                  this.secondaryDotPattern.setColor(h.COLORS[e[1]]),
                  this.secondaryTopStem.setColor(h.COLORS[e[2]]),
                  this.secondaryBotStem.setColor(h.COLORS[e[3]]);
              }
            },
            {
              key: "animateIn",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.tube.animateIn(),
                                  this.topStem.animateIn(),
                                  this.botStem.animateIn(),
                                  this.triangleDotPattern.animateIn()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.tube.animateOut(),
                                  this.topStem.animateOut(),
                                  this.botStem.animateOut(),
                                  this.triangleDotPattern.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.tube.animateOut(),
                                  this.topStem.animateOut(),
                                  this.botStem.animateOut(),
                                  this.triangleDotPattern.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryOuterRing.fadeOut(),
                                  this.secondaryMiddleRing.fadeOut(),
                                  this.secondaryInnerRing.fadeOut(),
                                  this.secondaryTube.fadeOut(),
                                  this.secondaryDotPattern.fadeOut(),
                                  this.secondaryTopStem.fadeOut(),
                                  this.secondaryBotStem.fadeOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "reset",
              value: function() {
                this.tube.reset(),
                  this.topStem.reset(),
                  this.botStem.reset(),
                  this.triangleDotPattern.reset();
              }
            },
            {
              key: "resetSecondary",
              value: function() {
                this.secondaryOuterRing.reset(),
                  this.secondaryMiddleRing.reset(),
                  this.secondaryTube.reset(),
                  this.secondaryInnerRing.reset(),
                  this.secondaryDotPattern.reset(),
                  this.secondaryTopStem.reset(),
                  this.secondaryBotStem.reset();
              }
            }
          ]),
          e
        );
      })();
    t.default = O;
  },
  function(e, t, a) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      i = a(6),
      l = n(i),
      d = a(0),
      u = a(12),
      c = n(u),
      p = { x: 10, y: 16 },
      y = (function() {
        function e(t, a) {
          r(this, e), (this.svgCanvas = a), (this.app = t);
        }
        return (
          s(e, [
            {
              key: "init",
              value: function() {
                (this.s = Snap(this.svgCanvas)),
                  (this.curveLeftTubeProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: -15.5,
                    yPos: 36.5,
                    tubeColor: d.COLORS.purple,
                    tubeEndColor: d.COLORS.purple,
                    shape: d.PATHS.half_circle,
                    strokeWidth: 26,
                    rotation: 270,
                    lineCap: "round"
                  }),
                  (this.curveRightTubeProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 24,
                    yPos: 23.5,
                    tubeColor: d.COLORS.teal,
                    tubeEndColor: d.COLORS.yellow,
                    shape: d.PATHS.half_circle,
                    strokeWidth: 26,
                    rotation: 90,
                    lineCap: "round"
                  }),
                  (this.tubeProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 84.5,
                    yPos: 84,
                    tubeColor: d.COLORS.orange,
                    tubeEndColor: d.COLORS.teal,
                    shape: d.PATHS.tube_132,
                    strokeWidth: 26,
                    rotation: 27,
                    lineCap: "round"
                  }),
                  (this.curveLeftTube = new l.default(this.curveLeftTubeProps)),
                  (this.curveRightTube = new l.default(
                    this.curveRightTubeProps
                  )),
                  (this.tube = new l.default(this.tubeProps)),
                  this.curveLeftTube.init(),
                  this.curveRightTube.init(),
                  this.tube.init(),
                  this.createSecondary(),
                  this.randomizeColors(),
                  (this.group = this.s.g(
                    this.curveLeftTube.getElement(),
                    this.curveRightTube.getElement(),
                    this.tube.getElement()
                  )),
                  this.group.addClass(d.CLASSES.SVG_NUMBER + " nine"),
                  this.group.transform("t" + p.x + "," + p.y);
              }
            },
            {
              key: "createSecondary",
              value: function() {
                (this.secondaryCircleTube = new l.default({
                  svgCanvas: this.svgCanvas,
                  xPos: -8.5,
                  yPos: 3.5,
                  tubeColor: d.COLORS.teal,
                  tubeEndColor: d.COLORS.yellow,
                  shape: d.PATHS.circle,
                  strokeWidth: 26,
                  rotation: 270,
                  lineCap: "round",
                  animLength: 300
                })),
                  (this.secondaryOuterRing = new c.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 64,
                    yPos: 76,
                    radius: 53,
                    color: d.COLORS.teal,
                    strokeWidth: 26,
                    animLength: 300
                  })),
                  (this.secondaryTubeOne = new l.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 78,
                    yPos: 95,
                    tubeColor: d.COLORS.orange,
                    tubeEndColor: d.COLORS.purple,
                    shape: d.PATHS.tube_132,
                    strokeWidth: 26,
                    rotation: 207,
                    lineCap: "round",
                    animLength: 300
                  })),
                  (this.secondaryTubeTwo = new l.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 82,
                    yPos: 83,
                    tubeColor: d.COLORS.orange,
                    tubeEndColor: d.COLORS.teal,
                    shape: d.PATHS.tube_132,
                    rotation: 27,
                    strokeWidth: 26,
                    lineCap: "round",
                    animLength: 300
                  })),
                  (this.secondaryMiddleRing = new c.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 64,
                    yPos: 76,
                    radius: 34,
                    color: d.COLORS.yellow,
                    strokeWidth: 6.5,
                    animLength: 300
                  })),
                  (this.secondaryInnerRing = new c.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 64,
                    yPos: 76,
                    radius: 9,
                    strokeWidth: 6.5,
                    color: d.COLORS.orange,
                    animLength: 300
                  })),
                  (this.secondaryHalfCircleTube = new l.default({
                    svgCanvas: this.svgCanvas,
                    xPos: -15.5,
                    yPos: 36.5,
                    tubeColor: d.COLORS.teal,
                    tubeEndColor: d.COLORS.purple,
                    shape: d.PATHS.half_circle,
                    strokeWidth: 26,
                    rotation: 270,
                    lineCap: "round",
                    animLength: 400
                  })),
                  this.secondaryOuterRing.init(),
                  this.secondaryCircleTube.init(),
                  this.secondaryTubeOne.init(),
                  this.secondaryMiddleRing.init(),
                  this.secondaryInnerRing.init(),
                  this.secondaryTubeTwo.init(),
                  this.secondaryHalfCircleTube.init(),
                  (this.secondaryGroup = this.s.g(
                    this.secondaryOuterRing.getElement(),
                    this.secondaryCircleTube.getElement(),
                    this.secondaryTubeOne.getElement(),
                    this.secondaryMiddleRing.getElement(),
                    this.secondaryInnerRing.getElement(),
                    this.secondaryTubeTwo.getElement(),
                    this.secondaryHalfCircleTube.getElement()
                  )),
                  this.secondaryGroup.addClass("svg-number"),
                  this.secondaryGroup.transform("t" + p.x + "," + p.y);
              }
            },
            {
              key: "animateInSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    var t, a, n;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = this.curveLeftTube.getProps().tubeColor),
                                (a = this.tube.getProps().tubeColor),
                                (n = this.secondaryMiddleRing.getProps().color),
                                (e.next = 5),
                                this.secondaryCircleTube.animateIn()
                              );
                            case 5:
                              return (
                                this.secondaryTubeOne.animateIn(),
                                this.secondaryOuterRing.setStrokeWidth(26),
                                (e.next = 9),
                                this.secondaryCircleTube.animateOut()
                              );
                            case 9:
                              return (
                                (e.next = 11),
                                Promise.all([
                                  this.secondaryOuterRing.animateRadius(62),
                                  this.secondaryOuterRing.animateStrokeWidth(
                                    6.5
                                  ),
                                  this.secondaryMiddleRing.animateIn(),
                                  this.secondaryInnerRing.animateIn(),
                                  this.secondaryTubeOne.animateOut()
                                ])
                              );
                            case 11:
                              return (
                                (e.next = 13), this.secondaryTubeTwo.animateIn()
                              );
                            case 13:
                              return (
                                this.secondaryInnerRing.setColor(t),
                                this.secondaryMiddleRing.setColor(a),
                                this.secondaryOuterRing.setColor(n),
                                (e.next = 18),
                                this.secondaryTubeTwo.animateOut()
                              );
                            case 18:
                              return (
                                (e.next = 20),
                                Promise.all([
                                  this.secondaryMiddleRing.animateOut(),
                                  this.secondaryOuterRing.animateRadius(53),
                                  this.secondaryOuterRing.animateStrokeWidth(
                                    26
                                  ),
                                  this.secondaryTubeOne.animateIn(),
                                  this.secondaryHalfCircleTube.animateIn()
                                ])
                              );
                            case 20:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "stopAllAnimations",
              value: function() {
                var e = this.secondaryCircleTube
                    .getElement()
                    .children()[0]
                    .children(),
                  t = this.secondaryTubeOne
                    .getElement()
                    .children()[0]
                    .children(),
                  a = this.secondaryTubeTwo
                    .getElement()
                    .children()[0]
                    .children(),
                  n = this.secondaryHalfCircleTube
                    .getElement()
                    .children()[0]
                    .children(),
                  o = this.curveLeftTube
                    .getElement()
                    .children()[0]
                    .children(),
                  r = this.curveRightTube
                    .getElement()
                    .children()[0]
                    .children(),
                  s = this.tube
                    .getElement()
                    .children()[0]
                    .children();
                this.app.stopAllAnimationsLoop(e),
                  this.app.stopAllAnimationsLoop(t),
                  this.app.stopAllAnimationsLoop(a),
                  this.app.stopAllAnimationsLoop(n),
                  this.app.stopAllAnimationsLoop(s),
                  this.app.stopAllAnimationsLoop(r),
                  this.app.stopAllAnimationsLoop(o),
                  this.secondaryOuterRing.getElement().stop(),
                  this.secondaryMiddleRing.getElement().stop(),
                  this.secondaryInnerRing.getElement().stop();
              }
            },
            {
              key: "animateOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryCircleTube.animateOut(),
                                  this.secondaryTubeOne.animateOut(),
                                  this.secondaryTubeTwo.animateOut(),
                                  this.secondaryOuterRing.animateOut(),
                                  this.secondaryMiddleRing.animateOut(),
                                  this.secondaryInnerRing.animateOut(),
                                  this.secondaryHalfCircleTube.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "randomizeColors",
              value: function() {
                var e = (0, d.SHUFFLE_PROPS)(d.COLORS);
                this.curveLeftTube.setColor(d.COLORS[e[0]], d.COLORS[e[0]]),
                  this.curveRightTube.setColor(d.COLORS[e[1]], d.COLORS[e[2]]),
                  this.tube.setColor(d.COLORS[e[3]], d.COLORS[e[0]]),
                  this.secondaryCircleTube.setColor(
                    d.COLORS[e[1]],
                    d.COLORS[e[2]]
                  ),
                  this.secondaryTubeOne.setColor(
                    d.COLORS[e[3]],
                    d.COLORS[e[0]]
                  ),
                  this.secondaryTubeTwo.setColor(
                    d.COLORS[e[3]],
                    d.COLORS[e[1]]
                  ),
                  this.secondaryOuterRing.setColor(d.COLORS[e[1]]),
                  this.secondaryMiddleRing.setColor(d.COLORS[e[2]]),
                  this.secondaryInnerRing.setColor(d.COLORS[e[3]]),
                  this.secondaryHalfCircleTube.setColor(
                    d.COLORS[e[1]],
                    d.COLORS[e[0]]
                  );
              }
            },
            {
              key: "animateIn",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.curveLeftTube.animateIn(),
                                  this.curveRightTube.animateIn(),
                                  this.tube.animateIn()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.curveLeftTube.animateOut(),
                                  this.curveRightTube.animateOut(),
                                  this.tube.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.curveLeftTube.fadeOut(),
                                  this.curveRightTube.fadeOut(),
                                  this.tube.fadeOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryCircleTube.fadeOut(),
                                  this.secondaryTubeOne.fadeOut(),
                                  this.secondaryTubeTwo.fadeOut(),
                                  this.secondaryOuterRing.fadeOut(),
                                  this.secondaryMiddleRing.fadeOut(),
                                  this.secondaryInnerRing.fadeOut(),
                                  this.secondaryHalfCircleTube.fadeOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "resetSecondary",
              value: function() {
                this.secondaryCircleTube.reset(),
                  this.secondaryTubeOne.reset(),
                  this.secondaryTubeTwo.reset(),
                  this.secondaryOuterRing.reset(),
                  this.secondaryMiddleRing.reset(),
                  this.secondaryInnerRing.reset(),
                  this.secondaryHalfCircleTube.reset();
              }
            },
            {
              key: "reset",
              value: function() {
                this.curveLeftTube.reset(),
                  this.curveRightTube.reset(),
                  this.tube.reset();
              }
            }
          ]),
          e
        );
      })();
    t.default = y;
  },
  function(e, t, a) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      i = a(12),
      l = n(i),
      d = a(6),
      u = n(d),
      c = a(0),
      p = { x: 6, y: 21 },
      y = (function() {
        function e(t, a) {
          r(this, e), (this.svgCanvas = a), (this.app = t);
        }
        return (
          s(e, [
            {
              key: "init",
              value: function() {
                (this.s = Snap(this.svgCanvas)),
                  (this.outerCircProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 68.5,
                    yPos: 75.5,
                    radius: 62,
                    color: c.COLORS.teal,
                    strokeWidth: 6.5
                  }),
                  (this.middleCircProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 68.5,
                    yPos: 75.5,
                    radius: 34,
                    color: c.COLORS.purple,
                    strokeWidth: 6.5
                  }),
                  (this.innerCircProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 68.5,
                    yPos: 75.5,
                    radius: 9,
                    color: c.COLORS.orange,
                    strokeWidth: 6.5
                  }),
                  (this.tubeProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 82,
                    yPos: 92,
                    tubeColor: c.COLORS.yellow,
                    tubeEndColor: c.COLORS.orange,
                    shape: c.PATHS.tube_132,
                    strokeWidth: 26,
                    rotation: 207,
                    lineCap: "round"
                  }),
                  (this.circleOuterRing = new l.default(this.outerCircProps)),
                  (this.circleMiddleRing = new l.default(this.middleCircProps)),
                  (this.circleInnerRing = new l.default(this.innerCircProps)),
                  (this.tube = new u.default(this.tubeProps)),
                  this.circleMiddleRing.init(),
                  this.circleInnerRing.init(),
                  this.circleOuterRing.init(),
                  this.tube.init(),
                  this.createSecondary(),
                  this.randomizeColors(),
                  (this.group = this.s.g(
                    this.circleMiddleRing.getElement(),
                    this.circleInnerRing.getElement(),
                    this.circleOuterRing.getElement(),
                    this.tube.getElement()
                  )),
                  this.group.addClass(
                    c.CLASSES.SVG_NUMBER + " nine " + c.CLASSES.ALT
                  ),
                  this.group.transform("t" + p.x + "," + p.y);
              }
            },
            {
              key: "createSecondary",
              value: function() {
                (this.secondaryCircleTube = new u.default({
                  svgCanvas: this.svgCanvas,
                  xPos: -4.5,
                  yPos: 3.5,
                  tubeColor: c.COLORS.teal,
                  tubeEndColor: c.COLORS.yellow,
                  shape: c.PATHS.circle,
                  strokeWidth: 26,
                  rotation: 270,
                  lineCap: "round",
                  animLength: 300
                })),
                  (this.secondaryOuterRing = new l.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 68,
                    yPos: 76,
                    radius: 53,
                    color: c.COLORS.teal,
                    strokeWidth: 26,
                    animLength: 300
                  })),
                  (this.secondaryTubeOne = new u.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 82,
                    yPos: 92,
                    tubeColor: c.COLORS.orange,
                    tubeEndColor: c.COLORS.purple,
                    shape: c.PATHS.tube_132,
                    strokeWidth: 26,
                    rotation: 207,
                    lineCap: "round",
                    animLength: 300
                  })),
                  (this.secondaryTubeTwo = new u.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 86,
                    yPos: 80,
                    tubeColor: c.COLORS.orange,
                    tubeEndColor: c.COLORS.teal,
                    shape: c.PATHS.tube_132,
                    rotation: 27,
                    strokeWidth: 26,
                    lineCap: "round",
                    animLength: 300
                  })),
                  (this.secondaryMiddleRing = new l.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 68,
                    yPos: 76,
                    radius: 34,
                    color: c.COLORS.yellow,
                    strokeWidth: 6.5,
                    animLength: 300
                  })),
                  (this.secondaryInnerRing = new l.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 68,
                    yPos: 76,
                    radius: 9,
                    strokeWidth: 6.5,
                    color: c.COLORS.orange,
                    animLength: 300
                  })),
                  (this.secondaryHalfCircleTube = new u.default({
                    svgCanvas: this.svgCanvas,
                    xPos: -11.5,
                    yPos: 36.5,
                    tubeColor: c.COLORS.teal,
                    tubeEndColor: c.COLORS.purple,
                    shape: c.PATHS.half_circle,
                    strokeWidth: 26,
                    rotation: 270,
                    lineCap: "round",
                    animLength: 400
                  })),
                  this.secondaryOuterRing.init(),
                  this.secondaryCircleTube.init(),
                  this.secondaryTubeOne.init(),
                  this.secondaryMiddleRing.init(),
                  this.secondaryInnerRing.init(),
                  this.secondaryTubeTwo.init(),
                  this.secondaryHalfCircleTube.init(),
                  (this.secondaryGroup = this.s.g(
                    this.secondaryOuterRing.getElement(),
                    this.secondaryCircleTube.getElement(),
                    this.secondaryTubeOne.getElement(),
                    this.secondaryMiddleRing.getElement(),
                    this.secondaryInnerRing.getElement(),
                    this.secondaryTubeTwo.getElement(),
                    this.secondaryHalfCircleTube.getElement()
                  )),
                  this.secondaryGroup.addClass("svg-number"),
                  this.secondaryGroup.transform("t" + p.x + "," + p.y);
              }
            },
            {
              key: "animateInSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    var t, a, n;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = this.circleOuterRing.getProps().color),
                                (a = this.tube.getProps().tubeColor),
                                (n = this.secondaryMiddleRing.getProps().color),
                                (e.next = 5),
                                this.secondaryCircleTube.animateIn()
                              );
                            case 5:
                              return (
                                this.secondaryTubeOne.animateIn(),
                                this.secondaryOuterRing.setStrokeWidth(26),
                                (e.next = 9),
                                this.secondaryCircleTube.animateOut()
                              );
                            case 9:
                              return (
                                (e.next = 11),
                                Promise.all([
                                  this.secondaryOuterRing.animateRadius(62),
                                  this.secondaryOuterRing.animateStrokeWidth(
                                    6.5
                                  ),
                                  this.secondaryMiddleRing.animateIn(),
                                  this.secondaryInnerRing.animateIn(),
                                  this.secondaryTubeOne.animateOut()
                                ])
                              );
                            case 11:
                              return (
                                (e.next = 13), this.secondaryTubeTwo.animateIn()
                              );
                            case 13:
                              return (
                                this.secondaryInnerRing.setColor(t),
                                this.secondaryMiddleRing.setColor(a),
                                this.secondaryOuterRing.setColor(n),
                                (e.next = 18),
                                this.secondaryTubeTwo.animateOut()
                              );
                            case 18:
                              return (
                                (e.next = 20),
                                Promise.all([
                                  this.secondaryMiddleRing.animateOut(),
                                  this.secondaryOuterRing.animateRadius(53),
                                  this.secondaryOuterRing.animateStrokeWidth(
                                    26
                                  ),
                                  this.secondaryTubeOne.animateIn(),
                                  this.secondaryHalfCircleTube.animateIn()
                                ])
                              );
                            case 20:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "stopAllAnimations",
              value: function() {
                var e = this.secondaryCircleTube
                    .getElement()
                    .children()[0]
                    .children(),
                  t = this.secondaryTubeOne
                    .getElement()
                    .children()[0]
                    .children(),
                  a = this.secondaryTubeTwo
                    .getElement()
                    .children()[0]
                    .children(),
                  n = this.secondaryHalfCircleTube
                    .getElement()
                    .children()[0]
                    .children(),
                  o = this.tube
                    .getElement()
                    .children()[0]
                    .children();
                this.app.stopAllAnimationsLoop(e),
                  this.app.stopAllAnimationsLoop(t),
                  this.app.stopAllAnimationsLoop(a),
                  this.app.stopAllAnimationsLoop(n),
                  this.app.stopAllAnimationsLoop(o),
                  this.secondaryOuterRing.getElement().stop(),
                  this.secondaryMiddleRing.getElement().stop(),
                  this.secondaryInnerRing.getElement().stop(),
                  this.circleMiddleRing.getElement().stop(),
                  this.circleInnerRing.getElement().stop(),
                  this.circleOuterRing.getElement().stop();
              }
            },
            {
              key: "animateOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryCircleTube.animateOut(),
                                  this.secondaryTubeOne.animateOut(),
                                  this.secondaryTubeTwo.animateOut(),
                                  this.secondaryOuterRing.animateOut(),
                                  this.secondaryMiddleRing.animateOut(),
                                  this.secondaryInnerRing.animateOut(),
                                  this.secondaryHalfCircleTube.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "randomizeColors",
              value: function() {
                var e = (0, c.SHUFFLE_PROPS)(c.COLORS);
                this.circleOuterRing.setColor(c.COLORS[e[2]]),
                  this.circleMiddleRing.setColor(c.COLORS[e[1]]),
                  this.circleInnerRing.setColor(c.COLORS[e[0]]),
                  this.tube.setColor(c.COLORS[e[3]], c.COLORS[e[0]]),
                  this.secondaryCircleTube.setColor(
                    c.COLORS[e[2]],
                    c.COLORS[e[1]]
                  ),
                  this.secondaryTubeOne.setColor(
                    c.COLORS[e[3]],
                    c.COLORS[e[0]]
                  ),
                  this.secondaryTubeTwo.setColor(
                    c.COLORS[e[3]],
                    c.COLORS[e[1]]
                  ),
                  this.secondaryOuterRing.setColor(c.COLORS[e[1]]),
                  this.secondaryMiddleRing.setColor(c.COLORS[e[2]]),
                  this.secondaryInnerRing.setColor(c.COLORS[e[3]]),
                  this.secondaryHalfCircleTube.setColor(
                    c.COLORS[e[1]],
                    c.COLORS[e[0]]
                  );
              }
            },
            {
              key: "animateIn",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.circleMiddleRing.animateIn(),
                                  this.circleInnerRing.animateIn(),
                                  this.circleOuterRing.animateIn(),
                                  this.tube.animateIn()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.circleMiddleRing.animateOut(),
                                  this.circleInnerRing.animateOut(),
                                  this.circleOuterRing.animateOut(),
                                  this.tube.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.circleMiddleRing.fadeOut(),
                                  this.circleInnerRing.fadeOut(),
                                  this.circleOuterRing.fadeOut(),
                                  this.tube.fadeOut()
                                ])
                              );
                            case 2:
                              this.reset();
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryCircleTube.fadeOut(),
                                  this.secondaryTubeOne.fadeOut(),
                                  this.secondaryTubeTwo.fadeOut(),
                                  this.secondaryOuterRing.fadeOut(),
                                  this.secondaryMiddleRing.fadeOut(),
                                  this.secondaryInnerRing.fadeOut(),
                                  this.secondaryHalfCircleTube.fadeOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "reset",
              value: function() {
                this.circleMiddleRing.reset(),
                  this.circleInnerRing.reset(),
                  this.circleOuterRing.reset(),
                  this.tube.reset();
              }
            },
            {
              key: "resetSecondary",
              value: function() {
                this.secondaryCircleTube.reset(),
                  this.secondaryTubeOne.reset(),
                  this.secondaryTubeTwo.reset(),
                  this.secondaryOuterRing.reset(),
                  this.secondaryMiddleRing.reset(),
                  this.secondaryInnerRing.reset(),
                  this.secondaryHalfCircleTube.reset();
              }
            }
          ]),
          e
        );
      })();
    t.default = y;
  },
  function(e, t, a) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      i = a(2),
      l = n(i),
      d = a(45),
      u = n(d),
      c = a(9),
      p = n(c),
      y = a(28),
      g = n(y),
      m = a(0),
      v = { x: 30, y: 24 },
      h = (function() {
        function e(t, a) {
          r(this, e), (this.svgCanvas = a), (this.app = t);
        }
        return (
          s(e, [
            {
              key: "init",
              value: function() {
                (this.s = Snap(this.svgCanvas)),
                  (this.topHatProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 8,
                    yPos: 5,
                    strokeWidth: 26,
                    color: m.COLORS.orange,
                    shape: m.PATHS.smaller_quarter_circle,
                    rotation: 0
                  }),
                  (this.baseProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 34,
                    yPos: 162,
                    strokeWidth: 26,
                    color: m.COLORS.purple,
                    shape: m.PATHS.path_80,
                    rotation: 90
                  }),
                  (this.topStemProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 34,
                    yPos: 57,
                    strokeWidth: 26,
                    color: m.COLORS.yellow,
                    shape: m.PATHS.path_66,
                    rotation: 0
                  }),
                  (this.botStemProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 47,
                    yPos: 138,
                    strokeWidth: 26,
                    color: m.COLORS.teal,
                    shape: m.PATHS.path_52,
                    rotation: 0,
                    segmentCount: 2,
                    dashLength: 13
                  }),
                  (this.topHat = new l.default(this.topHatProps)),
                  (this.base = new l.default(this.baseProps)),
                  (this.topStem = new l.default(this.topStemProps)),
                  (this.botStem = new u.default(this.botStemProps)),
                  this.base.init(),
                  this.topStem.init(),
                  this.botStem.init(),
                  this.topHat.init(),
                  this.createSecondary(),
                  this.randomizeColors(),
                  (this.group = this.s.g(
                    this.botStem.getElement(),
                    this.base.getElement(),
                    this.topStem.getElement(),
                    this.topHat.getElement()
                  )),
                  this.group.addClass(m.CLASSES.SVG_NUMBER + " one"),
                  this.group.transform("t" + v.x + "," + v.y);
              }
            },
            {
              key: "createSecondary",
              value: function() {
                (this.secondaryTopHat = new l.default(this.topHatProps)),
                  (this.secondaryBase = new l.default(this.baseProps)),
                  (this.secondaryTopStem = new p.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 34,
                    yPos: 57,
                    height: 68,
                    width: 26,
                    animLength: 300
                  })),
                  (this.secondaryRectOne = new p.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 34,
                    yPos: 58,
                    height: 14,
                    width: 26,
                    animLength: 300
                  })),
                  (this.secondaryRectTwo = new p.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 34,
                    yPos: 84,
                    height: 14,
                    width: 26,
                    animLength: 300
                  })),
                  (this.secondaryRectThree = new p.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 34,
                    yPos: 110,
                    height: 14,
                    width: 26,
                    animLength: 300
                  })),
                  (this.secondaryRectFour = new p.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 34,
                    yPos: 136,
                    height: 14,
                    width: 26,
                    animLength: 300
                  })),
                  (this.secondaryRectFive = new p.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 34,
                    yPos: 162,
                    height: 14,
                    width: 26,
                    animLength: 300
                  })),
                  (this.secondaryDotPattern = new g.default({
                    svgCanvas: this.svgCanvas,
                    xPos: -12,
                    yPos: 64,
                    rows: 4,
                    cols: 4,
                    radius: 3,
                    spaceBetween: 34,
                    animLength: 100
                  })),
                  this.secondaryDotPattern.init(),
                  this.secondaryTopHat.init(),
                  this.secondaryBase.init(),
                  this.secondaryTopStem.init(),
                  this.secondaryRectOne.init(),
                  this.secondaryRectTwo.init(),
                  this.secondaryRectThree.init(),
                  this.secondaryRectFour.init(),
                  this.secondaryRectFive.init(),
                  (this.secondaryGroup = this.s.g(
                    this.secondaryDotPattern.getElement(),
                    this.secondaryBase.getElement(),
                    this.secondaryTopStem.getElement(),
                    this.secondaryTopHat.getElement(),
                    this.secondaryRectOne.getElement(),
                    this.secondaryRectTwo.getElement(),
                    this.secondaryRectThree.getElement(),
                    this.secondaryRectFour.getElement(),
                    this.secondaryRectFive.getElement()
                  )),
                  this.secondaryGroup.addClass("svg-number"),
                  this.secondaryGroup.transform("t" + v.x + "," + v.y);
              }
            },
            {
              key: "randomizeColors",
              value: function() {
                var e = (0, m.SHUFFLE_PROPS)(m.COLORS);
                this.topHat.setColor(m.COLORS[e[0]]),
                  this.base.setColor(m.COLORS[e[1]]),
                  this.topStem.setColor(m.COLORS[e[2]]),
                  this.botStem.setColor(m.COLORS[e[3]]),
                  this.secondaryTopHat.setColor(m.COLORS[e[0]]),
                  this.secondaryDotPattern.setColor(m.COLORS[e[1]]),
                  this.secondaryBase.setColor(m.COLORS[e[1]]),
                  this.secondaryTopStem.setColor(m.COLORS[e[2]]),
                  this.secondaryRectOne.setColor(m.COLORS[e[3]]),
                  this.secondaryRectTwo.setColor(m.COLORS[e[3]]),
                  this.secondaryRectThree.setColor(m.COLORS[e[3]]),
                  this.secondaryRectFour.setColor(m.COLORS[e[3]]),
                  this.secondaryRectFive.setColor(m.COLORS[e[3]]);
              }
            },
            {
              key: "animateInSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryTopHat.animateIn(),
                                  this.secondaryBase.animateIn(),
                                  this.secondaryTopStem.animateIn(),
                                  this.secondaryDotPattern.animateIn(),
                                  this.secondaryRectFive.animateIn(),
                                  this.secondaryRectFour.animateScale(3, 1)
                                ])
                              );
                            case 2:
                              return (
                                (e.next = 4),
                                this.secondaryTopStem.animateScale(1, 0.23)
                              );
                            case 4:
                              return (
                                (e.next = 6),
                                Promise.all([
                                  this.secondaryRectThree.animateScale(5, 1),
                                  this.secondaryRectTwo.animateScale(5, 1),
                                  this.secondaryTopStem.animatePosition(0, -26)
                                ])
                              );
                            case 6:
                              return (
                                (e.next = 8),
                                Promise.all([
                                  this.secondaryTopStem.animateScale(0, 0),
                                  this.secondaryRectOne.animateScale(5, 1),
                                  this.secondaryRectFour.animateScale(5, 1),
                                  this.secondaryRectFive.animateScale(5, 1)
                                ])
                              );
                            case 8:
                              return (
                                (e.next = 10),
                                this.secondaryTopStem.animateScale(0, 0)
                              );
                            case 10:
                              return (
                                (e.next = 12),
                                Promise.all([
                                  this.secondaryTopStem.setPosition(34, 108),
                                  this.secondaryRectOne.animateScale(1, 1),
                                  this.secondaryRectTwo.animateScale(3, 1),
                                  this.secondaryRectFive.animateScale(0, 0)
                                ])
                              );
                            case 12:
                              return (
                                (e.next = 14),
                                Promise.all([
                                  this.secondaryTopStem.animateScale(1, 0.23),
                                  this.secondaryRectThree.animateScale(0, 1),
                                  this.secondaryRectFour.animateScale(0, 1)
                                ])
                              );
                            case 14:
                              return (
                                (e.next = 16),
                                this.secondaryTopStem.animateScale(1, 1)
                              );
                            case 16:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "stopAllAnimations",
              value: function() {
                var e = this.botStem.getElement().children(),
                  t = this.secondaryDotPattern.getElement().children();
                this.app.stopAllAnimationsLoop(e),
                  this.app.stopAllAnimationsLoop(t),
                  this.base
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.topStem
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.topHat
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryTopHat
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryBase
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryTopStem.getElement().stop(),
                  this.secondaryRectOne.getElement().stop(),
                  this.secondaryRectTwo.getElement().stop(),
                  this.secondaryRectThree.getElement().stop(),
                  this.secondaryRectFour.getElement().stop(),
                  this.secondaryRectFive.getElement().stop();
              }
            },
            {
              key: "animateOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryTopHat.animateOut(),
                                  this.secondaryBase.animateOut(),
                                  this.secondaryTopStem.animateOut(),
                                  this.secondaryRectOne.animateOut(),
                                  this.secondaryRectTwo.animateOut(),
                                  this.secondaryRectThree.animateOut(),
                                  this.secondaryRectFour.animateOut(),
                                  this.secondaryRectFive.animateOut(),
                                  this.secondaryDotPattern.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateIn",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.topHat.animateIn(),
                                  this.base.animateIn(),
                                  this.topStem.animateIn(),
                                  this.botStem.animateIn()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.topHat.animateOut(),
                                  this.base.animateOut(),
                                  this.topStem.animateOut(),
                                  this.botStem.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.topHat.fadeOut(),
                                  this.base.fadeOut(),
                                  this.topStem.fadeOut(),
                                  this.botStem.fadeOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryTopHat.fadeOut(),
                                  this.secondaryBase.fadeOut(),
                                  this.secondaryTopStem.fadeOut(),
                                  this.secondaryRectOne.fadeOut(),
                                  this.secondaryRectTwo.fadeOut(),
                                  this.secondaryRectThree.fadeOut(),
                                  this.secondaryRectFour.fadeOut(),
                                  this.secondaryRectFive.fadeOut(),
                                  this.secondaryDotPattern.fadeOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "reset",
              value: function() {
                this.topHat.reset(),
                  this.base.reset(),
                  this.topStem.reset(),
                  this.botStem.reset();
              }
            },
            {
              key: "resetSecondary",
              value: function() {
                this.secondaryTopHat.reset(),
                  this.secondaryBase.reset(),
                  this.secondaryTopStem.reset(),
                  this.secondaryRectOne.reset(),
                  this.secondaryRectTwo.reset(),
                  this.secondaryRectThree.reset(),
                  this.secondaryRectFour.reset(),
                  this.secondaryRectFive.reset(),
                  this.secondaryDotPattern.reset();
              }
            }
          ]),
          e
        );
      })();
    t.default = h;
  },
  function(e, t, a) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      i = a(2),
      l = n(i),
      d = a(45),
      u = n(d),
      c = a(9),
      p = n(c),
      y = a(28),
      g = n(y),
      m = a(0),
      v = { x: 30, y: 24 },
      h = (function() {
        function e(t, a) {
          r(this, e), (this.svgCanvas = a), (this.app = t);
        }
        return (
          s(e, [
            {
              key: "init",
              value: function() {
                (this.s = Snap(this.svgCanvas)),
                  (this.topHatProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 8,
                    yPos: 5,
                    strokeWidth: 26,
                    color: m.COLORS.teal,
                    shape: m.PATHS.smaller_quarter_circle,
                    rotation: 0
                  }),
                  (this.baseProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 34,
                    yPos: 162,
                    strokeWidth: 26,
                    color: m.COLORS.orange,
                    shape: m.PATHS.path_80,
                    rotation: 90
                  }),
                  (this.botStemProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 34,
                    yPos: 123,
                    strokeWidth: 26,
                    color: m.COLORS.purple,
                    shape: m.PATHS.path_66,
                    rotation: 0
                  }),
                  (this.topStemProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 47,
                    yPos: 67,
                    strokeWidth: 26,
                    color: m.COLORS.yellow,
                    shape: m.PATHS.path_52,
                    rotation: 0,
                    segmentCount: 2,
                    dashLength: 13
                  }),
                  (this.topHat = new l.default(this.topHatProps)),
                  (this.base = new l.default(this.baseProps)),
                  (this.topStem = new u.default(this.topStemProps)),
                  (this.botStem = new l.default(this.botStemProps)),
                  this.base.init(),
                  this.topStem.init(),
                  this.botStem.init(),
                  this.topHat.init(),
                  this.createSecondary(),
                  this.randomizeColors(),
                  (this.group = this.s.g(
                    this.botStem.getElement(),
                    this.base.getElement(),
                    this.topStem.getElement(),
                    this.topHat.getElement()
                  )),
                  this.group.addClass(
                    m.CLASSES.SVG_NUMBER + " one " + m.CLASSES.ALT
                  ),
                  this.group.transform("t" + v.x + "," + v.y);
              }
            },
            {
              key: "createSecondary",
              value: function() {
                (this.secondaryTopHat = new l.default(this.topHatProps)),
                  (this.secondaryBase = new l.default(this.baseProps)),
                  (this.secondaryTopStem = new p.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 34,
                    yPos: 57,
                    height: 68,
                    width: 26,
                    color: m.COLORS.yellow,
                    animLength: 300
                  })),
                  (this.secondaryRectOne = new p.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 34,
                    yPos: 58,
                    height: 14,
                    width: 26,
                    color: m.COLORS.teal,
                    animLength: 300
                  })),
                  (this.secondaryRectTwo = new p.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 34,
                    yPos: 84,
                    height: 14,
                    width: 26,
                    color: m.COLORS.teal,
                    animLength: 300
                  })),
                  (this.secondaryRectThree = new p.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 34,
                    yPos: 110,
                    height: 14,
                    width: 26,
                    color: m.COLORS.teal,
                    animLength: 300
                  })),
                  (this.secondaryRectFour = new p.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 34,
                    yPos: 136,
                    height: 14,
                    width: 26,
                    color: m.COLORS.teal,
                    animLength: 300
                  })),
                  (this.secondaryRectFive = new p.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 34,
                    yPos: 162,
                    height: 14,
                    width: 26,
                    color: m.COLORS.teal,
                    animLength: 300
                  })),
                  (this.secondaryDotPattern = new g.default({
                    svgCanvas: this.svgCanvas,
                    xPos: -12,
                    yPos: 64,
                    rows: 4,
                    cols: 4,
                    radius: 3,
                    spaceBetween: 34,
                    animLength: 100,
                    color: m.COLORS.purple
                  })),
                  this.secondaryDotPattern.init(),
                  this.secondaryTopHat.init(),
                  this.secondaryBase.init(),
                  this.secondaryTopStem.init(),
                  this.secondaryRectOne.init(),
                  this.secondaryRectTwo.init(),
                  this.secondaryRectThree.init(),
                  this.secondaryRectFour.init(),
                  this.secondaryRectFive.init(),
                  (this.secondaryGroup = this.s.g(
                    this.secondaryDotPattern.getElement(),
                    this.secondaryBase.getElement(),
                    this.secondaryTopStem.getElement(),
                    this.secondaryTopHat.getElement(),
                    this.secondaryRectOne.getElement(),
                    this.secondaryRectTwo.getElement(),
                    this.secondaryRectThree.getElement(),
                    this.secondaryRectFour.getElement(),
                    this.secondaryRectFive.getElement()
                  )),
                  this.secondaryGroup.addClass("svg-number"),
                  this.secondaryGroup.transform("t" + v.x + "," + v.y);
              }
            },
            {
              key: "randomizeColors",
              value: function() {
                var e = (0, m.SHUFFLE_PROPS)(m.COLORS);
                this.topHat.setColor(m.COLORS[e[0]]),
                  this.base.setColor(m.COLORS[e[1]]),
                  this.topStem.setColor(m.COLORS[e[2]]),
                  this.botStem.setColor(m.COLORS[e[3]]),
                  this.secondaryTopHat.setColor(m.COLORS[e[0]]),
                  this.secondaryDotPattern.setColor(m.COLORS[e[1]]),
                  this.secondaryBase.setColor(m.COLORS[e[1]]),
                  this.secondaryTopStem.setColor(m.COLORS[e[3]]),
                  this.secondaryRectOne.setColor(m.COLORS[e[2]]),
                  this.secondaryRectTwo.setColor(m.COLORS[e[2]]),
                  this.secondaryRectThree.setColor(m.COLORS[e[2]]),
                  this.secondaryRectFour.setColor(m.COLORS[e[2]]),
                  this.secondaryRectFive.setColor(m.COLORS[e[2]]);
              }
            },
            {
              key: "animateInSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryTopHat.animateIn(),
                                  this.secondaryBase.animateIn(),
                                  this.secondaryTopStem.animateIn(),
                                  this.secondaryDotPattern.animateIn(),
                                  this.secondaryRectFive.animateIn(),
                                  this.secondaryRectFour.animateScale(3, 1)
                                ])
                              );
                            case 2:
                              return (
                                (e.next = 4),
                                this.secondaryTopStem.animateScale(1, 0.23)
                              );
                            case 4:
                              return (
                                (e.next = 6),
                                Promise.all([
                                  this.secondaryRectThree.animateScale(5, 1),
                                  this.secondaryRectTwo.animateScale(5, 1),
                                  this.secondaryTopStem.animatePosition(0, -26)
                                ])
                              );
                            case 6:
                              return (
                                (e.next = 8),
                                Promise.all([
                                  this.secondaryTopStem.animateScale(0, 0),
                                  this.secondaryRectOne.animateScale(5, 1),
                                  this.secondaryRectFour.animateScale(5, 1),
                                  this.secondaryRectFive.animateScale(5, 1)
                                ])
                              );
                            case 8:
                              return (
                                (e.next = 10),
                                this.secondaryTopStem.animateScale(0, 0)
                              );
                            case 10:
                              return (
                                (e.next = 12),
                                Promise.all([
                                  this.secondaryTopStem.setPosition(34, 108),
                                  this.secondaryRectOne.animateScale(1, 1),
                                  this.secondaryRectTwo.animateScale(3, 1),
                                  this.secondaryRectFive.animateScale(0, 0)
                                ])
                              );
                            case 12:
                              return (
                                (e.next = 14),
                                Promise.all([
                                  this.secondaryTopStem.animateScale(1, 0.23),
                                  this.secondaryRectThree.animateScale(0, 1),
                                  this.secondaryRectFour.animateScale(0, 1)
                                ])
                              );
                            case 14:
                              return (
                                (e.next = 16),
                                this.secondaryTopStem.animateScale(1, 1)
                              );
                            case 16:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "stopAllAnimations",
              value: function() {
                var e = this.botStem.getElement().children(),
                  t = this.secondaryDotPattern.getElement().children();
                this.app.stopAllAnimationsLoop(e),
                  this.app.stopAllAnimationsLoop(t),
                  this.base
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.topStem
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.topHat
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryTopHat
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryBase
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryTopStem.getElement().stop(),
                  this.secondaryRectOne.getElement().stop(),
                  this.secondaryRectTwo.getElement().stop(),
                  this.secondaryRectThree.getElement().stop(),
                  this.secondaryRectFour.getElement().stop(),
                  this.secondaryRectFive.getElement().stop();
              }
            },
            {
              key: "animateOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryTopHat.animateOut(),
                                  this.secondaryBase.animateOut(),
                                  this.secondaryTopStem.animateOut(),
                                  this.secondaryRectOne.animateOut(),
                                  this.secondaryRectTwo.animateOut(),
                                  this.secondaryRectThree.animateOut(),
                                  this.secondaryRectFour.animateOut(),
                                  this.secondaryRectFive.animateOut(),
                                  this.secondaryDotPattern.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateIn",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.topHat.animateIn(),
                                  this.base.animateIn(),
                                  this.topStem.animateIn(),
                                  this.botStem.animateIn()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.topHat.animateOut(),
                                  this.base.animateOut(),
                                  this.topStem.animateOut(),
                                  this.botStem.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.topHat.fadeOut(),
                                  this.base.fadeOut(),
                                  this.topStem.fadeOut(),
                                  this.botStem.fadeOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryTopHat.fadeOut(),
                                  this.secondaryBase.fadeOut(),
                                  this.secondaryTopStem.fadeOut(),
                                  this.secondaryRectOne.fadeOut(),
                                  this.secondaryRectTwo.fadeOut(),
                                  this.secondaryRectThree.fadeOut(),
                                  this.secondaryRectFour.fadeOut(),
                                  this.secondaryRectFive.fadeOut(),
                                  this.secondaryDotPattern.fadeOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "reset",
              value: function() {
                this.topHat.reset(),
                  this.base.reset(),
                  this.topStem.reset(),
                  this.botStem.reset();
              }
            },
            {
              key: "resetSecondary",
              value: function() {
                this.secondaryTopHat.reset(),
                  this.secondaryBase.reset(),
                  this.secondaryTopStem.reset(),
                  this.secondaryRectOne.reset(),
                  this.secondaryRectTwo.reset(),
                  this.secondaryRectThree.reset(),
                  this.secondaryRectFour.reset(),
                  this.secondaryRectFive.reset(),
                  this.secondaryDotPattern.reset();
              }
            }
          ]),
          e
        );
      })();
    t.default = h;
  },
  function(e, t, a) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      i = a(2),
      l = n(i),
      d = a(9),
      u = n(d),
      c = a(16),
      p = n(c),
      y = a(0),
      g = a(29),
      m = n(g),
      v = { x: 9, y: 21 },
      h = (function() {
        function e(t, a) {
          r(this, e), (this.svgCanvas = a), (this.app = t);
        }
        return (
          s(e, [
            {
              key: "init",
              value: function() {
                (this.s = Snap(this.svgCanvas)),
                  (this.topProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 0,
                    yPos: 6,
                    strokeWidth: 26,
                    color: y.COLORS.purple,
                    shape: y.PATHS.path_132,
                    rotation: 180
                  }),
                  (this.curveProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 78.5,
                    yPos: 32,
                    strokeWidth: 26,
                    color: y.COLORS.orange,
                    shape: y.PATHS.smaller_quarter_circle,
                    rotation: 0
                  }),
                  (this.midSquareRightProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 52.5,
                    yPos: 85.5,
                    width: 26,
                    height: 26,
                    color: y.COLORS.yellow,
                    rotation: 0
                  }),
                  (this.midSquareLeftProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 26.5,
                    yPos: 111.5,
                    width: 26,
                    height: 26,
                    color: y.COLORS.yellow,
                    rotation: 0
                  }),
                  (this.longLegProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 0,
                    yPos: 138,
                    width: 26,
                    height: 80,
                    color: y.COLORS.purple,
                    rotation: 0
                  }),
                  (this.diagonalsProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 1.5,
                    yPos: 86.5,
                    rows: 13,
                    cols: 4,
                    color: y.COLORS.teal
                  }),
                  (this.top = new l.default(this.topProps)),
                  (this.curve = new l.default(this.curveProps)),
                  (this.midSquareRight = new u.default(
                    this.midSquareRightProps
                  )),
                  (this.midSquareLeft = new u.default(this.midSquareLeftProps)),
                  (this.longLeg = new u.default(this.longLegProps)),
                  (this.diagonals = new p.default(this.diagonalsProps)),
                  this.curve.init(),
                  this.top.init(),
                  this.midSquareRight.init(),
                  this.midSquareLeft.init(),
                  this.longLeg.init(),
                  this.diagonals.init(),
                  this.createSecondary(),
                  this.randomizeColors(),
                  (this.group = this.s.g(
                    this.midSquareRight.getElement(),
                    this.midSquareLeft.getElement(),
                    this.longLeg.getElement(),
                    this.curve.getElement(),
                    this.top.getElement(),
                    this.diagonals.getElement()
                  )),
                  this.group.addClass(y.CLASSES.SVG_NUMBER + " seven"),
                  this.group.transform("t" + v.x + "," + v.y);
              }
            },
            {
              key: "createSecondary",
              value: function() {
                (this.secondaryTop = new l.default(this.topProps)),
                  (this.secondaryCurve = new l.default(this.curveProps)),
                  (this.secondaryMidSquareRight = new u.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 52.5,
                    yPos: 85.5,
                    width: 26,
                    height: 26,
                    color: y.COLORS.orange,
                    rotation: 0,
                    animLength: 400
                  })),
                  (this.secondaryMidSquareLeft = new u.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 26.5,
                    yPos: 111.5,
                    width: 26,
                    height: 80,
                    color: y.COLORS.yellow,
                    rotation: 0,
                    animLength: 400
                  })),
                  (this.secondaryBotSquare = new u.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 0,
                    yPos: 192,
                    width: 26,
                    height: 26,
                    color: y.COLORS.teal,
                    rotation: 0,
                    animLength: 400
                  })),
                  (this.secondaryBox = new m.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 1,
                    yPos: 6,
                    rows: 10,
                    cols: 10,
                    color: y.COLORS.teal,
                    blockSize: 13,
                    strokeWidth: 2.5,
                    animLength: 400
                  })),
                  (this.secondaryDiagonals = new p.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 1.5,
                    yPos: 86.5,
                    rows: 13,
                    cols: 10,
                    animLength: 400,
                    color: y.COLORS.yellow
                  })),
                  this.secondaryTop.init(),
                  this.secondaryCurve.init(),
                  this.secondaryMidSquareRight.init(),
                  this.secondaryMidSquareLeft.init(),
                  this.secondaryBotSquare.init(),
                  this.secondaryBox.init(),
                  this.secondaryDiagonals.init(),
                  (this.secondaryGroup = this.s.g(
                    this.secondaryTop.getElement(),
                    this.secondaryCurve.getElement(),
                    this.secondaryMidSquareRight.getElement(),
                    this.secondaryMidSquareLeft.getElement(),
                    this.secondaryBotSquare.getElement(),
                    this.secondaryBox.getElement(),
                    this.secondaryDiagonals.getElement()
                  )),
                  this.secondaryGroup.transform("t" + v.x + "," + v.y);
              }
            },
            {
              key: "animateInSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    var t, a, n, o;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = this.secondaryTop.getProps().color),
                                (a = this.secondaryCurve.getProps().color),
                                (n = this.secondaryBotSquare.getProps().color),
                                (o = this.secondaryMidSquareLeft.getProps()
                                  .color),
                                (e.next = 6),
                                Promise.all([
                                  this.secondaryTop.animateIn(),
                                  this.secondaryCurve.animateIn(),
                                  this.secondaryMidSquareRight.animateIn(),
                                  this.secondaryMidSquareLeft.animateIn(),
                                  this.secondaryBox.animateInBorders(),
                                  this.secondaryBotSquare.animateIn()
                                ])
                              );
                            case 6:
                              return (
                                (e.next = 8),
                                Promise.all([
                                  this.secondaryMidSquareRight.setColor(t),
                                  this.secondaryBox.animateOut(),
                                  this.secondaryMidSquareRight.animateScale(
                                    1,
                                    3.06,
                                    this.secondaryMidSquareLeft.getProps()
                                      .boundingBox.cx,
                                    this.secondaryMidSquareLeft.getProps()
                                      .boundingBox.cy / 1.77
                                  ),
                                  this.secondaryMidSquareLeft.animateScale(
                                    1,
                                    0.33,
                                    this.secondaryMidSquareLeft.getProps()
                                      .boundingBox.cx,
                                    1.26 *
                                      this.secondaryMidSquareLeft.getProps()
                                        .boundingBox.cy
                                  ),
                                  this.secondaryDiagonals.animateIn()
                                ])
                              );
                            case 8:
                              return (
                                this.secondaryMidSquareLeft.setColor(a),
                                this.secondaryBotSquare.setColor(o),
                                (e.next = 12),
                                this.secondaryDiagonals.animateOut()
                              );
                            case 12:
                              return (
                                (e.next = 14),
                                Promise.all([
                                  this.secondaryBox.animateInBorders(),
                                  this.secondaryBotSquare.setColor(a),
                                  this.secondaryMidSquareLeft.setColor(t),
                                  this.secondaryMidSquareRight.setColor(n),
                                  this.secondaryMidSquareRight.animateScale(
                                    1,
                                    1,
                                    this.secondaryMidSquareLeft.getProps()
                                      .boundingBox.cx,
                                    1.26 *
                                      this.secondaryMidSquareLeft.getProps()
                                        .boundingBox.cy
                                  ),
                                  this.secondaryMidSquareLeft.animateScale(
                                    1,
                                    1,
                                    this.secondaryMidSquareLeft.getProps()
                                      .boundingBox.cx,
                                    1.26 *
                                      this.secondaryMidSquareLeft.getProps()
                                        .boundingBox.cy
                                  )
                                ])
                              );
                            case 14:
                              return (
                                this.secondaryBotSquare.setColor(t),
                                this.secondaryMidSquareLeft.setColor(n),
                                this.secondaryMidSquareRight.setColor(o),
                                (e.next = 19),
                                this.secondaryDiagonals.animateIn()
                              );
                            case 19:
                              return (
                                (e.next = 21),
                                Promise.all([
                                  this.secondaryMidSquareRight.animateScale(
                                    1,
                                    3.06,
                                    this.secondaryMidSquareLeft.getProps()
                                      .boundingBox.cx,
                                    this.secondaryMidSquareLeft.getProps()
                                      .boundingBox.cy / 1.77
                                  ),
                                  this.secondaryMidSquareLeft.animateScale(
                                    1,
                                    0.33,
                                    this.secondaryMidSquareLeft.getProps()
                                      .boundingBox.cx,
                                    1.26 *
                                      this.secondaryMidSquareLeft.getProps()
                                        .boundingBox.cy
                                  ),
                                  this.secondaryBox.animateOut(),
                                  this.secondaryDiagonals.animateOut()
                                ])
                              );
                            case 21:
                              return (
                                (e.next = 23),
                                Promise.all([
                                  this.secondaryBox.animateInBorders(),
                                  this.secondaryBotSquare.setColor(n),
                                  this.secondaryMidSquareLeft.setColor(o),
                                  this.secondaryMidSquareRight.setColor(a),
                                  this.secondaryMidSquareRight.animateScale(
                                    1,
                                    1,
                                    this.secondaryMidSquareLeft.getProps()
                                      .boundingBox.cx,
                                    this.secondaryMidSquareLeft.getProps()
                                      .boundingBox.cy / 1.77
                                  ),
                                  this.secondaryMidSquareLeft.animateScale(
                                    1,
                                    1,
                                    this.secondaryMidSquareLeft.getProps()
                                      .boundingBox.cx,
                                    1.26 *
                                      this.secondaryMidSquareLeft.getProps()
                                        .boundingBox.cy
                                  )
                                ])
                              );
                            case 23:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "stopAllAnimations",
              value: function() {
                var e = this.diagonals.getElement().children(),
                  t = this.secondaryBox.getElement().children(),
                  a = this.secondaryDiagonals.getElement().children();
                this.app.stopAllAnimationsLoop(e),
                  this.app.stopAllAnimationsLoop(t),
                  this.app.stopAllAnimationsLoop(a),
                  this.curve
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.top
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.midSquareRight.getElement().stop(),
                  this.midSquareLeft.getElement().stop(),
                  this.longLeg.getElement().stop(),
                  this.secondaryTop
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryCurve
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryMidSquareRight.getElement().stop(),
                  this.secondaryMidSquareLeft.getElement().stop(),
                  this.secondaryBotSquare.getElement().stop();
              }
            },
            {
              key: "animateOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryTop.animateOut(),
                                  this.secondaryCurve.animateOut(),
                                  this.secondaryMidSquareRight.animateOut(),
                                  this.secondaryMidSquareLeft.animateOut(),
                                  this.secondaryBotSquare.animateOut(),
                                  this.secondaryBox.animateOut(),
                                  this.secondaryDiagonals.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "randomizeColors",
              value: function() {
                var e = (0, y.SHUFFLE_PROPS)(y.COLORS);
                this.top.setColor(y.COLORS[e[2]]),
                  this.curve.setColor(y.COLORS[e[0]]),
                  this.midSquareRight.setColor(y.COLORS[e[1]]),
                  this.midSquareLeft.setColor(y.COLORS[e[1]]),
                  this.longLeg.setColor(y.COLORS[e[2]]),
                  this.diagonals.setColor(y.COLORS[e[3]]),
                  this.secondaryTop.setColor(y.COLORS[e[2]]),
                  this.secondaryCurve.setColor(y.COLORS[e[0]]),
                  this.secondaryMidSquareRight.setColor(y.COLORS[e[0]]),
                  this.secondaryMidSquareLeft.setColor(y.COLORS[e[1]]),
                  this.secondaryBotSquare.setColor(y.COLORS[e[3]]),
                  this.secondaryBox.setColor(y.COLORS[e[3]]),
                  this.secondaryDiagonals.setColor(y.COLORS[e[1]]);
              }
            },
            {
              key: "animateIn",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.top.animateIn(),
                                  this.curve.animateIn(),
                                  this.midSquareRight.animateIn(),
                                  this.midSquareLeft.animateIn(),
                                  this.longLeg.animateIn(),
                                  this.diagonals.animateIn()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.top.animateOut(),
                                  this.curve.animateOut(),
                                  this.midSquareRight.animateOut(),
                                  this.midSquareLeft.animateOut(),
                                  this.longLeg.animateOut(),
                                  this.diagonals.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.top.fadeOut(),
                                  this.curve.fadeOut(),
                                  this.midSquareRight.fadeOut(),
                                  this.midSquareLeft.fadeOut(),
                                  this.longLeg.fadeOut(),
                                  this.diagonals.fadeOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryTop.fadeOut(),
                                  this.secondaryCurve.fadeOut(),
                                  this.secondaryMidSquareRight.fadeOut(),
                                  this.secondaryMidSquareLeft.fadeOut(),
                                  this.secondaryBotSquare.fadeOut(),
                                  this.secondaryBox.animateOut(),
                                  this.secondaryDiagonals.fadeOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "reset",
              value: function() {
                this.top.reset(),
                  this.curve.reset(),
                  this.midSquareRight.reset(),
                  this.midSquareLeft.reset(),
                  this.longLeg.reset();
              }
            },
            {
              key: "resetSecondary",
              value: function() {
                this.secondaryTop.reset(),
                  this.secondaryCurve.reset(),
                  this.secondaryMidSquareRight.reset(),
                  this.secondaryMidSquareLeft.reset(),
                  this.secondaryBotSquare.reset(),
                  this.secondaryBox.reset();
              }
            }
          ]),
          e
        );
      })();
    t.default = h;
  },
  function(e, t, a) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      i = a(2),
      l = n(i),
      d = a(9),
      u = n(d),
      c = a(33),
      p = n(c),
      y = a(29),
      g = n(y),
      m = a(16),
      v = n(m),
      h = a(0),
      C = { x: 9, y: 21 },
      O = (function() {
        function e(t, a) {
          r(this, e), (this.svgCanvas = a), (this.app = t);
        }
        return (
          s(e, [
            {
              key: "init",
              value: function() {
                (this.s = Snap(this.svgCanvas)),
                  (this.topProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 0,
                    yPos: 6,
                    strokeWidth: 26,
                    color: h.COLORS.orange,
                    shape: h.PATHS.path_132,
                    rotation: 180
                  }),
                  (this.curveProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 78.5,
                    yPos: 32,
                    strokeWidth: 26,
                    color: h.COLORS.purple,
                    shape: h.PATHS.smaller_quarter_circle,
                    rotation: 0
                  }),
                  (this.midSquareRightProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 52.5,
                    yPos: 85.5,
                    width: 26,
                    height: 26,
                    color: h.COLORS.yellow,
                    rotation: 0
                  }),
                  (this.midSquareLeftProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 26.5,
                    yPos: 111.5,
                    width: 26,
                    height: 26,
                    color: h.COLORS.yellow,
                    rotation: 0
                  }),
                  (this.longLegProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 0,
                    yPos: 138,
                    width: 26,
                    height: 80,
                    color: h.COLORS.teal,
                    rotation: 0
                  }),
                  (this.gridPatternProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 1.5,
                    yPos: 87,
                    rows: 10,
                    cols: 4,
                    rotation: 0,
                    animLength: 500,
                    color: h.COLORS.purple
                  }),
                  (this.top = new l.default(this.topProps)),
                  (this.curve = new l.default(this.curveProps)),
                  (this.midSquareRight = new u.default(
                    this.midSquareRightProps
                  )),
                  (this.midSquareLeft = new u.default(this.midSquareLeftProps)),
                  (this.longLeg = new u.default(this.longLegProps)),
                  (this.gridPattern = new p.default(this.gridPatternProps)),
                  this.curve.init(),
                  this.top.init(),
                  this.midSquareRight.init(),
                  this.midSquareLeft.init(),
                  this.longLeg.init(),
                  this.gridPattern.init(),
                  this.createSecondary(),
                  this.randomizeColors(),
                  (this.group = this.s.g(
                    this.midSquareRight.getElement(),
                    this.midSquareLeft.getElement(),
                    this.longLeg.getElement(),
                    this.curve.getElement(),
                    this.top.getElement(),
                    this.gridPattern.getElement()
                  )),
                  this.group.addClass(h.CLASSES.SVG_NUMBER + " seven"),
                  this.group.transform("t" + C.x + "," + C.y);
              }
            },
            {
              key: "createSecondary",
              value: function() {
                (this.secondaryTop = new l.default(this.topProps)),
                  (this.secondaryCurve = new l.default(this.curveProps)),
                  (this.secondaryMidSquareRight = new u.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 52.5,
                    yPos: 85.5,
                    width: 26,
                    height: 26,
                    color: h.COLORS.orange,
                    rotation: 0,
                    animLength: 400
                  })),
                  (this.secondaryMidSquareLeft = new u.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 26.5,
                    yPos: 111.5,
                    width: 26,
                    height: 80,
                    color: h.COLORS.yellow,
                    rotation: 0,
                    animLength: 400
                  })),
                  (this.secondaryBotSquare = new u.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 0,
                    yPos: 192,
                    width: 26,
                    height: 26,
                    color: h.COLORS.teal,
                    rotation: 0,
                    animLength: 400
                  })),
                  (this.secondaryBox = new g.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 1,
                    yPos: 6,
                    rows: 10,
                    cols: 10,
                    color: h.COLORS.teal,
                    blockSize: 13,
                    strokeWidth: 2.5,
                    animLength: 400
                  })),
                  (this.secondaryDiagonals = new v.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 1.5,
                    yPos: 86.5,
                    rows: 13,
                    cols: 10,
                    animLength: 400,
                    color: h.COLORS.yellow
                  })),
                  this.secondaryTop.init(),
                  this.secondaryCurve.init(),
                  this.secondaryMidSquareRight.init(),
                  this.secondaryMidSquareLeft.init(),
                  this.secondaryBotSquare.init(),
                  this.secondaryBox.init(),
                  this.secondaryDiagonals.init(),
                  (this.secondaryGroup = this.s.g(
                    this.secondaryTop.getElement(),
                    this.secondaryCurve.getElement(),
                    this.secondaryMidSquareRight.getElement(),
                    this.secondaryMidSquareLeft.getElement(),
                    this.secondaryBotSquare.getElement(),
                    this.secondaryBox.getElement(),
                    this.secondaryDiagonals.getElement()
                  )),
                  this.secondaryGroup.transform("t" + C.x + "," + C.y);
              }
            },
            {
              key: "animateInSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    var t, a, n, o;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = this.secondaryTop.getProps().color),
                                (a = this.secondaryCurve.getProps().color),
                                (n = this.secondaryBotSquare.getProps().color),
                                (o = this.secondaryMidSquareLeft.getProps()
                                  .color),
                                (e.next = 6),
                                Promise.all([
                                  this.secondaryTop.animateIn(),
                                  this.secondaryCurve.animateIn(),
                                  this.secondaryMidSquareRight.animateIn(),
                                  this.secondaryMidSquareLeft.animateIn(),
                                  this.secondaryBox.animateInBorders(),
                                  this.secondaryBotSquare.animateIn()
                                ])
                              );
                            case 6:
                              return (
                                (e.next = 8),
                                Promise.all([
                                  this.secondaryMidSquareRight.setColor(t),
                                  this.secondaryBox.animateOut(),
                                  this.secondaryMidSquareRight.animateScale(
                                    1,
                                    3.06,
                                    this.secondaryMidSquareLeft.getProps()
                                      .boundingBox.cx,
                                    this.secondaryMidSquareLeft.getProps()
                                      .boundingBox.cy / 1.77
                                  ),
                                  this.secondaryMidSquareLeft.animateScale(
                                    1,
                                    0.33,
                                    this.secondaryMidSquareLeft.getProps()
                                      .boundingBox.cx,
                                    1.26 *
                                      this.secondaryMidSquareLeft.getProps()
                                        .boundingBox.cy
                                  ),
                                  this.secondaryDiagonals.animateIn()
                                ])
                              );
                            case 8:
                              return (
                                this.secondaryMidSquareLeft.setColor(a),
                                this.secondaryBotSquare.setColor(o),
                                (e.next = 12),
                                this.secondaryDiagonals.animateOut()
                              );
                            case 12:
                              return (
                                (e.next = 14),
                                Promise.all([
                                  this.secondaryBox.animateInBorders(),
                                  this.secondaryBotSquare.setColor(a),
                                  this.secondaryMidSquareLeft.setColor(t),
                                  this.secondaryMidSquareRight.setColor(n),
                                  this.secondaryMidSquareRight.animateScale(
                                    1,
                                    1,
                                    this.secondaryMidSquareLeft.getProps()
                                      .boundingBox.cx,
                                    1.26 *
                                      this.secondaryMidSquareLeft.getProps()
                                        .boundingBox.cy
                                  ),
                                  this.secondaryMidSquareLeft.animateScale(
                                    1,
                                    1,
                                    this.secondaryMidSquareLeft.getProps()
                                      .boundingBox.cx,
                                    1.26 *
                                      this.secondaryMidSquareLeft.getProps()
                                        .boundingBox.cy
                                  )
                                ])
                              );
                            case 14:
                              return (
                                this.secondaryBotSquare.setColor(t),
                                this.secondaryMidSquareLeft.setColor(n),
                                this.secondaryMidSquareRight.setColor(o),
                                (e.next = 19),
                                this.secondaryDiagonals.animateIn()
                              );
                            case 19:
                              return (
                                (e.next = 21),
                                Promise.all([
                                  this.secondaryMidSquareRight.animateScale(
                                    1,
                                    3.06,
                                    this.secondaryMidSquareLeft.getProps()
                                      .boundingBox.cx,
                                    this.secondaryMidSquareLeft.getProps()
                                      .boundingBox.cy / 1.77
                                  ),
                                  this.secondaryMidSquareLeft.animateScale(
                                    1,
                                    0.33,
                                    this.secondaryMidSquareLeft.getProps()
                                      .boundingBox.cx,
                                    1.26 *
                                      this.secondaryMidSquareLeft.getProps()
                                        .boundingBox.cy
                                  ),
                                  this.secondaryBox.animateOut(),
                                  this.secondaryDiagonals.animateOut()
                                ])
                              );
                            case 21:
                              return (
                                (e.next = 23),
                                Promise.all([
                                  this.secondaryBox.animateInBorders(),
                                  this.secondaryBotSquare.setColor(n),
                                  this.secondaryMidSquareLeft.setColor(o),
                                  this.secondaryMidSquareRight.setColor(a),
                                  this.secondaryMidSquareRight.animateScale(
                                    1,
                                    1,
                                    this.secondaryMidSquareLeft.getProps()
                                      .boundingBox.cx,
                                    this.secondaryMidSquareLeft.getProps()
                                      .boundingBox.cy / 1.77
                                  ),
                                  this.secondaryMidSquareLeft.animateScale(
                                    1,
                                    1,
                                    this.secondaryMidSquareLeft.getProps()
                                      .boundingBox.cx,
                                    1.26 *
                                      this.secondaryMidSquareLeft.getProps()
                                        .boundingBox.cy
                                  )
                                ])
                              );
                            case 23:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "stopAllAnimations",
              value: function() {
                var e = this.gridPattern.getElement().children(),
                  t = this.secondaryBox.getElement().children(),
                  a = this.secondaryDiagonals.getElement().children();
                this.app.stopAllAnimationsLoop(e),
                  this.app.stopAllAnimationsLoop(t),
                  this.app.stopAllAnimationsLoop(a),
                  this.curve
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.top
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.midSquareRight.getElement().stop(),
                  this.midSquareLeft.getElement().stop(),
                  this.longLeg.getElement().stop(),
                  this.secondaryTop
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryCurve
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryMidSquareRight.getElement().stop(),
                  this.secondaryMidSquareLeft.getElement().stop(),
                  this.secondaryBotSquare.getElement().stop();
              }
            },
            {
              key: "animateOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryTop.animateOut(),
                                  this.secondaryCurve.animateOut(),
                                  this.secondaryMidSquareRight.animateOut(),
                                  this.secondaryMidSquareLeft.animateOut(),
                                  this.secondaryBotSquare.animateOut(),
                                  this.secondaryBox.animateOut(),
                                  this.secondaryDiagonals.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "randomizeColors",
              value: function() {
                var e = (0, h.SHUFFLE_PROPS)(h.COLORS);
                this.top.setColor(h.COLORS[e[2]]),
                  this.curve.setColor(h.COLORS[e[0]]),
                  this.midSquareRight.setColor(h.COLORS[e[1]]),
                  this.midSquareLeft.setColor(h.COLORS[e[1]]),
                  this.longLeg.setColor(h.COLORS[e[2]]),
                  this.gridPattern.setColor(h.COLORS[e[3]]),
                  this.secondaryTop.setColor(h.COLORS[e[2]]),
                  this.secondaryCurve.setColor(h.COLORS[e[0]]),
                  this.secondaryMidSquareRight.setColor(h.COLORS[e[0]]),
                  this.secondaryMidSquareLeft.setColor(h.COLORS[e[1]]),
                  this.secondaryBotSquare.setColor(h.COLORS[e[3]]),
                  this.secondaryBox.setColor(h.COLORS[e[3]]),
                  this.secondaryDiagonals.setColor(h.COLORS[e[1]]);
              }
            },
            {
              key: "animateIn",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.top.animateIn(),
                                  this.curve.animateIn(),
                                  this.midSquareRight.animateIn(),
                                  this.midSquareLeft.animateIn(),
                                  this.longLeg.animateIn(),
                                  this.gridPattern.animateIn()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.top.animateOut(),
                                  this.curve.animateOut(),
                                  this.midSquareRight.animateOut(),
                                  this.midSquareLeft.animateOut(),
                                  this.longLeg.animateOut(),
                                  this.gridPattern.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.top.fadeOut(),
                                  this.curve.fadeOut(),
                                  this.midSquareRight.fadeOut(),
                                  this.midSquareLeft.fadeOut(),
                                  this.longLeg.fadeOut(),
                                  this.gridPattern.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryTop.fadeOut(),
                                  this.secondaryCurve.fadeOut(),
                                  this.secondaryMidSquareRight.fadeOut(),
                                  this.secondaryMidSquareLeft.fadeOut(),
                                  this.secondaryBotSquare.fadeOut(),
                                  this.secondaryBox.animateOut(),
                                  this.secondaryDiagonals.fadeOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "reset",
              value: function() {
                this.top.reset(),
                  this.curve.reset(),
                  this.midSquareRight.reset(),
                  this.midSquareLeft.reset(),
                  this.longLeg.reset();
              }
            },
            {
              key: "resetSecondary",
              value: function() {
                this.secondaryTop.reset(),
                  this.secondaryCurve.reset(),
                  this.secondaryMidSquareRight.reset(),
                  this.secondaryMidSquareLeft.reset(),
                  this.secondaryBotSquare.reset(),
                  this.secondaryBox.reset();
              }
            }
          ]),
          e
        );
      })();
    t.default = O;
  },
  function(e, t, a) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      i = a(12),
      l = n(i),
      d = a(6),
      u = n(d),
      c = a(2),
      p = n(c),
      y = a(0),
      g = { x: 6, y: 20 },
      m = (function() {
        function e(t, a) {
          r(this, e), (this.svgCanvas = a), (this.app = t);
        }
        return (
          s(e, [
            {
              key: "init",
              value: function() {
                (this.s = Snap(this.svgCanvas)),
                  (this.circleOuterRingProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 68.5,
                    yPos: 154,
                    radius: 62,
                    color: y.COLORS.purple,
                    strokeWidth: 6.5
                  }),
                  (this.circleMiddleRingProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 68.5,
                    yPos: 154,
                    radius: 34,
                    color: y.COLORS.teal,
                    strokeWidth: 6.5
                  }),
                  (this.circleInnerRingProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 68.5,
                    yPos: 154,
                    radius: 9,
                    color: y.COLORS.yellow,
                    strokeWidth: 6.5
                  }),
                  (this.tubeProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 29,
                    yPos: 8,
                    tubeColor: y.COLORS.teal,
                    tubeEndColor: y.COLORS.orange,
                    shape: y.PATHS.tube_132,
                    rotation: 27,
                    strokeWidth: 26,
                    lineCap: "round"
                  }),
                  (this.circleOuterRing = new l.default(
                    this.circleOuterRingProps
                  )),
                  (this.circleMiddleRing = new l.default(
                    this.circleMiddleRingProps
                  )),
                  (this.circleInnerRing = new l.default(
                    this.circleInnerRingProps
                  )),
                  (this.tube = new u.default(this.tubeProps)),
                  this.circleOuterRing.init(),
                  this.circleMiddleRing.init(),
                  this.circleInnerRing.init(),
                  this.tube.init(),
                  this.createSecondary(),
                  this.randomizeColors(),
                  (this.group = this.s.g(
                    this.circleOuterRing.getElement(),
                    this.circleMiddleRing.getElement(),
                    this.circleInnerRing.getElement(),
                    this.tube.getElement()
                  )),
                  this.group.addClass(y.CLASSES.SVG_NUMBER + " six"),
                  this.group.transform("t" + g.x + "," + g.y);
              }
            },
            {
              key: "createSecondary",
              value: function() {
                (this.secondaryTubeOne = new u.default({
                  svgCanvas: this.svgCanvas,
                  xPos: 29,
                  yPos: 8,
                  tubeColor: y.COLORS.orange,
                  tubeEndColor: y.COLORS.purple,
                  shape: y.PATHS.tube_132,
                  rotation: 27,
                  strokeWidth: 26,
                  lineCap: "round",
                  animLength: 300
                })),
                  (this.secondaryTubeTwo = new u.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 22.5,
                    yPos: 8,
                    tubeColor: y.COLORS.orange,
                    tubeEndColor: y.COLORS.teal,
                    shape: y.PATHS.tube_132,
                    rotation: 27,
                    strokeWidth: 26,
                    lineCap: "round",
                    reverse: !0,
                    animLength: 300
                  })),
                  (this.secondaryBotCurve = new p.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 4,
                    yPos: 87.5,
                    strokeWidth: 26,
                    color: y.COLORS.yellow,
                    shape: y.PATHS.circle,
                    rotation: 180,
                    animLength: 300
                  })),
                  (this.secondaryBotTubeOne = new u.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 30,
                    yPos: 101,
                    tubeColor: y.COLORS.teal,
                    tubeEndColor: y.COLORS.purple,
                    shape: y.PATHS.half_circle,
                    strokeWidth: 26,
                    rotation: 90,
                    lineCap: "round",
                    animLength: 300
                  })),
                  (this.secondaryBotTubeTwo = new u.default({
                    svgCanvas: this.svgCanvas,
                    xPos: -2,
                    yPos: 94,
                    tubeColor: y.COLORS.teal,
                    tubeEndColor: y.COLORS.yellow,
                    shape: y.PATHS.circle,
                    strokeWidth: 26,
                    rotation: 90,
                    lineCap: "round",
                    animLength: 400
                  })),
                  (this.secondaryInnerRing = new l.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 68.5,
                    yPos: 154,
                    radius: 9,
                    color: y.COLORS.purple,
                    strokeWidth: 6.5,
                    animLength: 300
                  })),
                  this.secondaryBotTubeOne.init(),
                  this.secondaryTubeOne.init(),
                  this.secondaryTubeTwo.init(),
                  this.secondaryBotCurve.init(),
                  this.secondaryInnerRing.init(),
                  this.secondaryBotTubeTwo.init(),
                  (this.secondaryGroup = this.s.g(
                    this.secondaryBotCurve.getElement(),
                    this.secondaryBotTubeTwo.getElement(),
                    this.secondaryBotTubeOne.getElement(),
                    this.secondaryTubeOne.getElement(),
                    this.secondaryTubeTwo.getElement(),
                    this.secondaryInnerRing.getElement()
                  )),
                  this.secondaryGroup.addClass("svg-number"),
                  this.secondaryGroup.transform("t" + g.x + "," + g.y);
              }
            },
            {
              key: "animateInSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = this.secondaryBotCurve.getProps().color),
                                this.secondaryInnerRing.animateIn(),
                                (e.next = 4),
                                this.secondaryBotCurve.animateIn()
                              );
                            case 4:
                              return (
                                (e.next = 6), this.secondaryTubeOne.animateIn()
                              );
                            case 6:
                              return (
                                (e.next = 8),
                                Promise.all([
                                  this.secondaryBotTubeOne.animateIn(),
                                  this.secondaryTubeOne.animateOut(),
                                  this.secondaryTubeTwo.animateIn()
                                ])
                              );
                            case 8:
                              return (
                                (e.next = 10),
                                Promise.all([
                                  this.secondaryInnerRing.setColor(t),
                                  this.secondaryBotTubeTwo.animateIn(),
                                  this.secondaryBotTubeOne.animateOut()
                                ])
                              );
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "stopAllAnimations",
              value: function() {
                var e = this.tube
                    .getElement()
                    .children()[0]
                    .children(),
                  t = this.secondaryBotTubeOne
                    .getElement()
                    .children()[0]
                    .children(),
                  a = this.secondaryBotTubeTwo
                    .getElement()
                    .children()[0]
                    .children(),
                  n = this.secondaryTubeOne
                    .getElement()
                    .children()[0]
                    .children(),
                  o = this.secondaryTubeTwo
                    .getElement()
                    .children()[0]
                    .children();
                this.app.stopAllAnimationsLoop(t),
                  this.app.stopAllAnimationsLoop(a),
                  this.app.stopAllAnimationsLoop(n),
                  this.app.stopAllAnimationsLoop(o),
                  this.app.stopAllAnimationsLoop(e),
                  this.circleOuterRing.getElement().stop(),
                  this.circleMiddleRing.getElement().stop(),
                  this.circleInnerRing.getElement().stop(),
                  this.secondaryBotCurve
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryInnerRing.getElement().stop();
              }
            },
            {
              key: "animateOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryTubeOne.animateOut(),
                                  this.secondaryTubeTwo.animateOut(),
                                  this.secondaryBotCurve.animateOut(),
                                  this.secondaryBotTubeOne.animateOut(),
                                  this.secondaryBotTubeTwo.animateOut(),
                                  this.secondaryInnerRing.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "randomizeColors",
              value: function() {
                var e = (0, y.SHUFFLE_PROPS)(y.COLORS);
                this.circleOuterRing.setColor(y.COLORS[e[0]]),
                  this.circleMiddleRing.setColor(y.COLORS[e[1]]),
                  this.circleInnerRing.setColor(y.COLORS[e[2]]),
                  this.tube.setColor(y.COLORS[e[1]], y.COLORS[e[3]]),
                  this.secondaryTubeOne.setColor(
                    y.COLORS[e[3]],
                    y.COLORS[e[0]]
                  ),
                  this.secondaryTubeTwo.setColor(
                    y.COLORS[e[3]],
                    y.COLORS[e[1]]
                  ),
                  this.secondaryBotCurve.setColor(y.COLORS[e[2]]),
                  this.secondaryBotTubeOne.setColor(
                    y.COLORS[e[1]],
                    y.COLORS[e[0]]
                  ),
                  this.secondaryBotTubeTwo.setColor(
                    y.COLORS[e[1]],
                    y.COLORS[e[2]]
                  ),
                  this.secondaryInnerRing.setColor(y.COLORS[e[0]]);
              }
            },
            {
              key: "animateIn",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.circleOuterRing.animateIn(),
                                  this.circleMiddleRing.animateIn(),
                                  this.circleInnerRing.animateIn(),
                                  this.tube.animateIn()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.circleOuterRing.animateOut(),
                                  this.circleMiddleRing.animateOut(),
                                  this.circleInnerRing.animateOut(),
                                  this.tube.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.circleOuterRing.fadeOut(),
                                  this.circleMiddleRing.fadeOut(),
                                  this.circleInnerRing.fadeOut(),
                                  this.tube.fadeOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryTubeOne.fadeOut(),
                                  this.secondaryTubeTwo.fadeOut(),
                                  this.secondaryBotCurve.fadeOut(),
                                  this.secondaryBotTubeOne.fadeOut(),
                                  this.secondaryBotTubeTwo.fadeOut(),
                                  this.secondaryInnerRing.fadeOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "reset",
              value: function() {
                this.circleOuterRing.reset(),
                  this.circleMiddleRing.reset(),
                  this.circleInnerRing.reset(),
                  this.tube.reset();
              }
            },
            {
              key: "resetSecondary",
              value: function() {
                this.secondaryTubeOne.reset(),
                  this.secondaryTubeTwo.reset(),
                  this.secondaryBotCurve.reset(),
                  this.secondaryBotTubeOne.reset(),
                  this.secondaryBotTubeTwo.reset(),
                  this.secondaryInnerRing.reset();
              }
            }
          ]),
          e
        );
      })();
    t.default = m;
  },
  function(e, t, a) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      i = a(12),
      l = n(i),
      d = a(6),
      u = n(d),
      c = a(2),
      p = n(c),
      y = a(0),
      g = { x: 5, y: 15 },
      m = (function() {
        function e(t, a) {
          r(this, e), (this.svgCanvas = a), (this.app = t);
        }
        return (
          s(e, [
            {
              key: "init",
              value: function() {
                (this.s = Snap(this.svgCanvas)),
                  (this.curveLeftTubeProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 17,
                    yPos: 105,
                    tubeColor: y.COLORS.orange,
                    tubeEndColor: y.COLORS.orange,
                    shape: y.PATHS.quarter_circle,
                    strokeWidth: 26,
                    rotation: 270,
                    lineCap: "round"
                  }),
                  (this.curveLeftBotTubeProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 30.5,
                    yPos: 158,
                    tubeColor: y.COLORS.yellow,
                    tubeEndColor: y.COLORS.yellow,
                    shape: y.PATHS.quarter_circle,
                    strokeWidth: 26,
                    rotation: 180,
                    lineCap: "round"
                  }),
                  (this.curveRightTubeProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 30,
                    yPos: 105.5,
                    tubeColor: y.COLORS.teal,
                    tubeEndColor: y.COLORS.purple,
                    shape: y.PATHS.half_circle,
                    strokeWidth: 26,
                    rotation: 90,
                    lineCap: "round"
                  }),
                  (this.tubeProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 21,
                    yPos: 26,
                    tubeColor: y.COLORS.purple,
                    tubeEndColor: y.COLORS.teal,
                    shape: y.PATHS.tube_132,
                    rotation: 207,
                    strokeWidth: 26,
                    lineCap: "round"
                  }),
                  (this.curveLeftBotTube = new u.default(
                    this.curveLeftBotTubeProps
                  )),
                  (this.curveLeftTube = new u.default(this.curveLeftTubeProps)),
                  (this.curveRightTube = new u.default(
                    this.curveRightTubeProps
                  )),
                  (this.tube = new u.default(this.tubeProps)),
                  this.curveLeftBotTube.init(),
                  this.curveLeftTube.init(),
                  this.curveRightTube.init(),
                  this.tube.init(),
                  this.createSecondary(),
                  this.randomizeColors(),
                  (this.group = this.s.g(
                    this.curveLeftBotTube.getElement(),
                    this.curveLeftTube.getElement(),
                    this.curveRightTube.getElement(),
                    this.tube.getElement()
                  )),
                  this.group.addClass(
                    y.CLASSES.SVG_NUMBER + " six " + y.CLASSES.ALT
                  ),
                  this.group.transform("t" + g.x + "," + g.y);
              }
            },
            {
              key: "createSecondary",
              value: function() {
                (this.secondaryTubeOne = new u.default({
                  svgCanvas: this.svgCanvas,
                  xPos: 29,
                  yPos: 12,
                  tubeColor: y.COLORS.orange,
                  tubeEndColor: y.COLORS.purple,
                  shape: y.PATHS.tube_132,
                  rotation: 27,
                  strokeWidth: 26,
                  lineCap: "round",
                  animLength: 300
                })),
                  (this.secondaryTubeTwo = new u.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 22.5,
                    yPos: 12,
                    tubeColor: y.COLORS.orange,
                    tubeEndColor: y.COLORS.teal,
                    shape: y.PATHS.tube_132,
                    rotation: 27,
                    strokeWidth: 26,
                    lineCap: "round",
                    reverse: !0,
                    animLength: 300
                  })),
                  (this.secondaryBotCurve = new p.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 3.5,
                    yPos: 91.5,
                    strokeWidth: 26,
                    color: y.COLORS.yellow,
                    shape: y.PATHS.circle,
                    rotation: 180,
                    animLength: 300
                  })),
                  (this.secondaryBotTubeOne = new u.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 29.5,
                    yPos: 105,
                    tubeColor: y.COLORS.teal,
                    tubeEndColor: y.COLORS.purple,
                    shape: y.PATHS.half_circle,
                    strokeWidth: 26,
                    rotation: 90,
                    lineCap: "round",
                    animLength: 300
                  })),
                  (this.secondaryBotTubeTwo = new u.default({
                    svgCanvas: this.svgCanvas,
                    xPos: -3,
                    yPos: 98,
                    tubeColor: y.COLORS.teal,
                    tubeEndColor: y.COLORS.yellow,
                    shape: y.PATHS.circle,
                    strokeWidth: 26,
                    rotation: 90,
                    lineCap: "round",
                    animLength: 400
                  })),
                  (this.secondaryInnerRing = new l.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 69.5,
                    yPos: 157,
                    radius: 9,
                    color: y.COLORS.purple,
                    strokeWidth: 6.5,
                    animLength: 300
                  })),
                  this.secondaryBotTubeOne.init(),
                  this.secondaryTubeOne.init(),
                  this.secondaryTubeTwo.init(),
                  this.secondaryBotCurve.init(),
                  this.secondaryInnerRing.init(),
                  this.secondaryBotTubeTwo.init(),
                  (this.secondaryGroup = this.s.g(
                    this.secondaryBotCurve.getElement(),
                    this.secondaryBotTubeTwo.getElement(),
                    this.secondaryBotTubeOne.getElement(),
                    this.secondaryTubeOne.getElement(),
                    this.secondaryTubeTwo.getElement(),
                    this.secondaryInnerRing.getElement()
                  )),
                  this.secondaryGroup.addClass("svg-number"),
                  this.secondaryGroup.transform("t" + g.x + "," + g.y);
              }
            },
            {
              key: "animateInSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    var t;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = this.secondaryBotCurve.getProps().color),
                                this.secondaryInnerRing.animateIn(),
                                (e.next = 4),
                                this.secondaryBotCurve.animateIn()
                              );
                            case 4:
                              return (
                                (e.next = 6), this.secondaryTubeOne.animateIn()
                              );
                            case 6:
                              return (
                                (e.next = 8),
                                Promise.all([
                                  this.secondaryBotTubeOne.animateIn(),
                                  this.secondaryTubeOne.animateOut(),
                                  this.secondaryTubeTwo.animateIn()
                                ])
                              );
                            case 8:
                              return (
                                (e.next = 10),
                                Promise.all([
                                  this.secondaryInnerRing.setColor(t),
                                  this.secondaryBotTubeTwo.animateIn(),
                                  this.secondaryBotTubeOne.animateOut()
                                ])
                              );
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "stopAllAnimations",
              value: function() {
                var e = this.secondaryBotTubeOne
                    .getElement()
                    .children()[0]
                    .children(),
                  t = this.secondaryBotTubeTwo
                    .getElement()
                    .children()[0]
                    .children(),
                  a = this.secondaryTubeOne
                    .getElement()
                    .children()[0]
                    .children(),
                  n = this.secondaryTubeTwo
                    .getElement()
                    .children()[0]
                    .children(),
                  o = this.curveLeftBotTube
                    .getElement()
                    .children()[0]
                    .children(),
                  r = this.curveLeftTube
                    .getElement()
                    .children()[0]
                    .children(),
                  s = this.curveRightTube
                    .getElement()
                    .children()[0]
                    .children(),
                  i = this.tube
                    .getElement()
                    .children()[0]
                    .children();
                this.app.stopAllAnimationsLoop(e),
                  this.app.stopAllAnimationsLoop(t),
                  this.app.stopAllAnimationsLoop(a),
                  this.app.stopAllAnimationsLoop(n),
                  this.app.stopAllAnimationsLoop(o),
                  this.app.stopAllAnimationsLoop(r),
                  this.app.stopAllAnimationsLoop(s),
                  this.app.stopAllAnimationsLoop(i),
                  this.secondaryBotCurve
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryInnerRing.getElement().stop();
              }
            },
            {
              key: "animateOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryTubeOne.animateOut(),
                                  this.secondaryTubeTwo.animateOut(),
                                  this.secondaryBotCurve.animateOut(),
                                  this.secondaryBotTubeOne.animateOut(),
                                  this.secondaryBotTubeTwo.animateOut(),
                                  this.secondaryInnerRing.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "randomizeColors",
              value: function() {
                var e = (0, y.SHUFFLE_PROPS)(y.COLORS);
                this.curveLeftTube.setColor(y.COLORS[e[0]], y.COLORS[e[0]]),
                  this.curveLeftBotTube.setColor(
                    y.COLORS[e[1]],
                    y.COLORS[e[1]]
                  ),
                  this.curveRightTube.setColor(y.COLORS[e[2]], y.COLORS[e[3]]),
                  this.tube.setColor(y.COLORS[e[2]], y.COLORS[e[1]]),
                  this.secondaryTubeOne.setColor(
                    y.COLORS[e[2]],
                    y.COLORS[e[0]]
                  ),
                  this.secondaryTubeTwo.setColor(
                    y.COLORS[e[2]],
                    y.COLORS[e[1]]
                  ),
                  this.secondaryBotCurve.setColor(y.COLORS[e[3]]),
                  this.secondaryBotTubeOne.setColor(
                    y.COLORS[e[1]],
                    y.COLORS[e[0]]
                  ),
                  this.secondaryBotTubeTwo.setColor(
                    y.COLORS[e[1]],
                    y.COLORS[e[3]]
                  ),
                  this.secondaryInnerRing.setColor(y.COLORS[e[0]]);
              }
            },
            {
              key: "animateIn",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.curveLeftTube.animateIn(),
                                  this.curveLeftBotTube.animateIn(),
                                  this.curveRightTube.animateIn(),
                                  this.tube.animateIn()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.curveLeftTube.animateOut(),
                                  this.curveLeftBotTube.animateOut(),
                                  this.curveRightTube.animateOut(),
                                  this.tube.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.curveLeftTube.fadeOut(),
                                  this.curveLeftBotTube.fadeOut(),
                                  this.curveRightTube.fadeOut(),
                                  this.tube.fadeOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryTubeOne.fadeOut(),
                                  this.secondaryTubeTwo.fadeOut(),
                                  this.secondaryBotCurve.fadeOut(),
                                  this.secondaryBotTubeOne.fadeOut(),
                                  this.secondaryBotTubeTwo.fadeOut(),
                                  this.secondaryInnerRing.fadeOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "reset",
              value: function() {
                this.curveLeftTube.reset(),
                  this.curveLeftBotTube.reset(),
                  this.curveRightTube.reset(),
                  this.tube.reset();
              }
            },
            {
              key: "resetSecondary",
              value: function() {
                this.secondaryTubeOne.reset(),
                  this.secondaryTubeTwo.reset(),
                  this.secondaryBotCurve.reset(),
                  this.secondaryBotTubeOne.reset(),
                  this.secondaryBotTubeTwo.reset(),
                  this.secondaryInnerRing.reset();
              }
            }
          ]),
          e
        );
      })();
    t.default = m;
  },
  function(e, t, a) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      i = a(9),
      l = n(i),
      d = a(6),
      u = n(d),
      c = a(2),
      p = n(c),
      y = a(28),
      g = n(y),
      m = a(0),
      v = { x: 9, y: 23 },
      h = (function() {
        function e(t, a) {
          r(this, e), (this.svgCanvas = a), (this.app = t);
        }
        return (
          s(e, [
            {
              key: "init",
              value: function() {
                (this.s = Snap(this.svgCanvas)),
                  (this.tubeProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 66.5,
                    yPos: 85,
                    tubeColor: m.COLORS.purple,
                    tubeEndColor: m.COLORS.teal,
                    shape: m.PATHS.quarter_circle,
                    rotation: 0,
                    strokeWidth: 26,
                    lineCap: "butt"
                  }),
                  (this.topCurveProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 0,
                    yPos: 4,
                    strokeWidth: 26,
                    color: m.COLORS.teal,
                    shape: m.PATHS.three_fourth_circle
                  }),
                  (this.midSquareRightProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 92,
                    yPos: 164,
                    width: 26,
                    height: 26,
                    color: m.COLORS.yellow,
                    rotation: 0
                  }),
                  (this.midSquareLeftProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 66,
                    yPos: 190,
                    width: 26,
                    height: 26,
                    color: m.COLORS.yellow,
                    rotation: 0
                  }),
                  (this.botCurveProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 13,
                    yPos: 136.5,
                    strokeWidth: 26,
                    color: m.COLORS.purple,
                    shape: m.PATHS.quarter_circle,
                    rotation: 180
                  }),
                  (this.dotPatternProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 5,
                    yPos: 64,
                    rows: 4,
                    cols: 4,
                    spaceBetween: 35,
                    radius: 3,
                    animLength: 50,
                    color: m.COLORS.orange
                  }),
                  (this.tube = new u.default(this.tubeProps)),
                  (this.topCurve = new p.default(this.topCurveProps)),
                  (this.midSquareRight = new l.default(
                    this.midSquareRightProps
                  )),
                  (this.midSquareLeft = new l.default(this.midSquareLeftProps)),
                  (this.botCurve = new p.default(this.botCurveProps)),
                  (this.dotPattern = new g.default(this.dotPatternProps)),
                  this.tube.init(),
                  this.topCurve.init(),
                  this.midSquareRight.init(),
                  this.midSquareLeft.init(),
                  this.botCurve.init(),
                  this.dotPattern.init(),
                  this.createSecondary(),
                  this.randomizeColors(),
                  (this.group = this.s.g(
                    this.midSquareRight.getElement(),
                    this.midSquareLeft.getElement(),
                    this.tube.getElement(),
                    this.topCurve.getElement(),
                    this.botCurve.getElement(),
                    this.dotPattern.getElement()
                  )),
                  this.group.addClass(m.CLASSES.SVG_NUMBER + " three"),
                  this.group.transform("t" + v.x + "," + v.y);
              }
            },
            {
              key: "createSecondary",
              value: function() {
                (this.secondaryTopCurve = new p.default(this.topCurveProps)),
                  (this.secondaryDotPattern = new g.default(
                    this.dotPatternProps
                  )),
                  (this.secondaryMidSquareRight = new l.default(
                    this.midSquareRightProps
                  )),
                  (this.secondaryMidSquareLeft = new l.default(
                    this.midSquareLeftProps
                  )),
                  (this.secondaryBotCurve = new p.default(this.botCurveProps)),
                  (this.secondaryTube = new u.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 0,
                    yPos: 4,
                    tubeColor: m.COLORS.purple,
                    tubeEndColor: m.COLORS.teal,
                    shape: m.PATHS.three_hover_curve,
                    rotation: 0,
                    strokeWidth: 26,
                    lineCap: "butt",
                    animLength: 1e3
                  })),
                  this.secondaryTopCurve.init(),
                  this.secondaryDotPattern.init(),
                  this.secondaryMidSquareRight.init(),
                  this.secondaryMidSquareLeft.init(),
                  this.secondaryBotCurve.init(),
                  this.secondaryTube.init(),
                  (this.secondaryTube.pathLength = this.secondaryTube.getProps().pathLength),
                  this.secondaryTube.setDasharray(
                    this.secondaryTube.pathLength / 3 +
                      " " +
                      this.secondaryTube.pathLength
                  ),
                  this.secondaryTube.setDashoffsetEnd(
                    1.67 * this.secondaryTube.pathLength
                  ),
                  (this.secondaryGroup = this.s.g(
                    this.secondaryTopCurve.getElement(),
                    this.secondaryMidSquareRight.getElement(),
                    this.secondaryMidSquareLeft.getElement(),
                    this.secondaryBotCurve.getElement(),
                    this.secondaryTube.getElement(),
                    this.secondaryDotPattern.getElement()
                  )),
                  this.secondaryGroup.addClass("svg-number"),
                  this.secondaryGroup.transform("t" + v.x + "," + v.y);
              }
            },
            {
              key: "animateInSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryTopCurve.animateIn(),
                                  this.secondaryDotPattern.animateIn(),
                                  this.secondaryMidSquareRight.animateIn(),
                                  this.secondaryMidSquareLeft.animateIn(),
                                  this.secondaryTube.animateIn()
                                ])
                              );
                            case 2:
                              return (
                                (e.next = 4), this.secondaryBotCurve.animateIn()
                              );
                            case 4:
                              return (
                                (e.next = 6), this.secondaryTube.animateOut(500)
                              );
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "stopAllAnimations",
              value: function() {
                var e = this.tube
                    .getElement()
                    .children()[0]
                    .children(),
                  t = this.secondaryTube
                    .getElement()
                    .children()[0]
                    .children(),
                  a = this.dotPattern.getElement().children(),
                  n = this.secondaryDotPattern.getElement().children();
                this.app.stopAllAnimationsLoop(e),
                  this.app.stopAllAnimationsLoop(t),
                  this.app.stopAllAnimationsLoop(a),
                  this.app.stopAllAnimationsLoop(n),
                  this.topCurve
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.midSquareRight.getElement().stop(),
                  this.midSquareLeft.getElement().stop(),
                  this.botCurve
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryTopCurve
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryMidSquareRight.getElement().stop(),
                  this.secondaryMidSquareLeft.getElement().stop(),
                  this.secondaryBotCurve
                    .getElement()
                    .children()[0]
                    .stop();
              }
            },
            {
              key: "animateOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryTopCurve.animateOut(),
                                  this.secondaryDotPattern.animateOut(),
                                  this.secondaryMidSquareRight.animateOut(),
                                  this.secondaryMidSquareLeft.animateOut(),
                                  this.secondaryBotCurve.animateOut(),
                                  this.secondaryTube.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "randomizeColors",
              value: function() {
                var e = (0, m.SHUFFLE_PROPS)(m.COLORS),
                  t = (0, m.SHUFFLE_PROPS)(m.COLORS);
                this.topCurve.setColor(m.COLORS[e[0]]),
                  this.tube.setColor(m.COLORS[e[1]], m.COLORS[e[2]]),
                  this.midSquareRight.setColor(m.COLORS[t[0]]),
                  this.midSquareLeft.setColor(m.COLORS[t[1]]),
                  this.botCurve.setColor(m.COLORS[t[2]]),
                  this.dotPattern.setColor(m.COLORS[e[3]]),
                  this.secondaryTopCurve.setColor(m.COLORS[e[0]]),
                  this.secondaryDotPattern.setColor(m.COLORS[e[3]]),
                  this.secondaryMidSquareRight.setColor(m.COLORS[t[0]]),
                  this.secondaryMidSquareLeft.setColor(m.COLORS[t[1]]),
                  this.secondaryBotCurve.setColor(m.COLORS[t[2]]),
                  this.secondaryTube.setColor(m.COLORS[e[1]], m.COLORS[e[2]]);
              }
            },
            {
              key: "animateIn",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.topCurve.animateIn(),
                                  this.tube.animateIn(),
                                  this.midSquareRight.animateIn(),
                                  this.midSquareLeft.animateIn(),
                                  this.botCurve.animateIn(),
                                  this.dotPattern.animateIn()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.topCurve.fadeOut(),
                                  this.tube.fadeOut(),
                                  this.midSquareRight.fadeOut(),
                                  this.midSquareLeft.fadeOut(),
                                  this.botCurve.fadeOut(),
                                  this.dotPattern.fadeOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryTopCurve.fadeOut(),
                                  this.secondaryDotPattern.fadeOut(),
                                  this.secondaryMidSquareRight.fadeOut(),
                                  this.secondaryMidSquareLeft.fadeOut(),
                                  this.secondaryBotCurve.fadeOut(),
                                  this.secondaryTube.fadeOut(250)
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.topCurve.animateOut(),
                                  this.tube.animateOut(),
                                  this.midSquareRight.animateOut(),
                                  this.midSquareLeft.animateOut(),
                                  this.botCurve.animateOut(),
                                  this.dotPattern.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "reset",
              value: function() {
                this.topCurve.reset(),
                  this.tube.reset(),
                  this.midSquareRight.reset(),
                  this.midSquareLeft.reset(),
                  this.botCurve.reset(),
                  this.dotPattern.reset();
              }
            },
            {
              key: "resetSecondary",
              value: function() {
                this.secondaryTopCurve.reset(),
                  this.secondaryDotPattern.reset(),
                  this.secondaryMidSquareRight.reset(),
                  this.secondaryMidSquareLeft.reset(),
                  this.secondaryBotCurve.reset(),
                  this.secondaryTube.reset();
              }
            }
          ]),
          e
        );
      })();
    t.default = h;
  },
  function(e, t, a) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      i = a(9),
      l = n(i),
      d = a(6),
      u = n(d),
      c = a(2),
      p = n(c),
      y = a(28),
      g = n(y),
      m = a(0),
      v = { x: 9, y: 23 },
      h = (function() {
        function e(t, a) {
          r(this, e), (this.svgCanvas = a), (this.app = t);
        }
        return (
          s(e, [
            {
              key: "init",
              value: function() {
                (this.s = Snap(this.svgCanvas)),
                  (this.tubeProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 66.5,
                    yPos: 85,
                    tubeColor: m.COLORS.teal,
                    tubeEndColor: m.COLORS.orange,
                    shape: m.PATHS.quarter_circle,
                    rotation: 0,
                    strokeWidth: 26,
                    lineCap: "butt"
                  }),
                  (this.topCurveProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 0,
                    yPos: 4,
                    strokeWidth: 26,
                    color: m.COLORS.purple,
                    shape: m.PATHS.three_fourth_circle
                  }),
                  (this.midSquareRightProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 92,
                    yPos: 164,
                    width: 26,
                    height: 26,
                    color: m.COLORS.purple,
                    rotation: 0
                  }),
                  (this.midSquareLeftProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 66,
                    yPos: 190,
                    width: 26,
                    height: 26,
                    color: m.COLORS.purple,
                    rotation: 0
                  }),
                  (this.botCurveProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 13,
                    yPos: 136.5,
                    strokeWidth: 26,
                    color: m.COLORS.teal,
                    shape: m.PATHS.quarter_circle,
                    rotation: 180
                  }),
                  (this.dotPatternProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 5,
                    yPos: 64,
                    rows: 4,
                    cols: 4,
                    spaceBetween: 35,
                    radius: 3,
                    animLength: 50,
                    color: m.COLORS.teal
                  }),
                  (this.tube = new u.default(this.tubeProps)),
                  (this.topCurve = new p.default(this.topCurveProps)),
                  (this.midSquareRight = new l.default(
                    this.midSquareRightProps
                  )),
                  (this.midSquareLeft = new l.default(this.midSquareLeftProps)),
                  (this.botCurve = new p.default(this.botCurveProps)),
                  (this.dotPattern = new g.default(this.dotPatternProps)),
                  this.tube.init(),
                  this.topCurve.init(),
                  this.midSquareRight.init(),
                  this.midSquareLeft.init(),
                  this.botCurve.init(),
                  this.dotPattern.init(),
                  this.createSecondary(),
                  this.randomizeColors(),
                  (this.group = this.s.g(
                    this.midSquareRight.getElement(),
                    this.midSquareLeft.getElement(),
                    this.tube.getElement(),
                    this.topCurve.getElement(),
                    this.botCurve.getElement(),
                    this.dotPattern.getElement()
                  )),
                  this.group.addClass(
                    m.CLASSES.SVG_NUMBER + " three " + m.CLASSES.ALT
                  ),
                  this.group.transform("t" + v.x + "," + v.y);
              }
            },
            {
              key: "createSecondary",
              value: function() {
                (this.secondaryTopCurve = new p.default(this.topCurveProps)),
                  (this.secondaryDotPattern = new g.default(
                    this.dotPatternProps
                  )),
                  (this.secondaryMidSquareRight = new l.default(
                    this.midSquareRightProps
                  )),
                  (this.secondaryMidSquareLeft = new l.default(
                    this.midSquareLeftProps
                  )),
                  (this.secondaryBotCurve = new p.default(this.botCurveProps)),
                  (this.secondaryTube = new u.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 0,
                    yPos: 4,
                    tubeColor: m.COLORS.purple,
                    tubeEndColor: m.COLORS.teal,
                    shape: m.PATHS.three_hover_curve,
                    rotation: 0,
                    strokeWidth: 26,
                    lineCap: "butt",
                    animLength: 1e3
                  })),
                  this.secondaryTopCurve.init(),
                  this.secondaryDotPattern.init(),
                  this.secondaryMidSquareRight.init(),
                  this.secondaryMidSquareLeft.init(),
                  this.secondaryBotCurve.init(),
                  this.secondaryTube.init(),
                  (this.secondaryTube.pathLength = this.secondaryTube.getProps().pathLength),
                  this.secondaryTube.setDasharray(
                    this.secondaryTube.pathLength / 3 +
                      " " +
                      this.secondaryTube.pathLength
                  ),
                  this.secondaryTube.setDashoffsetEnd(
                    1.67 * this.secondaryTube.pathLength
                  ),
                  (this.secondaryGroup = this.s.g(
                    this.secondaryTopCurve.getElement(),
                    this.secondaryMidSquareRight.getElement(),
                    this.secondaryMidSquareLeft.getElement(),
                    this.secondaryBotCurve.getElement(),
                    this.secondaryTube.getElement(),
                    this.secondaryDotPattern.getElement()
                  )),
                  this.secondaryGroup.addClass("svg-number"),
                  this.secondaryGroup.transform("t" + v.x + "," + v.y);
              }
            },
            {
              key: "animateInSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryTopCurve.animateIn(),
                                  this.secondaryDotPattern.animateIn(),
                                  this.secondaryMidSquareRight.animateIn(),
                                  this.secondaryMidSquareLeft.animateIn(),
                                  this.secondaryTube.animateIn()
                                ])
                              );
                            case 2:
                              return (
                                (e.next = 4), this.secondaryBotCurve.animateIn()
                              );
                            case 4:
                              return (
                                (e.next = 6), this.secondaryTube.animateOut(500)
                              );
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "stopAllAnimations",
              value: function() {
                var e = this.tube
                    .getElement()
                    .children()[0]
                    .children(),
                  t = this.secondaryTube
                    .getElement()
                    .children()[0]
                    .children(),
                  a = this.dotPattern.getElement().children(),
                  n = this.secondaryDotPattern.getElement().children();
                this.app.stopAllAnimationsLoop(e),
                  this.app.stopAllAnimationsLoop(t),
                  this.app.stopAllAnimationsLoop(a),
                  this.app.stopAllAnimationsLoop(n),
                  this.topCurve
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.midSquareRight.getElement().stop(),
                  this.midSquareLeft.getElement().stop(),
                  this.botCurve
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryTopCurve
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryMidSquareRight.getElement().stop(),
                  this.secondaryMidSquareLeft.getElement().stop(),
                  this.secondaryBotCurve
                    .getElement()
                    .children()[0]
                    .stop();
              }
            },
            {
              key: "animateOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryTopCurve.animateOut(),
                                  this.secondaryDotPattern.animateOut(),
                                  this.secondaryMidSquareRight.animateOut(),
                                  this.secondaryMidSquareLeft.animateOut(),
                                  this.secondaryBotCurve.animateOut(),
                                  this.secondaryTube.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "randomizeColors",
              value: function() {
                var e = (0, m.SHUFFLE_PROPS)(m.COLORS),
                  t = (0, m.SHUFFLE_PROPS)(m.COLORS);
                this.topCurve.setColor(m.COLORS[e[0]]),
                  this.tube.setColor(m.COLORS[e[1]], m.COLORS[e[2]]),
                  this.midSquareRight.setColor(m.COLORS[t[0]]),
                  this.midSquareLeft.setColor(m.COLORS[t[1]]),
                  this.botCurve.setColor(m.COLORS[t[2]]),
                  this.dotPattern.setColor(m.COLORS[e[3]]),
                  this.secondaryTopCurve.setColor(m.COLORS[e[0]]),
                  this.secondaryDotPattern.setColor(m.COLORS[e[3]]),
                  this.secondaryMidSquareRight.setColor(m.COLORS[t[0]]),
                  this.secondaryMidSquareLeft.setColor(m.COLORS[t[1]]),
                  this.secondaryBotCurve.setColor(m.COLORS[t[2]]),
                  this.secondaryTube.setColor(m.COLORS[e[1]], m.COLORS[e[2]]);
              }
            },
            {
              key: "animateIn",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.topCurve.animateIn(),
                                  this.tube.animateIn(),
                                  this.midSquareRight.animateIn(),
                                  this.midSquareLeft.animateIn(),
                                  this.botCurve.animateIn(),
                                  this.dotPattern.animateIn()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.topCurve.animateOut(),
                                  this.tube.animateOut(),
                                  this.midSquareRight.animateOut(),
                                  this.midSquareLeft.animateOut(),
                                  this.botCurve.animateOut(),
                                  this.dotPattern.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.topCurve.fadeOut(),
                                  this.tube.fadeOut(),
                                  this.midSquareRight.fadeOut(),
                                  this.midSquareLeft.fadeOut(),
                                  this.botCurve.fadeOut(),
                                  this.dotPattern.fadeOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryTopCurve.fadeOut(),
                                  this.secondaryDotPattern.fadeOut(),
                                  this.secondaryMidSquareRight.fadeOut(),
                                  this.secondaryMidSquareLeft.fadeOut(),
                                  this.secondaryBotCurve.fadeOut(),
                                  this.secondaryTube.fadeOut(250)
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "reset",
              value: function() {
                this.topCurve.reset(),
                  this.tube.reset(),
                  this.midSquareRight.reset(),
                  this.midSquareLeft.reset(),
                  this.botCurve.reset(),
                  this.dotPattern.reset();
              }
            },
            {
              key: "resetSecondary",
              value: function() {
                this.secondaryTopCurve.reset(),
                  this.secondaryDotPattern.reset(),
                  this.secondaryMidSquareRight.reset(),
                  this.secondaryMidSquareLeft.reset(),
                  this.secondaryBotCurve.reset(),
                  this.secondaryTube.reset();
              }
            }
          ]),
          e
        );
      })();
    t.default = h;
  },
  function(e, t, a) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      i = a(9),
      l = n(i),
      d = a(2),
      u = n(d),
      c = a(33),
      p = n(c),
      y = a(0),
      g = { x: 10, y: 25 },
      m = (function() {
        function e(t, a) {
          r(this, e), (this.app = t), (this.svgCanvas = a);
        }
        return (
          s(e, [
            {
              key: "init",
              value: function() {
                (this.s = Snap(this.svgCanvas)),
                  (this.curveProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: -1.4,
                    yPos: 6,
                    strokeWidth: 26,
                    color: y.COLORS.purple,
                    shape: y.PATHS.half_circle
                  }),
                  (this.midSquareRightProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 105,
                    yPos: 72,
                    width: 26,
                    height: 26,
                    color: y.COLORS.teal,
                    rotation: 0
                  }),
                  (this.midSquareLeftProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 79,
                    yPos: 98,
                    width: 26,
                    height: 26,
                    color: y.COLORS.teal,
                    rotation: 0
                  }),
                  (this.slantStemProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 27,
                    yPos: 108,
                    strokeWidth: 26,
                    color: y.COLORS.orange,
                    shape: y.PATHS.path_110,
                    rotation: 45
                  }),
                  (this.gridPatternProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 26,
                    yPos: 175,
                    rows: 3,
                    cols: 8,
                    rotation: 0,
                    animLength: 500,
                    color: y.COLORS.yellow
                  }),
                  (this.curve = new u.default(this.curveProps)),
                  (this.midSquareRight = new l.default(
                    this.midSquareRightProps
                  )),
                  (this.midSquareLeft = new l.default(this.midSquareLeftProps)),
                  (this.slantStem = new u.default(this.slantStemProps)),
                  (this.grid = new p.default(this.gridPatternProps)),
                  this.midSquareRight.init(),
                  this.midSquareLeft.init(),
                  this.slantStem.init(),
                  this.curve.init(),
                  this.grid.init(),
                  this.createSecondary(),
                  this.randomizeColors(),
                  (this.group = this.s.g(
                    this.midSquareRight.getElement(),
                    this.midSquareLeft.getElement(),
                    this.grid.getElement(),
                    this.slantStem.getElement(),
                    this.curve.getElement()
                  )),
                  this.group.addClass(y.CLASSES.SVG_NUMBER + " two"),
                  this.group.transform("t" + g.x + "," + g.y);
              }
            },
            {
              key: "createSecondary",
              value: function() {
                (this.secondaryCurveOne = new u.default({
                  svgCanvas: this.svgCanvas,
                  xPos: -1,
                  yPos: 6,
                  strokeWidth: 26,
                  color: y.COLORS.purple,
                  shape: y.PATHS.circle,
                  rotation: 180,
                  reverse: !0,
                  animLength: 300
                })),
                  (this.secondaryCurveTwo = new u.default({
                    svgCanvas: this.svgCanvas,
                    xPos: -1,
                    yPos: 6,
                    strokeWidth: 26,
                    color: y.COLORS.yellow,
                    shape: y.PATHS.circle,
                    rotation: 180,
                    reverse: !0,
                    animLength: 300
                  })),
                  (this.secondaryMidSquareRight = new l.default(
                    this.midSquareRightProps
                  )),
                  (this.secondaryMidSquareLeft = new l.default(
                    this.midSquareLeftProps
                  )),
                  (this.secondarySlantStem = new u.default(
                    this.slantStemProps
                  )),
                  (this.secondaryGridPattern = new p.default(
                    this.gridPatternProps
                  )),
                  this.secondaryCurveOne.init(),
                  this.secondaryCurveTwo.init(),
                  this.secondaryMidSquareRight.init(),
                  this.secondaryMidSquareLeft.init(),
                  this.secondarySlantStem.init(),
                  this.secondaryGridPattern.init(),
                  (this.secondaryCurveOne.pathLength = this.secondaryCurveOne.getProps().pathLength),
                  (this.secondaryCurveTwo.pathLength = this.secondaryCurveTwo.getProps().pathLength),
                  this.secondaryCurveOne.setDasharray(
                    this.secondaryCurveOne.pathLength / 2
                  ),
                  this.secondaryCurveTwo.setDasharray(
                    this.secondaryCurveTwo.pathLength / 2
                  ),
                  (this.secondaryGroup = this.s.g(
                    this.secondaryGridPattern.getElement(),
                    this.secondaryCurveTwo.getElement(),
                    this.secondaryCurveOne.getElement(),
                    this.secondaryMidSquareRight.getElement(),
                    this.secondaryMidSquareLeft.getElement(),
                    this.secondarySlantStem.getElement()
                  )),
                  this.secondaryGroup.addClass("svg-number"),
                  this.secondaryGroup.transform("t" + g.x + "," + g.y);
              }
            },
            {
              key: "animateInSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                this.secondaryCurveOne.setFinal(),
                                this.secondaryCurveOne.setOpacity(1),
                                this.secondaryCurveTwo.setFinal(),
                                this.secondaryCurveTwo.setOpacity(1),
                                (e.next = 6),
                                Promise.all([
                                  this.secondaryMidSquareRight.animateIn(),
                                  this.secondaryMidSquareLeft.animateIn(),
                                  this.secondaryGridPattern.animateIn(),
                                  this.secondarySlantStem.animateIn()
                                ])
                              );
                            case 6:
                              return (
                                (e.next = 8),
                                this.secondaryCurveOne.animatePath(
                                  2.5 * this.secondaryCurveOne.pathLength,
                                  1e3
                                )
                              );
                            case 8:
                              return (
                                this.secondaryCurveTwo.animatePath(
                                  2.5 * this.secondaryCurveTwo.pathLength,
                                  1e3
                                ),
                                this.secondaryCurveOne.animatePath(
                                  3 * this.secondaryCurveOne.pathLength,
                                  1e3
                                ),
                                this.secondaryMidSquareRight.setPosition(
                                  this.secondaryMidSquareRight.getProps().x,
                                  this.secondaryMidSquareRight.getProps().y + 52
                                ),
                                (e.next = 13),
                                this.secondarySlantStem.animateRotation(90)
                              );
                            case 13:
                              return (
                                this.secondaryMidSquareLeft.setPosition(
                                  this.secondaryMidSquareLeft.getProps().x,
                                  this.secondaryMidSquareLeft.getProps().y + 52
                                ),
                                (e.next = 16),
                                this.secondarySlantStem.animateRotation(135)
                              );
                            case 16:
                              return (
                                this.secondaryMidSquareRight.setPosition(
                                  this.secondaryMidSquareRight.getProps().x,
                                  this.secondaryMidSquareRight.getProps().y + 52
                                ),
                                (e.next = 19),
                                this.secondarySlantStem.animateRotation(180)
                              );
                            case 19:
                              return (
                                this.secondaryMidSquareRight.setPosition(
                                  this.secondaryMidSquareRight.getProps().x,
                                  this.secondaryMidSquareRight.getProps().y - 52
                                ),
                                (e.next = 22),
                                this.secondarySlantStem.animateRotation(225)
                              );
                            case 22:
                              return (
                                this.secondaryMidSquareLeft.setPosition(
                                  this.secondaryMidSquareLeft.getProps().x,
                                  this.secondaryMidSquareLeft.getProps().y - 52
                                ),
                                (e.next = 25),
                                this.secondarySlantStem.animateRotation(269.9)
                              );
                            case 25:
                              return (
                                this.secondaryMidSquareRight.setPosition(
                                  this.secondaryMidSquareRight.getProps().x,
                                  this.secondaryMidSquareRight.getProps().y - 52
                                ),
                                this.secondarySlantStem.animateRotation(225),
                                (e.next = 28),
                                this.secondaryCurveTwo.animatePath(
                                  3 * this.secondaryCurveTwo.pathLength,
                                  1e3
                                )
                              );
                            case 28:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "stopAllAnimations",
              value: function() {
                var e = this.grid.getElement().children(),
                  t = this.secondaryGridPattern.getElement().children();
                this.app.stopAllAnimationsLoop(e),
                  this.app.stopAllAnimationsLoop(t),
                  this.midSquareRight.getElement().stop(),
                  this.midSquareLeft.getElement().stop(),
                  this.slantStem
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.curve
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryCurveOne
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryCurveTwo
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryMidSquareRight.getElement().stop(),
                  this.secondaryMidSquareLeft.getElement().stop(),
                  this.secondarySlantStem
                    .getElement()
                    .children()[0]
                    .stop();
              }
            },
            {
              key: "animateOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryCurveOne.animateOut(),
                                  this.secondaryCurveTwo.animateOut(),
                                  this.secondaryMidSquareRight.animateOut(),
                                  this.secondaryMidSquareLeft.animateOut(),
                                  this.secondarySlantStem.animateOut(),
                                  this.secondaryGridPattern.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "randomizeColors",
              value: function() {
                var e = (0, y.SHUFFLE_PROPS)(y.COLORS);
                this.curve.setColor(y.COLORS[e[0]]),
                  this.midSquareRight.setColor(y.COLORS[e[2]]),
                  this.midSquareLeft.setColor(y.COLORS[e[2]]),
                  this.slantStem.setColor(y.COLORS[e[3]]),
                  this.grid.setColor(y.COLORS[e[1]]),
                  this.secondaryCurveOne.setColor(y.COLORS[e[0]]),
                  this.secondaryCurveTwo.setColor(y.COLORS[e[1]]),
                  this.secondaryMidSquareRight.setColor(y.COLORS[e[2]]),
                  this.secondaryMidSquareLeft.setColor(y.COLORS[e[2]]),
                  this.secondarySlantStem.setColor(y.COLORS[e[3]]),
                  this.secondaryGridPattern.setColor(y.COLORS[e[1]]);
              }
            },
            {
              key: "animateIn",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.curve.animateIn(),
                                  this.midSquareRight.animateIn(),
                                  this.midSquareLeft.animateIn(),
                                  this.slantStem.animateIn(),
                                  this.grid.animateIn()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.curve.animateOut(),
                                  this.midSquareRight.animateOut(),
                                  this.midSquareLeft.animateOut(),
                                  this.slantStem.animateOut(),
                                  this.grid.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.curve.fadeOut(),
                                  this.midSquareRight.fadeOut(),
                                  this.midSquareLeft.fadeOut(),
                                  this.slantStem.fadeOut(),
                                  this.grid.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryCurveOne.fadeOut(),
                                  this.secondaryCurveTwo.fadeOut(),
                                  this.secondaryMidSquareRight.fadeOut(),
                                  this.secondaryMidSquareLeft.fadeOut(),
                                  this.secondarySlantStem.fadeOut(),
                                  this.secondaryGridPattern.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "reset",
              value: function() {
                this.curve.reset(),
                  this.midSquareRight.reset(),
                  this.midSquareLeft.reset(),
                  this.slantStem.reset(),
                  this.grid.reset();
              }
            },
            {
              key: "resetSecondary",
              value: function() {
                this.secondaryCurveOne.reset(),
                  this.secondaryCurveTwo.reset(),
                  this.secondaryMidSquareRight.reset(),
                  this.secondaryMidSquareLeft.reset(),
                  this.secondarySlantStem.reset(),
                  this.secondaryGridPattern.reset();
              }
            }
          ]),
          e
        );
      })();
    t.default = m;
  },
  function(e, t, a) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      i = a(9),
      l = n(i),
      d = a(2),
      u = n(d),
      c = a(16),
      p = n(c),
      y = a(33),
      g = n(y),
      m = a(0),
      v = { x: 10, y: 22 },
      h = (function() {
        function e(t, a) {
          r(this, e), (this.svgCanvas = a), (this.app = t);
        }
        return (
          s(e, [
            {
              key: "init",
              value: function() {
                (this.s = Snap(this.svgCanvas)),
                  (this.curveProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: -1.4,
                    yPos: 6,
                    strokeWidth: 26,
                    color: m.COLORS.teal,
                    shape: m.PATHS.half_circle
                  }),
                  (this.midSquareRightProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 105,
                    yPos: 72,
                    width: 26,
                    height: 26,
                    color: m.COLORS.orange,
                    rotation: 0
                  }),
                  (this.midSquareLeftProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 79,
                    yPos: 98,
                    width: 26,
                    height: 26,
                    color: m.COLORS.orange,
                    rotation: 0
                  }),
                  (this.slantStemProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 27,
                    yPos: 108,
                    strokeWidth: 26,
                    color: m.COLORS.purple,
                    shape: m.PATHS.path_110,
                    rotation: 45
                  }),
                  (this.baseProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 0,
                    yPos: 190,
                    strokeWidth: 26,
                    color: m.COLORS.purple,
                    shape: m.PATHS.path_132
                  }),
                  (this.diagonalPatternProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 0,
                    yPos: 176,
                    rows: 4,
                    cols: 10,
                    rotation: 0,
                    animLength: 500,
                    direction: "back",
                    color: m.COLORS.yellow
                  }),
                  (this.curve = new u.default(this.curveProps)),
                  (this.midSquareRight = new l.default(
                    this.midSquareRightProps
                  )),
                  (this.midSquareLeft = new l.default(this.midSquareLeftProps)),
                  (this.slantStem = new u.default(this.slantStemProps)),
                  (this.base = new u.default(this.baseProps)),
                  (this.diagonalPattern = new p.default(
                    this.diagonalPatternProps
                  )),
                  this.midSquareRight.init(),
                  this.midSquareLeft.init(),
                  this.curve.init(),
                  this.base.init(),
                  this.diagonalPattern.init(),
                  this.slantStem.init(),
                  this.createSecondary(),
                  this.randomizeColors(),
                  (this.group = this.s.g(
                    this.midSquareRight.getElement(),
                    this.midSquareLeft.getElement(),
                    this.curve.getElement(),
                    this.base.getElement(),
                    this.diagonalPattern.getElement(),
                    this.slantStem.getElement()
                  )),
                  this.group.addClass(
                    m.CLASSES.SVG_NUMBER + " two " + m.CLASSES.ALT
                  ),
                  this.group.transform("t" + v.x + "," + v.y);
              }
            },
            {
              key: "createSecondary",
              value: function() {
                (this.secondaryCurveOne = new u.default({
                  svgCanvas: this.svgCanvas,
                  xPos: -1,
                  yPos: 6,
                  strokeWidth: 26,
                  color: m.COLORS.purple,
                  shape: m.PATHS.circle,
                  rotation: 180,
                  reverse: !0,
                  animLength: 300
                })),
                  (this.secondaryCurveTwo = new u.default({
                    svgCanvas: this.svgCanvas,
                    xPos: -1,
                    yPos: 6,
                    strokeWidth: 26,
                    color: m.COLORS.yellow,
                    shape: m.PATHS.circle,
                    rotation: 180,
                    reverse: !0,
                    animLength: 300
                  })),
                  (this.secondaryMidSquareRight = new l.default(
                    this.midSquareRightProps
                  )),
                  (this.secondaryMidSquareLeft = new l.default(
                    this.midSquareLeftProps
                  )),
                  (this.secondarySlantStem = new u.default(
                    this.slantStemProps
                  )),
                  (this.secondaryGridPattern = new g.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 26,
                    yPos: 175,
                    rows: 3,
                    cols: 8,
                    rotation: 0,
                    animLength: 500,
                    color: m.COLORS.yellow
                  })),
                  this.secondaryCurveOne.init(),
                  this.secondaryCurveTwo.init(),
                  this.secondaryMidSquareRight.init(),
                  this.secondaryMidSquareLeft.init(),
                  this.secondarySlantStem.init(),
                  this.secondaryGridPattern.init(),
                  (this.secondaryCurveOne.pathLength = this.secondaryCurveOne.getProps().pathLength),
                  (this.secondaryCurveTwo.pathLength = this.secondaryCurveTwo.getProps().pathLength),
                  this.secondaryCurveOne.setDasharray(
                    this.secondaryCurveOne.pathLength / 2
                  ),
                  this.secondaryCurveTwo.setDasharray(
                    this.secondaryCurveTwo.pathLength / 2
                  ),
                  (this.secondaryGroup = this.s.g(
                    this.secondaryGridPattern.getElement(),
                    this.secondaryCurveTwo.getElement(),
                    this.secondaryCurveOne.getElement(),
                    this.secondaryMidSquareRight.getElement(),
                    this.secondaryMidSquareLeft.getElement(),
                    this.secondarySlantStem.getElement()
                  )),
                  this.secondaryGroup.addClass("svg-number"),
                  this.secondaryGroup.transform("t" + v.x + "," + v.y);
              }
            },
            {
              key: "animateInSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                this.secondaryCurveOne.setFinal(),
                                this.secondaryCurveOne.setOpacity(1),
                                this.secondaryCurveTwo.setFinal(),
                                this.secondaryCurveTwo.setOpacity(1),
                                (e.next = 6),
                                Promise.all([
                                  this.secondaryMidSquareRight.animateIn(),
                                  this.secondaryMidSquareLeft.animateIn(),
                                  this.secondaryGridPattern.animateIn(),
                                  this.secondarySlantStem.animateIn()
                                ])
                              );
                            case 6:
                              return (
                                (e.next = 8),
                                this.secondaryCurveOne.animatePath(
                                  2.5 * this.secondaryCurveOne.pathLength,
                                  1e3
                                )
                              );
                            case 8:
                              return (
                                this.secondaryCurveTwo.animatePath(
                                  2.5 * this.secondaryCurveTwo.pathLength,
                                  1e3
                                ),
                                this.secondaryCurveOne.animatePath(
                                  3 * this.secondaryCurveOne.pathLength,
                                  1e3
                                ),
                                this.secondaryMidSquareRight.setPosition(
                                  this.secondaryMidSquareRight.getProps().x,
                                  this.secondaryMidSquareRight.getProps().y + 52
                                ),
                                (e.next = 13),
                                this.secondarySlantStem.animateRotation(90)
                              );
                            case 13:
                              return (
                                this.secondaryMidSquareLeft.setPosition(
                                  this.secondaryMidSquareLeft.getProps().x,
                                  this.secondaryMidSquareLeft.getProps().y + 52
                                ),
                                (e.next = 16),
                                this.secondarySlantStem.animateRotation(135)
                              );
                            case 16:
                              return (
                                this.secondaryMidSquareRight.setPosition(
                                  this.secondaryMidSquareRight.getProps().x,
                                  this.secondaryMidSquareRight.getProps().y + 52
                                ),
                                (e.next = 19),
                                this.secondarySlantStem.animateRotation(180)
                              );
                            case 19:
                              return (
                                this.secondaryMidSquareRight.setPosition(
                                  this.secondaryMidSquareRight.getProps().x,
                                  this.secondaryMidSquareRight.getProps().y - 52
                                ),
                                (e.next = 22),
                                this.secondarySlantStem.animateRotation(225)
                              );
                            case 22:
                              return (
                                this.secondaryMidSquareLeft.setPosition(
                                  this.secondaryMidSquareLeft.getProps().x,
                                  this.secondaryMidSquareLeft.getProps().y - 52
                                ),
                                (e.next = 25),
                                this.secondarySlantStem.animateRotation(269.9)
                              );
                            case 25:
                              return (
                                this.secondaryMidSquareRight.setPosition(
                                  this.secondaryMidSquareRight.getProps().x,
                                  this.secondaryMidSquareRight.getProps().y - 52
                                ),
                                this.secondarySlantStem.animateRotation(225),
                                (e.next = 28),
                                this.secondaryCurveTwo.animatePath(
                                  3 * this.secondaryCurveTwo.pathLength,
                                  1e3
                                )
                              );
                            case 28:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "stopAllAnimations",
              value: function() {
                var e = this.diagonalPattern.getElement().children(),
                  t = this.secondaryGridPattern.getElement().children();
                this.app.stopAllAnimationsLoop(e),
                  this.app.stopAllAnimationsLoop(t),
                  this.midSquareRight.getElement().stop(),
                  this.midSquareLeft.getElement().stop(),
                  this.slantStem
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.curve
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryCurveOne
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryCurveTwo
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.secondaryMidSquareRight.getElement().stop(),
                  this.secondaryMidSquareLeft.getElement().stop(),
                  this.secondarySlantStem
                    .getElement()
                    .children()[0]
                    .stop();
              }
            },
            {
              key: "animateOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryCurveOne.animateOut(),
                                  this.secondaryCurveTwo.animateOut(),
                                  this.secondaryMidSquareRight.animateOut(),
                                  this.secondaryMidSquareLeft.animateOut(),
                                  this.secondarySlantStem.animateOut(),
                                  this.secondaryGridPattern.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "randomizeColors",
              value: function() {
                var e = (0, m.SHUFFLE_PROPS)(m.COLORS);
                this.curve.setColor(m.COLORS[e[0]]),
                  this.midSquareRight.setColor(m.COLORS[e[2]]),
                  this.midSquareLeft.setColor(m.COLORS[e[2]]),
                  this.slantStem.setColor(m.COLORS[e[3]]),
                  this.diagonalPattern.setColor(m.COLORS[e[1]]),
                  this.base.setColor(m.COLORS[e[0]]),
                  this.secondaryCurveOne.setColor(m.COLORS[e[0]]),
                  this.secondaryCurveTwo.setColor(m.COLORS[e[1]]),
                  this.secondaryMidSquareRight.setColor(m.COLORS[e[2]]),
                  this.secondaryMidSquareLeft.setColor(m.COLORS[e[2]]),
                  this.secondarySlantStem.setColor(m.COLORS[e[3]]),
                  this.secondaryGridPattern.setColor(m.COLORS[e[1]]);
              }
            },
            {
              key: "animateIn",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.curve.animateIn(),
                                  this.midSquareRight.animateIn(),
                                  this.midSquareLeft.animateIn(),
                                  this.slantStem.animateIn(),
                                  this.diagonalPattern.animateIn(),
                                  this.base.animateIn()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.curve.animateOut(),
                                  this.midSquareRight.animateOut(),
                                  this.midSquareLeft.animateOut(),
                                  this.slantStem.animateOut(),
                                  this.diagonalPattern.animateOut(),
                                  this.base.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.curve.fadeOut(),
                                  this.midSquareRight.fadeOut(),
                                  this.midSquareLeft.fadeOut(),
                                  this.slantStem.fadeOut(),
                                  this.diagonalPattern.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryCurveOne.fadeOut(),
                                  this.secondaryCurveTwo.fadeOut(),
                                  this.secondaryMidSquareRight.fadeOut(),
                                  this.secondaryMidSquareLeft.fadeOut(),
                                  this.secondarySlantStem.fadeOut(),
                                  this.secondaryGridPattern.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "reset",
              value: function() {
                this.curve.reset(),
                  this.midSquareRight.reset(),
                  this.midSquareLeft.reset(),
                  this.slantStem.reset(),
                  this.base.reset(),
                  this.diagonalPattern.reset();
              }
            },
            {
              key: "resetSecondary",
              value: function() {
                this.secondaryCurveOne.reset(),
                  this.secondaryCurveTwo.reset(),
                  this.secondaryMidSquareRight.reset(),
                  this.secondaryMidSquareLeft.reset(),
                  this.secondarySlantStem.reset(),
                  this.secondaryGridPattern.reset();
              }
            }
          ]),
          e
        );
      })();
    t.default = h;
  },
  function(e, t, a) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      i = a(2),
      l = n(i),
      d = a(33),
      u = n(d),
      c = a(29),
      p = n(c),
      y = a(6),
      g = n(y),
      m = a(0),
      v = { x: 9, y: 27 },
      h = (function() {
        function e(t, a) {
          r(this, e), (this.svgCanvas = a), (this.app = t);
        }
        return (
          s(e, [
            {
              key: "init",
              value: function() {
                (this.s = Snap(this.svgCanvas)),
                  (this.gridPatternProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 1.5,
                    yPos: 72,
                    rows: 6,
                    cols: 10,
                    rotation: 180,
                    animLength: 500,
                    color: m.COLORS.teal
                  }),
                  (this.curveProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 0,
                    yPos: 0,
                    strokeWidth: 26,
                    color: m.COLORS.purple,
                    shape: m.PATHS.zero_curve,
                    rotation: 180
                  }),
                  (this.curve = new l.default(this.curveProps)),
                  (this.gridPattern = new u.default(this.gridPatternProps)),
                  this.curve.init(),
                  this.gridPattern.init(),
                  this.createSecondary(),
                  this.randomizeColors(),
                  (this.group = this.s.g(
                    this.curve.getElement(),
                    this.gridPattern.getElement()
                  )),
                  this.group.addClass(m.CLASSES.SVG_NUMBER + " zero"),
                  this.group.transform("t" + v.x + "," + v.y);
              }
            },
            {
              key: "createSecondary",
              value: function() {
                (this.secondaryCurve = new l.default(this.curveProps)),
                  (this.secondaryGridPattern = new p.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 1,
                    yPos: 72,
                    rows: 6,
                    cols: 10,
                    color: m.COLORS.teal,
                    blockSize: 13,
                    strokeWidth: 2.5,
                    animLength: 400
                  })),
                  (this.secondaryTubeRight = new g.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 0,
                    yPos: 0,
                    tubeColor: m.COLORS.orange,
                    tubeEndColor: m.COLORS.yellow,
                    shape: m.PATHS.zero_half_curve,
                    rotation: 0,
                    strokeWidth: 26,
                    animLength: 400
                  })),
                  (this.secondaryTubeLeft = new g.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 40.5,
                    yPos: -13,
                    tubeColor: m.COLORS.yellow,
                    tubeEndColor: m.COLORS.orange,
                    shape: m.PATHS.zero_half_curve,
                    rotation: 180,
                    strokeWidth: 26,
                    animLength: 400
                  })),
                  this.secondaryCurve.init(),
                  this.secondaryTubeRight.init(),
                  this.secondaryTubeLeft.init(),
                  this.secondaryGridPattern.init(),
                  (this.secondaryGroup = this.s.g(
                    this.secondaryCurve.getElement(),
                    this.secondaryTubeRight.getElement(),
                    this.secondaryTubeLeft.getElement(),
                    this.secondaryGridPattern.getElement()
                  )),
                  this.secondaryGroup.addClass("svg-number"),
                  this.secondaryGroup.transform("t" + v.x + "," + v.y);
              }
            },
            {
              key: "stopAllAnimations",
              value: function() {
                var e = this.secondaryTubeRight
                    .getElement()
                    .children()[0]
                    .children(),
                  t = this.secondaryTubeLeft
                    .getElement()
                    .children()[0]
                    .children(),
                  a = this.secondaryGridPattern.getElement().children(),
                  n = this.gridPattern.getElement().children();
                this.app.stopAllAnimationsLoop(e),
                  this.app.stopAllAnimationsLoop(t),
                  this.app.stopAllAnimationsLoop(a),
                  this.app.stopAllAnimationsLoop(n),
                  this.secondaryCurve
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.curve
                    .getElement()
                    .children()[0]
                    .stop();
              }
            },
            {
              key: "animateInSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2), this.secondaryCurve.animateIn()
                              );
                            case 2:
                              return (
                                (e.next = 4),
                                Promise.all([
                                  this.secondaryGridPattern.animateInBorders(),
                                  this.secondaryGridPattern.animateInHorizontalLines()
                                ])
                              );
                            case 4:
                              return (
                                this.secondaryTubeRight.animateIn(),
                                (e.next = 7),
                                this.secondaryTubeLeft.animateIn()
                              );
                            case 7:
                              return (
                                (e.next = 9),
                                this.secondaryGridPattern.animateOutHorizontalLines()
                              );
                            case 9:
                              return (
                                (e.next = 11),
                                Promise.all([
                                  this.secondaryTubeRight.animateOut(),
                                  this.secondaryTubeLeft.animateOut(),
                                  this.secondaryGridPattern.animateInVerticalLines()
                                ])
                              );
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryTubeRight.animateOut(),
                                  this.secondaryTubeLeft.animateOut(),
                                  this.secondaryCurve.animateOut(),
                                  this.secondaryGridPattern.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "randomizeColors",
              value: function() {
                var e = (0, m.SHUFFLE_PROPS)(m.COLORS);
                this.curve.setColor(m.COLORS[e[0]]),
                  this.gridPattern.setColor(m.COLORS[e[1]]),
                  this.secondaryTubeRight.setColor(
                    m.COLORS[e[2]],
                    m.COLORS[e[3]]
                  ),
                  this.secondaryTubeLeft.setColor(
                    m.COLORS[e[3]],
                    m.COLORS[e[2]]
                  ),
                  this.secondaryCurve.setColor(m.COLORS[e[0]]),
                  this.secondaryGridPattern.setColor(m.COLORS[e[1]]);
              }
            },
            {
              key: "animateIn",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.curve.animateIn(),
                                  this.gridPattern.animateIn()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.curve.animateOut(),
                                  this.gridPattern.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.curve.fadeOut(),
                                  this.gridPattern.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryTubeRight.fadeOut(),
                                  this.secondaryTubeLeft.fadeOut(),
                                  this.secondaryCurve.fadeOut(),
                                  this.secondaryGridPattern.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "reset",
              value: function() {
                this.curve.reset();
              }
            },
            {
              key: "resetSecondary",
              value: function() {
                this.secondaryTubeRight.reset(),
                  this.secondaryTubeLeft.reset(),
                  this.secondaryCurve.reset(),
                  this.secondaryGridPattern.reset();
              }
            }
          ]),
          e
        );
      })();
    t.default = h;
  },
  function(e, t, a) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, a) {
          function n(o, r) {
            try {
              var s = t[o](r),
                i = s.value;
            } catch (e) {
              return void a(e);
            }
            return s.done
              ? void e(i)
              : Promise.resolve(i).then(
                  function(e) {
                    n("next", e);
                  },
                  function(e) {
                    n("throw", e);
                  }
                );
          }
          return n("next");
        });
      };
    }
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = (function() {
        function e(e, t) {
          for (var a = 0, n; a < t.length; a++)
            (n = t[a]),
              (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        return function(t, a, n) {
          return a && e(t.prototype, a), n && e(t, n), t;
        };
      })(),
      i = a(2),
      l = n(i),
      d = a(16),
      u = n(d),
      c = a(29),
      p = n(c),
      y = a(6),
      g = n(y),
      m = a(0),
      v = { x: 9, y: 27 },
      h = (function() {
        function e(t, a) {
          r(this, e), (this.svgCanvas = a), (this.app = t);
        }
        return (
          s(e, [
            {
              key: "init",
              value: function() {
                (this.s = Snap(this.svgCanvas)),
                  (this.diagonalPatternProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 1,
                    yPos: 72,
                    rows: 6,
                    cols: 10,
                    color: m.COLORS.purple,
                    direction: "back"
                  }),
                  (this.curveProps = {
                    svgCanvas: this.svgCanvas,
                    xPos: 0,
                    yPos: 0,
                    strokeWidth: 26,
                    color: m.COLORS.teal,
                    shape: m.PATHS.zero_curve,
                    rotation: 180
                  }),
                  (this.curve = new l.default(this.curveProps)),
                  (this.diagonalPattern = new u.default(
                    this.diagonalPatternProps
                  )),
                  this.curve.init(),
                  this.diagonalPattern.init(),
                  this.createSecondary(),
                  this.randomizeColors(),
                  (this.group = this.s.g(
                    this.curve.getElement(),
                    this.diagonalPattern.getElement()
                  )),
                  this.group.addClass(
                    m.CLASSES.SVG_NUMBER + " zero " + m.CLASSES.ALT
                  ),
                  this.group.transform("t" + v.x + "," + v.y);
              }
            },
            {
              key: "createSecondary",
              value: function() {
                (this.secondaryCurve = new l.default(this.curveProps)),
                  (this.secondaryGridPattern = new p.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 1,
                    yPos: 72,
                    rows: 6,
                    cols: 10,
                    color: m.COLORS.teal,
                    blockSize: 13,
                    strokeWidth: 2.5,
                    animLength: 400
                  })),
                  (this.secondaryTubeRight = new g.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 0,
                    yPos: 0,
                    tubeColor: m.COLORS.orange,
                    tubeEndColor: m.COLORS.yellow,
                    shape: m.PATHS.zero_half_curve,
                    rotation: 0,
                    strokeWidth: 26,
                    animLength: 400
                  })),
                  (this.secondaryTubeLeft = new g.default({
                    svgCanvas: this.svgCanvas,
                    xPos: 40.5,
                    yPos: -13,
                    tubeColor: m.COLORS.yellow,
                    tubeEndColor: m.COLORS.orange,
                    shape: m.PATHS.zero_half_curve,
                    rotation: 180,
                    strokeWidth: 26,
                    animLength: 400
                  })),
                  this.secondaryCurve.init(),
                  this.secondaryTubeRight.init(),
                  this.secondaryTubeLeft.init(),
                  this.secondaryGridPattern.init(),
                  (this.secondaryGroup = this.s.g(
                    this.secondaryCurve.getElement(),
                    this.secondaryTubeRight.getElement(),
                    this.secondaryTubeLeft.getElement(),
                    this.secondaryGridPattern.getElement()
                  )),
                  this.secondaryGroup.addClass("svg-number"),
                  this.secondaryGroup.transform("t" + v.x + "," + v.y);
              }
            },
            {
              key: "stopAllAnimations",
              value: function() {
                var e = this.secondaryTubeRight
                    .getElement()
                    .children()[0]
                    .children(),
                  t = this.secondaryTubeLeft
                    .getElement()
                    .children()[0]
                    .children(),
                  a = this.secondaryGridPattern.getElement().children(),
                  n = this.diagonalPattern.getElement().children();
                this.app.stopAllAnimationsLoop(e),
                  this.app.stopAllAnimationsLoop(t),
                  this.app.stopAllAnimationsLoop(a),
                  this.app.stopAllAnimationsLoop(n),
                  this.secondaryCurve
                    .getElement()
                    .children()[0]
                    .stop(),
                  this.curve
                    .getElement()
                    .children()[0]
                    .stop();
              }
            },
            {
              key: "animateInSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2), this.secondaryCurve.animateIn()
                              );
                            case 2:
                              return (
                                (e.next = 4),
                                Promise.all([
                                  this.secondaryGridPattern.animateInBorders(),
                                  this.secondaryGridPattern.animateInHorizontalLines()
                                ])
                              );
                            case 4:
                              return (
                                this.secondaryTubeRight.animateIn(),
                                (e.next = 7),
                                this.secondaryTubeLeft.animateIn()
                              );
                            case 7:
                              return (
                                (e.next = 9),
                                this.secondaryGridPattern.animateOutHorizontalLines()
                              );
                            case 9:
                              return (
                                (e.next = 11),
                                Promise.all([
                                  this.secondaryTubeRight.animateOut(),
                                  this.secondaryTubeLeft.animateOut(),
                                  this.secondaryGridPattern.animateInVerticalLines()
                                ])
                              );
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryTubeRight.animateOut(),
                                  this.secondaryTubeLeft.animateOut(),
                                  this.secondaryCurve.animateOut(),
                                  this.secondaryGridPattern.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "randomizeColors",
              value: function() {
                var e = (0, m.SHUFFLE_PROPS)(m.COLORS);
                this.curve.setColor(m.COLORS[e[0]]),
                  this.diagonalPattern.setColor(m.COLORS[e[1]]),
                  this.secondaryTubeRight.setColor(
                    m.COLORS[e[2]],
                    m.COLORS[e[3]]
                  ),
                  this.secondaryTubeLeft.setColor(
                    m.COLORS[e[3]],
                    m.COLORS[e[2]]
                  ),
                  this.secondaryCurve.setColor(m.COLORS[e[0]]),
                  this.secondaryGridPattern.setColor(m.COLORS[e[1]]);
              }
            },
            {
              key: "animateIn",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.curve.animateIn(),
                                  this.diagonalPattern.animateIn()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "animateOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.curve.animateOut(),
                                  this.diagonalPattern.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOut",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.curve.fadeOut(),
                                  this.diagonalPattern.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "fadeOutSecondary",
              value: (function() {
                var e = o(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                Promise.all([
                                  this.secondaryTubeRight.fadeOut(),
                                  this.secondaryTubeLeft.fadeOut(),
                                  this.secondaryCurve.fadeOut(),
                                  this.secondaryGridPattern.animateOut()
                                ])
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })()
            },
            {
              key: "reset",
              value: function() {
                this.curve.reset(), this.diagonalPattern.reset();
              }
            },
            {
              key: "resetSecondary",
              value: function() {
                this.secondaryTubeRight.reset(),
                  this.secondaryTubeLeft.reset(),
                  this.secondaryCurve.reset(),
                  this.secondaryGridPattern.reset();
              }
            }
          ]),
          e
        );
      })();
    t.default = h;
  }
]);
