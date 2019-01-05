// Explain using sufficient code examples the following features in JavaScript.
// Variable/function-Hoisting

/* 
Functions are hoisted
Resultat af kode er at f1 bliver skrevet ud(Hele funktionen hoistes) og
der kommer en uncaught type error da var var f2 flyttes op i toppen og
den tager ikke selve funktionen med dvs tildelingen. 
*/

f1();
f2();

function f1() {
  console.log("I'm f1");
}
var f2 = function() {
  console.log("Yes, but I'm f2");
};

/* 
Variabl hoisting
Resultatet her bliver: x er 5 og y er undefined.
Det sker fordi det kun er deklarationen, der bliver flyttet op. Initialisering bliver nede. 
*/
var x = 5;

console.log("x er " + x + " y er " + y);

var y = 7;

// this in JavaScript and how it differs from what we know from Java/.net.
// call
let person1 = { firstName: "Jon", lastName: "Kuperman" };
let person2 = { firstName: "Kelly", lastName: "King" };

function sayUndefined() {
  console.log(this.firstName + " " + this.lastName);
}

/* function say(greeting) {
    console.log(greeting + " " + this.firstName + " " + this.lastName);
  }  */

sayUndefined(person1, "Hello"); // undefined undefined - this referer til det globale objekt.

say.call(person1, "Hello"); // Hello Jon Kuperman
say.call(person2, "Hello"); // Hello Kelly King

// apply
let person1 = { firstName: "Jon", lastName: "Kuperman" };
let person2 = { firstName: "Kelly", lastName: "King" };

function say(greeting) {
  console.log(greeting + " " + this.firstName + " " + this.lastName);
}

say.apply(person1, ["Hello"]); // Hello Jon Kuperman
say.apply(person2, ["Hello"]); // Hello Kelly King

// Brug apply til at lægge et array sammen med et eksisterende array.
let array = ["a", "b"];
let elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]

//bind
let person1 = { firstName: "Jon", lastName: "Kuperman" };
let person2 = { firstName: "Kelly", lastName: "King" };

function say() {
  console.log("Hello " + this.firstName + " " + this.lastName);
}

let sayHelloJon = say.bind(person1);
let sayHelloKelly = say.bind(person2);

sayHelloJon(); // Hello Jon Kuperman
sayHelloKelly(); // Hello Kelly King




// Function Closures and the JavaScript Module Pattern
// variable personInfo = anonym funktion som kan returner 3 funktioner
let personInfo = function() {
  // Constructor
  function Persons(firstName, age) {
    this.firstName = firstName;
    this.age = age;
  }

  // Innerfunctions that can return values from a function and have access to the constructor.
  return {
    setFirstName: function(firstName) {
      Persons.firstName = firstName;

      console.log(firstName + " er nu sat på objektet.");
    },

    setAge: function(age) {
      Persons.age = age;
      console.log(age + " er nu sat på objektet.");
    },

    getInfo: function() {
      return console.log(
        "Name: " + Persons.firstName + ". Age: " + Persons.age + "."
      );
    }
  };
};

let savePersonInfo = personInfo();
savePersonInfo.setFirstName("Bob");
savePersonInfo.setAge(431);
savePersonInfo.getInfo();


// Immediately-Invoked Function Expressions (IIFE)
// OBS Denne her er rød. Hvis du har tid find et eksemple med private variabler og funktioner i en iife.
// ! gør at javascript behandler det som kommer lige efter som en expression.
// Kan også bruge void, +, - eller ~.
!(function() {
  console.log("Hello from IIFE!");
})(); //Gør at den bliver udført med det samme.


// JavaScripts Prototype
//For at definer vores egen funktion må vi starte med at deklarer den på Array.prototype ellers får vi en type error.
//Vi sender funktionen til Array.prototype.myOwnFilter og vi modtager den funktion som parameter.
let names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Allan", "Ib"];

Array.prototype.myOwnMap = function(callback) {
  let newArray = [];
  for (var i = 0; i < this.length; i++) {
    //Iterer gennem arrayet, der er repræsenteret af this.
    let newVal = callback(this[i]); //cb tager en input værdi og ændrer værdien til noget andet. Hvordan????
    newArray.push(newVal); //Pusher den nye værdi til et nyt array.
  }
  return newArray;
};

let newUppercased = names.myOwnMap(function(name) {
  return name.toUpperCase();
});

console.log("myOwnMap: " + newUppercased);

// User defined Callback Functions (writing your own functions that takes a callback)
let names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Allan", "Ib"];

function myMap(array, callback) {
  let returnArray = [];
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

console.log(uppercased);


// Explain the methods map, filter and reduce
// Map
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Allan", "Ib"];

var uppercasedNames = names.map(function(uppercasedName) {
  return uppercasedName.toUpperCase();
});

console.log(uppercasedNames);

// Filter
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Allan", "Ib"];

var lessThanThree = names.filter(function(name) {
  return name.length <= 3;
});

console.log("Normal filter method: " + lessThanThree);

// Reduce
let numbers = [2, 3, 67, 33];


//Retur værdien gemmes i en akkumulator som her er total
//HVIS DU HAR TID LAV DEN SOM ARROW FUNKTION!!!
let numbers = [2, 3, 67, 33];

function getSum(total, num) {
  return total + num;
}

console.log("Almindelig funktion: " + numbers.reduce(getSum));

//Reduce tæller her antallet af stemmer.
var votes = [
  "Clinton",
  "Trump",
  "Clinton",
  "Clinton",
  "Trump",
  "Trump",
  "Trump",
  "None"
];

var countedNames = votes.reduce(function(allVotes, vote) {
  if (vote in allVotes) {
    allVotes[vote]++;
  } else {
    allVotes[vote] = 1;
  }
  return allVotes;
}, {});

console.log(countedNames);


// Provide examples of user defined reusable modules implemented in Node.js
var filter = require("./require"); //Assigner vores module til filter.

// SE PÅ DENNE HER, OG LAV ET BEDRE EKSEMPEL!!!
filter(function(err) {
  // filter er variablen som er initialiseret med require('./filtered');
  if (err) return console.error("There was an error:", err);
});


// ES6-7 and TypeScript
// Provide examples and explain the es2015 features: let, arrow functions, this, rest parameters, de-structuring assignments, maps/sets etc.
// LET
// Variabel deklareret med let har deres scope i den block, hvor de er defineret. 
// Forskellen mellem var og let er scopet. 

//Funktions scope. Scopet for var er hele funktionen.
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // Samme variabel!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}
console.log(x); // x is not defined

// Let har block scope.
function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // Forskellig variabel!
    console.log(x);  // 2
  }
  console.log(x);  // 1
}

// ARROW FUNCTIONS
function plus(a, b) {
  return a + b;
}

var foo = (a, b) => {
  return a + b;
}

// Arrow funktion med callback. Return implicit.
let age = [30, 40, 50];

let liArray = age.map(number => "<li>" + number + "</li>"  ).join(" "); 

console.log(liArray); // [ '<li>30</li>', '<li>40</li>', '<li>50</li>' ]

// Bind med arrow function.
// Arrow function har lexical scope.

// I es5 kan this give problem. Kan løses med bind()
// Uden for funktionen referer this til det globale objekt.
var bunny = {
  name: "Usagi",
  tasks: ["transform", "eat cake", "blow kisses"],
  showTasks: function() {
    this.tasks.forEach(function(task) {
      console.log(this.name + " wants to " + task);
    }); //.bind(this)
  }
};

bunny.showTasks();
// [object Window] wants to transform
// [object Window] wants to eat cake
// [object Window] wants to blow kisses

// I es6 kan det løses med arrow funktion.
var bunny = {
  name: "Usagi",
  tasks: ["transform", "eat cake", "blow kisses"],
  showTasks() {
    this.tasks.forEach(task => {
      console.log(this.name + " wants to " + task);
    });
  }
};

bunny.showTasks();
// Usagi wants to transform
// Usagi wants to eat cake
// Usagi wants to blow kisses





// REST PARAEMTERS
// Du kan tildele resten af variablerne til ...rest. Returners som array.
[a, b] = [10, 20];

console.log(a); // 10

console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50]; // Her tildeles 30, 40 og 50 til rest.
c = [a, b, ...rest] 
d = [...rest]

console.log(rest); // [30,40,50]
console.log(c); // [ 10, 20, 30, 40, 50 ]
console.log(d); // [ 30, 40, 50 ] 

// Du kan kalde metoder på rest f.eks. map metoden.
let liArray = rest.map( number => "<li>" + number + "</li>"  ); 
console.log(liArray); // [ '<li>30</li>', '<li>40</li>', '<li>50</li>' ]


// DESTRUCTURING af et objekt.
let Person = {fName: "Bob", lName: "Hansen"};

// Normalt
let forNavn = Person.fName;
let efterNavn = Person.lName;
console.log(forNavn, efterNavn); // Bob Hansen

// Med deconstruct
let {fName, lName} = Person;

console.log(fName, lName); // Bob Hansen

// Tildel resten af et array til en variabel
let [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]

// Eksempel på at bytte plads med dekonstruction.
let e = "Første", f =  "Andet";
console.log(e, f); // Første Andet

// 2 variabler kan bytte plads i en deconstruct expression.
[e , f] = [f , e] 

console.log(e, f); // Andet Første

// MAP/SETS ???



// Explain and demonstrate how es2015 supports modules (import and export) similar to what is offered by NodeJS.
// Eksporterede moduler er i strick mode.
// ER IKKE SUPPORTED AF NODE ENDNU! LÆG OPGAVEN OVER I BABEL OG WEBPACK!!!!
import cube from "moduleEs6.js";
let a = cube(3);
console.log(a);
// console.log(cube(3)); // 27


// Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.
// class og constructer er nyt i es6.
class Vehicle {
 
  constructor (name, type) {
    this.name = name;
    this.type = type;
  }
 
  getName () {
    return this.name;
  }
 
  getType () {
    return this.type;
  }
 
}
// extends er ny i es6.
// Vi bruger extends til at arve fra en anden klasse.
// Når der er en kunstruktør i klassen, så skal du kalde super() før du kan bruge this.
// getName overskrives.
class Car extends Vehicle {
 
  constructor (name) {
    super(name, 'car');
  }
 
  getName () {
    return 'It is a car: ' + super.getName();
  }
 
}
let car = new Car('Tesla');
console.log(car.getName()); // It is a car: Tesla
console.log(car.getType()); // car

// Provide examples with es6, running in a browser, using Babel and Webpack
// SE FOLDER


// Provide an number of examples to demonstrate the benefits of using TypeScript, including, types, interfaces, classes and generics
// SE FOLDER


// Callbacks, Promises and async/await
// Explain about promises in ES-6 including, the problems they solve, a quick explanation of the Promise API and:

// Example(s) that demonstrate how to avoid the callback hell  (“Pyramid of Doom")






// Example(s) that demonstrate how to execute asynchronous (promise-based) code in serial or parallel
// Serial or parallel execution with async/await
// SERIAL
const fetch = require("node-fetch");

 async function serial(count) {
  swappiPeople = [];
  for (let i = 1; i < count; i++) {
    swappiPeople.push(
       
      await fetch("https://swapi.co/api/people/" + i)
        .then(res => { return res.json() }));
  }
  console.log(swappiPeople.map(p=>p.name).join(", "));
}
serial(15);

// Parallel
 async function parallel(count) {
  swappiPeople = [];
  for (let i = 1; i < count; i++) {
    swappiPeople.push(
      
      fetch("https://swapi.co/api/people/" + i)
        .then(res => { return res.json() }));
  }
  const allEntries = await Promise.all(swappiPeople);
  console.log(allEntries.map(p=>p.name).join(", "));  
  
}

parallel(15);


// Example(s) that demonstrate how to implement our own promise-solutions.
const crypto = require('crypto');

function makeSecureRandom(size) {
    return new Promise(function (resolve, reject) {
        crypto.randomBytes(size, (err, buf) => {
            if (err) return reject(err);
            
            let object = { "length": buf.length, "random": buf.toString('hex') };
            resolve(object);
            
        });
    })
}

async function solveSecureRandom() {
    let storeSecureRandoms = { "title": "6 secure randoms", "randoms": [] }
    let promises = [makeSecureRandom(48), makeSecureRandom(40), makeSecureRandom(32), makeSecureRandom(24), makeSecureRandom(16), makeSecureRandom(8)];
    storeSecureRandoms.randoms = await Promise.all(promises);
    console.log(storeSecureRandoms);
}

solveSecureRandom();



// Example(s) that demonstrate error handling with promises
// For at tjekke at et fetch er succefuldt start med at tjekke at promise er resolvet.
// Derefter tjek at Response.ok property er true.
const fetch = require("node-fetch");
const URL = "https://swapi.co/api/people/1";
fetch(URL)
  .then(function(response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Network response was NOT ok!");
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson)); // Kommer ud som en string.
  })
  .catch(function(error) {
    console.log("Fejl ved fetch: " + error.message);
  });


// Explain about JavaScripts async/await, how it relates to promises and reasons to use it compared 
// to the plain promise API.
// Provide examples to demonstrate





// Why this often is the preferred way of handling promises




// Error handling with async/await
const fetch = require("node-fetch");

async function getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id) {
  try {
    const URL = "https://swapi.co/api/people/";

    const n = await fetch(URL + id).then(res => res.json());
    const f = await fetch(n.films[0]).then(res => res.json());
    const s = await fetch(f.species[0]).then(res => res.json());
    const p = await fetch(s.homeworld).then(res => res.json());
    return ("Name: " + n.name + ", Title: " + f.title + ", Specie: " + s.name + ", Planet: " + p.name);
  } catch (err) {
    console.log(err);
  }
}

let starWarsInfo2 = getPlanetforFirstSpeciesInFirstMovieForPersonAsync(1);
starWarsInfo2.then(function(result) {
  console.log("Med await: " + result);
});  






