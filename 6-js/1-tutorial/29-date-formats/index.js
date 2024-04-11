// js date formats

// js date input
// there are generally 3 types of js date input formats

// type             example
// iso date         yyyy-mm-dd
// short date       mm/dd/yyyy
// long date        mmm dd yyyy or mmmm dd yyyy

// the iso format follows a strict standard in javascript
// the other formats are not so well defined and might be browser specific

// js date output
// independent of input format, javascript will by default output dates in full text 
// string format
// Tue Aug 15 2023 13:53:54 GMT-0500 (hora estándar de Perú)

// js iso dates
// iso 8601 is the international standard for the representation of dates and times
// the iso 8601 syntax (yyyy-mm-dd) is also the preferred javascript date format

// example (complete date)
const d = new Date("2015-03-25");

// the computed date will be relative to your time zone
// depending on your time zone, the result above will vary between march 24 and march 25

// iso dates (year and month)
// date strings can be written without specifying the day (yyyy-mm)

// example
const d1 = new Date("2015-03");

// time zones will vary the result above between february 28 and march 01

// iso dates (only year)
// date strings can be written without specifying the month and day (yyyy)

// example
const d2 = new Date("2015");

// time zones will vary the result above between december 31 2014 and january 01 2015

// iso date (date-time)
// iso dates can be written with added hours, minutes, and seconds (yyyy-mm-ddThh:mm:ssz)

// example
const d3 = new Date("2015-03-25T12:00:00z");

// date and time is separated with a capital t
// utc time is defined with a capital letter z
// if you want to modify the time relative to utc, remove the z and add +hh:mm or -hh:mm 
// instead

// example
const d4 = new Date("2015-03-25T12:00:00-06:30");

// utc (universal time coordinate) is the same as gmt (greenwich mean time)

// omitting t or z in a date-time string can give different results in different browsers   

// time zones
// when setting a date, without specifying the time zone, javascript will use the 
// browser's time zone
// when detting a date, without specifying the time zone, the result is converted to the
// browser's time zone
// in other words: if a date/time is created in GMT (greenwich mean time), the date/time
// will be converted to cdt (central us daylight time) if a user browses from central us

// js short dates
// short dates are written with an mm/dd/yyyy syntax like this

// example
const d5 = new Date("03/25/2015");

// warnings

// in some browsers, months or days with no leading zeroes may produce an error
const d6 = new Date("2015-3-25");

// the behavior of "yyyy/mm/dd" is undefined
// some browsers will try to guess the format. some will return nan
const d7 = new Date("2015/03/25");

// the behavior of "dd-mm-yyyy" is also undefined
// some browsers will try to guess the format. some will return nan
const d8 = new Date("25-03-2015");

// js long dates
// long dates are most often written with a "mmm dd yyyy" syntax like this

// example
const d9 = new Date("mar 25 2015");

// month and can be in any order
const d10 = new Date("25 mar 2015");

// and month can be written in full (january), or abbreviated (jan)

// example
const d11 = new Date("january 25 2015");

// example
const d12 = new Date("jan 25 2015");

// commas are ignored. names are case insensitive

// example
const d13 = new Date("jan, 25, 2015");

// date input - parsing dates
// if you have a valid date string, you can use the date.parse() method to convert it to
// milliseconds
// date.parse() returns the number of milliseconds between the date and january 1 1970

// example
const msec = Date.parse("march 21, 2012");

// you can then use the number of milliseconds to convert it to a date object
const d14 = new Date(msec);