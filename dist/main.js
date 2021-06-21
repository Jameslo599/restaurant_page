/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/copyrightbar.js":
/*!*****************************!*\
  !*** ./src/copyrightbar.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let container = document.getElementById('copyrightHolder');

let makeCopyright = function() {
    let copyright = document.createElement('div');
    copyright.id = 'copyright';
    copyright.className = 'clearfix';
    container.appendChild(copyright);

    let copyrightText = document.createElement('div');
    copyrightText.innerHTML = 'COPYRIGHT JAMES LO 2021'
    copyrightText.id = 'copyrightText';
    copyrightText.classNames = 'text float left'
    copyright.appendChild(copyrightText);

    let copyrightLinks = document.createElement('ul');
    copyrightLinks.className = 'links float right';
    copyrightLinks.id = 'links';
    copyright.appendChild(copyrightLinks);

    let facebookIcon = document.createElement('li');
    let facebookLink = document.createElement('a');
    let facebookFont = document.createElement('i');
    facebookLink.href = '#';
    facebookFont.className = 'fab fa-facebook-square'

    let orderIcon = document.createElement('li');
    let orderLink = document.createElement('a');
    let orderFont = document.createElement('i');
    orderLink.href = '#';
    orderFont.className = 'fas fa-utensils';

    facebookLink.appendChild(facebookFont);
    facebookIcon.appendChild(facebookLink);
    copyrightLinks.appendChild(facebookIcon);
    orderLink.appendChild(orderFont);
    orderIcon.appendChild(orderLink);
    copyrightLinks.appendChild(orderIcon);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeCopyright);

/***/ }),

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
        image.src = `images/menu${i}.jpg`;
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
    logo.src = 'images/Daruma.png';
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
    image.src = 'images/Banner.jpg';
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
/* harmony import */ var _copyrightbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./copyrightbar.js */ "./src/copyrightbar.js");





(0,_navbar_js__WEBPACK_IMPORTED_MODULE_0__.makeNavBar)();
(0,_navbar_js__WEBPACK_IMPORTED_MODULE_0__.makeLogo)();
(0,_welcomepage_js__WEBPACK_IMPORTED_MODULE_1__.makeImage)();
(0,_welcomepage_js__WEBPACK_IMPORTED_MODULE_1__.populateWelcome)();
(0,_copyrightbar_js__WEBPACK_IMPORTED_MODULE_3__.default)();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29weXJpZ2h0YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3dlbGNvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsYUFBYSxFOzs7Ozs7Ozs7Ozs7OztBQ3ZDNUI7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixRQUFRO0FBQzNCO0FBQ0Esa0NBQWtDLEVBQUU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsSUFBSTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyQkFBMkI7QUFDOUM7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRTs7Ozs7Ozs7Ozs7Ozs7O0FDdkN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUMzQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7QUNOaUQ7QUFDcUI7QUFDckM7QUFDWTs7QUFFN0Msc0RBQVU7QUFDVixvREFBUTtBQUNSLDBEQUFTO0FBQ1QsZ0VBQWU7QUFDZix5REFBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksaUVBQW9CO0FBQ3hCLElBQUksaUVBQW9CO0FBQ3hCLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0IsWUFBWSxpRUFBb0I7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLFFBQVEsZ0VBQWU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBUTtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLCtFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvcHlyaWdodEhvbGRlcicpO1xuXG5sZXQgbWFrZUNvcHlyaWdodCA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb3B5cmlnaHQuaWQgPSAnY29weXJpZ2h0JztcbiAgICBjb3B5cmlnaHQuY2xhc3NOYW1lID0gJ2NsZWFyZml4JztcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KTtcblxuICAgIGxldCBjb3B5cmlnaHRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29weXJpZ2h0VGV4dC5pbm5lckhUTUwgPSAnQ09QWVJJR0hUIEpBTUVTIExPIDIwMjEnXG4gICAgY29weXJpZ2h0VGV4dC5pZCA9ICdjb3B5cmlnaHRUZXh0JztcbiAgICBjb3B5cmlnaHRUZXh0LmNsYXNzTmFtZXMgPSAndGV4dCBmbG9hdCBsZWZ0J1xuICAgIGNvcHlyaWdodC5hcHBlbmRDaGlsZChjb3B5cmlnaHRUZXh0KTtcblxuICAgIGxldCBjb3B5cmlnaHRMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29weXJpZ2h0TGlua3MuY2xhc3NOYW1lID0gJ2xpbmtzIGZsb2F0IHJpZ2h0JztcbiAgICBjb3B5cmlnaHRMaW5rcy5pZCA9ICdsaW5rcyc7XG4gICAgY29weXJpZ2h0LmFwcGVuZENoaWxkKGNvcHlyaWdodExpbmtzKTtcblxuICAgIGxldCBmYWNlYm9va0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxldCBmYWNlYm9va0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGV0IGZhY2Vib29rRm9udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBmYWNlYm9va0xpbmsuaHJlZiA9ICcjJztcbiAgICBmYWNlYm9va0ZvbnQuY2xhc3NOYW1lID0gJ2ZhYiBmYS1mYWNlYm9vay1zcXVhcmUnXG5cbiAgICBsZXQgb3JkZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsZXQgb3JkZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxldCBvcmRlckZvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgb3JkZXJMaW5rLmhyZWYgPSAnIyc7XG4gICAgb3JkZXJGb250LmNsYXNzTmFtZSA9ICdmYXMgZmEtdXRlbnNpbHMnO1xuXG4gICAgZmFjZWJvb2tMaW5rLmFwcGVuZENoaWxkKGZhY2Vib29rRm9udCk7XG4gICAgZmFjZWJvb2tJY29uLmFwcGVuZENoaWxkKGZhY2Vib29rTGluayk7XG4gICAgY29weXJpZ2h0TGlua3MuYXBwZW5kQ2hpbGQoZmFjZWJvb2tJY29uKTtcbiAgICBvcmRlckxpbmsuYXBwZW5kQ2hpbGQob3JkZXJGb250KTtcbiAgICBvcmRlckljb24uYXBwZW5kQ2hpbGQob3JkZXJMaW5rKTtcbiAgICBjb3B5cmlnaHRMaW5rcy5hcHBlbmRDaGlsZChvcmRlckljb24pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFrZUNvcHlyaWdodDsiLCJsZXQgY29udGVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5sZXQgbWFrZU1lbnUgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgaW1hZ2U7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gODsgaSsrKSB7XG4gICAgICAgIGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltYWdlLnNyYyA9IGBpbWFnZXMvbWVudSR7aX0uanBnYDtcbiAgICAgICAgaW1hZ2UuY2xhc3NOYW1lID0gJ21lbnVJbWFnZSc7XG4gICAgICAgIGltYWdlLmlkID0gJ21lbnVJbWFnZSc7XG4gICAgICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgICAgfTtcbiAgICBcbiAgICBsZXQgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbENvbnRhaW5lci5pZCA9ICdtb2RhbENvbnRhaW5lcic7XG4gICAgY29udGVudHMuYXBwZW5kQ2hpbGQobW9kYWxDb250YWluZXIpO1xuXG4gICAgbGV0IGZ1bGxTY3JlZW5JbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21lbnVJbWFnZScpO1xuICAgIGxldCBkaXNwbGF5TW9kYWwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHNyYyA9IHRoaXMuZ2V0QXR0cmlidXRlKCdzcmMnKTtcbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsQ29udGFpbmVyJyk7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke3NyY30pYDtcbiAgICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY29udGFpbic7XG4gICAgICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPSAnbm8tcmVwZWF0JztcbiAgICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gJ2NlbnRlcic7XG4gICAgICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDAsMCwwLDAuNCknO1xuICAgICAgICBjb250ZW50cy5hcHBlbmRDaGlsZChtb2RhbCk7XG4gICAgXG4gICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPGZ1bGxTY3JlZW5JbWFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBmdWxsU2NyZWVuSW1hZ2VbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5TW9kYWwpO1xuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYWtlTWVudTsiLCJsZXQgY29udGVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmxldCBtYWtlTmF2QmFyID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbmF2YmFyLmNsYXNzTmFtZSA9ICduYXYnO1xuICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKG5hdmJhcik7XG5cbiAgICBsZXQgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGV0IGFIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGFIb21lLmlubmVySFRNTCA9ICdIb21lJztcbiAgICBhSG9tZS5ocmVmID0gJyMnO1xuICAgIGhvbWVCdXR0b24uaWQgPSAnaG9tZSdcbiAgICBob21lQnV0dG9uLmFwcGVuZENoaWxkKGFIb21lKTtcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG5cbiAgICBsZXQgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGV0IGFNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGFNZW51LmlubmVySFRNTCA9ICdNZW51JztcbiAgICBhTWVudS5ocmVmID0gJyMnO1xuICAgIG1lbnVCdXR0b24uaWQgPSAnbWVudSdcbiAgICBtZW51QnV0dG9uLmFwcGVuZENoaWxkKGFNZW51KTtcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG5cbiAgICBsZXQgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGV0IGFDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGFDb250YWN0LmlubmVySFRNTCA9ICdDb250YWN0JztcbiAgICBhQ29udGFjdC5ocmVmID0gJyMnO1xuICAgIGNvbnRhY3RCdXR0b24uaWQgPSAnY29udGFjdCdcbiAgICBjb250YWN0QnV0dG9uLmFwcGVuZENoaWxkKGFDb250YWN0KTtcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG59O1xuXG5sZXQgbWFrZUxvZ28gPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGxldCBhTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhTG9nby5ocmVmID0gJyMnO1xuICAgIGFMb2dvLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgIGxvZ28uY2xhc3NOYW1lID0gJ2xvZ28nO1xuICAgIGxvZ28uc3JjID0gJ2ltYWdlcy9EYXJ1bWEucG5nJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nb0hvbGRlcicpLmFwcGVuZENoaWxkKGFMb2dvKTtcbn07XG5cbmV4cG9ydCB7bWFrZU5hdkJhciwgbWFrZUxvZ299OyIsImxldCBjb250ZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxubGV0IG1ha2VIZWFkZXIgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRlci5pbm5lckhUTUwgPSAnWmVuIFN1c2hpICYgR3JpbGwnO1xuICAgIGhlYWRlci5pZCA9ICdoZWFkZXInO1xuICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKGhlYWRlcik7XG59O1xuXG5sZXQgbWFrZUJpbyA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBiaW9ncmFwaHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgYmlvZ3JhcGh5LmlubmVySFRNTCA9IGBXZSBzcGVjaWFsaXplIGluIGRlbGljaW91cyBKYXBhbmVzZSBjdWlzaW5lLCBcbiAgICBmcm9tIGZyZXNoIHN1c2hpIHdpdGggYSB2YXJpZXR5IG9mIHNwZWNpYWwgZmlzaCBzdWNoIGFzIFRvcm8sIFxuICAgIHRvIGhpYmFjaGkgZW50cmVlcyBncmlsbGVkIHRvIHBlcmZlY3Rpb24gaW4gdGhlIGtpdGNoZW4uIDxici8+PGJyLz5cbiAgICBPdXIgdGFsZW50ZWQgdGVhbSBjb25zaXN0cyBvZjogPGJyLz48YnIvPiBcbiAgICBDaGVmLW93bmVyIEphY2sgd2l0aCBvdmVyIDI1IHllYXJzIG9mIGV4cGVyaWVuY2UgYW5kIHdobyBwcmV2aW91c2x5IG93bmVkIFxuICAgIFwiS2lyYWt1IEphcGFuZXNlIFJlc3RhdXJhbnRcIiBpbiBIb3VzdG9uLCBUZXhhcy4gXG4gICAgSGUgd29ya3MgaGFyZCBldmVyeSBkYXkgdG8gcHJvdmlkZSBhIGN1c3RvbWl6ZWQgZXhwZXJpZW5jZSBmb3IgZXZlcnkgY3VzdG9tZXIgXG4gICAgYW5kIHRyZWF0cyB0aGVtIGxpa2UgaGlzIG93biBmYW1pbHkuIFxuICAgIFdoZW4gaGUgaXMgbm90IHdvcmtpbmcsIEphY2sgZW5qb3lzIHdhdGNoaW5nIG1vdmllcywgc2luZ2luZywgXG4gICAgYW5kIHNwZW5kaW5nIHRpbWUgd2l0aCBoaXMgZmFtaWx5LiA8YnIvPjxici8+XG4gICAgSGVhZCBzdXNoaS1jaGVmIEtpdGFtdXJhLXNhbiB3aG8gd2FzIHByZXZpb3VzbHkgXG4gICAgdGhlIGhlYWQgY2hlZiBvZiBKaW5iZWkgSmFwYW5lc2UgUmVzdGF1cmFudCBcbiAgICBhbmQgaGFzIG92ZXIgNDAgeWVhcnMgb2YgZXhwZXJpZW5jZSB3b3JraW5nIGluIEphcGFuLCBIYXdhaWkgYW5kIE5ldyBZb3JrLiBcbiAgICBLaXRhbXVyYS1zYW4gZm9jdXNlcyBoZWF2aWx5IG9uIGVuc3VyaW5nIHRoZSBxdWFsaXR5IFxuICAgIGFuZCBzdGFuZGFyZHMgb2Ygb3VyIHN1c2hpIGFyZSBvZiB0aGUgaGlnaGVzdCBvcmRlci4gXG4gICAgSW4gaGlzIGZyZWUgdGltZSwgS2l0YW11cmEtc2FuIGVuam95cyBwbGF5aW5nIHdpdGggaGlzIGNhdHMsIFxuICAgIGNvb2tpbmcgYW5kIHNwZW5kaW5nIHRpbWUgd2l0aCBoaXMgZ3JhbmRjaGlsZHJlbi5gO1xuICAgIGJpb2dyYXBoeS5pZCA9ICdiaW9ncmFwaHknO1xuICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKGJpb2dyYXBoeSk7XG59O1xuXG5sZXQgbWFrZUltYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWFnZS5zcmMgPSAnaW1hZ2VzL0Jhbm5lci5qcGcnO1xuICAgIGltYWdlLmNsYXNzTmFtZSA9ICdiYW5uZXJJbWFnZSc7XG4gICAgaW1hZ2UuaWQgPSAnYmFubmVyJ1xuICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKGltYWdlKTtcbn07XG5cbmxldCBwb3B1bGF0ZVdlbGNvbWUgPSBmdW5jdGlvbigpIHtcbiAgICBtYWtlSGVhZGVyKCk7XG4gICAgbWFrZUJpbygpO1xufTtcblxuZXhwb3J0IHtjb250ZW50cywgbWFrZUltYWdlLCBwb3B1bGF0ZVdlbGNvbWV9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHttYWtlTmF2QmFyLCBtYWtlTG9nb30gZnJvbSAnLi9uYXZiYXIuanMnO1xuaW1wb3J0IHtjb250ZW50cywgbWFrZUltYWdlLCBwb3B1bGF0ZVdlbGNvbWV9IGZyb20gJy4vd2VsY29tZXBhZ2UuanMnO1xuaW1wb3J0IG1ha2VNZW51IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgbWFrZUNvcHlyaWdodCBmcm9tICcuL2NvcHlyaWdodGJhci5qcydcblxubWFrZU5hdkJhcigpO1xubWFrZUxvZ28oKTtcbm1ha2VJbWFnZSgpO1xucG9wdWxhdGVXZWxjb21lKCk7XG5tYWtlQ29weXJpZ2h0KCk7XG5cbmxldCBob21lVGFiID0gMTtcbmxldCBtZW51VGFiID0gMDtcbmxldCBjb250YWN0VGFiID0gMDtcblxubGV0IHJlbW92ZVdlbGNvbWUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoaG9tZVRhYiA9PT0gMSkge1xuICAgIGNvbnRlbnRzLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKSk7XG4gICAgY29udGVudHMucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jpb2dyYXBoeScpKTtcbiAgICB9IGVsc2Uge307XG59O1xuXG5sZXQgcmVtb3ZlTWVudSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChtZW51VGFiID09PSAxKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDg7IGkrKykge1xuICAgICAgICAgICAgY29udGVudHMucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVJbWFnZScpKTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge307XG59O1xuXG5sZXQgZ29Ib21lID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKGhvbWVUYWIgPT09IDApIHtcbiAgICAgICAgcG9wdWxhdGVXZWxjb21lKCk7XG4gICAgICAgIHJlbW92ZU1lbnUoKTtcbiAgICAgICAgaG9tZVRhYiA9IDE7XG4gICAgICAgIG1lbnVUYWIgPSAwO1xuICAgICAgICBjb250YWN0VGFiID0gMDtcbiAgICB9IGVsc2Uge307XG59O1xuXG5sZXQgZ29NZW51ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKG1lbnVUYWIgPT09IDApIHtcbiAgICAgICAgcmVtb3ZlV2VsY29tZSgpO1xuICAgICAgICBtYWtlTWVudSgpO1xuICAgICAgICBob21lVGFiID0gMDtcbiAgICAgICAgbWVudVRhYiA9IDE7XG4gICAgICAgIGNvbnRhY3RUYWIgPSAwO1xuICAgIH0gZWxzZSB7fTtcbn07XG5cbmxldCBnb0NvbnRhY3QgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoY29udGFjdFRhYiA9PT0gMCkge1xuICAgICAgICByZW1vdmVXZWxjb21lKCk7XG4gICAgICAgIHJlbW92ZU1lbnUoKTtcbiAgICAgICAgY29udGFjdFRhYiA9IDE7XG4gICAgICAgIG1lbnVUYWIgPSAwO1xuICAgICAgICBob21lVGFiID0gMDtcbiAgICB9IGVsc2Uge307XG59O1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ29Ib21lLCBmYWxzZSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ29NZW51LCBmYWxzZSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ29Db250YWN0LCBmYWxzZSk7Il0sInNvdXJjZVJvb3QiOiIifQ==