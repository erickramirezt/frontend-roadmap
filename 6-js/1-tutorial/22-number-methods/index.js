// js number methods

// js number methods
// these number methods can be used in all js numbers

// method           description
// toString()       returns a string representation of a number
// toExponential()  returns a string, with a number rounded and written using exponential notation
// toFixed()        returns a string, with a number rounded and written with a specified number of decimals
// toPrecision()    returns a string, with a number written with a specified length
// valueOf()        returns a number as a number

// the toString() method
// the toString() method returns a number as a string
// all number methods can be used on any type of numbers (literals, variables, or 
// expressions)

// example
let x = 123;
x.toString();
(123).toString();
(100 + 23).toString();

// the toExponential() method
// toExponential() returns a string, with a number rounded and written using exponential 
// notation
// a parameter defines the number of characters behind the decimal point

// example
x = 9.656;
x.toExponential(2);
x.toExponential(4);
x.toExponential(6);

// the parameter is optional. if you don't specify it, javascript will not round the 
// number

// the toFixed() method
// toFixed() returns a string, with the number written with a specified number of 
// decimals

// example
x = 9.656;
x.toFixed(0);
x.toFixed(2);
x.toFixed(4);
x.toFixed(6);

// toFixed(2) is perfect for working with money

// the toPrecision() method
// toPrecision() returns a string, with a number written with a specified length

// example
x = 9.656;
x.toPrecision();
x.toPrecision(2);
x.toPrecision(4);
x.toPrecision(6);

// the valueOf() method
// valueOf() returns a number as a number
x = 123;
x.valueOf();
(123).valueOf();
(100 + 23).valueOf();

// in js, a number can be a primitive value (typeof = number) or an object (typeof =
// object)
// the valueOf() method is used internally in javascript to convert number objects to
// primitive values
// there is no reason to use it in your code

// all js data types have a valueOf() and a toString() method

// converting variables to numbers
// there are 3 js methods that can be used to convert a variable to a number

// method           description
// Number()         returns a number, converted from its argument
// parseFloat()     parses its argument and returns a floating point number
// parseInt()       parses its argument and returns an integer

// these methods are not number methods, but global javascript methods

// the Number() method
// the Number() method can be used to convert js variables to numbers

// example
Number(true)
Number(false)
Number("10")
Number("  10")
Number("10  ")
Number(" 10  ")
Number("10.33")
Number("10,33")
Number("10 33")
Number("John")

// if the number cannot be converted, NaN (not a number) is returned

// the Number() method used on dates
// Number() can also convert a date to a number

// example
Number(new Date("2017-09-30"))

// note
// the Date() method above returns the number of milliseconds since 1.1.1970

// the number of miliseconds between 1970-01-02 and 1970-01-01 is 86400000

// example
Number(new Date("1970-01-02"))

Number(new Date("2017-09-30"))

// the parseInt() method
// parseInt() parses a string and returns a whole number. spaces are allowed. only the
// first number is returned

// example
parseInt("-10")
parseInt("-10.33")
parseInt("10")
parseInt("10.33")
parseInt("10 20 30")
parseInt("10 years")
parseInt("years 10")

// if the number cannot be converted, NaN (not a number) is returned

// the parseFloat() method
// parseFloat() parses a string and returns a number. spaces are allowed. only the first
// number is returned

// example
parseFloat("10")
parseFloat("10.33")
parseFloat("10 20 30")
parseFloat("10 years")
parseFloat("years 10")

// if the number cannot be converted, NaN (not a number) is returned

// number object methods
// these object methods belong to the number object

// method                   description
// Number.isInteger()       returns true if the number is an integer
// Number.isSafeInteger()   returns true if the number is a safe integer
// Number.parseFloat()      parses a string and returns a floating point number
// Number.parseInt()        parses a string and returns an integer

// number methods cannot be used on variables
// the number methods above belong to the js number object
// these methods can only be accessed like Number.isInteger()
// using X.isInteger() where X is a number, will result in an error
// TypeError: X.isInteger is not a function

// the Number.isInteger() method
// the Number.isInteger() method returns true if the argument is an integer

// example
Number.isInteger(10)
Number.isInteger(10.5)

// the Number.isSafeInteger() method
// a safe integer is an integer that can be exactly represented as a double precision
// number
// the Number.isSafeInteger() method returns true if the argument is a safe integer

// example
Number.isSafeInteger(10)
Number.isSafeInteger(12345678901234567890)

// safe integers are all integers from -(2^53 - 1) to (2^53 - 1)
// this is safe: 9007199254740991. This is not safe: 9007199254740992.

// the Number.parseFloat() method
// Number.parseFloat() parses a string and returns a number
// spaces are allowed. only the first number is returned

// example
Number.parseFloat("10")
Number.parseFloat("10.33")
Number.parseFloat("10 20 30")
Number.parseFloat("10 years")
Number.parseFloat("years 10")

// if the number cannot be converted, NaN (not a number) is returned

// note
// the number methods Number.parseFloat() and Number.parseInt()
// are the same as the
// global parseFloat() and parseInt() functions
// the purpose is modularization of globals (to make it easier to use the same js code
// outside the browser)

// the Number.parseInt() method
// Number.parseInt() parses a string and returns an whole number
// spaces are allowed. only the first number is returned

// example
Number.parseInt("-10")
Number.parseInt("-10.33")
Number.parseInt("10")
Number.parseInt("10.33")
Number.parseInt("10 20 30")
Number.parseInt("10 years")
Number.parseInt("years 10")

// if the number cannot be converted, NaN (not a number) is returned

