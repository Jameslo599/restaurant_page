import { Element } from "./welcomepage";

// Houses copyright bar
const container = document.getElementById("copyrightHolder");

// Generates complete copyright bar
const makeCopyright = function createCopyright() {
  const copyright = new Element("div", "copyright");
  copyright.item.className = "clearfix";
  container.appendChild(copyright.item);

  const copyrightText = new Element("div", "copyrightText");
  copyrightText.item.classNames = "text float left";
  copyright.item.appendChild(copyrightText.item);

  const copyrightLinks = new Element("ul", "links");
  copyrightLinks.item.className = "links float right";
  copyright.item.appendChild(copyrightLinks.item);

  const facebookIcon = new Element("li");
  const facebookLink = new Element("a");
  const facebookFont = new Element("i", "fab fa-facebook-square");
  facebookLink.item.href = "https://www.facebook.com/ZenSushiMckinney/";
  facebookLink.item.target = "_blank";
  facebookLink.item.rel = "noreferrer noopener";

  const orderIcon = new Element("li");
  const orderLink = new Element("a");
  const orderFont = new Element("i", "fas fa-utensils");
  orderLink.item.href = "https://www.zensushiandgrillmckinney.com/";
  orderLink.item.target = "_blank";
  orderLink.item.rel = "noreferrer noopener";

  const gitIcon = new Element("li");
  const gitLink = new Element("a");
  const gitFont = new Element("i", "fab fa-github-square");
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

export default makeCopyright;
