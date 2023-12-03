function countOccurrences(str, char) {
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    
    return count;
}

// Example usage:
let myString = "Hello, World!";
let charToCount = "o";
let result = countOccurrences(myString, charToCount);
console.log(`The character "${charToCount}" occurs ${result} times in the string.`);
