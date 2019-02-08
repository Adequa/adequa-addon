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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhZ2UvYWRlcXVhLWFwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZS9ldmVudC9lbWl0dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wYWdlL2V2ZW50L2hhbmRsZXIuanMiXSwibmFtZXMiOlsiSGFuZGxlciIsInNldHVwIiwiRW1pdHRlciIsIkFkZXF1YSIsImdldFZpZXdzIiwiY2FsbGJhY2siLCJzZW5kTWVzc2FnZSIsIndoYXQiLCJnZXRDb25zZW50Iiwid2luZG93IiwiY2FsbGJhY2tzIiwibmV4dElkIiwiYWRkQ2FsbGJhY2siLCJpZCIsIm1zZyIsInJlcXVlc3RJZCIsInBvc3RNZXNzYWdlIiwiZGlyZWN0aW9uIiwibWVzc2FnZSIsImV4ZWNDYWxsYmFjayIsImFyZ3MiLCJoYW5kbGVyIiwidmlld3MiLCJjb25zZW50IiwidmVuZG9yQ29uc2VudHMiLCJjb25zZW50RGF0YSIsInNldHRpbmdzIiwiQWRlcXVhQ21wIiwic2hvd0Nvb2tpZVNldHRpbmdzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwic291cmNlIiwiZGF0YSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFB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QUwsQ0FBa0JELE9BQU8sQ0FBQ0gsU0FBMUIsRUFBcUNHLE9BQU8sQ0FBQ08sV0FBN0MsRUFBMEQsSUFBMUQ7QUFDQTs7QUFDSixXQUFLLFVBQUw7QUFDSSxhQUFLTixZQUFMLENBQWtCRCxPQUFPLENBQUNILFNBQTFCLEVBQXFDRyxPQUFPLENBQUNRLFFBQTdDO0FBQ0E7O0FBQ0osV0FBSyxXQUFMO0FBQ0lqQixjQUFNLENBQUNrQixTQUFQLENBQWlCQyxrQkFBakI7QUFDQTs7QUFDSjtBQUNJLFlBQUdWLE9BQU8sQ0FBQ0gsU0FBWCxFQUFzQixLQUFLSSxZQUFMLENBQWtCRCxPQUFPLENBQUNILFNBQTFCO0FBckI5QjtBQXVCSCxHQWhDVztBQWlDWmQsT0FBSyxFQUFFLFVBQVVDLE9BQVYsRUFBbUI7QUFDdEIsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0FPLFVBQU0sQ0FBQ29CLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DQyxLQUFLLElBQUk7QUFDeEMsVUFDSUEsS0FBSyxDQUFDQyxNQUFOLEtBQWlCdEIsTUFBakIsSUFDQXFCLEtBQUssQ0FBQ0UsSUFBTixDQUFXZixTQURYLElBRUFhLEtBQUssQ0FBQ0UsSUFBTixDQUFXZixTQUFYLEtBQXlCLGVBSDdCLEVBSUU7QUFDRSxjQUFNQyxPQUFPLEdBQUdZLEtBQUssQ0FBQ0UsSUFBTixDQUFXZCxPQUEzQjtBQUNBLFlBQUksQ0FBQ0EsT0FBTCxFQUFjO0FBRWQsYUFBS0csT0FBTCxDQUFhSCxPQUFiO0FBQ0g7QUFDSixLQVhEO0FBWUg7QUEvQ1csQ0FBaEIiLCJmaWxlIjoiYWRlcXVhLWFwaS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9wYWdlL2FkZXF1YS1hcGkuanNcIik7XG4iLCJpbXBvcnQge0VtaXR0ZXJ9IGZyb20gXCIuL2V2ZW50L2VtaXR0ZXJcIjtcclxuaW1wb3J0IHtIYW5kbGVyfSBmcm9tIFwiLi9ldmVudC9oYW5kbGVyXCJcclxuXHJcbihmdW5jdGlvbigpe1xyXG5cclxuICAgIEhhbmRsZXIuc2V0dXAoRW1pdHRlcik7XHJcblxyXG4gICAgY29uc3QgQWRlcXVhID0ge1xyXG4gICAgICAgIGdldFZpZXdzOiBmdW5jdGlvbihjYWxsYmFjayl7XHJcbiAgICAgICAgICAgIEVtaXR0ZXIuc2VuZE1lc3NhZ2Uoe3doYXQ6IFwiZ2V0U2l0ZVZpZXdzXCJ9LCBjYWxsYmFjaylcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldENvbnNlbnQ6IGZ1bmN0aW9uKGNhbGxiYWNrKXtcclxuICAgICAgICAgICAgRW1pdHRlci5zZW5kTWVzc2FnZSh7d2hhdDogXCJnZXRDb25zZW50XCJ9LCBjYWxsYmFjaylcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIGNtcDogKGNvbW1hbmQsIHBhcmFtZXRlciwgY2FsbGJhY2spID0+IHtcclxuICAgICAgICAvLyAgICAgc3dpdGNoIChjb21tYW5kKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBjYXNlICdnZXRWZW5kb3JDb25zZW50cyc6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgRW1pdHRlci5zZW5kTWVzc2FnZSh7d2hhdDogXCJnZXRWZW5kb3JDb25zZW50c1wiLCB2ZW5kb3JJZHM6IHBhcmFtZXRlcn0sIGNhbGxiYWNrKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gICAgICAgICBjYXNlICdnZXRDb25zZW50RGF0YSc6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgRW1pdHRlci5zZW5kTWVzc2FnZSh7d2hhdDogXCJnZXRDb25zZW50RGF0YVwifSwgY2FsbGJhY2spO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvLyAgICAgICAgIGNhc2UgJ3BpbmcnOlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNhbGxiYWNrKHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZ2RwckFwcGxpZXM6IHRydWUsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNtcExvYWRlZDogdHJ1ZVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0sIHRydWUpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gYWRkU2V0dGluZ3M6IGZ1bmN0aW9uIChzZXR0aW5ncykge1xyXG4gICAgICAgIC8vICAgICBFbWl0dGVyLnNlbmRNZXNzYWdlKHt3aGF0OiBcInNldFNldHRpbmdzXCIsIHNldHRpbmdzfSk7XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LkFkZXF1YSA9IEFkZXF1YTtcclxufSkoKTtcclxuXHJcbiIsImNvbnN0IEVtaXR0ZXIgPSB7XHJcbiAgICBjYWxsYmFja3M6IHt9LFxyXG4gICAgbmV4dElkOiAxLFxyXG4gICAgYWRkQ2FsbGJhY2s6IGZ1bmN0aW9uKGNhbGxiYWNrKXtcclxuICAgICAgICBjb25zdCBpZCA9IHRoaXMubmV4dElkO1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2tzW3RoaXMubmV4dElkXSA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHRoaXMubmV4dElkKys7XHJcblxyXG4gICAgICAgIHJldHVybiBpZDtcclxuICAgIH0sXHJcbiAgICBzZW5kTWVzc2FnZTogZnVuY3Rpb24obXNnLCBjYWxsYmFjayl7XHJcbiAgICAgICAgaWYodHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIG1zZy5yZXF1ZXN0SWQgPSB0aGlzLmFkZENhbGxiYWNrKGNhbGxiYWNrKTtcclxuICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogXCJhZGVxdWEtdG9jb250ZW50c2NyaXB0XCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBtc2dcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCIqXCJcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHtFbWl0dGVyfVxyXG4iLCJjb25zdCBIYW5kbGVyID0ge1xyXG4gICAgRW1pdHRlcjoge30sXHJcbiAgICBleGVjQ2FsbGJhY2s6IGZ1bmN0aW9uIChpZCwgLi4uYXJncykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5FbWl0dGVyLmNhbGxiYWNrc1tpZF0gPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICB0aGlzLkVtaXR0ZXIuY2FsbGJhY2tzW2lkXSguLi5hcmdzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsZXRlIHRoaXMuRW1pdHRlci5jYWxsYmFja3NbaWRdO1xyXG4gICAgfSxcclxuICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgc3dpdGNoIChtZXNzYWdlLndoYXQpIHtcclxuICAgICAgICAgICAgY2FzZSBcInNpdGVWaWV3c1wiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5leGVjQ2FsbGJhY2sobWVzc2FnZS5yZXF1ZXN0SWQsIG1lc3NhZ2Uudmlld3MpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjb25zZW50XCI6XHJcbiAgICAgICAgICAgICAgICAvLyBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY29uc2VudFVwZGF0ZWQnLCB7ZGV0YWlsOiBtZXNzYWdlLmNvbnNlbnQuY29uc2VudFN0cmluZ30pKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhlY0NhbGxiYWNrKG1lc3NhZ2UucmVxdWVzdElkLCBtZXNzYWdlLmNvbnNlbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ2ZW5kb3JDb25zZW50c1wiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5leGVjQ2FsbGJhY2sobWVzc2FnZS5yZXF1ZXN0SWQsIG1lc3NhZ2UudmVuZG9yQ29uc2VudHMsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjb25zZW50RGF0YVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5leGVjQ2FsbGJhY2sobWVzc2FnZS5yZXF1ZXN0SWQsIG1lc3NhZ2UuY29uc2VudERhdGEsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzZXR0aW5nc1wiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5leGVjQ2FsbGJhY2sobWVzc2FnZS5yZXF1ZXN0SWQsIG1lc3NhZ2Uuc2V0dGluZ3MpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJvcGVuTW9kYWxcIjpcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5BZGVxdWFDbXAuc2hvd0Nvb2tpZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGlmKG1lc3NhZ2UucmVxdWVzdElkKSB0aGlzLmV4ZWNDYWxsYmFjayhtZXNzYWdlLnJlcXVlc3RJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldHVwOiBmdW5jdGlvbiAoRW1pdHRlcikge1xyXG4gICAgICAgIHRoaXMuRW1pdHRlciA9IEVtaXR0ZXI7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgZXZlbnQuc291cmNlID09PSB3aW5kb3cgJiZcclxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuZGlyZWN0aW9uICYmXHJcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmRpcmVjdGlvbiA9PT0gXCJhZGVxdWEtdG9wYWdlXCJcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXZlbnQuZGF0YS5tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFtZXNzYWdlKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVyKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQge0hhbmRsZXJ9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=