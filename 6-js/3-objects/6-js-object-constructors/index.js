// js object constructors

// example
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// notes
// it is considered good practice to name constructor functions with an upper-case first
// letter

// about this
// in a constructor function, this does not have a value. it is a substitute for the new
// object. the value of this will become the new object when a new object is created

// object types (blueprints) (classes)
// the example from the previous chapters are limited, they only create single objects
// sometimes we need a blueprint for creating many objects of the same type
// the way to create an object type, is to use an object constructor function
// in the example above, function Person() is an object constructor function
// objects of the same type are created by calling the constructor function with the new
// keyword

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

// what is this?
// in js, the this keyword refers to an object
// which object depends on how this is being invoked (used or called)
// the this keyword refers to different objects, depending on where it is used

// in an object method, this refers to the object
// alone, this refers to the global object
// in a function, this refers to the global object
// in a function, in strict mode, this is undefined
// in an event, this refers to the element that received the event
// methods like call(), and apply() can refer this to any object

// note
// this is not a variable, it is a keyword. you cannot change the value of this

// adding a property to an object
// adding a new property to an existing object is easy

// example
myFather.nationality = "English";

// the property will be added to myFather. not to any other person objects (like myMother)

// adding a method to an object
// adding a new method to an existing object is also easy

// example
myFather.name = function () {
  return this.firstName + " " + this.lastName;
};

// the method will be added to myFather. not to any other person objects (like myMother)

// adding a property to a constructor
// you cannot add a new property to an object constructor the same way you add a new
// property to an existing object

// example
Person.nationality = "English";

// to add a new property to a constructor, you must add it to the constructor function

// example
function Person(first, last, age, eyeColor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyeColor;
  this.nationality = "English";
}

// this way object properties can have default values

// adding a method to a constructor
// your constructor function can also define methods

// example
function Person(first, last, age, eyeColor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyeColor;
  this.name = function () {
    return this.firstName + " " + this.lastName;
  };
}

// you cannot add a new method to an object constructor the same way you add a new
// method to an existing object
// adding methods to an object constructor must be done inside the constructor function

// example
function Person(first, last, age, eyeColor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyeColor;
  this.changeName = function (name) {
    this.lastName = name;
  };
}

// the changeName() function will change the lastName property of a person object

// now you can try
// myMother.changeName("Doe");

// js knows which person you are talking about by substituting the this keyword for 
// myMother

// built in js constructors
// js has built-in constructors for native objects

// new String() 
// new Array()
// new Boolean()
// new Number()
// new Object()
// new Function()
// new Date()
// new RegExp()
// new Error()

// the Math() object is not in the list. Math is a global object. the new keyword cannot
// be used on math

// did you know?
// as you can see above, js has object versions of the primitive data types string, number,
// and boolean. but there is no reason to create complex objects. primitive values are much
// faster
// use string literal "" instead of new string()
// use number literal 12345 instead of new number()
// use boolean literal true/false instead of new boolean()
// use object literal {} instead of new object()
// use array literal [] instead of new array()
// use pattern literal /()/ instead of new regexp()
// use function expression () {} instead of new function()

// example
const x1 = {}; // new object
const x2 = ""; // new primitive string
const x3 = 0; // new primitive number

const x4 = false; // new primitive boolean
const x5 = []; // new array object
const x6 = /()/; // new regexp object
const x7 = function () {}; // new function object

// string objects
// normally, strings are created as primitives: const firstName = "John"
// but strings can also be created as objects using the new keyword: const firstName = new
// String("John")

// number objects
// normally, numbers are created as primitives: const x = 123
// but numbers can also be created as objects using the new keyword: const x = new
// Number(123)

// boolean objects
// normally, booleans are created as primitives: const x = false
// but booleans can also be created as objects using the new keyword: const x = new
// Boolean(false)