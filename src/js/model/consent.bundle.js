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
  const index = Adequa.storage.consent.settings.findIndex(item => item.id.website_id === setting.id.website_id && item.id.purpose_id === setting.id.purpose_id && item.id.vendor_id === setting.id.vendor_id);
  if (index === -1) Adequa.storage.consent.settings.push(setting);else Adequa.storage.consent.settings[index] = setting;
  Adequa.setStorage({});
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
  let allowedPurposeIds = [];
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
  allowedPurposeIds = allowedPurposeIds.map(id => parseInt(id));
  Adequa.API.tabs.query({
    active: true,
    lastFocusedWindow: true
  }, tabs => {
    const tab = tabs[0] || {};
    const settings = Adequa.model.consent.getSettings({
      website_id: Adequa.hostname(tab.url || "nourl")
    });

    for (const index in settings) {
      settings[index].id.website_id = Adequa.hostname(tab.url || "nourl");
    }

    const consentData = new ConsentString();
    consentData.setGlobalVendorList(Adequa.storage.fullVendorList);
    consentData.setCmpId(1);
    consentData.setCmpVersion(1);
    consentData.setConsentScreen(1);
    consentData.setConsentLanguage('fr');
    consentData.setPurposesAllowed(allowedPurposeIds);
    consentData.setVendorsAllowed(allowedVendorIds);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jhc2UtNjQvYmFzZTY0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb25zZW50LXN0cmluZy9kaXN0L2NvbnNlbnQtc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb25zZW50LXN0cmluZy9kaXN0L2RlY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29uc2VudC1zdHJpbmcvZGlzdC9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbnNlbnQtc3RyaW5nL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbnNlbnQtc3RyaW5nL2Rpc3QvdXRpbHMvYml0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29uc2VudC1zdHJpbmcvZGlzdC91dGlscy9kZWZpbml0aW9ucy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVsL2NvbnNlbnQuanMiXSwibmFtZXMiOlsicm9vdCIsImZyZWVFeHBvcnRzIiwiZXhwb3J0cyIsImZyZWVNb2R1bGUiLCJtb2R1bGUiLCJmcmVlR2xvYmFsIiwiZ2xvYmFsIiwid2luZG93IiwiSW52YWxpZENoYXJhY3RlckVycm9yIiwibWVzc2FnZSIsInByb3RvdHlwZSIsIkVycm9yIiwibmFtZSIsImVycm9yIiwiVEFCTEUiLCJSRUdFWF9TUEFDRV9DSEFSQUNURVJTIiwiZGVjb2RlIiwiaW5wdXQiLCJTdHJpbmciLCJyZXBsYWNlIiwibGVuZ3RoIiwidGVzdCIsImJpdENvdW50ZXIiLCJiaXRTdG9yYWdlIiwiYnVmZmVyIiwib3V0cHV0IiwicG9zaXRpb24iLCJpbmRleE9mIiwiY2hhckF0IiwiZnJvbUNoYXJDb2RlIiwiZW5jb2RlIiwicGFkZGluZyIsImEiLCJiIiwiYyIsImQiLCJjaGFyQ29kZUF0IiwiYmFzZTY0IiwiZGVmaW5lIiwiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwib2JqIiwiY29uc3RydWN0b3IiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiQ29uc3RydWN0b3IiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIlR5cGVFcnJvciIsIl9yZXF1aXJlIiwicmVxdWlyZSIsImVuY29kZUNvbnNlbnRTdHJpbmciLCJfZ2V0TWF4VmVuZG9ySWQiLCJnZXRNYXhWZW5kb3JJZCIsImVuY29kZVZlbmRvcklkc1RvQml0cyIsImVuY29kZVB1cnBvc2VJZHNUb0JpdHMiLCJfcmVxdWlyZTIiLCJkZWNvZGVDb25zZW50U3RyaW5nIiwiX3JlcXVpcmUzIiwidmVuZG9yVmVyc2lvbk1hcCIsImNvbnNlbnRMYW5ndWFnZVJlZ2V4cCIsIkNvbnNlbnRTdHJpbmciLCJiYXNlU3RyaW5nIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiY3JlYXRlZCIsIkRhdGUiLCJsYXN0VXBkYXRlZCIsInZlcnNpb24iLCJ2ZW5kb3JMaXN0IiwidmVuZG9yTGlzdFZlcnNpb24iLCJjbXBJZCIsImNtcFZlcnNpb24iLCJjb25zZW50U2NyZWVuIiwiY29uc2VudExhbmd1YWdlIiwiYWxsb3dlZFB1cnBvc2VJZHMiLCJhbGxvd2VkVmVuZG9ySWRzIiwiYXNzaWduIiwidmFsdWUiLCJnZXRDb25zZW50U3RyaW5nIiwidXBkYXRlRGF0ZSIsImdldFZlcnNpb24iLCJ2ZW5kb3JzIiwiZ2V0UGFyc2VkVmVuZG9yQ29uc2VudHMiLCJnZXRQYXJzZWRQdXJwb3NlQ29uc2VudHMiLCJwdXJwb3NlcyIsImdldE1ldGFkYXRhU3RyaW5nIiwiZ2V0VmVuZG9yTGlzdFZlcnNpb24iLCJzZXRHbG9iYWxWZW5kb3JMaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwiZmVhdHVyZXMiLCJzbGljZSIsInNvcnQiLCJmaXJzdFZlbmRvciIsInNlY29uZFZlbmRvciIsImlkIiwic2V0Q21wSWQiLCJnZXRDbXBJZCIsInNldENtcFZlcnNpb24iLCJnZXRDbXBWZXJzaW9uIiwic2V0Q29uc2VudFNjcmVlbiIsInNjcmVlbklkIiwiZ2V0Q29uc2VudFNjcmVlbiIsInNldENvbnNlbnRMYW5ndWFnZSIsImxhbmd1YWdlIiwiZ2V0Q29uc2VudExhbmd1YWdlIiwic2V0UHVycG9zZXNBbGxvd2VkIiwicHVycG9zZUlkcyIsImdldFB1cnBvc2VzQWxsb3dlZCIsInNldFB1cnBvc2VBbGxvd2VkIiwicHVycG9zZUlkIiwicHVycG9zZUluZGV4IiwicHVzaCIsInNwbGljZSIsImlzUHVycG9zZUFsbG93ZWQiLCJzZXRWZW5kb3JzQWxsb3dlZCIsInZlbmRvcklkcyIsImdldFZlbmRvcnNBbGxvd2VkIiwic2V0VmVuZG9yQWxsb3dlZCIsInZlbmRvcklkIiwidmVuZG9ySW5kZXgiLCJpc1ZlbmRvckFsbG93ZWQiLCJkZWNvZGVNZXRhZGF0YVN0cmluZyIsImVuY29kZWRNZXRhZGF0YSIsImRlY29kZWRTdHJpbmciLCJtZXRhZGF0YSIsIm1ldGFkYXRhRmllbGRzIiwiZm9yRWFjaCIsImZpZWxkIiwiZGVjb2RlQml0c1RvSWRzIiwiZGVjb2RlRnJvbUJhc2U2NCIsImNvbnNlbnRTdHJpbmciLCJfZGVjb2RlRnJvbUJhc2UiLCJwdXJwb3NlSWRCaXRTdHJpbmciLCJtYXhWZW5kb3JJZCIsImlzUmFuZ2UiLCJkZWZhdWx0Q29uc2VudCIsInZlbmRvcklkQml0U3RyaW5nIiwidmVuZG9yUmFuZ2VMaXN0IiwiY29uc2VudFN0cmluZ0RhdGEiLCJpZE1hcCIsInJlZHVjZSIsImFjYyIsIl9yZWYiLCJzdGFydFZlbmRvcklkIiwiZW5kVmVuZG9ySWQiLCJsYXN0VmVuZG9ySWQiLCJfZXh0ZW5kcyIsInNvdXJjZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImVuY29kZVRvQmFzZTY0IiwicGFkUmlnaHQiLCJ2ZW5kb3JTdHJpbmciLCJNYXRoIiwibWF4IiwiU2V0IiwibWF4UHVycG9zZUlkIiwiX2kiLCJwdXJwb3NlU3RyaW5nIiwiY29udmVydFZlbmRvcnNUb1JhbmdlcyIsInJhbmdlIiwicmFuZ2VzIiwiaWRzSW5MaXN0IiwibWFwIiwidmVuZG9yIiwiaW5kZXgiLCJzaGlmdCIsInBvcCIsImNvbnNlbnREYXRhIiwiX2NvbnNlbnREYXRhJHZlbmRvckxpIiwiX3ZlbmRvckxpc3QkdmVuZG9ycyIsIl92ZW5kb3JMaXN0JHB1cnBvc2VzIiwibm9SYW5nZXNEYXRhIiwicmFuZ2VzRGF0YSIsIm51bUVudHJpZXMiLCJ2ZXJzaW9uTnVtQml0cyIsInJlcGVhdCIsImNvdW50Iiwic3RyaW5nIiwicGFkU3RyaW5nIiwicGFkTGVmdCIsImVuY29kZUludFRvQml0cyIsIm51bWJlciIsIm51bUJpdHMiLCJiaXRTdHJpbmciLCJpc05hTiIsInBhcnNlSW50IiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJlbmNvZGVCb29sVG9CaXRzIiwiZW5jb2RlRGF0ZVRvQml0cyIsImRhdGUiLCJnZXRUaW1lIiwiZW5jb2RlTGV0dGVyVG9CaXRzIiwibGV0dGVyIiwidG9VcHBlckNhc2UiLCJlbmNvZGVMYW5ndWFnZVRvQml0cyIsImRlY29kZUJpdHNUb0ludCIsInN0YXJ0Iiwic3Vic3RyIiwiZGVjb2RlQml0c1RvRGF0ZSIsImRlY29kZUJpdHNUb0Jvb2wiLCJkZWNvZGVCaXRzVG9MZXR0ZXIiLCJsZXR0ZXJDb2RlIiwidG9Mb3dlckNhc2UiLCJkZWNvZGVCaXRzVG9MYW5ndWFnZSIsImxhbmd1YWdlQml0U3RyaW5nIiwiZW5jb2RlRmllbGQiLCJ0eXBlIiwiZW5jb2RlciIsInZhbGlkYXRvciIsImJpdENvdW50IiwiaW5wdXRWYWx1ZSIsImZpZWxkVmFsdWUiLCJsaXN0VmFsdWUiLCJlbmNvZGVGaWVsZHMiLCJmaWVsZHMiLCJfcmVmMiIsImRlY29kZUZpZWxkIiwiX3JlZjMiLCJzdGFydFBvc2l0aW9uIiwiZGVjb2RlciIsImxpc3RDb3VudCIsIm5ld1Bvc2l0aW9uIiwiZGVjb2RlTGlzdCIsImxpc3RFbnRyeUNvdW50IiwiZGVjb2RlZEZpZWxkcyIsImRlY29kZUZpZWxkcyIsImRlY29kZWRPYmplY3QiLCJfcmVmNCIsIl9yZWY0JHN0YXJ0UG9zaXRpb24iLCJfZGVjb2RlRmllbGQiLCJlbmNvZGVEYXRhVG9CaXRzIiwiZGF0YSIsImRlZmluaXRpb25NYXAiLCJiaW5hcnlWYWx1ZSIsInBhZGRlZEJpbmFyeVZhbHVlIiwiYnl0ZXMiLCJkZWNvZGVDb25zZW50U3RyaW5nQml0VmFsdWUiLCJfZGVjb2RlRmllbGRzIiwidW5zYWZlIiwiaW5wdXRCaXRzIiwic3BsaXQiLCJiaXQiLCJnIiwiRnVuY3Rpb24iLCJlIiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJjaGlsZHJlbiIsImdldCIsImwiLCJBZGVxdWEiLCJtb2RlbCIsImNvbnNlbnQiLCJjbXAiLCJ2aWV3IiwiZ2V0U2V0dGluZ3MiLCJmaWx0ZXJzIiwic2V0dGluZ3MiLCJzdG9yYWdlIiwid2Vic2l0ZV9pZCIsImZpbHRlciIsInNldHRpbmciLCJ2ZW5kb3JfaWQiLCJwdXJwb3NlX2lkIiwiZ2V0QWxsU2V0dGluZ3MiLCJzZXR0aW5nc01hcHBlZCIsInNldFNldHRpbmciLCJmaW5kSW5kZXgiLCJpdGVtIiwic2V0U3RvcmFnZSIsInNldENvbnNlbnRTdHJpbmciLCJ1cmwiLCJmdWxsVmVuZG9yTGlzdCIsImFsbG93ZWRQdXJwb3NlcyIsImFsbG93ZWRWZW5kb3JzIiwicHVycG9zZSIsInB1cnBvc2VMaXN0IiwiaG9zdG5hbWUiLCJnZXRWZW5kb3JDb25zZW50cyIsIndlYnNpdGVJZCIsImNhbGxiYWNrIiwiZ2V0Q29uc2VudERhdGEiLCJkZWZhdWx0U2V0dGluZ3MiLCJ3ZWJzaXRlU2V0dGluZ3MiLCJmb3JiaWRkZW5QdXJwb3NlSWRzIiwiZm9yYmlkZGVuVmVuZG9ySWRzIiwiQVBJIiwidGFicyIsInF1ZXJ5IiwiYWN0aXZlIiwibGFzdEZvY3VzZWRXaW5kb3ciLCJ0YWIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBOztBQUFFLFdBQVNBLElBQVQsRUFBZTtBQUVoQjtBQUNBLE1BQUlDLFdBQVcsR0FBRyxTQUE4QkMsT0FBaEQsQ0FIZ0IsQ0FLaEI7O0FBQ0EsTUFBSUMsVUFBVSxHQUFHLFNBQTZCQyxNQUE3QixJQUNoQkEsTUFBTSxDQUFDRixPQUFQLElBQWtCRCxXQURGLElBQ2lCRyxNQURsQyxDQU5nQixDQVNoQjtBQUNBOztBQUNBLE1BQUlDLFVBQVUsR0FBRyxPQUFPQyxNQUFQLElBQWlCLFFBQWpCLElBQTZCQSxNQUE5Qzs7QUFDQSxN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LENBQUMzRixnQkFBWixFQURWO0FBRUx3TSxvQkFBYyxFQUFFM00sZ0JBRlg7QUFHTDBNLHFCQUFlLEVBQUUzTSxpQkFIWjtBQUlMTixnQkFBVSxFQUFFMEwsTUFBTSxDQUFDUSxPQUFQLENBQWVsTSxVQUp0QjtBQUtMb04saUJBQVcsRUFBRTFCLE1BQU0sQ0FBQ1EsT0FBUCxDQUFla0IsV0FMdkI7QUFNTG5CLGNBQVEsRUFBRUE7QUFOTCxLQUFELENBQVI7QUFRSCxHQTlCRDtBQStCSCxDQTNHRCxDIiwiZmlsZSI6ImNvbnNlbnQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvbW9kZWwvY29uc2VudC5qc1wiKTtcbiIsIi8qISBodHRwOi8vbXRocy5iZS9iYXNlNjQgdjAuMS4wIGJ5IEBtYXRoaWFzIHwgTUlUIGxpY2Vuc2UgKi9cbjsoZnVuY3Rpb24ocm9vdCkge1xuXG5cdC8vIERldGVjdCBmcmVlIHZhcmlhYmxlcyBgZXhwb3J0c2AuXG5cdHZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHM7XG5cblx0Ly8gRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuXG5cdHZhciBmcmVlTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiZcblx0XHRtb2R1bGUuZXhwb3J0cyA9PSBmcmVlRXhwb3J0cyAmJiBtb2R1bGU7XG5cblx0Ly8gRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAsIGZyb20gTm9kZS5qcyBvciBCcm93c2VyaWZpZWQgY29kZSwgYW5kIHVzZVxuXHQvLyBpdCBhcyBgcm9vdGAuXG5cdHZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWw7XG5cdGlmIChmcmVlR2xvYmFsLmdsb2JhbCA9PT0gZnJlZUdsb2JhbCB8fCBmcmVlR2xvYmFsLndpbmRvdyA9PT0gZnJlZUdsb2JhbCkge1xuXHRcdHJvb3QgPSBmcmVlR2xvYmFsO1xuXHR9XG5cblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblx0dmFyIEludmFsaWRDaGFyYWN0ZXJFcnJvciA9IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcblx0XHR0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXHR9O1xuXHRJbnZhbGlkQ2hhcmFjdGVyRXJyb3IucHJvdG90eXBlID0gbmV3IEVycm9yO1xuXHRJbnZhbGlkQ2hhcmFjdGVyRXJyb3IucHJvdG90eXBlLm5hbWUgPSAnSW52YWxpZENoYXJhY3RlckVycm9yJztcblxuXHR2YXIgZXJyb3IgPSBmdW5jdGlvbihtZXNzYWdlKSB7XG5cdFx0Ly8gTm90ZTogdGhlIGVycm9yIG1lc3NhZ2VzIHVzZWQgdGhyb3VnaG91dCB0aGlzIGZpbGUgbWF0Y2ggdGhvc2UgdXNlZCBieVxuXHRcdC8vIHRoZSBuYXRpdmUgYGF0b2JgL2BidG9hYCBpbXBsZW1lbnRhdGlvbiBpbiBDaHJvbWl1bS5cblx0XHR0aHJvdyBuZXcgSW52YWxpZENoYXJhY3RlckVycm9yKG1lc3NhZ2UpO1xuXHR9O1xuXG5cdHZhciBUQUJMRSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJztcblx0Ly8gaHR0cDovL3doYXR3Zy5vcmcvaHRtbC9jb21tb24tbWljcm9zeW50YXhlcy5odG1sI3NwYWNlLWNoYXJhY3RlclxuXHR2YXIgUkVHRVhfU1BBQ0VfQ0hBUkFDVEVSUyA9IC9bXFx0XFxuXFxmXFxyIF0vZztcblxuXHQvLyBgZGVjb2RlYCBpcyBkZXNpZ25lZCB0byBiZSBmdWxseSBjb21wYXRpYmxlIHdpdGggYGF0b2JgIGFzIGRlc2NyaWJlZCBpbiB0aGVcblx0Ly8gSFRNTCBTdGFuZGFyZC4gaHR0cDovL3doYXR3Zy5vcmcvaHRtbC93ZWJhcHBhcGlzLmh0bWwjZG9tLXdpbmRvd2Jhc2U2NC1hdG9iXG5cdC8vIFRoZSBvcHRpbWl6ZWQgYmFzZTY0LWRlY29kaW5nIGFsZ29yaXRobSB1c2VkIGlzIGJhc2VkIG9uIEBhdGvigJlzIGV4Y2VsbGVudFxuXHQvLyBpbXBsZW1lbnRhdGlvbi4gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vYXRrLzEwMjAzOTZcblx0dmFyIGRlY29kZSA9IGZ1bmN0aW9uKGlucHV0KSB7XG5cdFx0aW5wdXQgPSBTdHJpbmcoaW5wdXQpXG5cdFx0XHQucmVwbGFjZShSRUdFWF9TUEFDRV9DSEFSQUNURVJTLCAnJyk7XG5cdFx0dmFyIGxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcblx0XHRpZiAobGVuZ3RoICUgNCA9PSAwKSB7XG5cdFx0XHRpbnB1dCA9IGlucHV0LnJlcGxhY2UoLz09PyQvLCAnJyk7XG5cdFx0XHRsZW5ndGggPSBpbnB1dC5sZW5ndGg7XG5cdFx0fVxuXHRcdGlmIChcblx0XHRcdGxlbmd0aCAlIDQgPT0gMSB8fFxuXHRcdFx0Ly8gaHR0cDovL3doYXR3Zy5vcmcvQyNhbHBoYW51bWVyaWMtYXNjaWktY2hhcmFjdGVyc1xuXHRcdFx0L1teK2EtekEtWjAtOS9dLy50ZXN0KGlucHV0KVxuXHRcdCkge1xuXHRcdFx0ZXJyb3IoXG5cdFx0XHRcdCdJbnZhbGlkIGNoYXJhY3RlcjogdGhlIHN0cmluZyB0byBiZSBkZWNvZGVkIGlzIG5vdCBjb3JyZWN0bHkgZW5jb2RlZC4nXG5cdFx0XHQpO1xuXHRcdH1cblx0XHR2YXIgYml0Q291bnRlciA9IDA7XG5cdFx0dmFyIGJpdFN0b3JhZ2U7XG5cdFx0dmFyIGJ1ZmZlcjtcblx0XHR2YXIgb3V0cHV0ID0gJyc7XG5cdFx0dmFyIHBvc2l0aW9uID0gLTE7XG5cdFx0d2hpbGUgKCsrcG9zaXRpb24gPCBsZW5ndGgpIHtcblx0XHRcdGJ1ZmZlciA9IFRBQkxFLmluZGV4T2YoaW5wdXQuY2hhckF0KHBvc2l0aW9uKSk7XG5cdFx0XHRiaXRTdG9yYWdlID0gYml0Q291bnRlciAlIDQgPyBiaXRTdG9yYWdlICogNjQgKyBidWZmZXIgOiBidWZmZXI7XG5cdFx0XHQvLyBVbmxlc3MgdGhpcyBpcyB0aGUgZmlyc3Qgb2YgYSBncm91cCBvZiA0IGNoYXJhY3RlcnPigKZcblx0XHRcdGlmIChiaXRDb3VudGVyKysgJSA0KSB7XG5cdFx0XHRcdC8vIOKApmNvbnZlcnQgdGhlIGZpcnN0IDggYml0cyB0byBhIHNpbmdsZSBBU0NJSSBjaGFyYWN0ZXIuXG5cdFx0XHRcdG91dHB1dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFxuXHRcdFx0XHRcdDB4RkYgJiBiaXRTdG9yYWdlID4+ICgtMiAqIGJpdENvdW50ZXIgJiA2KVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gb3V0cHV0O1xuXHR9O1xuXG5cdC8vIGBlbmNvZGVgIGlzIGRlc2lnbmVkIHRvIGJlIGZ1bGx5IGNvbXBhdGlibGUgd2l0aCBgYnRvYWAgYXMgZGVzY3JpYmVkIGluIHRoZVxuXHQvLyBIVE1MIFN0YW5kYXJkOiBodHRwOi8vd2hhdHdnLm9yZy9odG1sL3dlYmFwcGFwaXMuaHRtbCNkb20td2luZG93YmFzZTY0LWJ0b2Fcblx0dmFyIGVuY29kZSA9IGZ1bmN0aW9uKGlucHV0KSB7XG5cdFx0aW5wdXQgPSBTdHJpbmcoaW5wdXQpO1xuXHRcdGlmICgvW15cXDAtXFx4RkZdLy50ZXN0KGlucHV0KSkge1xuXHRcdFx0Ly8gTm90ZTogbm8gbmVlZCB0byBzcGVjaWFsLWNhc2UgYXN0cmFsIHN5bWJvbHMgaGVyZSwgYXMgc3Vycm9nYXRlcyBhcmVcblx0XHRcdC8vIG1hdGNoZWQsIGFuZCB0aGUgaW5wdXQgaXMgc3VwcG9zZWQgdG8gb25seSBjb250YWluIEFTQ0lJIGFueXdheS5cblx0XHRcdGVycm9yKFxuXHRcdFx0XHQnVGhlIHN0cmluZyB0byBiZSBlbmNvZGVkIGNvbnRhaW5zIGNoYXJhY3RlcnMgb3V0c2lkZSBvZiB0aGUgJyArXG5cdFx0XHRcdCdMYXRpbjEgcmFuZ2UuJ1xuXHRcdFx0KTtcblx0XHR9XG5cdFx0dmFyIHBhZGRpbmcgPSBpbnB1dC5sZW5ndGggJSAzO1xuXHRcdHZhciBvdXRwdXQgPSAnJztcblx0XHR2YXIgcG9zaXRpb24gPSAtMTtcblx0XHR2YXIgYTtcblx0XHR2YXIgYjtcblx0XHR2YXIgYztcblx0XHR2YXIgZDtcblx0XHR2YXIgYnVmZmVyO1xuXHRcdC8vIE1ha2Ugc3VyZSBhbnkgcGFkZGluZyBpcyBoYW5kbGVkIG91dHNpZGUgb2YgdGhlIGxvb3AuXG5cdFx0dmFyIGxlbmd0aCA9IGlucHV0Lmxlbmd0aCAtIHBhZGRpbmc7XG5cblx0XHR3aGlsZSAoKytwb3NpdGlvbiA8IGxlbmd0aCkge1xuXHRcdFx0Ly8gUmVhZCB0aHJlZSBieXRlcywgaS5lLiAyNCBiaXRzLlxuXHRcdFx0YSA9IGlucHV0LmNoYXJDb2RlQXQocG9zaXRpb24pIDw8IDE2O1xuXHRcdFx0YiA9IGlucHV0LmNoYXJDb2RlQXQoKytwb3NpdGlvbikgPDwgODtcblx0XHRcdGMgPSBpbnB1dC5jaGFyQ29kZUF0KCsrcG9zaXRpb24pO1xuXHRcdFx0YnVmZmVyID0gYSArIGIgKyBjO1xuXHRcdFx0Ly8gVHVybiB0aGUgMjQgYml0cyBpbnRvIGZvdXIgY2h1bmtzIG9mIDYgYml0cyBlYWNoLCBhbmQgYXBwZW5kIHRoZVxuXHRcdFx0Ly8gbWF0Y2hpbmcgY2hhcmFjdGVyIGZvciBlYWNoIG9mIHRoZW0gdG8gdGhlIG91dHB1dC5cblx0XHRcdG91dHB1dCArPSAoXG5cdFx0XHRcdFRBQkxFLmNoYXJBdChidWZmZXIgPj4gMTggJiAweDNGKSArXG5cdFx0XHRcdFRBQkxFLmNoYXJBdChidWZmZXIgPj4gMTIgJiAweDNGKSArXG5cdFx0XHRcdFRBQkxFLmNoYXJBdChidWZmZXIgPj4gNiAmIDB4M0YpICtcblx0XHRcdFx0VEFCTEUuY2hhckF0KGJ1ZmZlciAmIDB4M0YpXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmIChwYWRkaW5nID09IDIpIHtcblx0XHRcdGEgPSBpbnB1dC5jaGFyQ29kZUF0KHBvc2l0aW9uKSA8PCA4O1xuXHRcdFx0YiA9IGlucHV0LmNoYXJDb2RlQXQoKytwb3NpdGlvbik7XG5cdFx0XHRidWZmZXIgPSBhICsgYjtcblx0XHRcdG91dHB1dCArPSAoXG5cdFx0XHRcdFRBQkxFLmNoYXJBdChidWZmZXIgPj4gMTApICtcblx0XHRcdFx0VEFCTEUuY2hhckF0KChidWZmZXIgPj4gNCkgJiAweDNGKSArXG5cdFx0XHRcdFRBQkxFLmNoYXJBdCgoYnVmZmVyIDw8IDIpICYgMHgzRikgK1xuXHRcdFx0XHQnPSdcblx0XHRcdCk7XG5cdFx0fSBlbHNlIGlmIChwYWRkaW5nID09IDEpIHtcblx0XHRcdGJ1ZmZlciA9IGlucHV0LmNoYXJDb2RlQXQocG9zaXRpb24pO1xuXHRcdFx0b3V0cHV0ICs9IChcblx0XHRcdFx0VEFCTEUuY2hhckF0KGJ1ZmZlciA+PiAyKSArXG5cdFx0XHRcdFRBQkxFLmNoYXJBdCgoYnVmZmVyIDw8IDQpICYgMHgzRikgK1xuXHRcdFx0XHQnPT0nXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBvdXRwdXQ7XG5cdH07XG5cblx0dmFyIGJhc2U2NCA9IHtcblx0XHQnZW5jb2RlJzogZW5jb2RlLFxuXHRcdCdkZWNvZGUnOiBkZWNvZGUsXG5cdFx0J3ZlcnNpb24nOiAnMC4xLjAnXG5cdH07XG5cblx0Ly8gU29tZSBBTUQgYnVpbGQgb3B0aW1pemVycywgbGlrZSByLmpzLCBjaGVjayBmb3Igc3BlY2lmaWMgY29uZGl0aW9uIHBhdHRlcm5zXG5cdC8vIGxpa2UgdGhlIGZvbGxvd2luZzpcblx0aWYgKFxuXHRcdHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdHR5cGVvZiBkZWZpbmUuYW1kID09ICdvYmplY3QnICYmXG5cdFx0ZGVmaW5lLmFtZFxuXHQpIHtcblx0XHRkZWZpbmUoZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gYmFzZTY0O1xuXHRcdH0pO1xuXHR9XHRlbHNlIGlmIChmcmVlRXhwb3J0cyAmJiAhZnJlZUV4cG9ydHMubm9kZVR5cGUpIHtcblx0XHRpZiAoZnJlZU1vZHVsZSkgeyAvLyBpbiBOb2RlLmpzIG9yIFJpbmdvSlMgdjAuOC4wK1xuXHRcdFx0ZnJlZU1vZHVsZS5leHBvcnRzID0gYmFzZTY0O1xuXHRcdH0gZWxzZSB7IC8vIGluIE5hcndoYWwgb3IgUmluZ29KUyB2MC43LjAtXG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gYmFzZTY0KSB7XG5cdFx0XHRcdGJhc2U2NC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIChmcmVlRXhwb3J0c1trZXldID0gYmFzZTY0W2tleV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIHsgLy8gaW4gUmhpbm8gb3IgYSB3ZWIgYnJvd3NlclxuXHRcdHJvb3QuYmFzZTY0ID0gYmFzZTY0O1xuXHR9XG5cbn0odGhpcykpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJy4vZW5jb2RlJyksXG4gICAgZW5jb2RlQ29uc2VudFN0cmluZyA9IF9yZXF1aXJlLmVuY29kZUNvbnNlbnRTdHJpbmcsXG4gICAgX2dldE1heFZlbmRvcklkID0gX3JlcXVpcmUuZ2V0TWF4VmVuZG9ySWQsXG4gICAgZW5jb2RlVmVuZG9ySWRzVG9CaXRzID0gX3JlcXVpcmUuZW5jb2RlVmVuZG9ySWRzVG9CaXRzLFxuICAgIGVuY29kZVB1cnBvc2VJZHNUb0JpdHMgPSBfcmVxdWlyZS5lbmNvZGVQdXJwb3NlSWRzVG9CaXRzO1xuXG52YXIgX3JlcXVpcmUyID0gcmVxdWlyZSgnLi9kZWNvZGUnKSxcbiAgICBkZWNvZGVDb25zZW50U3RyaW5nID0gX3JlcXVpcmUyLmRlY29kZUNvbnNlbnRTdHJpbmc7XG5cbnZhciBfcmVxdWlyZTMgPSByZXF1aXJlKCcuL3V0aWxzL2RlZmluaXRpb25zJyksXG4gICAgdmVuZG9yVmVyc2lvbk1hcCA9IF9yZXF1aXJlMy52ZW5kb3JWZXJzaW9uTWFwO1xuLyoqXG4gKiBSZWd1bGFyIGV4cHJlc3Npb24gZm9yIHZhbGlkYXRpbmdcbiAqL1xuXG5cbnZhciBjb25zZW50TGFuZ3VhZ2VSZWdleHAgPSAvXlthLXpdezJ9JC87XG5cbnZhciBDb25zZW50U3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZSBhIG5ldyBDb25zZW50U3RyaW5nIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYmFzZVN0cmluZyBBbiBleGlzdGluZyBjb25zZW50IHN0cmluZyB0byBwYXJzZSBhbmQgdXNlIGZvciBvdXIgaW5pdGlhbCB2YWx1ZXNcbiAgICovXG4gIGZ1bmN0aW9uIENvbnNlbnRTdHJpbmcoKSB7XG4gICAgdmFyIGJhc2VTdHJpbmcgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IG51bGw7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29uc2VudFN0cmluZyk7XG5cbiAgICB0aGlzLmNyZWF0ZWQgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMubGFzdFVwZGF0ZWQgPSBuZXcgRGF0ZSgpO1xuXG4gICAgLyoqXG4gICAgICogVmVyc2lvbiBudW1iZXIgb2YgY29uc2VudCBzdHJpbmcgc3BlY2lmaWNhdGlvblxuICAgICAqXG4gICAgICogQHR5cGUge2ludGVnZXJ9XG4gICAgICovXG4gICAgdGhpcy52ZXJzaW9uID0gMTtcblxuICAgIC8qKlxuICAgICAqIFZlbmRvciBsaXN0IHdpdGggZm9ybWF0IGZyb20gaHR0cHM6Ly9naXRodWIuY29tL0ludGVyYWN0aXZlQWR2ZXJ0aXNpbmdCdXJlYXUvR0RQUi1UcmFuc3BhcmVuY3ktYW5kLUNvbnNlbnQtRnJhbWV3b3JrL2Jsb2IvbWFzdGVyL0RyYWZ0X2Zvcl9QdWJsaWNfQ29tbWVudF9UcmFuc3BhcmVuY3klMjAlMjYlMjBDb25zZW50JTIwRnJhbWV3b3JrJTIwLSUyMGNvb2tpZSUyMGFuZCUyMHZlbmRvciUyMGxpc3QlMjBmb3JtYXQlMjBzcGVjaWZpY2F0aW9uJTIwdjEuMGEucGRmXG4gICAgICpcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMudmVuZG9yTGlzdCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBWZXJzaW9uIG9mIHRoZSB2ZW5kb3IgbGlzdCB1c2VkIGZvciB0aGUgcHVycG9zZXMgYW5kIHZlbmRvcnNcbiAgICAgKlxuICAgICAqIEB0eXBlIHtpbnRlZ2VyfVxuICAgICAqL1xuICAgIHRoaXMudmVuZG9yTGlzdFZlcnNpb24gPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHVuaXF1ZSBJRCBvZiB0aGUgQ01QIHRoYXQgbGFzdCBtb2RpZmllZCB0aGUgY29uc2VudCBzdHJpbmdcbiAgICAgKlxuICAgICAqIEB0eXBlIHtpbnRlZ2VyfVxuICAgICAqL1xuICAgIHRoaXMuY21wSWQgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVmVyc2lvbiBvZiB0aGUgY29kZSB1c2VkIGJ5IHRoZSBDTVAgd2hlbiBjb2xsZWN0aW5nIGNvbnNlbnRcbiAgICAgKlxuICAgICAqIEB0eXBlIHtpbnRlZ2VyfVxuICAgICAqL1xuICAgIHRoaXMuY21wVmVyc2lvbiA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBJRCBvZiB0aGUgc2NyZWVuIHVzZWQgYnkgQ01QIHdoZW4gY29sbGVjdGluZyBjb25zZW50XG4gICAgICpcbiAgICAgKiBAdHlwZSB7aW50ZWdlcn1cbiAgICAgKi9cbiAgICB0aGlzLmNvbnNlbnRTY3JlZW4gPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogVHdvLWxldHRlciBJU082MzktMSBjb2RlIChlbiwgZnIsIGRlLCBldGMuKSBvZiB0aGUgbGFuZ3VhZ2UgdGhhdCB0aGUgQ01QIGFza2VkIGNvbnNlbnQgaW5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5jb25zZW50TGFuZ3VhZ2UgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogTGlzdCBvZiBwdXJwb3NlIElEcyB0aGF0IHRoZSB1c2VyIGhhcyBnaXZlbiBjb25zZW50IHRvXG4gICAgICpcbiAgICAgKiBAdHlwZSB7aW50ZWdlcltdfVxuICAgICAqL1xuICAgIHRoaXMuYWxsb3dlZFB1cnBvc2VJZHMgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIExpc3Qgb2YgdmVuZG9yIElEcyB0aGF0IHRoZSB1c2VyIGhhcyBnaXZlbiBjb25zZW50IHRvXG4gICAgICpcbiAgICAgKiBAdHlwZSB7aW50ZWdlcltdfVxuICAgICAqL1xuICAgIHRoaXMuYWxsb3dlZFZlbmRvcklkcyA9IFtdO1xuXG4gICAgLy8gRGVjb2RlIHRoZSBiYXNlIHN0cmluZ1xuICAgIGlmIChiYXNlU3RyaW5nKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRlY29kZUNvbnNlbnRTdHJpbmcoYmFzZVN0cmluZykpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHdlYi1zYWZlLCBiYXNlNjQtZW5jb2RlZCBjb25zZW50IHN0cmluZ1xuICAgKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IFdlYi1zYWZlLCBiYXNlNjQtZW5jb2RlZCBjb25zZW50IHN0cmluZ1xuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhDb25zZW50U3RyaW5nLCBbe1xuICAgIGtleTogJ2dldENvbnNlbnRTdHJpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDb25zZW50U3RyaW5nKCkge1xuICAgICAgdmFyIHVwZGF0ZURhdGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRydWU7XG5cbiAgICAgIGlmICghdGhpcy52ZW5kb3JMaXN0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ29uc2VudFN0cmluZyAtIEEgdmVuZG9yIGxpc3QgaXMgcmVxdWlyZWQgdG8gZW5jb2RlIGEgY29uc2VudCBzdHJpbmcnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHVwZGF0ZURhdGUgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5sYXN0VXBkYXRlZCA9IG5ldyBEYXRlKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbmNvZGVDb25zZW50U3RyaW5nKHtcbiAgICAgICAgdmVyc2lvbjogdGhpcy5nZXRWZXJzaW9uKCksXG4gICAgICAgIHZlbmRvckxpc3Q6IHRoaXMudmVuZG9yTGlzdCxcbiAgICAgICAgYWxsb3dlZFB1cnBvc2VJZHM6IHRoaXMuYWxsb3dlZFB1cnBvc2VJZHMsXG4gICAgICAgIGFsbG93ZWRWZW5kb3JJZHM6IHRoaXMuYWxsb3dlZFZlbmRvcklkcyxcbiAgICAgICAgY3JlYXRlZDogdGhpcy5jcmVhdGVkLFxuICAgICAgICBsYXN0VXBkYXRlZDogdGhpcy5sYXN0VXBkYXRlZCxcbiAgICAgICAgY21wSWQ6IHRoaXMuY21wSWQsXG4gICAgICAgIGNtcFZlcnNpb246IHRoaXMuY21wVmVyc2lvbixcbiAgICAgICAgY29uc2VudFNjcmVlbjogdGhpcy5jb25zZW50U2NyZWVuLFxuICAgICAgICBjb25zZW50TGFuZ3VhZ2U6IHRoaXMuY29uc2VudExhbmd1YWdlLFxuICAgICAgICB2ZW5kb3JMaXN0VmVyc2lvbjogdGhpcy52ZW5kb3JMaXN0VmVyc2lvblxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBtYXggdmVuZG9ySWRcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gbWF4VmVuZG9ySWQgZnJvbSB0aGUgdmVuZG9yTGlzdCBwcm92aWRlZFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRNYXhWZW5kb3JJZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE1heFZlbmRvcklkKCkge1xuICAgICAgcmV0dXJuIF9nZXRNYXhWZW5kb3JJZCh0aGlzLnZlbmRvckxpc3QudmVuZG9ycyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZ2V0IHRoZSBjb25zZW50cyBpbiBhIGJpdCBzdHJpbmcuICBUaGlzIGlzIHRvIGZ1bGZpbGwgdGhlIGluLWFwcCByZXF1aXJlbWVudFxuICAgICAqXG4gICAgICogQHJldHVybiB7c3RyaW5nfSBhIGJpdCBzdHJpbmcgb2YgYWxsIG9mIHRoZSB2ZW5kb3IgY29uc2VudCBkYXRhXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2dldFBhcnNlZFZlbmRvckNvbnNlbnRzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UGFyc2VkVmVuZG9yQ29uc2VudHMoKSB7XG4gICAgICByZXR1cm4gZW5jb2RlVmVuZG9ySWRzVG9CaXRzKF9nZXRNYXhWZW5kb3JJZCh0aGlzLnZlbmRvckxpc3QudmVuZG9ycyksIHRoaXMuYWxsb3dlZFZlbmRvcklkcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZ2V0IHRoZSBjb25zZW50cyBpbiBhIGJpdCBzdHJpbmcuICBUaGlzIGlzIHRvIGZ1bGZpbGwgdGhlIGluLWFwcCByZXF1aXJlbWVudFxuICAgICAqXG4gICAgICogQHJldHVybiB7c3RyaW5nfSBhIGJpdCBzdHJpbmcgb2YgYWxsIG9mIHRoZSB2ZW5kb3IgY29uc2VudCBkYXRhXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2dldFBhcnNlZFB1cnBvc2VDb25zZW50cycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBhcnNlZFB1cnBvc2VDb25zZW50cygpIHtcbiAgICAgIHJldHVybiBlbmNvZGVQdXJwb3NlSWRzVG9CaXRzKHRoaXMudmVuZG9yTGlzdC5wdXJwb3NlcywgdGhpcy5hbGxvd2VkUHVycG9zZUlkcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB3ZWItc2FmZSwgYmFzZTY0LWVuY29kZWQgbWV0YWRhdGEgc3RyaW5nXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFdlYi1zYWZlLCBiYXNlNjQtZW5jb2RlZCBtZXRhZGF0YSBzdHJpbmdcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0TWV0YWRhdGFTdHJpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRNZXRhZGF0YVN0cmluZygpIHtcbiAgICAgIHJldHVybiBlbmNvZGVDb25zZW50U3RyaW5nKHtcbiAgICAgICAgdmVyc2lvbjogdGhpcy5nZXRWZXJzaW9uKCksXG4gICAgICAgIGNyZWF0ZWQ6IHRoaXMuY3JlYXRlZCxcbiAgICAgICAgbGFzdFVwZGF0ZWQ6IHRoaXMubGFzdFVwZGF0ZWQsXG4gICAgICAgIGNtcElkOiB0aGlzLmNtcElkLFxuICAgICAgICBjbXBWZXJzaW9uOiB0aGlzLmNtcFZlcnNpb24sXG4gICAgICAgIGNvbnNlbnRTY3JlZW46IHRoaXMuY29uc2VudFNjcmVlbixcbiAgICAgICAgdmVuZG9yTGlzdFZlcnNpb246IHRoaXMudmVuZG9yTGlzdFZlcnNpb25cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlY29kZSB0aGUgd2ViLXNhZmUsIGJhc2U2NC1lbmNvZGVkIG1ldGFkYXRhIHN0cmluZ1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbmNvZGVkTWV0YWRhdGEgV2ViLXNhZmUsIGJhc2U2NC1lbmNvZGVkIG1ldGFkYXRhIHN0cmluZ1xuICAgICAqIEByZXR1cm4ge29iamVjdH0gZGVjb2RlZCBtZXRhZGF0YVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRWZXJzaW9uJyxcblxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB2ZXJzaW9uIG51bWJlciB0aGF0IHRoaXMgY29uc2VudCBzdHJpbmcgc3BlY2lmaWNhdGlvbiBhZGhlcmVzIHRvXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtpbnRlZ2VyfSBWZXJzaW9uIG51bWJlciBvZiBjb25zZW50IHN0cmluZyBzcGVjaWZpY2F0aW9uXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZlcnNpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy52ZXJzaW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdmVyc2lvbiBvZiB0aGUgdmVuZG9yIGxpc3RcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2ludGVnZXJ9IFZlbmRvciBsaXN0IHZlcnNpb25cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0VmVuZG9yTGlzdFZlcnNpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWZW5kb3JMaXN0VmVyc2lvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnZlbmRvckxpc3RWZXJzaW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgdmVuZG9ycyBsaXN0IHRvIHVzZSB3aGVuIGdlbmVyYXRpbmcgdGhlIGNvbnNlbnQgc3RyaW5nXG4gICAgICpcbiAgICAgKiBUaGUgZXhwZWN0ZWQgZm9ybWF0IGlzIHRoZSBvbmUgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vSW50ZXJhY3RpdmVBZHZlcnRpc2luZ0J1cmVhdS9HRFBSLVRyYW5zcGFyZW5jeS1hbmQtQ29uc2VudC1GcmFtZXdvcmsvYmxvYi9tYXN0ZXIvRHJhZnRfZm9yX1B1YmxpY19Db21tZW50X1RyYW5zcGFyZW5jeSUyMCUyNiUyMENvbnNlbnQlMjBGcmFtZXdvcmslMjAtJTIwY29va2llJTIwYW5kJTIwdmVuZG9yJTIwbGlzdCUyMGZvcm1hdCUyMHNwZWNpZmljYXRpb24lMjB2MS4wYS5wZGZcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB2ZW5kb3JMaXN0IFZlbmRvciBsaXN0IHdpdGggZm9ybWF0IGZyb20gaHR0cHM6Ly9naXRodWIuY29tL0ludGVyYWN0aXZlQWR2ZXJ0aXNpbmdCdXJlYXUvR0RQUi1UcmFuc3BhcmVuY3ktYW5kLUNvbnNlbnQtRnJhbWV3b3JrL2Jsb2IvbWFzdGVyL0RyYWZ0X2Zvcl9QdWJsaWNfQ29tbWVudF9UcmFuc3BhcmVuY3klMjAlMjYlMjBDb25zZW50JTIwRnJhbWV3b3JrJTIwLSUyMGNvb2tpZSUyMGFuZCUyMHZlbmRvciUyMGxpc3QlMjBmb3JtYXQlMjBzcGVjaWZpY2F0aW9uJTIwdjEuMGEucGRmXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3NldEdsb2JhbFZlbmRvckxpc3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRHbG9iYWxWZW5kb3JMaXN0KHZlbmRvckxpc3QpIHtcbiAgICAgIGlmICgodHlwZW9mIHZlbmRvckxpc3QgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHZlbmRvckxpc3QpKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb25zZW50U3RyaW5nIC0gWW91IG11c3QgcHJvdmlkZSBhbiBvYmplY3Qgd2hlbiBzZXR0aW5nIHRoZSBnbG9iYWwgdmVuZG9yIGxpc3QnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF2ZW5kb3JMaXN0LnZlbmRvckxpc3RWZXJzaW9uIHx8ICFBcnJheS5pc0FycmF5KHZlbmRvckxpc3QucHVycG9zZXMpIHx8ICFBcnJheS5pc0FycmF5KHZlbmRvckxpc3QudmVuZG9ycykpIHtcbiAgICAgICAgLy8gVGhlIHByb3ZpZGVkIHZlbmRvciBsaXN0IGRvZXMgbm90IGxvb2sgdmFsaWRcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb25zZW50U3RyaW5nIC0gVGhlIHByb3ZpZGVkIHZlbmRvciBsaXN0IGRvZXMgbm90IHJlc3BlY3QgdGhlIHNjaGVtYSBmcm9tIHRoZSBJQUIgRVXigJlzIEdEUFIgQ29uc2VudCBhbmQgVHJhbnNwYXJlbmN5IEZyYW1ld29yaycpO1xuICAgICAgfVxuXG4gICAgICAvLyBDbG9uaW5nIHRoZSBHVkxcbiAgICAgIC8vIEl0J3MgaW1wb3J0YW50IGFzIHdlIG1pZ2h0IHRyYW5zZm9ybSBpdCBhbmQgZG9uJ3Qgd2FudCB0byBtb2RpZnkgb2JqZWN0cyB0aGF0IHdlIGRvIG5vdCBvd25cbiAgICAgIHRoaXMudmVuZG9yTGlzdCA9IHtcbiAgICAgICAgdmVuZG9yTGlzdFZlcnNpb246IHZlbmRvckxpc3QudmVuZG9yTGlzdFZlcnNpb24sXG4gICAgICAgIGxhc3RVcGRhdGVkOiB2ZW5kb3JMaXN0Lmxhc3RVcGRhdGVkLFxuICAgICAgICBwdXJwb3NlczogdmVuZG9yTGlzdC5wdXJwb3NlcyxcbiAgICAgICAgZmVhdHVyZXM6IHZlbmRvckxpc3QuZmVhdHVyZXMsXG5cbiAgICAgICAgLy8gQ2xvbmUgdGhlIGxpc3QgYW5kIHNvcnQgdGhlIHZlbmRvcnMgYnkgSUQgKGl0IGJyZWFrcyBvdXIgcmFuZ2UgZ2VuZXJhdGlvbiBhbGdvcml0aG0gaWYgdGhleSBhcmUgbm90IHNvcnRlZClcbiAgICAgICAgdmVuZG9yczogdmVuZG9yTGlzdC52ZW5kb3JzLnNsaWNlKDApLnNvcnQoZnVuY3Rpb24gKGZpcnN0VmVuZG9yLCBzZWNvbmRWZW5kb3IpIHtcbiAgICAgICAgICByZXR1cm4gZmlyc3RWZW5kb3IuaWQgPCBzZWNvbmRWZW5kb3IuaWQgPyAtMSA6IDE7XG4gICAgICAgIH0pXG4gICAgICB9O1xuICAgICAgdGhpcy52ZW5kb3JMaXN0VmVyc2lvbiA9IHZlbmRvckxpc3QudmVuZG9yTGlzdFZlcnNpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBJRCBvZiB0aGUgQ29uc2VudCBNYW5hZ2VtZW50IFBsYXRmb3JtIHRoYXQgbGFzdCBtb2RpZmllZCB0aGUgY29uc2VudCBzdHJpbmdcbiAgICAgKlxuICAgICAqIEV2ZXJ5IENNUCBpcyBhc3NpZ25lZCBhIHVuaXF1ZSBJRCBieSB0aGUgSUFCIEVVIHRoYXQgbXVzdCBiZSBwcm92aWRlZCBoZXJlIGJlZm9yZSBjaGFuZ2luZyBhbnkgb3RoZXIgdmFsdWUgaW4gdGhlIGNvbnNlbnQgc3RyaW5nLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtpbnRlZ2VyfSBpZCBDTVAgSURcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnc2V0Q21wSWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRDbXBJZChpZCkge1xuICAgICAgdGhpcy5jbXBJZCA9IGlkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgSUQgb2YgdGhlIENvbnNlbnQgTWFuYWdlbWVudCBQbGF0Zm9ybSBmcm9tIHRoZSBjb25zZW50IHN0cmluZ1xuICAgICAqXG4gICAgICogQHJldHVybiB7aW50ZWdlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q21wSWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDbXBJZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNtcElkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgdmVyc2lvbiBvZiB0aGUgQ29uc2VudCBNYW5hZ2VtZW50IFBsYXRmb3JtIHRoYXQgbGFzdCBtb2RpZmllZCB0aGUgY29uc2VudCBzdHJpbmdcbiAgICAgKlxuICAgICAqIFRoaXMgdmVyc2lvbiBudW1iZXIgcmVmZXJlbmNlcyB0aGUgQ01QIGNvZGUgcnVubmluZyB3aGVuIGNvbGxlY3RpbmcgdGhlIHVzZXIgY29uc2VudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gdmVyc2lvbiBWZXJzaW9uXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3NldENtcFZlcnNpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRDbXBWZXJzaW9uKHZlcnNpb24pIHtcbiAgICAgIHRoaXMuY21wVmVyc2lvbiA9IHZlcnNpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB2ZXJpc29uIG9mIHRoZSBDb25zZW50IE1hbmFnZW1lbnQgUGxhdGZvcm0gdGhhdCBsYXN0IG1vZGlmaWVkIHRoZSBjb25zZW50IHN0cmluZ1xuICAgICAqXG4gICAgICogQHJldHVybiB7aW50ZWdlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q21wVmVyc2lvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENtcFZlcnNpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5jbXBWZXJzaW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgQ29uc2VudCBNYW5hZ2VtZW50IFBsYXRmb3JtIHNjcmVlbiBJRCB0aGF0IGNvbGxlY3RlZCB0aGUgdXNlciBjb25zZW50XG4gICAgICpcbiAgICAgKiBUaGlzIHNjcmVlbiBJRCByZWZlcmVuY2VzIGEgdW5pcXVlIHZpZXcgaW4gdGhlIENNUCB0aGF0IHdhcyBkaXNwbGF5ZWQgdG8gdGhlIHVzZXIgdG8gY29sbGVjdCBjb25zZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0geyp9IHNjcmVlbklkIFNjcmVlbiBJRFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdzZXRDb25zZW50U2NyZWVuJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Q29uc2VudFNjcmVlbihzY3JlZW5JZCkge1xuICAgICAgdGhpcy5jb25zZW50U2NyZWVuID0gc2NyZWVuSWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBDb25zZW50IE1hbmFnZW1lbnQgUGxhdGZvcm0gc2NyZWVuIElEIHRoYXQgY29sbGVjdGVkIHRoZSB1c2VyIGNvbnNlbnRcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2ludGVnZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2dldENvbnNlbnRTY3JlZW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDb25zZW50U2NyZWVuKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29uc2VudFNjcmVlbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGxhbmd1YWdlIHRoYXQgdGhlIENNUCBhc2tlZCB0aGUgY29uc2VudCBpblxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlIFR3by1sZXR0ZXIgSVNPNjM5LTEgY29kZSAoZW4sIGZyLCBkZSwgZXRjLilcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnc2V0Q29uc2VudExhbmd1YWdlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Q29uc2VudExhbmd1YWdlKGxhbmd1YWdlKSB7XG4gICAgICBpZiAoY29uc2VudExhbmd1YWdlUmVnZXhwLnRlc3QobGFuZ3VhZ2UpID09PSBmYWxzZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnNlbnRTdHJpbmcgLSBUaGUgY29uc2VudCBsYW5ndWFnZSBtdXN0IGJlIGEgdHdvLWxldHRlciBJU082MzktMSBjb2RlIChlbiwgZnIsIGRlLCBldGMuKScpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNvbnNlbnRMYW5ndWFnZSA9IGxhbmd1YWdlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbGFuZ3VhZ2UgdGhhdCB0aGUgQ01QIGFza2VkIGNvbnNlbnQgaW5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gVHdvLWxldHRlciBJU082MzktMSBjb2RlIChlbiwgZnIsIGRlLCBldGMuKVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRDb25zZW50TGFuZ3VhZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDb25zZW50TGFuZ3VhZ2UoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb25zZW50TGFuZ3VhZ2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBsaXN0IG9mIHB1cnBvc2UgSURzIHRoYXQgdGhlIHVzZXIgaGFzIGdpdmVuIGNvbnNlbnQgdG9cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7aW50ZWdlcltdfSBwdXJwb3NlSWRzIEFuIGFycmF5IG9mIGludGVnZXJzIHRoYXQgbWFwIHRvIHRoZSBwdXJwb3NlcyBkZWZpbmVkIGluIHRoZSB2ZW5kb3IgbGlzdC4gUHVycG9zZXMgaW5jbHVkZWQgaW4gdGhlIGFycmF5IGFyZSBwdXJwb3NlcyB0aGF0IHRoZSB1c2VyIGhhcyBnaXZlbiBjb25zZW50IHRvXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3NldFB1cnBvc2VzQWxsb3dlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFB1cnBvc2VzQWxsb3dlZChwdXJwb3NlSWRzKSB7XG4gICAgICB0aGlzLmFsbG93ZWRQdXJwb3NlSWRzID0gcHVycG9zZUlkcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGxpc3Qgb2YgcHVycG9zZSBJRHMgdGhhdCB0aGUgdXNlciBoYXMgZ2l2ZW4gY29uc2VudCB0b1xuICAgICAqXG4gICAgICogQHJldHVybiB7aW50ZWdlcltdfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRQdXJwb3Nlc0FsbG93ZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQdXJwb3Nlc0FsbG93ZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5hbGxvd2VkUHVycG9zZUlkcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGNvbnNlbnQgc3RhdHVzIG9mIGEgdXNlciBmb3IgYSBnaXZlbiBwdXJwb3NlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IHB1cnBvc2VJZCBUaGUgSUQgKGZyb20gdGhlIHZlbmRvciBsaXN0KSBvZiB0aGUgcHVycG9zZSB0byB1cGRhdGVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlIENvbnNlbnQgc3RhdHVzXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3NldFB1cnBvc2VBbGxvd2VkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UHVycG9zZUFsbG93ZWQocHVycG9zZUlkLCB2YWx1ZSkge1xuICAgICAgdmFyIHB1cnBvc2VJbmRleCA9IHRoaXMuYWxsb3dlZFB1cnBvc2VJZHMuaW5kZXhPZihwdXJwb3NlSWQpO1xuXG4gICAgICBpZiAodmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKHB1cnBvc2VJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICB0aGlzLmFsbG93ZWRQdXJwb3NlSWRzLnB1c2gocHVycG9zZUlkKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHB1cnBvc2VJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICB0aGlzLmFsbG93ZWRQdXJwb3NlSWRzLnNwbGljZShwdXJwb3NlSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIHVzZXIgaGFzIGdpdmVuIGNvbnNlbnQgZm9yIGEgc3BlY2lmaWMgcHVycG9zZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtpbnRlZ2VyfSBwdXJwb3NlSWRcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2lzUHVycG9zZUFsbG93ZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc1B1cnBvc2VBbGxvd2VkKHB1cnBvc2VJZCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWxsb3dlZFB1cnBvc2VJZHMuaW5kZXhPZihwdXJwb3NlSWQpICE9PSAtMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGxpc3Qgb2YgdmVuZG9yIElEcyB0aGF0IHRoZSB1c2VyIGhhcyBnaXZlbiBjb25zZW50IHRvXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2ludGVnZXJbXX0gdmVuZG9ySWRzIEFuIGFycmF5IG9mIGludGVnZXJzIHRoYXQgbWFwIHRvIHRoZSB2ZW5kb3JzIGRlZmluZWQgaW4gdGhlIHZlbmRvciBsaXN0LiBWZW5kb3JzIGluY2x1ZGVkIGluIHRoZSBhcnJheSBhcmUgdmVuZG9ycyB0aGF0IHRoZSB1c2VyIGhhcyBnaXZlbiBjb25zZW50IHRvXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3NldFZlbmRvcnNBbGxvd2VkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VmVuZG9yc0FsbG93ZWQodmVuZG9ySWRzKSB7XG4gICAgICB0aGlzLmFsbG93ZWRWZW5kb3JJZHMgPSB2ZW5kb3JJZHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBsaXN0IG9mIHZlbmRvciBJRHMgdGhhdCB0aGUgdXNlciBoYXMgZ2l2ZW4gY29uc2VudCB0b1xuICAgICAqXG4gICAgICogQHJldHVybiB7aW50ZWdlcltdfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRWZW5kb3JzQWxsb3dlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZlbmRvcnNBbGxvd2VkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWxsb3dlZFZlbmRvcklkcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGNvbnNlbnQgc3RhdHVzIG9mIGEgdXNlciBmb3IgYSBnaXZlbiB2ZW5kb3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gdmVuZG9ySWQgVGhlIElEIChmcm9tIHRoZSB2ZW5kb3IgbGlzdCkgb2YgdGhlIHZlbmRvciB0byB1cGRhdGVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlIENvbnNlbnQgc3RhdHVzXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3NldFZlbmRvckFsbG93ZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRWZW5kb3JBbGxvd2VkKHZlbmRvcklkLCB2YWx1ZSkge1xuICAgICAgdmFyIHZlbmRvckluZGV4ID0gdGhpcy5hbGxvd2VkVmVuZG9ySWRzLmluZGV4T2YodmVuZG9ySWQpO1xuXG4gICAgICBpZiAodmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKHZlbmRvckluZGV4ID09PSAtMSkge1xuICAgICAgICAgIHRoaXMuYWxsb3dlZFZlbmRvcklkcy5wdXNoKHZlbmRvcklkKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHZlbmRvckluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIHRoaXMuYWxsb3dlZFZlbmRvcklkcy5zcGxpY2UodmVuZG9ySW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIHVzZXIgaGFzIGdpdmVuIGNvbnNlbnQgZm9yIGEgc3BlY2lmaWMgdmVuZG9yXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IHZlbmRvcklkXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdpc1ZlbmRvckFsbG93ZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc1ZlbmRvckFsbG93ZWQodmVuZG9ySWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFsbG93ZWRWZW5kb3JJZHMuaW5kZXhPZih2ZW5kb3JJZCkgIT09IC0xO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiAnZGVjb2RlTWV0YWRhdGFTdHJpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZWNvZGVNZXRhZGF0YVN0cmluZyhlbmNvZGVkTWV0YWRhdGEpIHtcbiAgICAgIHZhciBkZWNvZGVkU3RyaW5nID0gZGVjb2RlQ29uc2VudFN0cmluZyhlbmNvZGVkTWV0YWRhdGEpO1xuICAgICAgdmFyIG1ldGFkYXRhID0ge307XG4gICAgICB2ZW5kb3JWZXJzaW9uTWFwW2RlY29kZWRTdHJpbmcudmVyc2lvbl0ubWV0YWRhdGFGaWVsZHMuZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgbWV0YWRhdGFbZmllbGRdID0gZGVjb2RlZFN0cmluZ1tmaWVsZF07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBtZXRhZGF0YTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ29uc2VudFN0cmluZztcbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIENvbnNlbnRTdHJpbmc6IENvbnNlbnRTdHJpbmdcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCcuL3V0aWxzL2JpdHMnKSxcbiAgICBkZWNvZGVCaXRzVG9JZHMgPSBfcmVxdWlyZS5kZWNvZGVCaXRzVG9JZHMsXG4gICAgZGVjb2RlRnJvbUJhc2U2NCA9IF9yZXF1aXJlLmRlY29kZUZyb21CYXNlNjQ7XG5cbi8qKlxuICogRGVjb2RlIGNvbnNlbnQgZGF0YSBmcm9tIGEgd2ViLXNhZmUgYmFzZTY0LWVuY29kZWQgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnNlbnRTdHJpbmdcbiAqL1xuXG5cbmZ1bmN0aW9uIGRlY29kZUNvbnNlbnRTdHJpbmcoY29uc2VudFN0cmluZykge1xuICB2YXIgX2RlY29kZUZyb21CYXNlID0gZGVjb2RlRnJvbUJhc2U2NChjb25zZW50U3RyaW5nKSxcbiAgICAgIHZlcnNpb24gPSBfZGVjb2RlRnJvbUJhc2UudmVyc2lvbixcbiAgICAgIGNtcElkID0gX2RlY29kZUZyb21CYXNlLmNtcElkLFxuICAgICAgdmVuZG9yTGlzdFZlcnNpb24gPSBfZGVjb2RlRnJvbUJhc2UudmVuZG9yTGlzdFZlcnNpb24sXG4gICAgICBwdXJwb3NlSWRCaXRTdHJpbmcgPSBfZGVjb2RlRnJvbUJhc2UucHVycG9zZUlkQml0U3RyaW5nLFxuICAgICAgbWF4VmVuZG9ySWQgPSBfZGVjb2RlRnJvbUJhc2UubWF4VmVuZG9ySWQsXG4gICAgICBjcmVhdGVkID0gX2RlY29kZUZyb21CYXNlLmNyZWF0ZWQsXG4gICAgICBsYXN0VXBkYXRlZCA9IF9kZWNvZGVGcm9tQmFzZS5sYXN0VXBkYXRlZCxcbiAgICAgIGlzUmFuZ2UgPSBfZGVjb2RlRnJvbUJhc2UuaXNSYW5nZSxcbiAgICAgIGRlZmF1bHRDb25zZW50ID0gX2RlY29kZUZyb21CYXNlLmRlZmF1bHRDb25zZW50LFxuICAgICAgdmVuZG9ySWRCaXRTdHJpbmcgPSBfZGVjb2RlRnJvbUJhc2UudmVuZG9ySWRCaXRTdHJpbmcsXG4gICAgICB2ZW5kb3JSYW5nZUxpc3QgPSBfZGVjb2RlRnJvbUJhc2UudmVuZG9yUmFuZ2VMaXN0LFxuICAgICAgY21wVmVyc2lvbiA9IF9kZWNvZGVGcm9tQmFzZS5jbXBWZXJzaW9uLFxuICAgICAgY29uc2VudFNjcmVlbiA9IF9kZWNvZGVGcm9tQmFzZS5jb25zZW50U2NyZWVuLFxuICAgICAgY29uc2VudExhbmd1YWdlID0gX2RlY29kZUZyb21CYXNlLmNvbnNlbnRMYW5ndWFnZTtcblxuICB2YXIgY29uc2VudFN0cmluZ0RhdGEgPSB7XG4gICAgdmVyc2lvbjogdmVyc2lvbixcbiAgICBjbXBJZDogY21wSWQsXG4gICAgdmVuZG9yTGlzdFZlcnNpb246IHZlbmRvckxpc3RWZXJzaW9uLFxuICAgIGFsbG93ZWRQdXJwb3NlSWRzOiBkZWNvZGVCaXRzVG9JZHMocHVycG9zZUlkQml0U3RyaW5nKSxcbiAgICBtYXhWZW5kb3JJZDogbWF4VmVuZG9ySWQsXG4gICAgY3JlYXRlZDogY3JlYXRlZCxcbiAgICBsYXN0VXBkYXRlZDogbGFzdFVwZGF0ZWQsXG4gICAgY21wVmVyc2lvbjogY21wVmVyc2lvbixcbiAgICBjb25zZW50U2NyZWVuOiBjb25zZW50U2NyZWVuLFxuICAgIGNvbnNlbnRMYW5ndWFnZTogY29uc2VudExhbmd1YWdlXG4gIH07XG5cbiAgaWYgKGlzUmFuZ2UpIHtcbiAgICAvKiBlc2xpbnQgbm8tc2hhZG93OiBvZmYgKi9cbiAgICB2YXIgaWRNYXAgPSB2ZW5kb3JSYW5nZUxpc3QucmVkdWNlKGZ1bmN0aW9uIChhY2MsIF9yZWYpIHtcbiAgICAgIHZhciBpc1JhbmdlID0gX3JlZi5pc1JhbmdlLFxuICAgICAgICAgIHN0YXJ0VmVuZG9ySWQgPSBfcmVmLnN0YXJ0VmVuZG9ySWQsXG4gICAgICAgICAgZW5kVmVuZG9ySWQgPSBfcmVmLmVuZFZlbmRvcklkO1xuXG4gICAgICB2YXIgbGFzdFZlbmRvcklkID0gaXNSYW5nZSA/IGVuZFZlbmRvcklkIDogc3RhcnRWZW5kb3JJZDtcblxuICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0VmVuZG9ySWQ7IGkgPD0gbGFzdFZlbmRvcklkOyBpICs9IDEpIHtcbiAgICAgICAgYWNjW2ldID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG5cbiAgICBjb25zZW50U3RyaW5nRGF0YS5hbGxvd2VkVmVuZG9ySWRzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMTsgaSA8PSBtYXhWZW5kb3JJZDsgaSArPSAxKSB7XG4gICAgICBpZiAoZGVmYXVsdENvbnNlbnQgJiYgIWlkTWFwW2ldIHx8ICFkZWZhdWx0Q29uc2VudCAmJiBpZE1hcFtpXSkge1xuICAgICAgICBpZiAoY29uc2VudFN0cmluZ0RhdGEuYWxsb3dlZFZlbmRvcklkcy5pbmRleE9mKGkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNlbnRTdHJpbmdEYXRhLmFsbG93ZWRWZW5kb3JJZHMucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zZW50U3RyaW5nRGF0YS5hbGxvd2VkVmVuZG9ySWRzID0gZGVjb2RlQml0c1RvSWRzKHZlbmRvcklkQml0U3RyaW5nKTtcbiAgfVxuXG4gIHJldHVybiBjb25zZW50U3RyaW5nRGF0YTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRlY29kZUNvbnNlbnRTdHJpbmc6IGRlY29kZUNvbnNlbnRTdHJpbmdcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCcuL3V0aWxzL2JpdHMnKSxcbiAgICBlbmNvZGVUb0Jhc2U2NCA9IF9yZXF1aXJlLmVuY29kZVRvQmFzZTY0LFxuICAgIHBhZFJpZ2h0ID0gX3JlcXVpcmUucGFkUmlnaHQ7XG5cbi8qKlxuICogRW5jb2RlIGEgbGlzdCBvZiB2ZW5kb3IgSURzIGludG8gYml0c1xuICpcbiAqIEBwYXJhbSB7aW50ZWdlcn0gbWF4VmVuZG9ySWQgSGlnaGVzdCB2ZW5kb3IgSUQgaW4gdGhlIHZlbmRvciBsaXN0XG4gKiBAcGFyYW0ge2ludGVnZXJbXX0gYWxsb3dlZFZlbmRvcklkcyBWZW5kb3JzIHRoYXQgdGhlIHVzZXIgaGFzIGdpdmVuIGNvbnNlbnQgdG9cbiAqL1xuXG5cbmZ1bmN0aW9uIGVuY29kZVZlbmRvcklkc1RvQml0cyhtYXhWZW5kb3JJZCkge1xuICB2YXIgYWxsb3dlZFZlbmRvcklkcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogW107XG5cbiAgdmFyIHZlbmRvclN0cmluZyA9ICcnO1xuXG4gIGZvciAodmFyIGlkID0gMTsgaWQgPD0gbWF4VmVuZG9ySWQ7IGlkICs9IDEpIHtcbiAgICB2ZW5kb3JTdHJpbmcgKz0gYWxsb3dlZFZlbmRvcklkcy5pbmRleE9mKGlkKSAhPT0gLTEgPyAnMScgOiAnMCc7XG4gIH1cblxuICByZXR1cm4gcGFkUmlnaHQodmVuZG9yU3RyaW5nLCBNYXRoLm1heCgwLCBtYXhWZW5kb3JJZCAtIHZlbmRvclN0cmluZy5sZW5ndGgpKTtcbn1cblxuLyoqXG4gKiBFbmNvZGUgYSBsaXN0IG9mIHB1cnBvc2UgSURzIGludG8gYml0c1xuICpcbiAqIEBwYXJhbSB7Kn0gcHVycG9zZXMgTGlzdCBvZiBwdXJwb3NlcyBmcm9tIHRoZSB2ZW5kb3IgbGlzdFxuICogQHBhcmFtIHsqfSBhbGxvd2VkUHVycG9zZUlkcyBMaXN0IG9mIHB1cnBvc2UgSURzIHRoYXQgdGhlIHVzZXIgaGFzIGdpdmVuIGNvbnNlbnQgdG9cbiAqL1xuZnVuY3Rpb24gZW5jb2RlUHVycG9zZUlkc1RvQml0cyhwdXJwb3Nlcykge1xuICB2YXIgYWxsb3dlZFB1cnBvc2VJZHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG5ldyBTZXQoKTtcblxuICB2YXIgbWF4UHVycG9zZUlkID0gMDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwdXJwb3Nlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIG1heFB1cnBvc2VJZCA9IE1hdGgubWF4KG1heFB1cnBvc2VJZCwgcHVycG9zZXNbaV0uaWQpO1xuICB9XG4gIGZvciAodmFyIF9pID0gMDsgX2kgPCBhbGxvd2VkUHVycG9zZUlkcy5sZW5ndGg7IF9pICs9IDEpIHtcbiAgICBtYXhQdXJwb3NlSWQgPSBNYXRoLm1heChtYXhQdXJwb3NlSWQsIGFsbG93ZWRQdXJwb3NlSWRzW19pXSk7XG4gIH1cblxuICB2YXIgcHVycG9zZVN0cmluZyA9ICcnO1xuICBmb3IgKHZhciBpZCA9IDE7IGlkIDw9IG1heFB1cnBvc2VJZDsgaWQgKz0gMSkge1xuICAgIHB1cnBvc2VTdHJpbmcgKz0gYWxsb3dlZFB1cnBvc2VJZHMuaW5kZXhPZihpZCkgIT09IC0xID8gJzEnIDogJzAnO1xuICB9XG5cbiAgcmV0dXJuIHB1cnBvc2VTdHJpbmc7XG59XG5cbi8qKlxuICogQ29udmVydCBhIGxpc3Qgb2YgdmVuZG9yIElEcyB0byByYW5nZXNcbiAqXG4gKiBAcGFyYW0ge29iamVjdFtdfSB2ZW5kb3JzIExpc3Qgb2YgdmVuZG9ycyBmcm9tIHRoZSB2ZW5kb3IgbGlzdCAoaW1wb3J0YW50OiB0aGlzIGxpc3QgbXVzdCB0byBiZSBzb3J0ZWQgYnkgSUQpXG4gKiBAcGFyYW0ge2ludGVnZXJbXX0gYWxsb3dlZFZlbmRvcklkcyBMaXN0IG9mIHZlbmRvciBJRHMgdGhhdCB0aGUgdXNlciBoYXMgZ2l2ZW4gY29uc2VudCB0b1xuICovXG5mdW5jdGlvbiBjb252ZXJ0VmVuZG9yc1RvUmFuZ2VzKHZlbmRvcnMsIGFsbG93ZWRWZW5kb3JJZHMpIHtcbiAgdmFyIHJhbmdlID0gW107XG4gIHZhciByYW5nZXMgPSBbXTtcblxuICB2YXIgaWRzSW5MaXN0ID0gdmVuZG9ycy5tYXAoZnVuY3Rpb24gKHZlbmRvcikge1xuICAgIHJldHVybiB2ZW5kb3IuaWQ7XG4gIH0pO1xuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB2ZW5kb3JzLmxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIHZhciBpZCA9IHZlbmRvcnNbaW5kZXhdLmlkO1xuXG4gICAgaWYgKGFsbG93ZWRWZW5kb3JJZHMuaW5kZXhPZihpZCkgIT09IC0xKSB7XG4gICAgICByYW5nZS5wdXNoKGlkKTtcbiAgICB9XG5cbiAgICAvLyBEbyB3ZSBuZWVkIHRvIGNsb3NlIHRoZSBjdXJyZW50IHJhbmdlP1xuICAgIGlmICgoYWxsb3dlZFZlbmRvcklkcy5pbmRleE9mKGlkKSA9PT0gLTEgLy8gVGhlIHZlbmRvciB3ZSBhcmUgZXZhbHVhdGluZyBpcyBub3QgYWxsb3dlZFxuICAgIHx8IGluZGV4ID09PSB2ZW5kb3JzLmxlbmd0aCAtIDEgLy8gVGhlcmUgaXMgbm8gbW9yZSB2ZW5kb3IgdG8gZXZhbHVhdGVcbiAgICB8fCBpZHNJbkxpc3QuaW5kZXhPZihpZCArIDEpID09PSAtMSAvLyBUaGVyZSBpcyBubyB2ZW5kb3IgYWZ0ZXIgdGhpcyBvbmUgKGllIHRoZXJlIGlzIGEgZ2FwIGluIHRoZSB2ZW5kb3IgSURzKSA7IHdlIG5lZWQgdG8gc3RvcCBoZXJlIHRvIGF2b2lkIGluY2x1ZGluZyB2ZW5kb3JzIHRoYXQgZG8gbm90IGhhdmUgY29uc2VudFxuICAgICkgJiYgcmFuZ2UubGVuZ3RoKSB7XG4gICAgICB2YXIgc3RhcnRWZW5kb3JJZCA9IHJhbmdlLnNoaWZ0KCk7XG4gICAgICB2YXIgZW5kVmVuZG9ySWQgPSByYW5nZS5wb3AoKTtcblxuICAgICAgcmFuZ2UgPSBbXTtcblxuICAgICAgcmFuZ2VzLnB1c2goe1xuICAgICAgICBpc1JhbmdlOiB0eXBlb2YgZW5kVmVuZG9ySWQgPT09ICdudW1iZXInLFxuICAgICAgICBzdGFydFZlbmRvcklkOiBzdGFydFZlbmRvcklkLFxuICAgICAgICBlbmRWZW5kb3JJZDogZW5kVmVuZG9ySWRcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByYW5nZXM7XG59XG5cbi8qKlxuICogR2V0IG1heFZlbmRvcklkIGZyb20gdGhlIGxpc3Qgb2YgdmVuZG9ycyBhbmQgcmV0dXJuIHRoYXQgaWRcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdmVuZG9yc1xuICovXG5mdW5jdGlvbiBnZXRNYXhWZW5kb3JJZCh2ZW5kb3JzKSB7XG4gIC8vIEZpbmQgdGhlIG1heCB2ZW5kb3IgSUQgZnJvbSB0aGUgdmVuZG9yIGxpc3RcbiAgdmFyIG1heFZlbmRvcklkID0gMDtcblxuICB2ZW5kb3JzLmZvckVhY2goZnVuY3Rpb24gKHZlbmRvcikge1xuICAgIGlmICh2ZW5kb3IuaWQgPiBtYXhWZW5kb3JJZCkge1xuICAgICAgbWF4VmVuZG9ySWQgPSB2ZW5kb3IuaWQ7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG1heFZlbmRvcklkO1xufVxuLyoqXG4gKiBFbmNvZGUgY29uc2VudCBkYXRhIGludG8gYSB3ZWItc2FmZSBiYXNlNjQtZW5jb2RlZCBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uc2VudERhdGEgRGF0YSB0byBpbmNsdWRlIGluIHRoZSBzdHJpbmcgKHNlZSBgdXRpbHMvZGVmaW5pdGlvbnMuanNgIGZvciB0aGUgbGlzdCBvZiBmaWVsZHMpXG4gKi9cbmZ1bmN0aW9uIGVuY29kZUNvbnNlbnRTdHJpbmcoY29uc2VudERhdGEpIHtcbiAgdmFyIG1heFZlbmRvcklkID0gY29uc2VudERhdGEubWF4VmVuZG9ySWQ7XG4gIHZhciBfY29uc2VudERhdGEkdmVuZG9yTGkgPSBjb25zZW50RGF0YS52ZW5kb3JMaXN0LFxuICAgICAgdmVuZG9yTGlzdCA9IF9jb25zZW50RGF0YSR2ZW5kb3JMaSA9PT0gdW5kZWZpbmVkID8ge30gOiBfY29uc2VudERhdGEkdmVuZG9yTGksXG4gICAgICBhbGxvd2VkUHVycG9zZUlkcyA9IGNvbnNlbnREYXRhLmFsbG93ZWRQdXJwb3NlSWRzLFxuICAgICAgYWxsb3dlZFZlbmRvcklkcyA9IGNvbnNlbnREYXRhLmFsbG93ZWRWZW5kb3JJZHM7XG4gIHZhciBfdmVuZG9yTGlzdCR2ZW5kb3JzID0gdmVuZG9yTGlzdC52ZW5kb3JzLFxuICAgICAgdmVuZG9ycyA9IF92ZW5kb3JMaXN0JHZlbmRvcnMgPT09IHVuZGVmaW5lZCA/IFtdIDogX3ZlbmRvckxpc3QkdmVuZG9ycyxcbiAgICAgIF92ZW5kb3JMaXN0JHB1cnBvc2VzID0gdmVuZG9yTGlzdC5wdXJwb3NlcyxcbiAgICAgIHB1cnBvc2VzID0gX3ZlbmRvckxpc3QkcHVycG9zZXMgPT09IHVuZGVmaW5lZCA/IFtdIDogX3ZlbmRvckxpc3QkcHVycG9zZXM7XG5cbiAgLy8gaWYgbm8gbWF4VmVuZG9ySWQgaXMgaW4gdGhlIENvbnNlbnREYXRhLCBnZXQgaXRcblxuICBpZiAoIW1heFZlbmRvcklkKSB7XG4gICAgbWF4VmVuZG9ySWQgPSBnZXRNYXhWZW5kb3JJZCh2ZW5kb3JzKTtcbiAgfVxuXG4gIC8vIEVuY29kZSB0aGUgZGF0YSB3aXRoIGFuZCB3aXRob3V0IHJhbmdlcyBhbmQgcmV0dXJuIHRoZSBzbWFsbGVzdCBlbmNvZGVkIHBheWxvYWRcbiAgdmFyIG5vUmFuZ2VzRGF0YSA9IGVuY29kZVRvQmFzZTY0KF9leHRlbmRzKHt9LCBjb25zZW50RGF0YSwge1xuICAgIG1heFZlbmRvcklkOiBtYXhWZW5kb3JJZCxcbiAgICBwdXJwb3NlSWRCaXRTdHJpbmc6IGVuY29kZVB1cnBvc2VJZHNUb0JpdHMocHVycG9zZXMsIGFsbG93ZWRQdXJwb3NlSWRzKSxcbiAgICBpc1JhbmdlOiBmYWxzZSxcbiAgICB2ZW5kb3JJZEJpdFN0cmluZzogZW5jb2RlVmVuZG9ySWRzVG9CaXRzKG1heFZlbmRvcklkLCBhbGxvd2VkVmVuZG9ySWRzKVxuICB9KSk7XG5cbiAgdmFyIHZlbmRvclJhbmdlTGlzdCA9IGNvbnZlcnRWZW5kb3JzVG9SYW5nZXModmVuZG9ycywgYWxsb3dlZFZlbmRvcklkcyk7XG5cbiAgdmFyIHJhbmdlc0RhdGEgPSBlbmNvZGVUb0Jhc2U2NChfZXh0ZW5kcyh7fSwgY29uc2VudERhdGEsIHtcbiAgICBtYXhWZW5kb3JJZDogbWF4VmVuZG9ySWQsXG4gICAgcHVycG9zZUlkQml0U3RyaW5nOiBlbmNvZGVQdXJwb3NlSWRzVG9CaXRzKHB1cnBvc2VzLCBhbGxvd2VkUHVycG9zZUlkcyksXG4gICAgaXNSYW5nZTogdHJ1ZSxcbiAgICBkZWZhdWx0Q29uc2VudDogZmFsc2UsXG4gICAgbnVtRW50cmllczogdmVuZG9yUmFuZ2VMaXN0Lmxlbmd0aCxcbiAgICB2ZW5kb3JSYW5nZUxpc3Q6IHZlbmRvclJhbmdlTGlzdFxuICB9KSk7XG5cbiAgcmV0dXJuIG5vUmFuZ2VzRGF0YS5sZW5ndGggPCByYW5nZXNEYXRhLmxlbmd0aCA/IG5vUmFuZ2VzRGF0YSA6IHJhbmdlc0RhdGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjb252ZXJ0VmVuZG9yc1RvUmFuZ2VzOiBjb252ZXJ0VmVuZG9yc1RvUmFuZ2VzLFxuICBlbmNvZGVDb25zZW50U3RyaW5nOiBlbmNvZGVDb25zZW50U3RyaW5nLFxuICBnZXRNYXhWZW5kb3JJZDogZ2V0TWF4VmVuZG9ySWQsXG4gIGVuY29kZVZlbmRvcklkc1RvQml0czogZW5jb2RlVmVuZG9ySWRzVG9CaXRzLFxuICBlbmNvZGVQdXJwb3NlSWRzVG9CaXRzOiBlbmNvZGVQdXJwb3NlSWRzVG9CaXRzXG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgnLi9jb25zZW50LXN0cmluZycpLFxuICAgIENvbnNlbnRTdHJpbmcgPSBfcmVxdWlyZS5Db25zZW50U3RyaW5nO1xuXG52YXIgX3JlcXVpcmUyID0gcmVxdWlyZSgnLi9kZWNvZGUnKSxcbiAgICBkZWNvZGVDb25zZW50U3RyaW5nID0gX3JlcXVpcmUyLmRlY29kZUNvbnNlbnRTdHJpbmc7XG5cbnZhciBfcmVxdWlyZTMgPSByZXF1aXJlKCcuL2VuY29kZScpLFxuICAgIGVuY29kZUNvbnNlbnRTdHJpbmcgPSBfcmVxdWlyZTMuZW5jb2RlQ29uc2VudFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIENvbnNlbnRTdHJpbmc6IENvbnNlbnRTdHJpbmcsXG4gIGRlY29kZUNvbnNlbnRTdHJpbmc6IGRlY29kZUNvbnNlbnRTdHJpbmcsXG4gIGVuY29kZUNvbnNlbnRTdHJpbmc6IGVuY29kZUNvbnNlbnRTdHJpbmdcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBlc2xpbnQgbm8tdXNlLWJlZm9yZS1kZWZpbmU6IG9mZiAqL1xuXG52YXIgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZS02NCcpO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCcuL2RlZmluaXRpb25zJyksXG4gICAgdmVyc2lvbk51bUJpdHMgPSBfcmVxdWlyZS52ZXJzaW9uTnVtQml0cyxcbiAgICB2ZW5kb3JWZXJzaW9uTWFwID0gX3JlcXVpcmUudmVuZG9yVmVyc2lvbk1hcDtcblxuZnVuY3Rpb24gcmVwZWF0KGNvdW50KSB7XG4gIHZhciBzdHJpbmcgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICcwJztcblxuICB2YXIgcGFkU3RyaW5nID0gJyc7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSArPSAxKSB7XG4gICAgcGFkU3RyaW5nICs9IHN0cmluZztcbiAgfVxuXG4gIHJldHVybiBwYWRTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHBhZExlZnQoc3RyaW5nLCBwYWRkaW5nKSB7XG4gIHJldHVybiByZXBlYXQoTWF0aC5tYXgoMCwgcGFkZGluZykpICsgc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBwYWRSaWdodChzdHJpbmcsIHBhZGRpbmcpIHtcbiAgcmV0dXJuIHN0cmluZyArIHJlcGVhdChNYXRoLm1heCgwLCBwYWRkaW5nKSk7XG59XG5cbmZ1bmN0aW9uIGVuY29kZUludFRvQml0cyhudW1iZXIsIG51bUJpdHMpIHtcbiAgdmFyIGJpdFN0cmluZyA9ICcnO1xuXG4gIGlmICh0eXBlb2YgbnVtYmVyID09PSAnbnVtYmVyJyAmJiAhaXNOYU4obnVtYmVyKSkge1xuICAgIGJpdFN0cmluZyA9IHBhcnNlSW50KG51bWJlciwgMTApLnRvU3RyaW5nKDIpO1xuICB9XG5cbiAgLy8gUGFkIHRoZSBzdHJpbmcgaWYgbm90IGZpbGxpbmcgYWxsIGJpdHNcbiAgaWYgKG51bUJpdHMgPj0gYml0U3RyaW5nLmxlbmd0aCkge1xuICAgIGJpdFN0cmluZyA9IHBhZExlZnQoYml0U3RyaW5nLCBudW1CaXRzIC0gYml0U3RyaW5nLmxlbmd0aCk7XG4gIH1cblxuICAvLyBUcnVuY2F0ZSB0aGUgc3RyaW5nIGlmIGxvbmdlciB0aGFuIHRoZSBudW1iZXIgb2YgYml0c1xuICBpZiAoYml0U3RyaW5nLmxlbmd0aCA+IG51bUJpdHMpIHtcbiAgICBiaXRTdHJpbmcgPSBiaXRTdHJpbmcuc3Vic3RyaW5nKDAsIG51bUJpdHMpO1xuICB9XG5cbiAgcmV0dXJuIGJpdFN0cmluZztcbn1cblxuZnVuY3Rpb24gZW5jb2RlQm9vbFRvQml0cyh2YWx1ZSkge1xuICByZXR1cm4gZW5jb2RlSW50VG9CaXRzKHZhbHVlID09PSB0cnVlID8gMSA6IDAsIDEpO1xufVxuXG5mdW5jdGlvbiBlbmNvZGVEYXRlVG9CaXRzKGRhdGUsIG51bUJpdHMpIHtcbiAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIGVuY29kZUludFRvQml0cyhkYXRlLmdldFRpbWUoKSAvIDEwMCwgbnVtQml0cyk7XG4gIH1cbiAgcmV0dXJuIGVuY29kZUludFRvQml0cyhkYXRlLCBudW1CaXRzKTtcbn1cblxuZnVuY3Rpb24gZW5jb2RlTGV0dGVyVG9CaXRzKGxldHRlciwgbnVtQml0cykge1xuICByZXR1cm4gZW5jb2RlSW50VG9CaXRzKGxldHRlci50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgLSA2NSwgbnVtQml0cyk7XG59XG5cbmZ1bmN0aW9uIGVuY29kZUxhbmd1YWdlVG9CaXRzKGxhbmd1YWdlKSB7XG4gIHZhciBudW1CaXRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxMjtcblxuICByZXR1cm4gZW5jb2RlTGV0dGVyVG9CaXRzKGxhbmd1YWdlLnNsaWNlKDAsIDEpLCBudW1CaXRzIC8gMikgKyBlbmNvZGVMZXR0ZXJUb0JpdHMobGFuZ3VhZ2Uuc2xpY2UoMSksIG51bUJpdHMgLyAyKTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlQml0c1RvSW50KGJpdFN0cmluZywgc3RhcnQsIGxlbmd0aCkge1xuICByZXR1cm4gcGFyc2VJbnQoYml0U3RyaW5nLnN1YnN0cihzdGFydCwgbGVuZ3RoKSwgMik7XG59XG5cbmZ1bmN0aW9uIGRlY29kZUJpdHNUb0RhdGUoYml0U3RyaW5nLCBzdGFydCwgbGVuZ3RoKSB7XG4gIHJldHVybiBuZXcgRGF0ZShkZWNvZGVCaXRzVG9JbnQoYml0U3RyaW5nLCBzdGFydCwgbGVuZ3RoKSAqIDEwMCk7XG59XG5cbmZ1bmN0aW9uIGRlY29kZUJpdHNUb0Jvb2woYml0U3RyaW5nLCBzdGFydCkge1xuICByZXR1cm4gcGFyc2VJbnQoYml0U3RyaW5nLnN1YnN0cihzdGFydCwgMSksIDIpID09PSAxO1xufVxuXG5mdW5jdGlvbiBkZWNvZGVCaXRzVG9MZXR0ZXIoYml0U3RyaW5nKSB7XG4gIHZhciBsZXR0ZXJDb2RlID0gZGVjb2RlQml0c1RvSW50KGJpdFN0cmluZyk7XG4gIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGxldHRlckNvZGUgKyA2NSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlQml0c1RvTGFuZ3VhZ2UoYml0U3RyaW5nLCBzdGFydCwgbGVuZ3RoKSB7XG4gIHZhciBsYW5ndWFnZUJpdFN0cmluZyA9IGJpdFN0cmluZy5zdWJzdHIoc3RhcnQsIGxlbmd0aCk7XG5cbiAgcmV0dXJuIGRlY29kZUJpdHNUb0xldHRlcihsYW5ndWFnZUJpdFN0cmluZy5zbGljZSgwLCBsZW5ndGggLyAyKSkgKyBkZWNvZGVCaXRzVG9MZXR0ZXIobGFuZ3VhZ2VCaXRTdHJpbmcuc2xpY2UobGVuZ3RoIC8gMikpO1xufVxuXG5mdW5jdGlvbiBlbmNvZGVGaWVsZChfcmVmKSB7XG4gIHZhciBpbnB1dCA9IF9yZWYuaW5wdXQsXG4gICAgICBmaWVsZCA9IF9yZWYuZmllbGQ7XG4gIHZhciBuYW1lID0gZmllbGQubmFtZSxcbiAgICAgIHR5cGUgPSBmaWVsZC50eXBlLFxuICAgICAgbnVtQml0cyA9IGZpZWxkLm51bUJpdHMsXG4gICAgICBlbmNvZGVyID0gZmllbGQuZW5jb2RlcixcbiAgICAgIHZhbGlkYXRvciA9IGZpZWxkLnZhbGlkYXRvcjtcblxuXG4gIGlmICh0eXBlb2YgdmFsaWRhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKCF2YWxpZGF0b3IoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG4gIGlmICh0eXBlb2YgZW5jb2RlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBlbmNvZGVyKGlucHV0KTtcbiAgfVxuXG4gIHZhciBiaXRDb3VudCA9IHR5cGVvZiBudW1CaXRzID09PSAnZnVuY3Rpb24nID8gbnVtQml0cyhpbnB1dCkgOiBudW1CaXRzO1xuXG4gIHZhciBpbnB1dFZhbHVlID0gaW5wdXRbbmFtZV07XG4gIHZhciBmaWVsZFZhbHVlID0gaW5wdXRWYWx1ZSA9PT0gbnVsbCB8fCBpbnB1dFZhbHVlID09PSB1bmRlZmluZWQgPyAnJyA6IGlucHV0VmFsdWU7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnaW50JzpcbiAgICAgIHJldHVybiBlbmNvZGVJbnRUb0JpdHMoZmllbGRWYWx1ZSwgYml0Q291bnQpO1xuICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgcmV0dXJuIGVuY29kZUJvb2xUb0JpdHMoZmllbGRWYWx1ZSk7XG4gICAgY2FzZSAnZGF0ZSc6XG4gICAgICByZXR1cm4gZW5jb2RlRGF0ZVRvQml0cyhmaWVsZFZhbHVlLCBiaXRDb3VudCk7XG4gICAgY2FzZSAnYml0cyc6XG4gICAgICByZXR1cm4gcGFkUmlnaHQoZmllbGRWYWx1ZSwgYml0Q291bnQgLSBmaWVsZFZhbHVlLmxlbmd0aCkuc3Vic3RyaW5nKDAsIGJpdENvdW50KTtcbiAgICBjYXNlICdsaXN0JzpcbiAgICAgIHJldHVybiBmaWVsZFZhbHVlLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBsaXN0VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGFjYyArIGVuY29kZUZpZWxkcyh7XG4gICAgICAgICAgaW5wdXQ6IGxpc3RWYWx1ZSxcbiAgICAgICAgICBmaWVsZHM6IGZpZWxkLmZpZWxkc1xuICAgICAgICB9KTtcbiAgICAgIH0sICcnKTtcbiAgICBjYXNlICdsYW5ndWFnZSc6XG4gICAgICByZXR1cm4gZW5jb2RlTGFuZ3VhZ2VUb0JpdHMoZmllbGRWYWx1ZSwgYml0Q291bnQpO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnNlbnRTdHJpbmcgLSBVbmtub3duIGZpZWxkIHR5cGUgJyArIHR5cGUgKyAnIGZvciBlbmNvZGluZycpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVuY29kZUZpZWxkcyhfcmVmMikge1xuICB2YXIgaW5wdXQgPSBfcmVmMi5pbnB1dCxcbiAgICAgIGZpZWxkcyA9IF9yZWYyLmZpZWxkcztcblxuICByZXR1cm4gZmllbGRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBmaWVsZCkge1xuICAgIGFjYyArPSBlbmNvZGVGaWVsZCh7IGlucHV0OiBpbnB1dCwgZmllbGQ6IGZpZWxkIH0pO1xuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwgJycpO1xufVxuXG5mdW5jdGlvbiBkZWNvZGVGaWVsZChfcmVmMykge1xuICB2YXIgaW5wdXQgPSBfcmVmMy5pbnB1dCxcbiAgICAgIG91dHB1dCA9IF9yZWYzLm91dHB1dCxcbiAgICAgIHN0YXJ0UG9zaXRpb24gPSBfcmVmMy5zdGFydFBvc2l0aW9uLFxuICAgICAgZmllbGQgPSBfcmVmMy5maWVsZDtcbiAgdmFyIHR5cGUgPSBmaWVsZC50eXBlLFxuICAgICAgbnVtQml0cyA9IGZpZWxkLm51bUJpdHMsXG4gICAgICBkZWNvZGVyID0gZmllbGQuZGVjb2RlcixcbiAgICAgIHZhbGlkYXRvciA9IGZpZWxkLnZhbGlkYXRvcixcbiAgICAgIGxpc3RDb3VudCA9IGZpZWxkLmxpc3RDb3VudDtcblxuXG4gIGlmICh0eXBlb2YgdmFsaWRhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKCF2YWxpZGF0b3Iob3V0cHV0KSkge1xuICAgICAgLy8gTm90IGRlY29kaW5nIHRoaXMgZmllbGQgc28gbWFrZSBzdXJlIHdlIHN0YXJ0IHBhcnNpbmcgdGhlIG5leHQgZmllbGQgYXRcbiAgICAgIC8vIHRoZSBzYW1lIHBvaW50XG4gICAgICByZXR1cm4geyBuZXdQb3NpdGlvbjogc3RhcnRQb3NpdGlvbiB9O1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgZGVjb2RlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBkZWNvZGVyKGlucHV0LCBvdXRwdXQsIHN0YXJ0UG9zaXRpb24pO1xuICB9XG5cbiAgdmFyIGJpdENvdW50ID0gdHlwZW9mIG51bUJpdHMgPT09ICdmdW5jdGlvbicgPyBudW1CaXRzKG91dHB1dCkgOiBudW1CaXRzO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ2ludCc6XG4gICAgICByZXR1cm4geyBmaWVsZFZhbHVlOiBkZWNvZGVCaXRzVG9JbnQoaW5wdXQsIHN0YXJ0UG9zaXRpb24sIGJpdENvdW50KSB9O1xuICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgcmV0dXJuIHsgZmllbGRWYWx1ZTogZGVjb2RlQml0c1RvQm9vbChpbnB1dCwgc3RhcnRQb3NpdGlvbikgfTtcbiAgICBjYXNlICdkYXRlJzpcbiAgICAgIHJldHVybiB7IGZpZWxkVmFsdWU6IGRlY29kZUJpdHNUb0RhdGUoaW5wdXQsIHN0YXJ0UG9zaXRpb24sIGJpdENvdW50KSB9O1xuICAgIGNhc2UgJ2JpdHMnOlxuICAgICAgcmV0dXJuIHsgZmllbGRWYWx1ZTogaW5wdXQuc3Vic3RyKHN0YXJ0UG9zaXRpb24sIGJpdENvdW50KSB9O1xuICAgIGNhc2UgJ2xpc3QnOlxuICAgICAgcmV0dXJuIGRlY29kZUxpc3QoaW5wdXQsIG91dHB1dCwgc3RhcnRQb3NpdGlvbiwgZmllbGQsIGxpc3RDb3VudCk7XG4gICAgY2FzZSAnbGFuZ3VhZ2UnOlxuICAgICAgcmV0dXJuIHsgZmllbGRWYWx1ZTogZGVjb2RlQml0c1RvTGFuZ3VhZ2UoaW5wdXQsIHN0YXJ0UG9zaXRpb24sIGJpdENvdW50KSB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnNlbnRTdHJpbmcgLSBVbmtub3duIGZpZWxkIHR5cGUgJyArIHR5cGUgKyAnIGZvciBkZWNvZGluZycpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlY29kZUxpc3QoaW5wdXQsIG91dHB1dCwgc3RhcnRQb3NpdGlvbiwgZmllbGQsIGxpc3RDb3VudCkge1xuICB2YXIgbGlzdEVudHJ5Q291bnQgPSAwO1xuXG4gIGlmICh0eXBlb2YgbGlzdENvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbGlzdEVudHJ5Q291bnQgPSBsaXN0Q291bnQob3V0cHV0KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdENvdW50ID09PSAnbnVtYmVyJykge1xuICAgIGxpc3RFbnRyeUNvdW50ID0gbGlzdENvdW50O1xuICB9XG5cbiAgdmFyIG5ld1Bvc2l0aW9uID0gc3RhcnRQb3NpdGlvbjtcbiAgdmFyIGZpZWxkVmFsdWUgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RFbnRyeUNvdW50OyBpICs9IDEpIHtcbiAgICB2YXIgZGVjb2RlZEZpZWxkcyA9IGRlY29kZUZpZWxkcyh7XG4gICAgICBpbnB1dDogaW5wdXQsXG4gICAgICBmaWVsZHM6IGZpZWxkLmZpZWxkcyxcbiAgICAgIHN0YXJ0UG9zaXRpb246IG5ld1Bvc2l0aW9uXG4gICAgfSk7XG5cbiAgICBuZXdQb3NpdGlvbiA9IGRlY29kZWRGaWVsZHMubmV3UG9zaXRpb247XG4gICAgZmllbGRWYWx1ZS5wdXNoKGRlY29kZWRGaWVsZHMuZGVjb2RlZE9iamVjdCk7XG4gIH1cblxuICByZXR1cm4geyBmaWVsZFZhbHVlOiBmaWVsZFZhbHVlLCBuZXdQb3NpdGlvbjogbmV3UG9zaXRpb24gfTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlRmllbGRzKF9yZWY0KSB7XG4gIHZhciBpbnB1dCA9IF9yZWY0LmlucHV0LFxuICAgICAgZmllbGRzID0gX3JlZjQuZmllbGRzLFxuICAgICAgX3JlZjQkc3RhcnRQb3NpdGlvbiA9IF9yZWY0LnN0YXJ0UG9zaXRpb24sXG4gICAgICBzdGFydFBvc2l0aW9uID0gX3JlZjQkc3RhcnRQb3NpdGlvbiA9PT0gdW5kZWZpbmVkID8gMCA6IF9yZWY0JHN0YXJ0UG9zaXRpb247XG5cbiAgdmFyIHBvc2l0aW9uID0gc3RhcnRQb3NpdGlvbjtcblxuICB2YXIgZGVjb2RlZE9iamVjdCA9IGZpZWxkcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgZmllbGQpIHtcbiAgICB2YXIgbmFtZSA9IGZpZWxkLm5hbWUsXG4gICAgICAgIG51bUJpdHMgPSBmaWVsZC5udW1CaXRzO1xuXG4gICAgdmFyIF9kZWNvZGVGaWVsZCA9IGRlY29kZUZpZWxkKHtcbiAgICAgIGlucHV0OiBpbnB1dCxcbiAgICAgIG91dHB1dDogYWNjLFxuICAgICAgc3RhcnRQb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICBmaWVsZDogZmllbGRcbiAgICB9KSxcbiAgICAgICAgZmllbGRWYWx1ZSA9IF9kZWNvZGVGaWVsZC5maWVsZFZhbHVlLFxuICAgICAgICBuZXdQb3NpdGlvbiA9IF9kZWNvZGVGaWVsZC5uZXdQb3NpdGlvbjtcblxuICAgIGlmIChmaWVsZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGFjY1tuYW1lXSA9IGZpZWxkVmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKG5ld1Bvc2l0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHBvc2l0aW9uID0gbmV3UG9zaXRpb247XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbnVtQml0cyA9PT0gJ251bWJlcicpIHtcbiAgICAgIHBvc2l0aW9uICs9IG51bUJpdHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuXG4gIHJldHVybiB7XG4gICAgZGVjb2RlZE9iamVjdDogZGVjb2RlZE9iamVjdCxcbiAgICBuZXdQb3NpdGlvbjogcG9zaXRpb25cbiAgfTtcbn1cblxuLyoqXG4gKiBFbmNvZGUgdGhlIGRhdGEgcHJvcGVydGllcyB0byBhIGJpdCBzdHJpbmcuIEVuY29kaW5nIHdpbGwgZW5jb2RlXG4gKiBlaXRoZXIgYHNlbGVjdGVkVmVuZG9ySWRzYCBvciB0aGUgYHZlbmRvclJhbmdlTGlzdGAgZGVwZW5kaW5nIG9uXG4gKiB0aGUgdmFsdWUgb2YgdGhlIGBpc1JhbmdlYCBmbGFnLlxuICovXG5mdW5jdGlvbiBlbmNvZGVEYXRhVG9CaXRzKGRhdGEsIGRlZmluaXRpb25NYXApIHtcbiAgdmFyIHZlcnNpb24gPSBkYXRhLnZlcnNpb247XG5cblxuICBpZiAodHlwZW9mIHZlcnNpb24gIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDb25zZW50U3RyaW5nIC0gTm8gdmVyc2lvbiBmaWVsZCB0byBlbmNvZGUnKTtcbiAgfSBlbHNlIGlmICghZGVmaW5pdGlvbk1hcFt2ZXJzaW9uXSkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ29uc2VudFN0cmluZyAtIE5vIGRlZmluaXRpb24gZm9yIHZlcnNpb24gJyArIHZlcnNpb24pO1xuICB9IGVsc2Uge1xuICAgIHZhciBmaWVsZHMgPSBkZWZpbml0aW9uTWFwW3ZlcnNpb25dLmZpZWxkcztcbiAgICByZXR1cm4gZW5jb2RlRmllbGRzKHsgaW5wdXQ6IGRhdGEsIGZpZWxkczogZmllbGRzIH0pO1xuICB9XG59XG5cbi8qKlxuICogVGFrZSBhbGwgZmllbGRzIHJlcXVpcmVkIHRvIGVuY29kZSB0aGUgY29uc2VudCBzdHJpbmcgYW5kIHByb2R1Y2UgdGhlIFVSTCBzYWZlIEJhc2U2NCBlbmNvZGVkIHZhbHVlXG4gKi9cbmZ1bmN0aW9uIGVuY29kZVRvQmFzZTY0KGRhdGEpIHtcbiAgdmFyIGRlZmluaXRpb25NYXAgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHZlbmRvclZlcnNpb25NYXA7XG5cbiAgdmFyIGJpbmFyeVZhbHVlID0gZW5jb2RlRGF0YVRvQml0cyhkYXRhLCBkZWZpbml0aW9uTWFwKTtcblxuICBpZiAoYmluYXJ5VmFsdWUpIHtcbiAgICAvLyBQYWQgbGVuZ3RoIHRvIG11bHRpcGxlIG9mIDhcbiAgICB2YXIgcGFkZGVkQmluYXJ5VmFsdWUgPSBwYWRSaWdodChiaW5hcnlWYWx1ZSwgNyAtIChiaW5hcnlWYWx1ZS5sZW5ndGggKyA3KSAlIDgpO1xuXG4gICAgLy8gRW5jb2RlIHRvIGJ5dGVzXG4gICAgdmFyIGJ5dGVzID0gJyc7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWRkZWRCaW5hcnlWYWx1ZS5sZW5ndGg7IGkgKz0gOCkge1xuICAgICAgYnl0ZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChwYWRkZWRCaW5hcnlWYWx1ZS5zdWJzdHIoaSwgOCksIDIpKTtcbiAgICB9XG5cbiAgICAvLyBNYWtlIGJhc2U2NCBzdHJpbmcgVVJMIGZyaWVuZGx5XG4gICAgcmV0dXJuIGJhc2U2NC5lbmNvZGUoYnl0ZXMpLnJlcGxhY2UoL1xcKy9nLCAnLScpLnJlcGxhY2UoL1xcLy9nLCAnXycpLnJlcGxhY2UoLz0rJC8sICcnKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBkZWNvZGVDb25zZW50U3RyaW5nQml0VmFsdWUoYml0U3RyaW5nKSB7XG4gIHZhciBkZWZpbml0aW9uTWFwID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB2ZW5kb3JWZXJzaW9uTWFwO1xuXG4gIHZhciB2ZXJzaW9uID0gZGVjb2RlQml0c1RvSW50KGJpdFN0cmluZywgMCwgdmVyc2lvbk51bUJpdHMpO1xuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnNlbnRTdHJpbmcgLSBVbmtub3duIHZlcnNpb24gbnVtYmVyIGluIHRoZSBzdHJpbmcgdG8gZGVjb2RlJyk7XG4gIH0gZWxzZSBpZiAoIXZlbmRvclZlcnNpb25NYXBbdmVyc2lvbl0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnNlbnRTdHJpbmcgLSBVbnN1cHBvcnRlZCB2ZXJzaW9uICcgKyB2ZXJzaW9uICsgJyBpbiB0aGUgc3RyaW5nIHRvIGRlY29kZScpO1xuICB9XG5cbiAgdmFyIGZpZWxkcyA9IGRlZmluaXRpb25NYXBbdmVyc2lvbl0uZmllbGRzO1xuXG4gIHZhciBfZGVjb2RlRmllbGRzID0gZGVjb2RlRmllbGRzKHsgaW5wdXQ6IGJpdFN0cmluZywgZmllbGRzOiBmaWVsZHMgfSksXG4gICAgICBkZWNvZGVkT2JqZWN0ID0gX2RlY29kZUZpZWxkcy5kZWNvZGVkT2JqZWN0O1xuXG4gIHJldHVybiBkZWNvZGVkT2JqZWN0O1xufVxuXG4vKipcbiAqIERlY29kZSB0aGUgKFVSTCBzYWZlIEJhc2U2NCkgdmFsdWUgb2YgYSBjb25zZW50IHN0cmluZyBpbnRvIGFuIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gZGVjb2RlRnJvbUJhc2U2NChjb25zZW50U3RyaW5nLCBkZWZpbml0aW9uTWFwKSB7XG4gIC8vIEFkZCBwYWRkaW5nXG4gIHZhciB1bnNhZmUgPSBjb25zZW50U3RyaW5nO1xuICB3aGlsZSAodW5zYWZlLmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICB1bnNhZmUgKz0gJz0nO1xuICB9XG5cbiAgLy8gUmVwbGFjZSBzYWZlIGNoYXJhY3RlcnNcbiAgdW5zYWZlID0gdW5zYWZlLnJlcGxhY2UoLy0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJyk7XG5cbiAgdmFyIGJ5dGVzID0gYmFzZTY0LmRlY29kZSh1bnNhZmUpO1xuXG4gIHZhciBpbnB1dEJpdHMgPSAnJztcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBiaXRTdHJpbmcgPSBieXRlcy5jaGFyQ29kZUF0KGkpLnRvU3RyaW5nKDIpO1xuICAgIGlucHV0Qml0cyArPSBwYWRMZWZ0KGJpdFN0cmluZywgOCAtIGJpdFN0cmluZy5sZW5ndGgpO1xuICB9XG5cbiAgcmV0dXJuIGRlY29kZUNvbnNlbnRTdHJpbmdCaXRWYWx1ZShpbnB1dEJpdHMsIGRlZmluaXRpb25NYXApO1xufVxuXG5mdW5jdGlvbiBkZWNvZGVCaXRzVG9JZHMoYml0U3RyaW5nKSB7XG4gIHJldHVybiBiaXRTdHJpbmcuc3BsaXQoJycpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBiaXQsIGluZGV4KSB7XG4gICAgaWYgKGJpdCA9PT0gJzEnKSB7XG4gICAgICBpZiAoYWNjLmluZGV4T2YoaW5kZXggKyAxKSA9PT0gLTEpIHtcbiAgICAgICAgYWNjLnB1c2goaW5kZXggKyAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFjYztcbiAgfSwgW10pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGFkUmlnaHQ6IHBhZFJpZ2h0LFxuICBwYWRMZWZ0OiBwYWRMZWZ0LFxuICBlbmNvZGVGaWVsZDogZW5jb2RlRmllbGQsXG4gIGVuY29kZURhdGFUb0JpdHM6IGVuY29kZURhdGFUb0JpdHMsXG4gIGVuY29kZUludFRvQml0czogZW5jb2RlSW50VG9CaXRzLFxuICBlbmNvZGVCb29sVG9CaXRzOiBlbmNvZGVCb29sVG9CaXRzLFxuICBlbmNvZGVEYXRlVG9CaXRzOiBlbmNvZGVEYXRlVG9CaXRzLFxuICBlbmNvZGVMYW5ndWFnZVRvQml0czogZW5jb2RlTGFuZ3VhZ2VUb0JpdHMsXG4gIGVuY29kZUxldHRlclRvQml0czogZW5jb2RlTGV0dGVyVG9CaXRzLFxuICBlbmNvZGVUb0Jhc2U2NDogZW5jb2RlVG9CYXNlNjQsXG4gIGRlY29kZUJpdHNUb0lkczogZGVjb2RlQml0c1RvSWRzLFxuICBkZWNvZGVCaXRzVG9JbnQ6IGRlY29kZUJpdHNUb0ludCxcbiAgZGVjb2RlQml0c1RvRGF0ZTogZGVjb2RlQml0c1RvRGF0ZSxcbiAgZGVjb2RlQml0c1RvQm9vbDogZGVjb2RlQml0c1RvQm9vbCxcbiAgZGVjb2RlQml0c1RvTGFuZ3VhZ2U6IGRlY29kZUJpdHNUb0xhbmd1YWdlLFxuICBkZWNvZGVCaXRzVG9MZXR0ZXI6IGRlY29kZUJpdHNUb0xldHRlcixcbiAgZGVjb2RlRnJvbUJhc2U2NDogZGVjb2RlRnJvbUJhc2U2NFxufTsiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTnVtYmVyIG9mIGJpdHMgZm9yIGVuY29kaW5nIHRoZSB2ZXJzaW9uIGludGVnZXJcbiAqIEV4cGVjdGVkIHRvIGJlIHRoZSBzYW1lIGFjcm9zcyB2ZXJzaW9uc1xuICovXG52YXIgdmVyc2lvbk51bUJpdHMgPSA2O1xuXG4vKipcbiAqIERlZmluaXRpb24gb2YgdGhlIGNvbnNlbnQgc3RyaW5nIGVuY29kZWQgZm9ybWF0XG4gKlxuICogRnJvbSBodHRwczovL2dpdGh1Yi5jb20vSW50ZXJhY3RpdmVBZHZlcnRpc2luZ0J1cmVhdS9HRFBSLVRyYW5zcGFyZW5jeS1hbmQtQ29uc2VudC1GcmFtZXdvcmsvYmxvYi9tYXN0ZXIvRHJhZnRfZm9yX1B1YmxpY19Db21tZW50X1RyYW5zcGFyZW5jeSUyMCUyNiUyMENvbnNlbnQlMjBGcmFtZXdvcmslMjAtJTIwY29va2llJTIwYW5kJTIwdmVuZG9yJTIwbGlzdCUyMGZvcm1hdCUyMHNwZWNpZmljYXRpb24lMjB2MS4wYS5wZGZcbiAqL1xudmFyIHZlbmRvclZlcnNpb25NYXAgPSB7XG4gIC8qKlxuICAgKiBWZXJzaW9uIDFcbiAgICovXG4gIDE6IHtcbiAgICB2ZXJzaW9uOiAxLFxuICAgIG1ldGFkYXRhRmllbGRzOiBbJ3ZlcnNpb24nLCAnY3JlYXRlZCcsICdsYXN0VXBkYXRlZCcsICdjbXBJZCcsICdjbXBWZXJzaW9uJywgJ2NvbnNlbnRTY3JlZW4nLCAndmVuZG9yTGlzdFZlcnNpb24nXSxcbiAgICBmaWVsZHM6IFt7IG5hbWU6ICd2ZXJzaW9uJywgdHlwZTogJ2ludCcsIG51bUJpdHM6IDYgfSwgeyBuYW1lOiAnY3JlYXRlZCcsIHR5cGU6ICdkYXRlJywgbnVtQml0czogMzYgfSwgeyBuYW1lOiAnbGFzdFVwZGF0ZWQnLCB0eXBlOiAnZGF0ZScsIG51bUJpdHM6IDM2IH0sIHsgbmFtZTogJ2NtcElkJywgdHlwZTogJ2ludCcsIG51bUJpdHM6IDEyIH0sIHsgbmFtZTogJ2NtcFZlcnNpb24nLCB0eXBlOiAnaW50JywgbnVtQml0czogMTIgfSwgeyBuYW1lOiAnY29uc2VudFNjcmVlbicsIHR5cGU6ICdpbnQnLCBudW1CaXRzOiA2IH0sIHsgbmFtZTogJ2NvbnNlbnRMYW5ndWFnZScsIHR5cGU6ICdsYW5ndWFnZScsIG51bUJpdHM6IDEyIH0sIHsgbmFtZTogJ3ZlbmRvckxpc3RWZXJzaW9uJywgdHlwZTogJ2ludCcsIG51bUJpdHM6IDEyIH0sIHsgbmFtZTogJ3B1cnBvc2VJZEJpdFN0cmluZycsIHR5cGU6ICdiaXRzJywgbnVtQml0czogMjQgfSwgeyBuYW1lOiAnbWF4VmVuZG9ySWQnLCB0eXBlOiAnaW50JywgbnVtQml0czogMTYgfSwgeyBuYW1lOiAnaXNSYW5nZScsIHR5cGU6ICdib29sJywgbnVtQml0czogMSB9LCB7XG4gICAgICBuYW1lOiAndmVuZG9ySWRCaXRTdHJpbmcnLFxuICAgICAgdHlwZTogJ2JpdHMnLFxuICAgICAgbnVtQml0czogZnVuY3Rpb24gbnVtQml0cyhkZWNvZGVkT2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVkT2JqZWN0Lm1heFZlbmRvcklkO1xuICAgICAgfSxcbiAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdG9yKGRlY29kZWRPYmplY3QpIHtcbiAgICAgICAgcmV0dXJuICFkZWNvZGVkT2JqZWN0LmlzUmFuZ2U7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogJ2RlZmF1bHRDb25zZW50JyxcbiAgICAgIHR5cGU6ICdib29sJyxcbiAgICAgIG51bUJpdHM6IDEsXG4gICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRvcihkZWNvZGVkT2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVkT2JqZWN0LmlzUmFuZ2U7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgbmFtZTogJ251bUVudHJpZXMnLFxuICAgICAgbnVtQml0czogMTIsXG4gICAgICB0eXBlOiAnaW50JyxcbiAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdG9yKGRlY29kZWRPYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIGRlY29kZWRPYmplY3QuaXNSYW5nZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiAndmVuZG9yUmFuZ2VMaXN0JyxcbiAgICAgIHR5cGU6ICdsaXN0JyxcbiAgICAgIGxpc3RDb3VudDogZnVuY3Rpb24gbGlzdENvdW50KGRlY29kZWRPYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIGRlY29kZWRPYmplY3QubnVtRW50cmllcztcbiAgICAgIH0sXG4gICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRvcihkZWNvZGVkT2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVkT2JqZWN0LmlzUmFuZ2U7XG4gICAgICB9LFxuICAgICAgZmllbGRzOiBbe1xuICAgICAgICBuYW1lOiAnaXNSYW5nZScsXG4gICAgICAgIHR5cGU6ICdib29sJyxcbiAgICAgICAgbnVtQml0czogMVxuICAgICAgfSwge1xuICAgICAgICBuYW1lOiAnc3RhcnRWZW5kb3JJZCcsXG4gICAgICAgIHR5cGU6ICdpbnQnLFxuICAgICAgICBudW1CaXRzOiAxNlxuICAgICAgfSwge1xuICAgICAgICBuYW1lOiAnZW5kVmVuZG9ySWQnLFxuICAgICAgICB0eXBlOiAnaW50JyxcbiAgICAgICAgbnVtQml0czogMTYsXG4gICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdG9yKGRlY29kZWRPYmplY3QpIHtcbiAgICAgICAgICByZXR1cm4gZGVjb2RlZE9iamVjdC5pc1JhbmdlO1xuICAgICAgICB9XG4gICAgICB9XVxuICAgIH1dXG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB2ZXJzaW9uTnVtQml0czogdmVyc2lvbk51bUJpdHMsXG4gIHZlbmRvclZlcnNpb25NYXA6IHZlbmRvclZlcnNpb25NYXBcbn07IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiY29uc3Qge0NvbnNlbnRTdHJpbmd9ID0gcmVxdWlyZSgnY29uc2VudC1zdHJpbmcnKTtcclxuXHJcbkFkZXF1YS5tb2RlbC5jb25zZW50ID0ge1xyXG4gICAgY21wOiB7fSxcclxuICAgIHZpZXc6IHt9XHJcbn07XHJcblxyXG5BZGVxdWEubW9kZWwuY29uc2VudC5nZXRTZXR0aW5ncyA9IGZ1bmN0aW9uIChmaWx0ZXJzKSB7XHJcbiAgICBsZXQgc2V0dGluZ3MgPSBBZGVxdWEuc3RvcmFnZS5jb25zZW50LnNldHRpbmdzO1xyXG4gICAgaWYgKGZpbHRlcnMud2Vic2l0ZV9pZClcclxuICAgICAgICBzZXR0aW5ncyA9IHNldHRpbmdzLmZpbHRlcihzZXR0aW5nID0+IHNldHRpbmcuaWQud2Vic2l0ZV9pZCA9PT0gZmlsdGVycy53ZWJzaXRlX2lkKTtcclxuICAgIGlmIChmaWx0ZXJzLnZlbmRvcl9pZClcclxuICAgICAgICBzZXR0aW5ncyA9IHNldHRpbmdzLmZpbHRlcihzZXR0aW5nID0+IHNldHRpbmcuaWQudmVuZG9yX2lkID09PSBmaWx0ZXJzLnZlbmRvcl9pZCk7XHJcbiAgICBpZiAoZmlsdGVycy5wdXJwb3NlX2lkKVxyXG4gICAgICAgIHNldHRpbmdzID0gc2V0dGluZ3MuZmlsdGVyKHNldHRpbmcgPT4gc2V0dGluZy5pZC5wdXJwb3NlX2lkID09PSBmaWx0ZXJzLnB1cnBvc2VfaWQpO1xyXG5cclxuICAgIHJldHVybiBzZXR0aW5ncztcclxufTtcclxuXHJcbkFkZXF1YS5tb2RlbC5jb25zZW50LmdldEFsbFNldHRpbmdzID0gZnVuY3Rpb24gKGZpbHRlcnMsIGlkKSB7XHJcbiAgICBjb25zdCBzZXR0aW5ncyA9IEFkZXF1YS5tb2RlbC5jb25zZW50LmdldFNldHRpbmdzKGZpbHRlcnMpO1xyXG4gICAgY29uc3Qgc2V0dGluZ3NNYXBwZWQgPSB7fTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHNldHRpbmcgb2Ygc2V0dGluZ3MpXHJcbiAgICAgICAgc2V0dGluZ3NNYXBwZWRbc2V0dGluZy5pZFtpZF1dID0gc2V0dGluZztcclxuXHJcbiAgICByZXR1cm4gc2V0dGluZ3NNYXBwZWQ7XHJcbn07XHJcblxyXG5BZGVxdWEubW9kZWwuY29uc2VudC5zZXRTZXR0aW5nID0gZnVuY3Rpb24gKHNldHRpbmcpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gQWRlcXVhLnN0b3JhZ2UuY29uc2VudC5zZXR0aW5ncy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmlkLndlYnNpdGVfaWQgPT09IHNldHRpbmcuaWQud2Vic2l0ZV9pZCAmJiBpdGVtLmlkLnB1cnBvc2VfaWQgPT09IHNldHRpbmcuaWQucHVycG9zZV9pZCAmJiBpdGVtLmlkLnZlbmRvcl9pZCA9PT0gc2V0dGluZy5pZC52ZW5kb3JfaWQpO1xyXG4gICAgaWYgKGluZGV4ID09PSAtMSlcclxuICAgICAgICBBZGVxdWEuc3RvcmFnZS5jb25zZW50LnNldHRpbmdzLnB1c2goc2V0dGluZyk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgQWRlcXVhLnN0b3JhZ2UuY29uc2VudC5zZXR0aW5nc1tpbmRleF0gPSBzZXR0aW5nO1xyXG4gICAgQWRlcXVhLnNldFN0b3JhZ2Uoe30pO1xyXG59O1xyXG5cclxuQWRlcXVhLm1vZGVsLmNvbnNlbnQuc2V0Q29uc2VudFN0cmluZyA9IGZ1bmN0aW9uKGNvbnNlbnRTdHJpbmcsIHVybCl7XHJcbiAgICBjb25zdCBjb25zZW50RGF0YSA9IG5ldyBDb25zZW50U3RyaW5nKGNvbnNlbnRTdHJpbmcpO1xyXG4gICAgY29uc2VudERhdGEuc2V0R2xvYmFsVmVuZG9yTGlzdChBZGVxdWEuc3RvcmFnZS5mdWxsVmVuZG9yTGlzdCk7XHJcblxyXG4gICAgY29uc3QgYWxsb3dlZFB1cnBvc2VzID0gY29uc2VudERhdGEuZ2V0UHVycG9zZXNBbGxvd2VkKCk7XHJcbiAgICBjb25zdCBhbGxvd2VkVmVuZG9ycyA9IGNvbnNlbnREYXRhLmdldFZlbmRvcnNBbGxvd2VkKCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBwdXJwb3NlIG9mIEFkZXF1YS5zdG9yYWdlLnB1cnBvc2VMaXN0KSB7XHJcbiAgICAgICAgQWRlcXVhLm1vZGVsLmNvbnNlbnQuc2V0U2V0dGluZyh7XHJcbiAgICAgICAgICAgIGlkOiB7XHJcbiAgICAgICAgICAgICAgICB3ZWJzaXRlX2lkOiBBZGVxdWEuaG9zdG5hbWUodXJsKSxcclxuICAgICAgICAgICAgICAgIHB1cnBvc2VfaWQ6IHB1cnBvc2UuaWQsXHJcbiAgICAgICAgICAgICAgICB2ZW5kb3JfaWQ6IFwiYWxsXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdmFsdWU6IGFsbG93ZWRQdXJwb3Nlcy5pbmRleE9mKHB1cnBvc2UuaWQpID09PSAtMSA/IDEgOiAtMVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IHZlbmRvciBvZiBBZGVxdWEuc3RvcmFnZS52ZW5kb3JMaXN0KSB7XHJcbiAgICAgICAgQWRlcXVhLm1vZGVsLmNvbnNlbnQuc2V0U2V0dGluZyh7XHJcbiAgICAgICAgICAgIGlkOiB7XHJcbiAgICAgICAgICAgICAgICB3ZWJzaXRlX2lkOiBBZGVxdWEuaG9zdG5hbWUodXJsKSxcclxuICAgICAgICAgICAgICAgIHB1cnBvc2VfaWQ6IFwiYWxsXCIsXHJcbiAgICAgICAgICAgICAgICB2ZW5kb3JfaWQ6IHZlbmRvci5pZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB2YWx1ZTogYWxsb3dlZFZlbmRvcnMuaW5kZXhPZih2ZW5kb3IuaWQpID09PSAtMSA/IDEgOiAtMVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn07XHJcblxyXG5BZGVxdWEubW9kZWwuY29uc2VudC5jbXAuZ2V0VmVuZG9yQ29uc2VudHMgPSBmdW5jdGlvbih3ZWJzaXRlSWQsIGNhbGxiYWNrKXtcclxuXHJcbn07XHJcblxyXG5BZGVxdWEubW9kZWwuY29uc2VudC5jbXAuZ2V0Q29uc2VudERhdGEgPSBmdW5jdGlvbiAod2Vic2l0ZUlkLCBjYWxsYmFjaykge1xyXG4gICAgY29uc3QgZGVmYXVsdFNldHRpbmdzID0gQWRlcXVhLm1vZGVsLmNvbnNlbnQuZ2V0U2V0dGluZ3Moe3dlYnNpdGVfaWQ6IFwiYWxsXCJ9KTtcclxuICAgIGNvbnN0IHdlYnNpdGVTZXR0aW5ncyA9IEFkZXF1YS5tb2RlbC5jb25zZW50LmdldFNldHRpbmdzKHt3ZWJzaXRlX2lkOiB3ZWJzaXRlSWR9KTtcclxuXHJcbiAgICBsZXQgYWxsb3dlZFB1cnBvc2VJZHMgPSBbXTtcclxuICAgIGNvbnN0IGZvcmJpZGRlblB1cnBvc2VJZHMgPSBbXTtcclxuXHJcbiAgICBsZXQgYWxsb3dlZFZlbmRvcklkcyA9IFtdO1xyXG4gICAgY29uc3QgZm9yYmlkZGVuVmVuZG9ySWRzID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCBzZXR0aW5nIG9mIHdlYnNpdGVTZXR0aW5ncykge1xyXG4gICAgICAgIGlmIChzZXR0aW5nLmlkLnB1cnBvc2VfaWQgPT09IFwiYWxsXCIgJiYgc2V0dGluZy5pZC52ZW5kb3JfaWQgIT09IFwiYWxsXCIpIHtcclxuICAgICAgICAgICAgaWYgKGFsbG93ZWRWZW5kb3JJZHMuaW5kZXhPZihzZXR0aW5nLmlkLnZlbmRvcl9pZCkgPT09IC0xICYmIGZvcmJpZGRlblZlbmRvcklkcy5pbmRleE9mKHNldHRpbmcuaWQudmVuZG9yX2lkKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5nLnZhbHVlID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbG93ZWRWZW5kb3JJZHMucHVzaChzZXR0aW5nLmlkLnZlbmRvcl9pZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcmJpZGRlblZlbmRvcklkcy5wdXNoKHNldHRpbmcuaWQudmVuZG9yX2lkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoc2V0dGluZy5pZC5wdXJwb3NlX2lkICE9PSBcImFsbFwiICYmIHNldHRpbmcuaWQudmVuZG9yX2lkID09PSBcImFsbFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChhbGxvd2VkUHVycG9zZUlkcy5pbmRleE9mKHNldHRpbmcuaWQucHVycG9zZV9pZCkgPT09IC0xICYmIGZvcmJpZGRlblB1cnBvc2VJZHMuaW5kZXhPZihzZXR0aW5nLmlkLnB1cnBvc2VfaWQpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmcudmFsdWUgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dlZFB1cnBvc2VJZHMucHVzaChzZXR0aW5nLmlkLnB1cnBvc2VfaWQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JiaWRkZW5QdXJwb3NlSWRzLnB1c2goc2V0dGluZy5pZC5wdXJwb3NlX2lkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChkZWZhdWx0U2V0dGluZ3MuaW5kZXhPZihzZXR0aW5nKSA9PT0gLTEpXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0U2V0dGluZ3MucHVzaChzZXR0aW5nKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IHNldHRpbmcgb2YgZGVmYXVsdFNldHRpbmdzKSB7XHJcbiAgICAgICAgaWYgKHNldHRpbmcuaWQucHVycG9zZV9pZCA9PT0gXCJhbGxcIiAmJiBzZXR0aW5nLmlkLnZlbmRvcl9pZCAhPT0gXCJhbGxcIikge1xyXG4gICAgICAgICAgICBpZiAoYWxsb3dlZFZlbmRvcklkcy5pbmRleE9mKHNldHRpbmcuaWQudmVuZG9yX2lkKSA9PT0gLTEgJiYgZm9yYmlkZGVuVmVuZG9ySWRzLmluZGV4T2Yoc2V0dGluZy5pZC52ZW5kb3JfaWQpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmcudmFsdWUgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dlZFZlbmRvcklkcy5wdXNoKHNldHRpbmcuaWQudmVuZG9yX2lkKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yYmlkZGVuVmVuZG9ySWRzLnB1c2goc2V0dGluZy5pZC52ZW5kb3JfaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChzZXR0aW5nLmlkLnB1cnBvc2VfaWQgIT09IFwiYWxsXCIgJiYgc2V0dGluZy5pZC52ZW5kb3JfaWQgPT09IFwiYWxsXCIpIHtcclxuICAgICAgICAgICAgaWYgKGFsbG93ZWRQdXJwb3NlSWRzLmluZGV4T2Yoc2V0dGluZy5pZC5wdXJwb3NlX2lkKSA9PT0gLTEgJiYgZm9yYmlkZGVuUHVycG9zZUlkcy5pbmRleE9mKHNldHRpbmcuaWQucHVycG9zZV9pZCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZy52YWx1ZSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGxvd2VkUHVycG9zZUlkcy5wdXNoKHNldHRpbmcuaWQucHVycG9zZV9pZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcmJpZGRlblB1cnBvc2VJZHMucHVzaChzZXR0aW5nLmlkLnB1cnBvc2VfaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChzZXR0aW5nLmlkLnB1cnBvc2VfaWQgPT09IFwiYWxsXCIgJiYgc2V0dGluZy5pZC52ZW5kb3JfaWQgPT09IFwiYWxsXCIpIHtcclxuICAgICAgICAgICAgaWYgKHNldHRpbmcudmFsdWUgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHB1cnBvc2VJZCBvZiBBZGVxdWEuc3RvcmFnZS5wdXJwb3NlTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbGxvd2VkUHVycG9zZUlkcy5pbmRleE9mKHB1cnBvc2VJZCkgPT09IC0xICYmIGZvcmJpZGRlblB1cnBvc2VJZHMuaW5kZXhPZihwdXJwb3NlSWQpID09PSAtMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dlZFB1cnBvc2VJZHMucHVzaChwdXJwb3NlSWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB2ZW5kb3JJZCBvZiBBZGVxdWEuc3RvcmFnZS52ZW5kb3JMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFsbG93ZWRWZW5kb3JJZHMuaW5kZXhPZih2ZW5kb3JJZCkgPT09IC0xICYmIGZvcmJpZGRlblZlbmRvcklkcy5pbmRleE9mKHZlbmRvcklkKSA9PT0gLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93ZWRWZW5kb3JJZHMucHVzaCh2ZW5kb3JJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHB1cnBvc2VJZCBvZiBBZGVxdWEuc3RvcmFnZS5wdXJwb3NlTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbGxvd2VkUHVycG9zZUlkcy5pbmRleE9mKHB1cnBvc2VJZCkgPT09IC0xICYmIGZvcmJpZGRlblB1cnBvc2VJZHMuaW5kZXhPZihwdXJwb3NlSWQpID09PSAtMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yYmlkZGVuUHVycG9zZUlkcy5wdXNoKHB1cnBvc2VJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHZlbmRvcklkIG9mIEFkZXF1YS5zdG9yYWdlLnZlbmRvckxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWxsb3dlZFZlbmRvcklkcy5pbmRleE9mKHZlbmRvcklkKSA9PT0gLTEgJiYgZm9yYmlkZGVuVmVuZG9ySWRzLmluZGV4T2YodmVuZG9ySWQpID09PSAtMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yYmlkZGVuVmVuZG9ySWRzLnB1c2godmVuZG9ySWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFsbG93ZWRWZW5kb3JJZHMgPSBhbGxvd2VkVmVuZG9ySWRzLm1hcChpZCA9PiBwYXJzZUludChpZCkpO1xyXG4gICAgYWxsb3dlZFB1cnBvc2VJZHMgPSBhbGxvd2VkUHVycG9zZUlkcy5tYXAoaWQgPT4gcGFyc2VJbnQoaWQpKTtcclxuXHJcbiAgICBBZGVxdWEuQVBJLnRhYnMucXVlcnkoe1xyXG4gICAgICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgICAgICBsYXN0Rm9jdXNlZFdpbmRvdzogdHJ1ZVxyXG4gICAgfSwgKHRhYnMpID0+IHtcclxuICAgICAgICBjb25zdCB0YWIgPSB0YWJzWzBdIHx8IHt9O1xyXG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gQWRlcXVhLm1vZGVsLmNvbnNlbnQuZ2V0U2V0dGluZ3Moe3dlYnNpdGVfaWQ6IEFkZXF1YS5ob3N0bmFtZSh0YWIudXJsIHx8IFwibm91cmxcIil9KTtcclxuXHJcbiAgICAgICAgZm9yKGNvbnN0IGluZGV4IGluIHNldHRpbmdzKXtcclxuICAgICAgICAgICAgc2V0dGluZ3NbaW5kZXhdLmlkLndlYnNpdGVfaWQgPSBBZGVxdWEuaG9zdG5hbWUodGFiLnVybCB8fCBcIm5vdXJsXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY29uc2VudERhdGEgPSBuZXcgQ29uc2VudFN0cmluZygpO1xyXG5cclxuICAgICAgICBjb25zZW50RGF0YS5zZXRHbG9iYWxWZW5kb3JMaXN0KEFkZXF1YS5zdG9yYWdlLmZ1bGxWZW5kb3JMaXN0KTtcclxuXHJcbiAgICAgICAgY29uc2VudERhdGEuc2V0Q21wSWQoMSk7XHJcbiAgICAgICAgY29uc2VudERhdGEuc2V0Q21wVmVyc2lvbigxKTtcclxuICAgICAgICBjb25zZW50RGF0YS5zZXRDb25zZW50U2NyZWVuKDEpO1xyXG4gICAgICAgIGNvbnNlbnREYXRhLnNldENvbnNlbnRMYW5ndWFnZSgnZnInKTtcclxuICAgICAgICBjb25zZW50RGF0YS5zZXRQdXJwb3Nlc0FsbG93ZWQoYWxsb3dlZFB1cnBvc2VJZHMpO1xyXG4gICAgICAgIGNvbnNlbnREYXRhLnNldFZlbmRvcnNBbGxvd2VkKGFsbG93ZWRWZW5kb3JJZHMpO1xyXG5cclxuICAgICAgICBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgIGNvbnNlbnRTdHJpbmc6IGNvbnNlbnREYXRhLmdldENvbnNlbnRTdHJpbmcoKSxcclxuICAgICAgICAgICAgYWxsb3dlZFZlbmRvcnM6IGFsbG93ZWRWZW5kb3JJZHMsXHJcbiAgICAgICAgICAgIGFsbG93ZWRQdXJwb3NlczogYWxsb3dlZFB1cnBvc2VJZHMsXHJcbiAgICAgICAgICAgIHZlbmRvckxpc3Q6IEFkZXF1YS5zdG9yYWdlLnZlbmRvckxpc3QsXHJcbiAgICAgICAgICAgIHB1cnBvc2VMaXN0OiBBZGVxdWEuc3RvcmFnZS5wdXJwb3NlTGlzdCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHNldHRpbmdzXHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG59XHJcbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==