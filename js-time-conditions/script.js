let inputBox = document.querySelector("#inputBox");
let output = document.querySelector("#output");
let myButton = document.querySelector("#myButton");
let clickCounter = 0;

// challenge 1: 
// when the button is clicked
myButton.addEventListener("click", buttonClicked);
//--> This is important, addeventlistener is IMPORTANT!! Remember this!

// change the styling of the output text

function buttonClicked(){
    console.log("hello");
    output.style.color = "pink";
    output.style.backgroundColor = "black";

    // count the click
    clickCounter = clickCounter + 1;
    console.log("clickCounter", clickCounter)
    if(clickCounter >= 10){
        console.log("alarm!");
        supersize(myButton);
    }

}



// challenge 2: 
// as we type into the input box, 
// the text should appear inside the "ouput" p tag:
inputBox.addEventListener("input", inputChanged);

function inputChanged(eventInfo){

    // console.log(eventInfo);
    let text = inputBox.value;
    // output.innerText = text;

    // check if the value inside the input is spin
    if(text == "spin"){
        console.log("the value is spin");
        spin(inputBox);
    }

}




// function to spin an element 
function spin(element){
    element.style.transition = "all 1s linear"
    element.style.transform = "rotate(360deg)"
}



// -------- PART 2




let messageBoard = document.querySelector("#messageBoard");



function appendCountdown(){
    let clicksLeft = 10 - clickCounter;
    addMessage("press the button " + clicksLeft + " times");

}


// appendCountdown();
setInterval(appendCountdown, 500);


// function to add text to the div with id "messageboard"
function addMessage(messagetext){
    let p = document.createElement("p");
    p.innerText = messagetext;
    messageBoard.prepend(p);
}

// function to rapidly increase the size of an element
function supersize(element){
    element.style.transition = "all .5s linear"
    element.style.transform = "scale(100)"
}

