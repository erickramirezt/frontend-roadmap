// js numbers

// js has only one type of number. numbers can be written with or without decimals.

// example
let x = 3.14; // a number with decimals
let y = 3; // a number without decimals

// extra large or extra small numbers can be written with scientific (exponential) 
// notation:

// example
x = 123e5; // 12300000
y = 123e-5; // 0.00123

// js numbers are always 64-bit floating point.
// unlike many other programming languages, js does not define different types of numbers,
// like integers, short, long, floating point etc.

// js numbers are always stored as double precision floating point numbers, following the
// international IEEE 754 standard.

// this format stores numbers in 64 bits, where the number (the fraction) is stored in bits
// 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63:

// value (aka fraction/mantissa)	exponent	sign
// 52 bits (0 - 51)	11 bits (52 - 62)	1 bit (63)

// integer precision
// integers (numbers without a period or exponent notation) are accurate up to 15 digits.

// example
x = 999999999999999; // x will be 999999999999999
y = 9999999999999999; // y will be 10000000000000000

// the maximum number of decimals is 17

// floating precision
// floating point arithmetic is not always 100% accurate.
x = 0.2 + 0.1;

// to solve the problem above, it helps to multiply and divide:
x = (0.2 * 10 + 0.1 * 10) / 10; // x will be 0.3

// adding numbers and strings

// warning!!
// js uses the + operator for both addition and concatenation.
// numbers are added. strings are concatenated.

// if you add two numbers, the result will be a number:

// example
x = 10;
y = 20;
z = x + y;

// if you add two strings, the result will be a string concatenation:
x = "10";
y = "20";
z = x + y;

// if you add a number and a string, the result will be a string concatenation:
x = 10;
y = "20";
z = x + y;

// if you add a string and a number, the result will be a string concatenation:
x = "10";
y = 20;
z = x + y;

// a common mistake is to expect this result to be 30:
x = 10;
y = 20;
z = "the result is: " + x + y;

// a common mistake is to expect this result to be 102030:
x = 10;
y = 20;
z = "30";
result = x + y + z;

// the js interpreter works from left to right.
// first 10 + 20 is added because x and y are numbers.
// then 30 and z are concatenated because z is a string.

// numeric strings
// js strings can have numeric content:
x = 100;
y = "100";

// js will try to convert strings to numbers in all numeric operations:
x = "100";
y = "10";
z = x / y;

// this will also work:
x = "100";
y = "10";
z = x * y;

// and this will work:
x = "100";
y = "10";
z = x - y;

// but this will not work:
x = "100";
y = "10";
z = x + y;

// in the last example js uses the + operator to concatenate the strings.

// NaN - not a number
// NaN is a js reserved word indicating that a number is not a legal number.
// trying to do arithmetic with a non-numeric string will result in NaN (not a number):

// example
x = 100 / "apple";

// however, if the string is numeric, the result will be a number:

// example
x = 100 / "10";

// you can use the global js function isNaN() to find out if a value is a number:

// example
x = 100 / "apple";
isNaN(x); 

// watch out for NaN. if you use NaN in a mathematical operation, the result will also be 
// NaN:

// example
x = NaN;
y = 5;
z = x + y;

// or the result might be a concatenation:

// example
x = NaN;
y = "5";
z = x + y;

// NaN is a number: typeof NaN returns number:

// example
typeof NaN;

// infinity
// infinity (or -infinity) is the value js will return if you calculate a number outside 
// the largest possible number.

// example
let myNumber = 2;
// execute until infinity
while (myNumber != Infinity) {
    // myNumber will be infinity
    myNumber = myNumber * myNumber;
}

// division by 0 (zero) also generates infinity:
// example
x = 2 / 0;
y = -2 / 0;

// infinity is a number: typeof infinity returns number.

// example
typeof Infinity;

// hexadecimal
// js interprets numeric constants as hexadecimal if they are preceded by 0x.

// example
x = 0xff; 

// never write a number with a leading zero (like 07).
// some js versions interpret numbers as octal if they are written with a leading zero.

// by default, js displays numbers as base 10 decimals.
// but you can use the toString() method to output numbers from base 2 to base 36.
// hexadecimal is base 16. decimal is base 10. octal is base 8. binary is base 2.

// example
myNumber = 32;
myNumber.toString(32);
myNumber.toString(16);
myNumber.toString(12);
myNumber.toString(10);
myNumber.toString(8);
myNumber.toString(2);

// ja numbers as objects
// normally js numbers are primitive values created from literals:
x = 123;

// but numbers can also be defined as objects with the keyword new:
x = new Number(123);

// example
x = 123;
y = new Number(123);

// do not create number objects
// the new keyword complicates the code and slows down execution speed.
// number objects can produce unexpected results:

// when using the == equality operator, equal numbers are equal:
x = 500;
y = new Number(500);

// when using the === equality operator, equal numbers are not equal
x = 500;
y = new Number(500);

// comparing two js objects will always return false