// ts utility types

// ts comes with a large number of types that can help with some common type manipulation,
// usually reffered to as utility types

// partial
// partial changes all properties of an interface to optional

// example
interface Point {
  x: number;
  y: number;
}

let pointPart: Partial<Point> = {};
pointPart.x = 10;

// required
// required changes all optional properties of an interface to required

// example
interface Car {
  make: string;
  model: string;
  mileage?: number;
}

let myCar: Required<Car> = {
  make: "Honda",
  model: "Accord",
  mileage: 100000,
};

// record
// reocord is a shortcut to defining an boject type with a specific key type and value
// type

// example
const nameAgeMap: Record<string, number> = {
  John: 20,
  Jane: 25,
};

// record<string, number> is equivalent to { [key: string]: number }

// omit
// omit removes a property from an interface

// example
interface Person {
  name: string;
  age: number;
  location?: string;
}

const bob: Omit<Person, "age" | "location"> = {
  name: "Bob",
};

// pick
// pick removes all but the specified keys from an object type

// example
interface Person1 {
  name1: string;
  age: number;
  location?: string;
}

const bob1: Pick<Person1, "name1"> = {
  name1: "Bob",
};

// exclude
// exclude removes types from a union

// example
type Primitive = string | number | boolean;
// const value2: Exclude<Primitive, boolean> = true; // error

// return type
type pointgenerator = () => { x: number; y: number };
const point: ReturnType<pointgenerator> = { x: 10, y: 20 };

// parameters
// parameters extracts the parameter types of a function type as an array

// example
type PointPrinter = (p: { x: number; y: number }) => void;
const point1: Parameters<PointPrinter>[0] = { x: 10, y: 20 };

// readonly
// readonly is used to create a new type where all properties are readonly, meaning they
// cannot be modified once assigned a value

// keep in mind typescript will prevent this at compile time, but in theory since it is
// compiled dowm to js you can still override a readonly property

// example
interface Person2 {
    name1: string;
    age: number;
}

const person4: Readonly<Person2> = {
    name1: "John",
    age: 20
}

// person4.name1 = "Jane"; // error

