//This is a game with 4 crystals - We need four crystals displayed as buttons on the page
//The player will be shown a random number at the start of the game. When the game begins again, the player should see a new random number, which should be between 19 - 120.
var compPick = Math.floor(Math.random() * 101) + 19; 
		console.log("compPick: " + compPick); 
		$("#randomNumber").html("Match this Number: " + compPick); 

//A new random number for each crystal should generate each time we win or lose. Each crystal has to have a random number between 1-12
var one = Math.floor(Math.random() * 12) + 1; 
		console.log("Crystal 1: " + one); 
		$("#img1").html("<img src=" + "assets/images/bluecrystals.jpeg" + " value=" + one + ">"); 

var two = Math.floor(Math.random() * 12) + 1; 
		console.log("Crystal 2: " + two); 
		$("#img2").html("<img src=" + "assets/images/greencrystals.jpeg" + " value=" + two + ">"); 

var three = Math.floor(Math.random() * 12) + 1; 
		console.log("Crystal 3: " + three); 
		$("#img3").html("<img src=" + "assets/images/pinkcrystals.jpeg" + " value=" + three + ">");
	
var four = Math.floor(Math.random() * 12) + 1; 
		console.log("Crystal 4: " + four); 
        $("#img4").html("<img src=" + "assets/images/purplecrystals.jpeg" + " value=" + four + ">");

        var wins = 0; 
		console.log("wins: " + wins); 

	var losses = 0; 
		console.log("losses: " + losses); 

	var score = 0; 
		console.log("score: " + score); 
//When clicking any crystal, it should add to the previous number (it will add a specific amount of points to the player's total score)
//Until it equals the random result
//Your game will hide this amount until the player clicks a crystal
//if the score is greater than the number, the losses increase
//if it's equal, the wins counter goes up
//The game restarts whenever the player wins or loses
//The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game:
function reset () {
    compPick = Math.floor(Math.random() * 101) + 19; 
        console.log("compPick: " + compPick); 
    $("#randomNumber").html(compPick); 

    score = 0; 
    $(".scoreDisplay").html("Your Guess So Far: " + score); 

    one = Math.floor(Math.random() * 12) + 1;  
        console.log("Gem 1: " + one); 
    $("#img1").html("<img src=" + "assets/images/bluecrystals.jpeg" + " value=" + one + ">"); 
    two = Math.floor(Math.random() * 12) + 1; 
    console.log("Gem 2: " + two); 
$("#img2").html("<img src=" + "assets/images/greencrystals.jpeg" + " value=" + two + ">"); 

three = Math.floor(Math.random() * 12) + 1; 
    console.log("Gem 3: " + three); 
$("#img3").html("<img src=" + "assets/images/pinkcrystals.jpeg" + " value=" + three + ">");

four = Math.floor(Math.random() * 12) + 1; 
    console.log("Gem 4: " + four); 
$("#img4").html("<img src=" + "assets/images/purplecrystals.jpeg" + " value=" + four + ">");

$("img").on("click", function () {
    var newScore = score += parseInt($(this).attr("value")); 
        console.log("New Score: " + newScore); 
    $(".scoreDisplay").html("Your total score is: " + newScore); 

    if(newScore === compPick) { 
        wins++ ; 
        $(".wins").html("Wins: " + wins); 
            console.log("Wins: " + wins); 
            reset();     
    } 

    else if(newScore > compPick) {
        losses++ ; 
        $(".losses").html("Losses: " + losses); 
            console.log("Losses: " + losses); 
            reset(); 
        
    }

}); 



}

$("img").on("click", function () {
var newScore = score += parseInt($(this).attr("value")); 
    console.log("New Score: " + newScore); 
$(".scoreDisplay").html(newScore); 

if(newScore === compPick) { 
    wins++ ; 
    $(".wins").html("Wins: " + wins); 
        console.log("Wins: " + wins); 
        reset(); 
} 

else if(newScore > compPick) {
    losses++ ; 
    $(".losses").html("Losses: " + losses); 
        console.log("Losses: " + losses); 
        reset(); 
}

});