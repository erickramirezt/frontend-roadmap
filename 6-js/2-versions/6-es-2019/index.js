// es 2019

// new features in es 2019
// string trimstart() and trimend()
// object.fromentries()
// optional catch binding
// array flat() and flatmap()
// revised array.sort()
// revised json.stringify()
// separator symbols allowed in string litterals
// revised function.tostring()

// warning
// these features are relatively new and not yet supported by all browsers

// js string trimstart()
// es 2019 added the string method trimstart() to javascript
// the trimstart() method removes whitespace from the beginning of a string

// example
var text1 = "   hello world!   ";
var text2 = text1.trimStart();

// js string trimStart() is supported in all modern browsers since march 2019

// js string trimend()
// es 2019 added the string method trimend() to javascript
// the trimend() method removes whitespace from the end of a string

// example
var text1 = "   hello world!   ";
var text2 = text1.trimEnd();

// js string trimEnd() is supported in all modern browsers since march 2019

// js object.fromentries()
// es 2019 added the object.fromentries() method to javascript
// the object.fromentries() method transforms a list of key-value pairs into an object

// example
const fruits = [
    ['apple', 28],
    ['orange', 17],
    ['pear', 54]
]

const myObj = Object.fromEntries(fruits);

// js object.fromentries() is supported in all modern browsers since march 2019

// js optional catch binding
// es 2019 added the optional catch binding to javascript

// example
// before 2019
try {

} catch (error) {

}

// after 2019
try {

} catch {

}

// js optional catch binding is supported in all modern browsers since march 2019

// js array flat()
// es 2019 added the array.flat() method to javascript
// the array.flat() method creates a new array with all sub-array elements concatenated
// into it recursively up to the specified depth

// example
var myArray = [1, 2, [3, 4]];
var newArray = myArray.flat();

// js array.flat() is supported in all modern browsers since march 2019

// js array flatmap()
// es 2019 added the array.flatmap() method to javascript
// the array.flatmap() method first maps each element using a mapping function, then
// flattens the result into a new array

// example
var myArray = [1, 2, 3, 4];
var newArray = myArray.flatMap(x => [x * 2]);

// stable array sort
// es 2019 added a stable sorting algorithm to the array.sort() method
// the stable sorting algorithm maintains the order of elements that are equal

// example
var myArr = [
    { name: "X00", price: 100 },
    { name: "X10", price: 10 },
    { name: "X30", price: 30 },
    { name: "X20", price: 20 }
]

myArr.sort((a, b) => a.price - b.price);

// in the example above, the order of the elements with the same price will remain the
// same after sorting

// stable json.stringify()
// es 2019 added a stable sorting algorithm to the json.stringify() method
// the stable sorting algorithm maintains the order of object keys

// example
var text = JSON.stringify("\u26D4");

// before es2019, using json.stringify() on unicode characters would return the character
// code instead of the character itself
// after es2019, the character itself is returned

// js separator symbols allowed in string litterals
// lines separators and paragraph separatorsymbols (\u2028 and \u2029) are now allowed in 
// string literals
// before 2019, these were treated as line terminators and resulted in error exceptions

// example
// this is valid in es2019
var text = "\u2028";

// note
// now, js and json have equal rules
// before es2019
// text = json.parse("\u2028"); // error
// after es2019
// text = json.parse("\u2028"); // valid

// revised function tostring()
// es2019 revised the function.tostring() method
// the tostring() method returns a string representing the source code of a function
// from 2019, tostring must return the source code of the function including comments,
// spaces and syntax details
// before 2019, different browsers returned different variants of the function source 
// code

// example
function myFunction(a, b) {
    return a * b;
}