// js json

// json is a format for storing and transporting data
// json is often used when data is sent from a server to a web page

// what is json
// json stands for javascript object notation
// json is a lightweight data interchange format
// json is language independent *
// json is self-describing and easy to understand
// * the json syntax is derived from js object notation syntax, but the json format is text
// only. code for reading and generating json data can be written in any programming 
// language

// json example
// this json syntax defines an employees object: an array of 3 employee records (objects)

// json example
{
    "employees": [
        { "firstName": "John", "lastName": "Doe" },
        { "firstName": "Anna", "lastName": "Smith" },
        { "firstName": "Peter", "lastName": "Jones" }
    ]
}

// the json format evaluates to js objects
// the json format is syntactically identical to the code for creating js objects
// because of this similarity, a js program can easily convert json data into native js
// objects

// json syntax rules
// data is in name/value pairs
// data is separated by commas
// curly braces hold objects
// square brackets hold arrays

// json data - a name and a value
// json data is written as name/value pairs, just like js object properties
// a name/value pair consists of a field name (in double quotes), followed by a colon,
// followed by a value

"firstName": "John";

// json names require double quotes. js names do not

// json objects
// json objects are written inside curly braces
// just like in js, objects can contain multiple name/value pairs

{"firstName": "John", "lastName": "Doe"}

// json arrays
// json arrays are written inside square brackets
// just like in js, arrays can contain objects

"employees": [
    { "firstName": "John", "lastName": "Doe" },
    { "firstName": "Anna", "lastName": "Smith" },
    { "firstName": "Peter", "lastName": "Jones" }
]

// in the example above, the object employees is an array. it contains three objects
// each object is a record of a person (with a first name and a last name)

// converting a json text to a js object
// a common use of json is to exchange data to/from a web server, and display the data in
// a web page
// for simplicity, this can be demonstrated using a string as input
// first, created a js string, containing json syntax

let text = '{ "employees": [' +
    '{ "firstName": "John", "lastName": "Doe" },' +
    '{ "firstName": "Anna", "lastName": "Smith" },' +
    '{ "firstName": "Peter", "lastName": "Jones" } ]}';

// then, use the js built-in function json.parse() to convert the string into a js object

const obj = JSON.parse(text);

// finally, use the new js object in your page

document.getElementById("demo").innerHTML =
    obj.employees[1].firstName + " " + obj.employees[1].lastName;