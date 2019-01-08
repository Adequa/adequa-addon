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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/storage.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/immutable/dist/immutable.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/immutable/dist/immutable.es.js ***!
  \*****************************************************/
/*! exports provided: default, version, Collection, Iterable, Seq, Map, OrderedMap, List, Stack, Set, OrderedSet, Record, Range, Repeat, is, fromJS, hash, isImmutable, isCollection, isKeyed, isIndexed, isAssociative, isOrdered, isValueObject, get, getIn, has, hasIn, merge, mergeDeep, mergeWith, mergeDeepWith, remove, removeIn, set, setIn, update, updateIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collection", function() { return Collection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Iterable", function() { return Iterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Seq", function() { return Seq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderedMap", function() { return OrderedMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stack", function() { return Stack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Set", function() { return Set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderedSet", function() { return OrderedSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Record", function() { return Record; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Repeat", function() { return Repeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromJS", function() { return fromJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hash", function() { return hash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isImmutable", function() { return isImmutable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCollection", function() { return isCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isKeyed", function() { return isKeyed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIndexed", function() { return isIndexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAssociative", function() { return isAssociative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOrdered", function() { return isOrdered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValueObject", function() { return isValueObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIn", function() { return getIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasIn", function() { return hasIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return mergeDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeWith", function() { return mergeWith$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeepWith", function() { return mergeDeepWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeIn", function() { return removeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIn", function() { return setIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateIn", function() { return updateIn; });
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// Used for setting prototype methods that IE8 chokes on.
var DELETE = 'delete'; // Constants describing the size of trie nodes.

var SHIFT = 5; // Resulted in best performance after ______?

var SIZE = 1 << SHIFT;
var MASK = SIZE - 1; // A consistent shared value representing "not set" which equals nothing other
// than itself, and nothing that could be provided externally.

var NOT_SET = {}; // Boolean references, Rough equivalent of `bool &`.

function MakeRef() {
  return {
    value: false
  };
}

function SetRef(ref) {
  if (ref) {
    ref.value = true;
  }
} // A function which returns a value representing an "owner" for transient writes
// to tries. The return value will only ever equal itself, and will not equal
// the return of any subsequent call of this function.


function OwnerID() {}

function ensureSize(iter) {
  if (iter.size === undefined) {
    iter.size = iter.__iterate(returnTrue);
  }

  return iter.size;
}

function wrapIndex(iter, index) {
  // This implements "is array index" which the ECMAString spec defines as:
  //
  //     A String property name P is an array index if and only if
  //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
  //     to 2^32−1.
  //
  // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
  if (typeof index !== 'number') {
    var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32

    if ('' + uint32Index !== index || uint32Index === 4294967295) {
      return NaN;
    }

    index = uint32Index;
  }

  return index < 0 ? ensureSize(iter) + index : index;
}

function returnTrue() {
  return true;
}

function wholeSlice(begin, end, size) {
  return (begin === 0 && !isNeg(begin) || size !== undefined && begin <= -size) && (end === undefined || size !== undefined && end >= size);
}

function resolveBegin(begin, size) {
  return resolveIndex(begin, size, 0);
}

function resolveEnd(end, size) {
  return resolveIndex(end, size, size);
}

function resolveIndex(index, size, defaultIndex) {
  // Sanitize indices using this shorthand for ToInt32(argument)
  // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
  return index === undefined ? defaultIndex : isNeg(index) ? size === Infinity ? size : Math.max(0, size + index) | 0 : size === undefined || size === index ? index : Math.min(size, index) | 0;
}

function isNeg(value) {
  // Account for -0 which is negative, but not less than 0.
  return value < 0 || value === 0 && 1 / value === -Infinity;
} // Note: value is unchanged to not break immutable-devtools.


var IS_COLLECTION_SYMBOL = '@@__IMMUTABLE_ITERABLE__@@';

function isCollection(maybeCollection) {
  return Boolean(maybeCollection && maybeCollection[IS_COLLECTION_SYMBOL]);
}

var IS_KEYED_SYMBOL = '@@__IMMUTABLE_KEYED__@@';

function isKeyed(maybeKeyed) {
  return Boolean(maybeKeyed && maybeKeyed[IS_KEYED_SYMBOL]);
}

var IS_INDEXED_SYMBOL = '@@__IMMUTABLE_INDEXED__@@';

function isIndexed(maybeIndexed) {
  return Boolean(maybeIndexed && maybeIndexed[IS_INDEXED_SYMBOL]);
}

function isAssociative(maybeAssociative) {
  return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
}

var Collection = function Collection(value) {
  return isCollection(value) ? value : Seq(value);
};

var KeyedCollection =
/*@__PURE__*/
function (Collection) {
  function KeyedCollection(value) {
    return isKeyed(value) ? value : KeyedSeq(value);
  }

  if (Collection) KeyedCollection.__proto__ = Collection;
  KeyedCollection.prototype = Object.create(Collection && Collection.prototype);
  KeyedCollection.prototype.constructor = KeyedCollection;
  return KeyedCollection;
}(Collection);

var IndexedCollection =
/*@__PURE__*/
function (Collection) {
  function IndexedCollection(value) {
    return isIndexed(value) ? value : IndexedSeq(value);
  }

  if (Collection) IndexedCollection.__proto__ = Collection;
  IndexedCollection.prototype = Object.create(Collection && Collection.prototype);
  IndexedCollection.prototype.constructor = IndexedCollection;
  return IndexedCollection;
}(Collection);

var SetCollection =
/*@__PURE__*/
function (Collection) {
  function SetCollection(value) {
    return isCollection(value) && !isAssociative(value) ? value : SetSeq(value);
  }

  if (Collection) SetCollection.__proto__ = Collection;
  SetCollection.prototype = Object.create(Collection && Collection.prototype);
  SetCollection.prototype.constructor = SetCollection;
  return SetCollection;
}(Collection);

Collection.Keyed = KeyedCollection;
Collection.Indexed = IndexedCollection;
Collection.Set = SetCollection;
var IS_SEQ_SYMBOL = '@@__IMMUTABLE_SEQ__@@';

function isSeq(maybeSeq) {
  return Boolean(maybeSeq && maybeSeq[IS_SEQ_SYMBOL]);
}

var IS_RECORD_SYMBOL = '@@__IMMUTABLE_RECORD__@@';

function isRecord(maybeRecord) {
  return Boolean(maybeRecord && maybeRecord[IS_RECORD_SYMBOL]);
}

function isImmutable(maybeImmutable) {
  return isCollection(maybeImmutable) || isRecord(maybeImmutable);
}

var IS_ORDERED_SYMBOL = '@@__IMMUTABLE_ORDERED__@@';

function isOrdered(maybeOrdered) {
  return Boolean(maybeOrdered && maybeOrdered[IS_ORDERED_SYMBOL]);
}

var ITERATE_KEYS = 0;
var ITERATE_VALUES = 1;
var ITERATE_ENTRIES = 2;
var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;

var Iterator = function Iterator(next) {
  this.next = next;
};

Iterator.prototype.toString = function toString() {
  return '[Iterator]';
};

Iterator.KEYS = ITERATE_KEYS;
Iterator.VALUES = ITERATE_VALUES;
Iterator.ENTRIES = ITERATE_ENTRIES;

Iterator.prototype.inspect = Iterator.prototype.toSource = function () {
  return this.toString();
};

Iterator.prototype[ITERATOR_SYMBOL] = function () {
  return this;
};

function iteratorValue(type, k, v, iteratorResult) {
  var value = type === 0 ? k : type === 1 ? v : [k, v];
  iteratorResult ? iteratorResult.value = value : iteratorResult = {
    value: value,
    done: false
  };
  return iteratorResult;
}

function iteratorDone() {
  return {
    value: undefined,
    done: true
  };
}

function hasIterator(maybeIterable) {
  return !!getIteratorFn(maybeIterable);
}

function isIterator(maybeIterator) {
  return maybeIterator && typeof maybeIterator.next === 'function';
}

function getIterator(iterable) {
  var iteratorFn = getIteratorFn(iterable);
  return iteratorFn && iteratorFn.call(iterable);
}

function getIteratorFn(iterable) {
  var iteratorFn = iterable && (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL] || iterable[FAUX_ITERATOR_SYMBOL]);

  if (typeof iteratorFn === 'function') {
    return iteratorFn;
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

function isArrayLike(value) {
  if (Array.isArray(value) || typeof value === 'string') {
    return true;
  }

  return value && typeof value === 'object' && Number.isInteger(value.length) && value.length >= 0 && (value.length === 0 ? // Only {length: 0} is considered Array-like.
  Object.keys(value).length === 1 : // An object is only Array-like if it has a property where the last value
  // in the array-like may be found (which could be undefined).
  value.hasOwnProperty(value.length - 1));
}

var Seq =
/*@__PURE__*/
function (Collection$$1) {
  function Seq(value) {
    return value === null || value === undefined ? emptySequence() : isImmutable(value) ? value.toSeq() : seqFromValue(value);
  }

  if (Collection$$1) Seq.__proto__ = Collection$$1;
  Seq.prototype = Object.create(Collection$$1 && Collection$$1.prototype);
  Seq.prototype.constructor = Seq;

  Seq.prototype.toSeq = function toSeq() {
    return this;
  };

  Seq.prototype.toString = function toString() {
    return this.__toString('Seq {', '}');
  };

  Seq.prototype.cacheResult = function cacheResult() {
    if (!this._cache && this.__iterateUncached) {
      this._cache = this.entrySeq().toArray();
      this.size = this._cache.length;
    }

    return this;
  }; // abstract __iterateUncached(fn, reverse)


  Seq.prototype.__iterate = function __iterate(fn, reverse) {
    var cache = this._cache;

    if (cache) {
      var size = cache.length;
      var i = 0;

      while (i !== size) {
        var entry = cache[reverse ? size - ++i : i++];

        if (fn(entry[1], entry[0], this) === false) {
          break;
        }
      }

      return i;
    }

    return this.__iterateUncached(fn, reverse);
  }; // abstract __iteratorUncached(type, reverse)


  Seq.prototype.__iterator = function __iterator(type, reverse) {
    var cache = this._cache;

    if (cache) {
      var size = cache.length;
      var i = 0;
      return new Iterator(function () {
        if (i === size) {
          return iteratorDone();
        }

        var entry = cache[reverse ? size - ++i : i++];
        return iteratorValue(type, entry[0], entry[1]);
      });
    }

    return this.__iteratorUncached(type, reverse);
  };

  return Seq;
}(Collection);

var KeyedSeq =
/*@__PURE__*/
function (Seq) {
  function KeyedSeq(value) {
    return value === null || value === undefined ? emptySequence().toKeyedSeq() : isCollection(value) ? isKeyed(value) ? value.toSeq() : value.fromEntrySeq() : isRecord(value) ? value.toSeq() : keyedSeqFromValue(value);
  }

  if (Seq) KeyedSeq.__proto__ = Seq;
  KeyedSeq.prototype = Object.create(Seq && Seq.prototype);
  KeyedSeq.prototype.constructor = KeyedSeq;

  KeyedSeq.prototype.toKeyedSeq = function toKeyedSeq() {
    return this;
  };

  return KeyedSeq;
}(Seq);

var IndexedSeq =
/*@__PURE__*/
function (Seq) {
  function IndexedSeq(value) {
    return value === null || value === undefined ? emptySequence() : isCollection(value) ? isKeyed(value) ? value.entrySeq() : value.toIndexedSeq() : isRecord(value) ? value.toSeq().entrySeq() : indexedSeqFromValue(value);
  }

  if (Seq) IndexedSeq.__proto__ = Seq;
  IndexedSeq.prototype = Object.create(Seq && Seq.prototype);
  IndexedSeq.prototype.constructor = IndexedSeq;

  IndexedSeq.of = function of()
  /*...values*/
  {
    return IndexedSeq(arguments);
  };

  IndexedSeq.prototype.toIndexedSeq = function toIndexedSeq() {
    return this;
  };

  IndexedSeq.prototype.toString = function toString() {
    return this.__toString('Seq [', ']');
  };

  return IndexedSeq;
}(Seq);

var SetSeq =
/*@__PURE__*/
function (Seq) {
  function SetSeq(value) {
    return (isCollection(value) && !isAssociative(value) ? value : IndexedSeq(value)).toSetSeq();
  }

  if (Seq) SetSeq.__proto__ = Seq;
  SetSeq.prototype = Object.create(Seq && Seq.prototype);
  SetSeq.prototype.constructor = SetSeq;

  SetSeq.of = function of()
  /*...values*/
  {
    return SetSeq(arguments);
  };

  SetSeq.prototype.toSetSeq = function toSetSeq() {
    return this;
  };

  return SetSeq;
}(Seq);

Seq.isSeq = isSeq;
Seq.Keyed = KeyedSeq;
Seq.Set = SetSeq;
Seq.Indexed = IndexedSeq;
Seq.prototype[IS_SEQ_SYMBOL] = true; // #pragma Root Sequences

var ArraySeq =
/*@__PURE__*/
function (IndexedSeq) {
  function ArraySeq(array) {
    this._array = array;
    this.size = array.length;
  }

  if (IndexedSeq) ArraySeq.__proto__ = IndexedSeq;
  ArraySeq.prototype = Object.create(IndexedSeq && IndexedSeq.prototype);
  ArraySeq.prototype.constructor = ArraySeq;

  ArraySeq.prototype.get = function get(index, notSetValue) {
    return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
  };

  ArraySeq.prototype.__iterate = function __iterate(fn, reverse) {
    var array = this._array;
    var size = array.length;
    var i = 0;

    while (i !== size) {
      var ii = reverse ? size - ++i : i++;

      if (fn(array[ii], ii, this) === false) {
        break;
      }
    }

    return i;
  };

  ArraySeq.prototype.__iterator = function __iterator(type, reverse) {
    var array = this._array;
    var size = array.length;
    var i = 0;
    return new Iterator(function () {
      if (i === size) {
        return iteratorDone();
      }

      var ii = reverse ? size - ++i : i++;
      return iteratorValue(type, ii, array[ii]);
    });
  };

  return ArraySeq;
}(IndexedSeq);

var ObjectSeq =
/*@__PURE__*/
function (KeyedSeq) {
  function ObjectSeq(object) {
    var keys = Object.keys(object);
    this._object = object;
    this._keys = keys;
    this.size = keys.length;
  }

  if (KeyedSeq) ObjectSeq.__proto__ = KeyedSeq;
  ObjectSeq.prototype = Object.create(KeyedSeq && KeyedSeq.prototype);
  ObjectSeq.prototype.constructor = ObjectSeq;

  ObjectSeq.prototype.get = function get(key, notSetValue) {
    if (notSetValue !== undefined && !this.has(key)) {
      return notSetValue;
    }

    return this._object[key];
  };

  ObjectSeq.prototype.has = function has(key) {
    return hasOwnProperty.call(this._object, key);
  };

  ObjectSeq.prototype.__iterate = function __iterate(fn, reverse) {
    var object = this._object;
    var keys = this._keys;
    var size = keys.length;
    var i = 0;

    while (i !== size) {
      var key = keys[reverse ? size - ++i : i++];

      if (fn(object[key], key, this) === false) {
        break;
      }
    }

    return i;
  };

  ObjectSeq.prototype.__iterator = function __iterator(type, reverse) {
    var object = this._object;
    var keys = this._keys;
    var size = keys.length;
    var i = 0;
    return new Iterator(function () {
      if (i === size) {
        return iteratorDone();
      }

      var key = keys[reverse ? size - ++i : i++];
      return iteratorValue(type, key, object[key]);
    });
  };

  return ObjectSeq;
}(KeyedSeq);

ObjectSeq.prototype[IS_ORDERED_SYMBOL] = true;

var CollectionSeq =
/*@__PURE__*/
function (IndexedSeq) {
  function CollectionSeq(collection) {
    this._collection = collection;
    this.size = collection.length || collection.size;
  }

  if (IndexedSeq) CollectionSeq.__proto__ = IndexedSeq;
  CollectionSeq.prototype = Object.create(IndexedSeq && IndexedSeq.prototype);
  CollectionSeq.prototype.constructor = CollectionSeq;

  CollectionSeq.prototype.__iterateUncached = function __iterateUncached(fn, reverse) {
    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }

    var collection = this._collection;
    var iterator = getIterator(collection);
    var iterations = 0;

    if (isIterator(iterator)) {
      var step;

      while (!(step = iterator.next()).done) {
        if (fn(step.value, iterations++, this) === false) {
          break;
        }
      }
    }

    return iterations;
  };

  CollectionSeq.prototype.__iteratorUncached = function __iteratorUncached(type, reverse) {
    if (reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }

    var collection = this._collection;
    var iterator = getIterator(collection);

    if (!isIterator(iterator)) {
      return new Iterator(iteratorDone);
    }

    var iterations = 0;
    return new Iterator(function () {
      var step = iterator.next();
      return step.done ? step : iteratorValue(type, iterations++, step.value);
    });
  };

  return CollectionSeq;
}(IndexedSeq); // # pragma Helper functions


var EMPTY_SEQ;

function emptySequence() {
  return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
}

function keyedSeqFromValue(value) {
  var seq = Array.isArray(value) ? new ArraySeq(value) : hasIterator(value) ? new CollectionSeq(value) : undefined;

  if (seq) {
    return seq.fromEntrySeq();
  }

  if (typeof value === 'object') {
    return new ObjectSeq(value);
  }

  throw new TypeError('Expected Array or collection object of [k, v] entries, or keyed object: ' + value);
}

function indexedSeqFromValue(value) {
  var seq = maybeIndexedSeqFromValue(value);

  if (seq) {
    return seq;
  }

  throw new TypeError('Expected Array or collection object of values: ' + value);
}

function seqFromValue(value) {
  var seq = maybeIndexedSeqFromValue(value);

  if (seq) {
    return seq;
  }

  if (typeof value === 'object') {
    return new ObjectSeq(value);
  }

  throw new TypeError('Expected Array or collection object of values, or keyed object: ' + value);
}

function maybeIndexedSeqFromValue(value) {
  return isArrayLike(value) ? new ArraySeq(value) : hasIterator(value) ? new CollectionSeq(value) : undefined;
}

var IS_MAP_SYMBOL = '@@__IMMUTABLE_MAP__@@';

function isMap(maybeMap) {
  return Boolean(maybeMap && maybeMap[IS_MAP_SYMBOL]);
}

function isOrderedMap(maybeOrderedMap) {
  return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
}

function isValueObject(maybeValue) {
  return Boolean(maybeValue && typeof maybeValue.equals === 'function' && typeof maybeValue.hashCode === 'function');
}
/**
 * An extension of the "same-value" algorithm as [described for use by ES6 Map
 * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
 *
 * NaN is considered the same as NaN, however -0 and 0 are considered the same
 * value, which is different from the algorithm described by
 * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
 *
 * This is extended further to allow Objects to describe the values they
 * represent, by way of `valueOf` or `equals` (and `hashCode`).
 *
 * Note: because of this extension, the key equality of Immutable.Map and the
 * value equality of Immutable.Set will differ from ES6 Map and Set.
 *
 * ### Defining custom values
 *
 * The easiest way to describe the value an object represents is by implementing
 * `valueOf`. For example, `Date` represents a value by returning a unix
 * timestamp for `valueOf`:
 *
 *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
 *     var date2 = new Date(1234567890000);
 *     date1.valueOf(); // 1234567890000
 *     assert( date1 !== date2 );
 *     assert( Immutable.is( date1, date2 ) );
 *
 * Note: overriding `valueOf` may have other implications if you use this object
 * where JavaScript expects a primitive, such as implicit string coercion.
 *
 * For more complex types, especially collections, implementing `valueOf` may
 * not be performant. An alternative is to implement `equals` and `hashCode`.
 *
 * `equals` takes another object, presumably of similar type, and returns true
 * if it is equal. Equality is symmetrical, so the same result should be
 * returned if this and the argument are flipped.
 *
 *     assert( a.equals(b) === b.equals(a) );
 *
 * `hashCode` returns a 32bit integer number representing the object which will
 * be used to determine how to store the value object in a Map or Set. You must
 * provide both or neither methods, one must not exist without the other.
 *
 * Also, an important relationship between these methods must be upheld: if two
 * values are equal, they *must* return the same hashCode. If the values are not
 * equal, they might have the same hashCode; this is called a hash collision,
 * and while undesirable for performance reasons, it is acceptable.
 *
 *     if (a.equals(b)) {
 *       assert( a.hashCode() === b.hashCode() );
 *     }
 *
 * All Immutable collections are Value Objects: they implement `equals()`
 * and `hashCode()`.
 */


function is(valueA, valueB) {
  if (valueA === valueB || valueA !== valueA && valueB !== valueB) {
    return true;
  }

  if (!valueA || !valueB) {
    return false;
  }

  if (typeof valueA.valueOf === 'function' && typeof valueB.valueOf === 'function') {
    valueA = valueA.valueOf();
    valueB = valueB.valueOf();

    if (valueA === valueB || valueA !== valueA && valueB !== valueB) {
      return true;
    }

    if (!valueA || !valueB) {
      return false;
    }
  }

  return !!(isValueObject(valueA) && isValueObject(valueB) && valueA.equals(valueB));
}

var imul = typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ? Math.imul : function imul(a, b) {
  a |= 0; // int

  b |= 0; // int

  var c = a & 0xffff;
  var d = b & 0xffff; // Shift by 0 fixes the sign on the high part.

  return c * d + ((a >>> 16) * d + c * (b >>> 16) << 16 >>> 0) | 0; // int
}; // v8 has an optimization for storing 31-bit signed numbers.
// Values which have either 00 or 11 as the high order bits qualify.
// This function drops the highest order bit in a signed number, maintaining
// the sign bit.

function smi(i32) {
  return i32 >>> 1 & 0x40000000 | i32 & 0xbfffffff;
}

var defaultValueOf = Object.prototype.valueOf;

function hash(o) {
  switch (typeof o) {
    case 'boolean':
      // The hash values for built-in constants are a 1 value for each 5-byte
      // shift region expect for the first, which encodes the value. This
      // reduces the odds of a hash collision for these common values.
      return o ? 0x42108421 : 0x42108420;

    case 'number':
      return hashNumber(o);

    case 'string':
      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);

    case 'object':
    case 'function':
      if (o === null) {
        return 0x42108422;
      }

      if (typeof o.hashCode === 'function') {
        // Drop any high bits from accidentally long hash codes.
        return smi(o.hashCode(o));
      }

      if (o.valueOf !== defaultValueOf && typeof o.valueOf === 'function') {
        o = o.valueOf(o);
      }

      return hashJSObj(o);

    case 'undefined':
      return 0x42108423;

    default:
      if (typeof o.toString === 'function') {
        return hashString(o.toString());
      }

      throw new Error('Value type ' + typeof o + ' cannot be hashed.');
  }
} // Compress arbitrarily large numbers into smi hashes.


function hashNumber(n) {
  if (n !== n || n === Infinity) {
    return 0;
  }

  var hash = n | 0;

  if (hash !== n) {
    hash ^= n * 0xffffffff;
  }

  while (n > 0xffffffff) {
    n /= 0xffffffff;
    hash ^= n;
  }

  return smi(hash);
}

function cachedHashString(string) {
  var hashed = stringHashCache[string];

  if (hashed === undefined) {
    hashed = hashString(string);

    if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
      STRING_HASH_CACHE_SIZE = 0;
      stringHashCache = {};
    }

    STRING_HASH_CACHE_SIZE++;
    stringHashCache[string] = hashed;
  }

  return hashed;
} // http://jsperf.com/hashing-strings


function hashString(string) {
  // This is the hash from JVM
  // The hash code for a string is computed as
  // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
  // where s[i] is the ith character of the string and n is the length of
  // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
  // (exclusive) by dropping high bits.
  var hashed = 0;

  for (var ii = 0; ii < string.length; ii++) {
    hashed = 31 * hashed + string.charCodeAt(ii) | 0;
  }

  return smi(hashed);
}

function hashJSObj(obj) {
  var hashed;

  if (usingWeakMap) {
    hashed = weakMap.get(obj);

    if (hashed !== undefined) {
      return hashed;
    }
  }

  hashed = obj[UID_HASH_KEY];

  if (hashed !== undefined) {
    return hashed;
  }

  if (!canDefineProperty) {
    hashed = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];

    if (hashed !== undefined) {
      return hashed;
    }

    hashed = getIENodeHash(obj);

    if (hashed !== undefined) {
      return hashed;
    }
  }

  hashed = ++objHashUID;

  if (objHashUID & 0x40000000) {
    objHashUID = 0;
  }

  if (usingWeakMap) {
    weakMap.set(obj, hashed);
  } else if (isExtensible !== undefined && isExtensible(obj) === false) {
    throw new Error('Non-extensible objects are not allowed as keys.');
  } else if (canDefineProperty) {
    Object.defineProperty(obj, UID_HASH_KEY, {
      enumerable: false,
      configurable: false,
      writable: false,
      value: hashed
    });
  } else if (obj.propertyIsEnumerable !== undefined && obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
    // Since we can't define a non-enumerable property on the object
    // we'll hijack one of the less-used non-enumerable properties to
    // save our hash on it. Since this is a function it will not show up in
    // `JSON.stringify` which is what we want.
    obj.propertyIsEnumerable = function () {
      return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
    };

    obj.propertyIsEnumerable[UID_HASH_KEY] = hashed;
  } else if (obj.nodeType !== undefined) {
    // At this point we couldn't get the IE `uniqueID` to use as a hash
    // and we couldn't use a non-enumerable property to exploit the
    // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
    // itself.
    obj[UID_HASH_KEY] = hashed;
  } else {
    throw new Error('Unable to set a non-enumerable property on object.');
  }

  return hashed;
} // Get references to ES5 object methods.


var isExtensible = Object.isExtensible; // True if Object.defineProperty works as expected. IE8 fails this test.

var canDefineProperty = function () {
  try {
    Object.defineProperty({}, '@', {});
    return true;
  } catch (e) {
    return false;
  }
}(); // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
// and avoid memory leaks from the IE cloneNode bug.


function getIENodeHash(node) {
  if (node && node.nodeType > 0) {
    switch (node.nodeType) {
      case 1:
        // Element
        return node.uniqueID;

      case 9:
        // Document
        return node.documentElement && node.documentElement.uniqueID;
    }
  }
} // If possible, use a WeakMap.


var usingWeakMap = typeof WeakMap === 'function';
var weakMap;

if (usingWeakMap) {
  weakMap = new WeakMap();
}

var objHashUID = 0;
var UID_HASH_KEY = '__immutablehash__';

if (typeof Symbol === 'function') {
  UID_HASH_KEY = Symbol(UID_HASH_KEY);
}

var STRING_HASH_CACHE_MIN_STRLEN = 16;
var STRING_HASH_CACHE_MAX_SIZE = 255;
var STRING_HASH_CACHE_SIZE = 0;
var stringHashCache = {};

var ToKeyedSequence =
/*@__PURE__*/
function (KeyedSeq$$1) {
  function ToKeyedSequence(indexed, useKeys) {
    this._iter = indexed;
    this._useKeys = useKeys;
    this.size = indexed.size;
  }

  if (KeyedSeq$$1) ToKeyedSequence.__proto__ = KeyedSeq$$1;
  ToKeyedSequence.prototype = Object.create(KeyedSeq$$1 && KeyedSeq$$1.prototype);
  ToKeyedSequence.prototype.constructor = ToKeyedSequence;

  ToKeyedSequence.prototype.get = function get(key, notSetValue) {
    return this._iter.get(key, notSetValue);
  };

  ToKeyedSequence.prototype.has = function has(key) {
    return this._iter.has(key);
  };

  ToKeyedSequence.prototype.valueSeq = function valueSeq() {
    return this._iter.valueSeq();
  };

  ToKeyedSequence.prototype.reverse = function reverse() {
    var this$1 = this;
    var reversedSequence = reverseFactory(this, true);

    if (!this._useKeys) {
      reversedSequence.valueSeq = function () {
        return this$1._iter.toSeq().reverse();
      };
    }

    return reversedSequence;
  };

  ToKeyedSequence.prototype.map = function map(mapper, context) {
    var this$1 = this;
    var mappedSequence = mapFactory(this, mapper, context);

    if (!this._useKeys) {
      mappedSequence.valueSeq = function () {
        return this$1._iter.toSeq().map(mapper, context);
      };
    }

    return mappedSequence;
  };

  ToKeyedSequence.prototype.__iterate = function __iterate(fn, reverse) {
    var this$1 = this;
    return this._iter.__iterate(function (v, k) {
      return fn(v, k, this$1);
    }, reverse);
  };

  ToKeyedSequence.prototype.__iterator = function __iterator(type, reverse) {
    return this._iter.__iterator(type, reverse);
  };

  return ToKeyedSequence;
}(KeyedSeq);

ToKeyedSequence.prototype[IS_ORDERED_SYMBOL] = true;

var ToIndexedSequence =
/*@__PURE__*/
function (IndexedSeq$$1) {
  function ToIndexedSequence(iter) {
    this._iter = iter;
    this.size = iter.size;
  }

  if (IndexedSeq$$1) ToIndexedSequence.__proto__ = IndexedSeq$$1;
  ToIndexedSequence.prototype = Object.create(IndexedSeq$$1 && IndexedSeq$$1.prototype);
  ToIndexedSequence.prototype.constructor = ToIndexedSequence;

  ToIndexedSequence.prototype.includes = function includes(value) {
    return this._iter.includes(value);
  };

  ToIndexedSequence.prototype.__iterate = function __iterate(fn, reverse) {
    var this$1 = this;
    var i = 0;
    reverse && ensureSize(this);
    return this._iter.__iterate(function (v) {
      return fn(v, reverse ? this$1.size - ++i : i++, this$1);
    }, reverse);
  };

  ToIndexedSequence.prototype.__iterator = function __iterator(type, reverse) {
    var this$1 = this;

    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);

    var i = 0;
    reverse && ensureSize(this);
    return new Iterator(function () {
      var step = iterator.next();
      return step.done ? step : iteratorValue(type, reverse ? this$1.size - ++i : i++, step.value, step);
    });
  };

  return ToIndexedSequence;
}(IndexedSeq);

var ToSetSequence =
/*@__PURE__*/
function (SetSeq$$1) {
  function ToSetSequence(iter) {
    this._iter = iter;
    this.size = iter.size;
  }

  if (SetSeq$$1) ToSetSequence.__proto__ = SetSeq$$1;
  ToSetSequence.prototype = Object.create(SetSeq$$1 && SetSeq$$1.prototype);
  ToSetSequence.prototype.constructor = ToSetSequence;

  ToSetSequence.prototype.has = function has(key) {
    return this._iter.includes(key);
  };

  ToSetSequence.prototype.__iterate = function __iterate(fn, reverse) {
    var this$1 = this;
    return this._iter.__iterate(function (v) {
      return fn(v, v, this$1);
    }, reverse);
  };

  ToSetSequence.prototype.__iterator = function __iterator(type, reverse) {
    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);

    return new Iterator(function () {
      var step = iterator.next();
      return step.done ? step : iteratorValue(type, step.value, step.value, step);
    });
  };

  return ToSetSequence;
}(SetSeq);

var FromEntriesSequence =
/*@__PURE__*/
function (KeyedSeq$$1) {
  function FromEntriesSequence(entries) {
    this._iter = entries;
    this.size = entries.size;
  }

  if (KeyedSeq$$1) FromEntriesSequence.__proto__ = KeyedSeq$$1;
  FromEntriesSequence.prototype = Object.create(KeyedSeq$$1 && KeyedSeq$$1.prototype);
  FromEntriesSequence.prototype.constructor = FromEntriesSequence;

  FromEntriesSequence.prototype.entrySeq = function entrySeq() {
    return this._iter.toSeq();
  };

  FromEntriesSequence.prototype.__iterate = function __iterate(fn, reverse) {
    var this$1 = this;
    return this._iter.__iterate(function (entry) {
      // Check if entry exists first so array access doesn't throw for holes
      // in the parent iteration.
      if (entry) {
        validateEntry(entry);
        var indexedCollection = isCollection(entry);
        return fn(indexedCollection ? entry.get(1) : entry[1], indexedCollection ? entry.get(0) : entry[0], this$1);
      }
    }, reverse);
  };

  FromEntriesSequence.prototype.__iterator = function __iterator(type, reverse) {
    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);

    return new Iterator(function () {
      while (true) {
        var step = iterator.next();

        if (step.done) {
          return step;
        }

        var entry = step.value; // Check if entry exists first so array access doesn't throw for holes
        // in the parent iteration.

        if (entry) {
          validateEntry(entry);
          var indexedCollection = isCollection(entry);
          return iteratorValue(type, indexedCollection ? entry.get(0) : entry[0], indexedCollection ? entry.get(1) : entry[1], step);
        }
      }
    });
  };

  return FromEntriesSequence;
}(KeyedSeq);

ToIndexedSequence.prototype.cacheResult = ToKeyedSequence.prototype.cacheResult = ToSetSequence.prototype.cacheResult = FromEntriesSequence.prototype.cacheResult = cacheResultThrough;

function flipFactory(collection) {
  var flipSequence = makeSequence(collection);
  flipSequence._iter = collection;
  flipSequence.size = collection.size;

  flipSequence.flip = function () {
    return collection;
  };

  flipSequence.reverse = function () {
    var reversedSequence = collection.reverse.apply(this); // super.reverse()

    reversedSequence.flip = function () {
      return collection.reverse();
    };

    return reversedSequence;
  };

  flipSequence.has = function (key) {
    return collection.includes(key);
  };

  flipSequence.includes = function (key) {
    return collection.has(key);
  };

  flipSequence.cacheResult = cacheResultThrough;

  flipSequence.__iterateUncached = function (fn, reverse) {
    var this$1 = this;
    return collection.__iterate(function (v, k) {
      return fn(k, v, this$1) !== false;
    }, reverse);
  };

  flipSequence.__iteratorUncached = function (type, reverse) {
    if (type === ITERATE_ENTRIES) {
      var iterator = collection.__iterator(type, reverse);

      return new Iterator(function () {
        var step = iterator.next();

        if (!step.done) {
          var k = step.value[0];
          step.value[0] = step.value[1];
          step.value[1] = k;
        }

        return step;
      });
    }

    return collection.__iterator(type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES, reverse);
  };

  return flipSequence;
}

function mapFactory(collection, mapper, context) {
  var mappedSequence = makeSequence(collection);
  mappedSequence.size = collection.size;

  mappedSequence.has = function (key) {
    return collection.has(key);
  };

  mappedSequence.get = function (key, notSetValue) {
    var v = collection.get(key, NOT_SET);
    return v === NOT_SET ? notSetValue : mapper.call(context, v, key, collection);
  };

  mappedSequence.__iterateUncached = function (fn, reverse) {
    var this$1 = this;
    return collection.__iterate(function (v, k, c) {
      return fn(mapper.call(context, v, k, c), k, this$1) !== false;
    }, reverse);
  };

  mappedSequence.__iteratorUncached = function (type, reverse) {
    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);

    return new Iterator(function () {
      var step = iterator.next();

      if (step.done) {
        return step;
      }

      var entry = step.value;
      var key = entry[0];
      return iteratorValue(type, key, mapper.call(context, entry[1], key, collection), step);
    });
  };

  return mappedSequence;
}

function reverseFactory(collection, useKeys) {
  var this$1 = this;
  var reversedSequence = makeSequence(collection);
  reversedSequence._iter = collection;
  reversedSequence.size = collection.size;

  reversedSequence.reverse = function () {
    return collection;
  };

  if (collection.flip) {
    reversedSequence.flip = function () {
      var flipSequence = flipFactory(collection);

      flipSequence.reverse = function () {
        return collection.flip();
      };

      return flipSequence;
    };
  }

  reversedSequence.get = function (key, notSetValue) {
    return collection.get(useKeys ? key : -1 - key, notSetValue);
  };

  reversedSequence.has = function (key) {
    return collection.has(useKeys ? key : -1 - key);
  };

  reversedSequence.includes = function (value) {
    return collection.includes(value);
  };

  reversedSequence.cacheResult = cacheResultThrough;

  reversedSequence.__iterate = function (fn, reverse) {
    var this$1 = this;
    var i = 0;
    reverse && ensureSize(collection);
    return collection.__iterate(function (v, k) {
      return fn(v, useKeys ? k : reverse ? this$1.size - ++i : i++, this$1);
    }, !reverse);
  };

  reversedSequence.__iterator = function (type, reverse) {
    var i = 0;
    reverse && ensureSize(collection);

    var iterator = collection.__iterator(ITERATE_ENTRIES, !reverse);

    return new Iterator(function () {
      var step = iterator.next();

      if (step.done) {
        return step;
      }

      var entry = step.value;
      return iteratorValue(type, useKeys ? entry[0] : reverse ? this$1.size - ++i : i++, entry[1], step);
    });
  };

  return reversedSequence;
}

function filterFactory(collection, predicate, context, useKeys) {
  var filterSequence = makeSequence(collection);

  if (useKeys) {
    filterSequence.has = function (key) {
      var v = collection.get(key, NOT_SET);
      return v !== NOT_SET && !!predicate.call(context, v, key, collection);
    };

    filterSequence.get = function (key, notSetValue) {
      var v = collection.get(key, NOT_SET);
      return v !== NOT_SET && predicate.call(context, v, key, collection) ? v : notSetValue;
    };
  }

  filterSequence.__iterateUncached = function (fn, reverse) {
    var this$1 = this;
    var iterations = 0;

    collection.__iterate(function (v, k, c) {
      if (predicate.call(context, v, k, c)) {
        iterations++;
        return fn(v, useKeys ? k : iterations - 1, this$1);
      }
    }, reverse);

    return iterations;
  };

  filterSequence.__iteratorUncached = function (type, reverse) {
    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);

    var iterations = 0;
    return new Iterator(function () {
      while (true) {
        var step = iterator.next();

        if (step.done) {
          return step;
        }

        var entry = step.value;
        var key = entry[0];
        var value = entry[1];

        if (predicate.call(context, value, key, collection)) {
          return iteratorValue(type, useKeys ? key : iterations++, value, step);
        }
      }
    });
  };

  return filterSequence;
}

function countByFactory(collection, grouper, context) {
  var groups = Map().asMutable();

  collection.__iterate(function (v, k) {
    groups.update(grouper.call(context, v, k, collection), 0, function (a) {
      return a + 1;
    });
  });

  return groups.asImmutable();
}

function groupByFactory(collection, grouper, context) {
  var isKeyedIter = isKeyed(collection);
  var groups = (isOrdered(collection) ? OrderedMap() : Map()).asMutable();

  collection.__iterate(function (v, k) {
    groups.update(grouper.call(context, v, k, collection), function (a) {
      return a = a || [], a.push(isKeyedIter ? [k, v] : v), a;
    });
  });

  var coerce = collectionClass(collection);
  return groups.map(function (arr) {
    return reify(collection, coerce(arr));
  }).asImmutable();
}

function sliceFactory(collection, begin, end, useKeys) {
  var originalSize = collection.size;

  if (wholeSlice(begin, end, originalSize)) {
    return collection;
  }

  var resolvedBegin = resolveBegin(begin, originalSize);
  var resolvedEnd = resolveEnd(end, originalSize); // begin or end will be NaN if they were provided as negative numbers and
  // this collection's size is unknown. In that case, cache first so there is
  // a known size and these do not resolve to NaN.

  if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
    return sliceFactory(collection.toSeq().cacheResult(), begin, end, useKeys);
  } // Note: resolvedEnd is undefined when the original sequence's length is
  // unknown and this slice did not supply an end and should contain all
  // elements after resolvedBegin.
  // In that case, resolvedSize will be NaN and sliceSize will remain undefined.


  var resolvedSize = resolvedEnd - resolvedBegin;
  var sliceSize;

  if (resolvedSize === resolvedSize) {
    sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
  }

  var sliceSeq = makeSequence(collection); // If collection.size is undefined, the size of the realized sliceSeq is
  // unknown at this point unless the number of items to slice is 0

  sliceSeq.size = sliceSize === 0 ? sliceSize : collection.size && sliceSize || undefined;

  if (!useKeys && isSeq(collection) && sliceSize >= 0) {
    sliceSeq.get = function (index, notSetValue) {
      index = wrapIndex(this, index);
      return index >= 0 && index < sliceSize ? collection.get(index + resolvedBegin, notSetValue) : notSetValue;
    };
  }

  sliceSeq.__iterateUncached = function (fn, reverse) {
    var this$1 = this;

    if (sliceSize === 0) {
      return 0;
    }

    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }

    var skipped = 0;
    var isSkipping = true;
    var iterations = 0;

    collection.__iterate(function (v, k) {
      if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
        iterations++;
        return fn(v, useKeys ? k : iterations - 1, this$1) !== false && iterations !== sliceSize;
      }
    });

    return iterations;
  };

  sliceSeq.__iteratorUncached = function (type, reverse) {
    if (sliceSize !== 0 && reverse) {
      return this.cacheResult().__iterator(type, reverse);
    } // Don't bother instantiating parent iterator if taking 0.


    if (sliceSize === 0) {
      return new Iterator(iteratorDone);
    }

    var iterator = collection.__iterator(type, reverse);

    var skipped = 0;
    var iterations = 0;
    return new Iterator(function () {
      while (skipped++ < resolvedBegin) {
        iterator.next();
      }

      if (++iterations > sliceSize) {
        return iteratorDone();
      }

      var step = iterator.next();

      if (useKeys || type === ITERATE_VALUES || step.done) {
        return step;
      }

      if (type === ITERATE_KEYS) {
        return iteratorValue(type, iterations - 1, undefined, step);
      }

      return iteratorValue(type, iterations - 1, step.value[1], step);
    });
  };

  return sliceSeq;
}

function takeWhileFactory(collection, predicate, context) {
  var takeSequence = makeSequence(collection);

  takeSequence.__iterateUncached = function (fn, reverse) {
    var this$1 = this;

    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }

    var iterations = 0;

    collection.__iterate(function (v, k, c) {
      return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$1);
    });

    return iterations;
  };

  takeSequence.__iteratorUncached = function (type, reverse) {
    var this$1 = this;

    if (reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }

    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);

    var iterating = true;
    return new Iterator(function () {
      if (!iterating) {
        return iteratorDone();
      }

      var step = iterator.next();

      if (step.done) {
        return step;
      }

      var entry = step.value;
      var k = entry[0];
      var v = entry[1];

      if (!predicate.call(context, v, k, this$1)) {
        iterating = false;
        return iteratorDone();
      }

      return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
    });
  };

  return takeSequence;
}

function skipWhileFactory(collection, predicate, context, useKeys) {
  var skipSequence = makeSequence(collection);

  skipSequence.__iterateUncached = function (fn, reverse) {
    var this$1 = this;

    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }

    var isSkipping = true;
    var iterations = 0;

    collection.__iterate(function (v, k, c) {
      if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
        iterations++;
        return fn(v, useKeys ? k : iterations - 1, this$1);
      }
    });

    return iterations;
  };

  skipSequence.__iteratorUncached = function (type, reverse) {
    var this$1 = this;

    if (reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }

    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);

    var skipping = true;
    var iterations = 0;
    return new Iterator(function () {
      var step;
      var k;
      var v;

      do {
        step = iterator.next();

        if (step.done) {
          if (useKeys || type === ITERATE_VALUES) {
            return step;
          }

          if (type === ITERATE_KEYS) {
            return iteratorValue(type, iterations++, undefined, step);
          }

          return iteratorValue(type, iterations++, step.value[1], step);
        }

        var entry = step.value;
        k = entry[0];
        v = entry[1];
        skipping && (skipping = predicate.call(context, v, k, this$1));
      } while (skipping);

      return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
    });
  };

  return skipSequence;
}

function concatFactory(collection, values) {
  var isKeyedCollection = isKeyed(collection);
  var iters = [collection].concat(values).map(function (v) {
    if (!isCollection(v)) {
      v = isKeyedCollection ? keyedSeqFromValue(v) : indexedSeqFromValue(Array.isArray(v) ? v : [v]);
    } else if (isKeyedCollection) {
      v = KeyedCollection(v);
    }

    return v;
  }).filter(function (v) {
    return v.size !== 0;
  });

  if (iters.length === 0) {
    return collection;
  }

  if (iters.length === 1) {
    var singleton = iters[0];

    if (singleton === collection || isKeyedCollection && isKeyed(singleton) || isIndexed(collection) && isIndexed(singleton)) {
      return singleton;
    }
  }

  var concatSeq = new ArraySeq(iters);

  if (isKeyedCollection) {
    concatSeq = concatSeq.toKeyedSeq();
  } else if (!isIndexed(collection)) {
    concatSeq = concatSeq.toSetSeq();
  }

  concatSeq = concatSeq.flatten(true);
  concatSeq.size = iters.reduce(function (sum, seq) {
    if (sum !== undefined) {
      var size = seq.size;

      if (size !== undefined) {
        return sum + size;
      }
    }
  }, 0);
  return concatSeq;
}

function flattenFactory(collection, depth, useKeys) {
  var flatSequence = makeSequence(collection);

  flatSequence.__iterateUncached = function (fn, reverse) {
    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }

    var iterations = 0;
    var stopped = false;

    function flatDeep(iter, currentDepth) {
      iter.__iterate(function (v, k) {
        if ((!depth || currentDepth < depth) && isCollection(v)) {
          flatDeep(v, currentDepth + 1);
        } else {
          iterations++;

          if (fn(v, useKeys ? k : iterations - 1, flatSequence) === false) {
            stopped = true;
          }
        }

        return !stopped;
      }, reverse);
    }

    flatDeep(collection, 0);
    return iterations;
  };

  flatSequence.__iteratorUncached = function (type, reverse) {
    if (reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }

    var iterator = collection.__iterator(type, reverse);

    var stack = [];
    var iterations = 0;
    return new Iterator(function () {
      while (iterator) {
        var step = iterator.next();

        if (step.done !== false) {
          iterator = stack.pop();
          continue;
        }

        var v = step.value;

        if (type === ITERATE_ENTRIES) {
          v = v[1];
        }

        if ((!depth || stack.length < depth) && isCollection(v)) {
          stack.push(iterator);
          iterator = v.__iterator(type, reverse);
        } else {
          return useKeys ? step : iteratorValue(type, iterations++, v, step);
        }
      }

      return iteratorDone();
    });
  };

  return flatSequence;
}

function flatMapFactory(collection, mapper, context) {
  var coerce = collectionClass(collection);
  return collection.toSeq().map(function (v, k) {
    return coerce(mapper.call(context, v, k, collection));
  }).flatten(true);
}

function interposeFactory(collection, separator) {
  var interposedSequence = makeSequence(collection);
  interposedSequence.size = collection.size && collection.size * 2 - 1;

  interposedSequence.__iterateUncached = function (fn, reverse) {
    var this$1 = this;
    var iterations = 0;

    collection.__iterate(function (v) {
      return (!iterations || fn(separator, iterations++, this$1) !== false) && fn(v, iterations++, this$1) !== false;
    }, reverse);

    return iterations;
  };

  interposedSequence.__iteratorUncached = function (type, reverse) {
    var iterator = collection.__iterator(ITERATE_VALUES, reverse);

    var iterations = 0;
    var step;
    return new Iterator(function () {
      if (!step || iterations % 2) {
        step = iterator.next();

        if (step.done) {
          return step;
        }
      }

      return iterations % 2 ? iteratorValue(type, iterations++, separator) : iteratorValue(type, iterations++, step.value, step);
    });
  };

  return interposedSequence;
}

function sortFactory(collection, comparator, mapper) {
  if (!comparator) {
    comparator = defaultComparator;
  }

  var isKeyedCollection = isKeyed(collection);
  var index = 0;
  var entries = collection.toSeq().map(function (v, k) {
    return [k, v, index++, mapper ? mapper(v, k, collection) : v];
  }).valueSeq().toArray();
  entries.sort(function (a, b) {
    return comparator(a[3], b[3]) || a[2] - b[2];
  }).forEach(isKeyedCollection ? function (v, i) {
    entries[i].length = 2;
  } : function (v, i) {
    entries[i] = v[1];
  });
  return isKeyedCollection ? KeyedSeq(entries) : isIndexed(collection) ? IndexedSeq(entries) : SetSeq(entries);
}

function maxFactory(collection, comparator, mapper) {
  if (!comparator) {
    comparator = defaultComparator;
  }

  if (mapper) {
    var entry = collection.toSeq().map(function (v, k) {
      return [v, mapper(v, k, collection)];
    }).reduce(function (a, b) {
      return maxCompare(comparator, a[1], b[1]) ? b : a;
    });
    return entry && entry[0];
  }

  return collection.reduce(function (a, b) {
    return maxCompare(comparator, a, b) ? b : a;
  });
}

function maxCompare(comparator, a, b) {
  var comp = comparator(b, a); // b is considered the new max if the comparator declares them equal, but
  // they are not equal and b is in fact a nullish value.

  return comp === 0 && b !== a && (b === undefined || b === null || b !== b) || comp > 0;
}

function zipWithFactory(keyIter, zipper, iters, zipAll) {
  var zipSequence = makeSequence(keyIter);
  var sizes = new ArraySeq(iters).map(function (i) {
    return i.size;
  });
  zipSequence.size = zipAll ? sizes.max() : sizes.min(); // Note: this a generic base implementation of __iterate in terms of
  // __iterator which may be more generically useful in the future.

  zipSequence.__iterate = function (fn, reverse) {
    /* generic:
    var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
    var step;
    var iterations = 0;
    while (!(step = iterator.next()).done) {
      iterations++;
      if (fn(step.value[1], step.value[0], this) === false) {
        break;
      }
    }
    return iterations;
    */
    // indexed:
    var iterator = this.__iterator(ITERATE_VALUES, reverse);

    var step;
    var iterations = 0;

    while (!(step = iterator.next()).done) {
      if (fn(step.value, iterations++, this) === false) {
        break;
      }
    }

    return iterations;
  };

  zipSequence.__iteratorUncached = function (type, reverse) {
    var iterators = iters.map(function (i) {
      return i = Collection(i), getIterator(reverse ? i.reverse() : i);
    });
    var iterations = 0;
    var isDone = false;
    return new Iterator(function () {
      var steps;

      if (!isDone) {
        steps = iterators.map(function (i) {
          return i.next();
        });
        isDone = zipAll ? steps.every(function (s) {
          return s.done;
        }) : steps.some(function (s) {
          return s.done;
        });
      }

      if (isDone) {
        return iteratorDone();
      }

      return iteratorValue(type, iterations++, zipper.apply(null, steps.map(function (s) {
        return s.value;
      })));
    });
  };

  return zipSequence;
} // #pragma Helper Functions


function reify(iter, seq) {
  return iter === seq ? iter : isSeq(iter) ? seq : iter.constructor(seq);
}

function validateEntry(entry) {
  if (entry !== Object(entry)) {
    throw new TypeError('Expected [K, V] tuple: ' + entry);
  }
}

function collectionClass(collection) {
  return isKeyed(collection) ? KeyedCollection : isIndexed(collection) ? IndexedCollection : SetCollection;
}

function makeSequence(collection) {
  return Object.create((isKeyed(collection) ? KeyedSeq : isIndexed(collection) ? IndexedSeq : SetSeq).prototype);
}

function cacheResultThrough() {
  if (this._iter.cacheResult) {
    this._iter.cacheResult();

    this.size = this._iter.size;
    return this;
  }

  return Seq.prototype.cacheResult.call(this);
}

function defaultComparator(a, b) {
  if (a === undefined && b === undefined) {
    return 0;
  }

  if (a === undefined) {
    return 1;
  }

  if (b === undefined) {
    return -1;
  }

  return a > b ? 1 : a < b ? -1 : 0;
} // http://jsperf.com/copy-array-inline


function arrCopy(arr, offset) {
  offset = offset || 0;
  var len = Math.max(0, arr.length - offset);
  var newArr = new Array(len);

  for (var ii = 0; ii < len; ii++) {
    newArr[ii] = arr[ii + offset];
  }

  return newArr;
}

function invariant(condition, error) {
  if (!condition) {
    throw new Error(error);
  }
}

function assertNotInfinite(size) {
  invariant(size !== Infinity, 'Cannot perform this action with an infinite size.');
}

function coerceKeyPath(keyPath) {
  if (isArrayLike(keyPath) && typeof keyPath !== 'string') {
    return keyPath;
  }

  if (isOrdered(keyPath)) {
    return keyPath.toArray();
  }

  throw new TypeError('Invalid keyPath: expected Ordered Collection or Array: ' + keyPath);
}

function isPlainObj(value) {
  return value && (typeof value.constructor !== 'function' || value.constructor.name === 'Object');
}
/**
 * Returns true if the value is a potentially-persistent data structure, either
 * provided by Immutable.js or a plain Array or Object.
 */


function isDataStructure(value) {
  return typeof value === 'object' && (isImmutable(value) || Array.isArray(value) || isPlainObj(value));
}
/**
 * Converts a value to a string, adding quotes if a string was provided.
 */


function quoteString(value) {
  try {
    return typeof value === 'string' ? JSON.stringify(value) : String(value);
  } catch (_ignoreError) {
    return JSON.stringify(value);
  }
}

function has(collection, key) {
  return isImmutable(collection) ? collection.has(key) : isDataStructure(collection) && hasOwnProperty.call(collection, key);
}

function get(collection, key, notSetValue) {
  return isImmutable(collection) ? collection.get(key, notSetValue) : !has(collection, key) ? notSetValue : typeof collection.get === 'function' ? collection.get(key) : collection[key];
}

function shallowCopy(from) {
  if (Array.isArray(from)) {
    return arrCopy(from);
  }

  var to = {};

  for (var key in from) {
    if (hasOwnProperty.call(from, key)) {
      to[key] = from[key];
    }
  }

  return to;
}

function remove(collection, key) {
  if (!isDataStructure(collection)) {
    throw new TypeError('Cannot update non-data-structure value: ' + collection);
  }

  if (isImmutable(collection)) {
    if (!collection.remove) {
      throw new TypeError('Cannot update immutable value without .remove() method: ' + collection);
    }

    return collection.remove(key);
  }

  if (!hasOwnProperty.call(collection, key)) {
    return collection;
  }

  var collectionCopy = shallowCopy(collection);

  if (Array.isArray(collectionCopy)) {
    collectionCopy.splice(key, 1);
  } else {
    delete collectionCopy[key];
  }

  return collectionCopy;
}

function set(collection, key, value) {
  if (!isDataStructure(collection)) {
    throw new TypeError('Cannot update non-data-structure value: ' + collection);
  }

  if (isImmutable(collection)) {
    if (!collection.set) {
      throw new TypeError('Cannot update immutable value without .set() method: ' + collection);
    }

    return collection.set(key, value);
  }

  if (hasOwnProperty.call(collection, key) && value === collection[key]) {
    return collection;
  }

  var collectionCopy = shallowCopy(collection);
  collectionCopy[key] = value;
  return collectionCopy;
}

function updateIn(collection, keyPath, notSetValue, updater) {
  if (!updater) {
    updater = notSetValue;
    notSetValue = undefined;
  }

  var updatedValue = updateInDeeply(isImmutable(collection), collection, coerceKeyPath(keyPath), 0, notSetValue, updater);
  return updatedValue === NOT_SET ? notSetValue : updatedValue;
}

function updateInDeeply(inImmutable, existing, keyPath, i, notSetValue, updater) {
  var wasNotSet = existing === NOT_SET;

  if (i === keyPath.length) {
    var existingValue = wasNotSet ? notSetValue : existing;
    var newValue = updater(existingValue);
    return newValue === existingValue ? existing : newValue;
  }

  if (!wasNotSet && !isDataStructure(existing)) {
    throw new TypeError('Cannot update within non-data-structure value in path [' + keyPath.slice(0, i).map(quoteString) + ']: ' + existing);
  }

  var key = keyPath[i];
  var nextExisting = wasNotSet ? NOT_SET : get(existing, key, NOT_SET);
  var nextUpdated = updateInDeeply(nextExisting === NOT_SET ? inImmutable : isImmutable(nextExisting), nextExisting, keyPath, i + 1, notSetValue, updater);
  return nextUpdated === nextExisting ? existing : nextUpdated === NOT_SET ? remove(existing, key) : set(wasNotSet ? inImmutable ? emptyMap() : {} : existing, key, nextUpdated);
}

function setIn(collection, keyPath, value) {
  return updateIn(collection, keyPath, NOT_SET, function () {
    return value;
  });
}

function setIn$1(keyPath, v) {
  return setIn(this, keyPath, v);
}

function removeIn(collection, keyPath) {
  return updateIn(collection, keyPath, function () {
    return NOT_SET;
  });
}

function deleteIn(keyPath) {
  return removeIn(this, keyPath);
}

function update(collection, key, notSetValue, updater) {
  return updateIn(collection, [key], notSetValue, updater);
}

function update$1(key, notSetValue, updater) {
  return arguments.length === 1 ? key(this) : update(this, key, notSetValue, updater);
}

function updateIn$1(keyPath, notSetValue, updater) {
  return updateIn(this, keyPath, notSetValue, updater);
}

function merge() {
  var iters = [],
      len = arguments.length;

  while (len--) iters[len] = arguments[len];

  return mergeIntoKeyedWith(this, iters);
}

function mergeWith(merger) {
  var iters = [],
      len = arguments.length - 1;

  while (len-- > 0) iters[len] = arguments[len + 1];

  if (typeof merger !== 'function') {
    throw new TypeError('Invalid merger function: ' + merger);
  }

  return mergeIntoKeyedWith(this, iters, merger);
}

function mergeIntoKeyedWith(collection, collections, merger) {
  var iters = [];

  for (var ii = 0; ii < collections.length; ii++) {
    var collection$1 = KeyedCollection(collections[ii]);

    if (collection$1.size !== 0) {
      iters.push(collection$1);
    }
  }

  if (iters.length === 0) {
    return collection;
  }

  if (collection.toSeq().size === 0 && !collection.__ownerID && iters.length === 1) {
    return collection.constructor(iters[0]);
  }

  return collection.withMutations(function (collection) {
    var mergeIntoCollection = merger ? function (value, key) {
      update(collection, key, NOT_SET, function (oldVal) {
        return oldVal === NOT_SET ? value : merger(oldVal, value, key);
      });
    } : function (value, key) {
      collection.set(key, value);
    };

    for (var ii = 0; ii < iters.length; ii++) {
      iters[ii].forEach(mergeIntoCollection);
    }
  });
}

function merge$1(collection) {
  var sources = [],
      len = arguments.length - 1;

  while (len-- > 0) sources[len] = arguments[len + 1];

  return mergeWithSources(collection, sources);
}

function mergeWith$1(merger, collection) {
  var sources = [],
      len = arguments.length - 2;

  while (len-- > 0) sources[len] = arguments[len + 2];

  return mergeWithSources(collection, sources, merger);
}

function mergeDeep(collection) {
  var sources = [],
      len = arguments.length - 1;

  while (len-- > 0) sources[len] = arguments[len + 1];

  return mergeDeepWithSources(collection, sources);
}

function mergeDeepWith(merger, collection) {
  var sources = [],
      len = arguments.length - 2;

  while (len-- > 0) sources[len] = arguments[len + 2];

  return mergeDeepWithSources(collection, sources, merger);
}

function mergeDeepWithSources(collection, sources, merger) {
  return mergeWithSources(collection, sources, deepMergerWith(merger));
}

function mergeWithSources(collection, sources, merger) {
  if (!isDataStructure(collection)) {
    throw new TypeError('Cannot merge into non-data-structure value: ' + collection);
  }

  if (isImmutable(collection)) {
    return typeof merger === 'function' && collection.mergeWith ? collection.mergeWith.apply(collection, [merger].concat(sources)) : collection.merge ? collection.merge.apply(collection, sources) : collection.concat.apply(collection, sources);
  }

  var isArray = Array.isArray(collection);
  var merged = collection;
  var Collection$$1 = isArray ? IndexedCollection : KeyedCollection;
  var mergeItem = isArray ? function (value) {
    // Copy on write
    if (merged === collection) {
      merged = shallowCopy(merged);
    }

    merged.push(value);
  } : function (value, key) {
    var hasVal = hasOwnProperty.call(merged, key);
    var nextVal = hasVal && merger ? merger(merged[key], value, key) : value;

    if (!hasVal || nextVal !== merged[key]) {
      // Copy on write
      if (merged === collection) {
        merged = shallowCopy(merged);
      }

      merged[key] = nextVal;
    }
  };

  for (var i = 0; i < sources.length; i++) {
    Collection$$1(sources[i]).forEach(mergeItem);
  }

  return merged;
}

function deepMergerWith(merger) {
  function deepMerger(oldValue, newValue, key) {
    return isDataStructure(oldValue) && isDataStructure(newValue) ? mergeWithSources(oldValue, [newValue], deepMerger) : merger ? merger(oldValue, newValue, key) : newValue;
  }

  return deepMerger;
}

function mergeDeep$1() {
  var iters = [],
      len = arguments.length;

  while (len--) iters[len] = arguments[len];

  return mergeDeepWithSources(this, iters);
}

function mergeDeepWith$1(merger) {
  var iters = [],
      len = arguments.length - 1;

  while (len-- > 0) iters[len] = arguments[len + 1];

  return mergeDeepWithSources(this, iters, merger);
}

function mergeIn(keyPath) {
  var iters = [],
      len = arguments.length - 1;

  while (len-- > 0) iters[len] = arguments[len + 1];

  return updateIn(this, keyPath, emptyMap(), function (m) {
    return mergeWithSources(m, iters);
  });
}

function mergeDeepIn(keyPath) {
  var iters = [],
      len = arguments.length - 1;

  while (len-- > 0) iters[len] = arguments[len + 1];

  return updateIn(this, keyPath, emptyMap(), function (m) {
    return mergeDeepWithSources(m, iters);
  });
}

function withMutations(fn) {
  var mutable = this.asMutable();
  fn(mutable);
  return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
}

function asMutable() {
  return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
}

function asImmutable() {
  return this.__ensureOwner();
}

function wasAltered() {
  return this.__altered;
}

var Map =
/*@__PURE__*/
function (KeyedCollection$$1) {
  function Map(value) {
    return value === null || value === undefined ? emptyMap() : isMap(value) && !isOrdered(value) ? value : emptyMap().withMutations(function (map) {
      var iter = KeyedCollection$$1(value);
      assertNotInfinite(iter.size);
      iter.forEach(function (v, k) {
        return map.set(k, v);
      });
    });
  }

  if (KeyedCollection$$1) Map.__proto__ = KeyedCollection$$1;
  Map.prototype = Object.create(KeyedCollection$$1 && KeyedCollection$$1.prototype);
  Map.prototype.constructor = Map;

  Map.of = function of() {
    var keyValues = [],
        len = arguments.length;

    while (len--) keyValues[len] = arguments[len];

    return emptyMap().withMutations(function (map) {
      for (var i = 0; i < keyValues.length; i += 2) {
        if (i + 1 >= keyValues.length) {
          throw new Error('Missing value for key: ' + keyValues[i]);
        }

        map.set(keyValues[i], keyValues[i + 1]);
      }
    });
  };

  Map.prototype.toString = function toString() {
    return this.__toString('Map {', '}');
  }; // @pragma Access


  Map.prototype.get = function get(k, notSetValue) {
    return this._root ? this._root.get(0, undefined, k, notSetValue) : notSetValue;
  }; // @pragma Modification


  Map.prototype.set = function set(k, v) {
    return updateMap(this, k, v);
  };

  Map.prototype.remove = function remove(k) {
    return updateMap(this, k, NOT_SET);
  };

  Map.prototype.deleteAll = function deleteAll(keys) {
    var collection = Collection(keys);

    if (collection.size === 0) {
      return this;
    }

    return this.withMutations(function (map) {
      collection.forEach(function (key) {
        return map.remove(key);
      });
    });
  };

  Map.prototype.clear = function clear() {
    if (this.size === 0) {
      return this;
    }

    if (this.__ownerID) {
      this.size = 0;
      this._root = null;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }

    return emptyMap();
  }; // @pragma Composition


  Map.prototype.sort = function sort(comparator) {
    // Late binding
    return OrderedMap(sortFactory(this, comparator));
  };

  Map.prototype.sortBy = function sortBy(mapper, comparator) {
    // Late binding
    return OrderedMap(sortFactory(this, comparator, mapper));
  };

  Map.prototype.map = function map(mapper, context) {
    return this.withMutations(function (map) {
      map.forEach(function (value, key) {
        map.set(key, mapper.call(context, value, key, map));
      });
    });
  }; // @pragma Mutability


  Map.prototype.__iterator = function __iterator(type, reverse) {
    return new MapIterator(this, type, reverse);
  };

  Map.prototype.__iterate = function __iterate(fn, reverse) {
    var this$1 = this;
    var iterations = 0;
    this._root && this._root.iterate(function (entry) {
      iterations++;
      return fn(entry[1], entry[0], this$1);
    }, reverse);
    return iterations;
  };

  Map.prototype.__ensureOwner = function __ensureOwner(ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }

    if (!ownerID) {
      if (this.size === 0) {
        return emptyMap();
      }

      this.__ownerID = ownerID;
      this.__altered = false;
      return this;
    }

    return makeMap(this.size, this._root, ownerID, this.__hash);
  };

  return Map;
}(KeyedCollection);

Map.isMap = isMap;
var MapPrototype = Map.prototype;
MapPrototype[IS_MAP_SYMBOL] = true;
MapPrototype[DELETE] = MapPrototype.remove;
MapPrototype.removeAll = MapPrototype.deleteAll;
MapPrototype.setIn = setIn$1;
MapPrototype.removeIn = MapPrototype.deleteIn = deleteIn;
MapPrototype.update = update$1;
MapPrototype.updateIn = updateIn$1;
MapPrototype.merge = MapPrototype.concat = merge;
MapPrototype.mergeWith = mergeWith;
MapPrototype.mergeDeep = mergeDeep$1;
MapPrototype.mergeDeepWith = mergeDeepWith$1;
MapPrototype.mergeIn = mergeIn;
MapPrototype.mergeDeepIn = mergeDeepIn;
MapPrototype.withMutations = withMutations;
MapPrototype.wasAltered = wasAltered;
MapPrototype.asImmutable = asImmutable;
MapPrototype['@@transducer/init'] = MapPrototype.asMutable = asMutable;

MapPrototype['@@transducer/step'] = function (result, arr) {
  return result.set(arr[0], arr[1]);
};

MapPrototype['@@transducer/result'] = function (obj) {
  return obj.asImmutable();
}; // #pragma Trie Nodes


var ArrayMapNode = function ArrayMapNode(ownerID, entries) {
  this.ownerID = ownerID;
  this.entries = entries;
};

ArrayMapNode.prototype.get = function get(shift, keyHash, key, notSetValue) {
  var entries = this.entries;

  for (var ii = 0, len = entries.length; ii < len; ii++) {
    if (is(key, entries[ii][0])) {
      return entries[ii][1];
    }
  }

  return notSetValue;
};

ArrayMapNode.prototype.update = function update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  var removed = value === NOT_SET;
  var entries = this.entries;
  var idx = 0;
  var len = entries.length;

  for (; idx < len; idx++) {
    if (is(key, entries[idx][0])) {
      break;
    }
  }

  var exists = idx < len;

  if (exists ? entries[idx][1] === value : removed) {
    return this;
  }

  SetRef(didAlter);
  (removed || !exists) && SetRef(didChangeSize);

  if (removed && entries.length === 1) {
    return; // undefined
  }

  if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
    return createNodes(ownerID, entries, key, value);
  }

  var isEditable = ownerID && ownerID === this.ownerID;
  var newEntries = isEditable ? entries : arrCopy(entries);

  if (exists) {
    if (removed) {
      idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop();
    } else {
      newEntries[idx] = [key, value];
    }
  } else {
    newEntries.push([key, value]);
  }

  if (isEditable) {
    this.entries = newEntries;
    return this;
  }

  return new ArrayMapNode(ownerID, newEntries);
};

var BitmapIndexedNode = function BitmapIndexedNode(ownerID, bitmap, nodes) {
  this.ownerID = ownerID;
  this.bitmap = bitmap;
  this.nodes = nodes;
};

BitmapIndexedNode.prototype.get = function get(shift, keyHash, key, notSetValue) {
  if (keyHash === undefined) {
    keyHash = hash(key);
  }

  var bit = 1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK);
  var bitmap = this.bitmap;
  return (bitmap & bit) === 0 ? notSetValue : this.nodes[popCount(bitmap & bit - 1)].get(shift + SHIFT, keyHash, key, notSetValue);
};

BitmapIndexedNode.prototype.update = function update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  if (keyHash === undefined) {
    keyHash = hash(key);
  }

  var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
  var bit = 1 << keyHashFrag;
  var bitmap = this.bitmap;
  var exists = (bitmap & bit) !== 0;

  if (!exists && value === NOT_SET) {
    return this;
  }

  var idx = popCount(bitmap & bit - 1);
  var nodes = this.nodes;
  var node = exists ? nodes[idx] : undefined;
  var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);

  if (newNode === node) {
    return this;
  }

  if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
    return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
  }

  if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
    return nodes[idx ^ 1];
  }

  if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
    return newNode;
  }

  var isEditable = ownerID && ownerID === this.ownerID;
  var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
  var newNodes = exists ? newNode ? setAt(nodes, idx, newNode, isEditable) : spliceOut(nodes, idx, isEditable) : spliceIn(nodes, idx, newNode, isEditable);

  if (isEditable) {
    this.bitmap = newBitmap;
    this.nodes = newNodes;
    return this;
  }

  return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
};

var HashArrayMapNode = function HashArrayMapNode(ownerID, count, nodes) {
  this.ownerID = ownerID;
  this.count = count;
  this.nodes = nodes;
};

HashArrayMapNode.prototype.get = function get(shift, keyHash, key, notSetValue) {
  if (keyHash === undefined) {
    keyHash = hash(key);
  }

  var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
  var node = this.nodes[idx];
  return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
};

HashArrayMapNode.prototype.update = function update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  if (keyHash === undefined) {
    keyHash = hash(key);
  }

  var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
  var removed = value === NOT_SET;
  var nodes = this.nodes;
  var node = nodes[idx];

  if (removed && !node) {
    return this;
  }

  var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);

  if (newNode === node) {
    return this;
  }

  var newCount = this.count;

  if (!node) {
    newCount++;
  } else if (!newNode) {
    newCount--;

    if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
      return packNodes(ownerID, nodes, newCount, idx);
    }
  }

  var isEditable = ownerID && ownerID === this.ownerID;
  var newNodes = setAt(nodes, idx, newNode, isEditable);

  if (isEditable) {
    this.count = newCount;
    this.nodes = newNodes;
    return this;
  }

  return new HashArrayMapNode(ownerID, newCount, newNodes);
};

var HashCollisionNode = function HashCollisionNode(ownerID, keyHash, entries) {
  this.ownerID = ownerID;
  this.keyHash = keyHash;
  this.entries = entries;
};

HashCollisionNode.prototype.get = function get(shift, keyHash, key, notSetValue) {
  var entries = this.entries;

  for (var ii = 0, len = entries.length; ii < len; ii++) {
    if (is(key, entries[ii][0])) {
      return entries[ii][1];
    }
  }

  return notSetValue;
};

HashCollisionNode.prototype.update = function update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  if (keyHash === undefined) {
    keyHash = hash(key);
  }

  var removed = value === NOT_SET;

  if (keyHash !== this.keyHash) {
    if (removed) {
      return this;
    }

    SetRef(didAlter);
    SetRef(didChangeSize);
    return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
  }

  var entries = this.entries;
  var idx = 0;
  var len = entries.length;

  for (; idx < len; idx++) {
    if (is(key, entries[idx][0])) {
      break;
    }
  }

  var exists = idx < len;

  if (exists ? entries[idx][1] === value : removed) {
    return this;
  }

  SetRef(didAlter);
  (removed || !exists) && SetRef(didChangeSize);

  if (removed && len === 2) {
    return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
  }

  var isEditable = ownerID && ownerID === this.ownerID;
  var newEntries = isEditable ? entries : arrCopy(entries);

  if (exists) {
    if (removed) {
      idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop();
    } else {
      newEntries[idx] = [key, value];
    }
  } else {
    newEntries.push([key, value]);
  }

  if (isEditable) {
    this.entries = newEntries;
    return this;
  }

  return new HashCollisionNode(ownerID, this.keyHash, newEntries);
};

var ValueNode = function ValueNode(ownerID, keyHash, entry) {
  this.ownerID = ownerID;
  this.keyHash = keyHash;
  this.entry = entry;
};

ValueNode.prototype.get = function get(shift, keyHash, key, notSetValue) {
  return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
};

ValueNode.prototype.update = function update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  var removed = value === NOT_SET;
  var keyMatch = is(key, this.entry[0]);

  if (keyMatch ? value === this.entry[1] : removed) {
    return this;
  }

  SetRef(didAlter);

  if (removed) {
    SetRef(didChangeSize);
    return; // undefined
  }

  if (keyMatch) {
    if (ownerID && ownerID === this.ownerID) {
      this.entry[1] = value;
      return this;
    }

    return new ValueNode(ownerID, this.keyHash, [key, value]);
  }

  SetRef(didChangeSize);
  return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
}; // #pragma Iterators


ArrayMapNode.prototype.iterate = HashCollisionNode.prototype.iterate = function (fn, reverse) {
  var entries = this.entries;

  for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
    if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
      return false;
    }
  }
};

BitmapIndexedNode.prototype.iterate = HashArrayMapNode.prototype.iterate = function (fn, reverse) {
  var nodes = this.nodes;

  for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
    var node = nodes[reverse ? maxIndex - ii : ii];

    if (node && node.iterate(fn, reverse) === false) {
      return false;
    }
  }
}; // eslint-disable-next-line no-unused-vars


ValueNode.prototype.iterate = function (fn, reverse) {
  return fn(this.entry);
};

var MapIterator =
/*@__PURE__*/
function (Iterator$$1) {
  function MapIterator(map, type, reverse) {
    this._type = type;
    this._reverse = reverse;
    this._stack = map._root && mapIteratorFrame(map._root);
  }

  if (Iterator$$1) MapIterator.__proto__ = Iterator$$1;
  MapIterator.prototype = Object.create(Iterator$$1 && Iterator$$1.prototype);
  MapIterator.prototype.constructor = MapIterator;

  MapIterator.prototype.next = function next() {
    var type = this._type;
    var stack = this._stack;

    while (stack) {
      var node = stack.node;
      var index = stack.index++;
      var maxIndex = void 0;

      if (node.entry) {
        if (index === 0) {
          return mapIteratorValue(type, node.entry);
        }
      } else if (node.entries) {
        maxIndex = node.entries.length - 1;

        if (index <= maxIndex) {
          return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
        }
      } else {
        maxIndex = node.nodes.length - 1;

        if (index <= maxIndex) {
          var subNode = node.nodes[this._reverse ? maxIndex - index : index];

          if (subNode) {
            if (subNode.entry) {
              return mapIteratorValue(type, subNode.entry);
            }

            stack = this._stack = mapIteratorFrame(subNode, stack);
          }

          continue;
        }
      }

      stack = this._stack = this._stack.__prev;
    }

    return iteratorDone();
  };

  return MapIterator;
}(Iterator);

function mapIteratorValue(type, entry) {
  return iteratorValue(type, entry[0], entry[1]);
}

function mapIteratorFrame(node, prev) {
  return {
    node: node,
    index: 0,
    __prev: prev
  };
}

function makeMap(size, root, ownerID, hash$$1) {
  var map = Object.create(MapPrototype);
  map.size = size;
  map._root = root;
  map.__ownerID = ownerID;
  map.__hash = hash$$1;
  map.__altered = false;
  return map;
}

var EMPTY_MAP;

function emptyMap() {
  return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
}

function updateMap(map, k, v) {
  var newRoot;
  var newSize;

  if (!map._root) {
    if (v === NOT_SET) {
      return map;
    }

    newSize = 1;
    newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
  } else {
    var didChangeSize = MakeRef();
    var didAlter = MakeRef();
    newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);

    if (!didAlter.value) {
      return map;
    }

    newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
  }

  if (map.__ownerID) {
    map.size = newSize;
    map._root = newRoot;
    map.__hash = undefined;
    map.__altered = true;
    return map;
  }

  return newRoot ? makeMap(newSize, newRoot) : emptyMap();
}

function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  if (!node) {
    if (value === NOT_SET) {
      return node;
    }

    SetRef(didAlter);
    SetRef(didChangeSize);
    return new ValueNode(ownerID, keyHash, [key, value]);
  }

  return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
}

function isLeafNode(node) {
  return node.constructor === ValueNode || node.constructor === HashCollisionNode;
}

function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
  if (node.keyHash === keyHash) {
    return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
  }

  var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
  var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
  var newNode;
  var nodes = idx1 === idx2 ? [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] : (newNode = new ValueNode(ownerID, keyHash, entry), idx1 < idx2 ? [node, newNode] : [newNode, node]);
  return new BitmapIndexedNode(ownerID, 1 << idx1 | 1 << idx2, nodes);
}

function createNodes(ownerID, entries, key, value) {
  if (!ownerID) {
    ownerID = new OwnerID();
  }

  var node = new ValueNode(ownerID, hash(key), [key, value]);

  for (var ii = 0; ii < entries.length; ii++) {
    var entry = entries[ii];
    node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
  }

  return node;
}

function packNodes(ownerID, nodes, count, excluding) {
  var bitmap = 0;
  var packedII = 0;
  var packedNodes = new Array(count);

  for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
    var node = nodes[ii];

    if (node !== undefined && ii !== excluding) {
      bitmap |= bit;
      packedNodes[packedII++] = node;
    }
  }

  return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
}

function expandNodes(ownerID, nodes, bitmap, including, node) {
  var count = 0;
  var expandedNodes = new Array(SIZE);

  for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
    expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
  }

  expandedNodes[including] = node;
  return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
}

function popCount(x) {
  x -= x >> 1 & 0x55555555;
  x = (x & 0x33333333) + (x >> 2 & 0x33333333);
  x = x + (x >> 4) & 0x0f0f0f0f;
  x += x >> 8;
  x += x >> 16;
  return x & 0x7f;
}

function setAt(array, idx, val, canEdit) {
  var newArray = canEdit ? array : arrCopy(array);
  newArray[idx] = val;
  return newArray;
}

function spliceIn(array, idx, val, canEdit) {
  var newLen = array.length + 1;

  if (canEdit && idx + 1 === newLen) {
    array[idx] = val;
    return array;
  }

  var newArray = new Array(newLen);
  var after = 0;

  for (var ii = 0; ii < newLen; ii++) {
    if (ii === idx) {
      newArray[ii] = val;
      after = -1;
    } else {
      newArray[ii] = array[ii + after];
    }
  }

  return newArray;
}

function spliceOut(array, idx, canEdit) {
  var newLen = array.length - 1;

  if (canEdit && idx === newLen) {
    array.pop();
    return array;
  }

  var newArray = new Array(newLen);
  var after = 0;

  for (var ii = 0; ii < newLen; ii++) {
    if (ii === idx) {
      after = 1;
    }

    newArray[ii] = array[ii + after];
  }

  return newArray;
}

var MAX_ARRAY_MAP_SIZE = SIZE / 4;
var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;
var IS_LIST_SYMBOL = '@@__IMMUTABLE_LIST__@@';

function isList(maybeList) {
  return Boolean(maybeList && maybeList[IS_LIST_SYMBOL]);
}

var List =
/*@__PURE__*/
function (IndexedCollection$$1) {
  function List(value) {
    var empty = emptyList();

    if (value === null || value === undefined) {
      return empty;
    }

    if (isList(value)) {
      return value;
    }

    var iter = IndexedCollection$$1(value);
    var size = iter.size;

    if (size === 0) {
      return empty;
    }

    assertNotInfinite(size);

    if (size > 0 && size < SIZE) {
      return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
    }

    return empty.withMutations(function (list) {
      list.setSize(size);
      iter.forEach(function (v, i) {
        return list.set(i, v);
      });
    });
  }

  if (IndexedCollection$$1) List.__proto__ = IndexedCollection$$1;
  List.prototype = Object.create(IndexedCollection$$1 && IndexedCollection$$1.prototype);
  List.prototype.constructor = List;

  List.of = function of()
  /*...values*/
  {
    return this(arguments);
  };

  List.prototype.toString = function toString() {
    return this.__toString('List [', ']');
  }; // @pragma Access


  List.prototype.get = function get(index, notSetValue) {
    index = wrapIndex(this, index);

    if (index >= 0 && index < this.size) {
      index += this._origin;
      var node = listNodeFor(this, index);
      return node && node.array[index & MASK];
    }

    return notSetValue;
  }; // @pragma Modification


  List.prototype.set = function set(index, value) {
    return updateList(this, index, value);
  };

  List.prototype.remove = function remove(index) {
    return !this.has(index) ? this : index === 0 ? this.shift() : index === this.size - 1 ? this.pop() : this.splice(index, 1);
  };

  List.prototype.insert = function insert(index, value) {
    return this.splice(index, 0, value);
  };

  List.prototype.clear = function clear() {
    if (this.size === 0) {
      return this;
    }

    if (this.__ownerID) {
      this.size = this._origin = this._capacity = 0;
      this._level = SHIFT;
      this._root = this._tail = null;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }

    return emptyList();
  };

  List.prototype.push = function push()
  /*...values*/
  {
    var values = arguments;
    var oldSize = this.size;
    return this.withMutations(function (list) {
      setListBounds(list, 0, oldSize + values.length);

      for (var ii = 0; ii < values.length; ii++) {
        list.set(oldSize + ii, values[ii]);
      }
    });
  };

  List.prototype.pop = function pop() {
    return setListBounds(this, 0, -1);
  };

  List.prototype.unshift = function unshift()
  /*...values*/
  {
    var values = arguments;
    return this.withMutations(function (list) {
      setListBounds(list, -values.length);

      for (var ii = 0; ii < values.length; ii++) {
        list.set(ii, values[ii]);
      }
    });
  };

  List.prototype.shift = function shift() {
    return setListBounds(this, 1);
  }; // @pragma Composition


  List.prototype.concat = function concat()
  /*...collections*/
  {
    var arguments$1 = arguments;
    var seqs = [];

    for (var i = 0; i < arguments.length; i++) {
      var argument = arguments$1[i];
      var seq = IndexedCollection$$1(typeof argument !== 'string' && hasIterator(argument) ? argument : [argument]);

      if (seq.size !== 0) {
        seqs.push(seq);
      }
    }

    if (seqs.length === 0) {
      return this;
    }

    if (this.size === 0 && !this.__ownerID && seqs.length === 1) {
      return this.constructor(seqs[0]);
    }

    return this.withMutations(function (list) {
      seqs.forEach(function (seq) {
        return seq.forEach(function (value) {
          return list.push(value);
        });
      });
    });
  };

  List.prototype.setSize = function setSize(size) {
    return setListBounds(this, 0, size);
  };

  List.prototype.map = function map(mapper, context) {
    var this$1 = this;
    return this.withMutations(function (list) {
      for (var i = 0; i < this$1.size; i++) {
        list.set(i, mapper.call(context, list.get(i), i, list));
      }
    });
  }; // @pragma Iteration


  List.prototype.slice = function slice(begin, end) {
    var size = this.size;

    if (wholeSlice(begin, end, size)) {
      return this;
    }

    return setListBounds(this, resolveBegin(begin, size), resolveEnd(end, size));
  };

  List.prototype.__iterator = function __iterator(type, reverse) {
    var index = reverse ? this.size : 0;
    var values = iterateList(this, reverse);
    return new Iterator(function () {
      var value = values();
      return value === DONE ? iteratorDone() : iteratorValue(type, reverse ? --index : index++, value);
    });
  };

  List.prototype.__iterate = function __iterate(fn, reverse) {
    var index = reverse ? this.size : 0;
    var values = iterateList(this, reverse);
    var value;

    while ((value = values()) !== DONE) {
      if (fn(value, reverse ? --index : index++, this) === false) {
        break;
      }
    }

    return index;
  };

  List.prototype.__ensureOwner = function __ensureOwner(ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }

    if (!ownerID) {
      if (this.size === 0) {
        return emptyList();
      }

      this.__ownerID = ownerID;
      this.__altered = false;
      return this;
    }

    return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
  };

  return List;
}(IndexedCollection);

List.isList = isList;
var ListPrototype = List.prototype;
ListPrototype[IS_LIST_SYMBOL] = true;
ListPrototype[DELETE] = ListPrototype.remove;
ListPrototype.merge = ListPrototype.concat;
ListPrototype.setIn = setIn$1;
ListPrototype.deleteIn = ListPrototype.removeIn = deleteIn;
ListPrototype.update = update$1;
ListPrototype.updateIn = updateIn$1;
ListPrototype.mergeIn = mergeIn;
ListPrototype.mergeDeepIn = mergeDeepIn;
ListPrototype.withMutations = withMutations;
ListPrototype.wasAltered = wasAltered;
ListPrototype.asImmutable = asImmutable;
ListPrototype['@@transducer/init'] = ListPrototype.asMutable = asMutable;

ListPrototype['@@transducer/step'] = function (result, arr) {
  return result.push(arr);
};

ListPrototype['@@transducer/result'] = function (obj) {
  return obj.asImmutable();
};

var VNode = function VNode(array, ownerID) {
  this.array = array;
  this.ownerID = ownerID;
}; // TODO: seems like these methods are very similar


VNode.prototype.removeBefore = function removeBefore(ownerID, level, index) {
  if (index === level ? 1 << level : this.array.length === 0) {
    return this;
  }

  var originIndex = index >>> level & MASK;

  if (originIndex >= this.array.length) {
    return new VNode([], ownerID);
  }

  var removingFirst = originIndex === 0;
  var newChild;

  if (level > 0) {
    var oldChild = this.array[originIndex];
    newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);

    if (newChild === oldChild && removingFirst) {
      return this;
    }
  }

  if (removingFirst && !newChild) {
    return this;
  }

  var editable = editableVNode(this, ownerID);

  if (!removingFirst) {
    for (var ii = 0; ii < originIndex; ii++) {
      editable.array[ii] = undefined;
    }
  }

  if (newChild) {
    editable.array[originIndex] = newChild;
  }

  return editable;
};

VNode.prototype.removeAfter = function removeAfter(ownerID, level, index) {
  if (index === (level ? 1 << level : 0) || this.array.length === 0) {
    return this;
  }

  var sizeIndex = index - 1 >>> level & MASK;

  if (sizeIndex >= this.array.length) {
    return this;
  }

  var newChild;

  if (level > 0) {
    var oldChild = this.array[sizeIndex];
    newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);

    if (newChild === oldChild && sizeIndex === this.array.length - 1) {
      return this;
    }
  }

  var editable = editableVNode(this, ownerID);
  editable.array.splice(sizeIndex + 1);

  if (newChild) {
    editable.array[sizeIndex] = newChild;
  }

  return editable;
};

var DONE = {};

function iterateList(list, reverse) {
  var left = list._origin;
  var right = list._capacity;
  var tailPos = getTailOffset(right);
  var tail = list._tail;
  return iterateNodeOrLeaf(list._root, list._level, 0);

  function iterateNodeOrLeaf(node, level, offset) {
    return level === 0 ? iterateLeaf(node, offset) : iterateNode(node, level, offset);
  }

  function iterateLeaf(node, offset) {
    var array = offset === tailPos ? tail && tail.array : node && node.array;
    var from = offset > left ? 0 : left - offset;
    var to = right - offset;

    if (to > SIZE) {
      to = SIZE;
    }

    return function () {
      if (from === to) {
        return DONE;
      }

      var idx = reverse ? --to : from++;
      return array && array[idx];
    };
  }

  function iterateNode(node, level, offset) {
    var values;
    var array = node && node.array;
    var from = offset > left ? 0 : left - offset >> level;
    var to = (right - offset >> level) + 1;

    if (to > SIZE) {
      to = SIZE;
    }

    return function () {
      while (true) {
        if (values) {
          var value = values();

          if (value !== DONE) {
            return value;
          }

          values = null;
        }

        if (from === to) {
          return DONE;
        }

        var idx = reverse ? --to : from++;
        values = iterateNodeOrLeaf(array && array[idx], level - SHIFT, offset + (idx << level));
      }
    };
  }
}

function makeList(origin, capacity, level, root, tail, ownerID, hash) {
  var list = Object.create(ListPrototype);
  list.size = capacity - origin;
  list._origin = origin;
  list._capacity = capacity;
  list._level = level;
  list._root = root;
  list._tail = tail;
  list.__ownerID = ownerID;
  list.__hash = hash;
  list.__altered = false;
  return list;
}

var EMPTY_LIST;

function emptyList() {
  return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
}

function updateList(list, index, value) {
  index = wrapIndex(list, index);

  if (index !== index) {
    return list;
  }

  if (index >= list.size || index < 0) {
    return list.withMutations(function (list) {
      index < 0 ? setListBounds(list, index).set(0, value) : setListBounds(list, 0, index + 1).set(index, value);
    });
  }

  index += list._origin;
  var newTail = list._tail;
  var newRoot = list._root;
  var didAlter = MakeRef();

  if (index >= getTailOffset(list._capacity)) {
    newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
  } else {
    newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
  }

  if (!didAlter.value) {
    return list;
  }

  if (list.__ownerID) {
    list._root = newRoot;
    list._tail = newTail;
    list.__hash = undefined;
    list.__altered = true;
    return list;
  }

  return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
}

function updateVNode(node, ownerID, level, index, value, didAlter) {
  var idx = index >>> level & MASK;
  var nodeHas = node && idx < node.array.length;

  if (!nodeHas && value === undefined) {
    return node;
  }

  var newNode;

  if (level > 0) {
    var lowerNode = node && node.array[idx];
    var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);

    if (newLowerNode === lowerNode) {
      return node;
    }

    newNode = editableVNode(node, ownerID);
    newNode.array[idx] = newLowerNode;
    return newNode;
  }

  if (nodeHas && node.array[idx] === value) {
    return node;
  }

  if (didAlter) {
    SetRef(didAlter);
  }

  newNode = editableVNode(node, ownerID);

  if (value === undefined && idx === newNode.array.length - 1) {
    newNode.array.pop();
  } else {
    newNode.array[idx] = value;
  }

  return newNode;
}

function editableVNode(node, ownerID) {
  if (ownerID && node && ownerID === node.ownerID) {
    return node;
  }

  return new VNode(node ? node.array.slice() : [], ownerID);
}

function listNodeFor(list, rawIndex) {
  if (rawIndex >= getTailOffset(list._capacity)) {
    return list._tail;
  }

  if (rawIndex < 1 << list._level + SHIFT) {
    var node = list._root;
    var level = list._level;

    while (node && level > 0) {
      node = node.array[rawIndex >>> level & MASK];
      level -= SHIFT;
    }

    return node;
  }
}

function setListBounds(list, begin, end) {
  // Sanitize begin & end using this shorthand for ToInt32(argument)
  // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
  if (begin !== undefined) {
    begin |= 0;
  }

  if (end !== undefined) {
    end |= 0;
  }

  var owner = list.__ownerID || new OwnerID();
  var oldOrigin = list._origin;
  var oldCapacity = list._capacity;
  var newOrigin = oldOrigin + begin;
  var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;

  if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
    return list;
  } // If it's going to end after it starts, it's empty.


  if (newOrigin >= newCapacity) {
    return list.clear();
  }

  var newLevel = list._level;
  var newRoot = list._root; // New origin might need creating a higher root.

  var offsetShift = 0;

  while (newOrigin + offsetShift < 0) {
    newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
    newLevel += SHIFT;
    offsetShift += 1 << newLevel;
  }

  if (offsetShift) {
    newOrigin += offsetShift;
    oldOrigin += offsetShift;
    newCapacity += offsetShift;
    oldCapacity += offsetShift;
  }

  var oldTailOffset = getTailOffset(oldCapacity);
  var newTailOffset = getTailOffset(newCapacity); // New size might need creating a higher root.

  while (newTailOffset >= 1 << newLevel + SHIFT) {
    newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
    newLevel += SHIFT;
  } // Locate or create the new tail.


  var oldTail = list._tail;
  var newTail = newTailOffset < oldTailOffset ? listNodeFor(list, newCapacity - 1) : newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail; // Merge Tail into tree.

  if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
    newRoot = editableVNode(newRoot, owner);
    var node = newRoot;

    for (var level = newLevel; level > SHIFT; level -= SHIFT) {
      var idx = oldTailOffset >>> level & MASK;
      node = node.array[idx] = editableVNode(node.array[idx], owner);
    }

    node.array[oldTailOffset >>> SHIFT & MASK] = oldTail;
  } // If the size has been reduced, there's a chance the tail needs to be trimmed.


  if (newCapacity < oldCapacity) {
    newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
  } // If the new origin is within the tail, then we do not need a root.


  if (newOrigin >= newTailOffset) {
    newOrigin -= newTailOffset;
    newCapacity -= newTailOffset;
    newLevel = SHIFT;
    newRoot = null;
    newTail = newTail && newTail.removeBefore(owner, 0, newOrigin); // Otherwise, if the root has been trimmed, garbage collect.
  } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
    offsetShift = 0; // Identify the new top root node of the subtree of the old root.

    while (newRoot) {
      var beginIndex = newOrigin >>> newLevel & MASK;

      if (beginIndex !== newTailOffset >>> newLevel & MASK) {
        break;
      }

      if (beginIndex) {
        offsetShift += (1 << newLevel) * beginIndex;
      }

      newLevel -= SHIFT;
      newRoot = newRoot.array[beginIndex];
    } // Trim the new sides of the new root.


    if (newRoot && newOrigin > oldOrigin) {
      newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
    }

    if (newRoot && newTailOffset < oldTailOffset) {
      newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
    }

    if (offsetShift) {
      newOrigin -= offsetShift;
      newCapacity -= offsetShift;
    }
  }

  if (list.__ownerID) {
    list.size = newCapacity - newOrigin;
    list._origin = newOrigin;
    list._capacity = newCapacity;
    list._level = newLevel;
    list._root = newRoot;
    list._tail = newTail;
    list.__hash = undefined;
    list.__altered = true;
    return list;
  }

  return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
}

function getTailOffset(size) {
  return size < SIZE ? 0 : size - 1 >>> SHIFT << SHIFT;
}

var OrderedMap =
/*@__PURE__*/
function (Map$$1) {
  function OrderedMap(value) {
    return value === null || value === undefined ? emptyOrderedMap() : isOrderedMap(value) ? value : emptyOrderedMap().withMutations(function (map) {
      var iter = KeyedCollection(value);
      assertNotInfinite(iter.size);
      iter.forEach(function (v, k) {
        return map.set(k, v);
      });
    });
  }

  if (Map$$1) OrderedMap.__proto__ = Map$$1;
  OrderedMap.prototype = Object.create(Map$$1 && Map$$1.prototype);
  OrderedMap.prototype.constructor = OrderedMap;

  OrderedMap.of = function of()
  /*...values*/
  {
    return this(arguments);
  };

  OrderedMap.prototype.toString = function toString() {
    return this.__toString('OrderedMap {', '}');
  }; // @pragma Access


  OrderedMap.prototype.get = function get(k, notSetValue) {
    var index = this._map.get(k);

    return index !== undefined ? this._list.get(index)[1] : notSetValue;
  }; // @pragma Modification


  OrderedMap.prototype.clear = function clear() {
    if (this.size === 0) {
      return this;
    }

    if (this.__ownerID) {
      this.size = 0;

      this._map.clear();

      this._list.clear();

      return this;
    }

    return emptyOrderedMap();
  };

  OrderedMap.prototype.set = function set(k, v) {
    return updateOrderedMap(this, k, v);
  };

  OrderedMap.prototype.remove = function remove(k) {
    return updateOrderedMap(this, k, NOT_SET);
  };

  OrderedMap.prototype.wasAltered = function wasAltered() {
    return this._map.wasAltered() || this._list.wasAltered();
  };

  OrderedMap.prototype.__iterate = function __iterate(fn, reverse) {
    var this$1 = this;
    return this._list.__iterate(function (entry) {
      return entry && fn(entry[1], entry[0], this$1);
    }, reverse);
  };

  OrderedMap.prototype.__iterator = function __iterator(type, reverse) {
    return this._list.fromEntrySeq().__iterator(type, reverse);
  };

  OrderedMap.prototype.__ensureOwner = function __ensureOwner(ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }

    var newMap = this._map.__ensureOwner(ownerID);

    var newList = this._list.__ensureOwner(ownerID);

    if (!ownerID) {
      if (this.size === 0) {
        return emptyOrderedMap();
      }

      this.__ownerID = ownerID;
      this._map = newMap;
      this._list = newList;
      return this;
    }

    return makeOrderedMap(newMap, newList, ownerID, this.__hash);
  };

  return OrderedMap;
}(Map);

OrderedMap.isOrderedMap = isOrderedMap;
OrderedMap.prototype[IS_ORDERED_SYMBOL] = true;
OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;

function makeOrderedMap(map, list, ownerID, hash) {
  var omap = Object.create(OrderedMap.prototype);
  omap.size = map ? map.size : 0;
  omap._map = map;
  omap._list = list;
  omap.__ownerID = ownerID;
  omap.__hash = hash;
  return omap;
}

var EMPTY_ORDERED_MAP;

function emptyOrderedMap() {
  return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
}

function updateOrderedMap(omap, k, v) {
  var map = omap._map;
  var list = omap._list;
  var i = map.get(k);
  var has = i !== undefined;
  var newMap;
  var newList;

  if (v === NOT_SET) {
    // removed
    if (!has) {
      return omap;
    }

    if (list.size >= SIZE && list.size >= map.size * 2) {
      newList = list.filter(function (entry, idx) {
        return entry !== undefined && i !== idx;
      });
      newMap = newList.toKeyedSeq().map(function (entry) {
        return entry[0];
      }).flip().toMap();

      if (omap.__ownerID) {
        newMap.__ownerID = newList.__ownerID = omap.__ownerID;
      }
    } else {
      newMap = map.remove(k);
      newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
    }
  } else if (has) {
    if (v === list.get(i)[1]) {
      return omap;
    }

    newMap = map;
    newList = list.set(i, [k, v]);
  } else {
    newMap = map.set(k, list.size);
    newList = list.set(list.size, [k, v]);
  }

  if (omap.__ownerID) {
    omap.size = newMap.size;
    omap._map = newMap;
    omap._list = newList;
    omap.__hash = undefined;
    return omap;
  }

  return makeOrderedMap(newMap, newList);
}

var IS_STACK_SYMBOL = '@@__IMMUTABLE_STACK__@@';

function isStack(maybeStack) {
  return Boolean(maybeStack && maybeStack[IS_STACK_SYMBOL]);
}

var Stack =
/*@__PURE__*/
function (IndexedCollection$$1) {
  function Stack(value) {
    return value === null || value === undefined ? emptyStack() : isStack(value) ? value : emptyStack().pushAll(value);
  }

  if (IndexedCollection$$1) Stack.__proto__ = IndexedCollection$$1;
  Stack.prototype = Object.create(IndexedCollection$$1 && IndexedCollection$$1.prototype);
  Stack.prototype.constructor = Stack;

  Stack.of = function of()
  /*...values*/
  {
    return this(arguments);
  };

  Stack.prototype.toString = function toString() {
    return this.__toString('Stack [', ']');
  }; // @pragma Access


  Stack.prototype.get = function get(index, notSetValue) {
    var head = this._head;
    index = wrapIndex(this, index);

    while (head && index--) {
      head = head.next;
    }

    return head ? head.value : notSetValue;
  };

  Stack.prototype.peek = function peek() {
    return this._head && this._head.value;
  }; // @pragma Modification


  Stack.prototype.push = function push()
  /*...values*/
  {
    var arguments$1 = arguments;

    if (arguments.length === 0) {
      return this;
    }

    var newSize = this.size + arguments.length;
    var head = this._head;

    for (var ii = arguments.length - 1; ii >= 0; ii--) {
      head = {
        value: arguments$1[ii],
        next: head
      };
    }

    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }

    return makeStack(newSize, head);
  };

  Stack.prototype.pushAll = function pushAll(iter) {
    iter = IndexedCollection$$1(iter);

    if (iter.size === 0) {
      return this;
    }

    if (this.size === 0 && isStack(iter)) {
      return iter;
    }

    assertNotInfinite(iter.size);
    var newSize = this.size;
    var head = this._head;

    iter.__iterate(function (value) {
      newSize++;
      head = {
        value: value,
        next: head
      };
    },
    /* reverse */
    true);

    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }

    return makeStack(newSize, head);
  };

  Stack.prototype.pop = function pop() {
    return this.slice(1);
  };

  Stack.prototype.clear = function clear() {
    if (this.size === 0) {
      return this;
    }

    if (this.__ownerID) {
      this.size = 0;
      this._head = undefined;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }

    return emptyStack();
  };

  Stack.prototype.slice = function slice(begin, end) {
    if (wholeSlice(begin, end, this.size)) {
      return this;
    }

    var resolvedBegin = resolveBegin(begin, this.size);
    var resolvedEnd = resolveEnd(end, this.size);

    if (resolvedEnd !== this.size) {
      // super.slice(begin, end);
      return IndexedCollection$$1.prototype.slice.call(this, begin, end);
    }

    var newSize = this.size - resolvedBegin;
    var head = this._head;

    while (resolvedBegin--) {
      head = head.next;
    }

    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }

    return makeStack(newSize, head);
  }; // @pragma Mutability


  Stack.prototype.__ensureOwner = function __ensureOwner(ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }

    if (!ownerID) {
      if (this.size === 0) {
        return emptyStack();
      }

      this.__ownerID = ownerID;
      this.__altered = false;
      return this;
    }

    return makeStack(this.size, this._head, ownerID, this.__hash);
  }; // @pragma Iteration


  Stack.prototype.__iterate = function __iterate(fn, reverse) {
    var this$1 = this;

    if (reverse) {
      return new ArraySeq(this.toArray()).__iterate(function (v, k) {
        return fn(v, k, this$1);
      }, reverse);
    }

    var iterations = 0;
    var node = this._head;

    while (node) {
      if (fn(node.value, iterations++, this) === false) {
        break;
      }

      node = node.next;
    }

    return iterations;
  };

  Stack.prototype.__iterator = function __iterator(type, reverse) {
    if (reverse) {
      return new ArraySeq(this.toArray()).__iterator(type, reverse);
    }

    var iterations = 0;
    var node = this._head;
    return new Iterator(function () {
      if (node) {
        var value = node.value;
        node = node.next;
        return iteratorValue(type, iterations++, value);
      }

      return iteratorDone();
    });
  };

  return Stack;
}(IndexedCollection);

Stack.isStack = isStack;
var StackPrototype = Stack.prototype;
StackPrototype[IS_STACK_SYMBOL] = true;
StackPrototype.shift = StackPrototype.pop;
StackPrototype.unshift = StackPrototype.push;
StackPrototype.unshiftAll = StackPrototype.pushAll;
StackPrototype.withMutations = withMutations;
StackPrototype.wasAltered = wasAltered;
StackPrototype.asImmutable = asImmutable;
StackPrototype['@@transducer/init'] = StackPrototype.asMutable = asMutable;

StackPrototype['@@transducer/step'] = function (result, arr) {
  return result.unshift(arr);
};

StackPrototype['@@transducer/result'] = function (obj) {
  return obj.asImmutable();
};

function makeStack(size, head, ownerID, hash) {
  var map = Object.create(StackPrototype);
  map.size = size;
  map._head = head;
  map.__ownerID = ownerID;
  map.__hash = hash;
  map.__altered = false;
  return map;
}

var EMPTY_STACK;

function emptyStack() {
  return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
}

var IS_SET_SYMBOL = '@@__IMMUTABLE_SET__@@';

function isSet(maybeSet) {
  return Boolean(maybeSet && maybeSet[IS_SET_SYMBOL]);
}

function isOrderedSet(maybeOrderedSet) {
  return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
}

function deepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (!isCollection(b) || a.size !== undefined && b.size !== undefined && a.size !== b.size || a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash || isKeyed(a) !== isKeyed(b) || isIndexed(a) !== isIndexed(b) || isOrdered(a) !== isOrdered(b)) {
    return false;
  }

  if (a.size === 0 && b.size === 0) {
    return true;
  }

  var notAssociative = !isAssociative(a);

  if (isOrdered(a)) {
    var entries = a.entries();
    return b.every(function (v, k) {
      var entry = entries.next().value;
      return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
    }) && entries.next().done;
  }

  var flipped = false;

  if (a.size === undefined) {
    if (b.size === undefined) {
      if (typeof a.cacheResult === 'function') {
        a.cacheResult();
      }
    } else {
      flipped = true;
      var _ = a;
      a = b;
      b = _;
    }
  }

  var allEqual = true;

  var bSize = b.__iterate(function (v, k) {
    if (notAssociative ? !a.has(v) : flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
      allEqual = false;
      return false;
    }
  });

  return allEqual && a.size === bSize;
}
/**
 * Contributes additional methods to a constructor
 */


function mixin(ctor, methods) {
  var keyCopier = function (key) {
    ctor.prototype[key] = methods[key];
  };

  Object.keys(methods).forEach(keyCopier);
  Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(methods).forEach(keyCopier);
  return ctor;
}

function toJS(value) {
  if (!value || typeof value !== 'object') {
    return value;
  }

  if (!isCollection(value)) {
    if (!isDataStructure(value)) {
      return value;
    }

    value = Seq(value);
  }

  if (isKeyed(value)) {
    var result$1 = {};

    value.__iterate(function (v, k) {
      result$1[k] = toJS(v);
    });

    return result$1;
  }

  var result = [];

  value.__iterate(function (v) {
    result.push(toJS(v));
  });

  return result;
}

var Set =
/*@__PURE__*/
function (SetCollection$$1) {
  function Set(value) {
    return value === null || value === undefined ? emptySet() : isSet(value) && !isOrdered(value) ? value : emptySet().withMutations(function (set) {
      var iter = SetCollection$$1(value);
      assertNotInfinite(iter.size);
      iter.forEach(function (v) {
        return set.add(v);
      });
    });
  }

  if (SetCollection$$1) Set.__proto__ = SetCollection$$1;
  Set.prototype = Object.create(SetCollection$$1 && SetCollection$$1.prototype);
  Set.prototype.constructor = Set;

  Set.of = function of()
  /*...values*/
  {
    return this(arguments);
  };

  Set.fromKeys = function fromKeys(value) {
    return this(KeyedCollection(value).keySeq());
  };

  Set.intersect = function intersect(sets) {
    sets = Collection(sets).toArray();
    return sets.length ? SetPrototype.intersect.apply(Set(sets.pop()), sets) : emptySet();
  };

  Set.union = function union(sets) {
    sets = Collection(sets).toArray();
    return sets.length ? SetPrototype.union.apply(Set(sets.pop()), sets) : emptySet();
  };

  Set.prototype.toString = function toString() {
    return this.__toString('Set {', '}');
  }; // @pragma Access


  Set.prototype.has = function has(value) {
    return this._map.has(value);
  }; // @pragma Modification


  Set.prototype.add = function add(value) {
    return updateSet(this, this._map.set(value, value));
  };

  Set.prototype.remove = function remove(value) {
    return updateSet(this, this._map.remove(value));
  };

  Set.prototype.clear = function clear() {
    return updateSet(this, this._map.clear());
  }; // @pragma Composition


  Set.prototype.map = function map(mapper, context) {
    var this$1 = this;
    var removes = [];
    var adds = [];
    this.forEach(function (value) {
      var mapped = mapper.call(context, value, value, this$1);

      if (mapped !== value) {
        removes.push(value);
        adds.push(mapped);
      }
    });
    return this.withMutations(function (set) {
      removes.forEach(function (value) {
        return set.remove(value);
      });
      adds.forEach(function (value) {
        return set.add(value);
      });
    });
  };

  Set.prototype.union = function union() {
    var iters = [],
        len = arguments.length;

    while (len--) iters[len] = arguments[len];

    iters = iters.filter(function (x) {
      return x.size !== 0;
    });

    if (iters.length === 0) {
      return this;
    }

    if (this.size === 0 && !this.__ownerID && iters.length === 1) {
      return this.constructor(iters[0]);
    }

    return this.withMutations(function (set) {
      for (var ii = 0; ii < iters.length; ii++) {
        SetCollection$$1(iters[ii]).forEach(function (value) {
          return set.add(value);
        });
      }
    });
  };

  Set.prototype.intersect = function intersect() {
    var iters = [],
        len = arguments.length;

    while (len--) iters[len] = arguments[len];

    if (iters.length === 0) {
      return this;
    }

    iters = iters.map(function (iter) {
      return SetCollection$$1(iter);
    });
    var toRemove = [];
    this.forEach(function (value) {
      if (!iters.every(function (iter) {
        return iter.includes(value);
      })) {
        toRemove.push(value);
      }
    });
    return this.withMutations(function (set) {
      toRemove.forEach(function (value) {
        set.remove(value);
      });
    });
  };

  Set.prototype.subtract = function subtract() {
    var iters = [],
        len = arguments.length;

    while (len--) iters[len] = arguments[len];

    if (iters.length === 0) {
      return this;
    }

    iters = iters.map(function (iter) {
      return SetCollection$$1(iter);
    });
    var toRemove = [];
    this.forEach(function (value) {
      if (iters.some(function (iter) {
        return iter.includes(value);
      })) {
        toRemove.push(value);
      }
    });
    return this.withMutations(function (set) {
      toRemove.forEach(function (value) {
        set.remove(value);
      });
    });
  };

  Set.prototype.sort = function sort(comparator) {
    // Late binding
    return OrderedSet(sortFactory(this, comparator));
  };

  Set.prototype.sortBy = function sortBy(mapper, comparator) {
    // Late binding
    return OrderedSet(sortFactory(this, comparator, mapper));
  };

  Set.prototype.wasAltered = function wasAltered() {
    return this._map.wasAltered();
  };

  Set.prototype.__iterate = function __iterate(fn, reverse) {
    var this$1 = this;
    return this._map.__iterate(function (k) {
      return fn(k, k, this$1);
    }, reverse);
  };

  Set.prototype.__iterator = function __iterator(type, reverse) {
    return this._map.__iterator(type, reverse);
  };

  Set.prototype.__ensureOwner = function __ensureOwner(ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }

    var newMap = this._map.__ensureOwner(ownerID);

    if (!ownerID) {
      if (this.size === 0) {
        return this.__empty();
      }

      this.__ownerID = ownerID;
      this._map = newMap;
      return this;
    }

    return this.__make(newMap, ownerID);
  };

  return Set;
}(SetCollection);

Set.isSet = isSet;
var SetPrototype = Set.prototype;
SetPrototype[IS_SET_SYMBOL] = true;
SetPrototype[DELETE] = SetPrototype.remove;
SetPrototype.merge = SetPrototype.concat = SetPrototype.union;
SetPrototype.withMutations = withMutations;
SetPrototype.asImmutable = asImmutable;
SetPrototype['@@transducer/init'] = SetPrototype.asMutable = asMutable;

SetPrototype['@@transducer/step'] = function (result, arr) {
  return result.add(arr);
};

SetPrototype['@@transducer/result'] = function (obj) {
  return obj.asImmutable();
};

SetPrototype.__empty = emptySet;
SetPrototype.__make = makeSet;

function updateSet(set, newMap) {
  if (set.__ownerID) {
    set.size = newMap.size;
    set._map = newMap;
    return set;
  }

  return newMap === set._map ? set : newMap.size === 0 ? set.__empty() : set.__make(newMap);
}

function makeSet(map, ownerID) {
  var set = Object.create(SetPrototype);
  set.size = map ? map.size : 0;
  set._map = map;
  set.__ownerID = ownerID;
  return set;
}

var EMPTY_SET;

function emptySet() {
  return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
}
/**
 * Returns a lazy seq of nums from start (inclusive) to end
 * (exclusive), by step, where start defaults to 0, step to 1, and end to
 * infinity. When start is equal to end, returns empty list.
 */


var Range =
/*@__PURE__*/
function (IndexedSeq$$1) {
  function Range(start, end, step) {
    if (!(this instanceof Range)) {
      return new Range(start, end, step);
    }

    invariant(step !== 0, 'Cannot step a Range by 0');
    start = start || 0;

    if (end === undefined) {
      end = Infinity;
    }

    step = step === undefined ? 1 : Math.abs(step);

    if (end < start) {
      step = -step;
    }

    this._start = start;
    this._end = end;
    this._step = step;
    this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);

    if (this.size === 0) {
      if (EMPTY_RANGE) {
        return EMPTY_RANGE;
      }

      EMPTY_RANGE = this;
    }
  }

  if (IndexedSeq$$1) Range.__proto__ = IndexedSeq$$1;
  Range.prototype = Object.create(IndexedSeq$$1 && IndexedSeq$$1.prototype);
  Range.prototype.constructor = Range;

  Range.prototype.toString = function toString() {
    if (this.size === 0) {
      return 'Range []';
    }

    return 'Range [ ' + this._start + '...' + this._end + (this._step !== 1 ? ' by ' + this._step : '') + ' ]';
  };

  Range.prototype.get = function get(index, notSetValue) {
    return this.has(index) ? this._start + wrapIndex(this, index) * this._step : notSetValue;
  };

  Range.prototype.includes = function includes(searchValue) {
    var possibleIndex = (searchValue - this._start) / this._step;
    return possibleIndex >= 0 && possibleIndex < this.size && possibleIndex === Math.floor(possibleIndex);
  };

  Range.prototype.slice = function slice(begin, end) {
    if (wholeSlice(begin, end, this.size)) {
      return this;
    }

    begin = resolveBegin(begin, this.size);
    end = resolveEnd(end, this.size);

    if (end <= begin) {
      return new Range(0, 0);
    }

    return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
  };

  Range.prototype.indexOf = function indexOf(searchValue) {
    var offsetValue = searchValue - this._start;

    if (offsetValue % this._step === 0) {
      var index = offsetValue / this._step;

      if (index >= 0 && index < this.size) {
        return index;
      }
    }

    return -1;
  };

  Range.prototype.lastIndexOf = function lastIndexOf(searchValue) {
    return this.indexOf(searchValue);
  };

  Range.prototype.__iterate = function __iterate(fn, reverse) {
    var size = this.size;
    var step = this._step;
    var value = reverse ? this._start + (size - 1) * step : this._start;
    var i = 0;

    while (i !== size) {
      if (fn(value, reverse ? size - ++i : i++, this) === false) {
        break;
      }

      value += reverse ? -step : step;
    }

    return i;
  };

  Range.prototype.__iterator = function __iterator(type, reverse) {
    var size = this.size;
    var step = this._step;
    var value = reverse ? this._start + (size - 1) * step : this._start;
    var i = 0;
    return new Iterator(function () {
      if (i === size) {
        return iteratorDone();
      }

      var v = value;
      value += reverse ? -step : step;
      return iteratorValue(type, reverse ? size - ++i : i++, v);
    });
  };

  Range.prototype.equals = function equals(other) {
    return other instanceof Range ? this._start === other._start && this._end === other._end && this._step === other._step : deepEqual(this, other);
  };

  return Range;
}(IndexedSeq);

var EMPTY_RANGE;

function getIn(collection, searchKeyPath, notSetValue) {
  var keyPath = coerceKeyPath(searchKeyPath);
  var i = 0;

  while (i !== keyPath.length) {
    collection = get(collection, keyPath[i++], NOT_SET);

    if (collection === NOT_SET) {
      return notSetValue;
    }
  }

  return collection;
}

function getIn$1(searchKeyPath, notSetValue) {
  return getIn(this, searchKeyPath, notSetValue);
}

function hasIn(collection, keyPath) {
  return getIn(collection, keyPath, NOT_SET) !== NOT_SET;
}

function hasIn$1(searchKeyPath) {
  return hasIn(this, searchKeyPath);
}

function toObject() {
  assertNotInfinite(this.size);
  var object = {};

  this.__iterate(function (v, k) {
    object[k] = v;
  });

  return object;
} // Note: all of these methods are deprecated.


Collection.isIterable = isCollection;
Collection.isKeyed = isKeyed;
Collection.isIndexed = isIndexed;
Collection.isAssociative = isAssociative;
Collection.isOrdered = isOrdered;
Collection.Iterator = Iterator;
mixin(Collection, {
  // ### Conversion to other types
  toArray: function toArray() {
    assertNotInfinite(this.size);
    var array = new Array(this.size || 0);
    var useTuples = isKeyed(this);
    var i = 0;

    this.__iterate(function (v, k) {
      // Keyed collections produce an array of tuples.
      array[i++] = useTuples ? [k, v] : v;
    });

    return array;
  },
  toIndexedSeq: function toIndexedSeq() {
    return new ToIndexedSequence(this);
  },
  toJS: function toJS$1() {
    return toJS(this);
  },
  toKeyedSeq: function toKeyedSeq() {
    return new ToKeyedSequence(this, true);
  },
  toMap: function toMap() {
    // Use Late Binding here to solve the circular dependency.
    return Map(this.toKeyedSeq());
  },
  toObject: toObject,
  toOrderedMap: function toOrderedMap() {
    // Use Late Binding here to solve the circular dependency.
    return OrderedMap(this.toKeyedSeq());
  },
  toOrderedSet: function toOrderedSet() {
    // Use Late Binding here to solve the circular dependency.
    return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
  },
  toSet: function toSet() {
    // Use Late Binding here to solve the circular dependency.
    return Set(isKeyed(this) ? this.valueSeq() : this);
  },
  toSetSeq: function toSetSeq() {
    return new ToSetSequence(this);
  },
  toSeq: function toSeq() {
    return isIndexed(this) ? this.toIndexedSeq() : isKeyed(this) ? this.toKeyedSeq() : this.toSetSeq();
  },
  toStack: function toStack() {
    // Use Late Binding here to solve the circular dependency.
    return Stack(isKeyed(this) ? this.valueSeq() : this);
  },
  toList: function toList() {
    // Use Late Binding here to solve the circular dependency.
    return List(isKeyed(this) ? this.valueSeq() : this);
  },
  // ### Common JavaScript methods and properties
  toString: function toString() {
    return '[Collection]';
  },
  __toString: function __toString(head, tail) {
    if (this.size === 0) {
      return head + tail;
    }

    return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
  },
  // ### ES6 Collection methods (ES6 Array and Map)
  concat: function concat() {
    var values = [],
        len = arguments.length;

    while (len--) values[len] = arguments[len];

    return reify(this, concatFactory(this, values));
  },
  includes: function includes(searchValue) {
    return this.some(function (value) {
      return is(value, searchValue);
    });
  },
  entries: function entries() {
    return this.__iterator(ITERATE_ENTRIES);
  },
  every: function every(predicate, context) {
    assertNotInfinite(this.size);
    var returnValue = true;

    this.__iterate(function (v, k, c) {
      if (!predicate.call(context, v, k, c)) {
        returnValue = false;
        return false;
      }
    });

    return returnValue;
  },
  filter: function filter(predicate, context) {
    return reify(this, filterFactory(this, predicate, context, true));
  },
  find: function find(predicate, context, notSetValue) {
    var entry = this.findEntry(predicate, context);
    return entry ? entry[1] : notSetValue;
  },
  forEach: function forEach(sideEffect, context) {
    assertNotInfinite(this.size);
    return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
  },
  join: function join(separator) {
    assertNotInfinite(this.size);
    separator = separator !== undefined ? '' + separator : ',';
    var joined = '';
    var isFirst = true;

    this.__iterate(function (v) {
      isFirst ? isFirst = false : joined += separator;
      joined += v !== null && v !== undefined ? v.toString() : '';
    });

    return joined;
  },
  keys: function keys() {
    return this.__iterator(ITERATE_KEYS);
  },
  map: function map(mapper, context) {
    return reify(this, mapFactory(this, mapper, context));
  },
  reduce: function reduce$1(reducer, initialReduction, context) {
    return reduce(this, reducer, initialReduction, context, arguments.length < 2, false);
  },
  reduceRight: function reduceRight(reducer, initialReduction, context) {
    return reduce(this, reducer, initialReduction, context, arguments.length < 2, true);
  },
  reverse: function reverse() {
    return reify(this, reverseFactory(this, true));
  },
  slice: function slice(begin, end) {
    return reify(this, sliceFactory(this, begin, end, true));
  },
  some: function some(predicate, context) {
    return !this.every(not(predicate), context);
  },
  sort: function sort(comparator) {
    return reify(this, sortFactory(this, comparator));
  },
  values: function values() {
    return this.__iterator(ITERATE_VALUES);
  },
  // ### More sequential methods
  butLast: function butLast() {
    return this.slice(0, -1);
  },
  isEmpty: function isEmpty() {
    return this.size !== undefined ? this.size === 0 : !this.some(function () {
      return true;
    });
  },
  count: function count(predicate, context) {
    return ensureSize(predicate ? this.toSeq().filter(predicate, context) : this);
  },
  countBy: function countBy(grouper, context) {
    return countByFactory(this, grouper, context);
  },
  equals: function equals(other) {
    return deepEqual(this, other);
  },
  entrySeq: function entrySeq() {
    var collection = this;

    if (collection._cache) {
      // We cache as an entries array, so we can just return the cache!
      return new ArraySeq(collection._cache);
    }

    var entriesSequence = collection.toSeq().map(entryMapper).toIndexedSeq();

    entriesSequence.fromEntrySeq = function () {
      return collection.toSeq();
    };

    return entriesSequence;
  },
  filterNot: function filterNot(predicate, context) {
    return this.filter(not(predicate), context);
  },
  findEntry: function findEntry(predicate, context, notSetValue) {
    var found = notSetValue;

    this.__iterate(function (v, k, c) {
      if (predicate.call(context, v, k, c)) {
        found = [k, v];
        return false;
      }
    });

    return found;
  },
  findKey: function findKey(predicate, context) {
    var entry = this.findEntry(predicate, context);
    return entry && entry[0];
  },
  findLast: function findLast(predicate, context, notSetValue) {
    return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
  },
  findLastEntry: function findLastEntry(predicate, context, notSetValue) {
    return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
  },
  findLastKey: function findLastKey(predicate, context) {
    return this.toKeyedSeq().reverse().findKey(predicate, context);
  },
  first: function first(notSetValue) {
    return this.find(returnTrue, null, notSetValue);
  },
  flatMap: function flatMap(mapper, context) {
    return reify(this, flatMapFactory(this, mapper, context));
  },
  flatten: function flatten(depth) {
    return reify(this, flattenFactory(this, depth, true));
  },
  fromEntrySeq: function fromEntrySeq() {
    return new FromEntriesSequence(this);
  },
  get: function get(searchKey, notSetValue) {
    return this.find(function (_, key) {
      return is(key, searchKey);
    }, undefined, notSetValue);
  },
  getIn: getIn$1,
  groupBy: function groupBy(grouper, context) {
    return groupByFactory(this, grouper, context);
  },
  has: function has(searchKey) {
    return this.get(searchKey, NOT_SET) !== NOT_SET;
  },
  hasIn: hasIn$1,
  isSubset: function isSubset(iter) {
    iter = typeof iter.includes === 'function' ? iter : Collection(iter);
    return this.every(function (value) {
      return iter.includes(value);
    });
  },
  isSuperset: function isSuperset(iter) {
    iter = typeof iter.isSubset === 'function' ? iter : Collection(iter);
    return iter.isSubset(this);
  },
  keyOf: function keyOf(searchValue) {
    return this.findKey(function (value) {
      return is(value, searchValue);
    });
  },
  keySeq: function keySeq() {
    return this.toSeq().map(keyMapper).toIndexedSeq();
  },
  last: function last(notSetValue) {
    return this.toSeq().reverse().first(notSetValue);
  },
  lastKeyOf: function lastKeyOf(searchValue) {
    return this.toKeyedSeq().reverse().keyOf(searchValue);
  },
  max: function max(comparator) {
    return maxFactory(this, comparator);
  },
  maxBy: function maxBy(mapper, comparator) {
    return maxFactory(this, comparator, mapper);
  },
  min: function min(comparator) {
    return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
  },
  minBy: function minBy(mapper, comparator) {
    return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
  },
  rest: function rest() {
    return this.slice(1);
  },
  skip: function skip(amount) {
    return amount === 0 ? this : this.slice(Math.max(0, amount));
  },
  skipLast: function skipLast(amount) {
    return amount === 0 ? this : this.slice(0, -Math.max(0, amount));
  },
  skipWhile: function skipWhile(predicate, context) {
    return reify(this, skipWhileFactory(this, predicate, context, true));
  },
  skipUntil: function skipUntil(predicate, context) {
    return this.skipWhile(not(predicate), context);
  },
  sortBy: function sortBy(mapper, comparator) {
    return reify(this, sortFactory(this, comparator, mapper));
  },
  take: function take(amount) {
    return this.slice(0, Math.max(0, amount));
  },
  takeLast: function takeLast(amount) {
    return this.slice(-Math.max(0, amount));
  },
  takeWhile: function takeWhile(predicate, context) {
    return reify(this, takeWhileFactory(this, predicate, context));
  },
  takeUntil: function takeUntil(predicate, context) {
    return this.takeWhile(not(predicate), context);
  },
  update: function update(fn) {
    return fn(this);
  },
  valueSeq: function valueSeq() {
    return this.toIndexedSeq();
  },
  // ### Hashable Object
  hashCode: function hashCode() {
    return this.__hash || (this.__hash = hashCollection(this));
  } // ### Internal
  // abstract __iterate(fn, reverse)
  // abstract __iterator(type, reverse)

});
var CollectionPrototype = Collection.prototype;
CollectionPrototype[IS_COLLECTION_SYMBOL] = true;
CollectionPrototype[ITERATOR_SYMBOL] = CollectionPrototype.values;
CollectionPrototype.toJSON = CollectionPrototype.toArray;
CollectionPrototype.__toStringMapper = quoteString;

CollectionPrototype.inspect = CollectionPrototype.toSource = function () {
  return this.toString();
};

CollectionPrototype.chain = CollectionPrototype.flatMap;
CollectionPrototype.contains = CollectionPrototype.includes;
mixin(KeyedCollection, {
  // ### More sequential methods
  flip: function flip() {
    return reify(this, flipFactory(this));
  },
  mapEntries: function mapEntries(mapper, context) {
    var this$1 = this;
    var iterations = 0;
    return reify(this, this.toSeq().map(function (v, k) {
      return mapper.call(context, [k, v], iterations++, this$1);
    }).fromEntrySeq());
  },
  mapKeys: function mapKeys(mapper, context) {
    var this$1 = this;
    return reify(this, this.toSeq().flip().map(function (k, v) {
      return mapper.call(context, k, v, this$1);
    }).flip());
  }
});
var KeyedCollectionPrototype = KeyedCollection.prototype;
KeyedCollectionPrototype[IS_KEYED_SYMBOL] = true;
KeyedCollectionPrototype[ITERATOR_SYMBOL] = CollectionPrototype.entries;
KeyedCollectionPrototype.toJSON = toObject;

KeyedCollectionPrototype.__toStringMapper = function (v, k) {
  return quoteString(k) + ': ' + quoteString(v);
};

mixin(IndexedCollection, {
  // ### Conversion to other types
  toKeyedSeq: function toKeyedSeq() {
    return new ToKeyedSequence(this, false);
  },
  // ### ES6 Collection methods (ES6 Array and Map)
  filter: function filter(predicate, context) {
    return reify(this, filterFactory(this, predicate, context, false));
  },
  findIndex: function findIndex(predicate, context) {
    var entry = this.findEntry(predicate, context);
    return entry ? entry[0] : -1;
  },
  indexOf: function indexOf(searchValue) {
    var key = this.keyOf(searchValue);
    return key === undefined ? -1 : key;
  },
  lastIndexOf: function lastIndexOf(searchValue) {
    var key = this.lastKeyOf(searchValue);
    return key === undefined ? -1 : key;
  },
  reverse: function reverse() {
    return reify(this, reverseFactory(this, false));
  },
  slice: function slice(begin, end) {
    return reify(this, sliceFactory(this, begin, end, false));
  },
  splice: function splice(index, removeNum
  /*, ...values*/
  ) {
    var numArgs = arguments.length;
    removeNum = Math.max(removeNum || 0, 0);

    if (numArgs === 0 || numArgs === 2 && !removeNum) {
      return this;
    } // If index is negative, it should resolve relative to the size of the
    // collection. However size may be expensive to compute if not cached, so
    // only call count() if the number is in fact negative.


    index = resolveBegin(index, index < 0 ? this.count() : this.size);
    var spliced = this.slice(0, index);
    return reify(this, numArgs === 1 ? spliced : spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum)));
  },
  // ### More collection methods
  findLastIndex: function findLastIndex(predicate, context) {
    var entry = this.findLastEntry(predicate, context);
    return entry ? entry[0] : -1;
  },
  first: function first(notSetValue) {
    return this.get(0, notSetValue);
  },
  flatten: function flatten(depth) {
    return reify(this, flattenFactory(this, depth, false));
  },
  get: function get(index, notSetValue) {
    index = wrapIndex(this, index);
    return index < 0 || this.size === Infinity || this.size !== undefined && index > this.size ? notSetValue : this.find(function (_, key) {
      return key === index;
    }, undefined, notSetValue);
  },
  has: function has(index) {
    index = wrapIndex(this, index);
    return index >= 0 && (this.size !== undefined ? this.size === Infinity || index < this.size : this.indexOf(index) !== -1);
  },
  interpose: function interpose(separator) {
    return reify(this, interposeFactory(this, separator));
  },
  interleave: function interleave()
  /*...collections*/
  {
    var collections = [this].concat(arrCopy(arguments));
    var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, collections);
    var interleaved = zipped.flatten(true);

    if (zipped.size) {
      interleaved.size = zipped.size * collections.length;
    }

    return reify(this, interleaved);
  },
  keySeq: function keySeq() {
    return Range(0, this.size);
  },
  last: function last(notSetValue) {
    return this.get(-1, notSetValue);
  },
  skipWhile: function skipWhile(predicate, context) {
    return reify(this, skipWhileFactory(this, predicate, context, false));
  },
  zip: function zip()
  /*, ...collections */
  {
    var collections = [this].concat(arrCopy(arguments));
    return reify(this, zipWithFactory(this, defaultZipper, collections));
  },
  zipAll: function zipAll()
  /*, ...collections */
  {
    var collections = [this].concat(arrCopy(arguments));
    return reify(this, zipWithFactory(this, defaultZipper, collections, true));
  },
  zipWith: function zipWith(zipper
  /*, ...collections */
  ) {
    var collections = arrCopy(arguments);
    collections[0] = this;
    return reify(this, zipWithFactory(this, zipper, collections));
  }
});
var IndexedCollectionPrototype = IndexedCollection.prototype;
IndexedCollectionPrototype[IS_INDEXED_SYMBOL] = true;
IndexedCollectionPrototype[IS_ORDERED_SYMBOL] = true;
mixin(SetCollection, {
  // ### ES6 Collection methods (ES6 Array and Map)
  get: function get(value, notSetValue) {
    return this.has(value) ? value : notSetValue;
  },
  includes: function includes(value) {
    return this.has(value);
  },
  // ### More sequential methods
  keySeq: function keySeq() {
    return this.valueSeq();
  }
});
SetCollection.prototype.has = CollectionPrototype.includes;
SetCollection.prototype.contains = SetCollection.prototype.includes; // Mixin subclasses

mixin(KeyedSeq, KeyedCollection.prototype);
mixin(IndexedSeq, IndexedCollection.prototype);
mixin(SetSeq, SetCollection.prototype); // #pragma Helper functions

function reduce(collection, reducer, reduction, context, useFirst, reverse) {
  assertNotInfinite(collection.size);

  collection.__iterate(function (v, k, c) {
    if (useFirst) {
      useFirst = false;
      reduction = v;
    } else {
      reduction = reducer.call(context, reduction, v, k, c);
    }
  }, reverse);

  return reduction;
}

function keyMapper(v, k) {
  return k;
}

function entryMapper(v, k) {
  return [k, v];
}

function not(predicate) {
  return function () {
    return !predicate.apply(this, arguments);
  };
}

function neg(predicate) {
  return function () {
    return -predicate.apply(this, arguments);
  };
}

function defaultZipper() {
  return arrCopy(arguments);
}

function defaultNegComparator(a, b) {
  return a < b ? 1 : a > b ? -1 : 0;
}

function hashCollection(collection) {
  if (collection.size === Infinity) {
    return 0;
  }

  var ordered = isOrdered(collection);
  var keyed = isKeyed(collection);
  var h = ordered ? 1 : 0;

  var size = collection.__iterate(keyed ? ordered ? function (v, k) {
    h = 31 * h + hashMerge(hash(v), hash(k)) | 0;
  } : function (v, k) {
    h = h + hashMerge(hash(v), hash(k)) | 0;
  } : ordered ? function (v) {
    h = 31 * h + hash(v) | 0;
  } : function (v) {
    h = h + hash(v) | 0;
  });

  return murmurHashOfSize(size, h);
}

function murmurHashOfSize(size, h) {
  h = imul(h, 0xcc9e2d51);
  h = imul(h << 15 | h >>> -15, 0x1b873593);
  h = imul(h << 13 | h >>> -13, 5);
  h = (h + 0xe6546b64 | 0) ^ size;
  h = imul(h ^ h >>> 16, 0x85ebca6b);
  h = imul(h ^ h >>> 13, 0xc2b2ae35);
  h = smi(h ^ h >>> 16);
  return h;
}

function hashMerge(a, b) {
  return a ^ b + 0x9e3779b9 + (a << 6) + (a >> 2) | 0; // int
}

var OrderedSet =
/*@__PURE__*/
function (Set$$1) {
  function OrderedSet(value) {
    return value === null || value === undefined ? emptyOrderedSet() : isOrderedSet(value) ? value : emptyOrderedSet().withMutations(function (set) {
      var iter = SetCollection(value);
      assertNotInfinite(iter.size);
      iter.forEach(function (v) {
        return set.add(v);
      });
    });
  }

  if (Set$$1) OrderedSet.__proto__ = Set$$1;
  OrderedSet.prototype = Object.create(Set$$1 && Set$$1.prototype);
  OrderedSet.prototype.constructor = OrderedSet;

  OrderedSet.of = function of()
  /*...values*/
  {
    return this(arguments);
  };

  OrderedSet.fromKeys = function fromKeys(value) {
    return this(KeyedCollection(value).keySeq());
  };

  OrderedSet.prototype.toString = function toString() {
    return this.__toString('OrderedSet {', '}');
  };

  return OrderedSet;
}(Set);

OrderedSet.isOrderedSet = isOrderedSet;
var OrderedSetPrototype = OrderedSet.prototype;
OrderedSetPrototype[IS_ORDERED_SYMBOL] = true;
OrderedSetPrototype.zip = IndexedCollectionPrototype.zip;
OrderedSetPrototype.zipWith = IndexedCollectionPrototype.zipWith;
OrderedSetPrototype.__empty = emptyOrderedSet;
OrderedSetPrototype.__make = makeOrderedSet;

function makeOrderedSet(map, ownerID) {
  var set = Object.create(OrderedSetPrototype);
  set.size = map ? map.size : 0;
  set._map = map;
  set.__ownerID = ownerID;
  return set;
}

var EMPTY_ORDERED_SET;

function emptyOrderedSet() {
  return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
}

var Record = function Record(defaultValues, name) {
  var hasInitialized;

  var RecordType = function Record(values) {
    var this$1 = this;

    if (values instanceof RecordType) {
      return values;
    }

    if (!(this instanceof RecordType)) {
      return new RecordType(values);
    }

    if (!hasInitialized) {
      hasInitialized = true;
      var keys = Object.keys(defaultValues);
      var indices = RecordTypePrototype._indices = {}; // Deprecated: left to attempt not to break any external code which
      // relies on a ._name property existing on record instances.
      // Use Record.getDescriptiveName() instead

      RecordTypePrototype._name = name;
      RecordTypePrototype._keys = keys;
      RecordTypePrototype._defaultValues = defaultValues;

      for (var i = 0; i < keys.length; i++) {
        var propName = keys[i];
        indices[propName] = i;

        if (RecordTypePrototype[propName]) {
          /* eslint-disable no-console */
          typeof console === 'object' && console.warn && console.warn('Cannot define ' + recordName(this) + ' with property "' + propName + '" since that property name is part of the Record API.');
          /* eslint-enable no-console */
        } else {
          setProp(RecordTypePrototype, propName);
        }
      }
    }

    this.__ownerID = undefined;
    this._values = List().withMutations(function (l) {
      l.setSize(this$1._keys.length);
      KeyedCollection(values).forEach(function (v, k) {
        l.set(this$1._indices[k], v === this$1._defaultValues[k] ? undefined : v);
      });
    });
  };

  var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
  RecordTypePrototype.constructor = RecordType;

  if (name) {
    RecordType.displayName = name;
  }

  return RecordType;
};

Record.prototype.toString = function toString() {
  var str = recordName(this) + ' { ';
  var keys = this._keys;
  var k;

  for (var i = 0, l = keys.length; i !== l; i++) {
    k = keys[i];
    str += (i ? ', ' : '') + k + ': ' + quoteString(this.get(k));
  }

  return str + ' }';
};

Record.prototype.equals = function equals(other) {
  return this === other || other && this._keys === other._keys && recordSeq(this).equals(recordSeq(other));
};

Record.prototype.hashCode = function hashCode() {
  return recordSeq(this).hashCode();
}; // @pragma Access


Record.prototype.has = function has(k) {
  return this._indices.hasOwnProperty(k);
};

Record.prototype.get = function get(k, notSetValue) {
  if (!this.has(k)) {
    return notSetValue;
  }

  var index = this._indices[k];

  var value = this._values.get(index);

  return value === undefined ? this._defaultValues[k] : value;
}; // @pragma Modification


Record.prototype.set = function set(k, v) {
  if (this.has(k)) {
    var newValues = this._values.set(this._indices[k], v === this._defaultValues[k] ? undefined : v);

    if (newValues !== this._values && !this.__ownerID) {
      return makeRecord(this, newValues);
    }
  }

  return this;
};

Record.prototype.remove = function remove(k) {
  return this.set(k);
};

Record.prototype.clear = function clear() {
  var newValues = this._values.clear().setSize(this._keys.length);

  return this.__ownerID ? this : makeRecord(this, newValues);
};

Record.prototype.wasAltered = function wasAltered() {
  return this._values.wasAltered();
};

Record.prototype.toSeq = function toSeq() {
  return recordSeq(this);
};

Record.prototype.toJS = function toJS$1() {
  return toJS(this);
};

Record.prototype.entries = function entries() {
  return this.__iterator(ITERATE_ENTRIES);
};

Record.prototype.__iterator = function __iterator(type, reverse) {
  return recordSeq(this).__iterator(type, reverse);
};

Record.prototype.__iterate = function __iterate(fn, reverse) {
  return recordSeq(this).__iterate(fn, reverse);
};

Record.prototype.__ensureOwner = function __ensureOwner(ownerID) {
  if (ownerID === this.__ownerID) {
    return this;
  }

  var newValues = this._values.__ensureOwner(ownerID);

  if (!ownerID) {
    this.__ownerID = ownerID;
    this._values = newValues;
    return this;
  }

  return makeRecord(this, newValues, ownerID);
};

Record.isRecord = isRecord;
Record.getDescriptiveName = recordName;
var RecordPrototype = Record.prototype;
RecordPrototype[IS_RECORD_SYMBOL] = true;
RecordPrototype[DELETE] = RecordPrototype.remove;
RecordPrototype.deleteIn = RecordPrototype.removeIn = deleteIn;
RecordPrototype.getIn = getIn$1;
RecordPrototype.hasIn = CollectionPrototype.hasIn;
RecordPrototype.merge = merge;
RecordPrototype.mergeWith = mergeWith;
RecordPrototype.mergeIn = mergeIn;
RecordPrototype.mergeDeep = mergeDeep$1;
RecordPrototype.mergeDeepWith = mergeDeepWith$1;
RecordPrototype.mergeDeepIn = mergeDeepIn;
RecordPrototype.setIn = setIn$1;
RecordPrototype.update = update$1;
RecordPrototype.updateIn = updateIn$1;
RecordPrototype.withMutations = withMutations;
RecordPrototype.asMutable = asMutable;
RecordPrototype.asImmutable = asImmutable;
RecordPrototype[ITERATOR_SYMBOL] = RecordPrototype.entries;
RecordPrototype.toJSON = RecordPrototype.toObject = CollectionPrototype.toObject;

RecordPrototype.inspect = RecordPrototype.toSource = function () {
  return this.toString();
};

function makeRecord(likeRecord, values, ownerID) {
  var record = Object.create(Object.getPrototypeOf(likeRecord));
  record._values = values;
  record.__ownerID = ownerID;
  return record;
}

function recordName(record) {
  return record.constructor.displayName || record.constructor.name || 'Record';
}

function recordSeq(record) {
  return keyedSeqFromValue(record._keys.map(function (k) {
    return [k, record.get(k)];
  }));
}

function setProp(prototype, name) {
  try {
    Object.defineProperty(prototype, name, {
      get: function () {
        return this.get(name);
      },
      set: function (value) {
        invariant(this.__ownerID, 'Cannot set on an immutable record.');
        this.set(name, value);
      }
    });
  } catch (error) {// Object.defineProperty failed. Probably IE8.
  }
}
/**
 * Returns a lazy Seq of `value` repeated `times` times. When `times` is
 * undefined, returns an infinite sequence of `value`.
 */


var Repeat =
/*@__PURE__*/
function (IndexedSeq$$1) {
  function Repeat(value, times) {
    if (!(this instanceof Repeat)) {
      return new Repeat(value, times);
    }

    this._value = value;
    this.size = times === undefined ? Infinity : Math.max(0, times);

    if (this.size === 0) {
      if (EMPTY_REPEAT) {
        return EMPTY_REPEAT;
      }

      EMPTY_REPEAT = this;
    }
  }

  if (IndexedSeq$$1) Repeat.__proto__ = IndexedSeq$$1;
  Repeat.prototype = Object.create(IndexedSeq$$1 && IndexedSeq$$1.prototype);
  Repeat.prototype.constructor = Repeat;

  Repeat.prototype.toString = function toString() {
    if (this.size === 0) {
      return 'Repeat []';
    }

    return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
  };

  Repeat.prototype.get = function get(index, notSetValue) {
    return this.has(index) ? this._value : notSetValue;
  };

  Repeat.prototype.includes = function includes(searchValue) {
    return is(this._value, searchValue);
  };

  Repeat.prototype.slice = function slice(begin, end) {
    var size = this.size;
    return wholeSlice(begin, end, size) ? this : new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
  };

  Repeat.prototype.reverse = function reverse() {
    return this;
  };

  Repeat.prototype.indexOf = function indexOf(searchValue) {
    if (is(this._value, searchValue)) {
      return 0;
    }

    return -1;
  };

  Repeat.prototype.lastIndexOf = function lastIndexOf(searchValue) {
    if (is(this._value, searchValue)) {
      return this.size;
    }

    return -1;
  };

  Repeat.prototype.__iterate = function __iterate(fn, reverse) {
    var size = this.size;
    var i = 0;

    while (i !== size) {
      if (fn(this._value, reverse ? size - ++i : i++, this) === false) {
        break;
      }
    }

    return i;
  };

  Repeat.prototype.__iterator = function __iterator(type, reverse) {
    var this$1 = this;
    var size = this.size;
    var i = 0;
    return new Iterator(function () {
      return i === size ? iteratorDone() : iteratorValue(type, reverse ? size - ++i : i++, this$1._value);
    });
  };

  Repeat.prototype.equals = function equals(other) {
    return other instanceof Repeat ? is(this._value, other._value) : deepEqual(other);
  };

  return Repeat;
}(IndexedSeq);

var EMPTY_REPEAT;

function fromJS(value, converter) {
  return fromJSWith([], converter || defaultConverter, value, '', converter && converter.length > 2 ? [] : undefined, {
    '': value
  });
}

function fromJSWith(stack, converter, value, key, keyPath, parentValue) {
  var toSeq = Array.isArray(value) ? IndexedSeq : isPlainObj(value) ? KeyedSeq : null;

  if (toSeq) {
    if (~stack.indexOf(value)) {
      throw new TypeError('Cannot convert circular structure to Immutable');
    }

    stack.push(value);
    keyPath && key !== '' && keyPath.push(key);
    var converted = converter.call(parentValue, key, toSeq(value).map(function (v, k) {
      return fromJSWith(stack, converter, v, k, keyPath, value);
    }), keyPath && keyPath.slice());
    stack.pop();
    keyPath && keyPath.pop();
    return converted;
  }

  return value;
}

function defaultConverter(k, v) {
  return isKeyed(v) ? v.toMap() : v.toList();
}

var version = "4.0.0-rc.11";
var Immutable = {
  version: version,
  Collection: Collection,
  // Note: Iterable is deprecated
  Iterable: Collection,
  Seq: Seq,
  Map: Map,
  OrderedMap: OrderedMap,
  List: List,
  Stack: Stack,
  Set: Set,
  OrderedSet: OrderedSet,
  Record: Record,
  Range: Range,
  Repeat: Repeat,
  is: is,
  fromJS: fromJS,
  hash: hash,
  isImmutable: isImmutable,
  isCollection: isCollection,
  isKeyed: isKeyed,
  isIndexed: isIndexed,
  isAssociative: isAssociative,
  isOrdered: isOrdered,
  isValueObject: isValueObject,
  isSeq: isSeq,
  isList: isList,
  isMap: isMap,
  isOrderedMap: isOrderedMap,
  isStack: isStack,
  isSet: isSet,
  isOrderedSet: isOrderedSet,
  isRecord: isRecord,
  get: get,
  getIn: getIn,
  has: has,
  hasIn: hasIn,
  merge: merge$1,
  mergeDeep: mergeDeep,
  mergeWith: mergeWith$1,
  mergeDeepWith: mergeDeepWith,
  remove: remove,
  removeIn: removeIn,
  set: set,
  setIn: setIn,
  update: update,
  updateIn: updateIn
}; // Note: Iterable is deprecated

var Iterable = Collection;
/* harmony default export */ __webpack_exports__["default"] = (Immutable);


/***/ }),

/***/ "./src/js/storage.js":
/*!***************************!*\
  !*** ./src/js/storage.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  mergeDeep
} = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");

Adequa.storage = null;
Adequa.storage = {}; // function mergeDeep(...objects) {
//     const isObject = obj => obj && typeof obj === 'object';
//
//     return objects.reduce((prev, obj) => {
//         Object.keys(obj).forEach((key) => {
//             const pVal = prev[key];
//             const oVal = obj[key];
//
//             if (Array.isArray(pVal) && Array.isArray(oVal)) {
//                 prev[key] = pVal.concat(...oVal);
//             } else if (isObject(pVal) && isObject(oVal)) {
//                 prev[key] = mergeDeep(pVal, oVal);
//             } else {
//                 prev[key] = oVal;
//             }
//         });
//
//         return prev;
//     }, {});
// }

const store = function () {
  console.time('store');
  Adequa.API.storage.set({
    current: Adequa.storage
  });
  console.timeEnd('store');
};

Adequa.setStorage = function (newCurrent) {
  if (Adequa.storage === null) return;
  const oldCurrent = Adequa.storage || {};
  const current = mergeDeep(oldCurrent, newCurrent);
  Adequa.storage = current;
  clearTimeout(Adequa.setStorageTimeout || 0);
  Adequa.setStorageTimeout = setTimeout(store, 2000); // Adequa.API.storage.set({current});
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ltbXV0YWJsZS9kaXN0L2ltbXV0YWJsZS5lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc3RvcmFnZS5qcyJdLCJuYW1lcyI6WyJERUxFVEUiLCJTSElGVCIsIlNJWkUiLCJNQVNLIiwiTk9UX1NFVCIsIk1ha2VSZWYiLCJ2YWx1ZSIsIlNldFJlZiIsInJlZiIsIk93bmVySUQiLCJlbnN1cmVTaXplIiwiaXRlciIsInNpemUiLCJ1bmRlZmluZWQiLCJfX2l0ZXJhdGUiLCJyZXR1cm5UcnVlIiwid3JhcEluZGV4IiwiaW5kZXgiLCJ1aW50MzJJbmRleCIsIk5hTiIsIndob2xlU2xpY2UiLCJiZWdpbiIsImVuZCIsImlzTmVnIiwicmVzb2x2ZUJlZ2luIiwicmVzb2x2ZUluZGV4IiwicmVzb2x2ZUVuZCIsImRlZmF1bHRJbmRleCIsIkluZmluaXR5IiwiTWF0aCIsIm1heCIsIm1pbiIsIklTX0NPTExFQ1RJT05fU1lNQk9MIiwiaXNDb2xsZWN0aW9uIiwibWF5YmVDb2xsZWN0aW9uIiwiQm9vbGVhbiIsIklTX0tFWUVEX1NZTUJPTCIsImlzS2V5ZWQiLCJtYXliZUtleWVkIiwiSVNfSU5ERVhFRF9TWU1CT0wiLCJpc0luZGV4ZWQiLCJtYXliZUluZGV4ZWQiLCJpc0Fzc29jaWF0aXZlIiwibWF5YmVBc3NvY2lhdGl2ZSIsIkNvbGxlY3Rpb24iLCJTZXEiLCJLZXllZENvbGxlY3Rpb24iLCJLZXllZFNlcSIsIl9fcHJvdG9fXyIsInByb3RvdHlwZSIsIk9iamVjdCIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwiSW5kZXhlZENvbGxlY3Rpb24iLCJJbmRleGVkU2VxIiwiU2V0Q29sbGVjdGlvbiIsIlNldFNlcSIsIktleWVkIiwiSW5kZXhlZCIsIlNldCIsIklTX1NFUV9TWU1CT0wiLCJpc1NlcSIsIm1heWJlU2VxIiwiSVNfUkVDT1JEX1NZTUJPTCIsImlzUmVjb3JkIiwibWF5YmVSZWNvcmQiLCJpc0ltbXV0YWJsZSIsIm1heWJlSW1tdXRhYmxlIiwiSVNfT1JERVJFRF9TWU1CT0wiLCJpc09yZGVyZWQiLCJtYXliZU9yZGVyZWQiLCJJVEVSQVRFX0tFWVMiLCJJVEVSQVRFX1ZBTFVFUyIsIklURVJBVEVfRU5UUklFUyIsIlJFQUxfSVRFUkFUT1JfU1lNQk9MIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJGQVVYX0lURVJBVE9SX1NZTUJPTCIsIklURVJBVE9SX1NZTUJPTCIsIkl0ZXJhdG9yIiwibmV4dCIsInRvU3RyaW5nIiwiS0VZUyIsIlZBTFVFUyIsIkVOVFJJRVMiLCJpbnNwZWN0IiwidG9Tb3VyY2UiLCJpdGVyYXRvclZhbHVlIiwidHlwZSIsImsiLCJ2IiwiaXRlcmF0b3JSZXN1bHQiLCJkb25lIiwiaXRlcmF0b3JEb25lIiwiaGFzSXRlcmF0b3IiLCJtYXliZUl0ZXJhYmxlIiwiZ2V0SXRlcmF0b3JGbiIsImlzSXRlcmF0b3IiLCJtYXliZUl0ZXJhdG9yIiwiZ2V0SXRlcmF0b3IiLCJpdGVyYWJsZSIsIml0ZXJhdG9yRm4iLCJjYWxsIiwiaGFzT3duUHJvcGVydHkiLCJpc0FycmF5TGlrZSIsIkFycmF5IiwiaXNBcnJheSIsIk51bWJlciIsImlzSW50ZWdlciIsImxlbmd0aCIsImtleXMiLCJDb2xsZWN0aW9uJCQxIiwiZW1wdHlTZXF1ZW5jZSIsInRvU2VxIiwic2VxRnJvbVZhbHVlIiwiX190b1N0cmluZyIsImNhY2hlUmVzdWx0IiwiX2NhY2hlIiwiX19pdGVyYXRlVW5jYWNoZWQiLCJlbnRyeVNlcSIsInRvQXJyYXkiLCJmbiIsInJldmVyc2UiLCJjYWNoZSIsImkiLCJlbnRyeSIsIl9faXRlcmF0b3IiLCJfX2l0ZXJhdG9yVW5jYWNoZWQiLCJ0b0tleWVkU2VxIiwiZnJvbUVudHJ5U2VxIiwia2V5ZWRTZXFGcm9tVmFsdWUiLCJ0b0luZGV4ZWRTZXEiLCJpbmRleGVkU2VxRnJvbVZhbHVlIiwib2YiLCJhcmd1bWVudHMiLCJ0b1NldFNlcSIsIkFycmF5U2VxIiwiYXJyYXkiLCJfYXJyYXkiLCJnZXQiLCJub3RTZXRWYWx1ZSIsImhhcyIsImlpIiwiT2JqZWN0U2VxIiwib2JqZWN0IiwiX29iamVjdCIsIl9rZXlzIiwia2V5IiwiQ29sbGVjdGlvblNlcSIsImNvbGxlY3Rpb24iLCJfY29sbGVjdGlvbiIsIml0ZXJhdGlvbnMiLCJzdGVwIiwiRU1QVFlfU0VRIiwic2VxIiwiVHlwZUVycm9yIiwibWF5YmVJbmRleGVkU2VxRnJvbVZhbHVlIiwiSVNfTUFQX1NZTUJPTCIsImlzTWFwIiwibWF5YmVNYXAiLCJpc09yZGVyZWRNYXAiLCJtYXliZU9yZGVyZWRNYXAiLCJpc1ZhbHVlT2JqZWN0IiwibWF5YmVWYWx1ZSIsImVxdWFscyIsImhhc2hDb2RlIiwiaXMiLCJ2YWx1ZUEiLCJ2YWx1ZUIiLCJ2YWx1ZU9mIiwiaW11bCIsImEiLCJiIiwiYyIsImQiLCJzbWkiLCJpMzIiLCJkZWZhdWx0VmFsdWVPZiIsImhhc2giLCJvIiwiaGFzaE51bWJlciIsIlNUUklOR19IQVNIX0NBQ0hFX01JTl9TVFJMRU4iLCJjYWNoZWRIYXNoU3RyaW5nIiwiaGFzaFN0cmluZyIsImhhc2hKU09iaiIsIkVycm9yIiwibiIsInN0cmluZyIsImhhc2hlZCIsInN0cmluZ0hhc2hDYWNoZSIsIlNUUklOR19IQVNIX0NBQ0hFX1NJWkUiLCJTVFJJTkdfSEFTSF9DQUNIRV9NQVhfU0laRSIsImNoYXJDb2RlQXQiLCJvYmoiLCJ1c2luZ1dlYWtNYXAiLCJ3ZWFrTWFwIiwiVUlEX0hBU0hfS0VZIiwiY2FuRGVmaW5lUHJvcGVydHkiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImdldElFTm9kZUhhc2giLCJvYmpIYXNoVUlEIiwic2V0IiwiaXNFeHRlbnNpYmxlIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhcHBseSIsIm5vZGVUeXBlIiwiZSIsIm5vZGUiLCJ1bmlxdWVJRCIsImRvY3VtZW50RWxlbWVudCIsIldlYWtNYXAiLCJUb0tleWVkU2VxdWVuY2UiLCJLZXllZFNlcSQkMSIsImluZGV4ZWQiLCJ1c2VLZXlzIiwiX2l0ZXIiLCJfdXNlS2V5cyIsInZhbHVlU2VxIiwidGhpcyQxIiwicmV2ZXJzZWRTZXF1ZW5jZSIsInJldmVyc2VGYWN0b3J5IiwibWFwIiwibWFwcGVyIiwiY29udGV4dCIsIm1hcHBlZFNlcXVlbmNlIiwibWFwRmFjdG9yeSIsIlRvSW5kZXhlZFNlcXVlbmNlIiwiSW5kZXhlZFNlcSQkMSIsImluY2x1ZGVzIiwiVG9TZXRTZXF1ZW5jZSIsIlNldFNlcSQkMSIsIkZyb21FbnRyaWVzU2VxdWVuY2UiLCJlbnRyaWVzIiwidmFsaWRhdGVFbnRyeSIsImluZGV4ZWRDb2xsZWN0aW9uIiwiY2FjaGVSZXN1bHRUaHJvdWdoIiwiZmxpcEZhY3RvcnkiLCJmbGlwU2VxdWVuY2UiLCJtYWtlU2VxdWVuY2UiLCJmbGlwIiwiZmlsdGVyRmFjdG9yeSIsInByZWRpY2F0ZSIsImZpbHRlclNlcXVlbmNlIiwiY291bnRCeUZhY3RvcnkiLCJncm91cGVyIiwiZ3JvdXBzIiwiTWFwIiwiYXNNdXRhYmxlIiwidXBkYXRlIiwiYXNJbW11dGFibGUiLCJncm91cEJ5RmFjdG9yeSIsImlzS2V5ZWRJdGVyIiwiT3JkZXJlZE1hcCIsInB1c2giLCJjb2VyY2UiLCJjb2xsZWN0aW9uQ2xhc3MiLCJhcnIiLCJyZWlmeSIsInNsaWNlRmFjdG9yeSIsIm9yaWdpbmFsU2l6ZSIsInJlc29sdmVkQmVnaW4iLCJyZXNvbHZlZEVuZCIsInJlc29sdmVkU2l6ZSIsInNsaWNlU2l6ZSIsInNsaWNlU2VxIiwic2tpcHBlZCIsImlzU2tpcHBpbmciLCJ0YWtlV2hpbGVGYWN0b3J5IiwidGFrZVNlcXVlbmNlIiwiaXRlcmF0aW5nIiwic2tpcFdoaWxlRmFjdG9yeSIsInNraXBTZXF1ZW5jZSIsInNraXBwaW5nIiwiY29uY2F0RmFjdG9yeSIsInZhbHVlcyIsImlzS2V5ZWRDb2xsZWN0aW9uIiwiaXRlcnMiLCJjb25jYXQiLCJmaWx0ZXIiLCJzaW5nbGV0b24iLCJjb25jYXRTZXEiLCJmbGF0dGVuIiwicmVkdWNlIiwic3VtIiwiZmxhdHRlbkZhY3RvcnkiLCJkZXB0aCIsImZsYXRTZXF1ZW5jZSIsInN0b3BwZWQiLCJmbGF0RGVlcCIsImN1cnJlbnREZXB0aCIsInN0YWNrIiwicG9wIiwiZmxhdE1hcEZhY3RvcnkiLCJpbnRlcnBvc2VGYWN0b3J5Iiwic2VwYXJhdG9yIiwiaW50ZXJwb3NlZFNlcXVlbmNlIiwic29ydEZhY3RvcnkiLCJjb21wYXJhdG9yIiwiZGVmYXVsdENvbXBhcmF0b3IiLCJzb3J0IiwiZm9yRWFjaCIsIm1heEZhY3RvcnkiLCJtYXhDb21wYXJlIiwiY29tcCIsInppcFdpdGhGYWN0b3J5Iiwia2V5SXRlciIsInppcHBlciIsInppcEFsbCIsInppcFNlcXVlbmNlIiwic2l6ZXMiLCJpdGVyYXRvcnMiLCJpc0RvbmUiLCJzdGVwcyIsImV2ZXJ5IiwicyIsInNvbWUiLCJhcnJDb3B5Iiwib2Zmc2V0IiwibGVuIiwibmV3QXJyIiwiaW52YXJpYW50IiwiY29uZGl0aW9uIiwiZXJyb3IiLCJhc3NlcnROb3RJbmZpbml0ZSIsImNvZXJjZUtleVBhdGgiLCJrZXlQYXRoIiwiaXNQbGFpbk9iaiIsIm5hbWUiLCJpc0RhdGFTdHJ1Y3R1cmUiLCJxdW90ZVN0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJTdHJpbmciLCJfaWdub3JlRXJyb3IiLCJzaGFsbG93Q29weSIsImZyb20iLCJ0byIsInJlbW92ZSIsImNvbGxlY3Rpb25Db3B5Iiwic3BsaWNlIiwidXBkYXRlSW4iLCJ1cGRhdGVyIiwidXBkYXRlZFZhbHVlIiwidXBkYXRlSW5EZWVwbHkiLCJpbkltbXV0YWJsZSIsImV4aXN0aW5nIiwid2FzTm90U2V0IiwiZXhpc3RpbmdWYWx1ZSIsIm5ld1ZhbHVlIiwic2xpY2UiLCJuZXh0RXhpc3RpbmciLCJuZXh0VXBkYXRlZCIsImVtcHR5TWFwIiwic2V0SW4iLCJzZXRJbiQxIiwicmVtb3ZlSW4iLCJkZWxldGVJbiIsInVwZGF0ZSQxIiwidXBkYXRlSW4kMSIsIm1lcmdlIiwibWVyZ2VJbnRvS2V5ZWRXaXRoIiwibWVyZ2VXaXRoIiwibWVyZ2VyIiwiY29sbGVjdGlvbnMiLCJjb2xsZWN0aW9uJDEiLCJfX293bmVySUQiLCJ3aXRoTXV0YXRpb25zIiwibWVyZ2VJbnRvQ29sbGVjdGlvbiIsIm9sZFZhbCIsIm1lcmdlJDEiLCJzb3VyY2VzIiwibWVyZ2VXaXRoU291cmNlcyIsIm1lcmdlV2l0aCQxIiwibWVyZ2VEZWVwIiwibWVyZ2VEZWVwV2l0aFNvdXJjZXMiLCJtZXJnZURlZXBXaXRoIiwiZGVlcE1lcmdlcldpdGgiLCJtZXJnZWQiLCJtZXJnZUl0ZW0iLCJoYXNWYWwiLCJuZXh0VmFsIiwiZGVlcE1lcmdlciIsIm9sZFZhbHVlIiwibWVyZ2VEZWVwJDEiLCJtZXJnZURlZXBXaXRoJDEiLCJtZXJnZUluIiwibSIsIm1lcmdlRGVlcEluIiwibXV0YWJsZSIsIndhc0FsdGVyZWQiLCJfX2Vuc3VyZU93bmVyIiwiX19hbHRlcmVkIiwiS2V5ZWRDb2xsZWN0aW9uJCQxIiwia2V5VmFsdWVzIiwiX3Jvb3QiLCJ1cGRhdGVNYXAiLCJkZWxldGVBbGwiLCJjbGVhciIsIl9faGFzaCIsInNvcnRCeSIsIk1hcEl0ZXJhdG9yIiwiaXRlcmF0ZSIsIm93bmVySUQiLCJtYWtlTWFwIiwiTWFwUHJvdG90eXBlIiwicmVtb3ZlQWxsIiwicmVzdWx0IiwiQXJyYXlNYXBOb2RlIiwic2hpZnQiLCJrZXlIYXNoIiwiZGlkQ2hhbmdlU2l6ZSIsImRpZEFsdGVyIiwicmVtb3ZlZCIsImlkeCIsImV4aXN0cyIsIk1BWF9BUlJBWV9NQVBfU0laRSIsImNyZWF0ZU5vZGVzIiwiaXNFZGl0YWJsZSIsIm5ld0VudHJpZXMiLCJCaXRtYXBJbmRleGVkTm9kZSIsImJpdG1hcCIsIm5vZGVzIiwiYml0IiwicG9wQ291bnQiLCJrZXlIYXNoRnJhZyIsIm5ld05vZGUiLCJ1cGRhdGVOb2RlIiwiTUFYX0JJVE1BUF9JTkRFWEVEX1NJWkUiLCJleHBhbmROb2RlcyIsImlzTGVhZk5vZGUiLCJuZXdCaXRtYXAiLCJuZXdOb2RlcyIsInNldEF0Iiwic3BsaWNlT3V0Iiwic3BsaWNlSW4iLCJIYXNoQXJyYXlNYXBOb2RlIiwiY291bnQiLCJuZXdDb3VudCIsIk1JTl9IQVNIX0FSUkFZX01BUF9TSVpFIiwicGFja05vZGVzIiwiSGFzaENvbGxpc2lvbk5vZGUiLCJtZXJnZUludG9Ob2RlIiwiVmFsdWVOb2RlIiwia2V5TWF0Y2giLCJtYXhJbmRleCIsIkl0ZXJhdG9yJCQxIiwiX3R5cGUiLCJfcmV2ZXJzZSIsIl9zdGFjayIsIm1hcEl0ZXJhdG9yRnJhbWUiLCJtYXBJdGVyYXRvclZhbHVlIiwic3ViTm9kZSIsIl9fcHJldiIsInByZXYiLCJyb290IiwiaGFzaCQkMSIsIkVNUFRZX01BUCIsIm5ld1Jvb3QiLCJuZXdTaXplIiwiaWR4MSIsImlkeDIiLCJleGNsdWRpbmciLCJwYWNrZWRJSSIsInBhY2tlZE5vZGVzIiwiaW5jbHVkaW5nIiwiZXhwYW5kZWROb2RlcyIsIngiLCJ2YWwiLCJjYW5FZGl0IiwibmV3QXJyYXkiLCJuZXdMZW4iLCJhZnRlciIsIklTX0xJU1RfU1lNQk9MIiwiaXNMaXN0IiwibWF5YmVMaXN0IiwiTGlzdCIsIkluZGV4ZWRDb2xsZWN0aW9uJCQxIiwiZW1wdHkiLCJlbXB0eUxpc3QiLCJtYWtlTGlzdCIsIlZOb2RlIiwibGlzdCIsInNldFNpemUiLCJfb3JpZ2luIiwibGlzdE5vZGVGb3IiLCJ1cGRhdGVMaXN0IiwiaW5zZXJ0IiwiX2NhcGFjaXR5IiwiX2xldmVsIiwiX3RhaWwiLCJvbGRTaXplIiwic2V0TGlzdEJvdW5kcyIsInVuc2hpZnQiLCJhcmd1bWVudHMkMSIsInNlcXMiLCJhcmd1bWVudCIsIml0ZXJhdGVMaXN0IiwiRE9ORSIsIkxpc3RQcm90b3R5cGUiLCJyZW1vdmVCZWZvcmUiLCJsZXZlbCIsIm9yaWdpbkluZGV4IiwicmVtb3ZpbmdGaXJzdCIsIm5ld0NoaWxkIiwib2xkQ2hpbGQiLCJlZGl0YWJsZSIsImVkaXRhYmxlVk5vZGUiLCJyZW1vdmVBZnRlciIsInNpemVJbmRleCIsImxlZnQiLCJyaWdodCIsInRhaWxQb3MiLCJnZXRUYWlsT2Zmc2V0IiwidGFpbCIsIml0ZXJhdGVOb2RlT3JMZWFmIiwiaXRlcmF0ZUxlYWYiLCJpdGVyYXRlTm9kZSIsIm9yaWdpbiIsImNhcGFjaXR5IiwiRU1QVFlfTElTVCIsIm5ld1RhaWwiLCJ1cGRhdGVWTm9kZSIsIm5vZGVIYXMiLCJsb3dlck5vZGUiLCJuZXdMb3dlck5vZGUiLCJyYXdJbmRleCIsIm93bmVyIiwib2xkT3JpZ2luIiwib2xkQ2FwYWNpdHkiLCJuZXdPcmlnaW4iLCJuZXdDYXBhY2l0eSIsIm5ld0xldmVsIiwib2Zmc2V0U2hpZnQiLCJvbGRUYWlsT2Zmc2V0IiwibmV3VGFpbE9mZnNldCIsIm9sZFRhaWwiLCJiZWdpbkluZGV4IiwiTWFwJCQxIiwiZW1wdHlPcmRlcmVkTWFwIiwiX21hcCIsIl9saXN0IiwidXBkYXRlT3JkZXJlZE1hcCIsIm5ld01hcCIsIm5ld0xpc3QiLCJtYWtlT3JkZXJlZE1hcCIsIm9tYXAiLCJFTVBUWV9PUkRFUkVEX01BUCIsInRvTWFwIiwiSVNfU1RBQ0tfU1lNQk9MIiwiaXNTdGFjayIsIm1heWJlU3RhY2siLCJTdGFjayIsImVtcHR5U3RhY2siLCJwdXNoQWxsIiwiaGVhZCIsIl9oZWFkIiwicGVlayIsIm1ha2VTdGFjayIsIlN0YWNrUHJvdG90eXBlIiwidW5zaGlmdEFsbCIsIkVNUFRZX1NUQUNLIiwiSVNfU0VUX1NZTUJPTCIsImlzU2V0IiwibWF5YmVTZXQiLCJpc09yZGVyZWRTZXQiLCJtYXliZU9yZGVyZWRTZXQiLCJkZWVwRXF1YWwiLCJub3RBc3NvY2lhdGl2ZSIsImZsaXBwZWQiLCJfIiwiYWxsRXF1YWwiLCJiU2l6ZSIsIm1peGluIiwiY3RvciIsIm1ldGhvZHMiLCJrZXlDb3BpZXIiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJ0b0pTIiwicmVzdWx0JDEiLCJTZXRDb2xsZWN0aW9uJCQxIiwiZW1wdHlTZXQiLCJhZGQiLCJmcm9tS2V5cyIsImtleVNlcSIsImludGVyc2VjdCIsInNldHMiLCJTZXRQcm90b3R5cGUiLCJ1bmlvbiIsInVwZGF0ZVNldCIsInJlbW92ZXMiLCJhZGRzIiwibWFwcGVkIiwidG9SZW1vdmUiLCJzdWJ0cmFjdCIsIk9yZGVyZWRTZXQiLCJfX2VtcHR5IiwiX19tYWtlIiwibWFrZVNldCIsIkVNUFRZX1NFVCIsIlJhbmdlIiwic3RhcnQiLCJhYnMiLCJfc3RhcnQiLCJfZW5kIiwiX3N0ZXAiLCJjZWlsIiwiRU1QVFlfUkFOR0UiLCJzZWFyY2hWYWx1ZSIsInBvc3NpYmxlSW5kZXgiLCJmbG9vciIsImluZGV4T2YiLCJvZmZzZXRWYWx1ZSIsImxhc3RJbmRleE9mIiwib3RoZXIiLCJnZXRJbiIsInNlYXJjaEtleVBhdGgiLCJnZXRJbiQxIiwiaGFzSW4iLCJoYXNJbiQxIiwidG9PYmplY3QiLCJpc0l0ZXJhYmxlIiwidXNlVHVwbGVzIiwidG9KUyQxIiwidG9PcmRlcmVkTWFwIiwidG9PcmRlcmVkU2V0IiwidG9TZXQiLCJ0b1N0YWNrIiwidG9MaXN0IiwiX190b1N0cmluZ01hcHBlciIsImpvaW4iLCJyZXR1cm5WYWx1ZSIsImZpbmQiLCJmaW5kRW50cnkiLCJzaWRlRWZmZWN0IiwiYmluZCIsImpvaW5lZCIsImlzRmlyc3QiLCJyZWR1Y2UkMSIsInJlZHVjZXIiLCJpbml0aWFsUmVkdWN0aW9uIiwicmVkdWNlUmlnaHQiLCJub3QiLCJidXRMYXN0IiwiaXNFbXB0eSIsImNvdW50QnkiLCJlbnRyaWVzU2VxdWVuY2UiLCJlbnRyeU1hcHBlciIsImZpbHRlck5vdCIsImZvdW5kIiwiZmluZEtleSIsImZpbmRMYXN0IiwiZmluZExhc3RFbnRyeSIsImZpbmRMYXN0S2V5IiwiZmlyc3QiLCJmbGF0TWFwIiwic2VhcmNoS2V5IiwiZ3JvdXBCeSIsImlzU3Vic2V0IiwiaXNTdXBlcnNldCIsImtleU9mIiwia2V5TWFwcGVyIiwibGFzdCIsImxhc3RLZXlPZiIsIm1heEJ5IiwibmVnIiwiZGVmYXVsdE5lZ0NvbXBhcmF0b3IiLCJtaW5CeSIsInJlc3QiLCJza2lwIiwiYW1vdW50Iiwic2tpcExhc3QiLCJza2lwV2hpbGUiLCJza2lwVW50aWwiLCJ0YWtlIiwidGFrZUxhc3QiLCJ0YWtlV2hpbGUiLCJ0YWtlVW50aWwiLCJoYXNoQ29sbGVjdGlvbiIsIkNvbGxlY3Rpb25Qcm90b3R5cGUiLCJ0b0pTT04iLCJjaGFpbiIsImNvbnRhaW5zIiwibWFwRW50cmllcyIsIm1hcEtleXMiLCJLZXllZENvbGxlY3Rpb25Qcm90b3R5cGUiLCJmaW5kSW5kZXgiLCJyZW1vdmVOdW0iLCJudW1BcmdzIiwic3BsaWNlZCIsImZpbmRMYXN0SW5kZXgiLCJpbnRlcnBvc2UiLCJpbnRlcmxlYXZlIiwiemlwcGVkIiwiaW50ZXJsZWF2ZWQiLCJ6aXAiLCJkZWZhdWx0WmlwcGVyIiwiemlwV2l0aCIsIkluZGV4ZWRDb2xsZWN0aW9uUHJvdG90eXBlIiwicmVkdWN0aW9uIiwidXNlRmlyc3QiLCJvcmRlcmVkIiwia2V5ZWQiLCJoIiwiaGFzaE1lcmdlIiwibXVybXVySGFzaE9mU2l6ZSIsIlNldCQkMSIsImVtcHR5T3JkZXJlZFNldCIsIk9yZGVyZWRTZXRQcm90b3R5cGUiLCJtYWtlT3JkZXJlZFNldCIsIkVNUFRZX09SREVSRURfU0VUIiwiUmVjb3JkIiwiZGVmYXVsdFZhbHVlcyIsImhhc0luaXRpYWxpemVkIiwiUmVjb3JkVHlwZSIsImluZGljZXMiLCJSZWNvcmRUeXBlUHJvdG90eXBlIiwiX2luZGljZXMiLCJfbmFtZSIsIl9kZWZhdWx0VmFsdWVzIiwicHJvcE5hbWUiLCJjb25zb2xlIiwid2FybiIsInJlY29yZE5hbWUiLCJzZXRQcm9wIiwiX3ZhbHVlcyIsImwiLCJSZWNvcmRQcm90b3R5cGUiLCJkaXNwbGF5TmFtZSIsInN0ciIsInJlY29yZFNlcSIsIm5ld1ZhbHVlcyIsIm1ha2VSZWNvcmQiLCJnZXREZXNjcmlwdGl2ZU5hbWUiLCJsaWtlUmVjb3JkIiwicmVjb3JkIiwiZ2V0UHJvdG90eXBlT2YiLCJSZXBlYXQiLCJ0aW1lcyIsIl92YWx1ZSIsIkVNUFRZX1JFUEVBVCIsImZyb21KUyIsImNvbnZlcnRlciIsImZyb21KU1dpdGgiLCJkZWZhdWx0Q29udmVydGVyIiwicGFyZW50VmFsdWUiLCJjb252ZXJ0ZWQiLCJ2ZXJzaW9uIiwiSW1tdXRhYmxlIiwiSXRlcmFibGUiLCJyZXF1aXJlIiwiQWRlcXVhIiwic3RvcmFnZSIsInN0b3JlIiwidGltZSIsIkFQSSIsImN1cnJlbnQiLCJ0aW1lRW5kIiwic2V0U3RvcmFnZSIsIm5ld0N1cnJlbnQiLCJvbGRDdXJyZW50IiwiY2xlYXJUaW1lb3V0Iiwic2V0U3RvcmFnZVRpbWVvdXQiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QUFDQTs7QUFDQSxNQUFNQyxLQUFLLEdBQUcsWUFBVTtBQUNwQmhDLFNBQU8sQ0FBQ2lDLElBQVIsQ0FBYSxPQUFiO0FBQ0FILFFBQU0sQ0FBQ0ksR0FBUCxDQUFXSCxPQUFYLENBQW1CemlCLEdBQW5CLENBQXVCO0FBQUM2aUIsV0FBTyxFQUFFTCxNQUFNLENBQUNDO0FBQWpCLEdBQXZCO0FBQ0EvQixTQUFPLENBQUNvQyxPQUFSLENBQWdCLE9BQWhCO0FBQ0gsQ0FKRDs7QUFNQU4sTUFBTSxDQUFDTyxVQUFQLEdBQW9CLFVBQVVDLFVBQVYsRUFBc0I7QUFDdEMsTUFBSVIsTUFBTSxDQUFDQyxPQUFQLEtBQW1CLElBQXZCLEVBQ0k7QUFFSixRQUFNUSxVQUFVLEdBQUdULE1BQU0sQ0FBQ0MsT0FBUCxJQUFrQixFQUFyQztBQUNBLFFBQU1JLE9BQU8sR0FBRzlYLFNBQVMsQ0FBQ2tZLFVBQUQsRUFBYUQsVUFBYixDQUF6QjtBQUVBUixRQUFNLENBQUNDLE9BQVAsR0FBaUJJLE9BQWpCO0FBQ0FLLGNBQVksQ0FBQ1YsTUFBTSxDQUFDVyxpQkFBUCxJQUE0QixDQUE3QixDQUFaO0FBQ0FYLFFBQU0sQ0FBQ1csaUJBQVAsR0FBMkJDLFVBQVUsQ0FBQ1YsS0FBRCxFQUFRLElBQVIsQ0FBckMsQ0FUc0MsQ0FVdEM7QUFDSCxDQVhELEMiLCJmaWxlIjoic3RvcmFnZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9zdG9yYWdlLmpzXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBVc2VkIGZvciBzZXR0aW5nIHByb3RvdHlwZSBtZXRob2RzIHRoYXQgSUU4IGNob2tlcyBvbi5cbnZhciBERUxFVEUgPSAnZGVsZXRlJztcblxuLy8gQ29uc3RhbnRzIGRlc2NyaWJpbmcgdGhlIHNpemUgb2YgdHJpZSBub2Rlcy5cbnZhciBTSElGVCA9IDU7IC8vIFJlc3VsdGVkIGluIGJlc3QgcGVyZm9ybWFuY2UgYWZ0ZXIgX19fX19fP1xudmFyIFNJWkUgPSAxIDw8IFNISUZUO1xudmFyIE1BU0sgPSBTSVpFIC0gMTtcblxuLy8gQSBjb25zaXN0ZW50IHNoYXJlZCB2YWx1ZSByZXByZXNlbnRpbmcgXCJub3Qgc2V0XCIgd2hpY2ggZXF1YWxzIG5vdGhpbmcgb3RoZXJcbi8vIHRoYW4gaXRzZWxmLCBhbmQgbm90aGluZyB0aGF0IGNvdWxkIGJlIHByb3ZpZGVkIGV4dGVybmFsbHkuXG52YXIgTk9UX1NFVCA9IHt9O1xuXG4vLyBCb29sZWFuIHJlZmVyZW5jZXMsIFJvdWdoIGVxdWl2YWxlbnQgb2YgYGJvb2wgJmAuXG5mdW5jdGlvbiBNYWtlUmVmKCkge1xuICByZXR1cm4geyB2YWx1ZTogZmFsc2UgfTtcbn1cblxuZnVuY3Rpb24gU2V0UmVmKHJlZikge1xuICBpZiAocmVmKSB7XG4gICAgcmVmLnZhbHVlID0gdHJ1ZTtcbiAgfVxufVxuXG4vLyBBIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSB2YWx1ZSByZXByZXNlbnRpbmcgYW4gXCJvd25lclwiIGZvciB0cmFuc2llbnQgd3JpdGVzXG4vLyB0byB0cmllcy4gVGhlIHJldHVybiB2YWx1ZSB3aWxsIG9ubHkgZXZlciBlcXVhbCBpdHNlbGYsIGFuZCB3aWxsIG5vdCBlcXVhbFxuLy8gdGhlIHJldHVybiBvZiBhbnkgc3Vic2VxdWVudCBjYWxsIG9mIHRoaXMgZnVuY3Rpb24uXG5mdW5jdGlvbiBPd25lcklEKCkge31cblxuZnVuY3Rpb24gZW5zdXJlU2l6ZShpdGVyKSB7XG4gIGlmIChpdGVyLnNpemUgPT09IHVuZGVmaW5lZCkge1xuICAgIGl0ZXIuc2l6ZSA9IGl0ZXIuX19pdGVyYXRlKHJldHVyblRydWUpO1xuICB9XG4gIHJldHVybiBpdGVyLnNpemU7XG59XG5cbmZ1bmN0aW9uIHdyYXBJbmRleChpdGVyLCBpbmRleCkge1xuICAvLyBUaGlzIGltcGxlbWVudHMgXCJpcyBhcnJheSBpbmRleFwiIHdoaWNoIHRoZSBFQ01BU3RyaW5nIHNwZWMgZGVmaW5lcyBhczpcbiAgLy9cbiAgLy8gICAgIEEgU3RyaW5nIHByb3BlcnR5IG5hbWUgUCBpcyBhbiBhcnJheSBpbmRleCBpZiBhbmQgb25seSBpZlxuICAvLyAgICAgVG9TdHJpbmcoVG9VaW50MzIoUCkpIGlzIGVxdWFsIHRvIFAgYW5kIFRvVWludDMyKFApIGlzIG5vdCBlcXVhbFxuICAvLyAgICAgdG8gMl4zMuKIkjEuXG4gIC8vXG4gIC8vIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1hcnJheS1leG90aWMtb2JqZWN0c1xuICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJykge1xuICAgIHZhciB1aW50MzJJbmRleCA9IGluZGV4ID4+PiAwOyAvLyBOID4+PiAwIGlzIHNob3J0aGFuZCBmb3IgVG9VaW50MzJcbiAgICBpZiAoJycgKyB1aW50MzJJbmRleCAhPT0gaW5kZXggfHwgdWludDMySW5kZXggPT09IDQyOTQ5NjcyOTUpIHtcbiAgICAgIHJldHVybiBOYU47XG4gICAgfVxuICAgIGluZGV4ID0gdWludDMySW5kZXg7XG4gIH1cbiAgcmV0dXJuIGluZGV4IDwgMCA/IGVuc3VyZVNpemUoaXRlcikgKyBpbmRleCA6IGluZGV4O1xufVxuXG5mdW5jdGlvbiByZXR1cm5UcnVlKCkge1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gd2hvbGVTbGljZShiZWdpbiwgZW5kLCBzaXplKSB7XG4gIHJldHVybiAoXG4gICAgKChiZWdpbiA9PT0gMCAmJiAhaXNOZWcoYmVnaW4pKSB8fFxuICAgICAgKHNpemUgIT09IHVuZGVmaW5lZCAmJiBiZWdpbiA8PSAtc2l6ZSkpICYmXG4gICAgKGVuZCA9PT0gdW5kZWZpbmVkIHx8IChzaXplICE9PSB1bmRlZmluZWQgJiYgZW5kID49IHNpemUpKVxuICApO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlQmVnaW4oYmVnaW4sIHNpemUpIHtcbiAgcmV0dXJuIHJlc29sdmVJbmRleChiZWdpbiwgc2l6ZSwgMCk7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVFbmQoZW5kLCBzaXplKSB7XG4gIHJldHVybiByZXNvbHZlSW5kZXgoZW5kLCBzaXplLCBzaXplKTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUluZGV4KGluZGV4LCBzaXplLCBkZWZhdWx0SW5kZXgpIHtcbiAgLy8gU2FuaXRpemUgaW5kaWNlcyB1c2luZyB0aGlzIHNob3J0aGFuZCBmb3IgVG9JbnQzMihhcmd1bWVudClcbiAgLy8gaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXRvaW50MzJcbiAgcmV0dXJuIGluZGV4ID09PSB1bmRlZmluZWRcbiAgICA/IGRlZmF1bHRJbmRleFxuICAgIDogaXNOZWcoaW5kZXgpXG4gICAgICA/IHNpemUgPT09IEluZmluaXR5XG4gICAgICAgID8gc2l6ZVxuICAgICAgICA6IE1hdGgubWF4KDAsIHNpemUgKyBpbmRleCkgfCAwXG4gICAgICA6IHNpemUgPT09IHVuZGVmaW5lZCB8fCBzaXplID09PSBpbmRleFxuICAgICAgICA/IGluZGV4XG4gICAgICAgIDogTWF0aC5taW4oc2l6ZSwgaW5kZXgpIHwgMDtcbn1cblxuZnVuY3Rpb24gaXNOZWcodmFsdWUpIHtcbiAgLy8gQWNjb3VudCBmb3IgLTAgd2hpY2ggaXMgbmVnYXRpdmUsIGJ1dCBub3QgbGVzcyB0aGFuIDAuXG4gIHJldHVybiB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA9PT0gLUluZmluaXR5KTtcbn1cblxuLy8gTm90ZTogdmFsdWUgaXMgdW5jaGFuZ2VkIHRvIG5vdCBicmVhayBpbW11dGFibGUtZGV2dG9vbHMuXG52YXIgSVNfQ09MTEVDVElPTl9TWU1CT0wgPSAnQEBfX0lNTVVUQUJMRV9JVEVSQUJMRV9fQEAnO1xuXG5mdW5jdGlvbiBpc0NvbGxlY3Rpb24obWF5YmVDb2xsZWN0aW9uKSB7XG4gIHJldHVybiBCb29sZWFuKG1heWJlQ29sbGVjdGlvbiAmJiBtYXliZUNvbGxlY3Rpb25bSVNfQ09MTEVDVElPTl9TWU1CT0xdKTtcbn1cblxudmFyIElTX0tFWUVEX1NZTUJPTCA9ICdAQF9fSU1NVVRBQkxFX0tFWUVEX19AQCc7XG5cbmZ1bmN0aW9uIGlzS2V5ZWQobWF5YmVLZXllZCkge1xuICByZXR1cm4gQm9vbGVhbihtYXliZUtleWVkICYmIG1heWJlS2V5ZWRbSVNfS0VZRURfU1lNQk9MXSk7XG59XG5cbnZhciBJU19JTkRFWEVEX1NZTUJPTCA9ICdAQF9fSU1NVVRBQkxFX0lOREVYRURfX0BAJztcblxuZnVuY3Rpb24gaXNJbmRleGVkKG1heWJlSW5kZXhlZCkge1xuICByZXR1cm4gQm9vbGVhbihtYXliZUluZGV4ZWQgJiYgbWF5YmVJbmRleGVkW0lTX0lOREVYRURfU1lNQk9MXSk7XG59XG5cbmZ1bmN0aW9uIGlzQXNzb2NpYXRpdmUobWF5YmVBc3NvY2lhdGl2ZSkge1xuICByZXR1cm4gaXNLZXllZChtYXliZUFzc29jaWF0aXZlKSB8fCBpc0luZGV4ZWQobWF5YmVBc3NvY2lhdGl2ZSk7XG59XG5cbnZhciBDb2xsZWN0aW9uID0gZnVuY3Rpb24gQ29sbGVjdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNDb2xsZWN0aW9uKHZhbHVlKSA/IHZhbHVlIDogU2VxKHZhbHVlKTtcbn07XG5cbnZhciBLZXllZENvbGxlY3Rpb24gPSAvKkBfX1BVUkVfXyovKGZ1bmN0aW9uIChDb2xsZWN0aW9uKSB7XG4gIGZ1bmN0aW9uIEtleWVkQ29sbGVjdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBpc0tleWVkKHZhbHVlKSA/IHZhbHVlIDogS2V5ZWRTZXEodmFsdWUpO1xuICB9XG5cbiAgaWYgKCBDb2xsZWN0aW9uICkgS2V5ZWRDb2xsZWN0aW9uLl9fcHJvdG9fXyA9IENvbGxlY3Rpb247XG4gIEtleWVkQ29sbGVjdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlICk7XG4gIEtleWVkQ29sbGVjdGlvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBLZXllZENvbGxlY3Rpb247XG5cbiAgcmV0dXJuIEtleWVkQ29sbGVjdGlvbjtcbn0oQ29sbGVjdGlvbikpO1xuXG52YXIgSW5kZXhlZENvbGxlY3Rpb24gPSAvKkBfX1BVUkVfXyovKGZ1bmN0aW9uIChDb2xsZWN0aW9uKSB7XG4gIGZ1bmN0aW9uIEluZGV4ZWRDb2xsZWN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzSW5kZXhlZCh2YWx1ZSkgPyB2YWx1ZSA6IEluZGV4ZWRTZXEodmFsdWUpO1xuICB9XG5cbiAgaWYgKCBDb2xsZWN0aW9uICkgSW5kZXhlZENvbGxlY3Rpb24uX19wcm90b19fID0gQ29sbGVjdGlvbjtcbiAgSW5kZXhlZENvbGxlY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZSApO1xuICBJbmRleGVkQ29sbGVjdGlvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBJbmRleGVkQ29sbGVjdGlvbjtcblxuICByZXR1cm4gSW5kZXhlZENvbGxlY3Rpb247XG59KENvbGxlY3Rpb24pKTtcblxudmFyIFNldENvbGxlY3Rpb24gPSAvKkBfX1BVUkVfXyovKGZ1bmN0aW9uIChDb2xsZWN0aW9uKSB7XG4gIGZ1bmN0aW9uIFNldENvbGxlY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gaXNDb2xsZWN0aW9uKHZhbHVlKSAmJiAhaXNBc3NvY2lhdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IFNldFNlcSh2YWx1ZSk7XG4gIH1cblxuICBpZiAoIENvbGxlY3Rpb24gKSBTZXRDb2xsZWN0aW9uLl9fcHJvdG9fXyA9IENvbGxlY3Rpb247XG4gIFNldENvbGxlY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZSApO1xuICBTZXRDb2xsZWN0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNldENvbGxlY3Rpb247XG5cbiAgcmV0dXJuIFNldENvbGxlY3Rpb247XG59KENvbGxlY3Rpb24pKTtcblxuQ29sbGVjdGlvbi5LZXllZCA9IEtleWVkQ29sbGVjdGlvbjtcbkNvbGxlY3Rpb24uSW5kZXhlZCA9IEluZGV4ZWRDb2xsZWN0aW9uO1xuQ29sbGVjdGlvbi5TZXQgPSBTZXRDb2xsZWN0aW9uO1xuXG52YXIgSVNfU0VRX1NZTUJPTCA9ICdAQF9fSU1NVVRBQkxFX1NFUV9fQEAnO1xuXG5mdW5jdGlvbiBpc1NlcShtYXliZVNlcSkge1xuICByZXR1cm4gQm9vbGVhbihtYXliZVNlcSAmJiBtYXliZVNlcVtJU19TRVFfU1lNQk9MXSk7XG59XG5cbnZhciBJU19SRUNPUkRfU1lNQk9MID0gJ0BAX19JTU1VVEFCTEVfUkVDT1JEX19AQCc7XG5cbmZ1bmN0aW9uIGlzUmVjb3JkKG1heWJlUmVjb3JkKSB7XG4gIHJldHVybiBCb29sZWFuKG1heWJlUmVjb3JkICYmIG1heWJlUmVjb3JkW0lTX1JFQ09SRF9TWU1CT0xdKTtcbn1cblxuZnVuY3Rpb24gaXNJbW11dGFibGUobWF5YmVJbW11dGFibGUpIHtcbiAgcmV0dXJuIGlzQ29sbGVjdGlvbihtYXliZUltbXV0YWJsZSkgfHwgaXNSZWNvcmQobWF5YmVJbW11dGFibGUpO1xufVxuXG52YXIgSVNfT1JERVJFRF9TWU1CT0wgPSAnQEBfX0lNTVVUQUJMRV9PUkRFUkVEX19AQCc7XG5cbmZ1bmN0aW9uIGlzT3JkZXJlZChtYXliZU9yZGVyZWQpIHtcbiAgcmV0dXJuIEJvb2xlYW4obWF5YmVPcmRlcmVkICYmIG1heWJlT3JkZXJlZFtJU19PUkRFUkVEX1NZTUJPTF0pO1xufVxuXG52YXIgSVRFUkFURV9LRVlTID0gMDtcbnZhciBJVEVSQVRFX1ZBTFVFUyA9IDE7XG52YXIgSVRFUkFURV9FTlRSSUVTID0gMjtcblxudmFyIFJFQUxfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5cbnZhciBJVEVSQVRPUl9TWU1CT0wgPSBSRUFMX0lURVJBVE9SX1NZTUJPTCB8fCBGQVVYX0lURVJBVE9SX1NZTUJPTDtcblxudmFyIEl0ZXJhdG9yID0gZnVuY3Rpb24gSXRlcmF0b3IobmV4dCkge1xuICB0aGlzLm5leHQgPSBuZXh0O1xufTtcblxuSXRlcmF0b3IucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICByZXR1cm4gJ1tJdGVyYXRvcl0nO1xufTtcblxuSXRlcmF0b3IuS0VZUyA9IElURVJBVEVfS0VZUztcbkl0ZXJhdG9yLlZBTFVFUyA9IElURVJBVEVfVkFMVUVTO1xuSXRlcmF0b3IuRU5UUklFUyA9IElURVJBVEVfRU5UUklFUztcblxuSXRlcmF0b3IucHJvdG90eXBlLmluc3BlY3QgPSBJdGVyYXRvci5wcm90b3R5cGUudG9Tb3VyY2UgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbn07XG5JdGVyYXRvci5wcm90b3R5cGVbSVRFUkFUT1JfU1lNQk9MXSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIGl0ZXJhdG9yVmFsdWUodHlwZSwgaywgdiwgaXRlcmF0b3JSZXN1bHQpIHtcbiAgdmFyIHZhbHVlID0gdHlwZSA9PT0gMCA/IGsgOiB0eXBlID09PSAxID8gdiA6IFtrLCB2XTtcbiAgaXRlcmF0b3JSZXN1bHRcbiAgICA/IChpdGVyYXRvclJlc3VsdC52YWx1ZSA9IHZhbHVlKVxuICAgIDogKGl0ZXJhdG9yUmVzdWx0ID0ge1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgfSk7XG4gIHJldHVybiBpdGVyYXRvclJlc3VsdDtcbn1cblxuZnVuY3Rpb24gaXRlcmF0b3JEb25lKCkge1xuICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG59XG5cbmZ1bmN0aW9uIGhhc0l0ZXJhdG9yKG1heWJlSXRlcmFibGUpIHtcbiAgcmV0dXJuICEhZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKTtcbn1cblxuZnVuY3Rpb24gaXNJdGVyYXRvcihtYXliZUl0ZXJhdG9yKSB7XG4gIHJldHVybiBtYXliZUl0ZXJhdG9yICYmIHR5cGVvZiBtYXliZUl0ZXJhdG9yLm5leHQgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGdldEl0ZXJhdG9yKGl0ZXJhYmxlKSB7XG4gIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihpdGVyYWJsZSk7XG4gIHJldHVybiBpdGVyYXRvckZuICYmIGl0ZXJhdG9yRm4uY2FsbChpdGVyYWJsZSk7XG59XG5cbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4oaXRlcmFibGUpIHtcbiAgdmFyIGl0ZXJhdG9yRm4gPVxuICAgIGl0ZXJhYmxlICYmXG4gICAgKChSRUFMX0lURVJBVE9SX1NZTUJPTCAmJiBpdGVyYWJsZVtSRUFMX0lURVJBVE9SX1NZTUJPTF0pIHx8XG4gICAgICBpdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgfVxufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICB2YWx1ZSAmJlxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcbiAgICBOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlLmxlbmd0aCkgJiZcbiAgICB2YWx1ZS5sZW5ndGggPj0gMCAmJlxuICAgICh2YWx1ZS5sZW5ndGggPT09IDBcbiAgICAgID8gLy8gT25seSB7bGVuZ3RoOiAwfSBpcyBjb25zaWRlcmVkIEFycmF5LWxpa2UuXG4gICAgICAgIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDFcbiAgICAgIDogLy8gQW4gb2JqZWN0IGlzIG9ubHkgQXJyYXktbGlrZSBpZiBpdCBoYXMgYSBwcm9wZXJ0eSB3aGVyZSB0aGUgbGFzdCB2YWx1ZVxuICAgICAgICAvLyBpbiB0aGUgYXJyYXktbGlrZSBtYXkgYmUgZm91bmQgKHdoaWNoIGNvdWxkIGJlIHVuZGVmaW5lZCkuXG4gICAgICAgIHZhbHVlLmhhc093blByb3BlcnR5KHZhbHVlLmxlbmd0aCAtIDEpKVxuICApO1xufVxuXG52YXIgU2VxID0gLypAX19QVVJFX18qLyhmdW5jdGlvbiAoQ29sbGVjdGlvbiQkMSkge1xuICBmdW5jdGlvbiBTZXEodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZFxuICAgICAgPyBlbXB0eVNlcXVlbmNlKClcbiAgICAgIDogaXNJbW11dGFibGUodmFsdWUpXG4gICAgICAgID8gdmFsdWUudG9TZXEoKVxuICAgICAgICA6IHNlcUZyb21WYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBpZiAoIENvbGxlY3Rpb24kJDEgKSBTZXEuX19wcm90b19fID0gQ29sbGVjdGlvbiQkMTtcbiAgU2VxLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIENvbGxlY3Rpb24kJDEgJiYgQ29sbGVjdGlvbiQkMS5wcm90b3R5cGUgKTtcbiAgU2VxLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNlcTtcblxuICBTZXEucHJvdG90eXBlLnRvU2VxID0gZnVuY3Rpb24gdG9TZXEgKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIFNlcS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX190b1N0cmluZygnU2VxIHsnLCAnfScpO1xuICB9O1xuXG4gIFNlcS5wcm90b3R5cGUuY2FjaGVSZXN1bHQgPSBmdW5jdGlvbiBjYWNoZVJlc3VsdCAoKSB7XG4gICAgaWYgKCF0aGlzLl9jYWNoZSAmJiB0aGlzLl9faXRlcmF0ZVVuY2FjaGVkKSB7XG4gICAgICB0aGlzLl9jYWNoZSA9IHRoaXMuZW50cnlTZXEoKS50b0FycmF5KCk7XG4gICAgICB0aGlzLnNpemUgPSB0aGlzLl9jYWNoZS5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8vIGFic3RyYWN0IF9faXRlcmF0ZVVuY2FjaGVkKGZuLCByZXZlcnNlKVxuXG4gIFNlcS5wcm90b3R5cGUuX19pdGVyYXRlID0gZnVuY3Rpb24gX19pdGVyYXRlIChmbiwgcmV2ZXJzZSkge1xuICAgIHZhciBjYWNoZSA9IHRoaXMuX2NhY2hlO1xuICAgIGlmIChjYWNoZSkge1xuICAgICAgdmFyIHNpemUgPSBjYWNoZS5sZW5ndGg7XG4gICAgICB2YXIgaSA9IDA7XG4gICAgICB3aGlsZSAoaSAhPT0gc2l6ZSkge1xuICAgICAgICB2YXIgZW50cnkgPSBjYWNoZVtyZXZlcnNlID8gc2l6ZSAtICsraSA6IGkrK107XG4gICAgICAgIGlmIChmbihlbnRyeVsxXSwgZW50cnlbMF0sIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX19pdGVyYXRlVW5jYWNoZWQoZm4sIHJldmVyc2UpO1xuICB9O1xuXG4gIC8vIGFic3RyYWN0IF9faXRlcmF0b3JVbmNhY2hlZCh0eXBlLCByZXZlcnNlKVxuXG4gIFNlcS5wcm90b3R5cGUuX19pdGVyYXRvciA9IGZ1bmN0aW9uIF9faXRlcmF0b3IgKHR5cGUsIHJldmVyc2UpIHtcbiAgICB2YXIgY2FjaGUgPSB0aGlzLl9jYWNoZTtcbiAgICBpZiAoY2FjaGUpIHtcbiAgICAgIHZhciBzaXplID0gY2FjaGUubGVuZ3RoO1xuICAgICAgdmFyIGkgPSAwO1xuICAgICAgcmV0dXJuIG5ldyBJdGVyYXRvcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpID09PSBzaXplKSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yRG9uZSgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlbnRyeSA9IGNhY2hlW3JldmVyc2UgPyBzaXplIC0gKytpIDogaSsrXTtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yVmFsdWUodHlwZSwgZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fX2l0ZXJhdG9yVW5jYWNoZWQodHlwZSwgcmV2ZXJzZSk7XG4gIH07XG5cbiAgcmV0dXJuIFNlcTtcbn0oQ29sbGVjdGlvbikpO1xuXG52YXIgS2V5ZWRTZXEgPSAvKkBfX1BVUkVfXyovKGZ1bmN0aW9uIChTZXEpIHtcbiAgZnVuY3Rpb24gS2V5ZWRTZXEodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZFxuICAgICAgPyBlbXB0eVNlcXVlbmNlKCkudG9LZXllZFNlcSgpXG4gICAgICA6IGlzQ29sbGVjdGlvbih2YWx1ZSlcbiAgICAgICAgPyBpc0tleWVkKHZhbHVlKVxuICAgICAgICAgID8gdmFsdWUudG9TZXEoKVxuICAgICAgICAgIDogdmFsdWUuZnJvbUVudHJ5U2VxKClcbiAgICAgICAgOiBpc1JlY29yZCh2YWx1ZSlcbiAgICAgICAgICA/IHZhbHVlLnRvU2VxKClcbiAgICAgICAgICA6IGtleWVkU2VxRnJvbVZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGlmICggU2VxICkgS2V5ZWRTZXEuX19wcm90b19fID0gU2VxO1xuICBLZXllZFNlcS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBTZXEgJiYgU2VxLnByb3RvdHlwZSApO1xuICBLZXllZFNlcS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBLZXllZFNlcTtcblxuICBLZXllZFNlcS5wcm90b3R5cGUudG9LZXllZFNlcSA9IGZ1bmN0aW9uIHRvS2V5ZWRTZXEgKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHJldHVybiBLZXllZFNlcTtcbn0oU2VxKSk7XG5cbnZhciBJbmRleGVkU2VxID0gLypAX19QVVJFX18qLyhmdW5jdGlvbiAoU2VxKSB7XG4gIGZ1bmN0aW9uIEluZGV4ZWRTZXEodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZFxuICAgICAgPyBlbXB0eVNlcXVlbmNlKClcbiAgICAgIDogaXNDb2xsZWN0aW9uKHZhbHVlKVxuICAgICAgICA/IGlzS2V5ZWQodmFsdWUpXG4gICAgICAgICAgPyB2YWx1ZS5lbnRyeVNlcSgpXG4gICAgICAgICAgOiB2YWx1ZS50b0luZGV4ZWRTZXEoKVxuICAgICAgICA6IGlzUmVjb3JkKHZhbHVlKVxuICAgICAgICAgID8gdmFsdWUudG9TZXEoKS5lbnRyeVNlcSgpXG4gICAgICAgICAgOiBpbmRleGVkU2VxRnJvbVZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGlmICggU2VxICkgSW5kZXhlZFNlcS5fX3Byb3RvX18gPSBTZXE7XG4gIEluZGV4ZWRTZXEucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggU2VxICYmIFNlcS5wcm90b3R5cGUgKTtcbiAgSW5kZXhlZFNlcS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBJbmRleGVkU2VxO1xuXG4gIEluZGV4ZWRTZXEub2YgPSBmdW5jdGlvbiBvZiAoLyouLi52YWx1ZXMqLykge1xuICAgIHJldHVybiBJbmRleGVkU2VxKGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgSW5kZXhlZFNlcS5wcm90b3R5cGUudG9JbmRleGVkU2VxID0gZnVuY3Rpb24gdG9JbmRleGVkU2VxICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBJbmRleGVkU2VxLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgICByZXR1cm4gdGhpcy5fX3RvU3RyaW5nKCdTZXEgWycsICddJyk7XG4gIH07XG5cbiAgcmV0dXJuIEluZGV4ZWRTZXE7XG59KFNlcSkpO1xuXG52YXIgU2V0U2VxID0gLypAX19QVVJFX18qLyhmdW5jdGlvbiAoU2VxKSB7XG4gIGZ1bmN0aW9uIFNldFNlcSh2YWx1ZSkge1xuICAgIHJldHVybiAoaXNDb2xsZWN0aW9uKHZhbHVlKSAmJiAhaXNBc3NvY2lhdGl2ZSh2YWx1ZSlcbiAgICAgID8gdmFsdWVcbiAgICAgIDogSW5kZXhlZFNlcSh2YWx1ZSlcbiAgICApLnRvU2V0U2VxKCk7XG4gIH1cblxuICBpZiAoIFNlcSApIFNldFNlcS5fX3Byb3RvX18gPSBTZXE7XG4gIFNldFNlcS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBTZXEgJiYgU2VxLnByb3RvdHlwZSApO1xuICBTZXRTZXEucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU2V0U2VxO1xuXG4gIFNldFNlcS5vZiA9IGZ1bmN0aW9uIG9mICgvKi4uLnZhbHVlcyovKSB7XG4gICAgcmV0dXJuIFNldFNlcShhcmd1bWVudHMpO1xuICB9O1xuXG4gIFNldFNlcS5wcm90b3R5cGUudG9TZXRTZXEgPSBmdW5jdGlvbiB0b1NldFNlcSAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgcmV0dXJuIFNldFNlcTtcbn0oU2VxKSk7XG5cblNlcS5pc1NlcSA9IGlzU2VxO1xuU2VxLktleWVkID0gS2V5ZWRTZXE7XG5TZXEuU2V0ID0gU2V0U2VxO1xuU2VxLkluZGV4ZWQgPSBJbmRleGVkU2VxO1xuXG5TZXEucHJvdG90eXBlW0lTX1NFUV9TWU1CT0xdID0gdHJ1ZTtcblxuLy8gI3ByYWdtYSBSb290IFNlcXVlbmNlc1xuXG52YXIgQXJyYXlTZXEgPSAvKkBfX1BVUkVfXyovKGZ1bmN0aW9uIChJbmRleGVkU2VxKSB7XG4gIGZ1bmN0aW9uIEFycmF5U2VxKGFycmF5KSB7XG4gICAgdGhpcy5fYXJyYXkgPSBhcnJheTtcbiAgICB0aGlzLnNpemUgPSBhcnJheS5sZW5ndGg7XG4gIH1cblxuICBpZiAoIEluZGV4ZWRTZXEgKSBBcnJheVNlcS5fX3Byb3RvX18gPSBJbmRleGVkU2VxO1xuICBBcnJheVNlcS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBJbmRleGVkU2VxICYmIEluZGV4ZWRTZXEucHJvdG90eXBlICk7XG4gIEFycmF5U2VxLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEFycmF5U2VxO1xuXG4gIEFycmF5U2VxLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQgKGluZGV4LCBub3RTZXRWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmhhcyhpbmRleCkgPyB0aGlzLl9hcnJheVt3cmFwSW5kZXgodGhpcywgaW5kZXgpXSA6IG5vdFNldFZhbHVlO1xuICB9O1xuXG4gIEFycmF5U2VxLnByb3RvdHlwZS5fX2l0ZXJhdGUgPSBmdW5jdGlvbiBfX2l0ZXJhdGUgKGZuLCByZXZlcnNlKSB7XG4gICAgdmFyIGFycmF5ID0gdGhpcy5fYXJyYXk7XG4gICAgdmFyIHNpemUgPSBhcnJheS5sZW5ndGg7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpICE9PSBzaXplKSB7XG4gICAgICB2YXIgaWkgPSByZXZlcnNlID8gc2l6ZSAtICsraSA6IGkrKztcbiAgICAgIGlmIChmbihhcnJheVtpaV0sIGlpLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpO1xuICB9O1xuXG4gIEFycmF5U2VxLnByb3RvdHlwZS5fX2l0ZXJhdG9yID0gZnVuY3Rpb24gX19pdGVyYXRvciAodHlwZSwgcmV2ZXJzZSkge1xuICAgIHZhciBhcnJheSA9IHRoaXMuX2FycmF5O1xuICAgIHZhciBzaXplID0gYXJyYXkubGVuZ3RoO1xuICAgIHZhciBpID0gMDtcbiAgICByZXR1cm4gbmV3IEl0ZXJhdG9yKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpID09PSBzaXplKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvckRvbmUoKTtcbiAgICAgIH1cbiAgICAgIHZhciBpaSA9IHJldmVyc2UgPyBzaXplIC0gKytpIDogaSsrO1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yVmFsdWUodHlwZSwgaWksIGFycmF5W2lpXSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIEFycmF5U2VxO1xufShJbmRleGVkU2VxKSk7XG5cbnZhciBPYmplY3RTZXEgPSAvKkBfX1BVUkVfXyovKGZ1bmN0aW9uIChLZXllZFNlcSkge1xuICBmdW5jdGlvbiBPYmplY3RTZXEob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuICAgIHRoaXMuX29iamVjdCA9IG9iamVjdDtcbiAgICB0aGlzLl9rZXlzID0ga2V5cztcbiAgICB0aGlzLnNpemUgPSBrZXlzLmxlbmd0aDtcbiAgfVxuXG4gIGlmICggS2V5ZWRTZXEgKSBPYmplY3RTZXEuX19wcm90b19fID0gS2V5ZWRTZXE7XG4gIE9iamVjdFNlcS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBLZXllZFNlcSAmJiBLZXllZFNlcS5wcm90b3R5cGUgKTtcbiAgT2JqZWN0U2VxLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE9iamVjdFNlcTtcblxuICBPYmplY3RTZXEucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCAoa2V5LCBub3RTZXRWYWx1ZSkge1xuICAgIGlmIChub3RTZXRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmICF0aGlzLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gbm90U2V0VmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9vYmplY3Rba2V5XTtcbiAgfTtcblxuICBPYmplY3RTZXEucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIGhhcyAoa2V5KSB7XG4gICAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwodGhpcy5fb2JqZWN0LCBrZXkpO1xuICB9O1xuXG4gIE9iamVjdFNlcS5wcm90b3R5cGUuX19pdGVyYXRlID0gZnVuY3Rpb24gX19pdGVyYXRlIChmbiwgcmV2ZXJzZSkge1xuICAgIHZhciBvYmplY3QgPSB0aGlzLl9vYmplY3Q7XG4gICAgdmFyIGtleXMgPSB0aGlzLl9rZXlzO1xuICAgIHZhciBzaXplID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpICE9PSBzaXplKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tyZXZlcnNlID8gc2l6ZSAtICsraSA6IGkrK107XG4gICAgICBpZiAoZm4ob2JqZWN0W2tleV0sIGtleSwgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaTtcbiAgfTtcblxuICBPYmplY3RTZXEucHJvdG90eXBlLl9faXRlcmF0b3IgPSBmdW5jdGlvbiBfX2l0ZXJhdG9yICh0eXBlLCByZXZlcnNlKSB7XG4gICAgdmFyIG9iamVjdCA9IHRoaXMuX29iamVjdDtcbiAgICB2YXIga2V5cyA9IHRoaXMuX2tleXM7XG4gICAgdmFyIHNpemUgPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaSA9IDA7XG4gICAgcmV0dXJuIG5ldyBJdGVyYXRvcihmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoaSA9PT0gc2l6ZSkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JEb25lKCk7XG4gICAgICB9XG4gICAgICB2YXIga2V5ID0ga2V5c1tyZXZlcnNlID8gc2l6ZSAtICsraSA6IGkrK107XG4gICAgICByZXR1cm4gaXRlcmF0b3JWYWx1ZSh0eXBlLCBrZXksIG9iamVjdFtrZXldKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gT2JqZWN0U2VxO1xufShLZXllZFNlcSkpO1xuT2JqZWN0U2VxLnByb3RvdHlwZVtJU19PUkRFUkVEX1NZTUJPTF0gPSB0cnVlO1xuXG52YXIgQ29sbGVjdGlvblNlcSA9IC8qQF9fUFVSRV9fKi8oZnVuY3Rpb24gKEluZGV4ZWRTZXEpIHtcbiAgZnVuY3Rpb24gQ29sbGVjdGlvblNlcShjb2xsZWN0aW9uKSB7XG4gICAgdGhpcy5fY29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG4gICAgdGhpcy5zaXplID0gY29sbGVjdGlvbi5sZW5ndGggfHwgY29sbGVjdGlvbi5zaXplO1xuICB9XG5cbiAgaWYgKCBJbmRleGVkU2VxICkgQ29sbGVjdGlvblNlcS5fX3Byb3RvX18gPSBJbmRleGVkU2VxO1xuICBDb2xsZWN0aW9uU2VxLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEluZGV4ZWRTZXEgJiYgSW5kZXhlZFNlcS5wcm90b3R5cGUgKTtcbiAgQ29sbGVjdGlvblNlcS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDb2xsZWN0aW9uU2VxO1xuXG4gIENvbGxlY3Rpb25TZXEucHJvdG90eXBlLl9faXRlcmF0ZVVuY2FjaGVkID0gZnVuY3Rpb24gX19pdGVyYXRlVW5jYWNoZWQgKGZuLCByZXZlcnNlKSB7XG4gICAgaWYgKHJldmVyc2UpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhY2hlUmVzdWx0KCkuX19pdGVyYXRlKGZuLCByZXZlcnNlKTtcbiAgICB9XG4gICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzLl9jb2xsZWN0aW9uO1xuICAgIHZhciBpdGVyYXRvciA9IGdldEl0ZXJhdG9yKGNvbGxlY3Rpb24pO1xuICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICBpZiAoaXNJdGVyYXRvcihpdGVyYXRvcikpIHtcbiAgICAgIHZhciBzdGVwO1xuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBpZiAoZm4oc3RlcC52YWx1ZSwgaXRlcmF0aW9ucysrLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXRlcmF0aW9ucztcbiAgfTtcblxuICBDb2xsZWN0aW9uU2VxLnByb3RvdHlwZS5fX2l0ZXJhdG9yVW5jYWNoZWQgPSBmdW5jdGlvbiBfX2l0ZXJhdG9yVW5jYWNoZWQgKHR5cGUsIHJldmVyc2UpIHtcbiAgICBpZiAocmV2ZXJzZSkge1xuICAgICAgcmV0dXJuIHRoaXMuY2FjaGVSZXN1bHQoKS5fX2l0ZXJhdG9yKHR5cGUsIHJldmVyc2UpO1xuICAgIH1cbiAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXMuX2NvbGxlY3Rpb247XG4gICAgdmFyIGl0ZXJhdG9yID0gZ2V0SXRlcmF0b3IoY29sbGVjdGlvbik7XG4gICAgaWYgKCFpc0l0ZXJhdG9yKGl0ZXJhdG9yKSkge1xuICAgICAgcmV0dXJuIG5ldyBJdGVyYXRvcihpdGVyYXRvckRvbmUpO1xuICAgIH1cbiAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgcmV0dXJuIG5ldyBJdGVyYXRvcihmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc3RlcCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgIHJldHVybiBzdGVwLmRvbmUgPyBzdGVwIDogaXRlcmF0b3JWYWx1ZSh0eXBlLCBpdGVyYXRpb25zKyssIHN0ZXAudmFsdWUpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBDb2xsZWN0aW9uU2VxO1xufShJbmRleGVkU2VxKSk7XG5cbi8vICMgcHJhZ21hIEhlbHBlciBmdW5jdGlvbnNcblxudmFyIEVNUFRZX1NFUTtcblxuZnVuY3Rpb24gZW1wdHlTZXF1ZW5jZSgpIHtcbiAgcmV0dXJuIEVNUFRZX1NFUSB8fCAoRU1QVFlfU0VRID0gbmV3IEFycmF5U2VxKFtdKSk7XG59XG5cbmZ1bmN0aW9uIGtleWVkU2VxRnJvbVZhbHVlKHZhbHVlKSB7XG4gIHZhciBzZXEgPSBBcnJheS5pc0FycmF5KHZhbHVlKVxuICAgID8gbmV3IEFycmF5U2VxKHZhbHVlKVxuICAgIDogaGFzSXRlcmF0b3IodmFsdWUpXG4gICAgICA/IG5ldyBDb2xsZWN0aW9uU2VxKHZhbHVlKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gIGlmIChzZXEpIHtcbiAgICByZXR1cm4gc2VxLmZyb21FbnRyeVNlcSgpO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG5ldyBPYmplY3RTZXEodmFsdWUpO1xuICB9XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgJ0V4cGVjdGVkIEFycmF5IG9yIGNvbGxlY3Rpb24gb2JqZWN0IG9mIFtrLCB2XSBlbnRyaWVzLCBvciBrZXllZCBvYmplY3Q6ICcgK1xuICAgICAgdmFsdWVcbiAgKTtcbn1cblxuZnVuY3Rpb24gaW5kZXhlZFNlcUZyb21WYWx1ZSh2YWx1ZSkge1xuICB2YXIgc2VxID0gbWF5YmVJbmRleGVkU2VxRnJvbVZhbHVlKHZhbHVlKTtcbiAgaWYgKHNlcSkge1xuICAgIHJldHVybiBzZXE7XG4gIH1cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAnRXhwZWN0ZWQgQXJyYXkgb3IgY29sbGVjdGlvbiBvYmplY3Qgb2YgdmFsdWVzOiAnICsgdmFsdWVcbiAgKTtcbn1cblxuZnVuY3Rpb24gc2VxRnJvbVZhbHVlKHZhbHVlKSB7XG4gIHZhciBzZXEgPSBtYXliZUluZGV4ZWRTZXFGcm9tVmFsdWUodmFsdWUpO1xuICBpZiAoc2VxKSB7XG4gICAgcmV0dXJuIHNlcTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBuZXcgT2JqZWN0U2VxKHZhbHVlKTtcbiAgfVxuICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICdFeHBlY3RlZCBBcnJheSBvciBjb2xsZWN0aW9uIG9iamVjdCBvZiB2YWx1ZXMsIG9yIGtleWVkIG9iamVjdDogJyArIHZhbHVlXG4gICk7XG59XG5cbmZ1bmN0aW9uIG1heWJlSW5kZXhlZFNlcUZyb21WYWx1ZSh2YWx1ZSkge1xuICByZXR1cm4gaXNBcnJheUxpa2UodmFsdWUpXG4gICAgPyBuZXcgQXJyYXlTZXEodmFsdWUpXG4gICAgOiBoYXNJdGVyYXRvcih2YWx1ZSlcbiAgICAgID8gbmV3IENvbGxlY3Rpb25TZXEodmFsdWUpXG4gICAgICA6IHVuZGVmaW5lZDtcbn1cblxudmFyIElTX01BUF9TWU1CT0wgPSAnQEBfX0lNTVVUQUJMRV9NQVBfX0BAJztcblxuZnVuY3Rpb24gaXNNYXAobWF5YmVNYXApIHtcbiAgcmV0dXJuIEJvb2xlYW4obWF5YmVNYXAgJiYgbWF5YmVNYXBbSVNfTUFQX1NZTUJPTF0pO1xufVxuXG5mdW5jdGlvbiBpc09yZGVyZWRNYXAobWF5YmVPcmRlcmVkTWFwKSB7XG4gIHJldHVybiBpc01hcChtYXliZU9yZGVyZWRNYXApICYmIGlzT3JkZXJlZChtYXliZU9yZGVyZWRNYXApO1xufVxuXG5mdW5jdGlvbiBpc1ZhbHVlT2JqZWN0KG1heWJlVmFsdWUpIHtcbiAgcmV0dXJuIEJvb2xlYW4oXG4gICAgbWF5YmVWYWx1ZSAmJlxuICAgICAgdHlwZW9mIG1heWJlVmFsdWUuZXF1YWxzID09PSAnZnVuY3Rpb24nICYmXG4gICAgICB0eXBlb2YgbWF5YmVWYWx1ZS5oYXNoQ29kZSA9PT0gJ2Z1bmN0aW9uJ1xuICApO1xufVxuXG4vKipcbiAqIEFuIGV4dGVuc2lvbiBvZiB0aGUgXCJzYW1lLXZhbHVlXCIgYWxnb3JpdGhtIGFzIFtkZXNjcmliZWQgZm9yIHVzZSBieSBFUzYgTWFwXG4gKiBhbmQgU2V0XShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9NYXAjS2V5X2VxdWFsaXR5KVxuICpcbiAqIE5hTiBpcyBjb25zaWRlcmVkIHRoZSBzYW1lIGFzIE5hTiwgaG93ZXZlciAtMCBhbmQgMCBhcmUgY29uc2lkZXJlZCB0aGUgc2FtZVxuICogdmFsdWUsIHdoaWNoIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBhbGdvcml0aG0gZGVzY3JpYmVkIGJ5XG4gKiBbYE9iamVjdC5pc2BdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pcykuXG4gKlxuICogVGhpcyBpcyBleHRlbmRlZCBmdXJ0aGVyIHRvIGFsbG93IE9iamVjdHMgdG8gZGVzY3JpYmUgdGhlIHZhbHVlcyB0aGV5XG4gKiByZXByZXNlbnQsIGJ5IHdheSBvZiBgdmFsdWVPZmAgb3IgYGVxdWFsc2AgKGFuZCBgaGFzaENvZGVgKS5cbiAqXG4gKiBOb3RlOiBiZWNhdXNlIG9mIHRoaXMgZXh0ZW5zaW9uLCB0aGUga2V5IGVxdWFsaXR5IG9mIEltbXV0YWJsZS5NYXAgYW5kIHRoZVxuICogdmFsdWUgZXF1YWxpdHkgb2YgSW1tdXRhYmxlLlNldCB3aWxsIGRpZmZlciBmcm9tIEVTNiBNYXAgYW5kIFNldC5cbiAqXG4gKiAjIyMgRGVmaW5pbmcgY3VzdG9tIHZhbHVlc1xuICpcbiAqIFRoZSBlYXNpZXN0IHdheSB0byBkZXNjcmliZSB0aGUgdmFsdWUgYW4gb2JqZWN0IHJlcHJlc2VudHMgaXMgYnkgaW1wbGVtZW50aW5nXG4gKiBgdmFsdWVPZmAuIEZvciBleGFtcGxlLCBgRGF0ZWAgcmVwcmVzZW50cyBhIHZhbHVlIGJ5IHJldHVybmluZyBhIHVuaXhcbiAqIHRpbWVzdGFtcCBmb3IgYHZhbHVlT2ZgOlxuICpcbiAqICAgICB2YXIgZGF0ZTEgPSBuZXcgRGF0ZSgxMjM0NTY3ODkwMDAwKTsgLy8gRnJpIEZlYiAxMyAyMDA5IC4uLlxuICogICAgIHZhciBkYXRlMiA9IG5ldyBEYXRlKDEyMzQ1Njc4OTAwMDApO1xuICogICAgIGRhdGUxLnZhbHVlT2YoKTsgLy8gMTIzNDU2Nzg5MDAwMFxuICogICAgIGFzc2VydCggZGF0ZTEgIT09IGRhdGUyICk7XG4gKiAgICAgYXNzZXJ0KCBJbW11dGFibGUuaXMoIGRhdGUxLCBkYXRlMiApICk7XG4gKlxuICogTm90ZTogb3ZlcnJpZGluZyBgdmFsdWVPZmAgbWF5IGhhdmUgb3RoZXIgaW1wbGljYXRpb25zIGlmIHlvdSB1c2UgdGhpcyBvYmplY3RcbiAqIHdoZXJlIEphdmFTY3JpcHQgZXhwZWN0cyBhIHByaW1pdGl2ZSwgc3VjaCBhcyBpbXBsaWNpdCBzdHJpbmcgY29lcmNpb24uXG4gKlxuICogRm9yIG1vcmUgY29tcGxleCB0eXBlcywgZXNwZWNpYWxseSBjb2xsZWN0aW9ucywgaW1wbGVtZW50aW5nIGB2YWx1ZU9mYCBtYXlcbiAqIG5vdCBiZSBwZXJmb3JtYW50LiBBbiBhbHRlcm5hdGl2ZSBpcyB0byBpbXBsZW1lbnQgYGVxdWFsc2AgYW5kIGBoYXNoQ29kZWAuXG4gKlxuICogYGVxdWFsc2AgdGFrZXMgYW5vdGhlciBvYmplY3QsIHByZXN1bWFibHkgb2Ygc2ltaWxhciB0eXBlLCBhbmQgcmV0dXJucyB0cnVlXG4gKiBpZiBpdCBpcyBlcXVhbC4gRXF1YWxpdHkgaXMgc3ltbWV0cmljYWwsIHNvIHRoZSBzYW1lIHJlc3VsdCBzaG91bGQgYmVcbiAqIHJldHVybmVkIGlmIHRoaXMgYW5kIHRoZSBhcmd1bWVudCBhcmUgZmxpcHBlZC5cbiAqXG4gKiAgICAgYXNzZXJ0KCBhLmVxdWFscyhiKSA9PT0gYi5lcXVhbHMoYSkgKTtcbiAqXG4gKiBgaGFzaENvZGVgIHJldHVybnMgYSAzMmJpdCBpbnRlZ2VyIG51bWJlciByZXByZXNlbnRpbmcgdGhlIG9iamVjdCB3aGljaCB3aWxsXG4gKiBiZSB1c2VkIHRvIGRldGVybWluZSBob3cgdG8gc3RvcmUgdGhlIHZhbHVlIG9iamVjdCBpbiBhIE1hcCBvciBTZXQuIFlvdSBtdXN0XG4gKiBwcm92aWRlIGJvdGggb3IgbmVpdGhlciBtZXRob2RzLCBvbmUgbXVzdCBub3QgZXhpc3Qgd2l0aG91dCB0aGUgb3RoZXIuXG4gKlxuICogQWxzbywgYW4gaW1wb3J0YW50IHJlbGF0aW9uc2hpcCBiZXR3ZWVuIHRoZXNlIG1ldGhvZHMgbXVzdCBiZSB1cGhlbGQ6IGlmIHR3b1xuICogdmFsdWVzIGFyZSBlcXVhbCwgdGhleSAqbXVzdCogcmV0dXJuIHRoZSBzYW1lIGhhc2hDb2RlLiBJZiB0aGUgdmFsdWVzIGFyZSBub3RcbiAqIGVxdWFsLCB0aGV5IG1pZ2h0IGhhdmUgdGhlIHNhbWUgaGFzaENvZGU7IHRoaXMgaXMgY2FsbGVkIGEgaGFzaCBjb2xsaXNpb24sXG4gKiBhbmQgd2hpbGUgdW5kZXNpcmFibGUgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMsIGl0IGlzIGFjY2VwdGFibGUuXG4gKlxuICogICAgIGlmIChhLmVxdWFscyhiKSkge1xuICogICAgICAgYXNzZXJ0KCBhLmhhc2hDb2RlKCkgPT09IGIuaGFzaENvZGUoKSApO1xuICogICAgIH1cbiAqXG4gKiBBbGwgSW1tdXRhYmxlIGNvbGxlY3Rpb25zIGFyZSBWYWx1ZSBPYmplY3RzOiB0aGV5IGltcGxlbWVudCBgZXF1YWxzKClgXG4gKiBhbmQgYGhhc2hDb2RlKClgLlxuICovXG5mdW5jdGlvbiBpcyh2YWx1ZUEsIHZhbHVlQikge1xuICBpZiAodmFsdWVBID09PSB2YWx1ZUIgfHwgKHZhbHVlQSAhPT0gdmFsdWVBICYmIHZhbHVlQiAhPT0gdmFsdWVCKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICghdmFsdWVBIHx8ICF2YWx1ZUIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB2YWx1ZUEudmFsdWVPZiA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiB2YWx1ZUIudmFsdWVPZiA9PT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICB2YWx1ZUEgPSB2YWx1ZUEudmFsdWVPZigpO1xuICAgIHZhbHVlQiA9IHZhbHVlQi52YWx1ZU9mKCk7XG4gICAgaWYgKHZhbHVlQSA9PT0gdmFsdWVCIHx8ICh2YWx1ZUEgIT09IHZhbHVlQSAmJiB2YWx1ZUIgIT09IHZhbHVlQikpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIXZhbHVlQSB8fCAhdmFsdWVCKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiAhIShcbiAgICBpc1ZhbHVlT2JqZWN0KHZhbHVlQSkgJiZcbiAgICBpc1ZhbHVlT2JqZWN0KHZhbHVlQikgJiZcbiAgICB2YWx1ZUEuZXF1YWxzKHZhbHVlQilcbiAgKTtcbn1cblxudmFyIGltdWwgPVxuICB0eXBlb2YgTWF0aC5pbXVsID09PSAnZnVuY3Rpb24nICYmIE1hdGguaW11bCgweGZmZmZmZmZmLCAyKSA9PT0gLTJcbiAgICA/IE1hdGguaW11bFxuICAgIDogZnVuY3Rpb24gaW11bChhLCBiKSB7XG4gICAgICAgIGEgfD0gMDsgLy8gaW50XG4gICAgICAgIGIgfD0gMDsgLy8gaW50XG4gICAgICAgIHZhciBjID0gYSAmIDB4ZmZmZjtcbiAgICAgICAgdmFyIGQgPSBiICYgMHhmZmZmO1xuICAgICAgICAvLyBTaGlmdCBieSAwIGZpeGVzIHRoZSBzaWduIG9uIHRoZSBoaWdoIHBhcnQuXG4gICAgICAgIHJldHVybiAoYyAqIGQgKyAoKCgoYSA+Pj4gMTYpICogZCArIGMgKiAoYiA+Pj4gMTYpKSA8PCAxNikgPj4+IDApKSB8IDA7IC8vIGludFxuICAgICAgfTtcblxuLy8gdjggaGFzIGFuIG9wdGltaXphdGlvbiBmb3Igc3RvcmluZyAzMS1iaXQgc2lnbmVkIG51bWJlcnMuXG4vLyBWYWx1ZXMgd2hpY2ggaGF2ZSBlaXRoZXIgMDAgb3IgMTEgYXMgdGhlIGhpZ2ggb3JkZXIgYml0cyBxdWFsaWZ5LlxuLy8gVGhpcyBmdW5jdGlvbiBkcm9wcyB0aGUgaGlnaGVzdCBvcmRlciBiaXQgaW4gYSBzaWduZWQgbnVtYmVyLCBtYWludGFpbmluZ1xuLy8gdGhlIHNpZ24gYml0LlxuZnVuY3Rpb24gc21pKGkzMikge1xuICByZXR1cm4gKChpMzIgPj4+IDEpICYgMHg0MDAwMDAwMCkgfCAoaTMyICYgMHhiZmZmZmZmZik7XG59XG5cbnZhciBkZWZhdWx0VmFsdWVPZiA9IE9iamVjdC5wcm90b3R5cGUudmFsdWVPZjtcblxuZnVuY3Rpb24gaGFzaChvKSB7XG4gIHN3aXRjaCAodHlwZW9mIG8pIHtcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIC8vIFRoZSBoYXNoIHZhbHVlcyBmb3IgYnVpbHQtaW4gY29uc3RhbnRzIGFyZSBhIDEgdmFsdWUgZm9yIGVhY2ggNS1ieXRlXG4gICAgICAvLyBzaGlmdCByZWdpb24gZXhwZWN0IGZvciB0aGUgZmlyc3QsIHdoaWNoIGVuY29kZXMgdGhlIHZhbHVlLiBUaGlzXG4gICAgICAvLyByZWR1Y2VzIHRoZSBvZGRzIG9mIGEgaGFzaCBjb2xsaXNpb24gZm9yIHRoZXNlIGNvbW1vbiB2YWx1ZXMuXG4gICAgICByZXR1cm4gbyA/IDB4NDIxMDg0MjEgOiAweDQyMTA4NDIwO1xuICAgIGNhc2UgJ251bWJlcic6XG4gICAgICByZXR1cm4gaGFzaE51bWJlcihvKTtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgcmV0dXJuIG8ubGVuZ3RoID4gU1RSSU5HX0hBU0hfQ0FDSEVfTUlOX1NUUkxFTlxuICAgICAgICA/IGNhY2hlZEhhc2hTdHJpbmcobylcbiAgICAgICAgOiBoYXNoU3RyaW5nKG8pO1xuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgaWYgKG8gPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIDB4NDIxMDg0MjI7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIG8uaGFzaENvZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gRHJvcCBhbnkgaGlnaCBiaXRzIGZyb20gYWNjaWRlbnRhbGx5IGxvbmcgaGFzaCBjb2Rlcy5cbiAgICAgICAgcmV0dXJuIHNtaShvLmhhc2hDb2RlKG8pKTtcbiAgICAgIH1cbiAgICAgIGlmIChvLnZhbHVlT2YgIT09IGRlZmF1bHRWYWx1ZU9mICYmIHR5cGVvZiBvLnZhbHVlT2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbyA9IG8udmFsdWVPZihvKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBoYXNoSlNPYmoobyk7XG4gICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgIHJldHVybiAweDQyMTA4NDIzO1xuICAgIGRlZmF1bHQ6XG4gICAgICBpZiAodHlwZW9mIG8udG9TdHJpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGhhc2hTdHJpbmcoby50b1N0cmluZygpKTtcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcignVmFsdWUgdHlwZSAnICsgdHlwZW9mIG8gKyAnIGNhbm5vdCBiZSBoYXNoZWQuJyk7XG4gIH1cbn1cblxuLy8gQ29tcHJlc3MgYXJiaXRyYXJpbHkgbGFyZ2UgbnVtYmVycyBpbnRvIHNtaSBoYXNoZXMuXG5mdW5jdGlvbiBoYXNoTnVtYmVyKG4pIHtcbiAgaWYgKG4gIT09IG4gfHwgbiA9PT0gSW5maW5pdHkpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICB2YXIgaGFzaCA9IG4gfCAwO1xuICBpZiAoaGFzaCAhPT0gbikge1xuICAgIGhhc2ggXj0gbiAqIDB4ZmZmZmZmZmY7XG4gIH1cbiAgd2hpbGUgKG4gPiAweGZmZmZmZmZmKSB7XG4gICAgbiAvPSAweGZmZmZmZmZmO1xuICAgIGhhc2ggXj0gbjtcbiAgfVxuICByZXR1cm4gc21pKGhhc2gpO1xufVxuXG5mdW5jdGlvbiBjYWNoZWRIYXNoU3RyaW5nKHN0cmluZykge1xuICB2YXIgaGFzaGVkID0gc3RyaW5nSGFzaENhY2hlW3N0cmluZ107XG4gIGlmIChoYXNoZWQgPT09IHVuZGVmaW5lZCkge1xuICAgIGhhc2hlZCA9IGhhc2hTdHJpbmcoc3RyaW5nKTtcbiAgICBpZiAoU1RSSU5HX0hBU0hfQ0FDSEVfU0laRSA9PT0gU1RSSU5HX0hBU0hfQ0FDSEVfTUFYX1NJWkUpIHtcbiAgICAgIFNUUklOR19IQVNIX0NBQ0hFX1NJWkUgPSAwO1xuICAgICAgc3RyaW5nSGFzaENhY2hlID0ge307XG4gICAgfVxuICAgIFNUUklOR19IQVNIX0NBQ0hFX1NJWkUrKztcbiAgICBzdHJpbmdIYXNoQ2FjaGVbc3RyaW5nXSA9IGhhc2hlZDtcbiAgfVxuICByZXR1cm4gaGFzaGVkO1xufVxuXG4vLyBodHRwOi8vanNwZXJmLmNvbS9oYXNoaW5nLXN0cmluZ3NcbmZ1bmN0aW9uIGhhc2hTdHJpbmcoc3RyaW5nKSB7XG4gIC8vIFRoaXMgaXMgdGhlIGhhc2ggZnJvbSBKVk1cbiAgLy8gVGhlIGhhc2ggY29kZSBmb3IgYSBzdHJpbmcgaXMgY29tcHV0ZWQgYXNcbiAgLy8gc1swXSAqIDMxIF4gKG4gLSAxKSArIHNbMV0gKiAzMSBeIChuIC0gMikgKyAuLi4gKyBzW24gLSAxXSxcbiAgLy8gd2hlcmUgc1tpXSBpcyB0aGUgaXRoIGNoYXJhY3RlciBvZiB0aGUgc3RyaW5nIGFuZCBuIGlzIHRoZSBsZW5ndGggb2ZcbiAgLy8gdGhlIHN0cmluZy4gV2UgXCJtb2RcIiB0aGUgcmVzdWx0IHRvIG1ha2UgaXQgYmV0d2VlbiAwIChpbmNsdXNpdmUpIGFuZCAyXjMxXG4gIC8vIChleGNsdXNpdmUpIGJ5IGRyb3BwaW5nIGhpZ2ggYml0cy5cbiAgdmFyIGhhc2hlZCA9IDA7XG4gIGZvciAodmFyIGlpID0gMDsgaWkgPCBzdHJpbmcubGVuZ3RoOyBpaSsrKSB7XG4gICAgaGFzaGVkID0gKDMxICogaGFzaGVkICsgc3RyaW5nLmNoYXJDb2RlQXQoaWkpKSB8IDA7XG4gIH1cbiAgcmV0dXJuIHNtaShoYXNoZWQpO1xufVxuXG5mdW5jdGlvbiBoYXNoSlNPYmoob2JqKSB7XG4gIHZhciBoYXNoZWQ7XG4gIGlmICh1c2luZ1dlYWtNYXApIHtcbiAgICBoYXNoZWQgPSB3ZWFrTWFwLmdldChvYmopO1xuICAgIGlmIChoYXNoZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGhhc2hlZDtcbiAgICB9XG4gIH1cblxuICBoYXNoZWQgPSBvYmpbVUlEX0hBU0hfS0VZXTtcbiAgaWYgKGhhc2hlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGhhc2hlZDtcbiAgfVxuXG4gIGlmICghY2FuRGVmaW5lUHJvcGVydHkpIHtcbiAgICBoYXNoZWQgPSBvYmoucHJvcGVydHlJc0VudW1lcmFibGUgJiYgb2JqLnByb3BlcnR5SXNFbnVtZXJhYmxlW1VJRF9IQVNIX0tFWV07XG4gICAgaWYgKGhhc2hlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gaGFzaGVkO1xuICAgIH1cblxuICAgIGhhc2hlZCA9IGdldElFTm9kZUhhc2gob2JqKTtcbiAgICBpZiAoaGFzaGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBoYXNoZWQ7XG4gICAgfVxuICB9XG5cbiAgaGFzaGVkID0gKytvYmpIYXNoVUlEO1xuICBpZiAob2JqSGFzaFVJRCAmIDB4NDAwMDAwMDApIHtcbiAgICBvYmpIYXNoVUlEID0gMDtcbiAgfVxuXG4gIGlmICh1c2luZ1dlYWtNYXApIHtcbiAgICB3ZWFrTWFwLnNldChvYmosIGhhc2hlZCk7XG4gIH0gZWxzZSBpZiAoaXNFeHRlbnNpYmxlICE9PSB1bmRlZmluZWQgJiYgaXNFeHRlbnNpYmxlKG9iaikgPT09IGZhbHNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb24tZXh0ZW5zaWJsZSBvYmplY3RzIGFyZSBub3QgYWxsb3dlZCBhcyBrZXlzLicpO1xuICB9IGVsc2UgaWYgKGNhbkRlZmluZVByb3BlcnR5KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgVUlEX0hBU0hfS0VZLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogaGFzaGVkLFxuICAgIH0pO1xuICB9IGVsc2UgaWYgKFxuICAgIG9iai5wcm9wZXJ0eUlzRW51bWVyYWJsZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgb2JqLnByb3BlcnR5SXNFbnVtZXJhYmxlID09PSBvYmouY29uc3RydWN0b3IucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlXG4gICkge1xuICAgIC8vIFNpbmNlIHdlIGNhbid0IGRlZmluZSBhIG5vbi1lbnVtZXJhYmxlIHByb3BlcnR5IG9uIHRoZSBvYmplY3RcbiAgICAvLyB3ZSdsbCBoaWphY2sgb25lIG9mIHRoZSBsZXNzLXVzZWQgbm9uLWVudW1lcmFibGUgcHJvcGVydGllcyB0b1xuICAgIC8vIHNhdmUgb3VyIGhhc2ggb24gaXQuIFNpbmNlIHRoaXMgaXMgYSBmdW5jdGlvbiBpdCB3aWxsIG5vdCBzaG93IHVwIGluXG4gICAgLy8gYEpTT04uc3RyaW5naWZ5YCB3aGljaCBpcyB3aGF0IHdlIHdhbnQuXG4gICAgb2JqLnByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuYXBwbHkoXG4gICAgICAgIHRoaXMsXG4gICAgICAgIGFyZ3VtZW50c1xuICAgICAgKTtcbiAgICB9O1xuICAgIG9iai5wcm9wZXJ0eUlzRW51bWVyYWJsZVtVSURfSEFTSF9LRVldID0gaGFzaGVkO1xuICB9IGVsc2UgaWYgKG9iai5ub2RlVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gQXQgdGhpcyBwb2ludCB3ZSBjb3VsZG4ndCBnZXQgdGhlIElFIGB1bmlxdWVJRGAgdG8gdXNlIGFzIGEgaGFzaFxuICAgIC8vIGFuZCB3ZSBjb3VsZG4ndCB1c2UgYSBub24tZW51bWVyYWJsZSBwcm9wZXJ0eSB0byBleHBsb2l0IHRoZVxuICAgIC8vIGRvbnRFbnVtIGJ1ZyBzbyB3ZSBzaW1wbHkgYWRkIHRoZSBgVUlEX0hBU0hfS0VZYCBvbiB0aGUgbm9kZVxuICAgIC8vIGl0c2VsZi5cbiAgICBvYmpbVUlEX0hBU0hfS0VZXSA9IGhhc2hlZDtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBzZXQgYSBub24tZW51bWVyYWJsZSBwcm9wZXJ0eSBvbiBvYmplY3QuJyk7XG4gIH1cblxuICByZXR1cm4gaGFzaGVkO1xufVxuXG4vLyBHZXQgcmVmZXJlbmNlcyB0byBFUzUgb2JqZWN0IG1ldGhvZHMuXG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZTtcblxuLy8gVHJ1ZSBpZiBPYmplY3QuZGVmaW5lUHJvcGVydHkgd29ya3MgYXMgZXhwZWN0ZWQuIElFOCBmYWlscyB0aGlzIHRlc3QuXG52YXIgY2FuRGVmaW5lUHJvcGVydHkgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnQCcsIHt9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSkoKTtcblxuLy8gSUUgaGFzIGEgYHVuaXF1ZUlEYCBwcm9wZXJ0eSBvbiBET00gbm9kZXMuIFdlIGNhbiBjb25zdHJ1Y3QgdGhlIGhhc2ggZnJvbSBpdFxuLy8gYW5kIGF2b2lkIG1lbW9yeSBsZWFrcyBmcm9tIHRoZSBJRSBjbG9uZU5vZGUgYnVnLlxuZnVuY3Rpb24gZ2V0SUVOb2RlSGFzaChub2RlKSB7XG4gIGlmIChub2RlICYmIG5vZGUubm9kZVR5cGUgPiAwKSB7XG4gICAgc3dpdGNoIChub2RlLm5vZGVUeXBlKSB7XG4gICAgICBjYXNlIDE6IC8vIEVsZW1lbnRcbiAgICAgICAgcmV0dXJuIG5vZGUudW5pcXVlSUQ7XG4gICAgICBjYXNlIDk6IC8vIERvY3VtZW50XG4gICAgICAgIHJldHVybiBub2RlLmRvY3VtZW50RWxlbWVudCAmJiBub2RlLmRvY3VtZW50RWxlbWVudC51bmlxdWVJRDtcbiAgICB9XG4gIH1cbn1cblxuLy8gSWYgcG9zc2libGUsIHVzZSBhIFdlYWtNYXAuXG52YXIgdXNpbmdXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbic7XG52YXIgd2Vha01hcDtcbmlmICh1c2luZ1dlYWtNYXApIHtcbiAgd2Vha01hcCA9IG5ldyBXZWFrTWFwKCk7XG59XG5cbnZhciBvYmpIYXNoVUlEID0gMDtcblxudmFyIFVJRF9IQVNIX0tFWSA9ICdfX2ltbXV0YWJsZWhhc2hfXyc7XG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJykge1xuICBVSURfSEFTSF9LRVkgPSBTeW1ib2woVUlEX0hBU0hfS0VZKTtcbn1cblxudmFyIFNUUklOR19IQVNIX0NBQ0hFX01JTl9TVFJMRU4gPSAxNjtcbnZhciBTVFJJTkdfSEFTSF9DQUNIRV9NQVhfU0laRSA9IDI1NTtcbnZhciBTVFJJTkdfSEFTSF9DQUNIRV9TSVpFID0gMDtcbnZhciBzdHJpbmdIYXNoQ2FjaGUgPSB7fTtcblxudmFyIFRvS2V5ZWRTZXF1ZW5jZSA9IC8qQF9fUFVSRV9fKi8oZnVuY3Rpb24gKEtleWVkU2VxJCQxKSB7XG4gIGZ1bmN0aW9uIFRvS2V5ZWRTZXF1ZW5jZShpbmRleGVkLCB1c2VLZXlzKSB7XG4gICAgdGhpcy5faXRlciA9IGluZGV4ZWQ7XG4gICAgdGhpcy5fdXNlS2V5cyA9IHVzZUtleXM7XG4gICAgdGhpcy5zaXplID0gaW5kZXhlZC5zaXplO1xuICB9XG5cbiAgaWYgKCBLZXllZFNlcSQkMSApIFRvS2V5ZWRTZXF1ZW5jZS5fX3Byb3RvX18gPSBLZXllZFNlcSQkMTtcbiAgVG9LZXllZFNlcXVlbmNlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEtleWVkU2VxJCQxICYmIEtleWVkU2VxJCQxLnByb3RvdHlwZSApO1xuICBUb0tleWVkU2VxdWVuY2UucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVG9LZXllZFNlcXVlbmNlO1xuXG4gIFRvS2V5ZWRTZXF1ZW5jZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0IChrZXksIG5vdFNldFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZXIuZ2V0KGtleSwgbm90U2V0VmFsdWUpO1xuICB9O1xuXG4gIFRvS2V5ZWRTZXF1ZW5jZS5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gaGFzIChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5faXRlci5oYXMoa2V5KTtcbiAgfTtcblxuICBUb0tleWVkU2VxdWVuY2UucHJvdG90eXBlLnZhbHVlU2VxID0gZnVuY3Rpb24gdmFsdWVTZXEgKCkge1xuICAgIHJldHVybiB0aGlzLl9pdGVyLnZhbHVlU2VxKCk7XG4gIH07XG5cbiAgVG9LZXllZFNlcXVlbmNlLnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24gcmV2ZXJzZSAoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgcmV2ZXJzZWRTZXF1ZW5jZSA9IHJldmVyc2VGYWN0b3J5KHRoaXMsIHRydWUpO1xuICAgIGlmICghdGhpcy5fdXNlS2V5cykge1xuICAgICAgcmV2ZXJzZWRTZXF1ZW5jZS52YWx1ZVNlcSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMkMS5faXRlci50b1NlcSgpLnJldmVyc2UoKTsgfTtcbiAgICB9XG4gICAgcmV0dXJuIHJldmVyc2VkU2VxdWVuY2U7XG4gIH07XG5cbiAgVG9LZXllZFNlcXVlbmNlLnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiBtYXAgKG1hcHBlciwgY29udGV4dCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdmFyIG1hcHBlZFNlcXVlbmNlID0gbWFwRmFjdG9yeSh0aGlzLCBtYXBwZXIsIGNvbnRleHQpO1xuICAgIGlmICghdGhpcy5fdXNlS2V5cykge1xuICAgICAgbWFwcGVkU2VxdWVuY2UudmFsdWVTZXEgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzJDEuX2l0ZXIudG9TZXEoKS5tYXAobWFwcGVyLCBjb250ZXh0KTsgfTtcbiAgICB9XG4gICAgcmV0dXJuIG1hcHBlZFNlcXVlbmNlO1xuICB9O1xuXG4gIFRvS2V5ZWRTZXF1ZW5jZS5wcm90b3R5cGUuX19pdGVyYXRlID0gZnVuY3Rpb24gX19pdGVyYXRlIChmbiwgcmV2ZXJzZSkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgcmV0dXJuIHRoaXMuX2l0ZXIuX19pdGVyYXRlKGZ1bmN0aW9uICh2LCBrKSB7IHJldHVybiBmbih2LCBrLCB0aGlzJDEpOyB9LCByZXZlcnNlKTtcbiAgfTtcblxuICBUb0tleWVkU2VxdWVuY2UucHJvdG90eXBlLl9faXRlcmF0b3IgPSBmdW5jdGlvbiBfX2l0ZXJhdG9yICh0eXBlLCByZXZlcnNlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZXIuX19pdGVyYXRvcih0eXBlLCByZXZlcnNlKTtcbiAgfTtcblxuICByZXR1cm4gVG9LZXllZFNlcXVlbmNlO1xufShLZXllZFNlcSkpO1xuVG9LZXllZFNlcXVlbmNlLnByb3RvdHlwZVtJU19PUkRFUkVEX1NZTUJPTF0gPSB0cnVlO1xuXG52YXIgVG9JbmRleGVkU2VxdWVuY2UgPSAvKkBfX1BVUkVfXyovKGZ1bmN0aW9uIChJbmRleGVkU2VxJCQxKSB7XG4gIGZ1bmN0aW9uIFRvSW5kZXhlZFNlcXVlbmNlKGl0ZXIpIHtcbiAgICB0aGlzLl9pdGVyID0gaXRlcjtcbiAgICB0aGlzLnNpemUgPSBpdGVyLnNpemU7XG4gIH1cblxuICBpZiAoIEluZGV4ZWRTZXEkJDEgKSBUb0luZGV4ZWRTZXF1ZW5jZS5fX3Byb3RvX18gPSBJbmRleGVkU2VxJCQxO1xuICBUb0luZGV4ZWRTZXF1ZW5jZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBJbmRleGVkU2VxJCQxICYmIEluZGV4ZWRTZXEkJDEucHJvdG90eXBlICk7XG4gIFRvSW5kZXhlZFNlcXVlbmNlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFRvSW5kZXhlZFNlcXVlbmNlO1xuXG4gIFRvSW5kZXhlZFNlcXVlbmNlLnByb3RvdHlwZS5pbmNsdWRlcyA9IGZ1bmN0aW9uIGluY2x1ZGVzICh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLl9pdGVyLmluY2x1ZGVzKHZhbHVlKTtcbiAgfTtcblxuICBUb0luZGV4ZWRTZXF1ZW5jZS5wcm90b3R5cGUuX19pdGVyYXRlID0gZnVuY3Rpb24gX19pdGVyYXRlIChmbiwgcmV2ZXJzZSkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdmFyIGkgPSAwO1xuICAgIHJldmVyc2UgJiYgZW5zdXJlU2l6ZSh0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5faXRlci5fX2l0ZXJhdGUoXG4gICAgICBmdW5jdGlvbiAodikgeyByZXR1cm4gZm4odiwgcmV2ZXJzZSA/IHRoaXMkMS5zaXplIC0gKytpIDogaSsrLCB0aGlzJDEpOyB9LFxuICAgICAgcmV2ZXJzZVxuICAgICk7XG4gIH07XG5cbiAgVG9JbmRleGVkU2VxdWVuY2UucHJvdG90eXBlLl9faXRlcmF0b3IgPSBmdW5jdGlvbiBfX2l0ZXJhdG9yICh0eXBlLCByZXZlcnNlKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgaXRlcmF0b3IgPSB0aGlzLl9pdGVyLl9faXRlcmF0b3IoSVRFUkFURV9WQUxVRVMsIHJldmVyc2UpO1xuICAgIHZhciBpID0gMDtcbiAgICByZXZlcnNlICYmIGVuc3VyZVNpemUodGhpcyk7XG4gICAgcmV0dXJuIG5ldyBJdGVyYXRvcihmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc3RlcCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgIHJldHVybiBzdGVwLmRvbmVcbiAgICAgICAgPyBzdGVwXG4gICAgICAgIDogaXRlcmF0b3JWYWx1ZShcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICByZXZlcnNlID8gdGhpcyQxLnNpemUgLSArK2kgOiBpKyssXG4gICAgICAgICAgICBzdGVwLnZhbHVlLFxuICAgICAgICAgICAgc3RlcFxuICAgICAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIFRvSW5kZXhlZFNlcXVlbmNlO1xufShJbmRleGVkU2VxKSk7XG5cbnZhciBUb1NldFNlcXVlbmNlID0gLypAX19QVVJFX18qLyhmdW5jdGlvbiAoU2V0U2VxJCQxKSB7XG4gIGZ1bmN0aW9uIFRvU2V0U2VxdWVuY2UoaXRlcikge1xuICAgIHRoaXMuX2l0ZXIgPSBpdGVyO1xuICAgIHRoaXMuc2l6ZSA9IGl0ZXIuc2l6ZTtcbiAgfVxuXG4gIGlmICggU2V0U2VxJCQxICkgVG9TZXRTZXF1ZW5jZS5fX3Byb3RvX18gPSBTZXRTZXEkJDE7XG4gIFRvU2V0U2VxdWVuY2UucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggU2V0U2VxJCQxICYmIFNldFNlcSQkMS5wcm90b3R5cGUgKTtcbiAgVG9TZXRTZXF1ZW5jZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBUb1NldFNlcXVlbmNlO1xuXG4gIFRvU2V0U2VxdWVuY2UucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIGhhcyAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZXIuaW5jbHVkZXMoa2V5KTtcbiAgfTtcblxuICBUb1NldFNlcXVlbmNlLnByb3RvdHlwZS5fX2l0ZXJhdGUgPSBmdW5jdGlvbiBfX2l0ZXJhdGUgKGZuLCByZXZlcnNlKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICByZXR1cm4gdGhpcy5faXRlci5fX2l0ZXJhdGUoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIGZuKHYsIHYsIHRoaXMkMSk7IH0sIHJldmVyc2UpO1xuICB9O1xuXG4gIFRvU2V0U2VxdWVuY2UucHJvdG90eXBlLl9faXRlcmF0b3IgPSBmdW5jdGlvbiBfX2l0ZXJhdG9yICh0eXBlLCByZXZlcnNlKSB7XG4gICAgdmFyIGl0ZXJhdG9yID0gdGhpcy5faXRlci5fX2l0ZXJhdG9yKElURVJBVEVfVkFMVUVTLCByZXZlcnNlKTtcbiAgICByZXR1cm4gbmV3IEl0ZXJhdG9yKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzdGVwID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgcmV0dXJuIHN0ZXAuZG9uZVxuICAgICAgICA/IHN0ZXBcbiAgICAgICAgOiBpdGVyYXRvclZhbHVlKHR5cGUsIHN0ZXAudmFsdWUsIHN0ZXAudmFsdWUsIHN0ZXApO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBUb1NldFNlcXVlbmNlO1xufShTZXRTZXEpKTtcblxudmFyIEZyb21FbnRyaWVzU2VxdWVuY2UgPSAvKkBfX1BVUkVfXyovKGZ1bmN0aW9uIChLZXllZFNlcSQkMSkge1xuICBmdW5jdGlvbiBGcm9tRW50cmllc1NlcXVlbmNlKGVudHJpZXMpIHtcbiAgICB0aGlzLl9pdGVyID0gZW50cmllcztcbiAgICB0aGlzLnNpemUgPSBlbnRyaWVzLnNpemU7XG4gIH1cblxuICBpZiAoIEtleWVkU2VxJCQxICkgRnJvbUVudHJpZXNTZXF1ZW5jZS5fX3Byb3RvX18gPSBLZXllZFNlcSQkMTtcbiAgRnJvbUVudHJpZXNTZXF1ZW5jZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBLZXllZFNlcSQkMSAmJiBLZXllZFNlcSQkMS5wcm90b3R5cGUgKTtcbiAgRnJvbUVudHJpZXNTZXF1ZW5jZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBGcm9tRW50cmllc1NlcXVlbmNlO1xuXG4gIEZyb21FbnRyaWVzU2VxdWVuY2UucHJvdG90eXBlLmVudHJ5U2VxID0gZnVuY3Rpb24gZW50cnlTZXEgKCkge1xuICAgIHJldHVybiB0aGlzLl9pdGVyLnRvU2VxKCk7XG4gIH07XG5cbiAgRnJvbUVudHJpZXNTZXF1ZW5jZS5wcm90b3R5cGUuX19pdGVyYXRlID0gZnVuY3Rpb24gX19pdGVyYXRlIChmbiwgcmV2ZXJzZSkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgcmV0dXJuIHRoaXMuX2l0ZXIuX19pdGVyYXRlKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgLy8gQ2hlY2sgaWYgZW50cnkgZXhpc3RzIGZpcnN0IHNvIGFycmF5IGFjY2VzcyBkb2Vzbid0IHRocm93IGZvciBob2xlc1xuICAgICAgLy8gaW4gdGhlIHBhcmVudCBpdGVyYXRpb24uXG4gICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgdmFsaWRhdGVFbnRyeShlbnRyeSk7XG4gICAgICAgIHZhciBpbmRleGVkQ29sbGVjdGlvbiA9IGlzQ29sbGVjdGlvbihlbnRyeSk7XG4gICAgICAgIHJldHVybiBmbihcbiAgICAgICAgICBpbmRleGVkQ29sbGVjdGlvbiA/IGVudHJ5LmdldCgxKSA6IGVudHJ5WzFdLFxuICAgICAgICAgIGluZGV4ZWRDb2xsZWN0aW9uID8gZW50cnkuZ2V0KDApIDogZW50cnlbMF0sXG4gICAgICAgICAgdGhpcyQxXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSwgcmV2ZXJzZSk7XG4gIH07XG5cbiAgRnJvbUVudHJpZXNTZXF1ZW5jZS5wcm90b3R5cGUuX19pdGVyYXRvciA9IGZ1bmN0aW9uIF9faXRlcmF0b3IgKHR5cGUsIHJldmVyc2UpIHtcbiAgICB2YXIgaXRlcmF0b3IgPSB0aGlzLl9pdGVyLl9faXRlcmF0b3IoSVRFUkFURV9WQUxVRVMsIHJldmVyc2UpO1xuICAgIHJldHVybiBuZXcgSXRlcmF0b3IoZnVuY3Rpb24gKCkge1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIHN0ZXAgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgIGlmIChzdGVwLmRvbmUpIHtcbiAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAvLyBDaGVjayBpZiBlbnRyeSBleGlzdHMgZmlyc3Qgc28gYXJyYXkgYWNjZXNzIGRvZXNuJ3QgdGhyb3cgZm9yIGhvbGVzXG4gICAgICAgIC8vIGluIHRoZSBwYXJlbnQgaXRlcmF0aW9uLlxuICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICB2YWxpZGF0ZUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB2YXIgaW5kZXhlZENvbGxlY3Rpb24gPSBpc0NvbGxlY3Rpb24oZW50cnkpO1xuICAgICAgICAgIHJldHVybiBpdGVyYXRvclZhbHVlKFxuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIGluZGV4ZWRDb2xsZWN0aW9uID8gZW50cnkuZ2V0KDApIDogZW50cnlbMF0sXG4gICAgICAgICAgICBpbmRleGVkQ29sbGVjdGlvbiA/IGVudHJ5LmdldCgxKSA6IGVudHJ5WzFdLFxuICAgICAgICAgICAgc3RlcFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gRnJvbUVudHJpZXNTZXF1ZW5jZTtcbn0oS2V5ZWRTZXEpKTtcblxuVG9JbmRleGVkU2VxdWVuY2UucHJvdG90eXBlLmNhY2hlUmVzdWx0ID0gVG9LZXllZFNlcXVlbmNlLnByb3RvdHlwZS5jYWNoZVJlc3VsdCA9IFRvU2V0U2VxdWVuY2UucHJvdG90eXBlLmNhY2hlUmVzdWx0ID0gRnJvbUVudHJpZXNTZXF1ZW5jZS5wcm90b3R5cGUuY2FjaGVSZXN1bHQgPSBjYWNoZVJlc3VsdFRocm91Z2g7XG5cbmZ1bmN0aW9uIGZsaXBGYWN0b3J5KGNvbGxlY3Rpb24pIHtcbiAgdmFyIGZsaXBTZXF1ZW5jZSA9IG1ha2VTZXF1ZW5jZShjb2xsZWN0aW9uKTtcbiAgZmxpcFNlcXVlbmNlLl9pdGVyID0gY29sbGVjdGlvbjtcbiAgZmxpcFNlcXVlbmNlLnNpemUgPSBjb2xsZWN0aW9uLnNpemU7XG4gIGZsaXBTZXF1ZW5jZS5mbGlwID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gY29sbGVjdGlvbjsgfTtcbiAgZmxpcFNlcXVlbmNlLnJldmVyc2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmV2ZXJzZWRTZXF1ZW5jZSA9IGNvbGxlY3Rpb24ucmV2ZXJzZS5hcHBseSh0aGlzKTsgLy8gc3VwZXIucmV2ZXJzZSgpXG4gICAgcmV2ZXJzZWRTZXF1ZW5jZS5mbGlwID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gY29sbGVjdGlvbi5yZXZlcnNlKCk7IH07XG4gICAgcmV0dXJuIHJldmVyc2VkU2VxdWVuY2U7XG4gIH07XG4gIGZsaXBTZXF1ZW5jZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBjb2xsZWN0aW9uLmluY2x1ZGVzKGtleSk7IH07XG4gIGZsaXBTZXF1ZW5jZS5pbmNsdWRlcyA9IGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGNvbGxlY3Rpb24uaGFzKGtleSk7IH07XG4gIGZsaXBTZXF1ZW5jZS5jYWNoZVJlc3VsdCA9IGNhY2hlUmVzdWx0VGhyb3VnaDtcbiAgZmxpcFNlcXVlbmNlLl9faXRlcmF0ZVVuY2FjaGVkID0gZnVuY3Rpb24oZm4sIHJldmVyc2UpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHJldHVybiBjb2xsZWN0aW9uLl9faXRlcmF0ZShmdW5jdGlvbiAodiwgaykgeyByZXR1cm4gZm4oaywgdiwgdGhpcyQxKSAhPT0gZmFsc2U7IH0sIHJldmVyc2UpO1xuICB9O1xuICBmbGlwU2VxdWVuY2UuX19pdGVyYXRvclVuY2FjaGVkID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge1xuICAgIGlmICh0eXBlID09PSBJVEVSQVRFX0VOVFJJRVMpIHtcbiAgICAgIHZhciBpdGVyYXRvciA9IGNvbGxlY3Rpb24uX19pdGVyYXRvcih0eXBlLCByZXZlcnNlKTtcbiAgICAgIHJldHVybiBuZXcgSXRlcmF0b3IoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3RlcCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgaWYgKCFzdGVwLmRvbmUpIHtcbiAgICAgICAgICB2YXIgayA9IHN0ZXAudmFsdWVbMF07XG4gICAgICAgICAgc3RlcC52YWx1ZVswXSA9IHN0ZXAudmFsdWVbMV07XG4gICAgICAgICAgc3RlcC52YWx1ZVsxXSA9IGs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0ZXA7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbGxlY3Rpb24uX19pdGVyYXRvcihcbiAgICAgIHR5cGUgPT09IElURVJBVEVfVkFMVUVTID8gSVRFUkFURV9LRVlTIDogSVRFUkFURV9WQUxVRVMsXG4gICAgICByZXZlcnNlXG4gICAgKTtcbiAgfTtcbiAgcmV0dXJuIGZsaXBTZXF1ZW5jZTtcbn1cblxuZnVuY3Rpb24gbWFwRmFjdG9yeShjb2xsZWN0aW9uLCBtYXBwZXIsIGNvbnRleHQpIHtcbiAgdmFyIG1hcHBlZFNlcXVlbmNlID0gbWFrZVNlcXVlbmNlKGNvbGxlY3Rpb24pO1xuICBtYXBwZWRTZXF1ZW5jZS5zaXplID0gY29sbGVjdGlvbi5zaXplO1xuICBtYXBwZWRTZXF1ZW5jZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBjb2xsZWN0aW9uLmhhcyhrZXkpOyB9O1xuICBtYXBwZWRTZXF1ZW5jZS5nZXQgPSBmdW5jdGlvbiAoa2V5LCBub3RTZXRWYWx1ZSkge1xuICAgIHZhciB2ID0gY29sbGVjdGlvbi5nZXQoa2V5LCBOT1RfU0VUKTtcbiAgICByZXR1cm4gdiA9PT0gTk9UX1NFVFxuICAgICAgPyBub3RTZXRWYWx1ZVxuICAgICAgOiBtYXBwZXIuY2FsbChjb250ZXh0LCB2LCBrZXksIGNvbGxlY3Rpb24pO1xuICB9O1xuICBtYXBwZWRTZXF1ZW5jZS5fX2l0ZXJhdGVVbmNhY2hlZCA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICByZXR1cm4gY29sbGVjdGlvbi5fX2l0ZXJhdGUoXG4gICAgICBmdW5jdGlvbiAodiwgaywgYykgeyByZXR1cm4gZm4obWFwcGVyLmNhbGwoY29udGV4dCwgdiwgaywgYyksIGssIHRoaXMkMSkgIT09IGZhbHNlOyB9LFxuICAgICAgcmV2ZXJzZVxuICAgICk7XG4gIH07XG4gIG1hcHBlZFNlcXVlbmNlLl9faXRlcmF0b3JVbmNhY2hlZCA9IGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpIHtcbiAgICB2YXIgaXRlcmF0b3IgPSBjb2xsZWN0aW9uLl9faXRlcmF0b3IoSVRFUkFURV9FTlRSSUVTLCByZXZlcnNlKTtcbiAgICByZXR1cm4gbmV3IEl0ZXJhdG9yKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzdGVwID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgaWYgKHN0ZXAuZG9uZSkge1xuICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgIH1cbiAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICB2YXIga2V5ID0gZW50cnlbMF07XG4gICAgICByZXR1cm4gaXRlcmF0b3JWYWx1ZShcbiAgICAgICAgdHlwZSxcbiAgICAgICAga2V5LFxuICAgICAgICBtYXBwZXIuY2FsbChjb250ZXh0LCBlbnRyeVsxXSwga2V5LCBjb2xsZWN0aW9uKSxcbiAgICAgICAgc3RlcFxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIG1hcHBlZFNlcXVlbmNlO1xufVxuXG5mdW5jdGlvbiByZXZlcnNlRmFjdG9yeShjb2xsZWN0aW9uLCB1c2VLZXlzKSB7XG4gIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHZhciByZXZlcnNlZFNlcXVlbmNlID0gbWFrZVNlcXVlbmNlKGNvbGxlY3Rpb24pO1xuICByZXZlcnNlZFNlcXVlbmNlLl9pdGVyID0gY29sbGVjdGlvbjtcbiAgcmV2ZXJzZWRTZXF1ZW5jZS5zaXplID0gY29sbGVjdGlvbi5zaXplO1xuICByZXZlcnNlZFNlcXVlbmNlLnJldmVyc2UgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBjb2xsZWN0aW9uOyB9O1xuICBpZiAoY29sbGVjdGlvbi5mbGlwKSB7XG4gICAgcmV2ZXJzZWRTZXF1ZW5jZS5mbGlwID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZmxpcFNlcXVlbmNlID0gZmxpcEZhY3RvcnkoY29sbGVjdGlvbik7XG4gICAgICBmbGlwU2VxdWVuY2UucmV2ZXJzZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbGxlY3Rpb24uZmxpcCgpOyB9O1xuICAgICAgcmV0dXJuIGZsaXBTZXF1ZW5jZTtcbiAgICB9O1xuICB9XG4gIHJldmVyc2VkU2VxdWVuY2UuZ2V0ID0gZnVuY3Rpb24gKGtleSwgbm90U2V0VmFsdWUpIHsgcmV0dXJuIGNvbGxlY3Rpb24uZ2V0KHVzZUtleXMgPyBrZXkgOiAtMSAtIGtleSwgbm90U2V0VmFsdWUpOyB9O1xuICByZXZlcnNlZFNlcXVlbmNlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGNvbGxlY3Rpb24uaGFzKHVzZUtleXMgPyBrZXkgOiAtMSAtIGtleSk7IH07XG4gIHJldmVyc2VkU2VxdWVuY2UuaW5jbHVkZXMgPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIGNvbGxlY3Rpb24uaW5jbHVkZXModmFsdWUpOyB9O1xuICByZXZlcnNlZFNlcXVlbmNlLmNhY2hlUmVzdWx0ID0gY2FjaGVSZXN1bHRUaHJvdWdoO1xuICByZXZlcnNlZFNlcXVlbmNlLl9faXRlcmF0ZSA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgaSA9IDA7XG4gICAgcmV2ZXJzZSAmJiBlbnN1cmVTaXplKGNvbGxlY3Rpb24pO1xuICAgIHJldHVybiBjb2xsZWN0aW9uLl9faXRlcmF0ZShcbiAgICAgIGZ1bmN0aW9uICh2LCBrKSB7IHJldHVybiBmbih2LCB1c2VLZXlzID8gayA6IHJldmVyc2UgPyB0aGlzJDEuc2l6ZSAtICsraSA6IGkrKywgdGhpcyQxKTsgfSxcbiAgICAgICFyZXZlcnNlXG4gICAgKTtcbiAgfTtcbiAgcmV2ZXJzZWRTZXF1ZW5jZS5fX2l0ZXJhdG9yID0gZnVuY3Rpb24gKHR5cGUsIHJldmVyc2UpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgcmV2ZXJzZSAmJiBlbnN1cmVTaXplKGNvbGxlY3Rpb24pO1xuICAgIHZhciBpdGVyYXRvciA9IGNvbGxlY3Rpb24uX19pdGVyYXRvcihJVEVSQVRFX0VOVFJJRVMsICFyZXZlcnNlKTtcbiAgICByZXR1cm4gbmV3IEl0ZXJhdG9yKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzdGVwID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgaWYgKHN0ZXAuZG9uZSkge1xuICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgIH1cbiAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICByZXR1cm4gaXRlcmF0b3JWYWx1ZShcbiAgICAgICAgdHlwZSxcbiAgICAgICAgdXNlS2V5cyA/IGVudHJ5WzBdIDogcmV2ZXJzZSA/IHRoaXMkMS5zaXplIC0gKytpIDogaSsrLFxuICAgICAgICBlbnRyeVsxXSxcbiAgICAgICAgc3RlcFxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIHJldmVyc2VkU2VxdWVuY2U7XG59XG5cbmZ1bmN0aW9uIGZpbHRlckZhY3RvcnkoY29sbGVjdGlvbiwgcHJlZGljYXRlLCBjb250ZXh0LCB1c2VLZXlzKSB7XG4gIHZhciBmaWx0ZXJTZXF1ZW5jZSA9IG1ha2VTZXF1ZW5jZShjb2xsZWN0aW9uKTtcbiAgaWYgKHVzZUtleXMpIHtcbiAgICBmaWx0ZXJTZXF1ZW5jZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgdiA9IGNvbGxlY3Rpb24uZ2V0KGtleSwgTk9UX1NFVCk7XG4gICAgICByZXR1cm4gdiAhPT0gTk9UX1NFVCAmJiAhIXByZWRpY2F0ZS5jYWxsKGNvbnRleHQsIHYsIGtleSwgY29sbGVjdGlvbik7XG4gICAgfTtcbiAgICBmaWx0ZXJTZXF1ZW5jZS5nZXQgPSBmdW5jdGlvbiAoa2V5LCBub3RTZXRWYWx1ZSkge1xuICAgICAgdmFyIHYgPSBjb2xsZWN0aW9uLmdldChrZXksIE5PVF9TRVQpO1xuICAgICAgcmV0dXJuIHYgIT09IE5PVF9TRVQgJiYgcHJlZGljYXRlLmNhbGwoY29udGV4dCwgdiwga2V5LCBjb2xsZWN0aW9uKVxuICAgICAgICA/IHZcbiAgICAgICAgOiBub3RTZXRWYWx1ZTtcbiAgICB9O1xuICB9XG4gIGZpbHRlclNlcXVlbmNlLl9faXRlcmF0ZVVuY2FjaGVkID0gZnVuY3Rpb24oZm4sIHJldmVyc2UpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICBjb2xsZWN0aW9uLl9faXRlcmF0ZShmdW5jdGlvbiAodiwgaywgYykge1xuICAgICAgaWYgKHByZWRpY2F0ZS5jYWxsKGNvbnRleHQsIHYsIGssIGMpKSB7XG4gICAgICAgIGl0ZXJhdGlvbnMrKztcbiAgICAgICAgcmV0dXJuIGZuKHYsIHVzZUtleXMgPyBrIDogaXRlcmF0aW9ucyAtIDEsIHRoaXMkMSk7XG4gICAgICB9XG4gICAgfSwgcmV2ZXJzZSk7XG4gICAgcmV0dXJuIGl0ZXJhdGlvbnM7XG4gIH07XG4gIGZpbHRlclNlcXVlbmNlLl9faXRlcmF0b3JVbmNhY2hlZCA9IGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpIHtcbiAgICB2YXIgaXRlcmF0b3IgPSBjb2xsZWN0aW9uLl9faXRlcmF0b3IoSVRFUkFURV9FTlRSSUVTLCByZXZlcnNlKTtcbiAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgcmV0dXJuIG5ldyBJdGVyYXRvcihmdW5jdGlvbiAoKSB7XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgc3RlcCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgaWYgKHN0ZXAuZG9uZSkge1xuICAgICAgICAgIHJldHVybiBzdGVwO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgIHZhciBrZXkgPSBlbnRyeVswXTtcbiAgICAgICAgdmFyIHZhbHVlID0gZW50cnlbMV07XG4gICAgICAgIGlmIChwcmVkaWNhdGUuY2FsbChjb250ZXh0LCB2YWx1ZSwga2V5LCBjb2xsZWN0aW9uKSkge1xuICAgICAgICAgIHJldHVybiBpdGVyYXRvclZhbHVlKHR5cGUsIHVzZUtleXMgPyBrZXkgOiBpdGVyYXRpb25zKyssIHZhbHVlLCBzdGVwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICByZXR1cm4gZmlsdGVyU2VxdWVuY2U7XG59XG5cbmZ1bmN0aW9uIGNvdW50QnlGYWN0b3J5KGNvbGxlY3Rpb24sIGdyb3VwZXIsIGNvbnRleHQpIHtcbiAgdmFyIGdyb3VwcyA9IE1hcCgpLmFzTXV0YWJsZSgpO1xuICBjb2xsZWN0aW9uLl9faXRlcmF0ZShmdW5jdGlvbiAodiwgaykge1xuICAgIGdyb3Vwcy51cGRhdGUoZ3JvdXBlci5jYWxsKGNvbnRleHQsIHYsIGssIGNvbGxlY3Rpb24pLCAwLCBmdW5jdGlvbiAoYSkgeyByZXR1cm4gYSArIDE7IH0pO1xuICB9KTtcbiAgcmV0dXJuIGdyb3Vwcy5hc0ltbXV0YWJsZSgpO1xufVxuXG5mdW5jdGlvbiBncm91cEJ5RmFjdG9yeShjb2xsZWN0aW9uLCBncm91cGVyLCBjb250ZXh0KSB7XG4gIHZhciBpc0tleWVkSXRlciA9IGlzS2V5ZWQoY29sbGVjdGlvbik7XG4gIHZhciBncm91cHMgPSAoaXNPcmRlcmVkKGNvbGxlY3Rpb24pID8gT3JkZXJlZE1hcCgpIDogTWFwKCkpLmFzTXV0YWJsZSgpO1xuICBjb2xsZWN0aW9uLl9faXRlcmF0ZShmdW5jdGlvbiAodiwgaykge1xuICAgIGdyb3Vwcy51cGRhdGUoXG4gICAgICBncm91cGVyLmNhbGwoY29udGV4dCwgdiwgaywgY29sbGVjdGlvbiksXG4gICAgICBmdW5jdGlvbiAoYSkgeyByZXR1cm4gKChhID0gYSB8fCBbXSksIGEucHVzaChpc0tleWVkSXRlciA/IFtrLCB2XSA6IHYpLCBhKTsgfVxuICAgICk7XG4gIH0pO1xuICB2YXIgY29lcmNlID0gY29sbGVjdGlvbkNsYXNzKGNvbGxlY3Rpb24pO1xuICByZXR1cm4gZ3JvdXBzLm1hcChmdW5jdGlvbiAoYXJyKSB7IHJldHVybiByZWlmeShjb2xsZWN0aW9uLCBjb2VyY2UoYXJyKSk7IH0pLmFzSW1tdXRhYmxlKCk7XG59XG5cbmZ1bmN0aW9uIHNsaWNlRmFjdG9yeShjb2xsZWN0aW9uLCBiZWdpbiwgZW5kLCB1c2VLZXlzKSB7XG4gIHZhciBvcmlnaW5hbFNpemUgPSBjb2xsZWN0aW9uLnNpemU7XG5cbiAgaWYgKHdob2xlU2xpY2UoYmVnaW4sIGVuZCwgb3JpZ2luYWxTaXplKSkge1xuICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICB9XG5cbiAgdmFyIHJlc29sdmVkQmVnaW4gPSByZXNvbHZlQmVnaW4oYmVnaW4sIG9yaWdpbmFsU2l6ZSk7XG4gIHZhciByZXNvbHZlZEVuZCA9IHJlc29sdmVFbmQoZW5kLCBvcmlnaW5hbFNpemUpO1xuXG4gIC8vIGJlZ2luIG9yIGVuZCB3aWxsIGJlIE5hTiBpZiB0aGV5IHdlcmUgcHJvdmlkZWQgYXMgbmVnYXRpdmUgbnVtYmVycyBhbmRcbiAgLy8gdGhpcyBjb2xsZWN0aW9uJ3Mgc2l6ZSBpcyB1bmtub3duLiBJbiB0aGF0IGNhc2UsIGNhY2hlIGZpcnN0IHNvIHRoZXJlIGlzXG4gIC8vIGEga25vd24gc2l6ZSBhbmQgdGhlc2UgZG8gbm90IHJlc29sdmUgdG8gTmFOLlxuICBpZiAocmVzb2x2ZWRCZWdpbiAhPT0gcmVzb2x2ZWRCZWdpbiB8fCByZXNvbHZlZEVuZCAhPT0gcmVzb2x2ZWRFbmQpIHtcbiAgICByZXR1cm4gc2xpY2VGYWN0b3J5KGNvbGxlY3Rpb24udG9TZXEoKS5jYWNoZVJlc3VsdCgpLCBiZWdpbiwgZW5kLCB1c2VLZXlzKTtcbiAgfVxuXG4gIC8vIE5vdGU6IHJlc29sdmVkRW5kIGlzIHVuZGVmaW5lZCB3aGVuIHRoZSBvcmlnaW5hbCBzZXF1ZW5jZSdzIGxlbmd0aCBpc1xuICAvLyB1bmtub3duIGFuZCB0aGlzIHNsaWNlIGRpZCBub3Qgc3VwcGx5IGFuIGVuZCBhbmQgc2hvdWxkIGNvbnRhaW4gYWxsXG4gIC8vIGVsZW1lbnRzIGFmdGVyIHJlc29sdmVkQmVnaW4uXG4gIC8vIEluIHRoYXQgY2FzZSwgcmVzb2x2ZWRTaXplIHdpbGwgYmUgTmFOIGFuZCBzbGljZVNpemUgd2lsbCByZW1haW4gdW5kZWZpbmVkLlxuICB2YXIgcmVzb2x2ZWRTaXplID0gcmVzb2x2ZWRFbmQgLSByZXNvbHZlZEJlZ2luO1xuICB2YXIgc2xpY2VTaXplO1xuICBpZiAocmVzb2x2ZWRTaXplID09PSByZXNvbHZlZFNpemUpIHtcbiAgICBzbGljZVNpemUgPSByZXNvbHZlZFNpemUgPCAwID8gMCA6IHJlc29sdmVkU2l6ZTtcbiAgfVxuXG4gIHZhciBzbGljZVNlcSA9IG1ha2VTZXF1ZW5jZShjb2xsZWN0aW9uKTtcblxuICAvLyBJZiBjb2xsZWN0aW9uLnNpemUgaXMgdW5kZWZpbmVkLCB0aGUgc2l6ZSBvZiB0aGUgcmVhbGl6ZWQgc2xpY2VTZXEgaXNcbiAgLy8gdW5rbm93biBhdCB0aGlzIHBvaW50IHVubGVzcyB0aGUgbnVtYmVyIG9mIGl0ZW1zIHRvIHNsaWNlIGlzIDBcbiAgc2xpY2VTZXEuc2l6ZSA9XG4gICAgc2xpY2VTaXplID09PSAwID8gc2xpY2VTaXplIDogKGNvbGxlY3Rpb24uc2l6ZSAmJiBzbGljZVNpemUpIHx8IHVuZGVmaW5lZDtcblxuICBpZiAoIXVzZUtleXMgJiYgaXNTZXEoY29sbGVjdGlvbikgJiYgc2xpY2VTaXplID49IDApIHtcbiAgICBzbGljZVNlcS5nZXQgPSBmdW5jdGlvbihpbmRleCwgbm90U2V0VmFsdWUpIHtcbiAgICAgIGluZGV4ID0gd3JhcEluZGV4KHRoaXMsIGluZGV4KTtcbiAgICAgIHJldHVybiBpbmRleCA+PSAwICYmIGluZGV4IDwgc2xpY2VTaXplXG4gICAgICAgID8gY29sbGVjdGlvbi5nZXQoaW5kZXggKyByZXNvbHZlZEJlZ2luLCBub3RTZXRWYWx1ZSlcbiAgICAgICAgOiBub3RTZXRWYWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgc2xpY2VTZXEuX19pdGVyYXRlVW5jYWNoZWQgPSBmdW5jdGlvbihmbiwgcmV2ZXJzZSkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgaWYgKHNsaWNlU2l6ZSA9PT0gMCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGlmIChyZXZlcnNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYWNoZVJlc3VsdCgpLl9faXRlcmF0ZShmbiwgcmV2ZXJzZSk7XG4gICAgfVxuICAgIHZhciBza2lwcGVkID0gMDtcbiAgICB2YXIgaXNTa2lwcGluZyA9IHRydWU7XG4gICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgIGNvbGxlY3Rpb24uX19pdGVyYXRlKGZ1bmN0aW9uICh2LCBrKSB7XG4gICAgICBpZiAoIShpc1NraXBwaW5nICYmIChpc1NraXBwaW5nID0gc2tpcHBlZCsrIDwgcmVzb2x2ZWRCZWdpbikpKSB7XG4gICAgICAgIGl0ZXJhdGlvbnMrKztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICBmbih2LCB1c2VLZXlzID8gayA6IGl0ZXJhdGlvbnMgLSAxLCB0aGlzJDEpICE9PSBmYWxzZSAmJlxuICAgICAgICAgIGl0ZXJhdGlvbnMgIT09IHNsaWNlU2l6ZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBpdGVyYXRpb25zO1xuICB9O1xuXG4gIHNsaWNlU2VxLl9faXRlcmF0b3JVbmNhY2hlZCA9IGZ1bmN0aW9uKHR5cGUsIHJldmVyc2UpIHtcbiAgICBpZiAoc2xpY2VTaXplICE9PSAwICYmIHJldmVyc2UpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhY2hlUmVzdWx0KCkuX19pdGVyYXRvcih0eXBlLCByZXZlcnNlKTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGluc3RhbnRpYXRpbmcgcGFyZW50IGl0ZXJhdG9yIGlmIHRha2luZyAwLlxuICAgIGlmIChzbGljZVNpemUgPT09IDApIHtcbiAgICAgIHJldHVybiBuZXcgSXRlcmF0b3IoaXRlcmF0b3JEb25lKTtcbiAgICB9XG4gICAgdmFyIGl0ZXJhdG9yID0gY29sbGVjdGlvbi5fX2l0ZXJhdG9yKHR5cGUsIHJldmVyc2UpO1xuICAgIHZhciBza2lwcGVkID0gMDtcbiAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgcmV0dXJuIG5ldyBJdGVyYXRvcihmdW5jdGlvbiAoKSB7XG4gICAgICB3aGlsZSAoc2tpcHBlZCsrIDwgcmVzb2x2ZWRCZWdpbikge1xuICAgICAgICBpdGVyYXRvci5uZXh0KCk7XG4gICAgICB9XG4gICAgICBpZiAoKytpdGVyYXRpb25zID4gc2xpY2VTaXplKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvckRvbmUoKTtcbiAgICAgIH1cbiAgICAgIHZhciBzdGVwID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgaWYgKHVzZUtleXMgfHwgdHlwZSA9PT0gSVRFUkFURV9WQUxVRVMgfHwgc3RlcC5kb25lKSB7XG4gICAgICAgIHJldHVybiBzdGVwO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGUgPT09IElURVJBVEVfS0VZUykge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JWYWx1ZSh0eXBlLCBpdGVyYXRpb25zIC0gMSwgdW5kZWZpbmVkLCBzdGVwKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVyYXRvclZhbHVlKHR5cGUsIGl0ZXJhdGlvbnMgLSAxLCBzdGVwLnZhbHVlWzFdLCBzdGVwKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gc2xpY2VTZXE7XG59XG5cbmZ1bmN0aW9uIHRha2VXaGlsZUZhY3RvcnkoY29sbGVjdGlvbiwgcHJlZGljYXRlLCBjb250ZXh0KSB7XG4gIHZhciB0YWtlU2VxdWVuY2UgPSBtYWtlU2VxdWVuY2UoY29sbGVjdGlvbik7XG4gIHRha2VTZXF1ZW5jZS5fX2l0ZXJhdGVVbmNhY2hlZCA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICBpZiAocmV2ZXJzZSkge1xuICAgICAgcmV0dXJuIHRoaXMuY2FjaGVSZXN1bHQoKS5fX2l0ZXJhdGUoZm4sIHJldmVyc2UpO1xuICAgIH1cbiAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgY29sbGVjdGlvbi5fX2l0ZXJhdGUoXG4gICAgICBmdW5jdGlvbiAodiwgaywgYykgeyByZXR1cm4gcHJlZGljYXRlLmNhbGwoY29udGV4dCwgdiwgaywgYykgJiYgKytpdGVyYXRpb25zICYmIGZuKHYsIGssIHRoaXMkMSk7IH1cbiAgICApO1xuICAgIHJldHVybiBpdGVyYXRpb25zO1xuICB9O1xuICB0YWtlU2VxdWVuY2UuX19pdGVyYXRvclVuY2FjaGVkID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgaWYgKHJldmVyc2UpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhY2hlUmVzdWx0KCkuX19pdGVyYXRvcih0eXBlLCByZXZlcnNlKTtcbiAgICB9XG4gICAgdmFyIGl0ZXJhdG9yID0gY29sbGVjdGlvbi5fX2l0ZXJhdG9yKElURVJBVEVfRU5UUklFUywgcmV2ZXJzZSk7XG4gICAgdmFyIGl0ZXJhdGluZyA9IHRydWU7XG4gICAgcmV0dXJuIG5ldyBJdGVyYXRvcihmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWl0ZXJhdGluZykge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JEb25lKCk7XG4gICAgICB9XG4gICAgICB2YXIgc3RlcCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgIGlmIChzdGVwLmRvbmUpIHtcbiAgICAgICAgcmV0dXJuIHN0ZXA7XG4gICAgICB9XG4gICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgdmFyIGsgPSBlbnRyeVswXTtcbiAgICAgIHZhciB2ID0gZW50cnlbMV07XG4gICAgICBpZiAoIXByZWRpY2F0ZS5jYWxsKGNvbnRleHQsIHYsIGssIHRoaXMkMSkpIHtcbiAgICAgICAgaXRlcmF0aW5nID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBpdGVyYXRvckRvbmUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0eXBlID09PSBJVEVSQVRFX0VOVFJJRVMgPyBzdGVwIDogaXRlcmF0b3JWYWx1ZSh0eXBlLCBrLCB2LCBzdGVwKTtcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIHRha2VTZXF1ZW5jZTtcbn1cblxuZnVuY3Rpb24gc2tpcFdoaWxlRmFjdG9yeShjb2xsZWN0aW9uLCBwcmVkaWNhdGUsIGNvbnRleHQsIHVzZUtleXMpIHtcbiAgdmFyIHNraXBTZXF1ZW5jZSA9IG1ha2VTZXF1ZW5jZShjb2xsZWN0aW9uKTtcbiAgc2tpcFNlcXVlbmNlLl9faXRlcmF0ZVVuY2FjaGVkID0gZnVuY3Rpb24oZm4sIHJldmVyc2UpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIGlmIChyZXZlcnNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYWNoZVJlc3VsdCgpLl9faXRlcmF0ZShmbiwgcmV2ZXJzZSk7XG4gICAgfVxuICAgIHZhciBpc1NraXBwaW5nID0gdHJ1ZTtcbiAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgY29sbGVjdGlvbi5fX2l0ZXJhdGUoZnVuY3Rpb24gKHYsIGssIGMpIHtcbiAgICAgIGlmICghKGlzU2tpcHBpbmcgJiYgKGlzU2tpcHBpbmcgPSBwcmVkaWNhdGUuY2FsbChjb250ZXh0LCB2LCBrLCBjKSkpKSB7XG4gICAgICAgIGl0ZXJhdGlvbnMrKztcbiAgICAgICAgcmV0dXJuIGZuKHYsIHVzZUtleXMgPyBrIDogaXRlcmF0aW9ucyAtIDEsIHRoaXMkMSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZXJhdGlvbnM7XG4gIH07XG4gIHNraXBTZXF1ZW5jZS5fX2l0ZXJhdG9yVW5jYWNoZWQgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICBpZiAocmV2ZXJzZSkge1xuICAgICAgcmV0dXJuIHRoaXMuY2FjaGVSZXN1bHQoKS5fX2l0ZXJhdG9yKHR5cGUsIHJldmVyc2UpO1xuICAgIH1cbiAgICB2YXIgaXRlcmF0b3IgPSBjb2xsZWN0aW9uLl9faXRlcmF0b3IoSVRFUkFURV9FTlRSSUVTLCByZXZlcnNlKTtcbiAgICB2YXIgc2tpcHBpbmcgPSB0cnVlO1xuICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICByZXR1cm4gbmV3IEl0ZXJhdG9yKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzdGVwO1xuICAgICAgdmFyIGs7XG4gICAgICB2YXIgdjtcbiAgICAgIGRvIHtcbiAgICAgICAgc3RlcCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgaWYgKHN0ZXAuZG9uZSkge1xuICAgICAgICAgIGlmICh1c2VLZXlzIHx8IHR5cGUgPT09IElURVJBVEVfVkFMVUVTKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHR5cGUgPT09IElURVJBVEVfS0VZUykge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yVmFsdWUodHlwZSwgaXRlcmF0aW9ucysrLCB1bmRlZmluZWQsIHN0ZXApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gaXRlcmF0b3JWYWx1ZSh0eXBlLCBpdGVyYXRpb25zKyssIHN0ZXAudmFsdWVbMV0sIHN0ZXApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgIGsgPSBlbnRyeVswXTtcbiAgICAgICAgdiA9IGVudHJ5WzFdO1xuICAgICAgICBza2lwcGluZyAmJiAoc2tpcHBpbmcgPSBwcmVkaWNhdGUuY2FsbChjb250ZXh0LCB2LCBrLCB0aGlzJDEpKTtcbiAgICAgIH0gd2hpbGUgKHNraXBwaW5nKTtcbiAgICAgIHJldHVybiB0eXBlID09PSBJVEVSQVRFX0VOVFJJRVMgPyBzdGVwIDogaXRlcmF0b3JWYWx1ZSh0eXBlLCBrLCB2LCBzdGVwKTtcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIHNraXBTZXF1ZW5jZTtcbn1cblxuZnVuY3Rpb24gY29uY2F0RmFjdG9yeShjb2xsZWN0aW9uLCB2YWx1ZXMpIHtcbiAgdmFyIGlzS2V5ZWRDb2xsZWN0aW9uID0gaXNLZXllZChjb2xsZWN0aW9uKTtcbiAgdmFyIGl0ZXJzID0gW2NvbGxlY3Rpb25dXG4gICAgLmNvbmNhdCh2YWx1ZXMpXG4gICAgLm1hcChmdW5jdGlvbiAodikge1xuICAgICAgaWYgKCFpc0NvbGxlY3Rpb24odikpIHtcbiAgICAgICAgdiA9IGlzS2V5ZWRDb2xsZWN0aW9uXG4gICAgICAgICAgPyBrZXllZFNlcUZyb21WYWx1ZSh2KVxuICAgICAgICAgIDogaW5kZXhlZFNlcUZyb21WYWx1ZShBcnJheS5pc0FycmF5KHYpID8gdiA6IFt2XSk7XG4gICAgICB9IGVsc2UgaWYgKGlzS2V5ZWRDb2xsZWN0aW9uKSB7XG4gICAgICAgIHYgPSBLZXllZENvbGxlY3Rpb24odik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdjtcbiAgICB9KVxuICAgIC5maWx0ZXIoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHYuc2l6ZSAhPT0gMDsgfSk7XG5cbiAgaWYgKGl0ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICB9XG5cbiAgaWYgKGl0ZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgIHZhciBzaW5nbGV0b24gPSBpdGVyc1swXTtcbiAgICBpZiAoXG4gICAgICBzaW5nbGV0b24gPT09IGNvbGxlY3Rpb24gfHxcbiAgICAgIChpc0tleWVkQ29sbGVjdGlvbiAmJiBpc0tleWVkKHNpbmdsZXRvbikpIHx8XG4gICAgICAoaXNJbmRleGVkKGNvbGxlY3Rpb24pICYmIGlzSW5kZXhlZChzaW5nbGV0b24pKVxuICAgICkge1xuICAgICAgcmV0dXJuIHNpbmdsZXRvbjtcbiAgICB9XG4gIH1cblxuICB2YXIgY29uY2F0U2VxID0gbmV3IEFycmF5U2VxKGl0ZXJzKTtcbiAgaWYgKGlzS2V5ZWRDb2xsZWN0aW9uKSB7XG4gICAgY29uY2F0U2VxID0gY29uY2F0U2VxLnRvS2V5ZWRTZXEoKTtcbiAgfSBlbHNlIGlmICghaXNJbmRleGVkKGNvbGxlY3Rpb24pKSB7XG4gICAgY29uY2F0U2VxID0gY29uY2F0U2VxLnRvU2V0U2VxKCk7XG4gIH1cbiAgY29uY2F0U2VxID0gY29uY2F0U2VxLmZsYXR0ZW4odHJ1ZSk7XG4gIGNvbmNhdFNlcS5zaXplID0gaXRlcnMucmVkdWNlKGZ1bmN0aW9uIChzdW0sIHNlcSkge1xuICAgIGlmIChzdW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHNpemUgPSBzZXEuc2l6ZTtcbiAgICAgIGlmIChzaXplICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHN1bSArIHNpemU7XG4gICAgICB9XG4gICAgfVxuICB9LCAwKTtcbiAgcmV0dXJuIGNvbmNhdFNlcTtcbn1cblxuZnVuY3Rpb24gZmxhdHRlbkZhY3RvcnkoY29sbGVjdGlvbiwgZGVwdGgsIHVzZUtleXMpIHtcbiAgdmFyIGZsYXRTZXF1ZW5jZSA9IG1ha2VTZXF1ZW5jZShjb2xsZWN0aW9uKTtcbiAgZmxhdFNlcXVlbmNlLl9faXRlcmF0ZVVuY2FjaGVkID0gZnVuY3Rpb24oZm4sIHJldmVyc2UpIHtcbiAgICBpZiAocmV2ZXJzZSkge1xuICAgICAgcmV0dXJuIHRoaXMuY2FjaGVSZXN1bHQoKS5fX2l0ZXJhdGUoZm4sIHJldmVyc2UpO1xuICAgIH1cbiAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgdmFyIHN0b3BwZWQgPSBmYWxzZTtcbiAgICBmdW5jdGlvbiBmbGF0RGVlcChpdGVyLCBjdXJyZW50RGVwdGgpIHtcbiAgICAgIGl0ZXIuX19pdGVyYXRlKGZ1bmN0aW9uICh2LCBrKSB7XG4gICAgICAgIGlmICgoIWRlcHRoIHx8IGN1cnJlbnREZXB0aCA8IGRlcHRoKSAmJiBpc0NvbGxlY3Rpb24odikpIHtcbiAgICAgICAgICBmbGF0RGVlcCh2LCBjdXJyZW50RGVwdGggKyAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVyYXRpb25zKys7XG4gICAgICAgICAgaWYgKGZuKHYsIHVzZUtleXMgPyBrIDogaXRlcmF0aW9ucyAtIDEsIGZsYXRTZXF1ZW5jZSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBzdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICFzdG9wcGVkO1xuICAgICAgfSwgcmV2ZXJzZSk7XG4gICAgfVxuICAgIGZsYXREZWVwKGNvbGxlY3Rpb24sIDApO1xuICAgIHJldHVybiBpdGVyYXRpb25zO1xuICB9O1xuICBmbGF0U2VxdWVuY2UuX19pdGVyYXRvclVuY2FjaGVkID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge1xuICAgIGlmIChyZXZlcnNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYWNoZVJlc3VsdCgpLl9faXRlcmF0b3IodHlwZSwgcmV2ZXJzZSk7XG4gICAgfVxuICAgIHZhciBpdGVyYXRvciA9IGNvbGxlY3Rpb24uX19pdGVyYXRvcih0eXBlLCByZXZlcnNlKTtcbiAgICB2YXIgc3RhY2sgPSBbXTtcbiAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgcmV0dXJuIG5ldyBJdGVyYXRvcihmdW5jdGlvbiAoKSB7XG4gICAgICB3aGlsZSAoaXRlcmF0b3IpIHtcbiAgICAgICAgdmFyIHN0ZXAgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgIGlmIChzdGVwLmRvbmUgIT09IGZhbHNlKSB7XG4gICAgICAgICAgaXRlcmF0b3IgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdiA9IHN0ZXAudmFsdWU7XG4gICAgICAgIGlmICh0eXBlID09PSBJVEVSQVRFX0VOVFJJRVMpIHtcbiAgICAgICAgICB2ID0gdlsxXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKCFkZXB0aCB8fCBzdGFjay5sZW5ndGggPCBkZXB0aCkgJiYgaXNDb2xsZWN0aW9uKHYpKSB7XG4gICAgICAgICAgc3RhY2sucHVzaChpdGVyYXRvcik7XG4gICAgICAgICAgaXRlcmF0b3IgPSB2Ll9faXRlcmF0b3IodHlwZSwgcmV2ZXJzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHVzZUtleXMgPyBzdGVwIDogaXRlcmF0b3JWYWx1ZSh0eXBlLCBpdGVyYXRpb25zKyssIHYsIHN0ZXApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gaXRlcmF0b3JEb25lKCk7XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiBmbGF0U2VxdWVuY2U7XG59XG5cbmZ1bmN0aW9uIGZsYXRNYXBGYWN0b3J5KGNvbGxlY3Rpb24sIG1hcHBlciwgY29udGV4dCkge1xuICB2YXIgY29lcmNlID0gY29sbGVjdGlvbkNsYXNzKGNvbGxlY3Rpb24pO1xuICByZXR1cm4gY29sbGVjdGlvblxuICAgIC50b1NlcSgpXG4gICAgLm1hcChmdW5jdGlvbiAodiwgaykgeyByZXR1cm4gY29lcmNlKG1hcHBlci5jYWxsKGNvbnRleHQsIHYsIGssIGNvbGxlY3Rpb24pKTsgfSlcbiAgICAuZmxhdHRlbih0cnVlKTtcbn1cblxuZnVuY3Rpb24gaW50ZXJwb3NlRmFjdG9yeShjb2xsZWN0aW9uLCBzZXBhcmF0b3IpIHtcbiAgdmFyIGludGVycG9zZWRTZXF1ZW5jZSA9IG1ha2VTZXF1ZW5jZShjb2xsZWN0aW9uKTtcbiAgaW50ZXJwb3NlZFNlcXVlbmNlLnNpemUgPSBjb2xsZWN0aW9uLnNpemUgJiYgY29sbGVjdGlvbi5zaXplICogMiAtIDE7XG4gIGludGVycG9zZWRTZXF1ZW5jZS5fX2l0ZXJhdGVVbmNhY2hlZCA9IGZ1bmN0aW9uKGZuLCByZXZlcnNlKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgY29sbGVjdGlvbi5fX2l0ZXJhdGUoXG4gICAgICBmdW5jdGlvbiAodikgeyByZXR1cm4gKCFpdGVyYXRpb25zIHx8IGZuKHNlcGFyYXRvciwgaXRlcmF0aW9ucysrLCB0aGlzJDEpICE9PSBmYWxzZSkgJiZcbiAgICAgICAgZm4odiwgaXRlcmF0aW9ucysrLCB0aGlzJDEpICE9PSBmYWxzZTsgfSxcbiAgICAgIHJldmVyc2VcbiAgICApO1xuICAgIHJldHVybiBpdGVyYXRpb25zO1xuICB9O1xuICBpbnRlcnBvc2VkU2VxdWVuY2UuX19pdGVyYXRvclVuY2FjaGVkID0gZnVuY3Rpb24odHlwZSwgcmV2ZXJzZSkge1xuICAgIHZhciBpdGVyYXRvciA9IGNvbGxlY3Rpb24uX19pdGVyYXRvcihJVEVSQVRFX1ZBTFVFUywgcmV2ZXJzZSk7XG4gICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgIHZhciBzdGVwO1xuICAgIHJldHVybiBuZXcgSXRlcmF0b3IoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzdGVwIHx8IGl0ZXJhdGlvbnMgJSAyKSB7XG4gICAgICAgIHN0ZXAgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgIGlmIChzdGVwLmRvbmUpIHtcbiAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZXJhdGlvbnMgJSAyXG4gICAgICAgID8gaXRlcmF0b3JWYWx1ZSh0eXBlLCBpdGVyYXRpb25zKyssIHNlcGFyYXRvcilcbiAgICAgICAgOiBpdGVyYXRvclZhbHVlKHR5cGUsIGl0ZXJhdGlvbnMrKywgc3RlcC52YWx1ZSwgc3RlcCk7XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiBpbnRlcnBvc2VkU2VxdWVuY2U7XG59XG5cbmZ1bmN0aW9uIHNvcnRGYWN0b3J5KGNvbGxlY3Rpb24sIGNvbXBhcmF0b3IsIG1hcHBlcikge1xuICBpZiAoIWNvbXBhcmF0b3IpIHtcbiAgICBjb21wYXJhdG9yID0gZGVmYXVsdENvbXBhcmF0b3I7XG4gIH1cbiAgdmFyIGlzS2V5ZWRDb2xsZWN0aW9uID0gaXNLZXllZChjb2xsZWN0aW9uKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGVudHJpZXMgPSBjb2xsZWN0aW9uXG4gICAgLnRvU2VxKClcbiAgICAubWFwKGZ1bmN0aW9uICh2LCBrKSB7IHJldHVybiBbaywgdiwgaW5kZXgrKywgbWFwcGVyID8gbWFwcGVyKHYsIGssIGNvbGxlY3Rpb24pIDogdl07IH0pXG4gICAgLnZhbHVlU2VxKClcbiAgICAudG9BcnJheSgpO1xuICBlbnRyaWVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGNvbXBhcmF0b3IoYVszXSwgYlszXSkgfHwgYVsyXSAtIGJbMl07IH0pLmZvckVhY2goXG4gICAgaXNLZXllZENvbGxlY3Rpb25cbiAgICAgID8gZnVuY3Rpb24gKHYsIGkpIHtcbiAgICAgICAgICBlbnRyaWVzW2ldLmxlbmd0aCA9IDI7XG4gICAgICAgIH1cbiAgICAgIDogZnVuY3Rpb24gKHYsIGkpIHtcbiAgICAgICAgICBlbnRyaWVzW2ldID0gdlsxXTtcbiAgICAgICAgfVxuICApO1xuICByZXR1cm4gaXNLZXllZENvbGxlY3Rpb25cbiAgICA/IEtleWVkU2VxKGVudHJpZXMpXG4gICAgOiBpc0luZGV4ZWQoY29sbGVjdGlvbilcbiAgICAgID8gSW5kZXhlZFNlcShlbnRyaWVzKVxuICAgICAgOiBTZXRTZXEoZW50cmllcyk7XG59XG5cbmZ1bmN0aW9uIG1heEZhY3RvcnkoY29sbGVjdGlvbiwgY29tcGFyYXRvciwgbWFwcGVyKSB7XG4gIGlmICghY29tcGFyYXRvcikge1xuICAgIGNvbXBhcmF0b3IgPSBkZWZhdWx0Q29tcGFyYXRvcjtcbiAgfVxuICBpZiAobWFwcGVyKSB7XG4gICAgdmFyIGVudHJ5ID0gY29sbGVjdGlvblxuICAgICAgLnRvU2VxKClcbiAgICAgIC5tYXAoZnVuY3Rpb24gKHYsIGspIHsgcmV0dXJuIFt2LCBtYXBwZXIodiwgaywgY29sbGVjdGlvbildOyB9KVxuICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gKG1heENvbXBhcmUoY29tcGFyYXRvciwgYVsxXSwgYlsxXSkgPyBiIDogYSk7IH0pO1xuICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeVswXTtcbiAgfVxuICByZXR1cm4gY29sbGVjdGlvbi5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIChtYXhDb21wYXJlKGNvbXBhcmF0b3IsIGEsIGIpID8gYiA6IGEpOyB9KTtcbn1cblxuZnVuY3Rpb24gbWF4Q29tcGFyZShjb21wYXJhdG9yLCBhLCBiKSB7XG4gIHZhciBjb21wID0gY29tcGFyYXRvcihiLCBhKTtcbiAgLy8gYiBpcyBjb25zaWRlcmVkIHRoZSBuZXcgbWF4IGlmIHRoZSBjb21wYXJhdG9yIGRlY2xhcmVzIHRoZW0gZXF1YWwsIGJ1dFxuICAvLyB0aGV5IGFyZSBub3QgZXF1YWwgYW5kIGIgaXMgaW4gZmFjdCBhIG51bGxpc2ggdmFsdWUuXG4gIHJldHVybiAoXG4gICAgKGNvbXAgPT09IDAgJiYgYiAhPT0gYSAmJiAoYiA9PT0gdW5kZWZpbmVkIHx8IGIgPT09IG51bGwgfHwgYiAhPT0gYikpIHx8XG4gICAgY29tcCA+IDBcbiAgKTtcbn1cblxuZnVuY3Rpb24gemlwV2l0aEZhY3Rvcnkoa2V5SXRlciwgemlwcGVyLCBpdGVycywgemlwQWxsKSB7XG4gIHZhciB6aXBTZXF1ZW5jZSA9IG1ha2VTZXF1ZW5jZShrZXlJdGVyKTtcbiAgdmFyIHNpemVzID0gbmV3IEFycmF5U2VxKGl0ZXJzKS5tYXAoZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGkuc2l6ZTsgfSk7XG4gIHppcFNlcXVlbmNlLnNpemUgPSB6aXBBbGwgPyBzaXplcy5tYXgoKSA6IHNpemVzLm1pbigpO1xuICAvLyBOb3RlOiB0aGlzIGEgZ2VuZXJpYyBiYXNlIGltcGxlbWVudGF0aW9uIG9mIF9faXRlcmF0ZSBpbiB0ZXJtcyBvZlxuICAvLyBfX2l0ZXJhdG9yIHdoaWNoIG1heSBiZSBtb3JlIGdlbmVyaWNhbGx5IHVzZWZ1bCBpbiB0aGUgZnV0dXJlLlxuICB6aXBTZXF1ZW5jZS5fX2l0ZXJhdGUgPSBmdW5jdGlvbihmbiwgcmV2ZXJzZSkge1xuICAgIC8qIGdlbmVyaWM6XG4gICAgdmFyIGl0ZXJhdG9yID0gdGhpcy5fX2l0ZXJhdG9yKElURVJBVEVfRU5UUklFUywgcmV2ZXJzZSk7XG4gICAgdmFyIHN0ZXA7XG4gICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgIGl0ZXJhdGlvbnMrKztcbiAgICAgIGlmIChmbihzdGVwLnZhbHVlWzFdLCBzdGVwLnZhbHVlWzBdLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpdGVyYXRpb25zO1xuICAgICovXG4gICAgLy8gaW5kZXhlZDpcbiAgICB2YXIgaXRlcmF0b3IgPSB0aGlzLl9faXRlcmF0b3IoSVRFUkFURV9WQUxVRVMsIHJldmVyc2UpO1xuICAgIHZhciBzdGVwO1xuICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICBpZiAoZm4oc3RlcC52YWx1ZSwgaXRlcmF0aW9ucysrLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpdGVyYXRpb25zO1xuICB9O1xuICB6aXBTZXF1ZW5jZS5fX2l0ZXJhdG9yVW5jYWNoZWQgPSBmdW5jdGlvbih0eXBlLCByZXZlcnNlKSB7XG4gICAgdmFyIGl0ZXJhdG9ycyA9IGl0ZXJzLm1hcChcbiAgICAgIGZ1bmN0aW9uIChpKSB7IHJldHVybiAoKGkgPSBDb2xsZWN0aW9uKGkpKSwgZ2V0SXRlcmF0b3IocmV2ZXJzZSA/IGkucmV2ZXJzZSgpIDogaSkpOyB9XG4gICAgKTtcbiAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgdmFyIGlzRG9uZSA9IGZhbHNlO1xuICAgIHJldHVybiBuZXcgSXRlcmF0b3IoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN0ZXBzO1xuICAgICAgaWYgKCFpc0RvbmUpIHtcbiAgICAgICAgc3RlcHMgPSBpdGVyYXRvcnMubWFwKGZ1bmN0aW9uIChpKSB7IHJldHVybiBpLm5leHQoKTsgfSk7XG4gICAgICAgIGlzRG9uZSA9IHppcEFsbCA/IHN0ZXBzLmV2ZXJ5KGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLmRvbmU7IH0pIDogc3RlcHMuc29tZShmdW5jdGlvbiAocykgeyByZXR1cm4gcy5kb25lOyB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0RvbmUpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yRG9uZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGl0ZXJhdG9yVmFsdWUoXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGl0ZXJhdGlvbnMrKyxcbiAgICAgICAgemlwcGVyLmFwcGx5KG51bGwsIHN0ZXBzLm1hcChmdW5jdGlvbiAocykgeyByZXR1cm4gcy52YWx1ZTsgfSkpXG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuICByZXR1cm4gemlwU2VxdWVuY2U7XG59XG5cbi8vICNwcmFnbWEgSGVscGVyIEZ1bmN0aW9uc1xuXG5mdW5jdGlvbiByZWlmeShpdGVyLCBzZXEpIHtcbiAgcmV0dXJuIGl0ZXIgPT09IHNlcSA/IGl0ZXIgOiBpc1NlcShpdGVyKSA/IHNlcSA6IGl0ZXIuY29uc3RydWN0b3Ioc2VxKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVFbnRyeShlbnRyeSkge1xuICBpZiAoZW50cnkgIT09IE9iamVjdChlbnRyeSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBbSywgVl0gdHVwbGU6ICcgKyBlbnRyeSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29sbGVjdGlvbkNsYXNzKGNvbGxlY3Rpb24pIHtcbiAgcmV0dXJuIGlzS2V5ZWQoY29sbGVjdGlvbilcbiAgICA/IEtleWVkQ29sbGVjdGlvblxuICAgIDogaXNJbmRleGVkKGNvbGxlY3Rpb24pXG4gICAgICA/IEluZGV4ZWRDb2xsZWN0aW9uXG4gICAgICA6IFNldENvbGxlY3Rpb247XG59XG5cbmZ1bmN0aW9uIG1ha2VTZXF1ZW5jZShjb2xsZWN0aW9uKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKFxuICAgIChpc0tleWVkKGNvbGxlY3Rpb24pXG4gICAgICA/IEtleWVkU2VxXG4gICAgICA6IGlzSW5kZXhlZChjb2xsZWN0aW9uKVxuICAgICAgICA/IEluZGV4ZWRTZXFcbiAgICAgICAgOiBTZXRTZXFcbiAgICApLnByb3RvdHlwZVxuICApO1xufVxuXG5mdW5jdGlvbiBjYWNoZVJlc3VsdFRocm91Z2goKSB7XG4gIGlmICh0aGlzLl9pdGVyLmNhY2hlUmVzdWx0KSB7XG4gICAgdGhpcy5faXRlci5jYWNoZVJlc3VsdCgpO1xuICAgIHRoaXMuc2l6ZSA9IHRoaXMuX2l0ZXIuc2l6ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICByZXR1cm4gU2VxLnByb3RvdHlwZS5jYWNoZVJlc3VsdC5jYWxsKHRoaXMpO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0Q29tcGFyYXRvcihhLCBiKSB7XG4gIGlmIChhID09PSB1bmRlZmluZWQgJiYgYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBpZiAoYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICBpZiAoYiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgcmV0dXJuIGEgPiBiID8gMSA6IGEgPCBiID8gLTEgOiAwO1xufVxuXG4vLyBodHRwOi8vanNwZXJmLmNvbS9jb3B5LWFycmF5LWlubGluZVxuZnVuY3Rpb24gYXJyQ29weShhcnIsIG9mZnNldCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcbiAgdmFyIGxlbiA9IE1hdGgubWF4KDAsIGFyci5sZW5ndGggLSBvZmZzZXQpO1xuICB2YXIgbmV3QXJyID0gbmV3IEFycmF5KGxlbik7XG4gIGZvciAodmFyIGlpID0gMDsgaWkgPCBsZW47IGlpKyspIHtcbiAgICBuZXdBcnJbaWldID0gYXJyW2lpICsgb2Zmc2V0XTtcbiAgfVxuICByZXR1cm4gbmV3QXJyO1xufVxuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBlcnJvcikge1xuICBpZiAoIWNvbmRpdGlvbikgeyB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpOyB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydE5vdEluZmluaXRlKHNpemUpIHtcbiAgaW52YXJpYW50KFxuICAgIHNpemUgIT09IEluZmluaXR5LFxuICAgICdDYW5ub3QgcGVyZm9ybSB0aGlzIGFjdGlvbiB3aXRoIGFuIGluZmluaXRlIHNpemUuJ1xuICApO1xufVxuXG5mdW5jdGlvbiBjb2VyY2VLZXlQYXRoKGtleVBhdGgpIHtcbiAgaWYgKGlzQXJyYXlMaWtlKGtleVBhdGgpICYmIHR5cGVvZiBrZXlQYXRoICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBrZXlQYXRoO1xuICB9XG4gIGlmIChpc09yZGVyZWQoa2V5UGF0aCkpIHtcbiAgICByZXR1cm4ga2V5UGF0aC50b0FycmF5KCk7XG4gIH1cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAnSW52YWxpZCBrZXlQYXRoOiBleHBlY3RlZCBPcmRlcmVkIENvbGxlY3Rpb24gb3IgQXJyYXk6ICcgKyBrZXlQYXRoXG4gICk7XG59XG5cbmZ1bmN0aW9uIGlzUGxhaW5PYmoodmFsdWUpIHtcbiAgcmV0dXJuIChcbiAgICB2YWx1ZSAmJlxuICAgICh0eXBlb2YgdmFsdWUuY29uc3RydWN0b3IgIT09ICdmdW5jdGlvbicgfHxcbiAgICAgIHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdPYmplY3QnKVxuICApO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYSBwb3RlbnRpYWxseS1wZXJzaXN0ZW50IGRhdGEgc3RydWN0dXJlLCBlaXRoZXJcbiAqIHByb3ZpZGVkIGJ5IEltbXV0YWJsZS5qcyBvciBhIHBsYWluIEFycmF5IG9yIE9iamVjdC5cbiAqL1xuZnVuY3Rpb24gaXNEYXRhU3RydWN0dXJlKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuICAgIChpc0ltbXV0YWJsZSh2YWx1ZSkgfHwgQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgaXNQbGFpbk9iaih2YWx1ZSkpXG4gICk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYSB2YWx1ZSB0byBhIHN0cmluZywgYWRkaW5nIHF1b3RlcyBpZiBhIHN0cmluZyB3YXMgcHJvdmlkZWQuXG4gKi9cbmZ1bmN0aW9uIHF1b3RlU3RyaW5nKHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiBTdHJpbmcodmFsdWUpO1xuICB9IGNhdGNoIChfaWdub3JlRXJyb3IpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhcyhjb2xsZWN0aW9uLCBrZXkpIHtcbiAgcmV0dXJuIGlzSW1tdXRhYmxlKGNvbGxlY3Rpb24pXG4gICAgPyBjb2xsZWN0aW9uLmhhcyhrZXkpXG4gICAgOiBpc0RhdGFTdHJ1Y3R1cmUoY29sbGVjdGlvbikgJiYgaGFzT3duUHJvcGVydHkuY2FsbChjb2xsZWN0aW9uLCBrZXkpO1xufVxuXG5mdW5jdGlvbiBnZXQoY29sbGVjdGlvbiwga2V5LCBub3RTZXRWYWx1ZSkge1xuICByZXR1cm4gaXNJbW11dGFibGUoY29sbGVjdGlvbilcbiAgICA/IGNvbGxlY3Rpb24uZ2V0KGtleSwgbm90U2V0VmFsdWUpXG4gICAgOiAhaGFzKGNvbGxlY3Rpb24sIGtleSlcbiAgICAgID8gbm90U2V0VmFsdWVcbiAgICAgIDogdHlwZW9mIGNvbGxlY3Rpb24uZ2V0ID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gY29sbGVjdGlvbi5nZXQoa2V5KVxuICAgICAgICA6IGNvbGxlY3Rpb25ba2V5XTtcbn1cblxuZnVuY3Rpb24gc2hhbGxvd0NvcHkoZnJvbSkge1xuICBpZiAoQXJyYXkuaXNBcnJheShmcm9tKSkge1xuICAgIHJldHVybiBhcnJDb3B5KGZyb20pO1xuICB9XG4gIHZhciB0byA9IHt9O1xuICBmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcbiAgICAgIHRvW2tleV0gPSBmcm9tW2tleV07XG4gICAgfVxuICB9XG4gIHJldHVybiB0bztcbn1cblxuZnVuY3Rpb24gcmVtb3ZlKGNvbGxlY3Rpb24sIGtleSkge1xuICBpZiAoIWlzRGF0YVN0cnVjdHVyZShjb2xsZWN0aW9uKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAnQ2Fubm90IHVwZGF0ZSBub24tZGF0YS1zdHJ1Y3R1cmUgdmFsdWU6ICcgKyBjb2xsZWN0aW9uXG4gICAgKTtcbiAgfVxuICBpZiAoaXNJbW11dGFibGUoY29sbGVjdGlvbikpIHtcbiAgICBpZiAoIWNvbGxlY3Rpb24ucmVtb3ZlKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAnQ2Fubm90IHVwZGF0ZSBpbW11dGFibGUgdmFsdWUgd2l0aG91dCAucmVtb3ZlKCkgbWV0aG9kOiAnICsgY29sbGVjdGlvblxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbGxlY3Rpb24ucmVtb3ZlKGtleSk7XG4gIH1cbiAgaWYgKCFoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbGxlY3Rpb24sIGtleSkpIHtcbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgfVxuICB2YXIgY29sbGVjdGlvbkNvcHkgPSBzaGFsbG93Q29weShjb2xsZWN0aW9uKTtcbiAgaWYgKEFycmF5LmlzQXJyYXkoY29sbGVjdGlvbkNvcHkpKSB7XG4gICAgY29sbGVjdGlvbkNvcHkuc3BsaWNlKGtleSwgMSk7XG4gIH0gZWxzZSB7XG4gICAgZGVsZXRlIGNvbGxlY3Rpb25Db3B5W2tleV07XG4gIH1cbiAgcmV0dXJuIGNvbGxlY3Rpb25Db3B5O1xufVxuXG5mdW5jdGlvbiBzZXQoY29sbGVjdGlvbiwga2V5LCB2YWx1ZSkge1xuICBpZiAoIWlzRGF0YVN0cnVjdHVyZShjb2xsZWN0aW9uKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAnQ2Fubm90IHVwZGF0ZSBub24tZGF0YS1zdHJ1Y3R1cmUgdmFsdWU6ICcgKyBjb2xsZWN0aW9uXG4gICAgKTtcbiAgfVxuICBpZiAoaXNJbW11dGFibGUoY29sbGVjdGlvbikpIHtcbiAgICBpZiAoIWNvbGxlY3Rpb24uc2V0KSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAnQ2Fubm90IHVwZGF0ZSBpbW11dGFibGUgdmFsdWUgd2l0aG91dCAuc2V0KCkgbWV0aG9kOiAnICsgY29sbGVjdGlvblxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbGxlY3Rpb24uc2V0KGtleSwgdmFsdWUpO1xuICB9XG4gIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbGxlY3Rpb24sIGtleSkgJiYgdmFsdWUgPT09IGNvbGxlY3Rpb25ba2V5XSkge1xuICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICB9XG4gIHZhciBjb2xsZWN0aW9uQ29weSA9IHNoYWxsb3dDb3B5KGNvbGxlY3Rpb24pO1xuICBjb2xsZWN0aW9uQ29weVtrZXldID0gdmFsdWU7XG4gIHJldHVybiBjb2xsZWN0aW9uQ29weTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlSW4oY29sbGVjdGlvbiwga2V5UGF0aCwgbm90U2V0VmFsdWUsIHVwZGF0ZXIpIHtcbiAgaWYgKCF1cGRhdGVyKSB7XG4gICAgdXBkYXRlciA9IG5vdFNldFZhbHVlO1xuICAgIG5vdFNldFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG4gIHZhciB1cGRhdGVkVmFsdWUgPSB1cGRhdGVJbkRlZXBseShcbiAgICBpc0ltbXV0YWJsZShjb2xsZWN0aW9uKSxcbiAgICBjb2xsZWN0aW9uLFxuICAgIGNvZXJjZUtleVBhdGgoa2V5UGF0aCksXG4gICAgMCxcbiAgICBub3RTZXRWYWx1ZSxcbiAgICB1cGRhdGVyXG4gICk7XG4gIHJldHVybiB1cGRhdGVkVmFsdWUgPT09IE5PVF9TRVQgPyBub3RTZXRWYWx1ZSA6IHVwZGF0ZWRWYWx1ZTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlSW5EZWVwbHkoXG4gIGluSW1tdXRhYmxlLFxuICBleGlzdGluZyxcbiAga2V5UGF0aCxcbiAgaSxcbiAgbm90U2V0VmFsdWUsXG4gIHVwZGF0ZXJcbikge1xuICB2YXIgd2FzTm90U2V0ID0gZXhpc3RpbmcgPT09IE5PVF9TRVQ7XG4gIGlmIChpID09PSBrZXlQYXRoLmxlbmd0aCkge1xuICAgIHZhciBleGlzdGluZ1ZhbHVlID0gd2FzTm90U2V0ID8gbm90U2V0VmFsdWUgOiBleGlzdGluZztcbiAgICB2YXIgbmV3VmFsdWUgPSB1cGRhdGVyKGV4aXN0aW5nVmFsdWUpO1xuICAgIHJldHVybiBuZXdWYWx1ZSA9PT0gZXhpc3RpbmdWYWx1ZSA/IGV4aXN0aW5nIDogbmV3VmFsdWU7XG4gIH1cbiAgaWYgKCF3YXNOb3RTZXQgJiYgIWlzRGF0YVN0cnVjdHVyZShleGlzdGluZykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgJ0Nhbm5vdCB1cGRhdGUgd2l0aGluIG5vbi1kYXRhLXN0cnVjdHVyZSB2YWx1ZSBpbiBwYXRoIFsnICtcbiAgICAgICAga2V5UGF0aC5zbGljZSgwLCBpKS5tYXAocXVvdGVTdHJpbmcpICtcbiAgICAgICAgJ106ICcgK1xuICAgICAgICBleGlzdGluZ1xuICAgICk7XG4gIH1cbiAgdmFyIGtleSA9IGtleVBhdGhbaV07XG4gIHZhciBuZXh0RXhpc3RpbmcgPSB3YXNOb3RTZXQgPyBOT1RfU0VUIDogZ2V0KGV4aXN0aW5nLCBrZXksIE5PVF9TRVQpO1xuICB2YXIgbmV4dFVwZGF0ZWQgPSB1cGRhdGVJbkRlZXBseShcbiAgICBuZXh0RXhpc3RpbmcgPT09IE5PVF9TRVQgPyBpbkltbXV0YWJsZSA6IGlzSW1tdXRhYmxlKG5leHRFeGlzdGluZyksXG4gICAgbmV4dEV4aXN0aW5nLFxuICAgIGtleVBhdGgsXG4gICAgaSArIDEsXG4gICAgbm90U2V0VmFsdWUsXG4gICAgdXBkYXRlclxuICApO1xuICByZXR1cm4gbmV4dFVwZGF0ZWQgPT09IG5leHRFeGlzdGluZ1xuICAgID8gZXhpc3RpbmdcbiAgICA6IG5leHRVcGRhdGVkID09PSBOT1RfU0VUXG4gICAgICA/IHJlbW92ZShleGlzdGluZywga2V5KVxuICAgICAgOiBzZXQoXG4gICAgICAgICAgd2FzTm90U2V0ID8gKGluSW1tdXRhYmxlID8gZW1wdHlNYXAoKSA6IHt9KSA6IGV4aXN0aW5nLFxuICAgICAgICAgIGtleSxcbiAgICAgICAgICBuZXh0VXBkYXRlZFxuICAgICAgICApO1xufVxuXG5mdW5jdGlvbiBzZXRJbihjb2xsZWN0aW9uLCBrZXlQYXRoLCB2YWx1ZSkge1xuICByZXR1cm4gdXBkYXRlSW4oY29sbGVjdGlvbiwga2V5UGF0aCwgTk9UX1NFVCwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdmFsdWU7IH0pO1xufVxuXG5mdW5jdGlvbiBzZXRJbiQxKGtleVBhdGgsIHYpIHtcbiAgcmV0dXJuIHNldEluKHRoaXMsIGtleVBhdGgsIHYpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVJbihjb2xsZWN0aW9uLCBrZXlQYXRoKSB7XG4gIHJldHVybiB1cGRhdGVJbihjb2xsZWN0aW9uLCBrZXlQYXRoLCBmdW5jdGlvbiAoKSB7IHJldHVybiBOT1RfU0VUOyB9KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlSW4oa2V5UGF0aCkge1xuICByZXR1cm4gcmVtb3ZlSW4odGhpcywga2V5UGF0aCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZShjb2xsZWN0aW9uLCBrZXksIG5vdFNldFZhbHVlLCB1cGRhdGVyKSB7XG4gIHJldHVybiB1cGRhdGVJbihjb2xsZWN0aW9uLCBba2V5XSwgbm90U2V0VmFsdWUsIHVwZGF0ZXIpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGUkMShrZXksIG5vdFNldFZhbHVlLCB1cGRhdGVyKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxXG4gICAgPyBrZXkodGhpcylcbiAgICA6IHVwZGF0ZSh0aGlzLCBrZXksIG5vdFNldFZhbHVlLCB1cGRhdGVyKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlSW4kMShrZXlQYXRoLCBub3RTZXRWYWx1ZSwgdXBkYXRlcikge1xuICByZXR1cm4gdXBkYXRlSW4odGhpcywga2V5UGF0aCwgbm90U2V0VmFsdWUsIHVwZGF0ZXIpO1xufVxuXG5mdW5jdGlvbiBtZXJnZSgpIHtcbiAgdmFyIGl0ZXJzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHdoaWxlICggbGVuLS0gKSBpdGVyc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gIHJldHVybiBtZXJnZUludG9LZXllZFdpdGgodGhpcywgaXRlcnMpO1xufVxuXG5mdW5jdGlvbiBtZXJnZVdpdGgobWVyZ2VyKSB7XG4gIHZhciBpdGVycyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcbiAgd2hpbGUgKCBsZW4tLSA+IDAgKSBpdGVyc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiArIDEgXTtcblxuICBpZiAodHlwZW9mIG1lcmdlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbWVyZ2VyIGZ1bmN0aW9uOiAnICsgbWVyZ2VyKTtcbiAgfVxuICByZXR1cm4gbWVyZ2VJbnRvS2V5ZWRXaXRoKHRoaXMsIGl0ZXJzLCBtZXJnZXIpO1xufVxuXG5mdW5jdGlvbiBtZXJnZUludG9LZXllZFdpdGgoY29sbGVjdGlvbiwgY29sbGVjdGlvbnMsIG1lcmdlcikge1xuICB2YXIgaXRlcnMgPSBbXTtcbiAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IGNvbGxlY3Rpb25zLmxlbmd0aDsgaWkrKykge1xuICAgIHZhciBjb2xsZWN0aW9uJDEgPSBLZXllZENvbGxlY3Rpb24oY29sbGVjdGlvbnNbaWldKTtcbiAgICBpZiAoY29sbGVjdGlvbiQxLnNpemUgIT09IDApIHtcbiAgICAgIGl0ZXJzLnB1c2goY29sbGVjdGlvbiQxKTtcbiAgICB9XG4gIH1cbiAgaWYgKGl0ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICB9XG4gIGlmIChcbiAgICBjb2xsZWN0aW9uLnRvU2VxKCkuc2l6ZSA9PT0gMCAmJlxuICAgICFjb2xsZWN0aW9uLl9fb3duZXJJRCAmJlxuICAgIGl0ZXJzLmxlbmd0aCA9PT0gMVxuICApIHtcbiAgICByZXR1cm4gY29sbGVjdGlvbi5jb25zdHJ1Y3RvcihpdGVyc1swXSk7XG4gIH1cbiAgcmV0dXJuIGNvbGxlY3Rpb24ud2l0aE11dGF0aW9ucyhmdW5jdGlvbiAoY29sbGVjdGlvbikge1xuICAgIHZhciBtZXJnZUludG9Db2xsZWN0aW9uID0gbWVyZ2VyXG4gICAgICA/IGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgdXBkYXRlKFxuICAgICAgICAgICAgY29sbGVjdGlvbixcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIE5PVF9TRVQsXG4gICAgICAgICAgICBmdW5jdGlvbiAob2xkVmFsKSB7IHJldHVybiAob2xkVmFsID09PSBOT1RfU0VUID8gdmFsdWUgOiBtZXJnZXIob2xkVmFsLCB2YWx1ZSwga2V5KSk7IH1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICA6IGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgY29sbGVjdGlvbi5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH07XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IGl0ZXJzLmxlbmd0aDsgaWkrKykge1xuICAgICAgaXRlcnNbaWldLmZvckVhY2gobWVyZ2VJbnRvQ29sbGVjdGlvbik7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gbWVyZ2UkMShjb2xsZWN0aW9uKSB7XG4gIHZhciBzb3VyY2VzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuICB3aGlsZSAoIGxlbi0tID4gMCApIHNvdXJjZXNbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gKyAxIF07XG5cbiAgcmV0dXJuIG1lcmdlV2l0aFNvdXJjZXMoY29sbGVjdGlvbiwgc291cmNlcyk7XG59XG5cbmZ1bmN0aW9uIG1lcmdlV2l0aCQxKG1lcmdlciwgY29sbGVjdGlvbikge1xuICB2YXIgc291cmNlcyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcbiAgd2hpbGUgKCBsZW4tLSA+IDAgKSBzb3VyY2VzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMiBdO1xuXG4gIHJldHVybiBtZXJnZVdpdGhTb3VyY2VzKGNvbGxlY3Rpb24sIHNvdXJjZXMsIG1lcmdlcik7XG59XG5cbmZ1bmN0aW9uIG1lcmdlRGVlcChjb2xsZWN0aW9uKSB7XG4gIHZhciBzb3VyY2VzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuICB3aGlsZSAoIGxlbi0tID4gMCApIHNvdXJjZXNbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gKyAxIF07XG5cbiAgcmV0dXJuIG1lcmdlRGVlcFdpdGhTb3VyY2VzKGNvbGxlY3Rpb24sIHNvdXJjZXMpO1xufVxuXG5mdW5jdGlvbiBtZXJnZURlZXBXaXRoKG1lcmdlciwgY29sbGVjdGlvbikge1xuICB2YXIgc291cmNlcyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcbiAgd2hpbGUgKCBsZW4tLSA+IDAgKSBzb3VyY2VzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMiBdO1xuXG4gIHJldHVybiBtZXJnZURlZXBXaXRoU291cmNlcyhjb2xsZWN0aW9uLCBzb3VyY2VzLCBtZXJnZXIpO1xufVxuXG5mdW5jdGlvbiBtZXJnZURlZXBXaXRoU291cmNlcyhjb2xsZWN0aW9uLCBzb3VyY2VzLCBtZXJnZXIpIHtcbiAgcmV0dXJuIG1lcmdlV2l0aFNvdXJjZXMoY29sbGVjdGlvbiwgc291cmNlcywgZGVlcE1lcmdlcldpdGgobWVyZ2VyKSk7XG59XG5cbmZ1bmN0aW9uIG1lcmdlV2l0aFNvdXJjZXMoY29sbGVjdGlvbiwgc291cmNlcywgbWVyZ2VyKSB7XG4gIGlmICghaXNEYXRhU3RydWN0dXJlKGNvbGxlY3Rpb24pKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICdDYW5ub3QgbWVyZ2UgaW50byBub24tZGF0YS1zdHJ1Y3R1cmUgdmFsdWU6ICcgKyBjb2xsZWN0aW9uXG4gICAgKTtcbiAgfVxuICBpZiAoaXNJbW11dGFibGUoY29sbGVjdGlvbikpIHtcbiAgICByZXR1cm4gdHlwZW9mIG1lcmdlciA9PT0gJ2Z1bmN0aW9uJyAmJiBjb2xsZWN0aW9uLm1lcmdlV2l0aFxuICAgICAgPyBjb2xsZWN0aW9uLm1lcmdlV2l0aC5hcHBseShjb2xsZWN0aW9uLCBbIG1lcmdlciBdLmNvbmNhdCggc291cmNlcyApKVxuICAgICAgOiBjb2xsZWN0aW9uLm1lcmdlXG4gICAgICAgID8gY29sbGVjdGlvbi5tZXJnZS5hcHBseShjb2xsZWN0aW9uLCBzb3VyY2VzKVxuICAgICAgICA6IGNvbGxlY3Rpb24uY29uY2F0LmFwcGx5KGNvbGxlY3Rpb24sIHNvdXJjZXMpO1xuICB9XG4gIHZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShjb2xsZWN0aW9uKTtcbiAgdmFyIG1lcmdlZCA9IGNvbGxlY3Rpb247XG4gIHZhciBDb2xsZWN0aW9uJCQxID0gaXNBcnJheSA/IEluZGV4ZWRDb2xsZWN0aW9uIDogS2V5ZWRDb2xsZWN0aW9uO1xuICB2YXIgbWVyZ2VJdGVtID0gaXNBcnJheVxuICAgID8gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIC8vIENvcHkgb24gd3JpdGVcbiAgICAgICAgaWYgKG1lcmdlZCA9PT0gY29sbGVjdGlvbikge1xuICAgICAgICAgIG1lcmdlZCA9IHNoYWxsb3dDb3B5KG1lcmdlZCk7XG4gICAgICAgIH1cbiAgICAgICAgbWVyZ2VkLnB1c2godmFsdWUpO1xuICAgICAgfVxuICAgIDogZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgdmFyIGhhc1ZhbCA9IGhhc093blByb3BlcnR5LmNhbGwobWVyZ2VkLCBrZXkpO1xuICAgICAgICB2YXIgbmV4dFZhbCA9XG4gICAgICAgICAgaGFzVmFsICYmIG1lcmdlciA/IG1lcmdlcihtZXJnZWRba2V5XSwgdmFsdWUsIGtleSkgOiB2YWx1ZTtcbiAgICAgICAgaWYgKCFoYXNWYWwgfHwgbmV4dFZhbCAhPT0gbWVyZ2VkW2tleV0pIHtcbiAgICAgICAgICAvLyBDb3B5IG9uIHdyaXRlXG4gICAgICAgICAgaWYgKG1lcmdlZCA9PT0gY29sbGVjdGlvbikge1xuICAgICAgICAgICAgbWVyZ2VkID0gc2hhbGxvd0NvcHkobWVyZ2VkKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbWVyZ2VkW2tleV0gPSBuZXh0VmFsO1xuICAgICAgICB9XG4gICAgICB9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHNvdXJjZXMubGVuZ3RoOyBpKyspIHtcbiAgICBDb2xsZWN0aW9uJCQxKHNvdXJjZXNbaV0pLmZvckVhY2gobWVyZ2VJdGVtKTtcbiAgfVxuICByZXR1cm4gbWVyZ2VkO1xufVxuXG5mdW5jdGlvbiBkZWVwTWVyZ2VyV2l0aChtZXJnZXIpIHtcbiAgZnVuY3Rpb24gZGVlcE1lcmdlcihvbGRWYWx1ZSwgbmV3VmFsdWUsIGtleSkge1xuICAgIHJldHVybiBpc0RhdGFTdHJ1Y3R1cmUob2xkVmFsdWUpICYmIGlzRGF0YVN0cnVjdHVyZShuZXdWYWx1ZSlcbiAgICAgID8gbWVyZ2VXaXRoU291cmNlcyhvbGRWYWx1ZSwgW25ld1ZhbHVlXSwgZGVlcE1lcmdlcilcbiAgICAgIDogbWVyZ2VyXG4gICAgICAgID8gbWVyZ2VyKG9sZFZhbHVlLCBuZXdWYWx1ZSwga2V5KVxuICAgICAgICA6IG5ld1ZhbHVlO1xuICB9XG4gIHJldHVybiBkZWVwTWVyZ2VyO1xufVxuXG5mdW5jdGlvbiBtZXJnZURlZXAkMSgpIHtcbiAgdmFyIGl0ZXJzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHdoaWxlICggbGVuLS0gKSBpdGVyc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gIHJldHVybiBtZXJnZURlZXBXaXRoU291cmNlcyh0aGlzLCBpdGVycyk7XG59XG5cbmZ1bmN0aW9uIG1lcmdlRGVlcFdpdGgkMShtZXJnZXIpIHtcbiAgdmFyIGl0ZXJzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuICB3aGlsZSAoIGxlbi0tID4gMCApIGl0ZXJzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMSBdO1xuXG4gIHJldHVybiBtZXJnZURlZXBXaXRoU291cmNlcyh0aGlzLCBpdGVycywgbWVyZ2VyKTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VJbihrZXlQYXRoKSB7XG4gIHZhciBpdGVycyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcbiAgd2hpbGUgKCBsZW4tLSA+IDAgKSBpdGVyc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiArIDEgXTtcblxuICByZXR1cm4gdXBkYXRlSW4odGhpcywga2V5UGF0aCwgZW1wdHlNYXAoKSwgZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG1lcmdlV2l0aFNvdXJjZXMobSwgaXRlcnMpOyB9KTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VEZWVwSW4oa2V5UGF0aCkge1xuICB2YXIgaXRlcnMgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG4gIHdoaWxlICggbGVuLS0gPiAwICkgaXRlcnNbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gKyAxIF07XG5cbiAgcmV0dXJuIHVwZGF0ZUluKHRoaXMsIGtleVBhdGgsIGVtcHR5TWFwKCksIGZ1bmN0aW9uIChtKSB7IHJldHVybiBtZXJnZURlZXBXaXRoU291cmNlcyhtLCBpdGVycyk7IH1cbiAgKTtcbn1cblxuZnVuY3Rpb24gd2l0aE11dGF0aW9ucyhmbikge1xuICB2YXIgbXV0YWJsZSA9IHRoaXMuYXNNdXRhYmxlKCk7XG4gIGZuKG11dGFibGUpO1xuICByZXR1cm4gbXV0YWJsZS53YXNBbHRlcmVkKCkgPyBtdXRhYmxlLl9fZW5zdXJlT3duZXIodGhpcy5fX293bmVySUQpIDogdGhpcztcbn1cblxuZnVuY3Rpb24gYXNNdXRhYmxlKCkge1xuICByZXR1cm4gdGhpcy5fX293bmVySUQgPyB0aGlzIDogdGhpcy5fX2Vuc3VyZU93bmVyKG5ldyBPd25lcklEKCkpO1xufVxuXG5mdW5jdGlvbiBhc0ltbXV0YWJsZSgpIHtcbiAgcmV0dXJuIHRoaXMuX19lbnN1cmVPd25lcigpO1xufVxuXG5mdW5jdGlvbiB3YXNBbHRlcmVkKCkge1xuICByZXR1cm4gdGhpcy5fX2FsdGVyZWQ7XG59XG5cbnZhciBNYXAgPSAvKkBfX1BVUkVfXyovKGZ1bmN0aW9uIChLZXllZENvbGxlY3Rpb24kJDEpIHtcbiAgZnVuY3Rpb24gTWFwKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcbiAgICAgID8gZW1wdHlNYXAoKVxuICAgICAgOiBpc01hcCh2YWx1ZSkgJiYgIWlzT3JkZXJlZCh2YWx1ZSlcbiAgICAgICAgPyB2YWx1ZVxuICAgICAgICA6IGVtcHR5TWFwKCkud2l0aE11dGF0aW9ucyhmdW5jdGlvbiAobWFwKSB7XG4gICAgICAgICAgICB2YXIgaXRlciA9IEtleWVkQ29sbGVjdGlvbiQkMSh2YWx1ZSk7XG4gICAgICAgICAgICBhc3NlcnROb3RJbmZpbml0ZShpdGVyLnNpemUpO1xuICAgICAgICAgICAgaXRlci5mb3JFYWNoKGZ1bmN0aW9uICh2LCBrKSB7IHJldHVybiBtYXAuc2V0KGssIHYpOyB9KTtcbiAgICAgICAgICB9KTtcbiAgfVxuXG4gIGlmICggS2V5ZWRDb2xsZWN0aW9uJCQxICkgTWFwLl9fcHJvdG9fXyA9IEtleWVkQ29sbGVjdGlvbiQkMTtcbiAgTWFwLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEtleWVkQ29sbGVjdGlvbiQkMSAmJiBLZXllZENvbGxlY3Rpb24kJDEucHJvdG90eXBlICk7XG4gIE1hcC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNYXA7XG5cbiAgTWFwLm9mID0gZnVuY3Rpb24gb2YgKCkge1xuICAgIHZhciBrZXlWYWx1ZXMgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB3aGlsZSAoIGxlbi0tICkga2V5VmFsdWVzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICByZXR1cm4gZW1wdHlNYXAoKS53aXRoTXV0YXRpb25zKGZ1bmN0aW9uIChtYXApIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5VmFsdWVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgIGlmIChpICsgMSA+PSBrZXlWYWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHZhbHVlIGZvciBrZXk6ICcgKyBrZXlWYWx1ZXNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIG1hcC5zZXQoa2V5VmFsdWVzW2ldLCBrZXlWYWx1ZXNbaSArIDFdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBNYXAucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICAgIHJldHVybiB0aGlzLl9fdG9TdHJpbmcoJ01hcCB7JywgJ30nKTtcbiAgfTtcblxuICAvLyBAcHJhZ21hIEFjY2Vzc1xuXG4gIE1hcC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0IChrLCBub3RTZXRWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLl9yb290XG4gICAgICA/IHRoaXMuX3Jvb3QuZ2V0KDAsIHVuZGVmaW5lZCwgaywgbm90U2V0VmFsdWUpXG4gICAgICA6IG5vdFNldFZhbHVlO1xuICB9O1xuXG4gIC8vIEBwcmFnbWEgTW9kaWZpY2F0aW9uXG5cbiAgTWFwLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQgKGssIHYpIHtcbiAgICByZXR1cm4gdXBkYXRlTWFwKHRoaXMsIGssIHYpO1xuICB9O1xuXG4gIE1hcC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlIChrKSB7XG4gICAgcmV0dXJuIHVwZGF0ZU1hcCh0aGlzLCBrLCBOT1RfU0VUKTtcbiAgfTtcblxuICBNYXAucHJvdG90eXBlLmRlbGV0ZUFsbCA9IGZ1bmN0aW9uIGRlbGV0ZUFsbCAoa2V5cykge1xuICAgIHZhciBjb2xsZWN0aW9uID0gQ29sbGVjdGlvbihrZXlzKTtcblxuICAgIGlmIChjb2xsZWN0aW9uLnNpemUgPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLndpdGhNdXRhdGlvbnMoZnVuY3Rpb24gKG1hcCkge1xuICAgICAgY29sbGVjdGlvbi5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIG1hcC5yZW1vdmUoa2V5KTsgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgTWFwLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyICgpIHtcbiAgICBpZiAodGhpcy5zaXplID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX19vd25lcklEKSB7XG4gICAgICB0aGlzLnNpemUgPSAwO1xuICAgICAgdGhpcy5fcm9vdCA9IG51bGw7XG4gICAgICB0aGlzLl9faGFzaCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX19hbHRlcmVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gZW1wdHlNYXAoKTtcbiAgfTtcblxuICAvLyBAcHJhZ21hIENvbXBvc2l0aW9uXG5cbiAgTWFwLnByb3RvdHlwZS5zb3J0ID0gZnVuY3Rpb24gc29ydCAoY29tcGFyYXRvcikge1xuICAgIC8vIExhdGUgYmluZGluZ1xuICAgIHJldHVybiBPcmRlcmVkTWFwKHNvcnRGYWN0b3J5KHRoaXMsIGNvbXBhcmF0b3IpKTtcbiAgfTtcblxuICBNYXAucHJvdG90eXBlLnNvcnRCeSA9IGZ1bmN0aW9uIHNvcnRCeSAobWFwcGVyLCBjb21wYXJhdG9yKSB7XG4gICAgLy8gTGF0ZSBiaW5kaW5nXG4gICAgcmV0dXJuIE9yZGVyZWRNYXAoc29ydEZhY3RvcnkodGhpcywgY29tcGFyYXRvciwgbWFwcGVyKSk7XG4gIH07XG5cbiAgTWFwLnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiBtYXAgKG1hcHBlciwgY29udGV4dCkge1xuICAgIHJldHVybiB0aGlzLndpdGhNdXRhdGlvbnMoZnVuY3Rpb24gKG1hcCkge1xuICAgICAgbWFwLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgbWFwLnNldChrZXksIG1hcHBlci5jYWxsKGNvbnRleHQsIHZhbHVlLCBrZXksIG1hcCkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gQHByYWdtYSBNdXRhYmlsaXR5XG5cbiAgTWFwLnByb3RvdHlwZS5fX2l0ZXJhdG9yID0gZnVuY3Rpb24gX19pdGVyYXRvciAodHlwZSwgcmV2ZXJzZSkge1xuICAgIHJldHVybiBuZXcgTWFwSXRlcmF0b3IodGhpcywgdHlwZSwgcmV2ZXJzZSk7XG4gIH07XG5cbiAgTWFwLnByb3RvdHlwZS5fX2l0ZXJhdGUgPSBmdW5jdGlvbiBfX2l0ZXJhdGUgKGZuLCByZXZlcnNlKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgdGhpcy5fcm9vdCAmJlxuICAgICAgdGhpcy5fcm9vdC5pdGVyYXRlKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICBpdGVyYXRpb25zKys7XG4gICAgICAgIHJldHVybiBmbihlbnRyeVsxXSwgZW50cnlbMF0sIHRoaXMkMSk7XG4gICAgICB9LCByZXZlcnNlKTtcbiAgICByZXR1cm4gaXRlcmF0aW9ucztcbiAgfTtcblxuICBNYXAucHJvdG90eXBlLl9fZW5zdXJlT3duZXIgPSBmdW5jdGlvbiBfX2Vuc3VyZU93bmVyIChvd25lcklEKSB7XG4gICAgaWYgKG93bmVySUQgPT09IHRoaXMuX19vd25lcklEKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgaWYgKCFvd25lcklEKSB7XG4gICAgICBpZiAodGhpcy5zaXplID09PSAwKSB7XG4gICAgICAgIHJldHVybiBlbXB0eU1hcCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX293bmVySUQgPSBvd25lcklEO1xuICAgICAgdGhpcy5fX2FsdGVyZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gbWFrZU1hcCh0aGlzLnNpemUsIHRoaXMuX3Jvb3QsIG93bmVySUQsIHRoaXMuX19oYXNoKTtcbiAgfTtcblxuICByZXR1cm4gTWFwO1xufShLZXllZENvbGxlY3Rpb24pKTtcblxuTWFwLmlzTWFwID0gaXNNYXA7XG5cbnZhciBNYXBQcm90b3R5cGUgPSBNYXAucHJvdG90eXBlO1xuTWFwUHJvdG90eXBlW0lTX01BUF9TWU1CT0xdID0gdHJ1ZTtcbk1hcFByb3RvdHlwZVtERUxFVEVdID0gTWFwUHJvdG90eXBlLnJlbW92ZTtcbk1hcFByb3RvdHlwZS5yZW1vdmVBbGwgPSBNYXBQcm90b3R5cGUuZGVsZXRlQWxsO1xuTWFwUHJvdG90eXBlLnNldEluID0gc2V0SW4kMTtcbk1hcFByb3RvdHlwZS5yZW1vdmVJbiA9IE1hcFByb3RvdHlwZS5kZWxldGVJbiA9IGRlbGV0ZUluO1xuTWFwUHJvdG90eXBlLnVwZGF0ZSA9IHVwZGF0ZSQxO1xuTWFwUHJvdG90eXBlLnVwZGF0ZUluID0gdXBkYXRlSW4kMTtcbk1hcFByb3RvdHlwZS5tZXJnZSA9IE1hcFByb3RvdHlwZS5jb25jYXQgPSBtZXJnZTtcbk1hcFByb3RvdHlwZS5tZXJnZVdpdGggPSBtZXJnZVdpdGg7XG5NYXBQcm90b3R5cGUubWVyZ2VEZWVwID0gbWVyZ2VEZWVwJDE7XG5NYXBQcm90b3R5cGUubWVyZ2VEZWVwV2l0aCA9IG1lcmdlRGVlcFdpdGgkMTtcbk1hcFByb3RvdHlwZS5tZXJnZUluID0gbWVyZ2VJbjtcbk1hcFByb3RvdHlwZS5tZXJnZURlZXBJbiA9IG1lcmdlRGVlcEluO1xuTWFwUHJvdG90eXBlLndpdGhNdXRhdGlvbnMgPSB3aXRoTXV0YXRpb25zO1xuTWFwUHJvdG90eXBlLndhc0FsdGVyZWQgPSB3YXNBbHRlcmVkO1xuTWFwUHJvdG90eXBlLmFzSW1tdXRhYmxlID0gYXNJbW11dGFibGU7XG5NYXBQcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9pbml0J10gPSBNYXBQcm90b3R5cGUuYXNNdXRhYmxlID0gYXNNdXRhYmxlO1xuTWFwUHJvdG90eXBlWydAQHRyYW5zZHVjZXIvc3RlcCddID0gZnVuY3Rpb24ocmVzdWx0LCBhcnIpIHtcbiAgcmV0dXJuIHJlc3VsdC5zZXQoYXJyWzBdLCBhcnJbMV0pO1xufTtcbk1hcFByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddID0gZnVuY3Rpb24ob2JqKSB7XG4gIHJldHVybiBvYmouYXNJbW11dGFibGUoKTtcbn07XG5cbi8vICNwcmFnbWEgVHJpZSBOb2Rlc1xuXG52YXIgQXJyYXlNYXBOb2RlID0gZnVuY3Rpb24gQXJyYXlNYXBOb2RlKG93bmVySUQsIGVudHJpZXMpIHtcbiAgdGhpcy5vd25lcklEID0gb3duZXJJRDtcbiAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbn07XG5cbkFycmF5TWFwTm9kZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0IChzaGlmdCwga2V5SGFzaCwga2V5LCBub3RTZXRWYWx1ZSkge1xuICB2YXIgZW50cmllcyA9IHRoaXMuZW50cmllcztcbiAgZm9yICh2YXIgaWkgPSAwLCBsZW4gPSBlbnRyaWVzLmxlbmd0aDsgaWkgPCBsZW47IGlpKyspIHtcbiAgICBpZiAoaXMoa2V5LCBlbnRyaWVzW2lpXVswXSkpIHtcbiAgICAgIHJldHVybiBlbnRyaWVzW2lpXVsxXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5vdFNldFZhbHVlO1xufTtcblxuQXJyYXlNYXBOb2RlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUgKG93bmVySUQsIHNoaWZ0LCBrZXlIYXNoLCBrZXksIHZhbHVlLCBkaWRDaGFuZ2VTaXplLCBkaWRBbHRlcikge1xuICB2YXIgcmVtb3ZlZCA9IHZhbHVlID09PSBOT1RfU0VUO1xuXG4gIHZhciBlbnRyaWVzID0gdGhpcy5lbnRyaWVzO1xuICB2YXIgaWR4ID0gMDtcbiAgdmFyIGxlbiA9IGVudHJpZXMubGVuZ3RoO1xuICBmb3IgKDsgaWR4IDwgbGVuOyBpZHgrKykge1xuICAgIGlmIChpcyhrZXksIGVudHJpZXNbaWR4XVswXSkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICB2YXIgZXhpc3RzID0gaWR4IDwgbGVuO1xuXG4gIGlmIChleGlzdHMgPyBlbnRyaWVzW2lkeF1bMV0gPT09IHZhbHVlIDogcmVtb3ZlZCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgU2V0UmVmKGRpZEFsdGVyKTtcbiAgKHJlbW92ZWQgfHwgIWV4aXN0cykgJiYgU2V0UmVmKGRpZENoYW5nZVNpemUpO1xuXG4gIGlmIChyZW1vdmVkICYmIGVudHJpZXMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuOyAvLyB1bmRlZmluZWRcbiAgfVxuXG4gIGlmICghZXhpc3RzICYmICFyZW1vdmVkICYmIGVudHJpZXMubGVuZ3RoID49IE1BWF9BUlJBWV9NQVBfU0laRSkge1xuICAgIHJldHVybiBjcmVhdGVOb2Rlcyhvd25lcklELCBlbnRyaWVzLCBrZXksIHZhbHVlKTtcbiAgfVxuXG4gIHZhciBpc0VkaXRhYmxlID0gb3duZXJJRCAmJiBvd25lcklEID09PSB0aGlzLm93bmVySUQ7XG4gIHZhciBuZXdFbnRyaWVzID0gaXNFZGl0YWJsZSA/IGVudHJpZXMgOiBhcnJDb3B5KGVudHJpZXMpO1xuXG4gIGlmIChleGlzdHMpIHtcbiAgICBpZiAocmVtb3ZlZCkge1xuICAgICAgaWR4ID09PSBsZW4gLSAxXG4gICAgICAgID8gbmV3RW50cmllcy5wb3AoKVxuICAgICAgICA6IChuZXdFbnRyaWVzW2lkeF0gPSBuZXdFbnRyaWVzLnBvcCgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3RW50cmllc1tpZHhdID0gW2tleSwgdmFsdWVdO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBuZXdFbnRyaWVzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfVxuXG4gIGlmIChpc0VkaXRhYmxlKSB7XG4gICAgdGhpcy5lbnRyaWVzID0gbmV3RW50cmllcztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJldHVybiBuZXcgQXJyYXlNYXBOb2RlKG93bmVySUQsIG5ld0VudHJpZXMpO1xufTtcblxudmFyIEJpdG1hcEluZGV4ZWROb2RlID0gZnVuY3Rpb24gQml0bWFwSW5kZXhlZE5vZGUob3duZXJJRCwgYml0bWFwLCBub2Rlcykge1xuICB0aGlzLm93bmVySUQgPSBvd25lcklEO1xuICB0aGlzLmJpdG1hcCA9IGJpdG1hcDtcbiAgdGhpcy5ub2RlcyA9IG5vZGVzO1xufTtcblxuQml0bWFwSW5kZXhlZE5vZGUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCAoc2hpZnQsIGtleUhhc2gsIGtleSwgbm90U2V0VmFsdWUpIHtcbiAgaWYgKGtleUhhc2ggPT09IHVuZGVmaW5lZCkge1xuICAgIGtleUhhc2ggPSBoYXNoKGtleSk7XG4gIH1cbiAgdmFyIGJpdCA9IDEgPDwgKChzaGlmdCA9PT0gMCA/IGtleUhhc2ggOiBrZXlIYXNoID4+PiBzaGlmdCkgJiBNQVNLKTtcbiAgdmFyIGJpdG1hcCA9IHRoaXMuYml0bWFwO1xuICByZXR1cm4gKGJpdG1hcCAmIGJpdCkgPT09IDBcbiAgICA/IG5vdFNldFZhbHVlXG4gICAgOiB0aGlzLm5vZGVzW3BvcENvdW50KGJpdG1hcCAmIChiaXQgLSAxKSldLmdldChcbiAgICAgICAgc2hpZnQgKyBTSElGVCxcbiAgICAgICAga2V5SGFzaCxcbiAgICAgICAga2V5LFxuICAgICAgICBub3RTZXRWYWx1ZVxuICAgICAgKTtcbn07XG5cbkJpdG1hcEluZGV4ZWROb2RlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUgKG93bmVySUQsIHNoaWZ0LCBrZXlIYXNoLCBrZXksIHZhbHVlLCBkaWRDaGFuZ2VTaXplLCBkaWRBbHRlcikge1xuICBpZiAoa2V5SGFzaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAga2V5SGFzaCA9IGhhc2goa2V5KTtcbiAgfVxuICB2YXIga2V5SGFzaEZyYWcgPSAoc2hpZnQgPT09IDAgPyBrZXlIYXNoIDoga2V5SGFzaCA+Pj4gc2hpZnQpICYgTUFTSztcbiAgdmFyIGJpdCA9IDEgPDwga2V5SGFzaEZyYWc7XG4gIHZhciBiaXRtYXAgPSB0aGlzLmJpdG1hcDtcbiAgdmFyIGV4aXN0cyA9IChiaXRtYXAgJiBiaXQpICE9PSAwO1xuXG4gIGlmICghZXhpc3RzICYmIHZhbHVlID09PSBOT1RfU0VUKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB2YXIgaWR4ID0gcG9wQ291bnQoYml0bWFwICYgKGJpdCAtIDEpKTtcbiAgdmFyIG5vZGVzID0gdGhpcy5ub2RlcztcbiAgdmFyIG5vZGUgPSBleGlzdHMgPyBub2Rlc1tpZHhdIDogdW5kZWZpbmVkO1xuICB2YXIgbmV3Tm9kZSA9IHVwZGF0ZU5vZGUoXG4gICAgbm9kZSxcbiAgICBvd25lcklELFxuICAgIHNoaWZ0ICsgU0hJRlQsXG4gICAga2V5SGFzaCxcbiAgICBrZXksXG4gICAgdmFsdWUsXG4gICAgZGlkQ2hhbmdlU2l6ZSxcbiAgICBkaWRBbHRlclxuICApO1xuXG4gIGlmIChuZXdOb2RlID09PSBub2RlKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpZiAoIWV4aXN0cyAmJiBuZXdOb2RlICYmIG5vZGVzLmxlbmd0aCA+PSBNQVhfQklUTUFQX0lOREVYRURfU0laRSkge1xuICAgIHJldHVybiBleHBhbmROb2Rlcyhvd25lcklELCBub2RlcywgYml0bWFwLCBrZXlIYXNoRnJhZywgbmV3Tm9kZSk7XG4gIH1cblxuICBpZiAoXG4gICAgZXhpc3RzICYmXG4gICAgIW5ld05vZGUgJiZcbiAgICBub2Rlcy5sZW5ndGggPT09IDIgJiZcbiAgICBpc0xlYWZOb2RlKG5vZGVzW2lkeCBeIDFdKVxuICApIHtcbiAgICByZXR1cm4gbm9kZXNbaWR4IF4gMV07XG4gIH1cblxuICBpZiAoZXhpc3RzICYmIG5ld05vZGUgJiYgbm9kZXMubGVuZ3RoID09PSAxICYmIGlzTGVhZk5vZGUobmV3Tm9kZSkpIHtcbiAgICByZXR1cm4gbmV3Tm9kZTtcbiAgfVxuXG4gIHZhciBpc0VkaXRhYmxlID0gb3duZXJJRCAmJiBvd25lcklEID09PSB0aGlzLm93bmVySUQ7XG4gIHZhciBuZXdCaXRtYXAgPSBleGlzdHMgPyAobmV3Tm9kZSA/IGJpdG1hcCA6IGJpdG1hcCBeIGJpdCkgOiBiaXRtYXAgfCBiaXQ7XG4gIHZhciBuZXdOb2RlcyA9IGV4aXN0c1xuICAgID8gbmV3Tm9kZVxuICAgICAgPyBzZXRBdChub2RlcywgaWR4LCBuZXdOb2RlLCBpc0VkaXRhYmxlKVxuICAgICAgOiBzcGxpY2VPdXQobm9kZXMsIGlkeCwgaXNFZGl0YWJsZSlcbiAgICA6IHNwbGljZUluKG5vZGVzLCBpZHgsIG5ld05vZGUsIGlzRWRpdGFibGUpO1xuXG4gIGlmIChpc0VkaXRhYmxlKSB7XG4gICAgdGhpcy5iaXRtYXAgPSBuZXdCaXRtYXA7XG4gICAgdGhpcy5ub2RlcyA9IG5ld05vZGVzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBCaXRtYXBJbmRleGVkTm9kZShvd25lcklELCBuZXdCaXRtYXAsIG5ld05vZGVzKTtcbn07XG5cbnZhciBIYXNoQXJyYXlNYXBOb2RlID0gZnVuY3Rpb24gSGFzaEFycmF5TWFwTm9kZShvd25lcklELCBjb3VudCwgbm9kZXMpIHtcbiAgdGhpcy5vd25lcklEID0gb3duZXJJRDtcbiAgdGhpcy5jb3VudCA9IGNvdW50O1xuICB0aGlzLm5vZGVzID0gbm9kZXM7XG59O1xuXG5IYXNoQXJyYXlNYXBOb2RlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQgKHNoaWZ0LCBrZXlIYXNoLCBrZXksIG5vdFNldFZhbHVlKSB7XG4gIGlmIChrZXlIYXNoID09PSB1bmRlZmluZWQpIHtcbiAgICBrZXlIYXNoID0gaGFzaChrZXkpO1xuICB9XG4gIHZhciBpZHggPSAoc2hpZnQgPT09IDAgPyBrZXlIYXNoIDoga2V5SGFzaCA+Pj4gc2hpZnQpICYgTUFTSztcbiAgdmFyIG5vZGUgPSB0aGlzLm5vZGVzW2lkeF07XG4gIHJldHVybiBub2RlXG4gICAgPyBub2RlLmdldChzaGlmdCArIFNISUZULCBrZXlIYXNoLCBrZXksIG5vdFNldFZhbHVlKVxuICAgIDogbm90U2V0VmFsdWU7XG59O1xuXG5IYXNoQXJyYXlNYXBOb2RlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUgKG93bmVySUQsIHNoaWZ0LCBrZXlIYXNoLCBrZXksIHZhbHVlLCBkaWRDaGFuZ2VTaXplLCBkaWRBbHRlcikge1xuICBpZiAoa2V5SGFzaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAga2V5SGFzaCA9IGhhc2goa2V5KTtcbiAgfVxuICB2YXIgaWR4ID0gKHNoaWZ0ID09PSAwID8ga2V5SGFzaCA6IGtleUhhc2ggPj4+IHNoaWZ0KSAmIE1BU0s7XG4gIHZhciByZW1vdmVkID0gdmFsdWUgPT09IE5PVF9TRVQ7XG4gIHZhciBub2RlcyA9IHRoaXMubm9kZXM7XG4gIHZhciBub2RlID0gbm9kZXNbaWR4XTtcblxuICBpZiAocmVtb3ZlZCAmJiAhbm9kZSkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdmFyIG5ld05vZGUgPSB1cGRhdGVOb2RlKFxuICAgIG5vZGUsXG4gICAgb3duZXJJRCxcbiAgICBzaGlmdCArIFNISUZULFxuICAgIGtleUhhc2gsXG4gICAga2V5LFxuICAgIHZhbHVlLFxuICAgIGRpZENoYW5nZVNpemUsXG4gICAgZGlkQWx0ZXJcbiAgKTtcbiAgaWYgKG5ld05vZGUgPT09IG5vZGUpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHZhciBuZXdDb3VudCA9IHRoaXMuY291bnQ7XG4gIGlmICghbm9kZSkge1xuICAgIG5ld0NvdW50Kys7XG4gIH0gZWxzZSBpZiAoIW5ld05vZGUpIHtcbiAgICBuZXdDb3VudC0tO1xuICAgIGlmIChuZXdDb3VudCA8IE1JTl9IQVNIX0FSUkFZX01BUF9TSVpFKSB7XG4gICAgICByZXR1cm4gcGFja05vZGVzKG93bmVySUQsIG5vZGVzLCBuZXdDb3VudCwgaWR4KTtcbiAgICB9XG4gIH1cblxuICB2YXIgaXNFZGl0YWJsZSA9IG93bmVySUQgJiYgb3duZXJJRCA9PT0gdGhpcy5vd25lcklEO1xuICB2YXIgbmV3Tm9kZXMgPSBzZXRBdChub2RlcywgaWR4LCBuZXdOb2RlLCBpc0VkaXRhYmxlKTtcblxuICBpZiAoaXNFZGl0YWJsZSkge1xuICAgIHRoaXMuY291bnQgPSBuZXdDb3VudDtcbiAgICB0aGlzLm5vZGVzID0gbmV3Tm9kZXM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZXR1cm4gbmV3IEhhc2hBcnJheU1hcE5vZGUob3duZXJJRCwgbmV3Q291bnQsIG5ld05vZGVzKTtcbn07XG5cbnZhciBIYXNoQ29sbGlzaW9uTm9kZSA9IGZ1bmN0aW9uIEhhc2hDb2xsaXNpb25Ob2RlKG93bmVySUQsIGtleUhhc2gsIGVudHJpZXMpIHtcbiAgdGhpcy5vd25lcklEID0gb3duZXJJRDtcbiAgdGhpcy5rZXlIYXNoID0ga2V5SGFzaDtcbiAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbn07XG5cbkhhc2hDb2xsaXNpb25Ob2RlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQgKHNoaWZ0LCBrZXlIYXNoLCBrZXksIG5vdFNldFZhbHVlKSB7XG4gIHZhciBlbnRyaWVzID0gdGhpcy5lbnRyaWVzO1xuICBmb3IgKHZhciBpaSA9IDAsIGxlbiA9IGVudHJpZXMubGVuZ3RoOyBpaSA8IGxlbjsgaWkrKykge1xuICAgIGlmIChpcyhrZXksIGVudHJpZXNbaWldWzBdKSkge1xuICAgICAgcmV0dXJuIGVudHJpZXNbaWldWzFdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbm90U2V0VmFsdWU7XG59O1xuXG5IYXNoQ29sbGlzaW9uTm9kZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlIChvd25lcklELCBzaGlmdCwga2V5SGFzaCwga2V5LCB2YWx1ZSwgZGlkQ2hhbmdlU2l6ZSwgZGlkQWx0ZXIpIHtcbiAgaWYgKGtleUhhc2ggPT09IHVuZGVmaW5lZCkge1xuICAgIGtleUhhc2ggPSBoYXNoKGtleSk7XG4gIH1cblxuICB2YXIgcmVtb3ZlZCA9IHZhbHVlID09PSBOT1RfU0VUO1xuXG4gIGlmIChrZXlIYXNoICE9PSB0aGlzLmtleUhhc2gpIHtcbiAgICBpZiAocmVtb3ZlZCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFNldFJlZihkaWRBbHRlcik7XG4gICAgU2V0UmVmKGRpZENoYW5nZVNpemUpO1xuICAgIHJldHVybiBtZXJnZUludG9Ob2RlKHRoaXMsIG93bmVySUQsIHNoaWZ0LCBrZXlIYXNoLCBba2V5LCB2YWx1ZV0pO1xuICB9XG5cbiAgdmFyIGVudHJpZXMgPSB0aGlzLmVudHJpZXM7XG4gIHZhciBpZHggPSAwO1xuICB2YXIgbGVuID0gZW50cmllcy5sZW5ndGg7XG4gIGZvciAoOyBpZHggPCBsZW47IGlkeCsrKSB7XG4gICAgaWYgKGlzKGtleSwgZW50cmllc1tpZHhdWzBdKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHZhciBleGlzdHMgPSBpZHggPCBsZW47XG5cbiAgaWYgKGV4aXN0cyA/IGVudHJpZXNbaWR4XVsxXSA9PT0gdmFsdWUgOiByZW1vdmVkKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBTZXRSZWYoZGlkQWx0ZXIpO1xuICAocmVtb3ZlZCB8fCAhZXhpc3RzKSAmJiBTZXRSZWYoZGlkQ2hhbmdlU2l6ZSk7XG5cbiAgaWYgKHJlbW92ZWQgJiYgbGVuID09PSAyKSB7XG4gICAgcmV0dXJuIG5ldyBWYWx1ZU5vZGUob3duZXJJRCwgdGhpcy5rZXlIYXNoLCBlbnRyaWVzW2lkeCBeIDFdKTtcbiAgfVxuXG4gIHZhciBpc0VkaXRhYmxlID0gb3duZXJJRCAmJiBvd25lcklEID09PSB0aGlzLm93bmVySUQ7XG4gIHZhciBuZXdFbnRyaWVzID0gaXNFZGl0YWJsZSA/IGVudHJpZXMgOiBhcnJDb3B5KGVudHJpZXMpO1xuXG4gIGlmIChleGlzdHMpIHtcbiAgICBpZiAocmVtb3ZlZCkge1xuICAgICAgaWR4ID09PSBsZW4gLSAxXG4gICAgICAgID8gbmV3RW50cmllcy5wb3AoKVxuICAgICAgICA6IChuZXdFbnRyaWVzW2lkeF0gPSBuZXdFbnRyaWVzLnBvcCgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3RW50cmllc1tpZHhdID0gW2tleSwgdmFsdWVdO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBuZXdFbnRyaWVzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfVxuXG4gIGlmIChpc0VkaXRhYmxlKSB7XG4gICAgdGhpcy5lbnRyaWVzID0gbmV3RW50cmllcztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJldHVybiBuZXcgSGFzaENvbGxpc2lvbk5vZGUob3duZXJJRCwgdGhpcy5rZXlIYXNoLCBuZXdFbnRyaWVzKTtcbn07XG5cbnZhciBWYWx1ZU5vZGUgPSBmdW5jdGlvbiBWYWx1ZU5vZGUob3duZXJJRCwga2V5SGFzaCwgZW50cnkpIHtcbiAgdGhpcy5vd25lcklEID0gb3duZXJJRDtcbiAgdGhpcy5rZXlIYXNoID0ga2V5SGFzaDtcbiAgdGhpcy5lbnRyeSA9IGVudHJ5O1xufTtcblxuVmFsdWVOb2RlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQgKHNoaWZ0LCBrZXlIYXNoLCBrZXksIG5vdFNldFZhbHVlKSB7XG4gIHJldHVybiBpcyhrZXksIHRoaXMuZW50cnlbMF0pID8gdGhpcy5lbnRyeVsxXSA6IG5vdFNldFZhbHVlO1xufTtcblxuVmFsdWVOb2RlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUgKG93bmVySUQsIHNoaWZ0LCBrZXlIYXNoLCBrZXksIHZhbHVlLCBkaWRDaGFuZ2VTaXplLCBkaWRBbHRlcikge1xuICB2YXIgcmVtb3ZlZCA9IHZhbHVlID09PSBOT1RfU0VUO1xuICB2YXIga2V5TWF0Y2ggPSBpcyhrZXksIHRoaXMuZW50cnlbMF0pO1xuICBpZiAoa2V5TWF0Y2ggPyB2YWx1ZSA9PT0gdGhpcy5lbnRyeVsxXSA6IHJlbW92ZWQpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIFNldFJlZihkaWRBbHRlcik7XG5cbiAgaWYgKHJlbW92ZWQpIHtcbiAgICBTZXRSZWYoZGlkQ2hhbmdlU2l6ZSk7XG4gICAgcmV0dXJuOyAvLyB1bmRlZmluZWRcbiAgfVxuXG4gIGlmIChrZXlNYXRjaCkge1xuICAgIGlmIChvd25lcklEICYmIG93bmVySUQgPT09IHRoaXMub3duZXJJRCkge1xuICAgICAgdGhpcy5lbnRyeVsxXSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBuZXcgVmFsdWVOb2RlKG93bmVySUQsIHRoaXMua2V5SGFzaCwgW2tleSwgdmFsdWVdKTtcbiAgfVxuXG4gIFNldFJlZihkaWRDaGFuZ2VTaXplKTtcbiAgcmV0dXJuIG1lcmdlSW50b05vZGUodGhpcywgb3duZXJJRCwgc2hpZnQsIGhhc2goa2V5KSwgW2tleSwgdmFsdWVdKTtcbn07XG5cbi8vICNwcmFnbWEgSXRlcmF0b3JzXG5cbkFycmF5TWFwTm9kZS5wcm90b3R5cGUuaXRlcmF0ZSA9IEhhc2hDb2xsaXNpb25Ob2RlLnByb3RvdHlwZS5pdGVyYXRlID0gZnVuY3Rpb24oXG4gIGZuLFxuICByZXZlcnNlXG4pIHtcbiAgdmFyIGVudHJpZXMgPSB0aGlzLmVudHJpZXM7XG4gIGZvciAodmFyIGlpID0gMCwgbWF4SW5kZXggPSBlbnRyaWVzLmxlbmd0aCAtIDE7IGlpIDw9IG1heEluZGV4OyBpaSsrKSB7XG4gICAgaWYgKGZuKGVudHJpZXNbcmV2ZXJzZSA/IG1heEluZGV4IC0gaWkgOiBpaV0pID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufTtcblxuQml0bWFwSW5kZXhlZE5vZGUucHJvdG90eXBlLml0ZXJhdGUgPSBIYXNoQXJyYXlNYXBOb2RlLnByb3RvdHlwZS5pdGVyYXRlID0gZnVuY3Rpb24oXG4gIGZuLFxuICByZXZlcnNlXG4pIHtcbiAgdmFyIG5vZGVzID0gdGhpcy5ub2RlcztcbiAgZm9yICh2YXIgaWkgPSAwLCBtYXhJbmRleCA9IG5vZGVzLmxlbmd0aCAtIDE7IGlpIDw9IG1heEluZGV4OyBpaSsrKSB7XG4gICAgdmFyIG5vZGUgPSBub2Rlc1tyZXZlcnNlID8gbWF4SW5kZXggLSBpaSA6IGlpXTtcbiAgICBpZiAobm9kZSAmJiBub2RlLml0ZXJhdGUoZm4sIHJldmVyc2UpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5WYWx1ZU5vZGUucHJvdG90eXBlLml0ZXJhdGUgPSBmdW5jdGlvbihmbiwgcmV2ZXJzZSkge1xuICByZXR1cm4gZm4odGhpcy5lbnRyeSk7XG59O1xuXG52YXIgTWFwSXRlcmF0b3IgPSAvKkBfX1BVUkVfXyovKGZ1bmN0aW9uIChJdGVyYXRvciQkMSkge1xuICBmdW5jdGlvbiBNYXBJdGVyYXRvcihtYXAsIHR5cGUsIHJldmVyc2UpIHtcbiAgICB0aGlzLl90eXBlID0gdHlwZTtcbiAgICB0aGlzLl9yZXZlcnNlID0gcmV2ZXJzZTtcbiAgICB0aGlzLl9zdGFjayA9IG1hcC5fcm9vdCAmJiBtYXBJdGVyYXRvckZyYW1lKG1hcC5fcm9vdCk7XG4gIH1cblxuICBpZiAoIEl0ZXJhdG9yJCQxICkgTWFwSXRlcmF0b3IuX19wcm90b19fID0gSXRlcmF0b3IkJDE7XG4gIE1hcEl0ZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEl0ZXJhdG9yJCQxICYmIEl0ZXJhdG9yJCQxLnByb3RvdHlwZSApO1xuICBNYXBJdGVyYXRvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNYXBJdGVyYXRvcjtcblxuICBNYXBJdGVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uIG5leHQgKCkge1xuICAgIHZhciB0eXBlID0gdGhpcy5fdHlwZTtcbiAgICB2YXIgc3RhY2sgPSB0aGlzLl9zdGFjaztcbiAgICB3aGlsZSAoc3RhY2spIHtcbiAgICAgIHZhciBub2RlID0gc3RhY2subm9kZTtcbiAgICAgIHZhciBpbmRleCA9IHN0YWNrLmluZGV4Kys7XG4gICAgICB2YXIgbWF4SW5kZXggPSAodm9pZCAwKTtcbiAgICAgIGlmIChub2RlLmVudHJ5KSB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBtYXBJdGVyYXRvclZhbHVlKHR5cGUsIG5vZGUuZW50cnkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5vZGUuZW50cmllcykge1xuICAgICAgICBtYXhJbmRleCA9IG5vZGUuZW50cmllcy5sZW5ndGggLSAxO1xuICAgICAgICBpZiAoaW5kZXggPD0gbWF4SW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gbWFwSXRlcmF0b3JWYWx1ZShcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBub2RlLmVudHJpZXNbdGhpcy5fcmV2ZXJzZSA/IG1heEluZGV4IC0gaW5kZXggOiBpbmRleF1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXhJbmRleCA9IG5vZGUubm9kZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgaWYgKGluZGV4IDw9IG1heEluZGV4KSB7XG4gICAgICAgICAgdmFyIHN1Yk5vZGUgPSBub2RlLm5vZGVzW3RoaXMuX3JldmVyc2UgPyBtYXhJbmRleCAtIGluZGV4IDogaW5kZXhdO1xuICAgICAgICAgIGlmIChzdWJOb2RlKSB7XG4gICAgICAgICAgICBpZiAoc3ViTm9kZS5lbnRyeSkge1xuICAgICAgICAgICAgICByZXR1cm4gbWFwSXRlcmF0b3JWYWx1ZSh0eXBlLCBzdWJOb2RlLmVudHJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YWNrID0gdGhpcy5fc3RhY2sgPSBtYXBJdGVyYXRvckZyYW1lKHN1Yk5vZGUsIHN0YWNrKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHN0YWNrID0gdGhpcy5fc3RhY2sgPSB0aGlzLl9zdGFjay5fX3ByZXY7XG4gICAgfVxuICAgIHJldHVybiBpdGVyYXRvckRvbmUoKTtcbiAgfTtcblxuICByZXR1cm4gTWFwSXRlcmF0b3I7XG59KEl0ZXJhdG9yKSk7XG5cbmZ1bmN0aW9uIG1hcEl0ZXJhdG9yVmFsdWUodHlwZSwgZW50cnkpIHtcbiAgcmV0dXJuIGl0ZXJhdG9yVmFsdWUodHlwZSwgZW50cnlbMF0sIGVudHJ5WzFdKTtcbn1cblxuZnVuY3Rpb24gbWFwSXRlcmF0b3JGcmFtZShub2RlLCBwcmV2KSB7XG4gIHJldHVybiB7XG4gICAgbm9kZTogbm9kZSxcbiAgICBpbmRleDogMCxcbiAgICBfX3ByZXY6IHByZXYsXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1ha2VNYXAoc2l6ZSwgcm9vdCwgb3duZXJJRCwgaGFzaCQkMSkge1xuICB2YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShNYXBQcm90b3R5cGUpO1xuICBtYXAuc2l6ZSA9IHNpemU7XG4gIG1hcC5fcm9vdCA9IHJvb3Q7XG4gIG1hcC5fX293bmVySUQgPSBvd25lcklEO1xuICBtYXAuX19oYXNoID0gaGFzaCQkMTtcbiAgbWFwLl9fYWx0ZXJlZCA9IGZhbHNlO1xuICByZXR1cm4gbWFwO1xufVxuXG52YXIgRU1QVFlfTUFQO1xuZnVuY3Rpb24gZW1wdHlNYXAoKSB7XG4gIHJldHVybiBFTVBUWV9NQVAgfHwgKEVNUFRZX01BUCA9IG1ha2VNYXAoMCkpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVNYXAobWFwLCBrLCB2KSB7XG4gIHZhciBuZXdSb290O1xuICB2YXIgbmV3U2l6ZTtcbiAgaWYgKCFtYXAuX3Jvb3QpIHtcbiAgICBpZiAodiA9PT0gTk9UX1NFVCkge1xuICAgICAgcmV0dXJuIG1hcDtcbiAgICB9XG4gICAgbmV3U2l6ZSA9IDE7XG4gICAgbmV3Um9vdCA9IG5ldyBBcnJheU1hcE5vZGUobWFwLl9fb3duZXJJRCwgW1trLCB2XV0pO1xuICB9IGVsc2Uge1xuICAgIHZhciBkaWRDaGFuZ2VTaXplID0gTWFrZVJlZigpO1xuICAgIHZhciBkaWRBbHRlciA9IE1ha2VSZWYoKTtcbiAgICBuZXdSb290ID0gdXBkYXRlTm9kZShcbiAgICAgIG1hcC5fcm9vdCxcbiAgICAgIG1hcC5fX293bmVySUQsXG4gICAgICAwLFxuICAgICAgdW5kZWZpbmVkLFxuICAgICAgayxcbiAgICAgIHYsXG4gICAgICBkaWRDaGFuZ2VTaXplLFxuICAgICAgZGlkQWx0ZXJcbiAgICApO1xuICAgIGlmICghZGlkQWx0ZXIudmFsdWUpIHtcbiAgICAgIHJldHVybiBtYXA7XG4gICAgfVxuICAgIG5ld1NpemUgPSBtYXAuc2l6ZSArIChkaWRDaGFuZ2VTaXplLnZhbHVlID8gKHYgPT09IE5PVF9TRVQgPyAtMSA6IDEpIDogMCk7XG4gIH1cbiAgaWYgKG1hcC5fX293bmVySUQpIHtcbiAgICBtYXAuc2l6ZSA9IG5ld1NpemU7XG4gICAgbWFwLl9yb290ID0gbmV3Um9vdDtcbiAgICBtYXAuX19oYXNoID0gdW5kZWZpbmVkO1xuICAgIG1hcC5fX2FsdGVyZWQgPSB0cnVlO1xuICAgIHJldHVybiBtYXA7XG4gIH1cbiAgcmV0dXJuIG5ld1Jvb3QgPyBtYWtlTWFwKG5ld1NpemUsIG5ld1Jvb3QpIDogZW1wdHlNYXAoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlTm9kZShcbiAgbm9kZSxcbiAgb3duZXJJRCxcbiAgc2hpZnQsXG4gIGtleUhhc2gsXG4gIGtleSxcbiAgdmFsdWUsXG4gIGRpZENoYW5nZVNpemUsXG4gIGRpZEFsdGVyXG4pIHtcbiAgaWYgKCFub2RlKSB7XG4gICAgaWYgKHZhbHVlID09PSBOT1RfU0VUKSB7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgU2V0UmVmKGRpZEFsdGVyKTtcbiAgICBTZXRSZWYoZGlkQ2hhbmdlU2l6ZSk7XG4gICAgcmV0dXJuIG5ldyBWYWx1ZU5vZGUob3duZXJJRCwga2V5SGFzaCwgW2tleSwgdmFsdWVdKTtcbiAgfVxuICByZXR1cm4gbm9kZS51cGRhdGUoXG4gICAgb3duZXJJRCxcbiAgICBzaGlmdCxcbiAgICBrZXlIYXNoLFxuICAgIGtleSxcbiAgICB2YWx1ZSxcbiAgICBkaWRDaGFuZ2VTaXplLFxuICAgIGRpZEFsdGVyXG4gICk7XG59XG5cbmZ1bmN0aW9uIGlzTGVhZk5vZGUobm9kZSkge1xuICByZXR1cm4gKFxuICAgIG5vZGUuY29uc3RydWN0b3IgPT09IFZhbHVlTm9kZSB8fCBub2RlLmNvbnN0cnVjdG9yID09PSBIYXNoQ29sbGlzaW9uTm9kZVxuICApO1xufVxuXG5mdW5jdGlvbiBtZXJnZUludG9Ob2RlKG5vZGUsIG93bmVySUQsIHNoaWZ0LCBrZXlIYXNoLCBlbnRyeSkge1xuICBpZiAobm9kZS5rZXlIYXNoID09PSBrZXlIYXNoKSB7XG4gICAgcmV0dXJuIG5ldyBIYXNoQ29sbGlzaW9uTm9kZShvd25lcklELCBrZXlIYXNoLCBbbm9kZS5lbnRyeSwgZW50cnldKTtcbiAgfVxuXG4gIHZhciBpZHgxID0gKHNoaWZ0ID09PSAwID8gbm9kZS5rZXlIYXNoIDogbm9kZS5rZXlIYXNoID4+PiBzaGlmdCkgJiBNQVNLO1xuICB2YXIgaWR4MiA9IChzaGlmdCA9PT0gMCA/IGtleUhhc2ggOiBrZXlIYXNoID4+PiBzaGlmdCkgJiBNQVNLO1xuXG4gIHZhciBuZXdOb2RlO1xuICB2YXIgbm9kZXMgPVxuICAgIGlkeDEgPT09IGlkeDJcbiAgICAgID8gW21lcmdlSW50b05vZGUobm9kZSwgb3duZXJJRCwgc2hpZnQgKyBTSElGVCwga2V5SGFzaCwgZW50cnkpXVxuICAgICAgOiAoKG5ld05vZGUgPSBuZXcgVmFsdWVOb2RlKG93bmVySUQsIGtleUhhc2gsIGVudHJ5KSksXG4gICAgICAgIGlkeDEgPCBpZHgyID8gW25vZGUsIG5ld05vZGVdIDogW25ld05vZGUsIG5vZGVdKTtcblxuICByZXR1cm4gbmV3IEJpdG1hcEluZGV4ZWROb2RlKG93bmVySUQsICgxIDw8IGlkeDEpIHwgKDEgPDwgaWR4MiksIG5vZGVzKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTm9kZXMob3duZXJJRCwgZW50cmllcywga2V5LCB2YWx1ZSkge1xuICBpZiAoIW93bmVySUQpIHtcbiAgICBvd25lcklEID0gbmV3IE93bmVySUQoKTtcbiAgfVxuICB2YXIgbm9kZSA9IG5ldyBWYWx1ZU5vZGUob3duZXJJRCwgaGFzaChrZXkpLCBba2V5LCB2YWx1ZV0pO1xuICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgZW50cmllcy5sZW5ndGg7IGlpKyspIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2lpXTtcbiAgICBub2RlID0gbm9kZS51cGRhdGUob3duZXJJRCwgMCwgdW5kZWZpbmVkLCBlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG4gIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiBwYWNrTm9kZXMob3duZXJJRCwgbm9kZXMsIGNvdW50LCBleGNsdWRpbmcpIHtcbiAgdmFyIGJpdG1hcCA9IDA7XG4gIHZhciBwYWNrZWRJSSA9IDA7XG4gIHZhciBwYWNrZWROb2RlcyA9IG5ldyBBcnJheShjb3VudCk7XG4gIGZvciAodmFyIGlpID0gMCwgYml0ID0gMSwgbGVuID0gbm9kZXMubGVuZ3RoOyBpaSA8IGxlbjsgaWkrKywgYml0IDw8PSAxKSB7XG4gICAgdmFyIG5vZGUgPSBub2Rlc1tpaV07XG4gICAgaWYgKG5vZGUgIT09IHVuZGVmaW5lZCAmJiBpaSAhPT0gZXhjbHVkaW5nKSB7XG4gICAgICBiaXRtYXAgfD0gYml0O1xuICAgICAgcGFja2VkTm9kZXNbcGFja2VkSUkrK10gPSBub2RlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3IEJpdG1hcEluZGV4ZWROb2RlKG93bmVySUQsIGJpdG1hcCwgcGFja2VkTm9kZXMpO1xufVxuXG5mdW5jdGlvbiBleHBhbmROb2Rlcyhvd25lcklELCBub2RlcywgYml0bWFwLCBpbmNsdWRpbmcsIG5vZGUpIHtcbiAgdmFyIGNvdW50ID0gMDtcbiAgdmFyIGV4cGFuZGVkTm9kZXMgPSBuZXcgQXJyYXkoU0laRSk7XG4gIGZvciAodmFyIGlpID0gMDsgYml0bWFwICE9PSAwOyBpaSsrLCBiaXRtYXAgPj4+PSAxKSB7XG4gICAgZXhwYW5kZWROb2Rlc1tpaV0gPSBiaXRtYXAgJiAxID8gbm9kZXNbY291bnQrK10gOiB1bmRlZmluZWQ7XG4gIH1cbiAgZXhwYW5kZWROb2Rlc1tpbmNsdWRpbmddID0gbm9kZTtcbiAgcmV0dXJuIG5ldyBIYXNoQXJyYXlNYXBOb2RlKG93bmVySUQsIGNvdW50ICsgMSwgZXhwYW5kZWROb2Rlcyk7XG59XG5cbmZ1bmN0aW9uIHBvcENvdW50KHgpIHtcbiAgeCAtPSAoeCA+PiAxKSAmIDB4NTU1NTU1NTU7XG4gIHggPSAoeCAmIDB4MzMzMzMzMzMpICsgKCh4ID4+IDIpICYgMHgzMzMzMzMzMyk7XG4gIHggPSAoeCArICh4ID4+IDQpKSAmIDB4MGYwZjBmMGY7XG4gIHggKz0geCA+PiA4O1xuICB4ICs9IHggPj4gMTY7XG4gIHJldHVybiB4ICYgMHg3Zjtcbn1cblxuZnVuY3Rpb24gc2V0QXQoYXJyYXksIGlkeCwgdmFsLCBjYW5FZGl0KSB7XG4gIHZhciBuZXdBcnJheSA9IGNhbkVkaXQgPyBhcnJheSA6IGFyckNvcHkoYXJyYXkpO1xuICBuZXdBcnJheVtpZHhdID0gdmFsO1xuICByZXR1cm4gbmV3QXJyYXk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZUluKGFycmF5LCBpZHgsIHZhbCwgY2FuRWRpdCkge1xuICB2YXIgbmV3TGVuID0gYXJyYXkubGVuZ3RoICsgMTtcbiAgaWYgKGNhbkVkaXQgJiYgaWR4ICsgMSA9PT0gbmV3TGVuKSB7XG4gICAgYXJyYXlbaWR4XSA9IHZhbDtcbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cbiAgdmFyIG5ld0FycmF5ID0gbmV3IEFycmF5KG5ld0xlbik7XG4gIHZhciBhZnRlciA9IDA7XG4gIGZvciAodmFyIGlpID0gMDsgaWkgPCBuZXdMZW47IGlpKyspIHtcbiAgICBpZiAoaWkgPT09IGlkeCkge1xuICAgICAgbmV3QXJyYXlbaWldID0gdmFsO1xuICAgICAgYWZ0ZXIgPSAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3QXJyYXlbaWldID0gYXJyYXlbaWkgKyBhZnRlcl07XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXdBcnJheTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlT3V0KGFycmF5LCBpZHgsIGNhbkVkaXQpIHtcbiAgdmFyIG5ld0xlbiA9IGFycmF5Lmxlbmd0aCAtIDE7XG4gIGlmIChjYW5FZGl0ICYmIGlkeCA9PT0gbmV3TGVuKSB7XG4gICAgYXJyYXkucG9wKCk7XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG4gIHZhciBuZXdBcnJheSA9IG5ldyBBcnJheShuZXdMZW4pO1xuICB2YXIgYWZ0ZXIgPSAwO1xuICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgbmV3TGVuOyBpaSsrKSB7XG4gICAgaWYgKGlpID09PSBpZHgpIHtcbiAgICAgIGFmdGVyID0gMTtcbiAgICB9XG4gICAgbmV3QXJyYXlbaWldID0gYXJyYXlbaWkgKyBhZnRlcl07XG4gIH1cbiAgcmV0dXJuIG5ld0FycmF5O1xufVxuXG52YXIgTUFYX0FSUkFZX01BUF9TSVpFID0gU0laRSAvIDQ7XG52YXIgTUFYX0JJVE1BUF9JTkRFWEVEX1NJWkUgPSBTSVpFIC8gMjtcbnZhciBNSU5fSEFTSF9BUlJBWV9NQVBfU0laRSA9IFNJWkUgLyA0O1xuXG52YXIgSVNfTElTVF9TWU1CT0wgPSAnQEBfX0lNTVVUQUJMRV9MSVNUX19AQCc7XG5cbmZ1bmN0aW9uIGlzTGlzdChtYXliZUxpc3QpIHtcbiAgcmV0dXJuIEJvb2xlYW4obWF5YmVMaXN0ICYmIG1heWJlTGlzdFtJU19MSVNUX1NZTUJPTF0pO1xufVxuXG52YXIgTGlzdCA9IC8qQF9fUFVSRV9fKi8oZnVuY3Rpb24gKEluZGV4ZWRDb2xsZWN0aW9uJCQxKSB7XG4gIGZ1bmN0aW9uIExpc3QodmFsdWUpIHtcbiAgICB2YXIgZW1wdHkgPSBlbXB0eUxpc3QoKTtcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGVtcHR5O1xuICAgIH1cbiAgICBpZiAoaXNMaXN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICB2YXIgaXRlciA9IEluZGV4ZWRDb2xsZWN0aW9uJCQxKHZhbHVlKTtcbiAgICB2YXIgc2l6ZSA9IGl0ZXIuc2l6ZTtcbiAgICBpZiAoc2l6ZSA9PT0gMCkge1xuICAgICAgcmV0dXJuIGVtcHR5O1xuICAgIH1cbiAgICBhc3NlcnROb3RJbmZpbml0ZShzaXplKTtcbiAgICBpZiAoc2l6ZSA+IDAgJiYgc2l6ZSA8IFNJWkUpIHtcbiAgICAgIHJldHVybiBtYWtlTGlzdCgwLCBzaXplLCBTSElGVCwgbnVsbCwgbmV3IFZOb2RlKGl0ZXIudG9BcnJheSgpKSk7XG4gICAgfVxuICAgIHJldHVybiBlbXB0eS53aXRoTXV0YXRpb25zKGZ1bmN0aW9uIChsaXN0KSB7XG4gICAgICBsaXN0LnNldFNpemUoc2l6ZSk7XG4gICAgICBpdGVyLmZvckVhY2goZnVuY3Rpb24gKHYsIGkpIHsgcmV0dXJuIGxpc3Quc2V0KGksIHYpOyB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmICggSW5kZXhlZENvbGxlY3Rpb24kJDEgKSBMaXN0Ll9fcHJvdG9fXyA9IEluZGV4ZWRDb2xsZWN0aW9uJCQxO1xuICBMaXN0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEluZGV4ZWRDb2xsZWN0aW9uJCQxICYmIEluZGV4ZWRDb2xsZWN0aW9uJCQxLnByb3RvdHlwZSApO1xuICBMaXN0LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IExpc3Q7XG5cbiAgTGlzdC5vZiA9IGZ1bmN0aW9uIG9mICgvKi4uLnZhbHVlcyovKSB7XG4gICAgcmV0dXJuIHRoaXMoYXJndW1lbnRzKTtcbiAgfTtcblxuICBMaXN0LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgICByZXR1cm4gdGhpcy5fX3RvU3RyaW5nKCdMaXN0IFsnLCAnXScpO1xuICB9O1xuXG4gIC8vIEBwcmFnbWEgQWNjZXNzXG5cbiAgTGlzdC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0IChpbmRleCwgbm90U2V0VmFsdWUpIHtcbiAgICBpbmRleCA9IHdyYXBJbmRleCh0aGlzLCBpbmRleCk7XG4gICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLnNpemUpIHtcbiAgICAgIGluZGV4ICs9IHRoaXMuX29yaWdpbjtcbiAgICAgIHZhciBub2RlID0gbGlzdE5vZGVGb3IodGhpcywgaW5kZXgpO1xuICAgICAgcmV0dXJuIG5vZGUgJiYgbm9kZS5hcnJheVtpbmRleCAmIE1BU0tdO1xuICAgIH1cbiAgICByZXR1cm4gbm90U2V0VmFsdWU7XG4gIH07XG5cbiAgLy8gQHByYWdtYSBNb2RpZmljYXRpb25cblxuICBMaXN0LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQgKGluZGV4LCB2YWx1ZSkge1xuICAgIHJldHVybiB1cGRhdGVMaXN0KHRoaXMsIGluZGV4LCB2YWx1ZSk7XG4gIH07XG5cbiAgTGlzdC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlIChpbmRleCkge1xuICAgIHJldHVybiAhdGhpcy5oYXMoaW5kZXgpXG4gICAgICA/IHRoaXNcbiAgICAgIDogaW5kZXggPT09IDBcbiAgICAgICAgPyB0aGlzLnNoaWZ0KClcbiAgICAgICAgOiBpbmRleCA9PT0gdGhpcy5zaXplIC0gMVxuICAgICAgICAgID8gdGhpcy5wb3AoKVxuICAgICAgICAgIDogdGhpcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9O1xuXG4gIExpc3QucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uIGluc2VydCAoaW5kZXgsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuc3BsaWNlKGluZGV4LCAwLCB2YWx1ZSk7XG4gIH07XG5cbiAgTGlzdC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiBjbGVhciAoKSB7XG4gICAgaWYgKHRoaXMuc2l6ZSA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGlmICh0aGlzLl9fb3duZXJJRCkge1xuICAgICAgdGhpcy5zaXplID0gdGhpcy5fb3JpZ2luID0gdGhpcy5fY2FwYWNpdHkgPSAwO1xuICAgICAgdGhpcy5fbGV2ZWwgPSBTSElGVDtcbiAgICAgIHRoaXMuX3Jvb3QgPSB0aGlzLl90YWlsID0gbnVsbDtcbiAgICAgIHRoaXMuX19oYXNoID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fX2FsdGVyZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBlbXB0eUxpc3QoKTtcbiAgfTtcblxuICBMaXN0LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gcHVzaCAoLyouLi52YWx1ZXMqLykge1xuICAgIHZhciB2YWx1ZXMgPSBhcmd1bWVudHM7XG4gICAgdmFyIG9sZFNpemUgPSB0aGlzLnNpemU7XG4gICAgcmV0dXJuIHRoaXMud2l0aE11dGF0aW9ucyhmdW5jdGlvbiAobGlzdCkge1xuICAgICAgc2V0TGlzdEJvdW5kcyhsaXN0LCAwLCBvbGRTaXplICsgdmFsdWVzLmxlbmd0aCk7XG4gICAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgdmFsdWVzLmxlbmd0aDsgaWkrKykge1xuICAgICAgICBsaXN0LnNldChvbGRTaXplICsgaWksIHZhbHVlc1tpaV0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIExpc3QucHJvdG90eXBlLnBvcCA9IGZ1bmN0aW9uIHBvcCAoKSB7XG4gICAgcmV0dXJuIHNldExpc3RCb3VuZHModGhpcywgMCwgLTEpO1xuICB9O1xuXG4gIExpc3QucHJvdG90eXBlLnVuc2hpZnQgPSBmdW5jdGlvbiB1bnNoaWZ0ICgvKi4uLnZhbHVlcyovKSB7XG4gICAgdmFyIHZhbHVlcyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gdGhpcy53aXRoTXV0YXRpb25zKGZ1bmN0aW9uIChsaXN0KSB7XG4gICAgICBzZXRMaXN0Qm91bmRzKGxpc3QsIC12YWx1ZXMubGVuZ3RoKTtcbiAgICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCB2YWx1ZXMubGVuZ3RoOyBpaSsrKSB7XG4gICAgICAgIGxpc3Quc2V0KGlpLCB2YWx1ZXNbaWldKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBMaXN0LnByb3RvdHlwZS5zaGlmdCA9IGZ1bmN0aW9uIHNoaWZ0ICgpIHtcbiAgICByZXR1cm4gc2V0TGlzdEJvdW5kcyh0aGlzLCAxKTtcbiAgfTtcblxuICAvLyBAcHJhZ21hIENvbXBvc2l0aW9uXG5cbiAgTGlzdC5wcm90b3R5cGUuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0ICgvKi4uLmNvbGxlY3Rpb25zKi8pIHtcbiAgICB2YXIgYXJndW1lbnRzJDEgPSBhcmd1bWVudHM7XG5cbiAgICB2YXIgc2VxcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgYXJndW1lbnQgPSBhcmd1bWVudHMkMVtpXTtcbiAgICAgIHZhciBzZXEgPSBJbmRleGVkQ29sbGVjdGlvbiQkMShcbiAgICAgICAgdHlwZW9mIGFyZ3VtZW50ICE9PSAnc3RyaW5nJyAmJiBoYXNJdGVyYXRvcihhcmd1bWVudClcbiAgICAgICAgICA/IGFyZ3VtZW50XG4gICAgICAgICAgOiBbYXJndW1lbnRdXG4gICAgICApO1xuICAgICAgaWYgKHNlcS5zaXplICE9PSAwKSB7XG4gICAgICAgIHNlcXMucHVzaChzZXEpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2Vxcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBpZiAodGhpcy5zaXplID09PSAwICYmICF0aGlzLl9fb3duZXJJRCAmJiBzZXFzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3Ioc2Vxc1swXSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLndpdGhNdXRhdGlvbnMoZnVuY3Rpb24gKGxpc3QpIHtcbiAgICAgIHNlcXMuZm9yRWFjaChmdW5jdGlvbiAoc2VxKSB7IHJldHVybiBzZXEuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIGxpc3QucHVzaCh2YWx1ZSk7IH0pOyB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBMaXN0LnByb3RvdHlwZS5zZXRTaXplID0gZnVuY3Rpb24gc2V0U2l6ZSAoc2l6ZSkge1xuICAgIHJldHVybiBzZXRMaXN0Qm91bmRzKHRoaXMsIDAsIHNpemUpO1xuICB9O1xuXG4gIExpc3QucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uIG1hcCAobWFwcGVyLCBjb250ZXh0KSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICByZXR1cm4gdGhpcy53aXRoTXV0YXRpb25zKGZ1bmN0aW9uIChsaXN0KSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMkMS5zaXplOyBpKyspIHtcbiAgICAgICAgbGlzdC5zZXQoaSwgbWFwcGVyLmNhbGwoY29udGV4dCwgbGlzdC5nZXQoaSksIGksIGxpc3QpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAvLyBAcHJhZ21hIEl0ZXJhdGlvblxuXG4gIExpc3QucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UgKGJlZ2luLCBlbmQpIHtcbiAgICB2YXIgc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgICBpZiAod2hvbGVTbGljZShiZWdpbiwgZW5kLCBzaXplKSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBzZXRMaXN0Qm91bmRzKFxuICAgICAgdGhpcyxcbiAgICAgIHJlc29sdmVCZWdpbihiZWdpbiwgc2l6ZSksXG4gICAgICByZXNvbHZlRW5kKGVuZCwgc2l6ZSlcbiAgICApO1xuICB9O1xuXG4gIExpc3QucHJvdG90eXBlLl9faXRlcmF0b3IgPSBmdW5jdGlvbiBfX2l0ZXJhdG9yICh0eXBlLCByZXZlcnNlKSB7XG4gICAgdmFyIGluZGV4ID0gcmV2ZXJzZSA/IHRoaXMuc2l6ZSA6IDA7XG4gICAgdmFyIHZhbHVlcyA9IGl0ZXJhdGVMaXN0KHRoaXMsIHJldmVyc2UpO1xuICAgIHJldHVybiBuZXcgSXRlcmF0b3IoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZhbHVlID0gdmFsdWVzKCk7XG4gICAgICByZXR1cm4gdmFsdWUgPT09IERPTkVcbiAgICAgICAgPyBpdGVyYXRvckRvbmUoKVxuICAgICAgICA6IGl0ZXJhdG9yVmFsdWUodHlwZSwgcmV2ZXJzZSA/IC0taW5kZXggOiBpbmRleCsrLCB2YWx1ZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgTGlzdC5wcm90b3R5cGUuX19pdGVyYXRlID0gZnVuY3Rpb24gX19pdGVyYXRlIChmbiwgcmV2ZXJzZSkge1xuICAgIHZhciBpbmRleCA9IHJldmVyc2UgPyB0aGlzLnNpemUgOiAwO1xuICAgIHZhciB2YWx1ZXMgPSBpdGVyYXRlTGlzdCh0aGlzLCByZXZlcnNlKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgd2hpbGUgKCh2YWx1ZSA9IHZhbHVlcygpKSAhPT0gRE9ORSkge1xuICAgICAgaWYgKGZuKHZhbHVlLCByZXZlcnNlID8gLS1pbmRleCA6IGluZGV4KyssIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGluZGV4O1xuICB9O1xuXG4gIExpc3QucHJvdG90eXBlLl9fZW5zdXJlT3duZXIgPSBmdW5jdGlvbiBfX2Vuc3VyZU93bmVyIChvd25lcklEKSB7XG4gICAgaWYgKG93bmVySUQgPT09IHRoaXMuX19vd25lcklEKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgaWYgKCFvd25lcklEKSB7XG4gICAgICBpZiAodGhpcy5zaXplID09PSAwKSB7XG4gICAgICAgIHJldHVybiBlbXB0eUxpc3QoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19vd25lcklEID0gb3duZXJJRDtcbiAgICAgIHRoaXMuX19hbHRlcmVkID0gZmFsc2U7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIG1ha2VMaXN0KFxuICAgICAgdGhpcy5fb3JpZ2luLFxuICAgICAgdGhpcy5fY2FwYWNpdHksXG4gICAgICB0aGlzLl9sZXZlbCxcbiAgICAgIHRoaXMuX3Jvb3QsXG4gICAgICB0aGlzLl90YWlsLFxuICAgICAgb3duZXJJRCxcbiAgICAgIHRoaXMuX19oYXNoXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gTGlzdDtcbn0oSW5kZXhlZENvbGxlY3Rpb24pKTtcblxuTGlzdC5pc0xpc3QgPSBpc0xpc3Q7XG5cbnZhciBMaXN0UHJvdG90eXBlID0gTGlzdC5wcm90b3R5cGU7XG5MaXN0UHJvdG90eXBlW0lTX0xJU1RfU1lNQk9MXSA9IHRydWU7XG5MaXN0UHJvdG90eXBlW0RFTEVURV0gPSBMaXN0UHJvdG90eXBlLnJlbW92ZTtcbkxpc3RQcm90b3R5cGUubWVyZ2UgPSBMaXN0UHJvdG90eXBlLmNvbmNhdDtcbkxpc3RQcm90b3R5cGUuc2V0SW4gPSBzZXRJbiQxO1xuTGlzdFByb3RvdHlwZS5kZWxldGVJbiA9IExpc3RQcm90b3R5cGUucmVtb3ZlSW4gPSBkZWxldGVJbjtcbkxpc3RQcm90b3R5cGUudXBkYXRlID0gdXBkYXRlJDE7XG5MaXN0UHJvdG90eXBlLnVwZGF0ZUluID0gdXBkYXRlSW4kMTtcbkxpc3RQcm90b3R5cGUubWVyZ2VJbiA9IG1lcmdlSW47XG5MaXN0UHJvdG90eXBlLm1lcmdlRGVlcEluID0gbWVyZ2VEZWVwSW47XG5MaXN0UHJvdG90eXBlLndpdGhNdXRhdGlvbnMgPSB3aXRoTXV0YXRpb25zO1xuTGlzdFByb3RvdHlwZS53YXNBbHRlcmVkID0gd2FzQWx0ZXJlZDtcbkxpc3RQcm90b3R5cGUuYXNJbW11dGFibGUgPSBhc0ltbXV0YWJsZTtcbkxpc3RQcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9pbml0J10gPSBMaXN0UHJvdG90eXBlLmFzTXV0YWJsZSA9IGFzTXV0YWJsZTtcbkxpc3RQcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9zdGVwJ10gPSBmdW5jdGlvbihyZXN1bHQsIGFycikge1xuICByZXR1cm4gcmVzdWx0LnB1c2goYXJyKTtcbn07XG5MaXN0UHJvdG90eXBlWydAQHRyYW5zZHVjZXIvcmVzdWx0J10gPSBmdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuIG9iai5hc0ltbXV0YWJsZSgpO1xufTtcblxudmFyIFZOb2RlID0gZnVuY3Rpb24gVk5vZGUoYXJyYXksIG93bmVySUQpIHtcbiAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB0aGlzLm93bmVySUQgPSBvd25lcklEO1xufTtcblxuLy8gVE9ETzogc2VlbXMgbGlrZSB0aGVzZSBtZXRob2RzIGFyZSB2ZXJ5IHNpbWlsYXJcblxuVk5vZGUucHJvdG90eXBlLnJlbW92ZUJlZm9yZSA9IGZ1bmN0aW9uIHJlbW92ZUJlZm9yZSAob3duZXJJRCwgbGV2ZWwsIGluZGV4KSB7XG4gIGlmIChpbmRleCA9PT0gbGV2ZWwgPyAxIDw8IGxldmVsIDogdGhpcy5hcnJheS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICB2YXIgb3JpZ2luSW5kZXggPSAoaW5kZXggPj4+IGxldmVsKSAmIE1BU0s7XG4gIGlmIChvcmlnaW5JbmRleCA+PSB0aGlzLmFycmF5Lmxlbmd0aCkge1xuICAgIHJldHVybiBuZXcgVk5vZGUoW10sIG93bmVySUQpO1xuICB9XG4gIHZhciByZW1vdmluZ0ZpcnN0ID0gb3JpZ2luSW5kZXggPT09IDA7XG4gIHZhciBuZXdDaGlsZDtcbiAgaWYgKGxldmVsID4gMCkge1xuICAgIHZhciBvbGRDaGlsZCA9IHRoaXMuYXJyYXlbb3JpZ2luSW5kZXhdO1xuICAgIG5ld0NoaWxkID1cbiAgICAgIG9sZENoaWxkICYmIG9sZENoaWxkLnJlbW92ZUJlZm9yZShvd25lcklELCBsZXZlbCAtIFNISUZULCBpbmRleCk7XG4gICAgaWYgKG5ld0NoaWxkID09PSBvbGRDaGlsZCAmJiByZW1vdmluZ0ZpcnN0KSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1cbiAgaWYgKHJlbW92aW5nRmlyc3QgJiYgIW5ld0NoaWxkKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdmFyIGVkaXRhYmxlID0gZWRpdGFibGVWTm9kZSh0aGlzLCBvd25lcklEKTtcbiAgaWYgKCFyZW1vdmluZ0ZpcnN0KSB7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IG9yaWdpbkluZGV4OyBpaSsrKSB7XG4gICAgICBlZGl0YWJsZS5hcnJheVtpaV0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG4gIGlmIChuZXdDaGlsZCkge1xuICAgIGVkaXRhYmxlLmFycmF5W29yaWdpbkluZGV4XSA9IG5ld0NoaWxkO1xuICB9XG4gIHJldHVybiBlZGl0YWJsZTtcbn07XG5cblZOb2RlLnByb3RvdHlwZS5yZW1vdmVBZnRlciA9IGZ1bmN0aW9uIHJlbW92ZUFmdGVyIChvd25lcklELCBsZXZlbCwgaW5kZXgpIHtcbiAgaWYgKGluZGV4ID09PSAobGV2ZWwgPyAxIDw8IGxldmVsIDogMCkgfHwgdGhpcy5hcnJheS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICB2YXIgc2l6ZUluZGV4ID0gKChpbmRleCAtIDEpID4+PiBsZXZlbCkgJiBNQVNLO1xuICBpZiAoc2l6ZUluZGV4ID49IHRoaXMuYXJyYXkubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB2YXIgbmV3Q2hpbGQ7XG4gIGlmIChsZXZlbCA+IDApIHtcbiAgICB2YXIgb2xkQ2hpbGQgPSB0aGlzLmFycmF5W3NpemVJbmRleF07XG4gICAgbmV3Q2hpbGQgPVxuICAgICAgb2xkQ2hpbGQgJiYgb2xkQ2hpbGQucmVtb3ZlQWZ0ZXIob3duZXJJRCwgbGV2ZWwgLSBTSElGVCwgaW5kZXgpO1xuICAgIGlmIChuZXdDaGlsZCA9PT0gb2xkQ2hpbGQgJiYgc2l6ZUluZGV4ID09PSB0aGlzLmFycmF5Lmxlbmd0aCAtIDEpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlZGl0YWJsZSA9IGVkaXRhYmxlVk5vZGUodGhpcywgb3duZXJJRCk7XG4gIGVkaXRhYmxlLmFycmF5LnNwbGljZShzaXplSW5kZXggKyAxKTtcbiAgaWYgKG5ld0NoaWxkKSB7XG4gICAgZWRpdGFibGUuYXJyYXlbc2l6ZUluZGV4XSA9IG5ld0NoaWxkO1xuICB9XG4gIHJldHVybiBlZGl0YWJsZTtcbn07XG5cbnZhciBET05FID0ge307XG5cbmZ1bmN0aW9uIGl0ZXJhdGVMaXN0KGxpc3QsIHJldmVyc2UpIHtcbiAgdmFyIGxlZnQgPSBsaXN0Ll9vcmlnaW47XG4gIHZhciByaWdodCA9IGxpc3QuX2NhcGFjaXR5O1xuICB2YXIgdGFpbFBvcyA9IGdldFRhaWxPZmZzZXQocmlnaHQpO1xuICB2YXIgdGFpbCA9IGxpc3QuX3RhaWw7XG5cbiAgcmV0dXJuIGl0ZXJhdGVOb2RlT3JMZWFmKGxpc3QuX3Jvb3QsIGxpc3QuX2xldmVsLCAwKTtcblxuICBmdW5jdGlvbiBpdGVyYXRlTm9kZU9yTGVhZihub2RlLCBsZXZlbCwgb2Zmc2V0KSB7XG4gICAgcmV0dXJuIGxldmVsID09PSAwXG4gICAgICA/IGl0ZXJhdGVMZWFmKG5vZGUsIG9mZnNldClcbiAgICAgIDogaXRlcmF0ZU5vZGUobm9kZSwgbGV2ZWwsIG9mZnNldCk7XG4gIH1cblxuICBmdW5jdGlvbiBpdGVyYXRlTGVhZihub2RlLCBvZmZzZXQpIHtcbiAgICB2YXIgYXJyYXkgPSBvZmZzZXQgPT09IHRhaWxQb3MgPyB0YWlsICYmIHRhaWwuYXJyYXkgOiBub2RlICYmIG5vZGUuYXJyYXk7XG4gICAgdmFyIGZyb20gPSBvZmZzZXQgPiBsZWZ0ID8gMCA6IGxlZnQgLSBvZmZzZXQ7XG4gICAgdmFyIHRvID0gcmlnaHQgLSBvZmZzZXQ7XG4gICAgaWYgKHRvID4gU0laRSkge1xuICAgICAgdG8gPSBTSVpFO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGZyb20gPT09IHRvKSB7XG4gICAgICAgIHJldHVybiBET05FO1xuICAgICAgfVxuICAgICAgdmFyIGlkeCA9IHJldmVyc2UgPyAtLXRvIDogZnJvbSsrO1xuICAgICAgcmV0dXJuIGFycmF5ICYmIGFycmF5W2lkeF07XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGl0ZXJhdGVOb2RlKG5vZGUsIGxldmVsLCBvZmZzZXQpIHtcbiAgICB2YXIgdmFsdWVzO1xuICAgIHZhciBhcnJheSA9IG5vZGUgJiYgbm9kZS5hcnJheTtcbiAgICB2YXIgZnJvbSA9IG9mZnNldCA+IGxlZnQgPyAwIDogKGxlZnQgLSBvZmZzZXQpID4+IGxldmVsO1xuICAgIHZhciB0byA9ICgocmlnaHQgLSBvZmZzZXQpID4+IGxldmVsKSArIDE7XG4gICAgaWYgKHRvID4gU0laRSkge1xuICAgICAgdG8gPSBTSVpFO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgaWYgKHZhbHVlcykge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IHZhbHVlcygpO1xuICAgICAgICAgIGlmICh2YWx1ZSAhPT0gRE9ORSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YWx1ZXMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmcm9tID09PSB0bykge1xuICAgICAgICAgIHJldHVybiBET05FO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpZHggPSByZXZlcnNlID8gLS10byA6IGZyb20rKztcbiAgICAgICAgdmFsdWVzID0gaXRlcmF0ZU5vZGVPckxlYWYoXG4gICAgICAgICAgYXJyYXkgJiYgYXJyYXlbaWR4XSxcbiAgICAgICAgICBsZXZlbCAtIFNISUZULFxuICAgICAgICAgIG9mZnNldCArIChpZHggPDwgbGV2ZWwpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYWtlTGlzdChvcmlnaW4sIGNhcGFjaXR5LCBsZXZlbCwgcm9vdCwgdGFpbCwgb3duZXJJRCwgaGFzaCkge1xuICB2YXIgbGlzdCA9IE9iamVjdC5jcmVhdGUoTGlzdFByb3RvdHlwZSk7XG4gIGxpc3Quc2l6ZSA9IGNhcGFjaXR5IC0gb3JpZ2luO1xuICBsaXN0Ll9vcmlnaW4gPSBvcmlnaW47XG4gIGxpc3QuX2NhcGFjaXR5ID0gY2FwYWNpdHk7XG4gIGxpc3QuX2xldmVsID0gbGV2ZWw7XG4gIGxpc3QuX3Jvb3QgPSByb290O1xuICBsaXN0Ll90YWlsID0gdGFpbDtcbiAgbGlzdC5fX293bmVySUQgPSBvd25lcklEO1xuICBsaXN0Ll9faGFzaCA9IGhhc2g7XG4gIGxpc3QuX19hbHRlcmVkID0gZmFsc2U7XG4gIHJldHVybiBsaXN0O1xufVxuXG52YXIgRU1QVFlfTElTVDtcbmZ1bmN0aW9uIGVtcHR5TGlzdCgpIHtcbiAgcmV0dXJuIEVNUFRZX0xJU1QgfHwgKEVNUFRZX0xJU1QgPSBtYWtlTGlzdCgwLCAwLCBTSElGVCkpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVMaXN0KGxpc3QsIGluZGV4LCB2YWx1ZSkge1xuICBpbmRleCA9IHdyYXBJbmRleChsaXN0LCBpbmRleCk7XG5cbiAgaWYgKGluZGV4ICE9PSBpbmRleCkge1xuICAgIHJldHVybiBsaXN0O1xuICB9XG5cbiAgaWYgKGluZGV4ID49IGxpc3Quc2l6ZSB8fCBpbmRleCA8IDApIHtcbiAgICByZXR1cm4gbGlzdC53aXRoTXV0YXRpb25zKGZ1bmN0aW9uIChsaXN0KSB7XG4gICAgICBpbmRleCA8IDBcbiAgICAgICAgPyBzZXRMaXN0Qm91bmRzKGxpc3QsIGluZGV4KS5zZXQoMCwgdmFsdWUpXG4gICAgICAgIDogc2V0TGlzdEJvdW5kcyhsaXN0LCAwLCBpbmRleCArIDEpLnNldChpbmRleCwgdmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgaW5kZXggKz0gbGlzdC5fb3JpZ2luO1xuXG4gIHZhciBuZXdUYWlsID0gbGlzdC5fdGFpbDtcbiAgdmFyIG5ld1Jvb3QgPSBsaXN0Ll9yb290O1xuICB2YXIgZGlkQWx0ZXIgPSBNYWtlUmVmKCk7XG4gIGlmIChpbmRleCA+PSBnZXRUYWlsT2Zmc2V0KGxpc3QuX2NhcGFjaXR5KSkge1xuICAgIG5ld1RhaWwgPSB1cGRhdGVWTm9kZShuZXdUYWlsLCBsaXN0Ll9fb3duZXJJRCwgMCwgaW5kZXgsIHZhbHVlLCBkaWRBbHRlcik7XG4gIH0gZWxzZSB7XG4gICAgbmV3Um9vdCA9IHVwZGF0ZVZOb2RlKFxuICAgICAgbmV3Um9vdCxcbiAgICAgIGxpc3QuX19vd25lcklELFxuICAgICAgbGlzdC5fbGV2ZWwsXG4gICAgICBpbmRleCxcbiAgICAgIHZhbHVlLFxuICAgICAgZGlkQWx0ZXJcbiAgICApO1xuICB9XG5cbiAgaWYgKCFkaWRBbHRlci52YWx1ZSkge1xuICAgIHJldHVybiBsaXN0O1xuICB9XG5cbiAgaWYgKGxpc3QuX19vd25lcklEKSB7XG4gICAgbGlzdC5fcm9vdCA9IG5ld1Jvb3Q7XG4gICAgbGlzdC5fdGFpbCA9IG5ld1RhaWw7XG4gICAgbGlzdC5fX2hhc2ggPSB1bmRlZmluZWQ7XG4gICAgbGlzdC5fX2FsdGVyZWQgPSB0cnVlO1xuICAgIHJldHVybiBsaXN0O1xuICB9XG4gIHJldHVybiBtYWtlTGlzdChsaXN0Ll9vcmlnaW4sIGxpc3QuX2NhcGFjaXR5LCBsaXN0Ll9sZXZlbCwgbmV3Um9vdCwgbmV3VGFpbCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVZOb2RlKG5vZGUsIG93bmVySUQsIGxldmVsLCBpbmRleCwgdmFsdWUsIGRpZEFsdGVyKSB7XG4gIHZhciBpZHggPSAoaW5kZXggPj4+IGxldmVsKSAmIE1BU0s7XG4gIHZhciBub2RlSGFzID0gbm9kZSAmJiBpZHggPCBub2RlLmFycmF5Lmxlbmd0aDtcbiAgaWYgKCFub2RlSGFzICYmIHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZhciBuZXdOb2RlO1xuXG4gIGlmIChsZXZlbCA+IDApIHtcbiAgICB2YXIgbG93ZXJOb2RlID0gbm9kZSAmJiBub2RlLmFycmF5W2lkeF07XG4gICAgdmFyIG5ld0xvd2VyTm9kZSA9IHVwZGF0ZVZOb2RlKFxuICAgICAgbG93ZXJOb2RlLFxuICAgICAgb3duZXJJRCxcbiAgICAgIGxldmVsIC0gU0hJRlQsXG4gICAgICBpbmRleCxcbiAgICAgIHZhbHVlLFxuICAgICAgZGlkQWx0ZXJcbiAgICApO1xuICAgIGlmIChuZXdMb3dlck5vZGUgPT09IGxvd2VyTm9kZSkge1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIG5ld05vZGUgPSBlZGl0YWJsZVZOb2RlKG5vZGUsIG93bmVySUQpO1xuICAgIG5ld05vZGUuYXJyYXlbaWR4XSA9IG5ld0xvd2VyTm9kZTtcbiAgICByZXR1cm4gbmV3Tm9kZTtcbiAgfVxuXG4gIGlmIChub2RlSGFzICYmIG5vZGUuYXJyYXlbaWR4XSA9PT0gdmFsdWUpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIGlmIChkaWRBbHRlcikge1xuICAgIFNldFJlZihkaWRBbHRlcik7XG4gIH1cblxuICBuZXdOb2RlID0gZWRpdGFibGVWTm9kZShub2RlLCBvd25lcklEKTtcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgaWR4ID09PSBuZXdOb2RlLmFycmF5Lmxlbmd0aCAtIDEpIHtcbiAgICBuZXdOb2RlLmFycmF5LnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIG5ld05vZGUuYXJyYXlbaWR4XSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiBuZXdOb2RlO1xufVxuXG5mdW5jdGlvbiBlZGl0YWJsZVZOb2RlKG5vZGUsIG93bmVySUQpIHtcbiAgaWYgKG93bmVySUQgJiYgbm9kZSAmJiBvd25lcklEID09PSBub2RlLm93bmVySUQpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuICByZXR1cm4gbmV3IFZOb2RlKG5vZGUgPyBub2RlLmFycmF5LnNsaWNlKCkgOiBbXSwgb3duZXJJRCk7XG59XG5cbmZ1bmN0aW9uIGxpc3ROb2RlRm9yKGxpc3QsIHJhd0luZGV4KSB7XG4gIGlmIChyYXdJbmRleCA+PSBnZXRUYWlsT2Zmc2V0KGxpc3QuX2NhcGFjaXR5KSkge1xuICAgIHJldHVybiBsaXN0Ll90YWlsO1xuICB9XG4gIGlmIChyYXdJbmRleCA8IDEgPDwgKGxpc3QuX2xldmVsICsgU0hJRlQpKSB7XG4gICAgdmFyIG5vZGUgPSBsaXN0Ll9yb290O1xuICAgIHZhciBsZXZlbCA9IGxpc3QuX2xldmVsO1xuICAgIHdoaWxlIChub2RlICYmIGxldmVsID4gMCkge1xuICAgICAgbm9kZSA9IG5vZGUuYXJyYXlbKHJhd0luZGV4ID4+PiBsZXZlbCkgJiBNQVNLXTtcbiAgICAgIGxldmVsIC09IFNISUZUO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRMaXN0Qm91bmRzKGxpc3QsIGJlZ2luLCBlbmQpIHtcbiAgLy8gU2FuaXRpemUgYmVnaW4gJiBlbmQgdXNpbmcgdGhpcyBzaG9ydGhhbmQgZm9yIFRvSW50MzIoYXJndW1lbnQpXG4gIC8vIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy10b2ludDMyXG4gIGlmIChiZWdpbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgYmVnaW4gfD0gMDtcbiAgfVxuICBpZiAoZW5kICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbmQgfD0gMDtcbiAgfVxuICB2YXIgb3duZXIgPSBsaXN0Ll9fb3duZXJJRCB8fCBuZXcgT3duZXJJRCgpO1xuICB2YXIgb2xkT3JpZ2luID0gbGlzdC5fb3JpZ2luO1xuICB2YXIgb2xkQ2FwYWNpdHkgPSBsaXN0Ll9jYXBhY2l0eTtcbiAgdmFyIG5ld09yaWdpbiA9IG9sZE9yaWdpbiArIGJlZ2luO1xuICB2YXIgbmV3Q2FwYWNpdHkgPVxuICAgIGVuZCA9PT0gdW5kZWZpbmVkXG4gICAgICA/IG9sZENhcGFjaXR5XG4gICAgICA6IGVuZCA8IDBcbiAgICAgICAgPyBvbGRDYXBhY2l0eSArIGVuZFxuICAgICAgICA6IG9sZE9yaWdpbiArIGVuZDtcbiAgaWYgKG5ld09yaWdpbiA9PT0gb2xkT3JpZ2luICYmIG5ld0NhcGFjaXR5ID09PSBvbGRDYXBhY2l0eSkge1xuICAgIHJldHVybiBsaXN0O1xuICB9XG5cbiAgLy8gSWYgaXQncyBnb2luZyB0byBlbmQgYWZ0ZXIgaXQgc3RhcnRzLCBpdCdzIGVtcHR5LlxuICBpZiAobmV3T3JpZ2luID49IG5ld0NhcGFjaXR5KSB7XG4gICAgcmV0dXJuIGxpc3QuY2xlYXIoKTtcbiAgfVxuXG4gIHZhciBuZXdMZXZlbCA9IGxpc3QuX2xldmVsO1xuICB2YXIgbmV3Um9vdCA9IGxpc3QuX3Jvb3Q7XG5cbiAgLy8gTmV3IG9yaWdpbiBtaWdodCBuZWVkIGNyZWF0aW5nIGEgaGlnaGVyIHJvb3QuXG4gIHZhciBvZmZzZXRTaGlmdCA9IDA7XG4gIHdoaWxlIChuZXdPcmlnaW4gKyBvZmZzZXRTaGlmdCA8IDApIHtcbiAgICBuZXdSb290ID0gbmV3IFZOb2RlKFxuICAgICAgbmV3Um9vdCAmJiBuZXdSb290LmFycmF5Lmxlbmd0aCA/IFt1bmRlZmluZWQsIG5ld1Jvb3RdIDogW10sXG4gICAgICBvd25lclxuICAgICk7XG4gICAgbmV3TGV2ZWwgKz0gU0hJRlQ7XG4gICAgb2Zmc2V0U2hpZnQgKz0gMSA8PCBuZXdMZXZlbDtcbiAgfVxuICBpZiAob2Zmc2V0U2hpZnQpIHtcbiAgICBuZXdPcmlnaW4gKz0gb2Zmc2V0U2hpZnQ7XG4gICAgb2xkT3JpZ2luICs9IG9mZnNldFNoaWZ0O1xuICAgIG5ld0NhcGFjaXR5ICs9IG9mZnNldFNoaWZ0O1xuICAgIG9sZENhcGFjaXR5ICs9IG9mZnNldFNoaWZ0O1xuICB9XG5cbiAgdmFyIG9sZFRhaWxPZmZzZXQgPSBnZXRUYWlsT2Zmc2V0KG9sZENhcGFjaXR5KTtcbiAgdmFyIG5ld1RhaWxPZmZzZXQgPSBnZXRUYWlsT2Zmc2V0KG5ld0NhcGFjaXR5KTtcblxuICAvLyBOZXcgc2l6ZSBtaWdodCBuZWVkIGNyZWF0aW5nIGEgaGlnaGVyIHJvb3QuXG4gIHdoaWxlIChuZXdUYWlsT2Zmc2V0ID49IDEgPDwgKG5ld0xldmVsICsgU0hJRlQpKSB7XG4gICAgbmV3Um9vdCA9IG5ldyBWTm9kZShcbiAgICAgIG5ld1Jvb3QgJiYgbmV3Um9vdC5hcnJheS5sZW5ndGggPyBbbmV3Um9vdF0gOiBbXSxcbiAgICAgIG93bmVyXG4gICAgKTtcbiAgICBuZXdMZXZlbCArPSBTSElGVDtcbiAgfVxuXG4gIC8vIExvY2F0ZSBvciBjcmVhdGUgdGhlIG5ldyB0YWlsLlxuICB2YXIgb2xkVGFpbCA9IGxpc3QuX3RhaWw7XG4gIHZhciBuZXdUYWlsID1cbiAgICBuZXdUYWlsT2Zmc2V0IDwgb2xkVGFpbE9mZnNldFxuICAgICAgPyBsaXN0Tm9kZUZvcihsaXN0LCBuZXdDYXBhY2l0eSAtIDEpXG4gICAgICA6IG5ld1RhaWxPZmZzZXQgPiBvbGRUYWlsT2Zmc2V0XG4gICAgICAgID8gbmV3IFZOb2RlKFtdLCBvd25lcilcbiAgICAgICAgOiBvbGRUYWlsO1xuXG4gIC8vIE1lcmdlIFRhaWwgaW50byB0cmVlLlxuICBpZiAoXG4gICAgb2xkVGFpbCAmJlxuICAgIG5ld1RhaWxPZmZzZXQgPiBvbGRUYWlsT2Zmc2V0ICYmXG4gICAgbmV3T3JpZ2luIDwgb2xkQ2FwYWNpdHkgJiZcbiAgICBvbGRUYWlsLmFycmF5Lmxlbmd0aFxuICApIHtcbiAgICBuZXdSb290ID0gZWRpdGFibGVWTm9kZShuZXdSb290LCBvd25lcik7XG4gICAgdmFyIG5vZGUgPSBuZXdSb290O1xuICAgIGZvciAodmFyIGxldmVsID0gbmV3TGV2ZWw7IGxldmVsID4gU0hJRlQ7IGxldmVsIC09IFNISUZUKSB7XG4gICAgICB2YXIgaWR4ID0gKG9sZFRhaWxPZmZzZXQgPj4+IGxldmVsKSAmIE1BU0s7XG4gICAgICBub2RlID0gbm9kZS5hcnJheVtpZHhdID0gZWRpdGFibGVWTm9kZShub2RlLmFycmF5W2lkeF0sIG93bmVyKTtcbiAgICB9XG4gICAgbm9kZS5hcnJheVsob2xkVGFpbE9mZnNldCA+Pj4gU0hJRlQpICYgTUFTS10gPSBvbGRUYWlsO1xuICB9XG5cbiAgLy8gSWYgdGhlIHNpemUgaGFzIGJlZW4gcmVkdWNlZCwgdGhlcmUncyBhIGNoYW5jZSB0aGUgdGFpbCBuZWVkcyB0byBiZSB0cmltbWVkLlxuICBpZiAobmV3Q2FwYWNpdHkgPCBvbGRDYXBhY2l0eSkge1xuICAgIG5ld1RhaWwgPSBuZXdUYWlsICYmIG5ld1RhaWwucmVtb3ZlQWZ0ZXIob3duZXIsIDAsIG5ld0NhcGFjaXR5KTtcbiAgfVxuXG4gIC8vIElmIHRoZSBuZXcgb3JpZ2luIGlzIHdpdGhpbiB0aGUgdGFpbCwgdGhlbiB3ZSBkbyBub3QgbmVlZCBhIHJvb3QuXG4gIGlmIChuZXdPcmlnaW4gPj0gbmV3VGFpbE9mZnNldCkge1xuICAgIG5ld09yaWdpbiAtPSBuZXdUYWlsT2Zmc2V0O1xuICAgIG5ld0NhcGFjaXR5IC09IG5ld1RhaWxPZmZzZXQ7XG4gICAgbmV3TGV2ZWwgPSBTSElGVDtcbiAgICBuZXdSb290ID0gbnVsbDtcbiAgICBuZXdUYWlsID0gbmV3VGFpbCAmJiBuZXdUYWlsLnJlbW92ZUJlZm9yZShvd25lciwgMCwgbmV3T3JpZ2luKTtcblxuICAgIC8vIE90aGVyd2lzZSwgaWYgdGhlIHJvb3QgaGFzIGJlZW4gdHJpbW1lZCwgZ2FyYmFnZSBjb2xsZWN0LlxuICB9IGVsc2UgaWYgKG5ld09yaWdpbiA+IG9sZE9yaWdpbiB8fCBuZXdUYWlsT2Zmc2V0IDwgb2xkVGFpbE9mZnNldCkge1xuICAgIG9mZnNldFNoaWZ0ID0gMDtcblxuICAgIC8vIElkZW50aWZ5IHRoZSBuZXcgdG9wIHJvb3Qgbm9kZSBvZiB0aGUgc3VidHJlZSBvZiB0aGUgb2xkIHJvb3QuXG4gICAgd2hpbGUgKG5ld1Jvb3QpIHtcbiAgICAgIHZhciBiZWdpbkluZGV4ID0gKG5ld09yaWdpbiA+Pj4gbmV3TGV2ZWwpICYgTUFTSztcbiAgICAgIGlmICgoYmVnaW5JbmRleCAhPT0gbmV3VGFpbE9mZnNldCA+Pj4gbmV3TGV2ZWwpICYgTUFTSykge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChiZWdpbkluZGV4KSB7XG4gICAgICAgIG9mZnNldFNoaWZ0ICs9ICgxIDw8IG5ld0xldmVsKSAqIGJlZ2luSW5kZXg7XG4gICAgICB9XG4gICAgICBuZXdMZXZlbCAtPSBTSElGVDtcbiAgICAgIG5ld1Jvb3QgPSBuZXdSb290LmFycmF5W2JlZ2luSW5kZXhdO1xuICAgIH1cblxuICAgIC8vIFRyaW0gdGhlIG5ldyBzaWRlcyBvZiB0aGUgbmV3IHJvb3QuXG4gICAgaWYgKG5ld1Jvb3QgJiYgbmV3T3JpZ2luID4gb2xkT3JpZ2luKSB7XG4gICAgICBuZXdSb290ID0gbmV3Um9vdC5yZW1vdmVCZWZvcmUob3duZXIsIG5ld0xldmVsLCBuZXdPcmlnaW4gLSBvZmZzZXRTaGlmdCk7XG4gICAgfVxuICAgIGlmIChuZXdSb290ICYmIG5ld1RhaWxPZmZzZXQgPCBvbGRUYWlsT2Zmc2V0KSB7XG4gICAgICBuZXdSb290ID0gbmV3Um9vdC5yZW1vdmVBZnRlcihcbiAgICAgICAgb3duZXIsXG4gICAgICAgIG5ld0xldmVsLFxuICAgICAgICBuZXdUYWlsT2Zmc2V0IC0gb2Zmc2V0U2hpZnRcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChvZmZzZXRTaGlmdCkge1xuICAgICAgbmV3T3JpZ2luIC09IG9mZnNldFNoaWZ0O1xuICAgICAgbmV3Q2FwYWNpdHkgLT0gb2Zmc2V0U2hpZnQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKGxpc3QuX19vd25lcklEKSB7XG4gICAgbGlzdC5zaXplID0gbmV3Q2FwYWNpdHkgLSBuZXdPcmlnaW47XG4gICAgbGlzdC5fb3JpZ2luID0gbmV3T3JpZ2luO1xuICAgIGxpc3QuX2NhcGFjaXR5ID0gbmV3Q2FwYWNpdHk7XG4gICAgbGlzdC5fbGV2ZWwgPSBuZXdMZXZlbDtcbiAgICBsaXN0Ll9yb290ID0gbmV3Um9vdDtcbiAgICBsaXN0Ll90YWlsID0gbmV3VGFpbDtcbiAgICBsaXN0Ll9faGFzaCA9IHVuZGVmaW5lZDtcbiAgICBsaXN0Ll9fYWx0ZXJlZCA9IHRydWU7XG4gICAgcmV0dXJuIGxpc3Q7XG4gIH1cbiAgcmV0dXJuIG1ha2VMaXN0KG5ld09yaWdpbiwgbmV3Q2FwYWNpdHksIG5ld0xldmVsLCBuZXdSb290LCBuZXdUYWlsKTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFpbE9mZnNldChzaXplKSB7XG4gIHJldHVybiBzaXplIDwgU0laRSA/IDAgOiAoKHNpemUgLSAxKSA+Pj4gU0hJRlQpIDw8IFNISUZUO1xufVxuXG52YXIgT3JkZXJlZE1hcCA9IC8qQF9fUFVSRV9fKi8oZnVuY3Rpb24gKE1hcCQkMSkge1xuICBmdW5jdGlvbiBPcmRlcmVkTWFwKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcbiAgICAgID8gZW1wdHlPcmRlcmVkTWFwKClcbiAgICAgIDogaXNPcmRlcmVkTWFwKHZhbHVlKVxuICAgICAgICA/IHZhbHVlXG4gICAgICAgIDogZW1wdHlPcmRlcmVkTWFwKCkud2l0aE11dGF0aW9ucyhmdW5jdGlvbiAobWFwKSB7XG4gICAgICAgICAgICB2YXIgaXRlciA9IEtleWVkQ29sbGVjdGlvbih2YWx1ZSk7XG4gICAgICAgICAgICBhc3NlcnROb3RJbmZpbml0ZShpdGVyLnNpemUpO1xuICAgICAgICAgICAgaXRlci5mb3JFYWNoKGZ1bmN0aW9uICh2LCBrKSB7IHJldHVybiBtYXAuc2V0KGssIHYpOyB9KTtcbiAgICAgICAgICB9KTtcbiAgfVxuXG4gIGlmICggTWFwJCQxICkgT3JkZXJlZE1hcC5fX3Byb3RvX18gPSBNYXAkJDE7XG4gIE9yZGVyZWRNYXAucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggTWFwJCQxICYmIE1hcCQkMS5wcm90b3R5cGUgKTtcbiAgT3JkZXJlZE1hcC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBPcmRlcmVkTWFwO1xuXG4gIE9yZGVyZWRNYXAub2YgPSBmdW5jdGlvbiBvZiAoLyouLi52YWx1ZXMqLykge1xuICAgIHJldHVybiB0aGlzKGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgT3JkZXJlZE1hcC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX190b1N0cmluZygnT3JkZXJlZE1hcCB7JywgJ30nKTtcbiAgfTtcblxuICAvLyBAcHJhZ21hIEFjY2Vzc1xuXG4gIE9yZGVyZWRNYXAucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCAoaywgbm90U2V0VmFsdWUpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLl9tYXAuZ2V0KGspO1xuICAgIHJldHVybiBpbmRleCAhPT0gdW5kZWZpbmVkID8gdGhpcy5fbGlzdC5nZXQoaW5kZXgpWzFdIDogbm90U2V0VmFsdWU7XG4gIH07XG5cbiAgLy8gQHByYWdtYSBNb2RpZmljYXRpb25cblxuICBPcmRlcmVkTWFwLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyICgpIHtcbiAgICBpZiAodGhpcy5zaXplID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX19vd25lcklEKSB7XG4gICAgICB0aGlzLnNpemUgPSAwO1xuICAgICAgdGhpcy5fbWFwLmNsZWFyKCk7XG4gICAgICB0aGlzLl9saXN0LmNsZWFyKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIGVtcHR5T3JkZXJlZE1hcCgpO1xuICB9O1xuXG4gIE9yZGVyZWRNYXAucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldCAoaywgdikge1xuICAgIHJldHVybiB1cGRhdGVPcmRlcmVkTWFwKHRoaXMsIGssIHYpO1xuICB9O1xuXG4gIE9yZGVyZWRNYXAucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSAoaykge1xuICAgIHJldHVybiB1cGRhdGVPcmRlcmVkTWFwKHRoaXMsIGssIE5PVF9TRVQpO1xuICB9O1xuXG4gIE9yZGVyZWRNYXAucHJvdG90eXBlLndhc0FsdGVyZWQgPSBmdW5jdGlvbiB3YXNBbHRlcmVkICgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFwLndhc0FsdGVyZWQoKSB8fCB0aGlzLl9saXN0Lndhc0FsdGVyZWQoKTtcbiAgfTtcblxuICBPcmRlcmVkTWFwLnByb3RvdHlwZS5fX2l0ZXJhdGUgPSBmdW5jdGlvbiBfX2l0ZXJhdGUgKGZuLCByZXZlcnNlKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICByZXR1cm4gdGhpcy5fbGlzdC5fX2l0ZXJhdGUoXG4gICAgICBmdW5jdGlvbiAoZW50cnkpIHsgcmV0dXJuIGVudHJ5ICYmIGZuKGVudHJ5WzFdLCBlbnRyeVswXSwgdGhpcyQxKTsgfSxcbiAgICAgIHJldmVyc2VcbiAgICApO1xuICB9O1xuXG4gIE9yZGVyZWRNYXAucHJvdG90eXBlLl9faXRlcmF0b3IgPSBmdW5jdGlvbiBfX2l0ZXJhdG9yICh0eXBlLCByZXZlcnNlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xpc3QuZnJvbUVudHJ5U2VxKCkuX19pdGVyYXRvcih0eXBlLCByZXZlcnNlKTtcbiAgfTtcblxuICBPcmRlcmVkTWFwLnByb3RvdHlwZS5fX2Vuc3VyZU93bmVyID0gZnVuY3Rpb24gX19lbnN1cmVPd25lciAob3duZXJJRCkge1xuICAgIGlmIChvd25lcklEID09PSB0aGlzLl9fb3duZXJJRCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHZhciBuZXdNYXAgPSB0aGlzLl9tYXAuX19lbnN1cmVPd25lcihvd25lcklEKTtcbiAgICB2YXIgbmV3TGlzdCA9IHRoaXMuX2xpc3QuX19lbnN1cmVPd25lcihvd25lcklEKTtcbiAgICBpZiAoIW93bmVySUQpIHtcbiAgICAgIGlmICh0aGlzLnNpemUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGVtcHR5T3JkZXJlZE1hcCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX293bmVySUQgPSBvd25lcklEO1xuICAgICAgdGhpcy5fbWFwID0gbmV3TWFwO1xuICAgICAgdGhpcy5fbGlzdCA9IG5ld0xpc3Q7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIG1ha2VPcmRlcmVkTWFwKG5ld01hcCwgbmV3TGlzdCwgb3duZXJJRCwgdGhpcy5fX2hhc2gpO1xuICB9O1xuXG4gIHJldHVybiBPcmRlcmVkTWFwO1xufShNYXApKTtcblxuT3JkZXJlZE1hcC5pc09yZGVyZWRNYXAgPSBpc09yZGVyZWRNYXA7XG5cbk9yZGVyZWRNYXAucHJvdG90eXBlW0lTX09SREVSRURfU1lNQk9MXSA9IHRydWU7XG5PcmRlcmVkTWFwLnByb3RvdHlwZVtERUxFVEVdID0gT3JkZXJlZE1hcC5wcm90b3R5cGUucmVtb3ZlO1xuXG5mdW5jdGlvbiBtYWtlT3JkZXJlZE1hcChtYXAsIGxpc3QsIG93bmVySUQsIGhhc2gpIHtcbiAgdmFyIG9tYXAgPSBPYmplY3QuY3JlYXRlKE9yZGVyZWRNYXAucHJvdG90eXBlKTtcbiAgb21hcC5zaXplID0gbWFwID8gbWFwLnNpemUgOiAwO1xuICBvbWFwLl9tYXAgPSBtYXA7XG4gIG9tYXAuX2xpc3QgPSBsaXN0O1xuICBvbWFwLl9fb3duZXJJRCA9IG93bmVySUQ7XG4gIG9tYXAuX19oYXNoID0gaGFzaDtcbiAgcmV0dXJuIG9tYXA7XG59XG5cbnZhciBFTVBUWV9PUkRFUkVEX01BUDtcbmZ1bmN0aW9uIGVtcHR5T3JkZXJlZE1hcCgpIHtcbiAgcmV0dXJuIChcbiAgICBFTVBUWV9PUkRFUkVEX01BUCB8fFxuICAgIChFTVBUWV9PUkRFUkVEX01BUCA9IG1ha2VPcmRlcmVkTWFwKGVtcHR5TWFwKCksIGVtcHR5TGlzdCgpKSlcbiAgKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlT3JkZXJlZE1hcChvbWFwLCBrLCB2KSB7XG4gIHZhciBtYXAgPSBvbWFwLl9tYXA7XG4gIHZhciBsaXN0ID0gb21hcC5fbGlzdDtcbiAgdmFyIGkgPSBtYXAuZ2V0KGspO1xuICB2YXIgaGFzID0gaSAhPT0gdW5kZWZpbmVkO1xuICB2YXIgbmV3TWFwO1xuICB2YXIgbmV3TGlzdDtcbiAgaWYgKHYgPT09IE5PVF9TRVQpIHtcbiAgICAvLyByZW1vdmVkXG4gICAgaWYgKCFoYXMpIHtcbiAgICAgIHJldHVybiBvbWFwO1xuICAgIH1cbiAgICBpZiAobGlzdC5zaXplID49IFNJWkUgJiYgbGlzdC5zaXplID49IG1hcC5zaXplICogMikge1xuICAgICAgbmV3TGlzdCA9IGxpc3QuZmlsdGVyKGZ1bmN0aW9uIChlbnRyeSwgaWR4KSB7IHJldHVybiBlbnRyeSAhPT0gdW5kZWZpbmVkICYmIGkgIT09IGlkeDsgfSk7XG4gICAgICBuZXdNYXAgPSBuZXdMaXN0XG4gICAgICAgIC50b0tleWVkU2VxKClcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoZW50cnkpIHsgcmV0dXJuIGVudHJ5WzBdOyB9KVxuICAgICAgICAuZmxpcCgpXG4gICAgICAgIC50b01hcCgpO1xuICAgICAgaWYgKG9tYXAuX19vd25lcklEKSB7XG4gICAgICAgIG5ld01hcC5fX293bmVySUQgPSBuZXdMaXN0Ll9fb3duZXJJRCA9IG9tYXAuX19vd25lcklEO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdNYXAgPSBtYXAucmVtb3ZlKGspO1xuICAgICAgbmV3TGlzdCA9IGkgPT09IGxpc3Quc2l6ZSAtIDEgPyBsaXN0LnBvcCgpIDogbGlzdC5zZXQoaSwgdW5kZWZpbmVkKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaGFzKSB7XG4gICAgaWYgKHYgPT09IGxpc3QuZ2V0KGkpWzFdKSB7XG4gICAgICByZXR1cm4gb21hcDtcbiAgICB9XG4gICAgbmV3TWFwID0gbWFwO1xuICAgIG5ld0xpc3QgPSBsaXN0LnNldChpLCBbaywgdl0pO1xuICB9IGVsc2Uge1xuICAgIG5ld01hcCA9IG1hcC5zZXQoaywgbGlzdC5zaXplKTtcbiAgICBuZXdMaXN0ID0gbGlzdC5zZXQobGlzdC5zaXplLCBbaywgdl0pO1xuICB9XG4gIGlmIChvbWFwLl9fb3duZXJJRCkge1xuICAgIG9tYXAuc2l6ZSA9IG5ld01hcC5zaXplO1xuICAgIG9tYXAuX21hcCA9IG5ld01hcDtcbiAgICBvbWFwLl9saXN0ID0gbmV3TGlzdDtcbiAgICBvbWFwLl9faGFzaCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gb21hcDtcbiAgfVxuICByZXR1cm4gbWFrZU9yZGVyZWRNYXAobmV3TWFwLCBuZXdMaXN0KTtcbn1cblxudmFyIElTX1NUQUNLX1NZTUJPTCA9ICdAQF9fSU1NVVRBQkxFX1NUQUNLX19AQCc7XG5cbmZ1bmN0aW9uIGlzU3RhY2sobWF5YmVTdGFjaykge1xuICByZXR1cm4gQm9vbGVhbihtYXliZVN0YWNrICYmIG1heWJlU3RhY2tbSVNfU1RBQ0tfU1lNQk9MXSk7XG59XG5cbnZhciBTdGFjayA9IC8qQF9fUFVSRV9fKi8oZnVuY3Rpb24gKEluZGV4ZWRDb2xsZWN0aW9uJCQxKSB7XG4gIGZ1bmN0aW9uIFN0YWNrKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcbiAgICAgID8gZW1wdHlTdGFjaygpXG4gICAgICA6IGlzU3RhY2sodmFsdWUpXG4gICAgICAgID8gdmFsdWVcbiAgICAgICAgOiBlbXB0eVN0YWNrKCkucHVzaEFsbCh2YWx1ZSk7XG4gIH1cblxuICBpZiAoIEluZGV4ZWRDb2xsZWN0aW9uJCQxICkgU3RhY2suX19wcm90b19fID0gSW5kZXhlZENvbGxlY3Rpb24kJDE7XG4gIFN0YWNrLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEluZGV4ZWRDb2xsZWN0aW9uJCQxICYmIEluZGV4ZWRDb2xsZWN0aW9uJCQxLnByb3RvdHlwZSApO1xuICBTdGFjay5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTdGFjaztcblxuICBTdGFjay5vZiA9IGZ1bmN0aW9uIG9mICgvKi4uLnZhbHVlcyovKSB7XG4gICAgcmV0dXJuIHRoaXMoYXJndW1lbnRzKTtcbiAgfTtcblxuICBTdGFjay5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX190b1N0cmluZygnU3RhY2sgWycsICddJyk7XG4gIH07XG5cbiAgLy8gQHByYWdtYSBBY2Nlc3NcblxuICBTdGFjay5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0IChpbmRleCwgbm90U2V0VmFsdWUpIHtcbiAgICB2YXIgaGVhZCA9IHRoaXMuX2hlYWQ7XG4gICAgaW5kZXggPSB3cmFwSW5kZXgodGhpcywgaW5kZXgpO1xuICAgIHdoaWxlIChoZWFkICYmIGluZGV4LS0pIHtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgfVxuICAgIHJldHVybiBoZWFkID8gaGVhZC52YWx1ZSA6IG5vdFNldFZhbHVlO1xuICB9O1xuXG4gIFN0YWNrLnByb3RvdHlwZS5wZWVrID0gZnVuY3Rpb24gcGVlayAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWQgJiYgdGhpcy5faGVhZC52YWx1ZTtcbiAgfTtcblxuICAvLyBAcHJhZ21hIE1vZGlmaWNhdGlvblxuXG4gIFN0YWNrLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gcHVzaCAoLyouLi52YWx1ZXMqLykge1xuICAgIHZhciBhcmd1bWVudHMkMSA9IGFyZ3VtZW50cztcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdmFyIG5ld1NpemUgPSB0aGlzLnNpemUgKyBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBoZWFkID0gdGhpcy5faGVhZDtcbiAgICBmb3IgKHZhciBpaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpaSA+PSAwOyBpaS0tKSB7XG4gICAgICBoZWFkID0ge1xuICAgICAgICB2YWx1ZTogYXJndW1lbnRzJDFbaWldLFxuICAgICAgICBuZXh0OiBoZWFkLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX19vd25lcklEKSB7XG4gICAgICB0aGlzLnNpemUgPSBuZXdTaXplO1xuICAgICAgdGhpcy5faGVhZCA9IGhlYWQ7XG4gICAgICB0aGlzLl9faGFzaCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX19hbHRlcmVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gbWFrZVN0YWNrKG5ld1NpemUsIGhlYWQpO1xuICB9O1xuXG4gIFN0YWNrLnByb3RvdHlwZS5wdXNoQWxsID0gZnVuY3Rpb24gcHVzaEFsbCAoaXRlcikge1xuICAgIGl0ZXIgPSBJbmRleGVkQ29sbGVjdGlvbiQkMShpdGVyKTtcbiAgICBpZiAoaXRlci5zaXplID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgaWYgKHRoaXMuc2l6ZSA9PT0gMCAmJiBpc1N0YWNrKGl0ZXIpKSB7XG4gICAgICByZXR1cm4gaXRlcjtcbiAgICB9XG4gICAgYXNzZXJ0Tm90SW5maW5pdGUoaXRlci5zaXplKTtcbiAgICB2YXIgbmV3U2l6ZSA9IHRoaXMuc2l6ZTtcbiAgICB2YXIgaGVhZCA9IHRoaXMuX2hlYWQ7XG4gICAgaXRlci5fX2l0ZXJhdGUoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBuZXdTaXplKys7XG4gICAgICBoZWFkID0ge1xuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIG5leHQ6IGhlYWQsXG4gICAgICB9O1xuICAgIH0sIC8qIHJldmVyc2UgKi8gdHJ1ZSk7XG4gICAgaWYgKHRoaXMuX19vd25lcklEKSB7XG4gICAgICB0aGlzLnNpemUgPSBuZXdTaXplO1xuICAgICAgdGhpcy5faGVhZCA9IGhlYWQ7XG4gICAgICB0aGlzLl9faGFzaCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX19hbHRlcmVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gbWFrZVN0YWNrKG5ld1NpemUsIGhlYWQpO1xuICB9O1xuXG4gIFN0YWNrLnByb3RvdHlwZS5wb3AgPSBmdW5jdGlvbiBwb3AgKCkge1xuICAgIHJldHVybiB0aGlzLnNsaWNlKDEpO1xuICB9O1xuXG4gIFN0YWNrLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyICgpIHtcbiAgICBpZiAodGhpcy5zaXplID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgaWYgKHRoaXMuX19vd25lcklEKSB7XG4gICAgICB0aGlzLnNpemUgPSAwO1xuICAgICAgdGhpcy5faGVhZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX19oYXNoID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fX2FsdGVyZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBlbXB0eVN0YWNrKCk7XG4gIH07XG5cbiAgU3RhY2sucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UgKGJlZ2luLCBlbmQpIHtcbiAgICBpZiAod2hvbGVTbGljZShiZWdpbiwgZW5kLCB0aGlzLnNpemUpKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdmFyIHJlc29sdmVkQmVnaW4gPSByZXNvbHZlQmVnaW4oYmVnaW4sIHRoaXMuc2l6ZSk7XG4gICAgdmFyIHJlc29sdmVkRW5kID0gcmVzb2x2ZUVuZChlbmQsIHRoaXMuc2l6ZSk7XG4gICAgaWYgKHJlc29sdmVkRW5kICE9PSB0aGlzLnNpemUpIHtcbiAgICAgIC8vIHN1cGVyLnNsaWNlKGJlZ2luLCBlbmQpO1xuICAgICAgcmV0dXJuIEluZGV4ZWRDb2xsZWN0aW9uJCQxLnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMsIGJlZ2luLCBlbmQpO1xuICAgIH1cbiAgICB2YXIgbmV3U2l6ZSA9IHRoaXMuc2l6ZSAtIHJlc29sdmVkQmVnaW47XG4gICAgdmFyIGhlYWQgPSB0aGlzLl9oZWFkO1xuICAgIHdoaWxlIChyZXNvbHZlZEJlZ2luLS0pIHtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9fb3duZXJJRCkge1xuICAgICAgdGhpcy5zaXplID0gbmV3U2l6ZTtcbiAgICAgIHRoaXMuX2hlYWQgPSBoZWFkO1xuICAgICAgdGhpcy5fX2hhc2ggPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9fYWx0ZXJlZCA9IHRydWU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIG1ha2VTdGFjayhuZXdTaXplLCBoZWFkKTtcbiAgfTtcblxuICAvLyBAcHJhZ21hIE11dGFiaWxpdHlcblxuICBTdGFjay5wcm90b3R5cGUuX19lbnN1cmVPd25lciA9IGZ1bmN0aW9uIF9fZW5zdXJlT3duZXIgKG93bmVySUQpIHtcbiAgICBpZiAob3duZXJJRCA9PT0gdGhpcy5fX293bmVySUQpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBpZiAoIW93bmVySUQpIHtcbiAgICAgIGlmICh0aGlzLnNpemUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGVtcHR5U3RhY2soKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19vd25lcklEID0gb3duZXJJRDtcbiAgICAgIHRoaXMuX19hbHRlcmVkID0gZmFsc2U7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIG1ha2VTdGFjayh0aGlzLnNpemUsIHRoaXMuX2hlYWQsIG93bmVySUQsIHRoaXMuX19oYXNoKTtcbiAgfTtcblxuICAvLyBAcHJhZ21hIEl0ZXJhdGlvblxuXG4gIFN0YWNrLnByb3RvdHlwZS5fX2l0ZXJhdGUgPSBmdW5jdGlvbiBfX2l0ZXJhdGUgKGZuLCByZXZlcnNlKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICBpZiAocmV2ZXJzZSkge1xuICAgICAgcmV0dXJuIG5ldyBBcnJheVNlcSh0aGlzLnRvQXJyYXkoKSkuX19pdGVyYXRlKFxuICAgICAgICBmdW5jdGlvbiAodiwgaykgeyByZXR1cm4gZm4odiwgaywgdGhpcyQxKTsgfSxcbiAgICAgICAgcmV2ZXJzZVxuICAgICAgKTtcbiAgICB9XG4gICAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICAgIHZhciBub2RlID0gdGhpcy5faGVhZDtcbiAgICB3aGlsZSAobm9kZSkge1xuICAgICAgaWYgKGZuKG5vZGUudmFsdWUsIGl0ZXJhdGlvbnMrKywgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICB9XG4gICAgcmV0dXJuIGl0ZXJhdGlvbnM7XG4gIH07XG5cbiAgU3RhY2sucHJvdG90eXBlLl9faXRlcmF0b3IgPSBmdW5jdGlvbiBfX2l0ZXJhdG9yICh0eXBlLCByZXZlcnNlKSB7XG4gICAgaWYgKHJldmVyc2UpIHtcbiAgICAgIHJldHVybiBuZXcgQXJyYXlTZXEodGhpcy50b0FycmF5KCkpLl9faXRlcmF0b3IodHlwZSwgcmV2ZXJzZSk7XG4gICAgfVxuICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICB2YXIgbm9kZSA9IHRoaXMuX2hlYWQ7XG4gICAgcmV0dXJuIG5ldyBJdGVyYXRvcihmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAobm9kZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBub2RlLnZhbHVlO1xuICAgICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JWYWx1ZSh0eXBlLCBpdGVyYXRpb25zKyssIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVyYXRvckRvbmUoKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gU3RhY2s7XG59KEluZGV4ZWRDb2xsZWN0aW9uKSk7XG5cblN0YWNrLmlzU3RhY2sgPSBpc1N0YWNrO1xuXG52YXIgU3RhY2tQcm90b3R5cGUgPSBTdGFjay5wcm90b3R5cGU7XG5TdGFja1Byb3RvdHlwZVtJU19TVEFDS19TWU1CT0xdID0gdHJ1ZTtcblN0YWNrUHJvdG90eXBlLnNoaWZ0ID0gU3RhY2tQcm90b3R5cGUucG9wO1xuU3RhY2tQcm90b3R5cGUudW5zaGlmdCA9IFN0YWNrUHJvdG90eXBlLnB1c2g7XG5TdGFja1Byb3RvdHlwZS51bnNoaWZ0QWxsID0gU3RhY2tQcm90b3R5cGUucHVzaEFsbDtcblN0YWNrUHJvdG90eXBlLndpdGhNdXRhdGlvbnMgPSB3aXRoTXV0YXRpb25zO1xuU3RhY2tQcm90b3R5cGUud2FzQWx0ZXJlZCA9IHdhc0FsdGVyZWQ7XG5TdGFja1Byb3RvdHlwZS5hc0ltbXV0YWJsZSA9IGFzSW1tdXRhYmxlO1xuU3RhY2tQcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9pbml0J10gPSBTdGFja1Byb3RvdHlwZS5hc011dGFibGUgPSBhc011dGFibGU7XG5TdGFja1Byb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3N0ZXAnXSA9IGZ1bmN0aW9uKHJlc3VsdCwgYXJyKSB7XG4gIHJldHVybiByZXN1bHQudW5zaGlmdChhcnIpO1xufTtcblN0YWNrUHJvdG90eXBlWydAQHRyYW5zZHVjZXIvcmVzdWx0J10gPSBmdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuIG9iai5hc0ltbXV0YWJsZSgpO1xufTtcblxuZnVuY3Rpb24gbWFrZVN0YWNrKHNpemUsIGhlYWQsIG93bmVySUQsIGhhc2gpIHtcbiAgdmFyIG1hcCA9IE9iamVjdC5jcmVhdGUoU3RhY2tQcm90b3R5cGUpO1xuICBtYXAuc2l6ZSA9IHNpemU7XG4gIG1hcC5faGVhZCA9IGhlYWQ7XG4gIG1hcC5fX293bmVySUQgPSBvd25lcklEO1xuICBtYXAuX19oYXNoID0gaGFzaDtcbiAgbWFwLl9fYWx0ZXJlZCA9IGZhbHNlO1xuICByZXR1cm4gbWFwO1xufVxuXG52YXIgRU1QVFlfU1RBQ0s7XG5mdW5jdGlvbiBlbXB0eVN0YWNrKCkge1xuICByZXR1cm4gRU1QVFlfU1RBQ0sgfHwgKEVNUFRZX1NUQUNLID0gbWFrZVN0YWNrKDApKTtcbn1cblxudmFyIElTX1NFVF9TWU1CT0wgPSAnQEBfX0lNTVVUQUJMRV9TRVRfX0BAJztcblxuZnVuY3Rpb24gaXNTZXQobWF5YmVTZXQpIHtcbiAgcmV0dXJuIEJvb2xlYW4obWF5YmVTZXQgJiYgbWF5YmVTZXRbSVNfU0VUX1NZTUJPTF0pO1xufVxuXG5mdW5jdGlvbiBpc09yZGVyZWRTZXQobWF5YmVPcmRlcmVkU2V0KSB7XG4gIHJldHVybiBpc1NldChtYXliZU9yZGVyZWRTZXQpICYmIGlzT3JkZXJlZChtYXliZU9yZGVyZWRTZXQpO1xufVxuXG5mdW5jdGlvbiBkZWVwRXF1YWwoYSwgYikge1xuICBpZiAoYSA9PT0gYikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKFxuICAgICFpc0NvbGxlY3Rpb24oYikgfHxcbiAgICAoYS5zaXplICE9PSB1bmRlZmluZWQgJiYgYi5zaXplICE9PSB1bmRlZmluZWQgJiYgYS5zaXplICE9PSBiLnNpemUpIHx8XG4gICAgKGEuX19oYXNoICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIGIuX19oYXNoICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIGEuX19oYXNoICE9PSBiLl9faGFzaCkgfHxcbiAgICBpc0tleWVkKGEpICE9PSBpc0tleWVkKGIpIHx8XG4gICAgaXNJbmRleGVkKGEpICE9PSBpc0luZGV4ZWQoYikgfHxcbiAgICBpc09yZGVyZWQoYSkgIT09IGlzT3JkZXJlZChiKVxuICApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoYS5zaXplID09PSAwICYmIGIuc2l6ZSA9PT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIG5vdEFzc29jaWF0aXZlID0gIWlzQXNzb2NpYXRpdmUoYSk7XG5cbiAgaWYgKGlzT3JkZXJlZChhKSkge1xuICAgIHZhciBlbnRyaWVzID0gYS5lbnRyaWVzKCk7XG4gICAgcmV0dXJuIChcbiAgICAgIGIuZXZlcnkoZnVuY3Rpb24gKHYsIGspIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gZW50cmllcy5uZXh0KCkudmFsdWU7XG4gICAgICAgIHJldHVybiBlbnRyeSAmJiBpcyhlbnRyeVsxXSwgdikgJiYgKG5vdEFzc29jaWF0aXZlIHx8IGlzKGVudHJ5WzBdLCBrKSk7XG4gICAgICB9KSAmJiBlbnRyaWVzLm5leHQoKS5kb25lXG4gICAgKTtcbiAgfVxuXG4gIHZhciBmbGlwcGVkID0gZmFsc2U7XG5cbiAgaWYgKGEuc2l6ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKGIuc2l6ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIGEuY2FjaGVSZXN1bHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgYS5jYWNoZVJlc3VsdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmbGlwcGVkID0gdHJ1ZTtcbiAgICAgIHZhciBfID0gYTtcbiAgICAgIGEgPSBiO1xuICAgICAgYiA9IF87XG4gICAgfVxuICB9XG5cbiAgdmFyIGFsbEVxdWFsID0gdHJ1ZTtcbiAgdmFyIGJTaXplID0gYi5fX2l0ZXJhdGUoZnVuY3Rpb24gKHYsIGspIHtcbiAgICBpZiAoXG4gICAgICBub3RBc3NvY2lhdGl2ZVxuICAgICAgICA/ICFhLmhhcyh2KVxuICAgICAgICA6IGZsaXBwZWRcbiAgICAgICAgICA/ICFpcyh2LCBhLmdldChrLCBOT1RfU0VUKSlcbiAgICAgICAgICA6ICFpcyhhLmdldChrLCBOT1RfU0VUKSwgdilcbiAgICApIHtcbiAgICAgIGFsbEVxdWFsID0gZmFsc2U7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gYWxsRXF1YWwgJiYgYS5zaXplID09PSBiU2l6ZTtcbn1cblxuLyoqXG4gKiBDb250cmlidXRlcyBhZGRpdGlvbmFsIG1ldGhvZHMgdG8gYSBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBtaXhpbihjdG9yLCBtZXRob2RzKSB7XG4gIHZhciBrZXlDb3BpZXIgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgY3Rvci5wcm90b3R5cGVba2V5XSA9IG1ldGhvZHNba2V5XTtcbiAgfTtcbiAgT2JqZWN0LmtleXMobWV0aG9kcykuZm9yRWFjaChrZXlDb3BpZXIpO1xuICBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmXG4gICAgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhtZXRob2RzKS5mb3JFYWNoKGtleUNvcGllcik7XG4gIHJldHVybiBjdG9yO1xufVxuXG5mdW5jdGlvbiB0b0pTKHZhbHVlKSB7XG4gIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoIWlzQ29sbGVjdGlvbih2YWx1ZSkpIHtcbiAgICBpZiAoIWlzRGF0YVN0cnVjdHVyZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgdmFsdWUgPSBTZXEodmFsdWUpO1xuICB9XG4gIGlmIChpc0tleWVkKHZhbHVlKSkge1xuICAgIHZhciByZXN1bHQkMSA9IHt9O1xuICAgIHZhbHVlLl9faXRlcmF0ZShmdW5jdGlvbiAodiwgaykge1xuICAgICAgcmVzdWx0JDFba10gPSB0b0pTKHYpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQkMTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhbHVlLl9faXRlcmF0ZShmdW5jdGlvbiAodikge1xuICAgIHJlc3VsdC5wdXNoKHRvSlModikpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxudmFyIFNldCA9IC8qQF9fUFVSRV9fKi8oZnVuY3Rpb24gKFNldENvbGxlY3Rpb24kJDEpIHtcbiAgZnVuY3Rpb24gU2V0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcbiAgICAgID8gZW1wdHlTZXQoKVxuICAgICAgOiBpc1NldCh2YWx1ZSkgJiYgIWlzT3JkZXJlZCh2YWx1ZSlcbiAgICAgICAgPyB2YWx1ZVxuICAgICAgICA6IGVtcHR5U2V0KCkud2l0aE11dGF0aW9ucyhmdW5jdGlvbiAoc2V0KSB7XG4gICAgICAgICAgICB2YXIgaXRlciA9IFNldENvbGxlY3Rpb24kJDEodmFsdWUpO1xuICAgICAgICAgICAgYXNzZXJ0Tm90SW5maW5pdGUoaXRlci5zaXplKTtcbiAgICAgICAgICAgIGl0ZXIuZm9yRWFjaChmdW5jdGlvbiAodikgeyByZXR1cm4gc2V0LmFkZCh2KTsgfSk7XG4gICAgICAgICAgfSk7XG4gIH1cblxuICBpZiAoIFNldENvbGxlY3Rpb24kJDEgKSBTZXQuX19wcm90b19fID0gU2V0Q29sbGVjdGlvbiQkMTtcbiAgU2V0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFNldENvbGxlY3Rpb24kJDEgJiYgU2V0Q29sbGVjdGlvbiQkMS5wcm90b3R5cGUgKTtcbiAgU2V0LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFNldDtcblxuICBTZXQub2YgPSBmdW5jdGlvbiBvZiAoLyouLi52YWx1ZXMqLykge1xuICAgIHJldHVybiB0aGlzKGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgU2V0LmZyb21LZXlzID0gZnVuY3Rpb24gZnJvbUtleXMgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMoS2V5ZWRDb2xsZWN0aW9uKHZhbHVlKS5rZXlTZXEoKSk7XG4gIH07XG5cbiAgU2V0LmludGVyc2VjdCA9IGZ1bmN0aW9uIGludGVyc2VjdCAoc2V0cykge1xuICAgIHNldHMgPSBDb2xsZWN0aW9uKHNldHMpLnRvQXJyYXkoKTtcbiAgICByZXR1cm4gc2V0cy5sZW5ndGhcbiAgICAgID8gU2V0UHJvdG90eXBlLmludGVyc2VjdC5hcHBseShTZXQoc2V0cy5wb3AoKSksIHNldHMpXG4gICAgICA6IGVtcHR5U2V0KCk7XG4gIH07XG5cbiAgU2V0LnVuaW9uID0gZnVuY3Rpb24gdW5pb24gKHNldHMpIHtcbiAgICBzZXRzID0gQ29sbGVjdGlvbihzZXRzKS50b0FycmF5KCk7XG4gICAgcmV0dXJuIHNldHMubGVuZ3RoXG4gICAgICA/IFNldFByb3RvdHlwZS51bmlvbi5hcHBseShTZXQoc2V0cy5wb3AoKSksIHNldHMpXG4gICAgICA6IGVtcHR5U2V0KCk7XG4gIH07XG5cbiAgU2V0LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgICByZXR1cm4gdGhpcy5fX3RvU3RyaW5nKCdTZXQgeycsICd9Jyk7XG4gIH07XG5cbiAgLy8gQHByYWdtYSBBY2Nlc3NcblxuICBTZXQucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIGhhcyAodmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFwLmhhcyh2YWx1ZSk7XG4gIH07XG5cbiAgLy8gQHByYWdtYSBNb2RpZmljYXRpb25cblxuICBTZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIGFkZCAodmFsdWUpIHtcbiAgICByZXR1cm4gdXBkYXRlU2V0KHRoaXMsIHRoaXMuX21hcC5zZXQodmFsdWUsIHZhbHVlKSk7XG4gIH07XG5cbiAgU2V0LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUgKHZhbHVlKSB7XG4gICAgcmV0dXJuIHVwZGF0ZVNldCh0aGlzLCB0aGlzLl9tYXAucmVtb3ZlKHZhbHVlKSk7XG4gIH07XG5cbiAgU2V0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyICgpIHtcbiAgICByZXR1cm4gdXBkYXRlU2V0KHRoaXMsIHRoaXMuX21hcC5jbGVhcigpKTtcbiAgfTtcblxuICAvLyBAcHJhZ21hIENvbXBvc2l0aW9uXG5cbiAgU2V0LnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiBtYXAgKG1hcHBlciwgY29udGV4dCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdmFyIHJlbW92ZXMgPSBbXTtcbiAgICB2YXIgYWRkcyA9IFtdO1xuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHZhciBtYXBwZWQgPSBtYXBwZXIuY2FsbChjb250ZXh0LCB2YWx1ZSwgdmFsdWUsIHRoaXMkMSk7XG4gICAgICBpZiAobWFwcGVkICE9PSB2YWx1ZSkge1xuICAgICAgICByZW1vdmVzLnB1c2godmFsdWUpO1xuICAgICAgICBhZGRzLnB1c2gobWFwcGVkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy53aXRoTXV0YXRpb25zKGZ1bmN0aW9uIChzZXQpIHtcbiAgICAgIHJlbW92ZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHNldC5yZW1vdmUodmFsdWUpOyB9KTtcbiAgICAgIGFkZHMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHNldC5hZGQodmFsdWUpOyB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBTZXQucHJvdG90eXBlLnVuaW9uID0gZnVuY3Rpb24gdW5pb24gKCkge1xuICAgIHZhciBpdGVycyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHdoaWxlICggbGVuLS0gKSBpdGVyc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgaXRlcnMgPSBpdGVycy5maWx0ZXIoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHguc2l6ZSAhPT0gMDsgfSk7XG4gICAgaWYgKGl0ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGlmICh0aGlzLnNpemUgPT09IDAgJiYgIXRoaXMuX19vd25lcklEICYmIGl0ZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IoaXRlcnNbMF0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy53aXRoTXV0YXRpb25zKGZ1bmN0aW9uIChzZXQpIHtcbiAgICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBpdGVycy5sZW5ndGg7IGlpKyspIHtcbiAgICAgICAgU2V0Q29sbGVjdGlvbiQkMShpdGVyc1tpaV0pLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBzZXQuYWRkKHZhbHVlKTsgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgU2V0LnByb3RvdHlwZS5pbnRlcnNlY3QgPSBmdW5jdGlvbiBpbnRlcnNlY3QgKCkge1xuICAgIHZhciBpdGVycyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHdoaWxlICggbGVuLS0gKSBpdGVyc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgaWYgKGl0ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGl0ZXJzID0gaXRlcnMubWFwKGZ1bmN0aW9uIChpdGVyKSB7IHJldHVybiBTZXRDb2xsZWN0aW9uJCQxKGl0ZXIpOyB9KTtcbiAgICB2YXIgdG9SZW1vdmUgPSBbXTtcbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAoIWl0ZXJzLmV2ZXJ5KGZ1bmN0aW9uIChpdGVyKSB7IHJldHVybiBpdGVyLmluY2x1ZGVzKHZhbHVlKTsgfSkpIHtcbiAgICAgICAgdG9SZW1vdmUucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMud2l0aE11dGF0aW9ucyhmdW5jdGlvbiAoc2V0KSB7XG4gICAgICB0b1JlbW92ZS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBzZXQucmVtb3ZlKHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIFNldC5wcm90b3R5cGUuc3VidHJhY3QgPSBmdW5jdGlvbiBzdWJ0cmFjdCAoKSB7XG4gICAgdmFyIGl0ZXJzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgd2hpbGUgKCBsZW4tLSApIGl0ZXJzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICBpZiAoaXRlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgaXRlcnMgPSBpdGVycy5tYXAoZnVuY3Rpb24gKGl0ZXIpIHsgcmV0dXJuIFNldENvbGxlY3Rpb24kJDEoaXRlcik7IH0pO1xuICAgIHZhciB0b1JlbW92ZSA9IFtdO1xuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmIChpdGVycy5zb21lKGZ1bmN0aW9uIChpdGVyKSB7IHJldHVybiBpdGVyLmluY2x1ZGVzKHZhbHVlKTsgfSkpIHtcbiAgICAgICAgdG9SZW1vdmUucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMud2l0aE11dGF0aW9ucyhmdW5jdGlvbiAoc2V0KSB7XG4gICAgICB0b1JlbW92ZS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBzZXQucmVtb3ZlKHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIFNldC5wcm90b3R5cGUuc29ydCA9IGZ1bmN0aW9uIHNvcnQgKGNvbXBhcmF0b3IpIHtcbiAgICAvLyBMYXRlIGJpbmRpbmdcbiAgICByZXR1cm4gT3JkZXJlZFNldChzb3J0RmFjdG9yeSh0aGlzLCBjb21wYXJhdG9yKSk7XG4gIH07XG5cbiAgU2V0LnByb3RvdHlwZS5zb3J0QnkgPSBmdW5jdGlvbiBzb3J0QnkgKG1hcHBlciwgY29tcGFyYXRvcikge1xuICAgIC8vIExhdGUgYmluZGluZ1xuICAgIHJldHVybiBPcmRlcmVkU2V0KHNvcnRGYWN0b3J5KHRoaXMsIGNvbXBhcmF0b3IsIG1hcHBlcikpO1xuICB9O1xuXG4gIFNldC5wcm90b3R5cGUud2FzQWx0ZXJlZCA9IGZ1bmN0aW9uIHdhc0FsdGVyZWQgKCkge1xuICAgIHJldHVybiB0aGlzLl9tYXAud2FzQWx0ZXJlZCgpO1xuICB9O1xuXG4gIFNldC5wcm90b3R5cGUuX19pdGVyYXRlID0gZnVuY3Rpb24gX19pdGVyYXRlIChmbiwgcmV2ZXJzZSkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgcmV0dXJuIHRoaXMuX21hcC5fX2l0ZXJhdGUoZnVuY3Rpb24gKGspIHsgcmV0dXJuIGZuKGssIGssIHRoaXMkMSk7IH0sIHJldmVyc2UpO1xuICB9O1xuXG4gIFNldC5wcm90b3R5cGUuX19pdGVyYXRvciA9IGZ1bmN0aW9uIF9faXRlcmF0b3IgKHR5cGUsIHJldmVyc2UpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFwLl9faXRlcmF0b3IodHlwZSwgcmV2ZXJzZSk7XG4gIH07XG5cbiAgU2V0LnByb3RvdHlwZS5fX2Vuc3VyZU93bmVyID0gZnVuY3Rpb24gX19lbnN1cmVPd25lciAob3duZXJJRCkge1xuICAgIGlmIChvd25lcklEID09PSB0aGlzLl9fb3duZXJJRCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHZhciBuZXdNYXAgPSB0aGlzLl9tYXAuX19lbnN1cmVPd25lcihvd25lcklEKTtcbiAgICBpZiAoIW93bmVySUQpIHtcbiAgICAgIGlmICh0aGlzLnNpemUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19lbXB0eSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX293bmVySUQgPSBvd25lcklEO1xuICAgICAgdGhpcy5fbWFwID0gbmV3TWFwO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9fbWFrZShuZXdNYXAsIG93bmVySUQpO1xuICB9O1xuXG4gIHJldHVybiBTZXQ7XG59KFNldENvbGxlY3Rpb24pKTtcblxuU2V0LmlzU2V0ID0gaXNTZXQ7XG5cbnZhciBTZXRQcm90b3R5cGUgPSBTZXQucHJvdG90eXBlO1xuU2V0UHJvdG90eXBlW0lTX1NFVF9TWU1CT0xdID0gdHJ1ZTtcblNldFByb3RvdHlwZVtERUxFVEVdID0gU2V0UHJvdG90eXBlLnJlbW92ZTtcblNldFByb3RvdHlwZS5tZXJnZSA9IFNldFByb3RvdHlwZS5jb25jYXQgPSBTZXRQcm90b3R5cGUudW5pb247XG5TZXRQcm90b3R5cGUud2l0aE11dGF0aW9ucyA9IHdpdGhNdXRhdGlvbnM7XG5TZXRQcm90b3R5cGUuYXNJbW11dGFibGUgPSBhc0ltbXV0YWJsZTtcblNldFByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL2luaXQnXSA9IFNldFByb3RvdHlwZS5hc011dGFibGUgPSBhc011dGFibGU7XG5TZXRQcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9zdGVwJ10gPSBmdW5jdGlvbihyZXN1bHQsIGFycikge1xuICByZXR1cm4gcmVzdWx0LmFkZChhcnIpO1xufTtcblNldFByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddID0gZnVuY3Rpb24ob2JqKSB7XG4gIHJldHVybiBvYmouYXNJbW11dGFibGUoKTtcbn07XG5cblNldFByb3RvdHlwZS5fX2VtcHR5ID0gZW1wdHlTZXQ7XG5TZXRQcm90b3R5cGUuX19tYWtlID0gbWFrZVNldDtcblxuZnVuY3Rpb24gdXBkYXRlU2V0KHNldCwgbmV3TWFwKSB7XG4gIGlmIChzZXQuX19vd25lcklEKSB7XG4gICAgc2V0LnNpemUgPSBuZXdNYXAuc2l6ZTtcbiAgICBzZXQuX21hcCA9IG5ld01hcDtcbiAgICByZXR1cm4gc2V0O1xuICB9XG4gIHJldHVybiBuZXdNYXAgPT09IHNldC5fbWFwXG4gICAgPyBzZXRcbiAgICA6IG5ld01hcC5zaXplID09PSAwXG4gICAgICA/IHNldC5fX2VtcHR5KClcbiAgICAgIDogc2V0Ll9fbWFrZShuZXdNYXApO1xufVxuXG5mdW5jdGlvbiBtYWtlU2V0KG1hcCwgb3duZXJJRCkge1xuICB2YXIgc2V0ID0gT2JqZWN0LmNyZWF0ZShTZXRQcm90b3R5cGUpO1xuICBzZXQuc2l6ZSA9IG1hcCA/IG1hcC5zaXplIDogMDtcbiAgc2V0Ll9tYXAgPSBtYXA7XG4gIHNldC5fX293bmVySUQgPSBvd25lcklEO1xuICByZXR1cm4gc2V0O1xufVxuXG52YXIgRU1QVFlfU0VUO1xuZnVuY3Rpb24gZW1wdHlTZXQoKSB7XG4gIHJldHVybiBFTVBUWV9TRVQgfHwgKEVNUFRZX1NFVCA9IG1ha2VTZXQoZW1wdHlNYXAoKSkpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBsYXp5IHNlcSBvZiBudW1zIGZyb20gc3RhcnQgKGluY2x1c2l2ZSkgdG8gZW5kXG4gKiAoZXhjbHVzaXZlKSwgYnkgc3RlcCwgd2hlcmUgc3RhcnQgZGVmYXVsdHMgdG8gMCwgc3RlcCB0byAxLCBhbmQgZW5kIHRvXG4gKiBpbmZpbml0eS4gV2hlbiBzdGFydCBpcyBlcXVhbCB0byBlbmQsIHJldHVybnMgZW1wdHkgbGlzdC5cbiAqL1xudmFyIFJhbmdlID0gLypAX19QVVJFX18qLyhmdW5jdGlvbiAoSW5kZXhlZFNlcSQkMSkge1xuICBmdW5jdGlvbiBSYW5nZShzdGFydCwgZW5kLCBzdGVwKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJhbmdlKSkge1xuICAgICAgcmV0dXJuIG5ldyBSYW5nZShzdGFydCwgZW5kLCBzdGVwKTtcbiAgICB9XG4gICAgaW52YXJpYW50KHN0ZXAgIT09IDAsICdDYW5ub3Qgc3RlcCBhIFJhbmdlIGJ5IDAnKTtcbiAgICBzdGFydCA9IHN0YXJ0IHx8IDA7XG4gICAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbmQgPSBJbmZpbml0eTtcbiAgICB9XG4gICAgc3RlcCA9IHN0ZXAgPT09IHVuZGVmaW5lZCA/IDEgOiBNYXRoLmFicyhzdGVwKTtcbiAgICBpZiAoZW5kIDwgc3RhcnQpIHtcbiAgICAgIHN0ZXAgPSAtc3RlcDtcbiAgICB9XG4gICAgdGhpcy5fc3RhcnQgPSBzdGFydDtcbiAgICB0aGlzLl9lbmQgPSBlbmQ7XG4gICAgdGhpcy5fc3RlcCA9IHN0ZXA7XG4gICAgdGhpcy5zaXplID0gTWF0aC5tYXgoMCwgTWF0aC5jZWlsKChlbmQgLSBzdGFydCkgLyBzdGVwIC0gMSkgKyAxKTtcbiAgICBpZiAodGhpcy5zaXplID09PSAwKSB7XG4gICAgICBpZiAoRU1QVFlfUkFOR0UpIHtcbiAgICAgICAgcmV0dXJuIEVNUFRZX1JBTkdFO1xuICAgICAgfVxuICAgICAgRU1QVFlfUkFOR0UgPSB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIGlmICggSW5kZXhlZFNlcSQkMSApIFJhbmdlLl9fcHJvdG9fXyA9IEluZGV4ZWRTZXEkJDE7XG4gIFJhbmdlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEluZGV4ZWRTZXEkJDEgJiYgSW5kZXhlZFNlcSQkMS5wcm90b3R5cGUgKTtcbiAgUmFuZ2UucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUmFuZ2U7XG5cbiAgUmFuZ2UucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICAgIGlmICh0aGlzLnNpemUgPT09IDApIHtcbiAgICAgIHJldHVybiAnUmFuZ2UgW10nO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgJ1JhbmdlIFsgJyArXG4gICAgICB0aGlzLl9zdGFydCArXG4gICAgICAnLi4uJyArXG4gICAgICB0aGlzLl9lbmQgK1xuICAgICAgKHRoaXMuX3N0ZXAgIT09IDEgPyAnIGJ5ICcgKyB0aGlzLl9zdGVwIDogJycpICtcbiAgICAgICcgXSdcbiAgICApO1xuICB9O1xuXG4gIFJhbmdlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQgKGluZGV4LCBub3RTZXRWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmhhcyhpbmRleClcbiAgICAgID8gdGhpcy5fc3RhcnQgKyB3cmFwSW5kZXgodGhpcywgaW5kZXgpICogdGhpcy5fc3RlcFxuICAgICAgOiBub3RTZXRWYWx1ZTtcbiAgfTtcblxuICBSYW5nZS5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyAoc2VhcmNoVmFsdWUpIHtcbiAgICB2YXIgcG9zc2libGVJbmRleCA9IChzZWFyY2hWYWx1ZSAtIHRoaXMuX3N0YXJ0KSAvIHRoaXMuX3N0ZXA7XG4gICAgcmV0dXJuIChcbiAgICAgIHBvc3NpYmxlSW5kZXggPj0gMCAmJlxuICAgICAgcG9zc2libGVJbmRleCA8IHRoaXMuc2l6ZSAmJlxuICAgICAgcG9zc2libGVJbmRleCA9PT0gTWF0aC5mbG9vcihwb3NzaWJsZUluZGV4KVxuICAgICk7XG4gIH07XG5cbiAgUmFuZ2UucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UgKGJlZ2luLCBlbmQpIHtcbiAgICBpZiAod2hvbGVTbGljZShiZWdpbiwgZW5kLCB0aGlzLnNpemUpKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgYmVnaW4gPSByZXNvbHZlQmVnaW4oYmVnaW4sIHRoaXMuc2l6ZSk7XG4gICAgZW5kID0gcmVzb2x2ZUVuZChlbmQsIHRoaXMuc2l6ZSk7XG4gICAgaWYgKGVuZCA8PSBiZWdpbikge1xuICAgICAgcmV0dXJuIG5ldyBSYW5nZSgwLCAwKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSYW5nZShcbiAgICAgIHRoaXMuZ2V0KGJlZ2luLCB0aGlzLl9lbmQpLFxuICAgICAgdGhpcy5nZXQoZW5kLCB0aGlzLl9lbmQpLFxuICAgICAgdGhpcy5fc3RlcFxuICAgICk7XG4gIH07XG5cbiAgUmFuZ2UucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mIChzZWFyY2hWYWx1ZSkge1xuICAgIHZhciBvZmZzZXRWYWx1ZSA9IHNlYXJjaFZhbHVlIC0gdGhpcy5fc3RhcnQ7XG4gICAgaWYgKG9mZnNldFZhbHVlICUgdGhpcy5fc3RlcCA9PT0gMCkge1xuICAgICAgdmFyIGluZGV4ID0gb2Zmc2V0VmFsdWUgLyB0aGlzLl9zdGVwO1xuICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLnNpemUpIHtcbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG4gIH07XG5cbiAgUmFuZ2UucHJvdG90eXBlLmxhc3RJbmRleE9mID0gZnVuY3Rpb24gbGFzdEluZGV4T2YgKHNlYXJjaFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXhPZihzZWFyY2hWYWx1ZSk7XG4gIH07XG5cbiAgUmFuZ2UucHJvdG90eXBlLl9faXRlcmF0ZSA9IGZ1bmN0aW9uIF9faXRlcmF0ZSAoZm4sIHJldmVyc2UpIHtcbiAgICB2YXIgc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgICB2YXIgc3RlcCA9IHRoaXMuX3N0ZXA7XG4gICAgdmFyIHZhbHVlID0gcmV2ZXJzZSA/IHRoaXMuX3N0YXJ0ICsgKHNpemUgLSAxKSAqIHN0ZXAgOiB0aGlzLl9zdGFydDtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgIT09IHNpemUpIHtcbiAgICAgIGlmIChmbih2YWx1ZSwgcmV2ZXJzZSA/IHNpemUgLSArK2kgOiBpKyssIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHZhbHVlICs9IHJldmVyc2UgPyAtc3RlcCA6IHN0ZXA7XG4gICAgfVxuICAgIHJldHVybiBpO1xuICB9O1xuXG4gIFJhbmdlLnByb3RvdHlwZS5fX2l0ZXJhdG9yID0gZnVuY3Rpb24gX19pdGVyYXRvciAodHlwZSwgcmV2ZXJzZSkge1xuICAgIHZhciBzaXplID0gdGhpcy5zaXplO1xuICAgIHZhciBzdGVwID0gdGhpcy5fc3RlcDtcbiAgICB2YXIgdmFsdWUgPSByZXZlcnNlID8gdGhpcy5fc3RhcnQgKyAoc2l6ZSAtIDEpICogc3RlcCA6IHRoaXMuX3N0YXJ0O1xuICAgIHZhciBpID0gMDtcbiAgICByZXR1cm4gbmV3IEl0ZXJhdG9yKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpID09PSBzaXplKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvckRvbmUoKTtcbiAgICAgIH1cbiAgICAgIHZhciB2ID0gdmFsdWU7XG4gICAgICB2YWx1ZSArPSByZXZlcnNlID8gLXN0ZXAgOiBzdGVwO1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yVmFsdWUodHlwZSwgcmV2ZXJzZSA/IHNpemUgLSArK2kgOiBpKyssIHYpO1xuICAgIH0pO1xuICB9O1xuXG4gIFJhbmdlLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMgKG90aGVyKSB7XG4gICAgcmV0dXJuIG90aGVyIGluc3RhbmNlb2YgUmFuZ2VcbiAgICAgID8gdGhpcy5fc3RhcnQgPT09IG90aGVyLl9zdGFydCAmJlxuICAgICAgICAgIHRoaXMuX2VuZCA9PT0gb3RoZXIuX2VuZCAmJlxuICAgICAgICAgIHRoaXMuX3N0ZXAgPT09IG90aGVyLl9zdGVwXG4gICAgICA6IGRlZXBFcXVhbCh0aGlzLCBvdGhlcik7XG4gIH07XG5cbiAgcmV0dXJuIFJhbmdlO1xufShJbmRleGVkU2VxKSk7XG5cbnZhciBFTVBUWV9SQU5HRTtcblxuZnVuY3Rpb24gZ2V0SW4oY29sbGVjdGlvbiwgc2VhcmNoS2V5UGF0aCwgbm90U2V0VmFsdWUpIHtcbiAgdmFyIGtleVBhdGggPSBjb2VyY2VLZXlQYXRoKHNlYXJjaEtleVBhdGgpO1xuICB2YXIgaSA9IDA7XG4gIHdoaWxlIChpICE9PSBrZXlQYXRoLmxlbmd0aCkge1xuICAgIGNvbGxlY3Rpb24gPSBnZXQoY29sbGVjdGlvbiwga2V5UGF0aFtpKytdLCBOT1RfU0VUKTtcbiAgICBpZiAoY29sbGVjdGlvbiA9PT0gTk9UX1NFVCkge1xuICAgICAgcmV0dXJuIG5vdFNldFZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY29sbGVjdGlvbjtcbn1cblxuZnVuY3Rpb24gZ2V0SW4kMShzZWFyY2hLZXlQYXRoLCBub3RTZXRWYWx1ZSkge1xuICByZXR1cm4gZ2V0SW4odGhpcywgc2VhcmNoS2V5UGF0aCwgbm90U2V0VmFsdWUpO1xufVxuXG5mdW5jdGlvbiBoYXNJbihjb2xsZWN0aW9uLCBrZXlQYXRoKSB7XG4gIHJldHVybiBnZXRJbihjb2xsZWN0aW9uLCBrZXlQYXRoLCBOT1RfU0VUKSAhPT0gTk9UX1NFVDtcbn1cblxuZnVuY3Rpb24gaGFzSW4kMShzZWFyY2hLZXlQYXRoKSB7XG4gIHJldHVybiBoYXNJbih0aGlzLCBzZWFyY2hLZXlQYXRoKTtcbn1cblxuZnVuY3Rpb24gdG9PYmplY3QoKSB7XG4gIGFzc2VydE5vdEluZmluaXRlKHRoaXMuc2l6ZSk7XG4gIHZhciBvYmplY3QgPSB7fTtcbiAgdGhpcy5fX2l0ZXJhdGUoZnVuY3Rpb24gKHYsIGspIHtcbiAgICBvYmplY3Rba10gPSB2O1xuICB9KTtcbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuLy8gTm90ZTogYWxsIG9mIHRoZXNlIG1ldGhvZHMgYXJlIGRlcHJlY2F0ZWQuXG5Db2xsZWN0aW9uLmlzSXRlcmFibGUgPSBpc0NvbGxlY3Rpb247XG5Db2xsZWN0aW9uLmlzS2V5ZWQgPSBpc0tleWVkO1xuQ29sbGVjdGlvbi5pc0luZGV4ZWQgPSBpc0luZGV4ZWQ7XG5Db2xsZWN0aW9uLmlzQXNzb2NpYXRpdmUgPSBpc0Fzc29jaWF0aXZlO1xuQ29sbGVjdGlvbi5pc09yZGVyZWQgPSBpc09yZGVyZWQ7XG5cbkNvbGxlY3Rpb24uSXRlcmF0b3IgPSBJdGVyYXRvcjtcblxubWl4aW4oQ29sbGVjdGlvbiwge1xuICAvLyAjIyMgQ29udmVyc2lvbiB0byBvdGhlciB0eXBlc1xuXG4gIHRvQXJyYXk6IGZ1bmN0aW9uIHRvQXJyYXkoKSB7XG4gICAgYXNzZXJ0Tm90SW5maW5pdGUodGhpcy5zaXplKTtcbiAgICB2YXIgYXJyYXkgPSBuZXcgQXJyYXkodGhpcy5zaXplIHx8IDApO1xuICAgIHZhciB1c2VUdXBsZXMgPSBpc0tleWVkKHRoaXMpO1xuICAgIHZhciBpID0gMDtcbiAgICB0aGlzLl9faXRlcmF0ZShmdW5jdGlvbiAodiwgaykge1xuICAgICAgLy8gS2V5ZWQgY29sbGVjdGlvbnMgcHJvZHVjZSBhbiBhcnJheSBvZiB0dXBsZXMuXG4gICAgICBhcnJheVtpKytdID0gdXNlVHVwbGVzID8gW2ssIHZdIDogdjtcbiAgICB9KTtcbiAgICByZXR1cm4gYXJyYXk7XG4gIH0sXG5cbiAgdG9JbmRleGVkU2VxOiBmdW5jdGlvbiB0b0luZGV4ZWRTZXEoKSB7XG4gICAgcmV0dXJuIG5ldyBUb0luZGV4ZWRTZXF1ZW5jZSh0aGlzKTtcbiAgfSxcblxuICB0b0pTOiBmdW5jdGlvbiB0b0pTJDEoKSB7XG4gICAgcmV0dXJuIHRvSlModGhpcyk7XG4gIH0sXG5cbiAgdG9LZXllZFNlcTogZnVuY3Rpb24gdG9LZXllZFNlcSgpIHtcbiAgICByZXR1cm4gbmV3IFRvS2V5ZWRTZXF1ZW5jZSh0aGlzLCB0cnVlKTtcbiAgfSxcblxuICB0b01hcDogZnVuY3Rpb24gdG9NYXAoKSB7XG4gICAgLy8gVXNlIExhdGUgQmluZGluZyBoZXJlIHRvIHNvbHZlIHRoZSBjaXJjdWxhciBkZXBlbmRlbmN5LlxuICAgIHJldHVybiBNYXAodGhpcy50b0tleWVkU2VxKCkpO1xuICB9LFxuXG4gIHRvT2JqZWN0OiB0b09iamVjdCxcblxuICB0b09yZGVyZWRNYXA6IGZ1bmN0aW9uIHRvT3JkZXJlZE1hcCgpIHtcbiAgICAvLyBVc2UgTGF0ZSBCaW5kaW5nIGhlcmUgdG8gc29sdmUgdGhlIGNpcmN1bGFyIGRlcGVuZGVuY3kuXG4gICAgcmV0dXJuIE9yZGVyZWRNYXAodGhpcy50b0tleWVkU2VxKCkpO1xuICB9LFxuXG4gIHRvT3JkZXJlZFNldDogZnVuY3Rpb24gdG9PcmRlcmVkU2V0KCkge1xuICAgIC8vIFVzZSBMYXRlIEJpbmRpbmcgaGVyZSB0byBzb2x2ZSB0aGUgY2lyY3VsYXIgZGVwZW5kZW5jeS5cbiAgICByZXR1cm4gT3JkZXJlZFNldChpc0tleWVkKHRoaXMpID8gdGhpcy52YWx1ZVNlcSgpIDogdGhpcyk7XG4gIH0sXG5cbiAgdG9TZXQ6IGZ1bmN0aW9uIHRvU2V0KCkge1xuICAgIC8vIFVzZSBMYXRlIEJpbmRpbmcgaGVyZSB0byBzb2x2ZSB0aGUgY2lyY3VsYXIgZGVwZW5kZW5jeS5cbiAgICByZXR1cm4gU2V0KGlzS2V5ZWQodGhpcykgPyB0aGlzLnZhbHVlU2VxKCkgOiB0aGlzKTtcbiAgfSxcblxuICB0b1NldFNlcTogZnVuY3Rpb24gdG9TZXRTZXEoKSB7XG4gICAgcmV0dXJuIG5ldyBUb1NldFNlcXVlbmNlKHRoaXMpO1xuICB9LFxuXG4gIHRvU2VxOiBmdW5jdGlvbiB0b1NlcSgpIHtcbiAgICByZXR1cm4gaXNJbmRleGVkKHRoaXMpXG4gICAgICA/IHRoaXMudG9JbmRleGVkU2VxKClcbiAgICAgIDogaXNLZXllZCh0aGlzKVxuICAgICAgICA/IHRoaXMudG9LZXllZFNlcSgpXG4gICAgICAgIDogdGhpcy50b1NldFNlcSgpO1xuICB9LFxuXG4gIHRvU3RhY2s6IGZ1bmN0aW9uIHRvU3RhY2soKSB7XG4gICAgLy8gVXNlIExhdGUgQmluZGluZyBoZXJlIHRvIHNvbHZlIHRoZSBjaXJjdWxhciBkZXBlbmRlbmN5LlxuICAgIHJldHVybiBTdGFjayhpc0tleWVkKHRoaXMpID8gdGhpcy52YWx1ZVNlcSgpIDogdGhpcyk7XG4gIH0sXG5cbiAgdG9MaXN0OiBmdW5jdGlvbiB0b0xpc3QoKSB7XG4gICAgLy8gVXNlIExhdGUgQmluZGluZyBoZXJlIHRvIHNvbHZlIHRoZSBjaXJjdWxhciBkZXBlbmRlbmN5LlxuICAgIHJldHVybiBMaXN0KGlzS2V5ZWQodGhpcykgPyB0aGlzLnZhbHVlU2VxKCkgOiB0aGlzKTtcbiAgfSxcblxuICAvLyAjIyMgQ29tbW9uIEphdmFTY3JpcHQgbWV0aG9kcyBhbmQgcHJvcGVydGllc1xuXG4gIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJ1tDb2xsZWN0aW9uXSc7XG4gIH0sXG5cbiAgX190b1N0cmluZzogZnVuY3Rpb24gX190b1N0cmluZyhoZWFkLCB0YWlsKSB7XG4gICAgaWYgKHRoaXMuc2l6ZSA9PT0gMCkge1xuICAgICAgcmV0dXJuIGhlYWQgKyB0YWlsO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgaGVhZCArXG4gICAgICAnICcgK1xuICAgICAgdGhpcy50b1NlcSgpXG4gICAgICAgIC5tYXAodGhpcy5fX3RvU3RyaW5nTWFwcGVyKVxuICAgICAgICAuam9pbignLCAnKSArXG4gICAgICAnICcgK1xuICAgICAgdGFpbFxuICAgICk7XG4gIH0sXG5cbiAgLy8gIyMjIEVTNiBDb2xsZWN0aW9uIG1ldGhvZHMgKEVTNiBBcnJheSBhbmQgTWFwKVxuXG4gIGNvbmNhdDogZnVuY3Rpb24gY29uY2F0KCkge1xuICAgIHZhciB2YWx1ZXMgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB3aGlsZSAoIGxlbi0tICkgdmFsdWVzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICByZXR1cm4gcmVpZnkodGhpcywgY29uY2F0RmFjdG9yeSh0aGlzLCB2YWx1ZXMpKTtcbiAgfSxcblxuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoc2VhcmNoVmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5zb21lKGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gaXModmFsdWUsIHNlYXJjaFZhbHVlKTsgfSk7XG4gIH0sXG5cbiAgZW50cmllczogZnVuY3Rpb24gZW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5fX2l0ZXJhdG9yKElURVJBVEVfRU5UUklFUyk7XG4gIH0sXG5cbiAgZXZlcnk6IGZ1bmN0aW9uIGV2ZXJ5KHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIGFzc2VydE5vdEluZmluaXRlKHRoaXMuc2l6ZSk7XG4gICAgdmFyIHJldHVyblZhbHVlID0gdHJ1ZTtcbiAgICB0aGlzLl9faXRlcmF0ZShmdW5jdGlvbiAodiwgaywgYykge1xuICAgICAgaWYgKCFwcmVkaWNhdGUuY2FsbChjb250ZXh0LCB2LCBrLCBjKSkge1xuICAgICAgICByZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICB9LFxuXG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHJldHVybiByZWlmeSh0aGlzLCBmaWx0ZXJGYWN0b3J5KHRoaXMsIHByZWRpY2F0ZSwgY29udGV4dCwgdHJ1ZSkpO1xuICB9LFxuXG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQocHJlZGljYXRlLCBjb250ZXh0LCBub3RTZXRWYWx1ZSkge1xuICAgIHZhciBlbnRyeSA9IHRoaXMuZmluZEVudHJ5KHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgcmV0dXJuIGVudHJ5ID8gZW50cnlbMV0gOiBub3RTZXRWYWx1ZTtcbiAgfSxcblxuICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKHNpZGVFZmZlY3QsIGNvbnRleHQpIHtcbiAgICBhc3NlcnROb3RJbmZpbml0ZSh0aGlzLnNpemUpO1xuICAgIHJldHVybiB0aGlzLl9faXRlcmF0ZShjb250ZXh0ID8gc2lkZUVmZmVjdC5iaW5kKGNvbnRleHQpIDogc2lkZUVmZmVjdCk7XG4gIH0sXG5cbiAgam9pbjogZnVuY3Rpb24gam9pbihzZXBhcmF0b3IpIHtcbiAgICBhc3NlcnROb3RJbmZpbml0ZSh0aGlzLnNpemUpO1xuICAgIHNlcGFyYXRvciA9IHNlcGFyYXRvciAhPT0gdW5kZWZpbmVkID8gJycgKyBzZXBhcmF0b3IgOiAnLCc7XG4gICAgdmFyIGpvaW5lZCA9ICcnO1xuICAgIHZhciBpc0ZpcnN0ID0gdHJ1ZTtcbiAgICB0aGlzLl9faXRlcmF0ZShmdW5jdGlvbiAodikge1xuICAgICAgaXNGaXJzdCA/IChpc0ZpcnN0ID0gZmFsc2UpIDogKGpvaW5lZCArPSBzZXBhcmF0b3IpO1xuICAgICAgam9pbmVkICs9IHYgIT09IG51bGwgJiYgdiAhPT0gdW5kZWZpbmVkID8gdi50b1N0cmluZygpIDogJyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIGpvaW5lZDtcbiAgfSxcblxuICBrZXlzOiBmdW5jdGlvbiBrZXlzKCkge1xuICAgIHJldHVybiB0aGlzLl9faXRlcmF0b3IoSVRFUkFURV9LRVlTKTtcbiAgfSxcblxuICBtYXA6IGZ1bmN0aW9uIG1hcChtYXBwZXIsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gcmVpZnkodGhpcywgbWFwRmFjdG9yeSh0aGlzLCBtYXBwZXIsIGNvbnRleHQpKTtcbiAgfSxcblxuICByZWR1Y2U6IGZ1bmN0aW9uIHJlZHVjZSQxKHJlZHVjZXIsIGluaXRpYWxSZWR1Y3Rpb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gcmVkdWNlKFxuICAgICAgdGhpcyxcbiAgICAgIHJlZHVjZXIsXG4gICAgICBpbml0aWFsUmVkdWN0aW9uLFxuICAgICAgY29udGV4dCxcbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPCAyLFxuICAgICAgZmFsc2VcbiAgICApO1xuICB9LFxuXG4gIHJlZHVjZVJpZ2h0OiBmdW5jdGlvbiByZWR1Y2VSaWdodChyZWR1Y2VyLCBpbml0aWFsUmVkdWN0aW9uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIHJlZHVjZShcbiAgICAgIHRoaXMsXG4gICAgICByZWR1Y2VyLFxuICAgICAgaW5pdGlhbFJlZHVjdGlvbixcbiAgICAgIGNvbnRleHQsXG4gICAgICBhcmd1bWVudHMubGVuZ3RoIDwgMixcbiAgICAgIHRydWVcbiAgICApO1xuICB9LFxuXG4gIHJldmVyc2U6IGZ1bmN0aW9uIHJldmVyc2UoKSB7XG4gICAgcmV0dXJuIHJlaWZ5KHRoaXMsIHJldmVyc2VGYWN0b3J5KHRoaXMsIHRydWUpKTtcbiAgfSxcblxuICBzbGljZTogZnVuY3Rpb24gc2xpY2UoYmVnaW4sIGVuZCkge1xuICAgIHJldHVybiByZWlmeSh0aGlzLCBzbGljZUZhY3RvcnkodGhpcywgYmVnaW4sIGVuZCwgdHJ1ZSkpO1xuICB9LFxuXG4gIHNvbWU6IGZ1bmN0aW9uIHNvbWUocHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuICF0aGlzLmV2ZXJ5KG5vdChwcmVkaWNhdGUpLCBjb250ZXh0KTtcbiAgfSxcblxuICBzb3J0OiBmdW5jdGlvbiBzb3J0KGNvbXBhcmF0b3IpIHtcbiAgICByZXR1cm4gcmVpZnkodGhpcywgc29ydEZhY3RvcnkodGhpcywgY29tcGFyYXRvcikpO1xuICB9LFxuXG4gIHZhbHVlczogZnVuY3Rpb24gdmFsdWVzKCkge1xuICAgIHJldHVybiB0aGlzLl9faXRlcmF0b3IoSVRFUkFURV9WQUxVRVMpO1xuICB9LFxuXG4gIC8vICMjIyBNb3JlIHNlcXVlbnRpYWwgbWV0aG9kc1xuXG4gIGJ1dExhc3Q6IGZ1bmN0aW9uIGJ1dExhc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2xpY2UoMCwgLTEpO1xuICB9LFxuXG4gIGlzRW1wdHk6IGZ1bmN0aW9uIGlzRW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSAhPT0gdW5kZWZpbmVkID8gdGhpcy5zaXplID09PSAwIDogIXRoaXMuc29tZShmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9KTtcbiAgfSxcblxuICBjb3VudDogZnVuY3Rpb24gY291bnQocHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGVuc3VyZVNpemUoXG4gICAgICBwcmVkaWNhdGUgPyB0aGlzLnRvU2VxKCkuZmlsdGVyKHByZWRpY2F0ZSwgY29udGV4dCkgOiB0aGlzXG4gICAgKTtcbiAgfSxcblxuICBjb3VudEJ5OiBmdW5jdGlvbiBjb3VudEJ5KGdyb3VwZXIsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gY291bnRCeUZhY3RvcnkodGhpcywgZ3JvdXBlciwgY29udGV4dCk7XG4gIH0sXG5cbiAgZXF1YWxzOiBmdW5jdGlvbiBlcXVhbHMob3RoZXIpIHtcbiAgICByZXR1cm4gZGVlcEVxdWFsKHRoaXMsIG90aGVyKTtcbiAgfSxcblxuICBlbnRyeVNlcTogZnVuY3Rpb24gZW50cnlTZXEoKSB7XG4gICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzO1xuICAgIGlmIChjb2xsZWN0aW9uLl9jYWNoZSkge1xuICAgICAgLy8gV2UgY2FjaGUgYXMgYW4gZW50cmllcyBhcnJheSwgc28gd2UgY2FuIGp1c3QgcmV0dXJuIHRoZSBjYWNoZSFcbiAgICAgIHJldHVybiBuZXcgQXJyYXlTZXEoY29sbGVjdGlvbi5fY2FjaGUpO1xuICAgIH1cbiAgICB2YXIgZW50cmllc1NlcXVlbmNlID0gY29sbGVjdGlvblxuICAgICAgLnRvU2VxKClcbiAgICAgIC5tYXAoZW50cnlNYXBwZXIpXG4gICAgICAudG9JbmRleGVkU2VxKCk7XG4gICAgZW50cmllc1NlcXVlbmNlLmZyb21FbnRyeVNlcSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbGxlY3Rpb24udG9TZXEoKTsgfTtcbiAgICByZXR1cm4gZW50cmllc1NlcXVlbmNlO1xuICB9LFxuXG4gIGZpbHRlck5vdDogZnVuY3Rpb24gZmlsdGVyTm90KHByZWRpY2F0ZSwgY29udGV4dCkge1xuICAgIHJldHVybiB0aGlzLmZpbHRlcihub3QocHJlZGljYXRlKSwgY29udGV4dCk7XG4gIH0sXG5cbiAgZmluZEVudHJ5OiBmdW5jdGlvbiBmaW5kRW50cnkocHJlZGljYXRlLCBjb250ZXh0LCBub3RTZXRWYWx1ZSkge1xuICAgIHZhciBmb3VuZCA9IG5vdFNldFZhbHVlO1xuICAgIHRoaXMuX19pdGVyYXRlKGZ1bmN0aW9uICh2LCBrLCBjKSB7XG4gICAgICBpZiAocHJlZGljYXRlLmNhbGwoY29udGV4dCwgdiwgaywgYykpIHtcbiAgICAgICAgZm91bmQgPSBbaywgdl07XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZm91bmQ7XG4gIH0sXG5cbiAgZmluZEtleTogZnVuY3Rpb24gZmluZEtleShwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgZW50cnkgPSB0aGlzLmZpbmRFbnRyeShwcmVkaWNhdGUsIGNvbnRleHQpO1xuICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeVswXTtcbiAgfSxcblxuICBmaW5kTGFzdDogZnVuY3Rpb24gZmluZExhc3QocHJlZGljYXRlLCBjb250ZXh0LCBub3RTZXRWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLnRvS2V5ZWRTZXEoKVxuICAgICAgLnJldmVyc2UoKVxuICAgICAgLmZpbmQocHJlZGljYXRlLCBjb250ZXh0LCBub3RTZXRWYWx1ZSk7XG4gIH0sXG5cbiAgZmluZExhc3RFbnRyeTogZnVuY3Rpb24gZmluZExhc3RFbnRyeShwcmVkaWNhdGUsIGNvbnRleHQsIG5vdFNldFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMudG9LZXllZFNlcSgpXG4gICAgICAucmV2ZXJzZSgpXG4gICAgICAuZmluZEVudHJ5KHByZWRpY2F0ZSwgY29udGV4dCwgbm90U2V0VmFsdWUpO1xuICB9LFxuXG4gIGZpbmRMYXN0S2V5OiBmdW5jdGlvbiBmaW5kTGFzdEtleShwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gdGhpcy50b0tleWVkU2VxKClcbiAgICAgIC5yZXZlcnNlKClcbiAgICAgIC5maW5kS2V5KHByZWRpY2F0ZSwgY29udGV4dCk7XG4gIH0sXG5cbiAgZmlyc3Q6IGZ1bmN0aW9uIGZpcnN0KG5vdFNldFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuZmluZChyZXR1cm5UcnVlLCBudWxsLCBub3RTZXRWYWx1ZSk7XG4gIH0sXG5cbiAgZmxhdE1hcDogZnVuY3Rpb24gZmxhdE1hcChtYXBwZXIsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gcmVpZnkodGhpcywgZmxhdE1hcEZhY3RvcnkodGhpcywgbWFwcGVyLCBjb250ZXh0KSk7XG4gIH0sXG5cbiAgZmxhdHRlbjogZnVuY3Rpb24gZmxhdHRlbihkZXB0aCkge1xuICAgIHJldHVybiByZWlmeSh0aGlzLCBmbGF0dGVuRmFjdG9yeSh0aGlzLCBkZXB0aCwgdHJ1ZSkpO1xuICB9LFxuXG4gIGZyb21FbnRyeVNlcTogZnVuY3Rpb24gZnJvbUVudHJ5U2VxKCkge1xuICAgIHJldHVybiBuZXcgRnJvbUVudHJpZXNTZXF1ZW5jZSh0aGlzKTtcbiAgfSxcblxuICBnZXQ6IGZ1bmN0aW9uIGdldChzZWFyY2hLZXksIG5vdFNldFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuZmluZChmdW5jdGlvbiAoXywga2V5KSB7IHJldHVybiBpcyhrZXksIHNlYXJjaEtleSk7IH0sIHVuZGVmaW5lZCwgbm90U2V0VmFsdWUpO1xuICB9LFxuXG4gIGdldEluOiBnZXRJbiQxLFxuXG4gIGdyb3VwQnk6IGZ1bmN0aW9uIGdyb3VwQnkoZ3JvdXBlciwgY29udGV4dCkge1xuICAgIHJldHVybiBncm91cEJ5RmFjdG9yeSh0aGlzLCBncm91cGVyLCBjb250ZXh0KTtcbiAgfSxcblxuICBoYXM6IGZ1bmN0aW9uIGhhcyhzZWFyY2hLZXkpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoc2VhcmNoS2V5LCBOT1RfU0VUKSAhPT0gTk9UX1NFVDtcbiAgfSxcblxuICBoYXNJbjogaGFzSW4kMSxcblxuICBpc1N1YnNldDogZnVuY3Rpb24gaXNTdWJzZXQoaXRlcikge1xuICAgIGl0ZXIgPSB0eXBlb2YgaXRlci5pbmNsdWRlcyA9PT0gJ2Z1bmN0aW9uJyA/IGl0ZXIgOiBDb2xsZWN0aW9uKGl0ZXIpO1xuICAgIHJldHVybiB0aGlzLmV2ZXJ5KGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gaXRlci5pbmNsdWRlcyh2YWx1ZSk7IH0pO1xuICB9LFxuXG4gIGlzU3VwZXJzZXQ6IGZ1bmN0aW9uIGlzU3VwZXJzZXQoaXRlcikge1xuICAgIGl0ZXIgPSB0eXBlb2YgaXRlci5pc1N1YnNldCA9PT0gJ2Z1bmN0aW9uJyA/IGl0ZXIgOiBDb2xsZWN0aW9uKGl0ZXIpO1xuICAgIHJldHVybiBpdGVyLmlzU3Vic2V0KHRoaXMpO1xuICB9LFxuXG4gIGtleU9mOiBmdW5jdGlvbiBrZXlPZihzZWFyY2hWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmZpbmRLZXkoZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBpcyh2YWx1ZSwgc2VhcmNoVmFsdWUpOyB9KTtcbiAgfSxcblxuICBrZXlTZXE6IGZ1bmN0aW9uIGtleVNlcSgpIHtcbiAgICByZXR1cm4gdGhpcy50b1NlcSgpXG4gICAgICAubWFwKGtleU1hcHBlcilcbiAgICAgIC50b0luZGV4ZWRTZXEoKTtcbiAgfSxcblxuICBsYXN0OiBmdW5jdGlvbiBsYXN0KG5vdFNldFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMudG9TZXEoKVxuICAgICAgLnJldmVyc2UoKVxuICAgICAgLmZpcnN0KG5vdFNldFZhbHVlKTtcbiAgfSxcblxuICBsYXN0S2V5T2Y6IGZ1bmN0aW9uIGxhc3RLZXlPZihzZWFyY2hWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLnRvS2V5ZWRTZXEoKVxuICAgICAgLnJldmVyc2UoKVxuICAgICAgLmtleU9mKHNlYXJjaFZhbHVlKTtcbiAgfSxcblxuICBtYXg6IGZ1bmN0aW9uIG1heChjb21wYXJhdG9yKSB7XG4gICAgcmV0dXJuIG1heEZhY3RvcnkodGhpcywgY29tcGFyYXRvcik7XG4gIH0sXG5cbiAgbWF4Qnk6IGZ1bmN0aW9uIG1heEJ5KG1hcHBlciwgY29tcGFyYXRvcikge1xuICAgIHJldHVybiBtYXhGYWN0b3J5KHRoaXMsIGNvbXBhcmF0b3IsIG1hcHBlcik7XG4gIH0sXG5cbiAgbWluOiBmdW5jdGlvbiBtaW4oY29tcGFyYXRvcikge1xuICAgIHJldHVybiBtYXhGYWN0b3J5KFxuICAgICAgdGhpcyxcbiAgICAgIGNvbXBhcmF0b3IgPyBuZWcoY29tcGFyYXRvcikgOiBkZWZhdWx0TmVnQ29tcGFyYXRvclxuICAgICk7XG4gIH0sXG5cbiAgbWluQnk6IGZ1bmN0aW9uIG1pbkJ5KG1hcHBlciwgY29tcGFyYXRvcikge1xuICAgIHJldHVybiBtYXhGYWN0b3J5KFxuICAgICAgdGhpcyxcbiAgICAgIGNvbXBhcmF0b3IgPyBuZWcoY29tcGFyYXRvcikgOiBkZWZhdWx0TmVnQ29tcGFyYXRvcixcbiAgICAgIG1hcHBlclxuICAgICk7XG4gIH0sXG5cbiAgcmVzdDogZnVuY3Rpb24gcmVzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5zbGljZSgxKTtcbiAgfSxcblxuICBza2lwOiBmdW5jdGlvbiBza2lwKGFtb3VudCkge1xuICAgIHJldHVybiBhbW91bnQgPT09IDAgPyB0aGlzIDogdGhpcy5zbGljZShNYXRoLm1heCgwLCBhbW91bnQpKTtcbiAgfSxcblxuICBza2lwTGFzdDogZnVuY3Rpb24gc2tpcExhc3QoYW1vdW50KSB7XG4gICAgcmV0dXJuIGFtb3VudCA9PT0gMCA/IHRoaXMgOiB0aGlzLnNsaWNlKDAsIC1NYXRoLm1heCgwLCBhbW91bnQpKTtcbiAgfSxcblxuICBza2lwV2hpbGU6IGZ1bmN0aW9uIHNraXBXaGlsZShwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gcmVpZnkodGhpcywgc2tpcFdoaWxlRmFjdG9yeSh0aGlzLCBwcmVkaWNhdGUsIGNvbnRleHQsIHRydWUpKTtcbiAgfSxcblxuICBza2lwVW50aWw6IGZ1bmN0aW9uIHNraXBVbnRpbChwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5za2lwV2hpbGUobm90KHByZWRpY2F0ZSksIGNvbnRleHQpO1xuICB9LFxuXG4gIHNvcnRCeTogZnVuY3Rpb24gc29ydEJ5KG1hcHBlciwgY29tcGFyYXRvcikge1xuICAgIHJldHVybiByZWlmeSh0aGlzLCBzb3J0RmFjdG9yeSh0aGlzLCBjb21wYXJhdG9yLCBtYXBwZXIpKTtcbiAgfSxcblxuICB0YWtlOiBmdW5jdGlvbiB0YWtlKGFtb3VudCkge1xuICAgIHJldHVybiB0aGlzLnNsaWNlKDAsIE1hdGgubWF4KDAsIGFtb3VudCkpO1xuICB9LFxuXG4gIHRha2VMYXN0OiBmdW5jdGlvbiB0YWtlTGFzdChhbW91bnQpIHtcbiAgICByZXR1cm4gdGhpcy5zbGljZSgtTWF0aC5tYXgoMCwgYW1vdW50KSk7XG4gIH0sXG5cbiAgdGFrZVdoaWxlOiBmdW5jdGlvbiB0YWtlV2hpbGUocHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIHJlaWZ5KHRoaXMsIHRha2VXaGlsZUZhY3RvcnkodGhpcywgcHJlZGljYXRlLCBjb250ZXh0KSk7XG4gIH0sXG5cbiAgdGFrZVVudGlsOiBmdW5jdGlvbiB0YWtlVW50aWwocHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIHRoaXMudGFrZVdoaWxlKG5vdChwcmVkaWNhdGUpLCBjb250ZXh0KTtcbiAgfSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShmbikge1xuICAgIHJldHVybiBmbih0aGlzKTtcbiAgfSxcblxuICB2YWx1ZVNlcTogZnVuY3Rpb24gdmFsdWVTZXEoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9JbmRleGVkU2VxKCk7XG4gIH0sXG5cbiAgLy8gIyMjIEhhc2hhYmxlIE9iamVjdFxuXG4gIGhhc2hDb2RlOiBmdW5jdGlvbiBoYXNoQ29kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2hhc2ggfHwgKHRoaXMuX19oYXNoID0gaGFzaENvbGxlY3Rpb24odGhpcykpO1xuICB9LFxuXG4gIC8vICMjIyBJbnRlcm5hbFxuXG4gIC8vIGFic3RyYWN0IF9faXRlcmF0ZShmbiwgcmV2ZXJzZSlcblxuICAvLyBhYnN0cmFjdCBfX2l0ZXJhdG9yKHR5cGUsIHJldmVyc2UpXG59KTtcblxudmFyIENvbGxlY3Rpb25Qcm90b3R5cGUgPSBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbkNvbGxlY3Rpb25Qcm90b3R5cGVbSVNfQ09MTEVDVElPTl9TWU1CT0xdID0gdHJ1ZTtcbkNvbGxlY3Rpb25Qcm90b3R5cGVbSVRFUkFUT1JfU1lNQk9MXSA9IENvbGxlY3Rpb25Qcm90b3R5cGUudmFsdWVzO1xuQ29sbGVjdGlvblByb3RvdHlwZS50b0pTT04gPSBDb2xsZWN0aW9uUHJvdG90eXBlLnRvQXJyYXk7XG5Db2xsZWN0aW9uUHJvdG90eXBlLl9fdG9TdHJpbmdNYXBwZXIgPSBxdW90ZVN0cmluZztcbkNvbGxlY3Rpb25Qcm90b3R5cGUuaW5zcGVjdCA9IENvbGxlY3Rpb25Qcm90b3R5cGUudG9Tb3VyY2UgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbn07XG5Db2xsZWN0aW9uUHJvdG90eXBlLmNoYWluID0gQ29sbGVjdGlvblByb3RvdHlwZS5mbGF0TWFwO1xuQ29sbGVjdGlvblByb3RvdHlwZS5jb250YWlucyA9IENvbGxlY3Rpb25Qcm90b3R5cGUuaW5jbHVkZXM7XG5cbm1peGluKEtleWVkQ29sbGVjdGlvbiwge1xuICAvLyAjIyMgTW9yZSBzZXF1ZW50aWFsIG1ldGhvZHNcblxuICBmbGlwOiBmdW5jdGlvbiBmbGlwKCkge1xuICAgIHJldHVybiByZWlmeSh0aGlzLCBmbGlwRmFjdG9yeSh0aGlzKSk7XG4gIH0sXG5cbiAgbWFwRW50cmllczogZnVuY3Rpb24gbWFwRW50cmllcyhtYXBwZXIsIGNvbnRleHQpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHZhciBpdGVyYXRpb25zID0gMDtcbiAgICByZXR1cm4gcmVpZnkoXG4gICAgICB0aGlzLFxuICAgICAgdGhpcy50b1NlcSgpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHYsIGspIHsgcmV0dXJuIG1hcHBlci5jYWxsKGNvbnRleHQsIFtrLCB2XSwgaXRlcmF0aW9ucysrLCB0aGlzJDEpOyB9KVxuICAgICAgICAuZnJvbUVudHJ5U2VxKClcbiAgICApO1xuICB9LFxuXG4gIG1hcEtleXM6IGZ1bmN0aW9uIG1hcEtleXMobWFwcGVyLCBjb250ZXh0KSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICByZXR1cm4gcmVpZnkoXG4gICAgICB0aGlzLFxuICAgICAgdGhpcy50b1NlcSgpXG4gICAgICAgIC5mbGlwKClcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoaywgdikgeyByZXR1cm4gbWFwcGVyLmNhbGwoY29udGV4dCwgaywgdiwgdGhpcyQxKTsgfSlcbiAgICAgICAgLmZsaXAoKVxuICAgICk7XG4gIH0sXG59KTtcblxudmFyIEtleWVkQ29sbGVjdGlvblByb3RvdHlwZSA9IEtleWVkQ29sbGVjdGlvbi5wcm90b3R5cGU7XG5LZXllZENvbGxlY3Rpb25Qcm90b3R5cGVbSVNfS0VZRURfU1lNQk9MXSA9IHRydWU7XG5LZXllZENvbGxlY3Rpb25Qcm90b3R5cGVbSVRFUkFUT1JfU1lNQk9MXSA9IENvbGxlY3Rpb25Qcm90b3R5cGUuZW50cmllcztcbktleWVkQ29sbGVjdGlvblByb3RvdHlwZS50b0pTT04gPSB0b09iamVjdDtcbktleWVkQ29sbGVjdGlvblByb3RvdHlwZS5fX3RvU3RyaW5nTWFwcGVyID0gZnVuY3Rpb24gKHYsIGspIHsgcmV0dXJuIHF1b3RlU3RyaW5nKGspICsgJzogJyArIHF1b3RlU3RyaW5nKHYpOyB9O1xuXG5taXhpbihJbmRleGVkQ29sbGVjdGlvbiwge1xuICAvLyAjIyMgQ29udmVyc2lvbiB0byBvdGhlciB0eXBlc1xuXG4gIHRvS2V5ZWRTZXE6IGZ1bmN0aW9uIHRvS2V5ZWRTZXEoKSB7XG4gICAgcmV0dXJuIG5ldyBUb0tleWVkU2VxdWVuY2UodGhpcywgZmFsc2UpO1xuICB9LFxuXG4gIC8vICMjIyBFUzYgQ29sbGVjdGlvbiBtZXRob2RzIChFUzYgQXJyYXkgYW5kIE1hcClcblxuICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcihwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gcmVpZnkodGhpcywgZmlsdGVyRmFjdG9yeSh0aGlzLCBwcmVkaWNhdGUsIGNvbnRleHQsIGZhbHNlKSk7XG4gIH0sXG5cbiAgZmluZEluZGV4OiBmdW5jdGlvbiBmaW5kSW5kZXgocHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIGVudHJ5ID0gdGhpcy5maW5kRW50cnkocHJlZGljYXRlLCBjb250ZXh0KTtcbiAgICByZXR1cm4gZW50cnkgPyBlbnRyeVswXSA6IC0xO1xuICB9LFxuXG4gIGluZGV4T2Y6IGZ1bmN0aW9uIGluZGV4T2Yoc2VhcmNoVmFsdWUpIHtcbiAgICB2YXIga2V5ID0gdGhpcy5rZXlPZihzZWFyY2hWYWx1ZSk7XG4gICAgcmV0dXJuIGtleSA9PT0gdW5kZWZpbmVkID8gLTEgOiBrZXk7XG4gIH0sXG5cbiAgbGFzdEluZGV4T2Y6IGZ1bmN0aW9uIGxhc3RJbmRleE9mKHNlYXJjaFZhbHVlKSB7XG4gICAgdmFyIGtleSA9IHRoaXMubGFzdEtleU9mKHNlYXJjaFZhbHVlKTtcbiAgICByZXR1cm4ga2V5ID09PSB1bmRlZmluZWQgPyAtMSA6IGtleTtcbiAgfSxcblxuICByZXZlcnNlOiBmdW5jdGlvbiByZXZlcnNlKCkge1xuICAgIHJldHVybiByZWlmeSh0aGlzLCByZXZlcnNlRmFjdG9yeSh0aGlzLCBmYWxzZSkpO1xuICB9LFxuXG4gIHNsaWNlOiBmdW5jdGlvbiBzbGljZShiZWdpbiwgZW5kKSB7XG4gICAgcmV0dXJuIHJlaWZ5KHRoaXMsIHNsaWNlRmFjdG9yeSh0aGlzLCBiZWdpbiwgZW5kLCBmYWxzZSkpO1xuICB9LFxuXG4gIHNwbGljZTogZnVuY3Rpb24gc3BsaWNlKGluZGV4LCByZW1vdmVOdW0gLyosIC4uLnZhbHVlcyovKSB7XG4gICAgdmFyIG51bUFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHJlbW92ZU51bSA9IE1hdGgubWF4KHJlbW92ZU51bSB8fCAwLCAwKTtcbiAgICBpZiAobnVtQXJncyA9PT0gMCB8fCAobnVtQXJncyA9PT0gMiAmJiAhcmVtb3ZlTnVtKSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8vIElmIGluZGV4IGlzIG5lZ2F0aXZlLCBpdCBzaG91bGQgcmVzb2x2ZSByZWxhdGl2ZSB0byB0aGUgc2l6ZSBvZiB0aGVcbiAgICAvLyBjb2xsZWN0aW9uLiBIb3dldmVyIHNpemUgbWF5IGJlIGV4cGVuc2l2ZSB0byBjb21wdXRlIGlmIG5vdCBjYWNoZWQsIHNvXG4gICAgLy8gb25seSBjYWxsIGNvdW50KCkgaWYgdGhlIG51bWJlciBpcyBpbiBmYWN0IG5lZ2F0aXZlLlxuICAgIGluZGV4ID0gcmVzb2x2ZUJlZ2luKGluZGV4LCBpbmRleCA8IDAgPyB0aGlzLmNvdW50KCkgOiB0aGlzLnNpemUpO1xuICAgIHZhciBzcGxpY2VkID0gdGhpcy5zbGljZSgwLCBpbmRleCk7XG4gICAgcmV0dXJuIHJlaWZ5KFxuICAgICAgdGhpcyxcbiAgICAgIG51bUFyZ3MgPT09IDFcbiAgICAgICAgPyBzcGxpY2VkXG4gICAgICAgIDogc3BsaWNlZC5jb25jYXQoYXJyQ29weShhcmd1bWVudHMsIDIpLCB0aGlzLnNsaWNlKGluZGV4ICsgcmVtb3ZlTnVtKSlcbiAgICApO1xuICB9LFxuXG4gIC8vICMjIyBNb3JlIGNvbGxlY3Rpb24gbWV0aG9kc1xuXG4gIGZpbmRMYXN0SW5kZXg6IGZ1bmN0aW9uIGZpbmRMYXN0SW5kZXgocHJlZGljYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIGVudHJ5ID0gdGhpcy5maW5kTGFzdEVudHJ5KHByZWRpY2F0ZSwgY29udGV4dCk7XG4gICAgcmV0dXJuIGVudHJ5ID8gZW50cnlbMF0gOiAtMTtcbiAgfSxcblxuICBmaXJzdDogZnVuY3Rpb24gZmlyc3Qobm90U2V0VmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoMCwgbm90U2V0VmFsdWUpO1xuICB9LFxuXG4gIGZsYXR0ZW46IGZ1bmN0aW9uIGZsYXR0ZW4oZGVwdGgpIHtcbiAgICByZXR1cm4gcmVpZnkodGhpcywgZmxhdHRlbkZhY3RvcnkodGhpcywgZGVwdGgsIGZhbHNlKSk7XG4gIH0sXG5cbiAgZ2V0OiBmdW5jdGlvbiBnZXQoaW5kZXgsIG5vdFNldFZhbHVlKSB7XG4gICAgaW5kZXggPSB3cmFwSW5kZXgodGhpcywgaW5kZXgpO1xuICAgIHJldHVybiBpbmRleCA8IDAgfHxcbiAgICAgICh0aGlzLnNpemUgPT09IEluZmluaXR5IHx8ICh0aGlzLnNpemUgIT09IHVuZGVmaW5lZCAmJiBpbmRleCA+IHRoaXMuc2l6ZSkpXG4gICAgICA/IG5vdFNldFZhbHVlXG4gICAgICA6IHRoaXMuZmluZChmdW5jdGlvbiAoXywga2V5KSB7IHJldHVybiBrZXkgPT09IGluZGV4OyB9LCB1bmRlZmluZWQsIG5vdFNldFZhbHVlKTtcbiAgfSxcblxuICBoYXM6IGZ1bmN0aW9uIGhhcyhpbmRleCkge1xuICAgIGluZGV4ID0gd3JhcEluZGV4KHRoaXMsIGluZGV4KTtcbiAgICByZXR1cm4gKFxuICAgICAgaW5kZXggPj0gMCAmJlxuICAgICAgKHRoaXMuc2l6ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gdGhpcy5zaXplID09PSBJbmZpbml0eSB8fCBpbmRleCA8IHRoaXMuc2l6ZVxuICAgICAgICA6IHRoaXMuaW5kZXhPZihpbmRleCkgIT09IC0xKVxuICAgICk7XG4gIH0sXG5cbiAgaW50ZXJwb3NlOiBmdW5jdGlvbiBpbnRlcnBvc2Uoc2VwYXJhdG9yKSB7XG4gICAgcmV0dXJuIHJlaWZ5KHRoaXMsIGludGVycG9zZUZhY3RvcnkodGhpcywgc2VwYXJhdG9yKSk7XG4gIH0sXG5cbiAgaW50ZXJsZWF2ZTogZnVuY3Rpb24gaW50ZXJsZWF2ZSgvKi4uLmNvbGxlY3Rpb25zKi8pIHtcbiAgICB2YXIgY29sbGVjdGlvbnMgPSBbdGhpc10uY29uY2F0KGFyckNvcHkoYXJndW1lbnRzKSk7XG4gICAgdmFyIHppcHBlZCA9IHppcFdpdGhGYWN0b3J5KHRoaXMudG9TZXEoKSwgSW5kZXhlZFNlcS5vZiwgY29sbGVjdGlvbnMpO1xuICAgIHZhciBpbnRlcmxlYXZlZCA9IHppcHBlZC5mbGF0dGVuKHRydWUpO1xuICAgIGlmICh6aXBwZWQuc2l6ZSkge1xuICAgICAgaW50ZXJsZWF2ZWQuc2l6ZSA9IHppcHBlZC5zaXplICogY29sbGVjdGlvbnMubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gcmVpZnkodGhpcywgaW50ZXJsZWF2ZWQpO1xuICB9LFxuXG4gIGtleVNlcTogZnVuY3Rpb24ga2V5U2VxKCkge1xuICAgIHJldHVybiBSYW5nZSgwLCB0aGlzLnNpemUpO1xuICB9LFxuXG4gIGxhc3Q6IGZ1bmN0aW9uIGxhc3Qobm90U2V0VmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoLTEsIG5vdFNldFZhbHVlKTtcbiAgfSxcblxuICBza2lwV2hpbGU6IGZ1bmN0aW9uIHNraXBXaGlsZShwcmVkaWNhdGUsIGNvbnRleHQpIHtcbiAgICByZXR1cm4gcmVpZnkodGhpcywgc2tpcFdoaWxlRmFjdG9yeSh0aGlzLCBwcmVkaWNhdGUsIGNvbnRleHQsIGZhbHNlKSk7XG4gIH0sXG5cbiAgemlwOiBmdW5jdGlvbiB6aXAoLyosIC4uLmNvbGxlY3Rpb25zICovKSB7XG4gICAgdmFyIGNvbGxlY3Rpb25zID0gW3RoaXNdLmNvbmNhdChhcnJDb3B5KGFyZ3VtZW50cykpO1xuICAgIHJldHVybiByZWlmeSh0aGlzLCB6aXBXaXRoRmFjdG9yeSh0aGlzLCBkZWZhdWx0WmlwcGVyLCBjb2xsZWN0aW9ucykpO1xuICB9LFxuXG4gIHppcEFsbDogZnVuY3Rpb24gemlwQWxsKC8qLCAuLi5jb2xsZWN0aW9ucyAqLykge1xuICAgIHZhciBjb2xsZWN0aW9ucyA9IFt0aGlzXS5jb25jYXQoYXJyQ29weShhcmd1bWVudHMpKTtcbiAgICByZXR1cm4gcmVpZnkodGhpcywgemlwV2l0aEZhY3RvcnkodGhpcywgZGVmYXVsdFppcHBlciwgY29sbGVjdGlvbnMsIHRydWUpKTtcbiAgfSxcblxuICB6aXBXaXRoOiBmdW5jdGlvbiB6aXBXaXRoKHppcHBlciAvKiwgLi4uY29sbGVjdGlvbnMgKi8pIHtcbiAgICB2YXIgY29sbGVjdGlvbnMgPSBhcnJDb3B5KGFyZ3VtZW50cyk7XG4gICAgY29sbGVjdGlvbnNbMF0gPSB0aGlzO1xuICAgIHJldHVybiByZWlmeSh0aGlzLCB6aXBXaXRoRmFjdG9yeSh0aGlzLCB6aXBwZXIsIGNvbGxlY3Rpb25zKSk7XG4gIH0sXG59KTtcblxudmFyIEluZGV4ZWRDb2xsZWN0aW9uUHJvdG90eXBlID0gSW5kZXhlZENvbGxlY3Rpb24ucHJvdG90eXBlO1xuSW5kZXhlZENvbGxlY3Rpb25Qcm90b3R5cGVbSVNfSU5ERVhFRF9TWU1CT0xdID0gdHJ1ZTtcbkluZGV4ZWRDb2xsZWN0aW9uUHJvdG90eXBlW0lTX09SREVSRURfU1lNQk9MXSA9IHRydWU7XG5cbm1peGluKFNldENvbGxlY3Rpb24sIHtcbiAgLy8gIyMjIEVTNiBDb2xsZWN0aW9uIG1ldGhvZHMgKEVTNiBBcnJheSBhbmQgTWFwKVxuXG4gIGdldDogZnVuY3Rpb24gZ2V0KHZhbHVlLCBub3RTZXRWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmhhcyh2YWx1ZSkgPyB2YWx1ZSA6IG5vdFNldFZhbHVlO1xuICB9LFxuXG4gIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmhhcyh2YWx1ZSk7XG4gIH0sXG5cbiAgLy8gIyMjIE1vcmUgc2VxdWVudGlhbCBtZXRob2RzXG5cbiAga2V5U2VxOiBmdW5jdGlvbiBrZXlTZXEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVTZXEoKTtcbiAgfSxcbn0pO1xuXG5TZXRDb2xsZWN0aW9uLnByb3RvdHlwZS5oYXMgPSBDb2xsZWN0aW9uUHJvdG90eXBlLmluY2x1ZGVzO1xuU2V0Q29sbGVjdGlvbi5wcm90b3R5cGUuY29udGFpbnMgPSBTZXRDb2xsZWN0aW9uLnByb3RvdHlwZS5pbmNsdWRlcztcblxuLy8gTWl4aW4gc3ViY2xhc3Nlc1xuXG5taXhpbihLZXllZFNlcSwgS2V5ZWRDb2xsZWN0aW9uLnByb3RvdHlwZSk7XG5taXhpbihJbmRleGVkU2VxLCBJbmRleGVkQ29sbGVjdGlvbi5wcm90b3R5cGUpO1xubWl4aW4oU2V0U2VxLCBTZXRDb2xsZWN0aW9uLnByb3RvdHlwZSk7XG5cbi8vICNwcmFnbWEgSGVscGVyIGZ1bmN0aW9uc1xuXG5mdW5jdGlvbiByZWR1Y2UoY29sbGVjdGlvbiwgcmVkdWNlciwgcmVkdWN0aW9uLCBjb250ZXh0LCB1c2VGaXJzdCwgcmV2ZXJzZSkge1xuICBhc3NlcnROb3RJbmZpbml0ZShjb2xsZWN0aW9uLnNpemUpO1xuICBjb2xsZWN0aW9uLl9faXRlcmF0ZShmdW5jdGlvbiAodiwgaywgYykge1xuICAgIGlmICh1c2VGaXJzdCkge1xuICAgICAgdXNlRmlyc3QgPSBmYWxzZTtcbiAgICAgIHJlZHVjdGlvbiA9IHY7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlZHVjdGlvbiA9IHJlZHVjZXIuY2FsbChjb250ZXh0LCByZWR1Y3Rpb24sIHYsIGssIGMpO1xuICAgIH1cbiAgfSwgcmV2ZXJzZSk7XG4gIHJldHVybiByZWR1Y3Rpb247XG59XG5cbmZ1bmN0aW9uIGtleU1hcHBlcih2LCBrKSB7XG4gIHJldHVybiBrO1xufVxuXG5mdW5jdGlvbiBlbnRyeU1hcHBlcih2LCBrKSB7XG4gIHJldHVybiBbaywgdl07XG59XG5cbmZ1bmN0aW9uIG5vdChwcmVkaWNhdGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhcHJlZGljYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG5lZyhwcmVkaWNhdGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAtcHJlZGljYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRaaXBwZXIoKSB7XG4gIHJldHVybiBhcnJDb3B5KGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHROZWdDb21wYXJhdG9yKGEsIGIpIHtcbiAgcmV0dXJuIGEgPCBiID8gMSA6IGEgPiBiID8gLTEgOiAwO1xufVxuXG5mdW5jdGlvbiBoYXNoQ29sbGVjdGlvbihjb2xsZWN0aW9uKSB7XG4gIGlmIChjb2xsZWN0aW9uLnNpemUgPT09IEluZmluaXR5KSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgdmFyIG9yZGVyZWQgPSBpc09yZGVyZWQoY29sbGVjdGlvbik7XG4gIHZhciBrZXllZCA9IGlzS2V5ZWQoY29sbGVjdGlvbik7XG4gIHZhciBoID0gb3JkZXJlZCA/IDEgOiAwO1xuICB2YXIgc2l6ZSA9IGNvbGxlY3Rpb24uX19pdGVyYXRlKFxuICAgIGtleWVkXG4gICAgICA/IG9yZGVyZWRcbiAgICAgICAgPyBmdW5jdGlvbiAodiwgaykge1xuICAgICAgICAgICAgaCA9ICgzMSAqIGggKyBoYXNoTWVyZ2UoaGFzaCh2KSwgaGFzaChrKSkpIHwgMDtcbiAgICAgICAgICB9XG4gICAgICAgIDogZnVuY3Rpb24gKHYsIGspIHtcbiAgICAgICAgICAgIGggPSAoaCArIGhhc2hNZXJnZShoYXNoKHYpLCBoYXNoKGspKSkgfCAwO1xuICAgICAgICAgIH1cbiAgICAgIDogb3JkZXJlZFxuICAgICAgICA/IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICBoID0gKDMxICogaCArIGhhc2godikpIHwgMDtcbiAgICAgICAgICB9XG4gICAgICAgIDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIGggPSAoaCArIGhhc2godikpIHwgMDtcbiAgICAgICAgICB9XG4gICk7XG4gIHJldHVybiBtdXJtdXJIYXNoT2ZTaXplKHNpemUsIGgpO1xufVxuXG5mdW5jdGlvbiBtdXJtdXJIYXNoT2ZTaXplKHNpemUsIGgpIHtcbiAgaCA9IGltdWwoaCwgMHhjYzllMmQ1MSk7XG4gIGggPSBpbXVsKChoIDw8IDE1KSB8IChoID4+PiAtMTUpLCAweDFiODczNTkzKTtcbiAgaCA9IGltdWwoKGggPDwgMTMpIHwgKGggPj4+IC0xMyksIDUpO1xuICBoID0gKChoICsgMHhlNjU0NmI2NCkgfCAwKSBeIHNpemU7XG4gIGggPSBpbXVsKGggXiAoaCA+Pj4gMTYpLCAweDg1ZWJjYTZiKTtcbiAgaCA9IGltdWwoaCBeIChoID4+PiAxMyksIDB4YzJiMmFlMzUpO1xuICBoID0gc21pKGggXiAoaCA+Pj4gMTYpKTtcbiAgcmV0dXJuIGg7XG59XG5cbmZ1bmN0aW9uIGhhc2hNZXJnZShhLCBiKSB7XG4gIHJldHVybiAoYSBeIChiICsgMHg5ZTM3NzliOSArIChhIDw8IDYpICsgKGEgPj4gMikpKSB8IDA7IC8vIGludFxufVxuXG52YXIgT3JkZXJlZFNldCA9IC8qQF9fUFVSRV9fKi8oZnVuY3Rpb24gKFNldCQkMSkge1xuICBmdW5jdGlvbiBPcmRlcmVkU2V0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWRcbiAgICAgID8gZW1wdHlPcmRlcmVkU2V0KClcbiAgICAgIDogaXNPcmRlcmVkU2V0KHZhbHVlKVxuICAgICAgICA/IHZhbHVlXG4gICAgICAgIDogZW1wdHlPcmRlcmVkU2V0KCkud2l0aE11dGF0aW9ucyhmdW5jdGlvbiAoc2V0KSB7XG4gICAgICAgICAgICB2YXIgaXRlciA9IFNldENvbGxlY3Rpb24odmFsdWUpO1xuICAgICAgICAgICAgYXNzZXJ0Tm90SW5maW5pdGUoaXRlci5zaXplKTtcbiAgICAgICAgICAgIGl0ZXIuZm9yRWFjaChmdW5jdGlvbiAodikgeyByZXR1cm4gc2V0LmFkZCh2KTsgfSk7XG4gICAgICAgICAgfSk7XG4gIH1cblxuICBpZiAoIFNldCQkMSApIE9yZGVyZWRTZXQuX19wcm90b19fID0gU2V0JCQxO1xuICBPcmRlcmVkU2V0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFNldCQkMSAmJiBTZXQkJDEucHJvdG90eXBlICk7XG4gIE9yZGVyZWRTZXQucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gT3JkZXJlZFNldDtcblxuICBPcmRlcmVkU2V0Lm9mID0gZnVuY3Rpb24gb2YgKC8qLi4udmFsdWVzKi8pIHtcbiAgICByZXR1cm4gdGhpcyhhcmd1bWVudHMpO1xuICB9O1xuXG4gIE9yZGVyZWRTZXQuZnJvbUtleXMgPSBmdW5jdGlvbiBmcm9tS2V5cyAodmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcyhLZXllZENvbGxlY3Rpb24odmFsdWUpLmtleVNlcSgpKTtcbiAgfTtcblxuICBPcmRlcmVkU2V0LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgICByZXR1cm4gdGhpcy5fX3RvU3RyaW5nKCdPcmRlcmVkU2V0IHsnLCAnfScpO1xuICB9O1xuXG4gIHJldHVybiBPcmRlcmVkU2V0O1xufShTZXQpKTtcblxuT3JkZXJlZFNldC5pc09yZGVyZWRTZXQgPSBpc09yZGVyZWRTZXQ7XG5cbnZhciBPcmRlcmVkU2V0UHJvdG90eXBlID0gT3JkZXJlZFNldC5wcm90b3R5cGU7XG5PcmRlcmVkU2V0UHJvdG90eXBlW0lTX09SREVSRURfU1lNQk9MXSA9IHRydWU7XG5PcmRlcmVkU2V0UHJvdG90eXBlLnppcCA9IEluZGV4ZWRDb2xsZWN0aW9uUHJvdG90eXBlLnppcDtcbk9yZGVyZWRTZXRQcm90b3R5cGUuemlwV2l0aCA9IEluZGV4ZWRDb2xsZWN0aW9uUHJvdG90eXBlLnppcFdpdGg7XG5cbk9yZGVyZWRTZXRQcm90b3R5cGUuX19lbXB0eSA9IGVtcHR5T3JkZXJlZFNldDtcbk9yZGVyZWRTZXRQcm90b3R5cGUuX19tYWtlID0gbWFrZU9yZGVyZWRTZXQ7XG5cbmZ1bmN0aW9uIG1ha2VPcmRlcmVkU2V0KG1hcCwgb3duZXJJRCkge1xuICB2YXIgc2V0ID0gT2JqZWN0LmNyZWF0ZShPcmRlcmVkU2V0UHJvdG90eXBlKTtcbiAgc2V0LnNpemUgPSBtYXAgPyBtYXAuc2l6ZSA6IDA7XG4gIHNldC5fbWFwID0gbWFwO1xuICBzZXQuX19vd25lcklEID0gb3duZXJJRDtcbiAgcmV0dXJuIHNldDtcbn1cblxudmFyIEVNUFRZX09SREVSRURfU0VUO1xuZnVuY3Rpb24gZW1wdHlPcmRlcmVkU2V0KCkge1xuICByZXR1cm4gKFxuICAgIEVNUFRZX09SREVSRURfU0VUIHx8IChFTVBUWV9PUkRFUkVEX1NFVCA9IG1ha2VPcmRlcmVkU2V0KGVtcHR5T3JkZXJlZE1hcCgpKSlcbiAgKTtcbn1cblxudmFyIFJlY29yZCA9IGZ1bmN0aW9uIFJlY29yZChkZWZhdWx0VmFsdWVzLCBuYW1lKSB7XG4gIHZhciBoYXNJbml0aWFsaXplZDtcblxuICB2YXIgUmVjb3JkVHlwZSA9IGZ1bmN0aW9uIFJlY29yZCh2YWx1ZXMpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIGlmICh2YWx1ZXMgaW5zdGFuY2VvZiBSZWNvcmRUeXBlKSB7XG4gICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH1cbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmVjb3JkVHlwZSkpIHtcbiAgICAgIHJldHVybiBuZXcgUmVjb3JkVHlwZSh2YWx1ZXMpO1xuICAgIH1cbiAgICBpZiAoIWhhc0luaXRpYWxpemVkKSB7XG4gICAgICBoYXNJbml0aWFsaXplZCA9IHRydWU7XG4gICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGRlZmF1bHRWYWx1ZXMpO1xuICAgICAgdmFyIGluZGljZXMgPSAoUmVjb3JkVHlwZVByb3RvdHlwZS5faW5kaWNlcyA9IHt9KTtcbiAgICAgIC8vIERlcHJlY2F0ZWQ6IGxlZnQgdG8gYXR0ZW1wdCBub3QgdG8gYnJlYWsgYW55IGV4dGVybmFsIGNvZGUgd2hpY2hcbiAgICAgIC8vIHJlbGllcyBvbiBhIC5fbmFtZSBwcm9wZXJ0eSBleGlzdGluZyBvbiByZWNvcmQgaW5zdGFuY2VzLlxuICAgICAgLy8gVXNlIFJlY29yZC5nZXREZXNjcmlwdGl2ZU5hbWUoKSBpbnN0ZWFkXG4gICAgICBSZWNvcmRUeXBlUHJvdG90eXBlLl9uYW1lID0gbmFtZTtcbiAgICAgIFJlY29yZFR5cGVQcm90b3R5cGUuX2tleXMgPSBrZXlzO1xuICAgICAgUmVjb3JkVHlwZVByb3RvdHlwZS5fZGVmYXVsdFZhbHVlcyA9IGRlZmF1bHRWYWx1ZXM7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHByb3BOYW1lID0ga2V5c1tpXTtcbiAgICAgICAgaW5kaWNlc1twcm9wTmFtZV0gPSBpO1xuICAgICAgICBpZiAoUmVjb3JkVHlwZVByb3RvdHlwZVtwcm9wTmFtZV0pIHtcbiAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgICAgICAgdHlwZW9mIGNvbnNvbGUgPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICBjb25zb2xlLndhcm4gJiZcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgJ0Nhbm5vdCBkZWZpbmUgJyArXG4gICAgICAgICAgICAgICAgcmVjb3JkTmFtZSh0aGlzKSArXG4gICAgICAgICAgICAgICAgJyB3aXRoIHByb3BlcnR5IFwiJyArXG4gICAgICAgICAgICAgICAgcHJvcE5hbWUgK1xuICAgICAgICAgICAgICAgICdcIiBzaW5jZSB0aGF0IHByb3BlcnR5IG5hbWUgaXMgcGFydCBvZiB0aGUgUmVjb3JkIEFQSS4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFByb3AoUmVjb3JkVHlwZVByb3RvdHlwZSwgcHJvcE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX19vd25lcklEID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3ZhbHVlcyA9IExpc3QoKS53aXRoTXV0YXRpb25zKGZ1bmN0aW9uIChsKSB7XG4gICAgICBsLnNldFNpemUodGhpcyQxLl9rZXlzLmxlbmd0aCk7XG4gICAgICBLZXllZENvbGxlY3Rpb24odmFsdWVzKS5mb3JFYWNoKGZ1bmN0aW9uICh2LCBrKSB7XG4gICAgICAgIGwuc2V0KHRoaXMkMS5faW5kaWNlc1trXSwgdiA9PT0gdGhpcyQxLl9kZWZhdWx0VmFsdWVzW2tdID8gdW5kZWZpbmVkIDogdik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgUmVjb3JkVHlwZVByb3RvdHlwZSA9IChSZWNvcmRUeXBlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoXG4gICAgUmVjb3JkUHJvdG90eXBlXG4gICkpO1xuICBSZWNvcmRUeXBlUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUmVjb3JkVHlwZTtcblxuICBpZiAobmFtZSkge1xuICAgIFJlY29yZFR5cGUuZGlzcGxheU5hbWUgPSBuYW1lO1xuICB9XG5cbiAgcmV0dXJuIFJlY29yZFR5cGU7XG59O1xuXG5SZWNvcmQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICB2YXIgc3RyID0gcmVjb3JkTmFtZSh0aGlzKSArICcgeyAnO1xuICB2YXIga2V5cyA9IHRoaXMuX2tleXM7XG4gIHZhciBrO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpICE9PSBsOyBpKyspIHtcbiAgICBrID0ga2V5c1tpXTtcbiAgICBzdHIgKz0gKGkgPyAnLCAnIDogJycpICsgayArICc6ICcgKyBxdW90ZVN0cmluZyh0aGlzLmdldChrKSk7XG4gIH1cbiAgcmV0dXJuIHN0ciArICcgfSc7XG59O1xuXG5SZWNvcmQucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyAob3RoZXIpIHtcbiAgcmV0dXJuIChcbiAgICB0aGlzID09PSBvdGhlciB8fFxuICAgIChvdGhlciAmJlxuICAgICAgdGhpcy5fa2V5cyA9PT0gb3RoZXIuX2tleXMgJiZcbiAgICAgIHJlY29yZFNlcSh0aGlzKS5lcXVhbHMocmVjb3JkU2VxKG90aGVyKSkpXG4gICk7XG59O1xuXG5SZWNvcmQucHJvdG90eXBlLmhhc2hDb2RlID0gZnVuY3Rpb24gaGFzaENvZGUgKCkge1xuICByZXR1cm4gcmVjb3JkU2VxKHRoaXMpLmhhc2hDb2RlKCk7XG59O1xuXG4vLyBAcHJhZ21hIEFjY2Vzc1xuXG5SZWNvcmQucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIGhhcyAoaykge1xuICByZXR1cm4gdGhpcy5faW5kaWNlcy5oYXNPd25Qcm9wZXJ0eShrKTtcbn07XG5cblJlY29yZC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0IChrLCBub3RTZXRWYWx1ZSkge1xuICBpZiAoIXRoaXMuaGFzKGspKSB7XG4gICAgcmV0dXJuIG5vdFNldFZhbHVlO1xuICB9XG4gIHZhciBpbmRleCA9IHRoaXMuX2luZGljZXNba107XG4gIHZhciB2YWx1ZSA9IHRoaXMuX3ZhbHVlcy5nZXQoaW5kZXgpO1xuICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHRoaXMuX2RlZmF1bHRWYWx1ZXNba10gOiB2YWx1ZTtcbn07XG5cbi8vIEBwcmFnbWEgTW9kaWZpY2F0aW9uXG5cblJlY29yZC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0IChrLCB2KSB7XG4gIGlmICh0aGlzLmhhcyhrKSkge1xuICAgIHZhciBuZXdWYWx1ZXMgPSB0aGlzLl92YWx1ZXMuc2V0KFxuICAgICAgdGhpcy5faW5kaWNlc1trXSxcbiAgICAgIHYgPT09IHRoaXMuX2RlZmF1bHRWYWx1ZXNba10gPyB1bmRlZmluZWQgOiB2XG4gICAgKTtcbiAgICBpZiAobmV3VmFsdWVzICE9PSB0aGlzLl92YWx1ZXMgJiYgIXRoaXMuX19vd25lcklEKSB7XG4gICAgICByZXR1cm4gbWFrZVJlY29yZCh0aGlzLCBuZXdWYWx1ZXMpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cblJlY29yZC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlIChrKSB7XG4gIHJldHVybiB0aGlzLnNldChrKTtcbn07XG5cblJlY29yZC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiBjbGVhciAoKSB7XG4gIHZhciBuZXdWYWx1ZXMgPSB0aGlzLl92YWx1ZXMuY2xlYXIoKS5zZXRTaXplKHRoaXMuX2tleXMubGVuZ3RoKTtcbiAgcmV0dXJuIHRoaXMuX19vd25lcklEID8gdGhpcyA6IG1ha2VSZWNvcmQodGhpcywgbmV3VmFsdWVzKTtcbn07XG5cblJlY29yZC5wcm90b3R5cGUud2FzQWx0ZXJlZCA9IGZ1bmN0aW9uIHdhc0FsdGVyZWQgKCkge1xuICByZXR1cm4gdGhpcy5fdmFsdWVzLndhc0FsdGVyZWQoKTtcbn07XG5cblJlY29yZC5wcm90b3R5cGUudG9TZXEgPSBmdW5jdGlvbiB0b1NlcSAoKSB7XG4gIHJldHVybiByZWNvcmRTZXEodGhpcyk7XG59O1xuXG5SZWNvcmQucHJvdG90eXBlLnRvSlMgPSBmdW5jdGlvbiB0b0pTJDEgKCkge1xuICByZXR1cm4gdG9KUyh0aGlzKTtcbn07XG5cblJlY29yZC5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uIGVudHJpZXMgKCkge1xuICByZXR1cm4gdGhpcy5fX2l0ZXJhdG9yKElURVJBVEVfRU5UUklFUyk7XG59O1xuXG5SZWNvcmQucHJvdG90eXBlLl9faXRlcmF0b3IgPSBmdW5jdGlvbiBfX2l0ZXJhdG9yICh0eXBlLCByZXZlcnNlKSB7XG4gIHJldHVybiByZWNvcmRTZXEodGhpcykuX19pdGVyYXRvcih0eXBlLCByZXZlcnNlKTtcbn07XG5cblJlY29yZC5wcm90b3R5cGUuX19pdGVyYXRlID0gZnVuY3Rpb24gX19pdGVyYXRlIChmbiwgcmV2ZXJzZSkge1xuICByZXR1cm4gcmVjb3JkU2VxKHRoaXMpLl9faXRlcmF0ZShmbiwgcmV2ZXJzZSk7XG59O1xuXG5SZWNvcmQucHJvdG90eXBlLl9fZW5zdXJlT3duZXIgPSBmdW5jdGlvbiBfX2Vuc3VyZU93bmVyIChvd25lcklEKSB7XG4gIGlmIChvd25lcklEID09PSB0aGlzLl9fb3duZXJJRCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHZhciBuZXdWYWx1ZXMgPSB0aGlzLl92YWx1ZXMuX19lbnN1cmVPd25lcihvd25lcklEKTtcbiAgaWYgKCFvd25lcklEKSB7XG4gICAgdGhpcy5fX293bmVySUQgPSBvd25lcklEO1xuICAgIHRoaXMuX3ZhbHVlcyA9IG5ld1ZhbHVlcztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICByZXR1cm4gbWFrZVJlY29yZCh0aGlzLCBuZXdWYWx1ZXMsIG93bmVySUQpO1xufTtcblxuUmVjb3JkLmlzUmVjb3JkID0gaXNSZWNvcmQ7XG5SZWNvcmQuZ2V0RGVzY3JpcHRpdmVOYW1lID0gcmVjb3JkTmFtZTtcbnZhciBSZWNvcmRQcm90b3R5cGUgPSBSZWNvcmQucHJvdG90eXBlO1xuUmVjb3JkUHJvdG90eXBlW0lTX1JFQ09SRF9TWU1CT0xdID0gdHJ1ZTtcblJlY29yZFByb3RvdHlwZVtERUxFVEVdID0gUmVjb3JkUHJvdG90eXBlLnJlbW92ZTtcblJlY29yZFByb3RvdHlwZS5kZWxldGVJbiA9IFJlY29yZFByb3RvdHlwZS5yZW1vdmVJbiA9IGRlbGV0ZUluO1xuUmVjb3JkUHJvdG90eXBlLmdldEluID0gZ2V0SW4kMTtcblJlY29yZFByb3RvdHlwZS5oYXNJbiA9IENvbGxlY3Rpb25Qcm90b3R5cGUuaGFzSW47XG5SZWNvcmRQcm90b3R5cGUubWVyZ2UgPSBtZXJnZTtcblJlY29yZFByb3RvdHlwZS5tZXJnZVdpdGggPSBtZXJnZVdpdGg7XG5SZWNvcmRQcm90b3R5cGUubWVyZ2VJbiA9IG1lcmdlSW47XG5SZWNvcmRQcm90b3R5cGUubWVyZ2VEZWVwID0gbWVyZ2VEZWVwJDE7XG5SZWNvcmRQcm90b3R5cGUubWVyZ2VEZWVwV2l0aCA9IG1lcmdlRGVlcFdpdGgkMTtcblJlY29yZFByb3RvdHlwZS5tZXJnZURlZXBJbiA9IG1lcmdlRGVlcEluO1xuUmVjb3JkUHJvdG90eXBlLnNldEluID0gc2V0SW4kMTtcblJlY29yZFByb3RvdHlwZS51cGRhdGUgPSB1cGRhdGUkMTtcblJlY29yZFByb3RvdHlwZS51cGRhdGVJbiA9IHVwZGF0ZUluJDE7XG5SZWNvcmRQcm90b3R5cGUud2l0aE11dGF0aW9ucyA9IHdpdGhNdXRhdGlvbnM7XG5SZWNvcmRQcm90b3R5cGUuYXNNdXRhYmxlID0gYXNNdXRhYmxlO1xuUmVjb3JkUHJvdG90eXBlLmFzSW1tdXRhYmxlID0gYXNJbW11dGFibGU7XG5SZWNvcmRQcm90b3R5cGVbSVRFUkFUT1JfU1lNQk9MXSA9IFJlY29yZFByb3RvdHlwZS5lbnRyaWVzO1xuUmVjb3JkUHJvdG90eXBlLnRvSlNPTiA9IFJlY29yZFByb3RvdHlwZS50b09iamVjdCA9XG4gIENvbGxlY3Rpb25Qcm90b3R5cGUudG9PYmplY3Q7XG5SZWNvcmRQcm90b3R5cGUuaW5zcGVjdCA9IFJlY29yZFByb3RvdHlwZS50b1NvdXJjZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xufTtcblxuZnVuY3Rpb24gbWFrZVJlY29yZChsaWtlUmVjb3JkLCB2YWx1ZXMsIG93bmVySUQpIHtcbiAgdmFyIHJlY29yZCA9IE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKGxpa2VSZWNvcmQpKTtcbiAgcmVjb3JkLl92YWx1ZXMgPSB2YWx1ZXM7XG4gIHJlY29yZC5fX293bmVySUQgPSBvd25lcklEO1xuICByZXR1cm4gcmVjb3JkO1xufVxuXG5mdW5jdGlvbiByZWNvcmROYW1lKHJlY29yZCkge1xuICByZXR1cm4gcmVjb3JkLmNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IHJlY29yZC5jb25zdHJ1Y3Rvci5uYW1lIHx8ICdSZWNvcmQnO1xufVxuXG5mdW5jdGlvbiByZWNvcmRTZXEocmVjb3JkKSB7XG4gIHJldHVybiBrZXllZFNlcUZyb21WYWx1ZShyZWNvcmQuX2tleXMubWFwKGZ1bmN0aW9uIChrKSB7IHJldHVybiBbaywgcmVjb3JkLmdldChrKV07IH0pKTtcbn1cblxuZnVuY3Rpb24gc2V0UHJvcChwcm90b3R5cGUsIG5hbWUpIHtcbiAgdHJ5IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG90eXBlLCBuYW1lLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQobmFtZSk7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBpbnZhcmlhbnQodGhpcy5fX293bmVySUQsICdDYW5ub3Qgc2V0IG9uIGFuIGltbXV0YWJsZSByZWNvcmQuJyk7XG4gICAgICAgIHRoaXMuc2V0KG5hbWUsIHZhbHVlKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gT2JqZWN0LmRlZmluZVByb3BlcnR5IGZhaWxlZC4gUHJvYmFibHkgSUU4LlxuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGxhenkgU2VxIG9mIGB2YWx1ZWAgcmVwZWF0ZWQgYHRpbWVzYCB0aW1lcy4gV2hlbiBgdGltZXNgIGlzXG4gKiB1bmRlZmluZWQsIHJldHVybnMgYW4gaW5maW5pdGUgc2VxdWVuY2Ugb2YgYHZhbHVlYC5cbiAqL1xudmFyIFJlcGVhdCA9IC8qQF9fUFVSRV9fKi8oZnVuY3Rpb24gKEluZGV4ZWRTZXEkJDEpIHtcbiAgZnVuY3Rpb24gUmVwZWF0KHZhbHVlLCB0aW1lcykge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSZXBlYXQpKSB7XG4gICAgICByZXR1cm4gbmV3IFJlcGVhdCh2YWx1ZSwgdGltZXMpO1xuICAgIH1cbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuc2l6ZSA9IHRpbWVzID09PSB1bmRlZmluZWQgPyBJbmZpbml0eSA6IE1hdGgubWF4KDAsIHRpbWVzKTtcbiAgICBpZiAodGhpcy5zaXplID09PSAwKSB7XG4gICAgICBpZiAoRU1QVFlfUkVQRUFUKSB7XG4gICAgICAgIHJldHVybiBFTVBUWV9SRVBFQVQ7XG4gICAgICB9XG4gICAgICBFTVBUWV9SRVBFQVQgPSB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIGlmICggSW5kZXhlZFNlcSQkMSApIFJlcGVhdC5fX3Byb3RvX18gPSBJbmRleGVkU2VxJCQxO1xuICBSZXBlYXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSW5kZXhlZFNlcSQkMSAmJiBJbmRleGVkU2VxJCQxLnByb3RvdHlwZSApO1xuICBSZXBlYXQucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUmVwZWF0O1xuXG4gIFJlcGVhdC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gICAgaWYgKHRoaXMuc2l6ZSA9PT0gMCkge1xuICAgICAgcmV0dXJuICdSZXBlYXQgW10nO1xuICAgIH1cbiAgICByZXR1cm4gJ1JlcGVhdCBbICcgKyB0aGlzLl92YWx1ZSArICcgJyArIHRoaXMuc2l6ZSArICcgdGltZXMgXSc7XG4gIH07XG5cbiAgUmVwZWF0LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQgKGluZGV4LCBub3RTZXRWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmhhcyhpbmRleCkgPyB0aGlzLl92YWx1ZSA6IG5vdFNldFZhbHVlO1xuICB9O1xuXG4gIFJlcGVhdC5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyAoc2VhcmNoVmFsdWUpIHtcbiAgICByZXR1cm4gaXModGhpcy5fdmFsdWUsIHNlYXJjaFZhbHVlKTtcbiAgfTtcblxuICBSZXBlYXQucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UgKGJlZ2luLCBlbmQpIHtcbiAgICB2YXIgc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgICByZXR1cm4gd2hvbGVTbGljZShiZWdpbiwgZW5kLCBzaXplKVxuICAgICAgPyB0aGlzXG4gICAgICA6IG5ldyBSZXBlYXQoXG4gICAgICAgICAgdGhpcy5fdmFsdWUsXG4gICAgICAgICAgcmVzb2x2ZUVuZChlbmQsIHNpemUpIC0gcmVzb2x2ZUJlZ2luKGJlZ2luLCBzaXplKVxuICAgICAgICApO1xuICB9O1xuXG4gIFJlcGVhdC5wcm90b3R5cGUucmV2ZXJzZSA9IGZ1bmN0aW9uIHJldmVyc2UgKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIFJlcGVhdC5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YgKHNlYXJjaFZhbHVlKSB7XG4gICAgaWYgKGlzKHRoaXMuX3ZhbHVlLCBzZWFyY2hWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gLTE7XG4gIH07XG5cbiAgUmVwZWF0LnByb3RvdHlwZS5sYXN0SW5kZXhPZiA9IGZ1bmN0aW9uIGxhc3RJbmRleE9mIChzZWFyY2hWYWx1ZSkge1xuICAgIGlmIChpcyh0aGlzLl92YWx1ZSwgc2VhcmNoVmFsdWUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zaXplO1xuICAgIH1cbiAgICByZXR1cm4gLTE7XG4gIH07XG5cbiAgUmVwZWF0LnByb3RvdHlwZS5fX2l0ZXJhdGUgPSBmdW5jdGlvbiBfX2l0ZXJhdGUgKGZuLCByZXZlcnNlKSB7XG4gICAgdmFyIHNpemUgPSB0aGlzLnNpemU7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpICE9PSBzaXplKSB7XG4gICAgICBpZiAoZm4odGhpcy5fdmFsdWUsIHJldmVyc2UgPyBzaXplIC0gKytpIDogaSsrLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpO1xuICB9O1xuXG4gIFJlcGVhdC5wcm90b3R5cGUuX19pdGVyYXRvciA9IGZ1bmN0aW9uIF9faXRlcmF0b3IgKHR5cGUsIHJldmVyc2UpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHZhciBzaXplID0gdGhpcy5zaXplO1xuICAgIHZhciBpID0gMDtcbiAgICByZXR1cm4gbmV3IEl0ZXJhdG9yKFxuICAgICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gaSA9PT0gc2l6ZVxuICAgICAgICAgID8gaXRlcmF0b3JEb25lKClcbiAgICAgICAgICA6IGl0ZXJhdG9yVmFsdWUodHlwZSwgcmV2ZXJzZSA/IHNpemUgLSArK2kgOiBpKyssIHRoaXMkMS5fdmFsdWUpOyB9XG4gICAgKTtcbiAgfTtcblxuICBSZXBlYXQucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyAob3RoZXIpIHtcbiAgICByZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBSZXBlYXRcbiAgICAgID8gaXModGhpcy5fdmFsdWUsIG90aGVyLl92YWx1ZSlcbiAgICAgIDogZGVlcEVxdWFsKG90aGVyKTtcbiAgfTtcblxuICByZXR1cm4gUmVwZWF0O1xufShJbmRleGVkU2VxKSk7XG5cbnZhciBFTVBUWV9SRVBFQVQ7XG5cbmZ1bmN0aW9uIGZyb21KUyh2YWx1ZSwgY29udmVydGVyKSB7XG4gIHJldHVybiBmcm9tSlNXaXRoKFxuICAgIFtdLFxuICAgIGNvbnZlcnRlciB8fCBkZWZhdWx0Q29udmVydGVyLFxuICAgIHZhbHVlLFxuICAgICcnLFxuICAgIGNvbnZlcnRlciAmJiBjb252ZXJ0ZXIubGVuZ3RoID4gMiA/IFtdIDogdW5kZWZpbmVkLFxuICAgIHsgJyc6IHZhbHVlIH1cbiAgKTtcbn1cblxuZnVuY3Rpb24gZnJvbUpTV2l0aChzdGFjaywgY29udmVydGVyLCB2YWx1ZSwga2V5LCBrZXlQYXRoLCBwYXJlbnRWYWx1ZSkge1xuICB2YXIgdG9TZXEgPSBBcnJheS5pc0FycmF5KHZhbHVlKVxuICAgID8gSW5kZXhlZFNlcVxuICAgIDogaXNQbGFpbk9iaih2YWx1ZSlcbiAgICAgID8gS2V5ZWRTZXFcbiAgICAgIDogbnVsbDtcbiAgaWYgKHRvU2VxKSB7XG4gICAgaWYgKH5zdGFjay5pbmRleE9mKHZhbHVlKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgY2lyY3VsYXIgc3RydWN0dXJlIHRvIEltbXV0YWJsZScpO1xuICAgIH1cbiAgICBzdGFjay5wdXNoKHZhbHVlKTtcbiAgICBrZXlQYXRoICYmIGtleSAhPT0gJycgJiYga2V5UGF0aC5wdXNoKGtleSk7XG4gICAgdmFyIGNvbnZlcnRlZCA9IGNvbnZlcnRlci5jYWxsKFxuICAgICAgcGFyZW50VmFsdWUsXG4gICAgICBrZXksXG4gICAgICB0b1NlcSh2YWx1ZSkubWFwKGZ1bmN0aW9uICh2LCBrKSB7IHJldHVybiBmcm9tSlNXaXRoKHN0YWNrLCBjb252ZXJ0ZXIsIHYsIGssIGtleVBhdGgsIHZhbHVlKTsgfVxuICAgICAgKSxcbiAgICAgIGtleVBhdGggJiYga2V5UGF0aC5zbGljZSgpXG4gICAgKTtcbiAgICBzdGFjay5wb3AoKTtcbiAgICBrZXlQYXRoICYmIGtleVBhdGgucG9wKCk7XG4gICAgcmV0dXJuIGNvbnZlcnRlZDtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRDb252ZXJ0ZXIoaywgdikge1xuICByZXR1cm4gaXNLZXllZCh2KSA/IHYudG9NYXAoKSA6IHYudG9MaXN0KCk7XG59XG5cbnZhciB2ZXJzaW9uID0gXCI0LjAuMC1yYy4xMVwiO1xuXG52YXIgSW1tdXRhYmxlID0ge1xuICB2ZXJzaW9uOiB2ZXJzaW9uLFxuXG4gIENvbGxlY3Rpb246IENvbGxlY3Rpb24sXG4gIC8vIE5vdGU6IEl0ZXJhYmxlIGlzIGRlcHJlY2F0ZWRcbiAgSXRlcmFibGU6IENvbGxlY3Rpb24sXG5cbiAgU2VxOiBTZXEsXG4gIE1hcDogTWFwLFxuICBPcmRlcmVkTWFwOiBPcmRlcmVkTWFwLFxuICBMaXN0OiBMaXN0LFxuICBTdGFjazogU3RhY2ssXG4gIFNldDogU2V0LFxuICBPcmRlcmVkU2V0OiBPcmRlcmVkU2V0LFxuXG4gIFJlY29yZDogUmVjb3JkLFxuICBSYW5nZTogUmFuZ2UsXG4gIFJlcGVhdDogUmVwZWF0LFxuXG4gIGlzOiBpcyxcbiAgZnJvbUpTOiBmcm9tSlMsXG4gIGhhc2g6IGhhc2gsXG5cbiAgaXNJbW11dGFibGU6IGlzSW1tdXRhYmxlLFxuICBpc0NvbGxlY3Rpb246IGlzQ29sbGVjdGlvbixcbiAgaXNLZXllZDogaXNLZXllZCxcbiAgaXNJbmRleGVkOiBpc0luZGV4ZWQsXG4gIGlzQXNzb2NpYXRpdmU6IGlzQXNzb2NpYXRpdmUsXG4gIGlzT3JkZXJlZDogaXNPcmRlcmVkLFxuICBpc1ZhbHVlT2JqZWN0OiBpc1ZhbHVlT2JqZWN0LFxuICBpc1NlcTogaXNTZXEsXG4gIGlzTGlzdDogaXNMaXN0LFxuICBpc01hcDogaXNNYXAsXG4gIGlzT3JkZXJlZE1hcDogaXNPcmRlcmVkTWFwLFxuICBpc1N0YWNrOiBpc1N0YWNrLFxuICBpc1NldDogaXNTZXQsXG4gIGlzT3JkZXJlZFNldDogaXNPcmRlcmVkU2V0LFxuICBpc1JlY29yZDogaXNSZWNvcmQsXG5cbiAgZ2V0OiBnZXQsXG4gIGdldEluOiBnZXRJbixcbiAgaGFzOiBoYXMsXG4gIGhhc0luOiBoYXNJbixcbiAgbWVyZ2U6IG1lcmdlJDEsXG4gIG1lcmdlRGVlcDogbWVyZ2VEZWVwLFxuICBtZXJnZVdpdGg6IG1lcmdlV2l0aCQxLFxuICBtZXJnZURlZXBXaXRoOiBtZXJnZURlZXBXaXRoLFxuICByZW1vdmU6IHJlbW92ZSxcbiAgcmVtb3ZlSW46IHJlbW92ZUluLFxuICBzZXQ6IHNldCxcbiAgc2V0SW46IHNldEluLFxuICB1cGRhdGU6IHVwZGF0ZSxcbiAgdXBkYXRlSW46IHVwZGF0ZUluLFxufTtcblxuLy8gTm90ZTogSXRlcmFibGUgaXMgZGVwcmVjYXRlZFxudmFyIEl0ZXJhYmxlID0gQ29sbGVjdGlvbjtcblxuZXhwb3J0IGRlZmF1bHQgSW1tdXRhYmxlO1xuZXhwb3J0IHsgdmVyc2lvbiwgQ29sbGVjdGlvbiwgSXRlcmFibGUsIFNlcSwgTWFwLCBPcmRlcmVkTWFwLCBMaXN0LCBTdGFjaywgU2V0LCBPcmRlcmVkU2V0LCBSZWNvcmQsIFJhbmdlLCBSZXBlYXQsIGlzLCBmcm9tSlMsIGhhc2gsIGlzSW1tdXRhYmxlLCBpc0NvbGxlY3Rpb24sIGlzS2V5ZWQsIGlzSW5kZXhlZCwgaXNBc3NvY2lhdGl2ZSwgaXNPcmRlcmVkLCBpc1ZhbHVlT2JqZWN0LCBnZXQsIGdldEluLCBoYXMsIGhhc0luLCBtZXJnZSQxIGFzIG1lcmdlLCBtZXJnZURlZXAsIG1lcmdlV2l0aCQxIGFzIG1lcmdlV2l0aCwgbWVyZ2VEZWVwV2l0aCwgcmVtb3ZlLCByZW1vdmVJbiwgc2V0LCBzZXRJbiwgdXBkYXRlLCB1cGRhdGVJbiB9O1xuIiwiY29uc3QgeyBtZXJnZURlZXAgfSA9IHJlcXVpcmUoJ2ltbXV0YWJsZScpXHJcblxyXG5BZGVxdWEuc3RvcmFnZSA9IG51bGw7XHJcblxyXG5BZGVxdWEuc3RvcmFnZSA9IHt9O1xyXG5cclxuLy8gZnVuY3Rpb24gbWVyZ2VEZWVwKC4uLm9iamVjdHMpIHtcclxuLy8gICAgIGNvbnN0IGlzT2JqZWN0ID0gb2JqID0+IG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JztcclxuLy9cclxuLy8gICAgIHJldHVybiBvYmplY3RzLnJlZHVjZSgocHJldiwgb2JqKSA9PiB7XHJcbi8vICAgICAgICAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKChrZXkpID0+IHtcclxuLy8gICAgICAgICAgICAgY29uc3QgcFZhbCA9IHByZXZba2V5XTtcclxuLy8gICAgICAgICAgICAgY29uc3Qgb1ZhbCA9IG9ialtrZXldO1xyXG4vL1xyXG4vLyAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwVmFsKSAmJiBBcnJheS5pc0FycmF5KG9WYWwpKSB7XHJcbi8vICAgICAgICAgICAgICAgICBwcmV2W2tleV0gPSBwVmFsLmNvbmNhdCguLi5vVmFsKTtcclxuLy8gICAgICAgICAgICAgfSBlbHNlIGlmIChpc09iamVjdChwVmFsKSAmJiBpc09iamVjdChvVmFsKSkge1xyXG4vLyAgICAgICAgICAgICAgICAgcHJldltrZXldID0gbWVyZ2VEZWVwKHBWYWwsIG9WYWwpO1xyXG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICAgICAgcHJldltrZXldID0gb1ZhbDtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH0pO1xyXG4vL1xyXG4vLyAgICAgICAgIHJldHVybiBwcmV2O1xyXG4vLyAgICAgfSwge30pO1xyXG4vLyB9XHJcbmNvbnN0IHN0b3JlID0gZnVuY3Rpb24oKXtcclxuICAgIGNvbnNvbGUudGltZSgnc3RvcmUnKVxyXG4gICAgQWRlcXVhLkFQSS5zdG9yYWdlLnNldCh7Y3VycmVudDogQWRlcXVhLnN0b3JhZ2V9KTtcclxuICAgIGNvbnNvbGUudGltZUVuZCgnc3RvcmUnKVxyXG59O1xyXG5cclxuQWRlcXVhLnNldFN0b3JhZ2UgPSBmdW5jdGlvbiAobmV3Q3VycmVudCkge1xyXG4gICAgaWYgKEFkZXF1YS5zdG9yYWdlID09PSBudWxsKVxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBvbGRDdXJyZW50ID0gQWRlcXVhLnN0b3JhZ2UgfHwge307XHJcbiAgICBjb25zdCBjdXJyZW50ID0gbWVyZ2VEZWVwKG9sZEN1cnJlbnQsIG5ld0N1cnJlbnQpO1xyXG5cclxuICAgIEFkZXF1YS5zdG9yYWdlID0gY3VycmVudDtcclxuICAgIGNsZWFyVGltZW91dChBZGVxdWEuc2V0U3RvcmFnZVRpbWVvdXQgfHwgMCk7XHJcbiAgICBBZGVxdWEuc2V0U3RvcmFnZVRpbWVvdXQgPSBzZXRUaW1lb3V0KHN0b3JlLCAyMDAwKTtcclxuICAgIC8vIEFkZXF1YS5BUEkuc3RvcmFnZS5zZXQoe2N1cnJlbnR9KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==