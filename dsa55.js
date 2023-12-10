// program to convert an object to a string

const person = {
    name: 'Jack',
    age: 27
}

const result =  JSON.stringify(person);

console.log(result);
console.log(typeof result);

// program to convert an object to a string

const person1 = {
    name: 'Jack',
    age: 27
}

const result1 = String(person1);
const result2 = String(person1['name']);

console.log(result1);
console.log(result2);

console.log(typeof result1);