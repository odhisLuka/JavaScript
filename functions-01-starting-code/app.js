const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const  getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase;
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomVal = Math.random();
  if (randomVal < 0.34) {
    return ROCK;
  } else if(randomVal < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => //arrow function
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

  // if (cChoice === pChoice) {
  //   return RESULT_DRAW;
  // } else if (
  //   cChoice === ROCK && pChoice === PAPER ||
  //   cChoice === PAPER && pChoice === SCISSORS ||
  //   cChoice === SCISSORS && pChoice === ROCK
  // ) {
  //   return RESULT_PLAYER_WINS;
  // } else {
  //   return RESULT_COMPUTER_WINS;
  // }

startGameBtn.addEventListener('click', () => { // callback function
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice =  getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }
  let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, the computer chose ${computerChoice}, therefore you`;
  if (winner === RESULT_DRAW) {
    message = message + ' had a draw!'
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + ' won.'
  } else {
    message = message + ' lost!'
  }
  alert(message);
  gameIsRunning = false;
});

// not related to game

const sumUp = (a, b, ...numbers) => { // rest operator/parameters
  const validateNumber = (number) => { // funtion inside a function
    return isNaN(number) ? 0 : number;
  }
 let sum = 0;
 for (const num of numbers) {
  sum += validateNumber(num);
 }
 return sum;
};

console.log(sumUp(1, 2, 3, 3, 6, 10, 'fas'));

const subtractUp = function() {
  let sum = 0;
 for (const num of arguments) { // don't use this
  sum -= num;
 }
 return sum;
};

console.log(subtractUp(3, 3, 5, 6, 5));