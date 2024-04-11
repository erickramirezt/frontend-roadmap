// es 2017

// new features in es 2017
// this chapter introduces the new features in es 2017
// js string padding
// js object.entries()
// js object.values()
// js async and await
// js object.getOwnPropertyDescriptors()

// js string padding
// es2017 introduced two string methods: string.prototype.padstart() and 
// string.prototype.padend() to support padding at the beginning and at the end of a 
// string respectively

// examples
var text = "5"
text.padStart(2, "0"); // "05"

text = "5"
text.padEnd(2, "0"); // "50"

// js string padding is supported in all modern browsers since march 2017

// js objet.entries()
// es2017 added the object.entries() method to objects
// object.entries() returns an array of the key/value pairs of an object

// example
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    eyeColor: 'blue'
}

text = Object.entries(person);

// object.entries() makes it simple to use object in loops

// example
const fruits = {
    apple: 28,
    orange: 17,
    pear: 54
}

text = "";
for (const [fruit, count] of Object.entries(fruits)) {
    text += `There are ${count} ${fruit}s\n`;
}

// object.entries() also makes it simple to convert objects into maps

const fruits1 = {
    apple: 28,
    orange: 17,
    pear: 54
}

const fruitsMap = new Map(Object.entries(fruits1));

// js object.entries is supported in all modern browsers since march 2017

// js object.values()
// object.values() are similar to object.entries() but returns an array of the object's
// values

// example
const person1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    eyeColor: 'blue'
}

let text = Object.values(person1);

// js object.values() is supported in all modern browsers since march 2017

// js async functions
// waiting for a timeout
async function myDisplay() {
    let myPromise = new Promise(function (myResolve, myReject) {
        setTimeout(function () {myResolve("I love You !!");}, 3000);
    });

    document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();

// firefox and chrome were the first browsers to support async functions in march 2017

