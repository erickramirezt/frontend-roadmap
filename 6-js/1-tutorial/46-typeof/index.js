// js typeof

// in js there are 5 different data types that can contain values:
// string
// number
// boolean
// object
// function

// there are 6 types of objects:
// object
// date
// array
// string
// number
// boolean

// and 2 data types that cannot contain values:
// null
// undefined

// the typeof operator
// you can use the js typeof operator to find the type of a js variable

// example
typeof "john"; // returns string
typeof 3.14; // returns number
typeof NaN; // returns number
typeof false; // returns boolean
typeof [1, 2, 3, 4]; // returns object
typeof { name: "john", age: 34 }; // returns object
typeof new Date(); // returns object
typeof function () {}; // returns function
typeof myCar; // returns undefined (if myCar is not declared)
typeof null; // returns object

// please observe
// the data tpye of NaN is number
// the data type of an array is object
// the data type of a date is object
// the data type of null is object
// the data type of an undefined variable is undefined
// the data type of a variable that has not been assigned a value is also undefined

// you cannot use typeof to determine if a js object is an array or a date

// primitive data
// a primitive data value is a single simple data value with no additional properties and 
// methods
// the typeof operator can return one of these primitive types:
// string
// number
// boolean
// undefined

// example
typeof "john"; // returns string
typeof 3.14; // returns number
typeof true; // returns boolean
typeof false; // returns boolean
typeof x; // returns undefined (if x has no value)

// complex data
// the typeof operator can return one of two complex types:
// function
// object

// the typeof operator returns object for objects, arrays, and null
// the typeof operator does not return object for functions

// example
typeof { name: "john", age: 34 }; // returns object
typeof [1, 2, 3, 4]; // returns object (not array)
typeof null; // returns object
typeof function () {}; // returns function

// the typeof operator returns object for arrays because in js arrays are objects

// the data type of typeof
// the typeof operator is not a variable. it is an operator. operators ( + - * / ) do not 
// have any data type
// but, the typeof operator always returns a string (containing the type of the operand)

// the constructor property
// the constructor property returns the constructor function for all js variables

// example
"john".constructor; // returns function String() {[native code]}
(3.14).constructor; // returns function Number() {[native code]}
false.constructor; // returns function Boolean() {[native code]}
[1, 2, 3, 4].constructor; // returns function Array() {[native code]}
// { name: "john", age: 34 }.constructor; // returns function Object() {[native code]}
new Date().constructor; // returns function Date() {[native code]}
// function () {}.constructor; // returns function Function() {[native code]}

// you can check the constructor property to find out if an object is an array (contains the
// word "array")

function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}

// or even simpler, you can check if the object is an array function
function isArray(myArray) {
    return myArray.constructor === Array;
}

// you can check the constructor property to find out if an object is a date (contains the
// word "date")

function isDate(myDate) {
    return myDate.constructor.toString().indexOf("Date") > -1;
}

// or even simpler, you can check if the object is a date function

// example
function isDate(myDate) {
    return myDate.constructor === Date;
}

// undefined
// in js, a variable without a value, has the value undefined. the type is also undefined

// example
let car;

// any variable can be emptied, by setting the value to undefined. the type will also be
// undefined

// example
car = undefined; // value is undefined, type is undefined

// empty values
// an empty value has nothing to do with undefined
// an empty string has both a legal value and a type

// example
let car1 = ""; // the value is "", the typeof is "string"

// null
// in js null is "nothing". it is supposed to be something that doesn't exist
// unfortunately, in js, the data type of null is an object

// you can consider it a bug in js that typeof null is an object

// you can empty an object by setting it to null

// example
let person = { firstName: "john", lastName: "doe", age: 50, eyeColor: "blue" };
person = null; // now value is null, but type is still an object

// you can also empty an object by setting it to undefined
// example
let person1 = { firstName: "john", lastName: "doe", age: 50, eyeColor: "blue" };
person1 = undefined; // now both value and type is undefined

// difference between undefined and null
// undefined and null are equal in value but different in type

typeof undefined; // undefined
typeof null; // object

null === undefined; // false
null == undefined; // true

// the instanceof operator
// the instanceof operator returns true if an object is an instance of the specified object

// example
const cars = ["Saab", "Volvo", "BMW"];

cars instanceof Array; // returns true
cars instanceof Object; // returns true
cars instanceof String; // returns false
cars instanceof Number; // returns false