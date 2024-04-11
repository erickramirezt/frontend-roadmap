// js array methods

// array length
// array toString()
// array pop()
// array push()
// array shift()
// array unshift()
// array join()
// array delete()
// array concat()
// array flat()
// array splice()
// array slice()

// js array length
// the length property returns the length (size) of an array

// example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;

// js array toString()
// the js method toString() converts an array to a string of (comma separated) array 
// values

// example
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits1.toString();

// the join() method also joins all array elements into a string
// it behaves just like toString(), but in addition you can specify the separator

// example
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits2.join(" * ");

// popping and pushing
// when you work with arrays, it is easy to remove elements and add new elements
// this is what popping and pushing is
// popping items out of an array, or pushing items into an array

// js array pop()
// the pop() method removes the last element from an array

// example
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.pop();

// the pop() method returns the value that was "popped out"

// example
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits4.pop();

// js array push()
// the push() method adds a new element to an array (at the end)

// example
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
fruits5.push("Kiwi");

// the push() method returns the new array length

// example
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
let newLength = fruits6.push("Kiwi");

// shifting elements
// shifting is equivalent to popping, working on the first element instead of the last

// js array shift()
// the shift() method removes the first array element and "shifts" all other elements
// to a lower index

// example
const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
fruits7.shift();

// the shift() method returns the string that was "shifted out"

// example
const fruits8 = ["Banana", "Orange", "Apple", "Mango"];
let fruit1 = fruits8.shift();

// js array unshift()
// the unshift() method adds a new element to an array (at the beginning), and "unshifts"
// older elements

// example
const fruits9 = ["Banana", "Orange", "Apple", "Mango"];
fruits9.unshift("Lemon");

// the unshift() method returns the new array length

// example
const fruits10 = ["Banana", "Orange", "Apple", "Mango"];
let newLength1 = fruits10.unshift("Lemon");

// changing elements
// array elements are accessed using their index number

// array indexes start with 0
// [0] is the first array element
// [1] is the second array element
// [2] is the third array element

// example
const fruits11 = ["Banana", "Orange", "Apple", "Mango"];
fruits11[0] = "Kiwi";

// js array length
// the length property provides an easy way to append a new element to an array

// example
const fruits12 = ["Banana", "Orange", "Apple", "Mango"];
fruits12[fruits12.length] = "Kiwi";

// js array delete()

// warning
// array elements can be deleted using the js operator delete
// using delete leaves undefined holes in the array
// use pop() or shift() instead

// example
const fruits13 = ["Banana", "Orange", "Apple", "Mango"];
delete fruits13[0];

// merging (concatenating) arrays
// the concat() method creates a new array by merging (concatenating) existing arrays

// example (merging two arrays)
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

// the concat() method does not change the existing arrays, it always returns a new array

// the concat() method can take any number of array arguments

// example (concatenating three arrays)
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren1 = arr1.concat(arr2, arr3);

// the concat() method can also take strings as arguments

// example (concatenating arrays and strings)
const arr4 = ["Emil", "Tobias", "Linus"];
const myChildren2 = arr4.concat("Peter");

// flattening an array
// flattening an array is the process of reducing the dimensionality of an array
// the flat() method creates a new array with sub-array elements concatenated to a
// specified depth

// example
const myArr = [[1, 2], [3, 4], [5, 6]];
const newArr = myArr.flat();

// browser support
// js array flat() method is supported in all modern browsers since january 2020

// splicing and slicing arrays
// the splice() method adds new items to an array
// the slice() method slices out a piece of an array

// js array splice()
// the splice() method can be used to add new items to an array

// example
const fruits14 = ["Banana", "Orange", "Apple", "Mango"];
fruits14.splice(2, 0, "Lemon", "Kiwi");

// the first parameter (2) defines the position where new elements should be added 
// (spliced in)
// the second parameter (0) defines how many elements should be removed
// the rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added
// the splice() method returns an array with the deleted items

// example
const fruits15 = ["Banana", "Orange", "Apple", "Mango"];
fruits15.splice(2, 2, "Lemon", "Kiwi");

// using splice() to remove elements
// with clever parameter setting, you can use splice() to remove elements without leaving
// "holes" in the array

// example
const fruits16 = ["Banana", "Orange", "Apple", "Mango"];
fruits16.splice(0, 1);

// the first parameter (0) defines the position where new elements should be added
// (spliced in)
// the second parameter (1) defines how many elements should be removed
// the rest of the parameters are omitted, no new elements will be added

// js array slice()
// the slice() method slices out a piece of an array into a new array
// this example slices out a part of an array starting from array element 1 ("orange")

// example
const fruits17 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits17.slice(1);

// note
// the slice() method creates a new array
// the slice() method does not remove any elements from the source array

// this example slices out a part of an array starting from array element 3 ("Apple")

// example
const fruits18 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus1 = fruits18.slice(3);

// the slice() method can take two arguments like slice(1, 3)
// the method then selects elements from the start argument, and up to (but not including)
// the end argument

// example
const fruits19 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus2 = fruits19.slice(1, 3);

// if the end argument is omitted, like in the first examples, the slice() method slices
// out the rest of the array

// example
const fruits20 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus3 = fruits20.slice(2);

// automatic toString()
// javascript automatically converts an array to a comma separated string when a primitive
// value is expected
// this is always the case when you try to output an array
// these two examples will produce the same result

// example
const fruits21 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits21.toString();

// example
const fruits22 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits22;

// note
// all js objects have a toString() method

// finding max and min values in an array
// there are no built-in functions for finding the highest or lowest value in a js array
// you will learn how you solve this problem in the next chapter of this tutorial