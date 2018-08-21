/* Immediately Invoked Function Expressions - IIFE
Team up with another member of the class.

Read about Immediately Invoked Function Expressions (IIFE) in JavaScript 
(here you probably have to Google, and find your own references).

Implement 1-2 examples to illustrate its purpose.

Explain to each other, using the examples (as if it was the exam):
The purpose of Self Invoking Functions (just another name for the same thing)
https://medium.com/@vvkchandra/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6
*/

/* 
IFFE er en expression, der bliver udført med det samme, og dør lige så snart den er udført.
IFFE tager en funktion, gør den til en expression og udfører den med det samme.
Dette eksempel er godt, hvis man ikke ønsker en retur værdi.
*/

!function() { // ! gør at javascript behandler det som kommer lige efter som en expression. Kan også bruge void, +, - eller ~.
    console.log('Hello from IIFE!');
}(); //Gør at den bliver udført med det samme.

// IFFE gør en funktion til en expression. Her er 3 varianter.

// Variation 1
(function() {
    console.log('Hello from IIFE!');
}());

// Variation 2
(function() {
    console.log('I am an IIFE, too!');
})();

// Variation 3
(function initGameIIFE() {
    // All your magical code to initalize the game!
}());


/* 
Alle variabler, der deklareres inde i en IFFE er ikke synlige uden for IFFEen. 
Dvs den kan bruges til at lave private variabler eller afgrænse scopet, hvis variabler og funktioner ikke bruges andre steder.
Det er muligt at give privileged og controled adgang til de private variabler uden for IFFE.
*/

(function IIFE_initGame() {
    // Private variables that no one has access to outside this IIFE
    var lives;
    var weapons;
    
    init();

    // Private function that no one has access to outside this IIFE
    function init() {
        lives = 5;
        weapons = 10;
    }
}());


/* 
Det er muligt at returner en værdi inde fra IFFE ved at assigne en variable.
*/

var result = (function() {
    return "From IIFE";
}());

console.log(result); // alerts "From IIFE"


/* 
Klassisk module pattern - Dette er IFFE og closures på steroider.
Her er et eksemple på et klassisk singleton objeckt, med private variabler og funktioner.
Det er kun muligt at adgang vha closures.
*/

var Sequence = (function sequenceIIFE() {
    
    // Private variable to store current counter value.
    var current = 0;
    
    // Object that's returned from the IIFE.
    return {
        getCurrentValue: function() { //objekt, der returner værdien i current.
            return current;
        },
        
        getNextValue: function() { //incrementer værdien i current.
            current = current + 1;
            return current;
        }
    };
    
}());

console.log(Sequence.getNextValue()); // 1
console.log(Sequence.getNextValue()); // 2
console.log(Sequence.getCurrentValue()); // 2


/* 
Det er muligt at undgå parentesen, hvis der er noget foran funktionen. 
Dog kan det være en god ide at tilføje den så man fra starten ved at det er en IFFE.
*/

var result = function() {
    return "From IIFE!";
}();
