// DESTRUCTURING af et objekt.
// Pakke værdierne fra et array eller properties fra et objekt ud og lægge det i variabler.
let Person = {firstName: "Bob", lastName: "Hansen"};

// Normalt
let forNavn = Person.firstName;
let efterNavn = Person.lastName;
// console.log(forNavn, efterNavn); // Bob Hansen

// Med deconstruct
let {firstName, lastName} = Person;

// console.log(firstName, lastName); // Bob Hansen

// Array
var foo = ['one', 'two', 'three'];

var [one, two, three] = foo;
/* console.log(one); // "one"
console.log(two); // "two"
console.log(three); */ // "three"

// Tildel resten af et array til en variabel.
// rest parametere kan blive destructured(kun arrays) dvs resten af variablerne bliver lagt i en variabel.
let [a, ...b] = [1, 2, 3];
// console.log(a); // 1
// console.log(b); // [2, 3]

// Eksempel på at bytte plads med dekonstruction.
let e = "Første", f =  "Andet";
// console.log(e, f); // Første Andet

// 2 variabler kan bytte plads i en deconstruct expression.
[e , f] = [f , e] 

// console.log(e, f); // Andet Første
