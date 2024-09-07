// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../components/Card/Card.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../constants/root.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ROOT_SPINNER = exports.ROOT_MODAL = exports.ROOT_INDEX = exports.ROOT_ERROR = void 0;
var ROOT_INDEX = exports.ROOT_INDEX = document.getElementById('root');
var ROOT_MODAL = exports.ROOT_MODAL = document.getElementById('modal');
var ROOT_ERROR = exports.ROOT_ERROR = document.getElementById('error');
var ROOT_SPINNER = exports.ROOT_SPINNER = document.getElementById('spinner');
},{}],"../node_modules/chroma-js/src/utils/limit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("./index.js");
var _default = (x, low = 0, high = 1) => {
  return (0, _index.min)((0, _index.max)(low, x), high);
};
exports.default = _default;
},{"./index.js":"../node_modules/chroma-js/src/utils/index.js"}],"../node_modules/chroma-js/src/utils/clip_rgb.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _limit = _interopRequireDefault(require("./limit.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = rgb => {
  rgb._clipped = false;
  rgb._unclipped = rgb.slice(0);
  for (let i = 0; i <= 3; i++) {
    if (i < 3) {
      if (rgb[i] < 0 || rgb[i] > 255) rgb._clipped = true;
      rgb[i] = (0, _limit.default)(rgb[i], 0, 255);
    } else if (i === 3) {
      rgb[i] = (0, _limit.default)(rgb[i], 0, 1);
    }
  }
  return rgb;
};
exports.default = _default;
},{"./limit.js":"../node_modules/chroma-js/src/utils/limit.js"}],"../node_modules/chroma-js/src/utils/type.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
// ported from jQuery's $.type
const classToType = {};
for (let name of ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Undefined', 'Null']) {
  classToType[`[object ${name}]`] = name.toLowerCase();
}
function _default(obj) {
  return classToType[Object.prototype.toString.call(obj)] || 'object';
}
},{}],"../node_modules/chroma-js/src/utils/unpack.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _type = _interopRequireDefault(require("./type.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = (args, keyOrder = null) => {
  // if called with more than 3 arguments, we return the arguments
  if (args.length >= 3) return Array.prototype.slice.call(args);
  // with less than 3 args we check if first arg is object
  // and use the keyOrder string to extract and sort properties
  if ((0, _type.default)(args[0]) == 'object' && keyOrder) {
    return keyOrder.split('').filter(k => args[0][k] !== undefined).map(k => args[0][k]);
  }
  // otherwise we just return the first argument
  // (which we suppose is an array of args)
  return args[0];
};
exports.default = _default;
},{"./type.js":"../node_modules/chroma-js/src/utils/type.js"}],"../node_modules/chroma-js/src/utils/last.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _type = _interopRequireDefault(require("./type.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = args => {
  if (args.length < 2) return null;
  const l = args.length - 1;
  if ((0, _type.default)(args[l]) == 'string') return args[l].toLowerCase();
  return null;
};
exports.default = _default;
},{"./type.js":"../node_modules/chroma-js/src/utils/type.js"}],"../node_modules/chroma-js/src/utils/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TWOPI = exports.RAD2DEG = exports.PITHIRD = exports.PI = exports.DEG2RAD = void 0;
Object.defineProperty(exports, "clip_rgb", {
  enumerable: true,
  get: function () {
    return _clip_rgb.default;
  }
});
Object.defineProperty(exports, "last", {
  enumerable: true,
  get: function () {
    return _last.default;
  }
});
Object.defineProperty(exports, "limit", {
  enumerable: true,
  get: function () {
    return _limit.default;
  }
});
exports.min = exports.max = void 0;
Object.defineProperty(exports, "type", {
  enumerable: true,
  get: function () {
    return _type.default;
  }
});
Object.defineProperty(exports, "unpack", {
  enumerable: true,
  get: function () {
    return _unpack.default;
  }
});
var _clip_rgb = _interopRequireDefault(require("./clip_rgb.js"));
var _limit = _interopRequireDefault(require("./limit.js"));
var _type = _interopRequireDefault(require("./type.js"));
var _unpack = _interopRequireDefault(require("./unpack.js"));
var _last = _interopRequireDefault(require("./last.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const {
  PI,
  min,
  max
} = Math;
exports.max = max;
exports.min = min;
exports.PI = PI;
const TWOPI = exports.TWOPI = PI * 2;
const PITHIRD = exports.PITHIRD = PI / 3;
const DEG2RAD = exports.DEG2RAD = PI / 180;
const RAD2DEG = exports.RAD2DEG = 180 / PI;
},{"./clip_rgb.js":"../node_modules/chroma-js/src/utils/clip_rgb.js","./limit.js":"../node_modules/chroma-js/src/utils/limit.js","./type.js":"../node_modules/chroma-js/src/utils/type.js","./unpack.js":"../node_modules/chroma-js/src/utils/unpack.js","./last.js":"../node_modules/chroma-js/src/utils/last.js"}],"../node_modules/chroma-js/src/io/input.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = {
  format: {},
  autodetect: []
};
},{}],"../node_modules/chroma-js/src/Color.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("./utils/index.js");
var _input2 = _interopRequireDefault(require("./io/input.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class Color {
  constructor(...args) {
    const me = this;
    if ((0, _index.type)(args[0]) === 'object' && args[0].constructor && args[0].constructor === this.constructor) {
      // the argument is already a Color instance
      return args[0];
    }
    // last argument could be the mode
    let mode = (0, _index.last)(args);
    let autodetect = false;
    if (!mode) {
      autodetect = true;
      if (!_input2.default.sorted) {
        _input2.default.autodetect = _input2.default.autodetect.sort((a, b) => b.p - a.p);
        _input2.default.sorted = true;
      }
      // auto-detect format
      for (let chk of _input2.default.autodetect) {
        mode = chk.test(...args);
        if (mode) break;
      }
    }
    if (_input2.default.format[mode]) {
      const rgb = _input2.default.format[mode].apply(null, autodetect ? args : args.slice(0, -1));
      me._rgb = (0, _index.clip_rgb)(rgb);
    } else {
      throw new Error('unknown format: ' + args);
    }
    // add alpha channel
    if (me._rgb.length === 3) me._rgb.push(1);
  }
  toString() {
    if ((0, _index.type)(this.hex) == 'function') return this.hex();
    return `[${this._rgb.join(',')}]`;
  }
}
var _default = exports.default = Color;
},{"./utils/index.js":"../node_modules/chroma-js/src/utils/index.js","./io/input.js":"../node_modules/chroma-js/src/io/input.js"}],"../node_modules/chroma-js/src/version.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.version = void 0;
// this gets updated automatically
const version = exports.version = '2.6.0';
},{}],"../node_modules/chroma-js/src/chroma.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Color = _interopRequireDefault(require("./Color.js"));
var _version = require("./version.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const chroma = (...args) => {
  return new chroma.Color(...args);
};
chroma.Color = _Color.default;
chroma.version = _version.version;
var _default = exports.default = chroma;
},{"./Color.js":"../node_modules/chroma-js/src/Color.js","./version.js":"../node_modules/chroma-js/src/version.js"}],"../node_modules/chroma-js/src/io/cmyk/cmyk2rgb.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("../../utils/index.js");
const cmyk2rgb = (...args) => {
  args = (0, _index.unpack)(args, 'cmyk');
  const [c, m, y, k] = args;
  const alpha = args.length > 4 ? args[4] : 1;
  if (k === 1) return [0, 0, 0, alpha];
  return [c >= 1 ? 0 : 255 * (1 - c) * (1 - k),
  // r
  m >= 1 ? 0 : 255 * (1 - m) * (1 - k),
  // g
  y >= 1 ? 0 : 255 * (1 - y) * (1 - k),
  // b
  alpha];
};
var _default = exports.default = cmyk2rgb;
},{"../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js"}],"../node_modules/chroma-js/src/io/cmyk/rgb2cmyk.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("../../utils/index.js");
const {
  max
} = Math;
const rgb2cmyk = (...args) => {
  let [r, g, b] = (0, _index.unpack)(args, 'rgb');
  r = r / 255;
  g = g / 255;
  b = b / 255;
  const k = 1 - max(r, max(g, b));
  const f = k < 1 ? 1 / (1 - k) : 0;
  const c = (1 - r - k) * f;
  const m = (1 - g - k) * f;
  const y = (1 - b - k) * f;
  return [c, m, y, k];
};
var _default = exports.default = rgb2cmyk;
},{"../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js"}],"../node_modules/chroma-js/src/io/cmyk/index.js":[function(require,module,exports) {
"use strict";

var _chroma = _interopRequireDefault(require("../../chroma.js"));
var _Color = _interopRequireDefault(require("../../Color.js"));
var _input = _interopRequireDefault(require("../input.js"));
var _index = require("../../utils/index.js");
var _cmyk2rgb = _interopRequireDefault(require("./cmyk2rgb.js"));
var _rgb2cmyk = _interopRequireDefault(require("./rgb2cmyk.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_Color.default.prototype.cmyk = function () {
  return (0, _rgb2cmyk.default)(this._rgb);
};
_chroma.default.cmyk = (...args) => new _Color.default(...args, 'cmyk');
_input.default.format.cmyk = _cmyk2rgb.default;
_input.default.autodetect.push({
  p: 2,
  test: (...args) => {
    args = (0, _index.unpack)(args, 'cmyk');
    if ((0, _index.type)(args) === 'array' && args.length === 4) {
      return 'cmyk';
    }
  }
});
},{"../../chroma.js":"../node_modules/chroma-js/src/chroma.js","../../Color.js":"../node_modules/chroma-js/src/Color.js","../input.js":"../node_modules/chroma-js/src/io/input.js","../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js","./cmyk2rgb.js":"../node_modules/chroma-js/src/io/cmyk/cmyk2rgb.js","./rgb2cmyk.js":"../node_modules/chroma-js/src/io/cmyk/rgb2cmyk.js"}],"../node_modules/chroma-js/src/io/css/hsl2css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("../../utils/index.js");
const rnd = a => Math.round(a * 100) / 100;

/*
 * supported arguments:
 * - hsl2css(h,s,l)
 * - hsl2css(h,s,l,a)
 * - hsl2css([h,s,l], mode)
 * - hsl2css([h,s,l,a], mode)
 * - hsl2css({h,s,l,a}, mode)
 */
const hsl2css = (...args) => {
  const hsla = (0, _index.unpack)(args, 'hsla');
  let mode = (0, _index.last)(args) || 'lsa';
  hsla[0] = rnd(hsla[0] || 0);
  hsla[1] = rnd(hsla[1] * 100) + '%';
  hsla[2] = rnd(hsla[2] * 100) + '%';
  if (mode === 'hsla' || hsla.length > 3 && hsla[3] < 1) {
    hsla[3] = hsla.length > 3 ? hsla[3] : 1;
    mode = 'hsla';
  } else {
    hsla.length = 3;
  }
  return `${mode}(${hsla.join(',')})`;
};
var _default = exports.default = hsl2css;
},{"../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js"}],"../node_modules/chroma-js/src/io/hsl/rgb2hsl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("../../utils/index.js");
/*
 * supported arguments:
 * - rgb2hsl(r,g,b)
 * - rgb2hsl(r,g,b,a)
 * - rgb2hsl([r,g,b])
 * - rgb2hsl([r,g,b,a])
 * - rgb2hsl({r,g,b,a})
 */
const rgb2hsl = (...args) => {
  args = (0, _index.unpack)(args, 'rgba');
  let [r, g, b] = args;
  r /= 255;
  g /= 255;
  b /= 255;
  const minRgb = (0, _index.min)(r, g, b);
  const maxRgb = (0, _index.max)(r, g, b);
  const l = (maxRgb + minRgb) / 2;
  let s, h;
  if (maxRgb === minRgb) {
    s = 0;
    h = Number.NaN;
  } else {
    s = l < 0.5 ? (maxRgb - minRgb) / (maxRgb + minRgb) : (maxRgb - minRgb) / (2 - maxRgb - minRgb);
  }
  if (r == maxRgb) h = (g - b) / (maxRgb - minRgb);else if (g == maxRgb) h = 2 + (b - r) / (maxRgb - minRgb);else if (b == maxRgb) h = 4 + (r - g) / (maxRgb - minRgb);
  h *= 60;
  if (h < 0) h += 360;
  if (args.length > 3 && args[3] !== undefined) return [h, s, l, args[3]];
  return [h, s, l];
};
var _default = exports.default = rgb2hsl;
},{"../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js"}],"../node_modules/chroma-js/src/io/css/rgb2css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("../../utils/index.js");
var _hsl2css = _interopRequireDefault(require("./hsl2css.js"));
var _rgb2hsl = _interopRequireDefault(require("../hsl/rgb2hsl.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const {
  round
} = Math;

/*
 * supported arguments:
 * - rgb2css(r,g,b)
 * - rgb2css(r,g,b,a)
 * - rgb2css([r,g,b], mode)
 * - rgb2css([r,g,b,a], mode)
 * - rgb2css({r,g,b,a}, mode)
 */
const rgb2css = (...args) => {
  const rgba = (0, _index.unpack)(args, 'rgba');
  let mode = (0, _index.last)(args) || 'rgb';
  if (mode.substr(0, 3) == 'hsl') {
    return (0, _hsl2css.default)((0, _rgb2hsl.default)(rgba), mode);
  }
  rgba[0] = round(rgba[0]);
  rgba[1] = round(rgba[1]);
  rgba[2] = round(rgba[2]);
  if (mode === 'rgba' || rgba.length > 3 && rgba[3] < 1) {
    rgba[3] = rgba.length > 3 ? rgba[3] : 1;
    mode = 'rgba';
  }
  return `${mode}(${rgba.slice(0, mode === 'rgb' ? 3 : 4).join(',')})`;
};
var _default = exports.default = rgb2css;
},{"../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js","./hsl2css.js":"../node_modules/chroma-js/src/io/css/hsl2css.js","../hsl/rgb2hsl.js":"../node_modules/chroma-js/src/io/hsl/rgb2hsl.js"}],"../node_modules/chroma-js/src/io/hsl/hsl2rgb.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("../../utils/index.js");
const {
  round
} = Math;
const hsl2rgb = (...args) => {
  args = (0, _index.unpack)(args, 'hsl');
  const [h, s, l] = args;
  let r, g, b;
  if (s === 0) {
    r = g = b = l * 255;
  } else {
    const t3 = [0, 0, 0];
    const c = [0, 0, 0];
    const t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const t1 = 2 * l - t2;
    const h_ = h / 360;
    t3[0] = h_ + 1 / 3;
    t3[1] = h_;
    t3[2] = h_ - 1 / 3;
    for (let i = 0; i < 3; i++) {
      if (t3[i] < 0) t3[i] += 1;
      if (t3[i] > 1) t3[i] -= 1;
      if (6 * t3[i] < 1) c[i] = t1 + (t2 - t1) * 6 * t3[i];else if (2 * t3[i] < 1) c[i] = t2;else if (3 * t3[i] < 2) c[i] = t1 + (t2 - t1) * (2 / 3 - t3[i]) * 6;else c[i] = t1;
    }
    [r, g, b] = [round(c[0] * 255), round(c[1] * 255), round(c[2] * 255)];
  }
  if (args.length > 3) {
    // keep alpha channel
    return [r, g, b, args[3]];
  }
  return [r, g, b, 1];
};
var _default = exports.default = hsl2rgb;
},{"../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js"}],"../node_modules/chroma-js/src/io/css/css2rgb.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hsl2rgb = _interopRequireDefault(require("../hsl/hsl2rgb.js"));
var _input = _interopRequireDefault(require("../input.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const RE_RGB = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/;
const RE_RGBA = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/;
const RE_RGB_PCT = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
const RE_RGBA_PCT = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
const RE_HSL = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
const RE_HSLA = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
const {
  round
} = Math;
const css2rgb = css => {
  css = css.toLowerCase().trim();
  let m;
  if (_input.default.format.named) {
    try {
      return _input.default.format.named(css);
      // eslint-disable-next-line
    } catch (e) {}
  }

  // rgb(250,20,0)
  if (m = css.match(RE_RGB)) {
    const rgb = m.slice(1, 4);
    for (let i = 0; i < 3; i++) {
      rgb[i] = +rgb[i];
    }
    rgb[3] = 1; // default alpha
    return rgb;
  }

  // rgba(250,20,0,0.4)
  if (m = css.match(RE_RGBA)) {
    const rgb = m.slice(1, 5);
    for (let i = 0; i < 4; i++) {
      rgb[i] = +rgb[i];
    }
    return rgb;
  }

  // rgb(100%,0%,0%)
  if (m = css.match(RE_RGB_PCT)) {
    const rgb = m.slice(1, 4);
    for (let i = 0; i < 3; i++) {
      rgb[i] = round(rgb[i] * 2.55);
    }
    rgb[3] = 1; // default alpha
    return rgb;
  }

  // rgba(100%,0%,0%,0.4)
  if (m = css.match(RE_RGBA_PCT)) {
    const rgb = m.slice(1, 5);
    for (let i = 0; i < 3; i++) {
      rgb[i] = round(rgb[i] * 2.55);
    }
    rgb[3] = +rgb[3];
    return rgb;
  }

  // hsl(0,100%,50%)
  if (m = css.match(RE_HSL)) {
    const hsl = m.slice(1, 4);
    hsl[1] *= 0.01;
    hsl[2] *= 0.01;
    const rgb = (0, _hsl2rgb.default)(hsl);
    rgb[3] = 1;
    return rgb;
  }

  // hsla(0,100%,50%,0.5)
  if (m = css.match(RE_HSLA)) {
    const hsl = m.slice(1, 4);
    hsl[1] *= 0.01;
    hsl[2] *= 0.01;
    const rgb = (0, _hsl2rgb.default)(hsl);
    rgb[3] = +m[4]; // default alpha = 1
    return rgb;
  }
};
css2rgb.test = s => {
  return RE_RGB.test(s) || RE_RGBA.test(s) || RE_RGB_PCT.test(s) || RE_RGBA_PCT.test(s) || RE_HSL.test(s) || RE_HSLA.test(s);
};
var _default = exports.default = css2rgb;
},{"../hsl/hsl2rgb.js":"../node_modules/chroma-js/src/io/hsl/hsl2rgb.js","../input.js":"../node_modules/chroma-js/src/io/input.js"}],"../node_modules/chroma-js/src/io/css/index.js":[function(require,module,exports) {
"use strict";

var _chroma = _interopRequireDefault(require("../../chroma.js"));
var _Color = _interopRequireDefault(require("../../Color.js"));
var _input = _interopRequireDefault(require("../input.js"));
var _index = require("../../utils/index.js");
var _rgb2css = _interopRequireDefault(require("./rgb2css.js"));
var _css2rgb = _interopRequireDefault(require("./css2rgb.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_Color.default.prototype.css = function (mode) {
  return (0, _rgb2css.default)(this._rgb, mode);
};
_chroma.default.css = (...args) => new _Color.default(...args, 'css');
_input.default.format.css = _css2rgb.default;
_input.default.autodetect.push({
  p: 5,
  test: (h, ...rest) => {
    if (!rest.length && (0, _index.type)(h) === 'string' && _css2rgb.default.test(h)) {
      return 'css';
    }
  }
});
},{"../../chroma.js":"../node_modules/chroma-js/src/chroma.js","../../Color.js":"../node_modules/chroma-js/src/Color.js","../input.js":"../node_modules/chroma-js/src/io/input.js","../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js","./rgb2css.js":"../node_modules/chroma-js/src/io/css/rgb2css.js","./css2rgb.js":"../node_modules/chroma-js/src/io/css/css2rgb.js"}],"../node_modules/chroma-js/src/io/gl/index.js":[function(require,module,exports) {
"use strict";

var _Color = _interopRequireDefault(require("../../Color.js"));
var _chroma = _interopRequireDefault(require("../../chroma.js"));
var _input = _interopRequireDefault(require("../input.js"));
var _index = require("../../utils/index.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_input.default.format.gl = (...args) => {
  const rgb = (0, _index.unpack)(args, 'rgba');
  rgb[0] *= 255;
  rgb[1] *= 255;
  rgb[2] *= 255;
  return rgb;
};
_chroma.default.gl = (...args) => new _Color.default(...args, 'gl');
_Color.default.prototype.gl = function () {
  const rgb = this._rgb;
  return [rgb[0] / 255, rgb[1] / 255, rgb[2] / 255, rgb[3]];
};
},{"../../Color.js":"../node_modules/chroma-js/src/Color.js","../../chroma.js":"../node_modules/chroma-js/src/chroma.js","../input.js":"../node_modules/chroma-js/src/io/input.js","../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js"}],"../node_modules/chroma-js/src/io/hcg/hcg2rgb.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("../../utils/index.js");
const {
  floor
} = Math;

/*
 * this is basically just HSV with some minor tweaks
 *
 * hue.. [0..360]
 * chroma .. [0..1]
 * grayness .. [0..1]
 */

const hcg2rgb = (...args) => {
  args = (0, _index.unpack)(args, 'hcg');
  let [h, c, _g] = args;
  let r, g, b;
  _g = _g * 255;
  const _c = c * 255;
  if (c === 0) {
    r = g = b = _g;
  } else {
    if (h === 360) h = 0;
    if (h > 360) h -= 360;
    if (h < 0) h += 360;
    h /= 60;
    const i = floor(h);
    const f = h - i;
    const p = _g * (1 - c);
    const q = p + _c * (1 - f);
    const t = p + _c * f;
    const v = p + _c;
    switch (i) {
      case 0:
        [r, g, b] = [v, t, p];
        break;
      case 1:
        [r, g, b] = [q, v, p];
        break;
      case 2:
        [r, g, b] = [p, v, t];
        break;
      case 3:
        [r, g, b] = [p, q, v];
        break;
      case 4:
        [r, g, b] = [t, p, v];
        break;
      case 5:
        [r, g, b] = [v, p, q];
        break;
    }
  }
  return [r, g, b, args.length > 3 ? args[3] : 1];
};
var _default = exports.default = hcg2rgb;
},{"../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js"}],"../node_modules/chroma-js/src/io/hcg/rgb2hcg.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("../../utils/index.js");
const rgb2hcg = (...args) => {
  const [r, g, b] = (0, _index.unpack)(args, 'rgb');
  const minRgb = (0, _index.min)(r, g, b);
  const maxRgb = (0, _index.max)(r, g, b);
  const delta = maxRgb - minRgb;
  const c = delta * 100 / 255;
  const _g = minRgb / (255 - delta) * 100;
  let h;
  if (delta === 0) {
    h = Number.NaN;
  } else {
    if (r === maxRgb) h = (g - b) / delta;
    if (g === maxRgb) h = 2 + (b - r) / delta;
    if (b === maxRgb) h = 4 + (r - g) / delta;
    h *= 60;
    if (h < 0) h += 360;
  }
  return [h, c, _g];
};
var _default = exports.default = rgb2hcg;
},{"../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js"}],"../node_modules/chroma-js/src/io/hcg/index.js":[function(require,module,exports) {
"use strict";

var _index = require("../../utils/index.js");
var _chroma = _interopRequireDefault(require("../../chroma.js"));
var _Color = _interopRequireDefault(require("../../Color.js"));
var _input = _interopRequireDefault(require("../input.js"));
var _hcg2rgb = _interopRequireDefault(require("./hcg2rgb.js"));
var _rgb2hcg = _interopRequireDefault(require("./rgb2hcg.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_Color.default.prototype.hcg = function () {
  return (0, _rgb2hcg.default)(this._rgb);
};
_chroma.default.hcg = (...args) => new _Color.default(...args, 'hcg');
_input.default.format.hcg = _hcg2rgb.default;
_input.default.autodetect.push({
  p: 1,
  test: (...args) => {
    args = (0, _index.unpack)(args, 'hcg');
    if ((0, _index.type)(args) === 'array' && args.length === 3) {
      return 'hcg';
    }
  }
});
},{"../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js","../../chroma.js":"../node_modules/chroma-js/src/chroma.js","../../Color.js":"../node_modules/chroma-js/src/Color.js","../input.js":"../node_modules/chroma-js/src/io/input.js","./hcg2rgb.js":"../node_modules/chroma-js/src/io/hcg/hcg2rgb.js","./rgb2hcg.js":"../node_modules/chroma-js/src/io/hcg/rgb2hcg.js"}],"../node_modules/chroma-js/src/io/hex/hex2rgb.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const RE_HEX = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
const RE_HEXA = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;
const hex2rgb = hex => {
  if (hex.match(RE_HEX)) {
    // remove optional leading #
    if (hex.length === 4 || hex.length === 7) {
      hex = hex.substr(1);
    }
    // expand short-notation to full six-digit
    if (hex.length === 3) {
      hex = hex.split('');
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    const u = parseInt(hex, 16);
    const r = u >> 16;
    const g = u >> 8 & 0xff;
    const b = u & 0xff;
    return [r, g, b, 1];
  }

  // match rgba hex format, eg #FF000077
  if (hex.match(RE_HEXA)) {
    if (hex.length === 5 || hex.length === 9) {
      // remove optional leading #
      hex = hex.substr(1);
    }
    // expand short-notation to full eight-digit
    if (hex.length === 4) {
      hex = hex.split('');
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
    }
    const u = parseInt(hex, 16);
    const r = u >> 24 & 0xff;
    const g = u >> 16 & 0xff;
    const b = u >> 8 & 0xff;
    const a = Math.round((u & 0xff) / 0xff * 100) / 100;
    return [r, g, b, a];
  }

  // we used to check for css colors here
  // if _input.css? and rgb = _input.css hex
  //     return rgb

  throw new Error(`unknown hex color: ${hex}`);
};
var _default = exports.default = hex2rgb;
},{}],"../node_modules/chroma-js/src/io/hex/rgb2hex.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("../../utils/index.js");
const {
  round
} = Math;
const rgb2hex = (...args) => {
  let [r, g, b, a] = (0, _index.unpack)(args, 'rgba');
  let mode = (0, _index.last)(args) || 'auto';
  if (a === undefined) a = 1;
  if (mode === 'auto') {
    mode = a < 1 ? 'rgba' : 'rgb';
  }
  r = round(r);
  g = round(g);
  b = round(b);
  const u = r << 16 | g << 8 | b;
  let str = '000000' + u.toString(16); //#.toUpperCase();
  str = str.substr(str.length - 6);
  let hxa = '0' + round(a * 255).toString(16);
  hxa = hxa.substr(hxa.length - 2);
  switch (mode.toLowerCase()) {
    case 'rgba':
      return `#${str}${hxa}`;
    case 'argb':
      return `#${hxa}${str}`;
    default:
      return `#${str}`;
  }
};
var _default = exports.default = rgb2hex;
},{"../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js"}],"../node_modules/chroma-js/src/io/hex/index.js":[function(require,module,exports) {
"use strict";

var _chroma = _interopRequireDefault(require("../../chroma.js"));
var _Color = _interopRequireDefault(require("../../Color.js"));
var _index = require("../../utils/index.js");
var _input = _interopRequireDefault(require("../input.js"));
var _hex2rgb = _interopRequireDefault(require("./hex2rgb.js"));
var _rgb2hex = _interopRequireDefault(require("./rgb2hex.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_Color.default.prototype.hex = function (mode) {
  return (0, _rgb2hex.default)(this._rgb, mode);
};
_chroma.default.hex = (...args) => new _Color.default(...args, 'hex');
_input.default.format.hex = _hex2rgb.default;
_input.default.autodetect.push({
  p: 4,
  test: (h, ...rest) => {
    if (!rest.length && (0, _index.type)(h) === 'string' && [3, 4, 5, 6, 7, 8, 9].indexOf(h.length) >= 0) {
      return 'hex';
    }
  }
});
},{"../../chroma.js":"../node_modules/chroma-js/src/chroma.js","../../Color.js":"../node_modules/chroma-js/src/Color.js","../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js","../input.js":"../node_modules/chroma-js/src/io/input.js","./hex2rgb.js":"../node_modules/chroma-js/src/io/hex/hex2rgb.js","./rgb2hex.js":"../node_modules/chroma-js/src/io/hex/rgb2hex.js"}],"../node_modules/chroma-js/src/io/hsi/hsi2rgb.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("../../utils/index.js");
const {
  cos
} = Math;

/*
 * hue [0..360]
 * saturation [0..1]
 * intensity [0..1]
 */
const hsi2rgb = (...args) => {
  /*
  borrowed from here:
  http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/hsi2rgb.cpp
  */
  args = (0, _index.unpack)(args, 'hsi');
  let [h, s, i] = args;
  let r, g, b;
  if (isNaN(h)) h = 0;
  if (isNaN(s)) s = 0;
  // normalize hue
  if (h > 360) h -= 360;
  if (h < 0) h += 360;
  h /= 360;
  if (h < 1 / 3) {
    b = (1 - s) / 3;
    r = (1 + s * cos(_index.TWOPI * h) / cos(_index.PITHIRD - _index.TWOPI * h)) / 3;
    g = 1 - (b + r);
  } else if (h < 2 / 3) {
    h -= 1 / 3;
    r = (1 - s) / 3;
    g = (1 + s * cos(_index.TWOPI * h) / cos(_index.PITHIRD - _index.TWOPI * h)) / 3;
    b = 1 - (r + g);
  } else {
    h -= 2 / 3;
    g = (1 - s) / 3;
    b = (1 + s * cos(_index.TWOPI * h) / cos(_index.PITHIRD - _index.TWOPI * h)) / 3;
    r = 1 - (g + b);
  }
  r = (0, _index.limit)(i * r * 3);
  g = (0, _index.limit)(i * g * 3);
  b = (0, _index.limit)(i * b * 3);
  return [r * 255, g * 255, b * 255, args.length > 3 ? args[3] : 1];
};
var _default = exports.default = hsi2rgb;
},{"../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js"}],"../node_modules/chroma-js/src/io/hsi/rgb2hsi.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("../../utils/index.js");
const {
  min,
  sqrt,
  acos
} = Math;
const rgb2hsi = (...args) => {
  /*
  borrowed from here:
  http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/rgb2hsi.cpp
  */
  let [r, g, b] = (0, _index.unpack)(args, 'rgb');
  r /= 255;
  g /= 255;
  b /= 255;
  let h;
  const min_ = min(r, g, b);
  const i = (r + g + b) / 3;
  const s = i > 0 ? 1 - min_ / i : 0;
  if (s === 0) {
    h = NaN;
  } else {
    h = (r - g + (r - b)) / 2;
    h /= sqrt((r - g) * (r - g) + (r - b) * (g - b));
    h = acos(h);
    if (b > g) {
      h = _index.TWOPI - h;
    }
    h /= _index.TWOPI;
  }
  return [h * 360, s, i];
};
var _default = exports.default = rgb2hsi;
},{"../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js"}],"../node_modules/chroma-js/src/io/hsi/index.js":[function(require,module,exports) {
"use strict";

var _index = require("../../utils/index.js");
var _chroma = _interopRequireDefault(require("../../chroma.js"));
var _Color = _interopRequireDefault(require("../../Color.js"));
var _input = _interopRequireDefault(require("../input.js"));
var _hsi2rgb = _interopRequireDefault(require("./hsi2rgb.js"));
var _rgb2hsi = _interopRequireDefault(require("./rgb2hsi.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_Color.default.prototype.hsi = function () {
  return (0, _rgb2hsi.default)(this._rgb);
};
_chroma.default.hsi = (...args) => new _Color.default(...args, 'hsi');
_input.default.format.hsi = _hsi2rgb.default;
_input.default.autodetect.push({
  p: 2,
  test: (...args) => {
    args = (0, _index.unpack)(args, 'hsi');
    if ((0, _index.type)(args) === 'array' && args.length === 3) {
      return 'hsi';
    }
  }
});
},{"../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js","../../chroma.js":"../node_modules/chroma-js/src/chroma.js","../../Color.js":"../node_modules/chroma-js/src/Color.js","../input.js":"../node_modules/chroma-js/src/io/input.js","./hsi2rgb.js":"../node_modules/chroma-js/src/io/hsi/hsi2rgb.js","./rgb2hsi.js":"../node_modules/chroma-js/src/io/hsi/rgb2hsi.js"}],"../node_modules/chroma-js/src/io/hsl/index.js":[function(require,module,exports) {
"use strict";

var _index = require("../../utils/index.js");
var _chroma = _interopRequireDefault(require("../../chroma.js"));
var _Color = _interopRequireDefault(require("../../Color.js"));
var _input = _interopRequireDefault(require("../input.js"));
var _hsl2rgb = _interopRequireDefault(require("./hsl2rgb.js"));
var _rgb2hsl = _interopRequireDefault(require("./rgb2hsl.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_Color.default.prototype.hsl = function () {
  return (0, _rgb2hsl.default)(this._rgb);
};
_chroma.default.hsl = (...args) => new _Color.default(...args, 'hsl');
_input.default.format.hsl = _hsl2rgb.default;
_input.default.autodetect.push({
  p: 2,
  test: (...args) => {
    args = (0, _index.unpack)(args, 'hsl');
    if ((0, _index.type)(args) === 'array' && args.length === 3) {
      return 'hsl';
    }
  }
});
},{"../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js","../../chroma.js":"../node_modules/chroma-js/src/chroma.js","../../Color.js":"../node_modules/chroma-js/src/Color.js","../input.js":"../node_modules/chroma-js/src/io/input.js","./hsl2rgb.js":"../node_modules/chroma-js/src/io/hsl/hsl2rgb.js","./rgb2hsl.js":"../node_modules/chroma-js/src/io/hsl/rgb2hsl.js"}],"../node_modules/chroma-js/src/io/hsv/hsv2rgb.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("../../utils/index.js");
const {
  floor
} = Math;
const hsv2rgb = (...args) => {
  args = (0, _index.unpack)(args, 'hsv');
  let [h, s, v] = args;
  let r, g, b;
  v *= 255;
  if (s === 0) {
    r = g = b = v;
  } else {
    if (h === 360) h = 0;
    if (h > 360) h -= 360;
    if (h < 0) h += 360;
    h /= 60;
    const i = floor(h);
    const f = h - i;
    const p = v * (1 - s);
    const q = v * (1 - s * f);
    const t = v * (1 - s * (1 - f));
    switch (i) {
      case 0:
        [r, g, b] = [v, t, p];
        break;
      case 1:
        [r, g, b] = [q, v, p];
        break;
      case 2:
        [r, g, b] = [p, v, t];
        break;
      case 3:
        [r, g, b] = [p, q, v];
        break;
      case 4:
        [r, g, b] = [t, p, v];
        break;
      case 5:
        [r, g, b] = [v, p, q];
        break;
    }
  }
  return [r, g, b, args.length > 3 ? args[3] : 1];
};
var _default = exports.default = hsv2rgb;
},{"../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js"}],"../node_modules/chroma-js/src/io/hsv/rgb2hsv.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("../../utils/index.js");
const {
  min,
  max
} = Math;

/*
 * supported arguments:
 * - rgb2hsv(r,g,b)
 * - rgb2hsv([r,g,b])
 * - rgb2hsv({r,g,b})
 */
const rgb2hsl = (...args) => {
  args = (0, _index.unpack)(args, 'rgb');
  let [r, g, b] = args;
  const min_ = min(r, g, b);
  const max_ = max(r, g, b);
  const delta = max_ - min_;
  let h, s, v;
  v = max_ / 255.0;
  if (max_ === 0) {
    h = Number.NaN;
    s = 0;
  } else {
    s = delta / max_;
    if (r === max_) h = (g - b) / delta;
    if (g === max_) h = 2 + (b - r) / delta;
    if (b === max_) h = 4 + (r - g) / delta;
    h *= 60;
    if (h < 0) h += 360;
  }
  return [h, s, v];
};
var _default = exports.default = rgb2hsl;
},{"../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js"}],"../node_modules/chroma-js/src/io/hsv/index.js":[function(require,module,exports) {
"use strict";

var _index = require("../../utils/index.js");
var _chroma = _interopRequireDefault(require("../../chroma.js"));
var _Color = _interopRequireDefault(require("../../Color.js"));
var _input = _interopRequireDefault(require("../input.js"));
var _hsv2rgb = _interopRequireDefault(require("./hsv2rgb.js"));
var _rgb2hsv = _interopRequireDefault(require("./rgb2hsv.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_Color.default.prototype.hsv = function () {
  return (0, _rgb2hsv.default)(this._rgb);
};
_chroma.default.hsv = (...args) => new _Color.default(...args, 'hsv');
_input.default.format.hsv = _hsv2rgb.default;
_input.default.autodetect.push({
  p: 2,
  test: (...args) => {
    args = (0, _index.unpack)(args, 'hsv');
    if ((0, _index.type)(args) === 'array' && args.length === 3) {
      return 'hsv';
    }
  }
});
},{"../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js","../../chroma.js":"../node_modules/chroma-js/src/chroma.js","../../Color.js":"../node_modules/chroma-js/src/Color.js","../input.js":"../node_modules/chroma-js/src/io/input.js","./hsv2rgb.js":"../node_modules/chroma-js/src/io/hsv/hsv2rgb.js","./rgb2hsv.js":"../node_modules/chroma-js/src/io/hsv/rgb2hsv.js"}],"../node_modules/chroma-js/src/io/lab/lab-constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = {
  // Corresponds roughly to RGB brighter/darker
  Kn: 18,
  // D65 standard referent
  Xn: 0.95047,
  Yn: 1,
  Zn: 1.08883,
  t0: 0.137931034,
  // 4 / 29
  t1: 0.206896552,
  // 6 / 29
  t2: 0.12841855,
  // 3 * t1 * t1
  t3: 0.008856452 // t1 * t1 * t1
};
},{}],"../node_modules/chroma-js/src/io/lab/lab2rgb.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _labConstants = _interopRequireDefault(require("./lab-constants.js"));
var _index = require("../../utils/index.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const {
  pow
} = Math;

/*
 * L* [0..100]
 * a [-100..100]
 * b [-100..100]
 */
const lab2rgb = (...args) => {
  args = (0, _index.unpack)(args, 'lab');
  const [l, a, b] = args;
  let x, y, z, r, g, b_;
  y = (l + 16) / 116;
  x = isNaN(a) ? y : y + a / 500;
  z = isNaN(b) ? y : y - b / 200;
  y = _labConstants.default.Yn * lab_xyz(y);
  x = _labConstants.default.Xn * lab_xyz(x);
  z = _labConstants.default.Zn * lab_xyz(z);
  r = xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z); // D65 -> sRGB
  g = xyz_rgb(-0.969266 * x + 1.8760108 * y + 0.041556 * z);
  b_ = xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z);
  return [r, g, b_, args.length > 3 ? args[3] : 1];
};
const xyz_rgb = r => {
  return 255 * (r <= 0.00304 ? 12.92 * r : 1.055 * pow(r, 1 / 2.4) - 0.055);
};
const lab_xyz = t => {
  return t > _labConstants.default.t1 ? t * t * t : _labConstants.default.t2 * (t - _labConstants.default.t0);
};
var _default = exports.default = lab2rgb;
},{"./lab-constants.js":"../node_modules/chroma-js/src/io/lab/lab-constants.js","../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js"}],"../node_modules/chroma-js/src/io/lab/rgb2lab.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _labConstants = _interopRequireDefault(require("./lab-constants.js"));
var _index = require("../../utils/index.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const {
  pow
} = Math;
const rgb2lab = (...args) => {
  const [r, g, b] = (0, _index.unpack)(args, 'rgb');
  const [x, y, z] = rgb2xyz(r, g, b);
  const l = 116 * y - 16;
  return [l < 0 ? 0 : l, 500 * (x - y), 200 * (y - z)];
};
const rgb_xyz = r => {
  if ((r /= 255) <= 0.04045) return r / 12.92;
  return pow((r + 0.055) / 1.055, 2.4);
};
const xyz_lab = t => {
  if (t > _labConstants.default.t3) return pow(t, 1 / 3);
  return t / _labConstants.default.t2 + _labConstants.default.t0;
};
const rgb2xyz = (r, g, b) => {
  r = rgb_xyz(r);
  g = rgb_xyz(g);
  b = rgb_xyz(b);
  const x = xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / _labConstants.default.Xn);
  const y = xyz_lab((0.2126729 * r + 0.7151522 * g + 0.072175 * b) / _labConstants.default.Yn);
  const z = xyz_lab((0.0193339 * r + 0.119192 * g + 0.9503041 * b) / _labConstants.default.Zn);
  return [x, y, z];
};
var _default = exports.default = rgb2lab;
},{"./lab-constants.js":"../node_modules/chroma-js/src/io/lab/lab-constants.js","../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js"}],"../node_modules/chroma-js/src/io/lab/index.js":[function(require,module,exports) {
"use strict";

var _index = require("../../utils/index.js");
var _chroma = _interopRequireDefault(require("../../chroma.js"));
var _Color = _interopRequireDefault(require("../../Color.js"));
var _input = _interopRequireDefault(require("../input.js"));
var _lab2rgb = _interopRequireDefault(require("./lab2rgb.js"));
var _rgb2lab = _interopRequireDefault(require("./rgb2lab.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_Color.default.prototype.lab = function () {
  return (0, _rgb2lab.default)(this._rgb);
};
_chroma.default.lab = (...args) => new _Color.default(...args, 'lab');
_input.default.format.lab = _lab2rgb.default;
_input.default.autodetect.push({
  p: 2,
  test: (...args) => {
    args = (0, _index.unpack)(args, 'lab');
    if ((0, _index.type)(args) === 'array' && args.length === 3) {
      return 'lab';
    }
  }
});
},{"../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js","../../chroma.js":"../node_modules/chroma-js/src/chroma.js","../../Color.js":"../node_modules/chroma-js/src/Color.js","../input.js":"../node_modules/chroma-js/src/io/input.js","./lab2rgb.js":"../node_modules/chroma-js/src/io/lab/lab2rgb.js","./rgb2lab.js":"../node_modules/chroma-js/src/io/lab/rgb2lab.js"}],"../node_modules/chroma-js/src/io/lch/lch2lab.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("../../utils/index.js");
const {
  sin,
  cos
} = Math;
const lch2lab = (...args) => {
  /*
  Convert from a qualitative parameter h and a quantitative parameter l to a 24-bit pixel.
  These formulas were invented by David Dalrymple to obtain maximum contrast without going
  out of gamut if the parameters are in the range 0-1.
   A saturation multiplier was added by Gregor Aisch
  */
  let [l, c, h] = (0, _index.unpack)(args, 'lch');
  if (isNaN(h)) h = 0;
  h = h * _index.DEG2RAD;
  return [l, cos(h) * c, sin(h) * c];
};
var _default = exports.default = lch2lab;
},{"../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js"}],"../node_modules/chroma-js/src/io/lch/lch2rgb.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("../../utils/index.js");
var _lch2lab = _interopRequireDefault(require("./lch2lab.js"));
var _lab2rgb = _interopRequireDefault(require("../lab/lab2rgb.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const lch2rgb = (...args) => {
  args = (0, _index.unpack)(args, 'lch');
  const [l, c, h] = args;
  const [L, a, b_] = (0, _lch2lab.default)(l, c, h);
  const [r, g, b] = (0, _lab2rgb.default)(L, a, b_);
  return [r, g, b, args.length > 3 ? args[3] : 1];
};
var _default = exports.default = lch2rgb;
},{"../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js","./lch2lab.js":"../node_modules/chroma-js/src/io/lch/lch2lab.js","../lab/lab2rgb.js":"../node_modules/chroma-js/src/io/lab/lab2rgb.js"}],"../node_modules/chroma-js/src/io/lch/hcl2rgb.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("../../utils/index.js");
var _lch2rgb = _interopRequireDefault(require("./lch2rgb.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const hcl2rgb = (...args) => {
  const hcl = (0, _index.unpack)(args, 'hcl').reverse();
  return (0, _lch2rgb.default)(...hcl);
};
var _default = exports.default = hcl2rgb;
},{"../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js","./lch2rgb.js":"../node_modules/chroma-js/src/io/lch/lch2rgb.js"}],"../node_modules/chroma-js/src/io/lch/lab2lch.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("../../utils/index.js");
const {
  sqrt,
  atan2,
  round
} = Math;
const lab2lch = (...args) => {
  const [l, a, b] = (0, _index.unpack)(args, 'lab');
  const c = sqrt(a * a + b * b);
  let h = (atan2(b, a) * _index.RAD2DEG + 360) % 360;
  if (round(c * 10000) === 0) h = Number.NaN;
  return [l, c, h];
};
var _default = exports.default = lab2lch;
},{"../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js"}],"../node_modules/chroma-js/src/io/lch/rgb2lch.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("../../utils/index.js");
var _rgb2lab = _interopRequireDefault(require("../lab/rgb2lab.js"));
var _lab2lch = _interopRequireDefault(require("./lab2lch.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const rgb2lch = (...args) => {
  const [r, g, b] = (0, _index.unpack)(args, 'rgb');
  const [l, a, b_] = (0, _rgb2lab.default)(r, g, b);
  return (0, _lab2lch.default)(l, a, b_);
};
var _default = exports.default = rgb2lch;
},{"../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js","../lab/rgb2lab.js":"../node_modules/chroma-js/src/io/lab/rgb2lab.js","./lab2lch.js":"../node_modules/chroma-js/src/io/lch/lab2lch.js"}],"../node_modules/chroma-js/src/io/lch/index.js":[function(require,module,exports) {
"use strict";

var _index = require("../../utils/index.js");
var _chroma = _interopRequireDefault(require("../../chroma.js"));
var _Color = _interopRequireDefault(require("../../Color.js"));
var _input = _interopRequireDefault(require("../input.js"));
var _lch2rgb = _interopRequireDefault(require("./lch2rgb.js"));
var _hcl2rgb = _interopRequireDefault(require("./hcl2rgb.js"));
var _rgb2lch = _interopRequireDefault(require("./rgb2lch.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_Color.default.prototype.lch = function () {
  return (0, _rgb2lch.default)(this._rgb);
};
_Color.default.prototype.hcl = function () {
  return (0, _rgb2lch.default)(this._rgb).reverse();
};
_chroma.default.lch = (...args) => new _Color.default(...args, 'lch');
_chroma.default.hcl = (...args) => new _Color.default(...args, 'hcl');
_input.default.format.lch = _lch2rgb.default;
_input.default.format.hcl = _hcl2rgb.default;
['lch', 'hcl'].forEach(m => _input.default.autodetect.push({
  p: 2,
  test: (...args) => {
    args = (0, _index.unpack)(args, m);
    if ((0, _index.type)(args) === 'array' && args.length === 3) {
      return m;
    }
  }
}));
},{"../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js","../../chroma.js":"../node_modules/chroma-js/src/chroma.js","../../Color.js":"../node_modules/chroma-js/src/Color.js","../input.js":"../node_modules/chroma-js/src/io/input.js","./lch2rgb.js":"../node_modules/chroma-js/src/io/lch/lch2rgb.js","./hcl2rgb.js":"../node_modules/chroma-js/src/io/lch/hcl2rgb.js","./rgb2lch.js":"../node_modules/chroma-js/src/io/lch/rgb2lch.js"}],"../node_modules/chroma-js/src/colors/w3cx11.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
	X11 color names

	http://www.w3.org/TR/css3-color/#svg-color
*/

const w3cx11 = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  gold: '#ffd700',
  goldenrod: '#daa520',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  laserlemon: '#ffff54',
  lavender: '#e6e6fa',
  lavenderblush: '#fff0f5',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrod: '#fafad2',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  maroon2: '#7f0000',
  maroon3: '#b03060',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  purple2: '#7f007f',
  purple3: '#a020f0',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32'
};
var _default = exports.default = w3cx11;
},{}],"../node_modules/chroma-js/src/io/named/index.js":[function(require,module,exports) {
"use strict";

var _Color = _interopRequireDefault(require("../../Color.js"));
var _input = _interopRequireDefault(require("../input.js"));
var _index = require("../../utils/index.js");
var _w3cx = _interopRequireDefault(require("../../colors/w3cx11.js"));
var _hex2rgb = _interopRequireDefault(require("../hex/hex2rgb.js"));
var _rgb2hex = _interopRequireDefault(require("../hex/rgb2hex.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_Color.default.prototype.name = function () {
  const hex = (0, _rgb2hex.default)(this._rgb, 'rgb');
  for (let n of Object.keys(_w3cx.default)) {
    if (_w3cx.default[n] === hex) return n.toLowerCase();
  }
  return hex;
};
_input.default.format.named = name => {
  name = name.toLowerCase();
  if (_w3cx.default[name]) return (0, _hex2rgb.default)(_w3cx.default[name]);
  throw new Error('unknown color name: ' + name);
};
_input.default.autodetect.push({
  p: 5,
  test: (h, ...rest) => {
    if (!rest.length && (0, _index.type)(h) === 'string' && _w3cx.default[h.toLowerCase()]) {
      return 'named';
    }
  }
});
},{"../../Color.js":"../node_modules/chroma-js/src/Color.js","../input.js":"../node_modules/chroma-js/src/io/input.js","../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js","../../colors/w3cx11.js":"../node_modules/chroma-js/src/colors/w3cx11.js","../hex/hex2rgb.js":"../node_modules/chroma-js/src/io/hex/hex2rgb.js","../hex/rgb2hex.js":"../node_modules/chroma-js/src/io/hex/rgb2hex.js"}],"../node_modules/chroma-js/src/io/num/num2rgb.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("../../utils/index.js");
const num2rgb = num => {
  if ((0, _index.type)(num) == 'number' && num >= 0 && num <= 0xffffff) {
    const r = num >> 16;
    const g = num >> 8 & 0xff;
    const b = num & 0xff;
    return [r, g, b, 1];
  }
  throw new Error('unknown num color: ' + num);
};
var _default = exports.default = num2rgb;
},{"../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js"}],"../node_modules/chroma-js/src/io/num/rgb2num.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("../../utils/index.js");
const rgb2num = (...args) => {
  const [r, g, b] = (0, _index.unpack)(args, 'rgb');
  return (r << 16) + (g << 8) + b;
};
var _default = exports.default = rgb2num;
},{"../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js"}],"../node_modules/chroma-js/src/io/num/index.js":[function(require,module,exports) {
"use strict";

var _chroma = _interopRequireDefault(require("../../chroma.js"));
var _Color = _interopRequireDefault(require("../../Color.js"));
var _input = _interopRequireDefault(require("../input.js"));
var _index = require("../../utils/index.js");
var _num2rgb = _interopRequireDefault(require("./num2rgb.js"));
var _rgb2num = _interopRequireDefault(require("./rgb2num.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_Color.default.prototype.num = function () {
  return (0, _rgb2num.default)(this._rgb);
};
_chroma.default.num = (...args) => new _Color.default(...args, 'num');
_input.default.format.num = _num2rgb.default;
_input.default.autodetect.push({
  p: 5,
  test: (...args) => {
    if (args.length === 1 && (0, _index.type)(args[0]) === 'number' && args[0] >= 0 && args[0] <= 0xffffff) {
      return 'num';
    }
  }
});
},{"../../chroma.js":"../node_modules/chroma-js/src/chroma.js","../../Color.js":"../node_modules/chroma-js/src/Color.js","../input.js":"../node_modules/chroma-js/src/io/input.js","../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js","./num2rgb.js":"../node_modules/chroma-js/src/io/num/num2rgb.js","./rgb2num.js":"../node_modules/chroma-js/src/io/num/rgb2num.js"}],"../node_modules/chroma-js/src/io/rgb/index.js":[function(require,module,exports) {
"use strict";

var _chroma = _interopRequireDefault(require("../../chroma.js"));
var _Color = _interopRequireDefault(require("../../Color.js"));
var _input = _interopRequireDefault(require("../input.js"));
var _index = require("../../utils/index.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const {
  round
} = Math;
_Color.default.prototype.rgb = function (rnd = true) {
  if (rnd === false) return this._rgb.slice(0, 3);
  return this._rgb.slice(0, 3).map(round);
};
_Color.default.prototype.rgba = function (rnd = true) {
  return this._rgb.slice(0, 4).map((v, i) => {
    return i < 3 ? rnd === false ? v : round(v) : v;
  });
};
_chroma.default.rgb = (...args) => new _Color.default(...args, 'rgb');
_input.default.format.rgb = (...args) => {
  const rgba = (0, _index.unpack)(args, 'rgba');
  if (rgba[3] === undefined) rgba[3] = 1;
  return rgba;
};
_input.default.autodetect.push({
  p: 3,
  test: (...args) => {
    args = (0, _index.unpack)(args, 'rgba');
    if ((0, _index.type)(args) === 'array' && (args.length === 3 || args.length === 4 && (0, _index.type)(args[3]) == 'number' && args[3] >= 0 && args[3] <= 1)) {
      return 'rgb';
    }
  }
});
},{"../../chroma.js":"../node_modules/chroma-js/src/chroma.js","../../Color.js":"../node_modules/chroma-js/src/Color.js","../input.js":"../node_modules/chroma-js/src/io/input.js","../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js"}],"../node_modules/chroma-js/src/io/temp/temperature2rgb.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/*
 * Based on implementation by Neil Bartlett
 * https://github.com/neilbartlett/color-temperature
 */

const {
  log
} = Math;
const temperature2rgb = kelvin => {
  const temp = kelvin / 100;
  let r, g, b;
  if (temp < 66) {
    r = 255;
    g = temp < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (g = temp - 2) + 104.49216199393888 * log(g);
    b = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp - 10) + 115.67994401066147 * log(b);
  } else {
    r = 351.97690566805693 + 0.114206453784165 * (r = temp - 55) - 40.25366309332127 * log(r);
    g = 325.4494125711974 + 0.07943456536662342 * (g = temp - 50) - 28.0852963507957 * log(g);
    b = 255;
  }
  return [r, g, b, 1];
};
var _default = exports.default = temperature2rgb;
},{}],"../node_modules/chroma-js/src/io/temp/rgb2temperature.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _temperature2rgb = _interopRequireDefault(require("./temperature2rgb.js"));
var _index = require("../../utils/index.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/*
 * Based on implementation by Neil Bartlett
 * https://github.com/neilbartlett/color-temperature
 **/

const {
  round
} = Math;
const rgb2temperature = (...args) => {
  const rgb = (0, _index.unpack)(args, 'rgb');
  const r = rgb[0],
    b = rgb[2];
  let minTemp = 1000;
  let maxTemp = 40000;
  const eps = 0.4;
  let temp;
  while (maxTemp - minTemp > eps) {
    temp = (maxTemp + minTemp) * 0.5;
    const rgb = (0, _temperature2rgb.default)(temp);
    if (rgb[2] / rgb[0] >= b / r) {
      maxTemp = temp;
    } else {
      minTemp = temp;
    }
  }
  return round(temp);
};
var _default = exports.default = rgb2temperature;
},{"./temperature2rgb.js":"../node_modules/chroma-js/src/io/temp/temperature2rgb.js","../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js"}],"../node_modules/chroma-js/src/io/temp/index.js":[function(require,module,exports) {
"use strict";

var _chroma = _interopRequireDefault(require("../../chroma.js"));
var _Color = _interopRequireDefault(require("../../Color.js"));
var _input = _interopRequireDefault(require("../input.js"));
var _temperature2rgb = _interopRequireDefault(require("./temperature2rgb.js"));
var _rgb2temperature = _interopRequireDefault(require("./rgb2temperature.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_Color.default.prototype.temp = _Color.default.prototype.kelvin = _Color.default.prototype.temperature = function () {
  return (0, _rgb2temperature.default)(this._rgb);
};
_chroma.default.temp = _chroma.default.kelvin = _chroma.default.temperature = (...args) => new _Color.default(...args, 'temp');
_input.default.format.temp = _input.default.format.kelvin = _input.default.format.temperature = _temperature2rgb.default;
},{"../../chroma.js":"../node_modules/chroma-js/src/chroma.js","../../Color.js":"../node_modules/chroma-js/src/Color.js","../input.js":"../node_modules/chroma-js/src/io/input.js","./temperature2rgb.js":"../node_modules/chroma-js/src/io/temp/temperature2rgb.js","./rgb2temperature.js":"../node_modules/chroma-js/src/io/temp/rgb2temperature.js"}],"../node_modules/chroma-js/src/io/oklab/oklab2rgb.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("../../utils/index.js");
const {
  pow,
  sign
} = Math;

/*
 * L* [0..100]
 * a [-100..100]
 * b [-100..100]
 */
const oklab2rgb = (...args) => {
  args = (0, _index.unpack)(args, 'lab');
  const [L, a, b] = args;
  const l = pow(L + 0.3963377774 * a + 0.2158037573 * b, 3);
  const m = pow(L - 0.1055613458 * a - 0.0638541728 * b, 3);
  const s = pow(L - 0.0894841775 * a - 1.291485548 * b, 3);
  return [255 * lrgb2rgb(+4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s), 255 * lrgb2rgb(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s), 255 * lrgb2rgb(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s), args.length > 3 ? args[3] : 1];
};
var _default = exports.default = oklab2rgb;
function lrgb2rgb(c) {
  const abs = Math.abs(c);
  if (abs > 0.0031308) {
    return (sign(c) || 1) * (1.055 * pow(abs, 1 / 2.4) - 0.055);
  }
  return c * 12.92;
}
},{"../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js"}],"../node_modules/chroma-js/src/io/oklab/rgb2oklab.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("../../utils/index.js");
const {
  cbrt,
  pow,
  sign
} = Math;
const rgb2oklab = (...args) => {
  // OKLab color space implementation taken from
  // https://bottosson.github.io/posts/oklab/
  const [r, g, b] = (0, _index.unpack)(args, 'rgb');
  const [lr, lg, lb] = [rgb2lrgb(r / 255), rgb2lrgb(g / 255), rgb2lrgb(b / 255)];
  const l = cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb);
  const m = cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb);
  const s = cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb);
  return [0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s, 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s, 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s];
};
var _default = exports.default = rgb2oklab;
function rgb2lrgb(c) {
  const abs = Math.abs(c);
  if (abs < 0.04045) {
    return c / 12.92;
  }
  return (sign(c) || 1) * pow((abs + 0.055) / 1.055, 2.4);
}
},{"../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js"}],"../node_modules/chroma-js/src/io/oklab/index.js":[function(require,module,exports) {
"use strict";

var _index = require("../../utils/index.js");
var _chroma = _interopRequireDefault(require("../../chroma.js"));
var _Color = _interopRequireDefault(require("../../Color.js"));
var _input = _interopRequireDefault(require("../input.js"));
var _oklab2rgb = _interopRequireDefault(require("./oklab2rgb.js"));
var _rgb2oklab = _interopRequireDefault(require("./rgb2oklab.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_Color.default.prototype.oklab = function () {
  return (0, _rgb2oklab.default)(this._rgb);
};
_chroma.default.oklab = (...args) => new _Color.default(...args, 'oklab');
_input.default.format.oklab = _oklab2rgb.default;
_input.default.autodetect.push({
  p: 3,
  test: (...args) => {
    args = (0, _index.unpack)(args, 'oklab');
    if ((0, _index.type)(args) === 'array' && args.length === 3) {
      return 'oklab';
    }
  }
});
},{"../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js","../../chroma.js":"../node_modules/chroma-js/src/chroma.js","../../Color.js":"../node_modules/chroma-js/src/Color.js","../input.js":"../node_modules/chroma-js/src/io/input.js","./oklab2rgb.js":"../node_modules/chroma-js/src/io/oklab/oklab2rgb.js","./rgb2oklab.js":"../node_modules/chroma-js/src/io/oklab/rgb2oklab.js"}],"../node_modules/chroma-js/src/io/oklch/oklch2rgb.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("../../utils/index.js");
var _lch2lab = _interopRequireDefault(require("../lch/lch2lab.js"));
var _oklab2rgb = _interopRequireDefault(require("../oklab/oklab2rgb.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const oklch2rgb = (...args) => {
  args = (0, _index.unpack)(args, 'lch');
  const [l, c, h] = args;
  const [L, a, b_] = (0, _lch2lab.default)(l, c, h);
  const [r, g, b] = (0, _oklab2rgb.default)(L, a, b_);
  return [r, g, b, args.length > 3 ? args[3] : 1];
};
var _default = exports.default = oklch2rgb;
},{"../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js","../lch/lch2lab.js":"../node_modules/chroma-js/src/io/lch/lch2lab.js","../oklab/oklab2rgb.js":"../node_modules/chroma-js/src/io/oklab/oklab2rgb.js"}],"../node_modules/chroma-js/src/io/oklch/rgb2oklch.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("../../utils/index.js");
var _rgb2oklab = _interopRequireDefault(require("../oklab/rgb2oklab.js"));
var _lab2lch = _interopRequireDefault(require("../lch/lab2lch.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const rgb2oklch = (...args) => {
  const [r, g, b] = (0, _index.unpack)(args, 'rgb');
  const [l, a, b_] = (0, _rgb2oklab.default)(r, g, b);
  return (0, _lab2lch.default)(l, a, b_);
};
var _default = exports.default = rgb2oklch;
},{"../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js","../oklab/rgb2oklab.js":"../node_modules/chroma-js/src/io/oklab/rgb2oklab.js","../lch/lab2lch.js":"../node_modules/chroma-js/src/io/lch/lab2lch.js"}],"../node_modules/chroma-js/src/io/oklch/index.js":[function(require,module,exports) {
"use strict";

var _index = require("../../utils/index.js");
var _chroma = _interopRequireDefault(require("../../chroma.js"));
var _Color = _interopRequireDefault(require("../../Color.js"));
var _input = _interopRequireDefault(require("../input.js"));
var _oklch2rgb = _interopRequireDefault(require("./oklch2rgb.js"));
var _rgb2oklch = _interopRequireDefault(require("./rgb2oklch.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_Color.default.prototype.oklch = function () {
  return (0, _rgb2oklch.default)(this._rgb);
};
_chroma.default.oklch = (...args) => new _Color.default(...args, 'oklch');
_input.default.format.oklch = _oklch2rgb.default;
_input.default.autodetect.push({
  p: 3,
  test: (...args) => {
    args = (0, _index.unpack)(args, 'oklch');
    if ((0, _index.type)(args) === 'array' && args.length === 3) {
      return 'oklch';
    }
  }
});
},{"../../utils/index.js":"../node_modules/chroma-js/src/utils/index.js","../../chroma.js":"../node_modules/chroma-js/src/chroma.js","../../Color.js":"../node_modules/chroma-js/src/Color.js","../input.js":"../node_modules/chroma-js/src/io/input.js","./oklch2rgb.js":"../node_modules/chroma-js/src/io/oklch/oklch2rgb.js","./rgb2oklch.js":"../node_modules/chroma-js/src/io/oklch/rgb2oklch.js"}],"../node_modules/chroma-js/src/ops/alpha.js":[function(require,module,exports) {
"use strict";

var _Color = _interopRequireDefault(require("../Color.js"));
var _index = require("../utils/index.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_Color.default.prototype.alpha = function (a, mutate = false) {
  if (a !== undefined && (0, _index.type)(a) === 'number') {
    if (mutate) {
      this._rgb[3] = a;
      return this;
    }
    return new _Color.default([this._rgb[0], this._rgb[1], this._rgb[2], a], 'rgb');
  }
  return this._rgb[3];
};
},{"../Color.js":"../node_modules/chroma-js/src/Color.js","../utils/index.js":"../node_modules/chroma-js/src/utils/index.js"}],"../node_modules/chroma-js/src/ops/clipped.js":[function(require,module,exports) {
"use strict";

var _Color = _interopRequireDefault(require("../Color.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_Color.default.prototype.clipped = function () {
  return this._rgb._clipped || false;
};
},{"../Color.js":"../node_modules/chroma-js/src/Color.js"}],"../node_modules/chroma-js/src/ops/darken.js":[function(require,module,exports) {
"use strict";

require("../io/lab/index.js");
var _Color = _interopRequireDefault(require("../Color.js"));
var _labConstants = _interopRequireDefault(require("../io/lab/lab-constants.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_Color.default.prototype.darken = function (amount = 1) {
  const me = this;
  const lab = me.lab();
  lab[0] -= _labConstants.default.Kn * amount;
  return new _Color.default(lab, 'lab').alpha(me.alpha(), true);
};
_Color.default.prototype.brighten = function (amount = 1) {
  return this.darken(-amount);
};
_Color.default.prototype.darker = _Color.default.prototype.darken;
_Color.default.prototype.brighter = _Color.default.prototype.brighten;
},{"../io/lab/index.js":"../node_modules/chroma-js/src/io/lab/index.js","../Color.js":"../node_modules/chroma-js/src/Color.js","../io/lab/lab-constants.js":"../node_modules/chroma-js/src/io/lab/lab-constants.js"}],"../node_modules/chroma-js/src/ops/get.js":[function(require,module,exports) {
"use strict";

var _Color = _interopRequireDefault(require("../Color.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_Color.default.prototype.get = function (mc) {
  const [mode, channel] = mc.split('.');
  const src = this[mode]();
  if (channel) {
    const i = mode.indexOf(channel) - (mode.substr(0, 2) === 'ok' ? 2 : 0);
    if (i > -1) return src[i];
    throw new Error(`unknown channel ${channel} in mode ${mode}`);
  } else {
    return src;
  }
};
},{"../Color.js":"../node_modules/chroma-js/src/Color.js"}],"../node_modules/chroma-js/src/ops/luminance.js":[function(require,module,exports) {
"use strict";

var _Color = _interopRequireDefault(require("../Color.js"));
var _index = require("../utils/index.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const {
  pow
} = Math;
const EPS = 1e-7;
const MAX_ITER = 20;
_Color.default.prototype.luminance = function (lum, mode = 'rgb') {
  if (lum !== undefined && (0, _index.type)(lum) === 'number') {
    if (lum === 0) {
      // return pure black
      return new _Color.default([0, 0, 0, this._rgb[3]], 'rgb');
    }
    if (lum === 1) {
      // return pure white
      return new _Color.default([255, 255, 255, this._rgb[3]], 'rgb');
    }
    // compute new color using...
    let cur_lum = this.luminance();
    let max_iter = MAX_ITER;
    const test = (low, high) => {
      const mid = low.interpolate(high, 0.5, mode);
      const lm = mid.luminance();
      if (Math.abs(lum - lm) < EPS || !max_iter--) {
        // close enough
        return mid;
      }
      return lm > lum ? test(low, mid) : test(mid, high);
    };
    const rgb = (cur_lum > lum ? test(new _Color.default([0, 0, 0]), this) : test(this, new _Color.default([255, 255, 255]))).rgb();
    return new _Color.default([...rgb, this._rgb[3]]);
  }
  return rgb2luminance(...this._rgb.slice(0, 3));
};
const rgb2luminance = (r, g, b) => {
  // relative luminance
  // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
  r = luminance_x(r);
  g = luminance_x(g);
  b = luminance_x(b);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const luminance_x = x => {
  x /= 255;
  return x <= 0.03928 ? x / 12.92 : pow((x + 0.055) / 1.055, 2.4);
};
},{"../Color.js":"../node_modules/chroma-js/src/Color.js","../utils/index.js":"../node_modules/chroma-js/src/utils/index.js"}],"../node_modules/chroma-js/src/interpolator/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = {};
},{}],"../node_modules/chroma-js/src/generator/mix.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Color = _interopRequireDefault(require("../Color.js"));
var _index = require("../utils/index.js");
var _index2 = _interopRequireDefault(require("../interpolator/index.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = (col1, col2, f = 0.5, ...rest) => {
  let mode = rest[0] || 'lrgb';
  if (!_index2.default[mode] && !rest.length) {
    // fall back to the first supported mode
    mode = Object.keys(_index2.default)[0];
  }
  if (!_index2.default[mode]) {
    throw new Error(`interpolation mode ${mode} is not defined`);
  }
  if ((0, _index.type)(col1) !== 'object') col1 = new _Color.default(col1);
  if ((0, _index.type)(col2) !== 'object') col2 = new _Color.default(col2);
  return _index2.default[mode](col1, col2, f).alpha(col1.alpha() + f * (col2.alpha() - col1.alpha()));
};
exports.default = _default;
},{"../Color.js":"../node_modules/chroma-js/src/Color.js","../utils/index.js":"../node_modules/chroma-js/src/utils/index.js","../interpolator/index.js":"../node_modules/chroma-js/src/interpolator/index.js"}],"../node_modules/chroma-js/src/ops/mix.js":[function(require,module,exports) {
"use strict";

var _Color = _interopRequireDefault(require("../Color.js"));
var _mix = _interopRequireDefault(require("../generator/mix.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_Color.default.prototype.mix = _Color.default.prototype.interpolate = function (col2, f = 0.5, ...rest) {
  return (0, _mix.default)(this, col2, f, ...rest);
};
},{"../Color.js":"../node_modules/chroma-js/src/Color.js","../generator/mix.js":"../node_modules/chroma-js/src/generator/mix.js"}],"../node_modules/chroma-js/src/ops/premultiply.js":[function(require,module,exports) {
"use strict";

var _Color = _interopRequireDefault(require("../Color.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_Color.default.prototype.premultiply = function (mutate = false) {
  const rgb = this._rgb;
  const a = rgb[3];
  if (mutate) {
    this._rgb = [rgb[0] * a, rgb[1] * a, rgb[2] * a, a];
    return this;
  } else {
    return new _Color.default([rgb[0] * a, rgb[1] * a, rgb[2] * a, a], 'rgb');
  }
};
},{"../Color.js":"../node_modules/chroma-js/src/Color.js"}],"../node_modules/chroma-js/src/ops/saturate.js":[function(require,module,exports) {
"use strict";

require("../io/lch/index.js");
var _Color = _interopRequireDefault(require("../Color.js"));
var _labConstants = _interopRequireDefault(require("../io/lab/lab-constants.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_Color.default.prototype.saturate = function (amount = 1) {
  const me = this;
  const lch = me.lch();
  lch[1] += _labConstants.default.Kn * amount;
  if (lch[1] < 0) lch[1] = 0;
  return new _Color.default(lch, 'lch').alpha(me.alpha(), true);
};
_Color.default.prototype.desaturate = function (amount = 1) {
  return this.saturate(-amount);
};
},{"../io/lch/index.js":"../node_modules/chroma-js/src/io/lch/index.js","../Color.js":"../node_modules/chroma-js/src/Color.js","../io/lab/lab-constants.js":"../node_modules/chroma-js/src/io/lab/lab-constants.js"}],"../node_modules/chroma-js/src/ops/set.js":[function(require,module,exports) {
"use strict";

var _Color = _interopRequireDefault(require("../Color.js"));
var _index = require("../utils/index.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_Color.default.prototype.set = function (mc, value, mutate = false) {
  const [mode, channel] = mc.split('.');
  const src = this[mode]();
  if (channel) {
    const i = mode.indexOf(channel) - (mode.substr(0, 2) === 'ok' ? 2 : 0);
    if (i > -1) {
      if ((0, _index.type)(value) == 'string') {
        switch (value.charAt(0)) {
          case '+':
            src[i] += +value;
            break;
          case '-':
            src[i] += +value;
            break;
          case '*':
            src[i] *= +value.substr(1);
            break;
          case '/':
            src[i] /= +value.substr(1);
            break;
          default:
            src[i] = +value;
        }
      } else if ((0, _index.type)(value) === 'number') {
        src[i] = value;
      } else {
        throw new Error(`unsupported value for Color.set`);
      }
      const out = new _Color.default(src, mode);
      if (mutate) {
        this._rgb = out._rgb;
        return this;
      }
      return out;
    }
    throw new Error(`unknown channel ${channel} in mode ${mode}`);
  } else {
    return src;
  }
};
},{"../Color.js":"../node_modules/chroma-js/src/Color.js","../utils/index.js":"../node_modules/chroma-js/src/utils/index.js"}],"../node_modules/chroma-js/src/ops/shade.js":[function(require,module,exports) {
"use strict";

require("../io/lab/index.js");
var _Color = _interopRequireDefault(require("../Color.js"));
var _mix = _interopRequireDefault(require("../generator/mix.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_Color.default.prototype.tint = function (f = 0.5, ...rest) {
  return (0, _mix.default)(this, 'white', f, ...rest);
};
_Color.default.prototype.shade = function (f = 0.5, ...rest) {
  return (0, _mix.default)(this, 'black', f, ...rest);
};
},{"../io/lab/index.js":"../node_modules/chroma-js/src/io/lab/index.js","../Color.js":"../node_modules/chroma-js/src/Color.js","../generator/mix.js":"../node_modules/chroma-js/src/generator/mix.js"}],"../node_modules/chroma-js/src/interpolator/rgb.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Color = _interopRequireDefault(require("../Color.js"));
var _index = _interopRequireDefault(require("./index.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const rgb = (col1, col2, f) => {
  const xyz0 = col1._rgb;
  const xyz1 = col2._rgb;
  return new _Color.default(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), 'rgb');
};

// register interpolator
_index.default.rgb = rgb;
var _default = exports.default = rgb;
},{"../Color.js":"../node_modules/chroma-js/src/Color.js","./index.js":"../node_modules/chroma-js/src/interpolator/index.js"}],"../node_modules/chroma-js/src/interpolator/lrgb.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Color = _interopRequireDefault(require("../Color.js"));
var _index = _interopRequireDefault(require("./index.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const {
  sqrt,
  pow
} = Math;
const lrgb = (col1, col2, f) => {
  const [x1, y1, z1] = col1._rgb;
  const [x2, y2, z2] = col2._rgb;
  return new _Color.default(sqrt(pow(x1, 2) * (1 - f) + pow(x2, 2) * f), sqrt(pow(y1, 2) * (1 - f) + pow(y2, 2) * f), sqrt(pow(z1, 2) * (1 - f) + pow(z2, 2) * f), 'rgb');
};

// register interpolator
_index.default.lrgb = lrgb;
var _default = exports.default = lrgb;
},{"../Color.js":"../node_modules/chroma-js/src/Color.js","./index.js":"../node_modules/chroma-js/src/interpolator/index.js"}],"../node_modules/chroma-js/src/interpolator/lab.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("../io/lab/index.js");
var _index2 = _interopRequireDefault(require("./index.js"));
var _Color = _interopRequireDefault(require("../Color.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const lab = (col1, col2, f) => {
  const xyz0 = col1.lab();
  const xyz1 = col2.lab();
  return new _Color.default(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), 'lab');
};

// register interpolator
_index2.default.lab = lab;
var _default = exports.default = lab;
},{"../io/lab/index.js":"../node_modules/chroma-js/src/io/lab/index.js","./index.js":"../node_modules/chroma-js/src/interpolator/index.js","../Color.js":"../node_modules/chroma-js/src/Color.js"}],"../node_modules/chroma-js/src/interpolator/_hsx.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Color = _interopRequireDefault(require("../Color.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = (col1, col2, f, m) => {
  let xyz0, xyz1;
  if (m === 'hsl') {
    xyz0 = col1.hsl();
    xyz1 = col2.hsl();
  } else if (m === 'hsv') {
    xyz0 = col1.hsv();
    xyz1 = col2.hsv();
  } else if (m === 'hcg') {
    xyz0 = col1.hcg();
    xyz1 = col2.hcg();
  } else if (m === 'hsi') {
    xyz0 = col1.hsi();
    xyz1 = col2.hsi();
  } else if (m === 'lch' || m === 'hcl') {
    m = 'hcl';
    xyz0 = col1.hcl();
    xyz1 = col2.hcl();
  } else if (m === 'oklch') {
    xyz0 = col1.oklch().reverse();
    xyz1 = col2.oklch().reverse();
  }
  let hue0, hue1, sat0, sat1, lbv0, lbv1;
  if (m.substr(0, 1) === 'h' || m === 'oklch') {
    [hue0, sat0, lbv0] = xyz0;
    [hue1, sat1, lbv1] = xyz1;
  }
  let sat, hue, lbv, dh;
  if (!isNaN(hue0) && !isNaN(hue1)) {
    // both colors have hue
    if (hue1 > hue0 && hue1 - hue0 > 180) {
      dh = hue1 - (hue0 + 360);
    } else if (hue1 < hue0 && hue0 - hue1 > 180) {
      dh = hue1 + 360 - hue0;
    } else {
      dh = hue1 - hue0;
    }
    hue = hue0 + f * dh;
  } else if (!isNaN(hue0)) {
    hue = hue0;
    if ((lbv1 == 1 || lbv1 == 0) && m != 'hsv') sat = sat0;
  } else if (!isNaN(hue1)) {
    hue = hue1;
    if ((lbv0 == 1 || lbv0 == 0) && m != 'hsv') sat = sat1;
  } else {
    hue = Number.NaN;
  }
  if (sat === undefined) sat = sat0 + f * (sat1 - sat0);
  lbv = lbv0 + f * (lbv1 - lbv0);
  return m === 'oklch' ? new _Color.default([lbv, sat, hue], m) : new _Color.default([hue, sat, lbv], m);
};
exports.default = _default;
},{"../Color.js":"../node_modules/chroma-js/src/Color.js"}],"../node_modules/chroma-js/src/interpolator/lch.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("../io/lch/index.js");
var _hsx = _interopRequireDefault(require("./_hsx.js"));
var _index2 = _interopRequireDefault(require("./index.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const lch = (col1, col2, f) => {
  return (0, _hsx.default)(col1, col2, f, 'lch');
};

// register interpolator
_index2.default.lch = lch;
_index2.default.hcl = lch;
var _default = exports.default = lch;
},{"../io/lch/index.js":"../node_modules/chroma-js/src/io/lch/index.js","./_hsx.js":"../node_modules/chroma-js/src/interpolator/_hsx.js","./index.js":"../node_modules/chroma-js/src/interpolator/index.js"}],"../node_modules/chroma-js/src/interpolator/num.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("../io/num/index.js");
var _index2 = _interopRequireDefault(require("./index.js"));
var _Color = _interopRequireDefault(require("../Color.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const num = (col1, col2, f) => {
  const c1 = col1.num();
  const c2 = col2.num();
  return new _Color.default(c1 + f * (c2 - c1), 'num');
};

// register interpolator
_index2.default.num = num;
var _default = exports.default = num;
},{"../io/num/index.js":"../node_modules/chroma-js/src/io/num/index.js","./index.js":"../node_modules/chroma-js/src/interpolator/index.js","../Color.js":"../node_modules/chroma-js/src/Color.js"}],"../node_modules/chroma-js/src/interpolator/hcg.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("../io/hcg/index.js");
var _hsx = _interopRequireDefault(require("./_hsx.js"));
var _index2 = _interopRequireDefault(require("./index.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const hcg = (col1, col2, f) => {
  return (0, _hsx.default)(col1, col2, f, 'hcg');
};

// register interpolator
_index2.default.hcg = hcg;
var _default = exports.default = hcg;
},{"../io/hcg/index.js":"../node_modules/chroma-js/src/io/hcg/index.js","./_hsx.js":"../node_modules/chroma-js/src/interpolator/_hsx.js","./index.js":"../node_modules/chroma-js/src/interpolator/index.js"}],"../node_modules/chroma-js/src/interpolator/hsi.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("../io/hsi/index.js");
var _hsx = _interopRequireDefault(require("./_hsx.js"));
var _index2 = _interopRequireDefault(require("./index.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const hsi = (col1, col2, f) => {
  return (0, _hsx.default)(col1, col2, f, 'hsi');
};

// register interpolator
_index2.default.hsi = hsi;
var _default = exports.default = hsi;
},{"../io/hsi/index.js":"../node_modules/chroma-js/src/io/hsi/index.js","./_hsx.js":"../node_modules/chroma-js/src/interpolator/_hsx.js","./index.js":"../node_modules/chroma-js/src/interpolator/index.js"}],"../node_modules/chroma-js/src/interpolator/hsl.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("../io/hsl/index.js");
var _hsx = _interopRequireDefault(require("./_hsx.js"));
var _index2 = _interopRequireDefault(require("./index.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const hsl = (col1, col2, f) => {
  return (0, _hsx.default)(col1, col2, f, 'hsl');
};

// register interpolator
_index2.default.hsl = hsl;
var _default = exports.default = hsl;
},{"../io/hsl/index.js":"../node_modules/chroma-js/src/io/hsl/index.js","./_hsx.js":"../node_modules/chroma-js/src/interpolator/_hsx.js","./index.js":"../node_modules/chroma-js/src/interpolator/index.js"}],"../node_modules/chroma-js/src/interpolator/hsv.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("../io/hsv/index.js");
var _hsx = _interopRequireDefault(require("./_hsx.js"));
var _index2 = _interopRequireDefault(require("./index.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const hsv = (col1, col2, f) => {
  return (0, _hsx.default)(col1, col2, f, 'hsv');
};

// register interpolator
_index2.default.hsv = hsv;
var _default = exports.default = hsv;
},{"../io/hsv/index.js":"../node_modules/chroma-js/src/io/hsv/index.js","./_hsx.js":"../node_modules/chroma-js/src/interpolator/_hsx.js","./index.js":"../node_modules/chroma-js/src/interpolator/index.js"}],"../node_modules/chroma-js/src/interpolator/oklab.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("../io/oklab/index.js");
var _index2 = _interopRequireDefault(require("./index.js"));
var _Color = _interopRequireDefault(require("../Color.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const oklab = (col1, col2, f) => {
  const xyz0 = col1.oklab();
  const xyz1 = col2.oklab();
  return new _Color.default(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), 'oklab');
};

// register interpolator
_index2.default.oklab = oklab;
var _default = exports.default = oklab;
},{"../io/oklab/index.js":"../node_modules/chroma-js/src/io/oklab/index.js","./index.js":"../node_modules/chroma-js/src/interpolator/index.js","../Color.js":"../node_modules/chroma-js/src/Color.js"}],"../node_modules/chroma-js/src/interpolator/oklch.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("../io/lch/index.js");
var _hsx = _interopRequireDefault(require("./_hsx.js"));
var _index2 = _interopRequireDefault(require("./index.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const oklch = (col1, col2, f) => {
  return (0, _hsx.default)(col1, col2, f, 'oklch');
};

// register interpolator
_index2.default.oklch = oklch;
var _default = exports.default = oklch;
},{"../io/lch/index.js":"../node_modules/chroma-js/src/io/lch/index.js","./_hsx.js":"../node_modules/chroma-js/src/interpolator/_hsx.js","./index.js":"../node_modules/chroma-js/src/interpolator/index.js"}],"../node_modules/chroma-js/src/generator/average.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Color = _interopRequireDefault(require("../Color.js"));
var _index = require("../utils/index.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const {
  pow,
  sqrt,
  PI,
  cos,
  sin,
  atan2
} = Math;
var _default = (colors, mode = 'lrgb', weights = null) => {
  const l = colors.length;
  if (!weights) weights = Array.from(new Array(l)).map(() => 1);
  // normalize weights
  const k = l / weights.reduce(function (a, b) {
    return a + b;
  });
  weights.forEach((w, i) => {
    weights[i] *= k;
  });
  // convert colors to Color objects
  colors = colors.map(c => new _Color.default(c));
  if (mode === 'lrgb') {
    return _average_lrgb(colors, weights);
  }
  const first = colors.shift();
  const xyz = first.get(mode);
  const cnt = [];
  let dx = 0;
  let dy = 0;
  // initial color
  for (let i = 0; i < xyz.length; i++) {
    xyz[i] = (xyz[i] || 0) * weights[0];
    cnt.push(isNaN(xyz[i]) ? 0 : weights[0]);
    if (mode.charAt(i) === 'h' && !isNaN(xyz[i])) {
      const A = xyz[i] / 180 * PI;
      dx += cos(A) * weights[0];
      dy += sin(A) * weights[0];
    }
  }
  let alpha = first.alpha() * weights[0];
  colors.forEach((c, ci) => {
    const xyz2 = c.get(mode);
    alpha += c.alpha() * weights[ci + 1];
    for (let i = 0; i < xyz.length; i++) {
      if (!isNaN(xyz2[i])) {
        cnt[i] += weights[ci + 1];
        if (mode.charAt(i) === 'h') {
          const A = xyz2[i] / 180 * PI;
          dx += cos(A) * weights[ci + 1];
          dy += sin(A) * weights[ci + 1];
        } else {
          xyz[i] += xyz2[i] * weights[ci + 1];
        }
      }
    }
  });
  for (let i = 0; i < xyz.length; i++) {
    if (mode.charAt(i) === 'h') {
      let A = atan2(dy / cnt[i], dx / cnt[i]) / PI * 180;
      while (A < 0) A += 360;
      while (A >= 360) A -= 360;
      xyz[i] = A;
    } else {
      xyz[i] = xyz[i] / cnt[i];
    }
  }
  alpha /= l;
  return new _Color.default(xyz, mode).alpha(alpha > 0.99999 ? 1 : alpha, true);
};
exports.default = _default;
const _average_lrgb = (colors, weights) => {
  const l = colors.length;
  const xyz = [0, 0, 0, 0];
  for (let i = 0; i < colors.length; i++) {
    const col = colors[i];
    const f = weights[i] / l;
    const rgb = col._rgb;
    xyz[0] += pow(rgb[0], 2) * f;
    xyz[1] += pow(rgb[1], 2) * f;
    xyz[2] += pow(rgb[2], 2) * f;
    xyz[3] += rgb[3] * f;
  }
  xyz[0] = sqrt(xyz[0]);
  xyz[1] = sqrt(xyz[1]);
  xyz[2] = sqrt(xyz[2]);
  if (xyz[3] > 0.9999999) xyz[3] = 1;
  return new _Color.default((0, _index.clip_rgb)(xyz));
};
},{"../Color.js":"../node_modules/chroma-js/src/Color.js","../utils/index.js":"../node_modules/chroma-js/src/utils/index.js"}],"../node_modules/chroma-js/src/generator/scale.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _chroma = _interopRequireDefault(require("../chroma.js"));
var _index = require("../utils/index.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// minimal multi-purpose interface

// @requires utils color analyze

const {
  pow
} = Math;
function _default(colors) {
  // constructor
  let _mode = 'rgb';
  let _nacol = (0, _chroma.default)('#ccc');
  let _spread = 0;
  // const _fixed = false;
  let _domain = [0, 1];
  let _pos = [];
  let _padding = [0, 0];
  let _classes = false;
  let _colors = [];
  let _out = false;
  let _min = 0;
  let _max = 1;
  let _correctLightness = false;
  let _colorCache = {};
  let _useCache = true;
  let _gamma = 1;

  // private methods

  const setColors = function (colors) {
    colors = colors || ['#fff', '#000'];
    if (colors && (0, _index.type)(colors) === 'string' && _chroma.default.brewer && _chroma.default.brewer[colors.toLowerCase()]) {
      colors = _chroma.default.brewer[colors.toLowerCase()];
    }
    if ((0, _index.type)(colors) === 'array') {
      // handle single color
      if (colors.length === 1) {
        colors = [colors[0], colors[0]];
      }
      // make a copy of the colors
      colors = colors.slice(0);
      // convert to chroma classes
      for (let c = 0; c < colors.length; c++) {
        colors[c] = (0, _chroma.default)(colors[c]);
      }
      // auto-fill color position
      _pos.length = 0;
      for (let c = 0; c < colors.length; c++) {
        _pos.push(c / (colors.length - 1));
      }
    }
    resetCache();
    return _colors = colors;
  };
  const getClass = function (value) {
    if (_classes != null) {
      const n = _classes.length - 1;
      let i = 0;
      while (i < n && value >= _classes[i]) {
        i++;
      }
      return i - 1;
    }
    return 0;
  };
  let tMapLightness = t => t;
  let tMapDomain = t => t;

  // const classifyValue = function(value) {
  //     let val = value;
  //     if (_classes.length > 2) {
  //         const n = _classes.length-1;
  //         const i = getClass(value);
  //         const minc = _classes[0] + ((_classes[1]-_classes[0]) * (0 + (_spread * 0.5)));  // center of 1st class
  //         const maxc = _classes[n-1] + ((_classes[n]-_classes[n-1]) * (1 - (_spread * 0.5)));  // center of last class
  //         val = _min + ((((_classes[i] + ((_classes[i+1] - _classes[i]) * 0.5)) - minc) / (maxc-minc)) * (_max - _min));
  //     }
  //     return val;
  // };

  const getColor = function (val, bypassMap) {
    let col, t;
    if (bypassMap == null) {
      bypassMap = false;
    }
    if (isNaN(val) || val === null) {
      return _nacol;
    }
    if (!bypassMap) {
      if (_classes && _classes.length > 2) {
        // find the class
        const c = getClass(val);
        t = c / (_classes.length - 2);
      } else if (_max !== _min) {
        // just interpolate between min/max
        t = (val - _min) / (_max - _min);
      } else {
        t = 1;
      }
    } else {
      t = val;
    }

    // domain map
    t = tMapDomain(t);
    if (!bypassMap) {
      t = tMapLightness(t); // lightness correction
    }
    if (_gamma !== 1) {
      t = pow(t, _gamma);
    }
    t = _padding[0] + t * (1 - _padding[0] - _padding[1]);
    t = (0, _index.limit)(t, 0, 1);
    const k = Math.floor(t * 10000);
    if (_useCache && _colorCache[k]) {
      col = _colorCache[k];
    } else {
      if ((0, _index.type)(_colors) === 'array') {
        //for i in [0.._pos.length-1]
        for (let i = 0; i < _pos.length; i++) {
          const p = _pos[i];
          if (t <= p) {
            col = _colors[i];
            break;
          }
          if (t >= p && i === _pos.length - 1) {
            col = _colors[i];
            break;
          }
          if (t > p && t < _pos[i + 1]) {
            t = (t - p) / (_pos[i + 1] - p);
            col = _chroma.default.interpolate(_colors[i], _colors[i + 1], t, _mode);
            break;
          }
        }
      } else if ((0, _index.type)(_colors) === 'function') {
        col = _colors(t);
      }
      if (_useCache) {
        _colorCache[k] = col;
      }
    }
    return col;
  };
  var resetCache = () => _colorCache = {};
  setColors(colors);

  // public interface

  const f = function (v) {
    const c = (0, _chroma.default)(getColor(v));
    if (_out && c[_out]) {
      return c[_out]();
    } else {
      return c;
    }
  };
  f.classes = function (classes) {
    if (classes != null) {
      if ((0, _index.type)(classes) === 'array') {
        _classes = classes;
        _domain = [classes[0], classes[classes.length - 1]];
      } else {
        const d = _chroma.default.analyze(_domain);
        if (classes === 0) {
          _classes = [d.min, d.max];
        } else {
          _classes = _chroma.default.limits(d, 'e', classes);
        }
      }
      return f;
    }
    return _classes;
  };
  f.domain = function (domain) {
    if (!arguments.length) {
      return _domain;
    }
    _min = domain[0];
    _max = domain[domain.length - 1];
    _pos = [];
    const k = _colors.length;
    if (domain.length === k && _min !== _max) {
      // update positions
      for (let d of Array.from(domain)) {
        _pos.push((d - _min) / (_max - _min));
      }
    } else {
      for (let c = 0; c < k; c++) {
        _pos.push(c / (k - 1));
      }
      if (domain.length > 2) {
        // set domain map
        const tOut = domain.map((d, i) => i / (domain.length - 1));
        const tBreaks = domain.map(d => (d - _min) / (_max - _min));
        if (!tBreaks.every((val, i) => tOut[i] === val)) {
          tMapDomain = t => {
            if (t <= 0 || t >= 1) return t;
            let i = 0;
            while (t >= tBreaks[i + 1]) i++;
            const f = (t - tBreaks[i]) / (tBreaks[i + 1] - tBreaks[i]);
            const out = tOut[i] + f * (tOut[i + 1] - tOut[i]);
            return out;
          };
        }
      }
    }
    _domain = [_min, _max];
    return f;
  };
  f.mode = function (_m) {
    if (!arguments.length) {
      return _mode;
    }
    _mode = _m;
    resetCache();
    return f;
  };
  f.range = function (colors, _pos) {
    setColors(colors, _pos);
    return f;
  };
  f.out = function (_o) {
    _out = _o;
    return f;
  };
  f.spread = function (val) {
    if (!arguments.length) {
      return _spread;
    }
    _spread = val;
    return f;
  };
  f.correctLightness = function (v) {
    if (v == null) {
      v = true;
    }
    _correctLightness = v;
    resetCache();
    if (_correctLightness) {
      tMapLightness = function (t) {
        const L0 = getColor(0, true).lab()[0];
        const L1 = getColor(1, true).lab()[0];
        const pol = L0 > L1;
        let L_actual = getColor(t, true).lab()[0];
        const L_ideal = L0 + (L1 - L0) * t;
        let L_diff = L_actual - L_ideal;
        let t0 = 0;
        let t1 = 1;
        let max_iter = 20;
        while (Math.abs(L_diff) > 1e-2 && max_iter-- > 0) {
          (function () {
            if (pol) {
              L_diff *= -1;
            }
            if (L_diff < 0) {
              t0 = t;
              t += (t1 - t) * 0.5;
            } else {
              t1 = t;
              t += (t0 - t) * 0.5;
            }
            L_actual = getColor(t, true).lab()[0];
            return L_diff = L_actual - L_ideal;
          })();
        }
        return t;
      };
    } else {
      tMapLightness = t => t;
    }
    return f;
  };
  f.padding = function (p) {
    if (p != null) {
      if ((0, _index.type)(p) === 'number') {
        p = [p, p];
      }
      _padding = p;
      return f;
    } else {
      return _padding;
    }
  };
  f.colors = function (numColors, out) {
    // If no arguments are given, return the original colors that were provided
    if (arguments.length < 2) {
      out = 'hex';
    }
    let result = [];
    if (arguments.length === 0) {
      result = _colors.slice(0);
    } else if (numColors === 1) {
      result = [f(0.5)];
    } else if (numColors > 1) {
      const dm = _domain[0];
      const dd = _domain[1] - dm;
      result = __range__(0, numColors, false).map(i => f(dm + i / (numColors - 1) * dd));
    } else {
      // returns all colors based on the defined classes
      colors = [];
      let samples = [];
      if (_classes && _classes.length > 2) {
        for (let i = 1, end = _classes.length, asc = 1 <= end; asc ? i < end : i > end; asc ? i++ : i--) {
          samples.push((_classes[i - 1] + _classes[i]) * 0.5);
        }
      } else {
        samples = _domain;
      }
      result = samples.map(v => f(v));
    }
    if (_chroma.default[out]) {
      result = result.map(c => c[out]());
    }
    return result;
  };
  f.cache = function (c) {
    if (c != null) {
      _useCache = c;
      return f;
    } else {
      return _useCache;
    }
  };
  f.gamma = function (g) {
    if (g != null) {
      _gamma = g;
      return f;
    } else {
      return _gamma;
    }
  };
  f.nodata = function (d) {
    if (d != null) {
      _nacol = (0, _chroma.default)(d);
      return f;
    } else {
      return _nacol;
    }
  };
  return f;
}
function __range__(left, right, inclusive) {
  let range = [];
  let ascending = left < right;
  let end = !inclusive ? right : ascending ? right + 1 : right - 1;
  for (let i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {
    range.push(i);
  }
  return range;
}
},{"../chroma.js":"../node_modules/chroma-js/src/chroma.js","../utils/index.js":"../node_modules/chroma-js/src/utils/index.js"}],"../node_modules/chroma-js/src/generator/bezier.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Color = _interopRequireDefault(require("../Color.js"));
require("../io/lab/index.js");
var _scale = _interopRequireDefault(require("./scale.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
//
// interpolates between a set of colors uzing a bezier spline
//

// @requires utils lab

// nth row of the pascal triangle
const binom_row = function (n) {
  let row = [1, 1];
  for (let i = 1; i < n; i++) {
    let newrow = [1];
    for (let j = 1; j <= row.length; j++) {
      newrow[j] = (row[j] || 0) + row[j - 1];
    }
    row = newrow;
  }
  return row;
};
const bezier = function (colors) {
  let I, lab0, lab1, lab2;
  colors = colors.map(c => new _Color.default(c));
  if (colors.length === 2) {
    // linear interpolation
    [lab0, lab1] = colors.map(c => c.lab());
    I = function (t) {
      const lab = [0, 1, 2].map(i => lab0[i] + t * (lab1[i] - lab0[i]));
      return new _Color.default(lab, 'lab');
    };
  } else if (colors.length === 3) {
    // quadratic bezier interpolation
    [lab0, lab1, lab2] = colors.map(c => c.lab());
    I = function (t) {
      const lab = [0, 1, 2].map(i => (1 - t) * (1 - t) * lab0[i] + 2 * (1 - t) * t * lab1[i] + t * t * lab2[i]);
      return new _Color.default(lab, 'lab');
    };
  } else if (colors.length === 4) {
    // cubic bezier interpolation
    let lab3;
    [lab0, lab1, lab2, lab3] = colors.map(c => c.lab());
    I = function (t) {
      const lab = [0, 1, 2].map(i => (1 - t) * (1 - t) * (1 - t) * lab0[i] + 3 * (1 - t) * (1 - t) * t * lab1[i] + 3 * (1 - t) * t * t * lab2[i] + t * t * t * lab3[i]);
      return new _Color.default(lab, 'lab');
    };
  } else if (colors.length >= 5) {
    // general case (degree n bezier)
    let labs, row, n;
    labs = colors.map(c => c.lab());
    n = colors.length - 1;
    row = binom_row(n);
    I = function (t) {
      const u = 1 - t;
      const lab = [0, 1, 2].map(i => labs.reduce((sum, el, j) => sum + row[j] * u ** (n - j) * t ** j * el[i], 0));
      return new _Color.default(lab, 'lab');
    };
  } else {
    throw new RangeError('No point in running bezier with only one color.');
  }
  return I;
};
var _default = colors => {
  const f = bezier(colors);
  f.scale = () => (0, _scale.default)(f);
  return f;
};
exports.default = _default;
},{"../Color.js":"../node_modules/chroma-js/src/Color.js","../io/lab/index.js":"../node_modules/chroma-js/src/io/lab/index.js","./scale.js":"../node_modules/chroma-js/src/generator/scale.js"}],"../node_modules/chroma-js/src/generator/blend.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("../io/rgb/index.js");
var _chroma = _interopRequireDefault(require("../chroma.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/*
 * interpolates between a set of colors uzing a bezier spline
 * blend mode formulas taken from https://web.archive.org/web/20180110014946/http://www.venture-ware.com/kevin/coding/lets-learn-math-photoshop-blend-modes/
 */

const blend = (bottom, top, mode) => {
  if (!blend[mode]) {
    throw new Error('unknown blend mode ' + mode);
  }
  return blend[mode](bottom, top);
};
const blend_f = f => (bottom, top) => {
  const c0 = (0, _chroma.default)(top).rgb();
  const c1 = (0, _chroma.default)(bottom).rgb();
  return _chroma.default.rgb(f(c0, c1));
};
const each = f => (c0, c1) => {
  const out = [];
  out[0] = f(c0[0], c1[0]);
  out[1] = f(c0[1], c1[1]);
  out[2] = f(c0[2], c1[2]);
  return out;
};
const normal = a => a;
const multiply = (a, b) => a * b / 255;
const darken = (a, b) => a > b ? b : a;
const lighten = (a, b) => a > b ? a : b;
const screen = (a, b) => 255 * (1 - (1 - a / 255) * (1 - b / 255));
const overlay = (a, b) => b < 128 ? 2 * a * b / 255 : 255 * (1 - 2 * (1 - a / 255) * (1 - b / 255));
const burn = (a, b) => 255 * (1 - (1 - b / 255) / (a / 255));
const dodge = (a, b) => {
  if (a === 255) return 255;
  a = 255 * (b / 255) / (1 - a / 255);
  return a > 255 ? 255 : a;
};

// # add = (a,b) ->
// #     if (a + b > 255) then 255 else a + b

blend.normal = blend_f(each(normal));
blend.multiply = blend_f(each(multiply));
blend.screen = blend_f(each(screen));
blend.overlay = blend_f(each(overlay));
blend.darken = blend_f(each(darken));
blend.lighten = blend_f(each(lighten));
blend.dodge = blend_f(each(dodge));
blend.burn = blend_f(each(burn));
// blend.add = blend_f(each(add));
var _default = exports.default = blend;
},{"../io/rgb/index.js":"../node_modules/chroma-js/src/io/rgb/index.js","../chroma.js":"../node_modules/chroma-js/src/chroma.js"}],"../node_modules/chroma-js/src/generator/cubehelix.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _index = require("../utils/index.js");
var _chroma = _interopRequireDefault(require("../chroma.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// cubehelix interpolation
// based on D.A. Green "A colour scheme for the display of astronomical intensity images"
// http://astron-soc.in/bulletin/11June/289392011.pdf

const {
  pow,
  sin,
  cos
} = Math;
function _default(start = 300, rotations = -1.5, hue = 1, gamma = 1, lightness = [0, 1]) {
  let dh = 0,
    dl;
  if ((0, _index.type)(lightness) === 'array') {
    dl = lightness[1] - lightness[0];
  } else {
    dl = 0;
    lightness = [lightness, lightness];
  }
  const f = function (fract) {
    const a = _index.TWOPI * ((start + 120) / 360 + rotations * fract);
    const l = pow(lightness[0] + dl * fract, gamma);
    const h = dh !== 0 ? hue[0] + fract * dh : hue;
    const amp = h * l * (1 - l) / 2;
    const cos_a = cos(a);
    const sin_a = sin(a);
    const r = l + amp * (-0.14861 * cos_a + 1.78277 * sin_a);
    const g = l + amp * (-0.29227 * cos_a - 0.90649 * sin_a);
    const b = l + amp * (+1.97294 * cos_a);
    return (0, _chroma.default)((0, _index.clip_rgb)([r * 255, g * 255, b * 255, 1]));
  };
  f.start = function (s) {
    if (s == null) {
      return start;
    }
    start = s;
    return f;
  };
  f.rotations = function (r) {
    if (r == null) {
      return rotations;
    }
    rotations = r;
    return f;
  };
  f.gamma = function (g) {
    if (g == null) {
      return gamma;
    }
    gamma = g;
    return f;
  };
  f.hue = function (h) {
    if (h == null) {
      return hue;
    }
    hue = h;
    if ((0, _index.type)(hue) === 'array') {
      dh = hue[1] - hue[0];
      if (dh === 0) {
        hue = hue[1];
      }
    } else {
      dh = 0;
    }
    return f;
  };
  f.lightness = function (h) {
    if (h == null) {
      return lightness;
    }
    if ((0, _index.type)(h) === 'array') {
      lightness = h;
      dl = h[1] - h[0];
    } else {
      lightness = [h, h];
      dl = 0;
    }
    return f;
  };
  f.scale = () => _chroma.default.scale(f);
  f.hue(hue);
  return f;
}
},{"../utils/index.js":"../node_modules/chroma-js/src/utils/index.js","../chroma.js":"../node_modules/chroma-js/src/chroma.js"}],"../node_modules/chroma-js/src/generator/random.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Color = _interopRequireDefault(require("../Color.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const digits = '0123456789abcdef';
const {
  floor,
  random
} = Math;
var _default = () => {
  let code = '#';
  for (let i = 0; i < 6; i++) {
    code += digits.charAt(floor(random() * 16));
  }
  return new _Color.default(code, 'hex');
};
exports.default = _default;
},{"../Color.js":"../node_modules/chroma-js/src/Color.js"}],"../node_modules/chroma-js/src/utils/analyze.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.analyze = analyze;
exports.limits = limits;
var _type = _interopRequireDefault(require("./type.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const {
  log,
  pow,
  floor,
  abs
} = Math;
function analyze(data, key = null) {
  const r = {
    min: Number.MAX_VALUE,
    max: Number.MAX_VALUE * -1,
    sum: 0,
    values: [],
    count: 0
  };
  if ((0, _type.default)(data) === 'object') {
    data = Object.values(data);
  }
  data.forEach(val => {
    if (key && (0, _type.default)(val) === 'object') val = val[key];
    if (val !== undefined && val !== null && !isNaN(val)) {
      r.values.push(val);
      r.sum += val;
      if (val < r.min) r.min = val;
      if (val > r.max) r.max = val;
      r.count += 1;
    }
  });
  r.domain = [r.min, r.max];
  r.limits = (mode, num) => limits(r, mode, num);
  return r;
}
function limits(data, mode = 'equal', num = 7) {
  if ((0, _type.default)(data) == 'array') {
    data = analyze(data);
  }
  const {
    min,
    max
  } = data;
  const values = data.values.sort((a, b) => a - b);
  if (num === 1) {
    return [min, max];
  }
  const limits = [];
  if (mode.substr(0, 1) === 'c') {
    // continuous
    limits.push(min);
    limits.push(max);
  }
  if (mode.substr(0, 1) === 'e') {
    // equal interval
    limits.push(min);
    for (let i = 1; i < num; i++) {
      limits.push(min + i / num * (max - min));
    }
    limits.push(max);
  } else if (mode.substr(0, 1) === 'l') {
    // log scale
    if (min <= 0) {
      throw new Error('Logarithmic scales are only possible for values > 0');
    }
    const min_log = Math.LOG10E * log(min);
    const max_log = Math.LOG10E * log(max);
    limits.push(min);
    for (let i = 1; i < num; i++) {
      limits.push(pow(10, min_log + i / num * (max_log - min_log)));
    }
    limits.push(max);
  } else if (mode.substr(0, 1) === 'q') {
    // quantile scale
    limits.push(min);
    for (let i = 1; i < num; i++) {
      const p = (values.length - 1) * i / num;
      const pb = floor(p);
      if (pb === p) {
        limits.push(values[pb]);
      } else {
        // p > pb
        const pr = p - pb;
        limits.push(values[pb] * (1 - pr) + values[pb + 1] * pr);
      }
    }
    limits.push(max);
  } else if (mode.substr(0, 1) === 'k') {
    // k-means clustering
    /*
    implementation based on
    http://code.google.com/p/figue/source/browse/trunk/figue.js#336
    simplified for 1-d input values
    */
    let cluster;
    const n = values.length;
    const assignments = new Array(n);
    const clusterSizes = new Array(num);
    let repeat = true;
    let nb_iters = 0;
    let centroids = null;

    // get seed values
    centroids = [];
    centroids.push(min);
    for (let i = 1; i < num; i++) {
      centroids.push(min + i / num * (max - min));
    }
    centroids.push(max);
    while (repeat) {
      // assignment step
      for (let j = 0; j < num; j++) {
        clusterSizes[j] = 0;
      }
      for (let i = 0; i < n; i++) {
        const value = values[i];
        let mindist = Number.MAX_VALUE;
        let best;
        for (let j = 0; j < num; j++) {
          const dist = abs(centroids[j] - value);
          if (dist < mindist) {
            mindist = dist;
            best = j;
          }
          clusterSizes[best]++;
          assignments[i] = best;
        }
      }

      // update centroids step
      const newCentroids = new Array(num);
      for (let j = 0; j < num; j++) {
        newCentroids[j] = null;
      }
      for (let i = 0; i < n; i++) {
        cluster = assignments[i];
        if (newCentroids[cluster] === null) {
          newCentroids[cluster] = values[i];
        } else {
          newCentroids[cluster] += values[i];
        }
      }
      for (let j = 0; j < num; j++) {
        newCentroids[j] *= 1 / clusterSizes[j];
      }

      // check convergence
      repeat = false;
      for (let j = 0; j < num; j++) {
        if (newCentroids[j] !== centroids[j]) {
          repeat = true;
          break;
        }
      }
      centroids = newCentroids;
      nb_iters++;
      if (nb_iters > 200) {
        repeat = false;
      }
    }

    // finished k-means clustering
    // the next part is borrowed from gabrielflor.it
    const kClusters = {};
    for (let j = 0; j < num; j++) {
      kClusters[j] = [];
    }
    for (let i = 0; i < n; i++) {
      cluster = assignments[i];
      kClusters[cluster].push(values[i]);
    }
    let tmpKMeansBreaks = [];
    for (let j = 0; j < num; j++) {
      tmpKMeansBreaks.push(kClusters[j][0]);
      tmpKMeansBreaks.push(kClusters[j][kClusters[j].length - 1]);
    }
    tmpKMeansBreaks = tmpKMeansBreaks.sort((a, b) => a - b);
    limits.push(tmpKMeansBreaks[0]);
    for (let i = 1; i < tmpKMeansBreaks.length; i += 2) {
      const v = tmpKMeansBreaks[i];
      if (!isNaN(v) && limits.indexOf(v) === -1) {
        limits.push(v);
      }
    }
  }
  return limits;
}
},{"./type.js":"../node_modules/chroma-js/src/utils/type.js"}],"../node_modules/chroma-js/src/utils/contrast.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Color = _interopRequireDefault(require("../Color.js"));
require("../ops/luminance.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = (a, b) => {
  // WCAG contrast ratio
  // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
  a = new _Color.default(a);
  b = new _Color.default(b);
  const l1 = a.luminance();
  const l2 = b.luminance();
  return l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
};
exports.default = _default;
},{"../Color.js":"../node_modules/chroma-js/src/Color.js","../ops/luminance.js":"../node_modules/chroma-js/src/ops/luminance.js"}],"../node_modules/chroma-js/src/utils/delta-e.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _Color = _interopRequireDefault(require("../Color.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const {
  sqrt,
  pow,
  min,
  max,
  atan2,
  abs,
  cos,
  sin,
  exp,
  PI
} = Math;
function _default(a, b, Kl = 1, Kc = 1, Kh = 1) {
  // Delta E (CIE 2000)
  // see http://www.brucelindbloom.com/index.html?Eqn_DeltaE_CIE2000.html
  var rad2deg = function (rad) {
    return 360 * rad / (2 * PI);
  };
  var deg2rad = function (deg) {
    return 2 * PI * deg / 360;
  };
  a = new _Color.default(a);
  b = new _Color.default(b);
  const [L1, a1, b1] = Array.from(a.lab());
  const [L2, a2, b2] = Array.from(b.lab());
  const avgL = (L1 + L2) / 2;
  const C1 = sqrt(pow(a1, 2) + pow(b1, 2));
  const C2 = sqrt(pow(a2, 2) + pow(b2, 2));
  const avgC = (C1 + C2) / 2;
  const G = 0.5 * (1 - sqrt(pow(avgC, 7) / (pow(avgC, 7) + pow(25, 7))));
  const a1p = a1 * (1 + G);
  const a2p = a2 * (1 + G);
  const C1p = sqrt(pow(a1p, 2) + pow(b1, 2));
  const C2p = sqrt(pow(a2p, 2) + pow(b2, 2));
  const avgCp = (C1p + C2p) / 2;
  const arctan1 = rad2deg(atan2(b1, a1p));
  const arctan2 = rad2deg(atan2(b2, a2p));
  const h1p = arctan1 >= 0 ? arctan1 : arctan1 + 360;
  const h2p = arctan2 >= 0 ? arctan2 : arctan2 + 360;
  const avgHp = abs(h1p - h2p) > 180 ? (h1p + h2p + 360) / 2 : (h1p + h2p) / 2;
  const T = 1 - 0.17 * cos(deg2rad(avgHp - 30)) + 0.24 * cos(deg2rad(2 * avgHp)) + 0.32 * cos(deg2rad(3 * avgHp + 6)) - 0.2 * cos(deg2rad(4 * avgHp - 63));
  let deltaHp = h2p - h1p;
  deltaHp = abs(deltaHp) <= 180 ? deltaHp : h2p <= h1p ? deltaHp + 360 : deltaHp - 360;
  deltaHp = 2 * sqrt(C1p * C2p) * sin(deg2rad(deltaHp) / 2);
  const deltaL = L2 - L1;
  const deltaCp = C2p - C1p;
  const sl = 1 + 0.015 * pow(avgL - 50, 2) / sqrt(20 + pow(avgL - 50, 2));
  const sc = 1 + 0.045 * avgCp;
  const sh = 1 + 0.015 * avgCp * T;
  const deltaTheta = 30 * exp(-pow((avgHp - 275) / 25, 2));
  const Rc = 2 * sqrt(pow(avgCp, 7) / (pow(avgCp, 7) + pow(25, 7)));
  const Rt = -Rc * sin(2 * deg2rad(deltaTheta));
  const result = sqrt(pow(deltaL / (Kl * sl), 2) + pow(deltaCp / (Kc * sc), 2) + pow(deltaHp / (Kh * sh), 2) + Rt * (deltaCp / (Kc * sc)) * (deltaHp / (Kh * sh)));
  return max(0, min(100, result));
}
},{"../Color.js":"../node_modules/chroma-js/src/Color.js"}],"../node_modules/chroma-js/src/utils/distance.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _Color = _interopRequireDefault(require("../Color.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// simple Euclidean distance
function _default(a, b, mode = 'lab') {
  // Delta E (CIE 1976)
  // see http://www.brucelindbloom.com/index.html?Equations.html
  a = new _Color.default(a);
  b = new _Color.default(b);
  const l1 = a.get(mode);
  const l2 = b.get(mode);
  let sum_sq = 0;
  for (let i in l1) {
    const d = (l1[i] || 0) - (l2[i] || 0);
    sum_sq += d * d;
  }
  return Math.sqrt(sum_sq);
}
},{"../Color.js":"../node_modules/chroma-js/src/Color.js"}],"../node_modules/chroma-js/src/utils/valid.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Color = _interopRequireDefault(require("../Color.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = (...args) => {
  try {
    new _Color.default(...args);
    return true;
    // eslint-disable-next-line
  } catch (e) {
    return false;
  }
};
exports.default = _default;
},{"../Color.js":"../node_modules/chroma-js/src/Color.js"}],"../node_modules/chroma-js/src/utils/scales.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _chroma = _interopRequireDefault(require("../chroma.js"));
require("../io/hsl/index.js");
var _scale = _interopRequireDefault(require("../generator/scale.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// some pre-defined color scales:
var _default = exports.default = {
  cool() {
    return (0, _scale.default)([_chroma.default.hsl(180, 1, 0.9), _chroma.default.hsl(250, 0.7, 0.4)]);
  },
  hot() {
    return (0, _scale.default)(['#000', '#f00', '#ff0', '#fff'], [0, 0.25, 0.75, 1]).mode('rgb');
  }
};
},{"../chroma.js":"../node_modules/chroma-js/src/chroma.js","../io/hsl/index.js":"../node_modules/chroma-js/src/io/hsl/index.js","../generator/scale.js":"../node_modules/chroma-js/src/generator/scale.js"}],"../node_modules/chroma-js/src/colors/colorbrewer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
    ColorBrewer colors for chroma.js

    Copyright (c) 2002 Cynthia Brewer, Mark Harrower, and The
    Pennsylvania State University.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software distributed
    under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
    CONDITIONS OF ANY KIND, either express or implied. See the License for the
    specific language governing permissions and limitations under the License.
*/

const colorbrewer = {
  // sequential
  OrRd: ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'],
  PuBu: ['#fff7fb', '#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#045a8d', '#023858'],
  BuPu: ['#f7fcfd', '#e0ecf4', '#bfd3e6', '#9ebcda', '#8c96c6', '#8c6bb1', '#88419d', '#810f7c', '#4d004b'],
  Oranges: ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#a63603', '#7f2704'],
  BuGn: ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#006d2c', '#00441b'],
  YlOrBr: ['#ffffe5', '#fff7bc', '#fee391', '#fec44f', '#fe9929', '#ec7014', '#cc4c02', '#993404', '#662506'],
  YlGn: ['#ffffe5', '#f7fcb9', '#d9f0a3', '#addd8e', '#78c679', '#41ab5d', '#238443', '#006837', '#004529'],
  Reds: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
  RdPu: ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177', '#49006a'],
  Greens: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
  YlGnBu: ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58'],
  Purples: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d'],
  GnBu: ['#f7fcf0', '#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#0868ac', '#084081'],
  Greys: ['#ffffff', '#f0f0f0', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#252525', '#000000'],
  YlOrRd: ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'],
  PuRd: ['#f7f4f9', '#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#e7298a', '#ce1256', '#980043', '#67001f'],
  Blues: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
  PuBuGn: ['#fff7fb', '#ece2f0', '#d0d1e6', '#a6bddb', '#67a9cf', '#3690c0', '#02818a', '#016c59', '#014636'],
  Viridis: ['#440154', '#482777', '#3f4a8a', '#31678e', '#26838f', '#1f9d8a', '#6cce5a', '#b6de2b', '#fee825'],
  // diverging
  Spectral: ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'],
  RdYlGn: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850', '#006837'],
  RdBu: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#f7f7f7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061'],
  PiYG: ['#8e0152', '#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#f7f7f7', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221', '#276419'],
  PRGn: ['#40004b', '#762a83', '#9970ab', '#c2a5cf', '#e7d4e8', '#f7f7f7', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837', '#00441b'],
  RdYlBu: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695'],
  BrBG: ['#543005', '#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#f5f5f5', '#c7eae5', '#80cdc1', '#35978f', '#01665e', '#003c30'],
  RdGy: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#ffffff', '#e0e0e0', '#bababa', '#878787', '#4d4d4d', '#1a1a1a'],
  PuOr: ['#7f3b08', '#b35806', '#e08214', '#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788', '#2d004b'],
  // qualitative
  Set2: ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3'],
  Accent: ['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0', '#f0027f', '#bf5b17', '#666666'],
  Set1: ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999'],
  Set3: ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f'],
  Dark2: ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666666'],
  Paired: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928'],
  Pastel2: ['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4', '#e6f5c9', '#fff2ae', '#f1e2cc', '#cccccc'],
  Pastel1: ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6', '#ffffcc', '#e5d8bd', '#fddaec', '#f2f2f2']
};

// add lowercase aliases for case-insensitive matches
for (let key of Object.keys(colorbrewer)) {
  colorbrewer[key.toLowerCase()] = colorbrewer[key];
}
var _default = exports.default = colorbrewer;
},{}],"../node_modules/chroma-js/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _chroma = _interopRequireDefault(require("./src/chroma.js"));
require("./src/io/cmyk/index.js");
require("./src/io/css/index.js");
require("./src/io/gl/index.js");
require("./src/io/hcg/index.js");
require("./src/io/hex/index.js");
require("./src/io/hsi/index.js");
require("./src/io/hsl/index.js");
require("./src/io/hsv/index.js");
require("./src/io/lab/index.js");
require("./src/io/lch/index.js");
require("./src/io/named/index.js");
require("./src/io/num/index.js");
require("./src/io/rgb/index.js");
require("./src/io/temp/index.js");
require("./src/io/oklab/index.js");
require("./src/io/oklch/index.js");
require("./src/ops/alpha.js");
require("./src/ops/clipped.js");
require("./src/ops/darken.js");
require("./src/ops/get.js");
require("./src/ops/luminance.js");
require("./src/ops/mix.js");
require("./src/ops/premultiply.js");
require("./src/ops/saturate.js");
require("./src/ops/set.js");
require("./src/ops/shade.js");
require("./src/interpolator/rgb.js");
require("./src/interpolator/lrgb.js");
require("./src/interpolator/lab.js");
require("./src/interpolator/lch.js");
require("./src/interpolator/num.js");
require("./src/interpolator/hcg.js");
require("./src/interpolator/hsi.js");
require("./src/interpolator/hsl.js");
require("./src/interpolator/hsv.js");
require("./src/interpolator/oklab.js");
require("./src/interpolator/oklch.js");
var _average = _interopRequireDefault(require("./src/generator/average.js"));
var _bezier = _interopRequireDefault(require("./src/generator/bezier.js"));
var _blend = _interopRequireDefault(require("./src/generator/blend.js"));
var _cubehelix = _interopRequireDefault(require("./src/generator/cubehelix.js"));
var _mix2 = _interopRequireDefault(require("./src/generator/mix.js"));
var _random = _interopRequireDefault(require("./src/generator/random.js"));
var _scale = _interopRequireDefault(require("./src/generator/scale.js"));
var _analyze = require("./src/utils/analyze.js");
var _contrast = _interopRequireDefault(require("./src/utils/contrast.js"));
var _deltaE = _interopRequireDefault(require("./src/utils/delta-e.js"));
var _distance = _interopRequireDefault(require("./src/utils/distance.js"));
var _valid = _interopRequireDefault(require("./src/utils/valid.js"));
var _input = _interopRequireDefault(require("./src/io/input.js"));
var _scales = _interopRequireDefault(require("./src/utils/scales.js"));
var _w3cx = _interopRequireDefault(require("./src/colors/w3cx11.js"));
var _colorbrewer = _interopRequireDefault(require("./src/colors/colorbrewer.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// feel free to comment out anything to rollup
// a smaller chroma.js built

// io --> convert colors

// operators --> modify existing Colors

// interpolators

// generators -- > create new colors

// other utility methods

// scale

// colors

Object.assign(_chroma.default, {
  average: _average.default,
  bezier: _bezier.default,
  blend: _blend.default,
  cubehelix: _cubehelix.default,
  mix: _mix2.default,
  interpolate: _mix2.default,
  random: _random.default,
  scale: _scale.default,
  analyze: _analyze.analyze,
  contrast: _contrast.default,
  deltaE: _deltaE.default,
  distance: _distance.default,
  limits: _analyze.limits,
  valid: _valid.default,
  scales: _scales.default,
  input: _input.default,
  colors: _w3cx.default,
  brewer: _colorbrewer.default
});
var _default = exports.default = _chroma.default;
},{"./src/chroma.js":"../node_modules/chroma-js/src/chroma.js","./src/io/cmyk/index.js":"../node_modules/chroma-js/src/io/cmyk/index.js","./src/io/css/index.js":"../node_modules/chroma-js/src/io/css/index.js","./src/io/gl/index.js":"../node_modules/chroma-js/src/io/gl/index.js","./src/io/hcg/index.js":"../node_modules/chroma-js/src/io/hcg/index.js","./src/io/hex/index.js":"../node_modules/chroma-js/src/io/hex/index.js","./src/io/hsi/index.js":"../node_modules/chroma-js/src/io/hsi/index.js","./src/io/hsl/index.js":"../node_modules/chroma-js/src/io/hsl/index.js","./src/io/hsv/index.js":"../node_modules/chroma-js/src/io/hsv/index.js","./src/io/lab/index.js":"../node_modules/chroma-js/src/io/lab/index.js","./src/io/lch/index.js":"../node_modules/chroma-js/src/io/lch/index.js","./src/io/named/index.js":"../node_modules/chroma-js/src/io/named/index.js","./src/io/num/index.js":"../node_modules/chroma-js/src/io/num/index.js","./src/io/rgb/index.js":"../node_modules/chroma-js/src/io/rgb/index.js","./src/io/temp/index.js":"../node_modules/chroma-js/src/io/temp/index.js","./src/io/oklab/index.js":"../node_modules/chroma-js/src/io/oklab/index.js","./src/io/oklch/index.js":"../node_modules/chroma-js/src/io/oklch/index.js","./src/ops/alpha.js":"../node_modules/chroma-js/src/ops/alpha.js","./src/ops/clipped.js":"../node_modules/chroma-js/src/ops/clipped.js","./src/ops/darken.js":"../node_modules/chroma-js/src/ops/darken.js","./src/ops/get.js":"../node_modules/chroma-js/src/ops/get.js","./src/ops/luminance.js":"../node_modules/chroma-js/src/ops/luminance.js","./src/ops/mix.js":"../node_modules/chroma-js/src/ops/mix.js","./src/ops/premultiply.js":"../node_modules/chroma-js/src/ops/premultiply.js","./src/ops/saturate.js":"../node_modules/chroma-js/src/ops/saturate.js","./src/ops/set.js":"../node_modules/chroma-js/src/ops/set.js","./src/ops/shade.js":"../node_modules/chroma-js/src/ops/shade.js","./src/interpolator/rgb.js":"../node_modules/chroma-js/src/interpolator/rgb.js","./src/interpolator/lrgb.js":"../node_modules/chroma-js/src/interpolator/lrgb.js","./src/interpolator/lab.js":"../node_modules/chroma-js/src/interpolator/lab.js","./src/interpolator/lch.js":"../node_modules/chroma-js/src/interpolator/lch.js","./src/interpolator/num.js":"../node_modules/chroma-js/src/interpolator/num.js","./src/interpolator/hcg.js":"../node_modules/chroma-js/src/interpolator/hcg.js","./src/interpolator/hsi.js":"../node_modules/chroma-js/src/interpolator/hsi.js","./src/interpolator/hsl.js":"../node_modules/chroma-js/src/interpolator/hsl.js","./src/interpolator/hsv.js":"../node_modules/chroma-js/src/interpolator/hsv.js","./src/interpolator/oklab.js":"../node_modules/chroma-js/src/interpolator/oklab.js","./src/interpolator/oklch.js":"../node_modules/chroma-js/src/interpolator/oklch.js","./src/generator/average.js":"../node_modules/chroma-js/src/generator/average.js","./src/generator/bezier.js":"../node_modules/chroma-js/src/generator/bezier.js","./src/generator/blend.js":"../node_modules/chroma-js/src/generator/blend.js","./src/generator/cubehelix.js":"../node_modules/chroma-js/src/generator/cubehelix.js","./src/generator/mix.js":"../node_modules/chroma-js/src/generator/mix.js","./src/generator/random.js":"../node_modules/chroma-js/src/generator/random.js","./src/generator/scale.js":"../node_modules/chroma-js/src/generator/scale.js","./src/utils/analyze.js":"../node_modules/chroma-js/src/utils/analyze.js","./src/utils/contrast.js":"../node_modules/chroma-js/src/utils/contrast.js","./src/utils/delta-e.js":"../node_modules/chroma-js/src/utils/delta-e.js","./src/utils/distance.js":"../node_modules/chroma-js/src/utils/distance.js","./src/utils/valid.js":"../node_modules/chroma-js/src/utils/valid.js","./src/io/input.js":"../node_modules/chroma-js/src/io/input.js","./src/utils/scales.js":"../node_modules/chroma-js/src/utils/scales.js","./src/colors/w3cx11.js":"../node_modules/chroma-js/src/colors/w3cx11.js","./src/colors/colorbrewer.js":"../node_modules/chroma-js/src/colors/colorbrewer.js"}],"../utils/supportFunc.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.random = random;
exports.setTextColor = setTextColor;
var _chromaJs = _interopRequireDefault(require("chroma-js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function random(min, max) {
  // создание случайного числа в выбранном диапазоне 
  var rand = (min - 0.5 + Math.random() * (max - min + 0.5)).toFixed();
  return Math.round(rand);
}
function setTextColor(text, color) {
  var luminance = (0, _chromaJs.default)(color).luminance();
  text.style.color = luminance > 0.2 ? 'black' : 'white';
}
},{"chroma-js":"../node_modules/chroma-js/index.js"}],"../components/Note/img/close.png":[function(require,module,exports) {
module.exports = "/close.1ef497a0.png";
},{}],"../components/Card/Card.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./Card.css");
var _root = require("../../constants/root");
var _supportFunc = require("../../utils/supportFunc");
var _close = _interopRequireDefault(require("../Note/img/close.png"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Card = /*#__PURE__*/function () {
  function Card() {
    _classCallCheck(this, Card);
    this.id = 0;
  }
  return _createClass(Card, [{
    key: "countId",
    value: function countId() {
      var cards = document.querySelectorAll('.card__item');
      return cards.length;
    }
  }, {
    key: "render",
    value: function render(elem, value) {
      var rotate = "rotate(".concat((0, _supportFunc.random)(-10, 10), "deg)");
      var color = "rgb(".concat((0, _supportFunc.random)(0, 255), ",").concat((0, _supportFunc.random)(0, 255), ",").concat((0, _supportFunc.random)(0, 255), ")");
      var htmlContent = "\n            <div class=\"card__container\">\n                <div class=\"scale\">\n                    <div class=\"card__item \" id=\"".concat(elem, "\"style=\"transform: ").concat(rotate, "; \n                    background-color: ").concat(color, "\">\n                    <span class=\"imgContain close\"><img src=\"").concat(_close.default, "\" ></span>\n                        <p class=\"card__note\">\n                            ").concat(value, "\n                        </p>\n                    </div>\n                </div> \n            </div>\n        ");
      var htmlWrapper = "\n            <div class=\"card__wrapper\">\n                ".concat(htmlContent, "\n            </div>\n        ");
      _root.ROOT_INDEX.innerHTML += htmlWrapper;
      this.checkAndReplaceColor(color);
    }
  }, {
    key: "shortRender",
    value: function shortRender(elem, value) {
      var rotate = "rotate(".concat((0, _supportFunc.random)(-10, 10), "deg)");
      var color = "rgb(".concat((0, _supportFunc.random)(0, 255), ",").concat((0, _supportFunc.random)(0, 255), ",").concat((0, _supportFunc.random)(0, 255), ")");
      var htmlContent = "\n        <div class=\"scale\">\n            <div class=\"card__item \" id=\"".concat(elem, "\"style=\"transform: ").concat(rotate, "; \n            background-color: ").concat(color, "\">\n            <span class=\"imgContain close\"><img src=\"").concat(_close.default, "\"></span>\n                <p class=\"card__note\">\n                    ").concat(value, "\n                </p>\n            </div>\n        </div> \n        ");
      document.querySelector('.card__container').innerHTML += htmlContent;
      this.checkAndReplaceColor(color); // если luminance низкий то текст становится белым
    }
  }, {
    key: "checkAndReplaceColor",
    value: function checkAndReplaceColor(color) {
      var cards = document.querySelectorAll('.card__item');
      var card = cards[cards.length - 1];
      var text = card.lastElementChild;
      (0, _supportFunc.setTextColor)(text, color);
      if (text.style.color == 'white') {
        card.firstElementChild.lastElementChild.classList.add('white');
      }
    }
  }]);
}();
var _default = exports.default = new Card();
},{"./Card.css":"../components/Card/Card.css","../../constants/root":"../constants/root.js","../../utils/supportFunc":"../utils/supportFunc.js","../Note/img/close.png":"../components/Note/img/close.png"}],"../components/Card/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _Card.default;
  }
});
var _Card = _interopRequireDefault(require("./Card"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
},{"./Card":"../components/Card/Card.js"}],"../utils/localStorageUtil.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Card = _interopRequireDefault(require("../components/Card"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var LocalStorageUtil = /*#__PURE__*/function () {
  function LocalStorageUtil() {
    _classCallCheck(this, LocalStorageUtil);
    this.keyName = 'notes';
  }
  return _createClass(LocalStorageUtil, [{
    key: "getNotes",
    value: function getNotes() {
      var notesLocalStorage = localStorage.getItem(this.keyName);
      if (notesLocalStorage) {
        return JSON.parse(notesLocalStorage);
      } else {
        return [];
      }
    }
  }, {
    key: "putNotes",
    value: function putNotes(id, value) {
      var notes = this.getNotes();
      var index = notes.indexOf(id);
      var pushProduct = false;
      if (index === -1) {
        notes.push([id, value]);
        pushProduct = true;
      } else {
        notes.splice(index, 1);
      }
      localStorage.setItem(this.keyName, JSON.stringify(notes));
      return {
        pushProduct: pushProduct,
        notes: notes
      };
    }
  }, {
    key: "renderLoading",
    value: function renderLoading() {
      if (this.getNotes().length != 0) {
        this.getNotes().forEach(function (element, index) {
          if (index == 0) {
            _Card.default.render(_Card.default.countId(), element[1]); // если элемент первый то создаем первичный контейнер для него
          } else {
            _Card.default.shortRender(_Card.default.countId(), element[1]); // добавляем новые карточки в уже созданный контейнер
          }
          ;
        });
      }
      ;
    }
  }, {
    key: "clear",
    value: function clear() {
      localStorage.clear();
    }
  }]);
}();
var _default = exports.default = new LocalStorageUtil();
},{"../components/Card":"../components/Card/index.js"}],"../components/Error/Error.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../components/Error/Error.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _root = require("../../constants/root");
require("./Error.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Error = /*#__PURE__*/function () {
  function Error() {
    _classCallCheck(this, Error);
  }
  return _createClass(Error, [{
    key: "render",
    value: function render() {
      var html = "\n            <div class=\"error-container\">\n                <div class=\"error-message\">\n                    <h3>\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u0430!</h3>\n                    <p>\u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0437\u0430\u0439\u0442\u0438 \u043F\u043E\u0437\u0436\u0435</p>\n                </div>\n            </div>\n        ";
      _root.ROOT_ERROR.innerHTML = html;
    }
  }]);
}();
var _default = exports.default = new Error();
},{"../../constants/root":"../constants/root.js","./Error.css":"../components/Error/Error.css"}],"../components/Error/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _Error.default;
  }
});
var _Error = _interopRequireDefault(require("./Error"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
},{"./Error":"../components/Error/Error.js"}],"../components/App/App.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../components/Note/img/checkMark.png":[function(require,module,exports) {
module.exports = "/checkMark.efc1f444.png";
},{}],"../components/Modal/Modal.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../components/Modal/Modal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _checkMark = _interopRequireDefault(require("../Note/img/checkMark.png"));
var _close = _interopRequireDefault(require("../Note/img/close.png"));
var _root = require("../../constants/root");
require("./Modal.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Modal = /*#__PURE__*/function () {
  function Modal() {
    _classCallCheck(this, Modal);
    this.ANIMATION_SPEED = 300;
  }
  return _createClass(Modal, [{
    key: "render",
    value: function render(content) {
      var htmlContent = " \n                <div class=\"modal__container\">\n                    <div class=\"checkMark\">\n                        <span class=\"imgContain\"><img src=\"".concat(_close.default, "\" data-close=\"true\"></span>\n                        <span class=\"imgContain\" id=\"confirmer\"><img src=\"").concat(_checkMark.default, "\"></span>\n                    </div>\n                    <textarea placeholder=\"Write Note...\" class=\"textarea\" id=\"textarea\" maxlength=\"140\">").concat(content, "</textarea>\n                </div>\n                ");
      var htmlWrapper = "\n                <div class=\"modal__wrapper\" data-close=\"true\">\n                    ".concat(htmlContent, "\n                </div>\n            ");
      _root.ROOT_MODAL.innerHTML = htmlWrapper;
    }
  }, {
    key: "open",
    value: function open(content) {
      this.render(content);
      document.querySelector('.modal__container').classList.add('open'); // анимации появления окна
      document.querySelector('.modal__wrapper').classList.add('open');
    }
  }, {
    key: "close",
    value: function close() {
      var modal = document.querySelector('.modal__container');
      if (modal) {
        modal.classList.remove('open');
        // modal.parentElement.classList.remove('open');
        modal.classList.add('disappearance');
        // modal.parentElement.classList.add('disappearence');
        setTimeout(function () {
          modal.classList.remove('disappearance');
          // modal.parentElement.classList.remove('disappearence');
          _root.ROOT_MODAL.innerHTML = '';
        }, this.ANIMATION_SPEED);
      }
      ;
    }
  }]);
}();
;
var _default = exports.default = new Modal();
},{"../Note/img/checkMark.png":"../components/Note/img/checkMark.png","../Note/img/close.png":"../components/Note/img/close.png","../../constants/root":"../constants/root.js","./Modal.css":"../components/Modal/Modal.css"}],"../components/Modal/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _Modal.default;
  }
});
var _Modal = _interopRequireDefault(require("./Modal"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
},{"./Modal":"../components/Modal/Modal.js"}],"../components/Note/Note.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../components/Note/Note.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _root = require("../../constants/root");
require("./Note.css");
var _checkMark = _interopRequireDefault(require("./img/checkMark.png"));
var _close = _interopRequireDefault(require("./img/close.png"));
var _Card = _interopRequireDefault(require("../Card"));
var _Modal = _interopRequireDefault(require("../Modal"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Note = /*#__PURE__*/function () {
  function Note() {
    _classCallCheck(this, Note);
  }
  return _createClass(Note, [{
    key: "render",
    value: function render() {
      var htmlContent = "\n            <div class=\"modal__container\">\n                <div class=\"checkMark\">\n                    <span class=\"imgContain\"><img src=\"".concat(_close.default, "\" data-close=\"true\"></span>\n                    <span class=\"imgContain\" id=\"checker\"><img src=\"").concat(_checkMark.default, "\"></span>\n                </div>\n                <textarea placeholder=\"Write Note...\" class=\"textarea\" id=\"textarea\" maxlength=\"140\"></textarea>\n            </div>\n        ");
      var htmlWrapper = "\n            <div class=\"modal__wrapper\" data-close=\"true\">\n                ".concat(htmlContent, "\n            </div>\n        ");
      _root.ROOT_MODAL.innerHTML = htmlWrapper;
      var card = document.querySelector('.modal__container'); // анимации появления окна
      var wrapper = card.parentNode;
      card.classList.add('open');
      wrapper.classList.add('open');
      checker.addEventListener('click', function listener() {
        if (document.querySelector('.card__container')) {
          _Card.default.shortRender(_Card.default.countId(), textarea.value.replace(/(\n|\r)+/g, '<br>'));
        } else {
          _Card.default.render(_Card.default.countId(), textarea.value.replace(/(\n|\r)+/g, '<br>'));
        }
        ;
        _Modal.default.close();
      });
    }
  }]);
}();
;
var _default = exports.default = new Note();
},{"../../constants/root":"../constants/root.js","./Note.css":"../components/Note/Note.css","./img/checkMark.png":"../components/Note/img/checkMark.png","./img/close.png":"../components/Note/img/close.png","../Card":"../components/Card/index.js","../Modal":"../components/Modal/index.js"}],"../components/Note/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _Note.default;
  }
});
var _Note = _interopRequireDefault(require("./Note"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
},{"./Note":"../components/Note/Note.js"}],"../components/Spinner/Spinner.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../components/Spinner/img/spinner.svg":[function(require,module,exports) {
module.exports = "/spinner.73e6c7e0.svg";
},{}],"../components/Spinner/Spinner.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./Spinner.css");
var _root = require("../../constants/root");
var _spinner = _interopRequireDefault(require("./img/spinner.svg"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Spinner = /*#__PURE__*/function () {
  function Spinner() {
    _classCallCheck(this, Spinner);
  }
  return _createClass(Spinner, [{
    key: "handleClear",
    value: function handleClear() {
      _root.ROOT_SPINNER.innerHTML = '';
    }
  }, {
    key: "render",
    value: function render() {
      var html = "\n            <div class =\"spinner-container\">\n                <img src=\"".concat(_spinner.default, "\" class=\"spinner__img\"></img>\n            </div>\n        ");
      _root.ROOT_SPINNER.innerHTML = html;
    }
  }]);
}();
var _default = exports.default = new Spinner();
},{"./Spinner.css":"../components/Spinner/Spinner.css","../../constants/root":"../constants/root.js","./img/spinner.svg":"../components/Spinner/img/spinner.svg"}],"../components/Spinner/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _Spinner.default;
  }
});
var _Spinner = _interopRequireDefault(require("./Spinner"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
},{"./Spinner":"../components/Spinner/Spinner.js"}],"../components/App/App.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _localStorageUtil = _interopRequireDefault(require("../../utils/localStorageUtil"));
var _Error = _interopRequireDefault(require("../Error"));
var _root = require("../../constants/root");
require("./App.css");
var _Modal = _interopRequireDefault(require("../Modal"));
var _Note = _interopRequireDefault(require("../Note"));
var _Spinner = _interopRequireDefault(require("../Spinner"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);
  }
  return _createClass(App, [{
    key: "render",
    value: function render() {
      var _this = this;
      try {
        _Spinner.default.render();
        setTimeout(function () {
          _root.ROOT_INDEX.innerHTML = '<button id="btn" class="btn btnForCreateNote">Create note</button>';
          _localStorageUtil.default.renderLoading();
          _Note.default.render();
          _this.eventListener();
          _Spinner.default.handleClear();
        }, 500);
      } catch (error) {
        // обработчик ошибок
        _root.ROOT_INDEX.innerHTML = '';
        _Error.default.render();
        console.log(error.message, error.fileName, error.lineNumber);
      }
      ;
    }
  }, {
    key: "eventListener",
    value: function eventListener() {
      document.addEventListener('click', function (event) {
        var target = event.target.closest('#btn');
        if (!target) return;
        _Note.default.render();
      });
      document.addEventListener('click', function (event) {
        var target = event.target.closest('.card__item');
        if (!target) return;
        var content = target.lastElementChild.textContent.trim(); // доработать отображение
        // content = content.replaceAll('<br>', '')
        // console.log(content)
        _Modal.default.open(content);
        document.querySelector('#confirmer').addEventListener('click', function () {
          // если была нажата галочка на модальном окне
          target.lastElementChild.textContent = textarea.value; // в параграф карточки заносятся данные из textarea
          _Modal.default.close();
        });
      });
      document.addEventListener('keydown', function (event) {
        if (event.code.toLowerCase() == 'escape') {
          _Modal.default.close();
        }
      });
      document.addEventListener('click', function (event) {
        // закрытие карточки
        var target = event.target.closest('.close');
        if (!target) return;
        target.parentNode.parentNode.innerHTML = ''; // при закрытии закрывается карточка не совсем правильно но работает
        _root.ROOT_MODAL.innerHTML = ''; // и закрывается модальное окно
      });
      document.addEventListener('click', function (event) {
        // закрытие модального окна
        var target = event.target;
        if (target.dataset.close) {
          _Modal.default.close();
        }
        ;
      });
      window.onbeforeunload = function () {
        // в момент ухода пользователя все данные на странице уходят в localStorage
        var cards = document.querySelectorAll('.card__item'); // получаем все карточки
        _localStorageUtil.default.clear(); // очищаем хранилище
        var _iterator = _createForOfIteratorHelper(cards),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var card = _step.value;
            _localStorageUtil.default.putNotes(card.id, card.lastElementChild.textContent.trim()); // добавляем все актуальные данные в хранилище
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      };
    }
  }]);
}();
;
var _default = exports.default = new App(); // адекватное отображение текста при переносах
},{"../../utils/localStorageUtil":"../utils/localStorageUtil.js","../Error":"../components/Error/index.js","../../constants/root":"../constants/root.js","./App.css":"../components/App/App.css","../Modal":"../components/Modal/index.js","../Note":"../components/Note/index.js","../Spinner":"../components/Spinner/index.js"}],"../components/App/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _App.default;
  }
});
var _App = _interopRequireDefault(require("./App"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
},{"./App":"../components/App/App.js"}],"../index.js":[function(require,module,exports) {
"use strict";

var _App = _interopRequireDefault(require("./components/App"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_App.default.render();
},{"./components/App":"../components/App/index.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50315" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../index.js"], null)
//# sourceMappingURL=/card-on-the-refrigerator.80dfb952.js.map