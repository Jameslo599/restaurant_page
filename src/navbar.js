import { contents, Element } from "./welcomepage";

// Generates full navigation bar
const makeNavBar = function createNavbar() {
  const navbar = new Element("ul", "nav");
  contents.appendChild(navbar.item);

  const navbarText = new Element("div", "title");
  navbarText.item.innerHTML = "Zen Sushi & Grill";
  navbar.item.appendChild(navbarText.item);

  const homeButton = new Element("li", "home");
  const aHome = new Element("a");
  aHome.item.innerHTML = "Home";
  aHome.item.href = "#";
  homeButton.item.appendChild(aHome.item);
  navbar.item.appendChild(homeButton.item);

  const menuButton = new Element("li", "menu");
  const aMenu = new Element("a");
  aMenu.item.innerHTML = "Menu";
  aMenu.item.href = "#";
  menuButton.item.appendChild(aMenu.item);
  navbar.item.appendChild(menuButton.item);

  const orderButton = new Element("li", "order");
  const anOrder = new Element("a");
  anOrder.item.innerHTML = "Order Here";
  anOrder.item.href = "https://www.zensushiandgrillmckinney.com/";
  anOrder.item.target = "_blank";
  anOrder.item.rel = "noreferrer noopener";
  orderButton.item.appendChild(anOrder.item);
  navbar.item.appendChild(orderButton.item);

  const contactButton = new Element("li", "contact");
  const aContact = new Element("a");
  aContact.item.innerHTML = "Contact Us";
  aContact.item.href = "#";
  contactButton.item.appendChild(aContact.item);
  navbar.item.appendChild(contactButton.item);
};

// Generates Logo
const makeLogo = function createLogo() {
  const logo = new Element("img", "logo");
  const aLogo = new Element("a");
  aLogo.item.href = "";
  aLogo.item.appendChild(logo.item);
  logo.item.src = "images/Daruma.png";
  document.getElementById("logoHolder").appendChild(aLogo.item);
};

// Generates hamburger icon for mobile devices
const makeHamburger = function createHamburger() {
  const hamburger = new Element("img", "hamburger");
  const aHamburger = new Element("a");
  aHamburger.item.href = "";
  aHamburger.item.appendChild(hamburger.item);
  hamburger.item.src = "images/hamburger-icon.png";
  document.getElementById("logoHolder").appendChild(aHamburger.item);
};

export { Element, makeNavBar, makeLogo, makeHamburger };
