
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
    $("#user-data-score").html("<p>" + userTotal + "</p>")
});

$("#crystal-2").on("click", function(){
    userTotal = userTotal + secondCrystal;
    $("#user-data-score").html("<p>" + userTotal + "</p>")
});

$("#crystal-3").on("click", function(){
    userTotal = userTotal + thirdCrystal;
    $("#user-data-score").html("<p>" + userTotal + "</p>")
});

$("#crystal-4").on("click", function(){
    userTotal = userTotal + fourthCrystal;
    $("#user-data-score").html("<p>" + userTotal + "</p>")
});
//page loads, run first function


//button clicks to increase userTotal by amount defined by crystal button



//reset function

//wins function
// if (userTotal === randomNumber){
//     wins++;
//     alert("You Win!");
//     reset();
// }
// //losses function
// else {
//     losses++;
//     alert("Bummer!");
//     reset();
//}
});