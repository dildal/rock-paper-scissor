const HANDS =['rock', 'paper', 'scissors'];
const computerSelection = computerPlay();
const playerSelection = "rock"

function computerPlay() {
	return HANDS[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection){
	playerSelection = playerSelection.toLowerCase();
	switch(playerSelection) {
		case 'rock':
			if(computerSelection === 'rock'){
				return [`Thats a tie :/`, `tie.`];
			} else if(computerSelection === 'paper'){
				return [`Oof sorry, ${computerSelection} beats ${playerSelection}`, 'loss'];
			} else {
				return [`Hell yea dude, ${playerSelection} beats ${computerSelection}`, 'win'];
			}
		case 'paper':
			if(computerSelection === 'paper'){
				return [`Thats a tie :/`, `tie.`];
			} else if(computerSelection === 'scissors'){
				return [`Oof sorry, ${computerSelection} beats ${playerSelection}`, `loss`];
			} else {
				return [`Hell yea dude, ${playerSelection} beats ${computerSelection}`, `win`];
			}
		case 'scissors':
			if(computerSelection === 'scissors'){
				return [`Thats a tie :/`, `tie.`];
			} else if(computerSelection === 'rock'){
				return [`Oof sorry, ${computerSelection} beats ${playerSelection}`, `loss`];
			} else {
				return [`Hell yea dude, ${playerSelection} beats ${computerSelection}`, `win`];
			}
	}
}

function game(){
	let wins = 0;
	let losses = 0;
	for(i = 0; i < 5; i++){
		let playerHand = prompt("What you want to throw?");
		let computerHand = computerPlay();
		playerHand = playerHand.toLowerCase();
		while(playerHand !== 'rock' && playerHand !== 'scissors' && playerHand !== 'paper'){
			playerHand = prompt(`My hand can't do that. Please enter "rock", "paper", or "scissors"`);
		}
		let result = playRound(playerHand, computerHand);
		if(result[1] === 'win'){
			console.log(result[0]);
			wins++;
		} else if(result[1] === 'loss'){
			console.log(result[0]);
			losses++;
		} else{
			console.log(result[0]);
		}
	}
	return `You went ${wins} and ${losses} not bad i guess`
}

console.log(game());