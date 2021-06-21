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
    let image;
    for (let i = 1; i <= 8; i++) {
        image = document.createElement('img');
        image.src = `/images/menu${i}.jpg`;
        image.className = 'menuImage';
        image.id = 'menuImage';
        contents.appendChild(image);
        };
    
    let modalContainer = document.createElement('div');
    modalContainer.id = 'modalContainer';
    contents.appendChild(modalContainer);

    let fullScreenImage = document.getElementsByClassName('menuImage');
    let displayModal = function() {
        let src = this.getAttribute('src');
        let modal = document.getElementById('modalContainer');
        modal.style.display = 'block';
        modal.style.background = `url(${src})`;
        modal.style.backgroundSize = 'contain';
        modal.style.backgroundRepeat = 'no-repeat';
        modal.style.backgroundPosition = 'center';
        modal.style.backgroundColor = 'rgba(0,0,0,0.4)';
        contents.appendChild(modal);
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            };
        };
    };
    for (let i = 0; i <fullScreenImage.length; i++) {
        fullScreenImage[i].addEventListener('click', displayModal);
    };
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
        for (let i = 1; i <= 8; i++) {
            _welcomepage_js__WEBPACK_IMPORTED_MODULE_1__.contents.removeChild(document.getElementById('menuImage'));
        };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbmF2YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy93ZWxjb21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLFFBQVE7QUFDM0I7QUFDQSxtQ0FBbUMsRUFBRTtBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxJQUFJO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJCQUEyQjtBQUM5QztBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFOzs7Ozs7Ozs7Ozs7Ozs7QUN2Q3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQzNDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7O0FDTmlEO0FBQ3FCO0FBQ3JDOztBQUVqQyxzREFBVTtBQUNWLG9EQUFRO0FBQ1IsMERBQVM7QUFDVCxnRUFBZTs7QUFFZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksaUVBQW9CO0FBQ3hCLElBQUksaUVBQW9CO0FBQ3hCLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0IsWUFBWSxpRUFBb0I7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLFFBQVEsZ0VBQWU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBUTtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLCtFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgY29udGVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5sZXQgbWFrZU1lbnUgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgaW1hZ2U7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gODsgaSsrKSB7XG4gICAgICAgIGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltYWdlLnNyYyA9IGAvaW1hZ2VzL21lbnUke2l9LmpwZ2A7XG4gICAgICAgIGltYWdlLmNsYXNzTmFtZSA9ICdtZW51SW1hZ2UnO1xuICAgICAgICBpbWFnZS5pZCA9ICdtZW51SW1hZ2UnO1xuICAgICAgICBjb250ZW50cy5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICAgIH07XG4gICAgXG4gICAgbGV0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWxDb250YWluZXIuaWQgPSAnbW9kYWxDb250YWluZXInO1xuICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKG1vZGFsQ29udGFpbmVyKTtcblxuICAgIGxldCBmdWxsU2NyZWVuSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtZW51SW1hZ2UnKTtcbiAgICBsZXQgZGlzcGxheU1vZGFsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBzcmMgPSB0aGlzLmdldEF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbENvbnRhaW5lcicpO1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtzcmN9KWA7XG4gICAgICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvbnRhaW4nO1xuICAgICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gJ25vLXJlcGVhdCc7XG4gICAgICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICdjZW50ZXInO1xuICAgICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLDAsMCwwLjQpJztcbiAgICAgICAgY29udGVudHMuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICAgIFxuICAgIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbCkge1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDxmdWxsU2NyZWVuSW1hZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZnVsbFNjcmVlbkltYWdlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheU1vZGFsKTtcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFrZU1lbnU7IiwibGV0IGNvbnRlbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5sZXQgbWFrZU5hdkJhciA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIG5hdmJhci5jbGFzc05hbWUgPSAnbmF2JztcbiAgICBjb250ZW50cy5hcHBlbmRDaGlsZChuYXZiYXIpO1xuXG4gICAgbGV0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxldCBhSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhSG9tZS5pbm5lckhUTUwgPSAnSG9tZSc7XG4gICAgYUhvbWUuaHJlZiA9ICcjJztcbiAgICBob21lQnV0dG9uLmlkID0gJ2hvbWUnXG4gICAgaG9tZUJ1dHRvbi5hcHBlbmRDaGlsZChhSG9tZSk7XG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuXG4gICAgbGV0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxldCBhTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhTWVudS5pbm5lckhUTUwgPSAnTWVudSc7XG4gICAgYU1lbnUuaHJlZiA9ICcjJztcbiAgICBtZW51QnV0dG9uLmlkID0gJ21lbnUnXG4gICAgbWVudUJ1dHRvbi5hcHBlbmRDaGlsZChhTWVudSk7XG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuXG4gICAgbGV0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxldCBhQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhQ29udGFjdC5pbm5lckhUTUwgPSAnQ29udGFjdCc7XG4gICAgYUNvbnRhY3QuaHJlZiA9ICcjJztcbiAgICBjb250YWN0QnV0dG9uLmlkID0gJ2NvbnRhY3QnXG4gICAgY29udGFjdEJ1dHRvbi5hcHBlbmRDaGlsZChhQ29udGFjdCk7XG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xufTtcblxubGV0IG1ha2VMb2dvID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsZXQgYUxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYUxvZ28uaHJlZiA9ICcjJztcbiAgICBhTG9nby5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBsb2dvLmNsYXNzTmFtZSA9ICdsb2dvJztcbiAgICBsb2dvLnNyYyA9ICcvaW1hZ2VzL0RhcnVtYS5wbmcnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvSG9sZGVyJykuYXBwZW5kQ2hpbGQoYUxvZ28pO1xufTtcblxuZXhwb3J0IHttYWtlTmF2QmFyLCBtYWtlTG9nb307IiwibGV0IGNvbnRlbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5sZXQgbWFrZUhlYWRlciA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaGVhZGVyLmlubmVySFRNTCA9ICdaZW4gU3VzaGkgJiBHcmlsbCc7XG4gICAgaGVhZGVyLmlkID0gJ2hlYWRlcic7XG4gICAgY29udGVudHMuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn07XG5cbmxldCBtYWtlQmlvID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGJpb2dyYXBoeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBiaW9ncmFwaHkuaW5uZXJIVE1MID0gYFdlIHNwZWNpYWxpemUgaW4gZGVsaWNpb3VzIEphcGFuZXNlIGN1aXNpbmUsIFxuICAgIGZyb20gZnJlc2ggc3VzaGkgd2l0aCBhIHZhcmlldHkgb2Ygc3BlY2lhbCBmaXNoIHN1Y2ggYXMgVG9ybywgXG4gICAgdG8gaGliYWNoaSBlbnRyZWVzIGdyaWxsZWQgdG8gcGVyZmVjdGlvbiBpbiB0aGUga2l0Y2hlbi4gPGJyLz48YnIvPlxuICAgIE91ciB0YWxlbnRlZCB0ZWFtIGNvbnNpc3RzIG9mOiA8YnIvPjxici8+IFxuICAgIENoZWYtb3duZXIgSmFjayB3aXRoIG92ZXIgMjUgeWVhcnMgb2YgZXhwZXJpZW5jZSBhbmQgd2hvIHByZXZpb3VzbHkgb3duZWQgXG4gICAgXCJLaXJha3UgSmFwYW5lc2UgUmVzdGF1cmFudFwiIGluIEhvdXN0b24sIFRleGFzLiBcbiAgICBIZSB3b3JrcyBoYXJkIGV2ZXJ5IGRheSB0byBwcm92aWRlIGEgY3VzdG9taXplZCBleHBlcmllbmNlIGZvciBldmVyeSBjdXN0b21lciBcbiAgICBhbmQgdHJlYXRzIHRoZW0gbGlrZSBoaXMgb3duIGZhbWlseS4gXG4gICAgV2hlbiBoZSBpcyBub3Qgd29ya2luZywgSmFjayBlbmpveXMgd2F0Y2hpbmcgbW92aWVzLCBzaW5naW5nLCBcbiAgICBhbmQgc3BlbmRpbmcgdGltZSB3aXRoIGhpcyBmYW1pbHkuIDxici8+PGJyLz5cbiAgICBIZWFkIHN1c2hpLWNoZWYgS2l0YW11cmEtc2FuIHdobyB3YXMgcHJldmlvdXNseSBcbiAgICB0aGUgaGVhZCBjaGVmIG9mIEppbmJlaSBKYXBhbmVzZSBSZXN0YXVyYW50IFxuICAgIGFuZCBoYXMgb3ZlciA0MCB5ZWFycyBvZiBleHBlcmllbmNlIHdvcmtpbmcgaW4gSmFwYW4sIEhhd2FpaSBhbmQgTmV3IFlvcmsuIFxuICAgIEtpdGFtdXJhLXNhbiBmb2N1c2VzIGhlYXZpbHkgb24gZW5zdXJpbmcgdGhlIHF1YWxpdHkgXG4gICAgYW5kIHN0YW5kYXJkcyBvZiBvdXIgc3VzaGkgYXJlIG9mIHRoZSBoaWdoZXN0IG9yZGVyLiBcbiAgICBJbiBoaXMgZnJlZSB0aW1lLCBLaXRhbXVyYS1zYW4gZW5qb3lzIHBsYXlpbmcgd2l0aCBoaXMgY2F0cywgXG4gICAgY29va2luZyBhbmQgc3BlbmRpbmcgdGltZSB3aXRoIGhpcyBncmFuZGNoaWxkcmVuLmA7XG4gICAgYmlvZ3JhcGh5LmlkID0gJ2Jpb2dyYXBoeSc7XG4gICAgY29udGVudHMuYXBwZW5kQ2hpbGQoYmlvZ3JhcGh5KTtcbn07XG5cbmxldCBtYWtlSW1hZ2UgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltYWdlLnNyYyA9ICcvaW1hZ2VzL0Jhbm5lci5qcGcnO1xuICAgIGltYWdlLmNsYXNzTmFtZSA9ICdiYW5uZXJJbWFnZSc7XG4gICAgaW1hZ2UuaWQgPSAnYmFubmVyJ1xuICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKGltYWdlKTtcbn07XG5cbmxldCBwb3B1bGF0ZVdlbGNvbWUgPSBmdW5jdGlvbigpIHtcbiAgICBtYWtlSGVhZGVyKCk7XG4gICAgbWFrZUJpbygpO1xufTtcblxuZXhwb3J0IHtjb250ZW50cywgbWFrZUltYWdlLCBwb3B1bGF0ZVdlbGNvbWV9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHttYWtlTmF2QmFyLCBtYWtlTG9nb30gZnJvbSAnLi9uYXZiYXIuanMnO1xuaW1wb3J0IHtjb250ZW50cywgbWFrZUltYWdlLCBwb3B1bGF0ZVdlbGNvbWV9IGZyb20gJy4vd2VsY29tZXBhZ2UuanMnO1xuaW1wb3J0IG1ha2VNZW51IGZyb20gJy4vbWVudS5qcyc7XG5cbm1ha2VOYXZCYXIoKTtcbm1ha2VMb2dvKCk7XG5tYWtlSW1hZ2UoKTtcbnBvcHVsYXRlV2VsY29tZSgpO1xuXG5sZXQgaG9tZVRhYiA9IDE7XG5sZXQgbWVudVRhYiA9IDA7XG5sZXQgY29udGFjdFRhYiA9IDA7XG5cbmxldCByZW1vdmVXZWxjb21lID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKGhvbWVUYWIgPT09IDEpIHtcbiAgICBjb250ZW50cy5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJykpO1xuICAgIGNvbnRlbnRzLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiaW9ncmFwaHknKSk7XG4gICAgfSBlbHNlIHt9O1xufTtcblxubGV0IHJlbW92ZU1lbnUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAobWVudVRhYiA9PT0gMSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA4OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnRlbnRzLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51SW1hZ2UnKSk7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHt9O1xufTtcblxubGV0IGdvSG9tZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChob21lVGFiID09PSAwKSB7XG4gICAgICAgIHBvcHVsYXRlV2VsY29tZSgpO1xuICAgICAgICByZW1vdmVNZW51KCk7XG4gICAgICAgIGhvbWVUYWIgPSAxO1xuICAgICAgICBtZW51VGFiID0gMDtcbiAgICAgICAgY29udGFjdFRhYiA9IDA7XG4gICAgfSBlbHNlIHt9O1xufTtcblxubGV0IGdvTWVudSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChtZW51VGFiID09PSAwKSB7XG4gICAgICAgIHJlbW92ZVdlbGNvbWUoKTtcbiAgICAgICAgbWFrZU1lbnUoKTtcbiAgICAgICAgaG9tZVRhYiA9IDA7XG4gICAgICAgIG1lbnVUYWIgPSAxO1xuICAgICAgICBjb250YWN0VGFiID0gMDtcbiAgICB9IGVsc2Uge307XG59O1xuXG5sZXQgZ29Db250YWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKGNvbnRhY3RUYWIgPT09IDApIHtcbiAgICAgICAgcmVtb3ZlV2VsY29tZSgpO1xuICAgICAgICByZW1vdmVNZW51KCk7XG4gICAgICAgIGNvbnRhY3RUYWIgPSAxO1xuICAgICAgICBtZW51VGFiID0gMDtcbiAgICAgICAgaG9tZVRhYiA9IDA7XG4gICAgfSBlbHNlIHt9O1xufTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdvSG9tZSwgZmFsc2UpO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdvTWVudSwgZmFsc2UpO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdvQ29udGFjdCwgZmFsc2UpOyJdLCJzb3VyY2VSb290IjoiIn0=