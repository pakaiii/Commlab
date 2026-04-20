let box1 = document.querySelector("#box1")

function moveBox(){
    box1.classList.toggle("moveRight")
}


function anotherFunction(){
    console.log("button pressed")
}

function addButton(){
    let btn = document.createElement('button');
    btn.innerText = 'multiply';
    btn.onclick = addButton; //<-- there are no "()" here. see the slides to find out why!

    document.querySelector(".buttonContainer").append(btn);
}

function turnElementRed(element){
    element.style.backgroundColor = "red";
}

function turnOneButtonRed(){
    // turn body red
    // turnElementRed(document.body);

    // following code turns first button red
    let btn = document.querySelector("button");
    turnElementRed(btn)
}

function turnAllButtonsRed(){
    let btns = document.querySelectorAll("button");
    console.log(btns);
    
    // turnElementRed(btns);
    // above does not work, below  forEach code works, identifies list of elements and for each button, call that function
    btns.forEach(turnElementRed);
    
}