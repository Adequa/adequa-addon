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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/interface/popup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/AdequaButton.vue?vue&type=style&index=0&id=0c312ea3&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/AdequaButton.vue?vue&type=style&index=0&id=0c312ea3&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "p[data-v-0c312ea3] {\n  color: gray;\n  border: 2px solid gray;\n  width: 140px;\n  text-align: center;\n  height: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.5s;\n  cursor: pointer;\n}\np span[data-v-0c312ea3] {\n    font-size: 14px;\n}\n.active[data-v-0c312ea3] {\n  border-color: black;\n  color: black;\n}\n.small p[data-v-0c312ea3] {\n  width: 100px !important;\n  height: 35px !important;\n  font-size: 14px;\n}\n.small p span[data-v-0c312ea3] {\n    font-size: 12px;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/ButtonGroup.vue?vue&type=style&index=0&id=2d822227&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/ButtonGroup.vue?vue&type=style&index=0&id=2d822227&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".button-group[data-v-2d822227] {\n  display: flex;\n  justify-content: space-evenly;\n  position: relative;\n}\n.button-group > div[data-v-2d822227] {\n    z-index: 5;\n}\n.button-group #block[data-v-2d822227] {\n    position: absolute;\n    width: 140px;\n    height: 40px;\n    background-color: var(--green);\n    z-index: 1;\n    top: 5px;\n    left: 75px;\n    transition: all 0.5s;\n}\n.button-group .right-position[data-v-2d822227] {\n    left: 285px !important;\n}\n.button-group .red[data-v-2d822227] {\n    background-color: var(--red) !important;\n}\n.small #block[data-v-2d822227] {\n  width: 100px;\n  height: 35px;\n  top: 5px;\n  left: 20px;\n}\n.small .right-position[data-v-2d822227] {\n  left: 135px !important;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/PartnerSetting.vue?vue&type=style&index=0&id=2beffc1e&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/PartnerSetting.vue?vue&type=style&index=0&id=2beffc1e&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "p[data-v-2beffc1e] {\n  font-size: 14px;\n  font-family: \"Josefin Sans\", sans-serif;\n}\n.summary[data-v-2beffc1e] {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  margin-bottom: 10px;\n}\n.summary p[data-v-2beffc1e] {\n    font-family: \"Josefin Sans\", sans-serif;\n    text-align: center;\n    font-size: 14px;\n}\n.summary span[data-v-2beffc1e] {\n    text-align: center;\n    font-size: 40px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: gray;\n}\n.summary > *[data-v-2beffc1e]:first-child {\n    width: 50px;\n}\n.summary > *[data-v-2beffc1e]:nth-child(2) {\n    width: 200px;\n}\n.summary > *[data-v-2beffc1e]:nth-child(3) {\n    width: 250px;\n}\n.description[data-v-2beffc1e] {\n  transform: scaleY(1);\n  transform-origin: 50% 0;\n  transition: transform 0.5s ease;\n}\n.hidden[data-v-2beffc1e] {\n  transform: scaleY(0);\n  transform-origin: 50% 0;\n  transition: none;\n  height: 0;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Popup.vue?vue&type=style&index=0&id=2eeca334&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/Popup.vue?vue&type=style&index=0&id=2eeca334&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#popup[data-v-2eeca334] {\n  margin: 5px;\n}\nmain[data-v-2eeca334] {\n  overflow-y: auto;\n  height: 300px;\n  max-height: 300px;\n}\nh2[data-v-2eeca334] {\n  text-align: center;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-weight: normal;\n  margin: 10px 0;\n}\nfooter[data-v-2eeca334] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nfooter img[data-v-2eeca334] {\n    width: 40px;\n}\nnav[data-v-2eeca334] {\n  display: flex;\n  flex-direction: column;\n}\nnav a[data-v-2eeca334] {\n    text-decoration: none;\n    color: grey;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/PurposeSetting.vue?vue&type=style&index=0&id=ca6b2bf0&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/PurposeSetting.vue?vue&type=style&index=0&id=ca6b2bf0&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "p[data-v-ca6b2bf0] {\n  font-size: 14px;\n  font-family: \"Josefin Sans\", sans-serif;\n}\n.summary[data-v-ca6b2bf0] {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  margin-bottom: 10px;\n}\n.summary p[data-v-ca6b2bf0] {\n    font-family: \"Josefin Sans\", sans-serif;\n    text-align: center;\n    font-size: 14px;\n}\n.summary span[data-v-ca6b2bf0] {\n    text-align: center;\n    font-size: 40px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: gray;\n}\n.summary > *[data-v-ca6b2bf0]:first-child {\n    width: 50px;\n}\n.summary > *[data-v-ca6b2bf0]:nth-child(2) {\n    width: 200px;\n}\n.summary > *[data-v-ca6b2bf0]:nth-child(3) {\n    width: 250px;\n}\n.description[data-v-ca6b2bf0] {\n  transform: scaleY(1);\n  transform-origin: 50% 0;\n  transition: transform 0.5s ease;\n}\n.hidden[data-v-ca6b2bf0] {\n  transform: scaleY(0);\n  transform-origin: 50% 0;\n  transition: none;\n  height: 0;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Settings.vue?vue&type=style&index=0&id=79bfb8d9&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/Settings.vue?vue&type=style&index=0&id=79bfb8d9&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/VendorSettings.vue?vue&type=style&index=0&id=44f257c1&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/VendorSettings.vue?vue&type=style&index=0&id=44f257c1&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/AdequaButton.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/AdequaButton.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "AdequaButton",
    props: {
        "text": String,
        "button-id": Number,
        "active": Boolean,
        "default": Boolean,
        "small": Boolean
    },
    methods: {
        onClick: function(e){
            this.$emit("button-clicked", {"button": this.buttonId});
        }
    },
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/ButtonGroup.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/ButtonGroup.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "ButtonGroup",
    props: {
        "current": Number,
        "change-color": Boolean,
        "small": Boolean
    },
    computed: {
        rightPosition: function(){
            return this.current === 2;
        },
        red: function(){
            return this.rightPosition && this.changeColor;
        }
    }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/PartnerSetting.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/PartnerSetting.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ButtonGroup_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonGroup.vue */ "./src/js/interface/components/ButtonGroup.vue");
/* harmony import */ var _AdequaButton_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdequaButton.vue */ "./src/js/interface/components/AdequaButton.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    name: "PartnerSetting",
    components: {AdequaButton: _AdequaButton_vue__WEBPACK_IMPORTED_MODULE_1__["default"], ButtonGroup: _ButtonGroup_vue__WEBPACK_IMPORTED_MODULE_0__["default"]},
    props: {
        "vendor": Object,
        "setting": Object,
        "website-id": String,
        "is-default": Boolean
    },
    data: function () {
        return {
            allowedActive: false,
            forbiddenActive: true,
            descriptionHidden: true,
            currentSetting: null,
            defaultValue: true
        }
    },
    computed: {
        allowedText: function () {
            return this.allowedActive ? "ACCEPTÉS" : "ACCEPTER";
        },
        forbiddenText: function () {
            return this.forbiddenActive ? "REFUSÉS" : "REFUSER";
        }
    },
    methods: {
        buttonClicked: function (e) {
            this.currentSetting.id.website_id = this.isDefault ? "all" : this.websiteId;

            if (e.button === 1 && !this.allowedActive) {
                this.allowedActive = true;
                this.forbiddenActive = false;
                this.currentSetting.value = -1;
            } else if (e.button === 2 && !this.forbiddenActive) {
                this.allowedActive = false;
                this.forbiddenActive = true;
                this.currentSetting.value = 1;
            }
            this.$emit("settingChanged", this.currentSetting);
            Adequa.API.runtime.sendMessage({what: "setSetting", setting: this.currentSetting});
        },
        expand: function (e) {
            if (this.descriptionHidden) {
                e.target.innerText = '-';
                this.descriptionHidden = false;
            } else {
                e.target.innerText = '+';
                this.descriptionHidden = true;
            }
        }
    },
    watch: {
        setting: {
            handler: function(value, old) {
                if (value) {
                    this.currentSetting = value;
                    this.defaultValue = this.currentSetting.id.website_id === 'all';
                }
                else {
                    this.currentSetting = {
                        id: {
                            purpose_id: "all",
                            vendor_id: this.vendor.id,
                            website_id: this.isDefault ? "all" : this.websiteId
                        },
                        value: 0
                    };
                    this.defaultValue = true;
                }

                if (this.currentSetting.value === -1) {
                    this.allowedActive = true;
                    this.forbiddenActive = false;
                } else {
                    this.allowedActive = false;
                    this.forbiddenActive = true;
                }
            },
            deep: true
        },
        websiteId: function (value, oldValue) {
            if(this.currentSetting.id.website_id === null && value !== null)
                this.currentSetting.id.website_id = value;
        }
    },
    mounted: function () {
        if (this.setting) {
            this.currentSetting = this.setting;
            this.defaultValue = false;
        }
        else if (this.vendor) {
            this.currentSetting = {
                id: {
                    purpose_id: "all",
                    vendor_id: this.vendor.id,
                    website_id: this.isDefault ? "all" : this.websiteId
                },
                value: 0
            };
            this.defaultValue = true;
        }

        if (this.currentSetting.value === -1) {
            this.allowedActive = true;
            this.forbiddenActive = false;
        } else {
            this.allowedActive = false;
            this.forbiddenActive = true;
        }
    }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Popup.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/Popup.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdequaButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdequaButton.vue */ "./src/js/interface/components/AdequaButton.vue");
/* harmony import */ var _ButtonGroup_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButtonGroup.vue */ "./src/js/interface/components/ButtonGroup.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    name: "Popup",
    components: {ButtonGroup: _ButtonGroup_vue__WEBPACK_IMPORTED_MODULE_1__["default"], AdequaButton: _AdequaButton_vue__WEBPACK_IMPORTED_MODULE_0__["default"]},
    data: function () {
        return {
            defaultActive: false,
            websiteActive: true
        }
    },
    methods: {
        buttonClicked: function (e) {
            if (e.button === 1 && !this.defaultActive) {
                this.defaultActive = true;
                this.websiteActive = false;
            } else if (e.button === 2 && !this.websiteActive) {
                this.defaultActive = false;
                this.websiteActive = true;
            }
        }
    }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/PurposeSetting.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/PurposeSetting.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ButtonGroup_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonGroup.vue */ "./src/js/interface/components/ButtonGroup.vue");
/* harmony import */ var _AdequaButton_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdequaButton.vue */ "./src/js/interface/components/AdequaButton.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    name: "PurposeSetting",
    components: {AdequaButton: _AdequaButton_vue__WEBPACK_IMPORTED_MODULE_1__["default"], ButtonGroup: _ButtonGroup_vue__WEBPACK_IMPORTED_MODULE_0__["default"]},
    props: {
        "purpose": Object,
        "setting": Object,
        "website-id": String,
        "is-default": Boolean
    },
    data: function () {
        return {
            allowedActive: false,
            forbiddenActive: true,
            descriptionHidden: true,
            currentSetting: null,
            defaultValue: true
        }
    },
    computed: {
        allowedText: function () {
            return this.allowedActive ? "ACCEPTÉS" : "ACCEPTER";
        },
        forbiddenText: function () {
            return this.forbiddenActive ? "REFUSÉS" : "REFUSER";
        }
    },
    methods: {
        buttonClicked: function (e) {
            this.currentSetting.id.website_id = this.isDefault ? "all" : this.websiteId;

            if (e.button === 1 && !this.allowedActive) {
                this.allowedActive = true;
                this.forbiddenActive = false;
                this.currentSetting.value = -1;
            } else if (e.button === 2 && !this.forbiddenActive) {
                this.allowedActive = false;
                this.forbiddenActive = true;
                this.currentSetting.value = 1;
            }
            this.$emit("settingChanged", this.currentSetting);
            Adequa.API.runtime.sendMessage({what: "setSetting", setting: this.currentSetting});
        },
        expand: function (e) {
            if (this.descriptionHidden) {
                e.target.innerText = '-';
                this.descriptionHidden = false;
            } else {
                e.target.innerText = '+';
                this.descriptionHidden = true;
            }
        }
    },
    watch: {
        setting: {
            handler: function (value, old) {
                if (value) {
                    this.currentSetting = value;
                    this.defaultValue = this.currentSetting.id.website_id === 'all';
                } else {
                    this.currentSetting = {
                        id: {
                            purpose_id: this.purpose.id,
                            vendor_id: "all",
                            website_id: this.isDefault ? "all" : this.websiteId
                        },
                        value: 0
                    };
                    this.defaultValue = true;
                }

                if (this.currentSetting.value === -1) {
                    this.allowedActive = true;
                    this.forbiddenActive = false;
                } else {
                    this.allowedActive = false;
                    this.forbiddenActive = true;
                }
            },
            deep: true
        },
        websiteId: function (value, oldValue) {
            if (this.currentSetting.id.website_id === null && value !== null)
                this.currentSetting.id.website_id = value;
        }
    },
    mounted: function () {
        if (this.setting) {
            this.currentSetting = this.setting;
            this.defaultValue = false;
        } else if (this.purpose) {
            this.currentSetting = {
                id: {
                    purpose_id: this.purpose.id,
                    vendor_id: "all",
                    website_id: this.isDefault ? "all" : this.websiteId
                },
                value: 0
            };
            this.defaultValue = true;
        }

        if (this.currentSetting.value === -1) {
            this.allowedActive = true;
            this.forbiddenActive = false;
        } else {
            this.allowedActive = false;
            this.forbiddenActive = true;
        }
    }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Settings.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/Settings.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PurposeSetting_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PurposeSetting.vue */ "./src/js/interface/components/PurposeSetting.vue");
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: "Settings",
    components: {PurposeSetting: _PurposeSetting_vue__WEBPACK_IMPORTED_MODULE_0__["default"]},
    data: function(){
        return {
            websiteId: null,
            defaultSettings: null,
            settings: null,
            purposes: null
        }
    },
    props: ['website-settings'],
    methods: {
        updateSetting(setting){
            if(this.websiteSettings) {
                this.settings[setting.id.purpose_id] = setting;
            }
            else {
                this.defaultSettings[setting.id.purpose_id] = setting;
            }
        }
    },
    computed: {
        getSetting(){
            if(this.websiteSettings) {
                if (this.settings) return this.settings;
            }
            else {
                if (this.defaultSettings) return this.defaultSettings;
            }

            return {};
        }
    },
    mounted: function(){
        Adequa.API.runtime.sendMessage({what: "getWebsiteId"}, (id) => {
            this.websiteId = id;
        });
        Adequa.API.runtime.sendMessage({what: "getPurposeList"}, (purposes) => {
            this.purposes = purposes;
        });
        Adequa.API.runtime.sendMessage({what: "getDefaultPurposeSettings"}, (settings) => {
            this.defaultSettings = settings;
        });
        Adequa.API.runtime.sendMessage({what: "getWebsitePurposeSettings"}, (settings) => {
            this.settings = settings;
        });
    }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/VendorSettings.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/VendorSettings.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PartnerSetting_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PartnerSetting.vue */ "./src/js/interface/components/PartnerSetting.vue");
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: "VendorSettings",
    components: {PartnerSetting: _PartnerSetting_vue__WEBPACK_IMPORTED_MODULE_0__["default"]},
    data: function(){
        return {
            websiteId: null,
            defaultSettings: null,
            settings: null,
            vendors: null
        }
    },
    props: ['website-settings'],
    methods: {
        updateSetting(setting){
            if(this.websiteSettings) {
                this.settings[setting.id.vendor_id] = setting;
            }
            else {
                this.defaultSettings[setting.id.vendor_id] = setting;
            }
        }
    },
    computed: {
        getSetting(){
            if(this.websiteSettings) {
                if (this.settings) return this.settings;
            }
            else {
                if (this.defaultSettings) return this.defaultSettings;
            }

            return {};
        }
    },
    mounted: function(){
        Adequa.API.runtime.sendMessage({what: "getWebsiteId"}, (id) => {
            this.websiteId = id;
        });
        Adequa.API.runtime.sendMessage({what: "getVendorList"}, (vendors) => {
            this.vendors = vendors;
        });
        Adequa.API.runtime.sendMessage({what: "getDefaultVendorSettings"}, (settings) => {
            console.log(settings)
            this.defaultSettings = settings;
        });
        Adequa.API.runtime.sendMessage({what: "getWebsiteVendorSettings"}, (settings) => {
            this.settings = settings;
        });
    }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/AdequaButton.vue?vue&type=template&id=0c312ea3&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/AdequaButton.vue?vue&type=template&id=0c312ea3&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { class: { small: _vm.small } }, [
    _c("p", { class: { active: _vm.active }, on: { click: _vm.onClick } }, [
      _vm._v(_vm._s(_vm.text))
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/ButtonGroup.vue?vue&type=template&id=2d822227&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/ButtonGroup.vue?vue&type=template&id=2d822227&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "button-group", class: { small: _vm.small } },
    [
      _vm._t("default"),
      _vm._v(" "),
      _c("div", {
        class: { "right-position": _vm.rightPosition, red: _vm.red },
        attrs: { id: "block" }
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/PartnerSetting.vue?vue&type=template&id=2beffc1e&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/PartnerSetting.vue?vue&type=template&id=2beffc1e&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "summary" },
      [
        _c("span", { on: { click: _vm.expand } }),
        _vm._v(" "),
        _c("p", [_vm._v(_vm._s(_vm.vendor.name))]),
        _vm._v(" "),
        _c(
          "button-group",
          {
            attrs: {
              current: _vm.allowedActive ? 1 : 2,
              "change-color": true,
              small: true
            }
          },
          [
            _c("adequa-button", {
              attrs: {
                text: _vm.allowedText,
                "button-id": 1,
                active: _vm.allowedActive
              },
              on: { "button-clicked": _vm.buttonClicked }
            }),
            _vm._v(" "),
            _c("adequa-button", {
              attrs: {
                text: _vm.forbiddenText,
                "button-id": 2,
                active: _vm.forbiddenActive
              },
              on: { "button-clicked": _vm.buttonClicked }
            })
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "description", class: { hidden: _vm.descriptionHidden } },
      [_c("p", [_vm._v(_vm._s(_vm.vendor.description))])]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Popup.vue?vue&type=template&id=2eeca334&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/Popup.vue?vue&type=template&id=2eeca334&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "popup" } }, [
    _c(
      "header",
      [
        _c("h2", [_vm._v("RÉGLAGES")]),
        _vm._v(" "),
        _c(
          "button-group",
          { attrs: { current: _vm.defaultActive ? 1 : 2 } },
          [
            _c("adequa-button", {
              attrs: {
                text: "PAR DÉFAUT",
                "button-id": 1,
                active: _vm.defaultActive
              },
              on: { "button-clicked": _vm.buttonClicked }
            }),
            _vm._v(" "),
            _c("adequa-button", {
              attrs: {
                text: "SUR CE SITE",
                "button-id": 2,
                active: _vm.websiteActive
              },
              on: { "button-clicked": _vm.buttonClicked }
            })
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _c(
      "main",
      [_c("router-view", { attrs: { "website-settings": _vm.websiteActive } })],
      1
    ),
    _vm._v(" "),
    _c(
      "nav",
      [
        this.$route.path === "/"
          ? _c(
              "router-link",
              {
                staticStyle: { "align-self": "flex-end" },
                attrs: { to: "/vendors" }
              },
              [_vm._v("PAR PARTENAIRE >")]
            )
          : _vm._e(),
        _vm._v(" "),
        this.$route.path === "/vendors"
          ? _c("router-link", { attrs: { to: "/" } }, [_vm._v("< PAR USAGE")])
          : _vm._e()
      ],
      1
    ),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", [
      _c("img", { attrs: { src: "img/icon_adequa.png", alt: "logo adequa" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/PurposeSetting.vue?vue&type=template&id=ca6b2bf0&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/PurposeSetting.vue?vue&type=template&id=ca6b2bf0&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "summary" },
      [
        _c("span", { on: { click: _vm.expand } }, [_vm._v("+")]),
        _vm._v(" "),
        _c("p", [_vm._v(_vm._s(_vm.purpose.name))]),
        _vm._v(" "),
        _c(
          "button-group",
          {
            attrs: {
              current: _vm.allowedActive ? 1 : 2,
              "change-color": true,
              small: true
            }
          },
          [
            _c("adequa-button", {
              attrs: {
                text: _vm.allowedText,
                "button-id": 1,
                active: _vm.allowedActive
              },
              on: { "button-clicked": _vm.buttonClicked }
            }),
            _vm._v(" "),
            _c("adequa-button", {
              attrs: {
                text: _vm.forbiddenText,
                "button-id": 2,
                active: _vm.forbiddenActive
              },
              on: { "button-clicked": _vm.buttonClicked }
            })
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "description", class: { hidden: _vm.descriptionHidden } },
      [_c("p", [_vm._v(_vm._s(_vm.purpose.description))])]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Settings.vue?vue&type=template&id=79bfb8d9&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/Settings.vue?vue&type=template&id=79bfb8d9&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._l(_vm.purposes, function(purpose) {
      return _c("purpose-setting", {
        key: purpose.id,
        attrs: {
          purpose: purpose,
          setting: _vm.getSetting[purpose.id],
          "is-default": !_vm.websiteSettings,
          "website-id": _vm.websiteId
        },
        on: { settingChanged: _vm.updateSetting }
      })
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/VendorSettings.vue?vue&type=template&id=44f257c1&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/VendorSettings.vue?vue&type=template&id=44f257c1&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._l(_vm.vendors, function(vendor) {
      return _c("partner-setting", {
        key: vendor.id,
        attrs: {
          vendor: vendor,
          setting: _vm.getSetting[vendor.id],
          "is-default": !_vm.websiteSettings,
          "website-id": _vm.websiteId
        },
        on: { settingChanged: _vm.updateSetting }
      })
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/AdequaButton.vue?vue&type=style&index=0&id=0c312ea3&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/AdequaButton.vue?vue&type=style&index=0&id=0c312ea3&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdequaButton.vue?vue&type=style&index=0&id=0c312ea3&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/AdequaButton.vue?vue&type=style&index=0&id=0c312ea3&scoped=true&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("4acff7fc", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/ButtonGroup.vue?vue&type=style&index=0&id=2d822227&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/ButtonGroup.vue?vue&type=style&index=0&id=2d822227&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./ButtonGroup.vue?vue&type=style&index=0&id=2d822227&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/ButtonGroup.vue?vue&type=style&index=0&id=2d822227&scoped=true&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("47541d1e", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/PartnerSetting.vue?vue&type=style&index=0&id=2beffc1e&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/PartnerSetting.vue?vue&type=style&index=0&id=2beffc1e&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./PartnerSetting.vue?vue&type=style&index=0&id=2beffc1e&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/PartnerSetting.vue?vue&type=style&index=0&id=2beffc1e&scoped=true&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5528fb64", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Popup.vue?vue&type=style&index=0&id=2eeca334&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/Popup.vue?vue&type=style&index=0&id=2eeca334&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Popup.vue?vue&type=style&index=0&id=2eeca334&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Popup.vue?vue&type=style&index=0&id=2eeca334&scoped=true&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("787225c8", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/PurposeSetting.vue?vue&type=style&index=0&id=ca6b2bf0&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/PurposeSetting.vue?vue&type=style&index=0&id=ca6b2bf0&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./PurposeSetting.vue?vue&type=style&index=0&id=ca6b2bf0&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/PurposeSetting.vue?vue&type=style&index=0&id=ca6b2bf0&scoped=true&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("9610a520", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Settings.vue?vue&type=style&index=0&id=79bfb8d9&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/Settings.vue?vue&type=style&index=0&id=79bfb8d9&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=style&index=0&id=79bfb8d9&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Settings.vue?vue&type=style&index=0&id=79bfb8d9&scoped=true&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("ab84e4c6", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/VendorSettings.vue?vue&type=style&index=0&id=44f257c1&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/VendorSettings.vue?vue&type=style&index=0&id=44f257c1&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./VendorSettings.vue?vue&type=style&index=0&id=44f257c1&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/VendorSettings.vue?vue&type=style&index=0&id=44f257c1&scoped=true&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5d4935e8", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./src/js/interface/components/AdequaButton.vue":
/*!******************************************************!*\
  !*** ./src/js/interface/components/AdequaButton.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdequaButton_vue_vue_type_template_id_0c312ea3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdequaButton.vue?vue&type=template&id=0c312ea3&scoped=true& */ "./src/js/interface/components/AdequaButton.vue?vue&type=template&id=0c312ea3&scoped=true&");
/* harmony import */ var _AdequaButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdequaButton.vue?vue&type=script&lang=js& */ "./src/js/interface/components/AdequaButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AdequaButton_vue_vue_type_style_index_0_id_0c312ea3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdequaButton.vue?vue&type=style&index=0&id=0c312ea3&scoped=true&lang=scss& */ "./src/js/interface/components/AdequaButton.vue?vue&type=style&index=0&id=0c312ea3&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AdequaButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdequaButton_vue_vue_type_template_id_0c312ea3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdequaButton_vue_vue_type_template_id_0c312ea3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0c312ea3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/interface/components/AdequaButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/interface/components/AdequaButton.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./src/js/interface/components/AdequaButton.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_AdequaButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdequaButton.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/AdequaButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_AdequaButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/interface/components/AdequaButton.vue?vue&type=style&index=0&id=0c312ea3&scoped=true&lang=scss&":
/*!****************************************************************************************************************!*\
  !*** ./src/js/interface/components/AdequaButton.vue?vue&type=style&index=0&id=0c312ea3&scoped=true&lang=scss& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdequaButton_vue_vue_type_style_index_0_id_0c312ea3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdequaButton.vue?vue&type=style&index=0&id=0c312ea3&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/AdequaButton.vue?vue&type=style&index=0&id=0c312ea3&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdequaButton_vue_vue_type_style_index_0_id_0c312ea3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdequaButton_vue_vue_type_style_index_0_id_0c312ea3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdequaButton_vue_vue_type_style_index_0_id_0c312ea3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdequaButton_vue_vue_type_style_index_0_id_0c312ea3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_AdequaButton_vue_vue_type_style_index_0_id_0c312ea3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/interface/components/AdequaButton.vue?vue&type=template&id=0c312ea3&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./src/js/interface/components/AdequaButton.vue?vue&type=template&id=0c312ea3&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdequaButton_vue_vue_type_template_id_0c312ea3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdequaButton.vue?vue&type=template&id=0c312ea3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/AdequaButton.vue?vue&type=template&id=0c312ea3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdequaButton_vue_vue_type_template_id_0c312ea3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdequaButton_vue_vue_type_template_id_0c312ea3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/interface/components/ButtonGroup.vue":
/*!*****************************************************!*\
  !*** ./src/js/interface/components/ButtonGroup.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ButtonGroup_vue_vue_type_template_id_2d822227_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonGroup.vue?vue&type=template&id=2d822227&scoped=true& */ "./src/js/interface/components/ButtonGroup.vue?vue&type=template&id=2d822227&scoped=true&");
/* harmony import */ var _ButtonGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButtonGroup.vue?vue&type=script&lang=js& */ "./src/js/interface/components/ButtonGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ButtonGroup_vue_vue_type_style_index_0_id_2d822227_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ButtonGroup.vue?vue&type=style&index=0&id=2d822227&scoped=true&lang=scss& */ "./src/js/interface/components/ButtonGroup.vue?vue&type=style&index=0&id=2d822227&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ButtonGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ButtonGroup_vue_vue_type_template_id_2d822227_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ButtonGroup_vue_vue_type_template_id_2d822227_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2d822227",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/interface/components/ButtonGroup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/interface/components/ButtonGroup.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./src/js/interface/components/ButtonGroup.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib??vue-loader-options!./ButtonGroup.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/ButtonGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/interface/components/ButtonGroup.vue?vue&type=style&index=0&id=2d822227&scoped=true&lang=scss&":
/*!***************************************************************************************************************!*\
  !*** ./src/js/interface/components/ButtonGroup.vue?vue&type=style&index=0&id=2d822227&scoped=true&lang=scss& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGroup_vue_vue_type_style_index_0_id_2d822227_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./ButtonGroup.vue?vue&type=style&index=0&id=2d822227&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/ButtonGroup.vue?vue&type=style&index=0&id=2d822227&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGroup_vue_vue_type_style_index_0_id_2d822227_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGroup_vue_vue_type_style_index_0_id_2d822227_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGroup_vue_vue_type_style_index_0_id_2d822227_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGroup_vue_vue_type_style_index_0_id_2d822227_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGroup_vue_vue_type_style_index_0_id_2d822227_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/interface/components/ButtonGroup.vue?vue&type=template&id=2d822227&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./src/js/interface/components/ButtonGroup.vue?vue&type=template&id=2d822227&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGroup_vue_vue_type_template_id_2d822227_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ButtonGroup.vue?vue&type=template&id=2d822227&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/ButtonGroup.vue?vue&type=template&id=2d822227&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGroup_vue_vue_type_template_id_2d822227_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGroup_vue_vue_type_template_id_2d822227_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/interface/components/PartnerSetting.vue":
/*!********************************************************!*\
  !*** ./src/js/interface/components/PartnerSetting.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PartnerSetting_vue_vue_type_template_id_2beffc1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PartnerSetting.vue?vue&type=template&id=2beffc1e&scoped=true& */ "./src/js/interface/components/PartnerSetting.vue?vue&type=template&id=2beffc1e&scoped=true&");
/* harmony import */ var _PartnerSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PartnerSetting.vue?vue&type=script&lang=js& */ "./src/js/interface/components/PartnerSetting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PartnerSetting_vue_vue_type_style_index_0_id_2beffc1e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PartnerSetting.vue?vue&type=style&index=0&id=2beffc1e&scoped=true&lang=scss& */ "./src/js/interface/components/PartnerSetting.vue?vue&type=style&index=0&id=2beffc1e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PartnerSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PartnerSetting_vue_vue_type_template_id_2beffc1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PartnerSetting_vue_vue_type_template_id_2beffc1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2beffc1e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/interface/components/PartnerSetting.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/interface/components/PartnerSetting.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./src/js/interface/components/PartnerSetting.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_PartnerSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib??vue-loader-options!./PartnerSetting.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/PartnerSetting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_PartnerSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/interface/components/PartnerSetting.vue?vue&type=style&index=0&id=2beffc1e&scoped=true&lang=scss&":
/*!******************************************************************************************************************!*\
  !*** ./src/js/interface/components/PartnerSetting.vue?vue&type=style&index=0&id=2beffc1e&scoped=true&lang=scss& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PartnerSetting_vue_vue_type_style_index_0_id_2beffc1e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./PartnerSetting.vue?vue&type=style&index=0&id=2beffc1e&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/PartnerSetting.vue?vue&type=style&index=0&id=2beffc1e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PartnerSetting_vue_vue_type_style_index_0_id_2beffc1e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PartnerSetting_vue_vue_type_style_index_0_id_2beffc1e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PartnerSetting_vue_vue_type_style_index_0_id_2beffc1e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PartnerSetting_vue_vue_type_style_index_0_id_2beffc1e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PartnerSetting_vue_vue_type_style_index_0_id_2beffc1e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/interface/components/PartnerSetting.vue?vue&type=template&id=2beffc1e&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./src/js/interface/components/PartnerSetting.vue?vue&type=template&id=2beffc1e&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PartnerSetting_vue_vue_type_template_id_2beffc1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PartnerSetting.vue?vue&type=template&id=2beffc1e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/PartnerSetting.vue?vue&type=template&id=2beffc1e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PartnerSetting_vue_vue_type_template_id_2beffc1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PartnerSetting_vue_vue_type_template_id_2beffc1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/interface/components/Popup.vue":
/*!***********************************************!*\
  !*** ./src/js/interface/components/Popup.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Popup_vue_vue_type_template_id_2eeca334_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.vue?vue&type=template&id=2eeca334&scoped=true& */ "./src/js/interface/components/Popup.vue?vue&type=template&id=2eeca334&scoped=true&");
/* harmony import */ var _Popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Popup.vue?vue&type=script&lang=js& */ "./src/js/interface/components/Popup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Popup_vue_vue_type_style_index_0_id_2eeca334_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Popup.vue?vue&type=style&index=0&id=2eeca334&scoped=true&lang=scss& */ "./src/js/interface/components/Popup.vue?vue&type=style&index=0&id=2eeca334&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Popup_vue_vue_type_template_id_2eeca334_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Popup_vue_vue_type_template_id_2eeca334_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2eeca334",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/interface/components/Popup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/interface/components/Popup.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./src/js/interface/components/Popup.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib??vue-loader-options!./Popup.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Popup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/interface/components/Popup.vue?vue&type=style&index=0&id=2eeca334&scoped=true&lang=scss&":
/*!*********************************************************************************************************!*\
  !*** ./src/js/interface/components/Popup.vue?vue&type=style&index=0&id=2eeca334&scoped=true&lang=scss& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Popup_vue_vue_type_style_index_0_id_2eeca334_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Popup.vue?vue&type=style&index=0&id=2eeca334&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Popup.vue?vue&type=style&index=0&id=2eeca334&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Popup_vue_vue_type_style_index_0_id_2eeca334_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Popup_vue_vue_type_style_index_0_id_2eeca334_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Popup_vue_vue_type_style_index_0_id_2eeca334_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Popup_vue_vue_type_style_index_0_id_2eeca334_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Popup_vue_vue_type_style_index_0_id_2eeca334_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/interface/components/Popup.vue?vue&type=template&id=2eeca334&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./src/js/interface/components/Popup.vue?vue&type=template&id=2eeca334&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Popup_vue_vue_type_template_id_2eeca334_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Popup.vue?vue&type=template&id=2eeca334&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Popup.vue?vue&type=template&id=2eeca334&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Popup_vue_vue_type_template_id_2eeca334_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Popup_vue_vue_type_template_id_2eeca334_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/interface/components/PurposeSetting.vue":
/*!********************************************************!*\
  !*** ./src/js/interface/components/PurposeSetting.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PurposeSetting_vue_vue_type_template_id_ca6b2bf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PurposeSetting.vue?vue&type=template&id=ca6b2bf0&scoped=true& */ "./src/js/interface/components/PurposeSetting.vue?vue&type=template&id=ca6b2bf0&scoped=true&");
/* harmony import */ var _PurposeSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PurposeSetting.vue?vue&type=script&lang=js& */ "./src/js/interface/components/PurposeSetting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PurposeSetting_vue_vue_type_style_index_0_id_ca6b2bf0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PurposeSetting.vue?vue&type=style&index=0&id=ca6b2bf0&scoped=true&lang=scss& */ "./src/js/interface/components/PurposeSetting.vue?vue&type=style&index=0&id=ca6b2bf0&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PurposeSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PurposeSetting_vue_vue_type_template_id_ca6b2bf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PurposeSetting_vue_vue_type_template_id_ca6b2bf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ca6b2bf0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/interface/components/PurposeSetting.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/interface/components/PurposeSetting.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./src/js/interface/components/PurposeSetting.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_PurposeSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib??vue-loader-options!./PurposeSetting.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/PurposeSetting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_PurposeSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/interface/components/PurposeSetting.vue?vue&type=style&index=0&id=ca6b2bf0&scoped=true&lang=scss&":
/*!******************************************************************************************************************!*\
  !*** ./src/js/interface/components/PurposeSetting.vue?vue&type=style&index=0&id=ca6b2bf0&scoped=true&lang=scss& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PurposeSetting_vue_vue_type_style_index_0_id_ca6b2bf0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./PurposeSetting.vue?vue&type=style&index=0&id=ca6b2bf0&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/PurposeSetting.vue?vue&type=style&index=0&id=ca6b2bf0&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PurposeSetting_vue_vue_type_style_index_0_id_ca6b2bf0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PurposeSetting_vue_vue_type_style_index_0_id_ca6b2bf0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PurposeSetting_vue_vue_type_style_index_0_id_ca6b2bf0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PurposeSetting_vue_vue_type_style_index_0_id_ca6b2bf0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_PurposeSetting_vue_vue_type_style_index_0_id_ca6b2bf0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/interface/components/PurposeSetting.vue?vue&type=template&id=ca6b2bf0&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./src/js/interface/components/PurposeSetting.vue?vue&type=template&id=ca6b2bf0&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurposeSetting_vue_vue_type_template_id_ca6b2bf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PurposeSetting.vue?vue&type=template&id=ca6b2bf0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/PurposeSetting.vue?vue&type=template&id=ca6b2bf0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurposeSetting_vue_vue_type_template_id_ca6b2bf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurposeSetting_vue_vue_type_template_id_ca6b2bf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/interface/components/Settings.vue":
/*!**************************************************!*\
  !*** ./src/js/interface/components/Settings.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings_vue_vue_type_template_id_79bfb8d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=79bfb8d9&scoped=true& */ "./src/js/interface/components/Settings.vue?vue&type=template&id=79bfb8d9&scoped=true&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ "./src/js/interface/components/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Settings_vue_vue_type_style_index_0_id_79bfb8d9_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Settings.vue?vue&type=style&index=0&id=79bfb8d9&scoped=true&lang=scss& */ "./src/js/interface/components/Settings.vue?vue&type=style&index=0&id=79bfb8d9&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_79bfb8d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Settings_vue_vue_type_template_id_79bfb8d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "79bfb8d9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/interface/components/Settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/interface/components/Settings.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/js/interface/components/Settings.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/interface/components/Settings.vue?vue&type=style&index=0&id=79bfb8d9&scoped=true&lang=scss&":
/*!************************************************************************************************************!*\
  !*** ./src/js/interface/components/Settings.vue?vue&type=style&index=0&id=79bfb8d9&scoped=true&lang=scss& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_79bfb8d9_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=style&index=0&id=79bfb8d9&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Settings.vue?vue&type=style&index=0&id=79bfb8d9&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_79bfb8d9_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_79bfb8d9_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_79bfb8d9_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_79bfb8d9_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_79bfb8d9_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/interface/components/Settings.vue?vue&type=template&id=79bfb8d9&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./src/js/interface/components/Settings.vue?vue&type=template&id=79bfb8d9&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_79bfb8d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=template&id=79bfb8d9&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Settings.vue?vue&type=template&id=79bfb8d9&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_79bfb8d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_79bfb8d9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/interface/components/VendorSettings.vue":
/*!********************************************************!*\
  !*** ./src/js/interface/components/VendorSettings.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VendorSettings_vue_vue_type_template_id_44f257c1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VendorSettings.vue?vue&type=template&id=44f257c1&scoped=true& */ "./src/js/interface/components/VendorSettings.vue?vue&type=template&id=44f257c1&scoped=true&");
/* harmony import */ var _VendorSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VendorSettings.vue?vue&type=script&lang=js& */ "./src/js/interface/components/VendorSettings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VendorSettings_vue_vue_type_style_index_0_id_44f257c1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VendorSettings.vue?vue&type=style&index=0&id=44f257c1&scoped=true&lang=scss& */ "./src/js/interface/components/VendorSettings.vue?vue&type=style&index=0&id=44f257c1&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VendorSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VendorSettings_vue_vue_type_template_id_44f257c1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VendorSettings_vue_vue_type_template_id_44f257c1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "44f257c1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/interface/components/VendorSettings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/interface/components/VendorSettings.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./src/js/interface/components/VendorSettings.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_VendorSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib??vue-loader-options!./VendorSettings.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/VendorSettings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/interface/components/VendorSettings.vue?vue&type=style&index=0&id=44f257c1&scoped=true&lang=scss&":
/*!******************************************************************************************************************!*\
  !*** ./src/js/interface/components/VendorSettings.vue?vue&type=style&index=0&id=44f257c1&scoped=true&lang=scss& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorSettings_vue_vue_type_style_index_0_id_44f257c1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./VendorSettings.vue?vue&type=style&index=0&id=44f257c1&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/VendorSettings.vue?vue&type=style&index=0&id=44f257c1&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorSettings_vue_vue_type_style_index_0_id_44f257c1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorSettings_vue_vue_type_style_index_0_id_44f257c1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorSettings_vue_vue_type_style_index_0_id_44f257c1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorSettings_vue_vue_type_style_index_0_id_44f257c1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorSettings_vue_vue_type_style_index_0_id_44f257c1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/interface/components/VendorSettings.vue?vue&type=template&id=44f257c1&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./src/js/interface/components/VendorSettings.vue?vue&type=template&id=44f257c1&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorSettings_vue_vue_type_template_id_44f257c1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./VendorSettings.vue?vue&type=template&id=44f257c1&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/VendorSettings.vue?vue&type=template&id=44f257c1&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorSettings_vue_vue_type_template_id_44f257c1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorSettings_vue_vue_type_template_id_44f257c1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/interface/popup.js":
/*!***********************************!*\
  !*** ./src/js/interface/popup.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Settings_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Settings.vue */ "./src/js/interface/components/Settings.vue");
/* harmony import */ var _components_VendorSettings_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/VendorSettings.vue */ "./src/js/interface/components/VendorSettings.vue");
/* harmony import */ var _components_AdequaButton_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/AdequaButton.vue */ "./src/js/interface/components/AdequaButton.vue");
/* harmony import */ var _components_ButtonGroup_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ButtonGroup.vue */ "./src/js/interface/components/ButtonGroup.vue");
/* harmony import */ var _components_Popup_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Popup.vue */ "./src/js/interface/components/Popup.vue");





// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
    { path: '/', component: _components_Settings_vue__WEBPACK_IMPORTED_MODULE_0__["default"], props: true },
    { path: '/vendors', component: _components_VendorSettings_vue__WEBPACK_IMPORTED_MODULE_1__["default"], props: true }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes // short for `routes: routes`
})

const app = new Vue({
    router,
    components: {
        AdequaButton: _components_AdequaButton_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
        ButtonGroup: _components_ButtonGroup_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
    },
    render: h => h(_components_Popup_vue__WEBPACK_IMPORTED_MODULE_4__["default"])
}).$mount('#app')


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL0FkZXF1YUJ1dHRvbi52dWU/MjQxNSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvQnV0dG9uR3JvdXAudnVlPzIzZDEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL1BhcnRuZXJTZXR0aW5nLnZ1ZT8xMDlkIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9Qb3B1cC52dWU/ZTQ4MyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvUHVycG9zZVNldHRpbmcudnVlPzk5NmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL1NldHRpbmdzLnZ1ZT9lNTIxIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9WZW5kb3JTZXR0aW5ncy52dWU/OGQ4OSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvQWRlcXVhQnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL0J1dHRvbkdyb3VwLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL1BhcnRuZXJTZXR0aW5nLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL1BvcHVwLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL1B1cnBvc2VTZXR0aW5nLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL1NldHRpbmdzLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL1ZlbmRvclNldHRpbmdzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvQWRlcXVhQnV0dG9uLnZ1ZT81OTRkIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9CdXR0b25Hcm91cC52dWU/ZjUwNyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvUGFydG5lclNldHRpbmcudnVlPzg2ZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL1BvcHVwLnZ1ZT9jMjFlIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9QdXJwb3NlU2V0dGluZy52dWU/OGZiZSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvU2V0dGluZ3MudnVlPzZkMDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL1ZlbmRvclNldHRpbmdzLnZ1ZT9iMDUwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL0FkZXF1YUJ1dHRvbi52dWU/MWQ3ZCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvQnV0dG9uR3JvdXAudnVlPzlmNjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL1BhcnRuZXJTZXR0aW5nLnZ1ZT8xZTEyIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9Qb3B1cC52dWU/MzhmYSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvUHVycG9zZVNldHRpbmcudnVlPzYxNWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL1NldHRpbmdzLnZ1ZT9iYmZkIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9WZW5kb3JTZXR0aW5ncy52dWU/YzMyYyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL0FkZXF1YUJ1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL0FkZXF1YUJ1dHRvbi52dWU/ZDA2YiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvQWRlcXVhQnV0dG9uLnZ1ZT9iZDY3Iiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9BZGVxdWFCdXR0b24udnVlPzIyMjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL0J1dHRvbkdyb3VwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvQnV0dG9uR3JvdXAudnVlPzU1NDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL0J1dHRvbkdyb3VwLnZ1ZT8wYjAwIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9CdXR0b25Hcm91cC52dWU/ZTNlNiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvUGFydG5lclNldHRpbmcudnVlIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9QYXJ0bmVyU2V0dGluZy52dWU/NDNiOCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvUGFydG5lclNldHRpbmcudnVlPzk2N2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL1BhcnRuZXJTZXR0aW5nLnZ1ZT9kYWVmIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9Qb3B1cC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL1BvcHVwLnZ1ZT9hMTRlIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9Qb3B1cC52dWU/ZGJkNiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvUG9wdXAudnVlPzUyNjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL1B1cnBvc2VTZXR0aW5nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvUHVycG9zZVNldHRpbmcudnVlPzk2MWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL1B1cnBvc2VTZXR0aW5nLnZ1ZT85YmU3Iiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9QdXJwb3NlU2V0dGluZy52dWU/ZjA0YSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvU2V0dGluZ3MudnVlIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9TZXR0aW5ncy52dWU/YzkwOSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvU2V0dGluZ3MudnVlP2JlMTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL1NldHRpbmdzLnZ1ZT83OWZhIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9WZW5kb3JTZXR0aW5ncy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL1ZlbmRvclNldHRpbmdzLnZ1ZT8yODlmIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9WZW5kb3JTZXR0aW5ncy52dWU/ODczZSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvVmVuZG9yU2V0dGluZ3MudnVlPzUxODYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9wb3B1cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsMkJBQTJCLG1CQUFPLENBQUMsOEdBQXlEO0FBQzVGO0FBQ0EsY0FBYyxRQUFTLHVCQUF1QixnQkFBZ0IsMkJBQTJCLGlCQUFpQix1QkFBdUIsaUJBQWlCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRC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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFBO0FBQWdEO0FBQ1k7QUFDSjtBQUNGO0FBQ1o7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyx1QkFBdUIsZ0VBQVEsZUFBZTtBQUNuRCxLQUFLLDhCQUE4QixzRUFBYztBQUNqRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtGQUFZO0FBQ3BCLFFBQVEsZ0ZBQVc7QUFDbkIsS0FBSztBQUNMLG1CQUFtQiw2REFBSztBQUN4QixDQUFDIiwiZmlsZSI6InBvcHVwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2ludGVyZmFjZS9wb3B1cC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwicFtkYXRhLXYtMGMzMTJlYTNdIHtcXG4gIGNvbG9yOiBncmF5O1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcXG4gIHdpZHRoOiAxNDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogNDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbnAgc3BhbltkYXRhLXYtMGMzMTJlYTNdIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uYWN0aXZlW2RhdGEtdi0wYzMxMmVhM10ge1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLnNtYWxsIHBbZGF0YS12LTBjMzEyZWEzXSB7XFxuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcXG4gIGhlaWdodDogMzVweCAhaW1wb3J0YW50O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uc21hbGwgcCBzcGFuW2RhdGEtdi0wYzMxMmVhM10ge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJ1dHRvbi1ncm91cFtkYXRhLXYtMmQ4MjIyMjddIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmJ1dHRvbi1ncm91cCA+IGRpdltkYXRhLXYtMmQ4MjIyMjddIHtcXG4gICAgei1pbmRleDogNTtcXG59XFxuLmJ1dHRvbi1ncm91cCAjYmxvY2tbZGF0YS12LTJkODIyMjI3XSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDE0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgdG9wOiA1cHg7XFxuICAgIGxlZnQ6IDc1cHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbn1cXG4uYnV0dG9uLWdyb3VwIC5yaWdodC1wb3NpdGlvbltkYXRhLXYtMmQ4MjIyMjddIHtcXG4gICAgbGVmdDogMjg1cHggIWltcG9ydGFudDtcXG59XFxuLmJ1dHRvbi1ncm91cCAucmVkW2RhdGEtdi0yZDgyMjIyN10ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpICFpbXBvcnRhbnQ7XFxufVxcbi5zbWFsbCAjYmxvY2tbZGF0YS12LTJkODIyMjI3XSB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB0b3A6IDVweDtcXG4gIGxlZnQ6IDIwcHg7XFxufVxcbi5zbWFsbCAucmlnaHQtcG9zaXRpb25bZGF0YS12LTJkODIyMjI3XSB7XFxuICBsZWZ0OiAxMzVweCAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcInBbZGF0YS12LTJiZWZmYzFlXSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LWZhbWlseTogXFxcIkpvc2VmaW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcbi5zdW1tYXJ5W2RhdGEtdi0yYmVmZmMxZV0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5zdW1tYXJ5IHBbZGF0YS12LTJiZWZmYzFlXSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSm9zZWZpbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcbi5zdW1tYXJ5IHNwYW5bZGF0YS12LTJiZWZmYzFlXSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuLnN1bW1hcnkgPiAqW2RhdGEtdi0yYmVmZmMxZV06Zmlyc3QtY2hpbGQge1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuLnN1bW1hcnkgPiAqW2RhdGEtdi0yYmVmZmMxZV06bnRoLWNoaWxkKDIpIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cXG4uc3VtbWFyeSA+ICpbZGF0YS12LTJiZWZmYzFlXTpudGgtY2hpbGQoMykge1xcbiAgICB3aWR0aDogMjUwcHg7XFxufVxcbi5kZXNjcmlwdGlvbltkYXRhLXYtMmJlZmZjMWVdIHtcXG4gIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlO1xcbn1cXG4uaGlkZGVuW2RhdGEtdi0yYmVmZmMxZV0ge1xcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcXG4gIHRyYW5zaXRpb246IG5vbmU7XFxuICBoZWlnaHQ6IDA7XFxufVxcblwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI3BvcHVwW2RhdGEtdi0yZWVjYTMzNF0ge1xcbiAgbWFyZ2luOiA1cHg7XFxufVxcbm1haW5bZGF0YS12LTJlZWNhMzM0XSB7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xcbn1cXG5oMltkYXRhLXYtMmVlY2EzMzRdIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSm9zZWZpbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBtYXJnaW46IDEwcHggMDtcXG59XFxuZm9vdGVyW2RhdGEtdi0yZWVjYTMzNF0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuZm9vdGVyIGltZ1tkYXRhLXYtMmVlY2EzMzRdIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxufVxcbm5hdltkYXRhLXYtMmVlY2EzMzRdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5uYXYgYVtkYXRhLXYtMmVlY2EzMzRdIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogZ3JleTtcXG59XFxuXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJwW2RhdGEtdi1jYTZiMmJmMF0ge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJKb3NlZmluIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG4uc3VtbWFyeVtkYXRhLXYtY2E2YjJiZjBdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uc3VtbWFyeSBwW2RhdGEtdi1jYTZiMmJmMF0ge1xcbiAgICBmb250LWZhbWlseTogXFxcIkpvc2VmaW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uc3VtbWFyeSBzcGFuW2RhdGEtdi1jYTZiMmJmMF0ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcbi5zdW1tYXJ5ID4gKltkYXRhLXYtY2E2YjJiZjBdOmZpcnN0LWNoaWxkIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcbi5zdW1tYXJ5ID4gKltkYXRhLXYtY2E2YjJiZjBdOm50aC1jaGlsZCgyKSB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuLnN1bW1hcnkgPiAqW2RhdGEtdi1jYTZiMmJmMF06bnRoLWNoaWxkKDMpIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbn1cXG4uZGVzY3JpcHRpb25bZGF0YS12LWNhNmIyYmYwXSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcXG59XFxuLmhpZGRlbltkYXRhLXYtY2E2YjJiZjBdIHtcXG4gIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XFxuICB0cmFuc2l0aW9uOiBub25lO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgOmNsYXNzPVwie3NtYWxsfVwiPlxyXG4gICAgICAgIDxwIEBjbGljaz1cIm9uQ2xpY2tcIiA6Y2xhc3M9XCJ7YWN0aXZlfVwiPnt7dGV4dH19PC9wPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG5hbWU6IFwiQWRlcXVhQnV0dG9uXCIsXHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgXCJ0ZXh0XCI6IFN0cmluZyxcclxuICAgICAgICAgICAgXCJidXR0b24taWRcIjogTnVtYmVyLFxyXG4gICAgICAgICAgICBcImFjdGl2ZVwiOiBCb29sZWFuLFxyXG4gICAgICAgICAgICBcImRlZmF1bHRcIjogQm9vbGVhbixcclxuICAgICAgICAgICAgXCJzbWFsbFwiOiBCb29sZWFuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdChcImJ1dHRvbi1jbGlja2VkXCIsIHtcImJ1dHRvblwiOiB0aGlzLmJ1dHRvbklkfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbiAgICAgICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIC5zbWFsbCB7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzVweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWdyb3VwXCIgOmNsYXNzPVwie3NtYWxsfVwiPlxyXG4gICAgICAgIDxzbG90Pjwvc2xvdD5cclxuICAgICAgICA8ZGl2IGlkPVwiYmxvY2tcIiA6Y2xhc3M9XCJ7J3JpZ2h0LXBvc2l0aW9uJzogcmlnaHRQb3NpdGlvbiwgcmVkfVwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG5hbWU6IFwiQnV0dG9uR3JvdXBcIixcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBcImN1cnJlbnRcIjogTnVtYmVyLFxyXG4gICAgICAgICAgICBcImNoYW5nZS1jb2xvclwiOiBCb29sZWFuLFxyXG4gICAgICAgICAgICBcInNtYWxsXCI6IEJvb2xlYW5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgICAgIHJpZ2h0UG9zaXRpb246IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50ID09PSAyO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZWQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yaWdodFBvc2l0aW9uICYmIHRoaXMuY2hhbmdlQ29sb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG4gICAgLmJ1dHRvbi1ncm91cHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgPmRpdiB7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjYmxvY2sge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgICAgICBsZWZ0OiA3NXB4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yaWdodC1wb3NpdGlvbiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDI4NXB4IWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNtYWxse1xyXG4gICAgICAgICNibG9jayB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICAgICAgbGVmdDogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yaWdodC1wb3NpdGlvbiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEzNXB4IWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInN1bW1hcnlcIj5cclxuICAgICAgICAgICAgPHNwYW4gQGNsaWNrPVwiZXhwYW5kXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8cD57e3ZlbmRvci5uYW1lfX08L3A+XHJcbiAgICAgICAgICAgIDxidXR0b24tZ3JvdXAgOmN1cnJlbnQ9XCJhbGxvd2VkQWN0aXZlID8gMSA6IDJcIiA6Y2hhbmdlLWNvbG9yPVwidHJ1ZVwiIDpzbWFsbD1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxhZGVxdWEtYnV0dG9uIEBidXR0b24tY2xpY2tlZD1cImJ1dHRvbkNsaWNrZWRcIiA6dGV4dD1cImFsbG93ZWRUZXh0XCIgOmJ1dHRvbi1pZD1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFjdGl2ZT1cImFsbG93ZWRBY3RpdmVcIj48L2FkZXF1YS1idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YWRlcXVhLWJ1dHRvbiBAYnV0dG9uLWNsaWNrZWQ9XCJidXR0b25DbGlja2VkXCIgOnRleHQ9XCJmb3JiaWRkZW5UZXh0XCIgOmJ1dHRvbi1pZD1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFjdGl2ZT1cImZvcmJpZGRlbkFjdGl2ZVwiPjwvYWRlcXVhLWJ1dHRvbj5cclxuICAgICAgICAgICAgPC9idXR0b24tZ3JvdXA+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCIgOmNsYXNzPVwieydoaWRkZW4nOiBkZXNjcmlwdGlvbkhpZGRlbn1cIj5cclxuICAgICAgICAgICAgPHA+e3t2ZW5kb3IuZGVzY3JpcHRpb259fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBCdXR0b25Hcm91cCBmcm9tIFwiLi9CdXR0b25Hcm91cC52dWVcIjtcclxuICAgIGltcG9ydCBBZGVxdWFCdXR0b24gZnJvbSBcIi4vQWRlcXVhQnV0dG9uLnZ1ZVwiO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiBcIlBhcnRuZXJTZXR0aW5nXCIsXHJcbiAgICAgICAgY29tcG9uZW50czoge0FkZXF1YUJ1dHRvbiwgQnV0dG9uR3JvdXB9LFxyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIFwidmVuZG9yXCI6IE9iamVjdCxcclxuICAgICAgICAgICAgXCJzZXR0aW5nXCI6IE9iamVjdCxcclxuICAgICAgICAgICAgXCJ3ZWJzaXRlLWlkXCI6IFN0cmluZyxcclxuICAgICAgICAgICAgXCJpcy1kZWZhdWx0XCI6IEJvb2xlYW5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGFsbG93ZWRBY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZm9yYmlkZGVuQWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25IaWRkZW46IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U2V0dGluZzogbnVsbCxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgICBhbGxvd2VkVGV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWxsb3dlZEFjdGl2ZSA/IFwiQUNDRVBUw4lTXCIgOiBcIkFDQ0VQVEVSXCI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZvcmJpZGRlblRleHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcmJpZGRlbkFjdGl2ZSA/IFwiUkVGVVPDiVNcIiA6IFwiUkVGVVNFUlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbkNsaWNrZWQ6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTZXR0aW5nLmlkLndlYnNpdGVfaWQgPSB0aGlzLmlzRGVmYXVsdCA/IFwiYWxsXCIgOiB0aGlzLndlYnNpdGVJZDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZS5idXR0b24gPT09IDEgJiYgIXRoaXMuYWxsb3dlZEFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsb3dlZEFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JiaWRkZW5BY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTZXR0aW5nLnZhbHVlID0gLTE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUuYnV0dG9uID09PSAyICYmICF0aGlzLmZvcmJpZGRlbkFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsb3dlZEFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9yYmlkZGVuQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTZXR0aW5nLnZhbHVlID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJzZXR0aW5nQ2hhbmdlZFwiLCB0aGlzLmN1cnJlbnRTZXR0aW5nKTtcclxuICAgICAgICAgICAgICAgIEFkZXF1YS5BUEkucnVudGltZS5zZW5kTWVzc2FnZSh7d2hhdDogXCJzZXRTZXR0aW5nXCIsIHNldHRpbmc6IHRoaXMuY3VycmVudFNldHRpbmd9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXhwYW5kOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVzY3JpcHRpb25IaWRkZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5pbm5lclRleHQgPSAnLSc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbkhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5pbm5lclRleHQgPSAnKyc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbkhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHdhdGNoOiB7XHJcbiAgICAgICAgICAgIHNldHRpbmc6IHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKHZhbHVlLCBvbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2V0dGluZyA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IHRoaXMuY3VycmVudFNldHRpbmcuaWQud2Vic2l0ZV9pZCA9PT0gJ2FsbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXJwb3NlX2lkOiBcImFsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlbmRvcl9pZDogdGhpcy52ZW5kb3IuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Vic2l0ZV9pZDogdGhpcy5pc0RlZmF1bHQgPyBcImFsbFwiIDogdGhpcy53ZWJzaXRlSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U2V0dGluZy52YWx1ZSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxvd2VkQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JiaWRkZW5BY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbG93ZWRBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JiaWRkZW5BY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZWVwOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHdlYnNpdGVJZDogZnVuY3Rpb24gKHZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5jdXJyZW50U2V0dGluZy5pZC53ZWJzaXRlX2lkID09PSBudWxsICYmIHZhbHVlICE9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNldHRpbmcuaWQud2Vic2l0ZV9pZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNldHRpbmcgPSB0aGlzLnNldHRpbmc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMudmVuZG9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cnBvc2VfaWQ6IFwiYWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlbmRvcl9pZDogdGhpcy52ZW5kb3IuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlYnNpdGVfaWQ6IHRoaXMuaXNEZWZhdWx0ID8gXCJhbGxcIiA6IHRoaXMud2Vic2l0ZUlkXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNldHRpbmcudmFsdWUgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbG93ZWRBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JiaWRkZW5BY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsb3dlZEFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JiaWRkZW5BY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJKb3NlZmluIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuXHJcbiAgICAuc3VtbWFyeSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJKb3NlZmluIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPiAqOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA+ICo6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPiAqOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlO1xyXG4gICAgfVxyXG5cclxuICAgIC5oaWRkZW4ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG5vbmU7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGlkPVwicG9wdXBcIj5cclxuICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICA8aDI+UsOJR0xBR0VTPC9oMj5cclxuICAgICAgICAgICAgPGJ1dHRvbi1ncm91cCA6Y3VycmVudD1cImRlZmF1bHRBY3RpdmUgPyAxIDogMlwiPlxyXG4gICAgICAgICAgICAgICAgPGFkZXF1YS1idXR0b24gQGJ1dHRvbi1jbGlja2VkPVwiYnV0dG9uQ2xpY2tlZFwiIHRleHQ9XCJQQVIgRMOJRkFVVFwiIDpidXR0b24taWQ9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDphY3RpdmU9XCJkZWZhdWx0QWN0aXZlXCI+PC9hZGVxdWEtYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGFkZXF1YS1idXR0b24gQGJ1dHRvbi1jbGlja2VkPVwiYnV0dG9uQ2xpY2tlZFwiIHRleHQ9XCJTVVIgQ0UgU0lURVwiIDpidXR0b24taWQ9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDphY3RpdmU9XCJ3ZWJzaXRlQWN0aXZlXCI+PC9hZGVxdWEtYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2J1dHRvbi1ncm91cD5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8aHI+XHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgIDxyb3V0ZXItdmlldyA6d2Vic2l0ZS1zZXR0aW5ncz1cIndlYnNpdGVBY3RpdmVcIj48L3JvdXRlci12aWV3PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICA8cm91dGVyLWxpbmsgdi1pZj1cInRoaXMuJHJvdXRlLnBhdGggPT09ICcvJ1wiIHRvPVwiL3ZlbmRvcnNcIiBzdHlsZT1cImFsaWduLXNlbGY6IGZsZXgtZW5kXCI+UEFSIFBBUlRFTkFJUkUgPjwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgIDxyb3V0ZXItbGluayB2LWlmPVwidGhpcy4kcm91dGUucGF0aCA9PT0gJy92ZW5kb3JzJ1wiIHRvPVwiL1wiPjwgUEFSIFVTQUdFPC9yb3V0ZXItbGluaz5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8aHI+XHJcbiAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvaWNvbl9hZGVxdWEucG5nXCIgYWx0PVwibG9nbyBhZGVxdWFcIi8+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgQWRlcXVhQnV0dG9uIGZyb20gXCIuL0FkZXF1YUJ1dHRvbi52dWVcIjtcclxuICAgIGltcG9ydCBCdXR0b25Hcm91cCBmcm9tIFwiLi9CdXR0b25Hcm91cC52dWVcIjtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbmFtZTogXCJQb3B1cFwiLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHtCdXR0b25Hcm91cCwgQWRlcXVhQnV0dG9ufSxcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0QWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHdlYnNpdGVBY3RpdmU6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBidXR0b25DbGlja2VkOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuYnV0dG9uID09PSAxICYmICF0aGlzLmRlZmF1bHRBY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2Vic2l0ZUFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlLmJ1dHRvbiA9PT0gMiAmJiAhdGhpcy53ZWJzaXRlQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0QWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWJzaXRlQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbiAgICAjcG9wdXAge1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIG1haW4ge1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkpvc2VmaW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZm9vdGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuYXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInN1bW1hcnlcIj5cclxuICAgICAgICAgICAgPHNwYW4gQGNsaWNrPVwiZXhwYW5kXCI+Kzwvc3Bhbj5cclxuICAgICAgICAgICAgPHA+e3twdXJwb3NlLm5hbWV9fTwvcD5cclxuICAgICAgICAgICAgPGJ1dHRvbi1ncm91cCA6Y3VycmVudD1cImFsbG93ZWRBY3RpdmUgPyAxIDogMlwiIDpjaGFuZ2UtY29sb3I9XCJ0cnVlXCIgOnNtYWxsPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGFkZXF1YS1idXR0b24gQGJ1dHRvbi1jbGlja2VkPVwiYnV0dG9uQ2xpY2tlZFwiIDp0ZXh0PVwiYWxsb3dlZFRleHRcIiA6YnV0dG9uLWlkPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YWN0aXZlPVwiYWxsb3dlZEFjdGl2ZVwiPjwvYWRlcXVhLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxhZGVxdWEtYnV0dG9uIEBidXR0b24tY2xpY2tlZD1cImJ1dHRvbkNsaWNrZWRcIiA6dGV4dD1cImZvcmJpZGRlblRleHRcIiA6YnV0dG9uLWlkPVwiMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YWN0aXZlPVwiZm9yYmlkZGVuQWN0aXZlXCI+PC9hZGVxdWEtYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2J1dHRvbi1ncm91cD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIiA6Y2xhc3M9XCJ7J2hpZGRlbic6IGRlc2NyaXB0aW9uSGlkZGVufVwiPlxyXG4gICAgICAgICAgICA8cD57e3B1cnBvc2UuZGVzY3JpcHRpb259fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBCdXR0b25Hcm91cCBmcm9tIFwiLi9CdXR0b25Hcm91cC52dWVcIjtcclxuICAgIGltcG9ydCBBZGVxdWFCdXR0b24gZnJvbSBcIi4vQWRlcXVhQnV0dG9uLnZ1ZVwiO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiBcIlB1cnBvc2VTZXR0aW5nXCIsXHJcbiAgICAgICAgY29tcG9uZW50czoge0FkZXF1YUJ1dHRvbiwgQnV0dG9uR3JvdXB9LFxyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIFwicHVycG9zZVwiOiBPYmplY3QsXHJcbiAgICAgICAgICAgIFwic2V0dGluZ1wiOiBPYmplY3QsXHJcbiAgICAgICAgICAgIFwid2Vic2l0ZS1pZFwiOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIFwiaXMtZGVmYXVsdFwiOiBCb29sZWFuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBhbGxvd2VkQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZvcmJpZGRlbkFjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSGlkZGVuOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFNldHRpbmc6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAgICAgYWxsb3dlZFRleHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFsbG93ZWRBY3RpdmUgPyBcIkFDQ0VQVMOJU1wiIDogXCJBQ0NFUFRFUlwiO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmb3JiaWRkZW5UZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JiaWRkZW5BY3RpdmUgPyBcIlJFRlVTw4lTXCIgOiBcIlJFRlVTRVJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBidXR0b25DbGlja2VkOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2V0dGluZy5pZC53ZWJzaXRlX2lkID0gdGhpcy5pc0RlZmF1bHQgPyBcImFsbFwiIDogdGhpcy53ZWJzaXRlSWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGUuYnV0dG9uID09PSAxICYmICF0aGlzLmFsbG93ZWRBY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbG93ZWRBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9yYmlkZGVuQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2V0dGluZy52YWx1ZSA9IC0xO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlLmJ1dHRvbiA9PT0gMiAmJiAhdGhpcy5mb3JiaWRkZW5BY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbG93ZWRBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcmJpZGRlbkFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2V0dGluZy52YWx1ZSA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KFwic2V0dGluZ0NoYW5nZWRcIiwgdGhpcy5jdXJyZW50U2V0dGluZyk7XHJcbiAgICAgICAgICAgICAgICBBZGVxdWEuQVBJLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe3doYXQ6IFwic2V0U2V0dGluZ1wiLCBzZXR0aW5nOiB0aGlzLmN1cnJlbnRTZXR0aW5nfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGV4cGFuZDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRlc2NyaXB0aW9uSGlkZGVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuaW5uZXJUZXh0ID0gJy0nO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb25IaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuaW5uZXJUZXh0ID0gJysnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb25IaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3YXRjaDoge1xyXG4gICAgICAgICAgICBzZXR0aW5nOiB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAodmFsdWUsIG9sZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTZXR0aW5nID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gdGhpcy5jdXJyZW50U2V0dGluZy5pZC53ZWJzaXRlX2lkID09PSAnYWxsJztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXJwb3NlX2lkOiB0aGlzLnB1cnBvc2UuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVuZG9yX2lkOiBcImFsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYnNpdGVfaWQ6IHRoaXMuaXNEZWZhdWx0ID8gXCJhbGxcIiA6IHRoaXMud2Vic2l0ZUlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0VmFsdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNldHRpbmcudmFsdWUgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsb3dlZEFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9yYmlkZGVuQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxvd2VkQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9yYmlkZGVuQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGVlcDogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB3ZWJzaXRlSWQ6IGZ1bmN0aW9uICh2YWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRTZXR0aW5nLmlkLndlYnNpdGVfaWQgPT09IG51bGwgJiYgdmFsdWUgIT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2V0dGluZy5pZC53ZWJzaXRlX2lkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2V0dGluZyA9IHRoaXMuc2V0dGluZztcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wdXJwb3NlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cnBvc2VfaWQ6IHRoaXMucHVycG9zZS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVuZG9yX2lkOiBcImFsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWJzaXRlX2lkOiB0aGlzLmlzRGVmYXVsdCA/IFwiYWxsXCIgOiB0aGlzLndlYnNpdGVJZFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRTZXR0aW5nLnZhbHVlID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxvd2VkQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9yYmlkZGVuQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbG93ZWRBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9yYmlkZGVuQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiSm9zZWZpbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1bW1hcnkge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiSm9zZWZpbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgID4gKjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPiAqOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgID4gKjpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcclxuICAgIH1cclxuXHJcbiAgICAuaGlkZGVuIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgIH1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8cHVycG9zZS1zZXR0aW5nIHYtZm9yPVwicHVycG9zZSBvZiBwdXJwb3Nlc1wiIDprZXk9XCJwdXJwb3NlLmlkXCIgOnB1cnBvc2U9XCJwdXJwb3NlXCIgOnNldHRpbmc9XCJnZXRTZXR0aW5nW3B1cnBvc2UuaWRdXCIgOmlzLWRlZmF1bHQ9XCIhd2Vic2l0ZVNldHRpbmdzXCIgOndlYnNpdGUtaWQ9XCJ3ZWJzaXRlSWRcIiBAc2V0dGluZ0NoYW5nZWQ9XCJ1cGRhdGVTZXR0aW5nXCI+PC9wdXJwb3NlLXNldHRpbmc+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgUHVycG9zZVNldHRpbmcgZnJvbSBcIi4vUHVycG9zZVNldHRpbmcudnVlXCI7XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbmFtZTogXCJTZXR0aW5nc1wiLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHtQdXJwb3NlU2V0dGluZ30sXHJcbiAgICAgICAgZGF0YTogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHdlYnNpdGVJZDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRTZXR0aW5nczogbnVsbCxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcHVycG9zZXM6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJvcHM6IFsnd2Vic2l0ZS1zZXR0aW5ncyddLFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgdXBkYXRlU2V0dGluZyhzZXR0aW5nKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMud2Vic2l0ZVNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5nc1tzZXR0aW5nLmlkLnB1cnBvc2VfaWRdID0gc2V0dGluZztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdFNldHRpbmdzW3NldHRpbmcuaWQucHVycG9zZV9pZF0gPSBzZXR0aW5nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgICBnZXRTZXR0aW5nKCl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLndlYnNpdGVTZXR0aW5ncykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzKSByZXR1cm4gdGhpcy5zZXR0aW5ncztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRlZmF1bHRTZXR0aW5ncykgcmV0dXJuIHRoaXMuZGVmYXVsdFNldHRpbmdzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZDogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgQWRlcXVhLkFQSS5ydW50aW1lLnNlbmRNZXNzYWdlKHt3aGF0OiBcImdldFdlYnNpdGVJZFwifSwgKGlkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndlYnNpdGVJZCA9IGlkO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgQWRlcXVhLkFQSS5ydW50aW1lLnNlbmRNZXNzYWdlKHt3aGF0OiBcImdldFB1cnBvc2VMaXN0XCJ9LCAocHVycG9zZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHVycG9zZXMgPSBwdXJwb3NlcztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIEFkZXF1YS5BUEkucnVudGltZS5zZW5kTWVzc2FnZSh7d2hhdDogXCJnZXREZWZhdWx0UHVycG9zZVNldHRpbmdzXCJ9LCAoc2V0dGluZ3MpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdFNldHRpbmdzID0gc2V0dGluZ3M7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBBZGVxdWEuQVBJLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe3doYXQ6IFwiZ2V0V2Vic2l0ZVB1cnBvc2VTZXR0aW5nc1wifSwgKHNldHRpbmdzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcblxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxwYXJ0bmVyLXNldHRpbmcgdi1mb3I9XCJ2ZW5kb3Igb2YgdmVuZG9yc1wiIDprZXk9XCJ2ZW5kb3IuaWRcIiA6dmVuZG9yPVwidmVuZG9yXCIgOnNldHRpbmc9XCJnZXRTZXR0aW5nW3ZlbmRvci5pZF1cIiA6aXMtZGVmYXVsdD1cIiF3ZWJzaXRlU2V0dGluZ3NcIiA6d2Vic2l0ZS1pZD1cIndlYnNpdGVJZFwiIEBzZXR0aW5nQ2hhbmdlZD1cInVwZGF0ZVNldHRpbmdcIj48L3BhcnRuZXItc2V0dGluZz5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBQYXJ0bmVyU2V0dGluZyBmcm9tIFwiLi9QYXJ0bmVyU2V0dGluZy52dWVcIjtcclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiBcIlZlbmRvclNldHRpbmdzXCIsXHJcbiAgICAgICAgY29tcG9uZW50czoge1BhcnRuZXJTZXR0aW5nfSxcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgd2Vic2l0ZUlkOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFNldHRpbmdzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB2ZW5kb3JzOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb3BzOiBbJ3dlYnNpdGUtc2V0dGluZ3MnXSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIHVwZGF0ZVNldHRpbmcoc2V0dGluZyl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLndlYnNpdGVTZXR0aW5ncykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3Nbc2V0dGluZy5pZC52ZW5kb3JfaWRdID0gc2V0dGluZztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdFNldHRpbmdzW3NldHRpbmcuaWQudmVuZG9yX2lkXSA9IHNldHRpbmc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgICAgIGdldFNldHRpbmcoKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMud2Vic2l0ZVNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MpIHJldHVybiB0aGlzLnNldHRpbmdzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFNldHRpbmdzKSByZXR1cm4gdGhpcy5kZWZhdWx0U2V0dGluZ3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBBZGVxdWEuQVBJLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe3doYXQ6IFwiZ2V0V2Vic2l0ZUlkXCJ9LCAoaWQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2Vic2l0ZUlkID0gaWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBBZGVxdWEuQVBJLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe3doYXQ6IFwiZ2V0VmVuZG9yTGlzdFwifSwgKHZlbmRvcnMpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmVuZG9ycyA9IHZlbmRvcnM7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBBZGVxdWEuQVBJLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe3doYXQ6IFwiZ2V0RGVmYXVsdFZlbmRvclNldHRpbmdzXCJ9LCAoc2V0dGluZ3MpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNldHRpbmdzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0U2V0dGluZ3MgPSBzZXR0aW5ncztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIEFkZXF1YS5BUEkucnVudGltZS5zZW5kTWVzc2FnZSh7d2hhdDogXCJnZXRXZWJzaXRlVmVuZG9yU2V0dGluZ3NcIn0sIChzZXR0aW5ncykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG5cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IGNsYXNzOiB7IHNtYWxsOiBfdm0uc21hbGwgfSB9LCBbXG4gICAgX2MoXCJwXCIsIHsgY2xhc3M6IHsgYWN0aXZlOiBfdm0uYWN0aXZlIH0sIG9uOiB7IGNsaWNrOiBfdm0ub25DbGljayB9IH0sIFtcbiAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnRleHQpKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiYnV0dG9uLWdyb3VwXCIsIGNsYXNzOiB7IHNtYWxsOiBfdm0uc21hbGwgfSB9LFxuICAgIFtcbiAgICAgIF92bS5fdChcImRlZmF1bHRcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICBjbGFzczogeyBcInJpZ2h0LXBvc2l0aW9uXCI6IF92bS5yaWdodFBvc2l0aW9uLCByZWQ6IF92bS5yZWQgfSxcbiAgICAgICAgYXR0cnM6IHsgaWQ6IFwiYmxvY2tcIiB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJzdW1tYXJ5XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgb246IHsgY2xpY2s6IF92bS5leHBhbmQgfSB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS52ZW5kb3IubmFtZSkpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYnV0dG9uLWdyb3VwXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgY3VycmVudDogX3ZtLmFsbG93ZWRBY3RpdmUgPyAxIDogMixcbiAgICAgICAgICAgICAgXCJjaGFuZ2UtY29sb3JcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgc21hbGw6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiYWRlcXVhLWJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgdGV4dDogX3ZtLmFsbG93ZWRUZXh0LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uLWlkXCI6IDEsXG4gICAgICAgICAgICAgICAgYWN0aXZlOiBfdm0uYWxsb3dlZEFjdGl2ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjogeyBcImJ1dHRvbi1jbGlja2VkXCI6IF92bS5idXR0b25DbGlja2VkIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiYWRlcXVhLWJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgdGV4dDogX3ZtLmZvcmJpZGRlblRleHQsXG4gICAgICAgICAgICAgICAgXCJidXR0b24taWRcIjogMixcbiAgICAgICAgICAgICAgICBhY3RpdmU6IF92bS5mb3JiaWRkZW5BY3RpdmVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHsgXCJidXR0b24tY2xpY2tlZFwiOiBfdm0uYnV0dG9uQ2xpY2tlZCB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uXCIsIGNsYXNzOiB7IGhpZGRlbjogX3ZtLmRlc2NyaXB0aW9uSGlkZGVuIH0gfSxcbiAgICAgIFtfYyhcInBcIiwgW192bS5fdihfdm0uX3MoX3ZtLnZlbmRvci5kZXNjcmlwdGlvbikpXSldXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogXCJwb3B1cFwiIH0gfSwgW1xuICAgIF9jKFxuICAgICAgXCJoZWFkZXJcIixcbiAgICAgIFtcbiAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiUsOJR0xBR0VTXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYnV0dG9uLWdyb3VwXCIsXG4gICAgICAgICAgeyBhdHRyczogeyBjdXJyZW50OiBfdm0uZGVmYXVsdEFjdGl2ZSA/IDEgOiAyIH0gfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImFkZXF1YS1idXR0b25cIiwge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiUEFSIETDiUZBVVRcIixcbiAgICAgICAgICAgICAgICBcImJ1dHRvbi1pZFwiOiAxLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogX3ZtLmRlZmF1bHRBY3RpdmVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHsgXCJidXR0b24tY2xpY2tlZFwiOiBfdm0uYnV0dG9uQ2xpY2tlZCB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImFkZXF1YS1idXR0b25cIiwge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiU1VSIENFIFNJVEVcIixcbiAgICAgICAgICAgICAgICBcImJ1dHRvbi1pZFwiOiAyLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogX3ZtLndlYnNpdGVBY3RpdmVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHsgXCJidXR0b24tY2xpY2tlZFwiOiBfdm0uYnV0dG9uQ2xpY2tlZCB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImhyXCIpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcIm1haW5cIixcbiAgICAgIFtfYyhcInJvdXRlci12aWV3XCIsIHsgYXR0cnM6IHsgXCJ3ZWJzaXRlLXNldHRpbmdzXCI6IF92bS53ZWJzaXRlQWN0aXZlIH0gfSldLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwibmF2XCIsXG4gICAgICBbXG4gICAgICAgIHRoaXMuJHJvdXRlLnBhdGggPT09IFwiL1wiXG4gICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJhbGlnbi1zZWxmXCI6IFwiZmxleC1lbmRcIiB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiBcIi92ZW5kb3JzXCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiUEFSIFBBUlRFTkFJUkUgPlwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICB0aGlzLiRyb3V0ZS5wYXRoID09PSBcIi92ZW5kb3JzXCJcbiAgICAgICAgICA/IF9jKFwicm91dGVyLWxpbmtcIiwgeyBhdHRyczogeyB0bzogXCIvXCIgfSB9LCBbX3ZtLl92KFwiPCBQQVIgVVNBR0VcIildKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiaHJcIiksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uX20oMClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZm9vdGVyXCIsIFtcbiAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBcImltZy9pY29uX2FkZXF1YS5wbmdcIiwgYWx0OiBcImxvZ28gYWRlcXVhXCIgfSB9KVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJzdW1tYXJ5XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgb246IHsgY2xpY2s6IF92bS5leHBhbmQgfSB9LCBbX3ZtLl92KFwiK1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgW192bS5fdihfdm0uX3MoX3ZtLnB1cnBvc2UubmFtZSkpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYnV0dG9uLWdyb3VwXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgY3VycmVudDogX3ZtLmFsbG93ZWRBY3RpdmUgPyAxIDogMixcbiAgICAgICAgICAgICAgXCJjaGFuZ2UtY29sb3JcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgc21hbGw6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiYWRlcXVhLWJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgdGV4dDogX3ZtLmFsbG93ZWRUZXh0LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uLWlkXCI6IDEsXG4gICAgICAgICAgICAgICAgYWN0aXZlOiBfdm0uYWxsb3dlZEFjdGl2ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjogeyBcImJ1dHRvbi1jbGlja2VkXCI6IF92bS5idXR0b25DbGlja2VkIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiYWRlcXVhLWJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgdGV4dDogX3ZtLmZvcmJpZGRlblRleHQsXG4gICAgICAgICAgICAgICAgXCJidXR0b24taWRcIjogMixcbiAgICAgICAgICAgICAgICBhY3RpdmU6IF92bS5mb3JiaWRkZW5BY3RpdmVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHsgXCJidXR0b24tY2xpY2tlZFwiOiBfdm0uYnV0dG9uQ2xpY2tlZCB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImRlc2NyaXB0aW9uXCIsIGNsYXNzOiB7IGhpZGRlbjogX3ZtLmRlc2NyaXB0aW9uSGlkZGVuIH0gfSxcbiAgICAgIFtfYyhcInBcIiwgW192bS5fdihfdm0uX3MoX3ZtLnB1cnBvc2UuZGVzY3JpcHRpb24pKV0pXVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgX3ZtLl9sKF92bS5wdXJwb3NlcywgZnVuY3Rpb24ocHVycG9zZSkge1xuICAgICAgcmV0dXJuIF9jKFwicHVycG9zZS1zZXR0aW5nXCIsIHtcbiAgICAgICAga2V5OiBwdXJwb3NlLmlkLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHB1cnBvc2U6IHB1cnBvc2UsXG4gICAgICAgICAgc2V0dGluZzogX3ZtLmdldFNldHRpbmdbcHVycG9zZS5pZF0sXG4gICAgICAgICAgXCJpcy1kZWZhdWx0XCI6ICFfdm0ud2Vic2l0ZVNldHRpbmdzLFxuICAgICAgICAgIFwid2Vic2l0ZS1pZFwiOiBfdm0ud2Vic2l0ZUlkXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7IHNldHRpbmdDaGFuZ2VkOiBfdm0udXBkYXRlU2V0dGluZyB9XG4gICAgICB9KVxuICAgIH0pLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBfdm0uX2woX3ZtLnZlbmRvcnMsIGZ1bmN0aW9uKHZlbmRvcikge1xuICAgICAgcmV0dXJuIF9jKFwicGFydG5lci1zZXR0aW5nXCIsIHtcbiAgICAgICAga2V5OiB2ZW5kb3IuaWQsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdmVuZG9yOiB2ZW5kb3IsXG4gICAgICAgICAgc2V0dGluZzogX3ZtLmdldFNldHRpbmdbdmVuZG9yLmlkXSxcbiAgICAgICAgICBcImlzLWRlZmF1bHRcIjogIV92bS53ZWJzaXRlU2V0dGluZ3MsXG4gICAgICAgICAgXCJ3ZWJzaXRlLWlkXCI6IF92bS53ZWJzaXRlSWRcbiAgICAgICAgfSxcbiAgICAgICAgb246IHsgc2V0dGluZ0NoYW5nZWQ6IF92bS51cGRhdGVTZXR0aW5nIH1cbiAgICAgIH0pXG4gICAgfSksXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGVxdWFCdXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGMzMTJlYTMmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI0YWNmZjdmY1wiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRlcXVhQnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBjMzEyZWEzJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRlcXVhQnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBjMzEyZWEzJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CdXR0b25Hcm91cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yZDgyMjIyNyZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjQ3NTQxZDFlXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CdXR0b25Hcm91cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yZDgyMjIyNyZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0J1dHRvbkdyb3VwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJkODIyMjI3JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYXJ0bmVyU2V0dGluZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yYmVmZmMxZSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjU1MjhmYjY0XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYXJ0bmVyU2V0dGluZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yYmVmZmMxZSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhcnRuZXJTZXR0aW5nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJiZWZmYzFlJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3B1cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yZWVjYTMzNCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjc4NzIyNWM4XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3B1cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yZWVjYTMzNCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BvcHVwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJlZWNhMzM0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QdXJwb3NlU2V0dGluZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jYTZiMmJmMCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjk2MTBhNTIwXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QdXJwb3NlU2V0dGluZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jYTZiMmJmMCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1B1cnBvc2VTZXR0aW5nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWNhNmIyYmYwJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03OWJmYjhkOSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImFiODRlNGM2XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03OWJmYjhkOSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc5YmZiOGQ5JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WZW5kb3JTZXR0aW5ncy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NGYyNTdjMSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjVkNDkzNWU4XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WZW5kb3JTZXR0aW5ncy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NGYyNTdjMSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ZlbmRvclNldHRpbmdzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ0ZjI1N2MxJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiAgTW9kaWZpZWQgYnkgRXZhbiBZb3UgQHl5eDk5MDgwM1xuKi9cblxuaW1wb3J0IGxpc3RUb1N0eWxlcyBmcm9tICcuL2xpc3RUb1N0eWxlcydcblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG52YXIgb3B0aW9ucyA9IG51bGxcbnZhciBzc3JJZEtleSA9ICdkYXRhLXZ1ZS1zc3ItaWQnXG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFN0eWxlc0NsaWVudCAocGFyZW50SWQsIGxpc3QsIF9pc1Byb2R1Y3Rpb24sIF9vcHRpb25zKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICBvcHRpb25zID0gX29wdGlvbnMgfHwge31cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKCkge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2NzcydcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpXG4gIHJldHVybiBzdHlsZUVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgdmFyIHVwZGF0ZSwgcmVtb3ZlXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVsnICsgc3NySWRLZXkgKyAnfj1cIicgKyBvYmouaWQgKyAnXCJdJylcblxuICBpZiAoc3R5bGVFbGVtZW50KSB7XG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYW5kIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAgICAgIC8vIHNpbXBseSBkbyBub3RoaW5nLlxuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYnV0IGluIGRldiBtb2RlLlxuICAgICAgLy8gZm9yIHNvbWUgcmVhc29uIENocm9tZSBjYW4ndCBoYW5kbGUgc291cmNlIG1hcCBpbiBzZXJ2ZXItcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlIHRhZ3MgLSBzb3VyY2UgbWFwcyBpbiA8c3R5bGU+IG9ubHkgd29ya3MgaWYgdGhlIHN0eWxlIHRhZyBpc1xuICAgICAgLy8gY3JlYXRlZCBhbmQgaW5zZXJ0ZWQgZHluYW1pY2FsbHkuIFNvIHdlIHJlbW92ZSB0aGUgc2VydmVyIHJlbmRlcmVkXG4gICAgICAvLyBzdHlsZXMgYW5kIGluamVjdCBuZXcgb25lcy5cbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICBpZiAoaXNPbGRJRSkge1xuICAgIC8vIHVzZSBzaW5nbGV0b24gbW9kZSBmb3IgSUU5LlxuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrXG4gICAgc3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKVxuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG11bHRpLXN0eWxlLXRhZyBtb2RlIGluIGFsbCBvdGhlciBjYXNlc1xuICAgIHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpXG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudClcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKG9iailcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuICAgICAgICAgIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG4gICAgICAgICAgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpXG4gICAgfVxuICB9XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJylcbiAgfVxufSkoKVxuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzXG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlc1xuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlRWxlbWVudCwgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzXG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcFxuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpXG4gIH1cbiAgaWYgKG9wdGlvbnMuc3NySWQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKHNzcklkS2V5LCBvYmouaWQpXG4gIH1cblxuICBpZiAoc291cmNlTWFwKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG4gICAgLy8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJ1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLydcbiAgfVxuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpXG4gIH1cbn1cbiIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGlkOiBwYXJlbnRJZCArICc6JyArIGksXG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FkZXF1YUJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGMzMTJlYTMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQWRlcXVhQnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQWRlcXVhQnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BZGVxdWFCdXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGMzMTJlYTMmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwYzMxMmVhM1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXEp1bGllblxcXFxEb2N1bWVudHNcXFxcSnNcXFxcYWRlcXVhLXYxXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwYzMxMmVhMycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwYzMxMmVhMycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQWRlcXVhQnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYzMxMmVhMyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwYzMxMmVhMycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL0FkZXF1YUJ1dHRvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRlcXVhQnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZXF1YUJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZXF1YUJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wYzMxMmVhMyZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRlcXVhQnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBjMzEyZWEzJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGVxdWFCdXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBjMzEyZWEzJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9CdXR0b25Hcm91cC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmQ4MjIyMjcmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQnV0dG9uR3JvdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9CdXR0b25Hcm91cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQnV0dG9uR3JvdXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmQ4MjIyMjcmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyZDgyMjIyN1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXEp1bGllblxcXFxEb2N1bWVudHNcXFxcSnNcXFxcYWRlcXVhLXYxXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyZDgyMjIyNycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyZDgyMjIyNycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQnV0dG9uR3JvdXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJkODIyMjI3JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJkODIyMjI3Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvQnV0dG9uR3JvdXAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0J1dHRvbkdyb3VwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0J1dHRvbkdyb3VwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQnV0dG9uR3JvdXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmQ4MjIyMjcmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0J1dHRvbkdyb3VwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJkODIyMjI3JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CdXR0b25Hcm91cC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmQ4MjIyMjcmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1BhcnRuZXJTZXR0aW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYmVmZmMxZSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QYXJ0bmVyU2V0dGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BhcnRuZXJTZXR0aW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9QYXJ0bmVyU2V0dGluZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yYmVmZmMxZSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjJiZWZmYzFlXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcSnVsaWVuXFxcXERvY3VtZW50c1xcXFxKc1xcXFxhZGVxdWEtdjFcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzJiZWZmYzFlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzJiZWZmYzFlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QYXJ0bmVyU2V0dGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmJlZmZjMWUmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMmJlZmZjMWUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9QYXJ0bmVyU2V0dGluZy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFydG5lclNldHRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFydG5lclNldHRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYXJ0bmVyU2V0dGluZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yYmVmZmMxZSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFydG5lclNldHRpbmcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmJlZmZjMWUmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhcnRuZXJTZXR0aW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYmVmZmMxZSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUG9wdXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJlZWNhMzM0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1BvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1BvcHVwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJlZWNhMzM0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMmVlY2EzMzRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxKdWxpZW5cXFxcRG9jdW1lbnRzXFxcXEpzXFxcXGFkZXF1YS12MVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMmVlY2EzMzQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMmVlY2EzMzQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1BvcHVwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZWVjYTMzNCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyZWVjYTMzNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL1BvcHVwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3B1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3B1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BvcHVwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJlZWNhMzM0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3B1cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yZWVjYTMzNCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUG9wdXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJlZWNhMzM0JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9QdXJwb3NlU2V0dGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2E2YjJiZjAmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUHVycG9zZVNldHRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9QdXJwb3NlU2V0dGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vUHVycG9zZVNldHRpbmcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Y2E2YjJiZjAmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJjYTZiMmJmMFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXEp1bGllblxcXFxEb2N1bWVudHNcXFxcSnNcXFxcYWRlcXVhLXYxXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdjYTZiMmJmMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdjYTZiMmJmMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUHVycG9zZVNldHRpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWNhNmIyYmYwJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2NhNmIyYmYwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvUHVycG9zZVNldHRpbmcudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1B1cnBvc2VTZXR0aW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1B1cnBvc2VTZXR0aW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHVycG9zZVNldHRpbmcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Y2E2YjJiZjAmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1B1cnBvc2VTZXR0aW5nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWNhNmIyYmYwJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QdXJwb3NlU2V0dGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2E2YjJiZjAmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03OWJmYjhkOSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03OWJmYjhkOSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjc5YmZiOGQ5XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcSnVsaWVuXFxcXERvY3VtZW50c1xcXFxKc1xcXFxhZGVxdWEtdjFcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc5YmZiOGQ5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc5YmZiOGQ5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzliZmI4ZDkmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzliZmI4ZDknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9TZXR0aW5ncy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03OWJmYjhkOSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzliZmI4ZDkmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03OWJmYjhkOSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVmVuZG9yU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ0ZjI1N2MxJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1ZlbmRvclNldHRpbmdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVmVuZG9yU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1ZlbmRvclNldHRpbmdzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ0ZjI1N2MxJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNDRmMjU3YzFcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxKdWxpZW5cXFxcRG9jdW1lbnRzXFxcXEpzXFxcXGFkZXF1YS12MVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDRmMjU3YzEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDRmMjU3YzEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1ZlbmRvclNldHRpbmdzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NGYyNTdjMSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0NGYyNTdjMScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL1ZlbmRvclNldHRpbmdzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WZW5kb3JTZXR0aW5ncy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WZW5kb3JTZXR0aW5ncy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ZlbmRvclNldHRpbmdzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ0ZjI1N2MxJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WZW5kb3JTZXR0aW5ncy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NGYyNTdjMSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVmVuZG9yU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ0ZjI1N2MxJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IFNldHRpbmdzIGZyb20gJy4vY29tcG9uZW50cy9TZXR0aW5ncy52dWUnXG5pbXBvcnQgVmVuZG9yU2V0dGluZ3MgZnJvbSBcIi4vY29tcG9uZW50cy9WZW5kb3JTZXR0aW5ncy52dWVcIlxuaW1wb3J0IEFkZXF1YUJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvQWRlcXVhQnV0dG9uLnZ1ZSdcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tICcuL2NvbXBvbmVudHMvQnV0dG9uR3JvdXAudnVlJ1xuaW1wb3J0IFBvcHVwIGZyb20gJy4vY29tcG9uZW50cy9Qb3B1cC52dWUnXG4vLyAyLiBEZWZpbmUgc29tZSByb3V0ZXNcbi8vIEVhY2ggcm91dGUgc2hvdWxkIG1hcCB0byBhIGNvbXBvbmVudC4gVGhlIFwiY29tcG9uZW50XCIgY2FuXG4vLyBlaXRoZXIgYmUgYW4gYWN0dWFsIGNvbXBvbmVudCBjb25zdHJ1Y3RvciBjcmVhdGVkIHZpYVxuLy8gYFZ1ZS5leHRlbmQoKWAsIG9yIGp1c3QgYSBjb21wb25lbnQgb3B0aW9ucyBvYmplY3QuXG4vLyBXZSdsbCB0YWxrIGFib3V0IG5lc3RlZCByb3V0ZXMgbGF0ZXIuXG5jb25zdCByb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiAnLycsIGNvbXBvbmVudDogU2V0dGluZ3MsIHByb3BzOiB0cnVlIH0sXG4gICAgeyBwYXRoOiAnL3ZlbmRvcnMnLCBjb21wb25lbnQ6IFZlbmRvclNldHRpbmdzLCBwcm9wczogdHJ1ZSB9XG5dXG5cbi8vIDMuIENyZWF0ZSB0aGUgcm91dGVyIGluc3RhbmNlIGFuZCBwYXNzIHRoZSBgcm91dGVzYCBvcHRpb25cbi8vIFlvdSBjYW4gcGFzcyBpbiBhZGRpdGlvbmFsIG9wdGlvbnMgaGVyZSwgYnV0IGxldCdzXG4vLyBrZWVwIGl0IHNpbXBsZSBmb3Igbm93LlxuY29uc3Qgcm91dGVyID0gbmV3IFZ1ZVJvdXRlcih7XG4gICAgcm91dGVzIC8vIHNob3J0IGZvciBgcm91dGVzOiByb3V0ZXNgXG59KVxuXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcbiAgICByb3V0ZXIsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBBZGVxdWFCdXR0b24sXG4gICAgICAgIEJ1dHRvbkdyb3VwXG4gICAgfSxcbiAgICByZW5kZXI6IGggPT4gaChQb3B1cClcbn0pLiRtb3VudCgnI2FwcCcpXG4iXSwic291cmNlUm9vdCI6IiJ9