// js sets

// a js set is a collection of unique values
// each value can only occur once in a set
// a set can hold any value of any data type

// set methods
// method: description
// new Set(): creates a new set
// add(value): adds a new element to the set
// delete(value): removes an element from a set
// has(value): returns true if a value exists in the set. otherwise false
// clear(): removes all elements from the set
// forEach(): calls a function for each element in the set
// values(): returns an iterator with all the values in a set
// keys(): is the same as the values() method. this method exists for compatibility with
// maps
// entries(): returns an iterator object with the [value, value] pairs in the set

// properties
// size: returns the number of elements in the set

// how to create a set
// you can create a js set by
// passing an array to new set()
// create a new set and use the add() method to add values
// create a new set and use the add() method to add variables

// the new set() method
// pass an array to the new set() method to create a set from an array

// example
// create a set
const letters = new Set(['a', 'b', 'c', 'd'])

// create a set and add literal values

// example
// create a set
const letters1 = new Set()

// add values to the set
letters1.add('a')
letters1.add('b')
letters1.add('c')

// create a set and add variables

// example
// create a set
const letters2 = new Set()

// add values to the set
const a = 'a'
const b = 'b'
const c = 'c'

letters2.add(a)
letters2.add(b)
letters2.add(c)

// the add() method

// example
letters.add('d')
letters.add('e')

// if you add equal elements to the set, only the first element will be kept

// example
letters.add('a')
letters.add('a')

// the forEach() method
// the forEach() method calls a function once for each element in the set

// example
const letters3 = new Set(['a', 'b', 'c', 'd'])

let text = ''
letters3.forEach(function (element) {
  text += element
})

// the values() method
// the values() method returns an iterator object with the values in a set

// example
letters.values()

// now you can use the iterator object in a for ..of loop

// example
for (const x of letters.values()) {
  console.log(x)
}

// the keys() method
// a set has no keys
// keys() returns the same as values()
// this makesets compatible with maps

// example
letters.keys()

// the entries() method
// a set has no keys
// entries() returns an iterator object with the [value, value] pairs in a set
// this makes sets compatible with maps

// example
// create an iterator object
const iterator = letters.entries()

// lsit all entries
let text1 = ''
for (const x of iterator) {
  text1 += x
}

// set are objects
// for a set, typeof returns object

typeof letters // object

// for a set, instanceof returns true for object and set

letters instanceof Object // true
letters instanceof Set // true