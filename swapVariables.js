// Program to Swap Two Variables values

let a = 10;
let b = 20;

function swapVar(x, y){
    let a = x;
    let b = y;


    // using 3rd variable
    // let c
    // c = a;
    // a = b;
    // b = c;

// without using any 3rd variable
a = a+b; //30
b = a-b; //30-20 = 10
a = a-b; // 30-10 = 20


    console.log('after swaping the value of a', a);
    console.log('after swaping the value of b', b);

}

swapVar(a, b);
