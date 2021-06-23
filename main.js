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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29weXJpZ2h0YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3dlbGNvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDOztBQUV6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksOERBQW9COztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksOERBQW9CO0FBQ3hCO0FBQ0EsaUJBQWlCLDhCQUE4QjtBQUMvQztBQUNBLEtBQUs7QUFDTDtBQUNBLG1CQUFtQiw4QkFBOEI7QUFDakQ7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFXO0FBQ25CLFFBQVEsb0RBQU87QUFDZjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLCtFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb250ZW50cyB9IGZyb20gXCIuL3dlbGNvbWVwYWdlXCI7XG5cbmxldCBtYXBIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1hcEhvbGRlci5pZCA9ICdtYXAnO1xuXG5sZXQgbWFrZUNvbnRhY3QgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgY29udGFjdEhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RIb2xkZXIuaWQgPSAnY29udGFjdEhvbGRlcic7XG4gICAgY29udGVudHMuYXBwZW5kQ2hpbGQoY29udGFjdEhvbGRlcik7XG5cbiAgICBsZXQgY29udGFjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnRhY3RJbmZvLmlkID0gJ2NvbnRhY3RJbmZvJztcbiAgICBjb250YWN0SW5mby5pbm5lckhUTUwgPSBcbiAgICBgQWRkcmVzczo8YnI+XG4gICAgMzc1MSBTIFN0b25lYnJpZGdlIERyLjxici8+XG4gICAgTWNraW5uZXksIFRleGFzIDc1MDcwPGJyLz5cbiAgICBQaG9uZTo8YnIvPlxuICAgIDk3Mi01NDctMTYyODxicj5cbiAgICBFbWFpbDogemVuc3VzaGlhbmRncmlsbEBpY2xvdWQuY29tYDtcbiAgICBjb250YWN0SG9sZGVyLmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvKTtcblxuICAgIGxldCBvcGVuaW5nVGltZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG9wZW5pbmdUaW1lcy5pZCA9ICdvcGVuaW5nVGltZSc7XG4gICAgb3BlbmluZ1RpbWVzLmlubmVySFRNTCA9IFxuICAgIGBIb3Vyczo8YnI+XG4gICAgVHVlcyAtIFNhdDogMTFBTSAtIDEwUE08YnIvPlxuICAgIFN1biAmIE1vbjogQ2xvc2VkPGJyLz5cbiAgICBEcmVzcyBDb2RlOiBDYXN1YWw8YnIvPlxuICAgIEZvciBSZXNlcnZhdGlvbnMgYW5kIHBhcnRpZXMgb2YgNyBvciBtb3JlLDxici8+IHBsZWFzZSBjYWxsIDk3Mi01NDctMTYyOGA7XG4gICAgY29udGFjdEhvbGRlci5hcHBlbmRDaGlsZChvcGVuaW5nVGltZXMpO1xufTtcblxubGV0IG1hcDtcblxuZnVuY3Rpb24gaW5pdE1hcCgpIHtcbiAgICBjb250ZW50cy5hcHBlbmRDaGlsZChtYXBIb2xkZXIpO1xuICAgIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBcIiksIHtcbiAgICAgICAgY2VudGVyOiB7bGF0OiAzMy4xNjgyNywgbG5nOiAtOTYuNzI5OTl9LFxuICAgICAgICB6b29tOiAxOCxcbiAgICB9KTtcbiAgICBsZXQgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgIHBvc2l0aW9uOiB7bGF0OiAzMy4xNjgyNywgbG5nOiAtOTYuNzI5OTl9LFxuICAgICAgICBtYXA6IG1hcCxcbiAgICB9KTtcbn07XG5cbmV4cG9ydCB7bWFrZUNvbnRhY3QsIGluaXRNYXB9OyIsImxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29weXJpZ2h0SG9sZGVyJyk7XG5cbmxldCBtYWtlQ29weXJpZ2h0ID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvcHlyaWdodC5pZCA9ICdjb3B5cmlnaHQnO1xuICAgIGNvcHlyaWdodC5jbGFzc05hbWUgPSAnY2xlYXJmaXgnO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xuXG4gICAgbGV0IGNvcHlyaWdodFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb3B5cmlnaHRUZXh0LmlubmVySFRNTCA9ICdDT1BZUklHSFQgSkFNRVMgTE8gMjAyMSdcbiAgICBjb3B5cmlnaHRUZXh0LmlkID0gJ2NvcHlyaWdodFRleHQnO1xuICAgIGNvcHlyaWdodFRleHQuY2xhc3NOYW1lcyA9ICd0ZXh0IGZsb2F0IGxlZnQnXG4gICAgY29weXJpZ2h0LmFwcGVuZENoaWxkKGNvcHlyaWdodFRleHQpO1xuXG4gICAgbGV0IGNvcHlyaWdodExpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb3B5cmlnaHRMaW5rcy5jbGFzc05hbWUgPSAnbGlua3MgZmxvYXQgcmlnaHQnO1xuICAgIGNvcHlyaWdodExpbmtzLmlkID0gJ2xpbmtzJztcbiAgICBjb3B5cmlnaHQuYXBwZW5kQ2hpbGQoY29weXJpZ2h0TGlua3MpO1xuXG4gICAgbGV0IGZhY2Vib29rSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGV0IGZhY2Vib29rTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsZXQgZmFjZWJvb2tGb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGZhY2Vib29rTGluay5ocmVmID0gJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9aZW5TdXNoaU1ja2lubmV5Lyc7XG4gICAgZmFjZWJvb2tMaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuICAgIGZhY2Vib29rTGluay5yZWwgPSAnbm9yZWZlcnJlciBub29wZW5lcic7XG4gICAgZmFjZWJvb2tGb250LmNsYXNzTmFtZSA9ICdmYWIgZmEtZmFjZWJvb2stc3F1YXJlJ1xuXG4gICAgbGV0IG9yZGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGV0IG9yZGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsZXQgb3JkZXJGb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIG9yZGVyTGluay5ocmVmID0gJ2h0dHBzOi8vd3d3LnplbnN1c2hpYW5kZ3JpbGxtY2tpbm5leS5jb20vJztcbiAgICBvcmRlckxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgb3JkZXJMaW5rLnJlbCA9ICdub3JlZmVycmVyIG5vb3BlbmVyJztcbiAgICBvcmRlckZvbnQuY2xhc3NOYW1lID0gJ2ZhcyBmYS11dGVuc2lscyc7XG5cbiAgICBsZXQgZ2l0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGV0IGdpdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGV0IGdpdEZvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgZ2l0TGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9KYW1lc2xvNTk5JztcbiAgICBnaXRMaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuICAgIGdpdExpbmsucmVsID0gJ25vcmVmZXJyZXIgbm9vcGVuZXInO1xuICAgIGdpdEZvbnQuY2xhc3NOYW1lID0gJ2ZhYiBmYS1naXRodWItc3F1YXJlJztcblxuICAgIGZhY2Vib29rTGluay5hcHBlbmRDaGlsZChmYWNlYm9va0ZvbnQpO1xuICAgIGZhY2Vib29rSWNvbi5hcHBlbmRDaGlsZChmYWNlYm9va0xpbmspO1xuICAgIGNvcHlyaWdodExpbmtzLmFwcGVuZENoaWxkKGZhY2Vib29rSWNvbik7XG4gICAgb3JkZXJMaW5rLmFwcGVuZENoaWxkKG9yZGVyRm9udCk7XG4gICAgb3JkZXJJY29uLmFwcGVuZENoaWxkKG9yZGVyTGluayk7XG4gICAgY29weXJpZ2h0TGlua3MuYXBwZW5kQ2hpbGQob3JkZXJJY29uKTtcbiAgICBnaXRMaW5rLmFwcGVuZENoaWxkKGdpdEZvbnQpO1xuICAgIGdpdEljb24uYXBwZW5kQ2hpbGQoZ2l0TGluayk7XG4gICAgY29weXJpZ2h0TGlua3MuYXBwZW5kQ2hpbGQoZ2l0SWNvbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYWtlQ29weXJpZ2h0OyIsImltcG9ydCB7IGNvbnRlbnRzIH0gZnJvbSBcIi4vd2VsY29tZXBhZ2VcIjtcblxubGV0IG1ha2VNZW51ID0gZnVuY3Rpb24oKSB7XG5cbiAgICBsZXQgbWVudUdhbGxlcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51R2FsbGVyeS5pZCA9ICdnYWxsZXJ5JztcbiAgICBjb250ZW50cy5hcHBlbmRDaGlsZChtZW51R2FsbGVyeSk7XG5cbiAgICBsZXQgaW1hZ2U7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gODsgaSsrKSB7XG4gICAgICAgIGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltYWdlLnNyYyA9IGBpbWFnZXMvbWVudSR7aX0uanBnYDtcbiAgICAgICAgaW1hZ2UuY2xhc3NOYW1lID0gJ21lbnVJbWFnZSc7XG4gICAgICAgIGltYWdlLmlkID0gJ21lbnVJbWFnZSc7XG4gICAgICAgIG1lbnVHYWxsZXJ5LmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgICAgfTtcbiAgICBcbiAgICBsZXQgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbENvbnRhaW5lci5pZCA9ICdtb2RhbENvbnRhaW5lcic7XG4gICAgY29udGVudHMuYXBwZW5kQ2hpbGQobW9kYWxDb250YWluZXIpO1xuXG4gICAgbGV0IGZ1bGxTY3JlZW5JbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21lbnVJbWFnZScpO1xuICAgIGxldCBkaXNwbGF5TW9kYWwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHNyYyA9IHRoaXMuZ2V0QXR0cmlidXRlKCdzcmMnKTtcbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsQ29udGFpbmVyJyk7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke3NyY30pYDtcbiAgICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY29udGFpbic7XG4gICAgICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPSAnbm8tcmVwZWF0JztcbiAgICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gJ2NlbnRlcic7XG4gICAgICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDAsMCwwLDAuNCknO1xuICAgICAgICBjb250ZW50cy5hcHBlbmRDaGlsZChtb2RhbCk7XG4gICAgXG4gICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPGZ1bGxTY3JlZW5JbWFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBmdWxsU2NyZWVuSW1hZ2VbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5TW9kYWwpO1xuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYWtlTWVudTsiLCJpbXBvcnQgeyBjb250ZW50cyB9IGZyb20gXCIuL3dlbGNvbWVwYWdlXCI7XG5cbmxldCBtYWtlTmF2QmFyID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbmF2YmFyLmNsYXNzTmFtZSA9ICduYXYnO1xuICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKG5hdmJhcik7XG5cbiAgICBsZXQgbmF2YmFyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdmJhclRleHQuaW5uZXJIVE1MID0gJ1plbiBTdXNoaSAmIEdyaWxsJ1xuICAgIG5hdmJhclRleHQuaWQgPSAndGl0bGUnO1xuICAgIG5hdmJhclRleHQuY2xhc3NOYW1lcyA9ICd0ZXh0IGZsb2F0IGxlZnQgY2xlYXJmaXgnXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKG5hdmJhclRleHQpO1xuXG4gICAgbGV0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxldCBhSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhSG9tZS5pbm5lckhUTUwgPSAnSG9tZSc7XG4gICAgYUhvbWUuaHJlZiA9ICcjJztcbiAgICBob21lQnV0dG9uLmlkID0gJ2hvbWUnXG4gICAgaG9tZUJ1dHRvbi5hcHBlbmRDaGlsZChhSG9tZSk7XG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuXG4gICAgbGV0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxldCBhTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhTWVudS5pbm5lckhUTUwgPSAnTWVudSc7XG4gICAgYU1lbnUuaHJlZiA9ICcjJztcbiAgICBtZW51QnV0dG9uLmlkID0gJ21lbnUnXG4gICAgbWVudUJ1dHRvbi5hcHBlbmRDaGlsZChhTWVudSk7XG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuXG4gICAgbGV0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxldCBhQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhQ29udGFjdC5pbm5lckhUTUwgPSAnQ29udGFjdCBVcyc7XG4gICAgYUNvbnRhY3QuaHJlZiA9ICcjJztcbiAgICBjb250YWN0QnV0dG9uLmlkID0gJ2NvbnRhY3QnXG4gICAgY29udGFjdEJ1dHRvbi5hcHBlbmRDaGlsZChhQ29udGFjdCk7XG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xufTtcblxubGV0IG1ha2VMb2dvID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsZXQgYUxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYUxvZ28uaHJlZiA9ICcnO1xuICAgIGFMb2dvLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgIGxvZ28uY2xhc3NOYW1lID0gJ2xvZ28nO1xuICAgIGxvZ28uc3JjID0gJ2ltYWdlcy9EYXJ1bWEucG5nJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nb0hvbGRlcicpLmFwcGVuZENoaWxkKGFMb2dvKTtcbn07XG5cbmV4cG9ydCB7bWFrZU5hdkJhciwgbWFrZUxvZ299OyIsImxldCBjb250ZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxubGV0IG1ha2VCaW8gPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgYmlvZ3JhcGh5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGJpb2dyYXBoeS5pbm5lckhUTUwgPSBgV2Ugc3BlY2lhbGl6ZSBpbiBkZWxpY2lvdXMgSmFwYW5lc2UgY3Vpc2luZSBcbiAgICBmcm9tIGZyZXNoIHN1c2hpIHdpdGggYSB2YXJpZXR5IG9mIHNwZWNpYWwgZmlzaCwgXG4gICAgdG8gaGliYWNoaSBlbnRyZWVzIGdyaWxsZWQgdG8gcGVyZmVjdGlvbiBpbiB0aGUga2l0Y2hlbi4gPGJyLz48YnIvPlxuICAgIENoZWYtb3duZXIgSmFjayB3aXRoIG92ZXIgMjUgeWVhcnMgb2YgZXhwZXJpZW5jZSBhbmQgd2hvIHByZXZpb3VzbHkgb3duZWQgXG4gICAgXCJLaXJha3UgSmFwYW5lc2UgUmVzdGF1cmFudFwiIGluIEhvdXN0b24sIFRleGFzLiBcbiAgICBIZSB3b3JrcyBoYXJkIGV2ZXJ5IGRheSB0byBwcm92aWRlIGEgY3VzdG9taXplZCBleHBlcmllbmNlIGZvciBldmVyeSBjdXN0b21lciBcbiAgICBhbmQgdHJlYXRzIHRoZW0gbGlrZSBoaXMgb3duIGZhbWlseS4gXG4gICAgV2hlbiBoZSBpcyBub3Qgd29ya2luZywgSmFjayBlbmpveXMgd2F0Y2hpbmcgbW92aWVzLCBzaW5naW5nLCBcbiAgICBhbmQgc3BlbmRpbmcgdGltZSB3aXRoIGhpcyBmYW1pbHkuIDxici8+PGJyLz5cbiAgICBIZWFkIHN1c2hpLWNoZWYgS2l0YW11cmEtc2FuIHdobyB3YXMgcHJldmlvdXNseSBcbiAgICB0aGUgaGVhZCBjaGVmIG9mIEppbmJlaSBKYXBhbmVzZSBSZXN0YXVyYW50IFxuICAgIGFuZCBoYXMgb3ZlciA0MCB5ZWFycyBvZiBleHBlcmllbmNlIHdvcmtpbmcgaW4gSmFwYW4sIEhhd2FpaSBhbmQgTmV3IFlvcmsuIFxuICAgIEtpdGFtdXJhLXNhbiBmb2N1c2VzIGhlYXZpbHkgb24gZW5zdXJpbmcgdGhlIHF1YWxpdHkgXG4gICAgYW5kIHN0YW5kYXJkcyBvZiBvdXIgc3VzaGkgYXJlIG9mIHRoZSBoaWdoZXN0IG9yZGVyLiBcbiAgICBJbiBoaXMgZnJlZSB0aW1lLCBLaXRhbXVyYS1zYW4gZW5qb3lzIHBsYXlpbmcgd2l0aCBoaXMgY2F0cywgXG4gICAgY29va2luZyBhbmQgc3BlbmRpbmcgdGltZSB3aXRoIGhpcyBncmFuZGNoaWxkcmVuLmA7XG4gICAgYmlvZ3JhcGh5LmlkID0gJ2Jpb2dyYXBoeSc7XG4gICAgY29udGVudHMuYXBwZW5kQ2hpbGQoYmlvZ3JhcGh5KTtcbn07XG5cbmxldCBtYWtlSW1hZ2UgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWFnZUNvbnRhaW5lci5pZCA9ICdpbWFnZUNvbnRhaW5lcic7XG4gICAgbGV0IGltYWdlO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDY7IGkrKykge1xuICAgICAgICBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpbWFnZS5zcmMgPSBgaW1hZ2VzL1N1c2hpQm9hdCR7aX0uanBnYDtcbiAgICAgICAgaW1hZ2UuY2xhc3NOYW1lID0gJ2Jhbm5lckltYWdlJztcbiAgICAgICAgaW1hZ2UuaWQgPSAnYmFubmVyJztcbiAgICAgICAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICAgICB9O1xuICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKGltYWdlQ29udGFpbmVyKTtcblxuICAgIGxldCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsQ29udGFpbmVyLmlkID0gJ21vZGFsQ29udGFpbmVyJztcbiAgICBjb250ZW50cy5hcHBlbmRDaGlsZChtb2RhbENvbnRhaW5lcik7XG5cbiAgICBsZXQgZnVsbFNjcmVlbkltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYmFubmVySW1hZ2UnKTtcbiAgICBsZXQgZGlzcGxheU1vZGFsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBzcmMgPSB0aGlzLmdldEF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbENvbnRhaW5lcicpO1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtzcmN9KWA7XG4gICAgICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvbnRhaW4nO1xuICAgICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gJ25vLXJlcGVhdCc7XG4gICAgICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICdjZW50ZXInO1xuICAgICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLDAsMCwwLjQpJztcbiAgICAgICAgY29udGVudHMuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICAgIFxuICAgIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbCkge1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDxmdWxsU2NyZWVuSW1hZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZnVsbFNjcmVlbkltYWdlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheU1vZGFsKTtcbiAgICB9O1xufTtcblxubGV0IHBvcHVsYXRlV2VsY29tZSA9IGZ1bmN0aW9uKCkge1xuICAgIG1ha2VCaW8oKTtcbn07XG5cbmV4cG9ydCB7Y29udGVudHMsIG1ha2VJbWFnZSwgcG9wdWxhdGVXZWxjb21lfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7bWFrZU5hdkJhciwgbWFrZUxvZ299IGZyb20gJy4vbmF2YmFyLmpzJztcbmltcG9ydCB7Y29udGVudHMsIG1ha2VJbWFnZSwgcG9wdWxhdGVXZWxjb21lfSBmcm9tICcuL3dlbGNvbWVwYWdlLmpzJztcbmltcG9ydCBtYWtlTWVudSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IG1ha2VDb3B5cmlnaHQgZnJvbSAnLi9jb3B5cmlnaHRiYXIuanMnXG5pbXBvcnQge21ha2VDb250YWN0LCBpbml0TWFwfSBmcm9tICcuL2NvbnRhY3QuanMnXG5cbm1ha2VOYXZCYXIoKTtcbm1ha2VMb2dvKCk7XG5tYWtlSW1hZ2UoKTtcbnBvcHVsYXRlV2VsY29tZSgpO1xubWFrZUNvcHlyaWdodCgpO1xuXG5sZXQgaG9tZVRhYiA9IDE7XG5sZXQgbWVudVRhYiA9IDA7XG5sZXQgY29udGFjdFRhYiA9IDA7XG5cbmxldCByZW1vdmVXZWxjb21lID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKGhvbWVUYWIgPT09IDEpIHtcbiAgICBjb250ZW50cy5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmlvZ3JhcGh5JykpO1xuICAgIH0gZWxzZSB7fTtcbn07XG5cbmxldCByZW1vdmVNZW51ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKG1lbnVUYWIgPT09IDEpIHtcbiAgICBjb250ZW50cy5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FsbGVyeScpKTtcbiAgICB9IGVsc2Uge307XG59O1xuXG5sZXQgcmVtb3ZlQ29udGFjdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChjb250YWN0VGFiID09PSAxKSB7XG4gICAgICAgIGNvbnRlbnRzLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0SG9sZGVyJykpO1xuICAgICAgICBjb250ZW50cy5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJykpO1xuICAgIH0gZWxzZSB7fTtcbn07XG5cbmxldCBnb0hvbWUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoaG9tZVRhYiA9PT0gMCkge1xuICAgICAgICBwb3B1bGF0ZVdlbGNvbWUoKTtcbiAgICAgICAgcmVtb3ZlTWVudSgpO1xuICAgICAgICByZW1vdmVDb250YWN0KCk7XG4gICAgICAgIGhvbWVUYWIgPSAxO1xuICAgICAgICBtZW51VGFiID0gMDtcbiAgICAgICAgY29udGFjdFRhYiA9IDA7XG4gICAgfSBlbHNlIHt9O1xufTtcblxubGV0IGdvTWVudSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChtZW51VGFiID09PSAwKSB7XG4gICAgICAgIHJlbW92ZUNvbnRhY3QoKTtcbiAgICAgICAgcmVtb3ZlV2VsY29tZSgpO1xuICAgICAgICBtYWtlTWVudSgpO1xuICAgICAgICBob21lVGFiID0gMDtcbiAgICAgICAgbWVudVRhYiA9IDE7XG4gICAgICAgIGNvbnRhY3RUYWIgPSAwO1xuICAgIH0gZWxzZSB7fTtcbn07XG5cbmxldCBnb0NvbnRhY3QgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoY29udGFjdFRhYiA9PT0gMCkge1xuICAgICAgICByZW1vdmVXZWxjb21lKCk7XG4gICAgICAgIHJlbW92ZU1lbnUoKTtcbiAgICAgICAgbWFrZUNvbnRhY3QoKTtcbiAgICAgICAgaW5pdE1hcCgpO1xuICAgICAgICBjb250YWN0VGFiID0gMTtcbiAgICAgICAgbWVudVRhYiA9IDA7XG4gICAgICAgIGhvbWVUYWIgPSAwO1xuICAgIH0gZWxzZSB7fTtcbn07XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnb0hvbWUsIGZhbHNlKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnb01lbnUsIGZhbHNlKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnb0NvbnRhY3QsIGZhbHNlKTsiXSwic291cmNlUm9vdCI6IiJ9