import {makeNavBar, makeLogo, makeHamburger} from './navbar.js';
import {hideOverlay, makeOverlay, showOverlay} from './overlay.js'
import {makeImage, makeBio} from './welcomepage.js';
import makeMenu from './menu.js';
import makeCopyright from './copyrightbar.js'
import {makeContact, initMap} from './contact.js'

let generatePage = () => {
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
        makeBio();
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
        makeMenu();
        homeTab = 0;
        menuTab = 1;
        contactTab = 0;
    };
};

let goContact = () => {
    if (contactTab === 0) {
        removeWelcome();
        removeMenu();
        makeContact();
        initMap();
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