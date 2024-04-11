// js number properties

// property     description
// EPSILON      returns the smallest number that can be represented in js
// MAX_VALUE    returns the largest number possible in js
// MIN_VALUE    returns the smallest number possible in js
// MAX_SAFE_INTEGER  returns the largest safe integer in js
// MIN_SAFE_INTEGER  returns the smallest safe integer in js
// NEGATIVE_INFINITY  represents negative infinity
// POSITIVE_INFINITY  represents positive infinity
// NaN                represents a "Not-a-Number" value

// js epsilon
// Number.EPSILON is the difference between the smallest floating point number greater
// than 1 and 1

// example
let x = Number.EPSILON

// note
// Number.EPSILON is an es6 feature
// it does not work in ie

// js max value
// Number.MAX_VALUE is a constant representing the largest possible number in js

// example
x = Number.MAX_VALUE

// number properties cannot be used on variables
// number properties belong to the js number object
// these properties can only be accessed as Number.MAX_VALUE
// using x.MAX_VALUE, where x is a variable or a value, will return undefined

// example
x = 6
x.MAX_VALUE

// js min value
// Number.MIN_VALUE is a constant representing the smallest possible number in js

// example
x = Number.MIN_VALUE

// js max safe integer
// Number.MAX_SAFE_INTEGER is a constant representing the maximum safe integer in js
// Number.MAX_SAFE_INTEGER is (2^53 - 1)

// example
x = Number.MAX_SAFE_INTEGER

// js min safe integer
// Number.MIN_SAFE_INTEGER is a constant representing the minimum safe integer in js
// Number.MIN_SAFE_INTEGER is -(2^53 - 1)

// example
x = Number.MIN_SAFE_INTEGER

// note
// MAX_SAFE_INTEGER and MIN_SAFE_INTEGER are es6 features
// they do not work in ie

// js positive infinity

// example
x = Number.POSITIVE_INFINITY

// POSITIVE_INFINITY is returned on overflow
x = 1 / 0

// js negative infinity

// example
x = Number.NEGATIVE_INFINITY

// NEGATIVE_INFINITY is returned on overflow
x = -1 / 0

// js NaN - not a number
// NaN is a js reserved word indicating that a number is not a legal number

// examples
x = Number.NaN

// trying to do arithmetic with a non-numeric string will result in NaN (not a number)
x = 100 / "apple"

