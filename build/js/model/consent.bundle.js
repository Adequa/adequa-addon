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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/model/consent.js");
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

/***/ "./src/js/model/consent.js":
/*!*********************************!*\
  !*** ./src/js/model/consent.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  ConsentString
} = __webpack_require__(/*! consent-string */ "./node_modules/consent-string/dist/index.js");

Adequa.model.consent = {
  cmp: {},
  view: {}
};

Adequa.model.consent.getSettings = function (filters) {
  let settings = Adequa.storage.consent.settings;
  if (filters.website_id) settings = settings.filter(setting => setting.id.website_id === filters.website_id);
  if (filters.vendor_id) settings = settings.filter(setting => setting.id.vendor_id === filters.vendor_id);
  if (filters.purpose_id) settings = settings.filter(setting => setting.id.purpose_id === filters.purpose_id);
  return settings;
};

Adequa.model.consent.getAllSettings = function (filters, id) {
  const settings = Adequa.model.consent.getSettings(filters);
  const settingsMapped = {};

  for (const setting of settings) settingsMapped[setting.id[id]] = setting;

  return settingsMapped;
};

Adequa.model.consent.setSetting = function (setting) {
  const existing = Adequa.model.consent.getSettings(setting.id);
  if (existing.length && existing[0].value === setting.value) return;
  Adequa.actions.analytics.sendAnonymousEvent("nourl", 'consent', 'default_parameter_change', Adequa.storage.adequaPurposeList[setting.id.purpose_id - 1].shortname, setting.value === 1 ? 0 : 1);
  const index = Adequa.storage.consent.settings.findIndex(item => item.id.website_id === setting.id.website_id && item.id.purpose_id === setting.id.purpose_id && item.id.vendor_id === setting.id.vendor_id);
  if (index === -1) Adequa.storage.consent.settings.push(setting);else Adequa.storage.consent.settings[index] = setting;
  Adequa.setStorage({});
};

Adequa.model.consent.setConsent = function (allowedPurposes, allowedVendors, url) {
  for (const purpose of Adequa.storage.purposeList) {
    Adequa.model.consent.setSetting({
      id: {
        website_id: Adequa.hostname(url),
        purpose_id: purpose.id,
        vendor_id: "all"
      },
      value: allowedPurposes.indexOf(purpose.id) === -1 ? 1 : -1
    });
  }

  for (const vendor of Adequa.storage.vendorList) {
    Adequa.model.consent.setSetting({
      id: {
        website_id: Adequa.hostname(url),
        purpose_id: "all",
        vendor_id: vendor.id
      },
      value: allowedVendors.indexOf(vendor.id) === -1 ? 1 : -1
    });
  }
};

Adequa.model.consent.acceptAll = function () {
  Adequa.storage.adequaPurposeList.forEach(purpose => {
    Adequa.model.consent.setSetting({
      id: {
        website_id: "all",
        purpose_id: purpose.id,
        vendor_id: "all"
      },
      value: -1
    });
  });
};

Adequa.model.consent.setConsentString = function (consentString, url) {
  const consentData = new ConsentString(consentString);
  consentData.setGlobalVendorList(Adequa.storage.fullVendorList);
  const allowedPurposes = consentData.getPurposesAllowed();
  const allowedVendors = consentData.getVendorsAllowed();

  for (const purpose of Adequa.storage.purposeList) {
    Adequa.model.consent.setSetting({
      id: {
        website_id: Adequa.hostname(url),
        purpose_id: purpose.id,
        vendor_id: "all"
      },
      value: allowedPurposes.indexOf(purpose.id) === -1 ? 1 : -1
    });
  }

  for (const vendor of Adequa.storage.vendorList) {
    Adequa.model.consent.setSetting({
      id: {
        website_id: Adequa.hostname(url),
        purpose_id: "all",
        vendor_id: vendor.id
      },
      value: allowedVendors.indexOf(vendor.id) === -1 ? 1 : -1
    });
  }
};

Adequa.model.consent.cmp.getVendorConsents = function (websiteId, callback) {};

Adequa.model.consent.cmp.getConsentData = function (websiteId, callback) {
  const defaultSettings = Adequa.model.consent.getSettings({
    website_id: "all"
  });
  const websiteSettings = Adequa.model.consent.getSettings({
    website_id: websiteId
  });
  let allowedPurposeIds = [1];
  const forbiddenPurposeIds = [];
  let allowedVendorIds = [];
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

  allowedVendorIds = allowedVendorIds.map(id => parseInt(id));
  allowedPurposeIds = allowedPurposeIds.map(id => parseInt(id)); // Adequa.API.tabs.query({
  //     active: true,
  //     lastFocusedWindow: true
  // }, (tabs) => {
  //     const tab = tabs[0] || {};
  //     const settings = Adequa.model.consent.getSettings({website_id: Adequa.hostname(tab.url || "nourl")});
  //
  //     for(const index in settings){
  //         settings[index].id.website_id = Adequa.hostname(tab.url || "nourl");
  //     }
  //
  //     const consentData = new ConsentString();
  //
  //     consentData.setGlobalVendorList(Adequa.storage.fullVendorList);
  //
  //     consentData.setCmpId(1);
  //     consentData.setCmpVersion(1);
  //     consentData.setConsentScreen(1);
  //     consentData.setConsentLanguage('fr');
  //     consentData.setPurposesAllowed(allowedPurposeIds);
  //     consentData.setVendorsAllowed(allowedVendorIds);

  if (typeof callback === "function") callback({
    // consentString: consentData.getConsentString(),
    allowedVendors: allowedVendorIds,
    allowedPurposes: allowedPurposeIds // settings: settings

  });
  return allowedPurposeIds; // });
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jhc2UtNjQvYmFzZTY0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb25zZW50LXN0cmluZy9kaXN0L2NvbnNlbnQtc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb25zZW50LXN0cmluZy9kaXN0L2RlY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29uc2VudC1zdHJpbmcvZGlzdC9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbnNlbnQtc3RyaW5nL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbnNlbnQtc3RyaW5nL2Rpc3QvdXRpbHMvYml0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29uc2VudC1zdHJpbmcvZGlzdC91dGlscy9kZWZpbml0aW9ucy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVsL2NvbnNlbnQuanMiXSwibmFtZXMiOlsicm9vdCIsImZyZWVFeHBvcnRzIiwiZXhwb3J0cyIsImZyZWVNb2R1bGUiLCJtb2R1bGUiLCJmcmVlR2xvYmFsIiwiZ2xvYmFsIiwid2luZG93IiwiSW52YWxpZENoYXJhY3RlckVycm9yIiwibWVzc2FnZSIsInByb3RvdHlwZSIsIkVycm9yIiwibmFtZSIsImVycm9yIiwiVEFCTEUiLCJSRUdFWF9TUEFDRV9DSEFSQUNURVJTIiwiZGVjb2RlIiwiaW5wdXQiLCJTdHJpbmciLCJyZXBsYWNlIiwibGVuZ3RoIiwidGVzdCIsImJpdENvdW50ZXIiLCJiaXRTdG9yYWdlIiwiYnVmZmVyIiwib3V0cHV0IiwicG9zaXRpb24iLCJpbmRleE9mIiwiY2hhckF0IiwiZnJvbUNoYXJDb2RlIiwiZW5jb2RlIiwicGFkZGluZyIsImEiLCJiIiwiYyIsImQiLCJjaGFyQ29kZUF0IiwiYmFzZTY0IiwiZGVmaW5lIiwiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwib2JqIiwiY29uc3RydWN0b3IiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiQ29uc3RydWN0b3IiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIlR5cGVFcnJvciIsIl9yZXF1aXJlIiwicmVxdWlyZSIsImVuY29kZUNvbnNlbnRTdHJpbmciLCJfZ2V0TWF4VmVuZG9ySWQiLCJnZXRNYXhWZW5kb3JJZCIsImVuY29kZVZlbmRvcklkc1RvQml0cyIsImVuY29kZVB1cnBvc2VJZHNUb0JpdHMiLCJfcmVxdWlyZTIiLCJkZWNvZGVDb25zZW50U3RyaW5nIiwiX3JlcXVpcmUzIiwidmVuZG9yVmVyc2lvbk1hcCIsImNvbnNlbnRMYW5ndWFnZVJlZ2V4cCIsIkNvbnNlbnRTdHJpbmciLCJiYXNlU3RyaW5nIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiY3JlYXRlZCIsIkRhdGUiLCJsYXN0VXBkYXRlZCIsInZlcnNpb24iLCJ2ZW5kb3JMaXN0IiwidmVuZG9yTGlzdFZlcnNpb24iLCJjbXBJZCIsImNtcFZlcnNpb24iLCJjb25zZW50U2NyZWVuIiwiY29uc2VudExhbmd1YWdlIiwiYWxsb3dlZFB1cnBvc2VJZHMiLCJhbGxvd2VkVmVuZG9ySWRzIiwiYXNzaWduIiwidmFsdWUiLCJnZXRDb25zZW50U3RyaW5nIiwidXBkYXRlRGF0ZSIsImdldFZlcnNpb24iLCJ2ZW5kb3JzIiwiZ2V0UGFyc2VkVmVuZG9yQ29uc2VudHMiLCJnZXRQYXJzZWRQdXJwb3NlQ29uc2VudHMiLCJwdXJwb3NlcyIsImdldE1ldGFkYXRhU3RyaW5nIiwiZ2V0VmVuZG9yTGlzdFZlcnNpb24iLCJzZXRHbG9iYWxWZW5kb3JMaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwiZmVhdHVyZXMiLCJzbGljZSIsInNvcnQiLCJmaXJzdFZlbmRvciIsInNlY29uZFZlbmRvciIsImlkIiwic2V0Q21wSWQiLCJnZXRDbXBJZCIsInNldENtcFZlcnNpb24iLCJnZXRDbXBWZXJzaW9uIiwic2V0Q29uc2VudFNjcmVlbiIsInNjcmVlbklkIiwiZ2V0Q29uc2VudFNjcmVlbiIsInNldENvbnNlbnRMYW5ndWFnZSIsImxhbmd1YWdlIiwiZ2V0Q29uc2VudExhbmd1YWdlIiwic2V0UHVycG9zZXNBbGxvd2VkIiwicHVycG9zZUlkcyIsImdldFB1cnBvc2VzQWxsb3dlZCIsInNldFB1cnBvc2VBbGxvd2VkIiwicHVycG9zZUlkIiwicHVycG9zZUluZGV4IiwicHVzaCIsInNwbGljZSIsImlzUHVycG9zZUFsbG93ZWQiLCJzZXRWZW5kb3JzQWxsb3dlZCIsInZlbmRvcklkcyIsImdldFZlbmRvcnNBbGxvd2VkIiwic2V0VmVuZG9yQWxsb3dlZCIsInZlbmRvcklkIiwidmVuZG9ySW5kZXgiLCJpc1ZlbmRvckFsbG93ZWQiLCJkZWNvZGVNZXRhZGF0YVN0cmluZyIsImVuY29kZWRNZXRhZGF0YSIsImRlY29kZWRTdHJpbmciLCJtZXRhZGF0YSIsIm1ldGFkYXRhRmllbGRzIiwiZm9yRWFjaCIsImZpZWxkIiwiZGVjb2RlQml0c1RvSWRzIiwiZGVjb2RlRnJvbUJhc2U2NCIsImNvbnNlbnRTdHJpbmciLCJfZGVjb2RlRnJvbUJhc2UiLCJwdXJwb3NlSWRCaXRTdHJpbmciLCJtYXhWZW5kb3JJZCIsImlzUmFuZ2UiLCJkZWZhdWx0Q29uc2VudCIsInZlbmRvcklkQml0U3RyaW5nIiwidmVuZG9yUmFuZ2VMaXN0IiwiY29uc2VudFN0cmluZ0RhdGEiLCJpZE1hcCIsInJlZHVjZSIsImFjYyIsIl9yZWYiLCJzdGFydFZlbmRvcklkIiwiZW5kVmVuZG9ySWQiLCJsYXN0VmVuZG9ySWQiLCJfZXh0ZW5kcyIsInNvdXJjZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImVuY29kZVRvQmFzZTY0IiwicGFkUmlnaHQiLCJ2ZW5kb3JTdHJpbmciLCJNYXRoIiwibWF4IiwiU2V0IiwibWF4UHVycG9zZUlkIiwiX2kiLCJwdXJwb3NlU3RyaW5nIiwiY29udmVydFZlbmRvcnNUb1JhbmdlcyIsInJhbmdlIiwicmFuZ2VzIiwiaWRzSW5MaXN0IiwibWFwIiwidmVuZG9yIiwiaW5kZXgiLCJzaGlmdCIsInBvcCIsImNvbnNlbnREYXRhIiwiX2NvbnNlbnREYXRhJHZlbmRvckxpIiwiX3ZlbmRvckxpc3QkdmVuZG9ycyIsIl92ZW5kb3JMaXN0JHB1cnBvc2VzIiwibm9SYW5nZXNEYXRhIiwicmFuZ2VzRGF0YSIsIm51bUVudHJpZXMiLCJ2ZXJzaW9uTnVtQml0cyIsInJlcGVhdCIsImNvdW50Iiwic3RyaW5nIiwicGFkU3RyaW5nIiwicGFkTGVmdCIsImVuY29kZUludFRvQml0cyIsIm51bWJlciIsIm51bUJpdHMiLCJiaXRTdHJpbmciLCJpc05hTiIsInBhcnNlSW50IiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJlbmNvZGVCb29sVG9CaXRzIiwiZW5jb2RlRGF0ZVRvQml0cyIsImRhdGUiLCJnZXRUaW1lIiwiZW5jb2RlTGV0dGVyVG9CaXRzIiwibGV0dGVyIiwidG9VcHBlckNhc2UiLCJlbmNvZGVMYW5ndWFnZVRvQml0cyIsImRlY29kZUJpdHNUb0ludCIsInN0YXJ0Iiwic3Vic3RyIiwiZGVjb2RlQml0c1RvRGF0ZSIsImRlY29kZUJpdHNUb0Jvb2wiLCJkZWNvZGVCaXRzVG9MZXR0ZXIiLCJsZXR0ZXJDb2RlIiwidG9Mb3dlckNhc2UiLCJkZWNvZGVCaXRzVG9MYW5ndWFnZSIsImxhbmd1YWdlQml0U3RyaW5nIiwiZW5jb2RlRmllbGQiLCJ0eXBlIiwiZW5jb2RlciIsInZhbGlkYXRvciIsImJpdENvdW50IiwiaW5wdXRWYWx1ZSIsImZpZWxkVmFsdWUiLCJsaXN0VmFsdWUiLCJlbmNvZGVGaWVsZHMiLCJmaWVsZHMiLCJfcmVmMiIsImRlY29kZUZpZWxkIiwiX3JlZjMiLCJzdGFydFBvc2l0aW9uIiwiZGVjb2RlciIsImxpc3RDb3VudCIsIm5ld1Bvc2l0aW9uIiwiZGVjb2RlTGlzdCIsImxpc3RFbnRyeUNvdW50IiwiZGVjb2RlZEZpZWxkcyIsImRlY29kZUZpZWxkcyIsImRlY29kZWRPYmplY3QiLCJfcmVmNCIsIl9yZWY0JHN0YXJ0UG9zaXRpb24iLCJfZGVjb2RlRmllbGQiLCJlbmNvZGVEYXRhVG9CaXRzIiwiZGF0YSIsImRlZmluaXRpb25NYXAiLCJiaW5hcnlWYWx1ZSIsInBhZGRlZEJpbmFyeVZhbHVlIiwiYnl0ZXMiLCJkZWNvZGVDb25zZW50U3RyaW5nQml0VmFsdWUiLCJfZGVjb2RlRmllbGRzIiwidW5zYWZlIiwiaW5wdXRCaXRzIiwic3BsaXQiLCJiaXQiLCJnIiwiRnVuY3Rpb24iLCJlIiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJjaGlsZHJlbiIsImdldCIsImwiLCJBZGVxdWEiLCJtb2RlbCIsImNvbnNlbnQiLCJjbXAiLCJ2aWV3IiwiZ2V0U2V0dGluZ3MiLCJmaWx0ZXJzIiwic2V0dGluZ3MiLCJzdG9yYWdlIiwid2Vic2l0ZV9pZCIsImZpbHRlciIsInNldHRpbmciLCJ2ZW5kb3JfaWQiLCJwdXJwb3NlX2lkIiwiZ2V0QWxsU2V0dGluZ3MiLCJzZXR0aW5nc01hcHBlZCIsInNldFNldHRpbmciLCJleGlzdGluZyIsImFjdGlvbnMiLCJhbmFseXRpY3MiLCJzZW5kQW5vbnltb3VzRXZlbnQiLCJhZGVxdWFQdXJwb3NlTGlzdCIsInNob3J0bmFtZSIsImZpbmRJbmRleCIsIml0ZW0iLCJzZXRTdG9yYWdlIiwic2V0Q29uc2VudCIsImFsbG93ZWRQdXJwb3NlcyIsImFsbG93ZWRWZW5kb3JzIiwidXJsIiwicHVycG9zZSIsInB1cnBvc2VMaXN0IiwiaG9zdG5hbWUiLCJhY2NlcHRBbGwiLCJzZXRDb25zZW50U3RyaW5nIiwiZnVsbFZlbmRvckxpc3QiLCJnZXRWZW5kb3JDb25zZW50cyIsIndlYnNpdGVJZCIsImNhbGxiYWNrIiwiZ2V0Q29uc2VudERhdGEiLCJkZWZhdWx0U2V0dGluZ3MiLCJ3ZWJzaXRlU2V0dGluZ3MiLCJmb3JiaWRkZW5QdXJwb3NlSWRzIiwiZm9yYmlkZGVuVmVuZG9ySWRzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTs7QUFBRSxXQUFTQSxJQUFULEVBQWU7QUFFaEI7QUFDQSxNQUFJQyxXQUFXLEdBQUcsU0FBOEJDLE9BQWhELENBSGdCLENBS2hCOztBQUNBLE1BQUlDLFVBQVUsR0FBRyxTQUE2QkMsTUFBN0IsSUFDaEJBLE1BQU0sQ0FBQ0YsT0FBUCxJQUFrQkQsV0FERixJQUNpQkcsTUFEbEMsQ0FOZ0IsQ0FTaEI7QUFDQTs7QUFDQSxNQUFJ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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQUcsT0FBT3FNLFFBQVAsS0FBb0IsVUFBdkIsRUFDQUEsUUFBUSxDQUFDO0FBQ0w7QUFDQVYsa0JBQWMsRUFBRS9NLGdCQUZYO0FBR0w4TSxtQkFBZSxFQUFFL00saUJBSFosQ0FJTDs7QUFKSyxHQUFELENBQVI7QUFPQSxTQUFPQSxpQkFBUCxDQXpHcUUsQ0EwR3JFO0FBQ0gsQ0EzR0QsQyIsImZpbGUiOiJjb25zZW50LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL21vZGVsL2NvbnNlbnQuanNcIik7XG4iLCIvKiEgaHR0cDovL210aHMuYmUvYmFzZTY0IHYwLjEuMCBieSBAbWF0aGlhcyB8IE1JVCBsaWNlbnNlICovXG47KGZ1bmN0aW9uKHJvb3QpIHtcblxuXHQvLyBEZXRlY3QgZnJlZSB2YXJpYWJsZXMgYGV4cG9ydHNgLlxuXHR2YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzO1xuXG5cdC8vIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLlxuXHR2YXIgZnJlZU1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmXG5cdFx0bW9kdWxlLmV4cG9ydHMgPT0gZnJlZUV4cG9ydHMgJiYgbW9kdWxlO1xuXG5cdC8vIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgLCBmcm9tIE5vZGUuanMgb3IgQnJvd3NlcmlmaWVkIGNvZGUsIGFuZCB1c2Vcblx0Ly8gaXQgYXMgYHJvb3RgLlxuXHR2YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsO1xuXHRpZiAoZnJlZUdsb2JhbC5nbG9iYWwgPT09IGZyZWVHbG9iYWwgfHwgZnJlZUdsb2JhbC53aW5kb3cgPT09IGZyZWVHbG9iYWwpIHtcblx0XHRyb290ID0gZnJlZUdsb2JhbDtcblx0fVxuXG5cdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cdHZhciBJbnZhbGlkQ2hhcmFjdGVyRXJyb3IgPSBmdW5jdGlvbihtZXNzYWdlKSB7XG5cdFx0dGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcblx0fTtcblx0SW52YWxpZENoYXJhY3RlckVycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvcjtcblx0SW52YWxpZENoYXJhY3RlckVycm9yLnByb3RvdHlwZS5uYW1lID0gJ0ludmFsaWRDaGFyYWN0ZXJFcnJvcic7XG5cblx0dmFyIGVycm9yID0gZnVuY3Rpb24obWVzc2FnZSkge1xuXHRcdC8vIE5vdGU6IHRoZSBlcnJvciBtZXNzYWdlcyB1c2VkIHRocm91Z2hvdXQgdGhpcyBmaWxlIG1hdGNoIHRob3NlIHVzZWQgYnlcblx0XHQvLyB0aGUgbmF0aXZlIGBhdG9iYC9gYnRvYWAgaW1wbGVtZW50YXRpb24gaW4gQ2hyb21pdW0uXG5cdFx0dGhyb3cgbmV3IEludmFsaWRDaGFyYWN0ZXJFcnJvcihtZXNzYWdlKTtcblx0fTtcblxuXHR2YXIgVEFCTEUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XG5cdC8vIGh0dHA6Ly93aGF0d2cub3JnL2h0bWwvY29tbW9uLW1pY3Jvc3ludGF4ZXMuaHRtbCNzcGFjZS1jaGFyYWN0ZXJcblx0dmFyIFJFR0VYX1NQQUNFX0NIQVJBQ1RFUlMgPSAvW1xcdFxcblxcZlxcciBdL2c7XG5cblx0Ly8gYGRlY29kZWAgaXMgZGVzaWduZWQgdG8gYmUgZnVsbHkgY29tcGF0aWJsZSB3aXRoIGBhdG9iYCBhcyBkZXNjcmliZWQgaW4gdGhlXG5cdC8vIEhUTUwgU3RhbmRhcmQuIGh0dHA6Ly93aGF0d2cub3JnL2h0bWwvd2ViYXBwYXBpcy5odG1sI2RvbS13aW5kb3diYXNlNjQtYXRvYlxuXHQvLyBUaGUgb3B0aW1pemVkIGJhc2U2NC1kZWNvZGluZyBhbGdvcml0aG0gdXNlZCBpcyBiYXNlZCBvbiBAYXRr4oCZcyBleGNlbGxlbnRcblx0Ly8gaW1wbGVtZW50YXRpb24uIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2F0ay8xMDIwMzk2XG5cdHZhciBkZWNvZGUgPSBmdW5jdGlvbihpbnB1dCkge1xuXHRcdGlucHV0ID0gU3RyaW5nKGlucHV0KVxuXHRcdFx0LnJlcGxhY2UoUkVHRVhfU1BBQ0VfQ0hBUkFDVEVSUywgJycpO1xuXHRcdHZhciBsZW5ndGggPSBpbnB1dC5sZW5ndGg7XG5cdFx0aWYgKGxlbmd0aCAlIDQgPT0gMCkge1xuXHRcdFx0aW5wdXQgPSBpbnB1dC5yZXBsYWNlKC89PT8kLywgJycpO1xuXHRcdFx0bGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuXHRcdH1cblx0XHRpZiAoXG5cdFx0XHRsZW5ndGggJSA0ID09IDEgfHxcblx0XHRcdC8vIGh0dHA6Ly93aGF0d2cub3JnL0MjYWxwaGFudW1lcmljLWFzY2lpLWNoYXJhY3RlcnNcblx0XHRcdC9bXithLXpBLVowLTkvXS8udGVzdChpbnB1dClcblx0XHQpIHtcblx0XHRcdGVycm9yKFxuXHRcdFx0XHQnSW52YWxpZCBjaGFyYWN0ZXI6IHRoZSBzdHJpbmcgdG8gYmUgZGVjb2RlZCBpcyBub3QgY29ycmVjdGx5IGVuY29kZWQuJ1xuXHRcdFx0KTtcblx0XHR9XG5cdFx0dmFyIGJpdENvdW50ZXIgPSAwO1xuXHRcdHZhciBiaXRTdG9yYWdlO1xuXHRcdHZhciBidWZmZXI7XG5cdFx0dmFyIG91dHB1dCA9ICcnO1xuXHRcdHZhciBwb3NpdGlvbiA9IC0xO1xuXHRcdHdoaWxlICgrK3Bvc2l0aW9uIDwgbGVuZ3RoKSB7XG5cdFx0XHRidWZmZXIgPSBUQUJMRS5pbmRleE9mKGlucHV0LmNoYXJBdChwb3NpdGlvbikpO1xuXHRcdFx0Yml0U3RvcmFnZSA9IGJpdENvdW50ZXIgJSA0ID8gYml0U3RvcmFnZSAqIDY0ICsgYnVmZmVyIDogYnVmZmVyO1xuXHRcdFx0Ly8gVW5sZXNzIHRoaXMgaXMgdGhlIGZpcnN0IG9mIGEgZ3JvdXAgb2YgNCBjaGFyYWN0ZXJz4oCmXG5cdFx0XHRpZiAoYml0Q291bnRlcisrICUgNCkge1xuXHRcdFx0XHQvLyDigKZjb252ZXJ0IHRoZSBmaXJzdCA4IGJpdHMgdG8gYSBzaW5nbGUgQVNDSUkgY2hhcmFjdGVyLlxuXHRcdFx0XHRvdXRwdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShcblx0XHRcdFx0XHQweEZGICYgYml0U3RvcmFnZSA+PiAoLTIgKiBiaXRDb3VudGVyICYgNilcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG91dHB1dDtcblx0fTtcblxuXHQvLyBgZW5jb2RlYCBpcyBkZXNpZ25lZCB0byBiZSBmdWxseSBjb21wYXRpYmxlIHdpdGggYGJ0b2FgIGFzIGRlc2NyaWJlZCBpbiB0aGVcblx0Ly8gSFRNTCBTdGFuZGFyZDogaHR0cDovL3doYXR3Zy5vcmcvaHRtbC93ZWJhcHBhcGlzLmh0bWwjZG9tLXdpbmRvd2Jhc2U2NC1idG9hXG5cdHZhciBlbmNvZGUgPSBmdW5jdGlvbihpbnB1dCkge1xuXHRcdGlucHV0ID0gU3RyaW5nKGlucHV0KTtcblx0XHRpZiAoL1teXFwwLVxceEZGXS8udGVzdChpbnB1dCkpIHtcblx0XHRcdC8vIE5vdGU6IG5vIG5lZWQgdG8gc3BlY2lhbC1jYXNlIGFzdHJhbCBzeW1ib2xzIGhlcmUsIGFzIHN1cnJvZ2F0ZXMgYXJlXG5cdFx0XHQvLyBtYXRjaGVkLCBhbmQgdGhlIGlucHV0IGlzIHN1cHBvc2VkIHRvIG9ubHkgY29udGFpbiBBU0NJSSBhbnl3YXkuXG5cdFx0XHRlcnJvcihcblx0XHRcdFx0J1RoZSBzdHJpbmcgdG8gYmUgZW5jb2RlZCBjb250YWlucyBjaGFyYWN0ZXJzIG91dHNpZGUgb2YgdGhlICcgK1xuXHRcdFx0XHQnTGF0aW4xIHJhbmdlLidcblx0XHRcdCk7XG5cdFx0fVxuXHRcdHZhciBwYWRkaW5nID0gaW5wdXQubGVuZ3RoICUgMztcblx0XHR2YXIgb3V0cHV0ID0gJyc7XG5cdFx0dmFyIHBvc2l0aW9uID0gLTE7XG5cdFx0dmFyIGE7XG5cdFx0dmFyIGI7XG5cdFx0dmFyIGM7XG5cdFx0dmFyIGQ7XG5cdFx0dmFyIGJ1ZmZlcjtcblx0XHQvLyBNYWtlIHN1cmUgYW55IHBhZGRpbmcgaXMgaGFuZGxlZCBvdXRzaWRlIG9mIHRoZSBsb29wLlxuXHRcdHZhciBsZW5ndGggPSBpbnB1dC5sZW5ndGggLSBwYWRkaW5nO1xuXG5cdFx0d2hpbGUgKCsrcG9zaXRpb24gPCBsZW5ndGgpIHtcblx0XHRcdC8vIFJlYWQgdGhyZWUgYnl0ZXMsIGkuZS4gMjQgYml0cy5cblx0XHRcdGEgPSBpbnB1dC5jaGFyQ29kZUF0KHBvc2l0aW9uKSA8PCAxNjtcblx0XHRcdGIgPSBpbnB1dC5jaGFyQ29kZUF0KCsrcG9zaXRpb24pIDw8IDg7XG5cdFx0XHRjID0gaW5wdXQuY2hhckNvZGVBdCgrK3Bvc2l0aW9uKTtcblx0XHRcdGJ1ZmZlciA9IGEgKyBiICsgYztcblx0XHRcdC8vIFR1cm4gdGhlIDI0IGJpdHMgaW50byBmb3VyIGNodW5rcyBvZiA2IGJpdHMgZWFjaCwgYW5kIGFwcGVuZCB0aGVcblx0XHRcdC8vIG1hdGNoaW5nIGNoYXJhY3RlciBmb3IgZWFjaCBvZiB0aGVtIHRvIHRoZSBvdXRwdXQuXG5cdFx0XHRvdXRwdXQgKz0gKFxuXHRcdFx0XHRUQUJMRS5jaGFyQXQoYnVmZmVyID4+IDE4ICYgMHgzRikgK1xuXHRcdFx0XHRUQUJMRS5jaGFyQXQoYnVmZmVyID4+IDEyICYgMHgzRikgK1xuXHRcdFx0XHRUQUJMRS5jaGFyQXQoYnVmZmVyID4+IDYgJiAweDNGKSArXG5cdFx0XHRcdFRBQkxFLmNoYXJBdChidWZmZXIgJiAweDNGKVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAocGFkZGluZyA9PSAyKSB7XG5cdFx0XHRhID0gaW5wdXQuY2hhckNvZGVBdChwb3NpdGlvbikgPDwgODtcblx0XHRcdGIgPSBpbnB1dC5jaGFyQ29kZUF0KCsrcG9zaXRpb24pO1xuXHRcdFx0YnVmZmVyID0gYSArIGI7XG5cdFx0XHRvdXRwdXQgKz0gKFxuXHRcdFx0XHRUQUJMRS5jaGFyQXQoYnVmZmVyID4+IDEwKSArXG5cdFx0XHRcdFRBQkxFLmNoYXJBdCgoYnVmZmVyID4+IDQpICYgMHgzRikgK1xuXHRcdFx0XHRUQUJMRS5jaGFyQXQoKGJ1ZmZlciA8PCAyKSAmIDB4M0YpICtcblx0XHRcdFx0Jz0nXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAocGFkZGluZyA9PSAxKSB7XG5cdFx0XHRidWZmZXIgPSBpbnB1dC5jaGFyQ29kZUF0KHBvc2l0aW9uKTtcblx0XHRcdG91dHB1dCArPSAoXG5cdFx0XHRcdFRBQkxFLmNoYXJBdChidWZmZXIgPj4gMikgK1xuXHRcdFx0XHRUQUJMRS5jaGFyQXQoKGJ1ZmZlciA8PCA0KSAmIDB4M0YpICtcblx0XHRcdFx0Jz09J1xuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3V0cHV0O1xuXHR9O1xuXG5cdHZhciBiYXNlNjQgPSB7XG5cdFx0J2VuY29kZSc6IGVuY29kZSxcblx0XHQnZGVjb2RlJzogZGVjb2RlLFxuXHRcdCd2ZXJzaW9uJzogJzAuMS4wJ1xuXHR9O1xuXG5cdC8vIFNvbWUgQU1EIGJ1aWxkIG9wdGltaXplcnMsIGxpa2Ugci5qcywgY2hlY2sgZm9yIHNwZWNpZmljIGNvbmRpdGlvbiBwYXR0ZXJuc1xuXHQvLyBsaWtlIHRoZSBmb2xsb3dpbmc6XG5cdGlmIChcblx0XHR0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiZcblx0XHR0eXBlb2YgZGVmaW5lLmFtZCA9PSAnb2JqZWN0JyAmJlxuXHRcdGRlZmluZS5hbWRcblx0KSB7XG5cdFx0ZGVmaW5lKGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIGJhc2U2NDtcblx0XHR9KTtcblx0fVx0ZWxzZSBpZiAoZnJlZUV4cG9ydHMgJiYgIWZyZWVFeHBvcnRzLm5vZGVUeXBlKSB7XG5cdFx0aWYgKGZyZWVNb2R1bGUpIHsgLy8gaW4gTm9kZS5qcyBvciBSaW5nb0pTIHYwLjguMCtcblx0XHRcdGZyZWVNb2R1bGUuZXhwb3J0cyA9IGJhc2U2NDtcblx0XHR9IGVsc2UgeyAvLyBpbiBOYXJ3aGFsIG9yIFJpbmdvSlMgdjAuNy4wLVxuXHRcdFx0Zm9yICh2YXIga2V5IGluIGJhc2U2NCkge1xuXHRcdFx0XHRiYXNlNjQuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAoZnJlZUV4cG9ydHNba2V5XSA9IGJhc2U2NFtrZXldKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSB7IC8vIGluIFJoaW5vIG9yIGEgd2ViIGJyb3dzZXJcblx0XHRyb290LmJhc2U2NCA9IGJhc2U2NDtcblx0fVxuXG59KHRoaXMpKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCcuL2VuY29kZScpLFxuICAgIGVuY29kZUNvbnNlbnRTdHJpbmcgPSBfcmVxdWlyZS5lbmNvZGVDb25zZW50U3RyaW5nLFxuICAgIF9nZXRNYXhWZW5kb3JJZCA9IF9yZXF1aXJlLmdldE1heFZlbmRvcklkLFxuICAgIGVuY29kZVZlbmRvcklkc1RvQml0cyA9IF9yZXF1aXJlLmVuY29kZVZlbmRvcklkc1RvQml0cyxcbiAgICBlbmNvZGVQdXJwb3NlSWRzVG9CaXRzID0gX3JlcXVpcmUuZW5jb2RlUHVycG9zZUlkc1RvQml0cztcblxudmFyIF9yZXF1aXJlMiA9IHJlcXVpcmUoJy4vZGVjb2RlJyksXG4gICAgZGVjb2RlQ29uc2VudFN0cmluZyA9IF9yZXF1aXJlMi5kZWNvZGVDb25zZW50U3RyaW5nO1xuXG52YXIgX3JlcXVpcmUzID0gcmVxdWlyZSgnLi91dGlscy9kZWZpbml0aW9ucycpLFxuICAgIHZlbmRvclZlcnNpb25NYXAgPSBfcmVxdWlyZTMudmVuZG9yVmVyc2lvbk1hcDtcbi8qKlxuICogUmVndWxhciBleHByZXNzaW9uIGZvciB2YWxpZGF0aW5nXG4gKi9cblxuXG52YXIgY29uc2VudExhbmd1YWdlUmVnZXhwID0gL15bYS16XXsyfSQvO1xuXG52YXIgQ29uc2VudFN0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemUgYSBuZXcgQ29uc2VudFN0cmluZyBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGJhc2VTdHJpbmcgQW4gZXhpc3RpbmcgY29uc2VudCBzdHJpbmcgdG8gcGFyc2UgYW5kIHVzZSBmb3Igb3VyIGluaXRpYWwgdmFsdWVzXG4gICAqL1xuICBmdW5jdGlvbiBDb25zZW50U3RyaW5nKCkge1xuICAgIHZhciBiYXNlU3RyaW5nID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBudWxsO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnNlbnRTdHJpbmcpO1xuXG4gICAgdGhpcy5jcmVhdGVkID0gbmV3IERhdGUoKTtcbiAgICB0aGlzLmxhc3RVcGRhdGVkID0gbmV3IERhdGUoKTtcblxuICAgIC8qKlxuICAgICAqIFZlcnNpb24gbnVtYmVyIG9mIGNvbnNlbnQgc3RyaW5nIHNwZWNpZmljYXRpb25cbiAgICAgKlxuICAgICAqIEB0eXBlIHtpbnRlZ2VyfVxuICAgICAqL1xuICAgIHRoaXMudmVyc2lvbiA9IDE7XG5cbiAgICAvKipcbiAgICAgKiBWZW5kb3IgbGlzdCB3aXRoIGZvcm1hdCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9JbnRlcmFjdGl2ZUFkdmVydGlzaW5nQnVyZWF1L0dEUFItVHJhbnNwYXJlbmN5LWFuZC1Db25zZW50LUZyYW1ld29yay9ibG9iL21hc3Rlci9EcmFmdF9mb3JfUHVibGljX0NvbW1lbnRfVHJhbnNwYXJlbmN5JTIwJTI2JTIwQ29uc2VudCUyMEZyYW1ld29yayUyMC0lMjBjb29raWUlMjBhbmQlMjB2ZW5kb3IlMjBsaXN0JTIwZm9ybWF0JTIwc3BlY2lmaWNhdGlvbiUyMHYxLjBhLnBkZlxuICAgICAqXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKi9cbiAgICB0aGlzLnZlbmRvckxpc3QgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVmVyc2lvbiBvZiB0aGUgdmVuZG9yIGxpc3QgdXNlZCBmb3IgdGhlIHB1cnBvc2VzIGFuZCB2ZW5kb3JzXG4gICAgICpcbiAgICAgKiBAdHlwZSB7aW50ZWdlcn1cbiAgICAgKi9cbiAgICB0aGlzLnZlbmRvckxpc3RWZXJzaW9uID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB1bmlxdWUgSUQgb2YgdGhlIENNUCB0aGF0IGxhc3QgbW9kaWZpZWQgdGhlIGNvbnNlbnQgc3RyaW5nXG4gICAgICpcbiAgICAgKiBAdHlwZSB7aW50ZWdlcn1cbiAgICAgKi9cbiAgICB0aGlzLmNtcElkID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFZlcnNpb24gb2YgdGhlIGNvZGUgdXNlZCBieSB0aGUgQ01QIHdoZW4gY29sbGVjdGluZyBjb25zZW50XG4gICAgICpcbiAgICAgKiBAdHlwZSB7aW50ZWdlcn1cbiAgICAgKi9cbiAgICB0aGlzLmNtcFZlcnNpb24gPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogSUQgb2YgdGhlIHNjcmVlbiB1c2VkIGJ5IENNUCB3aGVuIGNvbGxlY3RpbmcgY29uc2VudFxuICAgICAqXG4gICAgICogQHR5cGUge2ludGVnZXJ9XG4gICAgICovXG4gICAgdGhpcy5jb25zZW50U2NyZWVuID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFR3by1sZXR0ZXIgSVNPNjM5LTEgY29kZSAoZW4sIGZyLCBkZSwgZXRjLikgb2YgdGhlIGxhbmd1YWdlIHRoYXQgdGhlIENNUCBhc2tlZCBjb25zZW50IGluXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuY29uc2VudExhbmd1YWdlID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIExpc3Qgb2YgcHVycG9zZSBJRHMgdGhhdCB0aGUgdXNlciBoYXMgZ2l2ZW4gY29uc2VudCB0b1xuICAgICAqXG4gICAgICogQHR5cGUge2ludGVnZXJbXX1cbiAgICAgKi9cbiAgICB0aGlzLmFsbG93ZWRQdXJwb3NlSWRzID0gW107XG5cbiAgICAvKipcbiAgICAgKiBMaXN0IG9mIHZlbmRvciBJRHMgdGhhdCB0aGUgdXNlciBoYXMgZ2l2ZW4gY29uc2VudCB0b1xuICAgICAqXG4gICAgICogQHR5cGUge2ludGVnZXJbXX1cbiAgICAgKi9cbiAgICB0aGlzLmFsbG93ZWRWZW5kb3JJZHMgPSBbXTtcblxuICAgIC8vIERlY29kZSB0aGUgYmFzZSBzdHJpbmdcbiAgICBpZiAoYmFzZVN0cmluZykge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkZWNvZGVDb25zZW50U3RyaW5nKGJhc2VTdHJpbmcpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB3ZWItc2FmZSwgYmFzZTY0LWVuY29kZWQgY29uc2VudCBzdHJpbmdcbiAgICpcbiAgICogQHJldHVybiB7c3RyaW5nfSBXZWItc2FmZSwgYmFzZTY0LWVuY29kZWQgY29uc2VudCBzdHJpbmdcbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoQ29uc2VudFN0cmluZywgW3tcbiAgICBrZXk6ICdnZXRDb25zZW50U3RyaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29uc2VudFN0cmluZygpIHtcbiAgICAgIHZhciB1cGRhdGVEYXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB0cnVlO1xuXG4gICAgICBpZiAoIXRoaXMudmVuZG9yTGlzdCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnNlbnRTdHJpbmcgLSBBIHZlbmRvciBsaXN0IGlzIHJlcXVpcmVkIHRvIGVuY29kZSBhIGNvbnNlbnQgc3RyaW5nJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh1cGRhdGVEYXRlID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMubGFzdFVwZGF0ZWQgPSBuZXcgRGF0ZSgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZW5jb2RlQ29uc2VudFN0cmluZyh7XG4gICAgICAgIHZlcnNpb246IHRoaXMuZ2V0VmVyc2lvbigpLFxuICAgICAgICB2ZW5kb3JMaXN0OiB0aGlzLnZlbmRvckxpc3QsXG4gICAgICAgIGFsbG93ZWRQdXJwb3NlSWRzOiB0aGlzLmFsbG93ZWRQdXJwb3NlSWRzLFxuICAgICAgICBhbGxvd2VkVmVuZG9ySWRzOiB0aGlzLmFsbG93ZWRWZW5kb3JJZHMsXG4gICAgICAgIGNyZWF0ZWQ6IHRoaXMuY3JlYXRlZCxcbiAgICAgICAgbGFzdFVwZGF0ZWQ6IHRoaXMubGFzdFVwZGF0ZWQsXG4gICAgICAgIGNtcElkOiB0aGlzLmNtcElkLFxuICAgICAgICBjbXBWZXJzaW9uOiB0aGlzLmNtcFZlcnNpb24sXG4gICAgICAgIGNvbnNlbnRTY3JlZW46IHRoaXMuY29uc2VudFNjcmVlbixcbiAgICAgICAgY29uc2VudExhbmd1YWdlOiB0aGlzLmNvbnNlbnRMYW5ndWFnZSxcbiAgICAgICAgdmVuZG9yTGlzdFZlcnNpb246IHRoaXMudmVuZG9yTGlzdFZlcnNpb25cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbWF4IHZlbmRvcklkXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IG1heFZlbmRvcklkIGZyb20gdGhlIHZlbmRvckxpc3QgcHJvdmlkZWRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0TWF4VmVuZG9ySWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRNYXhWZW5kb3JJZCgpIHtcbiAgICAgIHJldHVybiBfZ2V0TWF4VmVuZG9ySWQodGhpcy52ZW5kb3JMaXN0LnZlbmRvcnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGdldCB0aGUgY29uc2VudHMgaW4gYSBiaXQgc3RyaW5nLiAgVGhpcyBpcyB0byBmdWxmaWxsIHRoZSBpbi1hcHAgcmVxdWlyZW1lbnRcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gYSBiaXQgc3RyaW5nIG9mIGFsbCBvZiB0aGUgdmVuZG9yIGNvbnNlbnQgZGF0YVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRQYXJzZWRWZW5kb3JDb25zZW50cycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBhcnNlZFZlbmRvckNvbnNlbnRzKCkge1xuICAgICAgcmV0dXJuIGVuY29kZVZlbmRvcklkc1RvQml0cyhfZ2V0TWF4VmVuZG9ySWQodGhpcy52ZW5kb3JMaXN0LnZlbmRvcnMpLCB0aGlzLmFsbG93ZWRWZW5kb3JJZHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGdldCB0aGUgY29uc2VudHMgaW4gYSBiaXQgc3RyaW5nLiAgVGhpcyBpcyB0byBmdWxmaWxsIHRoZSBpbi1hcHAgcmVxdWlyZW1lbnRcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gYSBiaXQgc3RyaW5nIG9mIGFsbCBvZiB0aGUgdmVuZG9yIGNvbnNlbnQgZGF0YVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRQYXJzZWRQdXJwb3NlQ29uc2VudHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQYXJzZWRQdXJwb3NlQ29uc2VudHMoKSB7XG4gICAgICByZXR1cm4gZW5jb2RlUHVycG9zZUlkc1RvQml0cyh0aGlzLnZlbmRvckxpc3QucHVycG9zZXMsIHRoaXMuYWxsb3dlZFB1cnBvc2VJZHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgd2ViLXNhZmUsIGJhc2U2NC1lbmNvZGVkIG1ldGFkYXRhIHN0cmluZ1xuICAgICAqXG4gICAgICogQHJldHVybiB7c3RyaW5nfSBXZWItc2FmZSwgYmFzZTY0LWVuY29kZWQgbWV0YWRhdGEgc3RyaW5nXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2dldE1ldGFkYXRhU3RyaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TWV0YWRhdGFTdHJpbmcoKSB7XG4gICAgICByZXR1cm4gZW5jb2RlQ29uc2VudFN0cmluZyh7XG4gICAgICAgIHZlcnNpb246IHRoaXMuZ2V0VmVyc2lvbigpLFxuICAgICAgICBjcmVhdGVkOiB0aGlzLmNyZWF0ZWQsXG4gICAgICAgIGxhc3RVcGRhdGVkOiB0aGlzLmxhc3RVcGRhdGVkLFxuICAgICAgICBjbXBJZDogdGhpcy5jbXBJZCxcbiAgICAgICAgY21wVmVyc2lvbjogdGhpcy5jbXBWZXJzaW9uLFxuICAgICAgICBjb25zZW50U2NyZWVuOiB0aGlzLmNvbnNlbnRTY3JlZW4sXG4gICAgICAgIHZlbmRvckxpc3RWZXJzaW9uOiB0aGlzLnZlbmRvckxpc3RWZXJzaW9uXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWNvZGUgdGhlIHdlYi1zYWZlLCBiYXNlNjQtZW5jb2RlZCBtZXRhZGF0YSBzdHJpbmdcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZW5jb2RlZE1ldGFkYXRhIFdlYi1zYWZlLCBiYXNlNjQtZW5jb2RlZCBtZXRhZGF0YSBzdHJpbmdcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IGRlY29kZWQgbWV0YWRhdGFcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0VmVyc2lvbicsXG5cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdmVyc2lvbiBudW1iZXIgdGhhdCB0aGlzIGNvbnNlbnQgc3RyaW5nIHNwZWNpZmljYXRpb24gYWRoZXJlcyB0b1xuICAgICAqXG4gICAgICogQHJldHVybiB7aW50ZWdlcn0gVmVyc2lvbiBudW1iZXIgb2YgY29uc2VudCBzdHJpbmcgc3BlY2lmaWNhdGlvblxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWZXJzaW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmVyc2lvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHZlcnNpb24gb2YgdGhlIHZlbmRvciBsaXN0XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtpbnRlZ2VyfSBWZW5kb3IgbGlzdCB2ZXJzaW9uXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2dldFZlbmRvckxpc3RWZXJzaW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmVuZG9yTGlzdFZlcnNpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy52ZW5kb3JMaXN0VmVyc2lvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHZlbmRvcnMgbGlzdCB0byB1c2Ugd2hlbiBnZW5lcmF0aW5nIHRoZSBjb25zZW50IHN0cmluZ1xuICAgICAqXG4gICAgICogVGhlIGV4cGVjdGVkIGZvcm1hdCBpcyB0aGUgb25lIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL0ludGVyYWN0aXZlQWR2ZXJ0aXNpbmdCdXJlYXUvR0RQUi1UcmFuc3BhcmVuY3ktYW5kLUNvbnNlbnQtRnJhbWV3b3JrL2Jsb2IvbWFzdGVyL0RyYWZ0X2Zvcl9QdWJsaWNfQ29tbWVudF9UcmFuc3BhcmVuY3klMjAlMjYlMjBDb25zZW50JTIwRnJhbWV3b3JrJTIwLSUyMGNvb2tpZSUyMGFuZCUyMHZlbmRvciUyMGxpc3QlMjBmb3JtYXQlMjBzcGVjaWZpY2F0aW9uJTIwdjEuMGEucGRmXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdmVuZG9yTGlzdCBWZW5kb3IgbGlzdCB3aXRoIGZvcm1hdCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9JbnRlcmFjdGl2ZUFkdmVydGlzaW5nQnVyZWF1L0dEUFItVHJhbnNwYXJlbmN5LWFuZC1Db25zZW50LUZyYW1ld29yay9ibG9iL21hc3Rlci9EcmFmdF9mb3JfUHVibGljX0NvbW1lbnRfVHJhbnNwYXJlbmN5JTIwJTI2JTIwQ29uc2VudCUyMEZyYW1ld29yayUyMC0lMjBjb29raWUlMjBhbmQlMjB2ZW5kb3IlMjBsaXN0JTIwZm9ybWF0JTIwc3BlY2lmaWNhdGlvbiUyMHYxLjBhLnBkZlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdzZXRHbG9iYWxWZW5kb3JMaXN0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0R2xvYmFsVmVuZG9yTGlzdCh2ZW5kb3JMaXN0KSB7XG4gICAgICBpZiAoKHR5cGVvZiB2ZW5kb3JMaXN0ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2ZW5kb3JMaXN0KSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ29uc2VudFN0cmluZyAtIFlvdSBtdXN0IHByb3ZpZGUgYW4gb2JqZWN0IHdoZW4gc2V0dGluZyB0aGUgZ2xvYmFsIHZlbmRvciBsaXN0Jyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdmVuZG9yTGlzdC52ZW5kb3JMaXN0VmVyc2lvbiB8fCAhQXJyYXkuaXNBcnJheSh2ZW5kb3JMaXN0LnB1cnBvc2VzKSB8fCAhQXJyYXkuaXNBcnJheSh2ZW5kb3JMaXN0LnZlbmRvcnMpKSB7XG4gICAgICAgIC8vIFRoZSBwcm92aWRlZCB2ZW5kb3IgbGlzdCBkb2VzIG5vdCBsb29rIHZhbGlkXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ29uc2VudFN0cmluZyAtIFRoZSBwcm92aWRlZCB2ZW5kb3IgbGlzdCBkb2VzIG5vdCByZXNwZWN0IHRoZSBzY2hlbWEgZnJvbSB0aGUgSUFCIEVV4oCZcyBHRFBSIENvbnNlbnQgYW5kIFRyYW5zcGFyZW5jeSBGcmFtZXdvcmsnKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2xvbmluZyB0aGUgR1ZMXG4gICAgICAvLyBJdCdzIGltcG9ydGFudCBhcyB3ZSBtaWdodCB0cmFuc2Zvcm0gaXQgYW5kIGRvbid0IHdhbnQgdG8gbW9kaWZ5IG9iamVjdHMgdGhhdCB3ZSBkbyBub3Qgb3duXG4gICAgICB0aGlzLnZlbmRvckxpc3QgPSB7XG4gICAgICAgIHZlbmRvckxpc3RWZXJzaW9uOiB2ZW5kb3JMaXN0LnZlbmRvckxpc3RWZXJzaW9uLFxuICAgICAgICBsYXN0VXBkYXRlZDogdmVuZG9yTGlzdC5sYXN0VXBkYXRlZCxcbiAgICAgICAgcHVycG9zZXM6IHZlbmRvckxpc3QucHVycG9zZXMsXG4gICAgICAgIGZlYXR1cmVzOiB2ZW5kb3JMaXN0LmZlYXR1cmVzLFxuXG4gICAgICAgIC8vIENsb25lIHRoZSBsaXN0IGFuZCBzb3J0IHRoZSB2ZW5kb3JzIGJ5IElEIChpdCBicmVha3Mgb3VyIHJhbmdlIGdlbmVyYXRpb24gYWxnb3JpdGhtIGlmIHRoZXkgYXJlIG5vdCBzb3J0ZWQpXG4gICAgICAgIHZlbmRvcnM6IHZlbmRvckxpc3QudmVuZG9ycy5zbGljZSgwKS5zb3J0KGZ1bmN0aW9uIChmaXJzdFZlbmRvciwgc2Vjb25kVmVuZG9yKSB7XG4gICAgICAgICAgcmV0dXJuIGZpcnN0VmVuZG9yLmlkIDwgc2Vjb25kVmVuZG9yLmlkID8gLTEgOiAxO1xuICAgICAgICB9KVxuICAgICAgfTtcbiAgICAgIHRoaXMudmVuZG9yTGlzdFZlcnNpb24gPSB2ZW5kb3JMaXN0LnZlbmRvckxpc3RWZXJzaW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgSUQgb2YgdGhlIENvbnNlbnQgTWFuYWdlbWVudCBQbGF0Zm9ybSB0aGF0IGxhc3QgbW9kaWZpZWQgdGhlIGNvbnNlbnQgc3RyaW5nXG4gICAgICpcbiAgICAgKiBFdmVyeSBDTVAgaXMgYXNzaWduZWQgYSB1bmlxdWUgSUQgYnkgdGhlIElBQiBFVSB0aGF0IG11c3QgYmUgcHJvdmlkZWQgaGVyZSBiZWZvcmUgY2hhbmdpbmcgYW55IG90aGVyIHZhbHVlIGluIHRoZSBjb25zZW50IHN0cmluZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gaWQgQ01QIElEXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3NldENtcElkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Q21wSWQoaWQpIHtcbiAgICAgIHRoaXMuY21wSWQgPSBpZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIElEIG9mIHRoZSBDb25zZW50IE1hbmFnZW1lbnQgUGxhdGZvcm0gZnJvbSB0aGUgY29uc2VudCBzdHJpbmdcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2ludGVnZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2dldENtcElkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q21wSWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jbXBJZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHZlcnNpb24gb2YgdGhlIENvbnNlbnQgTWFuYWdlbWVudCBQbGF0Zm9ybSB0aGF0IGxhc3QgbW9kaWZpZWQgdGhlIGNvbnNlbnQgc3RyaW5nXG4gICAgICpcbiAgICAgKiBUaGlzIHZlcnNpb24gbnVtYmVyIHJlZmVyZW5jZXMgdGhlIENNUCBjb2RlIHJ1bm5pbmcgd2hlbiBjb2xsZWN0aW5nIHRoZSB1c2VyIGNvbnNlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IHZlcnNpb24gVmVyc2lvblxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdzZXRDbXBWZXJzaW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Q21wVmVyc2lvbih2ZXJzaW9uKSB7XG4gICAgICB0aGlzLmNtcFZlcnNpb24gPSB2ZXJzaW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdmVyaXNvbiBvZiB0aGUgQ29uc2VudCBNYW5hZ2VtZW50IFBsYXRmb3JtIHRoYXQgbGFzdCBtb2RpZmllZCB0aGUgY29uc2VudCBzdHJpbmdcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2ludGVnZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2dldENtcFZlcnNpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDbXBWZXJzaW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY21wVmVyc2lvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIENvbnNlbnQgTWFuYWdlbWVudCBQbGF0Zm9ybSBzY3JlZW4gSUQgdGhhdCBjb2xsZWN0ZWQgdGhlIHVzZXIgY29uc2VudFxuICAgICAqXG4gICAgICogVGhpcyBzY3JlZW4gSUQgcmVmZXJlbmNlcyBhIHVuaXF1ZSB2aWV3IGluIHRoZSBDTVAgdGhhdCB3YXMgZGlzcGxheWVkIHRvIHRoZSB1c2VyIHRvIGNvbGxlY3QgY29uc2VudFxuICAgICAqXG4gICAgICogQHBhcmFtIHsqfSBzY3JlZW5JZCBTY3JlZW4gSURcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnc2V0Q29uc2VudFNjcmVlbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldENvbnNlbnRTY3JlZW4oc2NyZWVuSWQpIHtcbiAgICAgIHRoaXMuY29uc2VudFNjcmVlbiA9IHNjcmVlbklkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgQ29uc2VudCBNYW5hZ2VtZW50IFBsYXRmb3JtIHNjcmVlbiBJRCB0aGF0IGNvbGxlY3RlZCB0aGUgdXNlciBjb25zZW50XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtpbnRlZ2VyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRDb25zZW50U2NyZWVuJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29uc2VudFNjcmVlbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnNlbnRTY3JlZW47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBsYW5ndWFnZSB0aGF0IHRoZSBDTVAgYXNrZWQgdGhlIGNvbnNlbnQgaW5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZSBUd28tbGV0dGVyIElTTzYzOS0xIGNvZGUgKGVuLCBmciwgZGUsIGV0Yy4pXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3NldENvbnNlbnRMYW5ndWFnZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldENvbnNlbnRMYW5ndWFnZShsYW5ndWFnZSkge1xuICAgICAgaWYgKGNvbnNlbnRMYW5ndWFnZVJlZ2V4cC50ZXN0KGxhbmd1YWdlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb25zZW50U3RyaW5nIC0gVGhlIGNvbnNlbnQgbGFuZ3VhZ2UgbXVzdCBiZSBhIHR3by1sZXR0ZXIgSVNPNjM5LTEgY29kZSAoZW4sIGZyLCBkZSwgZXRjLiknKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb25zZW50TGFuZ3VhZ2UgPSBsYW5ndWFnZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGxhbmd1YWdlIHRoYXQgdGhlIENNUCBhc2tlZCBjb25zZW50IGluXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFR3by1sZXR0ZXIgSVNPNjM5LTEgY29kZSAoZW4sIGZyLCBkZSwgZXRjLilcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q29uc2VudExhbmd1YWdlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29uc2VudExhbmd1YWdlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29uc2VudExhbmd1YWdlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgbGlzdCBvZiBwdXJwb3NlIElEcyB0aGF0IHRoZSB1c2VyIGhhcyBnaXZlbiBjb25zZW50IHRvXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2ludGVnZXJbXX0gcHVycG9zZUlkcyBBbiBhcnJheSBvZiBpbnRlZ2VycyB0aGF0IG1hcCB0byB0aGUgcHVycG9zZXMgZGVmaW5lZCBpbiB0aGUgdmVuZG9yIGxpc3QuIFB1cnBvc2VzIGluY2x1ZGVkIGluIHRoZSBhcnJheSBhcmUgcHVycG9zZXMgdGhhdCB0aGUgdXNlciBoYXMgZ2l2ZW4gY29uc2VudCB0b1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdzZXRQdXJwb3Nlc0FsbG93ZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQdXJwb3Nlc0FsbG93ZWQocHVycG9zZUlkcykge1xuICAgICAgdGhpcy5hbGxvd2VkUHVycG9zZUlkcyA9IHB1cnBvc2VJZHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBsaXN0IG9mIHB1cnBvc2UgSURzIHRoYXQgdGhlIHVzZXIgaGFzIGdpdmVuIGNvbnNlbnQgdG9cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2ludGVnZXJbXX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0UHVycG9zZXNBbGxvd2VkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UHVycG9zZXNBbGxvd2VkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWxsb3dlZFB1cnBvc2VJZHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBjb25zZW50IHN0YXR1cyBvZiBhIHVzZXIgZm9yIGEgZ2l2ZW4gcHVycG9zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtpbnRlZ2VyfSBwdXJwb3NlSWQgVGhlIElEIChmcm9tIHRoZSB2ZW5kb3IgbGlzdCkgb2YgdGhlIHB1cnBvc2UgdG8gdXBkYXRlXG4gICAgICogQHBhcmFtIHtib29sZWFufSB2YWx1ZSBDb25zZW50IHN0YXR1c1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdzZXRQdXJwb3NlQWxsb3dlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFB1cnBvc2VBbGxvd2VkKHB1cnBvc2VJZCwgdmFsdWUpIHtcbiAgICAgIHZhciBwdXJwb3NlSW5kZXggPSB0aGlzLmFsbG93ZWRQdXJwb3NlSWRzLmluZGV4T2YocHVycG9zZUlkKTtcblxuICAgICAgaWYgKHZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChwdXJwb3NlSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgdGhpcy5hbGxvd2VkUHVycG9zZUlkcy5wdXNoKHB1cnBvc2VJZCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChwdXJwb3NlSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgdGhpcy5hbGxvd2VkUHVycG9zZUlkcy5zcGxpY2UocHVycG9zZUluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSB1c2VyIGhhcyBnaXZlbiBjb25zZW50IGZvciBhIHNwZWNpZmljIHB1cnBvc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gcHVycG9zZUlkXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdpc1B1cnBvc2VBbGxvd2VkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNQdXJwb3NlQWxsb3dlZChwdXJwb3NlSWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFsbG93ZWRQdXJwb3NlSWRzLmluZGV4T2YocHVycG9zZUlkKSAhPT0gLTE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBsaXN0IG9mIHZlbmRvciBJRHMgdGhhdCB0aGUgdXNlciBoYXMgZ2l2ZW4gY29uc2VudCB0b1xuICAgICAqXG4gICAgICogQHBhcmFtIHtpbnRlZ2VyW119IHZlbmRvcklkcyBBbiBhcnJheSBvZiBpbnRlZ2VycyB0aGF0IG1hcCB0byB0aGUgdmVuZG9ycyBkZWZpbmVkIGluIHRoZSB2ZW5kb3IgbGlzdC4gVmVuZG9ycyBpbmNsdWRlZCBpbiB0aGUgYXJyYXkgYXJlIHZlbmRvcnMgdGhhdCB0aGUgdXNlciBoYXMgZ2l2ZW4gY29uc2VudCB0b1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdzZXRWZW5kb3JzQWxsb3dlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFZlbmRvcnNBbGxvd2VkKHZlbmRvcklkcykge1xuICAgICAgdGhpcy5hbGxvd2VkVmVuZG9ySWRzID0gdmVuZG9ySWRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbGlzdCBvZiB2ZW5kb3IgSURzIHRoYXQgdGhlIHVzZXIgaGFzIGdpdmVuIGNvbnNlbnQgdG9cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2ludGVnZXJbXX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0VmVuZG9yc0FsbG93ZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWZW5kb3JzQWxsb3dlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmFsbG93ZWRWZW5kb3JJZHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBjb25zZW50IHN0YXR1cyBvZiBhIHVzZXIgZm9yIGEgZ2l2ZW4gdmVuZG9yXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IHZlbmRvcklkIFRoZSBJRCAoZnJvbSB0aGUgdmVuZG9yIGxpc3QpIG9mIHRoZSB2ZW5kb3IgdG8gdXBkYXRlXG4gICAgICogQHBhcmFtIHtib29sZWFufSB2YWx1ZSBDb25zZW50IHN0YXR1c1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdzZXRWZW5kb3JBbGxvd2VkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VmVuZG9yQWxsb3dlZCh2ZW5kb3JJZCwgdmFsdWUpIHtcbiAgICAgIHZhciB2ZW5kb3JJbmRleCA9IHRoaXMuYWxsb3dlZFZlbmRvcklkcy5pbmRleE9mKHZlbmRvcklkKTtcblxuICAgICAgaWYgKHZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGlmICh2ZW5kb3JJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICB0aGlzLmFsbG93ZWRWZW5kb3JJZHMucHVzaCh2ZW5kb3JJZCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIGlmICh2ZW5kb3JJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICB0aGlzLmFsbG93ZWRWZW5kb3JJZHMuc3BsaWNlKHZlbmRvckluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSB1c2VyIGhhcyBnaXZlbiBjb25zZW50IGZvciBhIHNwZWNpZmljIHZlbmRvclxuICAgICAqXG4gICAgICogQHBhcmFtIHtpbnRlZ2VyfSB2ZW5kb3JJZFxuICAgICAqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnaXNWZW5kb3JBbGxvd2VkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNWZW5kb3JBbGxvd2VkKHZlbmRvcklkKSB7XG4gICAgICByZXR1cm4gdGhpcy5hbGxvd2VkVmVuZG9ySWRzLmluZGV4T2YodmVuZG9ySWQpICE9PSAtMTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogJ2RlY29kZU1ldGFkYXRhU3RyaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVjb2RlTWV0YWRhdGFTdHJpbmcoZW5jb2RlZE1ldGFkYXRhKSB7XG4gICAgICB2YXIgZGVjb2RlZFN0cmluZyA9IGRlY29kZUNvbnNlbnRTdHJpbmcoZW5jb2RlZE1ldGFkYXRhKTtcbiAgICAgIHZhciBtZXRhZGF0YSA9IHt9O1xuICAgICAgdmVuZG9yVmVyc2lvbk1hcFtkZWNvZGVkU3RyaW5nLnZlcnNpb25dLm1ldGFkYXRhRmllbGRzLmZvckVhY2goZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgIG1ldGFkYXRhW2ZpZWxkXSA9IGRlY29kZWRTdHJpbmdbZmllbGRdO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbWV0YWRhdGE7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENvbnNlbnRTdHJpbmc7XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBDb25zZW50U3RyaW5nOiBDb25zZW50U3RyaW5nXG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgnLi91dGlscy9iaXRzJyksXG4gICAgZGVjb2RlQml0c1RvSWRzID0gX3JlcXVpcmUuZGVjb2RlQml0c1RvSWRzLFxuICAgIGRlY29kZUZyb21CYXNlNjQgPSBfcmVxdWlyZS5kZWNvZGVGcm9tQmFzZTY0O1xuXG4vKipcbiAqIERlY29kZSBjb25zZW50IGRhdGEgZnJvbSBhIHdlYi1zYWZlIGJhc2U2NC1lbmNvZGVkIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb25zZW50U3RyaW5nXG4gKi9cblxuXG5mdW5jdGlvbiBkZWNvZGVDb25zZW50U3RyaW5nKGNvbnNlbnRTdHJpbmcpIHtcbiAgdmFyIF9kZWNvZGVGcm9tQmFzZSA9IGRlY29kZUZyb21CYXNlNjQoY29uc2VudFN0cmluZyksXG4gICAgICB2ZXJzaW9uID0gX2RlY29kZUZyb21CYXNlLnZlcnNpb24sXG4gICAgICBjbXBJZCA9IF9kZWNvZGVGcm9tQmFzZS5jbXBJZCxcbiAgICAgIHZlbmRvckxpc3RWZXJzaW9uID0gX2RlY29kZUZyb21CYXNlLnZlbmRvckxpc3RWZXJzaW9uLFxuICAgICAgcHVycG9zZUlkQml0U3RyaW5nID0gX2RlY29kZUZyb21CYXNlLnB1cnBvc2VJZEJpdFN0cmluZyxcbiAgICAgIG1heFZlbmRvcklkID0gX2RlY29kZUZyb21CYXNlLm1heFZlbmRvcklkLFxuICAgICAgY3JlYXRlZCA9IF9kZWNvZGVGcm9tQmFzZS5jcmVhdGVkLFxuICAgICAgbGFzdFVwZGF0ZWQgPSBfZGVjb2RlRnJvbUJhc2UubGFzdFVwZGF0ZWQsXG4gICAgICBpc1JhbmdlID0gX2RlY29kZUZyb21CYXNlLmlzUmFuZ2UsXG4gICAgICBkZWZhdWx0Q29uc2VudCA9IF9kZWNvZGVGcm9tQmFzZS5kZWZhdWx0Q29uc2VudCxcbiAgICAgIHZlbmRvcklkQml0U3RyaW5nID0gX2RlY29kZUZyb21CYXNlLnZlbmRvcklkQml0U3RyaW5nLFxuICAgICAgdmVuZG9yUmFuZ2VMaXN0ID0gX2RlY29kZUZyb21CYXNlLnZlbmRvclJhbmdlTGlzdCxcbiAgICAgIGNtcFZlcnNpb24gPSBfZGVjb2RlRnJvbUJhc2UuY21wVmVyc2lvbixcbiAgICAgIGNvbnNlbnRTY3JlZW4gPSBfZGVjb2RlRnJvbUJhc2UuY29uc2VudFNjcmVlbixcbiAgICAgIGNvbnNlbnRMYW5ndWFnZSA9IF9kZWNvZGVGcm9tQmFzZS5jb25zZW50TGFuZ3VhZ2U7XG5cbiAgdmFyIGNvbnNlbnRTdHJpbmdEYXRhID0ge1xuICAgIHZlcnNpb246IHZlcnNpb24sXG4gICAgY21wSWQ6IGNtcElkLFxuICAgIHZlbmRvckxpc3RWZXJzaW9uOiB2ZW5kb3JMaXN0VmVyc2lvbixcbiAgICBhbGxvd2VkUHVycG9zZUlkczogZGVjb2RlQml0c1RvSWRzKHB1cnBvc2VJZEJpdFN0cmluZyksXG4gICAgbWF4VmVuZG9ySWQ6IG1heFZlbmRvcklkLFxuICAgIGNyZWF0ZWQ6IGNyZWF0ZWQsXG4gICAgbGFzdFVwZGF0ZWQ6IGxhc3RVcGRhdGVkLFxuICAgIGNtcFZlcnNpb246IGNtcFZlcnNpb24sXG4gICAgY29uc2VudFNjcmVlbjogY29uc2VudFNjcmVlbixcbiAgICBjb25zZW50TGFuZ3VhZ2U6IGNvbnNlbnRMYW5ndWFnZVxuICB9O1xuXG4gIGlmIChpc1JhbmdlKSB7XG4gICAgLyogZXNsaW50IG5vLXNoYWRvdzogb2ZmICovXG4gICAgdmFyIGlkTWFwID0gdmVuZG9yUmFuZ2VMaXN0LnJlZHVjZShmdW5jdGlvbiAoYWNjLCBfcmVmKSB7XG4gICAgICB2YXIgaXNSYW5nZSA9IF9yZWYuaXNSYW5nZSxcbiAgICAgICAgICBzdGFydFZlbmRvcklkID0gX3JlZi5zdGFydFZlbmRvcklkLFxuICAgICAgICAgIGVuZFZlbmRvcklkID0gX3JlZi5lbmRWZW5kb3JJZDtcblxuICAgICAgdmFyIGxhc3RWZW5kb3JJZCA9IGlzUmFuZ2UgPyBlbmRWZW5kb3JJZCA6IHN0YXJ0VmVuZG9ySWQ7XG5cbiAgICAgIGZvciAodmFyIGkgPSBzdGFydFZlbmRvcklkOyBpIDw9IGxhc3RWZW5kb3JJZDsgaSArPSAxKSB7XG4gICAgICAgIGFjY1tpXSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuXG4gICAgY29uc2VudFN0cmluZ0RhdGEuYWxsb3dlZFZlbmRvcklkcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gbWF4VmVuZG9ySWQ7IGkgKz0gMSkge1xuICAgICAgaWYgKGRlZmF1bHRDb25zZW50ICYmICFpZE1hcFtpXSB8fCAhZGVmYXVsdENvbnNlbnQgJiYgaWRNYXBbaV0pIHtcbiAgICAgICAgaWYgKGNvbnNlbnRTdHJpbmdEYXRhLmFsbG93ZWRWZW5kb3JJZHMuaW5kZXhPZihpKSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zZW50U3RyaW5nRGF0YS5hbGxvd2VkVmVuZG9ySWRzLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc2VudFN0cmluZ0RhdGEuYWxsb3dlZFZlbmRvcklkcyA9IGRlY29kZUJpdHNUb0lkcyh2ZW5kb3JJZEJpdFN0cmluZyk7XG4gIH1cblxuICByZXR1cm4gY29uc2VudFN0cmluZ0RhdGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkZWNvZGVDb25zZW50U3RyaW5nOiBkZWNvZGVDb25zZW50U3RyaW5nXG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgnLi91dGlscy9iaXRzJyksXG4gICAgZW5jb2RlVG9CYXNlNjQgPSBfcmVxdWlyZS5lbmNvZGVUb0Jhc2U2NCxcbiAgICBwYWRSaWdodCA9IF9yZXF1aXJlLnBhZFJpZ2h0O1xuXG4vKipcbiAqIEVuY29kZSBhIGxpc3Qgb2YgdmVuZG9yIElEcyBpbnRvIGJpdHNcbiAqXG4gKiBAcGFyYW0ge2ludGVnZXJ9IG1heFZlbmRvcklkIEhpZ2hlc3QgdmVuZG9yIElEIGluIHRoZSB2ZW5kb3IgbGlzdFxuICogQHBhcmFtIHtpbnRlZ2VyW119IGFsbG93ZWRWZW5kb3JJZHMgVmVuZG9ycyB0aGF0IHRoZSB1c2VyIGhhcyBnaXZlbiBjb25zZW50IHRvXG4gKi9cblxuXG5mdW5jdGlvbiBlbmNvZGVWZW5kb3JJZHNUb0JpdHMobWF4VmVuZG9ySWQpIHtcbiAgdmFyIGFsbG93ZWRWZW5kb3JJZHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IFtdO1xuXG4gIHZhciB2ZW5kb3JTdHJpbmcgPSAnJztcblxuICBmb3IgKHZhciBpZCA9IDE7IGlkIDw9IG1heFZlbmRvcklkOyBpZCArPSAxKSB7XG4gICAgdmVuZG9yU3RyaW5nICs9IGFsbG93ZWRWZW5kb3JJZHMuaW5kZXhPZihpZCkgIT09IC0xID8gJzEnIDogJzAnO1xuICB9XG5cbiAgcmV0dXJuIHBhZFJpZ2h0KHZlbmRvclN0cmluZywgTWF0aC5tYXgoMCwgbWF4VmVuZG9ySWQgLSB2ZW5kb3JTdHJpbmcubGVuZ3RoKSk7XG59XG5cbi8qKlxuICogRW5jb2RlIGEgbGlzdCBvZiBwdXJwb3NlIElEcyBpbnRvIGJpdHNcbiAqXG4gKiBAcGFyYW0geyp9IHB1cnBvc2VzIExpc3Qgb2YgcHVycG9zZXMgZnJvbSB0aGUgdmVuZG9yIGxpc3RcbiAqIEBwYXJhbSB7Kn0gYWxsb3dlZFB1cnBvc2VJZHMgTGlzdCBvZiBwdXJwb3NlIElEcyB0aGF0IHRoZSB1c2VyIGhhcyBnaXZlbiBjb25zZW50IHRvXG4gKi9cbmZ1bmN0aW9uIGVuY29kZVB1cnBvc2VJZHNUb0JpdHMocHVycG9zZXMpIHtcbiAgdmFyIGFsbG93ZWRQdXJwb3NlSWRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBuZXcgU2V0KCk7XG5cbiAgdmFyIG1heFB1cnBvc2VJZCA9IDA7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHVycG9zZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBtYXhQdXJwb3NlSWQgPSBNYXRoLm1heChtYXhQdXJwb3NlSWQsIHB1cnBvc2VzW2ldLmlkKTtcbiAgfVxuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYWxsb3dlZFB1cnBvc2VJZHMubGVuZ3RoOyBfaSArPSAxKSB7XG4gICAgbWF4UHVycG9zZUlkID0gTWF0aC5tYXgobWF4UHVycG9zZUlkLCBhbGxvd2VkUHVycG9zZUlkc1tfaV0pO1xuICB9XG5cbiAgdmFyIHB1cnBvc2VTdHJpbmcgPSAnJztcbiAgZm9yICh2YXIgaWQgPSAxOyBpZCA8PSBtYXhQdXJwb3NlSWQ7IGlkICs9IDEpIHtcbiAgICBwdXJwb3NlU3RyaW5nICs9IGFsbG93ZWRQdXJwb3NlSWRzLmluZGV4T2YoaWQpICE9PSAtMSA/ICcxJyA6ICcwJztcbiAgfVxuXG4gIHJldHVybiBwdXJwb3NlU3RyaW5nO1xufVxuXG4vKipcbiAqIENvbnZlcnQgYSBsaXN0IG9mIHZlbmRvciBJRHMgdG8gcmFuZ2VzXG4gKlxuICogQHBhcmFtIHtvYmplY3RbXX0gdmVuZG9ycyBMaXN0IG9mIHZlbmRvcnMgZnJvbSB0aGUgdmVuZG9yIGxpc3QgKGltcG9ydGFudDogdGhpcyBsaXN0IG11c3QgdG8gYmUgc29ydGVkIGJ5IElEKVxuICogQHBhcmFtIHtpbnRlZ2VyW119IGFsbG93ZWRWZW5kb3JJZHMgTGlzdCBvZiB2ZW5kb3IgSURzIHRoYXQgdGhlIHVzZXIgaGFzIGdpdmVuIGNvbnNlbnQgdG9cbiAqL1xuZnVuY3Rpb24gY29udmVydFZlbmRvcnNUb1Jhbmdlcyh2ZW5kb3JzLCBhbGxvd2VkVmVuZG9ySWRzKSB7XG4gIHZhciByYW5nZSA9IFtdO1xuICB2YXIgcmFuZ2VzID0gW107XG5cbiAgdmFyIGlkc0luTGlzdCA9IHZlbmRvcnMubWFwKGZ1bmN0aW9uICh2ZW5kb3IpIHtcbiAgICByZXR1cm4gdmVuZG9yLmlkO1xuICB9KTtcblxuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdmVuZG9ycy5sZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICB2YXIgaWQgPSB2ZW5kb3JzW2luZGV4XS5pZDtcblxuICAgIGlmIChhbGxvd2VkVmVuZG9ySWRzLmluZGV4T2YoaWQpICE9PSAtMSkge1xuICAgICAgcmFuZ2UucHVzaChpZCk7XG4gICAgfVxuXG4gICAgLy8gRG8gd2UgbmVlZCB0byBjbG9zZSB0aGUgY3VycmVudCByYW5nZT9cbiAgICBpZiAoKGFsbG93ZWRWZW5kb3JJZHMuaW5kZXhPZihpZCkgPT09IC0xIC8vIFRoZSB2ZW5kb3Igd2UgYXJlIGV2YWx1YXRpbmcgaXMgbm90IGFsbG93ZWRcbiAgICB8fCBpbmRleCA9PT0gdmVuZG9ycy5sZW5ndGggLSAxIC8vIFRoZXJlIGlzIG5vIG1vcmUgdmVuZG9yIHRvIGV2YWx1YXRlXG4gICAgfHwgaWRzSW5MaXN0LmluZGV4T2YoaWQgKyAxKSA9PT0gLTEgLy8gVGhlcmUgaXMgbm8gdmVuZG9yIGFmdGVyIHRoaXMgb25lIChpZSB0aGVyZSBpcyBhIGdhcCBpbiB0aGUgdmVuZG9yIElEcykgOyB3ZSBuZWVkIHRvIHN0b3AgaGVyZSB0byBhdm9pZCBpbmNsdWRpbmcgdmVuZG9ycyB0aGF0IGRvIG5vdCBoYXZlIGNvbnNlbnRcbiAgICApICYmIHJhbmdlLmxlbmd0aCkge1xuICAgICAgdmFyIHN0YXJ0VmVuZG9ySWQgPSByYW5nZS5zaGlmdCgpO1xuICAgICAgdmFyIGVuZFZlbmRvcklkID0gcmFuZ2UucG9wKCk7XG5cbiAgICAgIHJhbmdlID0gW107XG5cbiAgICAgIHJhbmdlcy5wdXNoKHtcbiAgICAgICAgaXNSYW5nZTogdHlwZW9mIGVuZFZlbmRvcklkID09PSAnbnVtYmVyJyxcbiAgICAgICAgc3RhcnRWZW5kb3JJZDogc3RhcnRWZW5kb3JJZCxcbiAgICAgICAgZW5kVmVuZG9ySWQ6IGVuZFZlbmRvcklkXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmFuZ2VzO1xufVxuXG4vKipcbiAqIEdldCBtYXhWZW5kb3JJZCBmcm9tIHRoZSBsaXN0IG9mIHZlbmRvcnMgYW5kIHJldHVybiB0aGF0IGlkXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHZlbmRvcnNcbiAqL1xuZnVuY3Rpb24gZ2V0TWF4VmVuZG9ySWQodmVuZG9ycykge1xuICAvLyBGaW5kIHRoZSBtYXggdmVuZG9yIElEIGZyb20gdGhlIHZlbmRvciBsaXN0XG4gIHZhciBtYXhWZW5kb3JJZCA9IDA7XG5cbiAgdmVuZG9ycy5mb3JFYWNoKGZ1bmN0aW9uICh2ZW5kb3IpIHtcbiAgICBpZiAodmVuZG9yLmlkID4gbWF4VmVuZG9ySWQpIHtcbiAgICAgIG1heFZlbmRvcklkID0gdmVuZG9yLmlkO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBtYXhWZW5kb3JJZDtcbn1cbi8qKlxuICogRW5jb2RlIGNvbnNlbnQgZGF0YSBpbnRvIGEgd2ViLXNhZmUgYmFzZTY0LWVuY29kZWQgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbnNlbnREYXRhIERhdGEgdG8gaW5jbHVkZSBpbiB0aGUgc3RyaW5nIChzZWUgYHV0aWxzL2RlZmluaXRpb25zLmpzYCBmb3IgdGhlIGxpc3Qgb2YgZmllbGRzKVxuICovXG5mdW5jdGlvbiBlbmNvZGVDb25zZW50U3RyaW5nKGNvbnNlbnREYXRhKSB7XG4gIHZhciBtYXhWZW5kb3JJZCA9IGNvbnNlbnREYXRhLm1heFZlbmRvcklkO1xuICB2YXIgX2NvbnNlbnREYXRhJHZlbmRvckxpID0gY29uc2VudERhdGEudmVuZG9yTGlzdCxcbiAgICAgIHZlbmRvckxpc3QgPSBfY29uc2VudERhdGEkdmVuZG9yTGkgPT09IHVuZGVmaW5lZCA/IHt9IDogX2NvbnNlbnREYXRhJHZlbmRvckxpLFxuICAgICAgYWxsb3dlZFB1cnBvc2VJZHMgPSBjb25zZW50RGF0YS5hbGxvd2VkUHVycG9zZUlkcyxcbiAgICAgIGFsbG93ZWRWZW5kb3JJZHMgPSBjb25zZW50RGF0YS5hbGxvd2VkVmVuZG9ySWRzO1xuICB2YXIgX3ZlbmRvckxpc3QkdmVuZG9ycyA9IHZlbmRvckxpc3QudmVuZG9ycyxcbiAgICAgIHZlbmRvcnMgPSBfdmVuZG9yTGlzdCR2ZW5kb3JzID09PSB1bmRlZmluZWQgPyBbXSA6IF92ZW5kb3JMaXN0JHZlbmRvcnMsXG4gICAgICBfdmVuZG9yTGlzdCRwdXJwb3NlcyA9IHZlbmRvckxpc3QucHVycG9zZXMsXG4gICAgICBwdXJwb3NlcyA9IF92ZW5kb3JMaXN0JHB1cnBvc2VzID09PSB1bmRlZmluZWQgPyBbXSA6IF92ZW5kb3JMaXN0JHB1cnBvc2VzO1xuXG4gIC8vIGlmIG5vIG1heFZlbmRvcklkIGlzIGluIHRoZSBDb25zZW50RGF0YSwgZ2V0IGl0XG5cbiAgaWYgKCFtYXhWZW5kb3JJZCkge1xuICAgIG1heFZlbmRvcklkID0gZ2V0TWF4VmVuZG9ySWQodmVuZG9ycyk7XG4gIH1cblxuICAvLyBFbmNvZGUgdGhlIGRhdGEgd2l0aCBhbmQgd2l0aG91dCByYW5nZXMgYW5kIHJldHVybiB0aGUgc21hbGxlc3QgZW5jb2RlZCBwYXlsb2FkXG4gIHZhciBub1Jhbmdlc0RhdGEgPSBlbmNvZGVUb0Jhc2U2NChfZXh0ZW5kcyh7fSwgY29uc2VudERhdGEsIHtcbiAgICBtYXhWZW5kb3JJZDogbWF4VmVuZG9ySWQsXG4gICAgcHVycG9zZUlkQml0U3RyaW5nOiBlbmNvZGVQdXJwb3NlSWRzVG9CaXRzKHB1cnBvc2VzLCBhbGxvd2VkUHVycG9zZUlkcyksXG4gICAgaXNSYW5nZTogZmFsc2UsXG4gICAgdmVuZG9ySWRCaXRTdHJpbmc6IGVuY29kZVZlbmRvcklkc1RvQml0cyhtYXhWZW5kb3JJZCwgYWxsb3dlZFZlbmRvcklkcylcbiAgfSkpO1xuXG4gIHZhciB2ZW5kb3JSYW5nZUxpc3QgPSBjb252ZXJ0VmVuZG9yc1RvUmFuZ2VzKHZlbmRvcnMsIGFsbG93ZWRWZW5kb3JJZHMpO1xuXG4gIHZhciByYW5nZXNEYXRhID0gZW5jb2RlVG9CYXNlNjQoX2V4dGVuZHMoe30sIGNvbnNlbnREYXRhLCB7XG4gICAgbWF4VmVuZG9ySWQ6IG1heFZlbmRvcklkLFxuICAgIHB1cnBvc2VJZEJpdFN0cmluZzogZW5jb2RlUHVycG9zZUlkc1RvQml0cyhwdXJwb3NlcywgYWxsb3dlZFB1cnBvc2VJZHMpLFxuICAgIGlzUmFuZ2U6IHRydWUsXG4gICAgZGVmYXVsdENvbnNlbnQ6IGZhbHNlLFxuICAgIG51bUVudHJpZXM6IHZlbmRvclJhbmdlTGlzdC5sZW5ndGgsXG4gICAgdmVuZG9yUmFuZ2VMaXN0OiB2ZW5kb3JSYW5nZUxpc3RcbiAgfSkpO1xuXG4gIHJldHVybiBub1Jhbmdlc0RhdGEubGVuZ3RoIDwgcmFuZ2VzRGF0YS5sZW5ndGggPyBub1Jhbmdlc0RhdGEgOiByYW5nZXNEYXRhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY29udmVydFZlbmRvcnNUb1JhbmdlczogY29udmVydFZlbmRvcnNUb1JhbmdlcyxcbiAgZW5jb2RlQ29uc2VudFN0cmluZzogZW5jb2RlQ29uc2VudFN0cmluZyxcbiAgZ2V0TWF4VmVuZG9ySWQ6IGdldE1heFZlbmRvcklkLFxuICBlbmNvZGVWZW5kb3JJZHNUb0JpdHM6IGVuY29kZVZlbmRvcklkc1RvQml0cyxcbiAgZW5jb2RlUHVycG9zZUlkc1RvQml0czogZW5jb2RlUHVycG9zZUlkc1RvQml0c1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJy4vY29uc2VudC1zdHJpbmcnKSxcbiAgICBDb25zZW50U3RyaW5nID0gX3JlcXVpcmUuQ29uc2VudFN0cmluZztcblxudmFyIF9yZXF1aXJlMiA9IHJlcXVpcmUoJy4vZGVjb2RlJyksXG4gICAgZGVjb2RlQ29uc2VudFN0cmluZyA9IF9yZXF1aXJlMi5kZWNvZGVDb25zZW50U3RyaW5nO1xuXG52YXIgX3JlcXVpcmUzID0gcmVxdWlyZSgnLi9lbmNvZGUnKSxcbiAgICBlbmNvZGVDb25zZW50U3RyaW5nID0gX3JlcXVpcmUzLmVuY29kZUNvbnNlbnRTdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBDb25zZW50U3RyaW5nOiBDb25zZW50U3RyaW5nLFxuICBkZWNvZGVDb25zZW50U3RyaW5nOiBkZWNvZGVDb25zZW50U3RyaW5nLFxuICBlbmNvZGVDb25zZW50U3RyaW5nOiBlbmNvZGVDb25zZW50U3RyaW5nXG59OyIsIid1c2Ugc3RyaWN0JztcblxuLyogZXNsaW50IG5vLXVzZS1iZWZvcmUtZGVmaW5lOiBvZmYgKi9cblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2UtNjQnKTtcblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgnLi9kZWZpbml0aW9ucycpLFxuICAgIHZlcnNpb25OdW1CaXRzID0gX3JlcXVpcmUudmVyc2lvbk51bUJpdHMsXG4gICAgdmVuZG9yVmVyc2lvbk1hcCA9IF9yZXF1aXJlLnZlbmRvclZlcnNpb25NYXA7XG5cbmZ1bmN0aW9uIHJlcGVhdChjb3VudCkge1xuICB2YXIgc3RyaW5nID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnMCc7XG5cbiAgdmFyIHBhZFN0cmluZyA9ICcnO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkgKz0gMSkge1xuICAgIHBhZFN0cmluZyArPSBzdHJpbmc7XG4gIH1cblxuICByZXR1cm4gcGFkU3RyaW5nO1xufVxuXG5mdW5jdGlvbiBwYWRMZWZ0KHN0cmluZywgcGFkZGluZykge1xuICByZXR1cm4gcmVwZWF0KE1hdGgubWF4KDAsIHBhZGRpbmcpKSArIHN0cmluZztcbn1cblxuZnVuY3Rpb24gcGFkUmlnaHQoc3RyaW5nLCBwYWRkaW5nKSB7XG4gIHJldHVybiBzdHJpbmcgKyByZXBlYXQoTWF0aC5tYXgoMCwgcGFkZGluZykpO1xufVxuXG5mdW5jdGlvbiBlbmNvZGVJbnRUb0JpdHMobnVtYmVyLCBudW1CaXRzKSB7XG4gIHZhciBiaXRTdHJpbmcgPSAnJztcblxuICBpZiAodHlwZW9mIG51bWJlciA9PT0gJ251bWJlcicgJiYgIWlzTmFOKG51bWJlcikpIHtcbiAgICBiaXRTdHJpbmcgPSBwYXJzZUludChudW1iZXIsIDEwKS50b1N0cmluZygyKTtcbiAgfVxuXG4gIC8vIFBhZCB0aGUgc3RyaW5nIGlmIG5vdCBmaWxsaW5nIGFsbCBiaXRzXG4gIGlmIChudW1CaXRzID49IGJpdFN0cmluZy5sZW5ndGgpIHtcbiAgICBiaXRTdHJpbmcgPSBwYWRMZWZ0KGJpdFN0cmluZywgbnVtQml0cyAtIGJpdFN0cmluZy5sZW5ndGgpO1xuICB9XG5cbiAgLy8gVHJ1bmNhdGUgdGhlIHN0cmluZyBpZiBsb25nZXIgdGhhbiB0aGUgbnVtYmVyIG9mIGJpdHNcbiAgaWYgKGJpdFN0cmluZy5sZW5ndGggPiBudW1CaXRzKSB7XG4gICAgYml0U3RyaW5nID0gYml0U3RyaW5nLnN1YnN0cmluZygwLCBudW1CaXRzKTtcbiAgfVxuXG4gIHJldHVybiBiaXRTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGVuY29kZUJvb2xUb0JpdHModmFsdWUpIHtcbiAgcmV0dXJuIGVuY29kZUludFRvQml0cyh2YWx1ZSA9PT0gdHJ1ZSA/IDEgOiAwLCAxKTtcbn1cblxuZnVuY3Rpb24gZW5jb2RlRGF0ZVRvQml0cyhkYXRlLCBudW1CaXRzKSB7XG4gIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiBlbmNvZGVJbnRUb0JpdHMoZGF0ZS5nZXRUaW1lKCkgLyAxMDAsIG51bUJpdHMpO1xuICB9XG4gIHJldHVybiBlbmNvZGVJbnRUb0JpdHMoZGF0ZSwgbnVtQml0cyk7XG59XG5cbmZ1bmN0aW9uIGVuY29kZUxldHRlclRvQml0cyhsZXR0ZXIsIG51bUJpdHMpIHtcbiAgcmV0dXJuIGVuY29kZUludFRvQml0cyhsZXR0ZXIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApIC0gNjUsIG51bUJpdHMpO1xufVxuXG5mdW5jdGlvbiBlbmNvZGVMYW5ndWFnZVRvQml0cyhsYW5ndWFnZSkge1xuICB2YXIgbnVtQml0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMTI7XG5cbiAgcmV0dXJuIGVuY29kZUxldHRlclRvQml0cyhsYW5ndWFnZS5zbGljZSgwLCAxKSwgbnVtQml0cyAvIDIpICsgZW5jb2RlTGV0dGVyVG9CaXRzKGxhbmd1YWdlLnNsaWNlKDEpLCBudW1CaXRzIC8gMik7XG59XG5cbmZ1bmN0aW9uIGRlY29kZUJpdHNUb0ludChiaXRTdHJpbmcsIHN0YXJ0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIHBhcnNlSW50KGJpdFN0cmluZy5zdWJzdHIoc3RhcnQsIGxlbmd0aCksIDIpO1xufVxuXG5mdW5jdGlvbiBkZWNvZGVCaXRzVG9EYXRlKGJpdFN0cmluZywgc3RhcnQsIGxlbmd0aCkge1xuICByZXR1cm4gbmV3IERhdGUoZGVjb2RlQml0c1RvSW50KGJpdFN0cmluZywgc3RhcnQsIGxlbmd0aCkgKiAxMDApO1xufVxuXG5mdW5jdGlvbiBkZWNvZGVCaXRzVG9Cb29sKGJpdFN0cmluZywgc3RhcnQpIHtcbiAgcmV0dXJuIHBhcnNlSW50KGJpdFN0cmluZy5zdWJzdHIoc3RhcnQsIDEpLCAyKSA9PT0gMTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlQml0c1RvTGV0dGVyKGJpdFN0cmluZykge1xuICB2YXIgbGV0dGVyQ29kZSA9IGRlY29kZUJpdHNUb0ludChiaXRTdHJpbmcpO1xuICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShsZXR0ZXJDb2RlICsgNjUpLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIGRlY29kZUJpdHNUb0xhbmd1YWdlKGJpdFN0cmluZywgc3RhcnQsIGxlbmd0aCkge1xuICB2YXIgbGFuZ3VhZ2VCaXRTdHJpbmcgPSBiaXRTdHJpbmcuc3Vic3RyKHN0YXJ0LCBsZW5ndGgpO1xuXG4gIHJldHVybiBkZWNvZGVCaXRzVG9MZXR0ZXIobGFuZ3VhZ2VCaXRTdHJpbmcuc2xpY2UoMCwgbGVuZ3RoIC8gMikpICsgZGVjb2RlQml0c1RvTGV0dGVyKGxhbmd1YWdlQml0U3RyaW5nLnNsaWNlKGxlbmd0aCAvIDIpKTtcbn1cblxuZnVuY3Rpb24gZW5jb2RlRmllbGQoX3JlZikge1xuICB2YXIgaW5wdXQgPSBfcmVmLmlucHV0LFxuICAgICAgZmllbGQgPSBfcmVmLmZpZWxkO1xuICB2YXIgbmFtZSA9IGZpZWxkLm5hbWUsXG4gICAgICB0eXBlID0gZmllbGQudHlwZSxcbiAgICAgIG51bUJpdHMgPSBmaWVsZC5udW1CaXRzLFxuICAgICAgZW5jb2RlciA9IGZpZWxkLmVuY29kZXIsXG4gICAgICB2YWxpZGF0b3IgPSBmaWVsZC52YWxpZGF0b3I7XG5cblxuICBpZiAodHlwZW9mIHZhbGlkYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmICghdmFsaWRhdG9yKGlucHV0KSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuICBpZiAodHlwZW9mIGVuY29kZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZW5jb2RlcihpbnB1dCk7XG4gIH1cblxuICB2YXIgYml0Q291bnQgPSB0eXBlb2YgbnVtQml0cyA9PT0gJ2Z1bmN0aW9uJyA/IG51bUJpdHMoaW5wdXQpIDogbnVtQml0cztcblxuICB2YXIgaW5wdXRWYWx1ZSA9IGlucHV0W25hbWVdO1xuICB2YXIgZmllbGRWYWx1ZSA9IGlucHV0VmFsdWUgPT09IG51bGwgfHwgaW5wdXRWYWx1ZSA9PT0gdW5kZWZpbmVkID8gJycgOiBpbnB1dFZhbHVlO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ2ludCc6XG4gICAgICByZXR1cm4gZW5jb2RlSW50VG9CaXRzKGZpZWxkVmFsdWUsIGJpdENvdW50KTtcbiAgICBjYXNlICdib29sJzpcbiAgICAgIHJldHVybiBlbmNvZGVCb29sVG9CaXRzKGZpZWxkVmFsdWUpO1xuICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgcmV0dXJuIGVuY29kZURhdGVUb0JpdHMoZmllbGRWYWx1ZSwgYml0Q291bnQpO1xuICAgIGNhc2UgJ2JpdHMnOlxuICAgICAgcmV0dXJuIHBhZFJpZ2h0KGZpZWxkVmFsdWUsIGJpdENvdW50IC0gZmllbGRWYWx1ZS5sZW5ndGgpLnN1YnN0cmluZygwLCBiaXRDb3VudCk7XG4gICAgY2FzZSAnbGlzdCc6XG4gICAgICByZXR1cm4gZmllbGRWYWx1ZS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbGlzdFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBhY2MgKyBlbmNvZGVGaWVsZHMoe1xuICAgICAgICAgIGlucHV0OiBsaXN0VmFsdWUsXG4gICAgICAgICAgZmllbGRzOiBmaWVsZC5maWVsZHNcbiAgICAgICAgfSk7XG4gICAgICB9LCAnJyk7XG4gICAgY2FzZSAnbGFuZ3VhZ2UnOlxuICAgICAgcmV0dXJuIGVuY29kZUxhbmd1YWdlVG9CaXRzKGZpZWxkVmFsdWUsIGJpdENvdW50KTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb25zZW50U3RyaW5nIC0gVW5rbm93biBmaWVsZCB0eXBlICcgKyB0eXBlICsgJyBmb3IgZW5jb2RpbmcnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlbmNvZGVGaWVsZHMoX3JlZjIpIHtcbiAgdmFyIGlucHV0ID0gX3JlZjIuaW5wdXQsXG4gICAgICBmaWVsZHMgPSBfcmVmMi5maWVsZHM7XG5cbiAgcmV0dXJuIGZpZWxkcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgZmllbGQpIHtcbiAgICBhY2MgKz0gZW5jb2RlRmllbGQoeyBpbnB1dDogaW5wdXQsIGZpZWxkOiBmaWVsZCB9KTtcblxuICAgIHJldHVybiBhY2M7XG4gIH0sICcnKTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlRmllbGQoX3JlZjMpIHtcbiAgdmFyIGlucHV0ID0gX3JlZjMuaW5wdXQsXG4gICAgICBvdXRwdXQgPSBfcmVmMy5vdXRwdXQsXG4gICAgICBzdGFydFBvc2l0aW9uID0gX3JlZjMuc3RhcnRQb3NpdGlvbixcbiAgICAgIGZpZWxkID0gX3JlZjMuZmllbGQ7XG4gIHZhciB0eXBlID0gZmllbGQudHlwZSxcbiAgICAgIG51bUJpdHMgPSBmaWVsZC5udW1CaXRzLFxuICAgICAgZGVjb2RlciA9IGZpZWxkLmRlY29kZXIsXG4gICAgICB2YWxpZGF0b3IgPSBmaWVsZC52YWxpZGF0b3IsXG4gICAgICBsaXN0Q291bnQgPSBmaWVsZC5saXN0Q291bnQ7XG5cblxuICBpZiAodHlwZW9mIHZhbGlkYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmICghdmFsaWRhdG9yKG91dHB1dCkpIHtcbiAgICAgIC8vIE5vdCBkZWNvZGluZyB0aGlzIGZpZWxkIHNvIG1ha2Ugc3VyZSB3ZSBzdGFydCBwYXJzaW5nIHRoZSBuZXh0IGZpZWxkIGF0XG4gICAgICAvLyB0aGUgc2FtZSBwb2ludFxuICAgICAgcmV0dXJuIHsgbmV3UG9zaXRpb246IHN0YXJ0UG9zaXRpb24gfTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIGRlY29kZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZGVjb2RlcihpbnB1dCwgb3V0cHV0LCBzdGFydFBvc2l0aW9uKTtcbiAgfVxuXG4gIHZhciBiaXRDb3VudCA9IHR5cGVvZiBudW1CaXRzID09PSAnZnVuY3Rpb24nID8gbnVtQml0cyhvdXRwdXQpIDogbnVtQml0cztcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdpbnQnOlxuICAgICAgcmV0dXJuIHsgZmllbGRWYWx1ZTogZGVjb2RlQml0c1RvSW50KGlucHV0LCBzdGFydFBvc2l0aW9uLCBiaXRDb3VudCkgfTtcbiAgICBjYXNlICdib29sJzpcbiAgICAgIHJldHVybiB7IGZpZWxkVmFsdWU6IGRlY29kZUJpdHNUb0Jvb2woaW5wdXQsIHN0YXJ0UG9zaXRpb24pIH07XG4gICAgY2FzZSAnZGF0ZSc6XG4gICAgICByZXR1cm4geyBmaWVsZFZhbHVlOiBkZWNvZGVCaXRzVG9EYXRlKGlucHV0LCBzdGFydFBvc2l0aW9uLCBiaXRDb3VudCkgfTtcbiAgICBjYXNlICdiaXRzJzpcbiAgICAgIHJldHVybiB7IGZpZWxkVmFsdWU6IGlucHV0LnN1YnN0cihzdGFydFBvc2l0aW9uLCBiaXRDb3VudCkgfTtcbiAgICBjYXNlICdsaXN0JzpcbiAgICAgIHJldHVybiBkZWNvZGVMaXN0KGlucHV0LCBvdXRwdXQsIHN0YXJ0UG9zaXRpb24sIGZpZWxkLCBsaXN0Q291bnQpO1xuICAgIGNhc2UgJ2xhbmd1YWdlJzpcbiAgICAgIHJldHVybiB7IGZpZWxkVmFsdWU6IGRlY29kZUJpdHNUb0xhbmd1YWdlKGlucHV0LCBzdGFydFBvc2l0aW9uLCBiaXRDb3VudCkgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb25zZW50U3RyaW5nIC0gVW5rbm93biBmaWVsZCB0eXBlICcgKyB0eXBlICsgJyBmb3IgZGVjb2RpbmcnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWNvZGVMaXN0KGlucHV0LCBvdXRwdXQsIHN0YXJ0UG9zaXRpb24sIGZpZWxkLCBsaXN0Q291bnQpIHtcbiAgdmFyIGxpc3RFbnRyeUNvdW50ID0gMDtcblxuICBpZiAodHlwZW9mIGxpc3RDb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGxpc3RFbnRyeUNvdW50ID0gbGlzdENvdW50KG91dHB1dCk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGxpc3RDb3VudCA9PT0gJ251bWJlcicpIHtcbiAgICBsaXN0RW50cnlDb3VudCA9IGxpc3RDb3VudDtcbiAgfVxuXG4gIHZhciBuZXdQb3NpdGlvbiA9IHN0YXJ0UG9zaXRpb247XG4gIHZhciBmaWVsZFZhbHVlID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0RW50cnlDb3VudDsgaSArPSAxKSB7XG4gICAgdmFyIGRlY29kZWRGaWVsZHMgPSBkZWNvZGVGaWVsZHMoe1xuICAgICAgaW5wdXQ6IGlucHV0LFxuICAgICAgZmllbGRzOiBmaWVsZC5maWVsZHMsXG4gICAgICBzdGFydFBvc2l0aW9uOiBuZXdQb3NpdGlvblxuICAgIH0pO1xuXG4gICAgbmV3UG9zaXRpb24gPSBkZWNvZGVkRmllbGRzLm5ld1Bvc2l0aW9uO1xuICAgIGZpZWxkVmFsdWUucHVzaChkZWNvZGVkRmllbGRzLmRlY29kZWRPYmplY3QpO1xuICB9XG5cbiAgcmV0dXJuIHsgZmllbGRWYWx1ZTogZmllbGRWYWx1ZSwgbmV3UG9zaXRpb246IG5ld1Bvc2l0aW9uIH07XG59XG5cbmZ1bmN0aW9uIGRlY29kZUZpZWxkcyhfcmVmNCkge1xuICB2YXIgaW5wdXQgPSBfcmVmNC5pbnB1dCxcbiAgICAgIGZpZWxkcyA9IF9yZWY0LmZpZWxkcyxcbiAgICAgIF9yZWY0JHN0YXJ0UG9zaXRpb24gPSBfcmVmNC5zdGFydFBvc2l0aW9uLFxuICAgICAgc3RhcnRQb3NpdGlvbiA9IF9yZWY0JHN0YXJ0UG9zaXRpb24gPT09IHVuZGVmaW5lZCA/IDAgOiBfcmVmNCRzdGFydFBvc2l0aW9uO1xuXG4gIHZhciBwb3NpdGlvbiA9IHN0YXJ0UG9zaXRpb247XG5cbiAgdmFyIGRlY29kZWRPYmplY3QgPSBmaWVsZHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGZpZWxkKSB7XG4gICAgdmFyIG5hbWUgPSBmaWVsZC5uYW1lLFxuICAgICAgICBudW1CaXRzID0gZmllbGQubnVtQml0cztcblxuICAgIHZhciBfZGVjb2RlRmllbGQgPSBkZWNvZGVGaWVsZCh7XG4gICAgICBpbnB1dDogaW5wdXQsXG4gICAgICBvdXRwdXQ6IGFjYyxcbiAgICAgIHN0YXJ0UG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgZmllbGQ6IGZpZWxkXG4gICAgfSksXG4gICAgICAgIGZpZWxkVmFsdWUgPSBfZGVjb2RlRmllbGQuZmllbGRWYWx1ZSxcbiAgICAgICAgbmV3UG9zaXRpb24gPSBfZGVjb2RlRmllbGQubmV3UG9zaXRpb247XG5cbiAgICBpZiAoZmllbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhY2NbbmFtZV0gPSBmaWVsZFZhbHVlO1xuICAgIH1cblxuICAgIGlmIChuZXdQb3NpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBwb3NpdGlvbiA9IG5ld1Bvc2l0aW9uO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG51bUJpdHMgPT09ICdudW1iZXInKSB7XG4gICAgICBwb3NpdGlvbiArPSBudW1CaXRzO1xuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcblxuICByZXR1cm4ge1xuICAgIGRlY29kZWRPYmplY3Q6IGRlY29kZWRPYmplY3QsXG4gICAgbmV3UG9zaXRpb246IHBvc2l0aW9uXG4gIH07XG59XG5cbi8qKlxuICogRW5jb2RlIHRoZSBkYXRhIHByb3BlcnRpZXMgdG8gYSBiaXQgc3RyaW5nLiBFbmNvZGluZyB3aWxsIGVuY29kZVxuICogZWl0aGVyIGBzZWxlY3RlZFZlbmRvcklkc2Agb3IgdGhlIGB2ZW5kb3JSYW5nZUxpc3RgIGRlcGVuZGluZyBvblxuICogdGhlIHZhbHVlIG9mIHRoZSBgaXNSYW5nZWAgZmxhZy5cbiAqL1xuZnVuY3Rpb24gZW5jb2RlRGF0YVRvQml0cyhkYXRhLCBkZWZpbml0aW9uTWFwKSB7XG4gIHZhciB2ZXJzaW9uID0gZGF0YS52ZXJzaW9uO1xuXG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBFcnJvcignQ29uc2VudFN0cmluZyAtIE5vIHZlcnNpb24gZmllbGQgdG8gZW5jb2RlJyk7XG4gIH0gZWxzZSBpZiAoIWRlZmluaXRpb25NYXBbdmVyc2lvbl0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnNlbnRTdHJpbmcgLSBObyBkZWZpbml0aW9uIGZvciB2ZXJzaW9uICcgKyB2ZXJzaW9uKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZmllbGRzID0gZGVmaW5pdGlvbk1hcFt2ZXJzaW9uXS5maWVsZHM7XG4gICAgcmV0dXJuIGVuY29kZUZpZWxkcyh7IGlucHV0OiBkYXRhLCBmaWVsZHM6IGZpZWxkcyB9KTtcbiAgfVxufVxuXG4vKipcbiAqIFRha2UgYWxsIGZpZWxkcyByZXF1aXJlZCB0byBlbmNvZGUgdGhlIGNvbnNlbnQgc3RyaW5nIGFuZCBwcm9kdWNlIHRoZSBVUkwgc2FmZSBCYXNlNjQgZW5jb2RlZCB2YWx1ZVxuICovXG5mdW5jdGlvbiBlbmNvZGVUb0Jhc2U2NChkYXRhKSB7XG4gIHZhciBkZWZpbml0aW9uTWFwID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB2ZW5kb3JWZXJzaW9uTWFwO1xuXG4gIHZhciBiaW5hcnlWYWx1ZSA9IGVuY29kZURhdGFUb0JpdHMoZGF0YSwgZGVmaW5pdGlvbk1hcCk7XG5cbiAgaWYgKGJpbmFyeVZhbHVlKSB7XG4gICAgLy8gUGFkIGxlbmd0aCB0byBtdWx0aXBsZSBvZiA4XG4gICAgdmFyIHBhZGRlZEJpbmFyeVZhbHVlID0gcGFkUmlnaHQoYmluYXJ5VmFsdWUsIDcgLSAoYmluYXJ5VmFsdWUubGVuZ3RoICsgNykgJSA4KTtcblxuICAgIC8vIEVuY29kZSB0byBieXRlc1xuICAgIHZhciBieXRlcyA9ICcnO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFkZGVkQmluYXJ5VmFsdWUubGVuZ3RoOyBpICs9IDgpIHtcbiAgICAgIGJ5dGVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQocGFkZGVkQmluYXJ5VmFsdWUuc3Vic3RyKGksIDgpLCAyKSk7XG4gICAgfVxuXG4gICAgLy8gTWFrZSBiYXNlNjQgc3RyaW5nIFVSTCBmcmllbmRseVxuICAgIHJldHVybiBiYXNlNjQuZW5jb2RlKGJ5dGVzKS5yZXBsYWNlKC9cXCsvZywgJy0nKS5yZXBsYWNlKC9cXC8vZywgJ18nKS5yZXBsYWNlKC89KyQvLCAnJyk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gZGVjb2RlQ29uc2VudFN0cmluZ0JpdFZhbHVlKGJpdFN0cmluZykge1xuICB2YXIgZGVmaW5pdGlvbk1hcCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdmVuZG9yVmVyc2lvbk1hcDtcblxuICB2YXIgdmVyc2lvbiA9IGRlY29kZUJpdHNUb0ludChiaXRTdHJpbmcsIDAsIHZlcnNpb25OdW1CaXRzKTtcblxuICBpZiAodHlwZW9mIHZlcnNpb24gIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDb25zZW50U3RyaW5nIC0gVW5rbm93biB2ZXJzaW9uIG51bWJlciBpbiB0aGUgc3RyaW5nIHRvIGRlY29kZScpO1xuICB9IGVsc2UgaWYgKCF2ZW5kb3JWZXJzaW9uTWFwW3ZlcnNpb25dKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDb25zZW50U3RyaW5nIC0gVW5zdXBwb3J0ZWQgdmVyc2lvbiAnICsgdmVyc2lvbiArICcgaW4gdGhlIHN0cmluZyB0byBkZWNvZGUnKTtcbiAgfVxuXG4gIHZhciBmaWVsZHMgPSBkZWZpbml0aW9uTWFwW3ZlcnNpb25dLmZpZWxkcztcblxuICB2YXIgX2RlY29kZUZpZWxkcyA9IGRlY29kZUZpZWxkcyh7IGlucHV0OiBiaXRTdHJpbmcsIGZpZWxkczogZmllbGRzIH0pLFxuICAgICAgZGVjb2RlZE9iamVjdCA9IF9kZWNvZGVGaWVsZHMuZGVjb2RlZE9iamVjdDtcblxuICByZXR1cm4gZGVjb2RlZE9iamVjdDtcbn1cblxuLyoqXG4gKiBEZWNvZGUgdGhlIChVUkwgc2FmZSBCYXNlNjQpIHZhbHVlIG9mIGEgY29uc2VudCBzdHJpbmcgaW50byBhbiBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGRlY29kZUZyb21CYXNlNjQoY29uc2VudFN0cmluZywgZGVmaW5pdGlvbk1hcCkge1xuICAvLyBBZGQgcGFkZGluZ1xuICB2YXIgdW5zYWZlID0gY29uc2VudFN0cmluZztcbiAgd2hpbGUgKHVuc2FmZS5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgdW5zYWZlICs9ICc9JztcbiAgfVxuXG4gIC8vIFJlcGxhY2Ugc2FmZSBjaGFyYWN0ZXJzXG4gIHVuc2FmZSA9IHVuc2FmZS5yZXBsYWNlKC8tL2csICcrJykucmVwbGFjZSgvXy9nLCAnLycpO1xuXG4gIHZhciBieXRlcyA9IGJhc2U2NC5kZWNvZGUodW5zYWZlKTtcblxuICB2YXIgaW5wdXRCaXRzID0gJyc7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgYml0U3RyaW5nID0gYnl0ZXMuY2hhckNvZGVBdChpKS50b1N0cmluZygyKTtcbiAgICBpbnB1dEJpdHMgKz0gcGFkTGVmdChiaXRTdHJpbmcsIDggLSBiaXRTdHJpbmcubGVuZ3RoKTtcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVDb25zZW50U3RyaW5nQml0VmFsdWUoaW5wdXRCaXRzLCBkZWZpbml0aW9uTWFwKTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlQml0c1RvSWRzKGJpdFN0cmluZykge1xuICByZXR1cm4gYml0U3RyaW5nLnNwbGl0KCcnKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgYml0LCBpbmRleCkge1xuICAgIGlmIChiaXQgPT09ICcxJykge1xuICAgICAgaWYgKGFjYy5pbmRleE9mKGluZGV4ICsgMSkgPT09IC0xKSB7XG4gICAgICAgIGFjYy5wdXNoKGluZGV4ICsgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhY2M7XG4gIH0sIFtdKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBhZFJpZ2h0OiBwYWRSaWdodCxcbiAgcGFkTGVmdDogcGFkTGVmdCxcbiAgZW5jb2RlRmllbGQ6IGVuY29kZUZpZWxkLFxuICBlbmNvZGVEYXRhVG9CaXRzOiBlbmNvZGVEYXRhVG9CaXRzLFxuICBlbmNvZGVJbnRUb0JpdHM6IGVuY29kZUludFRvQml0cyxcbiAgZW5jb2RlQm9vbFRvQml0czogZW5jb2RlQm9vbFRvQml0cyxcbiAgZW5jb2RlRGF0ZVRvQml0czogZW5jb2RlRGF0ZVRvQml0cyxcbiAgZW5jb2RlTGFuZ3VhZ2VUb0JpdHM6IGVuY29kZUxhbmd1YWdlVG9CaXRzLFxuICBlbmNvZGVMZXR0ZXJUb0JpdHM6IGVuY29kZUxldHRlclRvQml0cyxcbiAgZW5jb2RlVG9CYXNlNjQ6IGVuY29kZVRvQmFzZTY0LFxuICBkZWNvZGVCaXRzVG9JZHM6IGRlY29kZUJpdHNUb0lkcyxcbiAgZGVjb2RlQml0c1RvSW50OiBkZWNvZGVCaXRzVG9JbnQsXG4gIGRlY29kZUJpdHNUb0RhdGU6IGRlY29kZUJpdHNUb0RhdGUsXG4gIGRlY29kZUJpdHNUb0Jvb2w6IGRlY29kZUJpdHNUb0Jvb2wsXG4gIGRlY29kZUJpdHNUb0xhbmd1YWdlOiBkZWNvZGVCaXRzVG9MYW5ndWFnZSxcbiAgZGVjb2RlQml0c1RvTGV0dGVyOiBkZWNvZGVCaXRzVG9MZXR0ZXIsXG4gIGRlY29kZUZyb21CYXNlNjQ6IGRlY29kZUZyb21CYXNlNjRcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE51bWJlciBvZiBiaXRzIGZvciBlbmNvZGluZyB0aGUgdmVyc2lvbiBpbnRlZ2VyXG4gKiBFeHBlY3RlZCB0byBiZSB0aGUgc2FtZSBhY3Jvc3MgdmVyc2lvbnNcbiAqL1xudmFyIHZlcnNpb25OdW1CaXRzID0gNjtcblxuLyoqXG4gKiBEZWZpbml0aW9uIG9mIHRoZSBjb25zZW50IHN0cmluZyBlbmNvZGVkIGZvcm1hdFxuICpcbiAqIEZyb20gaHR0cHM6Ly9naXRodWIuY29tL0ludGVyYWN0aXZlQWR2ZXJ0aXNpbmdCdXJlYXUvR0RQUi1UcmFuc3BhcmVuY3ktYW5kLUNvbnNlbnQtRnJhbWV3b3JrL2Jsb2IvbWFzdGVyL0RyYWZ0X2Zvcl9QdWJsaWNfQ29tbWVudF9UcmFuc3BhcmVuY3klMjAlMjYlMjBDb25zZW50JTIwRnJhbWV3b3JrJTIwLSUyMGNvb2tpZSUyMGFuZCUyMHZlbmRvciUyMGxpc3QlMjBmb3JtYXQlMjBzcGVjaWZpY2F0aW9uJTIwdjEuMGEucGRmXG4gKi9cbnZhciB2ZW5kb3JWZXJzaW9uTWFwID0ge1xuICAvKipcbiAgICogVmVyc2lvbiAxXG4gICAqL1xuICAxOiB7XG4gICAgdmVyc2lvbjogMSxcbiAgICBtZXRhZGF0YUZpZWxkczogWyd2ZXJzaW9uJywgJ2NyZWF0ZWQnLCAnbGFzdFVwZGF0ZWQnLCAnY21wSWQnLCAnY21wVmVyc2lvbicsICdjb25zZW50U2NyZWVuJywgJ3ZlbmRvckxpc3RWZXJzaW9uJ10sXG4gICAgZmllbGRzOiBbeyBuYW1lOiAndmVyc2lvbicsIHR5cGU6ICdpbnQnLCBudW1CaXRzOiA2IH0sIHsgbmFtZTogJ2NyZWF0ZWQnLCB0eXBlOiAnZGF0ZScsIG51bUJpdHM6IDM2IH0sIHsgbmFtZTogJ2xhc3RVcGRhdGVkJywgdHlwZTogJ2RhdGUnLCBudW1CaXRzOiAzNiB9LCB7IG5hbWU6ICdjbXBJZCcsIHR5cGU6ICdpbnQnLCBudW1CaXRzOiAxMiB9LCB7IG5hbWU6ICdjbXBWZXJzaW9uJywgdHlwZTogJ2ludCcsIG51bUJpdHM6IDEyIH0sIHsgbmFtZTogJ2NvbnNlbnRTY3JlZW4nLCB0eXBlOiAnaW50JywgbnVtQml0czogNiB9LCB7IG5hbWU6ICdjb25zZW50TGFuZ3VhZ2UnLCB0eXBlOiAnbGFuZ3VhZ2UnLCBudW1CaXRzOiAxMiB9LCB7IG5hbWU6ICd2ZW5kb3JMaXN0VmVyc2lvbicsIHR5cGU6ICdpbnQnLCBudW1CaXRzOiAxMiB9LCB7IG5hbWU6ICdwdXJwb3NlSWRCaXRTdHJpbmcnLCB0eXBlOiAnYml0cycsIG51bUJpdHM6IDI0IH0sIHsgbmFtZTogJ21heFZlbmRvcklkJywgdHlwZTogJ2ludCcsIG51bUJpdHM6IDE2IH0sIHsgbmFtZTogJ2lzUmFuZ2UnLCB0eXBlOiAnYm9vbCcsIG51bUJpdHM6IDEgfSwge1xuICAgICAgbmFtZTogJ3ZlbmRvcklkQml0U3RyaW5nJyxcbiAgICAgIHR5cGU6ICdiaXRzJyxcbiAgICAgIG51bUJpdHM6IGZ1bmN0aW9uIG51bUJpdHMoZGVjb2RlZE9iamVjdCkge1xuICAgICAgICByZXR1cm4gZGVjb2RlZE9iamVjdC5tYXhWZW5kb3JJZDtcbiAgICAgIH0sXG4gICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRvcihkZWNvZGVkT2JqZWN0KSB7XG4gICAgICAgIHJldHVybiAhZGVjb2RlZE9iamVjdC5pc1JhbmdlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdkZWZhdWx0Q29uc2VudCcsXG4gICAgICB0eXBlOiAnYm9vbCcsXG4gICAgICBudW1CaXRzOiAxLFxuICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0b3IoZGVjb2RlZE9iamVjdCkge1xuICAgICAgICByZXR1cm4gZGVjb2RlZE9iamVjdC5pc1JhbmdlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdudW1FbnRyaWVzJyxcbiAgICAgIG51bUJpdHM6IDEyLFxuICAgICAgdHlwZTogJ2ludCcsXG4gICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRvcihkZWNvZGVkT2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVkT2JqZWN0LmlzUmFuZ2U7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogJ3ZlbmRvclJhbmdlTGlzdCcsXG4gICAgICB0eXBlOiAnbGlzdCcsXG4gICAgICBsaXN0Q291bnQ6IGZ1bmN0aW9uIGxpc3RDb3VudChkZWNvZGVkT2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVkT2JqZWN0Lm51bUVudHJpZXM7XG4gICAgICB9LFxuICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0b3IoZGVjb2RlZE9iamVjdCkge1xuICAgICAgICByZXR1cm4gZGVjb2RlZE9iamVjdC5pc1JhbmdlO1xuICAgICAgfSxcbiAgICAgIGZpZWxkczogW3tcbiAgICAgICAgbmFtZTogJ2lzUmFuZ2UnLFxuICAgICAgICB0eXBlOiAnYm9vbCcsXG4gICAgICAgIG51bUJpdHM6IDFcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ3N0YXJ0VmVuZG9ySWQnLFxuICAgICAgICB0eXBlOiAnaW50JyxcbiAgICAgICAgbnVtQml0czogMTZcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ2VuZFZlbmRvcklkJyxcbiAgICAgICAgdHlwZTogJ2ludCcsXG4gICAgICAgIG51bUJpdHM6IDE2LFxuICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRvcihkZWNvZGVkT2JqZWN0KSB7XG4gICAgICAgICAgcmV0dXJuIGRlY29kZWRPYmplY3QuaXNSYW5nZTtcbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9XVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdmVyc2lvbk51bUJpdHM6IHZlcnNpb25OdW1CaXRzLFxuICB2ZW5kb3JWZXJzaW9uTWFwOiB2ZW5kb3JWZXJzaW9uTWFwXG59OyIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImNvbnN0IHtDb25zZW50U3RyaW5nfSA9IHJlcXVpcmUoJ2NvbnNlbnQtc3RyaW5nJyk7XHJcblxyXG5BZGVxdWEubW9kZWwuY29uc2VudCA9IHtcclxuICAgIGNtcDoge30sXHJcbiAgICB2aWV3OiB7fVxyXG59O1xyXG5cclxuQWRlcXVhLm1vZGVsLmNvbnNlbnQuZ2V0U2V0dGluZ3MgPSBmdW5jdGlvbiAoZmlsdGVycykge1xyXG4gICAgbGV0IHNldHRpbmdzID0gQWRlcXVhLnN0b3JhZ2UuY29uc2VudC5zZXR0aW5ncztcclxuICAgIGlmIChmaWx0ZXJzLndlYnNpdGVfaWQpXHJcbiAgICAgICAgc2V0dGluZ3MgPSBzZXR0aW5ncy5maWx0ZXIoc2V0dGluZyA9PiBzZXR0aW5nLmlkLndlYnNpdGVfaWQgPT09IGZpbHRlcnMud2Vic2l0ZV9pZCk7XHJcbiAgICBpZiAoZmlsdGVycy52ZW5kb3JfaWQpXHJcbiAgICAgICAgc2V0dGluZ3MgPSBzZXR0aW5ncy5maWx0ZXIoc2V0dGluZyA9PiBzZXR0aW5nLmlkLnZlbmRvcl9pZCA9PT0gZmlsdGVycy52ZW5kb3JfaWQpO1xyXG4gICAgaWYgKGZpbHRlcnMucHVycG9zZV9pZClcclxuICAgICAgICBzZXR0aW5ncyA9IHNldHRpbmdzLmZpbHRlcihzZXR0aW5nID0+IHNldHRpbmcuaWQucHVycG9zZV9pZCA9PT0gZmlsdGVycy5wdXJwb3NlX2lkKTtcclxuXHJcbiAgICByZXR1cm4gc2V0dGluZ3M7XHJcbn07XHJcblxyXG5BZGVxdWEubW9kZWwuY29uc2VudC5nZXRBbGxTZXR0aW5ncyA9IGZ1bmN0aW9uIChmaWx0ZXJzLCBpZCkge1xyXG4gICAgY29uc3Qgc2V0dGluZ3MgPSBBZGVxdWEubW9kZWwuY29uc2VudC5nZXRTZXR0aW5ncyhmaWx0ZXJzKTtcclxuICAgIGNvbnN0IHNldHRpbmdzTWFwcGVkID0ge307XHJcblxyXG4gICAgZm9yIChjb25zdCBzZXR0aW5nIG9mIHNldHRpbmdzKVxyXG4gICAgICAgIHNldHRpbmdzTWFwcGVkW3NldHRpbmcuaWRbaWRdXSA9IHNldHRpbmc7XHJcblxyXG4gICAgcmV0dXJuIHNldHRpbmdzTWFwcGVkO1xyXG59O1xyXG5cclxuQWRlcXVhLm1vZGVsLmNvbnNlbnQuc2V0U2V0dGluZyA9IGZ1bmN0aW9uIChzZXR0aW5nKSB7XHJcbiAgICBjb25zdCBleGlzdGluZyA9IEFkZXF1YS5tb2RlbC5jb25zZW50LmdldFNldHRpbmdzKHNldHRpbmcuaWQpO1xyXG4gICAgaWYoZXhpc3RpbmcubGVuZ3RoICYmIGV4aXN0aW5nWzBdLnZhbHVlID09PSBzZXR0aW5nLnZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgQWRlcXVhLmFjdGlvbnMuYW5hbHl0aWNzLnNlbmRBbm9ueW1vdXNFdmVudChcIm5vdXJsXCIsICdjb25zZW50JywgJ2RlZmF1bHRfcGFyYW1ldGVyX2NoYW5nZScsIEFkZXF1YS5zdG9yYWdlLmFkZXF1YVB1cnBvc2VMaXN0W3NldHRpbmcuaWQucHVycG9zZV9pZC0xXS5zaG9ydG5hbWUsIHNldHRpbmcudmFsdWUgPT09IDEgPyAwIDogMSk7XHJcblxyXG4gICAgY29uc3QgaW5kZXggPSBBZGVxdWEuc3RvcmFnZS5jb25zZW50LnNldHRpbmdzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQud2Vic2l0ZV9pZCA9PT0gc2V0dGluZy5pZC53ZWJzaXRlX2lkICYmIGl0ZW0uaWQucHVycG9zZV9pZCA9PT0gc2V0dGluZy5pZC5wdXJwb3NlX2lkICYmIGl0ZW0uaWQudmVuZG9yX2lkID09PSBzZXR0aW5nLmlkLnZlbmRvcl9pZCk7XHJcbiAgICBpZiAoaW5kZXggPT09IC0xKVxyXG4gICAgICAgIEFkZXF1YS5zdG9yYWdlLmNvbnNlbnQuc2V0dGluZ3MucHVzaChzZXR0aW5nKTtcclxuICAgIGVsc2VcclxuICAgICAgICBBZGVxdWEuc3RvcmFnZS5jb25zZW50LnNldHRpbmdzW2luZGV4XSA9IHNldHRpbmc7XHJcbiAgICBBZGVxdWEuc2V0U3RvcmFnZSh7fSk7XHJcbn07XHJcblxyXG5BZGVxdWEubW9kZWwuY29uc2VudC5zZXRDb25zZW50ID0gZnVuY3Rpb24gKGFsbG93ZWRQdXJwb3NlcywgYWxsb3dlZFZlbmRvcnMsIHVybCkge1xyXG4gICAgZm9yIChjb25zdCBwdXJwb3NlIG9mIEFkZXF1YS5zdG9yYWdlLnB1cnBvc2VMaXN0KSB7XHJcbiAgICAgICAgQWRlcXVhLm1vZGVsLmNvbnNlbnQuc2V0U2V0dGluZyh7XHJcbiAgICAgICAgICAgIGlkOiB7XHJcbiAgICAgICAgICAgICAgICB3ZWJzaXRlX2lkOiBBZGVxdWEuaG9zdG5hbWUodXJsKSxcclxuICAgICAgICAgICAgICAgIHB1cnBvc2VfaWQ6IHB1cnBvc2UuaWQsXHJcbiAgICAgICAgICAgICAgICB2ZW5kb3JfaWQ6IFwiYWxsXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdmFsdWU6IGFsbG93ZWRQdXJwb3Nlcy5pbmRleE9mKHB1cnBvc2UuaWQpID09PSAtMSA/IDEgOiAtMVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IHZlbmRvciBvZiBBZGVxdWEuc3RvcmFnZS52ZW5kb3JMaXN0KSB7XHJcbiAgICAgICAgQWRlcXVhLm1vZGVsLmNvbnNlbnQuc2V0U2V0dGluZyh7XHJcbiAgICAgICAgICAgIGlkOiB7XHJcbiAgICAgICAgICAgICAgICB3ZWJzaXRlX2lkOiBBZGVxdWEuaG9zdG5hbWUodXJsKSxcclxuICAgICAgICAgICAgICAgIHB1cnBvc2VfaWQ6IFwiYWxsXCIsXHJcbiAgICAgICAgICAgICAgICB2ZW5kb3JfaWQ6IHZlbmRvci5pZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB2YWx1ZTogYWxsb3dlZFZlbmRvcnMuaW5kZXhPZih2ZW5kb3IuaWQpID09PSAtMSA/IDEgOiAtMVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn07XHJcblxyXG5BZGVxdWEubW9kZWwuY29uc2VudC5hY2NlcHRBbGwgPSBmdW5jdGlvbigpe1xyXG4gICAgQWRlcXVhLnN0b3JhZ2UuYWRlcXVhUHVycG9zZUxpc3QuZm9yRWFjaChwdXJwb3NlID0+IHtcclxuICAgICAgICBBZGVxdWEubW9kZWwuY29uc2VudC5zZXRTZXR0aW5nKHtcclxuICAgICAgICAgICAgaWQ6IHtcclxuICAgICAgICAgICAgICAgIHdlYnNpdGVfaWQ6IFwiYWxsXCIsXHJcbiAgICAgICAgICAgICAgICBwdXJwb3NlX2lkOiBwdXJwb3NlLmlkLFxyXG4gICAgICAgICAgICAgICAgdmVuZG9yX2lkOiBcImFsbFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHZhbHVlOiAtMVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxufTtcclxuXHJcbkFkZXF1YS5tb2RlbC5jb25zZW50LnNldENvbnNlbnRTdHJpbmcgPSBmdW5jdGlvbiAoY29uc2VudFN0cmluZywgdXJsKSB7XHJcbiAgICBjb25zdCBjb25zZW50RGF0YSA9IG5ldyBDb25zZW50U3RyaW5nKGNvbnNlbnRTdHJpbmcpO1xyXG4gICAgY29uc2VudERhdGEuc2V0R2xvYmFsVmVuZG9yTGlzdChBZGVxdWEuc3RvcmFnZS5mdWxsVmVuZG9yTGlzdCk7XHJcblxyXG4gICAgY29uc3QgYWxsb3dlZFB1cnBvc2VzID0gY29uc2VudERhdGEuZ2V0UHVycG9zZXNBbGxvd2VkKCk7XHJcbiAgICBjb25zdCBhbGxvd2VkVmVuZG9ycyA9IGNvbnNlbnREYXRhLmdldFZlbmRvcnNBbGxvd2VkKCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBwdXJwb3NlIG9mIEFkZXF1YS5zdG9yYWdlLnB1cnBvc2VMaXN0KSB7XHJcbiAgICAgICAgQWRlcXVhLm1vZGVsLmNvbnNlbnQuc2V0U2V0dGluZyh7XHJcbiAgICAgICAgICAgIGlkOiB7XHJcbiAgICAgICAgICAgICAgICB3ZWJzaXRlX2lkOiBBZGVxdWEuaG9zdG5hbWUodXJsKSxcclxuICAgICAgICAgICAgICAgIHB1cnBvc2VfaWQ6IHB1cnBvc2UuaWQsXHJcbiAgICAgICAgICAgICAgICB2ZW5kb3JfaWQ6IFwiYWxsXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdmFsdWU6IGFsbG93ZWRQdXJwb3Nlcy5pbmRleE9mKHB1cnBvc2UuaWQpID09PSAtMSA/IDEgOiAtMVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IHZlbmRvciBvZiBBZGVxdWEuc3RvcmFnZS52ZW5kb3JMaXN0KSB7XHJcbiAgICAgICAgQWRlcXVhLm1vZGVsLmNvbnNlbnQuc2V0U2V0dGluZyh7XHJcbiAgICAgICAgICAgIGlkOiB7XHJcbiAgICAgICAgICAgICAgICB3ZWJzaXRlX2lkOiBBZGVxdWEuaG9zdG5hbWUodXJsKSxcclxuICAgICAgICAgICAgICAgIHB1cnBvc2VfaWQ6IFwiYWxsXCIsXHJcbiAgICAgICAgICAgICAgICB2ZW5kb3JfaWQ6IHZlbmRvci5pZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB2YWx1ZTogYWxsb3dlZFZlbmRvcnMuaW5kZXhPZih2ZW5kb3IuaWQpID09PSAtMSA/IDEgOiAtMVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn07XHJcblxyXG5BZGVxdWEubW9kZWwuY29uc2VudC5jbXAuZ2V0VmVuZG9yQ29uc2VudHMgPSBmdW5jdGlvbiAod2Vic2l0ZUlkLCBjYWxsYmFjaykge1xyXG5cclxufTtcclxuXHJcbkFkZXF1YS5tb2RlbC5jb25zZW50LmNtcC5nZXRDb25zZW50RGF0YSA9IGZ1bmN0aW9uICh3ZWJzaXRlSWQsIGNhbGxiYWNrKSB7XHJcbiAgICBjb25zdCBkZWZhdWx0U2V0dGluZ3MgPSBBZGVxdWEubW9kZWwuY29uc2VudC5nZXRTZXR0aW5ncyh7d2Vic2l0ZV9pZDogXCJhbGxcIn0pO1xyXG4gICAgY29uc3Qgd2Vic2l0ZVNldHRpbmdzID0gQWRlcXVhLm1vZGVsLmNvbnNlbnQuZ2V0U2V0dGluZ3Moe3dlYnNpdGVfaWQ6IHdlYnNpdGVJZH0pO1xyXG5cclxuICAgIGxldCBhbGxvd2VkUHVycG9zZUlkcyA9IFsxXTtcclxuICAgIGNvbnN0IGZvcmJpZGRlblB1cnBvc2VJZHMgPSBbXTtcclxuXHJcbiAgICBsZXQgYWxsb3dlZFZlbmRvcklkcyA9IFtdO1xyXG4gICAgY29uc3QgZm9yYmlkZGVuVmVuZG9ySWRzID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCBzZXR0aW5nIG9mIHdlYnNpdGVTZXR0aW5ncykge1xyXG4gICAgICAgIGlmIChzZXR0aW5nLmlkLnB1cnBvc2VfaWQgPT09IFwiYWxsXCIgJiYgc2V0dGluZy5pZC52ZW5kb3JfaWQgIT09IFwiYWxsXCIpIHtcclxuICAgICAgICAgICAgaWYgKGFsbG93ZWRWZW5kb3JJZHMuaW5kZXhPZihzZXR0aW5nLmlkLnZlbmRvcl9pZCkgPT09IC0xICYmIGZvcmJpZGRlblZlbmRvcklkcy5pbmRleE9mKHNldHRpbmcuaWQudmVuZG9yX2lkKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5nLnZhbHVlID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbG93ZWRWZW5kb3JJZHMucHVzaChzZXR0aW5nLmlkLnZlbmRvcl9pZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcmJpZGRlblZlbmRvcklkcy5wdXNoKHNldHRpbmcuaWQudmVuZG9yX2lkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoc2V0dGluZy5pZC5wdXJwb3NlX2lkICE9PSBcImFsbFwiICYmIHNldHRpbmcuaWQudmVuZG9yX2lkID09PSBcImFsbFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChhbGxvd2VkUHVycG9zZUlkcy5pbmRleE9mKHNldHRpbmcuaWQucHVycG9zZV9pZCkgPT09IC0xICYmIGZvcmJpZGRlblB1cnBvc2VJZHMuaW5kZXhPZihzZXR0aW5nLmlkLnB1cnBvc2VfaWQpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmcudmFsdWUgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dlZFB1cnBvc2VJZHMucHVzaChzZXR0aW5nLmlkLnB1cnBvc2VfaWQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JiaWRkZW5QdXJwb3NlSWRzLnB1c2goc2V0dGluZy5pZC5wdXJwb3NlX2lkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChkZWZhdWx0U2V0dGluZ3MuaW5kZXhPZihzZXR0aW5nKSA9PT0gLTEpXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0U2V0dGluZ3MucHVzaChzZXR0aW5nKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IHNldHRpbmcgb2YgZGVmYXVsdFNldHRpbmdzKSB7XHJcbiAgICAgICAgaWYgKHNldHRpbmcuaWQucHVycG9zZV9pZCA9PT0gXCJhbGxcIiAmJiBzZXR0aW5nLmlkLnZlbmRvcl9pZCAhPT0gXCJhbGxcIikge1xyXG4gICAgICAgICAgICBpZiAoYWxsb3dlZFZlbmRvcklkcy5pbmRleE9mKHNldHRpbmcuaWQudmVuZG9yX2lkKSA9PT0gLTEgJiYgZm9yYmlkZGVuVmVuZG9ySWRzLmluZGV4T2Yoc2V0dGluZy5pZC52ZW5kb3JfaWQpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmcudmFsdWUgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dlZFZlbmRvcklkcy5wdXNoKHNldHRpbmcuaWQudmVuZG9yX2lkKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yYmlkZGVuVmVuZG9ySWRzLnB1c2goc2V0dGluZy5pZC52ZW5kb3JfaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChzZXR0aW5nLmlkLnB1cnBvc2VfaWQgIT09IFwiYWxsXCIgJiYgc2V0dGluZy5pZC52ZW5kb3JfaWQgPT09IFwiYWxsXCIpIHtcclxuICAgICAgICAgICAgaWYgKGFsbG93ZWRQdXJwb3NlSWRzLmluZGV4T2Yoc2V0dGluZy5pZC5wdXJwb3NlX2lkKSA9PT0gLTEgJiYgZm9yYmlkZGVuUHVycG9zZUlkcy5pbmRleE9mKHNldHRpbmcuaWQucHVycG9zZV9pZCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZy52YWx1ZSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGxvd2VkUHVycG9zZUlkcy5wdXNoKHNldHRpbmcuaWQucHVycG9zZV9pZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcmJpZGRlblB1cnBvc2VJZHMucHVzaChzZXR0aW5nLmlkLnB1cnBvc2VfaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChzZXR0aW5nLmlkLnB1cnBvc2VfaWQgPT09IFwiYWxsXCIgJiYgc2V0dGluZy5pZC52ZW5kb3JfaWQgPT09IFwiYWxsXCIpIHtcclxuICAgICAgICAgICAgaWYgKHNldHRpbmcudmFsdWUgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHB1cnBvc2VJZCBvZiBBZGVxdWEuc3RvcmFnZS5wdXJwb3NlTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbGxvd2VkUHVycG9zZUlkcy5pbmRleE9mKHB1cnBvc2VJZCkgPT09IC0xICYmIGZvcmJpZGRlblB1cnBvc2VJZHMuaW5kZXhPZihwdXJwb3NlSWQpID09PSAtMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dlZFB1cnBvc2VJZHMucHVzaChwdXJwb3NlSWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB2ZW5kb3JJZCBvZiBBZGVxdWEuc3RvcmFnZS52ZW5kb3JMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFsbG93ZWRWZW5kb3JJZHMuaW5kZXhPZih2ZW5kb3JJZCkgPT09IC0xICYmIGZvcmJpZGRlblZlbmRvcklkcy5pbmRleE9mKHZlbmRvcklkKSA9PT0gLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93ZWRWZW5kb3JJZHMucHVzaCh2ZW5kb3JJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHB1cnBvc2VJZCBvZiBBZGVxdWEuc3RvcmFnZS5wdXJwb3NlTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbGxvd2VkUHVycG9zZUlkcy5pbmRleE9mKHB1cnBvc2VJZCkgPT09IC0xICYmIGZvcmJpZGRlblB1cnBvc2VJZHMuaW5kZXhPZihwdXJwb3NlSWQpID09PSAtMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yYmlkZGVuUHVycG9zZUlkcy5wdXNoKHB1cnBvc2VJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHZlbmRvcklkIG9mIEFkZXF1YS5zdG9yYWdlLnZlbmRvckxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWxsb3dlZFZlbmRvcklkcy5pbmRleE9mKHZlbmRvcklkKSA9PT0gLTEgJiYgZm9yYmlkZGVuVmVuZG9ySWRzLmluZGV4T2YodmVuZG9ySWQpID09PSAtMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yYmlkZGVuVmVuZG9ySWRzLnB1c2godmVuZG9ySWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFsbG93ZWRWZW5kb3JJZHMgPSBhbGxvd2VkVmVuZG9ySWRzLm1hcChpZCA9PiBwYXJzZUludChpZCkpO1xyXG4gICAgYWxsb3dlZFB1cnBvc2VJZHMgPSBhbGxvd2VkUHVycG9zZUlkcy5tYXAoaWQgPT4gcGFyc2VJbnQoaWQpKTtcclxuXHJcbiAgICAvLyBBZGVxdWEuQVBJLnRhYnMucXVlcnkoe1xyXG4gICAgLy8gICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgIC8vICAgICBsYXN0Rm9jdXNlZFdpbmRvdzogdHJ1ZVxyXG4gICAgLy8gfSwgKHRhYnMpID0+IHtcclxuICAgIC8vICAgICBjb25zdCB0YWIgPSB0YWJzWzBdIHx8IHt9O1xyXG4gICAgLy8gICAgIGNvbnN0IHNldHRpbmdzID0gQWRlcXVhLm1vZGVsLmNvbnNlbnQuZ2V0U2V0dGluZ3Moe3dlYnNpdGVfaWQ6IEFkZXF1YS5ob3N0bmFtZSh0YWIudXJsIHx8IFwibm91cmxcIil9KTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgZm9yKGNvbnN0IGluZGV4IGluIHNldHRpbmdzKXtcclxuICAgIC8vICAgICAgICAgc2V0dGluZ3NbaW5kZXhdLmlkLndlYnNpdGVfaWQgPSBBZGVxdWEuaG9zdG5hbWUodGFiLnVybCB8fCBcIm5vdXJsXCIpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vXHJcbiAgICAvLyAgICAgY29uc3QgY29uc2VudERhdGEgPSBuZXcgQ29uc2VudFN0cmluZygpO1xyXG4gICAgLy9cclxuICAgIC8vICAgICBjb25zZW50RGF0YS5zZXRHbG9iYWxWZW5kb3JMaXN0KEFkZXF1YS5zdG9yYWdlLmZ1bGxWZW5kb3JMaXN0KTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgY29uc2VudERhdGEuc2V0Q21wSWQoMSk7XHJcbiAgICAvLyAgICAgY29uc2VudERhdGEuc2V0Q21wVmVyc2lvbigxKTtcclxuICAgIC8vICAgICBjb25zZW50RGF0YS5zZXRDb25zZW50U2NyZWVuKDEpO1xyXG4gICAgLy8gICAgIGNvbnNlbnREYXRhLnNldENvbnNlbnRMYW5ndWFnZSgnZnInKTtcclxuICAgIC8vICAgICBjb25zZW50RGF0YS5zZXRQdXJwb3Nlc0FsbG93ZWQoYWxsb3dlZFB1cnBvc2VJZHMpO1xyXG4gICAgLy8gICAgIGNvbnNlbnREYXRhLnNldFZlbmRvcnNBbGxvd2VkKGFsbG93ZWRWZW5kb3JJZHMpO1xyXG4gICAgaWYodHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICBjYWxsYmFjayh7XHJcbiAgICAgICAgLy8gY29uc2VudFN0cmluZzogY29uc2VudERhdGEuZ2V0Q29uc2VudFN0cmluZygpLFxyXG4gICAgICAgIGFsbG93ZWRWZW5kb3JzOiBhbGxvd2VkVmVuZG9ySWRzLFxyXG4gICAgICAgIGFsbG93ZWRQdXJwb3NlczogYWxsb3dlZFB1cnBvc2VJZHMsXHJcbiAgICAgICAgLy8gc2V0dGluZ3M6IHNldHRpbmdzXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYWxsb3dlZFB1cnBvc2VJZHM7XHJcbiAgICAvLyB9KTtcclxufVxyXG47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=