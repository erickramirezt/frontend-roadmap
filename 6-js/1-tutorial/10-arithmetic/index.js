// js arithmetic

// js arithmetic operators
// arithmetic operators perform arithmetic on numbers (literals or variables)

// operator 	description
// + 	        addition
// - 	        subtraction
// * 	        multiplication
// ** 	        exponentiation (ES2016)
// / 	        division
// % 	        modulus (division remainder)
// ++ 	        increment
// -- 	        decrement

// arithmetic operations
// a typical arithmetic operation operates on two numbers
// the two numbers can be literals

// example
let x = 100 + 50;

// or variables

// example
x = a + b;

// or expressions

// example
x = (100 + 50) * a;

// operators and operands
// the numbers (in an arithmetic operation) are called operands
// the operation (to be performed between the two operands) is defined by an operator

// operand 	operator 	operand
// 100 	    + 	        50

// adding
// the addtion operator (+) adds numbers

// example
x = 5;
let y = 2;
let z = x + y;

// subtracting
// the subtraction operator (-) subtracts numbers

// example
x = 5;
y = 2;
z = x - y;

// multiplying
// the multiplication operator (*) multiplies numbers

// example
x = 5;
y = 2;
z = x * y;

// dividing
// the division operator (/) divides numbers

// example
x = 5;
y = 2;
z = x / y;

// remainder
// the modulus operator (%) returns the division remainder

// example
x = 5;
y = 2;
z = x % y;

// in arithmetic, the division of two integers produces a quotient and a remainder
// in mathematics, the result of a modulo operation is the remainder of an arithmetic
// division

// incrementing
// the increment operator (++) increments numbers

// example
x = 5;
x++;
z = x;

// decrementing
// the decrement operator (--) decrements numbers

// example
x = 5;
x--;
z = x;

// exponentiation
// the exponentiation operator (**) raises the first operand to the power of the second 
// operand

// example
x = 5;
z = x ** 2;

// x ** y produces the same result as Math.pow(x, y)

// example
x = 5;
z = Math.pow(x, 2);

// operator precedence
// operator precedence describes the order in which operations are performed in an
// arithmetic expression

// example
x = 100 + 50 * 3;

// is the result of example above the same as 150 * 3, or is it the same as 100 + 150?
// is the addition or the multiplication done first?
// as in traditional school mathematics, the multiplication is done first
// multiplication and division have higher precedence than addition and subtraction
// and (as in school mathematics) the precedence can be changed by using parentheses
// when using parentheses, the operations inside the parentheses are computed first

// example
x = (100 + 50) * 3;

// when many operators have the same precedence (like addition and subtraction), they
// are computed from left to right

// examples
x = 100 + 50 - 3;
x = 100 / 50 * 3;
