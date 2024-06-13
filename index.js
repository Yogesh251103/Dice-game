var images = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];

const dice1 = Math.floor(Math.random()*images.length);
const dice2 = Math.floor(Math.random()*images.length);

const h1 = document.getElementById("heading");
const i1 = document.getElementById("image1");
const i2 = document.getElementById("image2");

i1.src = images[dice1];
i2.src = images[dice2];

if(dice1===dice2) h1.innerText = "Tie!"
else if(dice1>dice2) h1.innerText = "Player 1 won!"
else h1.innerText = "Player 2 won!"


