// js random

// math.random()
// Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive)

// example
// returns a random number
Math.random();

// Math.random() always returns a number lower than 1.

// js random integers
// Math.random() used with Math.floor() can be used to return random integers.

// there is no such thing as js integers
// we are talking about numbers with no decimals here

// example
// returns a random integer from 0 to 9
Math.floor(Math.random() * 10);

// example
// returns a random integer from 0 to 10
Math.floor(Math.random() * 11);

// example
// returns a random integer from 0 to 99
Math.floor(Math.random() * 100);

// example
// returns a random integer from 0 to 100
Math.floor(Math.random() * 101);

// example
// returns a random integer from 1 to 10
Math.floor(Math.random() * 10) + 1;

// example
// returns a random integer from 1 to 100
Math.floor(Math.random() * 100) + 1;

// a proper random function
// as you can see from the examples above, it might be a good idea to create a proper 
// wrandom function to use for all random integer purposes.
// this js function always returns a random number between min(included) and 
// max(excluded):

// example
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// this js function always returns a random number between min(included) and 
// max(included):

// example
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}