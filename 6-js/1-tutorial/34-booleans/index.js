// js booleans

// a js boolean represents on eof two values true or false

// boolean values
// very often, in programming, you will need a data type that can only have one of two
// values, like
// YES / NO
// ON / OFF
// TRUE / FALSE
// for this, js has a boolean data type. it can only take the values true or false

// the boolean() function
// you can use the boolean() function to find out if an expression (or a variable) is true

// example
Boolean(10 > 9);

// or even easier

// example
(10 > 9);
10 > 9;

// comparisons and conditions
// the chapter js comparisons gives a full overview of comparison operators
// the chapter js conditions gives a full overview of conditional statements
// here are some examples

// operator    description            example
// ==          equal to               if(day == "Monday")
// >           greater than           if(age > 18)
// <           less than              if(age < 18)

// the boolean value of an expression is the basis for all js comparisons and conditions

// everything with a "value" is true

// examples
100
3.14
-15
"hello"
"false"
7 + 1 + 3.14

// everything without a "value" is false

// the boolean value of 0 (zero) is false
let x = 0;
Boolean(x);

// the boolean value of -0 (minus zero) is false
x = -0;
Boolean(x);

// the boolean value of "" (empty string) is false
x = "";
Boolean(x);

// the boolean value of undefined is false
x = undefined;
Boolean(x);

// the boolean value of null is false
x = null;
Boolean(x);

// the boolean value of false is (you guessed it) false
x = false;
Boolean(x);

// the boolean value of false is false
x = false;
Boolean(x);

// the boolean value of NaN is false
x = 10 / "Hallo";
Boolean(x);

// js booleans as objects
// normally js booleans are primitive values created from literals

x = false;

// but booleans can also be defined as objects with the keyword new

let y = new Boolean(false);

// example
x = false;
y = new Boolean(false);

// typeof x returns boolean
// typeof y returns object;

// don't create booleans objects
// the new keyword complicates the code and slows down execution speed
// boolean objects can produce unexpected results

// when using the == operator, x == y are equal
x = false
y = new Boolean(false)

// when using the === operator, x === y are not equal
x = false
y = new Boolean(false)

// comparing two js objects will always return false