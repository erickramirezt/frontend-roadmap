// es 2020

// new features in es2020
// BigInt
// string matchAll
// the nullish coalescing operator
// optional chaining operator
// logical assignment operators
// nullish coalescing assignment operator
// promise.allSettled
// dynamic import

// warning
// these features are relatively new
// older browsers may need an alternative code 

// js bigint
// js bignit variables are used to store big integer values that are too big to be
// represented by a normal js number
// js integers are only accurate up to 15 digits

// integer example
var x = 999999999999999; // x will be 999999999999999
var y = 9999999999999999; // y will be 10000000000000000

// big integer example
var x = 999999999999999; // x will be 999999999999999    
var y = 9999999999999999n; // y will be 9999999999999999

// to create a bigint, append n to the end of an integer or call bigint()

// example
var x = 1234567890123456789012345n;
var y = BigInt(1234567890123456789012345);

// the js typeof a bigint is bigint
// example
var x = BigInt(999999999999999)
var type = typeof x;

// bigint is supported in all modern browsers 

// js string matchAll
// before es2020 there was no string method that could be used to search for all 
// occurrences of a specified string

// example
var iterator = text.matchAll("Cats")

// if the parameter is a regular expression, the global flag must be set, or an error will 
// occur

// example
var iterator = text.matchAll(/Cats/g)

// if you want to search case insensitive, the insensitive flag (i) must be set

// example
var iterator = text.matchAll(/Cats/gi)

// note
// es2021 introduced the string replaceAll() method

// the nullish coalescing operator
// the ?? operator returns the first argument if it is not null or undefined
// otherwise, the second argument is returned

// example
var name = null;
var text = "missing";
var result = name ?? text;

// the nullish operatoris supported in all modern browsers since 2020

// the optional chaining operator
// the optional chaining operator returns undefined if an object is undefined or null

// example
var car = { type: "Fiat", model: "500", color: "white" };
var name = car.name;

// the ?.= operator is supported in all modern browsers since 2020

// the &&= operator
// the logical and assignment operator (&&=) assigns a value to a variable if the variable 
// is true

// logical and assignment example
var x = 10;
x &&= 20; // x = 20

// the &&= operator is supported in all modern browsers since 2020

// the ||= operator
// the logical or assignment operator (||=) assigns a value to a variable if the variable
// is false

// logical or assignment example
var x = 10;
x ||= 20; // x = 10

// the ||= operator is supported in all modern browsers since 2020

// the ??= operator
// the nullish coalescing assignment operator (??=) assigns a value to a variable if the
// variable is null or undefined

// nullish coalescing assignment example
var x;
x ??= 20; // x = 20

// the ??= operator is supported in all modern browsers since 2020