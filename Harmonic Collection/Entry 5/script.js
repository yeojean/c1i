const heartBall = document.getElementById("heartBall");
const heartText = document.getElementById("heartText");

if (heartBall && heartText) {

  heartBall.addEventListener("click", () => {
    heartBall.style.display = "none";
    heartText.style.display = "block";
  });

  heartText.addEventListener("click", () => {
    heartText.style.display = "none";
    heartBall.style.display = "block";
  });
}
