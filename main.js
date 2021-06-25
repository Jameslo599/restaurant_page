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


//Houses Google Maps
let mapHolder = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('div', 'map');

//Generates contact information
let makeContact = function() {
    let contactHolder = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('div', 'contactHolder');
    _welcomepage__WEBPACK_IMPORTED_MODULE_0__.contents.appendChild(contactHolder.item);

    let contactInfo = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('h2', 'contactInfo');
    contactInfo.item.innerHTML = 
    `Address:<br>
    3751 S Stonebridge Dr.<br/>
    Mckinney, Texas 75070<br/>
    Phone:<br/>
    972-547-1628<br>
    Email: zensushiandgrill@icloud.com`;
    contactHolder.item.appendChild(contactInfo.item);

    let openingTimes = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('h2', 'openingTime');
    openingTimes.item.innerHTML = 
    `Hours:<br>
    Tues - Sat: 11AM - 10PM<br/>
    Sun & Mon: Closed<br/>
    Dress Code: Casual<br/>
    For Reservations and parties of 7 or more,<br/> please call 972-547-1628`;
    contactHolder.item.appendChild(openingTimes.item);
};

let map;

function initMap() {
    _welcomepage__WEBPACK_IMPORTED_MODULE_0__.contents.appendChild(mapHolder.item);
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
/* harmony import */ var _welcomepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcomepage */ "./src/welcomepage.js");


//Houses copyright bar
let container = document.getElementById('copyrightHolder');

//Generates complete copyright bar
let makeCopyright = function() {
    let copyright = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('div', 'copyright');
    copyright.item.className = 'clearfix';
    container.appendChild(copyright.item);

    let copyrightText = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('div', 'copyrightText');
    copyrightText.item.innerHTML = 'COPYRIGHT JAMES LO 2021'
    copyrightText.item.classNames = 'text float left'
    copyright.item.appendChild(copyrightText.item);

    let copyrightLinks = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('ul', 'links');
    copyrightLinks.item.className = 'links float right';
    copyright.item.appendChild(copyrightLinks.item);

    let facebookIcon = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('li');
    let facebookLink = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('a');
    let facebookFont = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('i', 'fab fa-facebook-square');
    facebookLink.item.href = 
    'https://www.facebook.com/ZenSushiMckinney/';
    facebookLink.item.target = '_blank';
    facebookLink.item.rel = 'noreferrer noopener';

    let orderIcon = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('li');
    let orderLink = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('a');
    let orderFont = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('i', 'fas fa-utensils');
    orderLink.item.href = 'https://www.zensushiandgrillmckinney.com/';
    orderLink.item.target = '_blank';
    orderLink.item.rel = 'noreferrer noopener';

    let gitIcon = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('li');
    let gitLink = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('a');
    let gitFont = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('i', 'fab fa-github-square');
    gitLink.item.href = 'https://github.com/Jameslo599';
    gitLink.item.target = '_blank';
    gitLink.item.rel = 'noreferrer noopener';

    facebookLink.item.appendChild(facebookFont.item);
    facebookIcon.item.appendChild(facebookLink.item);
    copyrightLinks.item.appendChild(facebookIcon.item);
    orderLink.item.appendChild(orderFont.item);
    orderIcon.item.appendChild(orderLink.item);
    copyrightLinks.item.appendChild(orderIcon.item);
    gitLink.item.appendChild(gitFont.item);
    gitIcon.item.appendChild(gitLink.item);
    copyrightLinks.item.appendChild(gitIcon.item);
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
    //Houses menu images
    let menuGallery = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('div', 'gallery');
    _welcomepage__WEBPACK_IMPORTED_MODULE_0__.contents.appendChild(menuGallery.item);

    //Allow images to be presented full screen when clicked
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

    //Generates menu images
    let image;
    for (let i = 1; i <= 8; i++) {
        image = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('img', 'menuImage');
        image.item.src = `images/menu${i}.jpg`;
        image.item.addEventListener('click', displayModal)
        menuGallery.item.appendChild(image.item);
        };
    
    let modalContainer = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('div', 'modalContainer');
    _welcomepage__WEBPACK_IMPORTED_MODULE_0__.contents.appendChild(modalContainer.item);
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
/* harmony export */   "Element": () => (/* reexport safe */ _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element),
/* harmony export */   "makeNavBar": () => (/* binding */ makeNavBar),
/* harmony export */   "makeLogo": () => (/* binding */ makeLogo)
/* harmony export */ });
/* harmony import */ var _welcomepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcomepage */ "./src/welcomepage.js");


//Generates full navigation bar
let makeNavBar = function() {
    let navbar = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('ul', 'nav');
    _welcomepage__WEBPACK_IMPORTED_MODULE_0__.contents.appendChild(navbar.item);

    let navbarText = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('div', 'title');
    navbarText.item.innerHTML = 'Zen Sushi & Grill'
    navbar.item.appendChild(navbarText.item);

    let homeButton = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('li', 'home');
    let aHome = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('a');
    aHome.item.innerHTML = 'Home';
    aHome.item.href = '#';
    homeButton.item.appendChild(aHome.item);
    navbar.item.appendChild(homeButton.item);

    let menuButton = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('li', 'menu');
    let aMenu = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('a');
    aMenu.item.innerHTML = 'Menu';
    aMenu.item.href = '#';
    menuButton.item.appendChild(aMenu.item);
    navbar.item.appendChild(menuButton.item);

    let orderButton = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('li', 'order');
    let anOrder = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('a');
    anOrder.item.innerHTML = 'Order Here';
    anOrder.item.href = 'https://www.zensushiandgrillmckinney.com/';
    anOrder.item.target = '_blank'
    anOrder.item.rel = 'noreferrer noopener';
    orderButton.item.appendChild(anOrder.item);
    navbar.item.appendChild(orderButton.item);

    let contactButton = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('li', 'contact');
    let aContact = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('a');
    aContact.item.innerHTML = 'Contact Us';
    aContact.item.href = '#';
    contactButton.item.appendChild(aContact.item);
    navbar.item.appendChild(contactButton.item);
};

//Generates Logo
let makeLogo = function() {
    let logo =  new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('img', 'logo');
    let aLogo = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('a');
    aLogo.item.href = '';
    aLogo.item.appendChild(logo.item);
    //logo.className = 'logo';
    logo.item.src = 'images/Daruma.png';
    document.getElementById('logoHolder').appendChild(aLogo.item);
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
/* harmony export */   "Element": () => (/* binding */ Element),
/* harmony export */   "makeImage": () => (/* binding */ makeImage),
/* harmony export */   "makeBio": () => (/* binding */ makeBio)
/* harmony export */ });
let contents = document.getElementById("content");

// Constructor for creating DOM elements
const Element = function(item, className, id) {
    this.item = document.createElement(item);
    this.item.setAttribute('class', className);
    this.item.setAttribute('id', className);
};

//Generates restaurant biography
let makeBio = () => {
    let biography = new Element('h2', 'biography');
    biography.item.innerHTML = `We specialize in delicious Japanese cuisine 
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
    contents.appendChild(biography.item);
};

//Generates six images in a grid that can be set fullscreen when clicked
let makeImage = function() {
    //Allow images to be presented full screen when clicked
    let modalContainer = new Element('div', 'modalContainer');
    contents.appendChild(modalContainer.item);

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
    //Generates images
    let imageContainer = new Element('div', 'imageContainer');
    let image;
    for (let i = 1; i <= 6; i++) {
        image =  new Element('img', 'bannerImage');
        image.item.src = `images/SushiBoat${i}.jpg`;
        image.item.addEventListener('click', displayModal);
        imageContainer.item.appendChild(image.item);
        };
    contents.appendChild(imageContainer.item);
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






let generatePage = () => {
    (0,_navbar_js__WEBPACK_IMPORTED_MODULE_0__.makeNavBar)();
    (0,_navbar_js__WEBPACK_IMPORTED_MODULE_0__.makeLogo)();
    (0,_welcomepage_js__WEBPACK_IMPORTED_MODULE_1__.makeImage)();
    (0,_welcomepage_js__WEBPACK_IMPORTED_MODULE_1__.makeBio)();
    (0,_copyrightbar_js__WEBPACK_IMPORTED_MODULE_3__.default)();
    };
generatePage();

let homeTab = 1;
let menuTab = 0;
let contactTab = 0;

let removeWelcome = () => {
    if (document.contains(document.getElementById('biography'))) {
        document.getElementById('biography').remove();
    };
};

let removeMenu = () => {
    if (document.contains(document.getElementById('gallery'))) {
        document.getElementById('gallery').remove();
    };
};

let removeContact = () => {
    if (document.contains(document.getElementById('contactHolder'))) {
        document.getElementById('contactHolder').remove();
        document.getElementById('map').remove();
    };
};


let goHome = () => {
    if (homeTab === 0) {
        (0,_welcomepage_js__WEBPACK_IMPORTED_MODULE_1__.makeBio)();
        removeMenu();
        removeContact();
        homeTab = 1;
        menuTab = 0;
        contactTab = 0;
    };
};

let goMenu = () => {
    if (menuTab === 0) {
        removeContact();
        removeWelcome();
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.default)();
        homeTab = 0;
        menuTab = 1;
        contactTab = 0;
    };
};

let goContact = () => {
    if (contactTab === 0) {
        removeWelcome();
        removeMenu();
        (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__.makeContact)();
        (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__.initMap)();
        contactTab = 1;
        menuTab = 0;
        homeTab = 0;
    };
};

document.getElementById('home')
.addEventListener('click', goHome, false);
document.getElementById('menu')
.addEventListener('click', goMenu, false);
document.getElementById('contact')
.addEventListener('click', goContact, false);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29weXJpZ2h0YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3dlbGNvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEOztBQUVoRDtBQUNBLG9CQUFvQixpREFBTzs7QUFFM0I7QUFDQTtBQUNBLDRCQUE0QixpREFBTztBQUNuQyxJQUFJLDhEQUFvQjs7QUFFeEIsMEJBQTBCLGlEQUFPO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLGlEQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLDhEQUFvQjtBQUN4QjtBQUNBLGlCQUFpQiw4QkFBOEI7QUFDL0M7QUFDQSxLQUFLO0FBQ0w7QUFDQSxtQkFBbUIsOEJBQThCO0FBQ2pEO0FBQ0EsS0FBSztBQUNM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YztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDTmlEO0FBQ0c7QUFDbkI7QUFDWTtBQUNJOztBQUVqRDtBQUNBLElBQUksc0RBQVU7QUFDZCxJQUFJLG9EQUFRO0FBQ1osSUFBSSwwREFBUztBQUNiLElBQUksd0RBQU87QUFDWCxJQUFJLHlEQUFhO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxRQUFRLHdEQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFRO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFXO0FBQ25CLFFBQVEsb0RBQU87QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb250ZW50cywgRWxlbWVudH0gZnJvbSBcIi4vd2VsY29tZXBhZ2VcIjtcblxuLy9Ib3VzZXMgR29vZ2xlIE1hcHNcbmxldCBtYXBIb2xkZXIgPSBuZXcgRWxlbWVudCgnZGl2JywgJ21hcCcpO1xuXG4vL0dlbmVyYXRlcyBjb250YWN0IGluZm9ybWF0aW9uXG5sZXQgbWFrZUNvbnRhY3QgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgY29udGFjdEhvbGRlciA9IG5ldyBFbGVtZW50KCdkaXYnLCAnY29udGFjdEhvbGRlcicpO1xuICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKGNvbnRhY3RIb2xkZXIuaXRlbSk7XG5cbiAgICBsZXQgY29udGFjdEluZm8gPSBuZXcgRWxlbWVudCgnaDInLCAnY29udGFjdEluZm8nKTtcbiAgICBjb250YWN0SW5mby5pdGVtLmlubmVySFRNTCA9IFxuICAgIGBBZGRyZXNzOjxicj5cbiAgICAzNzUxIFMgU3RvbmVicmlkZ2UgRHIuPGJyLz5cbiAgICBNY2tpbm5leSwgVGV4YXMgNzUwNzA8YnIvPlxuICAgIFBob25lOjxici8+XG4gICAgOTcyLTU0Ny0xNjI4PGJyPlxuICAgIEVtYWlsOiB6ZW5zdXNoaWFuZGdyaWxsQGljbG91ZC5jb21gO1xuICAgIGNvbnRhY3RIb2xkZXIuaXRlbS5hcHBlbmRDaGlsZChjb250YWN0SW5mby5pdGVtKTtcblxuICAgIGxldCBvcGVuaW5nVGltZXMgPSBuZXcgRWxlbWVudCgnaDInLCAnb3BlbmluZ1RpbWUnKTtcbiAgICBvcGVuaW5nVGltZXMuaXRlbS5pbm5lckhUTUwgPSBcbiAgICBgSG91cnM6PGJyPlxuICAgIFR1ZXMgLSBTYXQ6IDExQU0gLSAxMFBNPGJyLz5cbiAgICBTdW4gJiBNb246IENsb3NlZDxici8+XG4gICAgRHJlc3MgQ29kZTogQ2FzdWFsPGJyLz5cbiAgICBGb3IgUmVzZXJ2YXRpb25zIGFuZCBwYXJ0aWVzIG9mIDcgb3IgbW9yZSw8YnIvPiBwbGVhc2UgY2FsbCA5NzItNTQ3LTE2MjhgO1xuICAgIGNvbnRhY3RIb2xkZXIuaXRlbS5hcHBlbmRDaGlsZChvcGVuaW5nVGltZXMuaXRlbSk7XG59O1xuXG5sZXQgbWFwO1xuXG5mdW5jdGlvbiBpbml0TWFwKCkge1xuICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKG1hcEhvbGRlci5pdGVtKTtcbiAgICBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFwXCIpLCB7XG4gICAgICAgIGNlbnRlcjoge2xhdDogMzMuMTY4MjcsIGxuZzogLTk2LjcyOTk5fSxcbiAgICAgICAgem9vbTogMTgsXG4gICAgfSk7XG4gICAgbGV0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICBwb3NpdGlvbjoge2xhdDogMzMuMTY4MjcsIGxuZzogLTk2LjcyOTk5fSxcbiAgICAgICAgbWFwOiBtYXAsXG4gICAgfSk7XG59O1xuXG5leHBvcnQge21ha2VDb250YWN0LCBpbml0TWFwfTsiLCJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSAnLi93ZWxjb21lcGFnZSdcblxuLy9Ib3VzZXMgY29weXJpZ2h0IGJhclxubGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3B5cmlnaHRIb2xkZXInKTtcblxuLy9HZW5lcmF0ZXMgY29tcGxldGUgY29weXJpZ2h0IGJhclxubGV0IG1ha2VDb3B5cmlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgY29weXJpZ2h0ID0gbmV3IEVsZW1lbnQoJ2RpdicsICdjb3B5cmlnaHQnKTtcbiAgICBjb3B5cmlnaHQuaXRlbS5jbGFzc05hbWUgPSAnY2xlYXJmaXgnO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb3B5cmlnaHQuaXRlbSk7XG5cbiAgICBsZXQgY29weXJpZ2h0VGV4dCA9IG5ldyBFbGVtZW50KCdkaXYnLCAnY29weXJpZ2h0VGV4dCcpO1xuICAgIGNvcHlyaWdodFRleHQuaXRlbS5pbm5lckhUTUwgPSAnQ09QWVJJR0hUIEpBTUVTIExPIDIwMjEnXG4gICAgY29weXJpZ2h0VGV4dC5pdGVtLmNsYXNzTmFtZXMgPSAndGV4dCBmbG9hdCBsZWZ0J1xuICAgIGNvcHlyaWdodC5pdGVtLmFwcGVuZENoaWxkKGNvcHlyaWdodFRleHQuaXRlbSk7XG5cbiAgICBsZXQgY29weXJpZ2h0TGlua3MgPSBuZXcgRWxlbWVudCgndWwnLCAnbGlua3MnKTtcbiAgICBjb3B5cmlnaHRMaW5rcy5pdGVtLmNsYXNzTmFtZSA9ICdsaW5rcyBmbG9hdCByaWdodCc7XG4gICAgY29weXJpZ2h0Lml0ZW0uYXBwZW5kQ2hpbGQoY29weXJpZ2h0TGlua3MuaXRlbSk7XG5cbiAgICBsZXQgZmFjZWJvb2tJY29uID0gbmV3IEVsZW1lbnQoJ2xpJyk7XG4gICAgbGV0IGZhY2Vib29rTGluayA9IG5ldyBFbGVtZW50KCdhJyk7XG4gICAgbGV0IGZhY2Vib29rRm9udCA9IG5ldyBFbGVtZW50KCdpJywgJ2ZhYiBmYS1mYWNlYm9vay1zcXVhcmUnKTtcbiAgICBmYWNlYm9va0xpbmsuaXRlbS5ocmVmID0gXG4gICAgJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9aZW5TdXNoaU1ja2lubmV5Lyc7XG4gICAgZmFjZWJvb2tMaW5rLml0ZW0udGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgZmFjZWJvb2tMaW5rLml0ZW0ucmVsID0gJ25vcmVmZXJyZXIgbm9vcGVuZXInO1xuXG4gICAgbGV0IG9yZGVySWNvbiA9IG5ldyBFbGVtZW50KCdsaScpO1xuICAgIGxldCBvcmRlckxpbmsgPSBuZXcgRWxlbWVudCgnYScpO1xuICAgIGxldCBvcmRlckZvbnQgPSBuZXcgRWxlbWVudCgnaScsICdmYXMgZmEtdXRlbnNpbHMnKTtcbiAgICBvcmRlckxpbmsuaXRlbS5ocmVmID0gJ2h0dHBzOi8vd3d3LnplbnN1c2hpYW5kZ3JpbGxtY2tpbm5leS5jb20vJztcbiAgICBvcmRlckxpbmsuaXRlbS50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBvcmRlckxpbmsuaXRlbS5yZWwgPSAnbm9yZWZlcnJlciBub29wZW5lcic7XG5cbiAgICBsZXQgZ2l0SWNvbiA9IG5ldyBFbGVtZW50KCdsaScpO1xuICAgIGxldCBnaXRMaW5rID0gbmV3IEVsZW1lbnQoJ2EnKTtcbiAgICBsZXQgZ2l0Rm9udCA9IG5ldyBFbGVtZW50KCdpJywgJ2ZhYiBmYS1naXRodWItc3F1YXJlJyk7XG4gICAgZ2l0TGluay5pdGVtLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL0phbWVzbG81OTknO1xuICAgIGdpdExpbmsuaXRlbS50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBnaXRMaW5rLml0ZW0ucmVsID0gJ25vcmVmZXJyZXIgbm9vcGVuZXInO1xuXG4gICAgZmFjZWJvb2tMaW5rLml0ZW0uYXBwZW5kQ2hpbGQoZmFjZWJvb2tGb250Lml0ZW0pO1xuICAgIGZhY2Vib29rSWNvbi5pdGVtLmFwcGVuZENoaWxkKGZhY2Vib29rTGluay5pdGVtKTtcbiAgICBjb3B5cmlnaHRMaW5rcy5pdGVtLmFwcGVuZENoaWxkKGZhY2Vib29rSWNvbi5pdGVtKTtcbiAgICBvcmRlckxpbmsuaXRlbS5hcHBlbmRDaGlsZChvcmRlckZvbnQuaXRlbSk7XG4gICAgb3JkZXJJY29uLml0ZW0uYXBwZW5kQ2hpbGQob3JkZXJMaW5rLml0ZW0pO1xuICAgIGNvcHlyaWdodExpbmtzLml0ZW0uYXBwZW5kQ2hpbGQob3JkZXJJY29uLml0ZW0pO1xuICAgIGdpdExpbmsuaXRlbS5hcHBlbmRDaGlsZChnaXRGb250Lml0ZW0pO1xuICAgIGdpdEljb24uaXRlbS5hcHBlbmRDaGlsZChnaXRMaW5rLml0ZW0pO1xuICAgIGNvcHlyaWdodExpbmtzLml0ZW0uYXBwZW5kQ2hpbGQoZ2l0SWNvbi5pdGVtKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VDb3B5cmlnaHQ7IiwiaW1wb3J0IHtjb250ZW50cywgRWxlbWVudH0gZnJvbSBcIi4vd2VsY29tZXBhZ2VcIjtcblxubGV0IG1ha2VNZW51ID0gZnVuY3Rpb24oKSB7XG4gICAgLy9Ib3VzZXMgbWVudSBpbWFnZXNcbiAgICBsZXQgbWVudUdhbGxlcnkgPSBuZXcgRWxlbWVudCgnZGl2JywgJ2dhbGxlcnknKTtcbiAgICBjb250ZW50cy5hcHBlbmRDaGlsZChtZW51R2FsbGVyeS5pdGVtKTtcblxuICAgIC8vQWxsb3cgaW1hZ2VzIHRvIGJlIHByZXNlbnRlZCBmdWxsIHNjcmVlbiB3aGVuIGNsaWNrZWRcbiAgICBsZXQgZGlzcGxheU1vZGFsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBzcmMgPSB0aGlzLmdldEF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbENvbnRhaW5lcicpO1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtzcmN9KWA7XG4gICAgICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvbnRhaW4nO1xuICAgICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gJ25vLXJlcGVhdCc7XG4gICAgICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICdjZW50ZXInO1xuICAgICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLDAsMCwwLjQpJztcbiAgICAgICAgY29udGVudHMuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICAgIFxuICAgIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbCkge1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLy9HZW5lcmF0ZXMgbWVudSBpbWFnZXNcbiAgICBsZXQgaW1hZ2U7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gODsgaSsrKSB7XG4gICAgICAgIGltYWdlID0gbmV3IEVsZW1lbnQoJ2ltZycsICdtZW51SW1hZ2UnKTtcbiAgICAgICAgaW1hZ2UuaXRlbS5zcmMgPSBgaW1hZ2VzL21lbnUke2l9LmpwZ2A7XG4gICAgICAgIGltYWdlLml0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5TW9kYWwpXG4gICAgICAgIG1lbnVHYWxsZXJ5Lml0ZW0uYXBwZW5kQ2hpbGQoaW1hZ2UuaXRlbSk7XG4gICAgICAgIH07XG4gICAgXG4gICAgbGV0IG1vZGFsQ29udGFpbmVyID0gbmV3IEVsZW1lbnQoJ2RpdicsICdtb2RhbENvbnRhaW5lcicpO1xuICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKG1vZGFsQ29udGFpbmVyLml0ZW0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFrZU1lbnU7IiwiaW1wb3J0IHtjb250ZW50cywgRWxlbWVudH0gZnJvbSBcIi4vd2VsY29tZXBhZ2VcIjtcblxuLy9HZW5lcmF0ZXMgZnVsbCBuYXZpZ2F0aW9uIGJhclxubGV0IG1ha2VOYXZCYXIgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgbmF2YmFyID0gbmV3IEVsZW1lbnQoJ3VsJywgJ25hdicpO1xuICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKG5hdmJhci5pdGVtKTtcblxuICAgIGxldCBuYXZiYXJUZXh0ID0gbmV3IEVsZW1lbnQoJ2RpdicsICd0aXRsZScpO1xuICAgIG5hdmJhclRleHQuaXRlbS5pbm5lckhUTUwgPSAnWmVuIFN1c2hpICYgR3JpbGwnXG4gICAgbmF2YmFyLml0ZW0uYXBwZW5kQ2hpbGQobmF2YmFyVGV4dC5pdGVtKTtcblxuICAgIGxldCBob21lQnV0dG9uID0gbmV3IEVsZW1lbnQoJ2xpJywgJ2hvbWUnKTtcbiAgICBsZXQgYUhvbWUgPSBuZXcgRWxlbWVudCgnYScpO1xuICAgIGFIb21lLml0ZW0uaW5uZXJIVE1MID0gJ0hvbWUnO1xuICAgIGFIb21lLml0ZW0uaHJlZiA9ICcjJztcbiAgICBob21lQnV0dG9uLml0ZW0uYXBwZW5kQ2hpbGQoYUhvbWUuaXRlbSk7XG4gICAgbmF2YmFyLml0ZW0uYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbi5pdGVtKTtcblxuICAgIGxldCBtZW51QnV0dG9uID0gbmV3IEVsZW1lbnQoJ2xpJywgJ21lbnUnKTtcbiAgICBsZXQgYU1lbnUgPSBuZXcgRWxlbWVudCgnYScpO1xuICAgIGFNZW51Lml0ZW0uaW5uZXJIVE1MID0gJ01lbnUnO1xuICAgIGFNZW51Lml0ZW0uaHJlZiA9ICcjJztcbiAgICBtZW51QnV0dG9uLml0ZW0uYXBwZW5kQ2hpbGQoYU1lbnUuaXRlbSk7XG4gICAgbmF2YmFyLml0ZW0uYXBwZW5kQ2hpbGQobWVudUJ1dHRvbi5pdGVtKTtcblxuICAgIGxldCBvcmRlckJ1dHRvbiA9IG5ldyBFbGVtZW50KCdsaScsICdvcmRlcicpO1xuICAgIGxldCBhbk9yZGVyID0gbmV3IEVsZW1lbnQoJ2EnKTtcbiAgICBhbk9yZGVyLml0ZW0uaW5uZXJIVE1MID0gJ09yZGVyIEhlcmUnO1xuICAgIGFuT3JkZXIuaXRlbS5ocmVmID0gJ2h0dHBzOi8vd3d3LnplbnN1c2hpYW5kZ3JpbGxtY2tpbm5leS5jb20vJztcbiAgICBhbk9yZGVyLml0ZW0udGFyZ2V0ID0gJ19ibGFuaydcbiAgICBhbk9yZGVyLml0ZW0ucmVsID0gJ25vcmVmZXJyZXIgbm9vcGVuZXInO1xuICAgIG9yZGVyQnV0dG9uLml0ZW0uYXBwZW5kQ2hpbGQoYW5PcmRlci5pdGVtKTtcbiAgICBuYXZiYXIuaXRlbS5hcHBlbmRDaGlsZChvcmRlckJ1dHRvbi5pdGVtKTtcblxuICAgIGxldCBjb250YWN0QnV0dG9uID0gbmV3IEVsZW1lbnQoJ2xpJywgJ2NvbnRhY3QnKTtcbiAgICBsZXQgYUNvbnRhY3QgPSBuZXcgRWxlbWVudCgnYScpO1xuICAgIGFDb250YWN0Lml0ZW0uaW5uZXJIVE1MID0gJ0NvbnRhY3QgVXMnO1xuICAgIGFDb250YWN0Lml0ZW0uaHJlZiA9ICcjJztcbiAgICBjb250YWN0QnV0dG9uLml0ZW0uYXBwZW5kQ2hpbGQoYUNvbnRhY3QuaXRlbSk7XG4gICAgbmF2YmFyLml0ZW0uYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbi5pdGVtKTtcbn07XG5cbi8vR2VuZXJhdGVzIExvZ29cbmxldCBtYWtlTG9nbyA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBsb2dvID0gIG5ldyBFbGVtZW50KCdpbWcnLCAnbG9nbycpO1xuICAgIGxldCBhTG9nbyA9IG5ldyBFbGVtZW50KCdhJyk7XG4gICAgYUxvZ28uaXRlbS5ocmVmID0gJyc7XG4gICAgYUxvZ28uaXRlbS5hcHBlbmRDaGlsZChsb2dvLml0ZW0pO1xuICAgIC8vbG9nby5jbGFzc05hbWUgPSAnbG9nbyc7XG4gICAgbG9nby5pdGVtLnNyYyA9ICdpbWFnZXMvRGFydW1hLnBuZyc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ29Ib2xkZXInKS5hcHBlbmRDaGlsZChhTG9nby5pdGVtKTtcbn07XG5cbmV4cG9ydCB7RWxlbWVudCwgbWFrZU5hdkJhciwgbWFrZUxvZ299OyIsImxldCBjb250ZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuLy8gQ29uc3RydWN0b3IgZm9yIGNyZWF0aW5nIERPTSBlbGVtZW50c1xuY29uc3QgRWxlbWVudCA9IGZ1bmN0aW9uKGl0ZW0sIGNsYXNzTmFtZSwgaWQpIHtcbiAgICB0aGlzLml0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0ZW0pO1xuICAgIHRoaXMuaXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3NOYW1lKTtcbiAgICB0aGlzLml0ZW0uc2V0QXR0cmlidXRlKCdpZCcsIGNsYXNzTmFtZSk7XG59O1xuXG4vL0dlbmVyYXRlcyByZXN0YXVyYW50IGJpb2dyYXBoeVxubGV0IG1ha2VCaW8gPSAoKSA9PiB7XG4gICAgbGV0IGJpb2dyYXBoeSA9IG5ldyBFbGVtZW50KCdoMicsICdiaW9ncmFwaHknKTtcbiAgICBiaW9ncmFwaHkuaXRlbS5pbm5lckhUTUwgPSBgV2Ugc3BlY2lhbGl6ZSBpbiBkZWxpY2lvdXMgSmFwYW5lc2UgY3Vpc2luZSBcbiAgICBmcm9tIGZyZXNoIHN1c2hpIHdpdGggYSB2YXJpZXR5IG9mIHNwZWNpYWwgZmlzaCwgXG4gICAgdG8gaGliYWNoaSBlbnRyZWVzIGdyaWxsZWQgdG8gcGVyZmVjdGlvbiBpbiB0aGUga2l0Y2hlbi4gPGJyLz48YnIvPlxuICAgIENoZWYtb3duZXIgSmFjayB3aXRoIG92ZXIgMjUgeWVhcnMgb2YgZXhwZXJpZW5jZSBhbmQgd2hvIHByZXZpb3VzbHkgb3duZWQgXG4gICAgXCJLaXJha3UgSmFwYW5lc2UgUmVzdGF1cmFudFwiIGluIEhvdXN0b24sIFRleGFzLiBcbiAgICBIZSB3b3JrcyBoYXJkIGV2ZXJ5IGRheSB0byBwcm92aWRlIGEgY3VzdG9taXplZCBleHBlcmllbmNlIGZvciBldmVyeSBjdXN0b21lciBcbiAgICBhbmQgdHJlYXRzIHRoZW0gbGlrZSBoaXMgb3duIGZhbWlseS4gXG4gICAgV2hlbiBoZSBpcyBub3Qgd29ya2luZywgSmFjayBlbmpveXMgd2F0Y2hpbmcgbW92aWVzLCBzaW5naW5nLCBcbiAgICBhbmQgc3BlbmRpbmcgdGltZSB3aXRoIGhpcyBmYW1pbHkuIDxici8+PGJyLz5cbiAgICBIZWFkIHN1c2hpLWNoZWYgS2l0YW11cmEtc2FuIHdobyB3YXMgcHJldmlvdXNseSBcbiAgICB0aGUgaGVhZCBjaGVmIG9mIEppbmJlaSBKYXBhbmVzZSBSZXN0YXVyYW50IFxuICAgIGFuZCBoYXMgb3ZlciA0MCB5ZWFycyBvZiBleHBlcmllbmNlIHdvcmtpbmcgaW4gSmFwYW4sIEhhd2FpaSBhbmQgTmV3IFlvcmsuIFxuICAgIEtpdGFtdXJhLXNhbiBmb2N1c2VzIGhlYXZpbHkgb24gZW5zdXJpbmcgdGhlIHF1YWxpdHkgXG4gICAgYW5kIHN0YW5kYXJkcyBvZiBvdXIgc3VzaGkgYXJlIG9mIHRoZSBoaWdoZXN0IG9yZGVyLiBcbiAgICBLaXRhbXVyYS1zYW4gZW5qb3lzIHBsYXlpbmcgd2l0aCBoaXMgY2F0cywgXG4gICAgY29va2luZyBhbmQgc3BlbmRpbmcgdGltZSB3aXRoIGhpcyBncmFuZGNoaWxkcmVuLmA7XG4gICAgY29udGVudHMuYXBwZW5kQ2hpbGQoYmlvZ3JhcGh5Lml0ZW0pO1xufTtcblxuLy9HZW5lcmF0ZXMgc2l4IGltYWdlcyBpbiBhIGdyaWQgdGhhdCBjYW4gYmUgc2V0IGZ1bGxzY3JlZW4gd2hlbiBjbGlja2VkXG5sZXQgbWFrZUltYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgLy9BbGxvdyBpbWFnZXMgdG8gYmUgcHJlc2VudGVkIGZ1bGwgc2NyZWVuIHdoZW4gY2xpY2tlZFxuICAgIGxldCBtb2RhbENvbnRhaW5lciA9IG5ldyBFbGVtZW50KCdkaXYnLCAnbW9kYWxDb250YWluZXInKTtcbiAgICBjb250ZW50cy5hcHBlbmRDaGlsZChtb2RhbENvbnRhaW5lci5pdGVtKTtcblxuICAgIGxldCBkaXNwbGF5TW9kYWwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHNyYyA9IHRoaXMuZ2V0QXR0cmlidXRlKCdzcmMnKTtcbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsQ29udGFpbmVyJyk7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke3NyY30pYDtcbiAgICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY29udGFpbic7XG4gICAgICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPSAnbm8tcmVwZWF0JztcbiAgICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gJ2NlbnRlcic7XG4gICAgICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDAsMCwwLDAuNCknO1xuICAgICAgICBjb250ZW50cy5hcHBlbmRDaGlsZChtb2RhbCk7XG4gICAgXG4gICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH07XG4gICAgLy9HZW5lcmF0ZXMgaW1hZ2VzXG4gICAgbGV0IGltYWdlQ29udGFpbmVyID0gbmV3IEVsZW1lbnQoJ2RpdicsICdpbWFnZUNvbnRhaW5lcicpO1xuICAgIGxldCBpbWFnZTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA2OyBpKyspIHtcbiAgICAgICAgaW1hZ2UgPSAgbmV3IEVsZW1lbnQoJ2ltZycsICdiYW5uZXJJbWFnZScpO1xuICAgICAgICBpbWFnZS5pdGVtLnNyYyA9IGBpbWFnZXMvU3VzaGlCb2F0JHtpfS5qcGdgO1xuICAgICAgICBpbWFnZS5pdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheU1vZGFsKTtcbiAgICAgICAgaW1hZ2VDb250YWluZXIuaXRlbS5hcHBlbmRDaGlsZChpbWFnZS5pdGVtKTtcbiAgICAgICAgfTtcbiAgICBjb250ZW50cy5hcHBlbmRDaGlsZChpbWFnZUNvbnRhaW5lci5pdGVtKTtcbn07XG5cbmV4cG9ydCB7Y29udGVudHMsIEVsZW1lbnQsIG1ha2VJbWFnZSwgbWFrZUJpb307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge21ha2VOYXZCYXIsIG1ha2VMb2dvfSBmcm9tICcuL25hdmJhci5qcyc7XG5pbXBvcnQge21ha2VJbWFnZSwgbWFrZUJpb30gZnJvbSAnLi93ZWxjb21lcGFnZS5qcyc7XG5pbXBvcnQgbWFrZU1lbnUgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBtYWtlQ29weXJpZ2h0IGZyb20gJy4vY29weXJpZ2h0YmFyLmpzJ1xuaW1wb3J0IHttYWtlQ29udGFjdCwgaW5pdE1hcH0gZnJvbSAnLi9jb250YWN0LmpzJ1xuXG5sZXQgZ2VuZXJhdGVQYWdlID0gKCkgPT4ge1xuICAgIG1ha2VOYXZCYXIoKTtcbiAgICBtYWtlTG9nbygpO1xuICAgIG1ha2VJbWFnZSgpO1xuICAgIG1ha2VCaW8oKTtcbiAgICBtYWtlQ29weXJpZ2h0KCk7XG4gICAgfTtcbmdlbmVyYXRlUGFnZSgpO1xuXG5sZXQgaG9tZVRhYiA9IDE7XG5sZXQgbWVudVRhYiA9IDA7XG5sZXQgY29udGFjdFRhYiA9IDA7XG5cbmxldCByZW1vdmVXZWxjb21lID0gKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5jb250YWlucyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmlvZ3JhcGh5JykpKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiaW9ncmFwaHknKS5yZW1vdmUoKTtcbiAgICB9O1xufTtcblxubGV0IHJlbW92ZU1lbnUgPSAoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LmNvbnRhaW5zKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYWxsZXJ5JykpKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYWxsZXJ5JykucmVtb3ZlKCk7XG4gICAgfTtcbn07XG5cbmxldCByZW1vdmVDb250YWN0ID0gKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5jb250YWlucyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdEhvbGRlcicpKSkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdEhvbGRlcicpLnJlbW92ZSgpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJykucmVtb3ZlKCk7XG4gICAgfTtcbn07XG5cblxubGV0IGdvSG9tZSA9ICgpID0+IHtcbiAgICBpZiAoaG9tZVRhYiA9PT0gMCkge1xuICAgICAgICBtYWtlQmlvKCk7XG4gICAgICAgIHJlbW92ZU1lbnUoKTtcbiAgICAgICAgcmVtb3ZlQ29udGFjdCgpO1xuICAgICAgICBob21lVGFiID0gMTtcbiAgICAgICAgbWVudVRhYiA9IDA7XG4gICAgICAgIGNvbnRhY3RUYWIgPSAwO1xuICAgIH07XG59O1xuXG5sZXQgZ29NZW51ID0gKCkgPT4ge1xuICAgIGlmIChtZW51VGFiID09PSAwKSB7XG4gICAgICAgIHJlbW92ZUNvbnRhY3QoKTtcbiAgICAgICAgcmVtb3ZlV2VsY29tZSgpO1xuICAgICAgICBtYWtlTWVudSgpO1xuICAgICAgICBob21lVGFiID0gMDtcbiAgICAgICAgbWVudVRhYiA9IDE7XG4gICAgICAgIGNvbnRhY3RUYWIgPSAwO1xuICAgIH07XG59O1xuXG5sZXQgZ29Db250YWN0ID0gKCkgPT4ge1xuICAgIGlmIChjb250YWN0VGFiID09PSAwKSB7XG4gICAgICAgIHJlbW92ZVdlbGNvbWUoKTtcbiAgICAgICAgcmVtb3ZlTWVudSgpO1xuICAgICAgICBtYWtlQ29udGFjdCgpO1xuICAgICAgICBpbml0TWFwKCk7XG4gICAgICAgIGNvbnRhY3RUYWIgPSAxO1xuICAgICAgICBtZW51VGFiID0gMDtcbiAgICAgICAgaG9tZVRhYiA9IDA7XG4gICAgfTtcbn07XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJylcbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdvSG9tZSwgZmFsc2UpO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKVxuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ29NZW51LCBmYWxzZSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpXG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnb0NvbnRhY3QsIGZhbHNlKTsiXSwic291cmNlUm9vdCI6IiJ9