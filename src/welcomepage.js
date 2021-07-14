const contents = document.getElementById("content");

// Constructor for creating DOM elements
const Element = function makeElement(item, className) {
  this.item = document.createElement(item);
  this.item.setAttribute("class", className);
  this.item.setAttribute("id", className);
};

// Generates restaurant biography
const makeBio = () => {
  const biography = new Element("h2", "biography");
  biography.item.innerHTML = `We specialize in delicious Japanese cuisine 
    from fresh sushi with a variety of special fish, 
    to hibachi entrees grilled to perfection in the kitchen. <br/><br/>
    Chef-owner Jack with over 25 years of experience and who previously owned 
    "Kiraku Japanese Restaurant" in Houston, Texas. 
    He works hard every day to provide a customized experience for every customer 
    and treats them like his own family. 
    When he is not working, Jack enjoys watching movies, singing, 
    and spending time with his family. <br/><br/>
    Head sushi-chef Kitamura-san who was previously 
    the head chef of Jinbei Japanese Restaurant 
    and has over 40 years of experience working in Japan, Hawaii and New York. 
    Kitamura-san focuses heavily on ensuring the quality 
    and standards of our sushi are of the highest order. 
    Kitamura-san enjoys playing with his cats, 
    cooking and spending time with his grandchildren.`;
  contents.appendChild(biography.item);
};

// Generates six images in a grid that can be set fullscreen when clicked
const makeImage = function createImage() {
  // Allow images to be presented full screen when clicked
  const modalContainer = new Element("div", "modalContainer");
  contents.appendChild(modalContainer.item);

  const displayModal = function appendModal() {
    const src = this.getAttribute("src");
    const modal = document.getElementById("modalContainer");
    modal.style.display = "block";
    modal.style.background = `url(${src})`;
    modal.style.backgroundSize = "contain";
    modal.style.backgroundRepeat = "no-repeat";
    modal.style.backgroundPosition = "center";
    modal.style.backgroundColor = "rgba(0,0,0,0.4)";
    contents.appendChild(modal);

    window.onclick = function exitModal(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  };
  // Generates images
  const imageContainer = new Element("div", "imageContainer");
  let image;
  for (let i = 1; i <= 6; i += 1) {
    image = new Element("img", "bannerImage");
    image.item.src = `images/SushiBoat${i}.jpg`;
    image.item.addEventListener("click", displayModal);
    imageContainer.item.appendChild(image.item);
  }
  contents.appendChild(imageContainer.item);
};

export { contents, Element, makeImage, makeBio };
