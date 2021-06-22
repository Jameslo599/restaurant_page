/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeContact": () => (/* binding */ makeContact),
/* harmony export */   "initMap": () => (/* binding */ initMap)
/* harmony export */ });
/* harmony import */ var _welcomepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcomepage */ "./src/welcomepage.js");


let mapHolder = document.createElement('div');
mapHolder.id = 'map';

let makeContact = function() {
    let contactHolder = document.createElement('div');
    contactHolder.id = 'contactHolder';
    _welcomepage__WEBPACK_IMPORTED_MODULE_0__.contents.appendChild(contactHolder);

    let contactInfo = document.createElement('h2');
    contactInfo.id = 'contactInfo';
    contactInfo.innerHTML = 
    `Address:<br>
    3751 S Stonebridge Dr.<br/>
    Mckinney, Texas 75070<br/>
    Phone:<br/>
    972-547-1628<br>
    Email: zensushiandgrill@icloud.com`;
    contactHolder.appendChild(contactInfo);

    let openingTimes = document.createElement('h2');
    openingTimes.id = 'openingTime';
    openingTimes.innerHTML = 
    `Hours:<br>
    Tues - Sat: 11AM - 10PM<br/>
    Sun & Mon: Closed<br/>
    Dress Code: Casual<br/>
    For Reservations and parties of 7 or more,<br/> please call 972-547-1628`;
    contactHolder.appendChild(openingTimes);
};

let map;

function initMap() {
    _welcomepage__WEBPACK_IMPORTED_MODULE_0__.contents.appendChild(mapHolder);
    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 33.16827, lng: -96.72999},
        zoom: 18,
    });
    let marker = new google.maps.Marker({
        position: {lat: 33.16827, lng: -96.72999},
        map: map,
    });
};



/***/ }),

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
    facebookLink.href = 'https://www.facebook.com/ZenSushiMckinney/';
    facebookLink.target = '_blank';
    facebookLink.rel = 'noreferrer noopener';
    facebookFont.className = 'fab fa-facebook-square'

    let orderIcon = document.createElement('li');
    let orderLink = document.createElement('a');
    let orderFont = document.createElement('i');
    orderLink.href = 'https://www.zensushiandgrillmckinney.com/';
    orderLink.target = '_blank';
    orderLink.rel = 'noreferrer noopener';
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
/* harmony import */ var _welcomepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcomepage */ "./src/welcomepage.js");


let makeMenu = function() {

    let menuGallery = document.createElement('div');
    menuGallery.id = 'gallery';
    _welcomepage__WEBPACK_IMPORTED_MODULE_0__.contents.appendChild(menuGallery);

    let image;
    for (let i = 1; i <= 8; i++) {
        image = document.createElement('img');
        image.src = `images/menu${i}.jpg`;
        image.className = 'menuImage';
        image.id = 'menuImage';
        menuGallery.appendChild(image);
        };
    
    let modalContainer = document.createElement('div');
    modalContainer.id = 'modalContainer';
    _welcomepage__WEBPACK_IMPORTED_MODULE_0__.contents.appendChild(modalContainer);

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
        _welcomepage__WEBPACK_IMPORTED_MODULE_0__.contents.appendChild(modal);
    
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
/* harmony import */ var _welcomepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcomepage */ "./src/welcomepage.js");


let makeNavBar = function() {
    let navbar = document.createElement('ul');
    navbar.className = 'nav';
    _welcomepage__WEBPACK_IMPORTED_MODULE_0__.contents.appendChild(navbar);

    let navbarText = document.createElement('div');
    navbarText.innerHTML = 'Zen Sushi & Grill'
    navbarText.id = 'title';
    navbarText.classNames = 'text float left clearfix'
    navbar.appendChild(navbarText);

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
    aContact.innerHTML = 'Contact Us';
    aContact.href = '#';
    contactButton.id = 'contact'
    contactButton.appendChild(aContact);
    navbar.appendChild(contactButton);
};

let makeLogo = function() {
    let logo = document.createElement('img');
    let aLogo = document.createElement('a');
    aLogo.href = '';
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

let makeBio = function() {
    let biography = document.createElement("h2");
    biography.innerHTML = `We specialize in delicious Japanese cuisine 
    from fresh sushi with a variety of special fish, 
    to hibachi entrees grilled to perfection in the kitchen. <br/><br/>
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
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");






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
    _welcomepage_js__WEBPACK_IMPORTED_MODULE_1__.contents.removeChild(document.getElementById('biography'));
    } else {};
};

let removeMenu = function() {
    if (menuTab === 1) {
    _welcomepage_js__WEBPACK_IMPORTED_MODULE_1__.contents.removeChild(document.getElementById('gallery'));
    } else {};
};

let removeContact = function() {
    if (contactTab === 1) {
        _welcomepage_js__WEBPACK_IMPORTED_MODULE_1__.contents.removeChild(document.getElementById('contactHolder'));
        _welcomepage_js__WEBPACK_IMPORTED_MODULE_1__.contents.removeChild(document.getElementById('map'));
    } else {};
};

let goHome = function() {
    if (homeTab === 0) {
        (0,_welcomepage_js__WEBPACK_IMPORTED_MODULE_1__.populateWelcome)();
        removeMenu();
        removeContact();
        homeTab = 1;
        menuTab = 0;
        contactTab = 0;
    } else {};
};

let goMenu = function() {
    if (menuTab === 0) {
        removeContact();
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
        (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__.makeContact)();
        (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__.initMap)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29weXJpZ2h0YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3dlbGNvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDOztBQUV6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksOERBQW9COztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksOERBQW9CO0FBQ3hCO0FBQ0EsaUJBQWlCLDhCQUE4QjtBQUMvQztBQUNBLEtBQUs7QUFDTDtBQUNBLG1CQUFtQiw4QkFBOEI7QUFDakQ7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGFBQWEsRTs7Ozs7Ozs7Ozs7Ozs7O0FDM0NhOztBQUV6Qzs7QUFFQTtBQUNBO0FBQ0EsSUFBSSw4REFBb0I7O0FBRXhCO0FBQ0EsbUJBQW1CLFFBQVE7QUFDM0I7QUFDQSxrQ0FBa0MsRUFBRTtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSw4REFBb0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsSUFBSTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOERBQW9COztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q2tCOztBQUV6QztBQUNBO0FBQ0E7QUFDQSxJQUFJLDhEQUFvQjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDbENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ05pRDtBQUNxQjtBQUNyQztBQUNZO0FBQ0k7O0FBRWpELHNEQUFVO0FBQ1Ysb0RBQVE7QUFDUiwwREFBUztBQUNULGdFQUFlO0FBQ2YseURBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLGlFQUFvQjtBQUN4QixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLElBQUksaUVBQW9CO0FBQ3hCLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxpRUFBb0I7QUFDNUIsUUFBUSxpRUFBb0I7QUFDNUIsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxRQUFRLGdFQUFlO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFRO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0RBQVc7QUFDbkIsUUFBUSxvREFBTztBQUNmO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsK0UiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbnRlbnRzIH0gZnJvbSBcIi4vd2VsY29tZXBhZ2VcIjtcblxubGV0IG1hcEhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWFwSG9sZGVyLmlkID0gJ21hcCc7XG5cbmxldCBtYWtlQ29udGFjdCA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBjb250YWN0SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdEhvbGRlci5pZCA9ICdjb250YWN0SG9sZGVyJztcbiAgICBjb250ZW50cy5hcHBlbmRDaGlsZChjb250YWN0SG9sZGVyKTtcblxuICAgIGxldCBjb250YWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29udGFjdEluZm8uaWQgPSAnY29udGFjdEluZm8nO1xuICAgIGNvbnRhY3RJbmZvLmlubmVySFRNTCA9IFxuICAgIGBBZGRyZXNzOjxicj5cbiAgICAzNzUxIFMgU3RvbmVicmlkZ2UgRHIuPGJyLz5cbiAgICBNY2tpbm5leSwgVGV4YXMgNzUwNzA8YnIvPlxuICAgIFBob25lOjxici8+XG4gICAgOTcyLTU0Ny0xNjI4PGJyPlxuICAgIEVtYWlsOiB6ZW5zdXNoaWFuZGdyaWxsQGljbG91ZC5jb21gO1xuICAgIGNvbnRhY3RIb2xkZXIuYXBwZW5kQ2hpbGQoY29udGFjdEluZm8pO1xuXG4gICAgbGV0IG9wZW5pbmdUaW1lcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgb3BlbmluZ1RpbWVzLmlkID0gJ29wZW5pbmdUaW1lJztcbiAgICBvcGVuaW5nVGltZXMuaW5uZXJIVE1MID0gXG4gICAgYEhvdXJzOjxicj5cbiAgICBUdWVzIC0gU2F0OiAxMUFNIC0gMTBQTTxici8+XG4gICAgU3VuICYgTW9uOiBDbG9zZWQ8YnIvPlxuICAgIERyZXNzIENvZGU6IENhc3VhbDxici8+XG4gICAgRm9yIFJlc2VydmF0aW9ucyBhbmQgcGFydGllcyBvZiA3IG9yIG1vcmUsPGJyLz4gcGxlYXNlIGNhbGwgOTcyLTU0Ny0xNjI4YDtcbiAgICBjb250YWN0SG9sZGVyLmFwcGVuZENoaWxkKG9wZW5pbmdUaW1lcyk7XG59O1xuXG5sZXQgbWFwO1xuXG5mdW5jdGlvbiBpbml0TWFwKCkge1xuICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKG1hcEhvbGRlcik7XG4gICAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFwiKSwge1xuICAgICAgICBjZW50ZXI6IHtsYXQ6IDMzLjE2ODI3LCBsbmc6IC05Ni43Mjk5OX0sXG4gICAgICAgIHpvb206IDE4LFxuICAgIH0pO1xuICAgIGxldCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgcG9zaXRpb246IHtsYXQ6IDMzLjE2ODI3LCBsbmc6IC05Ni43Mjk5OX0sXG4gICAgICAgIG1hcDogbWFwLFxuICAgIH0pO1xufTtcblxuZXhwb3J0IHttYWtlQ29udGFjdCwgaW5pdE1hcH07IiwibGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3B5cmlnaHRIb2xkZXInKTtcblxubGV0IG1ha2VDb3B5cmlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29weXJpZ2h0LmlkID0gJ2NvcHlyaWdodCc7XG4gICAgY29weXJpZ2h0LmNsYXNzTmFtZSA9ICdjbGVhcmZpeCc7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XG5cbiAgICBsZXQgY29weXJpZ2h0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvcHlyaWdodFRleHQuaW5uZXJIVE1MID0gJ0NPUFlSSUdIVCBKQU1FUyBMTyAyMDIxJ1xuICAgIGNvcHlyaWdodFRleHQuaWQgPSAnY29weXJpZ2h0VGV4dCc7XG4gICAgY29weXJpZ2h0VGV4dC5jbGFzc05hbWVzID0gJ3RleHQgZmxvYXQgbGVmdCdcbiAgICBjb3B5cmlnaHQuYXBwZW5kQ2hpbGQoY29weXJpZ2h0VGV4dCk7XG5cbiAgICBsZXQgY29weXJpZ2h0TGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvcHlyaWdodExpbmtzLmNsYXNzTmFtZSA9ICdsaW5rcyBmbG9hdCByaWdodCc7XG4gICAgY29weXJpZ2h0TGlua3MuaWQgPSAnbGlua3MnO1xuICAgIGNvcHlyaWdodC5hcHBlbmRDaGlsZChjb3B5cmlnaHRMaW5rcyk7XG5cbiAgICBsZXQgZmFjZWJvb2tJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsZXQgZmFjZWJvb2tMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxldCBmYWNlYm9va0ZvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgZmFjZWJvb2tMaW5rLmhyZWYgPSAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL1plblN1c2hpTWNraW5uZXkvJztcbiAgICBmYWNlYm9va0xpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgZmFjZWJvb2tMaW5rLnJlbCA9ICdub3JlZmVycmVyIG5vb3BlbmVyJztcbiAgICBmYWNlYm9va0ZvbnQuY2xhc3NOYW1lID0gJ2ZhYiBmYS1mYWNlYm9vay1zcXVhcmUnXG5cbiAgICBsZXQgb3JkZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsZXQgb3JkZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxldCBvcmRlckZvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgb3JkZXJMaW5rLmhyZWYgPSAnaHR0cHM6Ly93d3cuemVuc3VzaGlhbmRncmlsbG1ja2lubmV5LmNvbS8nO1xuICAgIG9yZGVyTGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBvcmRlckxpbmsucmVsID0gJ25vcmVmZXJyZXIgbm9vcGVuZXInO1xuICAgIG9yZGVyRm9udC5jbGFzc05hbWUgPSAnZmFzIGZhLXV0ZW5zaWxzJztcblxuICAgIGZhY2Vib29rTGluay5hcHBlbmRDaGlsZChmYWNlYm9va0ZvbnQpO1xuICAgIGZhY2Vib29rSWNvbi5hcHBlbmRDaGlsZChmYWNlYm9va0xpbmspO1xuICAgIGNvcHlyaWdodExpbmtzLmFwcGVuZENoaWxkKGZhY2Vib29rSWNvbik7XG4gICAgb3JkZXJMaW5rLmFwcGVuZENoaWxkKG9yZGVyRm9udCk7XG4gICAgb3JkZXJJY29uLmFwcGVuZENoaWxkKG9yZGVyTGluayk7XG4gICAgY29weXJpZ2h0TGlua3MuYXBwZW5kQ2hpbGQob3JkZXJJY29uKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VDb3B5cmlnaHQ7IiwiaW1wb3J0IHsgY29udGVudHMgfSBmcm9tIFwiLi93ZWxjb21lcGFnZVwiO1xuXG5sZXQgbWFrZU1lbnUgPSBmdW5jdGlvbigpIHtcblxuICAgIGxldCBtZW51R2FsbGVyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVHYWxsZXJ5LmlkID0gJ2dhbGxlcnknO1xuICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKG1lbnVHYWxsZXJ5KTtcblxuICAgIGxldCBpbWFnZTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA4OyBpKyspIHtcbiAgICAgICAgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gYGltYWdlcy9tZW51JHtpfS5qcGdgO1xuICAgICAgICBpbWFnZS5jbGFzc05hbWUgPSAnbWVudUltYWdlJztcbiAgICAgICAgaW1hZ2UuaWQgPSAnbWVudUltYWdlJztcbiAgICAgICAgbWVudUdhbGxlcnkuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICAgICB9O1xuICAgIFxuICAgIGxldCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsQ29udGFpbmVyLmlkID0gJ21vZGFsQ29udGFpbmVyJztcbiAgICBjb250ZW50cy5hcHBlbmRDaGlsZChtb2RhbENvbnRhaW5lcik7XG5cbiAgICBsZXQgZnVsbFNjcmVlbkltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWVudUltYWdlJyk7XG4gICAgbGV0IGRpc3BsYXlNb2RhbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgc3JjID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxDb250YWluZXInKTtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7c3JjfSlgO1xuICAgICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb250YWluJztcbiAgICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9ICduby1yZXBlYXQnO1xuICAgICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnY2VudGVyJztcbiAgICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMCwwLDAsMC40KSc7XG4gICAgICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgICBcbiAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8ZnVsbFNjcmVlbkltYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZ1bGxTY3JlZW5JbWFnZVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlNb2RhbCk7XG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VNZW51OyIsImltcG9ydCB7IGNvbnRlbnRzIH0gZnJvbSBcIi4vd2VsY29tZXBhZ2VcIjtcblxubGV0IG1ha2VOYXZCYXIgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBuYXZiYXIuY2xhc3NOYW1lID0gJ25hdic7XG4gICAgY29udGVudHMuYXBwZW5kQ2hpbGQobmF2YmFyKTtcblxuICAgIGxldCBuYXZiYXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2YmFyVGV4dC5pbm5lckhUTUwgPSAnWmVuIFN1c2hpICYgR3JpbGwnXG4gICAgbmF2YmFyVGV4dC5pZCA9ICd0aXRsZSc7XG4gICAgbmF2YmFyVGV4dC5jbGFzc05hbWVzID0gJ3RleHQgZmxvYXQgbGVmdCBjbGVhcmZpeCdcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQobmF2YmFyVGV4dCk7XG5cbiAgICBsZXQgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGV0IGFIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGFIb21lLmlubmVySFRNTCA9ICdIb21lJztcbiAgICBhSG9tZS5ocmVmID0gJyMnO1xuICAgIGhvbWVCdXR0b24uaWQgPSAnaG9tZSdcbiAgICBob21lQnV0dG9uLmFwcGVuZENoaWxkKGFIb21lKTtcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG5cbiAgICBsZXQgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGV0IGFNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGFNZW51LmlubmVySFRNTCA9ICdNZW51JztcbiAgICBhTWVudS5ocmVmID0gJyMnO1xuICAgIG1lbnVCdXR0b24uaWQgPSAnbWVudSdcbiAgICBtZW51QnV0dG9uLmFwcGVuZENoaWxkKGFNZW51KTtcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG5cbiAgICBsZXQgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGV0IGFDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGFDb250YWN0LmlubmVySFRNTCA9ICdDb250YWN0IFVzJztcbiAgICBhQ29udGFjdC5ocmVmID0gJyMnO1xuICAgIGNvbnRhY3RCdXR0b24uaWQgPSAnY29udGFjdCdcbiAgICBjb250YWN0QnV0dG9uLmFwcGVuZENoaWxkKGFDb250YWN0KTtcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG59O1xuXG5sZXQgbWFrZUxvZ28gPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGxldCBhTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhTG9nby5ocmVmID0gJyc7XG4gICAgYUxvZ28uYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgbG9nby5jbGFzc05hbWUgPSAnbG9nbyc7XG4gICAgbG9nby5zcmMgPSAnaW1hZ2VzL0RhcnVtYS5wbmcnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvSG9sZGVyJykuYXBwZW5kQ2hpbGQoYUxvZ28pO1xufTtcblxuZXhwb3J0IHttYWtlTmF2QmFyLCBtYWtlTG9nb307IiwibGV0IGNvbnRlbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5sZXQgbWFrZUJpbyA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBiaW9ncmFwaHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgYmlvZ3JhcGh5LmlubmVySFRNTCA9IGBXZSBzcGVjaWFsaXplIGluIGRlbGljaW91cyBKYXBhbmVzZSBjdWlzaW5lIFxuICAgIGZyb20gZnJlc2ggc3VzaGkgd2l0aCBhIHZhcmlldHkgb2Ygc3BlY2lhbCBmaXNoLCBcbiAgICB0byBoaWJhY2hpIGVudHJlZXMgZ3JpbGxlZCB0byBwZXJmZWN0aW9uIGluIHRoZSBraXRjaGVuLiA8YnIvPjxici8+XG4gICAgQ2hlZi1vd25lciBKYWNrIHdpdGggb3ZlciAyNSB5ZWFycyBvZiBleHBlcmllbmNlIGFuZCB3aG8gcHJldmlvdXNseSBvd25lZCBcbiAgICBcIktpcmFrdSBKYXBhbmVzZSBSZXN0YXVyYW50XCIgaW4gSG91c3RvbiwgVGV4YXMuIFxuICAgIEhlIHdvcmtzIGhhcmQgZXZlcnkgZGF5IHRvIHByb3ZpZGUgYSBjdXN0b21pemVkIGV4cGVyaWVuY2UgZm9yIGV2ZXJ5IGN1c3RvbWVyIFxuICAgIGFuZCB0cmVhdHMgdGhlbSBsaWtlIGhpcyBvd24gZmFtaWx5LiBcbiAgICBXaGVuIGhlIGlzIG5vdCB3b3JraW5nLCBKYWNrIGVuam95cyB3YXRjaGluZyBtb3ZpZXMsIHNpbmdpbmcsIFxuICAgIGFuZCBzcGVuZGluZyB0aW1lIHdpdGggaGlzIGZhbWlseS4gPGJyLz48YnIvPlxuICAgIEhlYWQgc3VzaGktY2hlZiBLaXRhbXVyYS1zYW4gd2hvIHdhcyBwcmV2aW91c2x5IFxuICAgIHRoZSBoZWFkIGNoZWYgb2YgSmluYmVpIEphcGFuZXNlIFJlc3RhdXJhbnQgXG4gICAgYW5kIGhhcyBvdmVyIDQwIHllYXJzIG9mIGV4cGVyaWVuY2Ugd29ya2luZyBpbiBKYXBhbiwgSGF3YWlpIGFuZCBOZXcgWW9yay4gXG4gICAgS2l0YW11cmEtc2FuIGZvY3VzZXMgaGVhdmlseSBvbiBlbnN1cmluZyB0aGUgcXVhbGl0eSBcbiAgICBhbmQgc3RhbmRhcmRzIG9mIG91ciBzdXNoaSBhcmUgb2YgdGhlIGhpZ2hlc3Qgb3JkZXIuIFxuICAgIEluIGhpcyBmcmVlIHRpbWUsIEtpdGFtdXJhLXNhbiBlbmpveXMgcGxheWluZyB3aXRoIGhpcyBjYXRzLCBcbiAgICBjb29raW5nIGFuZCBzcGVuZGluZyB0aW1lIHdpdGggaGlzIGdyYW5kY2hpbGRyZW4uYDtcbiAgICBiaW9ncmFwaHkuaWQgPSAnYmlvZ3JhcGh5JztcbiAgICBjb250ZW50cy5hcHBlbmRDaGlsZChiaW9ncmFwaHkpO1xufTtcblxubGV0IG1ha2VJbWFnZSA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1hZ2Uuc3JjID0gJ2ltYWdlcy9CYW5uZXIuanBnJztcbiAgICBpbWFnZS5jbGFzc05hbWUgPSAnYmFubmVySW1hZ2UnO1xuICAgIGltYWdlLmlkID0gJ2Jhbm5lcidcbiAgICBjb250ZW50cy5hcHBlbmRDaGlsZChpbWFnZSk7XG59O1xuXG5sZXQgcG9wdWxhdGVXZWxjb21lID0gZnVuY3Rpb24oKSB7XG4gICAgbWFrZUJpbygpO1xufTtcblxuZXhwb3J0IHtjb250ZW50cywgbWFrZUltYWdlLCBwb3B1bGF0ZVdlbGNvbWV9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHttYWtlTmF2QmFyLCBtYWtlTG9nb30gZnJvbSAnLi9uYXZiYXIuanMnO1xuaW1wb3J0IHtjb250ZW50cywgbWFrZUltYWdlLCBwb3B1bGF0ZVdlbGNvbWV9IGZyb20gJy4vd2VsY29tZXBhZ2UuanMnO1xuaW1wb3J0IG1ha2VNZW51IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgbWFrZUNvcHlyaWdodCBmcm9tICcuL2NvcHlyaWdodGJhci5qcydcbmltcG9ydCB7bWFrZUNvbnRhY3QsIGluaXRNYXB9IGZyb20gJy4vY29udGFjdC5qcydcblxubWFrZU5hdkJhcigpO1xubWFrZUxvZ28oKTtcbm1ha2VJbWFnZSgpO1xucG9wdWxhdGVXZWxjb21lKCk7XG5tYWtlQ29weXJpZ2h0KCk7XG5cbmxldCBob21lVGFiID0gMTtcbmxldCBtZW51VGFiID0gMDtcbmxldCBjb250YWN0VGFiID0gMDtcblxubGV0IHJlbW92ZVdlbGNvbWUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoaG9tZVRhYiA9PT0gMSkge1xuICAgIGNvbnRlbnRzLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiaW9ncmFwaHknKSk7XG4gICAgfSBlbHNlIHt9O1xufTtcblxubGV0IHJlbW92ZU1lbnUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAobWVudVRhYiA9PT0gMSkge1xuICAgIGNvbnRlbnRzLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYWxsZXJ5JykpO1xuICAgIH0gZWxzZSB7fTtcbn07XG5cbmxldCByZW1vdmVDb250YWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKGNvbnRhY3RUYWIgPT09IDEpIHtcbiAgICAgICAgY29udGVudHMucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RIb2xkZXInKSk7XG4gICAgICAgIGNvbnRlbnRzLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSk7XG4gICAgfSBlbHNlIHt9O1xufTtcblxubGV0IGdvSG9tZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChob21lVGFiID09PSAwKSB7XG4gICAgICAgIHBvcHVsYXRlV2VsY29tZSgpO1xuICAgICAgICByZW1vdmVNZW51KCk7XG4gICAgICAgIHJlbW92ZUNvbnRhY3QoKTtcbiAgICAgICAgaG9tZVRhYiA9IDE7XG4gICAgICAgIG1lbnVUYWIgPSAwO1xuICAgICAgICBjb250YWN0VGFiID0gMDtcbiAgICB9IGVsc2Uge307XG59O1xuXG5sZXQgZ29NZW51ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKG1lbnVUYWIgPT09IDApIHtcbiAgICAgICAgcmVtb3ZlQ29udGFjdCgpO1xuICAgICAgICByZW1vdmVXZWxjb21lKCk7XG4gICAgICAgIG1ha2VNZW51KCk7XG4gICAgICAgIGhvbWVUYWIgPSAwO1xuICAgICAgICBtZW51VGFiID0gMTtcbiAgICAgICAgY29udGFjdFRhYiA9IDA7XG4gICAgfSBlbHNlIHt9O1xufTtcblxubGV0IGdvQ29udGFjdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChjb250YWN0VGFiID09PSAwKSB7XG4gICAgICAgIHJlbW92ZVdlbGNvbWUoKTtcbiAgICAgICAgcmVtb3ZlTWVudSgpO1xuICAgICAgICBtYWtlQ29udGFjdCgpO1xuICAgICAgICBpbml0TWFwKCk7XG4gICAgICAgIGNvbnRhY3RUYWIgPSAxO1xuICAgICAgICBtZW51VGFiID0gMDtcbiAgICAgICAgaG9tZVRhYiA9IDA7XG4gICAgfSBlbHNlIHt9O1xufTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdvSG9tZSwgZmFsc2UpO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdvTWVudSwgZmFsc2UpO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdvQ29udGFjdCwgZmFsc2UpOyJdLCJzb3VyY2VSb290IjoiIn0=