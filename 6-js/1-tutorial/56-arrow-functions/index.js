// js arrow function

// arrow functions were introduced in ES6
// arrow functions allow us to write shorter function syntax

let myFunction = (a, b) => a * b;

// before arrow

hello = function () {
    return "Hello World!";
}

// with arrow function

hello = () => {
    return "Hello World!";
}

// it gets shorter! if the function has only one statement, and the statement returns a 
// value, you can remove the brackets and the return keyword

// arrow functions return value by default
hello = () => "Hello World!";

// note: this works only if the function has only one statement

// if you have parameters, you pass them inside the parentheses

// arrow function with parameters

hello = (val) => "Hello " + val;

// in fact, if you have only one parameter, you can skip the parentheses as well

// arrow function without parentheses

hello = val => "Hello " + val;

// what about this?
// the handling of this is also different in arrow functions compared to regular 
// functions
// in short, with arrow functions there are no binding of this
// in regular functions the this keyword represented the object that called the function
// which could be the window, the document, a button or whatever
// with arrow functions, the this keyword always represents the object that defined the
// arrow function
// let us take a look at two examples to understand the difference
// both examples call a method twice, first when the page loads, and once again when the
// user clicks a button
// the first example uses a regular function, and the second example uses an arrow 
// function
// the result shows that the first example returns two different objects (window and
// button), and the second example returns the window object twice, because the window
// object is the "owner" of the function

// example
// with a regular this represents the object that calls the method

// regular function
hello = function () {
    document.getElementById("demo").innerHTML += this;
}

// the window object calls the function
window.addEventListener("load", hello);

// a button object calls the function
document.getElementById("btn").addEventListener("click", hello);

// example
// with an arrow function this represents the owner of the function

// arrow function
hello = () => {
    document.getElementById("demo").innerHTML += this;
}

// the window object calls the function
window.addEventListener("load", hello);

// a button object calls the function
document.getElementById("btn").addEventListener("click", hello);

// remember these differences when you are working with functions. sometimes the behavior
// or regular functions is what you want, if not, use arrow functions

// browser support
// the numbers in the table specify the first browser version that fully supports arrow