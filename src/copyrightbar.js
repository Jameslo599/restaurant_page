import { Element } from './welcomepage'

//Houses copyright bar
let container = document.getElementById('copyrightHolder');

//Generates complete copyright bar
let makeCopyright = function() {
    let copyright = new Element('div', 'copyright');
    copyright.item.className = 'clearfix';
    container.appendChild(copyright.item);

    let copyrightText = new Element('div', 'copyrightText');
    copyrightText.item.innerHTML = 'COPYRIGHT JAMES LO 2021'
    copyrightText.item.classNames = 'text float left'
    copyright.item.appendChild(copyrightText.item);

    let copyrightLinks = new Element('ul', 'links');
    copyrightLinks.item.className = 'links float right';
    copyright.item.appendChild(copyrightLinks.item);

    let facebookIcon = new Element('li');
    let facebookLink = new Element('a');
    let facebookFont = new Element('i', 'fab fa-facebook-square');
    facebookLink.item.href = 
    'https://www.facebook.com/ZenSushiMckinney/';
    facebookLink.item.target = '_blank';
    facebookLink.item.rel = 'noreferrer noopener';

    let orderIcon = new Element('li');
    let orderLink = new Element('a');
    let orderFont = new Element('i', 'fas fa-utensils');
    orderLink.item.href = 'https://www.zensushiandgrillmckinney.com/';
    orderLink.item.target = '_blank';
    orderLink.item.rel = 'noreferrer noopener';

    let gitIcon = new Element('li');
    let gitLink = new Element('a');
    let gitFont = new Element('i', 'fab fa-github-square');
    gitLink.item.href = 'https://github.com/Jameslo599';
    gitLink.item.target = '_blank';
    gitLink.item.rel = 'noreferrer noopener';

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