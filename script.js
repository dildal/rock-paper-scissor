const HANDS =['rock', 'paper', 'scissors'];
const gameOver = true;
const startButton = document.querySelector('.play-again')
const sides = document.querySelectorAll('.hand');
const playerHands = document.querySelectorAll('.player-hand');
const scoreboard = document.querySelector('.scoreboard-container');
const winDisplay = document.querySelector('.wins');
const lossDisplay = document.querySelector('.losses');
const resultDisplay = document.querySelector('.result-display')
const computerHandDisplay = document.querySelector('.computer-hand');

let wins;
let losses;

playerHands.forEach(playerHand => {
	playerHand.addEventListener('click', handlePlayerHand)
})

startButton.addEventListener('click', startGame);

function handlePlayerHand(e) {
	let result = playRound(e.target.value, computerPlay());
	resultDisplay.textContent = result[0];
	if(result[1] === 'win'){
		wins++;
	} else if(result[1] === 'loss'){
		losses++;
	}
	setScoreboard();
}


function computerPlay() {
	let compHand = HANDS[Math.floor(Math.random() * 3)];
	computerHandDisplay.textContent = compHand;
	return compHand;
}

function setScoreboard(){
	winDisplay.textContent = wins;
	lossDisplay.textContent = losses;
}

function playRound(playerSelection, computerSelection){
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

function startGame(){
	sides.forEach(side => side.classList.toggle('hidden'));
	startButton.classList.toggle('hidden');
	scoreboard.classList.toggle('hidden');
	wins = 0;
	losses = 0;
	setScoreboard();
	// for(i = 0; i < 5; i++){
	// 	while(playerHand !== 'rock' && playerHand !== 'scissors' && playerHand !== 'paper'){
	// 		playerHand = prompt(`My hand can't do that. Please enter "rock", "paper", or "scissors"`);
	// 	}
	// 	let result = playRound(playerHand, computerHand);
	// 	if(result[1] === 'win'){
	// 		console.log(result[0]);
	// 		wins++;
	// 	} else if(result[1] === 'loss'){
	// 		console.log(result[0]);
	// 		losses++;
	// 	} else{
	// 		console.log(result[0]);
	// 	}
	// }
	return `You went ${wins} and ${losses} not bad i guess`
}

