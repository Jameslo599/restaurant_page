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


// Houses Google Maps
const mapHolder = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("div", "map");

// Generates contact information
const makeContact = function createContact() {
  const contactHolder = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("div", "contactHolder");
  _welcomepage__WEBPACK_IMPORTED_MODULE_0__.contents.appendChild(contactHolder.item);

  const contactInfo = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("h2", "contactInfo");
  contactInfo.item.innerHTML = `Address:<br>
    3751 S Stonebridge Dr.<br/>
    Mckinney, Texas 75070<br/>
    Phone:<br/>
    972-547-1628<br>
    Email: zensushiandgrill@icloud.com`;
  contactHolder.item.appendChild(contactInfo.item);

  const openingTimes = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("h2", "openingTime");
  openingTimes.item.innerHTML = `Hours:<br>
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
    center: { lat: 33.16827, lng: -96.72999 },
    zoom: 18,
  });
  const marker = new google.maps.Marker({
    position: { lat: 33.16827, lng: -96.72999 },
    map,
  });
}




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


// Houses copyright bar
const container = document.getElementById("copyrightHolder");

// Generates complete copyright bar
const makeCopyright = function createCopyright() {
  const copyright = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("div", "copyright");
  copyright.item.className = "clearfix";
  container.appendChild(copyright.item);

  const copyrightText = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("div", "copyrightText");
  copyrightText.item.classNames = "text float left";
  copyright.item.appendChild(copyrightText.item);

  const copyrightLinks = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("ul", "links");
  copyrightLinks.item.className = "links float right";
  copyright.item.appendChild(copyrightLinks.item);

  const facebookIcon = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("li");
  const facebookLink = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("a");
  const facebookFont = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("i", "fab fa-facebook-square");
  facebookLink.item.href = "https://www.facebook.com/ZenSushiMckinney/";
  facebookLink.item.target = "_blank";
  facebookLink.item.rel = "noreferrer noopener";

  const orderIcon = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("li");
  const orderLink = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("a");
  const orderFont = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("i", "fas fa-utensils");
  orderLink.item.href = "https://www.zensushiandgrillmckinney.com/";
  orderLink.item.target = "_blank";
  orderLink.item.rel = "noreferrer noopener";

  const gitIcon = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("li");
  const gitLink = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("a");
  const gitFont = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("i", "fab fa-github-square");
  gitLink.item.href = "https://github.com/Jameslo599";
  gitLink.item.target = "_blank";
  gitLink.item.rel = "noreferrer noopener";

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


const makeMenu = function createMenu() {
  // Houses menu images
  const menuGallery = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("div", "gallery");
  _welcomepage__WEBPACK_IMPORTED_MODULE_0__.contents.appendChild(menuGallery.item);

  // Allow images to be presented full screen when clicked
  const displayModal = function appendModal() {
    const src = this.getAttribute("src");
    const modal = document.getElementById("modalContainer");
    modal.style.display = "block";
    modal.style.background = `url(${src})`;
    modal.style.backgroundSize = "contain";
    modal.style.backgroundRepeat = "no-repeat";
    modal.style.backgroundPosition = "center";
    modal.style.backgroundColor = "rgba(0,0,0,0.4)";
    _welcomepage__WEBPACK_IMPORTED_MODULE_0__.contents.appendChild(modal);

    window.onclick = function exitModal(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  };

  // Generates menu images
  let image;
  for (let i = 1; i <= 8; i += 1) {
    image = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("img", "menuImage");
    image.item.src = `images/menu${i}.jpg`;
    image.item.addEventListener("click", displayModal);
    menuGallery.item.appendChild(image.item);
  }

  const modalContainer = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("div", "modalContainer");
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


// Generates full navigation bar
const makeNavBar = function createNavbar() {
  const navbar = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("ul", "nav");
  _welcomepage__WEBPACK_IMPORTED_MODULE_0__.contents.appendChild(navbar.item);

  const navbarText = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("div", "title");
  navbarText.item.innerHTML = "Zen Sushi & Grill";
  navbar.item.appendChild(navbarText.item);

  const homeButton = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("li", "home");
  const aHome = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("a");
  aHome.item.innerHTML = "Home";
  aHome.item.href = "#";
  homeButton.item.appendChild(aHome.item);
  navbar.item.appendChild(homeButton.item);

  const menuButton = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("li", "menu");
  const aMenu = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("a");
  aMenu.item.innerHTML = "Menu";
  aMenu.item.href = "#";
  menuButton.item.appendChild(aMenu.item);
  navbar.item.appendChild(menuButton.item);

  const orderButton = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("li", "order");
  const anOrder = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("a");
  anOrder.item.innerHTML = "Order Here";
  anOrder.item.href = "https://www.zensushiandgrillmckinney.com/";
  anOrder.item.target = "_blank";
  anOrder.item.rel = "noreferrer noopener";
  orderButton.item.appendChild(anOrder.item);
  navbar.item.appendChild(orderButton.item);

  const contactButton = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("li", "contact");
  const aContact = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("a");
  aContact.item.innerHTML = "Contact Us";
  aContact.item.href = "#";
  contactButton.item.appendChild(aContact.item);
  navbar.item.appendChild(contactButton.item);
};

// Generates Logo
const makeLogo = function createLogo() {
  const logo = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("img", "logo");
  const aLogo = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("a");
  aLogo.item.href = "";
  aLogo.item.appendChild(logo.item);
  logo.item.src = "images/Daruma.png";
  document.getElementById("logoHolder").appendChild(aLogo.item);
};

// Generates hamburger icon for mobile devices
const makeHamburger = function createHamburger() {
  const hamburger = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("img", "hamburger");
  const aHamburger = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("a");
  aHamburger.item.href = "";
  aHamburger.item.appendChild(hamburger.item);
  hamburger.item.src = "images/hamburger-icon.png";
  document.getElementById("logoHolder").appendChild(aHamburger.item);
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


// Generates menu overlay for mobile devices
const makeOverlay = function createOverlay() {
  const overlay = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("div", "overlay");
  _welcomepage__WEBPACK_IMPORTED_MODULE_0__.contents.appendChild(overlay.item);

  const close = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("img", "close");
  const aClose = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("a");
  aClose.item.href = "";
  aClose.item.appendChild(close.item);
  close.item.src = "images/close-icon.png";
  overlay.item.appendChild(aClose.item);

  const overlayList = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("ul", "overlayList");
  overlay.item.appendChild(overlayList.item);

  const homeButton = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("li", "mobileHome");
  const aHome = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("a");
  aHome.item.innerHTML = "Home";
  aHome.item.href = "#";
  homeButton.item.appendChild(aHome.item);
  overlayList.item.appendChild(homeButton.item);

  const menuButton = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("li", "mobileMenu");
  const aMenu = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("a");
  aMenu.item.innerHTML = "Menu";
  aMenu.item.href = "#";
  menuButton.item.appendChild(aMenu.item);
  overlayList.item.appendChild(menuButton.item);

  const orderButton = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("li", "order");
  const anOrder = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("a");
  anOrder.item.innerHTML = "Order Here";
  anOrder.item.href = "https://www.zensushiandgrillmckinney.com/";
  anOrder.item.target = "_blank";
  anOrder.item.rel = "noreferrer noopener";
  orderButton.item.appendChild(anOrder.item);
  overlayList.item.appendChild(orderButton.item);

  const contactButton = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("li", "mobileContact");
  const aContact = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("a");
  aContact.item.innerHTML = "Contact Us";
  aContact.item.href = "#";
  contactButton.item.appendChild(aContact.item);
  overlayList.item.appendChild(contactButton.item);
};

// shows overlay on click
const showOverlay = () => {
  document.getElementById("hamburger").addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay").style.animation = "fadeIn 1s";
  });
};

// Hides overlay on click
const hideOverlay = () => {
  document.getElementById("close").addEventListener("click", (event) => {
    event.preventDefault();
    setTimeout(() => {
      document.getElementById("overlay").style.display = "none";
    }, 500);
    document.getElementById("overlay").style.animation = "fadeOut 0.5s";
  });
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
const contents = document.getElementById("content");

// Constructor for creating DOM elements
const Element = function makeElement(item, className) {
  this.item = document.createElement(item);
  this.item.setAttribute("class", className);
  this.item.setAttribute("id", className);
};

// Generates restaurant biography
const makeBio = () => {
  const biography = new Element("h2", "biography");
  biography.item.innerHTML = `We specialize in delicious Japanese cuisine 
    from fresh sushi with a variety of special fish, 
    to hibachi entrees grilled to perfection in the kitchen. <br/><br/>
    Chef-Owner Chien (Jack) with over 27 years of experience and who previously owned "Kiraku Japanese Restaurant" in Houston, Texas. He tries his best to provide a customized experience for every customer and treats them like his own family. <br/><br/>
    Head Sushi Chef Kitamura was previously the head chef of Jinbei Japanese Restaurant and has over 42 years of experience working in Japan, Hawaii and New York. Kitamura-san focuses heavily on ensuring the quality and standards of our sushi are of the highest order. For this reason, he can be seen as more shy during service.<br/><br/>
	Head Kitchen Chef Candido with 30 years experience working in teppanyaki restaurants such as Benihana, uses his knowledge to provide food grilled to perfection.`;
  contents.appendChild(biography.item);
};

// Generates six images in a grid that can be set fullscreen when clicked
const makeImage = function createImage() {
  // Allow images to be presented full screen when clicked
  const modalContainer = new Element("div", "modalContainer");
  contents.appendChild(modalContainer.item);

  const displayModal = function appendModal() {
    const src = this.getAttribute("src");
    const modal = document.getElementById("modalContainer");
    modal.style.display = "block";
    modal.style.background = `url(${src})`;
    modal.style.backgroundSize = "contain";
    modal.style.backgroundRepeat = "no-repeat";
    modal.style.backgroundPosition = "center";
    modal.style.backgroundColor = "rgba(0,0,0,0.4)";
    contents.appendChild(modal);

    window.onclick = function exitModal(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  };
  // Generates images
  const imageContainer = new Element("div", "imageContainer");
  let image;
  for (let i = 1; i <= 6; i += 1) {
    image = new Element("img", "bannerImage");
    image.item.src = `images/SushiBoat${i}.jpg`;
    image.item.addEventListener("click", displayModal);
    imageContainer.item.appendChild(image.item);
  }
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
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");
/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overlay */ "./src/overlay.js");
/* harmony import */ var _welcomepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcomepage */ "./src/welcomepage.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _copyrightbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./copyrightbar */ "./src/copyrightbar.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact */ "./src/contact.js");







const generatePage = () => {
  (0,_overlay__WEBPACK_IMPORTED_MODULE_1__.makeOverlay)();
  (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.makeNavBar)();
  (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.makeLogo)();
  (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.makeHamburger)();
  (0,_welcomepage__WEBPACK_IMPORTED_MODULE_2__.makeImage)();
  (0,_welcomepage__WEBPACK_IMPORTED_MODULE_2__.makeBio)();
  (0,_copyrightbar__WEBPACK_IMPORTED_MODULE_4__.default)();
  (0,_overlay__WEBPACK_IMPORTED_MODULE_1__.showOverlay)();
  (0,_overlay__WEBPACK_IMPORTED_MODULE_1__.hideOverlay)();
};
generatePage();

let homeTab = 1;
let menuTab = 0;
let contactTab = 0;

const removeWelcome = () => {
  if (document.contains(document.getElementById("biography"))) {
    document.getElementById("biography").remove();
  }
};

const removeMenu = () => {
  if (document.contains(document.getElementById("gallery"))) {
    document.getElementById("gallery").remove();
  }
};

const removeContact = () => {
  if (document.contains(document.getElementById("contactHolder"))) {
    document.getElementById("contactHolder").remove();
    document.getElementById("map").remove();
  }
};

const goHome = () => {
  if (homeTab === 0) {
    (0,_welcomepage__WEBPACK_IMPORTED_MODULE_2__.makeBio)();
    removeMenu();
    removeContact();
    homeTab = 1;
    menuTab = 0;
    contactTab = 0;
  }
};

const goMenu = () => {
  if (menuTab === 0) {
    removeContact();
    removeWelcome();
    (0,_menu__WEBPACK_IMPORTED_MODULE_3__.default)();
    homeTab = 0;
    menuTab = 1;
    contactTab = 0;
  }
};

const goContact = () => {
  if (contactTab === 0) {
    removeWelcome();
    removeMenu();
    (0,_contact__WEBPACK_IMPORTED_MODULE_5__.makeContact)();
    (0,_contact__WEBPACK_IMPORTED_MODULE_5__.initMap)();
    contactTab = 1;
    menuTab = 0;
    homeTab = 0;
  }
};

document.getElementById("home").addEventListener("click", goHome, false);
document.getElementById("menu").addEventListener("click", goMenu, false);
document.getElementById("contact").addEventListener("click", goContact, false);

document.getElementById("mobileHome").addEventListener("click", goHome, false);
document.getElementById("mobileMenu").addEventListener("click", goMenu, false);
document
  .getElementById("mobileContact")
  .addEventListener("click", goContact, false);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29weXJpZ2h0YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL292ZXJsYXkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3dlbGNvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEOztBQUVsRDtBQUNBLHNCQUFzQixpREFBTzs7QUFFN0I7QUFDQTtBQUNBLDRCQUE0QixpREFBTztBQUNuQyxFQUFFLDhEQUFvQjs7QUFFdEIsMEJBQTBCLGlEQUFPO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQixpREFBTztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEVBQUUsOERBQW9CO0FBQ3RCO0FBQ0EsYUFBYSxnQ0FBZ0M7QUFDN0M7QUFDQSxHQUFHO0FBQ0g7QUFDQSxl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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHFEQUFPO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhDQUFRO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQVc7QUFDZixJQUFJLGlEQUFPO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29udGVudHMsIEVsZW1lbnQgfSBmcm9tIFwiLi93ZWxjb21lcGFnZVwiO1xuXG4vLyBIb3VzZXMgR29vZ2xlIE1hcHNcbmNvbnN0IG1hcEhvbGRlciA9IG5ldyBFbGVtZW50KFwiZGl2XCIsIFwibWFwXCIpO1xuXG4vLyBHZW5lcmF0ZXMgY29udGFjdCBpbmZvcm1hdGlvblxuY29uc3QgbWFrZUNvbnRhY3QgPSBmdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xuICBjb25zdCBjb250YWN0SG9sZGVyID0gbmV3IEVsZW1lbnQoXCJkaXZcIiwgXCJjb250YWN0SG9sZGVyXCIpO1xuICBjb250ZW50cy5hcHBlbmRDaGlsZChjb250YWN0SG9sZGVyLml0ZW0pO1xuXG4gIGNvbnN0IGNvbnRhY3RJbmZvID0gbmV3IEVsZW1lbnQoXCJoMlwiLCBcImNvbnRhY3RJbmZvXCIpO1xuICBjb250YWN0SW5mby5pdGVtLmlubmVySFRNTCA9IGBBZGRyZXNzOjxicj5cbiAgICAzNzUxIFMgU3RvbmVicmlkZ2UgRHIuPGJyLz5cbiAgICBNY2tpbm5leSwgVGV4YXMgNzUwNzA8YnIvPlxuICAgIFBob25lOjxici8+XG4gICAgOTcyLTU0Ny0xNjI4PGJyPlxuICAgIEVtYWlsOiB6ZW5zdXNoaWFuZGdyaWxsQGljbG91ZC5jb21gO1xuICBjb250YWN0SG9sZGVyLml0ZW0uYXBwZW5kQ2hpbGQoY29udGFjdEluZm8uaXRlbSk7XG5cbiAgY29uc3Qgb3BlbmluZ1RpbWVzID0gbmV3IEVsZW1lbnQoXCJoMlwiLCBcIm9wZW5pbmdUaW1lXCIpO1xuICBvcGVuaW5nVGltZXMuaXRlbS5pbm5lckhUTUwgPSBgSG91cnM6PGJyPlxuICAgIFR1ZXMgLSBTYXQ6IDExQU0gLSAxMFBNPGJyLz5cbiAgICBTdW4gJiBNb246IENsb3NlZDxici8+XG4gICAgRHJlc3MgQ29kZTogQ2FzdWFsPGJyLz5cbiAgICBGb3IgUmVzZXJ2YXRpb25zIGFuZCBwYXJ0aWVzIG9mIDcgb3IgbW9yZSw8YnIvPiBwbGVhc2UgY2FsbCA5NzItNTQ3LTE2MjhgO1xuICBjb250YWN0SG9sZGVyLml0ZW0uYXBwZW5kQ2hpbGQob3BlbmluZ1RpbWVzLml0ZW0pO1xufTtcblxubGV0IG1hcDtcblxuZnVuY3Rpb24gaW5pdE1hcCgpIHtcbiAgY29udGVudHMuYXBwZW5kQ2hpbGQobWFwSG9sZGVyLml0ZW0pO1xuICBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFwXCIpLCB7XG4gICAgY2VudGVyOiB7IGxhdDogMzMuMTY4MjcsIGxuZzogLTk2LjcyOTk5IH0sXG4gICAgem9vbTogMTgsXG4gIH0pO1xuICBjb25zdCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICBwb3NpdGlvbjogeyBsYXQ6IDMzLjE2ODI3LCBsbmc6IC05Ni43Mjk5OSB9LFxuICAgIG1hcCxcbiAgfSk7XG59XG5cbmV4cG9ydCB7IG1ha2VDb250YWN0LCBpbml0TWFwIH07XG4iLCJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4vd2VsY29tZXBhZ2VcIjtcblxuLy8gSG91c2VzIGNvcHlyaWdodCBiYXJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29weXJpZ2h0SG9sZGVyXCIpO1xuXG4vLyBHZW5lcmF0ZXMgY29tcGxldGUgY29weXJpZ2h0IGJhclxuY29uc3QgbWFrZUNvcHlyaWdodCA9IGZ1bmN0aW9uIGNyZWF0ZUNvcHlyaWdodCgpIHtcbiAgY29uc3QgY29weXJpZ2h0ID0gbmV3IEVsZW1lbnQoXCJkaXZcIiwgXCJjb3B5cmlnaHRcIik7XG4gIGNvcHlyaWdodC5pdGVtLmNsYXNzTmFtZSA9IFwiY2xlYXJmaXhcIjtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvcHlyaWdodC5pdGVtKTtcblxuICBjb25zdCBjb3B5cmlnaHRUZXh0ID0gbmV3IEVsZW1lbnQoXCJkaXZcIiwgXCJjb3B5cmlnaHRUZXh0XCIpO1xuICBjb3B5cmlnaHRUZXh0Lml0ZW0uY2xhc3NOYW1lcyA9IFwidGV4dCBmbG9hdCBsZWZ0XCI7XG4gIGNvcHlyaWdodC5pdGVtLmFwcGVuZENoaWxkKGNvcHlyaWdodFRleHQuaXRlbSk7XG5cbiAgY29uc3QgY29weXJpZ2h0TGlua3MgPSBuZXcgRWxlbWVudChcInVsXCIsIFwibGlua3NcIik7XG4gIGNvcHlyaWdodExpbmtzLml0ZW0uY2xhc3NOYW1lID0gXCJsaW5rcyBmbG9hdCByaWdodFwiO1xuICBjb3B5cmlnaHQuaXRlbS5hcHBlbmRDaGlsZChjb3B5cmlnaHRMaW5rcy5pdGVtKTtcblxuICBjb25zdCBmYWNlYm9va0ljb24gPSBuZXcgRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBmYWNlYm9va0xpbmsgPSBuZXcgRWxlbWVudChcImFcIik7XG4gIGNvbnN0IGZhY2Vib29rRm9udCA9IG5ldyBFbGVtZW50KFwiaVwiLCBcImZhYiBmYS1mYWNlYm9vay1zcXVhcmVcIik7XG4gIGZhY2Vib29rTGluay5pdGVtLmhyZWYgPSBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9aZW5TdXNoaU1ja2lubmV5L1wiO1xuICBmYWNlYm9va0xpbmsuaXRlbS50YXJnZXQgPSBcIl9ibGFua1wiO1xuICBmYWNlYm9va0xpbmsuaXRlbS5yZWwgPSBcIm5vcmVmZXJyZXIgbm9vcGVuZXJcIjtcblxuICBjb25zdCBvcmRlckljb24gPSBuZXcgRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBvcmRlckxpbmsgPSBuZXcgRWxlbWVudChcImFcIik7XG4gIGNvbnN0IG9yZGVyRm9udCA9IG5ldyBFbGVtZW50KFwiaVwiLCBcImZhcyBmYS11dGVuc2lsc1wiKTtcbiAgb3JkZXJMaW5rLml0ZW0uaHJlZiA9IFwiaHR0cHM6Ly93d3cuemVuc3VzaGlhbmRncmlsbG1ja2lubmV5LmNvbS9cIjtcbiAgb3JkZXJMaW5rLml0ZW0udGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgb3JkZXJMaW5rLml0ZW0ucmVsID0gXCJub3JlZmVycmVyIG5vb3BlbmVyXCI7XG5cbiAgY29uc3QgZ2l0SWNvbiA9IG5ldyBFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGdpdExpbmsgPSBuZXcgRWxlbWVudChcImFcIik7XG4gIGNvbnN0IGdpdEZvbnQgPSBuZXcgRWxlbWVudChcImlcIiwgXCJmYWIgZmEtZ2l0aHViLXNxdWFyZVwiKTtcbiAgZ2l0TGluay5pdGVtLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9KYW1lc2xvNTk5XCI7XG4gIGdpdExpbmsuaXRlbS50YXJnZXQgPSBcIl9ibGFua1wiO1xuICBnaXRMaW5rLml0ZW0ucmVsID0gXCJub3JlZmVycmVyIG5vb3BlbmVyXCI7XG5cbiAgZmFjZWJvb2tMaW5rLml0ZW0uYXBwZW5kQ2hpbGQoZmFjZWJvb2tGb250Lml0ZW0pO1xuICBmYWNlYm9va0ljb24uaXRlbS5hcHBlbmRDaGlsZChmYWNlYm9va0xpbmsuaXRlbSk7XG4gIGNvcHlyaWdodExpbmtzLml0ZW0uYXBwZW5kQ2hpbGQoZmFjZWJvb2tJY29uLml0ZW0pO1xuICBvcmRlckxpbmsuaXRlbS5hcHBlbmRDaGlsZChvcmRlckZvbnQuaXRlbSk7XG4gIG9yZGVySWNvbi5pdGVtLmFwcGVuZENoaWxkKG9yZGVyTGluay5pdGVtKTtcbiAgY29weXJpZ2h0TGlua3MuaXRlbS5hcHBlbmRDaGlsZChvcmRlckljb24uaXRlbSk7XG4gIGdpdExpbmsuaXRlbS5hcHBlbmRDaGlsZChnaXRGb250Lml0ZW0pO1xuICBnaXRJY29uLml0ZW0uYXBwZW5kQ2hpbGQoZ2l0TGluay5pdGVtKTtcbiAgY29weXJpZ2h0TGlua3MuaXRlbS5hcHBlbmRDaGlsZChnaXRJY29uLml0ZW0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFrZUNvcHlyaWdodDtcbiIsImltcG9ydCB7IGNvbnRlbnRzLCBFbGVtZW50IH0gZnJvbSBcIi4vd2VsY29tZXBhZ2VcIjtcblxuY29uc3QgbWFrZU1lbnUgPSBmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICAvLyBIb3VzZXMgbWVudSBpbWFnZXNcbiAgY29uc3QgbWVudUdhbGxlcnkgPSBuZXcgRWxlbWVudChcImRpdlwiLCBcImdhbGxlcnlcIik7XG4gIGNvbnRlbnRzLmFwcGVuZENoaWxkKG1lbnVHYWxsZXJ5Lml0ZW0pO1xuXG4gIC8vIEFsbG93IGltYWdlcyB0byBiZSBwcmVzZW50ZWQgZnVsbCBzY3JlZW4gd2hlbiBjbGlja2VkXG4gIGNvbnN0IGRpc3BsYXlNb2RhbCA9IGZ1bmN0aW9uIGFwcGVuZE1vZGFsKCkge1xuICAgIGNvbnN0IHNyYyA9IHRoaXMuZ2V0QXR0cmlidXRlKFwic3JjXCIpO1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbENvbnRhaW5lclwiKTtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7c3JjfSlgO1xuICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmRTaXplID0gXCJjb250YWluXCI7XG4gICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9IFwibm8tcmVwZWF0XCI7XG4gICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gXCJjZW50ZXJcIjtcbiAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwwLDAsMC40KVwiO1xuICAgIGNvbnRlbnRzLmFwcGVuZENoaWxkKG1vZGFsKTtcblxuICAgIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gZXhpdE1vZGFsKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBtb2RhbCkge1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvLyBHZW5lcmF0ZXMgbWVudSBpbWFnZXNcbiAgbGV0IGltYWdlO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSA4OyBpICs9IDEpIHtcbiAgICBpbWFnZSA9IG5ldyBFbGVtZW50KFwiaW1nXCIsIFwibWVudUltYWdlXCIpO1xuICAgIGltYWdlLml0ZW0uc3JjID0gYGltYWdlcy9tZW51JHtpfS5qcGdgO1xuICAgIGltYWdlLml0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlNb2RhbCk7XG4gICAgbWVudUdhbGxlcnkuaXRlbS5hcHBlbmRDaGlsZChpbWFnZS5pdGVtKTtcbiAgfVxuXG4gIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gbmV3IEVsZW1lbnQoXCJkaXZcIiwgXCJtb2RhbENvbnRhaW5lclwiKTtcbiAgY29udGVudHMuYXBwZW5kQ2hpbGQobW9kYWxDb250YWluZXIuaXRlbSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYWtlTWVudTtcbiIsImltcG9ydCB7IGNvbnRlbnRzLCBFbGVtZW50IH0gZnJvbSBcIi4vd2VsY29tZXBhZ2VcIjtcblxuLy8gR2VuZXJhdGVzIGZ1bGwgbmF2aWdhdGlvbiBiYXJcbmNvbnN0IG1ha2VOYXZCYXIgPSBmdW5jdGlvbiBjcmVhdGVOYXZiYXIoKSB7XG4gIGNvbnN0IG5hdmJhciA9IG5ldyBFbGVtZW50KFwidWxcIiwgXCJuYXZcIik7XG4gIGNvbnRlbnRzLmFwcGVuZENoaWxkKG5hdmJhci5pdGVtKTtcblxuICBjb25zdCBuYXZiYXJUZXh0ID0gbmV3IEVsZW1lbnQoXCJkaXZcIiwgXCJ0aXRsZVwiKTtcbiAgbmF2YmFyVGV4dC5pdGVtLmlubmVySFRNTCA9IFwiWmVuIFN1c2hpICYgR3JpbGxcIjtcbiAgbmF2YmFyLml0ZW0uYXBwZW5kQ2hpbGQobmF2YmFyVGV4dC5pdGVtKTtcblxuICBjb25zdCBob21lQnV0dG9uID0gbmV3IEVsZW1lbnQoXCJsaVwiLCBcImhvbWVcIik7XG4gIGNvbnN0IGFIb21lID0gbmV3IEVsZW1lbnQoXCJhXCIpO1xuICBhSG9tZS5pdGVtLmlubmVySFRNTCA9IFwiSG9tZVwiO1xuICBhSG9tZS5pdGVtLmhyZWYgPSBcIiNcIjtcbiAgaG9tZUJ1dHRvbi5pdGVtLmFwcGVuZENoaWxkKGFIb21lLml0ZW0pO1xuICBuYXZiYXIuaXRlbS5hcHBlbmRDaGlsZChob21lQnV0dG9uLml0ZW0pO1xuXG4gIGNvbnN0IG1lbnVCdXR0b24gPSBuZXcgRWxlbWVudChcImxpXCIsIFwibWVudVwiKTtcbiAgY29uc3QgYU1lbnUgPSBuZXcgRWxlbWVudChcImFcIik7XG4gIGFNZW51Lml0ZW0uaW5uZXJIVE1MID0gXCJNZW51XCI7XG4gIGFNZW51Lml0ZW0uaHJlZiA9IFwiI1wiO1xuICBtZW51QnV0dG9uLml0ZW0uYXBwZW5kQ2hpbGQoYU1lbnUuaXRlbSk7XG4gIG5hdmJhci5pdGVtLmFwcGVuZENoaWxkKG1lbnVCdXR0b24uaXRlbSk7XG5cbiAgY29uc3Qgb3JkZXJCdXR0b24gPSBuZXcgRWxlbWVudChcImxpXCIsIFwib3JkZXJcIik7XG4gIGNvbnN0IGFuT3JkZXIgPSBuZXcgRWxlbWVudChcImFcIik7XG4gIGFuT3JkZXIuaXRlbS5pbm5lckhUTUwgPSBcIk9yZGVyIEhlcmVcIjtcbiAgYW5PcmRlci5pdGVtLmhyZWYgPSBcImh0dHBzOi8vd3d3LnplbnN1c2hpYW5kZ3JpbGxtY2tpbm5leS5jb20vXCI7XG4gIGFuT3JkZXIuaXRlbS50YXJnZXQgPSBcIl9ibGFua1wiO1xuICBhbk9yZGVyLml0ZW0ucmVsID0gXCJub3JlZmVycmVyIG5vb3BlbmVyXCI7XG4gIG9yZGVyQnV0dG9uLml0ZW0uYXBwZW5kQ2hpbGQoYW5PcmRlci5pdGVtKTtcbiAgbmF2YmFyLml0ZW0uYXBwZW5kQ2hpbGQob3JkZXJCdXR0b24uaXRlbSk7XG5cbiAgY29uc3QgY29udGFjdEJ1dHRvbiA9IG5ldyBFbGVtZW50KFwibGlcIiwgXCJjb250YWN0XCIpO1xuICBjb25zdCBhQ29udGFjdCA9IG5ldyBFbGVtZW50KFwiYVwiKTtcbiAgYUNvbnRhY3QuaXRlbS5pbm5lckhUTUwgPSBcIkNvbnRhY3QgVXNcIjtcbiAgYUNvbnRhY3QuaXRlbS5ocmVmID0gXCIjXCI7XG4gIGNvbnRhY3RCdXR0b24uaXRlbS5hcHBlbmRDaGlsZChhQ29udGFjdC5pdGVtKTtcbiAgbmF2YmFyLml0ZW0uYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbi5pdGVtKTtcbn07XG5cbi8vIEdlbmVyYXRlcyBMb2dvXG5jb25zdCBtYWtlTG9nbyA9IGZ1bmN0aW9uIGNyZWF0ZUxvZ28oKSB7XG4gIGNvbnN0IGxvZ28gPSBuZXcgRWxlbWVudChcImltZ1wiLCBcImxvZ29cIik7XG4gIGNvbnN0IGFMb2dvID0gbmV3IEVsZW1lbnQoXCJhXCIpO1xuICBhTG9nby5pdGVtLmhyZWYgPSBcIlwiO1xuICBhTG9nby5pdGVtLmFwcGVuZENoaWxkKGxvZ28uaXRlbSk7XG4gIGxvZ28uaXRlbS5zcmMgPSBcImltYWdlcy9EYXJ1bWEucG5nXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nb0hvbGRlclwiKS5hcHBlbmRDaGlsZChhTG9nby5pdGVtKTtcbn07XG5cbi8vIEdlbmVyYXRlcyBoYW1idXJnZXIgaWNvbiBmb3IgbW9iaWxlIGRldmljZXNcbmNvbnN0IG1ha2VIYW1idXJnZXIgPSBmdW5jdGlvbiBjcmVhdGVIYW1idXJnZXIoKSB7XG4gIGNvbnN0IGhhbWJ1cmdlciA9IG5ldyBFbGVtZW50KFwiaW1nXCIsIFwiaGFtYnVyZ2VyXCIpO1xuICBjb25zdCBhSGFtYnVyZ2VyID0gbmV3IEVsZW1lbnQoXCJhXCIpO1xuICBhSGFtYnVyZ2VyLml0ZW0uaHJlZiA9IFwiXCI7XG4gIGFIYW1idXJnZXIuaXRlbS5hcHBlbmRDaGlsZChoYW1idXJnZXIuaXRlbSk7XG4gIGhhbWJ1cmdlci5pdGVtLnNyYyA9IFwiaW1hZ2VzL2hhbWJ1cmdlci1pY29uLnBuZ1wiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ29Ib2xkZXJcIikuYXBwZW5kQ2hpbGQoYUhhbWJ1cmdlci5pdGVtKTtcbn07XG5cbmV4cG9ydCB7IEVsZW1lbnQsIG1ha2VOYXZCYXIsIG1ha2VMb2dvLCBtYWtlSGFtYnVyZ2VyIH07XG4iLCJpbXBvcnQgeyBFbGVtZW50LCBjb250ZW50cyB9IGZyb20gXCIuL3dlbGNvbWVwYWdlXCI7XG5cbi8vIEdlbmVyYXRlcyBtZW51IG92ZXJsYXkgZm9yIG1vYmlsZSBkZXZpY2VzXG5jb25zdCBtYWtlT3ZlcmxheSA9IGZ1bmN0aW9uIGNyZWF0ZU92ZXJsYXkoKSB7XG4gIGNvbnN0IG92ZXJsYXkgPSBuZXcgRWxlbWVudChcImRpdlwiLCBcIm92ZXJsYXlcIik7XG4gIGNvbnRlbnRzLmFwcGVuZENoaWxkKG92ZXJsYXkuaXRlbSk7XG5cbiAgY29uc3QgY2xvc2UgPSBuZXcgRWxlbWVudChcImltZ1wiLCBcImNsb3NlXCIpO1xuICBjb25zdCBhQ2xvc2UgPSBuZXcgRWxlbWVudChcImFcIik7XG4gIGFDbG9zZS5pdGVtLmhyZWYgPSBcIlwiO1xuICBhQ2xvc2UuaXRlbS5hcHBlbmRDaGlsZChjbG9zZS5pdGVtKTtcbiAgY2xvc2UuaXRlbS5zcmMgPSBcImltYWdlcy9jbG9zZS1pY29uLnBuZ1wiO1xuICBvdmVybGF5Lml0ZW0uYXBwZW5kQ2hpbGQoYUNsb3NlLml0ZW0pO1xuXG4gIGNvbnN0IG92ZXJsYXlMaXN0ID0gbmV3IEVsZW1lbnQoXCJ1bFwiLCBcIm92ZXJsYXlMaXN0XCIpO1xuICBvdmVybGF5Lml0ZW0uYXBwZW5kQ2hpbGQob3ZlcmxheUxpc3QuaXRlbSk7XG5cbiAgY29uc3QgaG9tZUJ1dHRvbiA9IG5ldyBFbGVtZW50KFwibGlcIiwgXCJtb2JpbGVIb21lXCIpO1xuICBjb25zdCBhSG9tZSA9IG5ldyBFbGVtZW50KFwiYVwiKTtcbiAgYUhvbWUuaXRlbS5pbm5lckhUTUwgPSBcIkhvbWVcIjtcbiAgYUhvbWUuaXRlbS5ocmVmID0gXCIjXCI7XG4gIGhvbWVCdXR0b24uaXRlbS5hcHBlbmRDaGlsZChhSG9tZS5pdGVtKTtcbiAgb3ZlcmxheUxpc3QuaXRlbS5hcHBlbmRDaGlsZChob21lQnV0dG9uLml0ZW0pO1xuXG4gIGNvbnN0IG1lbnVCdXR0b24gPSBuZXcgRWxlbWVudChcImxpXCIsIFwibW9iaWxlTWVudVwiKTtcbiAgY29uc3QgYU1lbnUgPSBuZXcgRWxlbWVudChcImFcIik7XG4gIGFNZW51Lml0ZW0uaW5uZXJIVE1MID0gXCJNZW51XCI7XG4gIGFNZW51Lml0ZW0uaHJlZiA9IFwiI1wiO1xuICBtZW51QnV0dG9uLml0ZW0uYXBwZW5kQ2hpbGQoYU1lbnUuaXRlbSk7XG4gIG92ZXJsYXlMaXN0Lml0ZW0uYXBwZW5kQ2hpbGQobWVudUJ1dHRvbi5pdGVtKTtcblxuICBjb25zdCBvcmRlckJ1dHRvbiA9IG5ldyBFbGVtZW50KFwibGlcIiwgXCJvcmRlclwiKTtcbiAgY29uc3QgYW5PcmRlciA9IG5ldyBFbGVtZW50KFwiYVwiKTtcbiAgYW5PcmRlci5pdGVtLmlubmVySFRNTCA9IFwiT3JkZXIgSGVyZVwiO1xuICBhbk9yZGVyLml0ZW0uaHJlZiA9IFwiaHR0cHM6Ly93d3cuemVuc3VzaGlhbmRncmlsbG1ja2lubmV5LmNvbS9cIjtcbiAgYW5PcmRlci5pdGVtLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gIGFuT3JkZXIuaXRlbS5yZWwgPSBcIm5vcmVmZXJyZXIgbm9vcGVuZXJcIjtcbiAgb3JkZXJCdXR0b24uaXRlbS5hcHBlbmRDaGlsZChhbk9yZGVyLml0ZW0pO1xuICBvdmVybGF5TGlzdC5pdGVtLmFwcGVuZENoaWxkKG9yZGVyQnV0dG9uLml0ZW0pO1xuXG4gIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBuZXcgRWxlbWVudChcImxpXCIsIFwibW9iaWxlQ29udGFjdFwiKTtcbiAgY29uc3QgYUNvbnRhY3QgPSBuZXcgRWxlbWVudChcImFcIik7XG4gIGFDb250YWN0Lml0ZW0uaW5uZXJIVE1MID0gXCJDb250YWN0IFVzXCI7XG4gIGFDb250YWN0Lml0ZW0uaHJlZiA9IFwiI1wiO1xuICBjb250YWN0QnV0dG9uLml0ZW0uYXBwZW5kQ2hpbGQoYUNvbnRhY3QuaXRlbSk7XG4gIG92ZXJsYXlMaXN0Lml0ZW0uYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbi5pdGVtKTtcbn07XG5cbi8vIHNob3dzIG92ZXJsYXkgb24gY2xpY2tcbmNvbnN0IHNob3dPdmVybGF5ID0gKCkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhhbWJ1cmdlclwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIikuc3R5bGUuYW5pbWF0aW9uID0gXCJmYWRlSW4gMXNcIjtcbiAgfSk7XG59O1xuXG4vLyBIaWRlcyBvdmVybGF5IG9uIGNsaWNrXG5jb25zdCBoaWRlT3ZlcmxheSA9ICgpID0+IHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSwgNTAwKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIikuc3R5bGUuYW5pbWF0aW9uID0gXCJmYWRlT3V0IDAuNXNcIjtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBtYWtlT3ZlcmxheSwgc2hvd092ZXJsYXksIGhpZGVPdmVybGF5IH07XG4iLCJjb25zdCBjb250ZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuLy8gQ29uc3RydWN0b3IgZm9yIGNyZWF0aW5nIERPTSBlbGVtZW50c1xuY29uc3QgRWxlbWVudCA9IGZ1bmN0aW9uIG1ha2VFbGVtZW50KGl0ZW0sIGNsYXNzTmFtZSkge1xuICB0aGlzLml0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0ZW0pO1xuICB0aGlzLml0ZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgY2xhc3NOYW1lKTtcbiAgdGhpcy5pdGVtLnNldEF0dHJpYnV0ZShcImlkXCIsIGNsYXNzTmFtZSk7XG59O1xuXG4vLyBHZW5lcmF0ZXMgcmVzdGF1cmFudCBiaW9ncmFwaHlcbmNvbnN0IG1ha2VCaW8gPSAoKSA9PiB7XG4gIGNvbnN0IGJpb2dyYXBoeSA9IG5ldyBFbGVtZW50KFwiaDJcIiwgXCJiaW9ncmFwaHlcIik7XG4gIGJpb2dyYXBoeS5pdGVtLmlubmVySFRNTCA9IGBXZSBzcGVjaWFsaXplIGluIGRlbGljaW91cyBKYXBhbmVzZSBjdWlzaW5lIFxuICAgIGZyb20gZnJlc2ggc3VzaGkgd2l0aCBhIHZhcmlldHkgb2Ygc3BlY2lhbCBmaXNoLCBcbiAgICB0byBoaWJhY2hpIGVudHJlZXMgZ3JpbGxlZCB0byBwZXJmZWN0aW9uIGluIHRoZSBraXRjaGVuLiA8YnIvPjxici8+XG4gICAgQ2hlZi1Pd25lciBDaGllbiAoSmFjaykgd2l0aCBvdmVyIDI3IHllYXJzIG9mIGV4cGVyaWVuY2UgYW5kIHdobyBwcmV2aW91c2x5IG93bmVkIFwiS2lyYWt1IEphcGFuZXNlIFJlc3RhdXJhbnRcIiBpbiBIb3VzdG9uLCBUZXhhcy4gSGUgdHJpZXMgaGlzIGJlc3QgdG8gcHJvdmlkZSBhIGN1c3RvbWl6ZWQgZXhwZXJpZW5jZSBmb3IgZXZlcnkgY3VzdG9tZXIgYW5kIHRyZWF0cyB0aGVtIGxpa2UgaGlzIG93biBmYW1pbHkuIDxici8+PGJyLz5cbiAgICBIZWFkIFN1c2hpIENoZWYgS2l0YW11cmEgd2FzIHByZXZpb3VzbHkgdGhlIGhlYWQgY2hlZiBvZiBKaW5iZWkgSmFwYW5lc2UgUmVzdGF1cmFudCBhbmQgaGFzIG92ZXIgNDIgeWVhcnMgb2YgZXhwZXJpZW5jZSB3b3JraW5nIGluIEphcGFuLCBIYXdhaWkgYW5kIE5ldyBZb3JrLiBLaXRhbXVyYS1zYW4gZm9jdXNlcyBoZWF2aWx5IG9uIGVuc3VyaW5nIHRoZSBxdWFsaXR5IGFuZCBzdGFuZGFyZHMgb2Ygb3VyIHN1c2hpIGFyZSBvZiB0aGUgaGlnaGVzdCBvcmRlci4gRm9yIHRoaXMgcmVhc29uLCBoZSBjYW4gYmUgc2VlbiBhcyBtb3JlIHNoeSBkdXJpbmcgc2VydmljZS48YnIvPjxici8+XG5cdEhlYWQgS2l0Y2hlbiBDaGVmIENhbmRpZG8gd2l0aCAzMCB5ZWFycyBleHBlcmllbmNlIHdvcmtpbmcgaW4gdGVwcGFueWFraSByZXN0YXVyYW50cyBzdWNoIGFzIEJlbmloYW5hLCB1c2VzIGhpcyBrbm93bGVkZ2UgdG8gcHJvdmlkZSBmb29kIGdyaWxsZWQgdG8gcGVyZmVjdGlvbi5gO1xuICBjb250ZW50cy5hcHBlbmRDaGlsZChiaW9ncmFwaHkuaXRlbSk7XG59O1xuXG4vLyBHZW5lcmF0ZXMgc2l4IGltYWdlcyBpbiBhIGdyaWQgdGhhdCBjYW4gYmUgc2V0IGZ1bGxzY3JlZW4gd2hlbiBjbGlja2VkXG5jb25zdCBtYWtlSW1hZ2UgPSBmdW5jdGlvbiBjcmVhdGVJbWFnZSgpIHtcbiAgLy8gQWxsb3cgaW1hZ2VzIHRvIGJlIHByZXNlbnRlZCBmdWxsIHNjcmVlbiB3aGVuIGNsaWNrZWRcbiAgY29uc3QgbW9kYWxDb250YWluZXIgPSBuZXcgRWxlbWVudChcImRpdlwiLCBcIm1vZGFsQ29udGFpbmVyXCIpO1xuICBjb250ZW50cy5hcHBlbmRDaGlsZChtb2RhbENvbnRhaW5lci5pdGVtKTtcblxuICBjb25zdCBkaXNwbGF5TW9kYWwgPSBmdW5jdGlvbiBhcHBlbmRNb2RhbCgpIHtcbiAgICBjb25zdCBzcmMgPSB0aGlzLmdldEF0dHJpYnV0ZShcInNyY1wiKTtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxDb250YWluZXJcIik7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke3NyY30pYDtcbiAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiY29udGFpblwiO1xuICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPSBcIm5vLXJlcGVhdFwiO1xuICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IFwiY2VudGVyXCI7XG4gICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsMCwwLDAuNClcIjtcbiAgICBjb250ZW50cy5hcHBlbmRDaGlsZChtb2RhbCk7XG5cbiAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uIGV4aXRNb2RhbChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWwpIHtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfVxuICAgIH07XG4gIH07XG4gIC8vIEdlbmVyYXRlcyBpbWFnZXNcbiAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBuZXcgRWxlbWVudChcImRpdlwiLCBcImltYWdlQ29udGFpbmVyXCIpO1xuICBsZXQgaW1hZ2U7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDY7IGkgKz0gMSkge1xuICAgIGltYWdlID0gbmV3IEVsZW1lbnQoXCJpbWdcIiwgXCJiYW5uZXJJbWFnZVwiKTtcbiAgICBpbWFnZS5pdGVtLnNyYyA9IGBpbWFnZXMvU3VzaGlCb2F0JHtpfS5qcGdgO1xuICAgIGltYWdlLml0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlNb2RhbCk7XG4gICAgaW1hZ2VDb250YWluZXIuaXRlbS5hcHBlbmRDaGlsZChpbWFnZS5pdGVtKTtcbiAgfVxuICBjb250ZW50cy5hcHBlbmRDaGlsZChpbWFnZUNvbnRhaW5lci5pdGVtKTtcbn07XG5cbmV4cG9ydCB7IGNvbnRlbnRzLCBFbGVtZW50LCBtYWtlSW1hZ2UsIG1ha2VCaW8gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbWFrZU5hdkJhciwgbWFrZUxvZ28sIG1ha2VIYW1idXJnZXIgfSBmcm9tIFwiLi9uYXZiYXJcIjtcbmltcG9ydCB7IGhpZGVPdmVybGF5LCBtYWtlT3ZlcmxheSwgc2hvd092ZXJsYXkgfSBmcm9tIFwiLi9vdmVybGF5XCI7XG5pbXBvcnQgeyBtYWtlSW1hZ2UsIG1ha2VCaW8gfSBmcm9tIFwiLi93ZWxjb21lcGFnZVwiO1xuaW1wb3J0IG1ha2VNZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBtYWtlQ29weXJpZ2h0IGZyb20gXCIuL2NvcHlyaWdodGJhclwiO1xuaW1wb3J0IHsgbWFrZUNvbnRhY3QsIGluaXRNYXAgfSBmcm9tIFwiLi9jb250YWN0XCI7XG5cbmNvbnN0IGdlbmVyYXRlUGFnZSA9ICgpID0+IHtcbiAgbWFrZU92ZXJsYXkoKTtcbiAgbWFrZU5hdkJhcigpO1xuICBtYWtlTG9nbygpO1xuICBtYWtlSGFtYnVyZ2VyKCk7XG4gIG1ha2VJbWFnZSgpO1xuICBtYWtlQmlvKCk7XG4gIG1ha2VDb3B5cmlnaHQoKTtcbiAgc2hvd092ZXJsYXkoKTtcbiAgaGlkZU92ZXJsYXkoKTtcbn07XG5nZW5lcmF0ZVBhZ2UoKTtcblxubGV0IGhvbWVUYWIgPSAxO1xubGV0IG1lbnVUYWIgPSAwO1xubGV0IGNvbnRhY3RUYWIgPSAwO1xuXG5jb25zdCByZW1vdmVXZWxjb21lID0gKCkgPT4ge1xuICBpZiAoZG9jdW1lbnQuY29udGFpbnMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiaW9ncmFwaHlcIikpKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiaW9ncmFwaHlcIikucmVtb3ZlKCk7XG4gIH1cbn07XG5cbmNvbnN0IHJlbW92ZU1lbnUgPSAoKSA9PiB7XG4gIGlmIChkb2N1bWVudC5jb250YWlucyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbGxlcnlcIikpKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYWxsZXJ5XCIpLnJlbW92ZSgpO1xuICB9XG59O1xuXG5jb25zdCByZW1vdmVDb250YWN0ID0gKCkgPT4ge1xuICBpZiAoZG9jdW1lbnQuY29udGFpbnMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0SG9sZGVyXCIpKSkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdEhvbGRlclwiKS5yZW1vdmUoKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFwiKS5yZW1vdmUoKTtcbiAgfVxufTtcblxuY29uc3QgZ29Ib21lID0gKCkgPT4ge1xuICBpZiAoaG9tZVRhYiA9PT0gMCkge1xuICAgIG1ha2VCaW8oKTtcbiAgICByZW1vdmVNZW51KCk7XG4gICAgcmVtb3ZlQ29udGFjdCgpO1xuICAgIGhvbWVUYWIgPSAxO1xuICAgIG1lbnVUYWIgPSAwO1xuICAgIGNvbnRhY3RUYWIgPSAwO1xuICB9XG59O1xuXG5jb25zdCBnb01lbnUgPSAoKSA9PiB7XG4gIGlmIChtZW51VGFiID09PSAwKSB7XG4gICAgcmVtb3ZlQ29udGFjdCgpO1xuICAgIHJlbW92ZVdlbGNvbWUoKTtcbiAgICBtYWtlTWVudSgpO1xuICAgIGhvbWVUYWIgPSAwO1xuICAgIG1lbnVUYWIgPSAxO1xuICAgIGNvbnRhY3RUYWIgPSAwO1xuICB9XG59O1xuXG5jb25zdCBnb0NvbnRhY3QgPSAoKSA9PiB7XG4gIGlmIChjb250YWN0VGFiID09PSAwKSB7XG4gICAgcmVtb3ZlV2VsY29tZSgpO1xuICAgIHJlbW92ZU1lbnUoKTtcbiAgICBtYWtlQ29udGFjdCgpO1xuICAgIGluaXRNYXAoKTtcbiAgICBjb250YWN0VGFiID0gMTtcbiAgICBtZW51VGFiID0gMDtcbiAgICBob21lVGFiID0gMDtcbiAgfVxufTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnb0hvbWUsIGZhbHNlKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ29NZW51LCBmYWxzZSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3RcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvQ29udGFjdCwgZmFsc2UpO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vYmlsZUhvbWVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvSG9tZSwgZmFsc2UpO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2JpbGVNZW51XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnb01lbnUsIGZhbHNlKTtcbmRvY3VtZW50XG4gIC5nZXRFbGVtZW50QnlJZChcIm1vYmlsZUNvbnRhY3RcIilcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnb0NvbnRhY3QsIGZhbHNlKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=