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
var f2 = function () {
    console.log("Yes, but I'm f2");
}

/* 
Variabl hoisting
Resultatet her bliver: x er 5 og y er undefined.
Det sker fordi det kun er deklarationen, der bliver flyttet op. Initialisering bliver nede. 
*/
var x = 5;

console.log("x er " + x + " y er " + y);

var y = 7;

/* 
Hoisting i es6.
*/

// this in JavaScript and how it differs from what we know from Java/.net.



// Function Closures and the JavaScript Module Pattern



// Immediately-Invoked Function Expressions (IIFE)



// JavaScripts Prototype



// User defined Callback Functions (writing your own functions that takes a callback)



// Explain the methods map, filter and reduce



// Provide examples of user defined reusable modules implemented in Node.js


// ES6-7 and TypeScript
// Provide examples and explain the es2015 features: let, arrow functions, this, rest parameters, de-structuring assignments, maps/sets etc.


// Explain and demonstrate how es2015 supports modules (import and export) similar to what is offered by NodeJS.


// Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.


// Provide examples with es6, running in a browser, using Babel and Webpack


// Provide an number of examples to demonstrate the benefits of using TypeScript, including, types, interfaces, classes and generics


// Callbacks, Promises and async/await
// Explain about promises in ES-6 including, the problems they solve, a quick explanation of the Promise API and:



// Example(s) that demonstrate how to avoid the callback hell  (“Pyramid of Doom")
// Example(s) that demonstrate how to execute asynchronous (promise-based) code in serial or parallel
// Example(s) that demonstrate how to implement our own promise-solutions.
// Example(s) that demonstrate error handling with promises

// Explain about JavaScripts async/await, how it relates to promises and reasons to use it compared to the plain promise API.
// Provide examples to demonstrate 
// Why this often is the preferred way of handling promises
// Error handling with async/await
// Serial or parallel execution with async/await.



