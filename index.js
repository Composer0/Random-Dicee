var randomNumber1 = Math.floor(Math.random() * 6) + 1;


if (randomNumber1 === 1) {
    document.querySelector(".img1").setAttribute("src", "image/dice1.png");
}
if (randomNumber1 === 2) {
    document.querySelector(".img1").setAttribute("src", "image/dice2.png");
}
if (randomNumber1 === 3) {
    document.querySelector(".img1").setAttribute("src", "image/dice3.png");
}
if (randomNumber1 === 4) {
    document.querySelector(".img1").setAttribute("src", "image/dice4.png");
}
if (randomNumber1 === 5) {
    document.querySelector(".img1").setAttribute("src", "image/dice5.png");
}
if (randomNumber1 === 6) {
    document.querySelector(".img6").setAttribute("src", "image/dice6.png");
}

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").setAttribute("src", "image/dice" + randomNumber1 + ".png");


if (randomNumber1 === randomNumber2) {
    document.querySelector('h1').innerHTML = ("DRAW!!!");
}
if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = ("PLAYER 1 WINS!!!");
}
if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = ("PLAYER 2 WINS!!!");
}