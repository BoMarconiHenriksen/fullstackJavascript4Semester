/* Ex. 1: Use the names-array created in Filter.js, and, using its map method, create a new array with all names uppercased. */

var names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Allan", "Ib"];

var uppercasedNames = names.map(function (uppercasedName) {
    return uppercasedName.toUpperCase();
});

console.log(uppercasedNames);


/* Ex. 2: Implement a function: myMap(array, callback)that, 
provided an array and a callback, provides the same functionality as calling the existing map method on an array. */

function myMap(array, callback) {
    returnArray = [];
    let newValue = callback(array); //Kalder callbacken, der returner et nyt array, hvor alle elementer er uppercased.

    returnArray.push(newValue);

    return returnArray;
}

function callback(array) {
    let newArray = [];
    newArray = names.map(function (uppercase) {
        return uppercase.toUpperCase();
    });
    return newArray;
}

let uppercased = myMap(names, callback)

console.log('Ex. 2: ' + uppercased);


/* Ex. 3: Create a new version of the two functions (without the array argument) which you should add to the Array prototype property so they can be called on any array as sketched below:
var names = ["Lars", "Peter", "Jan", "Bo"];
var newArray = names.myFilter(function(name) {…}); */

//For at definer vores egen funktion må vi starte med at deklarer den på Array.prototype ellers får vi en type error.
//Vi sender funktionen til Array.prototype.myOwnFilter og vi modtager den funktion som parameter.

Array.prototype.myOwnMap = function (callback) {
    let newArray = []
    for (var i = 0; i < this.length; i++) { //Iterer gennem arrayet, der er repræsenteret af this.
        let newVal = callback(this[i]) //cb tager en input værdi og ændrer værdien til noget andet. Hvordan????
        newArray.push(newVal) //Pusher den nye værdi til et nyt array.
    }
    return newArray;
}

var newUppercased = names.myOwnMap(function (name) {
    return name.toUpperCase();
});

console.log('myOwnMap: ' + newUppercased);


/* Ex. 4a) Use map() to create to create the <li>’s for an unordered list and eventually a string like below (use join() to get the string of <li>’s):
<ul>
  <li>Lars</li>
  <li>Peter</li>
  <li>Jan</li>
  <li>Bo</li>
<ul> */

//Mangler <ul></ul>
let listWithLi = names.map(function (ul) {
    return "<li>" + ul + "</li>";
}).join("\n");

console.log(listWithLi);

/* Ex. 4b) Use map()+(join + ..) to create to create a string, representing a two column table, for the data given below: */
var nameList = [{ name: "Lars", phone: "1234567" }, { name: "Peter", phone: "675843" }, { name: "Jan", phone: "98547" }, { name: "Bo", phone: "79345" }];

let list2ColumnTable = nameList.map(function (ul) {
    return ul.name + "\t" + ul.phone;
}).join("\n");

console.log(list2ColumnTable);

/* Ex. 4c) Create a single html-file and test the two examples given above.
Se maven projektet RecapJavascript */

/* Ex. 4d) Add a button with a click-handler and use the filter method to find only names with a length >3.
Se maven projektet RecapJavascript */




