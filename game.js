const colors = ["green", "red", "yellow", "blue"];
const buttons = document.querySelectorAll('div[type="button"]');

let playerPattern = [];
let colorPattern = [];
let patternIterator = 0;
let level = 0;

function GameStart() {
  document.addEventListener("keydown", () => AddNextColor());

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => ButtonClick(event));
  });
}

function ButtonClick(event) {
  const color = event.target.id;
  playerPattern.push(color);
  console.log(playerPattern);
  PlayAnimation(color);
  PlayAudio(color);
  console.log(patternIterator);
  Check(color);
  patternIterator++;
}

function Check(color) {
  if (
    color == colorPattern[patternIterator] &&
    colorPattern.length == patternIterator
  ) {
    if (colorPattern.length == patternIterator) {
      setTimeout(() => {
        patternIterator = 0;
        AddNextColor();
      }, 1000);
    }
  } else {
    ResetGame();
  }
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
  }, 100);
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
  patternIterator = 0;
}

GameStart();
