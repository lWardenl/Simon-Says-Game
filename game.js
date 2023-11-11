const colors = ["green", "red", "yellow", "blue"];
const buttons = document.querySelectorAll('div[type="button"]');
const colorPattern = [];
const playerPattern = [];

let isGameOver = false;

console.log(buttons);

function GameLoop() {
  document.addEventListener("click", () => {
    AddNextColor();
  });
}

function AddNextColor() {
  const randColor = Math.floor(Math.random() * 4);
  const color = colors[randColor];
  colorPattern.push(color);
  console.log(color);
  // PlayAnimation(color);
  PlayAudio(color);
}

function PlayAnimation(buttonID) {
  // buttonID.classList.add("pressed");
}

function PlayAudio(color) {
  const soundFile = `./sounds/${color}.mp3`;
  const sound = new Audio(soundFile);
  sound.play();
}

GameLoop();
