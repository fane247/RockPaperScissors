console.log ('rock paper scissors');


function calculateWinner(player1Choice, player2Choice){

	player1Choice = player1Choice.toLowerCase();
	player2Choice = player2Choice.toLowerCase();

	winner = "";

	if (player1Choice === 'rock' && player2Choice === 'paper') winner = "player2";
	if (player1Choice === 'rock' && player2Choice === 'scissors') winner = "player1";
	if (player1Choice === 'rock' && player2Choice === 'rock') winner = "draw";

	if (player1Choice === 'paper' && player2Choice === 'paper') winner = "draw";
	if (player1Choice === 'paper' && player2Choice === 'scissors') winner = "player2";
	if (player1Choice === 'paper' && player2Choice === 'rock') winner = "player1";

	if (player1Choice === 'scissors' && player2Choice === 'paper') winner = "player1";
	if (player1Choice === 'scissors' && player2Choice === 'scissors') winner = "draw";
	if (player1Choice === 'scissors' && player2Choice === 'rock') winner = "player2";

	return winner;
}


function generateComputerMove(){


	var moveNumber = Math.floor(Math.random()*4);
	var move = "";


	switch(moveNumber){

		case 1:
			
	}



}