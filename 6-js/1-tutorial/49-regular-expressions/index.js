// js regular expressions

// a regular expression is a sequence of characters that forms a search pattern
// the search pattern can be used for text search and text replace operations

// what is a regular expression?
// a regular expression is a sequence of characters that forms a search pattern
// when you search for data in a text, you can use this search pattern to describe what you
// are searching for
// a regular expression can be a single character, or a more complicated pattern
// regular expressions can be used to perform all types of text search and text replace
// operations

// syntax
// /pattern/modifiers;

// example
/w3schools/i;

// example explained
// /w3schools/i is a regular expression
// w3schools is a pattern (to be used in a search)
// i is a modifier (modifies the search to be case-insensitive)

// using string methods
// in js, regular expressions are often used with the two string methods: search() and 
// replace()
// search() method uses an expression to search for a match, and returns the position of the
// match
// replace() method returns a modified string where the pattern is replaced

// using string search() with a string
// the search() method searches a string for a specified value and returns the position of
// the match

// example
// use a string to do a search for "w3schools" in a string
let text = "visit w3schools";
let n = text.search("w3schools");

// the result of n will be 6

// using string search() with a regular expression

// example
// use a regular expression to do a case-insensitive search for "w3schools" in a string
text = "visit w3schools";
n = text.search(/w3schools/i);

// the result of n will be 6

// using string replace() with a string
// the replace() method replaces a specified value with another value in a string

text = "visit microsoft";
let newText = text.replace("microsoft", "w3schools");

// use string replace() with a regular expression

// example
// use a regular expression to replace case-insensitive "microsoft" with "w3schools" in a
// string
text = "visit microsoft";
newText = text.replace(/microsoft/i, "w3schools");

// the result of newText will be "visit w3schools"

// did you notice
// regular expression arguments (instead if string arguments) can be used in the methods
// above
// regular expressions can make your search much more powerful (case sensitive, for global
// example)

// regular expression modifiers
// modifiers can be used to perform case-insensitive more global searches

// modifier       description
// i              perform case-insensitive matching
// g              perform a global match (find all matches rather than stopping after the first match)
// m              perform multiline matching

// regular expression patterns
// brackets are used to find a range of characters

// expression      description
// [abc]           find any character between the brackets
// [0-9]           find any character between the brackets (any digit)
// (x|y)           find any of the alternatives specified

// metacharacters are characters with a special meaning

// metacharacter   description
// \d              find a digit
// \s              find a whitespace character
// \b              find a match at the beginning or at the end of a word
// \uxxxx          find the unicode character specified by the hexadecimal number xxxx

// quantifiers define quantities
// quantifier      description
// n+              matches any string that contains at least one n
// n*              matches any string that contains zero or more occurrences of n
// n?              matches any string that contains zero or one occurrences of n

// using the regexp object
// in js, the regexp object is a regular expression object with predefined properties and
// methods

// using test()
// the test() method is a regexp expression method
// it searches a string for a pattern, and returns true or false, depending on the result
// the following example searches a string for the character "e"

// example
const pattern = /e/;
pattern.test("the best things in life are free!");

// since there is an "e" in the string, the result of the test() method will be true

// you don't have to put the regular expression in a variable first
/e/.test("the best things in life are free!");

// using exec()
// the exec() method is a regexp expression method
// it searches a string for a specified pattern, and returns the found text as an object
// if no match is found, it returns an empty (null) object
// the following example searches a string for the character "e"

// example
/e/.exec("the best things in life are free!");