// js for of

// the for of loop
// the js for of statement loops through the values of an iterable object
// it lets you loop over iterable data structures such as arrays, strings, maps, 
// node lists, and more

// syntax
for (variable of iterable) {
    // code block to be executed
}

// variable - for every iteration the value of the next property is assigned to the 
// variable. variable can be declared with const, let, or var
// iterable - an object that has iterable properties

// browser support
// for/of was added to js in 2015 (es6)
// it is supported in all modern browsers, except internet explorer

// looping over an array

// example
const cars = ['bmw', 'volvo', 'mini'];

let text = '';
for (let x of cars) {
    text += x;
}

// looping over a string

// example
let language = 'javascript';

let txt = "";
for (let x of language) {
    txt += x;
}