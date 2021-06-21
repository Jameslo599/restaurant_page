import {makeNavBar, makeLogo} from './navbar.js';
import {contents, makeImage, populateWelcome} from './welcomepage.js';
import makeMenu from './menu.js';

makeNavBar();
makeLogo();
makeImage();
populateWelcome();

let homeTab = 1;
let menuTab = 0;
let contactTab = 0;

let removeWelcome = function() {
    if (homeTab === 1) {
    contents.removeChild(document.getElementById('header'));
    contents.removeChild(document.getElementById('biography'));
    } else {};
};

let removeMenu = function() {
    if (menuTab === 1) {
        for (let i = 1; i <= 8; i++) {
            contents.removeChild(document.getElementById('menuImage'));
        };
    } else {};
};

let goHome = function() {
    if (homeTab === 0) {
        populateWelcome();
        removeMenu();
        homeTab = 1;
        menuTab = 0;
        contactTab = 0;
    } else {};
};

let goMenu = function() {
    if (menuTab === 0) {
        removeWelcome();
        makeMenu();
        homeTab = 0;
        menuTab = 1;
        contactTab = 0;
    } else {};
};

let goContact = function() {
    if (contactTab === 0) {
        removeWelcome();
        removeMenu();
        contactTab = 1;
        menuTab = 0;
        homeTab = 0;
    } else {};
};

document.getElementById('home').addEventListener('click', goHome, false);
document.getElementById('menu').addEventListener('click', goMenu, false);
document.getElementById('contact').addEventListener('click', goContact, false);