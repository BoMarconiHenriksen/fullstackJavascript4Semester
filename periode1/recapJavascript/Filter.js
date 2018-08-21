/* Ex. 1: Declare a JavaScript array and initialize it with some names (Lars, Jan, Peter, Bo, Frederik etc.). 
Use the filter method to create a new array with only names of length <=3.

Filter(): Løber gennem arrayet. 
Hvis boolean er true returner den et nyt array med true værdierne.

Bruges når du skal bruge flere elementer fra et array.

*/

var names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Allan", "Ib"];

var lessThanThree = names.filter(function (name) {
    return name.length <= 3;
});

console.log("Normal filter method: " + lessThanThree);

/* Ex. 2: Implement a function: myFilter(array, callback)that takes an array as the first argument, 
and a callback as the second and returns a new (filtered) array according to the code provided in the callback 
(that is with the same behaviour as the original filter method). */



function myFilter(array, callback) {
    let myFilterNames = [];

    let newValue = callback(array);
    myFilterNames.push(newValue);

    return myFilterNames;
}

function callback(array) {
    let newArray = array.filter(function (name) {
        return name.length <= 3;
    });
    return newArray;
}

let newFilteredArray = myFilter(names, callback);

console.log('Ex. 2: ' + newFilteredArray);


/* Ex. 3: Create a new version of the two functions (without the array argument) which you should add to the Array prototype property so they can be called on any array as sketched below:
var names = ["Lars", "Peter", "Jan", "Bo"];
var newArray = names.myFilter(function(name) {…}); */

//For at definer vores egen funktion må vi starte med at deklarer den på Array.prototype ellers får vi en type error.
//Vi sender funktionen til Array.prototype.myOwnFilter og vi modtager den funktion som parameter.
Array.prototype.myOwnFilter = function (callback) {
    var filtered = [];

    //Vi looper over this og returner det som er <= 5
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) filtered.push(this[i]);
    }
    return filtered;
}

var lessThan5 = names.myOwnFilter(function (name) {
    return name.length <= 5;
})

console.log('MY own Array.prototype: ' + lessThan5);

