// ts simple types

// ts supports some simple types simple types (primitives) you may know

// there are three main primitive types in ts
// boolean - true or false values
// number - whole numbers and floating point numbers
// string - text values

// there are also two less common primitive used in later versions of js and ts
// bigint - whole numbers and floating point numbers, but allows larger negative and
// positive values than number
// symbol are user to craete a globally unique identifier

// type assignment
// when creating a variable, there are two ways typescript assigns a type:
// explicit
// implicit
// in both examples below firstname is a string

// explicit type
// explicit - writing out the type

let firstName: string = "John";

// explicit type assignment are easier to read and understand

// implicit type
// implicit - typescript infers the type

let lastName = "Doe";

// note: having ts infer the type is the preferred method

// implicit assignment forces ts to infer the type
// implicit type assignment are shorter, faster to type, and often used when developing
// and testing

// error in type assignment
// ts will throw an error if data types do not match

// example
// firstName = 123; // error: type 'number' is not assignable to type 'string'

// implicit type assignment would have made firstName less noticeable as a string, but
// both will throw an error

// js will not throw an error for mismatched types, but ts will

// unable to infer
// ts may not always properly infer what the type of a variable may be. in such cases,
// it will set the type to any which disables type checking

// example
// implicit any as json.parse doesn't know what type of data it returns so it can be any
// thing
const json = JSON.parse('55');
// most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json);

// this behavior can be disabled by enabling noImplicitAny as an option in a ts project
// tsconfig.json. that is a json config file for customizing how some of ts behaves