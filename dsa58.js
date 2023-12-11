// program to replace all instances of a character in a string

const string = 'Learning JavaScript Program';
const result = string.replace(/a/g, "A");
console.log(result);


const splitString = string.split('a');
const result1 = splitString.join('A');
console.log(result1);