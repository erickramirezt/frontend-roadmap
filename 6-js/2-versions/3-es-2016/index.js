// es 2016

// js version numbers
// old js versions are named by numbers: es5 and es6
// from 2016, versions are named by year: es2016, es2017, es2018, es2019, es2020

// new feaures in es2016
// this chapter introduces the new features in es2016
// js exponentiation operator
// js exponentiation assignment operator
// js array.prototype.includes()

// exponentiation operator
// the exponentiation operator (**) raises the first operand to the power of the second 
// operand

// example
let x = 5;
let z = x ** 2; // 25

// x ** y produces the same result as math.pow(x, y)

// example
x = 5;
z = Math.pow(x, 2); // 25

// exponentiation assignment
// the exponentiation assignment operator (**=) raises the value of a variable to the
// power of the right operand and assigns the result to the variable

// example
x = 5;
x **= 2; // 25

// js array includes()
// es2016 introduced the array.prototype.includes() method to check if an array contains
// an element

// example
const fruits = ['apple', 'banana', 'mango', 'guava'];
fruits.includes('banana'); // true

// array.includes is supported in all modern browsers since august 2016