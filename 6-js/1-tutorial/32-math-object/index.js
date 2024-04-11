// js math object

// the js math object allows you to perform mathematical tasks on numbers

// example
Math.PI;

// the math object
// unlike other objects, the math object has no constructor
// the math object is static
// all methods and properties can be used without creating a math object first

// math properties (constants)
// the syntax for any math property is: Math.property
// js provides 8 math properties that can be accessed and used

// example
Math.E; // returns Euler's number
Math.PI; // returns PI
Math.SQRT2; // returns the square root of 2
Math.SQRT1_2; // returns the square root of 1/2
Math.LN2; // returns the natural logarithm of 2
Math.LN10; // returns the natural logarithm of 10
Math.LOG2E; // returns base 2 logarithm of E
Math.LOG10E; // returns base 10 logarithm of E

// math methods
// the syntax for any math method is: Math.method(number)

// number to integer
// there are common methods to round a number to an integer

// math.round(x) returns the value of x rounded to its nearest integer
// math.ceil(x) returns the value of x rounded up to its nearest integer
// math.floor(x) returns the value of x rounded down to its nearest integer
// math.trunc(x) returns the integer part of x (not supported in IE)

// math.round()
// Math.round(x) returns the nearest integer to x

// examples
Math.round(4.7);

Math.round(4.4);

Math.round(4.5);

// math.ceil()
// Math.ceil(x) returns the value of x rounded up to its nearest integer

// example
Math.ceil(4.9);
Math.ceil(4.7);
Math.ceil(4.4);
Math.ceil(4.2);
Math.ceil(-4.2);

// math.floor()
// Math.floor(x) returns the value of x rounded down to its nearest integer

// example
Math.floor(4.9);
Math.floor(4.7);
Math.floor(4.4);
Math.floor(4.2);
Math.floor(-4.2);

// math.trunc()
// Math.trunc(x) returns the integer part of x

// example
Math.trunc(4.9);
Math.trunc(4.7);
Math.trunc(4.4);
Math.trunc(4.2);
Math.trunc(-4.2);

// math.sign()
// Math.sign(x) returns if x is negative, null or positive

// example
Math.sign(-4.7);
Math.sign(4.7);
Math.sign(0);

// math.trunc() and math.sign() were added in ES6

// math.pow()
// Math.pow(x, y) returns the value of x to the power of y

// example
Math.pow(8, 2);

// math.sqrt()
// Math.sqrt(x) returns the square root of x

// example
Math.sqrt(64);

// math.abs()
// Math.abs(x) returns the absolute (positive) value of x

// example
Math.abs(-4.7);

// math.sin()
// Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in 
// radians)
// if you want to use degrees instead of radians, you have to convert degrees to radians:
// angle in radians = angle in degrees x PI / 180

// example
Math.sin(90 * Math.PI / 180); // returns 1 (the sine of 90 degrees)

// math.cos()
// Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in
// radians)
// if you want to use degrees instead of radians, you have to convert degrees to radians:
// angle in radians = angle in degrees x PI / 180

// example
Math.cos(0 * Math.PI / 180); // returns 1 (the cos of 0 degrees)

// math.min() and math.max()
// Math.min() and Math.max() can be used to find the lowest or highest value in a list of
// arguments

// example
Math.min(0, 150, 30, 20, -8, -200); // returns -200

Math.max(0, 150, 30, 20, -8, -200); // returns 150

// math.random()
// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)

// example
Math.random();

// the math.log() method
// Math.log(x) returns the natural logarithm (base E) of x
// the natural logarithm returns the time needed to reach a certain level of growth

// examples
Math.log(1);

Math.log(10);

Math.log(100);

// math.e and math.log() are twins

// how many times to multiply Math.E to reach 10?
Math.log(10);

// the math.log2() method
// Math.log2(x) returns the base 2 logarithm of x

// how many times must we multiply 2 to get 8?
Math.log2(8);

// the math.log10() method
// Math.log10(x) returns the base 10 logarithm of x

// how many times must we multiply 10 to get 1000?
Math.log10(1000);

// js math methods

// method       description
// abs(x)       returns the absolute value of x
// acos(x)      returns the arccosine of x, in radians
// acosh(x)     returns the hyperbolic arccosine of x
// asin(x)      returns the arcsine of x, in radians
// asinh(x)     returns the hyperbolic arcsine of x
// atan(x)      returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
// atan2(y, x)  returns the arctangent of the quotient of its arguments
// atanh(x)     returns the hyperbolic arctangent of x
// cbrt(x)      returns the cubic root of x
// ceil(x)      returns x, rounded upwards to the nearest integer
// cos(x)       returns the cosine of x (x is in radians)
// cosh(x)      returns the hyperbolic cosine of x
// exp(x)       returns the value of Ex
// floor(x)     returns x, rounded downwards to the nearest integer
// log(x)       returns the natural logarithm (base E) of x
// max(x, y, z, ..., n) returns the number with the highest value
// min(x, y, z, ..., n) returns the number with the lowest value
// pow(x, y)    returns the value of x to the power of y
// random()     returns a random number between 0 and 1
// round(x)     returns the value of x rounded to its nearest integer
// sin(x)       returns the sine of x (x is in radians)
// sinh(x)      returns the hyperbolic sine of x
// sqrt(x)      returns the square root of x
// tan(x)       returns the tangent of an angle
// tanh(x)      returns the hyperbolic tangent of a number
// trunc(x)     returns the integer part of a number (x)