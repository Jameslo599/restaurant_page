import {contents, Element} from "./welcomepage";

let makeMenu = function() {
    //Houses menu images
    let menuGallery = new Element('div', 'gallery');
    contents.appendChild(menuGallery.item);

    //Allow images to be presented full screen when clicked
    let displayModal = function() {
        let src = this.getAttribute('src');
        let modal = document.getElementById('modalContainer');
        modal.style.display = 'block';
        modal.style.background = `url(${src})`;
        modal.style.backgroundSize = 'contain';
        modal.style.backgroundRepeat = 'no-repeat';
        modal.style.backgroundPosition = 'center';
        modal.style.backgroundColor = 'rgba(0,0,0,0.4)';
        contents.appendChild(modal);
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            };
        };
    };

    //Generates menu images
    let image;
    for (let i = 1; i <= 8; i++) {
        image = new Element('img', 'menuImage');
        image.item.src = `images/menu${i}.jpg`;
        image.item.addEventListener('click', displayModal)
        menuGallery.item.appendChild(image.item);
        };
    
    let modalContainer = new Element('div', 'modalContainer');
    contents.appendChild(modalContainer.item);
};

export default makeMenu;