//create var for each crystal
var userTotal = 0;
var wins = 0;
var losses = 0;
//create random number at the start of the game as a goal for the player (19-120)
var randomNum = Math.floor(Math.random() * 101) + 19;
console.log(randomNum)
//create random crystal value (1-12)
var crystalOne = Math.floor(Math.random() * 12) + 1;
var crystalTwo = Math.floor(Math.random() * 12) + 1;
var crystalThree = Math.floor(Math.random() * 12) + 1;
var crystalFour = Math.floor(Math.random() * 12) + 1;
//create player input via crystal value and button clicks
$(".buttonOne").click(function () {
    userTotal += crystalOne;
    $("#userTotal").html(userTotal); // displays user score
    yuh();
    nuh();
});
$(".buttonTwo").click(function () {
    userTotal += crystalTwo;
    $("#userTotal").html(userTotal); // displays user score
    yuh();
    nuh();
});
$(".buttonThree").click(function () {
    userTotal += crystalThree;
    $("#userTotal").html(userTotal); // displays user score
    yuh();
    nuh();
});
$(".buttonFour").click(function () {
    userTotal += crystalFour;
    $("#userTotal").html(userTotal); // displays user score
    yuh();
    nuh();
    function reset() {
        if (userTotal > randomNum || userTotal == randomNum) {
            userTotal = 0;
            randomNum = Math.floor(Math.random() * 101) + 19;
            crystalOne = Math.floor(Math.random() * 12) + 1;
            crystalTwo = Math.floor(Math.random() * 12) + 1;
            crystalThree = Math.floor(Math.random() * 12) + 1;
            crystalFour = Math.floor(Math.random() * 12) + 1;

        }
    }
})
    //If numbers match, player wins 
    function yuh() {
        if (userTotal === randomNum) {
            alert("You win!");
            wins++;
            $("#winNumber").html(wins); // displays wins
            reset();
        }
    }
    //If player input exceeds, player loses 
    function nuh() {
        if (userTotal > randomNum) {
            alert("You lose!");
            losses++;
            $("#losingNumber").html(losses); // displays losses
            reset();
        }
    };
$("#randomNum").html(randomNum); //displays target number





