
const letters = document.querySelectorAll("#title span");

window.addEventListener("scroll", function(){

    console.log("scroll test");

    const scrollTop = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    const progress = 1 - (scrollTop / maxScroll);

    const lettersToFill = Math.floor(progress * letters.length);

    letters.forEach((letter, index) => {
        if (index < lettersToFill) {
            letter.style.opacity = "1";
            letter.style.color = "orange"
        } else {
            letter.style.opacity = "0";
        }
    });
});

// const layer1 = document.getElementById("layer1");
// const layer2 = document.getElementById("layer2");

// let triggered = false;

// window.addEventListener("scroll", () => {
//   const maxScroll = document.body.scrollHeight - window.innerHeight;
//   let move = maxScroll - window.scrollY;

//   if (move > 500 && !triggered) {
//     triggered = true;

//     layer1.classList.add("show");

//     setTimeout(() => {
//       if (layer2) {
//         layer2.classList.add("show");
//       }
//     }, 200);
//   }
// });

const rain = document.querySelector(".rain");
const drops = [];

// create rain
for (let i = 0; i < 180; i++) {
  const d = document.createElement("div");
  d.className = "drop";

  d.style.left = Math.random() * 100 + "vw";
  d.style.animationDuration = (0.4 + Math.random() * 0.4) + "s";

  rain.appendChild(d);
  drops.push(d);
}

window.addEventListener("scroll", () => {
  const maxScroll = document.body.scrollHeight - window.innerHeight;

  // how far you've scrolled UP from bottom
  const progress = (maxScroll - window.scrollY) / maxScroll;

  drops.forEach(d => {

    // 🔥 ONE simple condition
    if (progress > 0.95) {
      // TOP → frozen droplets
      d.style.animationPlayState = "paused";
      d.style.width = "6px";
      d.style.height = "6px";
      d.style.borderRadius = "50%";
      d.style.background = "rgba(255,255,255,0.7)";
    } else {
      // REST → normal rain
      d.style.animationPlayState = "running";
      d.style.width = "1px";
      d.style.height = "90px";
      d.style.borderRadius = "0";
      d.style.background = "linear-gradient(transparent, rgba(255,255,255,0.6))";
    }

  });
});


