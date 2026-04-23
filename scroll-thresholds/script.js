


function windowWasScrolled(){
    // console.log("scrolled");
    
    let percentage = getScrollPercentage();

    console.log("percentage", percentage);

    // first paragraph
    if(percentage > 33){
        console.log("paragraph appeared");
        document.querySelector(".one p").style.transform = "rotate(360deg)";
    } else{
        document.querySelector(".one p").style.transform = "rotate(0deg)";
    }

    // second paragraph
    if (percentage > 77){
        console.log("scroll test");
        document.querySelector(".two p").style.transform = "scale(2)";
        document.querySelector(".two p").style.color = "yellow";
    }else{
        document.querySelector(".two p").style.transform = "scale(1)";
        document.querySelector(".two p").style.color = "black";
    }

}

window.addEventListener("scroll",windowWasScrolled);

function getScrollPercentage(){
    // console.log("scrolled");

    let scrolledAlready = window.scrollY;
    // console.log(scrolledAlready);

    let pageHeight = document.body.scrollHeight;

    let windowHeight = window.innerHeight;

    let possibleScrollSpace = pageHeight - windowHeight;

    console.log(scrolledAlready, possibleScrollSpace);

    let percentage = (scrolledAlready / possibleScrollSpace) * 100;

    return percentage;
}