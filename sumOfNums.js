var prompt = require('prompt-sync')();


// get input from the user.
var a = prompt('Enter the first natural number: ');



function sumOfNum(num){
let sum = 0;
    for(let i = 1; i<= num; i++){
        sum += i
    }

    console.log(sum);

}


sumOfNum(a);