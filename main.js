console.log ('rock paper scissors');


function calculateWinner(player1Choice, player2Choice){

	var player1Choice = player1Choice.toLowerCase();
	var player2Choice = player2Choice.toLowerCase();

	var winner = "";

	if (player1Choice === 'rock' && player2Choice === 'paper') winner = "player2 has won";
	if (player1Choice === 'rock' && player2Choice === 'scissors') winner = "player1 has won";
	if (player1Choice === 'rock' && player2Choice === 'rock') winner = "draw";

	if (player1Choice === 'paper' && player2Choice === 'paper') winner = "draw";
	if (player1Choice === 'paper' && player2Choice === 'scissors') winner = "player2 has won";
	if (player1Choice === 'paper' && player2Choice === 'rock') winner = "player1 has won";

	if (player1Choice === 'scissors' && player2Choice === 'paper') winner = "player1 has won";
	if (player1Choice === 'scissors' && player2Choice === 'scissors') winner = "draw";
	if (player1Choice === 'scissors' && player2Choice === 'rock') winner = "player2 has won";

	return winner;
}


function generateComputerMove(){

	var moveNumber = Math.floor(Math.random()*3);
	var move = "";

	switch(moveNumber){

		case 0:
			move = 'rock';
			break;

		case 1:
			move = 'scissors';
			break;

		case 2:
			move = 'paper';
			break;
	}

	return move;

}


function reset() {

	var playAgainResponse = prompt('play again? \n y/n');

	var playAgain = true;

	if(playAgainResponse === 'n'){

		playAgain = false;

	} else if(playAgainResponse === 'y'){

		 playAgain = true;

	}

	return playAgain;
}


function validateMove(move){

	var inValidMove = true;

	if(move === 'rock' || move === 'paper' || move === 'scissors'){

		inValidMove = false;
	}

	return inValidMove;

}




function run(){

	var playAgain = true;

	var player1Score = 0;
	var player2Score = 0;

	while(playAgain){

		alert('ROCK PAPER SCISSORS!');

		while(Math.max(player1Score,player2Score)<2){

			var inValidMove = true;

			do {

				var player1Choice = prompt('Player1: please choose "rock", "paper" or "scissors"');
				inValidMove = validateMove(player1Choice);

			} while (inValidMove);

			var computerPlayerChoice = generateComputerMove();

			alert('player2 chose ' + computerPlayerChoice);

			var result = calculateWinner(player1Choice,computerPlayerChoice);

			if (result === 'player2 has won') {
				player2Score++;
			}else if(result === 'player1 has won'){
				player1Score++;
			}

			alert(result);
			alert('score:' +
				'\n player1: ' + player1Score + 
				'\n player2: ' + player2Score);

		}

		if (player1Score > player1Score) {

			alert('player1 has won the game!')

		} else if (player2Score > player1Score){

			alert('player2 has won the game!')
		}


		var playAgain = reset();

	}

}