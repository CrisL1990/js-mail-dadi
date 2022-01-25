
//Genera due numeri randomici da 1 a 6 per player e computer
let playerNumber = Math.floor(Math.random()*6)+1;
let computerNumber = Math.floor(Math.random()*6)+1;

//Inserisce in HTML il valore di playerNumber e computerNumber
document.getElementById("player").innerHTML="<p>Player number is: " + playerNumber + "</p>";
document.getElementById("computer").innerHTML="<p>Computer number is: " + computerNumber + "</p>";

//Inserisce in HTML il risultato a seconda del risultato dato dal confronto di playerNumber e computerNumber
if(computerNumber > playerNumber){
    document.getElementById("winner").innerHTML="<p>COMPUTER WINS!</p>";
}

else if(computerNumber < playerNumber){
    document.getElementById("winner").innerHTML="<p>PLAYER WINS!</p>";
}

else{
    document.getElementById("winner").innerHTML="<p>TIE!</p>";
}