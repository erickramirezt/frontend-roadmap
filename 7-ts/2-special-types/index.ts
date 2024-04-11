// ts special types

// ts has special types that may not refer to any specific type of data

// type: any
// any is a type that disables type checking and effectively allows all types to be used
// the example below does not use any and will throw an error

// example without any
let u = true;
// u = "string"; // error: type 'string' is not assignable to type 'boolean'
// Math.round(u); // error: Argument of type 'boolean' is not assignable to parameter of
// type 'number'

// setting any to the special type any disables type checking

// example with any
let v: any = true;
v = "string";
Math.round(v);

// any can be useful way to get past errors since it disables type checking, but ts will
// not be able to provide type safety, and tools which rely on type data, such as auto
// completion, will not work. remember, it should be avoided at any cost

// type unknown
// unknown is a similarm but safer alternative to any
// ts will prevent unknown from being used, as shown in the below example

let w: unknown = 1;
w = "string";
w = {
  runANonExistentMethod: () => console.log("hello"),
} as { runANonExistentMethod: () => void };
// how can avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // error: Object is of type 'unknown'
if (typeof w === "object" && w !== null) {
  (w as { runANonExistentMethod: () => void }).runANonExistentMethod();
}
// although we have to cast multiple times we can do a check in the if to secure our type
// and have a safer casting

// compare the example above with the example below, which uses any

// unknown is best used when you don't know the type of data being typed. to add a type 
// later, you'll need to cast it
// casting is when we use the as keyword to tell ts what type we want to use

// type: never
// never effectively throws an error whenever it is used

// let a: never = true; // error: Type 'true' is not assignable to type 'never'

// never is rarely used, especially in the context of variables, but it is useful for
// functions

// type: undefined and null
// undefined and null are types that represent undefined and null values respectively

let b: undefined = undefined;
let c: null = null;

// these types don't have much use unless strictNullChecks is enabled in tsconfig.json
