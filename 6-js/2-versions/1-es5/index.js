// js es5

// es 2009, also known as es5, was the first major revision to js.

// es5 features

// use strict
// string[number] access
// multiline strings
// string.trim
// array.isArray()
// array.forEach
// array.map
// array.filter
// array.reduce
// array.reduceRight
// array.every
// array.some
// array.indexOf
// array.lastIndexOf
// json.parse
// json.stringify
// date.now
// date.toISOString
// date.toJSON
// property getters and setters
// reserved words as property names
// object methods
// object defineProperty
// function bind
// trailing commas

// browser support
// es5 is fully supported in all modern browsers

// the use strict directive
// use strict defines that the js code should be executed in strict mode.
// with strict mode you can, for example, not use undeclared variables.

// you can use strict mode in all your programs. it helps you to write cleaner code, like 
// preventing you from using undeclared variables.
// use strict is just string expression. old browsers will not throw an error if they 
// don't understand it.

// property acess on strings
// the charAt() method returns the character at a specified index in a string.

// example
var str = "HELLO WORLD";
str.charAt(0); // returns H

// es5 allows property access on strings.

// example
var str = "HELLO WORLD";
str[0]; // returns H    

// property access on string might be a little unpredicable

// strings over multiple lines
// es5 allows strings literals over multiple lines if escaped with a backslash.

// example
"Hello \
World!";

// the \ method might not have universal support
// older browsers might treat the spaces around the backlash diffrently.
// some older browsers don not allow spaces behind the \ character.

// a safer way to break up a string literal, is to use addition

// example
"Hello " +
    "World!";

// reserved words as property names
// es5 allows reserved words as property names.

// example
var obj = { name: "John", new: "yes" };

// string trim
// the trim() method removes whitespace from both sides of a string.

// example
var str = "       Hello World!        ";
str.trim(); // returns Hello World! 

// array.isArray()
// the isArray() method returns true if an object is an array, otherwise false.

// example
function myFunction() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var x = document.getElementById("demo");
    x.innerHTML = Array.isArray(fruits);
}

// array foreach
// the forEach() method calls a function once for each element in an array, in order.

// example
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value) {
    txt = txt + value + "<br>";
}

// array map
// this example multiplies each array value by 2

// example
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value) {
    return value * 2;
}

// array filter
// this example creates a new array from elements with a value larger than 18

// example
var numbers1 = [45, 4, 9, 16, 25];
var over18 = numbers1.filter(myFunction);

function myFunction(value) {
    return value > 18;
}

// array reduce
// this example finds the sum of all numbers in an array

// example
var numbers = [45, 4, 9, 16, 25];
var sum = numbers.reduce(myFunction);

function myFunction(total, value) {
    return total + value;
}

// array reduceRight
// this example finds the sum of all numbers in an array

// example
var numbers = [45, 4, 9, 16, 25];
var sum = numbers.reduceRight(myFunction);

function myFunction(total, value) {
    return total + value;
}

// array every
// this example check if all array values are larger than 18

// example
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);

function myFunction(value) {
    return value > 18;
}

// array some
// this example check if some array values are larger than 18

// example
var numbers = [45, 4, 9, 16, 25];
var someOver18 = numbers.some(myFunction);

function myFunction(value) {
    return value > 18;
}

// array indexOf
// search an array for an element value and returns its position

// example
var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");

// array lastIndexOf
// lastIndexOf() is the same as indexOf(), but returns the position of the last occurrence 
// of the specified element.

// example
var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.lastIndexOf("Apple");

// json.parse
// a common use of json is to receive data from a web server.
// imagine you received this text string from a web server

// { "name": "John", "age": 30, "city": "New York" };

// the js function json.parse() is used to cconvert the text into a js object

var obj = JSON.parse('{ "name": "John", "age": 30, "city": "New York" }');

// json.stringify
// a common use of json is to send data to a web server.
// when sending data to a web server, the data has to be a string.
// imagine we have this js object

var obj = { name: "John", age: 30, city: "New York" };

// use the js function json.stringify() to convert it into a string

var myJSON = JSON.stringify(obj);

// the result will be a string following the json notation

// myJSON is now a string, and ready to be sent to a server

// example
var obj = { name: "John", age: 30, city: "New York" };
var myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON;

// date.now
// date.now() returns the number of milliseconds since january 1, 1970 00:00:00 UTC.

// example

var timInMSs = Date.now();

// date.now returns the same as getTime() performed on a date objet

// date toISOString
// the toISOString() method converts a date object into a string, using the iso standard.

// example
const d = new Date();
document.getElementById("demo").innerHTML = d.toISOString();

// date toJSON
// the toJSON() method converts a date object into a string, formatted as a json date.
// json date have the same format as the iso-8601 standard: yyyy-mm-ddThh:mm:ss.sssz

// example
const d1 = new Date();
document.getElementById("demo").innerHTML = d.toJSON();

// property getters and setters
// es5 lets you define object methods with a syntax that looks like getting or setting a
// property.
// this example creates a getter for a property named fullname

// example
var person = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}

// display data from the object using a getter
document.getElementById("demo").innerHTML = person.fullName;

// this example creates a setter and a getter for the language property

// example
var person = {
    firstName: "John",
    lastName: "Doe",
    language: "NO",
    set lang(lang) {
        this.language = lang.toUpperCase();
    },
    get lang() {
        return this.language.toUpperCase();
    }
}

// set an object property using a setter
person.lang = "en";

// display data from the object using a getter
document.getElementById("demo").innerHTML = person.lang;

// this example uses a setter to secure upper case updates of language

// example
var person = {
    firstName: "John",
    lastName: "Doe",
    language: "NO",
    set lang(lang) {
        this.language = lang.toUpperCase();
    }
}

// set an object property using a setter
person.lang = "en";

// display data from the object
document.getElementById("demo").innerHTML = person.language;

// object.defineProperty
// the defineProperty() is a new object method in es5
// it lets you define an object property and/or change a property's value and/or metadata

// example
// create an object
var person = { firstName: "John", lastName: "Doe", language: "NO" };

// change a property
Object.defineProperty(person, "language", {
    value: "EN",
    writable: true,
    enumerable: true,
    configurable: true
});

// enumerate properties
var txt = "";
for (var x in person) {
    txt += person[x] + " ";
}
document.getElementById("demo").innerHTML = txt;

// next example is the same code, except it hides the language property from enumeration

// example
// create an object
var person = { firstName: "John", lastName: "Doe", language: "NO" };

// change a property
Object.defineProperty(person, "language", {
    value: "EN",
    writable: true,
    enumerable: false, // hide
    configurable: true
});

// enumerate properties
var txt = "";
for (var x in person) {
    txt += person[x] + " ";
}

// display data from the object
document.getElementById("demo").innerHTML = txt;

// this example creates a setter and a getter to secure upper case updates of language

// example
// create an object
var person = { firstName: "John", lastName: "Doe", language: "NO" };

// change a property
Object.defineProperty(person, "language", {
    get: function () { return language },
    set: function (value) { language = value.toUpperCase() }
});

// change the property
person.language = "en";

// display data from the object
document.getElementById("demo").innerHTML = person.language;

// es5 object methods
// es5 adds a lot of new object methods to js.

// managing objects
// create object with an existing objects as prototyp
Object.create(parent, donor);

// adding or changing an object property
Object.defineProperty(object, property, descriptor);

// adding or changing many object properties
Object.defineProperties(object, descriptors);

// accessing properties
Object.getOwnPropertyDescriptor(object, property);

// returns all properties as an array
Object.getOwnPropertyNames(object);

// accessing the prototype
Object.getPrototypeOf(object);

// returns enumerable properties as an array
Object.keys(object);

// protecting objects
// prevents adding properties to an object
Object.preventExtensions(object);

// returns true if properties can be added to an object
Object.isExtensible(object);

// prevents changes of object properties (not values)
Object.seal(object);

// returns true if object is sealed
Object.isSealed(object);

// prevents any changes to an object
Object.freeze(object);

// returns true if object is frozen
Object.isFrozen(object);

// function bind
// with the bind() method, an object can use a method belonging to another object.
// this example creates 2 objects (person and member)
// the member object borrows the fullname method from the person object

const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName: "Mary",
    lastName: "Doe"
}

const memberFullName = person.fullName.bind(member);

// trailing commas
// es5 allows trailing commas in array and object literals

// example
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
}

// array example
var points = [40, 100, 1, 5, 25, 10,];

// warning!
// json does not allow trailing commas

// json objects
// allowed
var person = '{ "name": "John", "age": 30, "city": "New York" }';
JSON.parse(person);

// not allowed
var person = '{ "name": "John", "age": 30, "city": "New York", }';
JSON.parse(person);

// json arrays
// allowed
var person = '[ "John", "Doe", "New York" ]';

// not allowed
var person = '[ "John", "Doe", "New York", ]';