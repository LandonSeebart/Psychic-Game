'use strict';

// Declare variables

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
let guessCount = 0;
let winCount = 0
let lossCount = 0
var resetButton;

//Links to html ids
const guessList = document.querySelector('.guess-list');
const guessCounter = document.querySelector('.guess-count');
const guessesLeft = document.querySelector('#guesses-left');
const winCounter = document.querySelector('.win-count');
const lossCounter = document.querySelector('.loss-count');
const lastResult = document.querySelector('.last-result');
const guessSubmit = document.querySelector('.guess-submit');
const guessField = document.querySelector('.guess-field');

//checks to see if user guess matches random leter

function checkGuess() {
  let userGuess = (guessField.value);
  guessCount++;

  if (guessCount == 1) {
  guessList.textContent = 'Previous guesses: ';
  }

  if(userGuess === randomLetter) {
  lastResult.textContent = 'You Win!';
  guessCounter.textContent = ' ';
  winCount ++;
  winCounter.textContent = 'Wins: ' + winCount;

    setGameOver();

  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    guessCounter.textContent = ' ';
    lossCount ++;
    lossCounter.textContent = 'Losses ' + lossCount;

    setGameOver();

  } else {
    lastResult.textContent = 'Nope!';
  }

  guessCounter.textContent ='Guesses left: ' + (10 - guessCount);
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
  guessCount = 9;

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