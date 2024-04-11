// js strings

// js strings are for storing and manipulating text

// a js string is zero or more characters written inside quotes

// example
let text = "John Doe";

// you can use single or double quotes

// example
let carName1 = "Volvo XC60";
let carName2 = 'Volvo XC60';

// you can use quotes inside a string as long as they don't match the quotes surrounding 
// the string

// example
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';

// string length
// to find the length of a string, use the built-in length property

// example
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let sln = txt.length;

// escape character
// because strings must be written within quotes, js will misunderstand this string
// let txt = "We are the so-called "Vikings" from the north.";

// the string will be chopped to "We are the so-called "
// the solution to avoid this problem is to use the backslash escape character
// the backslash (\) escape character turns special characters into string characters

// code   result    description
// \'     '         single quote
// \"     "         double quote
// \\     \         backslash

// the sequence \" inserts a double quote in a string

// example
text = "We are the so-called \"Vikings\" from the north.";

// the sequence \' inserts a single quote in a string

// example
text = 'It\'s alright.';

// the sequence \\ inserts a backslash in a string

// example
text = "The character \\ is called backslash.";

// six other escape sequences are valid in js

// code   result
// \b     backspace
// \f     form feed
// \n     new line
// \r     carriage return
// \t     horizontal tabulator
// \v     vertical tabulator

// the 6 escape characters above were originally designed to control typewriters, 
// teletypes, and fax machines. they do not make any sense in html.

// breaking long code lines
// for best readability, programmers often like to avoid code lines longer than 80 
// characters
// if a js statement does not fit on one line, the best place to break it is after an
// operator

// example
document.getElementById("demo").innerHTML =
    "Hello Dolly!";

// you can also break up a code line within a text string with a single backslash

// example
document.getElementById("demo").innerHTML = "Hello \
Dolly!";

// the \ method is not the preferred method. it might not have universal support. some
// browsers do not allow spaces behind the \ character

// a safer way to break up a string, is to use string addition

// example
document.getElementById("demo").innerHTML = "Hello " +
    "Dolly!";

// you cannot break up a code line with a backslash

// example
// document.getElementById("demo").innerHTML = \
// "Hello Dolly!";

// js strings as objects
// normally, js strings are primitive values, created from literals

let x = "John";

// but strings can also be defined as objects with the keyword new

let y = new String("John");

// do not create strings objects
// the new keyword complicates the code and slows down execution speed
// strings objects can produce unexpected results

// when using the == operator, equal strings are equal

// when using the === operator, equal strings are not equal

// comparing two js objects always return false