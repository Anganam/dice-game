// Generate random number from 1 to six
var randomNumber1 =  Math.floor(Math.random() * 6 + 1);
var randomNumber2 =  Math.floor(Math.random() * 6 + 1);

// Concatenate the random nubmer with the prefix and suffix of the image URI
var player1 = "images/dice"+randomNumber1+".png";
var player2 = "images/dice"+randomNumber2+".png";

// Dynamically change the image source URI
document.querySelectorAll("img")[0].setAttribute("src",player1);
document.querySelectorAll("img")[1].setAttribute("src",player2);

// logic to decide the the winner
if (randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent = "Draw";
} 
else if ( randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩Player 1 Wins";
}else
{
    document.querySelector("h1").textContent = "Player 2 Wins🚩";
}
