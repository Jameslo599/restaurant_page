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

    let homeButton = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('li', 'mobileHome');
    let aHome = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('a');
    aHome.item.innerHTML = 'Home';
    aHome.item.href = '#';
    homeButton.item.appendChild(aHome.item);
    overlayList.item.appendChild(homeButton.item);

    let menuButton = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('li', 'mobileMenu');
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

    let contactButton = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element('li', 'mobileContact');
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

document.getElementById('mobileHome')
.addEventListener('click', goHome, false);
document.getElementById('mobileMenu')
.addEventListener('click', goMenu, false);
document.getElementById('mobileContact')
.addEventListener('click', goContact, false);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29weXJpZ2h0YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL292ZXJsYXkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3dlbGNvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEOztBQUVoRDtBQUNBLG9CQUFvQixpREFBTzs7QUFFM0I7QUFDQTtBQUNBLDRCQUE0QixpREFBTztBQUNuQyxJQUFJLDhEQUFvQjs7QUFFeEIsMEJBQTBCLGlEQUFPO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLGlEQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLDhEQUFvQjtBQUN4QjtBQUNBLGlCQUFpQiw4QkFBOEI7QUFDL0M7QUFDQSxLQUFL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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxRQUFRLHdEQUFPO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFRO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFXO0FBQ25CLFFBQVEsb0RBQU87QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29udGVudHMsIEVsZW1lbnR9IGZyb20gXCIuL3dlbGNvbWVwYWdlXCI7XG5cbi8vSG91c2VzIEdvb2dsZSBNYXBzXG5sZXQgbWFwSG9sZGVyID0gbmV3IEVsZW1lbnQoJ2RpdicsICdtYXAnKTtcblxuLy9HZW5lcmF0ZXMgY29udGFjdCBpbmZvcm1hdGlvblxubGV0IG1ha2VDb250YWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGNvbnRhY3RIb2xkZXIgPSBuZXcgRWxlbWVudCgnZGl2JywgJ2NvbnRhY3RIb2xkZXInKTtcbiAgICBjb250ZW50cy5hcHBlbmRDaGlsZChjb250YWN0SG9sZGVyLml0ZW0pO1xuXG4gICAgbGV0IGNvbnRhY3RJbmZvID0gbmV3IEVsZW1lbnQoJ2gyJywgJ2NvbnRhY3RJbmZvJyk7XG4gICAgY29udGFjdEluZm8uaXRlbS5pbm5lckhUTUwgPSBcbiAgICBgQWRkcmVzczo8YnI+XG4gICAgMzc1MSBTIFN0b25lYnJpZGdlIERyLjxici8+XG4gICAgTWNraW5uZXksIFRleGFzIDc1MDcwPGJyLz5cbiAgICBQaG9uZTo8YnIvPlxuICAgIDk3Mi01NDctMTYyODxicj5cbiAgICBFbWFpbDogemVuc3VzaGlhbmRncmlsbEBpY2xvdWQuY29tYDtcbiAgICBjb250YWN0SG9sZGVyLml0ZW0uYXBwZW5kQ2hpbGQoY29udGFjdEluZm8uaXRlbSk7XG5cbiAgICBsZXQgb3BlbmluZ1RpbWVzID0gbmV3IEVsZW1lbnQoJ2gyJywgJ29wZW5pbmdUaW1lJyk7XG4gICAgb3BlbmluZ1RpbWVzLml0ZW0uaW5uZXJIVE1MID0gXG4gICAgYEhvdXJzOjxicj5cbiAgICBUdWVzIC0gU2F0OiAxMUFNIC0gMTBQTTxici8+XG4gICAgU3VuICYgTW9uOiBDbG9zZWQ8YnIvPlxuICAgIERyZXNzIENvZGU6IENhc3VhbDxici8+XG4gICAgRm9yIFJlc2VydmF0aW9ucyBhbmQgcGFydGllcyBvZiA3IG9yIG1vcmUsPGJyLz4gcGxlYXNlIGNhbGwgOTcyLTU0Ny0xNjI4YDtcbiAgICBjb250YWN0SG9sZGVyLml0ZW0uYXBwZW5kQ2hpbGQob3BlbmluZ1RpbWVzLml0ZW0pO1xufTtcblxubGV0IG1hcDtcblxuZnVuY3Rpb24gaW5pdE1hcCgpIHtcbiAgICBjb250ZW50cy5hcHBlbmRDaGlsZChtYXBIb2xkZXIuaXRlbSk7XG4gICAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFwiKSwge1xuICAgICAgICBjZW50ZXI6IHtsYXQ6IDMzLjE2ODI3LCBsbmc6IC05Ni43Mjk5OX0sXG4gICAgICAgIHpvb206IDE4LFxuICAgIH0pO1xuICAgIGxldCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgcG9zaXRpb246IHtsYXQ6IDMzLjE2ODI3LCBsbmc6IC05Ni43Mjk5OX0sXG4gICAgICAgIG1hcDogbWFwLFxuICAgIH0pO1xufTtcblxuZXhwb3J0IHttYWtlQ29udGFjdCwgaW5pdE1hcH07IiwiaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gJy4vd2VsY29tZXBhZ2UnXG5cbi8vSG91c2VzIGNvcHlyaWdodCBiYXJcbmxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29weXJpZ2h0SG9sZGVyJyk7XG5cbi8vR2VuZXJhdGVzIGNvbXBsZXRlIGNvcHlyaWdodCBiYXJcbmxldCBtYWtlQ29weXJpZ2h0ID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGNvcHlyaWdodCA9IG5ldyBFbGVtZW50KCdkaXYnLCAnY29weXJpZ2h0Jyk7XG4gICAgY29weXJpZ2h0Lml0ZW0uY2xhc3NOYW1lID0gJ2NsZWFyZml4JztcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0Lml0ZW0pO1xuXG4gICAgbGV0IGNvcHlyaWdodFRleHQgPSBuZXcgRWxlbWVudCgnZGl2JywgJ2NvcHlyaWdodFRleHQnKTtcbiAgICBjb3B5cmlnaHRUZXh0Lml0ZW0uaW5uZXJIVE1MID0gJ0NPUFlSSUdIVCBKQU1FUyBMTyAyMDIxJ1xuICAgIGNvcHlyaWdodFRleHQuaXRlbS5jbGFzc05hbWVzID0gJ3RleHQgZmxvYXQgbGVmdCdcbiAgICBjb3B5cmlnaHQuaXRlbS5hcHBlbmRDaGlsZChjb3B5cmlnaHRUZXh0Lml0ZW0pO1xuXG4gICAgbGV0IGNvcHlyaWdodExpbmtzID0gbmV3IEVsZW1lbnQoJ3VsJywgJ2xpbmtzJyk7XG4gICAgY29weXJpZ2h0TGlua3MuaXRlbS5jbGFzc05hbWUgPSAnbGlua3MgZmxvYXQgcmlnaHQnO1xuICAgIGNvcHlyaWdodC5pdGVtLmFwcGVuZENoaWxkKGNvcHlyaWdodExpbmtzLml0ZW0pO1xuXG4gICAgbGV0IGZhY2Vib29rSWNvbiA9IG5ldyBFbGVtZW50KCdsaScpO1xuICAgIGxldCBmYWNlYm9va0xpbmsgPSBuZXcgRWxlbWVudCgnYScpO1xuICAgIGxldCBmYWNlYm9va0ZvbnQgPSBuZXcgRWxlbWVudCgnaScsICdmYWIgZmEtZmFjZWJvb2stc3F1YXJlJyk7XG4gICAgZmFjZWJvb2tMaW5rLml0ZW0uaHJlZiA9IFxuICAgICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vWmVuU3VzaGlNY2tpbm5leS8nO1xuICAgIGZhY2Vib29rTGluay5pdGVtLnRhcmdldCA9ICdfYmxhbmsnO1xuICAgIGZhY2Vib29rTGluay5pdGVtLnJlbCA9ICdub3JlZmVycmVyIG5vb3BlbmVyJztcblxuICAgIGxldCBvcmRlckljb24gPSBuZXcgRWxlbWVudCgnbGknKTtcbiAgICBsZXQgb3JkZXJMaW5rID0gbmV3IEVsZW1lbnQoJ2EnKTtcbiAgICBsZXQgb3JkZXJGb250ID0gbmV3IEVsZW1lbnQoJ2knLCAnZmFzIGZhLXV0ZW5zaWxzJyk7XG4gICAgb3JkZXJMaW5rLml0ZW0uaHJlZiA9ICdodHRwczovL3d3dy56ZW5zdXNoaWFuZGdyaWxsbWNraW5uZXkuY29tLyc7XG4gICAgb3JkZXJMaW5rLml0ZW0udGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgb3JkZXJMaW5rLml0ZW0ucmVsID0gJ25vcmVmZXJyZXIgbm9vcGVuZXInO1xuXG4gICAgbGV0IGdpdEljb24gPSBuZXcgRWxlbWVudCgnbGknKTtcbiAgICBsZXQgZ2l0TGluayA9IG5ldyBFbGVtZW50KCdhJyk7XG4gICAgbGV0IGdpdEZvbnQgPSBuZXcgRWxlbWVudCgnaScsICdmYWIgZmEtZ2l0aHViLXNxdWFyZScpO1xuICAgIGdpdExpbmsuaXRlbS5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9KYW1lc2xvNTk5JztcbiAgICBnaXRMaW5rLml0ZW0udGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgZ2l0TGluay5pdGVtLnJlbCA9ICdub3JlZmVycmVyIG5vb3BlbmVyJztcblxuICAgIGZhY2Vib29rTGluay5pdGVtLmFwcGVuZENoaWxkKGZhY2Vib29rRm9udC5pdGVtKTtcbiAgICBmYWNlYm9va0ljb24uaXRlbS5hcHBlbmRDaGlsZChmYWNlYm9va0xpbmsuaXRlbSk7XG4gICAgY29weXJpZ2h0TGlua3MuaXRlbS5hcHBlbmRDaGlsZChmYWNlYm9va0ljb24uaXRlbSk7XG4gICAgb3JkZXJMaW5rLml0ZW0uYXBwZW5kQ2hpbGQob3JkZXJGb250Lml0ZW0pO1xuICAgIG9yZGVySWNvbi5pdGVtLmFwcGVuZENoaWxkKG9yZGVyTGluay5pdGVtKTtcbiAgICBjb3B5cmlnaHRMaW5rcy5pdGVtLmFwcGVuZENoaWxkKG9yZGVySWNvbi5pdGVtKTtcbiAgICBnaXRMaW5rLml0ZW0uYXBwZW5kQ2hpbGQoZ2l0Rm9udC5pdGVtKTtcbiAgICBnaXRJY29uLml0ZW0uYXBwZW5kQ2hpbGQoZ2l0TGluay5pdGVtKTtcbiAgICBjb3B5cmlnaHRMaW5rcy5pdGVtLmFwcGVuZENoaWxkKGdpdEljb24uaXRlbSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYWtlQ29weXJpZ2h0OyIsImltcG9ydCB7Y29udGVudHMsIEVsZW1lbnR9IGZyb20gXCIuL3dlbGNvbWVwYWdlXCI7XG5cbmxldCBtYWtlTWVudSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vSG91c2VzIG1lbnUgaW1hZ2VzXG4gICAgbGV0IG1lbnVHYWxsZXJ5ID0gbmV3IEVsZW1lbnQoJ2RpdicsICdnYWxsZXJ5Jyk7XG4gICAgY29udGVudHMuYXBwZW5kQ2hpbGQobWVudUdhbGxlcnkuaXRlbSk7XG5cbiAgICAvL0FsbG93IGltYWdlcyB0byBiZSBwcmVzZW50ZWQgZnVsbCBzY3JlZW4gd2hlbiBjbGlja2VkXG4gICAgbGV0IGRpc3BsYXlNb2RhbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgc3JjID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxDb250YWluZXInKTtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7c3JjfSlgO1xuICAgICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb250YWluJztcbiAgICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9ICduby1yZXBlYXQnO1xuICAgICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnY2VudGVyJztcbiAgICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMCwwLDAsMC40KSc7XG4gICAgICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgICBcbiAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8vR2VuZXJhdGVzIG1lbnUgaW1hZ2VzXG4gICAgbGV0IGltYWdlO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDg7IGkrKykge1xuICAgICAgICBpbWFnZSA9IG5ldyBFbGVtZW50KCdpbWcnLCAnbWVudUltYWdlJyk7XG4gICAgICAgIGltYWdlLml0ZW0uc3JjID0gYGltYWdlcy9tZW51JHtpfS5qcGdgO1xuICAgICAgICBpbWFnZS5pdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheU1vZGFsKVxuICAgICAgICBtZW51R2FsbGVyeS5pdGVtLmFwcGVuZENoaWxkKGltYWdlLml0ZW0pO1xuICAgICAgICB9O1xuICAgIFxuICAgIGxldCBtb2RhbENvbnRhaW5lciA9IG5ldyBFbGVtZW50KCdkaXYnLCAnbW9kYWxDb250YWluZXInKTtcbiAgICBjb250ZW50cy5hcHBlbmRDaGlsZChtb2RhbENvbnRhaW5lci5pdGVtKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VNZW51OyIsImltcG9ydCB7Y29udGVudHMsIEVsZW1lbnR9IGZyb20gXCIuL3dlbGNvbWVwYWdlXCI7XG5cbi8vR2VuZXJhdGVzIGZ1bGwgbmF2aWdhdGlvbiBiYXJcbmxldCBtYWtlTmF2QmFyID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IG5hdmJhciA9IG5ldyBFbGVtZW50KCd1bCcsICduYXYnKTtcbiAgICBjb250ZW50cy5hcHBlbmRDaGlsZChuYXZiYXIuaXRlbSk7XG5cbiAgICBsZXQgbmF2YmFyVGV4dCA9IG5ldyBFbGVtZW50KCdkaXYnLCAndGl0bGUnKTtcbiAgICBuYXZiYXJUZXh0Lml0ZW0uaW5uZXJIVE1MID0gJ1plbiBTdXNoaSAmIEdyaWxsJ1xuICAgIG5hdmJhci5pdGVtLmFwcGVuZENoaWxkKG5hdmJhclRleHQuaXRlbSk7XG5cbiAgICBsZXQgaG9tZUJ1dHRvbiA9IG5ldyBFbGVtZW50KCdsaScsICdob21lJyk7XG4gICAgbGV0IGFIb21lID0gbmV3IEVsZW1lbnQoJ2EnKTtcbiAgICBhSG9tZS5pdGVtLmlubmVySFRNTCA9ICdIb21lJztcbiAgICBhSG9tZS5pdGVtLmhyZWYgPSAnIyc7XG4gICAgaG9tZUJ1dHRvbi5pdGVtLmFwcGVuZENoaWxkKGFIb21lLml0ZW0pO1xuICAgIG5hdmJhci5pdGVtLmFwcGVuZENoaWxkKGhvbWVCdXR0b24uaXRlbSk7XG5cbiAgICBsZXQgbWVudUJ1dHRvbiA9IG5ldyBFbGVtZW50KCdsaScsICdtZW51Jyk7XG4gICAgbGV0IGFNZW51ID0gbmV3IEVsZW1lbnQoJ2EnKTtcbiAgICBhTWVudS5pdGVtLmlubmVySFRNTCA9ICdNZW51JztcbiAgICBhTWVudS5pdGVtLmhyZWYgPSAnIyc7XG4gICAgbWVudUJ1dHRvbi5pdGVtLmFwcGVuZENoaWxkKGFNZW51Lml0ZW0pO1xuICAgIG5hdmJhci5pdGVtLmFwcGVuZENoaWxkKG1lbnVCdXR0b24uaXRlbSk7XG5cbiAgICBsZXQgb3JkZXJCdXR0b24gPSBuZXcgRWxlbWVudCgnbGknLCAnb3JkZXInKTtcbiAgICBsZXQgYW5PcmRlciA9IG5ldyBFbGVtZW50KCdhJyk7XG4gICAgYW5PcmRlci5pdGVtLmlubmVySFRNTCA9ICdPcmRlciBIZXJlJztcbiAgICBhbk9yZGVyLml0ZW0uaHJlZiA9ICdodHRwczovL3d3dy56ZW5zdXNoaWFuZGdyaWxsbWNraW5uZXkuY29tLyc7XG4gICAgYW5PcmRlci5pdGVtLnRhcmdldCA9ICdfYmxhbmsnXG4gICAgYW5PcmRlci5pdGVtLnJlbCA9ICdub3JlZmVycmVyIG5vb3BlbmVyJztcbiAgICBvcmRlckJ1dHRvbi5pdGVtLmFwcGVuZENoaWxkKGFuT3JkZXIuaXRlbSk7XG4gICAgbmF2YmFyLml0ZW0uYXBwZW5kQ2hpbGQob3JkZXJCdXR0b24uaXRlbSk7XG5cbiAgICBsZXQgY29udGFjdEJ1dHRvbiA9IG5ldyBFbGVtZW50KCdsaScsICdjb250YWN0Jyk7XG4gICAgbGV0IGFDb250YWN0ID0gbmV3IEVsZW1lbnQoJ2EnKTtcbiAgICBhQ29udGFjdC5pdGVtLmlubmVySFRNTCA9ICdDb250YWN0IFVzJztcbiAgICBhQ29udGFjdC5pdGVtLmhyZWYgPSAnIyc7XG4gICAgY29udGFjdEJ1dHRvbi5pdGVtLmFwcGVuZENoaWxkKGFDb250YWN0Lml0ZW0pO1xuICAgIG5hdmJhci5pdGVtLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24uaXRlbSk7XG59O1xuXG4vL0dlbmVyYXRlcyBMb2dvXG5sZXQgbWFrZUxvZ28gPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgbG9nbyA9ICBuZXcgRWxlbWVudCgnaW1nJywgJ2xvZ28nKTtcbiAgICBsZXQgYUxvZ28gPSBuZXcgRWxlbWVudCgnYScpO1xuICAgIGFMb2dvLml0ZW0uaHJlZiA9ICcnO1xuICAgIGFMb2dvLml0ZW0uYXBwZW5kQ2hpbGQobG9nby5pdGVtKTtcbiAgICBsb2dvLml0ZW0uc3JjID0gJ2ltYWdlcy9EYXJ1bWEucG5nJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nb0hvbGRlcicpLmFwcGVuZENoaWxkKGFMb2dvLml0ZW0pO1xufTtcblxuLy9HZW5lcmF0ZXMgaGFtYnVyZ2VyIGljb24gZm9yIG1vYmlsZSBkZXZpY2VzXG5sZXQgbWFrZUhhbWJ1cmdlciA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBoYW1idXJnZXIgPSAgbmV3IEVsZW1lbnQoJ2ltZycsICdoYW1idXJnZXInKTtcbiAgICBsZXQgYUhhbWJ1cmdlciA9IG5ldyBFbGVtZW50KCdhJyk7XG4gICAgYUhhbWJ1cmdlci5pdGVtLmhyZWYgPSAnJztcbiAgICBhSGFtYnVyZ2VyLml0ZW0uYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyLml0ZW0pO1xuICAgIGhhbWJ1cmdlci5pdGVtLnNyYyA9ICdpbWFnZXMvaGFtYnVyZ2VyLWljb24ucG5nJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nb0hvbGRlcicpLmFwcGVuZENoaWxkKGFIYW1idXJnZXIuaXRlbSk7XG59O1xuXG5leHBvcnQge0VsZW1lbnQsIG1ha2VOYXZCYXIsIG1ha2VMb2dvLCBtYWtlSGFtYnVyZ2VyfTsiLCJpbXBvcnQgeyBFbGVtZW50LCBjb250ZW50cyB9IGZyb20gJy4vd2VsY29tZXBhZ2UnXG5cbi8vR2VuZXJhdGVzIG1lbnUgb3ZlcmxheSBmb3IgbW9iaWxlIGRldmljZXNcbmxldCBtYWtlT3ZlcmxheSA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBvdmVybGF5ID0gbmV3IEVsZW1lbnQoJ2RpdicsICdvdmVybGF5Jyk7XG4gICAgY29udGVudHMuYXBwZW5kQ2hpbGQob3ZlcmxheS5pdGVtKTtcblxuICAgIGxldCBjbG9zZSA9ICBuZXcgRWxlbWVudCgnaW1nJywgJ2Nsb3NlJyk7XG4gICAgbGV0IGFDbG9zZSA9IG5ldyBFbGVtZW50KCdhJyk7XG4gICAgYUNsb3NlLml0ZW0uaHJlZiA9ICcnO1xuICAgIGFDbG9zZS5pdGVtLmFwcGVuZENoaWxkKGNsb3NlLml0ZW0pO1xuICAgIGNsb3NlLml0ZW0uc3JjID0gJ2ltYWdlcy9jbG9zZS1pY29uLnBuZyc7XG4gICAgb3ZlcmxheS5pdGVtLmFwcGVuZENoaWxkKGFDbG9zZS5pdGVtKTtcblxuICAgIGxldCBvdmVybGF5TGlzdCA9IG5ldyBFbGVtZW50KCd1bCcsICdvdmVybGF5TGlzdCcpO1xuICAgIG92ZXJsYXkuaXRlbS5hcHBlbmRDaGlsZChvdmVybGF5TGlzdC5pdGVtKTtcblxuICAgIGxldCBob21lQnV0dG9uID0gbmV3IEVsZW1lbnQoJ2xpJywgJ21vYmlsZUhvbWUnKTtcbiAgICBsZXQgYUhvbWUgPSBuZXcgRWxlbWVudCgnYScpO1xuICAgIGFIb21lLml0ZW0uaW5uZXJIVE1MID0gJ0hvbWUnO1xuICAgIGFIb21lLml0ZW0uaHJlZiA9ICcjJztcbiAgICBob21lQnV0dG9uLml0ZW0uYXBwZW5kQ2hpbGQoYUhvbWUuaXRlbSk7XG4gICAgb3ZlcmxheUxpc3QuaXRlbS5hcHBlbmRDaGlsZChob21lQnV0dG9uLml0ZW0pO1xuXG4gICAgbGV0IG1lbnVCdXR0b24gPSBuZXcgRWxlbWVudCgnbGknLCAnbW9iaWxlTWVudScpO1xuICAgIGxldCBhTWVudSA9IG5ldyBFbGVtZW50KCdhJyk7XG4gICAgYU1lbnUuaXRlbS5pbm5lckhUTUwgPSAnTWVudSc7XG4gICAgYU1lbnUuaXRlbS5ocmVmID0gJyMnO1xuICAgIG1lbnVCdXR0b24uaXRlbS5hcHBlbmRDaGlsZChhTWVudS5pdGVtKTtcbiAgICBvdmVybGF5TGlzdC5pdGVtLmFwcGVuZENoaWxkKG1lbnVCdXR0b24uaXRlbSk7XG5cbiAgICBsZXQgb3JkZXJCdXR0b24gPSBuZXcgRWxlbWVudCgnbGknLCAnb3JkZXInKTtcbiAgICBsZXQgYW5PcmRlciA9IG5ldyBFbGVtZW50KCdhJyk7XG4gICAgYW5PcmRlci5pdGVtLmlubmVySFRNTCA9ICdPcmRlciBIZXJlJztcbiAgICBhbk9yZGVyLml0ZW0uaHJlZiA9ICdodHRwczovL3d3dy56ZW5zdXNoaWFuZGdyaWxsbWNraW5uZXkuY29tLyc7XG4gICAgYW5PcmRlci5pdGVtLnRhcmdldCA9ICdfYmxhbmsnXG4gICAgYW5PcmRlci5pdGVtLnJlbCA9ICdub3JlZmVycmVyIG5vb3BlbmVyJztcbiAgICBvcmRlckJ1dHRvbi5pdGVtLmFwcGVuZENoaWxkKGFuT3JkZXIuaXRlbSk7XG4gICAgb3ZlcmxheUxpc3QuaXRlbS5hcHBlbmRDaGlsZChvcmRlckJ1dHRvbi5pdGVtKTtcblxuICAgIGxldCBjb250YWN0QnV0dG9uID0gbmV3IEVsZW1lbnQoJ2xpJywgJ21vYmlsZUNvbnRhY3QnKTtcbiAgICBsZXQgYUNvbnRhY3QgPSBuZXcgRWxlbWVudCgnYScpO1xuICAgIGFDb250YWN0Lml0ZW0uaW5uZXJIVE1MID0gJ0NvbnRhY3QgVXMnO1xuICAgIGFDb250YWN0Lml0ZW0uaHJlZiA9ICcjJztcbiAgICBjb250YWN0QnV0dG9uLml0ZW0uYXBwZW5kQ2hpbGQoYUNvbnRhY3QuaXRlbSk7XG4gICAgb3ZlcmxheUxpc3QuaXRlbS5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uLml0ZW0pO1xufTtcblxuLy9zaG93cyBvdmVybGF5IG9uIGNsaWNrXG5sZXQgc2hvd092ZXJsYXkgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhbWJ1cmdlcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5Jykuc3R5bGUuYW5pbWF0aW9uID0gJ2ZhZGVJbiAxcyc7XG4gICAgfSlcbn1cblxuLy9IaWRlcyBvdmVybGF5IG9uIGNsaWNrXG5sZXQgaGlkZU92ZXJsYXkgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgIFxuICAgICAgICB9LCA1MDApO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpLnN0eWxlLmFuaW1hdGlvbiA9ICdmYWRlT3V0IDAuNXMnO1xuICAgIH0pXG59XG5cbmV4cG9ydCB7bWFrZU92ZXJsYXksIHNob3dPdmVybGF5LCBoaWRlT3ZlcmxheX0iLCJsZXQgY29udGVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbi8vIENvbnN0cnVjdG9yIGZvciBjcmVhdGluZyBET00gZWxlbWVudHNcbmNvbnN0IEVsZW1lbnQgPSBmdW5jdGlvbihpdGVtLCBjbGFzc05hbWUpIHtcbiAgICB0aGlzLml0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0ZW0pO1xuICAgIHRoaXMuaXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3NOYW1lKTtcbiAgICB0aGlzLml0ZW0uc2V0QXR0cmlidXRlKCdpZCcsIGNsYXNzTmFtZSk7XG59O1xuXG4vL0dlbmVyYXRlcyByZXN0YXVyYW50IGJpb2dyYXBoeVxubGV0IG1ha2VCaW8gPSAoKSA9PiB7XG4gICAgbGV0IGJpb2dyYXBoeSA9IG5ldyBFbGVtZW50KCdoMicsICdiaW9ncmFwaHknKTtcbiAgICBiaW9ncmFwaHkuaXRlbS5pbm5lckhUTUwgPSBgV2Ugc3BlY2lhbGl6ZSBpbiBkZWxpY2lvdXMgSmFwYW5lc2UgY3Vpc2luZSBcbiAgICBmcm9tIGZyZXNoIHN1c2hpIHdpdGggYSB2YXJpZXR5IG9mIHNwZWNpYWwgZmlzaCwgXG4gICAgdG8gaGliYWNoaSBlbnRyZWVzIGdyaWxsZWQgdG8gcGVyZmVjdGlvbiBpbiB0aGUga2l0Y2hlbi4gPGJyLz48YnIvPlxuICAgIENoZWYtb3duZXIgSmFjayB3aXRoIG92ZXIgMjUgeWVhcnMgb2YgZXhwZXJpZW5jZSBhbmQgd2hvIHByZXZpb3VzbHkgb3duZWQgXG4gICAgXCJLaXJha3UgSmFwYW5lc2UgUmVzdGF1cmFudFwiIGluIEhvdXN0b24sIFRleGFzLiBcbiAgICBIZSB3b3JrcyBoYXJkIGV2ZXJ5IGRheSB0byBwcm92aWRlIGEgY3VzdG9taXplZCBleHBlcmllbmNlIGZvciBldmVyeSBjdXN0b21lciBcbiAgICBhbmQgdHJlYXRzIHRoZW0gbGlrZSBoaXMgb3duIGZhbWlseS4gXG4gICAgV2hlbiBoZSBpcyBub3Qgd29ya2luZywgSmFjayBlbmpveXMgd2F0Y2hpbmcgbW92aWVzLCBzaW5naW5nLCBcbiAgICBhbmQgc3BlbmRpbmcgdGltZSB3aXRoIGhpcyBmYW1pbHkuIDxici8+PGJyLz5cbiAgICBIZWFkIHN1c2hpLWNoZWYgS2l0YW11cmEtc2FuIHdobyB3YXMgcHJldmlvdXNseSBcbiAgICB0aGUgaGVhZCBjaGVmIG9mIEppbmJlaSBKYXBhbmVzZSBSZXN0YXVyYW50IFxuICAgIGFuZCBoYXMgb3ZlciA0MCB5ZWFycyBvZiBleHBlcmllbmNlIHdvcmtpbmcgaW4gSmFwYW4sIEhhd2FpaSBhbmQgTmV3IFlvcmsuIFxuICAgIEtpdGFtdXJhLXNhbiBmb2N1c2VzIGhlYXZpbHkgb24gZW5zdXJpbmcgdGhlIHF1YWxpdHkgXG4gICAgYW5kIHN0YW5kYXJkcyBvZiBvdXIgc3VzaGkgYXJlIG9mIHRoZSBoaWdoZXN0IG9yZGVyLiBcbiAgICBLaXRhbXVyYS1zYW4gZW5qb3lzIHBsYXlpbmcgd2l0aCBoaXMgY2F0cywgXG4gICAgY29va2luZyBhbmQgc3BlbmRpbmcgdGltZSB3aXRoIGhpcyBncmFuZGNoaWxkcmVuLmA7XG4gICAgY29udGVudHMuYXBwZW5kQ2hpbGQoYmlvZ3JhcGh5Lml0ZW0pO1xufTtcblxuLy9HZW5lcmF0ZXMgc2l4IGltYWdlcyBpbiBhIGdyaWQgdGhhdCBjYW4gYmUgc2V0IGZ1bGxzY3JlZW4gd2hlbiBjbGlja2VkXG5sZXQgbWFrZUltYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgLy9BbGxvdyBpbWFnZXMgdG8gYmUgcHJlc2VudGVkIGZ1bGwgc2NyZWVuIHdoZW4gY2xpY2tlZFxuICAgIGxldCBtb2RhbENvbnRhaW5lciA9IG5ldyBFbGVtZW50KCdkaXYnLCAnbW9kYWxDb250YWluZXInKTtcbiAgICBjb250ZW50cy5hcHBlbmRDaGlsZChtb2RhbENvbnRhaW5lci5pdGVtKTtcblxuICAgIGxldCBkaXNwbGF5TW9kYWwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHNyYyA9IHRoaXMuZ2V0QXR0cmlidXRlKCdzcmMnKTtcbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsQ29udGFpbmVyJyk7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke3NyY30pYDtcbiAgICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY29udGFpbic7XG4gICAgICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPSAnbm8tcmVwZWF0JztcbiAgICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gJ2NlbnRlcic7XG4gICAgICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDAsMCwwLDAuNCknO1xuICAgICAgICBjb250ZW50cy5hcHBlbmRDaGlsZChtb2RhbCk7XG4gICAgXG4gICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH07XG4gICAgLy9HZW5lcmF0ZXMgaW1hZ2VzXG4gICAgbGV0IGltYWdlQ29udGFpbmVyID0gbmV3IEVsZW1lbnQoJ2RpdicsICdpbWFnZUNvbnRhaW5lcicpO1xuICAgIGxldCBpbWFnZTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA2OyBpKyspIHtcbiAgICAgICAgaW1hZ2UgPSAgbmV3IEVsZW1lbnQoJ2ltZycsICdiYW5uZXJJbWFnZScpO1xuICAgICAgICBpbWFnZS5pdGVtLnNyYyA9IGBpbWFnZXMvU3VzaGlCb2F0JHtpfS5qcGdgO1xuICAgICAgICBpbWFnZS5pdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheU1vZGFsKTtcbiAgICAgICAgaW1hZ2VDb250YWluZXIuaXRlbS5hcHBlbmRDaGlsZChpbWFnZS5pdGVtKTtcbiAgICAgICAgfTtcbiAgICBjb250ZW50cy5hcHBlbmRDaGlsZChpbWFnZUNvbnRhaW5lci5pdGVtKTtcbn07XG5cbmV4cG9ydCB7Y29udGVudHMsIEVsZW1lbnQsIG1ha2VJbWFnZSwgbWFrZUJpb307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge21ha2VOYXZCYXIsIG1ha2VMb2dvLCBtYWtlSGFtYnVyZ2VyfSBmcm9tICcuL25hdmJhci5qcyc7XG5pbXBvcnQge2hpZGVPdmVybGF5LCBtYWtlT3ZlcmxheSwgc2hvd092ZXJsYXl9IGZyb20gJy4vb3ZlcmxheS5qcydcbmltcG9ydCB7bWFrZUltYWdlLCBtYWtlQmlvfSBmcm9tICcuL3dlbGNvbWVwYWdlLmpzJztcbmltcG9ydCBtYWtlTWVudSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IG1ha2VDb3B5cmlnaHQgZnJvbSAnLi9jb3B5cmlnaHRiYXIuanMnXG5pbXBvcnQge21ha2VDb250YWN0LCBpbml0TWFwfSBmcm9tICcuL2NvbnRhY3QuanMnXG5cbmxldCBnZW5lcmF0ZVBhZ2UgPSAoKSA9PiB7XG4gICAgbWFrZU92ZXJsYXkoKTtcbiAgICBtYWtlTmF2QmFyKCk7XG4gICAgbWFrZUxvZ28oKTtcbiAgICBtYWtlSGFtYnVyZ2VyKCk7XG4gICAgbWFrZUltYWdlKCk7XG4gICAgbWFrZUJpbygpO1xuICAgIG1ha2VDb3B5cmlnaHQoKTtcbiAgICBzaG93T3ZlcmxheSgpO1xuICAgIGhpZGVPdmVybGF5KCk7XG4gICAgfTtcbmdlbmVyYXRlUGFnZSgpO1xuXG5sZXQgaG9tZVRhYiA9IDE7XG5sZXQgbWVudVRhYiA9IDA7XG5sZXQgY29udGFjdFRhYiA9IDA7XG5cbmxldCByZW1vdmVXZWxjb21lID0gKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5jb250YWlucyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmlvZ3JhcGh5JykpKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiaW9ncmFwaHknKS5yZW1vdmUoKTtcbiAgICB9O1xufTtcblxubGV0IHJlbW92ZU1lbnUgPSAoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LmNvbnRhaW5zKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYWxsZXJ5JykpKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYWxsZXJ5JykucmVtb3ZlKCk7XG4gICAgfTtcbn07XG5cbmxldCByZW1vdmVDb250YWN0ID0gKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5jb250YWlucyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdEhvbGRlcicpKSkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdEhvbGRlcicpLnJlbW92ZSgpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJykucmVtb3ZlKCk7XG4gICAgfTtcbn07XG5cblxubGV0IGdvSG9tZSA9ICgpID0+IHtcbiAgICBpZiAoaG9tZVRhYiA9PT0gMCkge1xuICAgICAgICBtYWtlQmlvKCk7XG4gICAgICAgIHJlbW92ZU1lbnUoKTtcbiAgICAgICAgcmVtb3ZlQ29udGFjdCgpO1xuICAgICAgICBob21lVGFiID0gMTtcbiAgICAgICAgbWVudVRhYiA9IDA7XG4gICAgICAgIGNvbnRhY3RUYWIgPSAwO1xuICAgIH07XG59O1xuXG5sZXQgZ29NZW51ID0gKCkgPT4ge1xuICAgIGlmIChtZW51VGFiID09PSAwKSB7XG4gICAgICAgIHJlbW92ZUNvbnRhY3QoKTtcbiAgICAgICAgcmVtb3ZlV2VsY29tZSgpO1xuICAgICAgICBtYWtlTWVudSgpO1xuICAgICAgICBob21lVGFiID0gMDtcbiAgICAgICAgbWVudVRhYiA9IDE7XG4gICAgICAgIGNvbnRhY3RUYWIgPSAwO1xuICAgIH07XG59O1xuXG5sZXQgZ29Db250YWN0ID0gKCkgPT4ge1xuICAgIGlmIChjb250YWN0VGFiID09PSAwKSB7XG4gICAgICAgIHJlbW92ZVdlbGNvbWUoKTtcbiAgICAgICAgcmVtb3ZlTWVudSgpO1xuICAgICAgICBtYWtlQ29udGFjdCgpO1xuICAgICAgICBpbml0TWFwKCk7XG4gICAgICAgIGNvbnRhY3RUYWIgPSAxO1xuICAgICAgICBtZW51VGFiID0gMDtcbiAgICAgICAgaG9tZVRhYiA9IDA7XG4gICAgfTtcbn07XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJylcbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdvSG9tZSwgZmFsc2UpO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKVxuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ29NZW51LCBmYWxzZSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpXG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnb0NvbnRhY3QsIGZhbHNlKTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vYmlsZUhvbWUnKVxuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ29Ib21lLCBmYWxzZSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9iaWxlTWVudScpXG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnb01lbnUsIGZhbHNlKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2JpbGVDb250YWN0Jylcbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdvQ29udGFjdCwgZmFsc2UpOyJdLCJzb3VyY2VSb290IjoiIn0=