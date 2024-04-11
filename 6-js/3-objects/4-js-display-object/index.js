// js display objects

// how to display js objects
// displaying a js object will output [object Object]

// example
const person = {
  firstName: "John",
  age: 30,
  city: "New York",
};

document.getElementById("demo").innerHTML = person;

// some common solutions to display an object correctly
// displaying the object properties by name
// displaying the object properties in a loop
// displaying the object using JSON.stringify()

// displaying the object properties
// the properties of an object can be displayed as a string

// example
const person1 = {
  firstName: "John",
  age: 30,
  city: "New York",
};

document.getElementById("demo1").innerHTML =
  person1.firstName +
  " is " +
  person1.age +
  " years old, and he lives in " +
  person1.city;

// displaying the object properties in a loop
// the properties of an object can be displayed in a loop

// example
const person2 = {
  firstName: "John",
  age: 30,
  city: "New York",
};

let txt = "";
for (let x in person2) {
  txt += person2[x] + " ";
}

document.getElementById("demo2").innerHTML = txt;

// you must use person[x] in the loop
// person-x will not work (because x is a variable)

// using object.values()
// any js object can be converted to an array using Object.values()

const person3 = {
  firstName: "John",
  age: 50,
  city: "New York",
};

const myArray = Object.values(person3);

// myArray is now a js array, ready to be displayed

// example
const person4 = {
  firstName: "John",
  age: 50,
  city: "New York",
};

const myArray1 = Object.values(person4);
document.getElementById("demo3").innerHTML = myArray1;

// displaying the object using JSON.stringify()
// any js can be stringified (converted to a string) with the js function JSON.stringify()

// example
const person5 = {
  firstName: "John",
  age: 50,
  city: "New York",
};

let myString = JSON.stringify(person5);

// myString is now a string, and ready to be displayed

// example

const person6 = {
  firstName: "John",
  age: 50,
  city: "New York",
};

let myString1 = JSON.stringify(person6);
document.getElementById("demo4").innerHTML = myString1;

// the result will be a string following the json notation
// {"firstName":"John","age":50,"city":"New York"}

// json.stringify() is included is js and supported in all major browsers

// stringify a dates
// jsin.stringify converts dates into strings

// example
const person7 = {
  name: "John",
  today: new Date(),
  city: "New York",
};

let myString2 = JSON.stringify(person7);
document.getElementById("demo5").innerHTML = myString2;

// stringify functions
// jsin.stringify will not stringify functions
// example
const person8 = {
  name: "John",
  age: function () {
    return 30;
  },
};

let myString3 = JSON.stringify(person8);
document.getElementById("demo6").innerHTML = myString3;

// this can be fixed if you convert the functions into strings before stringifying

// example
const person9 = {
  name: "John",
  age: function () {
    return 30;
  },
};
person9.age = person9.age.toString();

let myString4 = JSON.stringify(person9);
document.getElementById("demo7").innerHTML = myString4;

// stringify arrays
// it is also possible to stringify arrays
// example
const arr = ["John", "Peter", "Sally", "Jane"];
let myString5 = JSON.stringify(arr);
document.getElementById("demo8").innerHTML = myString5;

// the result will be a string following the json notation
// ["John","Peter","Sally","Jane"]