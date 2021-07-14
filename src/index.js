import { makeNavBar, makeLogo, makeHamburger } from "./navbar";
import { hideOverlay, makeOverlay, showOverlay } from "./overlay";
import { makeImage, makeBio } from "./welcomepage";
import makeMenu from "./menu";
import makeCopyright from "./copyrightbar";
import { makeContact, initMap } from "./contact";

const generatePage = () => {
  makeOverlay();
  makeNavBar();
  makeLogo();
  makeHamburger();
  makeImage();
  makeBio();
  makeCopyright();
  showOverlay();
  hideOverlay();
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
    makeBio();
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
    makeMenu();
    homeTab = 0;
    menuTab = 1;
    contactTab = 0;
  }
};

const goContact = () => {
  if (contactTab === 0) {
    removeWelcome();
    removeMenu();
    makeContact();
    initMap();
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
