// js variables

// variables are containers for storing data values
// js variables can be declared in 4 ways
// automatically
// using var
// using let
// using const

// in this first example, x, y, and z are undeclared variables
// they are automatically declared when first used

// example
x = 5;
y = 6;
z = x + y;

// note: is is considered good programming practice to always declare variable before use

// from examples you can guess
// x stores the value 5
// y stores the value 6
// z stores the value 11

// example using var
var x = 5;
var y = 6;
var z = x + y;

// note: the var keyword was used in all js code from 1995 to 2015
// the let and const keywords were added to js in 2015
// the var keyword should only be used in code written for older browsers

// example using let
let x = 5;
let y = 6;
let z = x + y;

// example using const
const x = 5;
const y = 6;
const z = x + y;

// mixed example
const price1 = 5;
const price2 = 6;
let total = price1 + price2;

// the two variables price1 and price2 are declared with the const keyword
// these are constant values and cannot be changed
// the variable total is declared with the let keyword
// the total variable can be changed

// when to use var, let, or const?
// always declare variables
// always use const if the value should not be changed
// always use const if the type should not be changed (array or object)
// only use let if you can't use const
// only use var if you must support old browsers

// just like algebra
// just like in algebra, variable hold values

let x = 5;
let y = 6;

// just like in algebra, variables are used in expressions

let z = x + y;

// from the example above, you can guess that the total is calculated to be 11

// note: variables are containers for storing values

// js identifiers
// all js variables must be identified with unique names
// these unique names are called identifiers
// identifiers can be short names (like x and y) or more descriptive names (age, sum,
// totalvolume)
// the general rules for constructing names for variables (unique identifiers) are:
// names can contain letters, digits, underscores, and dollar signs
// names must begin with a letter
// names can also begin with $ and _
// names are case sensitive (y and Y are different variables)
// reserved words (like js keywords) cannot be used as names

// note: js identifiers are case sensitive

// the assignment operator
// in js, the equal sign (=) is an "assignment" operator, not an "equal to" operator
// this is different from algebra. the following does not make sense in algebra

x = x + 5;

// in js, however, it makes perfect sense: it assigns the value of x + 5 to x
// (it calculates the value of x + 5 and puts the result into x. the values of x is
// incremented by 5)

// note: the equal to operator is written like == in js

// js data types
// js variables can hold numbers like 100 and text values like "john doe"
// in programming, text values are called text strings
// js can handle many types of data, but for now, just think of numbers and strings
// strings are written inside double or single quotes. numbers are written without quotes
// if you put a number in quotes, it will be treated as a text string

// example
const pi = 3.14;
let person = "john doe";
let answer = "yes i am!";

// declaring a js variable
// creating a variable in js is called "declaring" a variable
// you declare a js variable with the var or the let keyword

var carName;

// or

let carName;

// after the declaration, the variable has no value (technically it has the value of
// undefined)
// to assign a value to the variable, use the equal sign

carName = "volvo";

// you can also assign a value to the variable when you declare it

let carName = "volvo";

// one statement, many variables
// you can declare many variables in one statement
// start the statement with var or let and separate the variables by comma

// example
(person = "john doe"), (carName = "volvo"), (price = 200);

// a declaration can span multiple lines

// example
(person = "john doe"), (carName = "volvo"), (price = 200);

// value = undefined
// in computer programs, variables are often declared without a value. the value can be
// something that has to be calculated, or something that will be provided later, like
// user input
// a variable declared without a value will have the value undefined
// the variable carName will have undefined after the execution of this statement

// example
let carName;

// re-declaring js variables
// if you re-declare a js variable, it will not lose its value
// the variable carName will still have the value volvo after the execution of these
// statements

// example
var carName = "volvo";
var carName;

// note: you cannot re-declare a variable declared with let or const
// this will not work

let carName = "volvo";
let carName;

// js arithmetic
// as with algebra, you can do arithmetic with js variables, using operators like = and +

// example
let x = 5 + 2 + 3;

// you can also use variables to store values

// example
let x = "jhone" + " " + "doe";

// also try this

// example
let x = "5" + 2 + 3;

// note: if you put a number in quotes, the rest of the numbers will be treated as strings,
// and concatenated

// example
let x = 5 + 2 + "3";

// js dollar sign $
// since js treats a dollar sign ($) as a letter, identifiers containing $ are valid
// variable names

// example
let $ = "hello world";
let $$$ = 2;
let $myMoney = 100;

// using the dollar sign is not very common in js, but professional programmers often use
// it as an alias for the main function in a js library

// js underscore _
// since js treats an underscore (_) as a letter, identifiers containing _ are valid
// variable names

// example
let _lastName = "john doe";
let _x = 2;
let _100 = 100;

// using the underscore character is not very common in js, but a convention among
// professional programmers is to use it as an alias for private (hidden) variables
