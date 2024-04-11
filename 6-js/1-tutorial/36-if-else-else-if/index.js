// js if, else and else if

// conditional statements are used to perform different actions based on different
// conditions

// conditional statements
// very often when you write code, you want to perform different actions for different 
// decisions
// you can use conditional statements in your code to do this
// in js we have the following conditional statements
// use if to specify a block of code to be executed, if a specified condition is true
// use else to specify a block of code to be executed, if the same condition is false
// use else if to specify a new condition to test, if the first condition is false
// use switch to specify many alternative blocks of code to be executed

// the if statement
// use the if statement to specify a block of javascript code to be executed if a
// condition is true

// syntax
if (condition) {
    // block of code to be executed if the condition is true
}

// note that if is in lowercase letters, uppercase letters (If or IF) will generate a js
// error

// example
// make a good day greeting if the hour is less than 18.00
if (hour < 18) {
    greeting = "Good day";
}

// the else statement
// use the else statement to specify a block of code to be executed if the condition is
// false

if (condition) {
    // block of code to be executed if the condition is true
} else {
    // block of code to be executed if the condition is false
}

// example
// make a good day greeting if the hour is less than 18.00, otherwise make a good evening
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

// the else if statement
// use the else if statement to specify a new condition if the first condition is false

// syntax
if (condition1) {
    // block of code to be executed if condition1 is true
} else if (condition2) {
    // block of code to be executed if the condition1 is false and condition2 is true
} else {
    // block of code to be executed if the condition1 is false and condition2 is false
}

// example
// if time is less than 10, greeting is good morning, if not, but time is less than 20,
// greeting is good day, otherwise greeting is good evening

if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
