/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/actions/desires/desires.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/qs/lib/formats.js":
/*!****************************************!*\
  !*** ./node_modules/qs/lib/formats.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;
module.exports = {
  'default': 'RFC3986',
  formatters: {
    RFC1738: function (value) {
      return replace.call(value, percentTwenties, '+');
    },
    RFC3986: function (value) {
      return value;
    }
  },
  RFC1738: 'RFC1738',
  RFC3986: 'RFC3986'
};

/***/ }),

/***/ "./node_modules/qs/lib/index.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ "./node_modules/qs/lib/stringify.js");

var parse = __webpack_require__(/*! ./parse */ "./node_modules/qs/lib/parse.js");

var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");

module.exports = {
  formats: formats,
  parse: parse,
  stringify: stringify
};

/***/ }),

/***/ "./node_modules/qs/lib/parse.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/parse.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");

var has = Object.prototype.hasOwnProperty;
var defaults = {
  allowDots: false,
  allowPrototypes: false,
  arrayLimit: 20,
  charset: 'utf-8',
  charsetSentinel: false,
  decoder: utils.decode,
  delimiter: '&',
  depth: 5,
  ignoreQueryPrefix: false,
  interpretNumericEntities: false,
  parameterLimit: 1000,
  parseArrays: true,
  plainObjects: false,
  strictNullHandling: false
};

var interpretNumericEntities = function (str) {
  return str.replace(/&#(\d+);/g, function ($0, numberStr) {
    return String.fromCharCode(parseInt(numberStr, 10));
  });
}; // This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.


var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')
// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.

var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
  var obj = {};
  var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
  var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
  var parts = cleanStr.split(options.delimiter, limit);
  var skipIndex = -1; // Keep track of where the utf8 sentinel was found

  var i;
  var charset = options.charset;

  if (options.charsetSentinel) {
    for (i = 0; i < parts.length; ++i) {
      if (parts[i].indexOf('utf8=') === 0) {
        if (parts[i] === charsetSentinel) {
          charset = 'utf-8';
        } else if (parts[i] === isoSentinel) {
          charset = 'iso-8859-1';
        }

        skipIndex = i;
        i = parts.length; // The eslint settings do not allow break;
      }
    }
  }

  for (i = 0; i < parts.length; ++i) {
    if (i === skipIndex) {
      continue;
    }

    var part = parts[i];
    var bracketEqualsPos = part.indexOf(']=');
    var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;
    var key, val;

    if (pos === -1) {
      key = options.decoder(part, defaults.decoder, charset);
      val = options.strictNullHandling ? null : '';
    } else {
      key = options.decoder(part.slice(0, pos), defaults.decoder, charset);
      val = options.decoder(part.slice(pos + 1), defaults.decoder, charset);
    }

    if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
      val = interpretNumericEntities(val);
    }

    if (has.call(obj, key)) {
      obj[key] = utils.combine(obj[key], val);
    } else {
      obj[key] = val;
    }
  }

  return obj;
};

var parseObject = function (chain, val, options) {
  var leaf = val;

  for (var i = chain.length - 1; i >= 0; --i) {
    var obj;
    var root = chain[i];

    if (root === '[]' && options.parseArrays) {
      obj = [].concat(leaf);
    } else {
      obj = options.plainObjects ? Object.create(null) : {};
      var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
      var index = parseInt(cleanRoot, 10);

      if (!options.parseArrays && cleanRoot === '') {
        obj = {
          0: leaf
        };
      } else if (!isNaN(index) && root !== cleanRoot && String(index) === cleanRoot && index >= 0 && options.parseArrays && index <= options.arrayLimit) {
        obj = [];
        obj[index] = leaf;
      } else {
        obj[cleanRoot] = leaf;
      }
    }

    leaf = obj;
  }

  return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
  if (!givenKey) {
    return;
  } // Transform dot notation to bracket notation


  var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey; // The regex chunks

  var brackets = /(\[[^[\]]*])/;
  var child = /(\[[^[\]]*])/g; // Get the parent

  var segment = brackets.exec(key);
  var parent = segment ? key.slice(0, segment.index) : key; // Stash the parent if it exists

  var keys = [];

  if (parent) {
    // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
    if (!options.plainObjects && has.call(Object.prototype, parent)) {
      if (!options.allowPrototypes) {
        return;
      }
    }

    keys.push(parent);
  } // Loop through children appending to the array until we hit depth


  var i = 0;

  while ((segment = child.exec(key)) !== null && i < options.depth) {
    i += 1;

    if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
      if (!options.allowPrototypes) {
        return;
      }
    }

    keys.push(segment[1]);
  } // If there's a remainder, just add whatever is left


  if (segment) {
    keys.push('[' + key.slice(segment.index) + ']');
  }

  return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
  var options = opts ? utils.assign({}, opts) : {};

  if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
    throw new TypeError('Decoder has to be a function.');
  }

  options.ignoreQueryPrefix = options.ignoreQueryPrefix === true;
  options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
  options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
  options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
  options.parseArrays = options.parseArrays !== false;
  options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
  options.allowDots = typeof options.allowDots === 'undefined' ? defaults.allowDots : !!options.allowDots;
  options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
  options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
  options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
  options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

  if (typeof options.charset !== 'undefined' && options.charset !== 'utf-8' && options.charset !== 'iso-8859-1') {
    throw new Error('The charset option must be either utf-8, iso-8859-1, or undefined');
  }

  if (typeof options.charset === 'undefined') {
    options.charset = defaults.charset;
  }

  if (str === '' || str === null || typeof str === 'undefined') {
    return options.plainObjects ? Object.create(null) : {};
  }

  var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
  var obj = options.plainObjects ? Object.create(null) : {}; // Iterate over the keys and setup the new object

  var keys = Object.keys(tempObj);

  for (var i = 0; i < keys.length; ++i) {
    var key = keys[i];
    var newObj = parseKeys(key, tempObj[key], options);
    obj = utils.merge(obj, newObj, options);
  }

  return utils.compact(obj);
};

/***/ }),

/***/ "./node_modules/qs/lib/stringify.js":
/*!******************************************!*\
  !*** ./node_modules/qs/lib/stringify.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");

var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");

var arrayPrefixGenerators = {
  brackets: function brackets(prefix) {
    // eslint-disable-line func-name-matching
    return prefix + '[]';
  },
  indices: function indices(prefix, key) {
    // eslint-disable-line func-name-matching
    return prefix + '[' + key + ']';
  },
  repeat: function repeat(prefix) {
    // eslint-disable-line func-name-matching
    return prefix;
  }
};
var isArray = Array.isArray;
var push = Array.prototype.push;

var pushToArray = function (arr, valueOrArray) {
  push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;
var defaults = {
  addQueryPrefix: false,
  allowDots: false,
  charset: 'utf-8',
  charsetSentinel: false,
  delimiter: '&',
  encode: true,
  encoder: utils.encode,
  encodeValuesOnly: false,
  // deprecated
  indices: false,
  serializeDate: function serializeDate(date) {
    // eslint-disable-line func-name-matching
    return toISO.call(date);
  },
  skipNulls: false,
  strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
object, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly, charset) {
  var obj = object;

  if (typeof filter === 'function') {
    obj = filter(prefix, obj);
  } else if (obj instanceof Date) {
    obj = serializeDate(obj);
  }

  if (obj === null) {
    if (strictNullHandling) {
      return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset) : prefix;
    }

    obj = '';
  }

  if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
    if (encoder) {
      var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset);
      return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset))];
    }

    return [formatter(prefix) + '=' + formatter(String(obj))];
  }

  var values = [];

  if (typeof obj === 'undefined') {
    return values;
  }

  var objKeys;

  if (Array.isArray(filter)) {
    objKeys = filter;
  } else {
    var keys = Object.keys(obj);
    objKeys = sort ? keys.sort(sort) : keys;
  }

  for (var i = 0; i < objKeys.length; ++i) {
    var key = objKeys[i];

    if (skipNulls && obj[key] === null) {
      continue;
    }

    if (Array.isArray(obj)) {
      pushToArray(values, stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly, charset));
    } else {
      pushToArray(values, stringify(obj[key], prefix + (allowDots ? '.' + key : '[' + key + ']'), generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly, charset));
    }
  }

  return values;
};

module.exports = function (object, opts) {
  var obj = object;
  var options = opts ? utils.assign({}, opts) : {};

  if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
    throw new TypeError('Encoder has to be a function.');
  }

  var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
  var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
  var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
  var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
  var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
  var sort = typeof options.sort === 'function' ? options.sort : null;
  var allowDots = typeof options.allowDots === 'undefined' ? defaults.allowDots : !!options.allowDots;
  var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
  var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
  var charset = options.charset || defaults.charset;

  if (typeof options.charset !== 'undefined' && options.charset !== 'utf-8' && options.charset !== 'iso-8859-1') {
    throw new Error('The charset option must be either utf-8, iso-8859-1, or undefined');
  }

  if (typeof options.format === 'undefined') {
    options.format = formats['default'];
  } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
    throw new TypeError('Unknown format option provided.');
  }

  var formatter = formats.formatters[options.format];
  var objKeys;
  var filter;

  if (typeof options.filter === 'function') {
    filter = options.filter;
    obj = filter('', obj);
  } else if (Array.isArray(options.filter)) {
    filter = options.filter;
    objKeys = filter;
  }

  var keys = [];

  if (typeof obj !== 'object' || obj === null) {
    return '';
  }

  var arrayFormat;

  if (options.arrayFormat in arrayPrefixGenerators) {
    arrayFormat = options.arrayFormat;
  } else if ('indices' in options) {
    arrayFormat = options.indices ? 'indices' : 'repeat';
  } else {
    arrayFormat = 'indices';
  }

  var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

  if (!objKeys) {
    objKeys = Object.keys(obj);
  }

  if (sort) {
    objKeys.sort(sort);
  }

  for (var i = 0; i < objKeys.length; ++i) {
    var key = objKeys[i];

    if (skipNulls && obj[key] === null) {
      continue;
    }

    pushToArray(keys, stringify(obj[key], key, generateArrayPrefix, strictNullHandling, skipNulls, encode ? encoder : null, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly, charset));
  }

  var joined = keys.join(delimiter);
  var prefix = options.addQueryPrefix === true ? '?' : '';

  if (options.charsetSentinel) {
    if (charset === 'iso-8859-1') {
      // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
      prefix += 'utf8=%26%2310003%3B&';
    } else {
      // encodeURIComponent('✓')
      prefix += 'utf8=%E2%9C%93&';
    }
  }

  return joined.length > 0 ? prefix + joined : '';
};

/***/ }),

/***/ "./node_modules/qs/lib/utils.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/utils.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

var hexTable = function () {
  var array = [];

  for (var i = 0; i < 256; ++i) {
    array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
  }

  return array;
}();

var compactQueue = function compactQueue(queue) {
  while (queue.length > 1) {
    var item = queue.pop();
    var obj = item.obj[item.prop];

    if (Array.isArray(obj)) {
      var compacted = [];

      for (var j = 0; j < obj.length; ++j) {
        if (typeof obj[j] !== 'undefined') {
          compacted.push(obj[j]);
        }
      }

      item.obj[item.prop] = compacted;
    }
  }
};

var arrayToObject = function arrayToObject(source, options) {
  var obj = options && options.plainObjects ? Object.create(null) : {};

  for (var i = 0; i < source.length; ++i) {
    if (typeof source[i] !== 'undefined') {
      obj[i] = source[i];
    }
  }

  return obj;
};

var merge = function merge(target, source, options) {
  if (!source) {
    return target;
  }

  if (typeof source !== 'object') {
    if (Array.isArray(target)) {
      target.push(source);
    } else if (typeof target === 'object') {
      if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
        target[source] = true;
      }
    } else {
      return [target, source];
    }

    return target;
  }

  if (typeof target !== 'object') {
    return [target].concat(source);
  }

  var mergeTarget = target;

  if (Array.isArray(target) && !Array.isArray(source)) {
    mergeTarget = arrayToObject(target, options);
  }

  if (Array.isArray(target) && Array.isArray(source)) {
    source.forEach(function (item, i) {
      if (has.call(target, i)) {
        if (target[i] && typeof target[i] === 'object') {
          target[i] = merge(target[i], item, options);
        } else {
          target.push(item);
        }
      } else {
        target[i] = item;
      }
    });
    return target;
  }

  return Object.keys(source).reduce(function (acc, key) {
    var value = source[key];

    if (has.call(acc, key)) {
      acc[key] = merge(acc[key], value, options);
    } else {
      acc[key] = value;
    }

    return acc;
  }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
  return Object.keys(source).reduce(function (acc, key) {
    acc[key] = source[key];
    return acc;
  }, target);
};

var decode = function (str, decoder, charset) {
  var strWithoutPlus = str.replace(/\+/g, ' ');

  if (charset === 'iso-8859-1') {
    // unescape never throws, no try...catch needed:
    return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
  } // utf-8


  try {
    return decodeURIComponent(strWithoutPlus);
  } catch (e) {
    return strWithoutPlus;
  }
};

var encode = function encode(str, defaultEncoder, charset) {
  // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
  // It has been adapted here for stricter adherence to RFC 3986
  if (str.length === 0) {
    return str;
  }

  var string = typeof str === 'string' ? str : String(str);

  if (charset === 'iso-8859-1') {
    return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
      return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
    });
  }

  var out = '';

  for (var i = 0; i < string.length; ++i) {
    var c = string.charCodeAt(i);

    if (c === 0x2D // -
    || c === 0x2E // .
    || c === 0x5F // _
    || c === 0x7E // ~
    || c >= 0x30 && c <= 0x39 // 0-9
    || c >= 0x41 && c <= 0x5A // a-z
    || c >= 0x61 && c <= 0x7A // A-Z
    ) {
        out += string.charAt(i);
        continue;
      }

    if (c < 0x80) {
      out = out + hexTable[c];
      continue;
    }

    if (c < 0x800) {
      out = out + (hexTable[0xC0 | c >> 6] + hexTable[0x80 | c & 0x3F]);
      continue;
    }

    if (c < 0xD800 || c >= 0xE000) {
      out = out + (hexTable[0xE0 | c >> 12] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F]);
      continue;
    }

    i += 1;
    c = 0x10000 + ((c & 0x3FF) << 10 | string.charCodeAt(i) & 0x3FF);
    out += hexTable[0xF0 | c >> 18] + hexTable[0x80 | c >> 12 & 0x3F] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F];
  }

  return out;
};

var compact = function compact(value) {
  var queue = [{
    obj: {
      o: value
    },
    prop: 'o'
  }];
  var refs = [];

  for (var i = 0; i < queue.length; ++i) {
    var item = queue[i];
    var obj = item.obj[item.prop];
    var keys = Object.keys(obj);

    for (var j = 0; j < keys.length; ++j) {
      var key = keys[j];
      var val = obj[key];

      if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
        queue.push({
          obj: obj,
          prop: key
        });
        refs.push(val);
      }
    }
  }

  compactQueue(queue);
  return value;
};

var isRegExp = function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
  if (obj === null || typeof obj === 'undefined') {
    return false;
  }

  return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
  return [].concat(a, b);
};

module.exports = {
  arrayToObject: arrayToObject,
  assign: assign,
  combine: combine,
  compact: compact,
  decode: decode,
  encode: encode,
  isBuffer: isBuffer,
  isRegExp: isRegExp,
  merge: merge
};

/***/ }),

/***/ "./src/js/actions/desires/desires.js":
/*!*******************************************!*\
  !*** ./src/js/actions/desires/desires.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const qs = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");

Adequa.actions.desires = {};

Adequa.actions.desires.newDesire = function (desire) {
  desire = Object.assign(desire, {
    validated: false,
    removed: false
  });
  const desires = Adequa.storage.desires || [];
  const exist = desires.filter(item => item.name === desire.name).length;

  if (!exist) {
    desires.push(desire);
    Adequa.storage.desires = desires;
    Adequa.setStorage({});
  }
};

Adequa.actions.desires.checkDesire = function (url) {
  Adequa.storage.desireRules = {
    "leboncoin.fr": {
      rules: [{
        parameter: "text",
        category: "main_search"
      }]
    }
  };
  const hostname = Adequa.hostname(url);
  const query = url.split('/').pop();
  const parameters = qs.parse(query, {
    ignoreQueryPrefix: true
  });
  const desire = {
    name: Adequa.hostname(url)
  };
  console.log(parameters);
  const rules = (Adequa.storage.desireRules[hostname] || {}).rules || [];

  for (const rule of rules) {
    if (rule.category === "main_search" && parameters[rule.parameter]) {
      desire.name = parameters[rule.parameter];
    }
  }

  console.log(desire);
  Adequa.actions.desires.newDesire(desire);
};

Adequa.actions.desires.setDesire = function (desire) {
  for (const index in Adequa.storage.desires) {
    if (Adequa.storage.desires[index].name === desire.name) {
      Adequa.storage.desires[index] = desire;
    }
  }
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3FzL2xpYi9mb3JtYXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xcy9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3FzL2xpYi9wYXJzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXMvbGliL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXMvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hY3Rpb25zL2Rlc2lyZXMvZGVzaXJlcy5qcyJdLCJuYW1lcyI6WyJyZXBsYWNlIiwiU3RyaW5nIiwicHJvdG90eXBlIiwicGVyY2VudFR3ZW50aWVzIiwibW9kdWxlIiwiZXhwb3J0cyIsImZvcm1hdHRlcnMiLCJSRkMxNzM4IiwidmFsdWUiLCJjYWxsIiwiUkZDMzk4NiIsInN0cmluZ2lmeSIsInJlcXVpcmUiLCJwYXJzZSIsImZvcm1hdHMiLCJ1dGlscyIsImhhcyIsIk9iamVjdCIsImhhc093blByb3BlcnR5IiwiZGVmYXVsdHMiLCJhbGxvd0RvdHMiLCJhbGxvd1Byb3RvdHlwZXMiLCJhcnJheUxpbWl0IiwiY2hhcnNldCIsImNoYXJzZXRTZW50aW5lbCIsImRlY29kZXIiLCJkZWNvZGUiLCJkZWxpbWl0ZXIiLCJkZXB0aCIsImlnbm9yZVF1ZXJ5UHJlZml4IiwiaW50ZXJwcmV0TnVtZXJpY0VudGl0aWVzIiwicGFyYW1ldGVyTGltaXQiLCJwYXJzZUFycmF5cyIsInBsYWluT2JqZWN0cyIsInN0cmljdE51bGxIYW5kbGluZyIsInN0ciIsIiQwIiwibnVtYmVyU3RyIiwiZnJvbUNoYXJDb2RlIiwicGFyc2VJbnQiLCJpc29TZW50aW5lbCIsInBhcnNlVmFsdWVzIiwicGFyc2VRdWVyeVN0cmluZ1ZhbHVlcyIsIm9wdGlvbnMiLCJvYmoiLCJjbGVhblN0ciIsImxpbWl0IiwiSW5maW5pdHkiLCJ1bmRlZmluZWQiLCJwYXJ0cyIsInNwbGl0Iiwic2tpcEluZGV4IiwiaSIsImxlbmd0aCIsImluZGV4T2YiLCJwYXJ0IiwiYnJhY2tldEVxdWFsc1BvcyIsInBvcyIsImtleSIsInZhbCIsInNsaWNlIiwiY29tYmluZSIsInBhcnNlT2JqZWN0IiwiY2hhaW4iLCJsZWFmIiwicm9vdCIsImNvbmNhdCIsImNyZWF0ZSIsImNsZWFuUm9vdCIsImNoYXJBdCIsImluZGV4IiwiaXNOYU4iLCJwYXJzZUtleXMiLCJwYXJzZVF1ZXJ5U3RyaW5nS2V5cyIsImdpdmVuS2V5IiwiYnJhY2tldHMiLCJjaGlsZCIsInNlZ21lbnQiLCJleGVjIiwicGFyZW50Iiwia2V5cyIsInB1c2giLCJvcHRzIiwiYXNzaWduIiwiVHlwZUVycm9yIiwiaXNSZWdFeHAiLCJFcnJvciIsInRlbXBPYmoiLCJuZXdPYmoiLCJtZXJnZSIsImNvbXBhY3QiLCJhcnJheVByZWZpeEdlbmVyYXRvcnMiLCJwcmVmaXgiLCJpbmRpY2VzIiwicmVwZWF0IiwiaXNBcnJheSIsIkFycmF5IiwicHVzaFRvQXJyYXkiLCJhcnIiLCJ2YWx1ZU9yQXJyYXkiLCJhcHBseSIsInRvSVNPIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiYWRkUXVlcnlQcmVmaXgiLCJlbmNvZGUiLCJlbmNvZGVyIiwiZW5jb2RlVmFsdWVzT25seSIsInNlcmlhbGl6ZURhdGUiLCJkYXRlIiwic2tpcE51bGxzIiwib2JqZWN0IiwiZ2VuZXJhdGVBcnJheVByZWZpeCIsImZpbHRlciIsInNvcnQiLCJmb3JtYXR0ZXIiLCJpc0J1ZmZlciIsImtleVZhbHVlIiwidmFsdWVzIiwib2JqS2V5cyIsImZvcm1hdCIsImFycmF5Rm9ybWF0Iiwiam9pbmVkIiwiam9pbiIsImhleFRhYmxlIiwiYXJyYXkiLCJ0b1N0cmluZyIsInRvVXBwZXJDYXNlIiwiY29tcGFjdFF1ZXVlIiwicXVldWUiLCJpdGVtIiwicG9wIiwicHJvcCIsImNvbXBhY3RlZCIsImoiLCJhcnJheVRvT2JqZWN0Iiwic291cmNlIiwidGFyZ2V0IiwibWVyZ2VUYXJnZXQiLCJmb3JFYWNoIiwicmVkdWNlIiwiYWNjIiwiYXNzaWduU2luZ2xlU291cmNlIiwic3RyV2l0aG91dFBsdXMiLCJ1bmVzY2FwZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImUiLCJkZWZhdWx0RW5jb2RlciIsInN0cmluZyIsImVzY2FwZSIsIm91dCIsImMiLCJjaGFyQ29kZUF0IiwibyIsInJlZnMiLCJjb25zdHJ1Y3RvciIsImEiLCJiIiwicXMiLCJBZGVxdWEiLCJhY3Rpb25zIiwiZGVzaXJlcyIsIm5ld0Rlc2lyZSIsImRlc2lyZSIsInZhbGlkYXRlZCIsInJlbW92ZWQiLCJzdG9yYWdlIiwiZXhpc3QiLCJuYW1lIiwic2V0U3RvcmFnZSIsImNoZWNrRGVzaXJlIiwidXJsIiwiZGVzaXJlUnVsZXMiLCJydWxlcyIsInBhcmFtZXRlciIsImNhdGVnb3J5IiwiaG9zdG5hbWUiLCJxdWVyeSIsInBhcmFtZXRlcnMiLCJjb25zb2xlIiwibG9nIiwicnVsZSIsInNldERlc2lyZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNB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LEtBQVgsSUFBb0J5RixNQUFNLENBQUNPLE9BQVAsQ0FBZUwsT0FBbkMsRUFBNEM7QUFDeEMsUUFBSUYsTUFBTSxDQUFDTyxPQUFQLENBQWVMLE9BQWYsQ0FBdUIzRixLQUF2QixFQUE4QmtHLElBQTlCLEtBQXVDTCxNQUFNLENBQUNLLElBQWxELEVBQXdEO0FBQ3BEVCxZQUFNLENBQUNPLE9BQVAsQ0FBZUwsT0FBZixDQUF1QjNGLEtBQXZCLElBQWdDNkYsTUFBaEM7QUFDSDtBQUNKO0FBQ0osQ0FORCxDIiwiZmlsZSI6ImRlc2lyZXMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvYWN0aW9ucy9kZXNpcmVzL2Rlc2lyZXMuanNcIik7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZXBsYWNlID0gU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlO1xudmFyIHBlcmNlbnRUd2VudGllcyA9IC8lMjAvZztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgJ2RlZmF1bHQnOiAnUkZDMzk4NicsXG4gICAgZm9ybWF0dGVyczoge1xuICAgICAgICBSRkMxNzM4OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiByZXBsYWNlLmNhbGwodmFsdWUsIHBlcmNlbnRUd2VudGllcywgJysnKTtcbiAgICAgICAgfSxcbiAgICAgICAgUkZDMzk4NjogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFJGQzE3Mzg6ICdSRkMxNzM4JyxcbiAgICBSRkMzOTg2OiAnUkZDMzk4Nidcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBzdHJpbmdpZnkgPSByZXF1aXJlKCcuL3N0cmluZ2lmeScpO1xudmFyIHBhcnNlID0gcmVxdWlyZSgnLi9wYXJzZScpO1xudmFyIGZvcm1hdHMgPSByZXF1aXJlKCcuL2Zvcm1hdHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZm9ybWF0czogZm9ybWF0cyxcbiAgICBwYXJzZTogcGFyc2UsXG4gICAgc3RyaW5naWZ5OiBzdHJpbmdpZnlcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgICBhbGxvd0RvdHM6IGZhbHNlLFxuICAgIGFsbG93UHJvdG90eXBlczogZmFsc2UsXG4gICAgYXJyYXlMaW1pdDogMjAsXG4gICAgY2hhcnNldDogJ3V0Zi04JyxcbiAgICBjaGFyc2V0U2VudGluZWw6IGZhbHNlLFxuICAgIGRlY29kZXI6IHV0aWxzLmRlY29kZSxcbiAgICBkZWxpbWl0ZXI6ICcmJyxcbiAgICBkZXB0aDogNSxcbiAgICBpZ25vcmVRdWVyeVByZWZpeDogZmFsc2UsXG4gICAgaW50ZXJwcmV0TnVtZXJpY0VudGl0aWVzOiBmYWxzZSxcbiAgICBwYXJhbWV0ZXJMaW1pdDogMTAwMCxcbiAgICBwYXJzZUFycmF5czogdHJ1ZSxcbiAgICBwbGFpbk9iamVjdHM6IGZhbHNlLFxuICAgIHN0cmljdE51bGxIYW5kbGluZzogZmFsc2Vcbn07XG5cbnZhciBpbnRlcnByZXROdW1lcmljRW50aXRpZXMgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mIyhcXGQrKTsvZywgZnVuY3Rpb24gKCQwLCBudW1iZXJTdHIpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQobnVtYmVyU3RyLCAxMCkpO1xuICAgIH0pO1xufTtcblxuLy8gVGhpcyBpcyB3aGF0IGJyb3dzZXJzIHdpbGwgc3VibWl0IHdoZW4gdGhlIOKckyBjaGFyYWN0ZXIgb2NjdXJzIGluIGFuXG4vLyBhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQgYm9keSBhbmQgdGhlIGVuY29kaW5nIG9mIHRoZSBwYWdlIGNvbnRhaW5pbmdcbi8vIHRoZSBmb3JtIGlzIGlzby04ODU5LTEsIG9yIHdoZW4gdGhlIHN1Ym1pdHRlZCBmb3JtIGhhcyBhbiBhY2NlcHQtY2hhcnNldFxuLy8gYXR0cmlidXRlIG9mIGlzby04ODU5LTEuIFByZXN1bWFibHkgYWxzbyB3aXRoIG90aGVyIGNoYXJzZXRzIHRoYXQgZG8gbm90IGNvbnRhaW5cbi8vIHRoZSDinJMgY2hhcmFjdGVyLCBzdWNoIGFzIHVzLWFzY2lpLlxudmFyIGlzb1NlbnRpbmVsID0gJ3V0Zjg9JTI2JTIzMTAwMDMlM0InOyAvLyBlbmNvZGVVUklDb21wb25lbnQoJyYjMTAwMDM7JylcblxuLy8gVGhlc2UgYXJlIHRoZSBwZXJjZW50LWVuY29kZWQgdXRmLTggb2N0ZXRzIHJlcHJlc2VudGluZyBhIGNoZWNrbWFyaywgaW5kaWNhdGluZyB0aGF0IHRoZSByZXF1ZXN0IGFjdHVhbGx5IGlzIHV0Zi04IGVuY29kZWQuXG52YXIgY2hhcnNldFNlbnRpbmVsID0gJ3V0Zjg9JUUyJTlDJTkzJzsgLy8gZW5jb2RlVVJJQ29tcG9uZW50KCfinJMnKVxuXG52YXIgcGFyc2VWYWx1ZXMgPSBmdW5jdGlvbiBwYXJzZVF1ZXJ5U3RyaW5nVmFsdWVzKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBvYmogPSB7fTtcbiAgICB2YXIgY2xlYW5TdHIgPSBvcHRpb25zLmlnbm9yZVF1ZXJ5UHJlZml4ID8gc3RyLnJlcGxhY2UoL15cXD8vLCAnJykgOiBzdHI7XG4gICAgdmFyIGxpbWl0ID0gb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdCA9PT0gSW5maW5pdHkgPyB1bmRlZmluZWQgOiBvcHRpb25zLnBhcmFtZXRlckxpbWl0O1xuICAgIHZhciBwYXJ0cyA9IGNsZWFuU3RyLnNwbGl0KG9wdGlvbnMuZGVsaW1pdGVyLCBsaW1pdCk7XG4gICAgdmFyIHNraXBJbmRleCA9IC0xOyAvLyBLZWVwIHRyYWNrIG9mIHdoZXJlIHRoZSB1dGY4IHNlbnRpbmVsIHdhcyBmb3VuZFxuICAgIHZhciBpO1xuXG4gICAgdmFyIGNoYXJzZXQgPSBvcHRpb25zLmNoYXJzZXQ7XG4gICAgaWYgKG9wdGlvbnMuY2hhcnNldFNlbnRpbmVsKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKHBhcnRzW2ldLmluZGV4T2YoJ3V0Zjg9JykgPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAocGFydHNbaV0gPT09IGNoYXJzZXRTZW50aW5lbCkge1xuICAgICAgICAgICAgICAgICAgICBjaGFyc2V0ID0gJ3V0Zi04JztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnRzW2ldID09PSBpc29TZW50aW5lbCkge1xuICAgICAgICAgICAgICAgICAgICBjaGFyc2V0ID0gJ2lzby04ODU5LTEnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBza2lwSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIGkgPSBwYXJ0cy5sZW5ndGg7IC8vIFRoZSBlc2xpbnQgc2V0dGluZ3MgZG8gbm90IGFsbG93IGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmIChpID09PSBza2lwSW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwYXJ0ID0gcGFydHNbaV07XG5cbiAgICAgICAgdmFyIGJyYWNrZXRFcXVhbHNQb3MgPSBwYXJ0LmluZGV4T2YoJ109Jyk7XG4gICAgICAgIHZhciBwb3MgPSBicmFja2V0RXF1YWxzUG9zID09PSAtMSA/IHBhcnQuaW5kZXhPZignPScpIDogYnJhY2tldEVxdWFsc1BvcyArIDE7XG5cbiAgICAgICAgdmFyIGtleSwgdmFsO1xuICAgICAgICBpZiAocG9zID09PSAtMSkge1xuICAgICAgICAgICAga2V5ID0gb3B0aW9ucy5kZWNvZGVyKHBhcnQsIGRlZmF1bHRzLmRlY29kZXIsIGNoYXJzZXQpO1xuICAgICAgICAgICAgdmFsID0gb3B0aW9ucy5zdHJpY3ROdWxsSGFuZGxpbmcgPyBudWxsIDogJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBrZXkgPSBvcHRpb25zLmRlY29kZXIocGFydC5zbGljZSgwLCBwb3MpLCBkZWZhdWx0cy5kZWNvZGVyLCBjaGFyc2V0KTtcbiAgICAgICAgICAgIHZhbCA9IG9wdGlvbnMuZGVjb2RlcihwYXJ0LnNsaWNlKHBvcyArIDEpLCBkZWZhdWx0cy5kZWNvZGVyLCBjaGFyc2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWwgJiYgb3B0aW9ucy5pbnRlcnByZXROdW1lcmljRW50aXRpZXMgJiYgY2hhcnNldCA9PT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgICAgICB2YWwgPSBpbnRlcnByZXROdW1lcmljRW50aXRpZXModmFsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGFzLmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgICAgICBvYmpba2V5XSA9IHV0aWxzLmNvbWJpbmUob2JqW2tleV0sIHZhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYmpba2V5XSA9IHZhbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuXG52YXIgcGFyc2VPYmplY3QgPSBmdW5jdGlvbiAoY2hhaW4sIHZhbCwgb3B0aW9ucykge1xuICAgIHZhciBsZWFmID0gdmFsO1xuXG4gICAgZm9yICh2YXIgaSA9IGNoYWluLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBvYmo7XG4gICAgICAgIHZhciByb290ID0gY2hhaW5baV07XG5cbiAgICAgICAgaWYgKHJvb3QgPT09ICdbXScgJiYgb3B0aW9ucy5wYXJzZUFycmF5cykge1xuICAgICAgICAgICAgb2JqID0gW10uY29uY2F0KGxlYWYpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqID0gb3B0aW9ucy5wbGFpbk9iamVjdHMgPyBPYmplY3QuY3JlYXRlKG51bGwpIDoge307XG4gICAgICAgICAgICB2YXIgY2xlYW5Sb290ID0gcm9vdC5jaGFyQXQoMCkgPT09ICdbJyAmJiByb290LmNoYXJBdChyb290Lmxlbmd0aCAtIDEpID09PSAnXScgPyByb290LnNsaWNlKDEsIC0xKSA6IHJvb3Q7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludChjbGVhblJvb3QsIDEwKTtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5wYXJzZUFycmF5cyAmJiBjbGVhblJvb3QgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgb2JqID0geyAwOiBsZWFmIH07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICFpc05hTihpbmRleClcbiAgICAgICAgICAgICAgICAmJiByb290ICE9PSBjbGVhblJvb3RcbiAgICAgICAgICAgICAgICAmJiBTdHJpbmcoaW5kZXgpID09PSBjbGVhblJvb3RcbiAgICAgICAgICAgICAgICAmJiBpbmRleCA+PSAwXG4gICAgICAgICAgICAgICAgJiYgKG9wdGlvbnMucGFyc2VBcnJheXMgJiYgaW5kZXggPD0gb3B0aW9ucy5hcnJheUxpbWl0KVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgb2JqID0gW107XG4gICAgICAgICAgICAgICAgb2JqW2luZGV4XSA9IGxlYWY7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9ialtjbGVhblJvb3RdID0gbGVhZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxlYWYgPSBvYmo7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlYWY7XG59O1xuXG52YXIgcGFyc2VLZXlzID0gZnVuY3Rpb24gcGFyc2VRdWVyeVN0cmluZ0tleXMoZ2l2ZW5LZXksIHZhbCwgb3B0aW9ucykge1xuICAgIGlmICghZ2l2ZW5LZXkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRyYW5zZm9ybSBkb3Qgbm90YXRpb24gdG8gYnJhY2tldCBub3RhdGlvblxuICAgIHZhciBrZXkgPSBvcHRpb25zLmFsbG93RG90cyA/IGdpdmVuS2V5LnJlcGxhY2UoL1xcLihbXi5bXSspL2csICdbJDFdJykgOiBnaXZlbktleTtcblxuICAgIC8vIFRoZSByZWdleCBjaHVua3NcblxuICAgIHZhciBicmFja2V0cyA9IC8oXFxbW15bXFxdXSpdKS87XG4gICAgdmFyIGNoaWxkID0gLyhcXFtbXltcXF1dKl0pL2c7XG5cbiAgICAvLyBHZXQgdGhlIHBhcmVudFxuXG4gICAgdmFyIHNlZ21lbnQgPSBicmFja2V0cy5leGVjKGtleSk7XG4gICAgdmFyIHBhcmVudCA9IHNlZ21lbnQgPyBrZXkuc2xpY2UoMCwgc2VnbWVudC5pbmRleCkgOiBrZXk7XG5cbiAgICAvLyBTdGFzaCB0aGUgcGFyZW50IGlmIGl0IGV4aXN0c1xuXG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIC8vIElmIHdlIGFyZW4ndCB1c2luZyBwbGFpbiBvYmplY3RzLCBvcHRpb25hbGx5IHByZWZpeCBrZXlzIHRoYXQgd291bGQgb3ZlcndyaXRlIG9iamVjdCBwcm90b3R5cGUgcHJvcGVydGllc1xuICAgICAgICBpZiAoIW9wdGlvbnMucGxhaW5PYmplY3RzICYmIGhhcy5jYWxsKE9iamVjdC5wcm90b3R5cGUsIHBhcmVudCkpIHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5hbGxvd1Byb3RvdHlwZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBrZXlzLnB1c2gocGFyZW50KTtcbiAgICB9XG5cbiAgICAvLyBMb29wIHRocm91Z2ggY2hpbGRyZW4gYXBwZW5kaW5nIHRvIHRoZSBhcnJheSB1bnRpbCB3ZSBoaXQgZGVwdGhcblxuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoKHNlZ21lbnQgPSBjaGlsZC5leGVjKGtleSkpICE9PSBudWxsICYmIGkgPCBvcHRpb25zLmRlcHRoKSB7XG4gICAgICAgIGkgKz0gMTtcbiAgICAgICAgaWYgKCFvcHRpb25zLnBsYWluT2JqZWN0cyAmJiBoYXMuY2FsbChPYmplY3QucHJvdG90eXBlLCBzZWdtZW50WzFdLnNsaWNlKDEsIC0xKSkpIHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5hbGxvd1Byb3RvdHlwZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAga2V5cy5wdXNoKHNlZ21lbnRbMV0pO1xuICAgIH1cblxuICAgIC8vIElmIHRoZXJlJ3MgYSByZW1haW5kZXIsIGp1c3QgYWRkIHdoYXRldmVyIGlzIGxlZnRcblxuICAgIGlmIChzZWdtZW50KSB7XG4gICAgICAgIGtleXMucHVzaCgnWycgKyBrZXkuc2xpY2Uoc2VnbWVudC5pbmRleCkgKyAnXScpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZU9iamVjdChrZXlzLCB2YWwsIG9wdGlvbnMpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyLCBvcHRzKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBvcHRzID8gdXRpbHMuYXNzaWduKHt9LCBvcHRzKSA6IHt9O1xuXG4gICAgaWYgKG9wdGlvbnMuZGVjb2RlciAhPT0gbnVsbCAmJiBvcHRpb25zLmRlY29kZXIgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb3B0aW9ucy5kZWNvZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0RlY29kZXIgaGFzIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgb3B0aW9ucy5pZ25vcmVRdWVyeVByZWZpeCA9IG9wdGlvbnMuaWdub3JlUXVlcnlQcmVmaXggPT09IHRydWU7XG4gICAgb3B0aW9ucy5kZWxpbWl0ZXIgPSB0eXBlb2Ygb3B0aW9ucy5kZWxpbWl0ZXIgPT09ICdzdHJpbmcnIHx8IHV0aWxzLmlzUmVnRXhwKG9wdGlvbnMuZGVsaW1pdGVyKSA/IG9wdGlvbnMuZGVsaW1pdGVyIDogZGVmYXVsdHMuZGVsaW1pdGVyO1xuICAgIG9wdGlvbnMuZGVwdGggPSB0eXBlb2Ygb3B0aW9ucy5kZXB0aCA9PT0gJ251bWJlcicgPyBvcHRpb25zLmRlcHRoIDogZGVmYXVsdHMuZGVwdGg7XG4gICAgb3B0aW9ucy5hcnJheUxpbWl0ID0gdHlwZW9mIG9wdGlvbnMuYXJyYXlMaW1pdCA9PT0gJ251bWJlcicgPyBvcHRpb25zLmFycmF5TGltaXQgOiBkZWZhdWx0cy5hcnJheUxpbWl0O1xuICAgIG9wdGlvbnMucGFyc2VBcnJheXMgPSBvcHRpb25zLnBhcnNlQXJyYXlzICE9PSBmYWxzZTtcbiAgICBvcHRpb25zLmRlY29kZXIgPSB0eXBlb2Ygb3B0aW9ucy5kZWNvZGVyID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy5kZWNvZGVyIDogZGVmYXVsdHMuZGVjb2RlcjtcbiAgICBvcHRpb25zLmFsbG93RG90cyA9IHR5cGVvZiBvcHRpb25zLmFsbG93RG90cyA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0cy5hbGxvd0RvdHMgOiAhIW9wdGlvbnMuYWxsb3dEb3RzO1xuICAgIG9wdGlvbnMucGxhaW5PYmplY3RzID0gdHlwZW9mIG9wdGlvbnMucGxhaW5PYmplY3RzID09PSAnYm9vbGVhbicgPyBvcHRpb25zLnBsYWluT2JqZWN0cyA6IGRlZmF1bHRzLnBsYWluT2JqZWN0cztcbiAgICBvcHRpb25zLmFsbG93UHJvdG90eXBlcyA9IHR5cGVvZiBvcHRpb25zLmFsbG93UHJvdG90eXBlcyA9PT0gJ2Jvb2xlYW4nID8gb3B0aW9ucy5hbGxvd1Byb3RvdHlwZXMgOiBkZWZhdWx0cy5hbGxvd1Byb3RvdHlwZXM7XG4gICAgb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdCA9IHR5cGVvZiBvcHRpb25zLnBhcmFtZXRlckxpbWl0ID09PSAnbnVtYmVyJyA/IG9wdGlvbnMucGFyYW1ldGVyTGltaXQgOiBkZWZhdWx0cy5wYXJhbWV0ZXJMaW1pdDtcbiAgICBvcHRpb25zLnN0cmljdE51bGxIYW5kbGluZyA9IHR5cGVvZiBvcHRpb25zLnN0cmljdE51bGxIYW5kbGluZyA9PT0gJ2Jvb2xlYW4nID8gb3B0aW9ucy5zdHJpY3ROdWxsSGFuZGxpbmcgOiBkZWZhdWx0cy5zdHJpY3ROdWxsSGFuZGxpbmc7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuY2hhcnNldCAhPT0gJ3VuZGVmaW5lZCcgJiYgb3B0aW9ucy5jaGFyc2V0ICE9PSAndXRmLTgnICYmIG9wdGlvbnMuY2hhcnNldCAhPT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGNoYXJzZXQgb3B0aW9uIG11c3QgYmUgZWl0aGVyIHV0Zi04LCBpc28tODg1OS0xLCBvciB1bmRlZmluZWQnKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmNoYXJzZXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMuY2hhcnNldCA9IGRlZmF1bHRzLmNoYXJzZXQ7XG4gICAgfVxuXG4gICAgaWYgKHN0ciA9PT0gJycgfHwgc3RyID09PSBudWxsIHx8IHR5cGVvZiBzdHIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLnBsYWluT2JqZWN0cyA/IE9iamVjdC5jcmVhdGUobnVsbCkgOiB7fTtcbiAgICB9XG5cbiAgICB2YXIgdGVtcE9iaiA9IHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnID8gcGFyc2VWYWx1ZXMoc3RyLCBvcHRpb25zKSA6IHN0cjtcbiAgICB2YXIgb2JqID0gb3B0aW9ucy5wbGFpbk9iamVjdHMgPyBPYmplY3QuY3JlYXRlKG51bGwpIDoge307XG5cbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIGtleXMgYW5kIHNldHVwIHRoZSBuZXcgb2JqZWN0XG5cbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRlbXBPYmopO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgdmFyIG5ld09iaiA9IHBhcnNlS2V5cyhrZXksIHRlbXBPYmpba2V5XSwgb3B0aW9ucyk7XG4gICAgICAgIG9iaiA9IHV0aWxzLm1lcmdlKG9iaiwgbmV3T2JqLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdXRpbHMuY29tcGFjdChvYmopO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGZvcm1hdHMgPSByZXF1aXJlKCcuL2Zvcm1hdHMnKTtcblxudmFyIGFycmF5UHJlZml4R2VuZXJhdG9ycyA9IHtcbiAgICBicmFja2V0czogZnVuY3Rpb24gYnJhY2tldHMocHJlZml4KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZnVuYy1uYW1lLW1hdGNoaW5nXG4gICAgICAgIHJldHVybiBwcmVmaXggKyAnW10nO1xuICAgIH0sXG4gICAgaW5kaWNlczogZnVuY3Rpb24gaW5kaWNlcyhwcmVmaXgsIGtleSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGZ1bmMtbmFtZS1tYXRjaGluZ1xuICAgICAgICByZXR1cm4gcHJlZml4ICsgJ1snICsga2V5ICsgJ10nO1xuICAgIH0sXG4gICAgcmVwZWF0OiBmdW5jdGlvbiByZXBlYXQocHJlZml4KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZnVuYy1uYW1lLW1hdGNoaW5nXG4gICAgICAgIHJldHVybiBwcmVmaXg7XG4gICAgfVxufTtcblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xudmFyIHB1c2ggPSBBcnJheS5wcm90b3R5cGUucHVzaDtcbnZhciBwdXNoVG9BcnJheSA9IGZ1bmN0aW9uIChhcnIsIHZhbHVlT3JBcnJheSkge1xuICAgIHB1c2guYXBwbHkoYXJyLCBpc0FycmF5KHZhbHVlT3JBcnJheSkgPyB2YWx1ZU9yQXJyYXkgOiBbdmFsdWVPckFycmF5XSk7XG59O1xuXG52YXIgdG9JU08gPSBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZztcblxudmFyIGRlZmF1bHRzID0ge1xuICAgIGFkZFF1ZXJ5UHJlZml4OiBmYWxzZSxcbiAgICBhbGxvd0RvdHM6IGZhbHNlLFxuICAgIGNoYXJzZXQ6ICd1dGYtOCcsXG4gICAgY2hhcnNldFNlbnRpbmVsOiBmYWxzZSxcbiAgICBkZWxpbWl0ZXI6ICcmJyxcbiAgICBlbmNvZGU6IHRydWUsXG4gICAgZW5jb2RlcjogdXRpbHMuZW5jb2RlLFxuICAgIGVuY29kZVZhbHVlc09ubHk6IGZhbHNlLFxuICAgIC8vIGRlcHJlY2F0ZWRcbiAgICBpbmRpY2VzOiBmYWxzZSxcbiAgICBzZXJpYWxpemVEYXRlOiBmdW5jdGlvbiBzZXJpYWxpemVEYXRlKGRhdGUpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBmdW5jLW5hbWUtbWF0Y2hpbmdcbiAgICAgICAgcmV0dXJuIHRvSVNPLmNhbGwoZGF0ZSk7XG4gICAgfSxcbiAgICBza2lwTnVsbHM6IGZhbHNlLFxuICAgIHN0cmljdE51bGxIYW5kbGluZzogZmFsc2Vcbn07XG5cbnZhciBzdHJpbmdpZnkgPSBmdW5jdGlvbiBzdHJpbmdpZnkoIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZnVuYy1uYW1lLW1hdGNoaW5nXG4gICAgb2JqZWN0LFxuICAgIHByZWZpeCxcbiAgICBnZW5lcmF0ZUFycmF5UHJlZml4LFxuICAgIHN0cmljdE51bGxIYW5kbGluZyxcbiAgICBza2lwTnVsbHMsXG4gICAgZW5jb2RlcixcbiAgICBmaWx0ZXIsXG4gICAgc29ydCxcbiAgICBhbGxvd0RvdHMsXG4gICAgc2VyaWFsaXplRGF0ZSxcbiAgICBmb3JtYXR0ZXIsXG4gICAgZW5jb2RlVmFsdWVzT25seSxcbiAgICBjaGFyc2V0XG4pIHtcbiAgICB2YXIgb2JqID0gb2JqZWN0O1xuICAgIGlmICh0eXBlb2YgZmlsdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9iaiA9IGZpbHRlcihwcmVmaXgsIG9iaik7XG4gICAgfSBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIG9iaiA9IHNlcmlhbGl6ZURhdGUob2JqKTtcbiAgICB9XG5cbiAgICBpZiAob2JqID09PSBudWxsKSB7XG4gICAgICAgIGlmIChzdHJpY3ROdWxsSGFuZGxpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBlbmNvZGVyICYmICFlbmNvZGVWYWx1ZXNPbmx5ID8gZW5jb2RlcihwcmVmaXgsIGRlZmF1bHRzLmVuY29kZXIsIGNoYXJzZXQpIDogcHJlZml4O1xuICAgICAgICB9XG5cbiAgICAgICAgb2JqID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBvYmogPT09ICdudW1iZXInIHx8IHR5cGVvZiBvYmogPT09ICdib29sZWFuJyB8fCB1dGlscy5pc0J1ZmZlcihvYmopKSB7XG4gICAgICAgIGlmIChlbmNvZGVyKSB7XG4gICAgICAgICAgICB2YXIga2V5VmFsdWUgPSBlbmNvZGVWYWx1ZXNPbmx5ID8gcHJlZml4IDogZW5jb2RlcihwcmVmaXgsIGRlZmF1bHRzLmVuY29kZXIsIGNoYXJzZXQpO1xuICAgICAgICAgICAgcmV0dXJuIFtmb3JtYXR0ZXIoa2V5VmFsdWUpICsgJz0nICsgZm9ybWF0dGVyKGVuY29kZXIob2JqLCBkZWZhdWx0cy5lbmNvZGVyLCBjaGFyc2V0KSldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbZm9ybWF0dGVyKHByZWZpeCkgKyAnPScgKyBmb3JtYXR0ZXIoU3RyaW5nKG9iaikpXTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWVzID0gW107XG5cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9XG5cbiAgICB2YXIgb2JqS2V5cztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShmaWx0ZXIpKSB7XG4gICAgICAgIG9iaktleXMgPSBmaWx0ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgICAgICBvYmpLZXlzID0gc29ydCA/IGtleXMuc29ydChzb3J0KSA6IGtleXM7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmpLZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBrZXkgPSBvYmpLZXlzW2ldO1xuXG4gICAgICAgIGlmIChza2lwTnVsbHMgJiYgb2JqW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgICAgICAgcHVzaFRvQXJyYXkodmFsdWVzLCBzdHJpbmdpZnkoXG4gICAgICAgICAgICAgICAgb2JqW2tleV0sXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVBcnJheVByZWZpeChwcmVmaXgsIGtleSksXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICAgICAgICAgICAgICBzdHJpY3ROdWxsSGFuZGxpbmcsXG4gICAgICAgICAgICAgICAgc2tpcE51bGxzLFxuICAgICAgICAgICAgICAgIGVuY29kZXIsXG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgIHNvcnQsXG4gICAgICAgICAgICAgICAgYWxsb3dEb3RzLFxuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZURhdGUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyLFxuICAgICAgICAgICAgICAgIGVuY29kZVZhbHVlc09ubHksXG4gICAgICAgICAgICAgICAgY2hhcnNldFxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwdXNoVG9BcnJheSh2YWx1ZXMsIHN0cmluZ2lmeShcbiAgICAgICAgICAgICAgICBvYmpba2V5XSxcbiAgICAgICAgICAgICAgICBwcmVmaXggKyAoYWxsb3dEb3RzID8gJy4nICsga2V5IDogJ1snICsga2V5ICsgJ10nKSxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZUFycmF5UHJlZml4LFxuICAgICAgICAgICAgICAgIHN0cmljdE51bGxIYW5kbGluZyxcbiAgICAgICAgICAgICAgICBza2lwTnVsbHMsXG4gICAgICAgICAgICAgICAgZW5jb2RlcixcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgc29ydCxcbiAgICAgICAgICAgICAgICBhbGxvd0RvdHMsXG4gICAgICAgICAgICAgICAgc2VyaWFsaXplRGF0ZSxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZXIsXG4gICAgICAgICAgICAgICAgZW5jb2RlVmFsdWVzT25seSxcbiAgICAgICAgICAgICAgICBjaGFyc2V0XG4gICAgICAgICAgICApKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG9wdHMpIHtcbiAgICB2YXIgb2JqID0gb2JqZWN0O1xuICAgIHZhciBvcHRpb25zID0gb3B0cyA/IHV0aWxzLmFzc2lnbih7fSwgb3B0cykgOiB7fTtcblxuICAgIGlmIChvcHRpb25zLmVuY29kZXIgIT09IG51bGwgJiYgb3B0aW9ucy5lbmNvZGVyICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9wdGlvbnMuZW5jb2RlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFbmNvZGVyIGhhcyB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHZhciBkZWxpbWl0ZXIgPSB0eXBlb2Ygb3B0aW9ucy5kZWxpbWl0ZXIgPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdHMuZGVsaW1pdGVyIDogb3B0aW9ucy5kZWxpbWl0ZXI7XG4gICAgdmFyIHN0cmljdE51bGxIYW5kbGluZyA9IHR5cGVvZiBvcHRpb25zLnN0cmljdE51bGxIYW5kbGluZyA9PT0gJ2Jvb2xlYW4nID8gb3B0aW9ucy5zdHJpY3ROdWxsSGFuZGxpbmcgOiBkZWZhdWx0cy5zdHJpY3ROdWxsSGFuZGxpbmc7XG4gICAgdmFyIHNraXBOdWxscyA9IHR5cGVvZiBvcHRpb25zLnNraXBOdWxscyA9PT0gJ2Jvb2xlYW4nID8gb3B0aW9ucy5za2lwTnVsbHMgOiBkZWZhdWx0cy5za2lwTnVsbHM7XG4gICAgdmFyIGVuY29kZSA9IHR5cGVvZiBvcHRpb25zLmVuY29kZSA9PT0gJ2Jvb2xlYW4nID8gb3B0aW9ucy5lbmNvZGUgOiBkZWZhdWx0cy5lbmNvZGU7XG4gICAgdmFyIGVuY29kZXIgPSB0eXBlb2Ygb3B0aW9ucy5lbmNvZGVyID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy5lbmNvZGVyIDogZGVmYXVsdHMuZW5jb2RlcjtcbiAgICB2YXIgc29ydCA9IHR5cGVvZiBvcHRpb25zLnNvcnQgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLnNvcnQgOiBudWxsO1xuICAgIHZhciBhbGxvd0RvdHMgPSB0eXBlb2Ygb3B0aW9ucy5hbGxvd0RvdHMgPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdHMuYWxsb3dEb3RzIDogISFvcHRpb25zLmFsbG93RG90cztcbiAgICB2YXIgc2VyaWFsaXplRGF0ZSA9IHR5cGVvZiBvcHRpb25zLnNlcmlhbGl6ZURhdGUgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLnNlcmlhbGl6ZURhdGUgOiBkZWZhdWx0cy5zZXJpYWxpemVEYXRlO1xuICAgIHZhciBlbmNvZGVWYWx1ZXNPbmx5ID0gdHlwZW9mIG9wdGlvbnMuZW5jb2RlVmFsdWVzT25seSA9PT0gJ2Jvb2xlYW4nID8gb3B0aW9ucy5lbmNvZGVWYWx1ZXNPbmx5IDogZGVmYXVsdHMuZW5jb2RlVmFsdWVzT25seTtcbiAgICB2YXIgY2hhcnNldCA9IG9wdGlvbnMuY2hhcnNldCB8fCBkZWZhdWx0cy5jaGFyc2V0O1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5jaGFyc2V0ICE9PSAndW5kZWZpbmVkJyAmJiBvcHRpb25zLmNoYXJzZXQgIT09ICd1dGYtOCcgJiYgb3B0aW9ucy5jaGFyc2V0ICE9PSAnaXNvLTg4NTktMScpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgY2hhcnNldCBvcHRpb24gbXVzdCBiZSBlaXRoZXIgdXRmLTgsIGlzby04ODU5LTEsIG9yIHVuZGVmaW5lZCcpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5mb3JtYXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMuZm9ybWF0ID0gZm9ybWF0c1snZGVmYXVsdCddO1xuICAgIH0gZWxzZSBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChmb3JtYXRzLmZvcm1hdHRlcnMsIG9wdGlvbnMuZm9ybWF0KSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGZvcm1hdCBvcHRpb24gcHJvdmlkZWQuJyk7XG4gICAgfVxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXRzLmZvcm1hdHRlcnNbb3B0aW9ucy5mb3JtYXRdO1xuICAgIHZhciBvYmpLZXlzO1xuICAgIHZhciBmaWx0ZXI7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZmlsdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGZpbHRlciA9IG9wdGlvbnMuZmlsdGVyO1xuICAgICAgICBvYmogPSBmaWx0ZXIoJycsIG9iaik7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMuZmlsdGVyKSkge1xuICAgICAgICBmaWx0ZXIgPSBvcHRpb25zLmZpbHRlcjtcbiAgICAgICAgb2JqS2V5cyA9IGZpbHRlcjtcbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IG9iaiA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgdmFyIGFycmF5Rm9ybWF0O1xuICAgIGlmIChvcHRpb25zLmFycmF5Rm9ybWF0IGluIGFycmF5UHJlZml4R2VuZXJhdG9ycykge1xuICAgICAgICBhcnJheUZvcm1hdCA9IG9wdGlvbnMuYXJyYXlGb3JtYXQ7XG4gICAgfSBlbHNlIGlmICgnaW5kaWNlcycgaW4gb3B0aW9ucykge1xuICAgICAgICBhcnJheUZvcm1hdCA9IG9wdGlvbnMuaW5kaWNlcyA/ICdpbmRpY2VzJyA6ICdyZXBlYXQnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFycmF5Rm9ybWF0ID0gJ2luZGljZXMnO1xuICAgIH1cblxuICAgIHZhciBnZW5lcmF0ZUFycmF5UHJlZml4ID0gYXJyYXlQcmVmaXhHZW5lcmF0b3JzW2FycmF5Rm9ybWF0XTtcblxuICAgIGlmICghb2JqS2V5cykge1xuICAgICAgICBvYmpLZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICB9XG5cbiAgICBpZiAoc29ydCkge1xuICAgICAgICBvYmpLZXlzLnNvcnQoc29ydCk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmpLZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBrZXkgPSBvYmpLZXlzW2ldO1xuXG4gICAgICAgIGlmIChza2lwTnVsbHMgJiYgb2JqW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHB1c2hUb0FycmF5KGtleXMsIHN0cmluZ2lmeShcbiAgICAgICAgICAgIG9ialtrZXldLFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICAgICAgICAgIHN0cmljdE51bGxIYW5kbGluZyxcbiAgICAgICAgICAgIHNraXBOdWxscyxcbiAgICAgICAgICAgIGVuY29kZSA/IGVuY29kZXIgOiBudWxsLFxuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgc29ydCxcbiAgICAgICAgICAgIGFsbG93RG90cyxcbiAgICAgICAgICAgIHNlcmlhbGl6ZURhdGUsXG4gICAgICAgICAgICBmb3JtYXR0ZXIsXG4gICAgICAgICAgICBlbmNvZGVWYWx1ZXNPbmx5LFxuICAgICAgICAgICAgY2hhcnNldFxuICAgICAgICApKTtcbiAgICB9XG5cbiAgICB2YXIgam9pbmVkID0ga2V5cy5qb2luKGRlbGltaXRlcik7XG4gICAgdmFyIHByZWZpeCA9IG9wdGlvbnMuYWRkUXVlcnlQcmVmaXggPT09IHRydWUgPyAnPycgOiAnJztcblxuICAgIGlmIChvcHRpb25zLmNoYXJzZXRTZW50aW5lbCkge1xuICAgICAgICBpZiAoY2hhcnNldCA9PT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgICAgICAvLyBlbmNvZGVVUklDb21wb25lbnQoJyYjMTAwMDM7JyksIHRoZSBcIm51bWVyaWMgZW50aXR5XCIgcmVwcmVzZW50YXRpb24gb2YgYSBjaGVja21hcmtcbiAgICAgICAgICAgIHByZWZpeCArPSAndXRmOD0lMjYlMjMxMDAwMyUzQiYnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZW5jb2RlVVJJQ29tcG9uZW50KCfinJMnKVxuICAgICAgICAgICAgcHJlZml4ICs9ICd1dGY4PSVFMiU5QyU5MyYnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGpvaW5lZC5sZW5ndGggPiAwID8gcHJlZml4ICsgam9pbmVkIDogJyc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGhleFRhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gICAgICAgIGFycmF5LnB1c2goJyUnICsgKChpIDwgMTYgPyAnMCcgOiAnJykgKyBpLnRvU3RyaW5nKDE2KSkudG9VcHBlckNhc2UoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5O1xufSgpKTtcblxudmFyIGNvbXBhY3RRdWV1ZSA9IGZ1bmN0aW9uIGNvbXBhY3RRdWV1ZShxdWV1ZSkge1xuICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAxKSB7XG4gICAgICAgIHZhciBpdGVtID0gcXVldWUucG9wKCk7XG4gICAgICAgIHZhciBvYmogPSBpdGVtLm9ialtpdGVtLnByb3BdO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgICAgIHZhciBjb21wYWN0ZWQgPSBbXTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBvYmoubGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9ialtqXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGFjdGVkLnB1c2gob2JqW2pdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGl0ZW0ub2JqW2l0ZW0ucHJvcF0gPSBjb21wYWN0ZWQ7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG52YXIgYXJyYXlUb09iamVjdCA9IGZ1bmN0aW9uIGFycmF5VG9PYmplY3Qoc291cmNlLCBvcHRpb25zKSB7XG4gICAgdmFyIG9iaiA9IG9wdGlvbnMgJiYgb3B0aW9ucy5wbGFpbk9iamVjdHMgPyBPYmplY3QuY3JlYXRlKG51bGwpIDoge307XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3VyY2UubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzb3VyY2VbaV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBvYmpbaV0gPSBzb3VyY2VbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxudmFyIG1lcmdlID0gZnVuY3Rpb24gbWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcbiAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygc291cmNlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpKSB7XG4gICAgICAgICAgICB0YXJnZXQucHVzaChzb3VyY2UpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAoKG9wdGlvbnMgJiYgKG9wdGlvbnMucGxhaW5PYmplY3RzIHx8IG9wdGlvbnMuYWxsb3dQcm90b3R5cGVzKSkgfHwgIWhhcy5jYWxsKE9iamVjdC5wcm90b3R5cGUsIHNvdXJjZSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbc291cmNlXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gW3RhcmdldCwgc291cmNlXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBbdGFyZ2V0XS5jb25jYXQoc291cmNlKTtcbiAgICB9XG5cbiAgICB2YXIgbWVyZ2VUYXJnZXQgPSB0YXJnZXQ7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSAmJiAhQXJyYXkuaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICAgIG1lcmdlVGFyZ2V0ID0gYXJyYXlUb09iamVjdCh0YXJnZXQsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkgJiYgQXJyYXkuaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICAgIHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgICAgICBpZiAoaGFzLmNhbGwodGFyZ2V0LCBpKSkge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRbaV0gJiYgdHlwZW9mIHRhcmdldFtpXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W2ldID0gbWVyZ2UodGFyZ2V0W2ldLCBpdGVtLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldFtpXSA9IGl0ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhzb3VyY2UpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gc291cmNlW2tleV07XG5cbiAgICAgICAgaWYgKGhhcy5jYWxsKGFjYywga2V5KSkge1xuICAgICAgICAgICAgYWNjW2tleV0gPSBtZXJnZShhY2Nba2V5XSwgdmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWNjW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIG1lcmdlVGFyZ2V0KTtcbn07XG5cbnZhciBhc3NpZ24gPSBmdW5jdGlvbiBhc3NpZ25TaW5nbGVTb3VyY2UodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc291cmNlKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywga2V5KSB7XG4gICAgICAgIGFjY1trZXldID0gc291cmNlW2tleV07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgdGFyZ2V0KTtcbn07XG5cbnZhciBkZWNvZGUgPSBmdW5jdGlvbiAoc3RyLCBkZWNvZGVyLCBjaGFyc2V0KSB7XG4gICAgdmFyIHN0cldpdGhvdXRQbHVzID0gc3RyLnJlcGxhY2UoL1xcKy9nLCAnICcpO1xuICAgIGlmIChjaGFyc2V0ID09PSAnaXNvLTg4NTktMScpIHtcbiAgICAgICAgLy8gdW5lc2NhcGUgbmV2ZXIgdGhyb3dzLCBubyB0cnkuLi5jYXRjaCBuZWVkZWQ6XG4gICAgICAgIHJldHVybiBzdHJXaXRob3V0UGx1cy5yZXBsYWNlKC8lWzAtOWEtZl17Mn0vZ2ksIHVuZXNjYXBlKTtcbiAgICB9XG4gICAgLy8gdXRmLThcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0cldpdGhvdXRQbHVzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBzdHJXaXRob3V0UGx1cztcbiAgICB9XG59O1xuXG52YXIgZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKHN0ciwgZGVmYXVsdEVuY29kZXIsIGNoYXJzZXQpIHtcbiAgICAvLyBUaGlzIGNvZGUgd2FzIG9yaWdpbmFsbHkgd3JpdHRlbiBieSBCcmlhbiBXaGl0ZSAobXNjZGV4KSBmb3IgdGhlIGlvLmpzIGNvcmUgcXVlcnlzdHJpbmcgbGlicmFyeS5cbiAgICAvLyBJdCBoYXMgYmVlbiBhZGFwdGVkIGhlcmUgZm9yIHN0cmljdGVyIGFkaGVyZW5jZSB0byBSRkMgMzk4NlxuICAgIGlmIChzdHIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgdmFyIHN0cmluZyA9IHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnID8gc3RyIDogU3RyaW5nKHN0cik7XG5cbiAgICBpZiAoY2hhcnNldCA9PT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgIHJldHVybiBlc2NhcGUoc3RyaW5nKS5yZXBsYWNlKC8ldVswLTlhLWZdezR9L2dpLCBmdW5jdGlvbiAoJDApIHtcbiAgICAgICAgICAgIHJldHVybiAnJTI2JTIzJyArIHBhcnNlSW50KCQwLnNsaWNlKDIpLCAxNikgKyAnJTNCJztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIG91dCA9ICcnO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBjID0gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgYyA9PT0gMHgyRCAvLyAtXG4gICAgICAgICAgICB8fCBjID09PSAweDJFIC8vIC5cbiAgICAgICAgICAgIHx8IGMgPT09IDB4NUYgLy8gX1xuICAgICAgICAgICAgfHwgYyA9PT0gMHg3RSAvLyB+XG4gICAgICAgICAgICB8fCAoYyA+PSAweDMwICYmIGMgPD0gMHgzOSkgLy8gMC05XG4gICAgICAgICAgICB8fCAoYyA+PSAweDQxICYmIGMgPD0gMHg1QSkgLy8gYS16XG4gICAgICAgICAgICB8fCAoYyA+PSAweDYxICYmIGMgPD0gMHg3QSkgLy8gQS1aXG4gICAgICAgICkge1xuICAgICAgICAgICAgb3V0ICs9IHN0cmluZy5jaGFyQXQoaSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjIDwgMHg4MCkge1xuICAgICAgICAgICAgb3V0ID0gb3V0ICsgaGV4VGFibGVbY107XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjIDwgMHg4MDApIHtcbiAgICAgICAgICAgIG91dCA9IG91dCArIChoZXhUYWJsZVsweEMwIHwgKGMgPj4gNildICsgaGV4VGFibGVbMHg4MCB8IChjICYgMHgzRildKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGMgPCAweEQ4MDAgfHwgYyA+PSAweEUwMDApIHtcbiAgICAgICAgICAgIG91dCA9IG91dCArIChoZXhUYWJsZVsweEUwIHwgKGMgPj4gMTIpXSArIGhleFRhYmxlWzB4ODAgfCAoKGMgPj4gNikgJiAweDNGKV0gKyBoZXhUYWJsZVsweDgwIHwgKGMgJiAweDNGKV0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpICs9IDE7XG4gICAgICAgIGMgPSAweDEwMDAwICsgKCgoYyAmIDB4M0ZGKSA8PCAxMCkgfCAoc3RyaW5nLmNoYXJDb2RlQXQoaSkgJiAweDNGRikpO1xuICAgICAgICBvdXQgKz0gaGV4VGFibGVbMHhGMCB8IChjID4+IDE4KV1cbiAgICAgICAgICAgICsgaGV4VGFibGVbMHg4MCB8ICgoYyA+PiAxMikgJiAweDNGKV1cbiAgICAgICAgICAgICsgaGV4VGFibGVbMHg4MCB8ICgoYyA+PiA2KSAmIDB4M0YpXVxuICAgICAgICAgICAgKyBoZXhUYWJsZVsweDgwIHwgKGMgJiAweDNGKV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbn07XG5cbnZhciBjb21wYWN0ID0gZnVuY3Rpb24gY29tcGFjdCh2YWx1ZSkge1xuICAgIHZhciBxdWV1ZSA9IFt7IG9iajogeyBvOiB2YWx1ZSB9LCBwcm9wOiAnbycgfV07XG4gICAgdmFyIHJlZnMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBxdWV1ZVtpXTtcbiAgICAgICAgdmFyIG9iaiA9IGl0ZW0ub2JqW2l0ZW0ucHJvcF07XG5cbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGtleXMubGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2pdO1xuICAgICAgICAgICAgdmFyIHZhbCA9IG9ialtrZXldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIHZhbCAhPT0gbnVsbCAmJiByZWZzLmluZGV4T2YodmFsKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKHsgb2JqOiBvYmosIHByb3A6IGtleSB9KTtcbiAgICAgICAgICAgICAgICByZWZzLnB1c2godmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBhY3RRdWV1ZShxdWV1ZSk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG59O1xuXG52YXIgaXNSZWdFeHAgPSBmdW5jdGlvbiBpc1JlZ0V4cChvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufTtcblxudmFyIGlzQnVmZmVyID0gZnVuY3Rpb24gaXNCdWZmZXIob2JqKSB7XG4gICAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuICEhKG9iai5jb25zdHJ1Y3RvciAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iaikpO1xufTtcblxudmFyIGNvbWJpbmUgPSBmdW5jdGlvbiBjb21iaW5lKGEsIGIpIHtcbiAgICByZXR1cm4gW10uY29uY2F0KGEsIGIpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgYXJyYXlUb09iamVjdDogYXJyYXlUb09iamVjdCxcbiAgICBhc3NpZ246IGFzc2lnbixcbiAgICBjb21iaW5lOiBjb21iaW5lLFxuICAgIGNvbXBhY3Q6IGNvbXBhY3QsXG4gICAgZGVjb2RlOiBkZWNvZGUsXG4gICAgZW5jb2RlOiBlbmNvZGUsXG4gICAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICAgIGlzUmVnRXhwOiBpc1JlZ0V4cCxcbiAgICBtZXJnZTogbWVyZ2Vcbn07XG4iLCJjb25zdCBxcyA9IHJlcXVpcmUoJ3FzJyk7XHJcblxyXG5BZGVxdWEuYWN0aW9ucy5kZXNpcmVzID0ge307XHJcblxyXG5BZGVxdWEuYWN0aW9ucy5kZXNpcmVzLm5ld0Rlc2lyZSA9IGZ1bmN0aW9uKGRlc2lyZSl7XHJcbiAgICBkZXNpcmUgPSBPYmplY3QuYXNzaWduKGRlc2lyZSwge3ZhbGlkYXRlZDogZmFsc2UsIHJlbW92ZWQ6IGZhbHNlfSk7XHJcblxyXG4gICAgY29uc3QgZGVzaXJlcyA9IEFkZXF1YS5zdG9yYWdlLmRlc2lyZXMgfHwgW107XHJcbiAgICBjb25zdCBleGlzdCA9IChkZXNpcmVzLmZpbHRlcihpdGVtID0+IGl0ZW0ubmFtZSA9PT0gZGVzaXJlLm5hbWUpKS5sZW5ndGg7XHJcblxyXG4gICAgaWYoIWV4aXN0KSB7XHJcbiAgICAgICAgZGVzaXJlcy5wdXNoKGRlc2lyZSk7XHJcbiAgICAgICAgQWRlcXVhLnN0b3JhZ2UuZGVzaXJlcyA9IGRlc2lyZXM7XHJcbiAgICAgICAgQWRlcXVhLnNldFN0b3JhZ2Uoe30pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuQWRlcXVhLmFjdGlvbnMuZGVzaXJlcy5jaGVja0Rlc2lyZSA9IGZ1bmN0aW9uKHVybCl7XHJcbiAgICBBZGVxdWEuc3RvcmFnZS5kZXNpcmVSdWxlcyA9IHtcclxuICAgICAgICBcImxlYm9uY29pbi5mclwiOiB7XHJcbiAgICAgICAgICAgIHJ1bGVzOiBbXHJcbiAgICAgICAgICAgICAgICB7cGFyYW1ldGVyOiBcInRleHRcIiwgY2F0ZWdvcnk6IFwibWFpbl9zZWFyY2hcIn1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaG9zdG5hbWUgPSBBZGVxdWEuaG9zdG5hbWUodXJsKTtcclxuXHJcbiAgICBjb25zdCBxdWVyeSA9IHVybC5zcGxpdCgnLycpLnBvcCgpO1xyXG4gICAgY29uc3QgcGFyYW1ldGVycyA9IHFzLnBhcnNlKHF1ZXJ5LCB7IGlnbm9yZVF1ZXJ5UHJlZml4OiB0cnVlIH0pO1xyXG5cclxuICAgIGNvbnN0IGRlc2lyZSA9IHtuYW1lOiBBZGVxdWEuaG9zdG5hbWUodXJsKX07XHJcblxyXG4gICAgY29uc29sZS5sb2cocGFyYW1ldGVycyk7XHJcblxyXG4gICAgY29uc3QgcnVsZXMgPSAoQWRlcXVhLnN0b3JhZ2UuZGVzaXJlUnVsZXNbaG9zdG5hbWVdIHx8IHt9KS5ydWxlcyB8fCBbXTtcclxuXHJcbiAgICBmb3IoY29uc3QgcnVsZSBvZiBydWxlcyl7XHJcbiAgICAgICAgaWYocnVsZS5jYXRlZ29yeSA9PT0gXCJtYWluX3NlYXJjaFwiICYmIHBhcmFtZXRlcnNbcnVsZS5wYXJhbWV0ZXJdKSB7XHJcbiAgICAgICAgICAgIGRlc2lyZS5uYW1lID0gcGFyYW1ldGVyc1tydWxlLnBhcmFtZXRlcl07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGRlc2lyZSk7XHJcblxyXG4gICAgQWRlcXVhLmFjdGlvbnMuZGVzaXJlcy5uZXdEZXNpcmUoZGVzaXJlKTtcclxufTtcclxuXHJcbkFkZXF1YS5hY3Rpb25zLmRlc2lyZXMuc2V0RGVzaXJlID0gZnVuY3Rpb24oZGVzaXJlKXtcclxuICAgIGZvciAoY29uc3QgaW5kZXggaW4gQWRlcXVhLnN0b3JhZ2UuZGVzaXJlcykge1xyXG4gICAgICAgIGlmIChBZGVxdWEuc3RvcmFnZS5kZXNpcmVzW2luZGV4XS5uYW1lID09PSBkZXNpcmUubmFtZSkge1xyXG4gICAgICAgICAgICBBZGVxdWEuc3RvcmFnZS5kZXNpcmVzW2luZGV4XSA9IGRlc2lyZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=