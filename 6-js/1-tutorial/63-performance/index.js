// js performance

// how to speed up your js code

// reduce activity in loops
// loops are often used in programming
// each statement in a loop, including the for statement, is executed for each iteration 
// of loop
// statements or assignments that can be placed outside the loop will make the loop run
// faster

// bad:
for (let i = 0; i < arr.length; i++) {
    // some code
}

// better code:

let l = arr.length;
for (let i = 0; i < l; i++) { }

// the bad code accesses the length property of the array each time the loop is iterated
// the better code accesses the length property outside the loop and makes the loop run
// faster

// reduce dom access
// accessing the html dom is very slow, compared to other js statements
// if you expect to access a dom element several times, access it once, and use it as a
// local variable

// example
const obj = document.getElementById("demo");
obj.innerHTML = "Hello";

// reduce dom size
// keep the number of elements in the html dom small
// this will always improve page loading, and speed up rendering, especially on smaller
// devices
// every attempt to search the dom (document.getElementById) will benefit from a smaller
// dom

// aovid unnecessary variables
// don't create new variables if you don't plan to save values
// often you can replace code like this:

let fullName = firstName + " " + lastName;
document.getElementById("demo").innerHTML = fullName;

// with:
document.getElementById("demo").innerHTML = firstName + " " + lastName;

// delay js loading
// putting your scripts at the bottom of the page body lets the browser load the page
// first
// while a script is downloading, the browser will not start any other downloads. In
// addition all parsing and rendering activities are blocked

// the http specification defines that browsers should only download more than two
// components in parallel from a single host

// an alternative is to use defer="true" in the script tag. the defer attribute specifies
// that the script should be executed after the page has finished parsing, but it only 
// works for external scripts
// if possible, you can add your script to the page by code, after the page has loaded

// example
window.onload = function () {
    const element = document.createElement("script");
    element.src = "myScript.js";
    document.body.appendChild(element);
}

// avoid using with
// avoid using the with keyword. it has a negative effect on speed. it also clutters up
// js scopes
// the with keyword is not allowed in strict mode