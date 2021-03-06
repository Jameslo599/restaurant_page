import { contents, Element } from "./welcomepage";

// Houses Google Maps
const mapHolder = new Element("div", "map");

// Generates contact information
const makeContact = function createContact() {
  const contactHolder = new Element("div", "contactHolder");
  contents.appendChild(contactHolder.item);

  const contactInfo = new Element("h2", "contactInfo");
  contactInfo.item.innerHTML = `Address:<br>
    3751 S Stonebridge Dr.<br/>
    Mckinney, Texas 75070<br/>
    Phone:<br/>
    972-547-1628<br>
    Email: zensushiandgrill@icloud.com`;
  contactHolder.item.appendChild(contactInfo.item);

  const openingTimes = new Element("h2", "openingTime");
  openingTimes.item.innerHTML = `Hours:<br>
    Tues - Sat: 11AM - 10PM<br/>
    Sun & Mon: Closed<br/>
    Dress Code: Casual<br/>
    For Reservations and parties of 7 or more,<br/> please call 972-547-1628`;
  contactHolder.item.appendChild(openingTimes.item);
};

let map;

function initMap() {
  contents.appendChild(mapHolder.item);
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 33.16827, lng: -96.72999 },
    zoom: 18,
  });
  const marker = new google.maps.Marker({
    position: { lat: 33.16827, lng: -96.72999 },
    map,
  });
}

export { makeContact, initMap };
