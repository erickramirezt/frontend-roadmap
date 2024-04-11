// js objects

// in js, objects are king. if you understand objects, you understand js.

// in js almost everything is an object.

// booleans can be objects (if defined with the new keyword)
// numbers can be objects (if defined with the new keyword)
// strings can be objects (if defined with the new keyword)
// dates are always objects
// maths are always objects
// regular expressions are always objects
// arrays are always objects
// functions are always objects
// objects are always objects
// all js values, except primitives, are objects.

// js primitives
// a primitive value is a value that has no properties or methods.
// 3.14 is a primitive
// a primitive data type is data that has a primitive value.
// js defines 7 types of primitive data types:

// examples
// string
// number
// boolean
// null
// undefined
// symbol
// bigint

// immutable
// primitives are immutable. primitives are hardcoded and therefore cannot be changed.
// if x = 3.14, you can change the value of x, but you cannot change the value of 3.14.

// value        type        description
// "john"       string      string
// 3.14         number      number
// true         boolean     boolean
// false        boolean     boolean
// null         object      empty value
// undefined    undefined   no value

// objects are variables
// js variables can contain single values

// example
person = "John Doe"

// js variables can also contain multiple values
// objects are variables too. but objects can contain many values.
// objects values are written as name : value pairs (name and value separated by a colon).

// example
person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" }

// a js object is a collection of named values

// it is a common practice to declare objects with the const keyword

// example
const person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" }

// object properties
// the named values, in js objects, are called properties.

// property value
// firstnames:"John"
// lastname:"Doe"
// age:50
// eyecolor:"blue"

// objects written as anme value pairs are similar to
// associative arrays in php.
// dictionary in python.
// hash tables in c and c++
// hash maps in java
// hash maps in c#
// hash in perl and ruby

// object methods
// methods are actions that can be performed on objects.
// object properties can be both primitive values, other objects, and functions.
// an object method is an object property containing a function definition.

// property value
// firstnames:"John"
// lastname:"Doe"
// age:50
// eyecolor:"blue"
// fullname: function() {return this.firstName + " " + this.lastName;}

// js objects are containers for named values, called properties and methods.

// creating a js object
// with js, you can define and create your own objects.
// there are different ways to create new objects:
// create a single object, using an object literal.
// create a single object, with the keyword new.
// define an object constructor, and then create objects of the constructed type.
// create an object using the object.create() method.

// using an object literal
// this is the easiest way to create a js object.
// using an object literal, you both define and create an object in one statement.
// an object literal is a list of name:value pairs (like age:50) inside curly braces {}.
// the following example creates a new js object with four properties:

// example
person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" }

// spaces and line breaks are not important. an object definition can span multiple lines:

// example
person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
}

// this example creates an empty js objects, and then adds 4 properties.

// example
person = {}
person.firstName = "John"
person.lastName = "Doe"
person.age = 50
person.eyeColor = "blue"

// using the js keyword new
// the following example create a new js object using the keyword new.

// example
person = new Object()
person.firstName = "John"
person.lastName = "Doe"
person.age = 50
person.eyeColor = "blue"

// the example above do exactly the same
// but there is no need to use new object().
// for readibility, create new objects using object literals.

// js objects are mutable
// objects are mutable: they are addressed by reference, not by value.
// if person is an object, the following statement will not create a copy of person:

const x = person

// the object x is not a copy of person. it is person. both x and person are the same 
// object.
// any changes to x will also change person, because x and person are the same object.

// example
person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" }

x = person
x.age = 10

