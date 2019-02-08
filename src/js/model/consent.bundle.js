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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jhc2UtNjQvYmFzZTY0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb25zZW50LXN0cmluZy9kaXN0L2NvbnNlbnQtc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb25zZW50LXN0cmluZy9kaXN0L2RlY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29uc2VudC1zdHJpbmcvZGlzdC9lbmNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbnNlbnQtc3RyaW5nL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvbnNlbnQtc3RyaW5nL2Rpc3QvdXRpbHMvYml0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29uc2VudC1zdHJpbmcvZGlzdC91dGlscy9kZWZpbml0aW9ucy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVsL2NvbnNlbnQuanMiXSwibmFtZXMiOlsicm9vdCIsImZyZWVFeHBvcnRzIiwiZXhwb3J0cyIsImZyZWVNb2R1bGUiLCJtb2R1bGUiLCJmcmVlR2xvYmFsIiwiZ2xvYmFsIiwid2luZG93IiwiSW52YWxpZENoYXJhY3RlckVycm9yIiwibWVzc2FnZSIsInByb3RvdHlwZSIsIkVycm9yIiwibmFtZSIsImVycm9yIiwiVEFCTEUiLCJSRUdFWF9TUEFDRV9DSEFSQUNURVJTIiwiZGVjb2RlIiwiaW5wdXQiLCJTdHJpbmciLCJyZXBsYWNlIiwibGVuZ3RoIiwidGVzdCIsImJpdENvdW50ZXIiLCJiaXRTdG9yYWdlIiwiYnVmZmVyIiwib3V0cHV0IiwicG9zaXRpb24iLCJpbmRleE9mIiwiY2hhckF0IiwiZnJvbUNoYXJDb2RlIiwiZW5jb2RlIiwicGFkZGluZyIsImEiLCJiIiwiYyIsImQiLCJjaGFyQ29kZUF0IiwiYmFzZTY0IiwiZGVmaW5lIiwiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwib2JqIiwiY29uc3RydWN0b3IiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwiQ29uc3RydWN0b3IiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIlR5cGVFcnJvciIsIl9yZXF1aXJlIiwicmVxdWlyZSIsImVuY29kZUNvbnNlbnRTdHJpbmciLCJfZ2V0TWF4VmVuZG9ySWQiLCJnZXRNYXhWZW5kb3JJZCIsImVuY29kZVZlbmRvcklkc1RvQml0cyIsImVuY29kZVB1cnBvc2VJZHNUb0JpdHMiLCJfcmVxdWlyZTIiLCJkZWNvZGVDb25zZW50U3RyaW5nIiwiX3JlcXVpcmUzIiwidmVuZG9yVmVyc2lvbk1hcCIsImNvbnNlbnRMYW5ndWFnZVJlZ2V4cCIsIkNvbnNlbnRTdHJpbmciLCJiYXNlU3RyaW5nIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiY3JlYXRlZCIsIkRhdGUiLCJsYXN0VXBkYXRlZCIsInZlcnNpb24iLCJ2ZW5kb3JMaXN0IiwidmVuZG9yTGlzdFZlcnNpb24iLCJjbXBJZCIsImNtcFZlcnNpb24iLCJjb25zZW50U2NyZWVuIiwiY29uc2VudExhbmd1YWdlIiwiYWxsb3dlZFB1cnBvc2VJZHMiLCJhbGxvd2VkVmVuZG9ySWRzIiwiYXNzaWduIiwidmFsdWUiLCJnZXRDb25zZW50U3RyaW5nIiwidXBkYXRlRGF0ZSIsImdldFZlcnNpb24iLCJ2ZW5kb3JzIiwiZ2V0UGFyc2VkVmVuZG9yQ29uc2VudHMiLCJnZXRQYXJzZWRQdXJwb3NlQ29uc2VudHMiLCJwdXJwb3NlcyIsImdldE1ldGFkYXRhU3RyaW5nIiwiZ2V0VmVuZG9yTGlzdFZlcnNpb24iLCJzZXRHbG9iYWxWZW5kb3JMaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwiZmVhdHVyZXMiLCJzbGljZSIsInNvcnQiLCJmaXJzdFZlbmRvciIsInNlY29uZFZlbmRvciIsImlkIiwic2V0Q21wSWQiLCJnZXRDbXBJZCIsInNldENtcFZlcnNpb24iLCJnZXRDbXBWZXJzaW9uIiwic2V0Q29uc2VudFNjcmVlbiIsInNjcmVlbklkIiwiZ2V0Q29uc2VudFNjcmVlbiIsInNldENvbnNlbnRMYW5ndWFnZSIsImxhbmd1YWdlIiwiZ2V0Q29uc2VudExhbmd1YWdlIiwic2V0UHVycG9zZXNBbGxvd2VkIiwicHVycG9zZUlkcyIsImdldFB1cnBvc2VzQWxsb3dlZCIsInNldFB1cnBvc2VBbGxvd2VkIiwicHVycG9zZUlkIiwicHVycG9zZUluZGV4IiwicHVzaCIsInNwbGljZSIsImlzUHVycG9zZUFsbG93ZWQiLCJzZXRWZW5kb3JzQWxsb3dlZCIsInZlbmRvcklkcyIsImdldFZlbmRvcnNBbGxvd2VkIiwic2V0VmVuZG9yQWxsb3dlZCIsInZlbmRvcklkIiwidmVuZG9ySW5kZXgiLCJpc1ZlbmRvckFsbG93ZWQiLCJkZWNvZGVNZXRhZGF0YVN0cmluZyIsImVuY29kZWRNZXRhZGF0YSIsImRlY29kZWRTdHJpbmciLCJtZXRhZGF0YSIsIm1ldGFkYXRhRmllbGRzIiwiZm9yRWFjaCIsImZpZWxkIiwiZGVjb2RlQml0c1RvSWRzIiwiZGVjb2RlRnJvbUJhc2U2NCIsImNvbnNlbnRTdHJpbmciLCJfZGVjb2RlRnJvbUJhc2UiLCJwdXJwb3NlSWRCaXRTdHJpbmciLCJtYXhWZW5kb3JJZCIsImlzUmFuZ2UiLCJkZWZhdWx0Q29uc2VudCIsInZlbmRvcklkQml0U3RyaW5nIiwidmVuZG9yUmFuZ2VMaXN0IiwiY29uc2VudFN0cmluZ0RhdGEiLCJpZE1hcCIsInJlZHVjZSIsImFjYyIsIl9yZWYiLCJzdGFydFZlbmRvcklkIiwiZW5kVmVuZG9ySWQiLCJsYXN0VmVuZG9ySWQiLCJfZXh0ZW5kcyIsInNvdXJjZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImVuY29kZVRvQmFzZTY0IiwicGFkUmlnaHQiLCJ2ZW5kb3JTdHJpbmciLCJNYXRoIiwibWF4IiwiU2V0IiwibWF4UHVycG9zZUlkIiwiX2kiLCJwdXJwb3NlU3RyaW5nIiwiY29udmVydFZlbmRvcnNUb1JhbmdlcyIsInJhbmdlIiwicmFuZ2VzIiwiaWRzSW5MaXN0IiwibWFwIiwidmVuZG9yIiwiaW5kZXgiLCJzaGlmdCIsInBvcCIsImNvbnNlbnREYXRhIiwiX2NvbnNlbnREYXRhJHZlbmRvckxpIiwiX3ZlbmRvckxpc3QkdmVuZG9ycyIsIl92ZW5kb3JMaXN0JHB1cnBvc2VzIiwibm9SYW5nZXNEYXRhIiwicmFuZ2VzRGF0YSIsIm51bUVudHJpZXMiLCJ2ZXJzaW9uTnVtQml0cyIsInJlcGVhdCIsImNvdW50Iiwic3RyaW5nIiwicGFkU3RyaW5nIiwicGFkTGVmdCIsImVuY29kZUludFRvQml0cyIsIm51bWJlciIsIm51bUJpdHMiLCJiaXRTdHJpbmciLCJpc05hTiIsInBhcnNlSW50IiwidG9TdHJpbmciLCJzdWJzdHJpbmciLCJlbmNvZGVCb29sVG9CaXRzIiwiZW5jb2RlRGF0ZVRvQml0cyIsImRhdGUiLCJnZXRUaW1lIiwiZW5jb2RlTGV0dGVyVG9CaXRzIiwibGV0dGVyIiwidG9VcHBlckNhc2UiLCJlbmNvZGVMYW5ndWFnZVRvQml0cyIsImRlY29kZUJpdHNUb0ludCIsInN0YXJ0Iiwic3Vic3RyIiwiZGVjb2RlQml0c1RvRGF0ZSIsImRlY29kZUJpdHNUb0Jvb2wiLCJkZWNvZGVCaXRzVG9MZXR0ZXIiLCJsZXR0ZXJDb2RlIiwidG9Mb3dlckNhc2UiLCJkZWNvZGVCaXRzVG9MYW5ndWFnZSIsImxhbmd1YWdlQml0U3RyaW5nIiwiZW5jb2RlRmllbGQiLCJ0eXBlIiwiZW5jb2RlciIsInZhbGlkYXRvciIsImJpdENvdW50IiwiaW5wdXRWYWx1ZSIsImZpZWxkVmFsdWUiLCJsaXN0VmFsdWUiLCJlbmNvZGVGaWVsZHMiLCJmaWVsZHMiLCJfcmVmMiIsImRlY29kZUZpZWxkIiwiX3JlZjMiLCJzdGFydFBvc2l0aW9uIiwiZGVjb2RlciIsImxpc3RDb3VudCIsIm5ld1Bvc2l0aW9uIiwiZGVjb2RlTGlzdCIsImxpc3RFbnRyeUNvdW50IiwiZGVjb2RlZEZpZWxkcyIsImRlY29kZUZpZWxkcyIsImRlY29kZWRPYmplY3QiLCJfcmVmNCIsIl9yZWY0JHN0YXJ0UG9zaXRpb24iLCJfZGVjb2RlRmllbGQiLCJlbmNvZGVEYXRhVG9CaXRzIiwiZGF0YSIsImRlZmluaXRpb25NYXAiLCJiaW5hcnlWYWx1ZSIsInBhZGRlZEJpbmFyeVZhbHVlIiwiYnl0ZXMiLCJkZWNvZGVDb25zZW50U3RyaW5nQml0VmFsdWUiLCJfZGVjb2RlRmllbGRzIiwidW5zYWZlIiwiaW5wdXRCaXRzIiwic3BsaXQiLCJiaXQiLCJnIiwiRnVuY3Rpb24iLCJlIiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJjaGlsZHJlbiIsImdldCIsImwiLCJBZGVxdWEiLCJtb2RlbCIsImNvbnNlbnQiLCJjbXAiLCJ2aWV3IiwiZ2V0U2V0dGluZ3MiLCJmaWx0ZXJzIiwic2V0dGluZ3MiLCJzdG9yYWdlIiwid2Vic2l0ZV9pZCIsImZpbHRlciIsInNldHRpbmciLCJ2ZW5kb3JfaWQiLCJwdXJwb3NlX2lkIiwiZ2V0QWxsU2V0dGluZ3MiLCJzZXR0aW5nc01hcHBlZCIsInNldFNldHRpbmciLCJmaW5kSW5kZXgiLCJpdGVtIiwic2V0U3RvcmFnZSIsInNldENvbnNlbnQiLCJhbGxvd2VkUHVycG9zZXMiLCJhbGxvd2VkVmVuZG9ycyIsInVybCIsInB1cnBvc2UiLCJwdXJwb3NlTGlzdCIsImhvc3RuYW1lIiwiYWNjZXB0QWxsIiwiYWRlcXVhUHVycG9zZUxpc3QiLCJzZXRDb25zZW50U3RyaW5nIiwiZnVsbFZlbmRvckxpc3QiLCJnZXRWZW5kb3JDb25zZW50cyIsIndlYnNpdGVJZCIsImNhbGxiYWNrIiwiZ2V0Q29uc2VudERhdGEiLCJkZWZhdWx0U2V0dGluZ3MiLCJ3ZWJzaXRlU2V0dGluZ3MiLCJmb3JiaWRkZW5QdXJwb3NlSWRzIiwiZm9yYmlkZGVuVmVuZG9ySWRzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTs7QUFBRSxXQUFTQSxJQUFULEVBQWU7QUFFaEI7QUFDQSxNQUFJQyxXQUFXLEdBQUcsU0FBOEJDLE9BQWhELENBSGdCLENBS2hCOztBQUNBLE1BQUlDLFVBQVUsR0FBRyxTQUE2QkMsTUFBN0IsSUFDaEJBLE1BQU0sQ0FBQ0YsT0FBUCxJQUFrQkQsV0FERixJQUNpQkcsTUFEbEMsQ0FOZ0IsQ0FTaEI7QUFDQTs7QUFDQSxNQUFJQyxVQUFVLEdBQUcsT0FBT0MsTUFBUCxJQUFpQixRQUFqQixJQUE2QkEsTUFBOUM7O0FBQ0EsTUFBSUQsVUFBVSxD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OUQsT0FBakIsQ0FBeUIwRyxRQUF6QixNQUF1QyxDQUFDLENBQXhDLElBQTZDNkssa0JBQWtCLENBQUN2UixPQUFuQixDQUEyQjBHLFFBQTNCLE1BQXlDLENBQUMsQ0FBM0YsRUFDSTZLLGtCQUFrQixDQUFDcEwsSUFBbkIsQ0FBd0JPLFFBQXhCO0FBQ1A7QUFDSjtBQUNKO0FBQ0o7O0FBRUQ1QyxrQkFBZ0IsR0FBR0EsZ0JBQWdCLENBQUN5RixHQUFqQixDQUFxQnJFLEVBQUUsSUFBSTRGLFFBQVEsQ0FBQzVGLEVBQUQsQ0FBbkMsQ0FBbkI7QUFDQXJCLG1CQUFpQixHQUFHQSxpQkFBaUIsQ0FBQzBGLEdBQWxCLENBQXNCckUsRUFBRSxJQUFJNEYsUUFBUSxDQUFDNUYsRUFBRCxDQUFwQyxDQUFwQixDQTFFcUUsQ0E0RXJFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFHLE9BQU9nTSxRQUFQLEtBQW9CLFVBQXZCLEVBQ0FBLFFBQVEsQ0FBQztBQUNMO0FBQ0FYLGtCQUFjLEVBQUV6TSxnQkFGWDtBQUdMd00sbUJBQWUsRUFBRXpNLGlCQUhaLENBSUw7O0FBSkssR0FBRCxDQUFSO0FBT0EsU0FBT0EsaUJBQVAsQ0F6R3FFLENBMEdyRTtBQUNILENBM0dELEMiLCJmaWxlIjoiY29uc2VudC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9tb2RlbC9jb25zZW50LmpzXCIpO1xuIiwiLyohIGh0dHA6Ly9tdGhzLmJlL2Jhc2U2NCB2MC4xLjAgYnkgQG1hdGhpYXMgfCBNSVQgbGljZW5zZSAqL1xuOyhmdW5jdGlvbihyb290KSB7XG5cblx0Ly8gRGV0ZWN0IGZyZWUgdmFyaWFibGVzIGBleHBvcnRzYC5cblx0dmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cztcblxuXHQvLyBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC5cblx0dmFyIGZyZWVNb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJlxuXHRcdG1vZHVsZS5leHBvcnRzID09IGZyZWVFeHBvcnRzICYmIG1vZHVsZTtcblxuXHQvLyBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCwgZnJvbSBOb2RlLmpzIG9yIEJyb3dzZXJpZmllZCBjb2RlLCBhbmQgdXNlXG5cdC8vIGl0IGFzIGByb290YC5cblx0dmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbDtcblx0aWYgKGZyZWVHbG9iYWwuZ2xvYmFsID09PSBmcmVlR2xvYmFsIHx8IGZyZWVHbG9iYWwud2luZG93ID09PSBmcmVlR2xvYmFsKSB7XG5cdFx0cm9vdCA9IGZyZWVHbG9iYWw7XG5cdH1cblxuXHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuXHR2YXIgSW52YWxpZENoYXJhY3RlckVycm9yID0gZnVuY3Rpb24obWVzc2FnZSkge1xuXHRcdHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG5cdH07XG5cdEludmFsaWRDaGFyYWN0ZXJFcnJvci5wcm90b3R5cGUgPSBuZXcgRXJyb3I7XG5cdEludmFsaWRDaGFyYWN0ZXJFcnJvci5wcm90b3R5cGUubmFtZSA9ICdJbnZhbGlkQ2hhcmFjdGVyRXJyb3InO1xuXG5cdHZhciBlcnJvciA9IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcblx0XHQvLyBOb3RlOiB0aGUgZXJyb3IgbWVzc2FnZXMgdXNlZCB0aHJvdWdob3V0IHRoaXMgZmlsZSBtYXRjaCB0aG9zZSB1c2VkIGJ5XG5cdFx0Ly8gdGhlIG5hdGl2ZSBgYXRvYmAvYGJ0b2FgIGltcGxlbWVudGF0aW9uIGluIENocm9taXVtLlxuXHRcdHRocm93IG5ldyBJbnZhbGlkQ2hhcmFjdGVyRXJyb3IobWVzc2FnZSk7XG5cdH07XG5cblx0dmFyIFRBQkxFID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xuXHQvLyBodHRwOi8vd2hhdHdnLm9yZy9odG1sL2NvbW1vbi1taWNyb3N5bnRheGVzLmh0bWwjc3BhY2UtY2hhcmFjdGVyXG5cdHZhciBSRUdFWF9TUEFDRV9DSEFSQUNURVJTID0gL1tcXHRcXG5cXGZcXHIgXS9nO1xuXG5cdC8vIGBkZWNvZGVgIGlzIGRlc2lnbmVkIHRvIGJlIGZ1bGx5IGNvbXBhdGlibGUgd2l0aCBgYXRvYmAgYXMgZGVzY3JpYmVkIGluIHRoZVxuXHQvLyBIVE1MIFN0YW5kYXJkLiBodHRwOi8vd2hhdHdnLm9yZy9odG1sL3dlYmFwcGFwaXMuaHRtbCNkb20td2luZG93YmFzZTY0LWF0b2Jcblx0Ly8gVGhlIG9wdGltaXplZCBiYXNlNjQtZGVjb2RpbmcgYWxnb3JpdGhtIHVzZWQgaXMgYmFzZWQgb24gQGF0a+KAmXMgZXhjZWxsZW50XG5cdC8vIGltcGxlbWVudGF0aW9uLiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9hdGsvMTAyMDM5NlxuXHR2YXIgZGVjb2RlID0gZnVuY3Rpb24oaW5wdXQpIHtcblx0XHRpbnB1dCA9IFN0cmluZyhpbnB1dClcblx0XHRcdC5yZXBsYWNlKFJFR0VYX1NQQUNFX0NIQVJBQ1RFUlMsICcnKTtcblx0XHR2YXIgbGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuXHRcdGlmIChsZW5ndGggJSA0ID09IDApIHtcblx0XHRcdGlucHV0ID0gaW5wdXQucmVwbGFjZSgvPT0/JC8sICcnKTtcblx0XHRcdGxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcblx0XHR9XG5cdFx0aWYgKFxuXHRcdFx0bGVuZ3RoICUgNCA9PSAxIHx8XG5cdFx0XHQvLyBodHRwOi8vd2hhdHdnLm9yZy9DI2FscGhhbnVtZXJpYy1hc2NpaS1jaGFyYWN0ZXJzXG5cdFx0XHQvW14rYS16QS1aMC05L10vLnRlc3QoaW5wdXQpXG5cdFx0KSB7XG5cdFx0XHRlcnJvcihcblx0XHRcdFx0J0ludmFsaWQgY2hhcmFjdGVyOiB0aGUgc3RyaW5nIHRvIGJlIGRlY29kZWQgaXMgbm90IGNvcnJlY3RseSBlbmNvZGVkLidcblx0XHRcdCk7XG5cdFx0fVxuXHRcdHZhciBiaXRDb3VudGVyID0gMDtcblx0XHR2YXIgYml0U3RvcmFnZTtcblx0XHR2YXIgYnVmZmVyO1xuXHRcdHZhciBvdXRwdXQgPSAnJztcblx0XHR2YXIgcG9zaXRpb24gPSAtMTtcblx0XHR3aGlsZSAoKytwb3NpdGlvbiA8IGxlbmd0aCkge1xuXHRcdFx0YnVmZmVyID0gVEFCTEUuaW5kZXhPZihpbnB1dC5jaGFyQXQocG9zaXRpb24pKTtcblx0XHRcdGJpdFN0b3JhZ2UgPSBiaXRDb3VudGVyICUgNCA/IGJpdFN0b3JhZ2UgKiA2NCArIGJ1ZmZlciA6IGJ1ZmZlcjtcblx0XHRcdC8vIFVubGVzcyB0aGlzIGlzIHRoZSBmaXJzdCBvZiBhIGdyb3VwIG9mIDQgY2hhcmFjdGVyc+KAplxuXHRcdFx0aWYgKGJpdENvdW50ZXIrKyAlIDQpIHtcblx0XHRcdFx0Ly8g4oCmY29udmVydCB0aGUgZmlyc3QgOCBiaXRzIHRvIGEgc2luZ2xlIEFTQ0lJIGNoYXJhY3Rlci5cblx0XHRcdFx0b3V0cHV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoXG5cdFx0XHRcdFx0MHhGRiAmIGJpdFN0b3JhZ2UgPj4gKC0yICogYml0Q291bnRlciAmIDYpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBvdXRwdXQ7XG5cdH07XG5cblx0Ly8gYGVuY29kZWAgaXMgZGVzaWduZWQgdG8gYmUgZnVsbHkgY29tcGF0aWJsZSB3aXRoIGBidG9hYCBhcyBkZXNjcmliZWQgaW4gdGhlXG5cdC8vIEhUTUwgU3RhbmRhcmQ6IGh0dHA6Ly93aGF0d2cub3JnL2h0bWwvd2ViYXBwYXBpcy5odG1sI2RvbS13aW5kb3diYXNlNjQtYnRvYVxuXHR2YXIgZW5jb2RlID0gZnVuY3Rpb24oaW5wdXQpIHtcblx0XHRpbnB1dCA9IFN0cmluZyhpbnB1dCk7XG5cdFx0aWYgKC9bXlxcMC1cXHhGRl0vLnRlc3QoaW5wdXQpKSB7XG5cdFx0XHQvLyBOb3RlOiBubyBuZWVkIHRvIHNwZWNpYWwtY2FzZSBhc3RyYWwgc3ltYm9scyBoZXJlLCBhcyBzdXJyb2dhdGVzIGFyZVxuXHRcdFx0Ly8gbWF0Y2hlZCwgYW5kIHRoZSBpbnB1dCBpcyBzdXBwb3NlZCB0byBvbmx5IGNvbnRhaW4gQVNDSUkgYW55d2F5LlxuXHRcdFx0ZXJyb3IoXG5cdFx0XHRcdCdUaGUgc3RyaW5nIHRvIGJlIGVuY29kZWQgY29udGFpbnMgY2hhcmFjdGVycyBvdXRzaWRlIG9mIHRoZSAnICtcblx0XHRcdFx0J0xhdGluMSByYW5nZS4nXG5cdFx0XHQpO1xuXHRcdH1cblx0XHR2YXIgcGFkZGluZyA9IGlucHV0Lmxlbmd0aCAlIDM7XG5cdFx0dmFyIG91dHB1dCA9ICcnO1xuXHRcdHZhciBwb3NpdGlvbiA9IC0xO1xuXHRcdHZhciBhO1xuXHRcdHZhciBiO1xuXHRcdHZhciBjO1xuXHRcdHZhciBkO1xuXHRcdHZhciBidWZmZXI7XG5cdFx0Ly8gTWFrZSBzdXJlIGFueSBwYWRkaW5nIGlzIGhhbmRsZWQgb3V0c2lkZSBvZiB0aGUgbG9vcC5cblx0XHR2YXIgbGVuZ3RoID0gaW5wdXQubGVuZ3RoIC0gcGFkZGluZztcblxuXHRcdHdoaWxlICgrK3Bvc2l0aW9uIDwgbGVuZ3RoKSB7XG5cdFx0XHQvLyBSZWFkIHRocmVlIGJ5dGVzLCBpLmUuIDI0IGJpdHMuXG5cdFx0XHRhID0gaW5wdXQuY2hhckNvZGVBdChwb3NpdGlvbikgPDwgMTY7XG5cdFx0XHRiID0gaW5wdXQuY2hhckNvZGVBdCgrK3Bvc2l0aW9uKSA8PCA4O1xuXHRcdFx0YyA9IGlucHV0LmNoYXJDb2RlQXQoKytwb3NpdGlvbik7XG5cdFx0XHRidWZmZXIgPSBhICsgYiArIGM7XG5cdFx0XHQvLyBUdXJuIHRoZSAyNCBiaXRzIGludG8gZm91ciBjaHVua3Mgb2YgNiBiaXRzIGVhY2gsIGFuZCBhcHBlbmQgdGhlXG5cdFx0XHQvLyBtYXRjaGluZyBjaGFyYWN0ZXIgZm9yIGVhY2ggb2YgdGhlbSB0byB0aGUgb3V0cHV0LlxuXHRcdFx0b3V0cHV0ICs9IChcblx0XHRcdFx0VEFCTEUuY2hhckF0KGJ1ZmZlciA+PiAxOCAmIDB4M0YpICtcblx0XHRcdFx0VEFCTEUuY2hhckF0KGJ1ZmZlciA+PiAxMiAmIDB4M0YpICtcblx0XHRcdFx0VEFCTEUuY2hhckF0KGJ1ZmZlciA+PiA2ICYgMHgzRikgK1xuXHRcdFx0XHRUQUJMRS5jaGFyQXQoYnVmZmVyICYgMHgzRilcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0aWYgKHBhZGRpbmcgPT0gMikge1xuXHRcdFx0YSA9IGlucHV0LmNoYXJDb2RlQXQocG9zaXRpb24pIDw8IDg7XG5cdFx0XHRiID0gaW5wdXQuY2hhckNvZGVBdCgrK3Bvc2l0aW9uKTtcblx0XHRcdGJ1ZmZlciA9IGEgKyBiO1xuXHRcdFx0b3V0cHV0ICs9IChcblx0XHRcdFx0VEFCTEUuY2hhckF0KGJ1ZmZlciA+PiAxMCkgK1xuXHRcdFx0XHRUQUJMRS5jaGFyQXQoKGJ1ZmZlciA+PiA0KSAmIDB4M0YpICtcblx0XHRcdFx0VEFCTEUuY2hhckF0KChidWZmZXIgPDwgMikgJiAweDNGKSArXG5cdFx0XHRcdCc9J1xuXHRcdFx0KTtcblx0XHR9IGVsc2UgaWYgKHBhZGRpbmcgPT0gMSkge1xuXHRcdFx0YnVmZmVyID0gaW5wdXQuY2hhckNvZGVBdChwb3NpdGlvbik7XG5cdFx0XHRvdXRwdXQgKz0gKFxuXHRcdFx0XHRUQUJMRS5jaGFyQXQoYnVmZmVyID4+IDIpICtcblx0XHRcdFx0VEFCTEUuY2hhckF0KChidWZmZXIgPDwgNCkgJiAweDNGKSArXG5cdFx0XHRcdCc9PSdcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG91dHB1dDtcblx0fTtcblxuXHR2YXIgYmFzZTY0ID0ge1xuXHRcdCdlbmNvZGUnOiBlbmNvZGUsXG5cdFx0J2RlY29kZSc6IGRlY29kZSxcblx0XHQndmVyc2lvbic6ICcwLjEuMCdcblx0fTtcblxuXHQvLyBTb21lIEFNRCBidWlsZCBvcHRpbWl6ZXJzLCBsaWtlIHIuanMsIGNoZWNrIGZvciBzcGVjaWZpYyBjb25kaXRpb24gcGF0dGVybnNcblx0Ly8gbGlrZSB0aGUgZm9sbG93aW5nOlxuXHRpZiAoXG5cdFx0dHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmXG5cdFx0dHlwZW9mIGRlZmluZS5hbWQgPT0gJ29iamVjdCcgJiZcblx0XHRkZWZpbmUuYW1kXG5cdCkge1xuXHRcdGRlZmluZShmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBiYXNlNjQ7XG5cdFx0fSk7XG5cdH1cdGVsc2UgaWYgKGZyZWVFeHBvcnRzICYmICFmcmVlRXhwb3J0cy5ub2RlVHlwZSkge1xuXHRcdGlmIChmcmVlTW9kdWxlKSB7IC8vIGluIE5vZGUuanMgb3IgUmluZ29KUyB2MC44LjArXG5cdFx0XHRmcmVlTW9kdWxlLmV4cG9ydHMgPSBiYXNlNjQ7XG5cdFx0fSBlbHNlIHsgLy8gaW4gTmFyd2hhbCBvciBSaW5nb0pTIHYwLjcuMC1cblx0XHRcdGZvciAodmFyIGtleSBpbiBiYXNlNjQpIHtcblx0XHRcdFx0YmFzZTY0Lmhhc093blByb3BlcnR5KGtleSkgJiYgKGZyZWVFeHBvcnRzW2tleV0gPSBiYXNlNjRba2V5XSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2UgeyAvLyBpbiBSaGlubyBvciBhIHdlYiBicm93c2VyXG5cdFx0cm9vdC5iYXNlNjQgPSBiYXNlNjQ7XG5cdH1cblxufSh0aGlzKSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgnLi9lbmNvZGUnKSxcbiAgICBlbmNvZGVDb25zZW50U3RyaW5nID0gX3JlcXVpcmUuZW5jb2RlQ29uc2VudFN0cmluZyxcbiAgICBfZ2V0TWF4VmVuZG9ySWQgPSBfcmVxdWlyZS5nZXRNYXhWZW5kb3JJZCxcbiAgICBlbmNvZGVWZW5kb3JJZHNUb0JpdHMgPSBfcmVxdWlyZS5lbmNvZGVWZW5kb3JJZHNUb0JpdHMsXG4gICAgZW5jb2RlUHVycG9zZUlkc1RvQml0cyA9IF9yZXF1aXJlLmVuY29kZVB1cnBvc2VJZHNUb0JpdHM7XG5cbnZhciBfcmVxdWlyZTIgPSByZXF1aXJlKCcuL2RlY29kZScpLFxuICAgIGRlY29kZUNvbnNlbnRTdHJpbmcgPSBfcmVxdWlyZTIuZGVjb2RlQ29uc2VudFN0cmluZztcblxudmFyIF9yZXF1aXJlMyA9IHJlcXVpcmUoJy4vdXRpbHMvZGVmaW5pdGlvbnMnKSxcbiAgICB2ZW5kb3JWZXJzaW9uTWFwID0gX3JlcXVpcmUzLnZlbmRvclZlcnNpb25NYXA7XG4vKipcbiAqIFJlZ3VsYXIgZXhwcmVzc2lvbiBmb3IgdmFsaWRhdGluZ1xuICovXG5cblxudmFyIGNvbnNlbnRMYW5ndWFnZVJlZ2V4cCA9IC9eW2Etel17Mn0kLztcblxudmFyIENvbnNlbnRTdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGEgbmV3IENvbnNlbnRTdHJpbmcgb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlU3RyaW5nIEFuIGV4aXN0aW5nIGNvbnNlbnQgc3RyaW5nIHRvIHBhcnNlIGFuZCB1c2UgZm9yIG91ciBpbml0aWFsIHZhbHVlc1xuICAgKi9cbiAgZnVuY3Rpb24gQ29uc2VudFN0cmluZygpIHtcbiAgICB2YXIgYmFzZVN0cmluZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogbnVsbDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb25zZW50U3RyaW5nKTtcblxuICAgIHRoaXMuY3JlYXRlZCA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy5sYXN0VXBkYXRlZCA9IG5ldyBEYXRlKCk7XG5cbiAgICAvKipcbiAgICAgKiBWZXJzaW9uIG51bWJlciBvZiBjb25zZW50IHN0cmluZyBzcGVjaWZpY2F0aW9uXG4gICAgICpcbiAgICAgKiBAdHlwZSB7aW50ZWdlcn1cbiAgICAgKi9cbiAgICB0aGlzLnZlcnNpb24gPSAxO1xuXG4gICAgLyoqXG4gICAgICogVmVuZG9yIGxpc3Qgd2l0aCBmb3JtYXQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vSW50ZXJhY3RpdmVBZHZlcnRpc2luZ0J1cmVhdS9HRFBSLVRyYW5zcGFyZW5jeS1hbmQtQ29uc2VudC1GcmFtZXdvcmsvYmxvYi9tYXN0ZXIvRHJhZnRfZm9yX1B1YmxpY19Db21tZW50X1RyYW5zcGFyZW5jeSUyMCUyNiUyMENvbnNlbnQlMjBGcmFtZXdvcmslMjAtJTIwY29va2llJTIwYW5kJTIwdmVuZG9yJTIwbGlzdCUyMGZvcm1hdCUyMHNwZWNpZmljYXRpb24lMjB2MS4wYS5wZGZcbiAgICAgKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICovXG4gICAgdGhpcy52ZW5kb3JMaXN0ID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFZlcnNpb24gb2YgdGhlIHZlbmRvciBsaXN0IHVzZWQgZm9yIHRoZSBwdXJwb3NlcyBhbmQgdmVuZG9yc1xuICAgICAqXG4gICAgICogQHR5cGUge2ludGVnZXJ9XG4gICAgICovXG4gICAgdGhpcy52ZW5kb3JMaXN0VmVyc2lvbiA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdW5pcXVlIElEIG9mIHRoZSBDTVAgdGhhdCBsYXN0IG1vZGlmaWVkIHRoZSBjb25zZW50IHN0cmluZ1xuICAgICAqXG4gICAgICogQHR5cGUge2ludGVnZXJ9XG4gICAgICovXG4gICAgdGhpcy5jbXBJZCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBWZXJzaW9uIG9mIHRoZSBjb2RlIHVzZWQgYnkgdGhlIENNUCB3aGVuIGNvbGxlY3RpbmcgY29uc2VudFxuICAgICAqXG4gICAgICogQHR5cGUge2ludGVnZXJ9XG4gICAgICovXG4gICAgdGhpcy5jbXBWZXJzaW9uID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIElEIG9mIHRoZSBzY3JlZW4gdXNlZCBieSBDTVAgd2hlbiBjb2xsZWN0aW5nIGNvbnNlbnRcbiAgICAgKlxuICAgICAqIEB0eXBlIHtpbnRlZ2VyfVxuICAgICAqL1xuICAgIHRoaXMuY29uc2VudFNjcmVlbiA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUd28tbGV0dGVyIElTTzYzOS0xIGNvZGUgKGVuLCBmciwgZGUsIGV0Yy4pIG9mIHRoZSBsYW5ndWFnZSB0aGF0IHRoZSBDTVAgYXNrZWQgY29uc2VudCBpblxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmNvbnNlbnRMYW5ndWFnZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBMaXN0IG9mIHB1cnBvc2UgSURzIHRoYXQgdGhlIHVzZXIgaGFzIGdpdmVuIGNvbnNlbnQgdG9cbiAgICAgKlxuICAgICAqIEB0eXBlIHtpbnRlZ2VyW119XG4gICAgICovXG4gICAgdGhpcy5hbGxvd2VkUHVycG9zZUlkcyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogTGlzdCBvZiB2ZW5kb3IgSURzIHRoYXQgdGhlIHVzZXIgaGFzIGdpdmVuIGNvbnNlbnQgdG9cbiAgICAgKlxuICAgICAqIEB0eXBlIHtpbnRlZ2VyW119XG4gICAgICovXG4gICAgdGhpcy5hbGxvd2VkVmVuZG9ySWRzID0gW107XG5cbiAgICAvLyBEZWNvZGUgdGhlIGJhc2Ugc3RyaW5nXG4gICAgaWYgKGJhc2VTdHJpbmcpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGVjb2RlQ29uc2VudFN0cmluZyhiYXNlU3RyaW5nKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgd2ViLXNhZmUsIGJhc2U2NC1lbmNvZGVkIGNvbnNlbnQgc3RyaW5nXG4gICAqXG4gICAqIEByZXR1cm4ge3N0cmluZ30gV2ViLXNhZmUsIGJhc2U2NC1lbmNvZGVkIGNvbnNlbnQgc3RyaW5nXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKENvbnNlbnRTdHJpbmcsIFt7XG4gICAga2V5OiAnZ2V0Q29uc2VudFN0cmluZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENvbnNlbnRTdHJpbmcoKSB7XG4gICAgICB2YXIgdXBkYXRlRGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogdHJ1ZTtcblxuICAgICAgaWYgKCF0aGlzLnZlbmRvckxpc3QpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb25zZW50U3RyaW5nIC0gQSB2ZW5kb3IgbGlzdCBpcyByZXF1aXJlZCB0byBlbmNvZGUgYSBjb25zZW50IHN0cmluZycpO1xuICAgICAgfVxuXG4gICAgICBpZiAodXBkYXRlRGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmxhc3RVcGRhdGVkID0gbmV3IERhdGUoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVuY29kZUNvbnNlbnRTdHJpbmcoe1xuICAgICAgICB2ZXJzaW9uOiB0aGlzLmdldFZlcnNpb24oKSxcbiAgICAgICAgdmVuZG9yTGlzdDogdGhpcy52ZW5kb3JMaXN0LFxuICAgICAgICBhbGxvd2VkUHVycG9zZUlkczogdGhpcy5hbGxvd2VkUHVycG9zZUlkcyxcbiAgICAgICAgYWxsb3dlZFZlbmRvcklkczogdGhpcy5hbGxvd2VkVmVuZG9ySWRzLFxuICAgICAgICBjcmVhdGVkOiB0aGlzLmNyZWF0ZWQsXG4gICAgICAgIGxhc3RVcGRhdGVkOiB0aGlzLmxhc3RVcGRhdGVkLFxuICAgICAgICBjbXBJZDogdGhpcy5jbXBJZCxcbiAgICAgICAgY21wVmVyc2lvbjogdGhpcy5jbXBWZXJzaW9uLFxuICAgICAgICBjb25zZW50U2NyZWVuOiB0aGlzLmNvbnNlbnRTY3JlZW4sXG4gICAgICAgIGNvbnNlbnRMYW5ndWFnZTogdGhpcy5jb25zZW50TGFuZ3VhZ2UsXG4gICAgICAgIHZlbmRvckxpc3RWZXJzaW9uOiB0aGlzLnZlbmRvckxpc3RWZXJzaW9uXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG1heCB2ZW5kb3JJZFxuICAgICAqXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBtYXhWZW5kb3JJZCBmcm9tIHRoZSB2ZW5kb3JMaXN0IHByb3ZpZGVkXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2dldE1heFZlbmRvcklkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TWF4VmVuZG9ySWQoKSB7XG4gICAgICByZXR1cm4gX2dldE1heFZlbmRvcklkKHRoaXMudmVuZG9yTGlzdC52ZW5kb3JzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBnZXQgdGhlIGNvbnNlbnRzIGluIGEgYml0IHN0cmluZy4gIFRoaXMgaXMgdG8gZnVsZmlsbCB0aGUgaW4tYXBwIHJlcXVpcmVtZW50XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IGEgYml0IHN0cmluZyBvZiBhbGwgb2YgdGhlIHZlbmRvciBjb25zZW50IGRhdGFcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0UGFyc2VkVmVuZG9yQ29uc2VudHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQYXJzZWRWZW5kb3JDb25zZW50cygpIHtcbiAgICAgIHJldHVybiBlbmNvZGVWZW5kb3JJZHNUb0JpdHMoX2dldE1heFZlbmRvcklkKHRoaXMudmVuZG9yTGlzdC52ZW5kb3JzKSwgdGhpcy5hbGxvd2VkVmVuZG9ySWRzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBnZXQgdGhlIGNvbnNlbnRzIGluIGEgYml0IHN0cmluZy4gIFRoaXMgaXMgdG8gZnVsZmlsbCB0aGUgaW4tYXBwIHJlcXVpcmVtZW50XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IGEgYml0IHN0cmluZyBvZiBhbGwgb2YgdGhlIHZlbmRvciBjb25zZW50IGRhdGFcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0UGFyc2VkUHVycG9zZUNvbnNlbnRzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UGFyc2VkUHVycG9zZUNvbnNlbnRzKCkge1xuICAgICAgcmV0dXJuIGVuY29kZVB1cnBvc2VJZHNUb0JpdHModGhpcy52ZW5kb3JMaXN0LnB1cnBvc2VzLCB0aGlzLmFsbG93ZWRQdXJwb3NlSWRzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHdlYi1zYWZlLCBiYXNlNjQtZW5jb2RlZCBtZXRhZGF0YSBzdHJpbmdcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gV2ViLXNhZmUsIGJhc2U2NC1lbmNvZGVkIG1ldGFkYXRhIHN0cmluZ1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRNZXRhZGF0YVN0cmluZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE1ldGFkYXRhU3RyaW5nKCkge1xuICAgICAgcmV0dXJuIGVuY29kZUNvbnNlbnRTdHJpbmcoe1xuICAgICAgICB2ZXJzaW9uOiB0aGlzLmdldFZlcnNpb24oKSxcbiAgICAgICAgY3JlYXRlZDogdGhpcy5jcmVhdGVkLFxuICAgICAgICBsYXN0VXBkYXRlZDogdGhpcy5sYXN0VXBkYXRlZCxcbiAgICAgICAgY21wSWQ6IHRoaXMuY21wSWQsXG4gICAgICAgIGNtcFZlcnNpb246IHRoaXMuY21wVmVyc2lvbixcbiAgICAgICAgY29uc2VudFNjcmVlbjogdGhpcy5jb25zZW50U2NyZWVuLFxuICAgICAgICB2ZW5kb3JMaXN0VmVyc2lvbjogdGhpcy52ZW5kb3JMaXN0VmVyc2lvblxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVjb2RlIHRoZSB3ZWItc2FmZSwgYmFzZTY0LWVuY29kZWQgbWV0YWRhdGEgc3RyaW5nXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGVuY29kZWRNZXRhZGF0YSBXZWItc2FmZSwgYmFzZTY0LWVuY29kZWQgbWV0YWRhdGEgc3RyaW5nXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBkZWNvZGVkIG1ldGFkYXRhXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2dldFZlcnNpb24nLFxuXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHZlcnNpb24gbnVtYmVyIHRoYXQgdGhpcyBjb25zZW50IHN0cmluZyBzcGVjaWZpY2F0aW9uIGFkaGVyZXMgdG9cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2ludGVnZXJ9IFZlcnNpb24gbnVtYmVyIG9mIGNvbnNlbnQgc3RyaW5nIHNwZWNpZmljYXRpb25cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmVyc2lvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnZlcnNpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB2ZXJzaW9uIG9mIHRoZSB2ZW5kb3IgbGlzdFxuICAgICAqXG4gICAgICogQHJldHVybiB7aW50ZWdlcn0gVmVuZG9yIGxpc3QgdmVyc2lvblxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRWZW5kb3JMaXN0VmVyc2lvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZlbmRvckxpc3RWZXJzaW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmVuZG9yTGlzdFZlcnNpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSB2ZW5kb3JzIGxpc3QgdG8gdXNlIHdoZW4gZ2VuZXJhdGluZyB0aGUgY29uc2VudCBzdHJpbmdcbiAgICAgKlxuICAgICAqIFRoZSBleHBlY3RlZCBmb3JtYXQgaXMgdGhlIG9uZSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9JbnRlcmFjdGl2ZUFkdmVydGlzaW5nQnVyZWF1L0dEUFItVHJhbnNwYXJlbmN5LWFuZC1Db25zZW50LUZyYW1ld29yay9ibG9iL21hc3Rlci9EcmFmdF9mb3JfUHVibGljX0NvbW1lbnRfVHJhbnNwYXJlbmN5JTIwJTI2JTIwQ29uc2VudCUyMEZyYW1ld29yayUyMC0lMjBjb29raWUlMjBhbmQlMjB2ZW5kb3IlMjBsaXN0JTIwZm9ybWF0JTIwc3BlY2lmaWNhdGlvbiUyMHYxLjBhLnBkZlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHZlbmRvckxpc3QgVmVuZG9yIGxpc3Qgd2l0aCBmb3JtYXQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vSW50ZXJhY3RpdmVBZHZlcnRpc2luZ0J1cmVhdS9HRFBSLVRyYW5zcGFyZW5jeS1hbmQtQ29uc2VudC1GcmFtZXdvcmsvYmxvYi9tYXN0ZXIvRHJhZnRfZm9yX1B1YmxpY19Db21tZW50X1RyYW5zcGFyZW5jeSUyMCUyNiUyMENvbnNlbnQlMjBGcmFtZXdvcmslMjAtJTIwY29va2llJTIwYW5kJTIwdmVuZG9yJTIwbGlzdCUyMGZvcm1hdCUyMHNwZWNpZmljYXRpb24lMjB2MS4wYS5wZGZcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnc2V0R2xvYmFsVmVuZG9yTGlzdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEdsb2JhbFZlbmRvckxpc3QodmVuZG9yTGlzdCkge1xuICAgICAgaWYgKCh0eXBlb2YgdmVuZG9yTGlzdCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmVuZG9yTGlzdCkpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnNlbnRTdHJpbmcgLSBZb3UgbXVzdCBwcm92aWRlIGFuIG9iamVjdCB3aGVuIHNldHRpbmcgdGhlIGdsb2JhbCB2ZW5kb3IgbGlzdCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXZlbmRvckxpc3QudmVuZG9yTGlzdFZlcnNpb24gfHwgIUFycmF5LmlzQXJyYXkodmVuZG9yTGlzdC5wdXJwb3NlcykgfHwgIUFycmF5LmlzQXJyYXkodmVuZG9yTGlzdC52ZW5kb3JzKSkge1xuICAgICAgICAvLyBUaGUgcHJvdmlkZWQgdmVuZG9yIGxpc3QgZG9lcyBub3QgbG9vayB2YWxpZFxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnNlbnRTdHJpbmcgLSBUaGUgcHJvdmlkZWQgdmVuZG9yIGxpc3QgZG9lcyBub3QgcmVzcGVjdCB0aGUgc2NoZW1hIGZyb20gdGhlIElBQiBFVeKAmXMgR0RQUiBDb25zZW50IGFuZCBUcmFuc3BhcmVuY3kgRnJhbWV3b3JrJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIENsb25pbmcgdGhlIEdWTFxuICAgICAgLy8gSXQncyBpbXBvcnRhbnQgYXMgd2UgbWlnaHQgdHJhbnNmb3JtIGl0IGFuZCBkb24ndCB3YW50IHRvIG1vZGlmeSBvYmplY3RzIHRoYXQgd2UgZG8gbm90IG93blxuICAgICAgdGhpcy52ZW5kb3JMaXN0ID0ge1xuICAgICAgICB2ZW5kb3JMaXN0VmVyc2lvbjogdmVuZG9yTGlzdC52ZW5kb3JMaXN0VmVyc2lvbixcbiAgICAgICAgbGFzdFVwZGF0ZWQ6IHZlbmRvckxpc3QubGFzdFVwZGF0ZWQsXG4gICAgICAgIHB1cnBvc2VzOiB2ZW5kb3JMaXN0LnB1cnBvc2VzLFxuICAgICAgICBmZWF0dXJlczogdmVuZG9yTGlzdC5mZWF0dXJlcyxcblxuICAgICAgICAvLyBDbG9uZSB0aGUgbGlzdCBhbmQgc29ydCB0aGUgdmVuZG9ycyBieSBJRCAoaXQgYnJlYWtzIG91ciByYW5nZSBnZW5lcmF0aW9uIGFsZ29yaXRobSBpZiB0aGV5IGFyZSBub3Qgc29ydGVkKVxuICAgICAgICB2ZW5kb3JzOiB2ZW5kb3JMaXN0LnZlbmRvcnMuc2xpY2UoMCkuc29ydChmdW5jdGlvbiAoZmlyc3RWZW5kb3IsIHNlY29uZFZlbmRvcikge1xuICAgICAgICAgIHJldHVybiBmaXJzdFZlbmRvci5pZCA8IHNlY29uZFZlbmRvci5pZCA/IC0xIDogMTtcbiAgICAgICAgfSlcbiAgICAgIH07XG4gICAgICB0aGlzLnZlbmRvckxpc3RWZXJzaW9uID0gdmVuZG9yTGlzdC52ZW5kb3JMaXN0VmVyc2lvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIElEIG9mIHRoZSBDb25zZW50IE1hbmFnZW1lbnQgUGxhdGZvcm0gdGhhdCBsYXN0IG1vZGlmaWVkIHRoZSBjb25zZW50IHN0cmluZ1xuICAgICAqXG4gICAgICogRXZlcnkgQ01QIGlzIGFzc2lnbmVkIGEgdW5pcXVlIElEIGJ5IHRoZSBJQUIgRVUgdGhhdCBtdXN0IGJlIHByb3ZpZGVkIGhlcmUgYmVmb3JlIGNoYW5naW5nIGFueSBvdGhlciB2YWx1ZSBpbiB0aGUgY29uc2VudCBzdHJpbmcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IGlkIENNUCBJRFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdzZXRDbXBJZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldENtcElkKGlkKSB7XG4gICAgICB0aGlzLmNtcElkID0gaWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBJRCBvZiB0aGUgQ29uc2VudCBNYW5hZ2VtZW50IFBsYXRmb3JtIGZyb20gdGhlIGNvbnNlbnQgc3RyaW5nXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtpbnRlZ2VyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRDbXBJZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENtcElkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY21wSWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSB2ZXJzaW9uIG9mIHRoZSBDb25zZW50IE1hbmFnZW1lbnQgUGxhdGZvcm0gdGhhdCBsYXN0IG1vZGlmaWVkIHRoZSBjb25zZW50IHN0cmluZ1xuICAgICAqXG4gICAgICogVGhpcyB2ZXJzaW9uIG51bWJlciByZWZlcmVuY2VzIHRoZSBDTVAgY29kZSBydW5uaW5nIHdoZW4gY29sbGVjdGluZyB0aGUgdXNlciBjb25zZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtpbnRlZ2VyfSB2ZXJzaW9uIFZlcnNpb25cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnc2V0Q21wVmVyc2lvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldENtcFZlcnNpb24odmVyc2lvbikge1xuICAgICAgdGhpcy5jbXBWZXJzaW9uID0gdmVyc2lvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHZlcmlzb24gb2YgdGhlIENvbnNlbnQgTWFuYWdlbWVudCBQbGF0Zm9ybSB0aGF0IGxhc3QgbW9kaWZpZWQgdGhlIGNvbnNlbnQgc3RyaW5nXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtpbnRlZ2VyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRDbXBWZXJzaW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q21wVmVyc2lvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmNtcFZlcnNpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBDb25zZW50IE1hbmFnZW1lbnQgUGxhdGZvcm0gc2NyZWVuIElEIHRoYXQgY29sbGVjdGVkIHRoZSB1c2VyIGNvbnNlbnRcbiAgICAgKlxuICAgICAqIFRoaXMgc2NyZWVuIElEIHJlZmVyZW5jZXMgYSB1bmlxdWUgdmlldyBpbiB0aGUgQ01QIHRoYXQgd2FzIGRpc3BsYXllZCB0byB0aGUgdXNlciB0byBjb2xsZWN0IGNvbnNlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gc2NyZWVuSWQgU2NyZWVuIElEXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3NldENvbnNlbnRTY3JlZW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRDb25zZW50U2NyZWVuKHNjcmVlbklkKSB7XG4gICAgICB0aGlzLmNvbnNlbnRTY3JlZW4gPSBzY3JlZW5JZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIENvbnNlbnQgTWFuYWdlbWVudCBQbGF0Zm9ybSBzY3JlZW4gSUQgdGhhdCBjb2xsZWN0ZWQgdGhlIHVzZXIgY29uc2VudFxuICAgICAqXG4gICAgICogQHJldHVybiB7aW50ZWdlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q29uc2VudFNjcmVlbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENvbnNlbnRTY3JlZW4oKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb25zZW50U2NyZWVuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgbGFuZ3VhZ2UgdGhhdCB0aGUgQ01QIGFza2VkIHRoZSBjb25zZW50IGluXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgVHdvLWxldHRlciBJU082MzktMSBjb2RlIChlbiwgZnIsIGRlLCBldGMuKVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdzZXRDb25zZW50TGFuZ3VhZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRDb25zZW50TGFuZ3VhZ2UobGFuZ3VhZ2UpIHtcbiAgICAgIGlmIChjb25zZW50TGFuZ3VhZ2VSZWdleHAudGVzdChsYW5ndWFnZSkgPT09IGZhbHNlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ29uc2VudFN0cmluZyAtIFRoZSBjb25zZW50IGxhbmd1YWdlIG11c3QgYmUgYSB0d28tbGV0dGVyIElTTzYzOS0xIGNvZGUgKGVuLCBmciwgZGUsIGV0Yy4pJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29uc2VudExhbmd1YWdlID0gbGFuZ3VhZ2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBsYW5ndWFnZSB0aGF0IHRoZSBDTVAgYXNrZWQgY29uc2VudCBpblxuICAgICAqXG4gICAgICogQHJldHVybiB7c3RyaW5nfSBUd28tbGV0dGVyIElTTzYzOS0xIGNvZGUgKGVuLCBmciwgZGUsIGV0Yy4pXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2dldENvbnNlbnRMYW5ndWFnZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENvbnNlbnRMYW5ndWFnZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnNlbnRMYW5ndWFnZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGxpc3Qgb2YgcHVycG9zZSBJRHMgdGhhdCB0aGUgdXNlciBoYXMgZ2l2ZW4gY29uc2VudCB0b1xuICAgICAqXG4gICAgICogQHBhcmFtIHtpbnRlZ2VyW119IHB1cnBvc2VJZHMgQW4gYXJyYXkgb2YgaW50ZWdlcnMgdGhhdCBtYXAgdG8gdGhlIHB1cnBvc2VzIGRlZmluZWQgaW4gdGhlIHZlbmRvciBsaXN0LiBQdXJwb3NlcyBpbmNsdWRlZCBpbiB0aGUgYXJyYXkgYXJlIHB1cnBvc2VzIHRoYXQgdGhlIHVzZXIgaGFzIGdpdmVuIGNvbnNlbnQgdG9cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnc2V0UHVycG9zZXNBbGxvd2VkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UHVycG9zZXNBbGxvd2VkKHB1cnBvc2VJZHMpIHtcbiAgICAgIHRoaXMuYWxsb3dlZFB1cnBvc2VJZHMgPSBwdXJwb3NlSWRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbGlzdCBvZiBwdXJwb3NlIElEcyB0aGF0IHRoZSB1c2VyIGhhcyBnaXZlbiBjb25zZW50IHRvXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtpbnRlZ2VyW119XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2dldFB1cnBvc2VzQWxsb3dlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFB1cnBvc2VzQWxsb3dlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmFsbG93ZWRQdXJwb3NlSWRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgY29uc2VudCBzdGF0dXMgb2YgYSB1c2VyIGZvciBhIGdpdmVuIHB1cnBvc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gcHVycG9zZUlkIFRoZSBJRCAoZnJvbSB0aGUgdmVuZG9yIGxpc3QpIG9mIHRoZSBwdXJwb3NlIHRvIHVwZGF0ZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWUgQ29uc2VudCBzdGF0dXNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnc2V0UHVycG9zZUFsbG93ZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQdXJwb3NlQWxsb3dlZChwdXJwb3NlSWQsIHZhbHVlKSB7XG4gICAgICB2YXIgcHVycG9zZUluZGV4ID0gdGhpcy5hbGxvd2VkUHVycG9zZUlkcy5pbmRleE9mKHB1cnBvc2VJZCk7XG5cbiAgICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAocHVycG9zZUluZGV4ID09PSAtMSkge1xuICAgICAgICAgIHRoaXMuYWxsb3dlZFB1cnBvc2VJZHMucHVzaChwdXJwb3NlSWQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICBpZiAocHVycG9zZUluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIHRoaXMuYWxsb3dlZFB1cnBvc2VJZHMuc3BsaWNlKHB1cnBvc2VJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgdXNlciBoYXMgZ2l2ZW4gY29uc2VudCBmb3IgYSBzcGVjaWZpYyBwdXJwb3NlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IHB1cnBvc2VJZFxuICAgICAqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnaXNQdXJwb3NlQWxsb3dlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzUHVycG9zZUFsbG93ZWQocHVycG9zZUlkKSB7XG4gICAgICByZXR1cm4gdGhpcy5hbGxvd2VkUHVycG9zZUlkcy5pbmRleE9mKHB1cnBvc2VJZCkgIT09IC0xO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgbGlzdCBvZiB2ZW5kb3IgSURzIHRoYXQgdGhlIHVzZXIgaGFzIGdpdmVuIGNvbnNlbnQgdG9cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7aW50ZWdlcltdfSB2ZW5kb3JJZHMgQW4gYXJyYXkgb2YgaW50ZWdlcnMgdGhhdCBtYXAgdG8gdGhlIHZlbmRvcnMgZGVmaW5lZCBpbiB0aGUgdmVuZG9yIGxpc3QuIFZlbmRvcnMgaW5jbHVkZWQgaW4gdGhlIGFycmF5IGFyZSB2ZW5kb3JzIHRoYXQgdGhlIHVzZXIgaGFzIGdpdmVuIGNvbnNlbnQgdG9cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnc2V0VmVuZG9yc0FsbG93ZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRWZW5kb3JzQWxsb3dlZCh2ZW5kb3JJZHMpIHtcbiAgICAgIHRoaXMuYWxsb3dlZFZlbmRvcklkcyA9IHZlbmRvcklkcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGxpc3Qgb2YgdmVuZG9yIElEcyB0aGF0IHRoZSB1c2VyIGhhcyBnaXZlbiBjb25zZW50IHRvXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtpbnRlZ2VyW119XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2dldFZlbmRvcnNBbGxvd2VkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmVuZG9yc0FsbG93ZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5hbGxvd2VkVmVuZG9ySWRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgY29uc2VudCBzdGF0dXMgb2YgYSB1c2VyIGZvciBhIGdpdmVuIHZlbmRvclxuICAgICAqXG4gICAgICogQHBhcmFtIHtpbnRlZ2VyfSB2ZW5kb3JJZCBUaGUgSUQgKGZyb20gdGhlIHZlbmRvciBsaXN0KSBvZiB0aGUgdmVuZG9yIHRvIHVwZGF0ZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWUgQ29uc2VudCBzdGF0dXNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnc2V0VmVuZG9yQWxsb3dlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFZlbmRvckFsbG93ZWQodmVuZG9ySWQsIHZhbHVlKSB7XG4gICAgICB2YXIgdmVuZG9ySW5kZXggPSB0aGlzLmFsbG93ZWRWZW5kb3JJZHMuaW5kZXhPZih2ZW5kb3JJZCk7XG5cbiAgICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAodmVuZG9ySW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgdGhpcy5hbGxvd2VkVmVuZG9ySWRzLnB1c2godmVuZG9ySWQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICBpZiAodmVuZG9ySW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgdGhpcy5hbGxvd2VkVmVuZG9ySWRzLnNwbGljZSh2ZW5kb3JJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgdXNlciBoYXMgZ2l2ZW4gY29uc2VudCBmb3IgYSBzcGVjaWZpYyB2ZW5kb3JcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gdmVuZG9ySWRcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2lzVmVuZG9yQWxsb3dlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzVmVuZG9yQWxsb3dlZCh2ZW5kb3JJZCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWxsb3dlZFZlbmRvcklkcy5pbmRleE9mKHZlbmRvcklkKSAhPT0gLTE7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6ICdkZWNvZGVNZXRhZGF0YVN0cmluZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlY29kZU1ldGFkYXRhU3RyaW5nKGVuY29kZWRNZXRhZGF0YSkge1xuICAgICAgdmFyIGRlY29kZWRTdHJpbmcgPSBkZWNvZGVDb25zZW50U3RyaW5nKGVuY29kZWRNZXRhZGF0YSk7XG4gICAgICB2YXIgbWV0YWRhdGEgPSB7fTtcbiAgICAgIHZlbmRvclZlcnNpb25NYXBbZGVjb2RlZFN0cmluZy52ZXJzaW9uXS5tZXRhZGF0YUZpZWxkcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZCkge1xuICAgICAgICBtZXRhZGF0YVtmaWVsZF0gPSBkZWNvZGVkU3RyaW5nW2ZpZWxkXTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG1ldGFkYXRhO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb25zZW50U3RyaW5nO1xufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQ29uc2VudFN0cmluZzogQ29uc2VudFN0cmluZ1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJy4vdXRpbHMvYml0cycpLFxuICAgIGRlY29kZUJpdHNUb0lkcyA9IF9yZXF1aXJlLmRlY29kZUJpdHNUb0lkcyxcbiAgICBkZWNvZGVGcm9tQmFzZTY0ID0gX3JlcXVpcmUuZGVjb2RlRnJvbUJhc2U2NDtcblxuLyoqXG4gKiBEZWNvZGUgY29uc2VudCBkYXRhIGZyb20gYSB3ZWItc2FmZSBiYXNlNjQtZW5jb2RlZCBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29uc2VudFN0cmluZ1xuICovXG5cblxuZnVuY3Rpb24gZGVjb2RlQ29uc2VudFN0cmluZyhjb25zZW50U3RyaW5nKSB7XG4gIHZhciBfZGVjb2RlRnJvbUJhc2UgPSBkZWNvZGVGcm9tQmFzZTY0KGNvbnNlbnRTdHJpbmcpLFxuICAgICAgdmVyc2lvbiA9IF9kZWNvZGVGcm9tQmFzZS52ZXJzaW9uLFxuICAgICAgY21wSWQgPSBfZGVjb2RlRnJvbUJhc2UuY21wSWQsXG4gICAgICB2ZW5kb3JMaXN0VmVyc2lvbiA9IF9kZWNvZGVGcm9tQmFzZS52ZW5kb3JMaXN0VmVyc2lvbixcbiAgICAgIHB1cnBvc2VJZEJpdFN0cmluZyA9IF9kZWNvZGVGcm9tQmFzZS5wdXJwb3NlSWRCaXRTdHJpbmcsXG4gICAgICBtYXhWZW5kb3JJZCA9IF9kZWNvZGVGcm9tQmFzZS5tYXhWZW5kb3JJZCxcbiAgICAgIGNyZWF0ZWQgPSBfZGVjb2RlRnJvbUJhc2UuY3JlYXRlZCxcbiAgICAgIGxhc3RVcGRhdGVkID0gX2RlY29kZUZyb21CYXNlLmxhc3RVcGRhdGVkLFxuICAgICAgaXNSYW5nZSA9IF9kZWNvZGVGcm9tQmFzZS5pc1JhbmdlLFxuICAgICAgZGVmYXVsdENvbnNlbnQgPSBfZGVjb2RlRnJvbUJhc2UuZGVmYXVsdENvbnNlbnQsXG4gICAgICB2ZW5kb3JJZEJpdFN0cmluZyA9IF9kZWNvZGVGcm9tQmFzZS52ZW5kb3JJZEJpdFN0cmluZyxcbiAgICAgIHZlbmRvclJhbmdlTGlzdCA9IF9kZWNvZGVGcm9tQmFzZS52ZW5kb3JSYW5nZUxpc3QsXG4gICAgICBjbXBWZXJzaW9uID0gX2RlY29kZUZyb21CYXNlLmNtcFZlcnNpb24sXG4gICAgICBjb25zZW50U2NyZWVuID0gX2RlY29kZUZyb21CYXNlLmNvbnNlbnRTY3JlZW4sXG4gICAgICBjb25zZW50TGFuZ3VhZ2UgPSBfZGVjb2RlRnJvbUJhc2UuY29uc2VudExhbmd1YWdlO1xuXG4gIHZhciBjb25zZW50U3RyaW5nRGF0YSA9IHtcbiAgICB2ZXJzaW9uOiB2ZXJzaW9uLFxuICAgIGNtcElkOiBjbXBJZCxcbiAgICB2ZW5kb3JMaXN0VmVyc2lvbjogdmVuZG9yTGlzdFZlcnNpb24sXG4gICAgYWxsb3dlZFB1cnBvc2VJZHM6IGRlY29kZUJpdHNUb0lkcyhwdXJwb3NlSWRCaXRTdHJpbmcpLFxuICAgIG1heFZlbmRvcklkOiBtYXhWZW5kb3JJZCxcbiAgICBjcmVhdGVkOiBjcmVhdGVkLFxuICAgIGxhc3RVcGRhdGVkOiBsYXN0VXBkYXRlZCxcbiAgICBjbXBWZXJzaW9uOiBjbXBWZXJzaW9uLFxuICAgIGNvbnNlbnRTY3JlZW46IGNvbnNlbnRTY3JlZW4sXG4gICAgY29uc2VudExhbmd1YWdlOiBjb25zZW50TGFuZ3VhZ2VcbiAgfTtcblxuICBpZiAoaXNSYW5nZSkge1xuICAgIC8qIGVzbGludCBuby1zaGFkb3c6IG9mZiAqL1xuICAgIHZhciBpZE1hcCA9IHZlbmRvclJhbmdlTGlzdC5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgX3JlZikge1xuICAgICAgdmFyIGlzUmFuZ2UgPSBfcmVmLmlzUmFuZ2UsXG4gICAgICAgICAgc3RhcnRWZW5kb3JJZCA9IF9yZWYuc3RhcnRWZW5kb3JJZCxcbiAgICAgICAgICBlbmRWZW5kb3JJZCA9IF9yZWYuZW5kVmVuZG9ySWQ7XG5cbiAgICAgIHZhciBsYXN0VmVuZG9ySWQgPSBpc1JhbmdlID8gZW5kVmVuZG9ySWQgOiBzdGFydFZlbmRvcklkO1xuXG4gICAgICBmb3IgKHZhciBpID0gc3RhcnRWZW5kb3JJZDsgaSA8PSBsYXN0VmVuZG9ySWQ7IGkgKz0gMSkge1xuICAgICAgICBhY2NbaV0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcblxuICAgIGNvbnNlbnRTdHJpbmdEYXRhLmFsbG93ZWRWZW5kb3JJZHMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IG1heFZlbmRvcklkOyBpICs9IDEpIHtcbiAgICAgIGlmIChkZWZhdWx0Q29uc2VudCAmJiAhaWRNYXBbaV0gfHwgIWRlZmF1bHRDb25zZW50ICYmIGlkTWFwW2ldKSB7XG4gICAgICAgIGlmIChjb25zZW50U3RyaW5nRGF0YS5hbGxvd2VkVmVuZG9ySWRzLmluZGV4T2YoaSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc2VudFN0cmluZ0RhdGEuYWxsb3dlZFZlbmRvcklkcy5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnNlbnRTdHJpbmdEYXRhLmFsbG93ZWRWZW5kb3JJZHMgPSBkZWNvZGVCaXRzVG9JZHModmVuZG9ySWRCaXRTdHJpbmcpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnNlbnRTdHJpbmdEYXRhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGVjb2RlQ29uc2VudFN0cmluZzogZGVjb2RlQ29uc2VudFN0cmluZ1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJy4vdXRpbHMvYml0cycpLFxuICAgIGVuY29kZVRvQmFzZTY0ID0gX3JlcXVpcmUuZW5jb2RlVG9CYXNlNjQsXG4gICAgcGFkUmlnaHQgPSBfcmVxdWlyZS5wYWRSaWdodDtcblxuLyoqXG4gKiBFbmNvZGUgYSBsaXN0IG9mIHZlbmRvciBJRHMgaW50byBiaXRzXG4gKlxuICogQHBhcmFtIHtpbnRlZ2VyfSBtYXhWZW5kb3JJZCBIaWdoZXN0IHZlbmRvciBJRCBpbiB0aGUgdmVuZG9yIGxpc3RcbiAqIEBwYXJhbSB7aW50ZWdlcltdfSBhbGxvd2VkVmVuZG9ySWRzIFZlbmRvcnMgdGhhdCB0aGUgdXNlciBoYXMgZ2l2ZW4gY29uc2VudCB0b1xuICovXG5cblxuZnVuY3Rpb24gZW5jb2RlVmVuZG9ySWRzVG9CaXRzKG1heFZlbmRvcklkKSB7XG4gIHZhciBhbGxvd2VkVmVuZG9ySWRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBbXTtcblxuICB2YXIgdmVuZG9yU3RyaW5nID0gJyc7XG5cbiAgZm9yICh2YXIgaWQgPSAxOyBpZCA8PSBtYXhWZW5kb3JJZDsgaWQgKz0gMSkge1xuICAgIHZlbmRvclN0cmluZyArPSBhbGxvd2VkVmVuZG9ySWRzLmluZGV4T2YoaWQpICE9PSAtMSA/ICcxJyA6ICcwJztcbiAgfVxuXG4gIHJldHVybiBwYWRSaWdodCh2ZW5kb3JTdHJpbmcsIE1hdGgubWF4KDAsIG1heFZlbmRvcklkIC0gdmVuZG9yU3RyaW5nLmxlbmd0aCkpO1xufVxuXG4vKipcbiAqIEVuY29kZSBhIGxpc3Qgb2YgcHVycG9zZSBJRHMgaW50byBiaXRzXG4gKlxuICogQHBhcmFtIHsqfSBwdXJwb3NlcyBMaXN0IG9mIHB1cnBvc2VzIGZyb20gdGhlIHZlbmRvciBsaXN0XG4gKiBAcGFyYW0geyp9IGFsbG93ZWRQdXJwb3NlSWRzIExpc3Qgb2YgcHVycG9zZSBJRHMgdGhhdCB0aGUgdXNlciBoYXMgZ2l2ZW4gY29uc2VudCB0b1xuICovXG5mdW5jdGlvbiBlbmNvZGVQdXJwb3NlSWRzVG9CaXRzKHB1cnBvc2VzKSB7XG4gIHZhciBhbGxvd2VkUHVycG9zZUlkcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbmV3IFNldCgpO1xuXG4gIHZhciBtYXhQdXJwb3NlSWQgPSAwO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHB1cnBvc2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgbWF4UHVycG9zZUlkID0gTWF0aC5tYXgobWF4UHVycG9zZUlkLCBwdXJwb3Nlc1tpXS5pZCk7XG4gIH1cbiAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFsbG93ZWRQdXJwb3NlSWRzLmxlbmd0aDsgX2kgKz0gMSkge1xuICAgIG1heFB1cnBvc2VJZCA9IE1hdGgubWF4KG1heFB1cnBvc2VJZCwgYWxsb3dlZFB1cnBvc2VJZHNbX2ldKTtcbiAgfVxuXG4gIHZhciBwdXJwb3NlU3RyaW5nID0gJyc7XG4gIGZvciAodmFyIGlkID0gMTsgaWQgPD0gbWF4UHVycG9zZUlkOyBpZCArPSAxKSB7XG4gICAgcHVycG9zZVN0cmluZyArPSBhbGxvd2VkUHVycG9zZUlkcy5pbmRleE9mKGlkKSAhPT0gLTEgPyAnMScgOiAnMCc7XG4gIH1cblxuICByZXR1cm4gcHVycG9zZVN0cmluZztcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgbGlzdCBvZiB2ZW5kb3IgSURzIHRvIHJhbmdlc1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0W119IHZlbmRvcnMgTGlzdCBvZiB2ZW5kb3JzIGZyb20gdGhlIHZlbmRvciBsaXN0IChpbXBvcnRhbnQ6IHRoaXMgbGlzdCBtdXN0IHRvIGJlIHNvcnRlZCBieSBJRClcbiAqIEBwYXJhbSB7aW50ZWdlcltdfSBhbGxvd2VkVmVuZG9ySWRzIExpc3Qgb2YgdmVuZG9yIElEcyB0aGF0IHRoZSB1c2VyIGhhcyBnaXZlbiBjb25zZW50IHRvXG4gKi9cbmZ1bmN0aW9uIGNvbnZlcnRWZW5kb3JzVG9SYW5nZXModmVuZG9ycywgYWxsb3dlZFZlbmRvcklkcykge1xuICB2YXIgcmFuZ2UgPSBbXTtcbiAgdmFyIHJhbmdlcyA9IFtdO1xuXG4gIHZhciBpZHNJbkxpc3QgPSB2ZW5kb3JzLm1hcChmdW5jdGlvbiAodmVuZG9yKSB7XG4gICAgcmV0dXJuIHZlbmRvci5pZDtcbiAgfSk7XG5cbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHZlbmRvcnMubGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgdmFyIGlkID0gdmVuZG9yc1tpbmRleF0uaWQ7XG5cbiAgICBpZiAoYWxsb3dlZFZlbmRvcklkcy5pbmRleE9mKGlkKSAhPT0gLTEpIHtcbiAgICAgIHJhbmdlLnB1c2goaWQpO1xuICAgIH1cblxuICAgIC8vIERvIHdlIG5lZWQgdG8gY2xvc2UgdGhlIGN1cnJlbnQgcmFuZ2U/XG4gICAgaWYgKChhbGxvd2VkVmVuZG9ySWRzLmluZGV4T2YoaWQpID09PSAtMSAvLyBUaGUgdmVuZG9yIHdlIGFyZSBldmFsdWF0aW5nIGlzIG5vdCBhbGxvd2VkXG4gICAgfHwgaW5kZXggPT09IHZlbmRvcnMubGVuZ3RoIC0gMSAvLyBUaGVyZSBpcyBubyBtb3JlIHZlbmRvciB0byBldmFsdWF0ZVxuICAgIHx8IGlkc0luTGlzdC5pbmRleE9mKGlkICsgMSkgPT09IC0xIC8vIFRoZXJlIGlzIG5vIHZlbmRvciBhZnRlciB0aGlzIG9uZSAoaWUgdGhlcmUgaXMgYSBnYXAgaW4gdGhlIHZlbmRvciBJRHMpIDsgd2UgbmVlZCB0byBzdG9wIGhlcmUgdG8gYXZvaWQgaW5jbHVkaW5nIHZlbmRvcnMgdGhhdCBkbyBub3QgaGF2ZSBjb25zZW50XG4gICAgKSAmJiByYW5nZS5sZW5ndGgpIHtcbiAgICAgIHZhciBzdGFydFZlbmRvcklkID0gcmFuZ2Uuc2hpZnQoKTtcbiAgICAgIHZhciBlbmRWZW5kb3JJZCA9IHJhbmdlLnBvcCgpO1xuXG4gICAgICByYW5nZSA9IFtdO1xuXG4gICAgICByYW5nZXMucHVzaCh7XG4gICAgICAgIGlzUmFuZ2U6IHR5cGVvZiBlbmRWZW5kb3JJZCA9PT0gJ251bWJlcicsXG4gICAgICAgIHN0YXJ0VmVuZG9ySWQ6IHN0YXJ0VmVuZG9ySWQsXG4gICAgICAgIGVuZFZlbmRvcklkOiBlbmRWZW5kb3JJZFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJhbmdlcztcbn1cblxuLyoqXG4gKiBHZXQgbWF4VmVuZG9ySWQgZnJvbSB0aGUgbGlzdCBvZiB2ZW5kb3JzIGFuZCByZXR1cm4gdGhhdCBpZFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB2ZW5kb3JzXG4gKi9cbmZ1bmN0aW9uIGdldE1heFZlbmRvcklkKHZlbmRvcnMpIHtcbiAgLy8gRmluZCB0aGUgbWF4IHZlbmRvciBJRCBmcm9tIHRoZSB2ZW5kb3IgbGlzdFxuICB2YXIgbWF4VmVuZG9ySWQgPSAwO1xuXG4gIHZlbmRvcnMuZm9yRWFjaChmdW5jdGlvbiAodmVuZG9yKSB7XG4gICAgaWYgKHZlbmRvci5pZCA+IG1heFZlbmRvcklkKSB7XG4gICAgICBtYXhWZW5kb3JJZCA9IHZlbmRvci5pZDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbWF4VmVuZG9ySWQ7XG59XG4vKipcbiAqIEVuY29kZSBjb25zZW50IGRhdGEgaW50byBhIHdlYi1zYWZlIGJhc2U2NC1lbmNvZGVkIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25zZW50RGF0YSBEYXRhIHRvIGluY2x1ZGUgaW4gdGhlIHN0cmluZyAoc2VlIGB1dGlscy9kZWZpbml0aW9ucy5qc2AgZm9yIHRoZSBsaXN0IG9mIGZpZWxkcylcbiAqL1xuZnVuY3Rpb24gZW5jb2RlQ29uc2VudFN0cmluZyhjb25zZW50RGF0YSkge1xuICB2YXIgbWF4VmVuZG9ySWQgPSBjb25zZW50RGF0YS5tYXhWZW5kb3JJZDtcbiAgdmFyIF9jb25zZW50RGF0YSR2ZW5kb3JMaSA9IGNvbnNlbnREYXRhLnZlbmRvckxpc3QsXG4gICAgICB2ZW5kb3JMaXN0ID0gX2NvbnNlbnREYXRhJHZlbmRvckxpID09PSB1bmRlZmluZWQgPyB7fSA6IF9jb25zZW50RGF0YSR2ZW5kb3JMaSxcbiAgICAgIGFsbG93ZWRQdXJwb3NlSWRzID0gY29uc2VudERhdGEuYWxsb3dlZFB1cnBvc2VJZHMsXG4gICAgICBhbGxvd2VkVmVuZG9ySWRzID0gY29uc2VudERhdGEuYWxsb3dlZFZlbmRvcklkcztcbiAgdmFyIF92ZW5kb3JMaXN0JHZlbmRvcnMgPSB2ZW5kb3JMaXN0LnZlbmRvcnMsXG4gICAgICB2ZW5kb3JzID0gX3ZlbmRvckxpc3QkdmVuZG9ycyA9PT0gdW5kZWZpbmVkID8gW10gOiBfdmVuZG9yTGlzdCR2ZW5kb3JzLFxuICAgICAgX3ZlbmRvckxpc3QkcHVycG9zZXMgPSB2ZW5kb3JMaXN0LnB1cnBvc2VzLFxuICAgICAgcHVycG9zZXMgPSBfdmVuZG9yTGlzdCRwdXJwb3NlcyA9PT0gdW5kZWZpbmVkID8gW10gOiBfdmVuZG9yTGlzdCRwdXJwb3NlcztcblxuICAvLyBpZiBubyBtYXhWZW5kb3JJZCBpcyBpbiB0aGUgQ29uc2VudERhdGEsIGdldCBpdFxuXG4gIGlmICghbWF4VmVuZG9ySWQpIHtcbiAgICBtYXhWZW5kb3JJZCA9IGdldE1heFZlbmRvcklkKHZlbmRvcnMpO1xuICB9XG5cbiAgLy8gRW5jb2RlIHRoZSBkYXRhIHdpdGggYW5kIHdpdGhvdXQgcmFuZ2VzIGFuZCByZXR1cm4gdGhlIHNtYWxsZXN0IGVuY29kZWQgcGF5bG9hZFxuICB2YXIgbm9SYW5nZXNEYXRhID0gZW5jb2RlVG9CYXNlNjQoX2V4dGVuZHMoe30sIGNvbnNlbnREYXRhLCB7XG4gICAgbWF4VmVuZG9ySWQ6IG1heFZlbmRvcklkLFxuICAgIHB1cnBvc2VJZEJpdFN0cmluZzogZW5jb2RlUHVycG9zZUlkc1RvQml0cyhwdXJwb3NlcywgYWxsb3dlZFB1cnBvc2VJZHMpLFxuICAgIGlzUmFuZ2U6IGZhbHNlLFxuICAgIHZlbmRvcklkQml0U3RyaW5nOiBlbmNvZGVWZW5kb3JJZHNUb0JpdHMobWF4VmVuZG9ySWQsIGFsbG93ZWRWZW5kb3JJZHMpXG4gIH0pKTtcblxuICB2YXIgdmVuZG9yUmFuZ2VMaXN0ID0gY29udmVydFZlbmRvcnNUb1Jhbmdlcyh2ZW5kb3JzLCBhbGxvd2VkVmVuZG9ySWRzKTtcblxuICB2YXIgcmFuZ2VzRGF0YSA9IGVuY29kZVRvQmFzZTY0KF9leHRlbmRzKHt9LCBjb25zZW50RGF0YSwge1xuICAgIG1heFZlbmRvcklkOiBtYXhWZW5kb3JJZCxcbiAgICBwdXJwb3NlSWRCaXRTdHJpbmc6IGVuY29kZVB1cnBvc2VJZHNUb0JpdHMocHVycG9zZXMsIGFsbG93ZWRQdXJwb3NlSWRzKSxcbiAgICBpc1JhbmdlOiB0cnVlLFxuICAgIGRlZmF1bHRDb25zZW50OiBmYWxzZSxcbiAgICBudW1FbnRyaWVzOiB2ZW5kb3JSYW5nZUxpc3QubGVuZ3RoLFxuICAgIHZlbmRvclJhbmdlTGlzdDogdmVuZG9yUmFuZ2VMaXN0XG4gIH0pKTtcblxuICByZXR1cm4gbm9SYW5nZXNEYXRhLmxlbmd0aCA8IHJhbmdlc0RhdGEubGVuZ3RoID8gbm9SYW5nZXNEYXRhIDogcmFuZ2VzRGF0YTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNvbnZlcnRWZW5kb3JzVG9SYW5nZXM6IGNvbnZlcnRWZW5kb3JzVG9SYW5nZXMsXG4gIGVuY29kZUNvbnNlbnRTdHJpbmc6IGVuY29kZUNvbnNlbnRTdHJpbmcsXG4gIGdldE1heFZlbmRvcklkOiBnZXRNYXhWZW5kb3JJZCxcbiAgZW5jb2RlVmVuZG9ySWRzVG9CaXRzOiBlbmNvZGVWZW5kb3JJZHNUb0JpdHMsXG4gIGVuY29kZVB1cnBvc2VJZHNUb0JpdHM6IGVuY29kZVB1cnBvc2VJZHNUb0JpdHNcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCcuL2NvbnNlbnQtc3RyaW5nJyksXG4gICAgQ29uc2VudFN0cmluZyA9IF9yZXF1aXJlLkNvbnNlbnRTdHJpbmc7XG5cbnZhciBfcmVxdWlyZTIgPSByZXF1aXJlKCcuL2RlY29kZScpLFxuICAgIGRlY29kZUNvbnNlbnRTdHJpbmcgPSBfcmVxdWlyZTIuZGVjb2RlQ29uc2VudFN0cmluZztcblxudmFyIF9yZXF1aXJlMyA9IHJlcXVpcmUoJy4vZW5jb2RlJyksXG4gICAgZW5jb2RlQ29uc2VudFN0cmluZyA9IF9yZXF1aXJlMy5lbmNvZGVDb25zZW50U3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQ29uc2VudFN0cmluZzogQ29uc2VudFN0cmluZyxcbiAgZGVjb2RlQ29uc2VudFN0cmluZzogZGVjb2RlQ29uc2VudFN0cmluZyxcbiAgZW5jb2RlQ29uc2VudFN0cmluZzogZW5jb2RlQ29uc2VudFN0cmluZ1xufTsiLCIndXNlIHN0cmljdCc7XG5cbi8qIGVzbGludCBuby11c2UtYmVmb3JlLWRlZmluZTogb2ZmICovXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlLTY0Jyk7XG5cbnZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJy4vZGVmaW5pdGlvbnMnKSxcbiAgICB2ZXJzaW9uTnVtQml0cyA9IF9yZXF1aXJlLnZlcnNpb25OdW1CaXRzLFxuICAgIHZlbmRvclZlcnNpb25NYXAgPSBfcmVxdWlyZS52ZW5kb3JWZXJzaW9uTWFwO1xuXG5mdW5jdGlvbiByZXBlYXQoY291bnQpIHtcbiAgdmFyIHN0cmluZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJzAnO1xuXG4gIHZhciBwYWRTdHJpbmcgPSAnJztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpICs9IDEpIHtcbiAgICBwYWRTdHJpbmcgKz0gc3RyaW5nO1xuICB9XG5cbiAgcmV0dXJuIHBhZFN0cmluZztcbn1cblxuZnVuY3Rpb24gcGFkTGVmdChzdHJpbmcsIHBhZGRpbmcpIHtcbiAgcmV0dXJuIHJlcGVhdChNYXRoLm1heCgwLCBwYWRkaW5nKSkgKyBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHBhZFJpZ2h0KHN0cmluZywgcGFkZGluZykge1xuICByZXR1cm4gc3RyaW5nICsgcmVwZWF0KE1hdGgubWF4KDAsIHBhZGRpbmcpKTtcbn1cblxuZnVuY3Rpb24gZW5jb2RlSW50VG9CaXRzKG51bWJlciwgbnVtQml0cykge1xuICB2YXIgYml0U3RyaW5nID0gJyc7XG5cbiAgaWYgKHR5cGVvZiBudW1iZXIgPT09ICdudW1iZXInICYmICFpc05hTihudW1iZXIpKSB7XG4gICAgYml0U3RyaW5nID0gcGFyc2VJbnQobnVtYmVyLCAxMCkudG9TdHJpbmcoMik7XG4gIH1cblxuICAvLyBQYWQgdGhlIHN0cmluZyBpZiBub3QgZmlsbGluZyBhbGwgYml0c1xuICBpZiAobnVtQml0cyA+PSBiaXRTdHJpbmcubGVuZ3RoKSB7XG4gICAgYml0U3RyaW5nID0gcGFkTGVmdChiaXRTdHJpbmcsIG51bUJpdHMgLSBiaXRTdHJpbmcubGVuZ3RoKTtcbiAgfVxuXG4gIC8vIFRydW5jYXRlIHRoZSBzdHJpbmcgaWYgbG9uZ2VyIHRoYW4gdGhlIG51bWJlciBvZiBiaXRzXG4gIGlmIChiaXRTdHJpbmcubGVuZ3RoID4gbnVtQml0cykge1xuICAgIGJpdFN0cmluZyA9IGJpdFN0cmluZy5zdWJzdHJpbmcoMCwgbnVtQml0cyk7XG4gIH1cblxuICByZXR1cm4gYml0U3RyaW5nO1xufVxuXG5mdW5jdGlvbiBlbmNvZGVCb29sVG9CaXRzKHZhbHVlKSB7XG4gIHJldHVybiBlbmNvZGVJbnRUb0JpdHModmFsdWUgPT09IHRydWUgPyAxIDogMCwgMSk7XG59XG5cbmZ1bmN0aW9uIGVuY29kZURhdGVUb0JpdHMoZGF0ZSwgbnVtQml0cykge1xuICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gZW5jb2RlSW50VG9CaXRzKGRhdGUuZ2V0VGltZSgpIC8gMTAwLCBudW1CaXRzKTtcbiAgfVxuICByZXR1cm4gZW5jb2RlSW50VG9CaXRzKGRhdGUsIG51bUJpdHMpO1xufVxuXG5mdW5jdGlvbiBlbmNvZGVMZXR0ZXJUb0JpdHMobGV0dGVyLCBudW1CaXRzKSB7XG4gIHJldHVybiBlbmNvZGVJbnRUb0JpdHMobGV0dGVyLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSAtIDY1LCBudW1CaXRzKTtcbn1cblxuZnVuY3Rpb24gZW5jb2RlTGFuZ3VhZ2VUb0JpdHMobGFuZ3VhZ2UpIHtcbiAgdmFyIG51bUJpdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDEyO1xuXG4gIHJldHVybiBlbmNvZGVMZXR0ZXJUb0JpdHMobGFuZ3VhZ2Uuc2xpY2UoMCwgMSksIG51bUJpdHMgLyAyKSArIGVuY29kZUxldHRlclRvQml0cyhsYW5ndWFnZS5zbGljZSgxKSwgbnVtQml0cyAvIDIpO1xufVxuXG5mdW5jdGlvbiBkZWNvZGVCaXRzVG9JbnQoYml0U3RyaW5nLCBzdGFydCwgbGVuZ3RoKSB7XG4gIHJldHVybiBwYXJzZUludChiaXRTdHJpbmcuc3Vic3RyKHN0YXJ0LCBsZW5ndGgpLCAyKTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlQml0c1RvRGF0ZShiaXRTdHJpbmcsIHN0YXJ0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKGRlY29kZUJpdHNUb0ludChiaXRTdHJpbmcsIHN0YXJ0LCBsZW5ndGgpICogMTAwKTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlQml0c1RvQm9vbChiaXRTdHJpbmcsIHN0YXJ0KSB7XG4gIHJldHVybiBwYXJzZUludChiaXRTdHJpbmcuc3Vic3RyKHN0YXJ0LCAxKSwgMikgPT09IDE7XG59XG5cbmZ1bmN0aW9uIGRlY29kZUJpdHNUb0xldHRlcihiaXRTdHJpbmcpIHtcbiAgdmFyIGxldHRlckNvZGUgPSBkZWNvZGVCaXRzVG9JbnQoYml0U3RyaW5nKTtcbiAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUobGV0dGVyQ29kZSArIDY1KS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBkZWNvZGVCaXRzVG9MYW5ndWFnZShiaXRTdHJpbmcsIHN0YXJ0LCBsZW5ndGgpIHtcbiAgdmFyIGxhbmd1YWdlQml0U3RyaW5nID0gYml0U3RyaW5nLnN1YnN0cihzdGFydCwgbGVuZ3RoKTtcblxuICByZXR1cm4gZGVjb2RlQml0c1RvTGV0dGVyKGxhbmd1YWdlQml0U3RyaW5nLnNsaWNlKDAsIGxlbmd0aCAvIDIpKSArIGRlY29kZUJpdHNUb0xldHRlcihsYW5ndWFnZUJpdFN0cmluZy5zbGljZShsZW5ndGggLyAyKSk7XG59XG5cbmZ1bmN0aW9uIGVuY29kZUZpZWxkKF9yZWYpIHtcbiAgdmFyIGlucHV0ID0gX3JlZi5pbnB1dCxcbiAgICAgIGZpZWxkID0gX3JlZi5maWVsZDtcbiAgdmFyIG5hbWUgPSBmaWVsZC5uYW1lLFxuICAgICAgdHlwZSA9IGZpZWxkLnR5cGUsXG4gICAgICBudW1CaXRzID0gZmllbGQubnVtQml0cyxcbiAgICAgIGVuY29kZXIgPSBmaWVsZC5lbmNvZGVyLFxuICAgICAgdmFsaWRhdG9yID0gZmllbGQudmFsaWRhdG9yO1xuXG5cbiAgaWYgKHR5cGVvZiB2YWxpZGF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAoIXZhbGlkYXRvcihpbnB1dCkpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbiAgaWYgKHR5cGVvZiBlbmNvZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVuY29kZXIoaW5wdXQpO1xuICB9XG5cbiAgdmFyIGJpdENvdW50ID0gdHlwZW9mIG51bUJpdHMgPT09ICdmdW5jdGlvbicgPyBudW1CaXRzKGlucHV0KSA6IG51bUJpdHM7XG5cbiAgdmFyIGlucHV0VmFsdWUgPSBpbnB1dFtuYW1lXTtcbiAgdmFyIGZpZWxkVmFsdWUgPSBpbnB1dFZhbHVlID09PSBudWxsIHx8IGlucHV0VmFsdWUgPT09IHVuZGVmaW5lZCA/ICcnIDogaW5wdXRWYWx1ZTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdpbnQnOlxuICAgICAgcmV0dXJuIGVuY29kZUludFRvQml0cyhmaWVsZFZhbHVlLCBiaXRDb3VudCk7XG4gICAgY2FzZSAnYm9vbCc6XG4gICAgICByZXR1cm4gZW5jb2RlQm9vbFRvQml0cyhmaWVsZFZhbHVlKTtcbiAgICBjYXNlICdkYXRlJzpcbiAgICAgIHJldHVybiBlbmNvZGVEYXRlVG9CaXRzKGZpZWxkVmFsdWUsIGJpdENvdW50KTtcbiAgICBjYXNlICdiaXRzJzpcbiAgICAgIHJldHVybiBwYWRSaWdodChmaWVsZFZhbHVlLCBiaXRDb3VudCAtIGZpZWxkVmFsdWUubGVuZ3RoKS5zdWJzdHJpbmcoMCwgYml0Q291bnQpO1xuICAgIGNhc2UgJ2xpc3QnOlxuICAgICAgcmV0dXJuIGZpZWxkVmFsdWUucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGxpc3RWYWx1ZSkge1xuICAgICAgICByZXR1cm4gYWNjICsgZW5jb2RlRmllbGRzKHtcbiAgICAgICAgICBpbnB1dDogbGlzdFZhbHVlLFxuICAgICAgICAgIGZpZWxkczogZmllbGQuZmllbGRzXG4gICAgICAgIH0pO1xuICAgICAgfSwgJycpO1xuICAgIGNhc2UgJ2xhbmd1YWdlJzpcbiAgICAgIHJldHVybiBlbmNvZGVMYW5ndWFnZVRvQml0cyhmaWVsZFZhbHVlLCBiaXRDb3VudCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ29uc2VudFN0cmluZyAtIFVua25vd24gZmllbGQgdHlwZSAnICsgdHlwZSArICcgZm9yIGVuY29kaW5nJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW5jb2RlRmllbGRzKF9yZWYyKSB7XG4gIHZhciBpbnB1dCA9IF9yZWYyLmlucHV0LFxuICAgICAgZmllbGRzID0gX3JlZjIuZmllbGRzO1xuXG4gIHJldHVybiBmaWVsZHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGZpZWxkKSB7XG4gICAgYWNjICs9IGVuY29kZUZpZWxkKHsgaW5wdXQ6IGlucHV0LCBmaWVsZDogZmllbGQgfSk7XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCAnJyk7XG59XG5cbmZ1bmN0aW9uIGRlY29kZUZpZWxkKF9yZWYzKSB7XG4gIHZhciBpbnB1dCA9IF9yZWYzLmlucHV0LFxuICAgICAgb3V0cHV0ID0gX3JlZjMub3V0cHV0LFxuICAgICAgc3RhcnRQb3NpdGlvbiA9IF9yZWYzLnN0YXJ0UG9zaXRpb24sXG4gICAgICBmaWVsZCA9IF9yZWYzLmZpZWxkO1xuICB2YXIgdHlwZSA9IGZpZWxkLnR5cGUsXG4gICAgICBudW1CaXRzID0gZmllbGQubnVtQml0cyxcbiAgICAgIGRlY29kZXIgPSBmaWVsZC5kZWNvZGVyLFxuICAgICAgdmFsaWRhdG9yID0gZmllbGQudmFsaWRhdG9yLFxuICAgICAgbGlzdENvdW50ID0gZmllbGQubGlzdENvdW50O1xuXG5cbiAgaWYgKHR5cGVvZiB2YWxpZGF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAoIXZhbGlkYXRvcihvdXRwdXQpKSB7XG4gICAgICAvLyBOb3QgZGVjb2RpbmcgdGhpcyBmaWVsZCBzbyBtYWtlIHN1cmUgd2Ugc3RhcnQgcGFyc2luZyB0aGUgbmV4dCBmaWVsZCBhdFxuICAgICAgLy8gdGhlIHNhbWUgcG9pbnRcbiAgICAgIHJldHVybiB7IG5ld1Bvc2l0aW9uOiBzdGFydFBvc2l0aW9uIH07XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiBkZWNvZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGRlY29kZXIoaW5wdXQsIG91dHB1dCwgc3RhcnRQb3NpdGlvbik7XG4gIH1cblxuICB2YXIgYml0Q291bnQgPSB0eXBlb2YgbnVtQml0cyA9PT0gJ2Z1bmN0aW9uJyA/IG51bUJpdHMob3V0cHV0KSA6IG51bUJpdHM7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnaW50JzpcbiAgICAgIHJldHVybiB7IGZpZWxkVmFsdWU6IGRlY29kZUJpdHNUb0ludChpbnB1dCwgc3RhcnRQb3NpdGlvbiwgYml0Q291bnQpIH07XG4gICAgY2FzZSAnYm9vbCc6XG4gICAgICByZXR1cm4geyBmaWVsZFZhbHVlOiBkZWNvZGVCaXRzVG9Cb29sKGlucHV0LCBzdGFydFBvc2l0aW9uKSB9O1xuICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgcmV0dXJuIHsgZmllbGRWYWx1ZTogZGVjb2RlQml0c1RvRGF0ZShpbnB1dCwgc3RhcnRQb3NpdGlvbiwgYml0Q291bnQpIH07XG4gICAgY2FzZSAnYml0cyc6XG4gICAgICByZXR1cm4geyBmaWVsZFZhbHVlOiBpbnB1dC5zdWJzdHIoc3RhcnRQb3NpdGlvbiwgYml0Q291bnQpIH07XG4gICAgY2FzZSAnbGlzdCc6XG4gICAgICByZXR1cm4gZGVjb2RlTGlzdChpbnB1dCwgb3V0cHV0LCBzdGFydFBvc2l0aW9uLCBmaWVsZCwgbGlzdENvdW50KTtcbiAgICBjYXNlICdsYW5ndWFnZSc6XG4gICAgICByZXR1cm4geyBmaWVsZFZhbHVlOiBkZWNvZGVCaXRzVG9MYW5ndWFnZShpbnB1dCwgc3RhcnRQb3NpdGlvbiwgYml0Q291bnQpIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ29uc2VudFN0cmluZyAtIFVua25vd24gZmllbGQgdHlwZSAnICsgdHlwZSArICcgZm9yIGRlY29kaW5nJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVjb2RlTGlzdChpbnB1dCwgb3V0cHV0LCBzdGFydFBvc2l0aW9uLCBmaWVsZCwgbGlzdENvdW50KSB7XG4gIHZhciBsaXN0RW50cnlDb3VudCA9IDA7XG5cbiAgaWYgKHR5cGVvZiBsaXN0Q291bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBsaXN0RW50cnlDb3VudCA9IGxpc3RDb3VudChvdXRwdXQpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0Q291bnQgPT09ICdudW1iZXInKSB7XG4gICAgbGlzdEVudHJ5Q291bnQgPSBsaXN0Q291bnQ7XG4gIH1cblxuICB2YXIgbmV3UG9zaXRpb24gPSBzdGFydFBvc2l0aW9uO1xuICB2YXIgZmllbGRWYWx1ZSA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdEVudHJ5Q291bnQ7IGkgKz0gMSkge1xuICAgIHZhciBkZWNvZGVkRmllbGRzID0gZGVjb2RlRmllbGRzKHtcbiAgICAgIGlucHV0OiBpbnB1dCxcbiAgICAgIGZpZWxkczogZmllbGQuZmllbGRzLFxuICAgICAgc3RhcnRQb3NpdGlvbjogbmV3UG9zaXRpb25cbiAgICB9KTtcblxuICAgIG5ld1Bvc2l0aW9uID0gZGVjb2RlZEZpZWxkcy5uZXdQb3NpdGlvbjtcbiAgICBmaWVsZFZhbHVlLnB1c2goZGVjb2RlZEZpZWxkcy5kZWNvZGVkT2JqZWN0KTtcbiAgfVxuXG4gIHJldHVybiB7IGZpZWxkVmFsdWU6IGZpZWxkVmFsdWUsIG5ld1Bvc2l0aW9uOiBuZXdQb3NpdGlvbiB9O1xufVxuXG5mdW5jdGlvbiBkZWNvZGVGaWVsZHMoX3JlZjQpIHtcbiAgdmFyIGlucHV0ID0gX3JlZjQuaW5wdXQsXG4gICAgICBmaWVsZHMgPSBfcmVmNC5maWVsZHMsXG4gICAgICBfcmVmNCRzdGFydFBvc2l0aW9uID0gX3JlZjQuc3RhcnRQb3NpdGlvbixcbiAgICAgIHN0YXJ0UG9zaXRpb24gPSBfcmVmNCRzdGFydFBvc2l0aW9uID09PSB1bmRlZmluZWQgPyAwIDogX3JlZjQkc3RhcnRQb3NpdGlvbjtcblxuICB2YXIgcG9zaXRpb24gPSBzdGFydFBvc2l0aW9uO1xuXG4gIHZhciBkZWNvZGVkT2JqZWN0ID0gZmllbGRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBmaWVsZCkge1xuICAgIHZhciBuYW1lID0gZmllbGQubmFtZSxcbiAgICAgICAgbnVtQml0cyA9IGZpZWxkLm51bUJpdHM7XG5cbiAgICB2YXIgX2RlY29kZUZpZWxkID0gZGVjb2RlRmllbGQoe1xuICAgICAgaW5wdXQ6IGlucHV0LFxuICAgICAgb3V0cHV0OiBhY2MsXG4gICAgICBzdGFydFBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgIGZpZWxkOiBmaWVsZFxuICAgIH0pLFxuICAgICAgICBmaWVsZFZhbHVlID0gX2RlY29kZUZpZWxkLmZpZWxkVmFsdWUsXG4gICAgICAgIG5ld1Bvc2l0aW9uID0gX2RlY29kZUZpZWxkLm5ld1Bvc2l0aW9uO1xuXG4gICAgaWYgKGZpZWxkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgYWNjW25hbWVdID0gZmllbGRWYWx1ZTtcbiAgICB9XG5cbiAgICBpZiAobmV3UG9zaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcG9zaXRpb24gPSBuZXdQb3NpdGlvbjtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBudW1CaXRzID09PSAnbnVtYmVyJykge1xuICAgICAgcG9zaXRpb24gKz0gbnVtQml0cztcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIHtcbiAgICBkZWNvZGVkT2JqZWN0OiBkZWNvZGVkT2JqZWN0LFxuICAgIG5ld1Bvc2l0aW9uOiBwb3NpdGlvblxuICB9O1xufVxuXG4vKipcbiAqIEVuY29kZSB0aGUgZGF0YSBwcm9wZXJ0aWVzIHRvIGEgYml0IHN0cmluZy4gRW5jb2Rpbmcgd2lsbCBlbmNvZGVcbiAqIGVpdGhlciBgc2VsZWN0ZWRWZW5kb3JJZHNgIG9yIHRoZSBgdmVuZG9yUmFuZ2VMaXN0YCBkZXBlbmRpbmcgb25cbiAqIHRoZSB2YWx1ZSBvZiB0aGUgYGlzUmFuZ2VgIGZsYWcuXG4gKi9cbmZ1bmN0aW9uIGVuY29kZURhdGFUb0JpdHMoZGF0YSwgZGVmaW5pdGlvbk1hcCkge1xuICB2YXIgdmVyc2lvbiA9IGRhdGEudmVyc2lvbjtcblxuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnNlbnRTdHJpbmcgLSBObyB2ZXJzaW9uIGZpZWxkIHRvIGVuY29kZScpO1xuICB9IGVsc2UgaWYgKCFkZWZpbml0aW9uTWFwW3ZlcnNpb25dKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDb25zZW50U3RyaW5nIC0gTm8gZGVmaW5pdGlvbiBmb3IgdmVyc2lvbiAnICsgdmVyc2lvbik7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGZpZWxkcyA9IGRlZmluaXRpb25NYXBbdmVyc2lvbl0uZmllbGRzO1xuICAgIHJldHVybiBlbmNvZGVGaWVsZHMoeyBpbnB1dDogZGF0YSwgZmllbGRzOiBmaWVsZHMgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBUYWtlIGFsbCBmaWVsZHMgcmVxdWlyZWQgdG8gZW5jb2RlIHRoZSBjb25zZW50IHN0cmluZyBhbmQgcHJvZHVjZSB0aGUgVVJMIHNhZmUgQmFzZTY0IGVuY29kZWQgdmFsdWVcbiAqL1xuZnVuY3Rpb24gZW5jb2RlVG9CYXNlNjQoZGF0YSkge1xuICB2YXIgZGVmaW5pdGlvbk1hcCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdmVuZG9yVmVyc2lvbk1hcDtcblxuICB2YXIgYmluYXJ5VmFsdWUgPSBlbmNvZGVEYXRhVG9CaXRzKGRhdGEsIGRlZmluaXRpb25NYXApO1xuXG4gIGlmIChiaW5hcnlWYWx1ZSkge1xuICAgIC8vIFBhZCBsZW5ndGggdG8gbXVsdGlwbGUgb2YgOFxuICAgIHZhciBwYWRkZWRCaW5hcnlWYWx1ZSA9IHBhZFJpZ2h0KGJpbmFyeVZhbHVlLCA3IC0gKGJpbmFyeVZhbHVlLmxlbmd0aCArIDcpICUgOCk7XG5cbiAgICAvLyBFbmNvZGUgdG8gYnl0ZXNcbiAgICB2YXIgYnl0ZXMgPSAnJztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhZGRlZEJpbmFyeVZhbHVlLmxlbmd0aDsgaSArPSA4KSB7XG4gICAgICBieXRlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KHBhZGRlZEJpbmFyeVZhbHVlLnN1YnN0cihpLCA4KSwgMikpO1xuICAgIH1cblxuICAgIC8vIE1ha2UgYmFzZTY0IHN0cmluZyBVUkwgZnJpZW5kbHlcbiAgICByZXR1cm4gYmFzZTY0LmVuY29kZShieXRlcykucmVwbGFjZSgvXFwrL2csICctJykucmVwbGFjZSgvXFwvL2csICdfJykucmVwbGFjZSgvPSskLywgJycpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGRlY29kZUNvbnNlbnRTdHJpbmdCaXRWYWx1ZShiaXRTdHJpbmcpIHtcbiAgdmFyIGRlZmluaXRpb25NYXAgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHZlbmRvclZlcnNpb25NYXA7XG5cbiAgdmFyIHZlcnNpb24gPSBkZWNvZGVCaXRzVG9JbnQoYml0U3RyaW5nLCAwLCB2ZXJzaW9uTnVtQml0cyk7XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBFcnJvcignQ29uc2VudFN0cmluZyAtIFVua25vd24gdmVyc2lvbiBudW1iZXIgaW4gdGhlIHN0cmluZyB0byBkZWNvZGUnKTtcbiAgfSBlbHNlIGlmICghdmVuZG9yVmVyc2lvbk1hcFt2ZXJzaW9uXSkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ29uc2VudFN0cmluZyAtIFVuc3VwcG9ydGVkIHZlcnNpb24gJyArIHZlcnNpb24gKyAnIGluIHRoZSBzdHJpbmcgdG8gZGVjb2RlJyk7XG4gIH1cblxuICB2YXIgZmllbGRzID0gZGVmaW5pdGlvbk1hcFt2ZXJzaW9uXS5maWVsZHM7XG5cbiAgdmFyIF9kZWNvZGVGaWVsZHMgPSBkZWNvZGVGaWVsZHMoeyBpbnB1dDogYml0U3RyaW5nLCBmaWVsZHM6IGZpZWxkcyB9KSxcbiAgICAgIGRlY29kZWRPYmplY3QgPSBfZGVjb2RlRmllbGRzLmRlY29kZWRPYmplY3Q7XG5cbiAgcmV0dXJuIGRlY29kZWRPYmplY3Q7XG59XG5cbi8qKlxuICogRGVjb2RlIHRoZSAoVVJMIHNhZmUgQmFzZTY0KSB2YWx1ZSBvZiBhIGNvbnNlbnQgc3RyaW5nIGludG8gYW4gb2JqZWN0LlxuICovXG5mdW5jdGlvbiBkZWNvZGVGcm9tQmFzZTY0KGNvbnNlbnRTdHJpbmcsIGRlZmluaXRpb25NYXApIHtcbiAgLy8gQWRkIHBhZGRpbmdcbiAgdmFyIHVuc2FmZSA9IGNvbnNlbnRTdHJpbmc7XG4gIHdoaWxlICh1bnNhZmUubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHVuc2FmZSArPSAnPSc7XG4gIH1cblxuICAvLyBSZXBsYWNlIHNhZmUgY2hhcmFjdGVyc1xuICB1bnNhZmUgPSB1bnNhZmUucmVwbGFjZSgvLS9nLCAnKycpLnJlcGxhY2UoL18vZywgJy8nKTtcblxuICB2YXIgYnl0ZXMgPSBiYXNlNjQuZGVjb2RlKHVuc2FmZSk7XG5cbiAgdmFyIGlucHV0Qml0cyA9ICcnO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIGJpdFN0cmluZyA9IGJ5dGVzLmNoYXJDb2RlQXQoaSkudG9TdHJpbmcoMik7XG4gICAgaW5wdXRCaXRzICs9IHBhZExlZnQoYml0U3RyaW5nLCA4IC0gYml0U3RyaW5nLmxlbmd0aCk7XG4gIH1cblxuICByZXR1cm4gZGVjb2RlQ29uc2VudFN0cmluZ0JpdFZhbHVlKGlucHV0Qml0cywgZGVmaW5pdGlvbk1hcCk7XG59XG5cbmZ1bmN0aW9uIGRlY29kZUJpdHNUb0lkcyhiaXRTdHJpbmcpIHtcbiAgcmV0dXJuIGJpdFN0cmluZy5zcGxpdCgnJykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGJpdCwgaW5kZXgpIHtcbiAgICBpZiAoYml0ID09PSAnMScpIHtcbiAgICAgIGlmIChhY2MuaW5kZXhPZihpbmRleCArIDEpID09PSAtMSkge1xuICAgICAgICBhY2MucHVzaChpbmRleCArIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYWNjO1xuICB9LCBbXSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwYWRSaWdodDogcGFkUmlnaHQsXG4gIHBhZExlZnQ6IHBhZExlZnQsXG4gIGVuY29kZUZpZWxkOiBlbmNvZGVGaWVsZCxcbiAgZW5jb2RlRGF0YVRvQml0czogZW5jb2RlRGF0YVRvQml0cyxcbiAgZW5jb2RlSW50VG9CaXRzOiBlbmNvZGVJbnRUb0JpdHMsXG4gIGVuY29kZUJvb2xUb0JpdHM6IGVuY29kZUJvb2xUb0JpdHMsXG4gIGVuY29kZURhdGVUb0JpdHM6IGVuY29kZURhdGVUb0JpdHMsXG4gIGVuY29kZUxhbmd1YWdlVG9CaXRzOiBlbmNvZGVMYW5ndWFnZVRvQml0cyxcbiAgZW5jb2RlTGV0dGVyVG9CaXRzOiBlbmNvZGVMZXR0ZXJUb0JpdHMsXG4gIGVuY29kZVRvQmFzZTY0OiBlbmNvZGVUb0Jhc2U2NCxcbiAgZGVjb2RlQml0c1RvSWRzOiBkZWNvZGVCaXRzVG9JZHMsXG4gIGRlY29kZUJpdHNUb0ludDogZGVjb2RlQml0c1RvSW50LFxuICBkZWNvZGVCaXRzVG9EYXRlOiBkZWNvZGVCaXRzVG9EYXRlLFxuICBkZWNvZGVCaXRzVG9Cb29sOiBkZWNvZGVCaXRzVG9Cb29sLFxuICBkZWNvZGVCaXRzVG9MYW5ndWFnZTogZGVjb2RlQml0c1RvTGFuZ3VhZ2UsXG4gIGRlY29kZUJpdHNUb0xldHRlcjogZGVjb2RlQml0c1RvTGV0dGVyLFxuICBkZWNvZGVGcm9tQmFzZTY0OiBkZWNvZGVGcm9tQmFzZTY0XG59OyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBOdW1iZXIgb2YgYml0cyBmb3IgZW5jb2RpbmcgdGhlIHZlcnNpb24gaW50ZWdlclxuICogRXhwZWN0ZWQgdG8gYmUgdGhlIHNhbWUgYWNyb3NzIHZlcnNpb25zXG4gKi9cbnZhciB2ZXJzaW9uTnVtQml0cyA9IDY7XG5cbi8qKlxuICogRGVmaW5pdGlvbiBvZiB0aGUgY29uc2VudCBzdHJpbmcgZW5jb2RlZCBmb3JtYXRcbiAqXG4gKiBGcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9JbnRlcmFjdGl2ZUFkdmVydGlzaW5nQnVyZWF1L0dEUFItVHJhbnNwYXJlbmN5LWFuZC1Db25zZW50LUZyYW1ld29yay9ibG9iL21hc3Rlci9EcmFmdF9mb3JfUHVibGljX0NvbW1lbnRfVHJhbnNwYXJlbmN5JTIwJTI2JTIwQ29uc2VudCUyMEZyYW1ld29yayUyMC0lMjBjb29raWUlMjBhbmQlMjB2ZW5kb3IlMjBsaXN0JTIwZm9ybWF0JTIwc3BlY2lmaWNhdGlvbiUyMHYxLjBhLnBkZlxuICovXG52YXIgdmVuZG9yVmVyc2lvbk1hcCA9IHtcbiAgLyoqXG4gICAqIFZlcnNpb24gMVxuICAgKi9cbiAgMToge1xuICAgIHZlcnNpb246IDEsXG4gICAgbWV0YWRhdGFGaWVsZHM6IFsndmVyc2lvbicsICdjcmVhdGVkJywgJ2xhc3RVcGRhdGVkJywgJ2NtcElkJywgJ2NtcFZlcnNpb24nLCAnY29uc2VudFNjcmVlbicsICd2ZW5kb3JMaXN0VmVyc2lvbiddLFxuICAgIGZpZWxkczogW3sgbmFtZTogJ3ZlcnNpb24nLCB0eXBlOiAnaW50JywgbnVtQml0czogNiB9LCB7IG5hbWU6ICdjcmVhdGVkJywgdHlwZTogJ2RhdGUnLCBudW1CaXRzOiAzNiB9LCB7IG5hbWU6ICdsYXN0VXBkYXRlZCcsIHR5cGU6ICdkYXRlJywgbnVtQml0czogMzYgfSwgeyBuYW1lOiAnY21wSWQnLCB0eXBlOiAnaW50JywgbnVtQml0czogMTIgfSwgeyBuYW1lOiAnY21wVmVyc2lvbicsIHR5cGU6ICdpbnQnLCBudW1CaXRzOiAxMiB9LCB7IG5hbWU6ICdjb25zZW50U2NyZWVuJywgdHlwZTogJ2ludCcsIG51bUJpdHM6IDYgfSwgeyBuYW1lOiAnY29uc2VudExhbmd1YWdlJywgdHlwZTogJ2xhbmd1YWdlJywgbnVtQml0czogMTIgfSwgeyBuYW1lOiAndmVuZG9yTGlzdFZlcnNpb24nLCB0eXBlOiAnaW50JywgbnVtQml0czogMTIgfSwgeyBuYW1lOiAncHVycG9zZUlkQml0U3RyaW5nJywgdHlwZTogJ2JpdHMnLCBudW1CaXRzOiAyNCB9LCB7IG5hbWU6ICdtYXhWZW5kb3JJZCcsIHR5cGU6ICdpbnQnLCBudW1CaXRzOiAxNiB9LCB7IG5hbWU6ICdpc1JhbmdlJywgdHlwZTogJ2Jvb2wnLCBudW1CaXRzOiAxIH0sIHtcbiAgICAgIG5hbWU6ICd2ZW5kb3JJZEJpdFN0cmluZycsXG4gICAgICB0eXBlOiAnYml0cycsXG4gICAgICBudW1CaXRzOiBmdW5jdGlvbiBudW1CaXRzKGRlY29kZWRPYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIGRlY29kZWRPYmplY3QubWF4VmVuZG9ySWQ7XG4gICAgICB9LFxuICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0b3IoZGVjb2RlZE9iamVjdCkge1xuICAgICAgICByZXR1cm4gIWRlY29kZWRPYmplY3QuaXNSYW5nZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiAnZGVmYXVsdENvbnNlbnQnLFxuICAgICAgdHlwZTogJ2Jvb2wnLFxuICAgICAgbnVtQml0czogMSxcbiAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdG9yKGRlY29kZWRPYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIGRlY29kZWRPYmplY3QuaXNSYW5nZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiAnbnVtRW50cmllcycsXG4gICAgICBudW1CaXRzOiAxMixcbiAgICAgIHR5cGU6ICdpbnQnLFxuICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0b3IoZGVjb2RlZE9iamVjdCkge1xuICAgICAgICByZXR1cm4gZGVjb2RlZE9iamVjdC5pc1JhbmdlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICd2ZW5kb3JSYW5nZUxpc3QnLFxuICAgICAgdHlwZTogJ2xpc3QnLFxuICAgICAgbGlzdENvdW50OiBmdW5jdGlvbiBsaXN0Q291bnQoZGVjb2RlZE9iamVjdCkge1xuICAgICAgICByZXR1cm4gZGVjb2RlZE9iamVjdC5udW1FbnRyaWVzO1xuICAgICAgfSxcbiAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdG9yKGRlY29kZWRPYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIGRlY29kZWRPYmplY3QuaXNSYW5nZTtcbiAgICAgIH0sXG4gICAgICBmaWVsZHM6IFt7XG4gICAgICAgIG5hbWU6ICdpc1JhbmdlJyxcbiAgICAgICAgdHlwZTogJ2Jvb2wnLFxuICAgICAgICBudW1CaXRzOiAxXG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdzdGFydFZlbmRvcklkJyxcbiAgICAgICAgdHlwZTogJ2ludCcsXG4gICAgICAgIG51bUJpdHM6IDE2XG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdlbmRWZW5kb3JJZCcsXG4gICAgICAgIHR5cGU6ICdpbnQnLFxuICAgICAgICBudW1CaXRzOiAxNixcbiAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0b3IoZGVjb2RlZE9iamVjdCkge1xuICAgICAgICAgIHJldHVybiBkZWNvZGVkT2JqZWN0LmlzUmFuZ2U7XG4gICAgICAgIH1cbiAgICAgIH1dXG4gICAgfV1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHZlcnNpb25OdW1CaXRzOiB2ZXJzaW9uTnVtQml0cyxcbiAgdmVuZG9yVmVyc2lvbk1hcDogdmVuZG9yVmVyc2lvbk1hcFxufTsiLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJjb25zdCB7Q29uc2VudFN0cmluZ30gPSByZXF1aXJlKCdjb25zZW50LXN0cmluZycpO1xyXG5cclxuQWRlcXVhLm1vZGVsLmNvbnNlbnQgPSB7XHJcbiAgICBjbXA6IHt9LFxyXG4gICAgdmlldzoge31cclxufTtcclxuXHJcbkFkZXF1YS5tb2RlbC5jb25zZW50LmdldFNldHRpbmdzID0gZnVuY3Rpb24gKGZpbHRlcnMpIHtcclxuICAgIGxldCBzZXR0aW5ncyA9IEFkZXF1YS5zdG9yYWdlLmNvbnNlbnQuc2V0dGluZ3M7XHJcbiAgICBpZiAoZmlsdGVycy53ZWJzaXRlX2lkKVxyXG4gICAgICAgIHNldHRpbmdzID0gc2V0dGluZ3MuZmlsdGVyKHNldHRpbmcgPT4gc2V0dGluZy5pZC53ZWJzaXRlX2lkID09PSBmaWx0ZXJzLndlYnNpdGVfaWQpO1xyXG4gICAgaWYgKGZpbHRlcnMudmVuZG9yX2lkKVxyXG4gICAgICAgIHNldHRpbmdzID0gc2V0dGluZ3MuZmlsdGVyKHNldHRpbmcgPT4gc2V0dGluZy5pZC52ZW5kb3JfaWQgPT09IGZpbHRlcnMudmVuZG9yX2lkKTtcclxuICAgIGlmIChmaWx0ZXJzLnB1cnBvc2VfaWQpXHJcbiAgICAgICAgc2V0dGluZ3MgPSBzZXR0aW5ncy5maWx0ZXIoc2V0dGluZyA9PiBzZXR0aW5nLmlkLnB1cnBvc2VfaWQgPT09IGZpbHRlcnMucHVycG9zZV9pZCk7XHJcblxyXG4gICAgcmV0dXJuIHNldHRpbmdzO1xyXG59O1xyXG5cclxuQWRlcXVhLm1vZGVsLmNvbnNlbnQuZ2V0QWxsU2V0dGluZ3MgPSBmdW5jdGlvbiAoZmlsdGVycywgaWQpIHtcclxuICAgIGNvbnN0IHNldHRpbmdzID0gQWRlcXVhLm1vZGVsLmNvbnNlbnQuZ2V0U2V0dGluZ3MoZmlsdGVycyk7XHJcbiAgICBjb25zdCBzZXR0aW5nc01hcHBlZCA9IHt9O1xyXG5cclxuICAgIGZvciAoY29uc3Qgc2V0dGluZyBvZiBzZXR0aW5ncylcclxuICAgICAgICBzZXR0aW5nc01hcHBlZFtzZXR0aW5nLmlkW2lkXV0gPSBzZXR0aW5nO1xyXG5cclxuICAgIHJldHVybiBzZXR0aW5nc01hcHBlZDtcclxufTtcclxuXHJcbkFkZXF1YS5tb2RlbC5jb25zZW50LnNldFNldHRpbmcgPSBmdW5jdGlvbiAoc2V0dGluZykge1xyXG4gICAgY29uc3QgaW5kZXggPSBBZGVxdWEuc3RvcmFnZS5jb25zZW50LnNldHRpbmdzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQud2Vic2l0ZV9pZCA9PT0gc2V0dGluZy5pZC53ZWJzaXRlX2lkICYmIGl0ZW0uaWQucHVycG9zZV9pZCA9PT0gc2V0dGluZy5pZC5wdXJwb3NlX2lkICYmIGl0ZW0uaWQudmVuZG9yX2lkID09PSBzZXR0aW5nLmlkLnZlbmRvcl9pZCk7XHJcbiAgICBpZiAoaW5kZXggPT09IC0xKVxyXG4gICAgICAgIEFkZXF1YS5zdG9yYWdlLmNvbnNlbnQuc2V0dGluZ3MucHVzaChzZXR0aW5nKTtcclxuICAgIGVsc2VcclxuICAgICAgICBBZGVxdWEuc3RvcmFnZS5jb25zZW50LnNldHRpbmdzW2luZGV4XSA9IHNldHRpbmc7XHJcbiAgICBBZGVxdWEuc2V0U3RvcmFnZSh7fSk7XHJcbn07XHJcblxyXG5BZGVxdWEubW9kZWwuY29uc2VudC5zZXRDb25zZW50ID0gZnVuY3Rpb24gKGFsbG93ZWRQdXJwb3NlcywgYWxsb3dlZFZlbmRvcnMsIHVybCkge1xyXG4gICAgZm9yIChjb25zdCBwdXJwb3NlIG9mIEFkZXF1YS5zdG9yYWdlLnB1cnBvc2VMaXN0KSB7XHJcbiAgICAgICAgQWRlcXVhLm1vZGVsLmNvbnNlbnQuc2V0U2V0dGluZyh7XHJcbiAgICAgICAgICAgIGlkOiB7XHJcbiAgICAgICAgICAgICAgICB3ZWJzaXRlX2lkOiBBZGVxdWEuaG9zdG5hbWUodXJsKSxcclxuICAgICAgICAgICAgICAgIHB1cnBvc2VfaWQ6IHB1cnBvc2UuaWQsXHJcbiAgICAgICAgICAgICAgICB2ZW5kb3JfaWQ6IFwiYWxsXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdmFsdWU6IGFsbG93ZWRQdXJwb3Nlcy5pbmRleE9mKHB1cnBvc2UuaWQpID09PSAtMSA/IDEgOiAtMVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IHZlbmRvciBvZiBBZGVxdWEuc3RvcmFnZS52ZW5kb3JMaXN0KSB7XHJcbiAgICAgICAgQWRlcXVhLm1vZGVsLmNvbnNlbnQuc2V0U2V0dGluZyh7XHJcbiAgICAgICAgICAgIGlkOiB7XHJcbiAgICAgICAgICAgICAgICB3ZWJzaXRlX2lkOiBBZGVxdWEuaG9zdG5hbWUodXJsKSxcclxuICAgICAgICAgICAgICAgIHB1cnBvc2VfaWQ6IFwiYWxsXCIsXHJcbiAgICAgICAgICAgICAgICB2ZW5kb3JfaWQ6IHZlbmRvci5pZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB2YWx1ZTogYWxsb3dlZFZlbmRvcnMuaW5kZXhPZih2ZW5kb3IuaWQpID09PSAtMSA/IDEgOiAtMVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn07XHJcblxyXG5BZGVxdWEubW9kZWwuY29uc2VudC5hY2NlcHRBbGwgPSBmdW5jdGlvbigpe1xyXG4gICAgQWRlcXVhLnN0b3JhZ2UuYWRlcXVhUHVycG9zZUxpc3QuZm9yRWFjaChwdXJwb3NlID0+IHtcclxuICAgICAgICBBZGVxdWEubW9kZWwuY29uc2VudC5zZXRTZXR0aW5nKHtcclxuICAgICAgICAgICAgaWQ6IHtcclxuICAgICAgICAgICAgICAgIHdlYnNpdGVfaWQ6IFwiYWxsXCIsXHJcbiAgICAgICAgICAgICAgICBwdXJwb3NlX2lkOiBwdXJwb3NlLmlkLFxyXG4gICAgICAgICAgICAgICAgdmVuZG9yX2lkOiBcImFsbFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHZhbHVlOiAtMVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxufTtcclxuXHJcbkFkZXF1YS5tb2RlbC5jb25zZW50LnNldENvbnNlbnRTdHJpbmcgPSBmdW5jdGlvbiAoY29uc2VudFN0cmluZywgdXJsKSB7XHJcbiAgICBjb25zdCBjb25zZW50RGF0YSA9IG5ldyBDb25zZW50U3RyaW5nKGNvbnNlbnRTdHJpbmcpO1xyXG4gICAgY29uc2VudERhdGEuc2V0R2xvYmFsVmVuZG9yTGlzdChBZGVxdWEuc3RvcmFnZS5mdWxsVmVuZG9yTGlzdCk7XHJcblxyXG4gICAgY29uc3QgYWxsb3dlZFB1cnBvc2VzID0gY29uc2VudERhdGEuZ2V0UHVycG9zZXNBbGxvd2VkKCk7XHJcbiAgICBjb25zdCBhbGxvd2VkVmVuZG9ycyA9IGNvbnNlbnREYXRhLmdldFZlbmRvcnNBbGxvd2VkKCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBwdXJwb3NlIG9mIEFkZXF1YS5zdG9yYWdlLnB1cnBvc2VMaXN0KSB7XHJcbiAgICAgICAgQWRlcXVhLm1vZGVsLmNvbnNlbnQuc2V0U2V0dGluZyh7XHJcbiAgICAgICAgICAgIGlkOiB7XHJcbiAgICAgICAgICAgICAgICB3ZWJzaXRlX2lkOiBBZGVxdWEuaG9zdG5hbWUodXJsKSxcclxuICAgICAgICAgICAgICAgIHB1cnBvc2VfaWQ6IHB1cnBvc2UuaWQsXHJcbiAgICAgICAgICAgICAgICB2ZW5kb3JfaWQ6IFwiYWxsXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdmFsdWU6IGFsbG93ZWRQdXJwb3Nlcy5pbmRleE9mKHB1cnBvc2UuaWQpID09PSAtMSA/IDEgOiAtMVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IHZlbmRvciBvZiBBZGVxdWEuc3RvcmFnZS52ZW5kb3JMaXN0KSB7XHJcbiAgICAgICAgQWRlcXVhLm1vZGVsLmNvbnNlbnQuc2V0U2V0dGluZyh7XHJcbiAgICAgICAgICAgIGlkOiB7XHJcbiAgICAgICAgICAgICAgICB3ZWJzaXRlX2lkOiBBZGVxdWEuaG9zdG5hbWUodXJsKSxcclxuICAgICAgICAgICAgICAgIHB1cnBvc2VfaWQ6IFwiYWxsXCIsXHJcbiAgICAgICAgICAgICAgICB2ZW5kb3JfaWQ6IHZlbmRvci5pZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB2YWx1ZTogYWxsb3dlZFZlbmRvcnMuaW5kZXhPZih2ZW5kb3IuaWQpID09PSAtMSA/IDEgOiAtMVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn07XHJcblxyXG5BZGVxdWEubW9kZWwuY29uc2VudC5jbXAuZ2V0VmVuZG9yQ29uc2VudHMgPSBmdW5jdGlvbiAod2Vic2l0ZUlkLCBjYWxsYmFjaykge1xyXG5cclxufTtcclxuXHJcbkFkZXF1YS5tb2RlbC5jb25zZW50LmNtcC5nZXRDb25zZW50RGF0YSA9IGZ1bmN0aW9uICh3ZWJzaXRlSWQsIGNhbGxiYWNrKSB7XHJcbiAgICBjb25zdCBkZWZhdWx0U2V0dGluZ3MgPSBBZGVxdWEubW9kZWwuY29uc2VudC5nZXRTZXR0aW5ncyh7d2Vic2l0ZV9pZDogXCJhbGxcIn0pO1xyXG4gICAgY29uc3Qgd2Vic2l0ZVNldHRpbmdzID0gQWRlcXVhLm1vZGVsLmNvbnNlbnQuZ2V0U2V0dGluZ3Moe3dlYnNpdGVfaWQ6IHdlYnNpdGVJZH0pO1xyXG5cclxuICAgIGxldCBhbGxvd2VkUHVycG9zZUlkcyA9IFsxXTtcclxuICAgIGNvbnN0IGZvcmJpZGRlblB1cnBvc2VJZHMgPSBbXTtcclxuXHJcbiAgICBsZXQgYWxsb3dlZFZlbmRvcklkcyA9IFtdO1xyXG4gICAgY29uc3QgZm9yYmlkZGVuVmVuZG9ySWRzID0gW107XHJcblxyXG4gICAgZm9yIChjb25zdCBzZXR0aW5nIG9mIHdlYnNpdGVTZXR0aW5ncykge1xyXG4gICAgICAgIGlmIChzZXR0aW5nLmlkLnB1cnBvc2VfaWQgPT09IFwiYWxsXCIgJiYgc2V0dGluZy5pZC52ZW5kb3JfaWQgIT09IFwiYWxsXCIpIHtcclxuICAgICAgICAgICAgaWYgKGFsbG93ZWRWZW5kb3JJZHMuaW5kZXhPZihzZXR0aW5nLmlkLnZlbmRvcl9pZCkgPT09IC0xICYmIGZvcmJpZGRlblZlbmRvcklkcy5pbmRleE9mKHNldHRpbmcuaWQudmVuZG9yX2lkKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5nLnZhbHVlID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbG93ZWRWZW5kb3JJZHMucHVzaChzZXR0aW5nLmlkLnZlbmRvcl9pZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcmJpZGRlblZlbmRvcklkcy5wdXNoKHNldHRpbmcuaWQudmVuZG9yX2lkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoc2V0dGluZy5pZC5wdXJwb3NlX2lkICE9PSBcImFsbFwiICYmIHNldHRpbmcuaWQudmVuZG9yX2lkID09PSBcImFsbFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChhbGxvd2VkUHVycG9zZUlkcy5pbmRleE9mKHNldHRpbmcuaWQucHVycG9zZV9pZCkgPT09IC0xICYmIGZvcmJpZGRlblB1cnBvc2VJZHMuaW5kZXhPZihzZXR0aW5nLmlkLnB1cnBvc2VfaWQpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmcudmFsdWUgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dlZFB1cnBvc2VJZHMucHVzaChzZXR0aW5nLmlkLnB1cnBvc2VfaWQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JiaWRkZW5QdXJwb3NlSWRzLnB1c2goc2V0dGluZy5pZC5wdXJwb3NlX2lkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChkZWZhdWx0U2V0dGluZ3MuaW5kZXhPZihzZXR0aW5nKSA9PT0gLTEpXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0U2V0dGluZ3MucHVzaChzZXR0aW5nKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IHNldHRpbmcgb2YgZGVmYXVsdFNldHRpbmdzKSB7XHJcbiAgICAgICAgaWYgKHNldHRpbmcuaWQucHVycG9zZV9pZCA9PT0gXCJhbGxcIiAmJiBzZXR0aW5nLmlkLnZlbmRvcl9pZCAhPT0gXCJhbGxcIikge1xyXG4gICAgICAgICAgICBpZiAoYWxsb3dlZFZlbmRvcklkcy5pbmRleE9mKHNldHRpbmcuaWQudmVuZG9yX2lkKSA9PT0gLTEgJiYgZm9yYmlkZGVuVmVuZG9ySWRzLmluZGV4T2Yoc2V0dGluZy5pZC52ZW5kb3JfaWQpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmcudmFsdWUgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dlZFZlbmRvcklkcy5wdXNoKHNldHRpbmcuaWQudmVuZG9yX2lkKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yYmlkZGVuVmVuZG9ySWRzLnB1c2goc2V0dGluZy5pZC52ZW5kb3JfaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChzZXR0aW5nLmlkLnB1cnBvc2VfaWQgIT09IFwiYWxsXCIgJiYgc2V0dGluZy5pZC52ZW5kb3JfaWQgPT09IFwiYWxsXCIpIHtcclxuICAgICAgICAgICAgaWYgKGFsbG93ZWRQdXJwb3NlSWRzLmluZGV4T2Yoc2V0dGluZy5pZC5wdXJwb3NlX2lkKSA9PT0gLTEgJiYgZm9yYmlkZGVuUHVycG9zZUlkcy5pbmRleE9mKHNldHRpbmcuaWQucHVycG9zZV9pZCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZy52YWx1ZSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGxvd2VkUHVycG9zZUlkcy5wdXNoKHNldHRpbmcuaWQucHVycG9zZV9pZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcmJpZGRlblB1cnBvc2VJZHMucHVzaChzZXR0aW5nLmlkLnB1cnBvc2VfaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChzZXR0aW5nLmlkLnB1cnBvc2VfaWQgPT09IFwiYWxsXCIgJiYgc2V0dGluZy5pZC52ZW5kb3JfaWQgPT09IFwiYWxsXCIpIHtcclxuICAgICAgICAgICAgaWYgKHNldHRpbmcudmFsdWUgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHB1cnBvc2VJZCBvZiBBZGVxdWEuc3RvcmFnZS5wdXJwb3NlTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbGxvd2VkUHVycG9zZUlkcy5pbmRleE9mKHB1cnBvc2VJZCkgPT09IC0xICYmIGZvcmJpZGRlblB1cnBvc2VJZHMuaW5kZXhPZihwdXJwb3NlSWQpID09PSAtMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dlZFB1cnBvc2VJZHMucHVzaChwdXJwb3NlSWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB2ZW5kb3JJZCBvZiBBZGVxdWEuc3RvcmFnZS52ZW5kb3JMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFsbG93ZWRWZW5kb3JJZHMuaW5kZXhPZih2ZW5kb3JJZCkgPT09IC0xICYmIGZvcmJpZGRlblZlbmRvcklkcy5pbmRleE9mKHZlbmRvcklkKSA9PT0gLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93ZWRWZW5kb3JJZHMucHVzaCh2ZW5kb3JJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHB1cnBvc2VJZCBvZiBBZGVxdWEuc3RvcmFnZS5wdXJwb3NlTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbGxvd2VkUHVycG9zZUlkcy5pbmRleE9mKHB1cnBvc2VJZCkgPT09IC0xICYmIGZvcmJpZGRlblB1cnBvc2VJZHMuaW5kZXhPZihwdXJwb3NlSWQpID09PSAtMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yYmlkZGVuUHVycG9zZUlkcy5wdXNoKHB1cnBvc2VJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHZlbmRvcklkIG9mIEFkZXF1YS5zdG9yYWdlLnZlbmRvckxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWxsb3dlZFZlbmRvcklkcy5pbmRleE9mKHZlbmRvcklkKSA9PT0gLTEgJiYgZm9yYmlkZGVuVmVuZG9ySWRzLmluZGV4T2YodmVuZG9ySWQpID09PSAtMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yYmlkZGVuVmVuZG9ySWRzLnB1c2godmVuZG9ySWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFsbG93ZWRWZW5kb3JJZHMgPSBhbGxvd2VkVmVuZG9ySWRzLm1hcChpZCA9PiBwYXJzZUludChpZCkpO1xyXG4gICAgYWxsb3dlZFB1cnBvc2VJZHMgPSBhbGxvd2VkUHVycG9zZUlkcy5tYXAoaWQgPT4gcGFyc2VJbnQoaWQpKTtcclxuXHJcbiAgICAvLyBBZGVxdWEuQVBJLnRhYnMucXVlcnkoe1xyXG4gICAgLy8gICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgIC8vICAgICBsYXN0Rm9jdXNlZFdpbmRvdzogdHJ1ZVxyXG4gICAgLy8gfSwgKHRhYnMpID0+IHtcclxuICAgIC8vICAgICBjb25zdCB0YWIgPSB0YWJzWzBdIHx8IHt9O1xyXG4gICAgLy8gICAgIGNvbnN0IHNldHRpbmdzID0gQWRlcXVhLm1vZGVsLmNvbnNlbnQuZ2V0U2V0dGluZ3Moe3dlYnNpdGVfaWQ6IEFkZXF1YS5ob3N0bmFtZSh0YWIudXJsIHx8IFwibm91cmxcIil9KTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgZm9yKGNvbnN0IGluZGV4IGluIHNldHRpbmdzKXtcclxuICAgIC8vICAgICAgICAgc2V0dGluZ3NbaW5kZXhdLmlkLndlYnNpdGVfaWQgPSBBZGVxdWEuaG9zdG5hbWUodGFiLnVybCB8fCBcIm5vdXJsXCIpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vXHJcbiAgICAvLyAgICAgY29uc3QgY29uc2VudERhdGEgPSBuZXcgQ29uc2VudFN0cmluZygpO1xyXG4gICAgLy9cclxuICAgIC8vICAgICBjb25zZW50RGF0YS5zZXRHbG9iYWxWZW5kb3JMaXN0KEFkZXF1YS5zdG9yYWdlLmZ1bGxWZW5kb3JMaXN0KTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgY29uc2VudERhdGEuc2V0Q21wSWQoMSk7XHJcbiAgICAvLyAgICAgY29uc2VudERhdGEuc2V0Q21wVmVyc2lvbigxKTtcclxuICAgIC8vICAgICBjb25zZW50RGF0YS5zZXRDb25zZW50U2NyZWVuKDEpO1xyXG4gICAgLy8gICAgIGNvbnNlbnREYXRhLnNldENvbnNlbnRMYW5ndWFnZSgnZnInKTtcclxuICAgIC8vICAgICBjb25zZW50RGF0YS5zZXRQdXJwb3Nlc0FsbG93ZWQoYWxsb3dlZFB1cnBvc2VJZHMpO1xyXG4gICAgLy8gICAgIGNvbnNlbnREYXRhLnNldFZlbmRvcnNBbGxvd2VkKGFsbG93ZWRWZW5kb3JJZHMpO1xyXG4gICAgaWYodHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICBjYWxsYmFjayh7XHJcbiAgICAgICAgLy8gY29uc2VudFN0cmluZzogY29uc2VudERhdGEuZ2V0Q29uc2VudFN0cmluZygpLFxyXG4gICAgICAgIGFsbG93ZWRWZW5kb3JzOiBhbGxvd2VkVmVuZG9ySWRzLFxyXG4gICAgICAgIGFsbG93ZWRQdXJwb3NlczogYWxsb3dlZFB1cnBvc2VJZHMsXHJcbiAgICAgICAgLy8gc2V0dGluZ3M6IHNldHRpbmdzXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBhbGxvd2VkUHVycG9zZUlkcztcclxuICAgIC8vIH0pO1xyXG59XHJcbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==