var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
var randomDiceImage = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomDiceImage2);

if (randomNumber1 === randomNumber2) {
    document.querySelector('h1').innerHTML = ("DRAW!!!");
}
if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = ("PLAYER 1 WINS!!!");
}
if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = ("PLAYER 2 WINS!!!");
}