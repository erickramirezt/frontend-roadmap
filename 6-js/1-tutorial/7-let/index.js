// js let

// the let keyword was introduced in es6 (2015)
// variables declared with let cannot be redeclared
// variables declared with let must be declared before use
// variables declared with let have block scope

// cannot be redeclared
// variables defined with let can not be redeclared
// you can not accidentally redeclare a variable declare with let

// with let you can not do this
// let x = "John Doe";
// let x = 0;

// with var you can
var x = "John Doe";
var x = 0;

// block scope
// before es6 (2015), js has global scope and function scope
// es6 introduced two important new javascript keywords: let and const
// these two keywords provide block scope in js
// variables declared inside a block {} cannot be accessed from outside the block

// example
{
    let x = 2;
}
// x can not be used here

// variables declared with the var keyword can not have block scope
// variables declared inside a block {} can be accessed from outside the block

// example
{
    var x = 2;
}

// redeclaring variables
// redeclaring a variable using the var keyword can impose problems
// redeclaring a variable inside a block will also redeclare the variable outside the block

// example
var x = 10;
// here x is 10

{
    var x = 2;
    // here x is 2
}

// here x is 2

// redeclaring a variable using the let keyword can solve this problem
// redeclaring a variable inside a block will not redeclare the variable outside the block

// example
let x = 10;
// here x is 10

{
    let x = 2;
    // here x is 2
}

// here x is 10

// difference between var, let and const
//      scope   redeclare  reassign hoisted bind this
// var  no      yes        yes      yes     yes
// let  yes     no         yes      no      yes
// const yes     no         no       no      yes

// what is good?
// let and const have block scope
// let and const can not be redeclared
// let and const must be redeclared before use
// let and const does not bind to this
// let and const are not hoisted

// what is bad?
// var does not have to be declared
// var is hoisted
// var binds to this

// redeclaring
// redeclaring a js variable with var is allowed anywhere in a program

// example
var x = 2;
// now x is 2

var x = 3;
// now x is 3

// with let, redeclaring a variable in the same block is not allowed

// example
var x = 2;    // allowed
let x = 3;    // not allowed

{
    let x = 4;    // allowed
    // let x = 5;    // not allowed
}

{
    let x = 6;    // allowed
    var x = 7;    // not allowed
}

// redaclaring a variable with let, in another block, is allowed

// example
let x = 2;    // allowed

{
    let x = 3;    // allowed
}

{
    let x = 4;    // allowed
}

// let hoisting
// varibles defined with var are hoisted to the top and can be initialized at any time
// meaning: you can use the variable before it is declared

// example
carName = "Volvo";
var carName;

// variables defined with let are also hoisted to the top of the block, but not initialized
// meaning: using a let variable before it is declared will result in a reference error

// example
carName = "Volvo";
let carName = "Volvo";