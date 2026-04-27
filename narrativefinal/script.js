
const letters = document.querySelectorAll("#title span");

window.addEventListener("scroll", function(){

    console.log("scroll test");

    const scrollTop = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    const progress = 1 - (scrollTop / maxScroll);

    const lettersToFill = Math.floor(progress * letters.length);

    letters.forEach((letter, index) => {
        if (index < lettersToFill) {
            letter.style.color = "orange";
        } else {
            letter.style.color = "black";
        }
    });
});

window.onload = function () {
  window.scrollTo(0, document.body.scrollHeight);
};


