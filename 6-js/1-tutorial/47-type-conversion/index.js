// js type conversion

// converting strings to numbers
// converting numbers to strings
// converting dates to numbers
// converting numbers to dates
// converting booleans to numbers
// converting numbers to booleans

// js type conversion

// js variables can be converted to a new variable and antoher data type
// by the use of a js function
// automatically by js itself

// converting strings to numbers
// the global method number() can convert strings to numbers
// a numeric string (like "3.14") can be converted to a number (like 3.14)  
// an empty string will be converted to 0
// a non-numeric string will be converted to NaN (not a number)

// examples
// these will convert
Number("3.14"); // returns 3.14
Number(Math.PI); // returns 3.141592653589793
Number(" "); // returns 0
Number(""); // returns 0

// these will not convert
Number("99 88"); // returns NaN
Number("hello"); // returns NaN

// number methods
// in the chapter number methods, you will find more methods that can be used to convert
// strings to numbers

// method       description
// Number()     returns a number, converted from its argument
// parseFloat() parses its argument and returns a floating point number
// parseInt()   parses its argument and returns an integer

// the unary + operator
// the unary + operator can be used to convert a variable to a number

// example
let y = "5"; // y is a string
let x = + y; // x is a number

// if the variable cannot be converted, it will still become a number, but with the value 
// NaN

// example
y = "john"; // y is a string
x = + y; // x is a number (NaN)

// converting numbers to strings
// the global method string() can convert numbers to strings
// it can be used any type of numbers, literals, variables, or expressions

// example
String(x) // returns a string from a number variable x
String(123); // returns a string from a number literal 123
String(100 + 23); // returns a string from a number from an expression

// the number method toString() does the same

// example
x.toString(); // returns a string from a number variable x
(123).toString(); // returns a string from a number literal 123
(100 + 23).toString(); // returns a string from a number from an expression

// more methods
// in the chapter number methods, you will find more methods that can be used to convert
// numbers to strings

// method               description
// toExponential()      returns a string, with a number rounded and written using exponential notation
//                      notation
// toFixed()            returns a string, with a number rounded and written with a specified number of 
//                      decimals
// toPrecision()        returns a string, with a number written with a specified length

// converting dates to numbers
// the global method number() can convert dates to numbers

d = new Date();
Number(d); // returns 1404568027739

// the date method getTime() does the same
d = new Date();
d.getTime(); // returns 1404568027739

// converting dates to strings
// the global method string() can convert dates to strings

String(Date()) // returns "Thu Jul 05 2014 17:38:47 GMT+0200 (W. Europe Daylight Time)"

// the date method toString() does the same

// example
Date().toString(); // returns "Thu Jul 05 2014 17:38:47 GMT+0200 (W. Europe Daylight Time)"

// in the chapter date methods, you will find more methods that can be used to convert dates 
// to strings

// method               description
// getDate()            returns the day of the month (from 1-31)
// getDay()             returns the day of the week (from 0-6)
// getFullYear()        returns the year
// getHours()           returns the hour (from 0-23)
// getMilliseconds()    returns the milliseconds (from 0-999)
// getMinutes()         returns the minutes (from 0-59)
// getMonth()           returns the month (from 0-11)
// getSeconds()         returns the seconds (from 0-59)
// getTime()            returns the number of milliseconds since midnight Jan 1, 1970

// converting booleans to numbers
// the global method number() can convert booleans to numbers

Number(false); // returns 0
Number(true); // returns 1

// converting booleans to strings
// the global method string() can convert booleans to strings

String(false); // returns "false"
String(true); // returns "true"

// the boolean method toString() does the same

false.toString(); // returns "false"
true.toString(); // returns "true"

// automatic type conversion
// when js tries to operate on a "wrong" data type, it will try to convert the value to a 
// "right" type
// the result is not always what you expect

5 + null; // returns 5 because null is converted to 0
"5" + null; // returns "5null" because null is converted to "null"
"5" + 2; // returns "52" because 2 is converted to "2"
"5" - 2; // returns 3 because "5" is converted to 5
"5" * "2"; // returns 10 because "5" and "2" are converted to 5 and 2

// automatic string conversion
// js automatically call the variable's toString() method when you try to "output" an object 
// or a variable

document.getElementById("demo").innerHTML = myVar;

// if myVar = {name:"Fjohn"}  // toString converts to "[object Object]"
// if myVar = [1,2,3,4]       // toString converts to "1,2,3,4"
// if myVar = new Date()      // toString converts to "Fri Jul 18 2014 09:08:55 GMT+0200"

// numbers and booleans are also converted, but this is not very visible
// if myVar = 123             // toString converts to "123"
// if myVar = true            // toString converts to "true"
// if myVar = false           // toString converts to "false"

// js type conversion table
// this table shows the result of converting different js values to numbers, strings, and
// booleans

// original value     converted to number     converted to string     converted to boolean
// false              0                       "false"                 false
// true               1                       "true"                  true
// 0                  0                       "0"                     false
// 1                  1                       "1"                     true
// "0"                0                       "0"                     true
// "000"              0                       "000"                   true
// "1"                1                       "1"                     true
// NaN                NaN                     "NaN"                   false
// Infinity           Infinity                "Infinity"              true
// -Infinity          -Infinity               "-Infinity"             true
// ""                 0                       ""                      false
// "20"               20                      "20"                    true
// "twenty"           NaN                     "twenty"                true
// " "                0                       " "                     true
// null               0                       "null"                  false
// undefined          NaN                     "undefined"             false
// {}                 NaN                     "[object Object]"       true
// {name:"Fjohn"}     NaN                     "[object Object]"       true
// new Date()         number of milliseconds  "Fri Jul 18 2014..."    true
// [1,2,3,4]          NaN                     "1,2,3,4"               true
// ["a","b","c"]      NaN                     "a,b,c"                 true
// function (){}      NaN                     "function (){}"         true

// values in quotes indicate string values
// red values indicate values (some) programmers might not expect