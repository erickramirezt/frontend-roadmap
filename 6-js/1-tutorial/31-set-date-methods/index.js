// js set date methods

// set date methods let you set date values (years, months, days, hours, minutes, seconds, 
// milliseconds) for a date object

// set date methods
// set date methods are used for setting a part of a date

// method               description
// setdate()           set the day as a number (1-31)
// setfull year()      set the year (optionally month and day)
// sethours()          set the hour (0-23)
// setmilliseconds()   set the milliseconds (0-999)
// setminutes()        set the minutes (0-59)
// setmonth()          set the month (0-11)
// setseconds()        set the seconds (0-59)
// settime()           set the time (milliseconds since january 1, 1970)

// the setfullyear() method sets the year (four digits) of a date object

// example
const d = new Date();
d.setFullYear(2020);

// the setFullYear() method can optionally set month and day

// example
const d1 = new Date();
d1.setFullYear(2020, 11, 3);

// the setmonth() method
// the setmonth() method sets the month of a date object (0-11)

// example
const d2 = new Date();
d2.setMonth(11);

// the setdate() method
// the setdate() method sets the day of a date object (1-31)

// example
const d3 = new Date();
d3.setDate(15);

// the setdate() method can also be used to add days to a date

// example
const d4 = new Date();
d4.setDate(d4.getDate() + 50);

// if adding days shifts the month or year, the changes are handled automatically by the 
// date object

// the sethours() method
// the sethours() method sets the hours of a date object (0-23)

// example
const d5 = new Date();
d5.setHours(22);

// the setminutes() method
// the setminutes() method sets the minutes of a date object (0-59)

// example
const d6 = new Date();
d6.setMinutes(30);

// the setseconds() method
// the setseconds() method sets the seconds of a date object (0-59)

// example
const d7 = new Date();
d7.setSeconds(30);

// compare dates
// dates can easily be compared
// the following example compares today's date with january 14, 2100

// example
let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
    text = "today is before january 14, 2100";
} else {
    text = "today is after january 14, 2100";
}

// js counts months from 0 to 11. january is 0. december is 11
