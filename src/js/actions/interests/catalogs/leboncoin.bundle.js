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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/actions/interests/catalogs/leboncoin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/actions/interests/catalogs/leboncoin.js":
/*!********************************************************!*\
  !*** ./src/js/actions/interests/catalogs/leboncoin.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let lbcPort = null;
let call_id = 0;
const callbackBuffer = {};

const eventHandler = function (msg, port) {
  if (msg.what === "response") {
    const data = msg.data;
    const promises = [];

    for (const ad of data.ads.reverse()) {
      promises.push(Adequa.db.adSources.exists("lbc_" + ad.list_id).then(exist => {
        if (!exist) promises.push(Adequa.db.adSources.put({
          _id: "lbc_" + ad.list_id,
          ...ad
        }).catch(console.warn));
      }));
    }

    Promise.all(promises).then(() => {
      if (msg.call_id) {
        callbackBuffer[msg.call_id]();
        callbackBuffer[msg.call_id] = null;
      }
    });
  } else if (msg.what === "stayNotified") {
    Adequa.actions.interests.checkInterest(msg.url, port.sender.tab.id);
    Adequa.actions.tabs.notify('Vous êtes parés', 'C\'est ici que vous verrez apparaitre les notifications !');
  } else {
    console.log(msg);
  }
};

Adequa.API.runtime.onConnect.addListener(function (port) {
  if (port.name === "leboncoin") {
    port.onMessage.addListener(function (msg) {
      eventHandler(msg, port);
    });
    lbcPort = port;
  }
});

const poll = function (interest, callback) {
  // const search = new leboncoin.Search()
  //     .setPage(1)
  //     .setQuery(interest.name);
  const body = interest.request;
  if (!body) return; // if (interest.parameters.text)
  //     body.filters.keywords = {text: interest.parameters.text};
  // if (interest.parameters.lat && interest.parameters.lng && interest.parameters.radius) {
  //     body.filters.location.area = {
  //         "lat": parseFloat(interest.parameters.lat),
  //         "lng": parseFloat(interest.parameters.lng),
  //         "radius": parseFloat(interest.parameters.radius)
  //     }
  // }
  // if (interest.parameters.price) {
  //     const [min, max] = interest.parameters.price.split('-').map(n => parseFloat(n));
  //     body.filters.ranges.price = {min, max}
  // }
  // if (interest.parameters.rooms) {
  //     const [min, max] = interest.parameters.rooms.split('-').map(n => parseFloat(n));
  //     body.filters.ranges.rooms = {min, max}
  // }
  // if (interest.parameters.square) {
  //     const [min, max] = interest.parameters.square.split('-').map(n => parseFloat(n));
  //     body.filters.ranges.square = {min, max}
  // }
  //

  console.log(body); // .setRegion("ile_de_france")
  // .setDepartment("yvelines")
  // .setLocation([
  //     {"zipcode": "78100"},
  //     {"zipcode": "78000"},
  // ]);

  call_id = call_id + 1;

  callbackBuffer[call_id] = callback || function () {};

  lbcPort.postMessage({
    what: "query",
    call_id,
    body
  });
};

const generateAds = function (number, callback) {
  Adequa.db.adSources.query(function (doc, emit) {
    if (!doc.already_transformed && doc._id.startsWith("lbc_")) emit(doc.index_date);
  }, {
    include_docs: true,
    limit: number
  }).then(function (data) {
    for (const {
      doc
    } of data.rows) {
      Promise.all([Adequa.db.ads.post({
        title: doc.subject,
        image: doc.images.thumb_url,
        text: doc.category_name + "\n" + doc.location.city_label,
        link: doc.url,
        price: ((doc.price || []).length ? doc.price[0] : doc.price || 0) + "€",
        generated_at: Date.now()
      }), Adequa.db.adSources.put({
        _id: doc._id,
        _rev: doc._rev,
        already_transformed: true
      })]).then(callback);
    }
  }).catch(console.warn);
};

const parseQuery = function (query) {
  const lbc_entry = Object.assign({}, Adequa.storage.leboncoinQueries["common"], Adequa.storage.leboncoinQueries[query.category]);
  const output = {
    parameters: {}
  };

  if (lbc_entry) {
    const lbcQueryParameters = lbc_entry.query_parameters;

    for (const index in lbcQueryParameters) {
      const param = query[index];
      const lbcParam = lbcQueryParameters[index];

      if (param) {
        output.parameters[lbcParam.name] = lbcParam.keys[param];
      }
    }
  }

  return output;
};

const renderQuery = function (interest) {
  const lbc_entry = Adequa.storage.leboncoinReversedQueries[interest.name];
  const output = {
    parameters: {}
  };

  if (lbc_entry) {
    output.name = lbc_entry.name;
    const lbcQueryParameters = lbc_entry.query_parameters;

    for (const index in interest.parameters) {
      const lbcParam = lbcQueryParameters[index];
      const param = interest.parameters[index];

      if (lbcParam) {
        output.parameters[lbcParam.name] = lbcParam.keys[param];
      }
    }
  }

  return output;
};

Adequa.catalogs["leboncoin"] = {
  category: "Immobilier",
  poll,
  generateAds,
  parseQuery
};

Adequa.test = function () {
  Adequa.db.adSources.query(function (doc, emit) {
    if (!doc.already_transformed && doc._id.startsWith("lbc_")) emit(doc.index_date);
  }, {
    include_docs: true
  }).then(function (result) {
    console.log(result);
  }).catch(function (err) {
    console.warn(err);
  });
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FjdGlvbnMvaW50ZXJlc3RzL2NhdGFsb2dzL2xlYm9uY29pbi5qcyJdLCJuYW1lcyI6WyJsYmNQb3J0IiwiY2FsbF9pZCIsImNhbGxiYWNrQnVmZmVyIiwiZXZlbnRIYW5kbGVyIiwibXNnIiwicG9ydCIsIndoYXQiLCJkYXRhIiwicHJvbWlzZXMiLCJhZCIsImFkcyIsInJldmVyc2UiLCJwdXNoIiwiQWRlcXVhIiwiZGIiLCJhZFNvdXJjZXMiLCJleGlzdHMiLCJsaXN0X2lkIiwidGhlbiIsImV4aXN0IiwicHV0IiwiX2lkIiwiY2F0Y2giLCJjb25zb2xlIiwid2FybiIsIlByb21pc2UiLCJhbGwiLCJhY3Rpb25zIiwiaW50ZXJlc3RzIiwiY2hlY2tJbnRlcmVzdCIsInVybCIsInNlbmRlciIsInRhYiIsImlkIiwidGFicyIsIm5vdGlmeSIsImxvZyIsIkFQSSIsInJ1bnRpbWUiLCJvbkNvbm5lY3QiLCJhZGRMaXN0ZW5lciIsIm5hbWUiLCJvbk1lc3NhZ2UiLCJwb2xsIiwiaW50ZXJlc3QiLCJjYWxsYmFjayIsImJvZHkiLCJyZXF1ZXN0IiwicG9zdE1lc3NhZ2UiLCJnZW5lcmF0ZUFkcyIsIm51bWJlciIsInF1ZXJ5IiwiZG9jIiwiZW1pdCIsImFscmVhZHlfdHJhbnNmb3JtZWQiLCJzdGFydHNXaXRoIiwiaW5kZXhfZGF0ZSIsImluY2x1ZGVfZG9jcyIsImxpbWl0Iiwicm93cyIsInBvc3QiLCJ0aXRsZSIsInN1YmplY3QiLCJpbWFnZSIsImltYWdlcyIsInRodW1iX3VybCIsInRleHQiLCJjYXRlZ29yeV9uYW1lIiwibG9jYXRpb24iLCJjaXR5X2xhYmVsIiwibGluayIsInByaWNlIiwibGVuZ3RoIiwiZ2VuZXJhdGVkX2F0IiwiRGF0ZSIsIm5vdyIsIl9yZXYiLCJwYXJzZVF1ZXJ5IiwibGJjX2VudHJ5IiwiT2JqZWN0IiwiYXNzaWduIiwic3RvcmFnZSIsImxlYm9uY29pblF1ZXJpZXMiLCJjYXRlZ29yeSIsIm91dHB1dCIsInBhcmFtZXRlcnMiLCJsYmNRdWVyeVBhcmFtZXRlcnMiLCJxdWVyeV9wYXJhbWV0ZXJzIiwiaW5kZXgiLCJwYXJhbSIsImxiY1BhcmFtIiwia2V5cyIsInJlbmRlclF1ZXJ5IiwibGVib25jb2luUmV2ZXJzZWRRdWVyaWVzIiwiY2F0YWxvZ3MiLCJ0ZXN0IiwicmVzdWx0IiwiZXJyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsSUFBSUEsT0FBTyxHQUFHLElBQWQ7QUFDQSxJQUFJQyxPQUFPLEdBQUcsQ0FBZDtBQUNBLE1BQU1DLGNBQWMsR0FBRyxFQUF2Qjs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsVUFBVUMsR0FBVixFQUFlQyxJQUFmLEVBQXFCO0FBQ3RDLE1BQUlELEdBQUcsQ0FBQ0UsSUFBSixLQUFhLFVBQWpCLEVBQTZCO0FBQ3pCLFVBQU1DLElBQUksR0FBR0gs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QUFHLENBQUNJLFVBQUwsQ0FBSjtBQUNQLEdBSEQsRUFHRztBQUFDQyxnQkFBWSxFQUFFO0FBQWYsR0FISCxFQUd5QnZDLElBSHpCLENBRzhCLFVBQVU4RSxNQUFWLEVBQWtCO0FBQzVDekUsV0FBTyxDQUFDYSxHQUFSLENBQVk0RCxNQUFaO0FBQ0gsR0FMRCxFQUtHMUUsS0FMSCxDQUtTLFVBQVUyRSxHQUFWLEVBQWU7QUFDcEIxRSxXQUFPLENBQUNDLElBQVIsQ0FBYXlFLEdBQWI7QUFDSCxHQVBEO0FBUUgsQ0FURCxDIiwiZmlsZSI6ImxlYm9uY29pbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9hY3Rpb25zL2ludGVyZXN0cy9jYXRhbG9ncy9sZWJvbmNvaW4uanNcIik7XG4iLCJsZXQgbGJjUG9ydCA9IG51bGw7XHJcbmxldCBjYWxsX2lkID0gMDtcclxuY29uc3QgY2FsbGJhY2tCdWZmZXIgPSB7fTtcclxuXHJcbmNvbnN0IGV2ZW50SGFuZGxlciA9IGZ1bmN0aW9uIChtc2csIHBvcnQpIHtcclxuICAgIGlmIChtc2cud2hhdCA9PT0gXCJyZXNwb25zZVwiKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IG1zZy5kYXRhO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgYWQgb2YgZGF0YS5hZHMucmV2ZXJzZSgpKSB7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICBBZGVxdWEuZGIuYWRTb3VyY2VzLmV4aXN0cyhcImxiY19cIiArIGFkLmxpc3RfaWQpLnRoZW4oZXhpc3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZXhpc3QpIHByb21pc2VzLnB1c2goQWRlcXVhLmRiLmFkU291cmNlcy5wdXQoe19pZDogXCJsYmNfXCIgKyBhZC5saXN0X2lkLCAuLi5hZH0pLmNhdGNoKGNvbnNvbGUud2FybikpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobXNnLmNhbGxfaWQpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrQnVmZmVyW21zZy5jYWxsX2lkXSgpO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tCdWZmZXJbbXNnLmNhbGxfaWRdID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGVsc2UgaWYgKG1zZy53aGF0ID09PSBcInN0YXlOb3RpZmllZFwiKSB7XHJcbiAgICAgICAgQWRlcXVhLmFjdGlvbnMuaW50ZXJlc3RzLmNoZWNrSW50ZXJlc3QobXNnLnVybCwgcG9ydC5zZW5kZXIudGFiLmlkKTtcclxuICAgICAgICBBZGVxdWEuYWN0aW9ucy50YWJzLm5vdGlmeSgnVm91cyDDqnRlcyBwYXLDqXMnLCAnQ1xcJ2VzdCBpY2kgcXVlIHZvdXMgdmVycmV6IGFwcGFyYWl0cmUgbGVzIG5vdGlmaWNhdGlvbnMgIScpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1zZylcclxuICAgIH1cclxufTtcclxuXHJcbkFkZXF1YS5BUEkucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKHBvcnQpIHtcclxuICAgIGlmIChwb3J0Lm5hbWUgPT09IFwibGVib25jb2luXCIpIHtcclxuICAgICAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAobXNnKSB7XHJcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlcihtc2csIHBvcnQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsYmNQb3J0ID0gcG9ydDtcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuY29uc3QgcG9sbCA9IGZ1bmN0aW9uIChpbnRlcmVzdCwgY2FsbGJhY2spIHtcclxuICAgIC8vIGNvbnN0IHNlYXJjaCA9IG5ldyBsZWJvbmNvaW4uU2VhcmNoKClcclxuICAgIC8vICAgICAuc2V0UGFnZSgxKVxyXG4gICAgLy8gICAgIC5zZXRRdWVyeShpbnRlcmVzdC5uYW1lKTtcclxuICAgIGNvbnN0IGJvZHkgPSBpbnRlcmVzdC5yZXF1ZXN0O1xyXG4gICAgaWYoIWJvZHkpIHJldHVybjtcclxuICAgIC8vIGlmIChpbnRlcmVzdC5wYXJhbWV0ZXJzLnRleHQpXHJcbiAgICAvLyAgICAgYm9keS5maWx0ZXJzLmtleXdvcmRzID0ge3RleHQ6IGludGVyZXN0LnBhcmFtZXRlcnMudGV4dH07XHJcbiAgICAvLyBpZiAoaW50ZXJlc3QucGFyYW1ldGVycy5sYXQgJiYgaW50ZXJlc3QucGFyYW1ldGVycy5sbmcgJiYgaW50ZXJlc3QucGFyYW1ldGVycy5yYWRpdXMpIHtcclxuICAgIC8vICAgICBib2R5LmZpbHRlcnMubG9jYXRpb24uYXJlYSA9IHtcclxuICAgIC8vICAgICAgICAgXCJsYXRcIjogcGFyc2VGbG9hdChpbnRlcmVzdC5wYXJhbWV0ZXJzLmxhdCksXHJcbiAgICAvLyAgICAgICAgIFwibG5nXCI6IHBhcnNlRmxvYXQoaW50ZXJlc3QucGFyYW1ldGVycy5sbmcpLFxyXG4gICAgLy8gICAgICAgICBcInJhZGl1c1wiOiBwYXJzZUZsb2F0KGludGVyZXN0LnBhcmFtZXRlcnMucmFkaXVzKVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIC8vIGlmIChpbnRlcmVzdC5wYXJhbWV0ZXJzLnByaWNlKSB7XHJcbiAgICAvLyAgICAgY29uc3QgW21pbiwgbWF4XSA9IGludGVyZXN0LnBhcmFtZXRlcnMucHJpY2Uuc3BsaXQoJy0nKS5tYXAobiA9PiBwYXJzZUZsb2F0KG4pKTtcclxuICAgIC8vICAgICBib2R5LmZpbHRlcnMucmFuZ2VzLnByaWNlID0ge21pbiwgbWF4fVxyXG4gICAgLy8gfVxyXG4gICAgLy8gaWYgKGludGVyZXN0LnBhcmFtZXRlcnMucm9vbXMpIHtcclxuICAgIC8vICAgICBjb25zdCBbbWluLCBtYXhdID0gaW50ZXJlc3QucGFyYW1ldGVycy5yb29tcy5zcGxpdCgnLScpLm1hcChuID0+IHBhcnNlRmxvYXQobikpO1xyXG4gICAgLy8gICAgIGJvZHkuZmlsdGVycy5yYW5nZXMucm9vbXMgPSB7bWluLCBtYXh9XHJcbiAgICAvLyB9XHJcbiAgICAvLyBpZiAoaW50ZXJlc3QucGFyYW1ldGVycy5zcXVhcmUpIHtcclxuICAgIC8vICAgICBjb25zdCBbbWluLCBtYXhdID0gaW50ZXJlc3QucGFyYW1ldGVycy5zcXVhcmUuc3BsaXQoJy0nKS5tYXAobiA9PiBwYXJzZUZsb2F0KG4pKTtcclxuICAgIC8vICAgICBib2R5LmZpbHRlcnMucmFuZ2VzLnNxdWFyZSA9IHttaW4sIG1heH1cclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICBjb25zb2xlLmxvZyhib2R5KVxyXG4gICAgLy8gLnNldFJlZ2lvbihcImlsZV9kZV9mcmFuY2VcIilcclxuICAgIC8vIC5zZXREZXBhcnRtZW50KFwieXZlbGluZXNcIilcclxuICAgIC8vIC5zZXRMb2NhdGlvbihbXHJcbiAgICAvLyAgICAge1wiemlwY29kZVwiOiBcIjc4MTAwXCJ9LFxyXG4gICAgLy8gICAgIHtcInppcGNvZGVcIjogXCI3ODAwMFwifSxcclxuICAgIC8vIF0pO1xyXG5cclxuICAgIGNhbGxfaWQgPSBjYWxsX2lkICsgMTtcclxuICAgIGNhbGxiYWNrQnVmZmVyW2NhbGxfaWRdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgfTtcclxuXHJcbiAgICBsYmNQb3J0LnBvc3RNZXNzYWdlKHt3aGF0OiBcInF1ZXJ5XCIsIGNhbGxfaWQsIGJvZHl9KTtcclxufTtcclxuXHJcbmNvbnN0IGdlbmVyYXRlQWRzID0gZnVuY3Rpb24gKG51bWJlciwgY2FsbGJhY2spIHtcclxuICAgIEFkZXF1YS5kYi5hZFNvdXJjZXMucXVlcnkoZnVuY3Rpb24gKGRvYywgZW1pdCkge1xyXG4gICAgICAgIGlmICghZG9jLmFscmVhZHlfdHJhbnNmb3JtZWQgJiYgZG9jLl9pZC5zdGFydHNXaXRoKFwibGJjX1wiKSlcclxuICAgICAgICAgICAgZW1pdChkb2MuaW5kZXhfZGF0ZSk7XHJcbiAgICB9LCB7aW5jbHVkZV9kb2NzOiB0cnVlLCBsaW1pdDogbnVtYmVyfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIGZvciAoY29uc3Qge2RvY30gb2YgZGF0YS5yb3dzKSB7XHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgICAgIEFkZXF1YS5kYi5hZHMucG9zdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGRvYy5zdWJqZWN0LFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBkb2MuaW1hZ2VzLnRodW1iX3VybCxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBkb2MuY2F0ZWdvcnlfbmFtZSArIFwiXFxuXCIgKyBkb2MubG9jYXRpb24uY2l0eV9sYWJlbCxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiBkb2MudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiAoKGRvYy5wcmljZSB8fCBbXSkubGVuZ3RoID8gZG9jLnByaWNlWzBdIDogZG9jLnByaWNlIHx8IDApICsgXCLigqxcIixcclxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZWRfYXQ6IERhdGUubm93KClcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgQWRlcXVhLmRiLmFkU291cmNlcy5wdXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIF9pZDogZG9jLl9pZCxcclxuICAgICAgICAgICAgICAgICAgICBfcmV2OiBkb2MuX3JldixcclxuICAgICAgICAgICAgICAgICAgICBhbHJlYWR5X3RyYW5zZm9ybWVkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBdKS50aGVuKGNhbGxiYWNrKVxyXG4gICAgICAgIH1cclxuICAgIH0pLmNhdGNoKGNvbnNvbGUud2Fybik7XHJcbn07XHJcblxyXG5jb25zdCBwYXJzZVF1ZXJ5ID0gZnVuY3Rpb24gKHF1ZXJ5KSB7XHJcbiAgICBjb25zdCBsYmNfZW50cnkgPSBPYmplY3QuYXNzaWduKHt9LCBBZGVxdWEuc3RvcmFnZS5sZWJvbmNvaW5RdWVyaWVzW1wiY29tbW9uXCJdLCBBZGVxdWEuc3RvcmFnZS5sZWJvbmNvaW5RdWVyaWVzW3F1ZXJ5LmNhdGVnb3J5XSk7XHJcbiAgICBjb25zdCBvdXRwdXQgPSB7cGFyYW1ldGVyczoge319O1xyXG5cclxuICAgIGlmIChsYmNfZW50cnkpIHtcclxuICAgICAgICBjb25zdCBsYmNRdWVyeVBhcmFtZXRlcnMgPSBsYmNfZW50cnkucXVlcnlfcGFyYW1ldGVycztcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBpbmRleCBpbiBsYmNRdWVyeVBhcmFtZXRlcnMpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyYW0gPSBxdWVyeVtpbmRleF07XHJcbiAgICAgICAgICAgIGNvbnN0IGxiY1BhcmFtID0gbGJjUXVlcnlQYXJhbWV0ZXJzW2luZGV4XTtcclxuICAgICAgICAgICAgaWYgKHBhcmFtKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQucGFyYW1ldGVyc1tsYmNQYXJhbS5uYW1lXSA9IGxiY1BhcmFtLmtleXNbcGFyYW1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBvdXRwdXQ7XHJcbn07XHJcblxyXG5jb25zdCByZW5kZXJRdWVyeSA9IGZ1bmN0aW9uIChpbnRlcmVzdCkge1xyXG4gICAgY29uc3QgbGJjX2VudHJ5ID0gQWRlcXVhLnN0b3JhZ2UubGVib25jb2luUmV2ZXJzZWRRdWVyaWVzW2ludGVyZXN0Lm5hbWVdO1xyXG4gICAgY29uc3Qgb3V0cHV0ID0ge3BhcmFtZXRlcnM6IHt9fTtcclxuXHJcbiAgICBpZiAobGJjX2VudHJ5KSB7XHJcbiAgICAgICAgb3V0cHV0Lm5hbWUgPSBsYmNfZW50cnkubmFtZTtcclxuXHJcbiAgICAgICAgY29uc3QgbGJjUXVlcnlQYXJhbWV0ZXJzID0gbGJjX2VudHJ5LnF1ZXJ5X3BhcmFtZXRlcnM7XHJcbiAgICAgICAgZm9yIChjb25zdCBpbmRleCBpbiBpbnRlcmVzdC5wYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxiY1BhcmFtID0gbGJjUXVlcnlQYXJhbWV0ZXJzW2luZGV4XTtcclxuICAgICAgICAgICAgY29uc3QgcGFyYW0gPSBpbnRlcmVzdC5wYXJhbWV0ZXJzW2luZGV4XTtcclxuICAgICAgICAgICAgaWYgKGxiY1BhcmFtKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQucGFyYW1ldGVyc1tsYmNQYXJhbS5uYW1lXSA9IGxiY1BhcmFtLmtleXNbcGFyYW1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBvdXRwdXQ7XHJcbn07XHJcblxyXG5BZGVxdWEuY2F0YWxvZ3NbXCJsZWJvbmNvaW5cIl0gPSB7XHJcbiAgICBjYXRlZ29yeTogXCJJbW1vYmlsaWVyXCIsXHJcbiAgICBwb2xsLFxyXG4gICAgZ2VuZXJhdGVBZHMsXHJcbiAgICBwYXJzZVF1ZXJ5XHJcbn07XHJcblxyXG5BZGVxdWEudGVzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIEFkZXF1YS5kYi5hZFNvdXJjZXMucXVlcnkoZnVuY3Rpb24gKGRvYywgZW1pdCkge1xyXG4gICAgICAgIGlmICghZG9jLmFscmVhZHlfdHJhbnNmb3JtZWQgJiYgZG9jLl9pZC5zdGFydHNXaXRoKFwibGJjX1wiKSlcclxuICAgICAgICAgICAgZW1pdChkb2MuaW5kZXhfZGF0ZSk7XHJcbiAgICB9LCB7aW5jbHVkZV9kb2NzOiB0cnVlfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihlcnIpXHJcbiAgICB9KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==