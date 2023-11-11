const colors = ["green", "red", "yellow", "blue"];
const buttons = document.querySelectorAll('div[type="button"]');
const gameTitle = document.getElementById("level-title");
const backgroundColor = document.body;
const wrongAudio = new Audio("./sounds/wrong.mp3");

let colorPattern = [];
let patternIterator = 0;
let level = 0;
let canPress = true;

function GameStart() {
  document.addEventListener("keydown", () => AddNextColor());

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => ButtonClick(event));
  });
}

function ButtonClick(event) {
  if (!canPress) return;

  const color = event.target.id;
  PlayAnimation(color);
  PlayAudio(color);
  console.log(patternIterator);
  Check(color);
}

function Check(color) {
  if (color == colorPattern[patternIterator]) {
    patternIterator++;
    if (colorPattern.length == patternIterator) {
      canPress = false;
      setTimeout(() => {
        NextLevel();
      }, 1000);
      canPress = true;
    }
  } else {
    ResetGame();
  }
}

function NextLevel() {
  patternIterator = 0;
  AddNextColor();
}

function AddNextColor() {
  level++;
  const randColor = Math.floor(Math.random() * 4);
  const color = colors[randColor];
  colorPattern.push(color);
  console.log(colorPattern);
  PlayAnimation(color);
  PlayAudio(color);
  gameTitle.innerHTML = `Level: ${level}`;
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
  level = 0;
  patternIterator = 0;
  canPress = false;
  backgroundColor.classList.add("game-over");
  wrongAudio.play();

  setTimeout(() => {
    AddNextColor();
    backgroundColor.classList.remove("game-over");
  }, 500);

  canPress = true;
}

GameStart();
