// ts null and undefined

// ts has a powerfull system to deal with null or undefined values

// by default null and underfined handling is disabled, and can be enabled by setting
// strictNullChecks to true
// the rest of this section assumes strictNullChecks is enabled

// types
// null and undefined are primitive types and can be used like other types, such as string

// example
let value2: string | null | undefined = null;
value2 = "hello";
value2 = undefined;

// when strictNullChecks is enabled, null and undefined are only assignable to themselves
// and any, and not to any other type

// optional chaining
// optional chaining is a js feature that works well with ts null handling. it allows
// accessing properties on an object, that may or may not exist, with a compact syntax.
// it can be with the ?. operator when accessing a property

// example
interface House {
  sqft: number;
  yard?: {
    sqft: number;
  };
}

function printYardSize(house: House) {
  const yard = house.yard?.sqft; // yard is number | undefined
  if (yard === undefined) {
    console.log("No yard");
  } else {
    console.log(`Yard size: ${yard}`);
  }
}

let home: House = {
  sqft: 1000,
};

printYardSize(home); // No yard

// nullish coalescence
// nullish coalescence is another js feature that also works well with ts null handling.
// it allows writing expressions that have a fallback specifically when dealing with null
// or undefined. this is useful when other falsy values can occur in the expression but are
// still valid. it can be used with the ?? operator in an expression, similar to using the
// && operator

// example
function printMileage(mileage: number | null | undefined) {
  console.log(`Mileage: ${mileage ?? "unknown"}`);
}

printMileage(100); // Mileage: 100
printMileage(null); // Mileage: unknown

// null assertion
// ts inference system isn't perfect, there are times when it makes sense to ignore a
// value's possibility of being null or undefined. an easy way to do this is to use casting
// but ts also provides the ! operator as a convenient shorthand

// example
function getValue(): string | undefined {
  return "hello";
}

let value4 = getValue()!; // value is string
console.log(`value length ${value4!.length}`);

// just like casting, this can be unsafe and should be used with care

// array bound handling
// even with strictNullChecks enabled, by default ts will assume array access will never
// return undefined. 
// the config noUncheckedIndexedAccess can be enabled to change this behavior

// example
let array: number[] = [1, 2, 3];
let value5 = array[0]; // value is number | undefined