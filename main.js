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

    let gitIcon = document.createElement('li');
    let gitLink = document.createElement('a');
    let gitFont = document.createElement('i');
    gitLink.href = 'https://github.com/Jameslo599';
    gitLink.target = '_blank';
    gitLink.rel = 'noreferrer noopener';
    gitFont.className = 'fab fa-github-square';

    facebookLink.appendChild(facebookFont);
    facebookIcon.appendChild(facebookLink);
    copyrightLinks.appendChild(facebookIcon);
    orderLink.appendChild(orderFont);
    orderIcon.appendChild(orderLink);
    copyrightLinks.appendChild(orderIcon);
    gitLink.appendChild(gitFont);
    gitIcon.appendChild(gitLink);
    copyrightLinks.appendChild(gitIcon);
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


function Element(item, className) {
    this.item = document.createElement(item);
    this.className = className;
};

let makeNavBar = function() {
    //let navbar = document.createElement('ul');
    //navbar.className = 'nav';
    let navbar = new Element('ul', 'nav');
    navbar.item.setAttribute('class', 'nav');
    _welcomepage__WEBPACK_IMPORTED_MODULE_0__.contents.appendChild(navbar.item);

    let navbarText = document.createElement('div');
    navbarText.innerHTML = 'Zen Sushi & Grill'
    navbarText.id = 'title';
    navbarText.classNames = 'text float left clearfix'
    navbar.item.appendChild(navbarText);

    let homeButton = document.createElement('li');
    let aHome = document.createElement('a');
    aHome.innerHTML = 'Home';
    aHome.href = '#';
    homeButton.id = 'home'
    homeButton.appendChild(aHome);
    navbar.item.appendChild(homeButton);

    let menuButton = document.createElement('li');
    let aMenu = document.createElement('a');
    aMenu.innerHTML = 'Menu';
    aMenu.href = '#';
    menuButton.id = 'menu'
    menuButton.appendChild(aMenu);
    navbar.item.appendChild(menuButton);

    let orderButton = document.createElement('li');
    let anOrder = document.createElement('a');
    anOrder.innerHTML = 'Order Here';
    anOrder.href = 'https://www.zensushiandgrillmckinney.com/';
    orderButton.id = 'order'
    orderButton.appendChild(anOrder);
    navbar.item.appendChild(orderButton);

    let contactButton = document.createElement('li');
    let aContact = document.createElement('a');
    aContact.innerHTML = 'Contact Us';
    aContact.href = '#';
    contactButton.id = 'contact'
    contactButton.appendChild(aContact);
    navbar.item.appendChild(contactButton);
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
    Kitamura-san enjoys playing with his cats, 
    cooking and spending time with his grandchildren.`;
    biography.id = 'biography';
    contents.appendChild(biography);
};

let makeImage = function() {
    let imageContainer = document.createElement('div');
    imageContainer.id = 'imageContainer';
    let image;
    for (let i = 1; i <= 6; i++) {
        image = document.createElement('img');
        image.src = `images/SushiBoat${i}.jpg`;
        image.className = 'bannerImage';
        image.id = 'banner';
        imageContainer.appendChild(image);
        };
    contents.appendChild(imageContainer);

    let modalContainer = document.createElement('div');
    modalContainer.id = 'modalContainer';
    contents.appendChild(modalContainer);

    let fullScreenImage = document.getElementsByClassName('bannerImage');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29weXJpZ2h0YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3dlbGNvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDOztBQUV6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksOERBQW9COztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksOERBQW9CO0FBQ3hCO0FBQ0EsaUJBQWlCLDhCQUE4QjtBQUMvQztBQUNBLEtBQUs7QUFDTDtBQUNBLG1CQUFtQiw4QkFBOEI7QUFDakQ7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQVE7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBVztBQUNuQixRQUFRLG9EQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSwrRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29udGVudHMgfSBmcm9tIFwiLi93ZWxjb21lcGFnZVwiO1xuXG5sZXQgbWFwSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tYXBIb2xkZXIuaWQgPSAnbWFwJztcblxubGV0IG1ha2VDb250YWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGNvbnRhY3RIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0SG9sZGVyLmlkID0gJ2NvbnRhY3RIb2xkZXInO1xuICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKGNvbnRhY3RIb2xkZXIpO1xuXG4gICAgbGV0IGNvbnRhY3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb250YWN0SW5mby5pZCA9ICdjb250YWN0SW5mbyc7XG4gICAgY29udGFjdEluZm8uaW5uZXJIVE1MID0gXG4gICAgYEFkZHJlc3M6PGJyPlxuICAgIDM3NTEgUyBTdG9uZWJyaWRnZSBEci48YnIvPlxuICAgIE1ja2lubmV5LCBUZXhhcyA3NTA3MDxici8+XG4gICAgUGhvbmU6PGJyLz5cbiAgICA5NzItNTQ3LTE2Mjg8YnI+XG4gICAgRW1haWw6IHplbnN1c2hpYW5kZ3JpbGxAaWNsb3VkLmNvbWA7XG4gICAgY29udGFjdEhvbGRlci5hcHBlbmRDaGlsZChjb250YWN0SW5mbyk7XG5cbiAgICBsZXQgb3BlbmluZ1RpbWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBvcGVuaW5nVGltZXMuaWQgPSAnb3BlbmluZ1RpbWUnO1xuICAgIG9wZW5pbmdUaW1lcy5pbm5lckhUTUwgPSBcbiAgICBgSG91cnM6PGJyPlxuICAgIFR1ZXMgLSBTYXQ6IDExQU0gLSAxMFBNPGJyLz5cbiAgICBTdW4gJiBNb246IENsb3NlZDxici8+XG4gICAgRHJlc3MgQ29kZTogQ2FzdWFsPGJyLz5cbiAgICBGb3IgUmVzZXJ2YXRpb25zIGFuZCBwYXJ0aWVzIG9mIDcgb3IgbW9yZSw8YnIvPiBwbGVhc2UgY2FsbCA5NzItNTQ3LTE2MjhgO1xuICAgIGNvbnRhY3RIb2xkZXIuYXBwZW5kQ2hpbGQob3BlbmluZ1RpbWVzKTtcbn07XG5cbmxldCBtYXA7XG5cbmZ1bmN0aW9uIGluaXRNYXAoKSB7XG4gICAgY29udGVudHMuYXBwZW5kQ2hpbGQobWFwSG9sZGVyKTtcbiAgICBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFwXCIpLCB7XG4gICAgICAgIGNlbnRlcjoge2xhdDogMzMuMTY4MjcsIGxuZzogLTk2LjcyOTk5fSxcbiAgICAgICAgem9vbTogMTgsXG4gICAgfSk7XG4gICAgbGV0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICBwb3NpdGlvbjoge2xhdDogMzMuMTY4MjcsIGxuZzogLTk2LjcyOTk5fSxcbiAgICAgICAgbWFwOiBtYXAsXG4gICAgfSk7XG59O1xuXG5leHBvcnQge21ha2VDb250YWN0LCBpbml0TWFwfTsiLCJsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvcHlyaWdodEhvbGRlcicpO1xuXG5sZXQgbWFrZUNvcHlyaWdodCA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb3B5cmlnaHQuaWQgPSAnY29weXJpZ2h0JztcbiAgICBjb3B5cmlnaHQuY2xhc3NOYW1lID0gJ2NsZWFyZml4JztcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KTtcblxuICAgIGxldCBjb3B5cmlnaHRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29weXJpZ2h0VGV4dC5pbm5lckhUTUwgPSAnQ09QWVJJR0hUIEpBTUVTIExPIDIwMjEnXG4gICAgY29weXJpZ2h0VGV4dC5pZCA9ICdjb3B5cmlnaHRUZXh0JztcbiAgICBjb3B5cmlnaHRUZXh0LmNsYXNzTmFtZXMgPSAndGV4dCBmbG9hdCBsZWZ0J1xuICAgIGNvcHlyaWdodC5hcHBlbmRDaGlsZChjb3B5cmlnaHRUZXh0KTtcblxuICAgIGxldCBjb3B5cmlnaHRMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29weXJpZ2h0TGlua3MuY2xhc3NOYW1lID0gJ2xpbmtzIGZsb2F0IHJpZ2h0JztcbiAgICBjb3B5cmlnaHRMaW5rcy5pZCA9ICdsaW5rcyc7XG4gICAgY29weXJpZ2h0LmFwcGVuZENoaWxkKGNvcHlyaWdodExpbmtzKTtcblxuICAgIGxldCBmYWNlYm9va0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxldCBmYWNlYm9va0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGV0IGZhY2Vib29rRm9udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBmYWNlYm9va0xpbmsuaHJlZiA9ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vWmVuU3VzaGlNY2tpbm5leS8nO1xuICAgIGZhY2Vib29rTGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBmYWNlYm9va0xpbmsucmVsID0gJ25vcmVmZXJyZXIgbm9vcGVuZXInO1xuICAgIGZhY2Vib29rRm9udC5jbGFzc05hbWUgPSAnZmFiIGZhLWZhY2Vib29rLXNxdWFyZSdcblxuICAgIGxldCBvcmRlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxldCBvcmRlckxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGV0IG9yZGVyRm9udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBvcmRlckxpbmsuaHJlZiA9ICdodHRwczovL3d3dy56ZW5zdXNoaWFuZGdyaWxsbWNraW5uZXkuY29tLyc7XG4gICAgb3JkZXJMaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuICAgIG9yZGVyTGluay5yZWwgPSAnbm9yZWZlcnJlciBub29wZW5lcic7XG4gICAgb3JkZXJGb250LmNsYXNzTmFtZSA9ICdmYXMgZmEtdXRlbnNpbHMnO1xuXG4gICAgbGV0IGdpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxldCBnaXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxldCBnaXRGb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGdpdExpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vSmFtZXNsbzU5OSc7XG4gICAgZ2l0TGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBnaXRMaW5rLnJlbCA9ICdub3JlZmVycmVyIG5vb3BlbmVyJztcbiAgICBnaXRGb250LmNsYXNzTmFtZSA9ICdmYWIgZmEtZ2l0aHViLXNxdWFyZSc7XG5cbiAgICBmYWNlYm9va0xpbmsuYXBwZW5kQ2hpbGQoZmFjZWJvb2tGb250KTtcbiAgICBmYWNlYm9va0ljb24uYXBwZW5kQ2hpbGQoZmFjZWJvb2tMaW5rKTtcbiAgICBjb3B5cmlnaHRMaW5rcy5hcHBlbmRDaGlsZChmYWNlYm9va0ljb24pO1xuICAgIG9yZGVyTGluay5hcHBlbmRDaGlsZChvcmRlckZvbnQpO1xuICAgIG9yZGVySWNvbi5hcHBlbmRDaGlsZChvcmRlckxpbmspO1xuICAgIGNvcHlyaWdodExpbmtzLmFwcGVuZENoaWxkKG9yZGVySWNvbik7XG4gICAgZ2l0TGluay5hcHBlbmRDaGlsZChnaXRGb250KTtcbiAgICBnaXRJY29uLmFwcGVuZENoaWxkKGdpdExpbmspO1xuICAgIGNvcHlyaWdodExpbmtzLmFwcGVuZENoaWxkKGdpdEljb24pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFrZUNvcHlyaWdodDsiLCJpbXBvcnQgeyBjb250ZW50cyB9IGZyb20gXCIuL3dlbGNvbWVwYWdlXCI7XG5cbmxldCBtYWtlTWVudSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgbGV0IG1lbnVHYWxsZXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUdhbGxlcnkuaWQgPSAnZ2FsbGVyeSc7XG4gICAgY29udGVudHMuYXBwZW5kQ2hpbGQobWVudUdhbGxlcnkpO1xuXG4gICAgbGV0IGltYWdlO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDg7IGkrKykge1xuICAgICAgICBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpbWFnZS5zcmMgPSBgaW1hZ2VzL21lbnUke2l9LmpwZ2A7XG4gICAgICAgIGltYWdlLmNsYXNzTmFtZSA9ICdtZW51SW1hZ2UnO1xuICAgICAgICBpbWFnZS5pZCA9ICdtZW51SW1hZ2UnO1xuICAgICAgICBtZW51R2FsbGVyeS5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICAgIH07XG4gICAgXG4gICAgbGV0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWxDb250YWluZXIuaWQgPSAnbW9kYWxDb250YWluZXInO1xuICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKG1vZGFsQ29udGFpbmVyKTtcblxuICAgIGxldCBmdWxsU2NyZWVuSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtZW51SW1hZ2UnKTtcbiAgICBsZXQgZGlzcGxheU1vZGFsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBzcmMgPSB0aGlzLmdldEF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbENvbnRhaW5lcicpO1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtzcmN9KWA7XG4gICAgICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvbnRhaW4nO1xuICAgICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gJ25vLXJlcGVhdCc7XG4gICAgICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICdjZW50ZXInO1xuICAgICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLDAsMCwwLjQpJztcbiAgICAgICAgY29udGVudHMuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICAgIFxuICAgIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbCkge1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDxmdWxsU2NyZWVuSW1hZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZnVsbFNjcmVlbkltYWdlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheU1vZGFsKTtcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFrZU1lbnU7IiwiaW1wb3J0IHsgY29udGVudHMgfSBmcm9tIFwiLi93ZWxjb21lcGFnZVwiO1xuXG5mdW5jdGlvbiBFbGVtZW50KGl0ZW0sIGNsYXNzTmFtZSkge1xuICAgIHRoaXMuaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXRlbSk7XG4gICAgdGhpcy5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG59O1xuXG5sZXQgbWFrZU5hdkJhciA9IGZ1bmN0aW9uKCkge1xuICAgIC8vbGV0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgLy9uYXZiYXIuY2xhc3NOYW1lID0gJ25hdic7XG4gICAgbGV0IG5hdmJhciA9IG5ldyBFbGVtZW50KCd1bCcsICduYXYnKTtcbiAgICBuYXZiYXIuaXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hdicpO1xuICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKG5hdmJhci5pdGVtKTtcblxuICAgIGxldCBuYXZiYXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2YmFyVGV4dC5pbm5lckhUTUwgPSAnWmVuIFN1c2hpICYgR3JpbGwnXG4gICAgbmF2YmFyVGV4dC5pZCA9ICd0aXRsZSc7XG4gICAgbmF2YmFyVGV4dC5jbGFzc05hbWVzID0gJ3RleHQgZmxvYXQgbGVmdCBjbGVhcmZpeCdcbiAgICBuYXZiYXIuaXRlbS5hcHBlbmRDaGlsZChuYXZiYXJUZXh0KTtcblxuICAgIGxldCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsZXQgYUhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYUhvbWUuaW5uZXJIVE1MID0gJ0hvbWUnO1xuICAgIGFIb21lLmhyZWYgPSAnIyc7XG4gICAgaG9tZUJ1dHRvbi5pZCA9ICdob21lJ1xuICAgIGhvbWVCdXR0b24uYXBwZW5kQ2hpbGQoYUhvbWUpO1xuICAgIG5hdmJhci5pdGVtLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuXG4gICAgbGV0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxldCBhTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhTWVudS5pbm5lckhUTUwgPSAnTWVudSc7XG4gICAgYU1lbnUuaHJlZiA9ICcjJztcbiAgICBtZW51QnV0dG9uLmlkID0gJ21lbnUnXG4gICAgbWVudUJ1dHRvbi5hcHBlbmRDaGlsZChhTWVudSk7XG4gICAgbmF2YmFyLml0ZW0uYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG5cbiAgICBsZXQgb3JkZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxldCBhbk9yZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGFuT3JkZXIuaW5uZXJIVE1MID0gJ09yZGVyIEhlcmUnO1xuICAgIGFuT3JkZXIuaHJlZiA9ICdodHRwczovL3d3dy56ZW5zdXNoaWFuZGdyaWxsbWNraW5uZXkuY29tLyc7XG4gICAgb3JkZXJCdXR0b24uaWQgPSAnb3JkZXInXG4gICAgb3JkZXJCdXR0b24uYXBwZW5kQ2hpbGQoYW5PcmRlcik7XG4gICAgbmF2YmFyLml0ZW0uYXBwZW5kQ2hpbGQob3JkZXJCdXR0b24pO1xuXG4gICAgbGV0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxldCBhQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhQ29udGFjdC5pbm5lckhUTUwgPSAnQ29udGFjdCBVcyc7XG4gICAgYUNvbnRhY3QuaHJlZiA9ICcjJztcbiAgICBjb250YWN0QnV0dG9uLmlkID0gJ2NvbnRhY3QnXG4gICAgY29udGFjdEJ1dHRvbi5hcHBlbmRDaGlsZChhQ29udGFjdCk7XG4gICAgbmF2YmFyLml0ZW0uYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG59O1xuXG5sZXQgbWFrZUxvZ28gPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGxldCBhTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhTG9nby5ocmVmID0gJyc7XG4gICAgYUxvZ28uYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgbG9nby5jbGFzc05hbWUgPSAnbG9nbyc7XG4gICAgbG9nby5zcmMgPSAnaW1hZ2VzL0RhcnVtYS5wbmcnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvSG9sZGVyJykuYXBwZW5kQ2hpbGQoYUxvZ28pO1xufTtcblxuZXhwb3J0IHttYWtlTmF2QmFyLCBtYWtlTG9nb307IiwibGV0IGNvbnRlbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5sZXQgbWFrZUJpbyA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBiaW9ncmFwaHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgYmlvZ3JhcGh5LmlubmVySFRNTCA9IGBXZSBzcGVjaWFsaXplIGluIGRlbGljaW91cyBKYXBhbmVzZSBjdWlzaW5lIFxuICAgIGZyb20gZnJlc2ggc3VzaGkgd2l0aCBhIHZhcmlldHkgb2Ygc3BlY2lhbCBmaXNoLCBcbiAgICB0byBoaWJhY2hpIGVudHJlZXMgZ3JpbGxlZCB0byBwZXJmZWN0aW9uIGluIHRoZSBraXRjaGVuLiA8YnIvPjxici8+XG4gICAgQ2hlZi1vd25lciBKYWNrIHdpdGggb3ZlciAyNSB5ZWFycyBvZiBleHBlcmllbmNlIGFuZCB3aG8gcHJldmlvdXNseSBvd25lZCBcbiAgICBcIktpcmFrdSBKYXBhbmVzZSBSZXN0YXVyYW50XCIgaW4gSG91c3RvbiwgVGV4YXMuIFxuICAgIEhlIHdvcmtzIGhhcmQgZXZlcnkgZGF5IHRvIHByb3ZpZGUgYSBjdXN0b21pemVkIGV4cGVyaWVuY2UgZm9yIGV2ZXJ5IGN1c3RvbWVyIFxuICAgIGFuZCB0cmVhdHMgdGhlbSBsaWtlIGhpcyBvd24gZmFtaWx5LiBcbiAgICBXaGVuIGhlIGlzIG5vdCB3b3JraW5nLCBKYWNrIGVuam95cyB3YXRjaGluZyBtb3ZpZXMsIHNpbmdpbmcsIFxuICAgIGFuZCBzcGVuZGluZyB0aW1lIHdpdGggaGlzIGZhbWlseS4gPGJyLz48YnIvPlxuICAgIEhlYWQgc3VzaGktY2hlZiBLaXRhbXVyYS1zYW4gd2hvIHdhcyBwcmV2aW91c2x5IFxuICAgIHRoZSBoZWFkIGNoZWYgb2YgSmluYmVpIEphcGFuZXNlIFJlc3RhdXJhbnQgXG4gICAgYW5kIGhhcyBvdmVyIDQwIHllYXJzIG9mIGV4cGVyaWVuY2Ugd29ya2luZyBpbiBKYXBhbiwgSGF3YWlpIGFuZCBOZXcgWW9yay4gXG4gICAgS2l0YW11cmEtc2FuIGZvY3VzZXMgaGVhdmlseSBvbiBlbnN1cmluZyB0aGUgcXVhbGl0eSBcbiAgICBhbmQgc3RhbmRhcmRzIG9mIG91ciBzdXNoaSBhcmUgb2YgdGhlIGhpZ2hlc3Qgb3JkZXIuIFxuICAgIEtpdGFtdXJhLXNhbiBlbmpveXMgcGxheWluZyB3aXRoIGhpcyBjYXRzLCBcbiAgICBjb29raW5nIGFuZCBzcGVuZGluZyB0aW1lIHdpdGggaGlzIGdyYW5kY2hpbGRyZW4uYDtcbiAgICBiaW9ncmFwaHkuaWQgPSAnYmlvZ3JhcGh5JztcbiAgICBjb250ZW50cy5hcHBlbmRDaGlsZChiaW9ncmFwaHkpO1xufTtcblxubGV0IG1ha2VJbWFnZSA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBpbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltYWdlQ29udGFpbmVyLmlkID0gJ2ltYWdlQ29udGFpbmVyJztcbiAgICBsZXQgaW1hZ2U7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNjsgaSsrKSB7XG4gICAgICAgIGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltYWdlLnNyYyA9IGBpbWFnZXMvU3VzaGlCb2F0JHtpfS5qcGdgO1xuICAgICAgICBpbWFnZS5jbGFzc05hbWUgPSAnYmFubmVySW1hZ2UnO1xuICAgICAgICBpbWFnZS5pZCA9ICdiYW5uZXInO1xuICAgICAgICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICAgIH07XG4gICAgY29udGVudHMuYXBwZW5kQ2hpbGQoaW1hZ2VDb250YWluZXIpO1xuXG4gICAgbGV0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWxDb250YWluZXIuaWQgPSAnbW9kYWxDb250YWluZXInO1xuICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKG1vZGFsQ29udGFpbmVyKTtcblxuICAgIGxldCBmdWxsU2NyZWVuSW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdiYW5uZXJJbWFnZScpO1xuICAgIGxldCBkaXNwbGF5TW9kYWwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHNyYyA9IHRoaXMuZ2V0QXR0cmlidXRlKCdzcmMnKTtcbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsQ29udGFpbmVyJyk7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke3NyY30pYDtcbiAgICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY29udGFpbic7XG4gICAgICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPSAnbm8tcmVwZWF0JztcbiAgICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gJ2NlbnRlcic7XG4gICAgICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDAsMCwwLDAuNCknO1xuICAgICAgICBjb250ZW50cy5hcHBlbmRDaGlsZChtb2RhbCk7XG4gICAgXG4gICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPGZ1bGxTY3JlZW5JbWFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBmdWxsU2NyZWVuSW1hZ2VbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5TW9kYWwpO1xuICAgIH07XG59O1xuXG5sZXQgcG9wdWxhdGVXZWxjb21lID0gZnVuY3Rpb24oKSB7XG4gICAgbWFrZUJpbygpO1xufTtcblxuZXhwb3J0IHtjb250ZW50cywgbWFrZUltYWdlLCBwb3B1bGF0ZVdlbGNvbWV9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHttYWtlTmF2QmFyLCBtYWtlTG9nb30gZnJvbSAnLi9uYXZiYXIuanMnO1xuaW1wb3J0IHtjb250ZW50cywgbWFrZUltYWdlLCBwb3B1bGF0ZVdlbGNvbWV9IGZyb20gJy4vd2VsY29tZXBhZ2UuanMnO1xuaW1wb3J0IG1ha2VNZW51IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgbWFrZUNvcHlyaWdodCBmcm9tICcuL2NvcHlyaWdodGJhci5qcydcbmltcG9ydCB7bWFrZUNvbnRhY3QsIGluaXRNYXB9IGZyb20gJy4vY29udGFjdC5qcydcblxubWFrZU5hdkJhcigpO1xubWFrZUxvZ28oKTtcbm1ha2VJbWFnZSgpO1xucG9wdWxhdGVXZWxjb21lKCk7XG5tYWtlQ29weXJpZ2h0KCk7XG5cbmxldCBob21lVGFiID0gMTtcbmxldCBtZW51VGFiID0gMDtcbmxldCBjb250YWN0VGFiID0gMDtcblxubGV0IHJlbW92ZVdlbGNvbWUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoaG9tZVRhYiA9PT0gMSkge1xuICAgIGNvbnRlbnRzLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiaW9ncmFwaHknKSk7XG4gICAgfSBlbHNlIHt9O1xufTtcblxubGV0IHJlbW92ZU1lbnUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAobWVudVRhYiA9PT0gMSkge1xuICAgIGNvbnRlbnRzLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYWxsZXJ5JykpO1xuICAgIH0gZWxzZSB7fTtcbn07XG5cbmxldCByZW1vdmVDb250YWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKGNvbnRhY3RUYWIgPT09IDEpIHtcbiAgICAgICAgY29udGVudHMucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RIb2xkZXInKSk7XG4gICAgICAgIGNvbnRlbnRzLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSk7XG4gICAgfSBlbHNlIHt9O1xufTtcblxubGV0IGdvSG9tZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChob21lVGFiID09PSAwKSB7XG4gICAgICAgIHBvcHVsYXRlV2VsY29tZSgpO1xuICAgICAgICByZW1vdmVNZW51KCk7XG4gICAgICAgIHJlbW92ZUNvbnRhY3QoKTtcbiAgICAgICAgaG9tZVRhYiA9IDE7XG4gICAgICAgIG1lbnVUYWIgPSAwO1xuICAgICAgICBjb250YWN0VGFiID0gMDtcbiAgICB9IGVsc2Uge307XG59O1xuXG5sZXQgZ29NZW51ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKG1lbnVUYWIgPT09IDApIHtcbiAgICAgICAgcmVtb3ZlQ29udGFjdCgpO1xuICAgICAgICByZW1vdmVXZWxjb21lKCk7XG4gICAgICAgIG1ha2VNZW51KCk7XG4gICAgICAgIGhvbWVUYWIgPSAwO1xuICAgICAgICBtZW51VGFiID0gMTtcbiAgICAgICAgY29udGFjdFRhYiA9IDA7XG4gICAgfSBlbHNlIHt9O1xufTtcblxubGV0IGdvQ29udGFjdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChjb250YWN0VGFiID09PSAwKSB7XG4gICAgICAgIHJlbW92ZVdlbGNvbWUoKTtcbiAgICAgICAgcmVtb3ZlTWVudSgpO1xuICAgICAgICBtYWtlQ29udGFjdCgpO1xuICAgICAgICBpbml0TWFwKCk7XG4gICAgICAgIGNvbnRhY3RUYWIgPSAxO1xuICAgICAgICBtZW51VGFiID0gMDtcbiAgICAgICAgaG9tZVRhYiA9IDA7XG4gICAgfSBlbHNlIHt9O1xufTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdvSG9tZSwgZmFsc2UpO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdvTWVudSwgZmFsc2UpO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdvQ29udGFjdCwgZmFsc2UpOyJdLCJzb3VyY2VSb290IjoiIn0=