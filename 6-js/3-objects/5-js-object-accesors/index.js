// js object accessors

// js accessors (getters and setters)
// es5 introduced getters and setters
// getters and setters allow you to define object accessors (computed properties)

// js getters (the get keyword)
// this example uses a lang property to get the value of the language property

// example
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language.toUpperCase();
  },
};

// display data from the object using a getter
document.getElementById("demo").innerHTML = person.lang;

// js setters (the set keyword)
// this example uses a lang property to set the value of the language property

// example
const person1 = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang.toUpperCase();
  },
};

// set an object property using a setter
person1.lang = "en";

// display data from the object using a getter
document.getElementById("demo1").innerHTML = person1.language;

// js function or getter?
// what is this differences between these two examples?

// example
const person2 = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  fullname: function () {
    return this.language.toUpperCase();
  },
};

// display data from the object using a method
document.getElementById("demo2").innerHTML = person2.fullname();

// example
const person3 = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get fullname() {
    return this.language.toUpperCase();
  },
};

// display data from the object using a getter
document.getElementById("demo3").innerHTML = person3.fullname;

// example 1 uses a method to display the language property
// example 2 uses a getter to display the language property

// data quality
// js can secure better data quality when using getters and setters
// using the lang property, in this example, returns the value of the language property
// in uppercase

// example
const person4 = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  get lang() {
    return this.language;
  },
};

// display data from the object using a getter
document.getElementById("demo4").innerHTML = person4.lang;

// using the lang property, in this example, stores an upper case in the language property

// example
const person5 = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang.toUpperCase();
  },
};

// set an object property using a setter
person5.lang = "en";

// display data from the object
document.getElementById("demo5").innerHTML = person5.language;

// why using getters and setters?
// it gives simpler syntax
// it allows equal syntax for properties and methods
// it can secure better data quality
// it is useful for doing things behind the scenes

// object.defineProperty()
// the object.defineProperty() method can also be used to add getters and setters

// a counter example
const obj = { counter: 0 };

// define getter and setter
Object.defineProperty(obj, "reset", {
  get: function () {
    this.counter = 0;
  },
});
Object.defineProperty(obj, "increment", {
  get: function () {
    this.counter++;
  },
});
Object.defineProperty(obj, "decrement", {
  get: function () {
    this.counter--;
  },
});
Object.defineProperty(obj, "add", {
  set: function (value) {
    this.counter += value;
  },
});
Object.defineProperty(obj, "subtract", {
  set: function (value) {
    this.counter -= value;
  },
});

// play with the counter object
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;
