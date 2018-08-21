/* 
1) Create an object with four different properties, with values, of your own choice (ex: name, birthday, hobby, email).
name, birthday, hobby og email er objektets properties.
*/

var Members = new Object();
Members.name = "Bo";
Members.birthday = "20051939";
Members.hobby = "Football";
Members["email"] = "bo@myemail.com"; // properties kan også skrives sådan her.

console.log(Members.name);
console.log(Members);

/* 
Use a foreach loop to demonstrate that we can iterate over the properties in an object.
*/

Object.getOwnPropertyNames(Members).forEach(function (key) {
    console.log("getOwnPropertyNames: " + key);
});

Object.keys(Members).forEach(function (key) {
    console.log("keys: " + key);
});


/* 
Use the delete keyword to demonstrate we can delete existing properties from an object 
(delete a property, and iterate over the properties again) 
*/

delete Members.name;
delete Members["hobby"];

Object.keys(Members).forEach(function (key) {
    console.log("After deleted: " + key);
});


/*
Use the function (inherited from Object) hasOwnProperty() to test 
whether a property exist (directly) on your object (test with both and existing, and non-existing property).
 */

if (Members.hasOwnProperty("name")) {
    console.log('Email is a property');
} else {
    console.log('Is not a property');
}


/* 
2)
Create a Constructor function to create new Persons having:
a firstName, lastName and an age.
*/

// Når vi bruger en konstruktør kan vi bruge new til at lave en ny instance af objektet.
// Vi bruger this til at tildele værdier til objektets properties baseret på de værdier, 
// der bliver passed til funktionen.

function Persons(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

var medlemEt = new Persons("Bo", "Henriksen", 43);


/*
A method to get details about the Person
 */

function getPerson() {
    return console.log('Person: ' + medlemEt.firstName + " " + medlemEt.lastName + ", age: " + medlemEt.age);
};

getPerson();

/* 
3)
Create an object of your own choice and list all properties in the object using one of the function given here 
“Enumerate the properties of an object”:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Enumerate_the_properties_of_an_object
*/

function Car(name, color, engine, year) {
    this.name = name;
    this.color = color;
    this.engine = engine;
    this.year = year;
}

var carOne = new Car("Ford", "Green", "V50", 2017);

// for...in loops
// This method traverses all enumerable properties of an object and its prototype chain
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

var string1 = "";
var object1 = {a: 1, b: 2, c: 3};

for (var property1 in object1) {
  string1 = string1 + object1[property1];
}

console.log(string1);

//Get object properties and values.
//  iterates over all the object's enumerable, 
// non-Symbol properties and returns a string of the property names and their values.
var obj = {a: 1, b: 2, c: 3};
    
for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Obejct.keys()
// Method returns an array of a given object's property names, in the same order as we get with a normal loop.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
const object2 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.keys(object2));
// Object.getOwnPropertyNames() method returns an array of all properties 
// (including non-enumerable properties except for those which use Symbol) found directly upon a given object.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
const object3 = {
    a: 1,
    b: 2,
    c: 3
  };
  
  console.log(Object.getOwnPropertyNames(object3));

/*
Delete one of the properties in your object, and use the method above to verify that this is possible in JavaScript.
*/ 
for (const prop in obj) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }

delete obj.a;

for (const prop in obj) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }

/*
The need to enumerate all properties in an object is a very common problem, and something you should get familiar with.
See slides for info related to Constructor Functions
*/



