// https://www.youtube.com/watch?v=AfWYO8t7ed4
// https://www.youtube.com/watch?v=LmL0Gh193M0

// Destructuring - Hvis du har store objekter, og bare skal bruge en eller 2 værdier.
var foo = {
    bar: 1,
    baz: 2,
};

// Normalt
var bar = foo.bar;
var baz = foo.baz;

// With destructuring
var { bar, baz } = foo;

console.log(bar);

// Destructuring array
var tenses = ["me", "you", "he"];

var [ firstPerson, secoundPerson ] = tenses; // firstPerson tager første elemt i arrayet osv.

// Destructuring with arrays kan bruges ved Promise.all()
Promise.all([promise1, promise2]).then(function(results) {
    var[ results1 ] = results;
});

// Det er også muligt at destructuring argumenterne i callbacken.
Promise.all([promise1, promise2]).then(function([results1, results2]) {
    results1
    results2
});

// Destructuring objects.
var foo = 2;

var obj = {
    bar: 1,
    foo, // Hvis foo variablen eksister, og du vil have den value så skriver du foo i stedet for foo: 2
}

// Eksempel på ovenstående.
var name = "will";
var age = 34;

some.method({ name, age }); // pases in the values from the object.
{
    name: name;
    age: age,
}

// Destructuring arguments
// Muligt at ændre navnene når de kommer ind: function calcBmi(weight: w, height: h, max = 25, callback) {...}
function calcBmi(weight, height, max = 25, callback) { //  max = 25 betyder default
    var bmi = weight / Math.pow(height, 2);
    if(bmi > max) {
        console.log("you're overweight");
    }
    if(opts.callback) {
        callback(bmi);
    }
}

calcBmi({ weight, height, max: 25 });
calcBmi({ weight, height, callback: function() {} });

// Template strings
// Normalt.
var name = "will";
var thing = "party";
var greet = "Hi, my name is \n" + name + "and I like to \n" + thing + ".";

// Med template string brug backtic.
// $ betyder led efter den variable og sæt den ind.
// // Flere linjer.
var greet = `hi, my name is ${name} 
    and I like to 
    ${thing}`;

// scope
var a = 1;

// function scoping
function() {
    var b = 2;
}

console.log(b); // Skriver ikke noget ud, da b ikke er i scopet.

// Block scoping
// Block scope giver mulighed for at bruge let i stedet for var i if statements, if else og loops.
if(true) {
    var c = 2;
}

console.log(c); // 2 da var c hoistes.

// const har block scope og kan ikke skrives over.

// Classes
class Parent {
    age = 34;

    constructor() {

    }

    static foo() {

    }

    bar() {

    }
}

var Parent = new Parent();

var Parent.foo();

class Child extends Parent {
    constructor() {
        super();
    }

    baz() {

    }
}

var child = new child();
child.bar();

// Arrow functions
var foo = function(a, b) {
    return a + b;
}

var foo = (a, b) => {
    return a + b;
}

// generator functions

