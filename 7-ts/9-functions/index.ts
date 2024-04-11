// ts functions

// ts has a specific syntax for typing function parameters and return values

// return type
// the type of the value returned by the function can be explicitly defined

// example
// the : number here specifies the return type
function getTime(): number {
  return new Date().getTime();
}

// if no return type is defined, ts will attempt to infer it through the types of the
// variables or expressions returned

// void return type
// the type void can be used to indicate a function doesn't return any value

// example
function printHello(): void {
  console.log("Hello");
}

// parameters
// function parameters are typed with a similar syntax as variable declarations

// example
function multiply(x: number, y: number): number {
  return x * y;
}

// if no parameter type is defined, ts will default to using any, unless addtional type
// information is available as shown in the default parameters and type alias sections
// below

// optional parameters
// by default ts will assume all parameters are required, but they can be explicitly
// marked as optional

// example
// the ? operator here marks parameter c as optional
function add(a: number, b: number, c?: number): number {
  return a + b + (c || 0);
}


// default parameters
// for parameters with default values, the default value goe safter the type annotation

// example
function add2(a: number, b: number, c: number = 0): number {
    return a + b + c;
}

// ts can also infer the type of a parameter with a default value

// named parameters
// typing named parameters follows the same pattern as typing normal parameters

// example
function add3({ a, b, c }: { a: number; b: number; c: number }): number {
    return a + b + c;
}

// rest parameters
// rest parameters can be typed like normal parameters, but the type must be an array as
// rest parameters are always arrays

// example
function add4(...rest: number[]): number {
    return rest.reduce((acc, val) => acc + val, 0);
}

// type alias
// function types can be specified separately from functions with type aliases

// example
type Negate = (value: number) => number;

// in this function, the parameter value automatically gets assigned the type number
// from the type negate
const negate: Negate = value => -value;