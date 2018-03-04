'use strict';

// Declare variables

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
let guessCount = 2;
var resetButton;

//Links to html ids
const guessList = document.querySelector('.guess-list');
const guessCounter = document.querySelector('.guess-count');
const guessesLeft = document.querySelector('#guesses-left');
const winCount = document.querySelector('.win-count');
const lossCount = document.querySelector('loss-count');
const lastResult = document.querySelector('.last-result');
const guessSubmit = document.querySelector('.guess-submit');
const guessField = document.querySelector('.guess-field');

//checks to see if user guess matches random leter

function checkGuess() {
  let userGuess = (guessField.value);

  if (guessCount === 2) {
    guessList.textContent = 'Previous guesses: ';
  }

  if (userGuess === randomLetter) {
    lastResult.textContent = 'You Win!';
    setGameOver();

  } else if (guessCount === 1) {
    lastResult.textContent = '!!!GAME OVER!!!';
    setGameOver();

  } else {
    lastResult.textContent = 'Nope!';
  }

  guessCount--;
  guessCounter.textContent = 'Guesses left: ' + guessCount;
  guessList.textContent += userGuess + ' ';
  guessField.value = '';
  guessField.focus();
}


//Evaluate match when user clicks
guessSubmit.addEventListener('click', checkGuess);

//Stop game so that user can't enter any more inputs
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

//Reset the game so a player can start again
function resetGame() {
  guessCount = 1;

  guessList.textContent = '';
  guessCounter.textContent = '';
  lastResult.textContent = '';

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  randomLetter = alphabet[(Math.floor(Math.random() * alphabet.length))];
}