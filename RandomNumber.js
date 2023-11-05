// Generate a random number between min and max (inclusive)

var prompt = require('prompt-sync')();

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Function to play the guessing game
  function guessRandomNumber() {
    const minRange = 1;
    const maxRange = 100; // You can change the range as desired
    const targetNumber = generateRandomNumber(minRange, maxRange);
    let numberOfGuesses = 0;
  
    while (true) {
      const userGuess = parseInt(prompt(`Guess the number between ${minRange} and ${maxRange}:`));
  
      if (isNaN(userGuess)) {
        console.log("Please enter a valid number.");
      } else {
        numberOfGuesses++;
  
        if (userGuess < targetNumber) {
          console.log("Too low! Try again.");
        } else if (userGuess > targetNumber) {
          console.log("Too high! Try again.");
        } else {
          console.log(`Congratulations! You guessed the number ${targetNumber} in ${numberOfGuesses} guesses.`);
          break;
        }
      }
    }
  }
  
  // Start the game
  guessRandomNumber();
  