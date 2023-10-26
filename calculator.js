const prompt = require("prompt-sync")();

const num1 = parseInt(prompt('Enter first number: '));
const num2 = parseInt(prompt('Enter second number: '));

function Calculator(num1, num2, myOperation){
            return myOperation(num1, num2);
}


function addNums(n1, n2){
    let sum = n1 + n2;
    return sum;
}

function multiplyNums(n1,n2){
    return n1*n2;
}

function substractNums(n1,n2){
    return n1-n2;
}

function divideNums(n1,n2){
    return n1/n2;
}


console.log(Calculator(num1, num2, addNums));
console.log(Calculator(num1, num2, substractNums));
console.log(Calculator(num1, num2, multiplyNums));
console.log(Calculator(num1, num2, divideNums));
