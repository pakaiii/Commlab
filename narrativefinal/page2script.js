
const columns = document.querySelectorAll(".column");

let scrollAmount = 0; 

window.addEventListener("wheel", function(e) {
  scrollAmount += e.deltaY;

  columns.forEach(function(col) {
    let speed = col.dataset.speed;
    let content = col.querySelector(".columnContent");
    let move = scrollAmount * speed;
    let max = content.scrollHeight - col.clientHeight;

    if (move > max) move = max;
    if (move < 0) move = 0;

    content.style.transform = "translateY(-" + move + "px)";
  });
});