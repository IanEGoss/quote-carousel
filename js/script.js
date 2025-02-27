/* Data to Show*/
const data = [
  {
    quote: `“SHHHH!.”`,
    emoji: '👻',
    image: `url(assets\OKmyths-Lake-Hefner.jpg)`
  },
  {
    quote: `“Get swept by the oceans.”`,
    emoji: '🌊',
    image: `url(assets\download-1.jpg)`
  },
  {
    quote: `“Get lost.”`,
    emoji: '🌊',
    image: `url(assets\images.jpg)`
  },
  {
    quote: `It's fine, for now.”`,
    emoji: '👌',
    image: `url(assets\istockphoto-1280015859-612x612.jpg)`
  },
  {
    quote: `“Get Dunked On.”`,
    emoji: '👻',
    image: `url(assets/cropped-Torrential-Rain-Flooding-and-Climate-Change.jpg)`
  },
  {
    quote: `“It's fine.”`,
    emoji: '🫀',
    image: `url(assets/bodies_of_water-1024x682.jpg)`
  }
];

/*
Quote and Emoji
*/
// blockquote
const quote = document.querySelector('blockquote');
// emoji
const emoji = document.querySelector('p');
// background
const bgImage = document.querySelector('body');

// Check-Check: change text
quote.innerHTML = "Lets get splashed";
// Check-Check: change emoji text
emoji.innerHTML = "👍️";
// Check-Check: background image
bgImage.style.backgroundImage = 'url(assets\ocean.jpg)';

/*
 * Navigate to Items with Event Listeners
 * Track Number of Items
*/
// initialize item number
let itemNumber = 0;
// get next button
const nextButton = document.querySelector("img.next");
// get previous button
const prevButton = document.querySelector("img.prev");
// get random button
const randButton = document.querySelector("img.random");

// listen for clicks on next button
nextButton.addEventListener("click", () => {
  // update, then increase item number with each click
  itemNumber = itemNumber + 1;

  // if at LAST item
  if (itemNumber > data.length - 1) {
    // reset counting to first item
    itemNumber = 0;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;

});

// listen for clicks on previous button
prevButton.addEventListener("click", () => {
  // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;

  // if at FIRST item
  if (itemNumber < 0) {
    // reset counting to last item
    itemNumber = data.length - 1;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
});

// listen for clicks on random button
randButton.addEventListener('click', () => {

  // generate random number, for total number, of items (data)
  randomNumber = Math.floor(Math.random() * data.length);

  // display data based random number
  quote.innerHTML = data[randomNumber].quote;
  emoji.innerHTML = data[randomNumber].emoji;
  bgImage.style.backgroundImage = data[randomNumber].image;

});

// listen for keypress next
document.addEventListener('keyup', (event) => {

  // check-check: What key was pressed?
  // console.log(event);

  // Next Right Arrow  
  if (event.key === "ArrowRight") {

    // update, then increase item number with each click
    itemNumber = itemNumber + 1;

    // if at LAST item
    if (itemNumber > data.length - 1) {
      // reset counting to first item
      itemNumber = 0;
    }

    // display data based on array index
    quote.innerHTML = data[itemNumber].quote;
    emoji.innerHTML = data[itemNumber].emoji;
    bgImage.style.backgroundImage = data[itemNumber].image;

  }

  // Prev Left Arrow
  if (event.key === "ArrowLeft") {

    // update, then DEcrease item number with each click
    itemNumber = itemNumber - 1;

    // if at FIRST item
    if (itemNumber < 0) {
      // reset counting to last item
      itemNumber = data.length - 1;
    }

    // display data based on array index
    quote.innerHTML = data[itemNumber].quote;
    emoji.innerHTML = data[itemNumber].emoji;
    bgImage.style.backgroundImage = data[itemNumber].image;
  }

  // Random Spacebar
  if (event.key === " ") {

    // generate random number, for total number, of items (data)
    randomNumber = Math.floor(Math.random() * data.length);

    // display data based random number
    quote.innerHTML = data[randomNumber].quote;
    emoji.innerHTML = data[randomNumber].emoji;
    bgImage.style.backgroundImage = data[randomNumber].image;

  }

});