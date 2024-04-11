// js for loop

// loops can execute a block of code a number of times

// js loops
// loops are handy, if you want to run the same code over and over again, each time with
// a different value
// often tis is the case when working with arrays

// instead of writing
text += cars[0] + "<br>";
text += cars[1] + "<br>";
text += cars[2] + "<br>";
text += cars[3] + "<br>";
text += cars[4] + "<br>";
text += cars[5] + "<br>";

// you can write
for (let index = 0; index < cars.length; index++) {
    text += cars[index] + "<br>";
}

// different kinds of loops
// js supports different kinds of loops
// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true

// the for loop
// the for statement creates a loop with a 3 optional expressions

for (expression1; expression2; expression3) {
    // code block to be executed
}

// expression1 - is executed (one time) before the execution of the code block
// expression2 - defines the condition for executing the code block
// expression3 - is executed (every time) after the code block has been executed

// example
for (let i = 0; i < 5; i++) {
    text += "the number is " + i + "<br>";
}

// from the example above, you can read
// expression1 sets a variable before the loop starts (let i = 0)
// expression2 defines the condition for the loop to run (i must be less than 5)
// expression3 increases a value (i++) each time the code block in the loop has been 
// executed

// expression 1
// normally you will use expression 1 to initialize the variable used in the loop (i = 0)
// this is not always the case, javascript does not care, expression 1 is optional
// you can initiate many values in expression 1 (separated by comma)

// example
for (let i = 0, len = cars.length, text = ""; i < len; i++) {
    text += cars[i] + "<br>";
}

// and you can omit 1 (like when your values are set before the loop starts)

// example
let i = 2;
let len = cars.length;
let text = "";
for (; i < len; i++) {
    text += cars[i] + "<br>";
}

// expression 2
// often expression 2 is used to evaluate the condition of the intial variable
// this is not always the case. js does not care, expression 2 is optional
// if expression 2 returns true, the loop will start over again, if it returns false,
// the loop will end

// if you omit expression 2, you must provide a break inside the loop. otherwise the loop
// will never end. this will crash your browser

// expression 3
// often expression 3 increments the value of the initial variable
// this is not always the case, js does not care, expression 3 is optional
// expression 3 can do anything like negative increment (i--), positive increment (i = i + 
// 15), or anything else
// expression 3 can also be omitted (like when you increment your values inside the loop)

// example
i = 0;
len = cars.length;
text = "";

for (; i < len;) {
    text += cars[i] + "<br>";
    i++;
}

// loop scope
// using var in loop

// example
var x = 5;

for (var x = 0; x < 10; x++) {
    // some code
}

// here x will be 10

// using let in loop

// example
let x = 5;

for (let x = 0; x < 10; x++) {
    // some code
}

// here x will be 5

// if the first example, using var, the variable declared in the loop redeclares the 
// variable outside the loop
// in the second example, using let, the variable declared in the loop does not redeclare
// the variable outside the loop
// when let is used to declare the i variable in a loop, the i variable will only be 
// visible within the loop