// alert("whats going on");

let name1 = "pk ";
let temperature = 25;
let language3 = "javascript";

// alert("hello " + name1 + "today it is "+ temperature + "degrees") 

function greet() {
    // let language3 = "javascript"; //local variable//
    console.log("speaking", language3);
    alert("Hello");
    console.log("The button was clicked")

}

function greet2 (theName){
    console.log("hello, " + theName)

}

function changingHeadline(){
    console.log("function runs, changing headline")
    document.querySelector("#programminglanguage").innerText = "javascript";
}

