// js object methods

// example
const person = {
    firstNmae: 'John',
    lastName: 'Doe',
    id: 5566,
    fullName: function () {
        return this.firstNmae + ' ' + this.lastName;
    }
}

// what is this
// in js, the this keyword refers to an object
// which object depends on how this is being invoked (called or used)
// the this keyword refers to different objects depending on how it is used

// in a method, this refers to the owner object
// alone, this refers to the global object
// in a function, this refers to the global object
// in a function, in strict mode, this is undefined
// in an event, this refers to the element that received the event
// methods like bind(), call(), and apply() can refer this to any object

// note
// this is not a variable. it is a keyword. you cannot change the value of this

// js methods
// js methods are actions that can be performed on objects
// a js method is a property containing a function definition

// property     value
// firstName    John
// lastName     Doe
// age          50
// eyeColor     blue
// fullName     function() {return this.firstName + " " + this.lastName;}

// methods are functions stored as object properties

// accessing object methods
// you access an object method with the following syntax

objectName.methodName()

// you will tipycally describe fullName() as a method of the person object, 
// and fullName as a property
// the fullName property will execute (as a function) when it is invoked with ()
// this example accesses the fullName() method of a person object

// example
name = person.fullName();

// if you access the fullName property, without (), it will return the function definition

// example
name = person.fullName;

// adding a method to an object
// adding a new method to an object is easy

// example
person.name = function () {
    return this.firstName + ' ' + this.lastName;
}

// using built-in methods
// this example uses the toUpperCase() method of the String object, to convert a text to 
// uppercase
message = 'Hello world!';
x = message.toUpperCase();

// the value of x, after execution of the code above will be
// HELLO WORLD!

// example
person.name = person.name = function () {
    return (this.firstName + ' ' + this.lastName).toUpperCase();
};

