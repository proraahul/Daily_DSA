// program to trim a string: Using split() and join()

const string = '      Hello World       ';

const result = string.split(' ').join('');

console.log(result);

// program to trim a string: Using Regular Expression

function trimString(x) {

    const result = x.replace(/\s/g,'');
    return result

}

const result = trimString('    Hello World    ');
console.log(result);