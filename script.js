'use strict';

// DEFINE UI VARIABLES

const guessInput = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');

const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');

const number = document.querySelector('.number');
const againBtn = document.querySelector('.again');

const background = document.querySelector('.body');

// Create Event Listeners

function loadEventListeners() {
  document.addEventListener('DOMContentLoaded', generateWinningNumber);
  checkBtn.addEventListener('click', checkNumber);
  againBtn.addEventListener('click', restartGame);
}
loadEventListeners();

//////   Determine the winning number
function generateWinningNumber() {
  const winningNumber = Math.floor(Math.random() * 20 + 1);
  return winningNumber;
}

let winningNumber = generateWinningNumber();

//////// Check number input against winning number

function checkNumber() {
  // Set guessed number as the set number
  number.textContent = guessInput.value;

  if (Number(guessInput.value) === winningNumber) {
    message.textContent = 'You Win!!!';
    // Green Win Screen
    background.style.backgroundColor = '#60b347';
    // Set High score if applicable
    if (Number(score.textContent) > Number(highscore.textContent)) {
      highscore.textContent = score.textContent;
    }
  } else {
    // Reduce Score
    score.textContent = score.textContent - 1;
    // Display Message
    if (Number(guessInput.value) < winningNumber) {
      message.textContent = 'Too Low.  Try again!';
    } else {
      message.textContent = 'Too High.  Try again!';
    }
  }

  // Set Value to Blank
  guessInput.value = '';
}

////////// Restart Game After Win

function restartGame() {
  background.style.backgroundColor = '#222';
  guessInput.value = '';
  score.textContent = 20;
  winningNumber = generateWinningNumber();
  number.textContent = '?';
  message.textContent = 'Start guessing...';
}
