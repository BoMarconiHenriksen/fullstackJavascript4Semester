// https://engineering.salesforce.com/learn-javascript-closures-through-the-laws-of-karma-49d32d35b3f7
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// http://slides.mydemos.dk/javascript1/js.html#9

/* 
1) 
Implement and test the Closure Counter Example from the Slides
*/

// displayName() is only available within the body the init() function. 
// displayName() has access to the variables of outer functions
function init() {
    var name = "Mozilla"; // Local variable
    function displayName() { // Inner function --> a closure
        console.log(name); // Uses variable from the parent function
    }
    displayName();
}

init(); // creates a local variable name and an inner function called displayName().

/* 
This does exactly the same as the previous example
This may seem unintuitive, since local variables normally only exist for the duration of that function's execution
The reason is; that myFunc has become a Closure 
*/
function makeFunc() {
    var name = "Mozilla from myFunc().";
    function displayName() {
        console.log(name);
    }
    return displayName;
}
var myFunc = makeFunc(); //myFunc er nu en closure.

myFunc();

/* 
Emulating private methods with closures
JavaScript does not, like Java, provide a native way of providing private methods.
But it is possible to emulate this using closures. 
*/
var makeCounter = function () {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function () { changeBy(1); },
        decrement: function () { changeBy(-1); },
        value: function () { return privateCounter; }
    }
};

var counter1 = makeCounter();
var counter2 = makeCounter();
//counter1.increment();
//counter1.increment();
//alert(counter1.value()); /* Alerts 2 */

/* index.html for counter eksempel
    < button onclick = "test1()" > Count counter1</button >
        <span id="c1"></span>
        <button onclick="test2()" >Count counter2</button>
        <span id="c2"></span>

        <script>
            function test1(){
                counter1.increment();
            $("#c1").html(counter1.value());
        }
    function test2(){
                counter2.increment();
            $("#c2").html(counter2.value());
        }
</script> */

// Samme som ovenstående bare uden index.html
var makeCounter = function () {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function () {
            changeBy(1);
        },
        decrement: function () {
            changeBy(-1);
        },
        value: function () {
            return privateCounter;
        }
    }
};

var counter1 = makeCounter();
var counter2 = makeCounter();
console.log(counter1.value()); 
counter1.increment();
counter1.increment();
console.log(counter1.value()); 
counter1.decrement();
console.log(counter1.value()); 
console.log(counter2.value()); 

/* 
2)
Implement a reusable function using the Module pattern that should encapsulate information about a person (name, and age) and returns an object with the following methods:
setAge
setName
getInfo (should return a string like Peter, 45) 
*/

// Uddybning af module pattern: http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html

var personInfo = function () { // variable personInfo = anonym funktion som kan returner 3 funktioner 
    // var Persons = { firstName: "Bo", age: 43 }; // Virker også med denne her

    function Persons(firstName, age) {
        this.firstName = firstName;
        this.age = age;
    } 

   return {
        setFirstName: function (firstName) {
            Persons.firstName = firstName;
            
            console.log(firstName + ' er nu sat på objektet.');
        },

        setAge: function (age) {
           Persons.age = age;
            console.log(age + ' er nu sat på objektet.');
        },

        getInfo: function () {
            return console.log('Name: ' + Persons.firstName + ". Age: " + Persons.age + ".");
        }
    };
};

var savePersonInfo = personInfo();
savePersonInfo.setFirstName("Bob");
savePersonInfo.setAge(431);
savePersonInfo.getInfo();

// Eksempel på closure med getter og setter for en var variabel

var drink = "wine";

var foo = function(){
   var drink = "beer";

   return {
       getDrink: function(){return drink},
       setDrink: function(drnk){drink = drnk; return drink;}
   };
};

var bar = foo()

console.log( drink );  //wine
console.log( bar.getDrink() ); //beer
console.log( bar.setDrink("juice") );  //juice


// https://stackoverflow.com/questions/4862193/difference-between-variable-declaration-syntaxes-in-javascript-including-global/4862268#4862268
var ferie = "Italien";

function hvorHoldesFerie() {
    console.log(ferie);
}

hvorHoldesFerie();
Window.ferie = ferie;
// console.log(Window.ferie);








