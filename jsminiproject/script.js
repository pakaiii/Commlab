
function addButton(){
    let btn = document.createElement('button');
    btn.innerText = 'hi';
    btn.onclick = addButton;
    document.querySelector(".firstBtn").append(btn)
}

function changebackground(){
    let body = document.querySelector('body');
    body.style.backgroundColor = 'pink';

    
}

function btncolor(){
    

}


