import { contents } from "./welcomepage";

function Element(item, className) {
    this.item = document.createElement(item);
    this.className = className;
};

let makeNavBar = function() {
    //let navbar = document.createElement('ul');
    //navbar.className = 'nav';
    let navbar = new Element('ul', 'nav');
    navbar.item.setAttribute('class', 'nav');
    contents.appendChild(navbar.item);

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

export {makeNavBar, makeLogo};