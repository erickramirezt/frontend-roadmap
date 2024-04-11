// js errors

// throw, and try ... catch ... finally
// the try statement defines a code block to run (to try)
// the catch statement defines a code block to handle any error
// the finally statement defines a code block to run regardless of the result
// the throw statement defines a custom error

// errors will happen!
// when executing js code, different errors can occur
// errors can be coding errors made by the programmer, errors due to wrong input, and 
// other unforeseeable things

// example
// in this example
// we missplied alert as adddlert to deliberately produce an error

try {
    adddlert("Welcome guest!");
} catch (error) {
    document.getElementById("demo").innerHTML = error.message;
}

// js catches adddlert as an error, and executes the catch code to handle it

// js try and catch
// the try statement allows you to define block of code to be tested for errors while it is
// being executed
// the catch statement allows you to define a block of code to be executed, if an error
// occurs in the try block
// the js statements try and catch come in pairs

try {
    // block of code to try
} catch (err) {
    // block of code to handle errors
}

// js throw errors
// when an error occurs, js will normally stop, and generate an error message
// the technical term for this is js will throw an exception (throw an error)

// js will actually create an error object with two properties: name and message

// the throw statement 
// the throw statement allows you to create a custom error
// technically you can throw an exception (throw an error)
// the exception can be a js string, a number, a boolean or an object

throw "too big"; // throw a text
throw 500; // throw a number

// if you try throw together with try and catch, you can control program flow and generate
// custom error messages

// input validation example
// this example examines input. if the value is wrong, an exception (err) is thrown
// the exception (err) is caught by the catch statement and a custom error message is
// displayed

function myFunction() {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;

    try {
        if (x.trim() == "") throw "empty";
        if (isNaN(x)) throw "not a number";
        x = Number(x);
        if (x < 5) throw "too low";
        if (x > 10) throw "too high";
    } catch (err) {
        message.innerHTML = "input is " + err;
    }
}

// the finally statement
// the finally statement lets you execute code, after try and catch, regardless of the 
// result

// syntax
try {
    // block of code to try
} catch (err) {
    // block of code to handle errors
} finally {
    // block of code to be executed regardless of the try / catch result
}

// example
function myFunction() {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;

    try {
        if (x == "") throw "is empty";
        if (isNaN(x)) throw "is not a number";
        x = Number(x);
        if (x > 10) throw "is too high";
        if (x < 5) throw "is too low";
    } catch (err) {
        message.innerHTML = "error: " + err + ".";
    } finally {
        document.getElementById("demo").value = "";
    }
}

// the error object
// js has a built in error object that provides error information when an error occurs
// the error object provides two useful properties: name and message

// error object properties

// property description
// name     sets or returns an error name
// message  sets or returns an error message (a string)

// error name values
// six different values can be returned by the error name property

// value         description
// EvalError     an error has occurred in the eval() function
// RangeError    a number "out of range" has occurred
// ReferenceError    an illegal reference has occurred
// SyntaxError   a syntax error has occurred
// TypeError     a type error has occurred
// URIError      an error in encodeURI() has occurred

// the six different values are described below

// eval error
// an evalerror indicates an error in the eval() function

// newer versions of js do not throw evalerror. use syntaxerror instead

// range error
// a rangeerror is thrown if you use a number that is outside the range of legal values
// for example: you cannot set the number of digits of a number to 500

// example
let num = 1;

try {
    num.toPrecision(500); // a number cannot have 500 digits
} catch (err) {
    console.log(err);
}

// reference error
// a referenceerror is thrown if you use (reference) a variable that has not been declared

// example

let x = 5;

try {
    x = y + 1; // y cannot be referenced (used)
} catch (err) {
    console.log(err);
}

// syntax error
// a syntaxerror is thrown if you try to evaluate code with a syntax error

// example

try {
    eval("alert('hello)"); // missing ' will produce an error
} catch (err) {
    console.log(err);
}

// type error
// a typeerror is thrown if you use a value that is outside the range of expected types

// example

num = 1
try {
    num.toUpperCase(); // you cannot convert a number to upper case
} catch (error) {
    document.getElementById("demo").innerHTML = error.message;
}

// uri error
// a urierror is thrown if you use illegal characters in a uri function

// example
try {
    decodeURI("%%%"); // you cannot uri decode percent signs
} catch (error) {
    console.log(error);
}

// non standard error object properties

// mozilla and microsoft defines some non standard error object properties
// fileName (Mozilla)
// lineNumber (Mozilla)
// columnNumber (Mozilla)
// stack (Mozilla)
// description (Microsoft)
// number (Microsoft)
// do not use these properties in public web sites. they will not work in all browsers
