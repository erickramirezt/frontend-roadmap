// js const

// the const keyword was introduced in es6 (2015)
// variables defined with const cannot be redeclared
// variables defined with const cannot be reassigned
// variables defined with const have Block Scope

// cannot be reassigned
// a const variable cannot be reassigned

// example
const PI = 3.141592653589793;
// PI = 3.14; // this will give an error
// PI = PI + 10; // this will also give an error

// must be assigned
// js const variables must be assigned a value when they are declared

// correct
// const PI = 3.141592653589793;

// incorrect
// const PI;
// PI = 3.141592653589793;

// when to use js const?
// always declare a variable with const when you knoew that the value should not be changed
// use const when you declared
// a new array
// a new object
// a new function
// a new RegExp

// constant objects and arrays
// the keyword const is a little misleading
// it does not define a constant value. it defines a constant reference to a value
// because of this, you can not
// reassign a constant value
// reassign a constant array
// reassign a constant object

// but you can
// change the elements of constant array
// change the properties of a constant object

// constant arrays
// you can change the elements of a constant array

// example
// you can create a constant array
const cars = ["Saab", "Volvo", "BMW"];

// you can change an element
cars[0] = "Toyota";

// you can add an element
cars.push("Audi");

// but you can not reassign the array

// example
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"]; // error

// constant objects
// you can change the properties of a constant object

// example
// you can create a constant object
const car = { type: "Fiat", model: "500", color: "white" };

// you can change a property
car.color = "red";

// you can add a property
car.owner = "Johnson";

// but you can not reassign the object

// example
const car = { type: "Fiat", model: "500", color: "white" };
car = { type: "Volvo", model: "EX60", color: "red" }; // error

// difference between var, let and const
//      scope   redeclare   reassign    hoisted    bind this
// var  no      yes         yes         yes         yes
// let  yes     no          yes         no          yes
// const yes    no          no          no          yes

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

// block scope
// declaring a variable with const is similar to elt when it comes to block scope
// the x declared in the block, in this example, is not the same as the x declared outside 
// the block

// example
const x = 10;
// here x is 10

{
    const x = 2;
    // here x is 2
}

// here x is 10

// redeclaring
// redeclaring a js var variable is allowed anywhere in a program

// example
// var x = 2; // allowed
// var x = 3; // allowed
// x = 4; // allowed

// redeclaring an existing var or let variable to const, in the same scope, is not allowed

// example
// var x = 2; // allowed
// const x = 2; // not allowed

{
    // let x = 2; // allowed
    const x = 2; // not allowed
}

{
    const x = 2; // allowed
    // const x = 2; // not allowed
}

// reassigning an existing const variable, in the same scope, is not allowed

// example
// const x = 2; // allowed
// x = 2; // not allowed
// var x = 2; // not allowed
// let x = 2; // not allowed
// const x = 2; // not allowed

{
    const x = 2; // allowed
    // x = 2; // not allowed
    // var x = 2; // not allowed
    // let x = 2; // not allowed
    // const x = 2; // not allowed
}

// redeclaring a variable with const, in another scope, or int another block, is allowed

// example
// const x = 2; // allowed

{
    const x = 3; // allowed
}

{
    const x = 4; // allowed
}

// hoisting
// varibles defined with var are hoisted to the top and can be initialized at any time
// meaning: you can use the variable before it is declared

// example
carName = "Volvo";
var carName;

// variables defined with const are also hoisted to the top, but not initialized
// meaning: using a const variable before it is declared will result in a reference error

// example
alert(carName);
const carName = "Volvo";