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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/actions/consent/consent.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/base-64/base64.js":
/*!****************************************!*\
  !*** ./node_modules/base-64/base64.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! http://mths.be/base64 v0.1.0 by @mathias | MIT license */
;

(function (root) {
  // Detect free variables `exports`.
  var freeExports =  true && exports; // Detect free variable `module`.

  var freeModule =  true && module && module.exports == freeExports && module; // Detect free variable `global`, from Node.js or Browserified code, and use
  // it as `root`.

  var freeGlobal = typeof global == 'object' && global;

  if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
    root = freeGlobal;
  }
  /*--------------------------------------------------------------------------*/


  var InvalidCharacterError = function (message) {
    this.message = message;
  };

  InvalidCharacterError.prototype = new Error();
  InvalidCharacterError.prototype.name = 'InvalidCharacterError';

  var error = function (message) {
    // Note: the error messages used throughout this file match those used by
    // the native `atob`/`btoa` implementation in Chromium.
    throw new InvalidCharacterError(message);
  };

  var TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'; // http://whatwg.org/html/common-microsyntaxes.html#space-character

  var REGEX_SPACE_CHARACTERS = /[\t\n\f\r ]/g; // `decode` is designed to be fully compatible with `atob` as described in the
  // HTML Standard. http://whatwg.org/html/webappapis.html#dom-windowbase64-atob
  // The optimized base64-decoding algorithm used is based on @atk’s excellent
  // implementation. https://gist.github.com/atk/1020396

  var decode = function (input) {
    input = String(input).replace(REGEX_SPACE_CHARACTERS, '');
    var length = input.length;

    if (length % 4 == 0) {
      input = input.replace(/==?$/, '');
      length = input.length;
    }

    if (length % 4 == 1 || // http://whatwg.org/C#alphanumeric-ascii-characters
    /[^+a-zA-Z0-9/]/.test(input)) {
      error('Invalid character: the string to be decoded is not correctly encoded.');
    }

    var bitCounter = 0;
    var bitStorage;
    var buffer;
    var output = '';
    var position = -1;

    while (++position < length) {
      buffer = TABLE.indexOf(input.charAt(position));
      bitStorage = bitCounter % 4 ? bitStorage * 64 + buffer : buffer; // Unless this is the first of a group of 4 characters…

      if (bitCounter++ % 4) {
        // …convert the first 8 bits to a single ASCII character.
        output += String.fromCharCode(0xFF & bitStorage >> (-2 * bitCounter & 6));
      }
    }

    return output;
  }; // `encode` is designed to be fully compatible with `btoa` as described in the
  // HTML Standard: http://whatwg.org/html/webappapis.html#dom-windowbase64-btoa


  var encode = function (input) {
    input = String(input);

    if (/[^\0-\xFF]/.test(input)) {
      // Note: no need to special-case astral symbols here, as surrogates are
      // matched, and the input is supposed to only contain ASCII anyway.
      error('The string to be encoded contains characters outside of the ' + 'Latin1 range.');
    }

    var padding = input.length % 3;
    var output = '';
    var position = -1;
    var a;
    var b;
    var c;
    var d;
    var buffer; // Make sure any padding is handled outside of the loop.

    var length = input.length - padding;

    while (++position < length) {
      // Read three bytes, i.e. 24 bits.
      a = input.charCodeAt(position) << 16;
      b = input.charCodeAt(++position) << 8;
      c = input.charCodeAt(++position);
      buffer = a + b + c; // Turn the 24 bits into four chunks of 6 bits each, and append the
      // matching character for each of them to the output.

      output += TABLE.charAt(buffer >> 18 & 0x3F) + TABLE.charAt(buffer >> 12 & 0x3F) + TABLE.charAt(buffer >> 6 & 0x3F) + TABLE.charAt(buffer & 0x3F);
    }

    if (padding == 2) {
      a = input.charCodeAt(position) << 8;
      b = input.charCodeAt(++position);
      buffer = a + b;
      output += TABLE.charAt(buffer >> 10) + TABLE.charAt(buffer >> 4 & 0x3F) + TABLE.charAt(buffer << 2 & 0x3F) + '=';
    } else if (padding == 1) {
      buffer = input.charCodeAt(position);
      output += TABLE.charAt(buffer >> 2) + TABLE.charAt(buffer << 4 & 0x3F) + '==';
    }

    return output;
  };

  var base64 = {
    'encode': encode,
    'decode': decode,
    'version': '0.1.0'
  }; // Some AMD build optimizers, like r.js, check for specific condition patterns
  // like the following:

  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return base64;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var key; }
})(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/consent-string/dist/consent-string.js":
/*!************************************************************!*\
  !*** ./node_modules/consent-string/dist/consent-string.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var _require = __webpack_require__(/*! ./encode */ "./node_modules/consent-string/dist/encode.js"),
    encodeConsentString = _require.encodeConsentString,
    _getMaxVendorId = _require.getMaxVendorId,
    encodeVendorIdsToBits = _require.encodeVendorIdsToBits,
    encodePurposeIdsToBits = _require.encodePurposeIdsToBits;

var _require2 = __webpack_require__(/*! ./decode */ "./node_modules/consent-string/dist/decode.js"),
    decodeConsentString = _require2.decodeConsentString;

var _require3 = __webpack_require__(/*! ./utils/definitions */ "./node_modules/consent-string/dist/utils/definitions.js"),
    vendorVersionMap = _require3.vendorVersionMap;
/**
 * Regular expression for validating
 */


var consentLanguageRegexp = /^[a-z]{2}$/;

var ConsentString = function () {
  /**
   * Initialize a new ConsentString object
   *
   * @param {string} baseString An existing consent string to parse and use for our initial values
   */
  function ConsentString() {
    var baseString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, ConsentString);

    this.created = new Date();
    this.lastUpdated = new Date();
    /**
     * Version number of consent string specification
     *
     * @type {integer}
     */

    this.version = 1;
    /**
     * Vendor list with format from https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/master/Draft_for_Public_Comment_Transparency%20%26%20Consent%20Framework%20-%20cookie%20and%20vendor%20list%20format%20specification%20v1.0a.pdf
     *
     * @type {object}
     */

    this.vendorList = null;
    /**
     * Version of the vendor list used for the purposes and vendors
     *
     * @type {integer}
     */

    this.vendorListVersion = null;
    /**
     * The unique ID of the CMP that last modified the consent string
     *
     * @type {integer}
     */

    this.cmpId = null;
    /**
     * Version of the code used by the CMP when collecting consent
     *
     * @type {integer}
     */

    this.cmpVersion = null;
    /**
     * ID of the screen used by CMP when collecting consent
     *
     * @type {integer}
     */

    this.consentScreen = null;
    /**
     * Two-letter ISO639-1 code (en, fr, de, etc.) of the language that the CMP asked consent in
     *
     * @type {string}
     */

    this.consentLanguage = null;
    /**
     * List of purpose IDs that the user has given consent to
     *
     * @type {integer[]}
     */

    this.allowedPurposeIds = [];
    /**
     * List of vendor IDs that the user has given consent to
     *
     * @type {integer[]}
     */

    this.allowedVendorIds = []; // Decode the base string

    if (baseString) {
      Object.assign(this, decodeConsentString(baseString));
    }
  }
  /**
   * Get the web-safe, base64-encoded consent string
   *
   * @return {string} Web-safe, base64-encoded consent string
   */


  _createClass(ConsentString, [{
    key: 'getConsentString',
    value: function getConsentString() {
      var updateDate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (!this.vendorList) {
        throw new Error('ConsentString - A vendor list is required to encode a consent string');
      }

      if (updateDate === true) {
        this.lastUpdated = new Date();
      }

      return encodeConsentString({
        version: this.getVersion(),
        vendorList: this.vendorList,
        allowedPurposeIds: this.allowedPurposeIds,
        allowedVendorIds: this.allowedVendorIds,
        created: this.created,
        lastUpdated: this.lastUpdated,
        cmpId: this.cmpId,
        cmpVersion: this.cmpVersion,
        consentScreen: this.consentScreen,
        consentLanguage: this.consentLanguage,
        vendorListVersion: this.vendorListVersion
      });
    }
    /**
     * Get the max vendorId
     *
     * @return {number} maxVendorId from the vendorList provided
     */

  }, {
    key: 'getMaxVendorId',
    value: function getMaxVendorId() {
      return _getMaxVendorId(this.vendorList.vendors);
    }
    /**
     * get the consents in a bit string.  This is to fulfill the in-app requirement
     *
     * @return {string} a bit string of all of the vendor consent data
     */

  }, {
    key: 'getParsedVendorConsents',
    value: function getParsedVendorConsents() {
      return encodeVendorIdsToBits(_getMaxVendorId(this.vendorList.vendors), this.allowedVendorIds);
    }
    /**
     * get the consents in a bit string.  This is to fulfill the in-app requirement
     *
     * @return {string} a bit string of all of the vendor consent data
     */

  }, {
    key: 'getParsedPurposeConsents',
    value: function getParsedPurposeConsents() {
      return encodePurposeIdsToBits(this.vendorList.purposes, this.allowedPurposeIds);
    }
    /**
     * Get the web-safe, base64-encoded metadata string
     *
     * @return {string} Web-safe, base64-encoded metadata string
     */

  }, {
    key: 'getMetadataString',
    value: function getMetadataString() {
      return encodeConsentString({
        version: this.getVersion(),
        created: this.created,
        lastUpdated: this.lastUpdated,
        cmpId: this.cmpId,
        cmpVersion: this.cmpVersion,
        consentScreen: this.consentScreen,
        vendorListVersion: this.vendorListVersion
      });
    }
    /**
     * Decode the web-safe, base64-encoded metadata string
     * @param {string} encodedMetadata Web-safe, base64-encoded metadata string
     * @return {object} decoded metadata
     */

  }, {
    key: 'getVersion',

    /**
     * Get the version number that this consent string specification adheres to
     *
     * @return {integer} Version number of consent string specification
     */
    value: function getVersion() {
      return this.version;
    }
    /**
     * Get the version of the vendor list
     *
     * @return {integer} Vendor list version
     */

  }, {
    key: 'getVendorListVersion',
    value: function getVendorListVersion() {
      return this.vendorListVersion;
    }
    /**
     * Set the vendors list to use when generating the consent string
     *
     * The expected format is the one from https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/master/Draft_for_Public_Comment_Transparency%20%26%20Consent%20Framework%20-%20cookie%20and%20vendor%20list%20format%20specification%20v1.0a.pdf
     *
     * @param {object} vendorList Vendor list with format from https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/master/Draft_for_Public_Comment_Transparency%20%26%20Consent%20Framework%20-%20cookie%20and%20vendor%20list%20format%20specification%20v1.0a.pdf
     */

  }, {
    key: 'setGlobalVendorList',
    value: function setGlobalVendorList(vendorList) {
      if ((typeof vendorList === 'undefined' ? 'undefined' : _typeof(vendorList)) !== 'object') {
        throw new Error('ConsentString - You must provide an object when setting the global vendor list');
      }

      if (!vendorList.vendorListVersion || !Array.isArray(vendorList.purposes) || !Array.isArray(vendorList.vendors)) {
        // The provided vendor list does not look valid
        throw new Error('ConsentString - The provided vendor list does not respect the schema from the IAB EU’s GDPR Consent and Transparency Framework');
      } // Cloning the GVL
      // It's important as we might transform it and don't want to modify objects that we do not own


      this.vendorList = {
        vendorListVersion: vendorList.vendorListVersion,
        lastUpdated: vendorList.lastUpdated,
        purposes: vendorList.purposes,
        features: vendorList.features,
        // Clone the list and sort the vendors by ID (it breaks our range generation algorithm if they are not sorted)
        vendors: vendorList.vendors.slice(0).sort(function (firstVendor, secondVendor) {
          return firstVendor.id < secondVendor.id ? -1 : 1;
        })
      };
      this.vendorListVersion = vendorList.vendorListVersion;
    }
    /**
     * Set the ID of the Consent Management Platform that last modified the consent string
     *
     * Every CMP is assigned a unique ID by the IAB EU that must be provided here before changing any other value in the consent string.
     *
     * @param {integer} id CMP ID
     */

  }, {
    key: 'setCmpId',
    value: function setCmpId(id) {
      this.cmpId = id;
    }
    /**
     * Get the ID of the Consent Management Platform from the consent string
     *
     * @return {integer}
     */

  }, {
    key: 'getCmpId',
    value: function getCmpId() {
      return this.cmpId;
    }
    /**
     * Set the version of the Consent Management Platform that last modified the consent string
     *
     * This version number references the CMP code running when collecting the user consent.
     *
     * @param {integer} version Version
     */

  }, {
    key: 'setCmpVersion',
    value: function setCmpVersion(version) {
      this.cmpVersion = version;
    }
    /**
     * Get the verison of the Consent Management Platform that last modified the consent string
     *
     * @return {integer}
     */

  }, {
    key: 'getCmpVersion',
    value: function getCmpVersion() {
      return this.cmpVersion;
    }
    /**
     * Set the Consent Management Platform screen ID that collected the user consent
     *
     * This screen ID references a unique view in the CMP that was displayed to the user to collect consent
     *
     * @param {*} screenId Screen ID
     */

  }, {
    key: 'setConsentScreen',
    value: function setConsentScreen(screenId) {
      this.consentScreen = screenId;
    }
    /**
     * Get the Consent Management Platform screen ID that collected the user consent
     *
     * @return {integer}
     */

  }, {
    key: 'getConsentScreen',
    value: function getConsentScreen() {
      return this.consentScreen;
    }
    /**
     * Set the language that the CMP asked the consent in
     *
     * @param {string} language Two-letter ISO639-1 code (en, fr, de, etc.)
     */

  }, {
    key: 'setConsentLanguage',
    value: function setConsentLanguage(language) {
      if (consentLanguageRegexp.test(language) === false) {
        throw new Error('ConsentString - The consent language must be a two-letter ISO639-1 code (en, fr, de, etc.)');
      }

      this.consentLanguage = language;
    }
    /**
     * Get the language that the CMP asked consent in
     *
     * @return {string} Two-letter ISO639-1 code (en, fr, de, etc.)
     */

  }, {
    key: 'getConsentLanguage',
    value: function getConsentLanguage() {
      return this.consentLanguage;
    }
    /**
     * Set the list of purpose IDs that the user has given consent to
     *
     * @param {integer[]} purposeIds An array of integers that map to the purposes defined in the vendor list. Purposes included in the array are purposes that the user has given consent to
     */

  }, {
    key: 'setPurposesAllowed',
    value: function setPurposesAllowed(purposeIds) {
      this.allowedPurposeIds = purposeIds;
    }
    /**
     * Get the list of purpose IDs that the user has given consent to
     *
     * @return {integer[]}
     */

  }, {
    key: 'getPurposesAllowed',
    value: function getPurposesAllowed() {
      return this.allowedPurposeIds;
    }
    /**
     * Set the consent status of a user for a given purpose
     *
     * @param {integer} purposeId The ID (from the vendor list) of the purpose to update
     * @param {boolean} value Consent status
     */

  }, {
    key: 'setPurposeAllowed',
    value: function setPurposeAllowed(purposeId, value) {
      var purposeIndex = this.allowedPurposeIds.indexOf(purposeId);

      if (value === true) {
        if (purposeIndex === -1) {
          this.allowedPurposeIds.push(purposeId);
        }
      } else if (value === false) {
        if (purposeIndex !== -1) {
          this.allowedPurposeIds.splice(purposeIndex, 1);
        }
      }
    }
    /**
     * Check if the user has given consent for a specific purpose
     *
     * @param {integer} purposeId
     *
     * @return {boolean}
     */

  }, {
    key: 'isPurposeAllowed',
    value: function isPurposeAllowed(purposeId) {
      return this.allowedPurposeIds.indexOf(purposeId) !== -1;
    }
    /**
     * Set the list of vendor IDs that the user has given consent to
     *
     * @param {integer[]} vendorIds An array of integers that map to the vendors defined in the vendor list. Vendors included in the array are vendors that the user has given consent to
     */

  }, {
    key: 'setVendorsAllowed',
    value: function setVendorsAllowed(vendorIds) {
      this.allowedVendorIds = vendorIds;
    }
    /**
     * Get the list of vendor IDs that the user has given consent to
     *
     * @return {integer[]}
     */

  }, {
    key: 'getVendorsAllowed',
    value: function getVendorsAllowed() {
      return this.allowedVendorIds;
    }
    /**
     * Set the consent status of a user for a given vendor
     *
     * @param {integer} vendorId The ID (from the vendor list) of the vendor to update
     * @param {boolean} value Consent status
     */

  }, {
    key: 'setVendorAllowed',
    value: function setVendorAllowed(vendorId, value) {
      var vendorIndex = this.allowedVendorIds.indexOf(vendorId);

      if (value === true) {
        if (vendorIndex === -1) {
          this.allowedVendorIds.push(vendorId);
        }
      } else if (value === false) {
        if (vendorIndex !== -1) {
          this.allowedVendorIds.splice(vendorIndex, 1);
        }
      }
    }
    /**
     * Check if the user has given consent for a specific vendor
     *
     * @param {integer} vendorId
     *
     * @return {boolean}
     */

  }, {
    key: 'isVendorAllowed',
    value: function isVendorAllowed(vendorId) {
      return this.allowedVendorIds.indexOf(vendorId) !== -1;
    }
  }], [{
    key: 'decodeMetadataString',
    value: function decodeMetadataString(encodedMetadata) {
      var decodedString = decodeConsentString(encodedMetadata);
      var metadata = {};
      vendorVersionMap[decodedString.version].metadataFields.forEach(function (field) {
        metadata[field] = decodedString[field];
      });
      return metadata;
    }
  }]);

  return ConsentString;
}();

module.exports = {
  ConsentString: ConsentString
};

/***/ }),

/***/ "./node_modules/consent-string/dist/decode.js":
/*!****************************************************!*\
  !*** ./node_modules/consent-string/dist/decode.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(/*! ./utils/bits */ "./node_modules/consent-string/dist/utils/bits.js"),
    decodeBitsToIds = _require.decodeBitsToIds,
    decodeFromBase64 = _require.decodeFromBase64;
/**
 * Decode consent data from a web-safe base64-encoded string
 *
 * @param {string} consentString
 */


function decodeConsentString(consentString) {
  var _decodeFromBase = decodeFromBase64(consentString),
      version = _decodeFromBase.version,
      cmpId = _decodeFromBase.cmpId,
      vendorListVersion = _decodeFromBase.vendorListVersion,
      purposeIdBitString = _decodeFromBase.purposeIdBitString,
      maxVendorId = _decodeFromBase.maxVendorId,
      created = _decodeFromBase.created,
      lastUpdated = _decodeFromBase.lastUpdated,
      isRange = _decodeFromBase.isRange,
      defaultConsent = _decodeFromBase.defaultConsent,
      vendorIdBitString = _decodeFromBase.vendorIdBitString,
      vendorRangeList = _decodeFromBase.vendorRangeList,
      cmpVersion = _decodeFromBase.cmpVersion,
      consentScreen = _decodeFromBase.consentScreen,
      consentLanguage = _decodeFromBase.consentLanguage;

  var consentStringData = {
    version: version,
    cmpId: cmpId,
    vendorListVersion: vendorListVersion,
    allowedPurposeIds: decodeBitsToIds(purposeIdBitString),
    maxVendorId: maxVendorId,
    created: created,
    lastUpdated: lastUpdated,
    cmpVersion: cmpVersion,
    consentScreen: consentScreen,
    consentLanguage: consentLanguage
  };

  if (isRange) {
    /* eslint no-shadow: off */
    var idMap = vendorRangeList.reduce(function (acc, _ref) {
      var isRange = _ref.isRange,
          startVendorId = _ref.startVendorId,
          endVendorId = _ref.endVendorId;
      var lastVendorId = isRange ? endVendorId : startVendorId;

      for (var i = startVendorId; i <= lastVendorId; i += 1) {
        acc[i] = true;
      }

      return acc;
    }, {});
    consentStringData.allowedVendorIds = [];

    for (var i = 1; i <= maxVendorId; i += 1) {
      if (defaultConsent && !idMap[i] || !defaultConsent && idMap[i]) {
        if (consentStringData.allowedVendorIds.indexOf(i) === -1) {
          consentStringData.allowedVendorIds.push(i);
        }
      }
    }
  } else {
    consentStringData.allowedVendorIds = decodeBitsToIds(vendorIdBitString);
  }

  return consentStringData;
}

module.exports = {
  decodeConsentString: decodeConsentString
};

/***/ }),

/***/ "./node_modules/consent-string/dist/encode.js":
/*!****************************************************!*\
  !*** ./node_modules/consent-string/dist/encode.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _require = __webpack_require__(/*! ./utils/bits */ "./node_modules/consent-string/dist/utils/bits.js"),
    encodeToBase64 = _require.encodeToBase64,
    padRight = _require.padRight;
/**
 * Encode a list of vendor IDs into bits
 *
 * @param {integer} maxVendorId Highest vendor ID in the vendor list
 * @param {integer[]} allowedVendorIds Vendors that the user has given consent to
 */


function encodeVendorIdsToBits(maxVendorId) {
  var allowedVendorIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var vendorString = '';

  for (var id = 1; id <= maxVendorId; id += 1) {
    vendorString += allowedVendorIds.indexOf(id) !== -1 ? '1' : '0';
  }

  return padRight(vendorString, Math.max(0, maxVendorId - vendorString.length));
}
/**
 * Encode a list of purpose IDs into bits
 *
 * @param {*} purposes List of purposes from the vendor list
 * @param {*} allowedPurposeIds List of purpose IDs that the user has given consent to
 */


function encodePurposeIdsToBits(purposes) {
  var allowedPurposeIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Set();
  var maxPurposeId = 0;

  for (var i = 0; i < purposes.length; i += 1) {
    maxPurposeId = Math.max(maxPurposeId, purposes[i].id);
  }

  for (var _i = 0; _i < allowedPurposeIds.length; _i += 1) {
    maxPurposeId = Math.max(maxPurposeId, allowedPurposeIds[_i]);
  }

  var purposeString = '';

  for (var id = 1; id <= maxPurposeId; id += 1) {
    purposeString += allowedPurposeIds.indexOf(id) !== -1 ? '1' : '0';
  }

  return purposeString;
}
/**
 * Convert a list of vendor IDs to ranges
 *
 * @param {object[]} vendors List of vendors from the vendor list (important: this list must to be sorted by ID)
 * @param {integer[]} allowedVendorIds List of vendor IDs that the user has given consent to
 */


function convertVendorsToRanges(vendors, allowedVendorIds) {
  var range = [];
  var ranges = [];
  var idsInList = vendors.map(function (vendor) {
    return vendor.id;
  });

  for (var index = 0; index < vendors.length; index += 1) {
    var id = vendors[index].id;

    if (allowedVendorIds.indexOf(id) !== -1) {
      range.push(id);
    } // Do we need to close the current range?


    if ((allowedVendorIds.indexOf(id) === -1 // The vendor we are evaluating is not allowed
    || index === vendors.length - 1 // There is no more vendor to evaluate
    || idsInList.indexOf(id + 1) === -1 // There is no vendor after this one (ie there is a gap in the vendor IDs) ; we need to stop here to avoid including vendors that do not have consent
    ) && range.length) {
      var startVendorId = range.shift();
      var endVendorId = range.pop();
      range = [];
      ranges.push({
        isRange: typeof endVendorId === 'number',
        startVendorId: startVendorId,
        endVendorId: endVendorId
      });
    }
  }

  return ranges;
}
/**
 * Get maxVendorId from the list of vendors and return that id
 *
 * @param {object} vendors
 */


function getMaxVendorId(vendors) {
  // Find the max vendor ID from the vendor list
  var maxVendorId = 0;
  vendors.forEach(function (vendor) {
    if (vendor.id > maxVendorId) {
      maxVendorId = vendor.id;
    }
  });
  return maxVendorId;
}
/**
 * Encode consent data into a web-safe base64-encoded string
 *
 * @param {object} consentData Data to include in the string (see `utils/definitions.js` for the list of fields)
 */


function encodeConsentString(consentData) {
  var maxVendorId = consentData.maxVendorId;
  var _consentData$vendorLi = consentData.vendorList,
      vendorList = _consentData$vendorLi === undefined ? {} : _consentData$vendorLi,
      allowedPurposeIds = consentData.allowedPurposeIds,
      allowedVendorIds = consentData.allowedVendorIds;
  var _vendorList$vendors = vendorList.vendors,
      vendors = _vendorList$vendors === undefined ? [] : _vendorList$vendors,
      _vendorList$purposes = vendorList.purposes,
      purposes = _vendorList$purposes === undefined ? [] : _vendorList$purposes; // if no maxVendorId is in the ConsentData, get it

  if (!maxVendorId) {
    maxVendorId = getMaxVendorId(vendors);
  } // Encode the data with and without ranges and return the smallest encoded payload


  var noRangesData = encodeToBase64(_extends({}, consentData, {
    maxVendorId: maxVendorId,
    purposeIdBitString: encodePurposeIdsToBits(purposes, allowedPurposeIds),
    isRange: false,
    vendorIdBitString: encodeVendorIdsToBits(maxVendorId, allowedVendorIds)
  }));
  var vendorRangeList = convertVendorsToRanges(vendors, allowedVendorIds);
  var rangesData = encodeToBase64(_extends({}, consentData, {
    maxVendorId: maxVendorId,
    purposeIdBitString: encodePurposeIdsToBits(purposes, allowedPurposeIds),
    isRange: true,
    defaultConsent: false,
    numEntries: vendorRangeList.length,
    vendorRangeList: vendorRangeList
  }));
  return noRangesData.length < rangesData.length ? noRangesData : rangesData;
}

module.exports = {
  convertVendorsToRanges: convertVendorsToRanges,
  encodeConsentString: encodeConsentString,
  getMaxVendorId: getMaxVendorId,
  encodeVendorIdsToBits: encodeVendorIdsToBits,
  encodePurposeIdsToBits: encodePurposeIdsToBits
};

/***/ }),

/***/ "./node_modules/consent-string/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/consent-string/dist/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(/*! ./consent-string */ "./node_modules/consent-string/dist/consent-string.js"),
    ConsentString = _require.ConsentString;

var _require2 = __webpack_require__(/*! ./decode */ "./node_modules/consent-string/dist/decode.js"),
    decodeConsentString = _require2.decodeConsentString;

var _require3 = __webpack_require__(/*! ./encode */ "./node_modules/consent-string/dist/encode.js"),
    encodeConsentString = _require3.encodeConsentString;

module.exports = {
  ConsentString: ConsentString,
  decodeConsentString: decodeConsentString,
  encodeConsentString: encodeConsentString
};

/***/ }),

/***/ "./node_modules/consent-string/dist/utils/bits.js":
/*!********************************************************!*\
  !*** ./node_modules/consent-string/dist/utils/bits.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint no-use-before-define: off */

var base64 = __webpack_require__(/*! base-64 */ "./node_modules/base-64/base64.js");

var _require = __webpack_require__(/*! ./definitions */ "./node_modules/consent-string/dist/utils/definitions.js"),
    versionNumBits = _require.versionNumBits,
    vendorVersionMap = _require.vendorVersionMap;

function repeat(count) {
  var string = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0';
  var padString = '';

  for (var i = 0; i < count; i += 1) {
    padString += string;
  }

  return padString;
}

function padLeft(string, padding) {
  return repeat(Math.max(0, padding)) + string;
}

function padRight(string, padding) {
  return string + repeat(Math.max(0, padding));
}

function encodeIntToBits(number, numBits) {
  var bitString = '';

  if (typeof number === 'number' && !isNaN(number)) {
    bitString = parseInt(number, 10).toString(2);
  } // Pad the string if not filling all bits


  if (numBits >= bitString.length) {
    bitString = padLeft(bitString, numBits - bitString.length);
  } // Truncate the string if longer than the number of bits


  if (bitString.length > numBits) {
    bitString = bitString.substring(0, numBits);
  }

  return bitString;
}

function encodeBoolToBits(value) {
  return encodeIntToBits(value === true ? 1 : 0, 1);
}

function encodeDateToBits(date, numBits) {
  if (date instanceof Date) {
    return encodeIntToBits(date.getTime() / 100, numBits);
  }

  return encodeIntToBits(date, numBits);
}

function encodeLetterToBits(letter, numBits) {
  return encodeIntToBits(letter.toUpperCase().charCodeAt(0) - 65, numBits);
}

function encodeLanguageToBits(language) {
  var numBits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 12;
  return encodeLetterToBits(language.slice(0, 1), numBits / 2) + encodeLetterToBits(language.slice(1), numBits / 2);
}

function decodeBitsToInt(bitString, start, length) {
  return parseInt(bitString.substr(start, length), 2);
}

function decodeBitsToDate(bitString, start, length) {
  return new Date(decodeBitsToInt(bitString, start, length) * 100);
}

function decodeBitsToBool(bitString, start) {
  return parseInt(bitString.substr(start, 1), 2) === 1;
}

function decodeBitsToLetter(bitString) {
  var letterCode = decodeBitsToInt(bitString);
  return String.fromCharCode(letterCode + 65).toLowerCase();
}

function decodeBitsToLanguage(bitString, start, length) {
  var languageBitString = bitString.substr(start, length);
  return decodeBitsToLetter(languageBitString.slice(0, length / 2)) + decodeBitsToLetter(languageBitString.slice(length / 2));
}

function encodeField(_ref) {
  var input = _ref.input,
      field = _ref.field;
  var name = field.name,
      type = field.type,
      numBits = field.numBits,
      encoder = field.encoder,
      validator = field.validator;

  if (typeof validator === 'function') {
    if (!validator(input)) {
      return '';
    }
  }

  if (typeof encoder === 'function') {
    return encoder(input);
  }

  var bitCount = typeof numBits === 'function' ? numBits(input) : numBits;
  var inputValue = input[name];
  var fieldValue = inputValue === null || inputValue === undefined ? '' : inputValue;

  switch (type) {
    case 'int':
      return encodeIntToBits(fieldValue, bitCount);

    case 'bool':
      return encodeBoolToBits(fieldValue);

    case 'date':
      return encodeDateToBits(fieldValue, bitCount);

    case 'bits':
      return padRight(fieldValue, bitCount - fieldValue.length).substring(0, bitCount);

    case 'list':
      return fieldValue.reduce(function (acc, listValue) {
        return acc + encodeFields({
          input: listValue,
          fields: field.fields
        });
      }, '');

    case 'language':
      return encodeLanguageToBits(fieldValue, bitCount);

    default:
      throw new Error('ConsentString - Unknown field type ' + type + ' for encoding');
  }
}

function encodeFields(_ref2) {
  var input = _ref2.input,
      fields = _ref2.fields;
  return fields.reduce(function (acc, field) {
    acc += encodeField({
      input: input,
      field: field
    });
    return acc;
  }, '');
}

function decodeField(_ref3) {
  var input = _ref3.input,
      output = _ref3.output,
      startPosition = _ref3.startPosition,
      field = _ref3.field;
  var type = field.type,
      numBits = field.numBits,
      decoder = field.decoder,
      validator = field.validator,
      listCount = field.listCount;

  if (typeof validator === 'function') {
    if (!validator(output)) {
      // Not decoding this field so make sure we start parsing the next field at
      // the same point
      return {
        newPosition: startPosition
      };
    }
  }

  if (typeof decoder === 'function') {
    return decoder(input, output, startPosition);
  }

  var bitCount = typeof numBits === 'function' ? numBits(output) : numBits;

  switch (type) {
    case 'int':
      return {
        fieldValue: decodeBitsToInt(input, startPosition, bitCount)
      };

    case 'bool':
      return {
        fieldValue: decodeBitsToBool(input, startPosition)
      };

    case 'date':
      return {
        fieldValue: decodeBitsToDate(input, startPosition, bitCount)
      };

    case 'bits':
      return {
        fieldValue: input.substr(startPosition, bitCount)
      };

    case 'list':
      return decodeList(input, output, startPosition, field, listCount);

    case 'language':
      return {
        fieldValue: decodeBitsToLanguage(input, startPosition, bitCount)
      };

    default:
      throw new Error('ConsentString - Unknown field type ' + type + ' for decoding');
  }
}

function decodeList(input, output, startPosition, field, listCount) {
  var listEntryCount = 0;

  if (typeof listCount === 'function') {
    listEntryCount = listCount(output);
  } else if (typeof listCount === 'number') {
    listEntryCount = listCount;
  }

  var newPosition = startPosition;
  var fieldValue = [];

  for (var i = 0; i < listEntryCount; i += 1) {
    var decodedFields = decodeFields({
      input: input,
      fields: field.fields,
      startPosition: newPosition
    });
    newPosition = decodedFields.newPosition;
    fieldValue.push(decodedFields.decodedObject);
  }

  return {
    fieldValue: fieldValue,
    newPosition: newPosition
  };
}

function decodeFields(_ref4) {
  var input = _ref4.input,
      fields = _ref4.fields,
      _ref4$startPosition = _ref4.startPosition,
      startPosition = _ref4$startPosition === undefined ? 0 : _ref4$startPosition;
  var position = startPosition;
  var decodedObject = fields.reduce(function (acc, field) {
    var name = field.name,
        numBits = field.numBits;

    var _decodeField = decodeField({
      input: input,
      output: acc,
      startPosition: position,
      field: field
    }),
        fieldValue = _decodeField.fieldValue,
        newPosition = _decodeField.newPosition;

    if (fieldValue !== undefined) {
      acc[name] = fieldValue;
    }

    if (newPosition !== undefined) {
      position = newPosition;
    } else if (typeof numBits === 'number') {
      position += numBits;
    }

    return acc;
  }, {});
  return {
    decodedObject: decodedObject,
    newPosition: position
  };
}
/**
 * Encode the data properties to a bit string. Encoding will encode
 * either `selectedVendorIds` or the `vendorRangeList` depending on
 * the value of the `isRange` flag.
 */


function encodeDataToBits(data, definitionMap) {
  var version = data.version;

  if (typeof version !== 'number') {
    throw new Error('ConsentString - No version field to encode');
  } else if (!definitionMap[version]) {
    throw new Error('ConsentString - No definition for version ' + version);
  } else {
    var fields = definitionMap[version].fields;
    return encodeFields({
      input: data,
      fields: fields
    });
  }
}
/**
 * Take all fields required to encode the consent string and produce the URL safe Base64 encoded value
 */


function encodeToBase64(data) {
  var definitionMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : vendorVersionMap;
  var binaryValue = encodeDataToBits(data, definitionMap);

  if (binaryValue) {
    // Pad length to multiple of 8
    var paddedBinaryValue = padRight(binaryValue, 7 - (binaryValue.length + 7) % 8); // Encode to bytes

    var bytes = '';

    for (var i = 0; i < paddedBinaryValue.length; i += 8) {
      bytes += String.fromCharCode(parseInt(paddedBinaryValue.substr(i, 8), 2));
    } // Make base64 string URL friendly


    return base64.encode(bytes).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }

  return null;
}

function decodeConsentStringBitValue(bitString) {
  var definitionMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : vendorVersionMap;
  var version = decodeBitsToInt(bitString, 0, versionNumBits);

  if (typeof version !== 'number') {
    throw new Error('ConsentString - Unknown version number in the string to decode');
  } else if (!vendorVersionMap[version]) {
    throw new Error('ConsentString - Unsupported version ' + version + ' in the string to decode');
  }

  var fields = definitionMap[version].fields;

  var _decodeFields = decodeFields({
    input: bitString,
    fields: fields
  }),
      decodedObject = _decodeFields.decodedObject;

  return decodedObject;
}
/**
 * Decode the (URL safe Base64) value of a consent string into an object.
 */


function decodeFromBase64(consentString, definitionMap) {
  // Add padding
  var unsafe = consentString;

  while (unsafe.length % 4 !== 0) {
    unsafe += '=';
  } // Replace safe characters


  unsafe = unsafe.replace(/-/g, '+').replace(/_/g, '/');
  var bytes = base64.decode(unsafe);
  var inputBits = '';

  for (var i = 0; i < bytes.length; i += 1) {
    var bitString = bytes.charCodeAt(i).toString(2);
    inputBits += padLeft(bitString, 8 - bitString.length);
  }

  return decodeConsentStringBitValue(inputBits, definitionMap);
}

function decodeBitsToIds(bitString) {
  return bitString.split('').reduce(function (acc, bit, index) {
    if (bit === '1') {
      if (acc.indexOf(index + 1) === -1) {
        acc.push(index + 1);
      }
    }

    return acc;
  }, []);
}

module.exports = {
  padRight: padRight,
  padLeft: padLeft,
  encodeField: encodeField,
  encodeDataToBits: encodeDataToBits,
  encodeIntToBits: encodeIntToBits,
  encodeBoolToBits: encodeBoolToBits,
  encodeDateToBits: encodeDateToBits,
  encodeLanguageToBits: encodeLanguageToBits,
  encodeLetterToBits: encodeLetterToBits,
  encodeToBase64: encodeToBase64,
  decodeBitsToIds: decodeBitsToIds,
  decodeBitsToInt: decodeBitsToInt,
  decodeBitsToDate: decodeBitsToDate,
  decodeBitsToBool: decodeBitsToBool,
  decodeBitsToLanguage: decodeBitsToLanguage,
  decodeBitsToLetter: decodeBitsToLetter,
  decodeFromBase64: decodeFromBase64
};

/***/ }),

/***/ "./node_modules/consent-string/dist/utils/definitions.js":
/*!***************************************************************!*\
  !*** ./node_modules/consent-string/dist/utils/definitions.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Number of bits for encoding the version integer
 * Expected to be the same across versions
 */

var versionNumBits = 6;
/**
 * Definition of the consent string encoded format
 *
 * From https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/master/Draft_for_Public_Comment_Transparency%20%26%20Consent%20Framework%20-%20cookie%20and%20vendor%20list%20format%20specification%20v1.0a.pdf
 */

var vendorVersionMap = {
  /**
   * Version 1
   */
  1: {
    version: 1,
    metadataFields: ['version', 'created', 'lastUpdated', 'cmpId', 'cmpVersion', 'consentScreen', 'vendorListVersion'],
    fields: [{
      name: 'version',
      type: 'int',
      numBits: 6
    }, {
      name: 'created',
      type: 'date',
      numBits: 36
    }, {
      name: 'lastUpdated',
      type: 'date',
      numBits: 36
    }, {
      name: 'cmpId',
      type: 'int',
      numBits: 12
    }, {
      name: 'cmpVersion',
      type: 'int',
      numBits: 12
    }, {
      name: 'consentScreen',
      type: 'int',
      numBits: 6
    }, {
      name: 'consentLanguage',
      type: 'language',
      numBits: 12
    }, {
      name: 'vendorListVersion',
      type: 'int',
      numBits: 12
    }, {
      name: 'purposeIdBitString',
      type: 'bits',
      numBits: 24
    }, {
      name: 'maxVendorId',
      type: 'int',
      numBits: 16
    }, {
      name: 'isRange',
      type: 'bool',
      numBits: 1
    }, {
      name: 'vendorIdBitString',
      type: 'bits',
      numBits: function numBits(decodedObject) {
        return decodedObject.maxVendorId;
      },
      validator: function validator(decodedObject) {
        return !decodedObject.isRange;
      }
    }, {
      name: 'defaultConsent',
      type: 'bool',
      numBits: 1,
      validator: function validator(decodedObject) {
        return decodedObject.isRange;
      }
    }, {
      name: 'numEntries',
      numBits: 12,
      type: 'int',
      validator: function validator(decodedObject) {
        return decodedObject.isRange;
      }
    }, {
      name: 'vendorRangeList',
      type: 'list',
      listCount: function listCount(decodedObject) {
        return decodedObject.numEntries;
      },
      validator: function validator(decodedObject) {
        return decodedObject.isRange;
      },
      fields: [{
        name: 'isRange',
        type: 'bool',
        numBits: 1
      }, {
        name: 'startVendorId',
        type: 'int',
        numBits: 16
      }, {
        name: 'endVendorId',
        type: 'int',
        numBits: 16,
        validator: function validator(decodedObject) {
          return decodedObject.isRange;
        }
      }]
    }]
  }
};
module.exports = {
  versionNumBits: versionNumBits,
  vendorVersionMap: vendorVersionMap
};

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function () {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function () {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/js/actions/consent/consent.js":
/*!*******************************************!*\
  !*** ./src/js/actions/consent/consent.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  ConsentString
} = __webpack_require__(/*! consent-string */ "./node_modules/consent-string/dist/index.js");

Adequa.actions.consent = {
  cmp: {},
  view: {}
};

Adequa.actions.consent.getSettings = function (filters) {
  let settings = Adequa.storage.consent.settings;
  if (filters.website_id) settings = settings.filter(setting => setting.id.website_id === filters.website_id);
  if (filters.vendor_id) settings = settings.filter(setting => setting.id.vendor_id === filters.vendor_id);
  if (filters.purpose_id) settings = settings.filter(setting => setting.id.purpose_id === filters.purpose_id);
  return settings;
};

Adequa.actions.consent.setSetting = function (setting) {
  const index = Adequa.storage.consent.settings.findIndex(item => item.id.website_id === setting.id.website_id && item.id.purpose_id === setting.id.purpose_id && item.id.vendor_id === setting.id.vendor_id);
  if (index === -1) Adequa.storage.consent.settings.push(setting);else Adequa.storage.consent.settings[index] = setting;
  Adequa.setStorage({});
};

Adequa.actions.consent.cmp.getConsentData = function (websiteId, callback) {
  const defaultSettings = Adequa.actions.consent.getSettings({
    website_id: "all"
  });
  const websiteSettings = Adequa.actions.consent.getSettings({
    website_id: websiteId
  });
  const allowedPurposeIds = [];
  const forbiddenPurposeIds = [];
  const allowedVendorIds = [];
  const forbiddenVendorIds = [];

  for (const setting of websiteSettings) {
    if (setting.id.purpose_id === "all" && setting.id.vendor_id !== "all") {
      if (allowedVendorIds.indexOf(setting.id.vendor_id) === -1 && forbiddenVendorIds.indexOf(setting.id.vendor_id) === -1) {
        if (setting.value === -1) {
          allowedVendorIds.push(setting.id.vendor_id);
        } else {
          forbiddenVendorIds.push(setting.id.vendor_id);
        }
      }
    } else if (setting.id.purpose_id !== "all" && setting.id.vendor_id === "all") {
      if (allowedPurposeIds.indexOf(setting.id.purpose_id) === -1 && forbiddenPurposeIds.indexOf(setting.id.purpose_id) === -1) {
        if (setting.value === -1) {
          allowedPurposeIds.push(setting.id.purpose_id);
        } else {
          forbiddenPurposeIds.push(setting.id.purpose_id);
        }
      }
    } else {
      if (defaultSettings.indexOf(setting) === -1) defaultSettings.push(setting);
    }
  }

  for (const setting of defaultSettings) {
    if (setting.id.purpose_id === "all" && setting.id.vendor_id !== "all") {
      if (allowedVendorIds.indexOf(setting.id.vendor_id) === -1 && forbiddenVendorIds.indexOf(setting.id.vendor_id) === -1) {
        if (setting.value === -1) {
          allowedVendorIds.push(setting.id.vendor_id);
        } else {
          forbiddenVendorIds.push(setting.id.vendor_id);
        }
      }
    } else if (setting.id.purpose_id !== "all" && setting.id.vendor_id === "all") {
      if (allowedPurposeIds.indexOf(setting.id.purpose_id) === -1 && forbiddenPurposeIds.indexOf(setting.id.purpose_id) === -1) {
        if (setting.value === -1) {
          allowedPurposeIds.push(setting.id.purpose_id);
        } else {
          forbiddenPurposeIds.push(setting.id.purpose_id);
        }
      }
    } else if (setting.id.purpose_id === "all" && setting.id.vendor_id === "all") {
      if (setting.value === -1) {
        for (const purposeId of Adequa.storage.purposeList) {
          if (allowedPurposeIds.indexOf(purposeId) === -1 && forbiddenPurposeIds.indexOf(purposeId) === -1) allowedPurposeIds.push(purposeId);
        }

        for (const vendorId of Adequa.storage.vendorList) {
          if (allowedVendorIds.indexOf(vendorId) === -1 && forbiddenVendorIds.indexOf(vendorId) === -1) allowedVendorIds.push(vendorId);
        }
      } else {
        for (const purposeId of Adequa.storage.purposeList) {
          if (allowedPurposeIds.indexOf(purposeId) === -1 && forbiddenPurposeIds.indexOf(purposeId) === -1) forbiddenPurposeIds.push(purposeId);
        }

        for (const vendorId of Adequa.storage.vendorList) {
          if (allowedVendorIds.indexOf(vendorId) === -1 && forbiddenVendorIds.indexOf(vendorId) === -1) forbiddenVendorIds.push(vendorId);
        }
      }
    }
  }

  const consentData = new ConsentString();
  consentData.setGlobalVendorList(Adequa.storage.fullVendorList);
  consentData.setCmpId(1);
  consentData.setCmpVersion(1);
  consentData.setConsentScreen(1);
  consentData.setConsentLanguage('fr');
  consentData.setPurposesAllowed(allowedPurposeIds);
  consentData.setVendorsAllowed(allowedVendorIds);
  Adequa.actions.consent.getCurrentWebsiteSettings(function (settings, tab) {
    for (const index in settings) {
      settings[index].id.website_id = Adequa.hostname(tab.url || "nourl");
    }

    callback({
      consentString: consentData.getConsentString(),
      allowedVendors: allowedVendorIds,
      allowedPurposes: allowedPurposeIds,
      vendorList: Adequa.storage.vendorList,
      purposeList: Adequa.storage.purposeList,
      settings: settings
    });
  });
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jhc2UtNjQvYmFzZTY0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb25zZW50LXN0cmluZy9kaXN0L2NvbnNlbnQtc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb25zZW50LXN0cmluZy9kaXN0L2RlY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29uc2VudC1zdHJpbmcvZGlzdC9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbnNlbnQtc3RyaW5nL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbnNlbnQtc3RyaW5nL2Rpc3QvdXRpbHMvYml0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29uc2VudC1zdHJpbmcvZGlzdC91dGlscy9kZWZpbml0aW9ucy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FjdGlvbnMvY29uc2VudC9jb25zZW50LmpzIl0sIm5hbWVzIjpbInJvb3QiLCJmcmVlRXhwb3J0cyIsImV4cG9ydHMiLCJmcmVlTW9kdWxlIiwibW9kdWxlIiwiZnJlZUdsb2JhbCIsImdsb2JhbCIsIndpbmRvdyIsIkludmFsaWRDaGFyYWN0ZXJFcnJvciIsIm1lc3NhZ2UiLCJwcm90b3R5cGUiLCJFcnJvciIsIm5hbWUiLCJlcnJvciIsIlRBQkxFIiwiUkVHRVhfU1BBQ0VfQ0hBUkFDVEVSUyIsImRlY29kZSIsImlucHV0IiwiU3RyaW5nIiwicmVwbGFjZSIsImxlbmd0aCIsInRlc3QiLCJiaXRDb3VudGVyIiwiYml0U3RvcmFnZSIsImJ1ZmZlciIsIm91dHB1dCIsInBvc2l0aW9uIiwiaW5kZXhPZiIsImNoYXJBdCIsImZyb21DaGFyQ29kZSIsImVuY29kZSIsInBhZGRpbmciLCJhIiwiYiIsImMiLCJkIiwiY2hhckNvZGVBdCIsImJhc2U2NCIsImRlZmluZSIsIl90eXBlb2YiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm9iaiIsImNvbnN0cnVjdG9yIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsIkNvbnN0cnVjdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJUeXBlRXJyb3IiLCJfcmVxdWlyZSIsInJlcXVpcmUiLCJlbmNvZGVDb25zZW50U3RyaW5nIiwiX2dldE1heFZlbmRvcklkIiwiZ2V0TWF4VmVuZG9ySWQiLCJlbmNvZGVWZW5kb3JJZHNUb0JpdHMiLCJlbmNvZGVQdXJwb3NlSWRzVG9CaXRzIiwiX3JlcXVpcmUyIiwiZGVjb2RlQ29uc2VudFN0cmluZyIsIl9yZXF1aXJlMyIsInZlbmRvclZlcnNpb25NYXAiLCJjb25zZW50TGFuZ3VhZ2VSZWdleHAiLCJDb25zZW50U3RyaW5nIiwiYmFzZVN0cmluZyIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsImNyZWF0ZWQiLCJEYXRlIiwibGFzdFVwZGF0ZWQiLCJ2ZXJzaW9uIiwidmVuZG9yTGlzdCIsInZlbmRvckxpc3RWZXJzaW9uIiwiY21wSWQiLCJjbXBWZXJzaW9uIiwiY29uc2VudFNjcmVlbiIsImNvbnNlbnRMYW5ndWFnZSIsImFsbG93ZWRQdXJwb3NlSWRzIiwiYWxsb3dlZFZlbmRvcklkcyIsImFzc2lnbiIsInZhbHVlIiwiZ2V0Q29uc2VudFN0cmluZyIsInVwZGF0ZURhdGUiLCJnZXRWZXJzaW9uIiwidmVuZG9ycyIsImdldFBhcnNlZFZlbmRvckNvbnNlbnRzIiwiZ2V0UGFyc2VkUHVycG9zZUNvbnNlbnRzIiwicHVycG9zZXMiLCJnZXRNZXRhZGF0YVN0cmluZyIsImdldFZlbmRvckxpc3RWZXJzaW9uIiwic2V0R2xvYmFsVmVuZG9yTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsImZlYXR1cmVzIiwic2xpY2UiLCJzb3J0IiwiZmlyc3RWZW5kb3IiLCJzZWNvbmRWZW5kb3IiLCJpZCIsInNldENtcElkIiwiZ2V0Q21wSWQiLCJzZXRDbXBWZXJzaW9uIiwiZ2V0Q21wVmVyc2lvbiIsInNldENvbnNlbnRTY3JlZW4iLCJzY3JlZW5JZCIsImdldENvbnNlbnRTY3JlZW4iLCJzZXRDb25zZW50TGFuZ3VhZ2UiLCJsYW5ndWFnZSIsImdldENvbnNlbnRMYW5ndWFnZSIsInNldFB1cnBvc2VzQWxsb3dlZCIsInB1cnBvc2VJZHMiLCJnZXRQdXJwb3Nlc0FsbG93ZWQiLCJzZXRQdXJwb3NlQWxsb3dlZCIsInB1cnBvc2VJZCIsInB1cnBvc2VJbmRleCIsInB1c2giLCJzcGxpY2UiLCJpc1B1cnBvc2VBbGxvd2VkIiwic2V0VmVuZG9yc0FsbG93ZWQiLCJ2ZW5kb3JJZHMiLCJnZXRWZW5kb3JzQWxsb3dlZCIsInNldFZlbmRvckFsbG93ZWQiLCJ2ZW5kb3JJZCIsInZlbmRvckluZGV4IiwiaXNWZW5kb3JBbGxvd2VkIiwiZGVjb2RlTWV0YWRhdGFTdHJpbmciLCJlbmNvZGVkTWV0YWRhdGEiLCJkZWNvZGVkU3RyaW5nIiwibWV0YWRhdGEiLCJtZXRhZGF0YUZpZWxkcyIsImZvckVhY2giLCJmaWVsZCIsImRlY29kZUJpdHNUb0lkcyIsImRlY29kZUZyb21CYXNlNjQiLCJjb25zZW50U3RyaW5nIiwiX2RlY29kZUZyb21CYXNlIiwicHVycG9zZUlkQml0U3RyaW5nIiwibWF4VmVuZG9ySWQiLCJpc1JhbmdlIiwiZGVmYXVsdENvbnNlbnQiLCJ2ZW5kb3JJZEJpdFN0cmluZyIsInZlbmRvclJhbmdlTGlzdCIsImNvbnNlbnRTdHJpbmdEYXRhIiwiaWRNYXAiLCJyZWR1Y2UiLCJhY2MiLCJfcmVmIiwic3RhcnRWZW5kb3JJZCIsImVuZFZlbmRvcklkIiwibGFzdFZlbmRvcklkIiwiX2V4dGVuZHMiLCJzb3VyY2UiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJlbmNvZGVUb0Jhc2U2NCIsInBhZFJpZ2h0IiwidmVuZG9yU3RyaW5nIiwiTWF0aCIsIm1heCIsIlNldCIsIm1heFB1cnBvc2VJZCIsIl9pIiwicHVycG9zZVN0cmluZyIsImNvbnZlcnRWZW5kb3JzVG9SYW5nZXMiLCJyYW5nZSIsInJhbmdlcyIsImlkc0luTGlzdCIsIm1hcCIsInZlbmRvciIsImluZGV4Iiwic2hpZnQiLCJwb3AiLCJjb25zZW50RGF0YSIsIl9jb25zZW50RGF0YSR2ZW5kb3JMaSIsIl92ZW5kb3JMaXN0JHZlbmRvcnMiLCJfdmVuZG9yTGlzdCRwdXJwb3NlcyIsIm5vUmFuZ2VzRGF0YSIsInJhbmdlc0RhdGEiLCJudW1FbnRyaWVzIiwidmVyc2lvbk51bUJpdHMiLCJyZXBlYXQiLCJjb3VudCIsInN0cmluZyIsInBhZFN0cmluZyIsInBhZExlZnQiLCJlbmNvZGVJbnRUb0JpdHMiLCJudW1iZXIiLCJudW1CaXRzIiwiYml0U3RyaW5nIiwiaXNOYU4iLCJwYXJzZUludCIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwiZW5jb2RlQm9vbFRvQml0cyIsImVuY29kZURhdGVUb0JpdHMiLCJkYXRlIiwiZ2V0VGltZSIsImVuY29kZUxldHRlclRvQml0cyIsImxldHRlciIsInRvVXBwZXJDYXNlIiwiZW5jb2RlTGFuZ3VhZ2VUb0JpdHMiLCJkZWNvZGVCaXRzVG9JbnQiLCJzdGFydCIsInN1YnN0ciIsImRlY29kZUJpdHNUb0RhdGUiLCJkZWNvZGVCaXRzVG9Cb29sIiwiZGVjb2RlQml0c1RvTGV0dGVyIiwibGV0dGVyQ29kZSIsInRvTG93ZXJDYXNlIiwiZGVjb2RlQml0c1RvTGFuZ3VhZ2UiLCJsYW5ndWFnZUJpdFN0cmluZyIsImVuY29kZUZpZWxkIiwidHlwZSIsImVuY29kZXIiLCJ2YWxpZGF0b3IiLCJiaXRDb3VudCIsImlucHV0VmFsdWUiLCJmaWVsZFZhbHVlIiwibGlzdFZhbHVlIiwiZW5jb2RlRmllbGRzIiwiZmllbGRzIiwiX3JlZjIiLCJkZWNvZGVGaWVsZCIsIl9yZWYzIiwic3RhcnRQb3NpdGlvbiIsImRlY29kZXIiLCJsaXN0Q291bnQiLCJuZXdQb3NpdGlvbiIsImRlY29kZUxpc3QiLCJsaXN0RW50cnlDb3VudCIsImRlY29kZWRGaWVsZHMiLCJkZWNvZGVGaWVsZHMiLCJkZWNvZGVkT2JqZWN0IiwiX3JlZjQiLCJfcmVmNCRzdGFydFBvc2l0aW9uIiwiX2RlY29kZUZpZWxkIiwiZW5jb2RlRGF0YVRvQml0cyIsImRhdGEiLCJkZWZpbml0aW9uTWFwIiwiYmluYXJ5VmFsdWUiLCJwYWRkZWRCaW5hcnlWYWx1ZSIsImJ5dGVzIiwiZGVjb2RlQ29uc2VudFN0cmluZ0JpdFZhbHVlIiwiX2RlY29kZUZpZWxkcyIsInVuc2FmZSIsImlucHV0Qml0cyIsInNwbGl0IiwiYml0IiwiZyIsIkZ1bmN0aW9uIiwiZSIsIndlYnBhY2tQb2x5ZmlsbCIsImRlcHJlY2F0ZSIsInBhdGhzIiwiY2hpbGRyZW4iLCJnZXQiLCJsIiwiQWRlcXVhIiwiYWN0aW9ucyIsImNvbnNlbnQiLCJjbXAiLCJ2aWV3IiwiZ2V0U2V0dGluZ3MiLCJmaWx0ZXJzIiwic2V0dGluZ3MiLCJzdG9yYWdlIiwid2Vic2l0ZV9pZCIsImZpbHRlciIsInNldHRpbmciLCJ2ZW5kb3JfaWQiLCJwdXJwb3NlX2lkIiwic2V0U2V0dGluZyIsImZpbmRJbmRleCIsIml0ZW0iLCJzZXRTdG9yYWdlIiwiZ2V0Q29uc2VudERhdGEiLCJ3ZWJzaXRlSWQiLCJjYWxsYmFjayIsImRlZmF1bHRTZXR0aW5ncyIsIndlYnNpdGVTZXR0aW5ncyIsImZvcmJpZGRlblB1cnBvc2VJZHMiLCJmb3JiaWRkZW5WZW5kb3JJZHMiLCJwdXJwb3NlTGlzdCIsImZ1bGxWZW5kb3JMaXN0IiwiZ2V0Q3VycmVudFdlYnNpdGVTZXR0aW5ncyIsInRh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IjoiY29uc2VudC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9hY3Rpb25zL2NvbnNlbnQvY29uc2VudC5qc1wiKTtcbiIsIi8qISBodHRwOi8vbXRocy5iZS9iYXNlNjQgdjAuMS4wIGJ5IEBtYXRoaWFzIHwgTUlUIGxpY2Vuc2UgKi9cbjsoZnVuY3Rpb24ocm9vdCkge1xuXG5cdC8vIERldGVjdCBmcmVlIHZhcmlhYmxlcyBgZXhwb3J0c2AuXG5cdHZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHM7XG5cblx0Ly8gRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuXG5cdHZhciBmcmVlTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiZcblx0XHRtb2R1bGUuZXhwb3J0cyA9PSBmcmVlRXhwb3J0cyAmJiBtb2R1bGU7XG5cblx0Ly8gRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAsIGZyb20gTm9kZS5qcyBvciBCcm93c2VyaWZpZWQgY29kZSwgYW5kIHVzZVxuXHQvLyBpdCBhcyBgcm9vdGAuXG5cdHZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWw7XG5cdGlmIChmcmVlR2xvYmFsLmdsb2JhbCA9PT0gZnJlZUdsb2JhbCB8fCBmcmVlR2xvYmFsLndpbmRvdyA9PT0gZnJlZUdsb2JhbCkge1xuXHRcdHJvb3QgPSBmcmVlR2xvYmFsO1xuXHR9XG5cblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblx0dmFyIEludmFsaWRDaGFyYWN0ZXJFcnJvciA9IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcblx0XHR0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXHR9O1xuXHRJbnZhbGlkQ2hhcmFjdGVyRXJyb3IucHJvdG90eXBlID0gbmV3IEVycm9yO1xuXHRJbnZhbGlkQ2hhcmFjdGVyRXJyb3IucHJvdG90eXBlLm5hbWUgPSAnSW52YWxpZENoYXJhY3RlckVycm9yJztcblxuXHR2YXIgZXJyb3IgPSBmdW5jdGlvbihtZXNzYWdlKSB7XG5cdFx0Ly8gTm90ZTogdGhlIGVycm9yIG1lc3NhZ2VzIHVzZWQgdGhyb3VnaG91dCB0aGlzIGZpbGUgbWF0Y2ggdGhvc2UgdXNlZCBieVxuXHRcdC8vIHRoZSBuYXRpdmUgYGF0b2JgL2BidG9hYCBpbXBsZW1lbnRhdGlvbiBpbiBDaHJvbWl1bS5cblx0XHR0aHJvdyBuZXcgSW52YWxpZENoYXJhY3RlckVycm9yKG1lc3NhZ2UpO1xuXHR9O1xuXG5cdHZhciBUQUJMRSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJztcblx0Ly8gaHR0cDovL3doYXR3Zy5vcmcvaHRtbC9jb21tb24tbWljcm9zeW50YXhlcy5odG1sI3NwYWNlLWNoYXJhY3RlclxuXHR2YXIgUkVHRVhfU1BBQ0VfQ0hBUkFDVEVSUyA9IC9bXFx0XFxuXFxmXFxyIF0vZztcblxuXHQvLyBgZGVjb2RlYCBpcyBkZXNpZ25lZCB0byBiZSBmdWxseSBjb21wYXRpYmxlIHdpdGggYGF0b2JgIGFzIGRlc2NyaWJlZCBpbiB0aGVcblx0Ly8gSFRNTCBTdGFuZGFyZC4gaHR0cDovL3doYXR3Zy5vcmcvaHRtbC93ZWJhcHBhcGlzLmh0bWwjZG9tLXdpbmRvd2Jhc2U2NC1hdG9iXG5cdC8vIFRoZSBvcHRpbWl6ZWQgYmFzZTY0LWRlY29kaW5nIGFsZ29yaXRobSB1c2VkIGlzIGJhc2VkIG9uIEBhdGvigJlzIGV4Y2VsbGVudFxuXHQvLyBpbXBsZW1lbnRhdGlvbi4gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vYXRrLzEwMjAzOTZcblx0dmFyIGRlY29kZSA9IGZ1bmN0aW9uKGlucHV0KSB7XG5cdFx0aW5wdXQgPSBTdHJpbmcoaW5wdXQpXG5cdFx0XHQucmVwbGFjZShSRUdFWF9TUEFDRV9DSEFSQUNURVJTLCAnJyk7XG5cdFx0dmFyIGxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcblx0XHRpZiAobGVuZ3RoICUgNCA9PSAwKSB7XG5cdFx0XHRpbnB1dCA9IGlucHV0LnJlcGxhY2UoLz09PyQvLCAnJyk7XG5cdFx0XHRsZW5ndGggPSBpbnB1dC5sZW5ndGg7XG5cdFx0fVxuXHRcdGlmIChcblx0XHRcdGxlbmd0aCAlIDQgPT0gMSB8fFxuXHRcdFx0Ly8gaHR0cDovL3doYXR3Zy5vcmcvQyNhbHBoYW51bWVyaWMtYXNjaWktY2hhcmFjdGVyc1xuXHRcdFx0L1teK2EtekEtWjAtOS9dLy50ZXN0KGlucHV0KVxuXHRcdCkge1xuXHRcdFx0ZXJyb3IoXG5cdFx0XHRcdCdJbnZhbGlkIGNoYXJhY3RlcjogdGhlIHN0cmluZyB0byBiZSBkZWNvZGVkIGlzIG5vdCBjb3JyZWN0bHkgZW5jb2RlZC4nXG5cdFx0XHQpO1xuXHRcdH1cblx0XHR2YXIgYml0Q291bnRlciA9IDA7XG5cdFx0dmFyIGJpdFN0b3JhZ2U7XG5cdFx0dmFyIGJ1ZmZlcjtcblx0XHR2YXIgb3V0cHV0ID0gJyc7XG5cdFx0dmFyIHBvc2l0aW9uID0gLTE7XG5cdFx0d2hpbGUgKCsrcG9zaXRpb24gPCBsZW5ndGgpIHtcblx0XHRcdGJ1ZmZlciA9IFRBQkxFLmluZGV4T2YoaW5wdXQuY2hhckF0KHBvc2l0aW9uKSk7XG5cdFx0XHRiaXRTdG9yYWdlID0gYml0Q291bnRlciAlIDQgPyBiaXRTdG9yYWdlICogNjQgKyBidWZmZXIgOiBidWZmZXI7XG5cdFx0XHQvLyBVbmxlc3MgdGhpcyBpcyB0aGUgZmlyc3Qgb2YgYSBncm91cCBvZiA0IGNoYXJhY3RlcnPigKZcblx0XHRcdGlmIChiaXRDb3VudGVyKysgJSA0KSB7XG5cdFx0XHRcdC8vIOKApmNvbnZlcnQgdGhlIGZpcnN0IDggYml0cyB0byBhIHNpbmdsZSBBU0NJSSBjaGFyYWN0ZXIuXG5cdFx0XHRcdG91dHB1dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFxuXHRcdFx0XHRcdDB4RkYgJiBiaXRTdG9yYWdlID4+ICgtMiAqIGJpdENvdW50ZXIgJiA2KVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gb3V0cHV0O1xuXHR9O1xuXG5cdC8vIGBlbmNvZGVgIGlzIGRlc2lnbmVkIHRvIGJlIGZ1bGx5IGNvbXBhdGlibGUgd2l0aCBgYnRvYWAgYXMgZGVzY3JpYmVkIGluIHRoZVxuXHQvLyBIVE1MIFN0YW5kYXJkOiBodHRwOi8vd2hhdHdnLm9yZy9odG1sL3dlYmFwcGFwaXMuaHRtbCNkb20td2luZG93YmFzZTY0LWJ0b2Fcblx0dmFyIGVuY29kZSA9IGZ1bmN0aW9uKGlucHV0KSB7XG5cdFx0aW5wdXQgPSBTdHJpbmcoaW5wdXQpO1xuXHRcdGlmICgvW15cXDAtXFx4RkZdLy50ZXN0KGlucHV0KSkge1xuXHRcdFx0Ly8gTm90ZTogbm8gbmVlZCB0byBzcGVjaWFsLWNhc2UgYXN0cmFsIHN5bWJvbHMgaGVyZSwgYXMgc3Vycm9nYXRlcyBhcmVcblx0XHRcdC8vIG1hdGNoZWQsIGFuZCB0aGUgaW5wdXQgaXMgc3VwcG9zZWQgdG8gb25seSBjb250YWluIEFTQ0lJIGFueXdheS5cblx0XHRcdGVycm9yKFxuXHRcdFx0XHQnVGhlIHN0cmluZyB0byBiZSBlbmNvZGVkIGNvbnRhaW5zIGNoYXJhY3RlcnMgb3V0c2lkZSBvZiB0aGUgJyArXG5cdFx0XHRcdCdMYXRpbjEgcmFuZ2UuJ1xuXHRcdFx0KTtcblx0XHR9XG5cdFx0dmFyIHBhZGRpbmcgPSBpbnB1dC5sZW5ndGggJSAzO1xuXHRcdHZhciBvdXRwdXQgPSAnJztcblx0XHR2YXIgcG9zaXRpb24gPSAtMTtcblx0XHR2YXIgYTtcblx0XHR2YXIgYjtcblx0XHR2YXIgYztcblx0XHR2YXIgZDtcblx0XHR2YXIgYnVmZmVyO1xuXHRcdC8vIE1ha2Ugc3VyZSBhbnkgcGFkZGluZyBpcyBoYW5kbGVkIG91dHNpZGUgb2YgdGhlIGxvb3AuXG5cdFx0dmFyIGxlbmd0aCA9IGlucHV0Lmxlbmd0aCAtIHBhZGRpbmc7XG5cblx0XHR3aGlsZSAoKytwb3NpdGlvbiA8IGxlbmd0aCkge1xuXHRcdFx0Ly8gUmVhZCB0aHJlZSBieXRlcywgaS5lLiAyNCBiaXRzLlxuXHRcdFx0YSA9IGlucHV0LmNoYXJDb2RlQXQocG9zaXRpb24pIDw8IDE2O1xuXHRcdFx0YiA9IGlucHV0LmNoYXJDb2RlQXQoKytwb3NpdGlvbikgPDwgODtcblx0XHRcdGMgPSBpbnB1dC5jaGFyQ29kZUF0KCsrcG9zaXRpb24pO1xuXHRcdFx0YnVmZmVyID0gYSArIGIgKyBjO1xuXHRcdFx0Ly8gVHVybiB0aGUgMjQgYml0cyBpbnRvIGZvdXIgY2h1bmtzIG9mIDYgYml0cyBlYWNoLCBhbmQgYXBwZW5kIHRoZVxuXHRcdFx0Ly8gbWF0Y2hpbmcgY2hhcmFjdGVyIGZvciBlYWNoIG9mIHRoZW0gdG8gdGhlIG91dHB1dC5cblx0XHRcdG91dHB1dCArPSAoXG5cdFx0XHRcdFRBQkxFLmNoYXJBdChidWZmZXIgPj4gMTggJiAweDNGKSArXG5cdFx0XHRcdFRBQkxFLmNoYXJBdChidWZmZXIgPj4gMTIgJiAweDNGKSArXG5cdFx0XHRcdFRBQkxFLmNoYXJBdChidWZmZXIgPj4gNiAmIDB4M0YpICtcblx0XHRcdFx0VEFCTEUuY2hhckF0KGJ1ZmZlciAmIDB4M0YpXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmIChwYWRkaW5nID09IDIpIHtcblx0XHRcdGEgPSBpbnB1dC5jaGFyQ29kZUF0KHBvc2l0aW9uKSA8PCA4O1xuXHRcdFx0YiA9IGlucHV0LmNoYXJDb2RlQXQoKytwb3NpdGlvbik7XG5cdFx0XHRidWZmZXIgPSBhICsgYjtcblx0XHRcdG91dHB1dCArPSAoXG5cdFx0XHRcdFRBQkxFLmNoYXJBdChidWZmZXIgPj4gMTApICtcblx0XHRcdFx0VEFCTEUuY2hhckF0KChidWZmZXIgPj4gNCkgJiAweDNGKSArXG5cdFx0XHRcdFRBQkxFLmNoYXJBdCgoYnVmZmVyIDw8IDIpICYgMHgzRikgK1xuXHRcdFx0XHQnPSdcblx0XHRcdCk7XG5cdFx0fSBlbHNlIGlmIChwYWRkaW5nID09IDEpIHtcblx0XHRcdGJ1ZmZlciA9IGlucHV0LmNoYXJDb2RlQXQocG9zaXRpb24pO1xuXHRcdFx0b3V0cHV0ICs9IChcblx0XHRcdFx0VEFCTEUuY2hhckF0KGJ1ZmZlciA+PiAyKSArXG5cdFx0XHRcdFRBQkxFLmNoYXJBdCgoYnVmZmVyIDw8IDQpICYgMHgzRikgK1xuXHRcdFx0XHQnPT0nXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBvdXRwdXQ7XG5cdH07XG5cblx0dmFyIGJhc2U2NCA9IHtcblx0XHQnZW5jb2RlJzogZW5jb2RlLFxuXHRcdCdkZWNvZGUnOiBkZWNvZGUsXG5cdFx0J3ZlcnNpb24nOiAnMC4xLjAnXG5cdH07XG5cblx0Ly8gU29tZSBBTUQgYnVpbGQgb3B0aW1pemVycywgbGlrZSByLmpzLCBjaGVjayBmb3Igc3BlY2lmaWMgY29uZGl0aW9uIHBhdHRlcm5zXG5cdC8vIGxpa2UgdGhlIGZvbGxvd2luZzpcblx0aWYgKFxuXHRcdHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdHR5cGVvZiBkZWZpbmUuYW1kID09ICdvYmplY3QnICYmXG5cdFx0ZGVmaW5lLmFtZFxuXHQpIHtcblx0XHRkZWZpbmUoZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gYmFzZTY0O1xuXHRcdH0pO1xuXHR9XHRlbHNlIGlmIChmcmVlRXhwb3J0cyAmJiAhZnJlZUV4cG9ydHMubm9kZVR5cGUpIHtcblx0XHRpZiAoZnJlZU1vZHVsZSkgeyAvLyBpbiBOb2RlLmpzIG9yIFJpbmdvSlMgdjAuOC4wK1xuXHRcdFx0ZnJlZU1vZHVsZS5leHBvcnRzID0gYmFzZTY0O1xuXHRcdH0gZWxzZSB7IC8vIGluIE5hcndoYWwgb3IgUmluZ29KUyB2MC43LjAtXG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gYmFzZTY0KSB7XG5cdFx0XHRcdGJhc2U2NC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIChmcmVlRXhwb3J0c1trZXldID0gYmFzZTY0W2tleV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIHsgLy8gaW4gUmhpbm8gb3IgYSB3ZWIgYnJvd3NlclxuXHRcdHJvb3QuYmFzZTY0ID0gYmFzZTY0O1xuXHR9XG5cbn0odGhpcykpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJy4vZW5jb2RlJyksXG4gICAgZW5jb2RlQ29uc2VudFN0cmluZyA9IF9yZXF1aXJlLmVuY29kZUNvbnNlbnRTdHJpbmcsXG4gICAgX2dldE1heFZlbmRvcklkID0gX3JlcXVpcmUuZ2V0TWF4VmVuZG9ySWQsXG4gICAgZW5jb2RlVmVuZG9ySWRzVG9CaXRzID0gX3JlcXVpcmUuZW5jb2RlVmVuZG9ySWRzVG9CaXRzLFxuICAgIGVuY29kZVB1cnBvc2VJZHNUb0JpdHMgPSBfcmVxdWlyZS5lbmNvZGVQdXJwb3NlSWRzVG9CaXRzO1xuXG52YXIgX3JlcXVpcmUyID0gcmVxdWlyZSgnLi9kZWNvZGUnKSxcbiAgICBkZWNvZGVDb25zZW50U3RyaW5nID0gX3JlcXVpcmUyLmRlY29kZUNvbnNlbnRTdHJpbmc7XG5cbnZhciBfcmVxdWlyZTMgPSByZXF1aXJlKCcuL3V0aWxzL2RlZmluaXRpb25zJyksXG4gICAgdmVuZG9yVmVyc2lvbk1hcCA9IF9yZXF1aXJlMy52ZW5kb3JWZXJzaW9uTWFwO1xuLyoqXG4gKiBSZWd1bGFyIGV4cHJlc3Npb24gZm9yIHZhbGlkYXRpbmdcbiAqL1xuXG5cbnZhciBjb25zZW50TGFuZ3VhZ2VSZWdleHAgPSAvXlthLXpdezJ9JC87XG5cbnZhciBDb25zZW50U3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZSBhIG5ldyBDb25zZW50U3RyaW5nIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYmFzZVN0cmluZyBBbiBleGlzdGluZyBjb25zZW50IHN0cmluZyB0byBwYXJzZSBhbmQgdXNlIGZvciBvdXIgaW5pdGlhbCB2YWx1ZXNcbiAgICovXG4gIGZ1bmN0aW9uIENvbnNlbnRTdHJpbmcoKSB7XG4gICAgdmFyIGJhc2VTdHJpbmcgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IG51bGw7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29uc2VudFN0cmluZyk7XG5cbiAgICB0aGlzLmNyZWF0ZWQgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMubGFzdFVwZGF0ZWQgPSBuZXcgRGF0ZSgpO1xuXG4gICAgLyoqXG4gICAgICogVmVyc2lvbiBudW1iZXIgb2YgY29uc2VudCBzdHJpbmcgc3BlY2lmaWNhdGlvblxuICAgICAqXG4gICAgICogQHR5cGUge2ludGVnZXJ9XG4gICAgICovXG4gICAgdGhpcy52ZXJzaW9uID0gMTtcblxuICAgIC8qKlxuICAgICAqIFZlbmRvciBsaXN0IHdpdGggZm9ybWF0IGZyb20gaHR0cHM6Ly9naXRodWIuY29tL0ludGVyYWN0aXZlQWR2ZXJ0aXNpbmdCdXJlYXUvR0RQUi1UcmFuc3BhcmVuY3ktYW5kLUNvbnNlbnQtRnJhbWV3b3JrL2Jsb2IvbWFzdGVyL0RyYWZ0X2Zvcl9QdWJsaWNfQ29tbWVudF9UcmFuc3BhcmVuY3klMjAlMjYlMjBDb25zZW50JTIwRnJhbWV3b3JrJTIwLSUyMGNvb2tpZSUyMGFuZCUyMHZlbmRvciUyMGxpc3QlMjBmb3JtYXQlMjBzcGVjaWZpY2F0aW9uJTIwdjEuMGEucGRmXG4gICAgICpcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMudmVuZG9yTGlzdCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBWZXJzaW9uIG9mIHRoZSB2ZW5kb3IgbGlzdCB1c2VkIGZvciB0aGUgcHVycG9zZXMgYW5kIHZlbmRvcnNcbiAgICAgKlxuICAgICAqIEB0eXBlIHtpbnRlZ2VyfVxuICAgICAqL1xuICAgIHRoaXMudmVuZG9yTGlzdFZlcnNpb24gPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHVuaXF1ZSBJRCBvZiB0aGUgQ01QIHRoYXQgbGFzdCBtb2RpZmllZCB0aGUgY29uc2VudCBzdHJpbmdcbiAgICAgKlxuICAgICAqIEB0eXBlIHtpbnRlZ2VyfVxuICAgICAqL1xuICAgIHRoaXMuY21wSWQgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVmVyc2lvbiBvZiB0aGUgY29kZSB1c2VkIGJ5IHRoZSBDTVAgd2hlbiBjb2xsZWN0aW5nIGNvbnNlbnRcbiAgICAgKlxuICAgICAqIEB0eXBlIHtpbnRlZ2VyfVxuICAgICAqL1xuICAgIHRoaXMuY21wVmVyc2lvbiA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBJRCBvZiB0aGUgc2NyZWVuIHVzZWQgYnkgQ01QIHdoZW4gY29sbGVjdGluZyBjb25zZW50XG4gICAgICpcbiAgICAgKiBAdHlwZSB7aW50ZWdlcn1cbiAgICAgKi9cbiAgICB0aGlzLmNvbnNlbnRTY3JlZW4gPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVHdvLWxldHRlciBJU082MzktMSBjb2RlIChlbiwgZnIsIGRlLCBldGMuKSBvZiB0aGUgbGFuZ3VhZ2UgdGhhdCB0aGUgQ01QIGFza2VkIGNvbnNlbnQgaW5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5jb25zZW50TGFuZ3VhZ2UgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogTGlzdCBvZiBwdXJwb3NlIElEcyB0aGF0IHRoZSB1c2VyIGhhcyBnaXZlbiBjb25zZW50IHRvXG4gICAgICpcbiAgICAgKiBAdHlwZSB7aW50ZWdlcltdfVxuICAgICAqL1xuICAgIHRoaXMuYWxsb3dlZFB1cnBvc2VJZHMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIExpc3Qgb2YgdmVuZG9yIElEcyB0aGF0IHRoZSB1c2VyIGhhcyBnaXZlbiBjb25zZW50IHRvXG4gICAgICpcbiAgICAgKiBAdHlwZSB7aW50ZWdlcltdfVxuICAgICAqL1xuICAgIHRoaXMuYWxsb3dlZFZlbmRvcklkcyA9IFtdO1xuXG4gICAgLy8gRGVjb2RlIHRoZSBiYXNlIHN0cmluZ1xuICAgIGlmIChiYXNlU3RyaW5nKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRlY29kZUNvbnNlbnRTdHJpbmcoYmFzZVN0cmluZykpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHdlYi1zYWZlLCBiYXNlNjQtZW5jb2RlZCBjb25zZW50IHN0cmluZ1xuICAgKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IFdlYi1zYWZlLCBiYXNlNjQtZW5jb2RlZCBjb25zZW50IHN0cmluZ1xuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhDb25zZW50U3RyaW5nLCBbe1xuICAgIGtleTogJ2dldENvbnNlbnRTdHJpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDb25zZW50U3RyaW5nKCkge1xuICAgICAgdmFyIHVwZGF0ZURhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRydWU7XG5cbiAgICAgIGlmICghdGhpcy52ZW5kb3JMaXN0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ29uc2VudFN0cmluZyAtIEEgdmVuZG9yIGxpc3QgaXMgcmVxdWlyZWQgdG8gZW5jb2RlIGEgY29uc2VudCBzdHJpbmcnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHVwZGF0ZURhdGUgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5sYXN0VXBkYXRlZCA9IG5ldyBEYXRlKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbmNvZGVDb25zZW50U3RyaW5nKHtcbiAgICAgICAgdmVyc2lvbjogdGhpcy5nZXRWZXJzaW9uKCksXG4gICAgICAgIHZlbmRvckxpc3Q6IHRoaXMudmVuZG9yTGlzdCxcbiAgICAgICAgYWxsb3dlZFB1cnBvc2VJZHM6IHRoaXMuYWxsb3dlZFB1cnBvc2VJZHMsXG4gICAgICAgIGFsbG93ZWRWZW5kb3JJZHM6IHRoaXMuYWxsb3dlZFZlbmRvcklkcyxcbiAgICAgICAgY3JlYXRlZDogdGhpcy5jcmVhdGVkLFxuICAgICAgICBsYXN0VXBkYXRlZDogdGhpcy5sYXN0VXBkYXRlZCxcbiAgICAgICAgY21wSWQ6IHRoaXMuY21wSWQsXG4gICAgICAgIGNtcFZlcnNpb246IHRoaXMuY21wVmVyc2lvbixcbiAgICAgICAgY29uc2VudFNjcmVlbjogdGhpcy5jb25zZW50U2NyZWVuLFxuICAgICAgICBjb25zZW50TGFuZ3VhZ2U6IHRoaXMuY29uc2VudExhbmd1YWdlLFxuICAgICAgICB2ZW5kb3JMaXN0VmVyc2lvbjogdGhpcy52ZW5kb3JMaXN0VmVyc2lvblxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBtYXggdmVuZG9ySWRcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gbWF4VmVuZG9ySWQgZnJvbSB0aGUgdmVuZG9yTGlzdCBwcm92aWRlZFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRNYXhWZW5kb3JJZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE1heFZlbmRvcklkKCkge1xuICAgICAgcmV0dXJuIF9nZXRNYXhWZW5kb3JJZCh0aGlzLnZlbmRvckxpc3QudmVuZG9ycyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZ2V0IHRoZSBjb25zZW50cyBpbiBhIGJpdCBzdHJpbmcuICBUaGlzIGlzIHRvIGZ1bGZpbGwgdGhlIGluLWFwcCByZXF1aXJlbWVudFxuICAgICAqXG4gICAgICogQHJldHVybiB7c3RyaW5nfSBhIGJpdCBzdHJpbmcgb2YgYWxsIG9mIHRoZSB2ZW5kb3IgY29uc2VudCBkYXRhXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2dldFBhcnNlZFZlbmRvckNvbnNlbnRzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UGFyc2VkVmVuZG9yQ29uc2VudHMoKSB7XG4gICAgICByZXR1cm4gZW5jb2RlVmVuZG9ySWRzVG9CaXRzKF9nZXRNYXhWZW5kb3JJZCh0aGlzLnZlbmRvckxpc3QudmVuZG9ycyksIHRoaXMuYWxsb3dlZFZlbmRvcklkcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZ2V0IHRoZSBjb25zZW50cyBpbiBhIGJpdCBzdHJpbmcuICBUaGlzIGlzIHRvIGZ1bGZpbGwgdGhlIGluLWFwcCByZXF1aXJlbWVudFxuICAgICAqXG4gICAgICogQHJldHVybiB7c3RyaW5nfSBhIGJpdCBzdHJpbmcgb2YgYWxsIG9mIHRoZSB2ZW5kb3IgY29uc2VudCBkYXRhXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2dldFBhcnNlZFB1cnBvc2VDb25zZW50cycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBhcnNlZFB1cnBvc2VDb25zZW50cygpIHtcbiAgICAgIHJldHVybiBlbmNvZGVQdXJwb3NlSWRzVG9CaXRzKHRoaXMudmVuZG9yTGlzdC5wdXJwb3NlcywgdGhpcy5hbGxvd2VkUHVycG9zZUlkcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB3ZWItc2FmZSwgYmFzZTY0LWVuY29kZWQgbWV0YWRhdGEgc3RyaW5nXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFdlYi1zYWZlLCBiYXNlNjQtZW5jb2RlZCBtZXRhZGF0YSBzdHJpbmdcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0TWV0YWRhdGFTdHJpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRNZXRhZGF0YVN0cmluZygpIHtcbiAgICAgIHJldHVybiBlbmNvZGVDb25zZW50U3RyaW5nKHtcbiAgICAgICAgdmVyc2lvbjogdGhpcy5nZXRWZXJzaW9uKCksXG4gICAgICAgIGNyZWF0ZWQ6IHRoaXMuY3JlYXRlZCxcbiAgICAgICAgbGFzdFVwZGF0ZWQ6IHRoaXMubGFzdFVwZGF0ZWQsXG4gICAgICAgIGNtcElkOiB0aGlzLmNtcElkLFxuICAgICAgICBjbXBWZXJzaW9uOiB0aGlzLmNtcFZlcnNpb24sXG4gICAgICAgIGNvbnNlbnRTY3JlZW46IHRoaXMuY29uc2VudFNjcmVlbixcbiAgICAgICAgdmVuZG9yTGlzdFZlcnNpb246IHRoaXMudmVuZG9yTGlzdFZlcnNpb25cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlY29kZSB0aGUgd2ViLXNhZmUsIGJhc2U2NC1lbmNvZGVkIG1ldGFkYXRhIHN0cmluZ1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbmNvZGVkTWV0YWRhdGEgV2ViLXNhZmUsIGJhc2U2NC1lbmNvZGVkIG1ldGFkYXRhIHN0cmluZ1xuICAgICAqIEByZXR1cm4ge29iamVjdH0gZGVjb2RlZCBtZXRhZGF0YVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRWZXJzaW9uJyxcblxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB2ZXJzaW9uIG51bWJlciB0aGF0IHRoaXMgY29uc2VudCBzdHJpbmcgc3BlY2lmaWNhdGlvbiBhZGhlcmVzIHRvXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtpbnRlZ2VyfSBWZXJzaW9uIG51bWJlciBvZiBjb25zZW50IHN0cmluZyBzcGVjaWZpY2F0aW9uXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZlcnNpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy52ZXJzaW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdmVyc2lvbiBvZiB0aGUgdmVuZG9yIGxpc3RcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2ludGVnZXJ9IFZlbmRvciBsaXN0IHZlcnNpb25cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0VmVuZG9yTGlzdFZlcnNpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWZW5kb3JMaXN0VmVyc2lvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnZlbmRvckxpc3RWZXJzaW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgdmVuZG9ycyBsaXN0IHRvIHVzZSB3aGVuIGdlbmVyYXRpbmcgdGhlIGNvbnNlbnQgc3RyaW5nXG4gICAgICpcbiAgICAgKiBUaGUgZXhwZWN0ZWQgZm9ybWF0IGlzIHRoZSBvbmUgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vSW50ZXJhY3RpdmVBZHZlcnRpc2luZ0J1cmVhdS9HRFBSLVRyYW5zcGFyZW5jeS1hbmQtQ29uc2VudC1GcmFtZXdvcmsvYmxvYi9tYXN0ZXIvRHJhZnRfZm9yX1B1YmxpY19Db21tZW50X1RyYW5zcGFyZW5jeSUyMCUyNiUyMENvbnNlbnQlMjBGcmFtZXdvcmslMjAtJTIwY29va2llJTIwYW5kJTIwdmVuZG9yJTIwbGlzdCUyMGZvcm1hdCUyMHNwZWNpZmljYXRpb24lMjB2MS4wYS5wZGZcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB2ZW5kb3JMaXN0IFZlbmRvciBsaXN0IHdpdGggZm9ybWF0IGZyb20gaHR0cHM6Ly9naXRodWIuY29tL0ludGVyYWN0aXZlQWR2ZXJ0aXNpbmdCdXJlYXUvR0RQUi1UcmFuc3BhcmVuY3ktYW5kLUNvbnNlbnQtRnJhbWV3b3JrL2Jsb2IvbWFzdGVyL0RyYWZ0X2Zvcl9QdWJsaWNfQ29tbWVudF9UcmFuc3BhcmVuY3klMjAlMjYlMjBDb25zZW50JTIwRnJhbWV3b3JrJTIwLSUyMGNvb2tpZSUyMGFuZCUyMHZlbmRvciUyMGxpc3QlMjBmb3JtYXQlMjBzcGVjaWZpY2F0aW9uJTIwdjEuMGEucGRmXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3NldEdsb2JhbFZlbmRvckxpc3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRHbG9iYWxWZW5kb3JMaXN0KHZlbmRvckxpc3QpIHtcbiAgICAgIGlmICgodHlwZW9mIHZlbmRvckxpc3QgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHZlbmRvckxpc3QpKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb25zZW50U3RyaW5nIC0gWW91IG11c3QgcHJvdmlkZSBhbiBvYmplY3Qgd2hlbiBzZXR0aW5nIHRoZSBnbG9iYWwgdmVuZG9yIGxpc3QnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF2ZW5kb3JMaXN0LnZlbmRvckxpc3RWZXJzaW9uIHx8ICFBcnJheS5pc0FycmF5KHZlbmRvckxpc3QucHVycG9zZXMpIHx8ICFBcnJheS5pc0FycmF5KHZlbmRvckxpc3QudmVuZG9ycykpIHtcbiAgICAgICAgLy8gVGhlIHByb3ZpZGVkIHZlbmRvciBsaXN0IGRvZXMgbm90IGxvb2sgdmFsaWRcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb25zZW50U3RyaW5nIC0gVGhlIHByb3ZpZGVkIHZlbmRvciBsaXN0IGRvZXMgbm90IHJlc3BlY3QgdGhlIHNjaGVtYSBmcm9tIHRoZSBJQUIgRVXigJlzIEdEUFIgQ29uc2VudCBhbmQgVHJhbnNwYXJlbmN5IEZyYW1ld29yaycpO1xuICAgICAgfVxuXG4gICAgICAvLyBDbG9uaW5nIHRoZSBHVkxcbiAgICAgIC8vIEl0J3MgaW1wb3J0YW50IGFzIHdlIG1pZ2h0IHRyYW5zZm9ybSBpdCBhbmQgZG9uJ3Qgd2FudCB0byBtb2RpZnkgb2JqZWN0cyB0aGF0IHdlIGRvIG5vdCBvd25cbiAgICAgIHRoaXMudmVuZG9yTGlzdCA9IHtcbiAgICAgICAgdmVuZG9yTGlzdFZlcnNpb246IHZlbmRvckxpc3QudmVuZG9yTGlzdFZlcnNpb24sXG4gICAgICAgIGxhc3RVcGRhdGVkOiB2ZW5kb3JMaXN0Lmxhc3RVcGRhdGVkLFxuICAgICAgICBwdXJwb3NlczogdmVuZG9yTGlzdC5wdXJwb3NlcyxcbiAgICAgICAgZmVhdHVyZXM6IHZlbmRvckxpc3QuZmVhdHVyZXMsXG5cbiAgICAgICAgLy8gQ2xvbmUgdGhlIGxpc3QgYW5kIHNvcnQgdGhlIHZlbmRvcnMgYnkgSUQgKGl0IGJyZWFrcyBvdXIgcmFuZ2UgZ2VuZXJhdGlvbiBhbGdvcml0aG0gaWYgdGhleSBhcmUgbm90IHNvcnRlZClcbiAgICAgICAgdmVuZG9yczogdmVuZG9yTGlzdC52ZW5kb3JzLnNsaWNlKDApLnNvcnQoZnVuY3Rpb24gKGZpcnN0VmVuZG9yLCBzZWNvbmRWZW5kb3IpIHtcbiAgICAgICAgICByZXR1cm4gZmlyc3RWZW5kb3IuaWQgPCBzZWNvbmRWZW5kb3IuaWQgPyAtMSA6IDE7XG4gICAgICAgIH0pXG4gICAgICB9O1xuICAgICAgdGhpcy52ZW5kb3JMaXN0VmVyc2lvbiA9IHZlbmRvckxpc3QudmVuZG9yTGlzdFZlcnNpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBJRCBvZiB0aGUgQ29uc2VudCBNYW5hZ2VtZW50IFBsYXRmb3JtIHRoYXQgbGFzdCBtb2RpZmllZCB0aGUgY29uc2VudCBzdHJpbmdcbiAgICAgKlxuICAgICAqIEV2ZXJ5IENNUCBpcyBhc3NpZ25lZCBhIHVuaXF1ZSBJRCBieSB0aGUgSUFCIEVVIHRoYXQgbXVzdCBiZSBwcm92aWRlZCBoZXJlIGJlZm9yZSBjaGFuZ2luZyBhbnkgb3RoZXIgdmFsdWUgaW4gdGhlIGNvbnNlbnQgc3RyaW5nLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtpbnRlZ2VyfSBpZCBDTVAgSURcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnc2V0Q21wSWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRDbXBJZChpZCkge1xuICAgICAgdGhpcy5jbXBJZCA9IGlkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgSUQgb2YgdGhlIENvbnNlbnQgTWFuYWdlbWVudCBQbGF0Zm9ybSBmcm9tIHRoZSBjb25zZW50IHN0cmluZ1xuICAgICAqXG4gICAgICogQHJldHVybiB7aW50ZWdlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q21wSWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDbXBJZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNtcElkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgdmVyc2lvbiBvZiB0aGUgQ29uc2VudCBNYW5hZ2VtZW50IFBsYXRmb3JtIHRoYXQgbGFzdCBtb2RpZmllZCB0aGUgY29uc2VudCBzdHJpbmdcbiAgICAgKlxuICAgICAqIFRoaXMgdmVyc2lvbiBudW1iZXIgcmVmZXJlbmNlcyB0aGUgQ01QIGNvZGUgcnVubmluZyB3aGVuIGNvbGxlY3RpbmcgdGhlIHVzZXIgY29uc2VudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gdmVyc2lvbiBWZXJzaW9uXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3NldENtcFZlcnNpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRDbXBWZXJzaW9uKHZlcnNpb24pIHtcbiAgICAgIHRoaXMuY21wVmVyc2lvbiA9IHZlcnNpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB2ZXJpc29uIG9mIHRoZSBDb25zZW50IE1hbmFnZW1lbnQgUGxhdGZvcm0gdGhhdCBsYXN0IG1vZGlmaWVkIHRoZSBjb25zZW50IHN0cmluZ1xuICAgICAqXG4gICAgICogQHJldHVybiB7aW50ZWdlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q21wVmVyc2lvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENtcFZlcnNpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5jbXBWZXJzaW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgQ29uc2VudCBNYW5hZ2VtZW50IFBsYXRmb3JtIHNjcmVlbiBJRCB0aGF0IGNvbGxlY3RlZCB0aGUgdXNlciBjb25zZW50XG4gICAgICpcbiAgICAgKiBUaGlzIHNjcmVlbiBJRCByZWZlcmVuY2VzIGEgdW5pcXVlIHZpZXcgaW4gdGhlIENNUCB0aGF0IHdhcyBkaXNwbGF5ZWQgdG8gdGhlIHVzZXIgdG8gY29sbGVjdCBjb25zZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0geyp9IHNjcmVlbklkIFNjcmVlbiBJRFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdzZXRDb25zZW50U2NyZWVuJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Q29uc2VudFNjcmVlbihzY3JlZW5JZCkge1xuICAgICAgdGhpcy5jb25zZW50U2NyZWVuID0gc2NyZWVuSWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBDb25zZW50IE1hbmFnZW1lbnQgUGxhdGZvcm0gc2NyZWVuIElEIHRoYXQgY29sbGVjdGVkIHRoZSB1c2VyIGNvbnNlbnRcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2ludGVnZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2dldENvbnNlbnRTY3JlZW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDb25zZW50U2NyZWVuKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29uc2VudFNjcmVlbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGxhbmd1YWdlIHRoYXQgdGhlIENNUCBhc2tlZCB0aGUgY29uc2VudCBpblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlIFR3by1sZXR0ZXIgSVNPNjM5LTEgY29kZSAoZW4sIGZyLCBkZSwgZXRjLilcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnc2V0Q29uc2VudExhbmd1YWdlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Q29uc2VudExhbmd1YWdlKGxhbmd1YWdlKSB7XG4gICAgICBpZiAoY29uc2VudExhbmd1YWdlUmVnZXhwLnRlc3QobGFuZ3VhZ2UpID09PSBmYWxzZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnNlbnRTdHJpbmcgLSBUaGUgY29uc2VudCBsYW5ndWFnZSBtdXN0IGJlIGEgdHdvLWxldHRlciBJU082MzktMSBjb2RlIChlbiwgZnIsIGRlLCBldGMuKScpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNvbnNlbnRMYW5ndWFnZSA9IGxhbmd1YWdlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbGFuZ3VhZ2UgdGhhdCB0aGUgQ01QIGFza2VkIGNvbnNlbnQgaW5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gVHdvLWxldHRlciBJU082MzktMSBjb2RlIChlbiwgZnIsIGRlLCBldGMuKVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRDb25zZW50TGFuZ3VhZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDb25zZW50TGFuZ3VhZ2UoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb25zZW50TGFuZ3VhZ2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBsaXN0IG9mIHB1cnBvc2UgSURzIHRoYXQgdGhlIHVzZXIgaGFzIGdpdmVuIGNvbnNlbnQgdG9cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7aW50ZWdlcltdfSBwdXJwb3NlSWRzIEFuIGFycmF5IG9mIGludGVnZXJzIHRoYXQgbWFwIHRvIHRoZSBwdXJwb3NlcyBkZWZpbmVkIGluIHRoZSB2ZW5kb3IgbGlzdC4gUHVycG9zZXMgaW5jbHVkZWQgaW4gdGhlIGFycmF5IGFyZSBwdXJwb3NlcyB0aGF0IHRoZSB1c2VyIGhhcyBnaXZlbiBjb25zZW50IHRvXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3NldFB1cnBvc2VzQWxsb3dlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFB1cnBvc2VzQWxsb3dlZChwdXJwb3NlSWRzKSB7XG4gICAgICB0aGlzLmFsbG93ZWRQdXJwb3NlSWRzID0gcHVycG9zZUlkcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGxpc3Qgb2YgcHVycG9zZSBJRHMgdGhhdCB0aGUgdXNlciBoYXMgZ2l2ZW4gY29uc2VudCB0b1xuICAgICAqXG4gICAgICogQHJldHVybiB7aW50ZWdlcltdfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRQdXJwb3Nlc0FsbG93ZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQdXJwb3Nlc0FsbG93ZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5hbGxvd2VkUHVycG9zZUlkcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGNvbnNlbnQgc3RhdHVzIG9mIGEgdXNlciBmb3IgYSBnaXZlbiBwdXJwb3NlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IHB1cnBvc2VJZCBUaGUgSUQgKGZyb20gdGhlIHZlbmRvciBsaXN0KSBvZiB0aGUgcHVycG9zZSB0byB1cGRhdGVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlIENvbnNlbnQgc3RhdHVzXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3NldFB1cnBvc2VBbGxvd2VkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UHVycG9zZUFsbG93ZWQocHVycG9zZUlkLCB2YWx1ZSkge1xuICAgICAgdmFyIHB1cnBvc2VJbmRleCA9IHRoaXMuYWxsb3dlZFB1cnBvc2VJZHMuaW5kZXhPZihwdXJwb3NlSWQpO1xuXG4gICAgICBpZiAodmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKHB1cnBvc2VJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICB0aGlzLmFsbG93ZWRQdXJwb3NlSWRzLnB1c2gocHVycG9zZUlkKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHB1cnBvc2VJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICB0aGlzLmFsbG93ZWRQdXJwb3NlSWRzLnNwbGljZShwdXJwb3NlSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIHVzZXIgaGFzIGdpdmVuIGNvbnNlbnQgZm9yIGEgc3BlY2lmaWMgcHVycG9zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtpbnRlZ2VyfSBwdXJwb3NlSWRcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2lzUHVycG9zZUFsbG93ZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc1B1cnBvc2VBbGxvd2VkKHB1cnBvc2VJZCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWxsb3dlZFB1cnBvc2VJZHMuaW5kZXhPZihwdXJwb3NlSWQpICE9PSAtMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGxpc3Qgb2YgdmVuZG9yIElEcyB0aGF0IHRoZSB1c2VyIGhhcyBnaXZlbiBjb25zZW50IHRvXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2ludGVnZXJbXX0gdmVuZG9ySWRzIEFuIGFycmF5IG9mIGludGVnZXJzIHRoYXQgbWFwIHRvIHRoZSB2ZW5kb3JzIGRlZmluZWQgaW4gdGhlIHZlbmRvciBsaXN0LiBWZW5kb3JzIGluY2x1ZGVkIGluIHRoZSBhcnJheSBhcmUgdmVuZG9ycyB0aGF0IHRoZSB1c2VyIGhhcyBnaXZlbiBjb25zZW50IHRvXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3NldFZlbmRvcnNBbGxvd2VkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VmVuZG9yc0FsbG93ZWQodmVuZG9ySWRzKSB7XG4gICAgICB0aGlzLmFsbG93ZWRWZW5kb3JJZHMgPSB2ZW5kb3JJZHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBsaXN0IG9mIHZlbmRvciBJRHMgdGhhdCB0aGUgdXNlciBoYXMgZ2l2ZW4gY29uc2VudCB0b1xuICAgICAqXG4gICAgICogQHJldHVybiB7aW50ZWdlcltdfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRWZW5kb3JzQWxsb3dlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZlbmRvcnNBbGxvd2VkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWxsb3dlZFZlbmRvcklkcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGNvbnNlbnQgc3RhdHVzIG9mIGEgdXNlciBmb3IgYSBnaXZlbiB2ZW5kb3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gdmVuZG9ySWQgVGhlIElEIChmcm9tIHRoZSB2ZW5kb3IgbGlzdCkgb2YgdGhlIHZlbmRvciB0byB1cGRhdGVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlIENvbnNlbnQgc3RhdHVzXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3NldFZlbmRvckFsbG93ZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRWZW5kb3JBbGxvd2VkKHZlbmRvcklkLCB2YWx1ZSkge1xuICAgICAgdmFyIHZlbmRvckluZGV4ID0gdGhpcy5hbGxvd2VkVmVuZG9ySWRzLmluZGV4T2YodmVuZG9ySWQpO1xuXG4gICAgICBpZiAodmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKHZlbmRvckluZGV4ID09PSAtMSkge1xuICAgICAgICAgIHRoaXMuYWxsb3dlZFZlbmRvcklkcy5wdXNoKHZlbmRvcklkKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHZlbmRvckluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIHRoaXMuYWxsb3dlZFZlbmRvcklkcy5zcGxpY2UodmVuZG9ySW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIHVzZXIgaGFzIGdpdmVuIGNvbnNlbnQgZm9yIGEgc3BlY2lmaWMgdmVuZG9yXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IHZlbmRvcklkXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdpc1ZlbmRvckFsbG93ZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc1ZlbmRvckFsbG93ZWQodmVuZG9ySWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFsbG93ZWRWZW5kb3JJZHMuaW5kZXhPZih2ZW5kb3JJZCkgIT09IC0xO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiAnZGVjb2RlTWV0YWRhdGFTdHJpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZWNvZGVNZXRhZGF0YVN0cmluZyhlbmNvZGVkTWV0YWRhdGEpIHtcbiAgICAgIHZhciBkZWNvZGVkU3RyaW5nID0gZGVjb2RlQ29uc2VudFN0cmluZyhlbmNvZGVkTWV0YWRhdGEpO1xuICAgICAgdmFyIG1ldGFkYXRhID0ge307XG4gICAgICB2ZW5kb3JWZXJzaW9uTWFwW2RlY29kZWRTdHJpbmcudmVyc2lvbl0ubWV0YWRhdGFGaWVsZHMuZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgbWV0YWRhdGFbZmllbGRdID0gZGVjb2RlZFN0cmluZ1tmaWVsZF07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBtZXRhZGF0YTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ29uc2VudFN0cmluZztcbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIENvbnNlbnRTdHJpbmc6IENvbnNlbnRTdHJpbmdcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCcuL3V0aWxzL2JpdHMnKSxcbiAgICBkZWNvZGVCaXRzVG9JZHMgPSBfcmVxdWlyZS5kZWNvZGVCaXRzVG9JZHMsXG4gICAgZGVjb2RlRnJvbUJhc2U2NCA9IF9yZXF1aXJlLmRlY29kZUZyb21CYXNlNjQ7XG5cbi8qKlxuICogRGVjb2RlIGNvbnNlbnQgZGF0YSBmcm9tIGEgd2ViLXNhZmUgYmFzZTY0LWVuY29kZWQgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnNlbnRTdHJpbmdcbiAqL1xuXG5cbmZ1bmN0aW9uIGRlY29kZUNvbnNlbnRTdHJpbmcoY29uc2VudFN0cmluZykge1xuICB2YXIgX2RlY29kZUZyb21CYXNlID0gZGVjb2RlRnJvbUJhc2U2NChjb25zZW50U3RyaW5nKSxcbiAgICAgIHZlcnNpb24gPSBfZGVjb2RlRnJvbUJhc2UudmVyc2lvbixcbiAgICAgIGNtcElkID0gX2RlY29kZUZyb21CYXNlLmNtcElkLFxuICAgICAgdmVuZG9yTGlzdFZlcnNpb24gPSBfZGVjb2RlRnJvbUJhc2UudmVuZG9yTGlzdFZlcnNpb24sXG4gICAgICBwdXJwb3NlSWRCaXRTdHJpbmcgPSBfZGVjb2RlRnJvbUJhc2UucHVycG9zZUlkQml0U3RyaW5nLFxuICAgICAgbWF4VmVuZG9ySWQgPSBfZGVjb2RlRnJvbUJhc2UubWF4VmVuZG9ySWQsXG4gICAgICBjcmVhdGVkID0gX2RlY29kZUZyb21CYXNlLmNyZWF0ZWQsXG4gICAgICBsYXN0VXBkYXRlZCA9IF9kZWNvZGVGcm9tQmFzZS5sYXN0VXBkYXRlZCxcbiAgICAgIGlzUmFuZ2UgPSBfZGVjb2RlRnJvbUJhc2UuaXNSYW5nZSxcbiAgICAgIGRlZmF1bHRDb25zZW50ID0gX2RlY29kZUZyb21CYXNlLmRlZmF1bHRDb25zZW50LFxuICAgICAgdmVuZG9ySWRCaXRTdHJpbmcgPSBfZGVjb2RlRnJvbUJhc2UudmVuZG9ySWRCaXRTdHJpbmcsXG4gICAgICB2ZW5kb3JSYW5nZUxpc3QgPSBfZGVjb2RlRnJvbUJhc2UudmVuZG9yUmFuZ2VMaXN0LFxuICAgICAgY21wVmVyc2lvbiA9IF9kZWNvZGVGcm9tQmFzZS5jbXBWZXJzaW9uLFxuICAgICAgY29uc2VudFNjcmVlbiA9IF9kZWNvZGVGcm9tQmFzZS5jb25zZW50U2NyZWVuLFxuICAgICAgY29uc2VudExhbmd1YWdlID0gX2RlY29kZUZyb21CYXNlLmNvbnNlbnRMYW5ndWFnZTtcblxuICB2YXIgY29uc2VudFN0cmluZ0RhdGEgPSB7XG4gICAgdmVyc2lvbjogdmVyc2lvbixcbiAgICBjbXBJZDogY21wSWQsXG4gICAgdmVuZG9yTGlzdFZlcnNpb246IHZlbmRvckxpc3RWZXJzaW9uLFxuICAgIGFsbG93ZWRQdXJwb3NlSWRzOiBkZWNvZGVCaXRzVG9JZHMocHVycG9zZUlkQml0U3RyaW5nKSxcbiAgICBtYXhWZW5kb3JJZDogbWF4VmVuZG9ySWQsXG4gICAgY3JlYXRlZDogY3JlYXRlZCxcbiAgICBsYXN0VXBkYXRlZDogbGFzdFVwZGF0ZWQsXG4gICAgY21wVmVyc2lvbjogY21wVmVyc2lvbixcbiAgICBjb25zZW50U2NyZWVuOiBjb25zZW50U2NyZWVuLFxuICAgIGNvbnNlbnRMYW5ndWFnZTogY29uc2VudExhbmd1YWdlXG4gIH07XG5cbiAgaWYgKGlzUmFuZ2UpIHtcbiAgICAvKiBlc2xpbnQgbm8tc2hhZG93OiBvZmYgKi9cbiAgICB2YXIgaWRNYXAgPSB2ZW5kb3JSYW5nZUxpc3QucmVkdWNlKGZ1bmN0aW9uIChhY2MsIF9yZWYpIHtcbiAgICAgIHZhciBpc1JhbmdlID0gX3JlZi5pc1JhbmdlLFxuICAgICAgICAgIHN0YXJ0VmVuZG9ySWQgPSBfcmVmLnN0YXJ0VmVuZG9ySWQsXG4gICAgICAgICAgZW5kVmVuZG9ySWQgPSBfcmVmLmVuZFZlbmRvcklkO1xuXG4gICAgICB2YXIgbGFzdFZlbmRvcklkID0gaXNSYW5nZSA/IGVuZFZlbmRvcklkIDogc3RhcnRWZW5kb3JJZDtcblxuICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0VmVuZG9ySWQ7IGkgPD0gbGFzdFZlbmRvcklkOyBpICs9IDEpIHtcbiAgICAgICAgYWNjW2ldID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG5cbiAgICBjb25zZW50U3RyaW5nRGF0YS5hbGxvd2VkVmVuZG9ySWRzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMTsgaSA8PSBtYXhWZW5kb3JJZDsgaSArPSAxKSB7XG4gICAgICBpZiAoZGVmYXVsdENvbnNlbnQgJiYgIWlkTWFwW2ldIHx8ICFkZWZhdWx0Q29uc2VudCAmJiBpZE1hcFtpXSkge1xuICAgICAgICBpZiAoY29uc2VudFN0cmluZ0RhdGEuYWxsb3dlZFZlbmRvcklkcy5pbmRleE9mKGkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNlbnRTdHJpbmdEYXRhLmFsbG93ZWRWZW5kb3JJZHMucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zZW50U3RyaW5nRGF0YS5hbGxvd2VkVmVuZG9ySWRzID0gZGVjb2RlQml0c1RvSWRzKHZlbmRvcklkQml0U3RyaW5nKTtcbiAgfVxuXG4gIHJldHVybiBjb25zZW50U3RyaW5nRGF0YTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRlY29kZUNvbnNlbnRTdHJpbmc6IGRlY29kZUNvbnNlbnRTdHJpbmdcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCcuL3V0aWxzL2JpdHMnKSxcbiAgICBlbmNvZGVUb0Jhc2U2NCA9IF9yZXF1aXJlLmVuY29kZVRvQmFzZTY0LFxuICAgIHBhZFJpZ2h0ID0gX3JlcXVpcmUucGFkUmlnaHQ7XG5cbi8qKlxuICogRW5jb2RlIGEgbGlzdCBvZiB2ZW5kb3IgSURzIGludG8gYml0c1xuICpcbiAqIEBwYXJhbSB7aW50ZWdlcn0gbWF4VmVuZG9ySWQgSGlnaGVzdCB2ZW5kb3IgSUQgaW4gdGhlIHZlbmRvciBsaXN0XG4gKiBAcGFyYW0ge2ludGVnZXJbXX0gYWxsb3dlZFZlbmRvcklkcyBWZW5kb3JzIHRoYXQgdGhlIHVzZXIgaGFzIGdpdmVuIGNvbnNlbnQgdG9cbiAqL1xuXG5cbmZ1bmN0aW9uIGVuY29kZVZlbmRvcklkc1RvQml0cyhtYXhWZW5kb3JJZCkge1xuICB2YXIgYWxsb3dlZFZlbmRvcklkcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogW107XG5cbiAgdmFyIHZlbmRvclN0cmluZyA9ICcnO1xuXG4gIGZvciAodmFyIGlkID0gMTsgaWQgPD0gbWF4VmVuZG9ySWQ7IGlkICs9IDEpIHtcbiAgICB2ZW5kb3JTdHJpbmcgKz0gYWxsb3dlZFZlbmRvcklkcy5pbmRleE9mKGlkKSAhPT0gLTEgPyAnMScgOiAnMCc7XG4gIH1cblxuICByZXR1cm4gcGFkUmlnaHQodmVuZG9yU3RyaW5nLCBNYXRoLm1heCgwLCBtYXhWZW5kb3JJZCAtIHZlbmRvclN0cmluZy5sZW5ndGgpKTtcbn1cblxuLyoqXG4gKiBFbmNvZGUgYSBsaXN0IG9mIHB1cnBvc2UgSURzIGludG8gYml0c1xuICpcbiAqIEBwYXJhbSB7Kn0gcHVycG9zZXMgTGlzdCBvZiBwdXJwb3NlcyBmcm9tIHRoZSB2ZW5kb3IgbGlzdFxuICogQHBhcmFtIHsqfSBhbGxvd2VkUHVycG9zZUlkcyBMaXN0IG9mIHB1cnBvc2UgSURzIHRoYXQgdGhlIHVzZXIgaGFzIGdpdmVuIGNvbnNlbnQgdG9cbiAqL1xuZnVuY3Rpb24gZW5jb2RlUHVycG9zZUlkc1RvQml0cyhwdXJwb3Nlcykge1xuICB2YXIgYWxsb3dlZFB1cnBvc2VJZHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG5ldyBTZXQoKTtcblxuICB2YXIgbWF4UHVycG9zZUlkID0gMDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwdXJwb3Nlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIG1heFB1cnBvc2VJZCA9IE1hdGgubWF4KG1heFB1cnBvc2VJZCwgcHVycG9zZXNbaV0uaWQpO1xuICB9XG4gIGZvciAodmFyIF9pID0gMDsgX2kgPCBhbGxvd2VkUHVycG9zZUlkcy5sZW5ndGg7IF9pICs9IDEpIHtcbiAgICBtYXhQdXJwb3NlSWQgPSBNYXRoLm1heChtYXhQdXJwb3NlSWQsIGFsbG93ZWRQdXJwb3NlSWRzW19pXSk7XG4gIH1cblxuICB2YXIgcHVycG9zZVN0cmluZyA9ICcnO1xuICBmb3IgKHZhciBpZCA9IDE7IGlkIDw9IG1heFB1cnBvc2VJZDsgaWQgKz0gMSkge1xuICAgIHB1cnBvc2VTdHJpbmcgKz0gYWxsb3dlZFB1cnBvc2VJZHMuaW5kZXhPZihpZCkgIT09IC0xID8gJzEnIDogJzAnO1xuICB9XG5cbiAgcmV0dXJuIHB1cnBvc2VTdHJpbmc7XG59XG5cbi8qKlxuICogQ29udmVydCBhIGxpc3Qgb2YgdmVuZG9yIElEcyB0byByYW5nZXNcbiAqXG4gKiBAcGFyYW0ge29iamVjdFtdfSB2ZW5kb3JzIExpc3Qgb2YgdmVuZG9ycyBmcm9tIHRoZSB2ZW5kb3IgbGlzdCAoaW1wb3J0YW50OiB0aGlzIGxpc3QgbXVzdCB0byBiZSBzb3J0ZWQgYnkgSUQpXG4gKiBAcGFyYW0ge2ludGVnZXJbXX0gYWxsb3dlZFZlbmRvcklkcyBMaXN0IG9mIHZlbmRvciBJRHMgdGhhdCB0aGUgdXNlciBoYXMgZ2l2ZW4gY29uc2VudCB0b1xuICovXG5mdW5jdGlvbiBjb252ZXJ0VmVuZG9yc1RvUmFuZ2VzKHZlbmRvcnMsIGFsbG93ZWRWZW5kb3JJZHMpIHtcbiAgdmFyIHJhbmdlID0gW107XG4gIHZhciByYW5nZXMgPSBbXTtcblxuICB2YXIgaWRzSW5MaXN0ID0gdmVuZG9ycy5tYXAoZnVuY3Rpb24gKHZlbmRvcikge1xuICAgIHJldHVybiB2ZW5kb3IuaWQ7XG4gIH0pO1xuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB2ZW5kb3JzLmxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIHZhciBpZCA9IHZlbmRvcnNbaW5kZXhdLmlkO1xuXG4gICAgaWYgKGFsbG93ZWRWZW5kb3JJZHMuaW5kZXhPZihpZCkgIT09IC0xKSB7XG4gICAgICByYW5nZS5wdXNoKGlkKTtcbiAgICB9XG5cbiAgICAvLyBEbyB3ZSBuZWVkIHRvIGNsb3NlIHRoZSBjdXJyZW50IHJhbmdlP1xuICAgIGlmICgoYWxsb3dlZFZlbmRvcklkcy5pbmRleE9mKGlkKSA9PT0gLTEgLy8gVGhlIHZlbmRvciB3ZSBhcmUgZXZhbHVhdGluZyBpcyBub3QgYWxsb3dlZFxuICAgIHx8IGluZGV4ID09PSB2ZW5kb3JzLmxlbmd0aCAtIDEgLy8gVGhlcmUgaXMgbm8gbW9yZSB2ZW5kb3IgdG8gZXZhbHVhdGVcbiAgICB8fCBpZHNJbkxpc3QuaW5kZXhPZihpZCArIDEpID09PSAtMSAvLyBUaGVyZSBpcyBubyB2ZW5kb3IgYWZ0ZXIgdGhpcyBvbmUgKGllIHRoZXJlIGlzIGEgZ2FwIGluIHRoZSB2ZW5kb3IgSURzKSA7IHdlIG5lZWQgdG8gc3RvcCBoZXJlIHRvIGF2b2lkIGluY2x1ZGluZyB2ZW5kb3JzIHRoYXQgZG8gbm90IGhhdmUgY29uc2VudFxuICAgICkgJiYgcmFuZ2UubGVuZ3RoKSB7XG4gICAgICB2YXIgc3RhcnRWZW5kb3JJZCA9IHJhbmdlLnNoaWZ0KCk7XG4gICAgICB2YXIgZW5kVmVuZG9ySWQgPSByYW5nZS5wb3AoKTtcblxuICAgICAgcmFuZ2UgPSBbXTtcblxuICAgICAgcmFuZ2VzLnB1c2goe1xuICAgICAgICBpc1JhbmdlOiB0eXBlb2YgZW5kVmVuZG9ySWQgPT09ICdudW1iZXInLFxuICAgICAgICBzdGFydFZlbmRvcklkOiBzdGFydFZlbmRvcklkLFxuICAgICAgICBlbmRWZW5kb3JJZDogZW5kVmVuZG9ySWRcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByYW5nZXM7XG59XG5cbi8qKlxuICogR2V0IG1heFZlbmRvcklkIGZyb20gdGhlIGxpc3Qgb2YgdmVuZG9ycyBhbmQgcmV0dXJuIHRoYXQgaWRcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdmVuZG9yc1xuICovXG5mdW5jdGlvbiBnZXRNYXhWZW5kb3JJZCh2ZW5kb3JzKSB7XG4gIC8vIEZpbmQgdGhlIG1heCB2ZW5kb3IgSUQgZnJvbSB0aGUgdmVuZG9yIGxpc3RcbiAgdmFyIG1heFZlbmRvcklkID0gMDtcblxuICB2ZW5kb3JzLmZvckVhY2goZnVuY3Rpb24gKHZlbmRvcikge1xuICAgIGlmICh2ZW5kb3IuaWQgPiBtYXhWZW5kb3JJZCkge1xuICAgICAgbWF4VmVuZG9ySWQgPSB2ZW5kb3IuaWQ7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG1heFZlbmRvcklkO1xufVxuLyoqXG4gKiBFbmNvZGUgY29uc2VudCBkYXRhIGludG8gYSB3ZWItc2FmZSBiYXNlNjQtZW5jb2RlZCBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uc2VudERhdGEgRGF0YSB0byBpbmNsdWRlIGluIHRoZSBzdHJpbmcgKHNlZSBgdXRpbHMvZGVmaW5pdGlvbnMuanNgIGZvciB0aGUgbGlzdCBvZiBmaWVsZHMpXG4gKi9cbmZ1bmN0aW9uIGVuY29kZUNvbnNlbnRTdHJpbmcoY29uc2VudERhdGEpIHtcbiAgdmFyIG1heFZlbmRvcklkID0gY29uc2VudERhdGEubWF4VmVuZG9ySWQ7XG4gIHZhciBfY29uc2VudERhdGEkdmVuZG9yTGkgPSBjb25zZW50RGF0YS52ZW5kb3JMaXN0LFxuICAgICAgdmVuZG9yTGlzdCA9IF9jb25zZW50RGF0YSR2ZW5kb3JMaSA9PT0gdW5kZWZpbmVkID8ge30gOiBfY29uc2VudERhdGEkdmVuZG9yTGksXG4gICAgICBhbGxvd2VkUHVycG9zZUlkcyA9IGNvbnNlbnREYXRhLmFsbG93ZWRQdXJwb3NlSWRzLFxuICAgICAgYWxsb3dlZFZlbmRvcklkcyA9IGNvbnNlbnREYXRhLmFsbG93ZWRWZW5kb3JJZHM7XG4gIHZhciBfdmVuZG9yTGlzdCR2ZW5kb3JzID0gdmVuZG9yTGlzdC52ZW5kb3JzLFxuICAgICAgdmVuZG9ycyA9IF92ZW5kb3JMaXN0JHZlbmRvcnMgPT09IHVuZGVmaW5lZCA/IFtdIDogX3ZlbmRvckxpc3QkdmVuZG9ycyxcbiAgICAgIF92ZW5kb3JMaXN0JHB1cnBvc2VzID0gdmVuZG9yTGlzdC5wdXJwb3NlcyxcbiAgICAgIHB1cnBvc2VzID0gX3ZlbmRvckxpc3QkcHVycG9zZXMgPT09IHVuZGVmaW5lZCA/IFtdIDogX3ZlbmRvckxpc3QkcHVycG9zZXM7XG5cbiAgLy8gaWYgbm8gbWF4VmVuZG9ySWQgaXMgaW4gdGhlIENvbnNlbnREYXRhLCBnZXQgaXRcblxuICBpZiAoIW1heFZlbmRvcklkKSB7XG4gICAgbWF4VmVuZG9ySWQgPSBnZXRNYXhWZW5kb3JJZCh2ZW5kb3JzKTtcbiAgfVxuXG4gIC8vIEVuY29kZSB0aGUgZGF0YSB3aXRoIGFuZCB3aXRob3V0IHJhbmdlcyBhbmQgcmV0dXJuIHRoZSBzbWFsbGVzdCBlbmNvZGVkIHBheWxvYWRcbiAgdmFyIG5vUmFuZ2VzRGF0YSA9IGVuY29kZVRvQmFzZTY0KF9leHRlbmRzKHt9LCBjb25zZW50RGF0YSwge1xuICAgIG1heFZlbmRvcklkOiBtYXhWZW5kb3JJZCxcbiAgICBwdXJwb3NlSWRCaXRTdHJpbmc6IGVuY29kZVB1cnBvc2VJZHNUb0JpdHMocHVycG9zZXMsIGFsbG93ZWRQdXJwb3NlSWRzKSxcbiAgICBpc1JhbmdlOiBmYWxzZSxcbiAgICB2ZW5kb3JJZEJpdFN0cmluZzogZW5jb2RlVmVuZG9ySWRzVG9CaXRzKG1heFZlbmRvcklkLCBhbGxvd2VkVmVuZG9ySWRzKVxuICB9KSk7XG5cbiAgdmFyIHZlbmRvclJhbmdlTGlzdCA9IGNvbnZlcnRWZW5kb3JzVG9SYW5nZXModmVuZG9ycywgYWxsb3dlZFZlbmRvcklkcyk7XG5cbiAgdmFyIHJhbmdlc0RhdGEgPSBlbmNvZGVUb0Jhc2U2NChfZXh0ZW5kcyh7fSwgY29uc2VudERhdGEsIHtcbiAgICBtYXhWZW5kb3JJZDogbWF4VmVuZG9ySWQsXG4gICAgcHVycG9zZUlkQml0U3RyaW5nOiBlbmNvZGVQdXJwb3NlSWRzVG9CaXRzKHB1cnBvc2VzLCBhbGxvd2VkUHVycG9zZUlkcyksXG4gICAgaXNSYW5nZTogdHJ1ZSxcbiAgICBkZWZhdWx0Q29uc2VudDogZmFsc2UsXG4gICAgbnVtRW50cmllczogdmVuZG9yUmFuZ2VMaXN0Lmxlbmd0aCxcbiAgICB2ZW5kb3JSYW5nZUxpc3Q6IHZlbmRvclJhbmdlTGlzdFxuICB9KSk7XG5cbiAgcmV0dXJuIG5vUmFuZ2VzRGF0YS5sZW5ndGggPCByYW5nZXNEYXRhLmxlbmd0aCA/IG5vUmFuZ2VzRGF0YSA6IHJhbmdlc0RhdGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjb252ZXJ0VmVuZG9yc1RvUmFuZ2VzOiBjb252ZXJ0VmVuZG9yc1RvUmFuZ2VzLFxuICBlbmNvZGVDb25zZW50U3RyaW5nOiBlbmNvZGVDb25zZW50U3RyaW5nLFxuICBnZXRNYXhWZW5kb3JJZDogZ2V0TWF4VmVuZG9ySWQsXG4gIGVuY29kZVZlbmRvcklkc1RvQml0czogZW5jb2RlVmVuZG9ySWRzVG9CaXRzLFxuICBlbmNvZGVQdXJwb3NlSWRzVG9CaXRzOiBlbmNvZGVQdXJwb3NlSWRzVG9CaXRzXG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgnLi9jb25zZW50LXN0cmluZycpLFxuICAgIENvbnNlbnRTdHJpbmcgPSBfcmVxdWlyZS5Db25zZW50U3RyaW5nO1xuXG52YXIgX3JlcXVpcmUyID0gcmVxdWlyZSgnLi9kZWNvZGUnKSxcbiAgICBkZWNvZGVDb25zZW50U3RyaW5nID0gX3JlcXVpcmUyLmRlY29kZUNvbnNlbnRTdHJpbmc7XG5cbnZhciBfcmVxdWlyZTMgPSByZXF1aXJlKCcuL2VuY29kZScpLFxuICAgIGVuY29kZUNvbnNlbnRTdHJpbmcgPSBfcmVxdWlyZTMuZW5jb2RlQ29uc2VudFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIENvbnNlbnRTdHJpbmc6IENvbnNlbnRTdHJpbmcsXG4gIGRlY29kZUNvbnNlbnRTdHJpbmc6IGRlY29kZUNvbnNlbnRTdHJpbmcsXG4gIGVuY29kZUNvbnNlbnRTdHJpbmc6IGVuY29kZUNvbnNlbnRTdHJpbmdcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBlc2xpbnQgbm8tdXNlLWJlZm9yZS1kZWZpbmU6IG9mZiAqL1xuXG52YXIgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZS02NCcpO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCcuL2RlZmluaXRpb25zJyksXG4gICAgdmVyc2lvbk51bUJpdHMgPSBfcmVxdWlyZS52ZXJzaW9uTnVtQml0cyxcbiAgICB2ZW5kb3JWZXJzaW9uTWFwID0gX3JlcXVpcmUudmVuZG9yVmVyc2lvbk1hcDtcblxuZnVuY3Rpb24gcmVwZWF0KGNvdW50KSB7XG4gIHZhciBzdHJpbmcgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICcwJztcblxuICB2YXIgcGFkU3RyaW5nID0gJyc7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSArPSAxKSB7XG4gICAgcGFkU3RyaW5nICs9IHN0cmluZztcbiAgfVxuXG4gIHJldHVybiBwYWRTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHBhZExlZnQoc3RyaW5nLCBwYWRkaW5nKSB7XG4gIHJldHVybiByZXBlYXQoTWF0aC5tYXgoMCwgcGFkZGluZykpICsgc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBwYWRSaWdodChzdHJpbmcsIHBhZGRpbmcpIHtcbiAgcmV0dXJuIHN0cmluZyArIHJlcGVhdChNYXRoLm1heCgwLCBwYWRkaW5nKSk7XG59XG5cbmZ1bmN0aW9uIGVuY29kZUludFRvQml0cyhudW1iZXIsIG51bUJpdHMpIHtcbiAgdmFyIGJpdFN0cmluZyA9ICcnO1xuXG4gIGlmICh0eXBlb2YgbnVtYmVyID09PSAnbnVtYmVyJyAmJiAhaXNOYU4obnVtYmVyKSkge1xuICAgIGJpdFN0cmluZyA9IHBhcnNlSW50KG51bWJlciwgMTApLnRvU3RyaW5nKDIpO1xuICB9XG5cbiAgLy8gUGFkIHRoZSBzdHJpbmcgaWYgbm90IGZpbGxpbmcgYWxsIGJpdHNcbiAgaWYgKG51bUJpdHMgPj0gYml0U3RyaW5nLmxlbmd0aCkge1xuICAgIGJpdFN0cmluZyA9IHBhZExlZnQoYml0U3RyaW5nLCBudW1CaXRzIC0gYml0U3RyaW5nLmxlbmd0aCk7XG4gIH1cblxuICAvLyBUcnVuY2F0ZSB0aGUgc3RyaW5nIGlmIGxvbmdlciB0aGFuIHRoZSBudW1iZXIgb2YgYml0c1xuICBpZiAoYml0U3RyaW5nLmxlbmd0aCA+IG51bUJpdHMpIHtcbiAgICBiaXRTdHJpbmcgPSBiaXRTdHJpbmcuc3Vic3RyaW5nKDAsIG51bUJpdHMpO1xuICB9XG5cbiAgcmV0dXJuIGJpdFN0cmluZztcbn1cblxuZnVuY3Rpb24gZW5jb2RlQm9vbFRvQml0cyh2YWx1ZSkge1xuICByZXR1cm4gZW5jb2RlSW50VG9CaXRzKHZhbHVlID09PSB0cnVlID8gMSA6IDAsIDEpO1xufVxuXG5mdW5jdGlvbiBlbmNvZGVEYXRlVG9CaXRzKGRhdGUsIG51bUJpdHMpIHtcbiAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIGVuY29kZUludFRvQml0cyhkYXRlLmdldFRpbWUoKSAvIDEwMCwgbnVtQml0cyk7XG4gIH1cbiAgcmV0dXJuIGVuY29kZUludFRvQml0cyhkYXRlLCBudW1CaXRzKTtcbn1cblxuZnVuY3Rpb24gZW5jb2RlTGV0dGVyVG9CaXRzKGxldHRlciwgbnVtQml0cykge1xuICByZXR1cm4gZW5jb2RlSW50VG9CaXRzKGxldHRlci50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgLSA2NSwgbnVtQml0cyk7XG59XG5cbmZ1bmN0aW9uIGVuY29kZUxhbmd1YWdlVG9CaXRzKGxhbmd1YWdlKSB7XG4gIHZhciBudW1CaXRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxMjtcblxuICByZXR1cm4gZW5jb2RlTGV0dGVyVG9CaXRzKGxhbmd1YWdlLnNsaWNlKDAsIDEpLCBudW1CaXRzIC8gMikgKyBlbmNvZGVMZXR0ZXJUb0JpdHMobGFuZ3VhZ2Uuc2xpY2UoMSksIG51bUJpdHMgLyAyKTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlQml0c1RvSW50KGJpdFN0cmluZywgc3RhcnQsIGxlbmd0aCkge1xuICByZXR1cm4gcGFyc2VJbnQoYml0U3RyaW5nLnN1YnN0cihzdGFydCwgbGVuZ3RoKSwgMik7XG59XG5cbmZ1bmN0aW9uIGRlY29kZUJpdHNUb0RhdGUoYml0U3RyaW5nLCBzdGFydCwgbGVuZ3RoKSB7XG4gIHJldHVybiBuZXcgRGF0ZShkZWNvZGVCaXRzVG9JbnQoYml0U3RyaW5nLCBzdGFydCwgbGVuZ3RoKSAqIDEwMCk7XG59XG5cbmZ1bmN0aW9uIGRlY29kZUJpdHNUb0Jvb2woYml0U3RyaW5nLCBzdGFydCkge1xuICByZXR1cm4gcGFyc2VJbnQoYml0U3RyaW5nLnN1YnN0cihzdGFydCwgMSksIDIpID09PSAxO1xufVxuXG5mdW5jdGlvbiBkZWNvZGVCaXRzVG9MZXR0ZXIoYml0U3RyaW5nKSB7XG4gIHZhciBsZXR0ZXJDb2RlID0gZGVjb2RlQml0c1RvSW50KGJpdFN0cmluZyk7XG4gIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGxldHRlckNvZGUgKyA2NSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlQml0c1RvTGFuZ3VhZ2UoYml0U3RyaW5nLCBzdGFydCwgbGVuZ3RoKSB7XG4gIHZhciBsYW5ndWFnZUJpdFN0cmluZyA9IGJpdFN0cmluZy5zdWJzdHIoc3RhcnQsIGxlbmd0aCk7XG5cbiAgcmV0dXJuIGRlY29kZUJpdHNUb0xldHRlcihsYW5ndWFnZUJpdFN0cmluZy5zbGljZSgwLCBsZW5ndGggLyAyKSkgKyBkZWNvZGVCaXRzVG9MZXR0ZXIobGFuZ3VhZ2VCaXRTdHJpbmcuc2xpY2UobGVuZ3RoIC8gMikpO1xufVxuXG5mdW5jdGlvbiBlbmNvZGVGaWVsZChfcmVmKSB7XG4gIHZhciBpbnB1dCA9IF9yZWYuaW5wdXQsXG4gICAgICBmaWVsZCA9IF9yZWYuZmllbGQ7XG4gIHZhciBuYW1lID0gZmllbGQubmFtZSxcbiAgICAgIHR5cGUgPSBmaWVsZC50eXBlLFxuICAgICAgbnVtQml0cyA9IGZpZWxkLm51bUJpdHMsXG4gICAgICBlbmNvZGVyID0gZmllbGQuZW5jb2RlcixcbiAgICAgIHZhbGlkYXRvciA9IGZpZWxkLnZhbGlkYXRvcjtcblxuXG4gIGlmICh0eXBlb2YgdmFsaWRhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKCF2YWxpZGF0b3IoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG4gIGlmICh0eXBlb2YgZW5jb2RlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBlbmNvZGVyKGlucHV0KTtcbiAgfVxuXG4gIHZhciBiaXRDb3VudCA9IHR5cGVvZiBudW1CaXRzID09PSAnZnVuY3Rpb24nID8gbnVtQml0cyhpbnB1dCkgOiBudW1CaXRzO1xuXG4gIHZhciBpbnB1dFZhbHVlID0gaW5wdXRbbmFtZV07XG4gIHZhciBmaWVsZFZhbHVlID0gaW5wdXRWYWx1ZSA9PT0gbnVsbCB8fCBpbnB1dFZhbHVlID09PSB1bmRlZmluZWQgPyAnJyA6IGlucHV0VmFsdWU7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnaW50JzpcbiAgICAgIHJldHVybiBlbmNvZGVJbnRUb0JpdHMoZmllbGRWYWx1ZSwgYml0Q291bnQpO1xuICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgcmV0dXJuIGVuY29kZUJvb2xUb0JpdHMoZmllbGRWYWx1ZSk7XG4gICAgY2FzZSAnZGF0ZSc6XG4gICAgICByZXR1cm4gZW5jb2RlRGF0ZVRvQml0cyhmaWVsZFZhbHVlLCBiaXRDb3VudCk7XG4gICAgY2FzZSAnYml0cyc6XG4gICAgICByZXR1cm4gcGFkUmlnaHQoZmllbGRWYWx1ZSwgYml0Q291bnQgLSBmaWVsZFZhbHVlLmxlbmd0aCkuc3Vic3RyaW5nKDAsIGJpdENvdW50KTtcbiAgICBjYXNlICdsaXN0JzpcbiAgICAgIHJldHVybiBmaWVsZFZhbHVlLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBsaXN0VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGFjYyArIGVuY29kZUZpZWxkcyh7XG4gICAgICAgICAgaW5wdXQ6IGxpc3RWYWx1ZSxcbiAgICAgICAgICBmaWVsZHM6IGZpZWxkLmZpZWxkc1xuICAgICAgICB9KTtcbiAgICAgIH0sICcnKTtcbiAgICBjYXNlICdsYW5ndWFnZSc6XG4gICAgICByZXR1cm4gZW5jb2RlTGFuZ3VhZ2VUb0JpdHMoZmllbGRWYWx1ZSwgYml0Q291bnQpO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnNlbnRTdHJpbmcgLSBVbmtub3duIGZpZWxkIHR5cGUgJyArIHR5cGUgKyAnIGZvciBlbmNvZGluZycpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVuY29kZUZpZWxkcyhfcmVmMikge1xuICB2YXIgaW5wdXQgPSBfcmVmMi5pbnB1dCxcbiAgICAgIGZpZWxkcyA9IF9yZWYyLmZpZWxkcztcblxuICByZXR1cm4gZmllbGRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBmaWVsZCkge1xuICAgIGFjYyArPSBlbmNvZGVGaWVsZCh7IGlucHV0OiBpbnB1dCwgZmllbGQ6IGZpZWxkIH0pO1xuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwgJycpO1xufVxuXG5mdW5jdGlvbiBkZWNvZGVGaWVsZChfcmVmMykge1xuICB2YXIgaW5wdXQgPSBfcmVmMy5pbnB1dCxcbiAgICAgIG91dHB1dCA9IF9yZWYzLm91dHB1dCxcbiAgICAgIHN0YXJ0UG9zaXRpb24gPSBfcmVmMy5zdGFydFBvc2l0aW9uLFxuICAgICAgZmllbGQgPSBfcmVmMy5maWVsZDtcbiAgdmFyIHR5cGUgPSBmaWVsZC50eXBlLFxuICAgICAgbnVtQml0cyA9IGZpZWxkLm51bUJpdHMsXG4gICAgICBkZWNvZGVyID0gZmllbGQuZGVjb2RlcixcbiAgICAgIHZhbGlkYXRvciA9IGZpZWxkLnZhbGlkYXRvcixcbiAgICAgIGxpc3RDb3VudCA9IGZpZWxkLmxpc3RDb3VudDtcblxuXG4gIGlmICh0eXBlb2YgdmFsaWRhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKCF2YWxpZGF0b3Iob3V0cHV0KSkge1xuICAgICAgLy8gTm90IGRlY29kaW5nIHRoaXMgZmllbGQgc28gbWFrZSBzdXJlIHdlIHN0YXJ0IHBhcnNpbmcgdGhlIG5leHQgZmllbGQgYXRcbiAgICAgIC8vIHRoZSBzYW1lIHBvaW50XG4gICAgICByZXR1cm4geyBuZXdQb3NpdGlvbjogc3RhcnRQb3NpdGlvbiB9O1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgZGVjb2RlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBkZWNvZGVyKGlucHV0LCBvdXRwdXQsIHN0YXJ0UG9zaXRpb24pO1xuICB9XG5cbiAgdmFyIGJpdENvdW50ID0gdHlwZW9mIG51bUJpdHMgPT09ICdmdW5jdGlvbicgPyBudW1CaXRzKG91dHB1dCkgOiBudW1CaXRzO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ2ludCc6XG4gICAgICByZXR1cm4geyBmaWVsZFZhbHVlOiBkZWNvZGVCaXRzVG9JbnQoaW5wdXQsIHN0YXJ0UG9zaXRpb24sIGJpdENvdW50KSB9O1xuICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgcmV0dXJuIHsgZmllbGRWYWx1ZTogZGVjb2RlQml0c1RvQm9vbChpbnB1dCwgc3RhcnRQb3NpdGlvbikgfTtcbiAgICBjYXNlICdkYXRlJzpcbiAgICAgIHJldHVybiB7IGZpZWxkVmFsdWU6IGRlY29kZUJpdHNUb0RhdGUoaW5wdXQsIHN0YXJ0UG9zaXRpb24sIGJpdENvdW50KSB9O1xuICAgIGNhc2UgJ2JpdHMnOlxuICAgICAgcmV0dXJuIHsgZmllbGRWYWx1ZTogaW5wdXQuc3Vic3RyKHN0YXJ0UG9zaXRpb24sIGJpdENvdW50KSB9O1xuICAgIGNhc2UgJ2xpc3QnOlxuICAgICAgcmV0dXJuIGRlY29kZUxpc3QoaW5wdXQsIG91dHB1dCwgc3RhcnRQb3NpdGlvbiwgZmllbGQsIGxpc3RDb3VudCk7XG4gICAgY2FzZSAnbGFuZ3VhZ2UnOlxuICAgICAgcmV0dXJuIHsgZmllbGRWYWx1ZTogZGVjb2RlQml0c1RvTGFuZ3VhZ2UoaW5wdXQsIHN0YXJ0UG9zaXRpb24sIGJpdENvdW50KSB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnNlbnRTdHJpbmcgLSBVbmtub3duIGZpZWxkIHR5cGUgJyArIHR5cGUgKyAnIGZvciBkZWNvZGluZycpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlY29kZUxpc3QoaW5wdXQsIG91dHB1dCwgc3RhcnRQb3NpdGlvbiwgZmllbGQsIGxpc3RDb3VudCkge1xuICB2YXIgbGlzdEVudHJ5Q291bnQgPSAwO1xuXG4gIGlmICh0eXBlb2YgbGlzdENvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbGlzdEVudHJ5Q291bnQgPSBsaXN0Q291bnQob3V0cHV0KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdENvdW50ID09PSAnbnVtYmVyJykge1xuICAgIGxpc3RFbnRyeUNvdW50ID0gbGlzdENvdW50O1xuICB9XG5cbiAgdmFyIG5ld1Bvc2l0aW9uID0gc3RhcnRQb3NpdGlvbjtcbiAgdmFyIGZpZWxkVmFsdWUgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RFbnRyeUNvdW50OyBpICs9IDEpIHtcbiAgICB2YXIgZGVjb2RlZEZpZWxkcyA9IGRlY29kZUZpZWxkcyh7XG4gICAgICBpbnB1dDogaW5wdXQsXG4gICAgICBmaWVsZHM6IGZpZWxkLmZpZWxkcyxcbiAgICAgIHN0YXJ0UG9zaXRpb246IG5ld1Bvc2l0aW9uXG4gICAgfSk7XG5cbiAgICBuZXdQb3NpdGlvbiA9IGRlY29kZWRGaWVsZHMubmV3UG9zaXRpb247XG4gICAgZmllbGRWYWx1ZS5wdXNoKGRlY29kZWRGaWVsZHMuZGVjb2RlZE9iamVjdCk7XG4gIH1cblxuICByZXR1cm4geyBmaWVsZFZhbHVlOiBmaWVsZFZhbHVlLCBuZXdQb3NpdGlvbjogbmV3UG9zaXRpb24gfTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlRmllbGRzKF9yZWY0KSB7XG4gIHZhciBpbnB1dCA9IF9yZWY0LmlucHV0LFxuICAgICAgZmllbGRzID0gX3JlZjQuZmllbGRzLFxuICAgICAgX3JlZjQkc3RhcnRQb3NpdGlvbiA9IF9yZWY0LnN0YXJ0UG9zaXRpb24sXG4gICAgICBzdGFydFBvc2l0aW9uID0gX3JlZjQkc3RhcnRQb3NpdGlvbiA9PT0gdW5kZWZpbmVkID8gMCA6IF9yZWY0JHN0YXJ0UG9zaXRpb247XG5cbiAgdmFyIHBvc2l0aW9uID0gc3RhcnRQb3NpdGlvbjtcblxuICB2YXIgZGVjb2RlZE9iamVjdCA9IGZpZWxkcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgZmllbGQpIHtcbiAgICB2YXIgbmFtZSA9IGZpZWxkLm5hbWUsXG4gICAgICAgIG51bUJpdHMgPSBmaWVsZC5udW1CaXRzO1xuXG4gICAgdmFyIF9kZWNvZGVGaWVsZCA9IGRlY29kZUZpZWxkKHtcbiAgICAgIGlucHV0OiBpbnB1dCxcbiAgICAgIG91dHB1dDogYWNjLFxuICAgICAgc3RhcnRQb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICBmaWVsZDogZmllbGRcbiAgICB9KSxcbiAgICAgICAgZmllbGRWYWx1ZSA9IF9kZWNvZGVGaWVsZC5maWVsZFZhbHVlLFxuICAgICAgICBuZXdQb3NpdGlvbiA9IF9kZWNvZGVGaWVsZC5uZXdQb3NpdGlvbjtcblxuICAgIGlmIChmaWVsZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGFjY1tuYW1lXSA9IGZpZWxkVmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKG5ld1Bvc2l0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBvc2l0aW9uID0gbmV3UG9zaXRpb247XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbnVtQml0cyA9PT0gJ251bWJlcicpIHtcbiAgICAgIHBvc2l0aW9uICs9IG51bUJpdHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuXG4gIHJldHVybiB7XG4gICAgZGVjb2RlZE9iamVjdDogZGVjb2RlZE9iamVjdCxcbiAgICBuZXdQb3NpdGlvbjogcG9zaXRpb25cbiAgfTtcbn1cblxuLyoqXG4gKiBFbmNvZGUgdGhlIGRhdGEgcHJvcGVydGllcyB0byBhIGJpdCBzdHJpbmcuIEVuY29kaW5nIHdpbGwgZW5jb2RlXG4gKiBlaXRoZXIgYHNlbGVjdGVkVmVuZG9ySWRzYCBvciB0aGUgYHZlbmRvclJhbmdlTGlzdGAgZGVwZW5kaW5nIG9uXG4gKiB0aGUgdmFsdWUgb2YgdGhlIGBpc1JhbmdlYCBmbGFnLlxuICovXG5mdW5jdGlvbiBlbmNvZGVEYXRhVG9CaXRzKGRhdGEsIGRlZmluaXRpb25NYXApIHtcbiAgdmFyIHZlcnNpb24gPSBkYXRhLnZlcnNpb247XG5cblxuICBpZiAodHlwZW9mIHZlcnNpb24gIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDb25zZW50U3RyaW5nIC0gTm8gdmVyc2lvbiBmaWVsZCB0byBlbmNvZGUnKTtcbiAgfSBlbHNlIGlmICghZGVmaW5pdGlvbk1hcFt2ZXJzaW9uXSkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ29uc2VudFN0cmluZyAtIE5vIGRlZmluaXRpb24gZm9yIHZlcnNpb24gJyArIHZlcnNpb24pO1xuICB9IGVsc2Uge1xuICAgIHZhciBmaWVsZHMgPSBkZWZpbml0aW9uTWFwW3ZlcnNpb25dLmZpZWxkcztcbiAgICByZXR1cm4gZW5jb2RlRmllbGRzKHsgaW5wdXQ6IGRhdGEsIGZpZWxkczogZmllbGRzIH0pO1xuICB9XG59XG5cbi8qKlxuICogVGFrZSBhbGwgZmllbGRzIHJlcXVpcmVkIHRvIGVuY29kZSB0aGUgY29uc2VudCBzdHJpbmcgYW5kIHByb2R1Y2UgdGhlIFVSTCBzYWZlIEJhc2U2NCBlbmNvZGVkIHZhbHVlXG4gKi9cbmZ1bmN0aW9uIGVuY29kZVRvQmFzZTY0KGRhdGEpIHtcbiAgdmFyIGRlZmluaXRpb25NYXAgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHZlbmRvclZlcnNpb25NYXA7XG5cbiAgdmFyIGJpbmFyeVZhbHVlID0gZW5jb2RlRGF0YVRvQml0cyhkYXRhLCBkZWZpbml0aW9uTWFwKTtcblxuICBpZiAoYmluYXJ5VmFsdWUpIHtcbiAgICAvLyBQYWQgbGVuZ3RoIHRvIG11bHRpcGxlIG9mIDhcbiAgICB2YXIgcGFkZGVkQmluYXJ5VmFsdWUgPSBwYWRSaWdodChiaW5hcnlWYWx1ZSwgNyAtIChiaW5hcnlWYWx1ZS5sZW5ndGggKyA3KSAlIDgpO1xuXG4gICAgLy8gRW5jb2RlIHRvIGJ5dGVzXG4gICAgdmFyIGJ5dGVzID0gJyc7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWRkZWRCaW5hcnlWYWx1ZS5sZW5ndGg7IGkgKz0gOCkge1xuICAgICAgYnl0ZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChwYWRkZWRCaW5hcnlWYWx1ZS5zdWJzdHIoaSwgOCksIDIpKTtcbiAgICB9XG5cbiAgICAvLyBNYWtlIGJhc2U2NCBzdHJpbmcgVVJMIGZyaWVuZGx5XG4gICAgcmV0dXJuIGJhc2U2NC5lbmNvZGUoYnl0ZXMpLnJlcGxhY2UoL1xcKy9nLCAnLScpLnJlcGxhY2UoL1xcLy9nLCAnXycpLnJlcGxhY2UoLz0rJC8sICcnKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBkZWNvZGVDb25zZW50U3RyaW5nQml0VmFsdWUoYml0U3RyaW5nKSB7XG4gIHZhciBkZWZpbml0aW9uTWFwID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB2ZW5kb3JWZXJzaW9uTWFwO1xuXG4gIHZhciB2ZXJzaW9uID0gZGVjb2RlQml0c1RvSW50KGJpdFN0cmluZywgMCwgdmVyc2lvbk51bUJpdHMpO1xuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnNlbnRTdHJpbmcgLSBVbmtub3duIHZlcnNpb24gbnVtYmVyIGluIHRoZSBzdHJpbmcgdG8gZGVjb2RlJyk7XG4gIH0gZWxzZSBpZiAoIXZlbmRvclZlcnNpb25NYXBbdmVyc2lvbl0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnNlbnRTdHJpbmcgLSBVbnN1cHBvcnRlZCB2ZXJzaW9uICcgKyB2ZXJzaW9uICsgJyBpbiB0aGUgc3RyaW5nIHRvIGRlY29kZScpO1xuICB9XG5cbiAgdmFyIGZpZWxkcyA9IGRlZmluaXRpb25NYXBbdmVyc2lvbl0uZmllbGRzO1xuXG4gIHZhciBfZGVjb2RlRmllbGRzID0gZGVjb2RlRmllbGRzKHsgaW5wdXQ6IGJpdFN0cmluZywgZmllbGRzOiBmaWVsZHMgfSksXG4gICAgICBkZWNvZGVkT2JqZWN0ID0gX2RlY29kZUZpZWxkcy5kZWNvZGVkT2JqZWN0O1xuXG4gIHJldHVybiBkZWNvZGVkT2JqZWN0O1xufVxuXG4vKipcbiAqIERlY29kZSB0aGUgKFVSTCBzYWZlIEJhc2U2NCkgdmFsdWUgb2YgYSBjb25zZW50IHN0cmluZyBpbnRvIGFuIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gZGVjb2RlRnJvbUJhc2U2NChjb25zZW50U3RyaW5nLCBkZWZpbml0aW9uTWFwKSB7XG4gIC8vIEFkZCBwYWRkaW5nXG4gIHZhciB1bnNhZmUgPSBjb25zZW50U3RyaW5nO1xuICB3aGlsZSAodW5zYWZlLmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICB1bnNhZmUgKz0gJz0nO1xuICB9XG5cbiAgLy8gUmVwbGFjZSBzYWZlIGNoYXJhY3RlcnNcbiAgdW5zYWZlID0gdW5zYWZlLnJlcGxhY2UoLy0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJyk7XG5cbiAgdmFyIGJ5dGVzID0gYmFzZTY0LmRlY29kZSh1bnNhZmUpO1xuXG4gIHZhciBpbnB1dEJpdHMgPSAnJztcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBiaXRTdHJpbmcgPSBieXRlcy5jaGFyQ29kZUF0KGkpLnRvU3RyaW5nKDIpO1xuICAgIGlucHV0Qml0cyArPSBwYWRMZWZ0KGJpdFN0cmluZywgOCAtIGJpdFN0cmluZy5sZW5ndGgpO1xuICB9XG5cbiAgcmV0dXJuIGRlY29kZUNvbnNlbnRTdHJpbmdCaXRWYWx1ZShpbnB1dEJpdHMsIGRlZmluaXRpb25NYXApO1xufVxuXG5mdW5jdGlvbiBkZWNvZGVCaXRzVG9JZHMoYml0U3RyaW5nKSB7XG4gIHJldHVybiBiaXRTdHJpbmcuc3BsaXQoJycpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBiaXQsIGluZGV4KSB7XG4gICAgaWYgKGJpdCA9PT0gJzEnKSB7XG4gICAgICBpZiAoYWNjLmluZGV4T2YoaW5kZXggKyAxKSA9PT0gLTEpIHtcbiAgICAgICAgYWNjLnB1c2goaW5kZXggKyAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFjYztcbiAgfSwgW10pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGFkUmlnaHQ6IHBhZFJpZ2h0LFxuICBwYWRMZWZ0OiBwYWRMZWZ0LFxuICBlbmNvZGVGaWVsZDogZW5jb2RlRmllbGQsXG4gIGVuY29kZURhdGFUb0JpdHM6IGVuY29kZURhdGFUb0JpdHMsXG4gIGVuY29kZUludFRvQml0czogZW5jb2RlSW50VG9CaXRzLFxuICBlbmNvZGVCb29sVG9CaXRzOiBlbmNvZGVCb29sVG9CaXRzLFxuICBlbmNvZGVEYXRlVG9CaXRzOiBlbmNvZGVEYXRlVG9CaXRzLFxuICBlbmNvZGVMYW5ndWFnZVRvQml0czogZW5jb2RlTGFuZ3VhZ2VUb0JpdHMsXG4gIGVuY29kZUxldHRlclRvQml0czogZW5jb2RlTGV0dGVyVG9CaXRzLFxuICBlbmNvZGVUb0Jhc2U2NDogZW5jb2RlVG9CYXNlNjQsXG4gIGRlY29kZUJpdHNUb0lkczogZGVjb2RlQml0c1RvSWRzLFxuICBkZWNvZGVCaXRzVG9JbnQ6IGRlY29kZUJpdHNUb0ludCxcbiAgZGVjb2RlQml0c1RvRGF0ZTogZGVjb2RlQml0c1RvRGF0ZSxcbiAgZGVjb2RlQml0c1RvQm9vbDogZGVjb2RlQml0c1RvQm9vbCxcbiAgZGVjb2RlQml0c1RvTGFuZ3VhZ2U6IGRlY29kZUJpdHNUb0xhbmd1YWdlLFxuICBkZWNvZGVCaXRzVG9MZXR0ZXI6IGRlY29kZUJpdHNUb0xldHRlcixcbiAgZGVjb2RlRnJvbUJhc2U2NDogZGVjb2RlRnJvbUJhc2U2NFxufTsiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTnVtYmVyIG9mIGJpdHMgZm9yIGVuY29kaW5nIHRoZSB2ZXJzaW9uIGludGVnZXJcbiAqIEV4cGVjdGVkIHRvIGJlIHRoZSBzYW1lIGFjcm9zcyB2ZXJzaW9uc1xuICovXG52YXIgdmVyc2lvbk51bUJpdHMgPSA2O1xuXG4vKipcbiAqIERlZmluaXRpb24gb2YgdGhlIGNvbnNlbnQgc3RyaW5nIGVuY29kZWQgZm9ybWF0XG4gKlxuICogRnJvbSBodHRwczovL2dpdGh1Yi5jb20vSW50ZXJhY3RpdmVBZHZlcnRpc2luZ0J1cmVhdS9HRFBSLVRyYW5zcGFyZW5jeS1hbmQtQ29uc2VudC1GcmFtZXdvcmsvYmxvYi9tYXN0ZXIvRHJhZnRfZm9yX1B1YmxpY19Db21tZW50X1RyYW5zcGFyZW5jeSUyMCUyNiUyMENvbnNlbnQlMjBGcmFtZXdvcmslMjAtJTIwY29va2llJTIwYW5kJTIwdmVuZG9yJTIwbGlzdCUyMGZvcm1hdCUyMHNwZWNpZmljYXRpb24lMjB2MS4wYS5wZGZcbiAqL1xudmFyIHZlbmRvclZlcnNpb25NYXAgPSB7XG4gIC8qKlxuICAgKiBWZXJzaW9uIDFcbiAgICovXG4gIDE6IHtcbiAgICB2ZXJzaW9uOiAxLFxuICAgIG1ldGFkYXRhRmllbGRzOiBbJ3ZlcnNpb24nLCAnY3JlYXRlZCcsICdsYXN0VXBkYXRlZCcsICdjbXBJZCcsICdjbXBWZXJzaW9uJywgJ2NvbnNlbnRTY3JlZW4nLCAndmVuZG9yTGlzdFZlcnNpb24nXSxcbiAgICBmaWVsZHM6IFt7IG5hbWU6ICd2ZXJzaW9uJywgdHlwZTogJ2ludCcsIG51bUJpdHM6IDYgfSwgeyBuYW1lOiAnY3JlYXRlZCcsIHR5cGU6ICdkYXRlJywgbnVtQml0czogMzYgfSwgeyBuYW1lOiAnbGFzdFVwZGF0ZWQnLCB0eXBlOiAnZGF0ZScsIG51bUJpdHM6IDM2IH0sIHsgbmFtZTogJ2NtcElkJywgdHlwZTogJ2ludCcsIG51bUJpdHM6IDEyIH0sIHsgbmFtZTogJ2NtcFZlcnNpb24nLCB0eXBlOiAnaW50JywgbnVtQml0czogMTIgfSwgeyBuYW1lOiAnY29uc2VudFNjcmVlbicsIHR5cGU6ICdpbnQnLCBudW1CaXRzOiA2IH0sIHsgbmFtZTogJ2NvbnNlbnRMYW5ndWFnZScsIHR5cGU6ICdsYW5ndWFnZScsIG51bUJpdHM6IDEyIH0sIHsgbmFtZTogJ3ZlbmRvckxpc3RWZXJzaW9uJywgdHlwZTogJ2ludCcsIG51bUJpdHM6IDEyIH0sIHsgbmFtZTogJ3B1cnBvc2VJZEJpdFN0cmluZycsIHR5cGU6ICdiaXRzJywgbnVtQml0czogMjQgfSwgeyBuYW1lOiAnbWF4VmVuZG9ySWQnLCB0eXBlOiAnaW50JywgbnVtQml0czogMTYgfSwgeyBuYW1lOiAnaXNSYW5nZScsIHR5cGU6ICdib29sJywgbnVtQml0czogMSB9LCB7XG4gICAgICBuYW1lOiAndmVuZG9ySWRCaXRTdHJpbmcnLFxuICAgICAgdHlwZTogJ2JpdHMnLFxuICAgICAgbnVtQml0czogZnVuY3Rpb24gbnVtQml0cyhkZWNvZGVkT2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVkT2JqZWN0Lm1heFZlbmRvcklkO1xuICAgICAgfSxcbiAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdG9yKGRlY29kZWRPYmplY3QpIHtcbiAgICAgICAgcmV0dXJuICFkZWNvZGVkT2JqZWN0LmlzUmFuZ2U7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogJ2RlZmF1bHRDb25zZW50JyxcbiAgICAgIHR5cGU6ICdib29sJyxcbiAgICAgIG51bUJpdHM6IDEsXG4gICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRvcihkZWNvZGVkT2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVkT2JqZWN0LmlzUmFuZ2U7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogJ251bUVudHJpZXMnLFxuICAgICAgbnVtQml0czogMTIsXG4gICAgICB0eXBlOiAnaW50JyxcbiAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdG9yKGRlY29kZWRPYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIGRlY29kZWRPYmplY3QuaXNSYW5nZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiAndmVuZG9yUmFuZ2VMaXN0JyxcbiAgICAgIHR5cGU6ICdsaXN0JyxcbiAgICAgIGxpc3RDb3VudDogZnVuY3Rpb24gbGlzdENvdW50KGRlY29kZWRPYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIGRlY29kZWRPYmplY3QubnVtRW50cmllcztcbiAgICAgIH0sXG4gICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRvcihkZWNvZGVkT2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVkT2JqZWN0LmlzUmFuZ2U7XG4gICAgICB9LFxuICAgICAgZmllbGRzOiBbe1xuICAgICAgICBuYW1lOiAnaXNSYW5nZScsXG4gICAgICAgIHR5cGU6ICdib29sJyxcbiAgICAgICAgbnVtQml0czogMVxuICAgICAgfSwge1xuICAgICAgICBuYW1lOiAnc3RhcnRWZW5kb3JJZCcsXG4gICAgICAgIHR5cGU6ICdpbnQnLFxuICAgICAgICBudW1CaXRzOiAxNlxuICAgICAgfSwge1xuICAgICAgICBuYW1lOiAnZW5kVmVuZG9ySWQnLFxuICAgICAgICB0eXBlOiAnaW50JyxcbiAgICAgICAgbnVtQml0czogMTYsXG4gICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdG9yKGRlY29kZWRPYmplY3QpIHtcbiAgICAgICAgICByZXR1cm4gZGVjb2RlZE9iamVjdC5pc1JhbmdlO1xuICAgICAgICB9XG4gICAgICB9XVxuICAgIH1dXG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB2ZXJzaW9uTnVtQml0czogdmVyc2lvbk51bUJpdHMsXG4gIHZlbmRvclZlcnNpb25NYXA6IHZlbmRvclZlcnNpb25NYXBcbn07IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiY29uc3Qge0NvbnNlbnRTdHJpbmd9ID0gcmVxdWlyZSgnY29uc2VudC1zdHJpbmcnKTtcclxuXHJcbkFkZXF1YS5hY3Rpb25zLmNvbnNlbnQgPSB7XHJcbiAgICBjbXA6IHt9LFxyXG4gICAgdmlldzoge31cclxufTtcclxuXHJcbkFkZXF1YS5hY3Rpb25zLmNvbnNlbnQuZ2V0U2V0dGluZ3MgPSBmdW5jdGlvbiAoZmlsdGVycykge1xyXG4gICAgbGV0IHNldHRpbmdzID0gQWRlcXVhLnN0b3JhZ2UuY29uc2VudC5zZXR0aW5ncztcclxuICAgIGlmIChmaWx0ZXJzLndlYnNpdGVfaWQpXHJcbiAgICAgICAgc2V0dGluZ3MgPSBzZXR0aW5ncy5maWx0ZXIoc2V0dGluZyA9PiBzZXR0aW5nLmlkLndlYnNpdGVfaWQgPT09IGZpbHRlcnMud2Vic2l0ZV9pZCk7XHJcbiAgICBpZiAoZmlsdGVycy52ZW5kb3JfaWQpXHJcbiAgICAgICAgc2V0dGluZ3MgPSBzZXR0aW5ncy5maWx0ZXIoc2V0dGluZyA9PiBzZXR0aW5nLmlkLnZlbmRvcl9pZCA9PT0gZmlsdGVycy52ZW5kb3JfaWQpO1xyXG4gICAgaWYgKGZpbHRlcnMucHVycG9zZV9pZClcclxuICAgICAgICBzZXR0aW5ncyA9IHNldHRpbmdzLmZpbHRlcihzZXR0aW5nID0+IHNldHRpbmcuaWQucHVycG9zZV9pZCA9PT0gZmlsdGVycy5wdXJwb3NlX2lkKTtcclxuXHJcbiAgICByZXR1cm4gc2V0dGluZ3M7XHJcbn07XHJcblxyXG5BZGVxdWEuYWN0aW9ucy5jb25zZW50LnNldFNldHRpbmcgPSBmdW5jdGlvbiAoc2V0dGluZykge1xyXG4gICAgY29uc3QgaW5kZXggPSBBZGVxdWEuc3RvcmFnZS5jb25zZW50LnNldHRpbmdzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQud2Vic2l0ZV9pZCA9PT0gc2V0dGluZy5pZC53ZWJzaXRlX2lkICYmIGl0ZW0uaWQucHVycG9zZV9pZCA9PT0gc2V0dGluZy5pZC5wdXJwb3NlX2lkICYmIGl0ZW0uaWQudmVuZG9yX2lkID09PSBzZXR0aW5nLmlkLnZlbmRvcl9pZCk7XHJcbiAgICBpZiAoaW5kZXggPT09IC0xKVxyXG4gICAgICAgIEFkZXF1YS5zdG9yYWdlLmNvbnNlbnQuc2V0dGluZ3MucHVzaChzZXR0aW5nKTtcclxuICAgIGVsc2VcclxuICAgICAgICBBZGVxdWEuc3RvcmFnZS5jb25zZW50LnNldHRpbmdzW2luZGV4XSA9IHNldHRpbmc7XHJcbiAgICBBZGVxdWEuc2V0U3RvcmFnZSh7fSk7XHJcbn07XHJcblxyXG5BZGVxdWEuYWN0aW9ucy5jb25zZW50LmNtcC5nZXRDb25zZW50RGF0YSA9IGZ1bmN0aW9uICh3ZWJzaXRlSWQsIGNhbGxiYWNrKSB7XHJcbiAgICBjb25zdCBkZWZhdWx0U2V0dGluZ3MgPSBBZGVxdWEuYWN0aW9ucy5jb25zZW50LmdldFNldHRpbmdzKHt3ZWJzaXRlX2lkOiBcImFsbFwifSk7XHJcbiAgICBjb25zdCB3ZWJzaXRlU2V0dGluZ3MgPSBBZGVxdWEuYWN0aW9ucy5jb25zZW50LmdldFNldHRpbmdzKHt3ZWJzaXRlX2lkOiB3ZWJzaXRlSWR9KTtcclxuXHJcbiAgICBjb25zdCBhbGxvd2VkUHVycG9zZUlkcyA9IFtdO1xyXG4gICAgY29uc3QgZm9yYmlkZGVuUHVycG9zZUlkcyA9IFtdO1xyXG5cclxuICAgIGNvbnN0IGFsbG93ZWRWZW5kb3JJZHMgPSBbXTtcclxuICAgIGNvbnN0IGZvcmJpZGRlblZlbmRvcklkcyA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3Qgc2V0dGluZyBvZiB3ZWJzaXRlU2V0dGluZ3MpIHtcclxuICAgICAgICBpZiAoc2V0dGluZy5pZC5wdXJwb3NlX2lkID09PSBcImFsbFwiICYmIHNldHRpbmcuaWQudmVuZG9yX2lkICE9PSBcImFsbFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChhbGxvd2VkVmVuZG9ySWRzLmluZGV4T2Yoc2V0dGluZy5pZC52ZW5kb3JfaWQpID09PSAtMSAmJiBmb3JiaWRkZW5WZW5kb3JJZHMuaW5kZXhPZihzZXR0aW5nLmlkLnZlbmRvcl9pZCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZy52YWx1ZSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGxvd2VkVmVuZG9ySWRzLnB1c2goc2V0dGluZy5pZC52ZW5kb3JfaWQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JiaWRkZW5WZW5kb3JJZHMucHVzaChzZXR0aW5nLmlkLnZlbmRvcl9pZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHNldHRpbmcuaWQucHVycG9zZV9pZCAhPT0gXCJhbGxcIiAmJiBzZXR0aW5nLmlkLnZlbmRvcl9pZCA9PT0gXCJhbGxcIikge1xyXG4gICAgICAgICAgICBpZiAoYWxsb3dlZFB1cnBvc2VJZHMuaW5kZXhPZihzZXR0aW5nLmlkLnB1cnBvc2VfaWQpID09PSAtMSAmJiBmb3JiaWRkZW5QdXJwb3NlSWRzLmluZGV4T2Yoc2V0dGluZy5pZC5wdXJwb3NlX2lkKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5nLnZhbHVlID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbG93ZWRQdXJwb3NlSWRzLnB1c2goc2V0dGluZy5pZC5wdXJwb3NlX2lkKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yYmlkZGVuUHVycG9zZUlkcy5wdXNoKHNldHRpbmcuaWQucHVycG9zZV9pZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZGVmYXVsdFNldHRpbmdzLmluZGV4T2Yoc2V0dGluZykgPT09IC0xKVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFNldHRpbmdzLnB1c2goc2V0dGluZylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBzZXR0aW5nIG9mIGRlZmF1bHRTZXR0aW5ncykge1xyXG4gICAgICAgIGlmIChzZXR0aW5nLmlkLnB1cnBvc2VfaWQgPT09IFwiYWxsXCIgJiYgc2V0dGluZy5pZC52ZW5kb3JfaWQgIT09IFwiYWxsXCIpIHtcclxuICAgICAgICAgICAgaWYgKGFsbG93ZWRWZW5kb3JJZHMuaW5kZXhPZihzZXR0aW5nLmlkLnZlbmRvcl9pZCkgPT09IC0xICYmIGZvcmJpZGRlblZlbmRvcklkcy5pbmRleE9mKHNldHRpbmcuaWQudmVuZG9yX2lkKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5nLnZhbHVlID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbG93ZWRWZW5kb3JJZHMucHVzaChzZXR0aW5nLmlkLnZlbmRvcl9pZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcmJpZGRlblZlbmRvcklkcy5wdXNoKHNldHRpbmcuaWQudmVuZG9yX2lkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoc2V0dGluZy5pZC5wdXJwb3NlX2lkICE9PSBcImFsbFwiICYmIHNldHRpbmcuaWQudmVuZG9yX2lkID09PSBcImFsbFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChhbGxvd2VkUHVycG9zZUlkcy5pbmRleE9mKHNldHRpbmcuaWQucHVycG9zZV9pZCkgPT09IC0xICYmIGZvcmJpZGRlblB1cnBvc2VJZHMuaW5kZXhPZihzZXR0aW5nLmlkLnB1cnBvc2VfaWQpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmcudmFsdWUgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dlZFB1cnBvc2VJZHMucHVzaChzZXR0aW5nLmlkLnB1cnBvc2VfaWQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JiaWRkZW5QdXJwb3NlSWRzLnB1c2goc2V0dGluZy5pZC5wdXJwb3NlX2lkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoc2V0dGluZy5pZC5wdXJwb3NlX2lkID09PSBcImFsbFwiICYmIHNldHRpbmcuaWQudmVuZG9yX2lkID09PSBcImFsbFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChzZXR0aW5nLnZhbHVlID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwdXJwb3NlSWQgb2YgQWRlcXVhLnN0b3JhZ2UucHVycG9zZUxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWxsb3dlZFB1cnBvc2VJZHMuaW5kZXhPZihwdXJwb3NlSWQpID09PSAtMSAmJiBmb3JiaWRkZW5QdXJwb3NlSWRzLmluZGV4T2YocHVycG9zZUlkKSA9PT0gLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93ZWRQdXJwb3NlSWRzLnB1c2gocHVycG9zZUlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdmVuZG9ySWQgb2YgQWRlcXVhLnN0b3JhZ2UudmVuZG9yTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbGxvd2VkVmVuZG9ySWRzLmluZGV4T2YodmVuZG9ySWQpID09PSAtMSAmJiBmb3JiaWRkZW5WZW5kb3JJZHMuaW5kZXhPZih2ZW5kb3JJZCkgPT09IC0xKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd2VkVmVuZG9ySWRzLnB1c2godmVuZG9ySWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwdXJwb3NlSWQgb2YgQWRlcXVhLnN0b3JhZ2UucHVycG9zZUxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWxsb3dlZFB1cnBvc2VJZHMuaW5kZXhPZihwdXJwb3NlSWQpID09PSAtMSAmJiBmb3JiaWRkZW5QdXJwb3NlSWRzLmluZGV4T2YocHVycG9zZUlkKSA9PT0gLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcmJpZGRlblB1cnBvc2VJZHMucHVzaChwdXJwb3NlSWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB2ZW5kb3JJZCBvZiBBZGVxdWEuc3RvcmFnZS52ZW5kb3JMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFsbG93ZWRWZW5kb3JJZHMuaW5kZXhPZih2ZW5kb3JJZCkgPT09IC0xICYmIGZvcmJpZGRlblZlbmRvcklkcy5pbmRleE9mKHZlbmRvcklkKSA9PT0gLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcmJpZGRlblZlbmRvcklkcy5wdXNoKHZlbmRvcklkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGNvbnNlbnREYXRhID0gbmV3IENvbnNlbnRTdHJpbmcoKTtcclxuXHJcbiAgICBjb25zZW50RGF0YS5zZXRHbG9iYWxWZW5kb3JMaXN0KEFkZXF1YS5zdG9yYWdlLmZ1bGxWZW5kb3JMaXN0KTtcclxuXHJcbiAgICBjb25zZW50RGF0YS5zZXRDbXBJZCgxKTtcclxuICAgIGNvbnNlbnREYXRhLnNldENtcFZlcnNpb24oMSk7XHJcbiAgICBjb25zZW50RGF0YS5zZXRDb25zZW50U2NyZWVuKDEpO1xyXG4gICAgY29uc2VudERhdGEuc2V0Q29uc2VudExhbmd1YWdlKCdmcicpO1xyXG4gICAgY29uc2VudERhdGEuc2V0UHVycG9zZXNBbGxvd2VkKGFsbG93ZWRQdXJwb3NlSWRzKTtcclxuICAgIGNvbnNlbnREYXRhLnNldFZlbmRvcnNBbGxvd2VkKGFsbG93ZWRWZW5kb3JJZHMpO1xyXG5cclxuICAgIEFkZXF1YS5hY3Rpb25zLmNvbnNlbnQuZ2V0Q3VycmVudFdlYnNpdGVTZXR0aW5ncyhmdW5jdGlvbiAoc2V0dGluZ3MsIHRhYikge1xyXG4gICAgICAgIGZvcihjb25zdCBpbmRleCBpbiBzZXR0aW5ncyl7XHJcbiAgICAgICAgICAgIHNldHRpbmdzW2luZGV4XS5pZC53ZWJzaXRlX2lkID0gQWRlcXVhLmdldFdlYnNpdGVJZCh0YWIudXJsIHx8IFwibm91cmxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhbGxiYWNrKHtcclxuICAgICAgICAgICAgY29uc2VudFN0cmluZzogY29uc2VudERhdGEuZ2V0Q29uc2VudFN0cmluZygpLFxyXG4gICAgICAgICAgICBhbGxvd2VkVmVuZG9yczogYWxsb3dlZFZlbmRvcklkcyxcclxuICAgICAgICAgICAgYWxsb3dlZFB1cnBvc2VzOiBhbGxvd2VkUHVycG9zZUlkcyxcclxuICAgICAgICAgICAgdmVuZG9yTGlzdDogQWRlcXVhLnN0b3JhZ2UudmVuZG9yTGlzdCxcclxuICAgICAgICAgICAgcHVycG9zZUxpc3Q6IEFkZXF1YS5zdG9yYWdlLnB1cnBvc2VMaXN0LFxyXG4gICAgICAgICAgICBzZXR0aW5nczogc2V0dGluZ3NcclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcbn1cclxuO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
