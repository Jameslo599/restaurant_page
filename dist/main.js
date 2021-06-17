/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/welcomepage.js":
/*!****************************!*\
  !*** ./src/welcomepage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeHeader": () => (/* binding */ makeHeader),
/* harmony export */   "makeBio": () => (/* binding */ makeBio),
/* harmony export */   "makeImage": () => (/* binding */ makeImage)
/* harmony export */ });
let contents = document.getElementById("content");

let makeHeader = function() {
    let header = document.createElement("h1");
    header.innerHTML = 'Zen Sushi & Grill';
    header.id = 'header';
    contents.appendChild(header);
};

let makeBio = function() {
    let biography = document.createElement("h2");
    biography.innerHTML = `We specialize in delicious Japanese cuisine, 
    from fresh sushi with a variety of special fish such as Toro, 
    to hibachi entrees grilled to perfection in the kitchen. <br/><br/>
    Our talented team consists of: <br/><br/> 
    Chef-owner Jack with over 25 years of experience and who previously owned 
    "Kiraku Japanese Restaurant" in Houston, Texas. 
    He works hard every day to provide a customized experience for every customer 
    and treats them like his own family. 
    When he is not working, Jack enjoys watching movies, singing, 
    and spending time with his family. <br/><br/>
    Head sushi-chef Kitamura-san who was previously 
    the head chef of Jinbei Japanese Restaurant 
    and has over 40 years of experience working in Japan, Hawaii and New York. 
    Kitamura-san focuses heavily on ensuring the quality 
    and standards of our sushi are of the highest order. 
    In his free time, Kitamura-san enjoys playing with his cats, 
    cooking and spending time with his grandchildren.`;
    contents.appendChild(biography);
};

let makeImage = function() {
    let image = document.createElement("img");
    image.src = '/images/ZenBar.png'; 
    contents.appendChild(image);
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _welcomepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcomepage.js */ "./src/welcomepage.js");


(0,_welcomepage_js__WEBPACK_IMPORTED_MODULE_0__.makeHeader)();
(0,_welcomepage_js__WEBPACK_IMPORTED_MODULE_0__.makeBio)();
(0,_welcomepage_js__WEBPACK_IMPORTED_MODULE_0__.makeImage)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvd2VsY29tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQztBQUNBO0FBQ0E7Ozs7Ozs7O1VDbkNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTmdFOztBQUVoRSwyREFBVTtBQUNWLHdEQUFPO0FBQ1AsMERBQVMsRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGNvbnRlbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5sZXQgbWFrZUhlYWRlciA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaGVhZGVyLmlubmVySFRNTCA9ICdaZW4gU3VzaGkgJiBHcmlsbCc7XG4gICAgaGVhZGVyLmlkID0gJ2hlYWRlcic7XG4gICAgY29udGVudHMuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn07XG5cbmxldCBtYWtlQmlvID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGJpb2dyYXBoeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBiaW9ncmFwaHkuaW5uZXJIVE1MID0gYFdlIHNwZWNpYWxpemUgaW4gZGVsaWNpb3VzIEphcGFuZXNlIGN1aXNpbmUsIFxuICAgIGZyb20gZnJlc2ggc3VzaGkgd2l0aCBhIHZhcmlldHkgb2Ygc3BlY2lhbCBmaXNoIHN1Y2ggYXMgVG9ybywgXG4gICAgdG8gaGliYWNoaSBlbnRyZWVzIGdyaWxsZWQgdG8gcGVyZmVjdGlvbiBpbiB0aGUga2l0Y2hlbi4gPGJyLz48YnIvPlxuICAgIE91ciB0YWxlbnRlZCB0ZWFtIGNvbnNpc3RzIG9mOiA8YnIvPjxici8+IFxuICAgIENoZWYtb3duZXIgSmFjayB3aXRoIG92ZXIgMjUgeWVhcnMgb2YgZXhwZXJpZW5jZSBhbmQgd2hvIHByZXZpb3VzbHkgb3duZWQgXG4gICAgXCJLaXJha3UgSmFwYW5lc2UgUmVzdGF1cmFudFwiIGluIEhvdXN0b24sIFRleGFzLiBcbiAgICBIZSB3b3JrcyBoYXJkIGV2ZXJ5IGRheSB0byBwcm92aWRlIGEgY3VzdG9taXplZCBleHBlcmllbmNlIGZvciBldmVyeSBjdXN0b21lciBcbiAgICBhbmQgdHJlYXRzIHRoZW0gbGlrZSBoaXMgb3duIGZhbWlseS4gXG4gICAgV2hlbiBoZSBpcyBub3Qgd29ya2luZywgSmFjayBlbmpveXMgd2F0Y2hpbmcgbW92aWVzLCBzaW5naW5nLCBcbiAgICBhbmQgc3BlbmRpbmcgdGltZSB3aXRoIGhpcyBmYW1pbHkuIDxici8+PGJyLz5cbiAgICBIZWFkIHN1c2hpLWNoZWYgS2l0YW11cmEtc2FuIHdobyB3YXMgcHJldmlvdXNseSBcbiAgICB0aGUgaGVhZCBjaGVmIG9mIEppbmJlaSBKYXBhbmVzZSBSZXN0YXVyYW50IFxuICAgIGFuZCBoYXMgb3ZlciA0MCB5ZWFycyBvZiBleHBlcmllbmNlIHdvcmtpbmcgaW4gSmFwYW4sIEhhd2FpaSBhbmQgTmV3IFlvcmsuIFxuICAgIEtpdGFtdXJhLXNhbiBmb2N1c2VzIGhlYXZpbHkgb24gZW5zdXJpbmcgdGhlIHF1YWxpdHkgXG4gICAgYW5kIHN0YW5kYXJkcyBvZiBvdXIgc3VzaGkgYXJlIG9mIHRoZSBoaWdoZXN0IG9yZGVyLiBcbiAgICBJbiBoaXMgZnJlZSB0aW1lLCBLaXRhbXVyYS1zYW4gZW5qb3lzIHBsYXlpbmcgd2l0aCBoaXMgY2F0cywgXG4gICAgY29va2luZyBhbmQgc3BlbmRpbmcgdGltZSB3aXRoIGhpcyBncmFuZGNoaWxkcmVuLmA7XG4gICAgY29udGVudHMuYXBwZW5kQ2hpbGQoYmlvZ3JhcGh5KTtcbn07XG5cbmxldCBtYWtlSW1hZ2UgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltYWdlLnNyYyA9ICcvaW1hZ2VzL1plbkJhci5wbmcnOyBcbiAgICBjb250ZW50cy5hcHBlbmRDaGlsZChpbWFnZSk7XG59O1xuXG5leHBvcnQge21ha2VIZWFkZXIsIG1ha2VCaW8sIG1ha2VJbWFnZX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge21ha2VIZWFkZXIsIG1ha2VCaW8sIG1ha2VJbWFnZX0gZnJvbSAnLi93ZWxjb21lcGFnZS5qcyc7XG5cbm1ha2VIZWFkZXIoKTtcbm1ha2VCaW8oKTtcbm1ha2VJbWFnZSgpOyJdLCJzb3VyY2VSb290IjoiIn0=