
function updateClock() {
    
    console.log("tick tick tick");
  
    const now = new Date();

    let hours = now.getHours() % 12;
    if (hours === 0) hours = 12;

    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourPetals = document.querySelectorAll(".hourPetal");
    const minuteContainer = document.getElementById("minutePetals");
    const secondHand = document.getElementById("secondHand");

    hourPetals.forEach((petal, index) => {
        if (index < hours) {
            petal.classList.remove("hidden");
        } else {
            petal.classList.add("hidden");
        }
    });

    minuteContainer.innerHTML = "";
    for (let i = 0; i < minutes; i++) {
        const petal = document.createElement("div");
        petal.className = "minute-petal";

        let angle = (i / 60) * 360;

        petal.style.transform =
            `translate(-50%, -100%) rotate(${angle}deg)`;

        minuteContainer.appendChild(petal);
    }

    let secAngle = (seconds / 60) * 360;
    secondHand.style.transform =
        `translate(-50%, -100%) rotate(${secAngle}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
