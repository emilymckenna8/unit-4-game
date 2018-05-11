//sets initial variables

var wins = 0;
var losses= 0;
var firstCrystal="" ;
var secondCrystal= "";
var thirdCrystal = "";
var fourthCrystal = "";
var userTotal = "";
//picks a random number

var randomNumber = Math.floor(Math.random() * 121);

console.log(randomNumber);

//assigns random values to each crystal

function numOne() {

}

function numTwo (){
    
}

function numThree() {

}

function numFour() {

}

//reset function

//wins function
if (userTotal === randomNumber){
    wins++;
    alert("You Win!");
    reset();
}
//losses function

