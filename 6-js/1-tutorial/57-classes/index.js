// js classes

// es2015, also called es6, introduced classes to javascript
// js classes are templates for js objects

// js class syntax
// use the keyword class to create a class
// always add a method named constructor()

// syntax

class ClassName {
    constructor() {
        // code
    }
}

// example

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

// the example above creates a class named "Car"
// the class has two initial properties: name and year

// a js class is not an object
// it is a template for js objects

// using a class
// when you have a class, you can use the class to create objects

// example
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

// the example above uses the Car class to create two Car objects

// the constructor method
// the constructor method is a special method
// it has to have the exact name "constructor"
// it is executed automatically when a new object is created
// it is used to initialize object properties
// if you do not define a constructor method, js will add an empty constructor method

// class methods
// class methods are created with the same syntax as object methods
// use the keyword class to create a class
// always add a constructor() method
// then add any number of methods

// syntax
class ClassName {
    constructor() { }
    method_1() { }
    method_2() { }
    method_3() { }
}

// create a class method name age, that returns the car age

// example
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

const myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
    "My car is " + myCar.age() + " years old.";

// you can send parameters to class methods

// example
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age(x) {
        return x - this.year;
    }
}

const myCar3 = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
    "My car is " + myCar3.age(2021) + " years old.";

// browser support
// the following defines the browser version with full support for classes in js
// chrome 42, firefox 45, edge 13, safari 9.1, opera 29