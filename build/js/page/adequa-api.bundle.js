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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/page/adequa-api.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/page/adequa-api.js":
/*!***********************************!*\
  !*** ./src/js/page/adequa-api.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event/emitter */ "./src/js/page/event/emitter.js");
/* harmony import */ var _event_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event/handler */ "./src/js/page/event/handler.js");



(function () {
  _event_handler__WEBPACK_IMPORTED_MODULE_1__["Handler"].setup(_event_emitter__WEBPACK_IMPORTED_MODULE_0__["Emitter"]);
  const Adequa = {
    getViews: function (callback) {
      _event_emitter__WEBPACK_IMPORTED_MODULE_0__["Emitter"].sendMessage({
        what: "getSiteViews"
      }, callback);
    },
    getConsent: function (callback) {
      _event_emitter__WEBPACK_IMPORTED_MODULE_0__["Emitter"].sendMessage({
        what: "getConsent"
      }, callback);
    },

    getDimensions(callback) {
      _event_emitter__WEBPACK_IMPORTED_MODULE_0__["Emitter"].sendMessage({
        what: "getDimensions"
      }, callback);
    } // cmp: (command, parameter, callback) => {
    //     switch (command) {
    //         case 'getVendorConsents':
    //             Emitter.sendMessage({what: "getVendorConsents", vendorIds: parameter}, callback);
    //             return;
    //         case 'getConsentData':
    //             Emitter.sendMessage({what: "getConsentData"}, callback);
    //             return;
    //         case 'ping':
    //             callback({
    //                 gdprApplies: true,
    //                 cmpLoaded: true
    //             }, true);
    //             return;
    //     }
    // },
    // addSettings: function (settings) {
    //     Emitter.sendMessage({what: "setSettings", settings});
    // },


  };
  window.Adequa = Adequa;
})();

/***/ }),

/***/ "./src/js/page/event/emitter.js":
/*!**************************************!*\
  !*** ./src/js/page/event/emitter.js ***!
  \**************************************/
/*! exports provided: Emitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Emitter", function() { return Emitter; });
const Emitter = {
  callbacks: {},
  nextId: 1,
  addCallback: function (callback) {
    const id = this.nextId;
    this.callbacks[this.nextId] = callback;
    this.nextId++;
    return id;
  },
  sendMessage: function (msg, callback) {
    if (typeof callback === "function") msg.requestId = this.addCallback(callback);
    window.postMessage({
      direction: "adequa-tocontentscript",
      message: msg
    }, "*");
  }
};


/***/ }),

/***/ "./src/js/page/event/handler.js":
/*!**************************************!*\
  !*** ./src/js/page/event/handler.js ***!
  \**************************************/
/*! exports provided: Handler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Handler", function() { return Handler; });
const Handler = {
  Emitter: {},
  execCallback: function (id, ...args) {
    if (typeof this.Emitter.callbacks[id] === "function") {
      this.Emitter.callbacks[id](...args);
    }

    delete this.Emitter.callbacks[id];
  },
  handler: function (message) {
    switch (message.what) {
      case "siteViews":
        this.execCallback(message.requestId, message.views);
        break;

      case "consent":
        // document.dispatchEvent(new CustomEvent('consentUpdated', {detail: message.consent.consentString}));
        this.execCallback(message.requestId, message.consent);
        break;

      case "dimensions":
        // document.dispatchEvent(new CustomEvent('consentUpdated', {detail: message.consent.consentString}));
        this.execCallback(message.requestId, message.dimensions);
        break;

      case "vendorConsents":
        this.execCallback(message.requestId, message.vendorConsents, true);
        break;

      case "consentData":
        this.execCallback(message.requestId, message.consentData, true);
        break;

      case "settings":
        this.execCallback(message.requestId, message.settings);
        break;

      case "openModal":
        window.AdequaCmp.showCookieSettings();
        break;

      default:
        if (message.requestId) this.execCallback(message.requestId);
    }
  },
  setup: function (Emitter) {
    this.Emitter = Emitter;
    window.addEventListener("message", event => {
      if (event.source === window && event.data.direction && event.data.direction === "adequa-topage") {
        const message = event.data.message;
        if (!message) return;
        this.handler(message);
      }
    });
  }
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhZ2UvYWRlcXVhLWFwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZS9ldmVudC9lbWl0dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wYWdlL2V2ZW50L2hhbmRsZXIuanMiXSwibmFtZXMiOlsiSGFuZGxlciIsInNldHVwIiwiRW1pdHRlciIsIkFkZXF1YSIsImdldFZpZXdzIiwiY2FsbGJhY2siLCJzZW5kTWVzc2FnZSIsIndoYXQiLCJnZXRDb25zZW50IiwiZ2V0RGltZW5zaW9ucyIsIndpbmRvdyIsImNhbGxiYWNrcyIsIm5leHRJZCIsImFkZENhbGxiYWNrIiwiaWQiLCJtc2ciLCJyZXF1ZXN0SWQiLCJwb3N0TWVzc2FnZSIsImRpcmVjdGlvbiIsIm1lc3NhZ2UiLCJleGVjQ2FsbGJhY2siLCJhcmdzIiwiaGFuZGxlciIsInZpZXdzIiwiY29uc2VudCIsImRpbWVuc2lvbnMiLCJ2ZW5kb3JDb25zZW50cyIsImNvbnNlbnREYXRhIiwic2V0dGluZ3MiLCJBZGVxdWFDbXAiLCJzaG93Q29va2llU2V0dGluZ3MiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJzb3VyY2UiLCJkYXRhIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFuRFcsQ0FBaEIiLCJmaWxlIjoiYWRlcXVhLWFwaS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9wYWdlL2FkZXF1YS1hcGkuanNcIik7XG4iLCJpbXBvcnQge0VtaXR0ZXJ9IGZyb20gXCIuL2V2ZW50L2VtaXR0ZXJcIjtcclxuaW1wb3J0IHtIYW5kbGVyfSBmcm9tIFwiLi9ldmVudC9oYW5kbGVyXCJcclxuXHJcbihmdW5jdGlvbigpe1xyXG5cclxuICAgIEhhbmRsZXIuc2V0dXAoRW1pdHRlcik7XHJcblxyXG4gICAgY29uc3QgQWRlcXVhID0ge1xyXG4gICAgICAgIGdldFZpZXdzOiBmdW5jdGlvbihjYWxsYmFjayl7XHJcbiAgICAgICAgICAgIEVtaXR0ZXIuc2VuZE1lc3NhZ2Uoe3doYXQ6IFwiZ2V0U2l0ZVZpZXdzXCJ9LCBjYWxsYmFjaylcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldENvbnNlbnQ6IGZ1bmN0aW9uKGNhbGxiYWNrKXtcclxuICAgICAgICAgICAgRW1pdHRlci5zZW5kTWVzc2FnZSh7d2hhdDogXCJnZXRDb25zZW50XCJ9LCBjYWxsYmFjaylcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldERpbWVuc2lvbnMoY2FsbGJhY2spe1xyXG4gICAgICAgICAgICBFbWl0dGVyLnNlbmRNZXNzYWdlKHt3aGF0OiBcImdldERpbWVuc2lvbnNcIn0sIGNhbGxiYWNrKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjbXA6IChjb21tYW5kLCBwYXJhbWV0ZXIsIGNhbGxiYWNrKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHN3aXRjaCAoY29tbWFuZCkge1xyXG4gICAgICAgIC8vICAgICAgICAgY2FzZSAnZ2V0VmVuZG9yQ29uc2VudHMnOlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIEVtaXR0ZXIuc2VuZE1lc3NhZ2Uoe3doYXQ6IFwiZ2V0VmVuZG9yQ29uc2VudHNcIiwgdmVuZG9ySWRzOiBwYXJhbWV0ZXJ9LCBjYWxsYmFjayk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vICAgICAgICAgY2FzZSAnZ2V0Q29uc2VudERhdGEnOlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIEVtaXR0ZXIuc2VuZE1lc3NhZ2Uoe3doYXQ6IFwiZ2V0Q29uc2VudERhdGFcIn0sIGNhbGxiYWNrKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gICAgICAgICBjYXNlICdwaW5nJzpcclxuICAgICAgICAvLyAgICAgICAgICAgICBjYWxsYmFjayh7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGdkcHJBcHBsaWVzOiB0cnVlLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjbXBMb2FkZWQ6IHRydWVcclxuICAgICAgICAvLyAgICAgICAgICAgICB9LCB0cnVlKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGFkZFNldHRpbmdzOiBmdW5jdGlvbiAoc2V0dGluZ3MpIHtcclxuICAgICAgICAvLyAgICAgRW1pdHRlci5zZW5kTWVzc2FnZSh7d2hhdDogXCJzZXRTZXR0aW5nc1wiLCBzZXR0aW5nc30pO1xyXG4gICAgICAgIC8vIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5BZGVxdWEgPSBBZGVxdWE7XHJcbn0pKCk7XHJcblxyXG4iLCJjb25zdCBFbWl0dGVyID0ge1xyXG4gICAgY2FsbGJhY2tzOiB7fSxcclxuICAgIG5leHRJZDogMSxcclxuICAgIGFkZENhbGxiYWNrOiBmdW5jdGlvbihjYWxsYmFjayl7XHJcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLm5leHRJZDtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrc1t0aGlzLm5leHRJZF0gPSBjYWxsYmFjaztcclxuICAgICAgICB0aGlzLm5leHRJZCsrO1xyXG5cclxuICAgICAgICByZXR1cm4gaWQ7XHJcbiAgICB9LFxyXG4gICAgc2VuZE1lc3NhZ2U6IGZ1bmN0aW9uKG1zZywgY2FsbGJhY2spe1xyXG4gICAgICAgIGlmKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSBtc2cucmVxdWVzdElkID0gdGhpcy5hZGRDYWxsYmFjayhjYWxsYmFjayk7XHJcbiAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IFwiYWRlcXVhLXRvY29udGVudHNjcmlwdFwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogbXNnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiKlwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCB7RW1pdHRlcn1cclxuIiwiY29uc3QgSGFuZGxlciA9IHtcclxuICAgIEVtaXR0ZXI6IHt9LFxyXG4gICAgZXhlY0NhbGxiYWNrOiBmdW5jdGlvbiAoaWQsIC4uLmFyZ3MpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuRW1pdHRlci5jYWxsYmFja3NbaWRdID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5FbWl0dGVyLmNhbGxiYWNrc1tpZF0oLi4uYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGV0ZSB0aGlzLkVtaXR0ZXIuY2FsbGJhY2tzW2lkXTtcclxuICAgIH0sXHJcbiAgICBoYW5kbGVyOiBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgIHN3aXRjaCAobWVzc2FnZS53aGF0KSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzaXRlVmlld3NcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhlY0NhbGxiYWNrKG1lc3NhZ2UucmVxdWVzdElkLCBtZXNzYWdlLnZpZXdzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY29uc2VudFwiOlxyXG4gICAgICAgICAgICAgICAgLy8gZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NvbnNlbnRVcGRhdGVkJywge2RldGFpbDogbWVzc2FnZS5jb25zZW50LmNvbnNlbnRTdHJpbmd9KSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWNDYWxsYmFjayhtZXNzYWdlLnJlcXVlc3RJZCwgbWVzc2FnZS5jb25zZW50KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGltZW5zaW9uc1wiOlxyXG4gICAgICAgICAgICAgICAgLy8gZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NvbnNlbnRVcGRhdGVkJywge2RldGFpbDogbWVzc2FnZS5jb25zZW50LmNvbnNlbnRTdHJpbmd9KSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWNDYWxsYmFjayhtZXNzYWdlLnJlcXVlc3RJZCwgbWVzc2FnZS5kaW1lbnNpb25zKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidmVuZG9yQ29uc2VudHNcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhlY0NhbGxiYWNrKG1lc3NhZ2UucmVxdWVzdElkLCBtZXNzYWdlLnZlbmRvckNvbnNlbnRzLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY29uc2VudERhdGFcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhlY0NhbGxiYWNrKG1lc3NhZ2UucmVxdWVzdElkLCBtZXNzYWdlLmNvbnNlbnREYXRhLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic2V0dGluZ3NcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhlY0NhbGxiYWNrKG1lc3NhZ2UucmVxdWVzdElkLCBtZXNzYWdlLnNldHRpbmdzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwib3Blbk1vZGFsXCI6XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuQWRlcXVhQ21wLnNob3dDb29raWVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBpZihtZXNzYWdlLnJlcXVlc3RJZCkgdGhpcy5leGVjQ2FsbGJhY2sobWVzc2FnZS5yZXF1ZXN0SWQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXR1cDogZnVuY3Rpb24gKEVtaXR0ZXIpIHtcclxuICAgICAgICB0aGlzLkVtaXR0ZXIgPSBFbWl0dGVyO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGV2ZW50LnNvdXJjZSA9PT0gd2luZG93ICYmXHJcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmRpcmVjdGlvbiAmJlxyXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5kaXJlY3Rpb24gPT09IFwiYWRlcXVhLXRvcGFnZVwiXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGV2ZW50LmRhdGEubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIGlmICghbWVzc2FnZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlcihtZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHtIYW5kbGVyfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9