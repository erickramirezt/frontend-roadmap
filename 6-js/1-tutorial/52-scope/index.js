// js scope

// scope determines the accessibility (visibility) of variables
// js has 3 types of scope:
// block scope
// function scope
// global scope

// block scope
// before es6, js had only global scope and function scope
// es6 introduced two important new javascript keywords: let and const
// these two keywords provide block scope variables (and constants) in js
// variables declared inside a block {} cannot be accessed from outside the block

// example
{
    let x = 2;
}
// x can not be used here

// variables declared with var and function declarations are always global
// var declared inside a {} block can be accessed from outside the block

// example
{
    var x = 2;
}
// x can be used here

// local scope
// variables declared within a js function, become local to the function

// example
// code here can not use carName

function myFunction() {
    let carName = "Volvo";
    // code here can use carName
}

// code here can not use carName

// local variables hace function scope
// they can only be accessed from within the function

// since local variables are only recognized inside their functions, variables with the same
// name can be used in different functions
// local variables are created when a function starts, and deleted when the function is 
// completed

// function scope
// js has function scope: each function creates a new scope
// variables defined inside a function are not accessible (visible) from outside the 
// function
// variables declared with var, let and const are quite similar when declared inside a
// function
// they all have function scope

function myFunction() {
    var carName = "Volvo"; // function scope
}

function myFunction() {
    let carName = "Volvo"; // function scope
}

function myFunction() {
    const carName = "Volvo"; // function scope
}

// global js variables
// a variable declared outside a function, becomes global

// example
let carName = "Volvo";
// code here can use carName

function myFunction() {
    // code here can also use carName
}

// a global variable has global scope
// all scripts and functions on a web page can access it

// global scope
// variables declared globally (outside any function) have global scope
// global variables can be accessed from anywhere in a js program
// variables declared with var, let and const are quite similar when outsie a block
// they all have global scope

var x = 2; // global scope

let x = 2; // global scope

const x = 2; // global scope

// js variables
// in js, objects and functions are also variables

// scope determines the accessibility variables, objects, and functions from different
// parts of the code

// automatically global
// if you assign a value to a variable that has not been declared, it will automatically
// become a global variable
// this code example will declare a global variable carName, even if the value is assigned
// inside a function

// example
myFunction();

// code here can use carName

function myFunction() {
    carName = "Volvo";
}

// strict mode
// all modern browsers support running js in strict mode

// in strict mode, undeclared variables are not automatically global

// global variables in HTML
// with js, the global scope is the complete js environment
// in html, the global scope is the window object
// global variables defined with the var keyword belong to the window object

// example
carName = "Volvo";
// code here can use window.carName

// global variables defined with the let keyword do not belong to the window object

// example
carName = "Volvo";
// code here can not use window.carName

// warning

// do not create global variables unless you intend to
// your global variables (or functions) can overwrite window variables (or functions)
// any function, including the window object, can overwrite your global variables and
// functions

// the lifetime of js variables
// the lifetime of a js variable starts when it is declared
// function (local) variables are deleted when the function is completed
// in a web browser, global variables are deleted when you close the browser window (or tab)

// function arguments
// function arguments (parameters) work as local variables inside functions