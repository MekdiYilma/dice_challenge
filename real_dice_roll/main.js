var x1 = Math.floor(Math.random() * 6) + 1;
var x2 = Math.floor(Math.random() * 6) + 1;

var diceClass1 = ".player1 .dice" + x1;
var diceClass2 = ".player2 .dice" + x2;

console.log(diceClass1);

document.querySelector(diceClass1).style.visibility = "visible";

document.querySelector(diceClass2).style.visibility = "visible";

if (x1 > x2) {
  document.querySelector("h1").innerText = "Player 1 Wins!";
} else if (x1 < x2) {
  document.querySelector("h1").innerText = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerText = "Draw";
}
