// js array iteration

// array iteration method operate on every array item

// js array forEach
// the forEach() method calls a function (a callback function) once for each array element

// example
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
    txt += value + "<br>";
}

// note that the function takes 3 arguments:
// the item value
// the item index
// the array itself
// the example above uses only the value parameter. the example can be rewritten to:

// example
const numbers1 = [45, 4, 9, 16, 25];
let txt1 = "";
numbers1.forEach(myFunction1);

function myFunction1(value) {
    txt1 += value + "<br>";
}

// js array map

// the map() method creates a new array by performing a function on each array element
// the map() method does not execute the function for array elements without values
// the map() method does not change the original array
// this example multiplies each array value by 2:

// example
const numbers2 = [45, 4, 9, 16, 25];
const numbers3 = numbers2.map(myFunction2);

function myFunction2(value) {
    return value * 2;
}

// note that the function takes 3 arguments:
// the item value
// the item index
// the array itself
// when a callback function uses only the value parameter, the index and array parameters 
// can be omitted:

// example
const numbers4 = [45, 4, 9, 16, 25];
const numbers5 = numbers4.map(myFunction3);

function myFunction3(value) {
    return value * 2;
}

// js array flatMap
// es2019 added the array flatMap() method to js
// the flatMap() method first maps all elements of an array and then creates a new array by
// flattening the array

// example
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap(x => [x * 2]);

// browser support
// js array flatMap() is supported in all modern browsers since january 2020

// js array filter
// the filter() method creates an array filled with all array elements that pass a test
// this example creates a new array from elements with a value larger than 18:

// example
const numbers6 = [45, 4, 9, 16, 25];
const over18 = numbers6.filter(myFunction4);

function myFunction4(value, index, array) {
    return value > 18;
}

// note that the function takes 3 arguments:
// the item value
// the item index
// the array itself
// in the example above, the callback function does not use the index and array parameters,
// so they can be omitted

// example
const numbers7 = [45, 4, 9, 16, 25];
const over18_1 = numbers7.filter(myFunction5);

function myFunction5(value) {
    return value > 18;
}

// js array reduce
// the reduce() method runs a function on each array element to produce (reduce it to) a
// single value
// the reduce() method works from left-to-right in the array. see also reduceRight()

// the reduce() method does not reduce the original array

// this example finds the sum of all numbers in an array:

// example
const numbers8 = [45, 4, 9, 16, 25];
let sum = numbers8.reduce(myFunction6);

function myFunction6(total, value, index, array) {
    return total + value;
}

// note that the function takes 4 arguments:
// the total (the initial value / previously returned value)
// the item value
// the item index
// the array itself
// the example above does not use the index and array parameters. it can be rewritten to:

// example
const numbers9 = [45, 4, 9, 16, 25];
let sum1 = numbers9.reduce(myFunction7);

function myFunction7(total, value) {
    return total + value;
}

// the reduce() method can accept an initial value:

// example
const numbers10 = [45, 4, 9, 16, 25];
let sum2 = numbers10.reduce(myFunction8, 100);

function myFunction8(total, value) {
    return total + value;
}

// js array reduceRight
// the reduceRight() method runs a function on each array element to produce (reduce it to)
// a single value
// the reduceRight() works from right-to-left in the array. see also reduce()

// the reduceRight() method does not reduce the original array

// this example finds the sum of all numbers in an array:

// example
const numbers11 = [45, 4, 9, 16, 25];
let sum3 = numbers11.reduceRight(myFunction9);

function myFunction9(total, value, index, array) {
    return total + value;
}

// note that the function takes 4 arguments:
// the total (the initial value / previously returned value)
// the item value
// the item index
// the array itself
// the example above does not use the index and array parameters. it can be rewritten to:

// example
const numbers12 = [45, 4, 9, 16, 25];
let sum4 = numbers12.reduceRight(myFunction10);

function myFunction10(total, value) {
    return total + value;
}

// js array every
// the every() method check if all array values pass a test
// this example check if all array values are larger than 18:

// example
const numbers13 = [45, 4, 9, 16, 25];
let allOver18 = numbers13.every(myFunction11);

function myFunction11(value, index, array) {
    return value > 18;
}

// note that the function takes 3 arguments:
// the item value
// the item index
// the array itself
// when a callback function uses the first parameter only (value), the other parameters can
// be omitted

// example
const numbers14 = [45, 4, 9, 16, 25];
let allOver18_1 = numbers14.every(myFunction12);

function myFunction12(value) {
    return value > 18;
}

// js array some
// the some() method check if some array values pass a test
// this example check if some array values are larger than 18:

// example
const numbers15 = [45, 4, 9, 16, 25];
let someOver18 = numbers15.some(myFunction13);

function myFunction13(value, index, array) {
    return value > 18;
}

// note that the function takes 3 arguments:
// the item value
// the item index
// the array itself

// js array indexOf
// the indexOf() method searches an array for an element value and returns its position

// note: the first item has position 0, the second item has position 1, and so on

// example
// search an array for the item "apple":
const fruits = ["apple", "orange", "apple", "mango"];
let position = fruits.indexOf("apple") + 1;

// syntax
array.indexOf(item, start)

// item - required. the item to search for
// start - optional. where to start the search. negative values will start at the given
// position counting from the end, and search to the end

// array.indexOf() returns -1 if the item is not found
// if the item is present more than once, it returns the position of the first occurence

// js array lastIndexOf
// array.lastIndexOf() is the same as array.indexOf(), but returns the position of the last
// occurence of the specified element

// example
// search an array for the item "apple":
const fruits1 = ["apple", "orange", "apple", "mango"];
let position1 = fruits1.lastIndexOf("apple") + 1;

// syntax
array.lastIndexOf(item, start)

// item - required. the item to search for
// start - optional. where to start the search. negative values will start at the given
// position counting from the end, and search to the beginning

// js array find
// the find() method returns the value of the first array element that passes a test 
// function
// this example finds (returns the value of) the first element that is larger than 18:

// example
const numbers16 = [4, 9, 16, 25, 29];
let first = numbers16.find(myFunction14);

function myFunction14(value, index, array) {
    return value > 18;
}

// note that the function takes 3 arguments:
// the item value
// the item index
// the array itself

// browser support
// find is an es6 feature (js 2015)
// it is supported in all modern browsers, except ie

// js array findIndex
// the findIndex() method returns the index of the first array element that passes a test
// function
// this example finds the index of the first element that is larger than 18:

// example
const numbers17 = [4, 9, 16, 25, 29];
let first1 = numbers17.findIndex(myFunction15);

function myFunction15(value, index, array) {
    return value > 18;
}

// note that the function takes 3 arguments:
// the item value
// the item index
// the array itself

// browser support
// findIndex is an es6 feature (js 2015)
// it is supported in all modern browsers, except ie

// js array.from
// the array.from() method returns an array object from any object with a length property
// for any iterable object

// example
// create an array from a string:
Array.from("ABCDEFG");

// browser support
// array.from is an es6 feature (js 2015)
// it is supported in all modern browsers, except ie

// js array keys
// the array.keys() method returns an array iterator object with the keys of an array

// example
// create an array iterator object, containing the keys of the array:
const fruits2 = ["banana", "orange", "apple", "mango"];
const keys = fruits2.keys();

for (let x of keys) {
    text += x + "<br>";
}

// browser support
// keys is an es6 feature (js 2015)
// it is supported in all modern browsers, except ie

// js array entries

// example
// create an array iterator object, containing the key/value pairs of the array:
const fruits3 = ["banana", "orange", "apple", "mango"];
const f = fruits3.entries();

for (let x of f) {
    document.getElementById("demo").innerHTML += x + "<br>";
}

// the entries method returns an array iterator object with the key/value pairs
[0, "banana"]
[1, "orange"]
[2, "apple"]
[3, "mango"]

// the entries is an es6 feature (js 2015)
// it is supported in all modern browsers, except ie

// js array includes
// es2016 introduced array.includes() to arrays. this allows us to check if an element
// is present in an array (including NaN, unlike indexOf)

// example
const fruits4 = ["banana", "orange", "apple", "mango"];
let n = fruits4.includes("mango"); // true

// syntax
array.includes(searchTerm)

// array.includes() allows to check for NaN values. unlike array.indexOf()

// browser support
// includes is an es6 feature
// it is supported in all modern browsers, except ie

// js array spread (...)
// the ... operator expands an iterable (like an array) into more elements

// example
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Dec"];

const year = [...q1, ...q2, ...q3, ...q4];

// browser support
// ... is an es6 feature (js 2015)
// it is supported in all modern browsers, except ie



