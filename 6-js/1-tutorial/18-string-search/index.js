// js string search

// string search methods
// string indexOf()
// string lastIndexOf()
// string search()
// string match()
// string matchAll()
// string includes()
// string startsWith()
// string endsWith()

// js string indexOf()
// the indexOf() method returns index (position) of the first occurence of a string in a 
// string

// example
let str = "Please locate where 'locate' occurs!";
let pos = str.indexOf("locate");

// note
// js counts positions from zero
// 0 is the first position in a string, 1 is the second, 2 is the third ...

// js string lastIndexOf()
// the lastIndexOf() method returns the index of the last occurence of a specified text in 
// a string

// example
let text = "Please locate where 'locate' occurs!";
let pos1 = text.lastIndexOf("locate");

// both indexOf(), and lastIndexOf() return -1 if the text is not found

// example
text = "Please locate where 'locate' occurs!";
index = text.lastIndexOf("John");

// both methods accept a second parameter as the starting position for the search

// example
text = "Please locate where 'locate' occurs!";
index = text.indexOf("locate", 15);

// the lastIndexOf() method searches backwards (from the end to the beginning), meaning:
// if the second parameter is 15, the search starts at position 15, and searches to the
// beginning of the string

// example
text = "Please locate where 'locate' occurs!";
index = text.lastIndexOf("locate", 15);

// js string search()
// the search() method searches a string for a string (or a regular expression), and 
// returns the position of the match

// examples
text = "Please locate where 'locate' occurs!";
text.search("locate");

text = "Please locate where 'locate' occurs!";
text.search(/locate/);

// did you notice?
// the two methods, indexOf() and search(), are equal?
// they accept the same arguments (parameters), and return the same value?
// the two methods are NOT equal. these are the differences:
// the search() method cannot take a second start position argument
// the indexOf() method cannot take powerful search values (regular expressions)

// js string match()
// the match() method returns an array containing the results of matching a string against
// a string (or a regular expression)

// example
// perform a search for 'ain'
text = "The rain in SPAIN stays mainly in the plain";
text.match("ain");

// perform a search for 'ain'
text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/);

// perform a global search for 'ain'
text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/g);

// perform a global, and case insensitive search for 'ain'
text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/gi);

// note
// if a regular expression does not include the g modifier (global search), match() will
// return only the first match in the string

// js string matchAll()
// the matchAll() method returns an iterator containing the results of matching a string
// against a string (or a regular expression)

// example
let iterator = text.matchAll("Cats");

// if the parameter is a regular expression, the global flag (g) must be set, otherwise
// a TypeError will be thrown

// example
iterator = text.matchAll(/Cats/g);

// if you want to search case insensitive, the insensitive flag (i) must be set

// example
iterator = text.matchAll(/Cats/gi);

// notes
// the matchAll() method is an es2020 feature
// the matchAll() method is not supported in Internet Explorer

// js string includes()
// the includes() method returns true if a string contains a specified value
// otherwise it returns false

// examples
// check if a string includes "world"
text = "Hello world, welcome to the universe.";
text.includes("world");

// check if a string includes "world", starting the search at position 12
text = "Hello world, welcome to the universe.";
text.includes("world", 12);

// notes
// the includes() method is case sensitive
// the includes() method is an es6 feature
// the includes() method is not supported in Internet Explorer

// js string startsWith()
// the startsWith() method returns true if a string begins with a specified value
// otherwise it returns false

// examples
// returns true
text = "Hello world, welcome to the universe.";
text.startsWith("Hello");

// returns false
text = "Hello world, welcome to the universe.";
text.startsWith("world");

// a start position for the search can be specified

// returns false
text = "Hello world, welcome to the universe.";
text.startsWith("world", 5);

// returns true
text = "Hello world, welcome to the universe.";
text.startsWith("world", 6);    

// notes
// the startsWith() method is case sensitive
// the startsWith() method is an es6 feature
// the startsWith() method is not supported in Internet Explorer

// js string endsWith()
// the endsWith() method returns true if a string ends with a specified value
// otherwise it returns false

// examples
// check if a string ends with "doe"
text = "john doe";
text.endsWith("doe");

// check is the 11 first characters of a string end with "world"
text = "Hello world, welcome to the universe.";
text.endsWith("world", 11);

// notes
// the endsWith() method is case sensitive
// the endsWith() method is an es6 feature
// the endsWith() method is not supported in Internet Explorer