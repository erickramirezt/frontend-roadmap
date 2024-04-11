// ts tuples

// typed arrays
// a tuple is a typed array with a pre-defined length and types for each index
// tuples are greate because they allow each element in the array to be a known type of
// value
// to define a tuple, specify the type of each element in the array

// example

// define our tuple
let ourTuple: [string, number, boolean];

// initialize it
ourTuple = ["hello", 1, true];

// as you can see wa have a number, boolean and string in our tuple. but what happens if we
// try to set them to the wrong type?

// example

// define our tuple
let ourTuple2: [string, number, boolean];

// initialize it
// ourTuple2 = ["hello", true, 1]; // error: Type 'true' is not assignable to type 'number'

// even though we have a boolean, string and number in our tuple, we get an error because
// we tried to set the boolean to a number

// readonly tuple
// a good practice is to make your tuple readonly
// tuples only have strongly defined type sfor the initial values

// example

// define our tuple
let ourTuple3: [string, number, boolean];

// initialize it
ourTuple3 = ["hello", 1, true]; // error: Cannot assign to 'ourTuple3' because it is a constant

// we have no type safety in our tuple for indexes 3+
ourTuple3.push("world"); // works
console.log(ourTuple3);

// you see the new valueTuples only have strongly defined type for the initial values

// example

// define our readonly tuple
const ourReadonlyTuple: readonly [string, number, boolean] = ["hello", 1, true];
// throws error as it is readonly
// ourReadonlyTuple.push("world"); // error: Property 'push' does not exist on type 'readonly [string, number, boolean]'

// named tuples
// named tuples allow us to provide context for our values at each index

// example
const graph: [x: number, y: number] = [10, 20];

// named tuples provide more context for what our index values represent

// destructuring tuples
// since tuples are arrays we can also destructure them
// example
const graph1: [number, number] = [10, 20];
const [x, y] = graph1;