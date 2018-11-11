/* 
    Da værdien af this er afhænig af, hvordan funktionen kaldes,
    kan vi stabilisere this med call, apply eller bind.
*/

// call()
/* var horse = {
    checkThis: function () {
        // this er objektet horse.
        function checkOther() { 
            console.log(this);
        }
        checkOther.call(this); // this er objektet horse.
    }
};

horse.checkThis(); */

// call tager værdien af this(første parameter) og parameter som komma separede liste.
function a(b, c, d) {
    console.log(this);
    console.log(b);
    console.log(c);
    console.log(d);
};

// Første parameter er det som this skal være
// a.call(1, 2, 3, 4);

// apply virker som call bortset fra at den tager parameter som et array.
// a.apply(1, [2, 3, 4])

/* 
Hvorfor er der både call og apply?
Normalt vil man brgue call med mindre at funktionen tager en række parameter.
Eks.
*/

// I js kan du give en række variabler som parameter uden af have de variabler i funktions definition.
// De bliver parsed ind som et arguments array. Kan gøres med alle funktioner.
function sum() {
    var total = 0;
    for(var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    };
    return total;
};

// var x = sum(1, 2, 3);

/* var things = [10, 20, 2, 8, 60];
var x = sum.apply(null, things); // I stedet for at have en hardcoded liste af numre.
console.log(x); */

// bind()
// Med bind kan vi, når vi skriver vores funktion bestemmer,
// hvad this skal være dvs ikke når vi kalder den.
/* var a = function() {
    console.log(this);
}.bind(1);  */// Du giver det med som this skal være. binder/låser 1 til this.

// Lige meget, hvor vi kalder a vil den altid være 1
/* a();
a(); */

// Det her bliver også 1.
/* var horse = {
    func: a
};

horse.func(); */

// virker kun med function expressions dvs med var a = function... da det svarer til:
/* var a = function() {
    console.log(this);
};

a = a.bind(1);

a(); */

// bind i vores tidligere eksempel.
/* var horse = {
    checkThis: function () {
        var checkOther = function() { 
            console.log(this);
        }.bind(this); // this er objektet horse.
        checkOther(); 
    }
};

horse.checkThis(); */
