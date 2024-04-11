// js object properties

// properties are the most important part of any js object

// js properties
// properties are the values associated with a js object.
// a js object is a collection of unordered properties.
// properties can usually be changed, added, and deleted, but some are read only.

// accessing js properties
// the syntax for accessing the property of an object is:

objectName.propertyName

// or

objectName["propertyName"]

// or

objectName[expression]

// the expression must evaluate to a property name.

// example 1

person.firstName + " is " + person.age + " years old."

// example 2

person["firstName"] + " is " + person["age"] + " years old."

// js for in loop
// the js for in statement loops through the properties of an object.

// syntax
for (let variable in object) {

}

// the block of code inside of the for in loop will be executed once for each property.
// looping through the properties of an object

// example
person = {
    firstName: "John",
    lastName: "Doe",
    age: 25
}

for (let x in person) {
    text += person[x]
}

// adding new properties
// you can add new properties to an existing object by simply giving it a value.
// assume that the person object already exists - you can then give it new properties:

// example
person.nationality = "English"

// deleting properties
// the delete keyword deletes a property from an object:

// example
delete person.age

// or 

delete person["age"]

// the delete keyword deletes both the value of the property and the property itself.
// after deletion, the property cannot be used before it is added back again.
// the delete operator is designed to be used on object properties. it has no effect on
// variables or functions.
// the delete operator should not be used on predefined js object properties. it can crash
// your application.

// nested object
// values in an object can be objects.

// example
myObj = {
    name: "John",
    age: 30,
    cars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
}

// you can access nested objects using the dot notation or the bracket notation:

// example
myObj.cars.car2

// or

myObj.cars["car2"]

// or

myObj["cars"]["car2"]

// example

p1 = "cars"
p2 = "car2"
myObj[p1][p2]

// nested arrays and objects
// values in objects can be arrays, and values in arrays can be objects.

// example
myObj = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
}

// to access arrays inside arrays, use a for-in loop for each array

// example
for (let i in myObj.cars) {
    x += "<h1>" + myObj.cars[i].name + "</h1>"
    for (let j in myObj.cars[i].models) {
        x += myObj.cars[i].models[j]
    }
}

// properties attributes
// all properties have a name. in addition they also have a value.
// the value is one of the property's attributes.
// other attributes are: enumerable, configurable, and writable.
// these attribtes define how the property can be accessed (is it readable?, is it 
// writable?).
// in js, all attributes can be read, but only the value attribute can be changed (and 
// only if the property is writable).
// es5 has methods for both getting and setting all property attributes.

// prototype properties
// js objects inherit the properties of their prototype.
// the delete keyword does not delete inherited properties, but if you delete a prototype
// property, it will affect all objects inherited from the prototype.