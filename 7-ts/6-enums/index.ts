// ts enums

// an enum is a special "class" that represents a group of constants (unchangeable variables)
// enums come in two flavors string and numeric. lets start with numeric

// numeric enums - default
// by default, enums will initialize the first value to 0 and add 1 to each additional value

// example
enum CardinalDirections {
    North,
    East,
    South,
    West,
}

let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
// throws error as North is not a valid enum
// currentDirection = "North"; // error: Type '"North"' is not assignable to type 'CardinalDirections'

// numeric enums - initialized
// you can set the value of the first numeric enum and have it auto increment from there

// example
enum CardinalDirections2 {
    North = 1,
    East,
    South,
    West,
}
// logs 1
console.log(CardinalDirections2.North);
// logs 2
console.log(CardinalDirections2.East);

// numeric enums - fully initialized
// you can assign unique number values for each e value. then the values will not 
// incremented automatically

// example
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400,
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);

// string enums
// enums can also contain strings. this is more common than numeric enums, because of their
// readability and intent

// example
enum CardinalDirections3 {
    North = "NORTH",
    East = "EAST",
    South = "SOUTH",
    West = "WEST",
}
// logs NORTH
console.log(CardinalDirections3.North);
// logs EAST
console.log(CardinalDirections3.East);

// technically you can mix string and numeric enums, but it is not recommended