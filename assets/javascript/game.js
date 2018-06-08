$(document).ready(function(){


var targetNumber = Math.floor(Math.random() * 102) + 18;
console.log(targetNumber);
$("#number-to-guess").text(targetNumber);

var counter = 0;

var yourCurrentTotal = 0;

var wins = 0;
 
var loss = 0;

var winYes = false;

var lossYes = false;

var crystalVal1 = Math.round(Math.random() * 11) + 1;
console.log(crystalVal1);
var crystalVal2 = Math.round(Math.random() * 11) + 1;
console.log(crystalVal2);
var crystalVal3 = Math.round(Math.random() * 11) + 1;
console.log(crystalVal3);
var crystalVal4 = Math.round(Math.random() * 11) + 1;
console.log(crystalVal4);


// Add Total Score From Crystals Selected

$("#crystal1").click(function(){
  yourCurrentTotal = yourCurrentTotal + crystalVal1;
  $("#yourCurrentTotal").text(" " + yourCurrentTotal);
//  compare();
})

$("#crystal2").click(function(){
  yourCurrentTotal = yourCurrentTotal + crystalVal2;
  $("#yourCurrentTotal").text(" " + yourCurrentTotal);
})

$("#crystal3").click(function(){
  yourCurrentTotal = yourCurrentTotal + crystalVal3;
  $("#yourCurrentTotal").text(" " + yourCurrentTotal);
})

$("#crystal4").click(function(){
  yourCurrentTotal = yourCurrentTotal + crystalVal4;
  $("#yourCurrentTotal").text(" " + yourCurrentTotal);
})

function youWin() {

  // in the element with an id of time-left add an h2 saying Time's Up!
  // console log done
//  console.log("YOU WIN!");
  $('#game-status').append("<h2>YOU WIN!!</h2>");
//  console.log("You have won!");

 }


 function youLose() {

  // in the element with an id of time-left add an h2 saying Time's Up!
  // console log done
 // console.log("YOU LOSE!");
  $('#game-status').append("<h2>YOU LOSE!!</h2>");
 // console.log("You have LOSE!");

 }

 function resetValues() {
  var targetNumber = Math.floor(Math.random() * 102) + 18;
  console.log(targetNumber);
  $("#number-to-guess").text(targetNumber);

  var yourCurrentTotal = 0;

  var crystalVal1 = Math.round(Math.random() * 11) + 1;
  console.log(crystalVal1);
  var crystalVal2 = Math.round(Math.random() * 11) + 1;
  console.log(crystalVal2);
  var crystalVal3 = Math.round(Math.random() * 11) + 1;
  console.log(crystalVal3);
  var crystalVal4 = Math.round(Math.random() * 11) + 1;
  console.log(crystalVal4);

 

// Add Total Score From Crystals Selected

$("#crystal1").click(function(){
  yourCurrentTotal = yourCurrentTotal + crystalVal1;
  $("#yourCurrentTotal").text(" " + yourCurrentTotal);
//  compare();
})

$("#crystal2").click(function(){
  yourCurrentTotal = yourCurrentTotal + crystalVal2;
  $("#yourCurrentTotal").text(" " + yourCurrentTotal);
//  compare();
})

$("#crystal3").click(function(){
  yourCurrentTotal = yourCurrentTotal + crystalVal3;
  $("#yourCurrentTotal").text(" " + yourCurrentTotal);
//  compare();
})

$("#crystal4").click(function(){
  yourCurrentTotal = yourCurrentTotal + crystalVal4;
  $("#yourCurrentTotal").text(" " + yourCurrentTotal);
//  compare();
})

}


// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function() {


  if (yourCurrentTotal === targetNumber) {
    wins++;
    youWin();
    winYes = true;
    resetValues();
  }
  else if (yourCurrentTotal > targetNumber) {
    loss++;
    lossYes = true;
    resetValues();
  }

  $("#total-wins").text(wins);

  $("#total-losses").text(loss);


  if (yourCurrentTotal === targetNumber) {
    alert("You win!")
    yourCurrentTotal = 0
    $("#yourCurrentTotal").text(" " + yourCurrentTotal)
  }
  else if (yourCurrentTotal >= targetNumber) {
    alert("You lose!!")
    yourCurrentTotal = 0
    $("#yourCurrentTotal").text(" " + yourCurrentTotal)

  }
});
// Total Score needs to be reset to zero after a win or loss *** will need revision
});
