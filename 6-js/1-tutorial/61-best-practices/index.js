// js best practices

// avoid global variables, avoid new, avoid ==, avoid eval()

// avoid global variables
// minimize the use of global variables
// this includes all data types, objects, and functions
// global variables and functions can be overwritten by other scripts
// use local variables instead, and learn how to use closures

// always declare local variables
// all variables used in a function should be declared as local variables
// local variables must be declared with the var, the let, or the const keyword, otherwise
// they will become global variables

// strict mode does not allow undeclared variables

// declarations on top
// it is a good coding practice to put all declarations at the top of each script or 
// function
// this will
// give cleaner code
// provide a single place to look for local variables
// make it easier to avoid unwanted (implied) global variables
// reduce the possibility of unwanted redeclarations

// declare at the beginning
let firstName, lastName, price, discount, fullPrice;

// use later
firstName = "John";
lastName = "Doe";

price = 19.90;
discount = 0.10;

fullPrice = price * 100 / discount;

// this also goes for loop variables

for (let i = 0; i < 10; i++) {
    // some code
}

// initialize variables
// it is a good coding practice to initialize variables when you declare them
// this will:
// give cleaner code
// provide a single place to initialize variables   
// avoid undefined values in variables

// declare and initialize at the beginning
firstName = "";
lastName = "";
price = 0;
discount = 0;
fullPrice = 0;
const myArray = [];
const myObject = {};

// intializing variables provides an idea of the intended use (and intended data type)

// declare objects with const
// declaring objects with const will prevent any accidental change of type

// example
let car = { type: "Fiat", model: "500", color: "white" };
car = "Fiat";

// const car = { type: "Fiat", model: "500", color: "white" };
// car = "Fiat"; // error

// declare arrays with const
// declaring arrays with const will prevent any accidental change of type

// example
let cars = ["Saab", "Volvo", "BMW"];
cars = "Toyota";

// const cars = ["Saab", "Volvo", "BMW"];
// cars = "Toyota"; // error

// don't use new Object()
// use "" instead of new String()
// use 0 instead of new Number()
// use false instead of new Boolean()
// use [] instead of new Array()
// use /()/ instead of new RegExp()
// use function (){} instead of new Function()
// use {} instead of new Object()

// example
let x1 = ""; // new primitive string
let x2 = 0; // new primitive number
let x3 = false; // new primitive boolean
let x4 = []; // new array object
let x5 = /()/; // new regexp object
let x6 = function () { }; // new function object
let x7 = {}; // new object object

// beware of automatic type conversions
// js is loosely typed
// a variable can contain all data types
// a variable can change its data type

// example
let x = "Hello"; // x is a string
x = 5; // x is a number

// beware that numbers can accidentally be converted to strings or NaN (not a number)
// when doing mathematical operations, js can convert numbers to strings

// example
// let x = 5 + 7; // x.valueOf() is 12, typeof x is a number
// let x = 5 + "7"; // x.valueOf() is 57, typeof x is a string
// let x = "5" + 7; // x.valueOf() is 57, typeof x is a string
// let x = 5 - 7; // x.valueOf() is -2, typeof x is a number
// let x = 5 - "7"; // x.valueOf() is -2, typeof x is a number
// let x = "5" - 7; // x.valueOf() is -2, typeof x is a number
// let x = 5 - "x"; // x.valueOf() is NaN, typeof x is a number


// subtracting a string from a string, does not generate an error but returns NaN (not a 
// number)

// example
"Hello" - "Dolly"; // returns NaN

// use === comparison
// the == comparison operator always converts (to matching types) before comparison
// the === operator forces comparison of values and type

// example
0 == ""; // true
1 == "1"; // true
1 == true; // true

0 === ""; // false
1 === "1"; // false
1 === true; // false

// use parameter defaults
// if a function is called with a missing argument, the value of the missing argument is 
// set to undefined
// undefined values can break your code. it is a good habit to assign default values to
// arguments

// example
function myFunction(x, y) {
    if (y === undefined) {
        y = 0;
    }
}

// es 2015 allows default parameters in the function definition
// function (a = 1, b = 1) {
//     return a + b;
// }

// end your switches with defaults
// always end your switch statements with a default. even if you think there is no need 
// for it

// example
switch (new Date().getDay()) {
    case 6:
        text = "Today is Saturday";
        break;
    case 0:
        text = "Today is Sunday";
        break;
    default:
        text = "Looking forward to the Weekend";
}

// avoid number, string, and boolean as objects
// always treat numbers, strings, or booleans as primitive values. not as objects
// declaring these types as objects, slows down execution speed, and produces nasty side
// effects

// example
x = "John";
let y = new String("John");
(x === y) // is false because x is a string and y is an object

// or even worse

// example
x = new String("John");
y = new String("John");
(x == y) // is false because you cannot compare objects

// avoid using eval()
// the eval() function is used to run text as code. in almost all cases, it should not be
// necessary to use it
// because it allows arbitrary code to be run, it also represents a security problem