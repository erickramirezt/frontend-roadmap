// ts union types

// union types are used when a value can bo more than a single type
// such a when property whould be string or number

// union | or
// using the | we are saying our parameter is a string or number

// example
function printStatusCodes(code: number | string) {
  console.log(`My status code is ${code}`);
}

printStatusCodes(200);
printStatusCodes("200");

// union type errors
// note: you need to knoe what your type is when union types are being used to avoid type
// errors

// example
function printStatusCodes2(code: number | string) {
//   console.log(`My status code is ${code.toUpperCase()}`); 
  // error: Property 'toUpperCase' does not exist on type 'string | number'. Property 'toUpperCase' does not exist on type 'number'
}

// in our example we are having an issue invoking toUpperCase() as its a string method and
// number doesn't have to access to it
