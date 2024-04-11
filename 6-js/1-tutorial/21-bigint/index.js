// js bigint

// js bigint variables are used to store big integer values that are too big to be 
// represented by a normal js number

// js integer accuracy
// js integers are accurate up to 15 digits

// integer precision
let x = 999999999999999;
let y = 9999999999999999;

// in js, all numbers are stored in a 64-bit floating point format (ieee 754 standard)
// with this standard, large integer cannot be exactly represented and will be rounded
// because of this, js can only safely represent integers
// up to 9007199254740991 (2^53 - 1)
// and
// down to -9007199254740991 (-(2^53 - 1))
// integer values outside this range lose precision

// how to create a bigint
// to create a bigint, add an n to the end of the integer or call bigint()

// examples
x = 999999999999999;
y = 9999999999999999n;

x = 1234567890123456789012345n
y = BigInt(1234567890123456789012345)

// bigint: a new js datatype
// the js typeof a bigint is bigint

// example
x = BigInt(9999999999999999)
let type = typeof x;

// bigint is the second numeric data type in js (after number)
// with bigint the total number of supported data types in js is 8
// 1. string
// 2. number
// 3. bigint
// 4. boolean
// 5. null
// 6. undefined
// 7. object
// 8. symbol

// bigint operators
// operators that can be used on a js number can also be used on a bigint

// bigint multiplication example
x = 9007199254740995n;
y = 9007199254740995n;
z = x * y;

// notes
// arithmetic between a bigint and a number is not allowed (type conversion lose 
// information)
// unsigned right shift (>>>) can not be done on a bigint (it does not have a fixed 
// width)

// bigint decimals
// a big int can not have decimals

// big int division example
x = 5n;
y = x / 2;
// error (cannot mix bigint and other types, use explicit conversions)

x = 5n;
y = Number(x) / 2;

// bigint hex, octal and binary
// bigint can also be written in hexadecimal, octal or binary notation

// bigint hex example
let hex = 0x20000000000003n
let oct = 0o400000000000000003n
let bin = 0b100000000000000000000000000000000000000000000000000011n

// precision curiosity
// rounding can compromise program security

// max_safe_integer example
9007199254740992 === 9007199254740993; // is true !!!

// browser support
// bigint is supported in all browsers since september 2020

// minimum and maximum safe integers
// es6 added max and min properties to the number object
// max_safe_integer
// min_safe_integer

// max_safe_integer example
x = Number.MAX_SAFE_INTEGER;

// min_safe_integer example
x = Number.MIN_SAFE_INTEGER;

// new number methods
// es6 also added 2 new methods to the number object
// number.isinteger()
// number.issafeinteger()

// the number.isinteger() method
// the number.isinteger() method returns true if the argument is an integer

// example: isinteger()
Number.isInteger(10);
Number.isInteger(10.5);

// the number.issafeinteger() method
// a safe is an integer that can be exactly represented as a double precision number
// the number.issafeinteger() method returns true if the argument is a safe integer

// example issafeinteger()
Number.isSafeInteger(10);
Number.isSafeInteger(12345678901234567890);

// safe integers are all integers from -(2^53 - 1) to (2^53 - 1)
// this is safe: 9007199254740991. this is not safe: 9007199254740992