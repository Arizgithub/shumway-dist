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
Shumway$$inline_0.version = "0.11.201";
Shumway$$inline_0.build = "25c6da6";
var jsGlobal = function() {
  return this || (0,eval)("this//# sourceURL=jsGlobal-getter");
}(), inBrowser = "undefined" !== typeof window && "document" in window && "plugins" in window.document, inFirefox = "undefined" !== typeof navigator && 0 <= navigator.userAgent.indexOf("Firefox");
jsGlobal.performance || (jsGlobal.performance = {});
jsGlobal.performance.now || (jsGlobal.performance.now = function() {
  return Date.now();
});
function lazyInitializer(k, p, g) {
  Object.defineProperty(k, p, {get:function() {
    var b = g();
    Object.defineProperty(k, p, {value:b, configurable:!0, enumerable:!0});
    return b;
  }, configurable:!0, enumerable:!0});
}
var START_TIME = performance.now();
(function(k) {
  function p(d) {
    return (d | 0) === d;
  }
  function g(d) {
    return "object" === typeof d || "function" === typeof d;
  }
  function b(d) {
    return String(Number(d)) === d;
  }
  function w(d) {
    var f = 0;
    if ("number" === typeof d) {
      return f = d | 0, d === f && 0 <= f ? !0 : d >>> 0 === d;
    }
    if ("string" !== typeof d) {
      return !1;
    }
    var e = d.length;
    if (0 === e) {
      return !1;
    }
    if ("0" === d) {
      return !0;
    }
    if (e > k.UINT32_CHAR_BUFFER_LENGTH) {
      return !1;
    }
    var c = 0, f = d.charCodeAt(c++) - 48;
    if (1 > f || 9 < f) {
      return !1;
    }
    for (var n = 0, x = 0;c < e;) {
      x = d.charCodeAt(c++) - 48;
      if (0 > x || 9 < x) {
        return !1;
      }
      n = f;
      f = 10 * f + x;
    }
    return n < k.UINT32_MAX_DIV_10 || n === k.UINT32_MAX_DIV_10 && x <= k.UINT32_MAX_MOD_10 ? !0 : !1;
  }
  (function(d) {
    d[d._0 = 48] = "_0";
    d[d._1 = 49] = "_1";
    d[d._2 = 50] = "_2";
    d[d._3 = 51] = "_3";
    d[d._4 = 52] = "_4";
    d[d._5 = 53] = "_5";
    d[d._6 = 54] = "_6";
    d[d._7 = 55] = "_7";
    d[d._8 = 56] = "_8";
    d[d._9 = 57] = "_9";
  })(k.CharacterCodes || (k.CharacterCodes = {}));
  k.UINT32_CHAR_BUFFER_LENGTH = 10;
  k.UINT32_MAX = 4294967295;
  k.UINT32_MAX_DIV_10 = 429496729;
  k.UINT32_MAX_MOD_10 = 5;
  k.isString = function(d) {
    return "string" === typeof d;
  };
  k.isFunction = function(d) {
    return "function" === typeof d;
  };
  k.isNumber = function(d) {
    return "number" === typeof d;
  };
  k.isInteger = p;
  k.isArray = function(d) {
    return d instanceof Array;
  };
  k.isNumberOrString = function(d) {
    return "number" === typeof d || "string" === typeof d;
  };
  k.isObject = g;
  k.toNumber = function(d) {
    return +d;
  };
  k.isNumericString = b;
  k.isNumeric = function(d) {
    if ("number" === typeof d) {
      return !0;
    }
    if ("string" === typeof d) {
      var f = d.charCodeAt(0);
      return 65 <= f && 90 >= f || 97 <= f && 122 >= f || 36 === f || 95 === f ? !1 : w(d) || b(d);
    }
    return !1;
  };
  k.isIndex = w;
  k.isNullOrUndefined = function(d) {
    return void 0 == d;
  };
  k.argumentsToString = function(d) {
    for (var f = [], e = 0;e < d.length;e++) {
      var c = d[e];
      try {
        var n;
        n = "object" === typeof c && c ? "toString" in c ? c.toString() : Object.prototype.toString.call(c) : c + "";
        f.push(n);
      } catch (x) {
        f.push("<unprintable value>");
      }
    }
    return f.join(", ");
  };
  var v;
  (function(d) {
    d.error = function(c) {
      console.error(c);
      throw Error(c);
    };
    d.assert = function(c, n) {
      void 0 === n && (n = "assertion failed");
      "" === c && (c = !0);
      if (!c) {
        if ("undefined" !== typeof console && "assert" in console) {
          throw console.assert(!1, n), Error(n);
        }
        d.error(n.toString());
      }
    };
    d.assertUnreachable = function(c) {
      throw Error("Reached unreachable location " + Error().stack.split("\n")[1] + c);
    };
    d.assertNotImplemented = function(c, n) {
      c || d.error("notImplemented: " + n);
    };
    var f = Object.create(null);
    d.warning = function(c, n, e) {
    };
    d.warnCounts = function() {
      var c = [], n;
      for (n in f) {
        c.push({key:n, count:f[n]});
      }
      c.sort(function(c, n) {
        return n.count - c.count;
      });
      return c.reduce(function(c, n) {
        return c + ("\n" + n.count + "\t" + n.key);
      }, "");
    };
    d.notUsed = function(c) {
    };
    d.notImplemented = function(c) {
    };
    d.dummyConstructor = function(c) {
    };
    d.abstractMethod = function(c) {
    };
    var e = {};
    d.somewhatImplemented = function(c) {
      e[c] || (e[c] = !0, d.warning("somewhatImplemented: " + c));
    };
    d.unexpected = function(c) {
      d.assert(!1, "Unexpected: " + c);
    };
    d.unexpectedCase = function(c) {
      d.assert(!1, "Unexpected Case: " + c);
    };
  })(v = k.Debug || (k.Debug = {}));
  k.getTicks = function() {
    return performance.now();
  };
  (function(d) {
    function f(c, n) {
      for (var e = 0, f = c.length;e < f;e++) {
        if (c[e] === n) {
          return e;
        }
      }
      c.push(n);
      return c.length - 1;
    }
    d.popManyInto = function(c, n, e) {
      for (var f = n - 1;0 <= f;f--) {
        e[f] = c.pop();
      }
      e.length = n;
    };
    d.popMany = function(c, n) {
      var e = c.length - n, f = c.slice(e, this.length);
      c.length = e;
      return f;
    };
    d.popManyIntoVoid = function(c, n) {
      c.length -= n;
    };
    d.pushMany = function(c, n) {
      for (var e = 0;e < n.length;e++) {
        c.push(n[e]);
      }
    };
    d.top = function(c) {
      return c.length && c[c.length - 1];
    };
    d.last = function(c) {
      return c.length && c[c.length - 1];
    };
    d.peek = function(c) {
      return c[c.length - 1];
    };
    d.indexOf = function(c, n) {
      for (var e = 0, f = c.length;e < f;e++) {
        if (c[e] === n) {
          return e;
        }
      }
      return -1;
    };
    d.equals = function(c, n) {
      if (c.length !== n.length) {
        return !1;
      }
      for (var e = 0;e < c.length;e++) {
        if (c[e] !== n[e]) {
          return !1;
        }
      }
      return !0;
    };
    d.pushUnique = f;
    d.unique = function(c) {
      for (var n = [], e = 0;e < c.length;e++) {
        f(n, c[e]);
      }
      return n;
    };
    d.copyFrom = function(c, n) {
      c.length = 0;
      d.pushMany(c, n);
    };
    d.ensureTypedArrayCapacity = function(c, n) {
      if (c.length < n) {
        var e = c;
        c = new c.constructor(k.IntegerUtilities.nearestPowerOfTwo(n));
        c.set(e, 0);
      }
      return c;
    };
    d.memCopy = function(c, n, e, f, d) {
      void 0 === e && (e = 0);
      void 0 === f && (f = 0);
      void 0 === d && (d = 0);
      0 < f || 0 < d && d < n.length ? (0 >= d && (d = n.length - f), c.set(n.subarray(f, f + d), e)) : c.set(n, e);
    };
    var e = function() {
      function c(c) {
        void 0 === c && (c = 16);
        this._f32 = this._i32 = this._u16 = this._u8 = null;
        this._offset = 0;
        this.ensureCapacity(c);
      }
      c.prototype.reset = function() {
        this._offset = 0;
      };
      Object.defineProperty(c.prototype, "offset", {get:function() {
        return this._offset;
      }, enumerable:!0, configurable:!0});
      c.prototype.getIndex = function(c) {
        return this._offset / c;
      };
      c.prototype.ensureAdditionalCapacity = function() {
        this.ensureCapacity(this._offset + 68);
      };
      c.prototype.ensureCapacity = function(c) {
        if (!this._u8) {
          this._u8 = new Uint8Array(c);
        } else {
          if (this._u8.length > c) {
            return;
          }
        }
        var e = 2 * this._u8.length;
        e < c && (e = c);
        c = new Uint8Array(e);
        c.set(this._u8, 0);
        this._u8 = c;
        this._u16 = new Uint16Array(c.buffer);
        this._i32 = new Int32Array(c.buffer);
        this._f32 = new Float32Array(c.buffer);
      };
      c.prototype.writeInt = function(c) {
        this.ensureCapacity(this._offset + 4);
        this.writeIntUnsafe(c);
      };
      c.prototype.writeIntAt = function(c, e) {
        this.ensureCapacity(e + 4);
        this._i32[e >> 2] = c;
      };
      c.prototype.writeIntUnsafe = function(c) {
        this._i32[this._offset >> 2] = c;
        this._offset += 4;
      };
      c.prototype.writeFloat = function(c) {
        this.ensureCapacity(this._offset + 4);
        this.writeFloatUnsafe(c);
      };
      c.prototype.writeFloatUnsafe = function(c) {
        this._f32[this._offset >> 2] = c;
        this._offset += 4;
      };
      c.prototype.write4Floats = function(c, e, f, d) {
        this.ensureCapacity(this._offset + 16);
        this.write4FloatsUnsafe(c, e, f, d);
      };
      c.prototype.write4FloatsUnsafe = function(c, e, f, d) {
        var a = this._offset >> 2;
        this._f32[a + 0] = c;
        this._f32[a + 1] = e;
        this._f32[a + 2] = f;
        this._f32[a + 3] = d;
        this._offset += 16;
      };
      c.prototype.write6Floats = function(c, e, f, d, a, l) {
        this.ensureCapacity(this._offset + 24);
        this.write6FloatsUnsafe(c, e, f, d, a, l);
      };
      c.prototype.write6FloatsUnsafe = function(c, e, f, d, a, l) {
        var h = this._offset >> 2;
        this._f32[h + 0] = c;
        this._f32[h + 1] = e;
        this._f32[h + 2] = f;
        this._f32[h + 3] = d;
        this._f32[h + 4] = a;
        this._f32[h + 5] = l;
        this._offset += 24;
      };
      c.prototype.subF32View = function() {
        return this._f32.subarray(0, this._offset >> 2);
      };
      c.prototype.subI32View = function() {
        return this._i32.subarray(0, this._offset >> 2);
      };
      c.prototype.subU16View = function() {
        return this._u16.subarray(0, this._offset >> 1);
      };
      c.prototype.subU8View = function() {
        return this._u8.subarray(0, this._offset);
      };
      c.prototype.hashWords = function(c, e, f) {
        e = this._i32;
        for (var d = 0;d < f;d++) {
          c = (31 * c | 0) + e[d] | 0;
        }
        return c;
      };
      c.prototype.reserve = function(c) {
        c = c + 3 & -4;
        this.ensureCapacity(this._offset + c);
        this._offset += c;
      };
      return c;
    }();
    d.ArrayWriter = e;
  })(k.ArrayUtilities || (k.ArrayUtilities = {}));
  var a = function() {
    function d(f) {
      this._u8 = new Uint8Array(f);
      this._u16 = new Uint16Array(f);
      this._i32 = new Int32Array(f);
      this._f32 = new Float32Array(f);
      this._offset = 0;
    }
    Object.defineProperty(d.prototype, "offset", {get:function() {
      return this._offset;
    }, enumerable:!0, configurable:!0});
    d.prototype.isEmpty = function() {
      return this._offset === this._u8.length;
    };
    d.prototype.readInt = function() {
      var f = this._i32[this._offset >> 2];
      this._offset += 4;
      return f;
    };
    d.prototype.readFloat = function() {
      var f = this._f32[this._offset >> 2];
      this._offset += 4;
      return f;
    };
    return d;
  }();
  k.ArrayReader = a;
  (function(d) {
    function f(c, n) {
      return Object.prototype.hasOwnProperty.call(c, n);
    }
    function e(c, n) {
      for (var e in n) {
        f(n, e) && (c[e] = n[e]);
      }
    }
    d.boxValue = function(c) {
      return void 0 == c || g(c) ? c : Object(c);
    };
    d.toKeyValueArray = function(c) {
      var n = Object.prototype.hasOwnProperty, e = [], f;
      for (f in c) {
        n.call(c, f) && e.push([f, c[f]]);
      }
      return e;
    };
    d.isPrototypeWriteable = function(c) {
      return Object.getOwnPropertyDescriptor(c, "prototype").writable;
    };
    d.hasOwnProperty = f;
    d.propertyIsEnumerable = function(c, n) {
      return Object.prototype.propertyIsEnumerable.call(c, n);
    };
    d.getPropertyDescriptor = function(c, n) {
      do {
        var e = Object.getOwnPropertyDescriptor(c, n);
        if (e) {
          return e;
        }
        c = Object.getPrototypeOf(c);
      } while (c);
      return null;
    };
    d.hasOwnGetter = function(c, n) {
      var e = Object.getOwnPropertyDescriptor(c, n);
      return !(!e || !e.get);
    };
    d.getOwnGetter = function(c, n) {
      var e = Object.getOwnPropertyDescriptor(c, n);
      return e ? e.get : null;
    };
    d.hasOwnSetter = function(c, n) {
      var e = Object.getOwnPropertyDescriptor(c, n);
      return !(!e || !e.set);
    };
    d.createMap = function() {
      return Object.create(null);
    };
    d.createArrayMap = function() {
      return [];
    };
    d.defineReadOnlyProperty = function(c, n, e) {
      Object.defineProperty(c, n, {value:e, writable:!1, configurable:!0, enumerable:!1});
    };
    d.getOwnPropertyDescriptors = function(c) {
      for (var e = d.createMap(), f = Object.getOwnPropertyNames(c), F = 0;F < f.length;F++) {
        e[f[F]] = Object.getOwnPropertyDescriptor(c, f[F]);
      }
      return e;
    };
    d.cloneObject = function(c) {
      var n = Object.create(Object.getPrototypeOf(c));
      e(n, c);
      return n;
    };
    d.copyProperties = function(c, e) {
      for (var f in e) {
        c[f] = e[f];
      }
    };
    d.copyOwnProperties = e;
    d.copyOwnPropertyDescriptors = function(c, e, x, d, a) {
      void 0 === x && (x = null);
      void 0 === d && (d = !0);
      void 0 === a && (a = !1);
      for (var l in e) {
        if (f(e, l) && (!x || x(l))) {
          var h = Object.getOwnPropertyDescriptor(e, l);
          if (d || !f(c, l)) {
            try {
              a && !1 === h.writable && (h.writable = !0), Object.defineProperty(c, l, h);
            } catch (m) {
              v.assert("Can't define: " + l);
            }
          }
        }
      }
    };
    d.copyPropertiesByList = function(c, e, f) {
      for (var d = 0;d < f.length;d++) {
        var a = f[d];
        c[a] = e[a];
      }
    };
    d.getLatestGetterOrSetterPropertyDescriptor = function(c, e) {
      for (var f = {};c;) {
        var d = Object.getOwnPropertyDescriptor(c, e);
        d && (f.get = f.get || d.get, f.set = f.set || d.set);
        if (f.get && f.set) {
          break;
        }
        c = Object.getPrototypeOf(c);
      }
      return f;
    };
    d.defineNonEnumerableGetterOrSetter = function(c, e, f, F) {
      var a = d.getLatestGetterOrSetterPropertyDescriptor(c, e);
      a.configurable = !0;
      a.enumerable = !1;
      F ? a.get = f : a.set = f;
      Object.defineProperty(c, e, a);
    };
    d.defineNonEnumerableGetter = function(c, e, f) {
      Object.defineProperty(c, e, {get:f, configurable:!0, enumerable:!1});
    };
    d.defineNonEnumerableSetter = function(c, e, f) {
      Object.defineProperty(c, e, {set:f, configurable:!0, enumerable:!1});
    };
    d.defineNonEnumerableProperty = function(c, e, f) {
      Object.defineProperty(c, e, {value:f, writable:!0, configurable:!0, enumerable:!1});
    };
    d.defineNonEnumerableForwardingProperty = function(c, e, f) {
      Object.defineProperty(c, e, {get:l.makeForwardingGetter(f), set:l.makeForwardingSetter(f), writable:!0, configurable:!0, enumerable:!1});
    };
    d.defineNewNonEnumerableProperty = function(c, e, f) {
      d.defineNonEnumerableProperty(c, e, f);
    };
    d.createPublicAliases = function(c, e) {
      for (var f = {value:null, writable:!0, configurable:!0, enumerable:!1}, d = 0;d < e.length;d++) {
        var a = e[d];
        f.value = c[a];
        Object.defineProperty(c, "$Bg" + a, f);
      }
    };
  })(k.ObjectUtilities || (k.ObjectUtilities = {}));
  var l;
  (function(d) {
    d.makeForwardingGetter = function(f) {
      return new Function('return this["' + f + '"]//# sourceURL=fwd-get-' + f + ".as");
    };
    d.makeForwardingSetter = function(f) {
      return new Function("value", 'this["' + f + '"] = value;//# sourceURL=fwd-set-' + f + ".as");
    };
    d.bindSafely = function(f, e) {
      function c() {
        return f.apply(e, arguments);
      }
      c.boundTo = e;
      return c;
    };
  })(l = k.FunctionUtilities || (k.FunctionUtilities = {}));
  (function(d) {
    function f(c) {
      return "string" === typeof c ? '"' + c + '"' : "number" === typeof c || "boolean" === typeof c ? String(c) : c instanceof Array ? "[] " + c.length : typeof c;
    }
    function e(c, e, f) {
      n[0] = c;
      n[1] = e;
      n[2] = f;
      return n.join("");
    }
    function c(c, e, n, f) {
      x[0] = c;
      x[1] = e;
      x[2] = n;
      x[3] = f;
      return x.join("");
    }
    d.repeatString = function(c, e) {
      for (var n = "", f = 0;f < e;f++) {
        n += c;
      }
      return n;
    };
    d.memorySizeToString = function(c) {
      c |= 0;
      return 1024 > c ? c + " B" : 1048576 > c ? (c / 1024).toFixed(2) + "KB" : (c / 1048576).toFixed(2) + "MB";
    };
    d.toSafeString = f;
    d.toSafeArrayString = function(c) {
      for (var e = [], n = 0;n < c.length;n++) {
        e.push(f(c[n]));
      }
      return e.join(", ");
    };
    d.utf8decode = function(c) {
      for (var e = new Uint8Array(4 * c.length), n = 0, f = 0, d = c.length;f < d;f++) {
        var x = c.charCodeAt(f);
        if (127 >= x) {
          e[n++] = x;
        } else {
          if (55296 <= x && 56319 >= x) {
            var a = c.charCodeAt(f + 1);
            56320 <= a && 57343 >= a && (x = ((x & 1023) << 10) + (a & 1023) + 65536, ++f);
          }
          0 !== (x & 4292870144) ? (e[n++] = 248 | x >>> 24 & 3, e[n++] = 128 | x >>> 18 & 63, e[n++] = 128 | x >>> 12 & 63, e[n++] = 128 | x >>> 6 & 63) : 0 !== (x & 4294901760) ? (e[n++] = 240 | x >>> 18 & 7, e[n++] = 128 | x >>> 12 & 63, e[n++] = 128 | x >>> 6 & 63) : 0 !== (x & 4294965248) ? (e[n++] = 224 | x >>> 12 & 15, e[n++] = 128 | x >>> 6 & 63) : e[n++] = 192 | x >>> 6 & 31;
          e[n++] = 128 | x & 63;
        }
      }
      return e.subarray(0, n);
    };
    d.utf8encode = function(c) {
      for (var e = 0, n = "";e < c.length;) {
        var f = c[e++] & 255;
        if (127 >= f) {
          n += String.fromCharCode(f);
        } else {
          var d = 192, x = 5;
          do {
            if ((f & (d >> 1 | 128)) === d) {
              break;
            }
            d = d >> 1 | 128;
            --x;
          } while (0 <= x);
          if (0 >= x) {
            n += String.fromCharCode(f);
          } else {
            for (var f = f & (1 << x) - 1, d = !1, a = 5;a >= x;--a) {
              var F = c[e++];
              if (128 != (F & 192)) {
                d = !0;
                break;
              }
              f = f << 6 | F & 63;
            }
            if (d) {
              for (x = e - (7 - a);x < e;++x) {
                n += String.fromCharCode(c[x] & 255);
              }
            } else {
              n = 65536 <= f ? n + String.fromCharCode(f - 65536 >> 10 & 1023 | 55296, f & 1023 | 56320) : n + String.fromCharCode(f);
            }
          }
        }
      }
      return n;
    };
    d.base64ArrayBuffer = function(n) {
      var f = "";
      n = new Uint8Array(n);
      for (var d = n.byteLength, x = d % 3, d = d - x, a, F, l, I, h = 0;h < d;h += 3) {
        I = n[h] << 16 | n[h + 1] << 8 | n[h + 2], a = (I & 16515072) >> 18, F = (I & 258048) >> 12, l = (I & 4032) >> 6, I &= 63, f += c("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[a], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[F], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[l], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[I]);
      }
      1 == x ? (I = n[d], f += e("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(I & 252) >> 2], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(I & 3) << 4], "==")) : 2 == x && (I = n[d] << 8 | n[d + 1], f += c("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(I & 64512) >> 10], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(I & 1008) >> 4], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(I & 15) << 
      2], "="));
      return f;
    };
    d.escapeString = function(c) {
      void 0 !== c && (c = c.replace(/[^\w$]/gi, "$"), /^\d/.test(c) && (c = "$" + c));
      return c;
    };
    d.fromCharCodeArray = function(c) {
      for (var e = "", n = 0;n < c.length;n += 16384) {
        var f = Math.min(c.length - n, 16384), e = e + String.fromCharCode.apply(null, c.subarray(n, n + f))
      }
      return e;
    };
    d.variableLengthEncodeInt32 = function(c) {
      for (var e = 32 - Math.clz32(c), n = Math.ceil(e / 6), e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[n], n = n - 1;0 <= n;n--) {
        e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[c >> 6 * n & 63];
      }
      return e;
    };
    d.toEncoding = function(c) {
      return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$_"[c];
    };
    d.fromEncoding = function(c) {
      if (65 <= c && 90 >= c) {
        return c - 65;
      }
      if (97 <= c && 122 >= c) {
        return c - 71;
      }
      if (48 <= c && 57 >= c) {
        return c + 4;
      }
      if (36 === c) {
        return 62;
      }
      if (95 === c) {
        return 63;
      }
    };
    d.variableLengthDecodeInt32 = function(c) {
      for (var e = d.fromEncoding(c.charCodeAt(0)), n = 0, f = 0;f < e;f++) {
        var x = 6 * (e - f - 1), n = n | d.fromEncoding(c.charCodeAt(1 + f)) << x
      }
      return n;
    };
    d.trimMiddle = function(c, e) {
      if (c.length <= e) {
        return c;
      }
      var n = e >> 1, f = e - n - 1;
      return c.substr(0, n) + "\u2026" + c.substr(c.length - f, f);
    };
    d.multiple = function(c, e) {
      for (var n = "", f = 0;f < e;f++) {
        n += c;
      }
      return n;
    };
    d.indexOfAny = function(c, e, n) {
      for (var f = c.length, d = 0;d < e.length;d++) {
        var x = c.indexOf(e[d], n);
        0 <= x && (f = Math.min(f, x));
      }
      return f === c.length ? -1 : f;
    };
    var n = Array(3), x = Array(4), a = Array(5), l = Array(6), h = Array(7), m = Array(8), u = Array(9);
    d.concat3 = e;
    d.concat4 = c;
    d.concat5 = function(c, e, n, f, d) {
      a[0] = c;
      a[1] = e;
      a[2] = n;
      a[3] = f;
      a[4] = d;
      return a.join("");
    };
    d.concat6 = function(c, e, n, f, d, x) {
      l[0] = c;
      l[1] = e;
      l[2] = n;
      l[3] = f;
      l[4] = d;
      l[5] = x;
      return l.join("");
    };
    d.concat7 = function(c, e, n, f, d, x, a) {
      h[0] = c;
      h[1] = e;
      h[2] = n;
      h[3] = f;
      h[4] = d;
      h[5] = x;
      h[6] = a;
      return h.join("");
    };
    d.concat8 = function(c, e, n, f, d, x, a, F) {
      m[0] = c;
      m[1] = e;
      m[2] = n;
      m[3] = f;
      m[4] = d;
      m[5] = x;
      m[6] = a;
      m[7] = F;
      return m.join("");
    };
    d.concat9 = function(c, e, n, f, d, x, a, F, l) {
      u[0] = c;
      u[1] = e;
      u[2] = n;
      u[3] = f;
      u[4] = d;
      u[5] = x;
      u[6] = a;
      u[7] = F;
      u[8] = l;
      return u.join("");
    };
  })(k.StringUtilities || (k.StringUtilities = {}));
  (function(d) {
    var f = new Uint8Array([7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21]), e = new Int32Array([-680876936, -389564586, 606105819, -1044525330, -176418897, 1200080426, -1473231341, -45705983, 1770035416, -1958414417, -42063, -1990404162, 1804603682, -40341101, -1502002290, 1236535329, -165796510, -1069501632, 
    643717713, -373897302, -701558691, 38016083, -660478335, -405537848, 568446438, -1019803690, -187363961, 1163531501, -1444681467, -51403784, 1735328473, -1926607734, -378558, -2022574463, 1839030562, -35309556, -1530992060, 1272893353, -155497632, -1094730640, 681279174, -358537222, -722521979, 76029189, -640364487, -421815835, 530742520, -995338651, -198630844, 1126891415, -1416354905, -57434055, 1700485571, -1894986606, -1051523, -2054922799, 1873313359, -30611744, -1560198380, 1309151649, 
    -145523070, -1120210379, 718787259, -343485551]);
    d.hashBytesTo32BitsMD5 = function(c, n, d) {
      var a = 1732584193, l = -271733879, h = -1732584194, m = 271733878, u = d + 72 & -64, q = new Uint8Array(u), b;
      for (b = 0;b < d;++b) {
        q[b] = c[n++];
      }
      q[b++] = 128;
      for (c = u - 8;b < c;) {
        q[b++] = 0;
      }
      q[b++] = d << 3 & 255;
      q[b++] = d >> 5 & 255;
      q[b++] = d >> 13 & 255;
      q[b++] = d >> 21 & 255;
      q[b++] = d >>> 29 & 255;
      q[b++] = 0;
      q[b++] = 0;
      q[b++] = 0;
      c = new Int32Array(16);
      for (b = 0;b < u;) {
        for (d = 0;16 > d;++d, b += 4) {
          c[d] = q[b] | q[b + 1] << 8 | q[b + 2] << 16 | q[b + 3] << 24;
        }
        var t = a;
        n = l;
        var r = h, v = m, g, k;
        for (d = 0;64 > d;++d) {
          16 > d ? (g = n & r | ~n & v, k = d) : 32 > d ? (g = v & n | ~v & r, k = 5 * d + 1 & 15) : 48 > d ? (g = n ^ r ^ v, k = 3 * d + 5 & 15) : (g = r ^ (n | ~v), k = 7 * d & 15);
          var p = v, t = t + g + e[d] + c[k] | 0;
          g = f[d];
          v = r;
          r = n;
          n = n + (t << g | t >>> 32 - g) | 0;
          t = p;
        }
        a = a + t | 0;
        l = l + n | 0;
        h = h + r | 0;
        m = m + v | 0;
      }
      return a;
    };
    d.hashBytesTo32BitsAdler = function(c, e, f) {
      var d = 1, a = 0;
      for (f = e + f;e < f;++e) {
        d = (d + (c[e] & 255)) % 65521, a = (a + d) % 65521;
      }
      return a << 16 | d;
    };
    d.mixHash = function(c, e) {
      return (31 * c | 0) + e | 0;
    };
  })(k.HashUtilities || (k.HashUtilities = {}));
  var q = function() {
    function d() {
    }
    d.seed = function(f) {
      d._state[0] = f;
      d._state[1] = f;
    };
    d.reset = function() {
      d._state[0] = 57005;
      d._state[1] = 48879;
    };
    d.next = function() {
      var f = this._state, e = Math.imul(18273, f[0] & 65535) + (f[0] >>> 16) | 0;
      f[0] = e;
      var c = Math.imul(36969, f[1] & 65535) + (f[1] >>> 16) | 0;
      f[1] = c;
      f = (e << 16) + (c & 65535) | 0;
      return 2.3283064365386963E-10 * (0 > f ? f + 4294967296 : f);
    };
    d._state = new Uint32Array([57005, 48879]);
    return d;
  }();
  k.Random = q;
  Math.random = function() {
    return q.next();
  };
  (function() {
    function d() {
      this.id = "$weakmap" + f++;
    }
    if ("function" !== typeof jsGlobal.WeakMap) {
      var f = 0;
      d.prototype = {has:function(e) {
        return e.hasOwnProperty(this.id);
      }, get:function(e, c) {
        return e.hasOwnProperty(this.id) ? e[this.id] : c;
      }, set:function(e, c) {
        Object.defineProperty(e, this.id, {value:c, enumerable:!1, configurable:!0});
      }, delete:function(e) {
        delete e[this.id];
      }};
      jsGlobal.WeakMap = d;
    }
  })();
  a = function() {
    function d() {
      "undefined" !== typeof ShumwayCom && ShumwayCom.getWeakMapKeys ? this._map = new WeakMap : this._list = [];
    }
    d.prototype.clear = function() {
      this._map ? this._map.clear() : this._list.length = 0;
    };
    d.prototype.push = function(f) {
      this._map ? this._map.set(f, null) : this._list.push(f);
    };
    d.prototype.remove = function(f) {
      this._map ? this._map.delete(f) : this._list[this._list.indexOf(f)] = null;
    };
    d.prototype.forEach = function(f) {
      if (this._map) {
        ShumwayCom.getWeakMapKeys(this._map).forEach(function(c) {
          0 !== c._referenceCount && f(c);
        });
      } else {
        for (var e = this._list, c = 0, n = 0;n < e.length;n++) {
          var d = e[n];
          d && (0 === d._referenceCount ? (e[n] = null, c++) : f(d));
        }
        if (16 < c && c > e.length >> 2) {
          c = [];
          for (n = 0;n < e.length;n++) {
            (d = e[n]) && 0 < d._referenceCount && c.push(d);
          }
          this._list = c;
        }
      }
    };
    Object.defineProperty(d.prototype, "length", {get:function() {
      return this._map ? -1 : this._list.length;
    }, enumerable:!0, configurable:!0});
    return d;
  }();
  k.WeakList = a;
  var h;
  (function(d) {
    d.pow2 = function(f) {
      return f === (f | 0) ? 0 > f ? 1 / (1 << -f) : 1 << f : Math.pow(2, f);
    };
    d.clamp = function(f, e, c) {
      return Math.max(e, Math.min(c, f));
    };
    d.roundHalfEven = function(f) {
      if (.5 === Math.abs(f % 1)) {
        var e = Math.floor(f);
        return 0 === e % 2 ? e : Math.ceil(f);
      }
      return Math.round(f);
    };
    d.altTieBreakRound = function(f, e) {
      return .5 !== Math.abs(f % 1) || e ? Math.round(f) : f | 0;
    };
    d.epsilonEquals = function(f, e) {
      return 1E-7 > Math.abs(f - e);
    };
  })(h = k.NumberUtilities || (k.NumberUtilities = {}));
  (function(d) {
    d[d.MaxU16 = 65535] = "MaxU16";
    d[d.MaxI16 = 32767] = "MaxI16";
    d[d.MinI16 = -32768] = "MinI16";
  })(k.Numbers || (k.Numbers = {}));
  var t;
  (function(d) {
    function f(c) {
      return 256 * c << 16 >> 16;
    }
    var e = new ArrayBuffer(8);
    d.i8 = new Int8Array(e);
    d.u8 = new Uint8Array(e);
    d.i32 = new Int32Array(e);
    d.f32 = new Float32Array(e);
    d.f64 = new Float64Array(e);
    d.nativeLittleEndian = 1 === (new Int8Array((new Int32Array([1])).buffer))[0];
    d.floatToInt32 = function(c) {
      d.f32[0] = c;
      return d.i32[0];
    };
    d.int32ToFloat = function(c) {
      d.i32[0] = c;
      return d.f32[0];
    };
    d.swap16 = function(c) {
      return (c & 255) << 8 | c >> 8 & 255;
    };
    d.swap32 = function(c) {
      return (c & 255) << 24 | (c & 65280) << 8 | c >> 8 & 65280 | c >> 24 & 255;
    };
    d.toS8U8 = f;
    d.fromS8U8 = function(c) {
      return c / 256;
    };
    d.clampS8U8 = function(c) {
      return f(c) / 256;
    };
    d.toS16 = function(c) {
      return c << 16 >> 16;
    };
    d.bitCount = function(c) {
      c -= c >> 1 & 1431655765;
      c = (c & 858993459) + (c >> 2 & 858993459);
      return 16843009 * (c + (c >> 4) & 252645135) >> 24;
    };
    d.ones = function(c) {
      c -= c >> 1 & 1431655765;
      c = (c & 858993459) + (c >> 2 & 858993459);
      return 16843009 * (c + (c >> 4) & 252645135) >> 24;
    };
    d.trailingZeros = function(c) {
      return d.ones((c & -c) - 1);
    };
    d.getFlags = function(c, e) {
      var f = "";
      for (c = 0;c < e.length;c++) {
        c & 1 << c && (f += e[c] + " ");
      }
      return 0 === f.length ? "" : f.trim();
    };
    d.isPowerOfTwo = function(c) {
      return c && 0 === (c & c - 1);
    };
    d.roundToMultipleOfFour = function(c) {
      return c + 3 & -4;
    };
    d.nearestPowerOfTwo = function(c) {
      c--;
      c |= c >> 1;
      c |= c >> 2;
      c |= c >> 4;
      c |= c >> 8;
      c |= c >> 16;
      c++;
      return c;
    };
    d.roundToMultipleOfPowerOfTwo = function(c, e) {
      var f = (1 << e) - 1;
      return c + f & ~f;
    };
    d.toHEX = function(c) {
      return "0x" + ("00000000" + (0 > c ? 4294967295 + c + 1 : c).toString(16)).substr(-8);
    };
    Math.imul || (Math.imul = function(c, e) {
      var f = c & 65535, d = e & 65535;
      return f * d + ((c >>> 16 & 65535) * d + f * (e >>> 16 & 65535) << 16 >>> 0) | 0;
    });
    Math.clz32 || (Math.clz32 = function(c) {
      c |= c >> 1;
      c |= c >> 2;
      c |= c >> 4;
      c |= c >> 8;
      return 32 - d.ones(c | c >> 16);
    });
  })(t = k.IntegerUtilities || (k.IntegerUtilities = {}));
  (function(d) {
    function f(e, c, n, f, d, a) {
      return (n - e) * (a - c) - (f - c) * (d - e);
    }
    d.pointInPolygon = function(e, c, n) {
      for (var f = 0, d = n.length - 2, a = 0;a < d;a += 2) {
        var l = n[a + 0], h = n[a + 1], m = n[a + 2], u = n[a + 3];
        (h <= c && u > c || h > c && u <= c) && e < l + (c - h) / (u - h) * (m - l) && f++;
      }
      return 1 === (f & 1);
    };
    d.signedArea = f;
    d.counterClockwise = function(e, c, n, d, a, l) {
      return 0 < f(e, c, n, d, a, l);
    };
    d.clockwise = function(e, c, n, d, a, l) {
      return 0 > f(e, c, n, d, a, l);
    };
    d.pointInPolygonInt32 = function(e, c, n) {
      e |= 0;
      c |= 0;
      for (var f = 0, d = n.length - 2, a = 0;a < d;a += 2) {
        var l = n[a + 0], h = n[a + 1], m = n[a + 2], u = n[a + 3];
        (h <= c && u > c || h > c && u <= c) && e < l + (c - h) / (u - h) * (m - l) && f++;
      }
      return 1 === (f & 1);
    };
  })(k.GeometricUtilities || (k.GeometricUtilities = {}));
  (function(d) {
    d[d.Error = 1] = "Error";
    d[d.Warn = 2] = "Warn";
    d[d.Debug = 4] = "Debug";
    d[d.Log = 8] = "Log";
    d[d.Info = 16] = "Info";
    d[d.All = 31] = "All";
  })(k.LogLevel || (k.LogLevel = {}));
  a = function() {
    function d(f, e) {
      void 0 === f && (f = !1);
      this._tab = "  ";
      this._padding = "";
      this._suppressOutput = f;
      this._out = e || d._consoleOut;
      this._outNoNewline = e || d._consoleOutNoNewline;
    }
    Object.defineProperty(d.prototype, "suppressOutput", {get:function() {
      return this._suppressOutput;
    }, set:function(f) {
      this._suppressOutput = f;
    }, enumerable:!0, configurable:!0});
    d.prototype.write = function(f, e) {
      void 0 === f && (f = "");
      void 0 === e && (e = !1);
      this._suppressOutput || this._outNoNewline((e ? this._padding : "") + f);
    };
    d.prototype.writeLn = function(f) {
      void 0 === f && (f = "");
      this._suppressOutput || this._out(this._padding + f);
    };
    d.prototype.writeObject = function(f, e) {
      void 0 === f && (f = "");
      this._suppressOutput || this._out(this._padding + f, e);
    };
    d.prototype.writeTimeLn = function(f) {
      void 0 === f && (f = "");
      this._suppressOutput || this._out(this._padding + performance.now().toFixed(2) + " " + f);
    };
    d.prototype.writeComment = function(f) {
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
    d.prototype.writeLns = function(f) {
      f = (f || "").split("\n");
      for (var e = 0;e < f.length;e++) {
        this.writeLn(f[e]);
      }
    };
    d.prototype.errorLn = function(f) {
      d.logLevel & 1 && this.boldRedLn(f);
    };
    d.prototype.warnLn = function(f) {
      d.logLevel & 2 && this.yellowLn(f);
    };
    d.prototype.debugLn = function(f) {
      d.logLevel & 4 && this.purpleLn(f);
    };
    d.prototype.logLn = function(f) {
      d.logLevel & 8 && this.writeLn(f);
    };
    d.prototype.infoLn = function(f) {
      d.logLevel & 16 && this.writeLn(f);
    };
    d.prototype.yellowLn = function(f) {
      this.colorLn(d.YELLOW, f);
    };
    d.prototype.greenLn = function(f) {
      this.colorLn(d.GREEN, f);
    };
    d.prototype.boldRedLn = function(f) {
      this.colorLn(d.BOLD_RED, f);
    };
    d.prototype.redLn = function(f) {
      this.colorLn(d.RED, f);
    };
    d.prototype.purpleLn = function(f) {
      this.colorLn(d.PURPLE, f);
    };
    d.prototype.colorLn = function(f, e) {
      this._suppressOutput || (inBrowser ? this._out(this._padding + e) : this._out(this._padding + f + e + d.ENDC));
    };
    d.prototype.redLns = function(f) {
      this.colorLns(d.RED, f);
    };
    d.prototype.colorLns = function(f, e) {
      for (var c = (e || "").split("\n"), n = 0;n < c.length;n++) {
        this.colorLn(f, c[n]);
      }
    };
    d.prototype.enter = function(f) {
      this._suppressOutput || this._out(this._padding + f);
      this.indent();
    };
    d.prototype.leaveAndEnter = function(f) {
      this.leave(f);
      this.indent();
    };
    d.prototype.leave = function(f) {
      this.outdent();
      !this._suppressOutput && f && this._out(this._padding + f);
    };
    d.prototype.indent = function() {
      this._padding += this._tab;
    };
    d.prototype.outdent = function() {
      0 < this._padding.length && (this._padding = this._padding.substring(0, this._padding.length - this._tab.length));
    };
    d.prototype.writeArray = function(f, e, c) {
      void 0 === e && (e = !1);
      void 0 === c && (c = !1);
      e = e || !1;
      for (var n = 0, d = f.length;n < d;n++) {
        var a = "";
        e && (a = null === f[n] ? "null" : void 0 === f[n] ? "undefined" : f[n].constructor.name, a += " ");
        var l = c ? "" : ("" + n).padRight(" ", 4);
        this.writeLn(l + a + f[n]);
      }
    };
    d.PURPLE = "\u001b[94m";
    d.YELLOW = "\u001b[93m";
    d.GREEN = "\u001b[92m";
    d.RED = "\u001b[91m";
    d.BOLD_RED = "\u001b[1;91m";
    d.ENDC = "\u001b[0m";
    d.logLevel = 31;
    d._consoleOut = console.log.bind(console);
    d._consoleOutNoNewline = console.log.bind(console);
    return d;
  }();
  k.IndentingWriter = a;
  var r = function() {
    return function(d, f) {
      this.value = d;
      this.next = f;
    };
  }(), a = function() {
    function d(f) {
      this._compare = f;
      this._head = null;
      this._length = 0;
    }
    d.prototype.push = function(f) {
      this._length++;
      if (this._head) {
        var e = this._head, c = null;
        f = new r(f, null);
        for (var n = this._compare;e;) {
          if (0 < n(e.value, f.value)) {
            c ? (f.next = e, c.next = f) : (f.next = this._head, this._head = f);
            return;
          }
          c = e;
          e = e.next;
        }
        c.next = f;
      } else {
        this._head = new r(f, null);
      }
    };
    d.prototype.forEach = function(f) {
      for (var e = this._head, c = null;e;) {
        var n = f(e.value);
        if (n === d.RETURN) {
          break;
        } else {
          n === d.DELETE ? e = c ? c.next = e.next : this._head = this._head.next : (c = e, e = e.next);
        }
      }
    };
    d.prototype.isEmpty = function() {
      return !this._head;
    };
    d.prototype.pop = function() {
      if (this._head) {
        this._length--;
        var f = this._head;
        this._head = this._head.next;
        return f.value;
      }
    };
    d.prototype.contains = function(f) {
      for (var e = this._head;e;) {
        if (e.value === f) {
          return !0;
        }
        e = e.next;
      }
      return !1;
    };
    d.prototype.toString = function() {
      for (var f = "[", e = this._head;e;) {
        f += e.value.toString(), (e = e.next) && (f += ",");
      }
      return f + "]";
    };
    d.RETURN = 1;
    d.DELETE = 2;
    return d;
  }();
  k.SortedList = a;
  a = function() {
    function d(f, e) {
      void 0 === e && (e = 12);
      this.start = this.index = 0;
      this._size = 1 << e;
      this._mask = this._size - 1;
      this.array = new f(this._size);
    }
    d.prototype.get = function(f) {
      return this.array[f];
    };
    d.prototype.forEachInReverse = function(f) {
      if (!this.isEmpty()) {
        for (var e = 0 === this.index ? this._size - 1 : this.index - 1, c = this.start - 1 & this._mask;e !== c && !f(this.array[e], e);) {
          e = 0 === e ? this._size - 1 : e - 1;
        }
      }
    };
    d.prototype.write = function(f) {
      this.array[this.index] = f;
      this.index = this.index + 1 & this._mask;
      this.index === this.start && (this.start = this.start + 1 & this._mask);
    };
    d.prototype.isFull = function() {
      return (this.index + 1 & this._mask) === this.start;
    };
    d.prototype.isEmpty = function() {
      return this.index === this.start;
    };
    d.prototype.reset = function() {
      this.start = this.index = 0;
    };
    return d;
  }();
  k.CircularBuffer = a;
  (function(d) {
    function f(c) {
      return c + (d.BITS_PER_WORD - 1) >> d.ADDRESS_BITS_PER_WORD << d.ADDRESS_BITS_PER_WORD;
    }
    function e(c, e) {
      c = c || "1";
      e = e || "0";
      for (var n = "", f = 0;f < length;f++) {
        n += this.get(f) ? c : e;
      }
      return n;
    }
    function c(c) {
      for (var e = [], n = 0;n < length;n++) {
        this.get(n) && e.push(c ? c[n] : n);
      }
      return e.join(", ");
    }
    d.ADDRESS_BITS_PER_WORD = 5;
    d.BITS_PER_WORD = 1 << d.ADDRESS_BITS_PER_WORD;
    d.BIT_INDEX_MASK = d.BITS_PER_WORD - 1;
    var n = function() {
      function c(e) {
        this.size = f(e);
        this.dirty = this.count = 0;
        this.length = e;
        this.bits = new Uint32Array(this.size >> d.ADDRESS_BITS_PER_WORD);
      }
      c.prototype.recount = function() {
        if (this.dirty) {
          for (var c = this.bits, e = 0, n = 0, f = c.length;n < f;n++) {
            var d = c[n], d = d - (d >> 1 & 1431655765), d = (d & 858993459) + (d >> 2 & 858993459), e = e + (16843009 * (d + (d >> 4) & 252645135) >> 24)
          }
          this.count = e;
          this.dirty = 0;
        }
      };
      c.prototype.set = function(c) {
        var e = c >> d.ADDRESS_BITS_PER_WORD, n = this.bits[e];
        c = n | 1 << (c & d.BIT_INDEX_MASK);
        this.bits[e] = c;
        this.dirty |= n ^ c;
      };
      c.prototype.setAll = function() {
        for (var c = this.bits, e = 0, n = c.length;e < n;e++) {
          c[e] = 4294967295;
        }
        this.count = this.size;
        this.dirty = 0;
      };
      c.prototype.assign = function(c) {
        this.count = c.count;
        this.dirty = c.dirty;
        this.size = c.size;
        for (var e = 0, n = this.bits.length;e < n;e++) {
          this.bits[e] = c.bits[e];
        }
      };
      c.prototype.clear = function(c) {
        var e = c >> d.ADDRESS_BITS_PER_WORD, n = this.bits[e];
        c = n & ~(1 << (c & d.BIT_INDEX_MASK));
        this.bits[e] = c;
        this.dirty |= n ^ c;
      };
      c.prototype.get = function(c) {
        return 0 !== (this.bits[c >> d.ADDRESS_BITS_PER_WORD] & 1 << (c & d.BIT_INDEX_MASK));
      };
      c.prototype.clearAll = function() {
        for (var c = this.bits, e = 0, n = c.length;e < n;e++) {
          c[e] = 0;
        }
        this.dirty = this.count = 0;
      };
      c.prototype._union = function(c) {
        var e = this.dirty, n = this.bits;
        c = c.bits;
        for (var f = 0, d = n.length;f < d;f++) {
          var x = n[f], a = x | c[f];
          n[f] = a;
          e |= x ^ a;
        }
        this.dirty = e;
      };
      c.prototype.intersect = function(c) {
        var e = this.dirty, n = this.bits;
        c = c.bits;
        for (var f = 0, d = n.length;f < d;f++) {
          var x = n[f], a = x & c[f];
          n[f] = a;
          e |= x ^ a;
        }
        this.dirty = e;
      };
      c.prototype.subtract = function(c) {
        var e = this.dirty, n = this.bits;
        c = c.bits;
        for (var f = 0, d = n.length;f < d;f++) {
          var x = n[f], a = x & ~c[f];
          n[f] = a;
          e |= x ^ a;
        }
        this.dirty = e;
      };
      c.prototype.negate = function() {
        for (var c = this.dirty, e = this.bits, n = 0, f = e.length;n < f;n++) {
          var d = e[n], x = ~d;
          e[n] = x;
          c |= d ^ x;
        }
        this.dirty = c;
      };
      c.prototype.forEach = function(c) {
        for (var e = this.bits, n = 0, f = e.length;n < f;n++) {
          var x = e[n];
          if (x) {
            for (var a = 0;a < d.BITS_PER_WORD;a++) {
              x & 1 << a && c(n * d.BITS_PER_WORD + a);
            }
          }
        }
      };
      c.prototype.toArray = function() {
        for (var c = [], e = this.bits, n = 0, f = e.length;n < f;n++) {
          var x = e[n];
          if (x) {
            for (var a = 0;a < d.BITS_PER_WORD;a++) {
              x & 1 << a && c.push(n * d.BITS_PER_WORD + a);
            }
          }
        }
        return c;
      };
      c.prototype.equals = function(c) {
        if (this.size !== c.size) {
          return !1;
        }
        var e = this.bits;
        c = c.bits;
        for (var n = 0, f = e.length;n < f;n++) {
          if (e[n] !== c[n]) {
            return !1;
          }
        }
        return !0;
      };
      c.prototype.contains = function(c) {
        if (this.size !== c.size) {
          return !1;
        }
        var e = this.bits;
        c = c.bits;
        for (var n = 0, f = e.length;n < f;n++) {
          if ((e[n] | c[n]) !== e[n]) {
            return !1;
          }
        }
        return !0;
      };
      c.prototype.isEmpty = function() {
        this.recount();
        return 0 === this.count;
      };
      c.prototype.clone = function() {
        var e = new c(this.length);
        e._union(this);
        return e;
      };
      return c;
    }();
    d.Uint32ArrayBitSet = n;
    var x = function() {
      function c(e) {
        this.dirty = this.count = 0;
        this.size = f(e);
        this.bits = 0;
        this.singleWord = !0;
        this.length = e;
      }
      c.prototype.recount = function() {
        if (this.dirty) {
          var c = this.bits, c = c - (c >> 1 & 1431655765), c = (c & 858993459) + (c >> 2 & 858993459);
          this.count = 0 + (16843009 * (c + (c >> 4) & 252645135) >> 24);
          this.dirty = 0;
        }
      };
      c.prototype.set = function(c) {
        var e = this.bits;
        this.bits = c = e | 1 << (c & d.BIT_INDEX_MASK);
        this.dirty |= e ^ c;
      };
      c.prototype.setAll = function() {
        this.bits = 4294967295;
        this.count = this.size;
        this.dirty = 0;
      };
      c.prototype.assign = function(c) {
        this.count = c.count;
        this.dirty = c.dirty;
        this.size = c.size;
        this.bits = c.bits;
      };
      c.prototype.clear = function(c) {
        var e = this.bits;
        this.bits = c = e & ~(1 << (c & d.BIT_INDEX_MASK));
        this.dirty |= e ^ c;
      };
      c.prototype.get = function(c) {
        return 0 !== (this.bits & 1 << (c & d.BIT_INDEX_MASK));
      };
      c.prototype.clearAll = function() {
        this.dirty = this.count = this.bits = 0;
      };
      c.prototype._union = function(c) {
        var e = this.bits;
        this.bits = c = e | c.bits;
        this.dirty = e ^ c;
      };
      c.prototype.intersect = function(c) {
        var e = this.bits;
        this.bits = c = e & c.bits;
        this.dirty = e ^ c;
      };
      c.prototype.subtract = function(c) {
        var e = this.bits;
        this.bits = c = e & ~c.bits;
        this.dirty = e ^ c;
      };
      c.prototype.negate = function() {
        var c = this.bits, e = ~c;
        this.bits = e;
        this.dirty = c ^ e;
      };
      c.prototype.forEach = function(c) {
        var e = this.bits;
        if (e) {
          for (var n = 0;n < d.BITS_PER_WORD;n++) {
            e & 1 << n && c(n);
          }
        }
      };
      c.prototype.toArray = function() {
        var c = [], e = this.bits;
        if (e) {
          for (var n = 0;n < d.BITS_PER_WORD;n++) {
            e & 1 << n && c.push(n);
          }
        }
        return c;
      };
      c.prototype.equals = function(c) {
        return this.bits === c.bits;
      };
      c.prototype.contains = function(c) {
        var e = this.bits;
        return (e | c.bits) === e;
      };
      c.prototype.isEmpty = function() {
        this.recount();
        return 0 === this.count;
      };
      c.prototype.clone = function() {
        var e = new c(this.length);
        e._union(this);
        return e;
      };
      return c;
    }();
    d.Uint32BitSet = x;
    x.prototype.toString = c;
    x.prototype.toBitString = e;
    n.prototype.toString = c;
    n.prototype.toBitString = e;
    d.BitSetFunctor = function(c) {
      var e = 1 === f(c) >> d.ADDRESS_BITS_PER_WORD ? x : n;
      return function() {
        return new e(c);
      };
    };
  })(k.BitSets || (k.BitSets = {}));
  a = function() {
    function d() {
    }
    d.randomStyle = function() {
      d._randomStyleCache || (d._randomStyleCache = "#ff5e3a #ff9500 #ffdb4c #87fc70 #52edc7 #1ad6fd #c644fc #ef4db6 #4a4a4a #dbddde #ff3b30 #ff9500 #ffcc00 #4cd964 #34aadc #007aff #5856d6 #ff2d55 #8e8e93 #c7c7cc #5ad427 #c86edf #d1eefc #e0f8d8 #fb2b69 #f7f7f7 #1d77ef #d6cec3 #55efcb #ff4981 #ffd3e0 #f7f7f7 #ff1300 #1f1f21 #bdbec2 #ff3a2d".split(" "));
      return d._randomStyleCache[d._nextStyle++ % d._randomStyleCache.length];
    };
    d.gradientColor = function(f) {
      return d._gradient[d._gradient.length * h.clamp(f, 0, 1) | 0];
    };
    d.contrastStyle = function(f) {
      f = parseInt(f.substr(1), 16);
      return 128 <= (299 * (f >> 16) + 587 * (f >> 8 & 255) + 114 * (f & 255)) / 1E3 ? "#000000" : "#ffffff";
    };
    d.reset = function() {
      d._nextStyle = 0;
    };
    d.TabToolbar = "#252c33";
    d.Toolbars = "#343c45";
    d.HighlightBlue = "#1d4f73";
    d.LightText = "#f5f7fa";
    d.ForegroundText = "#b6babf";
    d.Black = "#000000";
    d.VeryDark = "#14171a";
    d.Dark = "#181d20";
    d.Light = "#a9bacb";
    d.Grey = "#8fa1b2";
    d.DarkGrey = "#5f7387";
    d.Blue = "#46afe3";
    d.Purple = "#6b7abb";
    d.Pink = "#df80ff";
    d.Red = "#eb5368";
    d.Orange = "#d96629";
    d.LightOrange = "#d99b28";
    d.Green = "#70bf53";
    d.BlueGrey = "#5e88b0";
    d._nextStyle = 0;
    d._gradient = "#FF0000 #FF1100 #FF2300 #FF3400 #FF4600 #FF5700 #FF6900 #FF7B00 #FF8C00 #FF9E00 #FFAF00 #FFC100 #FFD300 #FFE400 #FFF600 #F7FF00 #E5FF00 #D4FF00 #C2FF00 #B0FF00 #9FFF00 #8DFF00 #7CFF00 #6AFF00 #58FF00 #47FF00 #35FF00 #24FF00 #12FF00 #00FF00".split(" ");
    return d;
  }();
  k.ColorStyle = a;
  a = function() {
    function d(f, e, c, n) {
      this.xMin = f | 0;
      this.yMin = e | 0;
      this.xMax = c | 0;
      this.yMax = n | 0;
    }
    d.FromUntyped = function(f) {
      return new d(f.xMin, f.yMin, f.xMax, f.yMax);
    };
    d.FromRectangle = function(f) {
      return new d(20 * f.x | 0, 20 * f.y | 0, 20 * (f.x + f.width) | 0, 20 * (f.y + f.height) | 0);
    };
    d.prototype.setElements = function(f, e, c, n) {
      this.xMin = f;
      this.yMin = e;
      this.xMax = c;
      this.yMax = n;
    };
    d.prototype.copyFrom = function(f) {
      this.setElements(f.xMin, f.yMin, f.xMax, f.yMax);
    };
    d.prototype.contains = function(f, e) {
      return f < this.xMin !== f < this.xMax && e < this.yMin !== e < this.yMax;
    };
    d.prototype.unionInPlace = function(f) {
      f.isEmpty() || (this.extendByPoint(f.xMin, f.yMin), this.extendByPoint(f.xMax, f.yMax));
    };
    d.prototype.extendByPoint = function(f, e) {
      this.extendByX(f);
      this.extendByY(e);
    };
    d.prototype.extendByX = function(f) {
      134217728 === this.xMin ? this.xMin = this.xMax = f : (this.xMin = Math.min(this.xMin, f), this.xMax = Math.max(this.xMax, f));
    };
    d.prototype.extendByY = function(f) {
      134217728 === this.yMin ? this.yMin = this.yMax = f : (this.yMin = Math.min(this.yMin, f), this.yMax = Math.max(this.yMax, f));
    };
    d.prototype.intersects = function(f) {
      return this.contains(f.xMin, f.yMin) || this.contains(f.xMax, f.yMax);
    };
    d.prototype.isEmpty = function() {
      return this.xMax <= this.xMin || this.yMax <= this.yMin;
    };
    Object.defineProperty(d.prototype, "width", {get:function() {
      return this.xMax - this.xMin;
    }, set:function(f) {
      this.xMax = this.xMin + f;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "height", {get:function() {
      return this.yMax - this.yMin;
    }, set:function(f) {
      this.yMax = this.yMin + f;
    }, enumerable:!0, configurable:!0});
    d.prototype.getBaseWidth = function(f) {
      return Math.abs(Math.cos(f)) * (this.xMax - this.xMin) + Math.abs(Math.sin(f)) * (this.yMax - this.yMin);
    };
    d.prototype.getBaseHeight = function(f) {
      return Math.abs(Math.sin(f)) * (this.xMax - this.xMin) + Math.abs(Math.cos(f)) * (this.yMax - this.yMin);
    };
    d.prototype.setEmpty = function() {
      this.xMin = this.yMin = this.xMax = this.yMax = 0;
    };
    d.prototype.setToSentinels = function() {
      this.xMin = this.yMin = this.xMax = this.yMax = 134217728;
    };
    d.prototype.clone = function() {
      return new d(this.xMin, this.yMin, this.xMax, this.yMax);
    };
    d.prototype.toString = function() {
      return "{ xMin: " + this.xMin + ", xMin: " + this.yMin + ", xMax: " + this.xMax + ", xMax: " + this.yMax + " }";
    };
    return d;
  }();
  k.Bounds = a;
  a = function() {
    function d(f, e, c, n) {
      v.assert(p(f));
      v.assert(p(e));
      v.assert(p(c));
      v.assert(p(n));
      this._xMin = f | 0;
      this._yMin = e | 0;
      this._xMax = c | 0;
      this._yMax = n | 0;
    }
    d.FromUntyped = function(f) {
      return new d(f.xMin, f.yMin, f.xMax, f.yMax);
    };
    d.FromRectangle = function(f) {
      return new d(20 * f.x | 0, 20 * f.y | 0, 20 * (f.x + f.width) | 0, 20 * (f.y + f.height) | 0);
    };
    d.prototype.setElements = function(f, e, c, n) {
      this.xMin = f;
      this.yMin = e;
      this.xMax = c;
      this.yMax = n;
    };
    d.prototype.copyFrom = function(f) {
      this.setElements(f.xMin, f.yMin, f.xMax, f.yMax);
    };
    d.prototype.contains = function(f, e) {
      return f < this.xMin !== f < this.xMax && e < this.yMin !== e < this.yMax;
    };
    d.prototype.unionInPlace = function(f) {
      f.isEmpty() || (this.extendByPoint(f.xMin, f.yMin), this.extendByPoint(f.xMax, f.yMax));
    };
    d.prototype.extendByPoint = function(f, e) {
      this.extendByX(f);
      this.extendByY(e);
    };
    d.prototype.extendByX = function(f) {
      134217728 === this.xMin ? this.xMin = this.xMax = f : (this.xMin = Math.min(this.xMin, f), this.xMax = Math.max(this.xMax, f));
    };
    d.prototype.extendByY = function(f) {
      134217728 === this.yMin ? this.yMin = this.yMax = f : (this.yMin = Math.min(this.yMin, f), this.yMax = Math.max(this.yMax, f));
    };
    d.prototype.intersects = function(f) {
      return this.contains(f._xMin, f._yMin) || this.contains(f._xMax, f._yMax);
    };
    d.prototype.isEmpty = function() {
      return this._xMax <= this._xMin || this._yMax <= this._yMin;
    };
    Object.defineProperty(d.prototype, "xMin", {get:function() {
      return this._xMin;
    }, set:function(f) {
      v.assert(p(f));
      this._xMin = f;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "yMin", {get:function() {
      return this._yMin;
    }, set:function(f) {
      v.assert(p(f));
      this._yMin = f | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "xMax", {get:function() {
      return this._xMax;
    }, set:function(f) {
      v.assert(p(f));
      this._xMax = f | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "width", {get:function() {
      return this._xMax - this._xMin;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "yMax", {get:function() {
      return this._yMax;
    }, set:function(f) {
      v.assert(p(f));
      this._yMax = f | 0;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(d.prototype, "height", {get:function() {
      return this._yMax - this._yMin;
    }, enumerable:!0, configurable:!0});
    d.prototype.getBaseWidth = function(f) {
      return Math.abs(Math.cos(f)) * (this._xMax - this._xMin) + Math.abs(Math.sin(f)) * (this._yMax - this._yMin);
    };
    d.prototype.getBaseHeight = function(f) {
      return Math.abs(Math.sin(f)) * (this._xMax - this._xMin) + Math.abs(Math.cos(f)) * (this._yMax - this._yMin);
    };
    d.prototype.setEmpty = function() {
      this._xMin = this._yMin = this._xMax = this._yMax = 0;
    };
    d.prototype.clone = function() {
      return new d(this.xMin, this.yMin, this.xMax, this.yMax);
    };
    d.prototype.toString = function() {
      return "{ xMin: " + this._xMin + ", yMin: " + this._yMin + ", xMax: " + this._xMax + ", yMax: " + this._yMax + " }";
    };
    d.prototype.assertValid = function() {
    };
    return d;
  }();
  k.DebugBounds = a;
  a = function() {
    function d(f, e, c, n) {
      this.r = f;
      this.g = e;
      this.b = c;
      this.a = n;
    }
    d.FromARGB = function(f) {
      return new d((f >> 16 & 255) / 255, (f >> 8 & 255) / 255, (f >> 0 & 255) / 255, (f >> 24 & 255) / 255);
    };
    d.FromRGBA = function(f) {
      return d.FromARGB(m.RGBAToARGB(f));
    };
    d.prototype.toRGBA = function() {
      return 255 * this.r << 24 | 255 * this.g << 16 | 255 * this.b << 8 | 255 * this.a;
    };
    d.prototype.toCSSStyle = function() {
      return m.rgbaToCSSStyle(this.toRGBA());
    };
    d.prototype.set = function(f) {
      this.r = f.r;
      this.g = f.g;
      this.b = f.b;
      this.a = f.a;
    };
    d.randomColor = function() {
      var f = .4;
      void 0 === f && (f = 1);
      return new d(Math.random(), Math.random(), Math.random(), f);
    };
    d.parseColor = function(f) {
      d.colorCache || (d.colorCache = Object.create(null));
      if (d.colorCache[f]) {
        return d.colorCache[f];
      }
      var e = document.createElement("span");
      document.body.appendChild(e);
      e.style.backgroundColor = f;
      var c = getComputedStyle(e).backgroundColor;
      document.body.removeChild(e);
      (e = /^rgb\((\d+), (\d+), (\d+)\)$/.exec(c)) || (e = /^rgba\((\d+), (\d+), (\d+), ([\d.]+)\)$/.exec(c));
      c = new d(0, 0, 0, 0);
      c.r = parseFloat(e[1]) / 255;
      c.g = parseFloat(e[2]) / 255;
      c.b = parseFloat(e[3]) / 255;
      c.a = e[4] ? parseFloat(e[4]) / 255 : 1;
      return d.colorCache[f] = c;
    };
    d.Red = new d(1, 0, 0, 1);
    d.Green = new d(0, 1, 0, 1);
    d.Blue = new d(0, 0, 1, 1);
    d.None = new d(0, 0, 0, 0);
    d.White = new d(1, 1, 1, 1);
    d.Black = new d(0, 0, 0, 1);
    d.colorCache = {};
    return d;
  }();
  k.Color = a;
  var m;
  (function(d) {
    function f(c) {
      var e, f, d = c >> 24 & 255;
      f = (Math.imul(c >> 16 & 255, d) + 127) / 255 | 0;
      e = (Math.imul(c >> 8 & 255, d) + 127) / 255 | 0;
      c = (Math.imul(c >> 0 & 255, d) + 127) / 255 | 0;
      return d << 24 | f << 16 | e << 8 | c;
    }
    d.RGBAToARGB = function(c) {
      return c >> 8 & 16777215 | (c & 255) << 24;
    };
    d.ARGBToRGBA = function(c) {
      return c << 8 | c >> 24 & 255;
    };
    d.rgbaToCSSStyle = function(c) {
      return k.StringUtilities.concat9("rgba(", c >> 24 & 255, ",", c >> 16 & 255, ",", c >> 8 & 255, ",", (c & 255) / 255, ")");
    };
    d.cssStyleToRGBA = function(c) {
      if ("#" === c[0]) {
        if (7 === c.length) {
          return parseInt(c.substring(1), 16) << 8 | 255;
        }
      } else {
        if ("r" === c[0]) {
          return c = c.substring(5, c.length - 1).split(","), (parseInt(c[0]) & 255) << 24 | (parseInt(c[1]) & 255) << 16 | (parseInt(c[2]) & 255) << 8 | 255 * parseFloat(c[3]) & 255;
        }
      }
      return 4278190335;
    };
    d.hexToRGB = function(c) {
      return parseInt(c.slice(1), 16);
    };
    d.rgbToHex = function(c) {
      return "#" + ("000000" + (c >>> 0).toString(16)).slice(-6);
    };
    d.isValidHexColor = function(c) {
      return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(c);
    };
    d.clampByte = function(c) {
      return Math.max(0, Math.min(255, c));
    };
    d.unpremultiplyARGB = function(c) {
      var e, f, d = c >> 24 & 255;
      f = Math.imul(255, c >> 16 & 255) / d & 255;
      e = Math.imul(255, c >> 8 & 255) / d & 255;
      c = Math.imul(255, c >> 0 & 255) / d & 255;
      return d << 24 | f << 16 | e << 8 | c;
    };
    d.premultiplyARGB = f;
    var e;
    d.ensureUnpremultiplyTable = function() {
      if (!e) {
        e = new Uint8Array(65536);
        for (var c = 0;256 > c;c++) {
          for (var f = 0;256 > f;f++) {
            e[(f << 8) + c] = Math.imul(255, c) / f;
          }
        }
      }
    };
    d.tableLookupUnpremultiplyARGB = function(c) {
      c |= 0;
      var f = c >> 24 & 255;
      if (0 === f) {
        return 0;
      }
      if (255 === f) {
        return c;
      }
      var d, a, l = f << 8, h = e;
      a = h[l + (c >> 16 & 255)];
      d = h[l + (c >> 8 & 255)];
      c = h[l + (c >> 0 & 255)];
      return f << 24 | a << 16 | d << 8 | c;
    };
    d.blendPremultipliedBGRA = function(c, e) {
      var f, d;
      d = 256 - (e & 255);
      f = Math.imul(c & 16711935, d) >> 8;
      d = Math.imul(c >> 8 & 16711935, d) >> 8;
      return ((e >> 8 & 16711935) + d & 16711935) << 8 | (e & 16711935) + f & 16711935;
    };
    var c = t.swap32;
    d.convertImage = function(n, d, a, l) {
      var h = a.length;
      if (n === d) {
        if (a !== l) {
          for (n = 0;n < h;n++) {
            l[n] = a[n];
          }
        }
      } else {
        if (1 === n && 3 === d) {
          for (k.ColorUtilities.ensureUnpremultiplyTable(), n = 0;n < h;n++) {
            var m = a[n];
            d = m & 255;
            if (0 === d) {
              l[n] = 0;
            } else {
              if (255 === d) {
                l[n] = 4278190080 | m >> 8 & 16777215;
              } else {
                var q = m >> 24 & 255, b = m >> 16 & 255, m = m >> 8 & 255, t = d << 8, r = e, m = r[t + m], b = r[t + b], q = r[t + q];
                l[n] = d << 24 | q << 16 | b << 8 | m;
              }
            }
          }
        } else {
          if (2 === n && 3 === d) {
            for (n = 0;n < h;n++) {
              l[n] = c(a[n]);
            }
          } else {
            if (3 === n && 1 === d) {
              for (n = 0;n < h;n++) {
                d = a[n], l[n] = c(f(d & 4278255360 | d >> 16 & 255 | (d & 255) << 16));
              }
            } else {
              for (v.somewhatImplemented("Image Format Conversion: " + u[n] + " -> " + u[d]), n = 0;n < h;n++) {
                l[n] = a[n];
              }
            }
          }
        }
      }
    };
  })(m = k.ColorUtilities || (k.ColorUtilities = {}));
  a = function() {
    function d(f) {
      void 0 === f && (f = 32);
      this._list = [];
      this._maxSize = f;
    }
    d.prototype.acquire = function(f) {
      if (d._enabled) {
        for (var e = this._list, c = 0;c < e.length;c++) {
          var n = e[c];
          if (n.byteLength >= f) {
            return e.splice(c, 1), n;
          }
        }
      }
      return new ArrayBuffer(f);
    };
    d.prototype.release = function(f) {
      if (d._enabled) {
        var e = this._list;
        e.length === this._maxSize && e.shift();
        e.push(f);
      }
    };
    d.prototype.ensureUint8ArrayLength = function(f, e) {
      if (f.length >= e) {
        return f;
      }
      var c = Math.max(f.length + e, (3 * f.length >> 1) + 1), c = new Uint8Array(this.acquire(c), 0, c);
      c.set(f);
      this.release(f.buffer);
      return c;
    };
    d.prototype.ensureFloat64ArrayLength = function(f, e) {
      if (f.length >= e) {
        return f;
      }
      var c = Math.max(f.length + e, (3 * f.length >> 1) + 1), c = new Float64Array(this.acquire(c * Float64Array.BYTES_PER_ELEMENT), 0, c);
      c.set(f);
      this.release(f.buffer);
      return c;
    };
    d._enabled = !0;
    return d;
  }();
  k.ArrayBufferPool = a;
  (function(d) {
    (function(f) {
      f[f.EXTERNAL_INTERFACE_FEATURE = 1] = "EXTERNAL_INTERFACE_FEATURE";
      f[f.CLIPBOARD_FEATURE = 2] = "CLIPBOARD_FEATURE";
      f[f.SHAREDOBJECT_FEATURE = 3] = "SHAREDOBJECT_FEATURE";
      f[f.VIDEO_FEATURE = 4] = "VIDEO_FEATURE";
      f[f.SOUND_FEATURE = 5] = "SOUND_FEATURE";
      f[f.NETCONNECTION_FEATURE = 6] = "NETCONNECTION_FEATURE";
    })(d.Feature || (d.Feature = {}));
    (function(f) {
      f[f.AVM1_ERROR = 1] = "AVM1_ERROR";
      f[f.AVM2_ERROR = 2] = "AVM2_ERROR";
    })(d.ErrorTypes || (d.ErrorTypes = {}));
    d.instance;
  })(k.Telemetry || (k.Telemetry = {}));
  (function(d) {
    d.instance;
  })(k.FileLoadingService || (k.FileLoadingService = {}));
  (function(d) {
    d[d.BuiltinAbc = 0] = "BuiltinAbc";
    d[d.PlayerglobalAbcs = 1] = "PlayerglobalAbcs";
    d[d.PlayerglobalManifest = 2] = "PlayerglobalManifest";
    d[d.ShellAbc = 3] = "ShellAbc";
  })(k.SystemResourceId || (k.SystemResourceId = {}));
  (function(d) {
    d.instance;
  })(k.SystemResourcesLoadingService || (k.SystemResourcesLoadingService = {}));
  k.registerCSSFont = function(d, f, e) {
    if (inBrowser) {
      var c = document.head;
      c.insertBefore(document.createElement("style"), c.firstChild);
      c = document.styleSheets[0];
      f = "@font-face{font-family:swffont" + d + ";src:url(data:font/opentype;base64," + k.StringUtilities.base64ArrayBuffer(f.buffer) + ")}";
      c.insertRule(f, c.cssRules.length);
      e && (e = document.createElement("div"), e.style.fontFamily = "swffont" + d, e.innerHTML = "hello", document.body.appendChild(e), document.body.removeChild(e));
    } else {
      v.warning("Cannot register CSS font outside the browser");
    }
  };
  (function(d) {
    d.instance = {enabled:!1, initJS:function(f) {
    }, registerCallback:function(f) {
    }, unregisterCallback:function(f) {
    }, eval:function(f) {
    }, call:function(f) {
    }, getId:function() {
      return null;
    }};
  })(k.ExternalInterfaceService || (k.ExternalInterfaceService = {}));
  (function(d) {
    d.instance = {setClipboard:function(f) {
    }};
  })(k.ClipboardService || (k.ClipboardService = {}));
  a = function() {
    function d() {
      this._queues = {};
    }
    d.prototype.register = function(f, e) {
      v.assert(f);
      v.assert(e);
      var c = this._queues[f];
      if (c) {
        if (-1 < c.indexOf(e)) {
          return;
        }
      } else {
        c = this._queues[f] = [];
      }
      c.push(e);
    };
    d.prototype.unregister = function(f, e) {
      v.assert(f);
      v.assert(e);
      var c = this._queues[f];
      if (c) {
        var n = c.indexOf(e);
        -1 !== n && c.splice(n, 1);
        0 === c.length && (this._queues[f] = null);
      }
    };
    d.prototype.notify = function(f, e) {
      var c = this._queues[f];
      if (c) {
        c = c.slice();
        e = Array.prototype.slice.call(arguments, 0);
        for (var n = 0;n < c.length;n++) {
          c[n].apply(null, e);
        }
      }
    };
    d.prototype.notify1 = function(f, e) {
      var c = this._queues[f];
      if (c) {
        for (var c = c.slice(), n = 0;n < c.length;n++) {
          (0,c[n])(f, e);
        }
      }
    };
    return d;
  }();
  k.Callback = a;
  (function(d) {
    d[d.None = 0] = "None";
    d[d.PremultipliedAlphaARGB = 1] = "PremultipliedAlphaARGB";
    d[d.StraightAlphaARGB = 2] = "StraightAlphaARGB";
    d[d.StraightAlphaRGBA = 3] = "StraightAlphaRGBA";
    d[d.JPEG = 4] = "JPEG";
    d[d.PNG = 5] = "PNG";
    d[d.GIF = 6] = "GIF";
  })(k.ImageType || (k.ImageType = {}));
  var u = k.ImageType;
  k.getMIMETypeForImageType = function(d) {
    switch(d) {
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
  (function(d) {
    d.toCSSCursor = function(f) {
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
  })(k.UI || (k.UI = {}));
  a = function() {
    function d() {
      this.promise = new Promise(function(f, e) {
        this.resolve = f;
        this.reject = e;
      }.bind(this));
    }
    d.prototype.then = function(f, e) {
      return this.promise.then(f, e);
    };
    return d;
  }();
  k.PromiseWrapper = a;
})(Shumway || (Shumway = {}));
(function() {
  function k(c) {
    if ("function" !== typeof c) {
      throw new TypeError("Invalid deferred constructor");
    }
    var e = r();
    c = new c(e);
    var f = e.resolve;
    if ("function" !== typeof f) {
      throw new TypeError("Invalid resolve construction function");
    }
    e = e.reject;
    if ("function" !== typeof e) {
      throw new TypeError("Invalid reject construction function");
    }
    return {promise:c, resolve:f, reject:e};
  }
  function p(c, e) {
    if ("object" !== typeof c || null === c) {
      return !1;
    }
    try {
      var f = c.then;
      if ("function" !== typeof f) {
        return !1;
      }
      f.call(c, e.resolve, e.reject);
    } catch (d) {
      f = e.reject, f(d);
    }
    return !0;
  }
  function g(c) {
    return "object" === typeof c && null !== c && "undefined" !== typeof c.promiseStatus;
  }
  function b(c, e) {
    if ("unresolved" === c.promiseStatus) {
      var f = c.rejectReactions;
      c.result = e;
      c.resolveReactions = void 0;
      c.rejectReactions = void 0;
      c.promiseStatus = "has-rejection";
      w(f, e);
    }
  }
  function w(c, e) {
    for (var f = 0;f < c.length;f++) {
      v({reaction:c[f], argument:e});
    }
  }
  function v(c) {
    0 === e.length && setTimeout(a, 0);
    e.push(c);
  }
  function a() {
    for (;0 < e.length;) {
      var c = e[0];
      try {
        a: {
          var n = c.reaction, f = n.deferred, a = n.handler, l = void 0, h = void 0;
          try {
            l = a(c.argument);
          } catch (m) {
            var u = f.reject;
            u(m);
            break a;
          }
          if (l === f.promise) {
            u = f.reject, u(new TypeError("Self resolution"));
          } else {
            try {
              if (h = p(l, f), !h) {
                var q = f.resolve;
                q(l);
              }
            } catch (b) {
              u = f.reject, u(b);
            }
          }
        }
      } catch (t) {
        if ("function" === typeof d.onerror) {
          d.onerror(t);
        }
      }
      e.shift();
    }
  }
  function l(c) {
    throw c;
  }
  function q(c) {
    return c;
  }
  function h(c) {
    return function(e) {
      b(c, e);
    };
  }
  function t(c) {
    return function(e) {
      if ("unresolved" === c.promiseStatus) {
        var f = c.resolveReactions;
        c.result = e;
        c.resolveReactions = void 0;
        c.rejectReactions = void 0;
        c.promiseStatus = "has-resolution";
        w(f, e);
      }
    };
  }
  function r() {
    function c(e, f) {
      c.resolve = e;
      c.reject = f;
    }
    return c;
  }
  function m(c, e, f) {
    return function(d) {
      if (d === c) {
        return f(new TypeError("Self resolution"));
      }
      var a = c.promiseConstructor;
      if (g(d) && d.promiseConstructor === a) {
        return d.then(e, f);
      }
      a = k(a);
      return p(d, a) ? a.promise.then(e, f) : e(d);
    };
  }
  function u(c, e, f, d) {
    return function(a) {
      e[c] = a;
      d.countdown--;
      0 === d.countdown && f.resolve(e);
    };
  }
  function d(c) {
    if ("function" !== typeof c) {
      throw new TypeError("resolver is not a function");
    }
    if ("object" !== typeof this) {
      throw new TypeError("Promise to initialize is not an object");
    }
    this.promiseStatus = "unresolved";
    this.resolveReactions = [];
    this.rejectReactions = [];
    this.result = void 0;
    var e = t(this), f = h(this);
    try {
      c(e, f);
    } catch (a) {
      b(this, a);
    }
    this.promiseConstructor = d;
    return this;
  }
  var f = Function("return this")();
  if (f.Promise) {
    "function" !== typeof f.Promise.all && (f.Promise.all = function(c) {
      var e = 0, d = [], a, l, h = new f.Promise(function(c, e) {
        a = c;
        l = e;
      });
      c.forEach(function(c, f) {
        e++;
        c.then(function(c) {
          d[f] = c;
          e--;
          0 === e && a(d);
        }, l);
      });
      0 === e && a(d);
      return h;
    }), "function" !== typeof f.Promise.resolve && (f.Promise.resolve = function(c) {
      return new f.Promise(function(e) {
        e(c);
      });
    });
  } else {
    var e = [];
    d.all = function(c) {
      var e = k(this), f = [], d = {countdown:0}, a = 0;
      c.forEach(function(c) {
        this.cast(c).then(u(a, f, e, d), e.reject);
        a++;
        d.countdown++;
      }, this);
      0 === a && e.resolve(f);
      return e.promise;
    };
    d.cast = function(c) {
      if (g(c)) {
        return c;
      }
      var e = k(this);
      e.resolve(c);
      return e.promise;
    };
    d.reject = function(c) {
      var e = k(this);
      e.reject(c);
      return e.promise;
    };
    d.resolve = function(c) {
      var e = k(this);
      e.resolve(c);
      return e.promise;
    };
    d.prototype = {"catch":function(c) {
      this.then(void 0, c);
    }, then:function(c, e) {
      if (!g(this)) {
        throw new TypeError("this is not a Promises");
      }
      var f = k(this.promiseConstructor), d = "function" === typeof e ? e : l, a = {deferred:f, handler:m(this, "function" === typeof c ? c : q, d)}, d = {deferred:f, handler:d};
      switch(this.promiseStatus) {
        case "unresolved":
          this.resolveReactions.push(a);
          this.rejectReactions.push(d);
          break;
        case "has-resolution":
          v({reaction:a, argument:this.result});
          break;
        case "has-rejection":
          v({reaction:d, argument:this.result});
      }
      return f.promise;
    }};
    f.Promise = d;
  }
})();
"undefined" !== typeof exports && (exports.Shumway = Shumway);
(function() {
  function k(k, g, b) {
    k[g] || Object.defineProperty(k, g, {value:b, writable:!0, configurable:!0, enumerable:!1});
  }
  k(String.prototype, "padRight", function(k, g) {
    var b = this, w = b.replace(/\033\[[0-9]*m/g, "").length;
    if (!k || w >= g) {
      return b;
    }
    for (var w = (g - w) / k.length, v = 0;v < w;v++) {
      b += k;
    }
    return b;
  });
  k(String.prototype, "padLeft", function(k, g) {
    var b = this, w = b.length;
    if (!k || w >= g) {
      return b;
    }
    for (var w = (g - w) / k.length, v = 0;v < w;v++) {
      b = k + b;
    }
    return b;
  });
  k(String.prototype, "trim", function() {
    return this.replace(/^\s+|\s+$/g, "");
  });
  k(String.prototype, "endsWith", function(k) {
    return -1 !== this.indexOf(k, this.length - k.length);
  });
  k(Array.prototype, "replace", function(k, g) {
    if (k === g) {
      return 0;
    }
    for (var b = 0, w = 0;w < this.length;w++) {
      this[w] === k && (this[w] = g, b++);
    }
    return b;
  });
})();
(function(k) {
  (function(p) {
    var g = k.isObject, b = function() {
      function a(a, q, h, b) {
        this.shortName = a;
        this.longName = q;
        this.type = h;
        b = b || {};
        this.positional = b.positional;
        this.parseFn = b.parse;
        this.value = b.defaultValue;
      }
      a.prototype.parse = function(a) {
        this.value = "boolean" === this.type ? a : "number" === this.type ? parseInt(a, 10) : a;
        this.parseFn && this.parseFn(this.value);
      };
      return a;
    }();
    p.Argument = b;
    var w = function() {
      function a() {
        this.args = [];
      }
      a.prototype.addArgument = function(a, q, h, t) {
        a = new b(a, q, h, t);
        this.args.push(a);
        return a;
      };
      a.prototype.addBoundOption = function(a) {
        this.args.push(new b(a.shortName, a.longName, a.type, {parse:function(q) {
          a.value = q;
        }}));
      };
      a.prototype.addBoundOptionSet = function(a) {
        var q = this;
        a.options.forEach(function(a) {
          a instanceof v ? q.addBoundOptionSet(a) : q.addBoundOption(a);
        });
      };
      a.prototype.getUsage = function() {
        var a = "";
        this.args.forEach(function(q) {
          a = q.positional ? a + q.longName : a + ("[-" + q.shortName + "|--" + q.longName + ("boolean" === q.type ? "" : " " + q.type[0].toUpperCase()) + "]");
          a += " ";
        });
        return a;
      };
      a.prototype.parse = function(a) {
        var q = {}, h = [];
        this.args.forEach(function(d) {
          d.positional ? h.push(d) : (q["-" + d.shortName] = d, q["--" + d.longName] = d);
        });
        for (var b = [];a.length;) {
          var r = a.shift(), m = null, u = r;
          if ("--" == r) {
            b = b.concat(a);
            break;
          } else {
            if ("-" == r.slice(0, 1) || "--" == r.slice(0, 2)) {
              m = q[r];
              if (!m) {
                continue;
              }
              u = "boolean" !== m.type ? a.shift() : !0;
            } else {
              h.length ? m = h.shift() : b.push(u);
            }
          }
          m && m.parse(u);
        }
        return b;
      };
      return a;
    }();
    p.ArgumentParser = w;
    var v = function() {
      function a(a, q) {
        void 0 === q && (q = null);
        this.open = !1;
        this.name = a;
        this.settings = q || {};
        this.options = [];
      }
      a.prototype.register = function(l) {
        if (l instanceof a) {
          for (var q = 0;q < this.options.length;q++) {
            var h = this.options[q];
            if (h instanceof a && h.name === l.name) {
              return h;
            }
          }
        }
        this.options.push(l);
        if (this.settings) {
          if (l instanceof a) {
            q = this.settings[l.name], g(q) && (l.settings = q.settings, l.open = q.open);
          } else {
            if ("undefined" !== typeof this.settings[l.longName]) {
              switch(l.type) {
                case "boolean":
                  l.value = !!this.settings[l.longName];
                  break;
                case "number":
                  l.value = +this.settings[l.longName];
                  break;
                default:
                  l.value = this.settings[l.longName];
              }
            }
          }
        }
        return l;
      };
      a.prototype.trace = function(a) {
        a.enter(this.name + " {");
        this.options.forEach(function(q) {
          q.trace(a);
        });
        a.leave("}");
      };
      a.prototype.getSettings = function() {
        var l = {};
        this.options.forEach(function(q) {
          q instanceof a ? l[q.name] = {settings:q.getSettings(), open:q.open} : l[q.longName] = q.value;
        });
        return l;
      };
      a.prototype.setSettings = function(l) {
        l && this.options.forEach(function(q) {
          q instanceof a ? q.name in l && q.setSettings(l[q.name].settings) : q.longName in l && (q.value = l[q.longName]);
        });
      };
      return a;
    }();
    p.OptionSet = v;
    w = function() {
      function a(a, q, h, b, r, m) {
        void 0 === m && (m = null);
        this.longName = q;
        this.shortName = a;
        this.type = h;
        this.value = this.defaultValue = b;
        this.description = r;
        this.config = m;
      }
      a.prototype.parse = function(a) {
        this.value = a;
      };
      a.prototype.trace = function(a) {
        a.writeLn(("-" + this.shortName + "|--" + this.longName).padRight(" ", 30) + " = " + this.type + " " + this.value + " [" + this.defaultValue + "] (" + this.description + ")");
      };
      return a;
    }();
    p.Option = w;
  })(k.Options || (k.Options = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(g) {
    g.ROOT = "Shumway Options";
    g.shumwayOptions = new k.Options.OptionSet(g.ROOT);
    g.setSettings = function(b) {
      g.shumwayOptions.setSettings(b);
    };
    g.getSettings = function() {
      return g.shumwayOptions.getSettings();
    };
  })(k.Settings || (k.Settings = {}));
  var p = k.Options.Option;
  k.loggingOptions = k.Settings.shumwayOptions.register(new k.Options.OptionSet("Logging Options"));
  k.omitRepeatedWarnings = k.loggingOptions.register(new p("wo", "warnOnce", "boolean", !0, "Omit Repeated Warnings"));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(p) {
    var g = function() {
      function b(b, v) {
        this._parent = b;
        this._timers = k.ObjectUtilities.createMap();
        this._name = v;
        this._count = this._total = this._last = this._begin = 0;
      }
      b.time = function(g, v) {
        b.start(g);
        v();
        b.stop();
      };
      b.start = function(g) {
        b._top = b._top._timers[g] || (b._top._timers[g] = new b(b._top, g));
        b._top.start();
        g = b._flat._timers[g] || (b._flat._timers[g] = new b(b._flat, g));
        g.start();
        b._flatStack.push(g);
      };
      b.stop = function() {
        b._top.stop();
        b._top = b._top._parent;
        b._flatStack.pop().stop();
      };
      b.stopStart = function(g) {
        b.stop();
        b.start(g);
      };
      b.prototype.start = function() {
        this._begin = k.getTicks();
      };
      b.prototype.stop = function() {
        this._last = k.getTicks() - this._begin;
        this._total += this._last;
        this._count += 1;
      };
      b.prototype.toJSON = function() {
        return {name:this._name, total:this._total, timers:this._timers};
      };
      b.prototype.trace = function(b) {
        b.enter(this._name + ": " + this._total.toFixed(2) + " ms, count: " + this._count + ", average: " + (this._total / this._count).toFixed(2) + " ms");
        for (var v in this._timers) {
          this._timers[v].trace(b);
        }
        b.outdent();
      };
      b.trace = function(g) {
        b._base.trace(g);
        b._flat.trace(g);
      };
      b._base = new b(null, "Total");
      b._top = b._base;
      b._flat = new b(null, "Flat");
      b._flatStack = [];
      return b;
    }();
    p.Timer = g;
    g = function() {
      function b(b) {
        this._enabled = b;
        this.clear();
      }
      Object.defineProperty(b.prototype, "counts", {get:function() {
        return this._counts;
      }, enumerable:!0, configurable:!0});
      b.prototype.setEnabled = function(b) {
        this._enabled = b;
      };
      b.prototype.clear = function() {
        this._counts = k.ObjectUtilities.createMap();
        this._times = k.ObjectUtilities.createMap();
      };
      b.prototype.toJSON = function() {
        return {counts:this._counts, times:this._times};
      };
      b.prototype.count = function(b, v, a) {
        void 0 === v && (v = 1);
        void 0 === a && (a = 0);
        if (this._enabled) {
          return void 0 === this._counts[b] && (this._counts[b] = 0, this._times[b] = 0), this._counts[b] += v, this._times[b] += a, this._counts[b];
        }
      };
      b.prototype.trace = function(b) {
        for (var v in this._counts) {
          b.writeLn(v + ": " + this._counts[v]);
        }
      };
      b.prototype._pairToString = function(b, v) {
        var a = v[0], l = v[1], q = b[a], a = a + ": " + l;
        q && (a += ", " + q.toFixed(4), 1 < l && (a += " (" + (q / l).toFixed(4) + ")"));
        return a;
      };
      b.prototype.toStringSorted = function() {
        var b = this, v = this._times, a = [], l;
        for (l in this._counts) {
          a.push([l, this._counts[l]]);
        }
        a.sort(function(a, l) {
          return l[1] - a[1];
        });
        return a.map(function(a) {
          return b._pairToString(v, a);
        }).join(", ");
      };
      b.prototype.traceSorted = function(b, v) {
        void 0 === v && (v = !1);
        var a = this, l = this._times, q = [], h;
        for (h in this._counts) {
          q.push([h, this._counts[h]]);
        }
        q.sort(function(a, l) {
          return l[1] - a[1];
        });
        v ? b.writeLn(q.map(function(h) {
          return a._pairToString(l, h);
        }).join(", ")) : q.forEach(function(h) {
          b.writeLn(a._pairToString(l, h));
        });
      };
      b.instance = new b(!0);
      return b;
    }();
    p.Counter = g;
    g = function() {
      function b(b) {
        this._samples = new Float64Array(b);
        this._index = this._count = 0;
      }
      b.prototype.push = function(b) {
        this._count < this._samples.length && this._count++;
        this._index++;
        this._samples[this._index % this._samples.length] = b;
      };
      b.prototype.average = function() {
        for (var b = 0, v = 0;v < this._count;v++) {
          b += this._samples[v];
        }
        return b / this._count;
      };
      return b;
    }();
    p.Average = g;
  })(k.Metrics || (k.Metrics = {}));
})(Shumway || (Shumway = {}));
var __extends = this.__extends || function(k, p) {
  function g() {
    this.constructor = k;
  }
  for (var b in p) {
    p.hasOwnProperty(b) && (k[b] = p[b]);
  }
  g.prototype = p.prototype;
  k.prototype = new g;
};
(function(k) {
  (function(k) {
    function g(e) {
      for (var c = Math.max.apply(null, e), n = e.length, f = 1 << c, d = new Uint32Array(f), a = c << 16 | 65535, l = 0;l < f;l++) {
        d[l] = a;
      }
      for (var a = 0, l = 1, h = 2;l <= c;a <<= 1, ++l, h <<= 1) {
        for (var m = 0;m < n;++m) {
          if (e[m] === l) {
            for (var u = 0, b = 0;b < l;++b) {
              u = 2 * u + (a >> b & 1);
            }
            for (b = u;b < f;b += h) {
              d[b] = l << 16 | m;
            }
            ++a;
          }
        }
      }
      return {codes:d, maxBits:c};
    }
    var b;
    (function(e) {
      e[e.INIT = 0] = "INIT";
      e[e.BLOCK_0 = 1] = "BLOCK_0";
      e[e.BLOCK_1 = 2] = "BLOCK_1";
      e[e.BLOCK_2_PRE = 3] = "BLOCK_2_PRE";
      e[e.BLOCK_2 = 4] = "BLOCK_2";
      e[e.DONE = 5] = "DONE";
      e[e.ERROR = 6] = "ERROR";
      e[e.VERIFY_HEADER = 7] = "VERIFY_HEADER";
    })(b || (b = {}));
    b = function() {
      function e(c) {
      }
      e.prototype.push = function(c) {
      };
      e.prototype.close = function() {
      };
      e.create = function(c) {
        return "undefined" !== typeof ShumwayCom && ShumwayCom.createSpecialInflate ? new u(c, ShumwayCom.createSpecialInflate) : new w(c);
      };
      e.prototype._processZLibHeader = function(c, e, f) {
        if (e + 2 > f) {
          return 0;
        }
        c = c[e] << 8 | c[e + 1];
        e = null;
        2048 !== (c & 3840) ? e = "inflate: unknown compression method" : 0 !== c % 31 ? e = "inflate: bad FCHECK" : 0 !== (c & 32) && (e = "inflate: FDICT bit set");
        if (e) {
          if (this.onError) {
            this.onError(e);
          }
          return -1;
        }
        return 2;
      };
      e.inflate = function(c, n, f) {
        var d = new Uint8Array(n), a = 0;
        n = e.create(f);
        n.onData = function(c) {
          var e = Math.min(c.length, d.length - a);
          e && k.memCopy(d, c, a, 0, e);
          a += e;
        };
        n.onError = function(c) {
          throw Error(c);
        };
        n.push(c);
        n.close();
        return d;
      };
      return e;
    }();
    k.Inflate = b;
    var w = function(e) {
      function c(c) {
        e.call(this, c);
        this._buffer = null;
        this._bitLength = this._bitBuffer = this._bufferPosition = this._bufferSize = 0;
        this._window = new Uint8Array(65794);
        this._windowPosition = 0;
        this._state = c ? 7 : 0;
        this._isFinalBlock = !1;
        this._distanceTable = this._literalTable = null;
        this._block0Read = 0;
        this._block2State = null;
        this._copyState = {state:0, len:0, lenBits:0, dist:0, distBits:0};
        if (!m) {
          v = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
          a = new Uint16Array(30);
          l = new Uint8Array(30);
          for (var f = c = 0, d = 1;30 > c;++c) {
            a[c] = d, d += 1 << (l[c] = ~~((f += 2 < c ? 1 : 0) / 2));
          }
          var u = new Uint8Array(288);
          for (c = 0;32 > c;++c) {
            u[c] = 5;
          }
          q = g(u.subarray(0, 32));
          h = new Uint16Array(29);
          t = new Uint8Array(29);
          f = c = 0;
          for (d = 3;29 > c;++c) {
            h[c] = d - (28 == c ? 1 : 0), d += 1 << (t[c] = ~~((f += 4 < c ? 1 : 0) / 4 % 6));
          }
          for (c = 0;288 > c;++c) {
            u[c] = 144 > c || 279 < c ? 8 : 256 > c ? 9 : 7;
          }
          r = g(u);
          m = !0;
        }
      }
      __extends(c, e);
      c.prototype.push = function(c) {
        if (!this._buffer || this._buffer.length < this._bufferSize + c.length) {
          var e = new Uint8Array(this._bufferSize + c.length);
          this._buffer && e.set(this._buffer);
          this._buffer = e;
        }
        this._buffer.set(c, this._bufferSize);
        this._bufferSize += c.length;
        this._bufferPosition = 0;
        c = !1;
        do {
          e = this._windowPosition;
          if (0 === this._state && (c = this._decodeInitState())) {
            break;
          }
          switch(this._state) {
            case 1:
              c = this._decodeBlock0();
              break;
            case 3:
              if (c = this._decodeBlock2Pre()) {
                break;
              }
            ;
            case 2:
            ;
            case 4:
              c = this._decodeBlock();
              break;
            case 6:
            ;
            case 5:
              this._bufferPosition = this._bufferSize;
              break;
            case 7:
              var f = this._processZLibHeader(this._buffer, this._bufferPosition, this._bufferSize);
              0 < f ? (this._bufferPosition += f, this._state = 0) : 0 === f ? c = !0 : this._state = 6;
          }
          if (0 < this._windowPosition - e) {
            this.onData(this._window.subarray(e, this._windowPosition));
          }
          65536 <= this._windowPosition && ("copyWithin" in this._buffer ? this._window.copyWithin(0, this._windowPosition - 32768, this._windowPosition) : this._window.set(this._window.subarray(this._windowPosition - 32768, this._windowPosition)), this._windowPosition = 32768);
        } while (!c && this._bufferPosition < this._bufferSize);
        this._bufferPosition < this._bufferSize ? ("copyWithin" in this._buffer ? this._buffer.copyWithin(0, this._bufferPosition, this._bufferSize) : this._buffer.set(this._buffer.subarray(this._bufferPosition, this._bufferSize)), this._bufferSize -= this._bufferPosition) : this._bufferSize = 0;
      };
      c.prototype._decodeInitState = function() {
        if (this._isFinalBlock) {
          return this._state = 5, !1;
        }
        var c = this._buffer, e = this._bufferSize, f = this._bitBuffer, d = this._bitLength, a = this._bufferPosition;
        if (3 > (e - a << 3) + d) {
          return !0;
        }
        3 > d && (f |= c[a++] << d, d += 8);
        var l = f & 7, f = f >> 3, d = d - 3;
        switch(l >> 1) {
          case 0:
            d = f = 0;
            if (4 > e - a) {
              return !0;
            }
            var h = c[a] | c[a + 1] << 8, c = c[a + 2] | c[a + 3] << 8, a = a + 4;
            if (65535 !== (h ^ c)) {
              this._error("inflate: invalid block 0 length");
              c = 6;
              break;
            }
            0 === h ? c = 0 : (this._block0Read = h, c = 1);
            break;
          case 1:
            c = 2;
            this._literalTable = r;
            this._distanceTable = q;
            break;
          case 2:
            if (26 > (e - a << 3) + d) {
              return !0;
            }
            for (;14 > d;) {
              f |= c[a++] << d, d += 8;
            }
            h = (f >> 10 & 15) + 4;
            if ((e - a << 3) + d < 14 + 3 * h) {
              return !0;
            }
            for (var e = {numLiteralCodes:(f & 31) + 257, numDistanceCodes:(f >> 5 & 31) + 1, codeLengthTable:void 0, bitLengths:void 0, codesRead:0, dupBits:0}, f = f >> 14, d = d - 14, m = new Uint8Array(19), u = 0;u < h;++u) {
              3 > d && (f |= c[a++] << d, d += 8), m[v[u]] = f & 7, f >>= 3, d -= 3;
            }
            for (;19 > u;u++) {
              m[v[u]] = 0;
            }
            e.bitLengths = new Uint8Array(e.numLiteralCodes + e.numDistanceCodes);
            e.codeLengthTable = g(m);
            this._block2State = e;
            c = 3;
            break;
          default:
            return this._error("inflate: unsupported block type"), !1;
        }
        this._isFinalBlock = !!(l & 1);
        this._state = c;
        this._bufferPosition = a;
        this._bitBuffer = f;
        this._bitLength = d;
        return !1;
      };
      c.prototype._error = function(c) {
        if (this.onError) {
          this.onError(c);
        }
      };
      c.prototype._decodeBlock0 = function() {
        var c = this._bufferPosition, e = this._windowPosition, f = this._block0Read, d = 65794 - e, a = this._bufferSize - c, l = a < f, h = Math.min(d, a, f);
        this._window.set(this._buffer.subarray(c, c + h), e);
        this._windowPosition = e + h;
        this._bufferPosition = c + h;
        this._block0Read = f - h;
        return f === h ? (this._state = 0, !1) : l && d < a;
      };
      c.prototype._readBits = function(c) {
        var e = this._bitBuffer, f = this._bitLength;
        if (c > f) {
          var d = this._bufferPosition, a = this._bufferSize;
          do {
            if (d >= a) {
              return this._bufferPosition = d, this._bitBuffer = e, this._bitLength = f, -1;
            }
            e |= this._buffer[d++] << f;
            f += 8;
          } while (c > f);
          this._bufferPosition = d;
        }
        this._bitBuffer = e >> c;
        this._bitLength = f - c;
        return e & (1 << c) - 1;
      };
      c.prototype._readCode = function(c) {
        var e = this._bitBuffer, f = this._bitLength, d = c.maxBits;
        if (d > f) {
          var a = this._bufferPosition, l = this._bufferSize;
          do {
            if (a >= l) {
              return this._bufferPosition = a, this._bitBuffer = e, this._bitLength = f, -1;
            }
            e |= this._buffer[a++] << f;
            f += 8;
          } while (d > f);
          this._bufferPosition = a;
        }
        c = c.codes[e & (1 << d) - 1];
        d = c >> 16;
        if (c & 32768) {
          return this._error("inflate: invalid encoding"), this._state = 6, -1;
        }
        this._bitBuffer = e >> d;
        this._bitLength = f - d;
        return c & 65535;
      };
      c.prototype._decodeBlock2Pre = function() {
        var c = this._block2State, e = c.numLiteralCodes + c.numDistanceCodes, f = c.bitLengths, d = c.codesRead, a = 0 < d ? f[d - 1] : 0, l = c.codeLengthTable, h;
        if (0 < c.dupBits) {
          h = this._readBits(c.dupBits);
          if (0 > h) {
            return !0;
          }
          for (;h--;) {
            f[d++] = a;
          }
          c.dupBits = 0;
        }
        for (;d < e;) {
          var m = this._readCode(l);
          if (0 > m) {
            return c.codesRead = d, !0;
          }
          if (16 > m) {
            f[d++] = a = m;
          } else {
            var u;
            switch(m) {
              case 16:
                u = 2;
                h = 3;
                m = a;
                break;
              case 17:
                h = u = 3;
                m = 0;
                break;
              case 18:
                u = 7, h = 11, m = 0;
            }
            for (;h--;) {
              f[d++] = m;
            }
            h = this._readBits(u);
            if (0 > h) {
              return c.codesRead = d, c.dupBits = u, !0;
            }
            for (;h--;) {
              f[d++] = m;
            }
            a = m;
          }
        }
        this._literalTable = g(f.subarray(0, c.numLiteralCodes));
        this._distanceTable = g(f.subarray(c.numLiteralCodes));
        this._state = 4;
        this._block2State = null;
        return !1;
      };
      c.prototype._decodeBlock = function() {
        var c = this._literalTable, e = this._distanceTable, f = this._window, d = this._windowPosition, m = this._copyState, u, b, q, r;
        if (0 !== m.state) {
          switch(m.state) {
            case 1:
              if (0 > (u = this._readBits(m.lenBits))) {
                return !0;
              }
              m.len += u;
              m.state = 2;
            case 2:
              if (0 > (u = this._readCode(e))) {
                return !0;
              }
              m.distBits = l[u];
              m.dist = a[u];
              m.state = 3;
            case 3:
              u = 0;
              if (0 < m.distBits && 0 > (u = this._readBits(m.distBits))) {
                return !0;
              }
              r = m.dist + u;
              b = m.len;
              for (u = d - r;b--;) {
                f[d++] = f[u++];
              }
              m.state = 0;
              if (65536 <= d) {
                return this._windowPosition = d, !1;
              }
              break;
          }
        }
        do {
          u = this._readCode(c);
          if (0 > u) {
            return this._windowPosition = d, !0;
          }
          if (256 > u) {
            f[d++] = u;
          } else {
            if (256 < u) {
              this._windowPosition = d;
              u -= 257;
              q = t[u];
              b = h[u];
              u = 0 === q ? 0 : this._readBits(q);
              if (0 > u) {
                return m.state = 1, m.len = b, m.lenBits = q, !0;
              }
              b += u;
              u = this._readCode(e);
              if (0 > u) {
                return m.state = 2, m.len = b, !0;
              }
              q = l[u];
              r = a[u];
              u = 0 === q ? 0 : this._readBits(q);
              if (0 > u) {
                return m.state = 3, m.len = b, m.dist = r, m.distBits = q, !0;
              }
              r += u;
              for (u = d - r;b--;) {
                f[d++] = f[u++];
              }
            } else {
              this._state = 0;
              break;
            }
          }
        } while (65536 > d);
        this._windowPosition = d;
        return !1;
      };
      return c;
    }(b), v, a, l, q, h, t, r, m = !1, u = function(e) {
      function c(c, f) {
        e.call(this, c);
        this._verifyHeader = c;
        this._specialInflate = f();
        this._specialInflate.setDataCallback(function(c) {
          this.onData(c);
        }.bind(this));
      }
      __extends(c, e);
      c.prototype.push = function(c) {
        if (this._verifyHeader) {
          var e;
          this._buffer ? (e = new Uint8Array(this._buffer.length + c.length), e.set(this._buffer), e.set(c, this._buffer.length), this._buffer = null) : e = new Uint8Array(c);
          var f = this._processZLibHeader(e, 0, e.length);
          if (0 === f) {
            this._buffer = e;
            return;
          }
          this._verifyHeader = !0;
          0 < f && (c = e.subarray(f));
        }
        this._specialInflate.push(c);
      };
      c.prototype.close = function() {
        this._specialInflate && (this._specialInflate.close(), this._specialInflate = null);
      };
      return c;
    }(b), d;
    (function(e) {
      e[e.WRITE = 0] = "WRITE";
      e[e.DONE = 1] = "DONE";
      e[e.ZLIB_HEADER = 2] = "ZLIB_HEADER";
    })(d || (d = {}));
    var f = function() {
      function e() {
        this.a = 1;
        this.b = 0;
      }
      e.prototype.update = function(c, e, f) {
        for (var d = this.a, a = this.b;e < f;++e) {
          d = (d + (c[e] & 255)) % 65521, a = (a + d) % 65521;
        }
        this.a = d;
        this.b = a;
      };
      e.prototype.getChecksum = function() {
        return this.b << 16 | this.a;
      };
      return e;
    }();
    k.Adler32 = f;
    d = function() {
      function e(c) {
        this._state = (this._writeZlibHeader = c) ? 2 : 0;
        this._adler32 = c ? new f : null;
      }
      e.prototype.push = function(c) {
        2 === this._state && (this.onData(new Uint8Array([120, 156])), this._state = 0);
        for (var e = c.length, f = new Uint8Array(e + 5 * Math.ceil(e / 65535)), d = 0, a = 0;65535 < e;) {
          f.set(new Uint8Array([0, 255, 255, 0, 0]), d), d += 5, f.set(c.subarray(a, a + 65535), d), a += 65535, d += 65535, e -= 65535;
        }
        f.set(new Uint8Array([0, e & 255, e >> 8 & 255, ~e & 255, ~e >> 8 & 255]), d);
        f.set(c.subarray(a, e), d + 5);
        this.onData(f);
        this._adler32 && this._adler32.update(c, 0, e);
      };
      e.prototype.close = function() {
        this._state = 1;
        this.onData(new Uint8Array([1, 0, 0, 255, 255]));
        if (this._adler32) {
          var c = this._adler32.getChecksum();
          this.onData(new Uint8Array([c & 255, c >> 8 & 255, c >> 16 & 255, c >>> 24 & 255]));
        }
      };
      return e;
    }();
    k.Deflate = d;
  })(k.ArrayUtilities || (k.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    function g(c) {
      for (var e = new Uint16Array(c), f = 0;f < c;f++) {
        e[f] = 1024;
      }
      return e;
    }
    function b(c, e, f, d) {
      for (var a = 1, l = 0, h = 0;h < f;h++) {
        var m = d.decodeBit(c, a + e), a = (a << 1) + m, l = l | m << h
      }
      return l;
    }
    function w(c, e) {
      var f = [];
      f.length = e;
      for (var d = 0;d < e;d++) {
        f[d] = new h(c);
      }
      return f;
    }
    var v = function() {
      function c() {
        this.pos = this.available = 0;
        this.buffer = new Uint8Array(2E3);
      }
      c.prototype.append = function(c) {
        var e = this.pos + this.available, f = e + c.length;
        if (f > this.buffer.length) {
          for (var d = 2 * this.buffer.length;d < f;) {
            d *= 2;
          }
          f = new Uint8Array(d);
          f.set(this.buffer);
          this.buffer = f;
        }
        this.buffer.set(c, e);
        this.available += c.length;
      };
      c.prototype.compact = function() {
        0 !== this.available && (this.buffer.set(this.buffer.subarray(this.pos, this.pos + this.available), 0), this.pos = 0);
      };
      c.prototype.readByte = function() {
        if (0 >= this.available) {
          throw Error("Unexpected end of file");
        }
        this.available--;
        return this.buffer[this.pos++];
      };
      return c;
    }(), a = function() {
      function c(c) {
        this.onData = c;
        this.processed = 0;
      }
      c.prototype.writeBytes = function(c) {
        this.onData.call(null, c);
        this.processed += c.length;
      };
      return c;
    }(), l = function() {
      function c(c) {
        this.outStream = c;
        this.buf = null;
        this.size = this.pos = 0;
        this.isFull = !1;
        this.totalPos = this.writePos = 0;
      }
      c.prototype.create = function(c) {
        this.buf = new Uint8Array(c);
        this.pos = 0;
        this.size = c;
        this.isFull = !1;
        this.totalPos = this.writePos = 0;
      };
      c.prototype.putByte = function(c) {
        this.totalPos++;
        this.buf[this.pos++] = c;
        this.pos === this.size && (this.flush(), this.pos = 0, this.isFull = !0);
      };
      c.prototype.getByte = function(c) {
        return this.buf[c <= this.pos ? this.pos - c : this.size - c + this.pos];
      };
      c.prototype.flush = function() {
        this.writePos < this.pos && (this.outStream.writeBytes(this.buf.subarray(this.writePos, this.pos)), this.writePos = this.pos === this.size ? 0 : this.pos);
      };
      c.prototype.copyMatch = function(c, e) {
        for (var f = this.pos, d = this.size, a = this.buf, l = c <= f ? f - c : d - c + f, h = e;0 < h;) {
          for (var m = Math.min(Math.min(h, d - f), d - l), u = 0;u < m;u++) {
            var b = a[l++];
            a[f++] = b;
          }
          f === d && (this.pos = f, this.flush(), f = 0, this.isFull = !0);
          l === d && (l = 0);
          h -= m;
        }
        this.pos = f;
        this.totalPos += e;
      };
      c.prototype.checkDistance = function(c) {
        return c <= this.pos || this.isFull;
      };
      c.prototype.isEmpty = function() {
        return 0 === this.pos && !this.isFull;
      };
      return c;
    }(), q = function() {
      function c(c) {
        this.inStream = c;
        this.code = this.range = 0;
        this.corrupted = !1;
      }
      c.prototype.init = function() {
        0 !== this.inStream.readByte() && (this.corrupted = !0);
        this.range = -1;
        for (var c = 0, e = 0;4 > e;e++) {
          c = c << 8 | this.inStream.readByte();
        }
        c === this.range && (this.corrupted = !0);
        this.code = c;
      };
      c.prototype.isFinishedOK = function() {
        return 0 === this.code;
      };
      c.prototype.decodeDirectBits = function(c) {
        var e = 0, f = this.range, d = this.code;
        do {
          var f = f >>> 1 | 0, d = d - f | 0, a = d >> 31, d = d + (f & a) | 0;
          d === f && (this.corrupted = !0);
          0 <= f && 16777216 > f && (f <<= 8, d = d << 8 | this.inStream.readByte());
          e = (e << 1) + a + 1 | 0;
        } while (--c);
        this.range = f;
        this.code = d;
        return e;
      };
      c.prototype.decodeBit = function(c, e) {
        var f = this.range, d = this.code, a = c[e], l = (f >>> 11) * a;
        d >>> 0 < l ? (a = a + (2048 - a >> 5) | 0, f = l | 0, l = 0) : (a = a - (a >> 5) | 0, d = d - l | 0, f = f - l | 0, l = 1);
        c[e] = a & 65535;
        0 <= f && 16777216 > f && (f <<= 8, d = d << 8 | this.inStream.readByte());
        this.range = f;
        this.code = d;
        return l;
      };
      return c;
    }(), h = function() {
      function c(c) {
        this.numBits = c;
        this.probs = g(1 << c);
      }
      c.prototype.decode = function(c) {
        for (var e = 1, f = 0;f < this.numBits;f++) {
          e = (e << 1) + c.decodeBit(this.probs, e);
        }
        return e - (1 << this.numBits);
      };
      c.prototype.reverseDecode = function(c) {
        return b(this.probs, 0, this.numBits, c);
      };
      return c;
    }(), t = function() {
      function c() {
        this.choice = g(2);
        this.lowCoder = w(3, 16);
        this.midCoder = w(3, 16);
        this.highCoder = new h(8);
      }
      c.prototype.decode = function(c, e) {
        return 0 === c.decodeBit(this.choice, 0) ? this.lowCoder[e].decode(c) : 0 === c.decodeBit(this.choice, 1) ? 8 + this.midCoder[e].decode(c) : 16 + this.highCoder.decode(c);
      };
      return c;
    }(), r = function() {
      function c(c, e) {
        this.rangeDec = new q(c);
        this.outWindow = new l(e);
        this.markerIsMandatory = !1;
        this.dictSizeInProperties = this.dictSize = this.lp = this.pb = this.lc = 0;
        this.leftToUnpack = this.unpackSize = void 0;
        this.reps = new Int32Array(4);
        this.state = 0;
      }
      c.prototype.decodeProperties = function(c) {
        var e = c[0];
        if (225 <= e) {
          throw Error("Incorrect LZMA properties");
        }
        this.lc = e % 9;
        e = e / 9 | 0;
        this.pb = e / 5 | 0;
        this.lp = e % 5;
        for (e = this.dictSizeInProperties = 0;4 > e;e++) {
          this.dictSizeInProperties |= c[e + 1] << 8 * e;
        }
        this.dictSize = this.dictSizeInProperties;
        4096 > this.dictSize && (this.dictSize = 4096);
      };
      c.prototype.create = function() {
        this.outWindow.create(this.dictSize);
        this.init();
        this.rangeDec.init();
        this.reps[0] = 0;
        this.reps[1] = 0;
        this.reps[2] = 0;
        this.state = this.reps[3] = 0;
        this.leftToUnpack = this.unpackSize;
      };
      c.prototype.decodeLiteral = function(c, e) {
        var f = this.outWindow, d = this.rangeDec, a = 0;
        f.isEmpty() || (a = f.getByte(1));
        var l = 1, a = 768 * (((f.totalPos & (1 << this.lp) - 1) << this.lc) + (a >> 8 - this.lc));
        if (7 <= c) {
          f = f.getByte(e + 1);
          do {
            var h = f >> 7 & 1, f = f << 1, m = d.decodeBit(this.litProbs, a + ((1 + h << 8) + l)), l = l << 1 | m;
            if (h !== m) {
              break;
            }
          } while (256 > l);
        }
        for (;256 > l;) {
          l = l << 1 | d.decodeBit(this.litProbs, a + l);
        }
        return l - 256 & 255;
      };
      c.prototype.decodeDistance = function(c) {
        var e = c;
        3 < e && (e = 3);
        c = this.rangeDec;
        e = this.posSlotDecoder[e].decode(c);
        if (4 > e) {
          return e;
        }
        var f = (e >> 1) - 1, d = (2 | e & 1) << f;
        14 > e ? d = d + b(this.posDecoders, d - e, f, c) | 0 : (d = d + (c.decodeDirectBits(f - 4) << 4) | 0, d = d + this.alignDecoder.reverseDecode(c) | 0);
        return d;
      };
      c.prototype.init = function() {
        this.litProbs = g(768 << this.lc + this.lp);
        this.posSlotDecoder = w(6, 4);
        this.alignDecoder = new h(4);
        this.posDecoders = g(115);
        this.isMatch = g(192);
        this.isRep = g(12);
        this.isRepG0 = g(12);
        this.isRepG1 = g(12);
        this.isRepG2 = g(12);
        this.isRep0Long = g(192);
        this.lenDecoder = new t;
        this.repLenDecoder = new t;
      };
      c.prototype.decode = function(c) {
        for (var e = this.rangeDec, a = this.outWindow, l = this.pb, h = this.dictSize, b = this.markerIsMandatory, q = this.leftToUnpack, r = this.isMatch, t = this.isRep, v = this.isRepG0, g = this.isRepG1, k = this.isRepG2, p = this.isRep0Long, w = this.lenDecoder, z = this.repLenDecoder, A = this.reps[0], C = this.reps[1], y = this.reps[2], G = this.reps[3], B = this.state;;) {
          if (c && 48 > e.inStream.available) {
            this.outWindow.flush();
            break;
          }
          if (0 === q && !b && (this.outWindow.flush(), e.isFinishedOK())) {
            return d;
          }
          var E = a.totalPos & (1 << l) - 1;
          if (0 === e.decodeBit(r, (B << 4) + E)) {
            if (0 === q) {
              return m;
            }
            a.putByte(this.decodeLiteral(B, A));
            B = 4 > B ? 0 : 10 > B ? B - 3 : B - 6;
            q--;
          } else {
            if (0 !== e.decodeBit(t, B)) {
              if (0 === q || a.isEmpty()) {
                return m;
              }
              if (0 === e.decodeBit(v, B)) {
                if (0 === e.decodeBit(p, (B << 4) + E)) {
                  B = 7 > B ? 9 : 11;
                  a.putByte(a.getByte(A + 1));
                  q--;
                  continue;
                }
              } else {
                var H;
                0 === e.decodeBit(g, B) ? H = C : (0 === e.decodeBit(k, B) ? H = y : (H = G, G = y), y = C);
                C = A;
                A = H;
              }
              E = z.decode(e, E);
              B = 7 > B ? 8 : 11;
            } else {
              G = y;
              y = C;
              C = A;
              E = w.decode(e, E);
              B = 7 > B ? 7 : 10;
              A = this.decodeDistance(E);
              if (-1 === A) {
                return this.outWindow.flush(), e.isFinishedOK() ? u : m;
              }
              if (0 === q || A >= h || !a.checkDistance(A)) {
                return m;
              }
            }
            E += 2;
            H = !1;
            void 0 !== q && q < E && (E = q, H = !0);
            a.copyMatch(A + 1, E);
            q -= E;
            if (H) {
              return m;
            }
          }
        }
        this.state = B;
        this.reps[0] = A;
        this.reps[1] = C;
        this.reps[2] = y;
        this.reps[3] = G;
        this.leftToUnpack = q;
        return f;
      };
      c.prototype.flushOutput = function() {
        this.outWindow.flush();
      };
      return c;
    }(), m = 0, u = 1, d = 2, f = 3, e;
    (function(c) {
      c[c.WAIT_FOR_LZMA_HEADER = 0] = "WAIT_FOR_LZMA_HEADER";
      c[c.WAIT_FOR_SWF_HEADER = 1] = "WAIT_FOR_SWF_HEADER";
      c[c.PROCESS_DATA = 2] = "PROCESS_DATA";
      c[c.CLOSED = 3] = "CLOSED";
      c[c.ERROR = 4] = "ERROR";
    })(e || (e = {}));
    e = function() {
      function c(c) {
        void 0 === c && (c = !1);
        this._state = c ? 1 : 0;
        this.buffer = null;
      }
      c.prototype.push = function(c) {
        if (2 > this._state) {
          var e = this.buffer ? this.buffer.length : 0, d = (1 === this._state ? 17 : 13) + 5;
          if (e + c.length < d) {
            d = new Uint8Array(e + c.length);
            0 < e && d.set(this.buffer);
            d.set(c, e);
            this.buffer = d;
            return;
          }
          var l = new Uint8Array(d);
          0 < e && l.set(this.buffer);
          l.set(c.subarray(0, d - e), e);
          this._inStream = new v;
          this._inStream.append(l.subarray(d - 5));
          this._outStream = new a(function(c) {
            this.onData.call(null, c);
          }.bind(this));
          this._decoder = new r(this._inStream, this._outStream);
          if (1 === this._state) {
            this._decoder.decodeProperties(l.subarray(12, 17)), this._decoder.markerIsMandatory = !1, this._decoder.unpackSize = ((l[4] | l[5] << 8 | l[6] << 16 | l[7] << 24) >>> 0) - 8;
          } else {
            this._decoder.decodeProperties(l.subarray(0, 5));
            for (var e = 0, h = !1, m = 0;8 > m;m++) {
              var u = l[5 + m];
              255 !== u && (h = !0);
              e |= u << 8 * m;
            }
            this._decoder.markerIsMandatory = !h;
            this._decoder.unpackSize = h ? e : void 0;
          }
          this._decoder.create();
          c = c.subarray(d);
          this._state = 2;
        } else {
          if (2 !== this._state) {
            return;
          }
        }
        try {
          this._inStream.append(c);
          var b = this._decoder.decode(!0);
          this._inStream.compact();
          b !== f && this._checkError(b);
        } catch (q) {
          this._decoder.flushOutput(), this._decoder = null, this._error(q);
        }
      };
      c.prototype.close = function() {
        if (2 === this._state) {
          this._state = 3;
          try {
            var c = this._decoder.decode(!1);
            this._checkError(c);
          } catch (e) {
            this._decoder.flushOutput(), this._error(e);
          }
          this._decoder = null;
        }
      };
      c.prototype._error = function(c) {
        this._state = 4;
        if (this.onError) {
          this.onError(c);
        }
      };
      c.prototype._checkError = function(c) {
        var e;
        c === m ? e = "LZMA decoding error" : c === f ? e = "Decoding is not complete" : c === u ? void 0 !== this._decoder.unpackSize && this._decoder.unpackSize !== this._outStream.processed && (e = "Finished with end marker before than specified size") : e = "Internal LZMA Error";
        e && this._error(e);
      };
      return c;
    }();
    k.LzmaDecoder = e;
  })(k.ArrayUtilities || (k.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(p) {
    function g(a) {
      return "string" === typeof a ? a : void 0 == a ? null : a + "";
    }
    var b = k.Debug.notImplemented, w = k.StringUtilities.utf8decode, v = k.StringUtilities.utf8encode, a = k.NumberUtilities.clamp, l = function() {
      return function(a, l, d) {
        this.buffer = a;
        this.length = l;
        this.littleEndian = d;
      };
    }();
    p.PlainObjectDataBuffer = l;
    for (var q = new Uint32Array(33), h = 1, t = 0;32 >= h;h++) {
      q[h] = t = t << 1 | 1;
    }
    var r;
    (function(a) {
      a[a.U8 = 1] = "U8";
      a[a.I32 = 2] = "I32";
      a[a.F32 = 4] = "F32";
    })(r || (r = {}));
    h = function() {
      function h(a) {
        void 0 === a && (a = h.INITIAL_SIZE);
        this._buffer || (this._buffer = new ArrayBuffer(a), this._position = this._length = 0, this._resetViews(), this._littleEndian = h._nativeLittleEndian, this._bitLength = this._bitBuffer = 0);
      }
      h.FromArrayBuffer = function(a, d) {
        void 0 === d && (d = -1);
        var f = Object.create(h.prototype);
        f._buffer = a;
        f._length = -1 === d ? a.byteLength : d;
        f._position = 0;
        f._resetViews();
        f._littleEndian = h._nativeLittleEndian;
        f._bitBuffer = 0;
        f._bitLength = 0;
        return f;
      };
      h.FromPlainObject = function(a) {
        var d = h.FromArrayBuffer(a.buffer, a.length);
        d._littleEndian = a.littleEndian;
        return d;
      };
      h.prototype.toPlainObject = function() {
        return new l(this._buffer, this._length, this._littleEndian);
      };
      h.prototype._resetViews = function() {
        this._u8 = new Uint8Array(this._buffer);
        this._f32 = this._i32 = null;
      };
      h.prototype._requestViews = function(a) {
        0 === (this._buffer.byteLength & 3) && (null === this._i32 && a & 2 && (this._i32 = new Int32Array(this._buffer)), null === this._f32 && a & 4 && (this._f32 = new Float32Array(this._buffer)));
      };
      h.prototype.getBytes = function() {
        return new Uint8Array(this._buffer, 0, this._length);
      };
      h.prototype._ensureCapacity = function(a) {
        var d = this._buffer;
        if (d.byteLength < a) {
          for (var f = Math.max(d.byteLength, 1);f < a;) {
            f *= 2;
          }
          f = h._arrayBufferPool.acquire(f);
          a = this._u8;
          this._buffer = f;
          this._resetViews();
          this._u8.set(a);
          f = this._u8;
          for (a = a.length;a < f.length;a++) {
            f[a] = 0;
          }
          h._arrayBufferPool.release(d);
        }
      };
      h.prototype.clear = function() {
        this._position = this._length = 0;
      };
      h.prototype.readBoolean = function() {
        return 0 !== this.readUnsignedByte();
      };
      h.prototype.readByte = function() {
        return this.readUnsignedByte() << 24 >> 24;
      };
      h.prototype.readUnsignedByte = function() {
        this._position + 1 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        return this._u8[this._position++];
      };
      h.prototype.readBytes = function(a, d) {
        var f = 0;
        void 0 === f && (f = 0);
        void 0 === d && (d = 0);
        var e = this._position;
        f || (f = 0);
        d || (d = this._length - e);
        e + d > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        a.length < f + d && (a._ensureCapacity(f + d), a.length = f + d);
        a._u8.set(new Uint8Array(this._buffer, e, d), f);
        this._position += d;
      };
      h.prototype.readShort = function() {
        return this.readUnsignedShort() << 16 >> 16;
      };
      h.prototype.readUnsignedShort = function() {
        var a = this._u8, d = this._position;
        d + 2 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var f = a[d + 0], a = a[d + 1];
        this._position = d + 2;
        return this._littleEndian ? a << 8 | f : f << 8 | a;
      };
      h.prototype.readInt = function() {
        var a = this._u8, d = this._position;
        d + 4 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var f = a[d + 0], e = a[d + 1], c = a[d + 2], a = a[d + 3];
        this._position = d + 4;
        return this._littleEndian ? a << 24 | c << 16 | e << 8 | f : f << 24 | e << 16 | c << 8 | a;
      };
      h.prototype.readUnsignedInt = function() {
        return this.readInt() >>> 0;
      };
      h.prototype.readFloat = function() {
        var a = this._position;
        a + 4 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        this._position = a + 4;
        this._requestViews(4);
        if (this._littleEndian && 0 === (a & 3) && this._f32) {
          return this._f32[a >> 2];
        }
        var d = this._u8, f = k.IntegerUtilities.u8;
        this._littleEndian ? (f[0] = d[a + 0], f[1] = d[a + 1], f[2] = d[a + 2], f[3] = d[a + 3]) : (f[3] = d[a + 0], f[2] = d[a + 1], f[1] = d[a + 2], f[0] = d[a + 3]);
        return k.IntegerUtilities.f32[0];
      };
      h.prototype.readDouble = function() {
        var a = this._u8, d = this._position;
        d + 8 > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        var f = k.IntegerUtilities.u8;
        this._littleEndian ? (f[0] = a[d + 0], f[1] = a[d + 1], f[2] = a[d + 2], f[3] = a[d + 3], f[4] = a[d + 4], f[5] = a[d + 5], f[6] = a[d + 6], f[7] = a[d + 7]) : (f[0] = a[d + 7], f[1] = a[d + 6], f[2] = a[d + 5], f[3] = a[d + 4], f[4] = a[d + 3], f[5] = a[d + 2], f[6] = a[d + 1], f[7] = a[d + 0]);
        this._position = d + 8;
        return k.IntegerUtilities.f64[0];
      };
      h.prototype.writeBoolean = function(a) {
        this.writeByte(a ? 1 : 0);
      };
      h.prototype.writeByte = function(a) {
        var d = this._position + 1;
        this._ensureCapacity(d);
        this._u8[this._position++] = a;
        d > this._length && (this._length = d);
      };
      h.prototype.writeUnsignedByte = function(a) {
        var d = this._position + 1;
        this._ensureCapacity(d);
        this._u8[this._position++] = a;
        d > this._length && (this._length = d);
      };
      h.prototype.writeRawBytes = function(a) {
        var d = this._position + a.length;
        this._ensureCapacity(d);
        this._u8.set(a, this._position);
        this._position = d;
        d > this._length && (this._length = d);
      };
      h.prototype.writeBytes = function(l, d, f) {
        k.isNullOrUndefined(l) && this.sec.throwError("TypeError", Errors.NullPointerError, "bytes");
        d >>>= 0;
        f >>>= 0;
        2 > arguments.length && (d = 0);
        3 > arguments.length && (f = 0);
        d === a(d, 0, l.length) && d + f === a(d + f, 0, l.length) || this.sec.throwError("RangeError", Errors.ParamRangeError);
        0 === f && (f = l.length - d);
        this.writeRawBytes(new Int8Array(l._buffer, d, f));
      };
      h.prototype.writeShort = function(a) {
        this.writeUnsignedShort(a);
      };
      h.prototype.writeUnsignedShort = function(a) {
        var d = this._position;
        this._ensureCapacity(d + 2);
        var f = this._u8;
        this._littleEndian ? (f[d + 0] = a, f[d + 1] = a >> 8) : (f[d + 0] = a >> 8, f[d + 1] = a);
        this._position = d += 2;
        d > this._length && (this._length = d);
      };
      h.prototype.writeInt = function(a) {
        this.writeUnsignedInt(a);
      };
      h.prototype.write2Ints = function(a, d) {
        this.write2UnsignedInts(a, d);
      };
      h.prototype.write4Ints = function(a, d, f, e) {
        this.write4UnsignedInts(a, d, f, e);
      };
      h.prototype.writeUnsignedInt = function(a) {
        var d = this._position;
        this._ensureCapacity(d + 4);
        this._requestViews(2);
        if (this._littleEndian === h._nativeLittleEndian && 0 === (d & 3) && this._i32) {
          this._i32[d >> 2] = a;
        } else {
          var f = this._u8;
          this._littleEndian ? (f[d + 0] = a, f[d + 1] = a >> 8, f[d + 2] = a >> 16, f[d + 3] = a >> 24) : (f[d + 0] = a >> 24, f[d + 1] = a >> 16, f[d + 2] = a >> 8, f[d + 3] = a);
        }
        this._position = d += 4;
        d > this._length && (this._length = d);
      };
      h.prototype.write2UnsignedInts = function(a, d) {
        var f = this._position;
        this._ensureCapacity(f + 8);
        this._requestViews(2);
        this._littleEndian === h._nativeLittleEndian && 0 === (f & 3) && this._i32 ? (this._i32[(f >> 2) + 0] = a, this._i32[(f >> 2) + 1] = d, this._position = f += 8, f > this._length && (this._length = f)) : (this.writeUnsignedInt(a), this.writeUnsignedInt(d));
      };
      h.prototype.write4UnsignedInts = function(a, d, f, e) {
        var c = this._position;
        this._ensureCapacity(c + 16);
        this._requestViews(2);
        this._littleEndian === h._nativeLittleEndian && 0 === (c & 3) && this._i32 ? (this._i32[(c >> 2) + 0] = a, this._i32[(c >> 2) + 1] = d, this._i32[(c >> 2) + 2] = f, this._i32[(c >> 2) + 3] = e, this._position = c += 16, c > this._length && (this._length = c)) : (this.writeUnsignedInt(a), this.writeUnsignedInt(d), this.writeUnsignedInt(f), this.writeUnsignedInt(e));
      };
      h.prototype.writeFloat = function(a) {
        var d = this._position;
        this._ensureCapacity(d + 4);
        this._requestViews(4);
        if (this._littleEndian === h._nativeLittleEndian && 0 === (d & 3) && this._f32) {
          this._f32[d >> 2] = a;
        } else {
          var f = this._u8;
          k.IntegerUtilities.f32[0] = a;
          a = k.IntegerUtilities.u8;
          this._littleEndian ? (f[d + 0] = a[0], f[d + 1] = a[1], f[d + 2] = a[2], f[d + 3] = a[3]) : (f[d + 0] = a[3], f[d + 1] = a[2], f[d + 2] = a[1], f[d + 3] = a[0]);
        }
        this._position = d += 4;
        d > this._length && (this._length = d);
      };
      h.prototype.write6Floats = function(a, d, f, e, c, n) {
        var l = this._position;
        this._ensureCapacity(l + 24);
        this._requestViews(4);
        this._littleEndian === h._nativeLittleEndian && 0 === (l & 3) && this._f32 ? (this._f32[(l >> 2) + 0] = a, this._f32[(l >> 2) + 1] = d, this._f32[(l >> 2) + 2] = f, this._f32[(l >> 2) + 3] = e, this._f32[(l >> 2) + 4] = c, this._f32[(l >> 2) + 5] = n, this._position = l += 24, l > this._length && (this._length = l)) : (this.writeFloat(a), this.writeFloat(d), this.writeFloat(f), this.writeFloat(e), this.writeFloat(c), this.writeFloat(n));
      };
      h.prototype.writeDouble = function(a) {
        var d = this._position;
        this._ensureCapacity(d + 8);
        var f = this._u8;
        k.IntegerUtilities.f64[0] = a;
        a = k.IntegerUtilities.u8;
        this._littleEndian ? (f[d + 0] = a[0], f[d + 1] = a[1], f[d + 2] = a[2], f[d + 3] = a[3], f[d + 4] = a[4], f[d + 5] = a[5], f[d + 6] = a[6], f[d + 7] = a[7]) : (f[d + 0] = a[7], f[d + 1] = a[6], f[d + 2] = a[5], f[d + 3] = a[4], f[d + 4] = a[3], f[d + 5] = a[2], f[d + 6] = a[1], f[d + 7] = a[0]);
        this._position = d += 8;
        d > this._length && (this._length = d);
      };
      h.prototype.readRawBytes = function() {
        return new Int8Array(this._buffer, 0, this._length);
      };
      h.prototype.writeUTF = function(a) {
        a = g(a);
        a = w(a);
        this.writeShort(a.length);
        this.writeRawBytes(a);
      };
      h.prototype.writeUTFBytes = function(a) {
        a = g(a);
        a = w(a);
        this.writeRawBytes(a);
      };
      h.prototype.readUTF = function() {
        return this.readUTFBytes(this.readShort());
      };
      h.prototype.readUTFBytes = function(a) {
        a >>>= 0;
        var d = this._position;
        d + a > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError);
        this._position += a;
        return v(new Int8Array(this._buffer, d, a));
      };
      Object.defineProperty(h.prototype, "length", {get:function() {
        return this._length;
      }, set:function(l) {
        l >>>= 0;
        l > this._buffer.byteLength && this._ensureCapacity(l);
        this._length = l;
        this._position = a(this._position, 0, this._length);
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(h.prototype, "bytesAvailable", {get:function() {
        return this._length - this._position;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(h.prototype, "position", {get:function() {
        return this._position;
      }, set:function(a) {
        this._position = a >>> 0;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(h.prototype, "buffer", {get:function() {
        return this._buffer;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(h.prototype, "bytes", {get:function() {
        return this._u8;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(h.prototype, "ints", {get:function() {
        this._requestViews(2);
        return this._i32;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(h.prototype, "objectEncoding", {get:function() {
        return this._objectEncoding;
      }, set:function(a) {
        this._objectEncoding = a >>> 0;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(h.prototype, "endian", {get:function() {
        return this._littleEndian ? "littleEndian" : "bigEndian";
      }, set:function(a) {
        a = g(a);
        this._littleEndian = "auto" === a ? h._nativeLittleEndian : "littleEndian" === a;
      }, enumerable:!0, configurable:!0});
      h.prototype.toString = function() {
        return v(new Int8Array(this._buffer, 0, this._length));
      };
      h.prototype.toBlob = function(a) {
        return new Blob([new Int8Array(this._buffer, this._position, this._length)], {type:a});
      };
      h.prototype.writeMultiByte = function(a, d) {
        b("packageInternal flash.utils.ObjectOutput::writeMultiByte");
      };
      h.prototype.readMultiByte = function(a, d) {
        b("packageInternal flash.utils.ObjectInput::readMultiByte");
      };
      h.prototype.getValue = function(a) {
        a |= 0;
        return a >= this._length ? void 0 : this._u8[a];
      };
      h.prototype.setValue = function(a, d) {
        a |= 0;
        var f = a + 1;
        this._ensureCapacity(f);
        this._u8[a] = d;
        f > this._length && (this._length = f);
      };
      h.prototype.readFixed = function() {
        return this.readInt() / 65536;
      };
      h.prototype.readFixed8 = function() {
        return this.readShort() / 256;
      };
      h.prototype.readFloat16 = function() {
        var a = this.readUnsignedShort(), d = a >> 15 ? -1 : 1, f = (a & 31744) >> 10, a = a & 1023;
        return f ? 31 === f ? a ? NaN : Infinity * d : d * Math.pow(2, f - 15) * (1 + a / 1024) : a / 1024 * Math.pow(2, -14) * d;
      };
      h.prototype.readEncodedU32 = function() {
        var a = this.readUnsignedByte();
        if (!(a & 128)) {
          return a;
        }
        a = a & 127 | this.readUnsignedByte() << 7;
        if (!(a & 16384)) {
          return a;
        }
        a = a & 16383 | this.readUnsignedByte() << 14;
        if (!(a & 2097152)) {
          return a;
        }
        a = a & 2097151 | this.readUnsignedByte() << 21;
        return a & 268435456 ? a & 268435455 | this.readUnsignedByte() << 28 : a;
      };
      h.prototype.readBits = function(a) {
        return this.readUnsignedBits(a) << 32 - a >> 32 - a;
      };
      h.prototype.readUnsignedBits = function(a) {
        for (var d = this._bitBuffer, f = this._bitLength;a > f;) {
          d = d << 8 | this.readUnsignedByte(), f += 8;
        }
        f -= a;
        a = d >>> f & q[a];
        this._bitBuffer = d;
        this._bitLength = f;
        return a;
      };
      h.prototype.readFixedBits = function(a) {
        return this.readBits(a) / 65536;
      };
      h.prototype.readString = function(a) {
        var d = this._position;
        if (a) {
          d + a > this._length && this.sec.throwError("flash.errors.EOFError", Errors.EOFError), this._position += a;
        } else {
          a = 0;
          for (var f = d;f < this._length && this._u8[f];f++) {
            a++;
          }
          this._position += a + 1;
        }
        return v(new Int8Array(this._buffer, d, a));
      };
      h.prototype.align = function() {
        this._bitLength = this._bitBuffer = 0;
      };
      h.prototype.deflate = function() {
        this.compress("deflate");
      };
      h.prototype.inflate = function() {
        this.uncompress("deflate");
      };
      h.prototype.compress = function(a) {
        a = 0 === arguments.length ? "zlib" : g(a);
        var d;
        switch(a) {
          case "zlib":
            d = new p.Deflate(!0);
            break;
          case "deflate":
            d = new p.Deflate(!1);
            break;
          default:
            return;
        }
        var f = new h;
        d.onData = f.writeRawBytes.bind(f);
        d.push(this._u8.subarray(0, this._length));
        d.close();
        this._ensureCapacity(f._u8.length);
        this._u8.set(f._u8);
        this.length = f.length;
        this._position = 0;
      };
      h.prototype.uncompress = function(a) {
        a = 0 === arguments.length ? "zlib" : g(a);
        var d;
        switch(a) {
          case "zlib":
            d = p.Inflate.create(!0);
            break;
          case "deflate":
            d = p.Inflate.create(!1);
            break;
          case "lzma":
            d = new p.LzmaDecoder(!1);
            break;
          default:
            return;
        }
        var f = new h, e;
        d.onData = f.writeRawBytes.bind(f);
        d.onError = function(c) {
          return e = c;
        };
        d.push(this._u8.subarray(0, this._length));
        e && this.sec.throwError("IOError", Errors.CompressedDataError);
        d.close();
        this._ensureCapacity(f._u8.length);
        this._u8.set(f._u8);
        this.length = f.length;
        this._position = 0;
      };
      h._nativeLittleEndian = 1 === (new Int8Array((new Int32Array([1])).buffer))[0];
      h.INITIAL_SIZE = 128;
      h._arrayBufferPool = new k.ArrayBufferPool;
      return h;
    }();
    p.DataBuffer = h;
  })(k.ArrayUtilities || (k.ArrayUtilities = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  var p = k.ArrayUtilities.DataBuffer, g = k.ArrayUtilities.ensureTypedArrayCapacity;
  (function(b) {
    b[b.BeginSolidFill = 1] = "BeginSolidFill";
    b[b.BeginGradientFill = 2] = "BeginGradientFill";
    b[b.BeginBitmapFill = 3] = "BeginBitmapFill";
    b[b.EndFill = 4] = "EndFill";
    b[b.LineStyleSolid = 5] = "LineStyleSolid";
    b[b.LineStyleGradient = 6] = "LineStyleGradient";
    b[b.LineStyleBitmap = 7] = "LineStyleBitmap";
    b[b.LineEnd = 8] = "LineEnd";
    b[b.MoveTo = 9] = "MoveTo";
    b[b.LineTo = 10] = "LineTo";
    b[b.CurveTo = 11] = "CurveTo";
    b[b.CubicCurveTo = 12] = "CubicCurveTo";
  })(k.PathCommand || (k.PathCommand = {}));
  (function(b) {
    b[b.Linear = 16] = "Linear";
    b[b.Radial = 18] = "Radial";
  })(k.GradientType || (k.GradientType = {}));
  (function(b) {
    b[b.Pad = 0] = "Pad";
    b[b.Reflect = 1] = "Reflect";
    b[b.Repeat = 2] = "Repeat";
  })(k.GradientSpreadMethod || (k.GradientSpreadMethod = {}));
  (function(b) {
    b[b.RGB = 0] = "RGB";
    b[b.LinearRGB = 1] = "LinearRGB";
  })(k.GradientInterpolationMethod || (k.GradientInterpolationMethod = {}));
  (function(b) {
    b[b.None = 0] = "None";
    b[b.Normal = 1] = "Normal";
    b[b.Vertical = 2] = "Vertical";
    b[b.Horizontal = 3] = "Horizontal";
  })(k.LineScaleMode || (k.LineScaleMode = {}));
  var b = function() {
    return function(b, a, l, q, h, t, r, m, u, d, f) {
      this.commands = b;
      this.commandsPosition = a;
      this.coordinates = l;
      this.morphCoordinates = q;
      this.coordinatesPosition = h;
      this.styles = t;
      this.stylesLength = r;
      this.morphStyles = m;
      this.morphStylesLength = u;
      this.hasFills = d;
      this.hasLines = f;
    };
  }();
  k.PlainObjectShapeData = b;
  var w;
  (function(b) {
    b[b.Commands = 32] = "Commands";
    b[b.Coordinates = 128] = "Coordinates";
    b[b.Styles = 16] = "Styles";
  })(w || (w = {}));
  w = function() {
    function v(a) {
      void 0 === a && (a = !0);
      a && this.clear();
    }
    v.FromPlainObject = function(a) {
      var l = new v(!1);
      l.commands = a.commands;
      l.coordinates = a.coordinates;
      l.morphCoordinates = a.morphCoordinates;
      l.commandsPosition = a.commandsPosition;
      l.coordinatesPosition = a.coordinatesPosition;
      l.styles = p.FromArrayBuffer(a.styles, a.stylesLength);
      l.styles.endian = "auto";
      a.morphStyles && (l.morphStyles = p.FromArrayBuffer(a.morphStyles, a.morphStylesLength), l.morphStyles.endian = "auto");
      l.hasFills = a.hasFills;
      l.hasLines = a.hasLines;
      return l;
    };
    v.prototype.moveTo = function(a, l) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = 9;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = l;
    };
    v.prototype.lineTo = function(a, l) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = 10;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = l;
    };
    v.prototype.curveTo = function(a, l, b, h) {
      this.ensurePathCapacities(1, 4);
      this.commands[this.commandsPosition++] = 11;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = l;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = h;
    };
    v.prototype.cubicCurveTo = function(a, l, b, h, t, r) {
      this.ensurePathCapacities(1, 6);
      this.commands[this.commandsPosition++] = 12;
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = l;
      this.coordinates[this.coordinatesPosition++] = b;
      this.coordinates[this.coordinatesPosition++] = h;
      this.coordinates[this.coordinatesPosition++] = t;
      this.coordinates[this.coordinatesPosition++] = r;
    };
    v.prototype.beginFill = function(a) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 1;
      this.styles.writeUnsignedInt(a);
      this.hasFills = !0;
    };
    v.prototype.writeMorphFill = function(a) {
      this.morphStyles.writeUnsignedInt(a);
    };
    v.prototype.endFill = function() {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 4;
    };
    v.prototype.endLine = function() {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = 8;
    };
    v.prototype.lineStyle = function(a, l, b, h, t, r, m) {
      this.ensurePathCapacities(2, 0);
      this.commands[this.commandsPosition++] = 5;
      this.coordinates[this.coordinatesPosition++] = a;
      a = this.styles;
      a.writeUnsignedInt(l);
      a.writeBoolean(b);
      a.writeUnsignedByte(h);
      a.writeUnsignedByte(t);
      a.writeUnsignedByte(r);
      a.writeUnsignedByte(m);
      this.hasLines = !0;
    };
    v.prototype.writeMorphLineStyle = function(a, l) {
      this.morphCoordinates[this.coordinatesPosition - 1] = a;
      this.morphStyles.writeUnsignedInt(l);
    };
    v.prototype.beginBitmap = function(a, l, b, h, t) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = a;
      a = this.styles;
      a.writeUnsignedInt(l);
      this._writeStyleMatrix(b, !1);
      a.writeBoolean(h);
      a.writeBoolean(t);
      this.hasFills = !0;
    };
    v.prototype.writeMorphBitmap = function(a) {
      this._writeStyleMatrix(a, !0);
    };
    v.prototype.beginGradient = function(a, l, b, h, t, r, m, u) {
      this.ensurePathCapacities(1, 0);
      this.commands[this.commandsPosition++] = a;
      a = this.styles;
      a.writeUnsignedByte(h);
      a.writeShort(u);
      this._writeStyleMatrix(t, !1);
      h = l.length;
      a.writeByte(h);
      for (t = 0;t < h;t++) {
        a.writeUnsignedByte(b[t]), a.writeUnsignedInt(l[t]);
      }
      a.writeUnsignedByte(r);
      a.writeUnsignedByte(m);
      this.hasFills = !0;
    };
    v.prototype.writeMorphGradient = function(a, l, b) {
      this._writeStyleMatrix(b, !0);
      b = this.morphStyles;
      for (var h = 0;h < a.length;h++) {
        b.writeUnsignedByte(l[h]), b.writeUnsignedInt(a[h]);
      }
    };
    v.prototype.writeCommandAndCoordinates = function(a, l, b) {
      this.ensurePathCapacities(1, 2);
      this.commands[this.commandsPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = l;
      this.coordinates[this.coordinatesPosition++] = b;
    };
    v.prototype.writeCoordinates = function(a, l) {
      this.ensurePathCapacities(0, 2);
      this.coordinates[this.coordinatesPosition++] = a;
      this.coordinates[this.coordinatesPosition++] = l;
    };
    v.prototype.writeMorphCoordinates = function(a, l) {
      this.morphCoordinates = g(this.morphCoordinates, this.coordinatesPosition);
      this.morphCoordinates[this.coordinatesPosition - 2] = a;
      this.morphCoordinates[this.coordinatesPosition - 1] = l;
    };
    v.prototype.clear = function() {
      this.commandsPosition = this.coordinatesPosition = 0;
      this.commands = new Uint8Array(32);
      this.coordinates = new Int32Array(128);
      this.styles = new p(16);
      this.styles.endian = "auto";
      this.hasFills = this.hasLines = !1;
    };
    v.prototype.isEmpty = function() {
      return 0 === this.commandsPosition;
    };
    v.prototype.clone = function() {
      var a = new v(!1);
      a.commands = new Uint8Array(this.commands);
      a.commandsPosition = this.commandsPosition;
      a.coordinates = new Int32Array(this.coordinates);
      a.coordinatesPosition = this.coordinatesPosition;
      a.styles = new p(this.styles.length);
      a.styles.writeRawBytes(this.styles.bytes.subarray(0, this.styles.length));
      this.morphStyles && (a.morphStyles = new p(this.morphStyles.length), a.morphStyles.writeRawBytes(this.morphStyles.bytes.subarray(0, this.morphStyles.length)));
      a.hasFills = this.hasFills;
      a.hasLines = this.hasLines;
      return a;
    };
    v.prototype.toPlainObject = function() {
      return new b(this.commands, this.commandsPosition, this.coordinates, this.morphCoordinates, this.coordinatesPosition, this.styles.buffer, this.styles.length, this.morphStyles && this.morphStyles.buffer, this.morphStyles ? this.morphStyles.length : 0, this.hasFills, this.hasLines);
    };
    Object.defineProperty(v.prototype, "buffers", {get:function() {
      var a = [this.commands.buffer, this.coordinates.buffer, this.styles.buffer];
      this.morphCoordinates && a.push(this.morphCoordinates.buffer);
      this.morphStyles && a.push(this.morphStyles.buffer);
      return a;
    }, enumerable:!0, configurable:!0});
    v.prototype._writeStyleMatrix = function(a, l) {
      (l ? this.morphStyles : this.styles).write6Floats(a.a, a.b, a.c, a.d, a.tx, a.ty);
    };
    v.prototype.ensurePathCapacities = function(a, l) {
      this.commands = g(this.commands, this.commandsPosition + a);
      this.coordinates = g(this.coordinates, this.coordinatesPosition + l);
    };
    return v;
  }();
  k.ShapeData = w;
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    (function(g) {
      (function(b) {
        b[b.CODE_END = 0] = "CODE_END";
        b[b.CODE_SHOW_FRAME = 1] = "CODE_SHOW_FRAME";
        b[b.CODE_DEFINE_SHAPE = 2] = "CODE_DEFINE_SHAPE";
        b[b.CODE_FREE_CHARACTER = 3] = "CODE_FREE_CHARACTER";
        b[b.CODE_PLACE_OBJECT = 4] = "CODE_PLACE_OBJECT";
        b[b.CODE_REMOVE_OBJECT = 5] = "CODE_REMOVE_OBJECT";
        b[b.CODE_DEFINE_BITS = 6] = "CODE_DEFINE_BITS";
        b[b.CODE_DEFINE_BUTTON = 7] = "CODE_DEFINE_BUTTON";
        b[b.CODE_JPEG_TABLES = 8] = "CODE_JPEG_TABLES";
        b[b.CODE_SET_BACKGROUND_COLOR = 9] = "CODE_SET_BACKGROUND_COLOR";
        b[b.CODE_DEFINE_FONT = 10] = "CODE_DEFINE_FONT";
        b[b.CODE_DEFINE_TEXT = 11] = "CODE_DEFINE_TEXT";
        b[b.CODE_DO_ACTION = 12] = "CODE_DO_ACTION";
        b[b.CODE_DEFINE_FONT_INFO = 13] = "CODE_DEFINE_FONT_INFO";
        b[b.CODE_DEFINE_SOUND = 14] = "CODE_DEFINE_SOUND";
        b[b.CODE_START_SOUND = 15] = "CODE_START_SOUND";
        b[b.CODE_STOP_SOUND = 16] = "CODE_STOP_SOUND";
        b[b.CODE_DEFINE_BUTTON_SOUND = 17] = "CODE_DEFINE_BUTTON_SOUND";
        b[b.CODE_SOUND_STREAM_HEAD = 18] = "CODE_SOUND_STREAM_HEAD";
        b[b.CODE_SOUND_STREAM_BLOCK = 19] = "CODE_SOUND_STREAM_BLOCK";
        b[b.CODE_DEFINE_BITS_LOSSLESS = 20] = "CODE_DEFINE_BITS_LOSSLESS";
        b[b.CODE_DEFINE_BITS_JPEG2 = 21] = "CODE_DEFINE_BITS_JPEG2";
        b[b.CODE_DEFINE_SHAPE2 = 22] = "CODE_DEFINE_SHAPE2";
        b[b.CODE_DEFINE_BUTTON_CXFORM = 23] = "CODE_DEFINE_BUTTON_CXFORM";
        b[b.CODE_PROTECT = 24] = "CODE_PROTECT";
        b[b.CODE_PATHS_ARE_POSTSCRIPT = 25] = "CODE_PATHS_ARE_POSTSCRIPT";
        b[b.CODE_PLACE_OBJECT2 = 26] = "CODE_PLACE_OBJECT2";
        b[b.CODE_REMOVE_OBJECT2 = 28] = "CODE_REMOVE_OBJECT2";
        b[b.CODE_SYNC_FRAME = 29] = "CODE_SYNC_FRAME";
        b[b.CODE_FREE_ALL = 31] = "CODE_FREE_ALL";
        b[b.CODE_DEFINE_SHAPE3 = 32] = "CODE_DEFINE_SHAPE3";
        b[b.CODE_DEFINE_TEXT2 = 33] = "CODE_DEFINE_TEXT2";
        b[b.CODE_DEFINE_BUTTON2 = 34] = "CODE_DEFINE_BUTTON2";
        b[b.CODE_DEFINE_BITS_JPEG3 = 35] = "CODE_DEFINE_BITS_JPEG3";
        b[b.CODE_DEFINE_BITS_LOSSLESS2 = 36] = "CODE_DEFINE_BITS_LOSSLESS2";
        b[b.CODE_DEFINE_EDIT_TEXT = 37] = "CODE_DEFINE_EDIT_TEXT";
        b[b.CODE_DEFINE_VIDEO = 38] = "CODE_DEFINE_VIDEO";
        b[b.CODE_DEFINE_SPRITE = 39] = "CODE_DEFINE_SPRITE";
        b[b.CODE_NAME_CHARACTER = 40] = "CODE_NAME_CHARACTER";
        b[b.CODE_PRODUCT_INFO = 41] = "CODE_PRODUCT_INFO";
        b[b.CODE_DEFINE_TEXT_FORMAT = 42] = "CODE_DEFINE_TEXT_FORMAT";
        b[b.CODE_FRAME_LABEL = 43] = "CODE_FRAME_LABEL";
        b[b.CODE_DEFINE_BEHAVIOUR = 44] = "CODE_DEFINE_BEHAVIOUR";
        b[b.CODE_SOUND_STREAM_HEAD2 = 45] = "CODE_SOUND_STREAM_HEAD2";
        b[b.CODE_DEFINE_MORPH_SHAPE = 46] = "CODE_DEFINE_MORPH_SHAPE";
        b[b.CODE_GENERATE_FRAME = 47] = "CODE_GENERATE_FRAME";
        b[b.CODE_DEFINE_FONT2 = 48] = "CODE_DEFINE_FONT2";
        b[b.CODE_GEN_COMMAND = 49] = "CODE_GEN_COMMAND";
        b[b.CODE_DEFINE_COMMAND_OBJECT = 50] = "CODE_DEFINE_COMMAND_OBJECT";
        b[b.CODE_CHARACTER_SET = 51] = "CODE_CHARACTER_SET";
        b[b.CODE_EXTERNAL_FONT = 52] = "CODE_EXTERNAL_FONT";
        b[b.CODE_DEFINE_FUNCTION = 53] = "CODE_DEFINE_FUNCTION";
        b[b.CODE_PLACE_FUNCTION = 54] = "CODE_PLACE_FUNCTION";
        b[b.CODE_GEN_TAG_OBJECTS = 55] = "CODE_GEN_TAG_OBJECTS";
        b[b.CODE_EXPORT_ASSETS = 56] = "CODE_EXPORT_ASSETS";
        b[b.CODE_IMPORT_ASSETS = 57] = "CODE_IMPORT_ASSETS";
        b[b.CODE_ENABLE_DEBUGGER = 58] = "CODE_ENABLE_DEBUGGER";
        b[b.CODE_DO_INIT_ACTION = 59] = "CODE_DO_INIT_ACTION";
        b[b.CODE_DEFINE_VIDEO_STREAM = 60] = "CODE_DEFINE_VIDEO_STREAM";
        b[b.CODE_VIDEO_FRAME = 61] = "CODE_VIDEO_FRAME";
        b[b.CODE_DEFINE_FONT_INFO2 = 62] = "CODE_DEFINE_FONT_INFO2";
        b[b.CODE_DEBUG_ID = 63] = "CODE_DEBUG_ID";
        b[b.CODE_ENABLE_DEBUGGER2 = 64] = "CODE_ENABLE_DEBUGGER2";
        b[b.CODE_SCRIPT_LIMITS = 65] = "CODE_SCRIPT_LIMITS";
        b[b.CODE_SET_TAB_INDEX = 66] = "CODE_SET_TAB_INDEX";
        b[b.CODE_FILE_ATTRIBUTES = 69] = "CODE_FILE_ATTRIBUTES";
        b[b.CODE_PLACE_OBJECT3 = 70] = "CODE_PLACE_OBJECT3";
        b[b.CODE_IMPORT_ASSETS2 = 71] = "CODE_IMPORT_ASSETS2";
        b[b.CODE_DO_ABC_DEFINE = 72] = "CODE_DO_ABC_DEFINE";
        b[b.CODE_DEFINE_FONT_ALIGN_ZONES = 73] = "CODE_DEFINE_FONT_ALIGN_ZONES";
        b[b.CODE_CSM_TEXT_SETTINGS = 74] = "CODE_CSM_TEXT_SETTINGS";
        b[b.CODE_DEFINE_FONT3 = 75] = "CODE_DEFINE_FONT3";
        b[b.CODE_SYMBOL_CLASS = 76] = "CODE_SYMBOL_CLASS";
        b[b.CODE_METADATA = 77] = "CODE_METADATA";
        b[b.CODE_DEFINE_SCALING_GRID = 78] = "CODE_DEFINE_SCALING_GRID";
        b[b.CODE_DO_ABC = 82] = "CODE_DO_ABC";
        b[b.CODE_DEFINE_SHAPE4 = 83] = "CODE_DEFINE_SHAPE4";
        b[b.CODE_DEFINE_MORPH_SHAPE2 = 84] = "CODE_DEFINE_MORPH_SHAPE2";
        b[b.CODE_DEFINE_SCENE_AND_FRAME_LABEL_DATA = 86] = "CODE_DEFINE_SCENE_AND_FRAME_LABEL_DATA";
        b[b.CODE_DEFINE_BINARY_DATA = 87] = "CODE_DEFINE_BINARY_DATA";
        b[b.CODE_DEFINE_FONT_NAME = 88] = "CODE_DEFINE_FONT_NAME";
        b[b.CODE_START_SOUND2 = 89] = "CODE_START_SOUND2";
        b[b.CODE_DEFINE_BITS_JPEG4 = 90] = "CODE_DEFINE_BITS_JPEG4";
        b[b.CODE_DEFINE_FONT4 = 91] = "CODE_DEFINE_FONT4";
        b[b.CODE_TELEMETRY = 93] = "CODE_TELEMETRY";
      })(g.SwfTag || (g.SwfTag = {}));
      (function(b) {
        b[b.CODE_DEFINE_SHAPE = 2] = "CODE_DEFINE_SHAPE";
        b[b.CODE_DEFINE_BITS = 6] = "CODE_DEFINE_BITS";
        b[b.CODE_DEFINE_BUTTON = 7] = "CODE_DEFINE_BUTTON";
        b[b.CODE_DEFINE_FONT = 10] = "CODE_DEFINE_FONT";
        b[b.CODE_DEFINE_TEXT = 11] = "CODE_DEFINE_TEXT";
        b[b.CODE_DEFINE_SOUND = 14] = "CODE_DEFINE_SOUND";
        b[b.CODE_DEFINE_BITS_LOSSLESS = 20] = "CODE_DEFINE_BITS_LOSSLESS";
        b[b.CODE_DEFINE_BITS_JPEG2 = 21] = "CODE_DEFINE_BITS_JPEG2";
        b[b.CODE_DEFINE_SHAPE2 = 22] = "CODE_DEFINE_SHAPE2";
        b[b.CODE_DEFINE_SHAPE3 = 32] = "CODE_DEFINE_SHAPE3";
        b[b.CODE_DEFINE_TEXT2 = 33] = "CODE_DEFINE_TEXT2";
        b[b.CODE_DEFINE_BUTTON2 = 34] = "CODE_DEFINE_BUTTON2";
        b[b.CODE_DEFINE_BITS_JPEG3 = 35] = "CODE_DEFINE_BITS_JPEG3";
        b[b.CODE_DEFINE_BITS_LOSSLESS2 = 36] = "CODE_DEFINE_BITS_LOSSLESS2";
        b[b.CODE_DEFINE_EDIT_TEXT = 37] = "CODE_DEFINE_EDIT_TEXT";
        b[b.CODE_DEFINE_SPRITE = 39] = "CODE_DEFINE_SPRITE";
        b[b.CODE_DEFINE_MORPH_SHAPE = 46] = "CODE_DEFINE_MORPH_SHAPE";
        b[b.CODE_DEFINE_FONT2 = 48] = "CODE_DEFINE_FONT2";
        b[b.CODE_DEFINE_FONT3 = 75] = "CODE_DEFINE_FONT3";
        b[b.CODE_DEFINE_SHAPE4 = 83] = "CODE_DEFINE_SHAPE4";
        b[b.CODE_DEFINE_MORPH_SHAPE2 = 84] = "CODE_DEFINE_MORPH_SHAPE2";
        b[b.CODE_DEFINE_BINARY_DATA = 87] = "CODE_DEFINE_BINARY_DATA";
        b[b.CODE_DEFINE_BITS_JPEG4 = 90] = "CODE_DEFINE_BITS_JPEG4";
        b[b.CODE_DEFINE_FONT4 = 91] = "CODE_DEFINE_FONT4";
      })(g.DefinitionTags || (g.DefinitionTags = {}));
      (function(b) {
        b[b.CODE_DEFINE_BITS = 6] = "CODE_DEFINE_BITS";
        b[b.CODE_DEFINE_BITS_JPEG2 = 21] = "CODE_DEFINE_BITS_JPEG2";
        b[b.CODE_DEFINE_BITS_JPEG3 = 35] = "CODE_DEFINE_BITS_JPEG3";
        b[b.CODE_DEFINE_BITS_JPEG4 = 90] = "CODE_DEFINE_BITS_JPEG4";
      })(g.ImageDefinitionTags || (g.ImageDefinitionTags = {}));
      (function(b) {
        b[b.CODE_DEFINE_FONT = 10] = "CODE_DEFINE_FONT";
        b[b.CODE_DEFINE_FONT2 = 48] = "CODE_DEFINE_FONT2";
        b[b.CODE_DEFINE_FONT3 = 75] = "CODE_DEFINE_FONT3";
        b[b.CODE_DEFINE_FONT4 = 91] = "CODE_DEFINE_FONT4";
      })(g.FontDefinitionTags || (g.FontDefinitionTags = {}));
      (function(b) {
        b[b.CODE_PLACE_OBJECT = 4] = "CODE_PLACE_OBJECT";
        b[b.CODE_PLACE_OBJECT2 = 26] = "CODE_PLACE_OBJECT2";
        b[b.CODE_PLACE_OBJECT3 = 70] = "CODE_PLACE_OBJECT3";
        b[b.CODE_REMOVE_OBJECT = 5] = "CODE_REMOVE_OBJECT";
        b[b.CODE_REMOVE_OBJECT2 = 28] = "CODE_REMOVE_OBJECT2";
        b[b.CODE_START_SOUND = 15] = "CODE_START_SOUND";
        b[b.CODE_START_SOUND2 = 89] = "CODE_START_SOUND2";
      })(g.ControlTags || (g.ControlTags = {}));
      (function(b) {
        b[b.Move = 1] = "Move";
        b[b.HasCharacter = 2] = "HasCharacter";
        b[b.HasMatrix = 4] = "HasMatrix";
        b[b.HasColorTransform = 8] = "HasColorTransform";
        b[b.HasRatio = 16] = "HasRatio";
        b[b.HasName = 32] = "HasName";
        b[b.HasClipDepth = 64] = "HasClipDepth";
        b[b.HasClipActions = 128] = "HasClipActions";
        b[b.HasFilterList = 256] = "HasFilterList";
        b[b.HasBlendMode = 512] = "HasBlendMode";
        b[b.HasCacheAsBitmap = 1024] = "HasCacheAsBitmap";
        b[b.HasClassName = 2048] = "HasClassName";
        b[b.HasImage = 4096] = "HasImage";
        b[b.HasVisible = 8192] = "HasVisible";
        b[b.OpaqueBackground = 16384] = "OpaqueBackground";
        b[b.Reserved = 32768] = "Reserved";
      })(g.PlaceObjectFlags || (g.PlaceObjectFlags = {}));
      (function(b) {
        b[b.Load = 1] = "Load";
        b[b.EnterFrame = 2] = "EnterFrame";
        b[b.Unload = 4] = "Unload";
        b[b.MouseMove = 8] = "MouseMove";
        b[b.MouseDown = 16] = "MouseDown";
        b[b.MouseUp = 32] = "MouseUp";
        b[b.KeyDown = 64] = "KeyDown";
        b[b.KeyUp = 128] = "KeyUp";
        b[b.Data = 256] = "Data";
        b[b.Initialize = 512] = "Initialize";
        b[b.Press = 1024] = "Press";
        b[b.Release = 2048] = "Release";
        b[b.ReleaseOutside = 4096] = "ReleaseOutside";
        b[b.RollOver = 8192] = "RollOver";
        b[b.RollOut = 16384] = "RollOut";
        b[b.DragOver = 32768] = "DragOver";
        b[b.DragOut = 65536] = "DragOut";
        b[b.KeyPress = 131072] = "KeyPress";
        b[b.Construct = 262144] = "Construct";
      })(g.AVM1ClipEvents || (g.AVM1ClipEvents = {}));
    })(k.Parser || (k.Parser = {}));
  })(k.SWF || (k.SWF = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  var p = k.Debug.unexpected, g = function() {
    function b(b, g, a, l) {
      this.url = b;
      this.method = g;
      this.mimeType = a;
      this.data = l;
    }
    b.prototype.readAll = function(b, g) {
      var a = this.url, l = this.xhr = new XMLHttpRequest({mozSystem:!0});
      l.open(this.method || "GET", this.url, !0);
      l.responseType = "arraybuffer";
      b && (l.onprogress = function(a) {
        b(l.response, a.loaded, a.total);
      });
      l.onreadystatechange = function(b) {
        4 === l.readyState && (200 !== l.status && 0 !== l.status || null === l.response ? (p("Path: " + a + " not found."), g(null, l.statusText)) : g(l.response));
      };
      this.mimeType && l.setRequestHeader("Content-Type", this.mimeType);
      l.send(this.data || null);
    };
    b.prototype.readChunked = function(b, g, a, l, q, h) {
      if (0 >= b) {
        this.readAsync(g, a, l, q, h);
      } else {
        var t = 0, r = new Uint8Array(b), m = 0, u;
        this.readAsync(function(a, f) {
          u = f.total;
          for (var e = a.length, c = 0;t + e >= b;) {
            var n = b - t;
            r.set(a.subarray(c, c + n), t);
            c += n;
            e -= n;
            m += b;
            g(r, {loaded:m, total:u});
            t = 0;
          }
          r.set(a.subarray(c), t);
          t += e;
        }, a, l, function() {
          0 < t && (m += t, g(r.subarray(0, t), {loaded:m, total:u}), t = 0);
          q && q();
        }, h);
      }
    };
    b.prototype.readAsync = function(b, g, a, l, q) {
      var h = this.xhr = new XMLHttpRequest({mozSystem:!0}), t = this.url, r = 0, m = 0;
      h.open(this.method || "GET", t, !0);
      h.responseType = "moz-chunked-arraybuffer";
      var u = "moz-chunked-arraybuffer" !== h.responseType;
      u && (h.responseType = "arraybuffer");
      h.onprogress = function(a) {
        u || (r = a.loaded, m = a.total, b(new Uint8Array(h.response), {loaded:r, total:m}));
      };
      h.onreadystatechange = function(a) {
        2 === h.readyState && q && q(t, h.status, h.getAllResponseHeaders());
        4 === h.readyState && (200 !== h.status && 0 !== h.status || null === h.response && (0 === m || r !== m) ? g(h.statusText) : (u && (a = h.response, b(new Uint8Array(a), {loaded:a.byteLength, total:a.byteLength})), l && l()));
      };
      this.mimeType && h.setRequestHeader("Content-Type", this.mimeType);
      h.send(this.data || null);
      a && a();
    };
    b.prototype.abort = function() {
      this.xhr && (this.xhr.abort(), this.xhr = null);
    };
    return b;
  }();
  k.BinaryFileReader = g;
})(Shumway || (Shumway = {}));
(function(k) {
  var p = function() {
    function g() {
      this.isAS3TraceOn = !0;
      this._startTime = Date.now();
    }
    Object.defineProperty(g.prototype, "currentTimestamp", {get:function() {
      return Date.now() - this._startTime;
    }, enumerable:!0, configurable:!0});
    g.prototype._writeLine = function(b) {
    };
    g.prototype.writeAS3Trace = function(b) {
    };
    return g;
  }();
  k.FlashLog = p;
  k.flashlog = null;
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    (function(g) {
      g[g.Objects = 0] = "Objects";
      g[g.References = 1] = "References";
    })(k.RemotingPhase || (k.RemotingPhase = {}));
    (function(g) {
      g[g.HasMatrix = 1] = "HasMatrix";
      g[g.HasBounds = 2] = "HasBounds";
      g[g.HasChildren = 4] = "HasChildren";
      g[g.HasColorTransform = 8] = "HasColorTransform";
      g[g.HasClipRect = 16] = "HasClipRect";
      g[g.HasMiscellaneousProperties = 32] = "HasMiscellaneousProperties";
      g[g.HasMask = 64] = "HasMask";
      g[g.HasClip = 128] = "HasClip";
    })(k.MessageBits || (k.MessageBits = {}));
    (function(g) {
      g[g.None = 0] = "None";
      g[g.Asset = 134217728] = "Asset";
    })(k.IDMask || (k.IDMask = {}));
    (function(g) {
      g[g.EOF = 0] = "EOF";
      g[g.UpdateFrame = 100] = "UpdateFrame";
      g[g.UpdateGraphics = 101] = "UpdateGraphics";
      g[g.UpdateBitmapData = 102] = "UpdateBitmapData";
      g[g.UpdateTextContent = 103] = "UpdateTextContent";
      g[g.UpdateStage = 104] = "UpdateStage";
      g[g.UpdateNetStream = 105] = "UpdateNetStream";
      g[g.RequestBitmapData = 106] = "RequestBitmapData";
      g[g.DrawToBitmap = 200] = "DrawToBitmap";
      g[g.MouseEvent = 300] = "MouseEvent";
      g[g.KeyboardEvent = 301] = "KeyboardEvent";
      g[g.FocusEvent = 302] = "FocusEvent";
    })(k.MessageTag || (k.MessageTag = {}));
    (function(g) {
      g[g.Blur = 0] = "Blur";
      g[g.DropShadow = 1] = "DropShadow";
      g[g.ColorMatrix = 2] = "ColorMatrix";
    })(k.FilterType || (k.FilterType = {}));
    (function(g) {
      g[g.Identity = 0] = "Identity";
      g[g.AlphaMultiplierOnly = 1] = "AlphaMultiplierOnly";
      g[g.All = 2] = "All";
    })(k.ColorTransformEncoding || (k.ColorTransformEncoding = {}));
    (function(g) {
      g[g.Initialized = 0] = "Initialized";
      g[g.Metadata = 1] = "Metadata";
      g[g.PlayStart = 2] = "PlayStart";
      g[g.PlayStop = 3] = "PlayStop";
      g[g.BufferEmpty = 4] = "BufferEmpty";
      g[g.BufferFull = 5] = "BufferFull";
      g[g.Pause = 6] = "Pause";
      g[g.Unpause = 7] = "Unpause";
      g[g.Seeking = 8] = "Seeking";
      g[g.Seeked = 9] = "Seeked";
      g[g.Progress = 10] = "Progress";
      g[g.Error = 11] = "Error";
    })(k.VideoPlaybackEvent || (k.VideoPlaybackEvent = {}));
    (function(g) {
      g[g.Init = 1] = "Init";
      g[g.Pause = 2] = "Pause";
      g[g.Seek = 3] = "Seek";
      g[g.GetTime = 4] = "GetTime";
      g[g.GetBufferLength = 5] = "GetBufferLength";
      g[g.SetSoundLevels = 6] = "SetSoundLevels";
      g[g.GetBytesLoaded = 7] = "GetBytesLoaded";
      g[g.GetBytesTotal = 8] = "GetBytesTotal";
      g[g.EnsurePlaying = 9] = "EnsurePlaying";
    })(k.VideoControlEvent || (k.VideoControlEvent = {}));
    (function(g) {
      g[g.ShowAll = 0] = "ShowAll";
      g[g.ExactFit = 1] = "ExactFit";
      g[g.NoBorder = 2] = "NoBorder";
      g[g.NoScale = 4] = "NoScale";
    })(k.StageScaleMode || (k.StageScaleMode = {}));
    (function(g) {
      g[g.None = 0] = "None";
      g[g.Top = 1] = "Top";
      g[g.Bottom = 2] = "Bottom";
      g[g.Left = 4] = "Left";
      g[g.Right = 8] = "Right";
      g[g.TopLeft = g.Top | g.Left] = "TopLeft";
      g[g.BottomLeft = g.Bottom | g.Left] = "BottomLeft";
      g[g.BottomRight = g.Bottom | g.Right] = "BottomRight";
      g[g.TopRight = g.Top | g.Right] = "TopRight";
    })(k.StageAlignFlags || (k.StageAlignFlags = {}));
    k.MouseEventNames = "click dblclick mousedown mousemove mouseup mouseover mouseout".split(" ");
    k.KeyboardEventNames = ["keydown", "keypress", "keyup"];
    (function(g) {
      g[g.CtrlKey = 1] = "CtrlKey";
      g[g.AltKey = 2] = "AltKey";
      g[g.ShiftKey = 4] = "ShiftKey";
    })(k.KeyboardEventFlags || (k.KeyboardEventFlags = {}));
    (function(g) {
      g[g.DocumentHidden = 0] = "DocumentHidden";
      g[g.DocumentVisible = 1] = "DocumentVisible";
      g[g.WindowBlur = 2] = "WindowBlur";
      g[g.WindowFocus = 3] = "WindowFocus";
    })(k.FocusEventType || (k.FocusEventType = {}));
  })(k.Remoting || (k.Remoting = {}));
})(Shumway || (Shumway = {}));
var throwError, Errors;
(function(k) {
  (function(k) {
    (function(g) {
      var b = function() {
        function b() {
        }
        b.toRGBA = function(a, l, b, h) {
          void 0 === h && (h = 1);
          return "rgba(" + a + "," + l + "," + b + "," + h + ")";
        };
        return b;
      }();
      g.UI = b;
      var k = function() {
        function g() {
        }
        g.prototype.tabToolbar = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(37, 44, 51, a);
        };
        g.prototype.toolbars = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(52, 60, 69, a);
        };
        g.prototype.selectionBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(29, 79, 115, a);
        };
        g.prototype.selectionText = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(245, 247, 250, a);
        };
        g.prototype.splitters = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(0, 0, 0, a);
        };
        g.prototype.bodyBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(17, 19, 21, a);
        };
        g.prototype.sidebarBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(24, 29, 32, a);
        };
        g.prototype.attentionBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(161, 134, 80, a);
        };
        g.prototype.bodyText = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(143, 161, 178, a);
        };
        g.prototype.foregroundTextGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(182, 186, 191, a);
        };
        g.prototype.contentTextHighContrast = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(169, 186, 203, a);
        };
        g.prototype.contentTextGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(143, 161, 178, a);
        };
        g.prototype.contentTextDarkGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(95, 115, 135, a);
        };
        g.prototype.blueHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(70, 175, 227, a);
        };
        g.prototype.purpleHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(107, 122, 187, a);
        };
        g.prototype.pinkHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(223, 128, 255, a);
        };
        g.prototype.redHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(235, 83, 104, a);
        };
        g.prototype.orangeHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(217, 102, 41, a);
        };
        g.prototype.lightOrangeHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(217, 155, 40, a);
        };
        g.prototype.greenHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(112, 191, 83, a);
        };
        g.prototype.blueGreyHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(94, 136, 176, a);
        };
        return g;
      }();
      g.UIThemeDark = k;
      k = function() {
        function g() {
        }
        g.prototype.tabToolbar = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(235, 236, 237, a);
        };
        g.prototype.toolbars = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(240, 241, 242, a);
        };
        g.prototype.selectionBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(76, 158, 217, a);
        };
        g.prototype.selectionText = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(245, 247, 250, a);
        };
        g.prototype.splitters = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(170, 170, 170, a);
        };
        g.prototype.bodyBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(252, 252, 252, a);
        };
        g.prototype.sidebarBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(247, 247, 247, a);
        };
        g.prototype.attentionBackground = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(161, 134, 80, a);
        };
        g.prototype.bodyText = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(24, 25, 26, a);
        };
        g.prototype.foregroundTextGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(88, 89, 89, a);
        };
        g.prototype.contentTextHighContrast = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(41, 46, 51, a);
        };
        g.prototype.contentTextGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(143, 161, 178, a);
        };
        g.prototype.contentTextDarkGrey = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(102, 115, 128, a);
        };
        g.prototype.blueHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(0, 136, 204, a);
        };
        g.prototype.purpleHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(91, 95, 255, a);
        };
        g.prototype.pinkHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(184, 46, 229, a);
        };
        g.prototype.redHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(237, 38, 85, a);
        };
        g.prototype.orangeHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(241, 60, 0, a);
        };
        g.prototype.lightOrangeHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(217, 126, 0, a);
        };
        g.prototype.greenHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(44, 187, 15, a);
        };
        g.prototype.blueGreyHighlight = function(a) {
          void 0 === a && (a = 1);
          return b.toRGBA(95, 136, 176, a);
        };
        return g;
      }();
      g.UIThemeLight = k;
    })(k.Theme || (k.Theme = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    (function(g) {
      var b = function() {
        function b(g, a) {
          this._buffers = g || [];
          this._snapshots = [];
          this._windowStart = this._startTime = a;
          this._maxDepth = 0;
        }
        b.prototype.addBuffer = function(b) {
          this._buffers.push(b);
        };
        b.prototype.getSnapshotAt = function(b) {
          return this._snapshots[b];
        };
        Object.defineProperty(b.prototype, "hasSnapshots", {get:function() {
          return 0 < this.snapshotCount;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(b.prototype, "snapshotCount", {get:function() {
          return this._snapshots.length;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(b.prototype, "startTime", {get:function() {
          return this._startTime;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(b.prototype, "endTime", {get:function() {
          return this._endTime;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(b.prototype, "totalTime", {get:function() {
          return this.endTime - this.startTime;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(b.prototype, "windowStart", {get:function() {
          return this._windowStart;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(b.prototype, "windowEnd", {get:function() {
          return this._windowEnd;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(b.prototype, "windowLength", {get:function() {
          return this.windowEnd - this.windowStart;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(b.prototype, "maxDepth", {get:function() {
          return this._maxDepth;
        }, enumerable:!0, configurable:!0});
        b.prototype.forEachSnapshot = function(b) {
          for (var a = 0, l = this.snapshotCount;a < l;a++) {
            b(this._snapshots[a], a);
          }
        };
        b.prototype.createSnapshots = function() {
          var b = Number.MIN_VALUE, a = 0;
          for (this._snapshots = [];0 < this._buffers.length;) {
            var l = this._buffers.shift().createSnapshot();
            l && (b < l.endTime && (b = l.endTime), a < l.maxDepth && (a = l.maxDepth), this._snapshots.push(l));
          }
          this._windowEnd = this._endTime = b;
          this._maxDepth = a;
        };
        b.prototype.setWindow = function(b, a) {
          if (b > a) {
            var l = b;
            b = a;
            a = l;
          }
          l = Math.min(a - b, this.totalTime);
          b < this._startTime ? (b = this._startTime, a = this._startTime + l) : a > this._endTime && (b = this._endTime - l, a = this._endTime);
          this._windowStart = b;
          this._windowEnd = a;
        };
        b.prototype.moveWindowTo = function(b) {
          this.setWindow(b - this.windowLength / 2, b + this.windowLength / 2);
        };
        return b;
      }();
      g.Profile = b;
    })(k.Profiler || (k.Profiler = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(k, p) {
  function g() {
    this.constructor = k;
  }
  for (var b in p) {
    p.hasOwnProperty(b) && (k[b] = p[b]);
  }
  g.prototype = p.prototype;
  k.prototype = new g;
};
(function(k) {
  (function(k) {
    (function(g) {
      var b = function() {
        return function(b) {
          this.kind = b;
          this.totalTime = this.selfTime = this.count = 0;
        };
      }();
      g.TimelineFrameStatistics = b;
      var k = function() {
        function g(a, l, b, h, t, r) {
          this.parent = a;
          this.kind = l;
          this.startData = b;
          this.endData = h;
          this.startTime = t;
          this.endTime = r;
          this.maxDepth = 0;
        }
        Object.defineProperty(g.prototype, "totalTime", {get:function() {
          return this.endTime - this.startTime;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(g.prototype, "selfTime", {get:function() {
          var a = this.totalTime;
          if (this.children) {
            for (var l = 0, b = this.children.length;l < b;l++) {
              var h = this.children[l], a = a - (h.endTime - h.startTime)
            }
          }
          return a;
        }, enumerable:!0, configurable:!0});
        g.prototype.getChildIndex = function(a) {
          for (var l = this.children, b = 0;b < l.length;b++) {
            if (l[b].endTime > a) {
              return b;
            }
          }
          return 0;
        };
        g.prototype.getChildRange = function(a, l) {
          if (this.children && a <= this.endTime && l >= this.startTime && l >= a) {
            var b = this._getNearestChild(a), h = this._getNearestChildReverse(l);
            if (b <= h) {
              return a = this.children[b].startTime, l = this.children[h].endTime, {startIndex:b, endIndex:h, startTime:a, endTime:l, totalTime:l - a};
            }
          }
          return null;
        };
        g.prototype._getNearestChild = function(a) {
          var l = this.children;
          if (l && l.length) {
            if (a <= l[0].endTime) {
              return 0;
            }
            for (var b, h = 0, t = l.length - 1;t > h;) {
              b = (h + t) / 2 | 0;
              var r = l[b];
              if (a >= r.startTime && a <= r.endTime) {
                return b;
              }
              a > r.endTime ? h = b + 1 : t = b;
            }
            return Math.ceil((h + t) / 2);
          }
          return 0;
        };
        g.prototype._getNearestChildReverse = function(a) {
          var l = this.children;
          if (l && l.length) {
            var b = l.length - 1;
            if (a >= l[b].startTime) {
              return b;
            }
            for (var h, t = 0;b > t;) {
              h = Math.ceil((t + b) / 2);
              var r = l[h];
              if (a >= r.startTime && a <= r.endTime) {
                return h;
              }
              a > r.endTime ? t = h : b = h - 1;
            }
            return (t + b) / 2 | 0;
          }
          return 0;
        };
        g.prototype.query = function(a) {
          if (a < this.startTime || a > this.endTime) {
            return null;
          }
          var l = this.children;
          if (l && 0 < l.length) {
            for (var b, h = 0, t = l.length - 1;t > h;) {
              var r = (h + t) / 2 | 0;
              b = l[r];
              if (a >= b.startTime && a <= b.endTime) {
                return b.query(a);
              }
              a > b.endTime ? h = r + 1 : t = r;
            }
            b = l[t];
            if (a >= b.startTime && a <= b.endTime) {
              return b.query(a);
            }
          }
          return this;
        };
        g.prototype.queryNext = function(a) {
          for (var l = this;a > l.endTime;) {
            if (l.parent) {
              l = l.parent;
            } else {
              break;
            }
          }
          return l.query(a);
        };
        g.prototype.getDepth = function() {
          for (var a = 0, l = this;l;) {
            a++, l = l.parent;
          }
          return a;
        };
        g.prototype.calculateStatistics = function() {
          function a(q) {
            if (q.kind) {
              var h = l[q.kind.id] || (l[q.kind.id] = new b(q.kind));
              h.count++;
              h.selfTime += q.selfTime;
              h.totalTime += q.totalTime;
            }
            q.children && q.children.forEach(a);
          }
          var l = this.statistics = [];
          a(this);
        };
        g.prototype.trace = function(a) {
          var l = (this.kind ? this.kind.name + ": " : "Profile: ") + (this.endTime - this.startTime).toFixed(2);
          if (this.children && this.children.length) {
            a.enter(l);
            for (l = 0;l < this.children.length;l++) {
              this.children[l].trace(a);
            }
            a.outdent();
          } else {
            a.writeLn(l);
          }
        };
        return g;
      }();
      g.TimelineFrame = k;
      k = function(b) {
        function a(a) {
          b.call(this, null, null, null, null, NaN, NaN);
          this.name = a;
        }
        __extends(a, b);
        return a;
      }(k);
      g.TimelineBufferSnapshot = k;
    })(k.Profiler || (k.Profiler = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(p) {
    (function(g) {
      var b = function() {
        function b(g, a) {
          void 0 === g && (g = "");
          this.name = g || "";
          this._startTime = k.isNullOrUndefined(a) ? jsGlobal.START_TIME : a;
        }
        b.prototype.getKind = function(b) {
          return this._kinds[b];
        };
        Object.defineProperty(b.prototype, "kinds", {get:function() {
          return this._kinds.concat();
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(b.prototype, "depth", {get:function() {
          return this._depth;
        }, enumerable:!0, configurable:!0});
        b.prototype._initialize = function() {
          this._depth = 0;
          this._stack = [];
          this._data = [];
          this._kinds = [];
          this._kindNameMap = Object.create(null);
          this._marks = new k.CircularBuffer(Int32Array, 20);
          this._times = new k.CircularBuffer(Float64Array, 20);
        };
        b.prototype._getKindId = function(g) {
          var a = b.MAX_KINDID;
          if (void 0 === this._kindNameMap[g]) {
            if (a = this._kinds.length, a < b.MAX_KINDID) {
              var l = {id:a, name:g, visible:!0};
              this._kinds.push(l);
              this._kindNameMap[g] = l;
            } else {
              a = b.MAX_KINDID;
            }
          } else {
            a = this._kindNameMap[g].id;
          }
          return a;
        };
        b.prototype._getMark = function(g, a, l) {
          var q = b.MAX_DATAID;
          k.isNullOrUndefined(l) || a === b.MAX_KINDID || (q = this._data.length, q < b.MAX_DATAID ? this._data.push(l) : q = b.MAX_DATAID);
          return g | q << 16 | a;
        };
        b.prototype.enter = function(g, a, l) {
          l = (k.isNullOrUndefined(l) ? performance.now() : l) - this._startTime;
          this._marks || this._initialize();
          this._depth++;
          g = this._getKindId(g);
          this._marks.write(this._getMark(b.ENTER, g, a));
          this._times.write(l);
          this._stack.push(g);
        };
        b.prototype.leave = function(g, a, l) {
          l = (k.isNullOrUndefined(l) ? performance.now() : l) - this._startTime;
          var q = this._stack.pop();
          g && (q = this._getKindId(g));
          this._marks.write(this._getMark(b.LEAVE, q, a));
          this._times.write(l);
          this._depth--;
        };
        b.prototype.count = function(b, a, l) {
        };
        b.prototype.createSnapshot = function() {
          var v;
          void 0 === v && (v = Number.MAX_VALUE);
          if (!this._marks) {
            return null;
          }
          var a = this._times, l = this._kinds, q = this._data, h = new g.TimelineBufferSnapshot(this.name), t = [h], r = 0;
          this._marks || this._initialize();
          this._marks.forEachInReverse(function(h, u) {
            var d = q[h >>> 16 & b.MAX_DATAID], f = l[h & b.MAX_KINDID];
            if (k.isNullOrUndefined(f) || f.visible) {
              var e = h & 2147483648, c = a.get(u), n = t.length;
              if (e === b.LEAVE) {
                if (1 === n && (r++, r > v)) {
                  return !0;
                }
                t.push(new g.TimelineFrame(t[n - 1], f, null, d, NaN, c));
              } else {
                if (e === b.ENTER) {
                  if (f = t.pop(), e = t[t.length - 1]) {
                    for (e.children ? e.children.unshift(f) : e.children = [f], e = t.length, f.depth = e, f.startData = d, f.startTime = c;f;) {
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
          h.children && h.children.length && (h.startTime = h.children[0].startTime, h.endTime = h.children[h.children.length - 1].endTime);
          return h;
        };
        b.prototype.reset = function(b) {
          this._startTime = k.isNullOrUndefined(b) ? performance.now() : b;
          this._marks ? (this._depth = 0, this._data = [], this._marks.reset(), this._times.reset()) : this._initialize();
        };
        b.FromFirefoxProfile = function(g, a) {
          for (var l = g.profile.threads[0].samples, q = new b(a, l[0].time), h = [], t, r = 0;r < l.length;r++) {
            t = l[r];
            var m = t.time, u = t.frames, d = 0;
            for (t = Math.min(u.length, h.length);d < t && u[d].location === h[d].location;) {
              d++;
            }
            for (var f = h.length - d, e = 0;e < f;e++) {
              t = h.pop(), q.leave(t.location, null, m);
            }
            for (;d < u.length;) {
              t = u[d++], q.enter(t.location, null, m);
            }
            h = u;
          }
          for (;t = h.pop();) {
            q.leave(t.location, null, m);
          }
          return q;
        };
        b.FromChromeProfile = function(g, a) {
          var l = g.timestamps, q = g.samples, h = new b(a, l[0] / 1E3), t = [], r = {}, m;
          b._resolveIds(g.head, r);
          for (var u = 0;u < l.length;u++) {
            var d = l[u] / 1E3, f = [];
            for (m = r[q[u]];m;) {
              f.unshift(m), m = m.parent;
            }
            var e = 0;
            for (m = Math.min(f.length, t.length);e < m && f[e] === t[e];) {
              e++;
            }
            for (var c = t.length - e, n = 0;n < c;n++) {
              m = t.pop(), h.leave(m.functionName, null, d);
            }
            for (;e < f.length;) {
              m = f[e++], h.enter(m.functionName, null, d);
            }
            t = f;
          }
          for (;m = t.pop();) {
            h.leave(m.functionName, null, d);
          }
          return h;
        };
        b._resolveIds = function(g, a) {
          a[g.id] = g;
          if (g.children) {
            for (var l = 0;l < g.children.length;l++) {
              g.children[l].parent = g, b._resolveIds(g.children[l], a);
            }
          }
        };
        b.ENTER = 0;
        b.LEAVE = -2147483648;
        b.MAX_KINDID = 65535;
        b.MAX_DATAID = 32767;
        return b;
      }();
      g.TimelineBuffer = b;
    })(p.Profiler || (p.Profiler = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(p) {
    (function(g) {
      (function(b) {
        b[b.DARK = 0] = "DARK";
        b[b.LIGHT = 1] = "LIGHT";
      })(g.UIThemeType || (g.UIThemeType = {}));
      var b = function() {
        function b(g, a) {
          void 0 === a && (a = 0);
          this._container = g;
          this._headers = [];
          this._charts = [];
          this._profiles = [];
          this._activeProfile = null;
          this.themeType = a;
          this._tooltip = this._createTooltip();
        }
        b.prototype.createProfile = function(b, a) {
          var l = new g.Profile(b, a);
          l.createSnapshots();
          this._profiles.push(l);
          this.activateProfile(l);
          return l;
        };
        b.prototype.activateProfile = function(b) {
          this.deactivateProfile();
          this._activeProfile = b;
          this._createViews();
          this._initializeViews();
        };
        b.prototype.activateProfileAt = function(b) {
          this.activateProfile(this.getProfileAt(b));
        };
        b.prototype.deactivateProfile = function() {
          this._activeProfile && (this._destroyViews(), this._activeProfile = null);
        };
        b.prototype.resize = function() {
          this._onResize();
        };
        b.prototype.getProfileAt = function(b) {
          return this._profiles[b];
        };
        Object.defineProperty(b.prototype, "activeProfile", {get:function() {
          return this._activeProfile;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(b.prototype, "profileCount", {get:function() {
          return this._profiles.length;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(b.prototype, "container", {get:function() {
          return this._container;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(b.prototype, "themeType", {get:function() {
          return this._themeType;
        }, set:function(b) {
          switch(b) {
            case 0:
              this._theme = new p.Theme.UIThemeDark;
              break;
            case 1:
              this._theme = new p.Theme.UIThemeLight;
          }
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(b.prototype, "theme", {get:function() {
          return this._theme;
        }, enumerable:!0, configurable:!0});
        b.prototype.getSnapshotAt = function(b) {
          return this._activeProfile.getSnapshotAt(b);
        };
        b.prototype._createViews = function() {
          if (this._activeProfile) {
            var b = this;
            this._overviewHeader = new g.FlameChartHeader(this, 0);
            this._overview = new g.FlameChartOverview(this, 0);
            this._activeProfile.forEachSnapshot(function(a, l) {
              b._headers.push(new g.FlameChartHeader(b, 1));
              b._charts.push(new g.FlameChart(b, a));
            });
            window.addEventListener("resize", this._onResize.bind(this));
          }
        };
        b.prototype._destroyViews = function() {
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
        b.prototype._initializeViews = function() {
          if (this._activeProfile) {
            var b = this, a = this._activeProfile.startTime, l = this._activeProfile.endTime;
            this._overviewHeader.initialize(a, l);
            this._overview.initialize(a, l);
            this._activeProfile.forEachSnapshot(function(q, h) {
              b._headers[h].initialize(a, l);
              b._charts[h].initialize(a, l);
            });
          }
        };
        b.prototype._onResize = function() {
          if (this._activeProfile) {
            var b = this, a = this._container.offsetWidth;
            this._overviewHeader.setSize(a);
            this._overview.setSize(a);
            this._activeProfile.forEachSnapshot(function(l, q) {
              b._headers[q].setSize(a);
              b._charts[q].setSize(a);
            });
          }
        };
        b.prototype._updateViews = function() {
          if (this._activeProfile) {
            var b = this, a = this._activeProfile.windowStart, l = this._activeProfile.windowEnd;
            this._overviewHeader.setWindow(a, l);
            this._overview.setWindow(a, l);
            this._activeProfile.forEachSnapshot(function(q, h) {
              b._headers[h].setWindow(a, l);
              b._charts[h].setWindow(a, l);
            });
          }
        };
        b.prototype._drawViews = function() {
        };
        b.prototype._createTooltip = function() {
          var b = document.createElement("div");
          b.classList.add("profiler-tooltip");
          b.style.display = "none";
          this._container.insertBefore(b, this._container.firstChild);
          return b;
        };
        b.prototype.setWindow = function(b, a) {
          this._activeProfile.setWindow(b, a);
          this._updateViews();
        };
        b.prototype.moveWindowTo = function(b) {
          this._activeProfile.moveWindowTo(b);
          this._updateViews();
        };
        b.prototype.showTooltip = function(b, a, l, q) {
          this.removeTooltipContent();
          this._tooltip.appendChild(this.createTooltipContent(b, a));
          this._tooltip.style.display = "block";
          var h = this._tooltip.firstChild;
          a = h.clientWidth;
          h = h.clientHeight;
          l += l + a >= b.canvas.clientWidth - 50 ? -(a + 20) : 25;
          q += b.canvas.offsetTop - h / 2;
          this._tooltip.style.left = l + "px";
          this._tooltip.style.top = q + "px";
        };
        b.prototype.hideTooltip = function() {
          this._tooltip.style.display = "none";
        };
        b.prototype.createTooltipContent = function(b, a) {
          var l = Math.round(1E5 * a.totalTime) / 1E5, q = Math.round(1E5 * a.selfTime) / 1E5, h = Math.round(1E4 * a.selfTime / a.totalTime) / 100, g = document.createElement("div"), r = document.createElement("h1");
          r.textContent = a.kind.name;
          g.appendChild(r);
          r = document.createElement("p");
          r.textContent = "Total: " + l + " ms";
          g.appendChild(r);
          l = document.createElement("p");
          l.textContent = "Self: " + q + " ms (" + h + "%)";
          g.appendChild(l);
          if (q = b.getStatistics(a.kind)) {
            h = document.createElement("p"), h.textContent = "Count: " + q.count, g.appendChild(h), h = document.createElement("p"), h.textContent = "All Total: " + Math.round(1E5 * q.totalTime) / 1E5 + " ms", g.appendChild(h), h = document.createElement("p"), h.textContent = "All Self: " + Math.round(1E5 * q.selfTime) / 1E5 + " ms", g.appendChild(h);
          }
          this.appendDataElements(g, a.startData);
          this.appendDataElements(g, a.endData);
          return g;
        };
        b.prototype.appendDataElements = function(b, a) {
          if (!k.isNullOrUndefined(a)) {
            b.appendChild(document.createElement("hr"));
            var l;
            if (k.isObject(a)) {
              for (var g in a) {
                l = document.createElement("p"), l.textContent = g + ": " + a[g], b.appendChild(l);
              }
            } else {
              l = document.createElement("p"), l.textContent = a.toString(), b.appendChild(l);
            }
          }
        };
        b.prototype.removeTooltipContent = function() {
          for (var b = this._tooltip;b.firstChild;) {
            b.removeChild(b.firstChild);
          }
        };
        return b;
      }();
      g.Controller = b;
    })(p.Profiler || (p.Profiler = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(p) {
    (function(g) {
      var b = k.NumberUtilities.clamp, p = function() {
        function a(a) {
          this.value = a;
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
      g.MouseCursor = p;
      var v = function() {
        function a(a, b) {
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
        a.prototype.destroy = function() {
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
        a.prototype.updateCursor = function(b) {
          if (!a._cursorOwner || a._cursorOwner === this._target) {
            var g = this._eventTarget.parentElement;
            a._cursor !== b && (a._cursor = b, ["", "-moz-", "-webkit-"].forEach(function(a) {
              g.style.cursor = a + b;
            }));
            a._cursorOwner = a._cursor === p.DEFAULT ? null : this._target;
          }
        };
        a.prototype._onMouseDown = function(a) {
          this._killHoverCheck();
          if (0 === a.button) {
            var b = this._getTargetMousePos(a, a.target);
            this._dragInfo = {start:b, current:b, delta:{x:0, y:0}, hasMoved:!1, originalTarget:a.target};
            window.addEventListener("mousemove", this._boundOnDrag, !1);
            window.addEventListener("mouseup", this._boundOnMouseUp, !1);
            this._target.onMouseDown(b.x, b.y);
          }
        };
        a.prototype._onDrag = function(a) {
          var b = this._dragInfo;
          a = this._getTargetMousePos(a, b.originalTarget);
          var h = {x:a.x - b.start.x, y:a.y - b.start.y};
          b.current = a;
          b.delta = h;
          b.hasMoved = !0;
          this._target.onDrag(b.start.x, b.start.y, a.x, a.y, h.x, h.y);
        };
        a.prototype._onMouseUp = function(a) {
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
        a.prototype._onMouseOver = function(a) {
          a.target.addEventListener("mousemove", this._boundOnMouseMove, !1);
          if (!this._dragInfo) {
            var b = this._getTargetMousePos(a, a.target);
            this._target.onMouseOver(b.x, b.y);
            this._startHoverCheck(a);
          }
        };
        a.prototype._onMouseOut = function(a) {
          a.target.removeEventListener("mousemove", this._boundOnMouseMove, !1);
          if (!this._dragInfo) {
            this._target.onMouseOut();
          }
          this._killHoverCheck();
        };
        a.prototype._onMouseMove = function(a) {
          if (!this._dragInfo) {
            var b = this._getTargetMousePos(a, a.target);
            this._target.onMouseMove(b.x, b.y);
            this._killHoverCheck();
            this._startHoverCheck(a);
          }
        };
        a.prototype._onMouseWheel = function(a) {
          if (!(a.altKey || a.metaKey || a.ctrlKey || a.shiftKey || (a.preventDefault(), this._dragInfo || this._wheelDisabled))) {
            var g = this._getTargetMousePos(a, a.target);
            a = b("undefined" !== typeof a.deltaY ? a.deltaY / 16 : -a.wheelDelta / 40, -1, 1);
            this._target.onMouseWheel(g.x, g.y, Math.pow(1.2, a) - 1);
          }
        };
        a.prototype._startHoverCheck = function(b) {
          this._hoverInfo = {isHovering:!1, timeoutHandle:setTimeout(this._onMouseMoveIdleHandler.bind(this), a.HOVER_TIMEOUT), pos:this._getTargetMousePos(b, b.target)};
        };
        a.prototype._killHoverCheck = function() {
          if (this._hoverInfo) {
            clearTimeout(this._hoverInfo.timeoutHandle);
            if (this._hoverInfo.isHovering) {
              this._target.onHoverEnd();
            }
            this._hoverInfo = null;
          }
        };
        a.prototype._onMouseMoveIdleHandler = function() {
          var a = this._hoverInfo;
          a.isHovering = !0;
          this._target.onHoverStart(a.pos.x, a.pos.y);
        };
        a.prototype._getTargetMousePos = function(a, b) {
          var h = b.getBoundingClientRect();
          return {x:a.clientX - h.left, y:a.clientY - h.top};
        };
        a.HOVER_TIMEOUT = 500;
        a._cursor = p.DEFAULT;
        return a;
      }();
      g.MouseController = v;
    })(p.Profiler || (p.Profiler = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    (function(g) {
      (function(b) {
        b[b.NONE = 0] = "NONE";
        b[b.WINDOW = 1] = "WINDOW";
        b[b.HANDLE_LEFT = 2] = "HANDLE_LEFT";
        b[b.HANDLE_RIGHT = 3] = "HANDLE_RIGHT";
        b[b.HANDLE_BOTH = 4] = "HANDLE_BOTH";
      })(g.FlameChartDragTarget || (g.FlameChartDragTarget = {}));
      var b = function() {
        function b(k) {
          this._controller = k;
          this._initialized = !1;
          this._canvas = document.createElement("canvas");
          this._context = this._canvas.getContext("2d");
          this._mouseController = new g.MouseController(this, this._canvas);
          k = k.container;
          k.appendChild(this._canvas);
          k = k.getBoundingClientRect();
          this.setSize(k.width);
        }
        Object.defineProperty(b.prototype, "canvas", {get:function() {
          return this._canvas;
        }, enumerable:!0, configurable:!0});
        b.prototype.setSize = function(b, a) {
          void 0 === a && (a = 20);
          this._width = b;
          this._height = a;
          this._resetCanvas();
          this.draw();
        };
        b.prototype.initialize = function(b, a) {
          this._initialized = !0;
          this.setRange(b, a);
          this.setWindow(b, a, !1);
          this.draw();
        };
        b.prototype.setWindow = function(b, a, l) {
          void 0 === l && (l = !0);
          this._windowStart = b;
          this._windowEnd = a;
          !l || this.draw();
        };
        b.prototype.setRange = function(b, a) {
          var l = !1;
          void 0 === l && (l = !0);
          this._rangeStart = b;
          this._rangeEnd = a;
          !l || this.draw();
        };
        b.prototype.destroy = function() {
          this._mouseController.destroy();
          this._mouseController = null;
          this._controller.container.removeChild(this._canvas);
          this._controller = null;
        };
        b.prototype._resetCanvas = function() {
          var b = window.devicePixelRatio, a = this._canvas;
          a.width = this._width * b;
          a.height = this._height * b;
          a.style.width = this._width + "px";
          a.style.height = this._height + "px";
        };
        b.prototype.draw = function() {
        };
        b.prototype._almostEq = function(b, a) {
          var l;
          void 0 === l && (l = 10);
          return Math.abs(b - a) < 1 / Math.pow(10, l);
        };
        b.prototype._windowEqRange = function() {
          return this._almostEq(this._windowStart, this._rangeStart) && this._almostEq(this._windowEnd, this._rangeEnd);
        };
        b.prototype._decimalPlaces = function(b) {
          return (+b).toFixed(10).replace(/^-?\d*\.?|0+$/g, "").length;
        };
        b.prototype._toPixelsRelative = function(b) {
          return 0;
        };
        b.prototype._toPixels = function(b) {
          return 0;
        };
        b.prototype._toTimeRelative = function(b) {
          return 0;
        };
        b.prototype._toTime = function(b) {
          return 0;
        };
        b.prototype.onMouseWheel = function(g, a, l) {
          g = this._toTime(g);
          a = this._windowStart;
          var q = this._windowEnd, h = q - a;
          l = Math.max((b.MIN_WINDOW_LEN - h) / h, l);
          this._controller.setWindow(a + (a - g) * l, q + (q - g) * l);
          this.onHoverEnd();
        };
        b.prototype.onMouseDown = function(b, a) {
        };
        b.prototype.onMouseMove = function(b, a) {
        };
        b.prototype.onMouseOver = function(b, a) {
        };
        b.prototype.onMouseOut = function() {
        };
        b.prototype.onDrag = function(b, a, l, g, h, t) {
        };
        b.prototype.onDragEnd = function(b, a, l, g, h, t) {
        };
        b.prototype.onClick = function(b, a) {
        };
        b.prototype.onHoverStart = function(b, a) {
        };
        b.prototype.onHoverEnd = function() {
        };
        b.DRAGHANDLE_WIDTH = 4;
        b.MIN_WINDOW_LEN = .1;
        return b;
      }();
      g.FlameChartBase = b;
    })(k.Profiler || (k.Profiler = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(p) {
    (function(g) {
      var b = k.StringUtilities.trimMiddle, p = function(p) {
        function a(a, b) {
          p.call(this, a);
          this._textWidth = {};
          this._minFrameWidthInPixels = 1;
          this._snapshot = b;
          this._kindStyle = Object.create(null);
        }
        __extends(a, p);
        a.prototype.setSize = function(a, b) {
          p.prototype.setSize.call(this, a, b || this._initialized ? 12.5 * this._maxDepth : 100);
        };
        a.prototype.initialize = function(a, b) {
          this._initialized = !0;
          this._maxDepth = this._snapshot.maxDepth;
          this.setRange(a, b);
          this.setWindow(a, b, !1);
          this.setSize(this._width, 12.5 * this._maxDepth);
        };
        a.prototype.destroy = function() {
          p.prototype.destroy.call(this);
          this._snapshot = null;
        };
        a.prototype.draw = function() {
          var a = this._context, b = window.devicePixelRatio;
          k.ColorStyle.reset();
          a.save();
          a.scale(b, b);
          a.fillStyle = this._controller.theme.bodyBackground(1);
          a.fillRect(0, 0, this._width, this._height);
          this._initialized && this._drawChildren(this._snapshot);
          a.restore();
        };
        a.prototype._drawChildren = function(a, b) {
          void 0 === b && (b = 0);
          var h = a.getChildRange(this._windowStart, this._windowEnd);
          if (h) {
            for (var g = h.startIndex;g <= h.endIndex;g++) {
              var r = a.children[g];
              this._drawFrame(r, b) && this._drawChildren(r, b + 1);
            }
          }
        };
        a.prototype._drawFrame = function(a, b) {
          var h = this._context, g = this._toPixels(a.startTime), r = this._toPixels(a.endTime), m = r - g;
          if (m <= this._minFrameWidthInPixels) {
            return h.fillStyle = this._controller.theme.tabToolbar(1), h.fillRect(g, 12.5 * b, this._minFrameWidthInPixels, 12 + 12.5 * (a.maxDepth - a.depth)), !1;
          }
          0 > g && (r = m + g, g = 0);
          var r = r - g, u = this._kindStyle[a.kind.id];
          u || (u = k.ColorStyle.randomStyle(), u = this._kindStyle[a.kind.id] = {bgColor:u, textColor:k.ColorStyle.contrastStyle(u)});
          h.save();
          h.fillStyle = u.bgColor;
          h.fillRect(g, 12.5 * b, r, 12);
          12 < m && (m = a.kind.name) && m.length && (m = this._prepareText(h, m, r - 4), m.length && (h.fillStyle = u.textColor, h.textBaseline = "bottom", h.fillText(m, g + 2, 12.5 * (b + 1) - 1)));
          h.restore();
          return !0;
        };
        a.prototype._prepareText = function(a, g, h) {
          var t = this._measureWidth(a, g);
          if (h > t) {
            return g;
          }
          for (var t = 3, r = g.length;t < r;) {
            var m = t + r >> 1;
            this._measureWidth(a, b(g, m)) < h ? t = m + 1 : r = m;
          }
          g = b(g, r - 1);
          t = this._measureWidth(a, g);
          return t <= h ? g : "";
        };
        a.prototype._measureWidth = function(a, b) {
          var h = this._textWidth[b];
          h || (h = a.measureText(b).width, this._textWidth[b] = h);
          return h;
        };
        a.prototype._toPixelsRelative = function(a) {
          return a * this._width / (this._windowEnd - this._windowStart);
        };
        a.prototype._toPixels = function(a) {
          return this._toPixelsRelative(a - this._windowStart);
        };
        a.prototype._toTimeRelative = function(a) {
          return a * (this._windowEnd - this._windowStart) / this._width;
        };
        a.prototype._toTime = function(a) {
          return this._toTimeRelative(a) + this._windowStart;
        };
        a.prototype._getFrameAtPosition = function(a, b) {
          var h = 1 + b / 12.5 | 0, g = this._snapshot.query(this._toTime(a));
          if (g && g.depth >= h) {
            for (;g && g.depth > h;) {
              g = g.parent;
            }
            return g;
          }
          return null;
        };
        a.prototype.onMouseDown = function(a, b) {
          this._windowEqRange() || (this._mouseController.updateCursor(g.MouseCursor.ALL_SCROLL), this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:1});
        };
        a.prototype.onMouseMove = function(a, b) {
        };
        a.prototype.onMouseOver = function(a, b) {
        };
        a.prototype.onMouseOut = function() {
        };
        a.prototype.onDrag = function(a, b, h, g, r, m) {
          if (a = this._dragInfo) {
            r = this._toTimeRelative(-r), this._controller.setWindow(a.windowStartInitial + r, a.windowEndInitial + r);
          }
        };
        a.prototype.onDragEnd = function(a, b, h, t, r, m) {
          this._dragInfo = null;
          this._mouseController.updateCursor(g.MouseCursor.DEFAULT);
        };
        a.prototype.onClick = function(a, b) {
          this._dragInfo = null;
          this._mouseController.updateCursor(g.MouseCursor.DEFAULT);
        };
        a.prototype.onHoverStart = function(a, b) {
          var h = this._getFrameAtPosition(a, b);
          h && (this._hoveredFrame = h, this._controller.showTooltip(this, h, a, b));
        };
        a.prototype.onHoverEnd = function() {
          this._hoveredFrame && (this._hoveredFrame = null, this._controller.hideTooltip());
        };
        a.prototype.getStatistics = function(a) {
          var b = this._snapshot;
          b.statistics || b.calculateStatistics();
          return b.statistics[a.id];
        };
        return a;
      }(g.FlameChartBase);
      g.FlameChart = p;
    })(p.Profiler || (p.Profiler = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(p) {
    (function(g) {
      var b = k.NumberUtilities.clamp;
      (function(b) {
        b[b.OVERLAY = 0] = "OVERLAY";
        b[b.STACK = 1] = "STACK";
        b[b.UNION = 2] = "UNION";
      })(g.FlameChartOverviewMode || (g.FlameChartOverviewMode = {}));
      var p = function(k) {
        function a(a, b) {
          void 0 === b && (b = 1);
          this._mode = b;
          this._overviewCanvasDirty = !0;
          this._overviewCanvas = document.createElement("canvas");
          this._overviewContext = this._overviewCanvas.getContext("2d");
          k.call(this, a);
        }
        __extends(a, k);
        a.prototype.setSize = function(a, b) {
          k.prototype.setSize.call(this, a, b || 64);
        };
        Object.defineProperty(a.prototype, "mode", {set:function(a) {
          this._mode = a;
          this.draw();
        }, enumerable:!0, configurable:!0});
        a.prototype._resetCanvas = function() {
          k.prototype._resetCanvas.call(this);
          this._overviewCanvas.width = this._canvas.width;
          this._overviewCanvas.height = this._canvas.height;
          this._overviewCanvasDirty = !0;
        };
        a.prototype.draw = function() {
          var a = this._context, b = window.devicePixelRatio, h = this._width, g = this._height;
          a.save();
          a.scale(b, b);
          a.fillStyle = this._controller.theme.bodyBackground(1);
          a.fillRect(0, 0, h, g);
          a.restore();
          this._initialized && (this._overviewCanvasDirty && (this._drawChart(), this._overviewCanvasDirty = !1), a.drawImage(this._overviewCanvas, 0, 0), this._drawSelection());
        };
        a.prototype._drawSelection = function() {
          var a = this._context, b = this._height, h = window.devicePixelRatio, g = this._selection ? this._selection.left : this._toPixels(this._windowStart), r = this._selection ? this._selection.right : this._toPixels(this._windowEnd), m = this._controller.theme;
          a.save();
          a.scale(h, h);
          this._selection ? (a.fillStyle = m.selectionText(.15), a.fillRect(g, 1, r - g, b - 1), a.fillStyle = "rgba(133, 0, 0, 1)", a.fillRect(g + .5, 0, r - g - 1, 4), a.fillRect(g + .5, b - 4, r - g - 1, 4)) : (a.fillStyle = m.bodyBackground(.4), a.fillRect(0, 1, g, b - 1), a.fillRect(r, 1, this._width, b - 1));
          a.beginPath();
          a.moveTo(g, 0);
          a.lineTo(g, b);
          a.moveTo(r, 0);
          a.lineTo(r, b);
          a.lineWidth = .5;
          a.strokeStyle = m.foregroundTextGrey(1);
          a.stroke();
          b = Math.abs((this._selection ? this._toTime(this._selection.right) : this._windowEnd) - (this._selection ? this._toTime(this._selection.left) : this._windowStart));
          a.fillStyle = m.selectionText(.5);
          a.font = "8px sans-serif";
          a.textBaseline = "alphabetic";
          a.textAlign = "end";
          a.fillText(b.toFixed(2), Math.min(g, r) - 4, 10);
          a.fillText((b / 60).toFixed(2), Math.min(g, r) - 4, 20);
          a.restore();
        };
        a.prototype._drawChart = function() {
          var a = window.devicePixelRatio, b = this._height, h = this._controller.activeProfile, g = 4 * this._width, r = h.totalTime / g, m = this._overviewContext, u = this._controller.theme.blueHighlight(1);
          m.save();
          m.translate(0, a * b);
          var d = -a * b / (h.maxDepth - 1);
          m.scale(a / 4, d);
          m.clearRect(0, 0, g, h.maxDepth - 1);
          1 == this._mode && m.scale(1, 1 / h.snapshotCount);
          for (var f = 0, e = h.snapshotCount;f < e;f++) {
            var c = h.getSnapshotAt(f);
            if (c) {
              var n = null, x = 0;
              m.beginPath();
              m.moveTo(0, 0);
              for (var F = 0;F < g;F++) {
                x = h.startTime + F * r, x = (n = n ? n.queryNext(x) : c.query(x)) ? n.getDepth() - 1 : 0, m.lineTo(F, x);
              }
              m.lineTo(F, 0);
              m.fillStyle = u;
              m.fill();
              1 == this._mode && m.translate(0, -b * a / d);
            }
          }
          m.restore();
        };
        a.prototype._toPixelsRelative = function(a) {
          return a * this._width / (this._rangeEnd - this._rangeStart);
        };
        a.prototype._toPixels = function(a) {
          return this._toPixelsRelative(a - this._rangeStart);
        };
        a.prototype._toTimeRelative = function(a) {
          return a * (this._rangeEnd - this._rangeStart) / this._width;
        };
        a.prototype._toTime = function(a) {
          return this._toTimeRelative(a) + this._rangeStart;
        };
        a.prototype._getDragTargetUnderCursor = function(a, b) {
          if (0 <= b && b < this._height) {
            var h = this._toPixels(this._windowStart), t = this._toPixels(this._windowEnd), r = 2 + g.FlameChartBase.DRAGHANDLE_WIDTH / 2, m = a >= h - r && a <= h + r, u = a >= t - r && a <= t + r;
            if (m && u) {
              return 4;
            }
            if (m) {
              return 2;
            }
            if (u) {
              return 3;
            }
            if (!this._windowEqRange() && a > h + r && a < t - r) {
              return 1;
            }
          }
          return 0;
        };
        a.prototype.onMouseDown = function(a, b) {
          var h = this._getDragTargetUnderCursor(a, b);
          0 === h ? (this._selection = {left:a, right:a}, this.draw()) : (1 === h && this._mouseController.updateCursor(g.MouseCursor.GRABBING), this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:h});
        };
        a.prototype.onMouseMove = function(a, b) {
          var h = g.MouseCursor.DEFAULT, t = this._getDragTargetUnderCursor(a, b);
          0 === t || this._selection || (h = 1 === t ? g.MouseCursor.GRAB : g.MouseCursor.EW_RESIZE);
          this._mouseController.updateCursor(h);
        };
        a.prototype.onMouseOver = function(a, b) {
          this.onMouseMove(a, b);
        };
        a.prototype.onMouseOut = function() {
          this._mouseController.updateCursor(g.MouseCursor.DEFAULT);
        };
        a.prototype.onDrag = function(a, q, h, t, r, m) {
          if (this._selection) {
            this._selection = {left:a, right:b(h, 0, this._width - 1)}, this.draw();
          } else {
            a = this._dragInfo;
            if (4 === a.target) {
              if (0 !== r) {
                a.target = 0 > r ? 2 : 3;
              } else {
                return;
              }
            }
            q = this._windowStart;
            h = this._windowEnd;
            r = this._toTimeRelative(r);
            switch(a.target) {
              case 1:
                q = a.windowStartInitial + r;
                h = a.windowEndInitial + r;
                break;
              case 2:
                q = b(a.windowStartInitial + r, this._rangeStart, h - g.FlameChartBase.MIN_WINDOW_LEN);
                break;
              case 3:
                h = b(a.windowEndInitial + r, q + g.FlameChartBase.MIN_WINDOW_LEN, this._rangeEnd);
                break;
              default:
                return;
            }
            this._controller.setWindow(q, h);
          }
        };
        a.prototype.onDragEnd = function(a, b, h, g, r, m) {
          this._selection && (this._selection = null, this._controller.setWindow(this._toTime(a), this._toTime(h)));
          this._dragInfo = null;
          this.onMouseMove(h, g);
        };
        a.prototype.onClick = function(a, b) {
          this._selection = this._dragInfo = null;
          this._windowEqRange() || (0 === this._getDragTargetUnderCursor(a, b) && this._controller.moveWindowTo(this._toTime(a)), this.onMouseMove(a, b));
          this.draw();
        };
        a.prototype.onHoverStart = function(a, b) {
        };
        a.prototype.onHoverEnd = function() {
        };
        return a;
      }(g.FlameChartBase);
      g.FlameChartOverview = p;
    })(p.Profiler || (p.Profiler = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(p) {
    (function(g) {
      var b = k.NumberUtilities.clamp;
      (function(b) {
        b[b.OVERVIEW = 0] = "OVERVIEW";
        b[b.CHART = 1] = "CHART";
      })(g.FlameChartHeaderType || (g.FlameChartHeaderType = {}));
      var p = function(k) {
        function a(a, b) {
          this._type = b;
          k.call(this, a);
        }
        __extends(a, k);
        a.prototype.draw = function() {
          var a = this._context, b = window.devicePixelRatio, h = this._width, g = this._height;
          a.save();
          a.scale(b, b);
          a.fillStyle = this._controller.theme.tabToolbar(1);
          a.fillRect(0, 0, h, g);
          this._initialized && (0 == this._type ? (b = this._toPixels(this._windowStart), h = this._toPixels(this._windowEnd), a.fillStyle = this._controller.theme.bodyBackground(1), a.fillRect(b, 0, h - b, g), this._drawLabels(this._rangeStart, this._rangeEnd), this._drawDragHandle(b), this._drawDragHandle(h)) : this._drawLabels(this._windowStart, this._windowEnd));
          a.restore();
        };
        a.prototype._drawLabels = function(b, g) {
          var h = this._context, t = this._calculateTickInterval(b, g), r = Math.ceil(b / t) * t, m = 500 <= t, u = m ? 1E3 : 1, d = this._decimalPlaces(t / u), m = m ? "s" : "ms", f = this._toPixels(r), e = this._height / 2, c = this._controller.theme;
          h.lineWidth = 1;
          h.strokeStyle = c.contentTextDarkGrey(.5);
          h.fillStyle = c.contentTextDarkGrey(1);
          h.textAlign = "right";
          h.textBaseline = "middle";
          h.font = "11px sans-serif";
          for (c = this._width + a.TICK_MAX_WIDTH;f < c;) {
            h.fillText((r / u).toFixed(d) + " " + m, f - 7, e + 1), h.beginPath(), h.moveTo(f, 0), h.lineTo(f, this._height + 1), h.closePath(), h.stroke(), r += t, f = this._toPixels(r);
          }
        };
        a.prototype._calculateTickInterval = function(b, g) {
          var h = (g - b) / (this._width / a.TICK_MAX_WIDTH), t = Math.pow(10, Math.floor(Math.log(h) / Math.LN10)), h = h / t;
          return 5 < h ? 10 * t : 2 < h ? 5 * t : 1 < h ? 2 * t : t;
        };
        a.prototype._drawDragHandle = function(a) {
          var b = this._context;
          b.lineWidth = 2;
          b.strokeStyle = this._controller.theme.bodyBackground(1);
          b.fillStyle = this._controller.theme.foregroundTextGrey(.7);
          this._drawRoundedRect(b, a - g.FlameChartBase.DRAGHANDLE_WIDTH / 2, g.FlameChartBase.DRAGHANDLE_WIDTH, this._height - 2);
        };
        a.prototype._drawRoundedRect = function(a, b, h, g) {
          var r, m = !0;
          void 0 === m && (m = !0);
          void 0 === r && (r = !0);
          a.beginPath();
          a.moveTo(b + 2, 1);
          a.lineTo(b + h - 2, 1);
          a.quadraticCurveTo(b + h, 1, b + h, 3);
          a.lineTo(b + h, 1 + g - 2);
          a.quadraticCurveTo(b + h, 1 + g, b + h - 2, 1 + g);
          a.lineTo(b + 2, 1 + g);
          a.quadraticCurveTo(b, 1 + g, b, 1 + g - 2);
          a.lineTo(b, 3);
          a.quadraticCurveTo(b, 1, b + 2, 1);
          a.closePath();
          m && a.stroke();
          r && a.fill();
        };
        a.prototype._toPixelsRelative = function(a) {
          return a * this._width / (0 === this._type ? this._rangeEnd - this._rangeStart : this._windowEnd - this._windowStart);
        };
        a.prototype._toPixels = function(a) {
          return this._toPixelsRelative(a - (0 === this._type ? this._rangeStart : this._windowStart));
        };
        a.prototype._toTimeRelative = function(a) {
          return a * (0 === this._type ? this._rangeEnd - this._rangeStart : this._windowEnd - this._windowStart) / this._width;
        };
        a.prototype._toTime = function(a) {
          return this._toTimeRelative(a) + (0 === this._type ? this._rangeStart : this._windowStart);
        };
        a.prototype._getDragTargetUnderCursor = function(a, b) {
          if (0 <= b && b < this._height) {
            if (0 === this._type) {
              var h = this._toPixels(this._windowStart), t = this._toPixels(this._windowEnd), r = 2 + g.FlameChartBase.DRAGHANDLE_WIDTH / 2, h = a >= h - r && a <= h + r, t = a >= t - r && a <= t + r;
              if (h && t) {
                return 4;
              }
              if (h) {
                return 2;
              }
              if (t) {
                return 3;
              }
            }
            if (!this._windowEqRange()) {
              return 1;
            }
          }
          return 0;
        };
        a.prototype.onMouseDown = function(a, b) {
          var h = this._getDragTargetUnderCursor(a, b);
          1 === h && this._mouseController.updateCursor(g.MouseCursor.GRABBING);
          this._dragInfo = {windowStartInitial:this._windowStart, windowEndInitial:this._windowEnd, target:h};
        };
        a.prototype.onMouseMove = function(a, b) {
          var h = g.MouseCursor.DEFAULT, t = this._getDragTargetUnderCursor(a, b);
          0 !== t && (1 !== t ? h = g.MouseCursor.EW_RESIZE : 1 !== t || this._windowEqRange() || (h = g.MouseCursor.GRAB));
          this._mouseController.updateCursor(h);
        };
        a.prototype.onMouseOver = function(a, b) {
          this.onMouseMove(a, b);
        };
        a.prototype.onMouseOut = function() {
          this._mouseController.updateCursor(g.MouseCursor.DEFAULT);
        };
        a.prototype.onDrag = function(a, k, h, t, r, m) {
          a = this._dragInfo;
          if (4 === a.target) {
            if (0 !== r) {
              a.target = 0 > r ? 2 : 3;
            } else {
              return;
            }
          }
          k = this._windowStart;
          h = this._windowEnd;
          r = this._toTimeRelative(r);
          switch(a.target) {
            case 1:
              h = 0 === this._type ? 1 : -1;
              k = a.windowStartInitial + h * r;
              h = a.windowEndInitial + h * r;
              break;
            case 2:
              k = b(a.windowStartInitial + r, this._rangeStart, h - g.FlameChartBase.MIN_WINDOW_LEN);
              break;
            case 3:
              h = b(a.windowEndInitial + r, k + g.FlameChartBase.MIN_WINDOW_LEN, this._rangeEnd);
              break;
            default:
              return;
          }
          this._controller.setWindow(k, h);
        };
        a.prototype.onDragEnd = function(a, b, h, g, r, m) {
          this._dragInfo = null;
          this.onMouseMove(h, g);
        };
        a.prototype.onClick = function(a, b) {
          1 === this._dragInfo.target && this._mouseController.updateCursor(g.MouseCursor.GRAB);
        };
        a.prototype.onHoverStart = function(a, b) {
        };
        a.prototype.onHoverEnd = function() {
        };
        a.TICK_MAX_WIDTH = 75;
        return a;
      }(g.FlameChartBase);
      g.FlameChartHeader = p;
    })(p.Profiler || (p.Profiler = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    (function(g) {
      (function(b) {
        var g = function() {
          function a(a, b, h, g, r) {
            this.pageLoaded = a;
            this.threadsTotal = b;
            this.threadsLoaded = h;
            this.threadFilesTotal = g;
            this.threadFilesLoaded = r;
          }
          a.prototype.toString = function() {
            return "[" + ["pageLoaded", "threadsTotal", "threadsLoaded", "threadFilesTotal", "threadFilesLoaded"].map(function(a, b, h) {
              return a + ":" + this[a];
            }, this).join(", ") + "]";
          };
          return a;
        }();
        b.TraceLoggerProgressInfo = g;
        var k = function() {
          function a(a) {
            this._baseUrl = a;
            this._threads = [];
            this._progressInfo = null;
          }
          a.prototype.loadPage = function(a, b, h) {
            this._threads = [];
            this._pageLoadCallback = b;
            this._pageLoadProgressCallback = h;
            this._progressInfo = new g(!1, 0, 0, 0, 0);
            this._loadData([a], this._onLoadPage.bind(this));
          };
          Object.defineProperty(a.prototype, "buffers", {get:function() {
            for (var a = [], b = 0, h = this._threads.length;b < h;b++) {
              a.push(this._threads[b].buffer);
            }
            return a;
          }, enumerable:!0, configurable:!0});
          a.prototype._onProgress = function() {
            this._pageLoadProgressCallback && this._pageLoadProgressCallback.call(this, this._progressInfo);
          };
          a.prototype._onLoadPage = function(a) {
            if (a && 1 == a.length) {
              var g = this, h = 0;
              a = a[0];
              var t = a.length;
              this._threads = Array(t);
              this._progressInfo.pageLoaded = !0;
              this._progressInfo.threadsTotal = t;
              for (var r = 0;r < a.length;r++) {
                var m = a[r], u = [m.dict, m.tree];
                m.corrections && u.push(m.corrections);
                this._progressInfo.threadFilesTotal += u.length;
                this._loadData(u, function(a) {
                  return function(f) {
                    f && (f = new b.Thread(f), f.buffer.name = "Thread " + a, g._threads[a] = f);
                    h++;
                    g._progressInfo.threadsLoaded++;
                    g._onProgress();
                    h === t && g._pageLoadCallback.call(g, null, g._threads);
                  };
                }(r), function(a) {
                  g._progressInfo.threadFilesLoaded++;
                  g._onProgress();
                });
              }
              this._onProgress();
            } else {
              this._pageLoadCallback.call(this, "Error loading page.", null);
            }
          };
          a.prototype._loadData = function(a, b, h) {
            var g = 0, r = 0, m = a.length, u = [];
            u.length = m;
            for (var d = 0;d < m;d++) {
              var f = this._baseUrl + a[d], e = new XMLHttpRequest, c = /\.tl$/i.test(f) ? "arraybuffer" : "json";
              e.open("GET", f, !0);
              e.responseType = c;
              e.onload = function(c, e) {
                return function(a) {
                  if ("json" === e) {
                    if (a = this.response, "string" === typeof a) {
                      try {
                        a = JSON.parse(a), u[c] = a;
                      } catch (f) {
                        r++;
                      }
                    } else {
                      u[c] = a;
                    }
                  } else {
                    u[c] = this.response;
                  }
                  ++g;
                  h && h(g);
                  g === m && b(u);
                };
              }(d, c);
              e.send();
            }
          };
          a.colors = "#0044ff #8c4b00 #cc5c33 #ff80c4 #ffbfd9 #ff8800 #8c5e00 #adcc33 #b380ff #bfd9ff #ffaa00 #8c0038 #bf8f30 #f780ff #cc99c9 #aaff00 #000073 #452699 #cc8166 #cca799 #000066 #992626 #cc6666 #ccc299 #ff6600 #526600 #992663 #cc6681 #99ccc2 #ff0066 #520066 #269973 #61994d #739699 #ffcc00 #006629 #269199 #94994d #738299 #ff0000 #590000 #234d8c #8c6246 #7d7399 #ee00ff #00474d #8c2385 #8c7546 #7c8c69 #eeff00 #4d003d #662e1a #62468c #8c6969 #6600ff #4c2900 #1a6657 #8c464f #8c6981 #44ff00 #401100 #1a2466 #663355 #567365 #d90074 #403300 #101d40 #59562d #66614d #cc0000 #002b40 #234010 #4c2626 #4d5e66 #00a3cc #400011 #231040 #4c3626 #464359 #0000bf #331b00 #80e6ff #311a33 #4d3939 #a69b00 #003329 #80ffb2 #331a20 #40303d #00a658 #40ffd9 #ffc480 #ffe1bf #332b26 #8c2500 #9933cc #80fff6 #ffbfbf #303326 #005e8c #33cc47 #b2ff80 #c8bfff #263332 #00708c #cc33ad #ffe680 #f2ffbf #262a33 #388c00 #335ccc #8091ff #bfffd9".split(" ");
          return a;
        }();
        b.TraceLogger = k;
      })(g.TraceLogger || (g.TraceLogger = {}));
    })(k.Profiler || (k.Profiler = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    (function(g) {
      (function(b) {
        var k;
        (function(b) {
          b[b.START_HI = 0] = "START_HI";
          b[b.START_LO = 4] = "START_LO";
          b[b.STOP_HI = 8] = "STOP_HI";
          b[b.STOP_LO = 12] = "STOP_LO";
          b[b.TEXTID = 16] = "TEXTID";
          b[b.NEXTID = 20] = "NEXTID";
        })(k || (k = {}));
        k = function() {
          function b(a) {
            2 <= a.length && (this._text = a[0], this._data = new DataView(a[1]), this._buffer = new g.TimelineBuffer, this._walkTree(0));
          }
          Object.defineProperty(b.prototype, "buffer", {get:function() {
            return this._buffer;
          }, enumerable:!0, configurable:!0});
          b.prototype._walkTree = function(a) {
            var g = this._data, k = this._buffer;
            do {
              var h = a * b.ITEM_SIZE, t = 4294967295 * g.getUint32(h + 0) + g.getUint32(h + 4), r = 4294967295 * g.getUint32(h + 8) + g.getUint32(h + 12), m = g.getUint32(h + 16), h = g.getUint32(h + 20), u = 1 === (m & 1), m = m >>> 1, m = this._text[m];
              k.enter(m, null, t / 1E6);
              u && this._walkTree(a + 1);
              k.leave(m, null, r / 1E6);
              a = h;
            } while (0 !== a);
          };
          b.ITEM_SIZE = 24;
          return b;
        }();
        b.Thread = k;
      })(g.TraceLogger || (g.TraceLogger = {}));
    })(k.Profiler || (k.Profiler = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(p) {
    (function(g) {
      var b = k.NumberUtilities.clamp, p = function() {
        function a() {
          this.length = 0;
          this.lines = [];
          this.format = [];
          this.time = [];
          this.repeat = [];
          this.length = 0;
        }
        a.prototype.append = function(a, b) {
          var h = this.lines;
          0 < h.length && h[h.length - 1] === a ? this.repeat[h.length - 1]++ : (this.lines.push(a), this.repeat.push(1), this.format.push(b ? {backgroundFillStyle:b} : void 0), this.time.push(performance.now()), this.length++);
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
      g.Buffer = p;
      var v = function() {
        function a(a) {
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
          this.buffer = new p;
          a.addEventListener("keydown", function(a) {
            var l = 0;
            switch(a.keyCode) {
              case n:
                this.showLineNumbers = !this.showLineNumbers;
                break;
              case x:
                this.showLineTime = !this.showLineTime;
                break;
              case m:
                l = -1;
                break;
              case u:
                l = 1;
                break;
              case b:
                l = -this.pageLineCount;
                break;
              case h:
                l = this.pageLineCount;
                break;
              case g:
                l = -this.lineIndex;
                break;
              case r:
                l = this.buffer.length - this.lineIndex;
                break;
              case d:
                this.columnIndex -= a.metaKey ? 10 : 1;
                0 > this.columnIndex && (this.columnIndex = 0);
                a.preventDefault();
                break;
              case f:
                this.columnIndex += a.metaKey ? 10 : 1;
                a.preventDefault();
                break;
              case e:
                a.metaKey && (this.selection = {start:0, end:this.buffer.length}, a.preventDefault());
                break;
              case c:
                if (a.metaKey) {
                  var k = "";
                  if (this.selection) {
                    for (var J = this.selection.start;J <= this.selection.end;J++) {
                      k += this.buffer.get(J) + "\n";
                    }
                  } else {
                    k = this.buffer.get(this.lineIndex);
                  }
                  alert(k);
                }
              ;
            }
            a.metaKey && (l *= this.pageLineCount);
            l && (this.scroll(l), a.preventDefault());
            l && a.shiftKey ? this.selection ? this.lineIndex > this.selection.start ? this.selection.end = this.lineIndex : this.selection.start = this.lineIndex : 0 < l ? this.selection = {start:this.lineIndex - l, end:this.lineIndex} : 0 > l && (this.selection = {start:this.lineIndex, end:this.lineIndex - l}) : l && (this.selection = null);
            this.paint();
          }.bind(this), !1);
          a.addEventListener("focus", function(c) {
            this.hasFocus = !0;
          }.bind(this), !1);
          a.addEventListener("blur", function(c) {
            this.hasFocus = !1;
          }.bind(this), !1);
          var b = 33, h = 34, g = 36, r = 35, m = 38, u = 40, d = 37, f = 39, e = 65, c = 67, n = 78, x = 84;
        }
        a.prototype.resize = function() {
          this._resizeHandler();
        };
        a.prototype._resizeHandler = function() {
          var a = this.canvas.parentElement, b = a.clientWidth, a = a.clientHeight - 1, h = window.devicePixelRatio || 1;
          1 !== h ? (this.ratio = h / 1, this.canvas.width = b * this.ratio, this.canvas.height = a * this.ratio, this.canvas.style.width = b + "px", this.canvas.style.height = a + "px") : (this.ratio = 1, this.canvas.width = b, this.canvas.height = a);
          this.pageLineCount = Math.floor(this.canvas.height / this.lineHeight);
        };
        a.prototype.gotoLine = function(a) {
          this.lineIndex = b(a, 0, this.buffer.length - 1);
        };
        a.prototype.scrollIntoView = function() {
          this.lineIndex < this.pageIndex ? this.pageIndex = this.lineIndex : this.lineIndex >= this.pageIndex + this.pageLineCount && (this.pageIndex = this.lineIndex - this.pageLineCount + 1);
        };
        a.prototype.scroll = function(a) {
          this.gotoLine(this.lineIndex + a);
          this.scrollIntoView();
        };
        a.prototype.paint = function() {
          var a = this.pageLineCount;
          this.pageIndex + a > this.buffer.length && (a = this.buffer.length - this.pageIndex);
          var b = this.textMarginLeft, h = b + (this.showLineNumbers ? 5 * (String(this.buffer.length).length + 2) : 0), g = h + (this.showLineTime ? 40 : 10), r = g + 25;
          this.context.font = this.fontSize + 'px Consolas, "Liberation Mono", Courier, monospace';
          this.context.setTransform(this.ratio, 0, 0, this.ratio, 0, 0);
          for (var m = this.canvas.width, k = this.lineHeight, d = 0;d < a;d++) {
            var f = d * this.lineHeight, e = this.pageIndex + d, c = this.buffer.get(e), n = this.buffer.getFormat(e), x = this.buffer.getRepeat(e), F = 1 < e ? this.buffer.getTime(e) - this.buffer.getTime(0) : 0;
            this.context.fillStyle = e % 2 ? this.lineColor : this.alternateLineColor;
            n && n.backgroundFillStyle && (this.context.fillStyle = n.backgroundFillStyle);
            this.context.fillRect(0, f, m, k);
            this.context.fillStyle = this.selectionTextColor;
            this.context.fillStyle = this.textColor;
            this.selection && e >= this.selection.start && e <= this.selection.end && (this.context.fillStyle = this.selectionColor, this.context.fillRect(0, f, m, k), this.context.fillStyle = this.selectionTextColor);
            this.hasFocus && e === this.lineIndex && (this.context.fillStyle = this.selectionColor, this.context.fillRect(0, f, m, k), this.context.fillStyle = this.selectionTextColor);
            0 < this.columnIndex && (c = c.substring(this.columnIndex));
            f = (d + 1) * this.lineHeight - this.textMarginBottom;
            this.showLineNumbers && this.context.fillText(String(e), b, f);
            this.showLineTime && this.context.fillText(F.toFixed(1).padLeft(" ", 6), h, f);
            1 < x && this.context.fillText(String(x).padLeft(" ", 3), g, f);
            this.context.fillText(c, r, f);
          }
        };
        a.prototype.refreshEvery = function(a) {
          function b() {
            h.paint();
            h.refreshFrequency && setTimeout(b, h.refreshFrequency);
          }
          var h = this;
          this.refreshFrequency = a;
          h.refreshFrequency && setTimeout(b, h.refreshFrequency);
        };
        a.prototype.isScrolledToBottom = function() {
          return this.lineIndex === this.buffer.length - 1;
        };
        return a;
      }();
      g.Terminal = v;
    })(p.Terminal || (p.Terminal = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    (function(g) {
      var b = function() {
        function b(g) {
          this._lastWeightedTime = this._lastTime = this._index = 0;
          this._gradient = "#FF0000 #FF1100 #FF2300 #FF3400 #FF4600 #FF5700 #FF6900 #FF7B00 #FF8C00 #FF9E00 #FFAF00 #FFC100 #FFD300 #FFE400 #FFF600 #F7FF00 #E5FF00 #D4FF00 #C2FF00 #B0FF00 #9FFF00 #8DFF00 #7CFF00 #6AFF00 #58FF00 #47FF00 #35FF00 #24FF00 #12FF00 #00FF00".split(" ");
          this._container = g;
          this._canvas = document.createElement("canvas");
          this._container.appendChild(this._canvas);
          this._context = this._canvas.getContext("2d");
          this._listenForContainerSizeChanges();
        }
        b.prototype._listenForContainerSizeChanges = function() {
          var b = this._containerWidth, a = this._containerHeight;
          this._onContainerSizeChanged();
          var g = this;
          setInterval(function() {
            if (b !== g._containerWidth || a !== g._containerHeight) {
              g._onContainerSizeChanged(), b = g._containerWidth, a = g._containerHeight;
            }
          }, 10);
        };
        b.prototype._onContainerSizeChanged = function() {
          var b = this._containerWidth, a = this._containerHeight, g = window.devicePixelRatio || 1;
          1 !== g ? (this._ratio = g / 1, this._canvas.width = b * this._ratio, this._canvas.height = a * this._ratio, this._canvas.style.width = b + "px", this._canvas.style.height = a + "px") : (this._ratio = 1, this._canvas.width = b, this._canvas.height = a);
        };
        Object.defineProperty(b.prototype, "_containerWidth", {get:function() {
          return this._container.clientWidth;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(b.prototype, "_containerHeight", {get:function() {
          return this._container.clientHeight;
        }, enumerable:!0, configurable:!0});
        b.prototype.tickAndRender = function(b, a) {
          void 0 === b && (b = !1);
          void 0 === a && (a = 0);
          if (0 === this._lastTime) {
            this._lastTime = performance.now();
          } else {
            var g = 1 * (performance.now() - this._lastTime) + 0 * this._lastWeightedTime, k = this._context, h = 2 * this._ratio, t = 30 * this._ratio, r = performance;
            r.memory && (t += 30 * this._ratio);
            var m = (this._canvas.width - t) / (h + 1) | 0, u = this._index++;
            this._index > m && (this._index = 0);
            m = this._canvas.height;
            k.globalAlpha = 1;
            k.fillStyle = "black";
            k.fillRect(t + u * (h + 1), 0, 4 * h, this._canvas.height);
            var d = Math.min(1E3 / 60 / g, 1);
            k.fillStyle = "#00FF00";
            k.globalAlpha = b ? .5 : 1;
            d = m / 2 * d | 0;
            k.fillRect(t + u * (h + 1), m - d, h, d);
            a && (d = Math.min(1E3 / 240 / a, 1), k.fillStyle = "#FF6347", d = m / 2 * d | 0, k.fillRect(t + u * (h + 1), m / 2 - d, h, d));
            0 === u % 16 && (k.globalAlpha = 1, k.fillStyle = "black", k.fillRect(0, 0, t, this._canvas.height), k.fillStyle = "white", k.font = 8 * this._ratio + "px Arial", k.textBaseline = "middle", h = (1E3 / g).toFixed(0), a && (h += " " + a.toFixed(0)), r.memory && (h += " " + (r.memory.usedJSHeapSize / 1024 / 1024).toFixed(2)), k.fillText(h, 2 * this._ratio, this._containerHeight / 2 * this._ratio));
            this._lastTime = performance.now();
            this._lastWeightedTime = g;
          }
        };
        return b;
      }();
      g.FPS = b;
    })(k.Mini || (k.Mini = {}));
  })(k.Tools || (k.Tools = {}));
})(Shumway || (Shumway = {}));
console.timeEnd("Load Shared Dependencies");
console.time("Load GFX Dependencies");
(function(k) {
  (function(p) {
    function g(c, e, a) {
      return q && a ? "string" === typeof e ? (c = k.ColorUtilities.cssStyleToRGBA(e), k.ColorUtilities.rgbaToCSSStyle(a.transformRGBA(c))) : e instanceof CanvasGradient && e._template ? e._template.createCanvasGradient(c, a) : e : e;
    }
    var b = k.NumberUtilities.clamp;
    (function(c) {
      c[c.None = 0] = "None";
      c[c.Brief = 1] = "Brief";
      c[c.Verbose = 2] = "Verbose";
    })(p.TraceLevel || (p.TraceLevel = {}));
    var w = k.Metrics.Counter.instance;
    p.frameCounter = new k.Metrics.Counter(!0);
    p.traceLevel = 2;
    p.writer = null;
    p.frameCount = function(c) {
      w.count(c);
      p.frameCounter.count(c);
    };
    p.timelineBuffer = new k.Tools.Profiler.TimelineBuffer("GFX");
    p.enterTimeline = function(c, e) {
    };
    p.leaveTimeline = function(c, e) {
    };
    var v = null, a = null, l = null, q = !0;
    q && "undefined" !== typeof CanvasRenderingContext2D && (v = CanvasGradient.prototype.addColorStop, a = CanvasRenderingContext2D.prototype.createLinearGradient, l = CanvasRenderingContext2D.prototype.createRadialGradient, CanvasRenderingContext2D.prototype.createLinearGradient = function(c, e, a, f) {
      return (new t(c, e, a, f)).createCanvasGradient(this, null);
    }, CanvasRenderingContext2D.prototype.createRadialGradient = function(c, e, a, f, d, b) {
      return (new r(c, e, a, f, d, b)).createCanvasGradient(this, null);
    }, CanvasGradient.prototype.addColorStop = function(c, e) {
      v.call(this, c, e);
      this._template.addColorStop(c, e);
    });
    var h = function() {
      return function(c, e) {
        this.offset = c;
        this.color = e;
      };
    }(), t = function() {
      function c(e, a, f, d) {
        this.x0 = e;
        this.y0 = a;
        this.x1 = f;
        this.y1 = d;
        this.colorStops = [];
      }
      c.prototype.addColorStop = function(c, e) {
        this.colorStops.push(new h(c, e));
      };
      c.prototype.createCanvasGradient = function(c, e) {
        for (var f = a.call(c, this.x0, this.y0, this.x1, this.y1), d = this.colorStops, b = 0;b < d.length;b++) {
          var n = d[b], h = n.offset, n = n.color, n = e ? g(c, n, e) : n;
          v.call(f, h, n);
        }
        f._template = this;
        f._transform = this._transform;
        return f;
      };
      return c;
    }(), r = function() {
      function c(e, a, f, d, b, n) {
        this.x0 = e;
        this.y0 = a;
        this.r0 = f;
        this.x1 = d;
        this.y1 = b;
        this.r1 = n;
        this.colorStops = [];
      }
      c.prototype.addColorStop = function(c, e) {
        this.colorStops.push(new h(c, e));
      };
      c.prototype.createCanvasGradient = function(c, e) {
        for (var a = l.call(c, this.x0, this.y0, this.r0, this.x1, this.y1, this.r1), f = this.colorStops, d = 0;d < f.length;d++) {
          var b = f[d], n = b.offset, b = b.color, b = e ? g(c, b, e) : b;
          v.call(a, n, b);
        }
        a._template = this;
        a._transform = this._transform;
        return a;
      };
      return c;
    }(), m;
    (function(c) {
      c[c.ClosePath = 1] = "ClosePath";
      c[c.MoveTo = 2] = "MoveTo";
      c[c.LineTo = 3] = "LineTo";
      c[c.QuadraticCurveTo = 4] = "QuadraticCurveTo";
      c[c.BezierCurveTo = 5] = "BezierCurveTo";
      c[c.ArcTo = 6] = "ArcTo";
      c[c.Rect = 7] = "Rect";
      c[c.Arc = 8] = "Arc";
      c[c.Save = 9] = "Save";
      c[c.Restore = 10] = "Restore";
      c[c.Transform = 11] = "Transform";
    })(m || (m = {}));
    var u = function() {
      function c(e) {
        this._commands = new Uint8Array(c._arrayBufferPool.acquire(8), 0, 8);
        this._commandPosition = 0;
        this._data = new Float64Array(c._arrayBufferPool.acquire(8 * Float64Array.BYTES_PER_ELEMENT), 0, 8);
        this._dataPosition = 0;
        e instanceof c && this.addPath(e);
      }
      c._apply = function(c, e) {
        var a = c._commands, f = c._data, d = 0, b = 0;
        e.beginPath();
        for (var n = c._commandPosition;d < n;) {
          switch(a[d++]) {
            case 1:
              e.closePath();
              break;
            case 2:
              e.moveTo(f[b++], f[b++]);
              break;
            case 3:
              e.lineTo(f[b++], f[b++]);
              break;
            case 4:
              e.quadraticCurveTo(f[b++], f[b++], f[b++], f[b++]);
              break;
            case 5:
              e.bezierCurveTo(f[b++], f[b++], f[b++], f[b++], f[b++], f[b++]);
              break;
            case 6:
              e.arcTo(f[b++], f[b++], f[b++], f[b++], f[b++]);
              break;
            case 7:
              e.rect(f[b++], f[b++], f[b++], f[b++]);
              break;
            case 8:
              e.arc(f[b++], f[b++], f[b++], f[b++], f[b++], !!f[b++]);
              break;
            case 9:
              e.save();
              break;
            case 10:
              e.restore();
              break;
            case 11:
              e.transform(f[b++], f[b++], f[b++], f[b++], f[b++], f[b++]);
          }
        }
      };
      c.prototype._ensureCommandCapacity = function(e) {
        this._commands = c._arrayBufferPool.ensureUint8ArrayLength(this._commands, e);
      };
      c.prototype._ensureDataCapacity = function(e) {
        this._data = c._arrayBufferPool.ensureFloat64ArrayLength(this._data, e);
      };
      c.prototype._writeCommand = function(c) {
        this._commandPosition >= this._commands.length && this._ensureCommandCapacity(this._commandPosition + 1);
        this._commands[this._commandPosition++] = c;
      };
      c.prototype._writeData = function(c, e, a, f, d, b) {
        var n = arguments.length;
        this._dataPosition + n >= this._data.length && this._ensureDataCapacity(this._dataPosition + n);
        var h = this._data, x = this._dataPosition;
        h[x] = c;
        h[x + 1] = e;
        2 < n && (h[x + 2] = a, h[x + 3] = f, 4 < n && (h[x + 4] = d, 6 === n && (h[x + 5] = b)));
        this._dataPosition += n;
      };
      c.prototype.closePath = function() {
        this._writeCommand(1);
      };
      c.prototype.moveTo = function(c, e) {
        this._writeCommand(2);
        this._writeData(c, e);
      };
      c.prototype.lineTo = function(c, e) {
        this._writeCommand(3);
        this._writeData(c, e);
      };
      c.prototype.quadraticCurveTo = function(c, e, a, f) {
        this._writeCommand(4);
        this._writeData(c, e, a, f);
      };
      c.prototype.bezierCurveTo = function(c, e, a, f, d, b) {
        this._writeCommand(5);
        this._writeData(c, e, a, f, d, b);
      };
      c.prototype.arcTo = function(c, e, a, f, d) {
        this._writeCommand(6);
        this._writeData(c, e, a, f, d);
      };
      c.prototype.rect = function(c, e, a, f) {
        this._writeCommand(7);
        this._writeData(c, e, a, f);
      };
      c.prototype.arc = function(c, e, a, f, d, b) {
        this._writeCommand(8);
        this._writeData(c, e, a, f, d, +b);
      };
      c.prototype.addPath = function(c, e) {
        e && (this._writeCommand(9), this._writeCommand(11), this._writeData(e.a, e.b, e.c, e.d, e.e, e.f));
        var a = this._commandPosition + c._commandPosition;
        a >= this._commands.length && this._ensureCommandCapacity(a);
        for (var f = this._commands, d = c._commands, b = this._commandPosition, n = 0;b < a;b++) {
          f[b] = d[n++];
        }
        this._commandPosition = a;
        a = this._dataPosition + c._dataPosition;
        a >= this._data.length && this._ensureDataCapacity(a);
        f = this._data;
        d = c._data;
        b = this._dataPosition;
        for (n = 0;b < a;b++) {
          f[b] = d[n++];
        }
        this._dataPosition = a;
        e && this._writeCommand(10);
      };
      c._arrayBufferPool = new k.ArrayBufferPool;
      return c;
    }();
    p.Path = u;
    if ("undefined" !== typeof CanvasRenderingContext2D && ("undefined" === typeof Path2D || !Path2D.prototype.addPath)) {
      var d = CanvasRenderingContext2D.prototype.fill;
      CanvasRenderingContext2D.prototype.fill = function(c, e) {
        arguments.length && (c instanceof u ? u._apply(c, this) : e = c);
        e ? d.call(this, e) : d.call(this);
      };
      var f = CanvasRenderingContext2D.prototype.stroke;
      CanvasRenderingContext2D.prototype.stroke = function(c, e) {
        arguments.length && (c instanceof u ? u._apply(c, this) : e = c);
        e ? f.call(this, e) : f.call(this);
      };
      var e = CanvasRenderingContext2D.prototype.clip;
      CanvasRenderingContext2D.prototype.clip = function(c, a) {
        arguments.length && (c instanceof u ? u._apply(c, this) : a = c);
        a ? e.call(this, a) : e.call(this);
      };
      window.Path2D = u;
    }
    if ("undefined" !== typeof CanvasPattern && Path2D.prototype.addPath) {
      m = function(c) {
        this._transform = c;
        this._template && (this._template._transform = c);
      };
      CanvasPattern.prototype.setTransform || (CanvasPattern.prototype.setTransform = m);
      CanvasGradient.prototype.setTransform || (CanvasGradient.prototype.setTransform = m);
      var c = CanvasRenderingContext2D.prototype.fill, n = CanvasRenderingContext2D.prototype.stroke;
      CanvasRenderingContext2D.prototype.fill = function(e, a) {
        var f = !!this.fillStyle._transform;
        if ((this.fillStyle instanceof CanvasPattern || this.fillStyle instanceof CanvasGradient) && f && e instanceof Path2D) {
          var f = this.fillStyle._transform, d;
          try {
            d = f.inverse();
          } catch (b) {
            d = f = p.Geometry.Matrix.createIdentitySVGMatrix();
          }
          this.transform(f.a, f.b, f.c, f.d, f.e, f.f);
          f = new Path2D;
          f.addPath(e, d);
          c.call(this, f, a);
          this.transform(d.a, d.b, d.c, d.d, d.e, d.f);
        } else {
          0 === arguments.length ? c.call(this) : 1 === arguments.length ? c.call(this, e) : 2 === arguments.length && c.call(this, e, a);
        }
      };
      CanvasRenderingContext2D.prototype.stroke = function(c) {
        var e = !!this.strokeStyle._transform;
        if ((this.strokeStyle instanceof CanvasPattern || this.strokeStyle instanceof CanvasGradient) && e && c instanceof Path2D) {
          var a = this.strokeStyle._transform, e = a.inverse();
          this.transform(a.a, a.b, a.c, a.d, a.e, a.f);
          a = new Path2D;
          a.addPath(c, e);
          var f = this.lineWidth;
          this.lineWidth *= (e.a + e.d) / 2;
          n.call(this, a);
          this.transform(e.a, e.b, e.c, e.d, e.e, e.f);
          this.lineWidth = f;
        } else {
          0 === arguments.length ? n.call(this) : 1 === arguments.length && n.call(this, c);
        }
      };
    }
    "undefined" !== typeof CanvasRenderingContext2D && function() {
      function c() {
        return p.Geometry.Matrix.createSVGMatrixFromArray(this.mozCurrentTransform);
      }
      var e = "currentTransform" in CanvasRenderingContext2D.prototype;
      CanvasRenderingContext2D.prototype.flashStroke = function(c, a) {
        if (e) {
          var f = this.currentTransform, d = new Path2D;
          d.addPath(c, f);
          var n = this.lineWidth;
          this.setTransform(1, 0, 0, 1, 0, 0);
          switch(a) {
            case 1:
              this.lineWidth = b(n * (k.getScaleX(f) + k.getScaleY(f)) / 2, 1, 1024);
              break;
            case 2:
              this.lineWidth = b(n * k.getScaleY(f), 1, 1024);
              break;
            case 3:
              this.lineWidth = b(n * k.getScaleX(f), 1, 1024);
          }
          this.stroke(d);
          this.setTransform(f.a, f.b, f.c, f.d, f.e, f.f);
          this.lineWidth = n;
        } else {
          this.stroke(c);
        }
      };
      if (!e) {
        if ("mozCurrentTransform" in CanvasRenderingContext2D.prototype) {
          Object.defineProperty(CanvasRenderingContext2D.prototype, "currentTransform", {get:c}), e = !0;
        } else {
          var a = CanvasRenderingContext2D.prototype.setTransform;
          CanvasRenderingContext2D.prototype.setTransform = function(c, e, f, d, b, n) {
            var h = this.currentTransform;
            h.a = c;
            h.b = e;
            h.c = f;
            h.d = d;
            h.e = b;
            h.f = n;
            a.call(this, c, e, f, d, b, n);
          };
          Object.defineProperty(CanvasRenderingContext2D.prototype, "currentTransform", {get:function() {
            return this._currentTransform || (this._currentTransform = p.Geometry.Matrix.createIdentitySVGMatrix());
          }});
        }
      }
    }();
    if ("undefined" !== typeof CanvasRenderingContext2D && void 0 === CanvasRenderingContext2D.prototype.globalColorMatrix) {
      var x = CanvasRenderingContext2D.prototype.fill, F = CanvasRenderingContext2D.prototype.stroke, I = CanvasRenderingContext2D.prototype.fillText, V = CanvasRenderingContext2D.prototype.strokeText;
      Object.defineProperty(CanvasRenderingContext2D.prototype, "globalColorMatrix", {get:function() {
        return this._globalColorMatrix ? this._globalColorMatrix.clone() : null;
      }, set:function(c) {
        c ? this._globalColorMatrix ? this._globalColorMatrix.set(c) : this._globalColorMatrix = c.clone() : this._globalColorMatrix = null;
      }, enumerable:!0, configurable:!0});
      CanvasRenderingContext2D.prototype.fill = function(c, e) {
        var a = null;
        this._globalColorMatrix && (a = this.fillStyle, this.fillStyle = g(this, this.fillStyle, this._globalColorMatrix));
        0 === arguments.length ? x.call(this) : 1 === arguments.length ? x.call(this, c) : 2 === arguments.length && x.call(this, c, e);
        a && (this.fillStyle = a);
      };
      CanvasRenderingContext2D.prototype.stroke = function(c, e) {
        var a = null;
        this._globalColorMatrix && (a = this.strokeStyle, this.strokeStyle = g(this, this.strokeStyle, this._globalColorMatrix));
        0 === arguments.length ? F.call(this) : 1 === arguments.length && F.call(this, c);
        a && (this.strokeStyle = a);
      };
      CanvasRenderingContext2D.prototype.fillText = function(c, e, a, f) {
        var d = null;
        this._globalColorMatrix && (d = this.fillStyle, this.fillStyle = g(this, this.fillStyle, this._globalColorMatrix));
        3 === arguments.length ? I.call(this, c, e, a) : 4 === arguments.length ? I.call(this, c, e, a, f) : k.Debug.unexpected();
        d && (this.fillStyle = d);
      };
      CanvasRenderingContext2D.prototype.strokeText = function(c, e, a, f) {
        var d = null;
        this._globalColorMatrix && (d = this.strokeStyle, this.strokeStyle = g(this, this.strokeStyle, this._globalColorMatrix));
        3 === arguments.length ? V.call(this, c, e, a) : 4 === arguments.length ? V.call(this, c, e, a, f) : k.Debug.unexpected();
        d && (this.strokeStyle = d);
      };
    }
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    k.ScreenShot = function() {
      return function(g, b, k, p) {
        this.dataURL = g;
        this.w = b;
        this.h = k;
        this.pixelRatio = p;
      };
    }();
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  var p = function() {
    function g() {
      this._count = 0;
      this._head = this._tail = null;
    }
    Object.defineProperty(g.prototype, "count", {get:function() {
      return this._count;
    }, enumerable:!0, configurable:!0});
    Object.defineProperty(g.prototype, "head", {get:function() {
      return this._head;
    }, enumerable:!0, configurable:!0});
    g.prototype._unshift = function(b) {
      0 === this._count ? this._head = this._tail = b : (b.next = this._head, this._head = b.next.previous = b);
      this._count++;
    };
    g.prototype._remove = function(b) {
      b === this._head && b === this._tail ? this._head = this._tail = null : b === this._head ? (this._head = b.next, this._head.previous = null) : b == this._tail ? (this._tail = b.previous, this._tail.next = null) : (b.previous.next = b.next, b.next.previous = b.previous);
      b.previous = b.next = null;
      this._count--;
    };
    g.prototype.use = function(b) {
      this._head !== b && ((b.next || b.previous || this._tail === b) && this._remove(b), this._unshift(b));
    };
    g.prototype.pop = function() {
      if (!this._tail) {
        return null;
      }
      var b = this._tail;
      this._remove(b);
      return b;
    };
    g.prototype.visit = function(b, g) {
      void 0 === g && (g = !0);
      for (var k = g ? this._head : this._tail;k && b(k);) {
        k = g ? k.next : k.previous;
      }
    };
    return g;
  }();
  k.LRUList = p;
  k.getScaleX = function(g) {
    return g.a;
  };
  k.getScaleY = function(g) {
    return g.d;
  };
})(Shumway || (Shumway = {}));
var Shumway$$inline_39 = Shumway || (Shumway = {}), GFX$$inline_40 = Shumway$$inline_39.GFX || (Shumway$$inline_39.GFX = {}), Option$$inline_41 = Shumway$$inline_39.Options.Option, OptionSet$$inline_42 = Shumway$$inline_39.Options.OptionSet, shumwayOptions$$inline_43 = Shumway$$inline_39.Settings.shumwayOptions, rendererOptions$$inline_44 = shumwayOptions$$inline_43.register(new OptionSet$$inline_42("Renderer Options"));
GFX$$inline_40.imageUpdateOption = rendererOptions$$inline_44.register(new Option$$inline_41("", "imageUpdate", "boolean", !0, "Enable image updating."));
GFX$$inline_40.imageConvertOption = rendererOptions$$inline_44.register(new Option$$inline_41("", "imageConvert", "boolean", !0, "Enable image conversion."));
GFX$$inline_40.stageOptions = shumwayOptions$$inline_43.register(new OptionSet$$inline_42("Stage Renderer Options"));
GFX$$inline_40.forcePaint = GFX$$inline_40.stageOptions.register(new Option$$inline_41("", "forcePaint", "boolean", !1, "Force repainting."));
GFX$$inline_40.ignoreViewport = GFX$$inline_40.stageOptions.register(new Option$$inline_41("", "ignoreViewport", "boolean", !1, "Cull elements outside of the viewport."));
GFX$$inline_40.viewportLoupeDiameter = GFX$$inline_40.stageOptions.register(new Option$$inline_41("", "viewportLoupeDiameter", "number", 256, "Size of the viewport loupe.", {range:{min:1, max:1024, step:1}}));
GFX$$inline_40.disableClipping = GFX$$inline_40.stageOptions.register(new Option$$inline_41("", "disableClipping", "boolean", !1, "Disable clipping."));
GFX$$inline_40.debugClipping = GFX$$inline_40.stageOptions.register(new Option$$inline_41("", "debugClipping", "boolean", !1, "Disable clipping."));
GFX$$inline_40.hud = GFX$$inline_40.stageOptions.register(new Option$$inline_41("", "hud", "boolean", !1, "Enable HUD."));
var webGLOptions$$inline_45 = GFX$$inline_40.stageOptions.register(new OptionSet$$inline_42("WebGL Options"));
GFX$$inline_40.perspectiveCamera = webGLOptions$$inline_45.register(new Option$$inline_41("", "pc", "boolean", !1, "Use perspective camera."));
GFX$$inline_40.perspectiveCameraFOV = webGLOptions$$inline_45.register(new Option$$inline_41("", "pcFOV", "number", 60, "Perspective Camera FOV."));
GFX$$inline_40.perspectiveCameraDistance = webGLOptions$$inline_45.register(new Option$$inline_41("", "pcDistance", "number", 2, "Perspective Camera Distance."));
GFX$$inline_40.perspectiveCameraAngle = webGLOptions$$inline_45.register(new Option$$inline_41("", "pcAngle", "number", 0, "Perspective Camera Angle."));
GFX$$inline_40.perspectiveCameraAngleRotate = webGLOptions$$inline_45.register(new Option$$inline_41("", "pcRotate", "boolean", !1, "Rotate Use perspective camera."));
GFX$$inline_40.perspectiveCameraSpacing = webGLOptions$$inline_45.register(new Option$$inline_41("", "pcSpacing", "number", .01, "Element Spacing."));
GFX$$inline_40.perspectiveCameraSpacingInflate = webGLOptions$$inline_45.register(new Option$$inline_41("", "pcInflate", "boolean", !1, "Rotate Use perspective camera."));
GFX$$inline_40.drawTiles = webGLOptions$$inline_45.register(new Option$$inline_41("", "drawTiles", "boolean", !1, "Draw WebGL Tiles"));
GFX$$inline_40.drawSurfaces = webGLOptions$$inline_45.register(new Option$$inline_41("", "drawSurfaces", "boolean", !1, "Draw WebGL Surfaces."));
GFX$$inline_40.drawSurface = webGLOptions$$inline_45.register(new Option$$inline_41("", "drawSurface", "number", -1, "Draw WebGL Surface #"));
GFX$$inline_40.drawElements = webGLOptions$$inline_45.register(new Option$$inline_41("", "drawElements", "boolean", !0, "Actually call gl.drawElements. This is useful to test if the GPU is the bottleneck."));
GFX$$inline_40.disableSurfaceUploads = webGLOptions$$inline_45.register(new Option$$inline_41("", "disableSurfaceUploads", "boolean", !1, "Disable surface uploads."));
GFX$$inline_40.premultipliedAlpha = webGLOptions$$inline_45.register(new Option$$inline_41("", "premultipliedAlpha", "boolean", !1, "Set the premultipliedAlpha flag on getContext()."));
GFX$$inline_40.unpackPremultiplyAlpha = webGLOptions$$inline_45.register(new Option$$inline_41("", "unpackPremultiplyAlpha", "boolean", !0, "Use UNPACK_PREMULTIPLY_ALPHA_WEBGL in pixelStorei."));
var factorChoices$$inline_46 = {ZERO:0, ONE:1, SRC_COLOR:768, ONE_MINUS_SRC_COLOR:769, DST_COLOR:774, ONE_MINUS_DST_COLOR:775, SRC_ALPHA:770, ONE_MINUS_SRC_ALPHA:771, DST_ALPHA:772, ONE_MINUS_DST_ALPHA:773, SRC_ALPHA_SATURATE:776, CONSTANT_COLOR:32769, ONE_MINUS_CONSTANT_COLOR:32770, CONSTANT_ALPHA:32771, ONE_MINUS_CONSTANT_ALPHA:32772};
GFX$$inline_40.sourceBlendFactor = webGLOptions$$inline_45.register(new Option$$inline_41("", "sourceBlendFactor", "number", factorChoices$$inline_46.ONE, "", {choices:factorChoices$$inline_46}));
GFX$$inline_40.destinationBlendFactor = webGLOptions$$inline_45.register(new Option$$inline_41("", "destinationBlendFactor", "number", factorChoices$$inline_46.ONE_MINUS_SRC_ALPHA, "", {choices:factorChoices$$inline_46}));
var canvas2DOptions$$inline_47 = GFX$$inline_40.stageOptions.register(new OptionSet$$inline_42("Canvas2D Options"));
GFX$$inline_40.clipDirtyRegions = canvas2DOptions$$inline_47.register(new Option$$inline_41("", "clipDirtyRegions", "boolean", !1, "Clip dirty regions."));
GFX$$inline_40.clipCanvas = canvas2DOptions$$inline_47.register(new Option$$inline_41("", "clipCanvas", "boolean", !1, "Clip Regions."));
GFX$$inline_40.cull = canvas2DOptions$$inline_47.register(new Option$$inline_41("", "cull", "boolean", !1, "Enable culling."));
GFX$$inline_40.snapToDevicePixels = canvas2DOptions$$inline_47.register(new Option$$inline_41("", "snapToDevicePixels", "boolean", !1, ""));
GFX$$inline_40.imageSmoothing = canvas2DOptions$$inline_47.register(new Option$$inline_41("", "imageSmoothing", "boolean", !1, ""));
GFX$$inline_40.masking = canvas2DOptions$$inline_47.register(new Option$$inline_41("", "masking", "boolean", !0, "Composite Mask."));
GFX$$inline_40.blending = canvas2DOptions$$inline_47.register(new Option$$inline_41("", "blending", "boolean", !0, ""));
GFX$$inline_40.debugLayers = canvas2DOptions$$inline_47.register(new Option$$inline_41("", "debugLayers", "boolean", !1, ""));
GFX$$inline_40.filters = canvas2DOptions$$inline_47.register(new Option$$inline_41("", "filters", "boolean", !0, ""));
GFX$$inline_40.cacheShapes = canvas2DOptions$$inline_47.register(new Option$$inline_41("", "cacheShapes", "boolean", !0, ""));
GFX$$inline_40.cacheShapesMaxSize = canvas2DOptions$$inline_47.register(new Option$$inline_41("", "cacheShapesMaxSize", "number", 256, "", {range:{min:1, max:1024, step:1}}));
GFX$$inline_40.cacheShapesThreshold = canvas2DOptions$$inline_47.register(new Option$$inline_41("", "cacheShapesThreshold", "number", 256, "", {range:{min:1, max:1024, step:1}}));
(function(k) {
  (function(p) {
    (function(g) {
      function b(a, e, c, d) {
        var b = 1 - d;
        return a * b * b + 2 * e * b * d + c * d * d;
      }
      function w(a, e, c, d, b) {
        var h = b * b, g = 1 - b, m = g * g;
        return a * g * m + 3 * e * b * m + 3 * c * g * h + d * b * h;
      }
      var v = k.NumberUtilities.clamp, a = k.NumberUtilities.pow2, l = k.NumberUtilities.epsilonEquals;
      g.radianToDegrees = function(a) {
        return 180 * a / Math.PI;
      };
      g.degreesToRadian = function(a) {
        return a * Math.PI / 180;
      };
      g.quadraticBezier = b;
      g.quadraticBezierExtreme = function(a, e, c) {
        var d = (a - e) / (a - 2 * e + c);
        return 0 > d ? a : 1 < d ? c : b(a, e, c, d);
      };
      g.cubicBezier = w;
      g.cubicBezierExtremes = function(a, e, c, d) {
        var b = e - a, h;
        h = 2 * (c - e);
        var g = d - c;
        b + g === h && (g *= 1.0001);
        var m = 2 * b - h, l = h - 2 * b, l = Math.sqrt(l * l - 4 * b * (b - h + g));
        h = 2 * (b - h + g);
        b = (m + l) / h;
        m = (m - l) / h;
        l = [];
        0 <= b && 1 >= b && l.push(w(a, e, c, d, b));
        0 <= m && 1 >= m && l.push(w(a, e, c, d, m));
        return l;
      };
      var q = function() {
        function a(e, c) {
          this.x = e;
          this.y = c;
        }
        a.prototype.setElements = function(e, c) {
          this.x = e;
          this.y = c;
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
        a.prototype.inTriangle = function(e, c, a) {
          var f = e.y * a.x - e.x * a.y + (a.y - e.y) * this.x + (e.x - a.x) * this.y, d = e.x * c.y - e.y * c.x + (e.y - c.y) * this.x + (c.x - e.x) * this.y;
          if (0 > f != 0 > d) {
            return !1;
          }
          e = -c.y * a.x + e.y * (a.x - c.x) + e.x * (c.y - a.y) + c.x * a.y;
          0 > e && (f = -f, d = -d, e = -e);
          return 0 < f && 0 < d && f + d < e;
        };
        a.createEmpty = function() {
          return new a(0, 0);
        };
        a.createEmptyPoints = function(e) {
          for (var c = [], d = 0;d < e;d++) {
            c.push(new a(0, 0));
          }
          return c;
        };
        return a;
      }();
      g.Point = q;
      var h = function() {
        function a(e, c, f) {
          this.x = e;
          this.y = c;
          this.z = f;
        }
        a.prototype.setElements = function(e, c, a) {
          this.x = e;
          this.y = c;
          this.z = a;
          return this;
        };
        a.prototype.set = function(e) {
          this.x = e.x;
          this.y = e.y;
          this.z = e.z;
          return this;
        };
        a.prototype.dot = function(e) {
          return this.x * e.x + this.y * e.y + this.z * e.z;
        };
        a.prototype.cross = function(e) {
          var c = this.z * e.x - this.x * e.z, a = this.x * e.y - this.y * e.x;
          this.x = this.y * e.z - this.z * e.y;
          this.y = c;
          this.z = a;
          return this;
        };
        a.prototype.squaredLength = function() {
          return this.dot(this);
        };
        a.prototype.sub = function(e) {
          this.x -= e.x;
          this.y -= e.y;
          this.z -= e.z;
          return this;
        };
        a.prototype.mul = function(e) {
          this.x *= e;
          this.y *= e;
          this.z *= e;
          return this;
        };
        a.prototype.normalize = function() {
          var e = Math.sqrt(this.squaredLength());
          1E-5 < e ? this.mul(1 / e) : this.setElements(0, 0, 0);
          return this;
        };
        a.prototype.clone = function() {
          return new a(this.x, this.y, this.z);
        };
        a.prototype.toString = function(e) {
          void 0 === e && (e = 2);
          return "{x: " + this.x.toFixed(e) + ", y: " + this.y.toFixed(e) + ", z: " + this.z.toFixed(e) + "}";
        };
        a.createEmpty = function() {
          return new a(0, 0, 0);
        };
        a.createEmptyPoints = function(e) {
          for (var c = [], d = 0;d < e;d++) {
            c.push(new a(0, 0, 0));
          }
          return c;
        };
        return a;
      }();
      g.Point3D = h;
      var t = function() {
        function a(e, c, d, b) {
          this.setElements(e, c, d, b);
          a.allocationCount++;
        }
        a.prototype.setElements = function(e, c, a, f) {
          this.x = e;
          this.y = c;
          this.w = a;
          this.h = f;
        };
        a.prototype.set = function(e) {
          this.x = e.x;
          this.y = e.y;
          this.w = e.w;
          this.h = e.h;
        };
        a.prototype.contains = function(e) {
          var c = e.x + e.w, a = e.y + e.h, f = this.x + this.w, d = this.y + this.h;
          return e.x >= this.x && e.x < f && e.y >= this.y && e.y < d && c > this.x && c <= f && a > this.y && a <= d;
        };
        a.prototype.containsPoint = function(e) {
          return e.x >= this.x && e.x < this.x + this.w && e.y >= this.y && e.y < this.y + this.h;
        };
        a.prototype.isContained = function(e) {
          for (var c = 0;c < e.length;c++) {
            if (e[c].contains(this)) {
              return !0;
            }
          }
          return !1;
        };
        a.prototype.isSmallerThan = function(e) {
          return this.w < e.w && this.h < e.h;
        };
        a.prototype.isLargerThan = function(e) {
          return this.w > e.w && this.h > e.h;
        };
        a.prototype.union = function(e) {
          if (this.isEmpty()) {
            this.set(e);
          } else {
            if (!e.isEmpty()) {
              var c = this.x, a = this.y;
              this.x > e.x && (c = e.x);
              this.y > e.y && (a = e.y);
              var f = this.x + this.w;
              f < e.x + e.w && (f = e.x + e.w);
              var d = this.y + this.h;
              d < e.y + e.h && (d = e.y + e.h);
              this.x = c;
              this.y = a;
              this.w = f - c;
              this.h = d - a;
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
          var c = a.createEmpty();
          if (this.isEmpty() || e.isEmpty()) {
            return c.setEmpty(), c;
          }
          c.x = Math.max(this.x, e.x);
          c.y = Math.max(this.y, e.y);
          c.w = Math.min(this.x + this.w, e.x + e.w) - c.x;
          c.h = Math.min(this.y + this.h, e.y + e.h) - c.y;
          c.isEmpty() && c.setEmpty();
          this.set(c);
        };
        a.prototype.intersects = function(e) {
          if (this.isEmpty() || e.isEmpty()) {
            return !1;
          }
          var c = Math.max(this.x, e.x), a = Math.max(this.y, e.y), c = Math.min(this.x + this.w, e.x + e.w) - c;
          e = Math.min(this.y + this.h, e.y + e.h) - a;
          return !(0 >= c || 0 >= e);
        };
        a.prototype.intersectsTransformedAABB = function(e, c) {
          var d = a._temporary;
          d.set(e);
          c.transformRectangleAABB(d);
          return this.intersects(d);
        };
        a.prototype.intersectsTranslated = function(e, c, a) {
          if (this.isEmpty() || e.isEmpty()) {
            return !1;
          }
          var f = Math.max(this.x, e.x + c), d = Math.max(this.y, e.y + a);
          c = Math.min(this.x + this.w, e.x + c + e.w) - f;
          e = Math.min(this.y + this.h, e.y + a + e.h) - d;
          return !(0 >= c || 0 >= e);
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
          var e = Math.ceil(this.x + this.w), c = Math.ceil(this.y + this.h);
          this.x = Math.floor(this.x);
          this.y = Math.floor(this.y);
          this.w = e - this.x;
          this.h = c - this.y;
          return this;
        };
        a.prototype.scale = function(e, c) {
          this.x *= e;
          this.y *= c;
          this.w *= e;
          this.h *= c;
          return this;
        };
        a.prototype.offset = function(e, c) {
          this.x += e;
          this.y += c;
          return this;
        };
        a.prototype.resize = function(e, c) {
          this.w += e;
          this.h += c;
          return this;
        };
        a.prototype.expand = function(e, c) {
          this.offset(-e, -c).resize(2 * e, 2 * c);
          return this;
        };
        a.prototype.getCenter = function() {
          return new q(this.x + this.w / 2, this.y + this.h / 2);
        };
        a.prototype.getAbsoluteBounds = function() {
          return new a(0, 0, this.w, this.h);
        };
        a.prototype.toString = function(e) {
          void 0 === e && (e = 2);
          return "{" + this.x.toFixed(e) + ", " + this.y.toFixed(e) + ", " + this.w.toFixed(e) + ", " + this.h.toFixed(e) + "}";
        };
        a.createEmpty = function() {
          var e = a.allocate();
          e.setEmpty();
          return e;
        };
        a.createSquare = function() {
          return new a(-512, -512, 1024, 1024);
        };
        a.createMaxI16 = function() {
          return new a(-32768, -32768, 65535, 65535);
        };
        a.prototype.setMaxI16 = function() {
          this.setElements(-32768, -32768, 65535, 65535);
        };
        a.prototype.getCorners = function(e) {
          e[0].x = this.x;
          e[0].y = this.y;
          e[1].x = this.x + this.w;
          e[1].y = this.y;
          e[2].x = this.x + this.w;
          e[2].y = this.y + this.h;
          e[3].x = this.x;
          e[3].y = this.y + this.h;
        };
        a.allocationCount = 0;
        a._temporary = new a(0, 0, 0, 0);
        a._dirtyStack = [];
        return a;
      }();
      g.Rectangle = t;
      var r = function() {
        function a(e) {
          this.corners = e.map(function(c) {
            return c.clone();
          });
          this.axes = [e[1].clone().sub(e[0]), e[3].clone().sub(e[0])];
          this.origins = [];
          for (var c = 0;2 > c;c++) {
            this.axes[c].mul(1 / this.axes[c].squaredLength()), this.origins.push(e[0].dot(this.axes[c]));
          }
        }
        a.prototype.getBounds = function() {
          return a.getBounds(this.corners);
        };
        a.getBounds = function(e) {
          for (var c = new q(Number.MAX_VALUE, Number.MAX_VALUE), a = new q(Number.MIN_VALUE, Number.MIN_VALUE), f = 0;4 > f;f++) {
            var d = e[f].x, b = e[f].y;
            c.x = Math.min(c.x, d);
            c.y = Math.min(c.y, b);
            a.x = Math.max(a.x, d);
            a.y = Math.max(a.y, b);
          }
          return new t(c.x, c.y, a.x - c.x, a.y - c.y);
        };
        a.prototype.intersects = function(e) {
          return this.intersectsOneWay(e) && e.intersectsOneWay(this);
        };
        a.prototype.intersectsOneWay = function(e) {
          for (var c = 0;2 > c;c++) {
            for (var a = 0;4 > a;a++) {
              var f = e.corners[a].dot(this.axes[c]), d, b;
              0 === a ? b = d = f : f < d ? d = f : f > b && (b = f);
            }
            if (d > 1 + this.origins[c] || b < this.origins[c]) {
              return !1;
            }
          }
          return !0;
        };
        return a;
      }();
      g.OBB = r;
      (function(a) {
        a[a.Unknown = 0] = "Unknown";
        a[a.Identity = 1] = "Identity";
        a[a.Translation = 2] = "Translation";
      })(g.MatrixType || (g.MatrixType = {}));
      var m = function() {
        function a(e, c, d, b, h, g) {
          this._data = new Float64Array(6);
          this._type = 0;
          this.setElements(e, c, d, b, h, g);
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
        a.prototype.setElements = function(a, c, f, d, b, h) {
          var g = this._data;
          g[0] = a;
          g[1] = c;
          g[2] = f;
          g[3] = d;
          g[4] = b;
          g[5] = h;
          this._type = 0;
        };
        a.prototype.set = function(a) {
          var c = this._data, f = a._data;
          c[0] = f[0];
          c[1] = f[1];
          c[2] = f[2];
          c[3] = f[3];
          c[4] = f[4];
          c[5] = f[5];
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
          var c = this._data;
          a = a._data;
          return c[0] === a[0] && c[1] === a[1] && c[2] === a[2] && c[3] === a[3] && c[4] === a[4] && c[5] === a[5];
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
        a.prototype.transform = function(a, c, f, d, b, h) {
          var g = this._data, m = g[0], l = g[1], r = g[2], k = g[3], t = g[4], u = g[5];
          g[0] = m * a + r * c;
          g[1] = l * a + k * c;
          g[2] = m * f + r * d;
          g[3] = l * f + k * d;
          g[4] = m * b + r * h + t;
          g[5] = l * b + k * h + u;
          this._type = 0;
          return this;
        };
        a.prototype.transformRectangle = function(a, c) {
          var f = this._data, d = f[0], b = f[1], h = f[2], g = f[3], m = f[4], f = f[5], l = a.x, r = a.y, k = a.w, t = a.h;
          c[0].x = d * l + h * r + m;
          c[0].y = b * l + g * r + f;
          c[1].x = d * (l + k) + h * r + m;
          c[1].y = b * (l + k) + g * r + f;
          c[2].x = d * (l + k) + h * (r + t) + m;
          c[2].y = b * (l + k) + g * (r + t) + f;
          c[3].x = d * l + h * (r + t) + m;
          c[3].y = b * l + g * (r + t) + f;
        };
        a.prototype.isTranslationOnly = function() {
          if (2 === this._type) {
            return !0;
          }
          var a = this._data;
          return 1 === a[0] && 0 === a[1] && 0 === a[2] && 1 === a[3] || l(a[0], 1) && l(a[1], 0) && l(a[2], 0) && l(a[3], 1) ? (this._type = 2, !0) : !1;
        };
        a.prototype.transformRectangleAABB = function(a) {
          var c = this._data;
          if (1 !== this._type) {
            if (2 === this._type) {
              a.x += c[4], a.y += c[5];
            } else {
              var f = c[0], d = c[1], b = c[2], h = c[3], g = c[4], m = c[5], l = a.x, r = a.y, k = a.w, t = a.h, c = f * l + b * r + g, u = d * l + h * r + m, q = f * (l + k) + b * r + g, p = d * (l + k) + h * r + m, v = f * (l + k) + b * (r + t) + g, k = d * (l + k) + h * (r + t) + m, f = f * l + b * (r + t) + g, d = d * l + h * (r + t) + m, h = 0;
              c > q && (h = c, c = q, q = h);
              v > f && (h = v, v = f, f = h);
              a.x = c < v ? c : v;
              a.w = (q > f ? q : f) - a.x;
              u > p && (h = u, u = p, p = h);
              k > d && (h = k, k = d, d = h);
              a.y = u < k ? u : k;
              a.h = (p > d ? p : d) - a.y;
            }
          }
        };
        a.prototype.scale = function(a, c) {
          var f = this._data;
          f[0] *= a;
          f[1] *= c;
          f[2] *= a;
          f[3] *= c;
          f[4] *= a;
          f[5] *= c;
          this._type = 0;
          return this;
        };
        a.prototype.scaleClone = function(a, c) {
          return 1 === a && 1 === c ? this : this.clone().scale(a, c);
        };
        a.prototype.rotate = function(a) {
          var c = this._data, f = c[0], d = c[1], b = c[2], h = c[3], g = c[4], m = c[5], l = Math.cos(a);
          a = Math.sin(a);
          c[0] = l * f - a * d;
          c[1] = a * f + l * d;
          c[2] = l * b - a * h;
          c[3] = a * b + l * h;
          c[4] = l * g - a * m;
          c[5] = a * g + l * m;
          this._type = 0;
          return this;
        };
        a.prototype.concat = function(a) {
          if (1 === a._type) {
            return this;
          }
          var c = this._data;
          a = a._data;
          var f = c[0] * a[0], d = 0, b = 0, h = c[3] * a[3], g = c[4] * a[0] + a[4], m = c[5] * a[3] + a[5];
          if (0 !== c[1] || 0 !== c[2] || 0 !== a[1] || 0 !== a[2]) {
            f += c[1] * a[2], h += c[2] * a[1], d += c[0] * a[1] + c[1] * a[3], b += c[2] * a[0] + c[3] * a[2], g += c[5] * a[2], m += c[4] * a[1];
          }
          c[0] = f;
          c[1] = d;
          c[2] = b;
          c[3] = h;
          c[4] = g;
          c[5] = m;
          this._type = 0;
          return this;
        };
        a.prototype.concatClone = function(a) {
          return this.clone().concat(a);
        };
        a.prototype.preMultiply = function(a) {
          var c = this._data, f = a._data;
          if (2 === a._type && this._type & 3) {
            c[4] += f[4], c[5] += f[5], this._type = 2;
          } else {
            if (1 !== a._type) {
              a = f[0] * c[0];
              var d = 0, b = 0, h = f[3] * c[3], g = f[4] * c[0] + c[4], m = f[5] * c[3] + c[5];
              if (0 !== f[1] || 0 !== f[2] || 0 !== c[1] || 0 !== c[2]) {
                a += f[1] * c[2], h += f[2] * c[1], d += f[0] * c[1] + f[1] * c[3], b += f[2] * c[0] + f[3] * c[2], g += f[5] * c[2], m += f[4] * c[1];
              }
              c[0] = a;
              c[1] = d;
              c[2] = b;
              c[3] = h;
              c[4] = g;
              c[5] = m;
              this._type = 0;
            }
          }
        };
        a.prototype.translate = function(a, c) {
          var f = this._data;
          f[4] += a;
          f[5] += c;
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
            var c = this._data, f = a.x, d = a.y;
            a.x = c[0] * f + c[2] * d + c[4];
            a.y = c[1] * f + c[3] * d + c[5];
          }
        };
        a.prototype.transformPoints = function(a) {
          if (1 !== this._type) {
            for (var c = 0;c < a.length;c++) {
              this.transformPoint(a[c]);
            }
          }
        };
        a.prototype.deltaTransformPoint = function(a) {
          if (1 !== this._type) {
            var c = this._data, f = a.x, d = a.y;
            a.x = c[0] * f + c[2] * d;
            a.y = c[1] * f + c[3] * d;
          }
        };
        a.prototype.inverse = function(a) {
          var c = this._data, f = a._data;
          if (1 === this._type) {
            a.setIdentity();
          } else {
            if (2 === this._type) {
              f[0] = 1, f[1] = 0, f[2] = 0, f[3] = 1, f[4] = -c[4], f[5] = -c[5], a._type = 2;
            } else {
              var d = c[1], b = c[2], h = c[4], g = c[5];
              if (0 === d && 0 === b) {
                var m = f[0] = 1 / c[0], c = f[3] = 1 / c[3];
                f[1] = 0;
                f[2] = 0;
                f[4] = -m * h;
                f[5] = -c * g;
              } else {
                var m = c[0], c = c[3], l = m * c - d * b;
                if (0 === l) {
                  a.setIdentity();
                  return;
                }
                l = 1 / l;
                f[0] = c * l;
                d = f[1] = -d * l;
                b = f[2] = -b * l;
                c = f[3] = m * l;
                f[4] = -(f[0] * h + b * g);
                f[5] = -(d * h + c * g);
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
          var c = Math.sqrt(a[0] * a[0] + a[1] * a[1]);
          return 0 < a[0] ? c : -c;
        };
        a.prototype.getScaleY = function() {
          var a = this._data;
          if (0 === a[2] && 1 === a[3]) {
            return 1;
          }
          var c = Math.sqrt(a[2] * a[2] + a[3] * a[3]);
          return 0 < a[3] ? c : -c;
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
          var c = this._data;
          return "{" + c[0].toFixed(a) + ", " + c[1].toFixed(a) + ", " + c[2].toFixed(a) + ", " + c[3].toFixed(a) + ", " + c[4].toFixed(a) + ", " + c[5].toFixed(a) + "}";
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
          var e = this._data, c = a._createSVGMatrix();
          try {
            c.a = e[0], c.b = e[1], c.c = e[2], c.d = e[3], c.e = e[4], c.f = e[5];
          } catch (d) {
            return a._createSVGMatrix();
          }
          return c;
        };
        a.prototype.snap = function() {
          var a = this._data;
          return this.isTranslationOnly() ? (a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 1, a[4] = Math.round(a[4]), a[5] = Math.round(a[5]), this._type = 2, !0) : !1;
        };
        a.createIdentitySVGMatrix = function() {
          return a._createSVGMatrix();
        };
        a.createSVGMatrixFromArray = function(e) {
          var c = a._createSVGMatrix();
          c.a = e[0];
          c.b = e[1];
          c.c = e[2];
          c.d = e[3];
          c.e = e[4];
          c.f = e[5];
          return c;
        };
        a.allocationCount = 0;
        a._dirtyStack = [];
        a.multiply = function(a, c) {
          var f = c._data;
          a.transform(f[0], f[1], f[2], f[3], f[4], f[5]);
        };
        return a;
      }();
      g.Matrix = m;
      m = function() {
        function a(e) {
          this._m = new Float32Array(e);
        }
        a.prototype.asWebGLMatrix = function() {
          return this._m;
        };
        a.createCameraLookAt = function(e, c, d) {
          c = e.clone().sub(c).normalize();
          d = d.clone().cross(c).normalize();
          var b = c.clone().cross(d);
          return new a([d.x, d.y, d.z, 0, b.x, b.y, b.z, 0, c.x, c.y, c.z, 0, e.x, e.y, e.z, 1]);
        };
        a.createLookAt = function(e, c, d) {
          c = e.clone().sub(c).normalize();
          d = d.clone().cross(c).normalize();
          var b = c.clone().cross(d);
          return new a([d.x, b.x, c.x, 0, b.x, b.y, c.y, 0, c.x, b.z, c.z, 0, -d.dot(e), -b.dot(e), -c.dot(e), 1]);
        };
        a.prototype.mul = function(a) {
          a = [a.x, a.y, a.z, 0];
          for (var c = this._m, f = [], d = 0;4 > d;d++) {
            f[d] = 0;
            for (var b = 4 * d, g = 0;4 > g;g++) {
              f[d] += c[b + g] * a[g];
            }
          }
          return new h(f[0], f[1], f[2]);
        };
        a.create2DProjection = function(e, c, d) {
          return new a([2 / e, 0, 0, 0, 0, -2 / c, 0, 0, 0, 0, 2 / d, 0, -1, 1, 0, 1]);
        };
        a.createPerspective = function(e) {
          e = Math.tan(.5 * Math.PI - .5 * e);
          var c = 1 / -4999.9;
          return new a([e / 1, 0, 0, 0, 0, e, 0, 0, 0, 0, 5000.1 * c, -1, 0, 0, 1E3 * c, 0]);
        };
        a.createIdentity = function() {
          return a.createTranslation(0, 0);
        };
        a.createTranslation = function(e, c) {
          return new a([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e, c, 0, 1]);
        };
        a.createXRotation = function(e) {
          var c = Math.cos(e);
          e = Math.sin(e);
          return new a([1, 0, 0, 0, 0, c, e, 0, 0, -e, c, 0, 0, 0, 0, 1]);
        };
        a.createYRotation = function(e) {
          var c = Math.cos(e);
          e = Math.sin(e);
          return new a([c, 0, -e, 0, 0, 1, 0, 0, e, 0, c, 0, 0, 0, 0, 1]);
        };
        a.createZRotation = function(e) {
          var c = Math.cos(e);
          e = Math.sin(e);
          return new a([c, e, 0, 0, -e, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        };
        a.createScale = function(e, c, d) {
          return new a([e, 0, 0, 0, 0, c, 0, 0, 0, 0, d, 0, 0, 0, 0, 1]);
        };
        a.createMultiply = function(e, c) {
          var d = e._m, b = c._m, h = d[0], g = d[1], m = d[2], l = d[3], r = d[4], k = d[5], t = d[6], u = d[7], q = d[8], p = d[9], v = d[10], w = d[11], z = d[12], A = d[13], C = d[14], d = d[15], y = b[0], G = b[1], B = b[2], E = b[3], H = b[4], K = b[5], L = b[6], M = b[7], N = b[8], O = b[9], P = b[10], Q = b[11], R = b[12], S = b[13], T = b[14], b = b[15];
          return new a([h * y + g * H + m * N + l * R, h * G + g * K + m * O + l * S, h * B + g * L + m * P + l * T, h * E + g * M + m * Q + l * b, r * y + k * H + t * N + u * R, r * G + k * K + t * O + u * S, r * B + k * L + t * P + u * T, r * E + k * M + t * Q + u * b, q * y + p * H + v * N + w * R, q * G + p * K + v * O + w * S, q * B + p * L + v * P + w * T, q * E + p * M + v * Q + w * b, z * y + A * H + C * N + d * R, z * G + A * K + C * O + d * S, z * B + A * L + C * P + d * T, z * E + A * 
          M + C * Q + d * b]);
        };
        a.createInverse = function(e) {
          var c = e._m;
          e = c[0];
          var d = c[1], b = c[2], h = c[3], g = c[4], m = c[5], l = c[6], r = c[7], k = c[8], t = c[9], u = c[10], q = c[11], p = c[12], v = c[13], w = c[14], c = c[15], z = u * c, A = w * q, C = l * c, y = w * r, G = l * q, B = u * r, E = b * c, H = w * h, K = b * q, L = u * h, M = b * r, N = l * h, O = k * v, P = p * t, Q = g * v, R = p * m, S = g * t, T = k * m, Z = e * v, aa = p * d, ba = e * t, ca = k * d, da = e * m, ea = g * d, ga = z * m + y * t + G * v - (A * m + C * t + B * v), ha = A * 
          d + E * t + L * v - (z * d + H * t + K * v), v = C * d + H * m + M * v - (y * d + E * m + N * v), d = B * d + K * m + N * t - (G * d + L * m + M * t), m = 1 / (e * ga + g * ha + k * v + p * d);
          return new a([m * ga, m * ha, m * v, m * d, m * (A * g + C * k + B * p - (z * g + y * k + G * p)), m * (z * e + H * k + K * p - (A * e + E * k + L * p)), m * (y * e + E * g + N * p - (C * e + H * g + M * p)), m * (G * e + L * g + M * k - (B * e + K * g + N * k)), m * (O * r + R * q + S * c - (P * r + Q * q + T * c)), m * (P * h + Z * q + ca * c - (O * h + aa * q + ba * c)), m * (Q * h + aa * r + da * c - (R * h + Z * r + ea * c)), m * (T * h + ba * r + ea * q - (S * h + ca * r + da * q)), 
          m * (Q * u + T * w + P * l - (S * w + O * l + R * u)), m * (ba * w + O * b + aa * u - (Z * u + ca * w + P * b)), m * (Z * l + ea * w + R * b - (da * w + Q * b + aa * l)), m * (da * u + S * b + ca * l - (ba * l + ea * u + T * b))]);
        };
        return a;
      }();
      g.Matrix3D = m;
      m = function() {
        function a(e, c, d) {
          void 0 === d && (d = 7);
          var b = this.size = 1 << d;
          this.sizeInBits = d;
          this.w = e;
          this.h = c;
          this.c = Math.ceil(e / b);
          this.r = Math.ceil(c / b);
          this.grid = [];
          for (e = 0;e < this.r;e++) {
            for (this.grid.push([]), c = 0;c < this.c;c++) {
              this.grid[e][c] = new a.Cell(new t(c * b, e * b, b, b));
            }
          }
        }
        a.prototype.clear = function() {
          for (var a = 0;a < this.r;a++) {
            for (var c = 0;c < this.c;c++) {
              this.grid[a][c].clear();
            }
          }
        };
        a.prototype.getBounds = function() {
          return new t(0, 0, this.w, this.h);
        };
        a.prototype.addDirtyRectangle = function(a) {
          var c = a.x >> this.sizeInBits, f = a.y >> this.sizeInBits;
          if (!(c >= this.c || f >= this.r)) {
            0 > c && (c = 0);
            0 > f && (f = 0);
            var d = this.grid[f][c];
            a = a.clone();
            a.snap();
            if (d.region.contains(a)) {
              d.bounds.isEmpty() ? d.bounds.set(a) : d.bounds.contains(a) || d.bounds.union(a);
            } else {
              for (var b = Math.min(this.c, Math.ceil((a.x + a.w) / this.size)) - c, h = Math.min(this.r, Math.ceil((a.y + a.h) / this.size)) - f, g = 0;g < b;g++) {
                for (var m = 0;m < h;m++) {
                  d = this.grid[f + m][c + g], d = d.region.clone(), d.intersect(a), d.isEmpty() || this.addDirtyRectangle(d);
                }
              }
            }
          }
        };
        a.prototype.gatherRegions = function(a) {
          for (var c = 0;c < this.r;c++) {
            for (var f = 0;f < this.c;f++) {
              this.grid[c][f].bounds.isEmpty() || a.push(this.grid[c][f].bounds);
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
          for (var c = 0, f = 0;f < this.r;f++) {
            for (var d = 0;d < this.c;d++) {
              c += this.grid[f][d].region.area();
            }
          }
          return c / a;
        };
        a.prototype.render = function(a, c) {
          function f(c) {
            a.rect(c.x, c.y, c.w, c.h);
          }
          if (c && c.drawGrid) {
            a.strokeStyle = "white";
            for (var d = 0;d < this.r;d++) {
              for (var b = 0;b < this.c;b++) {
                var h = this.grid[d][b];
                a.beginPath();
                f(h.region);
                a.closePath();
                a.stroke();
              }
            }
          }
          a.strokeStyle = "#E0F8D8";
          for (d = 0;d < this.r;d++) {
            for (b = 0;b < this.c;b++) {
              h = this.grid[d][b], a.beginPath(), f(h.bounds), a.closePath(), a.stroke();
            }
          }
        };
        a.tmpRectangle = t.createEmpty();
        return a;
      }();
      g.DirtyRegion = m;
      (function(a) {
        var e = function() {
          function c(c) {
            this.region = c;
            this.bounds = t.createEmpty();
          }
          c.prototype.clear = function() {
            this.bounds.setEmpty();
          };
          return c;
        }();
        a.Cell = e;
      })(m = g.DirtyRegion || (g.DirtyRegion = {}));
      var u = function() {
        function a(e, c, f, d, b, h) {
          this.index = e;
          this.x = c;
          this.y = f;
          this.scale = h;
          this.bounds = new t(c * d, f * b, d, b);
        }
        a.prototype.getOBB = function() {
          if (this._obb) {
            return this._obb;
          }
          this.bounds.getCorners(a.corners);
          return this._obb = new r(a.corners);
        };
        a.corners = q.createEmptyPoints(4);
        return a;
      }();
      g.Tile = u;
      var d = function() {
        function a(e, c, d, f, b) {
          this.tileW = d;
          this.tileH = f;
          this.scale = b;
          this.w = e;
          this.h = c;
          this.rows = Math.ceil(c / f);
          this.columns = Math.ceil(e / d);
          this.tiles = [];
          for (c = e = 0;c < this.rows;c++) {
            for (var h = 0;h < this.columns;h++) {
              this.tiles.push(new u(e++, h, c, d, f, b));
            }
          }
        }
        a.prototype.getTiles = function(a, c) {
          if (c.emptyArea(a)) {
            return [];
          }
          if (c.infiniteArea(a)) {
            return this.tiles;
          }
          var d = this.columns * this.rows;
          return 40 > d && c.isScaleOrRotation() ? this.getFewTiles(a, c, 10 < d) : this.getManyTiles(a, c);
        };
        a.prototype.getFewTiles = function(e, c, d) {
          void 0 === d && (d = !0);
          if (c.isTranslationOnly() && 1 === this.tiles.length) {
            return this.tiles[0].bounds.intersectsTranslated(e, c.tx, c.ty) ? [this.tiles[0]] : [];
          }
          c.transformRectangle(e, a._points);
          var b;
          e = new t(0, 0, this.w, this.h);
          d && (b = new r(a._points));
          e.intersect(r.getBounds(a._points));
          if (e.isEmpty()) {
            return [];
          }
          var h = e.x / this.tileW | 0;
          c = e.y / this.tileH | 0;
          var g = Math.ceil((e.x + e.w) / this.tileW) | 0, m = Math.ceil((e.y + e.h) / this.tileH) | 0, h = v(h, 0, this.columns), g = v(g, 0, this.columns);
          c = v(c, 0, this.rows);
          for (var m = v(m, 0, this.rows), l = [];h < g;h++) {
            for (var k = c;k < m;k++) {
              var u = this.tiles[k * this.columns + h];
              u.bounds.intersects(e) && (d ? u.getOBB().intersects(b) : 1) && l.push(u);
            }
          }
          return l;
        };
        a.prototype.getManyTiles = function(e, c) {
          function d(c, a, e) {
            return (c - a.x) * (e.y - a.y) / (e.x - a.x) + a.y;
          }
          function b(c, a, e, d, f) {
            if (!(0 > e || e >= a.columns)) {
              for (d = v(d, 0, a.rows), f = v(f + 1, 0, a.rows);d < f;d++) {
                c.push(a.tiles[d * a.columns + e]);
              }
            }
          }
          var h = a._points;
          c.transformRectangle(e, h);
          for (var g = h[0].x < h[1].x ? 0 : 1, m = h[2].x < h[3].x ? 2 : 3, m = h[g].x < h[m].x ? g : m, g = [], l = 0;5 > l;l++, m++) {
            g.push(h[m % 4]);
          }
          (g[1].x - g[0].x) * (g[3].y - g[0].y) < (g[1].y - g[0].y) * (g[3].x - g[0].x) && (h = g[1], g[1] = g[3], g[3] = h);
          var h = [], r, k, m = Math.floor(g[0].x / this.tileW), l = (m + 1) * this.tileW;
          if (g[2].x < l) {
            r = Math.min(g[0].y, g[1].y, g[2].y, g[3].y);
            k = Math.max(g[0].y, g[1].y, g[2].y, g[3].y);
            var t = Math.floor(r / this.tileH), u = Math.floor(k / this.tileH);
            b(h, this, m, t, u);
            return h;
          }
          var q = 0, p = 4, w = !1;
          if (g[0].x === g[1].x || g[0].x === g[3].x) {
            g[0].x === g[1].x ? (w = !0, q++) : p--, r = d(l, g[q], g[q + 1]), k = d(l, g[p], g[p - 1]), t = Math.floor(g[q].y / this.tileH), u = Math.floor(g[p].y / this.tileH), b(h, this, m, t, u), m++;
          }
          do {
            var D, z, A, C;
            g[q + 1].x < l ? (D = g[q + 1].y, A = !0) : (D = d(l, g[q], g[q + 1]), A = !1);
            g[p - 1].x < l ? (z = g[p - 1].y, C = !0) : (z = d(l, g[p], g[p - 1]), C = !1);
            t = Math.floor((g[q].y < g[q + 1].y ? r : D) / this.tileH);
            u = Math.floor((g[p].y > g[p - 1].y ? k : z) / this.tileH);
            b(h, this, m, t, u);
            if (A && w) {
              break;
            }
            A ? (w = !0, q++, r = d(l, g[q], g[q + 1])) : r = D;
            C ? (p--, k = d(l, g[p], g[p - 1])) : k = z;
            m++;
            l = (m + 1) * this.tileW;
          } while (q < p);
          return h;
        };
        a._points = q.createEmptyPoints(4);
        return a;
      }();
      g.TileCache = d;
      m = function() {
        function f(a, c, d) {
          this._cacheLevels = [];
          this._source = a;
          this._tileSize = c;
          this._minUntiledSize = d;
        }
        f.prototype._getTilesAtScale = function(e, c, f) {
          var b = Math.max(c.getAbsoluteScaleX(), c.getAbsoluteScaleY()), h = 0;
          1 !== b && (h = v(Math.round(Math.log(1 / b) / Math.LN2), -5, 3));
          b = a(h);
          if (this._source.hasFlags(1048576)) {
            for (;;) {
              b = a(h);
              if (f.contains(this._source.getBounds().getAbsoluteBounds().clone().scale(b, b))) {
                break;
              }
              h--;
            }
          }
          this._source.hasFlags(2097152) || (h = v(h, -5, 0));
          b = a(h);
          f = 5 + h;
          h = this._cacheLevels[f];
          if (!h) {
            var h = this._source.getBounds().getAbsoluteBounds().clone().scale(b, b), g, m;
            this._source.hasFlags(1048576) || !this._source.hasFlags(4194304) || Math.max(h.w, h.h) <= this._minUntiledSize ? (g = h.w, m = h.h) : g = m = this._tileSize;
            h = this._cacheLevels[f] = new d(h.w, h.h, g, m, b);
          }
          return h.getTiles(e, c.scaleClone(b, b));
        };
        f.prototype.fetchTiles = function(a, c, d, f) {
          var b = new t(0, 0, d.canvas.width, d.canvas.height);
          a = this._getTilesAtScale(a, c, b);
          var h;
          c = this._source;
          for (var g = 0;g < a.length;g++) {
            var m = a[g];
            m.cachedSurfaceRegion && m.cachedSurfaceRegion.surface && !c.hasFlags(1048592) || (h || (h = []), h.push(m));
          }
          h && this._cacheTiles(d, h, f, b);
          c.removeFlags(16);
          return a;
        };
        f.prototype._getTileBounds = function(a) {
          for (var c = t.createEmpty(), d = 0;d < a.length;d++) {
            c.union(a[d].bounds);
          }
          return c;
        };
        f.prototype._cacheTiles = function(a, c, d, f, b) {
          void 0 === b && (b = 4);
          var h = this._getTileBounds(c);
          a.save();
          a.setTransform(1, 0, 0, 1, 0, 0);
          a.clearRect(0, 0, f.w, f.h);
          a.translate(-h.x, -h.y);
          a.scale(c[0].scale, c[0].scale);
          var g = this._source.getBounds();
          a.translate(-g.x, -g.y);
          2 <= p.traceLevel && p.writer && p.writer.writeLn("Rendering Tiles: " + h);
          this._source.render(a, 0);
          a.restore();
          for (var g = null, m = 0;m < c.length;m++) {
            var l = c[m], r = l.bounds.clone();
            r.x -= h.x;
            r.y -= h.y;
            f.contains(r) || (g || (g = []), g.push(l));
            l.cachedSurfaceRegion = d(l.cachedSurfaceRegion, a, r);
          }
          g && (2 <= g.length ? (c = g.slice(0, g.length / 2 | 0), h = g.slice(c.length), this._cacheTiles(a, c, d, f, b - 1), this._cacheTiles(a, h, d, f, b - 1)) : this._cacheTiles(a, g, d, f, b - 1));
        };
        return f;
      }();
      g.RenderableTileCache = m;
    })(p.Geometry || (p.Geometry = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(k, p) {
  function g() {
    this.constructor = k;
  }
  for (var b in p) {
    p.hasOwnProperty(b) && (k[b] = p[b]);
  }
  g.prototype = p.prototype;
  k.prototype = new g;
};
(function(k) {
  (function(p) {
    var g = k.IntegerUtilities.roundToMultipleOfPowerOfTwo, b = p.Geometry.Rectangle;
    (function(k) {
      var v = function(a) {
        function b() {
          a.apply(this, arguments);
        }
        __extends(b, a);
        return b;
      }(p.Geometry.Rectangle);
      k.Region = v;
      var a = function() {
        function a(b, d) {
          this._root = new l(0, 0, b | 0, d | 0, !1);
        }
        a.prototype.allocate = function(a, d) {
          a = Math.ceil(a);
          d = Math.ceil(d);
          var f = this._root.insert(a, d);
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
      k.CompactAllocator = a;
      var l = function(b) {
        function h(a, f, e, c, n) {
          b.call(this, a, f, e, c);
          this._children = null;
          this._horizontal = n;
          this.allocated = !1;
        }
        __extends(h, b);
        h.prototype.clear = function() {
          this._children = null;
          this.allocated = !1;
        };
        h.prototype.insert = function(a, f) {
          return this._insert(a, f, 0);
        };
        h.prototype._insert = function(d, f, e) {
          if (!(e > a.MAX_DEPTH || this.allocated || this.w < d || this.h < f)) {
            if (this._children) {
              var c;
              if ((c = this._children[0]._insert(d, f, e + 1)) || (c = this._children[1]._insert(d, f, e + 1))) {
                return c;
              }
            } else {
              return c = !this._horizontal, a.RANDOM_ORIENTATION && (c = .5 <= Math.random()), this._children = this._horizontal ? [new h(this.x, this.y, this.w, f, !1), new h(this.x, this.y + f, this.w, this.h - f, c)] : [new h(this.x, this.y, d, this.h, !0), new h(this.x + d, this.y, this.w - d, this.h, c)], c = this._children[0], c.w === d && c.h === f ? (c.allocated = !0, c) : this._insert(d, f, e + 1);
            }
          }
        };
        return h;
      }(k.Region), q = function() {
        function a(b, d, f, e) {
          this._columns = b / f | 0;
          this._rows = d / e | 0;
          this._sizeW = f;
          this._sizeH = e;
          this._freeList = [];
          this._index = 0;
          this._total = this._columns * this._rows;
        }
        a.prototype.allocate = function(a, d) {
          a = Math.ceil(a);
          d = Math.ceil(d);
          var f = this._sizeW, e = this._sizeH;
          if (a > f || d > e) {
            return null;
          }
          var c = this._freeList, b = this._index;
          return 0 < c.length ? (f = c.pop(), f.w = a, f.h = d, f.allocated = !0, f) : b < this._total ? (c = b / this._columns | 0, f = new h((b - c * this._columns) * f, c * e, a, d), f.index = b, f.allocator = this, f.allocated = !0, this._index++, f) : null;
        };
        a.prototype.free = function(a) {
          a.allocated = !1;
          this._freeList.push(a);
        };
        return a;
      }();
      k.GridAllocator = q;
      var h = function(a) {
        function b(d, f, e, c) {
          a.call(this, d, f, e, c);
          this.index = -1;
        }
        __extends(b, a);
        return b;
      }(k.Region);
      k.GridCell = h;
      var t = function() {
        return function(a, b, d) {
          this.size = a;
          this.region = b;
          this.allocator = d;
        };
      }(), r = function(a) {
        function b(d, f, e, c, h) {
          a.call(this, d, f, e, c);
          this.region = h;
        }
        __extends(b, a);
        return b;
      }(k.Region);
      k.BucketCell = r;
      v = function() {
        function a(b, d) {
          this._buckets = [];
          this._w = b | 0;
          this._h = d | 0;
          this._filled = 0;
        }
        a.prototype.allocate = function(a, d) {
          a = Math.ceil(a);
          d = Math.ceil(d);
          var f = Math.max(a, d);
          if (a > this._w || d > this._h) {
            return null;
          }
          var e = null, c, h = this._buckets;
          do {
            for (var m = 0;m < h.length && !(h[m].size >= f && (c = h[m], e = c.allocator.allocate(a, d)));m++) {
            }
            if (!e) {
              var l = this._h - this._filled;
              if (l < d) {
                return null;
              }
              var m = g(f, 8), k = 2 * m;
              k > l && (k = l);
              if (k < m) {
                return null;
              }
              l = new b(0, this._filled, this._w, k);
              this._buckets.push(new t(m, l, new q(l.w, l.h, m, m)));
              this._filled += k;
            }
          } while (!e);
          return new r(c.region.x + e.x, c.region.y + e.y, e.w, e.h, e);
        };
        a.prototype.free = function(a) {
          a.region.allocator.free(a.region);
        };
        return a;
      }();
      k.BucketAllocator = v;
    })(p.RegionAllocator || (p.RegionAllocator = {}));
    (function(b) {
      var g = function() {
        function a(a) {
          this._createSurface = a;
          this._surfaces = [];
        }
        Object.defineProperty(a.prototype, "surfaces", {get:function() {
          return this._surfaces;
        }, enumerable:!0, configurable:!0});
        a.prototype._createNewSurface = function(a, b) {
          var h = this._createSurface(a, b);
          this._surfaces.push(h);
          return h;
        };
        a.prototype.addSurface = function(a) {
          this._surfaces.push(a);
        };
        a.prototype.allocate = function(a, b, h) {
          for (var g = 0;g < this._surfaces.length;g++) {
            var r = this._surfaces[g];
            if (r !== h && (r = r.allocate(a, b))) {
              return r;
            }
          }
          return this._createNewSurface(a, b).allocate(a, b);
        };
        a.prototype.free = function(a) {
        };
        return a;
      }();
      b.SimpleAllocator = g;
    })(p.SurfaceRegionAllocator || (p.SurfaceRegionAllocator = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(p) {
    var g = p.Geometry.Rectangle, b = p.Geometry.Matrix, w = p.Geometry.DirtyRegion;
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
    var v = p.BlendMode;
    (function(a) {
      a[a.None = 0] = "None";
      a[a.BoundsAutoCompute = 2] = "BoundsAutoCompute";
      a[a.IsMask = 4] = "IsMask";
      a[a.Dirty = 16] = "Dirty";
      a[a.InvalidBounds = 256] = "InvalidBounds";
      a[a.InvalidConcatenatedMatrix = 512] = "InvalidConcatenatedMatrix";
      a[a.InvalidInvertedConcatenatedMatrix = 1024] = "InvalidInvertedConcatenatedMatrix";
      a[a.InvalidConcatenatedColorMatrix = 2048] = "InvalidConcatenatedColorMatrix";
      a[a.UpOnAddedOrRemoved = a.InvalidBounds | a.Dirty] = "UpOnAddedOrRemoved";
      a[a.UpOnMoved = a.InvalidBounds | a.Dirty] = "UpOnMoved";
      a[a.DownOnAddedOrRemoved = a.InvalidConcatenatedMatrix | a.InvalidInvertedConcatenatedMatrix | a.InvalidConcatenatedColorMatrix] = "DownOnAddedOrRemoved";
      a[a.DownOnMoved = a.InvalidConcatenatedMatrix | a.InvalidInvertedConcatenatedMatrix | a.InvalidConcatenatedColorMatrix] = "DownOnMoved";
      a[a.UpOnColorMatrixChanged = a.Dirty] = "UpOnColorMatrixChanged";
      a[a.DownOnColorMatrixChanged = a.InvalidConcatenatedColorMatrix] = "DownOnColorMatrixChanged";
      a[a.Visible = 65536] = "Visible";
      a[a.UpOnInvalidate = a.InvalidBounds | a.Dirty] = "UpOnInvalidate";
      a[a.Default = a.BoundsAutoCompute | a.InvalidBounds | a.InvalidConcatenatedMatrix | a.InvalidInvertedConcatenatedMatrix | a.Visible] = "Default";
      a[a.CacheAsBitmap = 131072] = "CacheAsBitmap";
      a[a.PixelSnapping = 262144] = "PixelSnapping";
      a[a.ImageSmoothing = 524288] = "ImageSmoothing";
      a[a.Dynamic = 1048576] = "Dynamic";
      a[a.Scalable = 2097152] = "Scalable";
      a[a.Tileable = 4194304] = "Tileable";
      a[a.Transparent = 32768] = "Transparent";
    })(p.NodeFlags || (p.NodeFlags = {}));
    var a = p.NodeFlags;
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
    var q = function() {
      function a() {
      }
      a.prototype.visitNode = function(a, e) {
      };
      a.prototype.visitShape = function(a, e) {
        this.visitNode(a, e);
      };
      a.prototype.visitGroup = function(a, e) {
        this.visitNode(a, e);
        for (var d = a.getChildren(), f = 0;f < d.length;f++) {
          d[f].visit(this, e);
        }
      };
      a.prototype.visitStage = function(a, e) {
        this.visitGroup(a, e);
      };
      a.prototype.visitRenderable = function(a, e) {
        this.visitNode(a, e);
      };
      return a;
    }();
    p.NodeVisitor = q;
    var h = function() {
      return function() {
      };
    }();
    p.State = h;
    var t = function(a) {
      function c() {
        a.call(this);
        this.matrix = b.createIdentity();
        this.depth = 0;
      }
      __extends(c, a);
      c.prototype.transform = function(a) {
        var c = this.clone();
        c.matrix.preMultiply(a.getMatrix());
        return c;
      };
      c.allocate = function() {
        var a = c._dirtyStack, e = null;
        a.length && (e = a.pop());
        return e;
      };
      c.prototype.clone = function() {
        var a = c.allocate();
        a || (a = new c);
        a.set(this);
        return a;
      };
      c.prototype.set = function(a) {
        this.matrix.set(a.matrix);
      };
      c.prototype.free = function() {
        c._dirtyStack.push(this);
      };
      c._dirtyStack = [];
      return c;
    }(h);
    p.PreRenderState = t;
    var r = function(a) {
      function c() {
        a.apply(this, arguments);
        this.isDirty = !0;
      }
      __extends(c, a);
      c.prototype.start = function(a, c) {
        this._dirtyRegion = c;
        var e = new t;
        e.matrix.setIdentity();
        a.visit(this, e);
        e.free();
      };
      c.prototype.visitGroup = function(a, c) {
        var e = a.getChildren();
        this.visitNode(a, c);
        for (var d = 0;d < e.length;d++) {
          var f = e[d], b = c.transform(f.getTransform());
          f.visit(this, b);
          b.free();
        }
      };
      c.prototype.visitNode = function(a, c) {
        a.hasFlags(16) && (this.isDirty = !0);
        a.toggleFlags(16, !1);
        a.depth = c.depth++;
      };
      return c;
    }(q);
    p.PreRenderVisitor = r;
    h = function(a) {
      function c(c) {
        a.call(this);
        this.writer = c;
      }
      __extends(c, a);
      c.prototype.visitNode = function(a, c) {
      };
      c.prototype.visitShape = function(a, c) {
        this.writer.writeLn(a.toString());
        this.visitNode(a, c);
      };
      c.prototype.visitGroup = function(a, c) {
        this.visitNode(a, c);
        var e = a.getChildren();
        this.writer.enter(a.toString() + " " + e.length);
        for (var d = 0;d < e.length;d++) {
          e[d].visit(this, c);
        }
        this.writer.outdent();
      };
      c.prototype.visitStage = function(a, c) {
        this.visitGroup(a, c);
      };
      return c;
    }(q);
    p.TracingNodeVisitor = h;
    var m = function() {
      function e() {
        this._clip = -1;
        this._eventListeners = null;
        this._id = e._nextId++;
        this._type = 1;
        this._index = -1;
        this._parent = null;
        this.reset();
      }
      Object.defineProperty(e.prototype, "id", {get:function() {
        return this._id;
      }, enumerable:!0, configurable:!0});
      e.prototype._dispatchEvent = function(a) {
        if (this._eventListeners) {
          for (var e = this._eventListeners, d = 0;d < e.length;d++) {
            var f = e[d];
            f.type === a && f.listener(this, a);
          }
        }
      };
      e.prototype.addEventListener = function(a, e) {
        this._eventListeners || (this._eventListeners = []);
        this._eventListeners.push({type:a, listener:e});
      };
      e.prototype.removeEventListener = function(a, e) {
        for (var d = this._eventListeners, f = 0;f < d.length;f++) {
          var b = d[f];
          if (b.type === a && b.listener === e) {
            d.splice(f, 1);
            break;
          }
        }
      };
      Object.defineProperty(e.prototype, "properties", {get:function() {
        return this._properties || (this._properties = {});
      }, enumerable:!0, configurable:!0});
      e.prototype.reset = function() {
        this._flags = a.Default;
        this._properties = this._transform = this._layer = this._bounds = null;
        this.depth = -1;
      };
      Object.defineProperty(e.prototype, "clip", {get:function() {
        return this._clip;
      }, set:function(a) {
        this._clip = a;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(e.prototype, "parent", {get:function() {
        return this._parent;
      }, enumerable:!0, configurable:!0});
      e.prototype.getTransformedBounds = function(a) {
        var e = this.getBounds(!0);
        if (a !== this && !e.isEmpty()) {
          var d = this.getTransform().getConcatenatedMatrix();
          a ? (a = a.getTransform().getInvertedConcatenatedMatrix(), a.preMultiply(d), a.transformRectangleAABB(e), a.free()) : d.transformRectangleAABB(e);
        }
        return e;
      };
      e.prototype._markCurrentBoundsAsDirtyRegion = function() {
      };
      e.prototype.getStage = function(a) {
        void 0 === a && (a = !0);
        for (var e = this._parent;e;) {
          if (e.isType(13)) {
            var d = e;
            if (a) {
              if (d.dirtyRegion) {
                return d;
              }
            } else {
              return d;
            }
          }
          e = e._parent;
        }
        return null;
      };
      e.prototype.getChildren = function(a) {
        throw void 0;
      };
      e.prototype.getBounds = function(a) {
        throw void 0;
      };
      e.prototype.setBounds = function(a) {
        (this._bounds || (this._bounds = g.createEmpty())).set(a);
        this.removeFlags(256);
      };
      e.prototype.clone = function() {
        throw void 0;
      };
      e.prototype.setFlags = function(a) {
        this._flags |= a;
      };
      e.prototype.hasFlags = function(a) {
        return (this._flags & a) === a;
      };
      e.prototype.hasAnyFlags = function(a) {
        return !!(this._flags & a);
      };
      e.prototype.removeFlags = function(a) {
        this._flags &= ~a;
      };
      e.prototype.toggleFlags = function(a, e) {
        this._flags = e ? this._flags | a : this._flags & ~a;
      };
      e.prototype._propagateFlagsUp = function(a) {
        if (0 !== a && !this.hasFlags(a)) {
          this.hasFlags(2) || (a &= -257);
          this.setFlags(a);
          var e = this._parent;
          e && e._propagateFlagsUp(a);
        }
      };
      e.prototype._propagateFlagsDown = function(a) {
        throw void 0;
      };
      e.prototype.isAncestor = function(a) {
        for (;a;) {
          if (a === this) {
            return !0;
          }
          a = a._parent;
        }
        return !1;
      };
      e._getAncestors = function(a, d) {
        var f = e._path;
        for (f.length = 0;a && a !== d;) {
          f.push(a), a = a._parent;
        }
        return f;
      };
      e.prototype._findClosestAncestor = function() {
        for (var a = this;a;) {
          if (!1 === a.hasFlags(512)) {
            return a;
          }
          a = a._parent;
        }
        return null;
      };
      e.prototype.isType = function(a) {
        return this._type === a;
      };
      e.prototype.isTypeOf = function(a) {
        return (this._type & a) === a;
      };
      e.prototype.isLeaf = function() {
        return this.isType(33) || this.isType(3);
      };
      e.prototype.isLinear = function() {
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
      e.prototype.getTransformMatrix = function() {
        var a;
        void 0 === a && (a = !1);
        return this.getTransform().getMatrix(a);
      };
      e.prototype.getTransform = function() {
        null === this._transform && (this._transform = new d(this));
        return this._transform;
      };
      e.prototype.getLayer = function() {
        null === this._layer && (this._layer = new f(this));
        return this._layer;
      };
      e.prototype.getLayerBounds = function(a) {
        var e = this.getBounds();
        a && this._layer && this._layer.expandBounds(e);
        return e;
      };
      e.prototype.visit = function(a, e) {
        switch(this._type) {
          case 1:
            a.visitNode(this, e);
            break;
          case 5:
            a.visitGroup(this, e);
            break;
          case 13:
            a.visitStage(this, e);
            break;
          case 3:
            a.visitShape(this, e);
            break;
          case 33:
            a.visitRenderable(this, e);
            break;
          default:
            k.Debug.unexpectedCase();
        }
      };
      e.prototype.invalidate = function() {
        this._propagateFlagsUp(a.UpOnInvalidate);
      };
      e.prototype.toString = function(a) {
        void 0 === a && (a = !1);
        var e = l[this._type] + " " + this._id;
        a && (e += " " + this._bounds.toString());
        return e;
      };
      e._path = [];
      e._nextId = 0;
      return e;
    }();
    p.Node = m;
    var u = function(e) {
      function c() {
        e.call(this);
        this._type = 5;
        this._children = [];
      }
      __extends(c, e);
      c.prototype.getChildren = function(a) {
        void 0 === a && (a = !1);
        return a ? this._children.slice(0) : this._children;
      };
      c.prototype.childAt = function(a) {
        return this._children[a];
      };
      Object.defineProperty(c.prototype, "child", {get:function() {
        return this._children[0];
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(c.prototype, "groupChild", {get:function() {
        return this._children[0];
      }, enumerable:!0, configurable:!0});
      c.prototype.addChild = function(c) {
        c._parent && c._parent.removeChildAt(c._index);
        c._parent = this;
        c._index = this._children.length;
        this._children.push(c);
        this._propagateFlagsUp(a.UpOnAddedOrRemoved);
        c._propagateFlagsDown(a.DownOnAddedOrRemoved);
      };
      c.prototype.removeChildAt = function(c) {
        var e = this._children[c];
        this._children.splice(c, 1);
        e._index = -1;
        e._parent = null;
        this._propagateFlagsUp(a.UpOnAddedOrRemoved);
        e._propagateFlagsDown(a.DownOnAddedOrRemoved);
      };
      c.prototype.clearChildren = function() {
        for (var c = 0;c < this._children.length;c++) {
          var e = this._children[c];
          e && (e._index = -1, e._parent = null, e._propagateFlagsDown(a.DownOnAddedOrRemoved));
        }
        this._children.length = 0;
        this._propagateFlagsUp(a.UpOnAddedOrRemoved);
      };
      c.prototype._propagateFlagsDown = function(a) {
        if (!this.hasFlags(a)) {
          this.setFlags(a);
          for (var c = this._children, e = 0;e < c.length;e++) {
            c[e]._propagateFlagsDown(a);
          }
        }
      };
      c.prototype.getBounds = function(a) {
        void 0 === a && (a = !1);
        var c = this._bounds || (this._bounds = g.createEmpty());
        if (this.hasFlags(256)) {
          c.setEmpty();
          for (var e = this._children, d = g.allocate(), f = 0;f < e.length;f++) {
            var b = e[f];
            d.set(b.getBounds());
            b.getTransformMatrix().transformRectangleAABB(d);
            c.union(d);
          }
          d.free();
          this.removeFlags(256);
        }
        return a ? c.clone() : c;
      };
      c.prototype.getLayerBounds = function(a) {
        if (!a) {
          return this.getBounds();
        }
        for (var c = g.createEmpty(), e = this._children, d = g.allocate(), f = 0;f < e.length;f++) {
          var b = e[f];
          d.set(b.getLayerBounds(a));
          b.getTransformMatrix().transformRectangleAABB(d);
          c.union(d);
        }
        d.free();
        a && this._layer && this._layer.expandBounds(c);
        return c;
      };
      return c;
    }(m);
    p.Group = u;
    var d = function() {
      function e(a) {
        this._node = a;
        this._matrix = b.createIdentity();
        this._colorMatrix = p.ColorMatrix.createIdentity();
        this._concatenatedMatrix = b.createIdentity();
        this._invertedConcatenatedMatrix = b.createIdentity();
        this._concatenatedColorMatrix = p.ColorMatrix.createIdentity();
      }
      e.prototype.setMatrix = function(c) {
        this._matrix.isEqual(c) || (this._matrix.set(c), this._node._propagateFlagsUp(a.UpOnMoved), this._node._propagateFlagsDown(a.DownOnMoved));
      };
      e.prototype.setColorMatrix = function(c) {
        this._colorMatrix.set(c);
        this._node._propagateFlagsUp(a.UpOnColorMatrixChanged);
        this._node._propagateFlagsDown(a.DownOnColorMatrixChanged);
      };
      e.prototype.getMatrix = function(a) {
        void 0 === a && (a = !1);
        return a ? this._matrix.clone() : this._matrix;
      };
      e.prototype.hasColorMatrix = function() {
        return null !== this._colorMatrix;
      };
      e.prototype.getColorMatrix = function() {
        var a;
        void 0 === a && (a = !1);
        null === this._colorMatrix && (this._colorMatrix = p.ColorMatrix.createIdentity());
        return a ? this._colorMatrix.clone() : this._colorMatrix;
      };
      e.prototype.getConcatenatedMatrix = function(a) {
        void 0 === a && (a = !1);
        if (this._node.hasFlags(512)) {
          for (var e = this._node._findClosestAncestor(), d = m._getAncestors(this._node, e), f = e ? e.getTransform()._concatenatedMatrix.clone() : b.createIdentity(), h = d.length - 1;0 <= h;h--) {
            var e = d[h], g = e.getTransform();
            f.preMultiply(g._matrix);
            g._concatenatedMatrix.set(f);
            e.removeFlags(512);
          }
        }
        return a ? this._concatenatedMatrix.clone() : this._concatenatedMatrix;
      };
      e.prototype.getInvertedConcatenatedMatrix = function() {
        var a = !0;
        void 0 === a && (a = !1);
        this._node.hasFlags(1024) && (this.getConcatenatedMatrix().inverse(this._invertedConcatenatedMatrix), this._node.removeFlags(1024));
        return a ? this._invertedConcatenatedMatrix.clone() : this._invertedConcatenatedMatrix;
      };
      e.prototype.toString = function() {
        return this._matrix.toString();
      };
      return e;
    }();
    p.Transform = d;
    var f = function() {
      function a(c) {
        this._node = c;
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
        return v[this._blendMode];
      };
      a.prototype.expandBounds = function(a) {
        var e = this._filters;
        if (e) {
          for (var d = 0;d < e.length;d++) {
            e[d].expandBounds(a);
          }
        }
      };
      return a;
    }();
    p.Layer = f;
    h = function(a) {
      function c(c) {
        a.call(this);
        this._source = c;
        this._type = 3;
        this._ratio = 0;
      }
      __extends(c, a);
      c.prototype.getBounds = function(a) {
        void 0 === a && (a = !1);
        var c = this._bounds || (this._bounds = g.createEmpty());
        this.hasFlags(256) && (c.set(this._source.getBounds()), this.removeFlags(256));
        return a ? c.clone() : c;
      };
      Object.defineProperty(c.prototype, "source", {get:function() {
        return this._source;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(c.prototype, "ratio", {get:function() {
        return this._ratio;
      }, set:function(a) {
        a !== this._ratio && (this.invalidate(), this._ratio = a);
      }, enumerable:!0, configurable:!0});
      c.prototype._propagateFlagsDown = function(a) {
        this.setFlags(a);
      };
      c.prototype.getChildren = function(a) {
        return [this._source];
      };
      return c;
    }(m);
    p.Shape = h;
    p.RendererOptions = function() {
      return function() {
        this.debug = !1;
        this.paintRenderable = !0;
        this.paintViewport = this.paintFlashing = this.paintDirtyRegion = this.paintBounds = !1;
        this.clear = !0;
      };
    }();
    (function(a) {
      a[a.Canvas2D = 0] = "Canvas2D";
      a[a.WebGL = 1] = "WebGL";
      a[a.Both = 2] = "Both";
      a[a.DOM = 3] = "DOM";
      a[a.SVG = 4] = "SVG";
    })(p.Backend || (p.Backend = {}));
    q = function(a) {
      function c(c, d, f) {
        a.call(this);
        this._container = c;
        this._stage = d;
        this._options = f;
        this._viewport = g.createSquare();
        this._devicePixelRatio = 1;
      }
      __extends(c, a);
      Object.defineProperty(c.prototype, "viewport", {set:function(a) {
        this._viewport.set(a);
      }, enumerable:!0, configurable:!0});
      c.prototype.render = function() {
        throw void 0;
      };
      c.prototype.resize = function() {
        throw void 0;
      };
      c.prototype.screenShot = function(a, c, e) {
        throw void 0;
      };
      return c;
    }(q);
    p.Renderer = q;
    q = function(a) {
      function c(d, f, b) {
        void 0 === b && (b = !1);
        a.call(this);
        this._preVisitor = new r;
        this._flags &= -3;
        this._type = 13;
        this._scaleMode = c.DEFAULT_SCALE;
        this._align = c.DEFAULT_ALIGN;
        this._content = new u;
        this._content._flags &= -3;
        this.addChild(this._content);
        this.setFlags(16);
        this.setBounds(new g(0, 0, d, f));
        b ? (this._dirtyRegion = new w(d, f), this._dirtyRegion.addDirtyRectangle(new g(0, 0, d, f))) : this._dirtyRegion = null;
        this._updateContentMatrix();
      }
      __extends(c, a);
      Object.defineProperty(c.prototype, "dirtyRegion", {get:function() {
        return this._dirtyRegion;
      }, enumerable:!0, configurable:!0});
      c.prototype.setBounds = function(c) {
        a.prototype.setBounds.call(this, c);
        this._updateContentMatrix();
        this._dispatchEvent(1);
        this._dirtyRegion && (this._dirtyRegion = new w(c.w, c.h), this._dirtyRegion.addDirtyRectangle(c));
      };
      Object.defineProperty(c.prototype, "content", {get:function() {
        return this._content;
      }, enumerable:!0, configurable:!0});
      c.prototype.readyToRender = function() {
        this._preVisitor.isDirty = !1;
        this._preVisitor.start(this, this._dirtyRegion);
        return this._preVisitor.isDirty ? !0 : !1;
      };
      Object.defineProperty(c.prototype, "align", {get:function() {
        return this._align;
      }, set:function(a) {
        this._align = a;
        this._updateContentMatrix();
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(c.prototype, "scaleMode", {get:function() {
        return this._scaleMode;
      }, set:function(a) {
        this._scaleMode = a;
        this._updateContentMatrix();
      }, enumerable:!0, configurable:!0});
      c.prototype._updateContentMatrix = function() {
        if (this._scaleMode === c.DEFAULT_SCALE && this._align === c.DEFAULT_ALIGN) {
          this._content.getTransform().setMatrix(new b(1, 0, 0, 1, 0, 0));
        } else {
          var a = this.getBounds(), e = this._content.getBounds(), d = a.w / e.w, f = a.h / e.h;
          switch(this._scaleMode) {
            case 2:
              d = f = Math.max(d, f);
              break;
            case 4:
              d = f = 1;
              break;
            case 1:
              break;
            default:
              d = f = Math.min(d, f);
          }
          var h;
          h = this._align & 4 ? 0 : this._align & 8 ? a.w - e.w * d : (a.w - e.w * d) / 2;
          a = this._align & 1 ? 0 : this._align & 2 ? a.h - e.h * f : (a.h - e.h * f) / 2;
          this._content.getTransform().setMatrix(new b(d, 0, 0, f, h, a));
        }
      };
      c.DEFAULT_SCALE = 4;
      c.DEFAULT_ALIGN = 5;
      return c;
    }(u);
    p.Stage = q;
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(p) {
    function g(a, e, c) {
      return a + (e - a) * c;
    }
    function b(a, e, c) {
      return g(a >> 24 & 255, e >> 24 & 255, c) << 24 | g(a >> 16 & 255, e >> 16 & 255, c) << 16 | g(a >> 8 & 255, e >> 8 & 255, c) << 8 | g(a & 255, e & 255, c);
    }
    var w = p.Geometry.Point, v = p.Geometry.Rectangle, a = p.Geometry.Matrix, l = k.ArrayUtilities.indexOf, q = function(a) {
      function e() {
        a.call(this);
        this._parents = [];
        this._renderableParents = [];
        this._invalidateEventListeners = null;
        this._flags &= -3;
        this._type = 33;
      }
      __extends(e, a);
      Object.defineProperty(e.prototype, "parents", {get:function() {
        return this._parents;
      }, enumerable:!0, configurable:!0});
      e.prototype.addParent = function(a) {
        l(this._parents, a);
        this._parents.push(a);
      };
      e.prototype.willRender = function() {
        for (var a = this._parents, e = 0;e < a.length;e++) {
          for (var d = a[e];d;) {
            if (d.isType(13)) {
              return !0;
            }
            if (!d.hasFlags(65536)) {
              break;
            }
            d = d._parent;
          }
        }
        return !1;
      };
      e.prototype.addRenderableParent = function(a) {
        this._renderableParents.push(a);
      };
      e.prototype.wrap = function() {
        for (var a, e = this._parents, d = 0;d < e.length;d++) {
          if (a = e[d], !a._parent) {
            return a;
          }
        }
        a = new p.Shape(this);
        this.addParent(a);
        return a;
      };
      e.prototype.invalidate = function() {
        this.setFlags(16);
        for (var a = this._parents, e = 0;e < a.length;e++) {
          a[e].invalidate();
        }
        a = this._renderableParents;
        for (e = 0;e < a.length;e++) {
          a[e].invalidate();
        }
        if (a = this._invalidateEventListeners) {
          for (e = 0;e < a.length;e++) {
            a[e](this);
          }
        }
      };
      e.prototype.addInvalidateEventListener = function(a) {
        this._invalidateEventListeners || (this._invalidateEventListeners = []);
        l(this._invalidateEventListeners, a);
        this._invalidateEventListeners.push(a);
      };
      e.prototype.getBounds = function(a) {
        void 0 === a && (a = !1);
        return a ? this._bounds.clone() : this._bounds;
      };
      e.prototype.getChildren = function(a) {
        return null;
      };
      e.prototype._propagateFlagsUp = function(a) {
        if (0 !== a && !this.hasFlags(a)) {
          for (var e = 0;e < this._parents.length;e++) {
            this._parents[e]._propagateFlagsUp(a);
          }
        }
      };
      e.prototype.render = function(a, e, d, f, b) {
      };
      return e;
    }(p.Node);
    p.Renderable = q;
    var h = function(a) {
      function e(c, e) {
        a.call(this);
        this.setBounds(c);
        this.render = e;
      }
      __extends(e, a);
      return e;
    }(q);
    p.CustomRenderable = h;
    (function(a) {
      a[a.Idle = 1] = "Idle";
      a[a.Playing = 2] = "Playing";
      a[a.Paused = 3] = "Paused";
      a[a.Ended = 4] = "Ended";
    })(p.RenderableVideoState || (p.RenderableVideoState = {}));
    h = function(a) {
      function e(c, d) {
        a.call(this);
        this._flags = 1048592;
        this._lastPausedTime = this._lastTimeInvalidated = 0;
        this._pauseHappening = this._seekHappening = !1;
        this._isDOMElement = !0;
        this.setBounds(new v(0, 0, 1, 1));
        this._assetId = c;
        this._eventSerializer = d;
        var b = document.createElement("video"), h = this._handleVideoEvent.bind(this);
        b.preload = "metadata";
        b.addEventListener("play", h);
        b.addEventListener("pause", h);
        b.addEventListener("ended", h);
        b.addEventListener("loadeddata", h);
        b.addEventListener("progress", h);
        b.addEventListener("suspend", h);
        b.addEventListener("loadedmetadata", h);
        b.addEventListener("error", h);
        b.addEventListener("seeking", h);
        b.addEventListener("seeked", h);
        b.addEventListener("canplay", h);
        b.style.position = "absolute";
        this._video = b;
        this._videoEventHandler = h;
        e._renderableVideos.push(this);
        "undefined" !== typeof registerInspectorAsset && registerInspectorAsset(-1, -1, this);
        this._state = 1;
      }
      __extends(e, a);
      Object.defineProperty(e.prototype, "video", {get:function() {
        return this._video;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(e.prototype, "state", {get:function() {
        return this._state;
      }, enumerable:!0, configurable:!0});
      e.prototype.play = function() {
        this._state = 2;
        this._video.play();
      };
      e.prototype.pause = function() {
        this._state = 3;
        this._video.pause();
      };
      e.prototype._handleVideoEvent = function(a) {
        var e = null, d = this._video;
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
            this._notifyNetStream(3, e);
            a = 4;
            break;
          case "loadeddata":
            this._pauseHappening = !1;
            this._notifyNetStream(2, e);
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
            e = {videoWidth:d.videoWidth, videoHeight:d.videoHeight, duration:d.duration};
            break;
          case "error":
            a = 11;
            e = {code:d.error.code};
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
        this._notifyNetStream(a, e);
      };
      e.prototype._notifyNetStream = function(a, e) {
        this._eventSerializer.sendVideoPlaybackEvent(this._assetId, a, e);
      };
      e.prototype.processControlRequest = function(a, e) {
        var d = this._video;
        switch(a) {
          case 1:
            d.src = e.url;
            this.play();
            this._notifyNetStream(0, null);
            break;
          case 9:
            d.paused && d.play();
            break;
          case 2:
            d && (e.paused && !d.paused ? (isNaN(e.time) ? this._lastPausedTime = d.currentTime : (0 !== d.seekable.length && (d.currentTime = e.time), this._lastPausedTime = e.time), this.pause()) : !e.paused && d.paused && (this.play(), isNaN(e.time) || this._lastPausedTime === e.time || 0 === d.seekable.length || (d.currentTime = e.time)));
            break;
          case 3:
            d && 0 !== d.seekable.length && (this._seekHappening = !0, d.currentTime = e.time);
            break;
          case 4:
            return d ? d.currentTime : 0;
          case 5:
            return d ? d.duration : 0;
          case 6:
            d && (d.volume = e.volume);
            break;
          case 7:
            if (!d) {
              return 0;
            }
            var f = -1;
            if (d.buffered) {
              for (var b = 0;b < d.buffered.length;b++) {
                f = Math.max(f, d.buffered.end(b));
              }
            } else {
              f = d.duration;
            }
            return Math.round(500 * f);
          case 8:
            return d ? Math.round(500 * d.duration) : 0;
        }
      };
      e.prototype.checkForUpdate = function() {
        this._lastTimeInvalidated !== this._video.currentTime && (this._isDOMElement || this.invalidate());
        this._lastTimeInvalidated = this._video.currentTime;
      };
      e.checkForVideoUpdates = function() {
        for (var a = e._renderableVideos, d = 0;d < a.length;d++) {
          var f = a[d];
          f.willRender() ? (f._video.parentElement || f.invalidate(), f._video.style.zIndex = f.parents[0].depth + "") : f._video.parentElement && f._dispatchEvent(2);
          a[d].checkForUpdate();
        }
      };
      e.prototype.render = function(a, e, d) {
        (e = this._video) && 0 < e.videoWidth && a.drawImage(e, 0, 0, e.videoWidth, e.videoHeight, 0, 0, this._bounds.w, this._bounds.h);
      };
      e._renderableVideos = [];
      return e;
    }(q);
    p.RenderableVideo = h;
    h = function(a) {
      function e(c, e) {
        a.call(this);
        this._flags = 1048592;
        this.properties = {};
        this.setBounds(e);
        c instanceof HTMLCanvasElement ? this._initializeSourceCanvas(c) : this._sourceImage = c;
      }
      __extends(e, a);
      e.FromDataBuffer = function(a, d, f) {
        var b = document.createElement("canvas");
        b.width = f.w;
        b.height = f.h;
        f = new e(b, f);
        f.updateFromDataBuffer(a, d);
        return f;
      };
      e.FromNode = function(a, d, f, b, h) {
        var g = document.createElement("canvas"), m = a.getBounds();
        g.width = m.w;
        g.height = m.h;
        g = new e(g, m);
        g.drawNode(a, d, f, b, h);
        return g;
      };
      e.FromImage = function(a) {
        return new e(a, new v(0, 0, -1, -1));
      };
      e.prototype.updateFromDataBuffer = function(a, e) {
        if (p.imageUpdateOption.value) {
          var d = e.buffer;
          if (4 !== a && 5 !== a && 6 !== a) {
            var f = this._bounds, b = this._imageData;
            b && b.width === f.w && b.height === f.h || (b = this._imageData = this._context.createImageData(f.w, f.h));
            p.imageConvertOption.value && (d = new Int32Array(d), f = new Int32Array(b.data.buffer), k.ColorUtilities.convertImage(a, 3, d, f));
            this._ensureSourceCanvas();
            this._context.putImageData(b, 0, 0);
          }
          this.invalidate();
        }
      };
      e.prototype.readImageData = function(a) {
        a.writeRawBytes(this.imageData.data);
      };
      e.prototype.render = function(a, e, d) {
        this.renderSource ? a.drawImage(this.renderSource, 0, 0) : this._renderFallback(a);
      };
      e.prototype.drawNode = function(a, e, d, f, b) {
        d = p.Canvas2D;
        f = this.getBounds();
        (new d.Canvas2DRenderer(this._canvas, null)).renderNode(a, b || f, e);
      };
      e.prototype._initializeSourceCanvas = function(a) {
        this._canvas = a;
        this._context = this._canvas.getContext("2d");
      };
      e.prototype._ensureSourceCanvas = function() {
        if (!this._canvas) {
          var a = document.createElement("canvas"), e = this._bounds;
          a.width = e.w;
          a.height = e.h;
          this._initializeSourceCanvas(a);
        }
      };
      Object.defineProperty(e.prototype, "imageData", {get:function() {
        this._canvas || (this._ensureSourceCanvas(), this._context.drawImage(this._sourceImage, 0, 0), this._sourceImage = null);
        return this._context.getImageData(0, 0, this._bounds.w, this._bounds.h);
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(e.prototype, "renderSource", {get:function() {
        return this._canvas || this._sourceImage;
      }, enumerable:!0, configurable:!0});
      e.prototype._renderFallback = function(a) {
      };
      return e;
    }(q);
    p.RenderableBitmap = h;
    (function(a) {
      a[a.Fill = 0] = "Fill";
      a[a.Stroke = 1] = "Stroke";
      a[a.StrokeFill = 2] = "StrokeFill";
    })(p.PathType || (p.PathType = {}));
    var t = function() {
      return function(a, e, c, d) {
        this.type = a;
        this.style = e;
        this.smoothImage = c;
        this.strokeProperties = d;
        this.path = new Path2D;
      };
    }();
    p.StyledPath = t;
    var r = function() {
      return function(a, e, c, d, b) {
        this.thickness = a;
        this.scaleMode = e;
        this.capsStyle = c;
        this.jointsStyle = d;
        this.miterLimit = b;
      };
    }();
    p.StrokeProperties = r;
    var m = function(d) {
      function e(a, e, b, h) {
        d.call(this);
        this._flags = 6291472;
        this.properties = {};
        this.setBounds(h);
        this._id = a;
        this._pathData = e;
        this._textures = b;
        b.length && this.setFlags(1048576);
      }
      __extends(e, d);
      e.prototype.update = function(a, e, d) {
        this.setBounds(d);
        this._pathData = a;
        this._paths = null;
        this._textures = e;
        this.setFlags(1048576);
        this.invalidate();
      };
      e.prototype.render = function(a, e, d, f, b) {
        void 0 === f && (f = null);
        void 0 === b && (b = !1);
        a.fillStyle = a.strokeStyle = "transparent";
        e = this._deserializePaths(this._pathData, a, e);
        for (d = 0;d < e.length;d++) {
          var h = e[d];
          a.mozImageSmoothingEnabled = a.msImageSmoothingEnabled = a.imageSmoothingEnabled = h.smoothImage;
          if (0 === h.type) {
            f ? f.addPath(h.path, a.currentTransform) : (a.fillStyle = b ? "#000000" : h.style, a.fill(h.path, "evenodd"), a.fillStyle = "transparent");
          } else {
            if (!f && !b) {
              a.strokeStyle = h.style;
              var g = 1;
              h.strokeProperties && (g = h.strokeProperties.scaleMode, a.lineWidth = h.strokeProperties.thickness, a.lineCap = h.strokeProperties.capsStyle, a.lineJoin = h.strokeProperties.jointsStyle, a.miterLimit = h.strokeProperties.miterLimit);
              var m = a.lineWidth;
              (m = 1 === m || 3 === m) && a.translate(.5, .5);
              a.flashStroke(h.path, g);
              m && a.translate(-.5, -.5);
              a.strokeStyle = "transparent";
            }
          }
        }
      };
      e.prototype._deserializePaths = function(a, d, f) {
        if (this._paths) {
          return this._paths;
        }
        f = this._paths = [];
        var b = null, h = null, g = 0, m = 0, l, t, u = !1, q = 0, p = 0, v = a.commands, w = a.coordinates, D = a.styles, z = D.position = 0;
        a = a.commandsPosition;
        for (var A = 0;A < a;A++) {
          switch(v[A]) {
            case 9:
              u && b && (b.lineTo(q, p), h && h.lineTo(q, p));
              u = !0;
              g = q = w[z++] / 20;
              m = p = w[z++] / 20;
              b && b.moveTo(g, m);
              h && h.moveTo(g, m);
              break;
            case 10:
              g = w[z++] / 20;
              m = w[z++] / 20;
              b && b.lineTo(g, m);
              h && h.lineTo(g, m);
              break;
            case 11:
              l = w[z++] / 20;
              t = w[z++] / 20;
              g = w[z++] / 20;
              m = w[z++] / 20;
              b && b.quadraticCurveTo(l, t, g, m);
              h && h.quadraticCurveTo(l, t, g, m);
              break;
            case 12:
              l = w[z++] / 20;
              t = w[z++] / 20;
              var C = w[z++] / 20, y = w[z++] / 20, g = w[z++] / 20, m = w[z++] / 20;
              b && b.bezierCurveTo(l, t, C, y, g, m);
              h && h.bezierCurveTo(l, t, C, y, g, m);
              break;
            case 1:
              b = this._createPath(0, k.ColorUtilities.rgbaToCSSStyle(D.readUnsignedInt()), !1, null, g, m);
              break;
            case 3:
              l = this._readBitmap(D, d);
              b = this._createPath(0, l.style, l.smoothImage, null, g, m);
              break;
            case 2:
              b = this._createPath(0, this._readGradient(D, d), !1, null, g, m);
              break;
            case 4:
              b = null;
              break;
            case 5:
              h = k.ColorUtilities.rgbaToCSSStyle(D.readUnsignedInt());
              D.position += 1;
              l = D.readByte();
              t = e.LINE_CAPS_STYLES[D.readByte()];
              C = e.LINE_JOINTS_STYLES[D.readByte()];
              l = new r(w[z++] / 20, l, t, C, D.readByte());
              h = this._createPath(1, h, !1, l, g, m);
              break;
            case 6:
              h = this._createPath(2, this._readGradient(D, d), !1, null, g, m);
              break;
            case 7:
              l = this._readBitmap(D, d);
              h = this._createPath(2, l.style, l.smoothImage, null, g, m);
              break;
            case 8:
              h = null;
          }
        }
        u && b && (b.lineTo(q, p), h && h.lineTo(q, p));
        this._pathData = null;
        return f;
      };
      e.prototype._createPath = function(a, e, d, f, b, h) {
        a = new t(a, e, d, f);
        this._paths.push(a);
        a.path.moveTo(b, h);
        return a.path;
      };
      e.prototype._readMatrix = function(c) {
        return new a(c.readFloat(), c.readFloat(), c.readFloat(), c.readFloat(), c.readFloat(), c.readFloat());
      };
      e.prototype._readGradient = function(a, e) {
        var d = a.readUnsignedByte(), f = 2 * a.readShort() / 255, b = this._readMatrix(a), d = 16 === d ? e.createLinearGradient(-1, 0, 1, 0) : e.createRadialGradient(f, 0, 0, 0, 0, 1);
        d.setTransform && d.setTransform(b.toSVGMatrix());
        b = a.readUnsignedByte();
        for (f = 0;f < b;f++) {
          var h = a.readUnsignedByte() / 255, g = k.ColorUtilities.rgbaToCSSStyle(a.readUnsignedInt());
          d.addColorStop(h, g);
        }
        a.position += 2;
        return d;
      };
      e.prototype._readBitmap = function(a, e) {
        var d = a.readUnsignedInt(), f = this._readMatrix(a), b = a.readBoolean() ? "repeat" : "no-repeat", h = a.readBoolean();
        (d = this._textures[d]) ? (b = e.createPattern(d.renderSource, b), b.setTransform(f.toSVGMatrix())) : b = null;
        return {style:b, smoothImage:h};
      };
      e.prototype._renderFallback = function(a) {
        this.fillStyle || (this.fillStyle = k.ColorStyle.randomStyle());
        var e = this._bounds;
        a.save();
        a.beginPath();
        a.lineWidth = 2;
        a.fillStyle = this.fillStyle;
        a.fillRect(e.x, e.y, e.w, e.h);
        a.restore();
      };
      e.LINE_CAPS_STYLES = ["round", "butt", "square"];
      e.LINE_JOINTS_STYLES = ["round", "bevel", "miter"];
      return e;
    }(q);
    p.RenderableShape = m;
    h = function(d) {
      function e() {
        d.apply(this, arguments);
        this._flags = 7340048;
        this._morphPaths = Object.create(null);
      }
      __extends(e, d);
      e.prototype._deserializePaths = function(a, e, d) {
        if (this._morphPaths[d]) {
          return this._morphPaths[d];
        }
        var f = this._morphPaths[d] = [], h = null, l = null, t = 0, u = 0, q, p, v = !1, w = 0, X = 0, fa = a.commands, D = a.coordinates, z = a.morphCoordinates, A = a.styles, C = a.morphStyles;
        A.position = 0;
        var y = C.position = 0;
        a = a.commandsPosition;
        for (var G = 0;G < a;G++) {
          switch(fa[G]) {
            case 9:
              v && h && (h.lineTo(w, X), l && l.lineTo(w, X));
              v = !0;
              t = w = g(D[y], z[y++], d) / 20;
              u = X = g(D[y], z[y++], d) / 20;
              h && h.moveTo(t, u);
              l && l.moveTo(t, u);
              break;
            case 10:
              t = g(D[y], z[y++], d) / 20;
              u = g(D[y], z[y++], d) / 20;
              h && h.lineTo(t, u);
              l && l.lineTo(t, u);
              break;
            case 11:
              q = g(D[y], z[y++], d) / 20;
              p = g(D[y], z[y++], d) / 20;
              t = g(D[y], z[y++], d) / 20;
              u = g(D[y], z[y++], d) / 20;
              h && h.quadraticCurveTo(q, p, t, u);
              l && l.quadraticCurveTo(q, p, t, u);
              break;
            case 12:
              q = g(D[y], z[y++], d) / 20;
              p = g(D[y], z[y++], d) / 20;
              var B = g(D[y], z[y++], d) / 20, E = g(D[y], z[y++], d) / 20, t = g(D[y], z[y++], d) / 20, u = g(D[y], z[y++], d) / 20;
              h && h.bezierCurveTo(q, p, B, E, t, u);
              l && l.bezierCurveTo(q, p, B, E, t, u);
              break;
            case 1:
              h = this._createMorphPath(0, d, k.ColorUtilities.rgbaToCSSStyle(b(A.readUnsignedInt(), C.readUnsignedInt(), d)), !1, null, t, u);
              break;
            case 3:
              q = this._readMorphBitmap(A, C, d, e);
              h = this._createMorphPath(0, d, q.style, q.smoothImage, null, t, u);
              break;
            case 2:
              q = this._readMorphGradient(A, C, d, e);
              h = this._createMorphPath(0, d, q, !1, null, t, u);
              break;
            case 4:
              h = null;
              break;
            case 5:
              q = g(D[y], z[y++], d) / 20;
              l = k.ColorUtilities.rgbaToCSSStyle(b(A.readUnsignedInt(), C.readUnsignedInt(), d));
              A.position += 1;
              p = A.readByte();
              B = m.LINE_CAPS_STYLES[A.readByte()];
              E = m.LINE_JOINTS_STYLES[A.readByte()];
              q = new r(q, p, B, E, A.readByte());
              l = this._createMorphPath(1, d, l, !1, q, t, u);
              break;
            case 6:
              q = this._readMorphGradient(A, C, d, e);
              l = this._createMorphPath(2, d, q, !1, null, t, u);
              break;
            case 7:
              q = this._readMorphBitmap(A, C, d, e);
              l = this._createMorphPath(2, d, q.style, q.smoothImage, null, t, u);
              break;
            case 8:
              l = null;
          }
        }
        v && h && (h.lineTo(w, X), l && l.lineTo(w, X));
        return f;
      };
      e.prototype._createMorphPath = function(a, d, e, f, b, h, g) {
        a = new t(a, e, f, b);
        this._morphPaths[d].push(a);
        a.path.moveTo(h, g);
        return a.path;
      };
      e.prototype._readMorphMatrix = function(c, d, e) {
        return new a(g(c.readFloat(), d.readFloat(), e), g(c.readFloat(), d.readFloat(), e), g(c.readFloat(), d.readFloat(), e), g(c.readFloat(), d.readFloat(), e), g(c.readFloat(), d.readFloat(), e), g(c.readFloat(), d.readFloat(), e));
      };
      e.prototype._readMorphGradient = function(a, d, e, f) {
        var h = a.readUnsignedByte(), m = 2 * a.readShort() / 255, l = this._readMorphMatrix(a, d, e);
        f = 16 === h ? f.createLinearGradient(-1, 0, 1, 0) : f.createRadialGradient(m, 0, 0, 0, 0, 1);
        f.setTransform && f.setTransform(l.toSVGMatrix());
        l = a.readUnsignedByte();
        for (h = 0;h < l;h++) {
          var m = g(a.readUnsignedByte() / 255, d.readUnsignedByte() / 255, e), r = b(a.readUnsignedInt(), d.readUnsignedInt(), e), r = k.ColorUtilities.rgbaToCSSStyle(r);
          f.addColorStop(m, r);
        }
        a.position += 2;
        return f;
      };
      e.prototype._readMorphBitmap = function(a, d, e, f) {
        var b = a.readUnsignedInt();
        d = this._readMorphMatrix(a, d, e);
        e = a.readBoolean() ? "repeat" : "no-repeat";
        a = a.readBoolean();
        f = f.createPattern(this._textures[b]._canvas, e);
        f.setTransform(d.toSVGMatrix());
        return {style:f, smoothImage:a};
      };
      return e;
    }(m);
    p.RenderableMorphShape = h;
    var u = function() {
      function a() {
        this.align = this.leading = this.descent = this.ascent = this.width = this.y = this.x = 0;
        this.runs = [];
      }
      a._getMeasureContext = function() {
        a._measureContext || (a._measureContext = document.createElement("canvas").getContext("2d"));
        return a._measureContext;
      };
      a.prototype.addRun = function(e, c, b, h) {
        if (b) {
          var g = a._getMeasureContext();
          g.font = e;
          g = g.measureText(b).width | 0;
          this.runs.push(new d(e, c, b, g, h));
          this.width += g;
        }
      };
      a.prototype.wrap = function(e) {
        var c = [this], b = this.runs, h = this;
        h.width = 0;
        h.runs = [];
        for (var g = a._getMeasureContext(), m = 0;m < b.length;m++) {
          var l = b[m], r = l.text;
          l.text = "";
          l.width = 0;
          g.font = l.font;
          for (var k = e, t = r.split(/[\s.-]/), u = 0, q = 0;q < t.length;q++) {
            var p = t[q], v = r.substr(u, p.length + 1), w = g.measureText(v).width | 0;
            if (w > k) {
              do {
                if (l.text && (h.runs.push(l), h.width += l.width, l = new d(l.font, l.fillStyle, "", 0, l.underline), k = new a, k.y = h.y + h.descent + h.leading + h.ascent | 0, k.ascent = h.ascent, k.descent = h.descent, k.leading = h.leading, k.align = h.align, c.push(k), h = k), k = e - w, 0 > k) {
                  for (var D = v.length, z = v;1 < D && !(D--, z = v.substr(0, D), w = g.measureText(z).width | 0, w <= e);) {
                  }
                  l.text = z;
                  l.width = w;
                  v = v.substr(D);
                  w = g.measureText(v).width | 0;
                }
              } while (v && 0 > k);
            } else {
              k -= w;
            }
            l.text += v;
            l.width += w;
            u += p.length + 1;
          }
          h.runs.push(l);
          h.width += l.width;
        }
        return c;
      };
      a.prototype.toString = function() {
        return "TextLine {x: " + this.x + ", y: " + this.y + ", width: " + this.width + ", height: " + (this.ascent + this.descent + this.leading) + "}";
      };
      return a;
    }();
    p.TextLine = u;
    var d = function() {
      return function(a, d, c, b, h) {
        void 0 === a && (a = "");
        void 0 === d && (d = "");
        void 0 === c && (c = "");
        void 0 === b && (b = 0);
        void 0 === h && (h = !1);
        this.font = a;
        this.fillStyle = d;
        this.text = c;
        this.width = b;
        this.underline = h;
      };
    }();
    p.TextRun = d;
    h = function(d) {
      function e(c) {
        d.call(this);
        this._flags = 1048592;
        this.properties = {};
        this._textBounds = c.clone();
        this._textRunData = null;
        this._plainText = "";
        this._borderColor = this._backgroundColor = 0;
        this._matrix = a.createIdentity();
        this._coords = null;
        this._scrollV = 1;
        this._scrollH = 0;
        this.textRect = c.clone();
        this.lines = [];
        this.setBounds(c);
      }
      __extends(e, d);
      e.prototype.setBounds = function(a) {
        d.prototype.setBounds.call(this, a);
        this._textBounds.set(a);
        this.textRect.setElements(a.x + 2, a.y + 2, a.w - 2, a.h - 2);
      };
      e.prototype.setContent = function(a, d, e, f) {
        this._textRunData = d;
        this._plainText = a;
        this._matrix.set(e);
        this._coords = f;
        this.lines = [];
      };
      e.prototype.setStyle = function(a, d, e, f) {
        this._backgroundColor = a;
        this._borderColor = d;
        this._scrollV = e;
        this._scrollH = f;
      };
      e.prototype.reflow = function(a, d) {
        var e = this._textRunData;
        if (e) {
          for (var f = this._bounds, b = f.w - 4, h = this._plainText, g = this.lines, m = new u, l = 0, r = 0, t = 0, q = 0, p = 0, v = -1;e.position < e.length;) {
            var w = e.readInt(), z = e.readInt(), A = e.readInt(), C = e.readUTF(), y = e.readInt(), G = e.readInt(), B = e.readInt();
            y > t && (t = y);
            G > q && (q = G);
            B > p && (p = B);
            y = e.readBoolean();
            G = "";
            e.readBoolean() && (G += "italic ");
            y && (G += "bold ");
            A = G + A + "px " + C;
            C = e.readInt();
            C = k.ColorUtilities.rgbToHex(C);
            y = e.readInt();
            -1 === v && (v = y);
            e.readBoolean();
            e.readInt();
            e.readInt();
            e.readInt();
            e.readInt();
            e.readInt();
            for (var y = e.readBoolean(), E = "", G = !1;!G;w++) {
              G = w >= z - 1;
              B = h[w];
              if ("\r" !== B && "\n" !== B && (E += B, w < h.length - 1)) {
                continue;
              }
              m.addRun(A, C, E, y);
              if (m.runs.length) {
                g.length && (l += p);
                l += t;
                m.y = l | 0;
                l += q;
                m.ascent = t;
                m.descent = q;
                m.leading = p;
                m.align = v;
                if (d && m.width > b) {
                  for (m = m.wrap(b), E = 0;E < m.length;E++) {
                    var H = m[E], l = H.y + H.descent + H.leading;
                    g.push(H);
                    H.width > r && (r = H.width);
                  }
                } else {
                  g.push(m), m.width > r && (r = m.width);
                }
                m = new u;
              } else {
                l += t + q + p;
              }
              E = "";
              if (G) {
                p = q = t = 0;
                v = -1;
                break;
              }
              "\r" === B && "\n" === h[w + 1] && w++;
            }
            m.addRun(A, C, E, y);
          }
          e = h[h.length - 1];
          "\r" !== e && "\n" !== e || g.push(m);
          e = this.textRect;
          e.w = r;
          e.h = l;
          if (a) {
            if (!d) {
              b = r;
              r = f.w;
              switch(a) {
                case 1:
                  e.x = r - (b + 4) >> 1;
                  break;
                case 3:
                  e.x = r - (b + 4);
              }
              this._textBounds.setElements(e.x - 2, e.y - 2, e.w + 4, e.h + 4);
              f.w = b + 4;
            }
            f.x = e.x - 2;
            f.h = l + 4;
          } else {
            this._textBounds = f;
          }
          for (w = 0;w < g.length;w++) {
            if (f = g[w], f.width < b) {
              switch(f.align) {
                case 1:
                  f.x = b - f.width | 0;
                  break;
                case 2:
                  f.x = (b - f.width) / 2 | 0;
              }
            }
          }
          this.invalidate();
        }
      };
      e.roundBoundPoints = function(a) {
        for (var e = 0;e < a.length;e++) {
          var d = a[e];
          d.x = Math.floor(d.x + .1) + .5;
          d.y = Math.floor(d.y + .1) + .5;
        }
      };
      e.prototype.render = function(c) {
        c.save();
        var d = this._textBounds;
        this._backgroundColor && (c.fillStyle = k.ColorUtilities.rgbaToCSSStyle(this._backgroundColor), c.fillRect(d.x, d.y, d.w, d.h));
        if (this._borderColor) {
          c.strokeStyle = k.ColorUtilities.rgbaToCSSStyle(this._borderColor);
          c.lineCap = "square";
          c.lineWidth = 1;
          var f = e.absoluteBoundPoints, b = c.currentTransform;
          b ? (d = d.clone(), (new a(b.a, b.b, b.c, b.d, b.e, b.f)).transformRectangle(d, f), c.setTransform(1, 0, 0, 1, 0, 0)) : (f[0].x = d.x, f[0].y = d.y, f[1].x = d.x + d.w, f[1].y = d.y, f[2].x = d.x + d.w, f[2].y = d.y + d.h, f[3].x = d.x, f[3].y = d.y + d.h);
          e.roundBoundPoints(f);
          d = new Path2D;
          d.moveTo(f[0].x, f[0].y);
          d.lineTo(f[1].x, f[1].y);
          d.lineTo(f[2].x, f[2].y);
          d.lineTo(f[3].x, f[3].y);
          d.lineTo(f[0].x, f[0].y);
          c.stroke(d);
          b && c.setTransform(b.a, b.b, b.c, b.d, b.e, b.f);
        }
        this._coords ? this._renderChars(c) : this._renderLines(c);
        c.restore();
      };
      e.prototype._renderChars = function(a) {
        if (this._matrix) {
          var d = this._matrix;
          a.transform(d.a, d.b, d.c, d.d, d.tx, d.ty);
        }
        for (var d = this.lines, e = this._coords, f = e.position = 0;f < d.length;f++) {
          for (var b = d[f].runs, h = 0;h < b.length;h++) {
            var g = b[h];
            a.font = g.font;
            a.fillStyle = g.fillStyle;
            for (var g = g.text, m = 0;m < g.length;m++) {
              var l = e.readInt() / 20, r = e.readInt() / 20;
              a.fillText(g[m], l, r);
            }
          }
        }
      };
      e.prototype._renderLines = function(a) {
        var d = this._textBounds;
        a.beginPath();
        a.rect(d.x + 2, d.y + 2, d.w - 4, d.h - 4);
        a.clip();
        a.translate(d.x - this._scrollH + 2, d.y + 2);
        for (var e = this.lines, f = this._scrollV, b = 0, h = 0;h < e.length;h++) {
          var g = e[h], m = g.x, l = g.y;
          if (h + 1 < f) {
            b = l + g.descent + g.leading;
          } else {
            l -= b;
            if (h + 1 - f && l > d.h) {
              break;
            }
            for (var r = g.runs, k = 0;k < r.length;k++) {
              var t = r[k];
              a.font = t.font;
              a.fillStyle = t.fillStyle;
              t.underline && a.fillRect(m, l + g.descent / 2 | 0, t.width, 1);
              a.textAlign = "left";
              a.textBaseline = "alphabetic";
              a.fillText(t.text, m, l);
              m += t.width;
            }
          }
        }
      };
      e.absoluteBoundPoints = [new w(0, 0), new w(0, 0), new w(0, 0), new w(0, 0)];
      return e;
    }(q);
    p.RenderableText = h;
    q = function(a) {
      function d(c, e) {
        a.call(this);
        this._flags = 3145728;
        this.properties = {};
        this.setBounds(new v(0, 0, c, e));
      }
      __extends(d, a);
      Object.defineProperty(d.prototype, "text", {get:function() {
        return this._text;
      }, set:function(a) {
        this._text = a;
      }, enumerable:!0, configurable:!0});
      d.prototype.render = function(a, d, e) {
        a.save();
        a.textBaseline = "top";
        a.fillStyle = "white";
        a.fillText(this.text, 0, 0);
        a.restore();
      };
      return d;
    }(q);
    p.Label = q;
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(p) {
    function g(a, b, h, g, r) {
      b = v[b - 1];
      r && (r = b / 4, h -= r, g -= r);
      r = Math.ceil((1 > h ? 1 : h) / (b - 1E-9));
      b = Math.ceil((1 > g ? 1 : g) / (b - 1E-9));
      a.x -= r;
      a.w += 2 * r;
      a.y -= b;
      a.h += 2 * b;
    }
    var b = k.ColorUtilities.clampByte, w = function() {
      function a() {
      }
      a.prototype.expandBounds = function(a) {
      };
      return a;
    }();
    p.Filter = w;
    var v = [2, 1 / 1.05, 1 / 1.35, 1 / 1.55, 1 / 1.75, 1 / 1.9, .5, 1 / 2.1, 1 / 2.2, 1 / 2.3, .4, 1 / 3, 1 / 3, 1 / 3.5, 1 / 3.5], a = function(a) {
      function b(h, g, r) {
        a.call(this);
        this.blurX = h;
        this.blurY = g;
        this.quality = r;
      }
      __extends(b, a);
      b.prototype.expandBounds = function(a) {
        g(a, this.quality, this.blurX, this.blurY, !0);
      };
      return b;
    }(w);
    p.BlurFilter = a;
    a = function(a) {
      function b(h, g, r, m, k, d, f, e, c, n, q) {
        a.call(this);
        this.alpha = h;
        this.angle = g;
        this.blurX = r;
        this.blurY = m;
        this.color = k;
        this.distance = d;
        this.hideObject = f;
        this.inner = e;
        this.knockout = c;
        this.quality = n;
        this.strength = q;
      }
      __extends(b, a);
      b.prototype.expandBounds = function(a) {
        if (!this.inner && (g(a, this.quality, this.blurX, this.blurY, !1), this.distance)) {
          var b = this.angle * Math.PI / 180, l = Math.cos(b) * this.distance, m = Math.sin(b) * this.distance, b = a.x + (0 <= l ? 0 : Math.floor(l)), l = a.x + a.w + Math.ceil(Math.abs(l)), k = a.y + (0 <= m ? 0 : Math.floor(m)), m = a.y + a.h + Math.ceil(Math.abs(m));
          a.x = b;
          a.w = l - b;
          a.y = k;
          a.h = m - k;
        }
      };
      return b;
    }(w);
    p.DropshadowFilter = a;
    a = function(a) {
      function b(h, g, r, m, k, d, f, e) {
        a.call(this);
        this.alpha = h;
        this.blurX = g;
        this.blurY = r;
        this.color = m;
        this.inner = k;
        this.knockout = d;
        this.quality = f;
        this.strength = e;
      }
      __extends(b, a);
      b.prototype.expandBounds = function(a) {
        this.inner || g(a, this.quality, this.blurX, this.blurY, !1);
      };
      return b;
    }(w);
    p.GlowFilter = a;
    (function(a) {
      a[a.Unknown = 0] = "Unknown";
      a[a.Identity = 1] = "Identity";
    })(p.ColorMatrixType || (p.ColorMatrixType = {}));
    w = function(a) {
      function g(b) {
        a.call(this);
        this._data = new Float32Array(b);
        this._type = 0;
      }
      __extends(g, a);
      g.prototype.clone = function() {
        var a = new g(this._data);
        a._type = this._type;
        return a;
      };
      g.prototype.set = function(a) {
        this._data.set(a._data);
        this._type = a._type;
      };
      g.prototype.toWebGLMatrix = function() {
        return new Float32Array(this._data);
      };
      g.prototype.asWebGLMatrix = function() {
        return this._data.subarray(0, 16);
      };
      g.prototype.asWebGLVector = function() {
        return this._data.subarray(16, 20);
      };
      g.prototype.isIdentity = function() {
        if (this._type & 1) {
          return !0;
        }
        var a = this._data;
        return 1 == a[0] && 0 == a[1] && 0 == a[2] && 0 == a[3] && 0 == a[4] && 1 == a[5] && 0 == a[6] && 0 == a[7] && 0 == a[8] && 0 == a[9] && 1 == a[10] && 0 == a[11] && 0 == a[12] && 0 == a[13] && 0 == a[14] && 1 == a[15] && 0 == a[16] && 0 == a[17] && 0 == a[18] && 0 == a[19];
      };
      g.createIdentity = function() {
        var a = new g([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0]);
        a._type = 1;
        return a;
      };
      g.prototype.setMultipliersAndOffsets = function(a, b, g, m, l, d, f, e) {
        for (var c = this._data, k = 0;k < c.length;k++) {
          c[k] = 0;
        }
        c[0] = a;
        c[5] = b;
        c[10] = g;
        c[15] = m;
        c[16] = l / 255;
        c[17] = d / 255;
        c[18] = f / 255;
        c[19] = e / 255;
        this._type = 0;
      };
      g.prototype.transformRGBA = function(a) {
        var g = a >> 24 & 255, l = a >> 16 & 255, m = a >> 8 & 255, k = a & 255, d = this._data;
        a = b(g * d[0] + l * d[1] + m * d[2] + k * d[3] + 255 * d[16]);
        var f = b(g * d[4] + l * d[5] + m * d[6] + k * d[7] + 255 * d[17]), e = b(g * d[8] + l * d[9] + m * d[10] + k * d[11] + 255 * d[18]), g = b(g * d[12] + l * d[13] + m * d[14] + k * d[15] + 255 * d[19]);
        return a << 24 | f << 16 | e << 8 | g;
      };
      g.prototype.multiply = function(a) {
        if (!(a._type & 1)) {
          var b = this._data, g = a._data;
          a = b[0];
          var m = b[1], l = b[2], d = b[3], f = b[4], e = b[5], c = b[6], k = b[7], q = b[8], p = b[9], v = b[10], w = b[11], J = b[12], U = b[13], W = b[14], Y = b[15], ia = b[16], ja = b[17], X = b[18], fa = b[19], D = g[0], z = g[1], A = g[2], C = g[3], y = g[4], G = g[5], B = g[6], E = g[7], H = g[8], K = g[9], L = g[10], M = g[11], N = g[12], O = g[13], P = g[14], Q = g[15], R = g[16], S = g[17], T = g[18], g = g[19];
          b[0] = a * D + f * z + q * A + J * C;
          b[1] = m * D + e * z + p * A + U * C;
          b[2] = l * D + c * z + v * A + W * C;
          b[3] = d * D + k * z + w * A + Y * C;
          b[4] = a * y + f * G + q * B + J * E;
          b[5] = m * y + e * G + p * B + U * E;
          b[6] = l * y + c * G + v * B + W * E;
          b[7] = d * y + k * G + w * B + Y * E;
          b[8] = a * H + f * K + q * L + J * M;
          b[9] = m * H + e * K + p * L + U * M;
          b[10] = l * H + c * K + v * L + W * M;
          b[11] = d * H + k * K + w * L + Y * M;
          b[12] = a * N + f * O + q * P + J * Q;
          b[13] = m * N + e * O + p * P + U * Q;
          b[14] = l * N + c * O + v * P + W * Q;
          b[15] = d * N + k * O + w * P + Y * Q;
          b[16] = a * R + f * S + q * T + J * g + ia;
          b[17] = m * R + e * S + p * T + U * g + ja;
          b[18] = l * R + c * S + v * T + W * g + X;
          b[19] = d * R + k * S + w * T + Y * g + fa;
          this._type = 0;
        }
      };
      Object.defineProperty(g.prototype, "alphaMultiplier", {get:function() {
        return this._data[15];
      }, enumerable:!0, configurable:!0});
      g.prototype.hasOnlyAlphaMultiplier = function() {
        var a = this._data;
        return 1 == a[0] && 0 == a[1] && 0 == a[2] && 0 == a[3] && 0 == a[4] && 1 == a[5] && 0 == a[6] && 0 == a[7] && 0 == a[8] && 0 == a[9] && 1 == a[10] && 0 == a[11] && 0 == a[12] && 0 == a[13] && 0 == a[14] && 0 == a[16] && 0 == a[17] && 0 == a[18] && 0 == a[19];
      };
      g.prototype.equals = function(a) {
        if (!a) {
          return !1;
        }
        if (this._type === a._type && 1 === this._type) {
          return !0;
        }
        var b = this._data;
        a = a._data;
        for (var g = 0;20 > g;g++) {
          if (.001 < Math.abs(b[g] - a[g])) {
            return !1;
          }
        }
        return !0;
      };
      g.prototype.toSVGFilterMatrix = function() {
        var a = this._data;
        return [a[0], a[4], a[8], a[12], a[16], a[1], a[5], a[9], a[13], a[17], a[2], a[6], a[10], a[14], a[18], a[3], a[7], a[11], a[15], a[19]].join(" ");
      };
      return g;
    }(w);
    p.ColorMatrix = w;
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(p) {
    (function(g) {
      function b(a, b) {
        return -1 !== a.indexOf(b, this.length - b.length);
      }
      var w = p.Geometry.Point3D, v = p.Geometry.Matrix3D, a = p.Geometry.degreesToRadian, l = k.Debug.unexpected, q = k.Debug.notImplemented;
      g.SHADER_ROOT = "shaders/";
      var h = function() {
        function h(a, b) {
          this._fillColor = k.Color.Red;
          this._surfaceRegionCache = new k.LRUList;
          this.modelViewProjectionMatrix = v.createIdentity();
          this._canvas = a;
          this._options = b;
          this.gl = a.getContext("experimental-webgl", {preserveDrawingBuffer:!1, antialias:!0, stencil:!0, premultipliedAlpha:!1});
          this._programCache = Object.create(null);
          this._resize();
          this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, b.unpackPremultiplyAlpha ? this.gl.ONE : this.gl.ZERO);
          this._backgroundColor = k.Color.Black;
          this._geometry = new g.WebGLGeometry(this);
          this._tmpVertices = g.Vertex.createEmptyVertices(g.Vertex, 64);
          this._maxSurfaces = b.maxSurfaces;
          this._maxSurfaceSize = b.maxSurfaceSize;
          this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
          this.gl.enable(this.gl.BLEND);
          this.modelViewProjectionMatrix = v.create2DProjection(this._w, this._h, 2E3);
          var l = this;
          this._surfaceRegionAllocator = new p.SurfaceRegionAllocator.SimpleAllocator(function() {
            var a = l._createTexture();
            return new g.WebGLSurface(1024, 1024, a);
          });
        }
        Object.defineProperty(h.prototype, "surfaces", {get:function() {
          return this._surfaceRegionAllocator.surfaces;
        }, enumerable:!0, configurable:!0});
        Object.defineProperty(h.prototype, "fillStyle", {set:function(a) {
          this._fillColor.set(k.Color.parseColor(a));
        }, enumerable:!0, configurable:!0});
        h.prototype.setBlendMode = function(a) {
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
              q("Blend Mode: " + a);
          }
        };
        h.prototype.setBlendOptions = function() {
          this.gl.blendFunc(this._options.sourceBlendFactor, this._options.destinationBlendFactor);
        };
        h.glSupportedBlendMode = function(a) {
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
        h.prototype.create2DProjectionMatrix = function() {
          return v.create2DProjection(this._w, this._h, -this._w);
        };
        h.prototype.createPerspectiveMatrix = function(b, h, g) {
          g = a(g);
          h = v.createPerspective(a(h));
          var d = new w(0, 1, 0), f = new w(0, 0, 0);
          b = new w(0, 0, b);
          b = v.createCameraLookAt(b, f, d);
          b = v.createInverse(b);
          d = v.createIdentity();
          d = v.createMultiply(d, v.createTranslation(-this._w / 2, -this._h / 2));
          d = v.createMultiply(d, v.createScale(1 / this._w, -1 / this._h, .01));
          d = v.createMultiply(d, v.createYRotation(g));
          d = v.createMultiply(d, b);
          return d = v.createMultiply(d, h);
        };
        h.prototype.discardCachedImages = function() {
          2 <= p.traceLevel && p.writer && p.writer.writeLn("Discard Cache");
          for (var a = this._surfaceRegionCache.count / 2 | 0, b = 0;b < a;b++) {
            var h = this._surfaceRegionCache.pop();
            2 <= p.traceLevel && p.writer && p.writer.writeLn("Discard: " + h);
            h.texture.atlas.remove(h.region);
            h.texture = null;
          }
        };
        h.prototype.cacheImage = function(a) {
          var b = this.allocateSurfaceRegion(a.width, a.height);
          2 <= p.traceLevel && p.writer && p.writer.writeLn("Uploading Image: @ " + b.region);
          this._surfaceRegionCache.use(b);
          this.updateSurfaceRegion(a, b);
          return b;
        };
        h.prototype.allocateSurfaceRegion = function(a, b) {
          return this._surfaceRegionAllocator.allocate(a, b, null);
        };
        h.prototype.updateSurfaceRegion = function(a, b) {
          var h = this.gl;
          h.bindTexture(h.TEXTURE_2D, b.surface.texture);
          h.texSubImage2D(h.TEXTURE_2D, 0, b.region.x, b.region.y, h.RGBA, h.UNSIGNED_BYTE, a);
        };
        h.prototype._resize = function() {
          var a = this.gl;
          this._w = this._canvas.width;
          this._h = this._canvas.height;
          a.viewport(0, 0, this._w, this._h);
          for (var b in this._programCache) {
            this._initializeProgram(this._programCache[b]);
          }
        };
        h.prototype._initializeProgram = function(a) {
          this.gl.useProgram(a);
        };
        h.prototype._createShaderFromFile = function(a) {
          var h = g.SHADER_ROOT + a, l = this.gl;
          a = new XMLHttpRequest;
          a.open("GET", h, !1);
          a.send();
          if (b(h, ".vert")) {
            h = l.VERTEX_SHADER;
          } else {
            if (b(h, ".frag")) {
              h = l.FRAGMENT_SHADER;
            } else {
              throw "Shader Type: not supported.";
            }
          }
          return this._createShader(h, a.responseText);
        };
        h.prototype.createProgramFromFiles = function() {
          var a = this._programCache["combined.vert-combined.frag"];
          a || (a = this._createProgram([this._createShaderFromFile("combined.vert"), this._createShaderFromFile("combined.frag")]), this._queryProgramAttributesAndUniforms(a), this._initializeProgram(a), this._programCache["combined.vert-combined.frag"] = a);
          return a;
        };
        h.prototype._createProgram = function(a) {
          var b = this.gl, h = b.createProgram();
          a.forEach(function(a) {
            b.attachShader(h, a);
          });
          b.linkProgram(h);
          b.getProgramParameter(h, b.LINK_STATUS) || (l("Cannot link program: " + b.getProgramInfoLog(h)), b.deleteProgram(h));
          return h;
        };
        h.prototype._createShader = function(a, b) {
          var h = this.gl, d = h.createShader(a);
          h.shaderSource(d, b);
          h.compileShader(d);
          return h.getShaderParameter(d, h.COMPILE_STATUS) ? d : (l("Cannot compile shader: " + h.getShaderInfoLog(d)), h.deleteShader(d), null);
        };
        h.prototype._createTexture = function() {
          var a = this.gl, b = a.createTexture();
          a.bindTexture(a.TEXTURE_2D, b);
          a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE);
          a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE);
          a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR);
          a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR);
          a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, 1024, 1024, 0, a.RGBA, a.UNSIGNED_BYTE, null);
          return b;
        };
        h.prototype._createFramebuffer = function(a) {
          var b = this.gl, h = b.createFramebuffer();
          b.bindFramebuffer(b.FRAMEBUFFER, h);
          b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, a, 0);
          b.bindFramebuffer(b.FRAMEBUFFER, null);
          return h;
        };
        h.prototype._queryProgramAttributesAndUniforms = function(a) {
          a.uniforms = {};
          a.attributes = {};
          for (var b = this.gl, h = 0, d = b.getProgramParameter(a, b.ACTIVE_ATTRIBUTES);h < d;h++) {
            var f = b.getActiveAttrib(a, h);
            a.attributes[f.name] = f;
            f.location = b.getAttribLocation(a, f.name);
          }
          h = 0;
          for (d = b.getProgramParameter(a, b.ACTIVE_UNIFORMS);h < d;h++) {
            f = b.getActiveUniform(a, h), a.uniforms[f.name] = f, f.location = b.getUniformLocation(a, f.name);
          }
        };
        Object.defineProperty(h.prototype, "target", {set:function(a) {
          var b = this.gl;
          a ? (b.viewport(0, 0, a.w, a.h), b.bindFramebuffer(b.FRAMEBUFFER, a.framebuffer)) : (b.viewport(0, 0, this._w, this._h), b.bindFramebuffer(b.FRAMEBUFFER, null));
        }, enumerable:!0, configurable:!0});
        h.prototype.clear = function(a) {
          a = this.gl;
          a.clearColor(0, 0, 0, 0);
          a.clear(a.COLOR_BUFFER_BIT);
        };
        h.prototype.clearTextureRegion = function(a, b) {
          void 0 === b && (b = k.Color.None);
          var h = this.gl, d = a.region;
          this.target = a.surface;
          h.enable(h.SCISSOR_TEST);
          h.scissor(d.x, d.y, d.w, d.h);
          h.clearColor(b.r, b.g, b.b, b.a);
          h.clear(h.COLOR_BUFFER_BIT | h.DEPTH_BUFFER_BIT);
          h.disable(h.SCISSOR_TEST);
        };
        h.prototype.sizeOf = function(a) {
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
              q(a);
          }
        };
        h.MAX_SURFACES = 8;
        return h;
      }();
      g.WebGLContext = h;
    })(p.WebGL || (p.WebGL = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
__extends = this.__extends || function(k, p) {
  function g() {
    this.constructor = k;
  }
  for (var b in p) {
    p.hasOwnProperty(b) && (k[b] = p[b]);
  }
  g.prototype = p.prototype;
  k.prototype = new g;
};
(function(k) {
  (function(p) {
    (function(g) {
      var b = k.Debug.assert, w = function(a) {
        function g() {
          a.apply(this, arguments);
        }
        __extends(g, a);
        g.prototype.ensureVertexCapacity = function(a) {
          b(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 8 * a);
        };
        g.prototype.writeVertex = function(a, h) {
          b(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 8);
          this.writeVertexUnsafe(a, h);
        };
        g.prototype.writeVertexUnsafe = function(a, b) {
          var g = this._offset >> 2;
          this._f32[g] = a;
          this._f32[g + 1] = b;
          this._offset += 8;
        };
        g.prototype.writeVertex3D = function(a, h, g) {
          b(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 12);
          this.writeVertex3DUnsafe(a, h, g);
        };
        g.prototype.writeVertex3DUnsafe = function(a, b, g) {
          var l = this._offset >> 2;
          this._f32[l] = a;
          this._f32[l + 1] = b;
          this._f32[l + 2] = g;
          this._offset += 12;
        };
        g.prototype.writeTriangleElements = function(a, h, g) {
          b(0 === (this._offset & 1));
          this.ensureCapacity(this._offset + 6);
          var l = this._offset >> 1;
          this._u16[l] = a;
          this._u16[l + 1] = h;
          this._u16[l + 2] = g;
          this._offset += 6;
        };
        g.prototype.ensureColorCapacity = function(a) {
          b(0 === (this._offset & 2));
          this.ensureCapacity(this._offset + 16 * a);
        };
        g.prototype.writeColorFloats = function(a, h, g, l) {
          b(0 === (this._offset & 2));
          this.ensureCapacity(this._offset + 16);
          this.writeColorFloatsUnsafe(a, h, g, l);
        };
        g.prototype.writeColorFloatsUnsafe = function(a, b, g, l) {
          var m = this._offset >> 2;
          this._f32[m] = a;
          this._f32[m + 1] = b;
          this._f32[m + 2] = g;
          this._f32[m + 3] = l;
          this._offset += 16;
        };
        g.prototype.writeColor = function() {
          var a = Math.random(), h = Math.random(), g = Math.random(), l = Math.random() / 2;
          b(0 === (this._offset & 3));
          this.ensureCapacity(this._offset + 4);
          this._i32[this._offset >> 2] = l << 24 | g << 16 | h << 8 | a;
          this._offset += 4;
        };
        g.prototype.writeColorUnsafe = function(a, b, g, l) {
          this._i32[this._offset >> 2] = l << 24 | g << 16 | b << 8 | a;
          this._offset += 4;
        };
        g.prototype.writeRandomColor = function() {
          this.writeColor();
        };
        return g;
      }(k.ArrayUtilities.ArrayWriter);
      g.BufferWriter = w;
      g.WebGLAttribute = function() {
        return function(a, b, g, h) {
          void 0 === h && (h = !1);
          this.name = a;
          this.size = b;
          this.type = g;
          this.normalized = h;
        };
      }();
      var v = function() {
        function a(a) {
          this.size = 0;
          this.attributes = a;
        }
        a.prototype.initialize = function(a) {
          for (var b = 0, h = 0;h < this.attributes.length;h++) {
            this.attributes[h].offset = b, b += a.sizeOf(this.attributes[h].type) * this.attributes[h].size;
          }
          this.size = b;
        };
        return a;
      }();
      g.WebGLAttributeList = v;
      v = function() {
        function a(a) {
          this._elementOffset = this.triangleCount = 0;
          this.context = a;
          this.array = new w(8);
          this.buffer = a.gl.createBuffer();
          this.elementArray = new w(8);
          this.elementBuffer = a.gl.createBuffer();
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
      g.WebGLGeometry = v;
      v = function(a) {
        function b(g, h, l) {
          a.call(this, g, h, l);
        }
        __extends(b, a);
        b.createEmptyVertices = function(a, b) {
          for (var g = [], l = 0;l < b;l++) {
            g.push(new a(0, 0, 0));
          }
          return g;
        };
        return b;
      }(p.Geometry.Point3D);
      g.Vertex = v;
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
      })(g.WebGLBlendFactor || (g.WebGLBlendFactor = {}));
    })(p.WebGL || (p.WebGL = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    (function(g) {
      var b = function() {
        function b(a, g, q) {
          this.texture = q;
          this.w = a;
          this.h = g;
          this._regionAllocator = new k.RegionAllocator.CompactAllocator(this.w, this.h);
        }
        b.prototype.allocate = function(a, b) {
          var g = this._regionAllocator.allocate(a, b);
          return g ? new w(this, g) : null;
        };
        b.prototype.free = function(a) {
          this._regionAllocator.free(a.region);
        };
        return b;
      }();
      g.WebGLSurface = b;
      var w = function() {
        return function(b, a) {
          this.surface = b;
          this.region = a;
          this.next = this.previous = null;
        };
      }();
      g.WebGLSurfaceRegion = w;
    })(k.WebGL || (k.WebGL = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(p) {
    (function(g) {
      var b = k.Color;
      g.TILE_SIZE = 256;
      g.MIN_UNTILED_SIZE = 256;
      var w = p.Geometry.Matrix, v = p.Geometry.Rectangle, a = function(a) {
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
      g.WebGLRendererOptions = a;
      var l = function(l) {
        function h(b, h, m) {
          void 0 === m && (m = new a);
          l.call(this, b, h, m);
          this._tmpVertices = g.Vertex.createEmptyVertices(g.Vertex, 64);
          this._cachedTiles = [];
          b = this._context = new g.WebGLContext(this._canvas, m);
          this._updateSize();
          this._brush = new g.WebGLCombinedBrush(b, new g.WebGLGeometry(b));
          this._stencilBrush = new g.WebGLCombinedBrush(b, new g.WebGLGeometry(b));
          this._scratchCanvas = document.createElement("canvas");
          this._scratchCanvas.width = this._scratchCanvas.height = 2048;
          this._scratchCanvasContext = this._scratchCanvas.getContext("2d", {willReadFrequently:!0});
          this._dynamicScratchCanvas = document.createElement("canvas");
          this._dynamicScratchCanvas.width = this._dynamicScratchCanvas.height = 0;
          this._dynamicScratchCanvasContext = this._dynamicScratchCanvas.getContext("2d", {willReadFrequently:!0});
          this._uploadCanvas = document.createElement("canvas");
          this._uploadCanvas.width = this._uploadCanvas.height = 0;
          this._uploadCanvasContext = this._uploadCanvas.getContext("2d", {willReadFrequently:!0});
          m.showTemporaryCanvases && (document.getElementById("temporaryCanvasPanelContainer").appendChild(this._uploadCanvas), document.getElementById("temporaryCanvasPanelContainer").appendChild(this._scratchCanvas));
          this._clipStack = [];
        }
        __extends(h, l);
        h.prototype.resize = function() {
          this._updateSize();
          this.render();
        };
        h.prototype._updateSize = function() {
          this._viewport = new v(0, 0, this._canvas.width, this._canvas.height);
          this._context._resize();
        };
        h.prototype._cacheImageCallback = function(a, b, h) {
          var g = h.w, d = h.h, f = h.x;
          h = h.y;
          this._uploadCanvas.width = g + 2;
          this._uploadCanvas.height = d + 2;
          this._uploadCanvasContext.drawImage(b.canvas, f, h, g, d, 1, 1, g, d);
          this._uploadCanvasContext.drawImage(b.canvas, f, h, g, 1, 1, 0, g, 1);
          this._uploadCanvasContext.drawImage(b.canvas, f, h + d - 1, g, 1, 1, d + 1, g, 1);
          this._uploadCanvasContext.drawImage(b.canvas, f, h, 1, d, 0, 1, 1, d);
          this._uploadCanvasContext.drawImage(b.canvas, f + g - 1, h, 1, d, g + 1, 1, 1, d);
          return a && a.surface ? (this._options.disableSurfaceUploads || this._context.updateSurfaceRegion(this._uploadCanvas, a), a) : this._context.cacheImage(this._uploadCanvas);
        };
        h.prototype._enterClip = function(a, b, h, g) {
          h.flush();
          b = this._context.gl;
          0 === this._clipStack.length && (b.enable(b.STENCIL_TEST), b.clear(b.STENCIL_BUFFER_BIT), b.stencilFunc(b.ALWAYS, 1, 1));
          this._clipStack.push(a);
          b.colorMask(!1, !1, !1, !1);
          b.stencilOp(b.KEEP, b.KEEP, b.INCR);
          h.flush();
          b.colorMask(!0, !0, !0, !0);
          b.stencilFunc(b.NOTEQUAL, 0, this._clipStack.length);
          b.stencilOp(b.KEEP, b.KEEP, b.KEEP);
        };
        h.prototype._leaveClip = function(a, b, h, g) {
          h.flush();
          b = this._context.gl;
          if (a = this._clipStack.pop()) {
            b.colorMask(!1, !1, !1, !1), b.stencilOp(b.KEEP, b.KEEP, b.DECR), h.flush(), b.colorMask(!0, !0, !0, !0), b.stencilFunc(b.NOTEQUAL, 0, this._clipStack.length), b.stencilOp(b.KEEP, b.KEEP, b.KEEP);
          }
          0 === this._clipStack.length && b.disable(b.STENCIL_TEST);
        };
        h.prototype._renderFrame = function(a, b, h, g) {
        };
        h.prototype._renderSurfaces = function(a) {
          var h = this._options, l = this._context, k = this._viewport;
          if (h.drawSurfaces) {
            var d = l.surfaces, l = w.createIdentity();
            if (0 <= h.drawSurface && h.drawSurface < d.length) {
              for (var h = d[h.drawSurface | 0], d = new v(0, 0, h.w, h.h), f = d.clone();f.w > k.w;) {
                f.scale(.5, .5);
              }
              a.drawImage(new g.WebGLSurfaceRegion(h, d), f, b.White, null, l, .2);
            } else {
              f = k.w / 5;
              f > k.h / d.length && (f = k.h / d.length);
              a.fillRectangle(new v(k.w - f, 0, f, k.h), new b(0, 0, 0, .5), l, .1);
              for (var e = 0;e < d.length;e++) {
                var h = d[e], c = new v(k.w - f, e * f, f, f);
                a.drawImage(new g.WebGLSurfaceRegion(h, new v(0, 0, h.w, h.h)), c, b.White, null, l, .2);
              }
            }
            a.flush();
          }
        };
        h.prototype.render = function() {
          var a = this._options, h = this._context.gl;
          this._context.modelViewProjectionMatrix = a.perspectiveCamera ? this._context.createPerspectiveMatrix(a.perspectiveCameraDistance + (a.animateZoom ? .8 * Math.sin(Date.now() / 3E3) : 0), a.perspectiveCameraFOV, a.perspectiveCameraAngle) : this._context.create2DProjectionMatrix();
          var g = this._brush;
          h.clearColor(0, 0, 0, 0);
          h.clear(h.COLOR_BUFFER_BIT | h.DEPTH_BUFFER_BIT);
          g.reset();
          h = this._viewport;
          g.flush();
          a.paintViewport && (g.fillRectangle(h, new b(.5, 0, 0, .25), w.createIdentity(), 0), g.flush());
          this._renderSurfaces(g);
        };
        return h;
      }(p.Renderer);
      g.WebGLRenderer = l;
    })(p.WebGL || (p.WebGL = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(p) {
    (function(g) {
      var b = k.Color, w = p.Geometry.Point, v = p.Geometry.Matrix3D, a = function() {
        function a(b, g, l) {
          this._target = l;
          this._context = b;
          this._geometry = g;
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
      g.WebGLBrush = a;
      (function(a) {
        a[a.FillColor = 0] = "FillColor";
        a[a.FillTexture = 1] = "FillTexture";
        a[a.FillTextureWithColorMatrix = 2] = "FillTextureWithColorMatrix";
      })(g.WebGLCombinedBrushKind || (g.WebGLCombinedBrushKind = {}));
      var l = function(a) {
        function h(h, g, l) {
          a.call(this, h, g, l);
          this.kind = 0;
          this.color = new b(0, 0, 0, 0);
          this.sampler = 0;
          this.coordinate = new w(0, 0);
        }
        __extends(h, a);
        h.initializeAttributeList = function(a) {
          var b = a.gl;
          h.attributeList || (h.attributeList = new g.WebGLAttributeList([new g.WebGLAttribute("aPosition", 3, b.FLOAT), new g.WebGLAttribute("aCoordinate", 2, b.FLOAT), new g.WebGLAttribute("aColor", 4, b.UNSIGNED_BYTE, !0), new g.WebGLAttribute("aKind", 1, b.FLOAT), new g.WebGLAttribute("aSampler", 1, b.FLOAT)]), h.attributeList.initialize(a));
        };
        h.prototype.writeTo = function(a) {
          a = a.array;
          a.ensureAdditionalCapacity();
          a.writeVertex3DUnsafe(this.x, this.y, this.z);
          a.writeVertexUnsafe(this.coordinate.x, this.coordinate.y);
          a.writeColorUnsafe(255 * this.color.r, 255 * this.color.g, 255 * this.color.b, 255 * this.color.a);
          a.writeFloatUnsafe(this.kind);
          a.writeFloatUnsafe(this.sampler);
        };
        return h;
      }(g.Vertex);
      g.WebGLCombinedBrushVertex = l;
      a = function(a) {
        function b(h, g, m) {
          void 0 === m && (m = null);
          a.call(this, h, g, m);
          this._blendMode = 1;
          this._program = h.createProgramFromFiles();
          this._surfaces = [];
          l.initializeAttributeList(this._context);
        }
        __extends(b, a);
        b.prototype.reset = function() {
          this._surfaces = [];
          this._geometry.reset();
        };
        b.prototype.drawImage = function(a, g, l, k, d, f, e) {
          void 0 === f && (f = 0);
          void 0 === e && (e = 1);
          if (!a || !a.surface) {
            return !0;
          }
          g = g.clone();
          this._colorMatrix && (k && this._colorMatrix.equals(k) || this.flush());
          this._colorMatrix = k;
          this._blendMode !== e && (this.flush(), this._blendMode = e);
          e = this._surfaces.indexOf(a.surface);
          0 > e && (8 === this._surfaces.length && this.flush(), this._surfaces.push(a.surface), e = this._surfaces.length - 1);
          var c = b._tmpVertices, n = a.region.clone();
          n.offset(1, 1).resize(-2, -2);
          n.scale(1 / a.surface.w, 1 / a.surface.h);
          d.transformRectangle(g, c);
          for (a = 0;4 > a;a++) {
            c[a].z = f;
          }
          c[0].coordinate.x = n.x;
          c[0].coordinate.y = n.y;
          c[1].coordinate.x = n.x + n.w;
          c[1].coordinate.y = n.y;
          c[2].coordinate.x = n.x + n.w;
          c[2].coordinate.y = n.y + n.h;
          c[3].coordinate.x = n.x;
          c[3].coordinate.y = n.y + n.h;
          for (a = 0;4 > a;a++) {
            f = b._tmpVertices[a], f.kind = k ? 2 : 1, f.color.set(l), f.sampler = e, f.writeTo(this._geometry);
          }
          this._geometry.addQuad();
          return !0;
        };
        b.prototype.fillRectangle = function(a, g, l, k) {
          void 0 === k && (k = 0);
          l.transformRectangle(a, b._tmpVertices);
          for (a = 0;4 > a;a++) {
            l = b._tmpVertices[a], l.kind = 0, l.color.set(g), l.z = k, l.writeTo(this._geometry);
          }
          this._geometry.addQuad();
        };
        b.prototype.flush = function() {
          var a = this._geometry, b = this._program, h = this._context.gl, g;
          a.uploadBuffers();
          h.useProgram(b);
          this._target ? (g = v.create2DProjection(this._target.w, this._target.h, 2E3), g = v.createMultiply(g, v.createScale(1, -1, 1))) : g = this._context.modelViewProjectionMatrix;
          h.uniformMatrix4fv(b.uniforms.uTransformMatrix3D.location, !1, g.asWebGLMatrix());
          this._colorMatrix && (h.uniformMatrix4fv(b.uniforms.uColorMatrix.location, !1, this._colorMatrix.asWebGLMatrix()), h.uniform4fv(b.uniforms.uColorVector.location, this._colorMatrix.asWebGLVector()));
          for (g = 0;g < this._surfaces.length;g++) {
            h.activeTexture(h.TEXTURE0 + g), h.bindTexture(h.TEXTURE_2D, this._surfaces[g].texture);
          }
          h.uniform1iv(b.uniforms["uSampler[0]"].location, [0, 1, 2, 3, 4, 5, 6, 7]);
          h.bindBuffer(h.ARRAY_BUFFER, a.buffer);
          var d = l.attributeList.size, f = l.attributeList.attributes;
          for (g = 0;g < f.length;g++) {
            var e = f[g], c = b.attributes[e.name].location;
            h.enableVertexAttribArray(c);
            h.vertexAttribPointer(c, e.size, e.type, e.normalized, d, e.offset);
          }
          this._context.setBlendOptions();
          this._context.target = this._target;
          h.bindBuffer(h.ELEMENT_ARRAY_BUFFER, a.elementBuffer);
          h.drawElements(h.TRIANGLES, 3 * a.triangleCount, h.UNSIGNED_SHORT, 0);
          this.reset();
        };
        b._tmpVertices = g.Vertex.createEmptyVertices(l, 4);
        b._depth = 1;
        return b;
      }(a);
      g.WebGLCombinedBrush = a;
    })(p.WebGL || (p.WebGL = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    (function(g) {
      var b = CanvasRenderingContext2D.prototype.save, k = CanvasRenderingContext2D.prototype.clip, p = CanvasRenderingContext2D.prototype.fill, a = CanvasRenderingContext2D.prototype.stroke, l = CanvasRenderingContext2D.prototype.restore, q = CanvasRenderingContext2D.prototype.beginPath;
      g.notifyReleaseChanged = function() {
        CanvasRenderingContext2D.prototype.save = b;
        CanvasRenderingContext2D.prototype.clip = k;
        CanvasRenderingContext2D.prototype.fill = p;
        CanvasRenderingContext2D.prototype.stroke = a;
        CanvasRenderingContext2D.prototype.restore = l;
        CanvasRenderingContext2D.prototype.beginPath = q;
      };
      CanvasRenderingContext2D.prototype.enterBuildingClippingRegion = function() {
        this.buildingClippingRegionDepth || (this.buildingClippingRegionDepth = 0);
        this.buildingClippingRegionDepth++;
      };
      CanvasRenderingContext2D.prototype.leaveBuildingClippingRegion = function() {
        this.buildingClippingRegionDepth--;
      };
    })(k.Canvas2D || (k.Canvas2D = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(p) {
    (function(g) {
      function b(a, b) {
        var g = a / 2;
        switch(b) {
          case 0:
            return 0;
          case 1:
            return g / 2.7;
          case 2:
            return g / 1.28;
          default:
            return g;
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
            k.Debug.somewhatImplemented("Blend Mode: " + p.BlendMode[a]);
        }
        return b;
      }
      var v = k.NumberUtilities.clamp;
      navigator.userAgent.indexOf("Firefox");
      var a = function() {
        function a() {
        }
        a._prepareSVGFilters = function() {
          if (!a._svgBlurFilter) {
            var b = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            b.setAttribute("style", "display:block;width:0px;height:0px");
            var g = document.createElementNS("http://www.w3.org/2000/svg", "defs"), l = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            l.setAttribute("id", "svgBlurFilter");
            var k = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
            k.setAttribute("stdDeviation", "0 0");
            l.appendChild(k);
            g.appendChild(l);
            a._svgBlurFilter = k;
            l = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            l.setAttribute("id", "svgDropShadowFilter");
            k = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
            k.setAttribute("in", "SourceAlpha");
            k.setAttribute("stdDeviation", "3");
            l.appendChild(k);
            a._svgDropshadowFilterBlur = k;
            k = document.createElementNS("http://www.w3.org/2000/svg", "feOffset");
            k.setAttribute("dx", "0");
            k.setAttribute("dy", "0");
            k.setAttribute("result", "offsetblur");
            l.appendChild(k);
            a._svgDropshadowFilterOffset = k;
            k = document.createElementNS("http://www.w3.org/2000/svg", "feFlood");
            k.setAttribute("flood-color", "rgba(0,0,0,1)");
            l.appendChild(k);
            a._svgDropshadowFilterFlood = k;
            k = document.createElementNS("http://www.w3.org/2000/svg", "feComposite");
            k.setAttribute("in2", "offsetblur");
            k.setAttribute("operator", "in");
            l.appendChild(k);
            var k = document.createElementNS("http://www.w3.org/2000/svg", "feMerge"), d = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
            k.appendChild(d);
            d = document.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
            d.setAttribute("in", "SourceGraphic");
            k.appendChild(d);
            l.appendChild(k);
            g.appendChild(l);
            l = document.createElementNS("http://www.w3.org/2000/svg", "filter");
            l.setAttribute("id", "svgColorMatrixFilter");
            k = document.createElementNS("http://www.w3.org/2000/svg", "feColorMatrix");
            k.setAttribute("color-interpolation-filters", "sRGB");
            k.setAttribute("in", "SourceGraphic");
            k.setAttribute("type", "matrix");
            l.appendChild(k);
            g.appendChild(l);
            a._svgColorMatrixFilter = k;
            b.appendChild(g);
            document.documentElement.appendChild(b);
          }
        };
        a._applyFilter = function(g, l, m) {
          debugger;
          if (a._svgFiltersAreSupported) {
            if (a._prepareSVGFilters(), a._removeFilter(l), m instanceof p.BlurFilter) {
              var q = b(g, m.quality);
              a._svgBlurFilter.setAttribute("stdDeviation", m.blurX * q + " " + m.blurY * q);
              l.filter = "url(#svgBlurFilter)";
            } else {
              m instanceof p.DropshadowFilter ? (q = b(g, m.quality), a._svgDropshadowFilterBlur.setAttribute("stdDeviation", m.blurX * q + " " + m.blurY * q), a._svgDropshadowFilterOffset.setAttribute("dx", String(Math.cos(m.angle * Math.PI / 180) * m.distance * g)), a._svgDropshadowFilterOffset.setAttribute("dy", String(Math.sin(m.angle * Math.PI / 180) * m.distance * g)), a._svgDropshadowFilterFlood.setAttribute("flood-color", k.ColorUtilities.rgbaToCSSStyle(m.color << 8 | Math.round(255 * m.alpha))), 
              l.filter = "url(#svgDropShadowFilter)") : m instanceof p.ColorMatrix && (a._svgColorMatrixFilter.setAttribute("values", m.toSVGFilterMatrix()), l.filter = "url(#svgColorMatrixFilter)");
            }
          }
        };
        a._removeFilter = function(a) {
          a.filter = "none";
        };
        a._applyColorMatrix = function(a, b) {
          b.isIdentity() ? (a.globalAlpha = 1, a.globalColorMatrix = null) : b.hasOnlyAlphaMultiplier() ? (a.globalAlpha = v(b.alphaMultiplier, 0, 1), a.globalColorMatrix = null) : (a.globalAlpha = 1, a.globalColorMatrix = b);
        };
        a._svgFiltersAreSupported = !!Object.getOwnPropertyDescriptor(CanvasRenderingContext2D.prototype, "filter");
        return a;
      }();
      g.Filters = a;
      p.filters && a._svgFiltersAreSupported && ("registerScratchCanvas" in window || (window.registerScratchCanvas = function(a) {
        a.style.display = "none";
        document.body.appendChild(a);
      }));
      var l = function() {
        function b(a, h, g, l) {
          this.surface = a;
          this.region = h;
          this.w = g;
          this.h = l;
        }
        b.prototype.free = function() {
          this.surface.free(this);
        };
        b._ensureCopyCanvasSize = function(a, g) {
          var l;
          if (b._copyCanvasContext) {
            if (l = b._copyCanvasContext.canvas, l.width < a || l.height < g) {
              l.width = k.IntegerUtilities.nearestPowerOfTwo(a), l.height = k.IntegerUtilities.nearestPowerOfTwo(g);
            }
          } else {
            l = document.createElement("canvas"), "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(l), l.width = k.IntegerUtilities.nearestPowerOfTwo(a), l.height = k.IntegerUtilities.nearestPowerOfTwo(g), b._copyCanvasContext = l.getContext("2d");
          }
        };
        b.prototype.draw = function(g, l, k, q, d, f, e, c, n) {
          this.context.setTransform(1, 0, 0, 1, 0, 0);
          var p, F, v = 0, V = 0;
          g.context.canvas === this.context.canvas ? (b._ensureCopyCanvasSize(q, d), F = b._copyCanvasContext, F.clearRect(0, 0, q, d), F.drawImage(g.surface.canvas, g.region.x, g.region.y, q, d, 0, 0, q, d), p = F, V = v = 0) : (p = g.surface.context, v = g.region.x, V = g.region.y);
          a: {
            switch(e) {
              case 11:
                g = !0;
                break a;
              default:
                g = !1;
            }
          }
          g && (this.context.save(), this.context.beginPath(), this.context.rect(l, k, q, d), this.context.clip());
          this.context.globalCompositeOperation = w(e);
          a._applyColorMatrix(this.context, f);
          if (c) {
            f = 0;
            if (1 < c.length) {
              var J, U, W;
              F ? (e = F, F = p, p = e) : (b._ensureCopyCanvasSize(q, d), F = b._copyCanvasContext, U = J = 0);
              for (;f < c.length - 1;f++) {
                F.clearRect(0, 0, q, d), a._applyFilter(n, F, c[f]), F.drawImage(p.canvas, v, V, q, d, J, U, q, d), a._removeFilter(F), e = F, U = v, W = V, F = p, p = e, V = v = J, J = U, U = W;
              }
            }
            a._applyFilter(n, this.context, c[f]);
          }
          this.context.drawImage(p.canvas, v, V, q, d, l, k, q, d);
          a._removeFilter(this.context);
          this.context.globalCompositeOperation = w(1);
          g && this.context.restore();
        };
        Object.defineProperty(b.prototype, "context", {get:function() {
          return this.surface.context;
        }, enumerable:!0, configurable:!0});
        b.prototype.resetTransform = function() {
          this.surface.context.setTransform(1, 0, 0, 1, 0, 0);
        };
        b.prototype.reset = function() {
          var a = this.surface.context;
          a.setTransform(1, 0, 0, 1, 0, 0);
          a.fillStyle = null;
          a.strokeStyle = null;
          a.globalAlpha = 1;
          a.globalColorMatrix = null;
          a.globalCompositeOperation = w(1);
        };
        b.prototype.fill = function(a) {
          var b = this.surface.context, g = this.region;
          b.fillStyle = a;
          b.fillRect(g.x, g.y, g.w, g.h);
        };
        b.prototype.clear = function(a) {
          var b = this.surface.context, g = this.region;
          a || (a = g);
          b.clearRect(a.x, a.y, a.w, a.h);
        };
        return b;
      }();
      g.Canvas2DSurfaceRegion = l;
      var q = function() {
        function a(b, g) {
          this.canvas = b;
          this.context = b.getContext("2d");
          this.w = b.width;
          this.h = b.height;
          this._regionAllocator = g;
        }
        a.prototype.allocate = function(a, b) {
          var g = this._regionAllocator.allocate(a, b);
          return g ? new l(this, g, a, b) : null;
        };
        a.prototype.free = function(a) {
          this._regionAllocator.free(a.region);
        };
        return a;
      }();
      g.Canvas2DSurface = q;
    })(p.Canvas2D || (p.Canvas2D = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(p) {
    (function(g) {
      var b = k.Debug.assert, w = k.GFX.Geometry.Rectangle, v = k.GFX.Geometry.Point, a = k.GFX.Geometry.Matrix, l = k.NumberUtilities.clamp, q = k.NumberUtilities.pow2, h = function() {
        return function(a, b) {
          this.surfaceRegion = a;
          this.scale = b;
        };
      }();
      g.MipMapLevel = h;
      var t = function() {
        function a(b, c, d, f) {
          this._node = c;
          this._levels = [];
          this._surfaceRegionAllocator = d;
          this._size = f;
          this._renderer = b;
        }
        a.prototype.getLevel = function(a) {
          a = Math.max(a.getAbsoluteScaleX(), a.getAbsoluteScaleY());
          var c = 0;
          1 !== a && (c = l(Math.round(Math.log(a) / Math.LN2), -5, 3));
          this._node.hasFlags(2097152) || (c = l(c, -5, 0));
          a = q(c);
          var b = 5 + c, c = this._levels[b];
          if (!c) {
            var d = this._node.getBounds().clone();
            d.scale(a, a);
            d.snap();
            var f = this._surfaceRegionAllocator.allocate(d.w, d.h, null), g = f.region, c = this._levels[b] = new h(f, a), b = new m(f);
            b.clip.set(g);
            b.matrix.setElements(a, 0, 0, a, g.x - d.x, g.y - d.y);
            b.flags |= 64;
            this._renderer.renderNodeWithState(this._node, b);
            b.free();
          }
          return c;
        };
        return a;
      }();
      g.MipMap = t;
      (function(a) {
        a[a.NonZero = 0] = "NonZero";
        a[a.EvenOdd = 1] = "EvenOdd";
      })(g.FillRule || (g.FillRule = {}));
      var r = function(a) {
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
      g.Canvas2DRendererOptions = r;
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
      })(g.RenderFlags || (g.RenderFlags = {}));
      w.createMaxI16();
      var m = function(b) {
        function d(c) {
          b.call(this);
          this.clip = w.createEmpty();
          this.clipList = [];
          this.clipPath = null;
          this.flags = 0;
          this.target = null;
          this.matrix = a.createIdentity();
          this.colorMatrix = p.ColorMatrix.createIdentity();
          d.allocationCount++;
          this.target = c;
        }
        __extends(d, b);
        d.prototype.set = function(a) {
          this.clip.set(a.clip);
          this.clipPath = a.clipPath;
          this.target = a.target;
          this.matrix.set(a.matrix);
          this.colorMatrix.set(a.colorMatrix);
          this.flags = a.flags;
          k.ArrayUtilities.copyFrom(this.clipList, a.clipList);
        };
        d.prototype.clone = function() {
          var a = d.allocate();
          a || (a = new d(this.target));
          a.set(this);
          return a;
        };
        d.allocate = function() {
          var a = d._dirtyStack, b = null;
          a.length && (b = a.pop());
          return b;
        };
        d.prototype.free = function() {
          this.clipPath = null;
          d._dirtyStack.push(this);
        };
        d.prototype.transform = function(a) {
          var b = this.clone();
          b.matrix.preMultiply(a.getMatrix());
          a.hasColorMatrix() && b.colorMatrix.multiply(a.getColorMatrix());
          return b;
        };
        d.prototype.hasFlags = function(a) {
          return (this.flags & a) === a;
        };
        d.prototype.removeFlags = function(a) {
          this.flags &= ~a;
        };
        d.prototype.toggleFlags = function(a, b) {
          this.flags = b ? this.flags | a : this.flags & ~a;
        };
        d.prototype.beginClipPath = function(a) {
          this.target.context.save();
          this.clipPath = new Path2D;
        };
        d.prototype.applyClipPath = function() {
          var a = this.target.context;
          a.setTransform(1, 0, 0, 1, 0, 0);
          a.clip(this.clipPath);
          var b = this.matrix;
          a.setTransform(b.a, b.b, b.c, b.d, b.tx, b.ty);
        };
        d.prototype.closeClipPath = function() {
          this.target.context.restore();
        };
        d.allocationCount = 0;
        d._dirtyStack = [];
        return d;
      }(p.State);
      g.RenderState = m;
      var u = function() {
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
      g.FrameInfo = u;
      var d = function(d) {
        function e(a, b, g) {
          void 0 === g && (g = new r);
          d.call(this, a, b, g);
          this._visited = 0;
          this._frameInfo = new u;
          this._fontSize = 0;
          this._layers = [];
          if (a instanceof HTMLCanvasElement) {
            var h = a;
            this._viewport = new w(0, 0, h.width, h.height);
            this._target = this._createTarget(h);
          } else {
            this._addLayer("Background Layer");
            g = this._addLayer("Canvas Layer");
            h = document.createElement("canvas");
            g.appendChild(h);
            this._viewport = new w(0, 0, a.scrollWidth, a.scrollHeight);
            var l = this;
            b.addEventListener(1, function() {
              l._onStageBoundsChanged(h);
            });
            this._onStageBoundsChanged(h);
          }
          e._prepareSurfaceAllocators();
        }
        __extends(e, d);
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
          return new g.Canvas2DSurfaceRegion(new g.Canvas2DSurface(a), new p.RegionAllocator.Region(0, 0, a.width, a.height), a.width, a.height);
        };
        e.prototype._onStageBoundsChanged = function(a) {
          var b = this._stage.getBounds(!0);
          b.snap();
          for (var d = this._devicePixelRatio = window.devicePixelRatio || 1, e = b.w / d + "px", d = b.h / d + "px", f = 0;f < this._layers.length;f++) {
            var g = this._layers[f];
            g.style.width = e;
            g.style.height = d;
          }
          a.width = b.w;
          a.height = b.h;
          a.style.position = "absolute";
          a.style.width = e;
          a.style.height = d;
          this._target = this._createTarget(a);
          this._fontSize = 10 * this._devicePixelRatio;
        };
        e._prepareSurfaceAllocators = function() {
          e._initializedCaches || (e._surfaceCache = new p.SurfaceRegionAllocator.SimpleAllocator(function(a, b) {
            var d = document.createElement("canvas");
            "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(d);
            var e = Math.max(1024, a), f = Math.max(1024, b);
            d.width = e;
            d.height = f;
            var h = null, h = 512 <= a || 512 <= b ? new p.RegionAllocator.GridAllocator(e, f, e, f) : new p.RegionAllocator.BucketAllocator(e, f);
            return new g.Canvas2DSurface(d, h);
          }), e._shapeCache = new p.SurfaceRegionAllocator.SimpleAllocator(function(a, b) {
            var d = document.createElement("canvas");
            "undefined" !== typeof registerScratchCanvas && registerScratchCanvas(d);
            d.width = 1024;
            d.height = 1024;
            var e = e = new p.RegionAllocator.CompactAllocator(1024, 1024);
            return new g.Canvas2DSurface(d, e);
          }), e._initializedCaches = !0);
        };
        e.prototype.render = function() {
          var a = this._stage, b = this._target, d = this._options, e = this._viewport;
          b.reset();
          b.context.save();
          b.context.beginPath();
          b.context.rect(e.x, e.y, e.w, e.h);
          b.context.clip();
          this._renderStageToTarget(b, a, e);
          b.reset();
          d.paintViewport && (b.context.beginPath(), b.context.rect(e.x, e.y, e.w, e.h), b.context.strokeStyle = "#FF4981", b.context.lineWidth = 2, b.context.stroke());
          b.context.restore();
        };
        e.prototype.renderNode = function(a, b, d) {
          var e = new m(this._target);
          e.clip.set(b);
          e.flags = 256;
          e.matrix.set(d);
          a.visit(this, e);
          e.free();
        };
        e.prototype.renderNodeWithState = function(a, b) {
          a.visit(this, b);
        };
        e.prototype._renderWithCache = function(a, b) {
          var d = b.matrix, f = a.getBounds();
          if (f.isEmpty()) {
            return !1;
          }
          var g = this._options.cacheShapesMaxSize, h = Math.max(d.getAbsoluteScaleX(), d.getAbsoluteScaleY()), l = !!(b.flags & 16), k = !!(b.flags & 8);
          if (b.hasFlags(256)) {
            if (k || l || !b.colorMatrix.isIdentity() || a.hasFlags(1048576) || 100 < this._options.cacheShapesThreshold || f.w * h > g || f.h * h > g) {
              return !1;
            }
            (h = a.properties.mipMap) || (h = a.properties.mipMap = new t(this, a, e._shapeCache, g));
            l = h.getLevel(d);
            g = l.surfaceRegion;
            h = g.region;
            return l ? (l = b.target.context, l.imageSmoothingEnabled = l.mozImageSmoothingEnabled = !0, l.setTransform(d.a, d.b, d.c, d.d, d.tx, d.ty), l.drawImage(g.surface.canvas, h.x, h.y, h.w, h.h, f.x, f.y, f.w, f.h), !0) : !1;
          }
        };
        e.prototype._intersectsClipList = function(a, b) {
          var d = a.getBounds(!0), e = !1;
          b.matrix.transformRectangleAABB(d);
          b.clip.intersects(d) && (e = !0);
          var f = b.clipList;
          if (e && f.length) {
            for (var e = !1, g = 0;g < f.length;g++) {
              if (d.intersects(f[g])) {
                e = !0;
                break;
              }
            }
          }
          d.free();
          return e;
        };
        e.prototype.visitGroup = function(a, b) {
          this._frameInfo.groups++;
          a.getBounds();
          if ((!a.hasFlags(4) || b.flags & 4) && a.hasFlags(65536)) {
            var d = b.flags & 1;
            if (!d && ((1 !== a.getLayer().blendMode || a.getLayer().mask) && this._options.blending || a.getLayer().filters && this._options.filters)) {
              b = b.clone(), b.flags |= 1, this._renderLayer(a, b), b.free();
            } else {
              if (d && b.removeFlags(1), this._intersectsClipList(a, b)) {
                for (var d = null, e = a.getChildren(), f = 0;f < e.length;f++) {
                  var g = e[f], h = g.getTransform(), l = b.transform(h);
                  l.toggleFlags(4096, g.hasFlags(524288));
                  if (0 <= g.clip) {
                    d = d || new Uint8Array(e.length);
                    d[g.clip + f]++;
                    var k = l.clone();
                    k.flags |= 16;
                    k.beginClipPath(h.getMatrix());
                    g.visit(this, k);
                    k.applyClipPath();
                    k.free();
                  } else {
                    g.visit(this, l);
                  }
                  if (d && 0 < d[f]) {
                    for (;d[f]--;) {
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
            var d = b.target.context, f = a.getBounds(!0), g = a.properties.style;
            g || (g = a.properties.style = k.Color.randomColor().toCSSStyle());
            d.strokeStyle = g;
            b.matrix.transformRectangleAABB(f);
            d.setTransform(1, 0, 0, 1, 0, 0);
            f.free();
            f = a.getBounds();
            g = e._debugPoints;
            b.matrix.transformRectangle(f, g);
            d.lineWidth = 1;
            d.beginPath();
            d.moveTo(g[0].x, g[0].y);
            d.lineTo(g[1].x, g[1].y);
            d.lineTo(g[2].x, g[2].y);
            d.lineTo(g[3].x, g[3].y);
            d.lineTo(g[0].x, g[0].y);
            d.stroke();
          }
        };
        e.prototype.visitStage = function(a, b) {
          var d = b.target.context, e = a.getBounds(!0);
          b.matrix.transformRectangleAABB(e);
          e.intersect(b.clip);
          b.target.reset();
          b = b.clone();
          this._options.clear && b.target.clear(b.clip);
          a.hasFlags(32768) || !a.color || b.flags & 32 || (this._container.style.backgroundColor = a.color.toCSSStyle());
          this.visitGroup(a, b);
          a.dirtyRegion && (d.restore(), b.target.reset(), d.globalAlpha = .4, b.hasFlags(2048) && a.dirtyRegion.render(b.target.context), a.dirtyRegion.clear());
          b.free();
        };
        e.prototype.visitShape = function(a, b) {
          if (this._intersectsClipList(a, b)) {
            var d = b.matrix;
            b.flags & 8192 && (d = d.clone(), d.snap());
            var e = b.target.context;
            g.Filters._applyColorMatrix(e, b.colorMatrix);
            a.source instanceof p.RenderableVideo ? this.visitRenderableVideo(a.source, b) : 0 < e.globalAlpha && this.visitRenderable(a.source, b, a.ratio);
            b.flags & 8192 && d.free();
            g.Filters._removeFilter(e);
          }
        };
        e.prototype.visitRenderableVideo = function(a, b) {
          if (a.video && a.video.videoWidth) {
            var d = this._devicePixelRatio, e = b.matrix.clone();
            e.scale(1 / d, 1 / d);
            var d = a.getBounds(), f = k.GFX.Geometry.Matrix.createIdentity();
            f.scale(d.w / a.video.videoWidth, d.h / a.video.videoHeight);
            e.preMultiply(f);
            f.free();
            d = e.toCSSTransform();
            a.video.style.transformOrigin = "0 0";
            a.video.style.transform = d;
            var g = this._backgroundVideoLayer;
            g !== a.video.parentElement && (g.appendChild(a.video), a.addEventListener(2, function U(a) {
              g.removeChild(a.video);
              a.removeEventListener(2, U);
            }));
            e.free();
          }
        };
        e.prototype.visitRenderable = function(a, b, d) {
          var e = a.getBounds();
          if (!(b.flags & 32 || e.isEmpty())) {
            if (b.hasFlags(64)) {
              b.removeFlags(64);
            } else {
              if (this._renderWithCache(a, b)) {
                return;
              }
            }
            var f = b.matrix, e = b.target.context, g = !!(b.flags & 16), h = !!(b.flags & 8);
            e.setTransform(f.a, f.b, f.c, f.d, f.tx, f.ty);
            this._frameInfo.shapes++;
            e.imageSmoothingEnabled = e.mozImageSmoothingEnabled = b.hasFlags(4096);
            f = a.properties.renderCount || 0;
            a.properties.renderCount = ++f;
            a.render(e, d, null, g ? b.clipPath : null, h);
          }
        };
        e.prototype._renderLayer = function(a, b) {
          var d = a.getLayer(), e = d.mask;
          if (e) {
            this._renderWithMask(a, e, d.blendMode, !a.hasFlags(131072) || !e.hasFlags(131072), b);
          } else {
            var e = w.allocate(), f = this._renderToTemporarySurface(a, a.getLayerBounds(!!this._options.filters), b, e, b.target.surface);
            f && (b.target.draw(f, e.x, e.y, e.w, e.h, b.colorMatrix, d.blendMode, this._options.filters ? d.filters : null, this._devicePixelRatio), f.free());
            e.free();
          }
        };
        e.prototype._renderWithMask = function(a, b, d, e, f) {
          var g = b.getTransform().getConcatenatedMatrix(!0);
          b.parent || (g = g.scale(this._devicePixelRatio, this._devicePixelRatio));
          var h = a.getBounds().clone();
          f.matrix.transformRectangleAABB(h);
          h.snap();
          if (!h.isEmpty()) {
            var l = b.getBounds().clone();
            g.transformRectangleAABB(l);
            l.snap();
            if (!l.isEmpty()) {
              var k = f.clip.clone();
              k.intersect(h);
              k.intersect(l);
              k.snap();
              k.isEmpty() || (h = f.clone(), h.clip.set(k), a = this._renderToTemporarySurface(a, a.getBounds(), h, w.createEmpty(), null), h.free(), l = f.clone(), l.clip.set(k), l.matrix = g, l.flags |= 4, e && (l.flags |= 8), b = this._renderToTemporarySurface(b, b.getBounds(), l, w.createEmpty(), a.surface), l.free(), a.draw(b, 0, 0, k.w, k.h, l.colorMatrix, 11, null, this._devicePixelRatio), f.target.draw(a, k.x, k.y, k.w, k.h, h.colorMatrix, d, null, this._devicePixelRatio), b.free(), a.free());
            }
          }
        };
        e.prototype._renderStageToTarget = function(b, d, e) {
          w.allocationCount = a.allocationCount = m.allocationCount = 0;
          b = new m(b);
          b.clip.set(e);
          this._options.paintRenderable || (b.flags |= 32);
          this._options.paintBounds && (b.flags |= 1024);
          this._options.paintDirtyRegion && (b.flags |= 2048);
          this._options.paintFlashing && (b.flags |= 512);
          this._options.cacheShapes && (b.flags |= 256);
          this._options.imageSmoothing && (b.flags |= 4096);
          this._options.snapToDevicePixels && (b.flags |= 8192);
          this._frameInfo.enter(b);
          d.visit(this, b);
          this._frameInfo.leave();
        };
        e.prototype._renderToTemporarySurface = function(a, b, d, e, f) {
          var g = d.matrix;
          b = b.clone();
          g.transformRectangleAABB(b);
          b.snap();
          e.set(b);
          e.intersect(d.clip);
          e.snap();
          if (e.isEmpty()) {
            return null;
          }
          f = this._allocateSurface(e.w, e.h, f);
          b = f.region;
          b = new w(b.x, b.y, e.w, e.h);
          f.context.setTransform(1, 0, 0, 1, 0, 0);
          f.clear();
          g = g.clone();
          g.translate(b.x - e.x, b.y - e.y);
          f.context.save();
          d = d.clone();
          d.target = f;
          d.matrix = g;
          d.clip.set(b);
          a.visit(this, d);
          d.free();
          f.context.restore();
          return f;
        };
        e.prototype._allocateSurface = function(a, b, d) {
          return e._surfaceCache.allocate(a, b, d);
        };
        e.prototype.screenShot = function(a, d, e) {
          d && (d = this._stage.content.groupChild.child, b(d instanceof p.Stage), a = d.content.getBounds(!0), d.content.getTransform().getConcatenatedMatrix().transformRectangleAABB(a), a.intersect(this._viewport));
          a || (a = new w(0, 0, this._target.w, this._target.h));
          d = a.w;
          var f = a.h, g = this._devicePixelRatio;
          e && (d /= g, f /= g, g = 1);
          e = document.createElement("canvas");
          e.width = d;
          e.height = f;
          var h = e.getContext("2d");
          h.fillStyle = this._container.style.backgroundColor;
          h.fillRect(0, 0, d, f);
          h.drawImage(this._target.context.canvas, a.x, a.y, a.w, a.h, 0, 0, d, f);
          return new p.ScreenShot(e.toDataURL("image/png"), d, f, g);
        };
        e._initializedCaches = !1;
        e._debugPoints = v.createEmptyPoints(4);
        return e;
      }(p.Renderer);
      g.Canvas2DRenderer = d;
    })(p.Canvas2D || (p.Canvas2D = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(p) {
    var g = p.Geometry.Point, b = p.Geometry.Matrix, w = p.Geometry.Rectangle, v = k.Tools.Mini.FPS, a = function() {
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
    p.UIState = a;
    var l = function(a) {
      function b() {
        a.apply(this, arguments);
        this._keyCodes = [];
      }
      __extends(b, a);
      b.prototype.onMouseDown = function(a, b) {
        b.altKey && (a.state = new h(a.worldView, a.getMousePosition(b, null), a.worldView.getTransform().getMatrix(!0)));
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
    }(a), q = function(a) {
      function b() {
        a.apply(this, arguments);
        this._keyCodes = [];
        this._paused = !1;
        this._mousePosition = new g(0, 0);
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
        var d = "DOMMouseScroll" === b.type ? -b.detail : b.wheelDelta / 40;
        if (b.altKey) {
          b.preventDefault();
          var f = a.getMousePosition(b, null), e = a.worldView.getTransform().getMatrix(!0), d = 1 + d / 1E3;
          e.translate(-f.x, -f.y);
          e.scale(d, d);
          e.translate(f.x, f.y);
          a.worldView.getTransform().setMatrix(e);
        }
      };
      b.prototype.onKeyPress = function(a, b) {
        if (b.altKey) {
          var d = b.keyCode || b.which;
          console.info("onKeyPress Code: " + d);
          switch(d) {
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
        if (a.getOption()) {
          var b = p.viewportLoupeDiameter.value, d = p.viewportLoupeDiameter.value;
          a.viewport = new w(this._mousePosition.x - b / 2, this._mousePosition.y - d / 2, b, d);
        } else {
          a.viewport = null;
        }
      };
      return b;
    }(a);
    (function(a) {
      function b() {
        a.apply(this, arguments);
        this._startTime = Date.now();
      }
      __extends(b, a);
      b.prototype.onMouseMove = function(a, b) {
        if (!(10 > Date.now() - this._startTime)) {
          var d = a._world;
          d && (a.state = new h(d, a.getMousePosition(b, null), d.getTransform().getMatrix(!0)));
        }
      };
      b.prototype.onMouseUp = function(a, b) {
        a.state = new l;
        a.selectNodeUnderMouse(b);
      };
      return b;
    })(a);
    var h = function(a) {
      function b(g, h, d) {
        a.call(this);
        this._target = g;
        this._startPosition = h;
        this._startMatrix = d;
      }
      __extends(b, a);
      b.prototype.onMouseMove = function(a, b) {
        b.preventDefault();
        var d = a.getMousePosition(b, null);
        d.sub(this._startPosition);
        this._target.getTransform().setMatrix(this._startMatrix.clone().translate(d.x, d.y));
        a.state = this;
      };
      b.prototype.onMouseUp = function(a, b) {
        a.state = new l;
      };
      return b;
    }(a), a = function() {
      function a(b, g, h) {
        function d(a) {
          c._state.onMouseWheel(c, a);
          c._persistentState.onMouseWheel(c, a);
        }
        void 0 === g && (g = !1);
        void 0 === h && (h = void 0);
        this._state = new l;
        this._persistentState = new q;
        this.paused = !1;
        this.viewport = null;
        this._selectedNodes = [];
        this._isRendering = !1;
        this._rAF = void 0;
        this._eventListeners = Object.create(null);
        this._fullScreen = !1;
        this._container = b;
        this._stage = new p.Stage(512, 512, !0);
        this._worldView = this._stage.content;
        this._world = new p.Group;
        this._worldView.addChild(this._world);
        this._disableHiDPI = g;
        g = document.createElement("div");
        g.style.position = "absolute";
        g.style.width = "100%";
        g.style.height = "100%";
        g.style.zIndex = "0";
        b.appendChild(g);
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
          b.appendChild(f);
          this._fps = new v(e);
        } else {
          this._fps = null;
        }
        this.transparent = f = 0 === h;
        void 0 === h || 0 === h || k.ColorUtilities.rgbaToCSSStyle(h);
        this._options = new p.Canvas2D.Canvas2DRendererOptions;
        this._options.alpha = f;
        this._renderer = new p.Canvas2D.Canvas2DRenderer(g, this._stage, this._options);
        this._listenForContainerSizeChanges();
        this._onMouseUp = this._onMouseUp.bind(this);
        this._onMouseDown = this._onMouseDown.bind(this);
        this._onMouseMove = this._onMouseMove.bind(this);
        var c = this;
        window.addEventListener("mouseup", function(a) {
          c._state.onMouseUp(c, a);
          c._render();
        }, !1);
        window.addEventListener("mousemove", function(a) {
          c._state.onMouseMove(c, a);
          c._persistentState.onMouseMove(c, a);
        }, !1);
        window.addEventListener("DOMMouseScroll", d);
        window.addEventListener("mousewheel", d);
        b.addEventListener("mousedown", function(a) {
          c._state.onMouseDown(c, a);
        });
        window.addEventListener("keydown", function(a) {
          c._state.onKeyDown(c, a);
          if (c._state !== c._persistentState) {
            c._persistentState.onKeyDown(c, a);
          }
        }, !1);
        window.addEventListener("keypress", function(a) {
          c._state.onKeyPress(c, a);
          if (c._state !== c._persistentState) {
            c._persistentState.onKeyPress(c, a);
          }
        }, !1);
        window.addEventListener("keyup", function(a) {
          c._state.onKeyUp(c, a);
          if (c._state !== c._persistentState) {
            c._persistentState.onKeyUp(c, a);
          }
        }, !1);
      }
      a.prototype._listenForContainerSizeChanges = function() {
        var a = this._containerWidth, b = this._containerHeight;
        this._onContainerSizeChanged();
        var g = this;
        setInterval(function() {
          if (a !== g._containerWidth || b !== g._containerHeight) {
            g._onContainerSizeChanged(), a = g._containerWidth, b = g._containerHeight;
          }
        }, 10);
      };
      a.prototype._onContainerSizeChanged = function() {
        var a = this.getRatio(), g = Math.ceil(this._containerWidth * a), h = Math.ceil(this._containerHeight * a);
        this._stage.setBounds(new w(0, 0, g, h));
        this._stage.content.setBounds(new w(0, 0, g, h));
        this._worldView.getTransform().setMatrix(new b(a, 0, 0, a, 0, 0));
        this._dispatchEvent("resize");
      };
      a.prototype.addEventListener = function(a, b) {
        this._eventListeners[a] || (this._eventListeners[a] = []);
        this._eventListeners[a].push(b);
      };
      a.prototype._dispatchEvent = function(a) {
        if (a = this._eventListeners[a]) {
          for (var b = 0;b < a.length;b++) {
            a[b]();
          }
        }
      };
      a.prototype.startRendering = function() {
        if (!this._isRendering) {
          this._isRendering = !0;
          var a = this;
          this._rAF = requestAnimationFrame(function u() {
            a.render();
            a._rAF = requestAnimationFrame(u);
          });
        }
      };
      a.prototype.stopRendering = function() {
        this._isRendering && (this._isRendering = !1, cancelAnimationFrame(this._rAF));
      };
      Object.defineProperty(a.prototype, "state", {set:function(a) {
        this._state = a;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "cursor", {set:function(a) {
        this._container.style.cursor = a;
      }, enumerable:!0, configurable:!0});
      a.prototype._render = function() {
        p.RenderableVideo.checkForVideoUpdates();
        var a = (this._stage.readyToRender() || p.forcePaint.value) && !this.paused, b = 0;
        if (a) {
          var g = this._renderer;
          g.viewport = this.viewport ? this.viewport : this._stage.getBounds();
          this._dispatchEvent("render");
          b = performance.now();
          g.render();
          b = performance.now() - b;
        }
        this._fps && this._fps.tickAndRender(!a, b);
      };
      a.prototype.render = function() {
        this._render();
      };
      Object.defineProperty(a.prototype, "world", {get:function() {
        return this._world;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "worldView", {get:function() {
        return this._worldView;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "stage", {get:function() {
        return this._stage;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "options", {get:function() {
        return this._options;
      }, enumerable:!0, configurable:!0});
      a.prototype.getDisplayParameters = function() {
        return {stageWidth:this._containerWidth, stageHeight:this._containerHeight, pixelRatio:this.getRatio(), screenWidth:window.screen ? window.screen.width : 640, screenHeight:window.screen ? window.screen.height : 480};
      };
      a.prototype.toggleOption = function(a) {
        var b = this._options;
        b[a] = !b[a];
      };
      a.prototype.getOption = function() {
        return this._options.paintViewport;
      };
      a.prototype.getRatio = function() {
        var a = window.devicePixelRatio || 1, b = 1;
        1 === a || this._disableHiDPI || (b = a / 1);
        return b;
      };
      Object.defineProperty(a.prototype, "_containerWidth", {get:function() {
        return this._container.clientWidth;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "_containerHeight", {get:function() {
        return this._container.clientHeight;
      }, enumerable:!0, configurable:!0});
      a.prototype.queryNodeUnderMouse = function(a) {
        return this._world;
      };
      a.prototype.selectNodeUnderMouse = function(a) {
        (a = this._world) && this._selectedNodes.push(a);
        this._render();
      };
      a.prototype.getMousePosition = function(a, h) {
        var l = this._container, d = l.getBoundingClientRect(), f = this.getRatio(), l = new g(l.scrollWidth / d.width * (a.clientX - d.left) * f, l.scrollHeight / d.height * (a.clientY - d.top) * f);
        if (!h) {
          return l;
        }
        d = b.createIdentity();
        h.getTransform().getConcatenatedMatrix().inverse(d);
        d.transformPoint(l);
        return l;
      };
      a.prototype.getMouseWorldPosition = function(a) {
        return this.getMousePosition(a, this._world);
      };
      a.prototype._onMouseDown = function(a) {
      };
      a.prototype._onMouseUp = function(a) {
      };
      a.prototype._onMouseMove = function(a) {
      };
      a.prototype.screenShot = function(a, b, g) {
        return this._renderer.screenShot(a, b, g);
      };
      return a;
    }();
    p.Easel = a;
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(p) {
    var g = k.GFX.Geometry.Matrix;
    (function(b) {
      b[b.Simple = 0] = "Simple";
    })(p.Layout || (p.Layout = {}));
    var b = function(b) {
      function a() {
        b.apply(this, arguments);
        this.layout = 0;
      }
      __extends(a, b);
      return a;
    }(p.RendererOptions);
    p.TreeRendererOptions = b;
    var w = function(k) {
      function a(a, g, h) {
        void 0 === h && (h = new b);
        k.call(this, a, g, h);
        this._canvas = document.createElement("canvas");
        this._container.appendChild(this._canvas);
        this._context = this._canvas.getContext("2d");
        this._listenForContainerSizeChanges();
      }
      __extends(a, k);
      a.prototype._listenForContainerSizeChanges = function() {
        var a = this._containerWidth, b = this._containerHeight;
        this._onContainerSizeChanged();
        var g = this;
        setInterval(function() {
          if (a !== g._containerWidth || b !== g._containerHeight) {
            g._onContainerSizeChanged(), a = g._containerWidth, b = g._containerHeight;
          }
        }, 10);
      };
      a.prototype._getRatio = function() {
        var a = window.devicePixelRatio || 1, b = 1;
        1 !== a && (b = a / 1);
        return b;
      };
      a.prototype._onContainerSizeChanged = function() {
        var a = this._getRatio(), b = Math.ceil(this._containerWidth * a), g = Math.ceil(this._containerHeight * a), k = this._canvas;
        0 < a ? (k.width = b * a, k.height = g * a, k.style.width = b + "px", k.style.height = g + "px") : (k.width = b, k.height = g);
      };
      Object.defineProperty(a.prototype, "_containerWidth", {get:function() {
        return this._container.clientWidth;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(a.prototype, "_containerHeight", {get:function() {
        return this._container.clientHeight;
      }, enumerable:!0, configurable:!0});
      a.prototype.render = function() {
        var a = this._context;
        a.save();
        a.clearRect(0, 0, this._canvas.width, this._canvas.height);
        a.scale(1, 1);
        0 === this._options.layout && this._renderNodeSimple(this._context, this._stage, g.createIdentity());
        a.restore();
      };
      a.prototype._renderNodeSimple = function(a, b, g) {
        function k(b) {
          var c = b.getChildren();
          a.fillStyle = b.hasFlags(16) ? "red" : "white";
          var g = String(b.id);
          b instanceof p.RenderableText ? g = "T" + g : b instanceof p.RenderableShape ? g = "S" + g : b instanceof p.RenderableBitmap ? g = "B" + g : b instanceof p.RenderableVideo && (g = "V" + g);
          b instanceof p.Renderable && (g = g + " [" + b._parents.length + "]");
          b = a.measureText(g).width;
          a.fillText(g, m, u);
          if (c) {
            m += b + 4;
            f = Math.max(f, m + 20);
            for (g = 0;g < c.length;g++) {
              k(c[g]), g < c.length - 1 && (u += 18, u > r._canvas.height && (a.fillStyle = "gray", m = m - d + f + 8, d = f + 8, u = 0, a.fillStyle = "white"));
            }
            m -= b + 4;
          }
        }
        var r = this;
        a.save();
        a.font = "16px Arial";
        a.fillStyle = "white";
        var m = 0, u = 0, d = 0, f = 0;
        k(b);
        a.restore();
      };
      return a;
    }(p.Renderer);
    p.TreeRenderer = w;
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(p) {
    (function(g) {
      var b = k.GFX.BlurFilter, w = k.GFX.DropshadowFilter, v = k.GFX.Shape, a = k.GFX.Group, l = k.GFX.RenderableShape, q = k.GFX.RenderableMorphShape, h = k.GFX.RenderableBitmap, t = k.GFX.RenderableVideo, r = k.GFX.RenderableText, m = k.GFX.ColorMatrix, u = k.ShapeData, d = k.ArrayUtilities.DataBuffer, f = k.GFX.Stage, e = k.GFX.Geometry.Matrix, c = k.GFX.Geometry.Rectangle, n = function() {
        function a() {
        }
        a.prototype.writeMouseEvent = function(a, b) {
          var c = this.output;
          c.writeInt(300);
          var d = k.Remoting.MouseEventNames.indexOf(a.type);
          c.writeInt(d);
          c.writeFloat(b.x);
          c.writeFloat(b.y);
          c.writeInt(a.buttons);
          c.writeInt((a.ctrlKey ? 1 : 0) | (a.altKey ? 2 : 0) | (a.shiftKey ? 4 : 0));
        };
        a.prototype.writeKeyboardEvent = function(a) {
          var b = this.output;
          b.writeInt(301);
          var c = k.Remoting.KeyboardEventNames.indexOf(a.type);
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
      g.GFXChannelSerializer = n;
      n = function() {
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
          d && this.stage.setFlags(32768);
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
          k.registerCSSFont(a, b, !inFirefox);
          inFirefox ? c(null) : window.setTimeout(c, 400);
        };
        a.prototype.registerImage = function(a, b, c, d, e) {
          this._registerAsset(a, b, this._decodeImage(c, d, e));
        };
        a.prototype.registerVideo = function(a) {
          this._registerAsset(a, 0, new t(a, this));
        };
        a.prototype._decodeImage = function(a, b, d) {
          var e = new Image, f = h.FromImage(e);
          e.src = URL.createObjectURL(new Blob([b], {type:k.getMIMETypeForImageType(a)}));
          e.onload = function() {
            f.setBounds(new c(0, 0, e.width, e.height));
            f.invalidate();
            d({width:e.width, height:e.height});
          };
          e.onerror = function() {
            d(null);
          };
          return f;
        };
        a.prototype.sendVideoPlaybackEvent = function(a, b, c) {
          this._easelHost.sendVideoPlaybackEvent(a, b, c);
        };
        return a;
      }();
      g.GFXChannelDeserializerContext = n;
      n = function() {
        function f() {
        }
        f.prototype.read = function() {
          for (var a = 0, b = this.input, c = 0, d = 0, e = 0, f = 0, g = 0, h = 0, l = 0, k = 0;0 < b.bytesAvailable;) {
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
              case 105:
                h++;
                this._readUpdateNetStream();
                break;
              case 200:
                l++;
                this._readDrawToBitmap();
                break;
              case 106:
                k++, this._readRequestBitmapData();
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
          var a = this.input, b = f._temporaryReadColorMatrix, c = 1, d = 1, e = 1, g = 1, h = 0, l = 0, k = 0, m = 0;
          switch(a.readInt()) {
            case 0:
              return f._temporaryReadColorMatrixIdentity;
            case 1:
              g = a.readFloat();
              break;
            case 2:
              c = a.readFloat(), d = a.readFloat(), e = a.readFloat(), g = a.readFloat(), h = a.readInt(), l = a.readInt(), k = a.readInt(), m = a.readInt();
          }
          b.setMultipliersAndOffsets(c, d, e, g, h, l, k, m);
          return b;
        };
        f.prototype._readAsset = function() {
          var a = this.input.readInt(), b = this.inputAssets[a];
          this.inputAssets[a] = null;
          return b;
        };
        f.prototype._readUpdateGraphics = function() {
          for (var a = this.input, b = this.context, c = a.readInt(), d = a.readInt(), e = b._getAsset(c), f = this._readRectangle(), g = u.FromPlainObject(this._readAsset()), h = a.readInt(), k = [], m = 0;m < h;m++) {
            var n = a.readInt();
            k.push(b._getBitmapAsset(n));
          }
          if (e) {
            e.update(g, k, f);
          } else {
            a = g.morphCoordinates ? new q(c, g, k, f) : new l(c, g, k, f);
            for (m = 0;m < k.length;m++) {
              k[m] && k[m].addRenderableParent(a);
            }
            b._registerAsset(c, d, a);
          }
        };
        f.prototype._readUpdateBitmapData = function() {
          var a = this.input, b = this.context, c = a.readInt(), e = a.readInt(), f = b._getBitmapAsset(c), g = this._readRectangle(), a = a.readInt(), l = d.FromPlainObject(this._readAsset());
          f ? f.updateFromDataBuffer(a, l) : (f = h.FromDataBuffer(a, l, g), b._registerAsset(c, e, f));
        };
        f.prototype._readUpdateTextContent = function() {
          var a = this.input, b = this.context, c = a.readInt(), e = a.readInt(), f = b._getTextAsset(c), g = this._readRectangle(), h = this._readMatrix(), l = a.readInt(), k = a.readInt(), m = a.readInt(), n = a.readBoolean(), q = a.readInt(), p = a.readInt(), u = this._readAsset(), t = d.FromPlainObject(this._readAsset()), v = null, w = a.readInt();
          w && (v = new d(4 * w), a.readBytes(v, 4 * w));
          f ? (f.setBounds(g), f.setContent(u, t, h, v), f.setStyle(l, k, q, p), f.reflow(m, n)) : (f = new r(g), f.setContent(u, t, h, v), f.setStyle(l, k, q, p), f.reflow(m, n), b._registerAsset(c, e, f));
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
          a.stage.color = k.Color.FromARGB(b);
          a.stage.align = this.input.readInt();
          a.stage.scaleMode = this.input.readInt();
          b = this.input.readInt();
          this.input.readInt();
          c = this.input.readInt();
          a._easelHost.cursor = k.UI.toCSSCursor(c);
          a._easelHost.fullscreen = 0 === b || 1 === b;
        };
        f.prototype._readUpdateNetStream = function() {
          var a = this.context, b = this.input.readInt(), c = a._getVideoAsset(b), d = this._readRectangle();
          c || (a.registerVideo(b), c = a._getVideoAsset(b));
          c.setBounds(d);
        };
        f.prototype._readFilters = function(a) {
          var c = this.input, d = c.readInt(), e = [];
          if (d) {
            for (var f = 0;f < d;f++) {
              var g = c.readInt();
              switch(g) {
                case 0:
                  e.push(new b(c.readFloat(), c.readFloat(), c.readInt()));
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
                  e.push(new m(g));
                  break;
                default:
                  k.Debug.somewhatImplemented(p.FilterType[g]);
              }
            }
            a.getLayer().filters = e;
          }
        };
        f.prototype._readUpdateFrame = function() {
          var b = this.input, c = this.context, d = b.readInt(), e = 0, f = c._nodes[d];
          f || (f = c._nodes[d] = new a);
          d = b.readInt();
          d & 1 && f.getTransform().setMatrix(this._readMatrix());
          d & 8 && f.getTransform().setColorMatrix(this._readColorMatrix());
          if (d & 64) {
            var g = b.readInt();
            f.getLayer().mask = 0 <= g ? c._makeNode(g) : null;
          }
          d & 128 && (f.clip = b.readInt());
          d & 32 && (e = b.readInt() / 65535, g = b.readInt(), 1 !== g && (f.getLayer().blendMode = g), this._readFilters(f), f.toggleFlags(65536, b.readBoolean()), f.toggleFlags(131072, b.readBoolean()), f.toggleFlags(262144, !!b.readInt()), f.toggleFlags(524288, !!b.readInt()));
          if (d & 4) {
            d = b.readInt();
            g = f;
            g.clearChildren();
            for (var h = 0;h < d;h++) {
              var l = b.readInt(), l = c._makeNode(l);
              g.addChild(l);
            }
          }
          e && (l = f.getChildren()[0], l instanceof v && (l.ratio = e));
        };
        f.prototype._readDrawToBitmap = function() {
          var a = this.input, b = this.context, c = a.readInt(), d = a.readInt(), f = a.readInt(), g, l, k;
          g = f & 1 ? this._readMatrix().clone() : e.createIdentity();
          f & 8 && (l = this._readColorMatrix());
          f & 16 && (k = this._readRectangle());
          f = a.readInt();
          a.readBoolean();
          a = b._getBitmapAsset(c);
          d = b._makeNode(d);
          a ? a.drawNode(d, g, l, f, k) : b._registerAsset(c, -1, h.FromNode(d, g, l, f, k));
        };
        f.prototype._readRequestBitmapData = function() {
          var a = this.output, b = this.context, c = this.input.readInt();
          b._getBitmapAsset(c).readImageData(a);
        };
        f._temporaryReadMatrix = e.createIdentity();
        f._temporaryReadRectangle = c.createEmpty();
        f._temporaryReadColorMatrix = m.createIdentity();
        f._temporaryReadColorMatrixIdentity = m.createIdentity();
        return f;
      }();
      g.GFXChannelDeserializer = n;
    })(p.GFX || (p.GFX = {}));
  })(k.Remoting || (k.Remoting = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(p) {
    var g = k.GFX.Geometry.Point, b = k.ArrayUtilities.DataBuffer, w = function() {
      function p(a) {
        this._easel = a;
        var b = a.transparent;
        this._group = a.world;
        this._content = null;
        this._fullscreen = !1;
        this._context = new k.Remoting.GFX.GFXChannelDeserializerContext(this, this._group, b);
        this._addEventListeners();
      }
      p.prototype.onSendUpdates = function(a, b) {
        throw Error("This method is abstract");
      };
      Object.defineProperty(p.prototype, "easel", {get:function() {
        return this._easel;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(p.prototype, "stage", {get:function() {
        return this._easel.stage;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(p.prototype, "content", {set:function(a) {
        this._content = a;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(p.prototype, "cursor", {set:function(a) {
        this._easel.cursor = a;
      }, enumerable:!0, configurable:!0});
      Object.defineProperty(p.prototype, "fullscreen", {set:function(a) {
        this._fullscreen !== a && (this._fullscreen = a, "undefined" !== typeof ShumwayCom && ShumwayCom.setFullscreen && ShumwayCom.setFullscreen(a));
      }, enumerable:!0, configurable:!0});
      p.prototype._mouseEventListener = function(a) {
        var l = this._easel.getMousePosition(a, this._content), l = new g(l.x, l.y), p = new b, h = new k.Remoting.GFX.GFXChannelSerializer;
        h.output = p;
        h.writeMouseEvent(a, l);
        this.onSendUpdates(p, []);
      };
      p.prototype._keyboardEventListener = function(a) {
        var g = new b, p = new k.Remoting.GFX.GFXChannelSerializer;
        p.output = g;
        p.writeKeyboardEvent(a);
        this.onSendUpdates(g, []);
      };
      p.prototype._addEventListeners = function() {
        for (var a = this._mouseEventListener.bind(this), b = this._keyboardEventListener.bind(this), g = p._mouseEvents, h = 0;h < g.length;h++) {
          window.addEventListener(g[h], a);
        }
        a = p._keyboardEvents;
        for (h = 0;h < a.length;h++) {
          window.addEventListener(a[h], b);
        }
        this._addFocusEventListeners();
        this._easel.addEventListener("resize", this._resizeEventListener.bind(this));
      };
      p.prototype._sendFocusEvent = function(a) {
        var g = new b, p = new k.Remoting.GFX.GFXChannelSerializer;
        p.output = g;
        p.writeFocusEvent(a);
        this.onSendUpdates(g, []);
      };
      p.prototype._addFocusEventListeners = function() {
        var a = this;
        document.addEventListener("visibilitychange", function(b) {
          a._sendFocusEvent(document.hidden ? 0 : 1);
        });
        window.addEventListener("focus", function(b) {
          a._sendFocusEvent(3);
        });
        window.addEventListener("blur", function(b) {
          a._sendFocusEvent(2);
        });
      };
      p.prototype._resizeEventListener = function() {
        this.onDisplayParameters(this._easel.getDisplayParameters());
      };
      p.prototype.onDisplayParameters = function(a) {
        throw Error("This method is abstract");
      };
      p.prototype.processUpdates = function(a, b, g) {
        void 0 === g && (g = null);
        var h = new k.Remoting.GFX.GFXChannelDeserializer;
        h.input = a;
        h.inputAssets = b;
        h.output = g;
        h.context = this._context;
        h.read();
      };
      p.prototype.processVideoControl = function(a, b, g) {
        var h = this._context, k = h._getVideoAsset(a);
        if (!k) {
          if (1 !== b) {
            return;
          }
          h.registerVideo(a);
          k = h._getVideoAsset(a);
        }
        return k.processControlRequest(b, g);
      };
      p.prototype.processRegisterFont = function(a, b, g) {
        this._context.registerFont(a, b, g);
      };
      p.prototype.processRegisterImage = function(a, b, g, h, k) {
        this._context.registerImage(a, b, g, h, k);
      };
      p.prototype.processFSCommand = function(a, b) {
        arguments.length;
      };
      p.prototype.processFrame = function() {
        arguments.length;
      };
      p.prototype.onVideoPlaybackEvent = function(a, b, g) {
        throw Error("This method is abstract");
      };
      p.prototype.sendVideoPlaybackEvent = function(a, b, g) {
        this.onVideoPlaybackEvent(a, b, g);
      };
      p._mouseEvents = k.Remoting.MouseEventNames;
      p._keyboardEvents = k.Remoting.KeyboardEventNames;
      return p;
    }();
    p.EaselHost = w;
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(p) {
    (function(g) {
      var b = k.ArrayUtilities.DataBuffer, w = k.CircularBuffer, v = k.Tools.Profiler.TimelineBuffer, a = function(a) {
        function g(b, k, p) {
          a.call(this, b);
          this._timelineRequests = Object.create(null);
          this._playerWindow = k;
          this._window = p;
          this._window.addEventListener("message", function(a) {
            this.onWindowMessage(a.data);
          }.bind(this));
          "undefined" !== typeof ShumwayCom ? ShumwayCom.setSyncMessageCallback(function(a) {
            this.onWindowMessage(a, !1);
            return a.result;
          }.bind(this)) : this._window.addEventListener("syncmessage", function(a) {
            this.onWindowMessage(a.detail, !1);
          }.bind(this));
        }
        __extends(g, a);
        g.prototype.onSendUpdates = function(a, b) {
          var g = a.getBytes();
          this._playerWindow.postMessage({type:"gfx", updates:g, assets:b}, "*", [g.buffer]);
        };
        g.prototype.onDisplayParameters = function(a) {
          this._playerWindow.postMessage({type:"displayParameters", params:a}, "*");
        };
        g.prototype.onVideoPlaybackEvent = function(a, b, g) {
          this._playerWindow.postMessage({type:"videoPlayback", id:a, eventType:b, data:g}, "*");
        };
        g.prototype.requestTimeline = function(a, b) {
          return new Promise(function(g) {
            this._timelineRequests[a] = g;
            this._playerWindow.postMessage({type:"timeline", cmd:b, request:a}, "*");
          }.bind(this));
        };
        g.prototype._sendRegisterFontResponse = function(a, b) {
          this._playerWindow.postMessage({type:"registerFontResponse", requestId:a, result:b}, "*");
        };
        g.prototype._sendRegisterImageResponse = function(a, b) {
          this._playerWindow.postMessage({type:"registerImageResponse", requestId:a, result:b}, "*");
        };
        g.prototype.onWindowMessage = function(a, g) {
          void 0 === g && (g = !0);
          if ("object" === typeof a && null !== a) {
            if ("player" === a.type) {
              var l = b.FromArrayBuffer(a.updates.buffer);
              if (g) {
                this.processUpdates(l, a.assets);
              } else {
                var k = new b;
                this.processUpdates(l, a.assets, k);
                a.result = k.toPlainObject();
              }
            } else {
              "frame" === a.type ? this.processFrame() : "videoControl" === a.type ? a.result = this.processVideoControl(a.id, a.eventType, a.data) : "registerFont" === a.type ? this.processRegisterFont(a.syncId, a.data, this._sendRegisterFontResponse.bind(this, a.requestId)) : "registerImage" === a.type ? this.processRegisterImage(a.syncId, a.symbolId, a.imageType, a.data, this._sendRegisterImageResponse.bind(this, a.requestId)) : "fscommand" === a.type ? this.processFSCommand(a.command, a.args) : 
              "timelineResponse" === a.type && a.timeline && (a.timeline.__proto__ = v.prototype, a.timeline._marks.__proto__ = w.prototype, a.timeline._times.__proto__ = w.prototype, this._timelineRequests[a.request](a.timeline));
            }
          }
        };
        return g;
      }(p.EaselHost);
      g.WindowEaselHost = a;
    })(p.Window || (p.Window = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(p) {
    (function(g) {
      var b = k.ArrayUtilities.DataBuffer, w = function(g) {
        function a(a) {
          g.call(this, a);
          this._worker = k.Player.Test.FakeSyncWorker.instance;
          this._worker.addEventListener("message", this._onWorkerMessage.bind(this));
          this._worker.addEventListener("syncmessage", this._onSyncWorkerMessage.bind(this));
        }
        __extends(a, g);
        a.prototype.onSendUpdates = function(a, b) {
          var g = a.getBytes();
          this._worker.postMessage({type:"gfx", updates:g, assets:b}, [g.buffer]);
        };
        a.prototype.onDisplayParameters = function(a) {
          this._worker.postMessage({type:"displayParameters", params:a});
        };
        a.prototype.onVideoPlaybackEvent = function(a, b, g) {
          this._worker.postMessage({type:"videoPlayback", id:a, eventType:b, data:g});
        };
        a.prototype.requestTimeline = function(a, b) {
          var g;
          switch(a) {
            case "AVM2":
              g = k.AVM2.timelineBuffer;
              break;
            case "Player":
              g = k.Player.timelineBuffer;
              break;
            case "SWF":
              g = k.SWF.timelineBuffer;
          }
          "clear" === b && g && g.reset();
          return Promise.resolve(g);
        };
        a.prototype._sendRegisterFontResponse = function(a, b) {
          this._worker.postMessage({type:"registerFontResponse", requestId:a, result:b});
        };
        a.prototype._sendRegisterImageResponse = function(a, b) {
          this._worker.postMessage({type:"registerImageResponse", requestId:a, result:b});
        };
        a.prototype._onWorkerMessage = function(a, g) {
          void 0 === g && (g = !0);
          var h = a.data;
          if ("object" === typeof h && null !== h) {
            switch(h.type) {
              case "player":
                var k = b.FromArrayBuffer(h.updates.buffer);
                if (g) {
                  this.processUpdates(k, h.assets);
                } else {
                  var p = new b;
                  this.processUpdates(k, h.assets, p);
                  a.result = p.toPlainObject();
                  a.handled = !0;
                }
                break;
              case "frame":
                this.processFrame();
                break;
              case "videoControl":
                a.result = this.processVideoControl(h.id, h.eventType, h.data);
                a.handled = !0;
                break;
              case "registerFont":
                this.processRegisterFont(h.syncId, h.data, this._sendRegisterFontResponse.bind(this, h.requestId));
                a.handled = !0;
                break;
              case "registerImage":
                this.processRegisterImage(h.syncId, h.symbolId, h.imageType, h.data, this._sendRegisterImageResponse.bind(this, h.requestId));
                a.handled = !0;
                break;
              case "fscommand":
                this.processFSCommand(h.command, h.args);
            }
          }
        };
        a.prototype._onSyncWorkerMessage = function(a) {
          return this._onWorkerMessage(a, !1);
        };
        return a;
      }(p.EaselHost);
      g.TestEaselHost = w;
    })(p.Test || (p.Test = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(p) {
    (function(g) {
      function b(a, b) {
        a.writeInt(b.length);
        a.writeRawBytes(b);
      }
      function p(a) {
        function g(a) {
          switch(typeof a) {
            case "undefined":
              d.writeByte(0);
              break;
            case "boolean":
              d.writeByte(a ? 2 : 3);
              break;
            case "number":
              d.writeByte(4);
              d.writeDouble(a);
              break;
            case "string":
              d.writeByte(5);
              d.writeUTF(a);
              break;
            default:
              if (null === a) {
                d.writeByte(1);
                break;
              }
              if (Array.isArray(a) && a instanceof Int32Array) {
                d.writeByte(6);
                d.writeInt(a.length);
                for (var e = 0;e < a.length;e++) {
                  g(a[e]);
                }
              } else {
                if (a instanceof Uint8Array) {
                  d.writeByte(9), b(d, a);
                } else {
                  if ("length" in a && "buffer" in a && "littleEndian" in a) {
                    d.writeByte(a.littleEndian ? 10 : 11), b(d, new Uint8Array(a.buffer, 0, a.length));
                  } else {
                    if (a instanceof ArrayBuffer) {
                      d.writeByte(8), b(d, new Uint8Array(a));
                    } else {
                      if (a instanceof Int32Array) {
                        d.writeByte(12), b(d, new Uint8Array(a.buffer, a.byteOffset, a.byteLength));
                      } else {
                        if (a.buffer instanceof ArrayBuffer && "number" === typeof a.byteOffset) {
                          throw Error("Some unsupported TypedArray is used");
                        }
                        d.writeByte(7);
                        for (e in a) {
                          d.writeUTF(e), g(a[e]);
                        }
                        d.writeUTF("");
                      }
                    }
                  }
                }
              }
            ;
          }
        }
        var d = new q;
        g(a);
        return d.getBytes();
      }
      function v(a) {
        var b = new q, d = a.readInt();
        a.readBytes(b, d);
        return b.getBytes();
      }
      function a(a) {
        var b = new q, d = a.readInt();
        a.readBytes(b, d);
        return l(b);
      }
      function l(a) {
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
            for (var b = [], d = a.readInt(), f = 0;f < d;f++) {
              b[f] = l(a);
            }
            return b;
          case 7:
            for (b = {};d = a.readUTF();) {
              b[d] = l(a);
            }
            return b;
          case 8:
            return v(a).buffer;
          case 9:
            return v(a);
          case 11:
          ;
          case 10:
            return a = v(a), new h(a.buffer, a.length, 10 === b);
          case 12:
            return new Int32Array(v(a).buffer);
        }
      }
      var q = k.ArrayUtilities.DataBuffer, h = k.ArrayUtilities.PlainObjectDataBuffer, t;
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
      })(t || (t = {}));
      (function(a) {
        a[a.None = 0] = "None";
        a[a.PlayerCommand = 1] = "PlayerCommand";
        a[a.PlayerCommandAsync = 2] = "PlayerCommandAsync";
        a[a.Frame = 3] = "Frame";
        a[a.Font = 4] = "Font";
        a[a.Image = 5] = "Image";
        a[a.FSCommand = 6] = "FSCommand";
      })(g.MovieRecordType || (g.MovieRecordType = {}));
      t = function() {
        function a(b) {
          this._maxRecordingSize = b;
          this._recording = new q;
          this._recordingStarted = Date.now();
          this._recording.writeRawBytes(new Uint8Array([77, 83, 87, 70]));
          this._stopped = !1;
        }
        a.prototype.stop = function() {
          this._stopped = !0;
        };
        a.prototype.getRecording = function() {
          return new Blob([this._recording.getBytes()], {type:"application/octet-stream"});
        };
        a.prototype.dump = function() {
          (new r(this._recording.getBytes())).dump();
        };
        a.prototype._createRecord = function(a, b) {
          this._stopped || (this._recording.length + 8 + (b ? b.length : 0) >= this._maxRecordingSize ? (console.error("Recording limit reached"), this._stopped = !0) : (this._recording.writeInt(Date.now() - this._recordingStarted), this._recording.writeInt(a), null !== b ? (this._recording.writeInt(b.length), this._recording.writeRawBytes(b.getBytes())) : this._recording.writeInt(0)));
        };
        a.prototype.recordPlayerCommand = function(a, d, f) {
          var e = new q;
          b(e, d);
          e.writeInt(f.length);
          f.forEach(function(a) {
            a = p(a);
            b(e, a);
          });
          this._createRecord(a ? 2 : 1, e);
        };
        a.prototype.recordFrame = function() {
          this._createRecord(3, null);
        };
        a.prototype.recordFont = function(a, d) {
          var f = new q;
          f.writeInt(a);
          b(f, d);
          this._createRecord(4, f);
        };
        a.prototype.recordImage = function(a, d, f, e) {
          var c = new q;
          c.writeInt(a);
          c.writeInt(d);
          c.writeInt(f);
          b(c, e);
          this._createRecord(5, c);
        };
        a.prototype.recordFSCommand = function(a, b) {
          var f = new q;
          f.writeUTF(a);
          f.writeUTF(b || "");
          this._createRecord(6, f);
        };
        return a;
      }();
      g.MovieRecorder = t;
      var r = function() {
        function b(a) {
          this._buffer = new q;
          this._buffer.writeRawBytes(a);
          this._buffer.position = 4;
        }
        b.prototype.readNextRecord = function() {
          if (this._buffer.position >= this._buffer.length) {
            return 0;
          }
          var a = this._buffer.readInt(), b = this._buffer.readInt(), f = this._buffer.readInt(), e = null;
          0 < f && (e = new q, this._buffer.readBytes(e, f));
          this.currentTimestamp = a;
          this.currentType = b;
          this.currentData = e;
          return b;
        };
        b.prototype.parsePlayerCommand = function() {
          for (var b = v(this.currentData), d = this.currentData.readInt(), f = [], e = 0;e < d;e++) {
            f.push(a(this.currentData));
          }
          return {updates:b, assets:f};
        };
        b.prototype.parseFSCommand = function() {
          var a = this.currentData.readUTF(), b = this.currentData.readUTF();
          return {command:a, args:b};
        };
        b.prototype.parseFont = function() {
          var b = this.currentData.readInt(), d = a(this.currentData);
          return {syncId:b, data:d};
        };
        b.prototype.parseImage = function() {
          var b = this.currentData.readInt(), d = this.currentData.readInt(), f = this.currentData.readInt(), e = a(this.currentData);
          return {syncId:b, symbolId:d, imageType:f, data:e};
        };
        b.prototype.dump = function() {
          for (var a;a = this.readNextRecord();) {
            console.log("record " + a + " @" + this.currentTimestamp);
            debugger;
            switch(a) {
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
        return b;
      }();
      g.MovieRecordParser = r;
    })(p.Test || (p.Test = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(p) {
    (function(g) {
      var b = k.ArrayUtilities.DataBuffer, w = function(k) {
        function a(a) {
          k.call(this, a);
          this.alwaysRenderFrame = this.ignoreTimestamps = !1;
          this.cpuTimeRendering = this.cpuTimeUpdates = 0;
          this.onComplete = null;
        }
        __extends(a, k);
        Object.defineProperty(a.prototype, "cpuTime", {get:function() {
          return this.cpuTimeUpdates + this.cpuTimeRendering;
        }, enumerable:!0, configurable:!0});
        a.prototype.playUrl = function(a) {
          var b = new XMLHttpRequest;
          b.open("GET", a, !0);
          b.responseType = "arraybuffer";
          b.onload = function() {
            this.playBytes(new Uint8Array(b.response));
          }.bind(this);
          b.send();
        };
        a.prototype.playBytes = function(a) {
          this._parser = new g.MovieRecordParser(a);
          this._lastTimestamp = 0;
          this._parseNext();
        };
        a.prototype.onSendUpdates = function(a, b) {
        };
        a.prototype.onDisplayParameters = function(a) {
        };
        a.prototype.onVideoPlaybackEvent = function(a, b, g) {
        };
        a.prototype.requestTimeline = function(a, b) {
          return Promise.resolve(void 0);
        };
        a.prototype._parseNext = function() {
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
        a.prototype._runRecord = function() {
          var a, g = performance.now();
          switch(this._parser.currentType) {
            case 1:
            ;
            case 2:
              a = this._parser.parsePlayerCommand();
              var h = 2 === this._parser.currentType, k = b.FromArrayBuffer(a.updates.buffer);
              h ? this.processUpdates(k, a.assets) : (h = new b, this.processUpdates(k, a.assets, h));
              break;
            case 3:
              this.processFrame();
              break;
            case 4:
              a = this._parser.parseFont();
              this.processRegisterFont(a.syncId, a.data, function() {
              });
              break;
            case 5:
              a = this._parser.parseImage();
              this.processRegisterImage(a.syncId, a.symbolId, a.imageType, a.data, function() {
              });
              break;
            case 6:
              a = this._parser.parseFSCommand();
              this.processFSCommand(a.command, a.args);
              break;
            default:
              throw Error("Invalid movie record type");;
          }
          this.cpuTimeUpdates += performance.now() - g;
          3 === this._parser.currentType && this.alwaysRenderFrame ? requestAnimationFrame(this._renderFrameJustAfterRAF.bind(this)) : this._parseNext();
        };
        a.prototype._renderFrameJustAfterRAF = function() {
          var a = performance.now();
          this.easel.render();
          this.cpuTimeRendering += performance.now() - a;
          this._parseNext();
        };
        return a;
      }(p.EaselHost);
      g.PlaybackEaselHost = w;
    })(p.Test || (p.Test = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
(function(k) {
  (function(k) {
    (function(g) {
      var b = function(b) {
        function k(a, l) {
          void 0 === l && (l = 0);
          b.call(this, a);
          this._recorder = null;
          this._recorder = new g.MovieRecorder(l);
        }
        __extends(k, b);
        Object.defineProperty(k.prototype, "recorder", {get:function() {
          return this._recorder;
        }, enumerable:!0, configurable:!0});
        k.prototype._onWorkerMessage = function(a, g) {
          void 0 === g && (g = !0);
          var k = a.data;
          if ("object" === typeof k && null !== k) {
            switch(k.type) {
              case "player":
                this._recorder.recordPlayerCommand(g, k.updates, k.assets);
                break;
              case "frame":
                this._recorder.recordFrame();
                break;
              case "registerFont":
                this._recorder.recordFont(k.syncId, k.data);
                break;
              case "registerImage":
                this._recorder.recordImage(k.syncId, k.symbolId, k.imageType, k.data);
                break;
              case "fscommand":
                this._recorder.recordFSCommand(k.command, k.args);
            }
            b.prototype._onWorkerMessage.call(this, a, g);
          }
        };
        return k;
      }(g.TestEaselHost);
      g.RecordingEaselHost = b;
    })(k.Test || (k.Test = {}));
  })(k.GFX || (k.GFX = {}));
})(Shumway || (Shumway = {}));
console.timeEnd("Load GFX Dependencies");

