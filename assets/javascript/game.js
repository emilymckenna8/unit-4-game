
//begin initial function
$(document).ready(function(){
//sets initial variables    
var numWins = 0;
var losses= 0;
var firstCrystal= Math.floor(Math.random()*11+1) ;
var secondCrystal= Math.floor(Math.random()*11+1);
var thirdCrystal = Math.floor(Math.random()*11+1);
var fourthCrystal = Math.floor(Math.random()*11+1);
var userTotal = 0;
//prints numbers for tracking
console.log(firstCrystal);
console.log(secondCrystal);
console.log(thirdCrystal);
console.log(fourthCrystal);


$("#wins").html("<p>Wins: " + numWins + "</p>");

$("#losses").html("<p>Losses: " + losses + "</p>")





//picks a random number for the user's goal
var randomNumber = Math.floor(Math.random()*101+19);
//prints randomNumber to check
console.log(randomNumber);
//append randomNumber to html
$("#random-number").html("<p>" + randomNumber + "</p>");
//append userTotal to html
$("#user-data-score").html("<p>" + userTotal + "</p>");

//wins function
function wins(){
    alert("Great Job!");
    reset();
 }
//losses function
function lose(){
   alert("Bummer!");
   reset();
}
//button clicks to increase userTotal by amount defined by crystal button

$("#crystal-1").on("click", function(){
    userTotal = userTotal + firstCrystal;
    $("#user-data-score").html("<p>" + userTotal + "</p>");
    console.log(userTotal);
    if (userTotal === randomNumber){
        numWins++;
        wins();
        $("#wins").html("<p>Wins: " + numWins + "</p>")}
    

    if (userTotal > randomNumber) {
        losses++;
        lose();
        $("#losses").html("<p>Losses: " + losses + "</p>")}
    })

$("#crystal-2").on("click", function(){
    userTotal = userTotal + secondCrystal;
    $("#user-data-score").html("<p>" + numWins + "</p>");
    console.log(userTotal);
    if (userTotal === randomNumber){
        numWins++;
        wins();
        $("#wins").html("<p>Wins: " + wins + "</p>")}
  

    if (userTotal > randomNumber) {
        numWins++;
        lose();
        $("#losses").html("<p>Losses: " + losses + "</p>")}
})

$("#crystal-3").on("click", function(){
    userTotal = userTotal + thirdCrystal;
    $("#user-data-score").html("<p>" + userTotal + "</p>");
    console.log(userTotal);
    if (userTotal === randomNumber){
        numWins++;
        wins();
        $("#wins").html("<p>Wins: " + numWins + "</p>")}


    if (userTotal > randomNumber) {
        losses++;
        lose();
        $("#losses").html("<p>Losses: " + losses + "</p>")}
    })

$("#crystal-4").on("click", function(){
    userTotal = userTotal + fourthCrystal;
    $("#user-data-score").html("<p>" + userTotal + "</p>");
    console.log(userTotal);
    if (userTotal === randomNumber){
        numWins++;
        wins();
        $("#wins").html("<p>Wins: " + numWins + "</p>")}


    if (userTotal > randomNumber) {
        losses++;
        lose();
        $("#losses").html("<p>Losses: " + losses + "</p>")}


    })





//reset function
function reset(){
    userTotal = 0;
    $("#user-data-score").html("<p>" + userTotal + "</p>")
    firstCrystal= Math.floor(Math.random()*11+1) ;
    secondCrystal= Math.floor(Math.random()*11+1);
    thirdCrystal = Math.floor(Math.random()*11+1);
    fourthCrystal = Math.floor(Math.random()*11+1);
    randomNumber = Math.floor(Math.random()*101+19);
    $("#random-number").html("<p>" + randomNumber + "</p>");

    console.log(firstCrystal);
    console.log(secondCrystal);
    console.log(thirdCrystal);
    console.log(fourthCrystal);
    console.log(randomNumber);
};


//end initial function
});