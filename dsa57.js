// js program to perform string comparison

const string1 = 'JavaScript Program';
const string2 = 'javascript programs';

// compare both strings
const result = string1.toUpperCase() === string2.toUpperCase();

if(result) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}


// program to perform string comparison
// create regex
const pattern = new RegExp(string1, "gi");

// compare the stings
const result1 = pattern.test(string2)

if(result1) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}