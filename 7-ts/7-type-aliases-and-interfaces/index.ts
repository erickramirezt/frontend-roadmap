// ts type aliases and interfaces

// ts allows types to be defined separately from the variables that use them
// aliases and interfaces allows types to be easily shared between different variables
// and objects

// type aliases
// type aliases allow defining type swith a custom name (an alias)
// type aliases can be used for primitive like string or more complex types such as objects
// and arrays

// example
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
  year: CarYear;
  type: CarType;
  model: CarModel;
};

const carYear: CarYear = 2010;
const carType: CarType = "Toyota";
const carModel: CarModel = "Camry";
const car2: Car = {
  year: carYear,
  type: carType,
  model: carModel,
};

// interfaces
// interfaces are similar to type aliases, but are more commonly used for objects types

// example
interface Rectangle {
    width: number;
    height: number;
}

const rectangle: Rectangle = {
    width: 10,
    height: 20,
}

// extending interfaces
// interfaces can extend each other's direction

// extending an interface means you are creating a new interface with the same properties
// as the original, plus something new

// example
interface Rectangle {
    width: number;
    height: number;
}

interface ColoredRectangle extends Rectangle {
    color: string;
}

const coloredRectangle: ColoredRectangle = {
    width: 10,
    height: 20,
    color: "red",
}