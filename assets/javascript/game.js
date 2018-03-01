

const computerPlayer = {
    computerChoices: ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    computerChoiceSelecter: function(arg1) {
       return (arg1[Math.floor(Math.random() * arg1.length)]);
    }
};

const a = computerPlayer.computerChoiceSelecter(computerPlayer.computerChoices);

// const humanPlayer = {
//     guess: "a",
//     playerGuesses: [ ],
//     recordPlayerInput: function(arg1) {
//        humanPlayer.playerGuesses.push(arg1);
//     }
// };

console.log(a);

