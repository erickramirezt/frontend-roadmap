// js object prototypes

// all js objects inherit properties and methods from a prototype

// in the previous chapter we learned how tou se an object constructor

// example
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

// we also learned that you can not add a new property to an existing object constructor

// example
Person.nationality = "English";

// to add a new property to a constructor, you must add it to the constructor function

// example
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}

// prototype inheritance
// all js objects inherit properties and methods from a prototype
// date objects inherit from Date.prototype
// array objects inherit from Array.prototype
// person objects inherit from Person.prototype
// the object.prototype is on the top of the prototype inheritance chain
// all js objects inherit properties and methods from object.prototype

// adding properties and methods to objects
// sometimes you want to add new properties (or methods) to all existing objects of a 
// given type
// sometimes you want to add new properties (or methods) to an object constructor

// using the prototype property
// the js prototype property allows you to add new properties to object constructors

// example

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye
}

Person.prototype.nationality = "English";

// the js prototype property also allows you to add new methods to objects constructors

// example
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye
}

Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
}

// only modify your own prototypes. never modify the prototypes of standard js objects

