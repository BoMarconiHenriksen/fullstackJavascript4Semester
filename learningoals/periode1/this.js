/* 
I Node er det globale scope for et modul selve modulet(sig selv).
Så når du deklarer en variable i det globale scope,
 vil derfor være lokal for det modul.
*/
console.log(this);

/* this.tal = 1;
console.log(this);
console.log(this.tal); */

// Når vi printer this inde fra en funktion referer den til det globale objekt.
/*(function () {
    // console.log(this);

     this.name = "Hans";
    console.log("this.name " + this.name);
    console.log("global.name " + global.name);
    console.log('name ' + name); 
}());*/

// Peger this altid på det globale objekt? Nej...
let car = {
    checkThis: function () {
        console.log(this);
    }
};

// car.checkThis();
// console.log(car); // this peger på car objektet.

// Vi kan konkluder at...
// this peger på objektet som funktionen er deklaret på... er det rigtigt?
let myFunction = car.checkThis;
myFunction(); // printer det globale objekt!

// Forvirende ja!
// I js bliver this bestemt ud fra, hvordan funktionen bliver kaldt.

// Hvorfor virker det her?
// Hvis vi kalder checkThis funktionen med car som kalde objektet(caller object),
// så vil this inde i funktionen være car.
// car.checkThis(); 

// Hvorfor virker det ikke her?
// Hvis der ikke er et kalde objekt(calling contexts), så vil js som default sætte this til det globale objekt.
/* let myFunction = car.checkThis;
myFunction(); */

// DET STORE PROBLEM! 2 funktioner i samme objekt.
var horse = {
    checkThis: function () {
        //"use strict"; // En løsning er at bruge strict mode, da det globale objekt ikke er default mere.
        console.log("FØRSTE KALD!! " + this);

        function checkOther() { // Da der ikke er noget kalde objekt så referer den til det globale objekt.
            console.log("ANDET KALD!! " + this);
        }
        checkOther();
    }
};

horse.checkThis();

// use strict stopper this keywordet med at være det globale objekt.
// En løsning kan være at stabilisere this med en variable som vi kalder self.
let cow = {
    checkThis: function () {
        let self = this; // Her er this ko objektet, og det bliver nu givet videre med variablen self.
        console.log(self);

        function checkOther() { 
            console.log(self);
            self.moo = 1;
        }
        checkOther();
        console.log(self.moo);
    }
};

cow.checkThis();