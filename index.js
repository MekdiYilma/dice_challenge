var x1 = Math.floor(Math.random() * 6) + 1;
var x2 = Math.floor(Math.random() * 6) + 1;

console.log(x1, x2);

var src1 = "./images/dice" + x1 + ".png";
var src2 = "./images/dice" + x2 + ".png";

console.log(src1, src2);

document.querySelector(".player-1-img").setAttribute("src", src1);

document.querySelector(".player-2-img").setAttribute("src", src2);

if (x1 > x2) {
  document.querySelector("h1").innerText = "Player 1 Wins!";
} else if (x1 < x2) {
  document.querySelector("h1").innerText = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerText = "Draw";
}
