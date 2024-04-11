// js objects

// real life objects, properties and methods
// in real life, a car is an object
// a car has properties like weight and color, and methods like start and stop
// properties           methods
// car.name = Fiat      car.start()
// car.model = 500      car.drive()
// car.weight = 850kg   car.brake()
// car.color = white    car.stop()
// all cars have the same properties, but the property values differ from car to car
// all cars have the same methods, but the methods are performed at different times

// js objects
// you have already learned that js variables are containers for data values
// this code assigns a simple value (Fiat) to a variable named car

let car = "Fiat";

// objects are variables too, but objects can contain many values
// this code assigns many values (Fiat, 500, white) to a variable named car

const car1 = { type: "Fiat", model: "500", color: "white" };

// this values are written as name:value pairs (name and value separated by a colon)

// it is a common practice to declare objects with the const keyword

// object definition
// you define (and create) a js object with an object literal

// example
const person = {
    firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"
}

// spaces and line breaks are not important. an object definition can span multiple lines

// example
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
}

// object properties
// the name:values pairs in js objects are called properties

// property     property value
// firstName    John
// lastName     Doe
// age          50
// eyeColor     blue

// accessing object properties
// you can access object properties in two ways
objectName.propertyName

// or

objectName["propertyName"]

// example1
person.lastName;

// example2
person["lastName"];

// js object are containers for named values called properties

// object methods
// objects can also have methods
// methods are actions that can be performed on objects
// methods are stored in properties as function definitions

// property     property value
// firstName    John
// lastName     Doe
// age          50
// eyeColor     blue
// fullName     function() {return this.firstName + " " + this.lastName;}

// a method is a function stored as a property

// example
const person2 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

// in the example above, this refers to the person object
// i.e. this.firstName means the firstName property of this
// i.e. this.firstName means the firstName property of person

// what is this?
// is js, the this keyword refers to an object
// which object depends on how this is being invoked (used or called)
// the this keyword refers to different objects depending on where it is used

// in an object method, this refers to the object
// alone, this refers to the global object
// in a function, this refers to the global object
// in a function, in strict mode, this is undefined
// in an event, this refers to the element that received the event
// methods like call(), apply() and bind() can refer this to any object

// note
// this is not a variable. it is a keyword. you cannot change the value of this

// the this keyword
// in a function definition, this refers to the "owner" of the function
// in the example above, this is the person object that "owns" the fullName function
// in other words, this.firstName means the firstName property of this object

// accessing object methods
// you access an object method with the following syntax
objectName.methodName()

// example
name = person.fullName();

// if you access a method without the () parentheses, it will return the function definition

// example
name = person.fullName;

// do not declare strings, numbers, and booleans as objects
// when a js variable is declared with the keyword "new", the variable is created as an 
// object

x = new String();        // declares x as a string object
y = new Number();        // declares y as a number object
z = new Boolean();       // declares z as a boolean object

// avoid string, number, and boolean objects. they complicate your code and slow down execution 
// speed

