// js hoisting

// hoisting is js default behavior of moving declarations to the top

// js declarations are hoisted
// in js, a variable can be declared after it has been used
// in other words; a variable can be used before it has been declared
// example 1 gives the same result as example 2

// example 1
x = 5; // assign 5 to x

elem = document.getElementById("demo"); // find an element
elem.innerHTML = x; // display x in the element

var x; // declare x

// example 2
var x; // declare x
x = 5; // assign 5 to x

elem = document.getElementById("demo"); // find an element
elem.innerHTML = x; // display x in the element

// to undestand this, you have to understand the term hoisting
// hoisting is js default behavior of moving all declarations to the top of the current 
// scope (to the top of the current script or the current function)

// the let and const keywords
// variables and constants declared with let and const are hoisted to the top of the block,
// but not initialized
// meaning: the block of code is aware of the variable, but it cannot be used until it has
// been declared
// using a let variable before it is declared will result in a referenceerror
// the variable is in a "temporal dead zone" from the start of the block until it is 
// declared

// example
// this will result in a referenceerror
carName = "Volvo";
let carName;

// using a const variable before it is declared, is a syntaxerror, so the block will not
// be executed

// example
// this will result in a syntaxerror
// carName = "Volvo";
// const carName;

// js initializations are not hoisted
// js only hoists declarations, not initializations
// example 1 does not give the same result as example 2

// example 1
var x = 5; // initialize x
var y = 7; // initialize y

elem = document.getElementById("demo"); // find an element
elem.innerHTML = x + " " + y; // display x and y

// example 2
var x = 5; // initialize x

elem = document.getElementById("demo"); // find an element
elem.innerHTML = x + " " + y; // display x and y

var y = 7; // initialize y

// does it make sense that y is undefined in the last example?
// this is because only the declaration (var y), not the initialization (=7) is hoisted to
// the top
// because of hoisting, y has been declared before it is used, but because initializations
// are not hoisted, the value of y is undefined
// example 2 is the same as writing:

// example 3
var x = 5; // initialize x
var y; // declare y

elem = document.getElementById("demo"); // find an element
elem.innerHTML = x + " " + y; // display x and y

y = 7; // initialize y

// declare your variables at the top!
// hoisting is (to many developers) an unknown or overlooked behavior of js
// if a developer doesn't understand hoisting, programs may contain bugs (errors)
// to avoid bugs, always declare all variables at the beginning of every scope
// since this is how js interprets the code, it is always a good rule

// js in strict mode does not allow variables to be used if they are not declared
// study use strict in the next chapter