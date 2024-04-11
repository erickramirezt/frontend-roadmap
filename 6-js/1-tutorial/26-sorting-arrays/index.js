// js sorting arrays

// sorting an array
// the sort() method sorts an array alphabetically

// example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

// reversing an array
// the reverse() method reverses the elements in an array
// you can use it to sort an array in descending order

// example
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.sort();
fruits1.reverse();

// numeric sort
// by default, the sort() function sorts values as strings
// this works well for strings ("Apple" comes before "Banana")
// however, if numbers are sorted as strings, "25" is bigger than "100", because "2" is 
// bigger than "1"
// because of this, the sort() method will produce an incorrect result when sorting 
// numbers
// you can fix this by providing a compare function

// example
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return a - b });

// use the same trick to sort an array descending

// example
const points1 = [40, 100, 1, 5, 25, 10];
points1.sort(function (a, b) { return b - a });

// the compare function
// the purpose of the compare function is to define an alternative sort order
// the compare function should return a negative, zero, or positive value, depending on
// the arguments

// function(a, b) { return a - b }

// when the sort() function compares two values, it sends the values to the compare
// function, and sorts the values according to the returned (negative, zero, positive)
// value
// if the result is negative a is sorted before b
// if the result is positive b is sorted before a
// if the result is 0 no changes are done with the sort order of the two values
// example
// the compare function compares all the values in the array, two values at a time (a, b)
// when comparing 40 and 100, the sort() method calls the compare function(40, 100)
// the function calculates 40 - 100 (a - b), and since the result is negative (-60), the
// sort function will sort 40 as a value lower than 100
// you can use this code snippet to experiment with numerically and alphabetically sorting

// example
const points2 = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points2;

// sort alphabetically
function myFunction1() {
    points2.sort();
    document.getElementById("demo").innerHTML = points2;
}

// sort numerically
function myFunction2() {
    points2.sort(function (a, b) { return a - b });
    document.getElementById("demo").innerHTML = points2;
}

// sorting an array in random order

// example
const points3 = [40, 100, 1, 5, 25, 10];
points3.sort(function (a, b) { return 0.5 - Math.random() });

// the fisher yates method
// the above example, array.sort(), is not accurate. it will favor some numbers over the 
// others
// the most popular correct method, is called the fisher yates shuffle, and was introduced
// in data science as early as 1938
// in js the method can be translated to this

// example
const points4 = [40, 100, 1, 5, 25, 10];

for (i = points4.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * i)
    k = points4[i]
    points4[i] = points4[j]
    points4[j] = k
}

// find the highest (or lowest) array value
// there are no built-in functions for finding the max or min value in an array
// however, after you have sorted an array, you can use the index to obtain the highest
// and lowest values
// sorting ascending

// example
const points5 = [40, 100, 1, 5, 25, 10];
points5.sort(function (a, b) { return a - b });
// now points5[0] contains the lowest value
// and points5[points5.length-1] contains the highest value

// sorting descending

// example
const points6 = [40, 100, 1, 5, 25, 10];
points6.sort(function (a, b) { return b - a });
// now points6[0] contains the highest value
// and points6[points6.length-1] contains the lowest value

// sorting a whole array is a very inefficient method if you only want to find the highest
// (or lowest) value

// using math.max() on an array
// you can use Math.max.apply to find the highest number in an array

// example
function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}

// math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3)

// using math.min() on an array
// you can use Math.min.apply to find the lowest number in an array

// example
function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}

// math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3)

// my min / max js methods
// the fastest solution is to use a "home made" js function
// this functions loops through an array comparing each value with the highest value found

// example (find max)
function myArrayMax1(arr) {
    let len = arr.length
    let max = -Infinity

    while (len--) {
        if (arr[len] > max) {
            max = arr[len]
        }
    }

    return max
}

// this function loops through an array comparing each value with the lowest value found

// example (find min)
function myArrayMin1(arr) {
    let len = arr.length
    let min = Infinity

    while (len--) {
        if (arr[len] < min) {
            min = arr[len]
        }
    }

    return min
}

// sorting object arrays
// js arrays often contain objects

// example
const cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
]

// even if objects have properties of different data types, the sort() method can be used
// to sort the array
// the solution is to write a compare function to compare the property values

// example
cars.sort(function (a, b) { return a.year - b.year });

// comparing string properties is a little more complex

// example
cars.sort(function (a, b) {
    let x = a.type.toLowerCase()
    let y = b.type.toLowerCase()
    if (x < y) { return -1 }
    if (x > y) { return 1 }
    return 0
})

// stable array sort()
// es2019 revised the array sort() method
// before 2019, the specification allowed unstable sorting algorithms such as quicksort
// after es2019, browser must use a stable sorting algorithm
// when sorting elements on a value, the elements must keep their relative position to
// other elements with the same value

// example
const myArr = [
    { name: "X00", price: 100 },
    { name: "X01", price: 100 },
    { name: "X02", price: 100 },
    { name: "X03", price: 100 },
    { name: "X04", price: 100 },
    { name: "X05", price: 100 },
    { name: "X06", price: 100 },
    { name: "X07", price: 100 },
]

// in the example above, when sorting on price, the result is not allowed to come out with
// the names in an other relative position like this
