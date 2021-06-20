let contents = document.getElementById('content');

let makeMenu = function() {
    let image = document.createElement("img");
    image.src = '/images/menu1.jpg';
    image.className = 'menuImage';
    image.id = 'menuImage';
    contents.appendChild(image);
};

export default makeMenu;