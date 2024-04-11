// ts arrays

// ts has a specific syntax for typing arrays

// example
const names: string[] = [];
names.push("hello"); // works
// names.push(1); // error: Argument of type '1' is not assignable to parameter of type 'string'

// readonly
// the readonly keyword can prevent arrays from being modified

// example
const names2: readonly string[] = [];
// names2.push("hello"); // error: Property 'push' does not exist on type 'readonly string[]'
// try removing the readonly modifier and see if it works

// type inference
// ts can infer the type of an array if it has values

// example
const numbers = [1, 2, 3];
numbers.push(4); // works
// numbers.push("hello"); // error: Argument of type '"hello"' is not assignable to parameter of type 'number'
let head: number = numbers[0]; // works

