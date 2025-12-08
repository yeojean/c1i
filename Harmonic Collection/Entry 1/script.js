const mainBurst = document.getElementById("main-burst");
const bubbles = document.querySelectorAll(".mood-bubble");

let bubblesShown = false;

mainBurst.addEventListener("click", () => {
  if (!bubblesShown) {
    // show bubbles one by one
    bubbles.forEach((bubble, index) => {
      setTimeout(() => {
        bubble.classList.add("visible");
      }, index * 350);
    });
    bubblesShown = true;
  } else {
    // hide all bubbles on second click
    bubbles.forEach((bubble) => {
      bubble.classList.remove("visible");
    });
    bubblesShown = false;
  }
});
