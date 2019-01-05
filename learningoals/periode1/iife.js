// IIFE - En funktion der bliver til en expression og udføres med det samme.
// ( ) rundt om function og } gør at vi kan kalde funktion(invokable).  
// ( ) til sidst kalder funktionen. Kalder funktionen med det samme.  


// Der er ikke adgang til variablen uden for funktionens scope.
(function () { 
    var aName = "Barry";
})();

aName // throws "Uncaught ReferenceError: aName is not defined"


// Eksempel på iife.
// result gemmer resultatet af funktionen, og ikke selve funktionen.
/* var result = (function () { 
    var name = "Barry"; 
    return name; 
    // console.log(name);
})(); */ 

// Kalder funktion med det samme. 
// console.log(result); // "Barry"