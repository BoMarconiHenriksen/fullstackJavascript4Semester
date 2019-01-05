// User defined Callback Functions (writing your own functions that takes a callback)
let names = ["lars", "jan", "peter", "bo", "frederik", "allan", "ib"];

function myMap(array, callback) {
    //Kalder callbacken, der returner et nyt array, hvor alle elementer er uppercased.
    let newValue = callback(array); 

    return newValue;
};

function callback(array) {
    let newArray = [];
    newArray = array.map(function (uppercase) {
        return uppercase.toUpperCase();
  });
    return newArray;
};

let uppercased = myMap(names, callback);

console.log(uppercased);
