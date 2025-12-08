
const text =
  "I liked my outfit today\nIt feels great to wear\nthings I love!";

const typewriterElement = document.getElementById("typewriter");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    const currentChar = text.charAt(index);

    if (currentChar === "\n") {
      typewriterElement.innerHTML += "<br>";
    } else {
      typewriterElement.innerHTML += currentChar;
    }

    index += 1;
    setTimeout(typeWriter, 70);
  }
}

window.addEventListener("load", typeWriter);

const playButton = document.querySelector(".player-btn.play");
const youtubeUrl =
  "https://youtu.be/-CmadmM5cOk?si=QXp-pG1E-yDhdQTE";

playButton.addEventListener("click", () => {
  window.open(youtubeUrl, "_blank");
});
