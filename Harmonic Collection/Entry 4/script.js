const squares = document.querySelectorAll(".square");
const wordDisplay = document.getElementById("wordDisplay");

squares.forEach((square) => {
  square.addEventListener("click", () => {
    const word = square.getAttribute("data-word");
    const link = square.getAttribute("data-link");

    wordDisplay.innerHTML = `
      <a href="${link}" target="_blank" rel="noopener noreferrer">
        ${word}
      </a>
    `;
  });
});
