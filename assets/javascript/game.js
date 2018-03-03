'use strict';

// Declare variables

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
let guessCount = 8;

//Links to html ids
const guesses = document.querySelector('.guesses');
const guessesLeft = document.querySelector('.guessesLeft');
const scoreWins = document.querySelector('.wins');
const scoreLosses = document.querySelector('losses');
const lastResult = document.querySelector('.lastResult');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

//checks to see if user guess matches random leter

function checkGuess() {
  let userGuess = (guessField.value);
  if (guessCount === 8) {
    guesses.textContent = 'Previous guesses: ';
    guessesLeft.textContent = 'Guesses left: ';
  }

  guesses.textContent += userGuess + ' ';
  guessesLeft.textContent += guessCount;
 
  if (userGuess === randomLetter) {
    lastResult.textContent = 'You Win!';
    setGameOver();

  } else if (guessCount === 0) {
    lastResult.textContent = '!!!GAME OVER!!!';

    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
  }
 
  guessCount--;
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

  var resetParas = document.querySelectorAll('.resultParas p');
  for (var i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  randomLetter = alphabet(Math.floor(Math.random() * alphabet.length));
}