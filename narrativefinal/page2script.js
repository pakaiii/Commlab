let columnScrollActive = false;
let columnScrollAmount = 0;

function windowWasScrolled(){

    let percentage = getScrollPercentage();

    let scrollY = window.scrollY;

    console.log("percentage", percentage, "scrollY:", scrollY);

    if(percentage >= 0){
      console.log("time for character thought scroll");

      startColumnScroll(percentage);
    }
}

window.addEventListener("scroll", windowWasScrolled);

function getScrollPercentage(){

    let scrolledAlready = window.scrollY;

    let pageHeight = document.body.scrollHeight;

    let windowHeight = window.innerHeight;

    let possibleScrollSpace = pageHeight - windowHeight;

    let percentage = (scrolledAlready / possibleScrollSpace) * 100;

    return percentage;
}

function startColumnScroll(percentage) {

  const scrollPoint = 95;

  if (percentage < scrollPoint) return;

  columnScrollActive = true;
}

window.addEventListener("wheel", function(e) {

  if (!columnScrollActive) return;

  e.preventDefault();

  columnScrollAmount += e.deltaY * 0.5;

  const columns = document.querySelectorAll(".column");

  let allAtTop = true;

  columns.forEach(function(col) {

    let speed = col.dataset.speed || 1;

    let content = col.querySelector(".columnContent");

    let max = content.scrollHeight - col.clientHeight;

    let move = columnScrollAmount * speed;

    if (move < 0) move = 0;

    if (move > max) move = max;

    if (move > 0) allAtTop = false;

    content.style.transform = `translateY(-${move}px)`;

  });

  if (allAtTop && e.deltaY < 0) {

    columnScrollAmount = 0;

    columnScrollActive = false;
  }

}, { passive: false });



// old code i abandoned 

// const columns = document.querySelectorAll(".column");

// let scrollAmount = 0; 

// window.addEventListener("wheel", function(e) {
//   scrollAmount += e.deltaY;

//   columns.forEach(function(col) {
//     let speed = col.dataset.speed;
//     let content = col.querySelector(".columnContent");
//     let move = scrollAmount * speed;
//     let max = content.scrollHeight - col.clientHeight;

//     if (move > max) move = max;
//     if (move < 0) move = 0;

//     content.style.transform = "translateY(-" + move + "px)";
//   });
// });

