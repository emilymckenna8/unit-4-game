//sets initial variables

var wins = 0;
var losses= 0;
var firstCrystal="" ;
var secondCrystal= "";
var thirdCrystal = "";
var fourthCrystal = "";
var userTotal = "";

//user clicks to start the game


function firstFunction() {
//picks a random number for the user's goal
var randomNumber = Math.floor(Math.random()*101+19);
//prints randomNumber to check
console.log(randomNumber);
//append randomNumber to html
$("#random-number").html("<p>" + randomNumber + "</p>")

//assigns random values to each crystal

function numOne() {
    var firstCrystal = Math.floor(Math.random()*11+1)
    console.log(firstCrystal);
}

function numTwo (){
    var secondCrystal = Math.floor(Math.random()*11+1);
    console.log(secondCrystal);

}

function numThree() {
    var thirdCrystal = Math.floor(Math.random()*11+1);
    console.log(thirdCrystal);
}

function numFour() {
    var fourthCrystal = Math.floor(Math.random()*11+1)
    console.log(fourthCrystal);
}

numOne();
numTwo();
numThree();
numFour();
};
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
