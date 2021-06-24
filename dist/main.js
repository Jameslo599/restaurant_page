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
    anOrder.target = '_blank'
    anOrder.rel = 'noreferrer noopener';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29weXJpZ2h0YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3dlbGNvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDOztBQUV6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksOERBQW9COztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksOERBQW9CO0FBQ3hCO0FBQ0EsaUJBQWlCLDhCQUE4QjtBQUMvQztBQUNBLEtBQUs7QUFDTDtBQUNBLG1CQUFtQiw4QkFBOEI7QUFDakQ7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFRO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0RBQVc7QUFDbkIsUUFBUSxvREFBTztBQUNmO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsK0UiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbnRlbnRzIH0gZnJvbSBcIi4vd2VsY29tZXBhZ2VcIjtcblxubGV0IG1hcEhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWFwSG9sZGVyLmlkID0gJ21hcCc7XG5cbmxldCBtYWtlQ29udGFjdCA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBjb250YWN0SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdEhvbGRlci5pZCA9ICdjb250YWN0SG9sZGVyJztcbiAgICBjb250ZW50cy5hcHBlbmRDaGlsZChjb250YWN0SG9sZGVyKTtcblxuICAgIGxldCBjb250YWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29udGFjdEluZm8uaWQgPSAnY29udGFjdEluZm8nO1xuICAgIGNvbnRhY3RJbmZvLmlubmVySFRNTCA9IFxuICAgIGBBZGRyZXNzOjxicj5cbiAgICAzNzUxIFMgU3RvbmVicmlkZ2UgRHIuPGJyLz5cbiAgICBNY2tpbm5leSwgVGV4YXMgNzUwNzA8YnIvPlxuICAgIFBob25lOjxici8+XG4gICAgOTcyLTU0Ny0xNjI4PGJyPlxuICAgIEVtYWlsOiB6ZW5zdXNoaWFuZGdyaWxsQGljbG91ZC5jb21gO1xuICAgIGNvbnRhY3RIb2xkZXIuYXBwZW5kQ2hpbGQoY29udGFjdEluZm8pO1xuXG4gICAgbGV0IG9wZW5pbmdUaW1lcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgb3BlbmluZ1RpbWVzLmlkID0gJ29wZW5pbmdUaW1lJztcbiAgICBvcGVuaW5nVGltZXMuaW5uZXJIVE1MID0gXG4gICAgYEhvdXJzOjxicj5cbiAgICBUdWVzIC0gU2F0OiAxMUFNIC0gMTBQTTxici8+XG4gICAgU3VuICYgTW9uOiBDbG9zZWQ8YnIvPlxuICAgIERyZXNzIENvZGU6IENhc3VhbDxici8+XG4gICAgRm9yIFJlc2VydmF0aW9ucyBhbmQgcGFydGllcyBvZiA3IG9yIG1vcmUsPGJyLz4gcGxlYXNlIGNhbGwgOTcyLTU0Ny0xNjI4YDtcbiAgICBjb250YWN0SG9sZGVyLmFwcGVuZENoaWxkKG9wZW5pbmdUaW1lcyk7XG59O1xuXG5sZXQgbWFwO1xuXG5mdW5jdGlvbiBpbml0TWFwKCkge1xuICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKG1hcEhvbGRlcik7XG4gICAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFwiKSwge1xuICAgICAgICBjZW50ZXI6IHtsYXQ6IDMzLjE2ODI3LCBsbmc6IC05Ni43Mjk5OX0sXG4gICAgICAgIHpvb206IDE4LFxuICAgIH0pO1xuICAgIGxldCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgcG9zaXRpb246IHtsYXQ6IDMzLjE2ODI3LCBsbmc6IC05Ni43Mjk5OX0sXG4gICAgICAgIG1hcDogbWFwLFxuICAgIH0pO1xufTtcblxuZXhwb3J0IHttYWtlQ29udGFjdCwgaW5pdE1hcH07IiwibGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3B5cmlnaHRIb2xkZXInKTtcblxubGV0IG1ha2VDb3B5cmlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29weXJpZ2h0LmlkID0gJ2NvcHlyaWdodCc7XG4gICAgY29weXJpZ2h0LmNsYXNzTmFtZSA9ICdjbGVhcmZpeCc7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XG5cbiAgICBsZXQgY29weXJpZ2h0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvcHlyaWdodFRleHQuaW5uZXJIVE1MID0gJ0NPUFlSSUdIVCBKQU1FUyBMTyAyMDIxJ1xuICAgIGNvcHlyaWdodFRleHQuaWQgPSAnY29weXJpZ2h0VGV4dCc7XG4gICAgY29weXJpZ2h0VGV4dC5jbGFzc05hbWVzID0gJ3RleHQgZmxvYXQgbGVmdCdcbiAgICBjb3B5cmlnaHQuYXBwZW5kQ2hpbGQoY29weXJpZ2h0VGV4dCk7XG5cbiAgICBsZXQgY29weXJpZ2h0TGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvcHlyaWdodExpbmtzLmNsYXNzTmFtZSA9ICdsaW5rcyBmbG9hdCByaWdodCc7XG4gICAgY29weXJpZ2h0TGlua3MuaWQgPSAnbGlua3MnO1xuICAgIGNvcHlyaWdodC5hcHBlbmRDaGlsZChjb3B5cmlnaHRMaW5rcyk7XG5cbiAgICBsZXQgZmFjZWJvb2tJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsZXQgZmFjZWJvb2tMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxldCBmYWNlYm9va0ZvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgZmFjZWJvb2tMaW5rLmhyZWYgPSAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL1plblN1c2hpTWNraW5uZXkvJztcbiAgICBmYWNlYm9va0xpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgZmFjZWJvb2tMaW5rLnJlbCA9ICdub3JlZmVycmVyIG5vb3BlbmVyJztcbiAgICBmYWNlYm9va0ZvbnQuY2xhc3NOYW1lID0gJ2ZhYiBmYS1mYWNlYm9vay1zcXVhcmUnXG5cbiAgICBsZXQgb3JkZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsZXQgb3JkZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxldCBvcmRlckZvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgb3JkZXJMaW5rLmhyZWYgPSAnaHR0cHM6Ly93d3cuemVuc3VzaGlhbmRncmlsbG1ja2lubmV5LmNvbS8nO1xuICAgIG9yZGVyTGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBvcmRlckxpbmsucmVsID0gJ25vcmVmZXJyZXIgbm9vcGVuZXInO1xuICAgIG9yZGVyRm9udC5jbGFzc05hbWUgPSAnZmFzIGZhLXV0ZW5zaWxzJztcblxuICAgIGxldCBnaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsZXQgZ2l0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsZXQgZ2l0Rm9udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBnaXRMaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL0phbWVzbG81OTknO1xuICAgIGdpdExpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgZ2l0TGluay5yZWwgPSAnbm9yZWZlcnJlciBub29wZW5lcic7XG4gICAgZ2l0Rm9udC5jbGFzc05hbWUgPSAnZmFiIGZhLWdpdGh1Yi1zcXVhcmUnO1xuXG4gICAgZmFjZWJvb2tMaW5rLmFwcGVuZENoaWxkKGZhY2Vib29rRm9udCk7XG4gICAgZmFjZWJvb2tJY29uLmFwcGVuZENoaWxkKGZhY2Vib29rTGluayk7XG4gICAgY29weXJpZ2h0TGlua3MuYXBwZW5kQ2hpbGQoZmFjZWJvb2tJY29uKTtcbiAgICBvcmRlckxpbmsuYXBwZW5kQ2hpbGQob3JkZXJGb250KTtcbiAgICBvcmRlckljb24uYXBwZW5kQ2hpbGQob3JkZXJMaW5rKTtcbiAgICBjb3B5cmlnaHRMaW5rcy5hcHBlbmRDaGlsZChvcmRlckljb24pO1xuICAgIGdpdExpbmsuYXBwZW5kQ2hpbGQoZ2l0Rm9udCk7XG4gICAgZ2l0SWNvbi5hcHBlbmRDaGlsZChnaXRMaW5rKTtcbiAgICBjb3B5cmlnaHRMaW5rcy5hcHBlbmRDaGlsZChnaXRJY29uKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VDb3B5cmlnaHQ7IiwiaW1wb3J0IHsgY29udGVudHMgfSBmcm9tIFwiLi93ZWxjb21lcGFnZVwiO1xuXG5sZXQgbWFrZU1lbnUgPSBmdW5jdGlvbigpIHtcblxuICAgIGxldCBtZW51R2FsbGVyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVHYWxsZXJ5LmlkID0gJ2dhbGxlcnknO1xuICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKG1lbnVHYWxsZXJ5KTtcblxuICAgIGxldCBpbWFnZTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA4OyBpKyspIHtcbiAgICAgICAgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gYGltYWdlcy9tZW51JHtpfS5qcGdgO1xuICAgICAgICBpbWFnZS5jbGFzc05hbWUgPSAnbWVudUltYWdlJztcbiAgICAgICAgaW1hZ2UuaWQgPSAnbWVudUltYWdlJztcbiAgICAgICAgbWVudUdhbGxlcnkuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICAgICB9O1xuICAgIFxuICAgIGxldCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsQ29udGFpbmVyLmlkID0gJ21vZGFsQ29udGFpbmVyJztcbiAgICBjb250ZW50cy5hcHBlbmRDaGlsZChtb2RhbENvbnRhaW5lcik7XG5cbiAgICBsZXQgZnVsbFNjcmVlbkltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWVudUltYWdlJyk7XG4gICAgbGV0IGRpc3BsYXlNb2RhbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgc3JjID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxDb250YWluZXInKTtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7c3JjfSlgO1xuICAgICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb250YWluJztcbiAgICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9ICduby1yZXBlYXQnO1xuICAgICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnY2VudGVyJztcbiAgICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMCwwLDAsMC40KSc7XG4gICAgICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgICBcbiAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8ZnVsbFNjcmVlbkltYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZ1bGxTY3JlZW5JbWFnZVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlNb2RhbCk7XG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VNZW51OyIsImltcG9ydCB7IGNvbnRlbnRzIH0gZnJvbSBcIi4vd2VsY29tZXBhZ2VcIjtcblxuZnVuY3Rpb24gRWxlbWVudChpdGVtLCBjbGFzc05hbWUpIHtcbiAgICB0aGlzLml0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0ZW0pO1xuICAgIHRoaXMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xufTtcblxubGV0IG1ha2VOYXZCYXIgPSBmdW5jdGlvbigpIHtcbiAgICAvL2xldCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIC8vbmF2YmFyLmNsYXNzTmFtZSA9ICduYXYnO1xuICAgIGxldCBuYXZiYXIgPSBuZXcgRWxlbWVudCgndWwnLCAnbmF2Jyk7XG4gICAgbmF2YmFyLml0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICduYXYnKTtcbiAgICBjb250ZW50cy5hcHBlbmRDaGlsZChuYXZiYXIuaXRlbSk7XG5cbiAgICBsZXQgbmF2YmFyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdmJhclRleHQuaW5uZXJIVE1MID0gJ1plbiBTdXNoaSAmIEdyaWxsJ1xuICAgIG5hdmJhclRleHQuaWQgPSAndGl0bGUnO1xuICAgIG5hdmJhclRleHQuY2xhc3NOYW1lcyA9ICd0ZXh0IGZsb2F0IGxlZnQgY2xlYXJmaXgnXG4gICAgbmF2YmFyLml0ZW0uYXBwZW5kQ2hpbGQobmF2YmFyVGV4dCk7XG5cbiAgICBsZXQgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGV0IGFIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGFIb21lLmlubmVySFRNTCA9ICdIb21lJztcbiAgICBhSG9tZS5ocmVmID0gJyMnO1xuICAgIGhvbWVCdXR0b24uaWQgPSAnaG9tZSdcbiAgICBob21lQnV0dG9uLmFwcGVuZENoaWxkKGFIb21lKTtcbiAgICBuYXZiYXIuaXRlbS5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcblxuICAgIGxldCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsZXQgYU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYU1lbnUuaW5uZXJIVE1MID0gJ01lbnUnO1xuICAgIGFNZW51LmhyZWYgPSAnIyc7XG4gICAgbWVudUJ1dHRvbi5pZCA9ICdtZW51J1xuICAgIG1lbnVCdXR0b24uYXBwZW5kQ2hpbGQoYU1lbnUpO1xuICAgIG5hdmJhci5pdGVtLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuXG4gICAgbGV0IG9yZGVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsZXQgYW5PcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhbk9yZGVyLmlubmVySFRNTCA9ICdPcmRlciBIZXJlJztcbiAgICBhbk9yZGVyLmhyZWYgPSAnaHR0cHM6Ly93d3cuemVuc3VzaGlhbmRncmlsbG1ja2lubmV5LmNvbS8nO1xuICAgIGFuT3JkZXIudGFyZ2V0ID0gJ19ibGFuaydcbiAgICBhbk9yZGVyLnJlbCA9ICdub3JlZmVycmVyIG5vb3BlbmVyJztcbiAgICBvcmRlckJ1dHRvbi5pZCA9ICdvcmRlcidcbiAgICBvcmRlckJ1dHRvbi5hcHBlbmRDaGlsZChhbk9yZGVyKTtcbiAgICBuYXZiYXIuaXRlbS5hcHBlbmRDaGlsZChvcmRlckJ1dHRvbik7XG5cbiAgICBsZXQgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGV0IGFDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGFDb250YWN0LmlubmVySFRNTCA9ICdDb250YWN0IFVzJztcbiAgICBhQ29udGFjdC5ocmVmID0gJyMnO1xuICAgIGNvbnRhY3RCdXR0b24uaWQgPSAnY29udGFjdCdcbiAgICBjb250YWN0QnV0dG9uLmFwcGVuZENoaWxkKGFDb250YWN0KTtcbiAgICBuYXZiYXIuaXRlbS5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcbn07XG5cbmxldCBtYWtlTG9nbyA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbGV0IGFMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGFMb2dvLmhyZWYgPSAnJztcbiAgICBhTG9nby5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBsb2dvLmNsYXNzTmFtZSA9ICdsb2dvJztcbiAgICBsb2dvLnNyYyA9ICdpbWFnZXMvRGFydW1hLnBuZyc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ29Ib2xkZXInKS5hcHBlbmRDaGlsZChhTG9nbyk7XG59O1xuXG5leHBvcnQge21ha2VOYXZCYXIsIG1ha2VMb2dvfTsiLCJsZXQgY29udGVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmxldCBtYWtlQmlvID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGJpb2dyYXBoeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBiaW9ncmFwaHkuaW5uZXJIVE1MID0gYFdlIHNwZWNpYWxpemUgaW4gZGVsaWNpb3VzIEphcGFuZXNlIGN1aXNpbmUgXG4gICAgZnJvbSBmcmVzaCBzdXNoaSB3aXRoIGEgdmFyaWV0eSBvZiBzcGVjaWFsIGZpc2gsIFxuICAgIHRvIGhpYmFjaGkgZW50cmVlcyBncmlsbGVkIHRvIHBlcmZlY3Rpb24gaW4gdGhlIGtpdGNoZW4uIDxici8+PGJyLz5cbiAgICBDaGVmLW93bmVyIEphY2sgd2l0aCBvdmVyIDI1IHllYXJzIG9mIGV4cGVyaWVuY2UgYW5kIHdobyBwcmV2aW91c2x5IG93bmVkIFxuICAgIFwiS2lyYWt1IEphcGFuZXNlIFJlc3RhdXJhbnRcIiBpbiBIb3VzdG9uLCBUZXhhcy4gXG4gICAgSGUgd29ya3MgaGFyZCBldmVyeSBkYXkgdG8gcHJvdmlkZSBhIGN1c3RvbWl6ZWQgZXhwZXJpZW5jZSBmb3IgZXZlcnkgY3VzdG9tZXIgXG4gICAgYW5kIHRyZWF0cyB0aGVtIGxpa2UgaGlzIG93biBmYW1pbHkuIFxuICAgIFdoZW4gaGUgaXMgbm90IHdvcmtpbmcsIEphY2sgZW5qb3lzIHdhdGNoaW5nIG1vdmllcywgc2luZ2luZywgXG4gICAgYW5kIHNwZW5kaW5nIHRpbWUgd2l0aCBoaXMgZmFtaWx5LiA8YnIvPjxici8+XG4gICAgSGVhZCBzdXNoaS1jaGVmIEtpdGFtdXJhLXNhbiB3aG8gd2FzIHByZXZpb3VzbHkgXG4gICAgdGhlIGhlYWQgY2hlZiBvZiBKaW5iZWkgSmFwYW5lc2UgUmVzdGF1cmFudCBcbiAgICBhbmQgaGFzIG92ZXIgNDAgeWVhcnMgb2YgZXhwZXJpZW5jZSB3b3JraW5nIGluIEphcGFuLCBIYXdhaWkgYW5kIE5ldyBZb3JrLiBcbiAgICBLaXRhbXVyYS1zYW4gZm9jdXNlcyBoZWF2aWx5IG9uIGVuc3VyaW5nIHRoZSBxdWFsaXR5IFxuICAgIGFuZCBzdGFuZGFyZHMgb2Ygb3VyIHN1c2hpIGFyZSBvZiB0aGUgaGlnaGVzdCBvcmRlci4gXG4gICAgS2l0YW11cmEtc2FuIGVuam95cyBwbGF5aW5nIHdpdGggaGlzIGNhdHMsIFxuICAgIGNvb2tpbmcgYW5kIHNwZW5kaW5nIHRpbWUgd2l0aCBoaXMgZ3JhbmRjaGlsZHJlbi5gO1xuICAgIGJpb2dyYXBoeS5pZCA9ICdiaW9ncmFwaHknO1xuICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKGJpb2dyYXBoeSk7XG59O1xuXG5sZXQgbWFrZUltYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1hZ2VDb250YWluZXIuaWQgPSAnaW1hZ2VDb250YWluZXInO1xuICAgIGxldCBpbWFnZTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA2OyBpKyspIHtcbiAgICAgICAgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gYGltYWdlcy9TdXNoaUJvYXQke2l9LmpwZ2A7XG4gICAgICAgIGltYWdlLmNsYXNzTmFtZSA9ICdiYW5uZXJJbWFnZSc7XG4gICAgICAgIGltYWdlLmlkID0gJ2Jhbm5lcic7XG4gICAgICAgIGltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgICAgfTtcbiAgICBjb250ZW50cy5hcHBlbmRDaGlsZChpbWFnZUNvbnRhaW5lcik7XG5cbiAgICBsZXQgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbENvbnRhaW5lci5pZCA9ICdtb2RhbENvbnRhaW5lcic7XG4gICAgY29udGVudHMuYXBwZW5kQ2hpbGQobW9kYWxDb250YWluZXIpO1xuXG4gICAgbGV0IGZ1bGxTY3JlZW5JbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Jhbm5lckltYWdlJyk7XG4gICAgbGV0IGRpc3BsYXlNb2RhbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgc3JjID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxDb250YWluZXInKTtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7c3JjfSlgO1xuICAgICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb250YWluJztcbiAgICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9ICduby1yZXBlYXQnO1xuICAgICAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnY2VudGVyJztcbiAgICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMCwwLDAsMC40KSc7XG4gICAgICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgICBcbiAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8ZnVsbFNjcmVlbkltYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZ1bGxTY3JlZW5JbWFnZVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlNb2RhbCk7XG4gICAgfTtcbn07XG5cbmxldCBwb3B1bGF0ZVdlbGNvbWUgPSBmdW5jdGlvbigpIHtcbiAgICBtYWtlQmlvKCk7XG59O1xuXG5leHBvcnQge2NvbnRlbnRzLCBtYWtlSW1hZ2UsIHBvcHVsYXRlV2VsY29tZX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge21ha2VOYXZCYXIsIG1ha2VMb2dvfSBmcm9tICcuL25hdmJhci5qcyc7XG5pbXBvcnQge2NvbnRlbnRzLCBtYWtlSW1hZ2UsIHBvcHVsYXRlV2VsY29tZX0gZnJvbSAnLi93ZWxjb21lcGFnZS5qcyc7XG5pbXBvcnQgbWFrZU1lbnUgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBtYWtlQ29weXJpZ2h0IGZyb20gJy4vY29weXJpZ2h0YmFyLmpzJ1xuaW1wb3J0IHttYWtlQ29udGFjdCwgaW5pdE1hcH0gZnJvbSAnLi9jb250YWN0LmpzJ1xuXG5tYWtlTmF2QmFyKCk7XG5tYWtlTG9nbygpO1xubWFrZUltYWdlKCk7XG5wb3B1bGF0ZVdlbGNvbWUoKTtcbm1ha2VDb3B5cmlnaHQoKTtcblxubGV0IGhvbWVUYWIgPSAxO1xubGV0IG1lbnVUYWIgPSAwO1xubGV0IGNvbnRhY3RUYWIgPSAwO1xuXG5sZXQgcmVtb3ZlV2VsY29tZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChob21lVGFiID09PSAxKSB7XG4gICAgY29udGVudHMucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jpb2dyYXBoeScpKTtcbiAgICB9IGVsc2Uge307XG59O1xuXG5sZXQgcmVtb3ZlTWVudSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChtZW51VGFiID09PSAxKSB7XG4gICAgY29udGVudHMucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbGxlcnknKSk7XG4gICAgfSBlbHNlIHt9O1xufTtcblxubGV0IHJlbW92ZUNvbnRhY3QgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoY29udGFjdFRhYiA9PT0gMSkge1xuICAgICAgICBjb250ZW50cy5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdEhvbGRlcicpKTtcbiAgICAgICAgY29udGVudHMucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpKTtcbiAgICB9IGVsc2Uge307XG59O1xuXG5sZXQgZ29Ib21lID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKGhvbWVUYWIgPT09IDApIHtcbiAgICAgICAgcG9wdWxhdGVXZWxjb21lKCk7XG4gICAgICAgIHJlbW92ZU1lbnUoKTtcbiAgICAgICAgcmVtb3ZlQ29udGFjdCgpO1xuICAgICAgICBob21lVGFiID0gMTtcbiAgICAgICAgbWVudVRhYiA9IDA7XG4gICAgICAgIGNvbnRhY3RUYWIgPSAwO1xuICAgIH0gZWxzZSB7fTtcbn07XG5cbmxldCBnb01lbnUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAobWVudVRhYiA9PT0gMCkge1xuICAgICAgICByZW1vdmVDb250YWN0KCk7XG4gICAgICAgIHJlbW92ZVdlbGNvbWUoKTtcbiAgICAgICAgbWFrZU1lbnUoKTtcbiAgICAgICAgaG9tZVRhYiA9IDA7XG4gICAgICAgIG1lbnVUYWIgPSAxO1xuICAgICAgICBjb250YWN0VGFiID0gMDtcbiAgICB9IGVsc2Uge307XG59O1xuXG5sZXQgZ29Db250YWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKGNvbnRhY3RUYWIgPT09IDApIHtcbiAgICAgICAgcmVtb3ZlV2VsY29tZSgpO1xuICAgICAgICByZW1vdmVNZW51KCk7XG4gICAgICAgIG1ha2VDb250YWN0KCk7XG4gICAgICAgIGluaXRNYXAoKTtcbiAgICAgICAgY29udGFjdFRhYiA9IDE7XG4gICAgICAgIG1lbnVUYWIgPSAwO1xuICAgICAgICBob21lVGFiID0gMDtcbiAgICB9IGVsc2Uge307XG59O1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ29Ib21lLCBmYWxzZSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ29NZW51LCBmYWxzZSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ29Db250YWN0LCBmYWxzZSk7Il0sInNvdXJjZVJvb3QiOiIifQ==