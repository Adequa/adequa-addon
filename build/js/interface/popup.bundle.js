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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Choices.vue?vue&type=style&index=0&id=2b757da8&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/Choices.vue?vue&type=style&index=0&id=2b757da8&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "h2[data-v-2b757da8] {\n  font-family: \"Josefin Sans\", sans-serif;\n  padding-top: 4px;\n  margin-top: -47px;\n  text-align: center;\n  font-size: 25px;\n  color: black;\n}\nmain[data-v-2b757da8] {\n  max-height: 220px;\n  height: 220px;\n  overflow-y: auto;\n  margin: 10px 0;\n}\ndiv[data-v-2b757da8] {\n  font-family: \"Josefin Sans\", sans-serif;\n}\ndiv > p[data-v-2b757da8] {\n    text-align: justify;\n    font-family: 'Josefin Slab', serif;\n    font-size: 16px;\n    margin-bottom: 15px;\n}\n.link[data-v-2b757da8] {\n  color: grey;\n  cursor: pointer;\n  font-weight: 300;\n  transition: color 0.2s ease;\n}\n.link[data-v-2b757da8]:hover {\n  color: black;\n}\nfooter[data-v-2b757da8] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/CookiePurpose.vue?vue&type=style&index=0&id=5c7166d4&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/CookiePurpose.vue?vue&type=style&index=0&id=5c7166d4&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".purpose[data-v-5c7166d4] {\n  margin: 10px 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-family: \"Josefin Sans\", sans-serif;\n}\n.purpose > div[data-v-5c7166d4] {\n    width: 290px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.purpose > div > p[data-v-5c7166d4]:last-child {\n      font-weight: 300;\n}\n.domain[data-v-5c7166d4] {\n  margin: 10px 0 10px 30px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-family: \"Josefin Sans\", sans-serif;\n}\n.domain *[data-v-5c7166d4] {\n    font-size: 14px !important;\n}\n.domain > div[data-v-5c7166d4] {\n    width: 275px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.domain > div > p[data-v-5c7166d4]:last-child {\n      font-weight: 300;\n}\n.link[data-v-5c7166d4] {\n  color: var(--red);\n  font-weight: 300;\n  font-family: \"Josefin Sans\", sans-serif;\n  cursor: pointer;\n  margin-left: 10px;\n}\n.expand[data-v-5c7166d4] {\n  width: 25px;\n  text-align: center;\n  font-size: 40px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: gray;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.pointer[data-v-5c7166d4] {\n  cursor: pointer;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Cookies.vue?vue&type=style&index=0&id=b521d36e&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/Cookies.vue?vue&type=style&index=0&id=b521d36e&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "div[data-v-b521d36e] {\n  flex: 1;\n}\nh2[data-v-b521d36e] {\n  font-family: \"Josefin Sans\", sans-serif;\n  padding-top: 4px;\n  margin-top: -47px;\n  margin-bottom: 40px;\n  text-align: center;\n  font-size: 25px;\n  color: black;\n}\nmain[data-v-b521d36e] {\n  max-height: 300px;\n  height: 300px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  /*justify-content: center;*/\n}\n.link[data-v-b521d36e] {\n  color: grey;\n  cursor: pointer;\n}\nfooter[data-v-b521d36e] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/HoverButton.vue?vue&type=style&index=0&id=c957ca70&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/HoverButton.vue?vue&type=style&index=0&id=c957ca70&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "a[data-v-c957ca70] {\n  color: white;\n  padding: 0.3em calc(0.3em * 1.4);\n  display: inline-block;\n  border: 3px solid transparent;\n  position: relative;\n  font-size: 1.5em;\n  cursor: pointer;\n  letter-spacing: 0.07em;\n}\na .text[data-v-c957ca70] {\n    /*<!--transform: translate3d(0, $pad, 0);-->*/\n    display: block;\n    transition: transform 0.4s cubic-bezier(0.2, 0, 0, 1) 0.4s;\n    font-size: 22px;\n    width: 240px;\n    text-align: center;\n}\na[data-v-c957ca70]:after {\n    position: absolute;\n    content: '';\n    bottom: -3px;\n    left: calc(0.3em * 1.4);\n    right: calc(0.3em * 1.4);\n    height: 3px;\n    background: var(--green);\n    transition: transform 0.8s cubic-bezier(1, 0, 0.37, 1) 0.2s, right 0.2s cubic-bezier(0.04, 0.48, 0, 1) 0.6s, left 0.4s cubic-bezier(0.04, 0.48, 0, 1) 0.6s;\n    transform-origin: left;\n}\n.line[data-v-c957ca70] {\n  position: absolute;\n  background: var(--green);\n}\n.line.-right[data-v-c957ca70], .line.-left[data-v-c957ca70] {\n    width: 3px;\n    bottom: -3px;\n    top: -3px;\n    transform: scale3d(1, 0, 1);\n}\n.line.-top[data-v-c957ca70], .line.-bottom[data-v-c957ca70] {\n    height: 3px;\n    left: -3px;\n    right: -3px;\n    transform: scale3d(0, 1, 1);\n}\n.line.-right[data-v-c957ca70] {\n    right: -3px;\n    transition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.23s;\n    transform-origin: top;\n}\n.line.-top[data-v-c957ca70] {\n    top: -3px;\n    transition: transform 0.08s linear 0.43s;\n    transform-origin: left;\n}\n.line.-left[data-v-c957ca70] {\n    left: -3px;\n    transition: transform 0.08s linear 0.51s;\n    transform-origin: bottom;\n}\n.line.-bottom[data-v-c957ca70] {\n    bottom: -3px;\n    transition: transform 0.3s cubic-bezier(1, 0, 0.65, 1.01);\n    transform-origin: right;\n}\na:hover .text[data-v-c957ca70],\na:active .text[data-v-c957ca70] {\n  /*transform: translate3d(0, 0, 0);*/\n  transition: transform 0.6s cubic-bezier(0.2, 0, 0, 1) 0.4s;\n}\na[data-v-c957ca70]:hover:after,\na[data-v-c957ca70]:active:after {\n  transform: scale3d(0, 1, 1);\n  right: -3px;\n  left: -3px;\n  transform-origin: right;\n  transition: transform 0.2s cubic-bezier(1, 0, 0.65, 1.01) 0.17s, right 0.2s cubic-bezier(1, 0, 0.65, 1.01), left 0s 0.3s;\n}\na:hover .line[data-v-c957ca70],\na:active .line[data-v-c957ca70] {\n  transform: scale3d(1, 1, 1);\n}\na:hover .line.-right[data-v-c957ca70],\n  a:active .line.-right[data-v-c957ca70] {\n    transition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.2s;\n    transform-origin: bottom;\n}\na:hover .line.-top[data-v-c957ca70],\n  a:active .line.-top[data-v-c957ca70] {\n    transition: transform 0.08s linear 0.4s;\n    transform-origin: right;\n}\na:hover .line.-left[data-v-c957ca70],\n  a:active .line.-left[data-v-c957ca70] {\n    transition: transform 0.08s linear 0.48s;\n    transform-origin: top;\n}\na:hover .line.-bottom[data-v-c957ca70],\n  a:active .line.-bottom[data-v-c957ca70] {\n    transition: transform 0.5s cubic-bezier(0, 0.53, 0.29, 1) 0.56s;\n    transform-origin: left;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Menu.vue?vue&type=style&index=0&id=cb60d9d6&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/Menu.vue?vue&type=style&index=0&id=cb60d9d6&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".close-menu[data-v-cb60d9d6] {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  height: 15px;\n  width: 15px;\n}\n.whitelisted[data-v-cb60d9d6] {\n  color: var(--green) !important;\n  cursor: auto !important;\n}\n.whitelisted[data-v-cb60d9d6]:hover {\n  text-shadow: none !important;\n}\nspan[data-v-cb60d9d6] {\n  font-family: \"Josefin Sans\", sans-serif;\n  font-weight: 300;\n  color: var(--red);\n  cursor: pointer;\n  transition: all .2s;\n}\nspan[data-v-cb60d9d6]:hover {\n  /*font-weight: 400;*/\n  text-shadow: -0.2px -0.2px 0 var(--red), 0.2px -0.2px 0 var(--red), -0.2px 0.2px 0 var(--red), 0.2px 0.2px 0 var(--red);\n  transition: all .2s;\n}\ndiv[data-v-cb60d9d6] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 65px;\n  padding-top: 55px;\n  z-index: 9999999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n}\nnav[data-v-cb60d9d6] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 30px;\n}\nnav a[data-v-cb60d9d6] {\n    color: grey;\n    font-family: \"Montserrat\", sans-serif;\n    text-decoration: none;\n    font-weight: bold;\n}\n", ""]);



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
exports.push([module.i, "/*.menu-slide-enter,*/\n.menu-slide-leave-to[data-v-2eeca334] {\n  transform: translateX(-100%);\n}\n\n/*.menu-slide-enter-to,*/\n.menu-slide-leave[data-v-2eeca334] {\n  transform: translateX(0%);\n}\n\n/*.menu-slide-enter-active,*/\n.menu-slide-leave-active[data-v-2eeca334] {\n  transition: transform 0.2s linear;\n}\n.view-slide-enter[data-v-2eeca334] {\n  transform: translateX(-100%);\n}\n.view-slide-enter-to[data-v-2eeca334] {\n  transform: translateX(0%);\n}\n.view-slide-enter-active[data-v-2eeca334] {\n  transition: transform 0.2s linear;\n}\n#popup[data-v-2eeca334] {\n  padding: 55px 5px 5px;\n  position: relative;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n#popup > div[data-v-2eeca334] {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    margin: 0 8%;\n}\n.open-menu[data-v-2eeca334] {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n}\nfooter[data-v-2eeca334] {\n  height: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 15px 0;\n}\nfooter div[data-v-2eeca334] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    cursor: pointer;\n    margin-top: 10px;\n}\nfooter span[data-v-2eeca334] {\n    font-family: \"Josefin Sans\", sans-serif;\n    font-size: 14px;\n    padding-top: 8px;\n}\nfooter hr[data-v-2eeca334] {\n    width: 412px;\n    margin: 15px 8%;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/PurposeSetting.vue?vue&type=style&index=0&id=ca6b2bf0&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/PurposeSetting.vue?vue&type=style&index=0&id=ca6b2bf0&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "p[data-v-ca6b2bf0] {\n  font-size: 14px;\n  font-family: \"Josefin Sans\", sans-serif;\n}\n.toggle[data-v-ca6b2bf0] {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.toggle p[data-v-ca6b2bf0] {\n    cursor: pointer;\n    color: var(--red);\n    font-weight: 300;\n    width: 100px;\n    text-align: right !important;\n}\n.active p[data-v-ca6b2bf0] {\n  color: var(--green);\n}\n.summary[data-v-ca6b2bf0] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.summary > div[data-v-ca6b2bf0] {\n    max-width: 180px;\n    flex: 1;\n}\n.summary > div[data-v-ca6b2bf0]:first-child {\n    display: flex;\n}\n.summary > div:first-child span[data-v-ca6b2bf0] {\n      margin-right: 20px;\n}\n.summary > div:first-child p[data-v-ca6b2bf0] {\n      width: 200px;\n}\n.summary p[data-v-ca6b2bf0] {\n    font-family: \"Josefin Sans\", sans-serif;\n    font-size: 14px;\n    margin: 0;\n    padding-top: 3px;\n}\n.summary > p[data-v-ca6b2bf0] {\n    flex: 1;\n    font-size: 18px;\n    padding: 3px 0 0 25px;\n}\n.summary span[data-v-ca6b2bf0] {\n    width: 25px;\n    text-align: center;\n    font-size: 40px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: gray;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n.description[data-v-ca6b2bf0] {\n  transform: scaleY(1);\n  transform-origin: 50% 0;\n  transition: transform 0.5s ease;\n  color: #325050;\n}\n.hidden[data-v-ca6b2bf0] {\n  transform: scaleY(0);\n  transform-origin: 50% 0;\n  transition: none;\n  height: 0;\n}\n", ""]);



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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Desires.vue?vue&type=style&index=0&id=0cdcd563&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/Desires.vue?vue&type=style&index=0&id=0cdcd563&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\ndiv[data-v-0cdcd563] {\n    margin-top: -40px;\n    flex: 1;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n", ""]);



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

/***/ "./node_modules/vue-js-toggle-button/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/vue-js-toggle-button/dist/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(7)

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(1),
  /* template */
  __webpack_require__(6),
  /* scopeId */
  "data-v-25adc6c0",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
//
//
//
//
//

var DEFAULT_COLOR_CHECKED = '#75c791';
var DEFAULT_COLOR_UNCHECKED = '#bfcbd9';
var DEFAULT_LABEL_CHECKED = 'on';
var DEFAULT_LABEL_UNCHECKED = 'off';
var DEFAULT_SWITCH_COLOR = '#fff';
var MARGIN = 3;

var contains = function contains(object, title) {
  return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object.hasOwnProperty(title);
};

var px = function px(v) {
  return v + 'px';
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ToggleButton',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    sync: {
      type: Boolean,
      default: false
    },
    speed: {
      type: Number,
      default: 300
    },
    color: {
      type: [String, Object],
      validator: function validator(value) {
        return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? value.checked || value.unchecked || value.disabled : typeof value === 'string';
      }
    },
    switchColor: {
      type: [String, Object],
      validator: function validator(value) {
        return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? value.checked || value.unchecked : typeof value === 'string';
      }
    },
    cssColors: {
      type: Boolean,
      default: false
    },
    labels: {
      type: [Boolean, Object],
      default: false,
      validator: function validator(value) {
        return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? value.checked || value.unchecked : typeof value === 'boolean';
      }
    },
    height: {
      type: Number,
      default: 22
    },
    width: {
      type: Number,
      default: 50
    },
    fontSize: {
      type: Number
    }
  },
  computed: {
    className: function className() {
      var toggled = this.toggled,
          disabled = this.disabled;


      return ['vue-js-switch', { toggled: toggled, disabled: disabled }];
    },
    coreStyle: function coreStyle() {
      return {
        width: px(this.width),
        height: px(this.height),
        backgroundColor: this.cssColors ? null : this.disabled ? this.colorDisabled : this.colorCurrent,
        borderRadius: px(Math.round(this.height / 2))
      };
    },
    buttonRadius: function buttonRadius() {
      return this.height - MARGIN * 2;
    },
    distance: function distance() {
      return px(this.width - this.height + MARGIN);
    },
    buttonStyle: function buttonStyle() {
      var transition = 'transform ' + this.speed + 'ms';

      var transform = this.toggled ? 'translate3d(' + this.distance + ', 3px, 0px)' : null;

      var background = this.switchColor ? this.switchColorCurrent : null;

      return {
        width: px(this.buttonRadius),
        height: px(this.buttonRadius),
        transition: transition,
        transform: transform,
        background: background
      };
    },
    labelStyle: function labelStyle() {
      return {
        lineHeight: px(this.height),
        fontSize: this.fontSize ? px(this.fontSize) : null
      };
    },
    colorChecked: function colorChecked() {
      var color = this.color;


      if ((typeof color === 'undefined' ? 'undefined' : _typeof(color)) !== 'object') {
        return color || DEFAULT_COLOR_CHECKED;
      }

      return contains(color, 'checked') ? color.checked : DEFAULT_COLOR_CHECKED;
    },
    colorUnchecked: function colorUnchecked() {
      var color = this.color;


      return contains(color, 'unchecked') ? color.unchecked : DEFAULT_COLOR_UNCHECKED;
    },
    colorDisabled: function colorDisabled() {
      var color = this.color;


      return contains(color, 'disabled') ? color.disabled : this.colorCurrent;
    },
    colorCurrent: function colorCurrent() {
      return this.toggled ? this.colorChecked : this.colorUnchecked;
    },
    labelChecked: function labelChecked() {
      var labels = this.labels;


      return contains(labels, 'checked') ? labels.checked : DEFAULT_LABEL_CHECKED;
    },
    labelUnchecked: function labelUnchecked() {
      var labels = this.labels;


      return contains(labels, 'unchecked') ? labels.unchecked : DEFAULT_LABEL_UNCHECKED;
    },
    switchColorChecked: function switchColorChecked() {
      var switchColor = this.switchColor;


      return contains(switchColor, 'checked') ? switchColor.checked : DEFAULT_SWITCH_COLOR;
    },
    switchColorUnchecked: function switchColorUnchecked() {
      var switchColor = this.switchColor;


      return contains(switchColor, 'unchecked') ? switchColor.unchecked : DEFAULT_SWITCH_COLOR;
    },
    switchColorCurrent: function switchColorCurrent() {
      var switchColor = this.switchColor;


      if ((typeof switchColor === 'undefined' ? 'undefined' : _typeof(switchColor)) !== 'object') {
        return switchColor || DEFAULT_SWITCH_COLOR;
      }

      return this.toggled ? this.switchColorChecked : this.switchColorUnchecked;
    }
  },
  watch: {
    value: function value(_value) {
      if (this.sync) {
        this.toggled = !!_value;
      }
    }
  },
  data: function data() {
    return {
      toggled: !!this.value
    };
  },

  methods: {
    toggle: function toggle(event) {
      this.toggled = !this.toggled;
      this.$emit('input', this.toggled);
      this.$emit('change', {
        value: this.toggled,
        srcEvent: event
      });
    }
  }
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Button_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Button_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "ToggleButton", function() { return __WEBPACK_IMPORTED_MODULE_0__Button_vue___default.a; });


var installed = false;

/* harmony default export */ __webpack_exports__["default"] = ({
  install: function install(Vue) {
    if (installed) {
      return;
    }

    Vue.component('ToggleButton', __WEBPACK_IMPORTED_MODULE_0__Button_vue___default.a);
    installed = true;
  }
});



/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".vue-js-switch[data-v-25adc6c0]{display:inline-block;position:relative;overflow:hidden;vertical-align:middle;user-select:none;font-size:10px;cursor:pointer}.vue-js-switch .v-switch-input[data-v-25adc6c0]{opacity:0;position:absolute;width:1px;height:1px}.vue-js-switch .v-switch-label[data-v-25adc6c0]{position:absolute;top:0;font-weight:600;color:#fff;z-index:1}.vue-js-switch .v-switch-label.v-left[data-v-25adc6c0]{left:10px}.vue-js-switch .v-switch-label.v-right[data-v-25adc6c0]{right:10px}.vue-js-switch .v-switch-core[data-v-25adc6c0]{display:block;position:relative;box-sizing:border-box;outline:0;margin:0;transition:border-color .3s,background-color .3s;user-select:none}.vue-js-switch .v-switch-core .v-switch-button[data-v-25adc6c0]{display:block;position:absolute;overflow:hidden;top:0;left:0;transform:translate3d(3px,3px,0);border-radius:100%;background-color:#fff;z-index:2}.vue-js-switch.disabled[data-v-25adc6c0]{pointer-events:none;opacity:.6}", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    class: _vm.className
  }, [_c('input', {
    staticClass: "v-switch-input",
    attrs: {
      "type": "checkbox",
      "name": _vm.name
    },
    domProps: {
      "checked": _vm.value
    },
    on: {
      "change": function($event) {
        $event.stopPropagation();
        return _vm.toggle($event)
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "v-switch-core",
    style: (_vm.coreStyle)
  }, [_c('div', {
    staticClass: "v-switch-button",
    style: (_vm.buttonStyle)
  })]), _vm._v(" "), (_vm.labels) ? [(_vm.toggled) ? _c('span', {
    staticClass: "v-switch-label v-left",
    style: (_vm.labelStyle)
  }, [_vm._t("checked", [
    [_vm._v(_vm._s(_vm.labelChecked))]
  ])], 2) : _c('span', {
    staticClass: "v-switch-label v-right",
    style: (_vm.labelStyle)
  }, [_vm._t("unchecked", [
    [_vm._v(_vm._s(_vm.labelUnchecked))]
  ])], 2)] : _vm._e()], 2)
},staticRenderFns: []}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(8)("2283861f", content, true);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

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

var listToStyles = __webpack_require__(9)

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

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
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
      styles = listToStyles(parentId, newList)
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
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

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
/* 9 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
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


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map

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

/***/ "./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Choices.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/Choices.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
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
//




/* harmony default export */ __webpack_exports__["default"] = ({
    name: "Choices",
    components: {ButtonGroup: _ButtonGroup_vue__WEBPACK_IMPORTED_MODULE_1__["default"], AdequaButton: _AdequaButton_vue__WEBPACK_IMPORTED_MODULE_0__["default"]},
    methods: {
        buttonClicked: function () {
            Adequa.API.runtime.sendMessage({what: "openModal"}, () => {
                window.close();
                void chrome.runtime.lastError;
            });
        }
    }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/CookiePurpose.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/CookiePurpose.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************/
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
    name: "CookiePurpose",
    props: ['purpose', 'cookies', 'domains'],
    data() {
        return {
            expanded: false
        }
    },
    methods: {
        deleteDomain(domain) {
            Adequa.API.runtime.sendMessage({what: "deleteCookiesByDomain", domain}, () => {
                this.$emit('cookie-deleted')
            });
        },
        deletePurpose(purposeId) {
            Adequa.API.runtime.sendMessage({what: "deleteCookiesByPurpose", purpose: purposeId}, () => {
                this.$emit('cookie-deleted')
            });
        },
        toggleExpand(e) {
            this.expanded = !this.expanded;
            e.target.innerText = this.expanded ? '-' : '+';
        },
        openUrl(url) {
            if (!url) return;
            alert(url)
        }
    }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Cookies.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/Cookies.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CookiePurpose_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CookiePurpose.vue */ "./src/js/interface/components/CookiePurpose.vue");
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
    name: "Cookies",
    components: {CookiePurpose: _CookiePurpose_vue__WEBPACK_IMPORTED_MODULE_0__["default"]},
    methods: {
        onClick(purposeId) {
            Adequa.API.runtime.sendMessage({what: "deleteCookiesByPurpose", purpose: purposeId});
            this.cookies[purposeId] = [];
        },
        updateCookies(){
            Adequa.API.runtime.sendMessage({what: "getCookiesByPurpose"}, (cookies) => {
                this.cookies = cookies;
            });
            Adequa.API.runtime.sendMessage({what: "getCookieDomainsByPurpose"}, (domains) => {
                this.domains = domains;
            });
        }
    },
    data() {
        return {
            purposes: [],
            cookies: {},
            domains: {}
        }
    },
    created() {
        Adequa.API.runtime.sendMessage({what: "getCookiePurposes"}, (purposes) => {
            this.purposes = purposes;
        });
        Adequa.API.runtime.sendMessage({what: "getCookiesByPurpose"}, (cookies) => {
            this.cookies = cookies;
        });
        Adequa.API.runtime.sendMessage({what: "getCookieDomainsByPurpose"}, (domains) => {
            this.domains = domains;
        });
    }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Desires.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/Desires.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
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
    name: "Desires"
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/HoverButton.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/HoverButton.vue?vue&type=script&lang=js& ***!
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
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "HoverButton",
    props: ['text']
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Menu.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/Menu.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HoverButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HoverButton.vue */ "./src/js/interface/components/HoverButton.vue");
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
    name: "Menu",
    components: {HoverButton: _HoverButton_vue__WEBPACK_IMPORTED_MODULE_0__["default"]},
    methods: {
        showMenu() {
            return window.history.length > 1;
        },
        addToWhitelist(){
            Adequa.API.runtime.sendMessage({what: 'addToWhitelist'}, (website) => {
                this.website = website
            })
        },
        removeFromWhitelist(){
            Adequa.API.runtime.sendMessage({what: 'removeFromWhitelist'}, (website) => {
                this.website = website
            })
        }
    },
    data(){
        return {
            website: {
                whitelisted: false,
                hostname: "Ce site"
            }
        }
    },
    props: ['nb-cookies'],
    created(){
        Adequa.API.runtime.sendMessage({what: "getCurrentWebsite"}, (website) => {
            if(website) this.website = website
        });
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
    data(){
        return {
            transition: 'menu-slide',
            cookies: []
        }
    },
    methods: {
        onClick() {
            alert('oui')
        }
    },
    watch: {
        '$route' (to, from) {
            this.transition = to.path === '/' ? 'view-slide' : 'menu-slide'
        }
    },
    created(){
        Adequa.API.runtime.sendMessage({what: "getCookies"}, (cookies) => {
            this.cookies = cookies;
        });
        setInterval(()=> {
            Adequa.API.runtime.sendMessage({what: "getCookies"}, (cookies) => {
                this.cookies = cookies;
            });
        }, 2000)
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
            active: false,
            descriptionHidden: true,
            currentSetting: null,
            defaultValue: true
        }
    },
    computed: {
        text: function () {
            return this.active ? "ACCEPTÉS" : "REFUSÉS";
        }
    },
    methods: {
        onClick: function (e) {
            this.currentSetting.id.website_id = this.isDefault ? "all" : this.websiteId;
            this.active = e.value;

            if (this.active) {
                this.currentSetting.value = -1;
            } else if (!this.active) {
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

                this.active = this.currentSetting.value === -1;
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

        this.active = this.currentSetting.value === -1;
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
            console.log(purposes)
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Choices.vue?vue&type=template&id=2b757da8&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/Choices.vue?vue&type=template&id=2b757da8&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _c("div", [
      _c("p", [
        _vm._v(
          "\n            Lorsque vous naviguez, des cookies sont déposés sur votre navigateur.\n            Pour certains d'entre eux, votre consentement est nécessaire.\n            Cliquez sur chaque catégorie de cookies pour accepter ou refuser leur utilisation.\n        "
        )
      ]),
      _vm._v(" "),
      _c("span", [
        _vm._v("\n            Sur tous les sites (par défaut)\n        ")
      ]),
      _vm._v(" "),
      _c(
        "main",
        [_c("router-view", { attrs: { "website-settings": false } })],
        1
      ),
      _vm._v(" "),
      _c("span", { staticClass: "link", on: { click: _vm.buttonClicked } }, [
        _vm._v("Sur ce site")
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", [_c("h2", [_vm._v("MES CHOIX")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/CookiePurpose.vue?vue&type=template&id=5c7166d4&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/CookiePurpose.vue?vue&type=template&id=5c7166d4&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    [
      _c("div", { staticClass: "purpose" }, [
        _c("span", { staticClass: "expand", on: { click: _vm.toggleExpand } }, [
          _vm._v("+")
        ]),
        _vm._v(" "),
        _c("div", [
          _c("p", [_vm._v(_vm._s(_vm.purpose.name))]),
          _vm._v(" "),
          _c("p", [_vm._v(_vm._s((_vm.cookies[_vm.purpose.id] || []).length))])
        ]),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "link",
            on: {
              click: function($event) {
                _vm.deletePurpose(_vm.purpose.id)
              }
            }
          },
          [_vm._v("Supprimer")]
        )
      ]),
      _vm._v(" "),
      _vm._l(_vm.domains[_vm.purpose.id], function(domain) {
        return _vm.expanded
          ? _c("div", { staticClass: "domain" }, [
              _c("div", [
                _c(
                  "p",
                  {
                    class: { pointer: domain.website },
                    style: { color: domain.active ? "red" : "black" },
                    on: {
                      click: function($event) {
                        _vm.openUrl(domain.website)
                      }
                    }
                  },
                  [_vm._v(_vm._s(domain.domain))]
                ),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(domain.count))])
              ]),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "link",
                  on: {
                    click: function($event) {
                      _vm.deleteDomain(domain.domain)
                    }
                  }
                },
                [_vm._v("Supprimer")]
              )
            ])
          : _vm._e()
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Cookies.vue?vue&type=template&id=b521d36e&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/Cookies.vue?vue&type=template&id=b521d36e&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _c(
      "main",
      _vm._l(_vm.purposes, function(purpose) {
        return _c("cookie-purpose", {
          key: purpose.id,
          attrs: {
            purpose: purpose,
            cookies: _vm.cookies,
            domains: _vm.domains
          },
          on: { "cookie-deleted": _vm.updateCookies }
        })
      }),
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", [_c("h2", [_vm._v("MES COOKIES")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Desires.vue?vue&type=template&id=0cdcd563&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/Desires.vue?vue&type=template&id=0cdcd563&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    _vm._v("\n    Bientôt vous pourrez choisir ici vos envies\n")
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/HoverButton.vue?vue&type=template&id=c957ca70&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/HoverButton.vue?vue&type=template&id=c957ca70&scoped=true& ***!
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
  return _c("a", [
    _c("span", { staticClass: "text" }, [_vm._v(_vm._s(_vm.text))]),
    _vm._v(" "),
    _c("span", { staticClass: "line -right" }),
    _vm._v(" "),
    _c("span", { staticClass: "line -top" }),
    _vm._v(" "),
    _c("span", { staticClass: "line -left" }),
    _vm._v(" "),
    _c("span", { staticClass: "line -bottom" })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Menu.vue?vue&type=template&id=cb60d9d6&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/Menu.vue?vue&type=template&id=cb60d9d6&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    _vm.showMenu()
      ? _c(
          "a",
          {
            staticClass: "close-menu",
            attrs: { href: "#" },
            on: {
              click: function($event) {
                _vm.$router.go(-1)
              }
            }
          },
          [
            _c("img", {
              attrs: {
                src:
                  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzEuMTEyIDMxLjExMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzEuMTEyIDMxLjExMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBvbHlnb24gcG9pbnRzPSIzMS4xMTIsMS40MTQgMjkuNjk4LDAgMTUuNTU2LDE0LjE0MiAxLjQxNCwwIDAsMS40MTQgMTQuMTQyLDE1LjU1NiAwLDI5LjY5OCAxLjQxNCwzMS4xMTIgMTUuNTU2LDE2Ljk3IA0KCTI5LjY5OCwzMS4xMTIgMzEuMTEyLDI5LjY5OCAxNi45NywxNS41NTYgIi8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
              }
            })
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c(
      "nav",
      [
        _c(
          "router-link",
          { attrs: { to: "/cookies" } },
          [
            _c("hover-button", {
              attrs: { text: "MES " + _vm.nbCookies + " COOKIES" }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "router-link",
          { attrs: { to: "/choices" } },
          [_c("hover-button", { attrs: { text: "MES CHOIX" } })],
          1
        ),
        _vm._v(" "),
        _c(
          "router-link",
          { attrs: { to: "/desires" } },
          [_c("hover-button", { attrs: { text: "MES ENVIES" } })],
          1
        ),
        _vm._v(" "),
        !_vm.website.whitelisted
          ? _c("span", { on: { click: _vm.addToWhitelist } }, [
              _vm._v("Signaler et réparer un site non fonctionnel")
            ])
          : _c("span", { staticClass: "whitelisted" }, [
              _vm._v(_vm._s(_vm.website.hostname) + " est whitelisté "),
              _c("span", { on: { click: _vm.removeFromWhitelist } }, [
                _vm._v("(enlever)")
              ])
            ])
      ],
      1
    )
  ])
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
      "div",
      [
        _c(
          "transition",
          {
            staticClass: "transition",
            attrs: { name: _vm.transition, mode: "in-out" }
          },
          [_c("router-view", { attrs: { "nb-cookies": _vm.cookies.length } })],
          1
        ),
        _vm._v(" "),
        _vm.$route.path !== "/"
          ? _c(
              "router-link",
              { staticClass: "open-menu", attrs: { to: "/" } },
              [
                _c("img", {
                  attrs: {
                    src:
                      "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSIzMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNNCwxMGgyNGMxLjEwNCwwLDItMC44OTYsMi0ycy0wLjg5Ni0yLTItMkg0QzIuODk2LDYsMiw2Ljg5NiwyLDhTMi44OTYsMTAsNCwxMHogTTI4LDE0SDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDIgIHMwLjg5NiwyLDIsMmgyNGMxLjEwNCwwLDItMC44OTYsMi0yUzI5LjEwNCwxNCwyOCwxNHogTTI4LDIySDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDJzMC44OTYsMiwyLDJoMjRjMS4xMDQsMCwyLTAuODk2LDItMiAgUzI5LjEwNCwyMiwyOCwyMnoiLz48L3N2Zz4="
                  }
                })
              ]
            )
          : _vm._e()
      ],
      1
    ),
    _vm._v(" "),
    _c("footer", [
      _c("hr"),
      _vm._v(" "),
      _c("div", { on: { click: _vm.onClick } }, [
        _c("img", {
          attrs: {
            src: "img/adequa.svg",
            height: "20",
            width: "20",
            alt: "Adequa Logo"
          }
        }),
        _vm._v(" "),
        _c("span", [_vm._v("Adequa")])
      ])
    ])
  ])
}
var staticRenderFns = []
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
    _c("div", { staticClass: "summary" }, [
      _c("span", { on: { click: _vm.expand } }, [_vm._v("+")]),
      _vm._v(" "),
      _c("p", [_vm._v(_vm._s(_vm.purpose.name))]),
      _vm._v(" "),
      _vm.purpose.id === 1
        ? _c(
            "div",
            { staticClass: "toggle", staticStyle: { visibility: "hidden" } },
            [
              _c("p", [_vm._v("OBLIGATOIRE")]),
              _vm._v(" "),
              _c("toggle-button", {
                attrs: {
                  value: true,
                  color: "var(--green)",
                  sync: true,
                  disabled: true
                }
              })
            ],
            1
          )
        : _c(
            "div",
            { staticClass: "toggle", class: { active: _vm.active } },
            [
              _c(
                "p",
                {
                  on: {
                    click: function($event) {
                      _vm.onClick({ value: !_vm.active })
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.text))]
              ),
              _vm._v(" "),
              _c("toggle-button", {
                attrs: {
                  value: _vm.active,
                  color: { checked: "var(--green)", unchecked: "var(--red)" },
                  sync: true
                },
                on: { change: _vm.onClick }
              })
            ],
            1
          )
    ]),
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
          "is-default": true,
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Choices.vue?vue&type=style&index=0&id=2b757da8&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/Choices.vue?vue&type=style&index=0&id=2b757da8&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Choices.vue?vue&type=style&index=0&id=2b757da8&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Choices.vue?vue&type=style&index=0&id=2b757da8&scoped=true&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("d3563d0c", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/CookiePurpose.vue?vue&type=style&index=0&id=5c7166d4&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/CookiePurpose.vue?vue&type=style&index=0&id=5c7166d4&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./CookiePurpose.vue?vue&type=style&index=0&id=5c7166d4&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/CookiePurpose.vue?vue&type=style&index=0&id=5c7166d4&scoped=true&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("b4717d38", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Cookies.vue?vue&type=style&index=0&id=b521d36e&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/Cookies.vue?vue&type=style&index=0&id=b521d36e&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Cookies.vue?vue&type=style&index=0&id=b521d36e&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Cookies.vue?vue&type=style&index=0&id=b521d36e&scoped=true&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("6903e376", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/HoverButton.vue?vue&type=style&index=0&id=c957ca70&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/HoverButton.vue?vue&type=style&index=0&id=c957ca70&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./HoverButton.vue?vue&type=style&index=0&id=c957ca70&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/HoverButton.vue?vue&type=style&index=0&id=c957ca70&scoped=true&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("05d18955", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Menu.vue?vue&type=style&index=0&id=cb60d9d6&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/Menu.vue?vue&type=style&index=0&id=cb60d9d6&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Menu.vue?vue&type=style&index=0&id=cb60d9d6&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Menu.vue?vue&type=style&index=0&id=cb60d9d6&scoped=true&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("45e415e8", content, false, {});
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Desires.vue?vue&type=style&index=0&id=0cdcd563&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/js/interface/components/Desires.vue?vue&type=style&index=0&id=0cdcd563&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Desires.vue?vue&type=style&index=0&id=0cdcd563&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Desires.vue?vue&type=style&index=0&id=0cdcd563&scoped=true&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2a5eff78", content, false, {});
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

/***/ "./src/js/interface/components/Choices.vue":
/*!*************************************************!*\
  !*** ./src/js/interface/components/Choices.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Choices_vue_vue_type_template_id_2b757da8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Choices.vue?vue&type=template&id=2b757da8&scoped=true& */ "./src/js/interface/components/Choices.vue?vue&type=template&id=2b757da8&scoped=true&");
/* harmony import */ var _Choices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Choices.vue?vue&type=script&lang=js& */ "./src/js/interface/components/Choices.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Choices_vue_vue_type_style_index_0_id_2b757da8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Choices.vue?vue&type=style&index=0&id=2b757da8&scoped=true&lang=scss& */ "./src/js/interface/components/Choices.vue?vue&type=style&index=0&id=2b757da8&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Choices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Choices_vue_vue_type_template_id_2b757da8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Choices_vue_vue_type_template_id_2b757da8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2b757da8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/interface/components/Choices.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/interface/components/Choices.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/js/interface/components/Choices.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Choices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib??vue-loader-options!./Choices.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Choices.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Choices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/interface/components/Choices.vue?vue&type=style&index=0&id=2b757da8&scoped=true&lang=scss&":
/*!***********************************************************************************************************!*\
  !*** ./src/js/interface/components/Choices.vue?vue&type=style&index=0&id=2b757da8&scoped=true&lang=scss& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Choices_vue_vue_type_style_index_0_id_2b757da8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Choices.vue?vue&type=style&index=0&id=2b757da8&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Choices.vue?vue&type=style&index=0&id=2b757da8&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Choices_vue_vue_type_style_index_0_id_2b757da8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Choices_vue_vue_type_style_index_0_id_2b757da8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Choices_vue_vue_type_style_index_0_id_2b757da8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Choices_vue_vue_type_style_index_0_id_2b757da8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Choices_vue_vue_type_style_index_0_id_2b757da8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/interface/components/Choices.vue?vue&type=template&id=2b757da8&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./src/js/interface/components/Choices.vue?vue&type=template&id=2b757da8&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Choices_vue_vue_type_template_id_2b757da8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Choices.vue?vue&type=template&id=2b757da8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Choices.vue?vue&type=template&id=2b757da8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Choices_vue_vue_type_template_id_2b757da8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Choices_vue_vue_type_template_id_2b757da8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/interface/components/CookiePurpose.vue":
/*!*******************************************************!*\
  !*** ./src/js/interface/components/CookiePurpose.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CookiePurpose_vue_vue_type_template_id_5c7166d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CookiePurpose.vue?vue&type=template&id=5c7166d4&scoped=true& */ "./src/js/interface/components/CookiePurpose.vue?vue&type=template&id=5c7166d4&scoped=true&");
/* harmony import */ var _CookiePurpose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CookiePurpose.vue?vue&type=script&lang=js& */ "./src/js/interface/components/CookiePurpose.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CookiePurpose_vue_vue_type_style_index_0_id_5c7166d4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CookiePurpose.vue?vue&type=style&index=0&id=5c7166d4&scoped=true&lang=scss& */ "./src/js/interface/components/CookiePurpose.vue?vue&type=style&index=0&id=5c7166d4&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CookiePurpose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CookiePurpose_vue_vue_type_template_id_5c7166d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CookiePurpose_vue_vue_type_template_id_5c7166d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5c7166d4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/interface/components/CookiePurpose.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/interface/components/CookiePurpose.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./src/js/interface/components/CookiePurpose.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_CookiePurpose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib??vue-loader-options!./CookiePurpose.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/CookiePurpose.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_CookiePurpose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/interface/components/CookiePurpose.vue?vue&type=style&index=0&id=5c7166d4&scoped=true&lang=scss&":
/*!*****************************************************************************************************************!*\
  !*** ./src/js/interface/components/CookiePurpose.vue?vue&type=style&index=0&id=5c7166d4&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CookiePurpose_vue_vue_type_style_index_0_id_5c7166d4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./CookiePurpose.vue?vue&type=style&index=0&id=5c7166d4&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/CookiePurpose.vue?vue&type=style&index=0&id=5c7166d4&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CookiePurpose_vue_vue_type_style_index_0_id_5c7166d4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CookiePurpose_vue_vue_type_style_index_0_id_5c7166d4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CookiePurpose_vue_vue_type_style_index_0_id_5c7166d4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CookiePurpose_vue_vue_type_style_index_0_id_5c7166d4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_CookiePurpose_vue_vue_type_style_index_0_id_5c7166d4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/interface/components/CookiePurpose.vue?vue&type=template&id=5c7166d4&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./src/js/interface/components/CookiePurpose.vue?vue&type=template&id=5c7166d4&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CookiePurpose_vue_vue_type_template_id_5c7166d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CookiePurpose.vue?vue&type=template&id=5c7166d4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/CookiePurpose.vue?vue&type=template&id=5c7166d4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CookiePurpose_vue_vue_type_template_id_5c7166d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CookiePurpose_vue_vue_type_template_id_5c7166d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/interface/components/Cookies.vue":
/*!*************************************************!*\
  !*** ./src/js/interface/components/Cookies.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cookies_vue_vue_type_template_id_b521d36e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cookies.vue?vue&type=template&id=b521d36e&scoped=true& */ "./src/js/interface/components/Cookies.vue?vue&type=template&id=b521d36e&scoped=true&");
/* harmony import */ var _Cookies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cookies.vue?vue&type=script&lang=js& */ "./src/js/interface/components/Cookies.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Cookies_vue_vue_type_style_index_0_id_b521d36e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cookies.vue?vue&type=style&index=0&id=b521d36e&scoped=true&lang=scss& */ "./src/js/interface/components/Cookies.vue?vue&type=style&index=0&id=b521d36e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Cookies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Cookies_vue_vue_type_template_id_b521d36e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Cookies_vue_vue_type_template_id_b521d36e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b521d36e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/interface/components/Cookies.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/interface/components/Cookies.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/js/interface/components/Cookies.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Cookies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib??vue-loader-options!./Cookies.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Cookies.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Cookies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/interface/components/Cookies.vue?vue&type=style&index=0&id=b521d36e&scoped=true&lang=scss&":
/*!***********************************************************************************************************!*\
  !*** ./src/js/interface/components/Cookies.vue?vue&type=style&index=0&id=b521d36e&scoped=true&lang=scss& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Cookies_vue_vue_type_style_index_0_id_b521d36e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Cookies.vue?vue&type=style&index=0&id=b521d36e&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Cookies.vue?vue&type=style&index=0&id=b521d36e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Cookies_vue_vue_type_style_index_0_id_b521d36e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Cookies_vue_vue_type_style_index_0_id_b521d36e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Cookies_vue_vue_type_style_index_0_id_b521d36e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Cookies_vue_vue_type_style_index_0_id_b521d36e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Cookies_vue_vue_type_style_index_0_id_b521d36e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/interface/components/Cookies.vue?vue&type=template&id=b521d36e&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./src/js/interface/components/Cookies.vue?vue&type=template&id=b521d36e&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cookies_vue_vue_type_template_id_b521d36e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Cookies.vue?vue&type=template&id=b521d36e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Cookies.vue?vue&type=template&id=b521d36e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cookies_vue_vue_type_template_id_b521d36e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cookies_vue_vue_type_template_id_b521d36e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/interface/components/Desires.vue":
/*!*************************************************!*\
  !*** ./src/js/interface/components/Desires.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Desires_vue_vue_type_template_id_0cdcd563_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Desires.vue?vue&type=template&id=0cdcd563&scoped=true& */ "./src/js/interface/components/Desires.vue?vue&type=template&id=0cdcd563&scoped=true&");
/* harmony import */ var _Desires_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Desires.vue?vue&type=script&lang=js& */ "./src/js/interface/components/Desires.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Desires_vue_vue_type_style_index_0_id_0cdcd563_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Desires.vue?vue&type=style&index=0&id=0cdcd563&scoped=true&lang=css& */ "./src/js/interface/components/Desires.vue?vue&type=style&index=0&id=0cdcd563&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Desires_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Desires_vue_vue_type_template_id_0cdcd563_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Desires_vue_vue_type_template_id_0cdcd563_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0cdcd563",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/interface/components/Desires.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/interface/components/Desires.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/js/interface/components/Desires.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Desires_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib??vue-loader-options!./Desires.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Desires.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Desires_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/interface/components/Desires.vue?vue&type=style&index=0&id=0cdcd563&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./src/js/interface/components/Desires.vue?vue&type=style&index=0&id=0cdcd563&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Desires_vue_vue_type_style_index_0_id_0cdcd563_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Desires.vue?vue&type=style&index=0&id=0cdcd563&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Desires.vue?vue&type=style&index=0&id=0cdcd563&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Desires_vue_vue_type_style_index_0_id_0cdcd563_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Desires_vue_vue_type_style_index_0_id_0cdcd563_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Desires_vue_vue_type_style_index_0_id_0cdcd563_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Desires_vue_vue_type_style_index_0_id_0cdcd563_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Desires_vue_vue_type_style_index_0_id_0cdcd563_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/interface/components/Desires.vue?vue&type=template&id=0cdcd563&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./src/js/interface/components/Desires.vue?vue&type=template&id=0cdcd563&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Desires_vue_vue_type_template_id_0cdcd563_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Desires.vue?vue&type=template&id=0cdcd563&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Desires.vue?vue&type=template&id=0cdcd563&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Desires_vue_vue_type_template_id_0cdcd563_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Desires_vue_vue_type_template_id_0cdcd563_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/interface/components/HoverButton.vue":
/*!*****************************************************!*\
  !*** ./src/js/interface/components/HoverButton.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HoverButton_vue_vue_type_template_id_c957ca70_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HoverButton.vue?vue&type=template&id=c957ca70&scoped=true& */ "./src/js/interface/components/HoverButton.vue?vue&type=template&id=c957ca70&scoped=true&");
/* harmony import */ var _HoverButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HoverButton.vue?vue&type=script&lang=js& */ "./src/js/interface/components/HoverButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _HoverButton_vue_vue_type_style_index_0_id_c957ca70_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HoverButton.vue?vue&type=style&index=0&id=c957ca70&scoped=true&lang=scss& */ "./src/js/interface/components/HoverButton.vue?vue&type=style&index=0&id=c957ca70&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HoverButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HoverButton_vue_vue_type_template_id_c957ca70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HoverButton_vue_vue_type_template_id_c957ca70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c957ca70",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/interface/components/HoverButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/interface/components/HoverButton.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./src/js/interface/components/HoverButton.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_HoverButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib??vue-loader-options!./HoverButton.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/HoverButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_HoverButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/interface/components/HoverButton.vue?vue&type=style&index=0&id=c957ca70&scoped=true&lang=scss&":
/*!***************************************************************************************************************!*\
  !*** ./src/js/interface/components/HoverButton.vue?vue&type=style&index=0&id=c957ca70&scoped=true&lang=scss& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HoverButton_vue_vue_type_style_index_0_id_c957ca70_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./HoverButton.vue?vue&type=style&index=0&id=c957ca70&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/HoverButton.vue?vue&type=style&index=0&id=c957ca70&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HoverButton_vue_vue_type_style_index_0_id_c957ca70_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HoverButton_vue_vue_type_style_index_0_id_c957ca70_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HoverButton_vue_vue_type_style_index_0_id_c957ca70_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HoverButton_vue_vue_type_style_index_0_id_c957ca70_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HoverButton_vue_vue_type_style_index_0_id_c957ca70_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/interface/components/HoverButton.vue?vue&type=template&id=c957ca70&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./src/js/interface/components/HoverButton.vue?vue&type=template&id=c957ca70&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HoverButton_vue_vue_type_template_id_c957ca70_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./HoverButton.vue?vue&type=template&id=c957ca70&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/HoverButton.vue?vue&type=template&id=c957ca70&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HoverButton_vue_vue_type_template_id_c957ca70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HoverButton_vue_vue_type_template_id_c957ca70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/interface/components/Menu.vue":
/*!**********************************************!*\
  !*** ./src/js/interface/components/Menu.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Menu_vue_vue_type_template_id_cb60d9d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu.vue?vue&type=template&id=cb60d9d6&scoped=true& */ "./src/js/interface/components/Menu.vue?vue&type=template&id=cb60d9d6&scoped=true&");
/* harmony import */ var _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu.vue?vue&type=script&lang=js& */ "./src/js/interface/components/Menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Menu_vue_vue_type_style_index_0_id_cb60d9d6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu.vue?vue&type=style&index=0&id=cb60d9d6&scoped=true&lang=scss& */ "./src/js/interface/components/Menu.vue?vue&type=style&index=0&id=cb60d9d6&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Menu_vue_vue_type_template_id_cb60d9d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Menu_vue_vue_type_template_id_cb60d9d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "cb60d9d6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/interface/components/Menu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/interface/components/Menu.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./src/js/interface/components/Menu.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib??vue-loader-options!./Menu.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/interface/components/Menu.vue?vue&type=style&index=0&id=cb60d9d6&scoped=true&lang=scss&":
/*!********************************************************************************************************!*\
  !*** ./src/js/interface/components/Menu.vue?vue&type=style&index=0&id=cb60d9d6&scoped=true&lang=scss& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_id_cb60d9d6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Menu.vue?vue&type=style&index=0&id=cb60d9d6&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Menu.vue?vue&type=style&index=0&id=cb60d9d6&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_id_cb60d9d6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_id_cb60d9d6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_id_cb60d9d6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_id_cb60d9d6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_id_cb60d9d6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/interface/components/Menu.vue?vue&type=template&id=cb60d9d6&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./src/js/interface/components/Menu.vue?vue&type=template&id=cb60d9d6&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_cb60d9d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Menu.vue?vue&type=template&id=cb60d9d6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/interface/components/Menu.vue?vue&type=template&id=cb60d9d6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_cb60d9d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_cb60d9d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* harmony import */ var _components_Cookies_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Cookies.vue */ "./src/js/interface/components/Cookies.vue");
/* harmony import */ var _components_Choices_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Choices.vue */ "./src/js/interface/components/Choices.vue");
/* harmony import */ var _components_Desires_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Desires.vue */ "./src/js/interface/components/Desires.vue");
/* harmony import */ var _components_Menu_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Menu.vue */ "./src/js/interface/components/Menu.vue");
/* harmony import */ var vue_js_toggle_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-js-toggle-button */ "./node_modules/vue-js-toggle-button/dist/index.js");
/* harmony import */ var vue_js_toggle_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vue_js_toggle_button__WEBPACK_IMPORTED_MODULE_9__);











Vue.use(vue_js_toggle_button__WEBPACK_IMPORTED_MODULE_9___default.a)
const routes = [
    {
        path: '/',
        component: _components_Menu_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
        props: true
    },
    {
        path: '/cookies',
        component: _components_Cookies_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
        props: true
    },
    {
        path: '/choices',
        component: _components_Choices_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
        props: true,
        children: [
            {
                path: '/',
                component: _components_Settings_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
            },
            {
                path: 'vendors',
                component: _components_VendorSettings_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
            }
        ]
    },
    {
        path: '/desires',
        component: _components_Desires_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
        props: true
    }
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    router,
    components: {
        AdequaButton: _components_AdequaButton_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
        ButtonGroup: _components_ButtonGroup_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    },
    render: h => h(_components_Popup_vue__WEBPACK_IMPORTED_MODULE_4__["default"])
}).$mount('#app');


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL0FkZXF1YUJ1dHRvbi52dWU/MjQxNSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvQnV0dG9uR3JvdXAudnVlPzIzZDEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL0Nob2ljZXMudnVlP2UwYjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL0Nvb2tpZVB1cnBvc2UudnVlPzk0ODUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL0Nvb2tpZXMudnVlPzdhNGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL0hvdmVyQnV0dG9uLnZ1ZT85ODE4Iiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9NZW51LnZ1ZT9mN2E1Iiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9QYXJ0bmVyU2V0dGluZy52dWU/MTA5ZCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvUG9wdXAudnVlP2U0ODMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL1B1cnBvc2VTZXR0aW5nLnZ1ZT85OTZkIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9TZXR0aW5ncy52dWU/ZTUyMSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvVmVuZG9yU2V0dGluZ3MudnVlPzhkODkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL0Rlc2lyZXMudnVlPzc0OWEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWpzLXRvZ2dsZS1idXR0b24vZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL0FkZXF1YUJ1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9CdXR0b25Hcm91cC52dWUiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9DaG9pY2VzLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL0Nvb2tpZVB1cnBvc2UudnVlIiwid2VicGFjazovLy9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvQ29va2llcy52dWUiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9EZXNpcmVzLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL0hvdmVyQnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL01lbnUudnVlIiwid2VicGFjazovLy9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvUGFydG5lclNldHRpbmcudnVlIiwid2VicGFjazovLy9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvUG9wdXAudnVlIiwid2VicGFjazovLy9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvUHVycG9zZVNldHRpbmcudnVlIiwid2VicGFjazovLy9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvU2V0dGluZ3MudnVlIiwid2VicGFjazovLy9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvVmVuZG9yU2V0dGluZ3MudnVlIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9BZGVxdWFCdXR0b24udnVlPzU5NGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL0J1dHRvbkdyb3VwLnZ1ZT9mNTA3Iiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9DaG9pY2VzLnZ1ZT8zMzY0Iiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9Db29raWVQdXJwb3NlLnZ1ZT9hOWM3Iiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9Db29raWVzLnZ1ZT80NWUxIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9EZXNpcmVzLnZ1ZT82MzBiIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9Ib3ZlckJ1dHRvbi52dWU/MWFiYSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvTWVudS52dWU/Nzk4MiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvUGFydG5lclNldHRpbmcudnVlPzg2ZWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL1BvcHVwLnZ1ZT9jMjFlIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9QdXJwb3NlU2V0dGluZy52dWU/OGZiZSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvU2V0dGluZ3MudnVlPzZkMDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL1ZlbmRvclNldHRpbmdzLnZ1ZT9iMDUwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL0FkZXF1YUJ1dHRvbi52dWU/MWQ3ZCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvQnV0dG9uR3JvdXAudnVlPzlmNjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL0Nob2ljZXMudnVlP2IzODAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL0Nvb2tpZVB1cnBvc2UudnVlPzVmZjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL0Nvb2tpZXMudnVlP2M0ZGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL0hvdmVyQnV0dG9uLnZ1ZT85MWUzIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9NZW51LnZ1ZT8yOTAyIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9QYXJ0bmVyU2V0dGluZy52dWU/MWUxMiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvUG9wdXAudnVlPzM4ZmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL1B1cnBvc2VTZXR0aW5nLnZ1ZT82MTViIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9TZXR0aW5ncy52dWU/YmJmZCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvVmVuZG9yU2V0dGluZ3MudnVlP2MzMmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL0Rlc2lyZXMudnVlPzhhY2EiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9BZGVxdWFCdXR0b24udnVlIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9BZGVxdWFCdXR0b24udnVlP2QwNmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL0FkZXF1YUJ1dHRvbi52dWU/YmQ2NyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvQWRlcXVhQnV0dG9uLnZ1ZT8yMjI2Iiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9CdXR0b25Hcm91cC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL0J1dHRvbkdyb3VwLnZ1ZT81NTQ3Iiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9CdXR0b25Hcm91cC52dWU/MGIwMCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvQnV0dG9uR3JvdXAudnVlP2UzZTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL0Nob2ljZXMudnVlIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9DaG9pY2VzLnZ1ZT81ODk5Iiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9DaG9pY2VzLnZ1ZT83MGE4Iiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9DaG9pY2VzLnZ1ZT83NjYyIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9Db29raWVQdXJwb3NlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvQ29va2llUHVycG9zZS52dWU/NjcwMiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvQ29va2llUHVycG9zZS52dWU/YjEzMiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvQ29va2llUHVycG9zZS52dWU/ZjI3MiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvQ29va2llcy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL0Nvb2tpZXMudnVlPzIyMzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL0Nvb2tpZXMudnVlPzM3ZjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL0Nvb2tpZXMudnVlPzEwZDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL0Rlc2lyZXMudnVlIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9EZXNpcmVzLnZ1ZT85NWYxIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9EZXNpcmVzLnZ1ZT8xNGYxIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9EZXNpcmVzLnZ1ZT80YTY5Iiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9Ib3ZlckJ1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL0hvdmVyQnV0dG9uLnZ1ZT8yMTFlIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9Ib3ZlckJ1dHRvbi52dWU/NWYxOSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvSG92ZXJCdXR0b24udnVlP2M0YjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL01lbnUudnVlIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9NZW51LnZ1ZT8yMTM5Iiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9NZW51LnZ1ZT9jNjNhIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9NZW51LnZ1ZT82MjkxIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9QYXJ0bmVyU2V0dGluZy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL1BhcnRuZXJTZXR0aW5nLnZ1ZT80M2I4Iiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9QYXJ0bmVyU2V0dGluZy52dWU/OTY3YiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvUGFydG5lclNldHRpbmcudnVlP2RhZWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL1BvcHVwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvUG9wdXAudnVlP2ExNGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL1BvcHVwLnZ1ZT9kYmQ2Iiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9Qb3B1cC52dWU/NTI2OSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvUHVycG9zZVNldHRpbmcudnVlIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9QdXJwb3NlU2V0dGluZy52dWU/OTYxYSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvUHVycG9zZVNldHRpbmcudnVlPzliZTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL1B1cnBvc2VTZXR0aW5nLnZ1ZT9mMDRhIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9TZXR0aW5ncy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL1NldHRpbmdzLnZ1ZT9jOTA5Iiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9TZXR0aW5ncy52dWU/YmUxMCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvU2V0dGluZ3MudnVlPzc5ZmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL1ZlbmRvclNldHRpbmdzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvVmVuZG9yU2V0dGluZ3MudnVlPzI4OWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL1ZlbmRvclNldHRpbmdzLnZ1ZT84NzNlIiwid2VicGFjazovLy8uL3NyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9WZW5kb3JTZXR0aW5ncy52dWU/NTE4NiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW50ZXJmYWNlL3BvcHVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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bkMsYUFBYTtBQUNiO0FBQ0E7QUFDQSwyQkFBMkIsc0VBQWM7QUFDekM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsbUJBQW1CLCtEQUFPO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtGQUFZO0FBQ3BCLFFBQVEsZ0ZBQVc7QUFDbkIsS0FBSztBQUNMLG1CQUFtQiw2REFBSztBQUN4QixDQUFDIiwiZmlsZSI6InBvcHVwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2ludGVyZmFjZS9wb3B1cC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwicFtkYXRhLXYtMGMzMTJlYTNdIHtcXG4gIGNvbG9yOiBncmF5O1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcXG4gIHdpZHRoOiAxNDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogNDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbnAgc3BhbltkYXRhLXYtMGMzMTJlYTNdIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uYWN0aXZlW2RhdGEtdi0wYzMxMmVhM10ge1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLnNtYWxsIHBbZGF0YS12LTBjMzEyZWEzXSB7XFxuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcXG4gIGhlaWdodDogMzVweCAhaW1wb3J0YW50O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uc21hbGwgcCBzcGFuW2RhdGEtdi0wYzMxMmVhM10ge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJ1dHRvbi1ncm91cFtkYXRhLXYtMmQ4MjIyMjddIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmJ1dHRvbi1ncm91cCA+IGRpdltkYXRhLXYtMmQ4MjIyMjddIHtcXG4gICAgei1pbmRleDogNTtcXG59XFxuLmJ1dHRvbi1ncm91cCAjYmxvY2tbZGF0YS12LTJkODIyMjI3XSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDE0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgdG9wOiA1cHg7XFxuICAgIGxlZnQ6IDc1cHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbn1cXG4uYnV0dG9uLWdyb3VwIC5yaWdodC1wb3NpdGlvbltkYXRhLXYtMmQ4MjIyMjddIHtcXG4gICAgbGVmdDogMjg1cHggIWltcG9ydGFudDtcXG59XFxuLmJ1dHRvbi1ncm91cCAucmVkW2RhdGEtdi0yZDgyMjIyN10ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpICFpbXBvcnRhbnQ7XFxufVxcbi5zbWFsbCAjYmxvY2tbZGF0YS12LTJkODIyMjI3XSB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB0b3A6IDVweDtcXG4gIGxlZnQ6IDIwcHg7XFxufVxcbi5zbWFsbCAucmlnaHQtcG9zaXRpb25bZGF0YS12LTJkODIyMjI3XSB7XFxuICBsZWZ0OiAxMzVweCAhaW1wb3J0YW50O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImgyW2RhdGEtdi0yYjc1N2RhOF0ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJKb3NlZmluIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZy10b3A6IDRweDtcXG4gIG1hcmdpbi10b3A6IC00N3B4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5tYWluW2RhdGEtdi0yYjc1N2RhOF0ge1xcbiAgbWF4LWhlaWdodDogMjIwcHg7XFxuICBoZWlnaHQ6IDIyMHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIG1hcmdpbjogMTBweCAwO1xcbn1cXG5kaXZbZGF0YS12LTJiNzU3ZGE4XSB7XFxuICBmb250LWZhbWlseTogXFxcIkpvc2VmaW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcbmRpdiA+IHBbZGF0YS12LTJiNzU3ZGE4XSB7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTbGFiJywgc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuLmxpbmtbZGF0YS12LTJiNzU3ZGE4XSB7XFxuICBjb2xvcjogZ3JleTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7XFxufVxcbi5saW5rW2RhdGEtdi0yYjc1N2RhOF06aG92ZXIge1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5mb290ZXJbZGF0YS12LTJiNzU3ZGE4XSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wdXJwb3NlW2RhdGEtdi01YzcxNjZkNF0ge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSm9zZWZpbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuLnB1cnBvc2UgPiBkaXZbZGF0YS12LTVjNzE2NmQ0XSB7XFxuICAgIHdpZHRoOiAyOTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ucHVycG9zZSA+IGRpdiA+IHBbZGF0YS12LTVjNzE2NmQ0XTpsYXN0LWNoaWxkIHtcXG4gICAgICBmb250LXdlaWdodDogMzAwO1xcbn1cXG4uZG9tYWluW2RhdGEtdi01YzcxNjZkNF0ge1xcbiAgbWFyZ2luOiAxMHB4IDAgMTBweCAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LWZhbWlseTogXFxcIkpvc2VmaW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcbi5kb21haW4gKltkYXRhLXYtNWM3MTY2ZDRdIHtcXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5kb21haW4gPiBkaXZbZGF0YS12LTVjNzE2NmQ0XSB7XFxuICAgIHdpZHRoOiAyNzVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uZG9tYWluID4gZGl2ID4gcFtkYXRhLXYtNWM3MTY2ZDRdOmxhc3QtY2hpbGQge1xcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcbi5saW5rW2RhdGEtdi01YzcxNjZkNF0ge1xcbiAgY29sb3I6IHZhcigtLXJlZCk7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJKb3NlZmluIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi5leHBhbmRbZGF0YS12LTVjNzE2NmQ0XSB7XFxuICB3aWR0aDogMjVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogZ3JheTtcXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5wb2ludGVyW2RhdGEtdi01YzcxNjZkNF0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImRpdltkYXRhLXYtYjUyMWQzNmVdIHtcXG4gIGZsZXg6IDE7XFxufVxcbmgyW2RhdGEtdi1iNTIxZDM2ZV0ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJKb3NlZmluIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZy10b3A6IDRweDtcXG4gIG1hcmdpbi10b3A6IC00N3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxubWFpbltkYXRhLXYtYjUyMWQzNmVdIHtcXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC8qanVzdGlmeS1jb250ZW50OiBjZW50ZXI7Ki9cXG59XFxuLmxpbmtbZGF0YS12LWI1MjFkMzZlXSB7XFxuICBjb2xvcjogZ3JleTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuZm9vdGVyW2RhdGEtdi1iNTIxZDM2ZV0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJhW2RhdGEtdi1jOTU3Y2E3MF0ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMC4zZW0gY2FsYygwLjNlbSAqIDEuNCk7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3JkZXI6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wN2VtO1xcbn1cXG5hIC50ZXh0W2RhdGEtdi1jOTU3Y2E3MF0ge1xcbiAgICAvKjwhLS10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsICRwYWQsIDApOy0tPiovXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBjdWJpYy1iZXppZXIoMC4yLCAwLCAwLCAxKSAwLjRzO1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIHdpZHRoOiAyNDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5hW2RhdGEtdi1jOTU3Y2E3MF06YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBib3R0b206IC0zcHg7XFxuICAgIGxlZnQ6IGNhbGMoMC4zZW0gKiAxLjQpO1xcbiAgICByaWdodDogY2FsYygwLjNlbSAqIDEuNCk7XFxuICAgIGhlaWdodDogM3B4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmVlbik7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzIGN1YmljLWJlemllcigxLCAwLCAwLjM3LCAxKSAwLjJzLCByaWdodCAwLjJzIGN1YmljLWJlemllcigwLjA0LCAwLjQ4LCAwLCAxKSAwLjZzLCBsZWZ0IDAuNHMgY3ViaWMtYmV6aWVyKDAuMDQsIDAuNDgsIDAsIDEpIDAuNnM7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxufVxcbi5saW5lW2RhdGEtdi1jOTU3Y2E3MF0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JlZW4pO1xcbn1cXG4ubGluZS4tcmlnaHRbZGF0YS12LWM5NTdjYTcwXSwgLmxpbmUuLWxlZnRbZGF0YS12LWM5NTdjYTcwXSB7XFxuICAgIHdpZHRoOiAzcHg7XFxuICAgIGJvdHRvbTogLTNweDtcXG4gICAgdG9wOiAtM3B4O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMCwgMSk7XFxufVxcbi5saW5lLi10b3BbZGF0YS12LWM5NTdjYTcwXSwgLmxpbmUuLWJvdHRvbVtkYXRhLXYtYzk1N2NhNzBdIHtcXG4gICAgaGVpZ2h0OiAzcHg7XFxuICAgIGxlZnQ6IC0zcHg7XFxuICAgIHJpZ2h0OiAtM3B4O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMCwgMSwgMSk7XFxufVxcbi5saW5lLi1yaWdodFtkYXRhLXYtYzk1N2NhNzBdIHtcXG4gICAgcmlnaHQ6IC0zcHg7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGN1YmljLWJlemllcigxLCAwLCAwLjY1LCAxLjAxKSAwLjIzcztcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xcbn1cXG4ubGluZS4tdG9wW2RhdGEtdi1jOTU3Y2E3MF0ge1xcbiAgICB0b3A6IC0zcHg7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjA4cyBsaW5lYXIgMC40M3M7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxufVxcbi5saW5lLi1sZWZ0W2RhdGEtdi1jOTU3Y2E3MF0ge1xcbiAgICBsZWZ0OiAtM3B4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4wOHMgbGluZWFyIDAuNTFzO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XFxufVxcbi5saW5lLi1ib3R0b21bZGF0YS12LWM5NTdjYTcwXSB7XFxuICAgIGJvdHRvbTogLTNweDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDEsIDAsIDAuNjUsIDEuMDEpO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcXG59XFxuYTpob3ZlciAudGV4dFtkYXRhLXYtYzk1N2NhNzBdLFxcbmE6YWN0aXZlIC50ZXh0W2RhdGEtdi1jOTU3Y2E3MF0ge1xcbiAgLyp0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApOyovXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBjdWJpYy1iZXppZXIoMC4yLCAwLCAwLCAxKSAwLjRzO1xcbn1cXG5hW2RhdGEtdi1jOTU3Y2E3MF06aG92ZXI6YWZ0ZXIsXFxuYVtkYXRhLXYtYzk1N2NhNzBdOmFjdGl2ZTphZnRlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlM2QoMCwgMSwgMSk7XFxuICByaWdodDogLTNweDtcXG4gIGxlZnQ6IC0zcHg7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGN1YmljLWJlemllcigxLCAwLCAwLjY1LCAxLjAxKSAwLjE3cywgcmlnaHQgMC4ycyBjdWJpYy1iZXppZXIoMSwgMCwgMC42NSwgMS4wMSksIGxlZnQgMHMgMC4zcztcXG59XFxuYTpob3ZlciAubGluZVtkYXRhLXYtYzk1N2NhNzBdLFxcbmE6YWN0aXZlIC5saW5lW2RhdGEtdi1jOTU3Y2E3MF0ge1xcbiAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xcbn1cXG5hOmhvdmVyIC5saW5lLi1yaWdodFtkYXRhLXYtYzk1N2NhNzBdLFxcbiAgYTphY3RpdmUgLmxpbmUuLXJpZ2h0W2RhdGEtdi1jOTU3Y2E3MF0ge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBjdWJpYy1iZXppZXIoMSwgMCwgMC42NSwgMS4wMSkgMC4ycztcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xcbn1cXG5hOmhvdmVyIC5saW5lLi10b3BbZGF0YS12LWM5NTdjYTcwXSxcXG4gIGE6YWN0aXZlIC5saW5lLi10b3BbZGF0YS12LWM5NTdjYTcwXSB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjA4cyBsaW5lYXIgMC40cztcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XFxufVxcbmE6aG92ZXIgLmxpbmUuLWxlZnRbZGF0YS12LWM5NTdjYTcwXSxcXG4gIGE6YWN0aXZlIC5saW5lLi1sZWZ0W2RhdGEtdi1jOTU3Y2E3MF0ge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4wOHMgbGluZWFyIDAuNDhzO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxufVxcbmE6aG92ZXIgLmxpbmUuLWJvdHRvbVtkYXRhLXYtYzk1N2NhNzBdLFxcbiAgYTphY3RpdmUgLmxpbmUuLWJvdHRvbVtkYXRhLXYtYzk1N2NhNzBdIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAsIDAuNTMsIDAuMjksIDEpIDAuNTZzO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jbG9zZS1tZW51W2RhdGEtdi1jYjYwZDlkNl0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1cHg7XFxuICByaWdodDogNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxufVxcbi53aGl0ZWxpc3RlZFtkYXRhLXYtY2I2MGQ5ZDZdIHtcXG4gIGNvbG9yOiB2YXIoLS1ncmVlbikgIWltcG9ydGFudDtcXG4gIGN1cnNvcjogYXV0byAhaW1wb3J0YW50O1xcbn1cXG4ud2hpdGVsaXN0ZWRbZGF0YS12LWNiNjBkOWQ2XTpob3ZlciB7XFxuICB0ZXh0LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5zcGFuW2RhdGEtdi1jYjYwZDlkNl0ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJKb3NlZmluIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4ycztcXG59XFxuc3BhbltkYXRhLXYtY2I2MGQ5ZDZdOmhvdmVyIHtcXG4gIC8qZm9udC13ZWlnaHQ6IDQwMDsqL1xcbiAgdGV4dC1zaGFkb3c6IC0wLjJweCAtMC4ycHggMCB2YXIoLS1yZWQpLCAwLjJweCAtMC4ycHggMCB2YXIoLS1yZWQpLCAtMC4ycHggMC4ycHggMCB2YXIoLS1yZWQpLCAwLjJweCAwLjJweCAwIHZhcigtLXJlZCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xcbn1cXG5kaXZbZGF0YS12LWNiNjBkOWQ2XSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDY1cHg7XFxuICBwYWRkaW5nLXRvcDogNTVweDtcXG4gIHotaW5kZXg6IDk5OTk5OTk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbm5hdltkYXRhLXYtY2I2MGQ5ZDZdIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbn1cXG5uYXYgYVtkYXRhLXYtY2I2MGQ5ZDZdIHtcXG4gICAgY29sb3I6IGdyZXk7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwicFtkYXRhLXYtMmJlZmZjMWVdIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSm9zZWZpbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuLnN1bW1hcnlbZGF0YS12LTJiZWZmYzFlXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLnN1bW1hcnkgcFtkYXRhLXYtMmJlZmZjMWVdIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJKb3NlZmluIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLnN1bW1hcnkgc3BhbltkYXRhLXYtMmJlZmZjMWVdIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG4uc3VtbWFyeSA+ICpbZGF0YS12LTJiZWZmYzFlXTpmaXJzdC1jaGlsZCB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbn1cXG4uc3VtbWFyeSA+ICpbZGF0YS12LTJiZWZmYzFlXTpudGgtY2hpbGQoMikge1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcbi5zdW1tYXJ5ID4gKltkYXRhLXYtMmJlZmZjMWVdOm50aC1jaGlsZCgzKSB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG59XFxuLmRlc2NyaXB0aW9uW2RhdGEtdi0yYmVmZmMxZV0ge1xcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XFxufVxcbi5oaWRkZW5bZGF0YS12LTJiZWZmYzFlXSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xcbiAgdHJhbnNpdGlvbjogbm9uZTtcXG4gIGhlaWdodDogMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKi5tZW51LXNsaWRlLWVudGVyLCovXFxuLm1lbnUtc2xpZGUtbGVhdmUtdG9bZGF0YS12LTJlZWNhMzM0XSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbn1cXG5cXG4vKi5tZW51LXNsaWRlLWVudGVyLXRvLCovXFxuLm1lbnUtc2xpZGUtbGVhdmVbZGF0YS12LTJlZWNhMzM0XSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbn1cXG5cXG4vKi5tZW51LXNsaWRlLWVudGVyLWFjdGl2ZSwqL1xcbi5tZW51LXNsaWRlLWxlYXZlLWFjdGl2ZVtkYXRhLXYtMmVlY2EzMzRdIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcXG59XFxuLnZpZXctc2xpZGUtZW50ZXJbZGF0YS12LTJlZWNhMzM0XSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbn1cXG4udmlldy1zbGlkZS1lbnRlci10b1tkYXRhLXYtMmVlY2EzMzRdIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxufVxcbi52aWV3LXNsaWRlLWVudGVyLWFjdGl2ZVtkYXRhLXYtMmVlY2EzMzRdIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcXG59XFxuI3BvcHVwW2RhdGEtdi0yZWVjYTMzNF0ge1xcbiAgcGFkZGluZzogNTVweCA1cHggNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuI3BvcHVwID4gZGl2W2RhdGEtdi0yZWVjYTMzNF0ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDAgOCU7XFxufVxcbi5vcGVuLW1lbnVbZGF0YS12LTJlZWNhMzM0XSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDVweDtcXG4gIGxlZnQ6IDVweDtcXG59XFxuZm9vdGVyW2RhdGEtdi0yZWVjYTMzNF0ge1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDE1cHggMDtcXG59XFxuZm9vdGVyIGRpdltkYXRhLXYtMmVlY2EzMzRdIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuZm9vdGVyIHNwYW5bZGF0YS12LTJlZWNhMzM0XSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSm9zZWZpbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xcbn1cXG5mb290ZXIgaHJbZGF0YS12LTJlZWNhMzM0XSB7XFxuICAgIHdpZHRoOiA0MTJweDtcXG4gICAgbWFyZ2luOiAxNXB4IDglO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcInBbZGF0YS12LWNhNmIyYmYwXSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LWZhbWlseTogXFxcIkpvc2VmaW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcbi50b2dnbGVbZGF0YS12LWNhNmIyYmYwXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG4udG9nZ2xlIHBbZGF0YS12LWNhNmIyYmYwXSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLXJlZCk7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcXG59XFxuLmFjdGl2ZSBwW2RhdGEtdi1jYTZiMmJmMF0ge1xcbiAgY29sb3I6IHZhcigtLWdyZWVuKTtcXG59XFxuLnN1bW1hcnlbZGF0YS12LWNhNmIyYmYwXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5zdW1tYXJ5ID4gZGl2W2RhdGEtdi1jYTZiMmJmMF0ge1xcbiAgICBtYXgtd2lkdGg6IDE4MHB4O1xcbiAgICBmbGV4OiAxO1xcbn1cXG4uc3VtbWFyeSA+IGRpdltkYXRhLXYtY2E2YjJiZjBdOmZpcnN0LWNoaWxkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLnN1bW1hcnkgPiBkaXY6Zmlyc3QtY2hpbGQgc3BhbltkYXRhLXYtY2E2YjJiZjBdIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcbi5zdW1tYXJ5ID4gZGl2OmZpcnN0LWNoaWxkIHBbZGF0YS12LWNhNmIyYmYwXSB7XFxuICAgICAgd2lkdGg6IDIwMHB4O1xcbn1cXG4uc3VtbWFyeSBwW2RhdGEtdi1jYTZiMmJmMF0ge1xcbiAgICBmb250LWZhbWlseTogXFxcIkpvc2VmaW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xcbn1cXG4uc3VtbWFyeSA+IHBbZGF0YS12LWNhNmIyYmYwXSB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGFkZGluZzogM3B4IDAgMCAyNXB4O1xcbn1cXG4uc3VtbWFyeSBzcGFuW2RhdGEtdi1jYTZiMmJmMF0ge1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiBncmF5O1xcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLmRlc2NyaXB0aW9uW2RhdGEtdi1jYTZiMmJmMF0ge1xcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XFxuICBjb2xvcjogIzMyNTA1MDtcXG59XFxuLmhpZGRlbltkYXRhLXYtY2E2YjJiZjBdIHtcXG4gIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XFxuICB0cmFuc2l0aW9uOiBub25lO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5kaXZbZGF0YS12LTBjZGNkNTYzXSB7XFxuICAgIG1hcmdpbi10b3A6IC00MHB4O1xcbiAgICBmbGV4OiAxO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ2dWUtanMtdG9nZ2xlLWJ1dHRvblwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ2dWUtanMtdG9nZ2xlLWJ1dHRvblwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cbi8qIHN0eWxlcyAqL1xuX193ZWJwYWNrX3JlcXVpcmVfXyg3KVxuXG52YXIgQ29tcG9uZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KShcbiAgLyogc2NyaXB0ICovXG4gIF9fd2VicGFja19yZXF1aXJlX18oMSksXG4gIC8qIHRlbXBsYXRlICovXG4gIF9fd2VicGFja19yZXF1aXJlX18oNiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtMjVhZGM2YzBcIixcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbnZhciBERUZBVUxUX0NPTE9SX0NIRUNLRUQgPSAnIzc1Yzc5MSc7XG52YXIgREVGQVVMVF9DT0xPUl9VTkNIRUNLRUQgPSAnI2JmY2JkOSc7XG52YXIgREVGQVVMVF9MQUJFTF9DSEVDS0VEID0gJ29uJztcbnZhciBERUZBVUxUX0xBQkVMX1VOQ0hFQ0tFRCA9ICdvZmYnO1xudmFyIERFRkFVTFRfU1dJVENIX0NPTE9SID0gJyNmZmYnO1xudmFyIE1BUkdJTiA9IDM7XG5cbnZhciBjb250YWlucyA9IGZ1bmN0aW9uIGNvbnRhaW5zKG9iamVjdCwgdGl0bGUpIHtcbiAgcmV0dXJuICh0eXBlb2Ygb2JqZWN0ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvYmplY3QpKSA9PT0gJ29iamVjdCcgJiYgb2JqZWN0Lmhhc093blByb3BlcnR5KHRpdGxlKTtcbn07XG5cbnZhciBweCA9IGZ1bmN0aW9uIHB4KHYpIHtcbiAgcmV0dXJuIHYgKyAncHgnO1xufTtcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9ICh7XG4gIG5hbWU6ICdUb2dnbGVCdXR0b24nLFxuICBwcm9wczoge1xuICAgIHZhbHVlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIG5hbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgZGlzYWJsZWQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgc3luYzoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBzcGVlZDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMzAwXG4gICAgfSxcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogW1N0cmluZywgT2JqZWN0XSxcbiAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdG9yKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWx1ZSkpID09PSAnb2JqZWN0JyA/IHZhbHVlLmNoZWNrZWQgfHwgdmFsdWUudW5jaGVja2VkIHx8IHZhbHVlLmRpc2FibGVkIDogdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbiAgICAgIH1cbiAgICB9LFxuICAgIHN3aXRjaENvbG9yOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBPYmplY3RdLFxuICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0b3IodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHZhbHVlKSkgPT09ICdvYmplY3QnID8gdmFsdWUuY2hlY2tlZCB8fCB2YWx1ZS51bmNoZWNrZWQgOiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xuICAgICAgfVxuICAgIH0sXG4gICAgY3NzQ29sb3JzOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGxhYmVsczoge1xuICAgICAgdHlwZTogW0Jvb2xlYW4sIE9iamVjdF0sXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdG9yKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWx1ZSkpID09PSAnb2JqZWN0JyA/IHZhbHVlLmNoZWNrZWQgfHwgdmFsdWUudW5jaGVja2VkIDogdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbic7XG4gICAgICB9XG4gICAgfSxcbiAgICBoZWlnaHQ6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDIyXG4gICAgfSxcbiAgICB3aWR0aDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogNTBcbiAgICB9LFxuICAgIGZvbnRTaXplOiB7XG4gICAgICB0eXBlOiBOdW1iZXJcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NOYW1lOiBmdW5jdGlvbiBjbGFzc05hbWUoKSB7XG4gICAgICB2YXIgdG9nZ2xlZCA9IHRoaXMudG9nZ2xlZCxcbiAgICAgICAgICBkaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XG5cblxuICAgICAgcmV0dXJuIFsndnVlLWpzLXN3aXRjaCcsIHsgdG9nZ2xlZDogdG9nZ2xlZCwgZGlzYWJsZWQ6IGRpc2FibGVkIH1dO1xuICAgIH0sXG4gICAgY29yZVN0eWxlOiBmdW5jdGlvbiBjb3JlU3R5bGUoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogcHgodGhpcy53aWR0aCksXG4gICAgICAgIGhlaWdodDogcHgodGhpcy5oZWlnaHQpLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuY3NzQ29sb3JzID8gbnVsbCA6IHRoaXMuZGlzYWJsZWQgPyB0aGlzLmNvbG9yRGlzYWJsZWQgOiB0aGlzLmNvbG9yQ3VycmVudCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBweChNYXRoLnJvdW5kKHRoaXMuaGVpZ2h0IC8gMikpXG4gICAgICB9O1xuICAgIH0sXG4gICAgYnV0dG9uUmFkaXVzOiBmdW5jdGlvbiBidXR0b25SYWRpdXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5oZWlnaHQgLSBNQVJHSU4gKiAyO1xuICAgIH0sXG4gICAgZGlzdGFuY2U6IGZ1bmN0aW9uIGRpc3RhbmNlKCkge1xuICAgICAgcmV0dXJuIHB4KHRoaXMud2lkdGggLSB0aGlzLmhlaWdodCArIE1BUkdJTik7XG4gICAgfSxcbiAgICBidXR0b25TdHlsZTogZnVuY3Rpb24gYnV0dG9uU3R5bGUoKSB7XG4gICAgICB2YXIgdHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gJyArIHRoaXMuc3BlZWQgKyAnbXMnO1xuXG4gICAgICB2YXIgdHJhbnNmb3JtID0gdGhpcy50b2dnbGVkID8gJ3RyYW5zbGF0ZTNkKCcgKyB0aGlzLmRpc3RhbmNlICsgJywgM3B4LCAwcHgpJyA6IG51bGw7XG5cbiAgICAgIHZhciBiYWNrZ3JvdW5kID0gdGhpcy5zd2l0Y2hDb2xvciA/IHRoaXMuc3dpdGNoQ29sb3JDdXJyZW50IDogbnVsbDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IHB4KHRoaXMuYnV0dG9uUmFkaXVzKSxcbiAgICAgICAgaGVpZ2h0OiBweCh0aGlzLmJ1dHRvblJhZGl1cyksXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zaXRpb24sXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgICBiYWNrZ3JvdW5kOiBiYWNrZ3JvdW5kXG4gICAgICB9O1xuICAgIH0sXG4gICAgbGFiZWxTdHlsZTogZnVuY3Rpb24gbGFiZWxTdHlsZSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxpbmVIZWlnaHQ6IHB4KHRoaXMuaGVpZ2h0KSxcbiAgICAgICAgZm9udFNpemU6IHRoaXMuZm9udFNpemUgPyBweCh0aGlzLmZvbnRTaXplKSA6IG51bGxcbiAgICAgIH07XG4gICAgfSxcbiAgICBjb2xvckNoZWNrZWQ6IGZ1bmN0aW9uIGNvbG9yQ2hlY2tlZCgpIHtcbiAgICAgIHZhciBjb2xvciA9IHRoaXMuY29sb3I7XG5cblxuICAgICAgaWYgKCh0eXBlb2YgY29sb3IgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGNvbG9yKSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBjb2xvciB8fCBERUZBVUxUX0NPTE9SX0NIRUNLRUQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250YWlucyhjb2xvciwgJ2NoZWNrZWQnKSA/IGNvbG9yLmNoZWNrZWQgOiBERUZBVUxUX0NPTE9SX0NIRUNLRUQ7XG4gICAgfSxcbiAgICBjb2xvclVuY2hlY2tlZDogZnVuY3Rpb24gY29sb3JVbmNoZWNrZWQoKSB7XG4gICAgICB2YXIgY29sb3IgPSB0aGlzLmNvbG9yO1xuXG5cbiAgICAgIHJldHVybiBjb250YWlucyhjb2xvciwgJ3VuY2hlY2tlZCcpID8gY29sb3IudW5jaGVja2VkIDogREVGQVVMVF9DT0xPUl9VTkNIRUNLRUQ7XG4gICAgfSxcbiAgICBjb2xvckRpc2FibGVkOiBmdW5jdGlvbiBjb2xvckRpc2FibGVkKCkge1xuICAgICAgdmFyIGNvbG9yID0gdGhpcy5jb2xvcjtcblxuXG4gICAgICByZXR1cm4gY29udGFpbnMoY29sb3IsICdkaXNhYmxlZCcpID8gY29sb3IuZGlzYWJsZWQgOiB0aGlzLmNvbG9yQ3VycmVudDtcbiAgICB9LFxuICAgIGNvbG9yQ3VycmVudDogZnVuY3Rpb24gY29sb3JDdXJyZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9nZ2xlZCA/IHRoaXMuY29sb3JDaGVja2VkIDogdGhpcy5jb2xvclVuY2hlY2tlZDtcbiAgICB9LFxuICAgIGxhYmVsQ2hlY2tlZDogZnVuY3Rpb24gbGFiZWxDaGVja2VkKCkge1xuICAgICAgdmFyIGxhYmVscyA9IHRoaXMubGFiZWxzO1xuXG5cbiAgICAgIHJldHVybiBjb250YWlucyhsYWJlbHMsICdjaGVja2VkJykgPyBsYWJlbHMuY2hlY2tlZCA6IERFRkFVTFRfTEFCRUxfQ0hFQ0tFRDtcbiAgICB9LFxuICAgIGxhYmVsVW5jaGVja2VkOiBmdW5jdGlvbiBsYWJlbFVuY2hlY2tlZCgpIHtcbiAgICAgIHZhciBsYWJlbHMgPSB0aGlzLmxhYmVscztcblxuXG4gICAgICByZXR1cm4gY29udGFpbnMobGFiZWxzLCAndW5jaGVja2VkJykgPyBsYWJlbHMudW5jaGVja2VkIDogREVGQVVMVF9MQUJFTF9VTkNIRUNLRUQ7XG4gICAgfSxcbiAgICBzd2l0Y2hDb2xvckNoZWNrZWQ6IGZ1bmN0aW9uIHN3aXRjaENvbG9yQ2hlY2tlZCgpIHtcbiAgICAgIHZhciBzd2l0Y2hDb2xvciA9IHRoaXMuc3dpdGNoQ29sb3I7XG5cblxuICAgICAgcmV0dXJuIGNvbnRhaW5zKHN3aXRjaENvbG9yLCAnY2hlY2tlZCcpID8gc3dpdGNoQ29sb3IuY2hlY2tlZCA6IERFRkFVTFRfU1dJVENIX0NPTE9SO1xuICAgIH0sXG4gICAgc3dpdGNoQ29sb3JVbmNoZWNrZWQ6IGZ1bmN0aW9uIHN3aXRjaENvbG9yVW5jaGVja2VkKCkge1xuICAgICAgdmFyIHN3aXRjaENvbG9yID0gdGhpcy5zd2l0Y2hDb2xvcjtcblxuXG4gICAgICByZXR1cm4gY29udGFpbnMoc3dpdGNoQ29sb3IsICd1bmNoZWNrZWQnKSA/IHN3aXRjaENvbG9yLnVuY2hlY2tlZCA6IERFRkFVTFRfU1dJVENIX0NPTE9SO1xuICAgIH0sXG4gICAgc3dpdGNoQ29sb3JDdXJyZW50OiBmdW5jdGlvbiBzd2l0Y2hDb2xvckN1cnJlbnQoKSB7XG4gICAgICB2YXIgc3dpdGNoQ29sb3IgPSB0aGlzLnN3aXRjaENvbG9yO1xuXG5cbiAgICAgIGlmICgodHlwZW9mIHN3aXRjaENvbG9yID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihzd2l0Y2hDb2xvcikpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gc3dpdGNoQ29sb3IgfHwgREVGQVVMVF9TV0lUQ0hfQ09MT1I7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnRvZ2dsZWQgPyB0aGlzLnN3aXRjaENvbG9yQ2hlY2tlZCA6IHRoaXMuc3dpdGNoQ29sb3JVbmNoZWNrZWQ7XG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShfdmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLnN5bmMpIHtcbiAgICAgICAgdGhpcy50b2dnbGVkID0gISFfdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0b2dnbGVkOiAhIXRoaXMudmFsdWVcbiAgICB9O1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICB0b2dnbGU6IGZ1bmN0aW9uIHRvZ2dsZShldmVudCkge1xuICAgICAgdGhpcy50b2dnbGVkID0gIXRoaXMudG9nZ2xlZDtcbiAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdGhpcy50b2dnbGVkKTtcbiAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHtcbiAgICAgICAgdmFsdWU6IHRoaXMudG9nZ2xlZCxcbiAgICAgICAgc3JjRXZlbnQ6IGV2ZW50XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0pO1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19CdXR0b25fdnVlX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fQnV0dG9uX3Z1ZV9fX2RlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm4oX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19CdXR0b25fdnVlX18pO1xuLyogaGFybW9ueSByZWV4cG9ydCAoZGVmYXVsdCBmcm9tIG5vbi1oYW1vcnkpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIlRvZ2dsZUJ1dHRvblwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fQnV0dG9uX3Z1ZV9fX2RlZmF1bHQuYTsgfSk7XG5cblxudmFyIGluc3RhbGxlZCA9IGZhbHNlO1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKHtcbiAgaW5zdGFsbDogZnVuY3Rpb24gaW5zdGFsbChWdWUpIHtcbiAgICBpZiAoaW5zdGFsbGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgVnVlLmNvbXBvbmVudCgnVG9nZ2xlQnV0dG9uJywgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19CdXR0b25fdnVlX19fZGVmYXVsdC5hKTtcbiAgICBpbnN0YWxsZWQgPSB0cnVlO1xuICB9XG59KTtcblxuXG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pLCBcIi52dWUtanMtc3dpdGNoW2RhdGEtdi0yNWFkYzZjMF17ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVuO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTt1c2VyLXNlbGVjdDpub25lO2ZvbnQtc2l6ZToxMHB4O2N1cnNvcjpwb2ludGVyfS52dWUtanMtc3dpdGNoIC52LXN3aXRjaC1pbnB1dFtkYXRhLXYtMjVhZGM2YzBde29wYWNpdHk6MDtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxcHg7aGVpZ2h0OjFweH0udnVlLWpzLXN3aXRjaCAudi1zd2l0Y2gtbGFiZWxbZGF0YS12LTI1YWRjNmMwXXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtmb250LXdlaWdodDo2MDA7Y29sb3I6I2ZmZjt6LWluZGV4OjF9LnZ1ZS1qcy1zd2l0Y2ggLnYtc3dpdGNoLWxhYmVsLnYtbGVmdFtkYXRhLXYtMjVhZGM2YzBde2xlZnQ6MTBweH0udnVlLWpzLXN3aXRjaCAudi1zd2l0Y2gtbGFiZWwudi1yaWdodFtkYXRhLXYtMjVhZGM2YzBde3JpZ2h0OjEwcHh9LnZ1ZS1qcy1zd2l0Y2ggLnYtc3dpdGNoLWNvcmVbZGF0YS12LTI1YWRjNmMwXXtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveDtvdXRsaW5lOjA7bWFyZ2luOjA7dHJhbnNpdGlvbjpib3JkZXItY29sb3IgLjNzLGJhY2tncm91bmQtY29sb3IgLjNzO3VzZXItc2VsZWN0Om5vbmV9LnZ1ZS1qcy1zd2l0Y2ggLnYtc3dpdGNoLWNvcmUgLnYtc3dpdGNoLWJ1dHRvbltkYXRhLXYtMjVhZGM2YzBde2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7b3ZlcmZsb3c6aGlkZGVuO3RvcDowO2xlZnQ6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoM3B4LDNweCwwKTtib3JkZXItcmFkaXVzOjEwMCU7YmFja2dyb3VuZC1jb2xvcjojZmZmO3otaW5kZXg6Mn0udnVlLWpzLXN3aXRjaC5kaXNhYmxlZFtkYXRhLXYtMjVhZGM2YzBde3BvaW50ZXItZXZlbnRzOm5vbmU7b3BhY2l0eTouNn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8vIHRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHJhd1NjcmlwdEV4cG9ydHMsXG4gIGNvbXBpbGVkVGVtcGxhdGUsXG4gIHNjb3BlSWQsXG4gIGNzc01vZHVsZXNcbikge1xuICB2YXIgZXNNb2R1bGVcbiAgdmFyIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyB8fCB7fVxuXG4gIC8vIEVTNiBtb2R1bGVzIGludGVyb3BcbiAgdmFyIHR5cGUgPSB0eXBlb2YgcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIGlmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXNNb2R1bGUgPSByYXdTY3JpcHRFeHBvcnRzXG4gICAgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICB9XG5cbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChjb21waWxlZFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gY29tcGlsZWRUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnNcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWRcbiAgfVxuXG4gIC8vIGluamVjdCBjc3NNb2R1bGVzXG4gIGlmIChjc3NNb2R1bGVzKSB7XG4gICAgdmFyIGNvbXB1dGVkID0gT2JqZWN0LmNyZWF0ZShvcHRpb25zLmNvbXB1dGVkIHx8IG51bGwpXG4gICAgT2JqZWN0LmtleXMoY3NzTW9kdWxlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbW9kdWxlID0gY3NzTW9kdWxlc1trZXldXG4gICAgICBjb21wdXRlZFtrZXldID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbW9kdWxlIH1cbiAgICB9KVxuICAgIG9wdGlvbnMuY29tcHV0ZWQgPSBjb21wdXRlZFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlc01vZHVsZTogZXNNb2R1bGUsXG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cblxuXG4vKioqLyB9KSxcbi8qIDYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdsYWJlbCcsIHtcbiAgICBjbGFzczogX3ZtLmNsYXNzTmFtZVxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInYtc3dpdGNoLWlucHV0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImNoZWNrYm94XCIsXG4gICAgICBcIm5hbWVcIjogX3ZtLm5hbWVcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcImNoZWNrZWRcIjogX3ZtLnZhbHVlXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2VcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgcmV0dXJuIF92bS50b2dnbGUoJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidi1zd2l0Y2gtY29yZVwiLFxuICAgIHN0eWxlOiAoX3ZtLmNvcmVTdHlsZSlcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidi1zd2l0Y2gtYnV0dG9uXCIsXG4gICAgc3R5bGU6IChfdm0uYnV0dG9uU3R5bGUpXG4gIH0pXSksIF92bS5fdihcIiBcIiksIChfdm0ubGFiZWxzKSA/IFsoX3ZtLnRvZ2dsZWQpID8gX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidi1zd2l0Y2gtbGFiZWwgdi1sZWZ0XCIsXG4gICAgc3R5bGU6IChfdm0ubGFiZWxTdHlsZSlcbiAgfSwgW192bS5fdChcImNoZWNrZWRcIiwgW1xuICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5sYWJlbENoZWNrZWQpKV1cbiAgXSldLCAyKSA6IF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInYtc3dpdGNoLWxhYmVsIHYtcmlnaHRcIixcbiAgICBzdHlsZTogKF92bS5sYWJlbFN0eWxlKVxuICB9LCBbX3ZtLl90KFwidW5jaGVja2VkXCIsIFtcbiAgICBbX3ZtLl92KF92bS5fcyhfdm0ubGFiZWxVbmNoZWNrZWQpKV1cbiAgXSldLCAyKV0gOiBfdm0uX2UoKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5cbi8qKiovIH0pLFxuLyogNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmksIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpKFwiMjI4Mzg2MWZcIiwgY29udGVudCwgdHJ1ZSk7XG5cbi8qKiovIH0pLFxuLyogOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4gIE1vZGlmaWVkIGJ5IEV2YW4gWW91IEB5eXg5OTA4MDNcbiovXG5cbnZhciBoYXNEb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcblxuaWYgKHR5cGVvZiBERUJVRyAhPT0gJ3VuZGVmaW5lZCcgJiYgREVCVUcpIHtcbiAgaWYgKCFoYXNEb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAndnVlLXN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50LiAnICtcbiAgICBcIlVzZSB7IHRhcmdldDogJ25vZGUnIH0gaW4geW91ciBXZWJwYWNrIGNvbmZpZyB0byBpbmRpY2F0ZSBhIHNlcnZlci1yZW5kZXJpbmcgZW52aXJvbm1lbnQuXCJcbiAgKSB9XG59XG5cbnZhciBsaXN0VG9TdHlsZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpXG5cbi8qXG50eXBlIFN0eWxlT2JqZWN0ID0ge1xuICBpZDogbnVtYmVyO1xuICBwYXJ0czogQXJyYXk8U3R5bGVPYmplY3RQYXJ0PlxufVxuXG50eXBlIFN0eWxlT2JqZWN0UGFydCA9IHtcbiAgY3NzOiBzdHJpbmc7XG4gIG1lZGlhOiBzdHJpbmc7XG4gIHNvdXJjZU1hcDogP3N0cmluZ1xufVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0gey8qXG4gIFtpZDogbnVtYmVyXToge1xuICAgIGlkOiBudW1iZXIsXG4gICAgcmVmczogbnVtYmVyLFxuICAgIHBhcnRzOiBBcnJheTwob2JqPzogU3R5bGVPYmplY3RQYXJ0KSA9PiB2b2lkPlxuICB9XG4qL31cblxudmFyIGhlYWQgPSBoYXNEb2N1bWVudCAmJiAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdKVxudmFyIHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsXG52YXIgc2luZ2xldG9uQ291bnRlciA9IDBcbnZhciBpc1Byb2R1Y3Rpb24gPSBmYWxzZVxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fVxuXG4vLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbnZhciBpc09sZElFID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL21zaWUgWzYtOV1cXGIvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbikge1xuICBpc1Byb2R1Y3Rpb24gPSBfaXNQcm9kdWN0aW9uXG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbGlzdClcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgICBkb21TdHlsZS5yZWZzLS1cbiAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKVxuICAgIH1cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBuZXdMaXN0KVxuICAgICAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXMgPSBbXVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldXG4gICAgICBpZiAoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgZG9tU3R5bGUucGFydHNbal0oKVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcyAvKiBBcnJheTxTdHlsZU9iamVjdD4gKi8pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKytcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSlcbiAgICAgIH1cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgaWYgKGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA+IGl0ZW0ucGFydHMubGVuZ3RoKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA9IGl0ZW0ucGFydHMubGVuZ3RoXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0geyBpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50ICgpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgc3R5bGVFbGVtZW50LnR5cGUgPSAndGV4dC9jc3MnXG4gIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KVxuICByZXR1cm4gc3R5bGVFbGVtZW50XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gIHZhciB1cGRhdGUsIHJlbW92ZVxuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGVbZGF0YS12dWUtc3NyLWlkfj1cIicgKyBvYmouaWQgKyAnXCJdJylcblxuICBpZiAoc3R5bGVFbGVtZW50KSB7XG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYW5kIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAgICAgIC8vIHNpbXBseSBkbyBub3RoaW5nLlxuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYnV0IGluIGRldiBtb2RlLlxuICAgICAgLy8gZm9yIHNvbWUgcmVhc29uIENocm9tZSBjYW4ndCBoYW5kbGUgc291cmNlIG1hcCBpbiBzZXJ2ZXItcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlIHRhZ3MgLSBzb3VyY2UgbWFwcyBpbiA8c3R5bGU+IG9ubHkgd29ya3MgaWYgdGhlIHN0eWxlIHRhZyBpc1xuICAgICAgLy8gY3JlYXRlZCBhbmQgaW5zZXJ0ZWQgZHluYW1pY2FsbHkuIFNvIHdlIHJlbW92ZSB0aGUgc2VydmVyIHJlbmRlcmVkXG4gICAgICAvLyBzdHlsZXMgYW5kIGluamVjdCBuZXcgb25lcy5cbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICBpZiAoaXNPbGRJRSkge1xuICAgIC8vIHVzZSBzaW5nbGV0b24gbW9kZSBmb3IgSUU5LlxuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrXG4gICAgc3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKVxuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG11bHRpLXN0eWxlLXRhZyBtb2RlIGluIGFsbCBvdGhlciBjYXNlc1xuICAgIHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpXG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudClcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKG9iailcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuICAgICAgICAgIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG4gICAgICAgICAgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpXG4gICAgfVxuICB9XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJylcbiAgfVxufSkoKVxuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzXG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlc1xuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlRWxlbWVudCwgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzXG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcFxuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpXG4gIH1cblxuICBpZiAoc291cmNlTWFwKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG4gICAgLy8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJ1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLydcbiAgfVxuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpXG4gIH1cbn1cblxuXG4vKioqLyB9KSxcbi8qIDkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsaXN0VG9TdHlsZXMgKHBhcmVudElkLCBsaXN0KSB7XG4gIHZhciBzdHlsZXMgPSBbXVxuICB2YXIgbmV3U3R5bGVzID0ge31cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgdmFyIGlkID0gaXRlbVswXVxuICAgIHZhciBjc3MgPSBpdGVtWzFdXG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXVxuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdXG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBpZDogcGFyZW50SWQgKyAnOicgKyBpLFxuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH1cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7IGlkOiBpZCwgcGFydHM6IFtwYXJ0XSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0eWxlc1xufVxuXG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiA6Y2xhc3M9XCJ7c21hbGx9XCI+XHJcbiAgICAgICAgPHAgQGNsaWNrPVwib25DbGlja1wiIDpjbGFzcz1cInthY3RpdmV9XCI+e3t0ZXh0fX08L3A+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbmFtZTogXCJBZGVxdWFCdXR0b25cIixcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBcInRleHRcIjogU3RyaW5nLFxyXG4gICAgICAgICAgICBcImJ1dHRvbi1pZFwiOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIFwiYWN0aXZlXCI6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBCb29sZWFuLFxyXG4gICAgICAgICAgICBcInNtYWxsXCI6IEJvb2xlYW5cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgb25DbGljazogZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KFwiYnV0dG9uLWNsaWNrZWRcIiwge1wiYnV0dG9uXCI6IHRoaXMuYnV0dG9uSWR9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG4gICAgcCB7XHJcbiAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcclxuICAgICAgICB3aWR0aDogMTQwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLnNtYWxsIHtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4IWltcG9ydGFudDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4IWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJidXR0b24tZ3JvdXBcIiA6Y2xhc3M9XCJ7c21hbGx9XCI+XHJcbiAgICAgICAgPHNsb3Q+PC9zbG90PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJibG9ja1wiIDpjbGFzcz1cInsncmlnaHQtcG9zaXRpb24nOiByaWdodFBvc2l0aW9uLCByZWR9XCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbmFtZTogXCJCdXR0b25Hcm91cFwiLFxyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIFwiY3VycmVudFwiOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIFwiY2hhbmdlLWNvbG9yXCI6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIFwic21hbGxcIjogQm9vbGVhblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAgICAgcmlnaHRQb3NpdGlvbjogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnQgPT09IDI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlZDogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJpZ2h0UG9zaXRpb24gJiYgdGhpcy5jaGFuZ2VDb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbiAgICAuYnV0dG9uLWdyb3Vwe1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICA+ZGl2IHtcclxuICAgICAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNibG9jayB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDc1cHg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJpZ2h0LXBvc2l0aW9uIHtcclxuICAgICAgICAgICAgbGVmdDogMjg1cHghaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJlZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCkhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc21hbGx7XHJcbiAgICAgICAgI2Jsb2NrIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJpZ2h0LXBvc2l0aW9uIHtcclxuICAgICAgICAgICAgbGVmdDogMTM1cHghaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICA8aDI+TUVTIENIT0lYPC9oMj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8aHI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBMb3JzcXVlIHZvdXMgbmF2aWd1ZXosIGRlcyBjb29raWVzIHNvbnQgZMOpcG9zw6lzIHN1ciB2b3RyZSBuYXZpZ2F0ZXVyLlxyXG4gICAgICAgICAgICAgICAgUG91ciBjZXJ0YWlucyBkJ2VudHJlIGV1eCwgdm90cmUgY29uc2VudGVtZW50IGVzdCBuw6ljZXNzYWlyZS5cclxuICAgICAgICAgICAgICAgIENsaXF1ZXogc3VyIGNoYXF1ZSBjYXTDqWdvcmllIGRlIGNvb2tpZXMgcG91ciBhY2NlcHRlciBvdSByZWZ1c2VyIGxldXIgdXRpbGlzYXRpb24uXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICBTdXIgdG91cyBsZXMgc2l0ZXMgKHBhciBkw6lmYXV0KVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgPHJvdXRlci12aWV3IDp3ZWJzaXRlLXNldHRpbmdzPVwiZmFsc2VcIj48L3JvdXRlci12aWV3PlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGlua1wiIEBjbGljaz1cImJ1dHRvbkNsaWNrZWRcIj5TdXIgY2Ugc2l0ZTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8IS0tPG5hdj4tLT5cclxuICAgICAgICA8IS0tPHJvdXRlci1saW5rIHRvPVwiL2Nob2ljZXNcIj5QdXJwb3Nlczwvcm91dGVyLWxpbms+LS0+XHJcbiAgICAgICAgPCEtLTxyb3V0ZXItbGluayB0bz1cIi9jaG9pY2VzL3ZlbmRvcnNcIj5WZW5kb3JzPC9yb3V0ZXItbGluaz4tLT5cclxuICAgICAgICA8IS0tPC9uYXY+LS0+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgQWRlcXVhQnV0dG9uIGZyb20gXCIuL0FkZXF1YUJ1dHRvbi52dWVcIjtcclxuICAgIGltcG9ydCBCdXR0b25Hcm91cCBmcm9tIFwiLi9CdXR0b25Hcm91cC52dWVcIjtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbmFtZTogXCJDaG9pY2VzXCIsXHJcbiAgICAgICAgY29tcG9uZW50czoge0J1dHRvbkdyb3VwLCBBZGVxdWFCdXR0b259LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgYnV0dG9uQ2xpY2tlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgQWRlcXVhLkFQSS5ydW50aW1lLnNlbmRNZXNzYWdlKHt3aGF0OiBcIm9wZW5Nb2RhbFwifSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZvaWQgY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkpvc2VmaW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTQ3cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgbWFpbiB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMjIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMjBweDtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiSm9zZWZpbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcblxyXG4gICAgICAgID4gcCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTbGFiJywgc2VyaWY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxpbmsge1xyXG4gICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcclxuICAgIH1cclxuXHJcbiAgICAubGluazpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZvb3RlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwdXJwb3NlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXhwYW5kXCIgQGNsaWNrPVwidG9nZ2xlRXhwYW5kXCI+Kzwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPnt7IHB1cnBvc2UubmFtZSB9fTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPnt7IChjb29raWVzW3B1cnBvc2UuaWRdIHx8IFtdKS5sZW5ndGggfX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmtcIiBAY2xpY2s9XCJkZWxldGVQdXJwb3NlKHB1cnBvc2UuaWQpXCI+U3VwcHJpbWVyPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgdi1pZj1cImV4cGFuZGVkXCIgdi1mb3I9XCJkb21haW4gb2YgZG9tYWluc1twdXJwb3NlLmlkXVwiIGNsYXNzPVwiZG9tYWluXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cCA6c3R5bGU9XCJ7Y29sb3I6IGRvbWFpbi5hY3RpdmUgPyAncmVkJyA6ICdibGFjayd9XCIgQGNsaWNrPVwib3BlblVybChkb21haW4ud2Vic2l0ZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgOmNsYXNzPVwie3BvaW50ZXI6IGRvbWFpbi53ZWJzaXRlfVwiPnt7ZG9tYWluLmRvbWFpbn19PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+e3tkb21haW4uY291bnR9fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGlua1wiIEBjbGljaz1cImRlbGV0ZURvbWFpbihkb21haW4uZG9tYWluKVwiPlN1cHByaW1lcjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiBcIkNvb2tpZVB1cnBvc2VcIixcclxuICAgICAgICBwcm9wczogWydwdXJwb3NlJywgJ2Nvb2tpZXMnLCAnZG9tYWlucyddLFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBleHBhbmRlZDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBkZWxldGVEb21haW4oZG9tYWluKSB7XHJcbiAgICAgICAgICAgICAgICBBZGVxdWEuQVBJLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe3doYXQ6IFwiZGVsZXRlQ29va2llc0J5RG9tYWluXCIsIGRvbWFpbn0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjb29raWUtZGVsZXRlZCcpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVsZXRlUHVycG9zZShwdXJwb3NlSWQpIHtcclxuICAgICAgICAgICAgICAgIEFkZXF1YS5BUEkucnVudGltZS5zZW5kTWVzc2FnZSh7d2hhdDogXCJkZWxldGVDb29raWVzQnlQdXJwb3NlXCIsIHB1cnBvc2U6IHB1cnBvc2VJZH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjb29raWUtZGVsZXRlZCcpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9nZ2xlRXhwYW5kKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kZWQgPSAhdGhpcy5leHBhbmRlZDtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmlubmVyVGV4dCA9IHRoaXMuZXhwYW5kZWQgPyAnLScgOiAnKyc7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9wZW5VcmwodXJsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXVybCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQodXJsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuICAgIC5wdXJwb3NlIHtcclxuICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkpvc2VmaW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG5cclxuICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyOTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAgICAgPiBwOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZG9tYWluIHtcclxuICAgICAgICBtYXJnaW46IDEwcHggMCAxMHB4IDMwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBmb250LWZhbWlseTogXCJKb3NlZmluIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuXHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICB3aWR0aDogMjc1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgICAgID4gcDpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxpbmsge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiSm9zZWZpbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5leHBhbmQge1xyXG4gICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogZ3JheTtcclxuXHJcbiAgICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5wb2ludGVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgIDxoMj5NRVMgQ09PS0lFUzwvaDI+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgPGhyPlxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICA8Y29va2llLXB1cnBvc2Ugdi1mb3I9XCJwdXJwb3NlIG9mIHB1cnBvc2VzXCIgOmtleT1cInB1cnBvc2UuaWRcIiA6cHVycG9zZT1cInB1cnBvc2VcIiA6Y29va2llcz1cImNvb2tpZXNcIiA6ZG9tYWlucz1cImRvbWFpbnNcIiBAY29va2llLWRlbGV0ZWQ9XCJ1cGRhdGVDb29raWVzXCI+PC9jb29raWUtcHVycG9zZT5cclxuICAgICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgQ29va2llUHVycG9zZSBmcm9tICcuL0Nvb2tpZVB1cnBvc2UudnVlJ1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiBcIkNvb2tpZXNcIixcclxuICAgICAgICBjb21wb25lbnRzOiB7Q29va2llUHVycG9zZX0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBvbkNsaWNrKHB1cnBvc2VJZCkge1xyXG4gICAgICAgICAgICAgICAgQWRlcXVhLkFQSS5ydW50aW1lLnNlbmRNZXNzYWdlKHt3aGF0OiBcImRlbGV0ZUNvb2tpZXNCeVB1cnBvc2VcIiwgcHVycG9zZTogcHVycG9zZUlkfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvb2tpZXNbcHVycG9zZUlkXSA9IFtdO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1cGRhdGVDb29raWVzKCl7XHJcbiAgICAgICAgICAgICAgICBBZGVxdWEuQVBJLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe3doYXQ6IFwiZ2V0Q29va2llc0J5UHVycG9zZVwifSwgKGNvb2tpZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvb2tpZXMgPSBjb29raWVzO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBBZGVxdWEuQVBJLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe3doYXQ6IFwiZ2V0Q29va2llRG9tYWluc0J5UHVycG9zZVwifSwgKGRvbWFpbnMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbWFpbnMgPSBkb21haW5zO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBwdXJwb3NlczogW10sXHJcbiAgICAgICAgICAgICAgICBjb29raWVzOiB7fSxcclxuICAgICAgICAgICAgICAgIGRvbWFpbnM6IHt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgICAgIEFkZXF1YS5BUEkucnVudGltZS5zZW5kTWVzc2FnZSh7d2hhdDogXCJnZXRDb29raWVQdXJwb3Nlc1wifSwgKHB1cnBvc2VzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1cnBvc2VzID0gcHVycG9zZXM7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBBZGVxdWEuQVBJLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe3doYXQ6IFwiZ2V0Q29va2llc0J5UHVycG9zZVwifSwgKGNvb2tpZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29va2llcyA9IGNvb2tpZXM7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBBZGVxdWEuQVBJLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe3doYXQ6IFwiZ2V0Q29va2llRG9tYWluc0J5UHVycG9zZVwifSwgKGRvbWFpbnMpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9tYWlucyA9IGRvbWFpbnM7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbiAgICBkaXYge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiSm9zZWZpbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNDdweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIG1haW4ge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgLypqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsqL1xyXG4gICAgfVxyXG5cclxuICAgIC5saW5rIHtcclxuICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZm9vdGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgQmllbnTDtHQgdm91cyBwb3VycmV6IGNob2lzaXIgaWNpIHZvcyBlbnZpZXNcclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiBcIkRlc2lyZXNcIlxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgICBkaXYge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8YT5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj57e3RleHR9fTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmUgLXJpZ2h0XCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibGluZSAtdG9wXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibGluZSAtbGVmdFwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmUgLWJvdHRvbVwiPjwvc3Bhbj5cclxuICAgIDwvYT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbmFtZTogXCJIb3ZlckJ1dHRvblwiLFxyXG4gICAgICAgIHByb3BzOiBbJ3RleHQnXVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuICAgICR0aGljazogM3B4O1xyXG4gICAgJHBhZDogMC4zZW07XHJcbiAgICAkZXh0cmE6IGNhbGMoI3skcGFkfSAqIDEuNCk7XHJcbiAgICAkY29sb3I6IHZhcigtLWdyZWVuKTtcclxuXHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6ICRwYWQgJGV4dHJhO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBib3JkZXI6ICR0aGljayBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDdlbTtcclxuXHJcbiAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAvLyBwYWRkaW5nOiAwIDAuM2VtO1xyXG4gICAgICAgICAgICAvKjwhLS10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsICRwYWQsIDApOy0tPiovXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBjdWJpYy1iZXppZXIoLjIsIDAsIDAsIDEpIDAuNHM7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgYm90dG9tOiAtJHRoaWNrO1xyXG4gICAgICAgICAgICBsZWZ0OiAkZXh0cmE7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAkZXh0cmE7XHJcbiAgICAgICAgICAgIGhlaWdodDogJHRoaWNrO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3I7XHJcbiAgICAgICAgICAgIC8vIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cyBjdWJpYy1iZXppZXIoMSwgMCwgLjM3LCAxKSAwLjJzLFxyXG4gICAgICAgICAgICByaWdodCAwLjJzIGN1YmljLWJlemllciguMDQsIC40OCwgMCwgMSkgMC42cyxcclxuICAgICAgICAgICAgbGVmdCAwLjRzIGN1YmljLWJlemllciguMDQsIC40OCwgMCwgMSkgMC42cztcclxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5saW5lIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yO1xyXG5cclxuICAgICAgICAmLi1yaWdodCxcclxuICAgICAgICAmLi1sZWZ0IHtcclxuICAgICAgICAgICAgd2lkdGg6ICR0aGljaztcclxuICAgICAgICAgICAgYm90dG9tOiAtJHRoaWNrO1xyXG4gICAgICAgICAgICB0b3A6IC0kdGhpY2s7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAwLCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuLXRvcCxcclxuICAgICAgICAmLi1ib3R0b20ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICR0aGljaztcclxuICAgICAgICAgICAgbGVmdDogLSR0aGljaztcclxuICAgICAgICAgICAgcmlnaHQ6IC0kdGhpY2s7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLCAxLCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuLXJpZ2h0IHtcclxuICAgICAgICAgICAgcmlnaHQ6IC0kdGhpY2s7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGN1YmljLWJlemllcigxLCAwLCAuNjUsIDEuMDEpIDAuMjNzO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLi10b3Age1xyXG4gICAgICAgICAgICB0b3A6IC0kdGhpY2s7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjA4cyBsaW5lYXIgMC40M3M7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLi1sZWZ0IHtcclxuICAgICAgICAgICAgbGVmdDogLSR0aGljaztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMDhzIGxpbmVhciAwLjUxcztcclxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi4tYm90dG9tIHtcclxuICAgICAgICAgICAgYm90dG9tOiAtJHRoaWNrO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMSwgMCwgLjY1LCAxLjAxKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGE6aG92ZXIsXHJcbiAgICBhOmFjdGl2ZSB7XHJcblxyXG4gICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgLyp0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApOyovXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGN1YmljLWJlemllciguMiwgMCwgMCwgMSkgMC40cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMCwgMSwgMSk7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtJHRoaWNrO1xyXG4gICAgICAgICAgICBsZWZ0OiAtJHRoaWNrO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgY3ViaWMtYmV6aWVyKDEsIDAsIC42NSwgMS4wMSkgMC4xN3MsXHJcbiAgICAgICAgICAgIHJpZ2h0IDAuMnMgY3ViaWMtYmV6aWVyKDEsIDAsIC42NSwgMS4wMSksXHJcbiAgICAgICAgICAgIGxlZnQgMHMgMC4zcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5saW5lIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xyXG5cclxuICAgICAgICAgICAgJi4tcmlnaHQge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgY3ViaWMtYmV6aWVyKDEsIDAsIC42NSwgMS4wMSkgMC4ycztcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi4tdG9wIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjA4cyBsaW5lYXIgMC40cztcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLi1sZWZ0IHtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjA4cyBsaW5lYXIgMC40OHM7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuLWJvdHRvbSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMCwgLjUzLCAuMjksIDEpIDAuNTZzO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGEgdi1pZj1cInNob3dNZW51KClcIiBocmVmPVwiI1wiIEBjbGljaz1cIiRyb3V0ZXIuZ28oLTEpXCIgY2xhc3M9XCJjbG9zZS1tZW51XCI+PGltZyBzcmM9XCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlhWE52TFRnNE5Ua3RNU0kvUGcwS1BDRXRMU0JIWlc1bGNtRjBiM0k2SUVGa2IySmxJRWxzYkhWemRISmhkRzl5SURFNUxqQXVNQ3dnVTFaSElFVjRjRzl5ZENCUWJIVm5MVWx1SUM0Z1UxWkhJRlpsY25OcGIyNDZJRFl1TURBZ1FuVnBiR1FnTUNrZ0lDMHRQZzBLUEhOMlp5QjJaWEp6YVc5dVBTSXhMakVpSUdsa1BTSkRZWEJoWHpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJZzBLQ1NCMmFXVjNRbTk0UFNJd0lEQWdNekV1TVRFeUlETXhMakV4TWlJZ2MzUjViR1U5SW1WdVlXSnNaUzFpWVdOclozSnZkVzVrT201bGR5QXdJREFnTXpFdU1URXlJRE14TGpFeE1qc2lJSGh0YkRwemNHRmpaVDBpY0hKbGMyVnlkbVVpUGcwS1BIQnZiSGxuYjI0Z2NHOXBiblJ6UFNJek1TNHhNVElzTVM0ME1UUWdNamt1TmprNExEQWdNVFV1TlRVMkxERTBMakUwTWlBeExqUXhOQ3d3SURBc01TNDBNVFFnTVRRdU1UUXlMREUxTGpVMU5pQXdMREk1TGpZNU9DQXhMalF4TkN3ek1TNHhNVElnTVRVdU5UVTJMREUyTGprM0lBMEtDVEk1TGpZNU9Dd3pNUzR4TVRJZ016RXVNVEV5TERJNUxqWTVPQ0F4Tmk0NU55d3hOUzQxTlRZZ0lpOCtEUW84Wno0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOEwzTjJaejROQ2c9PVwiPjwvYT5cclxuXHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL2Nvb2tpZXNcIj48aG92ZXItYnV0dG9uIDp0ZXh0PVwiJ01FUyAnICsgbmJDb29raWVzICsgJyBDT09LSUVTJ1wiPjwvaG92ZXItYnV0dG9uPjwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgIDxyb3V0ZXItbGluayB0bz1cIi9jaG9pY2VzXCI+PGhvdmVyLWJ1dHRvbiB0ZXh0PVwiTUVTIENIT0lYXCI+PC9ob3Zlci1idXR0b24+PC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL2Rlc2lyZXNcIj48aG92ZXItYnV0dG9uIHRleHQ9XCJNRVMgRU5WSUVTXCI+PC9ob3Zlci1idXR0b24+PC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgPHNwYW4gQGNsaWNrPVwiYWRkVG9XaGl0ZWxpc3RcIiB2LWlmPVwiIXdlYnNpdGUud2hpdGVsaXN0ZWRcIj5TaWduYWxlciBldCByw6lwYXJlciB1biBzaXRlIG5vbiBmb25jdGlvbm5lbDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gdi1lbHNlIGNsYXNzPVwid2hpdGVsaXN0ZWRcIj57eyB3ZWJzaXRlLmhvc3RuYW1lIH19IGVzdCB3aGl0ZWxpc3TDqSA8c3BhbiBAY2xpY2s9XCJyZW1vdmVGcm9tV2hpdGVsaXN0XCI+KGVubGV2ZXIpPC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICA8L25hdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBIb3ZlckJ1dHRvbiBmcm9tIFwiLi9Ib3ZlckJ1dHRvbi52dWVcIjtcclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiBcIk1lbnVcIixcclxuICAgICAgICBjb21wb25lbnRzOiB7SG92ZXJCdXR0b259LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgc2hvd01lbnUoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93Lmhpc3RvcnkubGVuZ3RoID4gMTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYWRkVG9XaGl0ZWxpc3QoKXtcclxuICAgICAgICAgICAgICAgIEFkZXF1YS5BUEkucnVudGltZS5zZW5kTWVzc2FnZSh7d2hhdDogJ2FkZFRvV2hpdGVsaXN0J30sICh3ZWJzaXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWJzaXRlID0gd2Vic2l0ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVtb3ZlRnJvbVdoaXRlbGlzdCgpe1xyXG4gICAgICAgICAgICAgICAgQWRlcXVhLkFQSS5ydW50aW1lLnNlbmRNZXNzYWdlKHt3aGF0OiAncmVtb3ZlRnJvbVdoaXRlbGlzdCd9LCAod2Vic2l0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2Vic2l0ZSA9IHdlYnNpdGVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGEoKXtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHdlYnNpdGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZWxpc3RlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaG9zdG5hbWU6IFwiQ2Ugc2l0ZVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb3BzOiBbJ25iLWNvb2tpZXMnXSxcclxuICAgICAgICBjcmVhdGVkKCl7XHJcbiAgICAgICAgICAgIEFkZXF1YS5BUEkucnVudGltZS5zZW5kTWVzc2FnZSh7d2hhdDogXCJnZXRDdXJyZW50V2Vic2l0ZVwifSwgKHdlYnNpdGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHdlYnNpdGUpIHRoaXMud2Vic2l0ZSA9IHdlYnNpdGVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuICAgIC5jbG9zZS1tZW51IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLndoaXRlbGlzdGVkIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tZ3JlZW4pIWltcG9ydGFudDtcclxuICAgICAgICBjdXJzb3I6IGF1dG8haW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLndoaXRlbGlzdGVkOmhvdmVyIHtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiSm9zZWZpbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tcmVkKTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycztcclxuICAgIH1cclxuICAgIHNwYW46aG92ZXIge1xyXG4gICAgICAgIC8qZm9udC13ZWlnaHQ6IDQwMDsqL1xyXG4gICAgICAgIHRleHQtc2hhZG93OlxyXG4gICAgICAgICAgICAgICAgLTAuMnB4IC0wLjJweCAwIHZhcigtLXJlZCksXHJcbiAgICAgICAgICAgICAgICAwLjJweCAtMC4ycHggMCB2YXIoLS1yZWQpLFxyXG4gICAgICAgICAgICAgICAgLTAuMnB4IDAuMnB4IDAgdmFyKC0tcmVkKSxcclxuICAgICAgICAgICAgICAgIDAuMnB4IDAuMnB4IDAgdmFyKC0tcmVkKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xyXG4gICAgfVxyXG4gICAgZGl2IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiA2NXB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1NXB4O1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTk5OTk7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgbmF2IHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInN1bW1hcnlcIj5cclxuICAgICAgICAgICAgPHNwYW4gQGNsaWNrPVwiZXhwYW5kXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8cD57e3ZlbmRvci5uYW1lfX08L3A+XHJcbiAgICAgICAgICAgIDxidXR0b24tZ3JvdXAgOmN1cnJlbnQ9XCJhbGxvd2VkQWN0aXZlID8gMSA6IDJcIiA6Y2hhbmdlLWNvbG9yPVwidHJ1ZVwiIDpzbWFsbD1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxhZGVxdWEtYnV0dG9uIEBidXR0b24tY2xpY2tlZD1cImJ1dHRvbkNsaWNrZWRcIiA6dGV4dD1cImFsbG93ZWRUZXh0XCIgOmJ1dHRvbi1pZD1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFjdGl2ZT1cImFsbG93ZWRBY3RpdmVcIj48L2FkZXF1YS1idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YWRlcXVhLWJ1dHRvbiBAYnV0dG9uLWNsaWNrZWQ9XCJidXR0b25DbGlja2VkXCIgOnRleHQ9XCJmb3JiaWRkZW5UZXh0XCIgOmJ1dHRvbi1pZD1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFjdGl2ZT1cImZvcmJpZGRlbkFjdGl2ZVwiPjwvYWRlcXVhLWJ1dHRvbj5cclxuICAgICAgICAgICAgPC9idXR0b24tZ3JvdXA+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCIgOmNsYXNzPVwieydoaWRkZW4nOiBkZXNjcmlwdGlvbkhpZGRlbn1cIj5cclxuICAgICAgICAgICAgPHA+e3t2ZW5kb3IuZGVzY3JpcHRpb259fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBCdXR0b25Hcm91cCBmcm9tIFwiLi9CdXR0b25Hcm91cC52dWVcIjtcclxuICAgIGltcG9ydCBBZGVxdWFCdXR0b24gZnJvbSBcIi4vQWRlcXVhQnV0dG9uLnZ1ZVwiO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiBcIlBhcnRuZXJTZXR0aW5nXCIsXHJcbiAgICAgICAgY29tcG9uZW50czoge0FkZXF1YUJ1dHRvbiwgQnV0dG9uR3JvdXB9LFxyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIFwidmVuZG9yXCI6IE9iamVjdCxcclxuICAgICAgICAgICAgXCJzZXR0aW5nXCI6IE9iamVjdCxcclxuICAgICAgICAgICAgXCJ3ZWJzaXRlLWlkXCI6IFN0cmluZyxcclxuICAgICAgICAgICAgXCJpcy1kZWZhdWx0XCI6IEJvb2xlYW5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGFsbG93ZWRBY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZm9yYmlkZGVuQWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25IaWRkZW46IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U2V0dGluZzogbnVsbCxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgICBhbGxvd2VkVGV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWxsb3dlZEFjdGl2ZSA/IFwiQUNDRVBUw4lTXCIgOiBcIkFDQ0VQVEVSXCI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZvcmJpZGRlblRleHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcmJpZGRlbkFjdGl2ZSA/IFwiUkVGVVPDiVNcIiA6IFwiUkVGVVNFUlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbkNsaWNrZWQ6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTZXR0aW5nLmlkLndlYnNpdGVfaWQgPSB0aGlzLmlzRGVmYXVsdCA/IFwiYWxsXCIgOiB0aGlzLndlYnNpdGVJZDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZS5idXR0b24gPT09IDEgJiYgIXRoaXMuYWxsb3dlZEFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsb3dlZEFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JiaWRkZW5BY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTZXR0aW5nLnZhbHVlID0gLTE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUuYnV0dG9uID09PSAyICYmICF0aGlzLmZvcmJpZGRlbkFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsb3dlZEFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9yYmlkZGVuQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTZXR0aW5nLnZhbHVlID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJzZXR0aW5nQ2hhbmdlZFwiLCB0aGlzLmN1cnJlbnRTZXR0aW5nKTtcclxuICAgICAgICAgICAgICAgIEFkZXF1YS5BUEkucnVudGltZS5zZW5kTWVzc2FnZSh7d2hhdDogXCJzZXRTZXR0aW5nXCIsIHNldHRpbmc6IHRoaXMuY3VycmVudFNldHRpbmd9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXhwYW5kOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVzY3JpcHRpb25IaWRkZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5pbm5lclRleHQgPSAnLSc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbkhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5pbm5lclRleHQgPSAnKyc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbkhpZGRlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHdhdGNoOiB7XHJcbiAgICAgICAgICAgIHNldHRpbmc6IHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKHZhbHVlLCBvbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2V0dGluZyA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IHRoaXMuY3VycmVudFNldHRpbmcuaWQud2Vic2l0ZV9pZCA9PT0gJ2FsbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXJwb3NlX2lkOiBcImFsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlbmRvcl9pZDogdGhpcy52ZW5kb3IuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Vic2l0ZV9pZDogdGhpcy5pc0RlZmF1bHQgPyBcImFsbFwiIDogdGhpcy53ZWJzaXRlSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U2V0dGluZy52YWx1ZSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxvd2VkQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JiaWRkZW5BY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbG93ZWRBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JiaWRkZW5BY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZWVwOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHdlYnNpdGVJZDogZnVuY3Rpb24gKHZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5jdXJyZW50U2V0dGluZy5pZC53ZWJzaXRlX2lkID09PSBudWxsICYmIHZhbHVlICE9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNldHRpbmcuaWQud2Vic2l0ZV9pZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNldHRpbmcgPSB0aGlzLnNldHRpbmc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMudmVuZG9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cnBvc2VfaWQ6IFwiYWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlbmRvcl9pZDogdGhpcy52ZW5kb3IuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlYnNpdGVfaWQ6IHRoaXMuaXNEZWZhdWx0ID8gXCJhbGxcIiA6IHRoaXMud2Vic2l0ZUlkXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNldHRpbmcudmFsdWUgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbG93ZWRBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JiaWRkZW5BY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsb3dlZEFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JiaWRkZW5BY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJKb3NlZmluIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuXHJcbiAgICAuc3VtbWFyeSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJKb3NlZmluIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPiAqOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA+ICo6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPiAqOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlO1xyXG4gICAgfVxyXG5cclxuICAgIC5oaWRkZW4ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG5vbmU7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGlkPVwicG9wdXBcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8dHJhbnNpdGlvbiA6bmFtZT1cInRyYW5zaXRpb25cIiBjbGFzcz1cInRyYW5zaXRpb25cIiBtb2RlPVwiaW4tb3V0XCI+XHJcbiAgICAgICAgICAgICAgICA8cm91dGVyLXZpZXcgOm5iLWNvb2tpZXM9XCJjb29raWVzLmxlbmd0aFwiPjwvcm91dGVyLXZpZXc+XHJcbiAgICAgICAgICAgIDwvdHJhbnNpdGlvbj5cclxuICAgICAgICAgICAgPHJvdXRlci1saW5rIHYtaWY9XCIkcm91dGUucGF0aCAhPT0gJy8nXCIgdG89XCIvXCIgY2xhc3M9XCJvcGVuLW1lbnVcIj48aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUEvUGp3aFJFOURWRmxRUlNCemRtY2dJRkJWUWt4SlF5QW5MUzh2VnpOREx5OUVWRVFnVTFaSElERXVNUzh2UlU0bklDQW5hSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZSM0poY0docFkzTXZVMVpITHpFdU1TOUVWRVF2YzNabk1URXVaSFJrSno0OGMzWm5JR2hsYVdkb2REMGlNekp3ZUNJZ2FXUTlJa3hoZVdWeVh6RWlJSE4wZVd4bFBTSmxibUZpYkdVdFltRmphMmR5YjNWdVpEcHVaWGNnTUNBd0lETXlJRE15T3lJZ2RtVnljMmx2YmowaU1TNHhJaUIyYVdWM1FtOTRQU0l3SURBZ016SWdNeklpSUhkcFpIUm9QU0l6TW5CNElpQjRiV3c2YzNCaFkyVTlJbkJ5WlhObGNuWmxJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGh0Ykc1ek9uaHNhVzVyUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMM2hzYVc1cklqNDhjR0YwYUNCa1BTSk5OQ3d4TUdneU5HTXhMakV3TkN3d0xESXRNQzQ0T1RZc01pMHljeTB3TGpnNU5pMHlMVEl0TWtnMFF6SXVPRGsyTERZc01pdzJMamc1Tml3eUxEaFRNaTQ0T1RZc01UQXNOQ3d4TUhvZ1RUSTRMREUwU0RSakxURXVNVEEwTERBdE1pd3dMamc1TmkweUxESWdJSE13TGpnNU5pd3lMRElzTW1neU5HTXhMakV3TkN3d0xESXRNQzQ0T1RZc01pMHlVekk1TGpFd05Dd3hOQ3d5T0N3eE5Ib2dUVEk0TERJeVNEUmpMVEV1TVRBMExEQXRNaXd3TGpnNU5pMHlMREp6TUM0NE9UWXNNaXd5TERKb01qUmpNUzR4TURRc01Dd3lMVEF1T0RrMkxESXRNaUFnVXpJNUxqRXdOQ3d5TWl3eU9Dd3lNbm9pTHo0OEwzTjJaejQ9XCI+XHJcbiAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgPGhyPlxyXG4gICAgICAgICAgICA8ZGl2IEBjbGljaz1cIm9uQ2xpY2tcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL2FkZXF1YS5zdmdcIiBoZWlnaHQ9XCIyMFwiIHdpZHRoPVwiMjBcIiBhbHQ9XCJBZGVxdWEgTG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+QWRlcXVhPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiBcIlBvcHVwXCIsXHJcbiAgICAgICAgZGF0YSgpe1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJ21lbnUtc2xpZGUnLFxyXG4gICAgICAgICAgICAgICAgY29va2llczogW11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBvbkNsaWNrKCkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ291aScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHdhdGNoOiB7XHJcbiAgICAgICAgICAgICckcm91dGUnICh0bywgZnJvbSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uID0gdG8ucGF0aCA9PT0gJy8nID8gJ3ZpZXctc2xpZGUnIDogJ21lbnUtc2xpZGUnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWQoKXtcclxuICAgICAgICAgICAgQWRlcXVhLkFQSS5ydW50aW1lLnNlbmRNZXNzYWdlKHt3aGF0OiBcImdldENvb2tpZXNcIn0sIChjb29raWVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvb2tpZXMgPSBjb29raWVzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCk9PiB7XHJcbiAgICAgICAgICAgICAgICBBZGVxdWEuQVBJLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe3doYXQ6IFwiZ2V0Q29va2llc1wifSwgKGNvb2tpZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvb2tpZXMgPSBjb29raWVzO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIDIwMDApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuICAgIC8qLm1lbnUtc2xpZGUtZW50ZXIsKi9cclxuICAgIC5tZW51LXNsaWRlLWxlYXZlLXRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qLm1lbnUtc2xpZGUtZW50ZXItdG8sKi9cclxuICAgIC5tZW51LXNsaWRlLWxlYXZlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qLm1lbnUtc2xpZGUtZW50ZXItYWN0aXZlLCovXHJcbiAgICAubWVudS1zbGlkZS1sZWF2ZS1hY3RpdmUge1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcclxuICAgIH1cclxuXHJcbiAgICAudmlldy1zbGlkZS1lbnRlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgIH1cclxuXHJcbiAgICAudmlldy1zbGlkZS1lbnRlci10byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuICAgIH1cclxuXHJcbiAgICAudmlldy1zbGlkZS1lbnRlci1hY3RpdmUge1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcclxuICAgIH1cclxuXHJcbiAgICAjcG9wdXAge1xyXG4gICAgICAgIHBhZGRpbmc6IDU1cHggNXB4IDVweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCA4JTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm9wZW4tbWVudSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgIGxlZnQ6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICBmb290ZXIge1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBtYXJnaW46IDE1cHggMDtcclxuXHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJKb3NlZmluIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaHIge1xyXG4gICAgICAgICAgICB3aWR0aDogNDEycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTVweCA4JTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInN1bW1hcnlcIj5cclxuICAgICAgICAgICAgPHNwYW4gQGNsaWNrPVwiZXhwYW5kXCI+Kzwvc3Bhbj5cclxuICAgICAgICAgICAgPHA+e3twdXJwb3NlLm5hbWV9fTwvcD5cclxuICAgICAgICAgICAgPGRpdiB2LWlmPVwicHVycG9zZS5pZCA9PT0gMVwiIGNsYXNzPVwidG9nZ2xlXCIgc3R5bGU9XCJ2aXNpYmlsaXR5OiBoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgIDxwPk9CTElHQVRPSVJFPC9wPlxyXG4gICAgICAgICAgICAgICAgPHRvZ2dsZS1idXR0b24gOnZhbHVlPVwidHJ1ZVwiIGNvbG9yPVwidmFyKC0tZ3JlZW4pXCIgOnN5bmM9XCJ0cnVlXCIgOmRpc2FibGVkPVwidHJ1ZVwiPjwvdG9nZ2xlLWJ1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwidG9nZ2xlXCIgOmNsYXNzPVwie2FjdGl2ZX1cIj5cclxuICAgICAgICAgICAgICAgIDxwIEBjbGljaz1cIm9uQ2xpY2soe3ZhbHVlOiAhYWN0aXZlfSlcIj57eyB0ZXh0IH19PC9wPlxyXG4gICAgICAgICAgICAgICAgPHRvZ2dsZS1idXR0b24gOnZhbHVlPVwiYWN0aXZlXCIgOmNvbG9yPVwie2NoZWNrZWQ6J3ZhcigtLWdyZWVuKScsIHVuY2hlY2tlZDogJ3ZhcigtLXJlZCknfVwiIEBjaGFuZ2U9XCJvbkNsaWNrXCIgOnN5bmM9XCJ0cnVlXCIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIiA6Y2xhc3M9XCJ7J2hpZGRlbic6IGRlc2NyaXB0aW9uSGlkZGVufVwiPlxyXG4gICAgICAgICAgICA8cD57e3B1cnBvc2UuZGVzY3JpcHRpb259fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBCdXR0b25Hcm91cCBmcm9tIFwiLi9CdXR0b25Hcm91cC52dWVcIjtcclxuICAgIGltcG9ydCBBZGVxdWFCdXR0b24gZnJvbSBcIi4vQWRlcXVhQnV0dG9uLnZ1ZVwiO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiBcIlB1cnBvc2VTZXR0aW5nXCIsXHJcbiAgICAgICAgY29tcG9uZW50czoge0FkZXF1YUJ1dHRvbiwgQnV0dG9uR3JvdXB9LFxyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIFwicHVycG9zZVwiOiBPYmplY3QsXHJcbiAgICAgICAgICAgIFwic2V0dGluZ1wiOiBPYmplY3QsXHJcbiAgICAgICAgICAgIFwid2Vic2l0ZS1pZFwiOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIFwiaXMtZGVmYXVsdFwiOiBCb29sZWFuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25IaWRkZW46IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U2V0dGluZzogbnVsbCxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgICB0ZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmUgPyBcIkFDQ0VQVMOJU1wiIDogXCJSRUZVU8OJU1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTZXR0aW5nLmlkLndlYnNpdGVfaWQgPSB0aGlzLmlzRGVmYXVsdCA/IFwiYWxsXCIgOiB0aGlzLndlYnNpdGVJZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gZS52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTZXR0aW5nLnZhbHVlID0gLTE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNldHRpbmcudmFsdWUgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdChcInNldHRpbmdDaGFuZ2VkXCIsIHRoaXMuY3VycmVudFNldHRpbmcpO1xyXG4gICAgICAgICAgICAgICAgQWRlcXVhLkFQSS5ydW50aW1lLnNlbmRNZXNzYWdlKHt3aGF0OiBcInNldFNldHRpbmdcIiwgc2V0dGluZzogdGhpcy5jdXJyZW50U2V0dGluZ30pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBleHBhbmQ6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kZXNjcmlwdGlvbkhpZGRlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmlubmVyVGV4dCA9ICctJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uSGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmlubmVyVGV4dCA9ICcrJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uSGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2F0Y2g6IHtcclxuICAgICAgICAgICAgc2V0dGluZzoge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKHZhbHVlLCBvbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2V0dGluZyA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IHRoaXMuY3VycmVudFNldHRpbmcuaWQud2Vic2l0ZV9pZCA9PT0gJ2FsbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2V0dGluZyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVycG9zZV9pZDogdGhpcy5wdXJwb3NlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlbmRvcl9pZDogXCJhbGxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJzaXRlX2lkOiB0aGlzLmlzRGVmYXVsdCA/IFwiYWxsXCIgOiB0aGlzLndlYnNpdGVJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gdGhpcy5jdXJyZW50U2V0dGluZy52YWx1ZSA9PT0gLTE7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGVlcDogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB3ZWJzaXRlSWQ6IGZ1bmN0aW9uICh2YWx1ZSwgb2xkVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRTZXR0aW5nLmlkLndlYnNpdGVfaWQgPT09IG51bGwgJiYgdmFsdWUgIT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2V0dGluZy5pZC53ZWJzaXRlX2lkID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2V0dGluZyA9IHRoaXMuc2V0dGluZztcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wdXJwb3NlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTZXR0aW5nID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cnBvc2VfaWQ6IHRoaXMucHVycG9zZS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVuZG9yX2lkOiBcImFsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWJzaXRlX2lkOiB0aGlzLmlzRGVmYXVsdCA/IFwiYWxsXCIgOiB0aGlzLndlYnNpdGVJZFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gdGhpcy5jdXJyZW50U2V0dGluZy52YWx1ZSA9PT0gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJKb3NlZmluIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuXHJcbiAgICAudG9nZ2xlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXJlZCk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWdyZWVuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN1bW1hcnkge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPiBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiSm9zZWZpbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPiBwIHtcclxuICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggMCAwIDI1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuXHJcbiAgICAgICAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XHJcbiAgICAgICAgY29sb3I6ICMzMjUwNTA7XHJcbiAgICB9XHJcblxyXG4gICAgLmhpZGRlbiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPHB1cnBvc2Utc2V0dGluZyB2LWZvcj1cInB1cnBvc2Ugb2YgcHVycG9zZXNcIiA6a2V5PVwicHVycG9zZS5pZFwiIDpwdXJwb3NlPVwicHVycG9zZVwiIDpzZXR0aW5nPVwiZ2V0U2V0dGluZ1twdXJwb3NlLmlkXVwiIDppcy1kZWZhdWx0PVwidHJ1ZVwiIDp3ZWJzaXRlLWlkPVwid2Vic2l0ZUlkXCIgQHNldHRpbmdDaGFuZ2VkPVwidXBkYXRlU2V0dGluZ1wiPjwvcHVycG9zZS1zZXR0aW5nPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IFB1cnBvc2VTZXR0aW5nIGZyb20gXCIuL1B1cnBvc2VTZXR0aW5nLnZ1ZVwiO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG5hbWU6IFwiU2V0dGluZ3NcIixcclxuICAgICAgICBjb21wb25lbnRzOiB7UHVycG9zZVNldHRpbmd9LFxyXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB3ZWJzaXRlSWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0U2V0dGluZ3M6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczogbnVsbCxcclxuICAgICAgICAgICAgICAgIHB1cnBvc2VzOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb3BzOiBbJ3dlYnNpdGUtc2V0dGluZ3MnXSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIHVwZGF0ZVNldHRpbmcoc2V0dGluZyl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLndlYnNpdGVTZXR0aW5ncykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3Nbc2V0dGluZy5pZC5wdXJwb3NlX2lkXSA9IHNldHRpbmc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRTZXR0aW5nc1tzZXR0aW5nLmlkLnB1cnBvc2VfaWRdID0gc2V0dGluZztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICAgICAgZ2V0U2V0dGluZygpe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy53ZWJzaXRlU2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncykgcmV0dXJuIHRoaXMuc2V0dGluZ3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kZWZhdWx0U2V0dGluZ3MpIHJldHVybiB0aGlzLmRlZmF1bHRTZXR0aW5ncztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIEFkZXF1YS5BUEkucnVudGltZS5zZW5kTWVzc2FnZSh7d2hhdDogXCJnZXRXZWJzaXRlSWRcIn0sIChpZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ZWJzaXRlSWQgPSBpZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIEFkZXF1YS5BUEkucnVudGltZS5zZW5kTWVzc2FnZSh7d2hhdDogXCJnZXRQdXJwb3NlTGlzdFwifSwgKHB1cnBvc2VzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwdXJwb3NlcylcclxuICAgICAgICAgICAgICAgIHRoaXMucHVycG9zZXMgPSBwdXJwb3NlcztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIEFkZXF1YS5BUEkucnVudGltZS5zZW5kTWVzc2FnZSh7d2hhdDogXCJnZXREZWZhdWx0UHVycG9zZVNldHRpbmdzXCJ9LCAoc2V0dGluZ3MpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdFNldHRpbmdzID0gc2V0dGluZ3M7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBBZGVxdWEuQVBJLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe3doYXQ6IFwiZ2V0V2Vic2l0ZVB1cnBvc2VTZXR0aW5nc1wifSwgKHNldHRpbmdzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcblxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxwYXJ0bmVyLXNldHRpbmcgdi1mb3I9XCJ2ZW5kb3Igb2YgdmVuZG9yc1wiIDprZXk9XCJ2ZW5kb3IuaWRcIiA6dmVuZG9yPVwidmVuZG9yXCIgOnNldHRpbmc9XCJnZXRTZXR0aW5nW3ZlbmRvci5pZF1cIiA6aXMtZGVmYXVsdD1cIiF3ZWJzaXRlU2V0dGluZ3NcIiA6d2Vic2l0ZS1pZD1cIndlYnNpdGVJZFwiIEBzZXR0aW5nQ2hhbmdlZD1cInVwZGF0ZVNldHRpbmdcIj48L3BhcnRuZXItc2V0dGluZz5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBQYXJ0bmVyU2V0dGluZyBmcm9tIFwiLi9QYXJ0bmVyU2V0dGluZy52dWVcIjtcclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiBcIlZlbmRvclNldHRpbmdzXCIsXHJcbiAgICAgICAgY29tcG9uZW50czoge1BhcnRuZXJTZXR0aW5nfSxcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgd2Vic2l0ZUlkOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFNldHRpbmdzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB2ZW5kb3JzOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb3BzOiBbJ3dlYnNpdGUtc2V0dGluZ3MnXSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIHVwZGF0ZVNldHRpbmcoc2V0dGluZyl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLndlYnNpdGVTZXR0aW5ncykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3Nbc2V0dGluZy5pZC52ZW5kb3JfaWRdID0gc2V0dGluZztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdFNldHRpbmdzW3NldHRpbmcuaWQudmVuZG9yX2lkXSA9IHNldHRpbmc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgICAgIGdldFNldHRpbmcoKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMud2Vic2l0ZVNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MpIHJldHVybiB0aGlzLnNldHRpbmdzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFNldHRpbmdzKSByZXR1cm4gdGhpcy5kZWZhdWx0U2V0dGluZ3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBBZGVxdWEuQVBJLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe3doYXQ6IFwiZ2V0V2Vic2l0ZUlkXCJ9LCAoaWQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2Vic2l0ZUlkID0gaWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBBZGVxdWEuQVBJLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe3doYXQ6IFwiZ2V0VmVuZG9yTGlzdFwifSwgKHZlbmRvcnMpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmVuZG9ycyA9IHZlbmRvcnM7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBBZGVxdWEuQVBJLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe3doYXQ6IFwiZ2V0RGVmYXVsdFZlbmRvclNldHRpbmdzXCJ9LCAoc2V0dGluZ3MpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNldHRpbmdzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0U2V0dGluZ3MgPSBzZXR0aW5ncztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIEFkZXF1YS5BUEkucnVudGltZS5zZW5kTWVzc2FnZSh7d2hhdDogXCJnZXRXZWJzaXRlVmVuZG9yU2V0dGluZ3NcIn0sIChzZXR0aW5ncykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG5cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IGNsYXNzOiB7IHNtYWxsOiBfdm0uc21hbGwgfSB9LCBbXG4gICAgX2MoXCJwXCIsIHsgY2xhc3M6IHsgYWN0aXZlOiBfdm0uYWN0aXZlIH0sIG9uOiB7IGNsaWNrOiBfdm0ub25DbGljayB9IH0sIFtcbiAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnRleHQpKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiYnV0dG9uLWdyb3VwXCIsIGNsYXNzOiB7IHNtYWxsOiBfdm0uc21hbGwgfSB9LFxuICAgIFtcbiAgICAgIF92bS5fdChcImRlZmF1bHRcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICBjbGFzczogeyBcInJpZ2h0LXBvc2l0aW9uXCI6IF92bS5yaWdodFBvc2l0aW9uLCByZWQ6IF92bS5yZWQgfSxcbiAgICAgICAgYXR0cnM6IHsgaWQ6IFwiYmxvY2tcIiB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJoclwiKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgIF92bS5fdihcbiAgICAgICAgICBcIlxcbiAgICAgICAgICAgIExvcnNxdWUgdm91cyBuYXZpZ3VleiwgZGVzIGNvb2tpZXMgc29udCBkw6lwb3PDqXMgc3VyIHZvdHJlIG5hdmlnYXRldXIuXFxuICAgICAgICAgICAgUG91ciBjZXJ0YWlucyBkJ2VudHJlIGV1eCwgdm90cmUgY29uc2VudGVtZW50IGVzdCBuw6ljZXNzYWlyZS5cXG4gICAgICAgICAgICBDbGlxdWV6IHN1ciBjaGFxdWUgY2F0w6lnb3JpZSBkZSBjb29raWVzIHBvdXIgYWNjZXB0ZXIgb3UgcmVmdXNlciBsZXVyIHV0aWxpc2F0aW9uLlxcbiAgICAgICAgXCJcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgU3VyIHRvdXMgbGVzIHNpdGVzIChwYXIgZMOpZmF1dClcXG4gICAgICAgIFwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwibWFpblwiLFxuICAgICAgICBbX2MoXCJyb3V0ZXItdmlld1wiLCB7IGF0dHJzOiB7IFwid2Vic2l0ZS1zZXR0aW5nc1wiOiBmYWxzZSB9IH0pXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsaW5rXCIsIG9uOiB7IGNsaWNrOiBfdm0uYnV0dG9uQ2xpY2tlZCB9IH0sIFtcbiAgICAgICAgX3ZtLl92KFwiU3VyIGNlIHNpdGVcIilcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiaGVhZGVyXCIsIFtfYyhcImgyXCIsIFtfdm0uX3YoXCJNRVMgQ0hPSVhcIildKV0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHVycG9zZVwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXhwYW5kXCIsIG9uOiB7IGNsaWNrOiBfdm0udG9nZ2xlRXhwYW5kIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcIitcIilcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihfdm0uX3MoX3ZtLnB1cnBvc2UubmFtZSkpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihfdm0uX3MoKF92bS5jb29raWVzW192bS5wdXJwb3NlLmlkXSB8fCBbXSkubGVuZ3RoKSldKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlua1wiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5kZWxldGVQdXJwb3NlKF92bS5wdXJwb3NlLmlkKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiU3VwcHJpbWVyXCIpXVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX2woX3ZtLmRvbWFpbnNbX3ZtLnB1cnBvc2UuaWRdLCBmdW5jdGlvbihkb21haW4pIHtcbiAgICAgICAgcmV0dXJuIF92bS5leHBhbmRlZFxuICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkb21haW5cIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBwb2ludGVyOiBkb21haW4ud2Vic2l0ZSB9LFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogZG9tYWluLmFjdGl2ZSA/IFwicmVkXCIgOiBcImJsYWNrXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3BlblVybChkb21haW4ud2Vic2l0ZSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhkb21haW4uZG9tYWluKSldXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhkb21haW4uY291bnQpKV0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaW5rXCIsXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZURvbWFpbihkb21haW4uZG9tYWluKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU3VwcHJpbWVyXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIH0pXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfdm0uX20oMCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImhyXCIpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcIm1haW5cIixcbiAgICAgIF92bS5fbChfdm0ucHVycG9zZXMsIGZ1bmN0aW9uKHB1cnBvc2UpIHtcbiAgICAgICAgcmV0dXJuIF9jKFwiY29va2llLXB1cnBvc2VcIiwge1xuICAgICAgICAgIGtleTogcHVycG9zZS5pZCxcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgcHVycG9zZTogcHVycG9zZSxcbiAgICAgICAgICAgIGNvb2tpZXM6IF92bS5jb29raWVzLFxuICAgICAgICAgICAgZG9tYWluczogX3ZtLmRvbWFpbnNcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7IFwiY29va2llLWRlbGV0ZWRcIjogX3ZtLnVwZGF0ZUNvb2tpZXMgfVxuICAgICAgICB9KVxuICAgICAgfSksXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJoZWFkZXJcIiwgW19jKFwiaDJcIiwgW192bS5fdihcIk1FUyBDT09LSUVTXCIpXSldKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF92bS5fdihcIlxcbiAgICBCaWVudMO0dCB2b3VzIHBvdXJyZXogY2hvaXNpciBpY2kgdm9zIGVudmllc1xcblwiKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJhXCIsIFtcbiAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihfdm0uX3MoX3ZtLnRleHQpKV0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGluZSAtcmlnaHRcIiB9KSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxpbmUgLXRvcFwiIH0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGluZSAtbGVmdFwiIH0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGluZSAtYm90dG9tXCIgfSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfdm0uc2hvd01lbnUoKVxuICAgICAgPyBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjbG9zZS1tZW51XCIsXG4gICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS4kcm91dGVyLmdvKC0xKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlhWE52TFRnNE5Ua3RNU0kvUGcwS1BDRXRMU0JIWlc1bGNtRjBiM0k2SUVGa2IySmxJRWxzYkhWemRISmhkRzl5SURFNUxqQXVNQ3dnVTFaSElFVjRjRzl5ZENCUWJIVm5MVWx1SUM0Z1UxWkhJRlpsY25OcGIyNDZJRFl1TURBZ1FuVnBiR1FnTUNrZ0lDMHRQZzBLUEhOMlp5QjJaWEp6YVc5dVBTSXhMakVpSUdsa1BTSkRZWEJoWHpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJZzBLQ1NCMmFXVjNRbTk0UFNJd0lEQWdNekV1TVRFeUlETXhMakV4TWlJZ2MzUjViR1U5SW1WdVlXSnNaUzFpWVdOclozSnZkVzVrT201bGR5QXdJREFnTXpFdU1URXlJRE14TGpFeE1qc2lJSGh0YkRwemNHRmpaVDBpY0hKbGMyVnlkbVVpUGcwS1BIQnZiSGxuYjI0Z2NHOXBiblJ6UFNJek1TNHhNVElzTVM0ME1UUWdNamt1TmprNExEQWdNVFV1TlRVMkxERTBMakUwTWlBeExqUXhOQ3d3SURBc01TNDBNVFFnTVRRdU1UUXlMREUxTGpVMU5pQXdMREk1TGpZNU9DQXhMalF4TkN3ek1TNHhNVElnTVRVdU5UVTJMREUyTGprM0lBMEtDVEk1TGpZNU9Dd3pNUzR4TVRJZ016RXVNVEV5TERJNUxqWTVPQ0F4Tmk0NU55d3hOUzQxTlRZZ0lpOCtEUW84Wno0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOEwzTjJaejROQ2c9PVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICA6IF92bS5fZSgpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcIm5hdlwiLFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgeyBhdHRyczogeyB0bzogXCIvY29va2llc1wiIH0gfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImhvdmVyLWJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiTUVTIFwiICsgX3ZtLm5iQ29va2llcyArIFwiIENPT0tJRVNcIiB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgeyBhdHRyczogeyB0bzogXCIvY2hvaWNlc1wiIH0gfSxcbiAgICAgICAgICBbX2MoXCJob3Zlci1idXR0b25cIiwgeyBhdHRyczogeyB0ZXh0OiBcIk1FUyBDSE9JWFwiIH0gfSldLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgIHsgYXR0cnM6IHsgdG86IFwiL2Rlc2lyZXNcIiB9IH0sXG4gICAgICAgICAgW19jKFwiaG92ZXItYnV0dG9uXCIsIHsgYXR0cnM6IHsgdGV4dDogXCJNRVMgRU5WSUVTXCIgfSB9KV0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAhX3ZtLndlYnNpdGUud2hpdGVsaXN0ZWRcbiAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IG9uOiB7IGNsaWNrOiBfdm0uYWRkVG9XaGl0ZWxpc3QgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIlNpZ25hbGVyIGV0IHLDqXBhcmVyIHVuIHNpdGUgbm9uIGZvbmN0aW9ubmVsXCIpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwid2hpdGVsaXN0ZWRcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLndlYnNpdGUuaG9zdG5hbWUpICsgXCIgZXN0IHdoaXRlbGlzdMOpIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgb246IHsgY2xpY2s6IF92bS5yZW1vdmVGcm9tV2hpdGVsaXN0IH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIihlbmxldmVyKVwiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwic3VtbWFyeVwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwic3BhblwiLCB7IG9uOiB7IGNsaWNrOiBfdm0uZXhwYW5kIH0gfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhfdm0udmVuZG9yLm5hbWUpKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImJ1dHRvbi1ncm91cFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGN1cnJlbnQ6IF92bS5hbGxvd2VkQWN0aXZlID8gMSA6IDIsXG4gICAgICAgICAgICAgIFwiY2hhbmdlLWNvbG9yXCI6IHRydWUsXG4gICAgICAgICAgICAgIHNtYWxsOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImFkZXF1YS1idXR0b25cIiwge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHRleHQ6IF92bS5hbGxvd2VkVGV4dCxcbiAgICAgICAgICAgICAgICBcImJ1dHRvbi1pZFwiOiAxLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogX3ZtLmFsbG93ZWRBY3RpdmVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHsgXCJidXR0b24tY2xpY2tlZFwiOiBfdm0uYnV0dG9uQ2xpY2tlZCB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImFkZXF1YS1idXR0b25cIiwge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHRleHQ6IF92bS5mb3JiaWRkZW5UZXh0LFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uLWlkXCI6IDIsXG4gICAgICAgICAgICAgICAgYWN0aXZlOiBfdm0uZm9yYmlkZGVuQWN0aXZlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7IFwiYnV0dG9uLWNsaWNrZWRcIjogX3ZtLmJ1dHRvbkNsaWNrZWQgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvblwiLCBjbGFzczogeyBoaWRkZW46IF92bS5kZXNjcmlwdGlvbkhpZGRlbiB9IH0sXG4gICAgICBbX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS52ZW5kb3IuZGVzY3JpcHRpb24pKV0pXVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgaWQ6IFwicG9wdXBcIiB9IH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidHJhbnNpdGlvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRyYW5zaXRpb25cIixcbiAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IF92bS50cmFuc2l0aW9uLCBtb2RlOiBcImluLW91dFwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfYyhcInJvdXRlci12aWV3XCIsIHsgYXR0cnM6IHsgXCJuYi1jb29raWVzXCI6IF92bS5jb29raWVzLmxlbmd0aCB9IH0pXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS4kcm91dGUucGF0aCAhPT0gXCIvXCJcbiAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwib3Blbi1tZW51XCIsIGF0dHJzOiB7IHRvOiBcIi9cIiB9IH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQS9QandoUkU5RFZGbFFSU0J6ZG1jZ0lGQlZRa3hKUXlBbkxTOHZWek5ETHk5RVZFUWdVMVpISURFdU1TOHZSVTRuSUNBbmFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdlIzSmhjR2hwWTNNdlUxWkhMekV1TVM5RVZFUXZjM1puTVRFdVpIUmtKejQ4YzNabklHaGxhV2RvZEQwaU16SndlQ0lnYVdROUlreGhlV1Z5WHpFaUlITjBlV3hsUFNKbGJtRmliR1V0WW1GamEyZHliM1Z1WkRwdVpYY2dNQ0F3SURNeUlETXlPeUlnZG1WeWMybHZiajBpTVM0eElpQjJhV1YzUW05NFBTSXdJREFnTXpJZ016SWlJSGRwWkhSb1BTSXpNbkI0SWlCNGJXdzZjM0JoWTJVOUluQnlaWE5sY25abElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWo0OGNHRjBhQ0JrUFNKTk5Dd3hNR2d5TkdNeExqRXdOQ3d3TERJdE1DNDRPVFlzTWkweWN5MHdMamc1TmkweUxUSXRNa2cwUXpJdU9EazJMRFlzTWl3MkxqZzVOaXd5TERoVE1pNDRPVFlzTVRBc05Dd3hNSG9nVFRJNExERTBTRFJqTFRFdU1UQTBMREF0TWl3d0xqZzVOaTB5TERJZ0lITXdMamc1Tml3eUxESXNNbWd5TkdNeExqRXdOQ3d3TERJdE1DNDRPVFlzTWkweVV6STVMakV3TkN3eE5Dd3lPQ3d4TkhvZ1RUSTRMREl5U0RSakxURXVNVEEwTERBdE1pd3dMamc1TmkweUxESnpNQzQ0T1RZc01pd3lMREpvTWpSak1TNHhNRFFzTUN3eUxUQXVPRGsyTERJdE1pQWdVekk1TGpFd05Dd3lNaXd5T0N3eU1ub2lMejQ4TDNOMlp6ND1cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImZvb3RlclwiLCBbXG4gICAgICBfYyhcImhyXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgb246IHsgY2xpY2s6IF92bS5vbkNsaWNrIH0gfSwgW1xuICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHNyYzogXCJpbWcvYWRlcXVhLnN2Z1wiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjIwXCIsXG4gICAgICAgICAgICB3aWR0aDogXCIyMFwiLFxuICAgICAgICAgICAgYWx0OiBcIkFkZXF1YSBMb2dvXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIkFkZXF1YVwiKV0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzdW1tYXJ5XCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgb246IHsgY2xpY2s6IF92bS5leHBhbmQgfSB9LCBbX3ZtLl92KFwiK1wiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhfdm0ucHVycG9zZS5uYW1lKSldKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ucHVycG9zZS5pZCA9PT0gMVxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidG9nZ2xlXCIsIHN0YXRpY1N0eWxlOiB7IHZpc2liaWxpdHk6IFwiaGlkZGVuXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIk9CTElHQVRPSVJFXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidG9nZ2xlLWJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwidmFyKC0tZ3JlZW4pXCIsXG4gICAgICAgICAgICAgICAgICBzeW5jOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRvZ2dsZVwiLCBjbGFzczogeyBhY3RpdmU6IF92bS5hY3RpdmUgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLm9uQ2xpY2soeyB2YWx1ZTogIV92bS5hY3RpdmUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnRleHQpKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0b2dnbGUtYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5hY3RpdmUsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogeyBjaGVja2VkOiBcInZhcigtLWdyZWVuKVwiLCB1bmNoZWNrZWQ6IFwidmFyKC0tcmVkKVwiIH0sXG4gICAgICAgICAgICAgICAgICBzeW5jOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5vbkNsaWNrIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJkZXNjcmlwdGlvblwiLCBjbGFzczogeyBoaWRkZW46IF92bS5kZXNjcmlwdGlvbkhpZGRlbiB9IH0sXG4gICAgICBbX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5wdXJwb3NlLmRlc2NyaXB0aW9uKSldKV1cbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIF92bS5fbChfdm0ucHVycG9zZXMsIGZ1bmN0aW9uKHB1cnBvc2UpIHtcbiAgICAgIHJldHVybiBfYyhcInB1cnBvc2Utc2V0dGluZ1wiLCB7XG4gICAgICAgIGtleTogcHVycG9zZS5pZCxcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBwdXJwb3NlOiBwdXJwb3NlLFxuICAgICAgICAgIHNldHRpbmc6IF92bS5nZXRTZXR0aW5nW3B1cnBvc2UuaWRdLFxuICAgICAgICAgIFwiaXMtZGVmYXVsdFwiOiB0cnVlLFxuICAgICAgICAgIFwid2Vic2l0ZS1pZFwiOiBfdm0ud2Vic2l0ZUlkXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7IHNldHRpbmdDaGFuZ2VkOiBfdm0udXBkYXRlU2V0dGluZyB9XG4gICAgICB9KVxuICAgIH0pLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBfdm0uX2woX3ZtLnZlbmRvcnMsIGZ1bmN0aW9uKHZlbmRvcikge1xuICAgICAgcmV0dXJuIF9jKFwicGFydG5lci1zZXR0aW5nXCIsIHtcbiAgICAgICAga2V5OiB2ZW5kb3IuaWQsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdmVuZG9yOiB2ZW5kb3IsXG4gICAgICAgICAgc2V0dGluZzogX3ZtLmdldFNldHRpbmdbdmVuZG9yLmlkXSxcbiAgICAgICAgICBcImlzLWRlZmF1bHRcIjogIV92bS53ZWJzaXRlU2V0dGluZ3MsXG4gICAgICAgICAgXCJ3ZWJzaXRlLWlkXCI6IF92bS53ZWJzaXRlSWRcbiAgICAgICAgfSxcbiAgICAgICAgb246IHsgc2V0dGluZ0NoYW5nZWQ6IF92bS51cGRhdGVTZXR0aW5nIH1cbiAgICAgIH0pXG4gICAgfSksXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGVxdWFCdXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGMzMTJlYTMmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI0YWNmZjdmY1wiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRlcXVhQnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBjMzEyZWEzJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRlcXVhQnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBjMzEyZWEzJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CdXR0b25Hcm91cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yZDgyMjIyNyZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjQ3NTQxZDFlXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CdXR0b25Hcm91cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yZDgyMjIyNyZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0J1dHRvbkdyb3VwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJkODIyMjI3JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DaG9pY2VzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJiNzU3ZGE4JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiZDM1NjNkMGNcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Nob2ljZXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmI3NTdkYTgmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DaG9pY2VzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJiNzU3ZGE4JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db29raWVQdXJwb3NlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVjNzE2NmQ0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiYjQ3MTdkMzhcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Nvb2tpZVB1cnBvc2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWM3MTY2ZDQmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db29raWVQdXJwb3NlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVjNzE2NmQ0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db29raWVzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWI1MjFkMzZlJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNjkwM2UzNzZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Nvb2tpZXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YjUyMWQzNmUmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db29raWVzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWI1MjFkMzZlJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib3ZlckJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jOTU3Y2E3MCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjA1ZDE4OTU1XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib3ZlckJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jOTU3Y2E3MCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvdmVyQnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWM5NTdjYTcwJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWNiNjBkOWQ2JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNDVlNDE1ZThcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lbnUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Y2I2MGQ5ZDYmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWNiNjBkOWQ2JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYXJ0bmVyU2V0dGluZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yYmVmZmMxZSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjU1MjhmYjY0XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYXJ0bmVyU2V0dGluZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yYmVmZmMxZSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhcnRuZXJTZXR0aW5nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJiZWZmYzFlJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3B1cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yZWVjYTMzNCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjc4NzIyNWM4XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3B1cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yZWVjYTMzNCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BvcHVwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJlZWNhMzM0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QdXJwb3NlU2V0dGluZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jYTZiMmJmMCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjk2MTBhNTIwXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QdXJwb3NlU2V0dGluZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jYTZiMmJmMCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1B1cnBvc2VTZXR0aW5nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWNhNmIyYmYwJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03OWJmYjhkOSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImFiODRlNGM2XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03OWJmYjhkOSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc5YmZiOGQ5JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WZW5kb3JTZXR0aW5ncy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NGYyNTdjMSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjVkNDkzNWU4XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WZW5kb3JTZXR0aW5ncy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NGYyNTdjMSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ZlbmRvclNldHRpbmdzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ0ZjI1N2MxJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EZXNpcmVzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBjZGNkNTYzJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIyYTVlZmY3OFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGVzaXJlcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wY2RjZDU2MyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGVzaXJlcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wY2RjZDU2MyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiAgTW9kaWZpZWQgYnkgRXZhbiBZb3UgQHl5eDk5MDgwM1xuKi9cblxuaW1wb3J0IGxpc3RUb1N0eWxlcyBmcm9tICcuL2xpc3RUb1N0eWxlcydcblxudmFyIGhhc0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG5pZiAodHlwZW9mIERFQlVHICE9PSAndW5kZWZpbmVkJyAmJiBERUJVRykge1xuICBpZiAoIWhhc0RvY3VtZW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuICcgK1xuICAgIFwiVXNlIHsgdGFyZ2V0OiAnbm9kZScgfSBpbiB5b3VyIFdlYnBhY2sgY29uZmlnIHRvIGluZGljYXRlIGEgc2VydmVyLXJlbmRlcmluZyBlbnZpcm9ubWVudC5cIlxuICApIH1cbn1cblxuLypcbnR5cGUgU3R5bGVPYmplY3QgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHBhcnRzOiBBcnJheTxTdHlsZU9iamVjdFBhcnQ+XG59XG5cbnR5cGUgU3R5bGVPYmplY3RQYXJ0ID0ge1xuICBjc3M6IHN0cmluZztcbiAgbWVkaWE6IHN0cmluZztcbiAgc291cmNlTWFwOiA/c3RyaW5nXG59XG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7LypcbiAgW2lkOiBudW1iZXJdOiB7XG4gICAgaWQ6IG51bWJlcixcbiAgICByZWZzOiBudW1iZXIsXG4gICAgcGFydHM6IEFycmF5PChvYmo/OiBTdHlsZU9iamVjdFBhcnQpID0+IHZvaWQ+XG4gIH1cbiovfVxuXG52YXIgaGVhZCA9IGhhc0RvY3VtZW50ICYmIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0pXG52YXIgc2luZ2xldG9uRWxlbWVudCA9IG51bGxcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMFxudmFyIGlzUHJvZHVjdGlvbiA9IGZhbHNlXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9XG52YXIgb3B0aW9ucyA9IG51bGxcbnZhciBzc3JJZEtleSA9ICdkYXRhLXZ1ZS1zc3ItaWQnXG5cbi8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxudmFyIGlzT2xkSUUgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFN0eWxlc0NsaWVudCAocGFyZW50SWQsIGxpc3QsIF9pc1Byb2R1Y3Rpb24sIF9vcHRpb25zKSB7XG4gIGlzUHJvZHVjdGlvbiA9IF9pc1Byb2R1Y3Rpb25cblxuICBvcHRpb25zID0gX29wdGlvbnMgfHwge31cblxuICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICAgIGRvbVN0eWxlLnJlZnMtLVxuICAgICAgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpXG4gICAgfVxuICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIG5ld0xpc3QpXG4gICAgICBhZGRTdHlsZXNUb0RvbShzdHlsZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlcyA9IFtdXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV1cbiAgICAgIGlmIChkb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXSgpXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzIC8qIEFycmF5PFN0eWxlT2JqZWN0PiAqLykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF1cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrK1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKVxuICAgICAgfVxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBpZiAoZG9tU3R5bGUucGFydHMubGVuZ3RoID4gaXRlbS5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMubGVuZ3RoID0gaXRlbS5wYXJ0cy5sZW5ndGhcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHBhcnRzID0gW11cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7IGlkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHMgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKCkge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZUVsZW1lbnQudHlwZSA9ICd0ZXh0L2NzcydcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpXG4gIHJldHVybiBzdHlsZUVsZW1lbnRcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgdmFyIHVwZGF0ZSwgcmVtb3ZlXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZVsnICsgc3NySWRLZXkgKyAnfj1cIicgKyBvYmouaWQgKyAnXCJdJylcblxuICBpZiAoc3R5bGVFbGVtZW50KSB7XG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYW5kIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAgICAgIC8vIHNpbXBseSBkbyBub3RoaW5nLlxuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaGFzIFNTUiBzdHlsZXMgYnV0IGluIGRldiBtb2RlLlxuICAgICAgLy8gZm9yIHNvbWUgcmVhc29uIENocm9tZSBjYW4ndCBoYW5kbGUgc291cmNlIG1hcCBpbiBzZXJ2ZXItcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlIHRhZ3MgLSBzb3VyY2UgbWFwcyBpbiA8c3R5bGU+IG9ubHkgd29ya3MgaWYgdGhlIHN0eWxlIHRhZyBpc1xuICAgICAgLy8gY3JlYXRlZCBhbmQgaW5zZXJ0ZWQgZHluYW1pY2FsbHkuIFNvIHdlIHJlbW92ZSB0aGUgc2VydmVyIHJlbmRlcmVkXG4gICAgICAvLyBzdHlsZXMgYW5kIGluamVjdCBuZXcgb25lcy5cbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICBpZiAoaXNPbGRJRSkge1xuICAgIC8vIHVzZSBzaW5nbGV0b24gbW9kZSBmb3IgSUU5LlxuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrXG4gICAgc3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKVxuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpXG4gIH0gZWxzZSB7XG4gICAgLy8gdXNlIG11bHRpLXN0eWxlLXRhZyBtb2RlIGluIGFsbCBvdGhlciBjYXNlc1xuICAgIHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpXG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudClcbiAgICByZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKG9iailcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaiAvKiBTdHlsZU9iamVjdFBhcnQgKi8pIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuICAgICAgICAgIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG4gICAgICAgICAgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpXG4gICAgfVxuICB9XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJylcbiAgfVxufSkoKVxuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzXG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlc1xuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlRWxlbWVudCwgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzXG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcFxuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpXG4gIH1cbiAgaWYgKG9wdGlvbnMuc3NySWQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKHNzcklkS2V5LCBvYmouaWQpXG4gIH1cblxuICBpZiAoc291cmNlTWFwKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG4gICAgLy8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJ1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLydcbiAgfVxuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpXG4gIH1cbn1cbiIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGlkOiBwYXJlbnRJZCArICc6JyArIGksXG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FkZXF1YUJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGMzMTJlYTMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQWRlcXVhQnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQWRlcXVhQnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BZGVxdWFCdXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGMzMTJlYTMmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwYzMxMmVhM1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXEp1bGllblxcXFxEb2N1bWVudHNcXFxcSnNcXFxcYWRlcXVhLXYxXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwYzMxMmVhMycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwYzMxMmVhMycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQWRlcXVhQnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYzMxMmVhMyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwYzMxMmVhMycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL0FkZXF1YUJ1dHRvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRlcXVhQnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZXF1YUJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FkZXF1YUJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wYzMxMmVhMyZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRlcXVhQnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBjMzEyZWEzJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZGVxdWFCdXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBjMzEyZWEzJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9CdXR0b25Hcm91cC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmQ4MjIyMjcmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQnV0dG9uR3JvdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9CdXR0b25Hcm91cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQnV0dG9uR3JvdXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmQ4MjIyMjcmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyZDgyMjIyN1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXEp1bGllblxcXFxEb2N1bWVudHNcXFxcSnNcXFxcYWRlcXVhLXYxXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyZDgyMjIyNycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyZDgyMjIyNycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQnV0dG9uR3JvdXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJkODIyMjI3JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJkODIyMjI3Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvQnV0dG9uR3JvdXAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0J1dHRvbkdyb3VwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0J1dHRvbkdyb3VwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQnV0dG9uR3JvdXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmQ4MjIyMjcmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0J1dHRvbkdyb3VwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJkODIyMjI3JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CdXR0b25Hcm91cC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmQ4MjIyMjcmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Nob2ljZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiNzU3ZGE4JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Nob2ljZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9DaG9pY2VzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9DaG9pY2VzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJiNzU3ZGE4JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMmI3NTdkYThcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxKdWxpZW5cXFxcRG9jdW1lbnRzXFxcXEpzXFxcXGFkZXF1YS12MVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMmI3NTdkYTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMmI3NTdkYTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Nob2ljZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiNzU3ZGE4JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJiNzU3ZGE4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvQ2hvaWNlcy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2hvaWNlcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DaG9pY2VzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2hvaWNlcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yYjc1N2RhOCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2hvaWNlcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yYjc1N2RhOCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2hvaWNlcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmI3NTdkYTgmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Nvb2tpZVB1cnBvc2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVjNzE2NmQ0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Nvb2tpZVB1cnBvc2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Db29raWVQdXJwb3NlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Db29raWVQdXJwb3NlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVjNzE2NmQ0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNWM3MTY2ZDRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxKdWxpZW5cXFxcRG9jdW1lbnRzXFxcXEpzXFxcXGFkZXF1YS12MVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWM3MTY2ZDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWM3MTY2ZDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Nvb2tpZVB1cnBvc2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVjNzE2NmQ0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzVjNzE2NmQ0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvQ29va2llUHVycG9zZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29va2llUHVycG9zZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db29raWVQdXJwb3NlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29va2llUHVycG9zZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YzcxNjZkNCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29va2llUHVycG9zZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YzcxNjZkNCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29va2llUHVycG9zZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWM3MTY2ZDQmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Nvb2tpZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWI1MjFkMzZlJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Nvb2tpZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Db29raWVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Db29raWVzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWI1MjFkMzZlJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYjUyMWQzNmVcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxKdWxpZW5cXFxcRG9jdW1lbnRzXFxcXEpzXFxcXGFkZXF1YS12MVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYjUyMWQzNmUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYjUyMWQzNmUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Nvb2tpZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWI1MjFkMzZlJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2I1MjFkMzZlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvQ29va2llcy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29va2llcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db29raWVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29va2llcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1iNTIxZDM2ZSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29va2llcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1iNTIxZDM2ZSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29va2llcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjUyMWQzNmUmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Rlc2lyZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBjZGNkNTYzJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Rlc2lyZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9EZXNpcmVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9EZXNpcmVzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBjZGNkNTYzJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwY2RjZDU2M1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXEp1bGllblxcXFxEb2N1bWVudHNcXFxcSnNcXFxcYWRlcXVhLXYxXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwY2RjZDU2MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwY2RjZDU2MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRGVzaXJlcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGNkY2Q1NjMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMGNkY2Q1NjMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9EZXNpcmVzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EZXNpcmVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Rlc2lyZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EZXNpcmVzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBjZGNkNTYzJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Rlc2lyZXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGNkY2Q1NjMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGVzaXJlcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGNkY2Q1NjMmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0hvdmVyQnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jOTU3Y2E3MCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ib3ZlckJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hvdmVyQnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Ib3ZlckJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jOTU3Y2E3MCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImM5NTdjYTcwXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcSnVsaWVuXFxcXERvY3VtZW50c1xcXFxKc1xcXFxhZGVxdWEtdjFcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2M5NTdjYTcwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2M5NTdjYTcwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ib3ZlckJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Yzk1N2NhNzAmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYzk1N2NhNzAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9Ib3ZlckJ1dHRvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG92ZXJCdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG92ZXJCdXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib3ZlckJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jOTU3Y2E3MCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG92ZXJCdXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Yzk1N2NhNzAmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hvdmVyQnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jOTU3Y2E3MCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTWVudS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2I2MGQ5ZDYmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL01lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL01lbnUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Y2I2MGQ5ZDYmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJjYjYwZDlkNlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXEp1bGllblxcXFxEb2N1bWVudHNcXFxcSnNcXFxcYWRlcXVhLXYxXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdjYjYwZDlkNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdjYjYwZDlkNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTWVudS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2I2MGQ5ZDYmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignY2I2MGQ5ZDYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9NZW51LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWNiNjBkOWQ2JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWNiNjBkOWQ2JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NZW51LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jYjYwZDlkNiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUGFydG5lclNldHRpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZWZmYzFlJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1BhcnRuZXJTZXR0aW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUGFydG5lclNldHRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1BhcnRuZXJTZXR0aW5nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJiZWZmYzFlJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMmJlZmZjMWVcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxKdWxpZW5cXFxcRG9jdW1lbnRzXFxcXEpzXFxcXGFkZXF1YS12MVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMmJlZmZjMWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMmJlZmZjMWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1BhcnRuZXJTZXR0aW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYmVmZmMxZSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyYmVmZmMxZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL1BhcnRuZXJTZXR0aW5nLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYXJ0bmVyU2V0dGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYXJ0bmVyU2V0dGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhcnRuZXJTZXR0aW5nLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJiZWZmYzFlJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYXJ0bmVyU2V0dGluZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yYmVmZmMxZSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFydG5lclNldHRpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZWZmYzFlJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Qb3B1cC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmVlY2EzMzQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Qb3B1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vUG9wdXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmVlY2EzMzQmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyZWVjYTMzNFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXEp1bGllblxcXFxEb2N1bWVudHNcXFxcSnNcXFxcYWRlcXVhLXYxXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyZWVjYTMzNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyZWVjYTMzNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUG9wdXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJlZWNhMzM0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJlZWNhMzM0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvUG9wdXAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUG9wdXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmVlY2EzMzQmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BvcHVwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJlZWNhMzM0JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qb3B1cC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmVlY2EzMzQmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1B1cnBvc2VTZXR0aW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jYTZiMmJmMCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QdXJwb3NlU2V0dGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1B1cnBvc2VTZXR0aW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9QdXJwb3NlU2V0dGluZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jYTZiMmJmMCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImNhNmIyYmYwXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcSnVsaWVuXFxcXERvY3VtZW50c1xcXFxKc1xcXFxhZGVxdWEtdjFcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2NhNmIyYmYwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2NhNmIyYmYwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QdXJwb3NlU2V0dGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2E2YjJiZjAmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignY2E2YjJiZjAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9qcy9pbnRlcmZhY2UvY29tcG9uZW50cy9QdXJwb3NlU2V0dGluZy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHVycG9zZVNldHRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHVycG9zZVNldHRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QdXJwb3NlU2V0dGluZy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jYTZiMmJmMCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHVycG9zZVNldHRpbmcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Y2E2YjJiZjAmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1B1cnBvc2VTZXR0aW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jYTZiMmJmMCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc5YmZiOGQ5JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc5YmZiOGQ5JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNzliZmI4ZDlcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxKdWxpZW5cXFxcRG9jdW1lbnRzXFxcXEpzXFxcXGFkZXF1YS12MVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzliZmI4ZDknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzliZmI4ZDknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03OWJmYjhkOSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3OWJmYjhkOScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2pzL2ludGVyZmFjZS9jb21wb25lbnRzL1NldHRpbmdzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc5YmZiOGQ5JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03OWJmYjhkOSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc5YmZiOGQ5JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9WZW5kb3JTZXR0aW5ncy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDRmMjU3YzEmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVmVuZG9yU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9WZW5kb3JTZXR0aW5ncy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vVmVuZG9yU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDRmMjU3YzEmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI0NGYyNTdjMVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXEp1bGllblxcXFxEb2N1bWVudHNcXFxcSnNcXFxcYWRlcXVhLXYxXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0NGYyNTdjMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0NGYyNTdjMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVmVuZG9yU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ0ZjI1N2MxJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQ0ZjI1N2MxJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvanMvaW50ZXJmYWNlL2NvbXBvbmVudHMvVmVuZG9yU2V0dGluZ3MudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ZlbmRvclNldHRpbmdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ZlbmRvclNldHRpbmdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVmVuZG9yU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDRmMjU3YzEmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ZlbmRvclNldHRpbmdzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ0ZjI1N2MxJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WZW5kb3JTZXR0aW5ncy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDRmMjU3YzEmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi9jb21wb25lbnRzL1NldHRpbmdzLnZ1ZSdcbmltcG9ydCBWZW5kb3JTZXR0aW5ncyBmcm9tIFwiLi9jb21wb25lbnRzL1ZlbmRvclNldHRpbmdzLnZ1ZVwiXG5pbXBvcnQgQWRlcXVhQnV0dG9uIGZyb20gJy4vY29tcG9uZW50cy9BZGVxdWFCdXR0b24udnVlJ1xuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJy4vY29tcG9uZW50cy9CdXR0b25Hcm91cC52dWUnXG5pbXBvcnQgUG9wdXAgZnJvbSAnLi9jb21wb25lbnRzL1BvcHVwLnZ1ZSdcbmltcG9ydCBDb29raWVzIGZyb20gJy4vY29tcG9uZW50cy9Db29raWVzLnZ1ZSdcbmltcG9ydCBDaG9pY2VzIGZyb20gJy4vY29tcG9uZW50cy9DaG9pY2VzLnZ1ZSdcbmltcG9ydCBEZXNpcmVzIGZyb20gJy4vY29tcG9uZW50cy9EZXNpcmVzLnZ1ZSdcbmltcG9ydCBNZW51IGZyb20gJy4vY29tcG9uZW50cy9NZW51LnZ1ZSdcbmltcG9ydCBUb2dnbGVCdXR0b24gZnJvbSAndnVlLWpzLXRvZ2dsZS1idXR0b24nXG5cblZ1ZS51c2UoVG9nZ2xlQnV0dG9uKVxuY29uc3Qgcm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgcGF0aDogJy8nLFxuICAgICAgICBjb21wb25lbnQ6IE1lbnUsXG4gICAgICAgIHByb3BzOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvY29va2llcycsXG4gICAgICAgIGNvbXBvbmVudDogQ29va2llcyxcbiAgICAgICAgcHJvcHM6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJy9jaG9pY2VzJyxcbiAgICAgICAgY29tcG9uZW50OiBDaG9pY2VzLFxuICAgICAgICBwcm9wczogdHJ1ZSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBTZXR0aW5nc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiAndmVuZG9ycycsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBWZW5kb3JTZXR0aW5nc1xuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvZGVzaXJlcycsXG4gICAgICAgIGNvbXBvbmVudDogRGVzaXJlcyxcbiAgICAgICAgcHJvcHM6IHRydWVcbiAgICB9XG5dO1xuXG5jb25zdCByb3V0ZXIgPSBuZXcgVnVlUm91dGVyKHtcbiAgICByb3V0ZXNcbn0pO1xuXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcbiAgICByb3V0ZXIsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBBZGVxdWFCdXR0b24sXG4gICAgICAgIEJ1dHRvbkdyb3VwLFxuICAgIH0sXG4gICAgcmVuZGVyOiBoID0+IGgoUG9wdXApXG59KS4kbW91bnQoJyNhcHAnKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=