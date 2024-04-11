// js es6

// es 2015 wa the second major revision to javascript
// es 2015 is also known as es6

// new features in es6
// the let keyword
// the const keyword
// arrow functions
// the ... operator
// for/of
// map objects
// sets
// classes
// promises
// symbol
// default parameters
// function rest parameter
// string.includes
// string.startsWith
// string.endsWith
// array.from
// array.keys
// array.find
// array.findIndex
// new math methods
// new number properties
// new number methods
// new global methods
// object entries
// js modules

// browser support for es6 (2015)
// safari 10 and edge 14 were the first browsers to support es6

// js let
// the let keyword allows you to declare a variable with block scope

// examples
var x = 10;
// here x is 10
{
    let x = 2;
    // here x is 2
}
// here x is 10

// js const
// the const keyword allows you to declare a constant (a read-only reference to a value)
// constants are similar to let variables, except that the value cannot be changed

// example
var x = 10;
// here x is 10

{
    const x = 2;
    // here x is 2
}
// here x is 10

// js arrow functions
// arrow functions allows a short syntax for writing function expressions
// you don't need the function keyword, the return keyword, and the curly brackets

// example
// es5
var x = function (x, y) {
    return x * y;
}

// es6
const x = (x, y) => x * y;

// arrow functions do not have their own this. they are not well suited for defining 
// object methods
// arrow functions are not hoisted. they must be defined before they are used
// using const is safer than using var, because a function expression is always constant 
// value
// you can only omit the return keyword and the curly brackets if the function is a single
// statement. because of this, it might be a good habit to always keep them

// example
const x = (x, y) => { return x * y };

// js the ... operator
// the ... operator (three dots) extends an iterable (like an array) into more elements

// example
const q1 = ['a', 'b', 'c'];
const q2 = ['d', 'e', 'f'];
const q3 = ['g', 'h', 'i'];
const q4 = ['j', 'k', 'l'];
const letters = [...q1, ...q2, ...q3, ...q4];

// the ... operator can be used to expand an iterable into more arguments for function 
// calls

// example
const numbers = [1, 2, 3];
let maxValue = Math.max(...numbers);

// the for/of loop
// the js for/of statement loops through the values of an iterable object
// for/of lets you loop over data structures that are iterable such as arrays, strings,
// maps, node lists, and more
// the for/of loop has the following syntax

for (variable of iterable) { }

// variable - for every iteration the value of the next property is assigned to the 
// varaible. variable can declared with const, let, or var

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
text = '';

for (let x of language) {
    text += x;
}

// js map

// beign be able to use objects as a key is an important map feature

// example
const fruits = new Map([
    ['apples', 500],
    ['bananas', 300],
    ['oranges', 200]
]);

// js sets

// example
// create a set
const letters1 = new Set();

// add some values to the set
letters1.add('a');
letters1.add('b');
letters1.add('c');

// js classes
// js classes are templates for js objects
// use the keyword class to create a class
// always add a method named constructor()

// syntax
class ClassName {
    constructor() { }
}

// example
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

// the example above creates a class named car
// the class has two initial properties: name and year

// a js class is not an object. it is a template for js objects

// using a class
// when you hace a class, you can use the class to create objects

// example
let myCar1 = new Car('ford', 2014);
let myCar2 = new Car('audi', 2019);

// js promises
// a promise is a js object that links producing code and consuming code
// producing code can take some time and consuming code must wait for the result

// promise syntax
const myPromise = new Promise((resolve, reject) => {
    // producing code
    resolve(); // when successful
    reject(); // when error
});

// consuming code (must wait for a fulfilled promise)
myPromise.then(
    (value) => { /* code if successful */ },
    (error) => { /* code if some error */ }
);

// example using a promise
const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('i love you');
    }, 3000);
});

myPromise1.then(
    (value) => { console.log(value); },
    (error) => { console.log(error); }
);

// the symbol type
// a js symbol is a primitive datatype just like number and string
// it represents a unique identifier that no other code can accidentally access
// for instance, if different coders wnat to add a person.id property to a person object,
// belonging to a third-party code, they could mix each others values
// using symbol to create a unique identifiers avoids that

// example
const person = {
    firstName: 'john',
    lastName: 'doe',
    age: 50,
    eyeColor: 'blue'
}

const id = Symbol('id');
person[id] = 140353;

// note
// symbols are always unique
// if you create two symbols with the same description, they will have different values

Symbol('id') == Symbol('id'); // false

// deault parameters
// es6 allows function parameters to have default values

// example
function myFunction(x, y = 10) {
    // y is 10 if not passed or undefined
    return x + y;
}

myFunction(5); // will return 15

// function rest parameter
// the rest paramenter (...) allows a function to treat an indefinite number of arguments
// as an array

// example
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

// string.includes
// the includes() method returns true if a string contains a specified value, otherwise
// false

// example
let text1 = 'hello world';
text1.includes('world'); // true

// string.startsWith
// the startsWith() method returns true if a string begins with a specified value, 
// otherwise false

// example
let text2 = 'hello world';
text2.startsWith('hello'); // true

// string.endsWith
// the endsWith() method returns true if a string ends with a specified value, otherwise
// false

// example
let text3 = 'hello world';
text3.endsWith('world'); // true

// array.from
// the array.from() method returns an array object from any object with a length property
// or an iterable object

// example
// create an array from a string
Array.from('abcdefg');

// array.keys
// the keys() method returns an array iterator object with the keys of an array

// example
// create an array iterator object. containing the keys of the array

const fruits1 = ['apple', 'banana', 'orange'];
const keys = fruits1.keys();

let text4 = '';
for (let x of keys) {
    text4 += x;
}

// array.find
// the find() method returns the value of the first array element that passes a test
// function
// this example finds (returns the value of) the first element that is larger than 18

// example
const numbers1 = [4, 9, 16, 25, 29];
let first = numbers1.find(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}

// note that the function takes 3 arguments
// the value of the array element
// the array index of the array element
// the array object itself

// array.findIndex
// the findIndex() method returns the index of the first array element that passes a test
// function
// this example finds the index of the first element that is larger than 18

// example
const numbers2 = [4, 9, 16, 25, 29];
let first1 = numbers2.findIndex(myFunction1);

function myFunction1(value, index, array) {
    return value > 18;
}

// note that the function takes 3 arguments
// the value of the array element
// the array index of the array element
// the array object itself

// new math methods
// es6 introduced some new math methods
// math.trunc
// math.sign
// math.cbrt
// math.log10
// math.log2

// the math.trunc() method
// the trunc() method returns the integer part of a number

// example
Math.trunc(4.6); // 4
Math.trunc(-4.6); // -4

// the math.sign() method
// the sign() method returns the sign of a number, indicating whether the number is
// positive, negative or zero

// example
Math.sign(-4); // -1
Math.sign(0); // 0
Math.sign(4); // 1

// the math.cbrt() method
// the cbrt() method returns the cubic root of a number

// example
Math.cbrt(8); // 2
Math.cbrt(64); // 4
Math.cbrt(-125); // -5

// the math.log2() method
// the log2() method returns the base 2 logarithm of a number

// example
Math.log2(8); // 3

// the math.log10() method
// the log10() method returns the base 10 logarithm of a number

// example
Math.log10(100); // 2

// new number properties
// es6 introduced some new number properties
// epsilon
// min safe integer
// max safe integer

// epsilon example
let x = Number.EPSILON;

// min safe integer example
let x1 = Number.MIN_SAFE_INTEGER;

// max safe integer example
let x2 = Number.MAX_SAFE_INTEGER;

// new number methods
// es6 introduced some new number methods
// number.isinteger()
// number.issafeinteger()

// the number.isinteger() method
// the isinteger() method returns true if a number is an integer, otherwise false

// example
Number.isInteger(10); // true
Number.isInteger(10.5); // false

// the number.issafeinteger() method
// the issafeinteger() method returns true if a number is a safe integer, otherwise false

// example
Number.isSafeInteger(10); // true
Number.isSafeInteger(12345678901234567890); // false

// safe integers are all integers from -(2^53 - 1) to (2^53 - 1)
// this is safe: 9007199254740991. this is not safe: 9007199254740992

// new global methods
// es6 introduced some new global methods
// isfinite()
// isnan()

// the isfinite() method
// the isfinite() method determines whether a number is a finite, legal number

// example
isFinite(10 / 0); // false
isFinite(10.5 / 10); // true

// the isnan() method
// the global isNaN() method returns true if a value is NaN (not a number), and false if
// not

// example
isNaN('hello'); // true

// object entries

// example
// create an array iterator, and then iterable over the key/value pairs

const fruits2 = ['apple', 'banana', 'orange'];
const entries = fruits2.entries();

for (let x of entries) {
    document.getElementById('demo').innerHTML += x + '<br>';
}

// the entries() method returns an array iterator object with key/value pairs
['0', 'apple']
['1', 'banana']
['2', 'orange']
// the entries() method does not change the original array

// js modules
// js modules are used to split your code into various files

// import from named exports
// import named exports from the file person.js

import { name, age } from './person.js';

// import from default exports
// import default exports from the file person.js
import person from './person.js';