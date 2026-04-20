// select button element, id require # and types dont
let btn = document.querySelector("#buttonOne");
// bind buttonPressed function to click event using new technique
btn.addEventListener("click", buttonPressed);


function buttonPressed(){
    // select button:
    let btn = document.querySelector("#buttonOne");

    // color background:
    let randomBlue = Math.random()*255; //random value between 0-255
    btn.style.backgroundColor = 'rgb(90, 200, ' + randomBlue + ')';

    // color text:
    let randomRed = Math.random()*255; //random value between 0-255
    btn.style.color = 'rgb(' + randomRed + ', 100, 200)';
}

// ---------------------

let slider = document.querySelector("input");
let output = document.querySelector("#output")
slider.addEventListener("input", sliderChanged);

function sliderChanged(eventinfo){
    console.log("the slider changed");
    console.log(eventinfo)

    // update output?
    // goodNews("spring break abt to begin");
    let sliderValue = eventinfo.target.value;
    output.innerText = "Value is: " + sliderValue;
    // document.body.style.backgroundColor = "rgb(100, 0, "+sliderValue;

}



function goodNews(text){
    console.log("Good News: " + text);
}


// REVIEW:
function turnElementRed(element){
    element.style.backgroundColor = "red";
}




// // Select all buttons and the output area
let buttons = document.querySelectorAll(".btn");
let display = document.querySelector("#output2");

// // Define what happens when a button is clicked
function activateButton(elm) {
  elm.addEventListener("click", function() {
    display.innerText = "You said: " + elm.innerText;
  });
}

// // Attach to each button
buttons.forEach(activateButton);
