// ts object types

// ts has a specific syntax for typing objects

// example
const car: { type: string; model: string; year: number } = {
  type: "car",
  model: "Honda",
  year: 2010,
};

// type inference

const car1 = {
  type: "car",
};

car1.type = "truck"; // error: Cannot assign to 'type' because it is a read-only property
// car1.type = 2; // error: Type '2' is not assignable to type 'string'

// optional properties
// optional properties are properties that don't have to be defined in the object definition

// example without an optional property
// const car2: { type: string; model: string; year: number } = {
//     type: "car",
// } // error: Property 'model' is missing in type '{ type: string; }' but required in type '{ type: string; model: string; year: number; }'
// car2.model = "Honda";

// example with a optional property

const car3: { type: string; model?: string } = {
  type: "car",
};

car3.model = "Honda";

// index signatures
// index signatures can be used for objects without a defined list of properties

// example
const nameAgeMap: { [key: string]: number } = {};
nameAgeMap.Jack = 32;
// nameAgeMap.Jill = "Fifty"; // error: Type '"Fifty"' is not assignable to type 'number'

// index signatures like this one can also be expressed with utility types like 
// Record<string, number>