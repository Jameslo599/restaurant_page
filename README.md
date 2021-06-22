Restaurant Page Created as part of The Odin Project curriculum.

Live page (https://jameslo599.github.io/restaurant_page/)

Functionality

This restaurant page is a demonstration of my ability to use webpack to bundle multiple javascript files to generate a website while utiizing very minimal HTML. While it would have been easier to use HTML to create div elements and lists, I used mostly DOM to show that I don't necessarily need to rely on HTML. This is also the first project where I needed to use a gitignore file to hide the massive node_modules folder. 

While working on this project, I also learned many new skills such as using Google Maps API, navbar and copyright bar generation and also manipulating images with css grid.

I actually based this restaurant page on my family's own restaurant: Zen Sushi & Grill. Before learning how to code, we had been using the generic Google Business page which offers almost no customization. I plan to make this our official website in the future. 

The biggest hurdle was learning how to use the Google Maps API as I kept getting the error 'initMap() is not a function'. This error affected my tab switching logic so I spent quite some time to figure out the problem before realizing that webpack doesn't provide initMap() with globalScope. This is actually fine since I only needed to call the function when clicking the 'Contact Us' tab, but I had to delete the callback on the Google API to fix the error. 

Overall, this project was a great learning experience and I'm thrilled to have learned webpack and more CSS skills. I will definitely utilize webpack going forward as it really helped my code be more managable.

-- James Lo