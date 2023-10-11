// Find the largest number among three numbers

let a = 10;
let b = 20;
let c = 100;

function findLargerNumberOutOfThree(a,b,c){
        if(a>b && a>c){
            console.log("The Largest Number is "+a);
        }
        else if(b>a && b>c){
            console.log( "The Largest Number Is " +b);
        }
        else if(c>a && c>b){
            console.log("The Largest Number Is " +c);
        }
        else if(a==b || b==c || a==c){
            console.log("All Numbers are Equal");
        }
}

findLargerNumberOutOfThree(a,b,c);