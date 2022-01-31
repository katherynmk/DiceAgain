function RollSixSidedDice() {
    document.getElementById("dice").value = Math.floor(Math.random()*6) + 1;
    document.getElementById("dice1").value = Math.floor(Math.random()*6) + 1;
}


function Winner(){

//  pseudo code
//If roll 1 is greater than roll 2
//roll 1 wins

//if roll 2 is greater than roll 1
//roll 2 wins

//if they roll1 == roll2
//they ties

// This function goes under the if statements (if they win)
  confetti();
  confetti({
  spread: 100
  });

}
