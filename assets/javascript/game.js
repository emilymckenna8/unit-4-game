
$(document).ready(function(){
//sets initial variables    
var wins = 0;
var losses= 0;
var firstCrystal= Math.floor(Math.random()*11+1) ;
var secondCrystal= Math.floor(Math.random()*11+1);
var thirdCrystal = Math.floor(Math.random()*11+1);
var fourthCrystal = Math.floor(Math.random()*11+1);
var userTotal = 0;

console.log(firstCrystal);
console.log(secondCrystal);
console.log(thirdCrystal);
console.log(fourthCrystal);



//picks a random number for the user's goal
var randomNumber = Math.floor(Math.random()*101+19);
//prints randomNumber to check
console.log(randomNumber);
//append randomNumber to html
$("#random-number").html("<p>" + randomNumber + "</p>");
//append userTotal to html
$("#user-data-score").html("<p>" + userTotal + "</p>");


//button clicks to increase userTotal by amount defined by crystal button

$("#crystal-1").on("click", function(){
    userTotal = userTotal + firstCrystal;
    $("#user-data-score").html("<p>" + userTotal + "</p>");
    console.log(userTotal);
});

$("#crystal-2").on("click", function(){
    userTotal = userTotal + secondCrystal;
    $("#user-data-score").html("<p>" + userTotal + "</p>");
    console.log(userTotal);
});

$("#crystal-3").on("click", function(){
    userTotal = userTotal + thirdCrystal;
    $("#user-data-score").html("<p>" + userTotal + "</p>");
    console.log(userTotal);
});

$("#crystal-4").on("click", function(){
    userTotal = userTotal + fourthCrystal;
    $("#user-data-score").html("<p>" + userTotal + "</p>");
    console.log(userTotal);
});







//reset function
function reset(){
    userTotal = 0;
    firstCrystal= Math.floor(Math.random()*11+1) ;
    secondCrystal= Math.floor(Math.random()*11+1);
    thirdCrystal = Math.floor(Math.random()*11+1);
    fourthCrystal = Math.floor(Math.random()*11+1);
    randomNumber = Math.floor(Math.random()*101+19);
    console.log(firstCrystal);
    console.log(secondCrystal);
    console.log(thirdCrystal);
    console.log(fourthCrystal);
    console.log(randomNumber);
}
//wins function
if (userTotal === randomNumber){
   wins++;
   alert("You Win!");   
   reset();
}
//losses function
if (userTotal > randomNumber) {
    losses++;
   alert("Bummer!");
   reset();
}
});