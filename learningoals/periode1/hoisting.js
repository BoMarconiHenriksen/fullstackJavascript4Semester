
// Funktioner hoisting.
f1();
f2();

// Hele funktionen hoistes.
function f1() {
  console.log("I'm f1");
} 

// Type error da f2 hoistes, og tildelingen ikke flyttes med.
var f2 = function() {
  console.log("Yes, but I'm f2");
};

/* 
Variabl hoisting
*/

// Ok da deklaring og initiering er i toppen.
// var x = 5;

// console.log("x er " + x + " y er " + y);

// Undefined da tildelingen ikke flyttes med.
// var y = 7;