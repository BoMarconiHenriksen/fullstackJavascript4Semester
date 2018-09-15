/* 
Som udgangspunkt referer this til det globale objekt.

Hvis en funktion bruger this i sin body kan værdien(af this) blive bundet til
    et bestem objekt ved at kalde bind, call eller apply.

call kalder funktionen, og gør det muligt at pass argumenter en ad gangen.
    Brug den ved komma seperede liste.
    Udføres med det samme.
apply kalder funktionen, og gør det muligt at pass argumenter som et array.
    Brug den ved arrays.
    Udføres med det samme.
bind returner en ny funktion, og det muligt at pass ind this som argument og yderligere argumenter.
    Kan bruges ved events f.eks. onclick.
*/

// call
let person1 = { firstName: "Jon", lastName: "Kuperman" };
let person2 = { firstName: "Kelly", lastName: "King" };

function sayUndefined() {
  console.log(this.firstName + " " + this.lastName);
}

/* function say(greeting) {
    console.log(greeting + " " + this.firstName + " " + this.lastName);
  }  */

sayUndefined(person1, "Hello"); // undefined undefined - this referer til det globale objekt.

say.call(person1, "Hello"); // Hello Jon Kuperman
say.call(person2, "Hello"); // Hello Kelly King

// apply
let person1 = { firstName: "Jon", lastName: "Kuperman" };
let person2 = { firstName: "Kelly", lastName: "King" };

function say(greeting) {
  console.log(greeting + " " + this.firstName + " " + this.lastName);
}

say.apply(person1, ["Hello"]); // Hello Jon Kuperman
say.apply(person2, ["Hello"]); // Hello Kelly King

// Brug apply til at lægge et array sammen med et eksisterende array.
let array = ["a", "b"];
let elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]

//bind
let person1 = { firstName: "Jon", lastName: "Kuperman" };
let person2 = { firstName: "Kelly", lastName: "King" };

function say() {
  console.log("Hello " + this.firstName + " " + this.lastName);
}

let sayHelloJon = say.bind(person1);
let sayHelloKelly = say.bind(person2);

sayHelloJon(); // Hello Jon Kuperman
sayHelloKelly(); // Hello Kelly King
