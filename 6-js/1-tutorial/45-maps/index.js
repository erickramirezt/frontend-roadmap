// js maps

// a map holds key-value pairs where the keys can be any datatype
// a map remembers the original insertion order of the keys

// essential map methods

// method	                                description
// new Map()	                            creates a new map
// set()	                                adds a new element to the map
// get()	                                returns the value of an element
// delete()	                                removes an element from the map
// has()	                                returns true if a value exists in the map
// forEach()	                            executes a function for each element
// entries()	                            returns an iterator with the [key, value] pairs

// property                                 description
// size	                                    returns the number of elements in the map

// how to create a map
// you can create a js map by:
// passing an array to new map()
// create a new map and use set() 

// the new map() method
// you can create a map by passing an array to the new map() constructor

// example
// create a map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

// the set method
// you can add elements to a map with the set method

// example
// create a map
const fruits1 = new Map();

// set map values
fruits1.set("apples", 500);
fruits1.set("bananas", 300);
fruits1.set("oranges", 200);

// the set method can also be used to change existing map values

// example
fruits1.set("apples", 600);

// the get method
// the get method gets the value of a key in a map

// example
fruits1.get("apples"); // returns 600

// the size property
// the size property returns the number of elements in a map

// example
fruits1.size; // returns 3

// the delete method
// the delete method removes an element from a map

// example
fruits1.delete("apples");

// the has method
// the has method returns true if a value exists in a map

// example
fruits1.has("apples"); // returns false

// js objects vs maps
// differences between js objects and maps

//                      object	                                map
// iterable	            not directly iterable	                directly iterable
// size                 no size property	                    has size property
// key type	            string, symbol	                        any
// key order	        no order	                            insertion order
// defaults             default keys	                        do not have default keys and values

// the forEach method
// the forEach method executes a function for each element in a map

// example
// list all entries
let text = "";
fruits.forEach(function(value, key) {
    text += key + " = " + value;
});


// the entries method
// the entries method returns an iterator with the [key, value] pairs in a map

// example
// list all entries
let text1 = "";
for (let entry of fruits.entries()) {
    text1 += entry[0] + " = " + entry[1];
}

// browser support
// js maps are supported in all browsers, except internet explorer