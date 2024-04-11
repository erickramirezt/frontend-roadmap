// es2021

// new features in es2021
// promise any()
// string replaceAll()
// numeric separators

// new features in es2022
// array at()
// string at()
// regexp /d
// object.hasOwn()
// error.cause
// await import
// private methods and fields
// class field declarations

// warning
// these features are relatively new
// older browsers may need an alternative code

// js string replaceAll()
// es2021 introduced the string replaceAll() method

// example
text = text.replaceAll("Cats", "Dogs");
text = text.replaceAll("cats", "dogs");

// the replaceAll() method allows you to specify a regular expression instead of a string
// to be replaced
// if the parameter is a regular expression, the global flag must be set, otherwise a 
// syntax error will occur

// example
text = text.replaceAll(/Cats/g, "Dogs");
text = text.replaceAll(/cats/g, "dogs");

// note
// es2020 introduced the string matchAll() method

// js numeric separators
// es2021 introduced numeric separators to make it easier to read long numbers

// example
var num = 1_000_000_000;

// the numeric separator is only for visual use

// example
var num1 = 1000000000;
var num2 = 1_000_000_000;
(num1 === num2) // returns true

// the numeric separator can be placed anywhere in the number

// example
var num = 10_00_000_000;

// note
// the numeric separator is not allowed at the beginning or end of the number
// in js only variables can start with _

// the numeric only variables can start with _

// the numeric separator is supported in all modern browsers since January 2021

// js array at()
// es2022 introduced the array at() method

// examples
// get the third element of the array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.at(2);

// the at method returns an indexed element from the array
// the at method returns the same as []
// the at method is supported in all modern browsers since March 2022

// note
// many languages allows negative bracket indexing like [-1] to access elements from the
// end of an object / array / string
// this is not possible in js, because [] is used for accessing both arrays and objects
// obj[-1] refers to the value of key -1, not to the last property of the object
// the at() method was introduced to solve this problem in es2022

// js string at()
// es2022 introduced the string at() method

// examples
// get the third character of the string
var str = "HELLO WORLD";
var x = str.at(2);

// the at method returns an indexed character from the string
// the at method returns the same as []
// the at method is supported in all modern browsers since March 2022