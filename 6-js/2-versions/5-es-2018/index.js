// es 2018

// new features in es 2018
// this chapter introduces the new features in es 2018
// asynchronous iteration
// promise finally
// object rest properties
// new regex features
// js shared memory

// js asynchronous iteration
// es 2018 added asynchronous iterators and iterables
// with asynchronous iteration, we can use the await keyword in for/of loops

// example
// for await () {}

// js asyncronous iteration is supported in all modern browsers since march 2018

// js promise finally
// es 2018 finalizes the full implementation of the promise object with promise finally

let myPromise = new Promise();

myPromise.then()
myPromise.catch()
myPromise.finally()

// js promise finally is supported in all modern browsers since march 2018

// js object rest properties
// es 2018 added rest properties
// this allows us to destruct an object and collect the leftlovers onto a new object

// example
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
x; // 1
y; // 2
z; // { a: 3, b: 4 }

// js object rest properties is supported in all modern browsers since march 2018

// js regex features
// es 2018 added 4 new regexp features to javascript
// unicode property escapes (\p{...})
// lookbehind assertions (?<=) and (?<!)
// named capture groups
// s (dotAll) flag

// js threads
// in js you use the web workers api to create threads
// worker threads are used to execute code in the background so that the main program
// can continue execution
// worker threads run sumultaneously with the main thread. simultaneaous execution of
// different parts of a program can be time-saving

// js shared memory
// shared memory is a feature that allows threads (different parts of a program) to 
// access and update the same data in the same memory
// instead of passing data between threads, you can pass a sharedarraybuffer object
// that points to the memory where data is saved

// sharedarraybuffer
// a sharearraybuffer object represents a fixed-length raw binary data buffer similar to 
// the a arraybuffer object