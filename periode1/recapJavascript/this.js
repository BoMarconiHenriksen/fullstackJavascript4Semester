/* Read: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this 
Team up with another member of the class. Read about this in JavaScript 
(use the literature suggested for period-1) and 

implement at least three examples (individually) 
to illustrate how this in JavaScript differs from what we know from Java. 
One of the examples should include an example of explicit setting this using either call(), apply() or bind().

Explain to each other, using the examples (as if it was the exam):
How this in JavaScript differ from this in Java

Why we (because we did not explain about this) followed a pattern in our third semester controller and 
stored a reference to this (var self = this)?????????????????

this:



The purpose of the methods call(), apply() and bind() */
// call() - Metoden kalder en funktion med en given this værdi og argumenter stillet til rådighed individuelt.
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);
// expected output: "cheese"

// apply() - Metoden kalder en funktion med en given this værdi og argumenter stillet til rådighed som et array.
var numbers = [5, 6, 2, 3, 7];

var max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7

var min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2

// Hvad er forskellen på call og apply?
// Forskellen er at call() accepter en argument list og apply accepter et enkelt array af argumenter.

// bind() - Når du kalder f.bind(etObjekt) laves en ny funktion med den same body og scope som f, 
// men hvor this opstår i den originale funktion. 
// I den nye funktion er this permanent bundet til det første argument af bind, 
// lige meget hvordan funktion bliver brugt.
// OBS bind virker kun en gang på det samme objekt.
function f() {
  return this.a;
}

var g = f.bind({ a: 'azerty' });
console.log(g()); // azerty

var h = g.bind({ a: 'yoo' }); // bind only works once!
console.log(h()); // azerty

var o = { a: 37, f: f, g: g, h: h };
console.log(o.a, o.f(), o.g(), o.h()); // 37,37, azerty, azerty


// I browsere er window objektet også det globale objekt dvs uden for en funktion referer this til det globale objekt.
console.log(this === window); // true

a = 37;
console.log(window.a); // 37

this.b = "MDN";
console.log(window.b)  // "MDN"
console.log(b)


/* I en funktion afhænger værdien af this af hvordan funktionen bliver kaldt. */

/* Da koden ikke er i strick mode, og fordi værdien af this ikke er sat af kaldet, 
vil this referer til det globale objekt, som er window i en browser. */
function f1() {
  return this;
}

// In a browser:
f1() === window; // true 

// In Node:
f1() === global; // true

/* Dog vil værdien af this i strick mode forblive det som den var sat til i det den blive ececuted. 
I følgende eksempel er this undefined. 
 
Dvs i strick mode, hvis this ikke er defineret når funktionen udføres så forbliver this undefined.

Da f2 bliver kaldt direkte, og ikke som en metode eller property af et objekt(window.f2) er den undefined.
*/

function f2() {
  'use strict'; // 
  return this;
}

f2() === undefined; // true


/* To pass the value of this from one context to another, use call, or apply: */

// Et objekt kan passes som det første argument til call eller apply og så er this bundet til det.
var obj = { a: 'Custom' };

// This property er sat til det globale objekt
var a = 'Global';

function whatsThis() {
  return this.a;  // Værdien af this er afhænig af hvordan funktionen bliver kaldt
}

whatsThis();          // 'Global'
whatsThis.call(obj);  // 'Custom'
whatsThis.apply(obj); // 'Custom'

// https://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/
// this

/* 
this er en referance, der referer til et objekt. Vi bruger det som en genvej.
Når vi skriver person.firstName kan det være der er en global variabel som vi prøver at tilgå, og det kan give fejl
this bruges også til at referer til et objekt som funktionen(hvor this bliver brugt) er bundet til.
this referer ikke kun til objektet, men det indeholder også værdierne af objektet.
*/

var person = {
  firstName: "Penelope",
  lastName: "Barrymore",
  fullName: function () {
    // Notice we use "this" just as we used "he" in the example sentence earlier?:
    console.log(this.firstName + " " + this.lastName);
    // We could have also written this:​
    console.log(person.firstName + " " + person.lastName);
  }
}

/*
Alle funktioner i javascript har properties, ligesom objekter har properties.
Når en funktion executes får det this property - en variable med værdien af det objekt som 
kalder funktionen, hvor this bliver brugt.

this referancen referer ALTID til og holder værdien af et objekt - et enkelt objekt, og det bruges typisk inde i en funktion. 
Dog kan det godt bruges uden for en funktion i det globale scope.

I strick mode holder this værdien af undefined i global funktioner og i anonyme funktioner, der ikke er bundet til et objekt.

Eksempel på this i en closure
*/
var person = {
  firstName: "Penelope",
  lastName: "Barrymore",

  // Da this keywordet bruges inde i showFullName funktionen og
  // showFullName funktionen er defineret på person objektet,
  // vil this have værdien af person objektet fordi person objektet vil kalde showFullName.

  showFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  }

}

person.showFullName(); // showFullName bliver defineret på person objektet

/* 
VIGTIG AT FORSTÅ OMKRING this:
this tildeles først en værdi når objektet kalder funktionen, hvor this er defineret eks. person.showFullName.
*/

/* 
Selv om det virker til at this referer til objektet, hvor det er defineret, er det ikke før objektet kalder(invokes) 
this funktionen, person.showFullName(), at this får tildelt en værdi. Værdien som tildeles er kun baseret på det
objekt der kalder this funktionen dvs person.showFullName.
For det meste har this værdien fra det kaldte objekt. Dog er der omstændigheder, hvor this ikke har værdien af det kaldte objekt.
*/

/* 
BRUGEN AF this I DET GLOBALE SCOPE

*/




