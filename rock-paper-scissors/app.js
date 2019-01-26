// Variables
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

// computer generated choice multiply by 3 // It never exceeded above 3;
function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// Convert the argument from the computer and convert it to word to display on the screen
function convertToWord(letter) {
  if (letter === 'r') return 'ROCK';
  if (letter === 'p') return 'PAPER';
  if (letter === 's') return 'SCISSORS';
}

// Function to run win() lose() or draw();
function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = 'user'.fontsize(3).sup();
  const smallCompWord = 'comp'.fontsize(3).sup();
  // result_p.innerHTML = convertToWord(user) + " beats " + convertToWord(computer) + ". You WIN!";
  result_p.innerHTML = `${convertToWord(
    user,
  )}${smallUserWord}  beats ${convertToWord(
    computer,
  )}${smallCompWord}  . You WIN!`;
  document.getElementById(user).classList.add('green-glow');
}

function lose(user, computer) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = 'user'.fontsize(3).sup();
  const smallCompWord = 'comp'.fontsize(3).sup();
  result_p.innerHTML = `${convertToWord(
    user,
  )}${smallUserWord}  loses to ${convertToWord(
    computer,
  )}${smallCompWord}  . You LOST!`;
}

function draw(user, computer) {
  const smallUserWord = 'user'.fontsize(3).sup();
  const smallCompWord = 'comp'.fontsize(3).sup();
  result_p.innerHTML = `${convertToWord(
    user,
  )}${smallUserWord}  equals ${convertToWord(
    computer,
  )}${smallCompWord}  . DRAW!`;
}

// Compare between user choice and computer choice
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoice);
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice, computerChoice);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice, computerChoice);
      break;
  }
}

// click event for user choices rock, paper or scissors
function main() {
  rock_div.addEventListener('click', function() {
    game('r');
  });

  paper_div.addEventListener('click', function() {
    game('p');
  });

  scissors_div.addEventListener('click', function() {
    game('s');
  });
}

main();
