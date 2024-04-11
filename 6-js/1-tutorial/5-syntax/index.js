// js syntax

// js syntax is the set of rules, how js programs are constructed
// how to create variables
var x;
let y;

// how to use variables
x = 5;
y = 6;
let z = x + y;

// js values
// the js syntax defines two types of values:
// fixed values
// variable values
// fixed values are called literals
// variable values are called variables

// js literals
// the two most important syntax rules for fixed values are:
// numbers are written with or without decimals
10.5;
1001;

// strings are text, written within double or single quotes
("john doe");
("john doe");

// js variables
// in a programming language, variables are used to store data values
// js uses the keywords var and let to declare variables
// an equal sign is used to assign values to variables
// in this example, x is defined as a variable. then, x is assigned (given) the value 6
let x;
x = 6;

// js operators
// js uses arithmetic operators to compute values ( + - * / )

(5 + 6) * 10;

// js uses an assignment operator to assign values to variables ( = )

x = 5;
y = 6;

// js expressions
// an expression is a combination of values, variables, and operators, which computes to a
// value
// the computation is called an evaluation
// for example, 5 * 10 evaluates to 50

5 * 10;

// expressions can also contain variable values

x * 10;

// the values can be of various types, such as numbers and strings
// for example, "jhon" + " " + "doe", evaluates to "john doe"

"john" + " " + "doe";

// js keywords
// js keywords are used to identify actions to be performed
// the let keyword tells the browser to create variables

x = 5 + 6;
y = x * 10;

// the var keyword also tells the browser to create variables

x = 5 + 6;
y = x * 10;

// js comments
// not all js statements are "executed"
// code after a double slash // or between /* and */ is treated as a comment
// comments are ignored, and will not be executed

x = 5
// x = 6

// js identifiers / names
// identifiers are js names
// identifiers are used to name keywords, and functions
// the rule for legal names are much the same in most programming languages
// a js name must begin with
// a letter (a-z or A-Z)
// a dollar sign ($)
// or an underscore (_)
// subsequent characters may be letters, digits, dollar signs, or underscores

// js is case sensitive
// all js identifiers are case sensitive
// the variables lastName and lastname, are two different variables

let lastName, lastname;
lastName = "doe";
lastname = "peterson";

// js does not interpret LET and let as the keyword let

// js and camel case
// historically, programmers have used different ways of joining multiple words into one
// variable name
// hyphens
// first-name, last-name, master-card, inter-city

// hypens are not allowed in js. it is reserved for subtractions

// underscores
// first_name, last_name, master_card, inter_city

// upper camel case (Pascal case)
// FirstName, LastName, MasterCard, InterCity

// lower camel case
// js programmers tend to use camel case that starts with a lowercase letter
// firstName, lastName, masterCard, interCity

// js character set
// js uses the unicode character set
// unicode covers (almost) all the characters, punctuations, and symbols in the world
