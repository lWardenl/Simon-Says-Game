const colors = ["green", "red", "yellow", "blue"];
const buttons = document.querySelectorAll('div[type="button"]');
const colorPattern = [];
const playerPattern = [];

let level = 0;
let isGameOver = false;

function GameLoop() {
  document.addEventListener("keydown", () => {
    AddNextColor();
  });

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const color = event.target.id;
      playerPattern.push(color);
      console.log(playerPattern);
      PlayAnimation(color);
      PlayAudio(color);
    });
  });
}

function AddNextColor() {
  const randColor = Math.floor(Math.random() * 4);
  const color = colors[randColor];
  colorPattern.push(color);
  console.log(colorPattern);
  PlayAnimation(color);
  PlayAudio(color);
}

function PlayAnimation(buttonID) {
  const buttonPressed = document.getElementById(buttonID);
  buttonPressed.classList.add("pressed");

  setTimeout(() => {
    buttonPressed.classList.remove("pressed");
  }, 200);
}

function PlayAudio(color) {
  const soundFile = `./sounds/${color}.mp3`;
  const sound = new Audio(soundFile);
  sound.play();
}

function ResetGame() {
  colorPattern = [];
  playerPattern = [];
  level = 0;
}

GameLoop();
