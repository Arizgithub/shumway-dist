/*

 Copyright 2014 Mozilla Foundation

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
console.time("Load Shared Dependencies");
var Shumway, Shumway$$inline_0 = Shumway || (Shumway = {});
Shumway$$inline_0.version = "0.11.486";
Shumway$$inline_0.build = "ae46703";
var jsGlobal = function() {
  return this || (0,eval)("this//# sourceURL=jsGlobal-getter");
}(), inBrowser = "undefined" !== typeof window && "document" in window && "plugins" in window.document, inFirefox = "undefined" !== typeof navigator && 0 <= navigator.userAgent.indexOf("Firefox");
jsGlobal.performance || (jsGlobal.performance = {});
jsGlobal.performance.now || (jsGlobal.performance.now = function() {
  return Date.now();
});
function lazyInitializer(h, p, r) {
  Object.defineProperty(h, p, {get:function() {
    var a = r();
    Object.defineProperty(h, p, {value:a, configurable:!0, enumerable:!0});
    return a;
  }, configurable:!0, enumerable:!0});
}
var START_TIME = performance.now();
(function(h) {
  function p(c) {
    return (c | 0) === c;
  }
  function r(c) {
    return "object" === typeof c || "function" === typeof c;
  }
  function a(c) {
    return String(Number(c)) === c;
  }
  function w(c) {
    var f = 0;
    if ("number" === typeof c) {
      return f = c | 0, c === f && 0 <= f ? !0 : c >>> 0 === c;
    }
    if ("string" !== typeof c) {
      return !1;
    }
    var e = c.length;
    if (0 === e) {
      return !1;
    }
    if ("0" === c) {
      return !0;
    }
    if (e > h.UINT32_CHAR_BUFFER_LENGTH) {
      return !1;
    }
    var d = 0, f = c.charCodeAt(d++) - 48;
    if (1 > f || 9 < f) {
      return !1;
    }
    for (var g = 0, y = 0;d < e;) {
      y = c.charCodeAt(d++) - 48;
      if (0 > y || 9 < y) {
        return !1;
      }
      g = f;
      f = 10 * f + y;
    }
    return g < h.UINT32_MAX_DIV_10 || g === h.UINT32_MAX_DIV_10 && y <= h.UINT32_MAX_MOD_10 ? !0 : !1;
  }
  (function(c) {
    c[c._0 = 48] = "_0";
    c[c._1 = 49] = "_1";
    c[c._2 = 50] = "_2";
    c[c._3 = 51] = "_3";
    c[c._4 = 52] = "_4";
    c[c._5 = 53] = "_5";
    c[c._6 = 54] = "_6";
    c[c._7 = 55] = "_7";
    c[c._8 = 56] = "_8";
    c[c._9 = 57] = "_9";
  })(h.CharacterCodes || (h.CharacterCodes = {}));
  h.UINT32_CHAR_BUFFER_LENGTH = 10;
  h.UINT32_MAX = 4294967295;
  h.UINT32_MAX_DIV_10 = 429496729;
  h.UINT32_MAX_MOD_10 = 5;
  h.isString = function(c) {
    return "string" === typeof c;
  };
  h.isFunction = function(c) {
    return "function" === typeof c;
  };
  h.isNumber = function(c) {
    return "number" === typeof c;
  };
  h.isInteger = p;
  h.isArray = function(c) {
    return c instanceof Array;
  };
  h.isNumberOrString = function(c) {
    return "number" === typeof c || "string" === typeof c;
  };
  h.isObject = r;
  h.toNumber = function(c) {
    return +c;
  };
  h.isNumericString = a;
  h.isNumeric = function(c) {
    if ("number" === typeof c) {
      return !0;
    }
    if ("string" === typeof c) {
      var f = c.charCodeAt(0);
      return 65 <= f && 90 >= f || 97 <= f && 122 >= f || 36 === f || 95 === f ? !1 : w(c) || a(c);
    }
    return !1;
  };
  h.isIndex = w;
  h.isNullOrUndefined = function(c) {
    return void 0 == c;
  };
  h.argumentsToString = function(c) {
    for (var f = [], e = 0;e < c.length;e++) {
      var d = c[e];
      try {
        var g;
        g = "object" === typeof d && d ? "toString" in d ? d.toString() : Object.prototype.toString.call(d) : d + "";
        f.push(g);
      } catch (y) {
        f.push("<unprintable value>");
      }
    }
    return f.join(", ");
  };
  var m;
  (function(c) {
    c.error = function(d) {
      console.error(d);
      throw Error(d);
    };
    c.assert = function(d, g) {
      void 0 === g && (g = "assertion failed");
      "" === d && (d = !0);
      if (!d) {
        if ("undefined" !== typeof console && "assert" in console) {
          throw console.assert(!1, g), Error(g);
        }
        c.error(g.toString());
      }
    };
    c.assertUnreachable = function(d) {
      var g = Error().stack.split("\n")[1];
      throw Error("Reached unreachable location " + g + d);
    };
    c.assertNotImplemented = function(d, g) {
      d || c.error("notImplemented: " + g);
    };
    var f = Object.create(null);
    c.warning = function(d, g, e) {
    };
    c.warnCounts = function() {
      var d = [], g;
      for (g in f) {
        d.push({key:g, count:f[g]});
      }
      d.sort(function(g, d) {
        return d.count - g.count;
      });
      return d.reduce(function(g, d) {
        return g + ("\n" + d.count + "\t" + d.key);
      }, "");
    };
    c.notUsed = function(d) {
    };
    c.notImplemented = function(d) {
    };
    c.dummyConstructor = function(d) {
    };
    c.abstractMethod = function(d) {
    };
    var e = {};
    c.somewhatImplemented = function(d) {
      e[d] || (e[d] = !0, c.warning("somewhatImplemented: " + d));
    };
    c.unexpected = function(d) {
      c.assert(!1, "Unexpected: " + d);
    };
    c.unexpectedCase = function(d) {
      c.assert(!1, "Unexpected Case: " + d);
    };
  })(m = h.Debug || (h.Debug = {}));
  h.getTicks = function() {
    return performance.now();
  };
  (function(c) {
    function f(d, g) {
      for (var e = 0, f = d.length;e < f;e++) {
        if (d[e] === g) {
          return e;
        }
      }
      d.push(g);
      return d.length - 1;
    }
    c.popManyInto = function(d, g, e) {
      for (var f = g - 1;0 <= f;f--) {
        e[f] = d.pop();
      }
      e.length = g;
    };
    c.popMany = function(d, g) {
      var e = d.length - g, f = d.slice(e, this.length);
      d.length = e;
      return f;
    };
    c.popManyIntoVoid = function(d, g) {
      d.length -= g;
    };
    c.pushMany = function(d, g) {
      for (var e = 0;e < g.length;e++) {
        d.push(g[e]);
      }
    };
    c.top = function(d) {
      return d.length && d[d.length - 1];
    };
    c.last = function(d) {
      return d.length && d[d.length - 1];
    };
    c.peek = function(d) {
      return d[d.length - 1];
    };
    c.indexOf = function(d, g) {
      for (var e = 0, f = d.length;e < f;e++) {
        if (d[e] === g) {
          return e;
        }
      }
      return -1;
    };
    c.equals = function(d, g) {
      if (d.length !== g.length) {
        return !1;
      }
      for (var e = 0;e < d.length;e++) {
        if (d[e] !== g[e]) {
          return !1;
        }
      }
      return !0;
    };
    c.pushUnique = f;
    c.unique = function(d) {
      for (var g = [], e = 0;e < d.length;e++) {
        f(g, d[e]);
      }
      return g;
    };
    c.copyFrom = function(d, g) {
      d.length = 0;
      c.pushMany(d, g);
    };
    c.ensureTypedArrayCapacity = function(d, g) {
      if (d.length < g) {
        var e = d;
        d = new d.constructor(h.IntegerUtilities.nearestPowerOfTwo(g));
        d.set(e, 0);
      }
      return d;
    };
    c.memCopy = function(d, g, e, f, c) {
      void 0 === e && (e = 0);
      void 0 === f && (f = 0);
      void 0 === c && (c = 0);
      0 < f || 0 < c && c < g.length ? (0 >= c && (c = g.length - f), d.set(g.subarray(f, f + c), e)) : d.set(g, e);
    };
    var e = function() {
      function d(g) {
        void 0 === g && (g = 16);
        this._f32 = this._i32 = this._u16 = this._u8 = null;
        this._offset = 0;
        this.ensureCapacity(g);
      }
      d.prototype.reset = function() {
        this._offset = 0;
      };
      Object.defineProperty(d.prototype, "offset", {get:function() {
        return this._offset;
      }, enumerable:!0, configurable:!0});
      d.prototype.getIndex = function(g) {
        return this._offset / g;
      };
      d.prototype.ensureAdditionalCapacity = function(g) {
        this.ensureCapacity(this._offset + g);
      };
      d.prototype.ensureCapacity = function(g) {
        if (!this._u8) {
          this._u8 = new Uint8Array(g);
        } else {
          if (this._u8.length > g) {
            return;
          }
        }
        var d = 2 * this._u8.length;
        d < g && (d = g);
        g = new Uint8Array(d);
        g.set(this._u8, 0);
        this._u8 = g;
        this._u16 = new Uint16Array(g.buffer);
        this._i32 = new Int32Array(g.buffer);
        this._f32 = new Float32Array(g.buffer);
      };
      d.prototype.writeInt = function(g) {
        this.ensureCapacity(this._offset + 4);
        this.writeIntUnsafe(g);
      };
      d.prototype.writeIntAt = function(g, d) {
        this.ensureCapacity(d + 4);
        this._i32[d >> 2] = g;
      };
      d.prototype.writeIntUnsafe = function(g) {
        this._i32[this._offset >> 2] = g;
        this._offset += 4;
      };
      d.prototype.writeFloat = function(g) {
        this.ensureCapacity(this._offset + 4);
        this.writeFloatUnsafe(g);
      };
      d.prototype.writeFloatUnsafe = function(g) {
        this._f32[this._offset >> 2] = g;
        this._offset += 4;
      };
      d.prototype.write4Floats = function(g, d, e, f) {
        this.ensureCapacity(this._offset + 16);
        this.write4FloatsUnsafe(g, d, e, f);
      };
      d.prototype.write4FloatsUnsafe = function(g, d, e, f) {
        var c = this._offset >> 2;
        this._f32[c + 0] = g;
        this._f32[c + 1] = d;
        this._f32[c + 2] = e;
        this._f32[c + 3] = f;
        this._offset += 16;
      };
      d.prototype.write6Floats = function(g, d, e, f, c, b) {
        this.ensureCapacity(this._offset + 24);
        this.write6FloatsUnsafe(g, d, e, f, c, b);
      };
      d.prototype.write6FloatsUnsafe = function(g, d, e, f, c, b) {
        var a = this._offset >> 2;
        this._f32[a + 0] = g;
        this._f32[a + 1] = d;
        this._f32[a + 2] = e;
        this._f32[a + 3] = f;
        this._f32[a + 4] = c;
        this._f32[a + 5] = b;
        this._offset += 24;
      };
      d.prototype.subF32View = function() {
        return this._f32.subarray(0, this._offset >> 2);
      };
      d.prototype.subI32View = function() {
        return this._i32.subarray(0, this._offset >> 2);
      };
      d.prototype.subU16View = function() {
        return this._u16.subarray(0, this._offset >> 1);
      };
      d.prototype.subU8View = function() {
        return this._u8.subarray(0, this._offset);
      };
      d.prototype.hashWords = function(g, d, e) {
        d = this._i32;
        for (var f = 0;f < e;f++) {
          g = (31 * g | 0) + d[f] | 0;
        }
        return g;
      };
      d.prototype.reserve = function(g) {
        g = g + 3 & -4;
        this.ensureCapacity(this._offset + g);
        this._offset += g;
      };
      return d;
    }();
    c.ArrayWriter = e;
  })(h.ArrayUtilities || (h.ArrayUtilities = {}));
  var b = function() {
    function c(f) {
      this._u8 = new Uint8Array(f);
      this._u16 = new Uint16Array(f);
      this._i32 = new Int32Array(f);
      this._f32 = new Float32Array(f);
      this._offset = 0;
    }
    Object.defineProperty(c.prototype, "offset", {get:function() {
      return this._offset;
    }, enumerable:!0, configurable:!0});
    c.prototype.isEmpty = function() {
      return this._offset === this._u8.length;
    };
    c.prototype.readInt = function() {
      var f = this._i32[this._offset >> 2];
      this._offset += 4;
      return f;
    };
    c.prototype.readFloat = function() {
      var f = this._f32[this._offset >> 2];
      this._offset += 4;
      return f;
    };
    return c;
  }();
  h.ArrayReader = b;
  (function(c) {
    function f(d, g) {
      return Object.prototype.hasOwnProperty.call(d, g);
    }
    function e(d, g) {
      for (var e in g) {
        f(g, e) && (d[e] = g[e]);
      }
    }
    c.boxValue = function(d) {
      return void 0 == d || r(d) ? d : Object(d);
    };
    c.toKeyValueArray = function(d) {
      var g = Object.prototype.hasOwnProperty, e = [], f;
      for (f in d) {
        g.call(d, f) && e.push([f, d[f]]);
      }
      return e;
    };
    c.isPrototypeWriteable = function(d) {
      return Object.getOwnPropertyDescriptor(d, "prototype").writable;
    };
    c.hasOwnProperty = f;
    c.propertyIsEnumerable = function(d, g) {
      return Object.prototype.propertyIsEnumerable.call(d, g);
    };
    c.getPropertyDescriptor = function(d, g) {
      do {
        var e = Object.getOwnPropertyDescriptor(d, g);
        if (e) {
          return e;
        }
        d = Object.getPrototypeOf(d);
      } while (d);
      return null;
    };
    c.hasOwnGetter = function(d, g) {
      var e = Object.getOwnPropertyDescriptor(d, g);
      return !(!e || !e.get);
    };
    c.getOwnGetter = function(d, g) {
      var e = Object.getOwnPropertyDescriptor(d, g);
      return e ? e.get : null;
    };
    c.hasOwnSetter = function(d, g) {
      var e = Object.getOwnPropertyDescriptor(d, g);
      return !(!e || !e.set);
    };
    c.createMap = function() {
      return Object.create(null);
    };
    c.createArrayMap = function() {
      return [];
    };
    c.defineReadOnlyProperty = function(d, g, e) {
      Object.defineProperty(d, g, {value:e, writable:!1, configurable:!0, enumerable:!1});
    };
    c.getOwnPropertyDescriptors = function(d) {
      for (var g = c.createMap(), e = Object.getOwnPropertyNames(d), f = 0;f < e.length;f++) {
        g[e[f]] = Object.getOwnPropertyDescriptor(d, e[f]);
      }
      return g;
    };
    c.cloneObject = function(d) {
      var g = Object.create(Object.getPrototypeOf(d));
      e(g, d);
      return g;
    };
    c.copyProperties = function(d, g) {
      for (var e in g) {
        d[e] = g[e];
      }
    };
    c.copyOwnProperties = e;
    c.copyOwnPropertyDescriptors = function(d, g, e, c, b) {
      void 0 === e && (e = null);
      void 0 === c && (c = !0);
      void 0 === b && (b = !1);
      for (var a in g) {
        if (f(g, a) && (!e || e(a))) {
          var l = Object.getOwnPropertyDescriptor(g, a);
          if (c || !f(d, a)) {
            try {
              b && !1 === l.writable && (l.writable = !0), Object.defineProperty(d, a, l);
            } catch (k) {
              m.assert("Can't define: " + a);
            }
          }
        }
      }
    };
    c.copyPropertiesByList = function(d, g, e) {
      for (var f = 0;f < e.length;f++) {
        var c = e[f];
        d[c] = g[c];
      }
    };
    c.getLatestGetterOrSetterPropertyDescriptor = function(d, g) {
      for (var e = {};d;) {
        var f = Object.getOwnPropertyDescriptor(d, g);
        f && (e.get = e.get || f.get, e.set = e.set || f.set);
        if (e.get && e.set) {
          break;
        }
        d = Object.getPrototypeOf(d);
      }
      return e;
    };
    c.defineNonEnumerableGetterOrSetter = function(d, g, e, f) {
      var b = c.getLatestGetterOrSetterPropertyDescriptor(d, g);
      b.configurable = !0;
      b.enumerable = !1;
      f ? b.get = e : b.set = e;
      Object.defineProperty(d, g, b);
    };
    c.defineNonEnumerableGetter = function(d, g, e) {
      Object.defineProperty(d, g, {get:e, configurable:!0, enumerable:!1});
    };
    c.defineNonEnumerableSetter = function(d, g, e) {
      Object.defineProperty(d, g, {set:e, configurable:!0, enumerable:!1});
    };
    c.defineNonEnumerableProperty = function(d, g, e) {
      Object.defineProperty(d, g, {value:e, writable:!0, configurable:!0, enumerable:!1});
    };
    c.defineNonEnumerableForwardingProperty = function(d, g, e) {
      Object.defineProperty(d, g, {get:l.makeForwardingGetter(e), set:l.makeForwardingSetter(e), writable:!0, configurable:!0, enumerable:!1});
    };
    c.defineNewNonEnumerableProperty = function(d, g, e) {
      c.defineNonEnumerableProperty(d, g, e);
    };
    c.createPublicAliases = function(d, g) {
      for (var e = {value:null, writable:!0, configurable:!0, enumerable:!1}, f = 0;f < g.length;f++) {
        var c = g[f];
        e.value = d[c];
        Object.defineProperty(d, "$Bg" + c, e);
      }
    };
  })(h.ObjectUtilities || (h.ObjectUtilities = {}));
  var l;
  (function(c) {
    c.makeForwardingGetter = function(f) {
      return new Function('return this["' + f + '"]//# sourceURL=fwd-get-' + f + ".as");
    };
    c.makeForwardingSetter = function(f) {
      return new Function("value", 'this["' + f + '"] = value;//# sourceURL=fwd-set-' + f + ".as");
    };
    c.bindSafely = function(f, e) {
      function d() {
        return f.apply(e, arguments);
      }
      d.boundTo = e;
      return d;
    };
  })(l = h.FunctionUtilities || (h.FunctionUtilities = {}));
  (function(c) {
    function f(g) {
      return "string" === typeof g ? '"' + g + '"' : "number" === typeof g || "boolean" === typeof g ? String(g) : g instanceof Array ? "[] " + g.length : typeof g;
    }
    function e(d, e, f) {
      g[0] = d;
      g[1] = e;
      g[2] = f;
      return g.join("");
    }
    function d(g, d, e, f) {
      y[0] = g;
      y[1] = d;
      y[2] = e;
      y[3] = f;
      return y.join("");
    }
    c.repeatString = function(g, d) {
      for (var e = "", f = 0;f < d;f++) {
        e += g;
      }
      return e;
    };
    c.memorySizeToString = function(g) {
      g |= 0;
      return 1024 > g ? g + " B" : 1048576 > g ? (g / 1024).toFixed(2) + "KB" : (g / 1048576).toFixed(2) + "MB";
    };
    c.toSafeString = f;
    c.toSafeArrayString = function(g) {
      for (var d = [], e = 0;e < g.length;e++) {
        d.push(f(g[e]));
      }
      return d.join(", ");
    };
    c.utf8decode = function(g) {
      for (var d = new Uint8Array(4 * g.length), e = 0, f = 0, c = g.length;f < c;f++) {
        var x = g.charCodeAt(f);
        if (127 >= x) {
          d[e++] = x;
        } else {
          if (55296 <= x && 56319 >= x) {
            var y = g.charCodeAt(f + 1);
            56320 <= y && 57343 >= y && (x = ((x & 1023) << 10) + (y & 1023) + 65536, ++f);
          }
          0 !== (x & 4292870144) ? (d[e++] = 248 | x >>> 24 & 3, d[e++] = 128 | x >>> 18 & 63, d[e++] = 128 | x >>> 12 & 63, d[e++] = 128 | x >>> 6 & 63) : 0 !== (x & 4294901760) ? (d[e++] = 240 | x >>> 18 & 7, d[e++] = 128 | x >>> 12 & 63, d[e++] = 128 | x >>> 6 & 63) : 0 !== (x & 4294965248) ? (d[e++] = 224 | x >>> 12 & 15, d[e++] = 128 | x >>> 6 & 63) : d[e++] = 192 | x >>> 6 & 31;
          d[e++] = 128 | x & 63;
        }
      }
      return d.subarray(0, e);
    };
    c.utf8encode = function(g) {
      for (var d = 0, e = "";d < g.length;) {
        var f = g[d++] & 255;
        if (127 >= f) {
          e += String.fromCharCode(f);
        } else {
          var c = 192, x = 5;
          do {
            if ((f & (c >> 1 | 128)) === c) {
              break;
            }
            c = c >> 1 | 128;
            --x;
          } while (0 <= x);
          if (0 >= x) {
            e += String.fromCharCode(f);
          } else {
            for (var f = f & (1 << x) - 1, c = !1, y = 5;y >= x;--y) {
              var b = g[d++];
              if (128 != (b & 192)) {
                c = !0;
                break;
              }
              f = f << 6 | b & 63;
            }
            if (c) {
              for (x = d - (7 - y);x < d;++x) {
                e += String.fromCharCode(g[x] & 255);
              }
            } else {
              e = 65536 <= f ? e + String.fromCharCode(f - 65536 >> 10 & 1023 | 55296, f & 1023 | 56320) : e + String.fromCharCode(f);
            }
          }
        }
      }
      return e;
    };
    c.base64ArrayBuffer = function(g) {
      var f = "";
      g = new Uint8Array(g);
      for (var c = g.byteLength, x = c % 3, c = c - x, y, b, a, l, T = 0;T < c;T += 3) {
        l = g[T] << 16 | g[T + 1] << 8 | g[T + 2], y = (l & 16515072) >> 18, b = (l & 258048) >> 12, a = (l & 4032) >> 6, l &= 63, f += d("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[y], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[b], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[a], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[l]);
      }
      1 == x ? (l = g[c], f += e("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(l & 252) >> 2], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(l & 3) << 4], "==")) : 2 == x && (l = g[c] << 8 | g[c + 1], f += d("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(l & 64512) >> 10], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(l & 1008) >> 4], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(l & 15) << 
      2], "="));
      return f;
    };
    c.escapeString = function(g) {
      void 0 !== g && (g = g.replace(/[^\w$]/gi, "$"), /^\d/.test(g) && (g = "$" + g));
      return g;
    };
    c.fromCharCodeArray = function(g) {
      for (var d = "", e = 0;e < g.length;e += 16384) {
        var f = Math.min(g.length - e, 16384), d = d + String.fromCharCode.apply(null, g.subarray(e, e + f))
      }
      return d;
    };
    c.variableLengthEncodeInt32 = function(g) {
      for (var d = 32 - Math.clz32(g), e = Math.ceil(d / 6), d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[e], e = e - 1;0 <= e;e--) {
        d += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[g >> 6 * e & 63];
      }
      return d;
    };
    c.toEncoding = function(g) {
      return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[g];
    };
    c.fromEncoding = function(g) {
      if (65 <= g && 90 >= g) {
        return g - 65;
      }
      if (97 <= g && 122 >= g) {
        return g - 71;
      }
      if (48 <= g && 57 >= g) {
        return g + 4;
      }
      if (36 === g) {
        return 62;
      }
      if (95 === g) {
        return 63;
      }
    };
    c.variableLengthDecodeInt32 = function(g) {
      for (var d = c.fromEncoding(g.charCodeAt(0)), e = 0, f = 0;f < d;f++) {
        var x = 6 * (d - f - 1), e = e | c.fromEncoding(g.charCodeAt(1 + f)) << x
      }
      return e;
    };
    c.trimMiddle = function(g, d) {
      if (g.length <= d) {
        return g;
      }
      var e = d >> 1, f = d - e - 1;
      return g.substr(0, e) + "\u2026" + g.substr(g.length - f, f);
    };
    c.multiple = function(g, d) {
      for (var e = "", f = 0;f < d;f++) {
        e += g;
      }
      return e;
    };
    c.indexOfAny = function(g, d, e) {
      for (var f = g.length, c = 0;c < d.length;c++) {
        var x = g.indexOf(d[c], e);
        0 <= x && (f = Math.min(f, x));
      }
      return f === g.length ? -1 : f;
    };
    var g = Array(3), y = Array(4), x = Array(5), b = Array(6), a = Array(7), l = Array(8), k = Array(9);
    c.concat3 = e;
    c.concat4 = d;
    c.concat5 = function(g, d, e, f, c) {
      x[0] = g;
      x[1] = d;
      x[2] = e;
      x[3] = f;
      x[4] = c;
      return x.join("");
    };
    c.concat6 = function(g, d, e, f, c, x) {
      b[0] = g;
      b[1] = d;
      b[2] = e;
      b[3] = f;
      b[4] = c;
      b[5] = x;
      return b.join("");
    };
    c.concat7 = function(g, d, e, f, c, x, y) {
      a[0] = g;
      a[1] = d;
      a[2] = e;
      a[3] = f;
      a[4] = c;
      a[5] = x;
      a[6] = y;
      return a.join("");
    };
    c.concat8 = function(g, d, e, f, c, x, y, b) {
      l[0] = g;
      l[1] = d;
      l[2] = e;
      l[3] = f;
      l[4] = c;
      l[5] = x;
      l[6] = y;
      l[7] = b;
      return l.join("");
    };
    c.concat9 = function(g, d, e, f, c, x, y, b, a) {
      k[0] = g;
      k[1] = d;
      k[2] = e;
      k[3] = f;
      k[4] = c;
      k[5] = x;
      k[6] = y;
      k[7] = b;
      k[8] = a;
      return k.join("");
    };
  })(h.StringUtilities || (h.StringUtilities = {}));
  (function(c) {
    var f = new Uint8Array([7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21]), e = new Int32Array([-680876936, -389564586, 606105819, -1044525330, -176418897, 1200080426, -1473231341, -45705983, 1770035416, -1958414417, -42063, -1990404162, 1804603682, -40341101, -1502002290, 1236535329, -165796510, -1069501632, 
    643717713, -373897302, -701558691, 38016083, -660478335, -405537848, 568446438, -1019803690, -187363961, 1163531501, -1444681467, -51403784, 1735328473, -1926607734, -378558, -2022574463, 1839030562, -35309556, -1530992060, 1272893353, -155497632, -1094730640, 681279174, -358537222, -722521979, 76029189, -640364487, -421815835, 530742520, -995338651, -198630844, 1126891415, -1416354905, -57434055, 1700485571, -1894986606, -1051523, -2054922799, 1873313359, -30611744, -1560198380, 1309151649, 
    -145523070, -1120210379, 718787259, -343485551]);
    c.hashBytesTo32BitsMD5 = function(d, g, c) {
      var x = 1732584193, b = -271733879, a = -1732584194, l = 271733878, k = c + 72 & -64, v = new Uint8Array(k), n;
      for (n = 0;n < c;++n) {
        v[n] = d[g++];
      }
      v[n++] = 128;
      for (d = k - 8;n < d;) {
        v[n++] = 0;
      }
      v[n++] = c << 3 & 255;
      v[n++] = c >> 5 & 255;
      v[n++] = c >> 13 & 255;
      v[n++] = c >> 21 & 255;
      v[n++] = c >>> 29 & 255;
      v[n++] = 0;
      v[n++] = 0;
      v[n++] = 0;
      d = new Int32Array(16);
      for (n = 0;n < k;) {
        for (c = 0;16 > c;++c, n += 4) {
          d[c] = v[n] | v[n + 1] << 8 | v[n + 2] << 16 | v[n + 3] << 24;
        }
        var u = x;
        g = b;
        var t = a, m = l, q, h;
        for (c = 0;64 > c;++c) {
          16 > c ? (q = g & t | ~g & m, h = c) : 32 > c ? (q = m & g | ~m & t, h = 5 * c + 1 & 15) : 48 > c ? (q = g ^ t ^ m, h = 3 * c + 5 & 15) : (q = t ^ (g | ~m), h = 7 * c & 15);
          var w = m, u = u + q + e[c] + d[h] | 0;
          q = f[c];
          m = t;
          t = g;
          g = g + (u << q | u >>> 32 - q) | 0;
          u = w;
        }
        x = x + u | 0;
        b = b + g | 0;
        a = a + t | 0;
        l = l + m | 0;
      }
      return x;
    };
    c.hashBytesTo32BitsAdler = function(d, g, e) {
      var f = 1, c = 0;
      for (e = g + e;g < e;++g) {
        f = (f + (d[g] & 255)) % 65521, c = (c + f) % 65521;
      }
      return c << 16 | f;
    };
    c.mixHash = function(d, g) {
      return (31 * d | 0) + g | 0;
    };
  })(h.HashUtilities || (h.HashUtilities = {}));
  var u = function() {
    function c() {
    }
    c.seed = function(f) {
      c._state[0] = f;
      c._state[1] = f;
    };
    c.reset = function() {
      c._state[0] = 57005;
      c._state[1] = 48879;
    };
    c.next = function() {
      var f = this._state, e = Math.imul(18273, f[0] & 65535) + (f[0] >>> 16) | 0;
      f[0] = e;
      var d = Math.imul(36969, f[1] & 65535) + (f[1] >>> 16) | 0;
      f[1] = d;
      f = (e << 16) + (d & 65535) | 0;
      return 2.3283064365386963E-10 * (0 > f ? f + 4294967296 : f);
    };
    c._state = new Uint32Array([57005, 48879]);
    return c;
  }();
  h.Random = u;
  Math.random = function() {
    return u.next();
  };
  h.installTimeWarper = function() {
    var c = Date, f = 1428107694580;
    jsGlobal.Date = function(e, d, g, y, x, b, a) {
      switch(arguments.length) {
        case 0:
          return new c(f);
        case 1:
          return new c(e);
        case 2:
          return new c(e, d);
        case 3:
          return new c(e, d, g);
        case 4:
          return new c(e, d, g, y);
        case 5:
          return new c(e, d, g, y, x);
        case 6:
          return new c(e, d, g, y, x, b);
        default:
          return new c(e, d, g, y, x, b, a);
      }
    };
    jsGlobal.Date.now = function() {
      return f += 10;
    };
    jsGlobal.Date.UTC = function() {
      return c.UTC.apply(c, arguments);
    };
  };
  (function() {
    function c() {
      this.id = "$weakmap" + f++;
    }
    if ("function" !== typeof jsGlobal.WeakMap) {
      var f = 0;
      c.prototype = {has:function(e) {
        return e.hasOwnProperty(this.id);
      }, get:function(e, d) {
        return e.hasOwnProperty(this.id) ? e[this.id] : d;
      }, set:function(e, d) {
        Object.defineProperty(e, this.id, {value:d, enumerable:!1, configurable:!0});
      }, delete:function(e) {
        delete e[this.id];
      }};
      jsGlobal.WeakMap = c;
    }
  })();
  b = function() {
    function c() {
      "undefined" !== typeof ShumwayCom && ShumwayCom.getWeakMapKeys ? (this._map = new WeakMap, this._id = 0, this._newAdditions = []) : this._list = [];
    }
    c.prototype.clear = function() {
      this._map ? this._map.clear() : this._list.length = 0;
    };
    c.prototype.push = function(f) {
      this._map ? (this._map.set(f, this._id++), this._newAdditions.forEach(function(e) {
        e.push(f);
      })) : this._list.push(f);
    };
    c.prototype.remove = function(f) {
      this._map ? this._map.delete(f) : this._list[this._list.indexOf(f)] = null;
    };
    c.prototype.forEach = function(f) {
      if (this._map) {
        var e = [];
        this._newAdditions.push(e);
        var d = this._map, g = ShumwayCom.getWeakMapKeys(d);
        g.sort(function(g, e) {
          return d.get(g) - d.get(e);
        });
        g.forEach(function(g) {
          0 !== g._referenceCount && f(g);
        });
        e.forEach(function(g) {
          0 !== g._referenceCount && f(g);
        });
        this._newAdditions.splice(this._newAdditions.indexOf(e), 1);
      } else {
        for (var e = this._list, c = 0, g = 0;g < e.length;g++) {
          var x = e[g];
          x && (0 === x._referenceCount ? (e[g] = null, c++) : f(x));
        }
        if (16 < c && c > e.length >> 2) {
          c = [];
          for (g = 0;g < e.length;g++) {
            (x = e[g]) && 0 < x._referenceCount && c.push(x);
          }
          this._list = c;
        }
      }
    };
    Object.defineProperty(c.prototype, "length", {get:function() {
      return this._map ? -1 : this._list.length;
    }, enumerable:!0, configurable:!0});
    return c;
  }();
  h.WeakList = b;
  var k;
  (function(c) {
    c.pow2 = function(f) {
      return f === (f | 0) ? 0 > f ? 1 / (1 << -f) : 1 << f : Math.pow(2, f);
    };
    c.clamp = function(f, e, d) {
      return Math.max(e, Math.min(d, f));
    };
    c.roundHalfEven = function(f) {
      if (.5 === Math.abs(f % 1)) {
        var e = Math.floor(f);
        return 0 === e % 2 ? e : Math.ceil(f);
      }
      return Math.round(f);
    };
    c.altTieBreakRound = function(f, e) {
      return .5 !== Math.abs(f % 1) || e ? Math.round(f) : f | 0;
    };
    c.epsilonEquals = function(f, e) {
      return 1E-7 > Math.abs(f - e);
    };
  })(k = h.NumberUtilities || (h.NumberUtilities = {}));
  (function(c) {
    c[c.MaxU16 = 65535] = "MaxU16";
    c[c.MaxI16 = 32767] = "MaxI16";
    c[c.MinI16 = -32768] = "MinI16";
  })(h.Numbers || (h.Numbers = {}));
  var t;
  (function(c) {
    function f(g) {
      return 256 * g << 16 >> 16;
    }
    function e(g) {
      return g / 256;
    }
    var d = new ArrayBuffer(8);
    c.i8 = new Int8Array(d);
    c.u8 = new Uint8Array(d);
    c.i32 = new Int32Array(d);
    c.f32 = new Float32Array(d);
    c.f64 = new Float64Array(d);
    c.nativeLittleEndian = 1 === (new Int8Array((new Int32Array([1])).buffer))[0];
    c.floatToInt32 = function(g) {
      c.f32[0] = g;
      return c.i32[0];
    };
    c.int32ToFloat = function(g) {
      c.i32[0] = g;
      return c.f32[0];
    };
    c.swap16 = function(g) {
      return (g & 255) << 8 | g >> 8 & 255;
    };
    c.swap32 = function(g) {
      return (g & 255) << 24 | (g & 65280) << 8 | g >> 8 & 65280 | g >> 24 & 255;
    };
    c.toS8U8 = f;
    c.fromS8U8 = e;
    c.clampS8U8 = function(g) {
      return e(f(g));
    };
    c.toS16 = function(g) {
      return g << 16 >> 16;
    };
    c.bitCount = function(g) {
      g -= g >> 1 & 1431655765;
      g = (g & 858993459) + (g >> 2 & 858993459);
      return 16843009 * (g + (g >> 4) & 252645135) >> 24;
    };
    c.ones = function(g) {
      g -= g >> 1 & 1431655765;
      g = (g & 858993459) + (g >> 2 & 858993459);
      return 16843009 * (g + (g >> 4) & 252645135) >> 24;
    };
    c.trailingZeros = function(g) {
      return c.ones((g & -g) - 1);
    };
    c.getFlags = function(g, d) {
      var e = "";
      for (g = 0;g < d.length;g++) {
        g & 1 << g && (e += d[g] + " ");
      }
      return 0 === e.length ? "" : e.trim();
    };
    c.isPowerOfTwo = function(g) {
      return g && 0 === (g & g - 1);
    };
    c.roundToMultipleOfFour = function(g) {
      return g + 3 & -4;
    };
    c.nearestPowerOfTwo = function(g) {
      g--;
      g |= g >> 1;
      g |= g >> 2;
      g |= g >> 4;
      g |= g >> 8;
      g |= g >> 16;
      g++;
      return g;
    };
    c.roundToMultipleOfPowerOfTwo = function(g, d) {
      var e = (1 << d) - 1;
      return g + e & ~e;
    };
    c.toHEX = function(g) {
      return "0x" + ("00000000" + (0 > g ? 4294967295 + g + 1 : g).toString(16)).substr(-8);
    };
    Math.imul || (Math.imul = function(g, d) {
      var e = g & 65535, f = d & 65535;
      return e * f + ((g >>> 16 & 65535) * f + e * (d >>> 16 & 65535) << 16 >>> 0) | 0;
    });
    Math.clz32 || (Math.clz32 = function(g) {
      g |= g >> 1;
      g |= g >> 2;
      g |= g >> 4;
      g |= g >> 8;
      return 32 - c.ones(g | g >> 16);
    });
  })(t = h.IntegerUtilities || (h.IntegerUtilities = {}));
  (function(c) {
    function f(e, d, g, f, c, b) {
      return (g - e) * (b - d) - (f - d) * (c - e);
    }
    c.pointInPolygon = function(e, d, g) {
      for (var f = 0, c = g.length - 2, b = 0;b < c;b += 2) {
        var a = g[b + 0], l = g[b + 1], k = g[b + 2], v = g[b + 3];
        (l <= d && v > d || l > d && v <= d) && e < a + (d - l) / (v - l) * (k - a) && f++;
      }
      return 1 === (f & 1);
    };
    c.signedArea = f;
    c.counterClockwise = function(e, d, g, c, x, b) {
      return 0 < f(e, d, g, c, x, b);
    };
    c.clockwise = function(e, d, g, c, x, b) {
      return 0 > f(e, d, g, c, x, b);
    };
    c.pointInPolygonInt32 = function(e, d, g) {
      e |= 0;
      d |= 0;
      for (var f = 0, c = g.length - 2, b = 0;b < c;b += 2) {
        var a = g[b + 0], l = g[b + 1], k = g[b + 2], v = g[b + 3];
        (l <= d && v > d || l > d && v <= d) && e < a + (d - l) / (v - l) * (k - a) && f++;
      }
      return 1 === (f & 1);
    };
  })(h.GeometricUtilities || (h.GeometricUtilities = {}));
  (function(c) {
    c[c.Error = 1] = "Error";
    c[c.Warn = 2] = "Warn";
    c[c.Debug = 4] = "Debug";
    c[c.Log = 8] = "Log";
    c[c.Info = 16] = "Info";
    c[c.All = 31] = "All";
  })(h.LogLevel || (h.LogLevel = {}));
  b = function() {
    function c(f, e) {
      void 0 === f && (f = !1);
      this._tab = "  ";
      this._padding = "";
      this._suppressOutput = f;
      this._out = e || c._consoleOut;
      this._outNoNewline = e || c._consoleOutNoNewline;
    }
    Object.defineProperty(c.prototype, "suppressOutput", {get:function() {
      return this._suppressOutput;
    }, set:function(f) {
      this._suppressOutput = f;
    }, enumerable:!0, configurable:!0});
    c.prototype.write = function(f, e) {
      void 0 === f && (f = "");
      void 0 === e && (e = !1);
      this._suppressOutput || this._outNoNewline((e ? this._padding : "") + f);
    };
    c.prototype.writeLn = function(f) {
      void 0 === f && (f = "");
      this._suppressOutput || this._out(this._padding + f);
    };
    c.prototype.writeObject = function(f, e) {
      void 0 === f && (f = "");
      this._suppressOutput || this._out(this._padding + f, e);
    };
    c.prototype.writeTimeLn = function(f) {
      void 0 === f && (f = "");
      this._suppressOutput || this._out(this._padding + performance.now().toFixed(2) + " " + f);
    };
    c.prototype.writeComment = function(f) {
      f = (f || "").split("\n");
      if (1 === f.length) {
        this.writeLn("// " + f[0]);
      } else {
        this.writeLn("/**");
        for (var e = 0;e < f.length;e++) {
          this.writeLn(" * " + f[e]);
        }
        this.writeLn(" */");
      }
    };
    c.prototype.writeLns = function(f) {
      f = (f || "").split("\n");
      for (var e = 0;e < f.length;e++) {
        this.writeLn(f[e]);
      }
    };
    c.prototype.errorLn = function(f) {
      c.logLevel & 1 && this.boldRedLn(f);
    };
    c.prototype.warnLn = function(f) {
      c.logLevel & 2 && this.yellowLn(f);
    };
    c.prototype.debugLn = function(f) {
      c.logLevel & 4 && this.purpleLn(f);
    };
    c.prototype.logLn = function(f) {
      c.logLevel & 8 && this.writeLn(f);
    };
    c.prototype.infoLn = function(f) {
      c.logLevel & 16 && this.writeLn(f);
    };
    c.prototype.yellowLn = function(f) {
      this.colorLn(c.YELLOW, f);
    };
    c.prototype.greenLn = function(f) {
      this.colorLn(c.GREEN, f);
    };
    c.prototype.boldRedLn = function(f) {
      this.colorLn(c.BOLD_RED, f);
    };
    c.prototype.redLn = function(f) {
      this.colorLn(c.RED, f);
    };
    c.prototype.purpleLn = function(f) {
      this.colorLn(c.PURPLE, f);
    };
    c.prototype.colorLn = function(f, e) {
      this._suppressOutput || (inBrowser ? this._out(this._padding + e) : this._out(this._padding + f + e + c.ENDC));
    };
    c.prototype.redLns = function(f) {
      this.colorLns(c.RED, f);
    };
    c.prototype.colorLns = function(f, e) {
      for (var d = (e || "").split("\n"), g = 0;g < d.length;g++) {
        this.colorLn(f, d[g]);
      }
    };
    c.prototype.enter = function(f) {
      this._suppressOutput || this._out(this._padding + f);
      this.indent();
    };
    c.prototype.leaveAndEnter = function(f) {
      this.leave(f);
      this.indent();
    };
    c.prototype.leave = function(f) {
      this.outdent();
      !this._suppressOutput && f && this._out(this._padding + f);
    };
    c.prototype.indent = function() {
      this._padding += this._tab;
    };
    c.prototype.outdent = function() {
      0 < this._padding.length && (this._padding = this._padding.substring(0, this._padding.length - this._tab.length));
    };
    c.prototype.writeArray = function(f, e, d) {
      void 0 === e && (e = !1);
      void 0 === d && (d = !1);
      e = e || !1;
      for (var g = 0, c = f.length;g < c;g++) {
        var x = "";
        e && (x = null === f[g] ? "null" : void 0 === f[g] ? "undefined" : f[g].constructor.name, x += " ");
        var b = d ? "" : ("" + g).padRight(" ", 4);
        this.writeLn(b + x + f[g]);
      }
    };
    c.PURPLE = "\u001b[94m";
    c.YELLOW = "\u001b[93m";
    c.GREEN = "\u001b[92m";
    c.RED = "\u001b[91m";
    c.BOLD_RED = "\u001b[1;91m";
    c.ENDC = "\u001b[0m";
    c.logLevel = 31;
    c._consoleOut = console.log.bind(console);
    c._consoleOutNoNewline = console.log.bind(console);
    return c;
  }();
  h.IndentingWriter = b;
  var q = function() {
    return function(c, f) {
      this.value = c;
      this.next = f;
    };
  }(), b = function() {
    function c(f) {
      this._compare = f;
      this._head = null;
      this._length = 0;
    }
    c.prototype.push = function(f) {
      this._length++;
      if (this._head) {
        var e = this._head, d = null;
        f = new q(f, null);
        for (var g = this._compare;e;) {
          if (0 < g(e.value, f.value)) {
            d ? (f.next = e, d.next = f) : (f.next = this._head, this._head = f);
            return;
          }
          d = e;
          e = e.next;
        }
        d.next = f;
      } else {
        this._head = new q(f, null);
      }
    };
    c.prototype.forEach = function(f) {
      for (var e = this._head, d = null;e;) {
        var g = f(e.value);
        if (g === c.RETURN) {
          break;
        } else {
          g === c.DELETE ? e = d ? d.next = e.next : this._head = this._head.next : (d = e, e = e.next);
        }
      }
    };
    c.prototype.isEmpty = function() {
      return !this._head;
    };
    c.prototype.pop = function() {
      if (this._head) {
        this._length--;
        var f = this._head;
        this._head = this._head.next;
        return f.value;
      }
    };
    c.prototype.contains = function(f) {
      for (var e = this._head;e;) {
        if (e.value === f) {
          return !0;
        }
        e = e.next;
      }
      return !1;
    };
    c.prototype.toString = function() {
      for (var f = "[", e = this._head;e;) {
        f += e.value.toString(), (e = e.next) && (f += ",");
      }
      return f + "]";
    };
    c.RETURN = 1;
    c.DELETE = 2;
    return c;
  }();
  h.SortedList = b;
  b = function() {
    function c(f, e) {
      void 0 === e && (e = 12);
      this.start = this.index = 0;
      this._size = 1 << e;
      this._mask = this._size - 1;
      this.array = new f(this._size);
    }
    c.prototype.get = function(f) {
      return this.array[f];
    };
    c.prototype.forEachInReverse = function(f) {
      if (!this.isEmpty()) {
        for (var e = 0 === this.index ? this._size - 1 : this.index - 1, d = this.start - 1 & this._mask;e !== d && !f(this.array[e], e);) {
          e = 0 === e ? this._size - 1 : e - 1;
        }
      }
    };
    c.prototype.write = function(f) {
      this.array[this.index] = f;
      this.index = this.index + 1 & this._mask;
      this.index === this.start && (this.start = this.start + 1 & this._mask);
    };
    c.prototype.isFull = function() {
      return (this.index + 1 & this._mask) === this.start;
    };
    c.prototype.isEmpty = function() {
      return this.index === this.start;
    };
    c.prototype.reset = function() {
      this.start = this.index = 0;
    };
    return c;
  }();
  h.CircularBuffer = b;
  (function(c) {
    function f(g) {
      return g + (c.BITS_PER_WORD - 1) >> c.ADDRESS_BITS_PER_WORD << c.ADDRESS_BITS_PER_WORD;
    }
    function e(g, d) {
      g = g || "1";
      d = d || "0";
      for (var e = "", f = 0;f < length;f++) {
        e += this.get(f) ? g : d;
      }
      return e;
    }
    function d(g) {
      for (var d = [], e = 0;e < length;e++) {
        this.get(e) && d.push(g ? g[e] : e);
      }
      return d.join(", ");
    }
    c.ADDRESS_BITS_PER_WORD = 5;
    c.BITS_PER_WORD = 1 << c.ADDRESS_BITS_PER_WORD;
    c.BIT_INDEX_MASK = c.BITS_PER_WORD - 1;
    var g = function() {
      function g(d) {
        this.size = f(d);
        this.dirty = this.count = 0;
        this.length = d;
        this.bits = new Uint32Array(this.size >> c.ADDRESS_BITS_PER_WORD);
      }
      g.prototype.recount = function() {
        if (this.dirty) {
          for (var g = this.bits, d = 0, e = 0, f = g.length;e < f;e++) {
            var c = g[e], c = c - (c >> 1 & 1431655765), c = (c & 858993459) + (c >> 2 & 858993459), d = d + (16843009 * (c + (c >> 4) & 252645135) >> 24)
          }
          this.count = d;
          this.dirty = 0;
        }
      };
      g.prototype.set = function(g) {
        var d = g >> c.ADDRESS_BITS_PER_WORD, e = this.bits[d];
        g = e | 1 << (g & c.BIT_INDEX_MASK);
        this.bits[d] = g;
        this.dirty |= e ^ g;
      };
      g.prototype.setAll = function() {
        for (var g = this.bits, d = 0, e = g.length;d < e;d++) {
          g[d] = 4294967295;
        }
        this.count = this.size;
        this.dirty = 0;
      };
      g.prototype.assign = function(g) {
        this.count = g.count;
        this.dirty = g.dirty;
        this.size = g.size;
        for (var d = 0, e = this.bits.length;d < e;d++) {
          this.bits[d] = g.bits[d];
        }
      };
      g.prototype.clear = function(g) {
        var d = g >> c.ADDRESS_BITS_PER_WORD, e = this.bits[d];
        g = e & ~(1 << (g & c.BIT_INDEX_MASK));
        this.bits[d] = g;
        this.dirty |= e ^ g;
      };
      g.prototype.get = function(g) {
        return 0 !== (this.bits[g >> c.ADDRESS_BITS_PER_WORD] & 1 << (g & c.BIT_INDEX_MASK));
      };
      g.prototype.clearAll = function() {
        for (var g = this.bits, d = 0, e = g.length;d < e;d++) {
          g[d] = 0;
        }
        this.dirty = this.count = 0;
      };
      g.prototype._union = function(g) {
        var d = this.dirty, e = this.bits;
        g = g.bits;
        for (var f = 0, c = e.length;f < c;f++) {
          var x = e[f], y = x | g[f];
          e[f] = y;
          d |= x ^ y;
        }
        this.dirty = d;
      };
      g.prototype.intersect = function(g) {
        var d = this.dirty, e = this.bits;
        g = g.bits;
        for (var f = 0, c = e.length;f < c;f++) {
          var x = e[f], y = x & g[f];
          e[f] = y;
          d |= x ^ y;
        }
        this.dirty = d;
      };
      g.prototype.subtract = function(g) {
        var d = this.dirty, e = this.bits;
        g = g.bits;
        for (var f = 0, c = e.length;f < c;f++) {
          var x = e[f], y = x & ~g[f];
          e[f] = y;
          d |= x ^ y;
        }
        this.dirty = d;
      };
      g.prototype.negate = function() {
        for (var g = this.dirty, d = this.bits, e = 0, f = d.length;e < f;e++) {
          var c = d[e], x = ~c;
          d[e] = x;
          g |= c ^ x;
        }
        this.dirty = g;
      };
      g.prototype.forEach = function(g) {
        for (var d = this.bits, e = 0, f = d.length;e < f;e++) {
          var x = d[e];
          if (x) {
            for (var y = 0;y < c.BITS_PER_WORD;y++) {
              x & 1 << y && g(e * c.BITS_PER_WORD + y);
            }
          }
        }
      };
      g.prototype.toArray = function() {
        for (var g = [], d = this.bits, e = 0, f = d.length;e < f;e++) {
          var x = d[e];
          if (x) {
            for (var y = 0;y < c.BITS_PER_WORD;y++) {
              x & 1 << y && g.push(e * c.BITS_PER_WORD + y);
            }
          }
        }
        return g;
      };
      g.prototype.equals = function(g) {
        if (this.size !== g.size) {
          return !1;
        }
        var d = this.bits;
        g = g.bits;
        for (var e = 0, f = d.length;e < f;e++) {
          if (d[e] !== g[e]) {
            return !1;
          }
        }
        return !0;
      };
      g.prototype.contains = function(g) {
        if (this.size !== g.size) {
          return !1;
        }
        var d = this.bits;
        g = g.bits;
        for (var e = 0, f = d.length;e < f;e++) {
          if ((d[e] | g[e]) !== d[e]) {
            return !1;
          }
        }
        return !0;
      };
      g.prototype.isEmpty = function() {
        this.recount();
        return 0 === this.count;
      };
      g.prototype.clone = function() {
        var d = new g(this.length);
        d._union(this);
        return d;
      };
      return g;
    }();
    c.Uint32ArrayBitSet = g;
    var y = function() {
      function g(d) {
        this.dirty = this.count = 0;
        this.size = f(d);
        this.bits = 0;
        this.singleWord = !0;
        this.length = d;
      }
      g.prototype.recount = function() {
        if (this.dirty) {
          var g = this.bits, g = g - (g >> 1 & 1431655765), g = (g & 858993459) + (g >> 2 & 858993459);
          this.count = 0 + (16843009 * (g + (g >> 4) & 252645135) >> 24);
          this.dirty = 0;
        }
      };
      g.prototype.set = function(g) {
        var d = this.bits;
        this.bits = g = d | 1 << (g & c.BIT_INDEX_MASK);
        this.dirty |= d ^ g;
      };
      g.prototype.setAll = function() {
        this.bits = 4294967295;
        this.count = this.size;
        this.dirty = 0;
      };
      g.prototype.assign = function(g) {
        this.count = g.count;
        this.dirty = g.dirty;
        this.size = g.size;
        this.bits = g.bits;
      };
      g.prototype.clear = function(g) {
        var d = this.bits;
        this.bits = g = d & ~(1 << (g & c.BIT_INDEX_MASK));
        this.dirty |= d ^ g;
      };
      g.prototype.get = function(g) {
        return 0 !== (this.bits & 1 << (g & c.BIT_INDEX_MASK));
      };
      g.prototype.clearAll = function() {
        this.dirty = this.count = this.bits = 0;
      };
      g.prototype._union = function(g) {
        var d = this.bits;
        this.bits = g = d | g.bits;
        this.dirty = d ^ g;
      };
      g.prototype.intersect = function(g) {
        var d = this.bits;
        this.bits = g = d & g.bits;
        this.dirty = d ^ g;
      };
      g.prototype.subtract = function(g) {
        var d = this.bits;
        this.bits = g = d & ~g.bits;
        this.dirty = d ^ g;
      };
      g.prototype.negate = function() {
        var g = this.bits, d = ~g;
        this.bits = d;
        this.dirty = g ^ d;
      };
      g.prototype.forEach = function(g) {
        var d = this.bits;
        if (d) {
          for (var e = 0;e < c.BITS_PER_WORD;e++) {
            d & 1 << e && g(e);
          }
        }
      };
      g.prototype.toArray = function() {
        var g = [], d = this.bits;
        if (d) {
          for (var e = 0;e < c.BITS_PER_WORD;e++) {
            d & 1 << e && g.push(e);
          }
        }
        return g;
      };
      g.prototype.equals = function(g) {
        return this.bits === g.bits;
      };
      g.prototype.contains = function(g) {
        var d = this.bits;
        return (d | g.bits) === d;
      };
      g.prototype.isEmpty = function() {
        this.recount();
        return 0 === this.count;
      };
      g.prototype.clone = function() {
        var d = new g(this.length);
        d._union(this);
        return d;
      };
      return g;
    }();
    c.Uint32BitSet = y;
    y.prototype.toString = d;
    y.prototype.toBitString = e;
    g.prototype.toString = d;
    g.prototype.toBitString = e;
    c.BitSetFunctor = function(d) {
      var e = 1 === f(d) >> c.ADDRESS_BITS_PER_WORD ? y : g;
      return function() {
        return new e(d);
      };
    };
  })(h.BitSets || (h.BitSets = {}));
  b = function() {
    function c() {
    }
    c.randomStyle = function() {
      c._randomStyleCache || (c._randomStyleCache = "#ff5e3a #ff9500 #ffdb4c #87fc70 #52edc7 #1ad6fd #c644fc #ef4db6 #4a4a4a #dbddde #ff3b30 #ff9500 #ffcc00 #4cd964 #34aadc #007aff #5856d6 #ff2d55 #8e8e93 #c7c7cc #5ad427 #c86edf #d1eefc #e0f8d8 #fb2b69 #f7f7f7 #1d77ef #d6cec3 #55efcb #ff4981 #ffd3e0 #f7f7f7 #ff1300 #1f1f21 #bdbec2 #ff3a2d".split(" "));
      return c._randomStyleCache[c._nextStyle++ % c._randomStyleCache.length];
    };
    c.gradientColor = function(f) {
      return c._gradient[c._gradient.length * k.clamp(f, 0, 1) | 0];
    };
    c.contrastStyle = function(f) {
      f = parseInt(f.substr(1), 16);
      return 128 <= (299 * (f >> 16) + 587 * (f >> 8 & 255) + 114 * (f & 255)) / 1E3 ? "#000000" : "#ffffff";
    };
    c.reset = function() {
      c._nextStyle = 0;
    };
    c.TabToolbar = "#252c33";
    c.Toolbars = "#343c45";
    c.HighlightBlue = "#1d4f73";
    c.LightText = "#f5f7fa";
    c.ForegroundText = "#b6babf";
    c.Black = "#000000";
    c.VeryDark = "#14171a";
    c.Dark = "#181d20";
    c.Light = "#a9bacb";
    c.Grey = "#8fa1b2";
    c.DarkGrey = "#5f7387";
    c.Blue = "#46afe3";
    c.Purple = "#6b7abb";
    c.Pink = "#df80ff";
    c.Red = "#eb5368";
    c.Orange = "#d96629";
    c.LightOrange = "#d99b28";
    c.Green = "#70bf53";
    c.BlueGrey = "#5e88b0";
    c._nextStyle = 0;
    c._gradient = "#FF0000 #FF1100 #FF2300 #FF3400 #FF4600 #FF5700 #FF6900 #FF7B00 #FF8C00 #FF9E00 #FFAF00 #FFC100 #FFD300 #FFE400 #FFF600 #F7FF00 #E5FF00 #D4FF00 #C2FF00 #B0FF00 #9FFF00 #8DFF00 #7CFF00 #6AFF00 #58FF00 #47FF00 #35FF00 #24FF00 #12FF00 #00FF00".split(" ");
    return c;
  }();
  h.ColorStyle = b;
  b = function() {
    function c(f, e, d, g) {
      this.xMin = f | 0;
      this.yMin = e | 0;
      this.xMax = d | 0;
      this.yMax = g | 0;
    }
    c.FromUntyped = function(f) {
      return new c(f.xMin, f.yMin, f.xMax, f.yMax);
    };
    c.FromRectangle = function(f) {
      return new c(20 * f.x | 0, 20 * f.y | 0, 20 * (f.x + f.width) | 0, 20 * (f.y + f.height) | 0);
    };
    c.prototype.setElements = function(f, e, d, g) {
      this.xMin = f;
      this.yMin = e;
      this.xMax = d;
      this.yMax = g;
    };
    c.prototype.copyFrom = function(f) {
      this.setElements(f.xMin, f.yMin, f.xMax, f.yMax);
    };
    c.prototype.contains = function(f, e) {
      return f < this.xMin !== f < this.xMax && e < this.yMin !== e < this.yMax;
    };
    c.prototype.unionInPlace = function(f) {
      f.isEmpty() || (this.extendByPoint(f.xMin, f.yMin), this.extendByPoint(f.xMax, f.yMax));
    };
    c.prototype.extendByPoint = function(f, e) {
      this.extendByX(f);
      this.extendByY(e);
    };
    c.prototype.extendByX = function(f) {
      134217728 === this.xMin ? this.xMin = this.xMax = f : (this.xMin = Math.min(this.xMin, f), this.xMax = Math.max(this.xMax, f));
    };
    c.prototype.extendByY = function(f) {
      134217728 === this.yMin ? this.yMin = this.yMax = f : (this.yMin = Math.min(this.yMin, f), this.yMax = Math.max(this.yMax, f));
    };
    c.prototype.intersects = function(f) {
      return this.contains(f.xMin, f.yMin) || this.contains(f.xMax, f.yMax);
    };
    c.prototype.isEmpty = function() {
      return this.xMax <= this.xMin || this.yMax <= this.yMin;
    };
    Object.defineProperty(c.prototype, "width", {get:function() {
      return this.xMax - this.xMin;
    }, set:function(f) {
      this.xMax = this.xMin + f;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(c.prototype, "height", {get:function() {
      return this.yMax - this.yMin;
    }, set:function(f) {
      this.yMax = this.yMin + f;
    }, enumerable:!0, configurable:!0});
    c.prototype.getBaseWidth = function(f) {
      var e = Math.abs(Math.cos(f));
      f = Math.abs(Math.sin(f));
      return e * (this.xMax - this.xMin) + f * (this.yMax - this.yMin);
    };
    c.prototype.getBaseHeight = function(f) {
      var e = Math.abs(Math.cos(f));
      return Math.abs(Math.sin(f)) * (this.xMax - this.xMin) + e * (this.yMax - this.yMin);
    };
    c.prototype.setEmpty = function() {
      this.xMin = this.yMin = this.xMax = this.yMax = 0;
    };
    c.prototype.setToSentinels = function() {
      this.xMin = this.yMin = this.xMax = this.yMax = 134217728;
    };
    c.prototype.clone = function() {
      return new c(this.xMin, this.yMin, this.xMax, this.yMax);
    };
    c.prototype.toString = function() {
      return "{ xMin: " + this.xMin + ", xMin: " + this.yMin + ", xMax: " + this.xMax + ", xMax: " + this.yMax + " }";
    };
    return c;
  }();
  h.Bounds = b;
  b = function() {
    function c(f, e, d, g) {
      m.assert(p(f));
      m.assert(p(e));
      m.assert(p(d));
      m.assert(p(g));
      this._xMin = f | 0;
      this._yMin = e | 0;
      this._xMax = d | 0;
      this._yMax = g | 0;
    }
    c.FromUntyped = function(f) {
      return new c(f.xMin, f.yMin, f.xMax, f.yMax);
    };
    c.FromRectangle = function(f) {
      return new c(20 * f.x | 0, 20 * f.y | 0, 20 * (f.x + f.width) | 0, 20 * (f.y + f.height) | 0);
    };
    c.prototype.setElements = function(f, e, d, g) {
      this.xMin = f;
      this.yMin = e;
      this.xMax = d;
      this.yMax = g;
    };
    c.prototype.copyFrom = function(f) {
      this.setElements(f.xMin, f.yMin, f.xMax, f.yMax);
    };
    c.prototype.contains = function(f, e) {
      return f < this.xMin !== f < this.xMax && e < this.yMin !== e < this.yMax;
    };
    c.prototype.unionInPlace = function(f) {
      f.isEmpty() || (this.extendByPoint(f.xMin, f.yMin), this.extendByPoint(f.xMax, f.yMax));
    };
    c.prototype.extendByPoint = function(f, e) {
      this.extendByX(f);
      this.extendByY(e);
    };
    c.prototype.extendByX = function(f) {
      134217728 === this.xMin ? this.xMin = this.xMax = f : (this.xMin = Math.min(this.xMin, f), this.xMax = Math.max(this.xMax, f));
    };
    c.prototype.extendByY = function(f) {
      134217728 === this.yMin ? this.yMin = this.yMax = f : (this.yMin = Math.min(this.yMin, f), this.yMax = Math.max(this.yMax, f));
    };
    c.prototype.intersects = function(f) {
      return this.contains(f._xMin, f._yMin) || this.contains(f._xMax, f._yMax);
    };
    c.prototype.isEmpty = function() {
      return this._xMax <= this._xMin || this._yMax <= this._yMin;
    };
    Object.defineProperty(c.prototype, "xMin", {get:function() {
      return this._xMin;
    }, set:function(f) {
      m.assert(p(f));
      this._xMin = f;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(c.prototype, "yMin", {get:function() {
      return this._yMin;
    }, set:function(f) {
      m.assert(p(f));
      this._yMin = f | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(c.prototype, "xMax", {get:function() {
      return this._xMax;
    }, set:function(f) {
      m.assert(p(f));
      this._xMax = f | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(c.prototype, "width", {get:function() {
      return this._xMax - this._xMin;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(c.prototype, "yMax", {get:function() {
      return this._yMax;
    }, set:function(f) {
      m.assert(p(f));
      this._yMax = f | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(c.prototype, "height", {get:function() {
      return this._yMax - this._yMin;
    }, enumerable:!0, configurable:!0});
    c.prototype.getBaseWidth = function(f) {
      var e = Math.abs(Math.cos(f));
      f = Math.abs(Math.sin(f));
      return e * (this._xMax - this._xMin) + f * (this._yMax - this._yMin);
    };
    c.prototype.getBaseHeight = function(f) {
      var e = Math.abs(Math.cos(f));
      return Math.abs(Math.sin(f)) * (this._xMax - this._xMin) + e * (this._yMax - this._yMin);
    };
    c.prototype.setEmpty = function() {
      this._xMin = this._yMin = this._xMax = this._yMax = 0;
    };
    c.prototype.clone = function() {
      return new c(this.xMin, this.yMin, this.xMax, this.yMax);
    };
    c.prototype.toString = function() {
      return "{ xMin: " + this._xMin + ", yMin: " + this._yMin + ", xMax: " + this._xMax + ", yMax: " + this._yMax + " }";
    };
    c.prototype.assertValid = function() {
    };
    return c;
  }();
  h.DebugBounds = b;
  b = function() {
    function c(f, e, d, g) {
      this.r = f;
      this.g = e;
      this.b = d;
      this.a = g;
    }
    c.FromARGB = function(f) {
      return new c((f >> 16 & 255) / 255, (f >> 8 & 255) / 255, (f >> 0 & 255) / 255, (f >> 24 & 255) / 255);
    };
    c.FromRGBA = function(f) {
      return c.FromARGB(n.RGBAToARGB(f));
    };
    c.prototype.toRGBA = function() {
      return 255 * this.r << 24 | 255 * this.g << 16 | 255 * this.b << 8 | 255 * this.a;
    };
    c.prototype.toCSSStyle = function() {
      return n.rgbaToCSSStyle(this.toRGBA());
    };
    c.prototype.set = function(f) {
      this.r = f.r;
      this.g = f.g;
      this.b = f.b;
      this.a = f.a;
    };
    c.randomColor = function(f) {
      void 0 === f && (f = 1);
      return new c(Math.random(), Math.random(), Math.random(), f);
    };
    c.parseColor = function(f) {
      c.colorCache || (c.colorCache = Object.create(null));
      if (c.colorCache[f]) {
        return c.colorCache[f];
      }
      var e = document.createElement("span");
      document.body.appendChild(e);
      e.style.backgroundColor = f;
      var d = getComputedStyle(e).backgroundColor;
      document.body.removeChild(e);
      (e = /^rgb\((\d+), (\d+), (\d+)\)$/.exec(d)) || (e = /^rgba\((\d+), (\d+), (\d+), ([\d.]+)\)$/.exec(d));
      d = new c(0, 0, 0, 0);
      d.r = parseFloat(e[1]) / 255;
      d.g = parseFloat(e[2]) / 255;
      d.b = parseFloat(e[3]) / 255;
      d.a = e[4] ? parseFloat(e[4]) / 255 : 1;
      return c.colorCache[f] = d;
    };
    c.Red = new c(1, 0, 0, 1);
    c.Green = new c(0, 1, 0, 1);
    c.Blue = new c(0, 0, 1, 1);
    c.None = new c(0, 0, 0, 0);
    c.White = new c(1, 1, 1, 1);
    c.Black = new c(0, 0, 0, 1);
    c.colorCache = {};
    return c;
  }();
  h.Color = b;
  var n;
  (function(c) {
    function f(g) {
      var d = g >> 0 & 255, e = g >> 8 & 255, f = g >> 24 & 255;
      g = (Math.imul(g >> 16 & 255, f) + 127) / 255 | 0;
      e = (Math.imul(e, f) + 127) / 255 | 0;
      d = (Math.imul(d, f) + 127) / 255 | 0;
      return f << 24 | g << 16 | e << 8 | d;
    }
    function e() {
      if (!d) {
        d = new Uint8Array(65536);
        for (var g = 0;256 > g;g++) {
          for (var e = 0;256 > e;e++) {
            d[(e << 8) + g] = Math.imul(255, g) / e;
          }
        }
      }
    }
    c.RGBAToARGB = function(g) {
      return g >> 8 & 16777215 | (g & 255) << 24;
    };
    c.ARGBToRGBA = function(g) {
      return g << 8 | g >> 24 & 255;
    };
    c.rgbaToCSSStyle = function(g) {
      return h.StringUtilities.concat9("rgba(", g >> 24 & 255, ",", g >> 16 & 255, ",", g >> 8 & 255, ",", (g & 255) / 255, ")");
    };
    c.cssStyleToRGBA = function(g) {
      if ("#" === g[0]) {
        if (7 === g.length) {
          return parseInt(g.substring(1), 16) << 8 | 255;
        }
      } else {
        if ("r" === g[0]) {
          var d = g.substring(5, g.length - 1).split(",");
          g = parseInt(d[0]);
          var e = parseInt(d[1]), f = parseInt(d[2]), d = parseFloat(d[3]);
          return (g & 255) << 24 | (e & 255) << 16 | (f & 255) << 8 | 255 * d & 255;
        }
      }
      return 4278190335;
    };
    c.hexToRGB = function(g) {
      return parseInt(g.slice(1), 16);
    };
    c.rgbToHex = function(g) {
      return "#" + ("000000" + (g >>> 0).toString(16)).slice(-6);
    };
    c.isValidHexColor = function(g) {
      return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(g);
    };
    c.clampByte = function(g) {
      return Math.max(0, Math.min(255, g));
    };
    c.unpremultiplyARGB = function(g) {
      var d = g >> 0 & 255, e = g >> 8 & 255, f = g >> 24 & 255;
      g = Math.imul(255, g >> 16 & 255) / f & 255;
      e = Math.imul(255, e) / f & 255;
      d = Math.imul(255, d) / f & 255;
      return f << 24 | g << 16 | e << 8 | d;
    };
    c.premultiplyARGB = f;
    var d;
    c.ensureUnpremultiplyTable = e;
    c.getUnpremultiplyTable = function() {
      e();
      return d;
    };
    c.tableLookupUnpremultiplyARGB = function(g) {
      g |= 0;
      var e = g >> 24 & 255;
      if (0 === e) {
        return 0;
      }
      if (255 === e) {
        return g;
      }
      var f, c, b = e << 8, a = d;
      c = a[b + (g >> 16 & 255)];
      f = a[b + (g >> 8 & 255)];
      g = a[b + (g >> 0 & 255)];
      return e << 24 | c << 16 | f << 8 | g;
    };
    c.blendPremultipliedBGRA = function(g, d) {
      var e = d & 16711935, f = d >> 8 & 16711935, c, b = g >> 8 & 16711935, a = 256 - (d & 255);
      c = Math.imul(g & 16711935, a) >> 8;
      b = Math.imul(b, a) >> 8;
      return (f + b & 16711935) << 8 | e + c & 16711935;
    };
    var g = t.swap32;
    c.convertImage = function(e, c, b, a) {
      var l = b.length;
      if (e === c) {
        if (b !== a) {
          for (e = 0;e < l;e++) {
            a[e] = b[e];
          }
        }
      } else {
        if (1 === e && 3 === c) {
          for (h.ColorUtilities.ensureUnpremultiplyTable(), e = 0;e < l;e++) {
            var k = b[e];
            c = k & 255;
            if (0 === c) {
              a[e] = 0;
            } else {
              if (255 === c) {
                a[e] = 4278190080 | k >> 8 & 16777215;
              } else {
                var n = k >> 24 & 255, u = k >> 16 & 255, k = k >> 8 & 255, t = c << 8, q = d, k = q[t + k], u = q[t + u], n = q[t + n];
                a[e] = c << 24 | n << 16 | u << 8 | k;
              }
            }
          }
        } else {
          if (2 === e && 3 === c) {
            for (e = 0;e < l;e++) {
              a[e] = g(b[e]);
            }
          } else {
            if (3 === e && 1 === c) {
              for (e = 0;e < l;e++) {
                c = b[e], a[e] = g(f(c & 4278255360 | c >> 16 & 255 | (c & 255) << 16));
              }
            } else {
              for (m.somewhatImplemented("Image Format Conversion: " + v[e] + " -> " + v[c]), e = 0;e < l;e++) {
                a[e] = b[e];
              }
            }
          }
        }
      }
    };
  })(n = h.ColorUtilities || (h.ColorUtilities = {}));
  b = function() {
    function c(f) {
      void 0 === f && (f = 32);
      this._list = [];
      this._maxSize = f;
    }
    c.prototype.acquire = function(f) {
      if (c._enabled) {
        for (var e = this._list, d = 0;d < e.length;d++) {
          var g = e[d];
          if (g.byteLength >= f) {
            return e.splice(d, 1), g;
          }
        }
      }
      return new ArrayBuffer(f);
    };
    c.prototype.release = function(f) {
      if (c._enabled) {
        var e = this._list;
        e.length === this._maxSize && e.shift();
        e.push(f);
      }
    };
    c.prototype.ensureUint8ArrayLength = function(f, e) {
      if (f.length >= e) {
        return f;
      }
      var d = Math.max(f.length + e, (3 * f.length >> 1) + 1), d = new Uint8Array(this.acquire(d), 0, d);
      d.set(f);
      this.release(f.buffer);
      return d;
    };
    c.prototype.ensureFloat64ArrayLength = function(f, e) {
      if (f.length >= e) {
        return f;
      }
      var d = Math.max(f.length + e, (3 * f.length >> 1) + 1), d = new Float64Array(this.acquire(d * Float64Array.BYTES_PER_ELEMENT), 0, d);
      d.set(f);
      this.release(f.buffer);
      return d;
    };
    c._enabled = !0;
    return c;
  }();
  h.ArrayBufferPool = b;
  (function(c) {
    (function(f) {
      f[f.EXTERNAL_INTERFACE_FEATURE = 1] = "EXTERNAL_INTERFACE_FEATURE";
      f[f.CLIPBOARD_FEATURE = 2] = "CLIPBOARD_FEATURE";
      f[f.SHAREDOBJECT_FEATURE = 3] = "SHAREDOBJECT_FEATURE";
      f[f.VIDEO_FEATURE = 4] = "VIDEO_FEATURE";
      f[f.SOUND_FEATURE = 5] = "SOUND_FEATURE";
      f[f.NETCONNECTION_FEATURE = 6] = "NETCONNECTION_FEATURE";
    })(c.Feature || (c.Feature = {}));
    (function(f) {
      f[f.AVM1_ERROR = 1] = "AVM1_ERROR";
      f[f.AVM2_ERROR = 2] = "AVM2_ERROR";
    })(c.ErrorTypes || (c.ErrorTypes = {}));
    (function(f) {
      f[f.LoadSource = 0] = "LoadSource";
      f[f.LoadWhitelistAllowed = 1] = "LoadWhitelistAllowed";
      f[f.LoadWhitelistDenied = 2] = "LoadWhitelistDenied";
      f[f.StreamAllowed = 3] = "StreamAllowed";
      f[f.StreamDenied = 4] = "StreamDenied";
      f[f.StreamCrossdomain = 5] = "StreamCrossdomain";
    })(c.LoadResource || (c.LoadResource = {}));
    c.instance;
  })(h.Telemetry || (h.Telemetry = {}));
  (function(c) {
    c.instance;
  })(h.FileLoadingService || (h.FileLoadingService = {}));
  (function(c) {
    c[c.BuiltinAbc = 0] = "BuiltinAbc";
    c[c.PlayerglobalAbcs = 1] = "PlayerglobalAbcs";
    c[c.PlayerglobalManifest = 2] = "PlayerglobalManifest";
    c[c.ShellAbc = 3] = "ShellAbc";
  })(h.SystemResourceId || (h.SystemResourceId = {}));
  (function(c) {
    c.instance;
  })(h.SystemResourcesLoadingService || (h.SystemResourcesLoadingService = {}));
  h.registerCSSFont = function(c, f, e) {
    if (inBrowser) {
      var d = document.head;
      d.insertBefore(document.createElement("style"), d.firstChild);
      d = document.styleSheets[0];
      f = "@font-face{font-family:swffont" + c + ";src:url(data:font/opentype;base64," + h.StringUtilities.base64ArrayBuffer(f.buffer) + ")}";
      d.insertRule(f, d.cssRules.length);
      e && (e = document.createElement("div"), e.style.fontFamily = "swffont" + c, e.innerHTML = "hello", document.body.appendChild(e), document.body.removeChild(e));
    } else {
      m.warning("Cannot register CSS font outside the browser");
    }
  };
  h.registerFallbackFont = function() {
    var c = document.styleSheets[0];
    c.insertRule('@font-face{font-family:AdobeBlank;src:url("data:font/opentype;base64,T1RUTwAKAIAAAwAgQ0ZGIDTeCDQAACFkAAAZPERTSUcAAAABAABKqAAAAAhPUy8yAF+xmwAAARAAAABgY21hcCRDbtEAAAdcAAAZ6GhlYWQFl9tDAAAArAAAADZoaGVhB1oD7wAAAOQAAAAkaG10eAPoAHwAADqgAAAQBm1heHAIAVAAAAABCAAAAAZuYW1lIE0HkgAAAXAAAAXrcG9zdP+4ADIAACFEAAAAIAABAAAAAQuFfcPHtV8PPPUAAwPoAAAAANFMRfMAAAAA0UxF8wB8/4gDbANwAAAAAwACAAAAAAAAAAEAAANw/4gAAAPoAHwAfANsAAEAAAAAAAAAAAAAAAAAAAACAABQAAgBAAAAAwPoAZAABQAAAooCWAAAAEsCigJYAAABXgAyANwAAAAAAAAAAAAAAAD3/67/+9///w/gAD8AAAAAQURCTwBAAAD//wNw/4gAAANwAHhgLwH/AAAAAAAAAAAAAAAgAAAAAAARANIAAQAAAAAAAQALAAAAAQAAAAAAAgAHAAsAAQAAAAAAAwAbABIAAQAAAAAABAALAAAAAQAAAAAABQA6AC0AAQAAAAAABgAKAGcAAwABBAkAAACUAHEAAwABBAkAAQAWAQUAAwABBAkAAgAOARsAAwABBAkAAwA2ASkAAwABBAkABAAWAQUAAwABBAkABQB0AV8AAwABBAkABgAUAdMAAwABBAkACAA0AecAAwABBAkACwA0AhsAAwABBAkADQKWAk8AAwABBAkADgA0BOVBZG9iZSBCbGFua1JlZ3VsYXIxLjA0NTtBREJPO0Fkb2JlQmxhbms7QURPQkVWZXJzaW9uIDEuMDQ1O1BTIDEuMDQ1O2hvdGNvbnYgMS4wLjgyO21ha2VvdGYubGliMi41LjYzNDA2QWRvYmVCbGFuawBDAG8AcAB5AHIAaQBnAGgAdAAgAKkAIAAyADAAMQAzACwAIAAyADAAMQA1ACAAQQBkAG8AYgBlACAAUwB5AHMAdABlAG0AcwAgAEkAbgBjAG8AcgBwAG8AcgBhAHQAZQBkACAAKABoAHQAdABwADoALwAvAHcAdwB3AC4AYQBkAG8AYgBlAC4AYwBvAG0ALwApAC4AQQBkAG8AYgBlACAAQgBsAGEAbgBrAFIAZQBnAHUAbABhAHIAMQAuADAANAA1ADsAQQBEAEIATwA7AEEAZABvAGIAZQBCAGwAYQBuAGsAOwBBAEQATwBCAEUAVgBlAHIAcwBpAG8AbgAgADEALgAwADQANQA7AFAAUwAgADEALgAwADQANQA7AGgAbwB0AGMAbwBuAHYAIAAxAC4AMAAuADgAMgA7AG0AYQBrAGUAbwB0AGYALgBsAGkAYgAyAC4ANQAuADYAMwA0ADAANgBBAGQAbwBiAGUAQgBsAGEAbgBrAEEAZABvAGIAZQAgAFMAeQBzAHQAZQBtAHMAIABJAG4AYwBvAHIAcABvAHIAYQB0AGUAZABoAHQAdABwADoALwAvAHcAdwB3AC4AYQBkAG8AYgBlAC4AYwBvAG0ALwB0AHkAcABlAC8AVABoAGkAcwAgAEYAbwBuAHQAIABTAG8AZgB0AHcAYQByAGUAIABpAHMAIABsAGkAYwBlAG4AcwBlAGQAIAB1AG4AZABlAHIAIAB0AGgAZQAgAFMASQBMACAATwBwAGUAbgAgAEYAbwBuAHQAIABMAGkAYwBlAG4AcwBlACwAIABWAGUAcgBzAGkAbwBuACAAMQAuADEALgAgAFQAaABpAHMAIABGAG8AbgB0ACAAUwBvAGYAdAB3AGEAcgBlACAAaQBzACAAZABpAHMAdAByAGkAYgB1AHQAZQBkACAAbwBuACAAYQBuACAAIgBBAFMAIABJAFMAIgAgAEIAQQBTAEkAUwAsACAAVwBJAFQASABPAFUAVAAgAFcAQQBSAFIAQQBOAFQASQBFAFMAIABPAFIAIABDAE8ATgBEAEkAVABJAE8ATgBTACAATwBGACAAQQBOAFkAIABLAEkATgBEACwAIABlAGkAdABoAGUAcgAgAGUAeABwAHIAZQBzAHMAIABvAHIAIABpAG0AcABsAGkAZQBkAC4AIABTAGUAZQAgAHQAaABlACAAUwBJAEwAIABPAHAAZQBuACAARgBvAG4AdAAgAEwAaQBjAGUAbgBzAGUAIABmAG8AcgAgAHQAaABlACAAcwBwAGUAYwBpAGYAaQBjACAAbABhAG4AZwB1AGEAZwBlACwAIABwAGUAcgBtAGkAcwBzAGkAbwBuAHMAIABhAG4AZAAgAGwAaQBtAGkAdABhAHQAaQBvAG4AcwAgAGcAbwB2AGUAcgBuAGkAbgBnACAAeQBvAHUAcgAgAHUAcwBlACAAbwBmACAAdABoAGkAcwAgAEYAbwBuAHQAIABTAG8AZgB0AHcAYQByAGUALgBoAHQAdABwADoALwAvAHMAYwByAGkAcAB0AHMALgBzAGkAbAAuAG8AcgBnAC8ATwBGAEwAAAAABQAAAAMAAAA4AAAABAAAAFgAAQAAAAAALAADAAEAAAA4AAMACgAAAFgABgAMAAAAAAABAAAABAAgAAAABAAEAAEAAAf///8AAAAA//8AAQABAAAAAAAMAAAAABmQAAAAAAAAAiAAAAAAAAAH/wAAAAEAAAgAAAAP/wAAAAEAABAAAAAX/wAAAAEAABgAAAAf/wAAAAEAACAAAAAn/wAAAAEAACgAAAAv/wAAAAEAADAAAAA3/wAAAAEAADgAAAA//wAAAAEAAEAAAABH/wAAAAEAAEgAAABP/wAAAAEAAFAAAABX/wAAAAEAAFgAAABf/wAAAAEAAGAAAABn/wAAAAEAAGgAAABv/wAAAAEAAHAAAAB3/wAAAAEAAHgAAAB//wAAAAEAAIAAAACH/wAAAAEAAIgAAACP/wAAAAEAAJAAAACX/wAAAAEAAJgAAACf/wAAAAEAAKAAAACn/wAAAAEAAKgAAACv/wAAAAEAALAAAAC3/wAAAAEAALgAAAC//wAAAAEAAMAAAADH/wAAAAEAAMgAAADP/wAAAAEAANAAAADX/wAAAAEAAOAAAADn/wAAAAEAAOgAAADv/wAAAAEAAPAAAAD3/wAAAAEAAPgAAAD9zwAAAAEAAP3wAAD//QAABfEAAQAAAAEH/wAAAAEAAQgAAAEP/wAAAAEAARAAAAEX/wAAAAEAARgAAAEf/wAAAAEAASAAAAEn/wAAAAEAASgAAAEv/wAAAAEAATAAAAE3/wAAAAEAATgAAAE//wAAAAEAAUAAAAFH/wAAAAEAAUgAAAFP/wAAAAEAAVAAAAFX/wAAAAEAAVgAAAFf/wAAAAEAAWAAAAFn/wAAAAEAAWgAAAFv/wAAAAEAAXAAAAF3/wAAAAEAAXgAAAF//wAAAAEAAYAAAAGH/wAAAAEAAYgAAAGP/wAAAAEAAZAAAAGX/wAAAAEAAZgAAAGf/wAAAAEAAaAAAAGn/wAAAAEAAagAAAGv/wAAAAEAAbAAAAG3/wAAAAEAAbgAAAG//wAAAAEAAcAAAAHH/wAAAAEAAcgAAAHP/wAAAAEAAdAAAAHX/wAAAAEAAdgAAAHf/wAAAAEAAeAAAAHn/wAAAAEAAegAAAHv/wAAAAEAAfAAAAH3/wAAAAEAAfgAAAH//QAAAAEAAgAAAAIH/wAAAAEAAggAAAIP/wAAAAEAAhAAAAIX/wAAAAEAAhgAAAIf/wAAAAEAAiAAAAIn/wAAAAEAAigAAAIv/wAAAAEAAjAAAAI3/wAAAAEAAjgAAAI//wAAAAEAAkAAAAJH/wAAAAEAAkgAAAJP/wAAAAEAAlAAAAJX/wAAAAEAAlgAAAJf/wAAAAEAAmAAAAJn/wAAAAEAAmgAAAJv/wAAAAEAAnAAAAJ3/wAAAAEAAngAAAJ//wAAAAEAAoAAAAKH/wAAAAEAAogAAAKP/wAAAAEAApAAAAKX/wAAAAEAApgAAAKf/wAAAAEAAqAAAAKn/wAAAAEAAqgAAAKv/wAAAAEAArAAAAK3/wAAAAEAArgAAAK//wAAAAEAAsAAAALH/wAAAAEAAsgAAALP/wAAAAEAAtAAAALX/wAAAAEAAtgAAALf/wAAAAEAAuAAAALn/wAAAAEAAugAAALv/wAAAAEAAvAAAAL3/wAAAAEAAvgAAAL//QAAAAEAAwAAAAMH/wAAAAEAAwgAAAMP/wAAAAEAAxAAAAMX/wAAAAEAAxgAAAMf/wAAAAEAAyAAAAMn/wAAAAEAAygAAAMv/wAAAAEAAzAAAAM3/wAAAAEAAzgAAAM//wAAAAEAA0AAAANH/wAAAAEAA0gAAANP/wAAAAEAA1AAAANX/wAAAAEAA1gAAANf/wAAAAEAA2AAAANn/wAAAAEAA2gAAANv/wAAAAEAA3AAAAN3/wAAAAEAA3gAAAN//wAAAAEAA4AAAAOH/wAAAAEAA4gAAAOP/wAAAAEAA5AAAAOX/wAAAAEAA5gAAAOf/wAAAAEAA6AAAAOn/wAAAAEAA6gAAAOv/wAAAAEAA7AAAAO3/wAAAAEAA7gAAAO//wAAAAEAA8AAAAPH/wAAAAEAA8gAAAPP/wAAAAEAA9AAAAPX/wAAAAEAA9gAAAPf/wAAAAEAA+AAAAPn/wAAAAEAA+gAAAPv/wAAAAEAA/AAAAP3/wAAAAEAA/gAAAP//QAAAAEABAAAAAQH/wAAAAEABAgAAAQP/wAAAAEABBAAAAQX/wAAAAEABBgAAAQf/wAAAAEABCAAAAQn/wAAAAEABCgAAAQv/wAAAAEABDAAAAQ3/wAAAAEABDgAAAQ//wAAAAEABEAAAARH/wAAAAEABEgAAARP/wAAAAEABFAAAARX/wAAAAEABFgAAARf/wAAAAEABGAAAARn/wAAAAEABGgAAARv/wAAAAEABHAAAAR3/wAAAAEABHgAAAR//wAAAAEABIAAAASH/wAAAAEABIgAAASP/wAAAAEABJAAAASX/wAAAAEABJgAAASf/wAAAAEABKAAAASn/wAAAAEABKgAAASv/wAAAAEABLAAAAS3/wAAAAEABLgAAAS//wAAAAEABMAAAATH/wAAAAEABMgAAATP/wAAAAEABNAAAATX/wAAAAEABNgAAATf/wAAAAEABOAAAATn/wAAAAEABOgAAATv/wAAAAEABPAAAAT3/wAAAAEABPgAAAT//QAAAAEABQAAAAUH/wAAAAEABQgAAAUP/wAAAAEABRAAAAUX/wAAAAEABRgAAAUf/wAAAAEABSAAAAUn/wAAAAEABSgAAAUv/wAAAAEABTAAAAU3/wAAAAEABTgAAAU//wAAAAEABUAAAAVH/wAAAAEABUgAAAVP/wAAAAEABVAAAAVX/wAAAAEABVgAAAVf/wAAAAEABWAAAAVn/wAAAAEABWgAAAVv/wAAAAEABXAAAAV3/wAAAAEABXgAAAV//wAAAAEABYAAAAWH/wAAAAEABYgAAAWP/wAAAAEABZAAAAWX/wAAAAEABZgAAAWf/wAAAAEABaAAAAWn/wAAAAEABagAAAWv/wAAAAEABbAAAAW3/wAAAAEABbgAAAW//wAAAAEABcAAAAXH/wAAAAEABcgAAAXP/wAAAAEABdAAAAXX/wAAAAEABdgAAAXf/wAAAAEABeAAAAXn/wAAAAEABegAAAXv/wAAAAEABfAAAAX3/wAAAAEABfgAAAX//QAAAAEABgAAAAYH/wAAAAEABggAAAYP/wAAAAEABhAAAAYX/wAAAAEABhgAAAYf/wAAAAEABiAAAAYn/wAAAAEABigAAAYv/wAAAAEABjAAAAY3/wAAAAEABjgAAAY//wAAAAEABkAAAAZH/wAAAAEABkgAAAZP/wAAAAEABlAAAAZX/wAAAAEABlgAAAZf/wAAAAEABmAAAAZn/wAAAAEABmgAAAZv/wAAAAEABnAAAAZ3/wAAAAEABngAAAZ//wAAAAEABoAAAAaH/wAAAAEABogAAAaP/wAAAAEABpAAAAaX/wAAAAEABpgAAAaf/wAAAAEABqAAAAan/wAAAAEABqgAAAav/wAAAAEABrAAAAa3/wAAAAEABrgAAAa//wAAAAEABsAAAAbH/wAAAAEABsgAAAbP/wAAAAEABtAAAAbX/wAAAAEABtgAAAbf/wAAAAEABuAAAAbn/wAAAAEABugAAAbv/wAAAAEABvAAAAb3/wAAAAEABvgAAAb//QAAAAEABwAAAAcH/wAAAAEABwgAAAcP/wAAAAEABxAAAAcX/wAAAAEABxgAAAcf/wAAAAEAByAAAAcn/wAAAAEABygAAAcv/wAAAAEABzAAAAc3/wAAAAEABzgAAAc//wAAAAEAB0AAAAdH/wAAAAEAB0gAAAdP/wAAAAEAB1AAAAdX/wAAAAEAB1gAAAdf/wAAAAEAB2AAAAdn/wAAAAEAB2gAAAdv/wAAAAEAB3AAAAd3/wAAAAEAB3gAAAd//wAAAAEAB4AAAAeH/wAAAAEAB4gAAAeP/wAAAAEAB5AAAAeX/wAAAAEAB5gAAAef/wAAAAEAB6AAAAen/wAAAAEAB6gAAAev/wAAAAEAB7AAAAe3/wAAAAEAB7gAAAe//wAAAAEAB8AAAAfH/wAAAAEAB8gAAAfP/wAAAAEAB9AAAAfX/wAAAAEAB9gAAAff/wAAAAEAB+AAAAfn/wAAAAEAB+gAAAfv/wAAAAEAB/AAAAf3/wAAAAEAB/gAAAf//QAAAAEACAAAAAgH/wAAAAEACAgAAAgP/wAAAAEACBAAAAgX/wAAAAEACBgAAAgf/wAAAAEACCAAAAgn/wAAAAEACCgAAAgv/wAAAAEACDAAAAg3/wAAAAEACDgAAAg//wAAAAEACEAAAAhH/wAAAAEACEgAAAhP/wAAAAEACFAAAAhX/wAAAAEACFgAAAhf/wAAAAEACGAAAAhn/wAAAAEACGgAAAhv/wAAAAEACHAAAAh3/wAAAAEACHgAAAh//wAAAAEACIAAAAiH/wAAAAEACIgAAAiP/wAAAAEACJAAAAiX/wAAAAEACJgAAAif/wAAAAEACKAAAAin/wAAAAEACKgAAAiv/wAAAAEACLAAAAi3/wAAAAEACLgAAAi//wAAAAEACMAAAAjH/wAAAAEACMgAAAjP/wAAAAEACNAAAAjX/wAAAAEACNgAAAjf/wAAAAEACOAAAAjn/wAAAAEACOgAAAjv/wAAAAEACPAAAAj3/wAAAAEACPgAAAj//QAAAAEACQAAAAkH/wAAAAEACQgAAAkP/wAAAAEACRAAAAkX/wAAAAEACRgAAAkf/wAAAAEACSAAAAkn/wAAAAEACSgAAAkv/wAAAAEACTAAAAk3/wAAAAEACTgAAAk//wAAAAEACUAAAAlH/wAAAAEACUgAAAlP/wAAAAEACVAAAAlX/wAAAAEACVgAAAlf/wAAAAEACWAAAAln/wAAAAEACWgAAAlv/wAAAAEACXAAAAl3/wAAAAEACXgAAAl//wAAAAEACYAAAAmH/wAAAAEACYgAAAmP/wAAAAEACZAAAAmX/wAAAAEACZgAAAmf/wAAAAEACaAAAAmn/wAAAAEACagAAAmv/wAAAAEACbAAAAm3/wAAAAEACbgAAAm//wAAAAEACcAAAAnH/wAAAAEACcgAAAnP/wAAAAEACdAAAAnX/wAAAAEACdgAAAnf/wAAAAEACeAAAAnn/wAAAAEACegAAAnv/wAAAAEACfAAAAn3/wAAAAEACfgAAAn//QAAAAEACgAAAAoH/wAAAAEACggAAAoP/wAAAAEAChAAAAoX/wAAAAEAChgAAAof/wAAAAEACiAAAAon/wAAAAEACigAAAov/wAAAAEACjAAAAo3/wAAAAEACjgAAAo//wAAAAEACkAAAApH/wAAAAEACkgAAApP/wAAAAEAClAAAApX/wAAAAEAClgAAApf/wAAAAEACmAAAApn/wAAAAEACmgAAApv/wAAAAEACnAAAAp3/wAAAAEACngAAAp//wAAAAEACoAAAAqH/wAAAAEACogAAAqP/wAAAAEACpAAAAqX/wAAAAEACpgAAAqf/wAAAAEACqAAAAqn/wAAAAEACqgAAAqv/wAAAAEACrAAAAq3/wAAAAEACrgAAAq//wAAAAEACsAAAArH/wAAAAEACsgAAArP/wAAAAEACtAAAArX/wAAAAEACtgAAArf/wAAAAEACuAAAArn/wAAAAEACugAAArv/wAAAAEACvAAAAr3/wAAAAEACvgAAAr//QAAAAEACwAAAAsH/wAAAAEACwgAAAsP/wAAAAEACxAAAAsX/wAAAAEACxgAAAsf/wAAAAEACyAAAAsn/wAAAAEACygAAAsv/wAAAAEACzAAAAs3/wAAAAEACzgAAAs//wAAAAEAC0AAAAtH/wAAAAEAC0gAAAtP/wAAAAEAC1AAAAtX/wAAAAEAC1gAAAtf/wAAAAEAC2AAAAtn/wAAAAEAC2gAAAtv/wAAAAEAC3AAAAt3/wAAAAEAC3gAAAt//wAAAAEAC4AAAAuH/wAAAAEAC4gAAAuP/wAAAAEAC5AAAAuX/wAAAAEAC5gAAAuf/wAAAAEAC6AAAAun/wAAAAEAC6gAAAuv/wAAAAEAC7AAAAu3/wAAAAEAC7gAAAu//wAAAAEAC8AAAAvH/wAAAAEAC8gAAAvP/wAAAAEAC9AAAAvX/wAAAAEAC9gAAAvf/wAAAAEAC+AAAAvn/wAAAAEAC+gAAAvv/wAAAAEAC/AAAAv3/wAAAAEAC/gAAAv//QAAAAEADAAAAAwH/wAAAAEADAgAAAwP/wAAAAEADBAAAAwX/wAAAAEADBgAAAwf/wAAAAEADCAAAAwn/wAAAAEADCgAAAwv/wAAAAEADDAAAAw3/wAAAAEADDgAAAw//wAAAAEADEAAAAxH/wAAAAEADEgAAAxP/wAAAAEADFAAAAxX/wAAAAEADFgAAAxf/wAAAAEADGAAAAxn/wAAAAEADGgAAAxv/wAAAAEADHAAAAx3/wAAAAEADHgAAAx//wAAAAEADIAAAAyH/wAAAAEADIgAAAyP/wAAAAEADJAAAAyX/wAAAAEADJgAAAyf/wAAAAEADKAAAAyn/wAAAAEADKgAAAyv/wAAAAEADLAAAAy3/wAAAAEADLgAAAy//wAAAAEADMAAAAzH/wAAAAEADMgAAAzP/wAAAAEADNAAAAzX/wAAAAEADNgAAAzf/wAAAAEADOAAAAzn/wAAAAEADOgAAAzv/wAAAAEADPAAAAz3/wAAAAEADPgAAAz//QAAAAEADQAAAA0H/wAAAAEADQgAAA0P/wAAAAEADRAAAA0X/wAAAAEADRgAAA0f/wAAAAEADSAAAA0n/wAAAAEADSgAAA0v/wAAAAEADTAAAA03/wAAAAEADTgAAA0//wAAAAEADUAAAA1H/wAAAAEADUgAAA1P/wAAAAEADVAAAA1X/wAAAAEADVgAAA1f/wAAAAEADWAAAA1n/wAAAAEADWgAAA1v/wAAAAEADXAAAA13/wAAAAEADXgAAA1//wAAAAEADYAAAA2H/wAAAAEADYgAAA2P/wAAAAEADZAAAA2X/wAAAAEADZgAAA2f/wAAAAEADaAAAA2n/wAAAAEADagAAA2v/wAAAAEADbAAAA23/wAAAAEADbgAAA2//wAAAAEADcAAAA3H/wAAAAEADcgAAA3P/wAAAAEADdAAAA3X/wAAAAEADdgAAA3f/wAAAAEADeAAAA3n/wAAAAEADegAAA3v/wAAAAEADfAAAA33/wAAAAEADfgAAA3//QAAAAEADgAAAA4H/wAAAAEADggAAA4P/wAAAAEADhAAAA4X/wAAAAEADhgAAA4f/wAAAAEADiAAAA4n/wAAAAEADigAAA4v/wAAAAEADjAAAA43/wAAAAEADjgAAA4//wAAAAEADkAAAA5H/wAAAAEADkgAAA5P/wAAAAEADlAAAA5X/wAAAAEADlgAAA5f/wAAAAEADmAAAA5n/wAAAAEADmgAAA5v/wAAAAEADnAAAA53/wAAAAEADngAAA5//wAAAAEADoAAAA6H/wAAAAEADogAAA6P/wAAAAEADpAAAA6X/wAAAAEADpgAAA6f/wAAAAEADqAAAA6n/wAAAAEADqgAAA6v/wAAAAEADrAAAA63/wAAAAEADrgAAA6//wAAAAEADsAAAA7H/wAAAAEADsgAAA7P/wAAAAEADtAAAA7X/wAAAAEADtgAAA7f/wAAAAEADuAAAA7n/wAAAAEADugAAA7v/wAAAAEADvAAAA73/wAAAAEADvgAAA7//QAAAAEADwAAAA8H/wAAAAEADwgAAA8P/wAAAAEADxAAAA8X/wAAAAEADxgAAA8f/wAAAAEADyAAAA8n/wAAAAEADygAAA8v/wAAAAEADzAAAA83/wAAAAEADzgAAA8//wAAAAEAD0AAAA9H/wAAAAEAD0gAAA9P/wAAAAEAD1AAAA9X/wAAAAEAD1gAAA9f/wAAAAEAD2AAAA9n/wAAAAEAD2gAAA9v/wAAAAEAD3AAAA93/wAAAAEAD3gAAA9//wAAAAEAD4AAAA+H/wAAAAEAD4gAAA+P/wAAAAEAD5AAAA+X/wAAAAEAD5gAAA+f/wAAAAEAD6AAAA+n/wAAAAEAD6gAAA+v/wAAAAEAD7AAAA+3/wAAAAEAD7gAAA+//wAAAAEAD8AAAA/H/wAAAAEAD8gAAA/P/wAAAAEAD9AAAA/X/wAAAAEAD9gAAA/f/wAAAAEAD+AAAA/n/wAAAAEAD+gAAA/v/wAAAAEAD/AAAA/3/wAAAAEAD/gAAA///QAAAAEAEAAAABAH/wAAAAEAEAgAABAP/wAAAAEAEBAAABAX/wAAAAEAEBgAABAf/wAAAAEAECAAABAn/wAAAAEAECgAABAv/wAAAAEAEDAAABA3/wAAAAEAEDgAABA//wAAAAEAEEAAABBH/wAAAAEAEEgAABBP/wAAAAEAEFAAABBX/wAAAAEAEFgAABBf/wAAAAEAEGAAABBn/wAAAAEAEGgAABBv/wAAAAEAEHAAABB3/wAAAAEAEHgAABB//wAAAAEAEIAAABCH/wAAAAEAEIgAABCP/wAAAAEAEJAAABCX/wAAAAEAEJgAABCf/wAAAAEAEKAAABCn/wAAAAEAEKgAABCv/wAAAAEAELAAABC3/wAAAAEAELgAABC//wAAAAEAEMAAABDH/wAAAAEAEMgAABDP/wAAAAEAENAAABDX/wAAAAEAENgAABDf/wAAAAEAEOAAABDn/wAAAAEAEOgAABDv/wAAAAEAEPAAABD3/wAAAAEAEPgAABD//QAAAAEAAwAAAAAAAP+1ADIAAAAAAAAAAAAAAAAAAAAAAAAAAAEABAIAAQEBC0Fkb2JlQmxhbmsAAQEBMPgb+ByLDB74HQH4HgKL+wz6APoEBR4aBF8MHxwIAQwi91UP92IR91oMJRwZHwwkAAUBAQYOVmFwQWRvYmVJZGVudGl0eUNvcHlyaWdodCAyMDEzLCAyMDE1IEFkb2JlIFN5c3RlbXMgSW5jb3Jwb3JhdGVkIChodHRwOi8vd3d3LmFkb2JlLmNvbS8pLkFkb2JlIEJsYW5rQWRvYmVCbGFuay0yMDQ5AAACAAEH/wMAAQAAAAgBCAECAAEASwBMAE0ATgBPAFAAUQBSAFMAVABVAFYAVwBYAFkAWgBbAFwAXQBeAF8AYABhAGIAYwBkAGUAZgBnAGgAaQBqAGsAbABtAG4AbwBwAHEAcgBzAHQAdQB2AHcAeAB5AHoAewB8AH0AfgB/AIAAgQCCAIMAhACFAIYAhwCIAIkAigCLAIwAjQCOAI8AkACRAJIAkwCUAJUAlgCXAJgAmQCaAJsAnACdAJ4AnwCgAKEAogCjAKQApQCmAKcAqACpAKoAqwCsAK0ArgCvALAAsQCyALMAtAC1ALYAtwC4ALkAugC7ALwAvQC+AL8AwADBAMIAwwDEAMUAxgDHAMgAyQDKAMsAzADNAM4AzwDQANEA0gDTANQA1QDWANcA2ADZANoA2wDcAN0A3gDfAOAA4QDiAOMA5ADlAOYA5wDoAOkA6gDrAOwA7QDuAO8A8ADxAPIA8wD0APUA9gD3APgA+QD6APsA/AD9AP4A/wEAAQEBAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMBFAEVARYBFwEYARkBGgEbARwBHQEeAR8BIAEhASIBIwEkASUBJgEnASgBKQEqASsBLAEtAS4BLwEwATEBMgEzATQBNQE2ATcBOAE5AToBOwE8AT0BPgE/AUABQQFCAUMBRAFFAUYBRwFIAUkBSgFLAUwBTQFOAU8BUAFRAVIBUwFUAVUBVgFXAVgBWQFaAVsBXAFdAV4BXwFgAWEBYgFjAWQBZQFmAWcBaAFpAWoBawFsAW0BbgFvAXABcQFyAXMBdAF1AXYBdwF4AXkBegF7AXwBfQF+AX8BgAGBAYIBgwGEAYUBhgGHAYgBiQGKAYsBjAGNAY4BjwGQAZEBkgGTAZQBlQGWAZcBmAGZAZoBmwGcAZ0BngGfAaABoQGiAaMBpAGlAaYBpwGoAakBqgGrAawBrQGuAa8BsAGxAbIBswG0AbUBtgG3AbgBuQG6AbsBvAG9Ab4BvwHAAcEBwgHDAcQBxQHGAccByAHJAcoBywHMAc0BzgHPAdAB0QHSAdMB1AHVAdYB1wHYAdkB2gHbAdwB3QHeAd8B4AHhAeIB4wHkAeUB5gHnAegB6QHqAesB7AHtAe4B7wHwAfEB8gHzAfQB9QH2AfcB+AH5AfoB+wH8Af0B/gH/AgACAQICAgMCBAIFAgYCBwIIAgkCCgILAgwCDQIOAg8CEAIRAhICEwIUAhUCFgIXAhgCGQIaAhsCHAIdAh4CHwIgAiECIgIjAiQCJQImAicCKAIpAioCKwIsAi0CLgIvAjACMQIyAjMCNAI1AjYCNwI4AjkCOgI7AjwCPQI+Aj8CQAJBAkICQwJEAkUCRgJHAkgCSQJKAksCTAJNAk4CTwJQAlECUgJTAlQCVQJWAlcCWAJZAloCWwJcAl0CXgJfAmACYQJiAmMCZAJlAmYCZwJoAmkCagJrAmwCbQJuAm8CcAJxAnICcwJ0AnUCdgJ3AngCeQJ6AnsCfAJ9An4CfwKAAoECggKDAoQChQKGAocCiAKJAooCiwKMAo0CjgKPApACkQKSApMClAKVApYClwKYApkCmgKbApwCnQKeAp8CoAKhAqICowKkAqUCpgKnAqgCqQKqAqsCrAKtAq4CrwKwArECsgKzArQCtQK2ArcCuAK5AroCuwK8Ar0CvgK/AsACwQLCAsMCxALFAsYCxwLIAskCygLLAswCzQLOAs8C0ALRAtIC0wLUAtUC1gLXAtgC2QLaAtsC3ALdAt4C3wLgAuEC4gLjAuQC5QLmAucC6ALpAuoC6wLsAu0C7gLvAvAC8QLyAvMC9AL1AvYC9wL4AvkC+gL7AvwC/QL+Av8DAAMBAwIDAwMEAwUDBgMHAwgDCQMKAwsDDAMNAw4DDwMQAxEDEgMTAxQDFQMWAxcDGAMZAxoDGwMcAx0DHgMfAyADIQMiAyMDJAMlAyYDJwMoAykDKgMrAywDLQMuAy8DMAMxAzIDMwM0AzUDNgM3AzgDOQM6AzsDPAM9Az4DPwNAA0EDQgNDA0QDRQNGA0cDSANJA0oDSwNMA00DTgNPA1ADUQNSA1MDVANVA1YDVwNYA1kDWgNbA1wDXQNeA18DYANhA2IDYwNkA2UDZgNnA2gDaQNqA2sDbANtA24DbwNwA3EDcgNzA3QDdQN2A3cDeAN5A3oDewN8A30DfgN/A4ADgQOCA4MDhAOFA4YDhwOIA4kDigOLA4wDjQOOA48DkAORA5IDkwOUA5UDlgOXA5gDmQOaA5sDnAOdA54DnwOgA6EDogOjA6QDpQOmA6cDqAOpA6oDqwOsA60DrgOvA7ADsQOyA7MDtAO1A7YDtwO4A7kDugO7A7wDvQO+A78DwAPBA8IDwwPEA8UDxgPHA8gDyQPKA8sDzAPNA84DzwPQA9ED0gPTA9QD1QPWA9cD2APZA9oD2wPcA90D3gPfA+AD4QPiA+MD5APlA+YD5wPoA+kD6gPrA+wD7QPuA+8D8APxA/ID8wP0A/UD9gP3A/gD+QP6A/sD/AP9A/4D/wQABAEEAgQDBAQEBQQGBAcECAQJBAoECwQMBA0EDgQPBBAEEQQSBBMEFAQVBBYEFwQYBBkEGgQbBBwEHQQeBB8EIAQhBCIEIwQkBCUEJgQnBCgEKQQqBCsELAQtBC4ELwQwBDEEMgQzBDQENQQ2BDcEOAQ5BDoEOwQ8BD0EPgQ/BEAEQQRCBEMERARFBEYERwRIBEkESgRLBEwETQROBE8EUARRBFIEUwRUBFUEVgRXBFgEWQRaBFsEXARdBF4EXwRgBGEEYgRjBGQEZQRmBGcEaARpBGoEawRsBG0EbgRvBHAEcQRyBHMEdAR1BHYEdwR4BHkEegR7BHwEfQR+BH8EgASBBIIEgwSEBIUEhgSHBIgEiQSKBIsEjASNBI4EjwSQBJEEkgSTBJQElQSWBJcEmASZBJoEmwScBJ0EngSfBKAEoQSiBKMEpASlBKYEpwSoBKkEqgSrBKwErQSuBK8EsASxBLIEswS0BLUEtgS3BLgEuQS6BLsEvAS9BL4EvwTABMEEwgTDBMQExQTGBMcEyATJBMoEywTMBM0EzgTPBNAE0QTSBNME1ATVBNYE1wTYBNkE2gTbBNwE3QTeBN8E4AThBOIE4wTkBOUE5gTnBOgE6QTqBOsE7ATtBO4E7wTwBPEE8gTzBPQE9QT2BPcE+AT5BPoE+wT8BP0E/gT/BQAFAQUCBQMFBAUFBQYFBwUIBQkFCgULBQwFDQUOBQ8FEAURBRIFEwUUBRUFFgUXBRgFGQUaBRsFHAUdBR4FHwUgBSEFIgUjBSQFJQUmBScFKAUpBSoFKwUsBS0FLgUvBTAFMQUyBTMFNAU1BTYFNwU4BTkFOgU7BTwFPQU+BT8FQAVBBUIFQwVEBUUFRgVHBUgFSQVKBUsFTAVNBU4FTwVQBVEFUgVTBVQFVQVWBVcFWAVZBVoFWwVcBV0FXgVfBWAFYQViBWMFZAVlBWYFZwVoBWkFagVrBWwFbQVuBW8FcAVxBXIFcwV0BXUFdgV3BXgFeQV6BXsFfAV9BX4FfwWABYEFggWDBYQFhQWGBYcFiAWJBYoFiwWMBY0FjgWPBZAFkQWSBZMFlAWVBZYFlwWYBZkFmgWbBZwFnQWeBZ8FoAWhBaIFowWkBaUFpgWnBagFqQWqBasFrAWtBa4FrwWwBbEFsgWzBbQFtQW2BbcFuAW5BboFuwW8Bb0FvgW/BcAFwQXCBcMFxAXFBcYFxwXIBckFygXLBcwFzQXOBc8F0AXRBdIF0wXUBdUF1gXXBdgF2QXaBdsF3AXdBd4F3wXgBeEF4gXjBeQF5QXmBecF6AXpBeoF6wXsBe0F7gXvBfAF8QXyBfMF9AX1BfYF9wX4BfkF+gX7BfwF/QX+Bf8GAAYBBgIGAwYEBgUGBgYHBggGCQYKBgsGDAYNBg4GDwYQBhEGEgYTBhQGFQYWBhcGGAYZBhoGGwYcBh0GHgYfBiAGIQYiBiMGJAYlBiYGJwYoBikGKgYrBiwGLQYuBi8GMAYxBjIGMwY0BjUGNgY3BjgGOQY6BjsGPAY9Bj4GPwZABkEGQgZDBkQGRQZGBkcGSAZJBkoGSwZMBk0GTgZPBlAGUQZSBlMGVAZVBlYGVwZYBlkGWgZbBlwGXQZeBl8GYAZhBmIGYwZkBmUGZgZnBmgGaQZqBmsGbAZtBm4GbwZwBnEGcgZzBnQGdQZ2BncGeAZ5BnoGewZ8Bn0GfgZ/BoAGgQaCBoMGhAaFBoYGhwaIBokGigaLBowGjQaOBo8GkAaRBpIGkwaUBpUGlgaXBpgGmQaaBpsGnAadBp4GnwagBqEGogajBqQGpQamBqcGqAapBqoGqwasBq0GrgavBrAGsQayBrMGtAa1BrYGtwa4BrkGuga7BrwGvQa+Br8GwAbBBsIGwwbEBsUGxgbHBsgGyQbKBssGzAbNBs4GzwbQBtEG0gbTBtQG1QbWBtcG2AbZBtoG2wbcBt0G3gbfBuAG4QbiBuMG5AblBuYG5wboBukG6gbrBuwG7QbuBu8G8AbxBvIG8wb0BvUG9gb3BvgG+Qb6BvsG/Ab9Bv4G/wcABwEHAgcDBwQHBQcGBwcHCAcJBwoHCwcMBw0HDgcPBxAHEQcSBxMHFAcVBxYHFwcYBxkHGgcbBxwHHQceBx8HIAchByIHIwckByUHJgcnBygHKQcqBysHLActBy4HLwcwBzEHMgczBzQHNQc2BzcHOAc5BzoHOwc8Bz0HPgc/B0AHQQdCB0MHRAdFB0YHRwdIB0kHSgdLB0wHTQdOB08HUAdRB1IHUwdUB1UHVgdXB1gHWQdaB1sHXAddB14HXwdgB2EHYgdjB2QHZQdmB2cHaAdpB2oHawdsB20HbgdvB3AHcQdyB3MHdAd1B3YHdwd4B3kHegd7B3wHfQd+B38HgAeBB4IHgweEB4UHhgeHB4gHiQeKB4sHjAeNB44HjweQB5EHkgeTB5QHlQeWB5cHmAeZB5oHmwecB50HngefB6AHoQeiB6MHpAelB6YHpweoB6kHqgerB6wHrQeuB68HsAexB7IHswe0B7UHtge3B7gHuQe6B7sHvAe9B74HvwfAB8EHwgfDB8QHxQfGB8cHyAfJB8oHywfMB80HzgfPB9AH0QfSB9MH1AfVB9YH1wfYB9kH2gfbB9wH3QfeB98H4AfhB+IH4wfkB+UH5gfnB+gH6QfqB+sH7AftB+4H7wfwB/EH8gfzB/QH9Qf2B/cH+Af5B/oH+wf8B/0H/gf/CAAIAQgCCAMIBAgFCAYIBwgICAkICggLCAwIDQgOCA8IEAgRCBIIEwgUCBUIFggXCBgIGQgaCBsIHAgdCB4IHwggCCEIIggjCCQIJQgmCCcIKAgpCCoIKwgsCC0ILggvCDAIMQgyCDMINAg1CDYINwg4CDkIOgg7CDwIPQg+CD8IQAhBCEIIQwhECEUIRghHCEgISQhKCEsg+wy3+iS3AfcQt/kstwP3EPoEFf58+YT6fAf9WP4nFfnSB/fF/DMFprAV+8X4NwX49gamYhX90gf7xfgzBXBmFffF/DcF/PYGDg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4OAAEBAQr4HwwmmhwZLRL7joscBUaLBr0KvQv65xUD6AB8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAA==");}', 
    c.cssRules.length);
  };
  (function(c) {
    c.instance = {enabled:!1, initJS:function(f) {
    }, registerCallback:function(f) {
    }, unregisterCallback:function(f) {
    }, eval:function(f) {
    }, call:function(f) {
    }, getId:function() {
      return null;
    }};
  })(h.ExternalInterfaceService || (h.ExternalInterfaceService = {}));
  (function(c) {
    c[c.InvalidCallback = -3] = "InvalidCallback";
    c[c.AlreadyTaken = -2] = "AlreadyTaken";
    c[c.InvalidName = -1] = "InvalidName";
    c[c.Success = 0] = "Success";
  })(h.LocalConnectionConnectResult || (h.LocalConnectionConnectResult = {}));
  (function(c) {
    c[c.NotConnected = -1] = "NotConnected";
    c[c.Success = 0] = "Success";
  })(h.LocalConnectionCloseResult || (h.LocalConnectionCloseResult = {}));
  (function(c) {
    c.instance;
  })(h.LocalConnectionService || (h.LocalConnectionService = {}));
  (function(c) {
    c.instance = {setClipboard:function(f) {
    }};
  })(h.ClipboardService || (h.ClipboardService = {}));
  b = function() {
    function c() {
      this._queues = {};
    }
    c.prototype.register = function(f, e) {
      m.assert(f);
      m.assert(e);
      var d = this._queues[f];
      if (d) {
        if (-1 < d.indexOf(e)) {
          return;
        }
      } else {
        d = this._queues[f] = [];
      }
      d.push(e);
    };
    c.prototype.unregister = function(f, e) {
      m.assert(f);
      m.assert(e);
      var d = this._queues[f];
      if (d) {
        var g = d.indexOf(e);
        -1 !== g && d.splice(g, 1);
        0 === d.length && (this._queues[f] = null);
      }
    };
    c.prototype.notify = function(f, e) {
      var d = this._queues[f];
      if (d) {
        d = d.slice();
        e = Array.prototype.slice.call(arguments, 0);
        for (var g = 0;g < d.length;g++) {
          d[g].apply(null, e);
        }
      }
    };
    c.prototype.notify1 = function(f, e) {
      var d = this._queues[f];
      if (d) {
        for (var d = d.slice(), g = 0;g < d.length;g++) {
          (0,d[g])(f, e);
        }
      }
    };
    return c;
  }();
  h.Callback = b;
  (function(c) {
    c[c.None = 0] = "None";
    c[c.PremultipliedAlphaARGB = 1] = "PremultipliedAlphaARGB";
    c[c.StraightAlphaARGB = 2] = "StraightAlphaARGB";
    c[c.StraightAlphaRGBA = 3] = "StraightAlphaRGBA";
    c[c.JPEG = 4] = "JPEG";
    c[c.PNG = 5] = "PNG";
    c[c.GIF = 6] = "GIF";
  })(h.ImageType || (h.ImageType = {}));
  var v = h.ImageType;
  h.getMIMETypeForImageType = function(c) {
    switch(c) {
      case 4:
        return "image/jpeg";
      case 5:
        return "image/png";
      case 6:
        return "image/gif";
      default:
        return "text/plain";
    }
  };
  (function(c) {
    c.toCSSCursor = function(f) {
      switch(f) {
        case 0:
          return "auto";
        case 2:
          return "pointer";
        case 3:
          return "grab";
        case 4:
          return "text";
        default:
          return "default";
      }
    };
  })(h.UI || (h.UI = {}));
  b = function() {
    function c() {
      this.promise = new Promise(function(f, e) {
        this.resolve = f;
        this.reject = e;
      }.bind(this));
    }
    c.prototype.then = function(f, e) {
      return this.promise.then(f, e);
    };
    return c;
  }();
  h.PromiseWrapper = b;
})(Shumway || (Shumway = {}));
"undefined" !== typeof exports && (exports.Shumway = Shumway);
(function() {
  function h(h, r, a) {
    h[r] || Object.defineProperty(h, r, {value:a, writable:!0, configurable:!0, enumerable:!1});
  }
  h(String.prototype, "padRight", function(h, r) {
    var a = this, w = a.replace(/\033\[[0-9]*m/g, "").length;
    if (!h || w >= r) {
      return a;
    }
    for (var w = (r - w) / h.length, m = 0;m < w;m++) {
      a += h;
    }
    return a;
  });
  h(String.prototype, "padLeft", function(h, r) {
    var a = this, w = a.length;
    if (!h || w >= r) {
      return a;
    }
    for (var w = (r - w) / h.length, m = 0;m < w;m++) {
      a = h + a;
    }
    return a;
  });
  h(String.prototype, "trim", function() {
    return this.replace(/^\s+|\s+$/g, "");
  });
  h(String.prototype, "endsWith", function(h) {
    return -1 !== this.indexOf(h, this.length - h.length);
  });
  h(Array.prototype, "replace", function(h, r) {
    if (h === r) {
      return 0;
    }
    for (var a = 0, w = 0;w < this.length;w++) {
      this[w] === h && (this[w] = r, a++);
    }
    return a;
  });
})();
(function(h) {
  (function(p) {
    var r = h.isObject, a = function() {
      function b(a, l, t, m) {
        this.shortName = a;
        this.longName = l;
        this.type = t;
        m = m || {};
        this.positional = m.positional;
        this.parseFn = m.parse;
        this.value = m.defaultValue;
      }
      b.prototype.parse = function(b) {
        this.value = "boolean" === this.type ? b : "number" === this.type ? parseInt(b, 10) : b;
        this.parseFn && this.parseFn(this.value);
      };
      return b;
    }();
    p.Argument = a;
    var w = function() {
      function b() {
        this.args = [];
      }
      b.prototype.addArgument = function(b, l, t, m) {
        b = new a(b, l, t, m);
        this.args.push(b);
        return b;
      };
      b.prototype.addBoundOption = function(b) {
        this.args.push(new a(b.shortName, b.longName, b.type, {parse:function(a) {
          b.value = a;
        }}));
      };
      b.prototype.addBoundOptionSet = function(b) {
        var a = this;
        b.options.forEach(function(b) {
          m.isOptionSet(b) ? a.addBoundOptionSet(b) : a.addBoundOption(b);
        });
      };
      b.prototype.getUsage = function() {
        var b = "";
        this.args.forEach(function(a) {
          b = a.positional ? b + a.longName : b + ("[-" + a.shortName + "|--" + a.longName + ("boolean" === a.type ? "" : " " + a.type[0].toUpperCase()) + "]");
          b += " ";
        });
        return b;
      };
      b.prototype.parse = function(b) {
        var a = {}, l = [];
        this.args.forEach(function(f) {
          f.positional ? l.push(f) : (a["-" + f.shortName] = f, a["--" + f.longName] = f);
        });
        for (var m = [];b.length;) {
          var n = b.shift(), v = null, c = n;
          if ("--" == n) {
            m = m.concat(b);
            break;
          } else {
            if ("-" == n.slice(0, 1) || "--" == n.slice(0, 2)) {
              v = a[n];
              if (!v) {
                continue;
              }
              c = "boolean" !== v.type ? b.shift() : !0;
            } else {
              l.length ? v = l.shift() : m.push(c);
            }
          }
          v && v.parse(c);
        }
        return m;
      };
      return b;
    }();
    p.ArgumentParser = w;
    var m = function() {
      function a(b, l) {
        void 0 === l && (l = null);
        this.open = !1;
        this.name = b;
        this.settings = l || {};
        this.options = [];
      }
      a.isOptionSet = function(u) {
        return u instanceof a ? !0 : "object" !== typeof u || null === u || u instanceof b ? !1 : "options" in u && "name" in u && "settings" in u;
      };
      a.prototype.register = function(b) {
        if (a.isOptionSet(b)) {
          for (var k = 0;k < this.options.length;k++) {
            var t = this.options[k];
            if (a.isOptionSet(t) && t.name === b.name) {
              return t;
            }
          }
        }
        this.options.push(b);
        if (this.settings) {
          if (a.isOptionSet(b)) {
            k = this.settings[b.name], r(k) && (b.settings = k.settings, b.open = k.open);
          } else {
            if ("undefined" !== typeof this.settings[b.longName]) {
              switch(b.type) {
                case "boolean":
                  b.value = !!this.settings[b.longName];
                  break;
                case "number":
                  b.value = +this.settings[b.longName];
                  break;
                default:
                  b.value = this.settings[b.longName];
              }
            }
          }
        }
        return b;
      };
      a.prototype.trace = function(b) {
        b.enter(this.name + " {");
        this.options.forEach(function(a) {
          a.trace(b);
        });
        b.leave("}");
      };
      a.prototype.getSettings = function() {
        var b = {};
        this.options.forEach(function(k) {
          a.isOptionSet(k) ? b[k.name] = {settings:k.getSettings(), open:k.open} : b[k.longName] = k.value;
        });
        return b;
      };
      a.prototype.setSettings = function(b) {
        b && this.options.forEach(function(k) {
          a.isOptionSet(k) ? k.name in b && k.setSettings(b[k.name].settings) : k.longName in b && (k.value = b[k.longName]);
        });
      };
      return a;
    }();
    p.OptionSet = m;
    var b = function() {
      function b(a, l, t, m, n, v) {
        void 0 === v && (v = null);
        this.longName = l;
        this.shortName = a;
        this.type = t;
        this.value = this.defaultValue = m;
        this.description = n;
        this.config = v;
      }
      b.prototype.parse = function(b) {
        this.value = b;
      };
      b.prototype.trace = function(b) {
        b.writeLn(("-" + this.shortName + "|--" + this.longName).padRight(" ", 30) + " = " + this.type + " " + this.value + " [" + this.defaultValue + "] (" + this.description + ")");
      };
      return b;
    }();
    p.Option = b;
  })(h.Options || (h.Options = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(r) {
    r.ROOT = "Shumway Options";
    r.shumwayOptions = new h.Options.OptionSet(r.ROOT);
    r.setSettings = function(a) {
      r.shumwayOptions.setSettings(a);
    };
    r.getSettings = function() {
      return r.shumwayOptions.getSettings();
    };
  })(h.Settings || (h.Settings = {}));
  var p = h.Options.Option;
  h.loggingOptions = h.Settings.shumwayOptions.register(new h.Options.OptionSet("Logging Options"));
  h.omitRepeatedWarnings = h.loggingOptions.register(new p("wo", "warnOnce", "boolean", !0, "Omit Repeated Warnings"));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    var r = function() {
      function a(a, m) {
        this._parent = a;
        this._timers = h.ObjectUtilities.createMap();
        this._name = m;
        this._count = this._total = this._last = this._begin = 0;
      }
      a.time = function(h, m) {
        a.start(h);
        m();
        a.stop();
      };
      a.start = function(h) {
        a._top = a._top._timers[h] || (a._top._timers[h] = new a(a._top, h));
        a._top.start();
        h = a._flat._timers[h] || (a._flat._timers[h] = new a(a._flat, h));
        h.start();
        a._flatStack.push(h);
      };
      a.stop = function() {
        a._top.stop();
        a._top = a._top._parent;
        a._flatStack.pop().stop();
      };
      a.stopStart = function(h) {
        a.stop();
        a.start(h);
      };
      a.prototype.start = function() {
        this._begin = h.getTicks();
      };
      a.prototype.stop = function() {
        this._last = h.getTicks() - this._begin;
        this._total += this._last;
        this._count += 1;
      };
      a.prototype.toJSON = function() {
        return {name:this._name, total:this._total, timers:this._timers};
      };
      a.prototype.trace = function(a) {
        a.enter(this._name + ": " + this._total.toFixed(2) + " ms, count: " + this._count + ", average: " + (this._total / this._count).toFixed(2) + " ms");
        for (var m in this._timers) {
          this._timers[m].trace(a);
        }
        a.outdent();
      };
      a.trace = function(h) {
        a._base.trace(h);
        a._flat.trace(h);
      };
      a._base = new a(null, "Total");
      a._top = a._base;
      a._flat = new a(null, "Flat");
      a._flatStack = [];
      return a;
    }();
    p.Timer = r;
    r = function() {
      function a(a) {
        this._enabled = a;
        this.clear();
      }
      Object.defineProperty(a.prototype, "counts", {get:function() {
        return this._counts;
      }, enumerable:!0, configurable:!0});
      a.prototype.setEnabled = function(a) {
        this._enabled = a;
      };
      a.prototype.clear = function() {
        this._counts = h.ObjectUtilities.createMap();
        this._times = h.ObjectUtilities.createMap();
      };
      a.prototype.toJSON = function() {
        return {counts:this._counts, times:this._times};
      };
      a.prototype.count = function(a, m, b) {
        void 0 === m && (m = 1);
        void 0 === b && (b = 0);
        if (this._enabled) {
          return void 0 === this._counts[a] && (this._counts[a] = 0, this._times[a] = 0), this._counts[a] += m, this._times[a] += b, this._counts[a];
        }
      };
      a.prototype.trace = function(a) {
        for (var m in this._counts) {
          a.writeLn(m + ": " + this._counts[m]);
        }
      };
      a.prototype._pairToString = function(a, m) {
        var b = m[0], l = m[1], u = a[b], b = b + ": " + l;
        u && (b += ", " + u.toFixed(4), 1 < l && (b += " (" + (u / l).toFixed(4) + ")"));
        return b;
      };
      a.prototype.toStringSorted = function() {
        var a = this, m = this._times, b = [], l;
        for (l in this._counts) {
          b.push([l, this._counts[l]]);
        }
        b.sort(function(b, a) {
          return a[1] - b[1];
        });
        return b.map(function(b) {
          return a._pairToString(m, b);
        }).join(", ");
      };
      a.prototype.traceSorted = function(a, m) {
        void 0 === m && (m = !1);
        var b = this, l = this._times, u = [], k;
        for (k in this._counts) {
          u.push([k, this._counts[k]]);
        }
        u.sort(function(b, a) {
          return a[1] - b[1];
        });
        m ? a.writeLn(u.map(function(a) {
          return b._pairToString(l, a);
        }).join(", ")) : u.forEach(function(k) {
          a.writeLn(b._pairToString(l, k));
        });
      };
      a.instance = new a(!0);
      return a;
    }();
    p.Counter = r;
    r = function() {
      function a(a) {
        this._samples = new Float64Array(a);
        this._index = this._count = 0;
      }
      a.prototype.push = function(a) {
        this._count < this._samples.length && this._count++;
        this._index++;
        this._samples[this._index % this._samples.length] = a;
      };
      a.prototype.average = function() {
        for (var a = 0, m = 0;m < this._count;m++) {
          a += this._samples[m];
        }
        return a / this._count;
      };
      return a;
    }();
    p.Average = r;
  })(h.Metrics || (h.Metrics = {}));
})(Shumway || (Shumway = {}));
var __extends = this.__extends || function(h, p) {
  function r() {
    this.constructor = h;
  }
  for (var a in p) {
    p.hasOwnProperty(a) && (h[a] = p[a]);
  }
  r.prototype = p.prototype;
  h.prototype = new r;
};
(function(h) {
  (function(h) {
    function r(e) {
      for (var d = Math.max.apply(null, e), g = e.length, f = 1 << d, c = new Uint32Array(f), b = d << 16 | 65535, a = 0;a < f;a++) {
        c[a] = b;
      }
      for (var b = 0, a = 1, l = 2;a <= d;b <<= 1, ++a, l <<= 1) {
        for (var k = 0;k < g;++k) {
          if (e[k] === a) {
            for (var v = 0, n = 0;n < a;++n) {
              v = 2 * v + (b >> n & 1);
            }
            for (n = v;n < f;n += l) {
              c[n] = a << 16 | k;
            }
            ++b;
          }
        }
      }
      return {codes:c, maxBits:d};
    }
    var a;
    (function(e) {
      e[e.INIT = 0] = "INIT";
      e[e.BLOCK_0 = 1] = "BLOCK_0";
      e[e.BLOCK_1 = 2] = "BLOCK_1";
      e[e.BLOCK_2_PRE = 3] = "BLOCK_2_PRE";
      e[e.BLOCK_2 = 4] = "BLOCK_2";
      e[e.DONE = 5] = "DONE";
      e[e.ERROR = 6] = "ERROR";
      e[e.VERIFY_HEADER = 7] = "VERIFY_HEADER";
    })(a || (a = {}));
    a = function() {
      function e(d) {
      }
      e.prototype.push = function(d) {
      };
      e.prototype.close = function() {
      };
      e.create = function(d) {
        return "undefined" !== typeof ShumwayCom && ShumwayCom.createSpecialInflate ? new v(d, ShumwayCom.createSpecialInflate) : new w(d);
      };
      e.prototype._processZLibHeader = function(d, g, e) {
        if (g + 2 > e) {
          return 0;
        }
        d = d[g] << 8 | d[g + 1];
        g = null;
        2048 !== (d & 3840) ? g = "inflate: unknown compression method" : 0 !== d % 31 ? g = "inflate: bad FCHECK" : 0 !== (d & 32) && (g = "inflate: FDICT bit set");
        if (g) {
          if (this.onError) {
            this.onError(g);
          }
          return -1;
        }
        return 2;
      };
      e.inflate = function(d, g, f) {
        var c = new Uint8Array(g), b = 0;
        g = e.create(f);
        g.onData = function(g) {
          var d = Math.min(g.length, c.length - b);
          d && h.memCopy(c, g, b, 0, d);
          b += d;
        };
        g.onError = function(g) {
          throw Error(g);
        };
        g.push(d);
        g.close();
        return c;
      };
      return e;
    }();
    h.Inflate = a;
    var w = function(e) {
      function d(g) {
        e.call(this, g);
        this._buffer = null;
        this._bitLength = this._bitBuffer = this._bufferPosition = this._bufferSize = 0;
        this._window = new Uint8Array(65794);
        this._windowPosition = 0;
        this._state = g ? 7 : 0;
        this._isFinalBlock = !1;
        this._distanceTable = this._literalTable = null;
        this._block0Read = 0;
        this._block2State = null;
        this._copyState = {state:0, len:0, lenBits:0, dist:0, distBits:0};
        if (!n) {
          m = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
          b = new Uint16Array(30);
          l = new Uint8Array(30);
          for (var d = g = 0, f = 1;30 > g;++g) {
            b[g] = f, f += 1 << (l[g] = ~~((d += 2 < g ? 1 : 0) / 2));
          }
          var c = new Uint8Array(288);
          for (g = 0;32 > g;++g) {
            c[g] = 5;
          }
          u = r(c.subarray(0, 32));
          k = new Uint16Array(29);
          t = new Uint8Array(29);
          d = g = 0;
          for (f = 3;29 > g;++g) {
            k[g] = f - (28 == g ? 1 : 0), f += 1 << (t[g] = ~~((d += 4 < g ? 1 : 0) / 4 % 6));
          }
          for (g = 0;288 > g;++g) {
            c[g] = 144 > g || 279 < g ? 8 : 256 > g ? 9 : 7;
          }
          q = r(c);
          n = !0;
        }
      }
      __extends(d, e);
      d.prototype.push = function(g) {
        if (!this._buffer || this._buffer.length < this._bufferSize + g.length) {
          var d = new Uint8Array(this._bufferSize + g.length);
          this._buffer && d.set(this._buffer);
          this._buffer = d;
        }
        this._buffer.set(g, this._bufferSize);
        this._bufferSize += g.length;
        this._bufferPosition = 0;
        g = !1;
        do {
          d = this._windowPosition;
          if (0 === this._state && (g = this._decodeInitState())) {
            break;
          }
          switch(this._state) {
            case 1:
              g = this._decodeBlock0();
              break;
            case 3:
              if (g = this._decodeBlock2Pre()) {
                break;
              }
            ;
            case 2:
            ;
            case 4:
              g = this._decodeBlock();
              break;
            case 6:
            ;
            case 5:
              this._bufferPosition = this._bufferSize;
              break;
            case 7:
              var e = this._processZLibHeader(this._buffer, this._bufferPosition, this._bufferSize);
              0 < e ? (this._bufferPosition += e, this._state = 0) : 0 === e ? g = !0 : this._state = 6;
          }
          if (0 < this._windowPosition - d) {
            this.onData(this._window.subarray(d, this._windowPosition));
          }
          65536 <= this._windowPosition && ("copyWithin" in this._buffer ? this._window.copyWithin(0, this._windowPosition - 32768, this._windowPosition) : this._window.set(this._window.subarray(this._windowPosition - 32768, this._windowPosition)), this._windowPosition = 32768);
        } while (!g && this._bufferPosition < this._bufferSize);
        this._bufferPosition < this._bufferSize ? ("copyWithin" in this._buffer ? this._buffer.copyWithin(0, this._bufferPosition, this._bufferSize) : this._buffer.set(this._buffer.subarray(this._bufferPosition, this._bufferSize)), this._bufferSize -= this._bufferPosition) : this._bufferSize = 0;
      };
      d.prototype._decodeInitState = function() {
        if (this._isFinalBlock) {
          return this._state = 5, !1;
        }
        var g = this._buffer, d = this._bufferSize, e = this._bitBuffer, f = this._bitLength, c = this._bufferPosition;
        if (3 > (d - c << 3) + f) {
          return !0;
        }
        3 > f && (e |= g[c++] << f, f += 8);
        var b = e & 7, e = e >> 3, f = f - 3;
        switch(b >> 1) {
          case 0:
            f = e = 0;
            if (4 > d - c) {
              return !0;
            }
            var a = g[c] | g[c + 1] << 8, g = g[c + 2] | g[c + 3] << 8, c = c + 4;
            if (65535 !== (a ^ g)) {
              this._error("inflate: invalid block 0 length");
              g = 6;
              break;
            }
            0 === a ? g = 0 : (this._block0Read = a, g = 1);
            break;
          case 1:
            g = 2;
            this._literalTable = q;
            this._distanceTable = u;
            break;
          case 2:
            if (26 > (d - c << 3) + f) {
              return !0;
            }
            for (;14 > f;) {
              e |= g[c++] << f, f += 8;
            }
            a = (e >> 10 & 15) + 4;
            if ((d - c << 3) + f < 14 + 3 * a) {
              return !0;
            }
            for (var d = {numLiteralCodes:(e & 31) + 257, numDistanceCodes:(e >> 5 & 31) + 1, codeLengthTable:void 0, bitLengths:void 0, codesRead:0, dupBits:0}, e = e >> 14, f = f - 14, l = new Uint8Array(19), k = 0;k < a;++k) {
              3 > f && (e |= g[c++] << f, f += 8), l[m[k]] = e & 7, e >>= 3, f -= 3;
            }
            for (;19 > k;k++) {
              l[m[k]] = 0;
            }
            d.bitLengths = new Uint8Array(d.numLiteralCodes + d.numDistanceCodes);
            d.codeLengthTable = r(l);
            this._block2State = d;
            g = 3;
            break;
          default:
            return this._error("inflate: unsupported block type"), !1;
        }
        this._isFinalBlock = !!(b & 1);
        this._state = g;
        this._bufferPosition = c;
        this._bitBuffer = e;
        this._bitLength = f;
        return !1;
      };
      d.prototype._error = function(g) {
        if (this.onError) {
          this.onError(g);
        }
      };
      d.prototype._decodeBlock0 = function() {
        var g = this._bufferPosition, d = this._windowPosition, e = this._block0Read, f = 65794 - d, c = this._bufferSize - g, b = c < e, a = Math.min(f, c, e);
        this._window.set(this._buffer.subarray(g, g + a), d);
        this._windowPosition = d + a;
        this._bufferPosition = g + a;
        this._block0Read = e - a;
        return e === a ? (this._state = 0, !1) : b && f < c;
      };
      d.prototype._readBits = function(g) {
        var d = this._bitBuffer, e = this._bitLength;
        if (g > e) {
          var f = this._bufferPosition, c = this._bufferSize;
          do {
            if (f >= c) {
              return this._bufferPosition = f, this._bitBuffer = d, this._bitLength = e, -1;
            }
            d |= this._buffer[f++] << e;
            e += 8;
          } while (g > e);
          this._bufferPosition = f;
        }
        this._bitBuffer = d >> g;
        this._bitLength = e - g;
        return d & (1 << g) - 1;
      };
      d.prototype._readCode = function(g) {
        var d = this._bitBuffer, e = this._bitLength, f = g.maxBits;
        if (f > e) {
          var c = this._bufferPosition, b = this._bufferSize;
          do {
            if (c >= b) {
              return this._bufferPosition = c, this._bitBuffer = d, this._bitLength = e, -1;
            }
            d |= this._buffer[c++] << e;
            e += 8;
          } while (f > e);
          this._bufferPosition = c;
        }
        g = g.codes[d & (1 << f) - 1];
        f = g >> 16;
        if (g & 32768) {
          return this._error("inflate: invalid encoding"), this._state = 6, -1;
        }
        this._bitBuffer = d >> f;
        this._bitLength = e - f;
        return g & 65535;
      };
      d.prototype._decodeBlock2Pre = function() {
        var g = this._block2State, d = g.numLiteralCodes + g.numDistanceCodes, e = g.bitLengths, f = g.codesRead, c = 0 < f ? e[f - 1] : 0, b = g.codeLengthTable, a;
        if (0 < g.dupBits) {
          a = this._readBits(g.dupBits);
          if (0 > a) {
            return !0;
          }
          for (;a--;) {
            e[f++] = c;
          }
          g.dupBits = 0;
        }
        for (;f < d;) {
          var l = this._readCode(b);
          if (0 > l) {
            return g.codesRead = f, !0;
          }
          if (16 > l) {
            e[f++] = c = l;
          } else {
            var k;
            switch(l) {
              case 16:
                k = 2;
                a = 3;
                l = c;
                break;
              case 17:
                a = k = 3;
                l = 0;
                break;
              case 18:
                k = 7, a = 11, l = 0;
            }
            for (;a--;) {
              e[f++] = l;
            }
            a = this._readBits(k);
            if (0 > a) {
              return g.codesRead = f, g.dupBits = k, !0;
            }
            for (;a--;) {
              e[f++] = l;
            }
            c = l;
          }
        }
        this._literalTable = r(e.subarray(0, g.numLiteralCodes));
        this._distanceTable = r(e.subarray(g.numLiteralCodes));
        this._state = 4;
        this._block2State = null;
        return !1;
      };
      d.prototype._decodeBlock = function() {
        var g = this._literalTable, d = this._distanceTable, e = this._window, f = this._windowPosition, c = this._copyState, a, v, n, m;
        if (0 !== c.state) {
          switch(c.state) {
            case 1:
              if (0 > (a = this._readBits(c.lenBits))) {
                return !0;
              }
              c.len += a;
              c.state = 2;
            case 2:
              if (0 > (a = this._readCode(d))) {
                return !0;
              }
              c.distBits = l[a];
              c.dist = b[a];
              c.state = 3;
            case 3:
              a = 0;
              if (0 < c.distBits && 0 > (a = this._readBits(c.distBits))) {
                return !0;
              }
              m = c.dist + a;
              v = c.len;
              for (a = f - m;v--;) {
                e[f++] = e[a++];
              }
              c.state = 0;
              if (65536 <= f) {
                return this._windowPosition = f, !1;
              }
              break;
          }
        }
        do {
          a = this._readCode(g);
          if (0 > a) {
            return this._windowPosition = f, !0;
          }
          if (256 > a) {
            e[f++] = a;
          } else {
            if (256 < a) {
              this._windowPosition = f;
              a -= 257;
              n = t[a];
              v = k[a];
              a = 0 === n ? 0 : this._readBits(n);
              if (0 > a) {
                return c.state = 1, c.len = v, c.lenBits = n, !0;
              }
              v += a;
              a = this._readCode(d);
              if (0 > a) {
                return c.state = 2, c.len = v, !0;
              }
              n = l[a];
              m = b[a];
              a = 0 === n ? 0 : this._readBits(n);
              if (0 > a) {
                return c.state = 3, c.len = v, c.dist = m, c.distBits = n, !0;
              }
              m += a;
              for (a = f - m;v--;) {
                e[f++] = e[a++];
              }
            } else {
              this._state = 0;
              break;
            }
          }
        } while (65536 > f);
        this._windowPosition = f;
        return !1;
      };
      return d;
    }(a), m, b, l, u, k, t, q, n = !1, v = function(e) {
      function d(g, d) {
        e.call(this, g);
        this._verifyHeader = g;
        this._specialInflate = d();
        this._specialInflate.setDataCallback(function(g) {
          this.onData(g);
        }.bind(this));
      }
      __extends(d, e);
      d.prototype.push = function(g) {
        if (this._verifyHeader) {
          var d;
          this._buffer ? (d = new Uint8Array(this._buffer.length + g.length), d.set(this._buffer), d.set(g, this._buffer.length), this._buffer = null) : d = new Uint8Array(g);
          var e = this._processZLibHeader(d, 0, d.length);
          if (0 === e) {
            this._buffer = d;
            return;
          }
          this._verifyHeader = !0;
          0 < e && (g = d.subarray(e));
        }
        this._specialInflate.push(g);
      };
      d.prototype.close = function() {
        this._specialInflate && (this._specialInflate.close(), this._specialInflate = null);
      };
      return d;
    }(a), c;
    (function(e) {
      e[e.WRITE = 0] = "WRITE";
      e[e.DONE = 1] = "DONE";
      e[e.ZLIB_HEADER = 2] = "ZLIB_HEADER";
    })(c || (c = {}));
    var f = function() {
      function e() {
        this.a = 1;
        this.b = 0;
      }
      e.prototype.update = function(d, g, e) {
        for (var f = this.a, c = this.b;g < e;++g) {
          f = (f + (d[g] & 255)) % 65521, c = (c + f) % 65521;
        }
        this.a = f;
        this.b = c;
      };
      e.prototype.getChecksum = function() {
        return this.b << 16 | this.a;
      };
      return e;
    }();
    h.Adler32 = f;
    c = function() {
      function e(d) {
        this._state = (this._writeZlibHeader = d) ? 2 : 0;
        this._adler32 = d ? new f : null;
      }
      e.prototype.push = function(d) {
        2 === this._state && (this.onData(new Uint8Array([120, 156])), this._state = 0);
        for (var g = d.length, e = g + 5 * Math.ceil(g / 65535), e = new Uint8Array(e), f = 0, c = 0;65535 < g;) {
          e.set(new Uint8Array([0, 255, 255, 0, 0]), f), f += 5, e.set(d.subarray(c, c + 65535), f), c += 65535, f += 65535, g -= 65535;
        }
        e.set(new Uint8Array([0, g & 255, g >> 8 & 255, ~g & 255, ~g >> 8 & 255]), f);
        f += 5;
        e.set(d.subarray(c, g), f);
        this.onData(e);
        this._adler32 && this._adler32.update(d, 0, g);
      };
      e.prototype.close = function() {
        this._state = 1;
        this.onData(new Uint8Array([1, 0, 0, 255, 255]));
        if (this._adler32) {
          var e = this._adler32.getChecksum();
          this.onData(new Uint8Array([e & 255, e >> 8 & 255, e >> 16 & 255, e >>> 24 & 255]));
        }
      };
      return e;
    }();
    h.Deflate = c;
  })(h.ArrayUtilities || (h.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    function r(e) {
      for (var g = new Uint16Array(e), f = 0;f < e;f++) {
        g[f] = 1024;
      }
      return g;
    }
    function a(e, g, f, c) {
      for (var b = 1, a = 0, l = 0;l < f;l++) {
        var k = c.decodeBit(e, b + g), b = (b << 1) + k, a = a | k << l
      }
      return a;
    }
    function w(e, g) {
      var f = [];
      f.length = g;
      for (var c = 0;c < g;c++) {
        f[c] = new k(e);
      }
      return f;
    }
    var m = function() {
      function e() {
        this.pos = this.available = 0;
        this.buffer = new Uint8Array(2E3);
      }
      e.prototype.append = function(g) {
        var e = this.pos + this.available, d = e + g.length;
        if (d > this.buffer.length) {
          for (var f = 2 * this.buffer.length;f < d;) {
            f *= 2;
          }
          d = new Uint8Array(f);
          d.set(this.buffer);
          this.buffer = d;
        }
        this.buffer.set(g, e);
        this.available += g.length;
      };
      e.prototype.compact = function() {
        0 !== this.available && (this.buffer.set(this.buffer.subarray(this.pos, this.pos + this.available), 0), this.pos = 0);
      };
      e.prototype.readByte = function() {
        if (0 >= this.available) {
          throw Error("Unexpected end of file");
        }
        this.available--;
        return this.buffer[this.pos++];
      };
      return e;
    }(), b = function() {
      function e(g) {
        this.onData = g;
        this.processed = 0;
      }
      e.prototype.writeBytes = function(g) {
        this.onData.call(null, g);
        this.processed += g.length;
      };
      return e;
    }(), l = function() {
      function e(g) {
        this.outStream = g;
        this.buf = null;
        this.size = this.pos = 0;
        this.isFull = !1;
        this.totalPos = this.writePos = 0;
      }
      e.prototype.create = function(g) {
        this.buf = new Uint8Array(g);
        this.pos = 0;
        this.size = g;
        this.isFull = !1;
        this.totalPos = this.writePos = 0;
      };
      e.prototype.putByte = function(g) {
        this.totalPos++;
        this.buf[this.pos++] = g;
        this.pos === this.size && (this.flush(), this.pos = 0, this.isFull = !0);
      };
      e.prototype.getByte = function(g) {
        return this.buf[g <= this.pos ? this.pos - g : this.size - g + this.pos];
      };
      e.prototype.flush = function() {
        this.writePos < this.pos && (this.outStream.writeBytes(this.buf.subarray(this.writePos, this.pos)), this.writePos = this.pos === this.size ? 0 : this.pos);
      };
      e.prototype.copyMatch = function(g, e) {
        for (var d = this.pos, f = this.size, c = this.buf, b = g <= d ? d - g : f - g + d, a = e;0 < a;) {
          for (var l = Math.min(Math.min(a, f - d), f - b), k = 0;k < l;k++) {
            var v = c[b++];
            c[d++] = v;
          }
          d === f && (this.pos = d, this.flush(), d = 0, this.isFull = !0);
          b === f && (b = 0);
          a -= l;
        }
        this.pos = d;
        this.totalPos += e;
      };
      e.prototype.checkDistance = function(g) {
        return g <= this.pos || this.isFull;
      };
      e.prototype.isEmpty = function() {
        return 0 === this.pos && !this.isFull;
      };
      return e;
    }(), u = function() {
      function e(g) {
        this.inStream = g;
        this.code = this.range = 0;
        this.corrupted = !1;
      }
      e.prototype.init = function() {
        0 !== this.inStream.readByte() && (this.corrupted = !0);
        this.range = -1;
        for (var g = 0, e = 0;4 > e;e++) {
          g = g << 8 | this.inStream.readByte();
        }
        g === this.range && (this.corrupted = !0);
        this.code = g;
      };
      e.prototype.isFinishedOK = function() {
        return 0 === this.code;
      };
      e.prototype.decodeDirectBits = function(g) {
        var e = 0, d = this.range, f = this.code;
        do {
          var d = d >>> 1 | 0, f = f - d | 0, c = f >> 31, f = f + (d & c) | 0;
          f === d && (this.corrupted = !0);
          0 <= d && 16777216 > d && (d <<= 8, f = f << 8 | this.inStream.readByte());
          e = (e << 1) + c + 1 | 0;
        } while (--g);
        this.range = d;
        this.code = f;
        return e;
      };
      e.prototype.decodeBit = function(g, e) {
        var d = this.range, f = this.code, c = g[e], b = (d >>> 11) * c;
        f >>> 0 < b ? (c = c + (2048 - c >> 5) | 0, d = b | 0, b = 0) : (c = c - (c >> 5) | 0, f = f - b | 0, d = d - b | 0, b = 1);
        g[e] = c & 65535;
        0 <= d && 16777216 > d && (d <<= 8, f = f << 8 | this.inStream.readByte());
        this.range = d;
        this.code = f;
        return b;
      };
      return e;
    }(), k = function() {
      function e(g) {
        this.numBits = g;
        this.probs = r(1 << g);
      }
      e.prototype.decode = function(g) {
        for (var e = 1, d = 0;d < this.numBits;d++) {
          e = (e << 1) + g.decodeBit(this.probs, e);
        }
        return e - (1 << this.numBits);
      };
      e.prototype.reverseDecode = function(g) {
        return a(this.probs, 0, this.numBits, g);
      };
      return e;
    }(), t = function() {
      function e() {
        this.choice = r(2);
        this.lowCoder = w(3, 16);
        this.midCoder = w(3, 16);
        this.highCoder = new k(8);
      }
      e.prototype.decode = function(g, e) {
        return 0 === g.decodeBit(this.choice, 0) ? this.lowCoder[e].decode(g) : 0 === g.decodeBit(this.choice, 1) ? 8 + this.midCoder[e].decode(g) : 16 + this.highCoder.decode(g);
      };
      return e;
    }(), q = function() {
      function e(g, d) {
        this.rangeDec = new u(g);
        this.outWindow = new l(d);
        this.markerIsMandatory = !1;
        this.dictSizeInProperties = this.dictSize = this.lp = this.pb = this.lc = 0;
        this.leftToUnpack = this.unpackSize = void 0;
        this.reps = new Int32Array(4);
        this.state = 0;
      }
      e.prototype.decodeProperties = function(g) {
        var e = g[0];
        if (225 <= e) {
          throw Error("Incorrect LZMA properties");
        }
        this.lc = e % 9;
        e = e / 9 | 0;
        this.pb = e / 5 | 0;
        this.lp = e % 5;
        for (e = this.dictSizeInProperties = 0;4 > e;e++) {
          this.dictSizeInProperties |= g[e + 1] << 8 * e;
        }
        this.dictSize = this.dictSizeInProperties;
        4096 > this.dictSize && (this.dictSize = 4096);
      };
      e.prototype.create = function() {
        this.outWindow.create(this.dictSize);
        this.init();
        this.rangeDec.init();
        this.reps[0] = 0;
        this.reps[1] = 0;
        this.reps[2] = 0;
        this.state = this.reps[3] = 0;
        this.leftToUnpack = this.unpackSize;
      };
      e.prototype.decodeLiteral = function(g, e) {
        var d = this.outWindow, f = this.rangeDec, c = 0;
        d.isEmpty() || (c = d.getByte(1));
        var b = 1, c = 768 * (((d.totalPos & (1 << this.lp) - 1) << this.lc) + (c >> 8 - this.lc));
        if (7 <= g) {
          d = d.getByte(e + 1);
          do {
            var a = d >> 7 & 1, d = d << 1, l = f.decodeBit(this.litProbs, c + ((1 + a << 8) + b)), b = b << 1 | l;
            if (a !== l) {
              break;
            }
          } while (256 > b);
        }
        for (;256 > b;) {
          b = b << 1 | f.decodeBit(this.litProbs, c + b);
        }
        return b - 256 & 255;
      };
      e.prototype.decodeDistance = function(g) {
        var e = g;
        3 < e && (e = 3);
        g = this.rangeDec;
        e = this.posSlotDecoder[e].decode(g);
        if (4 > e) {
          return e;
        }
        var d = (e >> 1) - 1, f = (2 | e & 1) << d;
        14 > e ? f = f + a(this.posDecoders, f - e, d, g) | 0 : (f = f + (g.decodeDirectBits(d - 4) << 4) | 0, f = f + this.alignDecoder.reverseDecode(g) | 0);
        return f;
      };
      e.prototype.init = function() {
        this.litProbs = r(768 << this.lc + this.lp);
        this.posSlotDecoder = w(6, 4);
        this.alignDecoder = new k(4);
        this.posDecoders = r(115);
        this.isMatch = r(192);
        this.isRep = r(12);
        this.isRepG0 = r(12);
        this.isRepG1 = r(12);
        this.isRepG2 = r(12);
        this.isRep0Long = r(192);
        this.lenDecoder = new t;
        this.repLenDecoder = new t;
      };
      e.prototype.decode = function(g) {
        for (var e = this.rangeDec, d = this.outWindow, b = this.pb, a = this.dictSize, l = this.markerIsMandatory, k = this.leftToUnpack, m = this.isMatch, t = this.isRep, u = this.isRepG0, q = this.isRepG1, h = this.isRepG2, r = this.isRep0Long, p = this.lenDecoder, w = this.repLenDecoder, z = this.reps[0], B = this.reps[1], E = this.reps[2], A = this.reps[3], C = this.state;;) {
          if (g && 48 > e.inStream.available) {
            this.outWindow.flush();
            break;
          }
          if (0 === k && !l && (this.outWindow.flush(), e.isFinishedOK())) {
            return c;
          }
          var F = d.totalPos & (1 << b) - 1;
          if (0 === e.decodeBit(m, (C << 4) + F)) {
            if (0 === k) {
              return n;
            }
            d.putByte(this.decodeLiteral(C, z));
            C = 4 > C ? 0 : 10 > C ? C - 3 : C - 6;
            k--;
          } else {
            if (0 !== e.decodeBit(t, C)) {
              if (0 === k || d.isEmpty()) {
                return n;
              }
              if (0 === e.decodeBit(u, C)) {
                if (0 === e.decodeBit(r, (C << 4) + F)) {
                  C = 7 > C ? 9 : 11;
                  d.putByte(d.getByte(z + 1));
                  k--;
                  continue;
                }
              } else {
                var G;
                0 === e.decodeBit(q, C) ? G = B : (0 === e.decodeBit(h, C) ? G = E : (G = A, A = E), E = B);
                B = z;
                z = G;
              }
              F = w.decode(e, F);
              C = 7 > C ? 8 : 11;
            } else {
              A = E;
              E = B;
              B = z;
              F = p.decode(e, F);
              C = 7 > C ? 7 : 10;
              z = this.decodeDistance(F);
              if (-1 === z) {
                return this.outWindow.flush(), e.isFinishedOK() ? v : n;
              }
              if (0 === k || z >= a || !d.checkDistance(z)) {
                return n;
              }
            }
            F += 2;
            G = !1;
            void 0 !== k && k < F && (F = k, G = !0);
            d.copyMatch(z + 1, F);
            k -= F;
            if (G) {
              return n;
            }
          }
        }
        this.state = C;
        this.reps[0] = z;
        this.reps[1] = B;
        this.reps[2] = E;
        this.reps[3] = A;
        this.leftToUnpack = k;
        return f;
      };
      e.prototype.flushOutput = function() {
        this.outWindow.flush();
      };
      return e;
    }(), n = 0, v = 1, c = 2, f = 3, e;
    (function(e) {
      e[e.WAIT_FOR_LZMA_HEADER = 0] = "WAIT_FOR_LZMA_HEADER";
      e[e.WAIT_FOR_SWF_HEADER = 1] = "WAIT_FOR_SWF_HEADER";
      e[e.PROCESS_DATA = 2] = "PROCESS_DATA";
      e[e.CLOSED = 3] = "CLOSED";
      e[e.ERROR = 4] = "ERROR";
    })(e || (e = {}));
    e = function() {
      function e(g) {
        void 0 === g && (g = !1);
        this._state = g ? 1 : 0;
        this.buffer = null;
      }
      e.prototype.push = function(e) {
        if (2 > this._state) {
          var d = this.buffer ? this.buffer.length : 0, c = (1 === this._state ? 17 : 13) + 5;
          if (d + e.length < c) {
            c = new Uint8Array(d + e.length);
            0 < d && c.set(this.buffer);
            c.set(e, d);
            this.buffer = c;
            return;
          }
          var a = new Uint8Array(c);
          0 < d && a.set(this.buffer);
          a.set(e.subarray(0, c - d), d);
          this._inStream = new m;
          this._inStream.append(a.subarray(c - 5));
          this._outStream = new b(function(e) {
            this.onData.call(null, e);
          }.bind(this));
          this._decoder = new q(this._inStream, this._outStream);
          if (1 === this._state) {
            this._decoder.decodeProperties(a.subarray(12, 17)), this._decoder.markerIsMandatory = !1, this._decoder.unpackSize = ((a[4] | a[5] << 8 | a[6] << 16 | a[7] << 24) >>> 0) - 8;
          } else {
            this._decoder.decodeProperties(a.subarray(0, 5));
            for (var d = 0, l = !1, k = 0;8 > k;k++) {
              var v = a[5 + k];
              255 !== v && (l = !0);
              d |= v << 8 * k;
            }
            this._decoder.markerIsMandatory = !l;
            this._decoder.unpackSize = l ? d : void 0;
          }
          this._decoder.create();
          e = e.subarray(c);
          this._state = 2;
        } else {
          if (2 !== this._state) {
            return;
          }
        }
        try {
          this._inStream.append(e);
          var n = this._decoder.decode(!0);
          this._inStream.compact();
          n !== f && this._checkError(n);
        } catch (t) {
          this._decoder.flushOutput(), this._decoder = null, this._error(t);
        }
      };
      e.prototype.close = function() {
        if (2 === this._state) {
          this._state = 3;
          try {
            var e = this._decoder.decode(!1);
            this._checkError(e);
          } catch (d) {
            this._decoder.flushOutput(), this._error(d);
          }
          this._decoder = null;
        }
      };
      e.prototype._error = function(e) {
        this._state = 4;
        if (this.onError) {
          this.onError(e);
        }
      };
      e.prototype._checkError = function(e) {
        var d;
        e === n ? d = "LZMA decoding error" : e === f ? d = "Decoding is not complete" : e === v ? void 0 !== this._decoder.unpackSize && this._decoder.unpackSize !== this._outStream.processed && (d = "Finished with end marker before than specified size") : d = "Internal LZMA Error";
        d && this._error(d);
      };
      return e;
    }();
    h.LzmaDecoder = e;
  })(h.ArrayUtilities || (h.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    function r(b) {
      return "string" === typeof b ? b : void 0 == b ? null : b + "";
    }
    var a = h.Debug.notImplemented, w = h.StringUtilities.utf8decode, m = h.StringUtilities.utf8encode, b = h.NumberUtilities.clamp, l = function() {
      return function(b, a, c) {
        this.buffer = b;
        this.length = a;
        this.littleEndian = c;
      };
    }();
    p.PlainObjectDataBuffer = l;
    for (var u = new Uint32Array(33), k = 1, t = 0;32 >= k;k++) {
      u[k] = t = t << 1 | 1;
    }
    var q;
    (function(b) {
      b[b.U8 = 1] = "U8";
      b[b.I32 = 2] = "I32";
      b[b.F32 = 4] = "F32";
    })(q || (q = {}));
    k = function() {
      function k(b) {
        void 0 === b && (b = k.INITIAL_SIZE);
        this._buffer || (this._buffer = new ArrayBuffer(b), this._position = this._length = 0, this._resetViews(), this._littleEndian = k._nativeLittleEndian, this._bitLength = this._bitBuffer = 0);
      }
      k.FromArrayBuffer = function(b, c) {
        void 0 === c && (c = -1);
        var f = Object.create(k.prototype);
        f._buffer = b;
        f._length = -1 === c ? b.byteLength : c;
        f._position = 0;
        f._resetViews();
        f._littleEndian = k._nativeLittleEndian;
        f._bitBuffer = 0;
        f._bitLength = 0;
        return f;
      };
      k.FromPlainObject = function(b) {
        var c = k.FromArrayBuffer(b.buffer, b.length);
        c._littleEndian = b.littleEndian;
        return c;
      };
      k.prototype.toPlainObject = function() {
        return new l(this._buffer, this._length, this._littleEndian);
      };
      k.prototype.clone = function() {
        var b = k.FromArrayBuffer((new Uint8Array(this._u8)).buffer, this._length);
        b._position = this._position;
        b._littleEndian = this._littleEndian;
        b._bitBuffer = this._bitBuffer;
        b._bitLength = this._bitLength;
        return b;
      };
      k.prototype._resetViews = function() {
        this._u8 = new Uint8Array(this._buffer);
        this._f32 = this._i32 = null;
      };
      k.prototype._requestViews = function(b) {
        0 === (this._buffer.byteLength & 3) && (null === this._i32 && b & 2 && (this._i32 = new Int32Array(this._buffer)), null === this._f32 && b & 4 && (this._f32 = new Float32Array(this._buffer)));
      };
      k.prototype.getBytes = function() {
        return new Uint8Array(this._buffer, 0, this._length);
      };
      k.prototype._ensureCapacity = function(b) {
        var c = this._buffer;
        if (!(c.byteLength >= b)) {
          for (var f = Math.max(c.byteLength, 1);f < b;) {
            f *= 2;
          }
          4294967295 < f && this.sec.throwError("RangeError", Errors.ParamRangeError);
          f = k._arrayBufferPool.acquire(f);
          b = this._u8;
          this._buffer = f;
          this._resetViews();
          this._u8.set(b);
          f = this._u8;
          for (b = b.length;b < f.length;b++) {
            f[b] = 0;
          }
          k._arrayBufferPool.release(c);
        }
      };
      k.prototype.clear = function() {
        this._position = this._length = 0;
      };
      k.prototype.readBoolean = function() {
        return 0 !== this.readUnsignedByte();
      };
      k.prototype.readByte = function() {
        return this.readUnsignedByte() << 24 >> 24;
      };
      k.prototype.readUnsignedByte = function() {
        this._position + 1 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        return this._u8[this._position++];
      };
      k.prototype.readBytes = function(b, c, f) {
        var e = this._position;
        c >>>= 0;
        f >>>= 0;
        0 === f && (f = this._length - e);
        e + f > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        b.length < c + f && (b._ensureCapacity(c + f), b.length = c + f);
        b._u8.set(new Uint8Array(this._buffer, e, f), c);
        this._position += f;
      };
      k.prototype.readShort = function() {
        return this.readUnsignedShort() << 16 >> 16;
      };
      k.prototype.readUnsignedShort = function() {
        var b = this._u8, c = this._position;
        c + 2 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var f = b[c + 0], b = b[c + 1];
        this._position = c + 2;
        return this._littleEndian ? b << 8 | f : f << 8 | b;
      };
      k.prototype.readInt = function() {
        var b = this._u8, c = this._position;
        c + 4 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var f = b[c + 0], e = b[c + 1], d = b[c + 2], b = b[c + 3];
        this._position = c + 4;
        return this._littleEndian ? b << 24 | d << 16 | e << 8 | f : f << 24 | e << 16 | d << 8 | b;
      };
      k.prototype.readUnsignedInt = function() {
        return this.readInt() >>> 0;
      };
      k.prototype.readFloat = function() {
        var b = this._position;
        b + 4 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        this._position = b + 4;
        this._requestViews(4);
        if (this._littleEndian && 0 === (b & 3) && this._f32) {
          return this._f32[b >> 2];
        }
        var c = this._u8, f = h.IntegerUtilities.u8;
        this._littleEndian ? (f[0] = c[b + 0], f[1] = c[b + 1], f[2] = c[b + 2], f[3] = c[b + 3]) : (f[3] = c[b + 0], f[2] = c[b + 1], f[1] = c[b + 2], f[0] = c[b + 3]);
        return h.IntegerUtilities.f32[0];
      };
      k.prototype.readDouble = function() {
        var b = this._u8, c = this._position;
        c + 8 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var f = h.IntegerUtilities.u8;
        this._littleEndian ? (f[0] = b[c + 0], f[1] = b[c + 1], f[2] = b[c + 2], f[3] = b[c + 3], f[4] = b[c + 4], f[5] = b[c + 5], f[6] = b[c + 6], f[7] = b[c + 7]) : (f[0] = b[c + 7], f[1] = b[c + 6], f[2] = b[c + 5], f[3] = b[c + 4], f[4] = b[c + 3], f[5] = b[c + 2], f[6] = b[c + 1], f[7] = b[c + 0]);
        this._position = c + 8;
        return h.IntegerUtilities.f64[0];
      };
      k.prototype.writeBoolean = function(b) {
        this.writeByte(b ? 1 : 0);
      };
      k.prototype.writeByte = function(b) {
        var c = this._position + 1;
        this._ensureCapacity(c);
        this._u8[this._position++] = b;
        c > this._length && (this._length = c);
      };
      k.prototype.writeUnsignedByte = function(b) {
        var c = this._position + 1;
        this._ensureCapacity(c);
        this._u8[this._position++] = b;
        c > this._length && (this._length = c);
      };
      k.prototype.writeRawBytes = function(b) {
        var c = this._position + b.length;
        this._ensureCapacity(c);
        this._u8.set(b, this._position);
        this._position = c;
        c > this._length && (this._length = c);
      };
      k.prototype.writeBytes = function(a, c, f) {
        h.isNullOrUndefined(a) && this.sec.throwError("TypeError", Errors.NullPointerError, "bytes");
        c >>>= 0;
        f >>>= 0;
        2 > arguments.length && (c = 0);
        3 > arguments.length && (f = 0);
        c === b(c, 0, a.length) && c + f === b(c + f, 0, a.length) || this.sec.throwError("RangeError", Errors.ParamRangeError);
        0 === f && (f = a.length - c);
        this.writeRawBytes(new Int8Array(a._buffer, c, f));
      };
      k.prototype.writeShort = function(b) {
        this.writeUnsignedShort(b);
      };
      k.prototype.writeUnsignedShort = function(b) {
        var c = this._position;
        this._ensureCapacity(c + 2);
        var f = this._u8;
        this._littleEndian ? (f[c + 0] = b, f[c + 1] = b >> 8) : (f[c + 0] = b >> 8, f[c + 1] = b);
        this._position = c += 2;
        c > this._length && (this._length = c);
      };
      k.prototype.writeInt = function(b) {
        this.writeUnsignedInt(b);
      };
      k.prototype.write2Ints = function(b, c) {
        this.write2UnsignedInts(b, c);
      };
      k.prototype.write4Ints = function(b, c, f, e) {
        this.write4UnsignedInts(b, c, f, e);
      };
      k.prototype.writeUnsignedInt = function(b) {
        var c = this._position;
        this._ensureCapacity(c + 4);
        this._requestViews(2);
        if (this._littleEndian === k._nativeLittleEndian && 0 === (c & 3) && this._i32) {
          this._i32[c >> 2] = b;
        } else {
          var f = this._u8;
          this._littleEndian ? (f[c + 0] = b, f[c + 1] = b >> 8, f[c + 2] = b >> 16, f[c + 3] = b >> 24) : (f[c + 0] = b >> 24, f[c + 1] = b >> 16, f[c + 2] = b >> 8, f[c + 3] = b);
        }
        this._position = c += 4;
        c > this._length && (this._length = c);
      };
      k.prototype.write2UnsignedInts = function(b, c) {
        var f = this._position;
        this._ensureCapacity(f + 8);
        this._requestViews(2);
        this._littleEndian === k._nativeLittleEndian && 0 === (f & 3) && this._i32 ? (this._i32[(f >> 2) + 0] = b, this._i32[(f >> 2) + 1] = c, this._position = f += 8, f > this._length && (this._length = f)) : (this.writeUnsignedInt(b), this.writeUnsignedInt(c));
      };
      k.prototype.write4UnsignedInts = function(b, c, f, e) {
        var d = this._position;
        this._ensureCapacity(d + 16);
        this._requestViews(2);
        this._littleEndian === k._nativeLittleEndian && 0 === (d & 3) && this._i32 ? (this._i32[(d >> 2) + 0] = b, this._i32[(d >> 2) + 1] = c, this._i32[(d >> 2) + 2] = f, this._i32[(d >> 2) + 3] = e, this._position = d += 16, d > this._length && (this._length = d)) : (this.writeUnsignedInt(b), this.writeUnsignedInt(c), this.writeUnsignedInt(f), this.writeUnsignedInt(e));
      };
      k.prototype.writeFloat = function(b) {
        var c = this._position;
        this._ensureCapacity(c + 4);
        this._requestViews(4);
        if (this._littleEndian === k._nativeLittleEndian && 0 === (c & 3) && this._f32) {
          this._f32[c >> 2] = b;
        } else {
          var f = this._u8;
          h.IntegerUtilities.f32[0] = b;
          b = h.IntegerUtilities.u8;
          this._littleEndian ? (f[c + 0] = b[0], f[c + 1] = b[1], f[c + 2] = b[2], f[c + 3] = b[3]) : (f[c + 0] = b[3], f[c + 1] = b[2], f[c + 2] = b[1], f[c + 3] = b[0]);
        }
        this._position = c += 4;
        c > this._length && (this._length = c);
      };
      k.prototype.write6Floats = function(b, c, f, e, d, g) {
        var a = this._position;
        this._ensureCapacity(a + 24);
        this._requestViews(4);
        this._littleEndian === k._nativeLittleEndian && 0 === (a & 3) && this._f32 ? (this._f32[(a >> 2) + 0] = b, this._f32[(a >> 2) + 1] = c, this._f32[(a >> 2) + 2] = f, this._f32[(a >> 2) + 3] = e, this._f32[(a >> 2) + 4] = d, this._f32[(a >> 2) + 5] = g, this._position = a += 24, a > this._length && (this._length = a)) : (this.writeFloat(b), this.writeFloat(c), this.writeFloat(f), this.writeFloat(e), this.writeFloat(d), this.writeFloat(g));
      };
      k.prototype.writeDouble = function(b) {
        var c = this._position;
        this._ensureCapacity(c + 8);
        var f = this._u8;
        h.IntegerUtilities.f64[0] = b;
        b = h.IntegerUtilities.u8;
        this._littleEndian ? (f[c + 0] = b[0], f[c + 1] = b[1], f[c + 2] = b[2], f[c + 3] = b[3], f[c + 4] = b[4], f[c + 5] = b[5], f[c + 6] = b[6], f[c + 7] = b[7]) : (f[c + 0] = b[7], f[c + 1] = b[6], f[c + 2] = b[5], f[c + 3] = b[4], f[c + 4] = b[3], f[c + 5] = b[2], f[c + 6] = b[1], f[c + 7] = b[0]);
        this._position = c += 8;
        c > this._length && (this._length = c);
      };
      k.prototype.readRawBytes = function() {
        return new Int8Array(this._buffer, 0, this._length);
      };
      k.prototype.writeUTF = function(b) {
        b = r(b);
        b = w(b);
        this.writeShort(b.length);
        this.writeRawBytes(b);
      };
      k.prototype.writeUTFBytes = function(b) {
        b = r(b);
        b = w(b);
        this.writeRawBytes(b);
      };
      k.prototype.readUTF = function() {
        return this.readUTFBytes(this.readShort());
      };
      k.prototype.readUTFBytes = function(b) {
        b >>>= 0;
        var c = this._position;
        c + b > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        this._position += b;
        return m(new Int8Array(this._buffer, c, b));
      };
      Object.defineProperty(k.prototype, "length", {get:function() {
        return this._length;
      }, set:function(a) {
        a >>>= 0;
        a > this._buffer.byteLength && this._ensureCapacity(a);
        this._length = a;
        this._position = b(this._position, 0, this._length);
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(k.prototype, "bytesAvailable", {get:function() {
        return this._length - this._position;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(k.prototype, "position", {get:function() {
        return this._position;
      }, set:function(b) {
        this._position = b >>> 0;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(k.prototype, "buffer", {get:function() {
        return this._buffer;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(k.prototype, "bytes", {get:function() {
        return this._u8;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(k.prototype, "ints", {get:function() {
        this._requestViews(2);
        return this._i32;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(k.prototype, "objectEncoding", {get:function() {
        return this._objectEncoding;
      }, set:function(b) {
        this._objectEncoding = b >>> 0;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(k.prototype, "endian", {get:function() {
        return this._littleEndian ? "littleEndian" : "bigEndian";
      }, set:function(b) {
        b = r(b);
        this._littleEndian = "auto" === b ? k._nativeLittleEndian : "littleEndian" === b;
      }, enumerable:!0, configurable:!0});
      k.prototype.toString = function() {
        return m(new Int8Array(this._buffer, 0, this._length));
      };
      k.prototype.toBlob = function(b) {
        return new Blob([new Int8Array(this._buffer, this._position, this._length)], {type:b});
      };
      k.prototype.writeMultiByte = function(b, c) {
        r(b);
        r(c);
        a("packageInternal flash.utils.ObjectOutput::writeMultiByte");
      };
      k.prototype.readMultiByte = function(b, c) {
        r(c);
        a("packageInternal flash.utils.ObjectInput::readMultiByte");
      };
      k.prototype.getValue = function(b) {
        b |= 0;
        return b >= this._length ? void 0 : this._u8[b];
      };
      k.prototype.setValue = function(b, c) {
        b |= 0;
        var f = b + 1;
        this._ensureCapacity(f);
        this._u8[b] = c;
        f > this._length && (this._length = f);
      };
      k.prototype.readFixed = function() {
        return this.readInt() / 65536;
      };
      k.prototype.readFixed8 = function() {
        return this.readShort() / 256;
      };
      k.prototype.readFloat16 = function() {
        var b = this.readUnsignedShort(), c = b >> 15 ? -1 : 1, f = (b & 31744) >> 10, b = b & 1023;
        return f ? 31 === f ? b ? NaN : Infinity * c : c * Math.pow(2, f - 15) * (1 + b / 1024) : c * Math.pow(2, -14) * (b / 1024);
      };
      k.prototype.readEncodedU32 = function() {
        var b = this.readUnsignedByte();
        if (!(b & 128)) {
          return b;
        }
        b = b & 127 | this.readUnsignedByte() << 7;
        if (!(b & 16384)) {
          return b;
        }
        b = b & 16383 | this.readUnsignedByte() << 14;
        if (!(b & 2097152)) {
          return b;
        }
        b = b & 2097151 | this.readUnsignedByte() << 21;
        return b & 268435456 ? b & 268435455 | this.readUnsignedByte() << 28 : b;
      };
      k.prototype.readBits = function(b) {
        return this.readUnsignedBits(b) << 32 - b >> 32 - b;
      };
      k.prototype.readUnsignedBits = function(b) {
        for (var c = this._bitBuffer, f = this._bitLength;b > f;) {
          c = c << 8 | this.readUnsignedByte(), f += 8;
        }
        f -= b;
        b = c >>> f & u[b];
        this._bitBuffer = c;
        this._bitLength = f;
        return b;
      };
      k.prototype.readFixedBits = function(b) {
        return this.readBits(b) / 65536;
      };
      k.prototype.readString = function(b) {
        var c = this._position;
        if (b) {
          c + b > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError), this._position += b;
        } else {
          b = 0;
          for (var f = c;f < this._length && this._u8[f];f++) {
            b++;
          }
          this._position += b + 1;
        }
        return m(new Int8Array(this._buffer, c, b));
      };
      k.prototype.align = function() {
        this._bitLength = this._bitBuffer = 0;
      };
      k.prototype.deflate = function() {
        this.compress("deflate");
      };
      k.prototype.inflate = function() {
        this.uncompress("deflate");
      };
      k.prototype.compress = function(b) {
        b = 0 === arguments.length ? "zlib" : r(b);
        var c;
        switch(b) {
          case "zlib":
            c = new p.Deflate(!0);
            break;
          case "deflate":
            c = new p.Deflate(!1);
            break;
          default:
            return;
        }
        var f = new k;
        c.onData = f.writeRawBytes.bind(f);
        c.push(this._u8.subarray(0, this._length));
        c.close();
        this._ensureCapacity(f._u8.length);
        this._u8.set(f._u8);
        this.length = f.length;
        this._position = 0;
      };
      k.prototype.uncompress = function(b) {
        b = 0 === arguments.length ? "zlib" : r(b);
        var c;
        switch(b) {
          case "zlib":
            c = p.Inflate.create(!0);
            break;
          case "deflate":
            c = p.Inflate.create(!1);
            break;
          case "lzma":
            c = new p.LzmaDecoder(!1);
            break;
          default:
            return;
        }
        var f = new k, e;
        c.onData = f.writeRawBytes.bind(f);
        c.onError = function(d) {
          return e = d;
        };
        c.push(this._u8.subarray(0, this._length));
        e && this.sec.throwError("IOError", Errors.CompressedDataError);
        c.close();
        this._ensureCapacity(f._u8.length);
        this._u8.set(f._u8);
        this.length = f.length;
        this._position = 0;
      };
      k._nativeLittleEndian = 1 === (new Int8Array((new Int32Array([1])).buffer))[0];
      k.INITIAL_SIZE = 128;
      k._arrayBufferPool = new h.ArrayBufferPool;
      return k;
    }();
    p.DataBuffer = k;
  })(h.ArrayUtilities || (h.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  var p = h.ArrayUtilities.DataBuffer, r = h.ArrayUtilities.ensureTypedArrayCapacity;
  (function(a) {
    a[a.BeginSolidFill = 1] = "BeginSolidFill";
    a[a.BeginGradientFill = 2] = "BeginGradientFill";
    a[a.BeginBitmapFill = 3] = "BeginBitmapFill";
    a[a.EndFill = 4] = "EndFill";
    a[a.LineStyleSolid = 5] = "LineStyleSolid";
    a[a.LineStyleGradient = 6] = "LineStyleGradient";
    a[a.LineStyleBitmap = 7] = "LineStyleBitmap";
    a[a.LineEnd = 8] = "LineEnd";
    a[a.MoveTo = 9] = "MoveTo";
    a[a.LineTo = 10] = "LineTo";
    a[a.CurveTo = 11] = "CurveTo";
    a[a.CubicCurveTo = 12] = "CubicCurveTo";
  })(h.PathCommand || (h.PathCommand = {}));
  (function(a) {
    a[a.Linear = 16] = "Linear";
    a[a.Radial = 18] = "Radial";
  })(h.GradientType || (h.GradientType = {}));
  (function(a) {
    a[a.Pad = 0] = "Pad";
    a[a.Reflect = 1] = "Reflect";
    a[a.Repeat = 2] = "Repeat";
  })(h.GradientSpreadMethod || (h.GradientSpreadMethod = {}));
  (function(a) {
    a[a.RGB = 0] = "RGB";
    a[a.LinearRGB = 1] = "LinearRGB";
  })(h.GradientInterpolationMethod || (h.GradientInterpolationMethod = {}));
  (function(a) {
    a[a.None = 0] = "None";
    a[a.Normal = 1] = "Normal";
    a[a.Vertical = 2] = "Vertical";
    a[a.Horizontal = 3] = "Horizontal";
  })(h.LineScaleMode || (h.LineScaleMode = {}));
  var a = function() {
    return function(a, b, l, u, k, t, q, n, v, c, f) {
      this.commands = a;
      this.commandsPosition = b;
      this.coordinates = l;
      this.morphCoordinates = u;
      this.coordinatesPosition = k;
      this.styles = t;
      this.stylesLength = q;
      this.morphStyles = n;
      this.morphStylesLength = v;
      this.hasFills = c;
      this.hasLines = f;
    };
  }();
  h.PlainObjectShapeData = a;
  var w;
  (function(a) {
    a[a.Commands = 32] = "Commands";
    a[a.Coordinates = 128] = "Coordinates";
    a[a.Styles = 16] = "Styles";
  })(w || (w = {}));
  w = function() {
    function m(b) {
      void 0 === b && (b = !0);
      b && this.clear();
    }
    m.FromPlainObject = function(b) {
      var a = new m(!1);
      a.commands = b.commands;
      a.coordinates = b.coordinates;
      a.morphCoordinates = b.morphCoordinates;
      a.commandsPosition = b.commandsPosition;
      a.coordinatesPosition = b.coordinatesPosition;
      a.styles = p.FromArrayBuffer(b.styles, b.stylesLength);
      a.styles.endian = "auto";
      b.morphStyles && (a.morphStyles = p.FromArrayBuffer(b.morphStyles, b.morphStylesLength), a.morphStyles.endian = "auto");
      a.hasFills = b.hasFills;
      a.hasLines = b.hasLines;
      return a;
    };
    m.prototype.moveTo = function(b, a) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = 9;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = a;
    };
    m.prototype.lineTo = function(b, a) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = 10;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = a;
    };
    m.prototype.curveTo = function(b, a, u, k) {
      this.ensurePathCapacities(1, 4);
      this.commands[this.commandsPosition++] = 11;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = u;
      this.coordinates[this.coordinatesPosition++] = k;
    };
    m.prototype.cubicCurveTo = function(b, a, u, k, t, q) {
      this.ensurePathCapacities(1, 6);
      this.commands[this.commandsPosition++] = 12;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = u;
      this.coordinates[this.coordinatesPosition++] = k;
      this.coordinates[this.coordinatesPosition++] = t;
      this.coordinates[this.coordinatesPosition++] = q;
    };
    m.prototype.beginFill = function(b) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 1;
      this.styles.writeUnsignedInt(b);
      this.hasFills = !0;
    };
    m.prototype.writeMorphFill = function(b) {
      this.morphStyles.writeUnsignedInt(b);
    };
    m.prototype.endFill = function() {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 4;
    };
    m.prototype.endLine = function() {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 8;
    };
    m.prototype.lineStyle = function(b, a, u, k, t, q, n) {
      this.ensurePathCapacities(2, 0);
      this.commands[this.commandsPosition++] = 5;
      this.coordinates[this.coordinatesPosition++] = b;
      b = this.styles;
      b.writeUnsignedInt(a);
      b.writeBoolean(u);
      b.writeUnsignedByte(k);
      b.writeUnsignedByte(t);
      b.writeUnsignedByte(q);
      b.writeUnsignedByte(n);
      this.hasLines = !0;
    };
    m.prototype.writeMorphLineStyle = function(b, a) {
      this.morphCoordinates[this.coordinatesPosition - 1] = b;
      this.morphStyles.writeUnsignedInt(a);
    };
    m.prototype.beginBitmap = function(b, a, u, k, t) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = b;
      b = this.styles;
      b.writeUnsignedInt(a);
      this._writeStyleMatrix(u, !1);
      b.writeBoolean(k);
      b.writeBoolean(t);
      this.hasFills = !0;
    };
    m.prototype.writeMorphBitmap = function(b) {
      this._writeStyleMatrix(b, !0);
    };
    m.prototype.beginGradient = function(b, a, u, k, t, q, n, m) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = b;
      b = this.styles;
      b.writeUnsignedByte(k);
      b.writeShort(m);
      this._writeStyleMatrix(t, !1);
      k = a.length;
      b.writeByte(k);
      for (t = 0;t < k;t++) {
        b.writeUnsignedByte(u[t]), b.writeUnsignedInt(a[t]);
      }
      b.writeUnsignedByte(q);
      b.writeUnsignedByte(n);
      this.hasFills = !0;
    };
    m.prototype.writeMorphGradient = function(b, a, u) {
      this._writeStyleMatrix(u, !0);
      u = this.morphStyles;
      for (var k = 0;k < b.length;k++) {
        u.writeUnsignedByte(a[k]), u.writeUnsignedInt(b[k]);
      }
    };
    m.prototype.writeCommandAndCoordinates = function(b, a, u) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = u;
    };
    m.prototype.writeCoordinates = function(b, a) {
      this.ensurePathCapacities(0, 2);
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = a;
    };
    m.prototype.writeMorphCoordinates = function(b, a) {
      this.morphCoordinates = r(this.morphCoordinates, this.coordinatesPosition);
      this.morphCoordinates[this.coordinatesPosition - 2] = b;
      this.morphCoordinates[this.coordinatesPosition - 1] = a;
    };
    m.prototype.clear = function() {
      this.commandsPosition = this.coordinatesPosition = 0;
      this.commands = new Uint8Array(32);
      this.coordinates = new Int32Array(128);
      this.styles = new p(16);
      this.styles.endian = "auto";
      this.hasFills = this.hasLines = !1;
    };
    m.prototype.isEmpty = function() {
      return 0 === this.commandsPosition;
    };
    m.prototype.clone = function() {
      var b = new m(!1);
      b.commands = new Uint8Array(this.commands);
      b.commandsPosition = this.commandsPosition;
      b.coordinates = new Int32Array(this.coordinates);
      b.coordinatesPosition = this.coordinatesPosition;
      b.styles = new p(this.styles.length);
      b.styles.writeRawBytes(this.styles.bytes.subarray(0, this.styles.length));
      this.morphStyles && (b.morphStyles = new p(this.morphStyles.length), b.morphStyles.writeRawBytes(this.morphStyles.bytes.subarray(0, this.morphStyles.length)));
      b.hasFills = this.hasFills;
      b.hasLines = this.hasLines;
      return b;
    };
    m.prototype.toPlainObject = function() {
      return new a(this.commands, this.commandsPosition, this.coordinates, this.morphCoordinates, this.coordinatesPosition, this.styles.buffer, this.styles.length, this.morphStyles && this.morphStyles.buffer, this.morphStyles ? this.morphStyles.length : 0, this.hasFills, this.hasLines);
    };
    Object.defineProperty(m.prototype, "buffers", {get:function() {
      var b = [this.commands.buffer, this.coordinates.buffer, this.styles.buffer];
      this.morphCoordinates && b.push(this.morphCoordinates.buffer);
      this.morphStyles && b.push(this.morphStyles.buffer);
      return b;
    }, enumerable:!0, configurable:!0});
    m.prototype._writeStyleMatrix = function(b, a) {
      (a ? this.morphStyles : this.styles).write6Floats(b.a, b.b, b.c, b.d, b.tx, b.ty);
    };
    m.prototype.ensurePathCapacities = function(b, a) {
      this.commands = r(this.commands, this.commandsPosition + b);
      this.coordinates = r(this.coordinates, this.coordinatesPosition + a);
    };
    return m;
  }();
  h.ShapeData = w;
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(h) {
      (function(a) {
        a[a.CODE_END = 0] = "CODE_END";
        a[a.CODE_SHOW_FRAME = 1] = "CODE_SHOW_FRAME";
        a[a.CODE_DEFINE_SHAPE = 2] = "CODE_DEFINE_SHAPE";
        a[a.CODE_FREE_CHARACTER = 3] = "CODE_FREE_CHARACTER";
        a[a.CODE_PLACE_OBJECT = 4] = "CODE_PLACE_OBJECT";
        a[a.CODE_REMOVE_OBJECT = 5] = "CODE_REMOVE_OBJECT";
        a[a.CODE_DEFINE_BITS = 6] = "CODE_DEFINE_BITS";
        a[a.CODE_DEFINE_BUTTON = 7] = "CODE_DEFINE_BUTTON";
        a[a.CODE_JPEG_TABLES = 8] = "CODE_JPEG_TABLES";
        a[a.CODE_SET_BACKGROUND_COLOR = 9] = "CODE_SET_BACKGROUND_COLOR";
        a[a.CODE_DEFINE_FONT = 10] = "CODE_DEFINE_FONT";
        a[a.CODE_DEFINE_TEXT = 11] = "CODE_DEFINE_TEXT";
        a[a.CODE_DO_ACTION = 12] = "CODE_DO_ACTION";
        a[a.CODE_DEFINE_FONT_INFO = 13] = "CODE_DEFINE_FONT_INFO";
        a[a.CODE_DEFINE_SOUND = 14] = "CODE_DEFINE_SOUND";
        a[a.CODE_START_SOUND = 15] = "CODE_START_SOUND";
        a[a.CODE_STOP_SOUND = 16] = "CODE_STOP_SOUND";
        a[a.CODE_DEFINE_BUTTON_SOUND = 17] = "CODE_DEFINE_BUTTON_SOUND";
        a[a.CODE_SOUND_STREAM_HEAD = 18] = "CODE_SOUND_STREAM_HEAD";
        a[a.CODE_SOUND_STREAM_BLOCK = 19] = "CODE_SOUND_STREAM_BLOCK";
        a[a.CODE_DEFINE_BITS_LOSSLESS = 20] = "CODE_DEFINE_BITS_LOSSLESS";
        a[a.CODE_DEFINE_BITS_JPEG2 = 21] = "CODE_DEFINE_BITS_JPEG2";
        a[a.CODE_DEFINE_SHAPE2 = 22] = "CODE_DEFINE_SHAPE2";
        a[a.CODE_DEFINE_BUTTON_CXFORM = 23] = "CODE_DEFINE_BUTTON_CXFORM";
        a[a.CODE_PROTECT = 24] = "CODE_PROTECT";
        a[a.CODE_PATHS_ARE_POSTSCRIPT = 25] = "CODE_PATHS_ARE_POSTSCRIPT";
        a[a.CODE_PLACE_OBJECT2 = 26] = "CODE_PLACE_OBJECT2";
        a[a.CODE_REMOVE_OBJECT2 = 28] = "CODE_REMOVE_OBJECT2";
        a[a.CODE_SYNC_FRAME = 29] = "CODE_SYNC_FRAME";
        a[a.CODE_FREE_ALL = 31] = "CODE_FREE_ALL";
        a[a.CODE_DEFINE_SHAPE3 = 32] = "CODE_DEFINE_SHAPE3";
        a[a.CODE_DEFINE_TEXT2 = 33] = "CODE_DEFINE_TEXT2";
        a[a.CODE_DEFINE_BUTTON2 = 34] = "CODE_DEFINE_BUTTON2";
        a[a.CODE_DEFINE_BITS_JPEG3 = 35] = "CODE_DEFINE_BITS_JPEG3";
        a[a.CODE_DEFINE_BITS_LOSSLESS2 = 36] = "CODE_DEFINE_BITS_LOSSLESS2";
        a[a.CODE_DEFINE_EDIT_TEXT = 37] = "CODE_DEFINE_EDIT_TEXT";
        a[a.CODE_DEFINE_VIDEO = 38] = "CODE_DEFINE_VIDEO";
        a[a.CODE_DEFINE_SPRITE = 39] = "CODE_DEFINE_SPRITE";
        a[a.CODE_NAME_CHARACTER = 40] = "CODE_NAME_CHARACTER";
        a[a.CODE_PRODUCT_INFO = 41] = "CODE_PRODUCT_INFO";
        a[a.CODE_DEFINE_TEXT_FORMAT = 42] = "CODE_DEFINE_TEXT_FORMAT";
        a[a.CODE_FRAME_LABEL = 43] = "CODE_FRAME_LABEL";
        a[a.CODE_DEFINE_BEHAVIOUR = 44] = "CODE_DEFINE_BEHAVIOUR";
        a[a.CODE_SOUND_STREAM_HEAD2 = 45] = "CODE_SOUND_STREAM_HEAD2";
        a[a.CODE_DEFINE_MORPH_SHAPE = 46] = "CODE_DEFINE_MORPH_SHAPE";
        a[a.CODE_GENERATE_FRAME = 47] = "CODE_GENERATE_FRAME";
        a[a.CODE_DEFINE_FONT2 = 48] = "CODE_DEFINE_FONT2";
        a[a.CODE_GEN_COMMAND = 49] = "CODE_GEN_COMMAND";
        a[a.CODE_DEFINE_COMMAND_OBJECT = 50] = "CODE_DEFINE_COMMAND_OBJECT";
        a[a.CODE_CHARACTER_SET = 51] = "CODE_CHARACTER_SET";
        a[a.CODE_EXTERNAL_FONT = 52] = "CODE_EXTERNAL_FONT";
        a[a.CODE_DEFINE_FUNCTION = 53] = "CODE_DEFINE_FUNCTION";
        a[a.CODE_PLACE_FUNCTION = 54] = "CODE_PLACE_FUNCTION";
        a[a.CODE_GEN_TAG_OBJECTS = 55] = "CODE_GEN_TAG_OBJECTS";
        a[a.CODE_EXPORT_ASSETS = 56] = "CODE_EXPORT_ASSETS";
        a[a.CODE_IMPORT_ASSETS = 57] = "CODE_IMPORT_ASSETS";
        a[a.CODE_ENABLE_DEBUGGER = 58] = "CODE_ENABLE_DEBUGGER";
        a[a.CODE_DO_INIT_ACTION = 59] = "CODE_DO_INIT_ACTION";
        a[a.CODE_DEFINE_VIDEO_STREAM = 60] = "CODE_DEFINE_VIDEO_STREAM";
        a[a.CODE_VIDEO_FRAME = 61] = "CODE_VIDEO_FRAME";
        a[a.CODE_DEFINE_FONT_INFO2 = 62] = "CODE_DEFINE_FONT_INFO2";
        a[a.CODE_DEBUG_ID = 63] = "CODE_DEBUG_ID";
        a[a.CODE_ENABLE_DEBUGGER2 = 64] = "CODE_ENABLE_DEBUGGER2";
        a[a.CODE_SCRIPT_LIMITS = 65] = "CODE_SCRIPT_LIMITS";
        a[a.CODE_SET_TAB_INDEX = 66] = "CODE_SET_TAB_INDEX";
        a[a.CODE_FILE_ATTRIBUTES = 69] = "CODE_FILE_ATTRIBUTES";
        a[a.CODE_PLACE_OBJECT3 = 70] = "CODE_PLACE_OBJECT3";
        a[a.CODE_IMPORT_ASSETS2 = 71] = "CODE_IMPORT_ASSETS2";
        a[a.CODE_DO_ABC_DEFINE = 72] = "CODE_DO_ABC_DEFINE";
        a[a.CODE_DEFINE_FONT_ALIGN_ZONES = 73] = "CODE_DEFINE_FONT_ALIGN_ZONES";
        a[a.CODE_CSM_TEXT_SETTINGS = 74] = "CODE_CSM_TEXT_SETTINGS";
        a[a.CODE_DEFINE_FONT3 = 75] = "CODE_DEFINE_FONT3";
        a[a.CODE_SYMBOL_CLASS = 76] = "CODE_SYMBOL_CLASS";
        a[a.CODE_METADATA = 77] = "CODE_METADATA";
        a[a.CODE_DEFINE_SCALING_GRID = 78] = "CODE_DEFINE_SCALING_GRID";
        a[a.CODE_DO_ABC = 82] = "CODE_DO_ABC";
        a[a.CODE_DEFINE_SHAPE4 = 83] = "CODE_DEFINE_SHAPE4";
        a[a.CODE_DEFINE_MORPH_SHAPE2 = 84] = "CODE_DEFINE_MORPH_SHAPE2";
        a[a.CODE_DEFINE_SCENE_AND_FRAME_LABEL_DATA = 86] = "CODE_DEFINE_SCENE_AND_FRAME_LABEL_DATA";
        a[a.CODE_DEFINE_BINARY_DATA = 87] = "CODE_DEFINE_BINARY_DATA";
        a[a.CODE_DEFINE_FONT_NAME = 88] = "CODE_DEFINE_FONT_NAME";
        a[a.CODE_START_SOUND2 = 89] = "CODE_START_SOUND2";
        a[a.CODE_DEFINE_BITS_JPEG4 = 90] = "CODE_DEFINE_BITS_JPEG4";
        a[a.CODE_DEFINE_FONT4 = 91] = "CODE_DEFINE_FONT4";
        a[a.CODE_TELEMETRY = 93] = "CODE_TELEMETRY";
      })(h.SwfTagCode || (h.SwfTagCode = {}));
      (function(a) {
        a[a.CODE_DEFINE_SHAPE = 2] = "CODE_DEFINE_SHAPE";
        a[a.CODE_DEFINE_BITS = 6] = "CODE_DEFINE_BITS";
        a[a.CODE_DEFINE_BUTTON = 7] = "CODE_DEFINE_BUTTON";
        a[a.CODE_DEFINE_FONT = 10] = "CODE_DEFINE_FONT";
        a[a.CODE_DEFINE_TEXT = 11] = "CODE_DEFINE_TEXT";
        a[a.CODE_DEFINE_SOUND = 14] = "CODE_DEFINE_SOUND";
        a[a.CODE_DEFINE_BITS_LOSSLESS = 20] = "CODE_DEFINE_BITS_LOSSLESS";
        a[a.CODE_DEFINE_BITS_JPEG2 = 21] = "CODE_DEFINE_BITS_JPEG2";
        a[a.CODE_DEFINE_SHAPE2 = 22] = "CODE_DEFINE_SHAPE2";
        a[a.CODE_DEFINE_SHAPE3 = 32] = "CODE_DEFINE_SHAPE3";
        a[a.CODE_DEFINE_TEXT2 = 33] = "CODE_DEFINE_TEXT2";
        a[a.CODE_DEFINE_BUTTON2 = 34] = "CODE_DEFINE_BUTTON2";
        a[a.CODE_DEFINE_BITS_JPEG3 = 35] = "CODE_DEFINE_BITS_JPEG3";
        a[a.CODE_DEFINE_BITS_LOSSLESS2 = 36] = "CODE_DEFINE_BITS_LOSSLESS2";
        a[a.CODE_DEFINE_EDIT_TEXT = 37] = "CODE_DEFINE_EDIT_TEXT";
        a[a.CODE_DEFINE_SPRITE = 39] = "CODE_DEFINE_SPRITE";
        a[a.CODE_DEFINE_MORPH_SHAPE = 46] = "CODE_DEFINE_MORPH_SHAPE";
        a[a.CODE_DEFINE_FONT2 = 48] = "CODE_DEFINE_FONT2";
        a[a.CODE_DEFINE_VIDEO_STREAM = 60] = "CODE_DEFINE_VIDEO_STREAM";
        a[a.CODE_DEFINE_FONT3 = 75] = "CODE_DEFINE_FONT3";
        a[a.CODE_DEFINE_SHAPE4 = 83] = "CODE_DEFINE_SHAPE4";
        a[a.CODE_DEFINE_MORPH_SHAPE2 = 84] = "CODE_DEFINE_MORPH_SHAPE2";
        a[a.CODE_DEFINE_BINARY_DATA = 87] = "CODE_DEFINE_BINARY_DATA";
        a[a.CODE_DEFINE_BITS_JPEG4 = 90] = "CODE_DEFINE_BITS_JPEG4";
        a[a.CODE_DEFINE_FONT4 = 91] = "CODE_DEFINE_FONT4";
      })(h.DefinitionTags || (h.DefinitionTags = {}));
      (function(a) {
        a[a.CODE_DEFINE_BITS = 6] = "CODE_DEFINE_BITS";
        a[a.CODE_DEFINE_BITS_JPEG2 = 21] = "CODE_DEFINE_BITS_JPEG2";
        a[a.CODE_DEFINE_BITS_JPEG3 = 35] = "CODE_DEFINE_BITS_JPEG3";
        a[a.CODE_DEFINE_BITS_JPEG4 = 90] = "CODE_DEFINE_BITS_JPEG4";
      })(h.ImageDefinitionTags || (h.ImageDefinitionTags = {}));
      (function(a) {
        a[a.CODE_DEFINE_FONT = 10] = "CODE_DEFINE_FONT";
        a[a.CODE_DEFINE_FONT2 = 48] = "CODE_DEFINE_FONT2";
        a[a.CODE_DEFINE_FONT3 = 75] = "CODE_DEFINE_FONT3";
        a[a.CODE_DEFINE_FONT4 = 91] = "CODE_DEFINE_FONT4";
      })(h.FontDefinitionTags || (h.FontDefinitionTags = {}));
      (function(a) {
        a[a.CODE_PLACE_OBJECT = 4] = "CODE_PLACE_OBJECT";
        a[a.CODE_PLACE_OBJECT2 = 26] = "CODE_PLACE_OBJECT2";
        a[a.CODE_PLACE_OBJECT3 = 70] = "CODE_PLACE_OBJECT3";
        a[a.CODE_REMOVE_OBJECT = 5] = "CODE_REMOVE_OBJECT";
        a[a.CODE_REMOVE_OBJECT2 = 28] = "CODE_REMOVE_OBJECT2";
        a[a.CODE_START_SOUND = 15] = "CODE_START_SOUND";
        a[a.CODE_START_SOUND2 = 89] = "CODE_START_SOUND2";
        a[a.CODE_VIDEO_FRAME = 61] = "CODE_VIDEO_FRAME";
      })(h.ControlTags || (h.ControlTags = {}));
      (function(a) {
        a[a.Move = 1] = "Move";
        a[a.HasCharacter = 2] = "HasCharacter";
        a[a.HasMatrix = 4] = "HasMatrix";
        a[a.HasColorTransform = 8] = "HasColorTransform";
        a[a.HasRatio = 16] = "HasRatio";
        a[a.HasName = 32] = "HasName";
        a[a.HasClipDepth = 64] = "HasClipDepth";
        a[a.HasClipActions = 128] = "HasClipActions";
        a[a.HasFilterList = 256] = "HasFilterList";
        a[a.HasBlendMode = 512] = "HasBlendMode";
        a[a.HasCacheAsBitmap = 1024] = "HasCacheAsBitmap";
        a[a.HasClassName = 2048] = "HasClassName";
        a[a.HasImage = 4096] = "HasImage";
        a[a.HasVisible = 8192] = "HasVisible";
        a[a.OpaqueBackground = 16384] = "OpaqueBackground";
        a[a.Reserved = 32768] = "Reserved";
      })(h.PlaceObjectFlags || (h.PlaceObjectFlags = {}));
      (function(a) {
        a[a.Load = 1] = "Load";
        a[a.EnterFrame = 2] = "EnterFrame";
        a[a.Unload = 4] = "Unload";
        a[a.MouseMove = 8] = "MouseMove";
        a[a.MouseDown = 16] = "MouseDown";
        a[a.MouseUp = 32] = "MouseUp";
        a[a.KeyDown = 64] = "KeyDown";
        a[a.KeyUp = 128] = "KeyUp";
        a[a.Data = 256] = "Data";
        a[a.Initialize = 512] = "Initialize";
        a[a.Press = 1024] = "Press";
        a[a.Release = 2048] = "Release";
        a[a.ReleaseOutside = 4096] = "ReleaseOutside";
        a[a.RollOver = 8192] = "RollOver";
        a[a.RollOut = 16384] = "RollOut";
        a[a.DragOver = 32768] = "DragOver";
        a[a.DragOut = 65536] = "DragOut";
        a[a.KeyPress = 131072] = "KeyPress";
        a[a.Construct = 262144] = "Construct";
      })(h.AVM1ClipEvents || (h.AVM1ClipEvents = {}));
      (function(a) {
        a[a.StateUp = 1] = "StateUp";
        a[a.StateOver = 2] = "StateOver";
        a[a.StateDown = 4] = "StateDown";
        a[a.StateHitTest = 8] = "StateHitTest";
        a[a.HasFilterList = 16] = "HasFilterList";
        a[a.HasBlendMode = 32] = "HasBlendMode";
      })(h.ButtonCharacterFlags || (h.ButtonCharacterFlags = {}));
      (function(a) {
        a[a.Bold = 1] = "Bold";
        a[a.Italic = 2] = "Italic";
        a[a.WideOrHasFontData = 4] = "WideOrHasFontData";
        a[a.WideOffset = 8] = "WideOffset";
        a[a.Ansi = 16] = "Ansi";
        a[a.SmallText = 32] = "SmallText";
        a[a.ShiftJis = 64] = "ShiftJis";
        a[a.HasLayout = 128] = "HasLayout";
      })(h.FontFlags || (h.FontFlags = {}));
      (function(a) {
        a[a.HasMoveX = 1] = "HasMoveX";
        a[a.HasMoveY = 2] = "HasMoveY";
        a[a.HasColor = 4] = "HasColor";
        a[a.HasFont = 8] = "HasFont";
      })(h.TextRecordFlags || (h.TextRecordFlags = {}));
      (function(a) {
        a[a.HasInPoint = 1] = "HasInPoint";
        a[a.HasOutPoint = 2] = "HasOutPoint";
        a[a.HasLoops = 4] = "HasLoops";
        a[a.HasEnvelope = 8] = "HasEnvelope";
        a[a.NoMultiple = 16] = "NoMultiple";
        a[a.Stop = 32] = "Stop";
      })(h.SoundInfoFlags || (h.SoundInfoFlags = {}));
      (function(a) {
        a[a.HasFont = 1] = "HasFont";
        a[a.HasMaxLength = 2] = "HasMaxLength";
        a[a.HasColor = 4] = "HasColor";
        a[a.ReadOnly = 8] = "ReadOnly";
        a[a.Password = 16] = "Password";
        a[a.Multiline = 32] = "Multiline";
        a[a.WordWrap = 64] = "WordWrap";
        a[a.HasText = 128] = "HasText";
        a[a.UseOutlines = 256] = "UseOutlines";
        a[a.Html = 512] = "Html";
        a[a.WasStatic = 1024] = "WasStatic";
        a[a.Border = 2048] = "Border";
        a[a.NoSelect = 4096] = "NoSelect";
        a[a.HasLayout = 8192] = "HasLayout";
        a[a.AutoSize = 16384] = "AutoSize";
        a[a.HasFontClass = 32768] = "HasFontClass";
      })(h.TextFlags || (h.TextFlags = {}));
      (function(a) {
        a[a.UsesScalingStrokes = 1] = "UsesScalingStrokes";
        a[a.UsesNonScalingStrokes = 2] = "UsesNonScalingStrokes";
        a[a.UsesFillWindingRule = 4] = "UsesFillWindingRule";
        a[a.IsMorph = 8] = "IsMorph";
      })(h.ShapeFlags || (h.ShapeFlags = {}));
      (function(a) {
        a[a.Move = 1] = "Move";
        a[a.HasFillStyle0 = 2] = "HasFillStyle0";
        a[a.HasFillStyle1 = 4] = "HasFillStyle1";
        a[a.HasLineStyle = 8] = "HasLineStyle";
        a[a.HasNewStyles = 16] = "HasNewStyles";
        a[a.IsStraight = 32] = "IsStraight";
        a[a.IsGeneral = 64] = "IsGeneral";
        a[a.IsVertical = 128] = "IsVertical";
      })(h.ShapeRecordFlags || (h.ShapeRecordFlags = {}));
    })(h.Parser || (h.Parser = {}));
  })(h.SWF || (h.SWF = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  var p = h.Debug.unexpected, r = function() {
    function a(a, m, b, l) {
      this.url = a;
      this.method = m;
      this.mimeType = b;
      this.data = l;
    }
    a.prototype.readAll = function(a, m) {
      var b = this.url, l = this.xhr = new XMLHttpRequest({mozSystem:!0});
      l.open(this.method || "GET", this.url, !0);
      l.responseType = "arraybuffer";
      a && (l.onprogress = function(b) {
        a(l.response, b.loaded, b.total);
      });
      l.onreadystatechange = function(a) {
        4 === l.readyState && (200 !== l.status && 0 !== l.status || null === l.response ? (p("Path: " + b + " not found."), m(null, l.statusText)) : m(l.response));
      };
      this.mimeType && l.setRequestHeader("Content-Type", this.mimeType);
      l.send(this.data || null);
    };
    a.prototype.readChunked = function(a, m, b, l, u, k) {
      if (0 >= a) {
        this.readAsync(m, b, l, u, k);
      } else {
        var t = 0, q = new Uint8Array(a), n = 0, h;
        this.readAsync(function(b, f) {
          h = f.total;
          for (var e = b.length, d = 0;t + e >= a;) {
            var g = a - t;
            q.set(b.subarray(d, d + g), t);
            d += g;
            e -= g;
            n += a;
            m(q, {loaded:n, total:h});
            t = 0;
          }
          q.set(b.subarray(d), t);
          t += e;
        }, b, l, function() {
          0 < t && (n += t, m(q.subarray(0, t), {loaded:n, total:h}), t = 0);
          u && u();
        }, k);
      }
    };
    a.prototype.readAsync = function(a, m, b, l, u) {
      var k = this.xhr = new XMLHttpRequest({mozSystem:!0}), t = this.url, q = 0, n = 0;
      k.open(this.method || "GET", t, !0);
      k.responseType = "moz-chunked-arraybuffer";
      var h = "moz-chunked-arraybuffer" !== k.responseType;
      h && (k.responseType = "arraybuffer");
      k.onprogress = function(b) {
        h || (q = b.loaded, n = b.total, b = new Uint8Array(k.response), q = Math.max(q, b.byteLength), n = Math.max(n, b.byteLength), a(b, {loaded:q, total:n}));
      };
      k.onreadystatechange = function(b) {
        2 === k.readyState && u && u(t, k.status, k.getAllResponseHeaders());
        4 === k.readyState && (200 !== k.status && 0 !== k.status || null === k.response && (0 === n || q !== n) ? m(k.statusText) : h && (b = k.response, a(new Uint8Array(b), {loaded:b.byteLength, total:b.byteLength})));
      };
      k.onload = function() {
        l && l();
      };
      this.mimeType && k.setRequestHeader("Content-Type", this.mimeType);
      k.send(this.data || null);
      b && b();
    };
    a.prototype.abort = function() {
      this.xhr && (this.xhr.abort(), this.xhr = null);
    };
    return a;
  }();
  h.BinaryFileReader = r;
})(Shumway || (Shumway = {}));
(function(h) {
  var p = function() {
    function h() {
      this.isAS3TraceOn = !0;
      this._startTime = Date.now();
    }
    Object.defineProperty(h.prototype, "currentTimestamp", {get:function() {
      return Date.now() - this._startTime;
    }, enumerable:!0, configurable:!0});
    h.prototype._writeLine = function(a) {
    };
    h.prototype.writeAS3Trace = function(a) {
    };
    return h;
  }();
  h.FlashLog = p;
  h.flashlog = null;
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(a) {
      a[a.Objects = 0] = "Objects";
      a[a.References = 1] = "References";
    })(h.RemotingPhase || (h.RemotingPhase = {}));
    (function(a) {
      a[a.HasMatrix = 1] = "HasMatrix";
      a[a.HasBounds = 2] = "HasBounds";
      a[a.HasChildren = 4] = "HasChildren";
      a[a.HasColorTransform = 8] = "HasColorTransform";
      a[a.HasClipRect = 16] = "HasClipRect";
      a[a.HasMiscellaneousProperties = 32] = "HasMiscellaneousProperties";
      a[a.HasMask = 64] = "HasMask";
      a[a.HasClip = 128] = "HasClip";
    })(h.MessageBits || (h.MessageBits = {}));
    (function(a) {
      a[a.None = 0] = "None";
      a[a.Asset = 134217728] = "Asset";
    })(h.IDMask || (h.IDMask = {}));
    (function(a) {
      a[a.EOF = 0] = "EOF";
      a[a.UpdateFrame = 100] = "UpdateFrame";
      a[a.UpdateGraphics = 101] = "UpdateGraphics";
      a[a.UpdateBitmapData = 102] = "UpdateBitmapData";
      a[a.UpdateTextContent = 103] = "UpdateTextContent";
      a[a.UpdateStage = 104] = "UpdateStage";
      a[a.UpdateNetStream = 105] = "UpdateNetStream";
      a[a.RequestBitmapData = 106] = "RequestBitmapData";
      a[a.UpdateCurrentMouseTarget = 107] = "UpdateCurrentMouseTarget";
      a[a.DrawToBitmap = 200] = "DrawToBitmap";
      a[a.MouseEvent = 300] = "MouseEvent";
      a[a.KeyboardEvent = 301] = "KeyboardEvent";
      a[a.FocusEvent = 302] = "FocusEvent";
    })(h.MessageTag || (h.MessageTag = {}));
    (function(a) {
      a[a.Blur = 0] = "Blur";
      a[a.DropShadow = 1] = "DropShadow";
      a[a.ColorMatrix = 2] = "ColorMatrix";
    })(h.FilterType || (h.FilterType = {}));
    (function(a) {
      a[a.Identity = 0] = "Identity";
      a[a.AlphaMultiplierOnly = 1] = "AlphaMultiplierOnly";
      a[a.All = 2] = "All";
    })(h.ColorTransformEncoding || (h.ColorTransformEncoding = {}));
    (function(a) {
      a[a.Initialized = 0] = "Initialized";
      a[a.Metadata = 1] = "Metadata";
      a[a.PlayStart = 2] = "PlayStart";
      a[a.PlayStop = 3] = "PlayStop";
      a[a.BufferEmpty = 4] = "BufferEmpty";
      a[a.BufferFull = 5] = "BufferFull";
      a[a.Pause = 6] = "Pause";
      a[a.Unpause = 7] = "Unpause";
      a[a.Seeking = 8] = "Seeking";
      a[a.Seeked = 9] = "Seeked";
      a[a.Progress = 10] = "Progress";
      a[a.Error = 11] = "Error";
    })(h.VideoPlaybackEvent || (h.VideoPlaybackEvent = {}));
    (function(a) {
      a[a.Init = 1] = "Init";
      a[a.Pause = 2] = "Pause";
      a[a.Seek = 3] = "Seek";
      a[a.GetTime = 4] = "GetTime";
      a[a.GetBufferLength = 5] = "GetBufferLength";
      a[a.SetSoundLevels = 6] = "SetSoundLevels";
      a[a.GetBytesLoaded = 7] = "GetBytesLoaded";
      a[a.GetBytesTotal = 8] = "GetBytesTotal";
      a[a.EnsurePlaying = 9] = "EnsurePlaying";
    })(h.VideoControlEvent || (h.VideoControlEvent = {}));
    (function(a) {
      a[a.ShowAll = 0] = "ShowAll";
      a[a.ExactFit = 1] = "ExactFit";
      a[a.NoBorder = 2] = "NoBorder";
      a[a.NoScale = 4] = "NoScale";
    })(h.StageScaleMode || (h.StageScaleMode = {}));
    (function(a) {
      a[a.None = 0] = "None";
      a[a.Top = 1] = "Top";
      a[a.Bottom = 2] = "Bottom";
      a[a.Left = 4] = "Left";
      a[a.Right = 8] = "Right";
      a[a.TopLeft = a.Top | a.Left] = "TopLeft";
      a[a.BottomLeft = a.Bottom | a.Left] = "BottomLeft";
      a[a.BottomRight = a.Bottom | a.Right] = "BottomRight";
      a[a.TopRight = a.Top | a.Right] = "TopRight";
    })(h.StageAlignFlags || (h.StageAlignFlags = {}));
    h.MouseEventNames = "click dblclick mousedown mousemove mouseup mouseover mouseout".split(" ");
    h.KeyboardEventNames = ["keydown", "keypress", "keyup"];
    (function(a) {
      a[a.CtrlKey = 1] = "CtrlKey";
      a[a.AltKey = 2] = "AltKey";
      a[a.ShiftKey = 4] = "ShiftKey";
    })(h.KeyboardEventFlags || (h.KeyboardEventFlags = {}));
    (function(a) {
      a[a.DocumentHidden = 0] = "DocumentHidden";
      a[a.DocumentVisible = 1] = "DocumentVisible";
      a[a.WindowBlur = 2] = "WindowBlur";
      a[a.WindowFocus = 3] = "WindowFocus";
    })(h.FocusEventType || (h.FocusEventType = {}));
    var r = function() {
      function a(a, m) {
        this.window = a;
        this.target = m;
      }
      Object.defineProperty(a.prototype, "onAsyncMessage", {set:function(a) {
        this.window.addEventListener("message", function(m) {
          Promise.resolve(m.data).then(function(b) {
            a(b);
          });
        });
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "onSyncMessage", {set:function(a) {
        this.window.addEventListener("syncmessage", function(m) {
          m = m.detail;
          m.result = a(m.msg);
        });
      }, enumerable:!0, configurable:!0});
      a.prototype.postAsyncMessage = function(a, m) {
        this.target.postMessage(a, "*", m);
      };
      a.prototype.sendSyncMessage = function(a, m) {
        var b = this.target.document.createEvent("CustomEvent"), l = {msg:a, result:void 0};
        b.initCustomEvent("syncmessage", !1, !1, l);
        this.target.dispatchEvent(b);
        return l.result;
      };
      return a;
    }();
    h.WindowTransportPeer = r;
    r = function() {
      function a() {
      }
      Object.defineProperty(a.prototype, "onAsyncMessage", {set:function(a) {
        ShumwayCom.setAsyncMessageCallback(a);
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "onSyncMessage", {set:function(a) {
        ShumwayCom.setSyncMessageCallback(a);
      }, enumerable:!0, configurable:!0});
      a.prototype.postAsyncMessage = function(a, m) {
        ShumwayCom.postAsyncMessage(a);
      };
      a.prototype.sendSyncMessage = function(a, m) {
        return ShumwayCom.sendSyncMessage(a);
      };
      return a;
    }();
    h.ShumwayComTransportPeer = r;
  })(h.Remoting || (h.Remoting = {}));
})(Shumway || (Shumway = {}));
var throwError, Errors;
(function(h) {
  (function(h) {
    (function(h) {
      var a = function() {
        function a() {
        }
        a.toRGBA = function(b, a, u, k) {
          void 0 === k && (k = 1);
          return "rgba(" + b + "," + a + "," + u + "," + k + ")";
        };
        return a;
      }();
      h.UI = a;
      var p = function() {
        function m() {
        }
        m.prototype.tabToolbar = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(37, 44, 51, b);
        };
        m.prototype.toolbars = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(52, 60, 69, b);
        };
        m.prototype.selectionBackground = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(29, 79, 115, b);
        };
        m.prototype.selectionText = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(245, 247, 250, b);
        };
        m.prototype.splitters = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(0, 0, 0, b);
        };
        m.prototype.bodyBackground = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(17, 19, 21, b);
        };
        m.prototype.sidebarBackground = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(24, 29, 32, b);
        };
        m.prototype.attentionBackground = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(161, 134, 80, b);
        };
        m.prototype.bodyText = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(143, 161, 178, b);
        };
        m.prototype.foregroundTextGrey = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(182, 186, 191, b);
        };
        m.prototype.contentTextHighContrast = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(169, 186, 203, b);
        };
        m.prototype.contentTextGrey = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(143, 161, 178, b);
        };
        m.prototype.contentTextDarkGrey = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(95, 115, 135, b);
        };
        m.prototype.blueHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(70, 175, 227, b);
        };
        m.prototype.purpleHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(107, 122, 187, b);
        };
        m.prototype.pinkHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(223, 128, 255, b);
        };
        m.prototype.redHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(235, 83, 104, b);
        };
        m.prototype.orangeHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(217, 102, 41, b);
        };
        m.prototype.lightOrangeHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(217, 155, 40, b);
        };
        m.prototype.greenHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(112, 191, 83, b);
        };
        m.prototype.blueGreyHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(94, 136, 176, b);
        };
        return m;
      }();
      h.UIThemeDark = p;
      p = function() {
        function m() {
        }
        m.prototype.tabToolbar = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(235, 236, 237, b);
        };
        m.prototype.toolbars = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(240, 241, 242, b);
        };
        m.prototype.selectionBackground = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(76, 158, 217, b);
        };
        m.prototype.selectionText = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(245, 247, 250, b);
        };
        m.prototype.splitters = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(170, 170, 170, b);
        };
        m.prototype.bodyBackground = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(252, 252, 252, b);
        };
        m.prototype.sidebarBackground = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(247, 247, 247, b);
        };
        m.prototype.attentionBackground = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(161, 134, 80, b);
        };
        m.prototype.bodyText = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(24, 25, 26, b);
        };
        m.prototype.foregroundTextGrey = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(88, 89, 89, b);
        };
        m.prototype.contentTextHighContrast = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(41, 46, 51, b);
        };
        m.prototype.contentTextGrey = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(143, 161, 178, b);
        };
        m.prototype.contentTextDarkGrey = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(102, 115, 128, b);
        };
        m.prototype.blueHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(0, 136, 204, b);
        };
        m.prototype.purpleHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(91, 95, 255, b);
        };
        m.prototype.pinkHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(184, 46, 229, b);
        };
        m.prototype.redHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(237, 38, 85, b);
        };
        m.prototype.orangeHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(241, 60, 0, b);
        };
        m.prototype.lightOrangeHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(217, 126, 0, b);
        };
        m.prototype.greenHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(44, 187, 15, b);
        };
        m.prototype.blueGreyHighlight = function(b) {
          void 0 === b && (b = 1);
          return a.toRGBA(95, 136, 176, b);
        };
        return m;
      }();
      h.UIThemeLight = p;
    })(h.Theme || (h.Theme = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(h) {
      var a = function() {
        function a(m, b) {
          this._buffers = m || [];
          this._snapshots = [];
          this._windowStart = this._startTime = b;
          this._maxDepth = 0;
        }
        a.prototype.addBuffer = function(a) {
          this._buffers.push(a);
        };
        a.prototype.getSnapshotAt = function(a) {
          return this._snapshots[a];
        };
        Object.defineProperty(a.prototype, "hasSnapshots", {get:function() {
          return 0 < this.snapshotCount;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "snapshotCount", {get:function() {
          return this._snapshots.length;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "startTime", {get:function() {
          return this._startTime;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "endTime", {get:function() {
          return this._endTime;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "totalTime", {get:function() {
          return this.endTime - this.startTime;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "windowStart", {get:function() {
          return this._windowStart;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "windowEnd", {get:function() {
          return this._windowEnd;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "windowLength", {get:function() {
          return this.windowEnd - this.windowStart;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "maxDepth", {get:function() {
          return this._maxDepth;
        }, enumerable:!0, configurable:!0});
        a.prototype.forEachSnapshot = function(a) {
          for (var b = 0, l = this.snapshotCount;b < l;b++) {
            a(this._snapshots[b], b);
          }
        };
        a.prototype.createSnapshots = function() {
          var a = Number.MIN_VALUE, b = 0;
          for (this._snapshots = [];0 < this._buffers.length;) {
            var l = this._buffers.shift().createSnapshot();
            l && (a < l.endTime && (a = l.endTime), b < l.maxDepth && (b = l.maxDepth), this._snapshots.push(l));
          }
          this._windowEnd = this._endTime = a;
          this._maxDepth = b;
        };
        a.prototype.setWindow = function(a, b) {
          if (a > b) {
            var l = a;
            a = b;
            b = l;
          }
          l = Math.min(b - a, this.totalTime);
          a < this._startTime ? (a = this._startTime, b = this._startTime + l) : b > this._endTime && (a = this._endTime - l, b = this._endTime);
          this._windowStart = a;
          this._windowEnd = b;
        };
        a.prototype.moveWindowTo = function(a) {
          this.setWindow(a - this.windowLength / 2, a + this.windowLength / 2);
        };
        return a;
      }();
      h.Profile = a;
    })(h.Profiler || (h.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(h, p) {
  function r() {
    this.constructor = h;
  }
  for (var a in p) {
    p.hasOwnProperty(a) && (h[a] = p[a]);
  }
  r.prototype = p.prototype;
  h.prototype = new r;
};
(function(h) {
  (function(h) {
    (function(h) {
      var a = function() {
        return function(a) {
          this.kind = a;
          this.totalTime = this.selfTime = this.count = 0;
        };
      }();
      h.TimelineFrameStatistics = a;
      var p = function() {
        function h(b, a, u, k, t, q) {
          this.parent = b;
          this.kind = a;
          this.startData = u;
          this.endData = k;
          this.startTime = t;
          this.endTime = q;
          this.maxDepth = 0;
        }
        Object.defineProperty(h.prototype, "totalTime", {get:function() {
          return this.endTime - this.startTime;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(h.prototype, "selfTime", {get:function() {
          var b = this.totalTime;
          if (this.children) {
            for (var a = 0, u = this.children.length;a < u;a++) {
              var k = this.children[a], b = b - (k.endTime - k.startTime)
            }
          }
          return b;
        }, enumerable:!0, configurable:!0});
        h.prototype.getChildIndex = function(b) {
          for (var a = this.children, u = 0;u < a.length;u++) {
            if (a[u].endTime > b) {
              return u;
            }
          }
          return 0;
        };
        h.prototype.getChildRange = function(b, a) {
          if (this.children && b <= this.endTime && a >= this.startTime && a >= b) {
            var u = this._getNearestChild(b), k = this._getNearestChildReverse(a);
            if (u <= k) {
              return b = this.children[u].startTime, a = this.children[k].endTime, {startIndex:u, endIndex:k, startTime:b, endTime:a, totalTime:a - b};
            }
          }
          return null;
        };
        h.prototype._getNearestChild = function(b) {
          var a = this.children;
          if (a && a.length) {
            if (b <= a[0].endTime) {
              return 0;
            }
            for (var u, k = 0, t = a.length - 1;t > k;) {
              u = (k + t) / 2 | 0;
              var q = a[u];
              if (b >= q.startTime && b <= q.endTime) {
                return u;
              }
              b > q.endTime ? k = u + 1 : t = u;
            }
            return Math.ceil((k + t) / 2);
          }
          return 0;
        };
        h.prototype._getNearestChildReverse = function(b) {
          var a = this.children;
          if (a && a.length) {
            var u = a.length - 1;
            if (b >= a[u].startTime) {
              return u;
            }
            for (var k, t = 0;u > t;) {
              k = Math.ceil((t + u) / 2);
              var q = a[k];
              if (b >= q.startTime && b <= q.endTime) {
                return k;
              }
              b > q.endTime ? t = k : u = k - 1;
            }
            return (t + u) / 2 | 0;
          }
          return 0;
        };
        h.prototype.query = function(b) {
          if (b < this.startTime || b > this.endTime) {
            return null;
          }
          var a = this.children;
          if (a && 0 < a.length) {
            for (var u, k = 0, t = a.length - 1;t > k;) {
              var q = (k + t) / 2 | 0;
              u = a[q];
              if (b >= u.startTime && b <= u.endTime) {
                return u.query(b);
              }
              b > u.endTime ? k = q + 1 : t = q;
            }
            u = a[t];
            if (b >= u.startTime && b <= u.endTime) {
              return u.query(b);
            }
          }
          return this;
        };
        h.prototype.queryNext = function(b) {
          for (var a = this;b > a.endTime;) {
            if (a.parent) {
              a = a.parent;
            } else {
              break;
            }
          }
          return a.query(b);
        };
        h.prototype.getDepth = function() {
          for (var b = 0, a = this;a;) {
            b++, a = a.parent;
          }
          return b;
        };
        h.prototype.calculateStatistics = function() {
          function b(u) {
            if (u.kind) {
              var k = l[u.kind.id] || (l[u.kind.id] = new a(u.kind));
              k.count++;
              k.selfTime += u.selfTime;
              k.totalTime += u.totalTime;
            }
            u.children && u.children.forEach(b);
          }
          var l = this.statistics = [];
          b(this);
        };
        h.prototype.trace = function(b) {
          var a = (this.kind ? this.kind.name + ": " : "Profile: ") + (this.endTime - this.startTime).toFixed(2);
          if (this.children && this.children.length) {
            b.enter(a);
            for (a = 0;a < this.children.length;a++) {
              this.children[a].trace(b);
            }
            b.outdent();
          } else {
            b.writeLn(a);
          }
        };
        return h;
      }();
      h.TimelineFrame = p;
      p = function(a) {
        function b(b) {
          a.call(this, null, null, null, null, NaN, NaN);
          this.name = b;
        }
        __extends(b, a);
        return b;
      }(p);
      h.TimelineBufferSnapshot = p;
    })(h.Profiler || (h.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    (function(r) {
      var a = function() {
        function a(m, b) {
          void 0 === m && (m = "");
          this.name = m || "";
          this._startTime = h.isNullOrUndefined(b) ? jsGlobal.START_TIME : b;
        }
        a.prototype.getKind = function(a) {
          return this._kinds[a];
        };
        Object.defineProperty(a.prototype, "kinds", {get:function() {
          return this._kinds.concat();
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "depth", {get:function() {
          return this._depth;
        }, enumerable:!0, configurable:!0});
        a.prototype._initialize = function() {
          this._depth = 0;
          this._stack = [];
          this._data = [];
          this._kinds = [];
          this._kindNameMap = Object.create(null);
          this._marks = new h.CircularBuffer(Int32Array, 20);
          this._times = new h.CircularBuffer(Float64Array, 20);
        };
        a.prototype._getKindId = function(h) {
          var b = a.MAX_KINDID;
          if (void 0 === this._kindNameMap[h]) {
            if (b = this._kinds.length, b < a.MAX_KINDID) {
              var l = {id:b, name:h, visible:!0};
              this._kinds.push(l);
              this._kindNameMap[h] = l;
            } else {
              b = a.MAX_KINDID;
            }
          } else {
            b = this._kindNameMap[h].id;
          }
          return b;
        };
        a.prototype._getMark = function(m, b, l) {
          var u = a.MAX_DATAID;
          h.isNullOrUndefined(l) || b === a.MAX_KINDID || (u = this._data.length, u < a.MAX_DATAID ? this._data.push(l) : u = a.MAX_DATAID);
          return m | u << 16 | b;
        };
        a.prototype.enter = function(m, b, l) {
          l = (h.isNullOrUndefined(l) ? performance.now() : l) - this._startTime;
          this._marks || this._initialize();
          this._depth++;
          m = this._getKindId(m);
          this._marks.write(this._getMark(a.ENTER, m, b));
          this._times.write(l);
          this._stack.push(m);
        };
        a.prototype.leave = function(m, b, l) {
          l = (h.isNullOrUndefined(l) ? performance.now() : l) - this._startTime;
          var u = this._stack.pop();
          m && (u = this._getKindId(m));
          this._marks.write(this._getMark(a.LEAVE, u, b));
          this._times.write(l);
          this._depth--;
        };
        a.prototype.count = function(a, b, l) {
        };
        a.prototype.createSnapshot = function(m) {
          void 0 === m && (m = Number.MAX_VALUE);
          if (!this._marks) {
            return null;
          }
          var b = this._times, l = this._kinds, u = this._data, k = new r.TimelineBufferSnapshot(this.name), t = [k], q = 0;
          this._marks || this._initialize();
          this._marks.forEachInReverse(function(k, v) {
            var c = u[k >>> 16 & a.MAX_DATAID], f = l[k & a.MAX_KINDID];
            if (h.isNullOrUndefined(f) || f.visible) {
              var e = k & 2147483648, d = b.get(v), g = t.length;
              if (e === a.LEAVE) {
                if (1 === g && (q++, q > m)) {
                  return !0;
                }
                t.push(new r.TimelineFrame(t[g - 1], f, null, c, NaN, d));
              } else {
                if (e === a.ENTER) {
                  if (f = t.pop(), e = t[t.length - 1]) {
                    for (e.children ? e.children.unshift(f) : e.children = [f], e = t.length, f.depth = e, f.startData = c, f.startTime = d;f;) {
                      if (f.maxDepth < e) {
                        f.maxDepth = e, f = f.parent;
                      } else {
                        break;
                      }
                    }
                  } else {
                    return !0;
                  }
                }
              }
            }
          });
          k.children && k.children.length && (k.startTime = k.children[0].startTime, k.endTime = k.children[k.children.length - 1].endTime);
          return k;
        };
        a.prototype.reset = function(a) {
          this._startTime = h.isNullOrUndefined(a) ? performance.now() : a;
          this._marks ? (this._depth = 0, this._data = [], this._marks.reset(), this._times.reset()) : this._initialize();
        };
        a.FromFirefoxProfile = function(h, b) {
          for (var l = h.profile.threads[0].samples, u = new a(b, l[0].time), k = [], t, q = 0;q < l.length;q++) {
            t = l[q];
            var n = t.time, v = t.frames, c = 0;
            for (t = Math.min(v.length, k.length);c < t && v[c].location === k[c].location;) {
              c++;
            }
            for (var f = k.length - c, e = 0;e < f;e++) {
              t = k.pop(), u.leave(t.location, null, n);
            }
            for (;c < v.length;) {
              t = v[c++], u.enter(t.location, null, n);
            }
            k = v;
          }
          for (;t = k.pop();) {
            u.leave(t.location, null, n);
          }
          return u;
        };
        a.FromChromeProfile = function(h, b) {
          var l = h.timestamps, u = h.samples, k = new a(b, l[0] / 1E3), t = [], q = {}, n;
          a._resolveIds(h.head, q);
          for (var v = 0;v < l.length;v++) {
            var c = l[v] / 1E3, f = [];
            for (n = q[u[v]];n;) {
              f.unshift(n), n = n.parent;
            }
            var e = 0;
            for (n = Math.min(f.length, t.length);e < n && f[e] === t[e];) {
              e++;
            }
            for (var d = t.length - e, g = 0;g < d;g++) {
              n = t.pop(), k.leave(n.functionName, null, c);
            }
            for (;e < f.length;) {
              n = f[e++], k.enter(n.functionName, null, c);
            }
            t = f;
          }
          for (;n = t.pop();) {
            k.leave(n.functionName, null, c);
          }
          return k;
        };
        a._resolveIds = function(h, b) {
          b[h.id] = h;
          if (h.children) {
            for (var l = 0;l < h.children.length;l++) {
              h.children[l].parent = h, a._resolveIds(h.children[l], b);
            }
          }
        };
        a.ENTER = 0;
        a.LEAVE = -2147483648;
        a.MAX_KINDID = 65535;
        a.MAX_DATAID = 32767;
        return a;
      }();
      r.TimelineBuffer = a;
    })(p.Profiler || (p.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    (function(r) {
      (function(a) {
        a[a.DARK = 0] = "DARK";
        a[a.LIGHT = 1] = "LIGHT";
      })(r.UIThemeType || (r.UIThemeType = {}));
      var a = function() {
        function a(h, b) {
          void 0 === b && (b = 0);
          this._container = h;
          this._headers = [];
          this._charts = [];
          this._profiles = [];
          this._activeProfile = null;
          this.themeType = b;
          this._tooltip = this._createTooltip();
        }
        a.prototype.createProfile = function(a, b) {
          var l = new r.Profile(a, b);
          l.createSnapshots();
          this._profiles.push(l);
          this.activateProfile(l);
          return l;
        };
        a.prototype.activateProfile = function(a) {
          this.deactivateProfile();
          this._activeProfile = a;
          this._createViews();
          this._initializeViews();
        };
        a.prototype.activateProfileAt = function(a) {
          this.activateProfile(this.getProfileAt(a));
        };
        a.prototype.deactivateProfile = function() {
          this._activeProfile && (this._destroyViews(), this._activeProfile = null);
        };
        a.prototype.resize = function() {
          this._onResize();
        };
        a.prototype.getProfileAt = function(a) {
          return this._profiles[a];
        };
        Object.defineProperty(a.prototype, "activeProfile", {get:function() {
          return this._activeProfile;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "profileCount", {get:function() {
          return this._profiles.length;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "container", {get:function() {
          return this._container;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "themeType", {get:function() {
          return this._themeType;
        }, set:function(a) {
          switch(a) {
            case 0:
              this._theme = new p.Theme.UIThemeDark;
              break;
            case 1:
              this._theme = new p.Theme.UIThemeLight;
          }
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "theme", {get:function() {
          return this._theme;
        }, enumerable:!0, configurable:!0});
        a.prototype.getSnapshotAt = function(a) {
          return this._activeProfile.getSnapshotAt(a);
        };
        a.prototype._createViews = function() {
          if (this._activeProfile) {
            var a = this;
            this._overviewHeader = new r.FlameChartHeader(this, 0);
            this._overview = new r.FlameChartOverview(this, 0);
            this._activeProfile.forEachSnapshot(function(b, l) {
              a._headers.push(new r.FlameChartHeader(a, 1));
              a._charts.push(new r.FlameChart(a, b));
            });
            window.addEventListener("resize", this._onResize.bind(this));
          }
        };
        a.prototype._destroyViews = function() {
          if (this._activeProfile) {
            this._overviewHeader.destroy();
            for (this._overview.destroy();this._headers.length;) {
              this._headers.pop().destroy();
            }
            for (;this._charts.length;) {
              this._charts.pop().destroy();
            }
            window.removeEventListener("resize", this._onResize.bind(this));
          }
        };
        a.prototype._initializeViews = function() {
          if (this._activeProfile) {
            var a = this, b = this._activeProfile.startTime, l = this._activeProfile.endTime;
            this._overviewHeader.initialize(b, l);
            this._overview.initialize(b, l);
            this._activeProfile.forEachSnapshot(function(u, k) {
              a._headers[k].initialize(b, l);
              a._charts[k].initialize(b, l);
            });
          }
        };
        a.prototype._onResize = function() {
          if (this._activeProfile) {
            var a = this, b = this._container.offsetWidth;
            this._overviewHeader.setSize(b);
            this._overview.setSize(b);
            this._activeProfile.forEachSnapshot(function(l, u) {
              a._headers[u].setSize(b);
              a._charts[u].setSize(b);
            });
          }
        };
        a.prototype._updateViews = function() {
          if (this._activeProfile) {
            var a = this, b = this._activeProfile.windowStart, l = this._activeProfile.windowEnd;
            this._overviewHeader.setWindow(b, l);
            this._overview.setWindow(b, l);
            this._activeProfile.forEachSnapshot(function(u, k) {
              a._headers[k].setWindow(b, l);
              a._charts[k].setWindow(b, l);
            });
          }
        };
        a.prototype._drawViews = function() {
        };
        a.prototype._createTooltip = function() {
          var a = document.createElement("div");
          a.classList.add("profiler-tooltip");
          a.style.display = "none";
          this._container.insertBefore(a, this._container.firstChild);
          return a;
        };
        a.prototype.setWindow = function(a, b) {
          this._activeProfile.setWindow(a, b);
          this._updateViews();
        };
        a.prototype.moveWindowTo = function(a) {
          this._activeProfile.moveWindowTo(a);
          this._updateViews();
        };
        a.prototype.showTooltip = function(a, b, l, u) {
          this.removeTooltipContent();
          this._tooltip.appendChild(this.createTooltipContent(a, b));
          this._tooltip.style.display = "block";
          var k = this._tooltip.firstChild;
          b = k.clientWidth;
          k = k.clientHeight;
          l += l + b >= a.canvas.clientWidth - 50 ? -(b + 20) : 25;
          u += a.canvas.offsetTop - k / 2;
          this._tooltip.style.left = l + "px";
          this._tooltip.style.top = u + "px";
        };
        a.prototype.hideTooltip = function() {
          this._tooltip.style.display = "none";
        };
        a.prototype.createTooltipContent = function(a, b) {
          var l = Math.round(1E5 * b.totalTime) / 1E5, u = Math.round(1E5 * b.selfTime) / 1E5, k = Math.round(1E4 * b.selfTime / b.totalTime) / 100, t = document.createElement("div"), h = document.createElement("h1");
          h.textContent = b.kind.name;
          t.appendChild(h);
          h = document.createElement("p");
          h.textContent = "Total: " + l + " ms";
          t.appendChild(h);
          l = document.createElement("p");
          l.textContent = "Self: " + u + " ms (" + k + "%)";
          t.appendChild(l);
          if (u = a.getStatistics(b.kind)) {
            k = document.createElement("p"), k.textContent = "Count: " + u.count, t.appendChild(k), k = Math.round(1E5 * u.totalTime) / 1E5, l = document.createElement("p"), l.textContent = "All Total: " + k + " ms", t.appendChild(l), u = Math.round(1E5 * u.selfTime) / 1E5, k = document.createElement("p"), k.textContent = "All Self: " + u + " ms", t.appendChild(k);
          }
          this.appendDataElements(t, b.startData);
          this.appendDataElements(t, b.endData);
          return t;
        };
        a.prototype.appendDataElements = function(a, b) {
          if (!h.isNullOrUndefined(b)) {
            a.appendChild(document.createElement("hr"));
            var l;
            if (h.isObject(b)) {
              for (var u in b) {
                l = document.createElement("p"), l.textContent = u + ": " + b[u], a.appendChild(l);
              }
            } else {
              l = document.createElement("p"), l.textContent = b.toString(), a.appendChild(l);
            }
          }
        };
        a.prototype.removeTooltipContent = function() {
          for (var a = this._tooltip;a.firstChild;) {
            a.removeChild(a.firstChild);
          }
        };
        return a;
      }();
      r.Controller = a;
    })(p.Profiler || (p.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    (function(r) {
      var a = h.NumberUtilities.clamp, p = function() {
        function a(b) {
          this.value = b;
        }
        a.prototype.toString = function() {
          return this.value;
        };
        a.AUTO = new a("auto");
        a.DEFAULT = new a("default");
        a.NONE = new a("none");
        a.HELP = new a("help");
        a.POINTER = new a("pointer");
        a.PROGRESS = new a("progress");
        a.WAIT = new a("wait");
        a.CELL = new a("cell");
        a.CROSSHAIR = new a("crosshair");
        a.TEXT = new a("text");
        a.ALIAS = new a("alias");
        a.COPY = new a("copy");
        a.MOVE = new a("move");
        a.NO_DROP = new a("no-drop");
        a.NOT_ALLOWED = new a("not-allowed");
        a.ALL_SCROLL = new a("all-scroll");
        a.COL_RESIZE = new a("col-resize");
        a.ROW_RESIZE = new a("row-resize");
        a.N_RESIZE = new a("n-resize");
        a.E_RESIZE = new a("e-resize");
        a.S_RESIZE = new a("s-resize");
        a.W_RESIZE = new a("w-resize");
        a.NE_RESIZE = new a("ne-resize");
        a.NW_RESIZE = new a("nw-resize");
        a.SE_RESIZE = new a("se-resize");
        a.SW_RESIZE = new a("sw-resize");
        a.EW_RESIZE = new a("ew-resize");
        a.NS_RESIZE = new a("ns-resize");
        a.NESW_RESIZE = new a("nesw-resize");
        a.NWSE_RESIZE = new a("nwse-resize");
        a.ZOOM_IN = new a("zoom-in");
        a.ZOOM_OUT = new a("zoom-out");
        a.GRAB = new a("grab");
        a.GRABBING = new a("grabbing");
        return a;
      }();
      r.MouseCursor = p;
      var m = function() {
        function b(a, b) {
          this._target = a;
          this._eventTarget = b;
          this._wheelDisabled = !1;
          this._boundOnMouseDown = this._onMouseDown.bind(this);
          this._boundOnMouseUp = this._onMouseUp.bind(this);
          this._boundOnMouseOver = this._onMouseOver.bind(this);
          this._boundOnMouseOut = this._onMouseOut.bind(this);
          this._boundOnMouseMove = this._onMouseMove.bind(this);
          this._boundOnMouseWheel = this._onMouseWheel.bind(this);
          this._boundOnDrag = this._onDrag.bind(this);
          b.addEventListener("mousedown", this._boundOnMouseDown, !1);
          b.addEventListener("mouseover", this._boundOnMouseOver, !1);
          b.addEventListener("mouseout", this._boundOnMouseOut, !1);
          b.addEventListener("onwheel" in document ? "wheel" : "mousewheel", this._boundOnMouseWheel, !1);
        }
        b.prototype.destroy = function() {
          var a = this._eventTarget;
          a.removeEventListener("mousedown", this._boundOnMouseDown);
          a.removeEventListener("mouseover", this._boundOnMouseOver);
          a.removeEventListener("mouseout", this._boundOnMouseOut);
          a.removeEventListener("onwheel" in document ? "wheel" : "mousewheel", this._boundOnMouseWheel);
          window.removeEventListener("mousemove", this._boundOnDrag);
          window.removeEventListener("mouseup", this._boundOnMouseUp);
          this._killHoverCheck();
          this._target = this._eventTarget = null;
        };
        b.prototype.updateCursor = function(a) {
          if (!b._cursorOwner || b._cursorOwner === this._target) {
            var u = this._eventTarget.parentElement;
            b._cursor !== a && (b._cursor = a, ["", "-moz-", "-webkit-"].forEach(function(b) {
              u.style.cursor = b + a;
            }));
            b._cursorOwner = b._cursor === p.DEFAULT ? null : this._target;
          }
        };
        b.prototype._onMouseDown = function(a) {
          this._killHoverCheck();
          if (0 === a.button) {
            var b = this._getTargetMousePos(a, a.target);
            this._dragInfo = {start:b, current:b, delta:{x:0, y:0}, hasMoved:!1, originalTarget:a.target};
            window.addEventListener("mousemove", this._boundOnDrag, !1);
            window.addEventListener("mouseup", this._boundOnMouseUp, !1);
            this._target.onMouseDown(b.x, b.y);
          }
        };
        b.prototype._onDrag = function(a) {
          var b = this._dragInfo;
          a = this._getTargetMousePos(a, b.originalTarget);
          var k = {x:a.x - b.start.x, y:a.y - b.start.y};
          b.current = a;
          b.delta = k;
          b.hasMoved = !0;
          this._target.onDrag(b.start.x, b.start.y, a.x, a.y, k.x, k.y);
        };
        b.prototype._onMouseUp = function(a) {
          window.removeEventListener("mousemove", this._boundOnDrag);
          window.removeEventListener("mouseup", this._boundOnMouseUp);
          var b = this;
          a = this._dragInfo;
          if (a.hasMoved) {
            this._target.onDragEnd(a.start.x, a.start.y, a.current.x, a.current.y, a.delta.x, a.delta.y);
          } else {
            this._target.onClick(a.current.x, a.current.y);
          }
          this._dragInfo = null;
          this._wheelDisabled = !0;
          setTimeout(function() {
            b._wheelDisabled = !1;
          }, 500);
        };
        b.prototype._onMouseOver = function(a) {
          a.target.addEventListener("mousemove", this._boundOnMouseMove, !1);
          if (!this._dragInfo) {
            var b = this._getTargetMousePos(a, a.target);
            this._target.onMouseOver(b.x, b.y);
            this._startHoverCheck(a);
          }
        };
        b.prototype._onMouseOut = function(a) {
          a.target.removeEventListener("mousemove", this._boundOnMouseMove, !1);
          if (!this._dragInfo) {
            this._target.onMouseOut();
          }
          this._killHoverCheck();
        };
        b.prototype._onMouseMove = function(a) {
          if (!this._dragInfo) {
            var b = this._getTargetMousePos(a, a.target);
            this._target.onMouseMove(b.x, b.y);
            this._killHoverCheck();
            this._startHoverCheck(a);
          }
        };
        b.prototype._onMouseWheel = function(b) {
          if (!(b.altKey || b.metaKey || b.ctrlKey || b.shiftKey || (b.preventDefault(), this._dragInfo || this._wheelDisabled))) {
            var h = this._getTargetMousePos(b, b.target);
            b = a("undefined" !== typeof b.deltaY ? b.deltaY / 16 : -b.wheelDelta / 40, -1, 1);
            b = Math.pow(1.2, b) - 1;
            this._target.onMouseWheel(h.x, h.y, b);
          }
        };
        b.prototype._startHoverCheck = function(a) {
          this._hoverInfo = {isHovering:!1, timeoutHandle:setTimeout(this._onMouseMoveIdleHandler.bind(this), b.HOVER_TIMEOUT), pos:this._getTargetMousePos(a, a.target)};
        };
        b.prototype._killHoverCheck = function() {
          if (this._hoverInfo) {
            clearTimeout(this._hoverInfo.timeoutHandle);
            if (this._hoverInfo.isHovering) {
              this._target.onHoverEnd();
            }
            this._hoverInfo = null;
          }
        };
        b.prototype._onMouseMoveIdleHandler = function() {
          var a = this._hoverInfo;
          a.isHovering = !0;
          this._target.onHoverStart(a.pos.x, a.pos.y);
        };
        b.prototype._getTargetMousePos = function(a, b) {
          var k = b.getBoundingClientRect();
          return {x:a.clientX - k.left, y:a.clientY - k.top};
        };
        b.HOVER_TIMEOUT = 500;
        b._cursor = p.DEFAULT;
        return b;
      }();
      r.MouseController = m;
    })(p.Profiler || (p.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(h) {
      (function(a) {
        a[a.NONE = 0] = "NONE";
        a[a.WINDOW = 1] = "WINDOW";
        a[a.HANDLE_LEFT = 2] = "HANDLE_LEFT";
        a[a.HANDLE_RIGHT = 3] = "HANDLE_RIGHT";
        a[a.HANDLE_BOTH = 4] = "HANDLE_BOTH";
      })(h.FlameChartDragTarget || (h.FlameChartDragTarget = {}));
      var a = function() {
        function a(m) {
          this._controller = m;
          this._initialized = !1;
          this._canvas = document.createElement("canvas");
          this._context = this._canvas.getContext("2d");
          this._mouseController = new h.MouseController(this, this._canvas);
          m = m.container;
          m.appendChild(this._canvas);
          m = m.getBoundingClientRect();
          this.setSize(m.width);
        }
        Object.defineProperty(a.prototype, "canvas", {get:function() {
          return this._canvas;
        }, enumerable:!0, configurable:!0});
        a.prototype.setSize = function(a, b) {
          void 0 === b && (b = 20);
          this._width = a;
          this._height = b;
          this._resetCanvas();
          this.draw();
        };
        a.prototype.initialize = function(a, b) {
          this._initialized = !0;
          this.setRange(a, b, !1);
          this.setWindow(a, b, !1);
          this.draw();
        };
        a.prototype.setWindow = function(a, b, l) {
          void 0 === l && (l = !0);
          this._windowStart = a;
          this._windowEnd = b;
          !l || this.draw();
        };
        a.prototype.setRange = function(a, b, l) {
          void 0 === l && (l = !0);
          this._rangeStart = a;
          this._rangeEnd = b;
          !l || this.draw();
        };
        a.prototype.destroy = function() {
          this._mouseController.destroy();
          this._mouseController = null;
          this._controller.container.removeChild(this._canvas);
          this._controller = null;
        };
        a.prototype._resetCanvas = function() {
          var a = window.devicePixelRatio, b = this._canvas;
          b.width = this._width * a;
          b.height = this._height * a;
          b.style.width = this._width + "px";
          b.style.height = this._height + "px";
        };
        a.prototype.draw = function() {
        };
        a.prototype._almostEq = function(a, b, l) {
          void 0 === l && (l = 10);
          l = Math.pow(10, l);
          return Math.abs(a - b) < 1 / l;
        };
        a.prototype._windowEqRange = function() {
          return this._almostEq(this._windowStart, this._rangeStart) && this._almostEq(this._windowEnd, this._rangeEnd);
        };
        a.prototype._decimalPlaces = function(a) {
          return (+a).toFixed(10).replace(/^-?\d*\.?|0+$/g, "").length;
        };
        a.prototype._toPixelsRelative = function(a) {
          return 0;
        };
        a.prototype._toPixels = function(a) {
          return 0;
        };
        a.prototype._toTimeRelative = function(a) {
          return 0;
        };
        a.prototype._toTime = function(a) {
          return 0;
        };
        a.prototype.onMouseWheel = function(h, b, l) {
          h = this._toTime(h);
          b = this._windowStart;
          var u = this._windowEnd, k = u - b;
          l = Math.max((a.MIN_WINDOW_LEN - k) / k, l);
          this._controller.setWindow(b + (b - h) * l, u + (u - h) * l);
          this.onHoverEnd();
        };
        a.prototype.onMouseDown = function(a, b) {
        };
        a.prototype.onMouseMove = function(a, b) {
        };
        a.prototype.onMouseOver = function(a, b) {
        };
        a.prototype.onMouseOut = function() {
        };
        a.prototype.onDrag = function(a, b, l, h, k, t) {
        };
        a.prototype.onDragEnd = function(a, b, l, h, k, t) {
        };
        a.prototype.onClick = function(a, b) {
        };
        a.prototype.onHoverStart = function(a, b) {
        };
        a.prototype.onHoverEnd = function() {
        };
        a.DRAGHANDLE_WIDTH = 4;
        a.MIN_WINDOW_LEN = .1;
        return a;
      }();
      h.FlameChartBase = a;
    })(h.Profiler || (h.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    (function(r) {
      var a = h.StringUtilities.trimMiddle, p = function(m) {
        function b(a, b) {
          m.call(this, a);
          this._textWidth = {};
          this._minFrameWidthInPixels = 1;
          this._snapshot = b;
          this._kindStyle = Object.create(null);
        }
        __extends(b, m);
        b.prototype.setSize = function(a, b) {
          m.prototype.setSize.call(this, a, b || this._initialized ? 12.5 * this._maxDepth : 100);
        };
        b.prototype.initialize = function(a, b) {
          this._initialized = !0;
          this._maxDepth = this._snapshot.maxDepth;
          this.setRange(a, b, !1);
          this.setWindow(a, b, !1);
          this.setSize(this._width, 12.5 * this._maxDepth);
        };
        b.prototype.destroy = function() {
          m.prototype.destroy.call(this);
          this._snapshot = null;
        };
        b.prototype.draw = function() {
          var a = this._context, b = window.devicePixelRatio;
          h.ColorStyle.reset();
          a.save();
          a.scale(b, b);
          a.fillStyle = this._controller.theme.bodyBackground(1);
          a.fillRect(0, 0, this._width, this._height);
          this._initialized && this._drawChildren(this._snapshot);
          a.restore();
        };
        b.prototype._drawChildren = function(a, b) {
          void 0 === b && (b = 0);
          var k = a.getChildRange(this._windowStart, this._windowEnd);
          if (k) {
            for (var t = k.startIndex;t <= k.endIndex;t++) {
              var h = a.children[t];
              this._drawFrame(h, b) && this._drawChildren(h, b + 1);
            }
          }
        };
        b.prototype._drawFrame = function(a, b) {
          var k = this._context, t = this._toPixels(a.startTime), q = this._toPixels(a.endTime), n = q - t;
          if (n <= this._minFrameWidthInPixels) {
            return k.fillStyle = this._controller.theme.tabToolbar(1), k.fillRect(t, 12.5 * b, this._minFrameWidthInPixels, 12 + 12.5 * (a.maxDepth - a.depth)), !1;
          }
          0 > t && (q = n + t, t = 0);
          var q = q - t, v = this._kindStyle[a.kind.id];
          v || (v = h.ColorStyle.randomStyle(), v = this._kindStyle[a.kind.id] = {bgColor:v, textColor:h.ColorStyle.contrastStyle(v)});
          k.save();
          k.fillStyle = v.bgColor;
          k.fillRect(t, 12.5 * b, q, 12);
          12 < n && (n = a.kind.name) && n.length && (n = this._prepareText(k, n, q - 4), n.length && (k.fillStyle = v.textColor, k.textBaseline = "bottom", k.fillText(n, t + 2, 12.5 * (b + 1) - 1)));
          k.restore();
          return !0;
        };
        b.prototype._prepareText = function(b, h, k) {
          var t = this._measureWidth(b, h);
          if (k > t) {
            return h;
          }
          for (var t = 3, q = h.length;t < q;) {
            var n = t + q >> 1;
            this._measureWidth(b, a(h, n)) < k ? t = n + 1 : q = n;
          }
          h = a(h, q - 1);
          t = this._measureWidth(b, h);
          return t <= k ? h : "";
        };
        b.prototype._measureWidth = function(a, b) {
          var k = this._textWidth[b];
          k || (k = a.measureText(b).width, this._textWidth[b] = k);
          return k;
        };
        b.prototype._toPixelsRelative = function(a) {
          return a * this._width / (this._windowEnd - this._windowStart);
        };
        b.prototype._toPixels = function(a) {
          return this._toPixelsRelative(a - this._windowStart);
        };
        b.prototype._toTimeRelative = function(a) {
          return a * (this._windowEnd - this._windowStart) / this._width;
        };
        b.prototype._toTime = function(a) {
          return this._toTimeRelative(a) + this._windowStart;
        };
        b.prototype._getFrameAtPosition = function(a, b) {
          var k = this._toTime(a), t = 1 + b / 12.5 | 0;
          if ((k = this._snapshot.query(k)) && k.depth >= t) {
            for (;k && k.depth > t;) {
              k = k.parent;
            }
            return k;
          }
          return null;
        };
        b.prototype.onMouseDown = function(a, b) {
          this._windowEqRange() || (this._mouseController.updateCursor(r.MouseCursor.ALL_SCROLL), this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:1});
        };
        b.prototype.onMouseMove = function(a, b) {
        };
        b.prototype.onMouseOver = function(a, b) {
        };
        b.prototype.onMouseOut = function() {
        };
        b.prototype.onDrag = function(a, b, k, t, h, n) {
          if (a = this._dragInfo) {
            h = this._toTimeRelative(-h), this._controller.setWindow(a.windowStartInitial + h, a.windowEndInitial + h);
          }
        };
        b.prototype.onDragEnd = function(a, b, k, h, q, n) {
          this._dragInfo = null;
          this._mouseController.updateCursor(r.MouseCursor.DEFAULT);
        };
        b.prototype.onClick = function(a, b) {
          this._dragInfo = null;
          this._mouseController.updateCursor(r.MouseCursor.DEFAULT);
        };
        b.prototype.onHoverStart = function(a, b) {
          var k = this._getFrameAtPosition(a, b);
          k && (this._hoveredFrame = k, this._controller.showTooltip(this, k, a, b));
        };
        b.prototype.onHoverEnd = function() {
          this._hoveredFrame && (this._hoveredFrame = null, this._controller.hideTooltip());
        };
        b.prototype.getStatistics = function(a) {
          var b = this._snapshot;
          b.statistics || b.calculateStatistics();
          return b.statistics[a.id];
        };
        return b;
      }(r.FlameChartBase);
      r.FlameChart = p;
    })(p.Profiler || (p.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    (function(r) {
      var a = h.NumberUtilities.clamp;
      (function(a) {
        a[a.OVERLAY = 0] = "OVERLAY";
        a[a.STACK = 1] = "STACK";
        a[a.UNION = 2] = "UNION";
      })(r.FlameChartOverviewMode || (r.FlameChartOverviewMode = {}));
      var p = function(h) {
        function b(a, b) {
          void 0 === b && (b = 1);
          this._mode = b;
          this._overviewCanvasDirty = !0;
          this._overviewCanvas = document.createElement("canvas");
          this._overviewContext = this._overviewCanvas.getContext("2d");
          h.call(this, a);
        }
        __extends(b, h);
        b.prototype.setSize = function(a, b) {
          h.prototype.setSize.call(this, a, b || 64);
        };
        Object.defineProperty(b.prototype, "mode", {set:function(a) {
          this._mode = a;
          this.draw();
        }, enumerable:!0, configurable:!0});
        b.prototype._resetCanvas = function() {
          h.prototype._resetCanvas.call(this);
          this._overviewCanvas.width = this._canvas.width;
          this._overviewCanvas.height = this._canvas.height;
          this._overviewCanvasDirty = !0;
        };
        b.prototype.draw = function() {
          var a = this._context, b = window.devicePixelRatio, k = this._width, h = this._height;
          a.save();
          a.scale(b, b);
          a.fillStyle = this._controller.theme.bodyBackground(1);
          a.fillRect(0, 0, k, h);
          a.restore();
          this._initialized && (this._overviewCanvasDirty && (this._drawChart(), this._overviewCanvasDirty = !1), a.drawImage(this._overviewCanvas, 0, 0), this._drawSelection());
        };
        b.prototype._drawSelection = function() {
          var a = this._context, b = this._height, k = window.devicePixelRatio, h = this._selection ? this._selection.left : this._toPixels(this._windowStart), q = this._selection ? this._selection.right : this._toPixels(this._windowEnd), n = this._controller.theme;
          a.save();
          a.scale(k, k);
          this._selection ? (a.fillStyle = n.selectionText(.15), a.fillRect(h, 1, q - h, b - 1), a.fillStyle = "rgba(133, 0, 0, 1)", a.fillRect(h + .5, 0, q - h - 1, 4), a.fillRect(h + .5, b - 4, q - h - 1, 4)) : (a.fillStyle = n.bodyBackground(.4), a.fillRect(0, 1, h, b - 1), a.fillRect(q, 1, this._width, b - 1));
          a.beginPath();
          a.moveTo(h, 0);
          a.lineTo(h, b);
          a.moveTo(q, 0);
          a.lineTo(q, b);
          a.lineWidth = .5;
          a.strokeStyle = n.foregroundTextGrey(1);
          a.stroke();
          b = this._selection ? this._toTime(this._selection.left) : this._windowStart;
          k = this._selection ? this._toTime(this._selection.right) : this._windowEnd;
          b = Math.abs(k - b);
          a.fillStyle = n.selectionText(.5);
          a.font = "8px sans-serif";
          a.textBaseline = "alphabetic";
          a.textAlign = "end";
          a.fillText(b.toFixed(2), Math.min(h, q) - 4, 10);
          a.fillText((b / 60).toFixed(2), Math.min(h, q) - 4, 20);
          a.restore();
        };
        b.prototype._drawChart = function() {
          var a = window.devicePixelRatio, b = this._height, k = this._controller.activeProfile, h = 4 * this._width, q = k.totalTime / h, n = this._overviewContext, v = this._controller.theme.blueHighlight(1);
          n.save();
          n.translate(0, a * b);
          var c = -a * b / (k.maxDepth - 1);
          n.scale(a / 4, c);
          n.clearRect(0, 0, h, k.maxDepth - 1);
          1 == this._mode && n.scale(1, 1 / k.snapshotCount);
          for (var f = 0, e = k.snapshotCount;f < e;f++) {
            var d = k.getSnapshotAt(f);
            if (d) {
              var g = null, y = 0;
              n.beginPath();
              n.moveTo(0, 0);
              for (var x = 0;x < h;x++) {
                y = k.startTime + x * q, y = (g = g ? g.queryNext(y) : d.query(y)) ? g.getDepth() - 1 : 0, n.lineTo(x, y);
              }
              n.lineTo(x, 0);
              n.fillStyle = v;
              n.fill();
              1 == this._mode && n.translate(0, -b * a / c);
            }
          }
          n.restore();
        };
        b.prototype._toPixelsRelative = function(a) {
          return a * this._width / (this._rangeEnd - this._rangeStart);
        };
        b.prototype._toPixels = function(a) {
          return this._toPixelsRelative(a - this._rangeStart);
        };
        b.prototype._toTimeRelative = function(a) {
          return a * (this._rangeEnd - this._rangeStart) / this._width;
        };
        b.prototype._toTime = function(a) {
          return this._toTimeRelative(a) + this._rangeStart;
        };
        b.prototype._getDragTargetUnderCursor = function(a, b) {
          if (0 <= b && b < this._height) {
            var k = this._toPixels(this._windowStart), h = this._toPixels(this._windowEnd), q = 2 + r.FlameChartBase.DRAGHANDLE_WIDTH / 2, n = a >= k - q && a <= k + q, v = a >= h - q && a <= h + q;
            if (n && v) {
              return 4;
            }
            if (n) {
              return 2;
            }
            if (v) {
              return 3;
            }
            if (!this._windowEqRange() && a > k + q && a < h - q) {
              return 1;
            }
          }
          return 0;
        };
        b.prototype.onMouseDown = function(a, b) {
          var k = this._getDragTargetUnderCursor(a, b);
          0 === k ? (this._selection = {left:a, right:a}, this.draw()) : (1 === k && this._mouseController.updateCursor(r.MouseCursor.GRABBING), this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:k});
        };
        b.prototype.onMouseMove = function(a, b) {
          var k = r.MouseCursor.DEFAULT, h = this._getDragTargetUnderCursor(a, b);
          0 === h || this._selection || (k = 1 === h ? r.MouseCursor.GRAB : r.MouseCursor.EW_RESIZE);
          this._mouseController.updateCursor(k);
        };
        b.prototype.onMouseOver = function(a, b) {
          this.onMouseMove(a, b);
        };
        b.prototype.onMouseOut = function() {
          this._mouseController.updateCursor(r.MouseCursor.DEFAULT);
        };
        b.prototype.onDrag = function(b, h, k, t, q, n) {
          if (this._selection) {
            this._selection = {left:b, right:a(k, 0, this._width - 1)}, this.draw();
          } else {
            b = this._dragInfo;
            if (4 === b.target) {
              if (0 !== q) {
                b.target = 0 > q ? 2 : 3;
              } else {
                return;
              }
            }
            h = this._windowStart;
            k = this._windowEnd;
            q = this._toTimeRelative(q);
            switch(b.target) {
              case 1:
                h = b.windowStartInitial + q;
                k = b.windowEndInitial + q;
                break;
              case 2:
                h = a(b.windowStartInitial + q, this._rangeStart, k - r.FlameChartBase.MIN_WINDOW_LEN);
                break;
              case 3:
                k = a(b.windowEndInitial + q, h + r.FlameChartBase.MIN_WINDOW_LEN, this._rangeEnd);
                break;
              default:
                return;
            }
            this._controller.setWindow(h, k);
          }
        };
        b.prototype.onDragEnd = function(a, b, k, h, q, n) {
          this._selection && (this._selection = null, this._controller.setWindow(this._toTime(a), this._toTime(k)));
          this._dragInfo = null;
          this.onMouseMove(k, h);
        };
        b.prototype.onClick = function(a, b) {
          this._selection = this._dragInfo = null;
          this._windowEqRange() || (0 === this._getDragTargetUnderCursor(a, b) && this._controller.moveWindowTo(this._toTime(a)), this.onMouseMove(a, b));
          this.draw();
        };
        b.prototype.onHoverStart = function(a, b) {
        };
        b.prototype.onHoverEnd = function() {
        };
        return b;
      }(r.FlameChartBase);
      r.FlameChartOverview = p;
    })(p.Profiler || (p.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    (function(p) {
      var a = h.NumberUtilities.clamp;
      (function(a) {
        a[a.OVERVIEW = 0] = "OVERVIEW";
        a[a.CHART = 1] = "CHART";
      })(p.FlameChartHeaderType || (p.FlameChartHeaderType = {}));
      var w = function(h) {
        function b(a, b) {
          this._type = b;
          h.call(this, a);
        }
        __extends(b, h);
        b.prototype.draw = function() {
          var a = this._context, b = window.devicePixelRatio, k = this._width, h = this._height;
          a.save();
          a.scale(b, b);
          a.fillStyle = this._controller.theme.tabToolbar(1);
          a.fillRect(0, 0, k, h);
          this._initialized && (0 == this._type ? (b = this._toPixels(this._windowStart), k = this._toPixels(this._windowEnd), a.fillStyle = this._controller.theme.bodyBackground(1), a.fillRect(b, 0, k - b, h), this._drawLabels(this._rangeStart, this._rangeEnd), this._drawDragHandle(b), this._drawDragHandle(k)) : this._drawLabels(this._windowStart, this._windowEnd));
          a.restore();
        };
        b.prototype._drawLabels = function(a, h) {
          var k = this._context, t = this._calculateTickInterval(a, h), q = Math.ceil(a / t) * t, n = 500 <= t, v = n ? 1E3 : 1, c = this._decimalPlaces(t / v), n = n ? "s" : "ms", f = this._toPixels(q), e = this._height / 2, d = this._controller.theme;
          k.lineWidth = 1;
          k.strokeStyle = d.contentTextDarkGrey(.5);
          k.fillStyle = d.contentTextDarkGrey(1);
          k.textAlign = "right";
          k.textBaseline = "middle";
          k.font = "11px sans-serif";
          for (d = this._width + b.TICK_MAX_WIDTH;f < d;) {
            var g = (q / v).toFixed(c) + " " + n;
            k.fillText(g, f - 7, e + 1);
            k.beginPath();
            k.moveTo(f, 0);
            k.lineTo(f, this._height + 1);
            k.closePath();
            k.stroke();
            q += t;
            f = this._toPixels(q);
          }
        };
        b.prototype._calculateTickInterval = function(a, h) {
          var k = (h - a) / (this._width / b.TICK_MAX_WIDTH), t = Math.pow(10, Math.floor(Math.log(k) / Math.LN10)), k = k / t;
          return 5 < k ? 10 * t : 2 < k ? 5 * t : 1 < k ? 2 * t : t;
        };
        b.prototype._drawDragHandle = function(a) {
          var b = this._context;
          b.lineWidth = 2;
          b.strokeStyle = this._controller.theme.bodyBackground(1);
          b.fillStyle = this._controller.theme.foregroundTextGrey(.7);
          this._drawRoundedRect(b, a - p.FlameChartBase.DRAGHANDLE_WIDTH / 2, 1, p.FlameChartBase.DRAGHANDLE_WIDTH, this._height - 2, 2, !0);
        };
        b.prototype._drawRoundedRect = function(a, b, k, h, q, n, v, c) {
          void 0 === v && (v = !0);
          void 0 === c && (c = !0);
          a.beginPath();
          a.moveTo(b + n, k);
          a.lineTo(b + h - n, k);
          a.quadraticCurveTo(b + h, k, b + h, k + n);
          a.lineTo(b + h, k + q - n);
          a.quadraticCurveTo(b + h, k + q, b + h - n, k + q);
          a.lineTo(b + n, k + q);
          a.quadraticCurveTo(b, k + q, b, k + q - n);
          a.lineTo(b, k + n);
          a.quadraticCurveTo(b, k, b + n, k);
          a.closePath();
          v && a.stroke();
          c && a.fill();
        };
        b.prototype._toPixelsRelative = function(a) {
          return a * this._width / (0 === this._type ? this._rangeEnd - this._rangeStart : this._windowEnd - this._windowStart);
        };
        b.prototype._toPixels = function(a) {
          return this._toPixelsRelative(a - (0 === this._type ? this._rangeStart : this._windowStart));
        };
        b.prototype._toTimeRelative = function(a) {
          return a * (0 === this._type ? this._rangeEnd - this._rangeStart : this._windowEnd - this._windowStart) / this._width;
        };
        b.prototype._toTime = function(a) {
          var b = 0 === this._type ? this._rangeStart : this._windowStart;
          return this._toTimeRelative(a) + b;
        };
        b.prototype._getDragTargetUnderCursor = function(a, b) {
          if (0 <= b && b < this._height) {
            if (0 === this._type) {
              var k = this._toPixels(this._windowStart), h = this._toPixels(this._windowEnd), q = 2 + p.FlameChartBase.DRAGHANDLE_WIDTH / 2, k = a >= k - q && a <= k + q, h = a >= h - q && a <= h + q;
              if (k && h) {
                return 4;
              }
              if (k) {
                return 2;
              }
              if (h) {
                return 3;
              }
            }
            if (!this._windowEqRange()) {
              return 1;
            }
          }
          return 0;
        };
        b.prototype.onMouseDown = function(a, b) {
          var k = this._getDragTargetUnderCursor(a, b);
          1 === k && this._mouseController.updateCursor(p.MouseCursor.GRABBING);
          this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:k};
        };
        b.prototype.onMouseMove = function(a, b) {
          var k = p.MouseCursor.DEFAULT, h = this._getDragTargetUnderCursor(a, b);
          0 !== h && (1 !== h ? k = p.MouseCursor.EW_RESIZE : 1 !== h || this._windowEqRange() || (k = p.MouseCursor.GRAB));
          this._mouseController.updateCursor(k);
        };
        b.prototype.onMouseOver = function(a, b) {
          this.onMouseMove(a, b);
        };
        b.prototype.onMouseOut = function() {
          this._mouseController.updateCursor(p.MouseCursor.DEFAULT);
        };
        b.prototype.onDrag = function(b, h, k, t, q, n) {
          b = this._dragInfo;
          if (4 === b.target) {
            if (0 !== q) {
              b.target = 0 > q ? 2 : 3;
            } else {
              return;
            }
          }
          h = this._windowStart;
          k = this._windowEnd;
          q = this._toTimeRelative(q);
          switch(b.target) {
            case 1:
              k = 0 === this._type ? 1 : -1;
              h = b.windowStartInitial + k * q;
              k = b.windowEndInitial + k * q;
              break;
            case 2:
              h = a(b.windowStartInitial + q, this._rangeStart, k - p.FlameChartBase.MIN_WINDOW_LEN);
              break;
            case 3:
              k = a(b.windowEndInitial + q, h + p.FlameChartBase.MIN_WINDOW_LEN, this._rangeEnd);
              break;
            default:
              return;
          }
          this._controller.setWindow(h, k);
        };
        b.prototype.onDragEnd = function(a, b, k, h, q, n) {
          this._dragInfo = null;
          this.onMouseMove(k, h);
        };
        b.prototype.onClick = function(a, b) {
          1 === this._dragInfo.target && this._mouseController.updateCursor(p.MouseCursor.GRAB);
        };
        b.prototype.onHoverStart = function(a, b) {
        };
        b.prototype.onHoverEnd = function() {
        };
        b.TICK_MAX_WIDTH = 75;
        return b;
      }(p.FlameChartBase);
      p.FlameChartHeader = w;
    })(p.Profiler || (p.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(h) {
      (function(a) {
        var h = function() {
          function a(b, h, k, t, q) {
            this.pageLoaded = b;
            this.threadsTotal = h;
            this.threadsLoaded = k;
            this.threadFilesTotal = t;
            this.threadFilesLoaded = q;
          }
          a.prototype.toString = function() {
            return "[" + ["pageLoaded", "threadsTotal", "threadsLoaded", "threadFilesTotal", "threadFilesLoaded"].map(function(a, b, k) {
              return a + ":" + this[a];
            }, this).join(", ") + "]";
          };
          return a;
        }();
        a.TraceLoggerProgressInfo = h;
        var m = function() {
          function b(a) {
            this._baseUrl = a;
            this._threads = [];
            this._progressInfo = null;
          }
          b.prototype.loadPage = function(a, b, k) {
            this._threads = [];
            this._pageLoadCallback = b;
            this._pageLoadProgressCallback = k;
            this._progressInfo = new h(!1, 0, 0, 0, 0);
            this._loadData([a], this._onLoadPage.bind(this));
          };
          Object.defineProperty(b.prototype, "buffers", {get:function() {
            for (var a = [], b = 0, k = this._threads.length;b < k;b++) {
              a.push(this._threads[b].buffer);
            }
            return a;
          }, enumerable:!0, configurable:!0});
          b.prototype._onProgress = function() {
            this._pageLoadProgressCallback && this._pageLoadProgressCallback.call(this, this._progressInfo);
          };
          b.prototype._onLoadPage = function(b) {
            if (b && 1 == b.length) {
              var h = this, k = 0;
              b = b[0];
              var t = b.length;
              this._threads = Array(t);
              this._progressInfo.pageLoaded = !0;
              this._progressInfo.threadsTotal = t;
              for (var q = 0;q < b.length;q++) {
                var n = b[q], v = [n.dict, n.tree];
                n.corrections && v.push(n.corrections);
                this._progressInfo.threadFilesTotal += v.length;
                this._loadData(v, function(b) {
                  return function(f) {
                    f && (f = new a.Thread(f), f.buffer.name = "Thread " + b, h._threads[b] = f);
                    k++;
                    h._progressInfo.threadsLoaded++;
                    h._onProgress();
                    k === t && h._pageLoadCallback.call(h, null, h._threads);
                  };
                }(q), function(a) {
                  h._progressInfo.threadFilesLoaded++;
                  h._onProgress();
                });
              }
              this._onProgress();
            } else {
              this._pageLoadCallback.call(this, "Error loading page.", null);
            }
          };
          b.prototype._loadData = function(a, b, k) {
            var h = 0, q = 0, n = a.length, v = [];
            v.length = n;
            for (var c = 0;c < n;c++) {
              var f = this._baseUrl + a[c], e = /\.tl$/i.test(f), d = new XMLHttpRequest, e = e ? "arraybuffer" : "json";
              d.open("GET", f, !0);
              d.responseType = e;
              d.onload = function(e, a) {
                return function(d) {
                  if ("json" === a) {
                    if (d = this.response, "string" === typeof d) {
                      try {
                        d = JSON.parse(d), v[e] = d;
                      } catch (f) {
                        q++;
                      }
                    } else {
                      v[e] = d;
                    }
                  } else {
                    v[e] = this.response;
                  }
                  ++h;
                  k && k(h);
                  h === n && b(v);
                };
              }(c, e);
              d.send();
            }
          };
          b.colors = "#0044ff #8c4b00 #cc5c33 #ff80c4 #ffbfd9 #ff8800 #8c5e00 #adcc33 #b380ff #bfd9ff #ffaa00 #8c0038 #bf8f30 #f780ff #cc99c9 #aaff00 #000073 #452699 #cc8166 #cca799 #000066 #992626 #cc6666 #ccc299 #ff6600 #526600 #992663 #cc6681 #99ccc2 #ff0066 #520066 #269973 #61994d #739699 #ffcc00 #006629 #269199 #94994d #738299 #ff0000 #590000 #234d8c #8c6246 #7d7399 #ee00ff #00474d #8c2385 #8c7546 #7c8c69 #eeff00 #4d003d #662e1a #62468c #8c6969 #6600ff #4c2900 #1a6657 #8c464f #8c6981 #44ff00 #401100 #1a2466 #663355 #567365 #d90074 #403300 #101d40 #59562d #66614d #cc0000 #002b40 #234010 #4c2626 #4d5e66 #00a3cc #400011 #231040 #4c3626 #464359 #0000bf #331b00 #80e6ff #311a33 #4d3939 #a69b00 #003329 #80ffb2 #331a20 #40303d #00a658 #40ffd9 #ffc480 #ffe1bf #332b26 #8c2500 #9933cc #80fff6 #ffbfbf #303326 #005e8c #33cc47 #b2ff80 #c8bfff #263332 #00708c #cc33ad #ffe680 #f2ffbf #262a33 #388c00 #335ccc #8091ff #bfffd9".split(" ");
          return b;
        }();
        a.TraceLogger = m;
      })(h.TraceLogger || (h.TraceLogger = {}));
    })(h.Profiler || (h.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(h) {
      (function(a) {
        var p;
        (function(a) {
          a[a.START_HI = 0] = "START_HI";
          a[a.START_LO = 4] = "START_LO";
          a[a.STOP_HI = 8] = "STOP_HI";
          a[a.STOP_LO = 12] = "STOP_LO";
          a[a.TEXTID = 16] = "TEXTID";
          a[a.NEXTID = 20] = "NEXTID";
        })(p || (p = {}));
        p = function() {
          function a(b) {
            2 <= b.length && (this._text = b[0], this._data = new DataView(b[1]), this._buffer = new h.TimelineBuffer, this._walkTree(0));
          }
          Object.defineProperty(a.prototype, "buffer", {get:function() {
            return this._buffer;
          }, enumerable:!0, configurable:!0});
          a.prototype._walkTree = function(b) {
            var h = this._data, u = this._buffer;
            do {
              var k = b * a.ITEM_SIZE, t = 4294967295 * h.getUint32(k + 0) + h.getUint32(k + 4), q = 4294967295 * h.getUint32(k + 8) + h.getUint32(k + 12), n = h.getUint32(k + 16), k = h.getUint32(k + 20), v = 1 === (n & 1), n = n >>> 1, n = this._text[n];
              u.enter(n, null, t / 1E6);
              v && this._walkTree(b + 1);
              u.leave(n, null, q / 1E6);
              b = k;
            } while (0 !== b);
          };
          a.ITEM_SIZE = 24;
          return a;
        }();
        a.Thread = p;
      })(h.TraceLogger || (h.TraceLogger = {}));
    })(h.Profiler || (h.Profiler = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    (function(p) {
      var a = h.NumberUtilities.clamp, w = function() {
        function a() {
          this.length = 0;
          this.lines = [];
          this.format = [];
          this.time = [];
          this.repeat = [];
          this.length = 0;
        }
        a.prototype.append = function(a, b) {
          var k = this.lines;
          0 < k.length && k[k.length - 1] === a ? this.repeat[k.length - 1]++ : (this.lines.push(a), this.repeat.push(1), this.format.push(b ? {backgroundFillStyle:b} : void 0), this.time.push(performance.now()), this.length++);
        };
        a.prototype.get = function(a) {
          return this.lines[a];
        };
        a.prototype.getFormat = function(a) {
          return this.format[a];
        };
        a.prototype.getTime = function(a) {
          return this.time[a];
        };
        a.prototype.getRepeat = function(a) {
          return this.repeat[a];
        };
        return a;
      }();
      p.Buffer = w;
      var m = function() {
        function b(a) {
          this.lineColor = "#2A2A2A";
          this.alternateLineColor = "#262626";
          this.textColor = "#FFFFFF";
          this.selectionColor = "#96C9F3";
          this.selectionTextColor = "#000000";
          this.ratio = 1;
          this.showLineNumbers = !0;
          this.showLineCounter = this.showLineTime = !1;
          this.canvas = a;
          this.canvas.focus();
          this.context = a.getContext("2d", {original:!0});
          this.context.fillStyle = "#FFFFFF";
          this.fontSize = 10;
          this.columnIndex = this.pageIndex = this.lineIndex = 0;
          this.selection = null;
          this.lineHeight = 15;
          this.hasFocus = !1;
          window.addEventListener("resize", this._resizeHandler.bind(this), !1);
          this._resizeHandler();
          this.textMarginBottom = this.textMarginLeft = 4;
          this.refreshFrequency = 0;
          this.buffer = new w;
          a.addEventListener("keydown", function(a) {
            var l = 0;
            switch(a.keyCode) {
              case x:
                this.printHelp();
                break;
              case g:
                this.showLineNumbers = !this.showLineNumbers;
                break;
              case y:
                this.showLineTime = !this.showLineTime;
                break;
              case n:
                l = -1;
                break;
              case v:
                l = 1;
                break;
              case b:
                l = -this.pageLineCount;
                break;
              case k:
                l = this.pageLineCount;
                break;
              case h:
                l = -this.lineIndex;
                break;
              case q:
                l = this.buffer.length - this.lineIndex;
                break;
              case c:
                this.columnIndex -= a.metaKey ? 10 : 1;
                0 > this.columnIndex && (this.columnIndex = 0);
                a.preventDefault();
                break;
              case f:
                this.columnIndex += a.metaKey ? 10 : 1;
                a.preventDefault();
                break;
              case e:
                if (a.metaKey || a.ctrlKey) {
                  this.selection = {start:0, end:this.buffer.length - 1}, a.preventDefault();
                }
                break;
              case d:
              ;
              case T:
                if (a.metaKey || a.ctrlKey) {
                  var m = "";
                  if (this.selection) {
                    for (var S = this.selection.start;S <= this.selection.end;S++) {
                      m += this.buffer.get(S) + "\n";
                    }
                  } else {
                    m = this.buffer.get(this.lineIndex);
                  }
                  a.keyCode === d ? alert(m) : window.open(URL.createObjectURL(new Blob([m], {type:"text/plain"})), "_blank");
                }
              ;
            }
            a.metaKey && (l *= this.pageLineCount);
            l && (this.scroll(l), a.preventDefault());
            l && a.shiftKey ? this.selection ? this.lineIndex > this.selection.start ? this.selection.end = this.lineIndex : this.selection.start = this.lineIndex : 0 < l ? this.selection = {start:this.lineIndex - l, end:this.lineIndex} : 0 > l && (this.selection = {start:this.lineIndex, end:this.lineIndex - l}) : l && (this.selection = null);
            this.paint();
          }.bind(this), !1);
          a.addEventListener("focus", function(e) {
            this.hasFocus = !0;
          }.bind(this), !1);
          a.addEventListener("blur", function(e) {
            this.hasFocus = !1;
          }.bind(this), !1);
          var b = 33, k = 34, h = 36, q = 35, n = 38, v = 40, c = 37, f = 39, e = 65, d = 67, g = 78, y = 84, x = 72, T = 83;
        }
        b.prototype.printHelp = function() {
          var a = this;
          "h - help;n - turn on/off line numbers;t - turn on/off line time;arrow_keys - navigation;cmd/ctrl+a - select all;cmd/ctrl+c - copy/alert selection;cmd/ctrl+s - open selection in new tab;shift+arrow_keys - selection".split(";").forEach(function(b) {
            return a.buffer.append(b, "#002000");
          });
        };
        b.prototype.resize = function() {
          this._resizeHandler();
        };
        b.prototype._resizeHandler = function() {
          var a = this.canvas.parentElement, b = a.clientWidth, a = a.clientHeight && a.clientHeight - 1, k = window.devicePixelRatio || 1;
          1 !== k ? (this.ratio = k / 1, this.canvas.width = b * this.ratio, this.canvas.height = a * this.ratio, this.canvas.style.width = b + "px", this.canvas.style.height = a + "px") : (this.ratio = 1, this.canvas.width = b, this.canvas.height = a);
          this.pageLineCount = Math.floor(this.canvas.height / this.lineHeight);
        };
        b.prototype.gotoLine = function(b) {
          this.lineIndex = a(b, 0, this.buffer.length - 1);
        };
        b.prototype.scrollIntoView = function() {
          this.lineIndex < this.pageIndex ? this.pageIndex = this.lineIndex : this.lineIndex >= this.pageIndex + this.pageLineCount && (this.pageIndex = this.lineIndex - this.pageLineCount + 1);
        };
        b.prototype.scroll = function(a) {
          this.gotoLine(this.lineIndex + a);
          this.scrollIntoView();
        };
        b.prototype.paint = function() {
          var a = this.pageLineCount;
          this.pageIndex + a > this.buffer.length && (a = this.buffer.length - this.pageIndex);
          var b = this.textMarginLeft, k = b + (this.showLineNumbers ? 5 * (String(this.buffer.length).length + 2) : 0), h = k + (this.showLineTime ? 40 : 10), q = h + 25;
          this.context.font = this.fontSize + 'px Consolas, "Liberation Mono", Courier, monospace';
          this.context.setTransform(this.ratio, 0, 0, this.ratio, 0, 0);
          for (var n = this.canvas.width, v = this.lineHeight, c = 0;c < a;c++) {
            var f = c * this.lineHeight, e = this.pageIndex + c, d = this.buffer.get(e), g = this.buffer.getFormat(e), y = this.buffer.getRepeat(e), x = 1 < e ? this.buffer.getTime(e) - this.buffer.getTime(0) : 0;
            this.context.fillStyle = e % 2 ? this.lineColor : this.alternateLineColor;
            g && g.backgroundFillStyle && (this.context.fillStyle = g.backgroundFillStyle);
            this.context.fillRect(0, f, n, v);
            this.context.fillStyle = this.selectionTextColor;
            this.context.fillStyle = this.textColor;
            this.selection && e >= this.selection.start && e <= this.selection.end && (this.context.fillStyle = this.selectionColor, this.context.fillRect(0, f, n, v), this.context.fillStyle = this.selectionTextColor);
            this.hasFocus && e === this.lineIndex && (this.context.fillStyle = this.selectionColor, this.context.fillRect(0, f, n, v), this.context.fillStyle = this.selectionTextColor);
            0 < this.columnIndex && (d = d.substring(this.columnIndex));
            f = (c + 1) * this.lineHeight - this.textMarginBottom;
            this.showLineNumbers && this.context.fillText(String(e), b, f);
            this.showLineTime && this.context.fillText(x.toFixed(1).padLeft(" ", 6), k, f);
            1 < y && this.context.fillText(String(y).padLeft(" ", 3), h, f);
            this.context.fillText(d, q, f);
          }
        };
        b.prototype.refreshEvery = function(a) {
          function b() {
            k.paint();
            k.refreshFrequency && setTimeout(b, k.refreshFrequency);
          }
          var k = this;
          this.refreshFrequency = a;
          k.refreshFrequency && setTimeout(b, k.refreshFrequency);
        };
        b.prototype.isScrolledToBottom = function() {
          return this.lineIndex === this.buffer.length - 1;
        };
        return b;
      }();
      p.Terminal = m;
    })(p.Terminal || (p.Terminal = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(h) {
      var a = function() {
        function a(h) {
          this._lastWeightedTime = this._lastTime = this._index = 0;
          this._gradient = "#FF0000 #FF1100 #FF2300 #FF3400 #FF4600 #FF5700 #FF6900 #FF7B00 #FF8C00 #FF9E00 #FFAF00 #FFC100 #FFD300 #FFE400 #FFF600 #F7FF00 #E5FF00 #D4FF00 #C2FF00 #B0FF00 #9FFF00 #8DFF00 #7CFF00 #6AFF00 #58FF00 #47FF00 #35FF00 #24FF00 #12FF00 #00FF00".split(" ");
          this._container = h;
          this._canvas = document.createElement("canvas");
          this._container.appendChild(this._canvas);
          this._context = this._canvas.getContext("2d");
          this._listenForContainerSizeChanges();
        }
        a.prototype._listenForContainerSizeChanges = function() {
          var a = this._containerWidth, b = this._containerHeight;
          this._onContainerSizeChanged();
          var h = this;
          setInterval(function() {
            if (a !== h._containerWidth || b !== h._containerHeight) {
              h._onContainerSizeChanged(), a = h._containerWidth, b = h._containerHeight;
            }
          }, 10);
        };
        a.prototype._onContainerSizeChanged = function() {
          var a = this._containerWidth, b = this._containerHeight, h = window.devicePixelRatio || 1;
          1 !== h ? (this._ratio = h / 1, this._canvas.width = a * this._ratio, this._canvas.height = b * this._ratio, this._canvas.style.width = a + "px", this._canvas.style.height = b + "px") : (this._ratio = 1, this._canvas.width = a, this._canvas.height = b);
        };
        Object.defineProperty(a.prototype, "_containerWidth", {get:function() {
          return this._container.clientWidth;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "_containerHeight", {get:function() {
          return this._container.clientHeight;
        }, enumerable:!0, configurable:!0});
        a.prototype.tickAndRender = function(a, b) {
          void 0 === a && (a = !1);
          void 0 === b && (b = 0);
          if (0 === this._lastTime) {
            this._lastTime = performance.now();
          } else {
            var h = 1 * (performance.now() - this._lastTime) + 0 * this._lastWeightedTime, u = this._context, k = 2 * this._ratio, t = 30 * this._ratio, q = performance;
            q.memory && (t += 30 * this._ratio);
            var n = (this._canvas.width - t) / (k + 1) | 0, v = this._index++;
            this._index > n && (this._index = 0);
            n = this._canvas.height;
            u.globalAlpha = 1;
            u.fillStyle = "black";
            u.fillRect(t + v * (k + 1), 0, 4 * k, this._canvas.height);
            var c = Math.min(1E3 / 60 / h, 1);
            u.fillStyle = "#00FF00";
            u.globalAlpha = a ? .5 : 1;
            c = n / 2 * c | 0;
            u.fillRect(t + v * (k + 1), n - c, k, c);
            b && (c = Math.min(1E3 / 240 / b, 1), u.fillStyle = "#FF6347", c = n / 2 * c | 0, u.fillRect(t + v * (k + 1), n / 2 - c, k, c));
            0 === v % 16 && (u.globalAlpha = 1, u.fillStyle = "black", u.fillRect(0, 0, t, this._canvas.height), u.fillStyle = "white", u.font = 8 * this._ratio + "px Arial", u.textBaseline = "middle", k = (1E3 / h).toFixed(0), b && (k += " " + b.toFixed(0)), q.memory && (k += " " + (q.memory.usedJSHeapSize / 1024 / 1024).toFixed(2)), u.fillText(k, 2 * this._ratio, this._containerHeight / 2 * this._ratio));
            this._lastTime = performance.now();
            this._lastWeightedTime = h;
          }
        };
        return a;
      }();
      h.FPS = a;
    })(h.Mini || (h.Mini = {}));
  })(h.Tools || (h.Tools = {}));
})(Shumway || (Shumway = {}));
console.timeEnd("Load Shared Dependencies");
console.time("Load GFX Dependencies");
(function(h) {
  (function(p) {
    function r(e, a, g) {
      return u && g ? "string" === typeof a ? (e = h.ColorUtilities.cssStyleToRGBA(a), h.ColorUtilities.rgbaToCSSStyle(g.transformRGBA(e))) : a instanceof CanvasGradient && a._template ? a._template.createCanvasGradient(e, g) : a : a;
    }
    var a = h.NumberUtilities.clamp;
    (function(e) {
      e[e.None = 0] = "None";
      e[e.Brief = 1] = "Brief";
      e[e.Verbose = 2] = "Verbose";
    })(p.TraceLevel || (p.TraceLevel = {}));
    var w = h.Metrics.Counter.instance;
    p.frameCounter = new h.Metrics.Counter(!0);
    p.traceLevel = 2;
    p.writer = null;
    p.frameCount = function(e) {
      w.count(e);
      p.frameCounter.count(e);
    };
    p.timelineBuffer = new h.Tools.Profiler.TimelineBuffer("GFX");
    p.enterTimeline = function(e, a) {
    };
    p.leaveTimeline = function(e, a) {
    };
    var m = null, b = null, l = null, u = !0;
    u && "undefined" !== typeof CanvasRenderingContext2D && (m = CanvasGradient.prototype.addColorStop, b = CanvasRenderingContext2D.prototype.createLinearGradient, l = CanvasRenderingContext2D.prototype.createRadialGradient, CanvasRenderingContext2D.prototype.createLinearGradient = function(e, a, g, d) {
      return (new t(e, a, g, d)).createCanvasGradient(this, null);
    }, CanvasRenderingContext2D.prototype.createRadialGradient = function(e, a, g, d, b, f) {
      return (new q(e, a, g, d, b, f)).createCanvasGradient(this, null);
    }, CanvasGradient.prototype.addColorStop = function(e, a) {
      m.call(this, e, a);
      this._template.addColorStop(e, a);
    });
    var k = function() {
      return function(e, a) {
        this.offset = e;
        this.color = a;
      };
    }(), t = function() {
      function e(a, g, d, b) {
        this.x0 = a;
        this.y0 = g;
        this.x1 = d;
        this.y1 = b;
        this.colorStops = [];
      }
      e.prototype.addColorStop = function(e, a) {
        this.colorStops.push(new k(e, a));
      };
      e.prototype.createCanvasGradient = function(e, a) {
        for (var g = b.call(e, this.x0, this.y0, this.x1, this.y1), d = this.colorStops, f = 0;f < d.length;f++) {
          var c = d[f], x = c.offset, c = c.color, c = a ? r(e, c, a) : c;
          m.call(g, x, c);
        }
        g._template = this;
        g._transform = this._transform;
        return g;
      };
      return e;
    }(), q = function() {
      function e(a, g, d, b, f, c) {
        this.x0 = a;
        this.y0 = g;
        this.r0 = d;
        this.x1 = b;
        this.y1 = f;
        this.r1 = c;
        this.colorStops = [];
      }
      e.prototype.addColorStop = function(e, a) {
        this.colorStops.push(new k(e, a));
      };
      e.prototype.createCanvasGradient = function(e, a) {
        for (var g = l.call(e, this.x0, this.y0, this.r0, this.x1, this.y1, this.r1), d = this.colorStops, b = 0;b < d.length;b++) {
          var f = d[b], c = f.offset, f = f.color, f = a ? r(e, f, a) : f;
          m.call(g, c, f);
        }
        g._template = this;
        g._transform = this._transform;
        return g;
      };
      return e;
    }(), n;
    (function(e) {
      e[e.ClosePath = 1] = "ClosePath";
      e[e.MoveTo = 2] = "MoveTo";
      e[e.LineTo = 3] = "LineTo";
      e[e.QuadraticCurveTo = 4] = "QuadraticCurveTo";
      e[e.BezierCurveTo = 5] = "BezierCurveTo";
      e[e.ArcTo = 6] = "ArcTo";
      e[e.Rect = 7] = "Rect";
      e[e.Arc = 8] = "Arc";
      e[e.Save = 9] = "Save";
      e[e.Restore = 10] = "Restore";
      e[e.Transform = 11] = "Transform";
    })(n || (n = {}));
    var v = function() {
      function e(a) {
        this._commands = new Uint8Array(e._arrayBufferPool.acquire(8), 0, 8);
        this._commandPosition = 0;
        this._data = new Float64Array(e._arrayBufferPool.acquire(8 * Float64Array.BYTES_PER_ELEMENT), 0, 8);
        this._dataPosition = 0;
        a instanceof e && this.addPath(a);
      }
      e._apply = function(e, a) {
        var g = e._commands, d = e._data, b = 0, f = 0;
        a.beginPath();
        for (var c = e._commandPosition;b < c;) {
          switch(g[b++]) {
            case 1:
              a.closePath();
              break;
            case 2:
              a.moveTo(d[f++], d[f++]);
              break;
            case 3:
              a.lineTo(d[f++], d[f++]);
              break;
            case 4:
              a.quadraticCurveTo(d[f++], d[f++], d[f++], d[f++]);
              break;
            case 5:
              a.bezierCurveTo(d[f++], d[f++], d[f++], d[f++], d[f++], d[f++]);
              break;
            case 6:
              a.arcTo(d[f++], d[f++], d[f++], d[f++], d[f++]);
              break;
            case 7:
              a.rect(d[f++], d[f++], d[f++], d[f++]);
              break;
            case 8:
              a.arc(d[f++], d[f++], d[f++], d[f++], d[f++], !!d[f++]);
              break;
            case 9:
              a.save();
              break;
            case 10:
              a.restore();
              break;
            case 11:
              a.transform(d[f++], d[f++], d[f++], d[f++], d[f++], d[f++]);
          }
        }
      };
      e.prototype._ensureCommandCapacity = function(a) {
        this._commands = e._arrayBufferPool.ensureUint8ArrayLength(this._commands, a);
      };
      e.prototype._ensureDataCapacity = function(a) {
        this._data = e._arrayBufferPool.ensureFloat64ArrayLength(this._data, a);
      };
      e.prototype._writeCommand = function(e) {
        this._commandPosition >= this._commands.length && this._ensureCommandCapacity(this._commandPosition + 1);
        this._commands[this._commandPosition++] = e;
      };
      e.prototype._writeData = function(e, a, g, d, b, f) {
        var c = arguments.length;
        this._dataPosition + c >= this._data.length && this._ensureDataCapacity(this._dataPosition + c);
        var x = this._data, k = this._dataPosition;
        x[k] = e;
        x[k + 1] = a;
        2 < c && (x[k + 2] = g, x[k + 3] = d, 4 < c && (x[k + 4] = b, 6 === c && (x[k + 5] = f)));
        this._dataPosition += c;
      };
      e.prototype.closePath = function() {
        this._writeCommand(1);
      };
      e.prototype.moveTo = function(e, a) {
        this._writeCommand(2);
        this._writeData(e, a);
      };
      e.prototype.lineTo = function(e, a) {
        this._writeCommand(3);
        this._writeData(e, a);
      };
      e.prototype.quadraticCurveTo = function(e, a, g, d) {
        this._writeCommand(4);
        this._writeData(e, a, g, d);
      };
      e.prototype.bezierCurveTo = function(e, a, g, d, b, f) {
        this._writeCommand(5);
        this._writeData(e, a, g, d, b, f);
      };
      e.prototype.arcTo = function(e, a, g, d, b) {
        this._writeCommand(6);
        this._writeData(e, a, g, d, b);
      };
      e.prototype.rect = function(e, a, g, d) {
        this._writeCommand(7);
        this._writeData(e, a, g, d);
      };
      e.prototype.arc = function(e, a, g, d, b, f) {
        this._writeCommand(8);
        this._writeData(e, a, g, d, b, +f);
      };
      e.prototype.addPath = function(e, a) {
        a && (this._writeCommand(9), this._writeCommand(11), this._writeData(a.a, a.b, a.c, a.d, a.e, a.f));
        var g = this._commandPosition + e._commandPosition;
        g >= this._commands.length && this._ensureCommandCapacity(g);
        for (var d = this._commands, b = e._commands, f = this._commandPosition, c = 0;f < g;f++) {
          d[f] = b[c++];
        }
        this._commandPosition = g;
        g = this._dataPosition + e._dataPosition;
        g >= this._data.length && this._ensureDataCapacity(g);
        d = this._data;
        b = e._data;
        f = this._dataPosition;
        for (c = 0;f < g;f++) {
          d[f] = b[c++];
        }
        this._dataPosition = g;
        a && this._writeCommand(10);
      };
      e._arrayBufferPool = new h.ArrayBufferPool;
      return e;
    }();
    p.Path = v;
    if ("undefined" !== typeof CanvasRenderingContext2D && ("undefined" === typeof Path2D || !Path2D.prototype.addPath)) {
      var c = CanvasRenderingContext2D.prototype.fill;
      CanvasRenderingContext2D.prototype.fill = function(e, a) {
        arguments.length && (e instanceof v ? v._apply(e, this) : a = e);
        a ? c.call(this, a) : c.call(this);
      };
      var f = CanvasRenderingContext2D.prototype.stroke;
      CanvasRenderingContext2D.prototype.stroke = function(e, a) {
        arguments.length && (e instanceof v ? v._apply(e, this) : a = e);
        a ? f.call(this, a) : f.call(this);
      };
      var e = CanvasRenderingContext2D.prototype.clip;
      CanvasRenderingContext2D.prototype.clip = function(a, g) {
        arguments.length && (a instanceof v ? v._apply(a, this) : g = a);
        g ? e.call(this, g) : e.call(this);
      };
      window.Path2D = v;
    }
    if ("undefined" !== typeof CanvasPattern && Path2D.prototype.addPath) {
      n = function(e) {
        this._transform = e;
        this._template && (this._template._transform = e);
      };
      CanvasPattern.prototype.setTransform || (CanvasPattern.prototype.setTransform = n);
      CanvasGradient.prototype.setTransform || (CanvasGradient.prototype.setTransform = n);
      var d = CanvasRenderingContext2D.prototype.fill, g = CanvasRenderingContext2D.prototype.stroke;
      CanvasRenderingContext2D.prototype.fill = function(e, a) {
        var g = !!this.fillStyle._transform;
        if ((this.fillStyle instanceof CanvasPattern || this.fillStyle instanceof CanvasGradient) && g && e instanceof Path2D) {
          var g = this.fillStyle._transform, b;
          try {
            b = g.inverse();
          } catch (f) {
            b = g = p.Geometry.Matrix.createIdentitySVGMatrix();
          }
          this.transform(g.a, g.b, g.c, g.d, g.e, g.f);
          g = new Path2D;
          g.addPath(e, b);
          d.call(this, g, a);
          this.transform(b.a, b.b, b.c, b.d, b.e, b.f);
        } else {
          0 === arguments.length ? d.call(this) : 1 === arguments.length ? d.call(this, e) : 2 === arguments.length && d.call(this, e, a);
        }
      };
      CanvasRenderingContext2D.prototype.stroke = function(e) {
        var a = !!this.strokeStyle._transform;
        if ((this.strokeStyle instanceof CanvasPattern || this.strokeStyle instanceof CanvasGradient) && a && e instanceof Path2D) {
          var d = this.strokeStyle._transform, a = d.inverse();
          this.transform(d.a, d.b, d.c, d.d, d.e, d.f);
          d = new Path2D;
          d.addPath(e, a);
          var b = this.lineWidth;
          this.lineWidth *= (a.a + a.d) / 2;
          g.call(this, d);
          this.transform(a.a, a.b, a.c, a.d, a.e, a.f);
          this.lineWidth = b;
        } else {
          0 === arguments.length ? g.call(this) : 1 === arguments.length && g.call(this, e);
        }
      };
    }
    "undefined" !== typeof CanvasRenderingContext2D && function() {
      function e() {
        return p.Geometry.Matrix.createSVGMatrixFromArray(this.mozCurrentTransform);
      }
      var g = "currentTransform" in CanvasRenderingContext2D.prototype;
      CanvasRenderingContext2D.prototype.flashStroke = function(e, d) {
        if (g) {
          var b = this.currentTransform, f = new Path2D;
          f.addPath(e, b);
          var c = this.lineWidth;
          this.setTransform(1, 0, 0, 1, 0, 0);
          switch(d) {
            case 1:
              var x = Math.sqrt((b.a + b.c) * (b.a + b.c) + (b.d + b.b) * (b.d + b.b)) * Math.SQRT1_2;
              this.lineWidth = a(c * x, 1, 1024);
              break;
            case 2:
              this.lineWidth = a(c * (b.d + b.b), 1, 1024);
              break;
            case 3:
              this.lineWidth = a(c * (b.a + b.c), 1, 1024);
          }
          this.stroke(f);
          this.setTransform(b.a, b.b, b.c, b.d, b.e, b.f);
          this.lineWidth = c;
        } else {
          this.stroke(e);
        }
      };
      if (!g) {
        if ("mozCurrentTransform" in CanvasRenderingContext2D.prototype) {
          Object.defineProperty(CanvasRenderingContext2D.prototype, "currentTransform", {get:e}), g = !0;
        } else {
          var d = CanvasRenderingContext2D.prototype.setTransform;
          CanvasRenderingContext2D.prototype.setTransform = function(e, a, g, b, f, c) {
            var x = this.currentTransform;
            x.a = e;
            x.b = a;
            x.c = g;
            x.d = b;
            x.e = f;
            x.f = c;
            d.call(this, e, a, g, b, f, c);
          };
          Object.defineProperty(CanvasRenderingContext2D.prototype, "currentTransform", {get:function() {
            return this._currentTransform || (this._currentTransform = p.Geometry.Matrix.createIdentitySVGMatrix());
          }});
        }
      }
    }();
    if ("undefined" !== typeof CanvasRenderingContext2D && void 0 === CanvasRenderingContext2D.prototype.globalColorMatrix) {
      var y = CanvasRenderingContext2D.prototype.fill, x = CanvasRenderingContext2D.prototype.stroke, T = CanvasRenderingContext2D.prototype.fillText, da = CanvasRenderingContext2D.prototype.strokeText;
      Object.defineProperty(CanvasRenderingContext2D.prototype, "globalColorMatrix", {get:function() {
        return this._globalColorMatrix ? this._globalColorMatrix.clone() : null;
      }, set:function(e) {
        e ? this._globalColorMatrix ? this._globalColorMatrix.set(e) : this._globalColorMatrix = e.clone() : this._globalColorMatrix = null;
      }, enumerable:!0, configurable:!0});
      CanvasRenderingContext2D.prototype.fill = function(e, a) {
        var g = null;
        this._globalColorMatrix && (g = this.fillStyle, this.fillStyle = r(this, this.fillStyle, this._globalColorMatrix));
        0 === arguments.length ? y.call(this) : 1 === arguments.length ? y.call(this, e) : 2 === arguments.length && y.call(this, e, a);
        g && (this.fillStyle = g);
      };
      CanvasRenderingContext2D.prototype.stroke = function(e, a) {
        var g = null;
        this._globalColorMatrix && (g = this.strokeStyle, this.strokeStyle = r(this, this.strokeStyle, this._globalColorMatrix));
        0 === arguments.length ? x.call(this) : 1 === arguments.length && x.call(this, e);
        g && (this.strokeStyle = g);
      };
      CanvasRenderingContext2D.prototype.fillText = function(e, a, g, d) {
        var b = null;
        this._globalColorMatrix && (b = this.fillStyle, this.fillStyle = r(this, this.fillStyle, this._globalColorMatrix));
        3 === arguments.length ? T.call(this, e, a, g) : 4 === arguments.length ? T.call(this, e, a, g, d) : h.Debug.unexpected();
        b && (this.fillStyle = b);
      };
      CanvasRenderingContext2D.prototype.strokeText = function(e, a, g, d) {
        var b = null;
        this._globalColorMatrix && (b = this.strokeStyle, this.strokeStyle = r(this, this.strokeStyle, this._globalColorMatrix));
        3 === arguments.length ? da.call(this, e, a, g) : 4 === arguments.length ? da.call(this, e, a, g, d) : h.Debug.unexpected();
        b && (this.strokeStyle = b);
      };
    }
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    var r = function() {
      return function(a, h, m, b) {
        this.dataURL = a;
        this.w = h;
        this.h = m;
        this.pixelRatio = b;
      };
    }();
    h.ScreenShot = r;
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  var p = function() {
    function h() {
      this._count = 0;
      this._head = this._tail = null;
    }
    Object.defineProperty(h.prototype, "count", {get:function() {
      return this._count;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(h.prototype, "head", {get:function() {
      return this._head;
    }, enumerable:!0, configurable:!0});
    h.prototype._unshift = function(a) {
      0 === this._count ? this._head = this._tail = a : (a.next = this._head, this._head = a.next.previous = a);
      this._count++;
    };
    h.prototype._remove = function(a) {
      a === this._head && a === this._tail ? this._head = this._tail = null : a === this._head ? (this._head = a.next, this._head.previous = null) : a == this._tail ? (this._tail = a.previous, this._tail.next = null) : (a.previous.next = a.next, a.next.previous = a.previous);
      a.previous = a.next = null;
      this._count--;
    };
    h.prototype.use = function(a) {
      this._head !== a && ((a.next || a.previous || this._tail === a) && this._remove(a), this._unshift(a));
    };
    h.prototype.pop = function() {
      if (!this._tail) {
        return null;
      }
      var a = this._tail;
      this._remove(a);
      return a;
    };
    h.prototype.visit = function(a, h) {
      void 0 === h && (h = !0);
      for (var m = h ? this._head : this._tail;m && a(m);) {
        m = h ? m.next : m.previous;
      }
    };
    return h;
  }();
  h.LRUList = p;
})(Shumway || (Shumway = {}));
var Shumway$$inline_24 = Shumway || (Shumway = {}), GFX$$inline_25 = Shumway$$inline_24.GFX || (Shumway$$inline_24.GFX = {}), Option$$inline_26 = Shumway$$inline_24.Options.Option, OptionSet$$inline_27 = Shumway$$inline_24.Options.OptionSet, shumwayOptions$$inline_28 = Shumway$$inline_24.Settings.shumwayOptions, rendererOptions$$inline_29 = shumwayOptions$$inline_28.register(new OptionSet$$inline_27("Renderer Options"));
GFX$$inline_25.imageUpdateOption = rendererOptions$$inline_29.register(new Option$$inline_26("", "imageUpdate", "boolean", !0, "Enable image updating."));
GFX$$inline_25.imageConvertOption = rendererOptions$$inline_29.register(new Option$$inline_26("", "imageConvert", "boolean", !0, "Enable image conversion."));
GFX$$inline_25.stageOptions = shumwayOptions$$inline_28.register(new OptionSet$$inline_27("Stage Renderer Options"));
GFX$$inline_25.forcePaint = GFX$$inline_25.stageOptions.register(new Option$$inline_26("", "forcePaint", "boolean", !1, "Force repainting."));
GFX$$inline_25.ignoreViewport = GFX$$inline_25.stageOptions.register(new Option$$inline_26("", "ignoreViewport", "boolean", !1, "Cull elements outside of the viewport."));
GFX$$inline_25.viewportLoupeDiameter = GFX$$inline_25.stageOptions.register(new Option$$inline_26("", "viewportLoupeDiameter", "number", 256, "Size of the viewport loupe.", {range:{min:1, max:1024, step:1}}));
GFX$$inline_25.disableClipping = GFX$$inline_25.stageOptions.register(new Option$$inline_26("", "disableClipping", "boolean", !1, "Disable clipping."));
GFX$$inline_25.debugClipping = GFX$$inline_25.stageOptions.register(new Option$$inline_26("", "debugClipping", "boolean", !1, "Disable clipping."));
GFX$$inline_25.hud = GFX$$inline_25.stageOptions.register(new Option$$inline_26("", "hud", "boolean", !1, "Enable HUD."));
var webGLOptions$$inline_30 = GFX$$inline_25.stageOptions.register(new OptionSet$$inline_27("WebGL Options"));
GFX$$inline_25.perspectiveCamera = webGLOptions$$inline_30.register(new Option$$inline_26("", "pc", "boolean", !1, "Use perspective camera."));
GFX$$inline_25.perspectiveCameraFOV = webGLOptions$$inline_30.register(new Option$$inline_26("", "pcFOV", "number", 60, "Perspective Camera FOV."));
GFX$$inline_25.perspectiveCameraDistance = webGLOptions$$inline_30.register(new Option$$inline_26("", "pcDistance", "number", 2, "Perspective Camera Distance."));
GFX$$inline_25.perspectiveCameraAngle = webGLOptions$$inline_30.register(new Option$$inline_26("", "pcAngle", "number", 0, "Perspective Camera Angle."));
GFX$$inline_25.perspectiveCameraAngleRotate = webGLOptions$$inline_30.register(new Option$$inline_26("", "pcRotate", "boolean", !1, "Rotate Use perspective camera."));
GFX$$inline_25.perspectiveCameraSpacing = webGLOptions$$inline_30.register(new Option$$inline_26("", "pcSpacing", "number", .01, "Element Spacing."));
GFX$$inline_25.perspectiveCameraSpacingInflate = webGLOptions$$inline_30.register(new Option$$inline_26("", "pcInflate", "boolean", !1, "Rotate Use perspective camera."));
GFX$$inline_25.drawTiles = webGLOptions$$inline_30.register(new Option$$inline_26("", "drawTiles", "boolean", !1, "Draw WebGL Tiles"));
GFX$$inline_25.drawSurfaces = webGLOptions$$inline_30.register(new Option$$inline_26("", "drawSurfaces", "boolean", !1, "Draw WebGL Surfaces."));
GFX$$inline_25.drawSurface = webGLOptions$$inline_30.register(new Option$$inline_26("", "drawSurface", "number", -1, "Draw WebGL Surface #"));
GFX$$inline_25.drawElements = webGLOptions$$inline_30.register(new Option$$inline_26("", "drawElements", "boolean", !0, "Actually call gl.drawElements. This is useful to test if the GPU is the bottleneck."));
GFX$$inline_25.disableSurfaceUploads = webGLOptions$$inline_30.register(new Option$$inline_26("", "disableSurfaceUploads", "boolean", !1, "Disable surface uploads."));
GFX$$inline_25.premultipliedAlpha = webGLOptions$$inline_30.register(new Option$$inline_26("", "premultipliedAlpha", "boolean", !1, "Set the premultipliedAlpha flag on getContext()."));
GFX$$inline_25.unpackPremultiplyAlpha = webGLOptions$$inline_30.register(new Option$$inline_26("", "unpackPremultiplyAlpha", "boolean", !0, "Use UNPACK_PREMULTIPLY_ALPHA_WEBGL in pixelStorei."));
var factorChoices$$inline_31 = {ZERO:0, ONE:1, SRC_COLOR:768, ONE_MINUS_SRC_COLOR:769, DST_COLOR:774, ONE_MINUS_DST_COLOR:775, SRC_ALPHA:770, ONE_MINUS_SRC_ALPHA:771, DST_ALPHA:772, ONE_MINUS_DST_ALPHA:773, SRC_ALPHA_SATURATE:776, CONSTANT_COLOR:32769, ONE_MINUS_CONSTANT_COLOR:32770, CONSTANT_ALPHA:32771, ONE_MINUS_CONSTANT_ALPHA:32772};
GFX$$inline_25.sourceBlendFactor = webGLOptions$$inline_30.register(new Option$$inline_26("", "sourceBlendFactor", "number", factorChoices$$inline_31.ONE, "", {choices:factorChoices$$inline_31}));
GFX$$inline_25.destinationBlendFactor = webGLOptions$$inline_30.register(new Option$$inline_26("", "destinationBlendFactor", "number", factorChoices$$inline_31.ONE_MINUS_SRC_ALPHA, "", {choices:factorChoices$$inline_31}));
var canvas2DOptions$$inline_32 = GFX$$inline_25.stageOptions.register(new OptionSet$$inline_27("Canvas2D Options"));
GFX$$inline_25.clipDirtyRegions = canvas2DOptions$$inline_32.register(new Option$$inline_26("", "clipDirtyRegions", "boolean", !1, "Clip dirty regions."));
GFX$$inline_25.clipCanvas = canvas2DOptions$$inline_32.register(new Option$$inline_26("", "clipCanvas", "boolean", !1, "Clip Regions."));
GFX$$inline_25.cull = canvas2DOptions$$inline_32.register(new Option$$inline_26("", "cull", "boolean", !1, "Enable culling."));
GFX$$inline_25.snapToDevicePixels = canvas2DOptions$$inline_32.register(new Option$$inline_26("", "snapToDevicePixels", "boolean", !1, ""));
GFX$$inline_25.imageSmoothing = canvas2DOptions$$inline_32.register(new Option$$inline_26("", "imageSmoothing", "boolean", !1, ""));
GFX$$inline_25.masking = canvas2DOptions$$inline_32.register(new Option$$inline_26("", "masking", "boolean", !0, "Composite Mask."));
GFX$$inline_25.blending = canvas2DOptions$$inline_32.register(new Option$$inline_26("", "blending", "boolean", !0, ""));
GFX$$inline_25.debugLayers = canvas2DOptions$$inline_32.register(new Option$$inline_26("", "debugLayers", "boolean", !1, ""));
GFX$$inline_25.filters = canvas2DOptions$$inline_32.register(new Option$$inline_26("", "filters", "boolean", !0, ""));
GFX$$inline_25.cacheShapes = canvas2DOptions$$inline_32.register(new Option$$inline_26("", "cacheShapes", "boolean", !0, ""));
GFX$$inline_25.cacheShapesMaxSize = canvas2DOptions$$inline_32.register(new Option$$inline_26("", "cacheShapesMaxSize", "number", 256, "", {range:{min:1, max:1024, step:1}}));
GFX$$inline_25.cacheShapesThreshold = canvas2DOptions$$inline_32.register(new Option$$inline_26("", "cacheShapesThreshold", "number", 256, "", {range:{min:1, max:1024, step:1}}));
(function(h) {
  (function(p) {
    (function(r) {
      function a(a, e, d, g) {
        var b = 1 - g;
        return a * b * b + 2 * e * b * g + d * g * g;
      }
      function w(a, e, d, g, b) {
        var c = b * b, k = 1 - b, h = k * k;
        return a * k * h + 3 * e * b * h + 3 * d * k * c + g * b * c;
      }
      var m = h.NumberUtilities.clamp, b = h.NumberUtilities.pow2, l = h.NumberUtilities.epsilonEquals;
      r.radianToDegrees = function(a) {
        return 180 * a / Math.PI;
      };
      r.degreesToRadian = function(a) {
        return a * Math.PI / 180;
      };
      r.quadraticBezier = a;
      r.quadraticBezierExtreme = function(b, e, d) {
        var g = (b - e) / (b - 2 * e + d);
        return 0 > g ? b : 1 < g ? d : a(b, e, d, g);
      };
      r.cubicBezier = w;
      r.cubicBezierExtremes = function(a, e, d, g) {
        var b = e - a, c;
        c = 2 * (d - e);
        var k = g - d;
        b + k === c && (k *= 1.0001);
        var h = 2 * b - c, n = c - 2 * b, n = Math.sqrt(n * n - 4 * b * (b - c + k));
        c = 2 * (b - c + k);
        b = (h + n) / c;
        h = (h - n) / c;
        n = [];
        0 <= b && 1 >= b && n.push(w(a, e, d, g, b));
        0 <= h && 1 >= h && n.push(w(a, e, d, g, h));
        return n;
      };
      var u = function() {
        function a(e, d) {
          this.x = e;
          this.y = d;
        }
        a.prototype.setElements = function(e, a) {
          this.x = e;
          this.y = a;
          return this;
        };
        a.prototype.set = function(e) {
          this.x = e.x;
          this.y = e.y;
          return this;
        };
        a.prototype.dot = function(e) {
          return this.x * e.x + this.y * e.y;
        };
        a.prototype.squaredLength = function() {
          return this.dot(this);
        };
        a.prototype.distanceTo = function(e) {
          return Math.sqrt(this.dot(e));
        };
        a.prototype.sub = function(e) {
          this.x -= e.x;
          this.y -= e.y;
          return this;
        };
        a.prototype.mul = function(e) {
          this.x *= e;
          this.y *= e;
          return this;
        };
        a.prototype.clone = function() {
          return new a(this.x, this.y);
        };
        a.prototype.toString = function(e) {
          void 0 === e && (e = 2);
          return "{x: " + this.x.toFixed(e) + ", y: " + this.y.toFixed(e) + "}";
        };
        a.prototype.inTriangle = function(e, a, g) {
          var b = e.y * g.x - e.x * g.y + (g.y - e.y) * this.x + (e.x - g.x) * this.y, f = e.x * a.y - e.y * a.x + (e.y - a.y) * this.x + (a.x - e.x) * this.y;
          if (0 > b != 0 > f) {
            return !1;
          }
          e = -a.y * g.x + e.y * (g.x - a.x) + e.x * (a.y - g.y) + a.x * g.y;
          0 > e && (b = -b, f = -f, e = -e);
          return 0 < b && 0 < f && b + f < e;
        };
        a.createEmpty = function() {
          return new a(0, 0);
        };
        a.createEmptyPoints = function(e) {
          for (var d = [], g = 0;g < e;g++) {
            d.push(new a(0, 0));
          }
          return d;
        };
        return a;
      }();
      r.Point = u;
      var k = function() {
        function a(e, d, g) {
          this.x = e;
          this.y = d;
          this.z = g;
        }
        a.prototype.setElements = function(a, d, g) {
          this.x = a;
          this.y = d;
          this.z = g;
          return this;
        };
        a.prototype.set = function(a) {
          this.x = a.x;
          this.y = a.y;
          this.z = a.z;
          return this;
        };
        a.prototype.dot = function(a) {
          return this.x * a.x + this.y * a.y + this.z * a.z;
        };
        a.prototype.cross = function(a) {
          var d = this.z * a.x - this.x * a.z, g = this.x * a.y - this.y * a.x;
          this.x = this.y * a.z - this.z * a.y;
          this.y = d;
          this.z = g;
          return this;
        };
        a.prototype.squaredLength = function() {
          return this.dot(this);
        };
        a.prototype.sub = function(a) {
          this.x -= a.x;
          this.y -= a.y;
          this.z -= a.z;
          return this;
        };
        a.prototype.mul = function(a) {
          this.x *= a;
          this.y *= a;
          this.z *= a;
          return this;
        };
        a.prototype.normalize = function() {
          var a = Math.sqrt(this.squaredLength());
          1E-5 < a ? this.mul(1 / a) : this.setElements(0, 0, 0);
          return this;
        };
        a.prototype.clone = function() {
          return new a(this.x, this.y, this.z);
        };
        a.prototype.toString = function(a) {
          void 0 === a && (a = 2);
          return "{x: " + this.x.toFixed(a) + ", y: " + this.y.toFixed(a) + ", z: " + this.z.toFixed(a) + "}";
        };
        a.createEmpty = function() {
          return new a(0, 0, 0);
        };
        a.createEmptyPoints = function(e) {
          for (var d = [], g = 0;g < e;g++) {
            d.push(new a(0, 0, 0));
          }
          return d;
        };
        return a;
      }();
      r.Point3D = k;
      var t = function() {
        function a(e, d, g, b) {
          this.setElements(e, d, g, b);
          a.allocationCount++;
        }
        a.prototype.setElements = function(a, d, g, b) {
          this.x = a;
          this.y = d;
          this.w = g;
          this.h = b;
        };
        a.prototype.set = function(a) {
          this.x = a.x;
          this.y = a.y;
          this.w = a.w;
          this.h = a.h;
        };
        a.prototype.contains = function(a) {
          var d = a.x + a.w, g = a.y + a.h, b = this.x + this.w, f = this.y + this.h;
          return a.x >= this.x && a.x < b && a.y >= this.y && a.y < f && d > this.x && d <= b && g > this.y && g <= f;
        };
        a.prototype.containsPoint = function(a) {
          return a.x >= this.x && a.x < this.x + this.w && a.y >= this.y && a.y < this.y + this.h;
        };
        a.prototype.isContained = function(a) {
          for (var d = 0;d < a.length;d++) {
            if (a[d].contains(this)) {
              return !0;
            }
          }
          return !1;
        };
        a.prototype.isSmallerThan = function(a) {
          return this.w < a.w && this.h < a.h;
        };
        a.prototype.isLargerThan = function(a) {
          return this.w > a.w && this.h > a.h;
        };
        a.prototype.union = function(a) {
          if (this.isEmpty()) {
            this.set(a);
          } else {
            if (!a.isEmpty()) {
              var d = this.x, g = this.y;
              this.x > a.x && (d = a.x);
              this.y > a.y && (g = a.y);
              var b = this.x + this.w;
              b < a.x + a.w && (b = a.x + a.w);
              var f = this.y + this.h;
              f < a.y + a.h && (f = a.y + a.h);
              this.x = d;
              this.y = g;
              this.w = b - d;
              this.h = f - g;
            }
          }
        };
        a.prototype.isEmpty = function() {
          return 0 >= this.w || 0 >= this.h;
        };
        a.prototype.setEmpty = function() {
          this.h = this.w = this.y = this.x = 0;
        };
        a.prototype.intersect = function(e) {
          var d = a.createEmpty();
          if (this.isEmpty() || e.isEmpty()) {
            return d.setEmpty(), d;
          }
          d.x = Math.max(this.x, e.x);
          d.y = Math.max(this.y, e.y);
          d.w = Math.min(this.x + this.w, e.x + e.w) - d.x;
          d.h = Math.min(this.y + this.h, e.y + e.h) - d.y;
          d.isEmpty() && d.setEmpty();
          this.set(d);
        };
        a.prototype.intersects = function(a) {
          if (this.isEmpty() || a.isEmpty()) {
            return !1;
          }
          var d = Math.max(this.x, a.x), g = Math.max(this.y, a.y), d = Math.min(this.x + this.w, a.x + a.w) - d;
          a = Math.min(this.y + this.h, a.y + a.h) - g;
          return !(0 >= d || 0 >= a);
        };
        a.prototype.intersectsTransformedAABB = function(e, d) {
          var g = a._temporary;
          g.set(e);
          d.transformRectangleAABB(g);
          return this.intersects(g);
        };
        a.prototype.intersectsTranslated = function(a, d, g) {
          if (this.isEmpty() || a.isEmpty()) {
            return !1;
          }
          var b = Math.max(this.x, a.x + d), f = Math.max(this.y, a.y + g);
          d = Math.min(this.x + this.w, a.x + d + a.w) - b;
          a = Math.min(this.y + this.h, a.y + g + a.h) - f;
          return !(0 >= d || 0 >= a);
        };
        a.prototype.area = function() {
          return this.w * this.h;
        };
        a.prototype.clone = function() {
          var e = a.allocate();
          e.set(this);
          return e;
        };
        a.allocate = function() {
          var e = a._dirtyStack;
          return e.length ? e.pop() : new a(12345, 67890, 12345, 67890);
        };
        a.prototype.free = function() {
          a._dirtyStack.push(this);
        };
        a.prototype.snap = function() {
          var a = Math.ceil(this.x + this.w), d = Math.ceil(this.y + this.h);
          this.x = Math.floor(this.x);
          this.y = Math.floor(this.y);
          this.w = a - this.x;
          this.h = d - this.y;
          return this;
        };
        a.prototype.scale = function(a, d) {
          this.x *= a;
          this.y *= d;
          this.w *= a;
          this.h *= d;
          return this;
        };
        a.prototype.offset = function(a, d) {
          this.x += a;
          this.y += d;
          return this;
        };
        a.prototype.resize = function(a, d) {
          this.w += a;
          this.h += d;
          return this;
        };
        a.prototype.expand = function(a, d) {
          this.offset(-a, -d).resize(2 * a, 2 * d);
          return this;
        };
        a.prototype.getCenter = function() {
          return new u(this.x + this.w / 2, this.y + this.h / 2);
        };
        a.prototype.getAbsoluteBounds = function() {
          return new a(0, 0, this.w, this.h);
        };
        a.prototype.toString = function(a) {
          void 0 === a && (a = 2);
          return "{" + this.x.toFixed(a) + ", " + this.y.toFixed(a) + ", " + this.w.toFixed(a) + ", " + this.h.toFixed(a) + "}";
        };
        a.createEmpty = function() {
          var e = a.allocate();
          e.setEmpty();
          return e;
        };
        a.createSquare = function(e) {
          return new a(-e / 2, -e / 2, e, e);
        };
        a.createMaxI16 = function() {
          return new a(-32768, -32768, 65535, 65535);
        };
        a.prototype.setMaxI16 = function() {
          this.setElements(-32768, -32768, 65535, 65535);
        };
        a.prototype.getCorners = function(a) {
          a[0].x = this.x;
          a[0].y = this.y;
          a[1].x = this.x + this.w;
          a[1].y = this.y;
          a[2].x = this.x + this.w;
          a[2].y = this.y + this.h;
          a[3].x = this.x;
          a[3].y = this.y + this.h;
        };
        a.allocationCount = 0;
        a._temporary = new a(0, 0, 0, 0);
        a._dirtyStack = [];
        return a;
      }();
      r.Rectangle = t;
      var q = function() {
        function a(e) {
          this.corners = e.map(function(a) {
            return a.clone();
          });
          this.axes = [e[1].clone().sub(e[0]), e[3].clone().sub(e[0])];
          this.origins = [];
          for (var d = 0;2 > d;d++) {
            this.axes[d].mul(1 / this.axes[d].squaredLength()), this.origins.push(e[0].dot(this.axes[d]));
          }
        }
        a.prototype.getBounds = function() {
          return a.getBounds(this.corners);
        };
        a.getBounds = function(a) {
          for (var d = new u(Number.MAX_VALUE, Number.MAX_VALUE), g = new u(Number.MIN_VALUE, Number.MIN_VALUE), b = 0;4 > b;b++) {
            var f = a[b].x, c = a[b].y;
            d.x = Math.min(d.x, f);
            d.y = Math.min(d.y, c);
            g.x = Math.max(g.x, f);
            g.y = Math.max(g.y, c);
          }
          return new t(d.x, d.y, g.x - d.x, g.y - d.y);
        };
        a.prototype.intersects = function(a) {
          return this.intersectsOneWay(a) && a.intersectsOneWay(this);
        };
        a.prototype.intersectsOneWay = function(a) {
          for (var d = 0;2 > d;d++) {
            for (var g = 0;4 > g;g++) {
              var b = a.corners[g].dot(this.axes[d]), f, c;
              0 === g ? c = f = b : b < f ? f = b : b > c && (c = b);
            }
            if (f > 1 + this.origins[d] || c < this.origins[d]) {
              return !1;
            }
          }
          return !0;
        };
        return a;
      }();
      r.OBB = q;
      (function(a) {
        a[a.Unknown = 0] = "Unknown";
        a[a.Identity = 1] = "Identity";
        a[a.Translation = 2] = "Translation";
      })(r.MatrixType || (r.MatrixType = {}));
      var n = function() {
        function a(e, d, g, b, c, k) {
          this._data = new Float64Array(6);
          this._type = 0;
          this.setElements(e, d, g, b, c, k);
          a.allocationCount++;
        }
        Object.defineProperty(a.prototype, "a", {get:function() {
          return this._data[0];
        }, set:function(a) {
          this._data[0] = a;
          this._type = 0;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "b", {get:function() {
          return this._data[1];
        }, set:function(a) {
          this._data[1] = a;
          this._type = 0;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "c", {get:function() {
          return this._data[2];
        }, set:function(a) {
          this._data[2] = a;
          this._type = 0;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "d", {get:function() {
          return this._data[3];
        }, set:function(a) {
          this._data[3] = a;
          this._type = 0;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "tx", {get:function() {
          return this._data[4];
        }, set:function(a) {
          this._data[4] = a;
          1 === this._type && (this._type = 2);
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(a.prototype, "ty", {get:function() {
          return this._data[5];
        }, set:function(a) {
          this._data[5] = a;
          1 === this._type && (this._type = 2);
        }, enumerable:!0, configurable:!0});
        a._createSVGMatrix = function() {
          a._svg || (a._svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"));
          return a._svg.createSVGMatrix();
        };
        a.prototype.setElements = function(a, d, g, b, c, f) {
          var k = this._data;
          k[0] = a;
          k[1] = d;
          k[2] = g;
          k[3] = b;
          k[4] = c;
          k[5] = f;
          this._type = 0;
        };
        a.prototype.set = function(a) {
          var d = this._data, g = a._data;
          d[0] = g[0];
          d[1] = g[1];
          d[2] = g[2];
          d[3] = g[3];
          d[4] = g[4];
          d[5] = g[5];
          this._type = a._type;
        };
        a.prototype.emptyArea = function(a) {
          a = this._data;
          return 0 === a[0] || 0 === a[3] ? !0 : !1;
        };
        a.prototype.infiniteArea = function(a) {
          a = this._data;
          return Infinity === Math.abs(a[0]) || Infinity === Math.abs(a[3]) ? !0 : !1;
        };
        a.prototype.isEqual = function(a) {
          if (1 === this._type && 1 === a._type) {
            return !0;
          }
          var d = this._data;
          a = a._data;
          return d[0] === a[0] && d[1] === a[1] && d[2] === a[2] && d[3] === a[3] && d[4] === a[4] && d[5] === a[5];
        };
        a.prototype.clone = function() {
          var e = a.allocate();
          e.set(this);
          return e;
        };
        a.allocate = function() {
          var e = a._dirtyStack;
          return e.length ? e.pop() : new a(12345, 12345, 12345, 12345, 12345, 12345);
        };
        a.prototype.free = function() {
          a._dirtyStack.push(this);
        };
        a.prototype.transform = function(a, d, g, b, c, f) {
          var k = this._data, h = k[0], n = k[1], q = k[2], t = k[3], l = k[4], v = k[5];
          k[0] = h * a + q * d;
          k[1] = n * a + t * d;
          k[2] = h * g + q * b;
          k[3] = n * g + t * b;
          k[4] = h * c + q * f + l;
          k[5] = n * c + t * f + v;
          this._type = 0;
          return this;
        };
        a.prototype.transformRectangle = function(a, d) {
          var g = this._data, b = g[0], c = g[1], f = g[2], k = g[3], h = g[4], g = g[5], n = a.x, q = a.y, t = a.w, l = a.h;
          d[0].x = b * n + f * q + h;
          d[0].y = c * n + k * q + g;
          d[1].x = b * (n + t) + f * q + h;
          d[1].y = c * (n + t) + k * q + g;
          d[2].x = b * (n + t) + f * (q + l) + h;
          d[2].y = c * (n + t) + k * (q + l) + g;
          d[3].x = b * n + f * (q + l) + h;
          d[3].y = c * n + k * (q + l) + g;
        };
        a.prototype.isTranslationOnly = function() {
          if (2 === this._type) {
            return !0;
          }
          var a = this._data;
          return 1 === a[0] && 0 === a[1] && 0 === a[2] && 1 === a[3] || l(a[0], 1) && l(a[1], 0) && l(a[2], 0) && l(a[3], 1) ? (this._type = 2, !0) : !1;
        };
        a.prototype.transformRectangleAABB = function(a) {
          var d = this._data;
          if (1 !== this._type) {
            if (2 === this._type) {
              a.x += d[4], a.y += d[5];
            } else {
              var g = d[0], b = d[1], c = d[2], f = d[3], k = d[4], h = d[5], n = a.x, q = a.y, t = a.w, l = a.h, d = g * n + c * q + k, v = b * n + f * q + h, u = g * (n + t) + c * q + k, m = b * (n + t) + f * q + h, p = g * (n + t) + c * (q + l) + k, t = b * (n + t) + f * (q + l) + h, g = g * n + c * (q + l) + k, b = b * n + f * (q + l) + h, f = 0;
              d > u && (f = d, d = u, u = f);
              p > g && (f = p, p = g, g = f);
              a.x = d < p ? d : p;
              a.w = (u > g ? u : g) - a.x;
              v > m && (f = v, v = m, m = f);
              t > b && (f = t, t = b, b = f);
              a.y = v < t ? v : t;
              a.h = (m > b ? m : b) - a.y;
            }
          }
        };
        a.prototype.scale = function(a, d) {
          var g = this._data;
          g[0] *= a;
          g[1] *= d;
          g[2] *= a;
          g[3] *= d;
          g[4] *= a;
          g[5] *= d;
          this._type = 0;
          return this;
        };
        a.prototype.scaleClone = function(a, d) {
          return 1 === a && 1 === d ? this : this.clone().scale(a, d);
        };
        a.prototype.rotate = function(a) {
          var d = this._data, g = d[0], b = d[1], c = d[2], f = d[3], k = d[4], h = d[5], n = Math.cos(a);
          a = Math.sin(a);
          d[0] = n * g - a * b;
          d[1] = a * g + n * b;
          d[2] = n * c - a * f;
          d[3] = a * c + n * f;
          d[4] = n * k - a * h;
          d[5] = a * k + n * h;
          this._type = 0;
          return this;
        };
        a.prototype.concat = function(a) {
          if (1 === a._type) {
            return this;
          }
          var d = this._data;
          a = a._data;
          var g = d[0] * a[0], b = 0, c = 0, f = d[3] * a[3], k = d[4] * a[0] + a[4], h = d[5] * a[3] + a[5];
          if (0 !== d[1] || 0 !== d[2] || 0 !== a[1] || 0 !== a[2]) {
            g += d[1] * a[2], f += d[2] * a[1], b += d[0] * a[1] + d[1] * a[3], c += d[2] * a[0] + d[3] * a[2], k += d[5] * a[2], h += d[4] * a[1];
          }
          d[0] = g;
          d[1] = b;
          d[2] = c;
          d[3] = f;
          d[4] = k;
          d[5] = h;
          this._type = 0;
          return this;
        };
        a.prototype.concatClone = function(a) {
          return this.clone().concat(a);
        };
        a.prototype.preMultiply = function(a) {
          var d = this._data, g = a._data;
          if (2 === a._type && this._type & 3) {
            d[4] += g[4], d[5] += g[5], this._type = 2;
          } else {
            if (1 !== a._type) {
              a = g[0] * d[0];
              var b = 0, c = 0, f = g[3] * d[3], k = g[4] * d[0] + d[4], h = g[5] * d[3] + d[5];
              if (0 !== g[1] || 0 !== g[2] || 0 !== d[1] || 0 !== d[2]) {
                a += g[1] * d[2], f += g[2] * d[1], b += g[0] * d[1] + g[1] * d[3], c += g[2] * d[0] + g[3] * d[2], k += g[5] * d[2], h += g[4] * d[1];
              }
              d[0] = a;
              d[1] = b;
              d[2] = c;
              d[3] = f;
              d[4] = k;
              d[5] = h;
              this._type = 0;
            }
          }
        };
        a.prototype.translate = function(a, d) {
          var g = this._data;
          g[4] += a;
          g[5] += d;
          1 === this._type && (this._type = 2);
          return this;
        };
        a.prototype.setIdentity = function() {
          var a = this._data;
          a[0] = 1;
          a[1] = 0;
          a[2] = 0;
          a[3] = 1;
          a[4] = 0;
          a[5] = 0;
          this._type = 1;
        };
        a.prototype.isIdentity = function() {
          if (1 === this._type) {
            return !0;
          }
          var a = this._data;
          return 1 === a[0] && 0 === a[1] && 0 === a[2] && 1 === a[3] && 0 === a[4] && 0 === a[5];
        };
        a.prototype.transformPoint = function(a) {
          if (1 !== this._type) {
            var d = this._data, g = a.x, b = a.y;
            a.x = d[0] * g + d[2] * b + d[4];
            a.y = d[1] * g + d[3] * b + d[5];
          }
        };
        a.prototype.transformPoints = function(a) {
          if (1 !== this._type) {
            for (var d = 0;d < a.length;d++) {
              this.transformPoint(a[d]);
            }
          }
        };
        a.prototype.deltaTransformPoint = function(a) {
          if (1 !== this._type) {
            var d = this._data, g = a.x, b = a.y;
            a.x = d[0] * g + d[2] * b;
            a.y = d[1] * g + d[3] * b;
          }
        };
        a.prototype.inverse = function(a) {
          var d = this._data, g = a._data;
          if (1 === this._type) {
            a.setIdentity();
          } else {
            if (2 === this._type) {
              g[0] = 1, g[1] = 0, g[2] = 0, g[3] = 1, g[4] = -d[4], g[5] = -d[5], a._type = 2;
            } else {
              var b = d[1], c = d[2], f = d[4], k = d[5];
              if (0 === b && 0 === c) {
                var h = g[0] = 1 / d[0], d = g[3] = 1 / d[3];
                g[1] = 0;
                g[2] = 0;
                g[4] = -h * f;
                g[5] = -d * k;
              } else {
                var h = d[0], d = d[3], n = h * d - b * c;
                if (0 === n) {
                  a.setIdentity();
                  return;
                }
                n = 1 / n;
                g[0] = d * n;
                b = g[1] = -b * n;
                c = g[2] = -c * n;
                d = g[3] = h * n;
                g[4] = -(g[0] * f + c * k);
                g[5] = -(b * f + d * k);
              }
              a._type = 0;
            }
          }
        };
        a.prototype.getTranslateX = function() {
          return this._data[4];
        };
        a.prototype.getTranslateY = function() {
          return this._data[4];
        };
        a.prototype.getScaleX = function() {
          var a = this._data;
          if (1 === a[0] && 0 === a[1]) {
            return 1;
          }
          var d = Math.sqrt(a[0] * a[0] + a[1] * a[1]);
          return 0 < a[0] ? d : -d;
        };
        a.prototype.getScaleY = function() {
          var a = this._data;
          if (0 === a[2] && 1 === a[3]) {
            return 1;
          }
          var d = Math.sqrt(a[2] * a[2] + a[3] * a[3]);
          return 0 < a[3] ? d : -d;
        };
        a.prototype.getScale = function() {
          return (this.getScaleX() + this.getScaleY()) / 2;
        };
        a.prototype.getAbsoluteScaleX = function() {
          return Math.abs(this.getScaleX());
        };
        a.prototype.getAbsoluteScaleY = function() {
          return Math.abs(this.getScaleY());
        };
        a.prototype.getRotation = function() {
          var a = this._data;
          return 180 * Math.atan(a[1] / a[0]) / Math.PI;
        };
        a.prototype.isScaleOrRotation = function() {
          var a = this._data;
          return .01 > Math.abs(a[0] * a[2] + a[1] * a[3]);
        };
        a.prototype.toString = function(a) {
          void 0 === a && (a = 2);
          var d = this._data;
          return "{" + d[0].toFixed(a) + ", " + d[1].toFixed(a) + ", " + d[2].toFixed(a) + ", " + d[3].toFixed(a) + ", " + d[4].toFixed(a) + ", " + d[5].toFixed(a) + "}";
        };
        a.prototype.toWebGLMatrix = function() {
          var a = this._data;
          return new Float32Array([a[0], a[1], 0, a[2], a[3], 0, a[4], a[5], 1]);
        };
        a.prototype.toCSSTransform = function() {
          var a = this._data;
          return "matrix(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ")";
        };
        a.createIdentity = function() {
          var e = a.allocate();
          e.setIdentity();
          return e;
        };
        a.prototype.toSVGMatrix = function() {
          var e = this._data, d = a._createSVGMatrix();
          try {
            d.a = e[0], d.b = e[1], d.c = e[2], d.d = e[3], d.e = e[4], d.f = e[5];
          } catch (g) {
            return a._createSVGMatrix();
          }
          return d;
        };
        a.prototype.snap = function() {
          var a = this._data;
          return this.isTranslationOnly() ? (a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 1, a[4] = Math.round(a[4]), a[5] = Math.round(a[5]), this._type = 2, !0) : !1;
        };
        a.createIdentitySVGMatrix = function() {
          return a._createSVGMatrix();
        };
        a.createSVGMatrixFromArray = function(e) {
          var d = a._createSVGMatrix();
          d.a = e[0];
          d.b = e[1];
          d.c = e[2];
          d.d = e[3];
          d.e = e[4];
          d.f = e[5];
          return d;
        };
        a.allocationCount = 0;
        a._dirtyStack = [];
        a.multiply = function(a, d) {
          var g = d._data;
          a.transform(g[0], g[1], g[2], g[3], g[4], g[5]);
        };
        return a;
      }();
      r.Matrix = n;
      n = function() {
        function a(e) {
          this._m = new Float32Array(e);
        }
        a.prototype.asWebGLMatrix = function() {
          return this._m;
        };
        a.createCameraLookAt = function(e, d, g) {
          d = e.clone().sub(d).normalize();
          g = g.clone().cross(d).normalize();
          var b = d.clone().cross(g);
          return new a([g.x, g.y, g.z, 0, b.x, b.y, b.z, 0, d.x, d.y, d.z, 0, e.x, e.y, e.z, 1]);
        };
        a.createLookAt = function(e, d, g) {
          d = e.clone().sub(d).normalize();
          g = g.clone().cross(d).normalize();
          var b = d.clone().cross(g);
          return new a([g.x, b.x, d.x, 0, b.x, b.y, d.y, 0, d.x, b.z, d.z, 0, -g.dot(e), -b.dot(e), -d.dot(e), 1]);
        };
        a.prototype.mul = function(a) {
          a = [a.x, a.y, a.z, 0];
          for (var d = this._m, g = [], b = 0;4 > b;b++) {
            g[b] = 0;
            for (var c = 4 * b, f = 0;4 > f;f++) {
              g[b] += d[c + f] * a[f];
            }
          }
          return new k(g[0], g[1], g[2]);
        };
        a.create2DProjection = function(e, d, g) {
          return new a([2 / e, 0, 0, 0, 0, -2 / d, 0, 0, 0, 0, 2 / g, 0, -1, 1, 0, 1]);
        };
        a.createPerspective = function(e, d, g, b) {
          e = Math.tan(.5 * Math.PI - .5 * e);
          var c = 1 / (g - b);
          return new a([e / d, 0, 0, 0, 0, e, 0, 0, 0, 0, (g + b) * c, -1, 0, 0, g * b * c * 2, 0]);
        };
        a.createIdentity = function() {
          return a.createTranslation(0, 0, 0);
        };
        a.createTranslation = function(e, d, g) {
          return new a([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e, d, g, 1]);
        };
        a.createXRotation = function(e) {
          var d = Math.cos(e);
          e = Math.sin(e);
          return new a([1, 0, 0, 0, 0, d, e, 0, 0, -e, d, 0, 0, 0, 0, 1]);
        };
        a.createYRotation = function(e) {
          var d = Math.cos(e);
          e = Math.sin(e);
          return new a([d, 0, -e, 0, 0, 1, 0, 0, e, 0, d, 0, 0, 0, 0, 1]);
        };
        a.createZRotation = function(e) {
          var d = Math.cos(e);
          e = Math.sin(e);
          return new a([d, e, 0, 0, -e, d, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        };
        a.createScale = function(e, d, g) {
          return new a([e, 0, 0, 0, 0, d, 0, 0, 0, 0, g, 0, 0, 0, 0, 1]);
        };
        a.createMultiply = function(e, d) {
          var g = e._m, b = d._m, c = g[0], k = g[1], h = g[2], n = g[3], q = g[4], t = g[5], l = g[6], v = g[7], u = g[8], m = g[9], p = g[10], r = g[11], w = g[12], z = g[13], B = g[14], g = g[15], E = b[0], A = b[1], C = b[2], F = b[3], G = b[4], I = b[5], H = b[6], K = b[7], L = b[8], M = b[9], N = b[10], O = b[11], P = b[12], Q = b[13], R = b[14], b = b[15];
          return new a([c * E + k * G + h * L + n * P, c * A + k * I + h * M + n * Q, c * C + k * H + h * N + n * R, c * F + k * K + h * O + n * b, q * E + t * G + l * L + v * P, q * A + t * I + l * M + v * Q, q * C + t * H + l * N + v * R, q * F + t * K + l * O + v * b, u * E + m * G + p * L + r * P, u * A + m * I + p * M + r * Q, u * C + m * H + p * N + r * R, u * F + m * K + p * O + r * b, w * E + z * G + B * L + g * P, w * A + z * I + B * M + g * Q, w * C + z * H + B * N + g * R, w * F + z * 
          K + B * O + g * b]);
        };
        a.createInverse = function(e) {
          var d = e._m;
          e = d[0];
          var g = d[1], b = d[2], c = d[3], k = d[4], h = d[5], n = d[6], q = d[7], t = d[8], l = d[9], v = d[10], u = d[11], m = d[12], p = d[13], r = d[14], d = d[15], w = v * d, z = r * u, B = n * d, E = r * q, A = n * u, C = v * q, F = b * d, G = r * c, I = b * u, H = v * c, K = b * q, L = n * c, M = t * p, N = m * l, O = k * p, P = m * h, Q = k * l, R = t * h, X = e * p, Y = m * g, Z = e * l, aa = t * g, ba = e * h, ca = k * g, ea = w * h + E * l + A * p - (z * h + B * l + C * p), fa = z * g + 
          F * l + H * p - (w * g + G * l + I * p), p = B * g + G * h + K * p - (E * g + F * h + L * p), g = C * g + I * h + L * l - (A * g + H * h + K * l), h = 1 / (e * ea + k * fa + t * p + m * g);
          return new a([h * ea, h * fa, h * p, h * g, h * (z * k + B * t + C * m - (w * k + E * t + A * m)), h * (w * e + G * t + I * m - (z * e + F * t + H * m)), h * (E * e + F * k + L * m - (B * e + G * k + K * m)), h * (A * e + H * k + K * t - (C * e + I * k + L * t)), h * (M * q + P * u + Q * d - (N * q + O * u + R * d)), h * (N * c + X * u + aa * d - (M * c + Y * u + Z * d)), h * (O * c + Y * q + ba * d - (P * c + X * q + ca * d)), h * (R * c + Z * q + ca * u - (Q * c + aa * q + ba * u)), h * 
          (O * v + R * r + N * n - (Q * r + M * n + P * v)), h * (Z * r + M * b + Y * v - (X * v + aa * r + N * b)), h * (X * n + ca * r + P * b - (ba * r + O * b + Y * n)), h * (ba * v + Q * b + aa * n - (Z * n + ca * v + R * b))]);
        };
        return a;
      }();
      r.Matrix3D = n;
      n = function() {
        function a(e, d, g) {
          void 0 === g && (g = 7);
          var b = this.size = 1 << g;
          this.sizeInBits = g;
          this.w = e;
          this.h = d;
          this.c = Math.ceil(e / b);
          this.r = Math.ceil(d / b);
          this.grid = [];
          for (e = 0;e < this.r;e++) {
            for (this.grid.push([]), d = 0;d < this.c;d++) {
              this.grid[e][d] = new a.Cell(new t(d * b, e * b, b, b));
            }
          }
        }
        a.prototype.clear = function() {
          for (var a = 0;a < this.r;a++) {
            for (var d = 0;d < this.c;d++) {
              this.grid[a][d].clear();
            }
          }
        };
        a.prototype.getBounds = function() {
          return new t(0, 0, this.w, this.h);
        };
        a.prototype.addDirtyRectangle = function(a) {
          var d = a.x >> this.sizeInBits, g = a.y >> this.sizeInBits;
          if (!(d >= this.c || g >= this.r)) {
            0 > d && (d = 0);
            0 > g && (g = 0);
            var b = this.grid[g][d];
            a = a.clone();
            a.snap();
            if (b.region.contains(a)) {
              b.bounds.isEmpty() ? b.bounds.set(a) : b.bounds.contains(a) || b.bounds.union(a);
            } else {
              for (var c = Math.min(this.c, Math.ceil((a.x + a.w) / this.size)) - d, f = Math.min(this.r, Math.ceil((a.y + a.h) / this.size)) - g, k = 0;k < c;k++) {
                for (var h = 0;h < f;h++) {
                  b = this.grid[g + h][d + k], b = b.region.clone(), b.intersect(a), b.isEmpty() || this.addDirtyRectangle(b);
                }
              }
            }
          }
        };
        a.prototype.gatherRegions = function(a) {
          for (var d = 0;d < this.r;d++) {
            for (var g = 0;g < this.c;g++) {
              this.grid[d][g].bounds.isEmpty() || a.push(this.grid[d][g].bounds);
            }
          }
        };
        a.prototype.gatherOptimizedRegions = function(a) {
          this.gatherRegions(a);
        };
        a.prototype.getDirtyRatio = function() {
          var a = this.w * this.h;
          if (0 === a) {
            return 0;
          }
          for (var d = 0, g = 0;g < this.r;g++) {
            for (var b = 0;b < this.c;b++) {
              d += this.grid[g][b].region.area();
            }
          }
          return d / a;
        };
        a.prototype.render = function(a, d) {
          function g(g) {
            a.rect(g.x, g.y, g.w, g.h);
          }
          if (d && d.drawGrid) {
            a.strokeStyle = "white";
            for (var b = 0;b < this.r;b++) {
              for (var c = 0;c < this.c;c++) {
                var f = this.grid[b][c];
                a.beginPath();
                g(f.region);
                a.closePath();
                a.stroke();
              }
            }
          }
          a.strokeStyle = "#E0F8D8";
          for (b = 0;b < this.r;b++) {
            for (c = 0;c < this.c;c++) {
              f = this.grid[b][c], a.beginPath(), g(f.bounds), a.closePath(), a.stroke();
            }
          }
        };
        a.tmpRectangle = t.createEmpty();
        return a;
      }();
      r.DirtyRegion = n;
      (function(a) {
        var b = function() {
          function a(g) {
            this.region = g;
            this.bounds = t.createEmpty();
          }
          a.prototype.clear = function() {
            this.bounds.setEmpty();
          };
          return a;
        }();
        a.Cell = b;
      })(n = r.DirtyRegion || (r.DirtyRegion = {}));
      var v = function() {
        function a(b, d, g, c, f, k) {
          this.index = b;
          this.x = d;
          this.y = g;
          this.scale = k;
          this.bounds = new t(d * c, g * f, c, f);
        }
        a.prototype.getOBB = function() {
          if (this._obb) {
            return this._obb;
          }
          this.bounds.getCorners(a.corners);
          return this._obb = new q(a.corners);
        };
        a.corners = u.createEmptyPoints(4);
        return a;
      }();
      r.Tile = v;
      var c = function() {
        function a(b, d, g, c, f) {
          this.tileW = g;
          this.tileH = c;
          this.scale = f;
          this.w = b;
          this.h = d;
          this.rows = Math.ceil(d / c);
          this.columns = Math.ceil(b / g);
          this.tiles = [];
          for (d = b = 0;d < this.rows;d++) {
            for (var k = 0;k < this.columns;k++) {
              this.tiles.push(new v(b++, k, d, g, c, f));
            }
          }
        }
        a.prototype.getTiles = function(a, d) {
          if (d.emptyArea(a)) {
            return [];
          }
          if (d.infiniteArea(a)) {
            return this.tiles;
          }
          var g = this.columns * this.rows;
          return 40 > g && d.isScaleOrRotation() ? this.getFewTiles(a, d, 10 < g) : this.getManyTiles(a, d);
        };
        a.prototype.getFewTiles = function(b, d, g) {
          void 0 === g && (g = !0);
          if (d.isTranslationOnly() && 1 === this.tiles.length) {
            return this.tiles[0].bounds.intersectsTranslated(b, d.tx, d.ty) ? [this.tiles[0]] : [];
          }
          d.transformRectangle(b, a._points);
          var c;
          b = new t(0, 0, this.w, this.h);
          g && (c = new q(a._points));
          b.intersect(q.getBounds(a._points));
          if (b.isEmpty()) {
            return [];
          }
          var k = b.x / this.tileW | 0;
          d = b.y / this.tileH | 0;
          var h = Math.ceil((b.x + b.w) / this.tileW) | 0, n = Math.ceil((b.y + b.h) / this.tileH) | 0, k = m(k, 0, this.columns), h = m(h, 0, this.columns);
          d = m(d, 0, this.rows);
          for (var n = m(n, 0, this.rows), l = [];k < h;k++) {
            for (var v = d;v < n;v++) {
              var u = this.tiles[v * this.columns + k];
              u.bounds.intersects(b) && (g ? u.getOBB().intersects(c) : 1) && l.push(u);
            }
          }
          return l;
        };
        a.prototype.getManyTiles = function(b, d) {
          function g(a, g, d) {
            return (a - g.x) * (d.y - g.y) / (d.x - g.x) + g.y;
          }
          function c(a, g, d, b, e) {
            if (!(0 > d || d >= g.columns)) {
              for (b = m(b, 0, g.rows), e = m(e + 1, 0, g.rows);b < e;b++) {
                a.push(g.tiles[b * g.columns + d]);
              }
            }
          }
          var k = a._points;
          d.transformRectangle(b, k);
          for (var h = k[0].x < k[1].x ? 0 : 1, n = k[2].x < k[3].x ? 2 : 3, n = k[h].x < k[n].x ? h : n, h = [], q = 0;5 > q;q++, n++) {
            h.push(k[n % 4]);
          }
          (h[1].x - h[0].x) * (h[3].y - h[0].y) < (h[1].y - h[0].y) * (h[3].x - h[0].x) && (k = h[1], h[1] = h[3], h[3] = k);
          var k = [], t, l, n = Math.floor(h[0].x / this.tileW), q = (n + 1) * this.tileW;
          if (h[2].x < q) {
            t = Math.min(h[0].y, h[1].y, h[2].y, h[3].y);
            l = Math.max(h[0].y, h[1].y, h[2].y, h[3].y);
            var v = Math.floor(t / this.tileH), u = Math.floor(l / this.tileH);
            c(k, this, n, v, u);
            return k;
          }
          var p = 0, r = 4, w = !1;
          if (h[0].x === h[1].x || h[0].x === h[3].x) {
            h[0].x === h[1].x ? (w = !0, p++) : r--, t = g(q, h[p], h[p + 1]), l = g(q, h[r], h[r - 1]), v = Math.floor(h[p].y / this.tileH), u = Math.floor(h[r].y / this.tileH), c(k, this, n, v, u), n++;
          }
          do {
            var J, D, z, B;
            h[p + 1].x < q ? (J = h[p + 1].y, z = !0) : (J = g(q, h[p], h[p + 1]), z = !1);
            h[r - 1].x < q ? (D = h[r - 1].y, B = !0) : (D = g(q, h[r], h[r - 1]), B = !1);
            v = Math.floor((h[p].y < h[p + 1].y ? t : J) / this.tileH);
            u = Math.floor((h[r].y > h[r - 1].y ? l : D) / this.tileH);
            c(k, this, n, v, u);
            if (z && w) {
              break;
            }
            z ? (w = !0, p++, t = g(q, h[p], h[p + 1])) : t = J;
            B ? (r--, l = g(q, h[r], h[r - 1])) : l = D;
            n++;
            q = (n + 1) * this.tileW;
          } while (p < r);
          return k;
        };
        a._points = u.createEmptyPoints(4);
        return a;
      }();
      r.TileCache = c;
      n = function() {
        function a(b, d, g) {
          this._cacheLevels = [];
          this._source = b;
          this._tileSize = d;
          this._minUntiledSize = g;
        }
        a.prototype._getTilesAtScale = function(a, d, g) {
          var f = Math.max(d.getAbsoluteScaleX(), d.getAbsoluteScaleY()), k = 0;
          1 !== f && (k = m(Math.round(Math.log(1 / f) / Math.LN2), -5, 3));
          f = b(k);
          if (this._source.hasFlags(256)) {
            for (;;) {
              f = b(k);
              if (g.contains(this._source.getBounds().getAbsoluteBounds().clone().scale(f, f))) {
                break;
              }
              k--;
            }
          }
          this._source.hasFlags(512) || (k = m(k, -5, 0));
          f = b(k);
          g = 5 + k;
          k = this._cacheLevels[g];
          if (!k) {
            var k = this._source.getBounds().getAbsoluteBounds().clone().scale(f, f), h, n;
            this._source.hasFlags(256) || !this._source.hasFlags(1024) || Math.max(k.w, k.h) <= this._minUntiledSize ? (h = k.w, n = k.h) : h = n = this._tileSize;
            k = this._cacheLevels[g] = new c(k.w, k.h, h, n, f);
          }
          return k.getTiles(a, d.scaleClone(f, f));
        };
        a.prototype.fetchTiles = function(a, d, g, b) {
          var c = new t(0, 0, g.canvas.width, g.canvas.height);
          a = this._getTilesAtScale(a, d, c);
          var f;
          d = this._source;
          for (var k = 0;k < a.length;k++) {
            var h = a[k];
            h.cachedSurfaceRegion && h.cachedSurfaceRegion.surface && !d.hasFlags(4352) || (f || (f = []), f.push(h));
          }
          f && this._cacheTiles(g, f, b, c);
          d.removeFlags(4096);
          return a;
        };
        a.prototype._getTileBounds = function(a) {
          for (var d = t.createEmpty(), g = 0;g < a.length;g++) {
            d.union(a[g].bounds);
          }
          return d;
        };
        a.prototype._cacheTiles = function(a, d, g, b, c) {
          void 0 === c && (c = 4);
          var f = this._getTileBounds(d);
          a.save();
          a.setTransform(1, 0, 0, 1, 0, 0);
          a.clearRect(0, 0, b.w, b.h);
          a.translate(-f.x, -f.y);
          a.scale(d[0].scale, d[0].scale);
          var k = this._source.getBounds();
          a.translate(-k.x, -k.y);
          2 <= p.traceLevel && p.writer && p.writer.writeLn("Rendering Tiles: " + f);
          this._source.render(a, 0);
          a.restore();
          for (var k = null, h = 0;h < d.length;h++) {
            var n = d[h], q = n.bounds.clone();
            q.x -= f.x;
            q.y -= f.y;
            b.contains(q) || (k || (k = []), k.push(n));
            n.cachedSurfaceRegion = g(n.cachedSurfaceRegion, a, q);
          }
          k && (2 <= k.length ? (d = k.slice(0, k.length / 2 | 0), f = k.slice(d.length), this._cacheTiles(a, d, g, b, c - 1), this._cacheTiles(a, f, g, b, c - 1)) : this._cacheTiles(a, k, g, b, c - 1));
        };
        return a;
      }();
      r.RenderableTileCache = n;
    })(p.Geometry || (p.Geometry = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(h, p) {
  function r() {
    this.constructor = h;
  }
  for (var a in p) {
    p.hasOwnProperty(a) && (h[a] = p[a]);
  }
  r.prototype = p.prototype;
  h.prototype = new r;
};
(function(h) {
  (function(p) {
    var r = h.IntegerUtilities.roundToMultipleOfPowerOfTwo, a = p.Geometry.Rectangle;
    (function(h) {
      var m = function(a) {
        function b() {
          a.apply(this, arguments);
        }
        __extends(b, a);
        return b;
      }(p.Geometry.Rectangle);
      h.Region = m;
      var b = function() {
        function a(b, c) {
          this._root = new l(0, 0, b | 0, c | 0, !1);
        }
        a.prototype.allocate = function(a, b) {
          a = Math.ceil(a);
          b = Math.ceil(b);
          var f = this._root.insert(a, b);
          f && (f.allocator = this, f.allocated = !0);
          return f;
        };
        a.prototype.free = function(a) {
          a.clear();
          a.allocated = !1;
        };
        a.RANDOM_ORIENTATION = !0;
        a.MAX_DEPTH = 256;
        return a;
      }();
      h.CompactAllocator = b;
      var l = function(a) {
        function k(b, f, e, d, g) {
          a.call(this, b, f, e, d);
          this._children = null;
          this._horizontal = g;
          this.allocated = !1;
        }
        __extends(k, a);
        k.prototype.clear = function() {
          this._children = null;
          this.allocated = !1;
        };
        k.prototype.insert = function(a, b) {
          return this._insert(a, b, 0);
        };
        k.prototype._insert = function(a, f, e) {
          if (!(e > b.MAX_DEPTH || this.allocated || this.w < a || this.h < f)) {
            if (this._children) {
              var d;
              if ((d = this._children[0]._insert(a, f, e + 1)) || (d = this._children[1]._insert(a, f, e + 1))) {
                return d;
              }
            } else {
              return d = !this._horizontal, b.RANDOM_ORIENTATION && (d = .5 <= Math.random()), this._children = this._horizontal ? [new k(this.x, this.y, this.w, f, !1), new k(this.x, this.y + f, this.w, this.h - f, d)] : [new k(this.x, this.y, a, this.h, !0), new k(this.x + a, this.y, this.w - a, this.h, d)], d = this._children[0], d.w === a && d.h === f ? (d.allocated = !0, d) : this._insert(a, f, e + 1);
            }
          }
        };
        return k;
      }(h.Region), u = function() {
        function a(b, c, f, e) {
          this._columns = b / f | 0;
          this._rows = c / e | 0;
          this._sizeW = f;
          this._sizeH = e;
          this._freeList = [];
          this._index = 0;
          this._total = this._columns * this._rows;
        }
        a.prototype.allocate = function(a, b) {
          a = Math.ceil(a);
          b = Math.ceil(b);
          var f = this._sizeW, e = this._sizeH;
          if (a > f || b > e) {
            return null;
          }
          var d = this._freeList, g = this._index;
          return 0 < d.length ? (f = d.pop(), f.w = a, f.h = b, f.allocated = !0, f) : g < this._total ? (d = g / this._columns | 0, f = new k((g - d * this._columns) * f, d * e, a, b), f.index = g, f.allocator = this, f.allocated = !0, this._index++, f) : null;
        };
        a.prototype.free = function(a) {
          a.allocated = !1;
          this._freeList.push(a);
        };
        return a;
      }();
      h.GridAllocator = u;
      var k = function(a) {
        function b(c, f, e, d) {
          a.call(this, c, f, e, d);
          this.index = -1;
        }
        __extends(b, a);
        return b;
      }(h.Region);
      h.GridCell = k;
      var t = function() {
        return function(a, b, c) {
          this.size = a;
          this.region = b;
          this.allocator = c;
        };
      }(), q = function(a) {
        function b(c, f, e, d, g) {
          a.call(this, c, f, e, d);
          this.region = g;
        }
        __extends(b, a);
        return b;
      }(h.Region);
      h.BucketCell = q;
      m = function() {
        function b(a, c) {
          this._buckets = [];
          this._w = a | 0;
          this._h = c | 0;
          this._filled = 0;
        }
        b.prototype.allocate = function(b, c) {
          b = Math.ceil(b);
          c = Math.ceil(c);
          var f = Math.max(b, c);
          if (b > this._w || c > this._h) {
            return null;
          }
          var e = null, d, g = this._buckets;
          do {
            for (var k = 0;k < g.length && !(g[k].size >= f && (d = g[k], e = d.allocator.allocate(b, c)));k++) {
            }
            if (!e) {
              var h = this._h - this._filled;
              if (h < c) {
                return null;
              }
              var k = r(f, 8), n = 2 * k;
              n > h && (n = h);
              if (n < k) {
                return null;
              }
              h = new a(0, this._filled, this._w, n);
              this._buckets.push(new t(k, h, new u(h.w, h.h, k, k)));
              this._filled += n;
            }
          } while (!e);
          return new q(d.region.x + e.x, d.region.y + e.y, e.w, e.h, e);
        };
        b.prototype.free = function(a) {
          a.region.allocator.free(a.region);
        };
        return b;
      }();
      h.BucketAllocator = m;
    })(p.RegionAllocator || (p.RegionAllocator = {}));
    (function(a) {
      var h = function() {
        function a(b) {
          this._createSurface = b;
          this._surfaces = [];
        }
        Object.defineProperty(a.prototype, "surfaces", {get:function() {
          return this._surfaces;
        }, enumerable:!0, configurable:!0});
        a.prototype._createNewSurface = function(a, b) {
          var k = this._createSurface(a, b);
          this._surfaces.push(k);
          return k;
        };
        a.prototype.addSurface = function(a) {
          this._surfaces.push(a);
        };
        a.prototype.allocate = function(a, b, k) {
          for (var h = 0;h < this._surfaces.length;h++) {
            var q = this._surfaces[h];
            if (q !== k && (q = q.allocate(a, b))) {
              return q;
            }
          }
          return this._createNewSurface(a, b).allocate(a, b);
        };
        a.prototype.free = function(a) {
        };
        return a;
      }();
      a.SimpleAllocator = h;
    })(p.SurfaceRegionAllocator || (p.SurfaceRegionAllocator = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    var r = p.Geometry.Rectangle, a = p.Geometry.Matrix, w = p.Geometry.DirtyRegion;
    (function(a) {
      a[a.Normal = 1] = "Normal";
      a[a.Layer = 2] = "Layer";
      a[a.Multiply = 3] = "Multiply";
      a[a.Screen = 4] = "Screen";
      a[a.Lighten = 5] = "Lighten";
      a[a.Darken = 6] = "Darken";
      a[a.Difference = 7] = "Difference";
      a[a.Add = 8] = "Add";
      a[a.Subtract = 9] = "Subtract";
      a[a.Invert = 10] = "Invert";
      a[a.Alpha = 11] = "Alpha";
      a[a.Erase = 12] = "Erase";
      a[a.Overlay = 13] = "Overlay";
      a[a.HardLight = 14] = "HardLight";
    })(p.BlendMode || (p.BlendMode = {}));
    var m = p.BlendMode;
    (function(a) {
      a[a.None = 0] = "None";
      a[a.Visible = 1] = "Visible";
      a[a.Transparent = 2] = "Transparent";
      a[a.IsMask = 4] = "IsMask";
      a[a.CacheAsBitmap = 16] = "CacheAsBitmap";
      a[a.PixelSnapping = 32] = "PixelSnapping";
      a[a.ImageSmoothing = 64] = "ImageSmoothing";
      a[a.Dynamic = 256] = "Dynamic";
      a[a.Scalable = 512] = "Scalable";
      a[a.Tileable = 1024] = "Tileable";
      a[a.BoundsAutoCompute = 2048] = "BoundsAutoCompute";
      a[a.Dirty = 4096] = "Dirty";
      a[a.InvalidBounds = 8192] = "InvalidBounds";
      a[a.InvalidConcatenatedMatrix = 16384] = "InvalidConcatenatedMatrix";
      a[a.InvalidInvertedConcatenatedMatrix = 32768] = "InvalidInvertedConcatenatedMatrix";
      a[a.InvalidConcatenatedColorMatrix = 65536] = "InvalidConcatenatedColorMatrix";
      a[a.UpOnAddedOrRemoved = a.InvalidBounds | a.Dirty] = "UpOnAddedOrRemoved";
      a[a.DownOnAddedOrRemoved = a.InvalidConcatenatedMatrix | a.InvalidInvertedConcatenatedMatrix | a.InvalidConcatenatedColorMatrix] = "DownOnAddedOrRemoved";
      a[a.UpOnMoved = a.InvalidBounds | a.Dirty] = "UpOnMoved";
      a[a.DownOnMoved = a.InvalidConcatenatedMatrix | a.InvalidInvertedConcatenatedMatrix] = "DownOnMoved";
      a[a.UpOnColorMatrixChanged = a.Dirty] = "UpOnColorMatrixChanged";
      a[a.DownOnColorMatrixChanged = a.InvalidConcatenatedColorMatrix] = "DownOnColorMatrixChanged";
      a[a.UpOnInvalidate = a.InvalidBounds | a.Dirty] = "UpOnInvalidate";
      a[a.Default = a.BoundsAutoCompute | a.InvalidBounds | a.InvalidConcatenatedMatrix | a.InvalidInvertedConcatenatedMatrix | a.Visible] = "Default";
    })(p.NodeFlags || (p.NodeFlags = {}));
    var b = p.NodeFlags;
    (function(a) {
      a[a.Node = 1] = "Node";
      a[a.Shape = 3] = "Shape";
      a[a.Group = 5] = "Group";
      a[a.Stage = 13] = "Stage";
      a[a.Renderable = 33] = "Renderable";
    })(p.NodeType || (p.NodeType = {}));
    var l = p.NodeType;
    (function(a) {
      a[a.None = 0] = "None";
      a[a.OnStageBoundsChanged = 1] = "OnStageBoundsChanged";
      a[a.RemovedFromStage = 2] = "RemovedFromStage";
    })(p.NodeEventType || (p.NodeEventType = {}));
    var u = function() {
      function a() {
      }
      a.prototype.visitNode = function(a, g) {
      };
      a.prototype.visitShape = function(a, g) {
        this.visitNode(a, g);
      };
      a.prototype.visitGroup = function(a, g) {
        this.visitNode(a, g);
        for (var b = a.getChildren(), e = 0;e < b.length;e++) {
          b[e].visit(this, g);
        }
      };
      a.prototype.visitStage = function(a, g) {
        this.visitGroup(a, g);
      };
      a.prototype.visitRenderable = function(a, g) {
        this.visitNode(a, g);
      };
      return a;
    }();
    p.NodeVisitor = u;
    var k = function() {
      return function() {
      };
    }();
    p.State = k;
    var t = function(b) {
      function d(g) {
        b.call(this);
        this.matrix = a.createIdentity();
        this.depth = 0;
      }
      __extends(d, b);
      d.prototype.transform = function(a) {
        var d = this.clone();
        d.matrix.preMultiply(a.getMatrix());
        return d;
      };
      d.allocate = function() {
        var a = d._dirtyStack, b = null;
        return b = a.length ? a.pop() : new d(this._doNotCallCtorDirectly);
      };
      d.prototype.clone = function() {
        var a = d.allocate();
        a.set(this);
        return a;
      };
      d.prototype.set = function(a) {
        this.matrix.set(a.matrix);
      };
      d.prototype.free = function() {
        d._dirtyStack.push(this);
      };
      d._dirtyStack = [];
      d._doNotCallCtorDirectly = Object.create(null);
      return d;
    }(k);
    p.PreRenderState = t;
    var q = function(a) {
      function d() {
        a.apply(this, arguments);
        this.isDirty = !0;
      }
      __extends(d, a);
      d.prototype.start = function(a, d) {
        this._dirtyRegion = d;
        var b = t.allocate();
        b.matrix.setIdentity();
        a.visit(this, b);
        b.free();
      };
      d.prototype.visitGroup = function(a, d) {
        var b = a.getChildren();
        this.visitNode(a, d);
        for (var e = 0;e < b.length;e++) {
          var c = b[e], f = d.transform(c.getTransform());
          c.visit(this, f);
          f.free();
        }
      };
      d.prototype.visitNode = function(a, d) {
        a.hasFlags(4096) && (this.isDirty = !0);
        a.toggleFlags(4096, !1);
        a.depth = d.depth++;
      };
      return d;
    }(u);
    p.PreRenderVisitor = q;
    k = function(a) {
      function d(g) {
        a.call(this);
        this.writer = g;
      }
      __extends(d, a);
      d.prototype.visitNode = function(a, d) {
      };
      d.prototype.visitShape = function(a, d) {
        this.writer.writeLn(a.toString());
        this.visitNode(a, d);
      };
      d.prototype.visitGroup = function(a, d) {
        this.visitNode(a, d);
        var b = a.getChildren();
        this.writer.enter(a.toString() + " " + b.length);
        for (var e = 0;e < b.length;e++) {
          b[e].visit(this, d);
        }
        this.writer.outdent();
      };
      d.prototype.visitStage = function(a, d) {
        this.visitGroup(a, d);
      };
      return d;
    }(u);
    p.TracingNodeVisitor = k;
    var n = function() {
      function a() {
        this._clip = -1;
        this._eventListeners = null;
        this._id = a._nextId++;
        this._type = 1;
        this._index = -1;
        this._parent = null;
        this.reset();
      }
      Object.defineProperty(a.prototype, "id", {get:function() {
        return this._id;
      }, enumerable:!0, configurable:!0});
      a.prototype._dispatchEvent = function(a) {
        if (this._eventListeners) {
          for (var g = this._eventListeners, b = 0;b < g.length;b++) {
            var e = g[b];
            e.type === a && e.listener(this, a);
          }
        }
      };
      a.prototype.addEventListener = function(a, g) {
        this._eventListeners || (this._eventListeners = []);
        this._eventListeners.push({type:a, listener:g});
      };
      a.prototype.removeEventListener = function(a, g) {
        for (var b = this._eventListeners, e = 0;e < b.length;e++) {
          var c = b[e];
          if (c.type === a && c.listener === g) {
            b.splice(e, 1);
            break;
          }
        }
      };
      Object.defineProperty(a.prototype, "properties", {get:function() {
        return this._properties || (this._properties = {});
      }, enumerable:!0, configurable:!0});
      a.prototype.reset = function() {
        this._flags = b.Default;
        this._properties = this._transform = this._layer = this._bounds = null;
        this.depth = -1;
      };
      Object.defineProperty(a.prototype, "clip", {get:function() {
        return this._clip;
      }, set:function(a) {
        this._clip = a;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "parent", {get:function() {
        return this._parent;
      }, enumerable:!0, configurable:!0});
      a.prototype.getTransformedBounds = function(a) {
        var g = this.getBounds(!0);
        if (a !== this && !g.isEmpty()) {
          var b = this.getTransform().getConcatenatedMatrix();
          a ? (a = a.getTransform().getInvertedConcatenatedMatrix(!0), a.preMultiply(b), a.transformRectangleAABB(g), a.free()) : b.transformRectangleAABB(g);
        }
        return g;
      };
      a.prototype._markCurrentBoundsAsDirtyRegion = function() {
      };
      a.prototype.getStage = function(a) {
        void 0 === a && (a = !0);
        for (var g = this._parent;g;) {
          if (g.isType(13)) {
            var b = g;
            if (a) {
              if (b.dirtyRegion) {
                return b;
              }
            } else {
              return b;
            }
          }
          g = g._parent;
        }
        return null;
      };
      a.prototype.getChildren = function(a) {
        throw void 0;
      };
      a.prototype.getBounds = function(a) {
        throw void 0;
      };
      a.prototype.setBounds = function(a) {
        (this._bounds || (this._bounds = r.createEmpty())).set(a);
        this.removeFlags(8192);
      };
      a.prototype.clone = function() {
        throw void 0;
      };
      a.prototype.setFlags = function(a) {
        this._flags |= a;
      };
      a.prototype.hasFlags = function(a) {
        return (this._flags & a) === a;
      };
      a.prototype.hasAnyFlags = function(a) {
        return !!(this._flags & a);
      };
      a.prototype.removeFlags = function(a) {
        this._flags &= ~a;
      };
      a.prototype.toggleFlags = function(a, g) {
        this._flags = g ? this._flags | a : this._flags & ~a;
      };
      a.prototype._propagateFlagsUp = function(a) {
        if (0 !== a && !this.hasFlags(a)) {
          this.hasFlags(2048) || (a &= -8193);
          this.setFlags(a);
          var g = this._parent;
          g && g._propagateFlagsUp(a);
        }
      };
      a.prototype._propagateFlagsDown = function(a) {
        throw void 0;
      };
      a.prototype.isAncestor = function(a) {
        for (;a;) {
          if (a === this) {
            return !0;
          }
          a = a._parent;
        }
        return !1;
      };
      a._getAncestors = function(b, g) {
        var c = a._path;
        for (c.length = 0;b && b !== g;) {
          c.push(b), b = b._parent;
        }
        return c;
      };
      a.prototype._findClosestAncestor = function(a, g) {
        for (var b = this;b;) {
          if (b.hasFlags(a) === g) {
            return b;
          }
          b = b._parent;
        }
        return null;
      };
      a.prototype.isType = function(a) {
        return this._type === a;
      };
      a.prototype.isTypeOf = function(a) {
        return (this._type & a) === a;
      };
      a.prototype.isLeaf = function() {
        return this.isType(33) || this.isType(3);
      };
      a.prototype.isLinear = function() {
        if (this.isLeaf()) {
          return !0;
        }
        if (this.isType(5)) {
          var a = this._children;
          if (1 === a.length && a[0].isLinear()) {
            return !0;
          }
        }
        return !1;
      };
      a.prototype.getTransformMatrix = function(a) {
        void 0 === a && (a = !1);
        return this.getTransform().getMatrix(a);
      };
      a.prototype.getTransform = function() {
        null === this._transform && (this._transform = new c(this));
        return this._transform;
      };
      a.prototype.getLayer = function() {
        null === this._layer && (this._layer = new f(this));
        return this._layer;
      };
      a.prototype.getLayerBounds = function(a) {
        var g = this.getBounds();
        a && this._layer && this._layer.expandBounds(g);
        return g;
      };
      a.prototype.visit = function(a, g) {
        switch(this._type) {
          case 1:
            a.visitNode(this, g);
            break;
          case 5:
            a.visitGroup(this, g);
            break;
          case 13:
            a.visitStage(this, g);
            break;
          case 3:
            a.visitShape(this, g);
            break;
          case 33:
            a.visitRenderable(this, g);
            break;
          default:
            h.Debug.unexpectedCase();
        }
      };
      a.prototype.invalidate = function() {
        this._propagateFlagsUp(b.UpOnInvalidate);
      };
      a.prototype.toString = function(a) {
        void 0 === a && (a = !1);
        var g = l[this._type] + " " + this._id;
        a && (g += " " + this._bounds.toString());
        return g;
      };
      a._path = [];
      a._nextId = 0;
      return a;
    }();
    p.Node = n;
    var v = function(a) {
      function d() {
        a.call(this);
        this._type = 5;
        this._children = [];
      }
      __extends(d, a);
      d.prototype.getChildren = function(a) {
        void 0 === a && (a = !1);
        return a ? this._children.slice(0) : this._children;
      };
      d.prototype.childAt = function(a) {
        return this._children[a];
      };
      Object.defineProperty(d.prototype, "child", {get:function() {
        return this._children[0];
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(d.prototype, "groupChild", {get:function() {
        return this._children[0];
      }, enumerable:!0, configurable:!0});
      d.prototype.addChild = function(a) {
        a._parent && a._parent.removeChildAt(a._index);
        a._parent = this;
        a._index = this._children.length;
        this._children.push(a);
        this._propagateFlagsUp(b.UpOnAddedOrRemoved);
        a._propagateFlagsDown(b.DownOnAddedOrRemoved);
      };
      d.prototype.removeChildAt = function(a) {
        var d = this._children[a];
        this._children.splice(a, 1);
        d._index = -1;
        d._parent = null;
        this._propagateFlagsUp(b.UpOnAddedOrRemoved);
        d._propagateFlagsDown(b.DownOnAddedOrRemoved);
      };
      d.prototype.clearChildren = function() {
        for (var a = 0;a < this._children.length;a++) {
          var d = this._children[a];
          d && (d._index = -1, d._parent = null, d._propagateFlagsDown(b.DownOnAddedOrRemoved));
        }
        this._children.length = 0;
        this._propagateFlagsUp(b.UpOnAddedOrRemoved);
      };
      d.prototype._propagateFlagsDown = function(a) {
        if (!this.hasFlags(a)) {
          this.setFlags(a);
          for (var b = this._children, d = 0;d < b.length;d++) {
            b[d]._propagateFlagsDown(a);
          }
        }
      };
      d.prototype.getBounds = function(a) {
        void 0 === a && (a = !1);
        var b = this._bounds || (this._bounds = r.createEmpty());
        if (this.hasFlags(8192)) {
          b.setEmpty();
          for (var d = this._children, e = r.allocate(), c = 0;c < d.length;c++) {
            var f = d[c];
            e.set(f.getBounds());
            f.getTransformMatrix().transformRectangleAABB(e);
            b.union(e);
          }
          e.free();
          this.removeFlags(8192);
        }
        return a ? b.clone() : b;
      };
      d.prototype.getLayerBounds = function(a) {
        if (!a) {
          return this.getBounds();
        }
        for (var b = r.createEmpty(), d = this._children, e = r.allocate(), c = 0;c < d.length;c++) {
          var f = d[c];
          e.set(f.getLayerBounds(a));
          f.getTransformMatrix().transformRectangleAABB(e);
          b.union(e);
        }
        e.free();
        a && this._layer && this._layer.expandBounds(b);
        return b;
      };
      return d;
    }(n);
    p.Group = v;
    var c = function() {
      function e(b) {
        this._node = b;
        this._matrix = a.createIdentity();
        this._colorMatrix = p.ColorMatrix.createIdentity();
        this._concatenatedMatrix = a.createIdentity();
        this._invertedConcatenatedMatrix = a.createIdentity();
        this._concatenatedColorMatrix = p.ColorMatrix.createIdentity();
      }
      e.prototype.setMatrix = function(a) {
        this._matrix.isEqual(a) || (this._matrix.set(a), this._node._propagateFlagsUp(b.UpOnMoved), this._node._propagateFlagsDown(b.DownOnMoved));
      };
      e.prototype.setColorMatrix = function(a) {
        this._colorMatrix.set(a);
        this._node._propagateFlagsUp(b.UpOnColorMatrixChanged);
        this._node._propagateFlagsDown(b.DownOnColorMatrixChanged);
      };
      e.prototype.getMatrix = function(a) {
        void 0 === a && (a = !1);
        return a ? this._matrix.clone() : this._matrix;
      };
      e.prototype.hasColorMatrix = function() {
        return null !== this._colorMatrix;
      };
      e.prototype.getColorMatrix = function(a) {
        void 0 === a && (a = !1);
        null === this._colorMatrix && (this._colorMatrix = p.ColorMatrix.createIdentity());
        return a ? this._colorMatrix.clone() : this._colorMatrix;
      };
      e.prototype.getConcatenatedMatrix = function(b) {
        void 0 === b && (b = !1);
        if (this._node.hasFlags(16384)) {
          for (var g = this._node._findClosestAncestor(16384, !1), e = n._getAncestors(this._node, g), c = g ? g.getTransform()._concatenatedMatrix.clone() : a.createIdentity(), f = e.length - 1;0 <= f;f--) {
            var g = e[f], k = g.getTransform();
            c.preMultiply(k._matrix);
            k._concatenatedMatrix.set(c);
            g.removeFlags(16384);
          }
        }
        return b ? this._concatenatedMatrix.clone() : this._concatenatedMatrix;
      };
      e.prototype.getInvertedConcatenatedMatrix = function(a) {
        void 0 === a && (a = !1);
        this._node.hasFlags(32768) && (this.getConcatenatedMatrix().inverse(this._invertedConcatenatedMatrix), this._node.removeFlags(32768));
        return a ? this._invertedConcatenatedMatrix.clone() : this._invertedConcatenatedMatrix;
      };
      e.prototype.toString = function() {
        return this._matrix.toString();
      };
      return e;
    }();
    p.Transform = c;
    var f = function() {
      function a(b) {
        this._node = b;
        this._mask = null;
        this._blendMode = 1;
      }
      Object.defineProperty(a.prototype, "filters", {get:function() {
        return this._filters;
      }, set:function(a) {
        this._filters = a;
        a.length && this._node.invalidate();
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "blendMode", {get:function() {
        return this._blendMode;
      }, set:function(a) {
        this._blendMode = a;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "mask", {get:function() {
        return this._mask;
      }, set:function(a) {
        this._mask !== a && (this._node.invalidate(), this._mask && this._mask.removeFlags(4));
        (this._mask = a) && this._mask.setFlags(4);
      }, enumerable:!0, configurable:!0});
      a.prototype.toString = function() {
        return m[this._blendMode];
      };
      a.prototype.expandBounds = function(a) {
        var g = this._filters;
        if (g) {
          for (var b = 0;b < g.length;b++) {
            g[b].expandBounds(a);
          }
        }
      };
      return a;
    }();
    p.Layer = f;
    k = function(a) {
      function b(g) {
        a.call(this);
        this._source = g;
        this._type = 3;
        this._ratio = 0;
      }
      __extends(b, a);
      b.prototype.getBounds = function(a) {
        void 0 === a && (a = !1);
        var b = this._bounds || (this._bounds = r.createEmpty());
        this.hasFlags(8192) && (b.set(this._source.getBounds()), this.removeFlags(8192));
        return a ? b.clone() : b;
      };
      Object.defineProperty(b.prototype, "source", {get:function() {
        return this._source;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(b.prototype, "ratio", {get:function() {
        return this._ratio;
      }, set:function(a) {
        a !== this._ratio && (this.invalidate(), this._ratio = a);
      }, enumerable:!0, configurable:!0});
      b.prototype._propagateFlagsDown = function(a) {
        this.setFlags(a);
      };
      b.prototype.getChildren = function(a) {
        return [this._source];
      };
      return b;
    }(n);
    p.Shape = k;
    k = function() {
      return function() {
        this.debug = !1;
        this.paintRenderable = !0;
        this.paintViewport = this.paintFlashing = this.paintDirtyRegion = this.paintBounds = !1;
        this.clear = !0;
      };
    }();
    p.RendererOptions = k;
    (function(a) {
      a[a.Canvas2D = 0] = "Canvas2D";
      a[a.WebGL = 1] = "WebGL";
      a[a.Both = 2] = "Both";
      a[a.DOM = 3] = "DOM";
      a[a.SVG = 4] = "SVG";
    })(p.Backend || (p.Backend = {}));
    u = function(a) {
      function b(g, d, c) {
        a.call(this);
        this._container = g;
        this._stage = d;
        this._options = c;
        this._viewport = r.createSquare(1024);
        this._devicePixelRatio = 1;
      }
      __extends(b, a);
      Object.defineProperty(b.prototype, "viewport", {set:function(a) {
        this._viewport.set(a);
      }, enumerable:!0, configurable:!0});
      b.prototype.render = function() {
        throw void 0;
      };
      b.prototype.resize = function() {
        throw void 0;
      };
      b.prototype.screenShot = function(a, b, d) {
        throw void 0;
      };
      return b;
    }(u);
    p.Renderer = u;
    u = function(b) {
      function d(a, c, f) {
        void 0 === f && (f = !1);
        b.call(this);
        this._preVisitor = new q;
        this._flags &= -2049;
        this._type = 13;
        this._scaleMode = d.DEFAULT_SCALE;
        this._align = d.DEFAULT_ALIGN;
        this._content = new v;
        this._content._flags &= -2049;
        this.addChild(this._content);
        this.setFlags(4096);
        this.setBounds(new r(0, 0, a, c));
        f ? (this._dirtyRegion = new w(a, c), this._dirtyRegion.addDirtyRectangle(new r(0, 0, a, c))) : this._dirtyRegion = null;
        this._updateContentMatrix();
      }
      __extends(d, b);
      Object.defineProperty(d.prototype, "dirtyRegion", {get:function() {
        return this._dirtyRegion;
      }, enumerable:!0, configurable:!0});
      d.prototype.setBounds = function(a) {
        b.prototype.setBounds.call(this, a);
        this._updateContentMatrix();
        this._dispatchEvent(1);
        this._dirtyRegion && (this._dirtyRegion = new w(a.w, a.h), this._dirtyRegion.addDirtyRectangle(a));
      };
      Object.defineProperty(d.prototype, "content", {get:function() {
        return this._content;
      }, enumerable:!0, configurable:!0});
      d.prototype.readyToRender = function() {
        this._preVisitor.isDirty = !1;
        this._preVisitor.start(this, this._dirtyRegion);
        return this._preVisitor.isDirty ? !0 : !1;
      };
      Object.defineProperty(d.prototype, "align", {get:function() {
        return this._align;
      }, set:function(a) {
        this._align = a;
        this._updateContentMatrix();
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(d.prototype, "scaleMode", {get:function() {
        return this._scaleMode;
      }, set:function(a) {
        this._scaleMode = a;
        this._updateContentMatrix();
      }, enumerable:!0, configurable:!0});
      d.prototype._updateContentMatrix = function() {
        if (this._scaleMode === d.DEFAULT_SCALE && this._align === d.DEFAULT_ALIGN) {
          this._content.getTransform().setMatrix(new a(1, 0, 0, 1, 0, 0));
        } else {
          var b = this.getBounds(), e = this._content.getBounds(), c = b.w / e.w, f = b.h / e.h;
          switch(this._scaleMode) {
            case 2:
              c = f = Math.max(c, f);
              break;
            case 4:
              c = f = 1;
              break;
            case 1:
              break;
            default:
              c = f = Math.min(c, f);
          }
          var k;
          k = this._align & 4 ? 0 : this._align & 8 ? b.w - e.w * c : (b.w - e.w * c) / 2;
          b = this._align & 1 ? 0 : this._align & 2 ? b.h - e.h * f : (b.h - e.h * f) / 2;
          this._content.getTransform().setMatrix(new a(c, 0, 0, f, k, b));
        }
      };
      d.DEFAULT_SCALE = 4;
      d.DEFAULT_ALIGN = 5;
      return d;
    }(v);
    p.Stage = u;
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    function r(a, b, g) {
      return a + (b - a) * g;
    }
    function a(a, b, g) {
      return r(a >> 24 & 255, b >> 24 & 255, g) << 24 | r(a >> 16 & 255, b >> 16 & 255, g) << 16 | r(a >> 8 & 255, b >> 8 & 255, g) << 8 | r(a & 255, b & 255, g);
    }
    function w(a, b, g) {
      a = a.measureText(b).width | 0;
      0 < g && (a += b.length * g);
      return a;
    }
    var m = p.Geometry.Point, b = p.Geometry.Rectangle, l = p.Geometry.Matrix, u = h.ArrayUtilities.indexOf, k = function(a) {
      function b() {
        a.call(this);
        this._parents = [];
        this._renderableParents = [];
        this._invalidateEventListeners = null;
        this._flags &= -2049;
        this._type = 33;
      }
      __extends(b, a);
      Object.defineProperty(b.prototype, "parents", {get:function() {
        return this._parents;
      }, enumerable:!0, configurable:!0});
      b.prototype.addParent = function(a) {
        u(this._parents, a);
        this._parents.push(a);
      };
      b.prototype.willRender = function() {
        for (var a = this._parents, b = 0;b < a.length;b++) {
          for (var d = a[b];d;) {
            if (d.isType(13)) {
              return !0;
            }
            if (!d.hasFlags(1)) {
              break;
            }
            d = d._parent;
          }
        }
        return !1;
      };
      b.prototype.addRenderableParent = function(a) {
        this._renderableParents.push(a);
      };
      b.prototype.wrap = function() {
        for (var a, b = this._parents, d = 0;d < b.length;d++) {
          if (a = b[d], !a._parent) {
            return a;
          }
        }
        a = new p.Shape(this);
        this.addParent(a);
        return a;
      };
      b.prototype.invalidate = function() {
        this.setFlags(4096);
        for (var a = this._parents, b = 0;b < a.length;b++) {
          a[b].invalidate();
        }
        a = this._renderableParents;
        for (b = 0;b < a.length;b++) {
          a[b].invalidate();
        }
        if (a = this._invalidateEventListeners) {
          for (b = 0;b < a.length;b++) {
            a[b](this);
          }
        }
      };
      b.prototype.addInvalidateEventListener = function(a) {
        this._invalidateEventListeners || (this._invalidateEventListeners = []);
        u(this._invalidateEventListeners, a);
        this._invalidateEventListeners.push(a);
      };
      b.prototype.getBounds = function(a) {
        void 0 === a && (a = !1);
        return a ? this._bounds.clone() : this._bounds;
      };
      b.prototype.getChildren = function(a) {
        return null;
      };
      b.prototype._propagateFlagsUp = function(a) {
        if (0 !== a && !this.hasFlags(a)) {
          for (var b = 0;b < this._parents.length;b++) {
            this._parents[b]._propagateFlagsUp(a);
          }
        }
      };
      b.prototype.render = function(a, b, d, e, c) {
      };
      return b;
    }(p.Node);
    p.Renderable = k;
    var t = function(a) {
      function b(g, d) {
        a.call(this);
        this.setBounds(g);
        this.render = d;
      }
      __extends(b, a);
      return b;
    }(k);
    p.CustomRenderable = t;
    (function(a) {
      a[a.Idle = 1] = "Idle";
      a[a.Playing = 2] = "Playing";
      a[a.Paused = 3] = "Paused";
      a[a.Ended = 4] = "Ended";
    })(p.RenderableVideoState || (p.RenderableVideoState = {}));
    t = function(a) {
      function d(g, c) {
        a.call(this);
        this._flags = 4352;
        this._lastPausedTime = this._lastTimeInvalidated = 0;
        this._pauseHappening = this._seekHappening = !1;
        this._isDOMElement = !0;
        this.setBounds(new b(0, 0, 1, 1));
        this._assetId = g;
        this._eventSerializer = c;
        var f = document.createElement("video"), k = this._handleVideoEvent.bind(this);
        f.preload = "metadata";
        f.addEventListener("play", k);
        f.addEventListener("pause", k);
        f.addEventListener("ended", k);
        f.addEventListener("loadeddata", k);
        f.addEventListener("progress", k);
        f.addEventListener("suspend", k);
        f.addEventListener("loadedmetadata", k);
        f.addEventListener("error", k);
        f.addEventListener("seeking", k);
        f.addEventListener("seeked", k);
        f.addEventListener("canplay", k);
        f.style.position = "absolute";
        this._video = f;
        this._videoEventHandler = k;
        d._renderableVideos.push(this);
        "undefined" !== typeof registerInspectorAsset && registerInspectorAsset(-1, -1, this);
        this._state = 1;
      }
      __extends(d, a);
      Object.defineProperty(d.prototype, "video", {get:function() {
        return this._video;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(d.prototype, "state", {get:function() {
        return this._state;
      }, enumerable:!0, configurable:!0});
      d.prototype.play = function() {
        this._state = 2;
        this._video.play();
      };
      d.prototype.pause = function() {
        this._state = 3;
        this._video.pause();
      };
      d.prototype._handleVideoEvent = function(a) {
        var b = null, d = this._video;
        switch(a.type) {
          case "play":
            if (!this._pauseHappening) {
              return;
            }
            a = 7;
            break;
          case "pause":
            if (2 === this._state) {
              d.play();
              return;
            }
            a = 6;
            this._pauseHappening = !0;
            break;
          case "ended":
            this._state = 4;
            this._notifyNetStream(3, b);
            a = 4;
            break;
          case "loadeddata":
            this._pauseHappening = !1;
            this._notifyNetStream(2, b);
            this.play();
            return;
          case "canplay":
            if (this._pauseHappening) {
              return;
            }
            a = 5;
            break;
          case "progress":
            a = 10;
            break;
          case "suspend":
            return;
          case "loadedmetadata":
            a = 1;
            b = {videoWidth:d.videoWidth, videoHeight:d.videoHeight, duration:d.duration};
            break;
          case "error":
            a = 11;
            b = {code:d.error.code};
            break;
          case "seeking":
            if (!this._seekHappening) {
              return;
            }
            a = 8;
            break;
          case "seeked":
            if (!this._seekHappening) {
              return;
            }
            a = 9;
            this._seekHappening = !1;
            break;
          default:
            return;
        }
        this._notifyNetStream(a, b);
      };
      d.prototype._notifyNetStream = function(a, b) {
        this._eventSerializer.sendVideoPlaybackEvent(this._assetId, a, b);
      };
      d.prototype.processControlRequest = function(a, b) {
        var d = this._video;
        switch(a) {
          case 1:
            d.src = b.url;
            this.play();
            this._notifyNetStream(0, null);
            break;
          case 9:
            d.paused && d.play();
            break;
          case 2:
            d && (b.paused && !d.paused ? (isNaN(b.time) ? this._lastPausedTime = d.currentTime : (0 !== d.seekable.length && (d.currentTime = b.time), this._lastPausedTime = b.time), this.pause()) : !b.paused && d.paused && (this.play(), isNaN(b.time) || this._lastPausedTime === b.time || 0 === d.seekable.length || (d.currentTime = b.time)));
            break;
          case 3:
            d && 0 !== d.seekable.length && (this._seekHappening = !0, d.currentTime = b.time);
            break;
          case 4:
            return d ? d.currentTime : 0;
          case 5:
            return d ? d.duration : 0;
          case 6:
            d && (d.volume = b.volume);
            break;
          case 7:
            if (!d) {
              return 0;
            }
            var e = -1;
            if (d.buffered) {
              for (var c = 0;c < d.buffered.length;c++) {
                e = Math.max(e, d.buffered.end(c));
              }
            } else {
              e = d.duration;
            }
            return Math.round(500 * e);
          case 8:
            return d ? Math.round(500 * d.duration) : 0;
        }
      };
      d.prototype.checkForUpdate = function() {
        this._lastTimeInvalidated !== this._video.currentTime && (this._isDOMElement || this.invalidate());
        this._lastTimeInvalidated = this._video.currentTime;
      };
      d.checkForVideoUpdates = function() {
        for (var a = d._renderableVideos, b = 0;b < a.length;b++) {
          var e = a[b];
          e.willRender() ? (e._video.parentElement || e.invalidate(), e._video.style.zIndex = e.parents[0].depth + "") : e._video.parentElement && e._dispatchEvent(2);
          a[b].checkForUpdate();
        }
      };
      d.prototype.render = function(a, b, d) {
        (b = this._video) && 0 < b.videoWidth && a.drawImage(b, 0, 0, b.videoWidth, b.videoHeight, 0, 0, this._bounds.w, this._bounds.h);
      };
      d._renderableVideos = [];
      return d;
    }(k);
    p.RenderableVideo = t;
    t = function(a) {
      function d(b, d) {
        a.call(this);
        this._flags = 4352;
        this.properties = {};
        this.setBounds(d);
        b instanceof HTMLCanvasElement ? this._initializeSourceCanvas(b) : this._sourceImage = b;
      }
      __extends(d, a);
      d.FromDataBuffer = function(a, b, e) {
        var c = document.createElement("canvas");
        c.width = e.w;
        c.height = e.h;
        e = new d(c, e);
        e.updateFromDataBuffer(a, b);
        return e;
      };
      d.FromNode = function(a, b, e, c, f) {
        var k = document.createElement("canvas"), h = a.getBounds();
        k.width = h.w;
        k.height = h.h;
        k = new d(k, h);
        k.drawNode(a, b, e, c, f);
        return k;
      };
      d.FromImage = function(a, e, c) {
        return new d(a, new b(0, 0, e, c));
      };
      d.prototype.updateFromDataBuffer = function(a, b) {
        if (p.imageUpdateOption.value) {
          var d = b.buffer;
          if (4 !== a && 5 !== a && 6 !== a) {
            var e = this._bounds, c = this._imageData;
            c && c.width === e.w && c.height === e.h || (c = this._imageData = this._context.createImageData(e.w, e.h));
            p.imageConvertOption.value && (d = new Int32Array(d), e = new Int32Array(c.data.buffer), h.ColorUtilities.convertImage(a, 3, d, e));
            this._ensureSourceCanvas();
            this._context.putImageData(c, 0, 0);
          }
          this.invalidate();
        }
      };
      d.prototype.readImageData = function(a) {
        a.writeRawBytes(this.imageData.data);
      };
      d.prototype.render = function(a, b, d) {
        this.renderSource ? a.drawImage(this.renderSource, 0, 0) : this._renderFallback(a);
      };
      d.prototype.drawNode = function(a, b, d, e, c) {
        d = p.Canvas2D;
        e = this.getBounds();
        (new d.Canvas2DRenderer(this._canvas, null)).renderNode(a, c || e, b);
      };
      d.prototype.mask = function(a) {
        for (var b = this.imageData, d = new Int32Array(b.data.buffer), e = h.ColorUtilities.getUnpremultiplyTable(), c = 0;c < a.length;c++) {
          var f = a[c];
          if (0 === f) {
            d[c] = 0;
          } else {
            if (255 !== f) {
              var k = d[c], n = k >> 0 & 255, q = k >> 8 & 255, k = k >> 16 & 255, t = f << 8, n = e[t + Math.min(n, f)], q = e[t + Math.min(q, f)], k = e[t + Math.min(k, f)];
              d[c] = f << 24 | k << 16 | q << 8 | n;
            }
          }
        }
        this._context.putImageData(b, 0, 0);
      };
      d.prototype._initializeSourceCanvas = function(a) {
        this._canvas = a;
        this._context = this._canvas.getContext("2d");
      };
      d.prototype._ensureSourceCanvas = function() {
        if (!this._canvas) {
          var a = document.createElement("canvas"), b = this._bounds;
          a.width = b.w;
          a.height = b.h;
          this._initializeSourceCanvas(a);
        }
      };
      Object.defineProperty(d.prototype, "imageData", {get:function() {
        this._canvas || (this._ensureSourceCanvas(), this._context.drawImage(this._sourceImage, 0, 0), this._sourceImage = null);
        return this._context.getImageData(0, 0, this._bounds.w, this._bounds.h);
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(d.prototype, "renderSource", {get:function() {
        return this._canvas || this._sourceImage;
      }, enumerable:!0, configurable:!0});
      d.prototype._renderFallback = function(a) {
      };
      return d;
    }(k);
    p.RenderableBitmap = t;
    (function(a) {
      a[a.Fill = 0] = "Fill";
      a[a.Stroke = 1] = "Stroke";
      a[a.StrokeFill = 2] = "StrokeFill";
    })(p.PathType || (p.PathType = {}));
    var q = function() {
      return function(a, b, g, c) {
        this.type = a;
        this.style = b;
        this.smoothImage = g;
        this.strokeProperties = c;
        this.path = new Path2D;
      };
    }();
    p.StyledPath = q;
    var n = function() {
      return function(a, b, g, c, f) {
        this.thickness = a;
        this.scaleMode = b;
        this.capsStyle = g;
        this.jointsStyle = c;
        this.miterLimit = f;
      };
    }();
    p.StrokeProperties = n;
    var v = function(a) {
      function b(d, c, f, k) {
        a.call(this);
        this._flags = 5632;
        this.properties = {};
        this.setBounds(k);
        this._id = d;
        this._pathData = c;
        this._textures = f;
        f.length && this.setFlags(256);
      }
      __extends(b, a);
      b.prototype.update = function(a, b, d) {
        this.setBounds(d);
        this._pathData = a;
        this._paths = null;
        this._textures = b;
        this.setFlags(256);
        this.invalidate();
      };
      b.prototype.render = function(a, b, d, c, e) {
        void 0 === c && (c = null);
        void 0 === e && (e = !1);
        a.fillStyle = a.strokeStyle = "transparent";
        b = this._deserializePaths(this._pathData, a, b);
        for (d = 0;d < b.length;d++) {
          var f = b[d];
          a.mozImageSmoothingEnabled = a.msImageSmoothingEnabled = a.imageSmoothingEnabled = f.smoothImage;
          if (0 === f.type) {
            c ? c.addPath(f.path, a.currentTransform) : (a.fillStyle = e ? "#000000" : f.style, a.fill(f.path, "evenodd"), a.fillStyle = "transparent");
          } else {
            if (!c && !e) {
              a.strokeStyle = f.style;
              var k = 1;
              f.strokeProperties && (k = f.strokeProperties.scaleMode, a.lineWidth = f.strokeProperties.thickness, a.lineCap = f.strokeProperties.capsStyle, a.lineJoin = f.strokeProperties.jointsStyle, a.miterLimit = f.strokeProperties.miterLimit);
              var h = a.lineWidth;
              (h = 1 === h || 3 === h) && a.translate(.5, .5);
              a.flashStroke(f.path, k);
              h && a.translate(-.5, -.5);
              a.strokeStyle = "transparent";
            }
          }
        }
      };
      b.prototype._deserializePaths = function(a, c, e) {
        if (this._paths) {
          return this._paths;
        }
        e = this._paths = [];
        var f = null, k = null, q = 0, t = 0, l, v, u = !1, m = 0, p = 0, r = a.commands, w = a.coordinates, D = a.styles, z = D.position = 0;
        a = a.commandsPosition;
        for (var B = 0;B < a;B++) {
          switch(r[B]) {
            case 9:
              u && f && (f.lineTo(m, p), k && k.lineTo(m, p));
              u = !0;
              q = m = w[z++] / 20;
              t = p = w[z++] / 20;
              f && f.moveTo(q, t);
              k && k.moveTo(q, t);
              break;
            case 10:
              q = w[z++] / 20;
              t = w[z++] / 20;
              f && f.lineTo(q, t);
              k && k.lineTo(q, t);
              break;
            case 11:
              l = w[z++] / 20;
              v = w[z++] / 20;
              q = w[z++] / 20;
              t = w[z++] / 20;
              f && f.quadraticCurveTo(l, v, q, t);
              k && k.quadraticCurveTo(l, v, q, t);
              break;
            case 12:
              l = w[z++] / 20;
              v = w[z++] / 20;
              var E = w[z++] / 20, A = w[z++] / 20, q = w[z++] / 20, t = w[z++] / 20;
              f && f.bezierCurveTo(l, v, E, A, q, t);
              k && k.bezierCurveTo(l, v, E, A, q, t);
              break;
            case 1:
              f = this._createPath(0, h.ColorUtilities.rgbaToCSSStyle(D.readUnsignedInt()), !1, null, q, t);
              break;
            case 3:
              l = this._readBitmap(D, c);
              f = this._createPath(0, l.style, l.smoothImage, null, q, t);
              break;
            case 2:
              f = this._createPath(0, this._readGradient(D, c), !1, null, q, t);
              break;
            case 4:
              f = null;
              break;
            case 5:
              k = h.ColorUtilities.rgbaToCSSStyle(D.readUnsignedInt());
              D.position += 1;
              l = D.readByte();
              v = b.LINE_CAPS_STYLES[D.readByte()];
              E = b.LINE_JOINTS_STYLES[D.readByte()];
              l = new n(w[z++] / 20, l, v, E, D.readByte());
              k = this._createPath(1, k, !1, l, q, t);
              break;
            case 6:
              k = this._createPath(2, this._readGradient(D, c), !1, null, q, t);
              break;
            case 7:
              l = this._readBitmap(D, c);
              k = this._createPath(2, l.style, l.smoothImage, null, q, t);
              break;
            case 8:
              k = null;
          }
        }
        u && f && (f.lineTo(m, p), k && k.lineTo(m, p));
        this._pathData = null;
        return e;
      };
      b.prototype._createPath = function(a, b, d, c, e, f) {
        a = new q(a, b, d, c);
        this._paths.push(a);
        a.path.moveTo(e, f);
        return a.path;
      };
      b.prototype._readMatrix = function(a) {
        return new l(a.readFloat(), a.readFloat(), a.readFloat(), a.readFloat(), a.readFloat(), a.readFloat());
      };
      b.prototype._readGradient = function(a, b) {
        var d = a.readUnsignedByte(), c = 2 * a.readShort() / 255, e = this._readMatrix(a), d = 16 === d ? b.createLinearGradient(-1, 0, 1, 0) : b.createRadialGradient(c, 0, 0, 0, 0, 1);
        d.setTransform && d.setTransform(e.toSVGMatrix());
        e = a.readUnsignedByte();
        for (c = 0;c < e;c++) {
          var f = a.readUnsignedByte() / 255, k = h.ColorUtilities.rgbaToCSSStyle(a.readUnsignedInt());
          d.addColorStop(f, k);
        }
        a.position += 2;
        return d;
      };
      b.prototype._readBitmap = function(a, b) {
        var d = a.readUnsignedInt(), c = this._readMatrix(a), e = a.readBoolean() ? "repeat" : "no-repeat", f = a.readBoolean();
        (d = this._textures[d]) ? (e = b.createPattern(d.renderSource, e), e.setTransform(c.toSVGMatrix())) : e = null;
        return {style:e, smoothImage:f};
      };
      b.prototype._renderFallback = function(a) {
        this.fillStyle || (this.fillStyle = h.ColorStyle.randomStyle());
        var b = this._bounds;
        a.save();
        a.beginPath();
        a.lineWidth = 2;
        a.fillStyle = this.fillStyle;
        a.fillRect(b.x, b.y, b.w, b.h);
        a.restore();
      };
      b.LINE_CAPS_STYLES = ["round", "butt", "square"];
      b.LINE_JOINTS_STYLES = ["round", "bevel", "miter"];
      return b;
    }(k);
    p.RenderableShape = v;
    t = function(b) {
      function d() {
        b.apply(this, arguments);
        this._flags = 5888;
        this._morphPaths = Object.create(null);
      }
      __extends(d, b);
      d.prototype._deserializePaths = function(b, d, c) {
        if (this._morphPaths[c]) {
          return this._morphPaths[c];
        }
        var e = this._morphPaths[c] = [], f = null, k = null, q = 0, t = 0, l, u, m = !1, p = 0, w = 0, J = b.commands, D = b.coordinates, z = b.morphCoordinates, B = b.styles, E = b.morphStyles;
        B.position = 0;
        var A = E.position = 0;
        b = b.commandsPosition;
        for (var C = 0;C < b;C++) {
          switch(J[C]) {
            case 9:
              m && f && (f.lineTo(p, w), k && k.lineTo(p, w));
              m = !0;
              q = p = r(D[A], z[A++], c) / 20;
              t = w = r(D[A], z[A++], c) / 20;
              f && f.moveTo(q, t);
              k && k.moveTo(q, t);
              break;
            case 10:
              q = r(D[A], z[A++], c) / 20;
              t = r(D[A], z[A++], c) / 20;
              f && f.lineTo(q, t);
              k && k.lineTo(q, t);
              break;
            case 11:
              l = r(D[A], z[A++], c) / 20;
              u = r(D[A], z[A++], c) / 20;
              q = r(D[A], z[A++], c) / 20;
              t = r(D[A], z[A++], c) / 20;
              f && f.quadraticCurveTo(l, u, q, t);
              k && k.quadraticCurveTo(l, u, q, t);
              break;
            case 12:
              l = r(D[A], z[A++], c) / 20;
              u = r(D[A], z[A++], c) / 20;
              var F = r(D[A], z[A++], c) / 20, G = r(D[A], z[A++], c) / 20, q = r(D[A], z[A++], c) / 20, t = r(D[A], z[A++], c) / 20;
              f && f.bezierCurveTo(l, u, F, G, q, t);
              k && k.bezierCurveTo(l, u, F, G, q, t);
              break;
            case 1:
              f = this._createMorphPath(0, c, h.ColorUtilities.rgbaToCSSStyle(a(B.readUnsignedInt(), E.readUnsignedInt(), c)), !1, null, q, t);
              break;
            case 3:
              l = this._readMorphBitmap(B, E, c, d);
              f = this._createMorphPath(0, c, l.style, l.smoothImage, null, q, t);
              break;
            case 2:
              l = this._readMorphGradient(B, E, c, d);
              f = this._createMorphPath(0, c, l, !1, null, q, t);
              break;
            case 4:
              f = null;
              break;
            case 5:
              l = r(D[A], z[A++], c) / 20;
              k = h.ColorUtilities.rgbaToCSSStyle(a(B.readUnsignedInt(), E.readUnsignedInt(), c));
              B.position += 1;
              u = B.readByte();
              F = v.LINE_CAPS_STYLES[B.readByte()];
              G = v.LINE_JOINTS_STYLES[B.readByte()];
              l = new n(l, u, F, G, B.readByte());
              k = this._createMorphPath(1, c, k, !1, l, q, t);
              break;
            case 6:
              l = this._readMorphGradient(B, E, c, d);
              k = this._createMorphPath(2, c, l, !1, null, q, t);
              break;
            case 7:
              l = this._readMorphBitmap(B, E, c, d);
              k = this._createMorphPath(2, c, l.style, l.smoothImage, null, q, t);
              break;
            case 8:
              k = null;
          }
        }
        m && f && (f.lineTo(p, w), k && k.lineTo(p, w));
        return e;
      };
      d.prototype._createMorphPath = function(a, b, d, c, e, f, k) {
        a = new q(a, d, c, e);
        this._morphPaths[b].push(a);
        a.path.moveTo(f, k);
        return a.path;
      };
      d.prototype._readMorphMatrix = function(a, b, d) {
        return new l(r(a.readFloat(), b.readFloat(), d), r(a.readFloat(), b.readFloat(), d), r(a.readFloat(), b.readFloat(), d), r(a.readFloat(), b.readFloat(), d), r(a.readFloat(), b.readFloat(), d), r(a.readFloat(), b.readFloat(), d));
      };
      d.prototype._readMorphGradient = function(b, d, c, e) {
        var f = b.readUnsignedByte(), k = 2 * b.readShort() / 255, n = this._readMorphMatrix(b, d, c);
        e = 16 === f ? e.createLinearGradient(-1, 0, 1, 0) : e.createRadialGradient(k, 0, 0, 0, 0, 1);
        e.setTransform && e.setTransform(n.toSVGMatrix());
        n = b.readUnsignedByte();
        for (f = 0;f < n;f++) {
          var k = r(b.readUnsignedByte() / 255, d.readUnsignedByte() / 255, c), q = a(b.readUnsignedInt(), d.readUnsignedInt(), c), q = h.ColorUtilities.rgbaToCSSStyle(q);
          e.addColorStop(k, q);
        }
        b.position += 2;
        return e;
      };
      d.prototype._readMorphBitmap = function(a, b, d, c) {
        var e = a.readUnsignedInt();
        b = this._readMorphMatrix(a, b, d);
        d = a.readBoolean() ? "repeat" : "no-repeat";
        a = a.readBoolean();
        c = c.createPattern(this._textures[e]._canvas, d);
        c.setTransform(b.toSVGMatrix());
        return {style:c, smoothImage:a};
      };
      return d;
    }(v);
    p.RenderableMorphShape = t;
    var c = function() {
      function a() {
        this.align = this.leading = this.descent = this.ascent = this.width = this.y = this.x = 0;
        this.runs = [];
      }
      a._getMeasureContext = function() {
        a._measureContext || (a._measureContext = document.createElement("canvas").getContext("2d"));
        return a._measureContext;
      };
      a.prototype.addRun = function(b, g, c, k, h) {
        if (c) {
          var n = a._getMeasureContext();
          n.font = b;
          n = w(n, c, k);
          this.runs.push(new f(b, g, c, n, k, h));
          this.width += n;
        }
      };
      a.prototype.wrap = function(b) {
        var g = [this], c = this.runs, k = this;
        k.width = 0;
        k.runs = [];
        for (var h = a._getMeasureContext(), n = 0;n < c.length;n++) {
          var q = c[n], t = q.text;
          q.text = "";
          q.width = 0;
          h.font = q.font;
          for (var l = b, v = t.split(/[\s.-]/), u = 0, m = 0;m < v.length;m++) {
            var p = v[m], r = t.substr(u, p.length + 1), J = q.letterSpacing, D = w(h, r, J);
            if (D > l) {
              do {
                if (q.text && (k.runs.push(q), k.width += q.width, q = new f(q.font, q.fillStyle, "", 0, q.letterSpacing, q.underline), l = new a, l.y = k.y + k.descent + k.leading + k.ascent | 0, l.ascent = k.ascent, l.descent = k.descent, l.leading = k.leading, l.align = k.align, g.push(l), k = l), l = b - D, 0 > l) {
                  for (var z = r.length, B = r;1 < z && !(z--, B = r.substr(0, z), D = w(h, B, J), D <= b);) {
                  }
                  q.text = B;
                  q.width = D;
                  r = r.substr(z);
                  D = w(h, r, J);
                }
              } while (r && 0 > l);
            } else {
              l -= D;
            }
            q.text += r;
            q.width += D;
            u += p.length + 1;
          }
          k.runs.push(q);
          k.width += q.width;
        }
        return g;
      };
      a.prototype.toString = function() {
        return "TextLine {x: " + this.x + ", y: " + this.y + ", width: " + this.width + ", height: " + (this.ascent + this.descent + this.leading) + "}";
      };
      return a;
    }();
    p.TextLine = c;
    var f = function() {
      return function(a, b, g, c, f, k) {
        void 0 === a && (a = "");
        void 0 === b && (b = "");
        void 0 === g && (g = "");
        void 0 === c && (c = 0);
        void 0 === f && (f = 0);
        void 0 === k && (k = !1);
        this.font = a;
        this.fillStyle = b;
        this.text = g;
        this.width = c;
        this.letterSpacing = f;
        this.underline = k;
      };
    }();
    p.TextRun = f;
    t = function(a) {
      function b(d) {
        a.call(this);
        this._flags = 4352;
        this.properties = {};
        this._textBounds = d.clone();
        this._textRunData = null;
        this._plainText = "";
        this._borderColor = this._backgroundColor = 0;
        this._matrix = l.createIdentity();
        this._coords = null;
        this._scrollV = 1;
        this._scrollH = 0;
        this.textRect = d.clone();
        this.lines = [];
        this.setBounds(d);
      }
      __extends(b, a);
      b.prototype.setBounds = function(b) {
        a.prototype.setBounds.call(this, b);
        this._textBounds.set(b);
        this.textRect.setElements(b.x + 2, b.y + 2, b.w - 2, b.h - 2);
      };
      b.prototype.setContent = function(a, b, d, c) {
        this._textRunData = b;
        this._plainText = a;
        this._matrix.set(d);
        this._coords = c;
        this.lines = [];
      };
      b.prototype.setStyle = function(a, b, d, c) {
        this._backgroundColor = a;
        this._borderColor = b;
        this._scrollV = d;
        this._scrollH = c;
      };
      b.prototype.reflow = function(a, b) {
        var d = this._textRunData;
        if (d) {
          for (var e = this._bounds, f = e.w - 4, k = this._plainText, n = this.lines, q = new c, t = 0, l = 0, v = 0, u = 0, m = -4294967295, p = -1;d.position < d.length;) {
            var r = d.readInt(), w = d.readInt(), B = d.readInt(), E = d.readUTF(), A = d.readInt(), C = d.readInt(), F = d.readInt();
            A > v && (v = A);
            C > u && (u = C);
            F > m && (m = F);
            A = d.readBoolean();
            C = "";
            d.readBoolean() && (C += "italic ");
            A && (C += "bold ");
            B = C + B + "px " + E + ", AdobeBlank";
            E = d.readInt();
            E = h.ColorUtilities.rgbToHex(E);
            A = d.readInt();
            -1 === p && (p = A);
            d.readBoolean();
            d.readInt();
            d.readInt();
            d.readInt();
            A = d.readInt();
            d.readInt();
            for (var C = d.readBoolean(), G = "", F = !1;!F;r++) {
              var F = r >= w - 1, I = k[r];
              if ("\r" !== I && "\n" !== I && (G += I, r < k.length - 1)) {
                continue;
              }
              q.addRun(B, E, G, A, C);
              if (q.runs.length) {
                n.length && (t += m);
                t += v;
                q.y = t | 0;
                t += u;
                q.ascent = v;
                q.descent = u;
                q.leading = m;
                q.align = p;
                if (b && q.width > f) {
                  for (q = q.wrap(f), G = 0;G < q.length;G++) {
                    var H = q[G], t = H.y + H.descent + H.leading;
                    n.push(H);
                    H.width > l && (l = H.width);
                  }
                } else {
                  n.push(q), q.width > l && (l = q.width);
                }
                q = new c;
              } else {
                t += v + u + m;
              }
              G = "";
              if (F) {
                u = v = 0;
                m = -4294967295;
                p = -1;
                break;
              }
              "\r" === I && "\n" === k[r + 1] && r++;
            }
            q.addRun(B, E, G, A, C);
          }
          d = k[k.length - 1];
          "\r" !== d && "\n" !== d || n.push(q);
          d = this.textRect;
          d.w = l;
          d.h = t;
          if (a) {
            if (!b) {
              f = l;
              l = e.w;
              switch(a) {
                case 1:
                  d.x = l - (f + 4) >> 1;
                  break;
                case 3:
                  d.x = l - (f + 4);
              }
              this._textBounds.setElements(d.x - 2, d.y - 2, d.w + 4, d.h + 4);
              e.w = f + 4;
            }
            e.x = d.x - 2;
            e.h = t + 4;
          } else {
            this._textBounds = e;
          }
          for (r = 0;r < n.length;r++) {
            if (e = n[r], e.width < f) {
              switch(e.align) {
                case 1:
                  e.x = f - e.width | 0;
                  break;
                case 2:
                  e.x = (f - e.width) / 2 | 0;
              }
            }
          }
          this.invalidate();
        }
      };
      b.roundBoundPoints = function(a) {
        for (var b = 0;b < a.length;b++) {
          var d = a[b];
          d.x = Math.floor(d.x + .1) + .5;
          d.y = Math.floor(d.y + .1) + .5;
        }
      };
      b.prototype.render = function(a) {
        a.save();
        var c = this._textBounds;
        this._backgroundColor && (a.fillStyle = h.ColorUtilities.rgbaToCSSStyle(this._backgroundColor), a.fillRect(c.x, c.y, c.w, c.h));
        if (this._borderColor) {
          a.strokeStyle = h.ColorUtilities.rgbaToCSSStyle(this._borderColor);
          a.lineCap = "square";
          a.lineWidth = 1;
          var e = b.absoluteBoundPoints, f = a.currentTransform;
          f ? (c = c.clone(), (new l(f.a, f.b, f.c, f.d, f.e, f.f)).transformRectangle(c, e), a.setTransform(1, 0, 0, 1, 0, 0)) : (e[0].x = c.x, e[0].y = c.y, e[1].x = c.x + c.w, e[1].y = c.y, e[2].x = c.x + c.w, e[2].y = c.y + c.h, e[3].x = c.x, e[3].y = c.y + c.h);
          b.roundBoundPoints(e);
          c = new Path2D;
          c.moveTo(e[0].x, e[0].y);
          c.lineTo(e[1].x, e[1].y);
          c.lineTo(e[2].x, e[2].y);
          c.lineTo(e[3].x, e[3].y);
          c.lineTo(e[0].x, e[0].y);
          a.stroke(c);
          f && a.setTransform(f.a, f.b, f.c, f.d, f.e, f.f);
        }
        this._coords ? this._renderChars(a) : this._renderLines(a);
        a.restore();
      };
      b.prototype._renderChars = function(a) {
        if (this._matrix) {
          var b = this._matrix;
          a.transform(b.a, b.b, b.c, b.d, b.tx, b.ty);
        }
        var b = this.lines, d = this._coords;
        d.position = 0;
        for (var c = "", e = "", f = 0;f < b.length;f++) {
          for (var k = b[f].runs, h = 0;h < k.length;h++) {
            var q = k[h];
            q.font !== c && (a.font = c = q.font);
            q.fillStyle !== e && (a.fillStyle = e = q.fillStyle);
            for (var q = q.text, n = 0;n < q.length;n++) {
              var t = d.readInt() / 20, l = d.readInt() / 20;
              a.fillText(q[n], t, l);
            }
          }
        }
      };
      b.prototype._renderLines = function(a) {
        var b = this._textBounds;
        a.beginPath();
        a.rect(b.x + 2, b.y + 2, b.w - 4, b.h - 4);
        a.clip();
        a.translate(b.x - this._scrollH + 2, b.y + 2);
        var d = this.lines, c = this._scrollV, e = 0, f = "", k = "";
        a.textAlign = "left";
        a.textBaseline = "alphabetic";
        for (var h = 0;h < d.length;h++) {
          var q = d[h], n = q.x, t = q.y;
          if (h + 1 < c) {
            e = t + q.descent + q.leading;
          } else {
            t -= e;
            if (h + 1 - c && t > b.h) {
              break;
            }
            for (var l = q.runs, v = 0;v < l.length;v++) {
              var u = l[v];
              u.font !== f && (a.font = f = u.font);
              u.fillStyle !== k && (a.fillStyle = k = u.fillStyle);
              u.underline && a.fillRect(n, t + q.descent / 2 | 0, u.width, 1);
              a.textAlign = "left";
              a.textBaseline = "alphabetic";
              if (0 < u.letterSpacing) {
                for (var m = u.text, p = 0;p < m.length;p++) {
                  a.fillText(m[p], n, t), n += w(a, m[p], u.letterSpacing);
                }
              } else {
                a.fillText(u.text, n, t), n += u.width;
              }
            }
          }
        }
      };
      b.absoluteBoundPoints = [new m(0, 0), new m(0, 0), new m(0, 0), new m(0, 0)];
      return b;
    }(k);
    p.RenderableText = t;
    k = function(a) {
      function d(d, c) {
        a.call(this);
        this._flags = 768;
        this.properties = {};
        this.setBounds(new b(0, 0, d, c));
      }
      __extends(d, a);
      Object.defineProperty(d.prototype, "text", {get:function() {
        return this._text;
      }, set:function(a) {
        this._text = a;
      }, enumerable:!0, configurable:!0});
      d.prototype.render = function(a, b, d) {
        a.save();
        a.textBaseline = "top";
        a.fillStyle = "white";
        a.fillText(this.text, 0, 0);
        a.restore();
      };
      return d;
    }(k);
    p.Label = k;
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    function r(a, b, k, h, q) {
      b = m[b - 1];
      q && (q = b / 4, k -= q, h -= q);
      q = Math.ceil((1 > k ? 1 : k) / (b - 1E-9));
      b = Math.ceil((1 > h ? 1 : h) / (b - 1E-9));
      a.x -= q;
      a.w += 2 * q;
      a.y -= b;
      a.h += 2 * b;
    }
    var a = h.ColorUtilities.clampByte, w = function() {
      function a() {
      }
      a.prototype.expandBounds = function(a) {
      };
      return a;
    }();
    p.Filter = w;
    var m = [2, 1 / 1.05, 1 / 1.35, 1 / 1.55, 1 / 1.75, 1 / 1.9, .5, 1 / 2.1, 1 / 2.2, 1 / 2.3, .4, 1 / 3, 1 / 3, 1 / 3.5, 1 / 3.5], b = function(a) {
      function b(k, h, q) {
        a.call(this);
        this.blurX = k;
        this.blurY = h;
        this.quality = q;
      }
      __extends(b, a);
      b.prototype.expandBounds = function(a) {
        r(a, this.quality, this.blurX, this.blurY, !0);
      };
      return b;
    }(w);
    p.BlurFilter = b;
    b = function(a) {
      function b(k, h, q, n, v, c, f, e, d, g, u) {
        a.call(this);
        this.alpha = k;
        this.angle = h;
        this.blurX = q;
        this.blurY = n;
        this.color = v;
        this.distance = c;
        this.hideObject = f;
        this.inner = e;
        this.knockout = d;
        this.quality = g;
        this.strength = u;
      }
      __extends(b, a);
      b.prototype.expandBounds = function(a) {
        r(a, this.quality, this.blurX, this.blurY, !1);
        if (this.distance) {
          var b = this.angle * Math.PI / 180, h = Math.cos(b) * this.distance, n = Math.sin(b) * this.distance, b = a.x + (0 <= h ? 0 : Math.floor(h)), h = a.x + a.w + Math.ceil(Math.abs(h)), l = a.y + (0 <= n ? 0 : Math.floor(n)), n = a.y + a.h + Math.ceil(Math.abs(n));
          a.x = b;
          a.w = h - b;
          a.y = l;
          a.h = n - l;
        }
      };
      return b;
    }(w);
    p.DropshadowFilter = b;
    b = function(a) {
      function b(k, h, q, n, v, c, f, e) {
        a.call(this);
        this.alpha = k;
        this.blurX = h;
        this.blurY = q;
        this.color = n;
        this.inner = v;
        this.knockout = c;
        this.quality = f;
        this.strength = e;
      }
      __extends(b, a);
      b.prototype.expandBounds = function(a) {
        this.inner || r(a, this.quality, this.blurX, this.blurY, !1);
      };
      return b;
    }(w);
    p.GlowFilter = b;
    (function(a) {
      a[a.Unknown = 0] = "Unknown";
      a[a.Identity = 1] = "Identity";
    })(p.ColorMatrixType || (p.ColorMatrixType = {}));
    w = function(b) {
      function h(a) {
        b.call(this);
        this._data = new Float32Array(a);
        this._type = 0;
      }
      __extends(h, b);
      h.prototype.clone = function() {
        var a = new h(this._data);
        a._type = this._type;
        return a;
      };
      h.prototype.set = function(a) {
        this._data.set(a._data);
        this._type = a._type;
      };
      h.prototype.toWebGLMatrix = function() {
        return new Float32Array(this._data);
      };
      h.prototype.asWebGLMatrix = function() {
        return this._data.subarray(0, 16);
      };
      h.prototype.asWebGLVector = function() {
        return this._data.subarray(16, 20);
      };
      h.prototype.isIdentity = function() {
        if (this._type & 1) {
          return !0;
        }
        var a = this._data;
        return 1 == a[0] && 0 == a[1] && 0 == a[2] && 0 == a[3] && 0 == a[4] && 1 == a[5] && 0 == a[6] && 0 == a[7] && 0 == a[8] && 0 == a[9] && 1 == a[10] && 0 == a[11] && 0 == a[12] && 0 == a[13] && 0 == a[14] && 1 == a[15] && 0 == a[16] && 0 == a[17] && 0 == a[18] && 0 == a[19];
      };
      h.createIdentity = function() {
        var a = new h([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0]);
        a._type = 1;
        return a;
      };
      h.prototype.setMultipliersAndOffsets = function(a, b, h, n, l, c, f, e) {
        for (var d = this._data, g = 0;g < d.length;g++) {
          d[g] = 0;
        }
        d[0] = a;
        d[5] = b;
        d[10] = h;
        d[15] = n;
        d[16] = l / 255;
        d[17] = c / 255;
        d[18] = f / 255;
        d[19] = e / 255;
        this._type = 0;
      };
      h.prototype.transformRGBA = function(b) {
        var h = b >> 24 & 255, q = b >> 16 & 255, n = b >> 8 & 255, l = b & 255, c = this._data;
        b = a(h * c[0] + q * c[1] + n * c[2] + l * c[3] + 255 * c[16]);
        var f = a(h * c[4] + q * c[5] + n * c[6] + l * c[7] + 255 * c[17]), e = a(h * c[8] + q * c[9] + n * c[10] + l * c[11] + 255 * c[18]), h = a(h * c[12] + q * c[13] + n * c[14] + l * c[15] + 255 * c[19]);
        return b << 24 | f << 16 | e << 8 | h;
      };
      h.prototype.multiply = function(a) {
        if (!(a._type & 1)) {
          var b = this._data, h = a._data;
          a = b[0];
          var n = b[1], l = b[2], c = b[3], f = b[4], e = b[5], d = b[6], g = b[7], m = b[8], x = b[9], u = b[10], p = b[11], r = b[12], w = b[13], S = b[14], V = b[15], ga = b[16], ha = b[17], ia = b[18], ja = b[19], J = h[0], D = h[1], z = h[2], B = h[3], E = h[4], A = h[5], C = h[6], F = h[7], G = h[8], I = h[9], H = h[10], K = h[11], L = h[12], M = h[13], N = h[14], O = h[15], P = h[16], Q = h[17], R = h[18], h = h[19];
          b[0] = a * J + f * D + m * z + r * B;
          b[1] = n * J + e * D + x * z + w * B;
          b[2] = l * J + d * D + u * z + S * B;
          b[3] = c * J + g * D + p * z + V * B;
          b[4] = a * E + f * A + m * C + r * F;
          b[5] = n * E + e * A + x * C + w * F;
          b[6] = l * E + d * A + u * C + S * F;
          b[7] = c * E + g * A + p * C + V * F;
          b[8] = a * G + f * I + m * H + r * K;
          b[9] = n * G + e * I + x * H + w * K;
          b[10] = l * G + d * I + u * H + S * K;
          b[11] = c * G + g * I + p * H + V * K;
          b[12] = a * L + f * M + m * N + r * O;
          b[13] = n * L + e * M + x * N + w * O;
          b[14] = l * L + d * M + u * N + S * O;
          b[15] = c * L + g * M + p * N + V * O;
          b[16] = a * P + f * Q + m * R + r * h + ga;
          b[17] = n * P + e * Q + x * R + w * h + ha;
          b[18] = l * P + d * Q + u * R + S * h + ia;
          b[19] = c * P + g * Q + p * R + V * h + ja;
          this._type = 0;
        }
      };
      Object.defineProperty(h.prototype, "alphaMultiplier", {get:function() {
        return this._data[15];
      }, enumerable:!0, configurable:!0});
      h.prototype.hasOnlyAlphaMultiplier = function() {
        var a = this._data;
        return 1 == a[0] && 0 == a[1] && 0 == a[2] && 0 == a[3] && 0 == a[4] && 1 == a[5] && 0 == a[6] && 0 == a[7] && 0 == a[8] && 0 == a[9] && 1 == a[10] && 0 == a[11] && 0 == a[12] && 0 == a[13] && 0 == a[14] && 0 == a[16] && 0 == a[17] && 0 == a[18] && 0 == a[19];
      };
      h.prototype.equals = function(a) {
        if (!a) {
          return !1;
        }
        if (this._type === a._type && 1 === this._type) {
          return !0;
        }
        var b = this._data;
        a = a._data;
        for (var h = 0;20 > h;h++) {
          if (.001 < Math.abs(b[h] - a[h])) {
            return !1;
          }
        }
        return !0;
      };
      h.prototype.toSVGFilterMatrix = function() {
        var a = this._data;
        return [a[0], a[4], a[8], a[12], a[16], a[1], a[5], a[9], a[13], a[17], a[2], a[6], a[10], a[14], a[18], a[3], a[7], a[11], a[15], a[19]].join(" ");
      };
      return h;
    }(w);
    p.ColorMatrix = w;
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    (function(r) {
      function a(a, b) {
        return -1 !== a.indexOf(b, this.length - b.length);
      }
      var w = p.Geometry.Point3D, m = p.Geometry.Matrix3D, b = p.Geometry.degreesToRadian, l = h.Debug.unexpected, u = h.Debug.notImplemented;
      r.SHADER_ROOT = "shaders/";
      var k = function() {
        function k(a, b) {
          this._fillColor = h.Color.Red;
          this._surfaceRegionCache = new h.LRUList;
          this.modelViewProjectionMatrix = m.createIdentity();
          this._canvas = a;
          this._options = b;
          this.gl = a.getContext("experimental-webgl", {preserveDrawingBuffer:!1, antialias:!0, stencil:!0, premultipliedAlpha:!1});
          this._programCache = Object.create(null);
          this._resize();
          this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, b.unpackPremultiplyAlpha ? this.gl.ONE : this.gl.ZERO);
          this._backgroundColor = h.Color.Black;
          this._geometry = new r.WebGLGeometry(this);
          this._tmpVertices = r.Vertex.createEmptyVertices(r.Vertex, 64);
          this._maxSurfaces = b.maxSurfaces;
          this._maxSurfaceSize = b.maxSurfaceSize;
          this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
          this.gl.enable(this.gl.BLEND);
          this.modelViewProjectionMatrix = m.create2DProjection(this._w, this._h, 2E3);
          var l = this;
          this._surfaceRegionAllocator = new p.SurfaceRegionAllocator.SimpleAllocator(function() {
            var a = l._createTexture(1024, 1024);
            return new r.WebGLSurface(1024, 1024, a);
          });
        }
        Object.defineProperty(k.prototype, "surfaces", {get:function() {
          return this._surfaceRegionAllocator.surfaces;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(k.prototype, "fillStyle", {set:function(a) {
          this._fillColor.set(h.Color.parseColor(a));
        }, enumerable:!0, configurable:!0});
        k.prototype.setBlendMode = function(a) {
          var b = this.gl;
          switch(a) {
            case 8:
              b.blendFunc(b.SRC_ALPHA, b.DST_ALPHA);
              break;
            case 3:
              b.blendFunc(b.DST_COLOR, b.ONE_MINUS_SRC_ALPHA);
              break;
            case 4:
              b.blendFunc(b.SRC_ALPHA, b.ONE);
              break;
            case 2:
            ;
            case 1:
              b.blendFunc(b.ONE, b.ONE_MINUS_SRC_ALPHA);
              break;
            default:
              u("Blend Mode: " + a);
          }
        };
        k.prototype.setBlendOptions = function() {
          this.gl.blendFunc(this._options.sourceBlendFactor, this._options.destinationBlendFactor);
        };
        k.glSupportedBlendMode = function(a) {
          switch(a) {
            case 8:
            ;
            case 3:
            ;
            case 4:
            ;
            case 1:
              return !0;
            default:
              return !1;
          }
        };
        k.prototype.create2DProjectionMatrix = function() {
          return m.create2DProjection(this._w, this._h, -this._w);
        };
        k.prototype.createPerspectiveMatrix = function(a, k, h) {
          h = b(h);
          k = m.createPerspective(b(k), 1, .1, 5E3);
          var c = new w(0, 1, 0), f = new w(0, 0, 0);
          a = new w(0, 0, a);
          a = m.createCameraLookAt(a, f, c);
          a = m.createInverse(a);
          c = m.createIdentity();
          c = m.createMultiply(c, m.createTranslation(-this._w / 2, -this._h / 2, 0));
          c = m.createMultiply(c, m.createScale(1 / this._w, -1 / this._h, .01));
          c = m.createMultiply(c, m.createYRotation(h));
          c = m.createMultiply(c, a);
          return c = m.createMultiply(c, k);
        };
        k.prototype.discardCachedImages = function() {
          2 <= p.traceLevel && p.writer && p.writer.writeLn("Discard Cache");
          for (var a = this._surfaceRegionCache.count / 2 | 0, b = 0;b < a;b++) {
            var k = this._surfaceRegionCache.pop();
            2 <= p.traceLevel && p.writer && p.writer.writeLn("Discard: " + k);
            k.texture.atlas.remove(k.region);
            k.texture = null;
          }
        };
        k.prototype.cacheImage = function(a) {
          var b = this.allocateSurfaceRegion(a.width, a.height);
          2 <= p.traceLevel && p.writer && p.writer.writeLn("Uploading Image: @ " + b.region);
          this._surfaceRegionCache.use(b);
          this.updateSurfaceRegion(a, b);
          return b;
        };
        k.prototype.allocateSurfaceRegion = function(a, b, k) {
          return this._surfaceRegionAllocator.allocate(a, b, null);
        };
        k.prototype.updateSurfaceRegion = function(a, b) {
          var k = this.gl;
          k.bindTexture(k.TEXTURE_2D, b.surface.texture);
          k.texSubImage2D(k.TEXTURE_2D, 0, b.region.x, b.region.y, k.RGBA, k.UNSIGNED_BYTE, a);
        };
        k.prototype._resize = function() {
          var a = this.gl;
          this._w = this._canvas.width;
          this._h = this._canvas.height;
          a.viewport(0, 0, this._w, this._h);
          for (var b in this._programCache) {
            this._initializeProgram(this._programCache[b]);
          }
        };
        k.prototype._initializeProgram = function(a) {
          this.gl.useProgram(a);
        };
        k.prototype._createShaderFromFile = function(b) {
          var k = r.SHADER_ROOT + b, h = this.gl;
          b = new XMLHttpRequest;
          b.open("GET", k, !1);
          b.send();
          if (a(k, ".vert")) {
            k = h.VERTEX_SHADER;
          } else {
            if (a(k, ".frag")) {
              k = h.FRAGMENT_SHADER;
            } else {
              throw "Shader Type: not supported.";
            }
          }
          return this._createShader(k, b.responseText);
        };
        k.prototype.createProgramFromFiles = function(a, b) {
          var k = a + "-" + b, c = this._programCache[k];
          c || (c = this._createProgram([this._createShaderFromFile(a), this._createShaderFromFile(b)]), this._queryProgramAttributesAndUniforms(c), this._initializeProgram(c), this._programCache[k] = c);
          return c;
        };
        k.prototype._createProgram = function(a) {
          var b = this.gl, k = b.createProgram();
          a.forEach(function(a) {
            b.attachShader(k, a);
          });
          b.linkProgram(k);
          b.getProgramParameter(k, b.LINK_STATUS) || (a = b.getProgramInfoLog(k), l("Cannot link program: " + a), b.deleteProgram(k));
          return k;
        };
        k.prototype._createShader = function(a, b) {
          var k = this.gl, c = k.createShader(a);
          k.shaderSource(c, b);
          k.compileShader(c);
          if (!k.getShaderParameter(c, k.COMPILE_STATUS)) {
            var f = k.getShaderInfoLog(c);
            l("Cannot compile shader: " + f);
            k.deleteShader(c);
            return null;
          }
          return c;
        };
        k.prototype._createTexture = function(a, b) {
          var k = this.gl, c = k.createTexture();
          k.bindTexture(k.TEXTURE_2D, c);
          k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_S, k.CLAMP_TO_EDGE);
          k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_T, k.CLAMP_TO_EDGE);
          k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MIN_FILTER, k.LINEAR);
          k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MAG_FILTER, k.LINEAR);
          k.texImage2D(k.TEXTURE_2D, 0, k.RGBA, a, b, 0, k.RGBA, k.UNSIGNED_BYTE, null);
          return c;
        };
        k.prototype._createFramebuffer = function(a) {
          var b = this.gl, k = b.createFramebuffer();
          b.bindFramebuffer(b.FRAMEBUFFER, k);
          b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, a, 0);
          b.bindFramebuffer(b.FRAMEBUFFER, null);
          return k;
        };
        k.prototype._queryProgramAttributesAndUniforms = function(a) {
          a.uniforms = {};
          a.attributes = {};
          for (var b = this.gl, k = 0, c = b.getProgramParameter(a, b.ACTIVE_ATTRIBUTES);k < c;k++) {
            var f = b.getActiveAttrib(a, k);
            a.attributes[f.name] = f;
            f.location = b.getAttribLocation(a, f.name);
          }
          k = 0;
          for (c = b.getProgramParameter(a, b.ACTIVE_UNIFORMS);k < c;k++) {
            f = b.getActiveUniform(a, k), a.uniforms[f.name] = f, f.location = b.getUniformLocation(a, f.name);
          }
        };
        Object.defineProperty(k.prototype, "target", {set:function(a) {
          var b = this.gl;
          a ? (b.viewport(0, 0, a.w, a.h), b.bindFramebuffer(b.FRAMEBUFFER, a.framebuffer)) : (b.viewport(0, 0, this._w, this._h), b.bindFramebuffer(b.FRAMEBUFFER, null));
        }, enumerable:!0, configurable:!0});
        k.prototype.clear = function(a) {
          a = this.gl;
          a.clearColor(0, 0, 0, 0);
          a.clear(a.COLOR_BUFFER_BIT);
        };
        k.prototype.clearTextureRegion = function(a, b) {
          void 0 === b && (b = h.Color.None);
          var k = this.gl, c = a.region;
          this.target = a.surface;
          k.enable(k.SCISSOR_TEST);
          k.scissor(c.x, c.y, c.w, c.h);
          k.clearColor(b.r, b.g, b.b, b.a);
          k.clear(k.COLOR_BUFFER_BIT | k.DEPTH_BUFFER_BIT);
          k.disable(k.SCISSOR_TEST);
        };
        k.prototype.sizeOf = function(a) {
          var b = this.gl;
          switch(a) {
            case b.UNSIGNED_BYTE:
              return 1;
            case b.UNSIGNED_SHORT:
              return 2;
            case this.gl.INT:
            ;
            case this.gl.FLOAT:
              return 4;
            default:
              u(a);
          }
        };
        k.MAX_SURFACES = 8;
        return k;
      }();
      r.WebGLContext = k;
    })(p.WebGL || (p.WebGL = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(h, p) {
  function r() {
    this.constructor = h;
  }
  for (var a in p) {
    p.hasOwnProperty(a) && (h[a] = p[a]);
  }
  r.prototype = p.prototype;
  h.prototype = new r;
};
(function(h) {
  (function(p) {
    (function(r) {
      var a = h.Debug.assert, w = function(b) {
        function h() {
          b.apply(this, arguments);
        }
        __extends(h, b);
        h.prototype.ensureVertexCapacity = function(b) {
          a(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 8 * b);
        };
        h.prototype.writeVertex = function(b, k) {
          a(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 8);
          this.writeVertexUnsafe(b, k);
        };
        h.prototype.writeVertexUnsafe = function(a, b) {
          var h = this._offset >> 2;
          this._f32[h] = a;
          this._f32[h + 1] = b;
          this._offset += 8;
        };
        h.prototype.writeVertex3D = function(b, k, h) {
          a(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 12);
          this.writeVertex3DUnsafe(b, k, h);
        };
        h.prototype.writeVertex3DUnsafe = function(a, b, h) {
          var l = this._offset >> 2;
          this._f32[l] = a;
          this._f32[l + 1] = b;
          this._f32[l + 2] = h;
          this._offset += 12;
        };
        h.prototype.writeTriangleElements = function(b, k, h) {
          a(0 === (this._offset & 1));
          this.ensureCapacity(this._offset + 6);
          var l = this._offset >> 1;
          this._u16[l] = b;
          this._u16[l + 1] = k;
          this._u16[l + 2] = h;
          this._offset += 6;
        };
        h.prototype.ensureColorCapacity = function(b) {
          a(0 === (this._offset & 2));
          this.ensureCapacity(this._offset + 16 * b);
        };
        h.prototype.writeColorFloats = function(b, k, h, l) {
          a(0 === (this._offset & 2));
          this.ensureCapacity(this._offset + 16);
          this.writeColorFloatsUnsafe(b, k, h, l);
        };
        h.prototype.writeColorFloatsUnsafe = function(a, b, h, l) {
          var n = this._offset >> 2;
          this._f32[n] = a;
          this._f32[n + 1] = b;
          this._f32[n + 2] = h;
          this._f32[n + 3] = l;
          this._offset += 16;
        };
        h.prototype.writeColor = function(b, k, h, l) {
          a(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 4);
          this._i32[this._offset >> 2] = l << 24 | h << 16 | k << 8 | b;
          this._offset += 4;
        };
        h.prototype.writeColorUnsafe = function(a, b, h, l) {
          this._i32[this._offset >> 2] = l << 24 | h << 16 | b << 8 | a;
          this._offset += 4;
        };
        h.prototype.writeRandomColor = function() {
          this.writeColor(Math.random(), Math.random(), Math.random(), Math.random() / 2);
        };
        return h;
      }(h.ArrayUtilities.ArrayWriter);
      r.BufferWriter = w;
      var m = function() {
        return function(a, h, m, k) {
          void 0 === k && (k = !1);
          this.name = a;
          this.size = h;
          this.type = m;
          this.normalized = k;
        };
      }();
      r.WebGLAttribute = m;
      m = function() {
        function a(b) {
          this.size = 0;
          this.attributes = b;
        }
        a.prototype.initialize = function(a) {
          for (var b = 0, k = 0;k < this.attributes.length;k++) {
            this.attributes[k].offset = b, b += a.sizeOf(this.attributes[k].type) * this.attributes[k].size;
          }
          this.size = b;
        };
        return a;
      }();
      r.WebGLAttributeList = m;
      m = function() {
        function a(b) {
          this._elementOffset = this.triangleCount = 0;
          this.context = b;
          this.array = new w(8);
          this.buffer = b.gl.createBuffer();
          this.elementArray = new w(8);
          this.elementBuffer = b.gl.createBuffer();
        }
        Object.defineProperty(a.prototype, "elementOffset", {get:function() {
          return this._elementOffset;
        }, enumerable:!0, configurable:!0});
        a.prototype.addQuad = function() {
          var a = this._elementOffset;
          this.elementArray.writeTriangleElements(a, a + 1, a + 2);
          this.elementArray.writeTriangleElements(a, a + 2, a + 3);
          this.triangleCount += 2;
          this._elementOffset += 4;
        };
        a.prototype.resetElementOffset = function() {
          this._elementOffset = 0;
        };
        a.prototype.reset = function() {
          this.array.reset();
          this.elementArray.reset();
          this.resetElementOffset();
          this.triangleCount = 0;
        };
        a.prototype.uploadBuffers = function() {
          var a = this.context.gl;
          a.bindBuffer(a.ARRAY_BUFFER, this.buffer);
          a.bufferData(a.ARRAY_BUFFER, this.array.subU8View(), a.DYNAMIC_DRAW);
          a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.elementBuffer);
          a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.elementArray.subU8View(), a.DYNAMIC_DRAW);
        };
        return a;
      }();
      r.WebGLGeometry = m;
      m = function(a) {
        function h(l, k, t) {
          a.call(this, l, k, t);
        }
        __extends(h, a);
        h.createEmptyVertices = function(a, b) {
          for (var h = [], l = 0;l < b;l++) {
            h.push(new a(0, 0, 0));
          }
          return h;
        };
        return h;
      }(p.Geometry.Point3D);
      r.Vertex = m;
      (function(a) {
        a[a.ZERO = 0] = "ZERO";
        a[a.ONE = 1] = "ONE";
        a[a.SRC_COLOR = 768] = "SRC_COLOR";
        a[a.ONE_MINUS_SRC_COLOR = 769] = "ONE_MINUS_SRC_COLOR";
        a[a.DST_COLOR = 774] = "DST_COLOR";
        a[a.ONE_MINUS_DST_COLOR = 775] = "ONE_MINUS_DST_COLOR";
        a[a.SRC_ALPHA = 770] = "SRC_ALPHA";
        a[a.ONE_MINUS_SRC_ALPHA = 771] = "ONE_MINUS_SRC_ALPHA";
        a[a.DST_ALPHA = 772] = "DST_ALPHA";
        a[a.ONE_MINUS_DST_ALPHA = 773] = "ONE_MINUS_DST_ALPHA";
        a[a.SRC_ALPHA_SATURATE = 776] = "SRC_ALPHA_SATURATE";
        a[a.CONSTANT_COLOR = 32769] = "CONSTANT_COLOR";
        a[a.ONE_MINUS_CONSTANT_COLOR = 32770] = "ONE_MINUS_CONSTANT_COLOR";
        a[a.CONSTANT_ALPHA = 32771] = "CONSTANT_ALPHA";
        a[a.ONE_MINUS_CONSTANT_ALPHA = 32772] = "ONE_MINUS_CONSTANT_ALPHA";
      })(r.WebGLBlendFactor || (r.WebGLBlendFactor = {}));
    })(p.WebGL || (p.WebGL = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(r) {
      var a = function() {
        function a(b, l, m) {
          this.texture = m;
          this.w = b;
          this.h = l;
          this._regionAllocator = new h.RegionAllocator.CompactAllocator(this.w, this.h);
        }
        a.prototype.allocate = function(a, h) {
          var m = this._regionAllocator.allocate(a, h);
          return m ? new w(this, m) : null;
        };
        a.prototype.free = function(a) {
          this._regionAllocator.free(a.region);
        };
        return a;
      }();
      r.WebGLSurface = a;
      var w = function() {
        return function(a, b) {
          this.surface = a;
          this.region = b;
          this.next = this.previous = null;
        };
      }();
      r.WebGLSurfaceRegion = w;
    })(h.WebGL || (h.WebGL = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    (function(r) {
      var a = h.Color;
      r.TILE_SIZE = 256;
      r.MIN_UNTILED_SIZE = 256;
      var w = p.Geometry.Matrix, m = p.Geometry.Rectangle, b = function(a) {
        function b() {
          a.apply(this, arguments);
          this.maxSurfaces = 8;
          this.maxSurfaceSize = 4096;
          this.animateZoom = !0;
          this.disableSurfaceUploads = !1;
          this.frameSpacing = 1E-4;
          this.drawSurfaces = this.ignoreColorMatrix = !1;
          this.drawSurface = -1;
          this.premultipliedAlpha = !1;
          this.unpackPremultiplyAlpha = !0;
          this.showTemporaryCanvases = !1;
          this.sourceBlendFactor = 1;
          this.destinationBlendFactor = 771;
        }
        __extends(b, a);
        return b;
      }(p.RendererOptions);
      r.WebGLRendererOptions = b;
      var l = function(h) {
        function k(a, k, n) {
          void 0 === n && (n = new b);
          h.call(this, a, k, n);
          this._tmpVertices = r.Vertex.createEmptyVertices(r.Vertex, 64);
          this._cachedTiles = [];
          a = this._context = new r.WebGLContext(this._canvas, n);
          this._updateSize();
          this._brush = new r.WebGLCombinedBrush(a, new r.WebGLGeometry(a));
          this._stencilBrush = new r.WebGLCombinedBrush(a, new r.WebGLGeometry(a));
          this._scratchCanvas = document.createElement("canvas");
          this._scratchCanvas.width = this._scratchCanvas.height = 2048;
          this._scratchCanvasContext = this._scratchCanvas.getContext("2d", {willReadFrequently:!0});
          this._dynamicScratchCanvas = document.createElement("canvas");
          this._dynamicScratchCanvas.width = this._dynamicScratchCanvas.height = 0;
          this._dynamicScratchCanvasContext = this._dynamicScratchCanvas.getContext("2d", {willReadFrequently:!0});
          this._uploadCanvas = document.createElement("canvas");
          this._uploadCanvas.width = this._uploadCanvas.height = 0;
          this._uploadCanvasContext = this._uploadCanvas.getContext("2d", {willReadFrequently:!0});
          n.showTemporaryCanvases && (document.getElementById("temporaryCanvasPanelContainer").appendChild(this._uploadCanvas), document.getElementById("temporaryCanvasPanelContainer").appendChild(this._scratchCanvas));
          this._clipStack = [];
        }
        __extends(k, h);
        k.prototype.resize = function() {
          this._updateSize();
          this.render();
        };
        k.prototype._updateSize = function() {
          this._viewport = new m(0, 0, this._canvas.width, this._canvas.height);
          this._context._resize();
        };
        k.prototype._cacheImageCallback = function(a, b, k) {
          var h = k.w, c = k.h, f = k.x;
          k = k.y;
          this._uploadCanvas.width = h + 2;
          this._uploadCanvas.height = c + 2;
          this._uploadCanvasContext.drawImage(b.canvas, f, k, h, c, 1, 1, h, c);
          this._uploadCanvasContext.drawImage(b.canvas, f, k, h, 1, 1, 0, h, 1);
          this._uploadCanvasContext.drawImage(b.canvas, f, k + c - 1, h, 1, 1, c + 1, h, 1);
          this._uploadCanvasContext.drawImage(b.canvas, f, k, 1, c, 0, 1, 1, c);
          this._uploadCanvasContext.drawImage(b.canvas, f + h - 1, k, 1, c, h + 1, 1, 1, c);
          return a && a.surface ? (this._options.disableSurfaceUploads || this._context.updateSurfaceRegion(this._uploadCanvas, a), a) : this._context.cacheImage(this._uploadCanvas);
        };
        k.prototype._enterClip = function(a, b, k, h) {
          k.flush();
          b = this._context.gl;
          0 === this._clipStack.length && (b.enable(b.STENCIL_TEST), b.clear(b.STENCIL_BUFFER_BIT), b.stencilFunc(b.ALWAYS, 1, 1));
          this._clipStack.push(a);
          b.colorMask(!1, !1, !1, !1);
          b.stencilOp(b.KEEP, b.KEEP, b.INCR);
          k.flush();
          b.colorMask(!0, !0, !0, !0);
          b.stencilFunc(b.NOTEQUAL, 0, this._clipStack.length);
          b.stencilOp(b.KEEP, b.KEEP, b.KEEP);
        };
        k.prototype._leaveClip = function(a, b, k, h) {
          k.flush();
          b = this._context.gl;
          if (a = this._clipStack.pop()) {
            b.colorMask(!1, !1, !1, !1), b.stencilOp(b.KEEP, b.KEEP, b.DECR), k.flush(), b.colorMask(!0, !0, !0, !0), b.stencilFunc(b.NOTEQUAL, 0, this._clipStack.length), b.stencilOp(b.KEEP, b.KEEP, b.KEEP);
          }
          0 === this._clipStack.length && b.disable(b.STENCIL_TEST);
        };
        k.prototype._renderFrame = function(a, b, k, h, c) {
        };
        k.prototype._renderSurfaces = function(b) {
          var k = this._options, h = this._context, l = this._viewport;
          if (k.drawSurfaces) {
            var c = h.surfaces, h = w.createIdentity();
            if (0 <= k.drawSurface && k.drawSurface < c.length) {
              for (var k = c[k.drawSurface | 0], c = new m(0, 0, k.w, k.h), f = c.clone();f.w > l.w;) {
                f.scale(.5, .5);
              }
              b.drawImage(new r.WebGLSurfaceRegion(k, c), f, a.White, null, h, .2);
            } else {
              f = l.w / 5;
              f > l.h / c.length && (f = l.h / c.length);
              b.fillRectangle(new m(l.w - f, 0, f, l.h), new a(0, 0, 0, .5), h, .1);
              for (var e = 0;e < c.length;e++) {
                var k = c[e], d = new m(l.w - f, e * f, f, f);
                b.drawImage(new r.WebGLSurfaceRegion(k, new m(0, 0, k.w, k.h)), d, a.White, null, h, .2);
              }
            }
            b.flush();
          }
        };
        k.prototype.render = function() {
          var b = this._options, k = this._context.gl;
          this._context.modelViewProjectionMatrix = b.perspectiveCamera ? this._context.createPerspectiveMatrix(b.perspectiveCameraDistance + (b.animateZoom ? .8 * Math.sin(Date.now() / 3E3) : 0), b.perspectiveCameraFOV, b.perspectiveCameraAngle) : this._context.create2DProjectionMatrix();
          var h = this._brush;
          k.clearColor(0, 0, 0, 0);
          k.clear(k.COLOR_BUFFER_BIT | k.DEPTH_BUFFER_BIT);
          h.reset();
          k = this._viewport;
          h.flush();
          b.paintViewport && (h.fillRectangle(k, new a(.5, 0, 0, .25), w.createIdentity(), 0), h.flush());
          this._renderSurfaces(h);
        };
        return k;
      }(p.Renderer);
      r.WebGLRenderer = l;
    })(p.WebGL || (p.WebGL = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    (function(r) {
      var a = h.Color, w = p.Geometry.Point, m = p.Geometry.Matrix3D, b = function() {
        function a(b, h, l) {
          this._target = l;
          this._context = b;
          this._geometry = h;
        }
        a.prototype.reset = function() {
        };
        a.prototype.flush = function() {
        };
        Object.defineProperty(a.prototype, "target", {get:function() {
          return this._target;
        }, set:function(a) {
          this._target !== a && this.flush();
          this._target = a;
        }, enumerable:!0, configurable:!0});
        return a;
      }();
      r.WebGLBrush = b;
      (function(a) {
        a[a.FillColor = 0] = "FillColor";
        a[a.FillTexture = 1] = "FillTexture";
        a[a.FillTextureWithColorMatrix = 2] = "FillTextureWithColorMatrix";
      })(r.WebGLCombinedBrushKind || (r.WebGLCombinedBrushKind = {}));
      var l = function(b) {
        function k(k, h, l) {
          b.call(this, k, h, l);
          this.kind = 0;
          this.color = new a(0, 0, 0, 0);
          this.sampler = 0;
          this.coordinate = new w(0, 0);
        }
        __extends(k, b);
        k.initializeAttributeList = function(a) {
          var b = a.gl;
          k.attributeList || (k.attributeList = new r.WebGLAttributeList([new r.WebGLAttribute("aPosition", 3, b.FLOAT), new r.WebGLAttribute("aCoordinate", 2, b.FLOAT), new r.WebGLAttribute("aColor", 4, b.UNSIGNED_BYTE, !0), new r.WebGLAttribute("aKind", 1, b.FLOAT), new r.WebGLAttribute("aSampler", 1, b.FLOAT)]), k.attributeList.initialize(a));
        };
        k.prototype.writeTo = function(a) {
          a = a.array;
          a.ensureAdditionalCapacity(68);
          a.writeVertex3DUnsafe(this.x, this.y, this.z);
          a.writeVertexUnsafe(this.coordinate.x, this.coordinate.y);
          a.writeColorUnsafe(255 * this.color.r, 255 * this.color.g, 255 * this.color.b, 255 * this.color.a);
          a.writeFloatUnsafe(this.kind);
          a.writeFloatUnsafe(this.sampler);
        };
        return k;
      }(r.Vertex);
      r.WebGLCombinedBrushVertex = l;
      b = function(a) {
        function b(k, h, n) {
          void 0 === n && (n = null);
          a.call(this, k, h, n);
          this._blendMode = 1;
          this._program = k.createProgramFromFiles("combined.vert", "combined.frag");
          this._surfaces = [];
          l.initializeAttributeList(this._context);
        }
        __extends(b, a);
        b.prototype.reset = function() {
          this._surfaces = [];
          this._geometry.reset();
        };
        b.prototype.drawImage = function(a, h, l, m, c, f, e) {
          void 0 === f && (f = 0);
          void 0 === e && (e = 1);
          if (!a || !a.surface) {
            return !0;
          }
          h = h.clone();
          this._colorMatrix && (m && this._colorMatrix.equals(m) || this.flush());
          this._colorMatrix = m;
          this._blendMode !== e && (this.flush(), this._blendMode = e);
          e = this._surfaces.indexOf(a.surface);
          0 > e && (8 === this._surfaces.length && this.flush(), this._surfaces.push(a.surface), e = this._surfaces.length - 1);
          var d = b._tmpVertices, g = a.region.clone();
          g.offset(1, 1).resize(-2, -2);
          g.scale(1 / a.surface.w, 1 / a.surface.h);
          c.transformRectangle(h, d);
          for (a = 0;4 > a;a++) {
            d[a].z = f;
          }
          d[0].coordinate.x = g.x;
          d[0].coordinate.y = g.y;
          d[1].coordinate.x = g.x + g.w;
          d[1].coordinate.y = g.y;
          d[2].coordinate.x = g.x + g.w;
          d[2].coordinate.y = g.y + g.h;
          d[3].coordinate.x = g.x;
          d[3].coordinate.y = g.y + g.h;
          for (a = 0;4 > a;a++) {
            f = b._tmpVertices[a], f.kind = m ? 2 : 1, f.color.set(l), f.sampler = e, f.writeTo(this._geometry);
          }
          this._geometry.addQuad();
          return !0;
        };
        b.prototype.fillRectangle = function(a, h, l, m) {
          void 0 === m && (m = 0);
          l.transformRectangle(a, b._tmpVertices);
          for (a = 0;4 > a;a++) {
            l = b._tmpVertices[a], l.kind = 0, l.color.set(h), l.z = m, l.writeTo(this._geometry);
          }
          this._geometry.addQuad();
        };
        b.prototype.flush = function() {
          var a = this._geometry, b = this._program, k = this._context.gl, h;
          a.uploadBuffers();
          k.useProgram(b);
          this._target ? (h = m.create2DProjection(this._target.w, this._target.h, 2E3), h = m.createMultiply(h, m.createScale(1, -1, 1))) : h = this._context.modelViewProjectionMatrix;
          k.uniformMatrix4fv(b.uniforms.uTransformMatrix3D.location, !1, h.asWebGLMatrix());
          this._colorMatrix && (k.uniformMatrix4fv(b.uniforms.uColorMatrix.location, !1, this._colorMatrix.asWebGLMatrix()), k.uniform4fv(b.uniforms.uColorVector.location, this._colorMatrix.asWebGLVector()));
          for (h = 0;h < this._surfaces.length;h++) {
            k.activeTexture(k.TEXTURE0 + h), k.bindTexture(k.TEXTURE_2D, this._surfaces[h].texture);
          }
          k.uniform1iv(b.uniforms["uSampler[0]"].location, [0, 1, 2, 3, 4, 5, 6, 7]);
          k.bindBuffer(k.ARRAY_BUFFER, a.buffer);
          var c = l.attributeList.size, f = l.attributeList.attributes;
          for (h = 0;h < f.length;h++) {
            var e = f[h], d = b.attributes[e.name].location;
            k.enableVertexAttribArray(d);
            k.vertexAttribPointer(d, e.size, e.type, e.normalized, c, e.offset);
          }
          this._context.setBlendOptions();
          this._context.target = this._target;
          k.bindBuffer(k.ELEMENT_ARRAY_BUFFER, a.elementBuffer);
          k.drawElements(k.TRIANGLES, 3 * a.triangleCount, k.UNSIGNED_SHORT, 0);
          this.reset();
        };
        b._tmpVertices = r.Vertex.createEmptyVertices(l, 4);
        b._depth = 1;
        return b;
      }(b);
      r.WebGLCombinedBrush = b;
    })(p.WebGL || (p.WebGL = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(h) {
    (function(h) {
      var a = CanvasRenderingContext2D.prototype.save, p = CanvasRenderingContext2D.prototype.clip, m = CanvasRenderingContext2D.prototype.fill, b = CanvasRenderingContext2D.prototype.stroke, l = CanvasRenderingContext2D.prototype.restore, u = CanvasRenderingContext2D.prototype.beginPath;
      h.notifyReleaseChanged = function() {
        CanvasRenderingContext2D.prototype.save = a;
        CanvasRenderingContext2D.prototype.clip = p;
        CanvasRenderingContext2D.prototype.fill = m;
        CanvasRenderingContext2D.prototype.stroke = b;
        CanvasRenderingContext2D.prototype.restore = l;
        CanvasRenderingContext2D.prototype.beginPath = u;
      };
      CanvasRenderingContext2D.prototype.enterBuildingClippingRegion = function() {
        this.buildingClippingRegionDepth || (this.buildingClippingRegionDepth = 0);
        this.buildingClippingRegionDepth++;
      };
      CanvasRenderingContext2D.prototype.leaveBuildingClippingRegion = function() {
        this.buildingClippingRegionDepth--;
      };
    })(h.Canvas2D || (h.Canvas2D = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    (function(r) {
      function a(a, b) {
        var h = a / 2;
        switch(b) {
          case 0:
            return 0;
          case 1:
            return h / 2.7;
          case 2:
            return h / 1.28;
          default:
            return h;
        }
      }
      function w(a) {
        var b = "source-over";
        switch(a) {
          case 1:
          ;
          case 2:
            break;
          case 3:
            b = "multiply";
            break;
          case 8:
          ;
          case 4:
            b = "screen";
            break;
          case 5:
            b = "lighten";
            break;
          case 6:
            b = "darken";
            break;
          case 7:
            b = "difference";
            break;
          case 13:
            b = "overlay";
            break;
          case 14:
            b = "hard-light";
            break;
          case 11:
            b = "destination-in";
            break;
          case 12:
            b = "destination-out";
            break;
          default:
            h.Debug.somewhatImplemented("Blend Mode: " + p.BlendMode[a]);
        }
        return b;
      }
      var m = h.NumberUtilities.clamp;
      navigator.userAgent.indexOf("Firefox");
      var b = function() {
        function b() {
        }
        b._prepareSVGFilters = function() {
          if (!b._svgBlurFilter) {
            var a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            a.setAttribute("style", "display:block;width:0px;height:0px");
            var h = document.createElementNS("http://www.w3.org/2000/svg", "defs"), l = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            l.setAttribute("id", "svgBlurFilter");
            var m = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
            m.setAttribute("stdDeviation", "0 0");
            l.appendChild(m);
            h.appendChild(l);
            b._svgBlurFilter = m;
            l = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            l.setAttribute("id", "svgDropShadowFilter");
            m = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
            m.setAttribute("in", "SourceAlpha");
            m.setAttribute("stdDeviation", "3");
            l.appendChild(m);
            b._svgDropshadowFilterBlur = m;
            m = document.createElementNS("http://www.w3.org/2000/svg", "feOffset");
            m.setAttribute("dx", "0");
            m.setAttribute("dy", "0");
            m.setAttribute("result", "offsetblur");
            l.appendChild(m);
            b._svgDropshadowFilterOffset = m;
            m = document.createElementNS("http://www.w3.org/2000/svg", "feFlood");
            m.setAttribute("flood-color", "rgba(0,0,0,1)");
            l.appendChild(m);
            b._svgDropshadowFilterFlood = m;
            m = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
            m.setAttribute("in2", "offsetblur");
            m.setAttribute("operator", "in");
            l.appendChild(m);
            m = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
            m.setAttribute("in2", "SourceAlpha");
            m.setAttribute("operator", "out");
            m.setAttribute("result", "outer");
            l.appendChild(m);
            var m = document.createElementNS("http://www.w3.org/2000/svg", "feMerge"), c = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
            m.appendChild(c);
            c = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
            m.appendChild(c);
            b._svgDropshadowMergeNode = c;
            l.appendChild(m);
            h.appendChild(l);
            l = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            l.setAttribute("id", "svgColorMatrixFilter");
            c = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
            c.setAttribute("color-interpolation-filters", "sRGB");
            c.setAttribute("in", "SourceGraphic");
            c.setAttribute("type", "matrix");
            l.appendChild(c);
            m = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
            m.setAttribute("in2", "SourceAlpha");
            m.setAttribute("operator", "in");
            l.appendChild(m);
            h.appendChild(l);
            b._svgColorMatrixFilter = c;
            a.appendChild(h);
            document.documentElement.appendChild(a);
          }
        };
        b._applyFilter = function(l, q, n) {
          if (b._svgFiltersAreSupported) {
            if (b._prepareSVGFilters(), b._removeFilter(q), n instanceof p.BlurFilter) {
              var m = a(l, n.quality);
              b._svgBlurFilter.setAttribute("stdDeviation", n.blurX * m + " " + n.blurY * m);
              q.filter = "url(#svgBlurFilter)";
            } else {
              n instanceof p.DropshadowFilter ? (m = a(l, n.quality), b._svgDropshadowFilterBlur.setAttribute("stdDeviation", n.blurX * m + " " + n.blurY * m), b._svgDropshadowFilterOffset.setAttribute("dx", String(Math.cos(n.angle * Math.PI / 180) * n.distance * l)), b._svgDropshadowFilterOffset.setAttribute("dy", String(Math.sin(n.angle * Math.PI / 180) * n.distance * l)), b._svgDropshadowFilterFlood.setAttribute("flood-color", h.ColorUtilities.rgbaToCSSStyle(n.color << 8 | Math.round(255 * n.alpha))), 
              b._svgDropshadowMergeNode.setAttribute("in", n.knockout ? "outer" : "SourceGraphic"), q.filter = "url(#svgDropShadowFilter)") : n instanceof p.ColorMatrix && (b._svgColorMatrixFilter.setAttribute("values", n.toSVGFilterMatrix()), q.filter = "url(#svgColorMatrixFilter)");
            }
          }
        };
        b._removeFilter = function(a) {
          a.filter = "none";
        };
        b._applyColorMatrix = function(a, h) {
          h.isIdentity() ? (a.globalAlpha = 1, a.globalColorMatrix = null) : h.hasOnlyAlphaMultiplier() ? (a.globalAlpha = m(h.alphaMultiplier, 0, 1), a.globalColorMatrix = null) : (a.globalAlpha = 1, b._svgFiltersAreSupported ? (b._applyFilter(1, a, h), a.globalColorMatrix = null) : a.globalColorMatrix = h);
        };
        b._svgFiltersAreSupported = !!Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype, "filter");
        return b;
      }();
      r.Filters = b;
      p.filters && b._svgFiltersAreSupported && ("registerScratchCanvas" in window || (window.registerScratchCanvas = function(a) {
        a.style.display = "none";
        document.body.appendChild(a);
      }));
      var l = function() {
        function a(b, h, k, l) {
          this.surface = b;
          this.region = h;
          this.w = k;
          this.h = l;
        }
        a.prototype.free = function() {
          this.surface.free(this);
        };
        a._ensureCopyCanvasSize = function(b, l) {
          var n;
          if (a._copyCanvasContext) {
            if (n = a._copyCanvasContext.canvas, n.width < b || n.height < l) {
              n.width = h.IntegerUtilities.nearestPowerOfTwo(b), n.height = h.IntegerUtilities.nearestPowerOfTwo(l);
            }
          } else {
            n = document.createElement("canvas"), "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(n), n.width = h.IntegerUtilities.nearestPowerOfTwo(b), n.height = h.IntegerUtilities.nearestPowerOfTwo(l), a._copyCanvasContext = n.getContext("2d");
          }
        };
        a.prototype.draw = function(h, l, n, m, c, f, e, d, g) {
          this.context.setTransform(1, 0, 0, 1, 0, 0);
          var p, x, u = 0, r = 0;
          h.context.canvas === this.context.canvas ? (a._ensureCopyCanvasSize(m, c), x = a._copyCanvasContext, x.clearRect(0, 0, m, c), x.drawImage(h.surface.canvas, h.region.x, h.region.y, m, c, 0, 0, m, c), p = x, r = u = 0) : (p = h.surface.context, u = h.region.x, r = h.region.y);
          a: {
            switch(e) {
              case 11:
                h = !0;
                break a;
              default:
                h = !1;
            }
          }
          h && (this.context.save(), this.context.beginPath(), this.context.rect(l, n, m, c), this.context.clip());
          this.context.globalAlpha = 1;
          this.context.globalCompositeOperation = w(e);
          if (d) {
            f && !f.isIdentity() && (d = d.concat(f));
            f = 0;
            if (1 < d.length) {
              var W, U, S;
              x ? (e = x, x = p, p = e) : (a._ensureCopyCanvasSize(m, c), x = a._copyCanvasContext, U = W = 0);
              for (;f < d.length - 1;f++) {
                x.clearRect(0, 0, m, c), b._applyFilter(g, x, d[f]), x.drawImage(p.canvas, u, r, m, c, W, U, m, c), b._removeFilter(x), e = x, U = u, S = r, x = p, p = e, r = u = W, W = U, U = S;
              }
              b._removeFilter(p);
              b._removeFilter(x);
            }
            b._applyFilter(g, this.context, d[f]);
          }
          this.context.drawImage(p.canvas, u, r, m, c, l, n, m, c);
          this.context.globalCompositeOperation = w(1);
          b._removeFilter(this.context);
          h && this.context.restore();
        };
        Object.defineProperty(a.prototype, "context", {get:function() {
          return this.surface.context;
        }, enumerable:!0, configurable:!0});
        a.prototype.resetTransform = function() {
          this.surface.context.setTransform(1, 0, 0, 1, 0, 0);
        };
        a.prototype.reset = function() {
          var a = this.surface.context;
          a.setTransform(1, 0, 0, 1, 0, 0);
          a.fillStyle = "#000000";
          a.strokeStyle = "#000000";
          a.globalAlpha = 1;
          a.globalColorMatrix = null;
          a.globalCompositeOperation = w(1);
        };
        a.prototype.fill = function(a) {
          var b = this.surface.context, h = this.region;
          b.fillStyle = a;
          b.fillRect(h.x, h.y, h.w, h.h);
        };
        a.prototype.clear = function(a) {
          var b = this.surface.context, h = this.region;
          a || (a = h);
          b.clearRect(a.x, a.y, a.w, a.h);
        };
        return a;
      }();
      r.Canvas2DSurfaceRegion = l;
      var u = function() {
        function a(b, h) {
          this.canvas = b;
          this.context = b.getContext("2d");
          this.w = b.width;
          this.h = b.height;
          this._regionAllocator = h;
        }
        a.prototype.allocate = function(a, b) {
          var h = this._regionAllocator.allocate(a, b);
          return h ? new l(this, h, a, b) : null;
        };
        a.prototype.free = function(a) {
          this._regionAllocator.free(a.region);
        };
        return a;
      }();
      r.Canvas2DSurface = u;
    })(p.Canvas2D || (p.Canvas2D = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    (function(r) {
      var a = h.Debug.assert, w = h.GFX.Geometry.Rectangle, m = h.GFX.Geometry.Point, b = h.GFX.Geometry.Matrix, l = h.NumberUtilities.clamp, u = h.NumberUtilities.pow2, k = function() {
        return function(a, b) {
          this.surfaceRegion = a;
          this.scale = b;
        };
      }();
      r.MipMapLevel = k;
      var t = function() {
        function a(b, d, g, c) {
          this._node = d;
          this._levels = [];
          this._surfaceRegionAllocator = g;
          this._size = c;
          this._renderer = b;
        }
        a.prototype.getLevel = function(a) {
          a = Math.max(a.getAbsoluteScaleX(), a.getAbsoluteScaleY());
          var b = 0;
          1 !== a && (b = l(Math.round(Math.log(a) / Math.LN2), -5, 3));
          this._node.hasFlags(512) || (b = l(b, -5, 0));
          a = u(b);
          var g = 5 + b, b = this._levels[g];
          if (!b) {
            var c = this._node.getBounds().clone();
            c.scale(a, a);
            c.snap();
            var f = this._surfaceRegionAllocator.allocate(c.w, c.h, null), h = f.region, b = this._levels[g] = new k(f, a), g = new n(f);
            g.clip.set(h);
            g.matrix.setElements(a, 0, 0, a, h.x - c.x, h.y - c.y);
            g.flags |= 64;
            this._renderer.renderNodeWithState(this._node, g);
            g.free();
          }
          return b;
        };
        return a;
      }();
      r.MipMap = t;
      (function(a) {
        a[a.NonZero = 0] = "NonZero";
        a[a.EvenOdd = 1] = "EvenOdd";
      })(r.FillRule || (r.FillRule = {}));
      var q = function(a) {
        function b() {
          a.apply(this, arguments);
          this.blending = this.imageSmoothing = this.snapToDevicePixels = !0;
          this.debugLayers = !1;
          this.filters = this.masking = !0;
          this.cacheShapes = !1;
          this.cacheShapesMaxSize = 256;
          this.cacheShapesThreshold = 16;
          this.alpha = !1;
        }
        __extends(b, a);
        return b;
      }(p.RendererOptions);
      r.Canvas2DRendererOptions = q;
      (function(a) {
        a[a.None = 0] = "None";
        a[a.IgnoreNextLayer = 1] = "IgnoreNextLayer";
        a[a.RenderMask = 2] = "RenderMask";
        a[a.IgnoreMask = 4] = "IgnoreMask";
        a[a.PaintStencil = 8] = "PaintStencil";
        a[a.PaintClip = 16] = "PaintClip";
        a[a.IgnoreRenderable = 32] = "IgnoreRenderable";
        a[a.IgnoreNextRenderWithCache = 64] = "IgnoreNextRenderWithCache";
        a[a.CacheShapes = 256] = "CacheShapes";
        a[a.PaintFlashing = 512] = "PaintFlashing";
        a[a.PaintBounds = 1024] = "PaintBounds";
        a[a.PaintDirtyRegion = 2048] = "PaintDirtyRegion";
        a[a.ImageSmoothing = 4096] = "ImageSmoothing";
        a[a.PixelSnapping = 8192] = "PixelSnapping";
      })(r.RenderFlags || (r.RenderFlags = {}));
      w.createMaxI16();
      var n = function(a) {
        function c(d) {
          a.call(this);
          this.clip = w.createEmpty();
          this.clipList = [];
          this.clipPath = null;
          this.flags = 0;
          this.target = null;
          this.matrix = b.createIdentity();
          this.colorMatrix = p.ColorMatrix.createIdentity();
          c.allocationCount++;
          this.target = d;
        }
        __extends(c, a);
        c.prototype.set = function(a) {
          this.clip.set(a.clip);
          this.clipPath = a.clipPath;
          this.target = a.target;
          this.matrix.set(a.matrix);
          this.colorMatrix.set(a.colorMatrix);
          this.flags = a.flags;
          h.ArrayUtilities.copyFrom(this.clipList, a.clipList);
        };
        c.prototype.clone = function() {
          var a = c.allocate();
          a || (a = new c(this.target));
          a.set(this);
          return a;
        };
        c.allocate = function() {
          var a = c._dirtyStack, b = null;
          a.length && (b = a.pop());
          return b;
        };
        c.prototype.free = function() {
          this.clipPath = null;
          c._dirtyStack.push(this);
        };
        c.prototype.transform = function(a) {
          var b = this.clone();
          b.matrix.preMultiply(a.getMatrix());
          a.hasColorMatrix() && b.colorMatrix.multiply(a.getColorMatrix());
          return b;
        };
        c.prototype.hasFlags = function(a) {
          return (this.flags & a) === a;
        };
        c.prototype.removeFlags = function(a) {
          this.flags &= ~a;
        };
        c.prototype.toggleFlags = function(a, b) {
          this.flags = b ? this.flags | a : this.flags & ~a;
        };
        c.prototype.beginClipPath = function(a) {
          this.target.context.save();
          this.clipPath = new Path2D;
        };
        c.prototype.applyClipPath = function() {
          var a = this.target.context;
          a.setTransform(1, 0, 0, 1, 0, 0);
          a.clip(this.clipPath);
          var b = this.matrix;
          a.setTransform(b.a, b.b, b.c, b.d, b.tx, b.ty);
        };
        c.prototype.closeClipPath = function() {
          this.target.context.restore();
        };
        c.allocationCount = 0;
        c._dirtyStack = [];
        return c;
      }(p.State);
      r.RenderState = n;
      var v = function() {
        function a() {
          this.culledNodes = this.groups = this.shapes = this._count = 0;
        }
        a.prototype.enter = function(a) {
          this._count++;
        };
        a.prototype.leave = function() {
        };
        return a;
      }();
      r.FrameInfo = v;
      var c = function(c) {
        function e(a, b, h) {
          void 0 === h && (h = new q);
          c.call(this, a, b, h);
          this._visited = 0;
          this._frameInfo = new v;
          this._fontSize = 0;
          this._layers = [];
          if (a instanceof HTMLCanvasElement) {
            var k = a;
            this._viewport = new w(0, 0, k.width, k.height);
            this._target = this._createTarget(k);
          } else {
            this._addLayer("Background Layer");
            h = this._addLayer("Canvas Layer");
            k = document.createElement("canvas");
            h.appendChild(k);
            this._viewport = new w(0, 0, a.scrollWidth, a.scrollHeight);
            var l = this;
            b.addEventListener(1, function() {
              l._onStageBoundsChanged(k);
            });
            this._onStageBoundsChanged(k);
          }
          e._prepareSurfaceAllocators();
        }
        __extends(e, c);
        e.prototype._addLayer = function(a) {
          a = document.createElement("div");
          a.style.position = "absolute";
          a.style.overflow = "hidden";
          a.style.width = "100%";
          a.style.height = "100%";
          a.style.zIndex = this._layers.length + "";
          this._container.appendChild(a);
          this._layers.push(a);
          return a;
        };
        Object.defineProperty(e.prototype, "_backgroundVideoLayer", {get:function() {
          return this._layers[0];
        }, enumerable:!0, configurable:!0});
        e.prototype._createTarget = function(a) {
          return new r.Canvas2DSurfaceRegion(new r.Canvas2DSurface(a), new p.RegionAllocator.Region(0, 0, a.width, a.height), a.width, a.height);
        };
        e.prototype._onStageBoundsChanged = function(a) {
          var b = this._stage.getBounds(!0);
          b.snap();
          for (var c = this._devicePixelRatio = window.devicePixelRatio || 1, e = b.w / c + "px", c = b.h / c + "px", f = 0;f < this._layers.length;f++) {
            var h = this._layers[f];
            h.style.width = e;
            h.style.height = c;
          }
          a.width = b.w;
          a.height = b.h;
          a.style.position = "absolute";
          a.style.width = e;
          a.style.height = c;
          this._target = this._createTarget(a);
          this._fontSize = 10 * this._devicePixelRatio;
        };
        e._prepareSurfaceAllocators = function() {
          e._initializedCaches || (e._surfaceCache = new p.SurfaceRegionAllocator.SimpleAllocator(function(a, b) {
            var c = document.createElement("canvas");
            "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(c);
            var e = Math.max(1024, a), f = Math.max(1024, b);
            c.width = e;
            c.height = f;
            var h = null, h = 512 <= a || 512 <= b ? new p.RegionAllocator.GridAllocator(e, f, e, f) : new p.RegionAllocator.BucketAllocator(e, f);
            return new r.Canvas2DSurface(c, h);
          }), e._shapeCache = new p.SurfaceRegionAllocator.SimpleAllocator(function(a, b) {
            var c = document.createElement("canvas");
            "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(c);
            c.width = 1024;
            c.height = 1024;
            var e = e = new p.RegionAllocator.CompactAllocator(1024, 1024);
            return new r.Canvas2DSurface(c, e);
          }), e._initializedCaches = !0);
        };
        e.prototype.render = function() {
          var a = this._stage, b = this._target, c = this._options, e = this._viewport;
          b.reset();
          b.context.save();
          b.context.beginPath();
          b.context.rect(e.x, e.y, e.w, e.h);
          b.context.clip();
          this._renderStageToTarget(b, a, e);
          b.reset();
          c.paintViewport && (b.context.beginPath(), b.context.rect(e.x, e.y, e.w, e.h), b.context.strokeStyle = "#FF4981", b.context.lineWidth = 2, b.context.stroke());
          b.context.restore();
        };
        e.prototype.renderNode = function(a, b, c) {
          var e = new n(this._target);
          e.clip.set(b);
          e.flags = 256;
          e.matrix.set(c);
          a.visit(this, e);
          e.free();
        };
        e.prototype.renderNodeWithState = function(a, b) {
          a.visit(this, b);
        };
        e.prototype._renderWithCache = function(a, b) {
          var c = b.matrix, f = a.getBounds();
          if (f.isEmpty()) {
            return !1;
          }
          var h = this._options.cacheShapesMaxSize, k = Math.max(c.getAbsoluteScaleX(), c.getAbsoluteScaleY()), l = !!(b.flags & 16), n = !!(b.flags & 8);
          if (b.hasFlags(256)) {
            if (n || l || !b.colorMatrix.isIdentity() || a.hasFlags(256) || 100 < this._options.cacheShapesThreshold || f.w * k > h || f.h * k > h) {
              return !1;
            }
            (k = a.properties.mipMap) || (k = a.properties.mipMap = new t(this, a, e._shapeCache, h));
            l = k.getLevel(c);
            h = l.surfaceRegion;
            k = h.region;
            return l ? (l = b.target.context, l.imageSmoothingEnabled = l.mozImageSmoothingEnabled = !0, l.setTransform(c.a, c.b, c.c, c.d, c.tx, c.ty), l.drawImage(h.surface.canvas, k.x, k.y, k.w, k.h, f.x, f.y, f.w, f.h), !0) : !1;
          }
        };
        e.prototype._intersectsClipList = function(a, b) {
          var c = a.getBounds(!0), e = !1;
          b.matrix.transformRectangleAABB(c);
          b.clip.intersects(c) && (e = !0);
          var f = b.clipList;
          if (e && f.length) {
            for (var e = !1, h = 0;h < f.length;h++) {
              if (c.intersects(f[h])) {
                e = !0;
                break;
              }
            }
          }
          c.free();
          return e;
        };
        e.prototype.visitGroup = function(a, b) {
          this._frameInfo.groups++;
          a.getBounds();
          if ((!a.hasFlags(4) || b.flags & 4) && a.hasFlags(1)) {
            var c = b.flags & 1;
            if (!c && ((1 !== a.getLayer().blendMode || a.getLayer().mask) && this._options.blending || a.getLayer().filters && this._options.filters)) {
              b = b.clone(), b.flags |= 1, this._renderLayer(a, b), b.free();
            } else {
              if (c && b.removeFlags(1), this._intersectsClipList(a, b)) {
                for (var c = null, e = a.getChildren(), f = 0;f < e.length;f++) {
                  var h = e[f], k = h.getTransform(), l = b.transform(k);
                  l.toggleFlags(4096, h.hasFlags(64));
                  if (0 <= h.clip) {
                    c = c || new Uint8Array(e.length);
                    c[h.clip + f]++;
                    var n = l.clone();
                    n.flags |= 16;
                    n.beginClipPath(k.getMatrix());
                    h.visit(this, n);
                    n.applyClipPath();
                    n.free();
                  } else {
                    h.visit(this, l);
                  }
                  if (c && 0 < c[f]) {
                    for (;c[f]--;) {
                      b.closeClipPath();
                    }
                  }
                  l.free();
                }
              } else {
                this._frameInfo.culledNodes++;
              }
            }
            this._renderDebugInfo(a, b);
          }
        };
        e.prototype._renderDebugInfo = function(a, b) {
          if (b.flags & 1024) {
            var c = b.target.context, f = a.getBounds(!0), k = a.properties.style;
            k || (k = a.properties.style = h.Color.randomColor(.4).toCSSStyle());
            c.strokeStyle = k;
            b.matrix.transformRectangleAABB(f);
            c.setTransform(1, 0, 0, 1, 0, 0);
            f.free();
            f = a.getBounds();
            k = e._debugPoints;
            b.matrix.transformRectangle(f, k);
            c.lineWidth = 1;
            c.beginPath();
            c.moveTo(k[0].x, k[0].y);
            c.lineTo(k[1].x, k[1].y);
            c.lineTo(k[2].x, k[2].y);
            c.lineTo(k[3].x, k[3].y);
            c.lineTo(k[0].x, k[0].y);
            c.stroke();
          }
        };
        e.prototype.visitStage = function(a, b) {
          var c = b.target.context, e = a.getBounds(!0);
          b.matrix.transformRectangleAABB(e);
          e.intersect(b.clip);
          b.target.reset();
          b = b.clone();
          this._options.clear && b.target.clear(b.clip);
          a.hasFlags(2) || !a.color || b.flags & 32 || (this._container.style.backgroundColor = a.color.toCSSStyle());
          this.visitGroup(a, b);
          a.dirtyRegion && (c.restore(), b.target.reset(), c.globalAlpha = .4, b.hasFlags(2048) && a.dirtyRegion.render(b.target.context), a.dirtyRegion.clear());
          b.free();
        };
        e.prototype.visitShape = function(a, b) {
          if (this._intersectsClipList(a, b)) {
            var c = b.matrix;
            b.flags & 8192 && (c = c.clone(), c.snap());
            var e = b.target.context;
            r.Filters._applyColorMatrix(e, b.colorMatrix);
            a.source instanceof p.RenderableVideo ? this.visitRenderableVideo(a.source, b) : 0 < e.globalAlpha && this.visitRenderable(a.source, b, a.ratio);
            b.flags & 8192 && c.free();
            r.Filters._removeFilter(e);
          }
        };
        e.prototype.visitRenderableVideo = function(a, b) {
          if (a.video && a.video.videoWidth) {
            var c = this._devicePixelRatio, e = b.matrix.clone();
            e.scale(1 / c, 1 / c);
            var c = a.getBounds(), f = h.GFX.Geometry.Matrix.createIdentity();
            f.scale(c.w / a.video.videoWidth, c.h / a.video.videoHeight);
            e.preMultiply(f);
            f.free();
            c = e.toCSSTransform();
            a.video.style.transformOrigin = "0 0";
            a.video.style.transform = c;
            var k = this._backgroundVideoLayer;
            k !== a.video.parentElement && (k.appendChild(a.video), a.addEventListener(2, function U(a) {
              k.removeChild(a.video);
              a.removeEventListener(2, U);
            }));
            e.free();
          }
        };
        e.prototype.visitRenderable = function(a, b, c) {
          var e = a.getBounds();
          if (!(b.flags & 32 || e.isEmpty())) {
            if (b.hasFlags(64)) {
              b.removeFlags(64);
            } else {
              if (this._renderWithCache(a, b)) {
                return;
              }
            }
            var f = b.matrix, e = b.target.context, h = !!(b.flags & 16), k = !!(b.flags & 8);
            e.setTransform(f.a, f.b, f.c, f.d, f.tx, f.ty);
            this._frameInfo.shapes++;
            e.imageSmoothingEnabled = e.mozImageSmoothingEnabled = b.hasFlags(4096);
            f = a.properties.renderCount || 0;
            a.properties.renderCount = ++f;
            a.render(e, c, null, h ? b.clipPath : null, k);
          }
        };
        e.prototype._renderLayer = function(a, b) {
          var c = a.getLayer(), e = c.mask;
          if (e) {
            var f = !a.hasFlags(16) || !e.hasFlags(16);
            this._renderWithMask(a, e, c.blendMode, f, b);
          } else {
            e = w.allocate();
            if (f = this._renderToTemporarySurface(a, a.getLayerBounds(!!this._options.filters), b, e, b.target.surface)) {
              b.target.draw(f, e.x, e.y, e.w, e.h, b.colorMatrix, this._options.blending ? c.blendMode : 1, this._options.filters ? c.filters : null, this._devicePixelRatio), f.free();
            }
            e.free();
          }
        };
        e.prototype._renderWithMask = function(a, b, c, e, f) {
          var h = b.getTransform().getConcatenatedMatrix(!0);
          b.parent || (h = h.scale(this._devicePixelRatio, this._devicePixelRatio));
          var k = a.getBounds().clone();
          f.matrix.transformRectangleAABB(k);
          k.snap();
          if (!k.isEmpty()) {
            var l = b.getBounds().clone();
            h.transformRectangleAABB(l);
            l.snap();
            if (!l.isEmpty()) {
              var n = f.clip.clone();
              n.intersect(k);
              n.intersect(l);
              n.snap();
              n.isEmpty() || (k = f.clone(), k.clip.set(n), a = this._renderToTemporarySurface(a, a.getBounds(), k, w.createEmpty(), null), k.free(), l = f.clone(), l.clip.set(n), l.matrix = h, l.flags |= 4, e && (l.flags |= 8), b = this._renderToTemporarySurface(b, b.getBounds(), l, w.createEmpty(), a.surface), l.free(), a.draw(b, 0, 0, n.w, n.h, l.colorMatrix, 11, null, this._devicePixelRatio), f.target.draw(a, n.x, n.y, n.w, n.h, k.colorMatrix, c, null, this._devicePixelRatio), b.free(), a.free());
            }
          }
        };
        e.prototype._renderStageToTarget = function(a, c, e) {
          w.allocationCount = b.allocationCount = n.allocationCount = 0;
          a = new n(a);
          a.clip.set(e);
          this._options.paintRenderable || (a.flags |= 32);
          this._options.paintBounds && (a.flags |= 1024);
          this._options.paintDirtyRegion && (a.flags |= 2048);
          this._options.paintFlashing && (a.flags |= 512);
          this._options.cacheShapes && (a.flags |= 256);
          this._options.imageSmoothing && (a.flags |= 4096);
          this._options.snapToDevicePixels && (a.flags |= 8192);
          this._frameInfo.enter(a);
          c.visit(this, a);
          this._frameInfo.leave();
        };
        e.prototype._renderToTemporarySurface = function(a, b, c, e, f) {
          var h = c.matrix;
          b = b.clone();
          h.transformRectangleAABB(b);
          b.snap();
          e.set(b);
          e.intersect(c.clip);
          e.snap();
          if (e.isEmpty()) {
            return null;
          }
          f = this._allocateSurface(e.w, e.h, f);
          b = f.region;
          b = new w(b.x, b.y, e.w, e.h);
          f.context.setTransform(1, 0, 0, 1, 0, 0);
          f.clear();
          h = h.clone();
          h.translate(b.x - e.x, b.y - e.y);
          f.context.save();
          c = c.clone();
          c.target = f;
          c.matrix = h;
          c.clip.set(b);
          a.visit(this, c);
          c.free();
          f.context.restore();
          return f;
        };
        e.prototype._allocateSurface = function(a, b, c) {
          return e._surfaceCache.allocate(a, b, c);
        };
        e.prototype.screenShot = function(b, c, e) {
          c && (c = this._stage.content.groupChild.child, a(c instanceof p.Stage), b = c.content.getBounds(!0), c.content.getTransform().getConcatenatedMatrix().transformRectangleAABB(b), b.intersect(this._viewport));
          b || (b = new w(0, 0, this._target.w, this._target.h));
          c = b.w;
          var f = b.h, h = this._devicePixelRatio;
          e && (c /= h, f /= h, h = 1);
          e = document.createElement("canvas");
          e.width = c;
          e.height = f;
          var k = e.getContext("2d");
          k.fillStyle = this._container.style.backgroundColor;
          k.fillRect(0, 0, c, f);
          k.drawImage(this._target.context.canvas, b.x, b.y, b.w, b.h, 0, 0, c, f);
          return new p.ScreenShot(e.toDataURL("image/png"), c, f, h);
        };
        e._initializedCaches = !1;
        e._debugPoints = m.createEmptyPoints(4);
        return e;
      }(p.Renderer);
      r.Canvas2DRenderer = c;
    })(p.Canvas2D || (p.Canvas2D = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    var r = p.Geometry.Point, a = p.Geometry.Matrix, w = p.Geometry.Rectangle, m = h.Tools.Mini.FPS, b = function() {
      function a() {
      }
      a.prototype.onMouseUp = function(a, b) {
        a.state = this;
      };
      a.prototype.onMouseDown = function(a, b) {
        a.state = this;
      };
      a.prototype.onMouseMove = function(a, b) {
        a.state = this;
      };
      a.prototype.onMouseWheel = function(a, b) {
        a.state = this;
      };
      a.prototype.onMouseClick = function(a, b) {
        a.state = this;
      };
      a.prototype.onKeyUp = function(a, b) {
        a.state = this;
      };
      a.prototype.onKeyDown = function(a, b) {
        a.state = this;
      };
      a.prototype.onKeyPress = function(a, b) {
        a.state = this;
      };
      return a;
    }();
    p.UIState = b;
    var l = function(a) {
      function b() {
        a.apply(this, arguments);
        this._keyCodes = [];
      }
      __extends(b, a);
      b.prototype.onMouseDown = function(a, b) {
        b.altKey && (a.state = new k(a.worldView, a.getMousePosition(b, null), a.worldView.getTransform().getMatrix(!0)));
      };
      b.prototype.onMouseClick = function(a, b) {
      };
      b.prototype.onKeyDown = function(a, b) {
        this._keyCodes[b.keyCode] = !0;
      };
      b.prototype.onKeyUp = function(a, b) {
        this._keyCodes[b.keyCode] = !1;
      };
      return b;
    }(b), u = function(a) {
      function b() {
        a.apply(this, arguments);
        this._keyCodes = [];
        this._paused = !1;
        this._mousePosition = new r(0, 0);
      }
      __extends(b, a);
      b.prototype.onMouseMove = function(a, b) {
        this._mousePosition = a.getMousePosition(b, null);
        this._update(a);
      };
      b.prototype.onMouseDown = function(a, b) {
      };
      b.prototype.onMouseClick = function(a, b) {
      };
      b.prototype.onMouseWheel = function(a, b) {
        var c = "DOMMouseScroll" === b.type ? -b.detail : b.wheelDelta / 40;
        if (b.altKey) {
          b.preventDefault();
          var f = a.getMousePosition(b, null), e = a.worldView.getTransform().getMatrix(!0), c = 1 + c / 1E3;
          e.translate(-f.x, -f.y);
          e.scale(c, c);
          e.translate(f.x, f.y);
          a.worldView.getTransform().setMatrix(e);
        }
      };
      b.prototype.onKeyPress = function(a, b) {
        if (b.altKey) {
          var c = b.keyCode || b.which;
          console.info("onKeyPress Code: " + c);
          switch(c) {
            case 248:
              this._paused = !this._paused;
              b.preventDefault();
              break;
            case 223:
              a.toggleOption("paintRenderable");
              b.preventDefault();
              break;
            case 8730:
              a.toggleOption("paintViewport");
              b.preventDefault();
              break;
            case 8747:
              a.toggleOption("paintBounds");
              b.preventDefault();
              break;
            case 8706:
              a.toggleOption("paintDirtyRegion");
              b.preventDefault();
              break;
            case 231:
              a.toggleOption("clear");
              b.preventDefault();
              break;
            case 402:
              a.toggleOption("paintFlashing"), b.preventDefault();
          }
          this._update(a);
        }
      };
      b.prototype.onKeyDown = function(a, b) {
        this._keyCodes[b.keyCode] = !0;
        this._update(a);
      };
      b.prototype.onKeyUp = function(a, b) {
        this._keyCodes[b.keyCode] = !1;
        this._update(a);
      };
      b.prototype._update = function(a) {
        a.paused = this._paused;
        if (a.getOption("paintViewport")) {
          var b = p.viewportLoupeDiameter.value, c = p.viewportLoupeDiameter.value;
          a.viewport = new w(this._mousePosition.x - b / 2, this._mousePosition.y - c / 2, b, c);
        } else {
          a.viewport = null;
        }
      };
      return b;
    }(b);
    (function(a) {
      function b() {
        a.apply(this, arguments);
        this._startTime = Date.now();
      }
      __extends(b, a);
      b.prototype.onMouseMove = function(a, b) {
        if (!(10 > Date.now() - this._startTime)) {
          var c = a._world;
          c && (a.state = new k(c, a.getMousePosition(b, null), c.getTransform().getMatrix(!0)));
        }
      };
      b.prototype.onMouseUp = function(a, b) {
        a.state = new l;
        a.selectNodeUnderMouse(b);
      };
      return b;
    })(b);
    var k = function(a) {
      function b(h, k, c) {
        a.call(this);
        this._target = h;
        this._startPosition = k;
        this._startMatrix = c;
      }
      __extends(b, a);
      b.prototype.onMouseMove = function(a, b) {
        b.preventDefault();
        var c = a.getMousePosition(b, null);
        c.sub(this._startPosition);
        this._target.getTransform().setMatrix(this._startMatrix.clone().translate(c.x, c.y));
        a.state = this;
      };
      b.prototype.onMouseUp = function(a, b) {
        a.state = new l;
      };
      return b;
    }(b), b = function() {
      function b(a, k, t) {
        function c(a) {
          d._state.onMouseWheel(d, a);
          d._persistentState.onMouseWheel(d, a);
        }
        void 0 === k && (k = !1);
        void 0 === t && (t = void 0);
        this._state = new l;
        this._persistentState = new u;
        this.paused = !1;
        this.viewport = null;
        this._selectedNodes = [];
        this._isRendering = !1;
        this._rAF = void 0;
        this._eventListeners = Object.create(null);
        this._fullScreen = !1;
        this._container = a;
        this._stage = new p.Stage(512, 512, !0);
        this._worldView = this._stage.content;
        this._world = new p.Group;
        this._worldView.addChild(this._world);
        this._disableHiDPI = k;
        k = document.createElement("div");
        k.style.position = "absolute";
        k.style.width = "100%";
        k.style.height = "100%";
        k.style.zIndex = "0";
        a.appendChild(k);
        if (p.hud.value) {
          var f = document.createElement("div");
          f.style.position = "absolute";
          f.style.width = "100%";
          f.style.height = "100%";
          f.style.pointerEvents = "none";
          var e = document.createElement("div");
          e.style.position = "absolute";
          e.style.width = "100%";
          e.style.height = "20px";
          e.style.pointerEvents = "none";
          f.appendChild(e);
          a.appendChild(f);
          this._fps = new m(e);
        } else {
          this._fps = null;
        }
        this.transparent = f = 0 === t;
        void 0 === t || 0 === t || h.ColorUtilities.rgbaToCSSStyle(t);
        this._options = new p.Canvas2D.Canvas2DRendererOptions;
        this._options.alpha = f;
        this._renderer = new p.Canvas2D.Canvas2DRenderer(k, this._stage, this._options);
        this._listenForContainerSizeChanges();
        this._onMouseUp = this._onMouseUp.bind(this);
        this._onMouseDown = this._onMouseDown.bind(this);
        this._onMouseMove = this._onMouseMove.bind(this);
        var d = this;
        window.addEventListener("mouseup", function(a) {
          d._state.onMouseUp(d, a);
          d._render();
        }, !1);
        window.addEventListener("mousemove", function(a) {
          d._state.onMouseMove(d, a);
          d._persistentState.onMouseMove(d, a);
        }, !1);
        window.addEventListener("DOMMouseScroll", c);
        window.addEventListener("mousewheel", c);
        a.addEventListener("mousedown", function(a) {
          d._state.onMouseDown(d, a);
        });
        window.addEventListener("keydown", function(a) {
          d._state.onKeyDown(d, a);
          if (d._state !== d._persistentState) {
            d._persistentState.onKeyDown(d, a);
          }
        }, !1);
        window.addEventListener("keypress", function(a) {
          d._state.onKeyPress(d, a);
          if (d._state !== d._persistentState) {
            d._persistentState.onKeyPress(d, a);
          }
        }, !1);
        window.addEventListener("keyup", function(a) {
          d._state.onKeyUp(d, a);
          if (d._state !== d._persistentState) {
            d._persistentState.onKeyUp(d, a);
          }
        }, !1);
      }
      b.prototype._listenForContainerSizeChanges = function() {
        var a = this._containerWidth, b = this._containerHeight;
        this._onContainerSizeChanged();
        var h = this;
        setInterval(function() {
          if (a !== h._containerWidth || b !== h._containerHeight) {
            h._onContainerSizeChanged(), a = h._containerWidth, b = h._containerHeight;
          }
        }, 10);
      };
      b.prototype._onContainerSizeChanged = function() {
        var b = this.getRatio(), h = Math.ceil(this._containerWidth * b), k = Math.ceil(this._containerHeight * b);
        this._stage.setBounds(new w(0, 0, h, k));
        this._stage.content.setBounds(new w(0, 0, h, k));
        this._worldView.getTransform().setMatrix(new a(b, 0, 0, b, 0, 0));
        this._dispatchEvent("resize");
      };
      b.prototype.addEventListener = function(a, b) {
        this._eventListeners[a] || (this._eventListeners[a] = []);
        this._eventListeners[a].push(b);
      };
      b.prototype._dispatchEvent = function(a) {
        if (a = this._eventListeners[a]) {
          for (var b = 0;b < a.length;b++) {
            a[b]();
          }
        }
      };
      b.prototype.startRendering = function() {
        if (!this._isRendering) {
          this._isRendering = !0;
          var a = this;
          this._rAF = requestAnimationFrame(function v() {
            a.render();
            a._rAF = requestAnimationFrame(v);
          });
        }
      };
      b.prototype.stopRendering = function() {
        this._isRendering && (this._isRendering = !1, cancelAnimationFrame(this._rAF));
      };
      Object.defineProperty(b.prototype, "state", {set:function(a) {
        this._state = a;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(b.prototype, "cursor", {set:function(a) {
        this._container.style.cursor = a;
      }, enumerable:!0, configurable:!0});
      b.prototype._render = function() {
        p.RenderableVideo.checkForVideoUpdates();
        var a = (this._stage.readyToRender() || p.forcePaint.value) && !this.paused, b = 0;
        if (a) {
          var h = this._renderer;
          h.viewport = this.viewport ? this.viewport : this._stage.getBounds();
          this._dispatchEvent("render");
          b = performance.now();
          h.render();
          b = performance.now() - b;
        }
        this._fps && this._fps.tickAndRender(!a, b);
      };
      b.prototype.render = function() {
        this._render();
      };
      Object.defineProperty(b.prototype, "world", {get:function() {
        return this._world;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(b.prototype, "worldView", {get:function() {
        return this._worldView;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(b.prototype, "stage", {get:function() {
        return this._stage;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(b.prototype, "options", {get:function() {
        return this._options;
      }, enumerable:!0, configurable:!0});
      b.prototype.getDisplayParameters = function() {
        var a = this.getRatio();
        return {stageWidth:this._containerWidth, stageHeight:this._containerHeight, pixelRatio:a, screenWidth:window.screen ? window.screen.width : 640, screenHeight:window.screen ? window.screen.height : 480};
      };
      b.prototype.toggleOption = function(a) {
        var b = this._options;
        b[a] = !b[a];
      };
      b.prototype.getOption = function(a) {
        return this._options[a];
      };
      b.prototype.getRatio = function() {
        var a = window.devicePixelRatio || 1, b = 1;
        1 === a || this._disableHiDPI || (b = a / 1);
        return b;
      };
      Object.defineProperty(b.prototype, "_containerWidth", {get:function() {
        return this._container.clientWidth;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(b.prototype, "_containerHeight", {get:function() {
        return this._container.clientHeight;
      }, enumerable:!0, configurable:!0});
      b.prototype.queryNodeUnderMouse = function(a) {
        return this._world;
      };
      b.prototype.selectNodeUnderMouse = function(a) {
        (a = this._world) && this._selectedNodes.push(a);
        this._render();
      };
      b.prototype.getMousePosition = function(b, h) {
        var k = this._container, c = k.getBoundingClientRect(), f = this.getRatio(), k = new r(k.scrollWidth / c.width * (b.clientX - c.left) * f, k.scrollHeight / c.height * (b.clientY - c.top) * f);
        if (!h) {
          return k;
        }
        c = a.createIdentity();
        h.getTransform().getConcatenatedMatrix().inverse(c);
        c.transformPoint(k);
        return k;
      };
      b.prototype.getMouseWorldPosition = function(a) {
        return this.getMousePosition(a, this._world);
      };
      b.prototype._onMouseDown = function(a) {
      };
      b.prototype._onMouseUp = function(a) {
      };
      b.prototype._onMouseMove = function(a) {
      };
      b.prototype.screenShot = function(a, b, h) {
        return this._renderer.screenShot(a, b, h);
      };
      return b;
    }();
    p.Easel = b;
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    var r = h.GFX.Geometry.Matrix;
    (function(a) {
      a[a.Simple = 0] = "Simple";
    })(p.Layout || (p.Layout = {}));
    var a = function(a) {
      function b() {
        a.apply(this, arguments);
        this.layout = 0;
      }
      __extends(b, a);
      return b;
    }(p.RendererOptions);
    p.TreeRendererOptions = a;
    var w = function(h) {
      function b(b, p, k) {
        void 0 === k && (k = new a);
        h.call(this, b, p, k);
        this._canvas = document.createElement("canvas");
        this._container.appendChild(this._canvas);
        this._context = this._canvas.getContext("2d");
        this._listenForContainerSizeChanges();
      }
      __extends(b, h);
      b.prototype._listenForContainerSizeChanges = function() {
        var a = this._containerWidth, b = this._containerHeight;
        this._onContainerSizeChanged();
        var h = this;
        setInterval(function() {
          if (a !== h._containerWidth || b !== h._containerHeight) {
            h._onContainerSizeChanged(), a = h._containerWidth, b = h._containerHeight;
          }
        }, 10);
      };
      b.prototype._getRatio = function() {
        var a = window.devicePixelRatio || 1, b = 1;
        1 !== a && (b = a / 1);
        return b;
      };
      b.prototype._onContainerSizeChanged = function() {
        var a = this._getRatio(), b = Math.ceil(this._containerWidth * a), h = Math.ceil(this._containerHeight * a), m = this._canvas;
        0 < a ? (m.width = b * a, m.height = h * a, m.style.width = b + "px", m.style.height = h + "px") : (m.width = b, m.height = h);
      };
      Object.defineProperty(b.prototype, "_containerWidth", {get:function() {
        return this._container.clientWidth;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(b.prototype, "_containerHeight", {get:function() {
        return this._container.clientHeight;
      }, enumerable:!0, configurable:!0});
      b.prototype.render = function() {
        var a = this._context;
        a.save();
        a.clearRect(0, 0, this._canvas.width, this._canvas.height);
        a.scale(1, 1);
        0 === this._options.layout && this._renderNodeSimple(this._context, this._stage, r.createIdentity());
        a.restore();
      };
      b.prototype._renderNodeSimple = function(a, b, h) {
        function m(b) {
          var d = b.getChildren();
          b.hasFlags(4096) ? a.fillStyle = "red" : a.fillStyle = "white";
          var g = String(b.id);
          b instanceof p.RenderableText ? g = "T" + g : b instanceof p.RenderableShape ? g = "S" + g : b instanceof p.RenderableBitmap ? g = "B" + g : b instanceof p.RenderableVideo && (g = "V" + g);
          b instanceof p.Renderable && (g = g + " [" + b._parents.length + "]");
          b = a.measureText(g).width;
          a.fillText(g, n, r);
          if (d) {
            n += b + 4;
            f = Math.max(f, n + 20);
            for (g = 0;g < d.length;g++) {
              m(d[g]), g < d.length - 1 && (r += 18, r > q._canvas.height && (a.fillStyle = "gray", n = n - c + f + 8, c = f + 8, r = 0, a.fillStyle = "white"));
            }
            n -= b + 4;
          }
        }
        var q = this;
        a.save();
        a.font = "16px Arial";
        a.fillStyle = "white";
        var n = 0, r = 0, c = 0, f = 0;
        m(b);
        a.restore();
      };
      return b;
    }(p.Renderer);
    p.TreeRenderer = w;
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    (function(r) {
      var a = h.GFX.BlurFilter, w = h.GFX.DropshadowFilter, m = h.GFX.Shape, b = h.GFX.Group, l = h.GFX.RenderableShape, u = h.GFX.RenderableMorphShape, k = h.GFX.RenderableBitmap, t = h.GFX.RenderableVideo, q = h.GFX.RenderableText, n = h.GFX.ColorMatrix, v = h.ShapeData, c = h.ArrayUtilities.DataBuffer, f = h.GFX.Stage, e = h.GFX.Geometry.Matrix, d = h.GFX.Geometry.Rectangle, g = function() {
        function a() {
        }
        a.prototype.writeMouseEvent = function(a, b) {
          var c = this.output;
          c.writeInt(300);
          var d = h.Remoting.MouseEventNames.indexOf(a.type);
          c.writeInt(d);
          c.writeFloat(b.x);
          c.writeFloat(b.y);
          c.writeInt(a.buttons);
          c.writeInt((a.ctrlKey ? 1 : 0) | (a.altKey ? 2 : 0) | (a.shiftKey ? 4 : 0));
        };
        a.prototype.writeKeyboardEvent = function(a) {
          var b = this.output;
          b.writeInt(301);
          var c = h.Remoting.KeyboardEventNames.indexOf(a.type);
          b.writeInt(c);
          b.writeInt(a.keyCode);
          b.writeInt(a.charCode);
          b.writeInt(a.location);
          b.writeInt((a.ctrlKey ? 1 : 0) | (a.altKey ? 2 : 0) | (a.shiftKey ? 4 : 0));
        };
        a.prototype.writeFocusEvent = function(a) {
          var b = this.output;
          b.writeInt(302);
          b.writeInt(a);
        };
        return a;
      }();
      r.GFXChannelSerializer = g;
      g = function() {
        function a(b, c, d) {
          function e(a) {
            a = a.getBounds(!0);
            var c = b.easel.getRatio();
            a.scale(1 / c, 1 / c);
            a.snap();
            g.setBounds(a);
          }
          var g = this.stage = new f(128, 512);
          "undefined" !== typeof registerInspectorStage && registerInspectorStage(g);
          e(b.stage);
          b.stage.addEventListener(1, e);
          b.content = g.content;
          d && this.stage.setFlags(2);
          c.addChild(this.stage);
          this._nodes = [];
          this._assets = [];
          this._easelHost = b;
          this._canvas = document.createElement("canvas");
          this._context = this._canvas.getContext("2d");
        }
        a.prototype._registerAsset = function(a, b, c) {
          "undefined" !== typeof registerInspectorAsset && registerInspectorAsset(a, b, c);
          this._assets[a] = c;
        };
        a.prototype._makeNode = function(a) {
          if (-1 === a) {
            return null;
          }
          var b = null;
          return b = a & 134217728 ? this._assets[a & -134217729].wrap() : this._nodes[a];
        };
        a.prototype._getAsset = function(a) {
          return this._assets[a];
        };
        a.prototype._getBitmapAsset = function(a) {
          return this._assets[a];
        };
        a.prototype._getVideoAsset = function(a) {
          return this._assets[a];
        };
        a.prototype._getTextAsset = function(a) {
          return this._assets[a];
        };
        a.prototype.registerFont = function(a, b, c) {
          h.registerCSSFont(a, b, !inFirefox);
          inFirefox ? c(null) : window.setTimeout(c, 400);
        };
        a.prototype.registerImage = function(a, b, c, d, e, f) {
          this._registerAsset(a, b, this._decodeImage(c, d, e, f));
        };
        a.prototype.registerVideo = function(a) {
          this._registerAsset(a, 0, new t(a, this));
        };
        a.prototype._decodeImage = function(a, b, c, e) {
          var f = new Image, g = k.FromImage(f, -1, -1);
          f.src = URL.createObjectURL(new Blob([b], {type:h.getMIMETypeForImageType(a)}));
          f.onload = function() {
            g.setBounds(new d(0, 0, f.width, f.height));
            c && g.mask(c);
            g.invalidate();
            e({width:f.width, height:f.height});
          };
          f.onerror = function() {
            e(null);
          };
          return g;
        };
        a.prototype.sendVideoPlaybackEvent = function(a, b, c) {
          this._easelHost.sendVideoPlaybackEvent(a, b, c);
        };
        return a;
      }();
      r.GFXChannelDeserializerContext = g;
      g = function() {
        function f() {
        }
        f.prototype.read = function() {
          for (var a = 0, b = this.input, c = 0, d = 0, e = 0, f = 0, g = 0, h = 0, k = 0, l = 0, m = 0;0 < b.bytesAvailable;) {
            switch(a = b.readInt(), a) {
              case 0:
                return;
              case 101:
                c++;
                this._readUpdateGraphics();
                break;
              case 102:
                d++;
                this._readUpdateBitmapData();
                break;
              case 103:
                e++;
                this._readUpdateTextContent();
                break;
              case 100:
                f++;
                this._readUpdateFrame();
                break;
              case 104:
                g++;
                this._readUpdateStage();
                break;
              case 107:
                h++;
                this._readUpdateCurrentMouseTarget();
                break;
              case 105:
                k++;
                this._readUpdateNetStream();
                break;
              case 200:
                l++;
                this._readDrawToBitmap();
                break;
              case 106:
                m++, this._readRequestBitmapData();
            }
          }
        };
        f.prototype._readMatrix = function() {
          var a = this.input, b = f._temporaryReadMatrix;
          b.setElements(a.readFloat(), a.readFloat(), a.readFloat(), a.readFloat(), a.readFloat() / 20, a.readFloat() / 20);
          return b;
        };
        f.prototype._readRectangle = function() {
          var a = this.input, b = f._temporaryReadRectangle;
          b.setElements(a.readInt() / 20, a.readInt() / 20, a.readInt() / 20, a.readInt() / 20);
          return b;
        };
        f.prototype._readColorMatrix = function() {
          var a = this.input, b = f._temporaryReadColorMatrix, c = 1, d = 1, e = 1, g = 1, h = 0, k = 0, l = 0, m = 0;
          switch(a.readInt()) {
            case 0:
              return f._temporaryReadColorMatrixIdentity;
            case 1:
              g = a.readFloat();
              break;
            case 2:
              c = a.readFloat(), d = a.readFloat(), e = a.readFloat(), g = a.readFloat(), h = a.readInt(), k = a.readInt(), l = a.readInt(), m = a.readInt();
          }
          b.setMultipliersAndOffsets(c, d, e, g, h, k, l, m);
          return b;
        };
        f.prototype._readAsset = function() {
          var a = this.input.readInt(), b = this.inputAssets[a];
          this.inputAssets[a] = null;
          return b;
        };
        f.prototype._readUpdateGraphics = function() {
          for (var a = this.input, b = this.context, c = a.readInt(), d = a.readInt(), e = b._getAsset(c), f = this._readRectangle(), g = v.FromPlainObject(this._readAsset()), h = a.readInt(), k = [], m = 0;m < h;m++) {
            var n = a.readInt();
            k.push(b._getBitmapAsset(n));
          }
          if (e) {
            e.update(g, k, f);
          } else {
            a = g.morphCoordinates ? new u(c, g, k, f) : new l(c, g, k, f);
            for (m = 0;m < k.length;m++) {
              k[m] && k[m].addRenderableParent(a);
            }
            b._registerAsset(c, d, a);
          }
        };
        f.prototype._readUpdateBitmapData = function() {
          var a = this.input, b = this.context, d = a.readInt(), e = a.readInt(), f = b._getBitmapAsset(d), g = this._readRectangle(), a = a.readInt(), h = c.FromPlainObject(this._readAsset());
          f ? f.updateFromDataBuffer(a, h) : (f = k.FromDataBuffer(a, h, g), b._registerAsset(d, e, f));
        };
        f.prototype._readUpdateTextContent = function() {
          var a = this.input, b = this.context, d = a.readInt(), e = a.readInt(), f = b._getTextAsset(d), g = this._readRectangle(), h = this._readMatrix(), k = a.readInt(), l = a.readInt(), m = a.readInt(), n = a.readBoolean(), p = a.readInt(), t = a.readInt(), r = this._readAsset(), u = c.FromPlainObject(this._readAsset()), v = null, w = a.readInt();
          w && (v = new c(4 * w), a.readBytes(v, 0, 4 * w));
          f ? (f.setBounds(g), f.setContent(r, u, h, v), f.setStyle(k, l, p, t), f.reflow(m, n)) : (f = new q(g), f.setContent(r, u, h, v), f.setStyle(k, l, p, t), f.reflow(m, n), b._registerAsset(d, e, f));
          if (this.output) {
            for (a = f.textRect, this.output.writeInt(20 * a.w), this.output.writeInt(20 * a.h), this.output.writeInt(20 * a.x), f = f.lines, a = f.length, this.output.writeInt(a), b = 0;b < a;b++) {
              this._writeLineMetrics(f[b]);
            }
          }
        };
        f.prototype._writeLineMetrics = function(a) {
          this.output.writeInt(a.x);
          this.output.writeInt(a.width);
          this.output.writeInt(a.ascent);
          this.output.writeInt(a.descent);
          this.output.writeInt(a.leading);
        };
        f.prototype._readUpdateStage = function() {
          var a = this.context, b = this.input.readInt();
          a._nodes[b] || (a._nodes[b] = a.stage.content);
          var b = this.input.readInt(), c = this._readRectangle();
          a.stage.content.setBounds(c);
          a.stage.color = h.Color.FromARGB(b);
          a.stage.align = this.input.readInt();
          a.stage.scaleMode = this.input.readInt();
          b = this.input.readInt();
          a._easelHost.fullscreen = 0 === b || 1 === b;
        };
        f.prototype._readUpdateCurrentMouseTarget = function() {
          var a = this.context;
          this.input.readInt();
          var b = this.input.readInt();
          a._easelHost.cursor = h.UI.toCSSCursor(b);
        };
        f.prototype._readUpdateNetStream = function() {
          var a = this.context, b = this.input.readInt(), c = a._getVideoAsset(b), d = this._readRectangle();
          c || (a.registerVideo(b), c = a._getVideoAsset(b));
          c.setBounds(d);
        };
        f.prototype._readFilters = function(b) {
          var c = this.input, d = c.readInt(), e = [];
          if (d) {
            for (var f = 0;f < d;f++) {
              var g = c.readInt();
              switch(g) {
                case 0:
                  e.push(new a(c.readFloat(), c.readFloat(), c.readInt()));
                  break;
                case 1:
                  e.push(new w(c.readFloat(), c.readFloat(), c.readFloat(), c.readFloat(), c.readInt(), c.readFloat(), c.readBoolean(), c.readBoolean(), c.readBoolean(), c.readInt(), c.readFloat()));
                  break;
                case 2:
                  g = new Float32Array(20);
                  g[0] = c.readFloat();
                  g[4] = c.readFloat();
                  g[8] = c.readFloat();
                  g[12] = c.readFloat();
                  g[16] = c.readFloat() / 255;
                  g[1] = c.readFloat();
                  g[5] = c.readFloat();
                  g[9] = c.readFloat();
                  g[13] = c.readFloat();
                  g[17] = c.readFloat() / 255;
                  g[2] = c.readFloat();
                  g[6] = c.readFloat();
                  g[10] = c.readFloat();
                  g[14] = c.readFloat();
                  g[18] = c.readFloat() / 255;
                  g[3] = c.readFloat();
                  g[7] = c.readFloat();
                  g[11] = c.readFloat();
                  g[15] = c.readFloat();
                  g[19] = c.readFloat() / 255;
                  e.push(new n(g));
                  break;
                default:
                  h.Debug.somewhatImplemented(p.FilterType[g]);
              }
            }
            b.getLayer().filters = e;
          }
        };
        f.prototype._readUpdateFrame = function() {
          var a = this.input, c = this.context, d = a.readInt(), e = 0, f = c._nodes[d];
          f || (f = c._nodes[d] = new b);
          d = a.readInt();
          d & 1 && f.getTransform().setMatrix(this._readMatrix());
          d & 8 && f.getTransform().setColorMatrix(this._readColorMatrix());
          if (d & 64) {
            var g = a.readInt();
            f.getLayer().mask = 0 <= g ? c._makeNode(g) : null;
          }
          d & 128 && (f.clip = a.readInt());
          d & 32 && (e = a.readInt() / 65535, f.getLayer().blendMode = a.readInt(), this._readFilters(f), f.toggleFlags(1, a.readBoolean()), f.toggleFlags(16, a.readBoolean()), f.toggleFlags(32, !!a.readInt()), f.toggleFlags(64, !!a.readInt()));
          if (d & 4) {
            d = a.readInt();
            g = f;
            g.clearChildren();
            for (var h = 0;h < d;h++) {
              var k = a.readInt(), k = c._makeNode(k);
              g.addChild(k);
            }
          }
          e && (k = f.getChildren()[0], k instanceof m && (k.ratio = e));
        };
        f.prototype._readDrawToBitmap = function() {
          var a = this.input, b = this.context, c = a.readInt(), d = a.readInt(), f = a.readInt(), g, h, l;
          g = f & 1 ? this._readMatrix().clone() : e.createIdentity();
          f & 8 && (h = this._readColorMatrix());
          f & 16 && (l = this._readRectangle());
          f = a.readInt();
          a.readBoolean();
          a = b._getBitmapAsset(c);
          d = b._makeNode(d);
          a ? a.drawNode(d, g, h, f, l) : b._registerAsset(c, -1, k.FromNode(d, g, h, f, l));
        };
        f.prototype._readRequestBitmapData = function() {
          var a = this.output, b = this.context, c = this.input.readInt();
          b._getBitmapAsset(c).readImageData(a);
        };
        f._temporaryReadMatrix = e.createIdentity();
        f._temporaryReadRectangle = d.createEmpty();
        f._temporaryReadColorMatrix = n.createIdentity();
        f._temporaryReadColorMatrixIdentity = n.createIdentity();
        return f;
      }();
      r.GFXChannelDeserializer = g;
    })(p.GFX || (p.GFX = {}));
  })(h.Remoting || (h.Remoting = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    var r = h.GFX.Geometry.Point, a = h.ArrayUtilities.DataBuffer;
    p.ContextMenuButton = 2;
    var w = function() {
      function m(a) {
        this._easel = a;
        var l = a.transparent;
        this._group = a.world;
        this._content = null;
        this._fullscreen = !1;
        this._context = new h.Remoting.GFX.GFXChannelDeserializerContext(this, this._group, l);
        this._addEventListeners();
        h.registerFallbackFont();
      }
      m.prototype.onSendUpdates = function(a, h) {
        throw Error("This method is abstract");
      };
      Object.defineProperty(m.prototype, "easel", {get:function() {
        return this._easel;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(m.prototype, "stage", {get:function() {
        return this._easel.stage;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(m.prototype, "content", {set:function(a) {
        this._content = a;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(m.prototype, "cursor", {set:function(a) {
        this._easel.cursor = a;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(m.prototype, "fullscreen", {set:function(a) {
        this._fullscreen !== a && (this._fullscreen = a, "undefined" !== typeof ShumwayCom && ShumwayCom.setFullscreen && ShumwayCom.setFullscreen(a));
      }, enumerable:!0, configurable:!0});
      m.prototype._mouseEventListener = function(b) {
        if (b.button !== p.ContextMenuButton) {
          var l = this._easel.getMousePosition(b, this._content), l = new r(l.x, l.y), m = new a, k = new h.Remoting.GFX.GFXChannelSerializer;
          k.output = m;
          k.writeMouseEvent(b, l);
          this.onSendUpdates(m, []);
        }
      };
      m.prototype._keyboardEventListener = function(b) {
        var l = new a, m = new h.Remoting.GFX.GFXChannelSerializer;
        m.output = l;
        m.writeKeyboardEvent(b);
        this.onSendUpdates(l, []);
      };
      m.prototype._addEventListeners = function() {
        for (var a = this._mouseEventListener.bind(this), h = this._keyboardEventListener.bind(this), p = m._mouseEvents, k = 0;k < p.length;k++) {
          window.addEventListener(p[k], a);
        }
        a = m._keyboardEvents;
        for (k = 0;k < a.length;k++) {
          window.addEventListener(a[k], h);
        }
        this._addFocusEventListeners();
        this._easel.addEventListener("resize", this._resizeEventListener.bind(this));
      };
      m.prototype._sendFocusEvent = function(b) {
        var l = new a, m = new h.Remoting.GFX.GFXChannelSerializer;
        m.output = l;
        m.writeFocusEvent(b);
        this.onSendUpdates(l, []);
      };
      m.prototype._addFocusEventListeners = function() {
        var a = this;
        document.addEventListener("visibilitychange", function(h) {
          a._sendFocusEvent(document.hidden ? 0 : 1);
        });
        window.addEventListener("focus", function(h) {
          a._sendFocusEvent(3);
        });
        window.addEventListener("blur", function(h) {
          a._sendFocusEvent(2);
        });
      };
      m.prototype._resizeEventListener = function() {
        this.onDisplayParameters(this._easel.getDisplayParameters());
      };
      m.prototype.onDisplayParameters = function(a) {
        throw Error("This method is abstract");
      };
      m.prototype.processUpdates = function(a, l, m) {
        void 0 === m && (m = null);
        var k = new h.Remoting.GFX.GFXChannelDeserializer;
        k.input = a;
        k.inputAssets = l;
        k.output = m;
        k.context = this._context;
        k.read();
      };
      m.prototype.processVideoControl = function(a, h, m) {
        var k = this._context, p = k._getVideoAsset(a);
        if (!p) {
          if (1 !== h) {
            return;
          }
          k.registerVideo(a);
          p = k._getVideoAsset(a);
        }
        return p.processControlRequest(h, m);
      };
      m.prototype.processRegisterFont = function(a, h, m) {
        this._context.registerFont(a, h, m);
      };
      m.prototype.processRegisterImage = function(a, h, m, k, p, q) {
        this._context.registerImage(a, h, m, k, p, q);
      };
      m.prototype.processFSCommand = function(a, h) {
        "undefined" !== typeof ShumwayCom && "test" === ShumwayCom.environment && ShumwayCom.processFSCommand(a, h);
      };
      m.prototype.processFrame = function() {
        "undefined" !== typeof ShumwayCom && "test" === ShumwayCom.environment && ShumwayCom.processFrame();
      };
      m.prototype.onVideoPlaybackEvent = function(a, h, m) {
        throw Error("This method is abstract");
      };
      m.prototype.sendVideoPlaybackEvent = function(a, h, m) {
        this.onVideoPlaybackEvent(a, h, m);
      };
      m._mouseEvents = h.Remoting.MouseEventNames;
      m._keyboardEvents = h.Remoting.KeyboardEventNames;
      return m;
    }();
    p.EaselHost = w;
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    (function(r) {
      var a = h.ArrayUtilities.DataBuffer, w = function(h) {
        function b(a, b) {
          h.call(this, a);
          this._peer = b;
          this._peer.onSyncMessage = function(a) {
            return this._onWindowMessage(a, !1);
          }.bind(this);
          this._peer.onAsyncMessage = function(a) {
            this._onWindowMessage(a, !0);
          }.bind(this);
        }
        __extends(b, h);
        b.prototype.onSendUpdates = function(a, b) {
          var h = a.getBytes();
          this._peer.postAsyncMessage({type:"gfx", updates:h, assets:b}, [h.buffer]);
        };
        b.prototype.onDisplayParameters = function(a) {
          this._peer.postAsyncMessage({type:"displayParameters", params:a});
        };
        b.prototype.onVideoPlaybackEvent = function(a, b, h) {
          this._peer.postAsyncMessage({type:"videoPlayback", id:a, eventType:b, data:h});
        };
        b.prototype._sendRegisterFontResponse = function(a, b) {
          this._peer.postAsyncMessage({type:"registerFontResponse", requestId:a, result:b});
        };
        b.prototype._sendRegisterImageResponse = function(a, b) {
          this._peer.postAsyncMessage({type:"registerImageResponse", requestId:a, result:b});
        };
        b.prototype._onWindowMessage = function(b, h) {
          var k;
          if ("object" === typeof b && null !== b) {
            if ("player" === b.type) {
              var m = a.FromArrayBuffer(b.updates.buffer);
              h ? this.processUpdates(m, b.assets) : (k = new a, this.processUpdates(m, b.assets, k), k = k.toPlainObject());
            } else {
              "frame" === b.type ? this.processFrame() : "videoControl" === b.type ? k = this.processVideoControl(b.id, b.eventType, b.data) : "registerFont" === b.type ? this.processRegisterFont(b.syncId, b.data, this._sendRegisterFontResponse.bind(this, b.requestId)) : "registerImage" === b.type ? this.processRegisterImage(b.syncId, b.symbolId, b.imageType, b.data, b.alphaData, this._sendRegisterImageResponse.bind(this, b.requestId)) : "fscommand" === b.type && this.processFSCommand(b.command, 
              b.args);
            }
          }
          return k;
        };
        return b;
      }(p.EaselHost);
      r.WindowEaselHost = w;
    })(p.Window || (p.Window = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    (function(p) {
      function a(a, b) {
        a.writeInt(b.length);
        a.writeRawBytes(b);
      }
      function w(a, b) {
        return "byteLength" in a && "buffer" in a && (a.constructor && a.constructor.name) === b;
      }
      function m(a) {
        return "byteLength" in a && "ArrayBuffer" === (a.constructor && a.constructor.name);
      }
      function b(b) {
        function f(b) {
          switch(typeof b) {
            case "undefined":
              e.writeByte(0);
              break;
            case "boolean":
              e.writeByte(b ? 2 : 3);
              break;
            case "number":
              e.writeByte(4);
              e.writeDouble(b);
              break;
            case "string":
              e.writeByte(5);
              e.writeUTF(b);
              break;
            default:
              if (null === b) {
                e.writeByte(1);
                break;
              }
              if (Array.isArray(b)) {
                e.writeByte(6);
                e.writeInt(b.length);
                for (var c = 0;c < b.length;c++) {
                  f(b[c]);
                }
              } else {
                if (w(b, "Uint8Array")) {
                  e.writeByte(9), a(e, b);
                } else {
                  if ("length" in b && "buffer" in b && "littleEndian" in b) {
                    e.writeByte(b.littleEndian ? 10 : 11), a(e, new Uint8Array(b.buffer, 0, b.length));
                  } else {
                    if (m(b)) {
                      e.writeByte(8), a(e, new Uint8Array(b));
                    } else {
                      if (w(b, "Int32Array")) {
                        e.writeByte(12), a(e, new Uint8Array(b.buffer, b.byteOffset, b.byteLength));
                      } else {
                        if (!h.isNullOrUndefined(b.buffer) && m(b.buffer) && "number" === typeof b.byteOffset) {
                          throw Error("Some unsupported TypedArray is used");
                        }
                        e.writeByte(7);
                        for (c in b) {
                          e.writeUTF(c), f(b[c]);
                        }
                        e.writeUTF("");
                      }
                    }
                  }
                }
              }
            ;
          }
        }
        var e = new t;
        f(b);
        return e.getBytes();
      }
      function l(a) {
        var b = new t, e = a.readInt();
        a.readBytes(b, 0, e);
        return b.getBytes();
      }
      function u(a) {
        var b = new t, e = a.readInt();
        a.readBytes(b, 0, e);
        return k(b);
      }
      function k(a) {
        var b = a.readByte();
        switch(b) {
          case 1:
            return null;
          case 2:
            return !0;
          case 3:
            return !1;
          case 4:
            return a.readDouble();
          case 5:
            return a.readUTF();
          case 6:
            for (var b = [], e = a.readInt(), d = 0;d < e;d++) {
              b[d] = k(a);
            }
            return b;
          case 7:
            for (b = {};e = a.readUTF();) {
              b[e] = k(a);
            }
            return b;
          case 8:
            return l(a).buffer;
          case 9:
            return l(a);
          case 11:
          ;
          case 10:
            return a = l(a), new q(a.buffer, a.length, 10 === b);
          case 12:
            return new Int32Array(l(a).buffer);
        }
      }
      var t = h.ArrayUtilities.DataBuffer, q = h.ArrayUtilities.PlainObjectDataBuffer, n;
      (function(a) {
        a[a.Undefined = 0] = "Undefined";
        a[a.Null = 1] = "Null";
        a[a.True = 2] = "True";
        a[a.False = 3] = "False";
        a[a.Number = 4] = "Number";
        a[a.String = 5] = "String";
        a[a.Array = 6] = "Array";
        a[a.Object = 7] = "Object";
        a[a.ArrayBuffer = 8] = "ArrayBuffer";
        a[a.Uint8Array = 9] = "Uint8Array";
        a[a.PlainObjectDataBufferLE = 10] = "PlainObjectDataBufferLE";
        a[a.PlainObjectDataBufferBE = 11] = "PlainObjectDataBufferBE";
        a[a.Int32Array = 12] = "Int32Array";
      })(n || (n = {}));
      (function(a) {
        a[a.None = 0] = "None";
        a[a.PlayerCommand = 1] = "PlayerCommand";
        a[a.PlayerCommandAsync = 2] = "PlayerCommandAsync";
        a[a.Frame = 3] = "Frame";
        a[a.Font = 4] = "Font";
        a[a.Image = 5] = "Image";
        a[a.FSCommand = 6] = "FSCommand";
      })(p.MovieRecordType || (p.MovieRecordType = {}));
      n = function() {
        function c(a) {
          this._maxRecordingSize = a;
          this._recording = new t;
          this._recordingStarted = Date.now();
          this._recording.writeRawBytes(new Uint8Array([77, 83, 87, 70]));
          this._stopped = !1;
        }
        c.prototype.stop = function() {
          this._stopped = !0;
        };
        c.prototype.getRecording = function() {
          return new Blob([this._recording.getBytes()], {type:"application/octet-stream"});
        };
        c.prototype.dump = function() {
          (new v(this._recording.getBytes())).dump();
        };
        c.prototype._createRecord = function(a, b) {
          this._stopped || (this._recording.length + 8 + (b ? b.length : 0) >= this._maxRecordingSize ? (console.error("Recording limit reached"), this._stopped = !0) : (this._recording.writeInt(Date.now() - this._recordingStarted), this._recording.writeInt(a), null !== b ? (this._recording.writeInt(b.length), this._recording.writeRawBytes(b.getBytes())) : this._recording.writeInt(0)));
        };
        c.prototype.recordPlayerCommand = function(c, e, d) {
          var g = new t;
          a(g, e);
          g.writeInt(d.length);
          d.forEach(function(c) {
            c = b(c);
            a(g, c);
          });
          this._createRecord(c ? 2 : 1, g);
        };
        c.prototype.recordFrame = function() {
          this._createRecord(3, null);
        };
        c.prototype.recordFont = function(c, e) {
          var d = new t;
          d.writeInt(c);
          a(d, b(e));
          this._createRecord(4, d);
        };
        c.prototype.recordImage = function(c, e, d, g, h) {
          var k = new t;
          k.writeInt(c);
          k.writeInt(e);
          k.writeInt(d);
          a(k, b(g));
          a(k, b(h));
          this._createRecord(5, k);
        };
        c.prototype.recordFSCommand = function(a, b) {
          var c = new t;
          c.writeUTF(a);
          c.writeUTF(b || "");
          this._createRecord(6, c);
        };
        return c;
      }();
      p.MovieRecorder = n;
      var v = function() {
        function a(b) {
          this._buffer = new t;
          this._buffer.writeRawBytes(b);
          this._buffer.position = 4;
        }
        a.prototype.readNextRecord = function() {
          if (this._buffer.position >= this._buffer.length) {
            return 0;
          }
          var a = this._buffer.readInt(), b = this._buffer.readInt(), c = this._buffer.readInt(), g = null;
          0 < c && (g = new t, this._buffer.readBytes(g, 0, c));
          this.currentTimestamp = a;
          this.currentType = b;
          this.currentData = g;
          return b;
        };
        a.prototype.parsePlayerCommand = function() {
          for (var a = l(this.currentData), b = this.currentData.readInt(), c = [], g = 0;g < b;g++) {
            c.push(u(this.currentData));
          }
          return {updates:a, assets:c};
        };
        a.prototype.parseFSCommand = function() {
          var a = this.currentData.readUTF(), b = this.currentData.readUTF();
          return {command:a, args:b};
        };
        a.prototype.parseFont = function() {
          var a = this.currentData.readInt(), b = u(this.currentData);
          return {syncId:a, data:b};
        };
        a.prototype.parseImage = function() {
          var a = this.currentData.readInt(), b = this.currentData.readInt(), c = this.currentData.readInt(), g = u(this.currentData);
          return {syncId:a, symbolId:b, imageType:c, data:g};
        };
        a.prototype.dump = function() {
          for (var a;a = this.readNextRecord();) {
            switch(console.log("record " + a + " @" + this.currentTimestamp), a) {
              case 1:
              ;
              case 2:
                console.log(this.parsePlayerCommand());
                break;
              case 6:
                console.log(this.parseFSCommand());
                break;
              case 4:
                console.log(this.parseFont());
                break;
              case 5:
                console.log(this.parseImage());
            }
          }
        };
        return a;
      }();
      p.MovieRecordParser = v;
    })(p.Test || (p.Test = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    (function(r) {
      var a = h.ArrayUtilities.DataBuffer, w = function(h) {
        function b(a) {
          h.call(this, a);
          this.alwaysRenderFrame = this.ignoreTimestamps = !1;
          this.cpuTimeRendering = this.cpuTimeUpdates = 0;
          this.onComplete = null;
        }
        __extends(b, h);
        Object.defineProperty(b.prototype, "cpuTime", {get:function() {
          return this.cpuTimeUpdates + this.cpuTimeRendering;
        }, enumerable:!0, configurable:!0});
        b.prototype.playUrl = function(a) {
          var b = new XMLHttpRequest;
          b.open("GET", a, !0);
          b.responseType = "arraybuffer";
          b.onload = function() {
            this.playBytes(new Uint8Array(b.response));
          }.bind(this);
          b.send();
        };
        b.prototype.playBytes = function(a) {
          this._parser = new r.MovieRecordParser(a);
          this._lastTimestamp = 0;
          this._parseNext();
        };
        b.prototype.onSendUpdates = function(a, b) {
        };
        b.prototype.onDisplayParameters = function(a) {
        };
        b.prototype.onVideoPlaybackEvent = function(a, b, h) {
        };
        b.prototype._parseNext = function() {
          if (0 !== this._parser.readNextRecord()) {
            var a = this._runRecord.bind(this), b = this._parser.currentTimestamp - this._lastTimestamp;
            this._lastTimestamp = this._parser.currentTimestamp;
            5 > b ? Promise.resolve(void 0).then(a) : this.ignoreTimestamps ? setTimeout(a) : setTimeout(a, b);
          } else {
            if (this.onComplete) {
              this.onComplete();
            }
          }
        };
        b.prototype._runRecord = function() {
          var b, h = performance.now();
          switch(this._parser.currentType) {
            case 1:
            ;
            case 2:
              b = this._parser.parsePlayerCommand();
              var k = 2 === this._parser.currentType, m = a.FromArrayBuffer(b.updates.buffer);
              k ? this.processUpdates(m, b.assets) : (k = new a, this.processUpdates(m, b.assets, k));
              break;
            case 3:
              this.processFrame();
              break;
            case 4:
              b = this._parser.parseFont();
              this.processRegisterFont(b.syncId, b.data, function() {
              });
              break;
            case 5:
              b = this._parser.parseImage();
              this.processRegisterImage(b.syncId, b.symbolId, b.imageType, b.data, b.alphaData, function() {
              });
              break;
            case 6:
              b = this._parser.parseFSCommand();
              this.processFSCommand(b.command, b.args);
              break;
            default:
              throw Error("Invalid movie record type");;
          }
          this.cpuTimeUpdates += performance.now() - h;
          3 === this._parser.currentType && this.alwaysRenderFrame ? requestAnimationFrame(this._renderFrameJustAfterRAF.bind(this)) : this._parseNext();
        };
        b.prototype._renderFrameJustAfterRAF = function() {
          var a = performance.now();
          this.easel.render();
          this.cpuTimeRendering += performance.now() - a;
          this._parseNext();
        };
        return b;
      }(p.EaselHost);
      r.PlaybackEaselHost = w;
    })(p.Test || (p.Test = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
(function(h) {
  (function(p) {
    (function(p) {
      var a = function(a) {
        function h(b, l, m) {
          void 0 === m && (m = 0);
          a.call(this, b, l);
          this._recorder = null;
          this._recorder = new p.MovieRecorder(m);
        }
        __extends(h, a);
        Object.defineProperty(h.prototype, "recorder", {get:function() {
          return this._recorder;
        }, enumerable:!0, configurable:!0});
        h.prototype._onWindowMessage = function(b, h) {
          switch(b.type) {
            case "player":
              this._recorder.recordPlayerCommand(h, b.updates, b.assets);
              break;
            case "frame":
              this._recorder.recordFrame();
              break;
            case "registerFont":
              this._recorder.recordFont(b.syncId, b.data);
              break;
            case "registerImage":
              this._recorder.recordImage(b.syncId, b.symbolId, b.imageType, b.data, b.alphaData);
              break;
            case "fscommand":
              this._recorder.recordFSCommand(b.command, b.args);
          }
          return a.prototype._onWindowMessage.call(this, b, h);
        };
        return h;
      }(h.GFX.Window.WindowEaselHost);
      p.RecordingEaselHost = a;
    })(p.Test || (p.Test = {}));
  })(h.GFX || (h.GFX = {}));
})(Shumway || (Shumway = {}));
console.timeEnd("Load GFX Dependencies");

