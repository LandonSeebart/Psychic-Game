

// const computerPlayer = {
//     const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
//     'm','n','o','p','q','r','s','t','u','v','w','x','y','z']
//     computerChoiceSelecter: function(arg1) {
//        return (arg1[Math.floor(Math.random() * arg1.length)]);
//     },
// };

// const humanPlayer = {
//     guess: "a",
//     playerGuesses: [ ],
//     recordPlayerInput: function(arg1) {
//        humanPlayer.playerGuesses.push(arg1);
//     }
// };

// const scoreKeeper = {
//     evaluateChoices: function(arg1, arg2) {
//     },
//     updateScore: function {

//     }

// }

// const a = computerPlayer.computerChoiceSelecter(computerPlayer.computerChoices);


const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

// var guesses = document.querySelector('.guesses');
// var lastResult = document.querySelector('.lastResult');
// var guessSubmit = document.querySelector('.guessSubmit');
// var guessField = document.querySelector('.guessField');
// var guessCount = 1;
// var resetButton;



function checkGuess() {
var userGuess = a;
//   if (guessCount === 1) {
//     guesses.textContent = 'Previous guesses: ';
//   }
//   guesses.textContent += userGuess + ' ';
 
//   if (userGuess === randomLetter) {
//     lastResult.textContent = 'Yup!';
//     setGameOver();
//   } else if (guessCount === 10) {
//     lastResult.textContent = '!!!GAME OVER!!!';
//     setGameOver();
//  } else {
//     lastResult.textContent = 'Wrong!';
//   }
 
//   guessCount++;
//   guessField.value = '';
//   guessField.focus();
// }

// guessSubmit.addEventListener('click', checkGuess);

// function setGameOver() {
//   guessField.disabled = true;
//   guessSubmit.disabled = true;
//   resetButton = document.createElement('button');
//   resetButton.textContent = 'Start new game';
//   document.body.appendChild(resetButton);
//   resetButton.addEventListener('click', resetGame);
// }

// function resetGame() {
//   guessCount = 1;

//   var resetParas = document.querySelectorAll('.resultParas p');
//   for (var i = 0 ; i < resetParas.length ; i++) {
//     resetParas[i].textContent = '';
//   }

//   resetButton.parentNode.removeChild(resetButton);

//   guessField.disabled = false;
//   guessSubmit.disabled = false;
//   guessField.value = '';
//   guessField.focus();

//   lastResult.style.backgroundColor = 'white';

//   randomLetter = alphabet(Math.floor(Math.random() * alphabet.length));
// }
