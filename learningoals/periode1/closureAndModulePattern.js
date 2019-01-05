// Function Closures and the JavaScript Module Pattern
// Closure er en funktion, der er inden i en anden funktion. 
// Normalt når en funktion bliver kaldt og variablen er out of scope så slettes den.

var nameGlobal = 'Jens';

function sayHello(name) {
    var text = 'Hello ' + name;

    // Funktion, der returners.
    return function() {
        // kan referer til variabler fra den ydre funktion og globale variabler.
        console.log(text + ' and ' + nameGlobal); // Beholder referancen til text variablen. Slettes ikke.
    }
};

let myClosure = sayHello('Joe'); // myClosure er nu en funktion.
myClosure(); // Kalder funktionen der bliver returneret fra sayHello().


/* * * * * * * * */

// Modul Pattern
// Kan bruges til private funktioner.
// Den anonyme funktion virker som en warapper omkring de 3 indre funktioner, og derfor kan objektet ikke 
// tilgås udefra. Det skal ske gennem de indre funktioner.

// variablen personInfo = anonym funktion som kan returner 3 funktioner.
let personInfo = function() {
    // Kun indre funktioner har adgang til objektet. Objektet er delt mellem de 3 funktioner.
    // Konstruktør.
    function Person(firstName, age) {
      this.firstName = firstName;
      this.age = age;
    };
  
    // Indre funktioner. Kan returner værdier fra en funktion, og har adgang til objektet fra den ydre funktion.
    return {
      setFirstName: function(firstName) {
        Person.firstName = firstName;
  
        console.log(firstName + " er nu sat på objektet.");
      },
  
      setAge: function(age) {
        Person.age = age;
        console.log(age + " er nu sat på objektet.");
      },
  
      getInfo: function() {
        return console.log(
          "Name: " + Person.firstName + ". Age: " + Person.age + "."
        );
      }
    };
  };
  
  /* let savePersonInfo = personInfo(); // savePersonInfo er nu en funktion.
  savePersonInfo.setFirstName("Bob");
  savePersonInfo.setAge(50);
  savePersonInfo.getInfo(); */ // returner en funktion, der printer navn og alder.
