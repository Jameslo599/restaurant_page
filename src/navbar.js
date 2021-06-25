import {contents, Element} from "./welcomepage";

//Generates full navigation bar
let makeNavBar = function() {
    let navbar = new Element('ul', 'nav');
    contents.appendChild(navbar.item);

    let navbarText = new Element('div', 'title');
    navbarText.item.innerHTML = 'Zen Sushi & Grill'
    navbar.item.appendChild(navbarText.item);

    let homeButton = new Element('li', 'home');
    let aHome = new Element('a');
    aHome.item.innerHTML = 'Home';
    aHome.item.href = '#';
    homeButton.item.appendChild(aHome.item);
    navbar.item.appendChild(homeButton.item);

    let menuButton = new Element('li', 'menu');
    let aMenu = new Element('a');
    aMenu.item.innerHTML = 'Menu';
    aMenu.item.href = '#';
    menuButton.item.appendChild(aMenu.item);
    navbar.item.appendChild(menuButton.item);

    let orderButton = new Element('li', 'order');
    let anOrder = new Element('a');
    anOrder.item.innerHTML = 'Order Here';
    anOrder.item.href = 'https://www.zensushiandgrillmckinney.com/';
    anOrder.item.target = '_blank'
    anOrder.item.rel = 'noreferrer noopener';
    orderButton.item.appendChild(anOrder.item);
    navbar.item.appendChild(orderButton.item);

    let contactButton = new Element('li', 'contact');
    let aContact = new Element('a');
    aContact.item.innerHTML = 'Contact Us';
    aContact.item.href = '#';
    contactButton.item.appendChild(aContact.item);
    navbar.item.appendChild(contactButton.item);
};

//Generates Logo
let makeLogo = function() {
    let logo =  new Element('img', 'logo');
    let aLogo = new Element('a');
    aLogo.item.href = '';
    aLogo.item.appendChild(logo.item);
    //logo.className = 'logo';
    logo.item.src = 'images/Daruma.png';
    document.getElementById('logoHolder').appendChild(aLogo.item);
};

export {Element, makeNavBar, makeLogo};