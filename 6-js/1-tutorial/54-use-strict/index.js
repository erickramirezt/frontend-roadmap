// js use strict

// use strict defines that js code should be executed in "strict mode"

// the strict mode directive
// the "use strict" directive was new in ecmascript version 5
// it is not a statement, but a literal expression, ignored by earlier versions of js
// the purpose of "use strict" is to indicate that the code should be executed in "strict 
// mode"
// with strict mode, you can not, for example, use undeclared variables
// all modern browsers support "use strict" except internet explorer 9 and lower

// you can use strict mode in all your programs. it helps you to write cleaner code, like
// preventing you from using undeclared variables
// use strict is just a string, so ie 9 will not throw an error if it does not understand it

// declaring strict mode
// strict mode is declared by adding "use strict"; to the beginning of a script or a 
// function
// declared at the beginning of a script, it has global scope (all code in the script will
// execute in strict mode)

// example
"use strict";
x = 3.14; // this will cause an error because x is not declared

// example
"use strict";
myFunction();

function myFunction() {
    y = 3.14; // this will also cause an error because y is not declared
}

// declared inside a function, it has local scope (only the code inside the function is in
// strict mode)

// example
x = 3.14; // this will not cause an error
myFunction();

function myFunction() {
    "use strict";
    y = 3.14; // this will cause an error
}

// the use strict syntax
// the syntax, for declaring strict mode, was designed to be compatible with older versions
// of js
// compiling a numeric literal (4 + 5;) or a string literal ("john doe";) in a js program
// has no side effects. It simply compiles to a non existing variable and dies
// so use strict only matters to new compilers that understand the meaning of it

// why strict mode?
// strict mode makes it easier to write "secure" js
// strict mode changes previously accepted "bad syntax" into real errors
// as an example, in normal js, mistyping a variable name creates a new global variable
// in strict mode, this will throw an error, making it impossible to accidentally create a
// global variable
// in normal js, a developer will not receive any error feedback assigning values to non
// writable properties
// in strict mode, any assignment to a non writable property, a getter only property, a
// non existing property, a non existing variable, or a non existing object, will throw an
// error

// not allowed in strict mode
// using a variable, without declaring it, is not allowed

"use strict";
x = 3.14; // this will cause an error

// objects are variables too

// using an object, without declaring it, is not allowed

"use strict";
x = { p1: 10, p2: 20 }; // this will cause an error

// deleting a variable (or object) is not allowed

"use strict";
let x = 3.14;
// delete x; // this will cause an error

// deleting a function is not allowed

"use strict";
function myFunction(p1, p2) { };
// delete myFunction; // this will cause an error

// duplicating a parameter name is not allowed

"use strict";
function x(p1, p1) { }; // this will cause an error

// octal numeric literals are not allowed

"use strict";
// let x = 010; // this will cause an error

// escape characters are not allowed

"use strict";
// let x = \010; // this will cause an error

// writing to a read-only property is not allowed

"use strict";
const obj = {};
Object.defineProperty(obj, "x", { value: 0, writable: false });

obj.x = 3.14; // this will cause an error

// writing to a get-only property is not allowed

"use strict";
const obj = { get x() { return 0 } };

obj.x = 3.14; // this will cause an error

// deleting an undeletable property is not allowed

"use strict";
delete Object.prototype; // this will cause an error

// the word eval cannot be used as a variable

"use strict";
// let eval = 3.14; // this will cause an error

// the word arguments cannot be used as a variable

"use strict";
// let arguments = 3.14; // this will cause an error

// the with statement is not allowed

"use strict";
// with (Math) { x = cos(2) }; // this will cause an error

// for security reasons, eval() is not allowed to create variables in the scope from which
// it was called

// in strict mode, a variable can not be used before it is declared

"use strict";
eval("x = 2");
alert(x); // this will cause an error

// in strict mode, eval() can not declare a variable using the var keyword

"use strict";
eval("var x = 2");
alert(x); // this will cause an error

// eval() can not declare a variable using the let keyword

eval("let x = 2");
alert(x); // this will cause an error

// the this keyword in functions behaves differently in strict mode
// the this keyword refers to the object that called the function
// if the object is not specified, functions in strict mode will return undefined and
// functions in normal mode will return the global object (window)

"use strict";
function myFunction() {
    alert(this); // will alert "undefined"
}
myFunction();

// future proof
// keywords reserved for future js versions can not be used as variable names in strict mode
// these are:
// implements
// interface
// let
// package
// private
// protected
// public
// static
// yield

"use strict";
let public = 1500; // this will cause an error

// watch out!
// the use strict directive is only recognized at the beginning of a script or a function