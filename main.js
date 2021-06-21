/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let contents = document.getElementById('content');

let makeMenu = function() {
    let modalContainer = document.createElement('div');
    modalContainer.id = 'modalContainer';
    contents.appendChild(modalContainer);

    let image;
    for (let i = 1; i <= 8; i++) {
        image = document.createElement('img');
        image.src = `/images/menu${i}.jpg`;
        image.className = 'menuImage';
        image.id = 'menuImage';
        modalContainer.appendChild(image);
        };
    
    //image.addEventListener('click', function() {
    //    let src = this.getAttribute('src');
    //    let modal = document.getElementById('menuImage');
    //    modal.id = 'modal';
    //    modal.background = 'RGBA(0,0,0,.5) url(' + src + ') no-repeat center';
    //    contents.appendChild(modal);
    //})

    let imageSpan = document.createElement('span')
    imageSpan.id = imageSpan;
    image.appendChild(imageSpan);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeMenu);

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeNavBar": () => (/* binding */ makeNavBar),
/* harmony export */   "makeLogo": () => (/* binding */ makeLogo)
/* harmony export */ });
let contents = document.getElementById("content");

let makeNavBar = function() {
    let navbar = document.createElement('ul');
    navbar.className = 'nav';
    contents.appendChild(navbar);

    let homeButton = document.createElement('li');
    let aHome = document.createElement('a');
    aHome.innerHTML = 'Home';
    aHome.href = '#';
    homeButton.id = 'home'
    homeButton.appendChild(aHome);
    navbar.appendChild(homeButton);

    let menuButton = document.createElement('li');
    let aMenu = document.createElement('a');
    aMenu.innerHTML = 'Menu';
    aMenu.href = '#';
    menuButton.id = 'menu'
    menuButton.appendChild(aMenu);
    navbar.appendChild(menuButton);

    let contactButton = document.createElement('li');
    let aContact = document.createElement('a');
    aContact.innerHTML = 'Contact';
    aContact.href = '#';
    contactButton.id = 'contact'
    contactButton.appendChild(aContact);
    navbar.appendChild(contactButton);
};

let makeLogo = function() {
    let logo = document.createElement('img');
    let aLogo = document.createElement('a');
    aLogo.href = '#';
    aLogo.appendChild(logo);
    logo.className = 'logo';
    logo.src = '/images/Daruma.png';
    document.getElementById('logoHolder').appendChild(aLogo);
};



/***/ }),

/***/ "./src/welcomepage.js":
/*!****************************!*\
  !*** ./src/welcomepage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contents": () => (/* binding */ contents),
/* harmony export */   "makeImage": () => (/* binding */ makeImage),
/* harmony export */   "populateWelcome": () => (/* binding */ populateWelcome)
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
    biography.id = 'biography';
    contents.appendChild(biography);
};

let makeImage = function() {
    let image = document.createElement("img");
    image.src = '/images/Banner.jpg';
    image.className = 'bannerImage';
    image.id = 'banner'
    contents.appendChild(image);
};

let populateWelcome = function() {
    makeHeader();
    makeBio();
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
/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.js */ "./src/navbar.js");
/* harmony import */ var _welcomepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcomepage.js */ "./src/welcomepage.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");




(0,_navbar_js__WEBPACK_IMPORTED_MODULE_0__.makeNavBar)();
(0,_navbar_js__WEBPACK_IMPORTED_MODULE_0__.makeLogo)();
(0,_welcomepage_js__WEBPACK_IMPORTED_MODULE_1__.makeImage)();
(0,_welcomepage_js__WEBPACK_IMPORTED_MODULE_1__.populateWelcome)();

let homeTab = 1;
let menuTab = 0;
let contactTab = 0;

let removeWelcome = function() {
    if (homeTab === 1) {
    _welcomepage_js__WEBPACK_IMPORTED_MODULE_1__.contents.removeChild(document.getElementById('header'));
    _welcomepage_js__WEBPACK_IMPORTED_MODULE_1__.contents.removeChild(document.getElementById('biography'));
    } else {};
};

let removeMenu = function() {
    if (menuTab === 1) {
    _welcomepage_js__WEBPACK_IMPORTED_MODULE_1__.contents.removeChild(document.getElementById('modalContainer'));
    } else {};
};

let goHome = function() {
    if (homeTab === 0) {
        (0,_welcomepage_js__WEBPACK_IMPORTED_MODULE_1__.populateWelcome)();
        removeMenu();
        homeTab = 1;
        menuTab = 0;
        contactTab = 0;
    } else {};
};

let goMenu = function() {
    if (menuTab === 0) {
        removeWelcome();
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.default)();
        homeTab = 0;
        menuTab = 1;
        contactTab = 0;
    } else {};
};

let goContact = function() {
    if (contactTab === 0) {
        removeWelcome();
        removeMenu();
        contactTab = 1;
        menuTab = 0;
        homeTab = 0;
    } else {};
};

document.getElementById('home').addEventListener('click', goHome, false);
document.getElementById('menu').addEventListener('click', goMenu, false);
document.getElementById('contact').addEventListener('click', goContact, false);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbmF2YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy93ZWxjb21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0EsbUNBQW1DLEVBQUU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEU7Ozs7Ozs7Ozs7Ozs7OztBQzdCdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDM0NBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7QUNOaUQ7QUFDcUI7QUFDckM7O0FBRWpDLHNEQUFVO0FBQ1Ysb0RBQVE7QUFDUiwwREFBUztBQUNULGdFQUFlOztBQUVmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxpRUFBb0I7QUFDeEIsSUFBSSxpRUFBb0I7QUFDeEIsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxJQUFJLGlFQUFvQjtBQUN4QixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLFFBQVEsZ0VBQWU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBUTtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLCtFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgY29udGVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5sZXQgbWFrZU1lbnUgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbENvbnRhaW5lci5pZCA9ICdtb2RhbENvbnRhaW5lcic7XG4gICAgY29udGVudHMuYXBwZW5kQ2hpbGQobW9kYWxDb250YWluZXIpO1xuXG4gICAgbGV0IGltYWdlO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDg7IGkrKykge1xuICAgICAgICBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpbWFnZS5zcmMgPSBgL2ltYWdlcy9tZW51JHtpfS5qcGdgO1xuICAgICAgICBpbWFnZS5jbGFzc05hbWUgPSAnbWVudUltYWdlJztcbiAgICAgICAgaW1hZ2UuaWQgPSAnbWVudUltYWdlJztcbiAgICAgICAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICAgICB9O1xuICAgIFxuICAgIC8vaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAvLyAgICBsZXQgc3JjID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgIC8vICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51SW1hZ2UnKTtcbiAgICAvLyAgICBtb2RhbC5pZCA9ICdtb2RhbCc7XG4gICAgLy8gICAgbW9kYWwuYmFja2dyb3VuZCA9ICdSR0JBKDAsMCwwLC41KSB1cmwoJyArIHNyYyArICcpIG5vLXJlcGVhdCBjZW50ZXInO1xuICAgIC8vICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgICAvL30pXG5cbiAgICBsZXQgaW1hZ2VTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgaW1hZ2VTcGFuLmlkID0gaW1hZ2VTcGFuO1xuICAgIGltYWdlLmFwcGVuZENoaWxkKGltYWdlU3Bhbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYWtlTWVudTsiLCJsZXQgY29udGVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmxldCBtYWtlTmF2QmFyID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbmF2YmFyLmNsYXNzTmFtZSA9ICduYXYnO1xuICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKG5hdmJhcik7XG5cbiAgICBsZXQgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGV0IGFIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGFIb21lLmlubmVySFRNTCA9ICdIb21lJztcbiAgICBhSG9tZS5ocmVmID0gJyMnO1xuICAgIGhvbWVCdXR0b24uaWQgPSAnaG9tZSdcbiAgICBob21lQnV0dG9uLmFwcGVuZENoaWxkKGFIb21lKTtcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG5cbiAgICBsZXQgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGV0IGFNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGFNZW51LmlubmVySFRNTCA9ICdNZW51JztcbiAgICBhTWVudS5ocmVmID0gJyMnO1xuICAgIG1lbnVCdXR0b24uaWQgPSAnbWVudSdcbiAgICBtZW51QnV0dG9uLmFwcGVuZENoaWxkKGFNZW51KTtcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG5cbiAgICBsZXQgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGV0IGFDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGFDb250YWN0LmlubmVySFRNTCA9ICdDb250YWN0JztcbiAgICBhQ29udGFjdC5ocmVmID0gJyMnO1xuICAgIGNvbnRhY3RCdXR0b24uaWQgPSAnY29udGFjdCdcbiAgICBjb250YWN0QnV0dG9uLmFwcGVuZENoaWxkKGFDb250YWN0KTtcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG59O1xuXG5sZXQgbWFrZUxvZ28gPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGxldCBhTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhTG9nby5ocmVmID0gJyMnO1xuICAgIGFMb2dvLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgIGxvZ28uY2xhc3NOYW1lID0gJ2xvZ28nO1xuICAgIGxvZ28uc3JjID0gJy9pbWFnZXMvRGFydW1hLnBuZyc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ29Ib2xkZXInKS5hcHBlbmRDaGlsZChhTG9nbyk7XG59O1xuXG5leHBvcnQge21ha2VOYXZCYXIsIG1ha2VMb2dvfTsiLCJsZXQgY29udGVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmxldCBtYWtlSGVhZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkZXIuaW5uZXJIVE1MID0gJ1plbiBTdXNoaSAmIEdyaWxsJztcbiAgICBoZWFkZXIuaWQgPSAnaGVhZGVyJztcbiAgICBjb250ZW50cy5hcHBlbmRDaGlsZChoZWFkZXIpO1xufTtcblxubGV0IG1ha2VCaW8gPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgYmlvZ3JhcGh5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGJpb2dyYXBoeS5pbm5lckhUTUwgPSBgV2Ugc3BlY2lhbGl6ZSBpbiBkZWxpY2lvdXMgSmFwYW5lc2UgY3Vpc2luZSwgXG4gICAgZnJvbSBmcmVzaCBzdXNoaSB3aXRoIGEgdmFyaWV0eSBvZiBzcGVjaWFsIGZpc2ggc3VjaCBhcyBUb3JvLCBcbiAgICB0byBoaWJhY2hpIGVudHJlZXMgZ3JpbGxlZCB0byBwZXJmZWN0aW9uIGluIHRoZSBraXRjaGVuLiA8YnIvPjxici8+XG4gICAgT3VyIHRhbGVudGVkIHRlYW0gY29uc2lzdHMgb2Y6IDxici8+PGJyLz4gXG4gICAgQ2hlZi1vd25lciBKYWNrIHdpdGggb3ZlciAyNSB5ZWFycyBvZiBleHBlcmllbmNlIGFuZCB3aG8gcHJldmlvdXNseSBvd25lZCBcbiAgICBcIktpcmFrdSBKYXBhbmVzZSBSZXN0YXVyYW50XCIgaW4gSG91c3RvbiwgVGV4YXMuIFxuICAgIEhlIHdvcmtzIGhhcmQgZXZlcnkgZGF5IHRvIHByb3ZpZGUgYSBjdXN0b21pemVkIGV4cGVyaWVuY2UgZm9yIGV2ZXJ5IGN1c3RvbWVyIFxuICAgIGFuZCB0cmVhdHMgdGhlbSBsaWtlIGhpcyBvd24gZmFtaWx5LiBcbiAgICBXaGVuIGhlIGlzIG5vdCB3b3JraW5nLCBKYWNrIGVuam95cyB3YXRjaGluZyBtb3ZpZXMsIHNpbmdpbmcsIFxuICAgIGFuZCBzcGVuZGluZyB0aW1lIHdpdGggaGlzIGZhbWlseS4gPGJyLz48YnIvPlxuICAgIEhlYWQgc3VzaGktY2hlZiBLaXRhbXVyYS1zYW4gd2hvIHdhcyBwcmV2aW91c2x5IFxuICAgIHRoZSBoZWFkIGNoZWYgb2YgSmluYmVpIEphcGFuZXNlIFJlc3RhdXJhbnQgXG4gICAgYW5kIGhhcyBvdmVyIDQwIHllYXJzIG9mIGV4cGVyaWVuY2Ugd29ya2luZyBpbiBKYXBhbiwgSGF3YWlpIGFuZCBOZXcgWW9yay4gXG4gICAgS2l0YW11cmEtc2FuIGZvY3VzZXMgaGVhdmlseSBvbiBlbnN1cmluZyB0aGUgcXVhbGl0eSBcbiAgICBhbmQgc3RhbmRhcmRzIG9mIG91ciBzdXNoaSBhcmUgb2YgdGhlIGhpZ2hlc3Qgb3JkZXIuIFxuICAgIEluIGhpcyBmcmVlIHRpbWUsIEtpdGFtdXJhLXNhbiBlbmpveXMgcGxheWluZyB3aXRoIGhpcyBjYXRzLCBcbiAgICBjb29raW5nIGFuZCBzcGVuZGluZyB0aW1lIHdpdGggaGlzIGdyYW5kY2hpbGRyZW4uYDtcbiAgICBiaW9ncmFwaHkuaWQgPSAnYmlvZ3JhcGh5JztcbiAgICBjb250ZW50cy5hcHBlbmRDaGlsZChiaW9ncmFwaHkpO1xufTtcblxubGV0IG1ha2VJbWFnZSA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1hZ2Uuc3JjID0gJy9pbWFnZXMvQmFubmVyLmpwZyc7XG4gICAgaW1hZ2UuY2xhc3NOYW1lID0gJ2Jhbm5lckltYWdlJztcbiAgICBpbWFnZS5pZCA9ICdiYW5uZXInXG4gICAgY29udGVudHMuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xufTtcblxubGV0IHBvcHVsYXRlV2VsY29tZSA9IGZ1bmN0aW9uKCkge1xuICAgIG1ha2VIZWFkZXIoKTtcbiAgICBtYWtlQmlvKCk7XG59O1xuXG5leHBvcnQge2NvbnRlbnRzLCBtYWtlSW1hZ2UsIHBvcHVsYXRlV2VsY29tZX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge21ha2VOYXZCYXIsIG1ha2VMb2dvfSBmcm9tICcuL25hdmJhci5qcyc7XG5pbXBvcnQge2NvbnRlbnRzLCBtYWtlSW1hZ2UsIHBvcHVsYXRlV2VsY29tZX0gZnJvbSAnLi93ZWxjb21lcGFnZS5qcyc7XG5pbXBvcnQgbWFrZU1lbnUgZnJvbSAnLi9tZW51LmpzJztcblxubWFrZU5hdkJhcigpO1xubWFrZUxvZ28oKTtcbm1ha2VJbWFnZSgpO1xucG9wdWxhdGVXZWxjb21lKCk7XG5cbmxldCBob21lVGFiID0gMTtcbmxldCBtZW51VGFiID0gMDtcbmxldCBjb250YWN0VGFiID0gMDtcblxubGV0IHJlbW92ZVdlbGNvbWUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoaG9tZVRhYiA9PT0gMSkge1xuICAgIGNvbnRlbnRzLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKSk7XG4gICAgY29udGVudHMucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jpb2dyYXBoeScpKTtcbiAgICB9IGVsc2Uge307XG59O1xuXG5sZXQgcmVtb3ZlTWVudSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChtZW51VGFiID09PSAxKSB7XG4gICAgY29udGVudHMucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsQ29udGFpbmVyJykpO1xuICAgIH0gZWxzZSB7fTtcbn07XG5cbmxldCBnb0hvbWUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoaG9tZVRhYiA9PT0gMCkge1xuICAgICAgICBwb3B1bGF0ZVdlbGNvbWUoKTtcbiAgICAgICAgcmVtb3ZlTWVudSgpO1xuICAgICAgICBob21lVGFiID0gMTtcbiAgICAgICAgbWVudVRhYiA9IDA7XG4gICAgICAgIGNvbnRhY3RUYWIgPSAwO1xuICAgIH0gZWxzZSB7fTtcbn07XG5cbmxldCBnb01lbnUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAobWVudVRhYiA9PT0gMCkge1xuICAgICAgICByZW1vdmVXZWxjb21lKCk7XG4gICAgICAgIG1ha2VNZW51KCk7XG4gICAgICAgIGhvbWVUYWIgPSAwO1xuICAgICAgICBtZW51VGFiID0gMTtcbiAgICAgICAgY29udGFjdFRhYiA9IDA7XG4gICAgfSBlbHNlIHt9O1xufTtcblxubGV0IGdvQ29udGFjdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChjb250YWN0VGFiID09PSAwKSB7XG4gICAgICAgIHJlbW92ZVdlbGNvbWUoKTtcbiAgICAgICAgcmVtb3ZlTWVudSgpO1xuICAgICAgICBjb250YWN0VGFiID0gMTtcbiAgICAgICAgbWVudVRhYiA9IDA7XG4gICAgICAgIGhvbWVUYWIgPSAwO1xuICAgIH0gZWxzZSB7fTtcbn07XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnb0hvbWUsIGZhbHNlKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnb01lbnUsIGZhbHNlKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnb0NvbnRhY3QsIGZhbHNlKTsiXSwic291cmNlUm9vdCI6IiJ9