// js data types

// js has 8 datatypes
// 1. string
// 2. number
// 3. bigint
// 4. boolean
// 5. undefined
// 6. null
// 7. symbol
// 8. object

// the object datatype
// the object data type can contain
// 1. an object
// 2. an array
// 3. a date

// examples
// numbers
let length = 16;
let weight = 7.5;

// strings
let color = "red";
let name = "john";

// boolean
let x = true;
let y = false;

// object
const person = {
    firstName: "john",
    lastName: "doe",
}

// array object
const fruits = ["apple", "banana", "orange"];

// date object
const today = new Date("2022-03-25");

// note
// a js variable can hold any type of data

// the concept of data types
// in programming, data types is an important concept
// to be able to operate on variables, it is important to know something about the type
// without data types, a computer cannot safely solve this:

x = 16 + "volvo";

// does it make sense to add volvo to 16? will it produce an error or will it produce a 
// result?
// js will treat the example above as:
x = "16" + "volvo";

// note: when adding a number and a string, js will treat the number as a string

// example
x = 16 + "volvo";

// example
x = "volvo" + 16;

// js evalutates expressions from left to right. different sequences can produce different
// results:

// js
x = 16 + 4 + "volvo";
// result
// 20volvo

// js
x = "volvo" + 16 + 4;
// result
// volvo164

// in the first example, js treats 16 and 4 as numbers, until it reaches "volvo"
// in the second example, since the first operand is a string, all operands are treated 
// as strings

// js types are dynamic
// js has dynamic types. this means that the same variable can be used to hold different
// data types:

// example
// let x; // now x is undefined
x = 5; // now x is a number
x = "john"; // now x is a string

// js strings
// a string (or a text string) is a series of characters like "john doe"
// strings are written with quotes. you can use single or double quotes:

// example
// using double quotes
let carName1 = "volvo xc60";

// using single quotes
let carName2 = 'volvo xc60';

// you can use quotes inside a string, as long as they don't match the quotes surrounding
// the string:

// example
// single quote inside double quotes
let answer1 = "it's alright";

// single quotes inside double quotes
let answer2 = "he is called 'john'";

// double quotes inside single quotes
let answer3 = 'he is called "john"';

// js numbers
// all js numbers are stored as decimal numbers (floating point)
// numbers can be written with, or without decimals:

// example
// with decimals
let x1 = 34.00;

// without decimals
let x2 = 34;

// exponential notation
// extra large or extra small numbers can be written with scientific (exponential) notation:

// example
y = 123e5; // 12300000
let z = 123e-5; // 0.00123

// note
// most programming languages have many number types:
// whole numbers (integers)
// byte (8-bit), short (16-bit), int (32-bit), long (64-bit)
// real numbers (floating-point)
// float (32-bit), double (64-bit)
// js numbers are always one type: double (64-bit) floating point

// js bigint
// all js numbers are stored in a 64-bit floating point format
// js bigint is a new datatype that can be used to store integer values that are too big to
// be represented by a normal js number

// example
x = BigInt(1234567890123456789012345678901234567890);

// js booleans
// booleans can only have two values: true or false

// example
x = 5;
y = 5;
z = 6;
(x == y) // returns true
(x == z) // returns false

// booleans are often used in conditional testing

// js arrays
// js arrays are written with square brackets
// js array items are separated by commas
// the following code declares (creates) an array called cars, containing three items (car
// names)

// example
const cars = ["saab", "volvo", "bmw"];

// array indexes are zero-based, which means the first item is [0], second is [1], and on

// js objects
// js objects are written with curly braces
// object properties are written as name:value pairs, separated by commas

// example
const person1 = { firstName: "john", lastName: "doe", age: 50, eyeColor: "blue" };

// the object (person) in the example above has 4 properties: firstName, lastName, age, and
// eyeColor

// the typeof operator
// you can use the js typeof operator to find the type of a js variable
// teh typeof operator returns the type of a variable or an expression

// example
typeof "" // returns "string"
typeof "john" // returns "string"
typeof "john doe" // returns "string"

// example
typeof 0 // returns "number"
typeof 314 // returns "number"
typeof 3.14 // returns "number"
typeof (3) // returns "number"
typeof (3 + 4) // returns "number"

// undefined
// in js, a variable without a value, has the value undefined. the type is also undefined

// example
let car;

// any variable can be emptied, by setting the value to undefined. the type will also be
// undefined

// example
car = undefined;

// empty values
// an empty value has nothing to do with undefined
// an empty string has both a legal value and a type

// example
car = "";