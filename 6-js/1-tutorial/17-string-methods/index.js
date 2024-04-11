// js string methods

// string length
// string slice
// string substring
// string substr
// string replace
// string replaceAll
// string toUpperCase
// string toLowerCase
// string concat
// string trim
// string trimStart
// string trimEnd
// string padStart
// string padEnd
// string charAt
// string charCodeAt
// string split

// js string length
// the length property returns the length of a string

// example
const txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const length = txt.length;

// extracting string parts
// there are 3 methods for extracting a part of a string
// slice(start, end)
// substring(start, end)
// substr(start, length)

// js string slice
// slice() extracts a part of a string and returns the extracted part in a new string
// the method takes 2 parameters: the start position, and the end position (end not 
// included)

// example
// slice out a portion of a string from position 7 to position 12
let text = "apple, banana, kiwi";
let part = text.slice(7, 13);

// note
// js counts positions from 0
// first position is 0, second is 1, and so on

// examples
// if you omit the second parameter, the method will slice out the rest of the string
text = "apple, banana, kiwi";
part = text.slice(7);

// if a parameter is negative, the position is counted from the end of the string
text = "apple, banana, kiwi";
part = text.slice(-12);

// this example slices out a portion of a string from position -12 to position -6
text = "apple, banana, kiwi";
part = text.slice(-12, -6);

// js string substring
// substring() is similar to slice()
// the difference is that start and end values less than 0 are treated as 0

// example
text = "apple, banana, kiwi";
part = text.substring(7, 13);

// if you omit the second parameter, substring() will slice out the rest of the string

// js string substr
// substr() is similar to slice()
// the difference is that the second parameter specifies the length of the extracted part
// example is that the second parameter specifies the length of the extracted part

// example
let str = "apple, banana, kiwi";
let res = str.substr(7, 6);

// if you omit the second parameter, substr() will slice out the rest of the string
str = "apple, banana, kiwi";
res = str.substr(7);

// if the first parameter is negative, the position counts from the end of the string
str = "apple, banana, kiwi";
res = str.substr(-4);

// replacing string content
// the replace() method replaces a specified value with another value in a string

// example
str = "please visit microsoft!";
let n = str.replace("microsoft", "w3schools");

// note 
// the replace method does not change the string it is called on
// the replace method returns a new string
// the replace method replaces only the first match
// if you want to replace all matches, use a regular expression with a /g flag set. see
// examples below

// by default, the replace() method replaces only the first match

// example
text = "please visit microsoft and microsoft!";
let newText = text.replace("microsoft", "w3schools");

// by default, the replace() method is case sensitive. writing MICROSOFT (with upper-case)
// will not work

// example
text = "please visit microsoft!";
newText = text.replace("MICROSOFT", "w3schools");

// to replace case insensitive, use a regular expression with an /i flag (insensitive)

// example
text = "please visit microsoft!";
newText = text.replace(/MICROSOFT/i, "w3schools");

// note
// regular expressions are written without quotes

// to replace all matches, use a regular expression with a /g flag (global match)

// example
// let text = "please visit microsoft and microsoft!";
newText = text.replace(/microsoft/g, "w3schools");

// js string replaceall
// in 2021, js introduced the replaceAll() method

// example
text = "please visit microsoft and microsoft!";
newText = text.replaceAll("microsoft", "w3schools");

// the replaceAll() method allows you to specify a regular expression instead of a string
// to be replaced
// if the parameter is a regular expression, the global flag (g) must be set, otherwise
// a typeerror is thrown

// example
text = "please visit microsoft and microsoft!";
newText = text.replaceAll(/microsoft/g, "w3schools");

// note
// replaceall is an es2021 feature
// replaceall is not supported in ie

// converting to upper and lower case
// a string is converted to upper case with toUpperCase()
// a string is converted to lower case with toLowerCase()

// js string toUpperCase

// example
text = "hello world!";
let upper = text.toUpperCase();

// js string toLowerCase

// example
text = "hello world!";
let lower = text.toLowerCase();

// js string concat
// the concat() joins two or more strings

// example
let text1 = "hello";
let text2 = "world";
let text3 = text1.concat(" ", text2);

// the concat() method can be used instead of the plus operator. these two lines do the 
// same

// example
text = "hello" + " " + "world!";
text = "hello".concat(" ", "world!");

// note
// all string methods return a new string. they don't modify the original string
// formally said:
// strings are immutable: strings cannot be changed, only replaced

// js string trim
// the trim() method removes whitespace from both sides of a string 

// example
text = " hello world! ";
let trimmed = text.trim();

// js string trimstart
// es2019 added the string method trimstart() to js
// the trimstart method works like trim, but removes whitespace only from the start of a
// string

// example
text = " hello world! ";
trimmed = text.trimStart();

// js string trimStart() is supported in all modern browsers since 2020

// js string trimend
// es2019 added the string method trimend() to js
// the trimend method works like trim, but removes whitespace only from the end of a
// string

// example
text = " hello world! ";
trimmed = text.trimEnd();

// js string trimEnd() is supported in all modern browsers since 2020

// js string padstart
// es2017 added two new string methods to js: padstart and padend to support padding at
// the beginning and at the end of a string

// js string padstart
// the padstart method pads a string from the start
// it pads a string with another string (multiple times) until it reaches a given length

// example
// pad a string with 0 until reaches the length of 4
text = "5";
let padStart = text.padStart(4, 0);

// pad a string with * until reaches the length of 4
text = "5";
padStart = text.padStart(4, "*");

// note
// the padstart method is a string method
// to pad a number, convert the number to a string first

// example
let num = 5;
text = num.toString()
let padded = text.padStart(4, 0);

// browser support
// padstart is an es2017 feature
// it is supported in all modern browsers

// js string padend
// the padend method pads a string from the end
// it pads a string with another string (multiple times) until it reaches a given length

// examples
text = "5";
let padEnd = text.padEnd(4, 0);

text = "5";
padEnd = text.padEnd(4, "*");

// note
// the padend method is a string method
// to pad a number, convert the number to a string first

// example
num = 5;
text = num.toString();
padded = text.padEnd(4, 0);

// browser support
// padend is an es2017 feature
// it is supported in all modern browsers

// extracting string characters
// there are 3 methods for extracting string characters
// charAt(position)
// charCodeAt(position)
// property access [ ]

// js string charAt
// the charAt() method returns the character at a specified index (position) in a string

// example
text = "hello";
let char = text.charAt(0);

// js string charCodeAt
// the charCodeAt() method returns the unicode of the character at a specified index in a
// string
// the method returns a unicode number between 0 and 65535

// example
text = "hello";
let charCode = text.charCodeAt(0);

// property access
// ECMAScript 5 (2009) allows property access [ ] on strings

// example
text = "hello";
char = text[0];

// note
// property access might be a little unpredictable
// it makes strings look like arrays (but they are not)
// if no character is found, [ ] returns undefined, while charAt() returns an empty string
// it is read only. str[0] = "a" gives no error (but does not work!)

// example
text = "hello";
text[0] = "a";

// converting a string to an array

// if you not to work with string as an array, you can convert it to an array

// js string split
// a string can be converted to an array with the split() method

// example
text.split(","); // split on commas
text.split(" "); // split on spaces
text.split("|"); // split on pipe

// if the separator is omitted, the returned array will contain the whole string in index
// [0]
// if the separator is "", the returned array will be an array of single characters

// example
text.split("");

