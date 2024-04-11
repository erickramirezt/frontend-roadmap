// js common mistakes

// accidentally using the assignment operator
// js programs may generate unexpected results if a programmer accidentally uses an 
// assignment operator (=), instead of a comparison operator (==) in an if statement
// this if statement returns false (as expected) because x is not equal to 10

let x = 10;
if (x == 10) {
    // do something
}

// the if statement returns true (maybe not as expected), because 10 is true

x = 0;
if (x = 10) {
    // do something
}

// this if statement returns false (maybe not as expected), because 0 is false

x = 0;
if (x = 0) {
    // do something
}

// an assignment always returns the value of the assignment

// expecting loose comparison
// in regular comparison, data type does not matter. this if statement returns true

x = 10;
y = "10";
if (x == y) { }

// in strict comparison, data type does matter. this if statement returns false

x = 10;
y = "10";
if (x === y) { }

// it is a common mistake to forget that switch statements use strict comparison
// this case switch will display an alert

x = 10;
switch (x) {
    case 10:
        alert("hello");
}

// this case switch will not display an alert

x = 10;
switch (x) {
    case "10":
        alert("hello");
}

// confusing addition and concatenation
// addition is about adding numbers
// concatenation is about adding strings
// in js both operations use the same + operator
// because of this, adding a number as a number will produce a different result from 
// adding a number as a string

x = 10;
x = 10 + 5;

y = 10;
y += "5";

// when adding two variables, it can be difficult to anticipate the result

x = 10;
y = 5;
z = x + y; // z will be 15

x = 10;
y = "5";
z = x + y; // z will be 105

// misunderstanding floats
// all numbers in js are stored as 64-bits floating point numbers (floats)
// all programming languages, including js, have difficulties with precise floating point
// values

x = 0.1;
y = 0.2;
z = x + y; // z will not be 0.3

// to solve the problem, it helps to multiply and divide

// example

z = (x * 10 + y * 10) / 10; // z will be 0.3

// breaking a js string
// js will allow you to break a statement into two lines

// example 1
x =
    "Hello World!";

// but, breaking a statement in the middle of a string will not work

// example 2
// x = "Hello
// World!";

// you must use a backslash if you must break a statement in a string

// example 3
x = "Hello \
World!";

// misplacing semicolon
// because of a misplaced semicolon, this code block will execute regardless of the value
// of x

if (x == 19);
{
    // do something
}

// breaking a return statement

// it is a default js beahavior to close a statement automatically at the end of a line
// because of this, these two examples will return the same result

// example 1
function myFunction(a) {
    let power = 10;
    return a * power;
}

// example 2
function myFunction(a) {
    let power = 10;
    return a * power;
}

// js will also allow you to break a statement into two lines
// because of this, example 3 will also return the same result

// example 3
function myFunction(a) {
    let
        power = 10;
    return a * power;
}

// but, what will happen if you break the return statement into two lines like this

// example 4
function myFunction(a) {
    let
        power = 10;
    return
    a * power;
}

// the function will return undefined
// why? because js thought you meant

// example 5
function myFunction(a) {
    let
        power = 10;
    return;
    a * power;
}

// explanation
// if a statement is incomplete like

let

    // js will try to complete the statement by reading the next line

    power = 10;

// but since this statement is complete

return

// js will automatically close it like this

return;

// this happens because closing (ending) statements with semicolon is optional is js
// js will close the return statement at the end of the line, because it is a complete
// statement

// never break a return statement

// accessing arrays with named indexes
// many programming languages support arrays with named indexes
// arrays with named indexes are called associative arrays (or hashes)
// js does not support arrays with named indexes
// in js, arrays always use numbered indexes

// example 
const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length; // will return 3
person[0]; // will return "John"

// in js, object use named indexes
// if you use a named index, when accessing an array, js will redefine the array to a
// standard object
// after the automatic redefinition, array methods and properties will produce incorrect
// results

// example
person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length; // will return 0
person[0]; // will return undefined

// ending defintions with a comma
// trailing commas in object and array definitions are legal in es5

// object example
const person = { firstName: "John", lastName: "Doe", age: 46, };

// array example
const points = [40, 100, 1, 5, 25, 10,];

// json
person = { "firstName": "John", "lastName": "Doe", "age": 46 }

// json
points = [40, 100, 1, 5, 25, 10];

// undefined is not null
// js objects, variables, properties, and methods can be undefined
// in addition, empty js values can be defined as null
// this can make it a little but difficult to test if an object is empty
// you can test if an object exists by testing if the type is undefined

// example
if (typeof myObj === "undefined") {
    // do something
}

// but you cannot test if an object is null, because this will throw an error if the 
// object is undefined

// incorrect
if (myObj === null) {
    // do something
}

// to solve this problem, you must test if an object is not undefined, and not null
// but this can still throw an error

// incorrect
if (myObj !== null && typeof myObj !== "undefined") { }

// because of this, you must test for not undefined before you can test for not null

// correct
if (typeof myObj !== "undefined" && myObj !== null) { }