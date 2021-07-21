/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/contact.js":
      /*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ makeContact: () => /* binding */ makeContact,
          /* harmony export */ initMap: () => /* binding */ initMap,
          /* harmony export */
        });
        /* harmony import */ var _welcomepage__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./welcomepage */ "./src/welcomepage.js");

        // Houses Google Maps
        const mapHolder = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
          "div",
          "map"
        );

        // Generates contact information
        const makeContact = function createContact() {
          const contactHolder =
            new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
              "div",
              "contactHolder"
            );
          _welcomepage__WEBPACK_IMPORTED_MODULE_0__.contents.appendChild(
            contactHolder.item
          );

          const contactInfo =
            new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
              "h2",
              "contactInfo"
            );
          contactInfo.item.innerHTML = `Address:<br>
    3751 S Stonebridge Dr.<br/>
    Mckinney, Texas 75070<br/>
    Phone:<br/>
    972-547-1628<br>
    Email: zensushiandgrill@icloud.com`;
          contactHolder.item.appendChild(contactInfo.item);

          const openingTimes =
            new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
              "h2",
              "openingTime"
            );
          openingTimes.item.innerHTML = `Hours:<br>
    Tues - Sat: 11AM - 10PM<br/>
    Sun & Mon: Closed<br/>
    Dress Code: Casual<br/>
    For Reservations and parties of 7 or more,<br/> please call 972-547-1628`;
          contactHolder.item.appendChild(openingTimes.item);
        };

        let map;

        function initMap() {
          _welcomepage__WEBPACK_IMPORTED_MODULE_0__.contents.appendChild(
            mapHolder.item
          );
          map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: 33.16827, lng: -96.72999 },
            zoom: 18,
          });
          const marker = new google.maps.Marker({
            position: { lat: 33.16827, lng: -96.72999 },
            map,
          });
        }

        /***/
      },

    /***/ "./src/copyrightbar.js":
      /*!*****************************!*\
  !*** ./src/copyrightbar.js ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _welcomepage__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./welcomepage */ "./src/welcomepage.js");

        // Houses copyright bar
        const container = document.getElementById("copyrightHolder");

        // Generates complete copyright bar
        const makeCopyright = function createCopyright() {
          const copyright =
            new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
              "div",
              "copyright"
            );
          copyright.item.className = "clearfix";
          container.appendChild(copyright.item);

          const copyrightText =
            new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
              "div",
              "copyrightText"
            );
          copyrightText.item.classNames = "text float left";
          copyright.item.appendChild(copyrightText.item);

          const copyrightLinks =
            new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
              "ul",
              "links"
            );
          copyrightLinks.item.className = "links float right";
          copyright.item.appendChild(copyrightLinks.item);

          const facebookIcon =
            new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("li");
          const facebookLink =
            new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("a");
          const facebookFont =
            new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
              "i",
              "fab fa-facebook-square"
            );
          facebookLink.item.href = "https://www.facebook.com/ZenSushiMckinney/";
          facebookLink.item.target = "_blank";
          facebookLink.item.rel = "noreferrer noopener";

          const orderIcon =
            new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("li");
          const orderLink =
            new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("a");
          const orderFont =
            new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
              "i",
              "fas fa-utensils"
            );
          orderLink.item.href = "https://www.zensushiandgrillmckinney.com/";
          orderLink.item.target = "_blank";
          orderLink.item.rel = "noreferrer noopener";

          const gitIcon = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
            "li"
          );
          const gitLink = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
            "a"
          );
          const gitFont = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
            "i",
            "fab fa-github-square"
          );
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

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          makeCopyright;

        /***/
      },

    /***/ "./src/menu.js":
      /*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _welcomepage__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./welcomepage */ "./src/welcomepage.js");

        const makeMenu = function createMenu() {
          // Houses menu images
          const menuGallery =
            new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
              "div",
              "gallery"
            );
          _welcomepage__WEBPACK_IMPORTED_MODULE_0__.contents.appendChild(
            menuGallery.item
          );

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
            _welcomepage__WEBPACK_IMPORTED_MODULE_0__.contents.appendChild(
              modal
            );

            window.onclick = function exitModal(event) {
              if (event.target === modal) {
                modal.style.display = "none";
              }
            };
          };

          // Generates menu images
          let image;
          for (let i = 1; i <= 8; i += 1) {
            image = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
              "img",
              "menuImage"
            );
            image.item.src = `images/menu${i}.jpg`;
            image.item.addEventListener("click", displayModal);
            menuGallery.item.appendChild(image.item);
          }

          const modalContainer =
            new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
              "div",
              "modalContainer"
            );
          _welcomepage__WEBPACK_IMPORTED_MODULE_0__.contents.appendChild(
            modalContainer.item
          );
        };

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          makeMenu;

        /***/
      },

    /***/ "./src/navbar.js":
      /*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Element: () =>
            /* reexport safe */ _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element,
          /* harmony export */ makeNavBar: () => /* binding */ makeNavBar,
          /* harmony export */ makeLogo: () => /* binding */ makeLogo,
          /* harmony export */ makeHamburger: () => /* binding */ makeHamburger,
          /* harmony export */
        });
        /* harmony import */ var _welcomepage__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./welcomepage */ "./src/welcomepage.js");

        // Generates full navigation bar
        const makeNavBar = function createNavbar() {
          const navbar = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
            "ul",
            "nav"
          );
          _welcomepage__WEBPACK_IMPORTED_MODULE_0__.contents.appendChild(
            navbar.item
          );

          const navbarText =
            new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
              "div",
              "title"
            );
          navbarText.item.innerHTML = "Zen Sushi & Grill";
          navbar.item.appendChild(navbarText.item);

          const homeButton =
            new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("li", "home");
          const aHome = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
            "a"
          );
          aHome.item.innerHTML = "Home";
          aHome.item.href = "#";
          homeButton.item.appendChild(aHome.item);
          navbar.item.appendChild(homeButton.item);

          const menuButton =
            new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("li", "menu");
          const aMenu = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
            "a"
          );
          aMenu.item.innerHTML = "Menu";
          aMenu.item.href = "#";
          menuButton.item.appendChild(aMenu.item);
          navbar.item.appendChild(menuButton.item);

          const orderButton =
            new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
              "li",
              "order"
            );
          const anOrder = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
            "a"
          );
          anOrder.item.innerHTML = "Order Here";
          anOrder.item.href = "https://www.zensushiandgrillmckinney.com/";
          anOrder.item.target = "_blank";
          anOrder.item.rel = "noreferrer noopener";
          orderButton.item.appendChild(anOrder.item);
          navbar.item.appendChild(orderButton.item);

          const contactButton =
            new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
              "li",
              "contact"
            );
          const aContact =
            new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("a");
          aContact.item.innerHTML = "Contact Us";
          aContact.item.href = "#";
          contactButton.item.appendChild(aContact.item);
          navbar.item.appendChild(contactButton.item);
        };

        // Generates Logo
        const makeLogo = function createLogo() {
          const logo = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
            "img",
            "logo"
          );
          const aLogo = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
            "a"
          );
          aLogo.item.href = "";
          aLogo.item.appendChild(logo.item);
          logo.item.src = "images/Daruma.png";
          document.getElementById("logoHolder").appendChild(aLogo.item);
        };

        // Generates hamburger icon for mobile devices
        const makeHamburger = function createHamburger() {
          const hamburger =
            new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
              "img",
              "hamburger"
            );
          const aHamburger =
            new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("a");
          aHamburger.item.href = "";
          aHamburger.item.appendChild(hamburger.item);
          hamburger.item.src = "images/hamburger-icon.png";
          document.getElementById("logoHolder").appendChild(aHamburger.item);
        };

        /***/
      },

    /***/ "./src/overlay.js":
      /*!************************!*\
  !*** ./src/overlay.js ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ makeOverlay: () => /* binding */ makeOverlay,
          /* harmony export */ showOverlay: () => /* binding */ showOverlay,
          /* harmony export */ hideOverlay: () => /* binding */ hideOverlay,
          /* harmony export */
        });
        /* harmony import */ var _welcomepage__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./welcomepage */ "./src/welcomepage.js");

        // Generates menu overlay for mobile devices
        const makeOverlay = function createOverlay() {
          const overlay = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
            "div",
            "overlay"
          );
          _welcomepage__WEBPACK_IMPORTED_MODULE_0__.contents.appendChild(
            overlay.item
          );

          const close = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
            "img",
            "close"
          );
          const aClose = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
            "a"
          );
          aClose.item.href = "";
          aClose.item.appendChild(close.item);
          close.item.src = "images/close-icon.png";
          overlay.item.appendChild(aClose.item);

          const overlayList =
            new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
              "ul",
              "overlayList"
            );
          overlay.item.appendChild(overlayList.item);

          const homeButton =
            new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
              "li",
              "mobileHome"
            );
          const aHome = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
            "a"
          );
          aHome.item.innerHTML = "Home";
          aHome.item.href = "#";
          homeButton.item.appendChild(aHome.item);
          overlayList.item.appendChild(homeButton.item);

          const menuButton =
            new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
              "li",
              "mobileMenu"
            );
          const aMenu = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
            "a"
          );
          aMenu.item.innerHTML = "Menu";
          aMenu.item.href = "#";
          menuButton.item.appendChild(aMenu.item);
          overlayList.item.appendChild(menuButton.item);

          const orderButton =
            new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
              "li",
              "order"
            );
          const anOrder = new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
            "a"
          );
          anOrder.item.innerHTML = "Order Here";
          anOrder.item.href = "https://www.zensushiandgrillmckinney.com/";
          anOrder.item.target = "_blank";
          anOrder.item.rel = "noreferrer noopener";
          orderButton.item.appendChild(anOrder.item);
          overlayList.item.appendChild(orderButton.item);

          const contactButton =
            new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element(
              "li",
              "mobileContact"
            );
          const aContact =
            new _welcomepage__WEBPACK_IMPORTED_MODULE_0__.Element("a");
          aContact.item.innerHTML = "Contact Us";
          aContact.item.href = "#";
          contactButton.item.appendChild(aContact.item);
          overlayList.item.appendChild(contactButton.item);
        };

        // shows overlay on click
        const showOverlay = () => {
          document
            .getElementById("hamburger")
            .addEventListener("click", (event) => {
              event.preventDefault();
              document.getElementById("overlay").style.display = "block";
              document.getElementById("overlay").style.animation = "fadeIn 1s";
            });
        };

        // Hides overlay on click
        const hideOverlay = () => {
          document
            .getElementById("close")
            .addEventListener("click", (event) => {
              event.preventDefault();
              setTimeout(() => {
                document.getElementById("overlay").style.display = "none";
              }, 500);
              document.getElementById("overlay").style.animation =
                "fadeOut 0.5s";
            });
        };

        /***/
      },

    /***/ "./src/welcomepage.js":
      /*!****************************!*\
  !*** ./src/welcomepage.js ***!
  \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ contents: () => /* binding */ contents,
          /* harmony export */ Element: () => /* binding */ Element,
          /* harmony export */ makeImage: () => /* binding */ makeImage,
          /* harmony export */ makeBio: () => /* binding */ makeBio,
          /* harmony export */
        });
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

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ./navbar */ "./src/navbar.js");
    /* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(/*! ./overlay */ "./src/overlay.js");
    /* harmony import */ var _welcomepage__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(/*! ./welcomepage */ "./src/welcomepage.js");
    /* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(/*! ./menu */ "./src/menu.js");
    /* harmony import */ var _copyrightbar__WEBPACK_IMPORTED_MODULE_4__ =
      __webpack_require__(/*! ./copyrightbar */ "./src/copyrightbar.js");
    /* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ =
      __webpack_require__(/*! ./contact */ "./src/contact.js");

    const generatePage = () => {
      (0, _overlay__WEBPACK_IMPORTED_MODULE_1__.makeOverlay)();
      (0, _navbar__WEBPACK_IMPORTED_MODULE_0__.makeNavBar)();
      (0, _navbar__WEBPACK_IMPORTED_MODULE_0__.makeLogo)();
      (0, _navbar__WEBPACK_IMPORTED_MODULE_0__.makeHamburger)();
      (0, _welcomepage__WEBPACK_IMPORTED_MODULE_2__.makeImage)();
      (0, _welcomepage__WEBPACK_IMPORTED_MODULE_2__.makeBio)();
      (0, _copyrightbar__WEBPACK_IMPORTED_MODULE_4__.default)();
      (0, _overlay__WEBPACK_IMPORTED_MODULE_1__.showOverlay)();
      (0, _overlay__WEBPACK_IMPORTED_MODULE_1__.hideOverlay)();
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
        (0, _welcomepage__WEBPACK_IMPORTED_MODULE_2__.makeBio)();
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
        (0, _menu__WEBPACK_IMPORTED_MODULE_3__.default)();
        homeTab = 0;
        menuTab = 1;
        contactTab = 0;
      }
    };

    const goContact = () => {
      if (contactTab === 0) {
        removeWelcome();
        removeMenu();
        (0, _contact__WEBPACK_IMPORTED_MODULE_5__.makeContact)();
        (0, _contact__WEBPACK_IMPORTED_MODULE_5__.initMap)();
        contactTab = 1;
        menuTab = 0;
        homeTab = 0;
      }
    };

    document.getElementById("home").addEventListener("click", goHome, false);
    document.getElementById("menu").addEventListener("click", goMenu, false);
    document
      .getElementById("contact")
      .addEventListener("click", goContact, false);

    document
      .getElementById("mobileHome")
      .addEventListener("click", goHome, false);
    document
      .getElementById("mobileMenu")
      .addEventListener("click", goMenu, false);
    document
      .getElementById("mobileContact")
      .addEventListener("click", goContact, false);
  })();

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29weXJpZ2h0YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL292ZXJsYXkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL3dlbGNvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEOztBQUVsRDtBQUNBLHNCQUFzQixpREFBTzs7QUFFN0I7QUFDQTtBQUNBLDRCQUE0QixpREFBTztBQUNuQyxFQUFFLDhEQUFvQjs7QUFFdEIsMEJBQTBCLGlEQUFPO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQixpREFBTztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEVBQUUsOERBQW9CO0FBQ3RCO0FBQ0EsYUFBYSxnQ0FBZ0M7QUFDN0M7QUFDQSxHQUFHO0FBQ0g7QUFDQSxl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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUkscURBQU87QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksOENBQVE7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBVztBQUNmLElBQUksaURBQU87QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb250ZW50cywgRWxlbWVudCB9IGZyb20gXCIuL3dlbGNvbWVwYWdlXCI7XG5cbi8vIEhvdXNlcyBHb29nbGUgTWFwc1xuY29uc3QgbWFwSG9sZGVyID0gbmV3IEVsZW1lbnQoXCJkaXZcIiwgXCJtYXBcIik7XG5cbi8vIEdlbmVyYXRlcyBjb250YWN0IGluZm9ybWF0aW9uXG5jb25zdCBtYWtlQ29udGFjdCA9IGZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG4gIGNvbnN0IGNvbnRhY3RIb2xkZXIgPSBuZXcgRWxlbWVudChcImRpdlwiLCBcImNvbnRhY3RIb2xkZXJcIik7XG4gIGNvbnRlbnRzLmFwcGVuZENoaWxkKGNvbnRhY3RIb2xkZXIuaXRlbSk7XG5cbiAgY29uc3QgY29udGFjdEluZm8gPSBuZXcgRWxlbWVudChcImgyXCIsIFwiY29udGFjdEluZm9cIik7XG4gIGNvbnRhY3RJbmZvLml0ZW0uaW5uZXJIVE1MID0gYEFkZHJlc3M6PGJyPlxuICAgIDM3NTEgUyBTdG9uZWJyaWRnZSBEci48YnIvPlxuICAgIE1ja2lubmV5LCBUZXhhcyA3NTA3MDxici8+XG4gICAgUGhvbmU6PGJyLz5cbiAgICA5NzItNTQ3LTE2Mjg8YnI+XG4gICAgRW1haWw6IHplbnN1c2hpYW5kZ3JpbGxAaWNsb3VkLmNvbWA7XG4gIGNvbnRhY3RIb2xkZXIuaXRlbS5hcHBlbmRDaGlsZChjb250YWN0SW5mby5pdGVtKTtcblxuICBjb25zdCBvcGVuaW5nVGltZXMgPSBuZXcgRWxlbWVudChcImgyXCIsIFwib3BlbmluZ1RpbWVcIik7XG4gIG9wZW5pbmdUaW1lcy5pdGVtLmlubmVySFRNTCA9IGBIb3Vyczo8YnI+XG4gICAgVHVlcyAtIFNhdDogMTFBTSAtIDEwUE08YnIvPlxuICAgIFN1biAmIE1vbjogQ2xvc2VkPGJyLz5cbiAgICBEcmVzcyBDb2RlOiBDYXN1YWw8YnIvPlxuICAgIEZvciBSZXNlcnZhdGlvbnMgYW5kIHBhcnRpZXMgb2YgNyBvciBtb3JlLDxici8+IHBsZWFzZSBjYWxsIDk3Mi01NDctMTYyOGA7XG4gIGNvbnRhY3RIb2xkZXIuaXRlbS5hcHBlbmRDaGlsZChvcGVuaW5nVGltZXMuaXRlbSk7XG59O1xuXG5sZXQgbWFwO1xuXG5mdW5jdGlvbiBpbml0TWFwKCkge1xuICBjb250ZW50cy5hcHBlbmRDaGlsZChtYXBIb2xkZXIuaXRlbSk7XG4gIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBcIiksIHtcbiAgICBjZW50ZXI6IHsgbGF0OiAzMy4xNjgyNywgbG5nOiAtOTYuNzI5OTkgfSxcbiAgICB6b29tOiAxOCxcbiAgfSk7XG4gIGNvbnN0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgIHBvc2l0aW9uOiB7IGxhdDogMzMuMTY4MjcsIGxuZzogLTk2LjcyOTk5IH0sXG4gICAgbWFwLFxuICB9KTtcbn1cblxuZXhwb3J0IHsgbWFrZUNvbnRhY3QsIGluaXRNYXAgfTtcbiIsImltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi93ZWxjb21lcGFnZVwiO1xuXG4vLyBIb3VzZXMgY29weXJpZ2h0IGJhclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3B5cmlnaHRIb2xkZXJcIik7XG5cbi8vIEdlbmVyYXRlcyBjb21wbGV0ZSBjb3B5cmlnaHQgYmFyXG5jb25zdCBtYWtlQ29weXJpZ2h0ID0gZnVuY3Rpb24gY3JlYXRlQ29weXJpZ2h0KCkge1xuICBjb25zdCBjb3B5cmlnaHQgPSBuZXcgRWxlbWVudChcImRpdlwiLCBcImNvcHlyaWdodFwiKTtcbiAgY29weXJpZ2h0Lml0ZW0uY2xhc3NOYW1lID0gXCJjbGVhcmZpeFwiO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0Lml0ZW0pO1xuXG4gIGNvbnN0IGNvcHlyaWdodFRleHQgPSBuZXcgRWxlbWVudChcImRpdlwiLCBcImNvcHlyaWdodFRleHRcIik7XG4gIGNvcHlyaWdodFRleHQuaXRlbS5jbGFzc05hbWVzID0gXCJ0ZXh0IGZsb2F0IGxlZnRcIjtcbiAgY29weXJpZ2h0Lml0ZW0uYXBwZW5kQ2hpbGQoY29weXJpZ2h0VGV4dC5pdGVtKTtcblxuICBjb25zdCBjb3B5cmlnaHRMaW5rcyA9IG5ldyBFbGVtZW50KFwidWxcIiwgXCJsaW5rc1wiKTtcbiAgY29weXJpZ2h0TGlua3MuaXRlbS5jbGFzc05hbWUgPSBcImxpbmtzIGZsb2F0IHJpZ2h0XCI7XG4gIGNvcHlyaWdodC5pdGVtLmFwcGVuZENoaWxkKGNvcHlyaWdodExpbmtzLml0ZW0pO1xuXG4gIGNvbnN0IGZhY2Vib29rSWNvbiA9IG5ldyBFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IGZhY2Vib29rTGluayA9IG5ldyBFbGVtZW50KFwiYVwiKTtcbiAgY29uc3QgZmFjZWJvb2tGb250ID0gbmV3IEVsZW1lbnQoXCJpXCIsIFwiZmFiIGZhLWZhY2Vib29rLXNxdWFyZVwiKTtcbiAgZmFjZWJvb2tMaW5rLml0ZW0uaHJlZiA9IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL1plblN1c2hpTWNraW5uZXkvXCI7XG4gIGZhY2Vib29rTGluay5pdGVtLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gIGZhY2Vib29rTGluay5pdGVtLnJlbCA9IFwibm9yZWZlcnJlciBub29wZW5lclwiO1xuXG4gIGNvbnN0IG9yZGVySWNvbiA9IG5ldyBFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IG9yZGVyTGluayA9IG5ldyBFbGVtZW50KFwiYVwiKTtcbiAgY29uc3Qgb3JkZXJGb250ID0gbmV3IEVsZW1lbnQoXCJpXCIsIFwiZmFzIGZhLXV0ZW5zaWxzXCIpO1xuICBvcmRlckxpbmsuaXRlbS5ocmVmID0gXCJodHRwczovL3d3dy56ZW5zdXNoaWFuZGdyaWxsbWNraW5uZXkuY29tL1wiO1xuICBvcmRlckxpbmsuaXRlbS50YXJnZXQgPSBcIl9ibGFua1wiO1xuICBvcmRlckxpbmsuaXRlbS5yZWwgPSBcIm5vcmVmZXJyZXIgbm9vcGVuZXJcIjtcblxuICBjb25zdCBnaXRJY29uID0gbmV3IEVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgZ2l0TGluayA9IG5ldyBFbGVtZW50KFwiYVwiKTtcbiAgY29uc3QgZ2l0Rm9udCA9IG5ldyBFbGVtZW50KFwiaVwiLCBcImZhYiBmYS1naXRodWItc3F1YXJlXCIpO1xuICBnaXRMaW5rLml0ZW0uaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL0phbWVzbG81OTlcIjtcbiAgZ2l0TGluay5pdGVtLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gIGdpdExpbmsuaXRlbS5yZWwgPSBcIm5vcmVmZXJyZXIgbm9vcGVuZXJcIjtcblxuICBmYWNlYm9va0xpbmsuaXRlbS5hcHBlbmRDaGlsZChmYWNlYm9va0ZvbnQuaXRlbSk7XG4gIGZhY2Vib29rSWNvbi5pdGVtLmFwcGVuZENoaWxkKGZhY2Vib29rTGluay5pdGVtKTtcbiAgY29weXJpZ2h0TGlua3MuaXRlbS5hcHBlbmRDaGlsZChmYWNlYm9va0ljb24uaXRlbSk7XG4gIG9yZGVyTGluay5pdGVtLmFwcGVuZENoaWxkKG9yZGVyRm9udC5pdGVtKTtcbiAgb3JkZXJJY29uLml0ZW0uYXBwZW5kQ2hpbGQob3JkZXJMaW5rLml0ZW0pO1xuICBjb3B5cmlnaHRMaW5rcy5pdGVtLmFwcGVuZENoaWxkKG9yZGVySWNvbi5pdGVtKTtcbiAgZ2l0TGluay5pdGVtLmFwcGVuZENoaWxkKGdpdEZvbnQuaXRlbSk7XG4gIGdpdEljb24uaXRlbS5hcHBlbmRDaGlsZChnaXRMaW5rLml0ZW0pO1xuICBjb3B5cmlnaHRMaW5rcy5pdGVtLmFwcGVuZENoaWxkKGdpdEljb24uaXRlbSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYWtlQ29weXJpZ2h0O1xuIiwiaW1wb3J0IHsgY29udGVudHMsIEVsZW1lbnQgfSBmcm9tIFwiLi93ZWxjb21lcGFnZVwiO1xuXG5jb25zdCBtYWtlTWVudSA9IGZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gIC8vIEhvdXNlcyBtZW51IGltYWdlc1xuICBjb25zdCBtZW51R2FsbGVyeSA9IG5ldyBFbGVtZW50KFwiZGl2XCIsIFwiZ2FsbGVyeVwiKTtcbiAgY29udGVudHMuYXBwZW5kQ2hpbGQobWVudUdhbGxlcnkuaXRlbSk7XG5cbiAgLy8gQWxsb3cgaW1hZ2VzIHRvIGJlIHByZXNlbnRlZCBmdWxsIHNjcmVlbiB3aGVuIGNsaWNrZWRcbiAgY29uc3QgZGlzcGxheU1vZGFsID0gZnVuY3Rpb24gYXBwZW5kTW9kYWwoKSB7XG4gICAgY29uc3Qgc3JjID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJzcmNcIik7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsQ29udGFpbmVyXCIpO1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtzcmN9KWA7XG4gICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcImNvbnRhaW5cIjtcbiAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gXCJuby1yZXBlYXRcIjtcbiAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSBcImNlbnRlclwiO1xuICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLDAsMCwwLjQpXCI7XG4gICAgY29udGVudHMuYXBwZW5kQ2hpbGQobW9kYWwpO1xuXG4gICAgd2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiBleGl0TW9kYWwoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC50YXJnZXQgPT09IG1vZGFsKSB7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8vIEdlbmVyYXRlcyBtZW51IGltYWdlc1xuICBsZXQgaW1hZ2U7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDg7IGkgKz0gMSkge1xuICAgIGltYWdlID0gbmV3IEVsZW1lbnQoXCJpbWdcIiwgXCJtZW51SW1hZ2VcIik7XG4gICAgaW1hZ2UuaXRlbS5zcmMgPSBgaW1hZ2VzL21lbnUke2l9LmpwZ2A7XG4gICAgaW1hZ2UuaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheU1vZGFsKTtcbiAgICBtZW51R2FsbGVyeS5pdGVtLmFwcGVuZENoaWxkKGltYWdlLml0ZW0pO1xuICB9XG5cbiAgY29uc3QgbW9kYWxDb250YWluZXIgPSBuZXcgRWxlbWVudChcImRpdlwiLCBcIm1vZGFsQ29udGFpbmVyXCIpO1xuICBjb250ZW50cy5hcHBlbmRDaGlsZChtb2RhbENvbnRhaW5lci5pdGVtKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VNZW51O1xuIiwiaW1wb3J0IHsgY29udGVudHMsIEVsZW1lbnQgfSBmcm9tIFwiLi93ZWxjb21lcGFnZVwiO1xuXG4vLyBHZW5lcmF0ZXMgZnVsbCBuYXZpZ2F0aW9uIGJhclxuY29uc3QgbWFrZU5hdkJhciA9IGZ1bmN0aW9uIGNyZWF0ZU5hdmJhcigpIHtcbiAgY29uc3QgbmF2YmFyID0gbmV3IEVsZW1lbnQoXCJ1bFwiLCBcIm5hdlwiKTtcbiAgY29udGVudHMuYXBwZW5kQ2hpbGQobmF2YmFyLml0ZW0pO1xuXG4gIGNvbnN0IG5hdmJhclRleHQgPSBuZXcgRWxlbWVudChcImRpdlwiLCBcInRpdGxlXCIpO1xuICBuYXZiYXJUZXh0Lml0ZW0uaW5uZXJIVE1MID0gXCJaZW4gU3VzaGkgJiBHcmlsbFwiO1xuICBuYXZiYXIuaXRlbS5hcHBlbmRDaGlsZChuYXZiYXJUZXh0Lml0ZW0pO1xuXG4gIGNvbnN0IGhvbWVCdXR0b24gPSBuZXcgRWxlbWVudChcImxpXCIsIFwiaG9tZVwiKTtcbiAgY29uc3QgYUhvbWUgPSBuZXcgRWxlbWVudChcImFcIik7XG4gIGFIb21lLml0ZW0uaW5uZXJIVE1MID0gXCJIb21lXCI7XG4gIGFIb21lLml0ZW0uaHJlZiA9IFwiI1wiO1xuICBob21lQnV0dG9uLml0ZW0uYXBwZW5kQ2hpbGQoYUhvbWUuaXRlbSk7XG4gIG5hdmJhci5pdGVtLmFwcGVuZENoaWxkKGhvbWVCdXR0b24uaXRlbSk7XG5cbiAgY29uc3QgbWVudUJ1dHRvbiA9IG5ldyBFbGVtZW50KFwibGlcIiwgXCJtZW51XCIpO1xuICBjb25zdCBhTWVudSA9IG5ldyBFbGVtZW50KFwiYVwiKTtcbiAgYU1lbnUuaXRlbS5pbm5lckhUTUwgPSBcIk1lbnVcIjtcbiAgYU1lbnUuaXRlbS5ocmVmID0gXCIjXCI7XG4gIG1lbnVCdXR0b24uaXRlbS5hcHBlbmRDaGlsZChhTWVudS5pdGVtKTtcbiAgbmF2YmFyLml0ZW0uYXBwZW5kQ2hpbGQobWVudUJ1dHRvbi5pdGVtKTtcblxuICBjb25zdCBvcmRlckJ1dHRvbiA9IG5ldyBFbGVtZW50KFwibGlcIiwgXCJvcmRlclwiKTtcbiAgY29uc3QgYW5PcmRlciA9IG5ldyBFbGVtZW50KFwiYVwiKTtcbiAgYW5PcmRlci5pdGVtLmlubmVySFRNTCA9IFwiT3JkZXIgSGVyZVwiO1xuICBhbk9yZGVyLml0ZW0uaHJlZiA9IFwiaHR0cHM6Ly93d3cuemVuc3VzaGlhbmRncmlsbG1ja2lubmV5LmNvbS9cIjtcbiAgYW5PcmRlci5pdGVtLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gIGFuT3JkZXIuaXRlbS5yZWwgPSBcIm5vcmVmZXJyZXIgbm9vcGVuZXJcIjtcbiAgb3JkZXJCdXR0b24uaXRlbS5hcHBlbmRDaGlsZChhbk9yZGVyLml0ZW0pO1xuICBuYXZiYXIuaXRlbS5hcHBlbmRDaGlsZChvcmRlckJ1dHRvbi5pdGVtKTtcblxuICBjb25zdCBjb250YWN0QnV0dG9uID0gbmV3IEVsZW1lbnQoXCJsaVwiLCBcImNvbnRhY3RcIik7XG4gIGNvbnN0IGFDb250YWN0ID0gbmV3IEVsZW1lbnQoXCJhXCIpO1xuICBhQ29udGFjdC5pdGVtLmlubmVySFRNTCA9IFwiQ29udGFjdCBVc1wiO1xuICBhQ29udGFjdC5pdGVtLmhyZWYgPSBcIiNcIjtcbiAgY29udGFjdEJ1dHRvbi5pdGVtLmFwcGVuZENoaWxkKGFDb250YWN0Lml0ZW0pO1xuICBuYXZiYXIuaXRlbS5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uLml0ZW0pO1xufTtcblxuLy8gR2VuZXJhdGVzIExvZ29cbmNvbnN0IG1ha2VMb2dvID0gZnVuY3Rpb24gY3JlYXRlTG9nbygpIHtcbiAgY29uc3QgbG9nbyA9IG5ldyBFbGVtZW50KFwiaW1nXCIsIFwibG9nb1wiKTtcbiAgY29uc3QgYUxvZ28gPSBuZXcgRWxlbWVudChcImFcIik7XG4gIGFMb2dvLml0ZW0uaHJlZiA9IFwiXCI7XG4gIGFMb2dvLml0ZW0uYXBwZW5kQ2hpbGQobG9nby5pdGVtKTtcbiAgbG9nby5pdGVtLnNyYyA9IFwiaW1hZ2VzL0RhcnVtYS5wbmdcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dvSG9sZGVyXCIpLmFwcGVuZENoaWxkKGFMb2dvLml0ZW0pO1xufTtcblxuLy8gR2VuZXJhdGVzIGhhbWJ1cmdlciBpY29uIGZvciBtb2JpbGUgZGV2aWNlc1xuY29uc3QgbWFrZUhhbWJ1cmdlciA9IGZ1bmN0aW9uIGNyZWF0ZUhhbWJ1cmdlcigpIHtcbiAgY29uc3QgaGFtYnVyZ2VyID0gbmV3IEVsZW1lbnQoXCJpbWdcIiwgXCJoYW1idXJnZXJcIik7XG4gIGNvbnN0IGFIYW1idXJnZXIgPSBuZXcgRWxlbWVudChcImFcIik7XG4gIGFIYW1idXJnZXIuaXRlbS5ocmVmID0gXCJcIjtcbiAgYUhhbWJ1cmdlci5pdGVtLmFwcGVuZENoaWxkKGhhbWJ1cmdlci5pdGVtKTtcbiAgaGFtYnVyZ2VyLml0ZW0uc3JjID0gXCJpbWFnZXMvaGFtYnVyZ2VyLWljb24ucG5nXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nb0hvbGRlclwiKS5hcHBlbmRDaGlsZChhSGFtYnVyZ2VyLml0ZW0pO1xufTtcblxuZXhwb3J0IHsgRWxlbWVudCwgbWFrZU5hdkJhciwgbWFrZUxvZ28sIG1ha2VIYW1idXJnZXIgfTtcbiIsImltcG9ydCB7IEVsZW1lbnQsIGNvbnRlbnRzIH0gZnJvbSBcIi4vd2VsY29tZXBhZ2VcIjtcblxuLy8gR2VuZXJhdGVzIG1lbnUgb3ZlcmxheSBmb3IgbW9iaWxlIGRldmljZXNcbmNvbnN0IG1ha2VPdmVybGF5ID0gZnVuY3Rpb24gY3JlYXRlT3ZlcmxheSgpIHtcbiAgY29uc3Qgb3ZlcmxheSA9IG5ldyBFbGVtZW50KFwiZGl2XCIsIFwib3ZlcmxheVwiKTtcbiAgY29udGVudHMuYXBwZW5kQ2hpbGQob3ZlcmxheS5pdGVtKTtcblxuICBjb25zdCBjbG9zZSA9IG5ldyBFbGVtZW50KFwiaW1nXCIsIFwiY2xvc2VcIik7XG4gIGNvbnN0IGFDbG9zZSA9IG5ldyBFbGVtZW50KFwiYVwiKTtcbiAgYUNsb3NlLml0ZW0uaHJlZiA9IFwiXCI7XG4gIGFDbG9zZS5pdGVtLmFwcGVuZENoaWxkKGNsb3NlLml0ZW0pO1xuICBjbG9zZS5pdGVtLnNyYyA9IFwiaW1hZ2VzL2Nsb3NlLWljb24ucG5nXCI7XG4gIG92ZXJsYXkuaXRlbS5hcHBlbmRDaGlsZChhQ2xvc2UuaXRlbSk7XG5cbiAgY29uc3Qgb3ZlcmxheUxpc3QgPSBuZXcgRWxlbWVudChcInVsXCIsIFwib3ZlcmxheUxpc3RcIik7XG4gIG92ZXJsYXkuaXRlbS5hcHBlbmRDaGlsZChvdmVybGF5TGlzdC5pdGVtKTtcblxuICBjb25zdCBob21lQnV0dG9uID0gbmV3IEVsZW1lbnQoXCJsaVwiLCBcIm1vYmlsZUhvbWVcIik7XG4gIGNvbnN0IGFIb21lID0gbmV3IEVsZW1lbnQoXCJhXCIpO1xuICBhSG9tZS5pdGVtLmlubmVySFRNTCA9IFwiSG9tZVwiO1xuICBhSG9tZS5pdGVtLmhyZWYgPSBcIiNcIjtcbiAgaG9tZUJ1dHRvbi5pdGVtLmFwcGVuZENoaWxkKGFIb21lLml0ZW0pO1xuICBvdmVybGF5TGlzdC5pdGVtLmFwcGVuZENoaWxkKGhvbWVCdXR0b24uaXRlbSk7XG5cbiAgY29uc3QgbWVudUJ1dHRvbiA9IG5ldyBFbGVtZW50KFwibGlcIiwgXCJtb2JpbGVNZW51XCIpO1xuICBjb25zdCBhTWVudSA9IG5ldyBFbGVtZW50KFwiYVwiKTtcbiAgYU1lbnUuaXRlbS5pbm5lckhUTUwgPSBcIk1lbnVcIjtcbiAgYU1lbnUuaXRlbS5ocmVmID0gXCIjXCI7XG4gIG1lbnVCdXR0b24uaXRlbS5hcHBlbmRDaGlsZChhTWVudS5pdGVtKTtcbiAgb3ZlcmxheUxpc3QuaXRlbS5hcHBlbmRDaGlsZChtZW51QnV0dG9uLml0ZW0pO1xuXG4gIGNvbnN0IG9yZGVyQnV0dG9uID0gbmV3IEVsZW1lbnQoXCJsaVwiLCBcIm9yZGVyXCIpO1xuICBjb25zdCBhbk9yZGVyID0gbmV3IEVsZW1lbnQoXCJhXCIpO1xuICBhbk9yZGVyLml0ZW0uaW5uZXJIVE1MID0gXCJPcmRlciBIZXJlXCI7XG4gIGFuT3JkZXIuaXRlbS5ocmVmID0gXCJodHRwczovL3d3dy56ZW5zdXNoaWFuZGdyaWxsbWNraW5uZXkuY29tL1wiO1xuICBhbk9yZGVyLml0ZW0udGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgYW5PcmRlci5pdGVtLnJlbCA9IFwibm9yZWZlcnJlciBub29wZW5lclwiO1xuICBvcmRlckJ1dHRvbi5pdGVtLmFwcGVuZENoaWxkKGFuT3JkZXIuaXRlbSk7XG4gIG92ZXJsYXlMaXN0Lml0ZW0uYXBwZW5kQ2hpbGQob3JkZXJCdXR0b24uaXRlbSk7XG5cbiAgY29uc3QgY29udGFjdEJ1dHRvbiA9IG5ldyBFbGVtZW50KFwibGlcIiwgXCJtb2JpbGVDb250YWN0XCIpO1xuICBjb25zdCBhQ29udGFjdCA9IG5ldyBFbGVtZW50KFwiYVwiKTtcbiAgYUNvbnRhY3QuaXRlbS5pbm5lckhUTUwgPSBcIkNvbnRhY3QgVXNcIjtcbiAgYUNvbnRhY3QuaXRlbS5ocmVmID0gXCIjXCI7XG4gIGNvbnRhY3RCdXR0b24uaXRlbS5hcHBlbmRDaGlsZChhQ29udGFjdC5pdGVtKTtcbiAgb3ZlcmxheUxpc3QuaXRlbS5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uLml0ZW0pO1xufTtcblxuLy8gc2hvd3Mgb3ZlcmxheSBvbiBjbGlja1xuY29uc3Qgc2hvd092ZXJsYXkgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGFtYnVyZ2VyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKS5zdHlsZS5hbmltYXRpb24gPSBcImZhZGVJbiAxc1wiO1xuICB9KTtcbn07XG5cbi8vIEhpZGVzIG92ZXJsYXkgb24gY2xpY2tcbmNvbnN0IGhpZGVPdmVybGF5ID0gKCkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9LCA1MDApO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKS5zdHlsZS5hbmltYXRpb24gPSBcImZhZGVPdXQgMC41c1wiO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IG1ha2VPdmVybGF5LCBzaG93T3ZlcmxheSwgaGlkZU92ZXJsYXkgfTtcbiIsImNvbnN0IGNvbnRlbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4vLyBDb25zdHJ1Y3RvciBmb3IgY3JlYXRpbmcgRE9NIGVsZW1lbnRzXG5jb25zdCBFbGVtZW50ID0gZnVuY3Rpb24gbWFrZUVsZW1lbnQoaXRlbSwgY2xhc3NOYW1lKSB7XG4gIHRoaXMuaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXRlbSk7XG4gIHRoaXMuaXRlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBjbGFzc05hbWUpO1xuICB0aGlzLml0ZW0uc2V0QXR0cmlidXRlKFwiaWRcIiwgY2xhc3NOYW1lKTtcbn07XG5cbi8vIEdlbmVyYXRlcyByZXN0YXVyYW50IGJpb2dyYXBoeVxuY29uc3QgbWFrZUJpbyA9ICgpID0+IHtcbiAgY29uc3QgYmlvZ3JhcGh5ID0gbmV3IEVsZW1lbnQoXCJoMlwiLCBcImJpb2dyYXBoeVwiKTtcbiAgYmlvZ3JhcGh5Lml0ZW0uaW5uZXJIVE1MID0gYFdlIHNwZWNpYWxpemUgaW4gZGVsaWNpb3VzIEphcGFuZXNlIGN1aXNpbmUgXG4gICAgZnJvbSBmcmVzaCBzdXNoaSB3aXRoIGEgdmFyaWV0eSBvZiBzcGVjaWFsIGZpc2gsIFxuICAgIHRvIGhpYmFjaGkgZW50cmVlcyBncmlsbGVkIHRvIHBlcmZlY3Rpb24gaW4gdGhlIGtpdGNoZW4uIDxici8+PGJyLz5cbiAgICBDaGVmLW93bmVyIEphY2sgd2l0aCBvdmVyIDI1IHllYXJzIG9mIGV4cGVyaWVuY2UgYW5kIHdobyBwcmV2aW91c2x5IG93bmVkIFxuICAgIFwiS2lyYWt1IEphcGFuZXNlIFJlc3RhdXJhbnRcIiBpbiBIb3VzdG9uLCBUZXhhcy4gXG4gICAgSGUgd29ya3MgaGFyZCBldmVyeSBkYXkgdG8gcHJvdmlkZSBhIGN1c3RvbWl6ZWQgZXhwZXJpZW5jZSBmb3IgZXZlcnkgY3VzdG9tZXIgXG4gICAgYW5kIHRyZWF0cyB0aGVtIGxpa2UgaGlzIG93biBmYW1pbHkuIFxuICAgIFdoZW4gaGUgaXMgbm90IHdvcmtpbmcsIEphY2sgZW5qb3lzIHdhdGNoaW5nIG1vdmllcywgc2luZ2luZywgXG4gICAgYW5kIHNwZW5kaW5nIHRpbWUgd2l0aCBoaXMgZmFtaWx5LiA8YnIvPjxici8+XG4gICAgSGVhZCBzdXNoaS1jaGVmIEtpdGFtdXJhLXNhbiB3aG8gd2FzIHByZXZpb3VzbHkgXG4gICAgdGhlIGhlYWQgY2hlZiBvZiBKaW5iZWkgSmFwYW5lc2UgUmVzdGF1cmFudCBcbiAgICBhbmQgaGFzIG92ZXIgNDAgeWVhcnMgb2YgZXhwZXJpZW5jZSB3b3JraW5nIGluIEphcGFuLCBIYXdhaWkgYW5kIE5ldyBZb3JrLiBcbiAgICBLaXRhbXVyYS1zYW4gZm9jdXNlcyBoZWF2aWx5IG9uIGVuc3VyaW5nIHRoZSBxdWFsaXR5IFxuICAgIGFuZCBzdGFuZGFyZHMgb2Ygb3VyIHN1c2hpIGFyZSBvZiB0aGUgaGlnaGVzdCBvcmRlci4gXG4gICAgS2l0YW11cmEtc2FuIGVuam95cyBwbGF5aW5nIHdpdGggaGlzIGNhdHMsIFxuICAgIGNvb2tpbmcgYW5kIHNwZW5kaW5nIHRpbWUgd2l0aCBoaXMgZ3JhbmRjaGlsZHJlbi5gO1xuICBjb250ZW50cy5hcHBlbmRDaGlsZChiaW9ncmFwaHkuaXRlbSk7XG59O1xuXG4vLyBHZW5lcmF0ZXMgc2l4IGltYWdlcyBpbiBhIGdyaWQgdGhhdCBjYW4gYmUgc2V0IGZ1bGxzY3JlZW4gd2hlbiBjbGlja2VkXG5jb25zdCBtYWtlSW1hZ2UgPSBmdW5jdGlvbiBjcmVhdGVJbWFnZSgpIHtcbiAgLy8gQWxsb3cgaW1hZ2VzIHRvIGJlIHByZXNlbnRlZCBmdWxsIHNjcmVlbiB3aGVuIGNsaWNrZWRcbiAgY29uc3QgbW9kYWxDb250YWluZXIgPSBuZXcgRWxlbWVudChcImRpdlwiLCBcIm1vZGFsQ29udGFpbmVyXCIpO1xuICBjb250ZW50cy5hcHBlbmRDaGlsZChtb2RhbENvbnRhaW5lci5pdGVtKTtcblxuICBjb25zdCBkaXNwbGF5TW9kYWwgPSBmdW5jdGlvbiBhcHBlbmRNb2RhbCgpIHtcbiAgICBjb25zdCBzcmMgPSB0aGlzLmdldEF0dHJpYnV0ZShcInNyY1wiKTtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxDb250YWluZXJcIik7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke3NyY30pYDtcbiAgICBtb2RhbC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiY29udGFpblwiO1xuICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPSBcIm5vLXJlcGVhdFwiO1xuICAgIG1vZGFsLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IFwiY2VudGVyXCI7XG4gICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsMCwwLDAuNClcIjtcbiAgICBjb250ZW50cy5hcHBlbmRDaGlsZChtb2RhbCk7XG5cbiAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uIGV4aXRNb2RhbChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWwpIHtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfVxuICAgIH07XG4gIH07XG4gIC8vIEdlbmVyYXRlcyBpbWFnZXNcbiAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBuZXcgRWxlbWVudChcImRpdlwiLCBcImltYWdlQ29udGFpbmVyXCIpO1xuICBsZXQgaW1hZ2U7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDY7IGkgKz0gMSkge1xuICAgIGltYWdlID0gbmV3IEVsZW1lbnQoXCJpbWdcIiwgXCJiYW5uZXJJbWFnZVwiKTtcbiAgICBpbWFnZS5pdGVtLnNyYyA9IGBpbWFnZXMvU3VzaGlCb2F0JHtpfS5qcGdgO1xuICAgIGltYWdlLml0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlNb2RhbCk7XG4gICAgaW1hZ2VDb250YWluZXIuaXRlbS5hcHBlbmRDaGlsZChpbWFnZS5pdGVtKTtcbiAgfVxuICBjb250ZW50cy5hcHBlbmRDaGlsZChpbWFnZUNvbnRhaW5lci5pdGVtKTtcbn07XG5cbmV4cG9ydCB7IGNvbnRlbnRzLCBFbGVtZW50LCBtYWtlSW1hZ2UsIG1ha2VCaW8gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbWFrZU5hdkJhciwgbWFrZUxvZ28sIG1ha2VIYW1idXJnZXIgfSBmcm9tIFwiLi9uYXZiYXJcIjtcbmltcG9ydCB7IGhpZGVPdmVybGF5LCBtYWtlT3ZlcmxheSwgc2hvd092ZXJsYXkgfSBmcm9tIFwiLi9vdmVybGF5XCI7XG5pbXBvcnQgeyBtYWtlSW1hZ2UsIG1ha2VCaW8gfSBmcm9tIFwiLi93ZWxjb21lcGFnZVwiO1xuaW1wb3J0IG1ha2VNZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBtYWtlQ29weXJpZ2h0IGZyb20gXCIuL2NvcHlyaWdodGJhclwiO1xuaW1wb3J0IHsgbWFrZUNvbnRhY3QsIGluaXRNYXAgfSBmcm9tIFwiLi9jb250YWN0XCI7XG5cbmNvbnN0IGdlbmVyYXRlUGFnZSA9ICgpID0+IHtcbiAgbWFrZU92ZXJsYXkoKTtcbiAgbWFrZU5hdkJhcigpO1xuICBtYWtlTG9nbygpO1xuICBtYWtlSGFtYnVyZ2VyKCk7XG4gIG1ha2VJbWFnZSgpO1xuICBtYWtlQmlvKCk7XG4gIG1ha2VDb3B5cmlnaHQoKTtcbiAgc2hvd092ZXJsYXkoKTtcbiAgaGlkZU92ZXJsYXkoKTtcbn07XG5nZW5lcmF0ZVBhZ2UoKTtcblxubGV0IGhvbWVUYWIgPSAxO1xubGV0IG1lbnVUYWIgPSAwO1xubGV0IGNvbnRhY3RUYWIgPSAwO1xuXG5jb25zdCByZW1vdmVXZWxjb21lID0gKCkgPT4ge1xuICBpZiAoZG9jdW1lbnQuY29udGFpbnMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiaW9ncmFwaHlcIikpKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiaW9ncmFwaHlcIikucmVtb3ZlKCk7XG4gIH1cbn07XG5cbmNvbnN0IHJlbW92ZU1lbnUgPSAoKSA9PiB7XG4gIGlmIChkb2N1bWVudC5jb250YWlucyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbGxlcnlcIikpKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYWxsZXJ5XCIpLnJlbW92ZSgpO1xuICB9XG59O1xuXG5jb25zdCByZW1vdmVDb250YWN0ID0gKCkgPT4ge1xuICBpZiAoZG9jdW1lbnQuY29udGFpbnMoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0SG9sZGVyXCIpKSkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdEhvbGRlclwiKS5yZW1vdmUoKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFwiKS5yZW1vdmUoKTtcbiAgfVxufTtcblxuY29uc3QgZ29Ib21lID0gKCkgPT4ge1xuICBpZiAoaG9tZVRhYiA9PT0gMCkge1xuICAgIG1ha2VCaW8oKTtcbiAgICByZW1vdmVNZW51KCk7XG4gICAgcmVtb3ZlQ29udGFjdCgpO1xuICAgIGhvbWVUYWIgPSAxO1xuICAgIG1lbnVUYWIgPSAwO1xuICAgIGNvbnRhY3RUYWIgPSAwO1xuICB9XG59O1xuXG5jb25zdCBnb01lbnUgPSAoKSA9PiB7XG4gIGlmIChtZW51VGFiID09PSAwKSB7XG4gICAgcmVtb3ZlQ29udGFjdCgpO1xuICAgIHJlbW92ZVdlbGNvbWUoKTtcbiAgICBtYWtlTWVudSgpO1xuICAgIGhvbWVUYWIgPSAwO1xuICAgIG1lbnVUYWIgPSAxO1xuICAgIGNvbnRhY3RUYWIgPSAwO1xuICB9XG59O1xuXG5jb25zdCBnb0NvbnRhY3QgPSAoKSA9PiB7XG4gIGlmIChjb250YWN0VGFiID09PSAwKSB7XG4gICAgcmVtb3ZlV2VsY29tZSgpO1xuICAgIHJlbW92ZU1lbnUoKTtcbiAgICBtYWtlQ29udGFjdCgpO1xuICAgIGluaXRNYXAoKTtcbiAgICBjb250YWN0VGFiID0gMTtcbiAgICBtZW51VGFiID0gMDtcbiAgICBob21lVGFiID0gMDtcbiAgfVxufTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnb0hvbWUsIGZhbHNlKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ29NZW51LCBmYWxzZSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3RcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvQ29udGFjdCwgZmFsc2UpO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vYmlsZUhvbWVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvSG9tZSwgZmFsc2UpO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2JpbGVNZW51XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnb01lbnUsIGZhbHNlKTtcbmRvY3VtZW50XG4gIC5nZXRFbGVtZW50QnlJZChcIm1vYmlsZUNvbnRhY3RcIilcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnb0NvbnRhY3QsIGZhbHNlKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
