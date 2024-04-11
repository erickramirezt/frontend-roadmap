// ts casting

// there are times when working with types where it's necessary to override the type of
// of a variable, such as when incorrect type are provided by a library
// casting is the process of overriding a type

// casting with as
// a straightforward way to cast a variable is using the as keyword, which will directly
// change the type of the given variable

// example
let x: unknown = "Hello World";
console.log((x as string).toUpperCase());

// casting doesn't change the type of the data within the variable, for example the
// following code will not work as expected since the variable x is still holds a number

let x1: unknown = 42;
console.log((x1 as string).length); // undefined

// ts will still attempt to typecheck casts to prevent casts that don't seem correct, for
// example the following will throw a type error since ts knows casting a string to a
// number doesn't makes sense without converting the data

// console.log((4 as string).length); // error

// the force casting section below covers how to override this

// casting with <>
// using <> works the same as casting with as

// example
let x2: unknown = "Hello World";
console.log((<string>x).length);

// force casting
// to override type errors that ts may throw when casting, first cast to unknown, then
// cast to the desired type

// example
let x3 = "hello";
// console.log(((x3 as unknown) as number).length); // undefined

