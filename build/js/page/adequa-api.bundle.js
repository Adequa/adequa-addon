!function(e){var t={};function n(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const s={callbacks:{},nextId:1,addCallback:function(e){const t=this.nextId;return this.callbacks[this.nextId]=e,this.nextId++,t},sendMessage:function(e,t){"function"==typeof t&&(e.requestId=this.addCallback(t)),window.postMessage({direction:"adequa-tocontentscript",message:e},"*")}},a={Emitter:{},execCallback:function(e,...t){"function"==typeof this.Emitter.callbacks[e]&&this.Emitter.callbacks[e](...t),delete this.Emitter.callbacks[e]},handler:function(e){switch(e.what){case"siteViews":this.execCallback(e.requestId,e.views);break;case"consent":this.execCallback(e.requestId,e.consent);break;case"dimensions":this.execCallback(e.requestId,e.dimensions);break;case"vendorConsents":this.execCallback(e.requestId,e.vendorConsents,!0);break;case"consentData":this.execCallback(e.requestId,e.consentData,!0);break;case"settings":this.execCallback(e.requestId,e.settings);break;case"openModal":window.AdequaCmp.showCookieSettings();break;default:e.requestId&&this.execCallback(e.requestId)}},setup:function(e){this.Emitter=e,window.addEventListener("message",e=>{if(e.source===window&&e.data.direction&&"adequa-topage"===e.data.direction){const t=e.data.message;if(!t)return;this.handler(t)}})}};!function(){a.setup(s);const e={getViews:function(e){s.sendMessage({what:"getSiteViews"},e)},getConsent:function(e){s.sendMessage({what:"getConsent"},e)},getDimensions(e){s.sendMessage({what:"getDimensions"},e)}};window.Adequa=e}()}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhZ2UvZXZlbnQvZW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnZS9ldmVudC9oYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wYWdlL2FkZXF1YS1hcGkuanMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJFbWl0dGVyIiwiY2FsbGJhY2tzIiwibmV4dElkIiwiYWRkQ2FsbGJhY2siLCJjYWxsYmFjayIsImlkIiwidGhpcyIsInNlbmRNZXNzYWdlIiwibXNnIiwicmVxdWVzdElkIiwid2luZG93IiwicG9zdE1lc3NhZ2UiLCJkaXJlY3Rpb24iLCJtZXNzYWdlIiwiSGFuZGxlciIsImV4ZWNDYWxsYmFjayIsImFyZ3MiLCJoYW5kbGVyIiwid2hhdCIsInZpZXdzIiwiY29uc2VudCIsImRpbWVuc2lvbnMiLCJ2ZW5kb3JDb25zZW50cyIsImNvbnNlbnREYXRhIiwic2V0dGluZ3MiLCJBZGVxdWFDbXAiLCJzaG93Q29va2llU2V0dGluZ3MiLCJzZXR1cCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInNvdXJjZSIsImRhdGEiLCJBZGVxdWEiLCJnZXRWaWV3cyIsImdldENvbnNlbnQiLCJn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QWEsR0FDMUQsTUFDSixJQUFLLFdBQ0RqQixLQUFLUyxhQUFhRixFQUFRSixVQUFXSSxFQUFRVyxVQUM3QyxNQUNKLElBQUssWUFDRGQsT0FBT2UsVUFBVUMscUJBQ2pCLE1BQ0osUUFDT2IsRUFBUUosV0FBV0gsS0FBS1MsYUFBYUYsRUFBUUosYUFHNURrQixNQUFPLFNBQVUzQixHQUNiTSxLQUFLTixRQUFVQSxFQUNmVSxPQUFPa0IsaUJBQWlCLFVBQVdDLElBQy9CLEdBQ0lBLEVBQU1DLFNBQVdwQixRQUNqQm1CLEVBQU1FLEtBQUtuQixXQUNjLGtCQUF6QmlCLEVBQU1FLEtBQUtuQixVQUNiLENBQ0UsTUFBTUMsRUFBVWdCLEVBQU1FLEtBQUtsQixRQUMzQixJQUFLQSxFQUFTLE9BRWRQLEtBQUtXLFFBQVFKLFNDN0M3QixXQUVJQyxFQUFRYSxNQUFNM0IsR0FFZCxNQUFNZ0MsRUFBUyxDQUNYQyxTQUFVLFNBQVM3QixHQUNmSixFQUFRTyxZQUFZLENBQUNXLEtBQU0sZ0JBQWlCZCxJQUVoRDhCLFdBQVksU0FBUzlCLEdBQ2pCSixFQUFRTyxZQUFZLENBQUNXLEtBQU0sY0FBZWQsSUFFOUMrQixjQUFjL0IsR0FDVkosRUFBUU8sWUFBWSxDQUFDVyxLQUFNLGlCQUFrQmQsS0F1QnJETSxPQUFPc0IsT0FBU0EsRUFuQ3BCIiwiZmlsZSI6ImFkZXF1YS1hcGkuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiY29uc3QgRW1pdHRlciA9IHtcclxuICAgIGNhbGxiYWNrczoge30sXHJcbiAgICBuZXh0SWQ6IDEsXHJcbiAgICBhZGRDYWxsYmFjazogZnVuY3Rpb24oY2FsbGJhY2spe1xyXG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5uZXh0SWQ7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja3NbdGhpcy5uZXh0SWRdID0gY2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5uZXh0SWQrKztcclxuXHJcbiAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgfSxcclxuICAgIHNlbmRNZXNzYWdlOiBmdW5jdGlvbihtc2csIGNhbGxiYWNrKXtcclxuICAgICAgICBpZih0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikgbXNnLnJlcXVlc3RJZCA9IHRoaXMuYWRkQ2FsbGJhY2soY2FsbGJhY2spO1xyXG4gICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBcImFkZXF1YS10b2NvbnRlbnRzY3JpcHRcIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1zZ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIipcIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQge0VtaXR0ZXJ9XHJcbiIsImNvbnN0IEhhbmRsZXIgPSB7XHJcbiAgICBFbWl0dGVyOiB7fSxcclxuICAgIGV4ZWNDYWxsYmFjazogZnVuY3Rpb24gKGlkLCAuLi5hcmdzKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLkVtaXR0ZXIuY2FsbGJhY2tzW2lkXSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuRW1pdHRlci5jYWxsYmFja3NbaWRdKC4uLmFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxldGUgdGhpcy5FbWl0dGVyLmNhbGxiYWNrc1tpZF07XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlcjogZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICBzd2l0Y2ggKG1lc3NhZ2Uud2hhdCkge1xyXG4gICAgICAgICAgICBjYXNlIFwic2l0ZVZpZXdzXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWNDYWxsYmFjayhtZXNzYWdlLnJlcXVlc3RJZCwgbWVzc2FnZS52aWV3cyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNvbnNlbnRcIjpcclxuICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjb25zZW50VXBkYXRlZCcsIHtkZXRhaWw6IG1lc3NhZ2UuY29uc2VudC5jb25zZW50U3RyaW5nfSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leGVjQ2FsbGJhY2sobWVzc2FnZS5yZXF1ZXN0SWQsIG1lc3NhZ2UuY29uc2VudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRpbWVuc2lvbnNcIjpcclxuICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjb25zZW50VXBkYXRlZCcsIHtkZXRhaWw6IG1lc3NhZ2UuY29uc2VudC5jb25zZW50U3RyaW5nfSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leGVjQ2FsbGJhY2sobWVzc2FnZS5yZXF1ZXN0SWQsIG1lc3NhZ2UuZGltZW5zaW9ucyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInZlbmRvckNvbnNlbnRzXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWNDYWxsYmFjayhtZXNzYWdlLnJlcXVlc3RJZCwgbWVzc2FnZS52ZW5kb3JDb25zZW50cywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNvbnNlbnREYXRhXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWNDYWxsYmFjayhtZXNzYWdlLnJlcXVlc3RJZCwgbWVzc2FnZS5jb25zZW50RGF0YSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInNldHRpbmdzXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWNDYWxsYmFjayhtZXNzYWdlLnJlcXVlc3RJZCwgbWVzc2FnZS5zZXR0aW5ncyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm9wZW5Nb2RhbFwiOlxyXG4gICAgICAgICAgICAgICAgd2luZG93LkFkZXF1YUNtcC5zaG93Q29va2llU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgaWYobWVzc2FnZS5yZXF1ZXN0SWQpIHRoaXMuZXhlY0NhbGxiYWNrKG1lc3NhZ2UucmVxdWVzdElkKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2V0dXA6IGZ1bmN0aW9uIChFbWl0dGVyKSB7XHJcbiAgICAgICAgdGhpcy5FbWl0dGVyID0gRW1pdHRlcjtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBldmVudC5zb3VyY2UgPT09IHdpbmRvdyAmJlxyXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5kaXJlY3Rpb24gJiZcclxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuZGlyZWN0aW9uID09PSBcImFkZXF1YS10b3BhZ2VcIlxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBldmVudC5kYXRhLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW1lc3NhZ2UpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXIobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCB7SGFuZGxlcn1cclxuIiwiaW1wb3J0IHtFbWl0dGVyfSBmcm9tIFwiLi9ldmVudC9lbWl0dGVyXCI7XHJcbmltcG9ydCB7SGFuZGxlcn0gZnJvbSBcIi4vZXZlbnQvaGFuZGxlclwiXHJcblxyXG4oZnVuY3Rpb24oKXtcclxuXHJcbiAgICBIYW5kbGVyLnNldHVwKEVtaXR0ZXIpO1xyXG5cclxuICAgIGNvbnN0IEFkZXF1YSA9IHtcclxuICAgICAgICBnZXRWaWV3czogZnVuY3Rpb24oY2FsbGJhY2spe1xyXG4gICAgICAgICAgICBFbWl0dGVyLnNlbmRNZXNzYWdlKHt3aGF0OiBcImdldFNpdGVWaWV3c1wifSwgY2FsbGJhY2spXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRDb25zZW50OiBmdW5jdGlvbihjYWxsYmFjayl7XHJcbiAgICAgICAgICAgIEVtaXR0ZXIuc2VuZE1lc3NhZ2Uoe3doYXQ6IFwiZ2V0Q29uc2VudFwifSwgY2FsbGJhY2spXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXREaW1lbnNpb25zKGNhbGxiYWNrKXtcclxuICAgICAgICAgICAgRW1pdHRlci5zZW5kTWVzc2FnZSh7d2hhdDogXCJnZXREaW1lbnNpb25zXCJ9LCBjYWxsYmFjaylcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY21wOiAoY29tbWFuZCwgcGFyYW1ldGVyLCBjYWxsYmFjaykgPT4ge1xyXG4gICAgICAgIC8vICAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcclxuICAgICAgICAvLyAgICAgICAgIGNhc2UgJ2dldFZlbmRvckNvbnNlbnRzJzpcclxuICAgICAgICAvLyAgICAgICAgICAgICBFbWl0dGVyLnNlbmRNZXNzYWdlKHt3aGF0OiBcImdldFZlbmRvckNvbnNlbnRzXCIsIHZlbmRvcklkczogcGFyYW1ldGVyfSwgY2FsbGJhY2spO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvLyAgICAgICAgIGNhc2UgJ2dldENvbnNlbnREYXRhJzpcclxuICAgICAgICAvLyAgICAgICAgICAgICBFbWl0dGVyLnNlbmRNZXNzYWdlKHt3aGF0OiBcImdldENvbnNlbnREYXRhXCJ9LCBjYWxsYmFjayk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vICAgICAgICAgY2FzZSAncGluZyc6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY2FsbGJhY2soe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBnZHByQXBwbGllczogdHJ1ZSxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY21wTG9hZGVkOiB0cnVlXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSwgdHJ1ZSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBhZGRTZXR0aW5nczogZnVuY3Rpb24gKHNldHRpbmdzKSB7XHJcbiAgICAgICAgLy8gICAgIEVtaXR0ZXIuc2VuZE1lc3NhZ2Uoe3doYXQ6IFwic2V0U2V0dGluZ3NcIiwgc2V0dGluZ3N9KTtcclxuICAgICAgICAvLyB9LFxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuQWRlcXVhID0gQWRlcXVhO1xyXG59KSgpO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==