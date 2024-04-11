// js for in

// the for in loop
// the js for in statement loops through the properties of an object

// syntax
for (variable in object) {
    // code to be executed
}

// example
const person = { fname: "John", lname: "Doe", age: 25 };

let text = "";
for (let x in person) {
    text += person[x];
}

// example explained
// the for in loop iterates over a person object
// each iteration returns a key (x)
// the key is used to access the value of the key
// the value of the key is person[x]

// for in over arrays
// the javascript for in statement can also loop over arrays

// syntax
for (variable in object) {
    // code to be executed
}

// example
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
    txt += numbers[x];
}

// do not use for in over an array if the index order is important
// the index order is implementation-dependent, and array values may not be accessed in 
// the order you expect
// it is better to use a for loop, a for of loop, or a forEach() method when the order is 
// important

// array.forEach()
// the forEach() method calls a function (a callback function) once for each array element

// example
const numbers1 = [45, 4, 9, 16, 25];

let txt1 = "";
numbers1.forEach(myFunction);

function myFunction(value) {
    txt1 += value;
}

// note that the function takes 3 arguments
// the item value
// the item index
// the array itself
// the example above uses only the value parameter. it can be rewritten to

// example
const numbers2 = [45, 4, 9, 16, 25];

let txt2 = "";
numbers2.forEach(myFunction);

function myFunction(value, index, array) {
    txt2 += value;
}