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
/* harmony export */   "makeLogo": () => (/* binding */ makeLogo),
/* harmony export */   "makeHamburger": () => (/* binding */ makeHamburger)
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
    logo.item.src = 'images/Daruma.png';
    document.getElementById('logoHolder').appendChild(aLogo.item);
};

//Generates hamburger icon for mobile devices
let makeHamburger = function() {
    let hamburger =  new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('img', 'hamburger');
    let aHamburger = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('a');
    aHamburger.item.href = '';
    aHamburger.item.appendChild(hamburger.item);
    hamburger.item.src = 'images/hamburger-icon.png';
    document.getElementById('logoHolder').appendChild(aHamburger.item);
};



/***/ }),

/***/ "./src/overlay.js":
/*!************************!*\
  !*** ./src/overlay.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeOverlay": () => (/* binding */ makeOverlay),
/* harmony export */   "showOverlay": () => (/* binding */ showOverlay),
/* harmony export */   "hideOverlay": () => (/* binding */ hideOverlay)
/* harmony export */ });
/* harmony import */ var _welcomepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcomepage */ "./src/welcomepage.js");


//Generates menu overlay for mobile devices
let makeOverlay = function() {
    let overlay = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('div', 'overlay');
    _welcomepage__WEBPACK_IMPORTED_MODULE_0__.contents.appendChild(overlay.item);

    let close =  new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('img', 'close');
    let aClose = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('a');
    aClose.item.href = '';
    aClose.item.appendChild(close.item);
    close.item.src = 'images/close-icon.png';
    overlay.item.appendChild(aClose.item);

    let overlayList = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('ul', 'overlayList');
    overlay.item.appendChild(overlayList.item);

    let homeButton = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('li', 'home');
    let aHome = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('a');
    aHome.item.innerHTML = 'Home';
    aHome.item.href = '#';
    homeButton.item.appendChild(aHome.item);
    overlayList.item.appendChild(homeButton.item);

    let menuButton = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('li', 'menu');
    let aMenu = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('a');
    aMenu.item.innerHTML = 'Menu';
    aMenu.item.href = '#';
    menuButton.item.appendChild(aMenu.item);
    overlayList.item.appendChild(menuButton.item);

    let orderButton = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('li', 'order');
    let anOrder = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('a');
    anOrder.item.innerHTML = 'Order Here';
    anOrder.item.href = 'https://www.zensushiandgrillmckinney.com/';
    anOrder.item.target = '_blank'
    anOrder.item.rel = 'noreferrer noopener';
    orderButton.item.appendChild(anOrder.item);
    overlayList.item.appendChild(orderButton.item);

    let contactButton = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('li', 'contact');
    let aContact = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('a');
    aContact.item.innerHTML = 'Contact Us';
    aContact.item.href = '#';
    contactButton.item.appendChild(aContact.item);
    overlayList.item.appendChild(contactButton.item);
};

//shows overlay on click
let showOverlay = () => {
    document.getElementById('hamburger').addEventListener('click', (event) => {
        event.preventDefault();
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('overlay').style.animation = 'fadeIn 1s';
    })
}

//Hides overlay on click
let hideOverlay = () => {
    document.getElementById('close').addEventListener('click', (event) => {
        event.preventDefault();
        setTimeout(function() {
            document.getElementById('overlay').style.display = 'none';  
        }, 500);
        document.getElementById('overlay').style.animation = 'fadeOut 0.5s';
    })
}



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
const Element = function(item, className) {
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
/* harmony import */ var _overlay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overlay.js */ "./src/overlay.js");
/* harmony import */ var _welcomepage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcomepage.js */ "./src/welcomepage.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _copyrightbar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./copyrightbar.js */ "./src/copyrightbar.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");







let generatePage = () => {
    (0,_overlay_js__WEBPACK_IMPORTED_MODULE_1__.makeOverlay)();
    (0,_navbar_js__WEBPACK_IMPORTED_MODULE_0__.makeNavBar)();
    (0,_navbar_js__WEBPACK_IMPORTED_MODULE_0__.makeLogo)();
    (0,_navbar_js__WEBPACK_IMPORTED_MODULE_0__.makeHamburger)();
    (0,_welcomepage_js__WEBPACK_IMPORTED_MODULE_2__.makeImage)();
    (0,_welcomepage_js__WEBPACK_IMPORTED_MODULE_2__.makeBio)();
    (0,_copyrightbar_js__WEBPACK_IMPORTED_MODULE_4__.default)();
    (0,_overlay_js__WEBPACK_IMPORTED_MODULE_1__.showOverlay)();
    (0,_overlay_js__WEBPACK_IMPORTED_MODULE_1__.hideOverlay)();
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
        (0,_welcomepage_js__WEBPACK_IMPORTED_MODULE_2__.makeBio)();
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
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.default)();
        homeTab = 0;
        menuTab = 1;
        contactTab = 0;
    };
};

let goContact = () => {
    if (contactTab === 0) {
        removeWelcome();
        removeMenu();
        (0,_contact_js__WEBPACK_IMPORTED_MODULE_5__.makeContact)();
        (0,_contact_js__WEBPACK_IMPORTED_MODULE_5__.initMap)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29weXJpZ2h0YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL292ZXJsYXkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3dlbGNvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEOztBQUVoRDtBQUNBLG9CQUFvQixpREFBTzs7QUFFM0I7QUFDQTtBQUNBLDRCQUE0QixpREFBTztBQUNuQyxJQUFJLDhEQUFvQjs7QUFFeEIsMEJBQTBCLGlEQUFPO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLGlEQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLDhEQUFvQjtBQUN4QjtBQUNBLGlCQUFpQiw4QkFBOEI7QUFDL0M7QUFDQSxLQUFL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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxRQUFRLHdEQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFRO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFXO0FBQ25CLFFBQVEsb0RBQU87QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb250ZW50cywgRWxlbWVudH0gZnJvbSBcIi4vd2VsY29tZXBhZ2VcIjtcblxuLy9Ib3VzZXMgR29vZ2xlIE1hcHNcbmxldCBtYXBIb2xkZXIgPSBuZXcgRWxlbWVudCgnZGl2JywgJ21hcCcpO1xuXG4vL0dlbmVyYXRlcyBjb250YWN0IGluZm9ybWF0aW9uXG5sZXQgbWFrZUNvbnRhY3QgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgY29udGFjdEhvbGRlciA9IG5ldyBFbGVtZW50KCdkaXYnLCAnY29udGFjdEhvbGRlcicpO1xuICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKGNvbnRhY3RIb2xkZXIuaXRlbSk7XG5cbiAgICBsZXQgY29udGFjdEluZm8gPSBuZXcgRWxlbWVudCgnaDInLCAnY29udGFjdEluZm8nKTtcbiAgICBjb250YWN0SW5mby5pdGVtLmlubmVySFRNTCA9IFxuICAgIGBBZGRyZXNzOjxicj5cbiAgICAzNzUxIFMgU3RvbmVicmlkZ2UgRHIuPGJyLz5cbiAgICBNY2tpbm5leSwgVGV4YXMgNzUwNzA8YnIvPlxuICAgIFBob25lOjxici8+XG4gICAgOTcyLTU0Ny0xNjI4PGJyPlxuICAgIEVtYWlsOiB6ZW5zdXNoaWFuZGdyaWxsQGljbG91ZC5jb21gO1xuICAgIGNvbnRhY3RIb2xkZXIuaXRlbS5hcHBlbmRDaGlsZChjb250YWN0SW5mby5pdGVtKTtcblxuICAgIGxldCBvcGVuaW5nVGltZXMgPSBuZXcgRWxlbWVudCgnaDInLCAnb3BlbmluZ1RpbWUnKTtcbiAgICBvcGVuaW5nVGltZXMuaXRlbS5pbm5lckhUTUwgPSBcbiAgICBgSG91cnM6PGJyPlxuICAgIFR1ZXMgLSBTYXQ6IDExQU0gLSAxMFBNPGJyLz5cbiAgICBTdW4gJiBNb246IENsb3NlZDxici8+XG4gICAgRHJlc3MgQ29kZTogQ2FzdWFsPGJyLz5cbiAgICBGb3IgUmVzZXJ2YXRpb25zIGFuZCBwYXJ0aWVzIG9mIDcgb3IgbW9yZSw8YnIvPiBwbGVhc2UgY2FsbCA5NzItNTQ3LTE2MjhgO1xuICAgIGNvbnRhY3RIb2xkZXIuaXRlbS5hcHBlbmRDaGlsZChvcGVuaW5nVGltZXMuaXRlbSk7XG59O1xuXG5sZXQgbWFwO1xuXG5mdW5jdGlvbiBpbml0TWFwKCkge1xuICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKG1hcEhvbGRlci5pdGVtKTtcbiAgICBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFwXCIpLCB7XG4gICAgICAgIGNlbnRlcjoge2xhdDogMzMuMTY4MjcsIGxuZzogLTk2LjcyOTk5fSxcbiAgICAgICAgem9vbTogMTgsXG4gICAgfSk7XG4gICAgbGV0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICBwb3NpdGlvbjoge2xhdDogMzMuMTY4MjcsIGxuZzogLTk2LjcyOTk5fSxcbiAgICAgICAgbWFwOiBtYXAsXG4gICAgfSk7XG59O1xuXG5leHBvcnQge21ha2VDb250YWN0LCBpbml0TWFwfTsiLCJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSAnLi93ZWxjb21lcGFnZSdcblxuLy9Ib3VzZXMgY29weXJpZ2h0IGJhclxubGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3B5cmlnaHRIb2xkZXInKTtcblxuLy9HZW5lcmF0ZXMgY29tcGxldGUgY29weXJpZ2h0IGJhclxubGV0IG1ha2VDb3B5cmlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgY29weXJpZ2h0ID0gbmV3IEVsZW1lbnQoJ2RpdicsICdjb3B5cmlnaHQnKTtcbiAgICBjb3B5cmlnaHQuaXRlbS5jbGFzc05hbWUgPSAnY2xlYXJmaXgnO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb3B5cmlnaHQuaXRlbSk7XG5cbiAgICBsZXQgY29weXJpZ2h0VGV4dCA9IG5ldyBFbGVtZW50KCdkaXYnLCAnY29weXJpZ2h0VGV4dCcpO1xuICAgIGNvcHlyaWdodFRleHQuaXRlbS5pbm5lckhUTUwgPSAnQ09QWVJJR0hUIEpBTUVTIExPIDIwMjEnXG4gICAgY29weXJpZ2h0VGV4dC5pdGVtLmNsYXNzTmFtZXMgPSAndGV4dCBmbG9hdCBsZWZ0J1xuICAgIGNvcHlyaWdodC5pdGVtLmFwcGVuZENoaWxkKGNvcHlyaWdodFRleHQuaXRlbSk7XG5cbiAgICBsZXQgY29weXJpZ2h0TGlua3MgPSBuZXcgRWxlbWVudCgndWwnLCAnbGlua3MnKTtcbiAgICBjb3B5cmlnaHRMaW5rcy5pdGVtLmNsYXNzTmFtZSA9ICdsaW5rcyBmbG9hdCByaWdodCc7XG4gICAgY29weXJpZ2h0Lml0ZW0uYXBwZW5kQ2hpbGQoY29weXJpZ2h0TGlua3MuaXRlbSk7XG5cbiAgICBsZXQgZmFjZWJvb2tJY29uID0gbmV3IEVsZW1lbnQoJ2xpJyk7XG4gICAgbGV0IGZhY2Vib29rTGluayA9IG5ldyBFbGVtZW50KCdhJyk7XG4gICAgbGV0IGZhY2Vib29rRm9udCA9IG5ldyBFbGVtZW50KCdpJywgJ2ZhYiBmYS1mYWNlYm9vay1zcXVhcmUnKTtcbiAgICBmYWNlYm9va0xpbmsuaXRlbS5ocmVmID0gXG4gICAgJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9aZW5TdXNoaU1ja2lubmV5Lyc7XG4gICAgZmFjZWJvb2tMaW5rLml0ZW0udGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgZmFjZWJvb2tMaW5rLml0ZW0ucmVsID0gJ25vcmVmZXJyZXIgbm9vcGVuZXInO1xuXG4gICAgbGV0IG9yZGVySWNvbiA9IG5ldyBFbGVtZW50KCdsaScpO1xuICAgIGxldCBvcmRlckxpbmsgPSBuZXcgRWxlbWVudCgnYScpO1xuICAgIGxldCBvcmRlckZvbnQgPSBuZXcgRWxlbWVudCgnaScsICdmYXMgZmEtdXRlbnNpbHMnKTtcbiAgICBvcmRlckxpbmsuaXRlbS5ocmVmID0gJ2h0dHBzOi8vd3d3LnplbnN1c2hpYW5kZ3JpbGxtY2tpbm5leS5jb20vJztcbiAgICBvcmRlckxpbmsuaXRlbS50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBvcmRlckxpbmsuaXRlbS5yZWwgPSAnbm9yZWZlcnJlciBub29wZW5lcic7XG5cbiAgICBsZXQgZ2l0SWNvbiA9IG5ldyBFbGVtZW50KCdsaScpO1xuICAgIGxldCBnaXRMaW5rID0gbmV3IEVsZW1lbnQoJ2EnKTtcbiAgICBsZXQgZ2l0Rm9udCA9IG5ldyBFbGVtZW50KCdpJywgJ2ZhYiBmYS1naXRodWItc3F1YXJlJyk7XG4gICAgZ2l0TGluay5pdGVtLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL0phbWVzbG81OTknO1xuICAgIGdpdExpbmsuaXRlbS50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBnaXRMaW5rLml0ZW0ucmVsID0gJ25vcmVmZXJyZXIgbm9vcGVuZXInO1xuXG4gICAgZmFjZWJvb2tMaW5rLml0ZW0uYXBwZW5kQ2hpbGQoZmFjZWJvb2tGb250Lml0ZW0pO1xuICAgIGZhY2Vib29rSWNvbi5pdGVtLmFwcGVuZENoaWxkKGZhY2Vib29rTGluay5pdGVtKTtcbiAgICBjb3B5cmlnaHRMaW5rcy5pdGVtLmFwcGVuZENoaWxkKGZhY2Vib29rSWNvbi5pdGVtKTtcbiAgICBvcmRlckxpbmsuaXRlbS5hcHBlbmRDaGlsZChvcmRlckZvbnQuaXRlbSk7XG4gICAgb3JkZXJJY29uLml0ZW0uYXBwZW5kQ2hpbGQob3JkZXJMaW5rLml0ZW0pO1xuICAgIGNvcHlyaWdodExpbmtzLml0ZW0uYXBwZW5kQ2hpbGQob3JkZXJJY29uLml0ZW0pO1xuICAgIGdpdExpbmsuaXRlbS5hcHBlbmRDaGlsZChnaXRGb250Lml0ZW0pO1xuICAgIGdpdEljb24uaXRlbS5hcHBlbmRDaGlsZChnaXRMaW5rLml0ZW0pO1xuICAgIGNvcHlyaWdodExpbmtzLml0ZW0uYXBwZW5kQ2hpbGQoZ2l0SWNvbi5pdGVtKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VDb3B5cmlnaHQ7IiwiaW1wb3J0IHtjb250ZW50cywgRWxlbWVudH0gZnJvbSBcIi4vd2VsY29tZXBhZ2VcIjtcblxubGV0IG1ha2VNZW51ID0gZnVuY3Rpb24oKSB7XG4gICAgLy9Ib3VzZXMgbWVudSBpbWFnZXNcbiAgICBsZXQgbWVudUdhbGxlcnkgPSBuZXcgRWxlbWVudCgnZGl2JywgJ2dhbGxlcnknKTtcbiAgICBjb250ZW50cy5hcHBlbmRDaGlsZChtZW51R2FsbGVyeS5pdGVtKTtcblxuICAgIC8vQWxsb3cgaW1hZ2VzIHRvIGJlIHByZXNlbnRlZCBmdWxsIHNjcmVlbiB3aGVuIGNsaWNrZWRcbiAgICBsZXQgZGlzcGxheU1vZGFsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBzcmMgPSB0aGlzLmdldEF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbENvbnRhaW5lcicpO1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtzcmN9KWA7XG4gICAgICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvbnRhaW4nO1xuICAgICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gJ25vLXJlcGVhdCc7XG4gICAgICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICdjZW50ZXInO1xuICAgICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLDAsMCwwLjQpJztcbiAgICAgICAgY29udGVudHMuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICAgIFxuICAgIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbCkge1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLy9HZW5lcmF0ZXMgbWVudSBpbWFnZXNcbiAgICBsZXQgaW1hZ2U7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gODsgaSsrKSB7XG4gICAgICAgIGltYWdlID0gbmV3IEVsZW1lbnQoJ2ltZycsICdtZW51SW1hZ2UnKTtcbiAgICAgICAgaW1hZ2UuaXRlbS5zcmMgPSBgaW1hZ2VzL21lbnUke2l9LmpwZ2A7XG4gICAgICAgIGltYWdlLml0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5TW9kYWwpXG4gICAgICAgIG1lbnVHYWxsZXJ5Lml0ZW0uYXBwZW5kQ2hpbGQoaW1hZ2UuaXRlbSk7XG4gICAgICAgIH07XG4gICAgXG4gICAgbGV0IG1vZGFsQ29udGFpbmVyID0gbmV3IEVsZW1lbnQoJ2RpdicsICdtb2RhbENvbnRhaW5lcicpO1xuICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKG1vZGFsQ29udGFpbmVyLml0ZW0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFrZU1lbnU7IiwiaW1wb3J0IHtjb250ZW50cywgRWxlbWVudH0gZnJvbSBcIi4vd2VsY29tZXBhZ2VcIjtcblxuLy9HZW5lcmF0ZXMgZnVsbCBuYXZpZ2F0aW9uIGJhclxubGV0IG1ha2VOYXZCYXIgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgbmF2YmFyID0gbmV3IEVsZW1lbnQoJ3VsJywgJ25hdicpO1xuICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKG5hdmJhci5pdGVtKTtcblxuICAgIGxldCBuYXZiYXJUZXh0ID0gbmV3IEVsZW1lbnQoJ2RpdicsICd0aXRsZScpO1xuICAgIG5hdmJhclRleHQuaXRlbS5pbm5lckhUTUwgPSAnWmVuIFN1c2hpICYgR3JpbGwnXG4gICAgbmF2YmFyLml0ZW0uYXBwZW5kQ2hpbGQobmF2YmFyVGV4dC5pdGVtKTtcblxuICAgIGxldCBob21lQnV0dG9uID0gbmV3IEVsZW1lbnQoJ2xpJywgJ2hvbWUnKTtcbiAgICBsZXQgYUhvbWUgPSBuZXcgRWxlbWVudCgnYScpO1xuICAgIGFIb21lLml0ZW0uaW5uZXJIVE1MID0gJ0hvbWUnO1xuICAgIGFIb21lLml0ZW0uaHJlZiA9ICcjJztcbiAgICBob21lQnV0dG9uLml0ZW0uYXBwZW5kQ2hpbGQoYUhvbWUuaXRlbSk7XG4gICAgbmF2YmFyLml0ZW0uYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbi5pdGVtKTtcblxuICAgIGxldCBtZW51QnV0dG9uID0gbmV3IEVsZW1lbnQoJ2xpJywgJ21lbnUnKTtcbiAgICBsZXQgYU1lbnUgPSBuZXcgRWxlbWVudCgnYScpO1xuICAgIGFNZW51Lml0ZW0uaW5uZXJIVE1MID0gJ01lbnUnO1xuICAgIGFNZW51Lml0ZW0uaHJlZiA9ICcjJztcbiAgICBtZW51QnV0dG9uLml0ZW0uYXBwZW5kQ2hpbGQoYU1lbnUuaXRlbSk7XG4gICAgbmF2YmFyLml0ZW0uYXBwZW5kQ2hpbGQobWVudUJ1dHRvbi5pdGVtKTtcblxuICAgIGxldCBvcmRlckJ1dHRvbiA9IG5ldyBFbGVtZW50KCdsaScsICdvcmRlcicpO1xuICAgIGxldCBhbk9yZGVyID0gbmV3IEVsZW1lbnQoJ2EnKTtcbiAgICBhbk9yZGVyLml0ZW0uaW5uZXJIVE1MID0gJ09yZGVyIEhlcmUnO1xuICAgIGFuT3JkZXIuaXRlbS5ocmVmID0gJ2h0dHBzOi8vd3d3LnplbnN1c2hpYW5kZ3JpbGxtY2tpbm5leS5jb20vJztcbiAgICBhbk9yZGVyLml0ZW0udGFyZ2V0ID0gJ19ibGFuaydcbiAgICBhbk9yZGVyLml0ZW0ucmVsID0gJ25vcmVmZXJyZXIgbm9vcGVuZXInO1xuICAgIG9yZGVyQnV0dG9uLml0ZW0uYXBwZW5kQ2hpbGQoYW5PcmRlci5pdGVtKTtcbiAgICBuYXZiYXIuaXRlbS5hcHBlbmRDaGlsZChvcmRlckJ1dHRvbi5pdGVtKTtcblxuICAgIGxldCBjb250YWN0QnV0dG9uID0gbmV3IEVsZW1lbnQoJ2xpJywgJ2NvbnRhY3QnKTtcbiAgICBsZXQgYUNvbnRhY3QgPSBuZXcgRWxlbWVudCgnYScpO1xuICAgIGFDb250YWN0Lml0ZW0uaW5uZXJIVE1MID0gJ0NvbnRhY3QgVXMnO1xuICAgIGFDb250YWN0Lml0ZW0uaHJlZiA9ICcjJztcbiAgICBjb250YWN0QnV0dG9uLml0ZW0uYXBwZW5kQ2hpbGQoYUNvbnRhY3QuaXRlbSk7XG4gICAgbmF2YmFyLml0ZW0uYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbi5pdGVtKTtcbn07XG5cbi8vR2VuZXJhdGVzIExvZ29cbmxldCBtYWtlTG9nbyA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBsb2dvID0gIG5ldyBFbGVtZW50KCdpbWcnLCAnbG9nbycpO1xuICAgIGxldCBhTG9nbyA9IG5ldyBFbGVtZW50KCdhJyk7XG4gICAgYUxvZ28uaXRlbS5ocmVmID0gJyc7XG4gICAgYUxvZ28uaXRlbS5hcHBlbmRDaGlsZChsb2dvLml0ZW0pO1xuICAgIGxvZ28uaXRlbS5zcmMgPSAnaW1hZ2VzL0RhcnVtYS5wbmcnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvSG9sZGVyJykuYXBwZW5kQ2hpbGQoYUxvZ28uaXRlbSk7XG59O1xuXG4vL0dlbmVyYXRlcyBoYW1idXJnZXIgaWNvbiBmb3IgbW9iaWxlIGRldmljZXNcbmxldCBtYWtlSGFtYnVyZ2VyID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGhhbWJ1cmdlciA9ICBuZXcgRWxlbWVudCgnaW1nJywgJ2hhbWJ1cmdlcicpO1xuICAgIGxldCBhSGFtYnVyZ2VyID0gbmV3IEVsZW1lbnQoJ2EnKTtcbiAgICBhSGFtYnVyZ2VyLml0ZW0uaHJlZiA9ICcnO1xuICAgIGFIYW1idXJnZXIuaXRlbS5hcHBlbmRDaGlsZChoYW1idXJnZXIuaXRlbSk7XG4gICAgaGFtYnVyZ2VyLml0ZW0uc3JjID0gJ2ltYWdlcy9oYW1idXJnZXItaWNvbi5wbmcnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvSG9sZGVyJykuYXBwZW5kQ2hpbGQoYUhhbWJ1cmdlci5pdGVtKTtcbn07XG5cbmV4cG9ydCB7RWxlbWVudCwgbWFrZU5hdkJhciwgbWFrZUxvZ28sIG1ha2VIYW1idXJnZXJ9OyIsImltcG9ydCB7IEVsZW1lbnQsIGNvbnRlbnRzIH0gZnJvbSAnLi93ZWxjb21lcGFnZSdcblxuLy9HZW5lcmF0ZXMgbWVudSBvdmVybGF5IGZvciBtb2JpbGUgZGV2aWNlc1xubGV0IG1ha2VPdmVybGF5ID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IG92ZXJsYXkgPSBuZXcgRWxlbWVudCgnZGl2JywgJ292ZXJsYXknKTtcbiAgICBjb250ZW50cy5hcHBlbmRDaGlsZChvdmVybGF5Lml0ZW0pO1xuXG4gICAgbGV0IGNsb3NlID0gIG5ldyBFbGVtZW50KCdpbWcnLCAnY2xvc2UnKTtcbiAgICBsZXQgYUNsb3NlID0gbmV3IEVsZW1lbnQoJ2EnKTtcbiAgICBhQ2xvc2UuaXRlbS5ocmVmID0gJyc7XG4gICAgYUNsb3NlLml0ZW0uYXBwZW5kQ2hpbGQoY2xvc2UuaXRlbSk7XG4gICAgY2xvc2UuaXRlbS5zcmMgPSAnaW1hZ2VzL2Nsb3NlLWljb24ucG5nJztcbiAgICBvdmVybGF5Lml0ZW0uYXBwZW5kQ2hpbGQoYUNsb3NlLml0ZW0pO1xuXG4gICAgbGV0IG92ZXJsYXlMaXN0ID0gbmV3IEVsZW1lbnQoJ3VsJywgJ292ZXJsYXlMaXN0Jyk7XG4gICAgb3ZlcmxheS5pdGVtLmFwcGVuZENoaWxkKG92ZXJsYXlMaXN0Lml0ZW0pO1xuXG4gICAgbGV0IGhvbWVCdXR0b24gPSBuZXcgRWxlbWVudCgnbGknLCAnaG9tZScpO1xuICAgIGxldCBhSG9tZSA9IG5ldyBFbGVtZW50KCdhJyk7XG4gICAgYUhvbWUuaXRlbS5pbm5lckhUTUwgPSAnSG9tZSc7XG4gICAgYUhvbWUuaXRlbS5ocmVmID0gJyMnO1xuICAgIGhvbWVCdXR0b24uaXRlbS5hcHBlbmRDaGlsZChhSG9tZS5pdGVtKTtcbiAgICBvdmVybGF5TGlzdC5pdGVtLmFwcGVuZENoaWxkKGhvbWVCdXR0b24uaXRlbSk7XG5cbiAgICBsZXQgbWVudUJ1dHRvbiA9IG5ldyBFbGVtZW50KCdsaScsICdtZW51Jyk7XG4gICAgbGV0IGFNZW51ID0gbmV3IEVsZW1lbnQoJ2EnKTtcbiAgICBhTWVudS5pdGVtLmlubmVySFRNTCA9ICdNZW51JztcbiAgICBhTWVudS5pdGVtLmhyZWYgPSAnIyc7XG4gICAgbWVudUJ1dHRvbi5pdGVtLmFwcGVuZENoaWxkKGFNZW51Lml0ZW0pO1xuICAgIG92ZXJsYXlMaXN0Lml0ZW0uYXBwZW5kQ2hpbGQobWVudUJ1dHRvbi5pdGVtKTtcblxuICAgIGxldCBvcmRlckJ1dHRvbiA9IG5ldyBFbGVtZW50KCdsaScsICdvcmRlcicpO1xuICAgIGxldCBhbk9yZGVyID0gbmV3IEVsZW1lbnQoJ2EnKTtcbiAgICBhbk9yZGVyLml0ZW0uaW5uZXJIVE1MID0gJ09yZGVyIEhlcmUnO1xuICAgIGFuT3JkZXIuaXRlbS5ocmVmID0gJ2h0dHBzOi8vd3d3LnplbnN1c2hpYW5kZ3JpbGxtY2tpbm5leS5jb20vJztcbiAgICBhbk9yZGVyLml0ZW0udGFyZ2V0ID0gJ19ibGFuaydcbiAgICBhbk9yZGVyLml0ZW0ucmVsID0gJ25vcmVmZXJyZXIgbm9vcGVuZXInO1xuICAgIG9yZGVyQnV0dG9uLml0ZW0uYXBwZW5kQ2hpbGQoYW5PcmRlci5pdGVtKTtcbiAgICBvdmVybGF5TGlzdC5pdGVtLmFwcGVuZENoaWxkKG9yZGVyQnV0dG9uLml0ZW0pO1xuXG4gICAgbGV0IGNvbnRhY3RCdXR0b24gPSBuZXcgRWxlbWVudCgnbGknLCAnY29udGFjdCcpO1xuICAgIGxldCBhQ29udGFjdCA9IG5ldyBFbGVtZW50KCdhJyk7XG4gICAgYUNvbnRhY3QuaXRlbS5pbm5lckhUTUwgPSAnQ29udGFjdCBVcyc7XG4gICAgYUNvbnRhY3QuaXRlbS5ocmVmID0gJyMnO1xuICAgIGNvbnRhY3RCdXR0b24uaXRlbS5hcHBlbmRDaGlsZChhQ29udGFjdC5pdGVtKTtcbiAgICBvdmVybGF5TGlzdC5pdGVtLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24uaXRlbSk7XG59O1xuXG4vL3Nob3dzIG92ZXJsYXkgb24gY2xpY2tcbmxldCBzaG93T3ZlcmxheSA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGFtYnVyZ2VyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKS5zdHlsZS5hbmltYXRpb24gPSAnZmFkZUluIDFzJztcbiAgICB9KVxufVxuXG4vL0hpZGVzIG92ZXJsYXkgb24gY2xpY2tcbmxldCBoaWRlT3ZlcmxheSA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAgXG4gICAgICAgIH0sIDUwMCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5Jykuc3R5bGUuYW5pbWF0aW9uID0gJ2ZhZGVPdXQgMC41cyc7XG4gICAgfSlcbn1cblxuZXhwb3J0IHttYWtlT3ZlcmxheSwgc2hvd092ZXJsYXksIGhpZGVPdmVybGF5fSIsImxldCBjb250ZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuLy8gQ29uc3RydWN0b3IgZm9yIGNyZWF0aW5nIERPTSBlbGVtZW50c1xuY29uc3QgRWxlbWVudCA9IGZ1bmN0aW9uKGl0ZW0sIGNsYXNzTmFtZSkge1xuICAgIHRoaXMuaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXRlbSk7XG4gICAgdGhpcy5pdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc05hbWUpO1xuICAgIHRoaXMuaXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywgY2xhc3NOYW1lKTtcbn07XG5cbi8vR2VuZXJhdGVzIHJlc3RhdXJhbnQgYmlvZ3JhcGh5XG5sZXQgbWFrZUJpbyA9ICgpID0+IHtcbiAgICBsZXQgYmlvZ3JhcGh5ID0gbmV3IEVsZW1lbnQoJ2gyJywgJ2Jpb2dyYXBoeScpO1xuICAgIGJpb2dyYXBoeS5pdGVtLmlubmVySFRNTCA9IGBXZSBzcGVjaWFsaXplIGluIGRlbGljaW91cyBKYXBhbmVzZSBjdWlzaW5lIFxuICAgIGZyb20gZnJlc2ggc3VzaGkgd2l0aCBhIHZhcmlldHkgb2Ygc3BlY2lhbCBmaXNoLCBcbiAgICB0byBoaWJhY2hpIGVudHJlZXMgZ3JpbGxlZCB0byBwZXJmZWN0aW9uIGluIHRoZSBraXRjaGVuLiA8YnIvPjxici8+XG4gICAgQ2hlZi1vd25lciBKYWNrIHdpdGggb3ZlciAyNSB5ZWFycyBvZiBleHBlcmllbmNlIGFuZCB3aG8gcHJldmlvdXNseSBvd25lZCBcbiAgICBcIktpcmFrdSBKYXBhbmVzZSBSZXN0YXVyYW50XCIgaW4gSG91c3RvbiwgVGV4YXMuIFxuICAgIEhlIHdvcmtzIGhhcmQgZXZlcnkgZGF5IHRvIHByb3ZpZGUgYSBjdXN0b21pemVkIGV4cGVyaWVuY2UgZm9yIGV2ZXJ5IGN1c3RvbWVyIFxuICAgIGFuZCB0cmVhdHMgdGhlbSBsaWtlIGhpcyBvd24gZmFtaWx5LiBcbiAgICBXaGVuIGhlIGlzIG5vdCB3b3JraW5nLCBKYWNrIGVuam95cyB3YXRjaGluZyBtb3ZpZXMsIHNpbmdpbmcsIFxuICAgIGFuZCBzcGVuZGluZyB0aW1lIHdpdGggaGlzIGZhbWlseS4gPGJyLz48YnIvPlxuICAgIEhlYWQgc3VzaGktY2hlZiBLaXRhbXVyYS1zYW4gd2hvIHdhcyBwcmV2aW91c2x5IFxuICAgIHRoZSBoZWFkIGNoZWYgb2YgSmluYmVpIEphcGFuZXNlIFJlc3RhdXJhbnQgXG4gICAgYW5kIGhhcyBvdmVyIDQwIHllYXJzIG9mIGV4cGVyaWVuY2Ugd29ya2luZyBpbiBKYXBhbiwgSGF3YWlpIGFuZCBOZXcgWW9yay4gXG4gICAgS2l0YW11cmEtc2FuIGZvY3VzZXMgaGVhdmlseSBvbiBlbnN1cmluZyB0aGUgcXVhbGl0eSBcbiAgICBhbmQgc3RhbmRhcmRzIG9mIG91ciBzdXNoaSBhcmUgb2YgdGhlIGhpZ2hlc3Qgb3JkZXIuIFxuICAgIEtpdGFtdXJhLXNhbiBlbmpveXMgcGxheWluZyB3aXRoIGhpcyBjYXRzLCBcbiAgICBjb29raW5nIGFuZCBzcGVuZGluZyB0aW1lIHdpdGggaGlzIGdyYW5kY2hpbGRyZW4uYDtcbiAgICBjb250ZW50cy5hcHBlbmRDaGlsZChiaW9ncmFwaHkuaXRlbSk7XG59O1xuXG4vL0dlbmVyYXRlcyBzaXggaW1hZ2VzIGluIGEgZ3JpZCB0aGF0IGNhbiBiZSBzZXQgZnVsbHNjcmVlbiB3aGVuIGNsaWNrZWRcbmxldCBtYWtlSW1hZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAvL0FsbG93IGltYWdlcyB0byBiZSBwcmVzZW50ZWQgZnVsbCBzY3JlZW4gd2hlbiBjbGlja2VkXG4gICAgbGV0IG1vZGFsQ29udGFpbmVyID0gbmV3IEVsZW1lbnQoJ2RpdicsICdtb2RhbENvbnRhaW5lcicpO1xuICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKG1vZGFsQ29udGFpbmVyLml0ZW0pO1xuXG4gICAgbGV0IGRpc3BsYXlNb2RhbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgc3JjID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxDb250YWluZXInKTtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7c3JjfSlgO1xuICAgICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb250YWluJztcbiAgICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9ICduby1yZXBlYXQnO1xuICAgICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnY2VudGVyJztcbiAgICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMCwwLDAsMC40KSc7XG4gICAgICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgICBcbiAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvL0dlbmVyYXRlcyBpbWFnZXNcbiAgICBsZXQgaW1hZ2VDb250YWluZXIgPSBuZXcgRWxlbWVudCgnZGl2JywgJ2ltYWdlQ29udGFpbmVyJyk7XG4gICAgbGV0IGltYWdlO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDY7IGkrKykge1xuICAgICAgICBpbWFnZSA9ICBuZXcgRWxlbWVudCgnaW1nJywgJ2Jhbm5lckltYWdlJyk7XG4gICAgICAgIGltYWdlLml0ZW0uc3JjID0gYGltYWdlcy9TdXNoaUJvYXQke2l9LmpwZ2A7XG4gICAgICAgIGltYWdlLml0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5TW9kYWwpO1xuICAgICAgICBpbWFnZUNvbnRhaW5lci5pdGVtLmFwcGVuZENoaWxkKGltYWdlLml0ZW0pO1xuICAgICAgICB9O1xuICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKGltYWdlQ29udGFpbmVyLml0ZW0pO1xufTtcblxuZXhwb3J0IHtjb250ZW50cywgRWxlbWVudCwgbWFrZUltYWdlLCBtYWtlQmlvfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7bWFrZU5hdkJhciwgbWFrZUxvZ28sIG1ha2VIYW1idXJnZXJ9IGZyb20gJy4vbmF2YmFyLmpzJztcbmltcG9ydCB7aGlkZU92ZXJsYXksIG1ha2VPdmVybGF5LCBzaG93T3ZlcmxheX0gZnJvbSAnLi9vdmVybGF5LmpzJ1xuaW1wb3J0IHttYWtlSW1hZ2UsIG1ha2VCaW99IGZyb20gJy4vd2VsY29tZXBhZ2UuanMnO1xuaW1wb3J0IG1ha2VNZW51IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgbWFrZUNvcHlyaWdodCBmcm9tICcuL2NvcHlyaWdodGJhci5qcydcbmltcG9ydCB7bWFrZUNvbnRhY3QsIGluaXRNYXB9IGZyb20gJy4vY29udGFjdC5qcydcblxubGV0IGdlbmVyYXRlUGFnZSA9ICgpID0+IHtcbiAgICBtYWtlT3ZlcmxheSgpO1xuICAgIG1ha2VOYXZCYXIoKTtcbiAgICBtYWtlTG9nbygpO1xuICAgIG1ha2VIYW1idXJnZXIoKTtcbiAgICBtYWtlSW1hZ2UoKTtcbiAgICBtYWtlQmlvKCk7XG4gICAgbWFrZUNvcHlyaWdodCgpO1xuICAgIHNob3dPdmVybGF5KCk7XG4gICAgaGlkZU92ZXJsYXkoKTtcbiAgICB9O1xuZ2VuZXJhdGVQYWdlKCk7XG5cbmxldCBob21lVGFiID0gMTtcbmxldCBtZW51VGFiID0gMDtcbmxldCBjb250YWN0VGFiID0gMDtcblxubGV0IHJlbW92ZVdlbGNvbWUgPSAoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LmNvbnRhaW5zKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiaW9ncmFwaHknKSkpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jpb2dyYXBoeScpLnJlbW92ZSgpO1xuICAgIH07XG59O1xuXG5sZXQgcmVtb3ZlTWVudSA9ICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQuY29udGFpbnMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbGxlcnknKSkpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbGxlcnknKS5yZW1vdmUoKTtcbiAgICB9O1xufTtcblxubGV0IHJlbW92ZUNvbnRhY3QgPSAoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LmNvbnRhaW5zKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0SG9sZGVyJykpKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0SG9sZGVyJykucmVtb3ZlKCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKS5yZW1vdmUoKTtcbiAgICB9O1xufTtcblxuXG5sZXQgZ29Ib21lID0gKCkgPT4ge1xuICAgIGlmIChob21lVGFiID09PSAwKSB7XG4gICAgICAgIG1ha2VCaW8oKTtcbiAgICAgICAgcmVtb3ZlTWVudSgpO1xuICAgICAgICByZW1vdmVDb250YWN0KCk7XG4gICAgICAgIGhvbWVUYWIgPSAxO1xuICAgICAgICBtZW51VGFiID0gMDtcbiAgICAgICAgY29udGFjdFRhYiA9IDA7XG4gICAgfTtcbn07XG5cbmxldCBnb01lbnUgPSAoKSA9PiB7XG4gICAgaWYgKG1lbnVUYWIgPT09IDApIHtcbiAgICAgICAgcmVtb3ZlQ29udGFjdCgpO1xuICAgICAgICByZW1vdmVXZWxjb21lKCk7XG4gICAgICAgIG1ha2VNZW51KCk7XG4gICAgICAgIGhvbWVUYWIgPSAwO1xuICAgICAgICBtZW51VGFiID0gMTtcbiAgICAgICAgY29udGFjdFRhYiA9IDA7XG4gICAgfTtcbn07XG5cbmxldCBnb0NvbnRhY3QgPSAoKSA9PiB7XG4gICAgaWYgKGNvbnRhY3RUYWIgPT09IDApIHtcbiAgICAgICAgcmVtb3ZlV2VsY29tZSgpO1xuICAgICAgICByZW1vdmVNZW51KCk7XG4gICAgICAgIG1ha2VDb250YWN0KCk7XG4gICAgICAgIGluaXRNYXAoKTtcbiAgICAgICAgY29udGFjdFRhYiA9IDE7XG4gICAgICAgIG1lbnVUYWIgPSAwO1xuICAgICAgICBob21lVGFiID0gMDtcbiAgICB9O1xufTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKVxuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ29Ib21lLCBmYWxzZSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpXG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnb01lbnUsIGZhbHNlKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0Jylcbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdvQ29udGFjdCwgZmFsc2UpOyJdLCJzb3VyY2VSb290IjoiIn0=