// js operators

// the addition operator + adds numbers
// the assignment operator = assigns a value to a variable

// js assignment
// the assignment operator = assigns a value to a variable

// assignment examples
let x = 5;

// assign the value 10 to x
x = 10;
// assign the value 2 to y
let y = 2;
// assign the value x + y to z
let z = x + y;

// js addition
// the addition operator + adds numbers

// adding
x = 5;
y = 2;
z = x + y;

// js multiplication
// the multiplication operator * multiplies numbers

// multiplying
x = 5;
y = 2;
z = x * y;

// types of js operators
// there are different types of js operators
// arithmetic operators
// assignment operators
// comparison operators
// string operators
// logical operators
// bitwise operators
// ternary operators
// type operators

// js arithmetic operators
// arithmetic operators are used to perform arithmetic on numbers

// arithmetic operators example
let a = 3;
x = (100 + 50) * a;

// operator     description
// +            addition
// -            subtraction
// *            multiplication
// **           exponentiation (ES2016)
// /            division
// %            modulus (division remainder)
// ++           increment
// --           decrement

// js assignment operators
// assignment operators assign values to js variables
// the addition assignment operator += adds a value to a variable

// assignment
x = 10;
x += 5;

// operator     example     same as
// =            x = y       x = y
// +=           x += y      x = x + y
// -=           x -= y      x = x - y
// *=           x *= y      x = x * y
// /=           x /= y      x = x / y
// %=           x %= y      x = x % y
// **=          x **= y     x = x ** y

// js comparison operators
// operator    description
// ==          equal to
// ===         equal value and equal type
// !=          not equal
// !==         not equal value or not equal type
// >           greater than
// <           less than
// >=          greater than or equal to
// <=          less than or equal to
// ?           ternary operator

// js string operators
// all the comparison operators above can also be used on strings

// example
let text1 = "a";
let text2 = "b";
let result = text1 < text2;

// note that strings are compared alphabetically

// example
text1 = "20";
text2 = "5";
result = text1 < text2;

// js string addition
// the + operator can also be used to add (concatenate) strings

// example
text1 = "John";
text2 = "Doe";
let text3 = text1 + " " + text2;

// the += assignment operator can also be used to add (concatenate) strings

// example
text1 = "What a very ";
text1 += "nice day";

// the result of text1 will be: What a very nice day

// note: when used on strings, the + operator is called the concatenation operator

// adding strings and numbers
// adding two numbers, will return the sum, but adding a number and a string will return a
// string

// example
x = 5 + 5;
y = "5" + 5;
z = "Hello" + 5;

// the result of x, y, and z will be:
10;
55;
("Hello5");

// note: if you add a number and a string, the result will be a string

// js logical operators
// operator    description
// &&          logical and
// ||          logical or
// !           logical not

// js bitwise operators
// bit operators work on 32 bits numbers
// any numeric operand in the operation is converted into a 32 bit number. the result is 
// converted back to a js number

// operator    description           example     same as     result     decimal
// &           and                   5 & 1       0101 & 0001 0001       1
// |           or                    5 | 1       0101 | 0001 0101       5
// ~           not                   ~ 5         ~0101       1010       10
// ^           xor                   5 ^ 1       0101 ^ 0001 0100       4
// <<          zero fill left shift  5 << 1      0101 << 1   1010       10
// >>          signed right shift    5 >> 1      0101 >> 1   0010       2
// >>>         zero fill right shift 5 >>> 1     0101 >>> 1  0010       2

