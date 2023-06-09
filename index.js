/// -------Dice 1  ------translate is dado 1
let randomNumber1 = Math.floor(Math.random() * 6) + 1; //this Give a random number from 1 to 6
let randomDiceImage  = "dice" + randomNumber1 + ".png";//change the name of the image dice1,dice2,dice3
let randomImageSource = "images/" + randomDiceImage ; // I substitute the name of Image

let image1 = document.querySelectorAll("img")[0];//select the firs img  
image1.setAttribute("src", randomImageSource);// change the attribute src="images/image1"

/// -------Dice 2  ------translate is dado 2
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

let image2 = document.querySelectorAll("img")[1];// select the second img 
image2.setAttribute("src", randomImageSource2); // change the src

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!"
} else if ( randomNumber1 < randomNumber2 ) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
} else {
    document.querySelector("h1").innerHTML = "Draw"
}

// button play again

function refreshPage() {
    location.reload();
}