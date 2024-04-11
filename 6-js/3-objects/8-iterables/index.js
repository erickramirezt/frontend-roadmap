// js iterables

// iterable objects are objects that can be iterated over with a for..of loop
// technically, iterables must implement the Symbol.iterator method

// iterating over a string
// you can use a for ..of loop to iterate over a string

// example
for (const x of 'javascript') {
  console.log(x)
}

// iterating over an array
// you can use a for ..of loop to iterate over an array

// example
for (const x of [1, 2, 3, 4, 5]) {
  console.log(x)
}

// js iterators
// the iterator protocol defines how to produce a sequence of values from an object
// an object becomes an iterator when it implements the next() method
// the next method must return an object with two properties:
// value: the next value in the sequence
// done: true if the last value in the sequence has already been consumed. otherwise false

// home made iterable
// this iterable returns never ending: 10, 20, 30, 40,... everytime next is called

// example
// home made iterable
function myNumbers() {
  let n = 0
  return {
    next: function () {
      n += 10
      return { value: n, done: false }
    },
  }
}

// create iterable
const n = myNumbers()
n.next().value // 10
n.next().value // 20
n.next().value // 30

// the problem with a home made iterable:
// it does not work with a for ..of loop

// a js iterable is an object that has a Symbol.iterator property
// the Symbol.iterator property is a function that returns a next() function
// an iterable can be iterated over with the code for (const x of iterable) { }

// example
// create an object
myNumbers = {}

// make it iterable
myNumbers[Symbol.iterator] = function () {
  let n = 0
  done = false
  return {
    next: function () {
      n += 10
      if (n == 100) done = true
      return { value: n, done }
    },
  }
}

// now you can use the object in a for ..of loop
for (const x of myNumbers) {
  console.log(x)
}

// the Symbol.iterator method is called automatically by for ..of
// but we can also do it manually

// example
let iterator = myNumbers[Symbol.iterator]()

while (true) {
  let result = iterator.next()
  if (result.done) break
  console.log(result.value)
}