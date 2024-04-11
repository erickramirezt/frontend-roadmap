// the js this keyword

// example
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

// what is this?
// in js, the this keyword refers to an object
// which object depends on how this is being invoked (used or called)
// the this keyword refers to different objects depending on how it is used
// in an object method, this refers to the object
// alone, this refers to the global object
// in a function, this refers to the global object
// in a function, in strict mode, this is undefined
// in an event, this refers to the element that received the event
// methods like call(), and apply() can refer this to any object

// note
// this is not a variable. it is a keyword. you cannot change the value of this

// this in a method
// when used in an object method, this refers to the object
// in the example in top of this page, this refers to the person object
// because the fullName() method belongs to the person object

// fullName: function () {
//     return this.firstName + " " + this.lastName;
// }

// this alone
// when used alone, this refers to the global object
// because this is running in the global scope
// in a browser window the global object is [object Window]

// example
let x = this;

// in strict mode, when used alone, this also refers to the global object

// example
"use strict";
// let x = this;

// this in a function (default)
// in a function, the global object is the default binding for this
// in a browser window the global object is [object Window]

// example
function myFunction() {
    return this;
}

// this in a function (strict)
// js strict mode does not allow default binding
// so, when used in a function, in strict mode, this is undefined

// example
"use strict";
function myFunction() {
    return this;
}

// object method binding
// in these examples, this is the person object

// example
const person1 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this
    }
}

// example
const person2 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

// i.e. this.firstName means the firstName property of this object

// explicit function binding
// the call() and apply() methods are predefined js methods
// they can be used to call an object method with another object as argument

// the example below calls person3.fullName with person4 as argument, this refers to 
// person4, even if fullName is a method of person3

// example
const person3 = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const person4 = {
    firstName: "John",
    lastName: "Doe",
}

person3.fullName.call(person4); // Will return "John Doe"

// function borrowing
// with the bind() method, an object can borrow a method from another object
// this example creates 2 objects (member and person5)
// the member object borrows the fullName method from the person5 object

// example
const person5 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName: "Mary",
    lastName: "Doe",
}

let fullName = person5.fullName.bind(member); // Will return "Mary Doe"

// this precedence
// to determine wich object this refers to; use the following precedence order:
// precedence       object
// 1                bind()
// 2                apply() and call()
// 3                object.method()
// 4                global scope

// is this in a function being called using bind()?
// is this in a function being called using call() or apply()?
// is this in a object method?
// is this in the global scope?