// js while loop

// loops can execute a block of code as long as a specified condition is true

// the while loop
// the whille loop loops through a block of code as long as a specified condition is true

// syntax
while (condition) {
    // code block to be executed
}

// example
// in the following example, the code in the loop will run, over and over again, as long 
// as a variable (i) is less than 10

// example
while (i < 10) {
    text += "the number is " + i;
    i++;
}

// if you forget to increase the variable used in the condition, the loop will never end.
// this will crash your browser

// the do while loop
// the do while loop is a variant of the while loop. this loop will execute the code block
// once, before checking if the condition is true, then it will repeat the loop as long as
// the condition is true

// syntax
do {
    // code block to be executed
} while (condition);

// example
// the example below uses a do while loop. the loop will always be executed at least once,
// even if the condition is false, because the code block is executed before the condition
// is tested

// example
do {
    text += "the number is " + i;
    i++;
} while (i < 10);

// do not forget to increase the variable used in the condition, otherwise the loop will
// never end!

// comparing for and while
// the loop is this example uses a for loop to collect the car names from the cars array

// example
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
var text = "";

for (;cars[i];) {
    text += cars[i] + "<br>";
    i++;
}

// the loop in this example uses a while loop to collect the car names from the cars array

// example
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
var text = "";

while (cars[i]) {
    text += cars[i] + "<br>";
    i++;
}