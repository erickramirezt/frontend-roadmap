// js switch statement

// the switch statement is used to perform different actions based on different conditions

// the js switch statement
// use the switch statement to select one of many code blocks to be executed

// syntax
switch (expression) {
    case x:

        break;
    case y:

        break;
    default:
        break;
}

// this is how it works
// the switch expression is evaluated once
// the value of the expression is compared with the values of each case
// if there is a match, the associated block of code is executed
// if there is no match, the default code block is executed

// example
// the getDay() method returns the weekday as a number between 0 and 6
// (sunday = 0, monday = 1, tuesday = 2, wednesday = 3, thursday = 4, friday = 5, saturday = 6)
// this example uses the weekday number to calculate the weekday name
switch (new Date().getDay()) {
    case 0:
        day = "sunday";
        break;
    case 1:
        day = "monday";
        break;
    case 2:
        day = "tuesday";
        break;
    case 3:
        day = "wednesday";
        break;
    case 4:
        day = "thursday";
        break;
    case 5:
        day = "friday";
        break;
    case 6:
        day = "saturday";
}

// the break keyword
// when js reaches a break keyword, it breaks out of the switch block
// this will stop the execution inside the switch block
// it is not necessary to break the last case in a switch block. the block breaks (ends) 
// there anyway

// the default keyword
// the default keyword specifies the code to run if there is no case match

// example
// the getDay() method returns the weekday as a number between 0 and 6
// if today is neither saturday (6) nor sunday (0), write a default message

switch (new Date().getDay()) {
    case 6:
        text = "today is saturday";
        break;
    case 0:
        text = "today is sunday";
        break;
    default:
        text = "looking forward to the weekend";
}

// the default case does not have to be the last case in a switch block

// example
switch (new Date().getDay()) {
    default:
        text = "looking forward to the weekend";
        break;
    case 6:
        text = "today is saturday";
        break;
    case 0:
        text = "today is sunday";
}

// if default is not the last case in the switch block, remember to end the default case 
// with a break

// common code blocks
// sometimes you will want different switch cases to use the same code
// in this example case 4 and 5 share the same code block, and 0 and 6 share another code 
// block

// example
switch (new Date().getDay()) {
    case 4:
    case 5:
        text = "soon it is weekend";
        break;
    case 0:
    case 6:
        text = "it is weekend";
        break;
    default:
        text = "looking forward to the weekend";
}

// switching details
// if multiple cases matches a case value, the first case is selected
// if no matching cases are found, the program continues to the default label
// if no default label is found, the program continues to the statement(s) after the 
// switch

// strict comparison
// switch cases use strict comparison (===)
// the values must be of the same type to match
// a strict comparison can only be true if the operands are of the same type
// in this example there will be no match for x

// example
let x = "0";

switch (x) {
    case 0:
        text = "off";
        break;
    case 1:
        text = "on";
        break;
    default:
        text = "no value found";
}