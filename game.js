const colors = ["red", "green", "blue", "yellow"];
const buttons = $(".button");
const colorPattern = [];
const playerPattern = [];

let isGameOver = false;

console.log(buttons);

function GameLoop() {
  while (!isGameOver) {}
}

function AddNextColor() {
  const randColor = Math.floor(Math.random() * 4);
  let color = colors[randColor];
  colorPattern.push(color);
  alert(color);
}
