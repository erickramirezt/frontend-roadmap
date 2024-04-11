// js arrays

// an array is a special variable, which can hold more than one value
const cars = ["Saab", "Volvo", "BMW"];

// why use arrays?
// if you have a list items (a list of car names, for example), storing the cars in 
// single variables could look like this:

let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";

// however, what if you want to loop through the cars and find a specific one? and what if
// you had not 3 cars, but 300?
// the solution is an array!
// an array can hold many values under a single name, and you can access the values by
// referring to an index number

// creating an array
// using an array literal is the easiest way to create a javascript array
// syntax:
const arrayName = [item1, item2, ...items];

// it is a common practice to declare arrays with const keyword

// example
const cars1 = ["Saab", "Volvo", "BMW"];

// spaces and line breaks are not important. a declaration can span multiple lines

// example
const cars2 = [
    "Saab",
    "Volvo",
    "BMW"
];

// you can also create an array, and then provide the elements

// example
const cars3 = [];
cars3[0] = "Saab";
cars3[1] = "Volvo";
cars3[2] = "BMW";

// using the js keyword new
// the following example also creates an array, and assigns values to it

// example
const cars4 = new Array("Saab", "Volvo", "BMW");

// the two examples above do exactly the same
// there is no need to use new Array()
// for simplicty, readability and execution speed, use the array literal method

// accessing array elements
// you access an array element by referring to the index number

const cars5 = ["Saab", "Volvo", "BMW"];
let car = cars5[0];

// note: array indexes start with 0. [0] is the first array element, [1] is the second
// element

// changing an array element
// this statement changes the value of the first element in cars

cars5[0] = "Opel";

// example
const cars6 = ["Saab", "Volvo", "BMW"];
cars6[0] = "Opel";

// converting an array to a string
// the javascript method toString() converts an array to a string of (comma separated)
// array values

// example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();

// access the full array
// with js, the full array can be accessed by referring to the array name

// example
const cars7 = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars7;

// arrays are objects
// arrays are a special type of objects. the typeof operator in js returns "object" for
// arrays
// but, javascript arrays are best described as arrays
// arrays use numbers to access its "elements". in this example, person[0] returns john

// array
const person = ["John", "Doe", 46];

// objects use names to access its "members". in this example, person.firstName returns
// john

// object
const person1 = { firstName: "John", lastName: "Doe", age: 46 };

// array elements can be objects
// javascript variables can be objects. arrays are special kinds of objects
// because of this, you can have variables of different types in the same array
// you can have objects in an array. you can have functions in an array. you can have
// arrays in an array

myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;

// array properties and methods
// the real strength of javascript arrays are the built-in array properties and methods

cars.length // returns the length of an array
cars.sort() // sorts an array

// the length property
// the length property of an array returns the length of an array (the number of array
// elements)

// example
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits1.length;

// the length property is always one more than the highest array index

// accessing the first array element

// example
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let first = fruits2[0];

// accessing the last array element

// example
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
let last = fruits3[fruits3.length - 1];

// looping array elements
// one way to loop trough the elements of an array is using a for loop

// example
const fruits4 = ["Apple", "Banana", "Orange"];
let fLen = fruits4.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
    text += "<li>" + fruits4[i] + "</li>";
}
text += "</ul>";

// you can also use the array.forEach() function

// example
const fruits5 = ["Apple", "Banana", "Orange"];

let text1 = "<ul>";
fruits5.forEach(myFunction);
text1 += "</ul>";

function myFunction(value) {
    text1 += "<li>" + value + "</li>";
}

// adding array elements
// the easiest way to add a new element to an array is using the push() method

// example
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
fruits6.push("Lemon"); // adds a new element (Lemon) to fruits

// new elements can also be added to an array using the length property

// example
const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
fruits7[fruits7.length] = "Lemon"; // adds a new element (Lemon) to fruits

// warning
// adding elements with high indexes can create undefined "holes" in an array

// example
const fruits8 = ["Banana", "Orange", "Apple", "Mango"];
fruits8[6] = "Lemon"; // adds a new element (Lemon) to fruits

// associative arrays
// many programming languages support arrays with named indexes
// arrays with named indexes are called associative arrays (or hashes)
// javascript does not support arrays with named indexes
// in javascript, arrays always use numbered indexes

// example
const person2 = [];
person2[0] = "John";
person2[1] = "Doe";
person2[2] = 46;
person2.length; // will return 3
person2[0]; // will return "John"

// warning
// if you use named indexes, javascript will redefine the array to a standard object
// after that, some array methods and properties will produce incorrect results

// example
const person3 = [];
person3["firstName"] = "John";
person3["lastName"] = "Doe";
person3["age"] = 46;
person3.length; // will return 0
person3[0]; // will return undefined

// the difference between arrays and objects
// in javascript, arrays use numbered indexes. 
// in javascript, objects use named indexes

// arrays are a special kind of objects, with numbered indexes

// when to use arrays. when to use objects
// javascript does not support associative arrays
// you should use objects when you want the element names to be strings (text)
// you should use arrays when you want the element names to be numbers

// js new array
// js has a built-in array constructor new array()
// but you can safely use [] instead
// these two different statements both create a new empty array named points

const points = new Array();
const points1 = [];

// these two different statements both create a new array containing 6 numbers

const points2 = new Array(40, 100, 1, 5, 25, 10);
const points3 = [40, 100, 1, 5, 25, 10];

// the new keyword can produce some unexpected results

// create an array with three elements
const points4 = new Array(40, 100, 1);

// create an array with two elements
const points5 = new Array(40, 100);

// create an array with one element
const points6 = new Array(40);

// a common error
const points7 = new Array(40);

// is not the same as
const points8 = new Array(40, 100);

// create an array with one element
const points9 = [40];

// create an array with 40 undefined elements
const points10 = new Array(40);

// how to recognize an array
// a common question is: how do i know if a variable is an array?
// the problem is that the javascript operator typeof returns "object"

const fruits9 = ["Banana", "Orange", "Apple", "Mango"];
let type = typeof fruits9;

// the typeof operator returns object because a javascript array is an object

// solution 1
// to solve this problem es5 (js 2009) defined a new method Array.isArray()

Array.isArray(fruits);

// solution 2
// the instanceof operator returns true if an object is created by a given constructor

const fruits10 = ["Banana", "Orange", "Apple", "Mango"];
fruits10 instanceof Array;

