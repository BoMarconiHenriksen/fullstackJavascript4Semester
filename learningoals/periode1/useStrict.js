"use strict"

let theValue = 0;

// Skrive fejl. Går igennem fordi det bliver sat på det globale objekt.
// thValue = 1;

if (theValue > 0) {
    console.log('Hey!');
}; 

// Stopper dig i at bruge keywords, der er reserveret i fremtidig version af js.
/* var private = 0;
console.log(private); */ 

// Du kan ikke slette variabler, funktioner eller funktions arguments
/* var deleteMe = 1;
delete deleteMe; 

function deleteFunction() {};
delete deleteFunction;  */

/* function deleteFunction(name) {
    delete name;
}; */

// use strick mode gør eval lidt mere sikker. Leaker ikke a i eval i use strick mode.
// eval udfører en js expression ved at give den en string.
/* var a = 2;
eval("var a = 1");
console.log(a); */ 