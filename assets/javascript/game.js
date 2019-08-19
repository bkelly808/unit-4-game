//The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game:

var random_result;
var lost = 0;
var win = 0;
var previous = 0;

$(".crystal").attr('class');

var resetAndStart = function () {

$(".crystals").empty();
//This is a game with 4 crystals - We need four crystals displayed as buttons on the page
	var images = [
			'assets/images/bluecrystals.jpeg', 
			'assets/images/greencrystals.jpeg', 
			'assets/images/pinkcrystals.jpeg', 
			'assets/images/purplecrystals.jpeg'];
    
            //The player will be shown a random number at the start of the game. When the game begins again, the player should see a new random number, which should be between 19 - 120.
    
	random_result = Math.floor(Math.random() * 101 ) + 19; 


	$("#result").html('Match this Number: ' + random_result);

	for(var i = 0; i < 4; i++){

		var random = Math.floor(Math.random() * 11) + 1;

		var crystal = $("<div>");
			crystal.attr({
				"class": 'crystal',
				"data-random": random
			});
			crystal.css({
				"background-image":"url('" + images[i] + "')",
				"background-size":"cover"

			});


		$(".crystals").append(crystal);

	}

	$("#previous").html("Total Score: " + previous);

}


resetAndStart();


//When clicking any crystal, it should add to the previous number (it will add a specific amount of points to the player's total score)
//Until it equals the random result
//Your game will hide this amount until the player clicks a crystal
//if the score is greater than the number, the losses increase
//if it's equal, the wins counter goes up
//The game restarts whenever the pl ayer wins or loses

$(document).on('click', ".crystal", function () {

	var num = parseInt($(this).attr('data-random'));

	previous += num;


	$("#previous").html("Total score: " + previous);

	console.log(previous);

	if(previous > random_result){

		lost++;

		$("#lost").html("You lost: " + lost);

		previous = 0;

		resetAndStart();

	} 
	else if(previous === random_result){

		win++;

		$("#win").html("You win: " + win);

		previous = 0;

		resetAndStart();

	}

});