// program to add element to an array

function addElement(arr) {

    //adding new array element
    arr.unshift(4);

     //adding element to array
     arr.splice(0, 0, 5);

     //adding element to array
    arr = [6, ...arr];
    
     //adding element to array
     arr = [7].concat(arr);
    
    
    console.log(arr);
}

const array = [1, 2, 3];

// calling the function
// passing array argument
addElement(array);