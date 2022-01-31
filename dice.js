function RollSixSidedDice() {
  //this just rolls dice for both boxes from the one button
  document.getElementById("dice").value = Math.floor(Math.random()*6) + 1;
  
  document.getElementById("dice1").value = Math.floor(Math.random()*6) + 1;
  

}
//this is the function that changes text + gives confetti for wins and ties

function Winner(){
  let header = document.querySelector("p");
var x = document.getElementById("dice").value;
var y =  document.getElementById("dice1").value;

if (x > y) {
  confetti();
  confetti({
  spread: 100
  });
  
  header.innerText = "Player 1 Wins";
}
if(x < y) {
  confetti();
  confetti({
  spread: 100
  });
  header.innerText = "Player 2 Wins";

}

if (x == y){
  header.innerText = "Tie";

}


}
