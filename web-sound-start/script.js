
let playBtn =  document.querySelector("#playButton");
let pauseBtn =  document.querySelector("#pauseButton");
let catSound = document.querySelector("#catSound");

let fastBtn = document.querySelector("#fastButton");
let slowBtn = document.querySelector("#slowButton");
let speedDisplay = document.querySelector("#speed");

function playSound(){
    console.log("play now");
    catSound.loop = true;
    catSound.play();
    
}

playBtn.addEventListener("click", playSound);

function pauseSound(){
    console.log("pause now");
    catSound.pause();
}

pauseBtn.addEventListener("click", pauseSound)

fastBtn.addEventListener("click", function(){
    soundSpeed = soundSpeed * 1.1;
    speedDisplay.innerText = soundSpeed;
    catSound.playbackRate = soundSpeed;

})

slowBtn.addEventListener("click", function(){
    soundSpeed = soundSpeed * 0.9;
    speedDisplay.innerText = soundSpeed;
    catSound.playbackRate = soundSpeed;

})