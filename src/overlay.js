import { Element, contents } from './welcomepage'

//Generates menu overlay for mobile devices
let makeOverlay = function() {
    let overlay = new Element('div', 'overlay');
    contents.appendChild(overlay.item);

    let close =  new Element('img', 'close');
    let aClose = new Element('a');
    aClose.item.href = '';
    aClose.item.appendChild(close.item);
    close.item.src = 'images/close-icon.png';
    overlay.item.appendChild(aClose.item);

    let overlayList = new Element('ul', 'overlayList');
    overlay.item.appendChild(overlayList.item);

    let homeButton = new Element('li', 'mobileHome');
    let aHome = new Element('a');
    aHome.item.innerHTML = 'Home';
    aHome.item.href = '#';
    homeButton.item.appendChild(aHome.item);
    overlayList.item.appendChild(homeButton.item);

    let menuButton = new Element('li', 'mobileMenu');
    let aMenu = new Element('a');
    aMenu.item.innerHTML = 'Menu';
    aMenu.item.href = '#';
    menuButton.item.appendChild(aMenu.item);
    overlayList.item.appendChild(menuButton.item);

    let orderButton = new Element('li', 'order');
    let anOrder = new Element('a');
    anOrder.item.innerHTML = 'Order Here';
    anOrder.item.href = 'https://www.zensushiandgrillmckinney.com/';
    anOrder.item.target = '_blank'
    anOrder.item.rel = 'noreferrer noopener';
    orderButton.item.appendChild(anOrder.item);
    overlayList.item.appendChild(orderButton.item);

    let contactButton = new Element('li', 'mobileContact');
    let aContact = new Element('a');
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

export {makeOverlay, showOverlay, hideOverlay}