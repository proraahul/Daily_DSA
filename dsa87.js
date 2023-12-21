// program to check if a variable is of function type: Using instanceof Operator

function testVariable(variable){
    if(variable instanceof Function){
        console.log('The variable is of function type');
    }
    else{
        console.log('The variable is not of function type');
    }
}

const count = true;
const x = function(){
    console.log('hello')
};
testVariable(count);
testVariable(x);

// program to check if a variable is of function type: Using typeof Operator

function testVariable(variable) {
    if(typeof variable === 'function') {
        console.log('The variable is of function type');
    }
    else {
        console.log('The variable is not of function type');
    }
}

const count = true;
const x = function() {
    console.log('hello')
};

testVariable(count);
testVariable(x);