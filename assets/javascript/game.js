
document.ready(function(){
//sets initial variables    
var wins = 0;
var losses= 0;
var firstCrystal= Math.floor(Math.random()*11+1) ;
var secondCrystal= Math.floor(Math.random()*11+1);
var thirdCrystal = Math.floor(Math.random()*11+1);
var fourthCrystal = Math.floor(Math.random()*11+1);
var userTotal = "";


//picks a random number for the user's goal
var randomNumber = Math.floor(Math.random()*101+19);
//prints randomNumber to check
console.log(randomNumber);
//append randomNumber to html
$("#random-number").html("<p>" + randomNumber + "</p>");

});
//assigns random values to each crystal

function numOne() {
    console.log(firstCrystal);
}

function numTwo (){
    
    console.log(secondCrystal);

}

function numThree() {
    
    console.log(thirdCrystal);
}

function numFour() {
    
    console.log(fourthCrystal);
}

numOne();
numTwo();
numThree();
numFour();

//page loads, run first function
firstFunction();

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
