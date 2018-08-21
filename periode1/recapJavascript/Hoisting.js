/* Team up with another member of the class. 
Read about hoisting (use literature suggested for period-1) and 
implement at least two examples (individually) to illustrate that:
Function declarations are completely hoisted
var declarations are also hoisted, but not assignments made with them */

//Functions are hoisted
//Resultat af kode er at f1 bliver skrevet ud(Hele funktionen hoistes) og
//der kommer en uncaught type error da var var f2 flyttes op i toppen og
//den tager ikke selve funktionen med dvs tildelingen.

f1();
f2();

function f1() {
    console.log("I'm f1");
}
var f2 = function () {
    console.log("Yes, but I'm f2");
}



// Resultatet her bliver: x er 5 og y er undefined.
//Det sker fordi det kun er deklarationen, der bliver flyttet op. Initialisering bliver nede.
var x = 5;

console.log("x er " + x + " y er " + y);

var y = 7;

//Hvad er hoisting?
//Hoisting betyder at deklaringen af variabler, lige meget hvor i filen den bliver deklaret, 
//bliver flyttet op i toppen af dokumentet.
//Der opstår et problem, da initialisering bliver nede i filen.
//Det kan løses ved at alle deklaringer sker i toppen af filen.

//Hvad er forskellen på var og let
// var er global og let har et begærnset scope. Det kan være en fordel at bruge let i en metode eller i nestet if statements, hvor
//variablen ikke må være global.

