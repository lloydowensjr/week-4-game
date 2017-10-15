

var touch;
var goal;
var loss;
var win;





//random value created as "goal"

goal = Math.floor(Math.random() * 95) + 30;
$('.goal').html(goal);
// Start game with 0 as a crystal count
function toStart() {

var counter = 0; 
	$('.yours').html(counter);
	
}

toStart()

wins = 0;
$('.wins').html(wins)
losses = 0;
$('.losses').html(losses)

//game having four crystals
// each crystal has a random number between 1-10
var random1 = Math.floor(Math.random() * 11) + 1;
var random2 = Math.floor(Math.random() * 11) + 1;
var random3 = Math.floor(Math.random() * 11) + 1;
var random4 = Math.floor(Math.random() * 11) + 1;
//new random number generated for crystal when user wins or loses

function newStart(){
var random1 = Math.floor(Math.random() * 11) + 1;
var random2 = Math.floor(Math.random() * 11) + 1;
var random3 = Math.floor(Math.random() * 11) + 1;
var random4 = Math.floor(Math.random() * 11) + 1;
};


//by clicking crystal user adds value to their number

//var random = Math.floor(Math.random() * 24) + 1;
//console.log(random)
//var targetNumber = 50;
counter = 0;
$('#crystal1').on("click", function(){

	counter = counter + random1;

	$('.yours').html(counter);

	//console.log(counter);

});

$('#crystal2').on("click", function(){
	
	counter = counter + random2;

	$('.yours').html(counter);

	if (counter === goal){
	win();
}
	else if (counter > goal){
	lose();
}

	//console.log(counter);

});

$('#crystal3').on("click", function(){
	
	counter = counter + random3;

	$('.yours').html(counter);

	if (counter === goal){
	win();
}
	else if (counter > goal){
	lose();
}

	//console.log(counter);

});

$('#crystal4').on("click", function(){

	counter = counter + random4;

	$('.yours').html(counter);

	if (counter === goal){
	win();
}
	else if (counter > goal){
	lose();
}
	
	//console.log(counter);
});


//until it equals or is greater than "goal" number

if (counter === goal){
	win();
}
else if (counter > goal){
	lose();
}


//goal is to equal "goal" number



	//if its not greater than random result user starts over and loss is added
	function lose(){
		losses ++;
		$('.losses').html(losses);
		alert("QUIT WHILE YOU CAN, LOSER!")
		toStart();
		
	}


	//if its equal user wins we add a win 
	function win(){
		wins ++;
		$('.wins').html(wins);
		alert("YOU DID THAT!!");
		toStart();
		
	}

newStart();
