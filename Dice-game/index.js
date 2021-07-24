var randomNumber1 =  Math.floor(Math.random() * 6 + 1);
var randomNumber2 =  Math.floor(Math.random() * 6 + 1);

var player1 = "images/dice"+randomNumber1+".png";
var player2 = "images/dice"+randomNumber2+".png";

document.getElementsByClassName("img1")[0].setAttribute("src",player1);
document.getElementsByClassName("img2")[0].setAttribute("src",player2);

if (randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent = "Draw";
} 
else if ( randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins"
}else
{
    document.querySelector("h1").textContent = "Player 2 Wins"
}