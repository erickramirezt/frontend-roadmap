// js break and continue

// the break statement jumps out of a loop
// the continue statement jumps over one iteration in the loop

// the break statement
// the break statement jumps out of a loop

// example
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        break;
    }
    text += "the number is " + i + "<br>";
}

// in the example above, the break statement ends the loop ("breaks the loop") when 
// i is equal to 3

// the continue statement
// the continue statement jumps over one iteration in the loop, if a specified condition 
// occurs, and continues with the next iteration in the loop
// this example skips the value of 3

// example
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue;
    }
    text += "the number is " + i + "<br>";
}

// js labels
// to label js statements you precede the statements with a label name and a colon
label: statements

// the break and the continue statements are the only js statements that can "jump out of" 
// a code block
// syntax

// break labelname;
// continue labelname;

// the continue statement (with or without a label reference) can only be used to skip one
// loop iteration
// the break statement, without a label reference, can only be used to jump out of a loop 
// or a switch
// with a label reference, the break statement can be used to jump out of any code block

// example
let cars = ["BMW", "Volvo", "Saab", "Ford"];
list: {
    text += cars[0] + "<br>";
    text += cars[1] + "<br>";
    break list;
    text += cars[2] + "<br>";
    text += cars[3] + "<br>";
}

// a code block is a block of code, between {}