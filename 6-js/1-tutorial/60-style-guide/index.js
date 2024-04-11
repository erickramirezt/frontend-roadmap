// js style guide

// always use the same coding conventions for all your js projects

// js coding conventions
// coding conventions are style guidelines for programming. they typically cover:
// naming and declaration rules for variables and functions
// rules for the use of white space, indentation, and comments
// programming practices and principles
// coding conventions secure quality
// improve code readability
// make code maintenance easier
// coding conventions can be documented rules for teams to follow, or just be your 
// individual coding practice

// variable names
// use camelCase for identifier names (variables and functions)
// all names start with a letter

firstName = "John";
lastName = "Doe";

price = 19.90;
tax = 0.20;

fullPrice = price + (price * tax);

// spaces around operators
// always put spaces around operators ( = + - * / ), and after commas

var x = y + z;
const arr = [1, 2, 3, 4];

// code indentation
// always use 2 spaces for indentation of code blocks

// functions
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

// do not use tabs (tabulators) for indentation. different editors interpret tabs 
// differently

// statement rules
// general rules for simple statements
// always end a simple statement with a semicolon

// examples
const cars = ["Saab", "Volvo", "BMW"];

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
}

// general rules for complex (compound) statements
// put the opening bracket at the end of the first line
// use one space before the opening bracket
// put the closing bracket on a new line, without leading spaces
// do not end a complex statement with a semicolon

// functions
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

// loops
for (let i = 0; i < 5; i++) {
    x += i;
}

// conditionals
if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

// object rules
// general rules for object definitions
// place the opening bracket on the same line as the object name
// use colon plus one space between each property and its value 
// use quotes around string values, not around numeric values
// do not add a comma after the last property-value pair
// place the closing bracket on a new line, without leading spaces
// always end an object definition with a semicolon

// example

const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
}

// short objects can be written compressed, on one line, using spaces only between
// properties, like this

const person2 = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

// line length < 80
// for readability, avoid lines longer than 80 characters
// if a JavaScript statement does not fit on one line, the best place to break it, is
// after an operator or a comma

// example
document.getElementById("demo").innerHTML =
    "Hello Dolly.";

// naming conventions 
// always use the same naming convention for all your code. for example:
// variable and function names written as camelCase
// global variables written in UPPERCASE (we don't, but it's quite common)
// constants (like PI) written in UPPERCASE
// should you use hyp-hens, camelCase, or under_scores in variable names?
// this is a question programmers often discuss. the answer depends on who you ask:
// hyphens in html and css
// html5 attributes can start with data- (data-quantity, data-price)
// css uses hyphens in property-names (font-size)

// hyphens can be mistaken as substraction attempts. hyphens are not allowed in js names

// underscores
// many programmers prefer to use underscores (date_of_birth), especially in sql databases
// underscores are often used in php documentation

// pascal case
// pascal case is often preferred by c programmers (DateOfBirth)

// camel case
// camel case is used by javascript itself, by java, by c, and many other programming

// do not start names with a $ sign. it will put you in conflict with many js library 
// names

// accessing html elements
// a consequence of using untidy html styles, might result in js errors
// these two js statements will produce different results

const obj = document.getElementById("Demo");

const obj1 = document.getElementById ("demo");

// if possible, use the same naming convention (as js) in html

// file extensions
// html files should have a .html extension (.htm is allowed)
// css files should have a .css extension
// js files should have a .js extension

// use lower case file names
// most web servers (apache, unix) are case sensitive about file names
// london.jpg cannot be accessed as London.jpg
// other web servers (windows) are not case sensitive
// london.jpg can be accessed as London.jpg or as LONDON.jpg or as LONdon.jpg
// if you use a mix of upper and lower case, you have to be extremely consistent
// if you move from a case insensitive, to a case sensitive server, even small errors 
// can break your web site
// to avoid these problems, always use lower case file names 

// performance
// coding convetions are not used by computers. most rules have little impact on the 
// excution of programs
// indentation and extra spaces are not significant in small scripts
// for code in development, readability should be preferred. larger production scripts
// should be minimized