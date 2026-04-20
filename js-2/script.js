let container = document.querySelector(".boxContainer");
let box = document.createElement("div");

// define function
function addParagraph(){

    let paragraph = document.createElement('p');
    
    paragraph.innerText = "does this work?";

    document.body.append(paragraph);

// this function is a reference, if you rename it to addBox, it will add p tags
}

function addBox(){
    let box = document.createElement("div");

    box.className = "box";

    let container = document.querySelector(".boxContainer");

    container.append(box);

}

function removeAll(){
    container.remove(box);
   
}

function moveContainer(){
    let randomNumber = (Math.random()*200)-100;
    console.log(randomNumber);
    
    container.style.left = randomNumber+"px";
}

