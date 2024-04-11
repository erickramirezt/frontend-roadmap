// js date objects

// examples
const d = new Date();

const d1 = new Date("2022-03-25");

// note
// date objects are static. the clock is not running
// the computer clock is ticking, date objects are not

// js date output
// by default, js will use the browser's time zone and display a date as a full text string
// Mon Aug 14 2023 17:09:26 GMT-0500 (hora estándar de Perú)

// creating date objects
// date objects are created with the new Date() constructor
// there are 9 ways to create a new date object

new Date();
new Date(dateString);

new Date(year, month)
new Date(year, month, day)
new Date(year, month, day, hours)
new Date(year, month, day, hours, minutes)
new Date(year, month, day, hours, minutes, seconds)
new Date(year, month, day, hours, minutes, seconds, milliseconds)

new Date(milliseconds)

// js new date
// new date() creates a new date object with the current date and time

// example
const d2 = new Date();

// new date(date strings)
// new date(date strings) creates a new date object from a date string

// examples
const d3 = new Date("October 13, 2021 11:13:00");

const d4 = new Date("2022-03-25");

// date string formats are described in the next chapter

// new date(year, month, ...)
// new date(year, month, ...) creates a new date object with a specified date and time
// 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order)

// example
const d5 = new Date(2021, 11, 24, 10, 33, 30, 0);

// note
// js counts months from 0 to 11. january is 0. december is 11

// specifying a month higher than 11, will not result in an error but add the overflow to 
// the next year

// specifying
const d6 = new Date(2021, 13, 24, 10, 33, 30);

// is the same as
const d7 = new Date(2022, 1, 23, 10, 33, 30);

// specifying a day higher than max, will not result in an error but add the overflow to
// the next month

// specifying
const d8 = new Date(2021, 11, 33, 10, 33, 30);

// is the same as
const d9 = new Date(2022, 0, 2, 10, 33, 30);

// using 6, 4, 3 or 2 numbers
// 6 numbers specify year, month, day, hour, minute, second

// example
const d10 = new Date(2021, 11, 24, 10, 33, 30);

// 5 numbers specify year, month, day, hour, minute

// example
const d11 = new Date(2021, 11, 24, 10, 33);

// 4 numbers specify year, month, day, hour
const d12 = new Date(2021, 11, 24, 10);

// 3 numbers specify year, month, day
const d13 = new Date(2021, 11, 24);

// 2 numbers specify year, month
const d14 = new Date(2021, 11);

// you cannot omit month. if you supply only one parameter it will be treated as 
// milliseconds

// example
const d15 = new Date(2021);

// previous century
// one and two digit years will be interpreted as 19xx

// example
const d16 = new Date(99, 11, 24);

// example
const d17 = new Date(9, 11, 24);

// js stores dates as miliseconds
// js stores dates as number of miliseconds since january 01, 1970
// zero time is january 01, 1970 00:00:00 utc
// one day (24 hours) is 86,400,000 miliseconds
// now the time is 1692050966383 miliseconds past january 01, 1970

// new date(miliseconds)
// new date(miliseconds) creates a new date object as miliseconds plus zero time

// examples
// 01 january 1970 plus 100 000 000 000 milliseconds is
const d18 = new Date(100000000000);

// 01 january 1970 minus 100 000 000 000 milliseconds is
const d19 = new Date(-100000000000);

// january 01 1970 plus 24 hours is
const d20 = new Date(24 * 60 * 60 * 1000);
// or
const d21 = new Date(86400000);

// 01 january 1970 plus 0 miliseconds is
const d22 = new Date(0);

// date methods
// when a date object is created, a number of methods allow you to operate on it
// date methods allow you to get and set the year, month, day, hour, minute, second and
// milisecond of date objects, using either local time or utc (universal, or gmt) time

// date methods and time zones are covered in the next chapters

// displaying dates
// js will (by default) output dates using the toString() method. this is a string
// representation of the date, including the time zone. the format is specified in the
// es specification

// example
// Mon Aug 14 2023 17:09:26 GMT-0500 (hora estándar de Perú)

// when you display a date object in html, it is automatically converted to a string, with
// the toString() method

// example
const d23 = new Date();
d23.toString();

// the toDateString() method converts a date to a more readable format

// example
const d24 = new Date();
d24.toDateString();

// the toUTCString() method converts a date to a utc string (a date display standard)

// example
const d25 = new Date();
d25.toUTCString();

// the toISOString() method converts a date to a string, using the iso standard

// example
const d26 = new Date();
d26.toISOString();
