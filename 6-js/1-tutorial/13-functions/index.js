// js functions

// a js function is a block of code designed to perform a particular task
// a js function is executed when "something" invokes it (calls it)

// example
// the function returns the product of p1 and p2
function myFunction(p1, p2) {
    return p1 * p2;
}

// js function syntax
// a js function is defined with the function keyword, followed by a name, followed by 
// parentheses ()
// function names can contain letters, digits, underscores, and dollar signs (same rules as 
// variables)
// the parentheses may include parameter names separated by commas: (parameter1, parameter2, 
// ...)
// the code to be executed, by the function, is placed inside curly brackets: {}

function name(parameter1, parameter2, parameter3) {
    // code to be executed
}

// function parameters are listed inside the parentheses () in the function definition
// function arguments are the values received by the function when it is invoked
// inside the function, the arguments (the parameters) behave as local variables

// function invocation
// the code inside the function will execute when "something" invokes (calls) the function
// when an event occurs (when a user clicks a button)
// when it is invoked (called) from javascript code
// automatically (self invoked)
// you will learn a lot more about function invocation later in this tutorial

// function return
// when javascript reaches a return statement, the function will stop executing
// if the function was invoked from a statement, javascript will "return" to execute the code
// after the invoking statement
// functions often compute a return value. the return value is returned back to the "caller"

// example
// calculate the product of two numbers, and return the result
// function is called, the return value will end up in x
let x = myFunction(4, 3);

function myFunction(a, b) {
    // function returns the product of a and b
    return a * b;
}

// why functions?
// with function you can reuse code
// you can write code that can be used many times
// you can use the same code many times with different arguments, to produce different 
// results

// the () operator
// the () operator invokes the function

// example
// convert fahrenheit to celsius
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

let value = toCelsius(77);

// accessing a function with incorrect parameters can return an incorrect answer
// example
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

value = toCelsius();

// accessing a function without () returns the function and not the function result

// example
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

value = toCelsius;

// note
// as you see from the examples above, toCelsius refers to the function object, and 
// toCelsius() refers to the function result

// functions used as variable values
// functions can be used the same way as you use variables, in all types of formulas,
// assignments, and calculations

// example
// instead of using a variable to store the return value of a function
x = toCelsius(77);
let text = "The temperature is " + x + " Celsius";

// you can use the function directly, as a variable value
text = "The temperature is " + toCelsius(77) + " Celsius";

// local variables
// variables declared within a javascript function, become local to the function
// local variables can only be accessed from within the function

// example
// code here can not use carName

function myFunction() {
    let carName = "Volvo";
    // code here can use carName
}

// code here can not use carName

// since local variables are only recognized inside their functions, variables with the same
// name can be used in different functions
// local variables are created when a function starts, and deleted when the function is 
// completed
