

let itemFound = 0; 

window.addEventListener("load", () => {
  const screen = document.getElementById("gameStart");
  const bar = document.querySelector(".itembar");
  setTimeout(() => {
    screen.classList.add("fadeOut");
  }, 2000); 
  setTimeout(() => {
    bar.classList.add("showBar");
  }, 3000); 

});


// below scales the img when clicked

function clickedStar() {
  const img = document.getElementById("starFind");
  const word = document.getElementById("star");

  word.classList.add("founditem");
  img.classList.add("clicked");
  setTimeout(() => {
    img.classList.add("disappear");
  }, 600);

  itemsFound();

}

function clickedGoldfish() {
  const img = document.getElementById("goldfishFind");
  const word = document.getElementById("goldfish");
  word.classList.add("founditem");
  img.classList.add("clicked");

  setTimeout(() => {
    img.classList.add("disappear");
  }, 600);

  itemsFound();

}

function clickedFlower() {
  const img = document.getElementById("flowerFind");
  const word = document.getElementById("flower");

  word.classList.add("founditem");
  img.classList.add("clicked");

  setTimeout(() => {
    img.classList.add("disappear");
  }, 600);
  itemsFound();

}


function itemsFound() {
  itemFound++;
  if (itemFound === 3) {
    const story = document.getElementById("storyScreen");
    setTimeout(() => {
    story.classList.add("show");
    }, 500); 
  }
}