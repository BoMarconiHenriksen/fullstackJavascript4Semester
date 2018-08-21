/* Ex. 4a) Use join to create a single string from all, with names: comma-, space. and  # - separated. */

var all = ["Lars", "Peter", "Jan", "Bo"];

let kommaString = all.join(", ");
let spaceString = all.join(" ");
let hashTagString = all.join("# ");

console.log("Komma: " + kommaString);
console.log("SpaceString: " + spaceString);
console.log("HashTagString: " + hashTagString);


/* Ex. 4b) Given this array: var numbers = [2, 3, 67, 33]; 
Create a reducer function that will return the sum (105) of all values in numbers
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce */

let numbers = [2, 3, 67, 33];

function getSum(total, num) { //Retur værdien gemmes i en akkumulator som her er total
    return total + num;
};

//Samme men bare som arrow funktion
const reducer = (accumulater, currentValue) => accumulater + currentValue;

console.log("Ex. 4b - Almindelig funktion: " + numbers.reduce(getSum));
console.log("Ex. 4b - Arrow funktion: " + numbers.reduce(reducer));


/* Ex. 4c)  Given this array:
var members = [
 {name : "Peter", age: 18},
 {name : "Jan", age: 35},
 {name : "Janne", age: 25},
 {name : "Martin", age: 22},
]
Create a reducer function that will return the average age of all members.
Hint: The reduce callback takes two additional arguments as sketched below:
var reducer = function(accumulator, members,index,arr ){
Index is the current index for which the value (members) are passed in, and arr is the array.
Use this to return different values from your reduce-function, according to whether you have reached the last element or not. */

var members = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 },
]


//VIRKER IKKE!!! 
var initialValue = 0;

var avarageAge = function (accumulator, member, index, arr) {

    if (index < arr.length) {
        return accumulator + (member = arr[index].age);
        /* let number = arr[index].age;
        console.log("NUMBER: " + number);
        console.log('Total: ' + accumulater);
        return accumulater + number; */

    } else {
        console.log('else');
        return Math.floor(accumulator / arr.length);
    }
}

//  console.log("Resultat: " + members.reduce(avarageAge));

var initialValue = 0;
var sum = members.reduce(function (accumulator, currentValue, index) {
    console.log('index ' + index);
    console.log('members ' + members.length);

    if (index < members.length) {
        console.log('accumulator: ' + accumulator);
        console.log('currenValue: ' + currentValue.age);
        return accumulator + currentValue.age;
    } else {
        console.log('Else!');
        return Math.floor(accumulator / members.length);
    }

}, initialValue);

let average = sum / members.length;
console.log(average)


var members = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 },
];

function reduceMembers(arrayM) {
    var sum = arrayM.reduce(function (a, b) { return { age: a.age + b.age } });

    return sum.age / arrayM.length;
}

console.log("Reduce with arrow: " + reduceMembers(members));


/* EX. 4d) (difficult) Imagine you were to create a system that could count votes for the presidential election in USA.
Given this array of votes: 
var votes = [ "Clinton","Trump","Clinton","Clinton","Trump","Trump","Trump","None"];
Create a reduce function, that will return a single object like {Clinton: 3, Trump: 4, None: 1 } */
var votes = ["Clinton", "Trump", "Clinton", "Clinton", "Trump", "Trump", "Trump", "None"];

var countedNames = votes.reduce(function (allVotes, vote) {
    if (vote in allVotes) {
        allVotes[vote]++;
    }
    else {
        allVotes[vote] = 1;
    }
    return allVotes;
}, {});

console.log(countedNames);

