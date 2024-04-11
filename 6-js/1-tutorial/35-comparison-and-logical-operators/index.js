// js comparison and logical operators

// comparison and logical operators are used to test for true or false

// comparison operators
// comparison operators are used in logical statements to determine equality or difference 
// between variables or values
// given that x = 5, the table below explains the comparison operators

// operator		name				example
// ==			equal to			x == 8 is false
//                                  x == 5 is true
//                                  x == "5" is true
// ===			equal value and type x === 5 is true
//                                  x === "5" is false
// !=			not equal			x != 8 is true
// !==			not equal value or type x !== 5 is false
//                                  x !== "5" is true
//                                x !== 8 is true
// >				greater than		x > 8 is false
// <				less than			x < 8 is true
// >=			greater than or equal to x >= 8 is false
// <=			less than or equal to x <= 8 is true

// how can it be used
// comparison operators can be used in conditional statements to compare values and 
// take action depending on the result

if (age < 18) text = "too young to buy alcohol";

// logical operators
// logical operators are used to determine the logic between variables or values
// given that x = 6 and y = 3, the table below explains the logical operators

// operator		name				description
// &&			and					logical and returns true if both statements are true
// ||			or					logical or returns true if one of the statements is true
// !			not					logical not returns the opposite of the boolean value

// conditional (ternary) operator
// js also contains a conditional operator that assigns a value to a variable based on 
// some condition

// syntax
variable = (condition) ? value1 : value2

// example
var voteable = (age < 18) ? "too young" : "old enough";

// if the variable age is a value below 18, the value of the variable voteable will be
// "too young", otherwise the value of voteable will be "old enough"

// comparing different types
// comparing data of different types may give unexpected results
// when comparing a string with a number, js will try to convert the string to a number
// when doing the comparison. an empty string converts to 0. a non-numeric string converts
// to NaN which is always false

// case         value
2 < 12          // true
2 < "12"        // true
2 < "john"      // false
2 > "john"      // false
2 == "john"     // false
"2" < "12"      // false
"2" > "12"      // true
"2" == "12"     // false

// when comparing two strings, "2" will be greater than "12" because (alphabetically) 1 is
// less than 2
// to secure a proper result, variables should be converted to the proper type before
// comparison

age = Number(age);
if (isNaN(age)) {
    voteable = "input is not a number";
} else {
    voteable = (age < 18) ? "too young" : "old enough";
}

// the nullish coalescing operator (??)
// the ?? operator returns the first argument if it is not null or undefined. otherwise,
// it returns the second argument

// example
let name = null;
let text = "missing";
let result = name ?? text;

// the nullish operator is supported in all browsers since march 2020

// the optional chaining operator (?.)
// the ?. operator return undefined if an object is undefined or null

// example
// create an object
const car = { type: "Fiat", model: "500", color: "white" };
// ask for car name
document.getElementById("demo").innerHTML = car?.name;

// the optional chaining operator is supported in all browsers since march 2020

