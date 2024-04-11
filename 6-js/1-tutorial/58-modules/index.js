// js modules

// export module with functions or variables can be stored in any external file
// there are two types of exports: named exports and default exports

// named exports
// let us create a file named index.js, and fill it with the things we want to export
// you can create named exports two ways. in-line individually, or all at once at the the
// bottom of the file

// in-line individually
export const name = "John";
export const age = 25;

// all at once at the bottom of the file
const name = "John";
const age = 25;
export { name, age };

// default exports
// let us create another file, named message.js, and use it for demonstrating default export
// you can only have one default export in a file

// example
const message = () => {
    const name = "Jesse";
    const age = 40;
    return `${name} is ${age} years old.`;
}

export default message;

// import
// you can import modules into a file in two ways, based on if they are named exports or 
// default exports
// named exports are constructed using curly braces. default exports are not

// import from named exports
// import named exports from the file index.js
import { name, age } from "./index.js";

// import from default exports
// import default exports from the file message.js
import message from "./message.js";

// note
// modules only work with the https protocol
// a web-page opened via the file:// protocol cannot use imports or exports