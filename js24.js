// program to find the HCF or GCD of two integers
const prompt = require('prompt-sync')();

let hcf;
// take input
const number1 = prompt('Enter a first positive integer: ');
const number2 = prompt('Enter a second positive integer: ');

// looping from 1 to number1 and number2
for (let i = 1; i <= number1 && i <= number2; i++){

    // check if is factor of both integers
    if( number1 % i == 0 && number2 % i == 0) {
        hcf = i;
    }
}

function gcd(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }


const result = gcd(number1, number2);
console.log("GCD of", number1, "and", number2, "is", result); // Output: GCD of 48 and 18 is 6


// display the hcf
console.log(`HCF of ${number1} and ${number2} is ${hcf}.`);