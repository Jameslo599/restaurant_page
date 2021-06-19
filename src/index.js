import {makeNavBar, makeLogo} from './navbar.js';
import {makeBio, makeImage, removeWelcome, populateWelcome} from './welcomepage.js';

makeNavBar();
makeLogo();
makeImage();
populateWelcome();

let homeTab = 1;
let menuTab = 0;
let contact = 0;

let goHome = function() {
    if (homeTab === 0) {
        populateWelcome();
        homeTab = 1;
        menuTab = 0;
    } else {};
};

let goMenu = function() {
    if (menuTab === 0) {
        removeWelcome();
        menuTab = 1;
        homeTab = 0;
    } else {};
};

document.getElementById('home').addEventListener('click', goHome, false);
document.getElementById('menu').addEventListener('click', goMenu, false);