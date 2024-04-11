// js sets

// a js set is a collection of unique values
// each value can only occur once in a set

// essential set methods

// method	                                description
// new Set()	                            creates a new set
// add()	                                adds a new element to the set
// delete()	                                removes an element from the set
// has()	                                returns true if a value exists in the set
// clear()	                                removes all elements from the set
// size	                                    returns the number of elements in the set
// keys()	                                returns an iterator with the keys of the set
// values()	                                returns an iterator with the values of the set

// property                                 description
// size	                                    returns the number of elements in the set

// how to create a set
// you can create a js set by:
// passing an array to new set()
// create a new set and use add() to add values

// the new set() method
// pass an array to the new set() constructor

// example
// create a set
const letters = new Set(["a", "b", "c", "d"]);

// create a set and add values

// example
const letters1 = new Set();

// add values to the set
letters1.add("a");
letters1.add("b");
letters1.add("c");

// create a set and add variables

// example
// create a set
const letters2 = new Set();

// craete variables
const a = "a";
const b = "b";
const c = "c";

// add variables to the set
letters2.add(a);
letters2.add(b);
letters2.add(c);

// the add() method

// example
letters2.add("d");
letters2.add("e");

// if you add equal elements, only the first will be saved
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");

// the forEach() method
// the forEach() method invokes (calls) a function for each set element

// example
// create a set
const letters3 = new Set(["a", "b", "c", "d"]);

// list all elements
let text = "";
letters3.forEach(function (value) {
    text += value;
})

// the values() method
// the values() method returns a new iterator object containing all the values in a set

// example
letters3.values(); // returns an iterator object

// now you can use the iterator object to access the elements

// example
// list all elements
let text1 = "";
for (const x of letters3.values()) {
    text1 += x;
}