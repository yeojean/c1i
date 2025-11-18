const textBox = document.querySelector(".text-box");
const emotionBox = document.querySelector(".emotion-box");

if (textBox && emotionBox) {
  textBox.addEventListener("click", () => {
    emotionBox.classList.add("visible");
  });
}

const stickerImages = [
  "https://i.imgur.com/5zk9lWF.png",
  "https://i.imgur.com/ySzwnfa.png",
  "https://i.imgur.com/ryynefG.png",
  "https://i.imgur.com/RJNFlHK.png",
  "https://i.imgur.com/F1w22Wm.png"
];

const stickerContainer = document.querySelector(".sticker-container");
const STICKER_COUNT = 32;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createSticker() {
  if (!stickerContainer) return;

  const img = document.createElement("img");
  img.className = "sticker";
  img.src = stickerImages[Math.floor(Math.random() * stickerImages.length)];

  const startLeft = random(0, 100);
  const size = random(50, 200);
  const duration = random(10, 22);
  const delay = random(-20, 0);

  img.style.left = startLeft + "vw";
  img.style.width = size + "px";
  img.style.height = "auto";
  img.style.animationDuration = duration + "s";
  img.style.animationDelay = delay + "s";

  img.addEventListener("animationiteration", () => {
    img.style.left = random(0, 100) + "vw";
    img.style.width = random(50, 200) + "px";
    img.style.animationDuration = random(10, 22) + "s";
  });

  stickerContainer.appendChild(img);
}

if (stickerContainer) {
  for (let i = 0; i < STICKER_COUNT; i++) createSticker();
}

const entryText = `THE DAYS ARE GETTING SHORTER. THE AIR FEELS COLDER, AND THE STREETS ARE
COVERED WITH FALLEN LEAVES. IT'S STARTING TO SMELL LIKE WINTER.

I USUALLY GET HIT WITH SEASONAL DEPRESSION AROUND THIS TIME EVERY YEAR.
THIS YEAR, THOUGH, I THINK MY BUSY SCHEDULE AND NEW ROUTINE ARE KEEPING ME
FROM FEELING THAT WAY. STILL, THERE'S THIS STRANGE MOOD I CAN'T QUITE SHAKE.

I JUST WISH THE DAYS WOULD STOP GETTING SHORTER AND THE WEATHER WOULDN'T KEEP GETTING COLDER.`;

const typeTarget = document.getElementById("typewriter");
let typeIndex = 0;
let typingStarted = false;

function typeWriterStep() {
  if (!typeTarget) return;

  if (typeIndex <= entryText.length) {
    typeTarget.textContent = entryText.slice(0, typeIndex);
    typeIndex++;
    setTimeout(typeWriterStep, 110);
  }
}

const panel2 = document.querySelector(".panel-2");

if (panel2) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !typingStarted) {
          typingStarted = true;
          typeWriterStep();
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(panel2);
}

function setup() {
  const w = window.innerWidth;
  const h = window.innerHeight;

  const canvas = createCanvas(w, h);
  canvas.parent("p5-holder");

  background(0);
  strokeWeight(10);
  colorMode(HSB, 360, 100, 100);
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
  background(0);
}

function mouseDragged() {
  let lineHue = mouseX - mouseY;
  stroke(lineHue, 90, 90);
  line(pmouseX, pmouseY, mouseX, mouseY);
}
