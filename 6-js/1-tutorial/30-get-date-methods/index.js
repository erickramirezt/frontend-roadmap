// js get date methods

// the new date constructor
// in js, date objects are created with new date()
// new date() returns a date object with the current date and time

// get the current time
const date = new Date();

// date get methods

// methods          description
// getFullYear()    get the year as a four digit number (yyyy)
// getMonth()       get the month as a number (0-11)
// getDate()        get the day as a number (1-31)
// getDay()         get the weekday as a number (0-6)
// getHours()       get the hour (0-23)
// getMinutes()     get the minute (0-59)
// getSeconds()     get the second (0-59)
// getMilliseconds() get the millisecond (0-999)
// getTime()        get the time (milliseconds since january 1, 1970)

// note 1
// the get methods above return local time

// note 2
// the get methods return information from existing date objects
// in a date object, the time is static. the clock is not running
// the time in a date object is not the same as current time

// th getfullyear() method
// the getfullyear() method returns the year of a date as a four digit number

// examples
const d = new Date("2021-03-25");
d.getFullYear();

const d1 = new Date();
d1.getFullYear();

// warning !
// old js code might use the non-standard getyear() method
// getyear() returns the year as a two digit number (yy)
// getyear() is no longer used

// the getmonth() method
// the getmonth() method returns the month of a date as a number (0-11)

// note
// in js, january is 0, february is 1, and so on
// finally, december is month number 11

// examples
const d2 = new Date("2021-03-25");
d2.getMonth();

const d3 = new Date();
d3.getMonth();

// note
// you can use an array of names to return the month as a name

// examples
const months = ["january", "february", "march", "april", "may", "june", "july", "august",
    "september", "october", "november", "december"];

const d4 = new Date("2021-03-25");
let month = months[d4.getMonth()];

const d5 = new Date();
let month1 = months[d5.getMonth()];

// the getdate() method
// the getdate() method returns the day of a date as a number (1-31)

// examples
const d6 = new Date("2021-03-25");
d6.getDate();

const d7 = new Date();
d7.getDate();

// the gethours() method
// the gethours() method returns the hours of a date as a number (0-23)

// examples
const d8 = new Date("2021-03-25");
d8.getHours();

const d9 = new Date();
d9.getHours();

// the getminutes() method
// the getminutes() method returns the minutes of a date as a number (0-59)

// examples
const d10 = new Date("2021-03-25");
d10.getMinutes();

const d11 = new Date();
d11.getMinutes();

// the getseconds() method
// the getseconds() method returns the seconds of a date as a number (0-59)

// examples
const d12 = new Date("2021-03-25");
d12.getSeconds();

const d13 = new Date();
d13.getSeconds();

// the getmilliseconds() method
// the getmilliseconds() method returns the milliseconds of a date as a number (0-999)

// examples
const d14 = new Date("2021-03-25");
d14.getMilliseconds();

const d15 = new Date();
d15.getMilliseconds();

// the getday() method
// the getday() method returns the weekday of a date as a number (0-6)

// note
// in js, the first day of the week (0) means "sunday"
// some countries in the world consider the first day of the week to be monday

// examples
const d16 = new Date("2021-03-25");
d16.getDay();

const d17 = new Date();
d17.getDay();

// note
// you can use an array of names, and getDay(), to return the weekday as a name

// examples
const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

const d18 = new Date("2021-03-25");
let day = days[d18.getDay()];

const d19 = new Date();
let day1 = days[d19.getDay()];

// the gettime() method
// the gettime() method returns the number of milliseconds since january 1, 1970

// examples
const d20 = new Date("1970-01-01");
d20.getTime();

const d21 = new Date("2021-03-25");
d21.getTime();

const d22 = new Date();
d22.getTime();

// the date.now() method
// date.now() returns the number of milliseconds since january 1, 1970

// examples
let ms = Date.now();

// calculate the number of years since 1970/01/01

const minute = 1000 * 60;
const hour = minute * 60;
const aDay = hour * 24;
const year = aDay * 365;

let years = Math.round(Date.now() / year);

// date.now() is a static method of the date object
// you cannot use it on a date object like mydate.now()
// the syntax is always date.now()

// utc date get methods

// methods              same as              description
// getutcdate()         getdate()            get the day as a number (1-31)
// getutcfullyear()     getfullyear()        get the year as a four digit number (yyyy)
// getutcmonth()        getmonth()           get the month as a number (0-11)
// getutchours()        gethours()           get the hour (0-23)
// getutcminutes()      getminutes()         get the minute (0-59)
// getutcseconds()      getseconds()         get the second (0-59)
// getutcmilliseconds() getmilliseconds()    get the millisecond (0-999)

// utc methods use utc time (coordinated universal time)
// utc time is the same as gmt time (greenwich mean time)
// the difference between local time and utc time can be up to 24 hours

// the gettimezoneoffset() method
// the gettimezoneoffset() method returns the time difference between utc time and local 
// time, in minutes

// example
let diff = d.getTimezoneOffset();
