// js iterables

// iterables are iterable objects (like arrays)
// iterables can be accesed with the simple and efficient code
// iterables can itereted over with for...of loops

// the for of loop
// the js for of loop iterates over iterable objects

// syntax
for (variable of iterable) {
    // code block to be executed
}

// iterating
// iterating is easy to understand
// it simply means looping over a sequence of elements
// here are some easy examples
// iterating over a string
// iterating over an array

// iterating over a string
// you can use a for...of loop to iterate over the elements of a string

// example
const name = "w3schools";

for (const x of name) {
    // code block to be executed
}

// iterating over an array
// you can use a for...of loop to iterate over the elements of an array

// example
const letters = ["a", "b", "c", "d"];

for (const x of letters) {
    // code block to be executed
}

// iterating over a set
// you can use a for...of loop to iterate over the elements of a set

// example
const letters1 = new Set(["a", "b", "c", "d"]);

for (const x of letters1) {
    // code block to be executed
}

// iterating over a map
// you can use a for...of loop to iterate over the elements of a map

// example
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

for (const x of fruits) {
    // code block to be executed
}