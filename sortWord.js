// program to sort words in alphabetical order
var prompt = require('prompt-sync')();
// take input
const string = prompt('Enter a sentence: ');

// converting to an array
const words = string.split(' ');
// console.log(words);

// sort the array elements
words.sort();
// console.log(words);
// display the sorted words
console.log('The sorted words are:');

for (const element of words) {
  console.log(element);
}