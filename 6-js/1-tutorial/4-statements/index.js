// js statements

// example
let x, y, z; // statement 1
x = 5; // statement 2
y = 6; // statement 3
z = x + y; // statement 4

// js programs
// a computer program is a list of "instructions" to be "executed" by a computer
// in a programming language, these programming instructions are called statements
// a js program is a list of programming statements

// in html, js programs are executed by the web browser

// js statements
// js statements are composed of:
// values, operators, expressions, keywords, and comments
// this statement tells the browser to write "hello dolly". inside an html element with
// id="demo"

// example
document.getElementById("demo").innerHTML = "hello dolly";

// most js programs contain many js statements
// the statements are executed, one by one, in the same order as they are written

// js progrmas (and js statements) are often called js code

// semicolons ;
// js statements are separated by semicolons
// add a semicolon at the end of each executable statement

// example
let a, b, c; // declare 3 variables
a = 5; // assign the value 5 to a
b = 6; // assign the value 6 to b
c = a + b; // assign the sum of a and b to c

// when separated by semicolons, multiple statements on one line are allowed
a = 5;
b = 6;
c = a + b;

// on the web, you might see examples without semicolons
// ending statements with semicolon is not required, but highly recommended

// js whitespace
// js ignores multiple spaces. you can add white space to your script to make it more
// readable
// the following lines are equivalent

// let person = "hege";
// let person="hege";

// a good practice is to put spaces around operators ( = + - * / )
x = y + z;

// js line length and line breaks
// for best readability, programmers often like to avoid code lines longer than 80
// characters
// if a js statement does not fit on one line, the best place to break it is after an
// operator

// example
document.getElementById("demo").innerHTML = "hello dolly";

// js code blocks
// js statements can be grouped together in code blocks, inside curly brackets {...}
// the purpose of code blocks is to define statements to be executed together
// one place you will find statements grouped together in blocks, are in js functions

// example
function myFunction() {
  document.getElementById("demo1").innerHTML = "hello dolly";
  document.getElementById("demo2").innerHTML = "how are you";
}

// js keywords
// js statements often start with a keyword to identify the js action to be performed

// keyword  description
// var      declares a variable
// let      declares a block-scoped, local variable, optionally initializing it to a value
// const    declares a block-scoped, read-only named constant
// if       marks a block of statements to be executed, depending on a condition
// switch   marks a block of statements to be executed, depending on different cases
// for      marks a block of statements to be executed, as long as a condition is true
// function declares a function
// return   exits a function
// try      implements error handling to a block of statements

// js keywords are reserved words. reserved words cannot be used as names for variables