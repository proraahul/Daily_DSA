// program to find the ASCII value of a character

var prompt = require('prompt-sync')();

// take input from the user
const string = prompt('Enter a character: ');

// convert into ASCII value
const result = string.charCodeAt(0);

console.log(`The ASCII value is: ${result}`);